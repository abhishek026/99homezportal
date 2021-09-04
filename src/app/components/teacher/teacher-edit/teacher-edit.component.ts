import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherAPIService } from '../../../services/teacherService/teacherApi.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { CommonServiceFactory } from './../../../services/common-service';


@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.scss']
})
export class TeacherEditComponent implements OnInit {

  selectedTeacherId;
  selectedTeacherInfo;
  hasIdCard: string = 'N';
  editTeacherForm: FormGroup;
  studentImage: string = '';
  containerWidth: any = "200px";
  @ViewChild('idCardUpload',{static: false}) idCardTeacher;
  @ViewChild('uploadedImage',{static: false}) idCardImg;
  @ViewChild('uploadImageAnchor',{static: false}) anchTag;
  enableBiometric: any = 0;
  instituteCountryDetObj: any = {};
  countryDetails: any = [];
  maxlength: number = 10;
  country_id: number = null;



  constructor(
    private route: Router,
    private ApiService: TeacherAPIService,
    private fb: FormBuilder,
    private toastCtrl: AppComponent,
    private routeParam: ActivatedRoute,
    private commonService: CommonServiceFactory
  ) {
    this.routeParam.params.subscribe(params => {
      this.selectedTeacherId = params['id'];
    });
    console.log(this.selectedTeacherId);

  }

  ngOnInit() {
    this.fetchDataForCountryDetails();
    this.createEditTeacherForm();
    if (this.selectedTeacherId) {
      this.getTeacherInfo();
      this.enableBiometric = sessionStorage.getItem('biometric_attendance_feature');
    }
  }

  // created by: Nalini Walunj
  // Below two functions are written to fetch country details from the session stored at the time of login of institute
  fetchDataForCountryDetails() {
    let countryCodeEncryptedData = sessionStorage.getItem('country_data');
    let temp = JSON.parse(countryCodeEncryptedData);
    if (temp.length > 0) {
      this.countryDetails = temp;
      this.maxlength = this.countryDetails[0].country_phone_number_length;
      this.instituteCountryDetObj = this.countryDetails[0];
      this.country_id = this.countryDetails[0].id;
    }
  }

  onChangeObj(event) {
   for(let i=0; i<this.countryDetails.length;i++){
      if (this.countryDetails[i].id == event) {
        this.instituteCountryDetObj = this.countryDetails[i];
        this.maxlength = this.countryDetails[i].country_phone_number_length;
        this.country_id = this.countryDetails[i].id;
        this.editTeacherForm.setValue({
          country_id : this.countryDetails[i].id,
          teacher_name : this.editTeacherForm.value.teacher_name,
          teacher_curr_addr : this.editTeacherForm.value.teacher_curr_addr,
          teacher_phone: this.editTeacherForm.value.teacher_phone,
          teacher_alt_phone: this.editTeacherForm.value.teacher_alt_phone,
          teacher_standards: this.editTeacherForm.value.teacher_standards,
          teacher_email: this.editTeacherForm.value.teacher_email,
          teacher_subjects: this.editTeacherForm.value.teacher_subjects,
          hour_rate: this.editTeacherForm.value.hour_rate,
          attendance_device_id: this.editTeacherForm.value.attendance_device_id,
          is_active: this.editTeacherForm.value.is_active,
          is_allow_teacher_to_only_mark_attendance: this.editTeacherForm.value.is_allow_teacher_to_only_mark_attendance,
          is_student_mgmt_flag: this.editTeacherForm.value.is_student_mgmt_flag
        });
        return;
      }
    }
  }

  getTeacherInfo() {
    this.ApiService.getSelectedTeacherInfo(this.selectedTeacherId).subscribe(
      (data: any) => {
        this.selectedTeacherInfo = data;
        let setFormData = this.getFormFieldsdata(data);
        this.editTeacherForm.setValue(setFormData);
        this.studentImage = data.photo;
        this.hasIdCard = data.hasIDCard;
      },
      error => {
        console.log(error);
      }
    );
  }

  createEditTeacherForm() {
    this.editTeacherForm = this.fb.group({
      teacher_name: ['', [Validators.required]],
      teacher_curr_addr: [''],
      country_id: [this.countryDetails[0].id],
      teacher_phone: ['', [Validators.required]],
      teacher_alt_phone: [''],
      teacher_standards: [''],
      teacher_email: [''],
      teacher_subjects: [''],
      hour_rate: [''],
      attendance_device_id: [''],
      is_active: [true],
      is_allow_teacher_to_only_mark_attendance: [false],
      is_student_mgmt_flag: [true]
    })
  }

  getFormFieldsdata(data) {
    let dataToBind: any = {};
    dataToBind.teacher_name = data.teacher_name;
    dataToBind.teacher_curr_addr = data.teacher_curr_addr;
    dataToBind.teacher_phone = data.teacher_phone;
    if (data.teacher_alt_phone == "" || data.teacher_alt_phone == null) {
      dataToBind.teacher_alt_phone = '';
    } else {
      dataToBind.teacher_alt_phone = data.teacher_alt_phone;
    }
    dataToBind.teacher_standards = data.teacher_standards;
    dataToBind.teacher_email = data.teacher_email;
    dataToBind.teacher_subjects = data.teacher_subjects;
    dataToBind.hour_rate = data.hour_rate;
    if (data.hour_rate == 0) {
      dataToBind.hour_rate = '';
    }
    if (data.is_active == "Y") {
      dataToBind.is_active = true;
    }
    else {
      dataToBind.is_active = false;
    }
    if (data.is_allow_teacher_to_only_mark_attendance == "Y") {
      dataToBind.is_allow_teacher_to_only_mark_attendance = true;
    }
    else {
      dataToBind.is_allow_teacher_to_only_mark_attendance = false;
    }
    if (data.is_student_mgmt_flag == "1") {
      dataToBind.is_student_mgmt_flag = true;
    }
    else {
      dataToBind.is_student_mgmt_flag = false;
    }
    dataToBind.attendance_device_id = data.attendance_device_id;
    dataToBind.country_id = data.country_id;
    return dataToBind;
  }

  addNewTeacherInfo() {
    let formData = this.editTeacherForm.value;
    if (!this.validateCaseSensitiveEmail(formData.teacher_email)) {
      this.messageToast('error', '', 'Please enter valid email address.');
      return;
    }
    let phoneCheck = this.commonService.phonenumberCheck(formData.teacher_phone, this.maxlength,this.country_id);
    if (phoneCheck == false) {
      this.messageToast('error', '', 'Please enter valid contact number.');
      return;
    }
    if(phoneCheck == 'noNumber') {
      this.messageToast('error', '', 'Please enter valid contact no.');
      return
    }
    if (formData.teacher_alt_phone != '' && formData.teacher_alt_phone != null) {
      if (!(this.commonService.phonenumberCheck(formData.teacher_alt_phone, this.maxlength,this.country_id))) {
        this.messageToast('error', '', 'Please enter valid alternate phone number.');
        return;
      }
    }
    if(formData.teacher_name == "" || formData.teacher_name == null){
      this.messageToast('error', '', 'Teacher Name is required.');
        return;
    }
    if (formData.hour_rate == "" || formData.hour_rate == null) {
      formData.hour_rate = 0;
    }
    if (this.studentImage != null && this.studentImage != "") {
      formData.photo = this.studentImage;
    }
    else {
      formData.photo = null;
    }
    if (formData.is_student_mgmt_flag == true) {
      formData.is_student_mgmt_flag = 1;
    } else {
      formData.is_student_mgmt_flag = 0;
    }
    if (formData.is_active == true) {
      formData.is_active = "Y";
    } else {
      formData.is_active = "N";
    }
    if (formData.is_allow_teacher_to_only_mark_attendance == true) {
      formData.is_allow_teacher_to_only_mark_attendance = "Y";
    } else {
      formData.is_allow_teacher_to_only_mark_attendance = "N";
    }
    formData.is_employee_to_be_create = "N";
    formData.country_id = this.instituteCountryDetObj.id;
    this.ApiService.addNewTeacherDetails(formData).subscribe(
      data => {
        this.messageToast('success', '', 'Teacher added successfully.');
        this.route.navigateByUrl('/view/teacher');
      },
      err => {
        this.messageToast('error', '', err.error.message);
      }
    )
  }

  addOrEditFun() {
    if (this.selectedTeacherId == undefined) {
      this.addNewTeacherInfo();
    }
    else {
      this.saveTeacherInfo();
    }
  }

  saveTeacherInfo() {
    let formData = this.editTeacherForm.value;
    if (!this.validateCaseSensitiveEmail(formData.teacher_email)) {
      this.messageToast('error', '', 'Please enter valid email address.');
      return;
    }
    let phoneCheck = this.commonService.phonenumberCheck(formData.teacher_phone, this.maxlength,this.country_id);
    if (phoneCheck == false) {
      this.messageToast('error', '', 'Please enter valid contact number.');
      return;
    }
    if(phoneCheck == 'noNumber') {
      this.messageToast('error', '', 'Please enter valid contact no.');
      return;
    }
    if (formData.teacher_alt_phone != '' && formData.teacher_alt_phone != null) {
      if (!(this.commonService.phonenumberCheck(formData.teacher_alt_phone, this.maxlength,this.country_id))) {
        this.messageToast('error', '', 'Please enter valid alternate phone number.');
        return;
      }
    }
    if(formData.teacher_name == "" || formData.teacher_name == null){
      this.messageToast('error', '', 'Teacher Name is required.');
        return;
    }
    if (formData.hour_rate == "" || formData.hour_rate == null) {
      formData.hour_rate = "0";
    }
    if (this.studentImage != null || this.studentImage != "") {
      formData.photo = this.studentImage;
    }
    else {
      formData.photo = null;
    }
    if (formData.is_student_mgmt_flag == true) {
      formData.is_student_mgmt_flag = 1;
    } else {
      formData.is_student_mgmt_flag = 0;
    }
    if (formData.is_active == true) {
      formData.is_active = "Y";
    } else {
      formData.is_active = "N";
    }
    if (formData.is_allow_teacher_to_only_mark_attendance == true) {
      formData.is_allow_teacher_to_only_mark_attendance = "Y";
    } else {
      formData.is_allow_teacher_to_only_mark_attendance = "N";
    }

    //this section is to handle id card 

    if (sessionStorage.getItem('Id-card') != null || sessionStorage.getItem('Id-card') != undefined) {
      formData.id_file = sessionStorage.getItem('Id-card');
      formData.id_fileType = sessionStorage.getItem('imageType');
    } else {
      formData.id_file = null;
      formData.id_fileType = "";
    }
    this.ApiService.saveEditTeacherInformation(this.selectedTeacherInfo.teacher_id, formData).subscribe(
      data => {
        this.messageToast('success', 'Updated', 'Details Updated successfully.');
        if (sessionStorage.getItem('userType') == '3') {
          this.route.navigateByUrl('/view/dashboard/admin');
        } else {
          this.route.navigateByUrl('/view/teacher');
        }
      },
      err => {
        this.messageToast('error', '', err.error.message);
      }
    )
  }

  onChangeIdCardUpload() {
    this.hasIdCard = 'Y';
    let fileBrowser = this.idCardTeacher.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      sessionStorage.setItem('imageType', fileBrowser.files[0].type.split('/')[1]);
      let reader = new FileReader();
      reader.readAsDataURL(fileBrowser.files[0]);
      reader.onload = () => {
        sessionStorage.setItem('Id-card', (<string>reader.result).split(',')[1]);
      }
    }
  }

  downloadIdCard() {
    this.ApiService.downloadDocument(this.selectedTeacherId).subscribe(
      (res: any) => {
        // this.idCardImg.nativeElement.src = 'data:image/png;base64,' + res.document;
        this.anchTag.nativeElement.href = 'data:image/png;base64,' + res.document;
        this.anchTag.nativeElement.download = res.docTitle;
        this.anchTag.nativeElement.click();
      },
      err => {
        this.messageToast('error', '', err.error.message);
      }
    )
  }

  messageToast(errorType, errorTitle, errorMeassage) {
    let data = {
      type: errorType,
      title: errorTitle,
      body: errorMeassage
    }
    this.toastCtrl.popToast(data);
  }

  validateCaseSensitiveEmail(email) {
    if (email != "" && email != null) {
      var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,9})+$/;
      if (reg.test(email)) {
        return true;
      }
      else {
        return false;
      }
    } else {
      return true;
    }
  }

  validateNumber(inputtxt, maxlength) {
    console.log(maxlength);
    console.log(inputtxt);
    if (inputtxt.length == maxlength) {
      return true;
    }
    else {
      return false;
    }
  }

  setImage(e) {
    this.studentImage = e;
  }

  updateIdCard($event) {
    $event.preventDefault();
    this.idCardTeacher.nativeElement.click();
  }

}