(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-teacher-teacher-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-add/teacher-add.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-add/teacher-add.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTeacherTeacherAddTeacherAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"clearfix\">\n  <div class=\"row\">\n    <h2 class=\"pull-left\" style=\"margin-left:15px\">Add Teacher</h2>\n  </div>\n  <aside class=\"c-lg-6 c-md-6 c-sm-6\">\n    <div class=\"pull-left\">\n      <form [formGroup]=\"addTeacherForm\" novalidate (ngSubmit)=\"addNewTeacherInfo()\">\n        <div class=\"row field-wrapper\">\n          <label for=\"name\">Teacher Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" formControlName=\"teacher_name\" name=\"name\">\n\n          <div *ngIf=\"addTeacherForm.controls['teacher_name'].invalid && (addTeacherForm.controls['teacher_name'].dirty || addTeacherForm.controls['teacher_name'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"addTeacherForm.controls['teacher_name'].hasError('required')\">\n              Teacher Name is required.\n            </div>\n          </div>\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"contNumber\">Contact Number\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" maxlength=\"10\" class=\"form-ctrl\" formControlName=\"teacher_phone\" name=\"contNumber\">\n\n          <div *ngIf=\"addTeacherForm.controls['teacher_phone'].invalid && (addTeacherForm.controls['teacher_phone'].dirty || addTeacherForm.controls['teacher_phone'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"addTeacherForm.controls['teacher_phone'].hasError('required')\">\n              Contact Number is required.\n            </div>\n            <div *ngIf=\"addTeacherForm.controls['teacher_phone'].hasError('minlength')\">\n              Contact Number is not valid.\n            </div>\n            <div *ngIf=\"addTeacherForm.controls['teacher_phone'].hasError('maxlength')\">\n              Contact Number is not valid.\n            </div>\n          </div>\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"emailID\">Email Id\n          </label>\n          <input type=\"email\" class=\"form-ctrl\" name=\"emailID\" pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z]+\\.[a-zA-Z.]{2,5}$\" formControlName=\"teacher_email\">\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"CurrentAddress\">Current Address\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" formControlName=\"teacher_curr_addr\" name=\"CurrentAddress\">\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"alternateNo\">Alternate Contact Number\n          </label>\n          <input type=\"text\" maxlength=\"10\" class=\"form-ctrl\" name=\"alternateNo\" formControlName=\"teacher_alt_phone\">\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"standard\">Standard\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" name=\"standard\" formControlName=\"teacher_standards\">\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"subject\">Subjects\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" name=\"subject\" formControlName=\"teacher_subjects\">\n\n        </div>\n        <div class=\"row field-wrapper\">\n          <label for=\"salary\">Salary (Per Hour)\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" name=\"salary\" formControlName=\"hour_rate\">\n\n        </div>\n        <div class=\"row field-wrapper\" *ngIf=\"enableBiometric == '1'\">\n          <label for=\"biometric\">Attendance Card ID\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" name=\"biometric\" formControlName=\"attendance_device_id\">\n\n        </div>\n        <div class=\"extra-margin\" style=\"margin-top: 15px;\">\n\n          <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\">\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"isActive\" formControlName=\"is_active\" class=\"form-checkbox\">\n              <label for=\"isActive\">Is Active</label>\n            </div>\n          </div>\n\n          <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\">\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"allow\" formControlName=\"is_allow_teacher_to_only_mark_attendance\" class=\"form-checkbox\">\n              <label for=\"allow\">Allow Teacher to only mark attendance</label>\n            </div>\n          </div>\n\n\n          <!-- <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\">\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"markAttendance\" formControlName=\"is_student_mgmt_flag\" class=\"form-checkbox\">\n              <label for=\"markAttendance\">Allow faculty to view Contact details of student</label>\n            </div>\n          </div> -->\n        </div>\n        <div class=\"row\">\n          <div class=\"pull-right\">\n            <button routerLink=\"/view/teacher\" class=\"btn\">Cancel</button>\n            <button [disabled]='!addTeacherForm.valid' class=\"btn fullBlue\" style=\"font-size: 16px;height: 40px;\" type=\"submit\">Save</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </aside>\n  <aside class=\"c-lg-6 c-md-6 c-sm-6\">\n    <proctur-image [serverImg]=\"studentImage\" [containerWidth]=\"containerWidth\" (setImage)=\"setImage($event)\">\n\n    </proctur-image>\n  </aside>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-edit/teacher-edit.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-edit/teacher-edit.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTeacherTeacherEditTeacherEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"middle-section clearFix\">\n    <section class=\"middle-top mb0 clearFix\" style=\"margin-bottom: 10px;\">\n        <h1 class=\"pull-left\" *ngIf=\"selectedTeacherId==undefined\">\n            Add Teacher\n        </h1>\n        <h1 class=\"pull-left\" *ngIf=\"selectedTeacherId != undefined\">\n            Edit Teacher\n        </h1>\n    </section>\n\n    <section class=\"middle-main clearFix\">\n\n        <aside class=\"c-lg-6 c-md-6 c-sm-6\">\n            <div class=\"pull-left\">\n                <form [formGroup]=\"editTeacherForm\" novalidate (ngSubmit)=\"addOrEditFun()\">\n                    <div class=\"row field-wrapper\">\n                        <label for=\"name\">Teacher Name\n                            <span class=\"text-danger\">*</span>\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" formControlName=\"teacher_name\" name=\"name\">\n\n                        <div *ngIf=\"editTeacherForm.controls['teacher_name'].invalid && (editTeacherForm.controls['teacher_name'].dirty || editTeacherForm.controls['teacher_name'].touched)\"\n                            class=\"alert alert-danger\">\n                            <div *ngIf=\"editTeacherForm.controls['teacher_name'].hasError('required')\">\n                                Teacher Name is required.\n                            </div>\n                        </div>\n                    </div>\n                      \n                    <div class=\"row field-wrapper\">\n                        <label for=\"contNumber\">Contact Number\n                            <span class=\"text-danger\">*</span>\n                        </label><br>\n                        <span class=\"countryCallingCode\"style=\"width: 30%\">\n                                <select id=\"country_id\" class=\"form-ctrl\" formControlName=\"country_id\" name=\"country\" \n                                [disabled]=\"countryDetails.length<=1\" (change)=\"onChangeObj($event.target.value)\" style=\"height: 29px;padding: 0\">\n                                <option value=\"\"></option>\n                                <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                                  {{data.country_code}} +{{data.country_calling_code}}\n                                </option>\n                              </select>\n                        </span>\n                        \n                        <input type=\"text\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                         style=\"width: 70%\"  class=\"form-ctrl\" formControlName=\"teacher_phone\" name=\"contNumber\" required>\n\n                        <div *ngIf=\"editTeacherForm.controls['teacher_phone'].invalid && (editTeacherForm.controls['teacher_phone'].dirty || editTeacherForm.controls['teacher_phone'].touched)\"\n                            class=\"alert alert-danger\">\n                            <div *ngIf=\"editTeacherForm.controls['teacher_phone'].hasError('required')\">\n                                Contact Number is required.\n                            </div>\n                            <div *ngIf=\"editTeacherForm.controls['teacher_phone'].hasError('minlength')\">\n                                Contact Number is not valid.\n                            </div>\n                            <div *ngIf=\"editTeacherForm.controls['teacher_phone'].hasError('maxlength')\">\n                                Contact Number is not valid.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row field-wrapper\">\n                        <label for=\"emailID\">Email Id\n                        </label>\n                        <input type=\"email\" class=\"form-ctrl\" name=\"emailID\" formControlName=\"teacher_email\">\n                    </div>\n                    <div class=\"row field-wrapper\">\n                        <label for=\"CurrentAddress\">Current Address\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" formControlName=\"teacher_curr_addr\" name=\"CurrentAddress\">\n\n                    </div>\n                    <div class=\"row field-wrapper\"> \n                        <label for=\"alternateNo\">Alternate Contact Number\n                        </label><br>\n                        <span class=\"countryCallingCode\"style=\"width: 30%\">\n                            <select id=\"country_id\" class=\"form-ctrl\" formControlName=\"country_id\" name=\"country\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                            [disabled]=\"countryDetails.length<=1\" (change)=\"onChangeObj($event.target.value)\" style=\"height: 29px;padding: 0\">\n                            <option value=\"\"></option>\n                            <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                              {{data.country_code}} +{{data.country_calling_code}}\n                            </option>\n                          </select>\n                    </span>\n                        <input type=\"text\"maxlength={{instituteCountryDetObj.country_phone_number_length}}\n                        minlength={{instituteCountryDetObj.country_phone_number_length}} style=\"width: 70%\" class=\"form-ctrl\" name=\"alternateNo\" formControlName=\"teacher_alt_phone\">\n \n                    </div>\n                    <div class=\"row field-wrapper\">\n                        <label for=\"standard\">Standard\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" name=\"standard\" formControlName=\"teacher_standards\">\n\n                    </div>\n                    <div class=\"row field-wrapper\">\n                        <label for=\"subject\">Subjects\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" name=\"subject\" formControlName=\"teacher_subjects\">\n\n                    </div>\n                    <div class=\"row field-wrapper\">\n                        <label for=\"salary\">Salary (Per Hour)\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" name=\"salary\" formControlName=\"hour_rate\">\n\n                    </div>\n                    <div class=\"row field-wrapper\" *ngIf=\"enableBiometric == '1'\" [ngClass]=\"{'has-value' : attendance_device_id !=''}\">\n                        <label for=\"biometric\">Attendance Card ID\n                        </label>\n                        <input type=\"text\" class=\"form-ctrl\" name=\"biometric\" formControlName=\"attendance_device_id\">\n\n                    </div>\n                    <div class=\"extra-margin\" style=\"margin-top: 15px;\">\n\n                        <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\">\n                            <div class=\"field-checkbox-wrapper\">\n                                <input type=\"checkbox\" value=\"\" name=\"isActive\" formControlName=\"is_active\" class=\"form-checkbox\">\n                                <label for=\"isActive\">Is Active</label>\n                            </div>\n                        </div>\n\n                        <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\">\n                            <div class=\"field-checkbox-wrapper\">\n                                <input type=\"checkbox\" value=\"\" name=\"allow\" formControlName=\"is_allow_teacher_to_only_mark_attendance\" class=\"form-checkbox\">\n                                <label for=\"allow\">Allow teacher to only mark attendance</label>\n                            </div>\n                        </div>\n\n\n                        <!-- <div class=\"field-checkbox-wrapper\" style=\"margin-left: -40px;\">\n                            <div class=\"field-checkbox-wrapper\">\n                                <input type=\"checkbox\" value=\"\" name=\"markAttendance\" formControlName=\"is_student_mgmt_flag\" class=\"form-checkbox\">\n                                <label for=\"markAttendance\">Allow Faculty to view Contact details of student</label>\n                            </div>\n                        </div> -->\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"pull-right\">\n                            <button routerLink=\"/view/teacher\" class=\"btn\">Cancel</button>\n                            <button  class=\"btn fullBlue\" style=\"font-size: 16px;height: 40px;\" type=\"submit\">Save</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </aside>\n        <aside class=\"c-lg-6 c-md-6 c-sm-6\">\n            <div class=\"profileWrapper\">\n                <proctur-image [serverImg]=\"studentImage\" [containerWidth]=\"containerWidth\" (setImage)=\"setImage($event)\">\n\n                </proctur-image>\n            </div>\n            <div class=\"row\" style=\"margin-top:15%\">\n                <div class=\"c-sm-4 c-md-4 c-lg-4\" style=\"margin-top: 10px;padding-left: 40px\" *ngIf=\"(hasIdCard == 'Y')\">\n                    <fieldset>\n                        <legend style=\"color: #0084f6;\">Download Id-Card</legend>\n                        <a>\n                            <img #uploadedImage src=\"assets/images/download_doc.jpg\" style=\"width: 30px;\" (click)=\"downloadIdCard()\" title=\"Download Attachment\">\n                        </a>\n                        <a #uploadImageAnchor class=\"hide\"></a>\n                    </fieldset>\n                </div>\n                <div class=\"c-sm-4 c-md-4 c-lg-4\">\n                    <div class=\"field-wrapper\">\n                        <input class=\"hide\" type=\"file\" #idCardUpload accept=\"image/gif,image/jpeg,image/jpg,image/png\" (change)=\"onChangeIdCardUpload()\">\n                        <input *ngIf=\"(hasIdCard == 'Y')\" type=\"button\" class=\"btn\" value=\"Update Id-Card\" (click)=\"updateIdCard($event)\">\n                        <input *ngIf=\"(hasIdCard == 'N')\" type=\"button\" class=\"btn\" value=\"Upload Id-Card\" (click)=\"updateIdCard($event)\">\n                    </div>\n                </div>\n            </div>\n        </aside>\n\n    </section>\n\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-list/teacher-list.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-list/teacher-list.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTeacherTeacherListTeacherListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"middle-section clearFix\">\n  <section class=\"middle-top mb0 clearFix\" style=\"margin-bottom: 15px;\">\n    <div class=\"pull-left\" style=\"margin-top:20px;\">\n      <h1>\n        Teacher\n      </h1>\n    </div>\n    <div class=\"\">\n      <div class=\"field-wrapper\">\n        <div class=\"btnWrapper\">\n          <button type=\"button\" class=\"btn pull-right\" name=\"button\" routerLink='/view/teacher/add'>\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n            &nbsp; Add Teacher\n          </button>\n        </div>\n      </div>\n      <div class=\"search-filter-wrapper\">\n        <input type=\"text\" style=\"width:18%\" #teacherSearch class=\"normal-field pull-right\" id=\"searchTeacher\" placeholder=\"Search\"\n         [(ngModel)]=\"searchValue\" (keyup)=\"searchTeacher()\">\n      </div>\n    </div>\n  </section>\n\n  <section style=\"margin-top: 10px;\">\n    <div class=\"table-scroll-wrapper\">\n      <div class=\"table table-responsive enquiry-table\">\n        <table class=\"teacherTable\">\n          <thead>\n            <tr>\n              <th>\n                Teacher Name\n              </th>\n              <th>\n                Contact No\n              </th>\n              <th>\n                Subject\n              </th>\n              <th>\n                Is Active\n              </th>\n              <th>\n                Edit\n              </th>\n              <th>\n                View Activity\n              </th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"teacherList.length != 0 \">\n            <tr id=\"row{{i}}\" (click)=\"rowSelectEvent(i)\" [class.selected]=\"i == selectedRow\" *ngFor=\"let row of teacherList; let i = index; trackBy: i;\">\n              <td style=\"text-align: left;\">\n                {{row.teacher_name}}\n              </td>\n              <td>\n                {{row.teacher_phone}}\n              </td>\n              <td>\n                {{row.teacher_subjects}}\n              </td>\n              <td>\n                {{row.is_active}}\n              </td>\n              <td class=\"anchorTags\">\n                <!-- (click)=\"editTeacherDeatils(row)\" -->\n                <a class=\"anchorTagCursor\" [routerLink]=\"['/view/teacher/edit',  row.teacher_id]\" style=\"margin-right:5px\">\n                  <i class=\"edit-icon\" aria-hidden=\"true\" title=\"Edit\" style=\"margin-right:5px\"></i>Edit\n                </a>\n                <a class=\"anchorTagCursor\" (click)=\"deleteTeacherDeatils(row)\">\n                  <i class=\"fa fa-trash\" aria-hidden=\"true\" title=\"Delete\" style=\"margin-right:5px\"></i>Delete\n                </a>\n              </td>\n              <td class=\"anchorTags\">\n                  <!-- (click)=\"viewTeacherActivity(row)\" -->\n                <a class=\"anchorTagCursor\"   [routerLink]=\"['/view/teacher/view',  row.teacher_id]\"  >\n                  <i class=\"fas fa fa-eye\" style=\"font-family: FontAwesome ;font-size: 19px;display: inline-block;vertical-align: middle; margin-right:5px\"\n                    title=\"View\"></i>\n                  View\n                </a>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"teacherList.length == 0 && dataStatus === 1\">\n            <tr *ngFor=\"let dummy of dummyArr\">\n              <td *ngFor=\"let c of columnMaps\">\n                <div class=\"skeleton\">\n                </div>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"(teacherList.length == 0 && dataStatus === 2)\">\n            <tr>\n              <td colspan=\"6\">\n                No Batch List Found\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n    <!-- Paginator Here -->\n    <div class=\"filter-res pagination\" style=\"width: 100%;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\"\n          [page]=\"PageIndex\" [perPage]=\"studentdisplaysize\" [count]=\"totalRow\">\n        </pagination>\n      </div>\n    </div>\n  </section>\n\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-view/teacher-view.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-view/teacher-view.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTeacherTeacherViewTeacherViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"middle-section clearFix\">\n  <section class=\"middle-top mb0 clearFix\" style=\"margin-bottom: 10px;\">\n    <h1 class=\"pull-left\">\n      Teacher Profile\n    </h1>\n  </section>\n\n  <section class=\"middle-main clearFix\">\n    <div class=\"c-sm-12\">\n      <div class=\"c-sm-3\">\n        <proctur-image [containerHeight]=\"containerHeight\" [readonly]=\"readonly\" [serverImg]=\"studentImage\" [containerWidth]=\"containerWidth\"\n          (setImage)=\"setImage($event)\">\n\n        </proctur-image>\n      </div>\n      <div class=\"c-sm-9\" *ngIf=\"selectedTeacherInformation\">\n        <div class=\"c-sm-4\">\n          <div class=\"extraMargin\">\n            <label>Name:</label>\n            {{selectedTeacherInformation.teacher_name}}\n          </div>\n          <div class=\"extraMargin\">\n            <label>Email:</label>\n            {{selectedTeacherInformation.teacher_email}}\n          </div>\n          <div class=\"extraMargin\">\n            <label>Contact Number:</label>\n            {{selectedTeacherInformation.teacher_phone}}\n          </div>\n        </div>\n        <div class=\"c-sm-3\">\n          <div class=\"extraMargin\">\n            <label>Standard:</label>\n            {{selectedTeacherInformation.teacher_standards}}\n          </div>\n          <div class=\"extraMargin\">\n            <label>Subject:</label>\n            {{selectedTeacherInformation.teacher_subjects}}\n          </div>\n        </div>\n        <div class=\"c-sm-2\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"clearFix add-edit\">\n      <a (click)=\"toggleFilter()\">\n        <i id=\"showAddBtn\" class=\"addBtnClass\" style=\"border:none;\">+</i>\n        <i id=\"showCloseBtn\" style=\"display:none ; border:none;\" class=\"closeBtnClass\">-</i>\n        <span>Filter</span>\n      </a>\n    </div>\n    <section class=\"clearFix create-standard-form\" *ngIf=\"advanceFilter\">\n      <div class=\"row create-standard-field\">\n        <div class=\"c-sm-2\">\n        </div>\n        <div class=\"c-sm-2\">\n          <div class=\"field-wrapper\">\n            <label for=\"\">Batch</label>\n            <select id=\"\" class=\"form-ctrl\" [(ngModel)]=\"selectedBatch\">\n              <option *ngFor=\"let opt of batchesList\" [value]=\"opt.batch_id\">\n                {{opt.batch_name}}\n              </option>\n            </select>\n\n          </div>\n        </div>\n        <div class=\"c-sm-8 \">\n          <div class=\"field-wrapper datePickerBox c-sm-3 madeDate\">\n            <label for=\"fromDate\">From Date</label>\n            <input type=\"text\" value=\"\" class=\"form-ctrl\" style=\"cursor: pointer;\" name=\"fromDate\" [(ngModel)]=\"selectedFromDate\" bsDatepicker/>\n\n            <!-- <span class=\"date-clear\" name=\"fromDate\" (click)=\"clearDate($event)\">Clear</span> -->\n          </div>\n          <div class=\"field-wrapper datePickerBox c-sm-3 madeDate\">\n            <label for=\"createdDate\">To Date</label>\n            <input type=\"text\" value=\"\" class=\"form-ctrl\" style=\"cursor: pointer;\" name=\"createdDate\" [(ngModel)]=\"selectedToDate\" bsDatepicker\n            />\n\n            <!-- <span class=\"date-clear\" name=\"createdDate\" (click)=\"clearDate($event)\">Clear</span> -->\n          </div>\n          <div class=\"c-sm-3\">\n            <button class=\"btn fullBlue\" (click)=\"searchTeacherInfo()\" style=\"margin-top:13%;\">Go</button>\n          </div>\n        </div>\n      </div>\n\n    </section>\n\n    <div>\n      <div>\n        <h2 class=\"pull-left marginTenPixel\">\n          Assigned Batches Details\n          <div class=\"questionInfo pos-rel\">\n            <span class=\"qInfoIcon\">?</span>\n            <div class=\"tooltip-box-field\">\n              Details of Assigned Batches to the teacher.\n            </div>\n          </div>\n        </h2>\n        <!-- <div class=\"c-sm-4\">\n          <button class=\"btn\" (click)=\"exportDetailsInExcel()\">Excel</button>\n          <button class=\"btn\" (click)=\"printBtnClick()\">Print</button>\n        </div> -->\n      </div>\n      <div class=\"common-table\">\n        <div class=\"table table-responsive\" style=\"overflow: hidden;\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  Batch\n                </th>\n                <th>\n                  Total Students\n                </th>\n                <th>\n                  Total Classes Marked\n                </th>\n                <th>\n                  Total Classes Taken\n                </th>\n                <th>\n                  Total Hours\n                </th>\n                <th>\n                  Computed Salary\n                </th>\n                <th>\n                  View Details\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"row{{i}}\" class=\"displayComp\" *ngFor=\"let row of assignedBatchList; let i = index; trackBy: i;\">\n                <td>\n                  {{row.batch_name}}\n                </td>\n                <td>\n                  {{row.total_students}}\n                </td>\n                <td>\n                  {{row.total_classes}}\n                </td>\n                <td>\n                  {{row.total_teacher_classes}}\n                </td>\n                <td>\n                  {{row.total_hours}}\n                </td>\n                <td>\n                  {{row.comp_sal}}\n                </td>\n                <td>\n                  <a style=\"cursor: pointer;\" (click)=\"viewDetailOfBatch(row , i)\">\n                    <i class=\"view-icon\"></i>View\n                  </a>\n                </td>\n              </tr>\n              <tr *ngIf=\"(assignedBatchList.length > 0)\">\n                <td colspan=\"2\" style=\"text-align:center;\">\n                  Total Classes Taken : {{totalClassesTaken}}\n                </td>\n                <td colspan=\"2\" style=\"text-align:center;\">\n                  Total Hours Spent : {{totalHourSpent}}\n                </td>\n                <td colspan=\"4\">\n                </td>\n              </tr>\n              <tr *ngIf=\"(assignedBatchList.length == 0)\">\n                <td colspan=\"8\" style=\"text-align:center;\">\n                  <span>No Assigned Batches</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div>\n        <h2 class=\"pull-left marginTenPixel\">\n          Visiting Batches Details\n          <div class=\"questionInfo pos-rel\">\n            <span class=\"qInfoIcon\">?</span>\n            <div class=\"tooltip-box-field\">\n              Details of Visting Batches to the teacher.\n            </div>\n          </div>\n        </h2>\n      </div>\n      <div class=\"common-table\">\n        <div class=\"table table-responsive\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  Batch\n                </th>\n                <th>\n                  Total Students\n                </th>\n                <th>\n                  Total Classes Taken\n                </th>\n                <th>\n                  Total Hours\n                </th>\n                <th>\n                  Computed Salary\n                </th>\n                <th>\n                  View Details\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"row{{i}}\" *ngFor=\"let row of visitingBatchList; let i = index; trackBy: i;\">\n                <td>\n                  {{row.batch_name}}\n                </td>\n                <td>\n                  {{row.total_students}}\n                </td>\n                <td>\n                  {{row.total_teacher_classes}}\n                </td>\n                <td>\n                  {{row.total_hours}}\n                </td>\n                <td>\n                  {{row.comp_sal}}\n                </td>\n                <td>\n                  <a style=\"cursor: pointer;\" (click)=\"viewDetailOfVisitingBatch(row , i)\">\n                    <i class=\"view-icon\"></i>View\n                  </a>\n                </td>\n              </tr>\n              <tr *ngIf=\"(visitingBatchList.length > 0)\">\n                <td colspan=\"2\" style=\"text-align:center;\">\n                  Total Classes Taken : {{visitingTotalClasses}}\n                </td>\n                <td colspan=\"2\" style=\"text-align:center;\">\n                  Total Hours Spent : {{visitingTotalHour}}\n                </td>\n                <td colspan=\"2\">\n                </td>\n              </tr>\n              <tr *ngIf=\"(visitingBatchList.length == 0)\">\n                <td colspan=\"6\" style=\"text-align:center;\">\n                  <span>No Visiting Batches</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"marginTenPixel\" style=\"text-align: center;\">\n      <button class=\"btn pull-right\" (click)=\"cancelViewDetails()\">Cancel</button>\n    </div>\n  </section>\n\n</div>\n\n\n\n<!-- Common Popup for Visiting and Assigned Classes PopUp -->\n<!-- =============================================================================== -->\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"teacherTakenClassesPopUp\">\n  <div class=\"popup pos-abs popup-body-container\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"teacherTakenClassesPopupClose()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n          <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n            <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n              <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\" transform=\"translate(992.81 305.77) rotate(45)\" />\n              <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\" transform=\"translate(978.81 305.77) rotate(45)\" />\n            </g>\n            <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\" transform=\"translate(1012 297)\"\n            />\n          </g>\n        </svg>\n      </span>\n      <div class=\"popup-content teacherPopUpWrapper\">\n        <div *ngIf=\"(assignedOrGuestPopUp ==  'Assigned' )\">\n          <div>\n            <h2>Teacher Classes Taken</h2>\n          </div>\n          <div class=\"popUpTableDiv\">\n            <table>\n              <thead>\n                <tr>\n                  <th>\n                    Date\n                  </th>\n                  <th>\n                    Timing\n                  </th>\n                  <th>\n                    Class\n                  </th>\n                  <th>\n                    Class Taken\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"row{{i}}\" *ngFor=\"let row of teacherTakenClasses; let i = index; trackBy: i;\">\n                  <td>\n                    {{row.attendance_date}}\n                  </td>\n                  <td>\n                    {{row.start_time}} - {{row.end_time}}\n                  </td>\n                  <td>\n                    {{row.custom_class_type}}\n                  </td>\n                  <td>\n                    {{row.is_class_taken}}\n                  </td>\n                </tr>\n                <tr *ngIf=\"(teacherTakenClasses == undefined || teacherTakenClasses == ''  )\">\n                  <td colspan=\"4\">\n                    No data found\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div *ngIf=\"(assignedOrGuestPopUp ==  'Guest' )\">\n          <div>\n            <h2>Classes(Visiting) Taken</h2>\n          </div>\n          <div class=\"popUpTableDiv\">\n            <table>\n              <thead>\n                <tr>\n                  <th>\n                    Date\n                  </th>\n                  <th>\n                    Timing\n                  </th>\n                  <th>\n                    Class\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr id=\"row{{i}}\" *ngFor=\"let row of guestBatchList; let i = index; trackBy: i;\">\n                  <td>\n                    {{row.attendance_date}}\n                  </td>\n                  <td>\n                    {{row.start_time}} - {{row.end_time}}\n                  </td>\n                  <td>\n                    {{row.custom_class_type}}\n                  </td>\n                </tr>\n                <tr *ngIf=\"(guestBatchList == undefined || guestBatchList == ''  )\">\n                  <td colspan=\"3\">\n                    No data found\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTeacherTeacherComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./src/app/components/teacher/teacher-add/teacher-add.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/components/teacher/teacher-add/teacher-add.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTeacherTeacherAddTeacherAddComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.countryCallingCode {\n  float: left;\n  border-left: solid 1px #e2ebee;\n  border-bottom: solid 1px #e2ebee;\n  border-top: solid 1px #e2ebee;\n  padding-bottom: 2%;\n  padding-top: 1%;\n  padding-right: 1%;\n  padding-left: 1%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL3RlYWNoZXItYWRkL3RlYWNoZXItYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDOztFQUVJLHdCQUF3QjtFQUN4QixTQUFTO0FBQWQ7O0FBRUM7RUFDRyxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFBQyxpQkFBaUI7RUFDakMsZ0JBQWdCO0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL3RlYWNoZXItYWRkL3RlYWNoZXItYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8vLy8vLyBUdXJuIG9mZiBzcGlubmVyXG4gaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgbWFyZ2luOiAwO1xuIH1cbiAuY291bnRyeUNhbGxpbmdDb2Rle1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2UyZWJlZTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2UyZWJlZTtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2UyZWJlZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gICAgcGFkZGluZy10b3A6IDElO3BhZGRpbmctcmlnaHQ6IDElO1xuICAgIHBhZGRpbmctbGVmdDogMSU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/teacher/teacher-add/teacher-add.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/teacher/teacher-add/teacher-add.component.ts ***!
      \*************************************************************************/

    /*! exports provided: TeacherAddComponent */

    /***/
    function srcAppComponentsTeacherTeacherAddTeacherAddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherAddComponent", function () {
        return TeacherAddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/teacherService/teacherApi.service */
      "./src/app/services/teacherService/teacherApi.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var TeacherAddComponent =
      /** @class */
      function () {
        var TeacherAddComponent = /*#__PURE__*/function () {
          function TeacherAddComponent(fb, teacherAPIService, route, toastCtrl) {
            _classCallCheck(this, TeacherAddComponent);

            this.fb = fb;
            this.teacherAPIService = teacherAPIService;
            this.route = route;
            this.toastCtrl = toastCtrl;
            this.studentImage = '';
            this.containerWidth = "200px";
            this.enableBiometric = 0;
          }

          _createClass(TeacherAddComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.createAddTeacherForm();
              this.enableBiometric = sessionStorage.getItem('biometric_attendance_feature');
            }
          }, {
            key: "createAddTeacherForm",
            value: function createAddTeacherForm() {
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
          }, {
            key: "addNewTeacherInfo",
            value: function addNewTeacherInfo() {
              var _this = this;

              var formData = this.addTeacherForm.value;

              if (!this.validateCaseSensitiveEmail(formData.teacher_email)) {
                this.messageToast('error', '', 'Please enter valid email address.');
                return;
              }

              if (!this.validateNumber(formData.teacher_phone)) {
                this.messageToast('error', '', 'Please enter valid contact number.');
                return;
              }

              if (formData.teacher_alt_phone != '' && formData.teacher_alt_phone != null) {
                if (!this.validateNumber(formData.teacher_alt_phone)) {
                  this.messageToast('error', '', 'Please enter valid alternate phone number.');
                  return;
                }
              }

              if (formData.hour_rate == "" || formData.hour_rate == null) {
                formData.hour_rate = 0;
              }

              if (this.studentImage != null && this.studentImage != "") {
                formData.photo = this.studentImage;
              } else {
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
              this.teacherAPIService.addNewTeacherDetails(formData).subscribe(function (data) {
                _this.messageToast('success', 'Added', 'Teacher added successfully.');

                _this.route.navigateByUrl('/view/teacher');
              }, function (err) {
                _this.messageToast('error', '', err.error.message);
              });
            }
          }, {
            key: "messageToast",
            value: function messageToast(errorType, errorTitle, errorMeassage) {
              var data = {
                type: errorType,
                title: errorTitle,
                body: errorMeassage
              };
              this.toastCtrl.popToast(data);
            }
          }, {
            key: "validateCaseSensitiveEmail",
            value: function validateCaseSensitiveEmail(email) {
              if (email != '' && email != null) {
                var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

                if (reg.test(email)) {
                  return true;
                } else {
                  return false;
                }
              } else {
                return true;
              }
            }
          }, {
            key: "validateNumber",
            value: function validateNumber(inputtxt) {
              var phoneno = /^\d{10}$/;

              if (inputtxt.match(phoneno)) {
                return true;
              } else {
                return false;
              }
            }
          }, {
            key: "setImage",
            value: function setImage(e) {
              this.studentImage = e;
            }
          }]);

          return TeacherAddComponent;
        }();

        TeacherAddComponent.ctorParameters = function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__["TeacherAPIService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
          }];
        };

        TeacherAddComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-teacher-add',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./teacher-add.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-add/teacher-add.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./teacher-add.component.scss */
          "./src/app/components/teacher/teacher-add/teacher-add.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__["TeacherAPIService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])], TeacherAddComponent);
        return TeacherAddComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/teacher/teacher-edit/teacher-edit.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/teacher/teacher-edit/teacher-edit.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTeacherTeacherEditTeacherEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.imagePreview {\n  width: 150px;\n  height: 150px;\n}\n\n.middle-section {\n  padding: 20px 30px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.profileWrapper {\n  padding-right: 52px;\n  width: 40%;\n  height: 30%;\n}\n\n.imagePreview {\n  height: 150px;\n  width: 225px;\n  border-radius: 20px;\n  border: 1px solid #1f72ef;\n}\n\n.countryCallingCode {\n  float: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL3RlYWNoZXItZWRpdC90ZWFjaGVyLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUksd0JBQXdCO0VBQ3hCLFNBQVM7QUFBZjs7QUFHRTtFQUNJLFlBQVk7RUFDWixhQUFhO0FBQW5COztBQUdFO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7QUFBNUI7O0FBR0U7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7QUFBakI7O0FBR0U7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFBL0I7O0FBRUU7RUFDRSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvdGVhY2hlci1lZGl0L3RlYWNoZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLy8vLy8vIFR1cm4gb2ZmIHNwaW5uZXJcbiAgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmltYWdlUHJldmlldyB7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgLm1pZGRsZS1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5wcm9maWxlV3JhcHBlciB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1MnB4O1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGhlaWdodDogMzAlO1xuICB9XG5cbiAgLmltYWdlUHJldmlldyB7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDIyNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZjcyZWY7XG4gIH1cbiAgLmNvdW50cnlDYWxsaW5nQ29kZXtcbiAgICBmbG9hdDogbGVmdDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/teacher/teacher-edit/teacher-edit.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/teacher/teacher-edit/teacher-edit.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TeacherEditComponent */

    /***/
    function srcAppComponentsTeacherTeacherEditTeacherEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherEditComponent", function () {
        return TeacherEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/teacherService/teacherApi.service */
      "./src/app/services/teacherService/teacherApi.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../services/common-service */
      "./src/app/services/common-service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var TeacherEditComponent =
      /** @class */
      function () {
        var TeacherEditComponent = /*#__PURE__*/function () {
          function TeacherEditComponent(route, ApiService, fb, toastCtrl, routeParam, commonService) {
            var _this2 = this;

            _classCallCheck(this, TeacherEditComponent);

            this.route = route;
            this.ApiService = ApiService;
            this.fb = fb;
            this.toastCtrl = toastCtrl;
            this.routeParam = routeParam;
            this.commonService = commonService;
            this.hasIdCard = 'N';
            this.studentImage = '';
            this.containerWidth = "200px";
            this.enableBiometric = 0;
            this.instituteCountryDetObj = {};
            this.countryDetails = [];
            this.maxlength = 10;
            this.country_id = null;
            this.routeParam.params.subscribe(function (params) {
              _this2.selectedTeacherId = params['id'];
            });
            console.log(this.selectedTeacherId);
          }

          _createClass(TeacherEditComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.fetchDataForCountryDetails();
              this.createEditTeacherForm();

              if (this.selectedTeacherId) {
                this.getTeacherInfo();
                this.enableBiometric = sessionStorage.getItem('biometric_attendance_feature');
              }
            } // created by: Nalini Walunj
            // Below two functions are written to fetch country details from the session stored at the time of login of institute

          }, {
            key: "fetchDataForCountryDetails",
            value: function fetchDataForCountryDetails() {
              var countryCodeEncryptedData = sessionStorage.getItem('country_data');
              var temp = JSON.parse(countryCodeEncryptedData);

              if (temp.length > 0) {
                this.countryDetails = temp;
                this.maxlength = this.countryDetails[0].country_phone_number_length;
                this.instituteCountryDetObj = this.countryDetails[0];
                this.country_id = this.countryDetails[0].id;
              }
            }
          }, {
            key: "onChangeObj",
            value: function onChangeObj(event) {
              for (var i = 0; i < this.countryDetails.length; i++) {
                if (this.countryDetails[i].id == event) {
                  this.instituteCountryDetObj = this.countryDetails[i];
                  this.maxlength = this.countryDetails[i].country_phone_number_length;
                  this.country_id = this.countryDetails[i].id;
                  this.editTeacherForm.setValue({
                    country_id: this.countryDetails[i].id,
                    teacher_name: this.editTeacherForm.value.teacher_name,
                    teacher_curr_addr: this.editTeacherForm.value.teacher_curr_addr,
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
          }, {
            key: "getTeacherInfo",
            value: function getTeacherInfo() {
              var _this3 = this;

              this.ApiService.getSelectedTeacherInfo(this.selectedTeacherId).subscribe(function (data) {
                _this3.selectedTeacherInfo = data;

                var setFormData = _this3.getFormFieldsdata(data);

                _this3.editTeacherForm.setValue(setFormData);

                _this3.studentImage = data.photo;
                _this3.hasIdCard = data.hasIDCard;
              }, function (error) {
                console.log(error);
              });
            }
          }, {
            key: "createEditTeacherForm",
            value: function createEditTeacherForm() {
              this.editTeacherForm = this.fb.group({
                teacher_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                teacher_curr_addr: [''],
                country_id: [this.countryDetails[0].id],
                teacher_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
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
          }, {
            key: "getFormFieldsdata",
            value: function getFormFieldsdata(data) {
              var dataToBind = {};
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
              } else {
                dataToBind.is_active = false;
              }

              if (data.is_allow_teacher_to_only_mark_attendance == "Y") {
                dataToBind.is_allow_teacher_to_only_mark_attendance = true;
              } else {
                dataToBind.is_allow_teacher_to_only_mark_attendance = false;
              }

              if (data.is_student_mgmt_flag == "1") {
                dataToBind.is_student_mgmt_flag = true;
              } else {
                dataToBind.is_student_mgmt_flag = false;
              }

              dataToBind.attendance_device_id = data.attendance_device_id;
              dataToBind.country_id = data.country_id;
              return dataToBind;
            }
          }, {
            key: "addNewTeacherInfo",
            value: function addNewTeacherInfo() {
              var _this4 = this;

              var formData = this.editTeacherForm.value;

              if (!this.validateCaseSensitiveEmail(formData.teacher_email)) {
                this.messageToast('error', '', 'Please enter valid email address.');
                return;
              }

              var phoneCheck = this.commonService.phonenumberCheck(formData.teacher_phone, this.maxlength, this.country_id);

              if (phoneCheck == false) {
                this.messageToast('error', '', 'Please enter valid contact number.');
                return;
              }

              if (phoneCheck == 'noNumber') {
                this.messageToast('error', '', 'Please enter valid contact no.');
                return;
              }

              if (formData.teacher_alt_phone != '' && formData.teacher_alt_phone != null) {
                if (!this.commonService.phonenumberCheck(formData.teacher_alt_phone, this.maxlength, this.country_id)) {
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

              if (this.studentImage != null && this.studentImage != "") {
                formData.photo = this.studentImage;
              } else {
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
              this.ApiService.addNewTeacherDetails(formData).subscribe(function (data) {
                _this4.messageToast('success', '', 'Teacher added successfully.');

                _this4.route.navigateByUrl('/view/teacher');
              }, function (err) {
                _this4.messageToast('error', '', err.error.message);
              });
            }
          }, {
            key: "addOrEditFun",
            value: function addOrEditFun() {
              if (this.selectedTeacherId == undefined) {
                this.addNewTeacherInfo();
              } else {
                this.saveTeacherInfo();
              }
            }
          }, {
            key: "saveTeacherInfo",
            value: function saveTeacherInfo() {
              var _this5 = this;

              var formData = this.editTeacherForm.value;

              if (!this.validateCaseSensitiveEmail(formData.teacher_email)) {
                this.messageToast('error', '', 'Please enter valid email address.');
                return;
              }

              var phoneCheck = this.commonService.phonenumberCheck(formData.teacher_phone, this.maxlength, this.country_id);

              if (phoneCheck == false) {
                this.messageToast('error', '', 'Please enter valid contact number.');
                return;
              }

              if (phoneCheck == 'noNumber') {
                this.messageToast('error', '', 'Please enter valid contact no.');
                return;
              }

              if (formData.teacher_alt_phone != '' && formData.teacher_alt_phone != null) {
                if (!this.commonService.phonenumberCheck(formData.teacher_alt_phone, this.maxlength, this.country_id)) {
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

              if (this.studentImage != null || this.studentImage != "") {
                formData.photo = this.studentImage;
              } else {
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
              } //this section is to handle id card 


              if (sessionStorage.getItem('Id-card') != null || sessionStorage.getItem('Id-card') != undefined) {
                formData.id_file = sessionStorage.getItem('Id-card');
                formData.id_fileType = sessionStorage.getItem('imageType');
              } else {
                formData.id_file = null;
                formData.id_fileType = "";
              }

              this.ApiService.saveEditTeacherInformation(this.selectedTeacherInfo.teacher_id, formData).subscribe(function (data) {
                _this5.messageToast('success', 'Updated', 'Details Updated successfully.');

                if (sessionStorage.getItem('userType') == '3') {
                  _this5.route.navigateByUrl('/view/dashboard/admin');
                } else {
                  _this5.route.navigateByUrl('/view/teacher');
                }
              }, function (err) {
                _this5.messageToast('error', '', err.error.message);
              });
            }
          }, {
            key: "onChangeIdCardUpload",
            value: function onChangeIdCardUpload() {
              this.hasIdCard = 'Y';
              var fileBrowser = this.idCardTeacher.nativeElement;

              if (fileBrowser.files && fileBrowser.files[0]) {
                sessionStorage.setItem('imageType', fileBrowser.files[0].type.split('/')[1]);
                var reader = new FileReader();
                reader.readAsDataURL(fileBrowser.files[0]);

                reader.onload = function () {
                  sessionStorage.setItem('Id-card', reader.result.split(',')[1]);
                };
              }
            }
          }, {
            key: "downloadIdCard",
            value: function downloadIdCard() {
              var _this6 = this;

              this.ApiService.downloadDocument(this.selectedTeacherId).subscribe(function (res) {
                // this.idCardImg.nativeElement.src = 'data:image/png;base64,' + res.document;
                _this6.anchTag.nativeElement.href = 'data:image/png;base64,' + res.document;
                _this6.anchTag.nativeElement.download = res.docTitle;

                _this6.anchTag.nativeElement.click();
              }, function (err) {
                _this6.messageToast('error', '', err.error.message);
              });
            }
          }, {
            key: "messageToast",
            value: function messageToast(errorType, errorTitle, errorMeassage) {
              var data = {
                type: errorType,
                title: errorTitle,
                body: errorMeassage
              };
              this.toastCtrl.popToast(data);
            }
          }, {
            key: "validateCaseSensitiveEmail",
            value: function validateCaseSensitiveEmail(email) {
              if (email != "" && email != null) {
                var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,9})+$/;

                if (reg.test(email)) {
                  return true;
                } else {
                  return false;
                }
              } else {
                return true;
              }
            }
          }, {
            key: "validateNumber",
            value: function validateNumber(inputtxt, maxlength) {
              console.log(maxlength);
              console.log(inputtxt);

              if (inputtxt.length == maxlength) {
                return true;
              } else {
                return false;
              }
            }
          }, {
            key: "setImage",
            value: function setImage(e) {
              this.studentImage = e;
            }
          }, {
            key: "updateIdCard",
            value: function updateIdCard($event) {
              $event.preventDefault();
              this.idCardTeacher.nativeElement.click();
            }
          }]);

          return TeacherEditComponent;
        }();

        TeacherEditComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__["TeacherAPIService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"]
          }];
        };

        TeacherEditComponent.propDecorators = {
          idCardTeacher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['idCardUpload', {
              "static": false
            }]
          }],
          idCardImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadedImage', {
              "static": false
            }]
          }],
          anchTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadImageAnchor', {
              "static": false
            }]
          }]
        };
        TeacherEditComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-teacher-edit',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./teacher-edit.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-edit/teacher-edit.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./teacher-edit.component.scss */
          "./src/app/components/teacher/teacher-edit/teacher-edit.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__["TeacherAPIService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"]])], TeacherEditComponent);
        return TeacherEditComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/teacher/teacher-list/teacher-list.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/teacher/teacher-list/teacher-list.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTeacherTeacherListTeacherListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.headEnq .field-wrapper {\n  padding: 0px !important;\n}\n\n.headEnq .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\n\n.headEnq .option-wrap {\n  width: 20px;\n  height: 20px;\n}\n\n.headEnq .btn .tooltip {\n  position: relative;\n  top: -20px;\n  right: 25px;\n  min-width: 80px;\n  font-size: 8px;\n  padding: 2px 0px 2px 18px;\n  height: auto;\n  border-radius: 8px;\n  background: rgba(0, 0, 0, 0.801);\n  color: white;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.headEnq .btn:hover {\n  background: #d8d6d6;\n}\n\n.headEnq .btn:hover .tooltip {\n  position: relative;\n  top: 8px;\n  right: 25px;\n  min-width: 80px;\n  padding: 2px 0px 2px 18px;\n  border-radius: 8px;\n  font-size: 8px;\n  height: auto;\n  background: rgba(0, 0, 0, 0.801);\n  color: white;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.2s;\n}\n\n.headEnq .btn:focus {\n  outline: none;\n}\n\n.headEnq .btn:active {\n  box-shadow: none;\n}\n\n.anchorTags .anchorTagCursor {\n  cursor: pointer;\n}\n\n.teacherTable thead tr th {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.teacherTable tbody tr td {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.btnWrapper .btn .tooltip {\n  position: relative;\n  top: -30px;\n  right: -30px;\n  min-width: 100px;\n  font-size: 12px;\n  padding: 6px;\n  height: 35px;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.btnWrapper .btn:hover .tooltip {\n  position: relative;\n  top: -30px;\n  right: 120px;\n  min-width: 100px;\n  padding: 6px;\n  border-radius: 5px;\n  font-size: 12px;\n  height: 35px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.2s;\n}\n\n.btnWrapper .btn:focus {\n  outline: none;\n}\n\n.btnWrapper .btn:active {\n  box-shadow: none;\n}\n\n.tooltipWrapper {\n  right: 100px !important;\n  min-width: 83px !important;\n  top: -25px !important;\n}\n\n.addBtnOnHover {\n  padding-top: 10px !important;\n  padding-right: 6px !important;\n}\n\n.search-filter-wrapper .normal-field {\n  padding: 4px 10px;\n  border: 1px solid #ccc;\n  width: 50%;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  height: 35px;\n  font-size: 14px;\n}\n\n.search-filter-wrapper .field-wrapper {\n  position: relative;\n  padding-top: 0px !important;\n  width: 30%;\n  float: left !important;\n}\n\n.search-filter-wrapper .field-wrapper .form-ctrl {\n  font: 400 12px 'Open sans',sans-serif;\n  border-top: none !important;\n  border-right: none !important;\n  border-left: none !important;\n}\n\n.search-filter-wrapper .field-wrapper label {\n  position: absolute !important;\n  left: 10% !important;\n  top: 1% !important;\n}\n\n.search-filter-wrapper .field-wrapper label:after {\n  left: 85% !important;\n  top: 10px !important;\n}\n\n.skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 80%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n\n.skeleton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n\n@-webkit-keyframes progress {\n  0% {\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes progress {\n  0% {\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL3RlYWNoZXItbGlzdC90ZWFjaGVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUVRLHVCQUF1QjtBQUEvQjs7QUFGQTtFQUlZLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUV6Qzs7QUFsQkE7RUFvQlEsV0FBVztFQUNYLFlBQVk7QUFFcEI7O0FBdkJBO0VBOEJZLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQUh0Qjs7QUF0Q0E7RUE0Q1ksbUJBQThCO0FBRjFDOztBQTFDQTtFQThDZ0Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysb0JBQW9CO0FBQXBDOztBQTFEQTtFQThEWSxhQUFhO0FBQXpCOztBQTlEQTtFQWlFWSxnQkFBZ0I7QUFDNUI7O0FBSUE7RUFFUSxlQUFlO0FBRnZCOztBQU1BO0VBSWdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFOcEM7O0FBQ0E7RUFZZ0IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQVRwQzs7QUFlQTtFQVFZLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQW5CdEI7O0FBQUE7RUF3QmdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG9CQUFvQjtBQXBCcEM7O0FBaEJBO0VBd0NZLGFBQWE7QUFwQnpCOztBQXBCQTtFQTJDWSxnQkFBZ0I7QUFuQjVCOztBQXdCQTtFQUNJLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIscUJBQXFCO0FBckJ6Qjs7QUF3QkE7RUFDSSw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBckJqQzs7QUF3QkE7RUFFUSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQXRCdkI7O0FBYUE7RUFZUSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixzQkFBc0I7QUFyQjlCOztBQU1BO0VBaUJZLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQW5CeEM7O0FBREE7RUF3QlEsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFuQjFCOztBQVBBO0VBNEJZLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFqQmhDOztBQXdCQTtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFQZ0I7RUFRaEIsa0JBQWtCO0FBckJ0Qjs7QUFlQTtFQVFRLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJEQUE4RTtFQUM5RSxtREFBMkM7VUFBM0MsMkNBQTJDO0FBbkJuRDs7QUF1QkE7RUFDSTtJQUNJLG1DQUFtQztFQXBCekM7RUFzQkU7SUFDSSxrQ0FBa0M7RUFwQnhDO0FBQ0Y7O0FBY0E7RUFDSTtJQUNJLG1DQUFtQztFQXBCekM7RUFzQkU7SUFDSSxrQ0FBa0M7RUFwQnhDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvdGVhY2hlci1saXN0L3RlYWNoZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmhlYWRFbnEge1xuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggNXB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm9wdGlvbi13cmFwIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICAgIC8vIHBhZGRpbmc6IDJweCAwcHggMHB4IDdweDtcbiAgICAgICAgLy8gYm9yZGVyOiBub25lO1xuICAgICAgICAvLyBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIC8vIHdpZHRoOiAzNXB4O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC50b29sdGlwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDBweCAycHggMThweDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44MDEpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTYsIDIxNCwgMjE0KTtcbiAgICAgICAgICAgIC50b29sdGlwIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwcHggMnB4IDE4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODAxKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYW5jaG9yVGFncyB7XG4gICAgLmFuY2hvclRhZ0N1cnNvciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi50ZWFjaGVyVGFibGUge1xuICAgIHRoZWFkIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnRuV3JhcHBlciB7XG4gICAgLmJ0biB7XG4gICAgICAgIC8vIHBhZGRpbmc6IDJweCAwcHggMHB4IDBweDtcbiAgICAgICAgLy8gYm9yZGVyOiBub25lO1xuICAgICAgICAvLyBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIC8vIHdpZHRoOiAzNXB4O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC50b29sdGlwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU0MSk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogcmdiKDIxNiwgMjE0LCAyMTQpO1xuICAgICAgICAgICAgLnRvb2x0aXAge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTQxKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9vbHRpcFdyYXBwZXIge1xuICAgIHJpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogODNweCAhaW1wb3J0YW50O1xuICAgIHRvcDogLTI1cHggIWltcG9ydGFudDtcbn1cblxuLmFkZEJ0bk9uSG92ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtZmlsdGVyLXdyYXBwZXIge1xuICAgIC5ub3JtYWwtZmllbGQge1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgZm9udDogNDAwIDEycHggJ09wZW4gc2Fucycsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZmllbGQtd3JhcHBlciBsYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAxJSAhaW1wb3J0YW50O1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGxlZnQ6IDg1JSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiRjb2xvci1iYXNlOiAjZWZlZmVmO1xuJGNvbG9yLWhpZ2hsaWdodDogbGlnaHRlbigkY29sb3ItYmFzZSwgNyUpO1xuLnNrZWxldG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmFzZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGNvbG9yLWJhc2UsICRjb2xvci1oaWdobGlnaHQsICRjb2xvci1iYXNlKTtcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/teacher/teacher-list/teacher-list.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/teacher/teacher-list/teacher-list.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TeacherListComponent */

    /***/
    function srcAppComponentsTeacherTeacherListTeacherListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherListComponent", function () {
        return TeacherListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/teacherService/teacherApi.service */
      "./src/app/services/teacherService/teacherApi.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var TeacherListComponent =
      /** @class */
      function () {
        var TeacherListComponent = /*#__PURE__*/function () {
          function TeacherListComponent(ApiService, route, toastCtrl, auth) {
            _classCallCheck(this, TeacherListComponent);

            this.ApiService = ApiService;
            this.route = route;
            this.toastCtrl = toastCtrl;
            this.auth = auth;
            this.teacherListDataSource = [];
            this.teacherList = [];
            this.PageIndex = 1;
            this.studentdisplaysize = 10;
            this.searchData = [];
            this.searchDataFlag = false;
            this.dataStatus = 1;
            this.dummyArr = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
            this.columnMaps = [0, 1, 2, 3, 4, 5];
            this.searchValue = "";
          }

          _createClass(TeacherListComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getDataFromServer();
            }
          }, {
            key: "getDataFromServer",
            value: function getDataFromServer() {
              var _this7 = this;

              this.PageIndex = 1;
              this.auth.showLoader();
              this.ApiService.getAllTeacherList().subscribe(function (data) {
                _this7.dataStatus = 2;

                _this7.auth.hideLoader();

                _this7.totalRow = data.length;
                _this7.teacherListDataSource = data;

                _this7.fetchTableDataByPage(_this7.PageIndex);
              }, function (error) {
                _this7.dataStatus = 2;

                _this7.auth.hideLoader();

                var data = {
                  type: "error",
                  title: '',
                  body: error.error.message
                };

                _this7.toastCtrl.popToast(data);
              });
            }
          }, {
            key: "deleteTeacherDeatils",
            value: function deleteTeacherDeatils(row) {
              var _this8 = this;

              if (confirm("Are you sure, you want to delete this teacher?")) {
                this.ApiService.deleteTeacher(row.teacher_id).subscribe(function (res) {
                  _this8.searchValue = "";
                  _this8.searchDataFlag = false;
                  var data = {
                    type: "success",
                    title: "Deleted",
                    body: "Teacher Deleted Successfully"
                  };

                  _this8.toastCtrl.popToast(data);

                  _this8.getDataFromServer();
                }, function (err) {
                  //console.log(err);
                  var data = {
                    type: "error",
                    title: '',
                    body: err.error.message
                  };

                  _this8.toastCtrl.popToast(data);
                });
              }
            }
          }, {
            key: "searchTeacher",
            value: function searchTeacher() {
              var _this9 = this;

              if (this.searchValue != "" && this.searchValue != null) {
                var searchData = this.teacherListDataSource.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this9.searchValue.toLowerCase());
                  });
                });
                this.searchData = searchData;
                this.totalRow = searchData.length;
                this.searchDataFlag = true;
                this.fetchTableDataByPage(this.PageIndex);
              } else {
                this.searchDataFlag = false;
                this.fetchTableDataByPage(this.PageIndex);
                this.totalRow = this.teacherListDataSource.length;
              }
            }
          }, {
            key: "rowSelectEvent",
            value: function rowSelectEvent(i) {
              this.selectedRow = i;
            } // pagination functions 

          }, {
            key: "fetchTableDataByPage",
            value: function fetchTableDataByPage(index) {
              this.PageIndex = index;
              var startindex = this.studentdisplaysize * (index - 1);
              this.teacherList = this.getDataFromDataSource(startindex);
            }
          }, {
            key: "fetchNext",
            value: function fetchNext() {
              this.PageIndex++;
              this.fetchTableDataByPage(this.PageIndex);
            }
          }, {
            key: "fetchPrevious",
            value: function fetchPrevious() {
              if (this.PageIndex != 1) {
                this.PageIndex--;
                this.fetchTableDataByPage(this.PageIndex);
              }
            }
          }, {
            key: "getDataFromDataSource",
            value: function getDataFromDataSource(startindex) {
              var data = [];

              if (this.searchDataFlag) {
                data = this.searchData.slice(startindex, startindex + this.studentdisplaysize);
              } else {
                data = this.teacherListDataSource.slice(startindex, startindex + this.studentdisplaysize);
              }

              return data;
            }
          }]);

          return TeacherListComponent;
        }();

        TeacherListComponent.ctorParameters = function () {
          return [{
            type: _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_4__["TeacherAPIService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        TeacherListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-teacher-list',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./teacher-list.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-list/teacher-list.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./teacher-list.component.scss */
          "./src/app/components/teacher/teacher-list/teacher-list.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_4__["TeacherAPIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], TeacherListComponent);
        return TeacherListComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/teacher/teacher-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/teacher/teacher-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: TeacherRoutingModule */

    /***/
    function srcAppComponentsTeacherTeacherRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherRoutingModule", function () {
        return TeacherRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _teacher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./teacher.component */
      "./src/app/components/teacher/teacher.component.ts");
      /* harmony import */


      var _teacher_list_teacher_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./teacher-list/teacher-list.component */
      "./src/app/components/teacher/teacher-list/teacher-list.component.ts");
      /* harmony import */


      var _teacher_edit_teacher_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./teacher-edit/teacher-edit.component */
      "./src/app/components/teacher/teacher-edit/teacher-edit.component.ts");
      /* harmony import */


      var _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./teacher-view/teacher-view.component */
      "./src/app/components/teacher/teacher-view/teacher-view.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var TeacherRoutingModule =
      /** @class */
      function () {
        var TeacherRoutingModule = function TeacherRoutingModule() {
          _classCallCheck(this, TeacherRoutingModule);
        };

        TeacherRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([{
            path: '',
            component: _teacher_component__WEBPACK_IMPORTED_MODULE_2__["TeacherComponent"],
            children: [{
              path: '',
              redirectTo: 'list'
            }, {
              path: 'list',
              component: _teacher_list_teacher_list_component__WEBPACK_IMPORTED_MODULE_3__["TeacherListComponent"]
            }, {
              path: 'add',
              component: _teacher_edit_teacher_edit_component__WEBPACK_IMPORTED_MODULE_4__["TeacherEditComponent"] //TeacherAddComponent make one comp for add and edit 

            }, {
              path: 'edit/:id',
              component: _teacher_edit_teacher_edit_component__WEBPACK_IMPORTED_MODULE_4__["TeacherEditComponent"]
            }, {
              path: 'view/:id',
              component: _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_5__["TeacherViewComponent"]
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          providers: [],
          declarations: []
        })], TeacherRoutingModule);
        return TeacherRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/teacher/teacher-view/teacher-view.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/teacher/teacher-view/teacher-view.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTeacherTeacherViewTeacherViewComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n@media screen and (max-width: 995px), screen and (max-height: 768px) {\n  .common-table {\n    margin-left: 0px !important;\n    margin-top: 15px;\n    margin-right: 15px !important;\n    max-height: 480px;\n    overflow: hidden;\n    width: 100%;\n  }\n  .common-table .table-scroll-wrapper {\n    max-height: 430px;\n  }\n  .common-table ::-webkit-scrollbar {\n    display: block;\n    width: 7px;\n    height: 7px;\n  }\n}\n.madeDate.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 21px;\n  top: 33px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.view-icon {\n  background: url('view_details1.svg') no-repeat;\n  width: 13px;\n  height: 15px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 850px;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.teacherPopUpWrapper ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.teacherPopUpWrapper .popUpTableDiv {\n  max-height: 450px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.imageUploadWrapper {\n  margin-top: 1%;\n  margin-right: 5%;\n}\n.extraMargin {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.marginTenPixel {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.questionInfo {\n  margin-right: 2px;\n  height: 20px;\n  width: 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.questionInfo .qInfoIcon {\n  color: #0084f6;\n  border-color: #0084f6;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n.add-edit {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.add-edit i {\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 14px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.closeBtnClass {\n  line-height: 11px !important;\n}\n.create-standard-form {\n  margin: 10px 0;\n  padding: 10px 20px 20px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL3RlYWNoZXItdmlldy90ZWFjaGVyLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ3JCeEI7QURqQkE7RUF3Q1UsVUFBVTtFQUNWLGtCQUFrQjtBQ25CNUI7QUFuR0E7RUFFSTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztFQXFHakI7RUEzR0U7SUFRUSxpQkFBaUI7RUFzRzNCO0VBOUdFO0lBV1EsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0VBc0dyQjtBQUNGO0FBbkdBO0VBS2dCLFdBQVc7RUFDWCx5Q0FBbUU7RUFDbkUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBa0cxQjtBQTdGQTtFQUNJLDhDQUFzRTtFQUN0RSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBZ0dyQjtBQTVGQSxlQUFBO0FBRUE7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTtFQUNSLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUtWLDRCQUE0QjtBQThGaEM7QUE5R0E7RUFrQlEsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFDUixPQUFPO0VBQ1AsU0FBUztFQUNULFlBQVk7QUFnR3BCO0FBNUZBO0VBQ0ksa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQStGcEI7QUFwR0E7RUFPUSxtQkFBbUI7RUFDbkIsZUFBZTtBQWlHdkI7QUF6R0E7RUFXUSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBa0d4QjtBQTlGQTtFQUNJLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FBaUdqQjtBQTVHQTtFQWFRLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFFBQVE7QUFtR2hCO0FBbkhBO0VBbUJRLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVk7QUFvR3BCO0FBMUhBO0VBeUJRLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7QUFxR2pCO0FBaklBO0VBK0JRLFdBQVc7QUFzR25CO0FBcklBO0VBaUNZLGVBQWU7RUFDZixpQkFBaUI7QUF3RzdCO0FBMUlBO0VBdUNZLGVEOUhTO0FDcU9yQjtBQWxHQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBcUd2QjtBQWxHQTtFQUNJLFVBQVU7RUFDVixtQkFBbUI7QUFxR3ZCO0FBbkdBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBS2xCLDRCQUE0QjtBQXNHaEM7QUFySEE7RUFpQlEsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0FBd0d0QjtBQXBHQTtFQUNJLE9BQU87RUFDUCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFLWiw0QkFBNEI7QUF1R2hDO0FBcEdBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0FBdUdkO0FBcEdBO0VBQ0ksU0FBUztBQXVHYjtBQXBHQTtFQUVRLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztBQXNHbkI7QUExR0E7RUFPUSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQXVHMUI7QUFuR0E7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtBQXNHMUI7QUFuR0E7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0FBc0dwQjtBQW5HQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQXNHdEI7QUFuR0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBc0d2QjtBQW5HQTtFQUNJLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFzRzFCO0FBM0dBO0VBT1EsY0QzT2E7RUM0T2IscUJENU9hO0VDNk9iLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCwyQkFBMkI7QUF3R25DO0FBcEdBO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQjtBQXVHcEI7QUF6R0E7RUFJUSx5QkRsUWE7RUNtUWIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7QUF5R3pCO0FBdEhBO0VBZ0JRLHFCQUFxQjtBQTBHN0I7QUExSEE7RUFvQlksaUJBQWlCO0VBQ2pCLGVBQWU7QUEwRzNCO0FBL0hBO0VBeUJRLGVBQWU7QUEwR3ZCO0FBdEdBO0VBQ0ksNEJBQTRCO0FBeUdoQztBQXRHQTtFQUNJLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQXlHakM7QUE3R0E7RUFNUSx1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBMkd4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci90ZWFjaGVyLXZpZXcvdGVhY2hlci12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk1cHgpLFxuc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAuY29tbW9uLXRhYmxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNDgwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAudGFibGUtc2Nyb2xsLXdyYXBwZXIge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWFkZURhdGV7XG5cblxuICAgICAgICAmLmRhdGVQaWNrZXJCb3gge1xuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAzM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbn1cbi52aWV3LWljb24ge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3ZpZXdfZGV0YWlsczEuc3ZnKSBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5cbi8qIHBvcFVwIFNjc3MgKi9cblxuLnBvcHVwV3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbiAgICB6LWluZGV4OiAxMDA7IC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLnBvcHVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4NTBweDsgLy8gbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bzsgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbn1cblxuLnBvcHVwLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDsgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xuICAgIHRyYW5zaXRpb246IHVuc2V0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbi5jbG9zZVBvcHVwIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJi50b3BMZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgfVxuICAgICYuYm90dG9tTGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZmFkZUluIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4ucG9wdXBXcmFwcGVyTW9iIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgLy8gb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAuY2xvc2VQb3B1cCB7XG4gICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgdG9wOiAtMjdweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4ucG9wdXAtbW9iIHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICBib3R0b206IC03MCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucG9wdXBXcmFwcGVyTW9iLnNob3dQb3B1cE1vYiAucG9wdXAtbW9iIHtcbiAgICBib3R0b206IDA7XG59XG5cbi50ZWFjaGVyUG9wVXBXcmFwcGVyIHtcbiAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICB9XG4gICAgLnBvcFVwVGFibGVEaXYge1xuICAgICAgICBtYXgtaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgfVxufVxuXG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5pbWFnZVVwbG9hZFdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5leHRyYU1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hcmdpblRlblBpeGVsIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5xdWVzdGlvbkluZm8ge1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAucUluZm9JY29uIHtcbiAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggI2NjYyBpbnNldDtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICB9XG59XG5cbi5hZGQtZWRpdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29tbW9uLWJsdWU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuZXhwZW5kLWJveCB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5jbG9zZUJ0bkNsYXNzIHtcbiAgICBsaW5lLWhlaWdodDogMTFweCAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLXN0YW5kYXJkLWZvcm0ge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgLmZvcm0tY3RybCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/teacher/teacher-view/teacher-view.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/teacher/teacher-view/teacher-view.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TeacherViewComponent */

    /***/
    function srcAppComponentsTeacherTeacherViewTeacherViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherViewComponent", function () {
        return TeacherViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/teacherService/teacherApi.service */
      "./src/app/services/teacherService/teacherApi.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }; // import { window } from 'ngx-bootstrap/utils/facade/browser';


      var TeacherViewComponent =
      /** @class */
      function () {
        var TeacherViewComponent = /*#__PURE__*/function () {
          function TeacherViewComponent(route, ApiService, toastCtrl, routeParam) {
            var _this10 = this;

            _classCallCheck(this, TeacherViewComponent);

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
            this.routeParam.params.subscribe(function (params) {
              _this10.selectedTeacherId = params['id']; // console.log(this.selectedTeacherId);
            });
          }

          _createClass(TeacherViewComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getTeacherViewInfo();
              this.getAllBatchesInformation();
              this.getInfoFromDashBoard({
                "batch_id": -1,
                "from_date": "",
                "to_date": ""
              });
              this.getInfoFromGuest({
                "batch_id": -1,
                "from_date": "",
                "to_date": ""
              });
            }
          }, {
            key: "getTeacherViewInfo",
            value: function getTeacherViewInfo() {
              var _this11 = this;

              this.ApiService.getViewInfoOfTeacher(this.selectedTeacherId).subscribe(function (data) {
                _this11.studentImage = data.photo;
                _this11.selectedTeacherInformation = data;
              }, function (error) {//console.log(error);
              });
            }
          }, {
            key: "getAllBatchesInformation",
            value: function getAllBatchesInformation() {
              var _this12 = this;

              this.ApiService.getTeacherViewBatchesInfo().subscribe(function (data) {
                _this12.batchesList = data;
              }, function (error) {//console.log(error);
              });
            }
          }, {
            key: "searchTeacherInfo",
            value: function searchTeacherInfo() {
              if (moment__WEBPACK_IMPORTED_MODULE_3__() < moment__WEBPACK_IMPORTED_MODULE_3__(this.selectedFromDate)) {
                this.messageNotifier('error', '', 'Please enter valid date');
                return;
              }

              if (moment__WEBPACK_IMPORTED_MODULE_3__() < moment__WEBPACK_IMPORTED_MODULE_3__(this.selectedToDate)) {
                this.messageNotifier('error', '', 'Please enter valid date');
                return;
              }

              var data = {};
              data.batch_id = this.selectedBatch;
              data.from_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.selectedFromDate).format('YYYY-MM-DD');
              data.to_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.selectedToDate).format('YYYY-MM-DD');
              this.getInfoFromDashBoard(data);
              this.getInfoFromGuest(data);
            }
          }, {
            key: "getInfoFromDashBoard",
            value: function getInfoFromDashBoard(data) {
              var _this13 = this;

              this.assignedBatchList = [];
              this.ApiService.customizedTeacherSearchOnDashBoardView(data, this.selectedTeacherId).subscribe(function (data) {
                _this13.assignedBatchList = data;
                _this13.totalClassesTaken = _this13.getPerticularKeyValue(data, "total_teacher_classes", '');
                _this13.totalHourSpent = _this13.getPerticularKeyValue(data, 'total_hours', ' ');
              }, function (error) {//console.log(error)
              });
            }
          }, {
            key: "getInfoFromGuest",
            value: function getInfoFromGuest(data) {
              var _this14 = this;

              this.visitingBatchList = [];
              this.ApiService.customizedTeacherSearchOnGuestBatchView(data, this.selectedTeacherId).subscribe(function (data) {
                _this14.visitingBatchList = data;
                _this14.visitingTotalClasses = _this14.getPerticularKeyValue(data, "total_teacher_classes", '');
                _this14.visitingTotalHour = _this14.getPerticularKeyValue(data, 'total_hours', ' ');
              }, function (error) {//console.log(error)
              });
            }
          }, {
            key: "cancelViewDetails",
            value: function cancelViewDetails() {
              this.route.navigateByUrl('/view/teacher');
            }
          }, {
            key: "getPerticularKeyValue",
            value: function getPerticularKeyValue(data, dataKey, splitOpearator) {
              var totalCount = 0;

              for (var i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty(dataKey) && data[i][dataKey] != "" && data[i][dataKey] != null) {
                  if (splitOpearator != "") {
                    totalCount += Number(data[i][dataKey].split(' ')[0]);
                  } else {
                    totalCount += data[i][dataKey];
                  }
                }
              }

              return totalCount;
            }
          }, {
            key: "exportDetailsInExcel",
            value: function exportDetailsInExcel() {//console.log("Excel");
            }
          }, {
            key: "printBtnClick",
            value: function printBtnClick() {
              window.print();
            }
          }, {
            key: "viewDetailOfBatch",
            value: function viewDetailOfBatch(row, i) {
              this.assignedOrGuestPopUp = "Assigned";
              this.teacherTakenClassesPopUp = true;
              this.getBatchDetailsInfo(row);
            }
          }, {
            key: "getBatchDetailsInfo",
            value: function getBatchDetailsInfo(row) {
              var _this15 = this;

              var data = {};
              data.batch_id = row.batch_id;
              data.from_date = "";
              data.to_date = "";
              this.ApiService.viewBatchDetails(data, this.selectedTeacherId).subscribe(function (data) {
                _this15.teacherTakenClasses = data; //console.log(data);
              }, function (error) {//console.log(error);
              });
            }
          }, {
            key: "teacherTakenClassesPopupClose",
            value: function teacherTakenClassesPopupClose() {
              this.assignedOrGuestPopUp = "";
              this.teacherTakenClassesPopUp = false;
            }
          }, {
            key: "viewDetailOfVisitingBatch",
            value: function viewDetailOfVisitingBatch(row, i) {
              var _this16 = this;

              this.assignedOrGuestPopUp = "Guest";
              this.teacherTakenClassesPopUp = true;
              var data = {};
              data.batch_id = row.batch_id;
              data.from_date = "";
              data.to_date = "";
              this.ApiService.viewBatchDetails(data, this.selectedTeacherId).subscribe(function (data) {
                _this16.guestBatchList = data; //console.log(data);
              }, function (error) {//console.log(error);
              });
            }
          }, {
            key: "setImage",
            value: function setImage(e) {
              this.studentImage = e;
            }
          }, {
            key: "toggleFilter",
            value: function toggleFilter() {
              if (this.advanceFilter == false) {
                this.advanceFilter = true;
                document.getElementById('showCloseBtn').style.display = '';
                document.getElementById('showAddBtn').style.display = 'none';
              } else {
                this.advanceFilter = false;
                document.getElementById('showCloseBtn').style.display = 'none';
                document.getElementById('showAddBtn').style.display = '';
              }
            }
          }, {
            key: "messageNotifier",
            value: function messageNotifier(type, title, msg) {
              var data = {
                type: type,
                title: title,
                body: msg
              };
              this.toastCtrl.popToast(data);
            }
          }]);

          return TeacherViewComponent;
        }();

        TeacherViewComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__["TeacherAPIService"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        };

        TeacherViewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-teacher-view',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./teacher-view.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher-view/teacher-view.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./teacher-view.component.scss */
          "./src/app/components/teacher/teacher-view/teacher-view.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_2__["TeacherAPIService"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])], TeacherViewComponent);
        return TeacherViewComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/teacher/teacher.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/teacher/teacher.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTeacherTeacherComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci90ZWFjaGVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/teacher/teacher.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/teacher/teacher.component.ts ***!
      \*********************************************************/

    /*! exports provided: TeacherComponent */

    /***/
    function srcAppComponentsTeacherTeacherComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherComponent", function () {
        return TeacherComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var TeacherComponent =
      /** @class */
      function () {
        var TeacherComponent = /*#__PURE__*/function () {
          function TeacherComponent() {
            _classCallCheck(this, TeacherComponent);
          }

          _createClass(TeacherComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var classArray = ['lione', 'litwo', 'lithree', 'lifour', 'lifive', 'lisix', 'liseven', 'lieight', 'linine', 'lizero'];
              classArray.forEach(function (className) {
                document.getElementById(className).classList.remove('active');
              });
            }
          }]);

          return TeacherComponent;
        }();

        TeacherComponent.ctorParameters = function () {
          return [];
        };

        TeacherComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-teacher',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./teacher.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./teacher.component.scss */
          "./src/app/components/teacher/teacher.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], TeacherComponent);
        return TeacherComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/teacher/teacher.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/components/teacher/teacher.module.ts ***!
      \******************************************************/

    /*! exports provided: TeacherModule */

    /***/
    function srcAppComponentsTeacherTeacherModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherModule", function () {
        return TeacherModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _teacher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./teacher.component */
      "./src/app/components/teacher/teacher.component.ts");
      /* harmony import */


      var _teacher_list_teacher_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./teacher-list/teacher-list.component */
      "./src/app/components/teacher/teacher-list/teacher-list.component.ts");
      /* harmony import */


      var _teacher_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./teacher-routing.module */
      "./src/app/components/teacher/teacher-routing.module.ts");
      /* harmony import */


      var _services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/teacherService/teacherApi.service */
      "./src/app/services/teacherService/teacherApi.service.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _teacher_add_teacher_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./teacher-add/teacher-add.component */
      "./src/app/components/teacher/teacher-add/teacher-add.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _teacher_edit_teacher_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./teacher-edit/teacher-edit.component */
      "./src/app/components/teacher/teacher-edit/teacher-edit.component.ts");
      /* harmony import */


      var _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./teacher-view/teacher-view.component */
      "./src/app/components/teacher/teacher-view/teacher-view.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


      var TeacherModule =
      /** @class */
      function () {
        var TeacherModule = function TeacherModule() {
          _classCallCheck(this, TeacherModule);
        };

        TeacherModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [// BsDatepickerModule,
          _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _teacher_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeacherRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
          declarations: [_teacher_component__WEBPACK_IMPORTED_MODULE_1__["TeacherComponent"], _teacher_list_teacher_list_component__WEBPACK_IMPORTED_MODULE_2__["TeacherListComponent"], _teacher_add_teacher_add_component__WEBPACK_IMPORTED_MODULE_6__["TeacherAddComponent"], _teacher_edit_teacher_edit_component__WEBPACK_IMPORTED_MODULE_8__["TeacherEditComponent"], _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_9__["TeacherViewComponent"]],
          providers: [_services_teacherService_teacherApi_service__WEBPACK_IMPORTED_MODULE_4__["TeacherAPIService"]]
        })], TeacherModule);
        return TeacherModule;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-teacher-teacher-module-es5.js.map