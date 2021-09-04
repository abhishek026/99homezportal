import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MenuItem } from 'primeng/primeng';
import { AppComponent } from '../../../app.component';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { ExcelService } from '../../../services/excel.service';
import { ExportToPdfService } from '../../../services/export-to-pdf.service';
import { PaymentHistoryMainService } from '../../../services/payment-history/payment-history-main.service';
import { DropData } from '../../shared/ng-robAdvanceTable/dropmenu/dropmenu.model';
import { ColumnData } from '../../shared/ng-robAdvanceTable/ng-robAdvanceTable.model';
import { CommonServiceFactory } from './../../../services/common-service';

@Component({
  selector: 'app-inactive-student-report',
  templateUrl: './inactive-student-report.component.html',
  styleUrls: ['./inactive-student-report.component.scss']
})
export class InactiveStudentReportComponent implements OnInit {


  sendPayload = {
    institute_id: this.payment.institute_id,
    from_date: moment().format('YYYY-MM-DD'),
    to_date: moment().format('YYYY-MM-DD'),
    payment_history_student_category_option: 1,
    student_name: "",
    contact_no: ""
  }
  bulkAddItems: MenuItem[] = []
  allPaymentRecords: any[] = [];
  tempRecords: any[] = [];

  showPaymentBox: boolean = false;
  searchText = "";
  searchData = [];
  searchflag: boolean = false;

  personData: any = {
    paid_date: "",
    paymentMode: "",
    remarks: "",
    reference_no: "",
    invoice_no: "",
  }

  searchByNameVisible: boolean = false;
  searchByDateVisible: boolean = true;
  newData: any[] = [];
  paymentMode: any[] = [];
  searchName: any;

  helpMsg4: string = " Fee(s) collected from inactive students";
  helpMsg1: string = "Fee(s)collected from students whose fee structure has been revised.It basically contains the records as per the old fee structure.";
  helpMsg2: string = " Fee(s)collected from archived students";

  feeSettings1: ColumnData[] = [
    { primaryKey: 'student_disp_id', header: 'ID' },
    { primaryKey: 'student_name', header: 'Name' },
    { primaryKey: 'display_invoice_no', header: 'Receipt No' },
    { primaryKey: 'paymentMode', header: 'Payment Mode' },
    { primaryKey: 'fee_type_name', header: 'Fee Type' },
    { primaryKey: 'installment_nos', header: 'Inst No' },
    { primaryKey: 'paid_date', header: 'Paid Date' },
    { primaryKey: 'reference_no', header: 'Ref No' },
    { primaryKey: 'amount_paid', header: 'Amount Paid' },
    { primaryKey: 'student_category', header: 'Student Category' },
    { primaryKey: 'enquiry_counsellor_name', header: 'Counsellor' }
  ];

  menuOptions: DropData[] = [
    {
      key: 'edit',
      header: 'edit',
    }
  ];
  dataStatus: number = 0;


  temporaryRecords: any[] = [];

  constructor(
    private payment: PaymentHistoryMainService, 
    private excelService: ExcelService, 
    private appc: AppComponent, 
    private pdf: ExportToPdfService,
    private commonService:CommonServiceFactory,
    private auth:AuthenticatorService,
  ) { }


  ngOnInit() {
    this.getAllPaymentHistory();
    this.bulkAddItems = [
      {
        label: 'Pdf Download', icon: 'fa-download', command: () => {
          this.exportToPdf();
        }
      },
      {
        label: 'Excel Download', icon: 'fa-download', command: () => {
          this.exportToExcel();
        }
      }
    ];
  }


  getAllPaymentHistory() {
    this.showPaymentBox = true;
    this.auth.showLoader();
    // this.newData = [];
    this.allPaymentRecords = this.tempRecords;
    this.dataStatus = 1;
    if (this.searchName != "" || this.searchName != null) {
      if (this.isName(this.searchName)) {
        this.sendPayload.contact_no = "";
        this.sendPayload.student_name = this.searchName;
      }
      else {
        this.sendPayload.student_name = "";
        this.sendPayload.contact_no = this.searchName;
      }
    }

    if (this.searchflag) {
      this.auth.hideLoader();
      if (this.allPaymentRecords.length == 0) {
        this.dataStatus = 2;
      }
      else {
        this.dataStatus = 0;
      }
      this.searchflag = false;
      return;
    }
    else {
      this.payment.getPaymentData(this.sendPayload).subscribe(
        (data: any) => {
          this.temporaryRecords = data;
          if (data.length == 0) {
            this.dataStatus = 2;
          }
          else {
            this.dataStatus = 0;
          }
          this.allPaymentRecords = data.filter((ele: any) => {
            if (ele.student_category == "historical") {
              return false;
            }
            else {
              return true;
            }
          });
          this.tempRecords = data.filter((ele: any) => {
            if (ele.student_category == "historical") {
              return false;
            }
            else {
              return true;
            }
          });
          this.newData = data.map((ele: any) => ele.paymentModeAmountMap
          );

          if (this.newData.length) {
            this.auth.hideLoader();
            /* update CollectionObject Data for display */
          }
          else {
            this.auth.hideLoader();
            this.dataStatus = 2;
          }

        },
        (error: any) => {
          this.dataStatus = 2;
          // this.dataStatus = 0;
          this.auth.hideLoader();
          let msg = {
            type: "error",
            body: error.error.message
          }
          this.appc.popToast(msg);
        }
      )

    }
  }


  isName(str) {
    let hasNumber = /\d/;
    if (hasNumber.test(str)) {
      return false;
    }
    else {
      return true;
    }
  }

  searchByName() {
    this.sendPayload.from_date = "";
    this.sendPayload.to_date = "";
    this.searchByNameVisible = true;
    this.searchByDateVisible = false;
  }



  searchByDate() {
    this.searchName = "";
    this.searchByDateVisible = true;
    this.searchByNameVisible = false;
  }



  searchDatabase() {
    if (this.searchText != "" && this.searchText != null) {
      // let searchData: any;
      this.allPaymentRecords = this.allPaymentRecords.filter(item =>
        Object.keys(item).some(
          k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase()))
      );
      // this.searchData = searchData;
      this.searchflag = true;
    }
    else {
      this.allPaymentRecords = this.tempRecords;
      this.searchflag = false;
    }
  }


  futureDateValid(selectDate) {
    if (moment(selectDate).diff(moment()) > 0) {
      let msg = {
        type: "info",
        body: "You cannot select future date"
      }
      this.appc.popToast(msg);
      this.auth.hideLoader();
      this.sendPayload.from_date = moment().format('YYYY-MM-DD');
      this.sendPayload.to_date = moment().format('YYYY-MM-DD');
    }
  }


  exportToExcel() {
    let exportedArray: any[] = [];
    this.allPaymentRecords.map((data: any) => {
      let obj = {
        "Id": data.student_disp_id,
        "Name": data.student_name,
        "Reciept No": data.display_invoice_no,
        "Payment Mode": data.paymentMode,
        "Fee Type": data.fee_type_name,
        "Inst No": data.installment_nos,
        "Paid Date": data.paid_date,
        "Reference No": data.reference_no,
        "Amount Paid": data.amount_paid,
        "Student_Category": data.student_category,
        "Counsellor": data.enquiry_counsellor_name
      }
      console.log(obj);
      exportedArray.push(obj);
    })
    this.excelService.exportAsExcelFile(
      exportedArray,
      'Students'
    )
  }

  exportToPdf() {
    let arr = [];
    this.allPaymentRecords.map(
      (ele: any) => {
        let json = [
          ele.student_disp_id,
          ele.student_name,
          ele.display_invoice_no,
          ele.paymentMode,
          ele.fee_type_name,
          ele.installment_nos,
          ele.paid_date,
          ele.remarks,
          ele.reference_no,
          ele.amount_paid,
          ele.student_category,
          ele.enquiry_counsellor_name
        ]
        arr.push(json);
      })

    let rows = [['ID', 'Name', 'Reciept No', 'Payment Mode', 'Fee Type', 'Installment No', 'Paid Date', 'Remarks', 'Reference No', 'Amount Paid', 'Student Category', 'Counsellor']]
    let columns = arr;
    this.pdf.exportToPdf(rows, columns,'Student_Report');
  }

}







