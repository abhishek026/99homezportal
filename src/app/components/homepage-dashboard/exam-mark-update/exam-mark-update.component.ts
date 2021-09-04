import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { HttpService } from '../../../services/http.service';
import { MessageShowService } from '../../../services/message-show.service';
import { WidgetService } from '../../../services/widget.service';
declare var $;

@Component({
  selector: 'app-exam-mark-update',
  templateUrl: './exam-mark-update.component.html',
  styleUrls: ['./exam-mark-update.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ExamMarkUpdateComponent implements OnInit, OnDestroy {

  @ViewChild('forms',{static: false}) forms: any;
  permissionArray = sessionStorage.getItem('permissions');
  gradesList: any = [];
  tempData: any = [];
  studentAttList: any[] = [];
  subjectList: any = [];
  exam_info: any;
  examMarksLevel: string = "0";
  totalExamMarks: number = 0;
  isProfessional: boolean = false;
  institute_id: any;
  upload_text: any = 'Upload Marks';
  examGradeFeature: any;
  coursePlannerStatus: any;

  constructor(
    private router: Router,
    private msgService: MessageShowService,
    private widgetService: WidgetService,
    private auth: AuthenticatorService,
    private route: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.isProfessional = true;
        } else {
          this.isProfessional = false;
        }
      }
    );
    this.examGradeFeature = Number(sessionStorage.getItem('is_exam_grad_feature'));
    this.checkForCoursePlannerRoute();
    this.fetchWidgetPrefill();
  }

  ngOnDestroy() {
    sessionStorage.removeItem('exam_info');
    sessionStorage.removeItem('fromClassAttendace');
    sessionStorage.removeItem('classAttendance');
    sessionStorage.removeItem('exam_marks');
  }

  checkForCoursePlannerRoute(){
    this.coursePlannerStatus = sessionStorage.getItem('isFromCoursePlanner');
  }

  fetchWidgetPrefill() {
    let encryptedData = sessionStorage.getItem('exam_info');
    let data = atob(encryptedData);
    this.exam_info = JSON.parse(data);
    // if(this.coursePlannerStatus){
    //   this.exam_info.data.is_exam_grad_feature = this.examGradeFeature
    // }
    let data1 = this.exam_info.data;
    this.examMarksUpdateCourse(data1);
  }

  /** upload student details  subject or course wise
   *     created by laxmi */
  uploadHandler($event, fileUpload) {
    let files = $event.files;
    let pattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(.xls|.xlsx)$/i;
    console.log(pattern.test(files[0].name));
    if (!pattern.test(files[0].name)) {
      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select file in  xls, xlsx  form");
    } else {
      const formData = new FormData();
      if ($event.files && $event.files.length) {
        $event.files.forEach(file => {
          formData.append('file', file);
        });
      }

      let base = this.auth.getBaseUrl();
      let option = this.examMarksLevel == '2' ? 'C' : 'S';
      let urlPostXlsDocument = base + "/api/v1/StdCourseExam/upload/" + this.exam_info.data.course_exam_schedule_id + '?option=' + option;
      let newxhr = new XMLHttpRequest();
      let auths: any = {
        userid: sessionStorage.getItem('userid'),
        userType: sessionStorage.getItem('userType'),
        password: sessionStorage.getItem('password'),
        institution_id: sessionStorage.getItem('institute_id'),
      }
      let Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
      newxhr.open("POST", urlPostXlsDocument, true);
      newxhr.setRequestHeader("Authorization", Authorization);
      newxhr.setRequestHeader("enctype", "multipart/form-data;");
      newxhr.setRequestHeader("Accept", "application/json, text/javascript");
      newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      if (!this.auth.isRippleLoad.getValue()) {
        this.auth.showLoader();
        newxhr.onreadystatechange = () => {
          this.auth.hideLoader();
          if (newxhr.readyState == 4) {
            let res = JSON.parse(newxhr.response);
            if (res.status == 200 || res.status == undefined) {
              $("#myModal").modal("hide");
              this.studentAttList = this.addKeys(JSON.parse(newxhr.response), false);
              if (newxhr.status >= 200 && newxhr.status < 300) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', "File uploaded successfully");
                fileUpload.clear(); // this will clear your selected file
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', res.message);
              }
            }
            else {
              this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', res.message);
            }
          }
        }
        newxhr.send(formData);
      }
    }
  }


  /** download student upadate template subject or course wise
    created by laxmi */
  downloadMarksDetails() {
    let url = '/api/v1/StdCourseExam/download/' + this.exam_info.data.course_exam_schedule_id + '?option=';
    let option = this.examMarksLevel == '2' ? 'C' : 'S';
    url = url + option;
    this.auth.showLoader();
    this._httpService.postData(url, null).subscribe((resp: any) => {
      this.auth.hideLoader();
      console.log(resp);
      var bindata = window.atob(resp.document);
      this.displayContents(bindata, resp);
    },
      (err) => {
        this.auth.hideLoader();
        this.messageNotifier('error', '', err.error.message);
      })
  }

  /**
   * convert binary data into excel
   * created by : laxmi wapte
   */

  displayContents(binaryString, file) {
    var extension = file.docTitle.substring(file.docTitle.lastIndexOf('.'));
    var len = binaryString.length;
    var arr = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      arr[i] = binaryString.charCodeAt(i);
    }
    var mimetype = "application/vnd.ms-excel";
    window.console.log(extension, mimetype);
    var data = new Blob([arr], {
      type: mimetype
    });
    var dataURL = window.URL.createObjectURL(data);
    var link = <HTMLAnchorElement>document.getElementById('downloadFileClick');
    link.innerHTML = 'Download ' + file.docTitle;
    link.download = file.docTitle;
    link.href = dataURL;
    link.click();
  }



  /**
   *
   */
  updateGradesOption() {
    if (this.examMarksLevel == "0" || Number(this.examMarksLevel) == 3) {
      this.messageNotifier('error', '', 'Please enter marks updation level');
      return;
    }
    $("#myModal").modal("show");
    let object: any = document.getElementsByClassName('ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only');
    if (object.length > 0) {
      object[0].click();
    }
  }

  fetchStudentDetails(data) {
    this.widgetService.fetchStudentExamDetails(data.batch_id, data.schd_id).subscribe(
      (res: any) => {
        // this.examData = res;
        this.studentAttList = this.addKeys(res.studLi, false);
      },
      err => {
        //console.log(err);
        this.messageNotifier('error', '', err.error.message);
      }
    )
  }

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

  examMarksUpdateCourse(data) {
    this.examMarksLevel = data.course_marks_update_level.toString();
    this.subjectList = [];
    this.totalExamMarks = 0;
    this.tempData = data;
    this.getExamstudentAttList(data.course_exam_schedule_id);
    if (data.is_exam_grad_feature == 1) {
      this.getAllExamGrades();
      this.upload_text = 'Upload Grades';
    } else {
      this.upload_text = 'Upload Marks';
    }
  }

  getExamstudentAttList(id) {
    this.auth.showLoader();
    this.widgetService.getExamStudentsList(id).subscribe(
      (res: any[]) => {
        this.auth.hideLoader();
        this.studentAttList = this.addKeys(res, false);
        this.makeTableHeader();
      },
      err => {
        this.auth.hideLoader();
        console.log(err);
        this.messageNotifier('error', '', err.error.message);
      }
    )
  }

  getAllExamGrades() {
    this.auth.showLoader();
    this.widgetService.getExamGrades().subscribe(
      res => {
        this.auth.hideLoader();
        this.gradesList = res;
      },
      err => {
        this.auth.hideLoader();
        //console.log(err);
      }
    )
  }

  makeTableHeader() {
    if (this.studentAttList.length > 0) {
      this.subjectList = this.studentAttList[0].batchExamMarksLi;
      this.totalExamMarks = this.studentAttList[0].cours_exam_total_marks;
    } else {
      this.subjectList = [];
      this.totalExamMarks = 0;
    }
  }

  updateMarksOnServerCourse(type) {
    if (this.examMarksLevel == "0" || Number(this.examMarksLevel) == 3) {
      this.messageNotifier('error', '', 'Please enter marks updation level');
      return;
    }
    let data: any;
    if (type == 'single') {
      data = this.makeJsonForMarksUpdate();
    } else {
      data = this.fetchAllStudentJson();
    }
    if (data.length == 0) {
      this.messageNotifier('error', '', 'Please select student from student list');
      return;
    }
    else {
      let flag = true;
      for (let i = 0; i < data.length; i++) {
        let obejct = data[i].batchExamMarksLi;
        if (data[i].assigned && data[i].attendance == 'P') {
          if (this.examMarksLevel == '1') {
            for (let j = 0; j < obejct.length; j++) {
              if (obejct[j].grade_id == -1) {
                flag = false;
                this.messageNotifier('error', '', 'Please select grades');
              }
            }
          }
          if (flag && data[i].grade_id == -1 && data[i].attendance == 'P') {
            flag = false;
            this.messageNotifier('error', '', 'Please select grades');
          }
        }// check grades are given or not

        delete data[i].assigned;
      }
      if (!flag) {
        return;
      }
    }

    if (data == false) {
      return;
    }
    this.auth.showLoader();
    this.widgetService.markStudentMarks(data).subscribe(
      res => {
        this.auth.hideLoader();
        this.messageNotifier('success', '', 'Marks saved successfully');
        sessionStorage.setItem('exam_info', '');
        this.backToHome();
      },
      err => {
        this.auth.hideLoader();
        this.messageNotifier('error', '', err.error.message);
      }
    )
  }

  makeJsonForMarksUpdate() {
    let arr = [];
    let notassignCount = 0;
    for (let i = 0; i < this.studentAttList.length; i++) {
      let obj: any = {};
      obj.assigned = this.studentAttList[i].assigned;
      obj.course_exam_schedule_id = this.studentAttList[i].course_exam_schedule_id;
      obj.course_marks_update_level = this.examMarksLevel;
      obj.isStudentExamSMS = 'N'
      obj.batchExamMarksLi = this.makeMarksDataJSON(this.studentAttList[i].attendance, this.studentAttList[i].batchExamMarksLi);
      if (obj.batchExamMarksLi == false) {
        return false;
      }
      obj.student_course_exam_id = this.studentAttList[i].student_course_exam_id;
      obj.student_id = this.studentAttList[i].student_id;
      if (this.studentAttList[i].assigned) {
        obj.isUpdated = 'Y';
      } else {
        obj.isUpdated = 'N';
        notassignCount++;
      }
      // obj.isUpdated = this.studentAttList[i].isUpdated;
      obj.isSendExamRemarkInSMS = 'N';
      obj.remarks = this.studentAttList[i].remarks;
      obj.isOnlineTestUpdate = this.studentAttList[i].isOnlineTestUpdate;
      obj.attendance = this.studentAttList[i].attendance;
      obj.isAttendanceUpdated = this.studentAttList[i].isAttendanceUpdated;
      obj.cours_exam_total_marks = this.studentAttList[i].cours_exam_total_marks;
      if (this.tempData.is_exam_grad_feature == 0) {
        obj.course_exam_marks_obtained = this.studentAttList[i].course_exam_marks_obtained;
      } else {
        // if (this.studentAttList[i].grade_id == '-1') {
        //   this.messageNotifier('error', '', 'Please enter total grades');
        //   return false;
        // }
        obj.grade_id = this.studentAttList[i].grade_id;
      }
      arr.push(obj);
    }
    if (notassignCount == this.studentAttList.length) {
      arr = [];// this is for selecting student  madentary dont remove it --laxmi
    }
    return arr;
  }

  fetchAllStudentJson() {
    let arr = [];
    let notassignCount = 0;
    for (let i = 0; i < this.studentAttList.length; i++) {
      let obj: any = {};
      obj.assigned = this.studentAttList[i].assigned;
      obj.course_exam_schedule_id = this.studentAttList[i].course_exam_schedule_id;
      obj.course_marks_update_level = this.examMarksLevel;
      obj.batchExamMarksLi = this.makeMarksDataJSON(this.studentAttList[i].attendance, this.studentAttList[i].batchExamMarksLi);
      if (obj.batchExamMarksLi == false) {
        return false;
      }
      obj.student_course_exam_id = this.studentAttList[i].student_course_exam_id;
      obj.student_id = this.studentAttList[i].student_id;
      obj.cours_exam_total_marks = this.studentAttList[i].cours_exam_total_marks;
      if (this.studentAttList[i].assigned) {
        obj.isUpdated = 'Y';
        obj.isStudentExamSMS = 'Y';
        obj.isSendExamRemarkInSMS = 'Y';
      } else {
        obj.isUpdated = 'N';
        obj.isStudentExamSMS = 'N';
        obj.isSendExamRemarkInSMS = 'N';
        notassignCount++;
      }
      obj.remarks = this.studentAttList[i].remarks;
      obj.isOnlineTestUpdate = this.studentAttList[i].isOnlineTestUpdate;
      obj.attendance = this.studentAttList[i].attendance;
      obj.isAttendanceUpdated = this.studentAttList[i].isAttendanceUpdated;
      if (this.tempData.is_exam_grad_feature == 0) {
        obj.course_exam_marks_obtained = this.studentAttList[i].course_exam_marks_obtained;
      } else {
        // if (this.studentAttList[i].grade_id == '-1') {
        //   this.messageNotifier('error', '', 'Please enter total grades');
        //   return false;
        // }
        obj.grade_id = this.studentAttList[i].grade_id;
      }
      // if (!this.studentAttList[i].assigned) {
      //   notassignCount++; -- not usefull it get more count that stucent in link thats why it removed --laxmi
      // }
      arr.push(obj);
    }
    if (notassignCount == this.studentAttList.length) {
      arr = [];
    }
    return arr;
  }

  makeMarksDataJSON(attendance, data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      let obj: any = {};
      obj.schd_id = data[i].schd_id;
      obj.student_exam_det_id = data[i].student_exam_det_id;
      if (this.tempData.is_exam_grad_feature == 0) {
        obj.marks_obtained = data[i].marks_obtained;
        obj.previous_marks_obtained = data[i].previous_marks_obtained;
      } else {
        obj.grade_id = data[i].grade_id;
        // if (obj.grade_id == "-1" && this.examMarksLevel == "1" && attendance == 'P') {
        //   this.messageNotifier('error', '', 'Please enter grades of subject');
        //   return false;
        // }
      }
      arr.push(obj);
    }
    return arr;
  }

  checkSubjectMarks(student, data, event) {
    let total: number = 0;
    let number = Number(data.marks_obtained);
    if (data.total_marks < number) {
      this.messageNotifier('error', '', 'Please enter mark less than subject total marks');
      data.marks_obtained = 0;
    } else {
      for (let i = 0; i < student.batchExamMarksLi.length; i++) {
        total = Number(student.batchExamMarksLi[i].marks_obtained) + total;
      }
      student.course_exam_marks_obtained = total;
      student.isUpdated = "Y";
    }
  }

  checkTotalMarks(data, event) {
    let number = Number(data.course_exam_marks_obtained);
    if (data.cours_exam_total_marks < number) {
      this.messageNotifier('error', '', 'Please enter mark less than total marks');
      data.course_exam_marks_obtained = 0;
    }
    data.isUpdated = "Y";
  }

  onRadioButtonSelction() {
    if (this.examMarksLevel == "2") {
      if (this.tempData.is_exam_grad_feature == 1) {
        this.studentAttList.forEach(element => {
          element.batchExamMarksLi.forEach(ele => {
            ele.grade_id = '-1';
          });
          element.isUpdated = "Y";
        });
      }
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

  markAllCheckBoxClick(event) {
    this.studentAttList.forEach(element => {
      if(element.attendance=='P'){
        element.assigned = event.target.checked;
      }      
    });
  }

  messageNotifier(type, title, msg) {
    this.msgService.showErrorMessage(type, msg, title);
  }

  closeAttendance() {
    let fromExamMarks = sessionStorage.getItem('exam_marks');
    if(this.coursePlannerStatus== 'true'){
      this.isProfessional ? this.router.navigate(['/view/batch/coursePlanner/exam']):
      this.router.navigate(['/view/course/coursePlanner/exam']);
    } else if (fromExamMarks == 'true') {
      this.router.navigate(['/view/course/exam-marks']);
    }
    else{
      this.router.navigate(['/view/dashboard/admin']);
    }
  }

  backToHome() {
    let fromExamMarks = sessionStorage.getItem('exam_marks');
    if(this.coursePlannerStatus== 'true'){
      this.isProfessional ? this.router.navigate(['/view/batch/coursePlanner/exam']):
      this.router.navigate(['/view/course/coursePlanner/exam']);
    } else if (fromExamMarks == 'true') {
      this.router.navigate(['/view/course/exam-marks']);
    }
    else{
      sessionStorage.setItem('exam_info', '');
      this.router.navigate(['/view/dashboard/admin']);
    }
  }

}
