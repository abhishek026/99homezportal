import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import 'rxjs/Rx';
import { HttpService } from '../../../../services/http.service';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { ClassScheduleService } from '../../../../services/course-services/class-schedule.service';
import { TopicListingService } from '../../../../services/course-services/topic-listing.service';
import { MessageShowService } from '../../../../services/message-show.service';
import { WidgetService } from '../../../../services/widget.service';
import { CoursePlanner } from '../course-planner.model';
import { SessionFilter } from '../session-filter.model';
declare var $;

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})

export class ClassComponent implements OnInit {

  // global variables
  jsonFlag = {
    isProfessional: false,
    institute_id: '',
    showHideColumn: false
  };
  coursePlannerFor: String = "class";
  // apis variables to send
  inputElements = {
    masterCourse: "-1",
    course: "-1",
    subject: "-1",
    standard_id: "-1",
    subject_id: "-1",
    batch_id: "-1",
    faculty: "-1",
    isAssigned: "N"
  };
  // Duration filter for course planner data
  filterDateInputs = {
    thisWeek: true,
    lastWeek: false,
    thisMonth: false,
    custom: false
  };
  //  class status filter for course planner data
  filterStatusInputs = {
    upcoming: true,
    attendancePending: true,
    completed: true,
    cancelled: true,
  };
  // Default col show hide status
  showHideColumns = {
    course: true,
    subject: true,
    teacher: true,
    topic: true,
    description: false,
    homework: false
  };
  // for show hide table columns
  checkedColCounter: number = 2;
  dynamicColCounter: number = 2;
  userType: any = 0;
  // Array Elements
  facultyList: any[] = [];
  coursePlannerData: any = [];  // saved course planner fetched data
  allData: any = [];  // used for pagination purpose
  // course model array
  masterCourseList: any[] = [];
  courseList: any[] = [];
  subjectList: any[] = [];
  // batch model array
  batchList: any[] = [];

  coursePlannerFilters: CoursePlanner = new CoursePlanner();

  sessionFiltersArr: SessionFilter = new SessionFilter();

  filterShow: boolean = false;
  filterDateRange: any = "";
  courseStartDate: any;
  courseEndDate: any;

  // FOR PAGINATION
  pageIndex: number = 1;
  displayBatchSize: number = 20;
  totalCount: number = 0;
  sizeArr: any[] = [20, 50, 100, 150, 200, 500];

  // pop up section flags and arrays
  classMarkedForAction: any;
  times: any[] = ['', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];
  minArr: any[] = ['', '00', '15', '30', '45'];
  isReminderPop: boolean = false;
  isReschedulePop: boolean = false;
  isCancelPop: boolean = false;    // For Course MODEL
  isCourseCancel: boolean = false;  // For Batch Model

  // FOR Reschedule
  reschedDate: any = new Date();
  reschedReason: any = "";
  resheduleNotified: any = "Y";
  timepicker: any = {
    reschedStartTime: {
      hour: '12 PM',
      minute: '00',
      meridian: ''
    },
    reschedEndTime: {
      hour: '1 PM',
      minute: '00',
      meridian: ''
    }
  }

  // FOR NOTIFY
  reminderRemarks: string = '';
  remarksLimit: number = 50;

  // FOR CANCEL PopUP
  cancellationReason: string = '';
  is_notified: any = 'Y';

  // for Edit
  editClass: any = {
    description: "",
    homework: "",
    faculty: "-1",
    topic_covered_ids: "",
    topic_covered_names: "",
    subject_id: "",
    course_id: "",
    class_sche_date: "",
    class_schedule_id: "",
    batch_id: "",
    custom_class_type: "",
    duration: "",
    room_no: "",
    start_time: "",
    end_time: ""
  }
  topicsList: any = [];
  totalTopicsList: any = [];
  selectedTopics: any = '' //join ids by '|'
  selectedTopicsNames: any = '';
  schoolModel: any = false;

  constructor(
    private router: Router,
    private auth: AuthenticatorService,
    private msgService: MessageShowService,
    private classService: ClassScheduleService,
    private widgetService: WidgetService,
    private topicService: TopicListingService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.userType = sessionStorage.getItem('userType');
    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.jsonFlag.isProfessional = true;
        } else {
          this.jsonFlag.isProfessional = false;
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

    this.coursePlannerFilters.isMarksUpdate = "N";
    this.showHideColForModel();
    this.fetchPreFillData();
    this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
    let filters = sessionStorage.getItem('coursePlannerFilter');
    if (filters) {
      this.sessionFilters(filters);
    }
  }

  showHideColForModel() {
    if (this.jsonFlag.isProfessional) {
      this.dynamicColCounter = 1;
      this.checkedColCounter = 1;
    }
  }

  clearFilters() {
    sessionStorage.setItem('batch_info', '');
    sessionStorage.setItem('isSubjectView', '');
    sessionStorage.setItem('isFromCoursePlanner', '');
    sessionStorage.setItem('coursePlannerFilter', '');
    this.sessionFiltersArr = new SessionFilter();
  }

  sessionFilters(filters) {
    this.sessionFiltersArr = JSON.parse(filters);
    this.inputElements.masterCourse = this.sessionFiltersArr.masterCourse;
    this.inputElements.course = this.sessionFiltersArr.courseId;
    this.inputElements.standard_id = this.sessionFiltersArr.standardId;
    this.inputElements.subject_id = this.sessionFiltersArr.subjectId;
    if (!this.jsonFlag.isProfessional) {
      this.inputElements.subject = this.sessionFiltersArr.batchId;
    }
    else {
      this.inputElements.batch_id = this.sessionFiltersArr.batchId;
    }
    this.inputElements.faculty = this.sessionFiltersArr.facultyId;
    this.filterStatusInputs.completed = this.sessionFiltersArr.isCompleted;
    this.filterStatusInputs.attendancePending = this.sessionFiltersArr.isPending;
    this.filterStatusInputs.cancelled = this.sessionFiltersArr.isCancelled;
    this.filterStatusInputs.upcoming = this.sessionFiltersArr.isUpcoming;
    this.filterDateInputs.thisWeek = this.sessionFiltersArr.thisWeek;
    this.filterDateInputs.lastWeek = this.sessionFiltersArr.lastWeek;
    this.filterDateInputs.thisMonth = this.sessionFiltersArr.thisMonth;
    this.filterDateInputs.custom = this.sessionFiltersArr.custom;

    this.coursePlannerFilters.master_course_name = this.sessionFiltersArr.masterCourse;
    this.coursePlannerFilters.course_id = this.sessionFiltersArr.courseId;
    this.coursePlannerFilters.batch_id = this.sessionFiltersArr.batchId;
    this.coursePlannerFilters.teacher_id = this.sessionFiltersArr.facultyId;


    if (!this.filterStatusInputs.completed) {
      this.coursePlannerFilters.isCompleted = "N";
    }
    if (!this.filterStatusInputs.attendancePending) {
      this.coursePlannerFilters.isPending = "N";
    }
    if (!this.filterStatusInputs.cancelled) {
      this.coursePlannerFilters.isCancelled = "N";
    }
    if (!this.filterStatusInputs.upcoming) {
      this.coursePlannerFilters.isUpcoming = "N";
    }

    this.coursePlannerFilters.from_date = moment(this.sessionFiltersArr.from_date).format("YYYY-MM-DD");
    this.coursePlannerFilters.to_date = moment(this.sessionFiltersArr.to_date).format("YYYY-MM-DD");

    sessionStorage.setItem('isFromCoursePlanner', String(false));
    sessionStorage.setItem('coursePlannerFilter', '');
    if(this.coursePlannerFilters.master_course_name!='-1' || this.coursePlannerFilters.standard_id!='-1') {
      setTimeout(() => {
        this.getData();
      }, 2000);
    }
  }


  fetchPreFillData() {
    // get master course - course - subject data  for course model
    if (!this.jsonFlag.isProfessional) {
      this.auth.showLoader();
      if(this.schoolModel) {
        this.getStandard();
      } else {  
      this.classService.getAllMasterCourse().subscribe(
        res => {
          this.masterCourseList = res;
          if (this.sessionFiltersArr.masterCourse != "-1") {  //update course list if it was set in session
            this.updateCoursesList();
          }
          this.auth.hideLoader();
        },
        err => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
          this.auth.hideLoader();
        }
      );
      }
    }
    else {
      // get master course - course - subject data  for Batch model
      this.auth.showLoader();
      this.classService.getStandardSubjectList(this.inputElements.standard_id, this.inputElements.subject_id, this.inputElements.isAssigned).subscribe(
        res => {
          this.masterCourseList = res.standardLi;
          this.batchList = res.batchLi;
          if (this.sessionFiltersArr.standardId != "-1") {   //update course list if it was set in session
            this.updateCoursesList();
          }
          this.auth.hideLoader();
        },
        err => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
        }
      );
    }

    // get active faculty list
    this.classService.getAllTeachersListOld().subscribe(
      res => {
        this.facultyList = res;
      },
      err => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
      }
    );
  }

  getStandard() {
    this.auth.showLoader();
    this.httpService.getData('/api/v1/courseMaster/standard-section-list/'+sessionStorage.getItem('institute_id')).subscribe(
      (res:any)=>{
        this.auth.hideLoader();
        this.masterCourseList = res.result;
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
      }
    )
  }

  getCourseList(ev) {
    this.inputElements.course = "-1";
    this.inputElements.subject = '-1';
    this.coursePlannerFilters.standard_id = this.inputElements.standard_id;
    this.courseList = [];
    let standard_obj = this.masterCourseList.filter(
      (standard) => (ev == standard.standard_id)
    );
    if(standard_obj && standard_obj.length) {
      this.courseList = standard_obj[0].section_list;
    }
  }

  updateCoursesList() {
    // For Course Model
    if (!this.jsonFlag.isProfessional) {
      this.coursePlannerFilters.master_course_name = this.inputElements.masterCourse;
      if (this.sessionFiltersArr.courseId != "-1" && this.sessionFiltersArr.courseId != "") {  // if courseid is set in seesion then fetch data according to it
        this.inputElements.course = this.sessionFiltersArr.courseId;
      }
      else {   // else reset to default values
        this.inputElements.course = "-1";
        this.inputElements.subject = "-1";
        this.coursePlannerFilters.course_id = "-1";
        this.coursePlannerFilters.batch_id = "-1";
      }
      if (this.inputElements.masterCourse == "") {
        this.courseList = [];
        this.subjectList = [];
      }
      else {
        for (var i = 0; i < this.masterCourseList.length; i++) {
          if (this.masterCourseList[i].master_course == this.inputElements.masterCourse) {
            this.courseList = this.masterCourseList[i].coursesList;
            if (this.sessionFiltersArr.courseId != "-1" && this.sessionFiltersArr.courseId != "") {   //
              this.updateSubjectsList();
            }
            else {
              this.subjectList = [];
              return;
            }
          }
        }
      }
    }
    // For Batch Model
    else {
      this.coursePlannerFilters.standard_id = this.inputElements.standard_id;
      this.inputElements.subject_id = "-1";
      this.coursePlannerFilters.subject_id = "-1";
      this.inputElements.batch_id = '-1';
      if (this.inputElements.standard_id == "-1") {
        this.courseList = [];
      }
      else {
        // Fetch batches according to standard and subject id for all active batches
        this.auth.showLoader();
        this.classService.getStandardSubjectList(this.inputElements.standard_id, this.inputElements.subject_id, this.inputElements.isAssigned).subscribe(
          res => {
            this.auth.hideLoader();
            this.courseList = res.subjectLi;
            this.batchList = res.batchLi;
            this.auth.hideLoader();
            for (var i = 0; i < this.masterCourseList.length; i++) {
              if (this.masterCourseList[i].standard_id == this.inputElements.standard_id) {
                this.courseStartDate = this.masterCourseList[i].start_date;
                this.courseEndDate = this.masterCourseList[i].end_date;
                if (this.sessionFiltersArr.subjectId != "-1" && this.sessionFiltersArr.subjectId != "") {   // check subject id null to fetch course according to it.
                  this.inputElements.subject_id = this.sessionFiltersArr.subjectId;
                  this.updateSubjectsList();
                }
                return;
              }
            }
          },
          err => {
            this.auth.hideLoader();
            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
          }
        );
      }
    }
  }

  updateSubjectsList() {
    // For Course Model
    if (!this.jsonFlag.isProfessional) {
      this.coursePlannerFilters.course_id = this.inputElements.course;
      if (this.inputElements.course == "" || this.inputElements.course == "-1") {
        this.subjectList = [];
        this.inputElements.subject = "-1";
        this.coursePlannerFilters.batch_id = this.inputElements.subject;
      }
      else {
        if(this.schoolModel) {
          this.getSchoolSubjects();
        } else {
        for (var i = 0; i < this.courseList.length; i++) {
          if (this.courseList[i].course_id == this.inputElements.course) {
            this.subjectList = this.courseList[i].batchesList;
            this.courseStartDate = this.courseList[i].start_date;
            this.courseEndDate = this.courseList[i].end_date;
            if (this.sessionFiltersArr.standardId != "-1" && this.sessionFiltersArr.standardId != "") {
              this.inputElements.subject = this.sessionFiltersArr.batchId;
            }
            this.clearFilters();  // after updating all the filter values clear session filter
            return;
          }
        }
      }
      }
    }
    // For Batch Model
    else {
      this.auth.showLoader();
      this.coursePlannerFilters.subject_id = this.inputElements.subject_id;
      this.classService.getStandardSubjectList(this.inputElements.standard_id, this.inputElements.subject_id, this.inputElements.isAssigned).subscribe(
        res => {
          this.auth.hideLoader();
          this.batchList = res.batchLi;
          this.clearFilters();
        },
        err => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
        }
      );
    }

  }

  getSchoolSubjects() {
    this.auth.showLoader();
    this.subjectList = [];
    const url = "/api/v1/courseMaster/fetch/courses/" + sessionStorage.getItem('institute_id') + '/' + this.inputElements.course;
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        //console.log('Subject', res);
        this.subjectList = res.batchesList;
      },
      err => {
        this.msgService.showErrorMessage('error', '', err.error.message);
        this.auth.hideLoader();
        //console.log(err);
      }
    )
  }

  updateSubject() {   // after selecting batch update course planner payload value
    if (!this.jsonFlag.isProfessional) {   // for Course Model
      this.coursePlannerFilters.batch_id = this.inputElements.subject;
    }
    else {  // For Batch Model
      this.coursePlannerFilters.batch_id = this.inputElements.batch_id;
      let temp = this.batchList.filter(x => x.batch_id == this.inputElements.batch_id);
      this.courseStartDate = '';
      this.courseEndDate = '';
      if (temp) {
        this.courseStartDate = temp[0].start_date;
        this.courseEndDate = temp[0].end_date;
      }
    }
  }

  updateFacultyInFilter() {  //  set faculty id in course planner payload
    this.coursePlannerFilters.teacher_id = this.inputElements.faculty;
  }

  toggleFilter() {  // show hide filter
    if (this.filterShow) {
      this.filterShow = false;
    }
    else {
      this.filterShow = true;
    }
  }

  updateDateFilter(inputDateFilter, e) {

    this.filterDateInputs.thisWeek = false;
    this.filterDateInputs.lastWeek = false;
    this.filterDateInputs.thisMonth = false;
    this.filterDateInputs.custom = false;

    if (inputDateFilter == 'custom') {   //  Custom
      this.openCalendar('customeDate');
      this.filterDateInputs.custom = true;
      e.currentTarget.checked = true;
    }
    else if (inputDateFilter == 'lastWeek') {     // Last week
      this.coursePlannerFilters.from_date = moment().subtract(1, 'weeks').startOf('isoWeek').format("YYYY-MM-DD");
      this.coursePlannerFilters.to_date = moment().subtract(1, 'weeks').endOf('isoWeek').format("YYYY-MM-DD");
      this.filterDateInputs.lastWeek = true;
      e.currentTarget.checked = true;
    }
    else if (inputDateFilter == 'thisMonth') {     // This month
      this.coursePlannerFilters.from_date = moment().format("YYYY-MM-01");
      this.coursePlannerFilters.to_date = moment().format("YYYY-MM-") + moment().daysInMonth();
      this.filterDateInputs.thisMonth = true;
      e.currentTarget.checked = true;
    }
    else if (inputDateFilter == 'thisWeek') {   // This Week
      this.coursePlannerFilters.from_date = moment().isoWeekday("Monday").format("YYYY-MM-DD");
      this.coursePlannerFilters.to_date = moment().weekday(7).format("YYYY-MM-DD");
      this.filterDateInputs.thisWeek = true;
      e.currentTarget.checked = true;
    }

  }

  updateStatusFilter(e, statusFilter) {
    if (!e.currentTarget.checked) {   // if checkbox is unchecked then set courseplanner payload
      if (statusFilter == 'upcoming') {
        this.coursePlannerFilters.isUpcoming = "N";
      }
      else if (statusFilter == 'pending') {
        this.coursePlannerFilters.isPending = "N";
      }
      else if (statusFilter == 'completed') {
        this.coursePlannerFilters.isCompleted = "N";
      }
      else if (statusFilter == 'cancelled') {
        this.coursePlannerFilters.isCancelled = "N";
      }
    }
    else if (e.currentTarget.checked) {   // if checkbox is getting checked
      if (statusFilter == 'upcoming') {
        this.coursePlannerFilters.isUpcoming = "Y";
      }
      else if (statusFilter == 'pending') {
        this.coursePlannerFilters.isPending = "Y";
      }
      else if (statusFilter == 'completed') {
        this.coursePlannerFilters.isCompleted = "Y";
      }
      else if (statusFilter == 'cancelled') {
        this.coursePlannerFilters.isCancelled = "Y";
      }
    }
  }

  openCalendar(id) {
    document.getElementById(id).click();
  }

  updateFilterDateRange(e) {
    if (this.filterDateInputs.custom) {
      this.coursePlannerFilters.from_date = moment(e[0]).format("YYYY-MM-DD");
      this.coursePlannerFilters.to_date = moment(e[1]).format("YYYY-MM-DD");
    }
  }

  getData() {   //  Fetch Course Planner data according to filters
    this.filterShow = false;
    this.jsonFlag.showHideColumn = false;
    this.auth.showLoader();
    // Course/bacth model and master course is selected
    if ((!this.jsonFlag.isProfessional && !this.schoolModel && this.coursePlannerFilters.master_course_name == "-1") ||
    (!this.jsonFlag.isProfessional && this.schoolModel && this.coursePlannerFilters.standard_id == "-1") ||
      (this.jsonFlag.isProfessional && this.coursePlannerFilters.standard_id == "-1")) {
        let msg = this.schoolModel ? 'Please select standard' : 'Please select master course';
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', msg);
      this.auth.hideLoader();
      return;
    }
    else {   // Get Course Planner Data
      if(this.schoolModel) {
        this.coursePlannerFilters.master_course_name = '';
      }
      this.classService.getCoursePlannerData(this.coursePlannerFilters, this.coursePlannerFor).subscribe(
        res => {
          this.auth.hideLoader();
          this.allData = res;
          if (this.allData.length == 0) {
            this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No result found");
          }
          else {
            this.totalCount = this.allData.length;
            this.pageIndex = 1;
            this.fectchTableDataByPage(this.pageIndex);
          }
        },
        err => {
          this.auth.hideLoader();
          this.coursePlannerData = [];
          this.totalCount = 0;
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        }
      );
    }
  }

  showHideCol() {   // toggle function to show and hide menu/pop up
    if (this.jsonFlag.showHideColumn) {
      this.jsonFlag.showHideColumn = false;
    }
    else {
      this.jsonFlag.showHideColumn = true;
    }
  }

  hideCol(e) {   //  change column of column to show and hide
    if (!e.currentTarget.checked) {
      this.checkedColCounter++;
    }
    else {
      this.checkedColCounter--;
    }
  }

  hideShowHideMenu() {   // HIDE --> show hide menu
    this.jsonFlag.showHideColumn = false;
  }


  /*** pagination functions */
  /* Fetch next set of data from server and update table */
  fetchNext() {
    this.pageIndex++;
    this.fectchTableDataByPage(this.pageIndex);
  }

  /* Fetch previous set of data from server and update table */
  fetchPrevious() {
    this.pageIndex--;
    this.fectchTableDataByPage(this.pageIndex);
  }

  /* Fetch table data by page index */
  fectchTableDataByPage(index) {
    this.pageIndex = index;
    let startindex = this.displayBatchSize * (index - 1);
    this.coursePlannerData = this.getDataFromDataSource(startindex);
  }

  // get  appropriate course planner data according to page
  getDataFromDataSource(startindex) {
    let t = this.allData.slice(startindex, startindex + this.displayBatchSize);
    return t;
  }

  /* Fetches Data as per the user selected batch size */
  updateTableBatchSize(num) {
    this.pageIndex = 1;
    this.displayBatchSize = parseInt(num);
    this.getData();
  }


  // All pop up section with their functions

  initiateRescheduleClass(selected) {  // Reschdule class pop up
    this.classMarkedForAction = selected;
    this.isReschedulePop = true;
  }

  initiateRemiderClass(selected) {   // Notify to student pop up
    this.classMarkedForAction = selected;
    this.isReminderPop = true;
  }

  initiateCancelClass(selected) {  //  Cancel class for course model pop up
    this.classMarkedForAction = selected;
    this.isCancelPop = true;
  }

  initiateCourseCancelClass(selected) {  // cancel class for batch model
    this.classMarkedForAction = selected;
    this.isCourseCancel = true;
  }

  getVisibility(c): boolean {  // hide upcoming activity
    let d = moment(c.class_date).format("YYYY-MM-DD");
    if (d >= moment(new Date()).format("YYYY-MM-DD")) {
      return true;
    }
    else {
      return false;
    }
  }

  getCheckedStatus(id: string) {
    if (id === "notifyCancel") {
      return true;
    }
    else if (id === 'resheduleNotified') {
      return true;
    }
  }

  notifyRescheduleUpdate(e) {
    if (e.target.checked) {
      this.resheduleNotified = "Y";
    }
    else {
      this.resheduleNotified = "N";
    }
  }

  closeRescheduleClass() {   // close reScheduleClass pop and clear array
    this.isReschedulePop = false;
    this.reschedDate = new Date();
    this.reschedReason = "";
    this.timepicker = {
      reschedStartTime: {
        hour: '12 PM',
        minute: '00',
        meridian: ''
      },
      reschedEndTime: {
        hour: '1 PM',
        minute: '00',
        meridian: ''
      },
    }
  }

  rescheduleClass() {   // Reschdule Class

    if (this.reschedReason == null || this.reschedReason == "") {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter reschedule reason');
      return;
    }

    if (moment().format('YYYY-MM-DD') > moment(this.reschedDate).format('YYYY-MM-DD')) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter future reschedule date');
      return;
    }

    let check = this.checkIfTimeProvided(this.timepicker.reschedStartTime.hour);
    if (check) {
      let startTime = this.timepicker.reschedStartTime.hour.split(' ');
      this.timepicker.reschedStartTime.hour = startTime[0];
      this.timepicker.reschedStartTime.meridian = startTime[1];
    } else {
      return;
    }
    let check1 = this.checkIfTimeProvided(this.timepicker.reschedEndTime.hour);
    if (check1) {
      let endTime = this.timepicker.reschedEndTime.hour.split(' ');
      this.timepicker.reschedEndTime.hour = endTime[0];
      this.timepicker.reschedEndTime.meridian = endTime[1];
    } else {
      return;
    }
    if (this.reSheduleFormValid()) {
      let temp1: any = {
        cancel_note: this.reschedReason,
        schd_id: this.classMarkedForAction.schedule_id,
        is_notified: this.resheduleNotified
      }
      let temp2 = {
        class_date: moment(this.reschedDate).format("YYYY-MM-DD"),
        start_time: this.timepicker.reschedStartTime.hour + ":" + this.timepicker.reschedStartTime.minute + " " + this.timepicker.reschedStartTime.meridian,
        end_time: this.timepicker.reschedEndTime.hour + ":" + this.timepicker.reschedEndTime.minute + " " + this.timepicker.reschedEndTime.meridian,
        duration: this.getDifference()
      }
      let obj = {
        batch_id: this.classMarkedForAction.batch_id,
        cancelSchd: [],
        extraSchd: []
      }
      obj.cancelSchd.push(temp1);
      obj.extraSchd.push(temp2);

      this.auth.showLoader();
      this.widgetService.reScheduleClass(obj).subscribe(
        res => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'The request has been processed');
          this.closeRescheduleClass();
          this.getData();
        },
        err => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        }
      )
    } else {
      this.timepicker.reschedStartTime.hour = this.timepicker.reschedStartTime.hour + " " + this.timepicker.reschedStartTime.meridian;
      this.timepicker.reschedEndTime.hour = this.timepicker.reschedEndTime.hour + " " + this.timepicker.reschedEndTime.meridian;
    }
  }

  checkIfTimeProvided(data) {
    if (data == "" || data == null) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct time');
      return false;
    } else {
      return true;
    }
  }

  getDifference(): any {
    let startTime = this.timepicker.reschedStartTime.hour + ":" + this.timepicker.reschedStartTime.minute + " " + this.timepicker.reschedStartTime.meridian;
    let endTime = this.timepicker.reschedEndTime.hour + ":" + this.timepicker.reschedEndTime.minute + " " + this.timepicker.reschedEndTime.meridian;
    let start = moment.utc(startTime, "HH:mm A");
    let end = moment.utc(endTime, "HH:mm A");
    if (end.isBefore(start)) {
      end.add(1, 'day');
    }
    let d: any = moment.duration(end.diff(start));
    return d._milliseconds / 60000;
  }

  isTimeValid() {

    if (this.timepicker.reschedStartTime.hour.trim() != '' && this.timepicker.reschedStartTime.minute.trim() != '' && this.timepicker.reschedStartTime.meridian.trim() != '' && this.timepicker.reschedEndTime.hour.trim() != '' && this.timepicker.reschedEndTime.minute.trim() != '' && this.timepicker.reschedEndTime.meridian.trim() != '') {
      let startTime = this.timepicker.reschedStartTime.hour + ":" + this.timepicker.reschedStartTime.minute + " " + this.timepicker.reschedStartTime.meridian;
      let endTime = this.timepicker.reschedEndTime.hour + ":" + this.timepicker.reschedEndTime.minute + " " + this.timepicker.reschedEndTime.meridian;
      let start = moment.utc(startTime, "HH:mm A");
      let end = moment.utc(endTime, "HH:mm A");
      if ((parseInt(start.format("HH")) < parseInt(end.format("HH")))) {
        return true;
      }
      else if ((parseInt(start.format("HH")) == parseInt(end.format("HH"))) && (parseInt(start.format("mm")) < parseInt(end.format("mm")))) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  reSheduleFormValid(): boolean {
    /* Date Validation */
    if (this.reschedDate != '' && this.reschedDate != 'Invalid Date') {
      /* Reschedule Reason */
      if (this.reschedReason.trim() != '') {
        /* Validate Time */
        if (this.isTimeValid()) {
          return true;
        }
        else {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter a complete start and end time for rescheduling');
          return false;
        }
      }
      else {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Reschedule Reason Missing', 'Please mention a reason for rescheduling the class');
        return false;
      }
    }
    /* Date not found */
    else {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Date Missing', 'Please select a date to reschedule class');
      return false;
    }
  }

  // FOR NOTIFY POP UP
  closeRemiderClass() {
    this.isReminderPop = false;
    this.reminderRemarks = "";
    this.remarksLimit = 50;
  }

  countRemarksLimit() {
    this.remarksLimit = 50 - this.reminderRemarks.length;
  }

  sendReminder() {  // Send Reminder course wise only

    let obj = {
      batch_id: this.classMarkedForAction.batch_id,
      class_schedule_id: this.classMarkedForAction.schedule_id,
      is_exam_schedule: "N",
      remarks: this.reminderRemarks
    };
    this.auth.showLoader();
    this.widgetService.notifyStudentSchedule(obj).subscribe(
      res => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Reminder Sent', 'Students have been notified');
        this.closeRemiderClass();
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }


  initiateCourseRemiderClass() {  // course reminder for class for course-wise
    let obj = {
      course_ids: this.classMarkedForAction.course_id,
      inst_id: this.jsonFlag.institute_id,
      master_course: this.classMarkedForAction.master_course_name,
      requested_date: moment(this.classMarkedForAction.date).format("YYYY-MM-DD"),
      remarks: this.reminderRemarks
    }
    this.auth.showLoader();
    this.widgetService.remindCourseLevel(obj).subscribe(
      res => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Reminder Sent', 'The student have been notified');
        this.reminderRemarks = "";
        this.closeRemiderClass();
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Unable to Send Reminder', err.error.message);
      }
    )
  }

  // Cancel class  For Course Model pop Section

  closeCancelClass() {
    // this.isCancelPop = false;
    this.cancellationReason = '';
  }

  cancelClass() {
    let obj = {
      batch_id: this.classMarkedForAction.batch_id,
      cancelSchd: []
    }
    let schd = {
      cancel_note: this.cancellationReason,
      schd_id: this.classMarkedForAction.schedule_id,
      is_notified: this.is_notified
    }
    obj.cancelSchd.push(schd);
    // this.auth.showLoader();
    this.widgetService.cancelClassSchedule(obj).subscribe(
      res => {
        // this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'The requested scheduled has been cancelled');
        this.closeCancelClass();
        this.getData();
      },
      err => {
        // this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }

  notifyCancelUpdate(e) {
    if (e.target.checked) {
      this.is_notified = "Y";
    }
    else {
      this.is_notified = "N";
    }
  }


  //  Cancel class for batch model pop up

  closeCourseCancelClass() {
    this.isCourseCancel = false;
    this.cancellationReason = '';
  }

  cancelCourseClass() {
    let obj = {
      cancel_reason: this.cancellationReason,
      course_ids: this.classMarkedForAction.course_id,
      inst_id: this.jsonFlag.institute_id,
      is_cancel_notify: this.is_notified,
      master_course: this.classMarkedForAction.master_course_name,
      requested_date: moment(this.classMarkedForAction.date).format("YYYY-MM-DD")
    }
    // this.auth.showLoader();
    this.widgetService.cancelCourseSchedule(obj).subscribe(
      res => {
        // this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Course ', 'The requested scheduled has been cancelled');
        this.closeCourseCancelClass();
        this.getData();
      },
      err => {
        // this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }

  cancelBatchClass() {
    if (this.cancellationReason == "" || this.cancellationReason == null) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Cancellation Reason', 'Please enter cancellation reason');
      return;
    }
    let obj = {
      batch_id: this.classMarkedForAction.batch_id,
      cancelSchd: this.getCancelReason()
    }
    // this.auth.showLoader();
    this.widgetService.cancelBatchSchedule(obj).subscribe(
      res => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Batch ', 'The requested scheduled has been cancelled');
        this.closeCourseCancelClass();
        this.getData();
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }

  getCancelReason(): any[] {
    let temp = [];
    let obj = {
      cancel_note: this.cancellationReason,
      is_notified: this.is_notified,
      schd_id: this.classMarkedForAction.schedule_id
    }
    temp.push(obj);
    return temp;
  }


  //  Notify to Cancel Class
  notifyCancelClass(selected) {
    if (confirm('Are you sure you want to notify?')) {
      let obj = {};
      if (!this.jsonFlag.isProfessional) {
        obj = {
          "institute_id": this.jsonFlag.institute_id,
          "schedule_id": selected.schedule_id,
          "to_date": selected.date,
          "course_id": selected.course_id
        }
      }
      else {
        obj = {
          "institute_id": this.jsonFlag.institute_id,
          "schedule_id": selected.schedule_id,
          "to_date": selected.date,
          "batch_id": selected.batch_id
        }
      }

      this.auth.showLoader();
      this.classService.notifyCancelClass(obj, 'class').subscribe(
        res => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Cancelled schedule notification', 'Notification has been sent successfully');
        },
        err => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        }
      )
    }
  }

  // Mark Attendance Section
  initiateMarkAttendance(selected) {
    let obj = {
      batch_id: selected.batch_id,
      schd_id: selected.schedule_id,
      batch_name: selected.batch_name,
      subject_id: selected.subject_id,
      topics_covered: selected.topic_covered_ids,
      course_name: selected.course_name,
      master_course_name: selected.master_course_name,
      forCourseWise: false,
      forSubjectWise: true,
      isExam: false,
      is_attendance_marked: selected.is_attendance_marked
    }
    let batch_info = JSON.stringify(obj);
    this.storeSession();
    sessionStorage.setItem('batch_info', btoa(batch_info));
    sessionStorage.setItem('isSubjectView', String(true));
    this.router.navigate(['/view/dashboard/mark-attendance']);
  }

  redirect() {
    this.storeSession();
    let url = this.schoolModel ? '/view/course/create/routine/create' : '/view/course/create/class/add';
    this.router.navigate([url]);
  }

  storeSession() {  // Set all course planner filter values in session
    this.sessionFiltersArr.isCompleted = this.filterStatusInputs.completed;
    this.sessionFiltersArr.isPending = this.filterStatusInputs.attendancePending;
    this.sessionFiltersArr.isCancelled = this.filterStatusInputs.cancelled;
    this.sessionFiltersArr.isUpcoming = this.filterStatusInputs.upcoming;
    this.sessionFiltersArr.from_date = String(this.coursePlannerFilters.from_date);
    this.sessionFiltersArr.to_date = String(this.coursePlannerFilters.to_date);
    this.sessionFiltersArr.masterCourse = this.inputElements.masterCourse;
    this.sessionFiltersArr.courseId = this.inputElements.course;
    this.sessionFiltersArr.batchId = this.inputElements.subject;

    this.sessionFiltersArr.standardId = this.inputElements.standard_id;
    this.sessionFiltersArr.subjectId = this.inputElements.subject_id;
    if (!this.jsonFlag.isProfessional) {
      this.sessionFiltersArr.batchId = this.inputElements.subject;
    }
    else {
      this.sessionFiltersArr.batchId = this.inputElements.batch_id;
    }

    this.sessionFiltersArr.facultyId = this.inputElements.faculty;
    this.sessionFiltersArr.thisWeek = this.filterDateInputs.thisWeek;
    this.sessionFiltersArr.lastWeek = this.filterDateInputs.lastWeek;
    this.sessionFiltersArr.thisMonth = this.filterDateInputs.thisMonth;
    this.sessionFiltersArr.custom = this.filterDateInputs.custom;

    let filter_info = JSON.stringify(this.sessionFiltersArr);
    sessionStorage.setItem('isFromCoursePlanner', String(true));
    sessionStorage.setItem('isClass', String(true));
    sessionStorage.setItem('coursePlannerFilter', filter_info);
  }

  closeAll() {
    this.filterShow = false;
  }

  // Edit class functions
  editCourseClass(course) {
    this.editClass.description = course.description;
    this.editClass.homework = course.homework_assigned;
    this.editClass.faculty = course.teacher_id;
    this.editClass.topic_covered_ids = course.topic_covered_ids;
    this.editClass.topic_covered_names = course.topics_covered;
    this.editClass.subject_id = course.subject_id;
    this.editClass.course_id = course.course_id;
    this.editClass.class_sche_date = course.date;
    this.editClass.class_schedule_id = course.schedule_id;
    this.editClass.batch_id = course.batch_id;
    this.editClass.custom_class_type = course.custom_class_type;
    this.editClass.duration = course.duration;
    this.editClass.room_no = course.room_no;
    this.editClass.start_time = course.start_time;
    this.editClass.end_time = course.end_time;
  }

  toggleArrow(topic) {
    topic.isExpand = !(topic.isExpand);
  }

  fetchTopics() {
    this.auth.showLoader();
    let subject_id = '';
    if (this.jsonFlag.isProfessional) {
      subject_id = this.editClass.course_id;
    }
    else {
      subject_id = this.editClass.subject_id;
    }
    this.topicService.getAllTopicsSubTopics(subject_id).subscribe((resp) => {
      this.auth.hideLoader();
      this.topicsList = [];
      this.totalTopicsList = [];
      this.topicsList = resp;
      if (!!this.topicsList && this.topicsList.length > 0) {
        $('#topicModel').modal('show');
        $('#editClass').modal('hide');
        this.topicsList.forEach(tpc => {
          this.totalTopicsList.push(tpc);
          tpc.checked = false;
          if (tpc.subTopic.length) {
            this.getAllTopics(tpc.subTopic)
          }
        })
        let topicIds = this.editClass.topic_covered_ids.split('|');
        topicIds.forEach(tpc => {
          this.topicsList.forEach(tp => {
            if (tp.topicId == tpc) {
              tp.checked = true;
            }
          })
        })
      }
      else {
        this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No topics available to link");
      }
    }, err => {
      this.auth.hideLoader();
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
    })
  }

  getAllTopics(topic) {
    topic.forEach(obj => {
      this.totalTopicsList.push(obj);
      obj.checked = false;
      if (obj.subTopic.length) {
        this.getAllTopics(obj.subTopic)
      }
    })
  }

  selectTopics(topic, event) {
    topic.checked = !topic.checked;
    if (topic.subTopic.length) {
      this.checkAllSubTopics(topic.subTopic, event.target.checked);
    }
    if (!event.target.checked) {
      if (topic.parentTopicId != 0) {
        this.uncheckParent(topic);
      }
    }
    this.checkParents(topic);
  }

  checkAllSubTopics(topic, param) {
    topic.forEach(obj => {
      if (param) {
        obj.checked = true;
      }
      else {
        obj.checked = false
      }
      if (obj.subTopic.length) {
        this.checkAllSubTopics(obj.subTopic, param);
      }
    })
  }

  //uncheck parent if any of the child is deselected
  uncheckParent(topic) {
    var getParentTopic = this.totalTopicsList.find(obj => obj.topicId == topic.parentTopicId);
    if (!!getParentTopic) {
      getParentTopic.checked = false;
      if (getParentTopic.parentTopicId != 0) {
        this.uncheckParent(getParentTopic)
      }
    }
  }
  //check parent if all subtopics are checked
  checkParents(topic) {
    var checkAll: boolean = true;
    if (this.totalTopicsList.find(el => el.topicId == topic.topicId) != undefined) {
      var parentTopic = this.totalTopicsList.find(ele => ele.topicId == topic.parentTopicId);
      if (parentTopic != undefined) {
        if (parentTopic.subTopic.length) {
          parentTopic.subTopic.forEach(subTpc => {
            if (!subTpc.checked) {
              checkAll = false;
            }
          });
          if (checkAll) {
            parentTopic.checked = true;
            if (parentTopic.parentTopicId != 0) {
              this.checkParents(parentTopic)
            }
          }
        }
      }
    }
  }

  showEditOption() {
    $('#topicModel').modal('hide');
    $('#editClass').modal('show');
  }

  saveTopics() {
    var getSelectedTopics = this.totalTopicsList.filter(el => el.checked == true);
    var getTopicIds;
    if (getSelectedTopics != undefined) {
      getTopicIds = getSelectedTopics.map(obj => {
        return obj.topicId;
      })
      let getTopicNames = getSelectedTopics.map(obj => {
        return obj.topicName;
      })
      getTopicIds = getTopicIds.join('|')
      this.editClass.topic_covered_ids = getTopicIds;
      this.editClass.topic_covered_names = getTopicNames.join('|');
      $('#topicModel').modal('hide');
      $('#editClass').modal('show');
    }
  }

  updateClass() {
    let obj;
    if (!this.jsonFlag.isProfessional) { // for course model
      if (this.editClass.faculty != "-1") {
        obj = {
          "batch_id": this.editClass.batch_id,
          "is_exam_schedule": "N",
          "class_schedule_id": this.editClass.class_schedule_id,
          "class_desc": this.editClass.description,
          "topics_covered": this.editClass.topic_covered_ids,
          "homework_assigned": this.editClass.homework,
          "cousre_planner_update_operation": "desc_and_topic_covered_update",
          "alloted_teacher_id": this.editClass.faculty,
        };
      }
      else {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please select faculty");
      }
    }
    else {   // For batch model
      obj = {
        "batch_id": this.editClass.batch_id,
        "is_exam_schedule": "N",
        "class_schedule_id": this.editClass.class_schedule_id,
        "class_desc": this.editClass.description,
        "topics_covered": this.editClass.topic_covered_ids,
        "homework_assigned": this.editClass.homework,
        "cousre_planner_update_operation": "desc_and_topic_covered_update"
      }
    }
    this.classService.changeClassTeacher(obj).subscribe(
      res => {
        let result: any = res;
        $('#editClass').modal('hide');
        if (result.statusCode == 200) {
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Class updated successfully');
          this.clearEditValues();
          this.getData();
        }
      },
      err => {
        $('#editClass').modal('hide');
        this.clearEditValues();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }

  clearEditValues() {
    this.editClass.description = "";
    this.editClass.topic_covered_ids = "";
    this.editClass.topic_covered_names = "";
    this.editClass.subject_id = "";
    this.editClass.course_id = "";
    this.editClass.class_sche_date = "";
    this.editClass.class_schedule_id = "";
    this.editClass.batch_id = "";
    this.editClass.start_time = "";
    this.editClass.end_time = "";
    this.editClass.total_marks = "";
    this.editClass.duration = "";
  }
}
