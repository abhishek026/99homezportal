(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-course-module-create-course-manage-batch-manage-batch-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/manage-batch/manage-batch.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/manage-batch/manage-batch.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"middle-section clearFix\">\n\n  <section class=\"middle-main clearFix\" style=\"padding-left: 15px;\">\n    <div class=\"row\">\n      <div class=\"clearFix add-edit pull-left\" [ngClass]=\"{'hide' : checkIfUserHadAccess()}\">\n        <a (click)=\"togglecreateNewBatch()\">\n          <i id=\"showAddBtn\" class=\"addBtnClass\">+</i>\n          <i id=\"showCloseBtn\" style=\"display:none\" class=\"closeBtnClass\">-</i>\n          <span>Create Batch</span>\n        </a>\n      </div>\n      <div class=\"pull-right\">\n        <div class=\"search-filter-wrapper \">\n          <input #search type=\"text\" class=\"normal-field pull-right\" placeholder=\"Search\"\n            style=\"font-size:12px;margin-right: 15px;\" id=\"search\" name=\"searchData \" (keyup)=\"searchDatabase(search) \">\n        </div>\n      </div>\n    </div>\n    <section class=\"clearFix add-batch-section\" *ngIf=\"createNewBatch\">\n\n      <div class=\"row\">\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <div class=\"field-wrapper\">\n            <label>Master Course\n              <span class=\"text-danger\">*</span>\n            </label>\n            <select id=\"\" class=\"form-ctrl halfwidth\" name=\"row.standard_id\" [(ngModel)]=\"addNewBatch.standard_id\"\n              (change)=\"onMasterCourseSelectionNew(addNewBatch.standard_id)\">\n              <option value=\"-1\"></option>\n              <option *ngFor=\"let opt of courseList\" [value]=\"opt.standard_id\">\n                {{opt.standard_name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <div class=\"field-wrapper\">\n            <label>Course\n              <span class=\"text-danger\">*</span>\n            </label>\n            <select id=\"\" class=\"form-ctrl halfwidth\" name=\"row.subject_id\" [(ngModel)]=\"addNewBatch.subject_id\">\n              <option value=\"-1\"></option>\n              <option *ngFor=\"let opt of subjectList\" [value]=\"opt.subject_id\">\n                {{opt.subject_name}}\n              </option>\n            </select>\n\n          </div>\n        </div>\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <div class=\"field-wrapper\">\n            <label>Teacher Name\n              <span class=\"text-danger\">*</span>\n            </label>\n            <select id=\"\" class=\"form-ctrl halfwidth\" name=\"row.teacher_id\" [(ngModel)]=\"addNewBatch.teacher_id\">\n              <option value=\"-1\"></option>\n              <option *ngFor=\"let opt of teacherList\" [value]=\"opt.teacher_id\">\n                {{opt.teacher_name}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"slotNew \">Batch Name\n              <span style=\"color:red\">* </span>(Eg - IX-Math-TTS-5-6)\n            </label>\n            <input type=\"text\" #idSlot class=\"form-ctrl halfwidth\" name=\"slotNew\" [(ngModel)]=\"addNewBatch.batch_name\">\n          </div>\n        </div>\n\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"slotNew \">Batch Code (For Student Bulk uplaod)\n            </label>\n            <input type=\"text\" #idSlot class=\"form-ctrl halfwidth\" name=\"slotNew\" [(ngModel)]=\"addNewBatch.batch_code\">\n          </div>\n        </div>\n\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <div class=\"field-wrapper\">\n            <label>Class Room\n            </label>\n            <select id=\"\" class=\"form-ctrl halfwidth\" name=\"row.class_room_id\" [(ngModel)]=\"addNewBatch.class_room_id\">\n              <option value=\"-1\"></option>\n              <option *ngFor=\"let opt of classRoomList\" [value]=\"opt.class_room_id\">\n                {{opt.class_room_name}}\n              </option>\n            </select>\n\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <div class=\"field-wrapper datePickerBox\">\n            <label for=\"endDate\">Start Date\n              <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"text\" value=\"\" readonly=\"true\" class=\"form-ctrl bsDatepicker halfwidth\"\n              [(ngModel)]=\"addNewBatch.start_date\" name=\"endDate\" bsDatepicker>\n          </div>\n        </div>\n\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <div class=\"field-wrapper datePickerBox\">\n            <label for=\"endDate\">End Date\n              <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"text\" value=\"\" readonly=\"true\" class=\"form-ctrl bsDatepicker halfwidth\"\n              [(ngModel)]=\"addNewBatch.end_date\" name=\"endDate\" bsDatepicker>\n          </div>\n        </div>\n\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <div class=\"field-wrapper\">\n            <label>Academic Year </label>\n            <select id=\"\" class=\"form-ctrl halfwidth\" name=\"row.class_room_id\"\n              [(ngModel)]=\"addNewBatch.academic_year_id\">\n              <option value=\"-1\">Select</option>\n              <option *ngFor=\"let opt of academicList\" [value]=\"opt.inst_acad_year_id\">\n                {{opt.inst_acad_year}}\n              </option>\n            </select>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\" style=\"margin-top: 15px;\">\n\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <div class=\"field-checkbox-wrapper\">\n            <input type=\"checkbox\" id=\"isActiveCH\" name=\"isActiveCH\" class=\"form-checkbox\"\n              [(ngModel)]=\"addNewBatch.is_active\">\n            <label for=\"isActiveCH\">Is Active</label>\n          </div>\n        </div>\n\n        <div class=\"c-lg-4 c-sm-4 c-md-4\" *ngIf=\"examGradeFeature == '1'\">\n          <div class=\"field-checkbox-wrapper\">\n            <input id=\"enableChkBX\" name=\"enableChkBX\" type=\"checkbox\" class=\"form-checkbox\"\n              [(ngModel)]=\"addNewBatch.is_exam_grad_feature\">\n            <label for=\"enableChkBX\">Enable Exam Grading System</label>\n          </div>\n        </div>\n\n        <div class=\"c-lg-4 c-sm-4 c-md-4\">\n          <aside class=\"pull-left\">\n            <button class=\"btn fullBlue\" (click)=\"addNewBatchToList()\">Add</button>\n          </aside>\n        </div>\n\n      </div>\n\n    </section>\n\n\n    <div id=\"\" class=\"courses-list-table\" style=\"margin-left: -15px\">\n      <div class=\"table-scroll-wrapper tableBatchClass\">\n        <div class=\"table table-responsive \" style=\"max-height: 460px\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  <label style=\"cursor:pointer;\" (click)=\"sortTable('batch_name')\">Batch</label>\n                </th>\n                <th>\n                  <label style=\"cursor:pointer;\" (click)=\"sortTable('batch_code')\">Batch Code</label>\n                </th>\n                <th>\n                  <label style=\"cursor:pointer;\" (click)=\"sortTable('standard_name')\">Master Course</label>\n                </th>\n                <th>\n                  <label style=\"cursor:pointer;\" (click)=\"sortTable('subject_name')\">Course</label>\n                </th>\n                <th>\n                  <label style=\"cursor:pointer;\" (click)=\"sortTable('teacher_name')\">Teacher</label>\n                </th>\n                <th>\n                  <label style=\"cursor:pointer;\" (click)=\"sortTable('start_date')\">Start Date</label>\n                </th>\n                <th>\n                  <label style=\"cursor:pointer;\" (click)=\"sortTable('end_date')\">End Date</label>\n                </th>\n                <th>\n                  <label style=\"cursor:pointer;\">Academic Year</label>\n                </th>\n                <th>\n                  <label style=\"cursor:pointer;\" (click)=\"sortTable('class_room_name')\">Class Room No.</label>\n                </th>\n                <th>\n                  <label style=\"cursor:pointer;\" (click)=\"sortTable('is_active')\">Is Active</label>\n                </th>\n                <th>\n                  <label style=\"cursor:pointer;\" (click)=\"sortTable('total_students')\">Total Students</label>\n                </th>\n                <th>\n                  Edit\n                </th>\n                <th>\n                  Add Students\n                </th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"(tableData.length != 0)\">\n              <tr id=\"row{{i}}\" (click)=\"rowSelectEvent(i)\" [class.selected]=\"i == selectedRow\" class=\"displayComp\"\n                *ngFor=\"let row of tableData; let i=index; trackBy: i; \">\n                <td class=\"view-comp\">\n                  <span\n                    title=\"{{row.batch_name}}\">{{row.batch_name.length>20?(row.batch_name | slice:0:20):row.batch_name}}</span>\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper editCellAllignment\">\n                    <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"row.batch_name\">\n                  </div>\n                </td>\n\n                <td class=\"view-comp\">\n                  {{row.batch_code}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"row.batch_code\">\n                  </div>\n                </td>\n\n                <td class=\"view-comp\">\n                  {{row.standard_name}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper editCellAllignment\">\n                    <select id=\"\" class=\"form-ctrl\" name=\"row.category_id\"\n                      (change)=\"onMasterCourseSelection(editRowDetails.standard_id)\"\n                      [(ngModel)]=\"editRowDetails.standard_id\">\n                      <option *ngFor=\"let opt of courseList\" [value]=\"opt.standard_id\">\n                        {{opt.standard_name}}\n                      </option>\n                    </select>\n                  </div>\n                </td>\n\n                <td class=\"view-comp\">\n                  {{row.subject_name}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper editCellAllignment\">\n                    <select id=\"\" class=\"form-ctrl\" name=\"row.category_id\" [(ngModel)]=\"editRowDetails.subject_id\">\n                      <option *ngFor=\"let opt of subjectList\" [value]=\"opt.subject_id\">\n                        {{opt.subject_name}}\n                      </option>\n                    </select>\n                  </div>\n                </td>\n\n\n                <td class=\"view-comp\">\n                  {{row.teacher_name}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper editCellAllignment\">\n                    <select id=\"\" class=\"form-ctrl\" name=\"row.category_id\" [(ngModel)]=\"row.teacher_id\">\n                      <option value=\"0\"></option>\n                      <option *ngFor=\"let opt of teacherList\" [value]=\"opt.teacher_id\">\n                        {{opt.teacher_name}}\n                      </option>\n                    </select>\n                  </div>\n                </td>\n\n                <td>\n                  {{row.start_date}}\n                </td>\n\n                <td class=\"view-comp\">\n                  {{changeDateFormat(row.end_date)}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper\">\n                    <label for=\"endDate\">\n                    </label>\n                    <input type=\"text\" value=\"\" readonly=\"true\" class=\"form-ctrl bsDatepicker\"\n                      [(ngModel)]=\"row.end_date\" name=\"endDate\" bsDatepicker id=\"endDate\">\n\n                  </div>\n                </td>\n                <td class=\"view-comp\">\n                  <select class=\"form-ctrl\" [disabled]=\"true\"\n                    [ngStyle]=\"{'background':row.academic_year_id? 'lightgrey':'','cursor':row.academic_year_id ? 'not-allowed':''}\"\n                    [(ngModel)]=\"row.academic_year_id\" style=\"background: transparent\">\n                    <option value=\"-1\">Select</option>\n                    <option *ngFor=\"let opt of academicList\" [value]=\"opt.inst_acad_year_id\">\n                      {{opt.inst_acad_year}}\n                    </option>\n                  </select>\n                </td>\n\n                <td class=\"view-comp\">\n                  {{row.class_room_name}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper\">\n                    <select id=\"\" class=\"form-ctrl \" name=\"row.academic_year_id\"\n                      [(ngModel)]=\"editRowDetails.academic_year_id\">\n                      <option value=\"-1\">Select</option>\n                      <option *ngFor=\"let opt of academicList\" [value]=\"opt.inst_acad_year_id\">\n                        {{opt.inst_acad_year}}\n                      </option>\n                    </select>\n                  </div>\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper\">\n                    <select id=\"\" class=\"form-ctrl\" name=\"row.category_id\" [(ngModel)]=\"editRowDetails.class_room_id\">\n                      <option *ngFor=\"let opt of classRoomList\" [value]=\"opt.class_room_id\">\n                        {{opt.class_room_name}}\n                      </option>\n                    </select>\n                  </div>\n                </td>\n\n                <td class=\"view-comp\">\n                  {{row.is_active}}\n                </td>\n                <td class=\"edit-comp\">\n                  <select [(ngModel)]=\"row.is_active\">\n                    <option value=\"Y\">Yes</option>\n                    <option value=\"N\">No</option>\n                  </select>\n                </td>\n\n                <td>\n                  <span *ngIf=\"row.is_active == 'Y'\">{{row.total_students}}</span>\n                </td>\n\n                <td class=\"view-comp\">\n                  <a style=\"cursor:pointer\" (click)=\"editTableRow(row , i)\">\n                    <i class=\"edit-icon\" aria-hidden=\"true\" style=\"margin-right: 5px;\" title=\"Edit\"></i>Edit\n                  </a>\n                </td>\n                <td class=\"edit-comp\">\n                  <a style=\"cursor:pointer ; margin-right:10px\" (click)=\"updateTableRow(row , i)\">\n                    <i class=\"far fa fa-save\" style=\"font-family: FontAwesome ;font-size: 19px;\" title=\"Update\"></i>\n                  </a>\n                  <a style=\"cursor:pointer\" (click)=\"cancelTableRow(row , i)\">\n                    <i class=\"fas fa fa-times\" style=\"font-family: FontAwesome ;font-size: 19px;\" title=\"Cancel\"></i>\n                  </a>\n                </td>\n\n                <td>\n                  <a style=\"cursor:pointer\" (click)=\"addStudentToBatch(row)\">\n                    <i class=\"far fa fa-plus-square\" style=\"font-size: 14px\" alt=\"Add Student\" title=\"Add Student\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"tableData.length == 0 && dataStatus === 1\">\n              <tr *ngFor=\"let dummy of dummyArr\">\n                <td *ngFor=\"let c of columnMaps\">\n                  <div class=\"skeleton\">\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"(tableData.length == 0 && dataStatus === 2)\">\n              <tr>\n                <td colspan=\"13\">\n                  No Batch List Found\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <!-- Paginator Here -->\n    <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [count]=\"totalRow\">\n        </pagination>\n      </div>\n    </div>\n  </section>\n\n</div>\n\n\n\n<!-- Allocation Item History -->\n<!-- =============================================================================== -->\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"addStudentPopUp\">\n  <div class=\"popup pos-abs popup-body-container\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeStudentPopup()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n          <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n            <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n              <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                transform=\"translate(992.81 305.77) rotate(45)\" />\n              <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                transform=\"translate(978.81 305.77) rotate(45)\" />\n            </g>\n            <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\"\n              transform=\"translate(1012 297)\" />\n          </g>\n        </svg>\n      </span>\n      <div class=\"popup-content student-assign-popup\">\n        <div>\n          <h3>Batch Name : {{batchDetails.batch_name}}</h3>\n        </div>\n\n        <div class=\"row filter-section\">\n          <div class=\"c-sm-6 c-md-6 c-lg-6 radio-button\">\n            <div class=\"field-radio-wrapper\">\n              <input type=\"radio\" name=\"bothRadio\" id=\"bothRadio\" class=\"form-radio\" value=\"0\" [(ngModel)]=\"radioOption\"\n                (ngModelChange)=\"onRadioButtonChange()\">\n              <label for=\"bothRadio\">Both</label>\n            </div>\n            <div class=\"field-radio-wrapper\">\n              <input type=\"radio\" name=\"assignRadio\" id=\"assignRadio\" value=\"1\" class=\"form-radio\"\n                [(ngModel)]=\"radioOption\" (ngModelChange)=\"onRadioButtonChange()\">\n              <label for=\"assignRadio\">Assigned</label>\n            </div>\n            <div class=\"field-radio-wrapper\">\n              <input type=\"radio\" name=\"unassignStudent\" id=\"unassignStudent\" value=\"2\" class=\"form-radio\"\n                [(ngModel)]=\"radioOption\" (ngModelChange)=\"onRadioButtonChange()\">\n              <label for=\"unassignStudent\">UnAssigned</label>\n            </div>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"search-filter-wrapper\">\n              <input #searchVal type=\"text\" class=\"normal-field\" placeholder=\"Search\" id=\"searchStudent\"\n                name=\"searchData\" [(ngModel)]=\"searchData\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"table-wrapper\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  <div class=\"field-checkbox-wrapper\">\n                    <input #idSelectAll type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"allChecked\"\n                      (click)=\"selectAllCheckBox(idSelectAll)\">\n                    <label></label>\n                  </div>\n                </th>\n                <th>\n                  ID\n                </th>\n                <th>\n                  Name\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  Contact No.\n                </th>\n                <!-- <th>\n                  Institution Name\n                </th> -->\n                <th>\n                  Standard Class\n                </th>\n                <th>\n                  Academic Year\n                </th>\n                <!-- <th>\n                  Fee Template\n                </th> -->\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"row{{i}}\" *ngFor=\"let row of (dataTable | searchPipe:searchData); let i = index; trackBy: i;\">\n                <td>\n                  <div class=\"field-checkbox-wrapper\">\n                    <input type=\"checkbox\" id=\"studentcheck{{row.student_id}}\" class=\"form-checkbox\"\n                      [(ngModel)]=\"row.assigned\">\n                    <!--  [disabled]=\"row.immutableKey\"  -->\n                    <label></label>\n                  </div>\n                </td>\n                <td>\n                  {{row.student_disp_id}}\n                </td>\n                <td>\n                  {{row.student_name}}\n                </td>\n                <td [title]=\"row.country_name\">\n                  {{row.country_code}}\n                </td>\n                <td>\n                  {{row.student_phone}}\n                </td>\n                <!-- <td>\n                  {{row.school}}\n                </td> -->\n                <td>\n                  {{row.student_class}}\n                </td>\n                <td>\n                  <div class=\"field-wrapper\">\n                    <select class=\"form-ctrl\" [disabled]=\"true\"\n                      [ngStyle]=\"{'background':row.academic_year_id? 'lightgrey':'','cursor':row.academic_year_id ? 'not-allowed':''}\"\n                      [(ngModel)]=\"batchDetails.academic_year_id\" style=\"background: transparent\">\n                      <option value=\"-1\">Select</option>\n                      <option *ngFor=\"let opt of academicList\" [value]=\"opt.inst_acad_year_id\">\n                        {{opt.inst_acad_year}}\n                      </option>\n                    </select>\n                  </div>\n                </td>\n                <!-- <td>\n                  <div class=\"field-wrapper\">\n                    <select class=\"form-ctrl\" [disabled]=\"row.immutableKey\" [(ngModel)]=\"row.assigned_fee_template_id\"\n                      style=\"background: transparent\">\n                      <option value=\"-1\">Select</option>\n                      <option *ngFor=\"let opt of setDefaultTemplate(row.country_id,feeTemplateDataSource,row) \"\n                        [value]=\"opt.template_id\">\n                        {{opt.template_name}}\n                      </option>\n                    </select>\n                  </div>\n                </td> -->\n              </tr>\n              <tr *ngIf=\"(dataTable.length == 0)\">\n                <td colspan=\"8\">\n                  No Student Found\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"pull-right\" style=\"padding: 5px 10px 0 0;\">\n          <button class=\"btn fullBlue\" (click)=\"saveChanges()\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section [hidden]=\"alertBox\">\n  <div class=\"confirmation_popup\">\n    <div class=\"confirm_title\">\n      <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\" style=\"color: rgba(255,0,0,0.7);\"></i> &nbsp;\n      <span>Alert</span>\n    </div>\n    <div class=\"confirmation_msg_box\">\n      <span id=\"confirm_msg\">Do you wish to unassign student from the batch?</span>\n    </div>\n    <br>\n    <div class=\"field-checkbox-wrapper\">\n      <input type=\"checkbox\" id=\"delete_unpaid_fee\" name=\"batch\" [(ngModel)]=\"delete_unpaid_fee\" class=\"form-checkbox\">\n      <label> Delete unpaid fees installments</label>\n    </div>\n    <div class=\"confirmation_button_container\">\n      <input type=\"button\" value=\"Yes\" class=\"btn\" (click)=\"unassign_course()\">\n      <input type=\"button\" value=\"No\" class=\"btn\" (click)=\"closeAlert()\">\n      <!-- <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeAlert()\"> -->\n    </div>\n  </div>\n</section>\n\n<div class=\"black-bg\" id=\"black-bg\" [hidden]=\"alertBox\" (click)=\"closeAlert()\">\n\n</div>");

/***/ }),

/***/ "./src/app/components/course-module/create-course/manage-batch/manage-batch.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/manage-batch/manage-batch.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.add-edit {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.add-edit i {\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 22px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.closeBtnClass {\n  line-height: 11px !important;\n}\n.create-standard-form {\n  margin: 0px 0;\n  position: absolute;\n  width: 92%;\n  top: 25%;\n  left: 6.5%;\n  padding: 10px 20px 20px;\n  background: #ffffff;\n  border: 1px solid #d8d8d8;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc;\n}\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  height: 35px;\n  font-size: 14px;\n}\n.search-filter-wrapper .field-wrapper {\n  position: relative;\n  padding-top: 0px !important;\n  width: 30%;\n  float: left !important;\n}\n.search-filter-wrapper .field-wrapper .form-ctrl {\n  font: 400 12px 'Open sans',sans-serif;\n  border-top: none !important;\n  border-right: none !important;\n  border-left: none !important;\n}\n.search-filter-wrapper .field-wrapper label {\n  position: absolute !important;\n  left: 10% !important;\n  top: 1% !important;\n}\n.search-filter-wrapper .field-wrapper label:after {\n  left: 85% !important;\n  top: 10px !important;\n}\n.normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  border-right: 0;\n  height: 35px;\n  font-size: 14px;\n}\n#divBatchTable .tableBatchClass {\n  max-height: 385px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n#divBatchTable ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\ntable thead tr th {\n  width: 8%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 12px;\n  font-weight: 500;\n}\ntable tbody tr td {\n  padding: 10px 5px;\n  width: 8%;\n}\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\ntable tbody tr .field-wrapper {\n  padding: 0px !important;\n}\ntable tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\ntable tbody .displayComp .edit-comp {\n  display: none;\n}\ntable tbody .editComp .view-comp {\n  display: none;\n}\n.editCellAllignment {\n  margin-left: 30px;\n}\n/*=====================================mobile head menu css===========================*/\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 11111111;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 850px;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 80%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n.skeleton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n@-webkit-keyframes progress {\n  0% {\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n.add-batch-section {\n  margin: 0px 0px 10px -15px;\n  padding: 0px 15px 5px 15px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n  margin-bottom: 10px;\n}\n.add-batch-section .halfwidth {\n  width: 200px;\n}\n.add-batch-section .halfwidth.bsDatepicker {\n  background: white;\n}\n.add-batch-section .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  left: 175px;\n  top: 35px;\n  width: 21px;\n  height: 21px;\n  z-index: 999999;\n}\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  height: 35px;\n  font-size: 14px;\n}\n.student-assign-popup .filter-section {\n  padding: 10px 0px;\n  margin: 5px 0;\n  background: #efefef;\n}\n.student-assign-popup .filter-section .radio-button {\n  margin-top: 10px;\n  display: inline-flex;\n}\n.student-assign-popup .filter-section .radio-button .field-radio-wrapper {\n  margin-right: 5px;\n}\n.student-assign-popup .filter-section .field-wrapper {\n  padding-top: 0;\n}\n.student-assign-popup .filter-section .btn {\n  margin-left: 0;\n}\n.student-assign-popup .table-wrapper {\n  margin-top: 15px;\n  max-height: 350px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.student-assign-popup .table-wrapper th {\n  text-align: left;\n}\n.student-assign-popup .table-wrapper td {\n  text-align: left;\n  padding: 5px;\n}\n.student-assign-popup .table-wrapper td .field-wrapper .form-ctrl {\n  padding: 5px;\n  width: 90px;\n}\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n}\n::ng-deep .bs-datepicker-container, .bs-daterangepicker-container {\n  margin-left: 3%;\n}\n.confirmation_popup {\n  position: fixed;\n  top: 35%;\n  left: 40%;\n  width: 300px;\n  background: white;\n  height: auto;\n  padding: 20px;\n  z-index: 100;\n  border-radius: 6px;\n  border-top: 4px solid rgba(255, 0, 0, 0.7);\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n}\n.confirm_title {\n  font-size: 20px;\n}\n.confirmation_msg_box {\n  margin-top: 15px;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n  border: 2px solid #0084f6;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 14px;\n  display: inline-block;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.confirmation_button_container {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n.confirmation_button_container input {\n  width: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvbWFuYWdlLWJhdGNoL21hbmFnZS1iYXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JB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QVM7RUFDVCxRQUFRO0FBOEdkO0FBaktBO0VBc0RNLGNBQWM7QUErR3BCO0FBM0dBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7QUE4R3pCO0FBakhBO0VBS0ksV0FBVztBQWdIZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9jcmVhdGUtY291cnNlL21hbmFnZS1iYXRjaC9tYW5hZ2UtYmF0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2Nzc1wiO1xuLm1pZGRsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYWRkLWVkaXQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBpIHtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgJGNvbW1vbi1ibHVlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmV4cGVuZC1ib3gge1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uY2xvc2VCdG5DbGFzcyB7XG4gICAgbGluZS1oZWlnaHQ6IDExcHggIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZS1zdGFuZGFyZC1mb3JtIHtcbiAgICBtYXJnaW46IDBweCAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTIlO1xuICAgIHRvcDogMjUlO1xuICAgIGxlZnQ6IDYuNSU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIC5mb3JtLWN0cmwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgfVxufVxuXG4uc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgICAubm9ybWFsLWZpZWxkIHtcbiAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgIGZvbnQ6IDQwMCAxMnB4ICdPcGVuIHNhbnMnLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpZWxkLXdyYXBwZXIgbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogMSUgIWltcG9ydGFudDtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBsZWZ0OiA4NSUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm9ybWFsLWZpZWxkIHtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jZGl2QmF0Y2hUYWJsZSB7XG4gICAgLnRhYmxlQmF0Y2hDbGFzcyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDM4NXB4O1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICB9XG59XG5cbnRhYmxlIHtcbiAgICB0aGVhZCB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDglO1xuICAgICAgICAgICAgICAgIC5lZGl0T3B0aW9ucyBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGlzcGxheUNvbXAge1xuICAgICAgICAgICAgLnZpZXctY29tcCB7fVxuICAgICAgICAgICAgLmVkaXQtY29tcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5lZGl0Q29tcCB7XG4gICAgICAgICAgICAudmlldy1jb21wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZWRpdC1jb21wIHt9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5lZGl0Q2VsbEFsbGlnbm1lbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1tb2JpbGUgaGVhZCBtZW51IGNzcz09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qIHBvcFVwIFNjc3MgKi9cblxuLnBvcHVwV3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbiAgICB6LWluZGV4OiAxMTExMTExMTsgLy8gZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAucG9wdXAge1xuICAgICAgICBtYXgtd2lkdGg6IDg1MHB4OyAvLyBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogNSU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvOyAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxufVxuXG4ucG9wdXAtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMjBweCAyMHB4OyAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggNXB4ICM5YzljOWM7XG4gICAgdHJhbnNpdGlvbjogdW5zZXQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBtYXJnaW46IDI1cHggMCAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLmNsb3NlUG9wdXAge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJi5ib3R0b21SaWdodCB7XG4gICAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAmLnRvcExlZnQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICB9XG4gICAgJi5ib3R0b21MZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAjYzFjMWMxO1xuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5mYWRlSW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Y3NzIGZvciBtb2IgcG9wdXBcbi5wb3B1cFdyYXBwZXJNb2Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyAvLyBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC5jbG9zZVBvcHVwIHtcbiAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICB0b3A6IC0yN3B4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5wb3B1cC1tb2Ige1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNzAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvdHRvbTogLTcwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbn1cblxuLnBvcHVwV3JhcHBlck1vYi5zaG93UG9wdXBNb2Ige1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIC5wb3B1cC1tb2Ige1xuICAgIGJvdHRvbTogMDtcbn1cblxuJGNvbG9yLWJhc2U6ICNlZmVmZWY7XG4kY29sb3ItaGlnaGxpZ2h0OiBsaWdodGVuKCRjb2xvci1iYXNlLCA3JSk7XG4uc2tlbGV0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1iYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkY29sb3ItYmFzZSwgJGNvbG9yLWhpZ2hsaWdodCwgJGNvbG9yLWJhc2UpO1xuICAgICAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgfVxufVxuXG4uYWRkLWJhdGNoLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IC0xNXB4O1xuICAgIHBhZGRpbmc6IDBweCAxNXB4IDVweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAuaGFsZndpZHRoIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAmLmJzRGF0ZXBpY2tlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICYuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMTc1cHg7XG4gICAgICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlYXJjaC1maWx0ZXItd3JhcHBlciB7XG4gICAgLm5vcm1hbC1maWVsZCB7XG4gICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5cbi5zdHVkZW50LWFzc2lnbi1wb3B1cCB7XG4gICAgLmZpbHRlci1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgLmZpZWxkLXJhZGlvLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ibGFjay1iZ3tcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwxMCwxMCwwLjMpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItY29udGFpbmVyLCAuYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcntcbm1hcmdpbi1sZWZ0OjMlIDtcbiAgfVxuXG4uY29uZmlybWF0aW9uX3BvcHVwe1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzUlO1xuICBsZWZ0OiA0MCU7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgei1pbmRleDogMTAwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI1NSwwLDAsMC43KTtcbiAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xufVxuLmNvbmZpcm1fdGl0bGV7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb25maXJtYXRpb25fbXNnX2JveHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5jb25maXJtYXRpb25fcG9wdXB7XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgIG9wYWNpdHk6IDA7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgbGVmdDogMDtcbiAgICAgdG9wOiAwO1xuICAgICB3aWR0aDogMjBweDtcbiAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICB6LWluZGV4OiAxO1xuICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgfVxuICB9XG5cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDphZnRlciB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICB9XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBsZWZ0OiA4cHg7XG4gICAgICB0b3A6IDlweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwODRmNjtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgICAgd2lkdGg6IDEycHg7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIGxlZnQ6IDJweDtcbiAgICAgIHRvcDogNXB4O1xuICB9XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWwge1xuICAgICAgY29sb3I6ICMwMDg0ZjY7XG4gIH1cbn1cblxuLmNvbmZpcm1hdGlvbl9idXR0b25fY29udGFpbmVye1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaW5wdXR7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/create-course/manage-batch/manage-batch.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/manage-batch/manage-batch.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ManageBatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBatchComponent", function() { return ManageBatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../.. */ "./src/app/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/role_features */ "./src/app/model/role_features.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_course_services_manage_batch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/course-services/manage-batch.service */ "./src/app/services/course-services/manage-batch.service.ts");
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







let ManageBatchComponent = /** @class */ (() => {
    let ManageBatchComponent = class ManageBatchComponent {
        constructor(apiService, toastCtrl, auth, _http) {
            this.apiService = apiService;
            this.toastCtrl = toastCtrl;
            this.auth = auth;
            this._http = _http;
            this.batchesListDataSource = [];
            this.tableData = [];
            this.courseList = [];
            this.institute_id = sessionStorage.getItem('institution_id');
            this.studentListDataSource = [];
            this.studentList = [];
            this.searchedData = [];
            this.dummyArr = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
            this.columnMaps = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0];
            this.academicList = [];
            this.feeTemplateDataSource = [];
            this.dataTable = [];
            this.PageIndex = 1;
            this.displayBatchSize = 10;
            this.dataStatus = 1;
            this.examGradeFeature = "";
            this.searchData = "";
            this.radioOption = '0';
            this.searchDataFlag = false;
            this.alertBox = true;
            this.delete_unpaid_fee = false;
            this.addStudentPopUp = false;
            this.createNewBatch = false;
            this.allChecked = false;
            this.editRowDetails = {
                standard_id: '',
                subject_id: '',
                teacher_id: '',
                class_room_id: ''
            };
            this.addNewBatch = {
                standard_id: '-1',
                subject_id: '-1',
                class_room_id: '-1',
                teacher_id: '-1',
                batch_name: '',
                batch_code: '',
                start_date: '',
                end_date: '',
                is_active: true,
                academic_year_id: '-1',
                is_exam_grad_feature: false
            };
            this.fullResponse = [];
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_4__["role"].features;
        }
        ngOnInit() {
            this.checkTabSelection();
            this.examGradeFeature = sessionStorage.getItem('is_exam_grad_feature');
            this.getAllBatchesList();
            // this.getMasterCourseList();
            this.getMasterCourseKey();
            this.getAllClassRoom();
            // this.getAllTeacherList();
            this.getAllTeacherListNew();
            this.getAcademicYearDetails();
        }
        getAllBatchesList() {
            this.auth.showLoader();
            this.batchesListDataSource = [];
            this.tableData = [];
            this.apiService.getBatchListFromServer().subscribe((res) => {
                this.batchesListDataSource = res;
                this.totalRow = res.length;
                this.fetchTableDataByPage(this.PageIndex);
                this.auth.hideLoader();
                this.dataStatus = 2;
            }, error => {
                this.auth.hideLoader();
                //console.log(error);
                this.messageToast('error', '', error.error.message);
            });
        }
        editTableRow(rowDetails, index) {
            this.auth.showLoader();
            document.getElementById(("row" + index).toString()).classList.remove('displayComp');
            document.getElementById(("row" + index).toString()).classList.add('editComp');
            rowDetails.end_date = moment__WEBPACK_IMPORTED_MODULE_1__(rowDetails.end_date).format('YYYY-MM-DD');
            this.apiService.getBatchDetailsForEdit(rowDetails.batch_id).subscribe(data => {
                //console.log(data);
                this.editRowDetails = data;
                this.editRowDetails.end_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.editRowDetails.end_date).format('YYYY-MM-DD');
                this.onMasterCourseSelection(data.standard_id);
                this.auth.hideLoader();
            }, error => {
                this.auth.hideLoader();
                //console.log(error);
                this.messageToast('error', '', error.error.message);
            });
        }
        searchDatabase(element) {
            if (element.value != '' && element.value != null) {
                let searchData = this.batchesListDataSource.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(element.value.toLowerCase())));
                this.searchedData = searchData;
                this.searchDataFlag = true;
                this.totalRow = searchData.length;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else {
                this.searchDataFlag = false;
                this.fetchTableDataByPage(this.PageIndex);
                this.totalRow = this.batchesListDataSource.length;
            }
        }
        togglecreateNewBatch() {
            this.selectedRow = null;
            if (this.createNewBatch == false) {
                this.createNewBatch = true;
                document.getElementById('showCloseBtn').style.display = '';
                document.getElementById('showAddBtn').style.display = 'none';
            }
            else {
                this.createNewBatch = false;
                document.getElementById('showCloseBtn').style.display = 'none';
                document.getElementById('showAddBtn').style.display = '';
            }
        }
        // set default template and set 
        setDefaultTemplate(country_id, templates, data) {
            templates[country_id] && templates[country_id].forEach(object => {
                if (object.is_default == 'Y' && data.assigned_fee_template_id == -1) {
                    data.assigned_fee_template_id = object.template_id;
                }
            });
            return templates[country_id];
        }
        getAllClassRoom() {
            this.auth.showLoader();
            this.apiService.getBatchClassRoomListFromServer().subscribe(data => {
                this.classRoomList = data;
                this.auth.hideLoader();
            }, error => {
                this.auth.hideLoader();
                //console.log(error);
                this.messageToast('error', '', error.error.message);
            });
        }
        getAllTeacherList() {
            this.auth.showLoader();
            this.apiService.getTeachersListFromServer().subscribe(res => {
                this.teacherList = res;
                this.auth.hideLoader();
            }, error => {
                this.auth.hideLoader();
                //console.log(error);
                this.messageToast('error', '', error.error.message);
            });
        }
        getAllTeacherListNew() {
            let url = "/api/v1/teachers/teacher-list/" + this.institute_id + '?is_active=Y';
            this.auth.showLoader();
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.teacherList = data.result;
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        getMasterCourseList() {
            this.auth.showLoader();
            this.apiService.getMasterCourseListFromServer().subscribe(res => {
                this.courseList = res;
                this.auth.hideLoader();
            }, error => {
                this.auth.hideLoader();
                //console.log(error);
                this.messageToast('error', '', error.error.message);
            });
        }
        getMasterCourseKey() {
            let url = "/api/v1/standards/standard-subject-list/" + this.institute_id + '?is_active=Y&is_subject_required=true';
            this.auth.showLoader();
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.courseList = data.result;
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        onMasterCourseSelection(data) {
            this.auth.showLoader();
            this.addNewBatch.subject_id = '-1';
            if (data != '-1') {
                this.apiService.getPerticularCourseList(data).subscribe(res => {
                    //console.log('Subject List', res);
                    this.subjectList = res;
                    this.auth.hideLoader();
                }, error => {
                    this.auth.hideLoader();
                    //console.log(error);
                    this.messageToast('error', '', error.error.message);
                });
            }
            else {
                this.auth.hideLoader();
                this.messageToast('error', '', 'You Can not select empty value');
                return;
            }
        }
        onMasterCourseSelectionNew(data) {
            for (let i = 0; i < this.courseList.length; i++) {
                if (data == this.courseList[i].standard_id) {
                    this.subjectList = this.courseList[i].subject_list;
                }
            }
        }
        addNewBatchToList() {
            if (this.addNewBatch.standard_id != '-1') {
                if (this.addNewBatch.subject_id != "-1") {
                    if (this.addNewBatch.teacher_id != "-1") {
                        if (this.addNewBatch.batch_name.trim() != '') {
                            if (this.addNewBatch.batch_code.length < 5) {
                                if (this.addNewBatch.start_date != "" && this.addNewBatch.start_date != null) {
                                    this.addNewBatch.start_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.addNewBatch.start_date).format("YYYY-MM-DD");
                                    if (this.addNewBatch.end_date != "" && this.addNewBatch.end_date != null) {
                                        this.addNewBatch.end_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.addNewBatch.end_date).format("YYYY-MM-DD");
                                        if (this.addNewBatch.start_date < this.addNewBatch.end_date) {
                                            if (this.addNewBatch.is_active == true) {
                                                this.addNewBatch.is_active = 'Y';
                                            }
                                            else {
                                                this.addNewBatch.is_active = 'N';
                                            }
                                            if (this.addNewBatch.is_exam_grad_feature == true) {
                                                this.addNewBatch.is_exam_grad_feature = 1;
                                            }
                                            else {
                                                this.addNewBatch.is_exam_grad_feature = 0;
                                            }
                                            this.apiService.addNewBatch(this.addNewBatch).subscribe(res => {
                                                this.messageToast('success', 'Added Batch', "Batch created successfully!");
                                                this.clearFormData();
                                                this.getAllBatchesList();
                                                this.togglecreateNewBatch();
                                            }, error => {
                                                //console.log(error);
                                                this.messageToast('error', '', error.error.message);
                                            });
                                        }
                                        else {
                                            this.addNewBatch.start_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.addNewBatch.start_date).format("YYYY-MM-DD");
                                            this.addNewBatch.end_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.addNewBatch.end_date).format("YYYY-MM-DD");
                                            this.messageToast('error', '', 'Provide valid details of Start Date');
                                            return;
                                        }
                                    }
                                    else {
                                        this.messageToast('error', '', 'Please Provide End Date');
                                        return;
                                    }
                                }
                                else {
                                    this.messageToast('error', '', 'Please Provide Start Date');
                                    return;
                                }
                            }
                            else {
                                this.messageToast('error', '', 'Batch Code can not be greater than 4 alphabet');
                                return;
                            }
                        }
                        else {
                            this.messageToast('error', '', 'Provide batch name');
                            return;
                        }
                    }
                    else {
                        this.messageToast('error', '', 'Provide  Teacher name');
                        return;
                    }
                }
                else {
                    this.messageToast('error', '', 'select course');
                    return;
                }
            }
            else {
                this.messageToast('error', '', 'Select master course');
            }
        }
        updateTableRow(rowDetails, index) {
            let dataToSend = {
                batch_code: rowDetails.batch_code,
                batch_name: rowDetails.batch_name,
                start_date: moment__WEBPACK_IMPORTED_MODULE_1__(rowDetails.start_date).format("YYYY-MM-DD"),
                end_date: moment__WEBPACK_IMPORTED_MODULE_1__(rowDetails.end_date).format("YYYY-MM-DD"),
                subject_id: this.editRowDetails.subject_id,
                teacher_id: Number(rowDetails.teacher_id),
                is_active: rowDetails.is_active,
                isStudentToBeInactivated: this.editRowDetails.isStudentToBeInactivated,
                class_room_id: this.editRowDetails.class_room_id,
                academic_year_id: this.editRowDetails.academic_year_id
            };
            if (dataToSend.start_date > dataToSend.end_date) {
                this.messageToast('error', '', 'Provide valid dates.');
                return;
            }
            let endDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.editRowDetails.end_date).format("YYYY-MM-DD");
            if (!(dataToSend.end_date >= endDate)) {
                this.messageToast('error', '', 'Batch end date can only be extended.');
                return;
            }
            if (rowDetails.batch_code.length > 4) {
                this.messageToast('error', '', 'Batch Code can not be greater than 4 digits.');
                return;
            }
            if (rowDetails.teacher_id == 0 || rowDetails.teacher_id == null || rowDetails.teacher_id == "") {
                this.messageToast('error', '', 'Please enter the teacher for the batch.');
                return;
            }
            this.auth.showLoader();
            this.apiService.updateDataToServer(dataToSend, rowDetails.batch_id).subscribe(data => {
                this.auth.hideLoader();
                document.getElementById(("row" + index).toString()).classList.remove('editComp');
                document.getElementById(("row" + index).toString()).classList.add('displayComp');
                this.messageToast('success', 'Updated', 'Details Updated Successfully.');
                this.getAllBatchesList();
            }, error => {
                this.auth.hideLoader();
                this.messageToast('error', '', error.error.message);
            });
        }
        cancelTableRow(rowDetails, index) {
            document.getElementById(("row" + index).toString()).classList.remove('editComp');
            document.getElementById(("row" + index).toString()).classList.add('displayComp');
            this.getAllBatchesList();
        }
        clearFormData() {
            this.addNewBatch = {
                standard_id: '-1',
                subject_id: '-1',
                class_room_id: '-1',
                teacher_id: '-1',
                batch_name: '',
                batch_code: '',
                start_date: '',
                end_date: '',
                is_active: true,
                academic_year_id: '-1',
                is_exam_grad_feature: false
            };
        }
        addStudentToBatch(rowDetails) {
            this.addStudentPopUp = true;
            this.batchDetails = rowDetails;
            this.getAllFeeTemplate();
            this.getAllStudentList(rowDetails);
        }
        getAcademicYearDetails() {
            this.academicList = [];
            this.apiService.getAcadYear().subscribe(res => {
                this.academicList = res;
            }, err => {
            });
        }
        getAllFeeTemplate() {
            this.apiService.getFeeTemplate(this.batchDetails.subject_id).subscribe(res => {
                this.feeTemplateDataSource = res;
            }, err => {
                //console.log(err);
            });
        }
        getAllStudentList(rowDetails) {
            this.auth.showLoader();
            this.apiService.getStudentListFromServer(rowDetails.batch_id).subscribe((res) => {
                this.radioOption = '0';
                res.map(element => {
                    element.immutableKey = element.assigned;
                });
                this.studentListDataSource = res;
                this.studentList = this.keepCloning(res);
                this.dataTable = this.studentList;
                this.getHeaderCheckBoxValue(this.dataTable);
                this.auth.hideLoader();
            }, error => {
                this.auth.hideLoader();
                this.messageToast('error', '', error.error.message);
            });
        }
        onRadioButtonChange() {
            this.searchData = "";
            if (this.studentList.length > 0) {
                if (this.radioOption == '0') {
                    this.dataTable = this.studentList;
                }
                else if (this.radioOption == '1') {
                    this.dataTable = this.studentList.filter(el => el.assigned == true);
                }
                else {
                    this.dataTable = this.studentList.filter(el => el.assigned == false);
                }
                this.getHeaderCheckBoxValue(this.dataTable);
            }
            else {
                this.dataTable = [];
            }
        }
        checkIfStudentUnassigned() {
            let check = false;
            for (let i = 0; i < this.studentListDataSource.length; i++) {
                for (let j = 0; j < this.studentList.length; j++) {
                    if (this.studentListDataSource[i].assigned) {
                        if (this.studentList[j].assigned == false && this.studentListDataSource[i].student_id == this.studentList[j].student_id) {
                            check = true;
                            break;
                        }
                    }
                }
            }
            return check;
        }
        saveChanges() {
            let studentUnAssigned = this.checkIfStudentUnassigned();
            if (studentUnAssigned) {
                // this.alertBox = false;
                this.unassign_course();
                // if (confirm("If you unassign the student from batch then corresponding unpaid fee instalments might be deleted.")) {
                //   this.saveStudentListToServer();
                // }
            }
            else {
                this.saveStudentListToServer();
            }
        }
        closeAlert() {
            this.alertBox = true;
            this.delete_unpaid_fee = false;
            let data = this.getCheckedRows();
            for (let i = 0; i < Object.keys(data).length; i++) {
                document.getElementById("studentcheck" + Object.keys(data)[i]).checked = true;
            }
        }
        unassign_course() {
            this.alertBox = true;
            this.saveStudentListToServer();
        }
        saveStudentListToServer() {
            let data = this.getCheckedRows();
            let dataToSend = {
                batch_id: this.batchDetails.batch_id,
                studentAssignedUnassigned_and_AcademicYearMapping: data,
                deleteCourse_SubjectUnPaidFeeSchedules: this.delete_unpaid_fee
            };
            this.auth.showLoader();
            // console.log(dataToSend)
            this.apiService.saveUpdatedList(dataToSend, this.batchDetails.batch_id).subscribe(res => {
                this.messageToast('success', 'Saved', 'Changes saved successfully.');
                this.studentList = [];
                this.addStudentPopUp = false;
                this.auth.hideLoader();
                this.getAllBatchesList();
                this.searchData = "";
            }, err => {
                this.auth.hideLoader();
                //console.log(err);
                this.messageToast('error', '', err.error.message);
            });
        }
        getCheckedRows() {
            let test = {};
            for (let i = 0; i < this.studentListDataSource.length; i++) {
                for (let t = 0; t < this.studentList.length; t++) {
                    if (this.studentList[t].student_id == this.studentListDataSource[i].student_id) {
                        if (this.studentList[t].assigned != this.studentListDataSource[i].assigned) {
                            test[this.studentList[t].student_id] = [this.studentList[t].assigned.toString(), this.studentList[t].academic_year.toString(), this.studentList[i].assigned_fee_template_id.toString()];
                        }
                    }
                }
            }
            return test;
        }
        selectAllCheckBox(element) {
            let val = element.checked;
            for (let i = 0; i < this.studentList.length; i++) {
                this.studentList[i].assigned = val;
            }
        }
        closeStudentPopup() {
            this.addStudentPopUp = false;
            this.searchData = "";
            this.alertBox = true;
        }
        changeDateFormat(date) {
            if (date != "" && date != null) {
                return moment__WEBPACK_IMPORTED_MODULE_1__(date).format("D-MMM-YYYY");
            }
        }
        getHeaderCheckBoxValue(res) {
            for (let i = 0; i < res.length; i++) {
                if (res[i].assigned == false) {
                    this.allChecked = false;
                    break;
                }
                else {
                    this.allChecked = true;
                }
            }
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
        messageToast(errorType, errorTitle, errorMeassage) {
            let data = {
                type: errorType,
                title: errorTitle,
                body: errorMeassage
            };
            this.toastCtrl.popToast(data);
        }
        sortTable(str) {
            if (str == "batch_name" || str == "standard_name" || str == "subject_name" || str == "teacher_name" || str == "is_active") {
                this.tableData.sort(function (a, b) {
                    var nameA = a[str].toUpperCase(); // ignore upper and lowercase
                    var nameB = b[str].toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
            }
            else if (str == "batch_code" || str == "class_room_name" || str == "total_students") {
                this.tableData.sort(function (a, b) {
                    return a[str] - b[str];
                });
            }
            else if (str == "end_date" || str == "start_date") {
                this.tableData.sort(function (a, b) {
                    return moment__WEBPACK_IMPORTED_MODULE_1__(a[str]).unix() - moment__WEBPACK_IMPORTED_MODULE_1__(b[str]).unix();
                });
            }
        }
        // pagination functions
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.tableData = this.getDataFromDataSource(startindex);
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
            if (this.searchDataFlag == true) {
                data = this.searchedData.slice(startindex, startindex + this.displayBatchSize);
            }
            else {
                data = this.batchesListDataSource.slice(startindex, startindex + this.displayBatchSize);
            }
            return data;
        }
        rowSelectEvent(i) {
            if (this.createNewBatch == true) {
                this.selectedRow = null;
            }
            else {
                this.selectedRow = i;
            }
        }
        checkTabSelection() {
            setTimeout(() => {
                this.hideAllTabs();
                document.getElementById('liManageBatch').classList.add('active');
            }, 200);
        }
        hideAllTabs() {
            document.getElementById('liStandard').classList.remove('active');
            document.getElementById('liSubject').classList.remove('active');
            document.getElementById('liManageBatch').classList.remove('active');
            // document.getElementById('liClass').classList.remove('active');
        }
        //  Role Based Access
        checkIfUserHadAccess() {
            let permissionArray = sessionStorage.getItem('permissions');
            let userType = Number(sessionStorage.getItem('userType'));
            if (userType != 3) {
                if (permissionArray == "" || permissionArray == null) {
                    return false;
                }
                else if (this.role_feature.CLASS_MENU) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else if (userType == 3) {
                return true;
            }
        }
    };
    ManageBatchComponent.ctorParameters = () => [
        { type: _services_course_services_manage_batch_service__WEBPACK_IMPORTED_MODULE_6__["ManageBatchService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"] },
        { type: ___WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ];
    ManageBatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-batch',
            template: __importDefault(__webpack_require__(/*! raw-loader!./manage-batch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/manage-batch/manage-batch.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./manage-batch.component.scss */ "./src/app/components/course-module/create-course/manage-batch/manage-batch.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_course_services_manage_batch_service__WEBPACK_IMPORTED_MODULE_6__["ManageBatchService"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"],
            ___WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ManageBatchComponent);
    return ManageBatchComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/manage-batch/manage-batch.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/manage-batch/manage-batch.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ManageBatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBatchModule", function() { return ManageBatchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _manage_batch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-batch.component */ "./src/app/components/course-module/create-course/manage-batch/manage-batch.component.ts");
/* harmony import */ var _services_course_services_manage_batch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/course-services/manage-batch.service */ "./src/app/services/course-services/manage-batch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';




let ManageBatchModule = /** @class */ (() => {
    let ManageBatchModule = class ManageBatchModule {
    };
    ManageBatchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                // BsDatepickerModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _manage_batch_component__WEBPACK_IMPORTED_MODULE_5__["ManageBatchComponent"]
                    }
                ])
            ],
            exports: [],
            declarations: [
                _manage_batch_component__WEBPACK_IMPORTED_MODULE_5__["ManageBatchComponent"]
            ],
            providers: [
                _services_course_services_manage_batch_service__WEBPACK_IMPORTED_MODULE_6__["ManageBatchService"]
            ]
        })
    ], ManageBatchModule);
    return ManageBatchModule;
})();



/***/ }),

/***/ "./src/app/services/course-services/manage-batch.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/course-services/manage-batch.service.ts ***!
  \******************************************************************/
/*! exports provided: ManageBatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBatchService", function() { return ManageBatchService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/services/authenticator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ManageBatchService = /** @class */ (() => {
    let ManageBatchService = class ManageBatchService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseURL = "";
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseURL = this.auth.getBaseUrl();
        }
        successCallback(res) {
            return res;
        }
        errorCallBack(error) {
            return error;
        }
        getBatchListFromServer() {
            let url = this.baseURL + "/api/v1/batches/all/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        getBatchClassRoomListFromServer() {
            let url = this.baseURL + "/api/v1/batchClassRoom/all/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        getMasterCourseListFromServer() {
            let url = this.baseURL + "/api/v1/standards/all/" + this.institute_id + "?active=Y";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        getTeachersListFromServer() {
            let url = this.baseURL + "/api/v1/teachers/all/" + this.institute_id + "?active=Y";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        getPerticularCourseList(data) {
            let url = this.baseURL + "/api/v1/subjects/standards/" + data + "?active=Y";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        addNewBatch(data) {
            delete data['standard_id'];
            let url = this.baseURL + "/api/v1/batches";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        getBatchDetailsForEdit(id) {
            let url = this.baseURL + "/api/v1/batches/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        updateDataToServer(data, batch_Id) {
            let url = this.baseURL + '/api/v1/batches/' + batch_Id;
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        getStudentListFromServer(batch_id) {
            let url = this.baseURL + "/api/v1/allStdAsgnment/all/" + this.institute_id + "/" + batch_id + "?active=Y";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        saveUpdatedList(data, batch_id) {
            data.institute_id = this.institute_id;
            let url = this.baseURL + "/api/v1/allStdAsgnment/" + batch_id;
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        //  Get acadmeic Year Details
        getAcadYear() {
            let url = this.baseURL + "/api/v1/academicYear/all/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, err => {
                return err;
            }));
        }
        getFeeTemplate(batch_id) {
            // https://test999.proctur.com/StdMgmtWebAPI/api/v1/studentWise/fee/fee_template_country_wise/100135?course_id=-1&subject_id=1372
            let url = this.baseURL + "/api/v1/studentWise/fee/fee_template_country_wise/" + this.institute_id + "?course_id=-1&subject_id=" + batch_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, error => {
                return error;
            }));
        }
    };
    ManageBatchService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    ManageBatchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], ManageBatchService);
    return ManageBatchService;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-course-module-create-course-manage-batch-manage-batch-module-es2015.js.map