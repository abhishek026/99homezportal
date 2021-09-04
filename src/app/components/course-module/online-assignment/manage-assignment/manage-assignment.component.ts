import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { HttpService  } from '../../../../services/http.service';
import { MessageShowService } from '../../../../services/message-show.service';
import { MasterTagService } from '../../data-setup/master-tag/master-tag.component.service';
import * as moment from 'moment';
// // import { document } from 'ngx-bootstrap-custome/utils/facade/browser';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  selector: 'app-manage-assignment',
  templateUrl: './manage-assignment.component.html',
  styleUrls: ['./manage-assignment.component.scss']
})
export class ManageAssignmentComponent implements OnInit {

  jsonFlag = {
   isProfessional: false,
   institute_id: '',
   showHideColumn: false,
   type: 'course'
 };

 // new tags
 newTagName: string = '';
 newTagDescription: string = '';

 studentListSettings = {};
 tagsListSettings = {};
 selectedStudentList: any[] = [];
 selectedTagsList: any[] = [];
 assignment_status: string = "Publish";

 tagList: any[] = [];
 masterCourseList: any[] = [];
 courseList: any[] = [];
 subjectList: any[] = [];

 batchList: any[] = [];
 facultyList: any[] = [];
 courseModelList: any[] = [];
 batchModelList: any[] = [];
 studentsList: any[] = [];
 topicList: any[] = [];
 subTopicList: any[] = [];

 hour = ['01 AM', '02 AM', '03 AM', '04 AM', '05 AM', '06 AM', '07 AM', '08 AM', '09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM', '09 PM', '10 PM', '11 PM', '12 AM'];
 minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']

 assignmentDetails = {
   title: "",
   description: "",
   tags: [],
   marks: false,
   evaluation_marks: 0,
   lateSubmission : false,
   masterCourse: '-1',
   standard_id:'-1',
   course: "-1",
   subject: "-1",
   batch: "-1",
   topic: "-1",
   subtopic: "-1",
   students: [],
   teacher: "-1",
   startDate: moment(new Date).format('YYYY-MM-DD'),
   startHr: "12 AM",
   startMin: "00",
   endDate: moment(new Date).add(1,'days').format('YYYY-MM-DD'),
   endHr: "12 AM",
   endMin: "00",
   urlLists: [],
   attachmentId_array: [],
   file_id: "-1",
   assignment_late_submission_date:'',
   enable_grade:false,
   evaluation_date: '',
   assignment_status: ''
 }


 addAttachment: boolean = false;
 showAttachments: boolean = true;
 showMarks: boolean = false;

 // File upload
 customFileArr: fileObj[] = [];
 tempFileArray: any;
 tempArr: any[] = [];
 urlDetails = {
   name: '',
   url: ''
 }
 upFile: any;
 selectedFiles: any[] = [];
 fileArray: any[] = [];

 // Edit Assignment
 sectionName = '';
 editFileId = '';
 editAssignmentDetails: any;
 editUrlList = [];
 editAttachmentList = [];
 removedAttachments = [];
 removedLinks = [];
 userType: any = 0;
 schoolModel: any = false;

  constructor(
    private msgService: MessageShowService,
    private tagSrvc: MasterTagService,
    private httpService: HttpService,
    private auth: AuthenticatorService,
    private router: Router,
  ) {
    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.jsonFlag.isProfessional = true;
          this.jsonFlag.type='batch';
        } else {
          this.jsonFlag.isProfessional = false;
          this.jsonFlag.type='course';
        }
      }
    )
    this.auth.schoolModel.subscribe(
      res => {
        this.schoolModel = false;
        if (res) {
          this.schoolModel = true;
        }
      }
    )
    this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');


  }

  ngOnInit() {

    const promises = [];
    let arr = [];
    this.userType = sessionStorage.getItem('userType');
    if(this.userType == 3) {
    this.assignmentDetails.teacher= sessionStorage.getItem('teacherIDs');
    }

    if(this.jsonFlag.isProfessional){
      arr.push(this.getBatchList())
    }
    else{
      if(this.schoolModel) {
        arr.push(this.getStandard())
      } else {
      arr.push(this.getMasterCourse())
      }
    }
    arr.push(this.getFacultyList())
    arr.push(this.setMultiSelectSetting())
    arr.push(this.getTagList())

    // console.log("before promise")
    Promise.all(promises)
    .then(response => {
      let currentURL = window.location.href;
      if(currentURL.includes('create')){
        this.sectionName = 'Add';
      }
      else{
        this.sectionName = 'Edit';
        let splitURL = currentURL.split("/");
        this.editFileId = splitURL[splitURL.length - 1];
        // console.log("before edit")
        this.getEditAssignmentDetails();
      }
    })



  }

  getEditAssignmentDetails(){
    this.auth.showLoader();
    const url = `/api/v2/onlineAssignment/get/${this.jsonFlag.institute_id}/${this.editFileId}`;
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.editAssignmentDetails = res.result;
        // console.log("edit");
        this.setEditDetails();
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
      }
    )
  }

  setEditDetails(){
    // console.log("after edit")
    this.assignmentDetails.file_id = this.editAssignmentDetails.file_id;
    this.assignmentDetails.title = this.editAssignmentDetails.title;
    this.assignmentDetails.description = this.editAssignmentDetails.description;
    this.assignmentDetails.assignment_status = this.editAssignmentDetails.assignment_status;

    if(this.editAssignmentDetails.evaluation_required == "N"){
      this.assignmentDetails.marks = false;
      this.showMarks = false;
    }
    else if(this.editAssignmentDetails.evaluation_required == "Y"){
      this.assignmentDetails.marks = true;
      this.showMarks = true;
      this.assignmentDetails.evaluation_marks = this.editAssignmentDetails.evaluation_marks;
    }

    if(this.editAssignmentDetails.allow_assignment_late_submission == 'Y'){
      this.assignmentDetails.lateSubmission = true;
    }
    else{
      this.assignmentDetails.lateSubmission = false;
    }

    let tags = [];
    if(this.editAssignmentDetails.tag_lists){
      for(let i = 0; i < this.editAssignmentDetails.tag_lists.length; i++){
        tags.push(this.editAssignmentDetails.tag_lists[i])
      }
      this.selectedTagsList = tags
    }
    // console.log(this.selectedTagsList)
    this.assignmentDetails.standard_id = this.editAssignmentDetails.standard_id;
    this.assignmentDetails.course = this.editAssignmentDetails.course_id;
    if(!this.jsonFlag.isProfessional && !this.schoolModel){
      this.assignmentDetails.masterCourse = this.editAssignmentDetails.master_course_name;
    }
    // else{
    //   this.assignmentDetails.masterCours
    // }

    this.assignmentDetails.subject = this.editAssignmentDetails.subject_id
    this.assignmentDetails.topic = this.editAssignmentDetails.topic_id;
    this.assignmentDetails.subtopic = this.editAssignmentDetails.sub_topic_id;
    this.assignmentDetails.enable_grade = this.editAssignmentDetails.enable_grade.toString();
    if(this.editAssignmentDetails.assignment_late_submission_date!= null && this.editAssignmentDetails.assignment_late_submission_date!='') {
      this.assignmentDetails.assignment_late_submission_date = moment(this.editAssignmentDetails.assignment_late_submission_date).format('YYYY-MM-DD');;
    }
    this.assignmentDetails.evaluation_date = moment(this.editAssignmentDetails.evaluation_date).format('YYYY-MM-DD');

    this.assignmentDetails.students = [];
    this.assignmentDetails.teacher = this.editAssignmentDetails.teacher_id;

    this.assignmentDetails.startDate = moment(this.editAssignmentDetails.start_date).format('YYYY-MM-DD');
    this.assignmentDetails.endDate = moment(this.editAssignmentDetails.end_date).format('YYYY-MM-DD');

    if(this.editAssignmentDetails.start_time != null){
      let start = this.editAssignmentDetails.start_time.split(' ')[0]
      let min = this.editAssignmentDetails.start_time.split(':')[1]
      let shh = start.split(':')[0];
      start = shh+" "+this.editAssignmentDetails.start_time.split(' ')[1];
      this.assignmentDetails.startHr = start;
      this.assignmentDetails.startMin = min.split(' ')[0];
    }
    if(this.editAssignmentDetails.end_time != null){
      let start = this.editAssignmentDetails.end_time.split(' ')[0]
      let min = this.editAssignmentDetails.end_time.split(':')[1]
      let shh = start.split(':')[0];
      start = shh+" "+this.editAssignmentDetails.end_time.split(' ')[1];
      this.assignmentDetails.endHr = start;
      this.assignmentDetails.endMin = min.split(' ')[0];
    }

    if(this.editAssignmentDetails.attachment_lists){
      for (let index = 0; index < this.editAssignmentDetails.attachment_lists.length; index++) {
        if(this.editAssignmentDetails.attachment_lists[index].attachment_name == "URL"){
          this.editUrlList.push(this.editAssignmentDetails.attachment_lists[index]);
        }
        else{
          this.editAttachmentList.push(this.editAssignmentDetails.attachment_lists[index]);
        }
      }
    }
    if(this.schoolModel) {
      this.getCourseList(this.assignmentDetails.standard_id);
    }



  }

  setMultiSelectSetting(){
    this.studentListSettings = {
      singleSelection: false,
      idField: 'student_id',
      textField: 'student_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      enableCheckAll: true
    };
    this.tagsListSettings = {
      singleSelection: false,
      idField: 'tagId',
      textField: 'tagName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      enableCheckAll: true,
      allowSearchFilter: true
    };
  }

  getBatchList(){
    this.auth.showLoader();
    const url = `/api/v1/batches/fetchCombinedBatchData/${this.jsonFlag.institute_id}/?standard_id=-1&subject_id=-1&assigned=Y`;
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.masterCourseList = res.standardLi;
        this.batchList = res.batchLi;
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
      }
    )
  }

  updateCoursesList(){
      const url = `/api/v1/batches/fetchCombinedBatchData/${this.jsonFlag.institute_id}/?standard_id=${this.assignmentDetails.masterCourse}&subject_id=-1&assigned=Y`;
      this.auth.showLoader();
      this.httpService.getData(url).subscribe(
        res => {
          this.auth.hideLoader();
          let result: any;
          result = res;
          this.courseList = result.subjectLi;
          this.batchList = result.batchLi;
          this.auth.hideLoader();
          this.updateSubjectsList();
        },
        err => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
         }
      );
  }

  updateSubjectsList(){
    this.auth.showLoader();
    const url = `/api/v1/batches/fetchCombinedBatchData/${this.jsonFlag.institute_id}/?standard_id=${this.assignmentDetails.masterCourse}&subject_id=${this.assignmentDetails.course}&assigned=Y`;
    this.auth.showLoader();
    this.httpService.getData(url).subscribe(
      res => {
        this.auth.hideLoader();
        let result: any;
        result = res;
        this.batchList = result.batchLi;
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
       }
    );
  }

  getStudentsListForBatch(){
    if(this.assignmentDetails.batch != '-1') {
    this.auth.showLoader();
    const url = `/api/v1/studentBatchMap/batches/${this.assignmentDetails.batch}`;
    this.auth.showLoader();
    this.httpService.postData(url, null).subscribe(
      res => {
        this.auth.hideLoader();
        let result: any;
        result = res;
        this.studentsList = result;
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
       }
    );
    }
  }

  getMasterCourse(){
    // if(this.schoolModel) {
    //   this.getStandard();
    // } else {
    this.auth.showLoader();
    const url = `/api/v1/courseMaster/fetch/${this.jsonFlag.institute_id}/all`;
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.courseModelList = res;
        this.masterCourseList = this.courseModelList;
        console.log("master c");
        if(this.sectionName == 'Edit'){
          this.getCourses();
        }
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
      }
    )
    // }
  }

  getStandard() {
    this.auth.showLoader();
    this.httpService.getData('/api/v1/courseMaster/standard-section-list/'+sessionStorage.getItem('institute_id')).subscribe(
      (res:any)=>{
        this.auth.hideLoader();
        this.masterCourseList = res.result; 
        if(this.sectionName == 'Edit'){
          this.getCourseList(this.assignmentDetails.standard_id);
        }
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
      }
    )
  }

  getCourseList(ev) {
    // this.assignmentDetails.course = "-1";
    // this.assignmentDetails.subject = '-1';
    if(this.assignmentDetails.standard_id != "-1"){
    this.courseList = [];
    let standard_obj = this.masterCourseList.filter(
      (standard) => (ev == standard.standard_id)
    );
    if(standard_obj && standard_obj.length) {
      this.courseList = standard_obj[0].section_list;
    }
    if(this.sectionName == 'Edit'){
      this.getStudentsList();
      this.getSchoolSubjects();
    }
  } else {
      this.courseList = [];
      this.subjectList = [];
      this.topicList = [];
      this.subTopicList = [];
      this.studentsList = [];
      this.selectedStudentList = [];
      this.assignmentDetails.course = "-1";
      this.assignmentDetails.subject = "-1";
      this.assignmentDetails.batch = "-1";
      this.assignmentDetails.topic = "-1";
      this.assignmentDetails.subtopic = "-1";
      this.assignmentDetails.students = [];
  }
  }

  getSchoolSubjects() {    
    this.auth.showLoader();
    this.subjectList = [];
    const url = "/api/v1/courseMaster/fetch/courses/" + sessionStorage.getItem('institute_id') + '/' + this.assignmentDetails.course;
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        //console.log('Subject', res);
        this.subjectList = res.batchesList;
        if(this.sectionName == 'Edit' && this.assignmentDetails.subject != "0"){
          this.getTopic();
        }
      },
      err => {
        this.msgService.showErrorMessage('error', '', err.error.message);
        this.auth.hideLoader();
        //console.log(err);
      }
    )
  }

  getCourses(){
    if(this.assignmentDetails.masterCourse != "-1"){
      for (let index = 0; index < this.masterCourseList.length; index++) {
        if(this.masterCourseList[index].master_course == this.assignmentDetails.masterCourse){
          this.courseList = this.masterCourseList[index].coursesList;
        }
      }
      console.log("course");
      if(this.sectionName == 'Edit'){
        this.getSubjects();
      }
    }
    else{
      this.courseList = [];
      this.subjectList = [];
      this.topicList = [];
      this.subTopicList = [];
      this.studentsList = [];
      this.selectedStudentList = [];
      this.assignmentDetails.course = "-1";
      this.assignmentDetails.subject = "-1";
      this.assignmentDetails.batch = "-1";
      this.assignmentDetails.topic = "-1";
      this.assignmentDetails.subtopic = "-1";
      this.assignmentDetails.students = [];
    }
  }

  getSubjects(){
    if(this.assignmentDetails.course != "-1"){
      this.getStudentsList();
      if(this.schoolModel) {
        this.getSchoolSubjects();
      } else {
      for (let index = 0; index < this.courseList.length; index++) {
        if(this.courseList[index].course_id == this.assignmentDetails.course){
          this.subjectList = this.courseList[index].batchesList;
        }
      }
    }
      if(this.sectionName == 'Edit' && this.assignmentDetails.subject != "0"){
        this.getTopic();
      }
      else{
        this.assignmentDetails.topic = "-1";
        this.assignmentDetails.subtopic = "-1";
      }
    }
    else{
      this.subjectList = [];
      this.topicList = [];
      this.subTopicList = [];
      this.studentsList = [];
      this.selectedStudentList = [];
      this.assignmentDetails.subject = "-1";
      this.assignmentDetails.batch = "-1";
      this.assignmentDetails.topic = "-1";
      this.assignmentDetails.subtopic = "-1";
      this.assignmentDetails.students = [];
    }
  }

  getTopic(){
    if(this.jsonFlag.isProfessional){
      this.getStudentsListForBatch();
    }
    let url = "";
    if(!this.jsonFlag.isProfessional){
      if(this.assignmentDetails.subject != "-1"){
        url = `/api/v1/topic_manager/standards/-1/subjects/${this.assignmentDetails.subject}/topics`;
      }
      else{
        this.topicList = [];
        this.subTopicList = [];
        // this.studentsList = [];
        this.selectedStudentList = [];
        this.assignmentDetails.subject = "-1";
        this.assignmentDetails.topic = "-1";
        this.assignmentDetails.subtopic = "-1";
        this.assignmentDetails.students = [];
      }
    }

    if(this.jsonFlag.isProfessional){
      if(this.assignmentDetails.batch != "-1"){
        for(let i = 0; i < this.batchList.length; i++){
          if(this.batchList[i].batch_id == this.assignmentDetails.batch){
            url = `/api/v1/topic_manager/standards/-1/subjects/${this.batchList[i].subject_id}/topics`;
            break;
          }
        }
      }
      else{
        this.topicList = [];
        this.subTopicList = [];
        this.studentsList = [];
        this.selectedStudentList = [];
        this.assignmentDetails.batch = "-1";
        this.assignmentDetails.topic = "-1";
        this.assignmentDetails.subtopic = "-1";
        this.assignmentDetails.students = [];
      }
    }
    if(url !='') {
      this.auth.showLoader();
      this.httpService.getData(url).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          this.topicList = res;
          if(this.sectionName == 'Edit'){
            this.getSubTopic();
          }
        },
        err => {
          this.auth.hideLoader();
          this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
        }
      )
    }
  }

  getSubTopic(){
    if(this.assignmentDetails.topic != "-1"){
      for (let index = 0; index < this.topicList.length; index++) {
        if(this.topicList[index].topicId == this.assignmentDetails.topic){
          this.subTopicList = this.topicList[index].subTopic;
        }
      }
    }
    else{
      this.subTopicList = [];
      // this.studentsList = [];
      this.selectedStudentList = [];
      this.assignmentDetails.subtopic = "-1";
      this.assignmentDetails.students = [];
    }
  }

  getFacultyList(){
    this.auth.showLoader();
    const url = `/api/v1/teachers/all/${this.jsonFlag.institute_id}/?active=Y`;
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.facultyList = res;
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
      }
    )
  }

  getTagList(){
    this.auth.showLoader();
    const url = `/api/v2/tag_master/getAll/${this.jsonFlag.institute_id}`;
    this.httpService.getData(url).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.tagList = res;
        console.log("tag list");
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
      }
    )
  }

  getStudentsList(){
    let obj = {
    	course_id: this.assignmentDetails.course,
      master_course_name: this.assignmentDetails.masterCourse
    }
    this.auth.showLoader();
    const url = `/api/v1/studentBatchMap/manageBatchStudent/${this.jsonFlag.institute_id}`;
    this.httpService.postData(url, obj).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        this.studentsList = res;
        console.log(this.studentsList)
        if(this.sectionName == 'Edit'){
          let studentArr = [];
            for(let i = 0; i < this.studentsList.length; i++){
              for(let j = 0; j < this.editAssignmentDetails.studentId_lists.length; j++){
                if(this.studentsList[i].student_id == this.editAssignmentDetails.studentId_lists[j]){
                  studentArr.push(this.studentsList[i])
                }
              }
            }
            this.selectedStudentList = studentArr;
        }
      },
      err => {
        this.auth.hideLoader();
        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
      }
    )
  }

  saveAsDraft(){
    this.assignment_status = "Draft";
    this.assignmentDetails.tags = [];
    this.assignmentDetails.students = [];
    let start_date = moment(this.assignmentDetails.startDate);
    let todaysDate = moment(new Date());
    if(start_date > todaysDate) {
      this.assignment_status = "Scheduled"
    }
    for(let i = 0; i < this.selectedTagsList.length; i++){
      this.assignmentDetails.tags.push(this.selectedTagsList[i].tagId)
    }
    for(let i = 0; i < this.selectedStudentList.length; i++){
      this.assignmentDetails.students.push(this.selectedStudentList[i].student_id)
    }

    if(this.assignmentDetails.title.trim() != '' && this.assignmentDetails.title.trim() != null){
      if(this.assignmentDetails.startHr.trim() != '' && this.assignmentDetails.startMin.trim() != ''){
        if(this.assignmentDetails.endHr.trim() != '' && this.assignmentDetails.endMin.trim() != ''){
          if(this.assignmentDetails.evaluation_date != '' && this.assignmentDetails.evaluation_date != null){
          if(this.assignmentDetails.course != '-1'){
            if(this.assignmentDetails.teacher != '-1') {
              if(!this.assignmentDetails.lateSubmission || this.assignmentDetails.assignment_late_submission_date != '') {
            if(this.checkFileAndURL()){
              if(this.getEventHourTo()) {
                if(this.checkEvaluationDate()) {
              let lateSub = 'Y';
              if(!this.assignmentDetails.lateSubmission){
                lateSub = 'N';
              }

              let ev = 'N';
              let marks = 0;
              if(this.assignmentDetails.marks){
                marks = this.assignmentDetails.evaluation_marks;
                ev = 'Y'
              }
              else{
                marks = 0;
              }

              let shr = this.assignmentDetails.startHr.split(' ');
              let ehr = this.assignmentDetails.endHr.split(' ');

              let obj = {
                institute_id: this.jsonFlag.institute_id,
                category_id: "255",   // set by default // hardcoded // as saved in master table
                course_id: this.assignmentDetails.course,
                batch_id: this.assignmentDetails.batch,
                subject_id: this.assignmentDetails.subject,
                topic_id: this.assignmentDetails.topic,
                sub_topic_id: this.assignmentDetails.subtopic,
                title: this.assignmentDetails.title,
                desc: this.assignmentDetails.description,
                start_date: moment(this.assignmentDetails.startDate).format('YYYY-MM-DD'),
                end_date: moment(this.assignmentDetails.endDate).format('YYYY-MM-DD'),
                start_time: shr[0]+":"+this.assignmentDetails.startMin+" "+shr[1],
                end_time: ehr[0]+":"+this.assignmentDetails.endMin+" "+ehr[1],
                allow_assignment_late_submission: lateSub,
                evaluation_marks: marks,
                evaluation_required: ev,
                file_id: this.assignmentDetails.file_id,
                teacher_id: this.assignmentDetails.teacher,
                assignment_status: this.assignment_status,
                tagId_array: this.assignmentDetails.tags,
                studentId_array: this.assignmentDetails.students,
                url_lists: this.assignmentDetails.urlLists,
                enable_grade: this.assignmentDetails.enable_grade,
                evaluation_date: this.assignmentDetails.evaluation_date,
                assignment_late_submission_date: '',
                attachmentId_array: this.removeOldFile,
                // standard_id: this.assignmentDetails.standard_id
              }
              if(lateSub == 'Y') {
                obj.assignment_late_submission_date = this.assignmentDetails.assignment_late_submission_date
              } 
              this.createOnlineAssignment(obj);
              console.log(obj)
            }
          }
          }
        } else {
          this.msgService.showErrorMessage('error', '', "Please select late submission date");
        }
         } else {
            this.msgService.showErrorMessage('error', '', "Please select Teacher");
          }
        }
          else{
            this.msgService.showErrorMessage('error', '', "Please select course");
          }
        }
        else{
          this.msgService.showErrorMessage('error', '', "Please Select Evaluation Date");
        }
      } else {
          this.msgService.showErrorMessage('error', '', "Please select assignment end time hrs & mins");
      }
      }
      else{
        this.msgService.showErrorMessage('error', '', "Please select assignment start time hrs & mins");
      }
    }
    else{
      this.msgService.showErrorMessage('error', '', "Please enter assignment title");
    }
  }

  saveAssignment(){
    let start_date = moment(this.assignmentDetails.startDate);
    let todaysDate = moment(new Date());
    this.assignment_status = "Published";
    if(start_date > todaysDate) {
      this.assignment_status = "Scheduled"
    }
    this.assignmentDetails.tags = [];
    this.assignmentDetails.students = [];
    for(let i = 0; i < this.selectedTagsList.length; i++){
      this.assignmentDetails.tags.push(this.selectedTagsList[i].tagId)
    }
    for(let i = 0; i < this.selectedStudentList.length; i++){
      this.assignmentDetails.students.push(this.selectedStudentList[i].student_id)
    }

    let file_id = "-1";
    if(this.sectionName == "Edit"){
      file_id = this.assignmentDetails.file_id;
    }

    if(this.assignmentDetails.title.trim() != '' && this.assignmentDetails.title.trim() != null){
      if(this.assignmentDetails.startHr.trim() != '' && this.assignmentDetails.startMin.trim() != ''){
        if((!this.schoolModel && this.assignmentDetails.masterCourse != '-1') || (this.schoolModel && this.assignmentDetails.standard_id != '-1')){
          if(this.assignmentDetails.course != '-1'){
            if(this.selectedStudentList.length > 0){
              if(this.assignmentDetails.evaluation_date != '' && this.assignmentDetails.evaluation_date != null){
              if(this.assignmentDetails.teacher != '-1'){
                if(!this.assignmentDetails.lateSubmission || this.assignmentDetails.assignment_late_submission_date != '') {
                if(this.checkFileAndURL()){
                  if(this.getEventHourTo()) {
                    if(this.checkEvaluationDate()) {

                let lateSub = 'Y';
                if(!this.assignmentDetails.lateSubmission){
                  lateSub = 'N';
                }

                let ev = 'N';
                let marks = 0;
                if(this.assignmentDetails.marks){
                  marks = this.assignmentDetails.evaluation_marks;
                  ev = 'Y'
                }
                else{
                  marks = 0;
                }

                let shr = this.assignmentDetails.startHr.split(' ');
                let ehr = this.assignmentDetails.endHr.split(' ');

                let obj = {
                  institute_id: this.jsonFlag.institute_id,
                  category_id: "255",   // set by default // hardcoded // as saved in master table
                  course_id: this.assignmentDetails.course,
                  batch_id: this.assignmentDetails.batch,
                  subject_id: this.assignmentDetails.subject,
                  topic_id: this.assignmentDetails.topic,
                  sub_topic_id: this.assignmentDetails.subtopic,
                  title: this.assignmentDetails.title,
                  desc: this.assignmentDetails.description,
                  start_date: moment(this.assignmentDetails.startDate).format('YYYY-MM-DD'),
                  end_date: moment(this.assignmentDetails.endDate).format('YYYY-MM-DD'),
                  start_time: shr[0]+":"+this.assignmentDetails.startMin+" "+shr[1],
                  end_time: ehr[0]+":"+this.assignmentDetails.endMin+" "+ehr[1],
                  allow_assignment_late_submission: lateSub,
                  evaluation_marks: marks,
                  evaluation_required: ev,
                  file_id: file_id,
                  teacher_id: this.assignmentDetails.teacher,
                  assignment_status: this.assignment_status,
                  tagId_array: this.assignmentDetails.tags,
                  studentId_array: this.assignmentDetails.students,
                  url_lists: this.assignmentDetails.urlLists,
                  attachmentId_array: [],
                  enable_grade: this.assignmentDetails.enable_grade,
                  evaluation_date: this.assignmentDetails.evaluation_date,
                  assignment_late_submission_date: '',
                  // standard_id: this.assignmentDetails.standard_id
                }
                if(lateSub == 'Y') {
                  obj.assignment_late_submission_date = this.assignmentDetails.assignment_late_submission_date
                }

                this.createOnlineAssignment(obj);
                console.log(obj)
              }

              }
              }
            } else {
              this.msgService.showErrorMessage('error', '', "Please select late submission date");
            }
              }
              else{
                this.msgService.showErrorMessage('error', '', "Please select faculty");
              }
            }
              else{
                this.msgService.showErrorMessage('error', '', "Please Select Evaluation Date");
              }
            }
            else{
              this.msgService.showErrorMessage('error', '', "Please select Student(s)");
            }
          }
          else{
            let msg = this.schoolModel ? 'Please seclect section' : 'Please select course';
            this.msgService.showErrorMessage('error', '', msg);
          }
        }
        else{
          let msg = this.schoolModel ? 'Please seclect standard' : 'Please select master course';
          this.msgService.showErrorMessage('error', '', msg);
        }
      }
      else{
        this.msgService.showErrorMessage('error', '', "Please select assignment start time hrs & mins");
      }
    }
    else{
      this.msgService.showErrorMessage('error', '', "Please enter assignment title");
    }
  }

  createOnlineAssignment(obj){

    let formData = new FormData();

    formData.append("fileJson", JSON.stringify(obj));

    if(this.selectedFiles.length > 0){
      for(let i = 0; i <  this.selectedFiles.length; i++){
        formData.append("files", this.selectedFiles[i]);
      }
    }
    // else{
    //   formData.append('files', );
    // }


    let newxhr = new XMLHttpRequest();
    let auths: any = {
      userid: sessionStorage.getItem('userid'),
      userType: sessionStorage.getItem('userType'),
      password: sessionStorage.getItem('password'),
      institution_id: sessionStorage.getItem('institute_id'),
    }

    this.auth.showLoader();

    let Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);

    let base = this.auth.getBaseUrl();
    let urlPostXlsDocument = '';
    if(this.sectionName == 'Edit'){
      urlPostXlsDocument = base + "/api/v2/onlineAssignment/update";
      newxhr.open("POST", urlPostXlsDocument, true);
    }
    else{
      urlPostXlsDocument = base + "/api/v2/onlineAssignment/create";
      newxhr.open("POST", urlPostXlsDocument, true);
    }

    newxhr.setRequestHeader("Authorization", Authorization);
    newxhr.setRequestHeader("enctype", "multipart/form-data;");
    newxhr.setRequestHeader("Accept", "application/json, text/javascript");
    newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");

      newxhr.onreadystatechange = () => {
        if (newxhr.readyState == 4) {
          this.auth.hideLoader();

          if (newxhr.status >= 200 && newxhr.status < 300) {
            let data = JSON.parse((newxhr.response))
            if(data.statusCode >= 200 && data.statusCode < 300){
              this.msgService.showErrorMessage('success', '', 'Assignment created successfully');
              this.router.navigate(['/view/course/online-assignment']);
            }
            else{
              this.msgService.showErrorMessage('error', '', data.message);
            }
          }
          else {
            let data = JSON.parse((newxhr.response))
            this.msgService.showErrorMessage('error', '', data.message);
          }
        }
      }
      newxhr.send(formData);
  }

  fillFiles(files) {
    const preview = (<HTMLInputElement>document.getElementById('uploadFileControl')).files[0];
    if (preview != null || preview != undefined) {
      setTimeout(() => {
        let manualUploadedFileList = (<HTMLInputElement>document.getElementById('uploadFileControl')).files;
        let filesArr = Array.from(manualUploadedFileList);
        this.selectedFiles.push(filesArr[0]);
        this.customFileArr = this.generateFilePreview(filesArr);
        (<HTMLInputElement>document.getElementById('uploadFileControl')).value = null;
      }, 500)
    }
    else{
      this.msgService.showErrorMessage('error', '', "No file selected");
    }

  }

  checkFileAndURL() {
    if((this.selectedFiles && this.selectedFiles.length) || (this.assignmentDetails.urlLists && this.assignmentDetails.urlLists.length) || (this.editAttachmentList && this.editAttachmentList.length) || (this.editUrlList && this.editUrlList.length)) {
      return true;
    } else {
      this.msgService.showErrorMessage('error', '', "Please select file or add Link");
      return false;
    }
  }

  getName(file: string): string {
    return file.split(".")[0];
  }

  getType(file: string): string {
    let str = file.substring(file.lastIndexOf(".") + 1, file.length);
    return str;
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
    let obj = {
      fileName: this.tempArr[0].fileName,
      fileType: this.tempArr[0].fileType
    };
    this.fileArray.push(obj);
    return tempArr;
  }

  removeFile(fileName){
    for (let index = 0; index < this.selectedFiles.length; index++) {
      if(this.selectedFiles[index].fileName == fileName){
        this.fileArray.splice(index, 1);
        this.selectedFiles.splice(index, 1);
        break;
      }
    }
  }

  uploadURL(){
    if(this.urlDetails.name.trim() != ''){
      if(this.urlDetails.url.trim() != ''){
        if(this.isUrlValid(this.urlDetails.url.trim())){
          let obj = {
            display_name: this.urlDetails.name,
            url: this.urlDetails.url
          }
          this.assignmentDetails.urlLists.push(obj)
          this.urlDetails.name = "";
          this.urlDetails.url = "";
        }
        else{
          this.msgService.showErrorMessage('error', '', "Please enter valid URL");
        }
      }
      else{
        this.msgService.showErrorMessage('error', '', "Please enter URL");
      }
    }
    else{
      this.msgService.showErrorMessage('error', '', "Please enter URL name");
    }
  }

  isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
  }

  removeLink(display_name){
    for (let index = 0; index < this.assignmentDetails.urlLists.length; index++) {
      if(this.assignmentDetails.urlLists[index].display_name == display_name){
        this.assignmentDetails.urlLists.splice(index, 1);
        break;
      }
    }
  }

  getEventHourFrom(e) {
    // this.assignmentDetails.startMin = "00";
    if (this.assignmentDetails.startHr != "" && this.assignmentDetails.startHr != null && this.assignmentDetails.startMin == "") {
      this.assignmentDetails.startMin = "00";
    }
    else if (this.assignmentDetails.endHr != "" && this.assignmentDetails.endHr != null && this.assignmentDetails.endMin == "") {
      this.assignmentDetails.endMin = "00";
    }
    if (this.assignmentDetails.startHr != "" && this.assignmentDetails.startHr != null && this.assignmentDetails.startMin != "" && this.assignmentDetails.startMin != null
      && this.assignmentDetails.endHr != "" && this.assignmentDetails.endHr != null && this.assignmentDetails.endMin != "" && this.assignmentDetails.endMin != null) {
      this.getEventHourTo();
    }
  }

  getEventHourTo() {

    let fromTime = moment(this.assignmentDetails.startDate).format('YYYY-MM-DD') + " " + this.assignmentDetails.startHr.split(' ')[0] + ":" + this.assignmentDetails.startMin + " " + this.assignmentDetails.startHr.split(' ')[1];
    let toTime = moment(this.assignmentDetails.endDate).format('YYYY-MM-DD') + " " + this.assignmentDetails.endHr.split(' ')[0] + ":" + this.assignmentDetails.endMin + " " + this.assignmentDetails.endHr.split(' ')[1];
    let fromTimeT = moment(fromTime).format('YYYY-MM-DD hh:mm a');
    let toTimeT = moment(toTime).format('YYYY-MM-DD hh:mm a');

    if (moment(fromTimeT).diff(moment(toTimeT), 'minutes') > 0) {
      this.msgService.showErrorMessage('error', '', "From time cannot be greater than to time");
      return false;
    }

    else if (this.assignmentDetails.startHr == "" || this.assignmentDetails.endHr == "" || this.assignmentDetails.startMin == "" || this.assignmentDetails.startMin == "") {
      this.msgService.showErrorMessage('error', '', "All fields are required");
      return false;
    }

    else if (moment(fromTimeT).diff(moment(), 'minutes') <= 0) {
      this.msgService.showErrorMessage('error', '', "Time cannot be schedule before current time");
      return false;
    }

    else if (fromTimeT == toTimeT) {
      this.msgService.showErrorMessage('error', '', "From time and to time cannot be same");
      return false;
    }
    else {
      return true;
    }

  }

  checkEvaluationDate() {
    let evaluationDate = moment(this.assignmentDetails.evaluation_date).format('YYYY-MM-DD');
    let toTime = moment(this.assignmentDetails.endDate).format('YYYY-MM-DD') + " " + this.assignmentDetails.endHr.split(' ')[0] + ":" + this.assignmentDetails.endMin + " " + this.assignmentDetails.endHr.split(' ')[1];
    let lateSubmissionDate = moment(this.assignmentDetails.assignment_late_submission_date).format('YYYY-MM-DD');
    let evaluationTimeT = moment(evaluationDate).format('YYYY-MM-DD hh:mm a');
    let toTimeT = moment(toTime).format('YYYY-MM-DD hh:mm a');
    let lateSubT = moment(lateSubmissionDate).format('YYYY-MM-DD hh:mm a');

    if(this.assignmentDetails.lateSubmission && moment(lateSubT).diff(moment(evaluationTimeT), 'minutes') > 0) {
      this.msgService.showErrorMessage('error', '', "Evaluation date can't be lesser than Late Submission Date");
      return false;
    } else if (moment(toTime).diff(moment(evaluationTimeT), 'minutes') > 0) {
      this.msgService.showErrorMessage('error', '', "Evaluation date can't be lesser than End Date");
      return false;
    } else {
      return true;
    }
  }

  // removed url while edit
  removeOldLink(display_name){
    for (let index = 0; index < this.editUrlList.length; index++) {
      if(this.editUrlList[index].attachment_display_name == display_name){
        this.editUrlList.splice(index, 1);
        break;
      }
    }
  }

  // removed File while edit
  removeOldFile(file_id){
    for (let index = 0; index < this.editAttachmentList.length; index++) {
      if(this.editAttachmentList[index].file_id == file_id){
        this.editAttachmentList.splice(index, 1);
        this.removedAttachments.push(file_id);
        break;
      }
    }
  }

  toggleMarks(){
    if(this.assignmentDetails.marks){
      this.showMarks = true;
    }
    else{
      this.showMarks = false;
    }

  }


  createMasterTag(){
      if(this.newTagName == ''){
          this.msgService.showErrorMessage('error','',"Enter tag name");
          return false;
      }
      if(this.newTagName.length > 100){
          this.msgService.showErrorMessage('error','',"Tag name cannot be so long");
          return false;
      }
      if(this.newTagDescription.length > 500){
          this.msgService.showErrorMessage('error','',"Description cannot be so long");
          return false;
      }
     // else {
          this.auth.showLoader();
          let payload = {};
           payload = {
            "tagName":this.newTagName,
            "description":this.newTagDescription,
            "instituteId":this.jsonFlag.institute_id
          }
          this.tagSrvc.addMasterTagInInstitute(payload).subscribe(data =>{
              let temp: any = data;
              this.msgService.showErrorMessage('success', '', temp.message)
              this.auth.hideLoader();
              this.newTagDescription = '';
              this.newTagName = '';
              $('#addTag').modal('hide');
              this.getTagList();
          }, error =>{
              this.auth.hideLoader();
              this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', error.error.message)
          })
     //}
  }

}
