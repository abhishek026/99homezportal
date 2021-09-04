(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-course-module-create-course-course-subject-course-subject-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-subject/course-subject.component.html":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-subject/course-subject.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleCreateCourseCourseSubjectCourseSubjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"oldUI\">\n<section style=\"margin-top: 10px; margin-bottom: 10px;\" *ngIf=\"isLangInstitue \">\n  <div class=\"c-sm-2 c-xs-2 c-lg-2 c-md-2\">\n    <div class=\"field-radio-wrapper\">\n      <input class=\"form-radio\" type=\"radio\" name=\"isActive\" [(ngModel)]=\"activeList\" [value]=\"false\" id='Active'\n        (ngModelChange)=\"getAllSubjectList()\">\n      <label for=\"Active\">Active</label>\n    </div>\n  </div>\n  <div class=\"c-sm-2 c-xs-2 c-lg-2 c-md-2\">\n    <div class=\"field-radio-wrapper\">\n      <input class=\"form-radio\" type=\"radio\" name=\"isActive\" [(ngModel)]=\"activeList\" [value]=\"true\" id='InActive'\n        (ngModelChange)=\"getAllSubjectList()\">\n      <label for=\"InActive\">In Active</label>\n    </div>\n  </div>\n  <div class=\"c-sm-2 c-xs-2 c-lg-2 c-md-2\"></div>\n  <div class=\"c-lg-6 c-md-6 c-sm-6\" style=\"float: right;margin-right: 1%;width: 28%;\">\n    <input #searchVal type=\"text\" class=\"searchBox\" placeholder=\"Search\" id=\"search\" name=\"searchData \"\n      (keyup)=\"searchInList(searchVal)\">\n    <button class=\"btn\" *ngIf=\"(isLangInstitue != true )\" (click)=\"openPopup()\" value=\"Add Subject\">Add\n      Subject</button>\n\n    <button class=\"btn\" *ngIf=\"(isLangInstitue == true )\" (click)=\"openPopup()\" value=\"Add Course\">Add\n      Course</button>\n\n  </div>\n</section>\n\n<section class=\"\" *ngIf=\"isLangInstitue \">\n  <div class=\"\">\n    <div class=\"\">\n      <table class=\"tableBodyScroll\">\n        <thead *ngIf=\"schoolModel\">\n          <tr>\n            <th>\n              <label style=\"cursor:pointer;\">ID</label>\n            </th>\n            <th>\n              <label *ngIf=\"isLangInstitue\" style=\"cursor:pointer;\">Master\n                Course</label>\n              <label *ngIf=\"!isLangInstitue\" style=\"cursor:pointer;\">Standard</label>\n            </th>\n            <th style=\"width: 15%;\">\n              <label *ngIf=\"(isLangInstitue != true )\" style=\"cursor:pointer;\">Subject</label>\n              <label *ngIf=\"(isLangInstitue == true )\" style=\"cursor:pointer;\">Course</label>\n            </th>\n            <th *ngIf=\"!isLangInstitue\">\n              <label>Subject Code</label>\n            </th>\n            <th>\n              <label style=\"cursor:pointer;\" *ngIf=\"schoolModel\">Total Marks</label>\n            </th>\n            <th>\n              <label style=\"cursor:pointer;\" *ngIf=\"schoolModel\">Passing Marks</label>\n            </th>\n\n            <th>\n              <label style=\"cursor:pointer;\">Is Active</label>\n            </th>\n            <th>\n              <label style=\"cursor:pointer;\" *ngIf=\"schoolModel\">Optional</label>\n            </th>\n            <th>\n              <i *ngIf=\"sortingDir == 'asc'\" (click)=\"sortTable('created_date')\" class=\"fas fa-caret-up\"\n                style=\"font-family: FontAwesome;\"></i>\n              <i *ngIf=\"sortingDir != 'asc'\" (click)=\"sortTable('created_date')\" class=\"fas fa-caret-down\"\n                style=\"font-family: FontAwesome;\"></i>\n              <label style=\"cursor:pointer;\" (click)=\"sortTable('created_date')\">Added Date</label>\n            </th>\n            <th>\n              <label>Action</label>\n            </th>\n          </tr>\n        </thead>\n        <thead *ngIf=\"!schoolModel\">\n          <tr>\n            <th>\n              <label style=\"cursor:pointer;\" (click)=\"sortTable('subject_id')\">ID</label>\n            </th>\n            <th style=\"width: 20%;\">\n              <label *ngIf=\"isLangInstitue\" style=\"cursor:pointer;\" (click)=\"sortTable('standard_name')\">Master\n                Course</label>\n              <label *ngIf=\"!isLangInstitue\" style=\"cursor:pointer;\"\n                (click)=\"sortTable('standard_name')\">Standard</label>\n            </th>\n            <th style=\"width: 20%;\">\n              <label *ngIf=\"(isLangInstitue != true )\" style=\"cursor:pointer;\"\n                (click)=\"sortTable('subject_name')\">Subject</label>\n              <label *ngIf=\"(isLangInstitue == true )\" style=\"cursor:pointer;\"\n                (click)=\"sortTable('subject_name')\">Course</label>\n            </th>\n            <th *ngIf=\"!isLangInstitue\">\n              <label>Subject Code</label>\n            </th>\n            <th>\n              <label style=\"cursor:pointer;\" (click)=\"sortTable('is_active')\">Is Active</label>\n            </th>\n            <th>\n              <i *ngIf=\"sortingDir == 'asc'\" (click)=\"sortTable('created_date')\" class=\"fas fa-caret-up\"\n                style=\"font-family: FontAwesome;\"></i>\n              <i *ngIf=\"sortingDir != 'asc'\" (click)=\"sortTable('created_date')\" class=\"fas fa-caret-down\"\n                style=\"font-family: FontAwesome;\"></i>\n              <label style=\"cursor:pointer;\" (click)=\"sortTable('created_date')\">Added Date</label>\n            </th>\n            <th>\n              <label>Action</label>\n            </th>\n          </tr>\n        </thead>\n\n        <tbody *ngIf=\"(subjectList.length != 0) && schoolModel\"\n          [ngStyle]=\"{'max-height':createNewSubject == true ? '40vh' : '55vh','min-height':createNewSubject == true ? '40vh' : '55vh' }\">\n          <tr (click)=\"rowSelectEvent(i)\" [class.selected]=\"i == selectedRow\" class=\"displayComp\" id=\"row{{i}}\"\n            *ngFor=\"let row of subjectList; let i = index; trackBy: i;\">\n            <td>\n              {{row.subject_id}}\n            </td>\n\n            <td>\n              {{row.standard_name}}\n            </td>\n\n            <td class=\"view-comp\" style=\"width: 15%;\">\n              {{row.subject_name}}\n            </td>\n            <td class=\"edit-comp\" style=\"width: 15%;\">\n              <div class=\"field-wrapper\">\n                <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"row.subject_name\" name=\"label\"\n                  style=\"width: 100%;text-align: left;\">\n              </div>\n            </td>\n            <td class=\"view-comp\" *ngIf=\"!isLangInstitue\" style=\"padding-left: 20px;\">\n              {{row.subject_code}}\n            </td>\n\n            <td class=\"view-comp\" *ngIf=\"schoolModel\" style=\"padding-left: 20px;\">\n              {{row.final_marks}}\n            </td>\n            <td class=\"view-comp\" *ngIf=\"schoolModel\" style=\"padding-left: 20px;\">\n              {{row.passing_marks}}\n            </td>\n            <td class=\"edit-comp\" *ngIf=\"!isLangInstitue\" style=\"padding-left: 20px;\">\n              <div class=\"field-wrapper\">\n                <input type=\"text\" [maxlength]=\"subjectCodeCharLimit\" class=\"form-ctrl\" [(ngModel)]=\"row.subject_code\"\n                  name=\"label\">\n              </div>\n            </td>\n\n            <td class=\"view-comp\" style=\"padding-left: 20px;\">\n              {{row.is_active}}\n            </td>\n            <td class=\"edit-comp\" style=\"padding-left: 20px;\">\n              <div class=\"field-wrapper has-value\">\n                <select id=\"issearchable\" class=\"form-ctrl\" name=\"issearchable\" [(ngModel)]=\"row.is_active\">\n                  <option value=\"Y\">Yes</option>\n                  <option value=\"N\">No</option>\n                </select>\n              </div>\n            </td>\n\n            <td class=\"view-comp\" *ngIf=\"schoolModel\" style=\"padding-left: 20px;\">\n              {{row.is_optional}}\n            </td>\n            <td class=\"edit-comp\" style=\"padding-left: 20px;\">\n              <div class=\"field-wrapper has-value\">\n                <select id=\"issearchable\" class=\"form-ctrl\" name=\"issearchable\" [(ngModel)]=\"row.is_optional\">\n                  <option value=\"Y\">Yes</option>\n                  <option value=\"N\">No</option>\n                </select>\n              </div>\n            </td>\n\n            <td style=\"padding-left: 20px;\">\n              {{row.created_date | date:'dd-MMM-yy'}}\n            </td>\n\n            <td class=\"view-comp\" style=\"padding-left: 20px;\">\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"cursor: pointer;color:#0084f6;    font-size: 14px;\"\n                (click)=\"editSubject(row)\" title=\"Edit\"></i>\n              <i class=\"fa fa-trash\" style=\"cursor: pointer;color: red;font-size: 14px;margin-left: 8px;\"\n                (click)=\"deleteRow(row)\" aria-hidden=\"true\" title=\"Delete\"></i>\n            </td>\n            <td class=\"edit-comp\">\n              <i class=\"fa fa-floppy-o\" style=\"cursor: pointer;margin-right: 10px; font-size: 14px;color: green;\"\n                (click)=\"updateRow(row,i)\" title=\"Save\" aria-hidden=\"true\"></i>\n              <i class=\"fa fa-times\" style=\"cursor: pointer;font-size: 14px;color: red;\" (click)=\"cancelRow(i)\"\n                title=\"Cancel\" aria-hidden=\"true\"></i>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"(subjectList.length != 0) && !schoolModel\"\n          [ngStyle]=\"{'max-height':createNewSubject == true ? '40vh' : '55vh','min-height':createNewSubject == true ? '40vh' : '55vh' }\">\n          <tr (click)=\"rowSelectEvent(i)\" [class.selected]=\"i == selectedRow\" class=\"displayComp\" id=\"row{{i}}\"\n            *ngFor=\"let row of subjectList; let i = index; trackBy: i;\">\n            <td>\n              {{row.subject_id}}\n            </td>\n\n            <td style=\"width: 20%;\">\n              {{row.standard_name}}\n            </td>\n\n            <td class=\"view-comp\" style=\"width: 20%;\">\n              {{row.subject_name}}\n            </td>\n            <td class=\"edit-comp\" style=\"width: 20%;\">\n              <div class=\"field-wrapper\">\n                <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"row.subject_name\" name=\"label\"\n                  style=\"width: 100%;text-align: left;\">\n              </div>\n            </td>\n            <td class=\"view-comp\" *ngIf=\"!isLangInstitue\" style=\"padding-left: 20px;\">\n              {{row.subject_code}}\n            </td>\n            <td class=\"edit-comp\" *ngIf=\"!isLangInstitue\" style=\"padding-left: 20px;\">\n              <div class=\"field-wrapper\">\n                <input type=\"text\" [maxlength]=\"subjectCodeCharLimit\" class=\"form-ctrl\" [(ngModel)]=\"row.subject_code\"\n                  name=\"label\">\n              </div>\n            </td>\n\n            <td class=\"view-comp\" style=\"padding-left: 20px;\">\n              {{row.is_active}}\n            </td>\n            <td class=\"edit-comp\" style=\"padding-left: 20px;\">\n              <div class=\"field-wrapper has-value\">\n                <select id=\"issearchable\" class=\"form-ctrl\" name=\"issearchable\" [(ngModel)]=\"row.is_active\">\n                  <option value=\"Y\">Yes</option>\n                  <option value=\"N\">No</option>\n                </select>\n              </div>\n            </td>\n            <td style=\"padding-left: 20px;\">\n              {{row.created_date | date:'dd-MMM-yy'}}\n            </td>\n\n            <td class=\"view-comp\" style=\"padding-left: 20px;\">\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"cursor: pointer;color:#0084f6;    font-size: 14px;\"\n                (click)=\"editSubject(row)\" title=\"Edit\"></i>\n              <i class=\"fa fa-trash\" style=\"cursor: pointer;color: red;font-size: 14px;margin-left: 8px;\"\n                (click)=\"deleteRow(row)\" aria-hidden=\"true\" title=\"Delete\"></i>\n            </td>\n            <td class=\"edit-comp\">\n              <i class=\"fa fa-floppy-o\" style=\"cursor: pointer;margin-right: 10px; font-size: 14px;color: green;\"\n                (click)=\"updateRow(row,i)\" title=\"Save\" aria-hidden=\"true\"></i>\n              <i class=\"fa fa-times\" style=\"cursor: pointer;font-size: 14px;color: red;\" (click)=\"cancelRow(i)\"\n                title=\"Cancel\" aria-hidden=\"true\"></i>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"subjectList.length == 0 && dataStatus === 1\">\n          <tr *ngFor=\"let dummy of dummyArr\">\n            <td *ngFor=\"let c of columnMaps\">\n              <div class=\"skeleton\">\n              </div>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"(subjectList.length == 0 && dataStatus === 2)\">\n          <tr>\n            <td colspan=\"6\">\n              No data found\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n      <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [count]=\"totalRow\" [sizeArr]=\"sizeArr\"\n        (sizeChange)=\"updateTableBatchSize($event)\">\n      </pagination>\n    </div>\n  </div>\n\n</section>\n</div>\n<div class=\"modal fade\" id=\"addUpdateSubjectdialog\" role=\"dialog\" tabindex=\"-1\" style=\"margin-top: 3%;\" role=\"dialog\"\ndata-backdrop=\"static\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title\" style=\"margin-bottom: -5px;\">{{isNewSubjectAdd ? 'Add' : 'Update'}} {{(isLangInstitue != true ) ? 'Subject' :'Course'}}\n        </h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"field-wrapper\">\n          <label *ngIf=\"(isLangInstitue != true )\" for=\"masterCourse\">Standard Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <label *ngIf=\"(isLangInstitue == true )\" for=\"masterCourse\">Master Course Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <div class=\"dropdown-div\">\n            <select id=\"masterCourse\" class=\"form-ctrl\" [(ngModel)]=\"newSubjectDetails.standard_id\">\n              <option value=\"-1\"> Select {{isLangInstitue ? 'Master Course Name' : 'Standard'}}</option>\n              <option *ngFor=\"let opt of standardList\" [value]=\"opt.standard_id\">\n                {{ (opt.standard_name?.length > 70) ? (opt.standard_name | slice:0:70) + '...' : opt.standard_name }}\n              </option>\n            </select>\n            <!-- <p>* Example English, Science</p> -->\n          </div>\n        </div>\n        <div class=\"field-wrapper\">\n          <label *ngIf=\"(isLangInstitue != true )\" for=\"subname\">\n            Subject Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <label *ngIf=\"(isLangInstitue == true )\" for=\"subname\">\n            Course Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"newSubjectDetails.subject_name\" id=\"subname\" name=\"label\">\n          <!-- <p>(Eg. Maths or Science or Accounts)</p> -->\n        </div>\n        <div class=\"field-wrapper\">\n          <label for=\"sub_code\">\n            Subject Code\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" onkeypress=\"return event.charCode != 32\" [maxlength]=\"subjectCodeCharLimit\" class=\"form-ctrl\"\n            [(ngModel)]=\"newSubjectDetails.subject_code\" id=\"sub_code\" name=\"sub_code\">\n        </div>\n        <div class=\"field-wrapper\" *ngIf=\"schoolModel\">\n          <label for=\"total_marks\">Total Marks\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" class=\"form-ctrl\"\n            [(ngModel)]=\"newSubjectDetails.total_marks\" id=\"total_marks\" name=\"total_marks\">\n        </div>\n        <div class=\"field-wrapper\" *ngIf=\"schoolModel\">\n          <label for=\"passing_marks\">Passing Marks\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n            [(ngModel)]=\"newSubjectDetails.passing_marks\" id=\"passing_marks\" name=\"passing_marks\">\n        </div>\n        <div class=\"field-wrapper\">\n          <div class=\"field-checkbox-wrapper\">\n            <input type=\"checkbox\" value=\"\" name=\"check\" class=\"form-checkbox\" [(ngModel)]=\"newSubjectDetails.is_active\"\n              id=\"isAct\">\n            <label for=\"isAct\">Is Active</label>\n          </div>\n          <div class=\"field-checkbox-wrapper\" *ngIf=\"schoolModel\">\n            <input type=\"checkbox\" name=\"check\" class=\"form-checkbox\" [(ngModel)]=\"newSubjectDetails.is_optional\"\n              id=\"is_optional\">\n            <label for=\"is_optional\">Set as Optional</label>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"clearData()\">Close</button>\n          <button type=\"button\" *ngIf=\"isNewSubjectAdd\" class=\"btn btn-primary create-btn\"\n            (click)=\"addNewSubject()\">Save</button>\n          <button type=\"button\" *ngIf=\"!isNewSubjectAdd\" class=\"btn btn-primary create-btn\"\n            (click)=\"updateSubject()\">Update</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<div id=\"three\" class=\"tab-pane active\" *ngIf=\"!isLangInstitue \">\n\n  <div class=\"display space16\">\n    <div class=\"flexc\">\n      <div class=\"field-wrapper\" style=\"margin-right: 15px;\">\n        <div class=\"dropdown-div\">\n          <select id=\"masterCourse\" class=\"form-ctrl stdSelect\" style=\"box-shadow: 0px 4px 10px rgb(0 0 0 / 10%)\" [(ngModel)]=\"standard_id_filter\" (ngModelChange)=\"getAllSubjectList()\">\n            <option value=\"-1\"> Select {{isLangInstitue ? 'Master Course Name' : 'Standard'}}</option>\n            <option *ngFor=\"let opt of standardList\" [value]=\"opt.standard_id\">\n              {{ (opt.standard_name?.length > 70) ? (opt.standard_name | slice:0:70) + '...' : opt.standard_name }}\n            </option>\n          </select>\n        </div>\n      </div>\n      <div>\n        <label class=\"checkbox\">\n          <span class=\"checkbox__input\">\n            <input type=\"checkbox\" name=\"is_active_checked\" [(ngModel)]=\"activeList\"\n              (ngModelChange)=\"getAllSubjectList()\" id=\"is_active_checked\">\n            <span class=\"checkbox__control\">\n              <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                <path fill='none' stroke='currentColor' d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n              </svg>\n            </span>\n          </span>\n        </label>\n      </div>\n      <div>\n        <label class=\"labelactive\">Is&nbsp;Active</label>\n      </div>\n    </div>\n    <div>\n      <input type=\"text\" class=\"mr10 input search\" #searchVal type=\"text\" placeholder=\"Search\" id=\"search\"\n        name=\"searchData \" (keyup)=\"searchInList(searchVal)\">\n      <button class=\"blue_button buttonshadow\" (click)=\"openPopup()\"> Add {{(isLangInstitue != true ) ? 'Subject' :\n        'Course'}}</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"subject\">\n    <div class=\"table_head\" [ngClass]=\"{'school_tbody': schoolModel}\">\n      <div (click)=\"sortTable('subject_id')\" style=\"cursor: pointer;\">ID</div>\n      <div>{{isLangInstitue ? 'Master Course' : 'Standard'}}</div>\n      <div>{{(isLangInstitue != true ) ? 'Subject' : 'Course'}}</div>\n      <div *ngIf=\"!isLangInstitue\">Subject Code</div>\n      <div *ngIf=\"schoolModel\">Total Marks</div>\n      <div *ngIf=\"schoolModel\">Passing Marks</div>\n      <div *ngIf=\"schoolModel\">Optional</div>\n      <div (click)=\"sortTable('created_date')\" style=\"cursor: pointer;\">\n        <i *ngIf=\"sortingDir == 'asc'\" (click)=\"sortTable('created_date')\" class=\"fas fa-caret-up\"\n          style=\"font-family: FontAwesome;\"></i>\n        <i *ngIf=\"sortingDir != 'asc'\" (click)=\"sortTable('created_date')\" class=\"fas fa-caret-down\"\n          style=\"font-family: FontAwesome;\"></i>\n        Added Date\n      </div>\n      <div>Actions</div>\n    </div>\n    <div class=\"scroll\" *ngIf=\"(subjectList.length != 0)\">\n      <div class=\"table_body\" [ngClass]=\"{'school_tbody': schoolModel}\" *ngFor=\"let row of subjectList; let i = index; trackBy: i;\">\n        <div style=\"padding-left: 20px;\">{{row.subject_id}}</div>\n        <div>{{row.standard_name}}</div>\n        <div>{{row.subject_name}}</div>\n        <div *ngIf=\"!isLangInstitue\">{{row.subject_code}}</div>\n        <div *ngIf=\"schoolModel\">{{row.final_marks}}</div>\n        <div *ngIf=\"schoolModel\">{{row.passing_marks}}</div>\n        <div *ngIf=\"schoolModel\">{{row.is_optional}}</div>\n        <div>{{row.created_date | date:'dd-MMM-yy'}}</div>\n        <div class=\"actionImg\">\n          <img src=\"../../../assets/img2/edit.svg\" (click)=\"editSubject(row)\" class=\"mr10 table_action\">\n          <img src=\"../../../assets/img2/delete.svg\" (click)=\"deleteRow(row)\" class=\"table_action\">\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n  <!-- Paginator Here -->\n  <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n      <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [count]=\"totalRow\" [sizeArr]=\"sizeArr\"\n        (sizeChange)=\"updateTableBatchSize($event)\">\n      </pagination>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-subject/course-subject.component.scss":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-subject/course-subject.component.scss ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseSubjectCourseSubjectComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.flexc {\n  display: flex;\n  align-items: center;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: #fff;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n  height: 35px;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n  height: 35px;\n  margin-right: 10px;\n}\n\n.buttonshadow {\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n}\n\ninput:focus,\nselect:focus,\nbutton:focus {\n  outline: none;\n}\n\n.head_padding {\n  padding: 15px 0px;\n}\n\n.main-shadow {\n  border-bottom: 1px solid #EFF0F5;\n  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);*/\n  padding-bottom: 15px;\n}\n\n.w98 {\n  width: 96%;\n  margin: 0px auto;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.page-content {\n  background: #F5F5F5;\n  height: calc(100vh - 60px);\n  padding-top: 16px;\n}\n\n/*54.2 subtract the size of header*/\n\n/*switching tabs*/\n\n.nav-item .nav-link {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n  padding-bottom: 8px;\n  cursor: pointer;\n}\n\n.nav-item .nav-link.active {\n  font-weight: 700;\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin-right: 1rem;\n  margin: -1rem 2.5rem;\n  margin-left: 0rem;\n}\n\n.nav > li {\n  display: inline;\n}\n\n.nav-link:hover,\n.nav-link,\n.nav-link:focus {\n  background-color: transparent;\n}\n\n.nav-link {\n  display: inline;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n/*standard*/\n\n.checkbox {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #fff;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  margin: 2px;\n  transform-origin: bottom left;\n}\n\n.checkbox__input input:checked + .checkbox__control svg {\n  transform: scale(1);\n}\n\n.checkbox__input input:checked + .checkbox__control {\n  background: #109CF1;\n  border-radius: 3px;\n  border: 1px solid #109CF1;\n}\n\n.labelactive {\n  font-weight: normal;\n  font-size: 13px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  margin-left: -10px;\n  color: #334D6E;\n}\n\n.input {\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);\n  background: #FFFFFF;\n  border-radius: 5px;\n  height: 35px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  /* identical to box height */\n  border: none;\n  outline: none;\n  letter-spacing: 0.01em;\n  text-indent: 10px;\n  color: #1A2334;\n}\n\n.search {\n  width: 260px;\n  background-position: 94% center;\n}\n\n.table_head {\n  background: #EFF0F5;\n  border-radius: 2px;\n  height: 50px;\n  display: flex;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 50px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  /* table_black */\n  color: #323C47;\n}\n\n.table_body {\n  display: flex;\n  font-weight: normal;\n  font-size: 12px;\n  min-height: 50px;\n  letter-spacing: 0.01em;\n  border-bottom: 1px solid #EFF0F5;\n  background: #fff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);\n  color: #323C47;\n  padding: 16px 0px;\n}\n\n.table_head > div {\n  padding-left: 20px;\n}\n\n.table_body > div {\n  padding-left: 25px;\n}\n\n.standard .table_head > div:first-child,\n.standard .table_body > div:first-child {\n  width: 10%;\n}\n\n.standard .table_head > div:nth-child(2),\n.standard .table_body > div:nth-child(2) {\n  width: 24%;\n}\n\n.standard .table_head > div:last-child,\n.standard .table_body > div:last-child {\n  width: 90px;\n}\n\n.standard .table_body > div:last-child {\n  justify-content: center;\n  display: flex;\n}\n\n.standard .table_head > div:nth-child(3),\n.standard .table_body > div:nth-child(3) {\n  width: calc((100% - 34%) - 90px);\n}\n\n.scroll {\n  height: calc(100vh - (60px + 16px + 36px + 15px + 32px + 36px + 50px + 42px ));\n  overflow-y: auto;\n  background-color: #fff;\n}\n\n.scroll::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n\n.scroll::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n\n.scroll::-webkit-scrollbar-thumb {\n  background: #109CF173;\n}\n\n/* Handle on hover */\n\n.scroll::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.table_action {\n  cursor: pointer;\n}\n\n.pagignation {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 400;\n  font-size: 13px;\n  padding: 16px 0px;\n  /* identical to box height, or 154% */\n  letter-spacing: 0.01em;\n  width: 100%;\n  /*subtract width of sidebar*/\n  color: #000000;\n}\n\n.pagignation > div:first-child {\n  width: 40%;\n}\n\n.pagignation select {\n  background: #FFFFFF;\n  border: 1px solid #D5D0D0;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 20px;\n  /*width: 63px;*/\n  /*height: 35px;*/\n  /* identical to box height, or 154% */\n  letter-spacing: 0.01em;\n  color: #0079FF;\n  cursor: pointer;\n}\n\n.selected_no {\n  font-weight: 400;\n  font-size: 13px;\n  padding: 0px 4px;\n  line-height: 20px;\n  border-radius: 50%;\n  /* identical to box height, or 154% */\n  background: #0079FF;\n  letter-spacing: 0.01em;\n  margin-left: 20px;\n  color: #FFFFFF;\n}\n\n.click {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  /* identical to box height, or 154% */\n  margin-left: 10px;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  color: #0079FF;\n}\n\n.pagignation p span {\n  cursor: pointer;\n  margin-left: 10px;\n}\n\n.pagignation p {\n  margin-bottom: 0px;\n}\n\n.modal-title {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.modal p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin-bottom: 10px;\n}\n\n.modal input {\n  background: #FFFFFF;\n  border: 1px solid #C4CACE;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  width: 100%;\n  /* table_black */\n  color: #323C47;\n}\n\n.modal input:placeholder {\n  color: #8e939a;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 600px;\n  }\n}\n\n.modal .info {\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 11px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  margin-top: 10px;\n  /* table_black */\n  color: #323C47;\n}\n\n.red {\n  color: #E51515;\n}\n\n/*subject*/\n\n.subject .table_head > div,\n.subject .table_body > div {\n  width: calc(((100% - 35%) - 90px) / 2);\n}\n\n.school_tbody > div {\n  width: calc(((100% - 35%) - 90px) / 5) !important;\n}\n\n.subject .table_head > div:first-child,\n.subject .table_body > div:first-child,\n.subject .table_head > div:nth-child(5),\n.subject .table_body > div:nth-child(5) {\n  width: 10%;\n}\n\n.subject .table_head > div:nth-child(4),\n.subject .table_body > div:nth-child(4) {\n  width: 15%;\n}\n\n.subject .table_head > div:last-child,\n.subject .table_body > div:last-child {\n  width: 90px;\n}\n\n.subject .table_body > div:last-child,\n.subject .table_head > div:last-child {\n  justify-content: center;\n  display: flex;\n}\n\n.space16 {\n  margin-top: 16px;\n}\n\n.modal-dialog {\n  margin: 5% auto;\n}\n\n.stdSelect {\n  width: 200px;\n  padding: 7px 0px;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 400;\n  border-radius: 4px;\n  background-color: #fff;\n  color: #6B5D5D;\n  text-indent: 5px;\n  height: 37px;\n}\n\n.actionImg img {\n  height: 20px;\n  width: 18px;\n}\n\n.oldUI {\n  /* ===============================header colors=======================*/\n}\n\n.oldUI .table-format-first .table-responsive table th,\n.oldUI .table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n\n.oldUI .table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n\n.oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n\n.oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n\n.oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n\n.oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n\n.oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n\n.oldUI .table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n\n.oldUI .table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.oldUI .table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n\n.oldUI .table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n\n.oldUI .table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.oldUI .table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n\n.oldUI .table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n\n.oldUI .courses-list-table {\n  max-height: 72vh;\n  min-height: 72vh;\n  overflow: auto;\n}\n\n.oldUI .courses-list-table ::-webkit-scrollbar {\n  display: block;\n}\n\n.oldUI .searchBox {\n  border: 1px solid lightgrey;\n  padding: 7px;\n  border-radius: 4px;\n}\n\n.oldUI .btn {\n  background: #0084f6;\n  color: white;\n}\n\n.oldUI th {\n  background-color: #e0eaec;\n  color: black;\n}\n\n.oldUI tr {\n  border-radius: 12px;\n  border-left: 5px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.oldUI .tableBodyScroll tbody {\n  display: block;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.oldUI table th, .oldUI table td {\n  text-align: left;\n}\n\n.oldUI .tableBodyScroll thead,\n.oldUI tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.oldUI table thead tr th {\n  padding: 15px;\n}\n\n.oldUI table tbody tr td {\n  padding: 10px;\n}\n\n.oldUI table tbody tr td .editOptions li {\n  display: inline-block;\n}\n\n.oldUI table tbody tr td th {\n  padding: 15px;\n}\n\n.oldUI table tbody tr .field-wrapper {\n  padding: 0px !important;\n}\n\n.oldUI table tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\n\n.oldUI table tbody .displayComp {\n  height: 0%;\n}\n\n.oldUI table tbody .displayComp .edit-comp {\n  display: none;\n}\n\n.oldUI table tbody .editComp .view-comp {\n  display: none;\n}\n\n.oldUI .marginExtra {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.oldUI .table-change table thead tr th {\n  padding: 10px 5px;\n  font-weight: 600;\n}\n\n.oldUI .table-change table tbody tr td {\n  padding: 5px 5px;\n  font-size: 12px;\n}\n\n.oldUI .pagination {\n  padding: 0px;\n}\n\n.oldUI .create-standard-form {\n  margin: 10px 0;\n  padding: 5px;\n  border-bottom: 1px solid #d8d8d8;\n}\n\n.oldUI .create-standard-form .field-checkbox-wrapper {\n  margin-top: 15px;\n}\n\n.oldUI .create-standard-form .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 12px;\n  font-weight: 600;\n  margin-left: 10px;\n  color: #777;\n}\n\n.oldUI .create-standard-form .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n\n.oldUI .create-standard-form .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 24px;\n  height: 24px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform: scale(0.7);\n}\n\n.oldUI .create-standard-form .field-checkbox-wrapper .form-checkbox + label:before {\n  width: 13px;\n  height: 5px;\n  left: 6px;\n  top: 9px;\n  transform: rotate(-45deg) scale(0.7);\n}\n\n.oldUI .create-standard-form .field-wrapper {\n  margin-top: -10px;\n}\n\n.oldUI .create-standard-form .field-wrapper label {\n  left: 20px;\n  top: 25px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.oldUI .create-standard-form .field-wrapper.has-value .form-ctrl + label,\n.oldUI .create-standard-form .field-wrapper .form-ctrl:focus + label {\n  top: 6px;\n  left: 20px;\n}\n\n.oldUI .create-standard-form .form-ctrl {\n  background: white;\n}\n\n.oldUI .create-standard-form p {\n  margin-top: 5px;\n  font-size: 10px;\n  color: #979797;\n}\n\n.oldUI .cancel-btn {\n  border-radius: 4px;\n  height: 30px;\n  padding: 4px 10px;\n}\n\n.oldUI .add-edit {\n  margin-bottom: 0;\n  margin-top: 10px;\n}\n\n.oldUI .add-edit i {\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  line-height: 1rem;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n\n.oldUI .add-edit span {\n  display: inline-block;\n}\n\n.oldUI .add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 22px;\n}\n\n.oldUI .add-edit a {\n  cursor: pointer;\n}\n\n.oldUI .closeBtnClass {\n  line-height: 0.6rem !important;\n}\n\n.oldUI td {\n  font-size: 12px;\n  padding: 0;\n}\n\n.oldUI tr th {\n  padding: 10px;\n}\n\n.oldUI .search-filter-wrapper .normal-field {\n  padding: 4px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.oldUI .search-filter-wrapper .field-wrapper {\n  position: relative;\n  padding-top: 0px !important;\n  width: 30%;\n  float: left !important;\n}\n\n.oldUI .search-filter-wrapper .field-wrapper .form-ctrl {\n  font: 400 12px 'Open sans',sans-serif;\n  border-top: none !important;\n  border-right: none !important;\n  border-left: none !important;\n}\n\n.oldUI .search-filter-wrapper .field-wrapper label {\n  position: absolute !important;\n  left: 10% !important;\n  top: 1% !important;\n}\n\n.oldUI .search-filter-wrapper .field-wrapper label:after {\n  left: 85% !important;\n  top: 10px !important;\n}\n\n.oldUI .skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 80%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n\n.oldUI .skeleton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n\n@-webkit-keyframes progress {\n  0% {\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes progress {\n  0% {\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvY291cnNlLXN1YmplY3QvY291cnNlLXN1YmplY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FBQ2Y7O0FBRUU7RUFDRSxvQ0FBb0M7QUFDeEM7O0FBRUU7RUFDRSxhQUFhO0FBQ2pCOztBQUVFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUN2Qjs7QUFFRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDbEM7O0FBRUU7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDaEI7O0FBRUU7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFDdEI7O0FBRUU7RUFDRSwyQ0FBMkM7QUFDL0M7O0FBRUU7OztFQUdFLGFBQWE7QUFDakI7O0FBRUU7RUFDRSxpQkFDRjtBQUFGOztBQUVFO0VBQ0UsZ0NBQWdDO0VBQ2hDLCtDQUFBO0VBQ0Esb0JBQW9CO0FBQ3hCOztBQUVFO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNwQjs7QUFFRTtFQUNFLGtCQUFrQjtBQUN0Qjs7QUFFRTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVFLG1DQUFBOztBQUVBLGlCQUFBOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFFQSxzQkFBc0I7RUFFdEIsY0FBYztFQUNkLG1CQUFtQjtFQUNu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OFFVLG9CQUFvQjtFQUNwQixvQkFBb0I7QUErRWhDOztBQTlWRTtFQXVSRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBUGdCO0VBUWhCLGtCQUFrQjtBQTJFdEI7O0FBdldFO0VBOFJNLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJEQUE4RTtFQUM5RSxtREFBMkM7VUFBM0MsMkNBQTJDO0FBNkVuRDs7QUF6RUE7RUFDSTtJQUNJLG1DQUFtQztFQTRFekM7RUExRUU7SUFDSSxrQ0FBa0M7RUE0RXhDO0FBQ0Y7O0FBbEZBO0VBQ0k7SUFDSSxtQ0FBbUM7RUE0RXpDO0VBMUVFO0lBQ0ksa0NBQWtDO0VBNEV4QztBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvY291cnNlLXN1YmplY3QvY291cnNlLXN1YmplY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLmZsZXhjIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICBcbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuICBcbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEwOUNGMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBcbiAgLmJ1dHRvbnNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXMsXG4gIHNlbGVjdDpmb2N1cyxcbiAgYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIFxuICAuaGVhZF9wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweFxuICB9XG4gIFxuICAubWFpbi1zaGFkb3cge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZGMEY1O1xuICAgIC8qYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyKTsqL1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG4gIFxuICAudzk4IHtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgXG4gIC5tcjEwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gIH1cbiAgXG4gIC8qNTQuMiBzdWJ0cmFjdCB0aGUgc2l6ZSBvZiBoZWFkZXIqL1xuICBcbiAgLypzd2l0Y2hpbmcgdGFicyovXG4gIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICAgIGNvbG9yOiAjMUEyMzM0O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOUNGMSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5uYXYtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMS41cmVtIDByZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1hcmdpbjogLTFyZW0gMi41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICB9XG4gIFxuICAubmF2PmxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgXG4gIC5uYXYtbGluazpob3ZlcixcbiAgLm5hdi1saW5rLFxuICAubmF2LWxpbms6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAubmF2LWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICBcbiAgLm5hdi1pdGVtIHtcbiAgICAuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgLmxpc3Q+bGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4IDBweDtcbiAgICBtYXJnaW46IDdweCAwcHg7XG4gIH1cbiAgXG4gIC5saXN0PmxpPmE+c3BhbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICB9XG4gIFxuICAubGlzdD5saSBpbWcge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG4gIFxuICAvKnN0YW5kYXJkKi9cbiAgXG4gIC5jaGVja2JveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gICAgZ3JpZC1nYXA6IDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICB9XG4gIFxuICAuY2hlY2tib3hfX2lucHV0IGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwZW07XG4gICAgaGVpZ2h0OiAwZW07XG4gIH1cbiAgXG4gIC5jaGVja2JveF9fY29udHJvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgd2lkdGg6IDAuNWVtO1xuICAgIGhlaWdodDogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4xZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JCQjJCMjtcbiAgICA7XG4gIH1cbiAgXG4gIC5jaGVja2JveF9faW5wdXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjaGVja2JveFwiO1xuICB9XG4gIFxuICAuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluIDI1bXM7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBzdHJva2Utd2lkdGg6IDQ7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gIH1cbiAgXG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZCsuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIFxuICAuY2hlY2tib3hfX2lucHV0IGlucHV0OmNoZWNrZWQrLmNoZWNrYm94X19jb250cm9sIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTA5Q0YxO1xuICB9XG4gIFxuICAubGFiZWxhY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICBcbiAgLmlucHV0IHtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIFxuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgY29sb3I6ICMxQTIzMzQ7XG4gIFxuICB9XG4gIFxuICAuc2VhcmNoIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdfbmV3L3NlYXJjaC5zdmcpIG5vLXJlcGVhdCAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk0JSBjZW50ZXI7XG4gIH1cbiAgXG4gIC50YWJsZV9oZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUZGMEY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBcbiAgICAvKiB0YWJsZV9ibGFjayAqL1xuICBcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICBcbiAgLnRhYmxlX2JvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZGMEY1O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgXG4gIH1cbiAgXG4gIC50YWJsZV9oZWFkPmRpdntcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAudGFibGVfYm9keT5kaXYge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgfVxuICBcbiAgLnN0YW5kYXJkIC50YWJsZV9oZWFkPmRpdjpmaXJzdC1jaGlsZCxcbiAgLnN0YW5kYXJkIC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEwJVxuICB9XG4gIFxuICAuc3RhbmRhcmQgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgyKSxcbiAgLnN0YW5kYXJkIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMikge1xuICAgIHdpZHRoOiAyNCVcbiAgfVxuICBcbiAgLnN0YW5kYXJkIC50YWJsZV9oZWFkPmRpdjpsYXN0LWNoaWxkLFxuICAuc3RhbmRhcmQgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiA5MHB4O1xuICBcbiAgfVxuICBcbiAgLnN0YW5kYXJkIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxkIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuc3RhbmRhcmQgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgzKSxcbiAgLnN0YW5kYXJkIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMykge1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMzQlKSAtIDkwcHgpO1xuICB9XG4gIFxuICAuc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoNjBweCArIDE2cHggKyAzNnB4ICsgMTVweCArIDMycHggKyAzNnB4ICsgNTBweCArIDQycHggKSk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cbiAgXG4gIC8qIFRyYWNrICovXG4gIC5zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG4gIFxuICAvKiBIYW5kbGUgKi9cbiAgLnNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICMxMDlDRjE3MztcbiAgfVxuICBcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gIC5zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICB9XG4gIFxuICAudGFibGVfYWN0aW9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5wYWdpZ25hdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6MTZweCAwcHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE1NCUgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qc3VidHJhY3Qgd2lkdGggb2Ygc2lkZWJhciovXG4gICAgY29sb3I6ICMwMDAwMDA7IFxuICB9XG4gIFxuICAucGFnaWduYXRpb24+ZGl2OmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIFxuICAucGFnaWduYXRpb24gc2VsZWN0IHtcbiAgXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDVEMEQwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIC8qd2lkdGg6IDYzcHg7Ki9cbiAgICAvKmhlaWdodDogMzVweDsqL1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxNTQlICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzAwNzlGRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5zZWxlY3RlZF9ubyB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogMHB4IDRweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE1NCUgKi9cbiAgICBiYWNrZ3JvdW5kOiAjMDA3OUZGO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgXG4gIC5jbGljayB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE1NCUgKi9cbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzAwNzlGRjtcbiAgfVxuICBcbiAgLnBhZ2lnbmF0aW9uIHAgc3BhbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICAucGFnaWduYXRpb24gcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIFxuICAubW9kYWwtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICAgIGNvbG9yOiAjMzM0RDZFO1xuICB9XG4gIFxuICAubW9kYWwgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgXG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLm1vZGFsIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDNENBQ0U7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiB0YWJsZV9ibGFjayAqL1xuICBcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICBcbiAgLm1vZGFsIGlucHV0OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzhlOTM5YVxuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAubW9kYWwtZGlhbG9nIHtcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgfVxuICB9XG4gIFxuICAubW9kYWwgLmluZm8ge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLyogdGFibGVfYmxhY2sgKi9cbiAgXG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgXG4gIC5yZWQge1xuICAgIGNvbG9yOiAjRTUxNTE1O1xuICB9XG4gIFxuICAvKnN1YmplY3QqL1xuICAuc3ViamVjdCAudGFibGVfaGVhZD5kaXYsXG4gIC5zdWJqZWN0IC50YWJsZV9ib2R5PmRpdiB7XG4gICAgd2lkdGg6IGNhbGMoKCgxMDAlIC0gMzUlKSAtIDkwcHgpIC8gMik7XG4gIH1cblxuICAuc2Nob29sX3Rib2R5ID5kaXYge1xuICAgIHdpZHRoOiBjYWxjKCgoMTAwJSAtIDM1JSkgLSA5MHB4KSAvIDUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5zdWJqZWN0IC50YWJsZV9oZWFkPmRpdjpmaXJzdC1jaGlsZCxcbiAgLnN1YmplY3QgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxkLFxuICAuc3ViamVjdCAudGFibGVfaGVhZD5kaXY6bnRoLWNoaWxkKDUpLFxuICAuc3ViamVjdCAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDUpIHtcbiAgICB3aWR0aDogMTAlXG4gIH1cbiAgXG4gIC5zdWJqZWN0IC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoNCksXG4gIC5zdWJqZWN0IC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoNCkge1xuICAgIHdpZHRoOiAxNSVcbiAgfVxuICBcbiAgLnN1YmplY3QgLnRhYmxlX2hlYWQ+ZGl2Omxhc3QtY2hpbGQsXG4gIC5zdWJqZWN0IC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogOTBweDtcbiAgXG4gIH1cbiAgXG4gIC5zdWJqZWN0IC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxkLFxuICAuc3ViamVjdCAudGFibGVfaGVhZD5kaXY6bGFzdC1jaGlsZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuc3BhY2UxNntcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIG1hcmdpbjogNSUgYXV0bztcbiAgfVxuICAuc3RkU2VsZWN0e1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICAvLyBtYXJnaW46IDhweCAwO1xuICAgIHBhZGRpbmc6IDdweCAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YwRURFRDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzZCNUQ1RDtcbiAgICB0ZXh0LWluZGVudDogNXB4O1xuICAgIGhlaWdodDogMzdweDtcbiAgfVxuICAuYWN0aW9uSW1nIHtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgfVxuICB9XG5cbiAgLm9sZFVJIHtcbiAgICBAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcblxuLmNvdXJzZXMtbGlzdC10YWJsZXtcbiAgICBtYXgtaGVpZ2h0OiA3MnZoO1xuICAgIG1pbi1oZWlnaHQ6IDcydmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbi5zZWFyY2hCb3h7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbnRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGVhZWM7XG4gICAgY29sb3I6IGJsYWNrO1xufVxudHIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTBlYWVjO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgLy8gbWluLWhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDFweCBzb2xpZCByZ2JhKDIxMSwgMjEyLCAyMTMsIDAuNSk7XG59XG50YWJsZSB0aCwgdGFibGUgdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGFibGVCb2R5U2Nyb2xsIHRoZWFkLFxudGJvZHkgdHIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG50YWJsZSB7XG4gICAgdGhlYWR7XG4gICAgICAgIHRye1xuICAgICAgICAgICAgdGh7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAuZWRpdE9wdGlvbnMgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGlzcGxheUNvbXAge1xuICAgICAgICAgICBoZWlnaHQ6IDAlO1xuICAgICAgICAgICAgLnZpZXctY29tcCB7fVxuICAgICAgICAgICAgLmVkaXQtY29tcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5lZGl0Q29tcCB7XG4gICAgICAgICAgICAudmlldy1jb21wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZWRpdC1jb21wIHt9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tYXJnaW5FeHRyYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4udGFibGUtY2hhbmdlIHtcbiAgICB0YWJsZSB7XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGFnaW5hdGlvbntcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmNyZWF0ZS1zdGFuZGFyZC1mb3JtIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAmK2xhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6Y2hlY2tlZCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiA2cHg7XG4gICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMC43KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICYuaGFzLXZhbHVlIC5mb3JtLWN0cmwrbGFiZWwsXG4gICAgICAgIC5mb3JtLWN0cmw6Zm9jdXMrbGFiZWwge1xuICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb3JtLWN0cmwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgfVxufVxuXG4uY2FuY2VsLWJ0bntcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xufVxuLmFkZC1lZGl0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaSB7XG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5leHBlbmQtYm94IHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLmNsb3NlQnRuQ2xhc3Mge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjZyZW0gIWltcG9ydGFudDtcbn1cbnRke1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAwO1xufVxudHIgdGgge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgICAubm9ybWFsLWZpZWxkIHtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgIGZvbnQ6IDQwMCAxMnB4ICdPcGVuIHNhbnMnLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpZWxkLXdyYXBwZXIgbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogMSUgIWltcG9ydGFudDtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBsZWZ0OiA4NSUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4kY29sb3ItYmFzZTogI2VmZWZlZjtcbiRjb2xvci1oaWdobGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLWJhc2UsIDclKTtcbi5za2VsZXRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWJhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRjb2xvci1iYXNlLCAkY29sb3ItaGlnaGxpZ2h0LCAkY29sb3ItYmFzZSk7XG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB9XG59XG5cbiAgfSIsIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-subject/course-subject.component.ts":
    /*!***************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-subject/course-subject.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: CourseSubjectComponent */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseSubjectCourseSubjectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseSubjectComponent", function () {
        return CourseSubjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_course_services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/course-services/subject.service */
      "./src/app/services/course-services/subject.service.ts");
      /* harmony import */


      var _utils_commonUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../utils/commonUtils */
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

      var CourseSubjectComponent =
      /** @class */
      function () {
        var CourseSubjectComponent = /*#__PURE__*/function () {
          function CourseSubjectComponent(apiService, toastCtrl, auth) {
            _classCallCheck(this, CourseSubjectComponent);

            this.apiService = apiService;
            this.toastCtrl = toastCtrl;
            this.auth = auth;
            this.createNewSubject = false;
            this.no_subject_name = false;
            this.PageIndex = 1;
            this.displayBatchSize = 25;
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.subjectList = [];
            this.standardList = [];
            this.newSubjectDetails = {
              is_active: "Y",
              standard_id: "-1",
              subject_name: '',
              subject_code: '',
              is_optional: false,
              total_marks: '',
              passing_marks: ''
            };
            this.searchedData = [];
            this.searchDataFlag = false;
            this.dataStatus = 1;
            this.dummyArr = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
            this.columnMaps = [0, 1, 2, 3, 4, 5];
            this.isLangInstitue = false;
            this.sortingDir = "asc";
            this.subjectCodeCharLimit = 4;
            this.activeList = true;
            this.schoolModel = false;
            this.isNewSubjectAdd = true;
            this.subject_id = -1;
            this.standard_id_filter = '-1'; //Abhishek kumar ​102047 Kohima college

            if (sessionStorage.getItem('institute_id') == 102047 + "") this.subjectCodeCharLimit = 8;
          }

          _createClass(CourseSubjectComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.schoolModel = this.auth.schoolModel.value;
              this.checkInstituteType();
              this.getAllSubjectList();
              this.getAllStandardSubjectList();
            }
          }, {
            key: "getAllSubjectList",
            value: function getAllSubjectList() {
              var _this = this;

              this.PageIndex = 1;
              this.auth.showLoader();
              this.searchDataFlag = false;
              this.apiService.getAllSubjectListFromServer(this.standard_id_filter).subscribe(function (data) {
                console.log("getAllSubjectList", data);
                data.sort(function (a, b) {
                  return moment__WEBPACK_IMPORTED_MODULE_1__(b.created_date).unix() - moment__WEBPACK_IMPORTED_MODULE_1__(a.created_date).unix();
                });

                if (_this.activeList == true) {
                  _this.subjectListDataSource = [];

                  for (var i = 0; i < data.length; i++) {
                    if (data[i].is_active === "Y") {
                      _this.subjectListDataSource.push(data[i]);
                    }
                  } // this.subjectListDataSource = data;


                  _this.totalRow = _this.subjectListDataSource.length;

                  _this.fetchTableDataByPage(_this.PageIndex);

                  _this.auth.hideLoader();

                  _this.dataStatus = 2;
                } else if (_this.activeList == false) {
                  _this.subjectListDataSource = [];

                  for (var _i = 0; _i < data.length; _i++) {
                    if (data[_i].is_active === "N") {
                      _this.subjectListDataSource.push(data[_i]);
                    }
                  } // this.subjectListDataSource = data;


                  _this.totalRow = _this.subjectListDataSource.length;

                  _this.fetchTableDataByPage(_this.PageIndex);

                  _this.auth.hideLoader();

                  _this.dataStatus = 2;
                }
              }, function (error) {});
            }
          }, {
            key: "editRow",
            value: function editRow(id) {
              document.getElementById(("row" + id).toString()).classList.remove('displayComp');
              document.getElementById(("row" + id).toString()).classList.add('editComp');
            }
          }, {
            key: "cancelRow",
            value: function cancelRow(id) {
              document.getElementById(("row" + id).toString()).classList.remove('editComp');
              document.getElementById(("row" + id).toString()).classList.add('displayComp');
              this.getAllSubjectList();
            }
          }, {
            key: "editSubject",
            value: function editSubject(data) {
              console.log(data);
              $('#addUpdateSubjectdialog').modal('show');
              this.isNewSubjectAdd = false;
              this.newSubjectDetails.standard_id = data.standard_id;
              this.newSubjectDetails.subject_name = data.subject_name;
              this.newSubjectDetails.is_active = data.is_active == 'Y' ? true : false;

              if (!this.isLangInstitue) {
                this.newSubjectDetails.subject_code = data.subject_code;
              }

              if (this.schoolModel) {
                this.newSubjectDetails.is_optional = data.is_optional == "Y" ? true : false;
                this.newSubjectDetails.total_marks = data.final_marks;
                this.newSubjectDetails.passing_marks = data.passing_marks;
              }

              this.subject_id = data.subject_id;
            }
          }, {
            key: "updateRow",
            value: function updateRow(row, id) {
              var _this2 = this;

              var data = {};
              data.is_active = row.is_active;
              data.subject_name = row.subject_name;
              data.institution_id = row.institution_id;
              data.is_optional = row.is_optional;

              if (!this.isLangInstitue) {
                data.subject_code = row.subject_code.toUpperCase();
              }

              if (data.subject_name == "" && data.data.subject_name == null) {
                var msg = {
                  type: "error",
                  title: "",
                  body: "Please enter Subject Name"
                };
                this.toastCtrl.popToast(msg);
                return;
              } else if (!this.isLangInstitue && data.subject_code.trim() == '') {
                var _msg = {
                  type: "error",
                  title: "",
                  body: "Please enter Subject Code"
                };
                this.toastCtrl.popToast(_msg);
                return;
              }

              this.apiService.updateSubjectRowData(data, row.subject_id).subscribe(function (data) {
                var msg = {
                  type: "success",
                  title: "",
                  body: "Subject Updated Successfully!"
                };

                _this2.toastCtrl.popToast(msg);

                _this2.cancelRow(id);
              }, function (error) {
                var data = {
                  type: "error",
                  title: "",
                  body: error.error.message
                };

                _this2.toastCtrl.popToast(data);
              });
            }
          }, {
            key: "updateSubject",
            value: function updateSubject() {
              var _this3 = this;

              if (this.validateSchoolModelField()) {
                this.auth.showLoader();
                this.apiService.updateSubjectRowData(this.preparedSubjectRequestPayload(), this.subject_id).subscribe(function (data) {
                  _this3.auth.hideLoader();

                  var msg = {
                    type: "success",
                    title: "",
                    body: "Subject Updated Successfully!"
                  };

                  _this3.toastCtrl.popToast(msg);

                  $('#addUpdateSubjectdialog').modal('hide');

                  _this3.getAllSubjectList();

                  _this3.clearData();
                }, function (error) {
                  _this3.auth.hideLoader();

                  var data = {
                    type: "error",
                    title: "",
                    body: error.error.message
                  };

                  _this3.toastCtrl.popToast(data);
                });
              }
            }
          }, {
            key: "getAllStandardSubjectList",
            value: function getAllStandardSubjectList() {
              var _this4 = this;

              this.apiService.getAllStandardName().subscribe(function (res) {
                console.log("getAllStandardSubjectList", res);
                _this4.standardList = res;
              }, function (error) {});
            }
          }, {
            key: "addNewSubject",
            value: function addNewSubject() {
              var _this5 = this;

              if (this.validateUserInput()) {
                this.auth.showLoader();
                this.apiService.createNewSubject(this.preparedSubjectRequestPayload()).subscribe(function (res) {
                  _this5.auth.hideLoader();

                  _this5.successMsg();
                }, function (err) {
                  _this5.auth.hideLoader();

                  var data = {
                    type: "error",
                    title: "",
                    body: err.error.message
                  };

                  _this5.toastCtrl.popToast(data);
                });
              }
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
            key: "successMsg",
            value: function successMsg() {
              var msg = "";

              if (this.isLangInstitue) {
                msg = "Course created successfully!";
              } else {
                msg = "Subject created successfully";
              }

              var data = {
                type: "success",
                title: "",
                body: msg
              };
              this.toastCtrl.popToast(data);
              $('#addUpdateSubjectdialog').modal('hide');
              this.getAllSubjectList();
              this.clearData();
            }
          }, {
            key: "validateUserInput",
            value: function validateUserInput() {
              if (this.newSubjectDetails.standard_id == '-1') {
                var data = {
                  type: "error",
                  title: "",
                  body: "Please select standard!"
                };
                this.toastCtrl.popToast(data);
                return false;
              }

              if (_utils_commonUtils__WEBPACK_IMPORTED_MODULE_5__["default"].isEmpty(this.newSubjectDetails.subject_name)) {
                var _data = {
                  type: "error",
                  title: "",
                  body: "Please enter subject name!"
                };
                this.toastCtrl.popToast(_data);
                return false;
              }

              if (!this.isLangInstitue && _utils_commonUtils__WEBPACK_IMPORTED_MODULE_5__["default"].isEmpty(this.newSubjectDetails.subject_code)) {
                var _data2 = {
                  type: "error",
                  title: "",
                  body: "Please enter subject code!"
                };
                this.toastCtrl.popToast(_data2);
                return false;
              }

              return this.validateSchoolModelField();
            }
          }, {
            key: "validateSchoolModelField",
            value: function validateSchoolModelField() {
              if (this.schoolModel) {
                if (Number(this.newSubjectDetails.total_marks) <= 0) {
                  var data = {
                    type: "error",
                    title: "",
                    body: "Please enter total marks!"
                  };
                  this.toastCtrl.popToast(data);
                  return false;
                }

                if (Number(this.newSubjectDetails.passing_marks <= 0)) {
                  var _data3 = {
                    type: "error",
                    title: "",
                    body: "Please enter passing marks!"
                  };
                  this.toastCtrl.popToast(_data3);
                  return false;
                }

                if (Number(this.newSubjectDetails.total_marks) < Number(this.newSubjectDetails.passing_marks)) {
                  var _data4 = {
                    type: "error",
                    title: "",
                    body: "Total marks can't be less than passing marks!"
                  };
                  this.toastCtrl.popToast(_data4);
                  return false;
                }
              }

              return true;
            }
          }, {
            key: "searchInList",
            value: function searchInList(element) {
              if (element.value != "" && element.value != null) {
                var searchData = this.subjectListDataSource.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(element.value.toLowerCase());
                  });
                });
                this.searchedData = searchData;
                this.searchDataFlag = true;
                this.totalRow = searchData.length;
                this.PageIndex = 1;
                this.fetchTableDataByPage(this.PageIndex);
              } else {
                this.searchDataFlag = false;
                this.fetchTableDataByPage(this.PageIndex);
                this.totalRow = this.subjectListDataSource.length;
              }
            }
            /* Function to set the createNewStandard View On/Off */

          }, {
            key: "toggleCreateNewSubject",
            value: function toggleCreateNewSubject() {
              if (this.createNewSubject == false) {
                this.createNewSubject = true;
                document.getElementById('showCloseBtnSubject').style.display = '';
                document.getElementById('showAddBtnSubject').style.display = 'none';
              } else {
                this.no_subject_name = false;
                this.createNewSubject = false;
                document.getElementById('showCloseBtnSubject').style.display = 'none';
                document.getElementById('showAddBtnSubject').style.display = '';
                this.newSubjectDetails = {
                  is_active: "Y",
                  standard_id: "",
                  subject_name: '',
                  subject_code: '',
                  is_optional: false
                };
              }
            }
          }, {
            key: "deleteRow",
            value: function deleteRow(row) {
              var _this6 = this;

              this.auth.showLoader();
              this.apiService.deleteSubject(row.subject_id).subscribe(function (res) {
                _this6.auth.hideLoader();

                var data = {
                  type: "success",
                  title: '',
                  body: "Deleted Successfully"
                };

                _this6.toastCtrl.popToast(data);

                _this6.getAllSubjectList();
              }, function (err) {
                _this6.auth.hideLoader();

                var data = {
                  type: "error",
                  title: "",
                  body: err.error.message
                };

                _this6.toastCtrl.popToast(data);
              });
            } // pagination functions

          }, {
            key: "fetchTableDataByPage",
            value: function fetchTableDataByPage(index) {
              this.PageIndex = index;
              var startindex = this.displayBatchSize * (index - 1);
              this.subjectList = this.getDataFromDataSource(startindex);
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
                data = this.searchedData.slice(startindex, startindex + this.displayBatchSize);
              } else {
                data = this.subjectListDataSource.slice(startindex, startindex + this.displayBatchSize);
              }

              return data;
            }
          }, {
            key: "updateTableBatchSize",
            value: function updateTableBatchSize(event) {
              this.PageIndex = 1;
              this.displayBatchSize = event;
              this.fetchTableDataByPage(this.PageIndex);
            }
          }, {
            key: "sortTable",
            value: function sortTable(str) {
              if (str == "standard_name" || str == "subject_name" || str == "is_active") {
                this.subjectListDataSource.sort(function (a, b) {
                  var nameA = a[str].toUpperCase(); // ignore upper and lowercase

                  var nameB = b[str].toUpperCase(); // ignore upper and lowercase

                  if (nameA < nameB) {
                    return -1;
                  }

                  if (nameA > nameB) {
                    return 1;
                  } // names must be equal


                  return 0;
                });
              } else if (str == "subject_id") {
                this.subjectListDataSource.sort(function (a, b) {
                  return a[str] - b[str];
                });
              } else if (str == "created_date") {
                this.subjectListDataSource.sort(function (a, b) {
                  return moment__WEBPACK_IMPORTED_MODULE_1__(a[str]).unix() - moment__WEBPACK_IMPORTED_MODULE_1__(b[str]).unix();
                });
              }

              if (this.sortingDir == "asc") {
                this.sortingDir = "dec";
              } else {
                this.sortingDir = "asc";
                this.subjectListDataSource = this.subjectListDataSource.reverse();
              }

              this.fetchTableDataByPage(this.PageIndex);
            }
          }, {
            key: "rowSelectEvent",
            value: function rowSelectEvent(i) {
              this.selectedRow = i;
            }
          }, {
            key: "checkInstituteType",
            value: function checkInstituteType() {
              var _this7 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this7.isLangInstitue = true;
                } else {
                  _this7.isLangInstitue = false;
                }
              });
            }
          }, {
            key: "openPopup",
            value: function openPopup() {
              $('#addUpdateSubjectdialog').modal('show');
              this.isNewSubjectAdd = true;
              this.clearData();
            }
          }, {
            key: "clearData",
            value: function clearData() {
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
          }]);

          return CourseSubjectComponent;
        }();

        CourseSubjectComponent.ctorParameters = function () {
          return [{
            type: _services_course_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectApiService"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        CourseSubjectComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-course-subject',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./course-subject.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-subject/course-subject.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./course-subject.component.scss */
          "./src/app/components/course-module/create-course/course-subject/course-subject.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_course_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectApiService"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], CourseSubjectComponent);
        return CourseSubjectComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-subject/course-subject.module.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-subject/course-subject.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: CourseSubjectModule */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseSubjectCourseSubjectModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseSubjectModule", function () {
        return CourseSubjectModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _course_subject_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./course-subject.component */
      "./src/app/components/course-module/create-course/course-subject/course-subject.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _services_course_services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/course-services/subject.service */
      "./src/app/services/course-services/subject.service.ts");
      /* harmony import */


      var _course_subject_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./course-subject.routing.module */
      "./src/app/components/course-module/create-course/course-subject/course-subject.routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _create_course_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../create-course.module */
      "./src/app/components/course-module/create-course/create-course.module.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';


      var CourseSubjectModule =
      /** @class */
      function () {
        var CourseSubjectModule = function CourseSubjectModule() {
          _classCallCheck(this, CourseSubjectModule);
        };

        CourseSubjectModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], // BsDatepickerModule,
          _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _course_subject_routing_module__WEBPACK_IMPORTED_MODULE_4__["CourseSubjectRouting"], _create_course_module__WEBPACK_IMPORTED_MODULE_7__["CreateCourseModule"]],
          exports: [],
          declarations: [_course_subject_component__WEBPACK_IMPORTED_MODULE_1__["CourseSubjectComponent"]],
          providers: [_services_course_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectApiService"]]
        })], CourseSubjectModule);
        return CourseSubjectModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-subject/course-subject.routing.module.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-subject/course-subject.routing.module.ts ***!
      \********************************************************************************************************/

    /*! exports provided: CourseSubjectRouting */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseSubjectCourseSubjectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseSubjectRouting", function () {
        return CourseSubjectRouting;
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


      var _course_subject_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./course-subject.component */
      "./src/app/components/course-module/create-course/course-subject/course-subject.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CourseSubjectRouting =
      /** @class */
      function () {
        var CourseSubjectRouting = function CourseSubjectRouting() {
          _classCallCheck(this, CourseSubjectRouting);
        };

        CourseSubjectRouting = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _course_subject_component__WEBPACK_IMPORTED_MODULE_2__["CourseSubjectComponent"],
            pathMatch: 'prefix'
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], CourseSubjectRouting);
        return CourseSubjectRouting;
      }();
      /***/

    },

    /***/
    "./src/app/services/course-services/subject.service.ts":
    /*!*************************************************************!*\
      !*** ./src/app/services/course-services/subject.service.ts ***!
      \*************************************************************/

    /*! exports provided: SubjectApiService */

    /***/
    function srcAppServicesCourseServicesSubjectServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectApiService", function () {
        return SubjectApiService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authenticator.service */
      "./src/app/services/authenticator.service.ts");

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

      var SubjectApiService =
      /** @class */
      function () {
        var SubjectApiService = /*#__PURE__*/function () {
          function SubjectApiService(http, auth) {
            var _this8 = this;

            _classCallCheck(this, SubjectApiService);

            this.http = http;
            this.auth = auth;
            this.baseURL = "";
            this.auth.currentAuthKey.subscribe(function (key) {
              _this8.Authorization = key;
              _this8.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this8.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this8.institute_id = id;
            });
            this.baseURL = this.auth.getBaseUrl();
          }

          _createClass(SubjectApiService, [{
            key: "getAllSubjectListFromServer",
            value: function getAllSubjectListFromServer(standard_id) {
              var url = this.baseURL + "/api/v1/subjects/all/" + this.institute_id;

              if (standard_id != '-1') {
                url = this.baseURL + "/api/v1/subjects/all/" + this.institute_id + '?standard_id=' + standard_id;
              }

              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "updateSubjectRowData",
            value: function updateSubjectRowData(data, id) {
              var url = this.baseURL + "/api/v1/subjects/" + id;
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getAllStandardName",
            value: function getAllStandardName() {
              var url = this.baseURL + '/api/v1/standards/all/' + this.institute_id + "?active=Y";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "createNewSubject",
            value: function createNewSubject(data) {
              var url = this.baseURL + '/api/v1/subjects';
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "deleteSubject",
            value: function deleteSubject(data) {
              var url = this.baseURL + '/api/v1/subjects/' + data;
              return this.http["delete"](url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (error) {
                return error;
              }));
            }
          }]);

          return SubjectApiService;
        }();

        SubjectApiService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        SubjectApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], SubjectApiService);
        return SubjectApiService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-course-module-create-course-course-subject-course-subject-module-es5.js.map