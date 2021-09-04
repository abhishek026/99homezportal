import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckableSettings, TreeItemLookup } from '@progress/kendo-angular-treeview';
import * as moment from 'moment';
import { of } from 'rxjs';
import { AuthenticatorService, HttpService, LoginService, MessageShowService } from '../../../../..';
import { ClassScheduleService } from '../../../../../services/course-services/class-schedule.service';
import { TopicListingService } from '../../../../../services/course-services/topic-listing.service';


@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})

export class ClassAddComponent implements OnInit, OnDestroy {
  public checkedKeys: any[] = [];
  customTable: any = [];
  institute_id: any = sessionStorage.getItem('institution_id');
  courseModelStdList: any[] = [];
  courseModelSubList: any[] = [];
  courseModelBatchList: any[] = [];
  subBranch: any[] = [];
  masterCourse: any[] = [];
  teachers: any[] = [];
  instituteSetting: any[] = [];
  courseList: any[] = [];
  subjectListDataSource: any = [];
  fetchedCourseData: any = [];
  teacherListDataSource: any = [];
  customListDataSource: any = [];
  classScheduleArray: any = [];
  selectedDateArray: any = [];
  selctedScheduledClass: any = [];
  weekDaysSelected: any = [];
  weekDays: any = [];
  weekDaysTable: any = [];
  canceLClassTable: any = [];
  extraClassTable: any = [];
  hourArr: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  minArr: any[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  meridianArr: any[] = ["AM", "PM"];
  times: any[] = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM']
  addClassDetails = {
    batch_id: '',
    subject_id: '',
    subject_name: '',
    start_hour: '12 PM',
    start_minute: '00',
    start_meridian: '',
    end_hour: '1 PM',
    end_minute: '00',
    end_meridian: '',
    teacher_id: '',
    teacher_name: '',
    class_desc: '',
    room_no: '',
    custom_class_type: 'Regular',
    duration: ''
  }

  customRec = {
    start_hour: '',
    start_minute: '',
    start_meridian: '',
    end_hour: '',
    end_minute: '',
    end_meridian: '',
    radioEndDate: {
      radioEndDateSelection: false,
      radioDate: '',
    },
    radioOn: {
      radioONSelection: false,
      radioOnDate: '',
    },
    radioAfter: {
      radioAfterSelection: false,
      occurenceValue: ''
    }
  }
  addDates = {
    selectedDate: '',
    error: '',
  }
  timepicker: any = {
    universalStartTime: {
      hour: '',
      minute: '',
      meridian: ''
    },
    universalEndTime: {
      hour: '',
      minute: '',
      meridian: ''
    },
  }
  fetchMasterCourseModule: any = {
    master_course: "-1",
    requested_date: moment().format("YYYY-MM-DD"),
    inst_id: sessionStorage.getItem('institute_id'),
    course_id: "-1",
    selected_day: "-1"
  }
  fetchMasterBatchModule: any = {
    standard_id: "-1",
    subject_id: "-1",
    batch_id: '-1',
    inst_id: sessionStorage.getItem('institute_id'),
    assigned: "N"
  }

  custom = {
    date: moment().format("YYYY-MM-DD"),
    start_hour: '12 PM',
    start_minute: '00',
    end_hour: '1 PM',
    end_minute: '00',
    desc: '',
    topics_covered: '',
  }
  addExtraClass = {
    date: moment().format("YYYY-MM-DD"),
    start_hour: '12 PM',
    start_minute: '00',
    end_hour: '1 PM',
    end_minute: '00',
    desc: '',
    topics_covered: '',
  }

  mainStartTime = {
    hour: '12 PM',
    minute: '00',
  }
  mainEndTime = {
    hour: '1 PM',
    minute: '00',
  }

  weeklyCommonStartTime = {
    hour: '12 PM',
    minute: '00',
  }

  weeklyCommonEndTime = {
    hour: '1 PM',
    minute: '00',
  }

  cancelRowSelected: any = '';
  courseStartDate: any = '';
  courseEndDate: any = '';
  selectedClassFrequency: any = 'WEEK';
  courseModelBatch: any;
  batchDetails: any;
  messages: any;
  batchFrequency: any = '1';
  showPopUp: boolean = false;
  showPopUpRecurence: boolean = false;
  showPopUpCancellation: boolean = false;
  isProfessional: boolean = false;
  isClassFormFilled: boolean = false;
  createCustomSchedule: boolean = false;
  showCancelWeeklyBtn: boolean = false;
  showWarningPopup: boolean = false;
  cancelWeeklySchedulePop: boolean = false;
  IsTopicSelectedMode: string = 'add';
  subject_name = '';

  topicsList: any = [];
  showTopicsModal = false;
  totalTopicsList: any = [];
  selectedTopics: any = '' //join ids by '|'
  selectedTopicsNames: any = '';
  selectedTopicsListObj: any = []; //checked item list --> batch modal
  selectedSubjectInBatch: any;
  showCustomEditModal: boolean = false;
  getSubjectObject: any = '';
  weeklyScheduleCan = {
    date: moment().format("YYYY-MM-DD"),
    cancel_note: '',
    is_notified: true
  }
  weekDaysList: any[] = [];
  weekDaysListWithoutWeekend: any[] = [];

  // Topic listing variables
  selectedSubId: any;
  selectedRow: any;
  topicBox: boolean = true;
  selectAllTopics: boolean = false;
  addLinkStatus: string = '';

  public get checkableSettings(): CheckableSettings {
    return {
      checkChildren: true,
      checkParents: true,
      enabled: true,
      mode: 'multiple',
      checkOnClick: false
    };
  }

  public topicsData: any;
  public children;
  public hasChildren;
  public isExpanded;
  fullResponse: any = [];
  multiClickDisabled: boolean = false;
  coursePlannerStatus: any;
  schoolModel: boolean = false;

  constructor(
    private router: Router,
    private _http: HttpService,
    private login: LoginService,
    private classService: ClassScheduleService,
    private topicService: TopicListingService,
    private auth: AuthenticatorService,
    private msgService: MessageShowService,
    private cd: ChangeDetectorRef
  ) {
    if (sessionStorage.getItem('userid') == null) {
      this.router.navigate(['/authPage']);
    }
  }

  ngOnInit() {
    this.messages = this.msgService.object;
    /* Prerequiste loaded */
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
    /* fetching prefilled data */
    this.fetchPrefillData();
    if (!this.isProfessional) {
      this.checkForEditMode();
    }
    // this.switchActiveView();
    this.checkForCoursePlannerRoute();
    this.getAllWeekDay();
  }

  ngOnDestroy() {
    sessionStorage.setItem('isFromCoursePlanner', String(false));
  }


  checkForCoursePlannerRoute() {
    this.coursePlannerStatus = sessionStorage.getItem('isFromCoursePlanner')
  }
  checkNotifyDate(data) {
    if (moment(data.class_date).valueOf() <= moment().subtract(1, 'days').valueOf()) {
      return false;
    } else
      return true;
  }

  checkCurrentDate(data, class_date) {
    if (data.is_attendance_marked == 'N') {
      if (moment(class_date).valueOf() <= moment(new Date()).valueOf()) {
        return false;
      } else
        return true;
    } else {
      if (moment(class_date).valueOf() <= moment(new Date()).valueOf()) {
        return false;
      } else
        return true;
    }
  }

  // For Weekly class schedule

  // All day of the week
  getAllWeekDay() {
    this.auth.showLoader();
    this.classService.getDayofWeekAll().subscribe(
      res => {
        this.auth.hideLoader();
        this.weekDaysList = res;
        console.log(this.weekDaysList)
        for(var i=0; i<res.length; i++) {
          if(!res[i].is_weekend) {
            this.weekDaysListWithoutWeekend.push(res[i]);
          }
        }
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
      }
    )
  }

  // Apply start time and end time for all week days
  applyTimeForAll() {

    let startTime = moment(this.createTimeInFormat(this.weeklyCommonStartTime.hour, this.weeklyCommonStartTime.minute, 'comp'), 'h:mma');
    let endTime = moment(this.createTimeInFormat(this.weeklyCommonEndTime.hour, this.weeklyCommonEndTime.minute, 'comp'), 'h:mma');

    if (!(startTime.isBefore(endTime))) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
      return
    }
    else {
      this.weekDaysList.forEach(element => {
        element.start_time = this.getNewTimeFormatJson(this.weeklyCommonStartTime.hour.split(' ')[0] + ':' + this.weeklyCommonStartTime.minute + ' ' + this.weeklyCommonStartTime.hour.split(' ')[1]);
        element.end_time = this.getNewTimeFormatJson(this.weeklyCommonEndTime.hour.split(' ')[0] + ':' + this.weeklyCommonEndTime.minute + ' ' + this.weeklyCommonEndTime.hour.split(' ')[1]);
      });
    }

  }

  public handleChecking(itemLookup: TreeItemLookup): void {
    let subTopic = itemLookup.item.dataItem.subTopic;
    let arrayIndex = this.checkedKeys.indexOf(itemLookup.item.dataItem.topicId);
    if (arrayIndex > -1) {
      // this.checkedKeys.splice(arrayIndex, 1);
      let subTopic = itemLookup.item.dataItem.subTopic;
      subTopic.length ? this.removeNLevelTopic(subTopic) : '';
    } else {
      // this.checkedKeys.push(itemLookup.item.dataItem.topicId);
      if (subTopic.length)
        this.AddNLevelTopic(subTopic);
    }
    this.cd.markForCheck();
  }

  removeNLevelTopic(subTopics) {
    if (subTopics.length == 0) {
      let arrayIndex = this.checkedKeys.indexOf(subTopics.topicId);
      this.checkedKeys.splice(arrayIndex, 1);
      return;
    }
    else {
      subTopics.forEach((object) => {
        let arrayIndex = this.checkedKeys.indexOf(object.topicId);
        if (arrayIndex > -1) {
          this.checkedKeys.splice(arrayIndex, 1);
        }
        if (object.subTopic.length) {
          this.removeNLevelTopic(object.subTopic);
        }
      });
    }
    this.cd.markForCheck();
  }

  AddNLevelTopic(subTopics) {
    if (subTopics.length == 0) {
      this.checkedKeys.push(subTopics.topicId);
      return;
    }
    else {
      subTopics.forEach((object) => {
        let arrayIndex = this.checkedKeys.indexOf(object.topicId);
        if (arrayIndex == -1) {
          this.checkedKeys.push(object.topicId);
        }
        if (object.subTopic.length) {
          this.AddNLevelTopic(object.subTopic);
        }
      });
    }
  }



  checkForEditMode() {

    let str = sessionStorage.getItem('editClass');
    if (str == "" || str == null || str == undefined) {
      return;
    }
    let data = JSON.parse(str);
    if (data == "" || data == null || data == undefined) {
      return false;
    } else {
      this.fetchMasterCourseModule = {
        master_course: data.master_course,
        requested_date: moment(data.date).format("YYYY-MM-DD"),
        inst_id: sessionStorage.getItem('institute_id'),
        course_id: data.course_id
      }
      this.getCustomList();
      this.getTeacherList();
      this.updateCourseList(this.fetchMasterCourseModule.master_course);
      setTimeout(() => {
        this.getAllSubjectListFromServer(this.fetchMasterCourseModule);
      }, 300);
      sessionStorage.setItem('editClass', '');
    }
  }


  fetchPrefillData() {
    this.auth.showLoader();
    /* Batch Model */
    if (this.isProfessional) {
      this.classService.getStandardSubjectList(this.fetchMasterBatchModule.standard_id, this.fetchMasterBatchModule.subject_id, this.fetchMasterBatchModule.assigned).subscribe(
        res => {
          this.courseModelBatch = res;
          if (this.fetchMasterBatchModule.standard_id == '-1' && this.fetchMasterBatchModule.subject_id == '-1') {
            this.courseModelStdList = res.standardLi;
            this.courseModelBatchList = res.batchLi;
            this.courseModelSubList = [];
          }
          else if (this.fetchMasterBatchModule.standard_id != '-1' && this.fetchMasterBatchModule.subject_id == '-1') {
            this.courseModelBatchList = res.batchLi;
            this.courseModelSubList = res.subjectLi;
          }
          else if (this.fetchMasterBatchModule.standard_id != '-1' && this.fetchMasterBatchModule.subject_id != '-1') {
            this.courseModelStdList = res.standardLi;
            this.courseModelBatchList = res.batchLi;
          }
        }
      );

      this.getWeekOfDaysFromServer();

    }/* Course Model */
    else {
      /* Get in class schedule || course planner || Time Table */
      this.classService.getAllSubBranches().subscribe(
        res => {
          this.subBranch = res;
        },
        err => { }
      );
      /* Get in class schedule || course planner || Time Table*/
      // this.classService.getAllMasterCourse().subscribe(
      //   res => {
      //     this.masterCourse = res;
      //   },
      //   err => { }
      // );
      this.getMasterCourseKey();
      /* Get in class schedule || Time Table*/
      this.classService.getAllTeachers().subscribe(
        res => {
          this.teachers = res;
        },
        err => { }
      );
    }


    return this.classService.getInstituteSettings().subscribe(
      res => {
        this.auth.hideLoader();
        this.instituteSetting = res;
      },
      err => { }
    )

  }

  getMasterCourseKey() {
    let url = "/api/v1/courseMaster/master-course-list/" + sessionStorage.getItem('institute_id') + '?is_active_not_expire=Y&sorted_by=course_name';

    let keys;
    this.auth.showLoader();
    this._http.getData(url).subscribe(
      (data: any) => {
        this.auth.hideLoader();
        this.fullResponse = data.result;
        keys = Object.keys(data.result);

        console.log("keys", keys);

        for (let i = 0; i < keys.length; i++) {
          this.masterCourse.push(keys[i]);
        }
        if (!this.isProfessional) {
          this.checkForEditMode();
        }

      },
      (error: any) => {
        this.auth.hideLoader();
        console.log(error);
      }
    )
  }
  updateCourseList(ev) {
    this.courseList = [];
    this.isClassFormFilled = false;
    let temp = this.fullResponse[this.fetchMasterCourseModule.master_course];
    for (let i = 0; i < temp.length; i++) {
      this.courseList.push(temp[i]);
    }
  }

  submitMasterCourse() {
    if (this.fetchMasterCourseModule.master_course == '-1' || this.fetchMasterCourseModule.course_id == '-1' ||
      this.fetchMasterCourseModule.requested_date == '' || this.fetchMasterCourseModule.requested_date == 'Invalid date'
      || this.fetchMasterCourseModule.requested_date == null || (this.schoolModel && this.fetchMasterCourseModule.selected_day=='-1')) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter all mandatory details');
      return;
    }
    else {
      if(this.schoolModel) {
        this.fetchMasterCourseModule.requested_date = moment().day(this.fetchMasterCourseModule.selected_day).format('YYYY-MM-DD')
      } 
     let requested_date = this.fetchMasterCourseModule.requested_date;
      if (moment(this.courseStartDate).format("YYYY-MM-DD") <= moment(requested_date).format("YYYY-MM-DD") && moment(requested_date).format("YYYY-MM-DD") <= moment(this.courseEndDate).format("YYYY-MM-DD")) {
        this.fetchMasterCourseModule.requested_date = moment(this.fetchMasterCourseModule.requested_date).format("YYYY-MM-DD");
        this.isClassFormFilled = true;
        this.getAllSubjectListFromServer(this.fetchMasterCourseModule);
        this.getCustomList();
        this.getTeacherList();
      } else {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please provides date in between course start and end date');
        return;
      }
    }
  }


  updateSubjectList(ev) {
    this.auth.showLoader();
    this.isClassFormFilled = false;
    this.fetchMasterBatchModule.subject_id = '-1';
    this.classService.getStandardSubjectList(ev, this.fetchMasterBatchModule.subject_id, this.fetchMasterBatchModule.assigned).subscribe(
      res => {
        this.auth.hideLoader();
        this.courseModelBatch = res;
        if (ev == '-1') {
          if (this.fetchMasterBatchModule.subject_id == "-1") {
            this.courseModelStdList = res.standardLi;
            this.courseModelBatchList = res.batchLi;
            this.fetchMasterBatchModule.batch_id = "-1";
            this.fetchMasterBatchModule.subject_id = "-1";
            this.courseModelSubList = [];
          }
          else {
            this.courseModelBatchList = res.batchLi;
            this.fetchMasterBatchModule.batch_id = "-1";
            this.fetchMasterBatchModule.subject_id = "-1";
            this.courseModelSubList = [];
          }
        }
        else if (ev != '-1') {
          if (this.fetchMasterBatchModule.subject_id == '-1') {
            this.fetchMasterBatchModule.batch_id = "-1";
            this.fetchMasterBatchModule.subject_id = "-1";
            this.courseModelBatchList = res.batchLi;
            this.courseModelSubList = res.subjectLi;
          }
          else if (this.fetchMasterBatchModule.subject_id != '-1') {
            this.fetchMasterBatchModule.batch_id = "-1";
            this.fetchMasterBatchModule.subject_id = "-1";
            this.courseModelBatchList = res.batchLi;
            this.courseModelSubList = res.subjectLi;
          }
        }
      }
    );
  }


  submitMasterBatch() {
    /* standard selected */
    if (this.fetchMasterBatchModule.standard_id != '-1' && this.fetchMasterBatchModule.standard_id != -1 && this.fetchMasterBatchModule.standard_id != undefined) {

      /* subject selected  */
      if (this.fetchMasterBatchModule.subject_id != '-1' && this.fetchMasterBatchModule.subject_id != undefined) {

        /* batch selected */
        /* Success */
        /*  */
        if (this.fetchMasterBatchModule.batch_id != '-1' && this.fetchMasterBatchModule.batch_id != undefined) {
          this.batchDetected(this.fetchMasterBatchModule.batch_id);
        }
        /* batch not selected */
        /* Error */
        /*  */
        else if (this.fetchMasterBatchModule.batch_id == '-1' || this.fetchMasterBatchModule.batch_id == undefined) {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, this.messages.batchMsg.notSelect, '');

        }
      }
      /* subject not selected */
      else if (this.fetchMasterBatchModule.subject_id == '-1' || this.fetchMasterBatchModule.subject_id == undefined) {

        this.msgService.showErrorMessage(this.msgService.toastTypes.error, this.messages.batchMsg.inValid, '');
      }
    }
    /* standard not selected */
    else if (this.fetchMasterBatchModule.standard_id == '-1' || this.fetchMasterBatchModule.standard_id == undefined) {

      /* subject selected  */
      if (this.fetchMasterBatchModule.subject_id != '-1' && this.fetchMasterBatchModule.subject_id != undefined) {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, this.messages.batchMsg.notStandard, '');
      }
      /* subject not selected  */
      else if (this.fetchMasterBatchModule.subject_id == '-1' || this.fetchMasterBatchModule.subject_id == undefined) {
        /* batch selected */
        /* Success */
        /*  */

        if (this.fetchMasterBatchModule.batch_id != '-1' && this.fetchMasterBatchModule.batch_id != undefined) {
          this.batchDetected(this.fetchMasterBatchModule.batch_id);
        }
        /* batch not selected */
        /* Error */
        /*  */
        else if (this.fetchMasterBatchModule.batch_id == '-1' || this.fetchMasterBatchModule.batch_id == undefined) {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, this.messages.batchMsg.selectAll, '');
        }
      }
    }
  }


  filterSubjectBatches(ev) {
    console.log(ev);
    this.auth.showLoader();
    this.classService.getStandardSubjectList(this.fetchMasterBatchModule.standard_id, ev, this.fetchMasterBatchModule.assigned).subscribe(
      res => {
        this.auth.hideLoader();
        this.courseModelBatch = res;
        if (this.fetchMasterBatchModule.standard_id == '-1' && this.fetchMasterBatchModule.subject_id == '-1') {

          this.courseModelStdList = res.standardLi;
          this.courseModelBatchList = res.batchLi;
          this.courseModelSubList = [];
        }
        else if (this.fetchMasterBatchModule.standard_id != '-1' && this.fetchMasterBatchModule.subject_id == '-1') {

          this.courseModelBatchList = res.batchLi;
          this.courseModelSubList = res.subjectLi;
        }
        else if (this.fetchMasterBatchModule.standard_id != '-1' && this.fetchMasterBatchModule.subject_id != '-1') {

          this.courseModelBatchList = res.batchLi;
        }
        else {
        }
        this.getSubjectName(ev);
      },
      err => {

      }
    )
  }

  getSubjectName(ev) {
    this.selectedSubjectInBatch = '';
    this.selectedSubjectInBatch = this.courseModelSubList.find(elem => elem.subject_id == ev).subject_name;
  }


  batchUpdated(ev) {
    this.isClassFormFilled = false;
    /* standard not selected */
    if (this.fetchMasterBatchModule.standard_id == '-1' || this.fetchMasterBatchModule.standard_id == undefined || this.fetchMasterBatchModule.standard_id == null) {
      /* subject not selected */
      if (this.fetchMasterBatchModule.subject_id == '-1' || this.fetchMasterBatchModule.subject_id == undefined ||
        this.fetchMasterBatchModule.subject_id == null) {
        /* batch not selected */
        if (this.fetchMasterBatchModule.batch_id == '-1' || this.fetchMasterBatchModule.batch_id == undefined || this.fetchMasterBatchModule.batch_id == null) {

        }/* batch selected */
        else {

        }
      }
    }
    /* standard selected */
    else {
      /* subject not selected */
      if (this.fetchMasterBatchModule.subject_id == '-1' || this.fetchMasterBatchModule.subject_id == undefined || this.fetchMasterBatchModule.subject_id == null) {
        /* batch not selected */
        if (this.fetchMasterBatchModule.batch_id == '-1' || this.fetchMasterBatchModule.batch_id == undefined || this.fetchMasterBatchModule.batch_id == null) {
        }/* batch selected */
        else {
        }
      }
      /* subject selected */
      else {
        /* batch not selected */
        if (this.fetchMasterBatchModule.batch_id == '-1' || this.fetchMasterBatchModule.batch_id == undefined || this.fetchMasterBatchModule.batch_id == null) {
        }/* batch selected */
        else {
        }
      }
    }
  }


  getMasterCourse(): string {
    if (this.isProfessional) {
      /* Only Batch selected */
      if (this.fetchMasterBatchModule.standard_id == '-1' || this.fetchMasterBatchModule.standard_id == undefined) {
        let temp: string;
        this.courseModelBatchList.forEach(e => {
          if (e.batch_id == this.fetchMasterBatchModule.batch_id) {
            temp = e.batch_name;
          }
        })
        return temp;
      }/* Both std subject and batch selected */
      else {
        let temp: string;
        this.courseModelStdList.forEach(e => {
          if (e.standard_id == this.fetchMasterBatchModule.standard_id) {
            temp = e.standard_name;
          }
        })
        return temp;
      }
    }
    else {
      let temp: string;
      this.masterCourse.forEach(e => {
        if (e.master_course == this.fetchMasterCourseModule.master_course) {
          temp = e.master_course;
        }
      });
      return temp;
    }
  }


  getCourseName() {
    if (this.isProfessional) {
      let temp: string = '';
      this.courseModelSubList.forEach(e => { if (e.subject_id == this.fetchMasterBatchModule.subject_id) { temp = e.subject_name } });
      return temp;
    }
    else {
      let temp: string = '';
      this.courseList.forEach(e => { if (e.course_id == this.fetchMasterCourseModule.course_id) { temp = e.course_name } });
      return temp;
    }
  }


  batchDetected(id) {
    this.auth.showLoader();
    this.classService.getBatchDetailsById(id).subscribe(
      res => {
        this.auth.hideLoader();
        this.isClassFormFilled = true;
        this.batchDetails = this.keepCloning(res);
        this.calculateFieldForTables(res);
      },
      err => {
        //console.log(err);
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    );
  }


  updateClassFrequency(ev) {
    if (ev == "OTHER") {
      this.createCustomSchedule = true;
    } else {
      this.createCustomSchedule = false;
    }
  }


  getAllSubjectListFromServer(data) {
    this.isClassFormFilled = true;
    this.auth.showLoader();
    this.fetchMasterCourseModule.requested_date = moment(this.fetchMasterCourseModule.requested_date).format('YYYY-MM-DD');
    let selected_day = this.fetchMasterCourseModule.selected_day;
    delete this.fetchMasterCourseModule.selected_day;
    this.classService.getAllSubjectlist(this.fetchMasterCourseModule).subscribe(
      res => {
        this.fetchedCourseData = res;
        this.fetchMasterCourseModule.selected_day = selected_day;
        this.schoolModel ? this.getClassesDataForSchoolModel() : '';
        // this.fetchMasterCourseModule.requested_date = moment(res.requested_data).format("YYYY-MM-DD");
        this.auth.hideLoader();
        this.subjectListDataSource = this.getSubjectList(res);
        this.classScheduleArray = this.constructJSONForTable(res);
      },
      err => {
        //console.log(err);
        this.auth.hideLoader();
        this.fetchMasterCourseModule.selected_day = selected_day;
        this.schoolModel ? this.getClassesDataForSchoolModel() : '';
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }

  getClassesDataForSchoolModel() {
    console.log(this.fetchMasterCourseModule);
    let obj = {
      institute_id: this.fetchMasterCourseModule.inst_id,
      master_course_name: this.fetchMasterCourseModule.master_course,
      course_id: this.fetchMasterCourseModule.course_id,
      from_date: moment().day(this.fetchMasterCourseModule.selected_day).format('YYYY-MM-DD'),
      to_date: moment().day(this.fetchMasterCourseModule.selected_day).format('YYYY-MM-DD'),
      isCompleted: "N",
      isPending: 'Y',
      isCancelled: 'N',
      isUpcoming: 'N',
      isMarksUpdate: 'N',
      "standard_id": "-1",	
      "subject_id": "-1",
    }
    console.log(obj);
    this.auth.showLoader();
    this._http.postData('/api/v1/coursePlanner/category?type=class', obj).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        console.log(res);
        this.classScheduleArray = res;
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
      }
    )
    // this.getSubjectListForSchoolModel();
    console.log(this.subjectListDataSource);
  }

  // getSubjectListForSchoolModel() {
  // this.auth.showLoader();
  // this.classService.getSubjectList(this.fetchMasterCourseModule.course_id).subscribe(
  //   (res: any) => {
  //     this.auth.hideLoader();
  //     this.subjectListDataSource = res.batchesList;
  //     console.log('Subject', this.subjectListDataSource);
  //   },
  //   err => {
  //     this.msgService.showErrorMessage('error', '', err.error.message);
  //     this.auth.hideLoader();
  //     //console.log(err);
  //   }
  // )
  // }

  constructJSONForTable(data) {
    let courseScheduleList = [];
    let batchesList = [];
    let arr: any = [];
    batchesList = data.coursesList[0].batchesList;
    if (data.coursesList[0].courseClassSchdList != null) {
      courseScheduleList = data.coursesList[0].courseClassSchdList;
      for (let i = 0; i < courseScheduleList.length; i++) {
        for (let j = 0; j < batchesList.length; j++) {
          if (courseScheduleList[i].batch_id == batchesList[j].batch_id) {
            let obj: any = {};
            obj.class_schedule_id = courseScheduleList[i].class_schedule_id;
            obj.custom_class_type = courseScheduleList[i].custom_class_type;
            obj.start_time = courseScheduleList[i].start_time;
            obj.end_time = courseScheduleList[i].end_time;
            obj.duration = courseScheduleList[i].duration;
            obj.subject_name = courseScheduleList[i].subject_name;
            obj.subject_id = courseScheduleList[i].subject_id;
            obj.teacher_id = courseScheduleList[i].alloted_teacher_id;
            obj.batch_id = courseScheduleList[i].batch_id;
            obj.class_desc = courseScheduleList[i].class_desc;
            obj.room_no = courseScheduleList[i].room_no;
            obj.course_id = data.coursesList[0].course_id;
            obj.start_date = moment(data.coursesList[0].start_date).format('YYYY-MM-DD');
            obj.end_date = moment(data.coursesList[0].end_date).format('YYYY-MM-DD');
            obj.is_attendance_marked = courseScheduleList[i].is_attendance_marked;
            obj.topics_covered = courseScheduleList[i].topics_covered;
            arr.push(obj);
          }
        }
      }
    }
    return arr;
  }


  getClassSchedule(data) {
    let obj: any = [];
    if (data.courseClassSchdList != null) {
      obj = data.courseClassSchdList;
    }
    return obj;
  }

  getCustomList() {
    this.auth.showLoader();
    this.classService.getCustomClassListFromServer().subscribe(
      res => {
        this.auth.hideLoader();
        this.customListDataSource = res;
      },
      err => {
        //console.log(err);
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }

  getTeacherList() {
    this.auth.showLoader();
    this.classService.getAllActiveTeachersList().subscribe(
      res => {
        this.auth.hideLoader();
        this.teacherListDataSource = res.result;
      },
      err => {
        //console.log(err);
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }


  clearClassScheduleForm() {
    this.addClassDetails = {
      batch_id: '',
      subject_id: '',
      subject_name: '',
      start_hour: '12 PM',
      start_minute: '00',
      start_meridian: '',
      end_hour: '1 PM',
      end_minute: '00',
      end_meridian: '',
      teacher_id: '',
      teacher_name: '',
      class_desc: '',
      room_no: '',
      custom_class_type: 'Regular',
      duration: ''
    }
    this.checkedKeys = [];
    this.selectAllTopics = false;
    // this.topicsData = "";
  }


  onSubjectSelection(event) {
    this.subjectListDataSource.forEach(
      ele => {
        if (ele.subject_id == event) {
          this.addClassDetails.teacher_id = ele.teacher_id;
          return;
        }
      }
    )
  }

  topicListing() {
    if (this.addClassDetails.subject_id == '' || this.addClassDetails.subject_id == null || this.addClassDetails.subject_id == '-1') {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please Select Subject');
      return;
    }
    else {
      if (!this.auth.isRippleLoad.getValue()) {
        this.auth.showLoader();
        this.topicService.getAllTopicsSubTopics(this.addClassDetails.subject_id).subscribe(
          res => {
            let temp: any;
            temp = res;
            if (temp != null && temp.length != 0) {
              this.topicBox = false;
              console.log(res);
              this.auth.hideLoader();
              this.topicsData = res;

              let subjectName = "";
              this.subjectListDataSource.forEach(
                ele => {
                  if (ele.subject_id == this.addClassDetails.subject_id) {
                    subjectName = ele.subject_name;
                  }
                }
              )
              document.getElementById("topicSubName").innerHTML = subjectName;
              this.children = (dataItem: any) => of(dataItem.subTopic);
              this.hasChildren = (item: any) => item.subTopic && item.subTopic.length > 0;
            }
            else {
              this.auth.hideLoader();
              this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No topics available to Link");
            }

          },
          err => {
            this.auth.hideLoader();
            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
          }
        )
      }
    }
  }

  fetchTopics() {
    this.auth.showLoader();
    this.totalTopicsList = [];
    this.topicService.getAllTopicsSubTopics(this.fetchMasterBatchModule.subject_id).subscribe((resp) => {
      this.topicsList = [];
      this.topicsList = resp;
      if (this.topicsList.length && this.topicsList != null) {
        this.showTopicsModal = true;
        this.auth.hideLoader();
        this.topicsList.forEach(tpc => {
          this.totalTopicsList.push(tpc);
          tpc.checked = false;
          if (tpc.subTopic.length) {
            this.getAllTopics(tpc.subTopic)
          }
        })

      }
      else {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No topics available to Link");
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

  //uncheck parent if any of the child is deselected
  uncheckParent(topic) {
    var getParentTopic = this.totalTopicsList.find(obj => obj.topicId == topic.parentTopicId);
    if (getParentTopic != undefined) {
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

  fetchSelectedTopics() {
    this.auth.showLoader();
    this.showTopicsModal = true;
    this.selectedTopicsListObj.forEach(obj => {
      var getTopicObject = this.totalTopicsList.find(ele => ele.topicId == obj.topicId);
      getTopicObject.checked = true;
    });
    this.auth.hideLoader();
  }

  saveSelectedTopics() {
    /* if(this.totalTopicsList.filter(el => el.checked == true).length == 0){
      this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No topics selected");
    }
    else { */
    this.auth.showLoader();
    this.selectedTopicsListObj = [];
    this.selectedTopicsListObj = this.totalTopicsList.filter(obj => obj.checked == true);
    if (this.selectedTopicsListObj != undefined) {
      this.selectedTopics = this.selectedTopicsListObj.map(obj => {
        return obj.topicId;
      })
      this.selectedTopics = this.selectedTopics.join('|');
      this.selectedTopicsNames = this.selectedTopicsListObj.map(obj => {
        return obj.topicName;
      });
      this.selectedTopicsNames = this.selectedTopicsNames.join(',');
    }
    this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', "Topics linked successfully!");
    this.auth.hideLoader();
    this.showTopicsModal = false;
    // }
  }
  // check/uncheck all subtopics if parent is checked/unchecked
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


  closeTopicModal() {
    this.showTopicsModal = false;
  }
  toggleArrow(topic) {
    topic.isExpand = !(topic.isExpand);
  }
  linkTopics() {
    /* if(this.totalTopicsList.filter(el => el.checked == true).length == 0){
      this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No topics selected");
    } 
    else { */
    this.auth.showLoader();
    var getSelectedTopics = this.totalTopicsList.filter(el => el.checked == true);
    var getTopicIds;
    if (getSelectedTopics != undefined) {
      getTopicIds = getSelectedTopics.map(obj => {
        return obj.topicId;
      })
      getTopicIds = getTopicIds.join('|')
      this.getSubjectObject.topics_covered = getTopicIds;

      if (this.batchFrequency == 2) {
        this.customTable.find(ele => ele.schd_id == this.getSubjectObject.schd_id).topics_covered = getTopicIds;
      }
      else {
        this.extraClassTable.find(ele => ele.schd_id == this.getSubjectObject.schd_id).topics_covered = getTopicIds;
      }
    }
    this.msgService.showErrorMessage('success', '', "Topics updated successfully");
    this.showTopicsModal = false;
    this.auth.hideLoader();

    //}
  }

  editTopics(row) {
    console.log('inside edit topics:', row);
    this.getSubjectObject = '';
    this.getSubjectObject = row;
    this.auth.showLoader();
    if (row.topics_covered != '' && row.topics_covered != null) {
      var selectedTopicIds = row.topics_covered.split('|');
    }
    var list = [];
    this.topicService.getAllTopicsSubTopics(this.fetchMasterBatchModule.subject_id).subscribe(res => {
      this.topicsList = [];
      this.topicsList = res;
      if (this.topicsList != null && this.topicsList.length) {
        this.showTopicsModal = true;
        this.showCustomEditModal = true;
        this.auth.hideLoader();
        this.topicsList.forEach(obj => {
          list.push(obj);
          if (selectedTopicIds != undefined) {
            if (selectedTopicIds.indexOf((obj.topicId).toString()) > -1) {
              obj.checked = true;
            }
          }
          if (obj.subTopic.length) {
            this.fetchAllTopics(obj.subTopic, list, selectedTopicIds);
          }

        });
        this.totalTopicsList = [];
        this.totalTopicsList = list
      }
      else {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Error', "No topics available to Link");
      }
    }, err => {
      this.auth.hideLoader();
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Error', err.error.message);
    })
  }


  fetchAllTopics(topic, list, idList) {
    topic.forEach(key => {
      if (idList != undefined && idList != null) {
        if (idList.indexOf((key.topicId).toString()) > -1) {
          key.checked = true;
        }
      }
      list.push(key);
      if (key.subTopic.length) {
        this.fetchAllTopics(key.subTopic, list, idList)
      }

    });

  }

  topicListingForAlreadyLinkedTopics(row, subject_id, preSelectedTopics) {
    this.addLinkStatus = '';
    this.selectedSubId = subject_id;
    this.selectedRow = row;
    this.topicsData = []
    if (!this.auth.isRippleLoad.getValue()) {
      this.auth.showLoader();
      this.topicService.getAllTopicsSubTopics(subject_id).subscribe(
        res => {
          let temp: any;
          temp = res;
          if (temp != null && temp.length != 0) {
            this.checkedKeys = [];
            this.topicBox = false;
            console.log(res);
            this.auth.hideLoader();
            this.topicsData = res;
            let array = this.selectedRow.topics_covered.split("|"); //add selected array data
            array.forEach((value) => {
              if (value != " " || value != "0") {
                this.checkedKeys.push(Number(value));
              }
            })

            this.subject_name = this.selectedRow.subject_name
            this.children = (dataItem: any) => of(dataItem.subTopic);
            this.hasChildren = (item: any) => item.subTopic && item.subTopic.length > 0;
          }
          else {
            this.auth.hideLoader();
            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "No topics available to Link");
          }

        },
        err => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        }
      )
    }
  }

  checkAllTopics() {
    if (this.selectAllTopics) {
      this.checkedKeys = [];
      this.topicsData.forEach(
        ele => {
          this.checkedKeys.push(ele.topicId)
        }
      )
      // this.topicsData.forEach(function(entry){
      // console.log(entry.topicName)
      // } );
      //
      // const iterate = (obj) => {
      //     Object.keys(obj).forEach(key => {
      //
      //     console.log(`key: ${key}, value: ${obj[key]}`)
      //
      //     if (typeof obj[key] === 'object') {
      //             iterate(obj[key])
      //         }
      //     })
      // }

    }
    else {
      this.checkedKeys = [];
    }
  }

  saveTopic() {

    if (this.selectedSubId != null && this.selectedSubId != undefined && this.selectedSubId != "") {
      let temp = this.checkedKeys;
      this.selectedRow.topics_covered = temp.join("|");
      let topicsName = [];
      this.checkedKeys.forEach(
        ele => {
          this.topicsData.forEach(
            e => {
              if (ele == e)
                topicsName.push(e.topicName)
            }
          )
        }
      )
      this.checkedKeys = [];
      this.selectedSubId = "";
      this.selectedRow = "";
    } else {
      if (this.checkedKeys.length > 0) {
        this.addLinkStatus = 'linked';
      }
      else {
        this.addLinkStatus = '';
      }
    }
    this.topicBox = true;
  }

  closeAlert() {
    this.checkedKeys = [];
    this.topicBox = true;
    this.selectedSubId = "";
  }


  addClassSchedule() {
    this.addLinkStatus = ''
    let obj: any = {};
    if (this.addClassDetails.subject_id == '' || this.addClassDetails.subject_id == null || this.addClassDetails.subject_id == '-1') {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please Select Subject');
      return;
    } else {
      obj.subject_id = this.addClassDetails.subject_id;
    }
    obj.class_schedule_id = 0;
    if (this.addClassDetails.custom_class_type == "" || this.addClassDetails.custom_class_type == null) {
      obj.custom_class_type = "Regular";
    } else {
      obj.custom_class_type = this.addClassDetails.custom_class_type;
    }

    this.timeChanges(this.addClassDetails.start_hour, "addClassDetails.start_hour");
    this.timeChanges(this.addClassDetails.end_hour, "addClassDetails.end_hour");
    if (this.addClassDetails.start_hour == "" && this.addClassDetails.start_minute == "") {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time');
      return
    }
    if (this.addClassDetails.end_hour == "" && this.addClassDetails.end_minute == "") {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct end time');
      return
    }
    let startTime = moment(this.addClassDetails.start_hour + ':' + this.addClassDetails.start_minute + this.addClassDetails.start_meridian, 'h:mma');
    let endTime = moment(this.addClassDetails.end_hour + ':' + this.addClassDetails.end_minute + this.addClassDetails.end_meridian, 'h:mma');
    if (!(startTime.isBefore(endTime))) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
      this.convertTimeToBindableFormat();
      return
    } else {
      obj.start_time = this.addClassDetails.start_hour + ':' + this.addClassDetails.start_minute + ' ' + this.addClassDetails.start_meridian;
      obj.end_time = this.addClassDetails.end_hour + ':' + this.addClassDetails.end_minute + ' ' + this.addClassDetails.end_meridian;
    }
    startTime = this.convertIntoFullClock(this.addClassDetails.start_hour, this.addClassDetails.start_minute, this.addClassDetails.start_meridian);
    endTime = this.convertIntoFullClock(this.addClassDetails.end_hour, this.addClassDetails.end_minute, this.addClassDetails.end_meridian);
    obj.duration = this.getDifference(startTime, endTime);
    obj.subject_name = this.getValueFromArraySubject(this.subjectListDataSource, 'subject_id', obj.subject_id, 'subject_name');
    if (this.addClassDetails.teacher_id == "" || this.addClassDetails.teacher_id == '-1') {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct teacher name');
      this.convertTimeToBindableFormat();
      return
    } else {
      obj.teacher_id = Number(this.addClassDetails.teacher_id);
    }
    obj.batch_id = this.getBatchID(obj.subject_id);
    obj.class_desc = this.addClassDetails.class_desc;
    obj.room_no = this.addClassDetails.room_no;
    let topicsName = [];
    this.checkedKeys.forEach(
      ele => {
        this.topicsData.forEach(
          e => {
            if (ele == e.topicId)
              topicsName.push(e.topicName)
          }
        )
      }
    )
    console.log(topicsName)
    let tempKeys = this.checkedKeys;
    obj.topics_covered = tempKeys.join("|");
    if(!this.schoolModel || this.checkTime(obj)) {
      this.classScheduleArray.push(obj);
      this.checkedKeys = []; 
    }
    this.clearClassScheduleForm();
  }

  checkTime(obj) {
    for(let i=0;i<this.classScheduleArray.length;i++) {
      if(this.classScheduleArray[i].start_time == obj.start_time && this.classScheduleArray[i].end_time == obj.end_time) {
        this.msgService.showErrorMessage('error','','Please enter correct start time and end time');
        return false;
      }
    }
    return true;
  }

  convertTimeToBindableFormat() {
    this.addClassDetails.start_hour = this.addClassDetails.start_hour + ' ' + this.addClassDetails.start_meridian;
    this.addClassDetails.start_meridian = "";
    this.addClassDetails.end_hour = this.addClassDetails.end_hour + ' ' + this.addClassDetails.end_meridian;
    this.addClassDetails.end_meridian = "";
  }

  timeChanges(data, name) {
    let time = data.split(' ');
    if (name == "addClassDetails.start_hour") {
      this.addClassDetails.start_hour = time[0];
      this.addClassDetails.start_meridian = time[1];
    } else if (name == "addClassDetails.end_hour") {
      this.addClassDetails.end_hour = time[0];
      this.addClassDetails.end_meridian = time[1];
    }
  }

  getBatchID(subject_id) {
    for (let i = 0; i < this.subjectListDataSource.length; i++) {
      if (this.subjectListDataSource[i].subject_id == subject_id) {
        return this.subjectListDataSource[i].batch_id;
      }
    }
  }


  convertIntoFullClock(hr, min, meridian) {
    let result: any = '';
    if (meridian == "AM") {
      if (hr == "12") {
        hr = "00";
      }
      result = hr + ':' + min;
    } else {
      if (hr == "12") {
        hr = "12";
      } else {
        hr = Number(hr) + 12;
      }
      result = hr + ':' + min;
    }
    return result;
  }


  getDifference(startTime, endTime) {
    let start = moment.utc(startTime, "HH:mm");
    let end = moment.utc(endTime, "HH:mm");
    if (end.isBefore(start))
      end.add(1, 'day');
    let d: any = moment.duration(end.diff(start));
    return d._milliseconds / 60000;
  }


  getValueFromArray(data, key, compareVal, getKey) {
    let result: any = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] === compareVal) {
        result = data[i];
      }
    }
    return result;
  }

  getValueFromArraySubject(data, key, compareVal, getKey) {
    let result: any = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i][key] == compareVal) {
        result = data[i][getKey];
      }
    }
    return result;
  }
  onCourseListSelection(event) {
    if (event != '-1') {
      for (let i = 0; i < this.courseList.length; i++) {
        if (this.courseList[i].course_id == event) {
          this.courseStartDate = this.courseList[i].start_date;
          this.courseEndDate = this.courseList[i].end_date;
        }
      }
    } else {
      this.courseStartDate = '';
      this.courseEndDate = '';
    }
  }


  cancelCourseClicked(rowData) {
    this.showPopUpCancellation = true;
    this.cancelRowSelected = rowData;
  }

  cancelCourseSchedule() {
    let dataTosend = this.makeCancelClassJson();
    if (dataTosend == false) {
      return false;
    }
    if (dataTosend != undefined) {
      this.auth.showLoader();
      this.classService.cancelClassSchedule(dataTosend).subscribe(
        res => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Success', 'Class Cancelled Successfull');
          this.showPopUpCancellation = false;
          this.getAllSubjectListFromServer(this.fetchMasterCourseModule);
        },
        err => {
          //console.log(err);
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        }
      )
    }
  }

  makeCancelClassJson() {
    let text = (<HTMLInputElement>document.getElementById('idTexboxReason')).value;
    if (text == "" || text == null || text == undefined) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter cancellation reason');
      return false;
    }
    let chkbxValue: any = (<HTMLInputElement>document.getElementById('idChkbxEnable')).checked;
    if (chkbxValue == true) {
      chkbxValue = "Y";
    } else {
      chkbxValue = "N";
    }
    let obj: any = {};
    obj.batch_id = this.cancelRowSelected.batch_id;
    obj.cancelSchd = [
      {
        cancel_note: text,
        schd_id: this.cancelRowSelected.class_schedule_id,
        is_notified: chkbxValue
      }
    ];
    return obj;
  }


  sendReminder() {
    if (confirm("Are you sure, You want to notify?")) {
      let obj: any = {};
      obj.course_id = this.fetchedCourseData.coursesList[0].course_id;
      obj.requested_date = moment(this.fetchedCourseData.requested_date).format('YYYY-MM-DD');
      this.classService.sendReminderToServer(obj).subscribe(
        res => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Success', 'Reminder Notification sent successfully');
        },
        err => {
          //console.log(err);
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        }
      )
    };
  }

  saveCourseSchedule() {
    if (this.classScheduleArray.length == 0) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'No Schedule to create/update');
      return;
    }
    if(!this.schoolModel) {
    let obj = this.makeJsonForCourseSave();
    this.auth.showLoader();
    this.classService.saveDataOnServer(obj).subscribe(
      res => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Saved', 'Your class added successfully');
        this.getAllSubjectListFromServer(this.fetchMasterCourseModule);
        // this.router.navigate(['/view/course/class']);
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
    } else {
      let obj: any = {};
    // obj.master_course = this.getValueFromArray(this.masterCourse, 'master_course', this.fetchMasterCourseModule.master_course, 'master_course');
    obj.requested_date = moment().day(this.fetchMasterCourseModule.selected_day).format('YYYY-MM-DD');
    obj.course_id = this.fetchMasterCourseModule.course_id;
    obj.class_type = 11;
    obj.is_institute_type_school = true;    
    let temp: any = {};
    temp.course_id = this.fetchMasterCourseModule.course_id;
    temp.batch_list = [];
    temp.weekSchd = [];
    console.log(this.classScheduleArray);
    for (let i = 0; i < this.classScheduleArray.length; i++) {
      let test: any = {};
      test.weekly_schedule = [];
      let weekSchedTest: any = {};
      test.batch_id = this.classScheduleArray[i].batch_id;
      test.teacher_id = this.classScheduleArray[i].teacher_id;
      test.isClassSchdUpdate = 1;
      weekSchedTest.duration = this.classScheduleArray[i].duration;
      weekSchedTest.start_time = this.classScheduleArray[i].start_time;
      weekSchedTest.end_time = this.classScheduleArray[i].end_time;
      weekSchedTest.day_of_week = this.fetchMasterCourseModule.selected_day;
      temp.batch_list.push(test);
      test.weekly_schedule.push(weekSchedTest);
    }
    obj.batch_list = temp.batch_list;
    this.auth.showLoader();
    this._http.postData('/api/v1/courseClassSchedule/create/courseLevel', obj).subscribe(
      (res: any)=> {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Saved', 'Your class added successfully');
        this.getAllSubjectListFromServer(this.fetchMasterCourseModule);
        console.log(res);
      },
      err=> {
        this.auth.hideLoader();
        console.log(err);
      }
    )
    
    }

  }

  removeRowFromSchedule(index, row) {
    if (confirm("Are you sure you want to delete?")) {
      this.classScheduleArray.splice(index, 1);
    }
  }


  makeJsonForCourseSave() {
    let obj: any = {};
    obj.master_course = this.getValueFromArray(this.masterCourse, 'master_course', this.fetchMasterCourseModule.master_course, 'master_course');
    obj.requested_date = moment(this.fetchMasterCourseModule.requested_date).format("YYYY-MM-DD");
    obj.course_id = this.fetchMasterCourseModule.course_id;
    obj.coursesList = [];
    let temp: any = {};
    temp.course_id = this.fetchMasterCourseModule.course_id;
    temp.courseClassSchdList = [];
    for (let i = 0; i < this.classScheduleArray.length; i++) {
      let test: any = {};
      test.alloted_teacher_id = this.classScheduleArray[i].teacher_id;
      test.batch_id = this.classScheduleArray[i].batch_id;
      test.class_desc = this.classScheduleArray[i].class_desc;
      test.class_schedule_id = this.classScheduleArray[i].class_schedule_id;
      test.custom_class_type = this.classScheduleArray[i].custom_class_type;
      test.duration = this.classScheduleArray[i].duration;
      test.room_no = this.classScheduleArray[i].room_no;
      test.start_time = this.classScheduleArray[i].start_time;
      test.end_time = this.classScheduleArray[i].end_time;
      test.topics_covered = this.classScheduleArray[i].topics_covered;
      temp.courseClassSchdList.push(test);
    }
    obj.coursesList.push(temp);
    return obj;
  }

  getSubjectList(data) {
    let obj = {};
    for (let i = 0; i < data.coursesList.length; i++) {
      if (data.coursesList[i].course_id == this.fetchMasterCourseModule.course_id) {
        return data.coursesList[i].batchesList;
      }
    }
  }

  weeklyScheduleChange($event, row) {
    this.selctedScheduledClass = row;
    this.selctedScheduledClass.startTime = this.setChangesOnTime(this.selctedScheduledClass.start_time);
    this.selctedScheduledClass.endTime = this.setChangesOnTime(this.selctedScheduledClass.end_time);
    let selectedValue = $event.target.value;
    if (selectedValue == 1) {

    } else if (selectedValue == 2) {
      this.selectedDatesOption();
    } else {
      this.customRecurrence();
    }
  }


  setChangesOnTime(data) {
    let obj: any = {};
    let time = data.split(':');
    obj.hour = time[0] + ' ' + time[1].split(' ')[1];
    obj.minute = time[1].split(' ')[0];
    return obj;
  }

  convertTimeToHourMinMeridian(data) {
    let obj: any = {};
    let time = data.split(':');
    obj.hour = time[0];
    obj.minute = time[1].split(' ')[0];
    obj.meridian = time[1].split(' ')[1];
    return obj;
  }


  selectedDatesOption() {
    this.showPopUp = true;
    this.selectedDateArray = [];
  }

  customRecurrence() {
    this.getWeeklyScheduleData()
  }

  //////// POPUP /////////////////////////

  getWeeklyScheduleData() {
    this.auth.showLoader();
    this.classService.getWeeklySchedule(this.selctedScheduledClass.batch_id).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        // if (res.weekSchd && (res.weekSchd.length > 0)) {
        // this.selctedScheduledClass.startTime = this.getNewTimeFormatJson(res.weekSchd[0].start_time);
        // this.selctedScheduledClass.endTime = this.getNewTimeFormatJson(res.weekSchd[0].end_time);

        this.weekDaysList.forEach(element => {
          element.uiSelected = false;
          element.start_time = this.getNewTimeFormatJson("12:00 PM");
          element.end_time = this.getNewTimeFormatJson("1:00 PM");
        });

        if (res.weekSchd && (res.weekSchd.length > 0)) {
          for (let i = 0; i < this.weekDaysList.length; i++) {
            for (let l = 0; l < res.weekSchd.length; l++) {
              if (this.weekDaysList[i].data_key == res.weekSchd[l].day_of_week) {
                this.weekDaysList[i].start_time = this.getNewTimeFormatJson(res.weekSchd[l].start_time);
                this.weekDaysList[i].end_time = this.getNewTimeFormatJson(res.weekSchd[l].end_time);
                this.weekDaysList[i].uiSelected = true;
              }
            }
          }
        }
        this.showPopUpRecurence = true;
        // }
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
      }
    )
  }

  closePopup() {
    this.showPopUpRecurence = false;
    this.showPopUp = false;
    this.showPopUpCancellation = false;
    if (!this.isProfessional) {
      this.getAllSubjectListFromServer(this.fetchMasterCourseModule);
    }
  }

  onWeekDaysSelection(event) {
    if ((document.getElementById(event.target.id).classList).contains('l-text')) {
      document.getElementById(event.target.id).classList.remove('l-text');
      document.getElementById(event.target.id).classList.add('p-text');
    } else {
      document.getElementById(event.target.id).classList.add('l-text');
      document.getElementById(event.target.id).classList.remove('p-text');
    }
  }

  radioButtonClick($event) {
    this.clearSelection();
    if ($event.target.id == "idCourseEndDate") {
      this.customRec.radioEndDate.radioEndDateSelection = true;
    } else if ($event.target.id == "idOn") {
      this.customRec.radioOn.radioONSelection = true;
    } else {
      this.customRec.radioAfter.radioAfterSelection = true;
    }
  }

  clearSelection() {
    this.customRec.radioEndDate.radioEndDateSelection = false;
    this.customRec.radioEndDate.radioDate = '';
    this.customRec.radioOn.radioONSelection = false;
    this.customRec.radioOn.radioOnDate = '';
    this.customRec.radioAfter.radioAfterSelection = false;
    this.customRec.radioAfter.occurenceValue = '';
  }


  addDateToArray() {
    if (this.addDates.selectedDate != "" && this.addDates.selectedDate != undefined && this.addDates.selectedDate != null) {
      let obj: any = new Object;
      obj.selectedDate = moment(this.addDates.selectedDate).format("YYYY-MM-DD");
      obj.error = '';
      this.selectedDateArray.push(obj);
      this.addDates.selectedDate = '';
      this.addDates.error = '';
    }
  }

  removeDateToArray(index, row) {
    if (confirm("Are you sure you want to delete?")) {
      this.selectedDateArray.splice(index, 1);
    }
  }

  saveCustomRecurrences() {

    this.multiClickDisabled = true;
    this.auth.showLoader();
    let JsonToSend = this.makeJsonForRecurrence();
    this.classService.saveCustomRecurrenceToServer(JsonToSend).subscribe(
      res => {
        this.showPopUpRecurence = false;
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Success', 'Saved Successfully');
        this.auth.hideLoader();
        this.multiClickDisabled = false;
      },
      err => {
        //console.log(err);
        this.auth.hideLoader();
        this.multiClickDisabled = false;
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )

  }

  getSelectedDaysOfWeek() {
    let arr = [];
    let elementArray = document.getElementsByClassName('p-text');
    for (let t = 0; t < elementArray.length; t++) {
      arr.push(elementArray[t].id.split('-')[1].trim());
    }
    return arr;
  }


  saveSelectedDateSchedule() {
    if (!this.validateAllFields()) {
      return;
    };
    let jsonToSend = this.makeJsonOFSelectedDate();
    this.classService.selectedDateScheduleToServer(jsonToSend).subscribe(
      res => {
        this.checkDatesOverLapping(res);
      },
      err => {
        //console.log(err);
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }

  checkDatesOverLapping(response) {
    for (let i = 0; i < Object.keys(response.copyClassScheduleDatesMapStatusMsg).length; i++) {
      for (let t = 0; t < this.selectedDateArray.length; t++) {
        let key = Object.keys(response.copyClassScheduleDatesMapStatusMsg)[i];
        if (this.selectedDateArray[t].selectedDate == key) {
          this.selectedDateArray[t].error = response.copyClassScheduleDatesMapStatusMsg[key];
        }
      }
    }
  }

  validateAllFields() {
    if (this.selctedScheduledClass.startTime.hour == "" || this.selctedScheduledClass.startTime.minute == "") {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid start time');
      return false;
    }
    if (this.selctedScheduledClass.endTime.hour == "" || this.selctedScheduledClass.endTime.minute == "") {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid end time');
      return false;
    }
    if (this.selctedScheduledClass.subject_id == "-1" || this.selctedScheduledClass.subject_id == " ") {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter subject name');
      return false;
    }
    if (this.selctedScheduledClass.teacher_id == "-1" || this.selctedScheduledClass.teacher_id == " ") {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter teacher name');
      return false;
    }
    return true;
  }

  makeJsonOFSelectedDate() {
    let obj: any = {};
    obj.course_id = Number(this.fetchMasterCourseModule.course_id);
    obj.courseClassSchdList = [];
    let test: any = {};
    test.batch_id = this.selctedScheduledClass.batch_id.toString();
    test.start_time = this.selctedScheduledClass.startTime.hour.split(' ')[0] + ':' + this.selctedScheduledClass.startTime.minute + ' ' + this.selctedScheduledClass.startTime.hour.split(' ')[1];
    test.end_time = this.selctedScheduledClass.endTime.hour.split(' ')[0] + ':' + this.selctedScheduledClass.endTime.minute + ' ' + this.selctedScheduledClass.endTime.hour.split(' ')[1];
    test.class_desc = this.selctedScheduledClass.class_desc;
    test.duration = this.getDifference(test.start_time, test.end_time);
    test.room_no = this.selctedScheduledClass.room_no;
    test.class_schedule_id = 0;
    test.alloted_teacher_id = this.selctedScheduledClass.teacher_id;
    test.custom_class_type = this.selctedScheduledClass.custom_class_type;
    obj.courseClassSchdList.push(test);
    obj.reqDateList = this.getSelectedDatesFromArray();
    return obj;
  }

  getSelectedDatesFromArray() {
    let arr: any = [];
    if (this.selectedDateArray.length != 0) {
      for (let t = 0; t < this.selectedDateArray.length; t++) {
        if (this.selectedDateArray[t].selectedDate != "" && this.selectedDateArray[t].selectedDate != null) {
          arr.push(this.selectedDateArray[t].selectedDate);
        }
      }
    } else {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter date');
      return
    }
    return arr;
  }

  makeJsonForRecurrence() {
    let weekDaysSelectedCount = 0;
    this.weekDaysList.forEach(element => {
      if (element.uiSelected) {
        weekDaysSelectedCount++;
      }
    });
    if (weekDaysSelectedCount == 0) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter days of week');
      return;
    }
    else {
      let obj: any = {};
      let seletected = false;
      obj.batch_id = this.selctedScheduledClass.batch_id;
      obj.weekSchd = [];

      for (let t = 0; t < this.weekDaysList.length; t++) {
        if (this.weekDaysList[t].uiSelected) {

          let test: any = {};
          test.day_of_week = Number(this.weekDaysList[t].data_key);
          test.start_time = this.weekDaysList[t].start_time.hour.split(' ')[0] + ':' + this.weekDaysList[t].start_time.minute + ' ' + this.weekDaysList[t].start_time.hour.split(' ')[1];;
          test.end_time = this.weekDaysList[t].end_time.hour.split(' ')[0] + ':' + this.weekDaysList[t].end_time.minute + ' ' + this.weekDaysList[t].end_time.hour.split(' ')[1];;
          let duration = this.getDifference(test.start_time, test.end_time);
          test.duration = duration;

          let startTime = moment(this.createTimeInFormat(this.weekDaysList[t].start_time.hour, this.weekDaysList[t].start_time.minute, 'comp'), 'h:mma');
          let endTime = moment(this.createTimeInFormat(this.weekDaysList[t].end_time.hour, this.weekDaysList[t].end_time.minute, 'comp'), 'h:mma');

          if (!(startTime.isBefore(endTime))) {
            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
            return
          }
          else {
            obj.weekSchd.push(test);
          }
        }
      }

      obj.course_id = this.selctedScheduledClass.course_id;
      obj.start_date = moment(this.selctedScheduledClass.start_date).format("YYYY-MM-DD");
      obj.end_date = moment(this.selctedScheduledClass.end_date).format("YYYY-MM-DD");
      obj.requested_date = moment(this.fetchMasterCourseModule.requested_date).format("YYYY-MM-DD");
      obj.courseClassSchdList = [{
        class_schedule_id: this.selctedScheduledClass.class_schedule_id
      }]

      return obj;
    }

  }
  /* =================================Batch Model=========================================================== */

  getWeekOfDaysFromServer() {
    this.classService.getWeekOfDays().subscribe(
      res => {
        this.weekDays = this.addKeyInData(res);
      },
      err => {
        //console.log(err);
      }
    )
  }

  calculateFieldForTables(data) {
    this.customTable = [];
    this.weekDaysTable = [];
    this.extraClassTable = [];
    this.canceLClassTable = [];
    let temp_mode = this.batchFrequency;
    this.batchFrequency = '1';
    if (data.cancelSchd != null) {
      this.canceLClassTable = data.cancelSchd;
    }
    if (data.extraSchd != null) {
      this.extraClassTable = data.extraSchd;
    }
    if (data.weekSchd != null) {

      this.weekDays.forEach(element => {
        element.uiSelected = false;
      });
      this.weekDaysTable = this.weekDays;
      if (data.weekSchd.length > 0) {
        this.makeJsonForWeekTable(data.weekSchd);
      }
    } else {
      this.weekDays.forEach(element => {
        element.uiSelected = false;
      });
      this.weekDaysTable = this.weekDays;
    }

    if (data.otherSchd != null) {
      if (data.otherSchd.length > 0) {
        this.customTable = data.otherSchd;
        if ((data.weekSchd && data.weekSchd.length == 0)) {
          this.batchFrequency = '2';
        }
        else {
          this.batchFrequency = '1';
        }
        this.scheduleSelection(this.batchFrequency);
      }
    }
  }


  scheduleSelection(event) {
    this.batchFrequency = event;
    this.custom.date = moment().format("YYYY-MM-DD");
  }


  /// Week Section////
  makeJsonForWeekTable(data) {
    this.showCancelWeeklyBtn = false;
    this.weekDaysTable = this.weekDays;
    for (let i = 0; i < this.weekDaysTable.length; i++) {
      for (let t = 0; t < data.length; t++) {
        if (data[t].day_of_week == this.weekDaysTable[i].data_key) {
          this.showCancelWeeklyBtn = true;
          this.weekDaysTable[i].uiSelected = true;
          this.weekDaysTable[i].day_of_week = data[t].day_of_week;
          this.weekDaysTable[i].data_value = this.weekDays[i].data_value;
          this.weekDaysTable[i].schd_id = data[t].schd_id;
          this.weekDaysTable[i].duration = data[t].duration;
          this.weekDaysTable[i].start_time = this.getNewTimeFormatJson(data[t].start_time);
          this.weekDaysTable[i].end_time = this.getNewTimeFormatJson(data[t].end_time);
        }
      }
    }
  }

  updateWeeklySchedule() {
    if (this.batchDetails.otherSchd != null) {
      if (this.batchDetails.otherSchd.length > 0) {
        this.showWarningPopup = true;
      } else {
        this.createWeeklySchedule();
      }
    } else {
      this.createWeeklySchedule();
    }
  }

  createWeeklySchedule() {
    let data = this.prepareJSONDATA();

    if (data == false) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify at least one day to create a schedule');
      return;
    }

    if (this.custom.date == '') {
      data.request_date = moment(this.batchDetails.batch_start_date).format("YYYY-MM-DD");
    }
    else {
      if (moment(this.custom.date).valueOf() < moment(this.batchDetails.batch_start_date).valueOf()) {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'selected date should be greater than or equal to batch start date ' + moment(this.batchDetails.batch_start_date).format("DD-MM-YYYY"));
        return;
      } else {
        data.request_date = moment(this.custom.date).format("YYYY-MM-DD");
      }
    }


    if (this.batchDetails.weekSchd != null) {
      if (this.batchDetails.weekSchd.length > 0) {
        this.serverCallPUT(data);
      } else {
        if (this.batchDetails.otherSchd
          && this.batchDetails.otherSchd.length > 0) {
          this.serverCallPUT(data);
        } else {
          this.serverCallPOST(data);
        }
      }
    } else {
      this.serverCallPOST(data);
    }
  }

  prepareJSONDATA() {
    let obj: any = {};
    let seletected = false;
    obj.batch_id = this.batchDetails.batch_id;
    obj.class_freq = "WEEK";
    obj.weekSchd = [];
    for (let i = 0; i < this.weekDaysTable.length; i++) {
      if (this.weekDaysTable[i].uiSelected == true) {
        seletected = true;
        let test: any = {};
        test.day_of_week = this.weekDaysTable[i].data_key;
        let startTime = moment(this.createTimeInFormat(this.weekDaysTable[i].start_time.hour, this.weekDaysTable[i].start_time.minute, 'comp'), 'h:mma');
        let endTime = moment(this.createTimeInFormat(this.weekDaysTable[i].end_time.hour, this.weekDaysTable[i].end_time.minute, 'comp'), 'h:mma');
        if (!(startTime.isBefore(endTime))) {
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
          return
        } else {
          test.start_time = this.createTimeInFormat(this.weekDaysTable[i].start_time.hour, this.weekDaysTable[i].start_time.minute, '');
          test.end_time = this.createTimeInFormat(this.weekDaysTable[i].end_time.hour, this.weekDaysTable[i].end_time.minute, '');
        }
        startTime = this.convertToFullTimeFormat(this.weekDaysTable[i].start_time.hour, this.weekDaysTable[i].start_time.minute);
        endTime = this.convertToFullTimeFormat(this.weekDaysTable[i].end_time.hour, this.weekDaysTable[i].end_time.minute);
        test.duration = this.getDifference(startTime, endTime);
        obj.weekSchd.push(test);
      }
    }
    if (seletected == false) {
      return false;
    } else {
      return obj;
    }
  }

  applyButtonClick() {
    let startTime = moment(this.createTimeInFormat(this.mainStartTime.hour, this.mainStartTime.minute, 'comp'), 'h:mma');
    let endTime = moment(this.createTimeInFormat(this.mainEndTime.hour, this.mainEndTime.minute, 'comp'), 'h:mma');
    if (!(startTime.isBefore(endTime))) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
      return
    } else {
      for (let t = 0; t < this.weekDaysTable.length; t++) {
        this.weekDaysTable[t].start_time.hour = this.mainStartTime.hour;
        this.weekDaysTable[t].start_time.minute = this.mainStartTime.minute;
        this.weekDaysTable[t].end_time.hour = this.mainEndTime.hour;
        this.weekDaysTable[t].end_time.minute = this.mainEndTime.minute;
      }
    }
  }

  cancelWeeklyScheduledClass() {
    this.cancelWeeklySchedulePop = true;
  }

  closeWeeklySchedulePopup() {
    this.cancelWeeklySchedulePop = false;
  }

  cancelWeeklySchedule() {
    let notify: any = "";
    if (this.weeklyScheduleCan.is_notified == true) {
      notify = "Y";
    } else {
      notify = "N";
    }
    let obj = {
      batch_id: this.batchDetails.batch_id,
      class_freq: 'WEEK',
      requested_date: '',
      cancelSchd: [{
        cancel_note: this.weeklyScheduleCan.cancel_note,
        class_date: moment(this.weeklyScheduleCan.date).format('YYYY-MM-DD'),
        schd_id: 0,
        is_notified: notify,
      }]
    }

    this.classService.cancelClassSchedule(obj).subscribe(
      res => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Cancelled', 'Class schedule cancelled successfully');
        this.cancelWeeklySchedulePop = false;
        this.updateTableDataAgain();
      },
      err => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        //console.log(err);
      }
    )
  }

  /// Custom Section////


  addNewCustomClass() {
    let obj: any = {};
    obj.class_date = moment(this.custom.date).format("YYYY-MM-DD");
    if (moment(this.custom.date).valueOf() < moment(this.batchDetails.batch_start_date).valueOf()) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid date');
      return
    }
    let startTime = moment(this.createTimeInFormat(this.custom.start_hour, this.custom.start_minute, 'comp'), 'h:mma');
    let endTime = moment(this.createTimeInFormat(this.custom.end_hour, this.custom.end_minute, 'comp'), 'h:mma');
    if (!(startTime.isBefore(endTime))) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
      return
    } else {
      obj.start_time = this.createTimeInFormat(this.custom.start_hour, this.custom.start_minute, '');
      obj.end_time = this.createTimeInFormat(this.custom.end_hour, this.custom.end_minute, '');
    }

    obj.note = this.custom.desc;
    obj.batch_id = this.batchDetails.batch_id;
    obj.schd_id = 0;
    obj.is_attendance_marked = 'N';
    obj.topics_covered = this.selectedTopics;
    obj.topicName = this.selectedTopicsNames;
    this.customTable.push(obj);
    this.custom = {
      date: moment().format("YYYY-MM-DD"),
      start_hour: '12 PM',
      start_minute: '00',
      end_hour: '1 PM',
      end_minute: '00',
      desc: '',
      topics_covered: ''
    }
    this.selectedTopicsListObj = [];
    this.selectedTopics = '';
    this.selectedTopicsNames = '';
  }


  deleteFromCustomTable(row, index) {
    if (confirm("Are you sure you want to delete?")) {
      this.customTable.splice(index, 1);
    }
  }

  updateCustomClass() {
    if (this.batchDetails.weekSchd != null) {
      if (this.batchDetails.weekSchd.length > 0) {
        this.showWarningPopup = true;
      } else {
        this.createCustomClasses();
      }
    } else {
      this.createCustomClasses();
    }
    this.selectedTopics = '';
    this.selectedTopicsListObj = [];
  }

  makeJsonForCustomClass() {
    let obj: any = {};
    obj.batch_id = this.batchDetails.batch_id.toString();
    obj.class_freq = "OTHER";
    obj.otherSchd = [];
    if (this.customTable.length > 0) {
      for (let i = 0; i < this.customTable.length; i++) {
        let t: any = {};
        t.class_date = moment(this.customTable[i].class_date).format('YYYY-MM-DD');
        t.request_date = moment(this.customTable[i].class_date).format('YYYY-MM-DD');
        t.start_time = this.customTable[i].start_time;
        t.end_time = this.customTable[i].end_time;
        t.note = this.customTable[i].note;
        t.topics_covered = this.customTable[i].topics_covered;
        t.schd_id = this.customTable[i].schd_id;
        let testStart: any = this.convertTimeToHourMinMeridian(t.start_time);
        let testStart1: any = this.convertTimeToHourMinMeridian(t.end_time);
        let start = this.convertIntoFullClock(testStart.hour, testStart.minute, testStart.meridian);
        let end = this.convertIntoFullClock(testStart1.hour, testStart1.minute, testStart1.meridian);
        t.duration = this.getDifference(start, end);
        obj.otherSchd.push(t);
      }
    }
    return obj;
  }

  createCustomClasses() {
    let obj = this.makeJsonForCustomClass();
    if (this.batchDetails.otherSchd != null) {
      if (this.batchDetails.otherSchd.length > 0) {
        this.serverCallPUT(obj);
      } else {
        if (this.batchDetails.weekSchd && this.batchDetails.weekSchd.length > 0) {
          this.serverCallPUT(obj);
        } else {
          this.serverCallPOST(obj);
        }
      }
    } else {
      this.serverCallPOST(obj);
    }
  }

  serverCallPUT(data) {
    if (!this.auth.isRippleLoad.getValue()) {
      this.auth.showLoader();
      this.classService.createCustomBatchPUT(data).subscribe(
        res => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Updated', 'Class scheduled successfully!');
          this.showWarningPopup = false;
          this.updateTableDataAgain();
        },
        err => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
          //console.log(err);
        }
      )
    }
  }

  serverCallPOST(data) {
    if (!this.auth.isRippleLoad.getValue()) {
      this.auth.showLoader();
      this.classService.createWeeklyBatchPost(data).subscribe(
        res => {
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Updated', 'Class scheduled successfully!');
          this.showWarningPopup = false
          this.auth.hideLoader();
          this.updateTableDataAgain();
        },
        err => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
          //console.log(err);
        }
      )
    }
  }

  notifyOfCustomClass(data, index) {
    if (confirm('Are you sure you want to send Regular Class Schedule SMS to the batch?')) {
      this.notifyExtraClassCancel(data, "OTHER");
    }
  }

  cancelClassOfCustomClass(row, index) {
    this.showPopUpCancellation = true;
    this.cancelRowSelected = row;
  }

  ///// Extra Class Section //////////////
  addNewExtraClass() {
    let obj: any = {};
    obj.class_date = moment(this.addExtraClass.date).format("YYYY-MM-DD");
    let startTime = moment(this.createTimeInFormat(this.addExtraClass.start_hour, this.addExtraClass.start_minute, 'comp'), 'h:mma');
    let endTime = moment(this.createTimeInFormat(this.addExtraClass.end_hour, this.addExtraClass.end_minute, 'comp'), 'h:mma');
    if (!(startTime.isBefore(endTime))) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
      return
    } else {
      obj.start_time = this.createTimeInFormat(this.addExtraClass.start_hour, this.addExtraClass.start_minute, '');
      obj.end_time = this.createTimeInFormat(this.addExtraClass.end_hour, this.addExtraClass.end_minute, '');
    }
    obj.note = this.addExtraClass.desc;
    obj.batch_id = this.batchDetails.batch_id;
    obj.schd_id = 0;
    obj.is_attendance_marked = 'N';
    obj.topics_covered = this.selectedTopics;
    this.extraClassTable.push(obj);
    this.addExtraClass = {
      date: moment().format("YYYY-MM-DD"),
      start_hour: '12 PM',
      start_minute: '00',
      end_hour: '1 PM',
      end_minute: '00',
      desc: '',
      topics_covered: '',
    }
    this.selectedTopics = '';
    this.selectedTopicsListObj = [];
  }

  updateExtraClass() {
    let data = this.makeJsonForExtraClass();


    if (this.batchDetails.extraSchd != null) {
      if (this.batchDetails.extraSchd.length > 0) {
        this.serverCallPUT(data);
      } else {
        this.serverCallPOST(data);
      }
    } else {
      this.serverCallPOST(data);
    }
    this.selectedTopicsListObj = [];
    this.selectedTopics = '';
  }

  makeJsonForExtraClass() {
    let obj: any = {};
    obj.batch_id = this.batchDetails.batch_id;
    obj.class_freq = "EXTRA";
    obj.extraSchd = [];
    if (this.extraClassTable.length > 0) {
      for (let i = 0; i < this.extraClassTable.length; i++) {
        let t: any = {};
        t.class_date = moment(this.extraClassTable[i].class_date).format('YYYY-MM-DD');
        t.request_date = moment(this.extraClassTable[i].class_date).format('YYYY-MM-DD');
        t.start_time = this.extraClassTable[i].start_time;
        t.end_time = this.extraClassTable[i].end_time;
        t.note = this.extraClassTable[i].note;
        t.schd_id = this.extraClassTable[i].schd_id;
        t.topics_covered = this.extraClassTable[i].topics_covered
        let testStart: any = this.convertTimeToHourMinMeridian(t.start_time);
        let testStart1: any = this.convertTimeToHourMinMeridian(t.end_time);
        let start = this.convertIntoFullClock(testStart.hour, testStart.minute, testStart.meridian);
        let end = this.convertIntoFullClock(testStart1.hour, testStart1.minute, testStart1.meridian);
        t.duration = this.getDifference(start, end);
        obj.extraSchd.push(t);
      }
    }
    return obj;
  }

  cancelExtraClassSchedule(row) {
    this.showPopUpCancellation = true;
    this.cancelRowSelected = row;
  }

  notifyExtraClassSchedule(row) {
    if (confirm("Are you sure you want to send Extra Class Schedule SMS to the batch?")) {
      this.notifyExtraClassCancel(row, "week");
    }
  }

  deleteExtraClassSchedule(row, index) {
    if (confirm("Are you sure you want to delete?")) {
      this.extraClassTable.splice(index, 1);
    }
  }

  /// Cancel Class /////
  notifyOfCancelClass(row) {
    if (confirm("Are you sure, You want to notify?")) {
      let is_exam_schedule: any = '';
      if (row.hasOwnProperty('is_exam_schedule')) {
        is_exam_schedule = row.is_exam_schedule;
      } else {
        is_exam_schedule = "N";
      }
      let data = {
        batch_id: row.batch_id,
        class_schedule_id: row.schd_id,
        is_exam_schedule: is_exam_schedule
      };
      this.classService.notifyCancelledClassSchedule(data).subscribe(
        res => {
          this.updateTableDataAgain();
          this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Notified', 'Notification Sent');
        },
        err => {
          //console.log(err);
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
        }
      )
    }
  }

  /// Cancellation POpup /////////

  cancelBatchSchedule() {
    let data = this.makeJSONToSendBatchDet();
    if (data == false) {
      return;
    }
    this.classService.cancelClassSchedule(data).subscribe(
      res => {
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Notified', 'Cancelled Successfully');
        this.showPopUpCancellation = false;
        this.updateTableDataAgain();
      },
      err => {
        //console.log(err);
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }


  makeJSONToSendBatchDet() {
    let text = (<HTMLInputElement>document.getElementById('idTexboxReason')).value;
    if (text == "" || text == null || text == undefined) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter cancellation reason');
      return false;
    }
    let chkbxValue: any = (<HTMLInputElement>document.getElementById('idChkbxEnable')).checked;
    if (chkbxValue == true) {
      chkbxValue = "Y";
    } else {
      chkbxValue = "N";
    }
    let obj: any = {};
    obj.batch_id = this.cancelRowSelected.batch_id;
    obj.class_freq = this.cancelRowSelected.freq;
    obj.cancelSchd = [
      {
        cancel_note: text,
        is_notified: chkbxValue,
        schd_id: this.cancelRowSelected.schd_id,
      }
    ];
    return obj;
  }

  // Common function for notification///
  notifyExtraClassCancel(row, type) {
    this.classService.sendNotification(row.schd_id, type).subscribe(
      res => {
        //console.log(res);
        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Notified', 'Notification Sent');
      },
      err => {
        //console.log(err);
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
      }
    )
  }

  ////////////////////////////

  showHideCommonSection() {
    if (this.batchFrequency == "1") {
      if (this.batchDetails.weekSchd != null) {
        if (this.batchDetails.weekSchd.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      if (this.batchDetails.otherSchd != null) {
        if (this.batchDetails.otherSchd.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }


  closeWarningPopUp() {
    this.showWarningPopup = false;
  }

  addKeyInData(data) {
    data.forEach(element => {
      element.uiSelected = '';
      element.schd_id = '';
      element.duration = '';
      element.day_of_week = '';
      element.start_time = {
        hour: '12 PM',
        minute: '00',
      };
      element.end_time = {
        hour: '1 PM',
        minute: '00',
      };
    });
    return data;
  }

  createTimeInFormat(hrMeri, minute, format) {
    let time = hrMeri.split(' ');
    if (format == "comp") {
      let t = time[0] + ":" + minute + time[1];
      return t;
    } else {
      let t = time[0] + ":" + minute + " " + time[1];
      return t;
    }
  }

  getNewTimeFormatJson(data) {
    let time: any = {};
    time.hour = data.split(':')[0] + " " + data.split(' ')[1];
    time.minute = data.split(':')[1].split(' ')[0];
    return time;
  }

  convertToFullTimeFormat(hr, min) {
    let result: any = "";
    let hour: any;
    let time = hr.split(' ');
    if (time[1] == "AM") {
      if (time[0] == "12") {
        hour = "00";
      } else {
        hour = time[0];
      }
      result = hour + ":" + min;
      return result;
    } else {
      if (time[0] != "12") {
        hour = Number(time[0]) + 12;
      } else {
        hour = Number(time[0]);
      }
      result = hour + ":" + min;
      return result;
    }
  }

  updateTableDataAgain() {
    this.batchDetected(this.fetchMasterBatchModule.batch_id);
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

  // change by laxmi
  switchActiveView() {
    let classArray = ['liStandard', 'liSubject', 'liExam', 'liManageBatch'];
    classArray.forEach((classname) => {
      document.getElementById(classname).classList.remove('active');
    });
    document.getElementById('liClass').classList.add('active');
  }


  hidePastClass() {
    if (moment().format('YYYY-MM-DD') <= moment(this.fetchMasterCourseModule.requested_date).format('YYYY-MM-DD')) {
      return true;
    } else {
      return false;
    }
  }

}
