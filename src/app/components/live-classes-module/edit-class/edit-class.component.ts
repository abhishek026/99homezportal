import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { MessageShowService } from '../../..';
import { AppComponent } from '../../../app.component';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { HttpService } from '../../../services/http.service';
import { ProductService } from '../../../services/products.service';



@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditClassComponent implements OnInit {

  isProfessional: boolean = false;
  isBasicActive: boolean = true;
  isOtherActive: boolean = false;
  class_id: any = 0;
  hour = ['01 AM', '02 AM', '03 AM', '04 AM', '05 AM', '06 AM', '07 AM', '08 AM', '09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM', '09 PM', '10 PM', '11 PM', '12 AM'];
  minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
  selectedStudentList: any[] = [];
  selectedUserList: any[] = [];
  selectedFacultyList: any[] = [];
  selectedModeratorList: any[] = [];
  selectedCourseList: any[] = [];
  selectedBatchList: any[] = [];

  dropdownList = [];
  teachersAssigned: any[] = [];
  userAssigned: any[] = [];
  studentList: any[] = [];
  userList: any[] = [];
  dropdownSettings = {};
  facultySettings = {};
  moderatorSettings = {};
  studentListSettings = {};
  userListSetting = {};
  courseListSetting = {};
  batchListSetting = {};
  productSetting = {};
  masterCourseListSetting = {};
  subjectSetting = {};



  facultyId = [];
  custUserIds = [];
  studentsId = [];
  eLearnCustUserIDs = [];

  courseValue: any;
  productData: any[] = [];
  product_id: any = "";
  isShowProductOption: boolean = false;
  batches: any[] = [];
  masters: any[] = [];
  courses: any[] = [];
  courseIds: any = null;
  batchesIds: any = null;
  courseId: any[] = [];

  dateTimeStatus: boolean = false;
  topicName: string = '';
  hoursFrom: string = '';
  minuteFrom: string = '';
  hoursTo: string = '';
  minuteTo: string = '';
  scheduledateFrom = moment(new Date()).format('YYYY-MM-DD');
  institution_id:any=sessionStorage.getItem('institution_id');
  userType: any;
  username: any = '';
  getPayloadBatch = {
    inst_id: this.institution_id,
    coursesArray: [''],
    role: 'student'
  }
  editData: any;
  updateOnlineClass = {
    custUserIds: [],
    end_datetime: "",
    institution_id: this.institution_id,
    sent_notification_flag: 0,
    session_name: "",
    start_datetime: "",
    studentIds: null,
    teacherIds: [],
    product_ids: [],
    eLearnCustUserIDs: [],
    private_access: false,
    access_enable_lobby: false,
    access_enable_breakout_rooms: false,
    access_before_start: 0,
    batch_list: null,
    course_list: null,
    host_video: true,
    participant_video: false,
    join_before_host: true,
    mute_upon_entry: true,
    auto_recording: "none",
    is_zoom_live_class: false,
    hide_recording_notifications: false,
    prevent_user_count: false
  }
  // Zoom
  auto_recording: boolean = false;
  is_zoom_integration_enable: boolean = true;
  live_class_for: any = sessionStorage.getItem('setLiveClassType');
  singleSelectionOfFaculty: boolean = false;
  zoom_enable: boolean = false;

  editSessionId: any;
  repeat_session: number;
  schoolModel: boolean = false;
  selectedSubjectList = [];
  subjectList: any = [];
  fullResponse: any = [];

  constructor(
    private auth: AuthenticatorService,
    private router: Router,
    private appC: AppComponent,
    private route: ActivatedRoute,
    private product_service: ProductService,
    private http_service: HttpService,
    private msgService: MessageShowService
  ) { }

  ngOnInit() {
    this.institution_id = sessionStorage.getItem('institution_id');
    this.userType = sessionStorage.getItem('userType');
    this.username = sessionStorage.getItem('username');
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

    let zoom = sessionStorage.getItem('is_zoom_enable');
    this.is_zoom_integration_enable = JSON.parse(zoom);

    let zoom_status = this.route.snapshot.queryParams["isZoomLiveClass"];
    if (this.is_zoom_integration_enable && zoom_status == "1") {
      this.singleSelectionOfFaculty = true;
      this.zoom_enable = true;
      this.live_class_for = "2";
      this.changeLiveClassFor()
    }

    this.setMultiSelectSetting();

    this.editSessionId = this.route.snapshot.paramMap.get('id');
    this.repeat_session = this.route.snapshot.queryParams["repeat"];

    this.getLiveClassData();
    this.checkIsEnableElearnFeature();

  }

  setMultiSelectSetting() {
    this.facultySettings = {
      singleSelection: this.singleSelectionOfFaculty,
      idField: 'teacher_id',
      textField: 'teacher_name',
      itemsShowLimit: 2,
      enableCheckAll: false
    };

    this.moderatorSettings = {
      singleSelection: false,
      idField: 'userid',
      textField: 'name',
      itemsShowLimit: 2,
      enableCheckAll: false
    };

    this.studentListSettings = {
      singleSelection: false,
      idField: 'student_id',
      textField: 'student_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      enableCheckAll: true
    };

    this.userListSetting = {
      singleSelection: false,
      idField: 'user_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      enableCheckAll: true
    };

    this.courseListSetting = {
      singleSelection: false,
      idField: 'course_id',
      textField: 'course_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      enableCheckAll: true
    }

    this.batchListSetting = {
      singleSelection: false,
      idField: 'batch_id',
      textField: 'batch_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      enableCheckAll: true
    }

    this.productSetting = {
      singleSelection: false,
      idField: 'id',
      textField: 'title',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      enableCheckAll: true
    }

    this.masterCourseListSetting = {
      singleSelection: false,
      idField: 'master_course',
      textField: 'master_course',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      enableCheckAll: true
    }

    this.subjectSetting = {
      singleSelection: false,
      idField: 'batch_id',
      textField: 'subject_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      enableCheckAll: true
    }
  }

  changeLiveClassFor() {
    if (this.live_class_for == "2") {
      this.singleSelectionOfFaculty = true;
      this.zoom_enable = true;
      this.selectedFacultyList = [];
      this.selectedModeratorList = [];
      this.facultySettings = {
        singleSelection: this.singleSelectionOfFaculty,
        idField: 'teacher_id',
        textField: 'teacher_name',
        itemsShowLimit: 2,
        enableCheckAll: false
      };
    }
    else if (this.live_class_for == "1") {
      this.singleSelectionOfFaculty = false;
      this.zoom_enable = false;
      this.selectedModeratorList = [];
      this.facultySettings = {
        singleSelection: this.singleSelectionOfFaculty,
        idField: 'teacher_id',
        textField: 'teacher_name',
        itemsShowLimit: 2,
        enableCheckAll: false
      };
    }
  }

  checkIsEnableElearnFeature() {
    let enable_eLearn_feature = sessionStorage.getItem('enable_eLearn_feature');
    if (enable_eLearn_feature == '1') {
      this.isShowProductOption = true;
      this.auth.showLoader();
      this.product_service.getMethod('product/get-product-list?slug=Online_Class', null).subscribe(
        (data: any) => {
          this.auth.hideLoader();
          this.productData = data.result;
          console.log(this.productData);
        },
        (error: any) => {
          this.auth.hideLoader();
          // this.clearOnlineSchedulesObject() ;
          this.appC.popToast({ type: "error", body: error.error.message })
        }
      )
    }
    else {
      this.isShowProductOption = false;
    }
  }

  onChangeProduct(event) {
    let institute_id = sessionStorage.getItem('institute_id');
    if(institute_id!='100058' && institute_id!='100127' && institute_id!='101924') {
      this.selectedUserList = [];
    }
    let pro_id = Array.prototype.map.call(event, function(item) { return item.id; }).join(",");
    this.userList = [];
    let url = `/api/v1/meeting_manager/userDetailByProductID/${institute_id}?productIds=${pro_id}`;
    this.auth.showLoader();
    this.http_service.getData(url).subscribe(
      (data: any) => {
        this.auth.hideLoader();
        this.userList = data;
      },
      (error: any) => {
        this.auth.hideLoader();
        this.appC.popToast({ type: "error", body: error.error.message })
      }
    );
    }

  getLiveClassData() {
    this.auth.showLoader();
    let zoom_status = 0;
    if (this.zoom_enable) {
      zoom_status = 1
    }
    const url = '/api/v1/meeting_manager/getMeetingV2/' + this.institution_id + "/" + this.editSessionId + "?isZoomLiveClass=" + zoom_status;
    this.http_service.getData(url).subscribe(
      (data: any) => {
        console.log(data)
        this.editData = data;
        this.getBatchesCourses();
        setTimeout(() => {
          this.topicName = this.editData.session_name;

          if (this.editData.sent_notification_flag == 1) {
            this.editData.sent_notification_flag = true;
          }
          else {
            this.editData.sent_notification_flag = false;
          }

          if (this.editData.auto_recording == "none") {
            this.auto_recording = false;
          }
          else if (this.editData.auto_recording == "local") {
            this.auto_recording = true;
          }


        if (this.editData.access_before_start == 1) {
          this.editData.access_before_start = true;
        }
        else {
          this.editData.access_before_start = false;
        }
        this.editData.access_enable_lobby = data.access_enable_lobby;
        this.editData.private_access = data.private_access;
        this.editData.host_video = data.host_video;
        this.editData.participant_video = data.participant_video;
        this.editData.join_before_host = data.join_before_host;
        this.editData.mute_upon_entry = data.mute_upon_entry;

        if (this.repeat_session == 0) {
          this.scheduledateFrom = moment(this.editData.start_datetime).format('YYYY-MM-DD');

          let startTime = moment(this.editData.start_datetime).format('hh:mm A');
          let endTime = moment(this.editData.end_datetime).format('hh:mm A');

          this.hoursFrom = startTime.split(':')[0] + " " + startTime.split(' ')[1];
          this.minuteFrom = startTime.split(' ')[0].split(':')[1];
          this.hoursTo = endTime.split(':')[0] + " " + endTime.split(' ')[1];
          this.minuteTo = endTime.split(' ')[0].split(':')[1];
        }

          this.batchesIds = this.editData.batch_list;
          if (this.editData.course_list != null && this.editData.course_list.length > 0) {
            if(this.schoolModel) {
              this.courseValue = this.editData.course_list[0].standard_name;
            } else {
              this.courseValue = this.editData.course_list;
            }
          }
          this.getCourses(this.courseValue);
          this.courseIds = this.editData.course_list;
          if (this.editData.course_list != null && this.editData.course_list.length > 0) {
            this.getCoursepreFillData();
          }
          if(this.isProfessional && this.editData.batch_list !=null && this.editData.batch_list.length > 0) {
            this.getBatchpreFillData();
          }
          this.getTeachers();
          if (!this.zoom_enable) {
            this.getCustomUsers();
          }
          this.editData.studentIDS = data.studentIDS;
          this.getStudentpreFillData();

          if (this.editData.product_list != null) {
            this.getProductPrefillData();
            this.getUserpreFillData();
          }
        }, 5000);
        // this.getStudentpreFillData();
      },
      (error: any) => {
        this.auth.hideLoader();
        this.appC.popToast({ type: "error", body: error.error.message })
      }
    )
  }


  getEvent(event) {
    let proctur_live_expiry_date: any = sessionStorage.getItem('proctur_live_expiry_date');
    if (moment(event).diff(moment(), 'days') < 0) {
      let msg = {
        type: "info",
        body: "You cannot select past date"
      }
      this.appC.popToast(msg);
      this.scheduledateFrom = moment().format('YYYY-MM-DD')
    }
    event = (new Date(event));
    proctur_live_expiry_date = (new Date(proctur_live_expiry_date));
    event.setHours(0,0,0,0);
    proctur_live_expiry_date.setHours(0,0,0,0);
    if(proctur_live_expiry_date< event && proctur_live_expiry_date!=event){
      const tempMsg = 'Your live class subscription will get expired on '.concat(moment(proctur_live_expiry_date).format('DD-MM-YYYY')).concat(' hence you will not be able create live class. Renew your subscription to conduct live classes again!');
      this.msgService.showErrorMessage('info','' , tempMsg);
      this.scheduledateFrom = moment().format('YYYY-MM-DD')
    }
  }

  getEventHourFrom(e) {
    // this.minuteFrom = "00";
    if (this.hoursFrom != "" && this.hoursFrom != null && this.minuteFrom == "") {
      this.minuteFrom = "00";
    }
    else if (this.hoursTo != "" && this.hoursTo != null && this.minuteTo == "") {
      this.minuteTo = "00";
    }
    if (this.hoursFrom != "" && this.hoursFrom != null && this.minuteFrom != "" && this.minuteFrom != null
      && this.hoursTo != "" && this.hoursTo != null && this.minuteTo != "" && this.minuteTo != null) {
      this.getEventHourTo();
    }
  }

  getEventHourTo() {

    let fromTime = moment(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursFrom.split(' ')[0] + ":" + this.minuteFrom + " " + this.hoursFrom.split(' ')[1];
    let toTime = moment(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursTo.split(' ')[0] + ":" + this.minuteTo + " " + this.hoursTo.split(' ')[1];
    let fromTimeT = moment(fromTime).format('YYYY-MM-DD hh:mm a');
    let toTimeT = moment(toTime).format('YYYY-MM-DD hh:mm a');

    if (moment(fromTimeT).diff(moment(toTimeT), 'minutes') > 0) {
      this.appC.popToast({ type: "error", body: "From time cannot be greater than to time" });
      this.dateTimeStatus = false;
      return false;
    }

    else if (this.hoursFrom == "" || this.hoursTo == "" || this.minuteFrom == "" || this.minuteTo == "") {
      this.appC.popToast({ type: "error", body: "All fields are required" });
      this.dateTimeStatus = false;
      return false;
    }

    else if (moment(fromTimeT).diff(moment(), 'minutes') <= 0) {
      this.appC.popToast({ type: "error", body: "Class cannot be schedule before current time" });
      this.dateTimeStatus = false;
      return false;
    }

    else if (fromTimeT == toTimeT) {
      this.appC.popToast({ type: "error", body: "From time and to time cannot be same" })
      this.dateTimeStatus = false;
      return false;
    }
    else {
      this.dateTimeStatus = true;
    }

  }


  checkMandatoryFields() {
    console.log(this.dateTimeStatus);
    this.getEventHourTo();    
    if (this.userType === "3") {
      if (this.topicName != "" && this.topicName != null) {
        if (this.dateTimeStatus == true) {
          // this.navigateTo("assignStudent")
          // this.getStudentpreFillData();
          return true;
        }
        else {
          this.getEventHourTo();
        }
      }
      else {
        this.appC.popToast({ type: "error", body: "All fields are required" });
        return false;
      }
    } else {



      if (this.topicName != "" && this.topicName != null && this.selectedFacultyList.length != 0) {
        if (this.dateTimeStatus) {
          // this.navigateTo("assignStudent")
          // this.getStudentpreFillData();
          return true;
        }
        else {
          this.getEventHourTo();
        }
      }
      else {
        this.appC.popToast({ type: "error", body: "All fields are required" });
        return false;
      }
    }
  }

  getBatchpreFillData() {

    let userIDs: any = [];
    let userName: any = [];
    this.batchesIds.forEach(element => {
      userIDs.push(element.batch_id);
      userName.push(element.batch_name)
    });

    let temp: any[] = [];
    for (var i = 0; i < userIDs.length; i++) {
      let x = {
        batch_id: '',
        batch_name: ''
      };
      x.batch_id = userIDs[i];
      x.batch_name = userName[i];
      temp.push(x)
    }
    // this.course = temp;
    this.selectedBatchList = temp;
  }


  getCoursepreFillData() {

    let userIDs: any = [];
    let userName: any = [];
    this.courseIds.forEach(element => {
      userIDs.push(element.course_id);
      userName.push(element.course_name)
    });
    let sub_list: any  = [];
    for(let i=0;i<this.courseIds.length;i++) {
      for(let j=0;j<this.courseIds[i].subject_list.length;j++) {
        let temp = {
          batch_id: '',
          subject_name: ''
        }
        temp.batch_id = this.courseIds[i].subject_list[j].batch_id;
        temp.subject_name = this.courseIds[i].subject_list[j].subject_name;
        sub_list.push(temp);
      }
    }
    this.selectedSubjectList = sub_list;

    let temp: any[] = [];
    for (var i = 0; i < userIDs.length; i++) {
      let x = {
        course_id: '',
        course_name: ''
      };
      x.course_id = userIDs[i];
      x.course_name = userName[i];
      temp.push(x)
    }
    // this.course = temp;
    this.selectedCourseList = temp;
    if(!this.schoolModel) {
      let mcourse = [];
      for(let j=0;j<this.courseValue.length;j++) {
        let y = {
          master_course: '',        
        }
        y.master_course = this.courseValue[j].master_course_name;
        mcourse.push(y);
      }
      this.courseValue = mcourse;
    } else {
        this.courseValue = this.editData.course_list[0].standard_name;
    }
  }

  getProductPrefillData() {
    let temp: any[] = [];
    if (this.editData.product_list != null) {
      // let studentIDS = this.editData.studentIDS.split(',')
      // let studentName = this.editData.studentName.split(',')

      for (var i = 0; i < this.editData.product_list.length; i++) {
        let x = {
          id: '',
          title: ''
        };
        x.id = this.editData.product_list[i].product_id;
        x.title = this.editData.product_list[i].product_name;
        temp.push(x)
      }
    }
    this.product_id = temp;
    // this.onChangeProduct(this.product_id);
  }

  getStudentpreFillData() {
    let temp: any[] = [];
    if (this.editData.studentIDS != null) {
      let studentIDS = this.editData.studentIDS.split(',')
      let studentName = this.editData.studentName.split(',')

      for (var i = 0; i < studentIDS.length; i++) {
        let x = {
          student_id: 0,
          student_name: ''
        };
        x.student_id = Number(studentIDS[i]);
        x.student_name = studentName[i]
        temp.push(x)
      }
    }

    // this.studentList = temp;
    this.selectedStudentList = temp;

  }
  getUserpreFillData() {

    if(this.editData.elearnUserIds) {
    let userIDs = this.editData.elearnUserIds.split(',')
    let userName = this.editData.eLearnUserName.split(',')

    let temp: any[] = [];
    for (var i = 0; i < userIDs.length; i++) {
      let x = {
        user_id: 0,
        name: ''
      };
      x.user_id = Number(userIDs[i]);
      x.name = userName[i];
      temp.push(x)
    }
    this.selectedUserList = temp;
  }
  }

  scheduleClass() {

    let validationFlag = true;
    if (!this.isProfessional) {
      if (this.courseIds != null && this.courseValue != null && this.courseValue != '') {
        if (this.selectedStudentList.length != 0 || this.selectedUserList.length != 0) {
          validationFlag = true;
          if(this.checkMandatoryFields()) {
            if(this.schoolModel) {
              if(this.selectedSubjectList!=null && this.selectedSubjectList.length!=0 ) {
                validationFlag = true;
              } else {
                validationFlag = false;
                this.appC.popToast({ type: "error", body: "Please select subject" })
              }
            } else {
              validationFlag = true;
            }
          } else {
            validationFlag = false;
          }
        } else {
          validationFlag = false;
          this.appC.popToast({ type: "info", body: "Please select students or users" })
        }
      }
      else {
        validationFlag = false;
        this.appC.popToast({ type: "error", body: "All fields are required" })
      }
    }
    else {
      if (this.batchesIds != null) {
        console.log(this.batchesIds)
        if (this.selectedStudentList.length != 0 || this.selectedUserList.length != 0) {
          validationFlag = true;
          if(this.checkMandatoryFields()) {
            validationFlag = true;
          } else {
            validationFlag = false;
          }
        } else {
          validationFlag = false;
          this.appC.popToast({ type: "info", body: "Please select students or users" })
        }
      }
      else {
        validationFlag = false;
        this.appC.popToast({ type: "error", body: "All fields are required" })
      }
    }

    if (validationFlag) {
      this.facultyId = [];
      this.custUserIds = [];
      this.studentsId = [];
      let product_ids = [];

      this.selectedFacultyList.map(
        (ele: any) => {
          let x = ele.teacher_id.toString();
          this.facultyId.push(x);
        }
      )

      this.selectedModeratorList.map(
        (ele: any) => {
          let x = ele.userid.toString();
          this.custUserIds.push(x);
        }
      )

      this.selectedStudentList.map(
        (ele: any) => {
          let x = ele.student_id.toString();
          this.studentsId.push(x);
        }
      );

      this.selectedUserList.map(
        (ele: any) => {
          let x = ele.user_id.toString();
          this.eLearnCustUserIDs.push(x);
        }
      );
      console.log(this.eLearnCustUserIDs);

      if(this.product_id && this.product_id.length) {
        this.product_id.map(
          (ele: any) => {
            let x = ele.id.toString();
            product_ids.push(x);
          }
        )
      }

      let course_list: any = [];
      if(!this.schoolModel) {
        this.selectedCourseList.map(
          (ele: any) => {
            let x = { 'course_id': ele.course_id.toString() }
            course_list.push(x);
          }
        );
      }

      let batch_list: any = [];
      this.selectedBatchList.map(
        (ele: any) => {
          let x = { 'batch_id': ele.batch_id.toString() }
          batch_list.push(x);
        }
      );

      if(this.schoolModel) {       
        for(let i=0;i<this.selectedCourseList.length;i++) {
            let x = { 'course_id': this.selectedCourseList[i].course_id.toString() }
            course_list.push(x);
              course_list[i].subject_list = [];
              for(let j=0;j<this.subjectList.length;j++) {
              for(let l=0;l<this.selectedSubjectList.length;l++) {                
                  if((this.subjectList[j].batch_id == this.selectedSubjectList[l].batch_id) && (this.subjectList[j].course_id == this.selectedCourseList[i].course_id)) {
                    let x = { 'batch_id': this.subjectList[j].batch_id.toString() }
                    course_list[i].subject_list.push(x);
                  }
                }
              }
          }
      }
      // this.selectedBatchList.map(
      //   (ele: any) => {
      //     let x ={'subject_id': ele.batch_id.toString()}
      //     subject_list.push(x);
      //   }
      // );

      this.updateOnlineClass.course_list = course_list;
      this.updateOnlineClass.batch_list = batch_list;

      this.updateOnlineClass.session_name = this.topicName;
      this.updateOnlineClass.custUserIds = this.custUserIds;
      this.updateOnlineClass.studentIds = this.studentsId;
      this.updateOnlineClass.teacherIds = this.facultyId;
      this.updateOnlineClass.start_datetime = moment(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursFrom.split(' ')[0] + "" + ":" + this.minuteFrom + " " + this.hoursFrom.split(' ')[1];
      this.updateOnlineClass.end_datetime = moment(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursTo.split(' ')[0] + "" + ":" + this.minuteTo + " " + this.hoursTo.split(' ')[1];
      this.updateOnlineClass.eLearnCustUserIDs = this.eLearnCustUserIDs;
      if (product_ids != null) {
        this.updateOnlineClass.product_ids = product_ids;
      } else {
        this.updateOnlineClass.product_ids = null;
      }
      if (this.editData.sent_notification_flag) {
        this.updateOnlineClass.sent_notification_flag = 1;
      }
      else {
        this.updateOnlineClass.sent_notification_flag = 0;
      }

      this.updateOnlineClass.private_access = this.editData.private_access;
      this.updateOnlineClass.access_enable_lobby = this.editData.access_enable_lobby;
      this.updateOnlineClass.access_enable_breakout_rooms = this.editData.access_enable_breakout_rooms;
      if (this.editData.access_before_start) {
        this.updateOnlineClass.access_before_start = 1;
      }
      else {
        this.updateOnlineClass.access_before_start = 0;
      }

      if (this.zoom_enable) {
        this.updateOnlineClass.is_zoom_live_class = true;
      }
      else {
        this.updateOnlineClass.is_zoom_live_class = false;
      }

      if (this.auto_recording) {
        this.updateOnlineClass.auto_recording = "local";
      }
      else if (!this.auto_recording) {
        this.updateOnlineClass.auto_recording = "none";
      }

      if (this.editData.mute_upon_entry) {
        this.updateOnlineClass.mute_upon_entry = true;
      }
      else {
        this.updateOnlineClass.mute_upon_entry = false;
      }

      if (this.editData.host_video) {
        this.updateOnlineClass.host_video = true;
      }
      else {
        this.updateOnlineClass.host_video = false;
      }

      if (this.editData.participant_video) {
        this.updateOnlineClass.participant_video = true;
      }
      else {
        this.updateOnlineClass.participant_video = false;
      }

      if (this.editData.join_before_host) {
        this.updateOnlineClass.join_before_host = true;
      }
      else {
        this.updateOnlineClass.join_before_host = false;
      }

      this.updateOnlineClass.product_ids = product_ids;

      this.updateOnlineClass.hide_recording_notifications = this.editData.hide_recording_notifications;
      this.updateOnlineClass.prevent_user_count = this.editData.prevent_user_count;

      if (this.repeat_session == 0) {
        this.auth.showLoader();
        const url = '/api/v1/meeting_manager/updateV2/' + this.institution_id + "/" + this.editSessionId;
        this.http_service.postData(url, this.updateOnlineClass).subscribe(
          (data: any) => {
            let session = (this.live_class_for == "1") ? 'Live class session ' : 'Zoom class session ';
            this.appC.popToast({ type: "success", body: session + this.topicName + " " + "updated successfully" });
            this.router.navigate(['/view/live-classes']);
            this.auth.hideLoader();
          },
          (error: any) => {
            this.auth.hideLoader();
            this.facultyId = [];
            this.custUserIds = [];
            this.studentsId = [];
            this.appC.popToast({ type: "error", body: error.error.message })
          }
        )
      }

      if (this.repeat_session == 1) {
        this.updateOnlineClass.studentIds = this.studentsId;
        this.auth.showLoader();
        const url = '/api/v1/meeting_manager/createV2'
        this.http_service.putData(url, this.updateOnlineClass).subscribe(
          (data: any) => {
            this.appC.popToast({ type: "success", body: this.topicName + " " + "created successfully" });
            this.router.navigate(['/view/live-classes']);
            this.auth.hideLoader();
          },
          (error: any) => {
            this.auth.hideLoader();
            this.facultyId = [];
            this.custUserIds = [];
            this.studentsId = [];
            this.appC.popToast({ type: "error", body: error.error.message })
          }
        )
      }



    }



  }

  getStudentsBySubject(obj) {
    if(obj && obj.length) {
      let temp:any = [];
      obj.forEach(element => {
        temp.push(element.batch_id);
      });
      console.log(temp);
      this.fetchStudentsApi(temp);
    }
  }



  /** this function is used to fetch teacher details */
  getTeachers() {
    this.auth.showLoader();
    const url = `/api/v1/teachers/all/+${this.institution_id}?active=Y`
    this.http_service.getData(url).subscribe(
      (data: any) => {
        this.teachersAssigned = data;
        console.log(this.teachersAssigned)
        // this.getCheckedBox(this.teachersAssigned);
        this.auth.hideLoader();

        let teachersIds = this.editData.teachersIds.split(',')
        let teachersNames = this.editData.teachersName.split(',')

        let temp: any[] = [];
        for (var i = 0; i < teachersIds.length; i++) {
          let x = {
            teacher_id: 0,
            teacher_name: ''
          };
          x.teacher_id = +teachersIds[i];
          x.teacher_name = teachersNames[i]
          temp.push(x)
        }

        this.selectedFacultyList = temp;

      },
      (error: any) => {
        this.teachersAssigned = [];
        this.errorMessage(error);
        this.auth.hideLoader();
      }
    )
  }

  /** this function is used to fetch customer details */
  getCustomUsers() {
    this.auth.showLoader();
    const url = '/api/v1/profiles/custUsers/' + this.institution_id
    this.http_service.getData(url).subscribe(
      (data: any) => {
        this.userAssigned = data;
        console.log(this.userAssigned)
        // this.getCheckedBox(this.userAssigned);
        this.auth.hideLoader();
        if(this.editData.moderatorIds!=null && this.editData.moderatorIds!='') {
        let userid = this.editData.moderatorIds.split(',')
        let name = this.editData.moderatorName.split(',')

        let temp: any[] = [];
        for (var i = 0; i < userid.length; i++) {
          let x = {
            userid: '',
            name: ''
          };
          x.userid = userid[i];
          x.name = name[i]
          temp.push(x)
        }
        this.selectedModeratorList = temp;
      }

      },
      (error: any) => {
        this.errorMessage(error);
        this.userAssigned = [];
        this.auth.hideLoader();
      }
    )
  }

  getBatchesCoursesIds(ids) {
    this.selectedStudentList = [];
    this.selectedSubjectList = [];
    let temp: any = [];
    if (this.isProfessional) {
      this.batchesIds = ids;
      this.batchesIds.forEach(element => {
        temp.push(element.batch_id);
      });
      this.fetchStudentsApi(temp);
      // this.getStudents();
    }
    else {
      let tempData: any = this.courses;
      if(this.schoolModel) {
        this.subjectList = [];
        this.updateSubjectList(ids);
      } else {
        this.courseIds = ids
        this.courseIds.forEach(element => {
          temp.push(element.course_id);
        });
        this.fetchStudentsApi(temp);
      }
      // this.getStudents();
    }
  }

  updateSubjectList(event) {
    this.subjectList = [];
    if(event && event.length) {
    let course_id = Array.prototype.map.call(event, function(item) { return item.course_id; }).join(",");
    const url = "/api/v1/subjects/course?courseIds=" + course_id;
    this.auth.showLoader();
    this.http_service.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        //console.log('Subject', res);
        this.subjectList = res.result;
        if(this.subjectList && this.subjectList.length) {
        this.subjectList.forEach(element => {
          element.subject_name = element.course_name + ' - ' + element.subject_name;
          if(element.is_optional == 'Y') {
            element.subject_name = element.subject_name + ' (Optional)';
          }
        });
      }
      },
      err => {
        this.msgService.showErrorMessage('error', '', err.error.message);
        this.auth.hideLoader();
        //console.log(err);
      }
    )
    }
  }

  getBatchesCourses() {
    this.auth.showLoader();
    if (this.isProfessional) {
      let url = '';
      if (this.userType === '3') {
        url = '/api/v1/batches/all/' + this.institution_id + '?active=Y' + '&isTeacher=true&isActiveNotExpire=Y';
      } else {
        url = '/api/v1/batches/all/' + this.institution_id + '?active=Y&isActiveNotExpire=Y';
      }
      this.http_service.getData(url).subscribe(
        (data: any) => {
          this.batches = data;
          if (this.batches && !this.batches.length) {
            this.appC.popToast({ type: "error", body: "Please check batches are active or not." });
          }
          console.log(this.batches)
          this.auth.hideLoader();
        },
        (error: any) => {
          this.auth.hideLoader();
          this.errorMessage(error);
        }
      )
    }
    else {
      let url = '';
      if(this.schoolModel) {
        url = "/api/v1/courseMaster/master-course-list/" + sessionStorage.getItem("institute_id") + "?is_standard_wise=true&sorted_by=course_name&is_active_not_expire=Y";
      } else if(this.userType === '3') {
        url = '/api/v1/courseMaster/fetch/' + this.institution_id + '/all' + '?isAllCourses=Y&isActiveNotExpire=Y';
      } else {
        url = '/api/v1/courseMaster/fetch/' + this.institution_id + '/all?isActiveNotExpire=Y';
      }
      this.http_service.getData(url).subscribe(
        (data: any) => {
          this.fullResponse = data.result;
          this.masters = (this.schoolModel) ? (Object.keys(data.result)) : data;
          if (this.masters && !this.masters.length) {
            this.appC.popToast({ type: "error", body: "Please check courses are active or not." });
          }
          console.log(this.masters)
          this.auth.hideLoader();
        },
        (error: any) => {
          console.log(error)
          this.errorMessage(error);
          this.auth.hideLoader();
        }
      )
    }
  }

  getCourses(master_course_name) {
    if(master_course_name) {      
      this.selectedCourseList = [];
      this.courses = [];
      this.selectedSubjectList = [];
      let tempData: any = this.masters;
      if(this.schoolModel) {
        let temp = this.fullResponse[master_course_name];
        for (let i = 0; i < temp.length; i++) {
          this.courses.push(temp[i]);
        }
      } else {
        for (let i = 0; i < tempData.length; i++) {
          for(let j=0;j< master_course_name.length; j++) {
            if (tempData[i].master_course === master_course_name[j].master_course) {
              for(let k=0;k<tempData[i].coursesList.length;k++) {
                this.courses.push(tempData[i].coursesList[k]);
              }
            }
          }
        }
      }
        //End
    }
  }

  getStudents() {
    this.studentList = [];
    let str = []
    if (this.isProfessional) {
      // this.batchesIds.map(
      //   (ele: any) => {
      //     let x = ele.toString();
      //     str.push(x);
      //   }
      // )
      this.fetchStudentsApi(this.batchesIds);
    }
    else {
      // this.courseIds.map(
      //   (ele: any) => {
      //     let x = ele.toString();
      //     str.push(x);
      //   }
      // )
      this.fetchStudentsApi(this.courseIds);
    }
  }

  fetchStudentsApi(courseArray) {
    this.auth.showLoader();
    this.getPayloadBatch.coursesArray = courseArray;
    const url = '/api/v1/courseMaster/onlineClass/fetch/users'
    this.http_service.postData(url, this.getPayloadBatch).subscribe(
      (data: any) => {
        this.studentList = data.studentsAssigned;
        // Added by - Nalini Walunj
        // if we change course then selected student list should be clear and if we select same course then already selected students should be seleted
        let temp: any[] = [];
        if (this.editData.studentIDS != null && this.editData.studentIDS != undefined) {
          let studentIDS = this.editData.studentIDS.split(',')
          let studentName = this.editData.studentName.split(',')
          for (var i = 0; i < this.studentList.length; i++) {
            for (var j = 0; j < studentIDS.length; j++) {
              if (this.studentList[i].student_id == studentIDS[j]) {
                let x = {
                  student_id: 0,
                  student_name: ''
                };
                x.student_id = Number(studentIDS[j]);
                x.student_name = studentName[j]
                temp.push(x)
              }
            }
          }
        }
        this.selectedStudentList = temp;
        // this.getCheckedBox(this.studentsAssigned);
        this.auth.hideLoader();
      },
      (error: any) => {
        this.auth.hideLoader();
        this.errorMessage(error);
      }
    )
  }

  errorMessage(error) {
    this.appC.popToast({ type: "error", body: error.error.message })
  }

  /* Function to navigate on icon click */
  switchToView(id) {
    switch (id) {
      case "class-icon": {
        this.navigateTo("classDetails");
        break;
      }
      case "assignStudent-icon": {
        this.navigateTo("assignStudent");
        break;
      }
      default: {
        this.navigateTo("classDetails");
        break;
      }
    }
  }


  /* Function to navigate through the Student Add Form on button Click Save/Submit*/
  navigateTo(text) {
    if (text === "classDetails") {
      if (this.class_id == 0 || this.class_id == null) {
        document.getElementById('li-one').classList.add('active');
        document.getElementById('li-two').classList.remove('active');
        this.isBasicActive = true;
        this.isOtherActive = false;
      }
      else {
        let msg = { type: 'info', title: 'Live Class Details Already Saved', body: '' };
        this.appC.popToast(msg);
      }
    }
    else if (text === "assignStudent") {
      if (this.class_id == 0 || this.class_id == null) {
        document.getElementById('li-one').classList.remove('active');
        document.getElementById('li-two').classList.add('active');
        this.isBasicActive = false;
        this.isOtherActive = true;
        if (this.batchesIds != null) {
          this.getBatchpreFillData();
        }
        this.getStudentpreFillData();
      }
      else {
        let msg = { type: 'info', title: 'Live Class Details Already Saved', body: '' };
        this.appC.popToast(msg);
      }
    }

  }

  cancel() {
    this.router.navigateByUrl('/view/live-classes');
  }

  openCalendar(id) {
    document.getElementById(id).click();
  }


}
