import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../../../app.component';
import { AuthenticatorService } from '../../../../services/authenticator.service';
import { HttpService } from '../../../../services/http.service';
import { MessageShowService } from '../../../../services/message-show.service';
import { WidgetService } from '../../../../services/widget.service';
declare var $;

@Component({
  selector: 'app-batch-model',
  templateUrl: './batch-model.component.html',
  styleUrls: ['./batch-model.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class BatchModelComponent implements OnInit {

  @ViewChild('fileUpload',{static: false}) fileUpload: any;
  permissionArray = sessionStorage.getItem('permissions');
  public isProfessional: boolean = false;
  exam_info: any;
  examGradeFeature: any;
  is_exam_grad_feature: any = 0;
  examData: any = "";
  subjectList: any = [];
  studentList: any = [];
  gradesList: any = [];
  coursePlannerStatus: any;

  constructor(
    private router: Router,
    private appC: AppComponent,
    private widgetService: WidgetService,
    private auth: AuthenticatorService,
    private route: ActivatedRoute,
    private _httpService: HttpService,
    private msgService: MessageShowService,
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
    )

    this.examGradeFeature = Number(sessionStorage.getItem('is_exam_grad_feature'));
    this.fetchData();
    this.checkForCoursePlannerRoute();
  }

  checkForCoursePlannerRoute(){
    this.coursePlannerStatus = sessionStorage.getItem('isFromCoursePlanner')
  }

  updateGradesOption() {
    $("#myModal").modal("show");
     let object :any = document.getElementsByClassName('ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only');
    if(object.length>0){
       object[0].click();// clear object on template
    }
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
        // formData.append('files', $event.files);
      }

      let base = this.auth.getBaseUrl(); //StdExam/download/
      let urlPostXlsDocument = base + "/api/v1/StdExam/upload/" + this.exam_info.data.class_schedule_id;
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
      // this.uploaders.clear(); // this will clear your file
      if (!this.auth.isRippleLoad.getValue()) {
        this.auth.showLoader();
        newxhr.onreadystatechange = () => {
          this.auth.hideLoader();
          if (newxhr.readyState == 4) {
            let res = JSON.parse(newxhr.response);
            if (res.status == undefined) {
              $("#myModal").modal("hide");
              if (newxhr.status >= 200 && newxhr.status < 300) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', "File uploaded successfully");
                this.studentList = this.addKeys(res.studLi, false);
                fileUpload.clear(); // this will clear your selected file
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', JSON.parse(newxhr.response).message);
              }
            } else {
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
    let url = '/api/v1/StdExam/download/' + this.exam_info.data.class_schedule_id;
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

  fetchData() {
    let encryptedData = sessionStorage.getItem('exam_info');
    let data = atob(encryptedData)
    this.exam_info = JSON.parse(data);
    this.fetchStudentDetails(this.exam_info.data);
  }

  fetchStudentDetails(data) {
    this.widgetService.fetchStudentExamDetails(data.batch_id, data.schd_id).subscribe(
      (res: any) => {
        this.examData = res;
        if(res.studLi.length > 0){
          this.is_exam_grad_feature = res.is_exam_grad_feature;
          if (this.examGradeFeature == 1) {
            this.getAllExamGrades();
          }
          this.studentList = this.addKeys(res.studLi, false);
        }

      },
      err => {
        //console.log(err);
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

  checkForMArks() {
    let check = false;
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].assigned == true) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    return check;
  }

  markAllCheckBoxClick(event) {
    this.studentList.forEach(element => {
      if (element.attendance == 'P') {
        element.assigned = event.target.checked;
      }
    });
  }

  addKeys(data, val) {
    data.forEach(
      element => {
        element.assigned = val;
      }
    )
    return data;
  }


  updateMarksOnServer(sendSms) {
    let dataToSend = this.makeJsonForMarks(sendSms);
    if (dataToSend.studLi.length == 0) {
      this.messageNotifier('error', '', 'Please Select Student');
      return;
    } else {
      for (let i = 0; i < dataToSend.studLi.length; i++) {
        let object = dataToSend.studLi[i];
        if (this.examData.is_exam_grad_feature == 1 && object.grade_id == -1 && object.attendance=='P') {
          this.messageNotifier('error', '', 'Please Select grades');
          dataToSend = false;
          break;
        }
      }
     
    }
    if (dataToSend == false) {
      return;
    }
    this.widgetService.updateAttendanceDetails(dataToSend).subscribe(
      res => {
        this.messageNotifier('success', "Marks Updated", 'Marks Updated Successfully');
        sessionStorage.setItem('exam_info', '');
        this.closeAttendance();
      },
      err => {
        //console.log(err);
        this.messageNotifier('error', '', err.error.message);
      }
    )
  }

  makeJsonForMarks(sendSms) {
    let arr: any = {};
    arr.schd_id = this.examData.schd_id;
    arr.batch_id = this.examData.batch_id;
    arr.isStudentExamSMS = sendSms;
    arr.studLi = [];
    for (let i = 0; i < this.studentList.length; i++) {
      let student: any = {};
      student.student_id = this.studentList[i].student_id;
      student.marks_obtained = this.studentList[i].marks_obtained;
      student.student_exam_det_id = this.studentList[i].student_exam_det_id;
      student.previous_marks_obtained = this.studentList[i].previous_marks_obtained;
      student.remarks = this.studentList[i].remarks;
      student.isUpdated = this.studentList[i].isUpdated;
      student.isSendExamRemarkInSMS = "N";
      student.attendance = this.studentList[i].attendance;
      student.isAttendanceUpdated = this.studentList[i].isAttendanceUpdated;
      student.grade_id = this.studentList[i].grade_id;
      if (this.studentList[i].assigned) {
        if (sendSms == "Y") {
          student.isUpdated = "Y";
          student.isSendExamRemarkInSMS = "Y";
        }
        if (this.examData.is_exam_grad_feature == 0) {
          if (student.marks_obtained > this.examData.total_marks) {
            this.messageNotifier('error', '', 'Please check marks you have provided');
            return false;
          } else {
            if (this.studentList[i].attendance == 'P') {
              student.marks_obtained = this.studentList[i].marks_obtained;
            } else {
              student.marks_obtained = '0';
            }
          }
        }else{
          student.marks_obtained = null;
        }
      } else {
        if (this.examData.is_exam_grad_feature == 1) {
          student.marks_obtained = null;
        }
        else {
          if (this.studentList[i].attendance == 'A' || this.studentList[i].attendance == 'L') {
            student.marks_obtained = '0';
          }
        }
      }
      arr.studLi.push(student);
    }
    return arr;
  }

  messageNotifier(type, title, msg) {
    let data = {
      type: type,
      title: title,
      body: msg
    }
    this.appC.popToast(data);
  }

  closeAttendance() {
    let fromExamMarks = sessionStorage.getItem('exam_marks');
    if(this.coursePlannerStatus == 'true'){
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
    if(this.coursePlannerStatus == 'true'){
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
