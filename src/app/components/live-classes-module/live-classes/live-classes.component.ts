import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as moment from 'moment';
import { HttpService, MessageShowService } from '../../..';
import { DomSanitizer } from '../../../../../node_modules/@angular/platform-browser';
import { AppComponent } from '../../../app.component';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { ProductService } from '../../../services/products.service';
declare var window;
declare var $;

class fileObj {
  private fileName: string;
  private fileType: string;
  private fileSize: any;
  constructor(fileName: string, fileType: string, fileSize: any) {
    this.fileName = fileName;
    this.fileType = fileType;
    this.fileSize = this.getSizeMB(fileSize);
  }
  public getSizeMB(size: any): string {
    return size + "KB";
  }
  public getSize(): any {
    return this.fileSize;
  }
}

@Component({
  selector: 'app-live-classes',
  templateUrl: './live-classes.component.html',
  styleUrls: ['./live-classes.component.scss']
})

export class LiveClassesComponent implements OnInit, OnDestroy {


  activeIndex: number = 1;
  studentForm: boolean = true;
  kyc: boolean = false;
  isProfessional: boolean = false;
  feeDetails: boolean = false;
  inventory: boolean = false;
  openClassPopup: boolean = false;
  pastClassesPopup: boolean = false;
  futureClassesPopup: boolean = false;
  allClasses: boolean = true;
  liveClassFor: boolean = false;
  validations: boolean = false;
  sendNotifyMe: boolean = false;
  rescheduleClass: boolean = false;
  PageIndex: number = 1;
  totalRow: number;
  displayClassSize: number = 10;
  classListDataSource: any = [];
  classList: any = [];
  searchData: any = [];
  download_links: any = [];
  searchDataFlag: boolean = false;
  fileUrl: any = null;
  fileName: any = null;
  isVDOCipherVDO = false;

  JsonVars: any = {
    selected: false,
    submitReq: false,
    video_url: null,
    view_proctur_live_recorded_session: 1
  }

  batches: any[] = [];
  hour = ['01 AM', '02 AM', '03 AM', '04 AM', '05 AM', '06 AM', '07 AM', '08 AM', '09 AM', '10 AM', '11 AM', '12 AM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM', '09 PM', '10 PM', '11 PM', '12 PM'];
  minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
  batchesIds: any[] = [];
  courseIds: any[] = [];
  studentsAssigned: any[] = []
  teachersAssigned: any[] = [];
  userAssigned: any[] = [];
  masters: any[] = []
  courses: any[] = []
  isStudentCheckedArr: any[] = []
  isUserCheckedArr: any[] = [];
  teacherIdArr: any[] = [];
  getClasses: any[] = [];
  getPastClasses: any[] = [];
  getFutureClasses: any[] = [];
  customId = [];
  studentId = [];
  columnMaps: any[] = [0, 1, 2, 3];
  hourFrom: string = "";
  hourTo: string = "";
  minuteTo: string = "";
  minuteFrom: string = "";
  teacherId: string = '';
  courseValue: string = '';
  session: string = "";
  hourFromReschedule: string = "";
  minuteFromReschedule: string = "";
  hourToReschedule: string = "";
  minuteToReschedule: string = "";
  classDetails: string = "";
  dateToday = moment().format('YYYY-MM-DD');
  dateFrom = moment(new Date()).format('YYYY-MM-DD');
  rescheduledateFrom = moment(new Date()).format('YYYY-MM-DD');
  institution_id: any = sessionStorage.getItem('institution_id');
  rescheduleclass = {
    end_datetime: "",
    institution_id: this.institution_id,
    session_id: "",
    start_datetime: ""
  }
  getOnlineClasses = {
    custUserIds: [],
    end_datetime: "",
    institution_id: this.institution_id,
    sent_notification_flag: 0,
    session_name: "",
    start_datetime: "",
    studentIds: [],
    teacherIds: []
  }
  getPayloadBatch = {
    inst_id: this.institution_id,
    coursesArray: [''],
    role: 'student'
  }

  previosLiveClasses: any[] = [];
  futureLiveClasses: any[] = [];
  today: any = new Date();
  sortDate: any = {};
  liveClassSearchFilter: any = {
    from_date: '',
    to_date: ''
  };

  obj: any = {
    institution_id: '',
    user_id: ''
  }
  alertBox: boolean = true;
  cancelSessionId: any;
  cancelMeetingWith: any;
  sendSMSNotification: boolean = true;
  sendPushNotification: boolean = false;
  forUser: boolean = false;
  forModerator: boolean = false;
  proctur_live_expiry_date_check: boolean = false;
  viewDownloadPopup: boolean = false;
  tempVideoData: any = {};
  showVideo: boolean = true;
  videoObject: any;
  proctur_live_view_or_download_visibility: any = 0;
  searchText: any = "";

  is_zoom_integration_enable: boolean = true;
  is_proctur_live_recording_allow: any;
  videoLimitExceed: any;
  // zoom_enable: boolean = false;

  // upload file
  dateValue: any;
  type: string = "";
  customFileArr: fileObj[] = [];
  selectedFiles: any[] = [];
  tempArr: any[] = [];
  Authorization: any;
  uploadSessionId: any;
  uploadClassType: any;
  fileUploadInput: any;
  progress: number = 0;
  progressBar: boolean = false;
  download: number = 0;
  donloadBar: boolean = false;

  daysLeftForSubscriptionExpiry: number;
  ShowActionBtn: any = {};
  attendance_buffer: any = 0;
  proctur_live_integration_with_vimeo: any = 0;
  proctur_live_integration_with_vdoCipher: any = 0;
  isVimeo: any = 'VDOCipher';
  vimeo_title: any = '';
  // watch_duration: any = 0;
  videoplayer: boolean = false;
  currentProjectUrl: any;
  isUploding: any = false;
  fileUploadXHR: any = '';
  vimeo_video_downlodable: any = false;
  vimeoDownloadLinks: any = [];
  selectedDownloadSize: any = {};
  live_class_session_recording_id: any = 0;
  showSMSNotify: boolean = false;
  smsData: any = '';
  showPushNotify: boolean = false;
  showViewClassPopup: boolean = false;
  viewClassData: any = '';
  showCustomFilter = false;
  schoolModel: boolean = false;
  live_class_for: any = '1';
  startClassMsg:any = '';
  message_for_setup_not_done:any='';
  set_up_done:boolean = false;

  constructor(
    private auth: AuthenticatorService,
    private appC: AppComponent,
    private router: Router,
    private _http: HttpService,
    private msgService: MessageShowService,
    private sanitizer: DomSanitizer,
    private productService: ProductService
  ) {
  }
  ngOnInit() {
    this.auth.schoolModel.subscribe(
      res => {
        this.schoolModel = false;
        if (res) {
          this.schoolModel = true;
        }
      }
    )
    this.auth.institute_type.subscribe(
      res => {
        if (res == "LANG") {
          this.isProfessional = true;
        } else {
          this.isProfessional = false;
        }
      }
    )
    if(sessionStorage.getItem('setLiveClassType') == null || sessionStorage.getItem('setLiveClassType') == '') {
      sessionStorage.setItem('setLiveClassType', '1');
    }
    this.live_class_for = sessionStorage.getItem('setLiveClassType');
    let pastClass = sessionStorage.getItem('pastClass');
    const today = moment();
    let begin = moment(today.startOf('isoWeek')).format('DD-MM-YYYY');
    let end = moment(today.endOf('isoWeek')).format('DD-MM-YYYY');
    this.liveClassSearchFilter = {
      from_date: moment().format('DD-MM-YYYY'),
      to_date: end
    }
    if (pastClass === 'true') {
      this.liveClassFor = true;
      sessionStorage.setItem('pastClass', 'false');
      this.liveClassSearchFilter.from_date = sessionStorage.getItem('from_live_date');
      this.liveClassSearchFilter.to_date = sessionStorage.getItem('to_live_date');
      sessionStorage.removeItem('from_live_date');
      sessionStorage.removeItem('to_live_date');
    }
    let zoom = sessionStorage.getItem('is_zoom_enable');
    this.is_zoom_integration_enable = JSON.parse(zoom);
    if (this.is_zoom_integration_enable) {
      // this.zoom_enable = true
    }

    const userType = sessionStorage.getItem('userType');
    console.log("userType", userType);
    const userName = sessionStorage.getItem('username');
    if (userType == '3') {
      this.forUser = true;
      this.startClassMsg = 'You can start the live class 30 mins prior to the commencement of the class.';
    }
    if (userType == '0') {
      this.forModerator = true;
      this.startClassMsg = '';
      if(userName != 'admin') {
        this.startClassMsg = 'Custom User can join the session if added as a moderator on the scheduled time only';
      }
    }
    let limit = sessionStorage.getItem('videoLimitExceeded');
    this.videoLimitExceed = JSON.parse(limit);
    this.sortDate.this_week = true;
    this.getClassesList();
    this.getAuthKey();
    this.institution_id = sessionStorage.getItem('institution_id');
  }

  ngOnDestroy() {
    if(!this.showVideo) {
      this.watchHistory();
    }
  }

  getAuthKey() {
    this.auth.currentAuthKey.subscribe(key => {
      this.Authorization = key;
    })
  }

  checkLiveClassExpiry(proctur_live_expiry_date) {
    let currentDate = (new Date());
    proctur_live_expiry_date = (new Date(proctur_live_expiry_date));
    currentDate.setHours(0, 0, 0, 0);
    proctur_live_expiry_date.setHours(0, 0, 0, 0);
    let difference_In_Time = proctur_live_expiry_date.getTime() - currentDate.getTime();
    this.daysLeftForSubscriptionExpiry = difference_In_Time / (1000 * 3600 * 24);
    if (proctur_live_expiry_date < currentDate) {
      this.proctur_live_expiry_date_check = true;
    }
    if (proctur_live_expiry_date == currentDate) {
      this.proctur_live_expiry_date_check = false;
    }
  }

 toggleAction(obj) {
  this.liveClassFor = obj;
  this.totalRow = 0;
  this.getClasses = [];
  this.PageIndex = 1;
  this.sortDate.this_week = true;
  this.sortDate.this_month = false;
  this.sortDate.custom_date_range = false;
  this.sortDate.last_week = false;
  const today = moment();
  let begin = moment(today.startOf('isoWeek')).format('DD-MM-YYYY');
  let end = moment(today.endOf('isoWeek')).format('DD-MM-YYYY');
  if(this.liveClassFor) {
    this.liveClassSearchFilter = {
      from_date: begin,
      to_date: moment().format('DD-MM-YYYY')
    }
  } else {
    this.liveClassSearchFilter = {
      from_date: moment().format('DD-MM-YYYY'),
      to_date: end
    }
  }
  this.getClassesList();
 }

  getClassesList() {
    // this.PageIndex = 1;
    this.auth.showLoader();
    const userName = sessionStorage.getItem('username');
    this.obj = {
      institution_id: this.institution_id,
      live_future_past: 1,
      category: sessionStorage.getItem('setLiveClassType'),
      from_date: this.liveClassSearchFilter.from_date,
      to_date: this.liveClassSearchFilter.to_date,
      page_offset: this.PageIndex,
      page_size: 10
    }
    if (this.liveClassFor) {
      this.obj.live_future_past = 2;
    }
    const userType: any = sessionStorage.getItem('userType');
    if (userType != 0) {
      const userid: any = sessionStorage.getItem('userid');
      this.obj.user_id = userid;
    }
    this.dateValue = this.liveClassSearchFilter.from_date + ' to ' + this.liveClassSearchFilter.to_date;
    let url = '/api/v1/meeting_manager/getMeetingV2/' + this.institution_id;
    if(this.searchText!='') {
      this.obj.search_criteria=this.searchText.trim();
    }
    this._http.postData(url, this.obj).subscribe(
      (data: any) => {
        this.auth.hideLoader();
        this.set_up_done = data.set_up_done;
        this.message_for_setup_not_done = data.message_for_setup_not_done;
        if(!this.set_up_done) {
          let match = this.message_for_setup_not_done.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
          if(match) {
            match.map(url=>{
              this.message_for_setup_not_done=this.message_for_setup_not_done.replace(url,"<a href=\""+url+"\" target=\"_BLANK\">"+url+"</a>")
            })
          }
          this.msgService.showErrorMessage('info','', data.message_for_setup_not_done)
        }
        this.previosLiveClasses = data.pastLiveClasses;
        this.futureLiveClasses = data.upcomingLiveClasses;
        this.is_proctur_live_recording_allow = data.is_proctur_live_recording_allow;
        this.attendance_buffer = data.attendance_buffer;
        this.proctur_live_integration_with_vdoCipher = data.proctur_live_integration_with_vdoCipher;
        this.proctur_live_integration_with_vimeo = data.proctur_live_integration_with_vimeo;
        this.vimeo_video_downlodable = data.vimeo_video_downlodable;
        if (!(this.proctur_live_integration_with_vimeo == '1' && this.proctur_live_integration_with_vdoCipher == '1')) {
          if (this.proctur_live_integration_with_vimeo == '1') {
            this.isVimeo = 'Vimeo';
          } else if (this.proctur_live_integration_with_vimeo == '1') {
            this.isVimeo = 'VDOCipher';
          }
        }
        if (this.is_proctur_live_recording_allow == 1 && this.videoLimitExceed == 1) {
          $('#videoLimit').modal('show');
          this.videoLimitExceed = 0;
          sessionStorage.setItem('videoLimitExceeded', '0');
        }
        const proctur_live_expiry_date = data.proctur_live_expiry_date;
        this.JsonVars.view_proctur_live_recorded_session = data.view_proctur_live_recorded_session;
        sessionStorage.setItem('proctur_live_expiry_date', proctur_live_expiry_date);
        if (proctur_live_expiry_date != null) {
          this.checkLiveClassExpiry(proctur_live_expiry_date);
          let expiry = sessionStorage.getItem('liveClassExpiryPop');

          if (this.daysLeftForSubscriptionExpiry <= 5 && JSON.parse(expiry)) {
            $('#liveClassExpiry').modal('show');
            sessionStorage.setItem('liveClassExpiryPop', "false")
          }
        }
        this.proctur_live_view_or_download_visibility = data.proctur_live_view_or_download_visibility;
        this.getClassesFor();
        // console.log(this.getClasses)

        this.totalRow = data.total_count;
        // this.fetchTableDataByPage(this.PageIndex);
        this.getClasses = this.getDataFromDataSource(this.PageIndex);
        this.getClasses.map((ele) => {
          ele.start_datetime = moment(ele.start_datetime).format('YYYY-MM-DD hh:mm a')
        })
        this.getClasses.map((ele) => {
          ele.end_datetime = moment(ele.end_datetime).format('YYYY-MM-DD hh:mm a')
        })
        this.diffDataBasedOnDate();
      },
      (error: any) => {
        this.auth.hideLoader();
        this.errorMessage(error);
      }
    )
  }

  diffDataBasedOnDate() {
    let previous_date = null;
    let dTa:any = [];
    let count = 0;
    dTa[count] = [];
    for(let i=0;i<this.getClasses.length;i++) {
      let currDataDate = this.getClasses[i].start_datetime = moment(this.getClasses[i].start_datetime).format('YYYY-MM-DD')
      if(previous_date == null || previous_date == currDataDate) {
        previous_date = currDataDate;
        dTa[count].push(this.getClasses[i]);
      } else {
        previous_date = currDataDate;
        count = count + 1;
        dTa[count] = [];
        dTa[count].push(this.getClasses[i]);
      }
    }
    console.log(JSON.stringify(dTa));
    this.getClasses = dTa;
  }

  copyToClipboard(item) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = item.join_url;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.msgService.showErrorMessage('success', 'Copied to Clipboard', '');

  }

  // Added By Ashwini Gupta For search live class by date
  searchByDate(dateSearch) {

    let event: any = moment(dateSearch).format("YYYY-MM-DD");
    this.getClasses = [];
    if (dateSearch == null) {
      this.getClassesFor();
    }
    if (!this.liveClassFor) {
      for (let i = 0; i < this.futureLiveClasses.length; i++) {
        let tempStartDate: any = moment(this.futureLiveClasses[i].start_datetime).format("YYYY-MM-DD");
        if (event === tempStartDate) {
          this.getClasses.push(this.futureLiveClasses[i]);
        }
      }
    } else {
      for (let i = 0; i < this.previosLiveClasses.length; i++) {
        let tempStartDate: any = moment(this.previosLiveClasses[i].start_datetime).format("YYYY-MM-DD");
        if (event === tempStartDate) {
          this.getClasses.push(this.previosLiveClasses[i]);
        }
      }
    }
    this.totalRow = this.getClasses.length;
  }
  // End
  forTeacher(teachersUserIds) {
    let userId = sessionStorage.getItem('userid');
    if (teachersUserIds.includes(userId)) {
      return true;
    }
    else {
      return false;
    }
  }
  forModeratorId(moderatorIds) {
    if (moderatorIds != null) {
      let userId = sessionStorage.getItem('userid');
      if (moderatorIds.includes(userId)) {
        return true;
      }
      else {
        return false;
      }
    }

  }

  allowStartLiveCLass(link, session_id, meeting_with, moderatorIds) {
    if(this.forModerator && !this.forModeratorId(moderatorIds)) {
      this.msgService.showErrorMessage('info','','Only faculty can start the live class 30 mins prior to the scheduled time. Admin can join the session if added as a moderator on the scheduled time only.');
    } else {
    let zoom = sessionStorage.getItem('is_zoom_enable');
    let zoom_enable = 0;
    if (meeting_with == "Zoom") {
      zoom_enable = 1;
    }
    const url = `/api/v1/meeting_manager/session/start/${this.institution_id}/${session_id}?isZoomLiveClass=${zoom_enable}`;
    this.auth.showLoader();
    this._http.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        if (res.result.allow_start_session) {
          // changes done by Nalini - to remove zoom 2hr restriction
          if(zoom_enable == 1) {
            window.open(res.result.start_url, "_blank");
          } else {
            window.open(link, "_blank");
          }
        } else {
          this.msgService.showErrorMessage('info', '', res.result.allow_start_session_message);
        }
      },
      (err) => {
        this.auth.hideLoader();
        console.log(err);
      }
    )
    }
  }

  startLiveClass(link, start_time) {
    let time = this.diffDate(this.today, start_time);
    let splitedTime = time.split(":");
    let hrs = +splitedTime[0];
    let mins = +splitedTime[1];

    if (hrs <= 0 && mins <= 30) {
      window.open(link, "_blank");
    }
    else {
      this.appC.popToast({ type: "error", body: "Sessions can only be started before 30 minutes of start time." })
    }

  }

  checkForTime(start_time) {
    let time = this.diffDate(this.today, start_time);
    let splitedTime = time.split(":");
    let hrs = +splitedTime[0];
    let mins = +splitedTime[1];

    if (hrs <= 0 && mins <= 30) {
      return true;
    }
    else {
      return false;
    }
  }

  dateRangeChanges(obj) {
    this.sortDate.all = false;
    this.sortDate.last_week = false;
    this.sortDate.this_month = false;
    this.sortDate.custom_date_range = false;
    this.sortDate.this_week = false;
    this.PageIndex = 1;
    if(obj == 'this_week') {
      this.sortDate.this_week = true;
      const today = moment();
      let begin = moment(today.startOf('isoWeek')).format('DD-MM-YYYY');
      let end = moment(today.endOf('isoWeek')).format('DD-MM-YYYY');
      if(this.liveClassFor) {
        this.liveClassSearchFilter = {
          from_date: begin,
          to_date: moment().format('DD-MM-YYYY')
        }
      } else {
        this.liveClassSearchFilter = {
          from_date: moment().format('DD-MM-YYYY'),
          to_date: end
        }
      }
      this.showCustomFilter = false;
      this.getClassesList();
    }
    else if (obj == 'last_week') {
      this.sortDate.last_week = true;
      let begin: any = '';
      let end: any = '';
      if(this.liveClassFor) {
        begin = moment().subtract(1, 'weeks').startOf('isoWeek')
        end = moment().subtract(1, 'weeks').endOf('isoWeek')
      } else {
        begin = moment().add(1, 'weeks').startOf('isoWeek');
        end = moment().add(1, 'weeks').endOf('isoWeek');
      }
      this.liveClassSearchFilter = {
        to_date: moment(end).format('DD-MM-YYYY'),
        from_date: moment(begin).format('DD-MM-YYYY')
      }
      this.showCustomFilter = false;
      this.getClassesList();
    }
    else if (obj == 'this_month') {
      this.sortDate.this_month = true;
      const today = moment();
      let begin = moment(today.startOf('month')).format('DD-MM-YYYY');
      let end = moment().format("YYYY-MM-") + moment().daysInMonth();

      this.liveClassSearchFilter = {
        from_date: begin,
        to_date: moment(end).format('DD-MM-YYYY')
      }
      this.showCustomFilter = false;
      this.getClassesList();
    }
    else if (obj == 'custom_date_range') {
      this.sortDate.custom_date_range = true;
      this.openCalendar('customeDate');
    }
    console.log(this.liveClassSearchFilter);
  }

  openCalendar(id) {
    document.getElementById(id).click();
  }

  updateFilterDateRange(e) {
    this.showCustomFilter = false;
    if (this.sortDate.custom_date_range) {
      this.liveClassSearchFilter.from_date = moment(e[0]).format("DD-MM-YYYY");
      this.liveClassSearchFilter.to_date = moment(e[1]).format("DD-MM-YYYY");
      this.getClassesList();
    }
  }


  editStudent(session_id, meeting_with) {
    let zoom_enable = 0;
    if (meeting_with == "Zoom") {
      zoom_enable = 1;
    }
    this.router.navigate(['/view/live-classes/edit/' + session_id], { queryParams: { repeat: 0, isZoomLiveClass: zoom_enable } });
  }

  repeatSession(session_id, meeting_with) {
    let zoom_enable = 0;
    if (meeting_with == "Zoom") {
      zoom_enable = 1;
    }
    this.router.navigate(['/view/live-classes/edit/' + session_id], { queryParams: { repeat: 1, isZoomLiveClass: zoom_enable } });
  }

  getClassesFor() {
    // this.dateValue = "";
    if (this.liveClassFor) {
      this.getClasses = this.previosLiveClasses;
      this.classListDataSource = this.previosLiveClasses;
    }
    else {
      this.getClasses = this.futureLiveClasses;
      this.classListDataSource = this.futureLiveClasses;
    }
    if (!this.isProfessional) {
      this.getClasses.forEach(element => {
        element.course = Array.prototype.map.call(element.course_list, s => s.course_name).toString();
      })
    } else {
      this.getClasses.forEach(element => {
        element.course = Array.prototype.map.call(element.batch_list, s => s.batch_name).toString();
      })
    }
    console.log("Get Classes", this.getClasses);
    // this.totalRow = this.getClasses.length;
    // this.fetchTableDataByPage(this.PageIndex);
  }

  diffDate(date1, date2) {
    let dateOut1 = new Date(date1); // it will work if date1 is in ISO format
    let dateOut2 = new Date(date2);
    let timeDiff = dateOut2.getTime() / 1000 - dateOut1.getTime() / 1000;
    let hours: any = Math.floor(timeDiff / (60 * 60));

    let divisor_for_minutes = timeDiff % (60 * 60);
    let minutes: any = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    if (hours.toString().length == 1) {
      hours = "0" + hours;
    }
    if (minutes.toString().length == 1) {
      minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
  }

  getTimeLeft(date1, date2) {
    let time = this.diffDate(date1, date2);
    let splitedTime = time.split(":");
    let hrs = +splitedTime[0];
    let mins = +splitedTime[1];
    let inDays: number = Math.floor(hrs / 24);

    if (inDays > 0) {
      if (inDays > 1) {
        return inDays + " days";
      }
      else {
        return inDays + " day";
      }
    }
    else if (hrs < 0) {
      return "00:00 hrs";
    }
    else {
      if (hrs == 0) {
        return mins + " mins";
      }
      else {
        return time + " hrs";
      }
    }
  }

  timeLeft(date1, date2) {
    let time = this.diffDate(date1, date2);
    let splitedTime = time.split(":");
    let hrs = +splitedTime[0];

    if (hrs < 0) {
      return true;
    }
    else {
      return false;
    }

  }

  searchInList() {
    console.log(1)
    if (this.searchText != "" && this.searchText != null) {
      let searchData = this.classListDataSource.filter(item =>
        Object.keys(item).some(
          k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase()))
      );
      this.searchData = searchData;
      console.log(this.searchData);
      this.totalRow = searchData.length;
      this.searchDataFlag = true;
      this.PageIndex = 1;
      // this.fetchTableDataByPage(this.PageIndex);
    } else {
      this.searchDataFlag = false;
      // this.fetchTableDataByPage(this.PageIndex);
      this.totalRow = this.classListDataSource.length;
    }
  }

  // pagination functions

  fetchTableDataByPage(index) {
    this.PageIndex = index;
    let startindex = this.displayClassSize * (index - 1);
    this.getClassesList();
    // this.getClasses = this.getDataFromDataSource(startindex);
  }

  fetchNext() {
    this.PageIndex++;
    this.fetchTableDataByPage(this.PageIndex);
  }

  fetchPrevious() {
    if (this.PageIndex != 1) {
      this.PageIndex--;
      this.fetchTableDataByPage(this.PageIndex);
    }
  }

  getDataFromDataSource(startindex) {
    let data = [];
    let buffer = this.attendance_buffer;
    buffer = (buffer!=0 && buffer!=null) ? (buffer * 60000) : buffer;
    let jobTime = moment(new Date().setHours(20, 0, 0, 0)).format('YYYY-MM-DD hh:mm a');
    let JobBufferTime = moment(new Date().setHours(0, 0, 0, (72000000 - buffer))).format('YYYY-MM-DD hh:mm a');
    let currentDate = moment(new Date()).format('YYYY-MM-DD hh:mm a');
    let temp = moment(new Date().setHours(0, 0, 0, (72000000 - buffer)));
    let ReportAllowDate = moment(new Date(2020, 6, 25, 0, 0, 0)).format('YYYY-MM-DD hh:mm a');
    temp = moment(temp).subtract(1, 'days');
    let yesterDayJobTime = moment(temp).format('YYYY-MM-DD hh:mm a');
    // if (this.searchDataFlag) {
    //   data = this.searchData.slice(startindex, startindex + this.displayClassSize);
    // } else {
    //   data = this.classListDataSource.slice(startindex, startindex + this.displayClassSize);
    // }
    data = this.getClasses;
    if (data && data.length) {
      data.forEach(ele => {
        ele.end_datetime = moment(ele.end_datetime).format('YYYY-MM-DD hh:mm a');
        ele.showViewAttendance = false;
        if (moment(ele.end_datetime).valueOf() >= moment(ReportAllowDate).valueOf()) {
          if (moment(ele.end_datetime).valueOf() <= moment(JobBufferTime).valueOf()) {
            if (moment(currentDate).valueOf() >= moment(jobTime).valueOf() || moment(ele.end_datetime).valueOf() <= moment(yesterDayJobTime).valueOf()) {
              ele.showViewAttendance = true;
            }
          }
        }
      });
    }
    return data;
  }


  getTimeInfo() {
    let fromTime = moment(this.dateFrom).format('YYYY-MM-DD') + " " + this.hourFrom.split(' ')[0] + ":" + this.minuteFrom + " " + this.hourFrom.split(' ')[1];
    let fromDate = moment().format('YYYY-MM-DD');
    let toTime = moment(this.dateFrom).format('YYYY-MM-DD') + " " + this.hourTo.split(' ')[0] + ":" + this.minuteTo + " " + this.hourTo.split(' ')[1];
    let fromTimeT = moment(fromTime).format('YYYY-MM-DD hh:mm a');
    let toTimeT = moment(toTime).format('YYYY-MM-DD hh:mm a');

    if (moment(fromTimeT).diff(moment(toTimeT), 'minutes') > 0) {
      this.appC.popToast({ type: "error", body: "From time cannot be greater than to time" })
      return false;
    }
    else if (this.hourFrom == "" || this.hourTo == "" || this.minuteFrom == "" || this.minuteTo == "" || this.getOnlineClasses.session_name == "") {
      this.appC.popToast({ type: "error", body: "All mandatory fields are required" })
      return false;
    }
    else if (moment(fromTimeT).diff(moment(), 'minutes') <= 20) {
      this.appC.popToast({ type: "error", body: "Class can be schedule 20 minutes from current time" })
      return false;
    }
    else if (fromTimeT == toTimeT) {
      this.appC.popToast({ type: "error", body: "From time and to time cannot be same" })
      return false;
    }
    else {
      // this.getBatchesCourses();

    }
  }

  close() {
    this.openClassPopup = false;
  }

  errorMessage(error) {
    this.appC.popToast({ type: "error", body: error.error.message })
  }

  sendNotify(notify) {
    if (notify == true) {
      this.getOnlineClasses.sent_notification_flag = 1
    }
    else {
      this.getOnlineClasses.sent_notification_flag = 0
    }
  }

  showSmsNotificationPopup(obj) {
    this.smsData = obj;
    this.showSMSNotify = true;
  }

  smsNotification(id, meeting_wih) {
    let obj = {}
    // if (confirm("Are you sure you want to send SMS notification ? ")) {
      let zoom_enable = 0;
      if (meeting_wih == "Zoom") {
        zoom_enable = 1;
      }
      const url = "/api/v1/meeting_manager/sendSMSNotification/" + id + "?isZoomLiveClass=" + zoom_enable;
      this._http.postData(url, obj).subscribe(
        (data: any) => {
          this.appC.popToast({ type: "success", body: "SMS notification sent successfully" })
          this.showSMSNotify = false;
          // this.getClassesList();
        },
        (error: any) => {
          this.errorMessage(error);
        }
      )
    // }
  }

  showpushNotificationPopup(obj) {
    this.smsData = obj;
    this.showPushNotify = true;
  }

  // Done modification for Push notification on the basis of session type- Ashwini Kumar Gupta
  pushNotification(id, sessionType) {
    let obj = {};
    let url: any;
    let zoom = (sessionType === "Zoom" ? true : false);
    url = "/api/v1/meeting_manager/sendPushNotification/" + id + "?isZoomLiveClass=" + zoom;
    // if (confirm("Are you sure you want to send push notification ?")) {

      this._http.getData(url).subscribe(
        (res: any) => {
          this.appC.popToast({ type: "success", body: "Push notification sent successfully" })
          this.showPushNotify = false;
          // this.getClassesList();
        },
        (error: any) => {
          this.errorMessage(error);
        }
      )
    // }
  }
  // End

  cancel(id, live_meeting_with) {
    this.alertBox = false;
    this.cancelSessionId = id;
    this.cancelMeetingWith = live_meeting_with;
    this.sendSMSNotification = true;
  }

  cancelSession() {
    let zoom_enable = 0;
    if (this.cancelMeetingWith == "Zoom") {
      zoom_enable = 1;
    }
    let url = "/api/v1/meeting_manager/delete/" + sessionStorage.getItem('institution_id') + "/" + this.cancelSessionId + "?isZoomLiveClass=" + zoom_enable + "&isSendNotification=" + this.sendSMSNotification;
    this._http.deleteData(url, this.cancelSessionId).subscribe(
      (data: any) => {
        this.appC.popToast({ type: "success", body: data.message })
        this.alertBox = true;
        this.getClassesList();
      },
      (error: any) => {
        this.errorMessage(error);
      }
    )
  }

  closeAlert() {
    this.alertBox = true;
    this.cancelSessionId = "";
  }

  reschedule(id) {
    this.rescheduleClass = true;
    this.openClassPopup = false;
    this.rescheduleclass.session_id = id;
  }

  closeReschedule() {
    this.rescheduleClass = false;
    this.openClassPopup = true;
  }

  getRescheduleTime() {
    let fromTime = moment(this.rescheduledateFrom).format('YYYY-MM-DD') + " " + this.hourFromReschedule.split(' ')[0] + ":" + this.minuteFromReschedule + " " + this.hourFromReschedule.split(' ')[1];
    let fromDate = moment().format('YYYY-MM-DD');
    let toTime = moment(this.rescheduledateFrom).format('YYYY-MM-DD') + " " + this.hourToReschedule.split(' ')[0] + ":" + this.minuteToReschedule + " " + this.hourToReschedule.split(' ')[1];
    let fromTimeT = moment(fromTime).format('YYYY-MM-DD hh:mm a');
    let toTimeT = moment(toTime).format('YYYY-MM-DD hh:mm a');

    if (moment(fromTimeT).diff(moment(toTimeT), 'minutes') > 0) {
      this.appC.popToast({ type: "error", body: "From time cannot be greater than to time" })
      return false;
    }

    else if (this.hourFromReschedule == "" || this.hourToReschedule == "" || this.minuteFromReschedule == "" || this.minuteToReschedule == "") {
      this.appC.popToast({ type: "error", body: "All fields are required" })
      return false;
    }

    else if (moment(fromTimeT).diff(moment(), 'minutes') <= 20) {
      this.appC.popToast({ type: "error", body: "Class can be schedule 20 minutes from current time" })
      return false;
    }

    else if (fromTimeT == toTimeT) {
      this.appC.popToast({ type: "error", body: "From time and to time cannot be same" })
      return false;
    }
    else {
      this.isReschedule();
    }
  }


  isReschedule() {
    this.rescheduleclass.end_datetime = moment(this.rescheduledateFrom).format('YYYY-MM-DD') + " " + this.hourToReschedule.split(' ')[0] + ":" + this.minuteToReschedule + " " + this.hourToReschedule.split(' ')[1];
    this.rescheduleclass.start_datetime = moment(this.rescheduledateFrom).format('YYYY-MM-DD') + " " + this.hourFromReschedule.split(' ')[0] + ":" + this.minuteFromReschedule + " " + this.hourToReschedule.split(' ')[1]

    const url = "/api/v1/meeting_manager/reschedule/" + sessionStorage.getItem('institution_id') + "/" + this.rescheduleclass.session_id;
    this._http.postData(url, this.rescheduleclass).subscribe(
      (data: any) => {
        this.appC.popToast({ type: "success", body: "Class rescheduled successfully" })
        this.rescheduleClass = false;
        this.openClassPopup = false;
        this.rescheduleclass = {
          end_datetime: "",
          institution_id: sessionStorage.getItem('institution_id'),
          session_id: "",
          start_datetime: ""
        }
        this.rescheduledateFrom = moment().format('YYYY-MM-DD');
        this.minuteFromReschedule = "";
        this.minuteToReschedule = "";
        this.hourFromReschedule = "";
        this.hourToReschedule = "";
      },
      (error: any) => {
        this.errorMessage(error);
      }
    )
  }

  // developed by Nalini
  // To check whether to download vimeo or vdocipher file
  downloadFileCheck(object) {
    console.log(object);
    if (object.vimeo_video_url == '' || object.vimeo_video_url == null) {
      this.downloadFile(object);
    } else {
      this.getVimeoDownloadData(object);
    }
  }

  downloadFile(object) {
    const url = `/api/v1/meeting_manager/recording/download/${sessionStorage.getItem('institution_id')}/${object.download_id}` + '?type=0';
    this.auth.showLoader();
    this._http.downloadItem(url, 'video/mp4').subscribe(
      (response: any) => {
        this.auth.hideLoader();
        if (response) {
          const blob = new Blob([response], { type: 'video/mp4' });
          this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
          if (this.fileUrl != null) {
            this.fileName = object.session_name.concat('.mp4');
            setTimeout(() => {
              var hiddenDownload = <HTMLAnchorElement>document.getElementById('downloadFileClick');
              hiddenDownload.download = this.fileName;
              hiddenDownload.click();
            }, 500);
          }
        }
      },
      err => {
        this.auth.hideLoader();
        if (err.status == 400) {
          this.msgService.showErrorMessage('error', '', 'You are out of storage! Please contact our support');
        }
        else if (err.status == 422) {
          this.msgService.showErrorMessage('error', '', 'Dear Admin, You have insufficient storage limit to store your current recording hence we could not save your video. To purchase new storage limit please contact our support team 9971839153.');
        }
        else {
          this.msgService.showErrorMessage('error', '', 'There is some problem processing your request.Please contact support@proctur.com');
        }
        console.log(err);
      }
    )
  }

  // Developed by Nalini
  // To get vimeo download links
  getVimeoDownloadData(obj) {
    this.auth.showLoader();
    this.productService.getMethod('vimeo/download-links/' + obj.vimeo_video_id, null).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.vimeoDownloadLinks = res.result;
        if (this.vimeoDownloadLinks && this.vimeoDownloadLinks.length) {
          this.viewDownloadPopup = false;
          $('#downloadOption').modal('show');
        } else {
          this.msgService.showErrorMessage('error', '', 'No download links found')
        }
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
      }
    )
  }

  getVdoLink(object) {
    const url = `/api/v1/meeting_manager/recording/download/${sessionStorage.getItem('institution_id')}/${object.download_id}` + '?type=1 '
    this.auth.showLoader();
    this.viewDownloadPopup = false;
    this._http.getData(url).subscribe(
      (response: any) => {
        this.auth.hideLoader();
        console.log(response);
        if (response && response.video_url) {
          this.isVDOCipherVDO = false;
          this.showVideo = false;
          this.JsonVars.video_url = atob(response.video_url);
          console.log(this.JsonVars.video_url);
        }
      },
      err => {
        this.auth.hideLoader();
        if (err.status == 400) {
          this.msgService.showErrorMessage('error', '', 'You are out of storage! Please contact our support');
        } else {
          this.msgService.showErrorMessage('error', '', 'There is some problem processing your request.Please contact support@proctur.com');
        }
        console.log(err);
      }
    )
  }

  // Live class integration with VDOCipher
  getVdocipherVideoOtp(obj) {
    sessionStorage.setItem("VideoIdWatchHistor", obj.video_id);
    this.viewDownloadPopup = false;
    let url = "/api/v1/instFileSystem/videoOTP";
    let data = {
      "videoID": obj.video_id,
      "institute_id": sessionStorage.getItem("institute_id"),
      "user_id": sessionStorage.getItem("userid")
    }
    this.tempVideoData = obj;
    this.auth.showLoader();
    this.isVDOCipherVDO = true;
    this._http.postData(url, data).subscribe((response) => {
      this.auth.hideLoader();

      if (response == null) {
        let obj = {
          "otp": "20160313versASE323ND0ylfz5VIJXZEVtOIgZO8guUTY5fTa92lZgixRcokG2xm",
          "playbackInfo": "eyJ2aWRlb0lkIjoiNGQ1YjRiMzA5YjQ5NGUzYTgxOGU1ZDE3NDZiNzU2ODAifQ=="
        }
        this.ShowVideo(obj.otp, obj.playbackInfo);
      } else {
        let obj = {
          "otp": response['otp'],
          "playbackInfo": response['playbackInfo']
        }
        this.ShowVideo(obj.otp, obj.playbackInfo);
      }
    },
      (err) => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage('error', '', err.error.message);
      });
  }

  playVimeoVideo(obj) {
    this.viewDownloadPopup = false;
    this.videoplayer = true;
    this.currentProjectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(obj.vimeo_video_url);
  }
  watchHistory() {
    console.log("totalPlayed", this.videoObject.totalPlayed);

    let url = '/api/v1/instFileSystem/allocateWatchHistory';
    let obj = {
      "video_id": sessionStorage.getItem("VideoIdWatchHistor"),
      "watch_duration": this.videoObject.totalPlayed
    }
    this._http.postData(url, obj).subscribe((response) => {
      this.auth.hideLoader();
      console.log(response);

    },
      (err) => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage('error', '', err.error.message);
      });

  }
  ShowVideo(otpString, playbackInfoString) {

    this.isVDOCipherVDO = true;
    this.showVideo = false;
    this.isVDOCipherVDO = true;
    var video = new window.VdoPlayer({
      otp: otpString,
      playbackInfo: playbackInfoString,
      theme: "9ae8bbe8dd964ddc9bdb932cca1cb59a",// please never changes
      container: document.querySelector("#embedBox"),
    });
    this.videoObject = video;
    // video.addEventListener(`mpmlLoad`, (data) => {
    //   video.play();
    // });
    var container = document.querySelector('.embedBox');

  }

  stopVideo() {
    this.showVideo = true;
    this.JsonVars.video_url = null;
    if (this.videoObject) {
      this.videoObject.pause(); // removes video
    }
    this.watchHistory();
  }

  viewdownload_links(obj) {
    this.viewDownloadPopup = true;
    this.download_links = obj;
  }

  // upload recording // By Swapnil

  identify(index, item) {
    return item.session_id
  }
  deleteRecording(session_id, isAbort) {
    const url = `/api/v1/meeting_manager/deleteRecording?session_id=${session_id}`;
    this.auth.showLoader();
    this._http.deleteDataById(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        if (res.statusCode == 200) {
          if (!isAbort) {
            this.msgService.showErrorMessage('success', '', res.result);
            this.viewDownloadPopup = false;
            this.getClassesList();
          }
        }
        else {
          this.msgService.showErrorMessage('error', '', res.message);
        }
      },
      (err) => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage('error', '', err.error.message);
      }
    )
  }

  upload(seesion_id, classType) {
    this.uploadSessionId = seesion_id;
    this.uploadClassType = classType;
    this.fileUploadInput = '';
    this.viewDownloadPopup = false;
  }

  fillFiles(files) {
    setTimeout(() => {
      let manualUploadedFileList = (<HTMLInputElement>document.getElementById('uploadFileControl')).files;
      let filesArr = Array.from(manualUploadedFileList);
      this.selectedFiles = filesArr;
      this.customFileArr = this.generateFilePreview(this.selectedFiles);
    }, 500)
  }


  generateFilePreview(fileList: any[]): fileObj[] {
    let size = fileList.length;
    let tempArr: fileObj[] = [];
    this.tempArr = tempArr
    let file;
    if (size > 0) {
      for (let i = 0; i < size; i++) {
        file = fileList[i];
        tempArr.push(new fileObj(this.getName(file.name), this.getType(file.name), file.size));
      }
    }
    return tempArr;
  }

  getName(file: string): string {
    return file.split(".")[0];
  }

  getType(file: string): string {
    let str = file.substring(file.lastIndexOf(".") + 1, file.length);
    return str;
  }

  uploadHandler() {

    if (this.selectedFiles.length == 0) {
      this.appC.popToast({ type: "error", body: "No file selected" })
      return
    }

    let institute_id = sessionStorage.getItem("institute_id");
    let formData = new FormData();

    if (this.isVimeo == 'VDOCipher') {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append("files", this.selectedFiles[i]);
      }
    }

    if (this.isVimeo == 'Vimeo' && this.vimeo_title == '') {
      this.appC.popToast({ type: "error", body: "Please enter title" });
      return;
    }

    let fileJson = {
      "video_size": this.selectedFiles[0].size,
      "video_title": this.vimeo_title,
      "video_upload_on": this.isVimeo
    }
    formData.append('fileJson', JSON.stringify(fileJson));

    if (this.isVimeo == 'Vimeo') {
      this.auth.showLoader();
    }
    let isZoom = true;
    if (this.uploadClassType != 'Zoom') {
      isZoom = false;
    }
    let base = this.auth.getBaseUrl();
    let urlPostXlsDocument = base + "/api/v1/meeting_manager/uploadRecording?isZoomLiveClass=" + isZoom;
    let newxhr = new XMLHttpRequest();

    newxhr.open("POST", urlPostXlsDocument, true);
    newxhr.setRequestHeader("institute_id", institute_id);
    newxhr.setRequestHeader("session_id", this.uploadSessionId);
    newxhr.setRequestHeader("Authorization", this.Authorization);
    newxhr.setRequestHeader("enctype", "multipart/form-data;");
    newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    newxhr.setRequestHeader("Accept", "application/json, text/javascript");

    if (this.isVimeo == 'VDOCipher') {
      this.progressBar = true;
      newxhr.upload.addEventListener('progress', (e: ProgressEvent) => {
        if (e.lengthComputable) {
          this.progress = Math.round((e.loaded * 100) / e.total);
          document.getElementById('progress-width').style.width = this.progress + '%';
        }
      }, false);
    }

    newxhr.onreadystatechange = () => {
      if (newxhr.readyState == 4) {

        if (newxhr.status >= 200 && newxhr.status < 300) {
          this.auth.hideLoader();
          let data = JSON.parse((newxhr.response));
          if (this.isVimeo == 'VDOCipher') {
            if (data.statusCode >= 200 && data.statusCode < 300) {
              this.msgService.showErrorMessage('success', '', 'File(s) uploaded successfully');
              this.fileUploadInput = '';
              this.progress = 0;
              this.progressBar = false;
              $('#uploadRec').modal('hide');
              this.getClassesList();
            }
            else {
              this.msgService.showErrorMessage('error', '', data.message);
            }
          } else {
            if (data.result.upload_link != '' && data.result.upload_link != null) {
              this.live_class_session_recording_id = data.result.live_class_session_recording_id;
              this.patchRequest(data.result);
            } else {
              this.msgService.showErrorMessage('error', '', data.result.message);              
            }
          }
        }
        else {
          this.progress = 0;
          this.progressBar = false;
          this.auth.hideLoader();
          let data = JSON.parse((newxhr.response))
          this.msgService.showErrorMessage('error', '', data.message);
        }
      }
    }
    newxhr.send(formData);

  }

  patchRequest(obj) {
    // this.auth.showLoader();
    let base = this.auth.getBaseUrl();
    let urlPostXlsDocument = obj.upload_link;
    this.fileUploadXHR = new XMLHttpRequest();

    this.fileUploadXHR.open("PATCH", urlPostXlsDocument, true);
    this.fileUploadXHR.setRequestHeader("Tus-Resumable", '1.0.0');
    this.fileUploadXHR.setRequestHeader("Upload-Offset", '0');
    this.fileUploadXHR.setRequestHeader("Content-Type", "application/offset+octet-stream");
    this.fileUploadXHR.setRequestHeader("Accept", "application/vnd.vimeo.*+json;version=3.4");

    this.progressBar = true;
    this.isUploding = true;
    this.fileUploadXHR.upload.addEventListener('progress', (e: ProgressEvent) => {
      if (e.lengthComputable) {
        this.progress = Math.round((e.loaded * 100) / e.total);
        document.getElementById('progress-width').style.width = this.progress + '%';
      }
    }, false);

    this.fileUploadXHR.onreadystatechange = () => {
      if (this.fileUploadXHR.readyState == 4) {

        if (this.fileUploadXHR.status >= 200 && this.fileUploadXHR.status < 300) {
          this.auth.hideLoader();
          this.updateVimeoStatus(obj.videoId);
          if (!(this.proctur_live_integration_with_vimeo == '1' && this.proctur_live_integration_with_vdoCipher == '1')) {
            if (this.proctur_live_integration_with_vimeo == '1') {
              this.isVimeo = 'Vimeo';
            } else if (this.proctur_live_integration_with_vimeo == '1') {
              this.isVimeo = 'VDOCipher';
            }
          }
          this.vimeo_title = '';
          this.isUploding = false;
        }
      }
      else {
        this.progress = 0;
        this.progressBar = false;
        this.isUploding = false;
        this.auth.hideLoader();
      }
    }
    this.fileUploadXHR.send(this.selectedFiles[0]);
  }

  updateVimeoStatus(videoId) {
    let obj = {
      "videoID": videoId,
      "institute_id": this.institution_id,
      "video_status": "Queued",
      "is_live_class_recording": "Y"
    }
    this._http.postData('/api/v1/instFileSystem/updateVideoStatus', obj).subscribe(
      (res: any) => {
        this.msgService.showErrorMessage('success', '', 'File(s) uploaded successfully');
        $('#uploadRec').modal('hide');
        this.fileUploadXHR = '';
        this.getClassesList();
      },
      err => {
        console.log(err);
      }
    )
  }

  // Developed by Nalini
  // To cancel vimeo file 
  closeUploadModal() {
    if (this.isUploding) {
      if (confirm('Are you sure, you want to cancel file upload')) {
        $('#uploadRec').modal('hide');
        this.fileUploadXHR.abort();
        this.deleteRecording(this.live_class_session_recording_id, true);
        this.progress = 0;
        this.fileUploadXHR = '';
        this.progressBar = false;
        if (!(this.proctur_live_integration_with_vimeo == '1' && this.proctur_live_integration_with_vdoCipher == '1')) {
          if (this.proctur_live_integration_with_vimeo == '1') {
            this.isVimeo = 'Vimeo';
          } else if (this.proctur_live_integration_with_vimeo == '1') {
            this.isVimeo = 'VDOCipher';
          }
        }
        this.vimeo_title = '';
        this.isUploding = false;
      }
    } else {
      this.progress = 0;
      if (!(this.proctur_live_integration_with_vimeo == '1' && this.proctur_live_integration_with_vdoCipher == '1')) {
        if (this.proctur_live_integration_with_vimeo == '1') {
          this.isVimeo = 'Vimeo';
        } else if (this.proctur_live_integration_with_vimeo == '1') {
          this.isVimeo = 'VDOCipher';
        }
      }
      this.vimeo_title = '';
      this.progressBar = false;
      this.isUploding = false;
      $('#uploadRec').modal('hide');
    }
  }

  viewAttandance(obj) {
    sessionStorage.setItem('live_meeting_with', obj.live_meeting_with);
    sessionStorage.setItem('from_live_date', this.liveClassSearchFilter.from_date);
    sessionStorage.setItem('to_live_date', this.liveClassSearchFilter.to_date);
    this.router.navigate(['/view/live-classes/report/' + obj.session_id]);
  }

  changeSelectedSize(obj) {
    this.selectedDownloadSize = obj;
  }

  downloadVimeoVdo() {
    window.open(this.selectedDownloadSize.link, "_blank");
    $('#downloadOption').modal('hide');
  }

  RefreshSession(obj) {
    console.log(obj);
    this.auth.showLoader();
    this._http.getData('/api/v1/meeting_manager/refresh/' + sessionStorage.getItem('institute_id') + '/' + obj.session_id).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.getClassesList();
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
      }
    )
  }

  viewClass(obj){
    this.viewClassData = obj;
    this.viewClassData.master_course = '-';
    this.viewClassData.product_names = '-';
    if(this.viewClassData.course_list && this.viewClassData.course_list.length) {
      this.viewClassData.master_course = [];
      if(!this.schoolModel) {
      for(let i=0;i<this.viewClassData.course_list.length;i++) {
        if(i == 0) {
          this.viewClassData.master_course.push(this.viewClassData.course_list[0].master_course_name);
        } else{
            if(!this.viewClassData.master_course.includes(this.viewClassData.course_list[i].master_course_name)) {
              this.viewClassData.master_course.push(this.viewClassData.course_list[i].master_course_name);
            }
        }
      }
      this.viewClassData.master_course = this.viewClassData.master_course.join(',');
    }
      if(this.schoolModel) {
        this.viewClassData.master_course = this.viewClassData.course_list[0].standard_name;
        this.viewClassData.subject = Array.prototype.map.call(this.viewClassData.course_list, s => (Array.prototype.map.call(s.subject_list, a => a.subject_name)).toString());
        this.viewClassData.subject = this.viewClassData.subject.join(',')
      }
    }

    if(this.viewClassData.product_list && this.viewClassData.product_list.length) {
        this.viewClassData.product_names = Array.prototype.map.call(this.viewClassData.product_list, s => s.product_name).toString();
    }
    this.showViewClassPopup = true;
  }


  @HostListener('document:keydown', ['$event'])
  onPopState(event) {
    if (event.keyCode == 123 || (event.ctrlKey && event.shiftKey && event.keyCode == 73)) {
      event.preventDefault();
    }
  }
  @HostListener("document:contextmenu", ['$event'])
  onMouseOver($event) {
    $event.preventDefault();
    return false;
  }

  toggleActionMenu(event) {
    console.log(event);
    // event.target.nextElementSibling.classList.toggle('d-flex');
  }

}