(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-course-list-v2-course-course-list-v2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-course-list-v2/course-add/course-add.component.html":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-course-list-v2/course-add/course-add.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleCreateCourseCourseCourseListV2CourseAddCourseAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"tab-content\">\n  <div id=\"one\" class=\"tab-pane active\">\n    <div class=\"w98\">\n      <!-- <div class=\"pt25 flex\" [ngClass]=\"{'centerFlex': schoolModel}\">\n           <div class=\"flex\" *ngIf=\"!schoolModel\">\n              <div class=\"master_c\">\n                Master Course :\n              </div>\n              <div>\n                <span class=\"mc_name\">{{courseDetails.master_course}}</span>\n              </div>\n            </div>\n            <div class=\"flex\" [ngClass]=\"{'space_flex': !schoolModel}\">\n              <div class=\"wline\"><img src=\"../../../../assets/img1/line.svg\"></div>\n              <div class=\"std\">Standard: {{courseDetails.standard_name}}</div>\n              <div class=\"wline\"><img src=\"../../../../assets/img1/line.svg\"></div>\n            </div>\n        </div> -->\n      <!-- <div class=\"line\"></div> -->\n      <div class=\"details\">\n        <div class=\"table_head\" *ngIf=\"selectedCourseID\">\n          <div>{{schoolModel ? 'Section' : 'Course'}} Name</div>\n          <div>{{schoolModel ? 'Standard' : 'Master Course'}}</div>\n          <div>Academic Year</div>\n          <div *ngIf=\"!schoolModel\">Start Date</div>\n          <div *ngIf=\"!schoolModel\">End date</div>\n          <div *ngIf=\"!schoolModel && examGradeFeature == '1'\">Allow Exam Grades</div>\n\n        </div>\n        <div class=\"pt15 table_body\" [ngClass]=\"{'noShadow': !selectedCourseID}\" style=\"margin-bottom: 0;\">\n          <input type=\"text\" style=\"float: left;\" name=\"masterCourse\" id=\"masterCourse\"\n            [(ngModel)]=\"courseDetails.course_name\" placeholder=\"{{schoolModel ? 'Section' : 'Course'}} Name*\"\n            class=\"input mr10 wid217\">\n          <select class=\"select mr10 wid180\" *ngIf=\"!schoolModel\" [(ngModel)]=\"courseDetails.master_course_id\"\n            (ngModelChange)=\"getSubjects()\">\n            <option value=\"\">Select Master Course*</option>\n            <option value=\"{{mc.master_course_id}}\" *ngFor=\"let mc of masterCourseData\">{{mc.master_course_name}}\n            </option>\n          </select>\n          <select class=\"select mr10 wid180\" *ngIf=\"schoolModel\" [(ngModel)]=\"courseDetails.standard_id\"\n            (ngModelChange)=\"getSubjects()\">\n            <option value=\"\">Select Standard*</option>\n            <option value=\"{{mc.standard_id}}\" *ngFor=\"let mc of standardList\">{{mc.standard_name}}</option>\n          </select>\n          <select class=\"select mr10 wid180\" [(ngModel)]=\"courseDetails.academic_year_id\"\n            (ngModelChange)=\"setStartAdEndDate(courseDetails)\">\n            <option value=\"-1\">Academic Year * </option>\n            <option *ngFor=\"let opt of academicList\" [value]=\"opt.inst_acad_year_id\">\n              {{opt.inst_acad_year}}\n            </option>\n          </select>\n          <div *ngIf=\"!schoolModel\" class=\"field-wrapper datePickerBox\" style=\"float: left;\">\n            <input type=\"text\" class=\"form-ctrl bsDatepicker input mr10 wid180\" [(ngModel)]=\"courseDetails.start_Date\"\n              autocomplete=\"off\" name=\"startDate\" id=\"startDate\" bsDatepicker placeholder=\"Start date*\">\n          </div>\n          <div *ngIf=\"!schoolModel\" class=\"field-wrapper datePickerBox\" style=\"float: left;\">\n            <input type=\"text\" autocomplete=\"off\" class=\"form-ctrl bsDatepicker input mr10 wid180\"\n              [(ngModel)]=\"courseDetails.end_Date\" name=\"endDate\" bsDatepicker id=\"endDate\" placeholder=\"End date*\">\n          </div>\n          <div *ngIf=\"!schoolModel && examGradeFeature == '1'\">\n            <label class=\"checkbox\">\n              <span class=\"checkbox__input\">\n                <input type=\"checkbox\" id=\"allow\" value=\"\" [(ngModel)]=\"courseDetails.allow_exam_grades\" name=\"allow\">\n                <span class=\"checkbox__control\">\n                  <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                    <path fill='none' stroke='currentColor' d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                  </svg>\n                </span>\n              </span>\n            </label>\n            <span>Allow Exam Grades</span>\n          </div>\n        </div>\n        <span *ngIf=\"!schoolModel\" data-toggle=\"modal\" data-target=\"#courseModal\" class=\"addMc\">Add Master course</span>\n      </div>\n      <div class=\"subject\">\n        <div class=\"table_head\">\n          <div>Select</div>\n          <div>Subject Name</div>\n          <div>Allocate Faculty *</div>\n          <div *ngIf=\"selectedCourseID\" style=\"width: 15%;\"></div>\n        </div>\n        <div class=\"table_body\" *ngFor=\"let row of subjectList ; let i= index; trackBy: index\">\n          <div>\n            <label class=\"checkbox\">\n              <span class=\"checkbox__input\" [ngStyle]=\"{'cursor':(row.uiSelected == true && row.hasOwnProperty('otherDetails'))? 'no-drop' : 'default' }\">\n                <input type=\"checkbox\" id=\"{{row.subject_id}}\" [(ngModel)]=\"row.uiSelected\" name=\"checked\" [disabled]=\"row.uiSelected == true && row.hasOwnProperty('otherDetails')\">\n                <span class=\"checkbox__control\">\n                  <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                    <path fill='none' stroke='currentColor' d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                  </svg>\n                </span>\n              </span>\n            </label>\n          </div>\n          <div>\n            {{row.is_optional=='Y'?row.subject_name+'(Optional)':row.subject_name}}\n          </div>\n          <div>\n            <select class=\"select width_s\" [(ngModel)]=\"row.selected_teacher\" id=\"{{row.selected_teacher + i}}\" [name]=\"row.selected_teacher + i\" (ngModelChange)=\"checkMoreOption(row)\">\n              <option value=\"-1\"></option>\n              <option *ngFor=\"let opt of row.allowedTeacher\" [value]=\"opt.teacher_id\">\n                {{opt.teacher_name}}\n              </option>\n            </select>\n          </div>\n          <div style=\"width: 15%;\">\n            <a *ngIf=\"row.uiSelected == true && row.hasOwnProperty('otherDetails')\" (click)=\"deleteSubjectRow(row, i)\"><i\n              class=\"fa fa-trash\" style=\"font-size: 16px;color: red;\" title=\"Delete\"> </i></a>\n          </div>\n        </div>\n      </div>\n      <!-- use image only when page is empty,table body class element will not be present -->\n      <div *ngIf=\"courseDetails.master_course_id!='' || courseDetails.standard_id!=''\" class=\"add_subject\">\n        <span>\n          <a href=\"\" data-toggle=\"modal\" (click)=\"getAllStandardSubjectList()\" data-target=\"#addUpdateSubjectdialog\">Add\n            New Subject</a>\n        </span>\n      </div>\n      <div class=\"white bottom_pagignation \">\n        <div class=\"display\">\n          <div><button routerLink=\"/view/course/create/courselist\" class=\"white_button\">Back</button></div>\n          <div><button class=\"blue_button\" (click)=\"addDataToTable()\">{{(selectedCourseID) ? 'Update' :\n              'Save'}}</button></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"addUpdateSubjectdialog\" role=\"dialog\" tabindex=\"-1\" style=\"margin-top: 3%;\" role=\"dialog\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title\" style=\"margin-bottom: -5px;\">Add Subject\n        </h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"field-wrapper\">\n          <label *ngIf=\"(isLangInstitue != true )\" for=\"masterCourse\">Standard Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <label *ngIf=\"(isLangInstitue == true )\" for=\"masterCourse\">Master Course Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <div class=\"dropdown-div\">\n            <select id=\"masterCourse\" disabled class=\"form-ctrl\" [(ngModel)]=\"newSubjectDetails.standard_id\">\n              <option value=\"-1\"> Select {{isLangInstitue ? 'Master Course Name' : 'Standard'}}</option>\n              <option *ngFor=\"let opt of standardList\" [value]=\"opt.standard_id\">\n                {{ (opt.standard_name?.length > 70) ? (opt.standard_name | slice:0:70) + '...' : opt.standard_name }}\n              </option>\n            </select>\n            <!-- <p>* Example English, Science</p> -->\n          </div>\n        </div>\n        <div class=\"field-wrapper\">\n          <label *ngIf=\"(isLangInstitue != true )\" for=\"subname\">\n            Subject Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <label *ngIf=\"(isLangInstitue == true )\" for=\"subname\">\n            Course Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"newSubjectDetails.subject_name\" id=\"subname\" name=\"label\">\n          <!-- <p>(Eg. Maths or Science or Accounts)</p> -->\n        </div>\n        <div class=\"field-wrapper\">\n          <label for=\"sub_code\">\n            Subject Code\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" onkeypress=\"return event.charCode != 32\" [maxlength]=\"subjectCodeCharLimit\" class=\"form-ctrl\"\n            [(ngModel)]=\"newSubjectDetails.subject_code\" id=\"sub_code\" name=\"sub_code\">\n        </div>\n        <div class=\"field-wrapper\" *ngIf=\"schoolModel\">\n          <label for=\"total_marks\">Total Marks\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" class=\"form-ctrl\"\n            [(ngModel)]=\"newSubjectDetails.total_marks\" id=\"total_marks\" name=\"total_marks\">\n        </div>\n        <div class=\"field-wrapper\" *ngIf=\"schoolModel\">\n          <label for=\"passing_marks\">Passing Marks\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n            [(ngModel)]=\"newSubjectDetails.passing_marks\" id=\"passing_marks\" name=\"passing_marks\">\n        </div>\n        <div class=\"field-wrapper\">\n          <div class=\"field-checkbox-wrapper\">\n            <input type=\"checkbox\" value=\"\" name=\"check\" class=\"form-checkbox\" [(ngModel)]=\"newSubjectDetails.is_active\"\n              id=\"isAct\">\n            <label for=\"isAct\">Is Active</label>\n          </div>\n          <div class=\"field-checkbox-wrapper\" *ngIf=\"schoolModel\">\n            <input type=\"checkbox\" name=\"check\" class=\"form-checkbox\" [(ngModel)]=\"newSubjectDetails.is_optional\"\n              id=\"is_optional\">\n            <label for=\"is_optional\">Set as Optional</label>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"clearData()\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary create-btn\" (click)=\"addNewSubject()\">Save</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<div class=\"modal\" id=\"standardModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Standard</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"pt10\">\n          <input type=\"text\" class=\"wid100 input\" name=\"\" placeholder=\"Standard*\">\n        </div>\n\n\n        <div class=\"pt101 display\">\n          <div></div>\n          <div>\n\n            <button class=\"blue_button mr10\">Add Standard</button>\n            <button class=\"white_button\">Back</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"courseModal\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{editMasterC ? 'Edit' : 'Add'}} Master Course</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"pt10\">\n          <input type=\"text\" class=\"wid100 input\" [(ngModel)]=\"createMasterCourseModel.master_course_name\" name=\"\"\n            placeholder=\"Master Course*\">\n        </div>\n        <div class=\"pt10\">\n          <select class=\"wid100 select\" [(ngModel)]=\"createMasterCourseModel.standard_id\">\n            <option value=\"-1\">Standard Name*</option>\n            <option value=\"{{std.standard_id}}\" *ngFor=\"let std of standardList\">{{std.standard_name}} </option>\n          </select>\n        </div>\n\n        <div class=\"pt101 display\">\n          <div></div>\n          <div>\n\n            <button (click)=\"saveMasterC()\" class=\"blue_button mr10\">{{editMasterC ? 'Update' : 'Add'}}</button>\n            <button data-dismiss=\"modal\" (click)=\"clearMasterCourse()\" class=\"white_button\">Back</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.component.html":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleCreateCourseCourseCourseListV2CourseCourseListV2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"tab-content\">\n  <div id=\"one\" class=\"tab-pane active\">\n    <div class=\"w98\">\n      <div class=\"pt15 display\" style=\"justify-content:unset;\">\n        <div style=\"display: flex; width: 40%;\">\n\n          <div *ngIf=\"!schoolModel\">\n            <select class=\"select w200\" [(ngModel)]=\"master_course_id\" (ngModelChange)=\"fetchCourseDetails($event)\">\n              <option value=\"-1\">Select Master Course*</option>\n              <option value=\"{{mc.master_course_id}}\" *ngFor=\"let mc of masterCourseData\">{{mc.master_course_name}}\n              </option>\n            </select>\n          </div>\n          <div *ngIf=\"schoolModel\">\n            <select class=\"select w200\" [(ngModel)]=\"master_course_id\" (ngModelChange)=\"fetchCourseDetails($event)\">\n              <option value=\"-1\">Select Standard*</option>\n              <option value=\"{{mc.standard_id}}\" *ngFor=\"let mc of standardList\">{{mc.standard_name}}</option>\n            </select>\n          </div>\n\n          <div style=\"margin-left: 15px;\">\n            <select class=\"select w200\" [(ngModel)]=\"acad_year_id\" (ngModelChange)=\"fetchCourseDetails($event)\">\n              <option value=\"-1\">Select Academic Year*</option>\n              <option value=\"{{mc.inst_acad_year_id}}\" *ngFor=\"let mc of academicList\">{{mc.inst_acad_year}}</option>\n            </select>\n          </div>\n\n          <!-- <div>\n            <div style=\"width:100px;margin-left: 15px;margin-top: 10px;\">\n              <label class=\"checkbox\">\n                <span class=\"checkbox__input\">\n                  <input type=\"checkbox\" id=\"allow\" value=\"\" [(ngModel)]=\"is_active\" (ngModelChange)=\"fetchCourseDetails(is_active)\" name=\"allow\">\n                  <span class=\"checkbox__control\">\n                    <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                      <path fill='none' stroke='currentColor' d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                    </svg>\n                  </span>\n                </span>\n              </label>\n              <span>Is Active</span>\n            </div>\n          </div> -->\n        </div>\n        <div class=\"searchClass\">\n          <div style=\"margin-right: 10px;\">\n            <input type=\"text\" class=\"select w200\" placeholder=\"Search\" [(ngModel)]=\"Search_criteria\">\n          </div>\n          <div class=\"blue_button\" style=\"margin-right: 15px;\" (click)=\"fetchCourseDetails(Search_criteria)\">\n            Go\n          </div>\n          <div class=\"blue_button\" style=\"margin-right: 15px;\" routerLink=\"../add\">\n            <span>Add {{schoolModel? 'Section' : 'Course'}}</span>\n          </div>\n          <!-- <div *ngIf=\"!schoolModel\">\n            <a href=\"\" data-toggle=\"modal\" data-target=\"#courseModal\"> <button class=\"blue_button\">Add Master\n                Course</button></a>\n          </div> -->\n        </div>\n      </div>\n      <!-- <div class=\"pt15 flex\" [ngClass]=\"{'centerFlex': schoolModel}\">\n        <div class=\"flex\" *ngIf=\"masterCourseObj.master_course_name!='' && !schoolModel\">\n          <div class=\"master_c\">\n            Master Course :\n          </div>\n          <div>\n            <span class=\"mc_name\" style=\"top: -6px;\">{{masterCourseObj.master_course_name}}</span><img\n              data-toggle=\"modal\" data-target=\"#courseModal\" src=\"../../../../assets/img1/edit.svg\"\n              (click)=\"editMasterC=true;createMasterCourseModel=masterCourseObj;\" class=\"pointer\">\n          </div>\n        </div>\n        <div class=\"flex\" [ngClass]=\"{'space_flex': !schoolModel}\" *ngIf=\"masterCourseObj.standard_name!=''\">\n          <div class=\"wline\"><img src=\"../../../../assets/img1/line.svg\"></div>\n          <div class=\"std\">Standard: {{masterCourseObj.standard_name}}</div>\n          <div class=\"wline\"><img src=\"../../../../assets/img1/line.svg\"></div>\n        </div>\n      </div> -->\n      <!-- use image only when page is empty,table body class element will not be present -->\n      <br>\n      <div class=\"outter_flex\" *ngFor=\"let mc of courseData\">\n        <div class=\"flex mc_class\">\n          <div>\n            <span class=\"mr10\">{{mc.master_course_name}}</span>\n            <img data-toggle=\"modal\" *ngIf=\"!schoolModel\" data-target=\"#courseModal\" src=\"../../../../assets/img1/edit.svg\"\n            (click)=\"editMcFun(mc)\" class=\"pointer\">\n        </div>\n          <div class=\"flex\" [ngClass]=\"{'space_flex': !schoolModel}\" *ngIf=\"mc.course_list && mc.course_list[0].standard_name!=''\">\n            <div class=\"wline\"><img src=\"../../../../assets/img1/line.svg\"></div>\n            <div class=\"std\">Standard: {{mc.course_list[0].standard_name}}</div>\n            <div class=\"wline\"><img src=\"../../../../assets/img1/line.svg\"></div>\n          </div>\n        </div>\n        <!-- <div class=\"firstchild\" *ngIf=\"master_course_id!='-1'\">\n          <a routerLink=\"../add\" (click)=\"setAddCourseSession()\">\n            <div>\n              <span>\n                <p>+</p>\n                <p>Add {{schoolModel? 'Section' : 'Course'}}</p>\n              </span>\n            </div>\n          </a>\n        </div> -->\n        <div *ngFor=\"let course of mc.course_list\">\n          <div class=\"display name course_name pbt10\">\n            <div class=\"line0\">{{course.course_name}}</div>\n            <div style=\"line-height: unset;\"><a routerLink=\"../edit/{{course.course_id}}\"><img style=\"width: 30px;height: 20px;\"\n                  src=\"../../../../assets/img1/edit.svg\"></a></div>\n          </div>\n          <div class=\"name1\"></div>\n          <!-- <div class=\"flex\">\n            <div class=\"name2\">\n              Start Date :\n            </div>\n            <div class=\"value2\">\n              {{course.start_date}}\n            </div>\n          </div> -->\n          <!-- <div class=\"flex\">\n            <div class=\"name2\">\n              Course Name :\n            </div>\n            <div class=\"value2\">\n              {{course.course_name}}\n            </div>\n          </div> -->\n          <div class=\"flex\">\n            <div class=\"name2\">\n              End Date :\n            </div>\n            <div class=\"value2\" [ngStyle]=\"{'color':(course.activeDate)?'#222529':'red'}\">\n              {{course.end_date}}\n            </div>\n          </div>\n          <!-- <div class=\"flex\">][page`/.,]\n            <div class=\"name2\">\n              Subjects :\n            </div>\n            <div class=\"value2\">\n              {{course.subject_list}}\n            </div>\n          </div> -->\n          <!-- <div class=\"flex\">\n            <div class=\"name2\">\n              Academic Year :\n            </div>\n            <div class=\"value2\">\n              {{course.academic_year}}\n            </div>\n          </div> -->\n          <div class=\"flex\">\n            <div class=\"name2\">\n              Total Students :\n            </div>\n            <div class=\"value2 display\">\n              <div>{{course.total_students}}</div>\n              <div class=\"add_s\" *ngIf=\"!schoolModel\" (click)=\"addStudentToBatch(course)\">Assign /Unassign </div>\n            </div>\n          </div>\n          <!-- <div class=\"flex\">\n            <div class=\"name2\">\n              <div class=\"add_s\"><a routerLink=\"../edit/{{course.course_id}}\">Edit</a>\n              </div>\n            </div>\n          </div> -->\n        </div>\n      </div>\n      <div class=\"outter_flex\" style=\"justify-content: center;\" *ngIf=\"!courseData?.length\">\n        <img src=\"../../../assets/images/course/std_no_data.svg\" style=\"margin-top: 5%;\" *ngIf=\"schoolModel\">\n        <img src=\"../../../assets/images/course/Section_no_data.png\" style=\"margin-top: 5%;\" *ngIf=\"!schoolModel\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- =============================================================================== -->\n<!-- =============================================================================== -->\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"addStudentPopUp\">\n  <div class=\"popup pos-abs popup-body-container\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeStudentPopup()\">\n        <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n          viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n          <path class=\"large-icon\"\n            d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n            style=\"fill: currentColor\"></path>\n        </svg>\n      </span>\n      <div class=\"popup-content student-assign-popup\">\n        <div class=\"row popup-title\">\n          <h2>{{schoolModel ? 'Section' : 'Course'}} :\n            <span>{{courseDetails.course_name}}</span>\n          </h2>\n        </div>\n\n        <div class=\"row filter-section\">\n          <div class=\"c-sm-4 c-md-4 c-lg-4 radio-button\" *ngIf=\"!schoolModel\">\n            <div class=\"field-radio-wrapper\">\n              <input type=\"radio\" name=\"bothRadio\" id=\"bothRadio\" class=\"form-radio\" value=\"0\"\n                [(ngModel)]=\"searchFilter.unassignFlag\" (ngModelChange)=\"onRadioButtonChange()\">\n              <label for=\"bothRadio\">Both</label>\n            </div>\n            <div class=\"field-radio-wrapper\">\n              <input type=\"radio\" name=\"assignRadio\" id=\"assignRadio\" value=\"1\" class=\"form-radio\"\n                [(ngModel)]=\"searchFilter.unassignFlag\" (ngModelChange)=\"onRadioButtonChange()\">\n              <label for=\"assignRadio\">Assigned</label>\n            </div>\n            <div class=\"field-radio-wrapper\">\n              <input type=\"radio\" name=\"unassignStudent\" id=\"unassignStudent\" value=\"2\" class=\"form-radio\"\n                [(ngModel)]=\"searchFilter.unassignFlag\" (ngModelChange)=\"onRadioButtonChange()\">\n              <label for=\"unassignStudent\">UnAssigned</label>\n            </div>\n          </div>\n          <div class=\"c-sm-7 c-md-7 c-lg-7\" style=\"float: right;\">\n\n            <div class=\"c-sm-6 c-md-6 c-lg-6\">\n              <div class=\"field-wrapper\" *ngIf=\"!schoolModel\">\n                <select class=\"form-ctrl\" [(ngModel)]=\"searchFilter.standard_id\" name=\"standard\" id=\"standard\">\n                  <option value=\"-1\">Select Standard</option>\n                  <option *ngFor=\"let opt of standardList\" [value]=\"opt.standard_id\">\n                    {{opt.standard_name}}\n                  </option>\n                </select>\n\n              </div>\n            </div>\n\n            <div class=\"c-sm-2 c-md-2 c-lg-2\">\n              <button class=\"btn\" *ngIf=\"!schoolModel\" (click)=\"getAllStudentList()\">Go</button>\n            </div>\n\n            <div class=\"c-sm-4 c-md-4 c-lg-4\">\n              <div class=\"search-filter-wrapper\">\n                <input #searchVal type=\"text\" style=\"width: 140px;\" class=\"normal-field\" placeholder=\"Search\" id=\"searchStudent\"\n                  name=\"searchData\" [(ngModel)]=\"searchData\">\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div *ngIf=\"showTable\">\n          <div class=\"table-wrapper\">\n            <table>\n              <thead>\n                <th>\n                  <div class=\"field-checkbox-wrapper\">\n                    <input #idSelectAll type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"allChecked\"\n                      (click)=\"selectAllCheckBox(idSelectAll)\">\n                    <!-- [attr.disabled] = \"searchFilter.unassignFlag == 1 ? 'disabled' : null\" -->\n                    <label></label>\n                  </div>\n                </th>\n                <th>\n                  ID\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  Name\n                </th>\n                <th>\n                  Contact No.\n                </th>\n                <th>\n                  Standard\n                </th>\n                <!-- <th>\n                  Academic Year\n                </th> -->\n                <!-- <th>\n                  Fee Template\n                </th> -->\n              </thead>\n              <tbody>\n                <tr id=\"row{{i}}\" *ngFor=\"let row of (studentList | searchPipe:searchData); let i = index; trackBy: i;\">\n                  <td>\n                    <div class=\"field-checkbox-wrapper\">\n                      <input type=\"checkbox\" id=\"studentcheck{{row.student_id}}\" class=\"form-checkbox\"\n                        [(ngModel)]=\"row.assigned\"> <!-- [disabled]=\"row.immutableKey\" -->\n                      <label></label>\n                    </div>\n                  </td>\n                  <td>\n                    {{row.student_disp_id}}\n                  </td>\n                  <td [title]=\"row.country_name\">\n                    {{row.country_code}}\n                  </td>\n                  <td>\n                    {{row.student_name}}\n                  </td>\n                  <td>\n                    {{row.student_phone}}\n                  </td>\n                  <td>\n                    {{row.student_class}}\n                  </td>\n                  <!-- <td>\n                    <div class=\"field-wrapper\">\n                      <select class=\"form-ctrl\" [disabled]=\"true\"\n                        [ngStyle]=\"{'background':courseDetails.academic_year_id? 'lightgrey':'','cursor':courseDetails.academic_year_id ? 'not-allowed':''}\"\n                        [(ngModel)]=\"courseDetails.academic_year_id\" style=\"background: transparent\">\n                        <option value=\"-1\">Select</option>\n                        <option *ngFor=\"let opt of academicList\" [value]=\"opt.inst_acad_year_id\">\n                          {{opt.inst_acad_year}}\n                        </option>\n                      </select>\n                    </div>\n                  </td> -->\n                  <!-- <td>\n                    <div class=\"field-wrapper\">\n                      <select class=\"form-ctrl\" [disabled]=\"row.immutableKey\" [(ngModel)]=\"row.assigned_fee_template_id\"\n                        style=\"background: transparent\">\n                        <option value=\"-1\">Select</option>\n                        <option *ngFor=\"let opt of setDefaultTemplate(row.country_id,feeTemplateDataSource,row)\"\n                          [value]=\"opt.template_id\">\n                          <label title=\"{{opt.template_name}}\">\n                            {{ (opt.template_name.length > 20) ? (opt.template_name | slice:0:20) + '...' :opt.template_name }}\n                          </label>\n                        </option>\n                      </select>\n                    </div>\n                  </td> -->\n                </tr>\n                <tr *ngIf=\"(studentList.length == 0)\">\n                  <td colspan=\"9\">\n                    No Student Details Found\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"row btn-section\" style=\"margin: 10px 10px 0 0;\">\n            <button class=\"btn fullBlue pull-right\" (click)=\"saveChanges()\">Save</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n<section [hidden]=\"alertBox\">\n  <div class=\"confirmation_popup\">\n    <div class=\"confirm_title\">\n      <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\" style=\"color: rgba(255,0,0,0.7);\"></i> &nbsp;\n      <span>Alert</span>\n    </div>\n    <div class=\"confirmation_msg_box\">\n      <span id=\"confirm_msg\">Do you wish to unassign student from the course?</span>\n    </div>\n    <br>\n    <div class=\"field-checkbox-wrapper\">\n      <input type=\"checkbox\" id=\"delete_unpaid_fee\" name=\"batch\" [(ngModel)]=\"delete_unpaid_fee\" class=\"form-checkbox\">\n      <label> Delete unpaid fees installments</label>\n    </div>\n    <div class=\"confirmation_button_container\">\n      <input type=\"button\" value=\"Yes\" class=\"btn\" (click)=\"unassign_course()\">\n      <input type=\"button\" value=\"No\" class=\"btn\" (click)=\"closeAlert()\">\n      <!-- <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeAlert()\"> -->\n    </div>\n  </div>\n</section>\n\n<div class=\"black-bg\" id=\"black-bg\" [hidden]=\"alertBox\" (click)=\"closeAlert()\">\n\n</div>\n\n<div class=\"modal\" id=\"courseModal\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit {{schoolModel ? 'Section' : 'Master Course'}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"pt10\">\n          <input type=\"text\" class=\"wid100 input\" [(ngModel)]=\"createMasterCourseModel.master_course_name\" name=\"\"\n            placeholder=\"Master Course*\">\n        </div>\n        <div class=\"pt10\">\n          <select class=\"wid100 select\" [(ngModel)]=\"createMasterCourseModel.standard_id\" disabled>\n            <option value=\"-1\">Standard Name*</option>\n            <option value=\"{{std.standard_id}}\" *ngFor=\"let std of standardList\">{{std.standard_name}} </option>\n          </select>\n        </div>\n\n        <div class=\"pt101 display\">\n          <div></div>\n          <div>\n\n            <button (click)=\"saveMasterC()\" class=\"blue_button mr10\">{{editMasterC ? 'Update' : 'Add'}}</button>\n            <button data-dismiss=\"modal\" (click)=\"clearMasterCourse()\" class=\"white_button\">Back</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-course-list-v2/course-add/course-add.component.scss":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-course-list-v2/course-add/course-add.component.scss ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseCourseListV2CourseAddCourseAddComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n* {\n  margin: 0px;\n}\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n.centerFlex {\n  justify-content: center;\n}\n.flex {\n  display: flex;\n}\n.blue_button {\n  background-color: #109CF1;\n  color: #fff;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 33px;\n  cursor: pointer;\n}\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\n.input {\n  padding: 7px 20px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.flex {\n  display: flex;\n}\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n}\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n.table_body > div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 35px;\n}\n.mr10 {\n  margin-right: 10px;\n}\n.w240 {\n  width: 240px;\n}\n.group18 {\n  width: 18px;\n  height: auto;\n}\n.pt15 {\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n.pt25 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.bottom_pagignation {\n  padding: 10px 0px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n.w450 {\n  width: 450px;\n}\n.w200 {\n  width: 200px;\n}\n.white {\n  background-color: #fff;\n  width: 82%;\n  margin: 0px auto;\n  border-top: 3px solid #Ededed;\n}\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n.nav-item .nav-link {\n  font-weight: 400;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.nav-item .nav-link.active {\n  font-weight: 600;\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 2.5rem;\n  margin-left: 0rem;\n}\n.flex {\n  display: flex;\n}\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n.list > li img {\n  padding: 0px 10px;\n}\n.right {\n  float: right;\n}\n.add_s {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n.add_s > p {\n  margin-bottom: 10px;\n}\n/*.mt12{\n    margin-top: 12px;\n  }*/\n.img1 {\n  width: 90%;\n  height: auto;\n  margin-top: 100px;\n}\n.img_c {\n  text-align: center;\n}\n.line {\n  padding-top: 15px;\n  border-bottom: 1px solid #EBE8E8;\n}\n.subject {\n  height: 50vh;\n  overflow-y: auto;\n}\n.subject .table_head {\n  display: flex;\n  margin-top: 15px;\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.subject .table_body {\n  display: flex;\n  border: 1px solid #DFE5F0;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.subject .table_head > div {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 35px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n.subject .table_body > div {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 46px;\n  letter-spacing: 0.01em;\n  color: #405877;\n}\n.subject .table_body > div:first-child, .subject .table_head > div:first-child {\n  width: 15%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.subject .table_body > div:nth-child(2), .subject .table_head > div:nth-child(2) {\n  width: 45%;\n  text-align: left;\n  padding-left: 10px;\n}\n.subject .table_body > div:nth-child(3), .subject .table_head > div:nth-child(3) {\n  width: 40%;\n  text-align: left;\n  padding-left: 10px;\n}\n.width_s {\n  width: 50%;\n  padding: 5px 0px;\n}\n.checkbox {\n  margin-right: 10px;\n  /* margin-top: 10px;*/\n  display: inline;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n}\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 2px solid #BBB2B2;\n}\n.checkbox__input {\n  display: inline;\n  grid-template-areas: \"checkbox\";\n}\n.checkbox__control svg {\n  color: #0084f6;\n  font-weight: 600;\n  stroke-width: 4;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  transform-origin: bottom left;\n}\n.checkbox__input input:checked\n+ .checkbox__control svg {\n  transform: scale(1);\n}\n.checkbox__input input:checked\n+ .checkbox__control {\n  border: 2px solid #0084f6;\n}\n.add_subject {\n  padding: 10px 0px;\n  background-color: #fff;\n  /*  position: fixed;\n      bottom: 80px;\n      z-index: 100;*/\n}\n.add_subject > span {\n  position: fixed;\n  right: 1%;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n.wid100 {\n  width: 100%;\n}\n.pt10 {\n  margin-top: 10px;\n}\n.pt101 {\n  margin-top: 20px;\n}\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.right {\n  float: right;\n}\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n.modal-header:before {\n  display: none;\n}\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n  float: left;\n}\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 8px;\n}\n.details .table_head {\n  display: flex;\n  margin-top: 15px;\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.details .table_body {\n  display: flex;\n  border: 1px solid #DFE5F0;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.details .table_head > div {\n  width: 199px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 35px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n.details .table_body > div {\n  width: calc((100% - 30%) / 4);\n  text-align: center;\n  font-weight: 400;\n  font-size: 13px;\n  margin: unset;\n  line-height: unset;\n  color: #405877;\n}\n.details .table_body > div:first-child, .details .table_head > div:first-child {\n  width: 271px;\n}\n/*\n  .details .table_body>div:nth-child(2),.details .table_head>div:nth-child(2){\n    width: 40%;\n    text-align: left;\n    padding-left: 10px;\n  }\n  .details .table_body>div:nth-child(3),.details .table_head>div:nth-child(3){\n    width: 40%;\n    text-align: left;\n    padding-left: 10px;\n  }*/\n.outter_flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n.outter_flex > div {\n  width: 22.5%;\n  margin: 0px 1.25%;\n  border: 1px solid #E8E8E8;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  margin-bottom: 30px;\n}\n.firstchild {\n  background: #DCF2FF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.firstchild > a > div {\n  width: 152px;\n  height: 152px;\n  cursor: pointer;\n  border-radius: 50%/50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 254, 254, 0.3);\n}\n.firstchild > a > div p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n.firstchild > a > div p:first-child {\n  font-size: 30px;\n}\n.firstchild > a > div span:first-child {\n  text-align: center;\n}\n.firstchild > a > div :last-child {\n  margin-top: -7%;\n}\n.name > div:first-child {\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n  padding-left: 10px;\n  word-break: break-all;\n  width: 80%;\n}\n.name > div {\n  line-height: 50px;\n}\n.name1 {\n  width: 90%;\n  margin: 0px auto;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #F4EBEB;\n}\n.name > div:last-child {\n  padding-right: 10px;\n}\n.name2 {\n  width: 43%;\n  padding-left: 10px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #767272;\n  margin-bottom: 15px;\n}\n.value2 {\n  width: 55%;\n  padding-right: 10px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #222529;\n  margin-bottom: 15px;\n}\n.add_s {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n  cursor: pointer;\n}\n.master_c {\n  font-weight: 400;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #898B8D;\n}\n.mc_name {\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n  position: relative;\n  padding: 0px 4px;\n  top: -1px;\n}\n.wline {\n  padding: 0px 8px;\n  position: relative;\n  top: -4px;\n}\n.std {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n.space_flex {\n  padding-left: 12%;\n}\n.bsDatepicker ::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  background-position: 10 center;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n.bsDatepicker {\n  color: #787A7D;\n  cursor: pointer;\n}\ninput:focus {\n  outline: none;\n}\nbutton:focus {\n  outline: none;\n}\n.bsDatepicker :before {\n  content: attr(placeholder) !important;\n  padding-right: 5px;\n}\n.bsDatepicker :focus:before,\n.bsDatepicker :valid:before {\n  content: \"\";\n}\n.wid217 {\n  width: 271px;\n}\n.wid180 {\n  width: 180px;\n}\n.wid136 {\n  width: 90%;\n}\n.wid9 {\n  padding-left: 0px;\n  position: relative;\n  top: -4px;\n}\n@media (min-width: 576px) {\n  #subjectModal .modal-dialog, #courseModal .modal-dialog {\n    max-width: 300px;\n  }\n}\n#courseModal .modal-dialog, #subjectModal .modal-dialog {\n  max-width: 300px;\n}\n.nav > li {\n  display: inline;\n}\n.nav-link:hover, .nav-link, .nav-link:focus {\n  background-color: transparent;\n}\n.nav-link {\n  display: inline;\n}\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n.pointer {\n  cursor: pointer;\n}\n.student-assign-popup .popup-title {\n  margin-left: 0px;\n}\n.student-assign-popup .filter-section {\n  padding: 10px 0px;\n  margin: 5px 0;\n  background: #efefef;\n}\n.student-assign-popup .filter-section .radio-button {\n  margin-top: 10px;\n  display: inline-flex;\n}\n.student-assign-popup .filter-section .radio-button .field-radio-wrapper {\n  margin-right: 5px;\n}\n.student-assign-popup .filter-section .field-wrapper {\n  padding-top: 0;\n}\n.student-assign-popup .filter-section .btn {\n  margin-left: 0;\n}\n.student-assign-popup .table-wrapper {\n  margin-top: 15px;\n  max-height: 320px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.student-assign-popup .table-wrapper th {\n  text-align: left;\n}\n.student-assign-popup .table-wrapper td {\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n}\n.student-assign-popup .table-wrapper td .field-wrapper .form-ctrl {\n  padding: 5px;\n  width: 90px;\n}\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n}\n.confirmation_popup {\n  position: fixed;\n  top: 35%;\n  left: 40%;\n  width: 300px;\n  background: white;\n  height: auto;\n  padding: 20px;\n  z-index: 99999999;\n  border-radius: 6px;\n  border-top: 4px solid rgba(255, 0, 0, 0.7);\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n}\n.confirm_title {\n  font-size: 20px;\n}\n.confirmation_msg_box {\n  margin-top: 15px;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n  border: 2px solid #0084f6;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 14px;\n  display: inline-block;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.confirmation_button_container {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n.confirmation_button_container input {\n  width: 80px;\n}\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 999;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 65%;\n  width: 100%;\n  height: auto;\n  left: 13%;\n  right: 0;\n  top: 13%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper span {\n  font-weight: 300;\n  display: inline-block;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  height: 35px;\n  font-size: 14px;\n}\n.mc_class {\n  width: 100% !important;\n  border: none !important;\n  box-shadow: none !important;\n  font-weight: 600;\n  margin-bottom: 15px !important;\n  align-items: center;\n}\n.searchClass {\n  display: flex;\n  justify-content: flex-end;\n  width: 59%;\n}\n.course_name {\n  align-items: center;\n  min-height: 50px;\n  border-left: 4px solid #109CF1;\n}\n.course_name .line0 {\n  line-height: normal;\n}\n.pbt10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.field-wrapper {\n  padding-top: 0;\n}\n.field-wrapper.datePickerBox:after {\n  content: \"\";\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 30px;\n  top: 7px;\n  width: 21px;\n  height: 21px;\n  z-index: 20;\n  border-radius: 4px;\n  orientation: \"auto\";\n}\n.noShadow {\n  box-shadow: none !important;\n  border: none !important;\n}\n#addUpdateSubjectdialog .field-wrapper {\n  margin-bottom: 10px;\n}\n.addMc {\n  font-size: 11px;\n  margin-left: 315px;\n  cursor: pointer;\n  color: #109CF1;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvY291cnNlLWNvdXJzZS1saXN0LXYyL2NvdXJzZS1hZGQvY291cnNlLWFkZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvY291cnNlLWNvdXJzZS1saXN0LXYyL2NvdXJzZS1jb3Vyc2UtbGlzdC12Mi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIv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LDJCQUEyQjtFQUMzQix1QkFBdUI7QUF1cEMzQjtBQXJwQ0E7RUFFUSxtQkFBbUI7QUF1cEMzQjtBQXBwQ0E7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBdXBDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvY3JlYXRlLWNvdXJzZS9jb3Vyc2UtY291cnNlLWxpc3QtdjIvY291cnNlLWFkZC9jb3Vyc2UtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi4vY291cnNlLWNvdXJzZS1saXN0LXYyLmNvbXBvbmVudC5zY3NzXCI7XG4uZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG4uZmllbGQtd3JhcHBlci5kYXRlUGlja2VyQm94OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcbiAgICB0b3A6IDdweDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgei1pbmRleDogMjA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG9yaWVudGF0aW9uOiBcImF1dG9cIjtcbn1cbi5ub1NoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuI2FkZFVwZGF0ZVN1YmplY3RkaWFsb2cge1xuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG4uYWRkTWMge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMzE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbip7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgYm9keXtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmNlbnRlckZsZXgge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC53aGl0ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICAuc2VsZWN0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gIH1cbiAgLmlucHV0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBoZWlnaHQ6MzVweDtcbiAgICB9XG4gICBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiAgICAgICBvdXRsaW5lOiBub25lO1xuICAgfVxuICAucGFnZV9oZWFkaW5nPnB7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmRpc3BsYXl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmhlYWRfcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG4gIC50YWJsZV9oZWFkaW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAvKiBwYWRkaW5nOiAxMHB4IDBweDsqL1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIFxuICAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIH1cbiAgXG4gIC50YWJsZV9ib2R5e1xuICAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICAudGFibGVfYm9keT5kaXZ7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjODA3QzdDO1xuICAgLyogcGFkZGluZzogNXB4IDBweDsqL1xuICAgICBtYXJnaW46IGF1dG87XG4gICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBcbiAgfVxuICBcbiAgXG4gIC5tcjEwe1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgfVxuICAudzI0MHtcbiAgIHdpZHRoOiAyNDBweDtcbiAgfVxuICAuZ3JvdXAxOHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnB0MTV7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuICAucHQyNXtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbntcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gcHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHNlbGVjdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDA3OUZGO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NTB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NDB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAubnVtYmVye1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjowcHggNHB4O1xuICB9XG4gIC5hY3RpdmVfY2lyY2xle1xuIFxuICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOjJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwNzlGRjtcbiAgfVxuICAubmV4dHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwNzlGRjtcbiAgXG4gIH1cbiAgLnc0NTB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICB9XG4gIC53MjAwe1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAud2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogODIlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFZGVkZWQ7XG4gIH1cbiAgLnc5OHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLm5hdi1pdGVtIC5uYXYtbGlua3tcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHhcbiAgfVxuICBcbiAgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgICAgbWFyZ2luOiAtMXJlbSAyLjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC53MTV7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmxpc3Q+bGl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA3cHggMHB4O1xuICAgIG1hcmdpbjogN3B4IDBweDtcbiAgfVxuICAubGlzdD5saT5hPnNwYW57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgLmxpc3Q+bGkgaW1ne1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfSBcbiAgLnJpZ2h0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAuYWRkX3N7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgfVxuICAuYWRkX3M+cHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC8qLm10MTJ7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfSovXG4gIC5pbWcxe1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6MTAwcHg7IFxuICB9XG4gIC5pbWdfY3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxpbmV7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkU4RTg7XG4gIH1cbiAgLnN1YmplY3Qge1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gIC5zdWJqZWN0IC50YWJsZV9oZWFke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjREZFNUYwO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLnN1YmplY3QgLnRhYmxlX2JvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREZFNUYwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLnN1YmplY3QgLnRhYmxlX2hlYWQ+ZGl2e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnN1YmplY3QgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM0MDU4Nzc7XG4gIH1cbiAgLnN1YmplY3QgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxkLC5zdWJqZWN0IC50YWJsZV9oZWFkPmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc3ViamVjdCAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDIpLC5zdWJqZWN0IC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMil7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuc3ViamVjdCAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDMpLC5zdWJqZWN0IC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMyl7XG4gICAgd2lkdGg6IDQwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAud2lkdGhfc3tcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gIH1cbiAgLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAvKiBtYXJnaW4tdG9wOiAxMHB4OyovXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gICAgICBncmlkLWdhcDogMC41ZW07XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHdpZHRoOiAwZW07XG4gICAgICBoZWlnaHQ6IDBlbTtcbiAgICB9XG4gIC5jaGVja2JveF9fY29udHJvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgd2lkdGg6IDAuNWVtO1xuICAgIGhlaWdodDogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4xZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNCQkIyQjI7XG4gIFxuICB9XG4gIC5jaGVja2JveF9faW5wdXQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNoZWNrYm94XCI7XG4gIH1cbiAgLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gICAgICBjb2xvcjogICMwMDg0ZjY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgIHN0cm9rZS13aWR0aDo0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4gMjVtcztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZFxuICAgKyAuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZFxuICAgKyAuY2hlY2tib3hfX2NvbnRyb2wgIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICB9XG4gIC5hZGRfc3ViamVjdHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKiAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiA4MHB4O1xuICAgICAgei1pbmRleDogMTAwOyovXG4gIH1cbiAgLmFkZF9zdWJqZWN0PnNwYW57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAxJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgfVxuICAud2lkMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wdDEwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLnB0MTAxe1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLm1vZGFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgfVxuICAgLnJpZ2h0e1xuICAgICBmbG9hdDogcmlnaHQ7XG4gICB9XG4ubW9kYWwtZGlhbG9nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0b3A6MTAlO1xufVxuLm1vZGFsLWhlYWRlcjpiZWZvcmV7XG4gIGRpc3BsYXk6bm9uZTtcbn1cbi5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjMkIyNjI2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5tYWluLXNoYWRvd3tcbmJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbi1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG5wYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuICAuZGV0YWlscyAudGFibGVfaGVhZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0RGRTVGMDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5kZXRhaWxzIC50YWJsZV9ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RGRTVGMDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5kZXRhaWxzIC50YWJsZV9oZWFkPmRpdntcbiAgICAgd2lkdGg6IDE5OXB4O1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuZGV0YWlscyAudGFibGVfYm9keT5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzMCUpIC8gNCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgbGluZS1oZWlnaHQ6IHVuc2V0O1xuICAgIC8vIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIC8vIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM0MDU4Nzc7XG4gIH1cbiAgLmRldGFpbHMgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxkLC5kZXRhaWxzIC50YWJsZV9oZWFkPmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDoyNzFweDtcbiAgIFxuICB9XG4gIC8qXG4gIC5kZXRhaWxzIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMiksLmRldGFpbHMgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgyKXtcbiAgICB3aWR0aDogNDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5kZXRhaWxzIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMyksLmRldGFpbHMgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgzKXtcbiAgICB3aWR0aDogNDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9Ki9cbiAgLm91dHRlcl9mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIFxuICB9XG4gIC5vdXR0ZXJfZmxleD5kaXZ7XG4gICAgd2lkdGg6IDIyLjUlO1xuICAgIG1hcmdpbjogMHB4IDEuMjUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIC5maXJzdGNoaWxke1xuICAgIGJhY2tncm91bmQ6ICNEQ0YyRkY7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5maXJzdGNoaWxkPmE+ZGl2e1xuICAgIHdpZHRoOiAxNTJweDtcbiAgICBoZWlnaHQ6IDE1MnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUvNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuMyk7XG4gIH1cbiAgLmZpcnN0Y2hpbGQ+YT5kaXYgcHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICB9XG4gIC5maXJzdGNoaWxkPmE+ZGl2IHA6Zmlyc3QtY2hpbGR7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5maXJzdGNoaWxkPmE+ZGl2IHNwYW46Zmlyc3QtY2hpbGR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZmlyc3RjaGlsZD5hPmRpdiA6bGFzdC1jaGlsZHtcbiAgbWFyZ2luLXRvcDogLTclO1xuICB9XG4gIC5uYW1lPmRpdjpmaXJzdC1jaGlsZHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgd2lkdGg6IDgwJTtcbiAgICAvLyBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxMDlDRjE7XG4gIH1cbiAgLm5hbWU+ZGl2e1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5uYW1lMXtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y0RUJFQjtcbiAgfVxuICAubmFtZT5kaXY6bGFzdC1jaGlsZHtcbiAgXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgXG4gIH1cbiAgLm5hbWUye1xuICAgIHdpZHRoOiA0MyU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzc2NzI3MjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBcbiAgfVxuICAudmFsdWUye1xuICAgICB3aWR0aDogNTUlO1xuICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMyMjI1Mjk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuYWRkX3N7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm1hc3Rlcl9je1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM4OThCOEQ7XG4gIH1cbiAgLm1jX25hbWV7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMHB4IDRweDtcbiAgICB0b3A6IC0xcHg7XG4gIH1cbiAgLndsaW5le1xuICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDotNHB4O1xuICB9XG4gIC5zdGR7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICAuc3BhY2VfZmxleHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcbiAgfVxuICAuYnNEYXRlcGlja2VyIDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnKSBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwIGNlbnRlciA7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gIH1cbiAgLmJzRGF0ZXBpY2tlciB7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgIC5ic0RhdGVwaWNrZXIgOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cbiAgICAuYnNEYXRlcGlja2VyIDpmb2N1czpiZWZvcmUsXG4gICAgLmJzRGF0ZXBpY2tlciA6dmFsaWQ6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICAgIC53aWQyMTd7XG4gICAgICB3aWR0aDoyNzFweDtcbiAgICB9XG4gICAgLndpZDE4MHtcbiAgICAgIHdpZHRoOjE4MHB4O1xuICAgIH1cbiAgIC53aWQxMzZ7XG4gICAgICB3aWR0aDo5MCU7XG4gICAgfVxuICAgIC53aWQ5e1xuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC00cHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweClcbiAgeyNzdWJqZWN0TW9kYWwgLm1vZGFsLWRpYWxvZywjY291cnNlTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICBcbiAgfVxuICB9XG4gICNjb3Vyc2VNb2RhbCAubW9kYWwtZGlhbG9nLCNzdWJqZWN0TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICBcbiAgfVxuICAubmF2PmxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubmF2LWxpbms6aG92ZXIsLm5hdi1saW5rLC5uYXYtbGluazpmb2N1c3tcbmJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG59XG5cbiAgLm5hdi1saW5re1xuICAgIGRpc3BsYXk6IGlubGluZTt9XG5cbiAgICAubmF2LWl0ZW0ge1xuICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDljZjEgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgfVxuICB9XG4gIC5wb2ludGVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbi5zdHVkZW50LWFzc2lnbi1wb3B1cCB7XG4gIC5wb3B1cC10aXRsZSB7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5maWx0ZXItc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAuZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIH1cbiAgICAgIC5idG4ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICB9XG4gIC50YWJsZS13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIHRoIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgICAgdGQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cblxuLmJsYWNrLWJne1xuYmFja2dyb3VuZDogcmdiYSgxMCwxMCwxMCwwLjMpO1xucG9zaXRpb246IGZpeGVkO1xudG9wOiAwcHg7XG5oZWlnaHQ6IDEwMCU7XG5sZWZ0OiAwcHg7XG56LWluZGV4OiAxO1xud2lkdGg6IDEwMCU7XG59XG5cbi5jb25maXJtYXRpb25fcG9wdXB7XG5wb3NpdGlvbjogZml4ZWQ7XG50b3A6IDM1JTtcbmxlZnQ6IDQwJTtcbndpZHRoOiAzMDBweDtcbmJhY2tncm91bmQ6IHdoaXRlO1xuaGVpZ2h0OiBhdXRvO1xucGFkZGluZzogMjBweDtcbnotaW5kZXg6IDk5OTk5OTk5O1xuYm9yZGVyLXJhZGl1czogNnB4O1xuYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjU1LDAsMCwwLjcpO1xuYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xufVxuLmNvbmZpcm1fdGl0bGV7XG5mb250LXNpemU6IDIwcHg7XG59XG4uY29uZmlybWF0aW9uX21zZ19ib3h7XG5tYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbmZpcm1hdGlvbl9wb3B1cHtcbi5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgLmZvcm0tY2hlY2tib3gge1xuICAgb3BhY2l0eTogMDtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGxlZnQ6IDA7XG4gICB0b3A6IDA7XG4gICB3aWR0aDogMjBweDtcbiAgIGhlaWdodDogMjBweDtcbiAgIHotaW5kZXg6IDE7XG4gICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuIH1cbn1cblxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xufVxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDphZnRlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbn1cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmJlZm9yZSB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsZWZ0OiA4cHg7XG4gICAgdG9wOiA5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGxlZnQ6IDJweDtcbiAgICB0b3A6IDVweDtcbn1cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWwge1xuICAgIGNvbG9yOiAjMDA4NGY2O1xufVxufVxuXG4uY29uZmlybWF0aW9uX2J1dHRvbl9jb250YWluZXJ7XG5tYXJnaW4tdG9wOiAyMHB4O1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuaW5wdXR7XG4gIHdpZHRoOiA4MHB4O1xufVxufVxuLnBvcHVwV3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjUpO1xuICB6LWluZGV4OiA5OTk7IC8vIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAucG9wdXAge1xuICAgIG1heC13aWR0aDogNjUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBsZWZ0OiAxMyU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMyU7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ucG9wdXAtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDsgLy8gaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggNXB4ICM5YzljOWM7XG4gIHRyYW5zaXRpb246IHVuc2V0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBzcGFuIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgaDIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBoNCB7XG4gICAgICBtYXJnaW46IDI1cHggMCAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4uY2xvc2VQb3B1cCB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBkaXNwbGF5OiBub25lO1xuICAmLmJvdHRvbVJpZ2h0IHtcbiAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAwO1xuICB9XG4gICYudG9wTGVmdCB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICB0b3A6IDFweDtcbiAgICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICAmLmJvdHRvbUxlZnQge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgYm90dG9tOiAycHg7XG4gICAgICB0b3A6IGF1dG87XG4gIH1cbiAgc3ZnIHtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgLmNscy0xIHtcbiAgICAgICAgICBzdHJva2U6ICNjMWMxYzE7XG4gICAgICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgICAuY2xzLTEge1xuICAgICAgICAgIHN0cm9rZTogJGNvbW1vbi1ibHVlO1xuICAgICAgfVxuICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmZhZGVJbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgLm5vcm1hbC1maWVsZCB7XG4gICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5tY19jbGFzc3tcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaENsYXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDU5JTtcbn1cbi5jb3Vyc2VfbmFtZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzEwOUNGMTtcbiAgLmxpbmUwIHtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG59XG4ucGJ0MTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-course-list-v2/course-add/course-add.component.ts":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-course-list-v2/course-add/course-add.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: CourseAddComponent */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseCourseListV2CourseAddCourseAddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseAddComponent", function () {
        return CourseAddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../utils/commonUtils */
      "./src/app/utils/commonUtils.ts");

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

      var CourseAddComponent =
      /** @class */
      function () {
        var CourseAddComponent = /*#__PURE__*/function () {
          function CourseAddComponent(_httpService, _auth, _msgService, routeParam, router) {
            var _this = this;

            _classCallCheck(this, CourseAddComponent);

            this._httpService = _httpService;
            this._auth = _auth;
            this._msgService = _msgService;
            this.routeParam = routeParam;
            this.router = router;
            this.academicList = [];
            this.subjectList = [];
            this.activeTeachers = [];
            this.mainArrayForTable = [];
            this.standardList = [];
            this.masterCourseData = [];
            this.schoolModel = false;
            this.isLangInstitue = false;
            this.selectedCourseID = '';
            this.subjectCodeCharLimit = 4;
            this.courseDetails = {
              course_name: '',
              start_Date: '',
              end_Date: '',
              academic_year_id: -1,
              master_course_id: '',
              standard_id: '',
              inst_id: sessionStorage.getItem('institute_id')
            };
            this.newSubjectDetails = {
              is_active: "Y",
              standard_id: "-1",
              subject_name: '',
              subject_code: '',
              is_optional: false,
              total_marks: '',
              passing_marks: ''
            };
            this.createMasterCourseModel = {
              "master_course_name": "",
              "institute_id": sessionStorage.getItem('institute_id'),
              "is_active": "Y",
              "standard_id": '-1',
              "standard_name": ''
            };
            this.routeParam.params.subscribe(function (params) {
              _this.selectedCourseID = params['id'];
            });
          }

          _createClass(CourseAddComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this2 = this;

              this.schoolModel = this._auth.schoolModel.getValue();
              this.examGradeFeature = sessionStorage.getItem('is_exam_grad_feature');

              this._auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this2.isLangInstitue = true;
                } else {
                  _this2.isLangInstitue = false;
                }
              });

              this.getActiveTeacherList(this.courseDetails.standard_id);
              !this.schoolModel ? this.getMasterCourseData() : '';
              this.getAllStandardSubjectList();
              this.getAcademicYearDetails();

              if (this.selectedCourseID) {
                this.getSelectedCourse(this.selectedCourseID);
              } else {
                this.courseDetails.academic_year_id = '-1';
                this.courseDetails.master_course = this.courseDetails.master_course_name;
              }

              if (sessionStorage.getItem('institute_id') == 102047 + "") this.subjectCodeCharLimit = 8;
            }
          }, {
            key: "getMasterCourseData",
            value: function getMasterCourseData() {
              var _this3 = this;

              this._auth.showLoader();

              this._httpService.getData('/api/v1/master-course/fetch-master-course/' + sessionStorage.getItem('institute_id') + '?is_active=Y').subscribe(function (res) {
                _this3._auth.hideLoader();

                _this3.masterCourseData = res.result;
              }, function (err) {
                _this3._auth.hideLoader();

                console.log(err);
              });
            }
          }, {
            key: "getSubjects",
            value: function getSubjects() {
              var _this4 = this;

              if (!this.schoolModel) {
                var stdObj = this.masterCourseData.filter(function (mc) {
                  return mc.master_course_id == _this4.courseDetails.master_course_id;
                });
                var masterCourseObj = stdObj[0];
                this.courseDetails.master_course_name = masterCourseObj.master_course_name;
                var sub_list = this.standardList.filter(function (sub) {
                  return sub.standard_id == masterCourseObj.standard_id;
                });

                if (sub_list && sub_list.length) {
                  this.subjectList = sub_list[0].subject_list;
                }

                this.newSubjectDetails.standard_id = masterCourseObj.standard_id;
                this.getActiveTeacherList(this.courseDetails.standard_id);
              } else {
                var _sub_list = this.standardList.filter(function (sub) {
                  return sub.standard_id == _this4.courseDetails.standard_id;
                });

                this.courseDetails.standard_name = _sub_list[0].standard_name;
                this.subjectList = _sub_list[0].subject_list;
                this.newSubjectDetails.standard_id = this.courseDetails.standard_id;
                this.getActiveTeacherList(this.courseDetails.standard_id);
              }

              this.manipulateNestedTableDataSource(this.courseDetails.subject_list);
            }
          }, {
            key: "getSelectedCourse",
            value: function getSelectedCourse(id) {
              var _this5 = this;

              var url = "/api/v1/courseMaster/fetch-course/".concat(sessionStorage.getItem('institute_id'), "/").concat(id);

              this._httpService.getData(url).subscribe(function (res) {
                _this5.courseDetails = res.result;
                _this5.courseDetails.start_Date = moment__WEBPACK_IMPORTED_MODULE_2__(_this5.courseDetails.start_date).format('YYYY-MM-DD');
                _this5.courseDetails.end_Date = moment__WEBPACK_IMPORTED_MODULE_2__(_this5.courseDetails.end_date).format('YYYY-MM-DD');
                _this5.courseDetails.allow_exam_grades = _this5.courseDetails.is_exam_grad_feature == '1' ? true : false; // this.subjectList = res.result.subject_list;
                // this.getMetaDataForTable(this.courseDetails);
                // this.dummyArray.push("Selected Course");

                if (_this5.selectedCourseID) {
                  setTimeout(function () {
                    _this5.getSubjects();
                  }, 2000);
                } // this.manipulateNestedTableDataSource(this.courseDetails.subject_list);

              }, function (error) {
                //console.log(error);
                _this5._msgService.showErrorMessage('error', '', error.error.message);
              });
            }
          }, {
            key: "manipulateNestedTableDataSource",
            value: function manipulateNestedTableDataSource(data) {
              var test = data;
              var nestedTableDataSource = this.keepCloning(this.subjectList);

              for (var i = 0; i < test.length; i++) {
                for (var y = 0; y < nestedTableDataSource.length; y++) {
                  if (test[i].subject_id == nestedTableDataSource[y].subject_id) {
                    nestedTableDataSource[y].uiSelected = true;
                    nestedTableDataSource[y].selected_teacher = String(test[i].teacher_id);
                    nestedTableDataSource[y].isAssigned = test[i].isAssigned;
                    nestedTableDataSource[y].otherDetails = test[i];
                  }
                }
              }

              this.subjectList = nestedTableDataSource;
            }
          }, {
            key: "getAcademicYearDetails",
            value: function getAcademicYearDetails() {
              var _this6 = this;

              this.academicList = [];

              this._httpService.getData('/api/v1/academicYear/all/' + sessionStorage.getItem('institute_id')).subscribe(function (res) {
                _this6.academicList = res;
              }, function (err) {});
            }
          }, {
            key: "getActiveTeacherList",
            value: function getActiveTeacherList(standard_id) {
              var _this7 = this;

              this._auth.showLoader();

              this._httpService.getData('/api/v1/teachers/fetch-teacher/' + sessionStorage.getItem('institute_id') + "?standard_id=" + standard_id + "&subject_id=&is_active=Y&is_std_sub_required=true").subscribe(function (res) {
                _this7._auth.hideLoader();

                _this7.activeTeachers = res.result;

                var _loop = function _loop(i) {
                  _this7.subjectList[i].allowedTeacher = [];
                  var is_teacher_exit = true;

                  if (!_this7.selectedCourseID) {
                    _this7.activeTeachers.filter(function (teacher) {
                      if (teacher.standard_subject_list && teacher.standard_subject_list.length) {
                        is_teacher_exit = false;

                        _this7.subjectList[i].allowedTeacher.push(teacher);

                        var is_more_option_exit = true;

                        var _iterator = _createForOfIteratorHelper(_this7.subjectList[i].allowedTeacher),
                            _step;

                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var data = _step.value;

                            if (data.teacher_id == 'more') {
                              is_more_option_exit = false;
                              break;
                            }
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }

                        if (is_more_option_exit) {
                          _this7.subjectList[i].allowedTeacher.push({
                            "is_active": "Y",
                            "standard_subject_list": [],
                            "teacher_email": null,
                            "teacher_id": "more",
                            "teacher_name": "Click Here to view more faculties",
                            "teacher_phone": "7503959545"
                          });
                        }
                      }
                    });

                    if (is_teacher_exit) {
                      _this7.subjectList[i].allowedTeacher.push({
                        "is_active": "Y",
                        "standard_subject_list": [],
                        "teacher_email": null,
                        "teacher_id": "more",
                        "teacher_name": "Click Here to view more faculties",
                        "teacher_phone": "7503959545"
                      });
                    }
                  } else {
                    _this7.subjectList[i].allowedTeacher = _this7.activeTeachers;
                  }
                };

                for (var i = 0; i < _this7.subjectList.length; i++) {
                  _loop(i);
                }
              }, function (err) {
                _this7._auth.hideLoader();

                console.log(err);
              });
            }
          }, {
            key: "setStartAdEndDate",
            value: function setStartAdEndDate(row) {
              var _iterator2 = _createForOfIteratorHelper(this.academicList),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var acad = _step2.value;

                  if (row == null) {
                    if (acad.default_academic_year == 1) {
                      // this.defaultAY=acad.inst_acad_year_id;
                      // this.defaultAYStartDate=moment(acad.start_date).format('YYYY-MM-DD');
                      // this.defaultAYEndDate=moment(acad.end_date).format('YYYY-MM-DD');
                      this.courseDetails.academic_year_id = acad.inst_acad_year_id;
                      this.courseDetails.start_Date = moment__WEBPACK_IMPORTED_MODULE_2__(acad.start_date).format('YYYY-MM-DD');
                      this.courseDetails.end_Date = moment__WEBPACK_IMPORTED_MODULE_2__(acad.end_date).format('YYYY-MM-DD');
                      break;
                    }
                  } else if (acad.inst_acad_year_id == row.academic_year_id) {
                    row.start_Date = moment__WEBPACK_IMPORTED_MODULE_2__(acad.start_date).format('YYYY-MM-DD');
                    row.end_Date = moment__WEBPACK_IMPORTED_MODULE_2__(acad.end_date).format('YYYY-MM-DD');
                    break;
                  } else if (row.academic_year_id == '-1') {
                    row.start_Date = '';
                    row.end_Date = '';
                    break;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }, {
            key: "checkMoreOption",
            value: function checkMoreOption(obj) {
              console.log(obj);
              obj.selected_teacher == 'more' ? obj.allowedTeacher = this.activeTeachers : '';
            }
          }, {
            key: "validateAllFields",
            value: function validateAllFields(data) {
              console.log(data);
              var selected = 0;

              for (var i = 0; i < data.length; i++) {
                if (data[i].uiSelected == true) {
                  selected = +1;

                  if (data[i].selected_teacher == "" || data[i].selected_teacher == '-1' || data[i].selected_teacher == 'more') {
                    this._msgService.showErrorMessage('error', '', 'Please specify teacher of subject.');

                    return false;
                  }
                }
              }

              if (selected == 0) {
                this._msgService.showErrorMessage('error', '', 'You have not selected any subject.');

                return false;
              }
            }
          }, {
            key: "addDataToTable",
            value: function addDataToTable() {
              this.mainArrayForTable = [];

              if (this.courseDetails.course_name != "" && this.courseDetails.start_Date != "" && this.courseDetails.start_Date != null && this.courseDetails.end_Date != '' && this.courseDetails.end_Date != null) {
                if (this.courseDetails.start_Date > this.courseDetails.end_Date) {
                  this._msgService.showErrorMessage('error', '', 'Please enter valid dates');

                  return;
                } else {
                  var validateData = this.validateAllFields(this.subjectList);

                  if (validateData == false) {
                    return;
                  }

                  if (this.courseDetails.academic_year_id == '-1') {
                    this._msgService.showErrorMessage('error', '', 'Please Select Academic Year!');

                    return;
                  }

                  var obj = {};
                  obj.course_name = this.courseDetails.course_name;
                  obj.start_Date = moment__WEBPACK_IMPORTED_MODULE_2__(this.courseDetails.start_Date).format("YYYY-MM-DD");
                  obj.end_Date = moment__WEBPACK_IMPORTED_MODULE_2__(this.courseDetails.end_Date).format("YYYY-MM-DD");
                  obj.academic_year_id = this.courseDetails.academic_year_id;
                  obj.allow_exam_grades = this.courseDetails.allow_exam_grades;
                  obj.subjectListArray = this.keepCloning(this.subjectList);
                  this.mainArrayForTable.push(obj);
                  !this.selectedCourseID ? this.submitCourseDetails() : this.updateEditedDetails();
                }
              } else {
                this._msgService.showErrorMessage('error', '', "You haven't filled mandatory details.");
              }
            }
          }, {
            key: "keepCloning",
            value: function keepCloning(objectpassed) {
              if (objectpassed === null || typeof objectpassed !== 'object') {
                return objectpassed;
              }

              var temporaryStorage = objectpassed.constructor();

              for (var key in objectpassed) {
                temporaryStorage[key] = this.keepCloning(objectpassed[key]);
              }

              return temporaryStorage;
            }
          }, {
            key: "submitCourseDetails",
            value: function submitCourseDetails() {
              var _this8 = this;

              var dataToSend = this.constructJsonToSend();

              if (dataToSend == false) {
                return;
              }

              ;

              if (!this._auth.isRippleLoad.getValue()) {
                this._auth.showLoader();

                this._httpService.postData('/api/v1/courseMaster/create-course', dataToSend).subscribe(function (res) {
                  var msg_text = _this8.schoolModel ? 'Section created successfully' : 'Course created successfully';

                  _this8._auth.hideLoader();

                  _this8._msgService.showErrorMessage('success', '', msg_text);

                  _this8.router.navigateByUrl('/view/course/create/courselist');
                }, function (error) {
                  _this8._auth.hideLoader();

                  _this8._msgService.showErrorMessage('error', '', error.error.message);
                });
              }
            }
          }, {
            key: "checkIfAnySubjectSelected",
            value: function checkIfAnySubjectSelected(data) {
              var arr = [];

              for (var i = 0; i < data.length; i++) {
                if (data[i].uiSelected == true) {
                  arr.push(data[i]);
                }
              }

              return arr;
            }
          }, {
            key: "constructJsonToSend",
            value: function constructJsonToSend() {
              var obj = {}; // if (this.schoolModel) {
              //   for (let i = 0; i < this.standardNameList.length; i++) {
              //     if (this.standardNameList[i].standard_id == this.newCourseAdd.standard_id) {
              //       this.newCourseAdd.master_course_name = this.standardNameList[i].standard_name;
              //       break;
              //     }
              //   }
              // }

              if (this.schoolModel) {
                obj.standard_id = this.courseDetails.standard_id;
              } else {
                obj.master_course_id = this.courseDetails.master_course_id;
              }

              obj.inst_id = sessionStorage.getItem('institute_id'); // obj.coursesList = [];

              for (var i = 0; i < this.mainArrayForTable.length; i++) {
                console.log(this.mainArrayForTable);
                var test = {};
                obj.academic_year_id = this.mainArrayForTable[i].academic_year_id;
                obj.course_name = this.mainArrayForTable[i].course_name;

                if (this.mainArrayForTable[i].start_Date != "" && this.mainArrayForTable[i].start_Date != null && this.mainArrayForTable[i].start_Date != "Invalid date") {
                  obj.start_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.mainArrayForTable[i].start_Date).format('YYYY-MM-DD');
                } else {
                  this._msgService.showErrorMessage('error', '', 'Please enter start date');

                  return false;
                }

                if (this.mainArrayForTable[i].end_Date != "" && this.mainArrayForTable[i].end_Date != null && this.mainArrayForTable[i].end_Date != "Invalid date") {
                  obj.end_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.mainArrayForTable[i].end_Date).format('YYYY-MM-DD');
                } else {
                  this._msgService.showErrorMessage('error', '', 'Please enter end date');

                  return false;
                }

                if (this.mainArrayForTable[i].allow_exam_grades == true) {
                  obj.is_exam_grad_feature = 1;
                } else {
                  obj.is_exam_grad_feature = 0;
                }

                obj.subject_list = [];
                var selectedSubjectRow = this.checkIfAnySubjectSelected(this.mainArrayForTable[i].subjectListArray);
                console.log(selectedSubjectRow);

                if (selectedSubjectRow.length == 0) {
                  this._msgService.showErrorMessage('error', '', 'You have not selected any subject');

                  return false;
                }

                for (var y = 0; y < selectedSubjectRow.length; y++) {
                  var trp = {};

                  if (this.schoolModel) {
                    trp.batch_name = this.courseDetails.standard_name + '-' + this.mainArrayForTable[i].course_name + '-' + selectedSubjectRow[y].subject_name;
                  } else {
                    trp.batch_name = this.courseDetails.master_course_name + '-' + this.mainArrayForTable[i].course_name + '-' + selectedSubjectRow[y].subject_name;
                  }

                  if (this.selectedCourseID) {
                    if (selectedSubjectRow[y].hasOwnProperty('otherDetails')) {
                      trp.batch_id = selectedSubjectRow[y].otherDetails.batch_id.toString();
                    } else {
                      trp.batch_id = '0';
                    }
                  }

                  trp.subject_id = selectedSubjectRow[y].subject_id.toString();

                  if (selectedSubjectRow[y].selected_teacher == "" || selectedSubjectRow[y].selected_teacher == null || selectedSubjectRow[y].selected_teacher == "-1") {
                    this._msgService.showErrorMessage('error', '', 'Please enter teacher for the subject.');

                    return false;
                  } else {
                    trp.teacher_id = selectedSubjectRow[y].selected_teacher.toString();
                  }

                  obj.subject_list.push(trp);
                }
              }

              return obj;
            }
          }, {
            key: "updateEditedDetails",
            value: function updateEditedDetails() {
              var _this9 = this;

              var dataToSend = this.constructJsonToSend();

              if (dataToSend == false) {
                return;
              } // if (this.jsonVar.callApi) {
              // this.jsonVar.callApi = false;


              this._auth.showLoader();

              var url = "/api/v1/courseMaster/update-course/".concat(this.selectedCourseID);

              this._httpService.putData(url, dataToSend).subscribe(function (res) {
                _this9._auth.hideLoader();

                _this9.router.navigateByUrl('/view/course/create/courselist');

                var msg = _this9.schoolModel ? 'Section' : 'Course';

                _this9._msgService.showErrorMessage('success', '', msg + ' updated successfully.');
              }, function (err) {
                _this9._auth.hideLoader(); //console.log(err);


                _this9._msgService.showErrorMessage('error', '', err.error.message);
              }); // }

            }
          }, {
            key: "validateUserInput",
            value: function validateUserInput() {
              if (this.newSubjectDetails.standard_id == '-1') {
                this._msgService.showErrorMessage('error', '', "Please select standard!");

                return false;
              }

              if (_utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(this.newSubjectDetails.subject_name)) {
                this._msgService.showErrorMessage('error', '', "Please enter subject name!");

                return false;
              }

              if (!this.isLangInstitue && _utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(this.newSubjectDetails.subject_code)) {
                this._msgService.showErrorMessage('error', '', "Please enter subject code!");

                return false;
              }

              return this.validateSchoolModelField();
            }
          }, {
            key: "validateSchoolModelField",
            value: function validateSchoolModelField() {
              if (this.schoolModel) {
                if (Number(this.newSubjectDetails.total_marks) <= 0) {
                  this._msgService.showErrorMessage('error', '', 'Please enter total marks!');

                  return false;
                }

                if (Number(this.newSubjectDetails.passing_marks <= 0)) {
                  var data = {
                    type: "error",
                    title: "",
                    body: ""
                  };

                  this._msgService.showErrorMessage('error', '', "Total marks can't be less than passing marks!");

                  return false;
                }

                if (Number(this.newSubjectDetails.total_marks) < Number(this.newSubjectDetails.passing_marks)) {
                  this._msgService.showErrorMessage('error', '', "Total marks can't be less than passing marks!");

                  return false;
                }
              }

              return true;
            }
          }, {
            key: "successMsg",
            value: function successMsg() {
              var msg = "";

              if (this.isLangInstitue) {
                msg = "Course created successfully!";
              } else {
                msg = "Subject created successfully";
              }

              this._msgService.showErrorMessage('success', '', msg);

              $('#addUpdateSubjectdialog').modal('hide'); // this.getAllSubjectList();

              this.clearSubData();
            }
          }, {
            key: "clearSubData",
            value: function clearSubData() {
              this.newSubjectDetails = {
                is_active: "Y",
                standard_id: "-1",
                subject_name: '',
                subject_code: '',
                is_optional: false,
                total_marks: '',
                passing_marks: ''
              };
            }
          }, {
            key: "preparedSubjectRequestPayload",
            value: function preparedSubjectRequestPayload() {
              var obj = {
                is_active: this.newSubjectDetails.is_active == true || this.newSubjectDetails.is_active == "Y" ? "Y" : "N",
                standard_id: this.newSubjectDetails.standard_id,
                subject_name: this.newSubjectDetails.subject_name
              };

              if (!this.isLangInstitue) {
                obj.subject_code = this.newSubjectDetails.subject_code.toUpperCase();
              }

              if (this.schoolModel) {
                obj.is_optional = this.newSubjectDetails.is_optional ? 'Y' : 'N';
                obj.final_marks = this.newSubjectDetails.total_marks;
                obj.passing_marks = this.newSubjectDetails.passing_marks;
              }

              return obj;
            }
          }, {
            key: "addNewSubject",
            value: function addNewSubject() {
              var _this10 = this;

              if (this.validateUserInput()) {
                this._httpService.postData('/api/v1/subjects', this.preparedSubjectRequestPayload()).subscribe(function (res) {
                  _this10.successMsg();

                  _this10.standardList = [];

                  _this10.getAllStandardSubjectList();

                  if (_this10.selectedCourseID) {
                    _this10.getSelectedCourse(_this10.selectedCourseID);
                  }
                }, function (err) {
                  _this10._msgService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "getAllStandardSubjectList",
            value: function getAllStandardSubjectList() {
              var _this11 = this;

              if (!this.standardList.length) {
                var url = "/api/v1/standards/standard-subject-list/" + sessionStorage.getItem('institute_id') + '?is_active=Y&is_subject_required=true';

                this._httpService.getData(url).subscribe(function (res) {
                  _this11.standardList = res.result;

                  if (_this11.courseDetails.standard_id != '') {
                    var sub_list = _this11.standardList.filter(function (sub) {
                      return sub.standard_id == _this11.courseDetails.standard_id;
                    });

                    _this11.subjectList = sub_list[0].subject_list;
                    _this11.newSubjectDetails.standard_id = _this11.courseDetails.standard_id;

                    _this11.manipulateNestedTableDataSource(_this11.courseDetails.subject_list);

                    _this11.getActiveTeacherList(_this11.courseDetails.standard_id);
                  }
                }, function (error) {
                  _this11._msgService.showErrorMessage('error', '', error.error.message);
                });
              }
            }
          }, {
            key: "saveMasterC",
            value: function saveMasterC() {
              // this.editMasterC ? this.updateMasterCourse() : this.createMasterCourse();
              this.createMasterCourse();
            }
          }, {
            key: "checkMasterCourseVal",
            value: function checkMasterCourseVal() {
              if (_utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(this.createMasterCourseModel.master_course_name) || this.createMasterCourseModel.standard_id == '-1') {
                this._msgService.showErrorMessage('error', '', 'Please fill all mandatory fields');

                return false;
              }

              return true;
            }
          }, {
            key: "createMasterCourse",
            value: function createMasterCourse() {
              var _this12 = this;

              if (this.checkMasterCourseVal()) {
                this._auth.showLoader();

                this._httpService.postData('/api/v1/master-course/create', this.createMasterCourseModel).subscribe(function (res) {
                  _this12._auth.hideLoader();

                  _this12._msgService.showErrorMessage('success', '', 'Master course added successfully');

                  _this12.getMasterCourseData();

                  _this12.clearMasterCourse();

                  $('#courseModal').modal('hide');
                }, function (err) {
                  _this12._auth.hideLoader();

                  _this12._msgService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "clearMasterCourse",
            value: function clearMasterCourse() {
              // this.editMasterC = false;
              this.createMasterCourseModel = {
                "master_course_name": "",
                "institute_id": sessionStorage.getItem('institute_id'),
                "is_active": "Y",
                "standard_id": '-1',
                "standard_name": ''
              };
            }
          }, {
            key: "deleteSubjectRow",
            value: function deleteSubjectRow(row, mainTableIndex) {
              var _this13 = this;

              var count = this.subjectList.filter(function (course) {
                return course.uiSelected;
              });
              var msg = "Are you sure you want to delete?";

              if (count.length == 1) {
                msg = "Are you sure you want to delete? Course will be deleted as you are deleting last subject under this course";
              }

              if (confirm(msg)) {
                if (row.hasOwnProperty('otherDetails')) {
                  this._auth.showLoader();

                  this._httpService.putData("/api/v1/courseMaster/deleteSubject/" + row.otherDetails.batch_id, '').subscribe(function (data) {
                    row.isAssigned = 'Y';

                    _this13._auth.hideLoader();

                    _this13.subjectList[mainTableIndex].uiSelected = false;
                    delete _this13.subjectList[mainTableIndex].otherDetails;
                    _this13.subjectList[mainTableIndex].selected_teacher = '-1';

                    _this13.checkIfAnySelectedRowExist(_this13.subjectList, mainTableIndex);

                    _this13._msgService.showErrorMessage('success', '', 'Subject removed from course');
                  }, function (error) {
                    _this13._auth.hideLoader();

                    _this13._msgService.showErrorMessage('error', '', error.error.message);
                  });
                }
              }
            }
          }, {
            key: "checkIfAnySelectedRowExist",
            value: function checkIfAnySelectedRowExist(data, mainTableIndex) {
              var uiSelctedData = false;

              for (var i = 0; i < data.length; i++) {
                if (data[i].uiSelected) {
                  uiSelctedData = true;
                  break;
                }
              }

              if (uiSelctedData == false) {
                this.subjectList.splice(mainTableIndex, 1);
              }
            }
          }]);

          return CourseAddComponent;
        }();

        CourseAddComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        };

        CourseAddComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-course-add',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./course-add.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-course-list-v2/course-add/course-add.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./course-add.component.scss */
          "./src/app/components/course-module/create-course/course-course-list-v2/course-add/course-add.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], CourseAddComponent);
        return CourseAddComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2-routing.module.ts":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2-routing.module.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: CourseCourseListV2RoutingModule */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseCourseListV2CourseCourseListV2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseCourseListV2RoutingModule", function () {
        return CourseCourseListV2RoutingModule;
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


      var _course_course_list_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./course-course-list-v2.component */
      "./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.component.ts");
      /* harmony import */


      var _course_add_course_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./course-add/course-add.component */
      "./src/app/components/course-module/create-course/course-course-list-v2/course-add/course-add.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [];

      var CourseCourseListV2RoutingModule =
      /** @class */
      function () {
        var CourseCourseListV2RoutingModule = function CourseCourseListV2RoutingModule() {
          _classCallCheck(this, CourseCourseListV2RoutingModule);
        };

        CourseCourseListV2RoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _course_course_list_v2_component__WEBPACK_IMPORTED_MODULE_2__["CourseCourseListV2Component"],
            pathMatch: 'prefix'
          }, {
            path: 'add',
            component: _course_add_course_add_component__WEBPACK_IMPORTED_MODULE_3__["CourseAddComponent"],
            pathMatch: 'prefix'
          }, {
            path: 'edit/:id',
            component: _course_add_course_add_component__WEBPACK_IMPORTED_MODULE_3__["CourseAddComponent"],
            pathMatch: 'prefix'
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], CourseCourseListV2RoutingModule);
        return CourseCourseListV2RoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.component.scss":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.component.scss ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseCourseListV2CourseCourseListV2ComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n* {\n  margin: 0px;\n}\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n.centerFlex {\n  justify-content: center;\n}\n.flex {\n  display: flex;\n}\n.blue_button {\n  background-color: #109CF1;\n  color: #fff;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 33px;\n  cursor: pointer;\n}\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\n.input {\n  padding: 7px 20px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.flex {\n  display: flex;\n}\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n}\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n.table_body > div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 35px;\n}\n.mr10 {\n  margin-right: 10px;\n}\n.w240 {\n  width: 240px;\n}\n.group18 {\n  width: 18px;\n  height: auto;\n}\n.pt15 {\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n.pt25 {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.bottom_pagignation {\n  padding: 10px 0px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n.w450 {\n  width: 450px;\n}\n.w200 {\n  width: 200px;\n}\n.white {\n  background-color: #fff;\n  width: 82%;\n  margin: 0px auto;\n  border-top: 3px solid #Ededed;\n}\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n.nav-item .nav-link {\n  font-weight: 400;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.nav-item .nav-link.active {\n  font-weight: 600;\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 2.5rem;\n  margin-left: 0rem;\n}\n.flex {\n  display: flex;\n}\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n.list > li img {\n  padding: 0px 10px;\n}\n.right {\n  float: right;\n}\n.add_s {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n.add_s > p {\n  margin-bottom: 10px;\n}\n/*.mt12{\n    margin-top: 12px;\n  }*/\n.img1 {\n  width: 90%;\n  height: auto;\n  margin-top: 100px;\n}\n.img_c {\n  text-align: center;\n}\n.line {\n  padding-top: 15px;\n  border-bottom: 1px solid #EBE8E8;\n}\n.subject {\n  height: 50vh;\n  overflow-y: auto;\n}\n.subject .table_head {\n  display: flex;\n  margin-top: 15px;\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.subject .table_body {\n  display: flex;\n  border: 1px solid #DFE5F0;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.subject .table_head > div {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 35px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n.subject .table_body > div {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 46px;\n  letter-spacing: 0.01em;\n  color: #405877;\n}\n.subject .table_body > div:first-child, .subject .table_head > div:first-child {\n  width: 15%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.subject .table_body > div:nth-child(2), .subject .table_head > div:nth-child(2) {\n  width: 45%;\n  text-align: left;\n  padding-left: 10px;\n}\n.subject .table_body > div:nth-child(3), .subject .table_head > div:nth-child(3) {\n  width: 40%;\n  text-align: left;\n  padding-left: 10px;\n}\n.width_s {\n  width: 50%;\n  padding: 5px 0px;\n}\n.checkbox {\n  margin-right: 10px;\n  /* margin-top: 10px;*/\n  display: inline;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n}\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 2px solid #BBB2B2;\n}\n.checkbox__input {\n  display: inline;\n  grid-template-areas: \"checkbox\";\n}\n.checkbox__control svg {\n  color: #0084f6;\n  font-weight: 600;\n  stroke-width: 4;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  transform-origin: bottom left;\n}\n.checkbox__input input:checked\n+ .checkbox__control svg {\n  transform: scale(1);\n}\n.checkbox__input input:checked\n+ .checkbox__control {\n  border: 2px solid #0084f6;\n}\n.add_subject {\n  padding: 10px 0px;\n  background-color: #fff;\n  /*  position: fixed;\n      bottom: 80px;\n      z-index: 100;*/\n}\n.add_subject > span {\n  position: fixed;\n  right: 1%;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n.wid100 {\n  width: 100%;\n}\n.pt10 {\n  margin-top: 10px;\n}\n.pt101 {\n  margin-top: 20px;\n}\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.right {\n  float: right;\n}\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n.modal-header:before {\n  display: none;\n}\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n  float: left;\n}\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 8px;\n}\n.details .table_head {\n  display: flex;\n  margin-top: 15px;\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.details .table_body {\n  display: flex;\n  border: 1px solid #DFE5F0;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.details .table_head > div {\n  width: 199px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 35px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n.details .table_body > div {\n  width: calc((100% - 30%) / 4);\n  text-align: center;\n  font-weight: 400;\n  font-size: 13px;\n  margin: unset;\n  line-height: unset;\n  color: #405877;\n}\n.details .table_body > div:first-child, .details .table_head > div:first-child {\n  width: 271px;\n}\n/*\n  .details .table_body>div:nth-child(2),.details .table_head>div:nth-child(2){\n    width: 40%;\n    text-align: left;\n    padding-left: 10px;\n  }\n  .details .table_body>div:nth-child(3),.details .table_head>div:nth-child(3){\n    width: 40%;\n    text-align: left;\n    padding-left: 10px;\n  }*/\n.outter_flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n.outter_flex > div {\n  width: 22.5%;\n  margin: 0px 1.25%;\n  border: 1px solid #E8E8E8;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  margin-bottom: 30px;\n}\n.firstchild {\n  background: #DCF2FF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.firstchild > a > div {\n  width: 152px;\n  height: 152px;\n  cursor: pointer;\n  border-radius: 50%/50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 254, 254, 0.3);\n}\n.firstchild > a > div p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n.firstchild > a > div p:first-child {\n  font-size: 30px;\n}\n.firstchild > a > div span:first-child {\n  text-align: center;\n}\n.firstchild > a > div :last-child {\n  margin-top: -7%;\n}\n.name > div:first-child {\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n  padding-left: 10px;\n  word-break: break-all;\n  width: 80%;\n}\n.name > div {\n  line-height: 50px;\n}\n.name1 {\n  width: 90%;\n  margin: 0px auto;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #F4EBEB;\n}\n.name > div:last-child {\n  padding-right: 10px;\n}\n.name2 {\n  width: 43%;\n  padding-left: 10px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #767272;\n  margin-bottom: 15px;\n}\n.value2 {\n  width: 55%;\n  padding-right: 10px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #222529;\n  margin-bottom: 15px;\n}\n.add_s {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n  cursor: pointer;\n}\n.master_c {\n  font-weight: 400;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #898B8D;\n}\n.mc_name {\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n  position: relative;\n  padding: 0px 4px;\n  top: -1px;\n}\n.wline {\n  padding: 0px 8px;\n  position: relative;\n  top: -4px;\n}\n.std {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n.space_flex {\n  padding-left: 12%;\n}\n.bsDatepicker ::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  background-position: 10 center;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n.bsDatepicker {\n  color: #787A7D;\n  cursor: pointer;\n}\ninput:focus {\n  outline: none;\n}\nbutton:focus {\n  outline: none;\n}\n.bsDatepicker :before {\n  content: attr(placeholder) !important;\n  padding-right: 5px;\n}\n.bsDatepicker :focus:before,\n.bsDatepicker :valid:before {\n  content: \"\";\n}\n.wid217 {\n  width: 271px;\n}\n.wid180 {\n  width: 180px;\n}\n.wid136 {\n  width: 90%;\n}\n.wid9 {\n  padding-left: 0px;\n  position: relative;\n  top: -4px;\n}\n@media (min-width: 576px) {\n  #subjectModal .modal-dialog, #courseModal .modal-dialog {\n    max-width: 300px;\n  }\n}\n#courseModal .modal-dialog, #subjectModal .modal-dialog {\n  max-width: 300px;\n}\n.nav > li {\n  display: inline;\n}\n.nav-link:hover, .nav-link, .nav-link:focus {\n  background-color: transparent;\n}\n.nav-link {\n  display: inline;\n}\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n.pointer {\n  cursor: pointer;\n}\n.student-assign-popup .popup-title {\n  margin-left: 0px;\n}\n.student-assign-popup .filter-section {\n  padding: 10px 0px;\n  margin: 5px 0;\n  background: #efefef;\n}\n.student-assign-popup .filter-section .radio-button {\n  margin-top: 10px;\n  display: inline-flex;\n}\n.student-assign-popup .filter-section .radio-button .field-radio-wrapper {\n  margin-right: 5px;\n}\n.student-assign-popup .filter-section .field-wrapper {\n  padding-top: 0;\n}\n.student-assign-popup .filter-section .btn {\n  margin-left: 0;\n}\n.student-assign-popup .table-wrapper {\n  margin-top: 15px;\n  max-height: 320px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.student-assign-popup .table-wrapper th {\n  text-align: left;\n}\n.student-assign-popup .table-wrapper td {\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n}\n.student-assign-popup .table-wrapper td .field-wrapper .form-ctrl {\n  padding: 5px;\n  width: 90px;\n}\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n}\n.confirmation_popup {\n  position: fixed;\n  top: 35%;\n  left: 40%;\n  width: 300px;\n  background: white;\n  height: auto;\n  padding: 20px;\n  z-index: 99999999;\n  border-radius: 6px;\n  border-top: 4px solid rgba(255, 0, 0, 0.7);\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n}\n.confirm_title {\n  font-size: 20px;\n}\n.confirmation_msg_box {\n  margin-top: 15px;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n  border: 2px solid #0084f6;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 14px;\n  display: inline-block;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.confirmation_button_container {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n.confirmation_button_container input {\n  width: 80px;\n}\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 999;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 65%;\n  width: 100%;\n  height: auto;\n  left: 13%;\n  right: 0;\n  top: 13%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper span {\n  font-weight: 300;\n  display: inline-block;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  height: 35px;\n  font-size: 14px;\n}\n.mc_class {\n  width: 100% !important;\n  border: none !important;\n  box-shadow: none !important;\n  font-weight: 600;\n  margin-bottom: 15px !important;\n  align-items: center;\n}\n.searchClass {\n  display: flex;\n  justify-content: flex-end;\n  width: 59%;\n}\n.course_name {\n  align-items: center;\n  min-height: 50px;\n  border-left: 4px solid #109CF1;\n}\n.course_name .line0 {\n  line-height: normal;\n}\n.pbt10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvY291cnNlLWNvdXJzZS1saXN0LXYyL2NvdXJzZS1jb3Vyc2UtbGlzdC12Mi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNs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LFFBQVE7QUFvTmQ7QUFwT0E7RUFtQk0sT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWTtBQXFObEI7QUEzT0E7RUF5Qk0sT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztBQXNOZjtBQWxQQTtFQStCTSxXQUFXO0FBdU5qQjtBQXRQQTtFQWlDVSxlQUFlO0VBQ2YsaUJBQWlCO0FBeU4zQjtBQTNQQTtFQXVDVSxlRGg0Qlc7QUN3bENyQjtBQW5OQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBc05yQjtBQXBOQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUF1TnJCO0FBck5BO0VBRU0saUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQXVOckI7QUFwTkE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQXVOckI7QUFyTkE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFVBQVU7QUF3Tlo7QUF0TkE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQXlOaEM7QUE1TkE7RUFLSSxtQkFBbUI7QUEyTnZCO0FBeE5BO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQTJOdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvY3JlYXRlLWNvdXJzZS9jb3Vyc2UtY291cnNlLWxpc3QtdjIvY291cnNlLWNvdXJzZS1saXN0LXYyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbip7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgYm9keXtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmNlbnRlckZsZXgge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC53aGl0ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICAuc2VsZWN0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gIH1cbiAgLmlucHV0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBoZWlnaHQ6MzVweDtcbiAgICB9XG4gICBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiAgICAgICBvdXRsaW5lOiBub25lO1xuICAgfVxuICAucGFnZV9oZWFkaW5nPnB7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmRpc3BsYXl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmhlYWRfcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG4gIC50YWJsZV9oZWFkaW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAvKiBwYWRkaW5nOiAxMHB4IDBweDsqL1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIFxuICAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIH1cbiAgXG4gIC50YWJsZV9ib2R5e1xuICAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICAudGFibGVfYm9keT5kaXZ7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjODA3QzdDO1xuICAgLyogcGFkZGluZzogNXB4IDBweDsqL1xuICAgICBtYXJnaW46IGF1dG87XG4gICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBcbiAgfVxuICBcbiAgXG4gIC5tcjEwe1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgfVxuICAudzI0MHtcbiAgIHdpZHRoOiAyNDBweDtcbiAgfVxuICAuZ3JvdXAxOHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnB0MTV7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuICAucHQyNXtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbntcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gcHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHNlbGVjdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDA3OUZGO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NTB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NDB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAubnVtYmVye1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjowcHggNHB4O1xuICB9XG4gIC5hY3RpdmVfY2lyY2xle1xuIFxuICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOjJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwNzlGRjtcbiAgfVxuICAubmV4dHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwNzlGRjtcbiAgXG4gIH1cbiAgLnc0NTB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICB9XG4gIC53MjAwe1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAud2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogODIlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFZGVkZWQ7XG4gIH1cbiAgLnc5OHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLm5hdi1pdGVtIC5uYXYtbGlua3tcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHhcbiAgfVxuICBcbiAgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgICAgbWFyZ2luOiAtMXJlbSAyLjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC53MTV7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmxpc3Q+bGl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA3cHggMHB4O1xuICAgIG1hcmdpbjogN3B4IDBweDtcbiAgfVxuICAubGlzdD5saT5hPnNwYW57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgLmxpc3Q+bGkgaW1ne1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfSBcbiAgLnJpZ2h0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAuYWRkX3N7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgfVxuICAuYWRkX3M+cHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC8qLm10MTJ7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfSovXG4gIC5pbWcxe1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6MTAwcHg7IFxuICB9XG4gIC5pbWdfY3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxpbmV7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkU4RTg7XG4gIH1cbiAgLnN1YmplY3Qge1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gIC5zdWJqZWN0IC50YWJsZV9oZWFke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjREZFNUYwO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLnN1YmplY3QgLnRhYmxlX2JvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREZFNUYwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLnN1YmplY3QgLnRhYmxlX2hlYWQ+ZGl2e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnN1YmplY3QgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM0MDU4Nzc7XG4gIH1cbiAgLnN1YmplY3QgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxkLC5zdWJqZWN0IC50YWJsZV9oZWFkPmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc3ViamVjdCAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDIpLC5zdWJqZWN0IC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMil7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuc3ViamVjdCAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDMpLC5zdWJqZWN0IC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMyl7XG4gICAgd2lkdGg6IDQwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAud2lkdGhfc3tcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gIH1cbiAgLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAvKiBtYXJnaW4tdG9wOiAxMHB4OyovXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gICAgICBncmlkLWdhcDogMC41ZW07XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHdpZHRoOiAwZW07XG4gICAgICBoZWlnaHQ6IDBlbTtcbiAgICB9XG4gIC5jaGVja2JveF9fY29udHJvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgd2lkdGg6IDAuNWVtO1xuICAgIGhlaWdodDogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4xZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNCQkIyQjI7XG4gIFxuICB9XG4gIC5jaGVja2JveF9faW5wdXQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNoZWNrYm94XCI7XG4gIH1cbiAgLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gICAgICBjb2xvcjogICMwMDg0ZjY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgIHN0cm9rZS13aWR0aDo0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4gMjVtcztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZFxuICAgKyAuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZFxuICAgKyAuY2hlY2tib3hfX2NvbnRyb2wgIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICB9XG4gIC5hZGRfc3ViamVjdHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKiAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiA4MHB4O1xuICAgICAgei1pbmRleDogMTAwOyovXG4gIH1cbiAgLmFkZF9zdWJqZWN0PnNwYW57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAxJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgfVxuICAud2lkMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wdDEwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLnB0MTAxe1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLm1vZGFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgfVxuICAgLnJpZ2h0e1xuICAgICBmbG9hdDogcmlnaHQ7XG4gICB9XG4ubW9kYWwtZGlhbG9nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0b3A6MTAlO1xufVxuLm1vZGFsLWhlYWRlcjpiZWZvcmV7XG4gIGRpc3BsYXk6bm9uZTtcbn1cbi5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjMkIyNjI2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5tYWluLXNoYWRvd3tcbmJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbi1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG5wYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuICAuZGV0YWlscyAudGFibGVfaGVhZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0RGRTVGMDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5kZXRhaWxzIC50YWJsZV9ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RGRTVGMDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5kZXRhaWxzIC50YWJsZV9oZWFkPmRpdntcbiAgICAgd2lkdGg6IDE5OXB4O1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuZGV0YWlscyAudGFibGVfYm9keT5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzMCUpIC8gNCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgbGluZS1oZWlnaHQ6IHVuc2V0O1xuICAgIC8vIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIC8vIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM0MDU4Nzc7XG4gIH1cbiAgLmRldGFpbHMgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxkLC5kZXRhaWxzIC50YWJsZV9oZWFkPmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDoyNzFweDtcbiAgIFxuICB9XG4gIC8qXG4gIC5kZXRhaWxzIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMiksLmRldGFpbHMgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgyKXtcbiAgICB3aWR0aDogNDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5kZXRhaWxzIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMyksLmRldGFpbHMgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgzKXtcbiAgICB3aWR0aDogNDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9Ki9cbiAgLm91dHRlcl9mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIFxuICB9XG4gIC5vdXR0ZXJfZmxleD5kaXZ7XG4gICAgd2lkdGg6IDIyLjUlO1xuICAgIG1hcmdpbjogMHB4IDEuMjUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIC5maXJzdGNoaWxke1xuICAgIGJhY2tncm91bmQ6ICNEQ0YyRkY7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5maXJzdGNoaWxkPmE+ZGl2e1xuICAgIHdpZHRoOiAxNTJweDtcbiAgICBoZWlnaHQ6IDE1MnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUvNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuMyk7XG4gIH1cbiAgLmZpcnN0Y2hpbGQ+YT5kaXYgcHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICB9XG4gIC5maXJzdGNoaWxkPmE+ZGl2IHA6Zmlyc3QtY2hpbGR7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5maXJzdGNoaWxkPmE+ZGl2IHNwYW46Zmlyc3QtY2hpbGR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZmlyc3RjaGlsZD5hPmRpdiA6bGFzdC1jaGlsZHtcbiAgbWFyZ2luLXRvcDogLTclO1xuICB9XG4gIC5uYW1lPmRpdjpmaXJzdC1jaGlsZHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgd2lkdGg6IDgwJTtcbiAgICAvLyBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxMDlDRjE7XG4gIH1cbiAgLm5hbWU+ZGl2e1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5uYW1lMXtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y0RUJFQjtcbiAgfVxuICAubmFtZT5kaXY6bGFzdC1jaGlsZHtcbiAgXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgXG4gIH1cbiAgLm5hbWUye1xuICAgIHdpZHRoOiA0MyU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzc2NzI3MjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBcbiAgfVxuICAudmFsdWUye1xuICAgICB3aWR0aDogNTUlO1xuICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMyMjI1Mjk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuYWRkX3N7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm1hc3Rlcl9je1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM4OThCOEQ7XG4gIH1cbiAgLm1jX25hbWV7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMHB4IDRweDtcbiAgICB0b3A6IC0xcHg7XG4gIH1cbiAgLndsaW5le1xuICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDotNHB4O1xuICB9XG4gIC5zdGR7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICAuc3BhY2VfZmxleHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcbiAgfVxuICAuYnNEYXRlcGlja2VyIDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnKSBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwIGNlbnRlciA7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gIH1cbiAgLmJzRGF0ZXBpY2tlciB7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgIC5ic0RhdGVwaWNrZXIgOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cbiAgICAuYnNEYXRlcGlja2VyIDpmb2N1czpiZWZvcmUsXG4gICAgLmJzRGF0ZXBpY2tlciA6dmFsaWQ6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICAgIC53aWQyMTd7XG4gICAgICB3aWR0aDoyNzFweDtcbiAgICB9XG4gICAgLndpZDE4MHtcbiAgICAgIHdpZHRoOjE4MHB4O1xuICAgIH1cbiAgIC53aWQxMzZ7XG4gICAgICB3aWR0aDo5MCU7XG4gICAgfVxuICAgIC53aWQ5e1xuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC00cHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweClcbiAgeyNzdWJqZWN0TW9kYWwgLm1vZGFsLWRpYWxvZywjY291cnNlTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICBcbiAgfVxuICB9XG4gICNjb3Vyc2VNb2RhbCAubW9kYWwtZGlhbG9nLCNzdWJqZWN0TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICBcbiAgfVxuICAubmF2PmxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubmF2LWxpbms6aG92ZXIsLm5hdi1saW5rLC5uYXYtbGluazpmb2N1c3tcbmJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG59XG5cbiAgLm5hdi1saW5re1xuICAgIGRpc3BsYXk6IGlubGluZTt9XG5cbiAgICAubmF2LWl0ZW0ge1xuICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDljZjEgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgfVxuICB9XG4gIC5wb2ludGVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbi5zdHVkZW50LWFzc2lnbi1wb3B1cCB7XG4gIC5wb3B1cC10aXRsZSB7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5maWx0ZXItc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAuZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIH1cbiAgICAgIC5idG4ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICB9XG4gIC50YWJsZS13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIHRoIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgICAgdGQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cblxuLmJsYWNrLWJne1xuYmFja2dyb3VuZDogcmdiYSgxMCwxMCwxMCwwLjMpO1xucG9zaXRpb246IGZpeGVkO1xudG9wOiAwcHg7XG5oZWlnaHQ6IDEwMCU7XG5sZWZ0OiAwcHg7XG56LWluZGV4OiAxO1xud2lkdGg6IDEwMCU7XG59XG5cbi5jb25maXJtYXRpb25fcG9wdXB7XG5wb3NpdGlvbjogZml4ZWQ7XG50b3A6IDM1JTtcbmxlZnQ6IDQwJTtcbndpZHRoOiAzMDBweDtcbmJhY2tncm91bmQ6IHdoaXRlO1xuaGVpZ2h0OiBhdXRvO1xucGFkZGluZzogMjBweDtcbnotaW5kZXg6IDk5OTk5OTk5O1xuYm9yZGVyLXJhZGl1czogNnB4O1xuYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjU1LDAsMCwwLjcpO1xuYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xufVxuLmNvbmZpcm1fdGl0bGV7XG5mb250LXNpemU6IDIwcHg7XG59XG4uY29uZmlybWF0aW9uX21zZ19ib3h7XG5tYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbmZpcm1hdGlvbl9wb3B1cHtcbi5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgLmZvcm0tY2hlY2tib3gge1xuICAgb3BhY2l0eTogMDtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGxlZnQ6IDA7XG4gICB0b3A6IDA7XG4gICB3aWR0aDogMjBweDtcbiAgIGhlaWdodDogMjBweDtcbiAgIHotaW5kZXg6IDE7XG4gICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuIH1cbn1cblxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xufVxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDphZnRlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbn1cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmJlZm9yZSB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsZWZ0OiA4cHg7XG4gICAgdG9wOiA5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGxlZnQ6IDJweDtcbiAgICB0b3A6IDVweDtcbn1cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWwge1xuICAgIGNvbG9yOiAjMDA4NGY2O1xufVxufVxuXG4uY29uZmlybWF0aW9uX2J1dHRvbl9jb250YWluZXJ7XG5tYXJnaW4tdG9wOiAyMHB4O1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuaW5wdXR7XG4gIHdpZHRoOiA4MHB4O1xufVxufVxuLnBvcHVwV3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjUpO1xuICB6LWluZGV4OiA5OTk7IC8vIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAucG9wdXAge1xuICAgIG1heC13aWR0aDogNjUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBsZWZ0OiAxMyU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMyU7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ucG9wdXAtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDsgLy8gaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggNXB4ICM5YzljOWM7XG4gIHRyYW5zaXRpb246IHVuc2V0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBzcGFuIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgaDIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBoNCB7XG4gICAgICBtYXJnaW46IDI1cHggMCAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4uY2xvc2VQb3B1cCB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBkaXNwbGF5OiBub25lO1xuICAmLmJvdHRvbVJpZ2h0IHtcbiAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAwO1xuICB9XG4gICYudG9wTGVmdCB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICB0b3A6IDFweDtcbiAgICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICAmLmJvdHRvbUxlZnQge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgYm90dG9tOiAycHg7XG4gICAgICB0b3A6IGF1dG87XG4gIH1cbiAgc3ZnIHtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgLmNscy0xIHtcbiAgICAgICAgICBzdHJva2U6ICNjMWMxYzE7XG4gICAgICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgICAuY2xzLTEge1xuICAgICAgICAgIHN0cm9rZTogJGNvbW1vbi1ibHVlO1xuICAgICAgfVxuICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmZhZGVJbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgLm5vcm1hbC1maWVsZCB7XG4gICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5tY19jbGFzc3tcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaENsYXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDU5JTtcbn1cbi5jb3Vyc2VfbmFtZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzEwOUNGMTtcbiAgLmxpbmUwIHtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG59XG4ucGJ0MTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.component.ts":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: CourseCourseListV2Component */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseCourseListV2CourseCourseListV2ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseCourseListV2Component", function () {
        return CourseCourseListV2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _utils_commonUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../utils/commonUtils */
      "./src/app/utils/commonUtils.ts");
      /* harmony import */


      var _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/course-services/course-list.service */
      "./src/app/services/course-services/course-list.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

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

      var CourseCourseListV2Component =
      /** @class */
      function () {
        var CourseCourseListV2Component = /*#__PURE__*/function () {
          function CourseCourseListV2Component(_httpService, _auth, _msgService, apiService) {
            _classCallCheck(this, CourseCourseListV2Component);

            this._httpService = _httpService;
            this._auth = _auth;
            this._msgService = _msgService;
            this.apiService = apiService;
            this.institute_id = sessionStorage.getItem('institute_id');
            this.master_course_id = '-1';
            this.masterCourseData = [];
            this.courseData = [];
            this.standardList = [];
            this.editMasterC = false;
            this.schoolModel = false;
            this.addStudentPopUp = false;
            this.showTable = false;
            this.searchData = "";
            this.studentListDataSource = [];
            this.feeTemplateDataSource = [];
            this.studentList = [];
            this.allChecked = false;
            this.alertBox = true;
            this.delete_unpaid_fee = false;
            this.academicList = [];
            this.acad_year_id = '-1';
            this.Search_criteria = '';
            this.is_active = true;
            this.masterCourseObj = {
              "master_course_name": "",
              "institute_id": this.institute_id,
              "is_active": "Y",
              "standard_id": '-1',
              "standard_name": ''
            };
            this.createMasterCourseModel = {
              "master_course_name": "",
              "institute_id": sessionStorage.getItem('institute_id'),
              "is_active": "Y",
              "standard_id": '-1',
              "standard_name": ''
            };
            this.searchFilter = {
              unassignFlag: '0',
              standard_id: -1
            };
          }

          _createClass(CourseCourseListV2Component, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.schoolModel = this._auth.schoolModel.getValue();
              this.getAcademicYearDetails();
              this.getMasterCourseData();
              this.fetchStandard();
            }
          }, {
            key: "getMasterCourseData",
            value: function getMasterCourseData() {
              var _this14 = this;

              this._auth.showLoader();

              this._httpService.getData('/api/v1/master-course/fetch-master-course/' + this.institute_id + '?is_active=Y').subscribe(function (res) {
                _this14._auth.hideLoader();

                _this14.masterCourseData = res.result;
              }, function (err) {
                _this14._auth.hideLoader();

                console.log(err);
              });
            }
          }, {
            key: "getAcademicYearDetails",
            value: function getAcademicYearDetails() {
              var _this15 = this;

              this.academicList = [];

              this._httpService.getData('/api/v1/academicYear/all/' + sessionStorage.getItem('institute_id')).subscribe(function (res) {
                _this15.academicList = res;

                var _iterator3 = _createForOfIteratorHelper(_this15.academicList),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var acad = _step3.value;

                    if (acad.default_academic_year == 1) {
                      _this15.acad_year_id = acad.inst_acad_year_id;

                      _this15.fetchCourseDetails(_this15.master_course_id);

                      break;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                if (_this15.acad_year_id == '-1') {
                  _this15.fetchCourseDetails(_this15.master_course_id);
                }
              }, function (err) {});
            }
          }, {
            key: "fetchCourseDetails",
            value: function fetchCourseDetails(obj) {
              var _this16 = this;

              // if (this.master_course_id != '-1') {
              var is_active = this.is_active ? 'Y' : 'N';

              this._auth.showLoader();

              var url = "/api/v1/courseMaster/fetch-all-course/".concat(this.institute_id, "?acad_year_id=").concat(this.acad_year_id, "&search_criteria=").concat(this.Search_criteria, "&is_active=").concat(is_active);

              if (this.master_course_id != '-1' && this.acad_year_id != '-1') {
                url = "/api/v1/courseMaster/fetch-all-course/".concat(this.institute_id, "?id=").concat(this.master_course_id, "&acad_year_id=").concat(this.acad_year_id, "&search_criteria=").concat(this.Search_criteria, "&is_active=").concat(is_active);
              } else if (this.acad_year_id == '-1' && this.master_course_id != '-1') {
                url = "/api/v1/courseMaster/fetch-all-course/".concat(this.institute_id, "?id=").concat(this.master_course_id, "&search_criteria=").concat(this.Search_criteria, "&is_active=").concat(is_active);
              } else if (this.acad_year_id == '-1' && this.master_course_id == '-1') {
                url = "/api/v1/courseMaster/fetch-all-course/".concat(this.institute_id, "?search_criteria=").concat(this.Search_criteria, "&is_active=").concat(is_active);
              }

              this._httpService.getData(url).subscribe(function (res) {
                _this16._auth.hideLoader();

                _this16.courseData = res.result;
                var todaysDate = new Date();
                todaysDate.setHours(0, 0, 0, 0);

                if (_this16.courseData && _this16.courseData.length) {
                  _this16.courseData.forEach(function (element) {
                    if (element.course_list && element.course_list.length) {
                      element.course_list.forEach(function (element1) {
                        element1.activeDate = false;

                        if (moment__WEBPACK_IMPORTED_MODULE_6__(element1.end_date).valueOf() >= moment__WEBPACK_IMPORTED_MODULE_6__(todaysDate).valueOf()) {
                          element1.activeDate = true;
                        }
                      });
                    }
                  });
                }

                console.log(_this16.courseData);
              }, function (err) {
                _this16.courseData = [];

                _this16._auth.hideLoader();

                _this16._msgService.showErrorMessage('error', '', err.error.message);
              });

              if (!this.schoolModel) {
                var stdObj = this.masterCourseData.filter(function (mc) {
                  return mc.master_course_id == _this16.master_course_id;
                });
                this.masterCourseObj = stdObj[0];
              } else {
                var _stdObj = this.standardList.filter(function (mc) {
                  return mc.standard_id == _this16.master_course_id;
                });

                this.masterCourseObj = _stdObj[0];
              } // }

            }
          }, {
            key: "fetchStandard",
            value: function fetchStandard() {
              var _this17 = this;

              var url = "/api/v1/standards/standard-subject-list/" + this.institute_id + '?is_active=Y&is_subject_required=true';

              this._auth.showLoader();

              this._httpService.getData(url).subscribe(function (data) {
                _this17._auth.hideLoader();

                _this17.standardList = data.result;
              }, function (error) {
                _this17._auth.hideLoader();

                console.log(error);
              });
            } // setAddCourseSession() {
            //   console.log(this.masterCourseObj);
            //   sessionStorage.setItem('cretaCourse', JSON.stringify(this.masterCourseObj));
            //   let sub_list = this.standardList.filter(sub => (sub.standard_id == this.masterCourseObj.standard_id));
            //   sessionStorage.setItem('subjectList', JSON.stringify(sub_list[0]));
            // }

          }, {
            key: "addStudentToBatch",
            value: function addStudentToBatch(rowDetails) {
              this.addStudentPopUp = true;
              this.courseDetails = rowDetails;

              if (this.schoolModel) {
                this.searchFilter.standard_id = rowDetails.standard_id;
                this.getAllStudentList();
              }

              this.getAllFeeTemplate(); // this.onRadioButtonChange();
            }
          }, {
            key: "getAllStudentList",
            value: function getAllStudentList() {
              var _this18 = this;

              this.searchData = "";
              var unassign = "";

              if (this.searchFilter.unassignFlag == '2') {
                unassign = "Y";
              } else {
                unassign = "N";
              }

              var data = {
                course_id: this.courseDetails.course_id,
                standard_id: Number(this.searchFilter.standard_id),
                isUnassignedStudent: unassign
              };

              this._auth.showLoader();

              this.showTable = true;
              this.apiService.getStudentList(data).subscribe(function (res) {
                var clone = [];

                for (var i = 0; i < res.length; i++) {
                  res[i]['immutableKey'] = res[i].assigned;
                  clone.push(res[i]);
                }

                var data = _this18.makeTableJson(clone);

                _this18.studentListDataSource = _this18.keepCloning(data);
                _this18.studentList = data;

                _this18.getHeaderCheckBoxValue();

                _this18._auth.hideLoader();
              }, function (error) {
                _this18._auth.hideLoader();
              });
            }
          }, {
            key: "keepCloning",
            value: function keepCloning(objectpassed) {
              if (objectpassed === null || typeof objectpassed !== 'object') {
                return objectpassed;
              }

              var temporaryStorage = objectpassed.constructor();

              for (var key in objectpassed) {
                temporaryStorage[key] = this.keepCloning(objectpassed[key]);
              }

              return temporaryStorage;
            }
          }, {
            key: "makeTableJson",
            value: function makeTableJson(res) {
              if (this.searchFilter.unassignFlag == '0') {
                return res;
              } else if (this.searchFilter.unassignFlag == '1') {
                var data = [];
                res.forEach(function (element) {
                  if (element.assigned) {
                    data.push(element);
                  }
                });
                return data;
              } else {
                return res;
              }
            }
          }, {
            key: "getAllFeeTemplate",
            value: function getAllFeeTemplate() {
              var _this19 = this;

              this.apiService.getFeeTemplate(this.courseDetails.course_id).subscribe(function (res) {
                _this19.feeTemplateDataSource = res;
              }, function (err) {//console.log(err);
              });
            }
          }, {
            key: "getHeaderCheckBoxValue",
            value: function getHeaderCheckBoxValue() {
              for (var i = 0; i < this.studentList.length; i++) {
                if (this.studentList[i].assigned == false) {
                  this.allChecked = false;
                  break;
                } else {
                  this.allChecked = true;
                }
              }
            }
          }, {
            key: "onRadioButtonChange",
            value: function onRadioButtonChange() {
              this.searchData = "";
              this.studentList = [];
              this.studentListDataSource = [];
              this.getAllStudentList();
            }
          }, {
            key: "searchStudent",
            value: function searchStudent(element) {
              if (element.value != '' && element.value != null) {
                var searchData = this.studentListDataSource.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(element.value.toLowerCase());
                  });
                });
                this.studentList = searchData;
              } else {
                this.studentList = this.studentListDataSource;
              }
            }
          }, {
            key: "closeStudentPopup",
            value: function closeStudentPopup() {
              this.addStudentPopUp = false;
              this.alertBox = true;
              this.searchFilter = {
                unassignFlag: '0',
                standard_id: -1
              };
              this.studentList = [];
              this.showTable = false;
              this.searchData = "";
            }
          }, {
            key: "selectAllCheckBox",
            value: function selectAllCheckBox(element) {
              var val = element.checked;

              for (var i = 0; i < this.studentList.length; i++) {
                this.studentList[i].assigned = val;
              }
            }
          }, {
            key: "checkAssignedCourse",
            value: function checkAssignedCourse() {
              var test = [];

              for (var i = 0; i < this.studentListDataSource.length; i++) {
                for (var t = 0; t < this.studentList.length; t++) {
                  if (this.studentList[t].student_id == this.studentListDataSource[i].student_id) {
                    if (this.studentList[t].assigned != this.studentListDataSource[i].assigned) {
                      test = [this.studentList[t].assigned.toString()];
                      break;
                    }
                  }
                }
              }

              return test;
            }
          }, {
            key: "saveChanges",
            value: function saveChanges() {
              var checkAssignedCourseList = this.checkAssignedCourse();

              if (checkAssignedCourseList.length > 0) {
                var checkFlag = true;

                for (var i = 0; i < checkAssignedCourseList.length; i++) {
                  if (checkAssignedCourseList[i] == 'false') {
                    checkFlag = false;
                    break;
                  }
                }

                if (!checkFlag) {
                  this.unassign_course();
                } else {
                  this.addStudentPopUp = false;
                  this.apiToAllocateAndDeallocate();
                }
              } else {
                this.addStudentPopUp = false;
                this.showTable = false;
              }
            }
          }, {
            key: "getCheckedRows",
            value: function getCheckedRows() {
              var test = {};

              for (var i = 0; i < this.studentListDataSource.length; i++) {
                for (var t = 0; t < this.studentList.length; t++) {
                  if (this.studentList[t].student_id == this.studentListDataSource[i].student_id) {
                    if (this.studentList[t].assigned != this.studentListDataSource[i].assigned) {
                      test[this.studentList[t].student_id] = [this.studentList[t].assigned.toString(), this.studentList[t].academic_year.toString(), this.studentList[i].assigned_fee_template_id.toString()];
                      break;
                    }
                  }
                }
              }

              return test;
            }
          }, {
            key: "apiToAllocateAndDeallocate",
            value: function apiToAllocateAndDeallocate() {
              var _this20 = this;

              this._auth.showLoader();

              var data = this.getCheckedRows();
              var dataToSend = {
                studentAssignedUnassigned_and_AcademicYearMapping: data,
                deleteCourse_SubjectUnPaidFeeSchedules: this.delete_unpaid_fee
              };
              this.apiService.saveUpdatedList(dataToSend, this.courseDetails.course_id).subscribe(function (res) {
                _this20._msgService.showErrorMessage('success', '', 'Student(s) updated successfully');

                _this20.studentList = [];
                _this20.addStudentPopUp = false;

                _this20._auth.hideLoader();

                _this20.fetchCourseDetails(_this20.masterCourseObj);

                _this20.showTable = false;
              }, function (err) {
                _this20._auth.hideLoader();

                _this20._msgService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "unassign_course",
            value: function unassign_course() {
              this.alertBox = true;
              this.apiToAllocateAndDeallocate();
            }
          }, {
            key: "closeAlert",
            value: function closeAlert() {
              this.alertBox = true;
              this.delete_unpaid_fee = false;
              var data = this.getCheckedRows();

              for (var i = 0; i < Object.keys(data).length; i++) {
                document.getElementById("studentcheck" + Object.keys(data)[i]).checked = true;
              }
            }
          }, {
            key: "editMcFun",
            value: function editMcFun(obj) {
              this.editMasterC = true;
              this.createMasterCourseModel.master_course_name = obj.master_course_name;
              this.createMasterCourseModel.standard_id = obj.course_list[0].standard_id;
              this.createMasterCourseModel.master_course_id = obj.master_course_id;
              console.log(obj);
            }
          }, {
            key: "saveMasterC",
            value: function saveMasterC() {
              this.updateMasterCourse();
            }
          }, {
            key: "checkMasterCourseVal",
            value: function checkMasterCourseVal() {
              if (_utils_commonUtils__WEBPACK_IMPORTED_MODULE_4__["default"].isEmpty(this.createMasterCourseModel.master_course_name) || this.createMasterCourseModel.standard_id == '-1') {
                this._msgService.showErrorMessage('error', '', 'Please fill all mandatory fields');

                return false;
              }

              return true;
            }
          }, {
            key: "updateMasterCourse",
            value: function updateMasterCourse() {
              var _this21 = this;

              if (this.checkMasterCourseVal()) {
                var obj = {
                  "master_course_name": this.createMasterCourseModel.master_course_name,
                  "institute_id": this.createMasterCourseModel.institute_id,
                  "is_active": "Y",
                  "standard_id": this.createMasterCourseModel.standard_id,
                  "master_course_id": this.createMasterCourseModel.master_course_id
                };

                this._auth.showLoader();

                this._httpService.putData('/api/v1/master-course/update', obj).subscribe(function (res) {
                  _this21._auth.hideLoader();

                  _this21._msgService.showErrorMessage('success', '', 'Master course updated successfully');

                  _this21.getMasterCourseData();

                  _this21.fetchCourseDetails(_this21.master_course_id);

                  $('#courseModal').modal('hide');
                }, function (err) {
                  _this21._auth.hideLoader();

                  _this21._msgService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "clearMasterCourse",
            value: function clearMasterCourse() {
              // this.editMasterC = false;
              this.createMasterCourseModel = {
                "master_course_name": "",
                "institute_id": sessionStorage.getItem('institute_id'),
                "is_active": "Y",
                "standard_id": '-1',
                "standard_name": ''
              };
            }
          }]);

          return CourseCourseListV2Component;
        }();

        CourseCourseListV2Component.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"]
          }, {
            type: _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_5__["CourseListService"]
          }];
        };

        CourseCourseListV2Component = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-course-course-list-v2',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./course-course-list-v2.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./course-course-list-v2.component.scss */
          "./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"], _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_5__["CourseListService"]])], CourseCourseListV2Component);
        return CourseCourseListV2Component;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.module.ts":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.module.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: CourseCourseListV2Module */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseCourseListV2CourseCourseListV2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseCourseListV2Module", function () {
        return CourseCourseListV2Module;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _course_course_list_v2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./course-course-list-v2-routing.module */
      "./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2-routing.module.ts");
      /* harmony import */


      var _course_course_list_v2_course_course_list_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../course-course-list-v2/course-course-list-v2.component */
      "./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _course_add_course_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./course-add/course-add.component */
      "./src/app/components/course-module/create-course/course-course-list-v2/course-add/course-add.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CourseCourseListV2Module =
      /** @class */
      function () {
        var CourseCourseListV2Module = function CourseCourseListV2Module() {
          _classCallCheck(this, CourseCourseListV2Module);
        };

        CourseCourseListV2Module = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          declarations: [_course_course_list_v2_course_course_list_v2_component__WEBPACK_IMPORTED_MODULE_3__["CourseCourseListV2Component"], _course_add_course_add_component__WEBPACK_IMPORTED_MODULE_5__["CourseAddComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_course_list_v2_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseCourseListV2RoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        })], CourseCourseListV2Module);
        return CourseCourseListV2Module;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=course-course-list-v2-course-course-list-v2-module-es5.js.map