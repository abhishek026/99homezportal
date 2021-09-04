import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckableSettings, TreeItemLookup } from '@progress/kendo-angular-treeview';
import * as moment from 'moment';
import { of } from 'rxjs';
import { AppComponent } from '../../../app.component';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { TopicListingService } from '../../../services/course-services/topic-listing.service';
import { WidgetService } from '../../../services/widget.service';



@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class MarkAttendanceComponent implements OnInit, OnDestroy {

  permissionArray = sessionStorage.getItem('permissions');

  settingInfo: any = [];
  courseLevelExam: any[] = [];
  courseLevelStudentAtt: any = [];
  public studentAttList: any = [];
  public teacherListArr: any[] = [];
  studentList: any = [];
  topicsName: any[] = [];
  public topicsData: any = [];
  public checkedKeys: any[] = [];
  selectedSubId: any;
  batch_info: any;
  absentStudentNames: any;
  homeWorkNotDoneStudentNames: any;
  public classMarkedForAction: any;
  public teacher_id: number = -1;
  public home_work_notifn: number = 0;
  public topics_covered_notifn: number = 0;
  public attendanceNote: string = "";
  public homework: string = "";
  absentCount: number = 0;
  presentCount: number = 0;
  leaveCount: number = 0;
  attendanceCount: number = 50;
  homeworkCount: number = 50;

  // Topic listing variables
  topicBox: boolean = true;
  selectAllTopics: boolean = false;
  public AllPresent: boolean = true;
  absentPopUp: boolean = false;
  notificationPopUp: boolean = false;
  public isProfessional: boolean = false;
  topicUpdated: boolean = false;
  presentSMSNotify: boolean = false;
  notifyAbsentStudent: boolean = true;
  subject_id: '';
  public children;
  public hasChildren;
  public isExpanded;


  showTopicsModal: boolean = false;
  isSubjectView: boolean = false;
  notify_remark: boolean = true;
  topicsList : any = [];
  totalTopicsList: any = [];
  schoolModel:boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private appC: AppComponent,
    private widgetService: WidgetService,
    private auth: AuthenticatorService,
    private route: ActivatedRoute,
    private topicService: TopicListingService,
    private cd: ChangeDetectorRef

  ) { }

  public get checkableSettings(): CheckableSettings {
    return {
      checkChildren: true,
      checkParents: true,
      enabled: true,
      mode: 'multiple',
      checkOnClick: false
    };
  }

  ngOnInit() {
    if(sessionStorage.getItem('isSubjectView') == 'true') {
    this.isSubjectView = true;
    }
    this.schoolModel = this.auth.schoolModel.value;
    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.isProfessional = true;
        } else {
          this.isProfessional = false;
        }
      }
    )
    this.fetchWidgetPrefill();
    this.getAttendanceDetails();
  }

  ngOnDestroy() {
    sessionStorage.removeItem('fromClassAttendace');
    sessionStorage.removeItem('classAttendance');
    sessionStorage.removeItem('exam_marks');
  }

  fetchWidgetPrefill() {
    this.widgetService.getSettings().subscribe(
      res => {
        this.settingInfo = res;
      },
      err => {

      }
    )
    this.widgetService.getAllteachers().subscribe(
      res => {
        this.teacherListArr = res;
      },
      err => {

      }
    )
  }

  topicListing() {
    if (this.subject_id == '' || this.subject_id == null || this.subject_id == '-1' || this.subject_id == undefined) {
      let obj = {
        type: 'error',
        title: '',
        body: 'Please select subject'
      }
      this.appC.popToast(obj);
      return;
    }
    else {
      if (!this.topicUpdated) {
        this.checkedKeys = [];
        if (this.batch_info.topics_covered != null && this.batch_info.topics_covered != '' && this.batch_info.topics_covered.split("|")) {
          this.checkedKeys = this.batch_info.topics_covered.split("|").map(Number);
        }
      }
      this.auth.showLoader();
      this.topicService.getAllTopicsSubTopics(this.subject_id).subscribe(
        res => {
          let temp: any = res;
          this.auth.hideLoader();
          if (temp != null && temp.length != 0) {
            this.topicBox = false;
            this.topicsData = res;
            this.children = (dataItem: any) => of(dataItem.subTopic);
            this.hasChildren = (item: any) => item.subTopic && item.subTopic.length > 0;
          }
          else {
            let obj = {
              type: 'info',
              title: '',
              body: 'No topic(s) available to link'
            }
            this.appC.popToast(obj);
          }
        },
        err => {
          this.auth.hideLoader();
          let obj = {
            type: 'error',
            title: '',
            body: err.error.message
          }
          this.appC.popToast(obj);
        }
      )
    }
  }

  // update topics in batch model
  showTopicsListingOfBatch(){
    if(this.subject_id == null || this.subject_id == undefined || this.subject_id == '' || this.subject_id == -1){
      let msg = {
        type: 'error',
        title: 'Error',
        body: 'Please select subject'
      }
      this.appC.popToast(msg);
  }
  else {
    if(!this.topicUpdated){
      this.topicService.getAllTopicsSubTopics(this.subject_id).subscribe(data =>{
        let responseDate : any;
        responseDate = data;
        this.topicsList = [];
        this.totalTopicsList = [];
        if(responseDate.length && responseDate != null){
          this.showTopicsModal = true;
          this.topicsList = responseDate;
          var selectedTopicIdsArr = (this.batch_info.topics_covered != null && this.batch_info.topics_covered != '') ? this.batch_info.topics_covered.split('|') : '';
          this.topicsList.forEach((el,index)=>{
            this.totalTopicsList.push(el);
            if(selectedTopicIdsArr != '' && selectedTopicIdsArr.indexOf((el.topicId).toString()) > -1){
              el.checked= true;
            }
            if(el.subTopic.length){
              this.fetchAllTopics(el.subTopic,selectedTopicIdsArr);
            }
          })
          /* if(this.batch_info.topics_covered != null && this.batch_info.topics_covered != ''){
            var selectedTopicIdsArr = this.batch_info.topics_covered.split('|');
            selectedTopicIdsArr.forEach((id,index) =>{
              
            })
          } */
         // console.log('total topic list:',this.topicsList)
         // console.log('topics covered',this.batch_info.topics_covered);
        }
        else {
          let obj = {
            type: 'info',
            title: '',
            body: 'No topics available to link'
          }
          this.appC.popToast(obj);
        }
      })
    }
  }
}

fetchAllTopics(topic,selectedTopicIdsArr){
  topic.forEach((ele,ind)=>{
    this.totalTopicsList.push(ele);
    if(selectedTopicIdsArr != '' && selectedTopicIdsArr.indexOf((ele.topicId).toString()) > -1){
      ele.checked= true;
    }
    if(ele.subTopic.length){
      this.fetchAllTopics(ele.subTopic,selectedTopicIdsArr);
    }
  })
}

onArrowToggle(topic){
  topic.isExpand = !(topic.isExpand);
}
closeTopicModal(){
  this.showTopicsModal = false;
}
  selectTopics(topic){
    topic.checked = !(topic.checked);
  if(topic.subTopic.length){
    this.checkAllSubTopics(topic.subTopic,topic.checked);
   }
   if(!topic.checked){
     if(topic.parentTopicId != 0){
       this.uncheckParent(topic)
     }
   }
   this.checkParent(topic)
}
  checkAllSubTopics(topic,checkedKey){
      topic.forEach((item,index)=>{
        if(checkedKey){
          item.checked = true;
        }
        else {
          item.checked = false;
        }
        if(item.subTopic.length){
          this.checkAllSubTopics(item.subTopic, checkedKey)
        }
      })
  }
  checkParent(topic){
    var checkAll: boolean = true;
    if(this.totalTopicsList.find(el => el.topicId == topic.topicId) != undefined){
      var parentTopic = this.totalTopicsList.find(ele => ele.topicId == topic.parentTopicId);
      if(parentTopic != undefined){
      if(parentTopic.subTopic.length){
        parentTopic.subTopic.forEach(subTpc =>{
          if(!subTpc.checked){
            checkAll = false;
          }
        });
        if(checkAll){
          parentTopic.checked = true;
          if(parentTopic.parentTopicId != 0){
            this.checkParent(parentTopic)
          }
        }
      }
    }
    }
  }
  uncheckParent(topic){
  var getParentId = this.totalTopicsList.find(el => el.topicId == topic.parentTopicId);
  if(getParentId != undefined){
    getParentId.checked = false;
    if(getParentId.parentTopicId !=0){
      this.uncheckParent(getParentId)
    }
  }
  }
  updateBatchTopics(){
    this.auth.showLoader();
    var checkedTopics = this.totalTopicsList.filter(el => el.checked == true);
    if(checkedTopics != undefined){
     var  getTopicIds = checkedTopics.map(obj =>{
      return obj.topicId
      });
      this.checkedKeys = getTopicIds;
      getTopicIds = getTopicIds.join('|');
      this.batch_info.topics_covered = getTopicIds;     
        let obj = {
          type: 'success',
          title: '',
          body: 'Topics updated successfully'
        }
        this.appC.popToast(obj);
        this.showTopicsModal = false;
        this.auth.hideLoader();
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
        if (arrayIndex>-1) {
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

  saveTopic() {
    let temp = this.checkedKeys;
    this.topicsName = [];
    let join = temp.join("|");
    let tempTopicData = this.topicsData;
    this.checkedKeys.forEach(
      ele => {
        this.findNameInJSON(this.topicsData, ele);
      }
    )
    for (var i = 0; i < this.topicsName.length; i++) {
      if (this.topicsName[i] == undefined) {
        this.topicsName.splice(i, 1);
      }
    }
    this.topicUpdated = true;
    this.topicBox = true;
  }

  findNameInJSON(arr, nameVal) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (item.topicId.toString() == nameVal.toString()) {
        this.topicsName.push(item.topicName)
      }
      if (item.subTopic.length > 0) {
        this.findNameInJSON(item.subTopic, nameVal);
      }
    }
  }

  closeAlert() {
    this.topicBox = true;
  }

  getAttendanceDetails() {

    let encryptedData = sessionStorage.getItem('batch_info');
    let data = atob(encryptedData)
    this.batch_info = JSON.parse(data);
    this.subject_id = this.batch_info.subject_id;
    this.batch_info.subjectName = '';
    this.checkedKeys = [];
    if (this.batch_info && this.batch_info.batch_name) {
      let subjectArray = this.batch_info.batch_name.split("-");
      this.batch_info.subjectName = subjectArray ? subjectArray[subjectArray.length - 1] : '';
    }
    if (this.batch_info.topics_covered != null && this.batch_info.topics_covered != '' && this.batch_info.topics_covered.split("|")) {
      this.checkedKeys = this.batch_info.topics_covered.split("|").map(Number);
    }

    // FOR SUBJECT WISE
    if (this.batch_info.forSubjectWise && !this.batch_info.isExam) {
      this.auth.showLoader();
      if (!this.isProfessional) {
        let obj = {
          batch_id: this.batch_info.batch_id,
          type: 2,
          attendanceSchdId: this.batch_info.schd_id
        }
        this.widgetService.getAttendance(obj).subscribe(
          res => {
            // this.subject_id = res.
            console.log(res);
            if(res && res.length) {
            res.forEach(e => {
              e.attendance_note = "";
              e.date = "";
              e.home_work_status = "Y";
              e.homework_assigned = "";
              e.isStatusModified = "N";
              e.is_home_work_status_changed = "N";
              e.isStatusModified = "N";
              if (e.dateLi[0].status == "L") {
                e.dateLi[0].serverStatus = "L";
              } else {
                e.dateLi[0].serverStatus = "";
              }
            });
            this.studentAttList = res;
            this.home_work_notifn = res[0].home_work_notifn;
            this.topics_covered_notifn = res[0].topics_covered_notifn;
            this.teacher_id = res[0].dateLi[0].teacher_id;
            this.auth.hideLoader();
            this.attendanceNote = res[0].dateLi[0].attendance_note;
            this.homework = res[0].dateLi[0].homework_assigned;
          }
            this.getCountOfAbsentPresentLeave(res);
          },
          err => {
            let msg = (this.schoolModel) ? 'No student(s) found in the class.' : 'No student(s) in the batch';
            this.auth.hideLoader();
            let obj = {
              type: 'info',
              title: '',
              body: msg
            }
            this.appC.popToast(obj);
          }
        )
      }
      else {
        let obj = {
          batch_id: this.batch_info.batch_id,
          type: 2,
          attendanceSchdId: this.batch_info.schd_id
        }
        this.widgetService.getAttendance(obj).subscribe(
          res => {
            res.forEach(e => {
              e.attendance_note = "";
              e.date = "";
              e.home_work_status = "Y";
              e.homework_assigned = "";
              e.isStatusModified = "N";
              e.is_home_work_status_changed = "N";
              e.isStatusModified = "N";
              if (e.dateLi[0].status == "L") {
                e.dateLi[0].serverStatus = "L";
              } else {
                e.dateLi[0].serverStatus = "";
              }
              e.dateLi[0].remark = e.dateLi[0].remark;
            })
            this.studentAttList = res;
            this.home_work_notifn = res[0].home_work_notifn;
            this.topics_covered_notifn = res[0].topics_covered_notifn;
            this.teacher_id = res[0].dateLi[0].teacher_id;;
            this.auth.hideLoader();
            this.attendanceNote = res[0].dateLi[0].attendance_note;
            this.homework = res[0].dateLi[0].homework_assigned;
            this.getCountOfAbsentPresentLeave(res);
          },
          err => {
            this.auth.hideLoader();
            let msg = {
              type: 'error',
              title: '',
              body: err.error.message
            }
            this.appC.popToast(msg);
          }
        )
      }
    }
    //   FOR COURSE WISE
    if (this.batch_info.forCourseWise && !this.batch_info.isExam) {
      let obj = {
        course_id: this.batch_info.course_id,
        startdate: this.batch_info.startdate
      }

      if (this.batch_info.course_id != null && this.batch_info.course_id != undefined) {
        this.widgetService.fetchCourseAttendance(obj).subscribe(
          (res: any) => {
            // this.subject_id = res.
            res.forEach(e => {
              if (e.dateLi[0].status == "L") {
                e.dateLi[0].serverStatus = "L";
              } else {
                e.dateLi[0].serverStatus = "";
              }
            })
            this.courseLevelStudentAtt = res;
            this.studentAttList = res;
            this.getTotalCountForCourse(res);
          },
          err => {
            let msg = {
              type: 'error',
              title: '',
              body: err.error.message
            }
            this.appC.popToast(msg);
          }
        );
      }
    }
    // FOR EXAM WISE
    if (this.batch_info.forCourseWise && this.batch_info.isExam) {
      // this.generateCourseLevelExam();
      if (this.isProfessional) {
        this.getExamStudentListForBatchModel(this.batch_info.schd_id, this.batch_info.batch_id);
      }
      else {
        this.getExamStudentList(this.batch_info.course_exam_schedule_id);
      }

    }


  }

  generateCourseLevelExam() {
    let obj = {
      start_date: moment(this.batch_info.schedDate).format('YYYY-MM-DD'),
      end_date: moment(this.batch_info.schedDate).format('YYYY-MM-DD')
    }
    this.widgetService.getCourseExamFromServer(obj).subscribe(
      (res: any) => {
        let dataArray: any = [];
        res.map(ele => {
          if (ele.batchExamSchdList != null) {
            if (ele.batchExamSchdList.length > 0) {
              ele['isExam'] = true;
              dataArray.push(ele);
            }
          }
        })

        this.courseLevelExam = dataArray;
      },
      err => {
        console.log(err);
      }
    )
  }

  getExamStudentList(id) {
    this.auth.showLoader();
    this.widgetService.getExamStudentsList(id).subscribe(
      res => {
        this.auth.hideLoader();
        this.studentAttList = this.addKeys(res, false);
        this.getCountOfAbsentPresentLeaveForExam(res);
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
        let msg = {
          type: 'error',
          title: '',
          body: err.error.message
        }
        this.appC.popToast(msg);
      }
    )
  }

  getExamStudentListForBatchModel(schdId, batch_id) {
    this.auth.showLoader();
    let obj = {
      attendanceSchdId: schdId,
      batch_id: batch_id
    }
    this.widgetService.fetchStudentList(obj).subscribe(
      res => {
        this.auth.hideLoader();
        this.studentAttList = res;
        this.getCountOfAbsentPresentLeave(res);
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
        let msg = {
          type: 'error',
          title: '',
          body: err.error.message
        }
        this.appC.popToast(msg);
      }
    )
  }

  getCountOfAbsentPresentLeaveForExam(data) {
    this.absentCount = 0;
    this.presentCount = 0;
    this.leaveCount = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].attendance == "P") {
        this.presentCount++;
      } else if (data[i].attendance == "A") {
        this.absentCount++;
      } else {
        this.leaveCount++;
      }
    }
    if (this.studentAttList.length == this.presentCount) {
      this.AllPresent = true;
    } else {
      this.AllPresent = false;
    }
  }

  addKeys(data, val) {
    data.forEach(
      element => {
        element.assigned = val;
      }
    )
    return data;
  }



  getCountOfAbsentPresentLeave(data) {
    this.absentCount = 0;
    this.presentCount = 0;
    this.leaveCount = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].dateLi[0].status == "P") {
        this.presentCount++;
      } else if (data[i].dateLi[0].status == "A") {
        this.absentCount++;
      } else {
        this.leaveCount++;
      }
    }
    if (this.studentAttList.length == this.presentCount) {
      this.AllPresent = true;
    } else {
      this.AllPresent = false;
    }
  }

  backToHome() {
    sessionStorage.setItem('batch_info', '');
    let coursePlannerStatus = sessionStorage.getItem('isFromCoursePlanner');
    let fromClassAttendace = sessionStorage.getItem('fromClassAttendace');
    if(coursePlannerStatus=='true'){
      let url = this.isSubjectView ? '/view/course/coursePlanner/class' : '/view/course/coursePlanner/exam'
      this.router.navigate([url]);
    } else if(fromClassAttendace == 'true') {
      let url = (sessionStorage.getItem('classAttendance') == 'true') ? '/view/course/class-attendance' : '/view/course/exam-attendance';
      this.router.navigate([url]);
    }
    else{
      this.router.navigate(['/view/dashboard/admin']);
    }
  }

  closeAttendance() {
    this.attendanceNote = "";
    this.homework = "";
    this.studentAttList.forEach(e => {
      e.dateLi[0].serverStatus = "P";
      e.dateLi[0].home_work_status = "N";
    })
    this.home_work_notifn = null;
    this.topics_covered_notifn = null;
    this.teacher_id = null;
    this.AllPresent = true;
    this.getCountOfAbsentPresentLeave(this.studentAttList);
  }

  updateHomework(e) {
    if (e.target.checked) {
      this.home_work_notifn = 1;
      this.studentAttList.forEach(e => {
        e.home_work_notifn = this.home_work_notifn;
      });
    }
    else {
      this.home_work_notifn = 0;
      this.studentAttList.forEach(e => {
        e.home_work_notifn = this.home_work_notifn;
      });
    }
  }

  updateTopicCovered(e) {
    if (e.target.checked) {
      this.topics_covered_notifn = 1;
      this.studentAttList.forEach(e => {
        e.topics_covered_notifn = this.topics_covered_notifn;
      });
    }
    else {
      this.topics_covered_notifn = 0;
      this.studentAttList.forEach(e => {
        e.topics_covered_notifn = this.topics_covered_notifn;
      });
    }
  }

  markAllPresent(e) {
    if (e.target.checked) {
      this.studentAttList.forEach(e => {
        if (e.dateLi[0].status == "L" && e.dateLi[0].isStatusModified == "N") {
          //Do Nothing
        } else {

          e.dateLi[0].status = "P";
          e.dateLi[0].home_work_status = "Y"
          e.dateLi[0].isStatusModified = "Y"
        }
      });
    }
    else {
      this.studentAttList.forEach(e => {
        if (e.dateLi[0].status == "L" && e.dateLi[0].isStatusModified == "N") {
          //Do Nothing
        } else {

          e.dateLi[0].status = "A";
          e.dateLi[0].home_work_status = "N"
          e.dateLi[0].isStatusModified = "Y"
        }
      });
    }
    this.getCountOfAbsentPresentLeave(this.studentAttList);
  }

  getAbsentStudentNames(data) {
    let arr = [];
    if (this.batch_info.forCourseWise && this.batch_info.isExam) {
      if (this.isProfessional) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].dateLi[0].status == "A" && data[i].dateLi[0].isStatusModified == 'Y') {
            arr.push(data[i].student_name);
          }
        }
      }
      else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].attendance == "A" && data[i].isAttendanceUpdated == 'Y') {
            arr.push(data[i].student_name)
          }
        }
      }
    }
    else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].dateLi[0].status == "A" && data[i].dateLi[0].isStatusModified == 'Y') {
          arr.push(data[i].student_name);
        }
      }
    }

    return arr;
  }

  getHomeWorkNotDoneStudentNames(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if ((data[i].dateLi[0].home_work_status == "N" || data[i].dateLi[0].home_work_status == "NC") && data[i].dateLi[0].is_home_work_status_changed == 'Y' && data[i].dateLi[0].status == "P") {
        arr.push(data[i].student_name)
      }
    }
    return arr;
  }

  checkIfStudentIsAbsent(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].dateLi[0].status == "A") {
        return true;
      }
    }
    return false;
  }

  updateAttendance() {
    this.notificationPopUp = true;
    if (this.batch_info.forCourseWise && !this.batch_info.isExam) {
      this.updateCourseAttendance();
    }
    else if (this.batch_info.forCourseWise && this.batch_info.isExam) {
      this.markAttCourseExam();
    }
    else {
      if (this.homework != null && this.homework != "") {
        if (this.validateSpecialCharacters(this.homework)) {
          // Do nothing
        } else {
          let obj = {
            type: 'error',
            title: '',
            body: 'Special characters are not allowed in homework field'
          }
          this.appC.popToast(obj);
          return
        }
      }

      let check = this.checkIfStudentIsAbsent(this.studentAttList);
      if (this.settingInfo.sms_absent_notification != 0 && check) {
        let names = this.getAbsentStudentNames(this.studentAttList);
        let homework = this.getHomeWorkNotDoneStudentNames(this.studentAttList);
        if (names.length > 0 || homework.length > 0) {
          this.absentPopUp = true;
          this.homeWorkNotDoneStudentNames = homework;
          this.absentStudentNames = names;
        }
        else {
          if(!this.isSubjectView || this.batch_info.isExam) {
            this.notificationPopUp = false;
          this.markAttendanceServerCall("N");
          }
        }
      }
      else if (this.settingInfo.home_work_status_notification != 1) {
        let names = this.getAbsentStudentNames(this.studentAttList);
        let homework = this.getHomeWorkNotDoneStudentNames(this.studentAttList);
        if (homework.length > 0) {
          this.absentPopUp = true;
          this.absentStudentNames = names;
          this.homeWorkNotDoneStudentNames = homework;
        }
        else {
          if(!this.isSubjectView || this.batch_info.isExam) {
          this.notificationPopUp = false;
          this.markAttendanceServerCall("N");
          }
        }
      }
      else {
        if(!this.isSubjectView || this.batch_info.isExam) {
          this.notificationPopUp = false;
        this.markAttendanceServerCall("N");
        }
      }
    }

  }

  markAttendanceServerCall(sendSms) {

    this.auth.showLoader();
    let arr = [];
    this.studentAttList.forEach(e => {
      let arrDateLi = []; // as per v1 only single dateli array object will send --laxmi
      e.dateLi[0] = Object.assign({}, this.getCustomAttendanceObject(e.dateLi[0], e));
      arrDateLi.push(e.dateLi[0]);
      let tempKeys = this.checkedKeys;

      let presentStudentNotify = '';
      if (this.presentSMSNotify) {
        presentStudentNotify = 'Y';
      }
      else {
        presentStudentNotify = 'N';
      }

      let notify_remark = 'N';
      if(this.notify_remark) {
        notify_remark = 'Y';
      }

      if (this.batch_info.forSubjectWise) {
        let topic_covered_notification = 0;
        if (e.dateLi[0].status == 'A' && e.dateLi[0].isStatusModified == 'Y' && this.batch_info.topics_covered != null && this.batch_info.topics_covered != undefined && this.batch_info.topics_covered != '') {
          topic_covered_notification = 1;
        }
        let temp = {
          batch_id: this.batch_info.batch_id,
          dateLi: arrDateLi,
          home_work_notifn: e.home_work_notifn,
          isNotify: sendSms,
          is_home_work_enabled: e.is_home_work_enabled,
          student_id: e.student_id.toString(),
          topics_covered_notifn: topic_covered_notification,
          topics_covered: tempKeys.join("|"),
          isSMSNotificationToPresentStudents: presentStudentNotify,
          notify_remark: notify_remark,
        };
        arr.push(temp);
      }
      else if (this.batch_info.forCourseWise && !this.batch_info.isExam) {
        let temp = {
          batch_id: this.batch_info.batch_id,
          dateLi: arrDateLi,
          home_work_notifn: e.home_work_notifn,
          isNotify: sendSms,
          is_home_work_enabled: e.is_home_work_enabled,
          student_id: e.student_id.toString(),
          topics_covered_notifn: e.topics_covered_notifn,
          isSMSNotificationToPresentStudents: presentStudentNotify,
          notify_remark: notify_remark,
        };
        arr.push(temp);
      }
    });
    this.auth.showLoader();
    this.widgetService.updateAttendance(arr).subscribe(
      res => {
        this.auth.hideLoader();
        let msg = {
          type: 'success',
          title: '',
          body: res.message
        }
        this.appC.popToast(msg);
        this.backToHome();
        // this.closeAttendance();
        // this.fetchScheduleWidgetData();
      },
      err => {
        this.auth.hideLoader();
        let msg = {
          type: 'error',
          title: '',
          body: err.error.message
        }
        this.appC.popToast(msg);
      }
    )
  }

  getCustomAttendanceObject(d, detail): any {
    let obj: any = {
      attendance_note: this.attendanceNote,
      date: d.date,
      home_work_status: d.home_work_status,
      homework_assigned: this.homework,
      isStatusModified: d.isStatusModified,
      is_home_work_status_changed: d.is_home_work_status_changed,
      schId: d.schId,
      status: d.status,
      teacher_id: this.teacher_id,
      remark: d.remark
    }
    if (d.schId) {
      obj['schId'] = d.schId.toString();
    }
    if (this.teacher_id) {
      obj['teacher_id'] = this.teacher_id.toString();
    }
    return obj;
  }

  getCustomCourseLevelAttendanceObject(d, detail): any {
    let obj = {
      date: moment(new Date()).format("YYYY-MM-DD"),
      home_work_status: detail.home_work_status,
      isStatusModified: "Y",
      is_home_work_status_changed: d.is_home_work_status_changed,
      status: d.status,
      remark: d.remark
    }

    return obj;
  }

  updateCourseAttendance() {

    let isNotify = 'N';
    let checkAbsent = this.checkIfStudentIsAbsent(this.courseLevelStudentAtt);
    this.notificationPopUp = true;
    if (checkAbsent && this.settingInfo.sms_absent_notification != 0) {
      let names = this.getAbsentStudentNames(this.studentAttList);
      let homework = this.getHomeWorkNotDoneStudentNames(this.studentAttList);
      if (names.length > 0 || homework.length > 0) {
        this.absentPopUp = true;
        this.absentStudentNames = names;
        this.homeWorkNotDoneStudentNames = homework;
      }
      // else if(homework.length > 0){
      //   this.absentPopUp = true;
      //   this.absentStudentNames = names;
      //   this.homeWorkNotDoneStudentNames = homework;
      // }
      else {
        if(!this.isSubjectView || this.batch_info.isExam) {
          this.notificationPopUp = false;
        this.makeServerCallForUpdateMarks('N');
        }
      }
    }
    else if (this.settingInfo.home_work_status_notification != 1) {
      let homework = this.getHomeWorkNotDoneStudentNames(this.studentAttList);
      let names = this.getAbsentStudentNames(this.studentAttList);
      if (homework.length > 0) {
        this.absentPopUp = true;
        this.absentStudentNames = names;
        this.homeWorkNotDoneStudentNames = homework;
      }
      else {
        if(!this.isSubjectView || this.batch_info.isExam){
        this.notificationPopUp = false;
        this.makeServerCallForUpdateMarks('N');
        }
      }

    }
    else {
      if(!this.isSubjectView || this.batch_info.isExam){
      this.notificationPopUp = false;
      this.makeServerCallForUpdateMarks(isNotify);
      }
    }
  }

  makeServerCallForUpdateMarks(isNotify) {
    let arr = [];
    let presentStudentNotify = '';
    if (this.presentSMSNotify) {
      presentStudentNotify = 'Y';
    }
    else {
      presentStudentNotify = 'N';
    }

    let notify_remark = 'N';
    if(this.notify_remark) {
      notify_remark = 'Y';
    }
    this.courseLevelStudentAtt.forEach(element => {
      let temp = {
        "student_id": element.student_id,
        "course_id": this.batch_info.course_id,
        "dateLi": [{
          "date": moment(this.batch_info.startdate).format("YYYY-MM-DD"),
          "status": element.dateLi[0].status,
          "isStatusModified": element.dateLi[0].isStatusModified,
          "home_work_status": element.dateLi[0].home_work_status,
          "is_home_work_status_changed": element.dateLi[0].is_home_work_status_changed,
          "remark":element.dateLi[0].remark
        }],
        "isSMSNotificationToPresentStudents": presentStudentNotify,
        "isNotify": isNotify,
        "is_home_work_enabled": element.is_home_work_enabled,
        "notify_remark":notify_remark
      }
      arr.push(temp);
    });
    this.auth.showLoader();
    this.widgetService.updateCourseAttendance(arr).subscribe(
      res => {
        let msg = {
          type: 'success',
          title: '',
          body: res.message
        }
        this.auth.hideLoader();
        this.appC.popToast(msg);
        this.backToHome();
      },
      err => {
        let msg = {
          type: 'error',
          title: '',
          body: err.message
        }
        this.auth.hideLoader();
        this.appC.popToast(msg);
      }
    )
  }


  isHomeworkStatusChanged(i) {
    // this.studentAttList[i].dateLi[0].isStatusModified = "Y";
    this.studentAttList[i].dateLi[0].is_home_work_status_changed = "Y";
  }

  // showUploadCourseMarksSection() {
  //   this.examMerkMassUpload = true;
  // }

  markAttendaceBtnClick(event, rowData, index) {
    if (event.target.innerText == "L") {
      rowData.dateLi[0].status = "L";
      rowData.dateLi[0].home_work_status = "N";
    } else if (event.target.innerText == "A") {
      rowData.dateLi[0].status = "A";
      rowData.dateLi[0].home_work_status = "N";
    } else {
      rowData.dateLi[0].status = "P";
      rowData.dateLi[0].home_work_status = "Y";
    }
    rowData.dateLi[0].isStatusModified = "Y";
    this.getCountOfAbsentPresentLeave(this.studentAttList);
  }

  markAttendaceBtnClickCourse(event, rowData, index) {
    switch (event.target.innerText) {
      case "L": {
        this.courseLevelStudentAtt[index].dateLi[0].status = "L";
        this.courseLevelStudentAtt[index].dateLi[0].home_work_status = "N";
        this.courseLevelStudentAtt[index].dateLi[0].isStatusModified = "Y";
        break;
      }
      case "A": {
        this.courseLevelStudentAtt[index].dateLi[0].status = "A";
        this.courseLevelStudentAtt[index].dateLi[0].home_work_status = "N";
        this.courseLevelStudentAtt[index].dateLi[0].isStatusModified = "Y";
        break;
      }
      default: {
        this.courseLevelStudentAtt[index].dateLi[0].status = "P";
        this.courseLevelStudentAtt[index].dateLi[0].isStatusModified = "Y";
        this.courseLevelStudentAtt[index].dateLi[0].home_work_status = "Y";
      }
    }

    this.getTotalCountForCourse(this.courseLevelStudentAtt);
  }

  getTotalCountForCourse(data) {
    this.absentCount = 0;
    this.presentCount = 0;
    this.leaveCount = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].dateLi[0].status == "P") {
        this.presentCount++;
      } else if (data[i].dateLi[0].status == "A") {
        this.absentCount++;
      } else {
        this.leaveCount++;
      }
    }
  }

  getCourseHomeworkData(i): string {
    return this.courseLevelStudentAtt[i].dateLi[0].home_work_status;
  }

  isCourseHomeworkStatusChanged(ev, i) {
    this.courseLevelStudentAtt[i].dateLi[0].home_work_status = ev;
    this.courseLevelStudentAtt[i].dateLi[0].is_home_work_status_changed = "Y";
  }

  validateSpecialCharacters(str) {
    let regex = /[^ a-zA-Z0-9.,]/g;
    if (str.match(regex) == null) {
      return true;
    } else {
      return false;
    }
  }

  // FOR EXAM Attendance

  checkForMArks() {
    let check = false;
    for (let i = 0; i < this.studentAttList.length; i++) {
      if (this.studentAttList[i].assigned == true) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    return check;
  }

  markAllCheckBoxClick(event) {
    this.studentAttList.forEach(element => {
      element.assigned = event.target.checked;
    });
  }

  markAttendaceExamCourse(event, rowData, index) {
    if (event.target.innerText == "L") {
      this.studentAttList[index].attendance = "L";
      this.studentAttList[index].isAttendanceUpdated = "Y";
    } else if (event.target.innerText == "A") {
      this.studentAttList[index].attendance = "A";
      this.studentAttList[index].isAttendanceUpdated = "Y";
    } else {
      this.studentAttList[index].attendance = "P";
      this.studentAttList[index].isAttendanceUpdated = "Y";
    }
    this.getCountOfAbsentPresentLeaveForExam(this.studentAttList);
  }

  markAttendaceExam(event, rowData, index) {
    if (event.target.innerText == "L") {
      this.studentAttList[index].dateLi[0].status = "L";
      this.studentAttList[index].dateLi[0].isStatusModified = "Y";
    } else if (event.target.innerText == "A") {
      this.studentAttList[index].dateLi[0].status = "A";
      this.studentAttList[index].dateLi[0].isStatusModified = "Y";
    } else {
      this.studentAttList[index].dateLi[0].status = "P";
      this.studentAttList[index].dateLi[0].isStatusModified = "Y";
    }
    this.getTotalCountForCourse(this.studentAttList);
  }

  markAttCourseExam() {

    let absectCount = 0;
    if (this.isProfessional) {
      this.studentAttList.forEach(element => {
        element.dateLi.forEach(obj => {
          if (obj.status == "A") {
            absectCount++;
          }
        });
      });
    }

    else {
      this.studentAttList.forEach(element => {
        if (element.attendance == "A") {
          absectCount++;
        }
      });
    }
    this.notificationPopUp = true;
    if (this.settingInfo.sms_absent_notification != 0 && absectCount != 0) {
      let names = this.getAbsentStudentNames(this.studentAttList);
      if (names.length > 0) {
        this.absentPopUp = true;
        this.absentStudentNames = names;
      }
      else {
        if(!this.isSubjectView || this.batch_info.isExam){
        this.notificationPopUp = false;
        this.makeServerCallForExamUpdate('N');
        }
      }
    }
    else {
      if(!this.isSubjectView || this.batch_info.isExam){
      this.notificationPopUp = false;
      this.makeServerCallForExamUpdate('N');
      }
    }
  }

  makeServerCallForExamUpdate(notify) {
    let data;
    if (this.isProfessional) {
      data = this.makeJsonForAttendceMark(notify);
    }
    else {
      data = this.constructJsonForAttendance(notify);
    }

    if (data.length == 0) {
      let msg = {
        type: 'error',
        title: '',
        body: 'Please select student from student list'
      }
      this.appC.popToast(msg);
      return;
    }
    // console.log(data)
    if (this.isProfessional) {
      this.auth.showLoader();
      this.widgetService.markAttendance(data).subscribe(
        res => {
          this.auth.hideLoader();
          let msg = {
            type: 'success',
            title: '',
            body: 'Attendance marked successfully'
          }
          this.appC.popToast(msg);
          this.backToHome();
        },
        err => {
          this.auth.hideLoader();
          let msg = {
            type: 'error',
            title: '',
            body: err.error.message
          }
          this.appC.popToast(msg);
        }
      )
    }
    else {
      this.auth.showLoader();
      this.widgetService.markStudentAttendance(data).subscribe(
        res => {
          this.auth.hideLoader();
          let msg = {
            type: 'success',
            title: '',
            body: 'Attendance marked successfully'
          }
          this.appC.popToast(msg);
          this.backToHome();
        },
        err => {
          this.auth.hideLoader();
          let msg = {
            type: 'error',
            title: '',
            body: err.error.message
          }
          this.appC.popToast(msg);
        }
      )
    }

  }

  constructJsonForAttendance(absentKey) {
    let arr = [];
    for (let i = 0; i < this.studentAttList.length; i++) {
      let obj: any = {};
      obj.course_exam_schedule_id = this.studentAttList[i].course_exam_schedule_id;
      if (this.studentAttList[0].course_marks_update_level == '0') {
        obj.course_marks_update_level = '3';
      } else {
        obj.course_marks_update_level = this.studentAttList[0].course_marks_update_level;
      }
      // obj.course_marks_update_level = '3';
      obj.isStudentExamSMS = absentKey;
      if (this.isProfessional) {
        obj.batchExamMarksLi = this.makeDataJSON(this.studentAttList[i].dateLi);
      }
      else {
        obj.batchExamMarksLi = this.makeDataJSON(this.studentAttList[i].batchExamMarksLi);
      }
      obj.student_course_exam_id = this.studentAttList[i].student_course_exam_id;
      obj.student_id = this.studentAttList[i].student_id;
      obj.isOnlineTestUpdate = this.studentAttList[i].isOnlineTestUpdate;
      obj.attendance = this.studentAttList[i].attendance;
      obj.isAttendanceUpdated = this.studentAttList[i].isAttendanceUpdated;
      obj.course_exam_marks_obtained = this.studentAttList[i].course_exam_marks_obtained;
      if (this.studentAttList[i].assigned) {
        obj.isUpdated = 'Y';
      } else {
        obj.isUpdated = 'N';
      }

      if (this.presentSMSNotify) {
        obj.isSMSNotificationToPresentStudents = 'Y'
      }
      else {
        obj.isSMSNotificationToPresentStudents = 'N'
      }
      arr.push(obj);
    }
    return arr;
  }

  makeJsonForAttendceMark(notify) {
    let obj: any = [];
    let notify_remark = 'N';
    if(this.notify_remark) {
      notify_remark = 'Y';
    }
    for (let i = 0; i < this.studentAttList.length; i++) {
      let test: any = {};
      test.batch_id = this.batch_info.batch_id;
      test.isNotify = notify;
      test.notify_remark = notify_remark;
      test.student_id = this.studentAttList[i].student_id;
      if (this.presentSMSNotify) {
        test.isSMSNotificationToPresentStudents = 'Y';
      }
      else {
        test.isSMSNotificationToPresentStudents = 'N';
      }
      test.dateLi = [{
        date: this.studentAttList[i].dateLi[0].date,
        status: this.studentAttList[i].dateLi[0].status,
        isStatusModified: this.studentAttList[i].dateLi[0].isStatusModified,
        attendance_note: this.attendanceNote,
        schId: this.studentAttList[i].dateLi[0].schId.toString(),
        remark: this.studentAttList[i].dateLi[0].remark
      }]
      obj.push(test);
    }
    return obj;
  }

  makeDataJSON(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      let obj: any = {};
      obj.schd_id = data[i].schd_id;
      obj.student_exam_det_id = data[i].student_exam_det_id;
      obj.marks_obtained = data[i].marks_obtained;
      obj.previous_marks_obtained = data[i].previous_marks_obtained;
      arr.push(obj);
    }
    return arr;
  }

  // closeAttendance(){
  //   this.router.navigate(['/view/home/admin']);
  // }

  countAttendanceLimit() {
    this.attendanceCount = 50 - this.attendanceNote.length;
  }

  countHomeworkLimit() {
    this.homeworkCount = 50 - this.homework.length;
  }

  closeAbsentPopUp() {
    this.absentStudentNames = "";
    this.homeWorkNotDoneStudentNames = "";
    this.absentPopUp = false;
    this.notificationPopUp = false;
  }


  updateMarks() {
    if (this.notifyAbsentStudent) {
      this.makeServerCallForUpdateMarks('Y');
    }
    else {
      this.makeServerCallForUpdateMarks('N');
    }

  }

  examUpdate() {
    if (this.notifyAbsentStudent) {
      this.makeServerCallForExamUpdate('Y');
    }
    else {
      this.makeServerCallForExamUpdate('N');
    }

  }

  markAttendance() {
    if (this.notifyAbsentStudent) {
      this.markAttendanceServerCall('Y');
    }
    else {
      this.markAttendanceServerCall('N');
    }

  }

  closePopUp() {
    this.absentPopUp = false;
    this.notificationPopUp = false;
  }


}
