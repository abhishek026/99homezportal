(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-online-exam-module-online-exam-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/online-exam-module/examdesk-course-assignment/examdesk-course-assignment.component.html":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/online-exam-module/examdesk-course-assignment/examdesk-course-assignment.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsOnlineExamModuleExamdeskCourseAssignmentExamdeskCourseAssignmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"clearfix \">\n\n\n  <div class=\"row head-section\">\n    <h2 class=\"pull-left\">\n      <a routerLink=\"/view/online-exam/\">\n        Online Test\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>ExamDesk Course Assignment</h2>\n    <div class=\"pull-right\">\n      <div class=\"search-filter-wrapper\">\n        <input type=\"text\" class=\"normal-field\" [(ngModel)]=\"searchValue\" placeholder=\"Search\" (keyup)=\"searchInList()\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"table-wrapper\">\n\n    <table>\n      <thead>\n        <tr>\n          <!-- changes by Nalini - to handle school model conditions -->\n          <th>{{schoolModel ? 'Section' : 'Course'}} Name</th>\n          <th>Total Assigned Student</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"coursesList.length > 0\">\n        <tr *ngFor=\"let data of coursesList\">\n          <td>{{data.course_type}}</td>\n          <td>{{data.total_assigned_student_count}}</td>\n          <td>\n            <a style=\"cursor: pointer;\" (click)=\"assignStudent(data)\">Assign Student</a>\n          </td>\n        </tr>\n      </tbody>\n      <tbody *ngIf=\"coursesList.length == 0 && dataStatus === 1\">\n        <tr *ngFor=\"let dummy of dummyArr\">\n          <td *ngFor=\"let c of columnMaps\">\n            <div class=\"skeleton\">\n            </div>\n          </td>\n        </tr>\n      </tbody>\n      <tbody *ngIf=\"(coursesList.length == 0 && dataStatus === 2)\">\n        <tr>\n          <td colspan=\"6\">\n            No data found\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <!-- Paginator Here -->\n    <!-- <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\"\n          [page]=\"PageIndex\" [perPage]=\"studentdisplaysize\" [count]=\"totalRow\">\n        </pagination>\n      </div>\n    </div> -->\n\n  </div>\n\n</section>\n\n\n<proctur-popup [sizeWidth]=\"'medium'\" *ngIf=\"assignPopUp\">\n\n  <span class=\"closePopup pos-abs fbold show\" (click)=\"closePopup()\" close-button>\n    <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\"\n      width=\"24px\" x=\"0\" y=\"0\">\n      <path class=\"large-icon\"\n        d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n        style=\"fill: currentColor\"></path>\n    </svg>\n  </span>\n<!-- changes by Nalini - to handle school model conditions -->\n  <h2 popup-header>{{schoolModel ? 'Section' : 'Course'}} Name : {{tempData.course_type}}</h2>\n\n  <div popup-content class=\"student-assign-popup\">\n    <div class=\" filter-section\">\n      <div class=\"row\">\n        <div class=\"c-sm-5 c-md-5 c-lg-5 radio-button\">\n          <div class=\"field-radio-wrapper\">\n            <input type=\"radio\" name=\"bothRadio\" id=\"bothRadio\" class=\"form-radio\" value=\"0\" [(ngModel)]=\"radioOption\"\n              (ngModelChange)=\"onRadioButtonChange()\">\n            <label for=\"bothRadio\">Both</label>\n          </div>\n          <div class=\"field-radio-wrapper\">\n            <input type=\"radio\" name=\"assignRadio\" id=\"assignRadio\" value=\"1\" class=\"form-radio\"\n              [(ngModel)]=\"radioOption\" (ngModelChange)=\"onRadioButtonChange()\">\n            <label for=\"assignRadio\">Assigned</label>\n          </div>\n          <div class=\"field-radio-wrapper\">\n            <input type=\"radio\" name=\"unassignStudent\" id=\"unassignStudent\" value=\"2\" class=\"form-radio\"\n              [(ngModel)]=\"radioOption\" (ngModelChange)=\"onRadioButtonChange()\">\n            <label for=\"unassignStudent\">UnAssigned</label>\n          </div>\n        </div>\n        <div class=\"c-sm-3 c-md-3 c-lg-3 radio-button\">\n\n          <div class=\"field-radio-wrapper\" *ngIf=\"isCourseModule\">\n            <input type=\"radio\" name=\"standardRadio\" id=\"standardRadio\" value=\"0\" class=\"form-radio\"\n              [(ngModel)]=\"filterOption\" (ngModelChange)=\"onfilterOptionChange()\">\n            <label for=\"standardRadio\">Standard</label>\n          </div>\n          <div class=\"field-radio-wrapper\" *ngIf=\"isCourseModule\">\n            <input type=\"radio\" name=\"courseStudent\" id=\"courseStudent\" value=\"1\" class=\"form-radio\" [(ngModel)]=\"filterOption\" (ngModelChange)=\"onfilterOptionChange()\">\n            <label for=\"courseStudent\">{{schoolModel ? 'Section' : 'Course'}}</label>\n          </div>\n        </div>\n        <div class=\"c-sm-4 c-md-4 c-lg-4 \">\n          <div class=\"c-sm-12 c-md-12 c-lg-12\">\n            <div class=\"c-sm-4 c-md-4 c-lg-4\">\n              <div class=\"search-filter-wrapper\">\n                <input #searchVal type=\"text\" class=\"normal-field\" placeholder=\"Search\" id=\"searchStudent\"\n                  name=\"searchData\" [(ngModel)]=\"searchData\">\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n      <div class=\"row extraMargin\" *ngIf=\"(!isCourse)&&isCourseModule\">\n        <div class=\"c-lg-4 c-md-4 c-sm-4 c-xs-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"master\">Standard\n            </label>\n            <select class=\"form-ctrl\" [(ngModel)]=\"standard_id\" (change)=\"onfilterOptionChange()\">\n              <option value=\"-1\">Standard</option>\n              <option *ngFor=\"let i of standardList\" [value]=\"i.standard_id\">\n                {{i.standard_name}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"row extraMargin\" *ngIf=\"isCourse&&isCourseModule\">\n        <!-- changes by Nalini - to handle school model conditions -->\n        <div class=\"c-lg-4 c-md-4 c-sm-4 c-xs-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"master\">{{schoolModel ? 'Standard' : 'Master Course'}}\n            </label>\n            <select class=\"form-ctrl\" [(ngModel)]=\"examAssignmentData.master_course_name\" (change)=\"getCourses($event.target.value)\">\n              <option value=\"\">{{schoolModel ? 'Standard' : 'Master Course'}}</option>\n              <option *ngFor=\"let i of masterCourse\" [value]=\"i.master_course\">\n                {{i.master_course}}\n              </option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"c-lg-4 c-md-4 c-sm-4 c-xs-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"course\">{{schoolModel ? 'Section' : 'Course'}}\n            </label>\n            <select class=\"form-ctrl\" [(ngModel)]=\"examAssignmentData.course_id\">\n              <option value=\"-1\">{{schoolModel ? 'Section' : 'Course'}}</option>\n              <option *ngFor=\"let i of courses\" [value]=\"i.course_id\">\n                {{i.course_name}}\n              </option>>\n            </select>\n\n          </div>\n        </div>\n\n        <div class=\"c-lg-2 c-md-2 c-sm-2 c-xs-2 text-center\">\n          <button id=\"btnSave\" class=\"btn fullBlue\" style=\"margin-top: 1rem;\" type=\"submit\"\n            (click)=\"getExamAssignmentData()\"> Go </button>\n\n        </div>\n      </div>\n      <div class=\"row extraMargin\" *ngIf=\"(!isCourseModule)\">\n        <div class=\"c-lg-3 c-md-3 c-sm-3 c-xs-3\">\n          <div class=\"field-wrapper\">\n            <label for=\"master\">Master Course\n            </label>\n            <select class=\"form-ctrl\" [(ngModel)]=\"examAssignmentData.standard_id\"\n              (change)=\"clearData(1);getData($event.target.value)\">\n              <option value=\"-1\">Master Course</option>\n              <option *ngFor=\"let i of standardList\" [value]=\"i.standard_id\">\n                {{i.standard_name}}\n              </option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"c-lg-3 c-md-3 c-sm-3 c-xs-3\">\n          <div class=\"field-wrapper\">\n            <label for=\"course\">Course\n            </label>\n            <select class=\"form-ctrl\" [(ngModel)]=\"examAssignmentData.subject_id\"\n              (change)=\"clearData(2);getData($event.target.value)\">\n              <option value=\"-1\">Course</option>\n              <option *ngFor=\"let i of subjectList\" [value]=\"i.subject_id\">\n                {{i.subject_name}}\n              </option>>\n            </select>\n\n          </div>\n        </div>\n        <div class=\"c-lg-3 c-md-3 c-sm-3 c-xs-3\">\n          <div class=\"field-wrapper\">\n            <label for=\"course\">Batch\n            </label>\n            <select class=\"form-ctrl\" [(ngModel)]=\"examAssignmentData.batch_id\">\n              <option value=\"-1\">Batch</option>\n              <option *ngFor=\"let i of batchList\" [value]=\"i.batch_id\">\n                {{i.batch_name}}\n              </option>>\n            </select>\n\n          </div>\n        </div>\n        <div class=\"c-lg-2 c-md-2 c-sm-2 c-xs-2 text-center\">\n          <button id=\"btnSave\" class=\"btn fullBlue\" style=\"margin-top: 1rem;\" type=\"submit\"\n            (click)=\"getExamAssignmentData()\"> Go </button>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"table-wrapper\">\n      <table>\n        <thead>\n          <tr>\n            <th>\n              <div class=\"field-checkbox-wrapper\">\n                <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"headerChecked\"\n                  (ngModelChange)=\"onHeaderCheckBox($event)\">\n                <label></label>\n              </div>\n            </th>\n            <th>Student ID</th>\n            <th>Name</th>\n            <th>Contact No</th>\n            <th>Joining Date</th>\n            <th>Type</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"tableData.length > 0 && dataStatus === 2\">\n          <tr *ngFor=\"let data of (tableData | searchPipe:searchData)\">\n            <td style=\"text-align: left\">\n              <div class=\"field-checkbox-wrapper\">\n                <input [disabled]=\"data.user_type == '99'\" type=\"checkbox\" class=\"form-checkbox\"\n                  [(ngModel)]=\"data.assigned\" (ngModelChange)=\"checkIfHeaderChecked()\">\n                <label></label>\n              </div>\n            </td>\n            <td>\n              {{data.student_disp_id}}\n            </td>\n            <td>\n              {{data.student_name}}\n            </td>\n            <td>\n              {{data.student_phone}}\n            </td>\n            <td>\n              {{data.doj}}\n            </td>\n            <td>\n              <span *ngIf=\"data.user_type == '99'\">Guest User</span>\n              <span *ngIf=\"data.user_type == '1'\">Enrolled Student</span>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableData.length == 0 && dataStatus === 1\">\n          <tr *ngFor=\"let dummy of dummyArr\">\n            <td *ngFor=\"let c of columnMapsTr\">\n              <div class=\"skeleton\">\n              </div>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"tableData.length == 0 && dataStatus === 2\">\n          <tr>\n            <td colspan=\"6\">\n              <h3>No Student Record Found</h3>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n\n  <div class=\"\" popup-footer>\n    <div class=\"clearfix\" style=\"margin-top :10px\">\n      <aside class=\"pull-right popup-btn\">\n        <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closePopup()\">\n        <input type=\"button\" value=\"Add Student\" class=\"fullBlue btn\" (click)=\"addStudentToCourse()\">\n      </aside>\n    </div>\n  </div>\n\n</proctur-popup>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/online-exam-module/online-exam-home/online-exam-home.component.html":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/online-exam-module/online-exam-home/online-exam-home.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsOnlineExamModuleOnlineExamHomeOnlineExamHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section>\n  <!-- course module -->\n  <section class=\"header-section\">\n    <div>\n      <div class=\"header-title\">\n        <span>Online Test</span>\n        <span style=\"float: right;\" class=\"downloadSection\"><a style=\"color: white;\"\n            href=\"https://examdesk.co/ExamdeskWordParser.zip\"><i class=\"fa fa-download\"></i> Word\n            Parser</a></span>\n        <!-- <span style=\"float: right;padding-right: 10px;cursor: pointer;\" class=\"downloadSection\"\n          (click)=\"openExamdesk()\">Go to ExamDesk</span> -->\n      </div>\n    </div>\n  </section>\n   <div class=\"course-menu-section-container\">\n    <!-- <div class=\"course-menu-item\" *ngIf=\"jsonFlag.showExamDesk\" routerLink=\"/view/online-exam/examcourse\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/online-exam/exam_desk.svg\" alt=\"examDesk course assignment\">\n        <span>ExamDesk Course Assignment</span>\n      </div>\n      <div class=\"menu-description\">\n        <span> Data setup your academic year, faculties, classrooms, etc</span>\n      </div>\n    </div> -->\n\n    <div class=\"course-menu-item\" (click)=\"openExamdesk()\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/online-exam/exam_desk.svg\" alt=\"examDesk course assignment\">\n        <span>Go to ExamDesk</span>\n      </div>\n      <div class=\"menu-description\">\n      </div>\n    </div>\n\n  </div>\n\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/online-exam-module/online-exam-module.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/online-exam-module/online-exam-module.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsOnlineExamModuleOnlineExamModuleComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "./src/app/components/online-exam-module/examdesk-course-assignment/examdesk-course-assignment.component.scss":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/components/online-exam-module/examdesk-course-assignment/examdesk-course-assignment.component.scss ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsOnlineExamModuleExamdeskCourseAssignmentExamdeskCourseAssignmentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 15px;\n}\n\n.head-section {\n  margin: 0 0 10px 0;\n}\n\n.head-section .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  height: 35px;\n  font-size: 14px;\n}\n\n.skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 80%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n\n.skeleton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  height: 35px;\n  font-size: 14px;\n}\n\n.student-assign-popup .popup-title {\n  margin-left: 0px;\n}\n\n.student-assign-popup .filter-section {\n  padding: 10px 0px;\n  margin: 5px 0;\n  background: #efefef;\n}\n\n.student-assign-popup .filter-section .radio-button {\n  margin-top: 10px;\n  display: inline-flex;\n}\n\n.student-assign-popup .filter-section .radio-button .field-radio-wrapper {\n  margin-right: 5px;\n}\n\n.student-assign-popup .filter-section .field-wrapper {\n  padding-top: 0;\n}\n\n.student-assign-popup .filter-section .btn {\n  margin-left: 0;\n}\n\n.student-assign-popup .table-wrapper {\n  margin-top: 15px;\n  max-height: 265px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.student-assign-popup .table-wrapper th {\n  padding: 10px;\n}\n\n.student-assign-popup .table-wrapper td {\n  padding: 5px 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vbmxpbmUtZXhhbS1tb2R1bGUvZXhhbWRlc2stY291cnNlLWFzc2lnbm1lbnQvZXhhbWRlc2stY291cnNlLWFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRkE7RUFHSSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBR25COztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQVBrQjtFQVFsQixrQkFBa0I7QUFBcEI7O0FBTkE7RUFRSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiwyREFBOEU7RUFDOUUsbURBQTJDO1VBQTNDLDJDQUEyQztBQUUvQzs7QUFFQTtFQUVJLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFBbkI7O0FBSUE7RUFFSSxnQkFBZ0I7QUFGcEI7O0FBQUE7RUFLSSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtBQUR2Qjs7QUFOQTtFQVNNLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDMUI7O0FBWEE7RUFZUSxpQkFBaUI7QUFHekI7O0FBZkE7RUFnQk0sY0FBYztBQUdwQjs7QUFuQkE7RUFtQk0sY0FBYztBQUlwQjs7QUF2QkE7RUF1QkksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBSXBCOztBQTlCQTtFQTRCTSxhQUFhO0FBTW5COztBQWxDQTtFQStCTSxpQkFBaUI7QUFPdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29ubGluZS1leGFtLW1vZHVsZS9leGFtZGVzay1jb3Vyc2UtYXNzaWdubWVudC9leGFtZGVzay1jb3Vyc2UtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5oZWFkLXNlY3Rpb24ge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIC5ub3JtYWwtZmllbGQge1xuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4kY29sb3ItYmFzZTogI2VmZWZlZjtcbiRjb2xvci1oaWdobGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLWJhc2UsIDclKTtcbi5za2VsZXRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmFzZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRjb2xvci1iYXNlLCAkY29sb3ItaGlnaGxpZ2h0LCAkY29sb3ItYmFzZSk7XG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxufVxuXG4uc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgLm5vcm1hbC1maWVsZCB7XG4gICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi5zdHVkZW50LWFzc2lnbi1wb3B1cCB7XG4gIC5wb3B1cC10aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAuZmlsdGVyLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIC5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgfVxuICAudGFibGUtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXgtaGVpZ2h0OiAyNjVweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0aCB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICB0ZCB7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB9XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/online-exam-module/examdesk-course-assignment/examdesk-course-assignment.component.ts":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/components/online-exam-module/examdesk-course-assignment/examdesk-course-assignment.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: ExamdeskCourseAssignmentComponent */

    /***/
    function srcAppComponentsOnlineExamModuleExamdeskCourseAssignmentExamdeskCourseAssignmentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamdeskCourseAssignmentComponent", function () {
        return ExamdeskCourseAssignmentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_examdesk_service_examdeskcourseassignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/examdesk-service/examdeskcourseassignment.service */
      "./src/app/services/examdesk-service/examdeskcourseassignment.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var ExamdeskCourseAssignmentComponent =
      /** @class */
      function () {
        var ExamdeskCourseAssignmentComponent = /*#__PURE__*/function () {
          function ExamdeskCourseAssignmentComponent(apiService, auth, toastCtrl) {
            _classCallCheck(this, ExamdeskCourseAssignmentComponent);

            this.apiService = apiService;
            this.auth = auth;
            this.toastCtrl = toastCtrl;
            this.coursesList = [];
            this.dummyArr = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
            this.columnMaps = [0, 1, 2];
            this.columnMapsTr = [0, 1, 2, 3, 4, 5];
            this.searchValue = "";
            this.coursesListDataSource = [];
            this.standardList = [];
            this.studentDataSourceList = [];
            this.studentList = [];
            this.tableData = [];
            this.masterCourse = [];
            this.courses = [];
            this.subjectList = [];
            this.batchList = [];
            this.tempBatchList = [];
            this.tempData = "";
            this.radioOption = '0';
            this.filterOption = '0';
            this.standard_id = -1;
            this.dataStatus = 1;
            this.assignPopUp = false;
            this.headerChecked = false;
            this.isCourse = false;
            this.isCourseModule = false;
            this.schoolModel = false;
            this.examAssignmentData = {
              "institute_id": 0,
              "master_course_name": "",
              "course_id": -1,
              "subject_id": -1,
              "standard_id": -1,
              "batch_id": -1
            };
          }

          _createClass(ExamdeskCourseAssignmentComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.fetchCoursesList();
              this.getAllStandardList();
              this.getMasterCourse();
              this.getData('first');

              if (sessionStorage.getItem('course_structure_flag') == '1') {
                this.isCourseModule = true;
              } else {
                this.isCourseModule = false;
              } // changes by Nalini - to handle school model conditions


              this.auth.schoolModel.subscribe(function (res) {
                _this.schoolModel = false;

                if (res) {
                  _this.schoolModel = true;
                }
              });
            }
          }, {
            key: "clearData",
            value: function clearData(type) {
              if (type == 1) {
                this.examAssignmentData.subject_id = -1;
                this.batchList = this.tempBatchList;
              } else {
                this.examAssignmentData.batch_id = -1;
              }
            }
          }, {
            key: "fetchCoursesList",
            value: function fetchCoursesList() {
              var _this2 = this;

              this.auth.showLoader();
              this.dataStatus = 1;
              this.apiService.getCoursesListExamDesk().subscribe(function (res) {
                _this2.auth.hideLoader();

                _this2.dataStatus = 2;
                _this2.coursesList = res;
                _this2.coursesListDataSource = res;
              }, function (err) {
                _this2.dataStatus = 2;

                _this2.auth.hideLoader();

                _this2.messageNotifier('error', '', err.error.message);
              });
            }
          }, {
            key: "getAllStandardList",
            value: function getAllStandardList() {
              var _this3 = this;

              this.auth.showLoader();
              this.apiService.getStandard().subscribe(function (res) {
                _this3.auth.hideLoader();

                _this3.standardList = res;
              }, function (err) {
                _this3.auth.hideLoader();

                _this3.messageNotifier('error', '', err.error.message);
              });
            }
          }, {
            key: "searchInList",
            value: function searchInList() {
              var _this4 = this;

              if (this.searchValue != "" && this.searchValue != null) {
                var searchData = this.coursesListDataSource.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this4.searchValue.toLowerCase());
                  });
                });
                this.coursesList = searchData;
              } else {
                this.coursesList = this.coursesListDataSource;
              }
            } //Pop up Function

          }, {
            key: "assignStudent",
            value: function assignStudent(data) {
              this.tempData = data;
              this.assignPopUp = true;
              this.getAllStudentList();
            }
          }, {
            key: "getExamAssignmentData",
            value: function getExamAssignmentData() {
              var _this5 = this;

              this.auth.showLoader();
              this.apiService.getStudentList2(this.examAssignmentData).subscribe(function (res) {
                _this5.dataStatus = 2;

                _this5.auth.hideLoader();

                _this5.studentDataSourceList = res;
                _this5.studentList = _this5.keepCloning(res);

                _this5.onRadioButtonChange();
              }, function (err) {
                _this5.dataStatus = 2;

                _this5.auth.hideLoader();

                _this5.messageNotifier('error', '', err.error.message);
              });
            }
          }, {
            key: "getAllStudentList",
            value: function getAllStudentList() {
              var _this6 = this;

              this.studentList = [];
              this.studentDataSourceList = [];
              this.auth.showLoader();
              var obj = {
                standard_id: this.standard_id,
                course_type_id: this.tempData.course_type_id
              };
              this.dataStatus = 1;
              this.apiService.getStudentList(obj).subscribe(function (res) {
                _this6.dataStatus = 2;

                _this6.auth.hideLoader();

                _this6.studentDataSourceList = res;
                _this6.studentList = _this6.keepCloning(res);

                _this6.onRadioButtonChange();
              }, function (err) {
                _this6.dataStatus = 2;

                _this6.auth.hideLoader();

                _this6.messageNotifier('error', '', err.error.message);
              });
            }
          }, {
            key: "onfilterOptionChange",
            value: function onfilterOptionChange() {
              this.isCourse = false;

              switch (this.filterOption) {
                case '0':
                  {
                    this.isCourse = false;
                    this.tableData = [];
                    this.studentList = [];
                    this.examAssignmentData = {
                      "institute_id": 0,
                      "master_course_name": "",
                      "course_id": -1,
                      "subject_id": -1,
                      "standard_id": this.standard_id,
                      "batch_id": -1
                    };
                    this.getExamAssignmentData();
                    break;
                  }

                case '1':
                  {
                    this.isCourse = true;
                    this.tableData = [];
                    this.studentList = [];
                    this.examAssignmentData = {
                      "institute_id": 0,
                      "master_course_name": "",
                      "course_id": -1,
                      "subject_id": -1,
                      "standard_id": -1,
                      "batch_id": -1
                    };
                    break;
                  }
              }

              this.onRadioButtonChange();
            }
          }, {
            key: "onRadioButtonChange",
            value: function onRadioButtonChange() {
              if (this.studentList.length > 0) {
                if (this.radioOption == '0') {
                  this.tableData = this.studentList;
                  this.checkIfHeaderChecked();
                } else if (this.radioOption == "1") {
                  this.headerChecked = false;
                  this.tableData = this.studentList.filter(function (el) {
                    return el.assigned == true;
                  });

                  if (this.tableData.length > 0) {
                    this.headerChecked = true;
                  }
                } else {
                  this.headerChecked = false;
                  this.tableData = this.studentList.filter(function (el) {
                    return el.assigned == false;
                  });
                }
              } else {
                this.tableData = [];
              }
            }
          }, {
            key: "onHeaderCheckBox",
            value: function onHeaderCheckBox(event) {
              if (event) {
                this.headerChecked = true;
                this.tableData.forEach(function (element) {
                  element.assigned = true;
                });
              } else {
                this.headerChecked = true;
                this.tableData.forEach(function (element) {
                  element.assigned = false;
                });
              }
            }
          }, {
            key: "checkIfHeaderChecked",
            value: function checkIfHeaderChecked() {
              for (var i = 0; i < this.tableData.length; i++) {
                if (this.tableData[i].assigned == false) {
                  this.headerChecked = false;
                  break;
                } else {
                  this.headerChecked = true;
                }
              }
            }
          }, {
            key: "closePopup",
            value: function closePopup() {
              this.assignPopUp = false;
              this.isCourse = false;
              this.radioOption = '0';
              this.studentDataSourceList = [];
              this.studentList = [];
              this.standard_id = -1;
              this.filterOption = '0';
              this.examAssignmentData = {
                "institute_id": 0,
                "master_course_name": "",
                "course_id": -1,
                "subject_id": -1,
                "standard_id": -1,
                "batch_id": -1
              };
            }
          }, {
            key: "addStudentToCourse",
            value: function addStudentToCourse() {
              var _this7 = this;

              var data = this.getSelectedStudent();

              if (data.length == 0) {
                this.messageNotifier('error', '', 'Please select student to assign in course');
                return;
              }

              var obj = {
                studentArray: data
              };
              this.auth.showLoader();
              this.apiService.assignStudentToCourse(obj, this.tempData.course_type_id).subscribe(function (res) {
                _this7.auth.hideLoader();

                _this7.messageNotifier('success', 'Student assigned successfully', '');

                _this7.fetchCoursesList();

                _this7.closePopup();
              }, function (err) {
                _this7.auth.hideLoader();

                _this7.messageNotifier('error', '', err.error.message);
              });
            }
          }, {
            key: "getMasterCourse",
            value: function getMasterCourse() {
              var _this8 = this;

              this.auth.showLoader();
              this.apiService.getAllMasterCourse().subscribe(function (data) {
                _this8.examAssignmentData.master_course_name = "";
                _this8.examAssignmentData.course_id = -1;
                _this8.masterCourse = data;

                _this8.auth.hideLoader();
              }, function (error) {
                _this8.auth.hideLoader();

                return error;
              });
            }
          }, {
            key: "getCourses",
            value: function getCourses(name) {
              var _this9 = this;

              this.auth.showLoader();
              this.apiService.getAllCourse(name).subscribe(function (data) {
                _this9.courses = data.coursesList;

                _this9.auth.hideLoader();
              }, function (error) {
                _this9.auth.hideLoader();

                return error;
              });
            }
          }, {
            key: "getData",
            value: function getData(name) {
              var _this10 = this;

              this.dataStatus = 2;
              this.apiService.batchData(this.examAssignmentData).subscribe(function (res) {
                console.log(res);

                if (name == 'first') {
                  _this10.tempBatchList = res.batchLi;
                  _this10.batchList = _this10.tempBatchList;
                  return;
                }

                if (_this10.examAssignmentData.subject_id == -1) {
                  _this10.examAssignmentData.batch_id = -1;
                  _this10.subjectList = res.subjectLi;
                  return;
                }

                if (_this10.examAssignmentData.batch_id == -1) {
                  _this10.batchList = res.batchLi;

                  if (_this10.batchList.length == 0) {
                    _this10.batchList = _this10.tempBatchList;
                  }
                }
              }, function (err) {
                _this10.messageNotifier('error', '', err.error.message);
              });
            }
          }, {
            key: "getSelectedStudent",
            value: function getSelectedStudent() {
              var temp = {};

              for (var i = 0; i < this.studentDataSourceList.length; i++) {
                for (var j = 0; j < this.studentList.length; j++) {
                  if (this.studentDataSourceList[i].user_type == 1 && this.studentList[j].user_type == 1) {
                    if (this.studentDataSourceList[i].student_id == this.studentList[j].student_id) {
                      if (this.studentDataSourceList[i].assigned != this.studentList[j].assigned) {
                        temp[this.studentList[i].student_id] = this.studentList[j].assigned;
                      }
                    }
                  }
                }
              }

              return temp;
            } // pagination functions 
            // fetchTableDataByPage(index) {
            //   this.PageIndex = index;
            //   let startindex = this.studentdisplaysize * (index - 1);
            //   this.slotTableList = this.getDataFromDataSource(startindex);
            // }
            // fetchNext() {
            //   this.PageIndex++;
            //   this.fetchTableDataByPage(this.PageIndex);
            // }
            // fetchPrevious() {
            //   if (this.PageIndex != 1) {
            //     this.PageIndex--;
            //     this.fetchTableDataByPage(this.PageIndex);
            //   }
            // }
            // getDataFromDataSource(startindex) {
            //   let t = this.slotsDataSource.slice(startindex, startindex + this.studentdisplaysize);
            //   return t;
            // }
            // helper Function

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
          }]);

          return ExamdeskCourseAssignmentComponent;
        }();

        ExamdeskCourseAssignmentComponent.ctorParameters = function () {
          return [{
            type: _services_examdesk_service_examdeskcourseassignment_service__WEBPACK_IMPORTED_MODULE_2__["ExamDeskCourseAssignmentService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
          }];
        };

        ExamdeskCourseAssignmentComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-examdesk-course-assignment',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./examdesk-course-assignment.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/online-exam-module/examdesk-course-assignment/examdesk-course-assignment.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./examdesk-course-assignment.component.scss */
          "./src/app/components/online-exam-module/examdesk-course-assignment/examdesk-course-assignment.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_examdesk_service_examdeskcourseassignment_service__WEBPACK_IMPORTED_MODULE_2__["ExamDeskCourseAssignmentService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])], ExamdeskCourseAssignmentComponent);
        return ExamdeskCourseAssignmentComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/online-exam-module/index.ts":
    /*!********************************************************!*\
      !*** ./src/app/components/online-exam-module/index.ts ***!
      \********************************************************/

    /*! exports provided: OnlineExamModuleComponent, OnlineExamHomeComponent, ExamdeskCourseAssignmentComponent */

    /***/
    function srcAppComponentsOnlineExamModuleIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _online_exam_module_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./online-exam-module.component */
      "./src/app/components/online-exam-module/online-exam-module.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OnlineExamModuleComponent", function () {
        return _online_exam_module_component__WEBPACK_IMPORTED_MODULE_0__["OnlineExamModuleComponent"];
      });
      /* harmony import */


      var _online_exam_home_online_exam_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./online-exam-home/online-exam-home.component */
      "./src/app/components/online-exam-module/online-exam-home/online-exam-home.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OnlineExamHomeComponent", function () {
        return _online_exam_home_online_exam_home_component__WEBPACK_IMPORTED_MODULE_1__["OnlineExamHomeComponent"];
      });
      /* harmony import */


      var _examdesk_course_assignment_examdesk_course_assignment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./examdesk-course-assignment/examdesk-course-assignment.component */
      "./src/app/components/online-exam-module/examdesk-course-assignment/examdesk-course-assignment.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExamdeskCourseAssignmentComponent", function () {
        return _examdesk_course_assignment_examdesk_course_assignment_component__WEBPACK_IMPORTED_MODULE_2__["ExamdeskCourseAssignmentComponent"];
      });
      /***/

    },

    /***/
    "./src/app/components/online-exam-module/online-exam-home/online-exam-home.component.scss":
    /*!************************************************************************************************!*\
      !*** ./src/app/components/online-exam-module/online-exam-home/online-exam-home.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsOnlineExamModuleOnlineExamHomeOnlineExamHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.header-section .header-title {\n  text-align: left;\n  font-size: 14px;\n  font-weight: 600;\n  color: #0084f6;\n}\n\n.course-menu-section-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  padding-top: 10px;\n  margin-top: 10px;\n  border-top: 1px solid rgba(10, 10, 10, 0.5);\n  width: 100%;\n}\n\n.course-menu-section-container .course-menu-item {\n  padding: 15px 10px;\n  width: 31%;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 1%;\n  box-shadow: 0px 3px 6px #696969;\n}\n\n.course-menu-section-container .course-menu-item .menu-title {\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n}\n\n.course-menu-section-container .course-menu-item .menu-title img {\n  width: 25px;\n  height: 25px;\n}\n\n.course-menu-section-container .course-menu-item .menu-title span {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.course-menu-section-container .course-menu-item .menu-description {\n  padding: 10px;\n  font-size: 12px;\n}\n\n.downloadSection {\n  padding-right: 10px;\n  cursor: pointer;\n  font-size: 14px;\n  border: 1px solid #0084f6;\n  padding: 2px 10px;\n  color: white;\n  border-radius: 4px;\n  background: #0084f6;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vbmxpbmUtZXhhbS1tb2R1bGUvb25saW5lLWV4YW0taG9tZS9vbmxpbmUtZXhhbS1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQUNmOztBQUVFO0VBRUksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUFwQjs7QUFJRTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDJDQUF3QztFQUN4QyxXQUFXO0FBRGY7O0FBUEU7RUFVSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUVWLCtCQUErQjtBQUNyQzs7QUFwQkU7RUFxQk0sV0FBVztFQUNYLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFHM0I7O0FBN0JFO0VBNEJRLFdBQVc7RUFDWCxZQUFZO0FBS3RCOztBQWxDRTtFQWdDUSxpQkFBaUI7RUFDakIsZUFBZTtBQU16Qjs7QUF2Q0U7RUFxQ00sYUFBYTtFQUNiLGVBQWU7QUFNdkI7O0FBRkU7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUt0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb25saW5lLWV4YW0tbW9kdWxlL29ubGluZS1leGFtLWhvbWUvb25saW5lLWV4YW0taG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbntcbiAgICBwYWRkaW5nOiAxJTtcbiAgfVxuICBcbiAgLmhlYWRlci1zZWN0aW9ue1xuICAgIC5oZWFkZXItdGl0bGV7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgIH1cbiAgfVxuICBcbiAgLmNvdXJzZS1tZW51LXNlY3Rpb24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTAsMTAsMTAsMC41KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuY291cnNlLW1lbnUtaXRlbXtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgIHdpZHRoOiAzMSU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW46IDElO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDZweCAjNjk2OTY5O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzY5Njk2OTtcbiAgICAgIC5tZW51LXRpdGxle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5tZW51LWRlc2NyaXB0aW9ue1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5kb3dubG9hZFNlY3Rpb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/online-exam-module/online-exam-home/online-exam-home.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/components/online-exam-module/online-exam-home/online-exam-home.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: OnlineExamHomeComponent */

    /***/
    function srcAppComponentsOnlineExamModuleOnlineExamHomeOnlineExamHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineExamHomeComponent", function () {
        return OnlineExamHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _model_role_features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../model/role_features */
      "./src/app/model/role_features.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");

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

      var OnlineExamHomeComponent =
      /** @class */
      function () {
        var OnlineExamHomeComponent = /*#__PURE__*/function () {
          function OnlineExamHomeComponent(router, auth, http) {
            _classCallCheck(this, OnlineExamHomeComponent);

            this.router = router;
            this.auth = auth;
            this.http = http;
            this.jsonFlag = {
              isProfessional: false,
              isAdmin: false,
              showExamDesk: false,
              institute_id: '',
              isShowEcourseMapping: false
            };
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_3__["role"].features;

            if (sessionStorage.getItem('userid') == null) {
              this.router.navigateByUrl('/authPage');
            }
          }

          _createClass(OnlineExamHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this11 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == 'LANG') {
                  _this11.jsonFlag.isProfessional = true;
                } else {
                  _this11.jsonFlag.isProfessional = false;
                }
              });
              this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
              this.checkUserAccess();

              if (this.jsonFlag.isAdmin || this.role_feature.ONLINE_TESTS_MENU) {
                var type = Number(sessionStorage.getItem('institute_setup_type'));
                this.jsonFlag.showExamDesk = this.checkInstSetupType(type, 4);
              }
            }
          }, {
            key: "checkUserAccess",
            value: function checkUserAccess() {
              var permissionArray = sessionStorage.getItem('permissions');
              var permittedRoles = sessionStorage.getItem('permitted_roles');
              var userType = sessionStorage.getItem('userType');

              if (userType == '3') {
                this.jsonFlag.isAdmin = false;
              } else if (userType == '0') {
                if (permissionArray == "" || permissionArray == null) {
                  this.jsonFlag.isAdmin = true;
                  this.jsonFlag.isShowEcourseMapping = true;
                }
              }

              if (sessionStorage.getItem('enable_elearn_course_mapping_feature') == '1') {
                this.jsonFlag.isShowEcourseMapping = true;
              }
            }
          }, {
            key: "checkInstSetupType",
            value: function checkInstSetupType(value, role) {
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
                    if (arr[0] == 1) return true;
                    break;

                  case 4:
                    if (arr[1] == 1) return true;
                    break;

                  case 8:
                    if (arr[2] == 1) return true;
                    break;

                  case 16:
                    if (arr[3] == 1) return true;
                    break;

                  case 32:
                    if (arr[4] == 1) return true;
                    break;

                  case 64:
                    if (arr[5] == 1) return true;
                    break;

                  case 128:
                    if (arr[6] == 1) return true;
                    break;

                  case 256:
                    if (arr[7] == 1) return true;
                    break;

                  default:
                    return false;
                }

                return false;
              } else {
                return false;
              }
            }
          }, {
            key: "openExamdesk",
            value: function openExamdesk() {
              this.http.getData("/api/v2/user/examdesk/SSO").subscribe(function (data) {
                window.open('https://test999.examdesk.co/administrator/login?token=' + data.result);
              });
            }
          }]);

          return OnlineExamHomeComponent;
        }();

        OnlineExamHomeComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }];
        };

        OnlineExamHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-online-exam-home',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./online-exam-home.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/online-exam-module/online-exam-home/online-exam-home.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./online-exam-home.component.scss */
          "./src/app/components/online-exam-module/online-exam-home/online-exam-home.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])], OnlineExamHomeComponent);
        return OnlineExamHomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/online-exam-module/online-exam-module-routing.module.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/components/online-exam-module/online-exam-module-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: OnlineExamModuleRoutingModule */

    /***/
    function srcAppComponentsOnlineExamModuleOnlineExamModuleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineExamModuleRoutingModule", function () {
        return OnlineExamModuleRoutingModule;
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


      var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! . */
      "./src/app/components/online-exam-module/index.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        component: ___WEBPACK_IMPORTED_MODULE_2__["OnlineExamModuleComponent"],
        pathMatch: 'prefix',
        children: [{
          path: '',
          component: ___WEBPACK_IMPORTED_MODULE_2__["OnlineExamHomeComponent"]
        }]
      }, {
        path: 'examcourse',
        component: ___WEBPACK_IMPORTED_MODULE_2__["ExamdeskCourseAssignmentComponent"],
        pathMatch: 'prefix'
      }];

      var OnlineExamModuleRoutingModule =
      /** @class */
      function () {
        var OnlineExamModuleRoutingModule = function OnlineExamModuleRoutingModule() {
          _classCallCheck(this, OnlineExamModuleRoutingModule);
        };

        OnlineExamModuleRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], OnlineExamModuleRoutingModule);
        return OnlineExamModuleRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/online-exam-module/online-exam-module.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/online-exam-module/online-exam-module.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsOnlineExamModuleOnlineExamModuleComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb25saW5lLWV4YW0tbW9kdWxlL29ubGluZS1leGFtLW1vZHVsZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/online-exam-module/online-exam-module.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/online-exam-module/online-exam-module.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: OnlineExamModuleComponent */

    /***/
    function srcAppComponentsOnlineExamModuleOnlineExamModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineExamModuleComponent", function () {
        return OnlineExamModuleComponent;
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

      var OnlineExamModuleComponent =
      /** @class */
      function () {
        var OnlineExamModuleComponent = /*#__PURE__*/function () {
          function OnlineExamModuleComponent() {
            _classCallCheck(this, OnlineExamModuleComponent);
          }

          _createClass(OnlineExamModuleComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return OnlineExamModuleComponent;
        }();

        OnlineExamModuleComponent.ctorParameters = function () {
          return [];
        };

        OnlineExamModuleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-online-exam-module',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./online-exam-module.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/online-exam-module/online-exam-module.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./online-exam-module.component.scss */
          "./src/app/components/online-exam-module/online-exam-module.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], OnlineExamModuleComponent);
        return OnlineExamModuleComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/online-exam-module/online-exam.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/online-exam-module/online-exam.module.ts ***!
      \*********************************************************************/

    /*! exports provided: OnlineExamModule */

    /***/
    function srcAppComponentsOnlineExamModuleOnlineExamModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineExamModule", function () {
        return OnlineExamModule;
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


      var _online_exam_module_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./online-exam-module-routing.module */
      "./src/app/components/online-exam-module/online-exam-module-routing.module.ts");
      /* harmony import */


      var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! . */
      "./src/app/components/online-exam-module/index.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _services_examdesk_service_examdeskcourseassignment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/examdesk-service/examdeskcourseassignment.service */
      "./src/app/services/examdesk-service/examdeskcourseassignment.service.ts");
      /* harmony import */


      var _eStore_module_estore_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../eStore-module/estore.module */
      "./src/app/components/eStore-module/estore.module.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var OnlineExamModule =
      /** @class */
      function () {
        var OnlineExamModule = function OnlineExamModule() {
          _classCallCheck(this, OnlineExamModule);
        };

        OnlineExamModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _eStore_module_estore_module__WEBPACK_IMPORTED_MODULE_6__["EstoreModule"], _online_exam_module_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlineExamModuleRoutingModule"]],
          declarations: [___WEBPACK_IMPORTED_MODULE_3__["OnlineExamModuleComponent"], ___WEBPACK_IMPORTED_MODULE_3__["OnlineExamHomeComponent"], ___WEBPACK_IMPORTED_MODULE_3__["ExamdeskCourseAssignmentComponent"]],
          providers: [_services_examdesk_service_examdeskcourseassignment_service__WEBPACK_IMPORTED_MODULE_5__["ExamDeskCourseAssignmentService"]]
        })], OnlineExamModule);
        return OnlineExamModule;
      }();
      /***/

    },

    /***/
    "./src/app/services/examdesk-service/examdeskcourseassignment.service.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/services/examdesk-service/examdeskcourseassignment.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: ExamDeskCourseAssignmentService */

    /***/
    function srcAppServicesExamdeskServiceExamdeskcourseassignmentServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamDeskCourseAssignmentService", function () {
        return ExamDeskCourseAssignmentService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

      var ExamDeskCourseAssignmentService =
      /** @class */
      function () {
        var ExamDeskCourseAssignmentService = /*#__PURE__*/function () {
          function ExamDeskCourseAssignmentService(auth, http) {
            var _this12 = this;

            _classCallCheck(this, ExamDeskCourseAssignmentService);

            this.auth = auth;
            this.http = http;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(function (key) {
              _this12.Authorization = key;
              _this12.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this12.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this12.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
          }

          _createClass(ExamDeskCourseAssignmentService, [{
            key: "getCoursesList",
            value: function getCoursesList() {
              var url = "".concat(this.baseUrl, "/api/v1/institute/courseMapping/").concat(this.institute_id, "?isOnline=all");
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getCoursesListExamDesk",
            value: function getCoursesListExamDesk() {
              var url = "".concat(this.baseUrl, "/api/v1/institute/courseMapping/").concat(this.institute_id, "?isOnline=N");
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getStandard",
            value: function getStandard() {
              var url = "".concat(this.baseUrl, "/api/v1/standards/all/").concat(this.institute_id, "/?active=Y");
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getStudentList",
            value: function getStudentList(obj) {
              obj.institute_id = this.institute_id;
              var url = "".concat(this.baseUrl, "/api/v1/institute/studentCourseMapping/getStudAndUsers");
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "batchData",
            value: function batchData(obj) {
              var url = this.baseUrl + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getStudentList2",
            value: function getStudentList2(obj) {
              obj.institute_id = this.institute_id;
              var url = "".concat(this.baseUrl, "/api/v1/institute/studentCourseMapping/v2/fetchStudentsFilterWise");
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "assignStudentToCourse",
            value: function assignStudentToCourse(obj, id) {
              obj.institute_id = this.institute_id;
              var url = "".concat(this.baseUrl, "/api/v1/institute/studentCourseMapping/").concat(id, "/assignStudents");
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllMasterCourse",
            value: function getAllMasterCourse() {
              var url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllCourse",
            value: function getAllCourse(name) {
              var url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + name;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }]);

          return ExamDeskCourseAssignmentService;
        }();

        ExamDeskCourseAssignmentService.ctorParameters = function () {
          return [{
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        };

        ExamDeskCourseAssignmentService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), __metadata("design:paramtypes", [_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ExamDeskCourseAssignmentService);
        return ExamDeskCourseAssignmentService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-online-exam-module-online-exam-module-es5.js.map