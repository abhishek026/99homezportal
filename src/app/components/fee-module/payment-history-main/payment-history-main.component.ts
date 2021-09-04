import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { HttpService } from '../../../services/http.service';
import { role } from '../../../model/role_features';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { CommonServiceFactory } from '../../../services/common-service';
import { ExcelService } from '../../../services/excel.service';
import { ExportToPdfService } from '../../../services/export-to-pdf.service';
import { MessageShowService } from '../../../services/message-show.service';
import { PaymentHistoryMainService } from '../../../services/payment-history/payment-history-main.service';
import { TablePreferencesService } from '../../../services/table-preference/table-preferences.service';
import { DataDisplayTableComponent } from '../../shared/data-display-table/data-display-table.component';
import { ColumnData2 } from '../../shared/data-display-table/data-display-table.model';


@Component({
  selector: 'app-payment-history-main',
  templateUrl: './payment-history-main.component.html',
  styleUrls: ['./payment-history-main.component.scss']
})
export class PaymentHistoryMainComponent implements OnInit {

  @ViewChild('child', { static: true }) private child: DataDisplayTableComponent;
  downloadFeeReportAccess: boolean = false;
  allPaymentRecords: any[] = [];
  tempRecords: any[] = [];
  newData: any[] = [];
  displayKeys: any = [];
  perPersonData: any[] = [];
  feeSettings1: ColumnData2[] = [
    { primaryKey: 'student_disp_id', header: 'ID', priority: 1, allowSortingFlag: true },
    { primaryKey: 'student_name', header: 'Name', priority: 2, allowSortingFlag: true },
    { primaryKey: 'parent_name', header: "Parent Name", priority: 3, allowSortingFlag: true },
    { primaryKey: 'master_course_name', header: "Master Course", priority: 4, allowSortingFlag: true },
    { primaryKey: 'course_subject_name', header: "Course", priority: 5, allowSortingFlag: true },
    { primaryKey: 'display_invoice_no', header: 'Receipt No', priority: 7, allowSortingFlag: true },
    { primaryKey: 'paymentMode', header: 'Payment Mode', priority: 8, allowSortingFlag: true },
    { primaryKey: 'fee_type_name', header: 'Fee Type', priority: 9, allowSortingFlag: true },
    { primaryKey: 'installment_nos', header: 'Inst No', priority: 10, allowSortingFlag: true },
    { primaryKey: 'paid_date', header: 'Paid Date', priority: 11, allowSortingFlag: true },
    { primaryKey: 'remarks', header: 'Remarks', priority: 12, allowSortingFlag: true },
    { primaryKey: 'reference_no', header: 'Ref No', priority: 13, allowSortingFlag: true },
    { primaryKey: 'amount_paid', header: 'Amount Paid', priority: 14, amountValue: true, allowSortingFlag: true },
    { primaryKey: 'enquiry_counsellor_name', header: 'Counsellor', priority: 15, allowSortingFlag: true },
    { primaryKey: 'cheque_no', header: 'Cheque Number', priority: 16, allowSortingFlag: true },
    { primaryKey: 'student_category', header: 'Status', priority: 17, allowSortingFlag: true },


  ];
  userList: any = [];
  paymentMode = [];
  chequeStatus: any = [{ value: 1, title: '' }, { value: 2, title: 'Dishonoured' }, { value: 3, title: 'Cleared' }];
  flagJson: any = {
    searchflag: false,
    isChequePayment: false,
    addReportPopUp: false,
    showPreference: false,
    showAdmin: false,
    paymentCounseller: false
  };
  varJson: any = {
    searchText: "",
    sortedBy: "",
    searchBy: 'date',
    searchName: "",
    tempData: {},
    total_amt_paid: 0,
  };
  personData: any = {
    paid_date: "",
    paymentMode: "",
    remarks: "",
    reference_no: "",
    invoice_no: "",
  };
  //payment history table settings
  tableSetting: any = {
    tableDetails: { title: 'Payment History', key: 'reports.fee.paymentHistory', showTitle: false },
    search: { title: 'Search', showSearch: false },
    keys: this.displayKeys,
    selectAll: { showSelectAll: false, option: 'single', title: 'Purchase Item', checked: true, key: 'student_disp_id' },
    actionSetting: {},
    displayMessage: "Enter Detail to Search"
  };
  sendPayload = {
    institute_id: this.payment.institute_id,
    from_date: moment().format('YYYY-MM-DD'),
    to_date: moment().format('YYYY-MM-DD'),
    payment_history_student_category_option: 2,
    student_name: "",
    contact_no: "",
    user_id: -1
  }
  collectionData: any = {
    pdcNo: 0,
    refundValue: 0,
    cash: 0,
    cardValue: 0,
    fees_amount: 0
  }
  updatedResult: any = {
    feeSchedule_TxLst: {
      schedule_id: "",
      amount_paid: "",
      balance_amount: "",
      payment_tx_id: ""
    },
    fee_receipt_update_reason: "",
    financial_year: "",
    invoice_no: "",
    old_invoice_no: "",
    paid_date: moment(new Date()).format("DD-MM-YYYY"),
    paymentMode: "",
    reference_no: "",
    remarks: "",
    student_id: ""
  }
  chequeDetailsJson: any = {
    bank_name: "",
    cheque_date: "",
    cheque_no: "",
    cheque_status_id: "1"
  }
  role_feature = role.features;

  constructor(
    private payment: PaymentHistoryMainService,
    private excelService: ExcelService,
    private msgService: MessageShowService,
    private pdf: ExportToPdfService,
    private ref: ChangeDetectorRef,
    private auth: AuthenticatorService,
    private _tablePreferencesService: TablePreferencesService,
    private _commService: CommonServiceFactory,
    private http:HttpService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.getAllPaymentHistory();

    if (sessionStorage.getItem('permissions')) {
      let permissions = JSON.parse(sessionStorage.getItem('permissions'));
        this.tableSetting.actionSetting =
        {
          showActionButton: true,
          editOption: 'button',//or popup
          condition: [{ key: 'student_category', condition: "==", checkValue: "Active", nextOperation: "&&" },
          { key: 'paymentMode', condition: "!=", checkValue: "Online Payment", nextOperation: undefined }],
          // { key: 'pdc_cheque_id', condition: "==", checkValue: [null, -1], insideOperation: "||", outerOperation: "&&", nextOperation: undefined }],
          options: [{ title: "Edit", class: 'fa fa-check updateCss' }]
        }
      }
      else {
        this.tableSetting.actionSetting =
        {
          showActionButton: false,
          editOption: '',
          condition: [],
          options: []
        }
      }

    if (sessionStorage.getItem('permissions') == undefined || sessionStorage.getItem('permissions') == ''
      || sessionStorage.getItem('username') == 'admin') {
      this.tableSetting.actionSetting =
      {
        showActionButton: false,
        editOption: 'button',//or popup
        condition: [{ key: 'student_category', condition: "==", checkValue: "Active", nextOperation: "&&" },
        { key: 'paymentMode', condition: "!=", checkValue: "Online Payment", nextOperation: undefined }],
        //{ key: 'pdc_cheque_id', condition: "==", checkValue: [null, -1], insideOperation: "||", outerOperation: "&&", nextOperation: undefined }
        options: [{ title: "Edit", class: 'fa fa-check updateCss' }]
      }
      this.flagJson.showAdmin = true;
      this.getUserList();
    }

    let permissions: any = [];
    permissions = sessionStorage.getItem('permissions');

    if (permissions.includes('717')) {
      this.flagJson.paymentCounseller = true;
      this.getUserList();
    }

    this.tableSetting.keys = this.feeSettings1;
    if (this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key) != null) {
      this.displayKeys = this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key);
      this.tableSetting.keys = this.displayKeys;
      if (this.displayKeys.length == 0) {
        this.setDefaultValues();
      }
    }
    else {
      this.setDefaultValues();
    }
    // console.log(this.tableSetting)
    this.checkDownloadRoleAccess();
  }

  checkDownloadRoleAccess() {
    if (sessionStorage.getItem('downloadFeeReportAccess') == 'true') {
      this.downloadFeeReportAccess = true;
    }
  }

  // set default preferences to payment history table
  setDefaultValues() {
    this.tableSetting.keys = [
      { primaryKey: 'student_disp_id', header: 'ID', priority: 1, allowSortingFlag: true },
      { primaryKey: 'student_name', header: 'Name', priority: 2, allowSortingFlag: true },
      { primaryKey: 'parent_name', header: "Parent Name", priority: 3, allowSortingFlag: true },
      { primaryKey: 'display_invoice_no', header: 'Receipt No', priority: 4, allowSortingFlag: true },
    ];
    this.displayKeys = this.tableSetting.keys;
    this._tablePreferencesService.setTablePreferences(this.tableSetting.tableDetails.key, this.displayKeys);
  }

  getUserList() {
    let object = {
      "is_not_alr_users": "N",
      "user_Type": "0",
      "app_downloaded": -1,
      user_id: Number(this.sendPayload.user_id)
    }

    this.auth.showLoader();
    this.payment.getUserList(object, 'Y').subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.userList = res;
        // console.log(this.userList);
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
      });

  }

  getAllPaymentHistory() {
    this.auth.showLoader();
    this.allPaymentRecords = this.tempRecords;
    if (this.varJson.searchName != "" || this.varJson.searchName != null) {
      if (this.isName(this.varJson.searchName)) {
        this.sendPayload.contact_no = "";
        this.sendPayload.student_name = this.varJson.searchName;
      }
      else {
        this.sendPayload.student_name = "";
        this.sendPayload.contact_no = this.varJson.searchName;
      }
    }
    if (this.flagJson.searchflag) {
      this.auth.hideLoader();
      if (this.allPaymentRecords.length == 0) {
        this.tableSetting.displayMessage = "Data not found";
      }
      this.flagJson.searchflag = false;
      return;
    }
    else {

      let permissions: any = [];
      permissions = sessionStorage.getItem('permissions');

      if (sessionStorage.getItem('permissions') == undefined || sessionStorage.getItem('permissions') == '' || sessionStorage.getItem('username') == 'admin' || permissions.includes('717')) {
        this.sendPayload.user_id = Number(this.sendPayload.user_id);
      } else {
        this.sendPayload.user_id = Number(sessionStorage.getItem('userid'));
      }
      this.payment.getPaymentData(this.sendPayload).subscribe(
        (data: any) => {
          if (data.length == 0) {
            this.tableSetting.displayMessage = "Data not found";
          }
          this.allPaymentRecords = data;
          this.tempRecords = data;
          this.newData = data.map((ele: any) => ele.paymentModeAmountMap
          );

          if (this.newData.length) {
            this.auth.hideLoader();
            /* update CollectionObject Data for display */
          }
          else {
            this.auth.hideLoader();
          }

          if (sessionStorage.getItem('permissions') == undefined || sessionStorage.getItem('permissions') == '' || sessionStorage.getItem('username') == 'admin') {
            this.tableSetting.actionSetting =
            {
              showActionButton: true,
              editOption: 'button',//or popup
              condition: [{ key: 'student_category', condition: "==", checkValue: "Active", nextOperation: "&&" },
              { key: 'paymentMode', condition: "!=", checkValue: "Online Payment", nextOperation: undefined }],
              // { key: 'pdc_cheque_id', condition: "==", checkValue: [null, -1], insideOperation: "||", outerOperation: "&&", nextOperation: undefined }
              options: [{ title: "Edit", class: 'fa fa-check updateCss' }]
            }
            this.flagJson.showAdmin = true;
          }
        },
        (error: any) => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', error.error.message)
        })
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

  // take print of report
  takePrint() {
    let printHtml = '<html><body><table><thead><tr>';
    this.tableSetting.keys.forEach(key => {
      printHtml += '<th>' + key.header + '</th>';
    });
    printHtml += '</tr></thead><tbody>';
    this.allPaymentRecords.forEach((record) => {
      printHtml += '<tr>';
      this.tableSetting.keys.forEach(key => {
        printHtml += '<td>' + record[key["primaryKey"]] + '</td>';
      });
      printHtml += '</tr>';
    })

    printHtml += '</tbody></body></html>';
    let divToPrint = document.getElementById("printDiv");
    let newWin = window.open("");
    newWin.document.write(printHtml);
    newWin.print();
    newWin.close();
  }

  closeReportPopup() {
    this.flagJson.addReportPopUp = false;
  }

  searchByValue(value) {
    this.varJson.searchName = "";
    this.varJson.searchBy = value;
    this.sendPayload.payment_history_student_category_option = this.varJson.searchBy == 'name' ? 0 : 2;
  }

  searchDatabase() {
    if (this.varJson.searchText != "" && this.varJson.searchText != null) {
      this.allPaymentRecords = this.tempRecords.filter(item =>
        Object.keys(item).some(
          k => item[k] != null && item[k].toString().toLowerCase().includes(this.varJson.searchText.toLowerCase()))
      );
      this.flagJson.searchflag = true;
    }
    else {
      this.allPaymentRecords = this.tempRecords;
      this.flagJson.searchflag = false;
    }
    // console.log(this.allPaymentRecords);
  }

  futureDateValid(selectDate) {
    if (moment(selectDate).diff(moment()) > 0) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.info, '', 'You cannot select future date');
      this.auth.hideLoader();
      this.sendPayload.from_date = moment().format('YYYY-MM-DD');
      this.sendPayload.to_date = moment().format('YYYY-MM-DD');
    }
  }

  updateAmount(index, totalAmount) {
    if (totalAmount == '') {
      totalAmount = 0;
    }
    if (totalAmount.toString().indexOf(".") == -1) {
      let bal = this.perPersonData[index].fees_amount;
      if (totalAmount == 0) {
        this.perPersonData[index].balance_amount = this.perPersonData[index].temp_balance_amount;
        this.perPersonData[index].amount_paid = this.perPersonData[index].temp_amount_paid;

      }
      if (this.perPersonData[index].fees_amount >= totalAmount) {
        this.perPersonData[index].balance_amount = this.perPersonData[index].fees_amount - totalAmount;
        this.perPersonData[index].amount_paid = totalAmount;

      }

      if (totalAmount <= this.perPersonData[index].temp_amount_paid || (totalAmount <= bal && isNaN(totalAmount))) {
        this.perPersonData[index].balance_amount = this.perPersonData[index].fees_amount - totalAmount;
        this.perPersonData[index].amount_paid = totalAmount;
      }
      else if (totalAmount > bal) {
        if (confirm("Invalid value for Amount Paid")) {
          this.perPersonData[index].amount_paid = this.perPersonData[index].temp_amount_paid;
          this.perPersonData[index].balance_amount = this.perPersonData[index].temp_balance_amount;
          (<HTMLInputElement>document.getElementById("inputAmount-" + index)).value = this.perPersonData[index].amount_paid;
          (<HTMLInputElement>document.getElementById("balanceAmount-" + index)).value = this.perPersonData[index].balance_amount;
        }
      }

    }
    else {
      this.msgService.showErrorMessage('error', "", 'Please Enter Number Only ');
    }
    console.log(this.perPersonData);

    //installment total amount
    let total = 0;
    this.perPersonData.forEach((element, index) => {
      total += element.amount_paid;
    });
    this.varJson.total_amt_paid = total;
  }

  // this sued for edit
  optionSelected(e) {
    if(this.paymentMode.length==0){
      this.getPaymentModes();
    }
    this.personData = e.data;
    this.updatedResult.paid_date = moment(e.data.paid_date).format("YYYY-MM-DD");
    this.chequeDetailsJson = [];
    this.varJson.tempData = {};
    this.payment.getPerPersonData(e.data.financial_year, e.data.invoice_no).subscribe(
      (data: any) => {
        this.varJson.tempData = this.keepCloning(data);
        if (data.chequeDetailsJson != null || data.chequeDetailsJson == "") {
          this.chequeDetailsJson = data.chequeDetailsJson;
        }
        if (data.feeSchedule_TxLst.length > 0) {
          this.perPersonData = data.feeSchedule_TxLst;
          this.updatedResult.paymentMode = this.perPersonData[0].paymentMode;
          this.updatedResult.fee_receipt_update_reason = " ";
          this.updatedResult.remarks = data.remarks;
          this.updatedResult.reference_no= data.reference_no;
          let totalAmount = 0;
          this.perPersonData.forEach((element, index) => {
            totalAmount += element.amount_paid;
            element.temp_amount_paid = element.amount_paid;
            element.temp_balance_amount = element.balance_amount;
          });
          this.varJson.total_amt_paid = totalAmount;
          if (this.updatedResult.paymentMode == "Cheque/PDC/DD No.") {
            this.flagJson.isChequePayment = false;
          }
          else {
            this.flagJson.isChequePayment = false;
          }
          this.flagJson.addReportPopUp = true;
        }
      },
      (error: any) => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', error.error.message);
      }
    )
  }

  updationOfPerPersonData() {
    if (this.personData.invoice_no != null && this.personData.invoice_no != '' && this.personData.invoice_no != undefined && this.personData.invoice_no != 0) {

      if (this.updatedResult.fee_receipt_update_reason.trim() != "" && this.updatedResult.fee_receipt_update_reason != null) {

        if (this.flagJson.isChequePayment) {

          if (this.chequeDetailsJson.bank_name == "" || this.chequeDetailsJson.cheque_no == "" ||
            this.chequeDetailsJson.cheque_date == "" || this.chequeDetailsJson.cheque_status_id == "") {
            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'All bank details are required');
          }
          else {
            let feeSchedule_TxLst = this.fetchhStudentPaymentJson(this.perPersonData);
            if (feeSchedule_TxLst == false) {
              return
            }
            this.chequeDetailsJson.cheque_date = moment(this.chequeDetailsJson.cheque_date).format('YYYY-MM-DD');

            let obj = {
              chequeDetailsJson: Object.assign({}, this.chequeDetailsJson),
              feeSchedule_TxLst: feeSchedule_TxLst,
              fee_receipt_update_reason: this.updatedResult.fee_receipt_update_reason,
              financial_year: this.personData.financial_year,
              invoice_no: this.personData.invoice_no,
              old_invoice_no: this.personData.invoice_no,
              paid_date: moment(this.updatedResult.paid_date).format("YYYY-MM-DD"),
              paymentMode: this.updatedResult.paymentMode,
              reference_no: this.updatedResult.reference_no,
              remarks: this.updatedResult.remarks,
              student_id: this.perPersonData[0].student_id
            }
            this.payment.updatePerPersonData(obj).subscribe(
              (data: any) => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, "Fee reciept updated successfully", '');
                this.chequeDetailsJson = {
                  bank_name: "",
                  cheque_date: "",
                  cheque_no: "",
                  cheque_status_id: ""
                }
                this.getAllPaymentHistory();
                this.updatedResult.fee_receipt_update_reason = " ";
                this.flagJson.addReportPopUp = false;
              },
              err => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
              }
            );
          }
        }

        else {
          let feeSchedule_TxLst = this.fetchhStudentPaymentJson(this.perPersonData);
          if (feeSchedule_TxLst == false) {
            return
          }
          let obj = {
            feeSchedule_TxLst: feeSchedule_TxLst,
            fee_receipt_update_reason: this.updatedResult.fee_receipt_update_reason,
            financial_year: this.personData.financial_year,
            invoice_no: this.personData.invoice_no,
            old_invoice_no: this.personData.invoice_no,
            paid_date: moment(this.updatedResult.paid_date).format("YYYY-MM-DD"),
            paymentMode: this.updatedResult.paymentMode,
            reference_no: this.updatedResult.reference_no,
            remarks: this.updatedResult.remarks,
            student_id: this.perPersonData[0].student_id,
          }
          this.payment.updatePerPersonData(obj).subscribe(
            (data: any) => {
              this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Fee receipt updated successfully!');
              this.getAllPaymentHistory();
              this.updatedResult.fee_receipt_update_reason = " ";
              this.flagJson.addReportPopUp = false;
            },
            (error: any) => {
              this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', error.error.message);
            }
          );
        }
      }
      else {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Fee update Reason Can not be empty', '');
      }
    }
    else {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Receipt Number Can not be empty!', '');
    }
  }


  fetchhStudentPaymentJson(data: any[]) {
    let temp: any[] = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < this.varJson.tempData.feeSchedule_TxLst.length; j++) {
        data[i].amount_paid = Number(data[i].amount_paid);
        if (data[i].schedule_id == this.varJson.tempData.feeSchedule_TxLst[j].schedule_id) {
          if (data[i].amount_paid != this.varJson.tempData.feeSchedule_TxLst[j].amount_paid) {
            if (data[i].amount_paid > this.varJson.tempData.feeSchedule_TxLst[j].amount_paid) {
              // You can not increase amount
              this.msgService.showErrorMessage(this.msgService.toastTypes.error, "You can't increase the paid amount!", '');
              return false
            }
            else if (data[i].amount_paid < this.varJson.tempData.feeSchedule_TxLst[j].amount_paid) {
              // If Amount decreased
              let diff = this.varJson.tempData.feeSchedule_TxLst[j].amount_paid - data[i].amount_paid;
              let obj: any = {
                schedule_id: data[i].schedule_id,
                payment_tx_id: data[i].payment_tx_id,
                amount_paid: data[i].amount_paid,
                balance_amount: this.varJson.tempData.feeSchedule_TxLst[j].balance_amount + diff
              }
              temp.push(obj);
            } else {
              // If Amount is equal
              let obj = {
                schedule_id: data[i].schedule_id,
                payment_tx_id: data[i].payment_tx_id,
                amount_paid: data[i].amount_paid,
                balance_amount: data[i].balance_amount
              }
              temp.push(obj);
            }
          }
          else {
            // If Amount is equal
            let obj = {
              schedule_id: data[i].schedule_id,
              payment_tx_id: data[i].payment_tx_id,
              amount_paid: data[i].amount_paid,
              balance_amount: data[i].balance_amount
            }
            temp.push(obj);
          }
        }
      }
    }
    return temp;
  }

  exportToExcel() {
    let exportedArray: any[] = [];
    this.allPaymentRecords.map((data: any) => {
      let obj = {};
      obj["Id"] = data.student_disp_id;
      obj["Name"] = data.student_name;
      obj["Master Course"] = data.master_course_name;
      if (sessionStorage.getItem('course_structure_flag') != "0") {
        obj["Course"] = data.course_subject_name;
      }
      else {
        obj["Subject"] = data.course_subject_name;
      }
      obj["Parent Name"] = data.parent_name;
      obj["Reciept No"] = data.display_invoice_no;
      obj["Payment Mode"] = data.paymentMode;
      obj["Fee Type"] = data.fee_type_name;
      obj["Inst No"] = data.installment_nos;
      obj["Paid Date"] = data.paid_date;
      obj["Reference No"] = data.reference_no;
      obj["Remarks"] = data.remarks;
      obj["Amount Paid"] = data.amount_paid;
      obj["Student_Category"] = data.student_category;
      obj["Counsellor"] = data.enquiry_counsellor_name;
      obj['Cheque Number'] = data.cheque_no;
      exportedArray.push(obj);
    })
    this.excelService.exportAsExcelFile(
      exportedArray,
      'Students'
    )
  }

  updateStudentFee(event, index) {
    let e = event.target.value;
    if (e != "") {
      if (parseInt(e) <= parseInt(this.perPersonData[index].fees_amount)) {
        this.perPersonData[index].balance_amount = parseInt(this.perPersonData[index].fees_amount) - parseInt(e);
      }
      else {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Invalid value for Amount Paid', '');
        this.perPersonData[index].amount_paid = this.perPersonData[index].fees_amount;
        this.perPersonData[index].balance_amount = parseInt(this.perPersonData[index].fees_amount) - parseInt(e);
      }
    }
  }

  // give option add payment details add
  payModeUpdated(e) {
    this.flagJson.isChequePayment = e == "Cheque/PDC/DD No." ? true : false;
  }

  //open preference popup
  openPreferences() {
    this.flagJson.showPreference = true;
  }

  //close preference popup
  closePopup(e) {
    let array = ['showPreference'];
    for (let key in array) {
      this.flagJson[array[key]] = false;
    }
    if (e) {
      if (this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key) != null) {
        this.displayKeys = this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key);
        this.tableSetting.keys = this.displayKeys;
        if (e.callNotify) {
          this.child.notifyMe(this.tableSetting);
        }
        this.ref.markForCheck();
        this.ref.detectChanges();
      }
    }
    console.log(this.displayKeys);
  }

  isChequeFormValid(): boolean {
    if (this.chequeDetailsJson.bank_name.trim() != "") {
      if (this.chequeDetailsJson.cheque_no != 0 && this.chequeDetailsJson.cheque_no != null) {
        return true
      }
      else {
        return false
      }
    }
    else {
      return false;
    }
  }


  keepCloning(objectpassed) {
    if (objectpassed === null || typeof objectpassed !== 'object') {
      return objectpassed;
    }
    let temporaryStorage = objectpassed.constructor();
    for (var key in objectpassed) {
      temporaryStorage[key] = this.keepCloning(objectpassed[key]);
    }
    return temporaryStorage;
  }

  exportToPdf() {
    let arr = [];
    this.allPaymentRecords.map(
      (ele: any) => {
        let json = [
          ele.student_disp_id,
          ele.student_name,
          ele.master_course_name,
          ele.course_subject_name,
          ele.parent_name,
          ele.display_invoice_no,
          ele.paymentMode,
          ele.fee_type_name,
          ele.installment_nos,
          ele.paid_date,
          ele.remarks,
          ele.reference_no,
          ele.amount_paid,
          ele.enquiry_counsellor_name,
          ele.cheque_no
        ]
        arr.push(json);
      })

    let rows = [];
    if (sessionStorage.getItem('course_structure_flag') != "0") {
      rows = [['ID', 'Name', "Master Course", "Course", 'Parent Name', 'Reciept No', 'Payment Mode', 'Fee Type', 'Installment No', 'Paid Date', 'Remarks', 'Reference No', 'Amount Paid', 'Counsellor', 'Cheque Number']]
    }
    else {
      rows = [['ID', 'Name', "Master Course", "Subject", 'Parent Name', 'Reciept No', 'Payment Mode', 'Fee Type', 'Installment No', 'Paid Date', 'Remarks', 'Reference No', 'Amount Paid', 'Counsellor', 'Cheque Number']]
    }

    let columns = arr;
    this.pdf.exportToPdf(rows, columns, 'Payment_History_report');
  }
  getPaymentModes() {
    this.http.getData('/api/v1/masterData/type/PAYMENT_MODES').subscribe(
      (res: any) => {
        this.paymentMode = res;
      },
      err => {
        console.log(err);
      }
    )
  }
}
