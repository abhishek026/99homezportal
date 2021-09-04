import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { CommonServiceFactory } from '../../../services/common-service';
import { MessageShowService } from '../../../services/message-show.service';
import { timeTableService } from '../../../services/TimeTable/timeTable.service';
;

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

  userType: any = 0;
  courseData: any = [];
  notProTimeTable = [];
  subjectData: any = [];
  masterCoursesData: any = [];
  getTeachersData: any = [];
  masterPro: any[] = [];
  coursePro: any[] = [];
  batchPro: any[] = [];
  namesArr = [];
  timeTableArr = [];
  timeTableObj: any;
  selectData: string = "all";
  insContact: string;
  insName: string;
  onlyMasterData: boolean = false;
  showtable: boolean;
  isProfessional: boolean;
  teacherBox: boolean;
  batchBox: boolean;
  flag: boolean = false;
  showFilters: boolean = true;
  maxEntries = 0;
  startdateweek = moment().isoWeekday("Monday").format("YYYY-MM-DD");
  enddateweek = moment().isoWeekday("Sunday").format("YYYY-MM-DD");

  fetchFieldData = {
    batch_id: "-1",
    course_id: "-1",
    enddate: "",
    institute_id: "",
    isExamIncludedInTimeTable: "Y",
    master_course: "-1",
    standard_id: "-1",
    startdate: "",
    subject_id: "-1",
    teacher_id: "-1",
    type: 2
  }

  fetchFieldDataPro = {
    batch_id: "-1",
    course_id: "-1",
    enddate: "",
    institute_id: "",
    isExamIncludedInTimeTable: "Y",
    master_course: "",
    standard_id: "-1",
    startdate: "",
    subject_id: "-1",
    teacher_id: "-1",
    type: 2
  }

  forDownloadPDF = {
    batch_id: "-1",
    course_id: "-1",
    enddate: "",
    institute_id: "",
    isExamIncludedInTimeTable: "Y",
    master_course: "",
    standard_id: "-1",
    startdate: "",
    subject_id: "-1",
    teacher_id: "-1",
    type: 2
  }
  schoolModel: boolean = false;

  constructor(
    private timeTableServ: timeTableService,
    private auth: AuthenticatorService,
    private commonService: CommonServiceFactory,
    private msgService: MessageShowService
  ) {
    this.insContact = sessionStorage.getItem('inst_phone');
    this.insName = sessionStorage.getItem('institute_name');
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
  }

  ngOnInit() {
    this.userType = sessionStorage.getItem('userType');
    if (this.isProfessional) {
      this.fetchTimeTableReportPro('0');
      this.showFilters = true;
    } else {
      this.getMasterCoursesData();
      this.getTeachersNameData();
    }
  }

  /*========================================================================================================
  ========================================================================================================== */

  getMasterCoursesData() {
    this.auth.showLoader();
    if (this.isProfessional) {
      this.fetchFieldDataPro.standard_id = "-1";
      this.fetchFieldDataPro.batch_id = "-1";
      this.timeTableServ.getProData(this.fetchFieldDataPro.standard_id, this.fetchFieldDataPro.subject_id).subscribe
        (
          res => {
            this.masterPro = res.standardLi;
            this.batchPro = res.batchLi;
            this.auth.hideLoader();
          },
          err => {
            this.auth.hideLoader();
            console.log(err);
          }
        )
    }
    else {
      this.auth.showLoader();
      this.timeTableServ.getMasterCourses().subscribe
        (
          res => {
            this.auth.hideLoader();
            this.masterCoursesData = res;
            // console.log(this.masterCoursesData);
            this.auth.hideLoader();
          },
          err => {
            this.auth.hideLoader();
            console.log(err);
          }
        )
    }
  }

  getCourses(i) {
    if (i != '-1') {
      this.auth.showLoader();
      if (this.isProfessional) {
        this.coursePro = [];
        this.fetchFieldDataPro.batch_id = "-1";
        this.fetchFieldDataPro.subject_id = "-1";
        this.timeTableServ.getProData(this.fetchFieldDataPro.standard_id, this.fetchFieldDataPro.subject_id).subscribe
          (
            res => {
              this.auth.hideLoader();
              this.coursePro = res.subjectLi;
              this.batchPro = res.batchLi;
            },
            err => {
              this.auth.hideLoader();
              console.log(err);
            }
          )
      }
      else {
        this.auth.showLoader();
        this.fetchFieldData.batch_id = "-1";
        this.subjectData = [];
        this.fetchFieldData.course_id = "-1";
        this.courseData = [];
        this.notProTimeTable = [];
        this.namesArr = [];
        this.onlyMasterData = true;
        this.timeTableServ.getCoursesData(i).subscribe
          (
            res => {
              this.auth.hideLoader();
              this.courseData = res.coursesList;

            },
            err => {
              this.auth.hideLoader();
              console.log(err);
            }
          )
      }
    } else {
      this.notProTimeTable = [];
      this.namesArr = [];
    }
  }

  getSubjects(i) {
    if (i != '-1') {
      this.auth.showLoader();
      if (this.isProfessional) {
        this.fetchFieldDataPro.batch_id = "-1";
        this.timeTableServ.getProData(this.fetchFieldDataPro.standard_id, this.fetchFieldDataPro.subject_id).subscribe
          (
            res => {
              this.auth.hideLoader();
              this.batchPro = res.batchLi;
            },
            err => {
              this.auth.hideLoader();
              console.log(err);
            }
          )
      }
      else {
        this.auth.showLoader();
        this.onlyMasterData = false;
        this.fetchFieldData.subject_id = "-1";
        this.subjectData = [];
        this.fetchFieldData.batch_id = "-1";
        this.timeTableServ.getSubjectData(i).subscribe
          (
            res => {
              this.auth.hideLoader();
              this.subjectData = res.batchesList;
              console.log(this.subjectData);
            },
            err => {
              this.auth.hideLoader();
              console.log(err);
            }
          )
      }
    } else {
      this.subjectData = [];
    }
  }

  getTeachersNameData() {
    this.onlyMasterData = false;
    this.auth.showLoader();
    this.timeTableServ.getTeachersName().subscribe(
      res => {
        this.auth.hideLoader();
        let key = { primaryKey: 'teacher_name' };
        if (res.length > 0) {
          this.getTeachersData = this.commonService.SortArray(key, res);
        }
        else {
          this.getTeachersData = [];
        }
        console.log(this.getTeachersData);

        // res.sort((a, b) => {
        //   return a.teacher_name.localeCompare(b.teacher_name);
        // });
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
      })
  }



  /*fetch time table list for nonProfessional model */
  fetchTimeTableReport(flag) {
    this.auth.showLoader();
    if (this.fetchFieldData.master_course == "-1" && this.fetchFieldData.teacher_id == "-1") {
      let msg = this.schoolModel ? 'Please Select a Standard or Teacher' : 'Please Select a Master Course or Teacher';
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", msg);
      this.auth.hideLoader();
      return;
    }
    if (flag == '-1') {
      this.startdateweek = moment(this.startdateweek).subtract(7, 'days').format('YYYY-MM-DD');
      this.enddateweek = moment(this.enddateweek).subtract(7, 'days').format('YYYY-MM-DD');
    }
    else if (flag == '1') {
      this.startdateweek = moment(this.startdateweek).add(7, 'days').format('YYYY-MM-DD');
      this.enddateweek = moment(this.enddateweek).add(7, 'days').format('YYYY-MM-DD');
    }
    this.showFilters = false;
    this.fetchFieldData.enddate = moment(this.enddateweek).format('YYYY-MM-DD');
    this.fetchFieldData.startdate = moment(this.startdateweek).format('YYYY-MM-DD');
    if (this.fetchFieldData.course_id == "-1" && this.fetchFieldData.teacher_id == '-1') {
      this.onlyMasterData = true;
    } else { this.onlyMasterData = false; }
    this.forDownloadPDF = this.fetchFieldData;
    this.timeTableServ.getTimeTable(this.fetchFieldData).subscribe
      (
        res => {
          this.auth.hideLoader();
          this.notProTimeTable = [];
          this.namesArr = [];
          if (res && res.length != 0 && this.onlyMasterData) {

            res.map((element) => {

              this.namesArr.push(element.course_name);
              this.timeTableObj = element.batchTimeTableList;
              this.maxEntries = 0;
              this.maxDataLengthCount();
              this.timetableDataConstructor();
            })
          }
          else {
            this.auth.hideLoader();
            this.timeTableObj = res.batchTimeTableList;
            this.namesArr.push(res.course_name);
            this.maxEntries = 0;
            this.maxDataLengthCount();
            this.timetableDataConstructor();
          }
          this.showtable = true;
        },
        err => {

          this.auth.hideLoader();
          console.log(err);
        }
      )
  }
  /* for changing radio buttons in professional Model */
  radiochangeData(para) {
    this.selectData = para;
    this.fetchFieldDataPro.teacher_id = "-1";
    this.fetchFieldDataPro.batch_id = "-1";
    this.fetchFieldDataPro.standard_id = "-1";
    this.fetchFieldDataPro.subject_id = "-1";
    this.timeTableArr = [];
    if (para == 'all') {
      this.batchBox = false;
      this.teacherBox = false;
      this.fetchTimeTableReportPro(0)

    }
    else if (para == 'teacher') {
      this.batchBox = false;
      this.teacherBox = true;
      this.getTeachersNameData();
    }
    else if (para == 'batch') {
      this.teacherBox = false;
      this.batchBox = true;
      this.getMasterCoursesData();
    }
  }
  /*fecthing report in Professional model */
  fetchTimeTableReportPro(data) {
    this.auth.showLoader();
    if (this.selectData == "teacher") {
      if (this.fetchFieldDataPro.teacher_id == "-1") {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Please Select a Teacher");
        this.auth.hideLoader();
        return;
      }
    }
    else if (this.selectData == "batch") {
      if (this.fetchFieldDataPro.batch_id == "-1") {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, "", "Please Select a Batch");
        this.auth.hideLoader();
        return;
      }
    }
    if (data == '-1') {
      this.startdateweek = moment(this.startdateweek).subtract(7, 'days').format('YYYY-MM-DD');
      this.enddateweek = moment(this.enddateweek).subtract(7, 'days').format('YYYY-MM-DD');
    }
    else if (data == '1') {
      this.startdateweek = moment(this.startdateweek).add(7, 'days').format('YYYY-MM-DD');
      this.enddateweek = moment(this.enddateweek).add(7, 'days').format('YYYY-MM-DD');
    }
    // else {
    //   this.startdateweek = moment().isoWeekday("Monday").format("YYYY-MM-DD");
    //   this.enddateweek = moment().isoWeekday("Sunday").format("YYYY-MM-DD");
    // }
    this.showFilters = false;
    this.fetchFieldDataPro.enddate = moment(this.enddateweek).format('YYYY-MM-DD');
    this.fetchFieldDataPro.startdate = moment(this.startdateweek).format('YYYY-MM-DD');
    this.forDownloadPDF = this.fetchFieldDataPro;
    this.timeTableServ.getTimeTable(this.fetchFieldDataPro).subscribe
      (
        res => {
          this.auth.hideLoader();
          if (res.length != 0) {
            this.timeTableObj = res.batchTimeTableList;
          }
          this.maxEntries = 0;
          this.maxDataLengthCount();
          this.timetableDataConstructor();
          this.showtable = true;
        },
        err => {
          this.auth.hideLoader();
          console.log(err);
        }
      )
  }
  /*==============================This is used to create custom json for the table =====================================*/

  timetableDataConstructor() {
    this.timeTableArr = [];
    for (var i = 0; i < 7; i++) {
      this.flag = false;
      for (let prop in this.timeTableObj) {
        if (moment(this.startdateweek).add(i, 'day').format("YYYY-MM-DD") == moment(prop).format("YYYY-MM-DD") && (moment(this.startdateweek).add(i, 'day').format("dddd") == moment(prop).format("dddd"))) {
          let obj = {
            headerDate: moment(prop).format("YYYY-MM-DD"),
            headerDays: moment(prop).format("dddd"),
            data: this.timeTableObj[prop],
          }
          this.timeTableArr.push(obj);
          this.flag = true;
          break;
        }
      }
      if (this.flag == false) {
        let obj = {
          headerDate: (moment(this.startdateweek).add(i, 'day').format("YYYY-MM-DD")),
          headerDays: (moment(this.startdateweek).add(i, 'day').format("dddd")),
          data: [],
        }
        this.timeTableArr.push(obj);
      }
      // this.timeTableArr.map((element) => {
      //   element.data.length = this.maxEntries;
      // })
    }
    // if (!this.isProfessional) {
    this.notProTimeTable.push(this.timeTableArr);
    // }
    console.log(this.timeTableArr)
  }
  /* counting max length in a Coloumn */
  maxDataLengthCount() {
    for (let i in this.timeTableObj) {
      if (this.timeTableObj[i].length > this.maxEntries) {
        this.maxEntries = this.timeTableObj[i].length;
      }
    }
  }

  /* for changing date format */

  dateFormat(printdate) {
    if (printdate == "" || printdate == undefined) {
      return "";
    }
    else {
      return (moment(printdate).format("DD MMM YYYY"))
    }
  }

  callAaPerModule(data) {
    if (this.isProfessional) {
      this.fetchTimeTableReportPro(data);
    } else {
      this.fetchTimeTableReport(data);
    }

  }


  printTimeTableData() {
    this.auth.showLoader();
    this.timeTableServ.downloadTimeTable(this.forDownloadPDF).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        let byteArr = this.commonService.convertBase64ToArray(res.document);
        let fileName = res.docTitle;
        let file = new Blob([byteArr], { type: 'text/csv;charset=utf-8;' });
        let url = URL.createObjectURL(file);
        let dwldLink = document.getElementById('timeTable_download');
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", fileName);
        document.body.appendChild(dwldLink);
        dwldLink.click();
      },
      err => {
        this.auth.hideLoader();
        this.commonService.showErrorMessage('error', '', err.error.message);
      }
    );


  }

}
