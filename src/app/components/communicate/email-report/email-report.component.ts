import { Component } from '@angular/core';
import * as moment from 'moment';
import { AppComponent } from '../../../app.component';
import { getEmailService } from '../../../services/report-services/get-email.service';
import { ColumnSetting } from '../../shared/custom-table/layout.model';
import { AuthenticatorService } from './../../../services/authenticator.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-email-report',
  templateUrl: './email-report.component.html',
  styleUrls: ['./email-report.component.scss']
})

export class EmailReportComponent {
  sizeArr: any[] = [25, 50, 100, 150, 200, 500, 1000];
  pageIndex: number = 1;
  totalRecords: number = 0;
  displayBatchSize: number = 25;
  emailSource: any[] = [];
  emailDataSource: any = [];
  searchText = "";
  searchData = [];
  searchflag: boolean = false;
  dataStatus: boolean = true;
  isProfessional:boolean=false

  projectSettings: ColumnSetting[] = [
    { primaryKey: 'sentDateTime', header: 'Sent Date' },
    { primaryKey: 'emailId', header: 'Email' },
    { primaryKey: 'message', header: 'Subject' },
    { primaryKey: 'name', header: 'Name' },
    { primaryKey: 'role', header: 'Role' },
    { primaryKey: 'func_type', header: 'Type' }
  ];


  emailFetchForm: any = {
    institution_id: parseInt(sessionStorage.getItem('institute_id')),
    from_date: moment(new Date()).format('YYYY-MM-DD'),
    to_date: moment(new Date()).format('YYYY-MM-DD'),
  }

  constructor(
    private apiService: getEmailService,
    private appC: AppComponent,
    private auth: AuthenticatorService,
    private router: Router
  ) {
    this.switchActiveView('email');
  }

  headerSetting: any;
  tableSetting: any;
  rowColumns: any;

  setTableData() {
    this.headerSetting = [
      {
        primary_key: 'sentDateTime',
        value: "Sent Date",
        charactLimit: 25,
        sorting: true,
        visibility: true
      },
      {
        primary_key: 'emailId',
        value: "Email",
        charactLimit: 25,
        sorting: false,
        visibility: true
      },
      {
        primary_key: 'subject',
        value: "Subject",
        charactLimit: 60,
        sorting: false,
        visibility: true
      },
      {
        primary_key: 'message',
        value: "Message",
        charactLimit: 60,
        sorting: false,
        visibility: true
      },
      {
        primary_key: 'name',
        value: "Name",
        charactLimit: 20,
        sorting: false,
        visibility: true
      },
      {
        primary_key: 'role',
        value: "Role",
        charactLimit: 15,
        sorting: false,
        visibility: true
      },
      {
        primary_key: 'func_type',
        value: "Type",
        charactLimit: 30,
        sorting: false,
        visibility: true
      },

      // {
      //   primary_key: 'action',
      //   value: "Action",
      //   charactLimit: 10,
      //   sorting: false,
      //   visibility: true,
      //   edit: true,
      //   delete: true,
      //   // editCondition: 'converted == 0',
      //   // deleteCondition: 'converted == 0'
      // },
    ]

    this.tableSetting = {
      width: "100%",
      height: "58vh"
    }

    this.rowColumns = [
      {
        width: "15%",
        textAlign: "left"
      },
      {
        width: "15%",
        textAlign: "left"
      },
      {
        width: "15%",
        textAlign: "left"
      },
      {
        width: "25%",
        textAlign: "left"
      },
      {
        width: "10%",
        textAlign: "left"
      },
      {
        width: "10%",
        textAlign: "left"
      },
      {
        width: "10%",
        textAlign: "left"
      },

    ]
  }
  ngOnInit() {
    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.isProfessional = true;
        } else {
          this.isProfessional = false;
        }
      }
    )
    this.pageIndex = 1;
    this.setTableData();
    this.getAllEmailMessages();
  }

  getAllEmailMessages() {
    this.dataStatus = true;
    this.emailSource = [];
    this.auth.showLoader();
    let tempObj = {
      institution_id: parseInt(sessionStorage.getItem('institute_id')),
      from_date: moment(this.emailFetchForm.from_date).format('YYYY-MM-DD'),
      to_date: moment(this.emailFetchForm.to_date).format('YYYY-MM-DD'),
    }

    this.apiService.getEmailMessages(tempObj).subscribe(
      res => {
        this.auth.hideLoader();
        this.emailDataSource = res;
        this.totalRecords = res.length;
        if (res.length == 0) {
          this.dataStatus = false;
        }
        this.emailSource = this.getDataFromDataSource(0);
        //this.fetchTableDataByPage(this.pageIndex);
      },
      err => {
        this.dataStatus = false;
        this.auth.hideLoader();
      }
    );

  }


  isTimeValid(): boolean {
    let v = moment(this.emailFetchForm.from_date).diff(moment(this.emailFetchForm.to_date))
    if (v <= 0) {
      return true;
    }
    else {
      return false;
    }
  }

  fetchemailByDate() {
    if (this.isTimeValid()) {
      this.getAllEmailMessages();
    }
    else {
      let obj = {
        type: "error",
        title: "",
        Body: "From date cannot be greater than To date"
      }
      this.appC.popToast(obj);

    }
  }


  dateValidationForFuture(e) {
    //console.log(e);
    let today = moment(new Date);
    let selected = moment(e);

    let diff = moment(selected.diff(today))['_i'];

    if (diff <= 0) {

    }
    else {
      this.emailFetchForm.to_date = moment(new Date).format('YYYY-MM-DD');
      this.emailFetchForm.from_date = moment(new Date).format('YYYY-MM-DD');

      let msg = {
        type: "info",
        body: "Future date is not allowed"
      }

      this.appC.popToast(msg);
    }

  }
  // pagination functions 

  fetchTableDataByPage(index) {
    this.pageIndex = index;
    let startindex = this.displayBatchSize * (index - 1);
    this.emailSource = this.getDataFromDataSource(startindex);
  }

  fetchNext() {
    this.pageIndex++;
    this.fetchTableDataByPage(this.pageIndex);
  }

  fetchPrevious() {
    if (this.pageIndex != 1) {
      this.pageIndex--;
      this.fetchTableDataByPage(this.pageIndex);
    }
  }

  getDataFromDataSource(startindex) {
    let tempEmail: any = [];
    tempEmail = this.emailDataSource;
    for (let i = 0; i < tempEmail.length; i++) {
      tempEmail[i].message = tempEmail[i].message.replace(/<\/?[^>]+>/ig, " ");
    }
    this.emailDataSource = tempEmail;
    let t = this.emailDataSource.slice(startindex, startindex + this.displayBatchSize);
    return t;
  }
  updateTableBatchSize(event) {
    this.pageIndex = 1;
    this.displayBatchSize = event;
    this.fetchTableDataByPage(this.pageIndex);
  }


  switchActiveView(id) {
    document.getElementById('email') && document.getElementById('email').classList.remove('active');
  }


  searchDatabase() {
    if (this.searchText != "" && this.searchText != null) {
      let searchData: any;
      searchData = this.emailSource.filter(item =>
        Object.keys(item).some(
          k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase()))
      );
      this.emailSource = searchData;
      this.searchflag = true;

    }
    else {
      this.auth.showLoader();
      let tempObj = {
        institution_id: parseInt(sessionStorage.getItem('institute_id')),
        from_date: moment(this.emailFetchForm.from_date).format('YYYY-MM-DD'),
        to_date: moment(this.emailFetchForm.to_date).format('YYYY-MM-DD'),
      }

      this.apiService.getEmailMessages(tempObj).subscribe(
        res => {
          this.auth.hideLoader();
          this.emailSource = res;
          this.searchflag = false;
        },
        err => {
          this.auth.hideLoader();
        }
      )
    }
  }
  sendNotifyPage(){
   
    this.router.navigateByUrl('/view/dashboard/send-notification')
  }
}


