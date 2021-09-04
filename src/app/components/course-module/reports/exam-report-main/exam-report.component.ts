import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent, AuthenticatorService, HttpService } from '../../../..';
import { ExamService } from '../../../../services/report-services/exam.service';
import { ColumnSetting } from '../../../shared/custom-table/layout.model';



@Component({
  selector: 'app-exam-report',
  templateUrl: './exam-report.component.html',
  styleUrls: ['./exam-report.component.scss'],

})
export class ExamReportMainComponent implements OnInit {
  isProfessional: boolean = true;
  pageIndex: number = 1;
  isExamGrade: string;
  getSubjectData: any[] = [];
  batchExamRepo: any[] = [];
  totalRecords: number = 0;
  institute_id: any = sessionStorage.getItem('institution_id');
  fullResponse: any = [];
  dateSource: any[] = [];
  dateStore: any[] = [];
  displayBatchSize: number = 10;
  Tdata: boolean = false;
  courseData: any[] = [];
  pagedDetailExamSource: any[] = [];
  batchCourseData: any = [];
  selectedSubject: any = '';
  subjectData: any[] = [];
  masterCourses: any[] = [];

  addReportPopup: boolean = false;
  examTypeEntry: any[] = [];
  showTitle: boolean = false;
  exam_Sch_Data: any[] = [];
  examSource: any = [];
  detailSource: any = [];
  pagedExamSource: any[] = [];
  pageIndexPopup: number = 1;
  fetchApiData: any = [];
  dataExamIndex: any[] = [];
  typeDataForm: any[] = [];
  @ViewChild('examTable',{static: false}) examTable: ElementRef;
  @ViewChild('xlsDownloader',{static: false}) xlsDownloader: ElementRef;

  projectSettings: ColumnSetting[] = [

    { primaryKey: 'student_disp_id', header: 'Student ID' },
    { primaryKey: 'student_name', header: 'Student Name' },
    { primaryKey: 'student_phone', header: 'Contact No.' },
    { primaryKey: 'doj', header: 'Joining Date' },
    { primaryKey: 'grade', header: 'Grade' }
  ];
  HighestMarks: string = "";
  LowestMarks: string = "";
  AverageMarks: string = "";

  queryParam = {
    standard_id: -1,
    subject_id: -1,
    assigned: "N",
  }


  fetchFieldData = {
    institution_id: parseInt(sessionStorage.getItem('institute_id')),
    standard_id: '',
    subject_id: '',
    batch_id: '',
    exam_schd_id: ''
  }
  searchText: string = "";
  searchflag: boolean = false;
  searchData: any = [];

  property = "";
  direction = 0;
  sortingEnabled: boolean = true;
  schoolModel: boolean = false;
  constructor(
    private examdata: ExamService,
    private appC: AppComponent,
    private _http: HttpService,
    private auth: AuthenticatorService
  ) {
    this.switchActiveView('exam');
  }

  professionalChecker() {
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
    this.isExamGrade = sessionStorage.getItem('is_exam_grad_feature');
    this.professionalChecker();
    if (this.isProfessional) {
      this.showTitle = true
      this.projectSettings = [
        { primaryKey: 'student_disp_id', header: 'Student ID' },
        { primaryKey: 'student_name', header: 'Student Name' },
        { primaryKey: 'student_phone', header: 'Contact No.' },
        { primaryKey: 'doj', header: 'Joining Date' },
        { primaryKey: 'grade', header: 'Grade' }
      ];

    }

    else {
      this.showTitle = false;
      this.projectSettings = [
        { primaryKey: 'student_disp_id', header: 'Student Id' },
        { primaryKey: 'student_name', header: 'Student Name' },
        { primaryKey: 'student_phone', header: 'Contact No.' },
        { primaryKey: 'doj', header: 'Joining Date' },
        { primaryKey: 'total_marks', header: 'Total Marks' },
        { primaryKey: 'marks_obtained', header: 'Marks Obtained' },
        { primaryKey: 'rank', header: 'Rank' },
      ];

    }
    this.fetchExamData();
    this.pageIndex = 1;

  }

  closeReportPopup() {
    this.addReportPopup = false;
  }


  /* select exam repo fill master courses==================================================================================
  ================================================================================== */
  fetchExamData() {
    this.auth.showLoader();
    if (this.isProfessional) {
      this.auth.hideLoader();
      this.batchExamRepo = [];
      this.subjectData = [];
      this.queryParam.subject_id = -1;
      this.queryParam.standard_id = -1;
      this.examdata.batchExamReport(this.queryParam).subscribe((res) => {
        {
          this.batchExamRepo = res.standardLi;
          this.getSubjectData = res.batchLi;
        }
      })
    }
    else {
      // this.examdata.ExamReport().subscribe(
      //   (data: any) => {
      //     this.auth.hideLoader();
      //     this.masterCourses = data;
      //     console.log(this.masterCourses);
      //   }
      // )
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
  }
  /*======================================================================================================
======================================================================================================== */

  getCourseData(i) {


    if (this.isProfessional) {
      this.auth.showLoader();
      this.batchCourseData = [];

      this.fetchFieldData.exam_schd_id = "";

      this.queryParam.subject_id = -1;

      this.examdata.batchExamReport(this.queryParam).subscribe(
        (res) => {
          this.auth.hideLoader();
          console.log(res.subjectLi);

          this.batchCourseData = res.subjectLi;

          this.getSubjectData = res.batchLi;

          if (this.batchCourseData == null) {
            let obj = {
              type: "info",
              title: "No exam schedule found",
              body: ""
            }
            this.appC.popToast(obj);
            this.auth.hideLoader();
          }


        })
    }

    else {

      this.fetchFieldData.exam_schd_id = "";
      this.fetchFieldData.batch_id = "";
      this.fetchFieldData.subject_id = "";
      this.courseData = [];
      let temp = this.fullResponse[this.fetchFieldData.standard_id];
      for (let i = 0; i < temp.length; i++) {
        this.courseData.push(temp[i]);
      }
      // this.examdata.getCourses(i).subscribe(
      //   (data: any) => {
      //     this.auth.hideLoader();
      //     this.courseData = data.coursesList;

      //     if (this.courseData == null) {
      //       let obj = {
      //         type: "info",
      //         title: "No exam schedule found",
      //         body: ""
      //       }
      //       this.appC.popToast(obj);
      //       this.auth.hideLoader();
      //     }
      //   },
      //   (error: any) => {

      //     this.auth.hideLoader();

      //     let obj = {
      //       type: "error",
      //       title: "",
      //       body: "Please check your internet connection and if the issue persist contact support@proctur.com"
      //     }
      //     this.appC.popToast(obj);
      //   }
      // )
    }
  }
  /*==================================================================================================
  ===================================================================================================== */
  getSubData(i) {
    this.auth.showLoader();
    console.log(i);

    if (this.isProfessional) {
      this.fetchFieldData.exam_schd_id = "";

      this.examdata.batchExamReport(this.queryParam).subscribe(
        (res) => {

          this.auth.hideLoader();
          this.getSubjectData = res.batchLi;
          if (this.getSubjectData == null) {
            let obj = {
              type: "info",
              title: "No exam schedule found",
              body: ""
            }
            this.appC.popToast(obj);

            this.auth.hideLoader();

          }
        })
    }
    else {
      this.fetchFieldData.exam_schd_id = "";
      this.fetchFieldData.batch_id = "";
      this.examdata.getSubject(i).subscribe((data: any) => {

        this.subjectData = data.batchesList;
        this.auth.hideLoader();
        if (this.subjectData == null) {
          let obj = {
            type: "info",
            title: "No exam schedule found",
            body: ""
          }
          this.appC.popToast(obj);
          this.auth.hideLoader();
        }
      })
    }
  }

  /*=======================================================================================
  ========================================================================================== */
  getExamScheduleData(i) {
    console.log(i);
    if (this.isProfessional) {
      this.selectedSubject = this.getSubjectData.filter(item => item.batch_id == i)[0].batch_name;
    }
    else {
      this.selectedSubject = this.subjectData.filter(item => item.batch_id == i)[0].subject_name;
    }
    this.auth.showLoader();
    this.fetchFieldData.exam_schd_id = "";
    console.log(i);
    this.examdata.getExamSchedule(i).subscribe((data: any) => {
      this.auth.hideLoader();
      this.exam_Sch_Data = data.otherSchd;

      if (this.exam_Sch_Data == null) {
        let obj = {
          type: "info",
          title: "No exam schedule found",
          body: ""
        }
        this.appC.popToast(obj);
        this.auth.hideLoader();
      }
    })
  }
  getData(i) {
    console.log(i);
  }
  fetchExamReport() {

    this.auth.showLoader();
    this.examSource = [];
    if (this.isProfessional) {
      if (this.fetchFieldData.batch_id == "" || this.fetchFieldData.exam_schd_id == "") {

        let msg = {
          type: "error",
          title: "",
          body: "All field(s) are required "
        }
        this.appC.popToast(msg);
        this.auth.hideLoader();

      }
      else {
        let o = {
          batch_id: this.fetchFieldData.batch_id,
          exam_schd_id: this.fetchFieldData.exam_schd_id,
          institution_id: this.fetchFieldData.institution_id,
          standard_id: '',
          subject_id: ''
        }
        this.examdata.viewExamData(o).subscribe(
          (res: any) => {
            if (res.length) {
              this.examSource = res;

              this.Tdata = true;

              this.HighestMarks = this.examSource[0].highest_marks;
              this.LowestMarks = this.examSource[0].lowest_marks;
              this.AverageMarks = this.examSource[0].average_marks;
              this.totalRecords = this.examSource.length;
              this.fetchTableDataByPage(this.pageIndex);
              this.auth.hideLoader();
              if (this.examSource[0].isBatchExamGrade == 0) {
                this.projectSettings = [
                  { primaryKey: 'student_disp_id', header: 'Student Id' },
                  { primaryKey: 'student_name', header: 'Student Name' },
                  { primaryKey: 'student_phone', header: 'Contact No.' },
                  { primaryKey: 'doj', header: 'Joining Date' },
                  { primaryKey: 'total_marks', header: 'Total Marks' },
                  { primaryKey: 'student_marks_obtained', header: 'Marks Obtained' },
                  { primaryKey: 'student_rank', header: 'Rank' },
                ];
              }
              else {
                this.projectSettings =
                  [{ primaryKey: 'student_disp_id', header: 'Student Id' },
                  { primaryKey: 'student_name', header: 'Student Name' },
                  { primaryKey: 'student_phone', header: 'Contact No.' },
                  { primaryKey: 'doj', header: 'Joining Date' },
                  { primaryKey: 'grade', header: 'Grade' },
                  ];
              }

            }
            else {
              let msg = {
                type: "info",
                body: "No data found"
              }
              this.examSource = [];


              this.totalRecords = this.examSource.length;
              this.fetchTableDataByPage(this.pageIndex);
              this.appC.popToast(msg);
              this.auth.hideLoader();
            }
          },
          err => {
            this.auth.hideLoader();
            console.log(err);
          }
        );
      }
    }
    else {
      if (this.fetchFieldData.subject_id == "" || this.fetchFieldData.standard_id == "" || this.fetchFieldData.batch_id == "" ||
        this.fetchFieldData.exam_schd_id == "") {

        let msg = {
          type: "error",
          title: "",
          body: "All field(s) are required"
        }

        this.appC.popToast(msg);
        this.auth.hideLoader();
      }
      else {
        let o = {
          batch_id: this.fetchFieldData.batch_id,
          exam_schd_id: this.fetchFieldData.exam_schd_id,
          institution_id: this.fetchFieldData.institution_id,
          standard_id: '',
          subject_id: ''
        }
        this.examdata.viewExamData(o).subscribe(
          (res: any) => {
            if (res.length) {
              console.log(res);
              this.examSource = res;
              this.Tdata = true;

              this.HighestMarks = this.examSource[0].highest_marks;
              this.LowestMarks = this.examSource[0].lowest_marks;
              this.AverageMarks = this.examSource[0].average_marks;
              this.totalRecords = this.examSource.length;
              this.fetchTableDataByPage(this.pageIndex);
              this.auth.hideLoader();
              console.log("examSource", this.examSource);
              if (this.examSource[0].grade == "" || this.examSource[0].isBatchExamGrade == 0) {
                this.projectSettings = [
                  { primaryKey: 'student_disp_id', header: 'Student Id' },
                  { primaryKey: 'student_name', header: 'Student Name' },
                  { primaryKey: 'student_phone', header: 'Contact No.' },
                  { primaryKey: 'doj', header: 'Joining Date' },
                  { primaryKey: 'total_marks', header: 'Total Marks' },
                  { primaryKey: 'student_marks_obtained', header: 'Marks Obtained' },
                  { primaryKey: 'student_rank', header: 'Rank' },
                ];
              }
              else {
                this.projectSettings =
                  [{ primaryKey: 'student_disp_id', header: 'Student Id' },
                  { primaryKey: 'student_name', header: 'Student Name' },
                  { primaryKey: 'student_phone', header: 'Contact No.' },
                  { primaryKey: 'doj', header: 'Joining Date' },
                  { primaryKey: 'grade', header: 'Grade' },
                  ];
              }
              console.log(res);
            }
            else {
              let msg = {
                type: "info",
                body: "No data found"
              }
              this.examSource = [];
              this.totalRecords = this.examSource.length;
              this.fetchTableDataByPage(this.pageIndex);
              this.appC.popToast(msg);
              this.auth.hideLoader();
            }

          },
          err => {
            this.auth.hideLoader();
            console.log(err);
          }
        );
      }
    }
  }

  fetchDetailReport() {
    this.auth.showLoader();
    if (this.isProfessional) {

      if (this.fetchFieldData.batch_id == "") {
        let msg = {
          type: "error",
          body: "All field(s) are required "
        }
        this.appC.popToast(msg);
        this.auth.hideLoader();
      }
      else {
        this.examdata.viewDetailData(this.fetchFieldData.batch_id)
          .subscribe(
            (res: any) => {
              if (res.length) {
                this.detailSource = res;

                this.dateSource = this.detailSource.map((store) => {
                  this.dateStore = store.detailExamReportList;
                  console.log("1", store.detailExamReportList);
                  this.auth.hideLoader();
                  //   this.totalRecords = this.detailSource.length;
                  //  this.fetchTableDataByPagePopup(this.pageIndexPopup);
                });
                this.addReportPopup = true;
              }
              else {
                let msg = {
                  type: "info",
                  title: "No data found",
                  body: ""
                }

                this.appC.popToast(msg);
                this.auth.hideLoader();
              }

            },
            err => {
              this.auth.hideLoader();
            }
          )
      }
    }
    else {
      if (this.fetchFieldData.standard_id == "" || this.fetchFieldData.subject_id == "" || this.fetchFieldData.batch_id == "") {
        let msg = {
          type: "error",
          body: "All Field must be filled"
        }
        this.auth.hideLoader();
        this.appC.popToast(msg);
      }
      else {
        this.examdata.viewDetailData(this.fetchFieldData.batch_id)
          .subscribe(
            (res: any) => {
              if (res.length) {
                this.detailSource = res;
                this.dateSource = this.detailSource.map((store) => {
                  this.dateStore = store.detailExamReportList;
                  console.log("2", store.detailExamReportList);
                  this.auth.hideLoader();
                  // this.totalRecords = this.detailSource.length;
                  //this.fetchTableDataByPagePopup(this.pageIndexPopup);
                });
                this.addReportPopup = true;
              }
              else {
                let msg = {
                  type: "info",
                  title: "No data found",
                  body: ""
                }
                this.appC.popToast(msg);
                this.auth.hideLoader();
              }
            },
            err => {
              this.auth.hideLoader();
            }
          )
      }
    }
  }

  getColor(status) {
    switch (status) {
      case 'Leave': return 'blue';
      case 'Absent': return 'red';
    }
  }

  getMark(value) {
    if (value == null || value == "" || value == "0") {
      return '-';
    }
    else {
      return value;
    }

  }

  fetchTableDataByPage(index) {
    this.pageIndex = index;
    let startindex = this.displayBatchSize * (index - 1);
    this.pagedExamSource = this.getDataFromDataSource(startindex);
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
    if (this.searchflag) {
      let t = this.searchData.slice(startindex, startindex + this.displayBatchSize);
      return t;
    } else {
      let t = this.examSource.slice(startindex, startindex + this.displayBatchSize);
      return t;
    }

  }

  fetchTableDataByPagePopup(index) {
    this.pageIndexPopup = index;
    let startindex = this.displayBatchSize * (index - 1);
    this.pagedDetailExamSource = this.getDataFromDataSourcePopup(startindex);
  }

  fetchNextPopup() {
    this.pageIndexPopup++;
    this.fetchTableDataByPagePopup(this.pageIndexPopup);
  }

  fetchPreviousPopup() {
    if (this.pageIndexPopup != 1) {
      this.pageIndexPopup--;
      this.fetchTableDataByPagePopup(this.pageIndexPopup);
    }
  }

  getDataFromDataSourcePopup(startindex) {
    let t = this.detailSource.slice(startindex, startindex + this.displayBatchSize);
    return t;
  }

  closeExamReport() {
    this.addReportPopup = false;

  }

  downloadJsonToCSV() {
    console.log(this.xlsDownloader);
    let link = this.xlsDownloader.nativeElement;
    let outer = this.examTable.nativeElement.outerHTML.replace(/ /g, '%20');
    let data_type = 'data:application/vnd.ms-excel';
    link.setAttribute('href', data_type + ',' + outer);
    link.setAttribute('download', 'ExamReport.xls');
    link.click();
  }

  // changed by laxmi
  switchActiveView(id) {
    let classArray = ['home', 'attendance', 'sms', 'fee', 'exam', 'report', 'time', 'email', 'profit'];

    classArray.forEach((classname) => {
      document.getElementById(classname) && document.getElementById(classname).classList.remove('active');
    });
    document.getElementById(id) && document.getElementById(id).classList.add('active');
  }

  searchDatabase() {
    if (this.searchText != "" && this.searchText != null) {
      this.pageIndex = 1;
      let searchRes: any;
      searchRes = this.examSource.filter(item =>
        Object.keys(item).some(
          k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase()))
      );
      this.searchData = searchRes;
      this.totalRecords = searchRes.length;
      this.searchflag = true;
      this.fetchTableDataByPage(this.pageIndex);
    }
    else {
      this.searchflag = false;
      this.fetchTableDataByPage(this.pageIndex);
      this.totalRecords = this.examSource.length;
    }

  }
  sortedData(ev) {
    this.sortingEnabled = true;
    (this.direction == 0 || this.direction == -1) ? (this.direction = 1) : (this.direction = -1)
    {
      this.examSource = this.examSource.sort((a: any, b: any) => {
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
    this.pageIndex = 1;
    this.fetchTableDataByPage(this.pageIndex);
  }
}