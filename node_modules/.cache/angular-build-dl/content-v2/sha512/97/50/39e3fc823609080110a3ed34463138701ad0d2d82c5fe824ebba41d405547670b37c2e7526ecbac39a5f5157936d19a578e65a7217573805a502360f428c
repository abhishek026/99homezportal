(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teacher-teacher-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-add/teacher-add.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-add/teacher-add.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clearfix\" style=\"padding: 2%;\">\n  <div class=\"row\">\n    <h2 class=\"pull-left\" style=\"margin-left:15px\">Add Teacher</h2>\n  </div>\n  <aside class=\"c-lg-6 c-md-6 c-sm-6\">\n    <div class=\"pull-left\">\n      <form [formGroup]=\"addTeacherForm\" novalidate (ngSubmit)=\"addNewTeacherInfo()\">\n        <div class=\"row field-wrapper\">\n          <label for=\"name\">Teacher Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" formControlName=\"teacher_name\" name=\"name\">\n          <div\n            *ngIf=\"addTeacherForm.controls['teacher_name'].invalid && (addTeacherForm.controls['teacher_name'].dirty || addTeacherForm.controls['teacher_name'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"addTeacherForm.controls['teacher_name'].hasError('required')\">\n              Teacher Name is required.\n            </div>\n          </div>\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"contNumber\">Contact Number\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" maxlength=\"10\" class=\"form-ctrl\" formControlName=\"teacher_phone\" name=\"contNumber\">\n\n          <div\n            *ngIf=\"addTeacherForm.controls['teacher_phone'].invalid && (addTeacherForm.controls['teacher_phone'].dirty || addTeacherForm.controls['teacher_phone'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"addTeacherForm.controls['teacher_phone'].hasError('required')\">\n              Contact Number is required.\n            </div>\n            <div *ngIf=\"addTeacherForm.controls['teacher_phone'].hasError('minlength')\">\n              Contact Number is not valid.\n            </div>\n            <div *ngIf=\"addTeacherForm.controls['teacher_phone'].hasError('maxlength')\">\n              Contact Number is not valid.\n            </div>\n          </div>\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"emailID\">Email Id\n          </label>\n          <input type=\"email\" class=\"form-ctrl\" name=\"emailID\" pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z]+\\.[a-zA-Z.]{2,5}$\"\n            formControlName=\"teacher_email\">\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"CurrentAddress\">Current Address\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" formControlName=\"teacher_curr_addr\" name=\"CurrentAddress\">\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"alternateNo\">Alternate Contact Number\n          </label>\n          <input type=\"text\" maxlength=\"10\" class=\"form-ctrl\" name=\"alternateNo\" formControlName=\"teacher_alt_phone\">\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"standard\">Standard\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" name=\"standard\" formControlName=\"teacher_standards\">\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"subject\">Subjects\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" name=\"subject\" formControlName=\"teacher_subjects\">\n\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"salary\">Salary (Per Hour)\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" name=\"salary\" formControlName=\"hour_rate\">\n\n        </div>\n        <div class=\"row field-wrapper\" *ngIf=\"enableBiometric == '1'\">\n          <label for=\"biometric\">Attendance Card ID\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" name=\"biometric\" formControlName=\"attendance_device_id\">\n\n        </div>\n        <div class=\"extra-margin\" style=\"margin-top: 15px;\">\n\n          <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\">\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"isActive\" formControlName=\"is_active\" class=\"form-checkbox\">\n              <label for=\"isActive\">Is Active</label>\n            </div>\n          </div>\n\n          <!-- <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\">\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"allow\" formControlName=\"is_allow_teacher_to_only_mark_attendance\" class=\"form-checkbox\">\n              <label for=\"allow\">Allow faculty to only mark attendance</label>\n            </div>\n          </div> -->\n\n\n          <!-- <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\">\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"markAttendance\" formControlName=\"is_student_mgmt_flag\" class=\"form-checkbox\">\n              <label for=\"markAttendance\">Allow faculty to view Contact details of student</label>\n            </div>\n          </div> -->\n        </div>\n        <div class=\"row\">\n          <div class=\"pull-right\" style=\"margin-top: 10px;\">\n            <button routerLink=\"/view/course/setup/teacher\" class=\"btn\">Cancel</button>\n            <button [disabled]='!addTeacherForm.valid' class=\"btn fullBlue\" style=\"font-size: 16px;\"\n              type=\"submit\">Save</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </aside>\n  <aside class=\"c-lg-6 c-md-6 c-sm-6\">\n    <proctur-image [serverImg]=\"studentImage\" [containerWidth]=\"containerWidth\" (setImage)=\"setImage($event)\">\n\n    </proctur-image>\n  </aside>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-edit/teacher-edit.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-edit/teacher-edit.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w96\">\n  <form [formGroup]=\"editTeacherForm\">\n    <div class=\"flex2\">\n      <div class=\"w47\">\n        <div class=\"flex_box h100\">\n          <div class=\"w20\">\n            <span class=\"label top30\">Profile Picture</span>\n          </div>\n          <div class=\"w40\" style=\"display: flex;\">\n            <div lass=\"content_img\">\n            <div class=\"container1 top-10\">\n              <proctur-image [serverImg]=\"studentImage\" [containerWidth]=\"containerWidth\"\n              [containerHeight]=\"containerHeight\" (setImage)=\"setImage($event)\">\n            </proctur-image>\n            </div>\n            </div>\n              <div class=\"caption\">\n                <p>Add image</p>\n            </div>\n          </div>\n          <div class=\"w40\"></div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">Teacher Name <span class=\"text-danger\">*</span></span>\n          </div>\n          <div class=\"w80\">\n            <input type=\"text\" class=\"form-control input\" formControlName=\"teacher_name\" name=\"name\"\n              placeholder=\"Teacher Name\">\n            <div\n              *ngIf=\"editTeacherForm.controls['teacher_name'].invalid && (editTeacherForm.controls['teacher_name'].dirty || editTeacherForm.controls['teacher_name'].touched)\"\n              class=\"alert alert-danger\">\n              <div *ngIf=\"editTeacherForm.controls['teacher_name'].hasError('required')\">\n                Teacher Name is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">Email Id</span>\n          </div>\n          <div class=\"w80\">\n            <input type=\"text\" class=\"form-control input\" formControlName=\"teacher_email\" placeholder=\"Email Id\">\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">Date Of Birth</span>\n          </div>\n          <div class=\"w80 field-wrapper datePickerBox\">\n            <input type=\"text\" class=\"form-control chatbox-input\" readonly=\"true\" formControlName=\"dob\" name=\"dob\"\n              bsDatepicker />\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">Current<br>Address</span>\n          </div>\n          <div class=\"w80\">\n            <textarea class=\"form-control input h87\" formControlName=\"teacher_curr_addr\"\n              placeholder=\"Current Address\"></textarea>\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">Salary (Per Hour)</span>\n          </div>\n          <div class=\"w80\">\n            <input type=\"text\" class=\"form-control input\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" formControlName=\"hour_rate\" placeholder=\"Salary\">\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">Document Title</span>\n          </div>\n          <div class=\"w80\">\n            <input type=\"text\" id=\"title\" formControlName=\"title\" class=\"form-control input\" name=\"title\"\n              [maxlength]=\"30\" />\n          </div>\n        </div>\n        <div *ngIf=\"selectedFiles?.length || uploadedFileData?.length\" style=\"padding: 0;margin-top: 10px;\"\n          class=\"row box-shadow-lite\">\n          <div class=\"document_header\">\n            <div class=\"uploadedData\">File Name</div>\n            <div style=\"width: 25%;float: left;\"></div>\n          </div>\n          <div class=\"document_data\" *ngFor='let data of selectedFiles;let i = index'\n            style=\"height: 30px;border-bottom: 1px solid #ccc;margin-bottom: 5px;\">\n            <div style=\"padding-top: 10px;\" class=\"uploadedData\">{{data.title}} </div>\n            <div style=\"width: 25%;float: left;text-align: right;padding-top: 10px;\">\n              <i class=\"fa fa-trash\" style=\"font-size: 17px;  color:red;margin-right: 10px;cursor: pointer;\"\n                title=\"Delete File\" (click)=\"deletefile(data,i)\"></i>\n            </div>\n          </div>\n          <div class=\"document_data\" *ngFor='let data of uploadedFileData;let i = index'\n            style=\"height: 30px;border-bottom: 1px solid #ccc;margin-bottom: 5px;\">\n            <div style=\"padding-top: 10px;\" class=\"uploadedData\">{{data.title}} </div>\n            <div style=\"width: 25%;float: left;text-align: right;padding-top: 10px;\">\n              <i class=\"fa fa-trash\" style=\"font-size: 17px;  color:red;margin-right: 10px;cursor: pointer;\"\n                title=\"Delete File\" (click)=\"deleteExistingUploadedfileAPI(data.id)\"></i>\n              <a class=\"fa fa-download\" id=\"downloadFile\"\n                style=\"font-size: 17px; color: #0084f6; margin-left: 1%;cursor: pointer;\" title=\"Download File\"\n                (click)=\"downloadFile(data)\"></a>\n              <a id=\"downloadFileClick\" class=\"hide\"></a>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"flex_box\">\n        <div class=\"w20\">\n          <span class=\"label\">Document Title</span>\n        </div>\n        <div class=\"w80\">\n          <input type=\"text\" name=\"\" class=\"input\" placeholder=\"abc.pdf\">\n        </div>\n      </div>       -->\n      </div>\n      <div class=\"w47\">\n        <div class=\"inner_flex2 h100 top30\">\n          <div class=\"w30\">\n            <input class=\"hide\" type=\"file\" #idCardUpload accept=\"image/gif,image/jpeg,image/jpg,image/png\"\n              (change)=\"onChangeIdCardUpload()\">\n            <input *ngIf=\"(hasIdCard == 'Y')\" class=\"blue_button h35\" type=\"button\" id=\"yourBtn\" value=\"Update Id-Card\"\n              (click)=\"updateIdCard($event)\">\n            <input *ngIf=\"(hasIdCard == 'N')\" class=\"blue_button h35\" type=\"button\" id=\"yourBtn\" value=\"Upload Id-Card\"\n              (click)=\"updateIdCard($event)\">\n          </div>\n          <div class=\"w70\" *ngIf=\"selectedTeacherId\">\n            <span class=\"\">\n              <img style=\"cursor: pointer;\" (click)=\"downloadIdCard()\" src=\"../../../../../../assets/images/course/image105.svg\">\n              <span (click)=\"downloadIdCard()\" style=\"cursor: pointer;\" class=\"id-card-text\" >Download id-Card</span>\n              <a #uploadImageAnchor class=\"hide\"></a>\n            </span>\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">Contact No. <span class=\"text-danger\">*</span></span>\n          </div>\n          <div class=\"w20\">\n            <span class=\"countryCallingCode\">\n              <select id=\"country_id\" style=\"margin: 8px 0;\" class=\"form-control chatbox-select\"\n                formControlName=\"country_id\" name=\"country\"\n                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" [disabled]=\"countryDetails.length<=1\"\n                (change)=\"onChangeObj($event.target.value)\" style=\"margin: 8px 0;padding: 0\">\n                <option value=\"\"></option>\n                <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                  {{data.country_code}} +{{data.country_calling_code}}\n                </option>\n              </select>\n            </span>\n          </div>\n          <div class=\"w60\">\n            <input type=\"text\" class=\"form-control input\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" formControlName=\"teacher_phone\" placeholder=\"Contact No.\">\n            <div\n              *ngIf=\"editTeacherForm.controls['teacher_phone'].invalid && (editTeacherForm.controls['teacher_phone'].dirty || editTeacherForm.controls['teacher_phone'].touched)\"\n              class=\"alert alert-danger\">\n              <div *ngIf=\"editTeacherForm.controls['teacher_phone'].hasError('required')\">\n                Contact Number is required.\n              </div>\n              <div *ngIf=\"editTeacherForm.controls['teacher_phone'].hasError('minlength')\">\n                Contact Number is not valid.\n              </div>\n              <div *ngIf=\"editTeacherForm.controls['teacher_phone'].hasError('maxlength')\">\n                Contact Number is not valid.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">Date of joining</span>\n          </div>\n          <div class=\"w80 field-wrapper datePickerBox\">\n            <input type=\"text\" class=\"form-control chatbox-input\" readonly=\"true\" formControlName=\"date_of_joining\"\n              name=\"date_of_joining\" bsDatepicker />\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">Alternate No.</span>\n          </div>\n          <div class=\"w20\">\n            <span class=\"countryCallingCode\">\n              <select id=\"country_id\" style=\"margin: 8px 0;\" class=\"form-control chatbox-select\"\n                formControlName=\"country_id\" name=\"country\"\n                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" [disabled]=\"countryDetails.length<=1\"\n                (change)=\"onChangeObj($event.target.value)\" style=\"margin: 8px 0;padding: 0\">\n                <option value=\"\"></option>\n                <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                  {{data.country_code}} +{{data.country_calling_code}}\n                </option>\n              </select>\n            </span>\n          </div>\n          <div class=\"w60\">\n            <input type=\"text\" class=\"form-control input\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" formControlName=\"teacher_alt_phone\" placeholder=\"Alternate No.\">\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">{{(type == 'batch') ? 'Master Course' : 'Standard'}}</span>\n          </div>\n          <div class=\"w80\">\n            <ng-multiselect-dropdown class=\"container\" placeholder=\"{{(type == 'batch') ? 'Select Master Course' : 'Select Standard'}}\" [settings]=\"standardSetting\"\n              [data]=\"StandardData\" formControlName=\"selectedStandardList\" (ngModelChange)=\"getSubjects($event)\">\n            </ng-multiselect-dropdown>\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n            <span class=\"label\">{{(type == 'batch') ? 'Course' : 'Subject'}}</span>\n          </div>\n          <div class=\"w80\">\n            <ng-multiselect-dropdown class=\"container\" placeholder=\"{{(type == 'batch') ? 'Select Course' : 'Select Subject'}}\" [settings]=\"subjectSetting\"\n              [data]=\"subjectData\" formControlName=\"selectedSubjectList\">\n            </ng-multiselect-dropdown>\n          </div>\n        </div>\n        <div class=\"flex_box\">\n          <div class=\"w20\">\n          </div>\n          <div class=\"w80\">\n            <input type=\"file\" class=\"form-control input\" id=\"uploadFileControl\" name=\"uploadFileBox\"\n              style=\"width: 75%;float: left;\" />\n            <a class=\"btn blue_button\" style=\"float: left;margin-left: 10px;margin-top: 8px;\"\n              (click)=\"uploadHandler();\">Upload</a>\n          </div>\n        </div>\n        <!-- <div class=\"flex_box hide\">\n          <div class=\"w20\">\n            <span class=\"label\">Standard</span>\n          </div>\n          <div class=\"w80\">\n            <select class=\"input-select\">\n              <option>10th</option>\n              <option></option>\n            </select>\n          </div>\n        </div> -->\n        <!-- <div class=\"documentUploadDiv\">\n        <div class=\"row\" style=\"padding-bottom:5px;padding-top: 5px;\">\n          <div class=\"field-wrapper\">\n            <label>Document Title</label>\n            <input type=\"text\" id=\"title\" formControlName=\"title\" class=\"form-ctrl\" name=\"title\"\n              [maxlength]=\"30\" />\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"field-wrapper\">\n            <label>Choose File(Ctrl + ) To Upload</label>\n            <input type=\"file\" class=\"form-ctrl\" id=\"uploadFileControl\" name=\"uploadFileBox\"\n              style=\"width: 75%;float: left;\" />\n            <a class=\"btn fullBlue\" style=\"float: left;margin-left:10px ;\"\n              (click)=\"uploadHandler();\">Upload</a>\n          </div>\n        </div>\n      </div> -->\n\n        <!-- <div class=\"flex_box\">\n        <input type=\"file\" name=\"\"  class=\"input file\" placeholder=\" Browse File\">\n        <button class=\"blue_button mt-9 h35\" >Upload</button>\n      </div> -->\n      </div>\n    </div>\n    <!-- main form ends -->\n    <div class=\"borderbottom\"></div>\n    <div class=\"row\">\n      <div class=\"col-lg-9 field-checkbox-wrapper\">\n        <!-- <div *ngIf=\"isShoweOnlineExam\" style=\"width: 30%;float: left;\" class=\"right field-checkbox-wrapper\">\n          <input type=\"checkbox\" style=\"appearance: checkbox\" value=\"\" name=\"allowExamDesk\"\n            formControlName=\"allow_exam_desk_login\">\n          <span style=\"margin-left: 5px;\" class=\"allow\">Allow Exam Desk Login</span>\n        </div> -->\n        <div class=\"field-checkbox-wrapper\" *ngIf=\"selectedTeacherId\" style=\"width: 30%;float: left;\">\n          <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"isActive\" formControlName=\"is_active\"\n                  class=\"form-checkbox\">\n              <label for=\"isActive\">Is Active</label>\n          </div>\n      </div>\n      <div class=\"field-checkbox-wrapper\" *ngIf=\"enable_ip_lock_feature=='Y'\" style=\"padding-left: 0;width: 30%;float: left;\">\n          <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"is_office_only_access\" id=\"is_office_only_access\"\n                  formControlName=\"is_office_only_access\" class=\"form-checkbox\">\n              <label for=\"is_office_only_access\">Enable IP Lock Functionality</label>\n          </div>\n      </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <span class=\"right\">\n          <button routerLink=\"/view/course/teacher\" class=\"cancel\">Cancel</button>\n          <button (click)=\"addOrEditFun()\" class=\"blue_button\">Save</button>\n        </span>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- <div class=\"clearFix\" style=\"padding-right: 2%;\">\n    <section class=\"middle-top mb0 clearFix\" style=\"margin-bottom: 10px;\">\n        <h1 class=\"pull-left\" *ngIf=\"selectedTeacherId==undefined\">\n            Add Faculty\n        </h1>\n        <h1 class=\"pull-left\" *ngIf=\"selectedTeacherId != undefined\">\n            Edit Faculty\n        </h1>\n    </section>\n\n    <section class=\"middle-main clearFix\">\n\n        <aside class=\"c-lg-6 c-md-6 c-sm-6\" style=\"width: 30%;margin-right: 5%;\">\n            <div class=\"pull-left\">\n                <form [formGroup]=\"editTeacherForm\" novalidate (ngSubmit)=\"addOrEditFun()\">\n                    <div class=\"row field-wrapper\">\n                        <label for=\"name\">Faculty Name\n                            <span class=\"text-danger\">*</span>\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" formControlName=\"teacher_name\" name=\"name\">\n\n                        <div *ngIf=\"editTeacherForm.controls['teacher_name'].invalid && (editTeacherForm.controls['teacher_name'].dirty || editTeacherForm.controls['teacher_name'].touched)\"\n                            class=\"alert alert-danger\">\n                            <div *ngIf=\"editTeacherForm.controls['teacher_name'].hasError('required')\">\n                                Faculty Name is required.\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row field-wrapper\">\n                        <label for=\"contNumber\">Contact Number\n                            <span class=\"text-danger\">*</span>\n                        </label><br>\n                        <span class=\"countryCallingCode\">\n                            <select id=\"country_id\" class=\"form-ctrl\" formControlName=\"country_id\" name=\"country\"\n                                [disabled]=\"countryDetails.length<=1\" (change)=\"onChangeObj($event.target.value)\"\n                                style=\"padding: 0;margin: 8px 0;\">\n                                <option value=\"\"></option>\n                                <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                                    {{data.country_code}} +{{data.country_calling_code}}\n                                </option>\n                            </select>\n                        </span>\n\n                        <input type=\"text\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                            style=\"width: 70%\" class=\"form-ctrl\" formControlName=\"teacher_phone\" name=\"contNumber\"\n                            required>\n\n                        <div *ngIf=\"editTeacherForm.controls['teacher_phone'].invalid && (editTeacherForm.controls['teacher_phone'].dirty || editTeacherForm.controls['teacher_phone'].touched)\"\n                            class=\"alert alert-danger\">\n                            <div *ngIf=\"editTeacherForm.controls['teacher_phone'].hasError('required')\">\n                                Contact Number is required.\n                            </div>\n                            <div *ngIf=\"editTeacherForm.controls['teacher_phone'].hasError('minlength')\">\n                                Contact Number is not valid.\n                            </div>\n                            <div *ngIf=\"editTeacherForm.controls['teacher_phone'].hasError('maxlength')\">\n                                Contact Number is not valid.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row field-wrapper\">\n                        <label for=\"emailID\">Email Id\n                        </label>\n                        <input type=\"email\" class=\"form-ctrl\" name=\"emailID\" formControlName=\"teacher_email\">\n                    </div>\n                    <div class=\"row field-wrapper\">\n                        <label for=\"CurrentAddress\">Current Address\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" formControlName=\"teacher_curr_addr\" name=\"CurrentAddress\">\n\n                    </div>\n\n                    <div class=\"row field-wrapper datePickerBox\">\n                        <label for=\"CurrentAddress\">Date of Birth\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" readonly=\"true\" formControlName=\"dob\" name=\"dob\"\n                            bsDatepicker />\n                    </div>\n\n                    <div class=\"row field-wrapper datePickerBox\">\n                        <label for=\"CurrentAddress\">Date of Joining\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" readonly=\"true\" formControlName=\"date_of_joining\"\n                            name=\"date_of_joining\" bsDatepicker />\n                    </div>\n\n                    <div class=\"row field-wrapper\">\n                        <label for=\"alternateNo\">Alternate Contact Number\n                        </label><br>\n                        <span class=\"countryCallingCode\">\n                            <select id=\"country_id\" class=\"form-ctrl\" formControlName=\"country_id\" name=\"country\"\n                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                [disabled]=\"countryDetails.length<=1\" (change)=\"onChangeObj($event.target.value)\"\n                                style=\"padding: 0;margin: 8px 0;\">\n                                <option value=\"\"></option>\n                                <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                                    {{data.country_code}} +{{data.country_calling_code}}\n                                </option>\n                            </select>\n                        </span>\n                        <input type=\"text\" style=\"width: 70%\" class=\"form-ctrl\" name=\"alternateNo\"\n                            formControlName=\"teacher_alt_phone\">\n\n                    </div>\n                    <div class=\"field-wrapper row student_list_container\">\n                          // changes by Nalini - to handle school model conditions \n                        <label for=\"students\">Standard</label>\n                        <ng-multiselect-dropdown class=\"container\"\n                          placeholder=\"Select standard\"\n                          [settings]=\"standardSetting\"\n                          [data]=\"StandardData\"\n                          formControlName =\"selectedStandardList\"\n                          (ngModelChange)=\"getSubjects($event)\">\n                        </ng-multiselect-dropdown>\n                      </div>\n                      <div class=\"field-wrapper row student_list_container\" style=\"padding-top: 0;\">\n                        // changes by Nalini - to handle school model conditions \n                        <label for=\"students\">Subject</label>\n                        <ng-multiselect-dropdown class=\"container\"\n                          placeholder=\"Select Subject\"\n                          [settings]=\"subjectSetting\"\n                          [data]=\"subjectData\"\n                          formControlName =\"selectedSubjectList\">\n                        </ng-multiselect-dropdown>\n                      </div>\n\n                      <div class=\"documentUploadDiv\">\n                        <div class=\"row\" style=\"padding-bottom:5px;padding-top: 5px;\">\n                          <div class=\"field-wrapper\">\n                            <label>Document Title</label>\n                            <input type=\"text\" id=\"title\" formControlName=\"title\" class=\"form-ctrl\" name=\"title\"\n                              [maxlength]=\"30\" />\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"field-wrapper\">\n                            <label>Choose File(Ctrl + ) To Upload</label>\n                            <input type=\"file\" class=\"form-ctrl\" id=\"uploadFileControl\" name=\"uploadFileBox\"\n                              style=\"width: 75%;float: left;\" />\n                            <a class=\"btn fullBlue\" style=\"float: left;margin-left:10px ;\"\n                              (click)=\"uploadHandler();\">Upload</a>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div *ngIf=\"selectedFiles?.length || uploadedFileData?.length\" style=\"padding: 0;\" class=\"row box-shadow-lite\">\n                        <div class=\"document_header\">\n                          <div class=\"uploadedData\">File Name</div>\n                          <div style=\"width: 25%;float: left;\"></div>\n                        </div>\n                        <div class=\"document_data\" *ngFor='let data of selectedFiles;let i = index'\n                          style=\"height: 30px;border-bottom: 1px solid #ccc;margin-bottom: 5px;\">\n                          <div style=\"padding-top: 10px;\" class=\"uploadedData\">{{data.title}} </div>\n                          <div style=\"width: 25%;float: left;text-align: right;padding-top: 10px;\">\n                            <i class=\"fa fa-trash\" style=\"font-size: 17px;  color:red;margin-right: 10px;cursor: pointer;\"\n                              title=\"Delete File\" (click)=\"deletefile(data,i)\"></i>\n                          </div>\n                        </div>\n                        <div class=\"document_data\" *ngFor='let data of uploadedFileData;let i = index'\n                          style=\"height: 30px;border-bottom: 1px solid #ccc;margin-bottom: 5px;\">\n                          <div style=\"padding-top: 10px;\" class=\"uploadedData\">{{data.title}} </div>\n                          <div style=\"width: 25%;float: left;text-align: right;padding-top: 10px;\">\n                            <i class=\"fa fa-trash\" style=\"font-size: 17px;  color:red;margin-right: 10px;cursor: pointer;\"\n                              title=\"Delete File\" (click)=\"deleteExistingUploadedfileAPI(data.id)\"></i>\n                              <a class=\"fa fa-download\" id=\"downloadFile\"\n                            style=\"font-size: 17px; color: #0084f6; margin-left: 1%;cursor: pointer;\" title=\"Download File\"\n                            (click)=\"downloadFile(data)\"></a>\n                            <a id=\"downloadFileClick\" class=\"hide\"></a>\n                          </div>\n                        </div>\n                      </div>\n\n                    <div class=\"row field-wrapper\">\n                        <label for=\"salary\">Salary (Per Hour)\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" name=\"salary\" formControlName=\"hour_rate\">\n\n                    </div>\n                    <div class=\"row field-wrapper\" *ngIf=\"enableBiometric == '1'\"\n                        [ngClass]=\"{'has-value' : attendance_device_id !=''}\">\n                        <label for=\"biometric\">Attendance Card ID\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" name=\"biometric\" formControlName=\"attendance_device_id\">\n\n                    </div>\n                    <div class=\"extra-margin\" style=\"margin-top: 15px;\">\n\n                        <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\">\n                            <div class=\"field-checkbox-wrapper\">\n                                <input type=\"checkbox\" value=\"\" name=\"isActive\" formControlName=\"is_active\"\n                                    class=\"form-checkbox\">\n                                <label for=\"isActive\">Is Active</label>\n                            </div>\n                        </div>\n\n                        <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\" *ngIf=\"isShoweOnlineExam\">\n                            <div class=\"field-checkbox-wrapper\">\n                                <input type=\"checkbox\" value=\"\" name=\"allowExamDesk\"\n                                    formControlName=\"allow_exam_desk_login\" class=\"form-checkbox\">\n\n                                <label for=\"allowExamDesk\">Allow Exam Desk Login</label>\n                            </div>\n                        </div>\n\n                        <div class=\"row field-checkbox-wrapper\" *ngIf=\"enable_ip_lock_feature=='Y'\"\n                            style=\"padding-left: 0;\">\n                            <div class=\"field-checkbox-wrapper\">\n                                <input type=\"checkbox\" value=\"\" name=\"is_office_only_access\" id=\"is_office_only_access\"\n                                    formControlName=\"is_office_only_access\" class=\"form-checkbox\">\n                                <label for=\"is_office_only_access\">Enable IP Lock Functionality</label>\n                            </div>\n                        </div>\n\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"pull-right\" style=\"margin-top: 10px;\">\n                            <button routerLink=\"/view/course/setup/teacher\" class=\"btn\">Cancel</button>\n                            <button class=\"btn fullBlue\" style=\"font-size: 16px;\" type=\"submit\">Save</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </aside>\n        <aside class=\"c-lg-6 c-md-6 c-sm-6\">\n            <div class=\"profileWrapper\">\n                <proctur-image [serverImg]=\"studentImage\" [containerWidth]=\"containerWidth\"\n                    (setImage)=\"setImage($event)\">\n\n                </proctur-image>\n            </div>\n            <div class=\"row\" style=\"margin-top:15%\">\n                <div class=\"c-sm-4 c-md-4 c-lg-4\" style=\"margin-top: 10px;padding-left: 40px\"\n                    *ngIf=\"(hasIdCard == 'Y')\">\n                    <fieldset>\n                        <legend style=\"color: #0084f6;\">Download Id-Card</legend>\n                        <a>\n                            <img #uploadedImage src=\"assets/images/download_doc.jpg\" style=\"width: 30px;\"\n                                (click)=\"downloadIdCard()\" title=\"Download Attachment\">\n                        </a>\n                        <a #uploadImageAnchor class=\"hide\"></a>\n                    </fieldset>\n                </div>\n                <div class=\"c-sm-4 c-md-4 c-lg-4\">\n                    <div class=\"field-wrapper\">\n                        <input class=\"hide\" type=\"file\" #idCardUpload accept=\"image/gif,image/jpeg,image/jpg,image/png\"\n                            (change)=\"onChangeIdCardUpload()\">\n                        <input *ngIf=\"(hasIdCard == 'Y')\" type=\"button\" class=\"btn\" value=\"Update Id-Card\"\n                            (click)=\"updateIdCard($event)\">\n                        <input *ngIf=\"(hasIdCard == 'N')\" type=\"button\" class=\"btn\" value=\"Upload Id-Card\"\n                            (click)=\"updateIdCard($event)\">\n                    </div>\n                </div>\n            </div>\n        </aside>\n\n    </section>\n\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-list/teacher-list.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-list/teacher-list.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"middle-section clearFix\" style=\"padding-right: 2%;margin-top: -6px;\">\n  <section class=\"middle-top mb0 clearFix\">\n    <div id=\"Faculty\" class=\"tab-pane active\">\n      <div class=\"w96\">\n        <div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-12\">\n              <div class=\"row\">\n                <div class=\"col-lg-7 col-12\">\n                </div>\n                <div class=\"col-lg-5 col-12\">\n                  <span class=\"right\">\n                    <input type=\"text\" name=\"\" placeholder=\"Search\" [(ngModel)]=\"searchValue\" (keyup)=\"searchTeacher()\"\n                      class=\"input magnifying-glass\">\n                    <a routerLink='/view/course/teacher/add'><button class=\"search\">Add Teacher</button></a>\n\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n          <div>\n              <table class=\"tableBodyScroll\">\n                  <thead>\n                      <tr>\n                          <td>\n                            Id\n                          </td>\n                          <td>\n                            Teacher Name\n                          </td>\n                          <td>\n                              Contact Number\n                          </td>\n                          <!-- <td>\n                              Subject\n                          </td> -->\n                          <td>\n                              Date Of Joining\n                          </td>\n                          <td>Is Active</td>\n                          <!-- <td *ngIf=\"isShoweOnlineExam\" class=\"center\">Exam Desk Login</td> -->\n                          <td>\n                              <span class=\"right pr-40\">\n                                  Action\n                              </span>\n                          </td>\n                      </tr>\n                  </thead>\n                  <!-- <div  *ngIf=\"teacherList.length != 0 \"> -->  \n                  <tbody style=\"min-height: 65vh;max-height: 65vh;\" *ngIf=\"teacherList?.length\">\n                    <tr style=\"box-shadow:-1px 1px 6px 0px rgb(0 0 0 / 10%)\" id=\"row{{i}}\" (click)=\"rowSelectEvent(i)\" [class.selected]=\"i == selectedRow\" *ngFor=\"let row of teacherList; let i = index; trackBy: i;\">\n                      <td>\n                        {{row.teacher_user_id}}\n                      </td>\n                      <td title=\"{{row.teacher_name}}\">\n                        {{(row.teacher_name?.length>20) ?(row.teacher_name | slice:0:20 ) + '...' :(row.teacher_name) }}\n                      </td>\n                      <td>\n                        {{row.teacher_phone}}\n                      </td>\n                      <!-- <td *ngIf=\"row.teacher_subjects!=''\">\n                        {{row.teacher_subjects}}\n                      </td>\n                      <td *ngIf=\"row.teacher_subjects==''\">\n                        -\n                      </td> -->\n                      <td>\n                        <span *ngIf=\"row.date_of_joining==''\"> - </span>\n                        <span *ngIf=\"row.date_of_joining!=''\">&nbsp;&nbsp;{{row.date_of_joining}}</span>\n                      </td>\n                      <td>\n                        <span *ngIf=\"row?.is_active == 'Y'\" class=\"yes\">Yes</span>\n                        <span *ngIf=\"row?.is_active == 'N'\" class=\"no\">No</span>\n                      </td>\n                      <!-- <td *ngIf=\"isShoweOnlineExam\">\n                        {{row.allow_exam_desk_login}}\n                      </td> -->\n                      <td>\n                        <span class=\"right pr-40\">\n                          <a [routerLink]=\"['/view/course/teacher/edit',  row.teacher_id]\"\n                              style=\"vertical-align: middle;cursor: pointer;\">\n                              <img src=\"../../../../assets/images/EDit.png\">\n                          </a>\n                          <a aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteModal\"\n                          (click)=\"deleteTeacherDeatils(row)\" style=\"cursor: pointer;\" class=\"pl-10\">\n                              <i style=\"color: red;font-size: 18px;font-weight: 400;\"\n                                  class=\"fa fa-trash\"></i>\n                          </a>\n                      </span>\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tbody style=\"min-height: 65vh;max-height: 65vh;text-align: center;\" *ngIf=\"!teacherList?.length && !auth.isRippleLoad.getValue()\">\n                    <img src=\"../../../assets/images/course/teacher_no_data.png\">\n                  </tbody>\n                <!-- </div> -->\n              </table>\n          </div>\n      </div>\n    </div>\n  </section>\n\n  <section style=\"margin-top: 10px;\">\n    <!-- Paginator Here -->\n    <div class=\"filter-res pagination\" style=\"width: 100%;margin-top: 0px;margin-bottom: 0;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"studentdisplaysize\" [count]=\"totalRow\" [sizeArr]=\"sizeArr\"\n          (sizeChange)=\"updateTableBatchSize($event)\">\n        </pagination>\n      </div>\n    </div>\n  </section>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-view/teacher-view.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-view/teacher-view.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"middle-section clearFix\" style=\"padding: 2%;\">\n  <section class=\"middle-top mb0 clearFix\" style=\"margin-bottom: 10px;\">\n    <h1 class=\"pull-left\">\n      Teacher Profile\n    </h1>\n  </section>\n\n  <section class=\"middle-main clearFix\">\n    <div class=\"c-sm-12\">\n      <div class=\"c-sm-3\">\n        <proctur-image [containerHeight]=\"containerHeight\" [readonly]=\"readonly\" [serverImg]=\"studentImage\"\n          [containerWidth]=\"containerWidth\" (setImage)=\"setImage($event)\">\n\n        </proctur-image>\n      </div>\n      <div class=\"c-sm-9\" *ngIf=\"selectedTeacherInformation\">\n        <div class=\"c-sm-4\">\n          <div class=\"extraMargin\">\n            <label>Name:</label>\n            {{selectedTeacherInformation.teacher_name}}\n          </div>\n          <div class=\"extraMargin\">\n            <label>Email:</label>\n            {{selectedTeacherInformation.teacher_email}}\n          </div>\n          <div class=\"extraMargin\">\n            <label>Contact Number:</label>\n            {{selectedTeacherInformation.teacher_phone}}\n          </div>\n        </div>\n        <div class=\"c-sm-3\">\n          <div class=\"extraMargin\">\n            <label>Standard:</label>\n            {{selectedTeacherInformation.teacher_standards}}\n          </div>\n          <div class=\"extraMargin\">\n            <label>Subject:</label>\n            {{selectedTeacherInformation.teacher_subjects}}\n          </div>\n        </div>\n        <div class=\"c-sm-2\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"clearFix add-edit\">\n      <a (click)=\"toggleFilter()\">\n        <i id=\"showAddBtn\" class=\"addBtnClass\" style=\"border:none;\">+</i>\n        <i id=\"showCloseBtn\" style=\"display:none ; border:none;\" class=\"closeBtnClass\">-</i>\n        <span>Filter</span>\n      </a>\n    </div>\n    <section class=\"clearFix create-standard-form\" *ngIf=\"advanceFilter\">\n      <div class=\"row create-standard-field\">\n        <div class=\"c-sm-2\">\n        </div>\n        <div class=\"c-sm-2\">\n          <div class=\"field-wrapper\">\n            <label for=\"\">Batch</label>\n            <select id=\"\" class=\"form-ctrl\" [(ngModel)]=\"selectedBatch\">\n              <option *ngFor=\"let opt of batchesList\" [value]=\"opt.batch_id\">\n                {{opt.batch_name}}\n              </option>\n            </select>\n\n          </div>\n        </div>\n        <div class=\"c-sm-8 \">\n          <div class=\"field-wrapper datePickerBox c-sm-3 madeDate\">\n            <label for=\"fromDate\">From Date</label>\n            <input type=\"text\" value=\"\" class=\"form-ctrl\" style=\"cursor: pointer;\" name=\"fromDate\"\n              [(ngModel)]=\"selectedFromDate\" bsDatepicker />\n\n            <!-- <span class=\"date-clear\" name=\"fromDate\" (click)=\"clearDate($event)\">Clear</span> -->\n          </div>\n          <div class=\"field-wrapper datePickerBox c-sm-3 madeDate\">\n            <label for=\"createdDate\">To Date</label>\n            <input type=\"text\" value=\"\" class=\"form-ctrl\" style=\"cursor: pointer;\" name=\"createdDate\"\n              [(ngModel)]=\"selectedToDate\" bsDatepicker />\n\n            <!-- <span class=\"date-clear\" name=\"createdDate\" (click)=\"clearDate($event)\">Clear</span> -->\n          </div>\n          <div class=\"c-sm-3\">\n            <button class=\"btn fullBlue\" (click)=\"searchTeacherInfo()\" style=\"margin-top:13%;\">Go</button>\n          </div>\n        </div>\n      </div>\n\n    </section>\n\n    <div>\n      <div>\n        <h2 class=\"pull-left marginTenPixel\">\n          Assigned Batches Details\n          <div class=\"questionInfo pos-rel\">\n            <span class=\"qInfoIcon\">?</span>\n            <div class=\"tooltip-box-field\">\n              Details of Assigned Batches to the teacher.\n            </div>\n          </div>\n        </h2>\n        <!-- <div class=\"c-sm-4\">\n          <button class=\"btn\" (click)=\"exportDetailsInExcel()\">Excel</button>\n          <button class=\"btn\" (click)=\"printBtnClick()\">Print</button>\n        </div> -->\n      </div>\n      <div class=\"common-table\">\n        <div class=\"table table-responsive\" style=\"overflow: hidden;\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  Batch\n                </th>\n                <th>\n                  Total Students\n                </th>\n                <th>\n                  Total Classes Marked\n                </th>\n                <th>\n                  Total Classes Taken\n                </th>\n                <th>\n                  Total Hours\n                </th>\n                <th>\n                  Computed Salary\n                </th>\n                <th>\n                  View Details\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"row{{i}}\" class=\"displayComp\" *ngFor=\"let row of assignedBatchList; let i = index; trackBy: i;\">\n                <td>\n                  {{row.batch_name}}\n                </td>\n                <td>\n                  {{row.total_students}}\n                </td>\n                <td>\n                  {{row.total_classes}}\n                </td>\n                <td>\n                  {{row.total_teacher_classes}}\n                </td>\n                <td>\n                  {{row.total_hours}}\n                </td>\n                <td>\n                  {{row.comp_sal}}\n                </td>\n                <td>\n                  <a style=\"cursor: pointer;\" (click)=\"viewDetailOfBatch(row , i)\">\n                    <i class=\"view-icon\"></i>View\n                  </a>\n                </td>\n              </tr>\n              <tr *ngIf=\"(assignedBatchList.length > 0)\">\n                <td colspan=\"2\" style=\"text-align:center;\">\n                  Total Classes Taken : {{totalClassesTaken}}\n                </td>\n                <td colspan=\"2\" style=\"text-align:center;\">\n                  Total Hours Spent : {{totalHourSpent}}\n                </td>\n                <td colspan=\"4\">\n                </td>\n              </tr>\n              <tr *ngIf=\"(assignedBatchList.length == 0)\">\n                <td colspan=\"8\" style=\"text-align:center;\">\n                  <span>No Assigned Batches</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div>\n        <h2 class=\"pull-left marginTenPixel\">\n          Visiting Batches Details\n          <div class=\"questionInfo pos-rel\">\n            <span class=\"qInfoIcon\">?</span>\n            <div class=\"tooltip-box-field\">\n              Details of Visting Batches to the teacher.\n            </div>\n          </div>\n        </h2>\n      </div>\n      <div class=\"common-table\">\n        <div class=\"table table-responsive\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  Batch\n                </th>\n                <th>\n                  Total Students\n                </th>\n                <th>\n                  Total Classes Taken\n                </th>\n                <th>\n                  Total Hours\n                </th>\n                <th>\n                  Computed Salary\n                </th>\n                <th>\n                  View Details\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"row{{i}}\" *ngFor=\"let row of visitingBatchList; let i = index; trackBy: i;\">\n                <td>\n                  {{row.batch_name}}\n                </td>\n                <td>\n                  {{row.total_students}}\n                </td>\n                <td>\n                  {{row.total_teacher_classes}}\n                </td>\n                <td>\n                  {{row.total_hours}}\n                </td>\n                <td>\n                  {{row.comp_sal}}\n                </td>\n                <td>\n                  <a style=\"cursor: pointer;\" (click)=\"viewDetailOfVisitingBatch(row , i)\">\n                    <i class=\"view-icon\"></i>View\n                  </a>\n                </td>\n              </tr>\n              <tr *ngIf=\"(visitingBatchList.length > 0)\">\n                <td colspan=\"2\" style=\"text-align:center;\">\n                  Total Classes Taken : {{visitingTotalClasses}}\n                </td>\n                <td colspan=\"2\" style=\"text-align:center;\">\n                  Total Hours Spent : {{visitingTotalHour}}\n                </td>\n                <td colspan=\"2\">\n                </td>\n              </tr>\n              <tr *ngIf=\"(visitingBatchList.length == 0)\">\n                <td colspan=\"6\" style=\"text-align:center;\">\n                  <span>No Visiting Batches</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"marginTenPixel\" style=\"text-align: center;\">\n      <button class=\"btn pull-right\" (click)=\"cancelViewDetails()\">Back</button>\n    </div>\n  </section>\n\n</div>\n\n\n\n<!-- Common Popup for Visiting and Assigned Classes PopUp -->\n<!-- =============================================================================== -->\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"teacherTakenClassesPopUp\">\n  <div class=\"popup pos-abs popup-body-container\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"teacherTakenClassesPopupClose()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n          <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n            <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n              <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                transform=\"translate(992.81 305.77) rotate(45)\" />\n              <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                transform=\"translate(978.81 305.77) rotate(45)\" />\n            </g>\n            <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\"\n              transform=\"translate(1012 297)\" />\n          </g>\n        </svg>\n      </span>\n      <div class=\"popup-content teacherPopUpWrapper\">\n        <div *ngIf=\"(assignedOrGuestPopUp ==  'Assigned' )\">\n          <div>\n            <h2>Teacher Classes Taken</h2>\n          </div>\n          <div class=\"popUpTableDiv\">\n            <table>\n              <thead>\n                <tr>\n                  <th>\n                    Date\n                  </th>\n                  <th>\n                    Timing\n                  </th>\n                  <th>\n                    Class\n                  </th>\n                  <th>\n                    Class Taken\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"row{{i}}\" *ngFor=\"let row of teacherTakenClasses; let i = index; trackBy: i;\">\n                  <td>\n                    {{row.attendance_date}}\n                  </td>\n                  <td>\n                    {{row.start_time}} - {{row.end_time}}\n                  </td>\n                  <td>\n                    {{row.custom_class_type}}\n                  </td>\n                  <td>\n                    {{row.is_class_taken}}\n                  </td>\n                </tr>\n                <tr *ngIf=\"(teacherTakenClasses == undefined || teacherTakenClasses == ''  )\">\n                  <td colspan=\"4\">\n                    No data found\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div *ngIf=\"(assignedOrGuestPopUp ==  'Guest' )\">\n          <div>\n            <h2>Classes(Visiting) Taken</h2>\n          </div>\n          <div class=\"popUpTableDiv\">\n            <table>\n              <thead>\n                <tr>\n                  <th>\n                    Date\n                  </th>\n                  <th>\n                    Timing\n                  </th>\n                  <th>\n                    Class\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"row{{i}}\" *ngFor=\"let row of guestBatchList; let i = index; trackBy: i;\">\n                  <td>\n                    {{row.attendance_date}}\n                  </td>\n                  <td>\n                    {{row.start_time}} - {{row.end_time}}\n                  </td>\n                  <td>\n                    {{row.custom_class_type}}\n                  </td>\n                </tr>\n                <tr *ngIf=\"(guestBatchList == undefined || guestBatchList == ''  )\">\n                  <td colspan=\"3\">\n                    No data found\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher-add/teacher-add.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher-add/teacher-add.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.countryCallingCode {\n  float: left;\n  border-left: solid 1px #e2ebee;\n  border-bottom: solid 1px #e2ebee;\n  border-top: solid 1px #e2ebee;\n  padding-bottom: 2%;\n  padding-top: 1%;\n  padding-right: 1%;\n  padding-left: 1%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3RlYWNoZXIvdGVhY2hlci1hZGQvdGVhY2hlci1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7O0VBRUksd0JBQXdCO0VBQ3hCLFNBQVM7QUFBZDs7QUFFQztFQUNHLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZUFBZTtFQUFDLGlCQUFpQjtFQUNqQyxnQkFBZ0I7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvdGVhY2hlci90ZWFjaGVyLWFkZC90ZWFjaGVyLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvLy8vLy8gVHVybiBvZmYgc3Bpbm5lclxuIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbiBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgIG1hcmdpbjogMDtcbiB9XG4gLmNvdW50cnlDYWxsaW5nQ29kZXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICNlMmViZWU7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlMmViZWU7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlMmViZWU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIHBhZGRpbmctdG9wOiAxJTtwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher-add/teacher-add.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher-add/teacher-add.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TeacherAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAddComponent", function() { return TeacherAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/teacherService/teacherApi.service */ "./src/app/services/teacherService/teacherApi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let TeacherAddComponent = /** @class */ (() => {
    let TeacherAddComponent = class TeacherAddComponent {
        constructor(fb, teacherAPIService, route, toastCtrl) {
            this.fb = fb;
            this.teacherAPIService = teacherAPIService;
            this.route = route;
            this.toastCtrl = toastCtrl;
            this.studentImage = '';
            this.containerWidth = "200px";
            this.enableBiometric = 0;
        }
        ngOnInit() {
            this.createAddTeacherForm();
            this.enableBiometric = sessionStorage.getItem('biometric_attendance_feature');
        }
        createAddTeacherForm() {
            this.addTeacherForm = this.fb.group({
                teacher_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                teacher_curr_addr: [''],
                teacher_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
                teacher_alt_phone: [''],
                teacher_standards: [''],
                teacher_email: [''],
                teacher_subjects: [''],
                hour_rate: [''],
                attendance_device_id: [''],
                is_active: [true],
                is_allow_teacher_to_only_mark_attendance: [false],
                is_student_mgmt_flag: [true]
            });
        }
        addNewTeacherInfo() {
            let formData = this.addTeacherForm.value;
            if (!this.validateCaseSensitiveEmail(formData.teacher_email)) {
                this.messageToast('error', '', 'Please enter valid email address.');
                return;
            }
            if (!(this.validateNumber(formData.teacher_phone))) {
                this.messageToast('error', '', 'Please enter valid contact number.');
                return;
            }
            if (formData.teacher_alt_phone != '' && formData.teacher_alt_phone != null) {
                if (!(this.validateNumber(formData.teacher_alt_phone))) {
                    this.messageToast('error', '', 'Please enter valid alternate phone number.');
                    return;
                }
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
            }
            else {
                formData.is_student_mgmt_flag = 0;
            }
            if (formData.is_active == true) {
                formData.is_active = "Y";
            }
            else {
                formData.is_active = "N";
            }
            if (formData.is_allow_teacher_to_only_mark_attendance == true) {
                formData.is_allow_teacher_to_only_mark_attendance = "Y";
            }
            else {
                formData.is_allow_teacher_to_only_mark_attendance = "N";
            }
            formData.is_employee_to_be_create = "N";
            this.teacherAPIService.addNewTeacherDetails(formData).subscribe(data => {
                this.messageToast('success', 'Added', 'Faculty Added Successfully.');
                this.route.navigateByUrl('/view/course/setup/teacher');
            }, err => {
                this.messageToast('error', '', err.error.message);
            });
        }
        messageToast(errorType, errorTitle, errorMeassage) {
            let data = {
                type: errorType,
                title: errorTitle,
                body: errorMeassage
            };
            this.toastCtrl.popToast(data);
        }
        validateCaseSensitiveEmail(email) {
            if (email != '' && email != null) {
                var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if (reg.test(email)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        validateNumber(inputtxt) {
            let phoneno = /^\d{10}$/;
            if ((inputtxt.match(phoneno))) {
                return true;
            }
            else {
                return false;
            }
        }
        setImage(e) {
            this.studentImage = e;
        }
    };
    TeacherAddComponent.ctorParameters = () => [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__["TeacherAPIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
    ];
    TeacherAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-add',
            template: __importDefault(__webpack_require__(/*! raw-loader!./teacher-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-add/teacher-add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./teacher-add.component.scss */ "./src/app/components/course-module/teacher/teacher-add/teacher-add.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__["TeacherAPIService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
    ], TeacherAddComponent);
    return TeacherAddComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher-edit/teacher-edit.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher-edit/teacher-edit.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.imagePreview {\n  width: 150px;\n  height: 150px;\n}\n\n.middle-section {\n  padding: 20px 30px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.profileWrapper {\n  padding-right: 52px;\n  width: 40%;\n  height: 30%;\n}\n\n.imagePreview {\n  height: 150px;\n  width: 225px;\n  border-radius: 20px;\n  border: 1px solid #1f72ef;\n}\n\n.countryCallingCode {\n  float: left;\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n.field-wrapper.datePickerBox .form-ctrl {\n  z-index: 5;\n}\n\n.multiselect-dropdown {\n  font-size: 12px;\n}\n\n.multiselect-dropdown .dropdown-down {\n  border-top: 5px solid black;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.multiselect-dropdown .dropdown-up {\n  border-bottom: 5px solid black;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.student_list_container {\n  width: 100%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  font-size: 14px;\n  margin-top: 0;\n}\n\n.student_list_container label {\n  margin-bottom: 5px;\n}\n\n.documentUploadDiv {\n  margin-top: -2%;\n  padding-bottom: 5%;\n  margin-bottom: 1%;\n}\n\n.uploadedData {\n  width: 70%;\n  float: left;\n  padding-left: 5px;\n}\n\n.box-shadow-lite {\n  padding: 0;\n  border: 1px solid #ccc;\n  min-height: 10vh;\n  box-shadow: 0 1px 2px 0 #ccc;\n}\n\n.document_header {\n  height: 40px;\n  width: 100%;\n  font-weight: 600;\n  border-bottom: 1px solid #ccc;\n  padding-top: 8px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  box-shadow: 0 1px 2px 0 #ccc;\n  background: #fafafa;\n}\n\n* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.page_heading {\n  color: #334D6E;\n  font-weight: 700;\n  font-size: 16px;\n  padding: 10px 0px 20px 0px;\n}\n\n.w90 {\n  width: 90%;\n  margin: 0px auto;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.outter_flex {\n  display: flex;\n  background-color: #FAFAFA;\n  padding: 0px 15px;\n  border-radius: 5px;\n}\n\n.inner_flex {\n  display: flex;\n  /*justify-content: space-between;*/\n  border-right: 1px solid #E8E8E8;\n  width: 50%;\n}\n\n.inner_flex > div {\n  /* width:50%;*/\n}\n\n.center {\n  text-align: center;\n}\n\n.profile_text {\n  color: #71767B;\n  font-weight: 300;\n  font-size: 13px;\n  position: relative;\n  top: 45px;\n}\n\n.inner_flex2 {\n  display: flex;\n  justify-content: space-between;\n  /*  width: 50%;\n*/\n}\n\n.w50 {\n  width: 50%;\n}\n\n.top {\n  position: relative;\n  top: 40px;\n}\n\n.top2 {\n  position: relative;\n  top: 47px;\n}\n\n.id-card-text {\n  color: #323C47;\n  font-size: 13px;\n  font-weight: 300;\n  padding-left: 4px;\n}\n\n.label {\n  color: #B6B5B1;\n  font-weight: 400;\n  font-size: 13px;\n  position: relative;\n  top: 15px;\n  display: block;\n  line-height: 1.1;\n  text-align: left;\n  /* text-indent: 4rem;*/\n}\n\n.input-select {\n  width: 100%;\n  margin: 8px 0;\n  padding: 7px 0px;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  border-radius: 4px;\n  background-color: #F4F3F8;\n  color: #323C47;\n  text-indent: 10px;\n  background-position-x: -10px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: #F4F3F8 url('down.svg') 90% 15px no-repeat;\n}\n\n.input {\n  width: 100%;\n  margin: 8px 0;\n  padding: 7px 5px;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 400;\n  border-radius: 4px;\n  color: #323C47;\n  background-color: #F4F3F8;\n  text-indent: 10px;\n}\n\n.input::-moz-placeholder {\n  color: #323C47;\n}\n\n.input:-ms-input-placeholder {\n  color: #323C47;\n}\n\n.input::placeholder {\n  color: #323C47;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.width-50 {\n  width: 130%;\n}\n\n.input:focus {\n  outline: 1px solid #F0EDED;\n}\n\n.input-select:focus {\n  outline: 1px solid #F0EDED;\n}\n\n.h-30 {\n  height: 100px;\n}\n\n.file::-moz-placeholder {\n  color: #109CF1;\n  font-weight: 600;\n  padding-left: 10px;\n}\n\n.file:-ms-input-placeholder {\n  color: #109CF1;\n  font-weight: 600;\n  padding-left: 10px;\n}\n\n.file::placeholder {\n  color: #109CF1;\n  font-weight: 600;\n  padding-left: 10px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n  border-radius: 5px;\n  margin-left: -4px;\n  margin-right: 20px;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #323C47;\n  width: calc(100% - 92px);\n}\n\n.mt-9 {\n  margin-top: 9px;\n}\n\n.choose_file {\n  font-weight: 300;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #71767B;\n  position: relative;\n  bottom: -80%;\n  margin-left: 4rem;\n}\n\n.borderbottom {\n  border-bottom: 1px solid #E5E5E5;\n  margin: 18px 0px;\n}\n\n.allow {\n  color: #323C47;\n  font-size: 13px;\n  font-weight: 300;\n}\n\n.cancel {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n/*.w80{\n  width: 86.5%;\n}*/\n\n.w92 {\n  width: 90%;\n}\n\n.container1 {\n  position: relative;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.overlay {\n  position: absolute;\n  top: 20px;\n  bottom: 0;\n  left: 20px;\n  right: 0;\n  height: 80px;\n  width: 80px;\n  opacity: 0;\n  border-radius: 50%;\n  transition: .5s ease;\n  background-color: rgba(46, 140, 226, 0.4);\n  cursor: pointer;\n  text-align: center;\n}\n\n.container1:hover .image {\n  opacity: 0.3;\n}\n\n.container1:hover .overlay {\n  opacity: 1;\n}\n\n.text {\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  position: relative;\n  top: 40%;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.change_width {\n  width: 87%;\n}\n\n.w92 {\n  width: 92%;\n}\n\n.ml-10 {\n  margin-left: 2.1rem;\n}\n\n.width90 {\n  width: 90%;\n}\n\n.w96 {\n  margin: 0px auto;\n  width: 96%;\n}\n\n.flex2 {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w47 {\n  width: 47%;\n}\n\n.flex_box {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.h100 {\n  height: 100px;\n}\n\n.w20 {\n  width: 20%;\n  margin-right: 10px;\n}\n\n.top30 {\n  position: relative;\n  top: 30px;\n}\n\n.w40 {\n  width: 40%;\n}\n\n.w80 {\n  width: 80%;\n}\n\n.h87 {\n  height: 87px;\n}\n\n.w30 {\n  width: 30%;\n}\n\n.w70 {\n  width: 70%;\n}\n\n.w60 {\n  width: 60%;\n}\n\n.h35 {\n  height: 35px;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.shadow {\n  box-shadow: 0px 10px 11px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 10px 11px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 10px 11px -3px rgba(0, 0, 0, 0.1);\n}\n\n.field-wrapper.datePickerBox:after {\n  top: 15px;\n}\n\n.right {\n  float: right;\n}\n\nng-multiselect-dropdown /deep/ .multiselect-dropdown > .dropdown-list .item2 {\n  position: relative !important;\n}\n\n.content_img div {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: black;\n  color: white;\n  margin-bottom: 5px;\n  font-family: sans-serif;\n  opacity: 0;\n  visibility: hidden;\n  transition: visibility 0s, opacity 0.5s linear;\n}\n\n.content_img:hover {\n  cursor: pointer;\n}\n\n.content_img:hover div {\n  width: 150px;\n  padding: 8px 15px;\n  visibility: visible;\n  opacity: 0.7;\n}\n\n.caption {\n  text-align: center;\n  position: relative;\n  top: 30%;\n  left: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3RlYWNoZXIvdGVhY2hlci1lZGl0L3RlYWNoZXItZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFSSx3QkFBd0I7RUFDeEIsU0FBUztBQUFmOztBQUdFO0VBQ0ksWUFBWTtFQUNaLGFBQWE7QUFBbkI7O0FBR0U7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtBQUE1Qjs7QUFHRTtFQUNJLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztBQUFqQjs7QUFHRTtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUEvQjs7QUFFRTtFQUNFLFdBQVc7QUFDZjs7QUFDQTtFQUNJLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7QUFFZjs7QUFBRTtFQUNFLFVBQVU7QUFHZDs7QUFEQTtFQUNJLGVBQWU7QUFJbkI7O0FBTEE7RUFHTSwyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLG1DQUFtQztBQU16Qzs7QUFYQTtFQVFNLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsbUNBQW1DO0FBT3pDOztBQUpFO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixhQUFhO0FBT2pCOztBQWJFO0VBUUksa0JBQWtCO0FBU3hCOztBQU5FO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFTckI7O0FBTkU7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtBQVNyQjs7QUFQQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQVU5Qjs7QUFSQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtF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RSxVQUFVO0FBb0RaOztBQWxEQTtFQUNHLGFBQWE7RUFDYiw4QkFBOEI7RUFDN0IsZ0JBQWdCO0FBcURwQjs7QUFuREE7RUFDRyxhQUFhO0FBc0RoQjs7QUFwREE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBdURwQjs7QUFyREE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQXdEWDs7QUF0REE7RUFDRSxVQUFVO0FBeURaOztBQW5EQTtFQUNFLFVBQVU7QUFzRFo7O0FBcERBO0VBQ0UsWUFBWTtBQXVEZDs7QUFyREE7RUFDRSxVQUFVO0FBd0RaOztBQXREQTtFQUNFLFVBQVU7QUF5RFo7O0FBdkRBO0VBQ0UsVUFBVTtBQTBEWjs7QUF4REE7RUFDRSxZQUFZO0FBMkRkOztBQXpEQTtFQUNFLGtCQUFrQjtBQTREcEI7O0FBMURBO0VBQ0UsaURBQThDO0VBQ2hELHlEQUFzRDtFQUN0RCxzREFBbUQ7QUE2RG5EOztBQTNEQTtFQUNFLFNBQVM7QUE4RFg7O0FBNURBO0VBQ0UsWUFBWTtBQStEZDs7QUEzREE7RUFDRyw2QkFBNkI7QUE4RGhDOztBQTVEQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1Ysa0JBQWtCO0VBRWxCLDhDQUE4QztBQStEaEQ7O0FBN0RDO0VBQ0MsZUFBZTtBQWdFakI7O0FBN0RDO0VBQ0MsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQWdFZDs7QUE5REM7RUFDQyxrQkFBa0I7RUFDakIsa0JBQWtCO0VBQ25CLFFBQVE7RUFDUixRQUFRO0FBaUVWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3RlYWNoZXIvdGVhY2hlci1lZGl0L3RlYWNoZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLy8vLy8vIFR1cm4gb2ZmIHNwaW5uZXJcbiAgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmltYWdlUHJldmlldyB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgLm1pZGRsZS1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5wcm9maWxlV3JhcHBlciB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1MnB4O1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGhlaWdodDogMzAlO1xuICB9XG5cbiAgLmltYWdlUHJldmlldyB7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDIyNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZjcyZWY7XG4gIH1cbiAgLmNvdW50cnlDYWxsaW5nQ29kZXtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5ibGFjay1iZ3tcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxMSwgMTEsIDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogNjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZmllbGQtd3JhcHBlci5kYXRlUGlja2VyQm94IC5mb3JtLWN0cmwge1xuICAgIHotaW5kZXg6IDU7XG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd257XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC5kcm9wZG93bi1kb3due1xuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuZHJvcGRvd24tdXB7XG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIC5zdHVkZW50X2xpc3RfY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjYzVjNWNjO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGxhYmVse1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuICAuZG9jdW1lbnRVcGxvYWREaXYge1xuICAgIG1hcmdpbi10b3A6IC0yJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIH1cbiAgXG4gIC51cGxvYWRlZERhdGEge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH0gXG4uYm94LXNoYWRvdy1saXRle1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtaW4taGVpZ2h0OiAxMHZoO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCAjY2NjO1xufVxuLmRvY3VtZW50X2hlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuKntcbiAgbWFyZ2luOiAwcHg7XG59XG5ib2R5e1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG4ucGFnZV9oZWFkaW5ne1xuICBjb2xvcjogIzMzNEQ2RTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAyMHB4IDBweDtcbn1cbi53OTB7XG5cdHdpZHRoOiA5MCU7XG5cdG1hcmdpbjogMHB4IGF1dG87XG59XG4uYmx1ZV9idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDlweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ub3V0dGVyX2ZsZXh7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaW5uZXJfZmxleHtcbiBkaXNwbGF5OiBmbGV4O1xuIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXG4gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0U4RThFODtcbiB3aWR0aDogNTAlO1xufVxuLmlubmVyX2ZsZXg+ZGl2e1xuIC8qIHdpZHRoOjUwJTsqL1xufVxuLmNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2ZpbGVfdGV4dHtcbiAgY29sb3I6ICM3MTc2N0I7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQ1cHg7XG59XG4uaW5uZXJfZmxleDJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8qICB3aWR0aDogNTAlO1xuKi99XG4udzUwe1xuICB3aWR0aDogNTAlO1xufVxuLnRvcHtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbnRvcDogNDBweDtcbn1cbi50b3Aye1xuIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0N3B4O1xufVxuLmlkLWNhcmQtdGV4dHtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4ubGFiZWx7XG4gIGNvbG9yOiAjQjZCNUIxO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuIC8qIHRleHQtaW5kZW50OiA0cmVtOyovXG59XG4uaW5wdXQtc2VsZWN0e1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgcGFkZGluZzogN3B4IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0YwRURFRDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjNGODtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIHRleHQtaW5kZW50OiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0xMHB4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtcbi1tb3otYXBwZWFyYW5jZTpub25lO1xuYXBwZWFyYW5jZTpub25lO1xuICBiYWNrZ3JvdW5kOiAjRjRGM0Y4IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb3Vyc2UvZG93bi5zdmcnKSA5MCUgMTVweCBuby1yZXBlYXQ7IFxufVxuLmlucHV0e1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46IDhweCAwO1xuICBwYWRkaW5nOiA3cHggNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjBFREVEO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzMyM0M0NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjNGODtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG59XG4uaW5wdXQ6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogIzMyM0M0Nztcbn1cbi5tdC0xMHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi53aWR0aC01MHtcbiAgd2lkdGg6IDEzMCU7XG59XG4uaW5wdXQ6Zm9jdXN7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjRjBFREVEO1xufVxuIFxuLmlucHV0LXNlbGVjdDpmb2N1c3tcbiAgb3V0bGluZTogMXB4IHNvbGlkICNGMEVERUQ7XG59XG4uaC0zMHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5maWxlOjpwbGFjZWhvbGRlcntcbiAgY29sb3I6ICMxMDlDRjE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlucHV0W3R5cGU9ZmlsZV06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2UzZGFkYjtcbiAgcGFkZGluZzogLjZlbSAuNGVtO1xuICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICB0cmFuc2l0aW9uOiAxcztcbiAgY29sb3I6ICMxMDlDRjE7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkycHgpO1xufVxuLm10LTl7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cbi5jaG9vc2VfZmlsZXtcbmZvbnQtd2VpZ2h0OiAzMDA7XG5mb250LXNpemU6IDEzcHg7XG5sZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuY29sb3I6ICM3MTc2N0I7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5ib3R0b206IC04MCU7XG4gbWFyZ2luLWxlZnQ6IDRyZW07XG59XG4uYm9yZGVyYm90dG9te1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcbiAgbWFyZ2luOiAxOHB4IDBweDtcbn1cbi5hbGxvd3tcbiAgY29sb3I6ICMzMjNDNDc7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6MzAwO1xufVxuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMTA5Q0YxO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTA5Q0YxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLyoudzgwe1xuICB3aWR0aDogODYuNSU7XG59Ki9cbi53OTJ7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5jb250YWluZXIxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1hZ2Uge1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gdG9wOiAyMHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDYsIDE0MCwgMjI2LCAwLjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcjE6aG92ZXIgLmltYWdlIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uY29udGFpbmVyMTpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQwJTtcbn1cbmJ1dHRvbjpmb2N1c3tcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jaGFuZ2Vfd2lkdGh7XG53aWR0aDogODclO31cbi53OTJ7XG4gIHdpZHRoOiA5MiU7XG59XG4ubWwtMTB7XG4gIG1hcmdpbi1sZWZ0OiAyLjFyZW07XG59XG4ud2lkdGg5MHtcbiAgd2lkdGg6IDkwJTtcbn1cbi53OTZ7XG4gIG1hcmdpbjowcHggYXV0bztcbiAgd2lkdGg6IDk2JTtcbn1cbi5mbGV4MntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnc0N3tcbiAgd2lkdGg6IDQ3JTtcbn1cbi5mbGV4X2JveHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5oMTAwe1xuICAgaGVpZ2h0OiAxMDBweDtcbn1cbi53MjB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi50b3AzMHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMwcHg7XG59XG4udzQwe1xuICB3aWR0aDogNDAlO1xufVxuLnRvcC0xMHtcbiAgLy8gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gIHRvcDogLTEwcHg7XG59XG4udzgwe1xuICB3aWR0aDogODAlO1xufVxuLmg4N3tcbiAgaGVpZ2h0OiA4N3B4O1xufVxuLnczMHtcbiAgd2lkdGg6IDMwJTtcbn1cbi53NzB7XG4gIHdpZHRoOiA3MCU7XG59XG4udzYwe1xuICB3aWR0aDogNjAlO1xufVxuLmgzNXtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmhpZGV7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zaGFkb3d7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDExcHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4td2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDExcHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4tbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDExcHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG59XG4uZmllbGQtd3JhcHBlci5kYXRlUGlja2VyQm94OmFmdGVyIHtcbiAgdG9wOiAxNXB4O1xufVxuLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5cbm5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIC9kZWVwLyAubXVsdGlzZWxlY3QtZHJvcGRvd24gPiAuZHJvcGRvd24tbGlzdCAuaXRlbTJ7XG4gICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbn1cbi5jb250ZW50X2ltZyBkaXZ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBsaW5lYXI7IFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xuIH1cbiAuY29udGVudF9pbWc6aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiB9XG4gXG4gLmNvbnRlbnRfaW1nOmhvdmVyIGRpdntcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMC43OyBcbiB9XG4gLmNhcHRpb257XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher-edit/teacher-edit.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher-edit/teacher-edit.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TeacherEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherEditComponent", function() { return TeacherEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../.. */ "./src/app/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/teacherService/teacherApi.service */ "./src/app/services/teacherService/teacherApi.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









let TeacherEditComponent = /** @class */ (() => {
    let TeacherEditComponent = class TeacherEditComponent {
        constructor(route, ApiService, fb, toastCtrl, routeParam, auth, commonService, httpService, productService) {
            this.route = route;
            this.ApiService = ApiService;
            this.fb = fb;
            this.toastCtrl = toastCtrl;
            this.routeParam = routeParam;
            this.auth = auth;
            this.commonService = commonService;
            this.httpService = httpService;
            this.productService = productService;
            this.hasIdCard = 'N';
            this.studentImage = '';
            this.containerWidth = "110px";
            this.containerHeight = "110px";
            this.enableBiometric = 0;
            this.instituteCountryDetObj = {};
            this.countryDetails = [];
            this.maxlength = 10;
            this.country_id = null;
            this.enable_ip_lock_feature = 'N';
            this.isShoweOnlineExam = false;
            this.standardSetting = {};
            this.subjectSetting = {};
            this.StandardData = [];
            this.subjectData = [];
            this.selectedFiles = [];
            this.uploadedFileData = [];
            this.teacher_user_id = 0;
            this.assigned_standard_subject_list = [];
            this.type = '';
            this.imgPrefill = 'data:image/png;base64';
            this.imgFile = '';
            this.routeParam.params.subscribe(params => {
                this.selectedTeacherId = params['id'];
            });
            console.log(this.selectedTeacherId);
        }
        ngOnInit() {
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.type = 'batch';
                }
                else {
                    this.type = 'course';
                }
            });
            let type = Number(sessionStorage.getItem('institute_setup_type'));
            this.setMultiSelectSetting();
            this.fetchStandardAndSubjects();
            this.createEditTeacherForm();
            this.isOnlineExamAllow(type);
            this.fetchDataForCountryDetails();
            this.enable_ip_lock_feature = sessionStorage.getItem('enable_ip_lock_feature');
        }
        setMultiSelectSetting() {
            this.standardSetting = {
                singleSelection: false,
                idField: 'standard_id',
                textField: 'standard_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 10,
                enableCheckAll: true
            };
            this.subjectSetting = {
                singleSelection: false,
                idField: 'subject_id',
                textField: 'subject_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 10,
                enableCheckAll: true
            };
        }
        fetchStandardAndSubjects() {
            this.auth.showLoader();
            this.httpService.getData('/api/v1/standards/standard-subject-list/' + sessionStorage.getItem('institute_id') + '?is_active=Y&is_subject_required=true').subscribe((res) => {
                this.auth.hideLoader();
                this.StandardData = res.result;
                if (this.selectedTeacherId) {
                    this.getTeacherInfo();
                    this.enableBiometric = sessionStorage.getItem('biometric_attendance_feature');
                }
            }, err => {
                this.auth.hideLoader();
                if (this.selectedTeacherId) {
                    this.getTeacherInfo();
                    this.enableBiometric = sessionStorage.getItem('biometric_attendance_feature');
                }
                console.log(err);
            });
        }
        getUploadedFileData() {
            this.auth.showLoader();
            const url = `/users-file/downloadFile?studentId=${this.teacher_user_id}`;
            this.productService.getUploadFileData(url).subscribe((res) => {
                this.uploadedFileData = res;
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
            });
        }
        downloadFile(object) {
            const url = object.fileUrl;
            var hiddenDownload = document.getElementById('downloadFileClick');
            hiddenDownload.href = url;
            hiddenDownload.download = object.title;
            // hiddenDownload.download = this.getOriginalFileName(fileObj.res.file_name);
            hiddenDownload.click();
            // this.updateDownloadCount(object);
        }
        deleteExistingUploadedfileAPI(id) {
            if (confirm('Are you sure, you want to delete file?')) {
                this.auth.showLoader();
                const url = `/users-file/delete-file/?studentId=${this.teacher_user_id}&id=${id}`;
                this.productService.deleteFile(url).subscribe((res) => {
                    this.messageToast("success", '', "File deleted successfully");
                    if (res) {
                        this.getUploadedFileData();
                    }
                    this.auth.hideLoader();
                }, err => {
                    this.auth.hideLoader();
                });
            }
        }
        getSubjects(event) {
            this.subjectData = [];
            if (event) {
                this.editTeacherForm.patchValue({
                    selectedSubjectList: ''
                });
                let object = event.filter((subject) => {
                    let arr = this.StandardData.filter(obj => subject.standard_id == obj.standard_id);
                    if (arr.length) {
                        arr[0].subject_list.forEach(ele => {
                            ele.standard_id = arr[0].standard_id;
                            this.subjectData.push(ele);
                            // Added by - Nalini Walunj
                            // if we change course then selected student list should be clear and if we select same course then already selected students should be seleted
                            let temp = [];
                            for (var i = 0; i < this.subjectData.length; i++) {
                                for (var j = 0; j < this.assigned_standard_subject_list.length; j++) {
                                    if (this.subjectData[i].subject_id == this.assigned_standard_subject_list[j].subject_id) {
                                        let x = {
                                            subject_id: '',
                                            subject_name: ''
                                        };
                                        x.subject_id = this.assigned_standard_subject_list[j].subject_id;
                                        x.subject_name = this.assigned_standard_subject_list[j].subject_name;
                                        temp.push(x);
                                    }
                                }
                            }
                            this.editTeacherForm.patchValue({
                                selectedSubjectList: temp
                            });
                        });
                    }
                });
            }
        }
        // created by: Nalini Walunj
        // Below two functions are written to fetch country details from the session stored at the time of login of institute
        fetchDataForCountryDetails() {
            let countryCodeEncryptedData = sessionStorage.getItem('country_data');
            let temp = JSON.parse(countryCodeEncryptedData);
            if (temp.length > 0) {
                this.countryDetails = temp;
                let defacult_Country = this.countryDetails.filter((country) => {
                    return country.is_default == 'Y';
                });
                this.instituteCountryDetObj = defacult_Country[0];
                this.country_id = defacult_Country[0].id;
                this.maxlength = defacult_Country[0].country_phone_number_length;
                this.editTeacherForm.patchValue({
                    country_id: defacult_Country[0].id
                });
            }
        }
        isOnlineExamAllow(type) {
            this.isShoweOnlineExam = this.checkInstSetupType(type, 4);
        }
        checkInstSetupType(value, role) {
            if (value != 0) {
                var start = 2;
                var count = 1;
                while (start != value) {
                    count++;
                    start = start + 2;
                }
                var arr = [0, 0, 0, 0, 0, 0, 0, 0];
                var s = count.toString(2);
                var k = 0;
                for (var i = s.length - 1; i >= 0; i--) {
                    arr[k] = parseInt(s.charAt(i));
                    k++;
                }
                switch (role) {
                    case 2:
                        if (arr[0] == 1)
                            return true;
                        break;
                    case 4:
                        if (arr[1] == 1)
                            return true;
                        break;
                    case 8:
                        if (arr[2] == 1)
                            return true;
                        break;
                    case 16:
                        if (arr[3] == 1)
                            return true;
                        break;
                    case 32:
                        if (arr[4] == 1)
                            return true;
                        break;
                    case 64:
                        if (arr[5] == 1)
                            return true;
                        break;
                    case 128:
                        if (arr[6] == 1)
                            return true;
                        break;
                    case 256:
                        if (arr[7] == 1)
                            return true;
                        break;
                    default: return false;
                }
                return false;
            }
            else {
                return false;
            }
        }
        onChangeObj(event) {
            for (let i = 0; i < this.countryDetails.length; i++) {
                if (this.countryDetails[i].id == event) {
                    this.instituteCountryDetObj = this.countryDetails[i];
                    this.maxlength = this.countryDetails[i].country_phone_number_length;
                    this.country_id = this.countryDetails[i].id;
                    this.editTeacherForm.patchValue({
                        country_id: this.countryDetails[i].id
                    });
                    return;
                }
            }
        }
        getTeacherInfo() {
            this.auth.showLoader();
            this.ApiService.getSelectedTeacherInfo(this.selectedTeacherId).subscribe((data) => {
                console.log("Dar", data);
                this.auth.hideLoader();
                this.selectedTeacherInfo = data;
                let setFormData = this.getFormFieldsdata(data);
                this.editTeacherForm.setValue(setFormData);
                this.studentImage = data.photo;
                this.setServerImg();
                this.hasIdCard = data.hasIDCard;
                this.teacher_user_id = data.user_id;
                this.getUploadedFileData();
            }, error => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        setServerImg() {
            if (this.studentImage === '' || this.studentImage === null) {
            }
            else {
                this.imgFile = "";
                const temp = [];
                temp[0] = this.imgPrefill;
                temp[1] = this.studentImage;
                this.imgFile = temp.join(',');
            }
        }
        createEditTeacherForm() {
            this.editTeacherForm = this.fb.group({
                teacher_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                teacher_curr_addr: [''],
                country_id: '',
                teacher_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                teacher_alt_phone: [''],
                teacher_standards: [''],
                teacher_email: [''],
                teacher_subjects: [''],
                hour_rate: [''],
                attendance_device_id: [''],
                is_active: [true],
                allow_exam_desk_login: [false],
                is_allow_teacher_to_only_mark_attendance: [false],
                is_office_only_access: [false],
                is_student_mgmt_flag: [true],
                dob: [''],
                date_of_joining: [''],
                selectedStandardList: [],
                selectedSubjectList: [],
                title: ''
            });
        }
        uploadHandler() {
            if (this.editTeacherForm.value.title != '') {
                const preview = document.getElementById('uploadFileControl').files[0];
                if (preview != null || preview != undefined) {
                    var myReader = new FileReader();
                    let temp = {};
                    myReader.readAsDataURL(preview);
                    myReader.onloadend = () => {
                        temp = {
                            "title": this.editTeacherForm.value.title,
                            "fileName": preview.name,
                            "encodedFile": myReader.result.split(',')[1]
                        };
                        this.selectedFiles.push(temp);
                        this.messageToast('success', '', "File uploaded successfully");
                        this.editTeacherForm.value.title = '';
                        this.editTeacherForm.patchValue({
                            title: '',
                        });
                        document.getElementById('uploadFileControl').value = null;
                    };
                }
                else {
                    this.messageToast('error', '', "No file selected");
                }
            }
            else {
                this.messageToast('error', '', "Document title is mandatory");
            }
        }
        deletefile(obj, id) {
            if (confirm('Are you sure, you want to delete file?')) {
                this.selectedFiles.splice(id, 1);
                this.messageToast('success', '', "File deleted successfully");
            }
        }
        getFormFieldsdata(data) {
            let dataToBind = {};
            dataToBind.teacher_name = data.teacher_name;
            dataToBind.teacher_curr_addr = data.teacher_curr_addr;
            dataToBind.teacher_phone = (data.teacher_phone.substring(data.teacher_phone.lastIndexOf("-") + 1, data.teacher_phone.length));
            dataToBind.teacher_alt_phone = '';
            if (data.teacher_alt_phone != "" || data.teacher_alt_phone != null) {
                dataToBind.teacher_alt_phone = (data.teacher_alt_phone.substring(data.teacher_alt_phone.lastIndexOf("-") + 1, data.teacher_alt_phone.length));
            }
            dataToBind.teacher_standards = data.teacher_standards;
            dataToBind.teacher_email = data.teacher_email;
            dataToBind.teacher_subjects = data.teacher_subjects;
            dataToBind.hour_rate = data.hour_rate;
            if (data.hour_rate == 0) {
                dataToBind.hour_rate = '';
            }
            dataToBind.is_active = false;
            if (data.is_active == "Y") {
                dataToBind.is_active = true;
            }
            dataToBind.allow_exam_desk_login = false;
            if (data.allow_exam_desk_login == "Y") {
                dataToBind.allow_exam_desk_login = true;
            }
            dataToBind.is_allow_teacher_to_only_mark_attendance = false;
            if (data.is_allow_teacher_to_only_mark_attendance == "Y") {
                dataToBind.is_allow_teacher_to_only_mark_attendance = true;
            }
            dataToBind.is_office_only_access = (data.is_office_only_access == 'Y') ? true : false;
            dataToBind.is_student_mgmt_flag = false;
            if (data.is_student_mgmt_flag == "1") {
                dataToBind.is_student_mgmt_flag = true;
            }
            dataToBind.attendance_device_id = data.attendance_device_id;
            dataToBind.country_id = data.country_id;
            // dataToBind.dob = '1998-2-2';
            // dataToBind.date_of_joining = '1998-2-2'
            dataToBind.date_of_joining = data.date_of_joining;
            dataToBind.dob = data.dob;
            dataToBind.dob = (dataToBind.dob != '' && dataToBind.dob != null) ? moment__WEBPACK_IMPORTED_MODULE_3__(data.dob).format("YYYY-MM-DD") : '';
            dataToBind.date_of_joining = (dataToBind.date_of_joining != '' && dataToBind.date_of_joining != null) ? moment__WEBPACK_IMPORTED_MODULE_3__(data.date_of_joining).format("YYYY-MM-DD") : '';
            this.country_id = data.country_id;
            let standatd_temp = [];
            let subject_temp = [];
            if (data.assigned_standard_subject_list && data.assigned_standard_subject_list.length) {
                data.assigned_standard_subject_list.forEach(element => {
                    let x = {
                        standard_id: '',
                        standard_name: ''
                    };
                    x.standard_id = element.standard_id;
                    x.standard_name = element.standard_name;
                    if (element.subject_list && element.subject_list.length) {
                        element.subject_list.forEach(sub => {
                            let y = {
                                subject_id: '',
                                subject_name: ''
                            };
                            y.subject_id = sub.subject_id;
                            y.subject_name = sub.subject_name;
                            subject_temp.push(y);
                        });
                    }
                    standatd_temp.push(x);
                });
            }
            this.assigned_standard_subject_list = subject_temp;
            this.getSubjects(this.assigned_standard_subject_list);
            dataToBind.selectedSubjectList = subject_temp;
            dataToBind.selectedStandardList = standatd_temp;
            dataToBind.title = '';
            console.log(dataToBind);
            return dataToBind;
        }
        getSelectedStandardAndSub(obj) {
            if (obj.selectedSubjectList && obj.selectedSubjectList.length) {
                obj.selectedSubjectList.forEach(element => {
                    this.subjectData.forEach(ele => {
                        if (ele.subject_id == element.subject_id) {
                            element.standard_id = ele.standard_id;
                        }
                    });
                });
            }
            let jsontem = {};
            if (obj.selectedStandardList && obj.selectedStandardList.length) {
                obj.selectedStandardList.filter(temp => {
                    this.StandardData.forEach(ele => {
                        if (temp.standard_id == ele.standard_id) {
                            let arr = [];
                            if (obj.selectedSubjectList && obj.selectedSubjectList.length) {
                                obj.selectedSubjectList.forEach(element => {
                                    if (element.standard_id == ele.standard_id) {
                                        arr.push(element.subject_id);
                                    }
                                });
                                jsontem[temp.standard_id] = arr;
                                arr = [];
                            }
                            else {
                                jsontem[temp.standard_id] = [];
                            }
                        }
                    });
                });
            }
            return jsontem;
        }
        addNewTeacherInfo() {
            let formData = this.editTeacherForm.value;
            formData.stadard_subject_id_map = this.getSelectedStandardAndSub(formData);
            if (!this.validateCaseSensitiveEmail(formData.teacher_email)) {
                this.messageToast('error', '', 'Please enter valid email address.');
                return;
            }
            let phoneCheck = this.commonService.phonenumberCheck(formData.teacher_phone, this.maxlength, this.country_id);
            if (phoneCheck == false) {
                this.messageToast('error', '', 'Please enter valid contact number.');
                return;
            }
            if (phoneCheck == 'noNumber') {
                this.messageToast('error', '', 'Please enter valid contact no.');
                return;
            }
            if (formData.teacher_alt_phone != '' && formData.teacher_alt_phone != null) {
                if (!(this.commonService.phonenumberCheck(formData.teacher_alt_phone, this.maxlength, this.country_id))) {
                    this.messageToast('error', '', 'Please enter valid alternate phone number.');
                    return;
                }
            }
            if (formData.teacher_name == "" || formData.teacher_name == null) {
                this.messageToast('error', '', 'Teacher Name is required.');
                return;
            }
            if (formData.hour_rate == "" || formData.hour_rate == null) {
                formData.hour_rate = 0;
            }
            formData.photo = (this.studentImage != null && this.studentImage != "") ? this.studentImage : null;
            formData.is_student_mgmt_flag = (formData.is_student_mgmt_flag == true) ? 1 : 0;
            formData.is_active = (formData.is_active == true) ? "Y" : "N";
            formData.allow_exam_desk_login = (formData.allow_exam_desk_login == true) ? "Y" : "N";
            formData.is_allow_teacher_to_only_mark_attendance = (formData.is_allow_teacher_to_only_mark_attendance == true) ? 'Y' : 'N';
            formData.is_office_only_access = formData.is_office_only_access ? 'Y' : 'N';
            formData.is_employee_to_be_create = "N";
            formData.country_id = this.instituteCountryDetObj.id;
            formData.dob = (formData.dob != null && formData.dob != '') ? moment__WEBPACK_IMPORTED_MODULE_3__(formData.dob).format('YYYY-MM-DD') : '';
            formData.date_of_joining = (formData.date_of_joining != null && formData.date_of_joining != '') ? moment__WEBPACK_IMPORTED_MODULE_3__(formData.date_of_joining).format('YYYY-MM-DD') : '';
            // formData.is_office_only_access = formData.is_office_only_access ? 'Y' : 'N';
            if (this.selectedFiles.length) {
                formData.teacher_file_upload_list = this.selectedFiles;
            }
            delete formData["selectedSubjectList"];
            delete formData["selectedStandardList"];
            delete formData["title"];
            this.auth.showLoader();
            this.ApiService.addNewTeacherDetails(formData).subscribe(data => {
                this.auth.hideLoader();
                this.messageToast('success', '', 'Teacher added successfully.');
                this.route.navigateByUrl('/view/course/teacher');
            }, err => {
                this.auth.hideLoader();
                this.messageToast('error', '', err.error.message);
            });
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
            formData.stadard_subject_id_map = this.getSelectedStandardAndSub(formData);
            if (!this.validateCaseSensitiveEmail(formData.teacher_email)) {
                this.messageToast('error', '', 'Please enter valid email address.');
                return;
            }
            let phoneCheck = this.commonService.phonenumberCheck(formData.teacher_phone, this.maxlength, this.country_id);
            if (phoneCheck == false) {
                this.messageToast('error', '', 'Please enter valid contact number.');
                return;
            }
            if (phoneCheck == 'noNumber') {
                this.messageToast('error', '', 'Please enter valid contact no.');
                return;
            }
            if (formData.teacher_alt_phone != '' && formData.teacher_alt_phone != null) {
                if (!(this.commonService.phonenumberCheck(formData.teacher_alt_phone, this.maxlength, this.country_id))) {
                    this.messageToast('error', '', 'Please enter valid alternate phone number.');
                    return;
                }
            }
            if (formData.teacher_name == "" || formData.teacher_name == null) {
                this.messageToast('error', '', 'Teacher Name is required.');
                return;
            }
            if (formData.hour_rate == "" || formData.hour_rate == null) {
                formData.hour_rate = "0";
            }
            formData.photo = (this.studentImage != null || this.studentImage != "") ? this.studentImage : null;
            formData.is_student_mgmt_flag = (formData.is_student_mgmt_flag == true) ? 1 : 0;
            formData.is_active = (formData.is_active == true) ? "Y" : 'N';
            formData.allow_exam_desk_login = (formData.allow_exam_desk_login == true) ? "Y" : "N";
            formData.is_allow_teacher_to_only_mark_attendance = (formData.is_allow_teacher_to_only_mark_attendance == true) ? 'Y' : 'N';
            formData.is_office_only_access = formData.is_office_only_access ? 'Y' : 'N';
            //this section is to handle id card
            if (sessionStorage.getItem('Id-card') != null || sessionStorage.getItem('Id-card') != undefined) {
                formData.id_file = sessionStorage.getItem('Id-card');
                formData.id_fileType = sessionStorage.getItem('imageType');
            }
            else {
                formData.id_file = null;
                formData.id_fileType = "";
            }
            formData.dob = moment__WEBPACK_IMPORTED_MODULE_3__(formData.dob).format('YYYY-MM-DD');
            formData.date_of_joining = moment__WEBPACK_IMPORTED_MODULE_3__(formData.date_of_joining).format('YYYY-MM-DD');
            if (this.selectedFiles.length) {
                formData.teacher_file_upload_list = this.selectedFiles;
            }
            formData.isDeleted = (Object.keys(formData.stadard_subject_id_map).length == 0) ? 'Y' : 'N';
            delete formData["selectedSubjectList"];
            delete formData["selectedStandardList"];
            delete formData["title"];
            this.auth.showLoader();
            this.ApiService.saveEditTeacherInformation(this.selectedTeacherInfo.teacher_id, formData).subscribe(data => {
                this.auth.hideLoader();
                this.messageToast('success', '', 'Details updated successfully.');
                if (sessionStorage.getItem('userType') == '3') {
                    this.route.navigateByUrl('/view/dashboard/admin');
                }
                else {
                    this.route.navigateByUrl('/view/course/teacher');
                }
            }, err => {
                this.auth.hideLoader();
                this.messageToast('error', '', err.error.message);
            });
        }
        onChangeIdCardUpload() {
            this.hasIdCard = 'Y';
            let fileBrowser = this.idCardTeacher.nativeElement;
            if (fileBrowser.files && fileBrowser.files[0]) {
                sessionStorage.setItem('imageType', fileBrowser.files[0].type.split('/')[1]);
                let reader = new FileReader();
                reader.readAsDataURL(fileBrowser.files[0]);
                reader.onload = () => {
                    sessionStorage.setItem('Id-card', reader.result.split(',')[1]);
                };
            }
        }
        downloadIdCard() {
            this.auth.showLoader();
            this.ApiService.downloadDocument(this.selectedTeacherId).subscribe((res) => {
                this.auth.hideLoader();
                // this.idCardImg.nativeElement.src = 'data:image/png;base64,' + res.document;
                this.anchTag.nativeElement.href = 'data:image/png;base64,' + res.document;
                this.anchTag.nativeElement.download = res.docTitle;
                this.anchTag.nativeElement.click();
            }, err => {
                this.auth.hideLoader();
                this.messageToast('error', '', err.error.message);
            });
        }
        messageToast(errorType, errorTitle, errorMeassage) {
            let data = {
                type: errorType,
                title: errorTitle,
                body: errorMeassage
            };
            this.toastCtrl.popToast(data);
        }
        validateCaseSensitiveEmail(email) {
            if (email != "" && email != null) {
                var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if (reg.test(email)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
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
            console.log(this.studentImage);
        }
        updateIdCard($event) {
            $event.preventDefault();
            this.idCardTeacher.nativeElement.click();
        }
        getFile() {
            document.getElementById("upfile").click();
        }
        // uploadHandler(ev) {
        //   console.log(ev);
        //   const file = ev[0];
        //   const fileData = this.readFile(file);
        // }
        readFile(file) {
            const reader = new FileReader();
            if (file) {
                reader.readAsDataURL(file[0]);
                reader.onloadend = () => {
                    this.setImage(reader.result.split(',')[1]);
                    return reader.result.split(',')[1];
                };
            }
        }
    };
    TeacherEditComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_7__["TeacherAPIService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ___WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"] },
        { type: ___WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] }
    ];
    TeacherEditComponent.propDecorators = {
        idCardTeacher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['idCardUpload', { static: false },] }],
        idCardImg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['uploadedImage', { static: false },] }],
        anchTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['uploadImageAnchor', { static: false },] }]
    };
    TeacherEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./teacher-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-edit/teacher-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./teacher-edit.component.scss */ "./src/app/components/course-module/teacher/teacher-edit/teacher-edit.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_7__["TeacherAPIService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ___WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"],
            ___WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]])
    ], TeacherEditComponent);
    return TeacherEditComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher-list/teacher-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher-list/teacher-list.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #334D6E;\n}\n\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n\n.breadcrumb-item > a {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 3.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #dfe5f0;\n  padding: 10px;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list li a span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334d6e;\n}\n\n.list li img {\n  padding: 0px 10px;\n}\n\n.add_master_tag {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\nselect {\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 500;\n  background-color: #f5f6f8;\n}\n\n.input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  /*background-color: #f5f6f8;\n*/\n}\n\n.magnifying-glass {\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 5px;\n}\n\n.header-input {\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 600;\n  width: 700px;\n  color: #61758e;\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  /*background-color: #f5f6f8;*/\n}\n\n.header-input::-moz-placeholder {\n  padding-left: 10px;\n}\n\n.header-input:-ms-input-placeholder {\n  padding-left: 10px;\n}\n\n.header-input::placeholder {\n  padding-left: 10px;\n}\n\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 15px;\n}\n\n.p-15 {\n  padding-bottom: 15px;\n}\n\nselect {\n  width: 250px;\n  color: #b6b8bb;\n}\n\ntable {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 15px;\n}\n\nthead {\n  background-color: #DFE5F0;\n  font-weight: 600;\n}\n\nthead td {\n  background: #DFE5F0;\n}\n\ntd {\n  padding: 10px 15px;\n  color: #323C47;\n  font-size: 12px;\n}\n\ntbody {\n  font-weight: 500;\n}\n\ntr {\n  box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n}\n\n.section::before {\n  height: 0.4em;\n  display: table-row;\n  content: '';\n}\n\n.w96 {\n  width: calc(100% - 1rem);\n}\n\n.p-10 {\n  padding-top: 10px;\n}\n\n.p-30 {\n  padding-top: 30px;\n}\n\n.p-10-0 {\n  padding: 9px 0px;\n}\n\n.yes {\n  background-color: #CCFFAC;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.no {\n  background-color: #FFCF88;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.search {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.area-select {\n  font-size: 12px;\n  color: #787A7D;\n}\n\n.input-width {\n  width: 180px;\n}\n\n.pl-10 {\n  padding-left: 10px;\n}\n\n.pr-40 {\n  padding-right: 40px;\n}\n\n.cancel {\n  background-color: #fff;\n  border: 1px solid #109CF1;\n  color: #109CF1;\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n  color: #334D6E;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.width205 {\n  width: 205px;\n}\n\n.description {\n  width: 200px;\n  margin: 0px 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('Icon.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  padding: 6px 4px;\n  margin-right: 10px;\n}\n\n.add {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.center {\n  text-align: center;\n}\n\n.gray {\n  background-color: #F4F3F8;\n  height: 92vh;\n}\n\n/*chatbox*/\n\n.chatbox1 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox2 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox3 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox4 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox5 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox6 {\n  width: 1033px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox7 {\n  width: 90px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox8 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox9 {\n  width: 819px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox-select {\n  font-size: 10px;\n}\n\n.chatbox-input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: #f3f3f3;\n}\n\n.col-form-label {\n  font-size: 13px;\n  font-weight: 400;\n  color: #AFB3B7;\n}\n\n.upload {\n  background-color: #29ACFC;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n#yourBtn {\n  position: relative;\n  top: 40px;\n  width: 100px;\n  padding: 10px;\n  background-color: #29ACFC;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.top {\n  position: relative;\n  top: 40px;\n}\n\n.division {\n  border-right: 2px solid #C4C4C4;\n  margin: 40px 0px;\n}\n\n.radio {\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.containerc {\n  display: block;\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.containerc input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  border: 1px solid #109CF1;\n}\n\n.containerc input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.containerc input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.containerc .checkmark:after {\n  left: 5px;\n  top: 0px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.top2 {\n  position: relative;\n  top: 10px;\n}\n\n.login {\n  position: relative;\n  top: -7px;\n  left: 2px;\n}\n\n.thumb {\n  padding-left: 10px;\n}\n\nmain {\n  padding-left: 0 !important;\n}\n\n.right {\n  float: right;\n}\n\nthead td, thead th {\n  border-top: none;\n  border-bottom: none;\n}\n\n/* ===============================header colors=======================*/\n\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n\ntable thead tr th {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\ntable tbody td {\n  padding: 5px 15px !important;\n  border-bottom: none !important;\n  border-top: none !important;\n}\n\ntable tbody td .col-new {\n  text-align: center;\n}\n\ntable tbody tr {\n  border-left: none;\n  border-radius: 0;\n}\n\ntable tbody tr td .edit {\n  cursor: pointer;\n}\n\ntable tbody tr td .anchorTag {\n  margin-left: 10px;\n}\n\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\n\ntable tbody tr .field-wrapper {\n  padding: 0px !important;\n}\n\ntable tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\n\ntable tbody tr .datePickerBox {\n  padding-right: 10px;\n  padding-bottom: 10px;\n}\n\ntable tbody .displayComp .edit-comp {\n  display: none;\n}\n\ntable tbody .editComp .view-comp {\n  display: none;\n}\n\nth {\n  background-color: #e0eaec;\n  color: black;\n}\n\ntr {\n  border-radius: 12px;\n  border-left: 5px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.tableBodyScroll tbody {\n  display: block;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvZGF0YS1zZXR1cC1ob21lL2RhdGEtc2V0dXAtaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3RlYWNoZXIvdGVhY2hlci1saXN0L3RlYWNoZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FDQ2hCOztBRENBO0VBQ0Esc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FDRWY7O0FEQUE7RUFDQSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNHZjs7QURFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUNDbEI7O0FEQ0E7RUFFTSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUNDdEI7O0FEVEE7RUFXTSwyQ0FBMkM7RUFDM0MseUJBQXlCO0FDRS9COztBREVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FDQ25COztBRENBO0VBQ0UsYUFBYTtBQ0VmOztBREFBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixhQUFhO0FDR2Y7O0FEREE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNJakI7O0FEUEE7RUFLTSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FDTXBCOztBRGRBO0VBWU0saUJBQWlCO0FDTXZCOztBREZBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUNLbEI7O0FESEE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0FDTTNCOztBREpBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjtDQ09EO0FBQ0Q7O0FETEE7RUFDRSxtQ0FBOEQ7RUFDOUQsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUNRbEI7O0FETkE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLG1DQUFnRTtFQUNoRSw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLDZCQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQkFBa0I7QUNVcEI7O0FEWEE7RUFDRSxrQkFBa0I7QUNVcEI7O0FEWEE7RUFDRSxrQkFBa0I7QUNVcEI7O0FEUkE7RUFDRSwrQ0FBK0M7RUFDL0MsdURBQXVEO0VBQ3ZELG9EQUFvRDtFQUNwRCxvQkFBb0I7QUNXdEI7O0FEVEE7RUFDRSxvQkFBb0I7QUNZdEI7O0FEVkE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQ2FoQjs7QURSQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFlO0FDV2pCOztBRFRBO0VBQ0cseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ1luQjs7QURkQTtFQUlPLG1CQUFtQjtBQ2MxQjs7QURYQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQ2NqQjs7QURaQTtFQUNFLGdCQUFnQjtBQ2VsQjs7QURiQTtFQUNJLCtDQUE0QztFQUM1Qyx1REFBbUQ7RUFDbkQsb0RBQWlEO0FDZ0JyRDs7QURkQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztBQ2lCYjs7QURiQTtFQUNFLHdCQUF3QjtBQ2dCMUI7O0FEWkE7RUFBTSxpQkFBaUI7QUNnQnZCOztBRGZBO0VBQU0saUJBQWlCO0FDbUJ2Qjs7QURsQkE7RUFBUyxnQkFBZ0I7QUNzQnpCOztBRHJCQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ3dCcEI7O0FEdEJBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FDeUJwQjs7QUR2QkE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUNGO0FDeUJBOztBRHhCQTtFQUNJLGVBQWU7RUFDZixjQUFjO0FDMkJsQjs7QUR6QkE7RUFDRSxZQUFZO0FDNEJkOztBRDFCQTtFQUNFLGtCQUFrQjtBQzZCcEI7O0FEM0JBO0VBQ0UsbUJBQW1CO0FDOEJyQjs7QUQzQkE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXdCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUNGO0FDNkJBOztBRDVCQTtFQUNJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUNKO0FDOEJBOztBRDdCQTtFQUNFLFlBQVk7QUNnQ2Q7O0FEOUJBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQ2lDbEI7O0FEL0JDO0VBQ0csdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixjQUFjO0VBQ2QscUNBQWtFO0VBQ2xFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQ2tDcEI7O0FEaENBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQ21DcEI7O0FEakNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQ0Y7QUNtQ0E7O0FEbENBO0VBQ0Esa0JBQWtCO0FDcUNsQjs7QURuQ0E7RUFDRSxrQkFBa0I7QUNzQ3BCOztBRHBDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FDdUNkOztBRHJDQSxVQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQ3dDbEI7O0FEdENBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUN5Q2xCOztBRHZDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUMwQ2xCOztBRHhDQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0FDMkNsQjs7QUR6Q0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FDNENsQjs7QUQxQ0E7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQzZDbEI7O0FEM0NBO0VBQ0UsV0FBVTtFQUNWLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQzhDbEI7O0FENUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQytDbEI7O0FEN0NBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUNnRGxCOztBRDlDQTtFQUNFLGVBQWU7QUNpRGpCOztBRC9DQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0FDa0QzQjs7QURoREE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUNtRGhCOztBRGpEQTtFQUNFLHlCQUF5QjtBQ29EM0I7O0FEbERBO0VBQ0Usa0JBQWtCO0FDcURwQjs7QURuREE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0FDc0RyQjs7QURwREE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQ3VEWDs7QURyREE7RUFDRSwrQkFBZ0M7RUFDaEMsZ0JBQWdCO0FDd0RsQjs7QUR0REE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FDeURsQjs7QUR2REE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQzBEbkI7O0FEdERBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7QUN5RFY7O0FEckRBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7QUN3RDNCOztBRHJEQTtFQUNFLHlCQUF5QjtBQ3dEM0I7O0FEcERBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FDdURmOztBRG5EQTtFQUNFLGNBQWM7QUNzRGhCOztBRGxEQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBR3pCLHdCQUF3QjtBQ3FEMUI7O0FEbkRBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUNzRFg7O0FEcERBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0FDdURiOztBRHJEQTtFQUNFLGtCQUFrQjtBQ3dEcEI7O0FEdERBO0VBQ0ksMEJBQTBCO0FDeUQ5Qjs7QUR2REE7RUFDSSxZQUFZO0FDMERoQjs7QUR4REE7RUFFSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FDMER2Qjs7QUMzaEJBLHVFQUFBOztBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FEaWhCakM7O0FDdmhCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBRGtoQi9COztBQzVoQkE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FEZ2hCbkQ7O0FDcmlCQTtFQXVCZ0MsVUFBVTtBRGtoQjFDOztBQ3ppQkE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBRG1oQnREOztBQ2hqQkE7RUFnQ29DLFVBQVU7QURvaEI5Qzs7QUNwakJBO0VBb0NnQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7QURvaEJsRDs7QUM5akJBO0VBOEM0QixjQWxEYjtFQW1EYSxlQUFlO0FEb2hCM0M7O0FDM2dCQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBRDhnQnBCOztBQ2xoQkE7RUFNTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QURnaEIvQjs7QUMvaEJBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QURraEIxQjs7QUNwaUJBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBRGtoQjVCOztBQzlpQkE7RUE4QlEsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QURvaEJ4Qjs7QUMxakJBO0VBd0NVLFVBQVU7RUFDVixrQkFBa0I7QURzaEI1Qjs7QUE1b0JBO0VBSWdCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUE0b0JqQzs7QUFqcEJBO0VBV1ksNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwyQkFBMkI7QUEwb0J2Qzs7QUF2cEJBO0VBZWdCLGtCQUFrQjtBQTRvQmxDOztBQTNwQkE7RUFtQlksaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQTRvQjVCOztBQWhxQkE7RUF1Qm9CLGVBQWU7QUE2b0JuQzs7QUFwcUJBO0VBMEJvQixpQkFBaUI7QUE4b0JyQzs7QUF4cUJBO0VBK0JvQixxQkFBcUI7QUE2b0J6Qzs7QUE1cUJBO0VBbUNnQix1QkFBdUI7QUE2b0J2Qzs7QUFockJBO0VBcUNvQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUErb0JqRDs7QUFoc0JBO0VBcURnQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBK29CcEM7O0FBcnNCQTtFQTREZ0IsYUFDSjtBQTRvQlo7O0FBenNCQTtFQWlFZ0IsYUFDSjtBQTJvQlo7O0FBcG9CQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0FBdW9CaEI7O0FBcm9CQTtFQUNJLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixlQUFlO0FBd29CbkI7O0FBdG9CQTtFQUNJLGNBQWM7RUFHZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBdW9CdkI7O0FBbm9CQTs7RUFFSSxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtBQXNvQnZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3RlYWNoZXIvdGVhY2hlci1saXN0L3RlYWNoZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIj5cIjtcbiAgY29sb3I6ICMzMzRENkU7XG59XG4uYnJlYWRjcnVtYntcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5tYXJnaW4tYm90dG9tOiAwcHg7XG5wYWRkaW5nLWxlZnQ6IDA7XG59XG4uYnJlYWRjcnVtYi1pdGVtPmF7XG5jb2xvcjogIzMzNEQ2RTtcbmZvbnQtd2VpZ2h0OiA2MDA7XG5mb250LXNpemU6IDE2cHg7XG59XG5cblxuXG4udzk4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4ubmF2LWl0ZW0ge1xuICAubmF2LWxpbmsge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICAuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcbiAgbWFyZ2luOiAtMXJlbSAzLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLncxNSB7XG4gIHdpZHRoOiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmU1ZjA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubGlzdCB7IGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDBweDtcbiAgbWFyZ2luOiA3cHggMHB4O1xuICBhIHsgc3BhbiB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICMzMzRkNmU7XG4gIH1cbiAgfVxuICBpbWcge1xuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH1cbn1cbn1cbi5hZGRfbWFzdGVyX3RhZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDljZjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG59XG4uaW5wdXQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmODtcbiovXG59XG4ubWFnbmlmeWluZy1nbGFzcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0ZyYW1lMS5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgdGV4dC1pbmRlbnQ6IDVweDtcbn1cbi5oZWFkZXItaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDcwMHB4O1xuICBjb2xvcjogIzYxNzU4ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0ZyYW1lMS5zdmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmODsqL1xufVxuLmhlYWRlci1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbi1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ucC0xNSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuc2VsZWN0IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBjb2xvcjogI2I2YjhiYjtcbn1cblxuXG5cbnRhYmxle1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOjE1cHg7XG59XG50aGVhZHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICBmb250LXdlaWdodDogNjAwO1xuICAgdGR7XG4gICAgICAgYmFja2dyb3VuZDogI0RGRTVGMDtcbiAgIH1cbn1cbnRke1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICBmb250LXNpemU6IDEycHg7XG59XG50Ym9keXtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbnRye1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzotMXB4IDFweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xcHggMXB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuLnNlY3Rpb246OmJlZm9yZSB7XG4gIGhlaWdodDogMC40ZW07XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgY29udGVudDogJyc7XG59XG5cblxuLnc5NntcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xuICAvLyBtYXJnaW46IDBweCAxcmVtO1xuICAvLyBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbi5wLTEwe3BhZGRpbmctdG9wOiAxMHB4O31cbi5wLTMwe3BhZGRpbmctdG9wOiAzMHB4O31cbi5wLTEwLTB7IHBhZGRpbmc6IDlweCAwcHg7fVxuLnllc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDRkZBQztcbiAgY29sb3I6ICMzMjNDNDc7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ubm97XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNGODg7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLnNlYXJjaHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDBcbn1cbi5hcmVhLXNlbGVjdHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG59XG4uaW5wdXQtd2lkdGh7XG4gIHdpZHRoOiAxODBweDtcbn1cbi5wbC0xMHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnByLTQwe1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uY2FuY2Vse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6MXB4IHNvbGlkICMxMDlDRjE7XG4gICBjb2xvcjogIzEwOUNGMTtcbiAgIHBhZGRpbmc6IDlweCAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLmZvcm0tY2hlY2stbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDBcbn1cbi53aWR0aDIwNXtcbiAgd2lkdGg6IDIwNXB4O1xufVxuLmRlc2NyaXB0aW9ue1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG59XG4gaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvSWNvbi5zdmcnKSBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBwYWRkaW5nOiAycHggMHB4O1xufVxuaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gIHBhZGRpbmc6IDZweCA0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5hZGR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwXG59XG4ubXItMTB7XG5tYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JheXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjNGODtcbiAgaGVpZ2h0OiA5MnZoO1xufVxuLypjaGF0Ym94Ki9cbi5jaGF0Ym94MXtcbiAgd2lkdGg6IDQ2NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDJ7XG4gIHdpZHRoOiAxMTUzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDN7XG4gIHdpZHRoOiA0NjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g0e1xuICB3aWR0aDogMTE1M3B4O1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g1e1xuICB3aWR0aDogNDY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94NntcbiAgd2lkdGg6IDEwMzNweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94N3tcbiAgd2lkdGg6OTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g4e1xuICB3aWR0aDogNDY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94OXtcbiAgd2lkdGg6IDgxOXB4O1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3gtc2VsZWN0e1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uY2hhdGJveC1pbnB1dHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuLmNvbC1mb3JtLWxhYmVse1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjQUZCM0I3O1xufVxuLnVwbG9hZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbn1cbmlucHV0W3R5cGU9XCJmaWxlXCJde1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4jeW91ckJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4udG9we1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDBweDtcbn1cbi5kaXZpc2lvbntcbiAgYm9yZGVyLXJpZ2h0OiAgMnB4IHNvbGlkICNDNEM0QzQ7IFxuICBtYXJnaW46IDQwcHggMHB4O1xufVxuLnJhZGlve1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY29udGFpbmVyYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5cbi5jb250YWluZXJjIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cblxuLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTA5Q0YxO1xufVxuXG4uY29udGFpbmVyYyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cblxuLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4uY29udGFpbmVyYyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi5jb250YWluZXJjIC5jaGVja21hcms6YWZ0ZXIge1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4udG9wMntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG4ubG9naW57ICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTdweDtcbiAgICBsZWZ0OiAycHg7XG59XG4udGh1bWJ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbm1haW4ge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLnJpZ2h0IHsgXG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxudGhlYWQge1xuICB0ZCwgdGgge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi9kYXRhLXNldHVwL2RhdGEtc2V0dXAtaG9tZS9kYXRhLXNldHVwLWhvbWUuY29tcG9uZW50LnNjc3NcIjtcbkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2Nzc1wiO1xudGFibGUge1xuICAgIHRoZWFkIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRib2R5IHtcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC5jb2wtbmV3IHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHIge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIC5lZGl0IHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYW5jaG9yVGFnIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIC5lZGl0T3B0aW9ucyBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kaXNwbGF5Q29tcCB7XG4gICAgICAgICAgICAudmlldy1jb21wIHt9XG4gICAgICAgICAgICAuZWRpdC1jb21wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXRDb21wIHtcbiAgICAgICAgICAgIC52aWV3LWNvbXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5lZGl0LWNvbXAge31cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG50aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlYWVjO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbnRyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2UwZWFlYztcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udGFibGVCb2R5U2Nyb2xsIHRib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyBtYXgtaGVpZ2h0OiA3MHZoO1xuICAgIC8vIG1pbi1oZWlnaHQ6IDcwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxcHggc29saWQgcmdiYSgyMTEsIDIxMiwgMjEzLCAwLjUpO1xufVxuLnRhYmxlQm9keVNjcm9sbCB0aGVhZCxcbnRib2R5IHRyIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufSIsIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher-list/teacher-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher-list/teacher-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TeacherListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherListComponent", function() { return TeacherListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/teacherService/teacherApi.service */ "./src/app/services/teacherService/teacherApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let TeacherListComponent = /** @class */ (() => {
    let TeacherListComponent = class TeacherListComponent {
        constructor(ApiService, route, toastCtrl, auth) {
            this.ApiService = ApiService;
            this.route = route;
            this.toastCtrl = toastCtrl;
            this.auth = auth;
            this.teacherListDataSource = [];
            this.teacherList = [];
            this.PageIndex = 1;
            this.studentdisplaysize = 25;
            this.searchData = [];
            this.searchDataFlag = false;
            this.dataStatus = 1;
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.isShoweOnlineExam = false;
            this.dummyArr = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
            this.columnMaps = [0, 1, 2, 3, 4, 5];
            this.searchValue = "";
            this.type = '';
        }
        ngOnInit() {
            let type = Number(sessionStorage.getItem('institute_setup_type'));
            this.isOnlineExamAllow(type);
            this.getDataFromServer();
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.type = 'batch';
                }
                else {
                    this.type = 'course';
                }
            });
        }
        getDataFromServer() {
            this.PageIndex = 1;
            this.auth.showLoader();
            this.ApiService.getAllTeacherList().subscribe((data) => {
                this.dataStatus = 2;
                this.auth.hideLoader();
                this.totalRow = data.length;
                this.teacherListDataSource = data;
                for (let i = 0; i < this.teacherListDataSource.length; i++) {
                    this.teacherListDataSource[i].teacher_user_id = i + 1;
                    if (this.teacherListDataSource[i].date_of_joining != "") {
                        this.teacherListDataSource[i].date_of_joining = moment__WEBPACK_IMPORTED_MODULE_2__(this.teacherListDataSource[i].date_of_joining).format('DD-MM-YYYY');
                    }
                }
                this.fetchTableDataByPage(this.PageIndex);
            }, error => {
                this.dataStatus = 2;
                this.auth.hideLoader();
                let data = {
                    type: "error",
                    title: "",
                    body: error.error.message
                };
                this.toastCtrl.popToast(data);
            });
        }
        deleteTeacherDeatils(row) {
            if (confirm("Are you sure, you want to delete this teacher?")) {
                this.ApiService.deleteTeacher(row.teacher_id).subscribe(res => {
                    this.searchValue = "";
                    this.searchDataFlag = false;
                    let data = {
                        type: "success",
                        title: "",
                        body: "Teacher Deleted Successfully"
                    };
                    this.toastCtrl.popToast(data);
                    this.getDataFromServer();
                }, err => {
                    //console.log(err);
                    let data = {
                        type: "error",
                        title: "",
                        body: err.error.message
                    };
                    this.toastCtrl.popToast(data);
                });
            }
        }
        isOnlineExamAllow(type) {
            this.isShoweOnlineExam = this.checkInstSetupType(type, 4);
        }
        checkInstSetupType(value, role) {
            if (value != 0) {
                var start = 2;
                var count = 1;
                while (start != value) {
                    count++;
                    start = start + 2;
                }
                var arr = [0, 0, 0, 0, 0, 0, 0, 0];
                var s = count.toString(2);
                var k = 0;
                for (var i = s.length - 1; i >= 0; i--) {
                    arr[k] = parseInt(s.charAt(i));
                    k++;
                }
                switch (role) {
                    case 2:
                        if (arr[0] == 1)
                            return true;
                        break;
                    case 4:
                        if (arr[1] == 1)
                            return true;
                        break;
                    case 8:
                        if (arr[2] == 1)
                            return true;
                        break;
                    case 16:
                        if (arr[3] == 1)
                            return true;
                        break;
                    case 32:
                        if (arr[4] == 1)
                            return true;
                        break;
                    case 64:
                        if (arr[5] == 1)
                            return true;
                        break;
                    case 128:
                        if (arr[6] == 1)
                            return true;
                        break;
                    case 256:
                        if (arr[7] == 1)
                            return true;
                        break;
                    default: return false;
                }
                return false;
            }
            else {
                return false;
            }
        }
        searchTeacher() {
            if (this.searchValue != "" && this.searchValue != null) {
                let searchData = this.teacherListDataSource.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchValue.toLowerCase())));
                this.searchData = searchData;
                this.totalRow = searchData.length;
                this.searchDataFlag = true;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else {
                this.searchDataFlag = false;
                this.fetchTableDataByPage(this.PageIndex);
                this.totalRow = this.teacherListDataSource.length;
            }
        }
        rowSelectEvent(i) {
            this.selectedRow = i;
        }
        // pagination functions
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.studentdisplaysize * (index - 1);
            this.teacherList = this.getDataFromDataSource(startindex);
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
            if (this.searchDataFlag) {
                data = this.searchData.slice(startindex, startindex + this.studentdisplaysize);
            }
            else {
                data = this.teacherListDataSource.slice(startindex, startindex + this.studentdisplaysize);
            }
            return data;
        }
        updateTableBatchSize(event) {
            this.studentdisplaysize = event;
            this.fetchTableDataByPage(this.PageIndex);
        }
    };
    TeacherListComponent.ctorParameters = () => [
        { type: _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_5__["TeacherAPIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] }
    ];
    TeacherListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./teacher-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-list/teacher-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./teacher-list.component.scss */ "./src/app/components/course-module/teacher/teacher-list/teacher-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_5__["TeacherAPIService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]])
    ], TeacherListComponent);
    return TeacherListComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: TeacherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherRoutingModule", function() { return TeacherRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _teacher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher.component */ "./src/app/components/course-module/teacher/teacher.component.ts");
/* harmony import */ var _teacher_list_teacher_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-list/teacher-list.component */ "./src/app/components/course-module/teacher/teacher-list/teacher-list.component.ts");
/* harmony import */ var _teacher_edit_teacher_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teacher-edit/teacher-edit.component */ "./src/app/components/course-module/teacher/teacher-edit/teacher-edit.component.ts");
/* harmony import */ var _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teacher-view/teacher-view.component */ "./src/app/components/course-module/teacher/teacher-view/teacher-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let TeacherRoutingModule = /** @class */ (() => {
    let TeacherRoutingModule = class TeacherRoutingModule {
    };
    TeacherRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _teacher_component__WEBPACK_IMPORTED_MODULE_2__["TeacherComponent"],
                        children: [
                            {
                                path: '',
                                redirectTo: 'list'
                            },
                            {
                                path: 'list',
                                component: _teacher_list_teacher_list_component__WEBPACK_IMPORTED_MODULE_3__["TeacherListComponent"]
                            },
                            {
                                path: 'add',
                                component: _teacher_edit_teacher_edit_component__WEBPACK_IMPORTED_MODULE_4__["TeacherEditComponent"] //TeacherAddComponent make one comp for add and edit 
                            },
                            {
                                path: 'edit/:id',
                                component: _teacher_edit_teacher_edit_component__WEBPACK_IMPORTED_MODULE_4__["TeacherEditComponent"]
                            },
                            {
                                path: 'view/:id',
                                component: _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_5__["TeacherViewComponent"]
                            }
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ],
            providers: [],
            declarations: []
        })
    ], TeacherRoutingModule);
    return TeacherRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher-view/teacher-view.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher-view/teacher-view.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n@media screen and (max-width: 995px), screen and (max-height: 768px) {\n  .common-table {\n    margin-left: 0px !important;\n    margin-top: 15px;\n    margin-right: 15px !important;\n    max-height: 480px;\n    overflow: hidden;\n    width: 100%;\n  }\n  .common-table .table-scroll-wrapper {\n    max-height: 430px;\n  }\n  .common-table ::-webkit-scrollbar {\n    display: block;\n    width: 7px;\n    height: 7px;\n  }\n}\n.madeDate.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 21px;\n  top: 33px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.view-icon {\n  background: url('view_details1.svg') no-repeat;\n  width: 13px;\n  height: 15px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 850px;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.teacherPopUpWrapper ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.teacherPopUpWrapper .popUpTableDiv {\n  max-height: 450px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.imageUploadWrapper {\n  margin-top: 1%;\n  margin-right: 5%;\n}\n.extraMargin {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.marginTenPixel {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.questionInfo {\n  margin-right: 2px;\n  height: 20px;\n  width: 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.questionInfo .qInfoIcon {\n  color: #0084f6;\n  border-color: #0084f6;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n.add-edit {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.add-edit i {\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 14px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.closeBtnClass {\n  line-height: 11px !important;\n}\n.create-standard-form {\n  margin: 10px 0;\n  padding: 10px 20px 20px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3RlYWNoZXIvdGVhY2hlci12aWV3L3RlYWNoZXItdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FD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cG9uZW50cy9jb3Vyc2UtbW9kdWxlL3RlYWNoZXIvdGVhY2hlci12aWV3L3RlYWNoZXItdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NXB4KSxcbnNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgLmNvbW1vbi10YWJsZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnRhYmxlLXNjcm9sbC13cmFwcGVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQzMHB4O1xuICAgICAgICB9XG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuLm1hZGVEYXRle1xuXG5cbiAgICAgICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHRvcDogMzNweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG59XG4udmlldy1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdmlld19kZXRhaWxzMS5zdmcnKSBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5cbi8qIHBvcFVwIFNjc3MgKi9cblxuLnBvcHVwV3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbiAgICB6LWluZGV4OiAxMDA7IC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLnBvcHVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4NTBweDsgLy8gbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bzsgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbn1cblxuLnBvcHVwLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDsgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xuICAgIHRyYW5zaXRpb246IHVuc2V0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbi5jbG9zZVBvcHVwIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJi50b3BMZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgfVxuICAgICYuYm90dG9tTGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZmFkZUluIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4ucG9wdXBXcmFwcGVyTW9iIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgLy8gb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAuY2xvc2VQb3B1cCB7XG4gICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgdG9wOiAtMjdweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4ucG9wdXAtbW9iIHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICBib3R0b206IC03MCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucG9wdXBXcmFwcGVyTW9iLnNob3dQb3B1cE1vYiAucG9wdXAtbW9iIHtcbiAgICBib3R0b206IDA7XG59XG5cbi50ZWFjaGVyUG9wVXBXcmFwcGVyIHtcbiAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICB9XG4gICAgLnBvcFVwVGFibGVEaXYge1xuICAgICAgICBtYXgtaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgfVxufVxuXG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5pbWFnZVVwbG9hZFdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5leHRyYU1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hcmdpblRlblBpeGVsIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5xdWVzdGlvbkluZm8ge1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAucUluZm9JY29uIHtcbiAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggI2NjYyBpbnNldDtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICB9XG59XG5cbi5hZGQtZWRpdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29tbW9uLWJsdWU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuZXhwZW5kLWJveCB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5jbG9zZUJ0bkNsYXNzIHtcbiAgICBsaW5lLWhlaWdodDogMTFweCAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLXN0YW5kYXJkLWZvcm0ge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgLmZvcm0tY3RybCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher-view/teacher-view.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher-view/teacher-view.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TeacherViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherViewComponent", function() { return TeacherViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/teacherService/teacherApi.service */ "./src/app/services/teacherService/teacherApi.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



// import { window } from 'ngx-bootstrap/utils/facade/browser';
// import { window } from 'ngx-bootstrap/windows';


// import { windows } from 'fontawesome';
let TeacherViewComponent = /** @class */ (() => {
    let TeacherViewComponent = class TeacherViewComponent {
        constructor(route, ApiService, toastCtrl, routeParam) {
            this.route = route;
            this.ApiService = ApiService;
            this.toastCtrl = toastCtrl;
            this.routeParam = routeParam;
            this.selectedBatch = "";
            this.selectedFromDate = "";
            this.selectedToDate = "";
            this.assignedBatchList = [];
            this.visitingBatchList = [];
            this.totalClassesTaken = 0;
            this.totalHourSpent = 0;
            this.visitingTotalClasses = 0;
            this.visitingTotalHour = 0;
            this.teacherTakenClassesPopUp = false;
            this.assignedOrGuestPopUp = "";
            this.studentImage = '';
            this.containerWidth = "150px";
            this.containerHeight = "150px";
            this.readonly = true;
            this.advanceFilter = false;
            this.routeParam.params.subscribe(params => {
                this.selectedTeacherId = params['id'];
                // console.log(this.selectedTeacherId);
            });
        }
        ngOnInit() {
            this.getTeacherViewInfo();
            this.getAllBatchesInformation();
            this.getInfoFromDashBoard({ "batch_id": -1, "from_date": "", "to_date": "" });
            this.getInfoFromGuest({ "batch_id": -1, "from_date": "", "to_date": "" });
        }
        getTeacherViewInfo() {
            this.ApiService.getViewInfoOfTeacher(this.selectedTeacherId).subscribe((data) => {
                this.studentImage = data.photo;
                this.selectedTeacherInformation = data;
            }, error => {
                //console.log(error);
            });
        }
        getAllBatchesInformation() {
            this.ApiService.getTeacherViewBatchesInfo().subscribe(data => {
                this.batchesList = data;
            }, error => {
                //console.log(error);
            });
        }
        searchTeacherInfo() {
            if (moment__WEBPACK_IMPORTED_MODULE_3__() < moment__WEBPACK_IMPORTED_MODULE_3__(this.selectedFromDate)) {
                this.messageNotifier('error', '', 'Please enter valid date');
                return;
            }
            if (moment__WEBPACK_IMPORTED_MODULE_3__() < moment__WEBPACK_IMPORTED_MODULE_3__(this.selectedToDate)) {
                this.messageNotifier('error', '', 'Please enter valid date');
                return;
            }
            let data = {};
            data.batch_id = this.selectedBatch;
            data.from_date = this.selectedFromDate ? moment__WEBPACK_IMPORTED_MODULE_3__(this.selectedFromDate).format('YYYY-MM-DD') : '';
            data.to_date = this.selectedToDate ? moment__WEBPACK_IMPORTED_MODULE_3__(this.selectedToDate).format('YYYY-MM-DD') : '';
            this.getInfoFromDashBoard(data);
            this.getInfoFromGuest(data);
        }
        getInfoFromDashBoard(data) {
            this.assignedBatchList = [];
            this.ApiService.customizedTeacherSearchOnDashBoardView(data, this.selectedTeacherId).subscribe(data => {
                this.assignedBatchList = data;
                this.totalClassesTaken = this.getPerticularKeyValue(data, "total_teacher_classes", '');
                this.totalHourSpent = this.getPerticularKeyValue(data, 'total_hours', ' ');
            }, error => {
                //console.log(error)
            });
        }
        getInfoFromGuest(data) {
            this.visitingBatchList = [];
            this.ApiService.customizedTeacherSearchOnGuestBatchView(data, this.selectedTeacherId).subscribe(data => {
                this.visitingBatchList = data;
                this.visitingTotalClasses = this.getPerticularKeyValue(data, "total_teacher_classes", '');
                this.visitingTotalHour = this.getPerticularKeyValue(data, 'total_hours', ' ');
            }, error => {
                this.messageNotifier('error', '', error.error.message);
                //console.log(error)
            });
        }
        cancelViewDetails() {
            this.route.navigateByUrl('/view/course/setup/teacher');
        }
        getPerticularKeyValue(data, dataKey, splitOpearator) {
            let totalCount = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty(dataKey) && data[i][dataKey] != "" && data[i][dataKey] != null) {
                    if (splitOpearator != "") {
                        totalCount += Number(data[i][dataKey].split(' ')[0]);
                    }
                    else {
                        totalCount += data[i][dataKey];
                    }
                }
            }
            return totalCount;
        }
        exportDetailsInExcel() {
            //console.log("Excel");
        }
        printBtnClick() {
            window.print();
        }
        viewDetailOfBatch(row, i) {
            this.assignedOrGuestPopUp = "Assigned";
            this.teacherTakenClassesPopUp = true;
            this.getBatchDetailsInfo(row);
        }
        getBatchDetailsInfo(row) {
            let data = {};
            data.batch_id = row.batch_id;
            data.from_date = "";
            data.to_date = "";
            this.ApiService.viewBatchDetails(data, this.selectedTeacherId).subscribe((data) => {
                this.teacherTakenClasses = data;
                //console.log(data);
            }, error => {
                //console.log(error);
            });
        }
        teacherTakenClassesPopupClose() {
            this.assignedOrGuestPopUp = "";
            this.teacherTakenClassesPopUp = false;
        }
        viewDetailOfVisitingBatch(row, i) {
            this.assignedOrGuestPopUp = "Guest";
            this.teacherTakenClassesPopUp = true;
            let data = {};
            data.batch_id = row.batch_id;
            data.from_date = "";
            data.to_date = "";
            this.ApiService.viewBatchDetails(data, this.selectedTeacherId).subscribe((data) => {
                this.guestBatchList = data;
                //console.log(data);
            }, error => {
                //console.log(error);
            });
        }
        setImage(e) {
            this.studentImage = e;
        }
        toggleFilter() {
            if (this.advanceFilter == false) {
                this.advanceFilter = true;
                document.getElementById('showCloseBtn').style.display = '';
                document.getElementById('showAddBtn').style.display = 'none';
            }
            else {
                this.advanceFilter = false;
                document.getElementById('showCloseBtn').style.display = 'none';
                document.getElementById('showAddBtn').style.display = '';
            }
        }
        messageNotifier(type, title, msg) {
            let data = {
                type: type,
                title: title,
                body: msg
            };
            this.toastCtrl.popToast(data);
        }
    };
    TeacherViewComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__["TeacherAPIService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ];
    TeacherViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher-view',
            template: __importDefault(__webpack_require__(/*! raw-loader!./teacher-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher-view/teacher-view.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./teacher-view.component.scss */ "./src/app/components/course-module/teacher/teacher-view/teacher-view.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__["TeacherAPIService"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TeacherViewComponent);
    return TeacherViewComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS90ZWFjaGVyL3RlYWNoZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher.component.ts ***!
  \***********************************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TeacherComponent = /** @class */ (() => {
    let TeacherComponent = class TeacherComponent {
        constructor() { }
        ngOnInit() {
            let classArray = ['lione', 'litwo', 'lithree', 'lifour', 'lifive', 'lisix', 'liseven', 'lieight', 'linine', 'lizero'];
            classArray.forEach(function (className) {
                if (document.getElementById(className)) {
                    document.getElementById(className).classList.remove('active');
                }
            });
        }
    };
    TeacherComponent.ctorParameters = () => [];
    TeacherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher',
            template: __importDefault(__webpack_require__(/*! raw-loader!./teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/teacher/teacher.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./teacher.component.scss */ "./src/app/components/course-module/teacher/teacher.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TeacherComponent);
    return TeacherComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/teacher/teacher.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/course-module/teacher/teacher.module.ts ***!
  \********************************************************************/
/*! exports provided: TeacherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherModule", function() { return TeacherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _teacher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher.component */ "./src/app/components/course-module/teacher/teacher.component.ts");
/* harmony import */ var _teacher_list_teacher_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-list/teacher-list.component */ "./src/app/components/course-module/teacher/teacher-list/teacher-list.component.ts");
/* harmony import */ var _teacher_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-routing.module */ "./src/app/components/course-module/teacher/teacher-routing.module.ts");
/* harmony import */ var _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/teacherService/teacherApi.service */ "./src/app/services/teacherService/teacherApi.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _teacher_add_teacher_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher-add/teacher-add.component */ "./src/app/components/course-module/teacher/teacher-add/teacher-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _teacher_edit_teacher_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher-edit/teacher-edit.component */ "./src/app/components/course-module/teacher/teacher-edit/teacher-edit.component.ts");
/* harmony import */ var _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teacher-view/teacher-view.component */ "./src/app/components/course-module/teacher/teacher-view/teacher-view.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
let TeacherModule = /** @class */ (() => {
    let TeacherModule = class TeacherModule {
    };
    TeacherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // BsDatepickerModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _teacher_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeacherRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"].forRoot()
            ],
            declarations: [
                _teacher_component__WEBPACK_IMPORTED_MODULE_1__["TeacherComponent"],
                _teacher_list_teacher_list_component__WEBPACK_IMPORTED_MODULE_2__["TeacherListComponent"],
                _teacher_add_teacher_add_component__WEBPACK_IMPORTED_MODULE_6__["TeacherAddComponent"],
                _teacher_edit_teacher_edit_component__WEBPACK_IMPORTED_MODULE_8__["TeacherEditComponent"],
                _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_9__["TeacherViewComponent"],
            ],
            providers: [
                _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_4__["TeacherAPIService"]
            ]
        })
    ], TeacherModule);
    return TeacherModule;
})();



/***/ })

}]);
//# sourceMappingURL=teacher-teacher-module-es2015.js.map