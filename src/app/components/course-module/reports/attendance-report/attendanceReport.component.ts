import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { MessageShowService } from '../../../..';
import { AppComponent } from '../../../../app.component';
import { AuthenticatorService } from "../../../../services/authenticator.service";
import { CommonServiceFactory } from '../../../../services/common-service';
import { HttpService } from '../../../../services/http.service';
import { ColumnSetting } from '../../../shared/custom-table/layout.model';
import { AttendanceReportServiceService } from '../../services/attendance-report-service.service';


@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendanceReport.component.html',
  styleUrls: ['./attendanceReport.component.scss']
})
export class AttendanceReportComponent implements OnInit {
  institute_id: any = sessionStorage.getItem('institution_id');
  attendanceDataSource: any;
  masterCourses: any[] = [];
  fullResponse: any = [];
  postData: any[] = [];
  pagedPostData: any[] = [];
  courses: any[] = [];
  batchCourses: any[] = [];
  SummaryReports: boolean = false;
  PageIndex: number = 1;
  PageIndexPopup: number = 1;
  pagedisplaysize: number = 10;
  pagedisplaysizePopup: number = 10;
  totalRow: number;
  totalRowPopup: number;
  addReportPopUp: boolean = false;
  dateWiseAttendance: any[] = [];
  dateWiseAttendancePro: any[] = [];
  pageDetailedData: any[] = [];
  dataTypeAttendance: any[] = [];
  dataTypeAttendancePro: any[] = [];
  typeAttendance: any[] = [];
  attendanceIndex0: any[] = [];
  attendanceIndexi: number;
  attendanceIndexiPro: number;
  attendanceIndex0Pro: any[] = [];
  attendanceIndexiOf: any[] = [];
  attendanceIndexiOfPro: any[] = [];
  isProfessional: boolean = true;
  masterCoursePro: any[] = [];
  subjectPro: any[] = [];
  batchPro: any[] = [];
  typeAttendancePro: any[] = [];
  pagedPostDataPro: any[] = [];
  queryParamsPro: any[] = [];
  pageDetailedDataPro: any[] = [];
  property = "";
  direction = 0;
  sortingEnabled: boolean = true;
  dummyArr: any[] = [0, 1, 2, 0, 1, 2];
  columnMaps: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  columnMaps2: any[] = [0, 1, 2, 3, 4, 5];
  dataStatus: boolean = false;
  projectSettings: ColumnSetting[] = [
    { primaryKey: 'student_disp_id', header: 'Student id' },
    { primaryKey: 'student_name', header: 'Student name' },
    { primaryKey: 'student_phone', header: 'Contact no' },
    { primaryKey: 'doj', header: 'Joining date' },
    { primaryKey: 'total_classes', header: 'Total classes' },
    { primaryKey: 'total_attended', header: 'Present' },
    { primaryKey: 'total_absent', header: 'Absent' },
    { primaryKey: 'total_leave', header: 'Leave' },
    { primaryKey: 'spent_percentage', header: 'Attendance(%)' }
  ];

  attendanceFetchForm = {
    standard_id: "",
    subject_id: "",
    institution_id: sessionStorage.getItem('institute_id'),
    course_id: "-1",
    batch_id: "-1",
    master_course_name: "",
    from_date: moment(new Date()).format('YYYY-MM-DD'),
    to_date: moment(new Date()).format('YYYY-MM-DD')
  }
  /*for professional*/
  queryParams = {
    standard_id: "",
    subject_id: "-1",
    institution_id: sessionStorage.getItem('institute_id'),
    course_id: -1,
    batch_id: "-1",
    master_course_name: "",
    from_date: moment(new Date()).format('YYYY-MM-DD'),
    to_date: moment(new Date()).format('YYYY-MM-DD')
  };

  searchText: string = "";
  searchflag: boolean = false;
  showDownloadReport: boolean = false;
  searchData: any = [];
  schoolModel: boolean = false;


  @ViewChild('attendanceTable', { static: false }) attendanceTable: ElementRef;
  @ViewChild('xlsDownloader', { static: false }) xlsDownloader: ElementRef;

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  constructor(
    private reportService: AttendanceReportServiceService,
    private appc: AppComponent,
    private _http: HttpService,
    private auth: AuthenticatorService,
    private _httpService: HttpService,
    private msgService: MessageShowService,
    private commonService: CommonServiceFactory,
  ) {
    //console.log(moment(moment().format('DD-MM-YYYY')).diff(moment('03-02-2018'),'months'));
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  ngOnInit() {

    this.auth.institute_type.subscribe(
      res => {
        if (res == "LANG") {
          this.isProfessional = true;
        } else {
          this.isProfessional = false;
        }
      }
    )
    // changes by Nalini - to handle school model conditions
    this.auth.schoolModel.subscribe(
      res => {
        this.schoolModel = false;
        if (res) {
          this.schoolModel = true;
        }
      }
    )
    this.getMasterCourseData();
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  /* this is ussed to fetch details for dropdown for master course/ Standard */
  getMasterCourseData() {

    this.auth.showLoader();
    if (this.isProfessional) {
      this.reportService.fetchMasterCourseProfessional(this.queryParams).subscribe(
        (data: any) => {
          this.auth.hideLoader();
          this.masterCoursePro = data.standardLi;
          this.batchPro = data.batchLi;
        },
        (error: any) => {
          this.auth.hideLoader();
          this.dataStatus = false;
          let msg = {
            type: "error",
            body: error.error.message
          }
          this.appc.popToast(msg);
          return error;
        }
      )
    }
    else {
      this.getMasterCourseKeys();
    }
  }
  getMasterCourseKeys() {
    let url = "/api/v1/courseMaster/master-course-list/" + this.institute_id + '?is_active_not_expire=Y&sorted_by=course_name';

    let keys;
    this.auth.showLoader();
    this._http.getData(url).subscribe(
      (data: any) => {
        this.auth.hideLoader();
        this.fullResponse = data.result;
        keys = Object.keys(data.result);

        console.log("keys", keys);

        for (let i = 0; i < keys.length; i++) {
          this.masterCourses.push(keys[i]);
        }


      },
      (error: any) => {
        this.auth.hideLoader();
        console.log(error);
      }
    )
  }
  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  getCourseData(i) {
    this.attendanceFetchForm.batch_id = "-1";
    this.queryParams.batch_id = "-1";
    this.isShowDownloadReport();
    // 
    this.dataStatus = true;
    this.queryParams.standard_id = i;
    this.queryParams.subject_id = "-1";
    this.queryParams.batch_id = "-1";

    if (this.isProfessional) {
      this.auth.showLoader();

      this.reportService.fetchMasterCourseProfessional(this.queryParams).subscribe(
        (data: any) => {
          this.dataStatus = false;
          this.auth.hideLoader();
          this.subjectPro = data.subjectLi;
          this.batchPro = data.batchLi;
        },
        (error: any) => {
          this.dataStatus = false;
          this.auth.hideLoader();
          let msg = {
            type: "error",
            body: error.error.message
          }
          this.appc.popToast(msg);
          return error;
        }
      )
      this.batchPro = [];
      this.subjectPro = [];
    }
    else {
      this.dataStatus = true;
      this.attendanceFetchForm.batch_id = "-1";
      this.attendanceFetchForm.course_id = "";
      this.courses = [];
      let temp = this.fullResponse[this.attendanceFetchForm.master_course_name];
      for (let i = 0; i < temp.length; i++) {
        this.courses.push(temp[i]);
      }
      // this.auth.showLoader();
      // this.attendanceFetchForm.batch_id = "-1";
      // this.attendanceFetchForm.course_id = "";
      // this.reportService.getCourses(i).subscribe(
      //   (data: any) => {
      //     this.dataStatus = false;
      //     this.attendanceFetchForm.from_date = moment(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
      //     this.attendanceFetchForm.to_date = moment(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
      //     this.queryParams.from_date = moment(this.queryParams.from_date).format('YYYY-MM-DD');
      //     this.queryParams.to_date = moment(this.queryParams.to_date).format('YYYY-MM-DD');
      //     this.auth.hideLoader();
      //     this.courses = data.coursesList;
      //   }
      //   ,
      //   (error: any) => {
      //     this.dataStatus = false;
      //     this.auth.hideLoader();
      //     let msg = {
      //       type: "error",
      //       body: error.error.message
      //     }
      //     this.appc.popToast(msg);
      //     return error;
      //   }
      // )
      // this.courses = [];
      // this.batchCourses = [];

    }

  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  getSubjectData(i) {
    this.isShowDownloadReport();
    this.auth.showLoader();
    this.dataStatus = true;
    this.queryParams.standard_id = this.queryParams.standard_id;
    if (this.isProfessional) {

      this.reportService.fetchMasterCourseProfessional(this.queryParams).subscribe(
        (data: any) => {
          this.dataStatus = false;
          this.attendanceFetchForm.from_date = moment(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
          this.attendanceFetchForm.to_date = moment(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
          this.queryParams.from_date = moment(this.queryParams.from_date).format('YYYY-MM-DD');
          this.queryParams.to_date = moment(this.queryParams.to_date).format('YYYY-MM-DD');
          this.auth.hideLoader();
          this.batchPro = data.batchLi;
        },
        (error: any) => {
          this.dataStatus = false;
          this.auth.hideLoader();
          let msg = {
            type: "error",
            body: error.error.message
          }
          this.appc.popToast(msg);
          return error;
        }
      )
      this.batchPro = [];
    }
    else {
      this.attendanceFetchForm.batch_id = "-1";
      this.reportService.getSubject(i).subscribe(
        (data: any) => {
          this.dataStatus = false;
          this.attendanceFetchForm.from_date = moment(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
          this.attendanceFetchForm.to_date = moment(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
          this.queryParams.from_date = moment(this.queryParams.from_date).format('YYYY-MM-DD');
          this.queryParams.to_date = moment(this.queryParams.to_date).format('YYYY-MM-DD');
          this.auth.hideLoader();
          this.batchCourses = data.batchesList;
          // this.getPostData();
        }
      )
      this.batchCourses = [];
    }
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  getBatchData(i) {
    this.isShowDownloadReport();
    this.dataStatus = true;
    this.auth.showLoader();
    this.queryParams.standard_id = this.queryParams.standard_id;
    this.queryParams.batch_id = this.queryParams.batch_id;
    if (this.isProfessional) {

      this.reportService.postDataToTablePro(this.queryParams).subscribe(
        (data: any) => {
          this.dataStatus = false;
          this.attendanceFetchForm.from_date = moment(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
          this.attendanceFetchForm.to_date = moment(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
          this.queryParams.from_date = moment(this.queryParams.from_date).format('YYYY-MM-DD');
          this.queryParams.to_date = moment(this.queryParams.to_date).format('YYYY-MM-DD');
          this.auth.hideLoader();
          // this.getPostData();
        }
      )
    }
    else {
      this.reportService.postDataToTable(this.attendanceFetchForm).subscribe(
        (data: any) => {
          this.dataStatus = false;
          this.attendanceFetchForm.from_date = moment(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
          this.attendanceFetchForm.to_date = moment(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
          this.queryParams.from_date = moment(this.queryParams.from_date).format('YYYY-MM-DD');
          this.queryParams.to_date = moment(this.queryParams.to_date).format('YYYY-MM-DD');
          this.auth.hideLoader();
          // this.getPostData();
        }
      )
    }
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  getPostData() {
    this.auth.showLoader();
    this.SummaryReports = true;
    this.dataStatus = true;
    this.PageIndex = 1;

    if (this.isProfessional) {
      this.reportService.postDataToTablePro(this.queryParams).subscribe(
        (data: any) => {
          this.auth.hideLoader();
          this.dataStatus = false;
          this.queryParamsPro = data;
          this.totalRow = data.length;
          this.PageIndex = 1;
          this.fetchTableDataByPage(this.PageIndex);

        },
        (error: any) => {
          this.dataStatus = false;
          this.auth.hideLoader();
          let msg = {
            type: "error",
            body: error.error.message
          }
          this.appc.popToast(msg);
          return error;
        }
      )
    }
    else {
      if (this.attendanceFetchForm.from_date == "Invalid date") {
        this.attendanceFetchForm.from_date = "";
      }
      if (this.attendanceFetchForm.to_date == "Invalid date") {
        this.attendanceFetchForm.to_date = "";
      }
      this.reportService.postDataToTable(this.attendanceFetchForm).subscribe(
        (data: any) => {
          this.auth.hideLoader();
          this.dataStatus = false;
          this.postData = data;
          this.totalRow = data.length;
          this.PageIndex = 1;
          this.fetchTableDataByPage(this.PageIndex);
        },
        (error: any) => {
          this.dataStatus = false;
          this.auth.hideLoader();
          let msg = {
            type: "error",
            body: error.error.message
          }
          this.appc.popToast(msg);
          return error;
        }
      )
    }
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  postDetails() {
    this.auth.showLoader();
    this.dataStatus = true;

    this.queryParams.from_date = moment(this.queryParams.from_date).format('YYYY-MM-DD');
    this.queryParams.to_date = moment(this.queryParams.to_date).format('YYYY-MM-DD');
    let diff = moment(this.queryParams.from_date).diff(moment(this.queryParams.to_date), 'months');
    let futureDate = moment(this.queryParams.to_date).add('days', 1).format('YYYY-MM-DD');

    if (this.isProfessional) {
      if (this.queryParams.from_date == "" || this.queryParams.to_date == "" || this.queryParams.batch_id == "-1" || this.queryParams.batch_id == " " || this.queryParams.subject_id == "" || this.queryParams.standard_id == "-1") {

        let msg = {
          type: "error",
          title: "Incorrect Details",
          body: "All fields Are required"
        }
        this.appc.popToast(msg);
        this.dataStatus = false;
        this.auth.hideLoader();
      }
      else if (this.queryParams.from_date > this.queryParams.to_date) {
        let msg = {
          type: "error",
          title: "Incorrect Details",
          body: "From Date Must Be less than to date"
        }
        this.appc.popToast(msg);
        this.dataStatus = false;
        this.auth.hideLoader();
      }

      else if (diff < -4) {
        let msg = {
          type: "error",
          title: "Incorrect Details",
          body: "You cannot select more than 120 days"
        }

        this.appc.popToast(msg);
        this.dataStatus = false;
        this.auth.hideLoader();
      }

      else {
        this.pageDetailedDataPro = [];
        this.typeAttendancePro = [];
        this.reportService.postDetailedData(this.queryParams).subscribe(
          (data: any) => {
            this.auth.hideLoader();
            this.dataStatus = false;
            if (data.length) {
              this.dataStatus = false;
              this.dateWiseAttendancePro = data;
              this.dataTypeAttendancePro = data.map((ele) => {
                this.typeAttendancePro = ele.attendanceDateType;

              });

              this.attendanceIndex0Pro = this.typeAttendancePro[0];
              this.attendanceIndexiPro = this.typeAttendancePro.length;
              this.attendanceIndexiOfPro = this.typeAttendancePro[this.attendanceIndexiPro - 1];
              this.addReportPopUp = true;
              this.totalRowPopup = data.length;
              this.PageIndexPopup = 1;
              this.fetchTableDataByPagePopup(this.PageIndexPopup);
            }
            else {
              let msg = {
                type: "info",
                title: "No data found",
                body: "We did not find any attendance marked for the selected dates "
              }
              this.appc.popToast(msg);
              this.auth.hideLoader();
              this.dataStatus = false;
            }

          },
          (error: any) => {
            this.auth.hideLoader();
            this.dataStatus = false;
            let msg = {
              type: "error",
              body: error.error.message
            }
            this.appc.popToast(msg);
            return error;

          }
        );
      }
    }
    else {
      this.attendanceFetchForm.from_date = moment(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
      this.attendanceFetchForm.to_date = moment(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
      let diff = moment(this.attendanceFetchForm.from_date).diff(moment(this.attendanceFetchForm.to_date), 'months');
      let futureDate = moment(this.attendanceFetchForm.to_date).add('days', 1).format('YYYY-MM-DD');
      this.auth.showLoader();
      if (this.attendanceFetchForm.master_course_name == "" || this.attendanceFetchForm.course_id == "" || this.attendanceFetchForm.batch_id == "-1" || this.attendanceFetchForm.from_date == "" || this.attendanceFetchForm.to_date == "") {

        let msg = {
          type: "error",
          title: "Incorrect Details",
          body: "All fields Are required"
        }
        this.appc.popToast(msg);
        this.dataStatus = false;
        this.auth.hideLoader();
      }
      else if (this.attendanceFetchForm.from_date > this.attendanceFetchForm.to_date) {
        let msg = {
          type: "error",
          title: "Incorrect Details",
          body: "From Date Must Be less than to date"
        }
        this.appc.popToast(msg);
        this.dataStatus = false;
        this.auth.hideLoader();
      }
      else if (diff < -4) {
        let msg = {
          type: "error",
          title: "Incorrect Details",
          body: "You cannot select more than 120 days"
        }

        this.appc.popToast(msg);
        this.dataStatus = false;
        this.auth.hideLoader();
      }
      else {
        this.dataStatus = true;
        this.typeAttendance = [];
        this.pageDetailedData = [];
        this.reportService.postDetailedData(this.attendanceFetchForm).subscribe(
          (data: any) => {
            if (data.length) {
              this.addReportPopUp = true;
              this.auth.hideLoader();
              this.dataStatus = false;
              this.dateWiseAttendance = data;
              this.dataTypeAttendance = this.dateWiseAttendance.map((ele) => {
                this.typeAttendance = ele.attendanceDateType;

              });
              this.attendanceIndex0 = this.typeAttendance[0];
              this.attendanceIndexi = this.typeAttendance.length;
              this.attendanceIndexiOf = this.typeAttendance[this.attendanceIndexi - 1];

              this.totalRowPopup = data.length;
              this.PageIndexPopup = 1;
              this.fetchTableDataByPagePopup(this.PageIndexPopup);
            }
            else {
              let msg = {
                type: "info",
                title: "No data found",
                body: "We did not find any attendance marked for the selected dates "
              }
              this.appc.popToast(msg);
              this.auth.hideLoader();
              this.dataStatus = false;
            }
          },
          (error: any) => {
            this.auth.hideLoader();
            this.dataStatus = false;
            let msg = {
              type: "error",
              body: error.error.message
            }
            this.appc.popToast(msg);
            return error;

          }
        )
      }
    }
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  closeReportPopup() {
    this.addReportPopUp = false;
  }

  // pagination functions
  //for summary report
  fetchTableDataByPage(index) {
    this.PageIndex = index;
    let startindex = this.pagedisplaysize * (index - 1);
    if (this.isProfessional) {
      this.pagedPostDataPro = this.getDataFromDataSource(startindex);
    }
    else {
      this.pagedPostData = this.getDataFromDataSource(startindex);
    }
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  fetchNext() {
    this.PageIndex++;
    this.fetchTableDataByPage(this.PageIndex);
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  fetchPrevious() {
    if (this.PageIndex != 1) {
      this.PageIndex--;
      this.fetchTableDataByPage(this.PageIndex);
    }
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  getDataFromDataSource(startindex) {
    if (this.isProfessional) {
      if (this.searchflag) {
        let t = this.searchData.slice(startindex, startindex + this.pagedisplaysize);
        return t;
      } else {
        let t = this.queryParamsPro.slice(startindex, startindex + this.pagedisplaysize);
        return t;
      }
    }
    else {
      if (this.searchflag) {
        let t = this.searchData.slice(startindex, startindex + this.pagedisplaysize);
        return t;
      } else {
        let t = this.postData.slice(startindex, startindex + this.pagedisplaysize);
        return t;
      }
    }
  }

  //for detailed report
  fetchTableDataByPagePopup(index) {
    this.PageIndexPopup = index;
    let startindex = this.pagedisplaysizePopup * (index - 1);
    if (this.isProfessional) {
      this.pageDetailedDataPro = this.getDataFromDataSourcePopup(startindex);
    }
    else {
      this.pageDetailedData = this.getDataFromDataSourcePopup(startindex);
    }
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  fetchNextPopupRange() {
    this.PageIndexPopup++;
    this.fetchTableDataByPagePopup(this.PageIndexPopup);
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  fetchPreviousPopup() {
    if (this.PageIndexPopup != 1) {
      this.PageIndexPopup--;
      this.fetchTableDataByPagePopup(this.PageIndexPopup);
    }
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  getDataFromDataSourcePopup(startindex) {
    if (this.isProfessional) {
      let d = this.dateWiseAttendancePro.slice(startindex, startindex + this.pagedisplaysizePopup);
      return d;
    }
    else {
      let d = this.dateWiseAttendance.slice(startindex, startindex + this.pagedisplaysizePopup);
      return d;
    }
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  sortedData(ev) {
    this.sortingEnabled = true;
    (this.direction == 0 || this.direction == -1) ? (this.direction = 1) : (this.direction = -1)
    if (this.isProfessional) {
      this.queryParamsPro = this.queryParamsPro.sort((a: any, b: any) => {
        if (a[ev] < b[ev]) {
          return -1 * this.direction;
        }
        else if (a[ev] > b[ev]) {
          return this.direction;
        }
        else {
          return 0;
        }
      })
    }
    else {
      this.postData = this.postData.sort((a: any, b: any) => {
        if (a[ev] < b[ev]) {
          return -1 * this.direction;
        }
        else if (a[ev] > b[ev]) {
          return this.direction;
        }
        else {
          return 0;
        }
      });

    }
    this.PageIndex = 1;
    this.fetchTableDataByPage(this.PageIndex);
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  getColor(status) {
    switch (status) {
      case 'A': return 'red';
      case 'L': return 'blue';
    }
  }

  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  DownloadJsonToCsv() {
    //console.log(this.attendanceTable.nativeElement.innerHtml);
    let link = this.xlsDownloader.nativeElement;
    let outer = this.attendanceTable.nativeElement.outerHTML.replace(/ /g, '%20');
    let data_type = 'data:application/vnd.ms-excel';
    let file_name = '';
    if (this.isProfessional) {
      for (let i = 0; i <= this.batchPro.length; i++) {
        if (this.queryParams.batch_id == this.batchPro[i].batch_id) {
          file_name = this.batchPro[i].batch_name;
          break;
        }
      }

      file_name = file_name + '(' + moment(this.queryParams.from_date).format('DD-MM-YYYY') + " to "
        + moment(this.queryParams.to_date).format('DD-MM-YYYY') + ')';

    } else {

      for (let i = 0; i <= this.batchCourses.length; i++) {
        if (this.attendanceFetchForm.batch_id == this.batchCourses[i].batch_id) {
          file_name = this.batchCourses[i].batch_name;
          break;
        }
      }
      file_name = file_name + '(' + moment(this.attendanceFetchForm.from_date).format('DD-MM-YYYY') + " to "
        + moment(this.attendanceFetchForm.to_date).format('DD-MM-YYYY') + ')';
    }
    link.setAttribute('href', data_type + ',' + outer);
    link.setAttribute('download', file_name + '.xls');
    link.click();
  }


  /* ================================================================================================================================ */
  /* ================================================================================================================================ */
  searchDatabase() {

    if (this.searchText != "" && this.searchText != null) {

      this.PageIndex = 1;
      let searchRes: any;
      if (!this.isProfessional) {
        searchRes = this.postData.filter(item =>
          Object.keys(item).some(
            k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase()))
        );
      }
      else {
        searchRes = this.queryParamsPro.filter(item =>
          Object.keys(item).some(
            k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase()))
        );

      }

      this.searchData = searchRes;
      this.totalRow = searchRes.length;
      this.searchflag = true;
      this.fetchTableDataByPage(this.PageIndex);
    }
    else {
      this.searchflag = false;
      this.fetchTableDataByPage(this.PageIndex);
      if (this.isProfessional) {
        this.totalRow = this.queryParamsPro.length;
      } else {
        this.totalRow = this.postData.length;
      }
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
      this.attendanceFetchForm.from_date = moment().format('YYYY-MM-DD');
      this.attendanceFetchForm.to_date = moment().format('YYYY-MM-DD');
      this.queryParams.from_date = moment().format('YYYY-MM-DD');
      this.queryParams.to_date = moment().format('YYYY-MM-DD');
    }
  }


  clearFromDate() {
    this.attendanceFetchForm.from_date = "";
    this.queryParams.from_date = "";
  }

  clearToDate() {
    this.attendanceFetchForm.to_date = "";
    this.queryParams.to_date = "";
  }

  isShowDownloadReport() {
    this.showDownloadReport = false;
    if (this.isProfessional) {
      if ((this.queryParams.standard_id != '-1' && this.queryParams.subject_id != '-1') || (this.queryParams.batch_id != '-1')) {
        this.showDownloadReport = true;
      }
    } else {
      if ((this.attendanceFetchForm.master_course_name != '-1' && this.attendanceFetchForm.course_id != '-1') || (this.attendanceFetchForm.batch_id != '-1' && this.attendanceFetchForm.batch_id != "")) {
        this.showDownloadReport = true;
      }
    }
  }

  downloadReport() {
    this.auth.showLoader();
    let obj: any;
    if (this.isProfessional) {
      this.queryParams.from_date = moment(this.queryParams.from_date).format('YYYY-MM-DD');
      this.queryParams.to_date = moment(this.queryParams.to_date).format('YYYY-MM-DD');
      obj = this.queryParams;
    } else {
      this.attendanceFetchForm.from_date = moment(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
      this.attendanceFetchForm.to_date = moment(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
      obj = this.attendanceFetchForm;
    }
    let url = '/api/v1/reports/attendance/downloadAttendanceReport';
    this._httpService.postData(url, obj).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        if (res) {
          let resp = res;
          if (resp.document != "") {
            let byteArr = this.commonService.convertBase64ToArray(resp.document);
            let fileName = res.docTitle; //res.docTitle;
            let file = new Blob([byteArr], { type: 'application/pdf;charset=utf-8;' });
            let url = URL.createObjectURL(file);
            let dwldLink = document.getElementById('downloadFileClick');
            dwldLink.setAttribute("href", url);
            dwldLink.setAttribute("download", fileName);
            document.body.appendChild(dwldLink);
            dwldLink.click();
          }
          else {
            this.msgService.showErrorMessage('info', '', "Document does not have any data!");
          }
        } else {
          this.msgService.showErrorMessage('info', '', "Document does not have any data!");
        }
      },
      err => {
        this.msgService.showErrorMessage('error', '', err.error.message);
        this.auth.hideLoader();
      }
    )
  }
}
