(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-course-module-reports-new-exam-report-exam-report-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/course-wise/course-wise.component.html":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/course-wise/course-wise.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleReportsNewExamReportCourseWiseCourseWiseComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"clear-fix\" style=\"    padding: 2%;padding-top: 2px;\">\n  <section class=\"middle-top clearFix bulk-header\">\n    <div>\n      <h1 class=\"pull-left\">\n        <a>\n          Exam\n        </a>\n        <!-- <a routerLink=\"/view/batch\" *ngIf=\"jsonFlag.isProfessional\">\n          Batch\n        </a> -->\n        <!-- <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> -->\n        <!-- <a routerLink=\"/view/{{jsonFlag.type}}/reports\" style=\"padding:0px; \">\n          Report\n        </a> -->\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <a routerLink=\"/view/{{jsonFlag.type}}/reports/exam-dashboard\" style=\"padding:0px; \">\n          Exam Dashboard\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <span *ngIf=\"!jsonFlag.isProfessional\">Course Wise</span>\n        <span *ngIf=\"jsonFlag.isProfessional\">Batch Wise</span>\n      </h1>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"name-container\">\n      <div class=\"name-item\">\n        <span style=\"font-weight: 600;\">{{masterCourse}} </span>\n      </div>\n      <div class=\"name-item\">\n        <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"course\" (ngModelChange)=\"getExamReport()\" *ngIf=\"!jsonFlag.isProfessional\">\n          <!-- changes by Nalini - to handle school model conditions -->\n          <option value=\"-1\">Select {{schoolModel ? 'Section' : 'Course'}}</option>\n          <option [value]=\"course.course_id\" *ngFor=\"let course of coursesList\">{{course.course_name}}</option>\n        </select>\n        <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"course\" (ngModelChange)=\"getExamReport()\"\n          *ngIf=\"jsonFlag.isProfessional\">\n          <option value=\"-1\">Select Batch</option>\n          <option [value]=\"batch.batch_id\" *ngFor=\"let batch of coursesList\">{{batch.batch_name}}</option>\n        </select>\n      </div>\n    </div>\n  </section>\n\n  <!-- Graph section -->\n  <!-- <section>\n    <div class=\"graph-outer-container\">\n      <div class=\"graph-item-container\" style=\"justify-content: center;padding-top: 20px;\">\n\n      </div>\n      <div class=\"graph-item-container\" *ngIf=\"!jsonFlag.isProfessional\" style=\"justify-content: center;padding-top: 20px;\">\n        <div #subjectWise id=\"subjectWise\">\n        </div>\n      </div>\n    </div>\n  </section> -->\n\n  <div #chartWrap id=\"chartWrap\">\n  </div>\n\n\n\n  <!-- report container -->\n  <section>\n    <div class=\"report-table-container\">\n      <div class=\"table-header-container\">\n        <div class=\"header-item small-item\">\n          <span>Exam Date</span>\n        </div>\n        <div class=\"header-item large-item\">\n          <span *ngIf=\"!jsonFlag.isProfessional\">Subject</span>\n          <span *ngIf=\"jsonFlag.isProfessional\">Batch</span>\n        </div>\n        <div class=\"header-item small-item\">\n          <span>Total Students</span>\n        </div>\n        <div class=\"header-item small-item\">\n          <span>Absent</span>\n        </div>\n        <div class=\"header-item small-item\">\n          <span>Leave</span>\n        </div>\n        <div class=\"header-item small-item\">\n          <span>Total Marks</span>\n        </div>\n        <div class=\"header-item small-item\">\n          <span>Avg. Marks</span>\n        </div>\n        <div class=\"header-item small-item\">\n          <span>Status</span>\n        </div>\n        <div class=\"header-item small-item align-center\">\n          <span>Actions</span>\n        </div>\n      </div>\n      <div class=\"table-outer-container\" style=\"max-height: 70vh;\">\n        <div class=\"table-value-container\" *ngFor=\"let report of courseWiseReportList\" [ngClass]=\"{'border-completed-class': report.exam_status == 'Mks. Updated',\n                    'border-updated-class': report.exam_status == 'Mks. pending',\n                    'border-pending-class': report.exam_status == 'Att. Pending',\n                    'border-cancelled-class': report.exam_status == 'Cancelled'}\">\n          <div class=\"value-item small-item\">\n            <span>{{report.exam_date | date: 'dd-MMM-yyyy'}}</span>\n          </div>\n          <div class=\"value-item large-item\">\n            <span *ngIf=\"!jsonFlag.isProfessional\"\n              title=\"{{report.subject_name}}\">{{ (report.subject_name.length > 40) ? (report.subject_name | slice:0:40) + '...' : report.subject_name }}</span>\n            <span *ngIf=\"jsonFlag.isProfessional\"\n              title=\"{{report.batch_name}}\">{{ (report.batch_name.length > 40) ? (report.batch_name | slice:0:40) + '...' : report.batch_name }}</span>\n          </div>\n          <div class=\"value-item small-item\">\n            <span>{{report.total_student}}</span>\n          </div>\n          <div class=\"value-item small-item\">\n            <span>{{report.total_absent_student}}</span>\n          </div>\n          <div class=\"value-item small-item\">\n            <span>{{report.total_leave_student_count}}</span>\n            <!-- <span>-</span> -->\n          </div>\n          <div class=\"value-item small-item\">\n            <span>{{report.total_marks}}</span>\n            <!-- <span>-</span> -->\n          </div>\n          <div class=\"value-item small-item\">\n            <span>{{report.avarage_marks}}</span>\n          </div>\n          <div class=\"value-item small-item\">\n            <span [ngClass]=\"{'completed-class': report.exam_status == 'Mks. Updated',\n                              'pending-class': report.exam_status == 'Att. Pending',\n                              'cancelled-class': report.exam_status == 'Cancelled',\n                              'marks-pending-class': report.exam_status == 'Mks. pending',\n                              'upcoming-class': report.exam_status == 'Upcoming'}\">\n              {{report.exam_status}}\n            </span>\n          </div>\n          <div class=\"value-item small-item align-center\">\n            <button *ngIf=\"report.exam_status == 'Mks. Updated'\" type=\"button\" name=\"button\" class=\"view-result-btn\"\n              routerLink='/view/{{jsonFlag.type}}/reports/exam-dashboard/examWise/{{report.exam_schd_id}}'>View\n              Result</button>\n            <span *ngIf=\"report.exam_status != 'Mks. Updated'\">-</span>\n          </div>\n        </div>\n        <div class=\"table-value-container\" *ngIf=\"courseWiseReportList?.length == 0\"\n          style=\"justify-content: center; font-size: 14px; font-weight: 600;\">\n          <span>No Result Found</span>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/exam-report-home/exam-report-home.component.html":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/exam-report-home/exam-report-home.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleReportsNewExamReportExamReportHomeExamReportHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"clear-fix\" style=\"padding-right: 2%;\">\n  <section class=\"middle-top mb0 clearFix sms-header\">\n    <h2 class=\"pull-left\" style=\"font-weight: bold;\">\n      <a>\n        Exam\n      </a>\n      <!-- <a routerLink=\"/view/batch\" *ngIf=\"jsonFlag.isProfessional\">\n        Batch\n      </a> -->\n      <!-- <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> -->\n      <!-- <a routerLink=\"/view/{{jsonFlag.type}}/reports\" style=\"padding:0px; \">\n        Report\n      </a> -->\n      <!-- <a>\n        Reports\n      </a> -->\n     <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      Exam Dashboard\n    </h2>\n    <aside class=\"pull-right\">\n    </aside>\n  </section>\n\n  <div class=\"main-heading-container\">\n    <span>Exam Dashboard</span>\n  </div>\n\n  <section>\n    <div class=\"main-container\">\n      <div class=\"left-container\">\n        <div class=\"left-outer-container\" *ngIf=\"!jsonFlag.isProfessional\">\n          <div class=\"left-item\">\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"mastercourse\" (ngModelChange)=\"getExamReportForMasterCourse()\">\n              <!-- changes by Nalini - to handle school model conditions -->\n              <option value=\"-1\">Select {{schoolModel ? '' : 'Master Course'}}</option>\n              <option [value]=\"masterCourse.master_course\" *ngFor=\"let masterCourse of masterCourseList\">{{masterCourse.master_course}}</option>\n            </select>\n          </div>\n          <div class=\"left-item\">\n            <div class=\"table-container\">\n              <div class=\"table-header-container\">\n                <div class=\"header-item medium-item\">\n                  <span>{{schoolModel ? 'Section' : 'Course'}}</span>\n                </div>\n                <div class=\"header-item large-item\">\n                  <span>Subject</span>\n                </div>\n                <div class=\"header-item small-item align-center\">\n                  <span>No of test</span>\n                </div>\n                <div class=\"header-item small-item align-center\">\n                  <span>Att. Updated</span>\n                </div>\n                <div class=\"header-item small-item align-center\">\n                  <span>Marks Updated</span>\n                </div>\n                <div class=\"header-item small-item align-center\">\n                  <span>Actions</span>\n                </div>\n              </div>\n              <div class=\"table-outer-container\">\n                <div class=\"table-value-container\" *ngFor=\"let report of masterCourseExamReportData\">\n                  <div class=\"value-item medium-item\">\n                    <span title=\"{{report.course_name}}\">{{ (report.course_name.length > 15) ? (report.course_name | slice:0:15) + '...' : report.course_name\n                      }}</span>\n                  </div>\n                  <div class=\"value-item large-item\">\n                    <span title=\"{{report.subject_name}}\">{{ (report.subject_name.length > 25) ? (report.subject_name | slice:0:25) + '...' : report.subject_name\n                      }}</span>\n                  </div>\n                  <div class=\"value-item small-item align-center\">\n                    <span>{{report.total_exam}}</span>\n                  </div>\n                  <div class=\"value-item small-item align-center\">\n                    <span>{{report.total_attandance_updated}}</span>\n                  </div>\n                  <div class=\"value-item small-item align-center\">\n                    <span>{{report.total_marks_updated}}</span>\n                  </div>\n                  <div class=\"value-item small-item align-center\">\n                    <button type=\"button\" name=\"button\" class=\"view-result-btn\" (click)=\"routeTo(report.course_id)\">View\n                      Result</button>\n                    <!-- routerLink='./courseWise/{{report.course_id}}' -->\n                  </div>\n                </div>\n                <div class=\"table-value-container\" *ngIf=\"masterCourseExamReportData?.length == 0\"\n                  style=\"justify-content: flex-start; font-size: 14px; font-weight: 600;\">\n                  <img src=\"./assets/images/blank.svg\" alt=\"illustration\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"left-outer-container\">\n          <div class=\"left-item\">\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"standard\"\n              (ngModelChange)=\"getExamReportForStandard()\" id=\"standard\">\n              <option value=\"-1\" *ngIf=\"!jsonFlag.isProfessional\">Select Standard</option>\n              <option value=\"-1\" *ngIf=\"jsonFlag.isProfessional\">Select Master Course</option>\n              <option [value]=\"standard.standard_id\" *ngFor=\"let standard of standardtList\">{{standard.standard_name}}\n              </option>\n            </select>\n            <select class=\"header-select-box\" style=\"margin-left: 10px;\" name=\"\" [(ngModel)]=\"subject\"\n              *ngIf=\"jsonFlag.isProfessional\" (ngModelChange)=\"getExamReportForStandardAndSubject()\">\n              <option value=\"-1\">Select Course</option>\n              <option [value]=\"subject.subject_id\" *ngFor=\"let subject of subjectList\">{{subject.subject_name}}</option>\n            </select>\n          </div>\n          <div class=\"left-item\">\n            <div class=\"table-container\">\n              <div class=\"table-header-container\">\n                <div class=\"header-item large-item1\">\n                  <span *ngIf=\"!jsonFlag.isProfessional\">Subject</span>\n                  <span *ngIf=\"jsonFlag.isProfessional\">Batch</span>\n                </div>\n                <!-- <div class=\"header-item small-item align-center\">\n                  <span>No of Student</span>\n                </div> -->\n                <div class=\"header-item small-item align-center\">\n                  <span>No of test</span>\n                </div>\n                <div class=\"header-item small-item align-center\">\n                  <span>Att. Updated</span>\n                </div>\n                <div class=\"header-item small-item align-center\">\n                  <span>Marks Updated</span>\n                </div>\n                <div class=\"header-item small-item align-center\">\n                  <span>Actions</span>\n                </div>\n              </div>\n              <div class=\"table-outer-container\"\n                [ngStyle]=\"jsonFlag.isProfessional ? {'min-height': '72vh'} : {'min-height': '30vh'}\">\n                <div class=\"table-value-container\" *ngFor=\"let report of standardExamReportData\">\n                  <div class=\"value-item large-item1\">\n                    <span *ngIf=\"!jsonFlag.isProfessional\" title=\"{{report.subject_name}}\">{{ (report.subject_name.length > 15) ? (report.subject_name | slice:0:15) + '...' : report.subject_name\n                      }}</span>\n                    <span *ngIf=\"jsonFlag.isProfessional\"\n                      title=\"{{report.batch_name}}\">{{ (report.batch_name.length > 15) ? (report.batch_name | slice:0:15) + '...' : report.batch_name }}</span>\n                  </div>\n                  <!-- <div class=\"value-item small-item align-center\">\n                    <span>{{report.total_student}}</span>\n                  </div> -->\n                  <div class=\"value-item small-item align-center\">\n                    <span>{{report.total_exam}}</span>\n                  </div>\n                  <div class=\"value-item small-item align-center\">\n                    <span>{{report.total_attandance_updated}}</span>\n                  </div>\n                  <div class=\"value-item small-item align-center\">\n                    <span>{{report.total_marks_updated}}</span>\n                  </div>\n                  <div class=\"value-item small-item align-center\">\n                    <button type=\"button\" name=\"button\" class=\"view-result-btn\"\n                      (click)=\"routeForStandard(report.subject_id, report.subject_name)\"\n                      *ngIf=\"!jsonFlag.isProfessional\">View Result</button>\n                    <button type=\"button\" name=\"button\" class=\"view-result-btn\" (click)=\"routeTo(report.batch_id)\"\n                      *ngIf=\"jsonFlag.isProfessional\">View Result</button>\n                  </div>\n                </div>\n                <div class=\"table-value-container\" *ngIf=\"standardExamReportData?.length == 0\"\n                  style=\"justify-content: flex-start; font-size: 14px; font-weight: 600;\">\n                  <img src=\"./assets/images/blank.svg\" alt=\"illustration\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"right-container\">\n        <div class=\"right-item\">\n          <input type=\"text\" placeholder=\"Choose filter from dropdown\" id=\"addDate\"\n            class=\"filter-input widgetDatepicker bsDatepicker\" name=\"addDate\" [(ngModel)]=\"addDate\"\n            (ngModelChange)=\"addNewDate($event)\" readonly=\"true\" bsDaterangepicker style=\"cursor: pointer;\">\n          <i class=\"fa fa-calendar\" style=\"cursor: pointer;color: #1283f4;\" (click)=\"openCalendar('addDate')\"></i>\n        </div>\n        <div class=\"right-item\">\n          <div class=\"table-container\">\n            <div class=\"table-header-container\">\n              <div class=\"header-item custom-item\">\n                <span>Exam Date</span>\n              </div>\n              <div class=\"header-item custom-item\">\n                <!-- changes by Nalini - to handle school model conditions -->\n                <span>{{schoolModel ? 'Standard' : 'Mastercourse'}}</span>\n              </div>\n              <div class=\"header-item custom-item\">\n                <span>{{schoolModel ? 'Section' : 'Course'}}</span>\n              </div>\n              <div class=\"header-item custom-item\">\n                <span>Status</span>\n              </div>\n              <div class=\"header-item custom-item align-center\">\n                <span>Actions</span>\n              </div>\n            </div>\n            <div class=\"table-outer-container\" style=\"min-height: 73vh; max-height: 73vh;\">\n              <div class=\"table-value-container\" *ngFor=\"let report of weeklyExamReportData\"\n                [ngClass]=\"{'border-completed-class': report.exam_status == 'Mks. Updated', 'border-class': report.exam_status != 'Mks. Updated'}\">\n                <div class=\"value-item custom-item\">\n                  <span>{{report?.exam_date | date: 'dd-MMM-yyyy'}}</span>\n                </div>\n                <div class=\"value-item custom-item\">\n                  <span title=\"{{report.master_course_name}}\">{{ (report?.master_course_name.length > 12) ? (report.master_course_name | slice:0:12) + '...' : report.master_course_name\n                    }}</span>\n                </div>\n                <div class=\"value-item custom-item\">\n                  <span\n                    title=\"{{report.course_name}}\">{{ (report?.course_name.length > 12) ? (report.course_name | slice:0:12) + '...' : report.course_name }}</span>\n                </div>\n                <div class=\"value-item custom-item\">\n                  <span [ngClass]=\"{'completed-class': report.exam_status == 'Mks. Updated',\n                                    'pending-class': report.exam_status == 'Att. Pending',\n                                    'cancelled-class': report.exam_status == 'Cancelled',\n                                    'marks-pending-class': report.exam_status == 'Mks. pending',\n                                    'upcoming-class': report.exam_status == 'Upcoming'}\">\n                    {{report?.exam_status}}\n                  </span>\n                </div>\n                <div class=\"value-item custom-item align-center\">\n                  <span *ngIf=\"report.exam_status != 'Mks. Updated'\">-</span>\n                  <button *ngIf=\"report.exam_status == 'Mks. Updated'\" type=\"button\" name=\"button\"\n                    class=\"view-result-btn\"\n                    routerLink='/view/{{jsonFlag.type}}/reports/exam-dashboard/examWise/{{report.exam_schd_id}}'>View\n                    Result</button>\n                </div>\n              </div>\n              <div class=\"table-value-container\"\n                *ngIf=\"weeklyExamReportData?.length == 0 && (!auth.isRippleLoad.getValue())\"\n                style=\"justify-content: center; font-weight: 600;\">\n                <span>No schedule found</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/exam-wise/exam-wise.component.html":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/exam-wise/exam-wise.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleReportsNewExamReportExamWiseExamWiseComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"middle-section clear-fix\" style=\"    padding: 2%;padding-top: 2px;\">\n  <section class=\"middle-top mb0 clearFix sms-header\">\n    <h2 class=\"pull-left\" style=\"font-weight: bold;\">\n      <!-- <a routerLink=\"/view/course\" *ngIf=\"!jsonFlag.isProfessional\">\n        Course\n      </a>\n      <a *ngIf=\"jsonFlag.isProfessional\">\n        Batch\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      <a style=\"padding:0px; \">\n        Report\n      </a> -->\n      <a>\n        Exam\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      <a routerLink=\"/view/{{jsonFlag.type}}/reports/exam-dashboard\" style=\"padding:0px; \">\n        Exam Dashboard\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      <span>Exam Wise</span>\n    </h2>\n    <a class=\"fa fa-download\" style=\"font-size: 17px; color: #0084f6; margin-right: 3%;cursor: pointer;float: right;\"\n      title=\"Download Report\" (click)=\"downloadReportCard();\" id=\"downloadFile\"></a>\n    <a id=\"downloadFileClick\" class=\"hide\"></a>\n  </section>\n\n  <!-- Course and Subject wise containers -->\n  <section>\n    <div class=\"section-wise-container\">\n      <div class=\"course-wise-container\">\n        <div class=\"section-title\">\n          <span *ngIf=\"!jsonFlag.isProfessional\">Course-wise</span>\n          <span *ngIf=\"jsonFlag.isProfessional\">Batch-wise</span>\n        </div>\n        <div class=\"section-info-container\">\n          <div class=\"course-info\">\n            <div class=\"course-info-item course\">\n              <div class=\"course-info-title-container\">\n                <!-- changes by Nalini - to handle school model conditions -->\n                <span>{{schoolModel ? 'Section' : 'Course'}}</span>\n              </div>\n              <div class=\"course-info-details\" *ngIf=\"!jsonFlag.isProfessional\">\n                <span>{{exam_wise_data?.course_name}}</span>\n              </div>\n              <div class=\"course-info-details\" *ngIf=\"jsonFlag.isProfessional\">\n                <span>{{exam_wise_data?.course_name}} > {{exam_wise_data?.batch_name}}</span>\n              </div>\n            </div>\n            <div class=\"course-info-item exam-date\">\n              <div class=\"course-info-title-container\">\n                <span>Exam Date</span>\n              </div>\n              <div class=\"course-info-details\">\n                <span>{{exam_wise_data?.exam_date | date: 'dd-MMM-yyyy' }}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"marks-info-container\">\n            <div class=\"marks-info-item\" *ngIf=\"is_exam_grad_feature != 1\">\n              <span class=\"marks-title\">Total Marks</span>\n              <span class=\"marks\">{{exam_wise_data?.total_marks}}</span>\n            </div>\n            <!-- <div class=\"marks-info-item\">\n              <span class=\"marks-title\">Min. Marks</span>\n              <span class=\"marks\">100</span>\n            </div> -->\n            <!-- <div class=\"marks-info-item\" *ngIf=\"is_exam_grad_feature != 1\">\n              <span class=\"marks-title\">Avg. Marks</span>\n              <span class=\"marks\">{{exam_wise_data?.average_marks}}</span>\n            </div> -->\n            <div class=\"marks-info-item\">\n              <span class=\"marks-title\">Total Students</span>\n              <span class=\"marks\">{{exam_wise_data?.total_student}}</span>\n            </div>\n          </div>\n          <div class=\"ranking-info-container\">\n            <div class=\"marks-container highest-border\" *ngIf=\"is_exam_grad_feature != 1\">\n              <div class=\"marks-title highest\">\n                <span>Highest Marks</span>\n              </div>\n              <div class=\"marks-info highest-border\">\n                <span>{{exam_wise_data?.highest_marks}}</span>\n              </div>\n            </div>\n            <div class=\"marks-container lowest-border\" *ngIf=\"is_exam_grad_feature != 1\">\n              <div class=\"marks-title lowest\">\n                <span>Lowest Marks</span>\n              </div>\n              <div class=\"marks-info lowest-border\">\n                <span>{{exam_wise_data?.lowest_marks}}</span>\n              </div>\n            </div>\n            <div class=\"marks-container topper-border\" *ngIf=\"is_exam_grad_feature != 1\">\n              <div class=\"marks-title topper\">\n                <span>Avg. Marks</span>\n              </div>\n              <div class=\"marks-info topper-border\">\n                <span>{{exam_wise_data?.average_marks}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"subject-wise-container\" *ngIf=\"!jsonFlag.isProfessional && !examSchdlType\">\n        <div class=\"section-title\">\n          <span>Subject-wise</span>\n        </div>\n        <div class=\"subject-wise-table-container\">\n          <div class=\"heading-container\">\n            <div class=\"heading-item\">\n              <span>Subjects</span>\n            </div>\n            <div class=\"heading-item\" style=\"text-align:right; margin-right: 10px;\">\n              <span>Total Marks</span>\n            </div>\n          </div>\n          <div class=\"value-outer-container\">\n            <div class=\"value-container\" *ngFor=\"let subject of subjectWiseData\">\n              <div class=\"value-item\">\n                <span>{{subject.subject_name}}</span>\n              </div>\n              <div class=\"value-item\" style=\"text-align:right; margin-right: 35px;\">\n                <span>{{subject.subject_level_total_marks}}</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"total-container\">\n            <div class=\"total-item\">\n              <span>Total Marks</span>\n            </div>\n            <div class=\"total-item\" style=\"text-align:right; margin-right: 35px;\">\n              <span>{{exam_wise_data?.total_marks}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Student Wise container -->\n  <section>\n    <div class=\"student-wise-container\">\n      <div class=\"section-title\">\n        <span>Student-wise</span>\n      </div>\n      <div class=\"student-wise-table-container\">\n        <div class=\"student-wise-heading-container\">\n          <div class=\"student-wise-heading-item small-item\">\n            <span>#ID</span>\n          </div>\n          <div class=\"student-wise-heading-item medium-item\">\n            <span>Name</span>\n          </div>\n          <div class=\"student-wise-heading-item small-item\">\n            <span>Contact No.</span>\n          </div>\n          <div class=\"student-wise-heading-item very-small-item\" style=\"text-align:center;\">\n            <span>Attendance</span>\n          </div>\n          <div class=\"subject-wise-container\" *ngIf=\"!jsonFlag.isProfessional && course_marks_update_level == '1'\">\n            <div class=\"subject-wise-heading-item\" *ngFor=\"let subject of subjectWiseData\">\n              <span>{{subject.subject_name}}</span>\n            </div>\n          </div>\n          <div class=\"subject-wise-container\" *ngIf=\"is_exam_grad_feature == 1  && jsonFlag.isProfessional\">\n            <div class=\"subject-wise-heading-item\">\n              <span>{{exam_wise_data.batch_name}}</span>\n            </div>\n          </div>\n          <div class=\"subject-wise-container\" *ngIf=\"course_marks_update_level == '2' && is_exam_grad_feature == 1\">\n            <div class=\"subject-wise-heading-item\">\n              <span>Grade</span>\n            </div>\n          </div>\n          <div class=\"student-wise-heading-item small-item\" style=\"text-align:center;\" *ngIf=\"is_exam_grad_feature != 1\">\n            <span>Obtained Marks</span>\n          </div>\n          <div class=\"student-wise-heading-item small-item\" style=\"text-align:center;\"\n            *ngIf=\"is_exam_grad_feature != 1\">\n            <span>Rank</span>\n          </div>\n          <!-- <div class=\"student-wise-heading-item small-item\">\n            <span>Status</span>\n          </div> -->\n        </div>\n        <div class=\"student-wise-value-outer-container\">\n          <div class=\"student-wise-value-container\" *ngFor=\"let student of studentWiseData\">\n            <div class=\"student-wise-value-item small-item\">\n              <span>{{student.student_display_id}}</span>\n            </div>\n            <div class=\"student-wise-value-item medium-item\">\n              <span>{{student.student_name}}</span>\n            </div>\n            <div class=\"student-wise-value-item small-item\">\n              <span>{{student.phone}}</span>\n            </div>\n            <div class=\"student-wise-value-item very-small-item\" style=\"text-align:center; font-weight: 600;\">\n              <span *ngIf=\"student.attendance_type == 'P'\" style=\"color: #00E172\">{{student.attendance_type}}</span>\n              <span *ngIf=\"student.attendance_type == 'A'\" style=\"color: red\">{{student.attendance_type}}</span>\n              <span *ngIf=\"student.attendance_type == 'L'\" style=\"color: #ffb951\">{{student.attendance_type}}</span>\n            </div>\n            <div class=\"subject-wise-container\" *ngIf=\"is_exam_grad_feature != 1 && course_marks_update_level != '2' && student.subjectWise_marks_obtained != null\">\n              <div class=\"subject-wise-value-item\" *ngFor=\"let subject of student.subjectWise_marks_obtained\">\n                <span *ngIf=\"subject?.subject_level_marks_obtained != null && student.attendance_type == 'P'\">{{subject.subject_level_marks_obtained}}</span>\n                <span *ngIf=\"subject?.subject_level_marks_obtained == 0 && student.attendance_type == 'A' || student.attendance_type == 'L'\">-</span>\n                <span *ngIf=\"subject?.subject_level_marks_obtained == null && subjectWiseData?.length > 0\">-</span>\n              </div>\n              <div class=\"subejct-null-container\" *ngIf=\"student.subjectWise_marks_obtained == null && subjectWiseData?.length > 0 && course_marks_update_level != '2'\" >\n                <div class=\"subject-wise-value-item\" *ngFor=\"let subject of subjectWiseData\">\n                  <span>-</span>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"subject-wise-container\" *ngIf=\"student.subjectWise_marks_obtained == null && subjectWiseData?.length > 0 && course_marks_update_level != '2'\">\n\n            </div> -->\n            <div class=\"subject-wise-container\" *ngIf=\"is_exam_grad_feature == 1\">\n              <div class=\"subject-wise-value-item\" *ngFor=\"let subject of student.subjectWise_marks_obtained\">\n                <span *ngIf=\"subject.grade != null && subject.grade != ''\">{{subject.grade}}</span>\n                <span *ngIf=\"subject.grade == null || student.attendance_type == 'A' || student.attendance_type == 'L' || student.attendance_type == 'P' \">-</span>\n              </div>\n              <div class=\"subject-wise-value-item\" *ngIf=\"course_marks_update_level == '2'\">\n                <span *ngIf=\"student.attendance_type == 'P'\">{{student.grade}}</span>\n                <span *ngIf=\"student.attendance_type == 'A' || student.attendance_type == 'L'\">-</span>\n              </div>\n              <div class=\"subject-wise-value-item\" *ngIf=\"course_marks_update_level != '2' && jsonFlag.isProfessional\">\n                <span *ngIf=\"student.attendance_type == 'P'\">{{student.grade}}</span>\n                <span *ngIf=\"student.attendance_type == 'A' || student.attendance_type == 'L'\">-</span>\n              </div>\n            </div>\n            <div class=\"student-wise-value-item small-item\" style=\"text-align:center;\"\n              *ngIf=\"is_exam_grad_feature != 1\">\n              <span *ngIf=\"student.attendance_type == 'P'\">{{student.total_marks_obtained}}</span>\n              <span *ngIf=\"student.attendance_type != 'P'\">-</span>\n            </div>\n            <div class=\"student-wise-value-item small-item\" style=\"text-align:center;\"\n              *ngIf=\"is_exam_grad_feature != 1\">\n              <span *ngIf=\"student.attendance_type == 'P'\">\n                {{student.rank}}\n              </span>\n              <span *ngIf=\"student.rank == 1 && student.attendance_type == 'P'\"\n                style=\"position: absolute; padding-left: 10px;color: #FFBF00;\">\n                <i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>\n              </span>\n              <span *ngIf=\"student.attendance_type != 'P'\">-</span>\n            </div>\n          </div>\n          <div class=\"student-wise-value-container\" *ngIf=\"studentWiseData.length == 0\"\n            style=\"justify-content: center;font-weight: 600;\">\n            <span>No Student Found</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/new-exam-report.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/new-exam-report.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleReportsNewExamReportNewExamReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/teacher-performance/teacher-performance.component.html":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/teacher-performance/teacher-performance.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleReportsNewExamReportTeacherPerformanceTeacherPerformanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"middle-section clear-fix\" style=\"    padding: 2%;padding-top: 2px;\">\n  <section class=\"middle-top clearFix bulk-header\">\n    <div>\n      <h1 class=\"pull-left\">\n        <a routerLink=\"/view/course\" *ngIf=\"!jsonFlag.isProfessional\">\n          Course\n        </a>\n        <a routerLink=\"/view/batch\" *ngIf=\"jsonFlag.isProfessional\">\n          Batch\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <a routerLink=\"/view/{{jsonFlag.type}}/reports\" style=\"padding:0px; \">\n          Report\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <a routerLink=\"/view/{{jsonFlag.type}}/reports/exam-dashboard\" style=\"padding:0px; \">\n          Exam Dashboard\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <span>Teacher Wise</span>\n      </h1>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"teacher-performance-container\">\n      <div class=\"section-title\">\n        <span>Teacher Performance</span>\n      </div>\n      <div class=\"teacher-table-container\">\n        <div class=\"table-heading-container\">\n          <div class=\"table-heading-item\">\n            <span>Teacher</span>\n          </div>\n          <div class=\"table-heading-item\">\n            <span>Mastercourse</span>\n          </div>\n          <div class=\"table-heading-item\">\n            <span>Course</span>\n          </div>\n          <div class=\"table-heading-item text-align-center\">\n            <span>No. of Test</span>\n          </div>\n          <div class=\"table-heading-item text-align-center\">\n            <span>Attendance updated</span>\n          </div>\n          <div class=\"table-heading-item text-align-center\">\n            <span>Marks Updated</span>\n          </div>\n          <!-- <div class=\"table-heading-item\">\n            <span>Avg Marks</span>\n          </div> -->\n        </div>\n        <div class=\"table-value-outer-container\">\n          <div class=\"table-value-container\" *ngFor=\"let report of teachersReport\">\n            <div class=\"table-value-item\">\n              <span\n                title=\"{{report.subject_name}}\">{{ (report.teacher_name.length > 20) ? (report.teacher_name | slice:0:20) + '...' : report.teacher_name }}</span>\n            </div>\n            <div class=\"table-value-item\">\n              <span\n                title=\"{{report.master_course_name}}\">{{ (report.master_course_name.length > 20) ? (report.master_course_name | slice:0:20) + '...' : report.master_course_name }}</span>\n            </div>\n            <div class=\"table-value-item\">\n              <span\n                title=\"{{report.course_name}}\">{{ (report.course_name.length > 20) ? (report.course_name | slice:0:20) + '...' : report.course_name }}</span>\n            </div>\n            <div class=\"table-value-item text-align-center\">\n              <span>{{report.total_exam}}</span>\n            </div>\n            <div class=\"table-value-item text-align-center\">\n              <span>{{report.total_attandance_updated}}</span>\n            </div>\n            <div class=\"table-value-item text-align-center\">\n              <span>{{report.total_marks_updated}}</span>\n            </div>\n            <!-- <div class=\"table-value-item\">\n              <span>{{report.avarage_marks}}</span>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"subject-wise-container\">\n      <div class=\"section-title\">\n        <span>Subject-wise:- {{subjectName}}</span>\n      </div>\n      <div class=\"subject-wise-table-container\">\n        <div class=\"table-heading-container\">\n          <div class=\"table-heading-item\">\n            <span>Date</span>\n          </div>\n          <div class=\"table-heading-item\">\n            <span>Mastercourse</span>\n          </div>\n          <div class=\"table-heading-item\">\n            <span>Course</span>\n          </div>\n          <div class=\"table-heading-item\">\n            <span>Teacher</span>\n          </div>\n          <div class=\"table-heading-item text-align-center\">\n            <span>Total Student</span>\n          </div>\n          <div class=\"table-heading-item text-align-center\">\n            <span>Student Present</span>\n          </div>\n          <div class=\"table-heading-item text-align-center\">\n            <span>Total Marks</span>\n          </div>\n          <!-- <div class=\"table-heading-item\">\n            <span>Percentage</span>\n          </div> -->\n          <div class=\"table-heading-item\">\n            <span>Status</span>\n          </div>\n          <!-- <div class=\"table-heading-item\">\n            <span></span>\n          </div> -->\n          <div class=\"table-heading-item\">\n            <span>Action</span>\n          </div>\n        </div>\n        <div class=\"table-value-outer-container\">\n          <div class=\"table-value-container\" *ngFor=\"let report of subjectsReport\" [ngClass]=\"{'border-completed-class': report.exam_status == 'Mks. Updated',\n                        'border-updated-class': report.exam_status == 'Mks. pending',\n                        'border-pending-class': report.exam_status == 'Att. Pending',\n                        'border-upcoming-class': report.exam_status == 'Upcoming',\n                        'border-cancelled-class': report.exam_status == 'Cancelled'}\">\n            <div class=\"table-value-item\">\n              <span>{{report.exam_date | date: 'dd-MMM-yyyy'}}</span>\n            </div>\n            <div class=\"table-value-item\">\n              <span\n                title=\"{{report.master_course_name}}\">{{ (report.master_course_name.length > 15) ? (report.master_course_name | slice:0:15) + '...' : report.master_course_name }}</span>\n            </div>\n            <div class=\"table-value-item\">\n              <span\n                title=\"{{report.course_name}}\">{{ (report.course_name.length > 15) ? (report.course_name | slice:0:15) + '...' : report.course_name }}</span>\n            </div>\n            <div class=\"table-value-item\">\n              <span>{{report.teacher_name}}</span>\n            </div>\n            <div class=\"table-value-item text-align-center\">\n              <span>{{report.total_student}}</span>\n            </div>\n            <div class=\"table-value-item text-align-center\">\n              <!-- <span>{{report.total_student}}</span> -->\n              <span *ngIf=\"report.exam_status != 'Att. Pending'\">{{report.total_present_student}}</span>\n              <span *ngIf=\"report.exam_status == 'Att. Pending'\">-</span>\n            </div>\n            <div class=\"table-value-item text-align-center\">\n              <span>{{report.total_marks}}</span>\n            </div>\n            <!-- <div class=\"table-value-item\">\n              <span *ngIf=\"report.batch_marks_percentage\">{{report.batch_marks_percentage}}%</span>\n              <span *ngIf=\"!report.batch_marks_percentage\">-</span>\n            </div> -->\n            <div class=\"table-value-item\">\n              <span [ngClass]=\"{'completed': report.exam_status == 'Mks. Updated',\n                            'mark_pending': report.exam_status == 'Mks. pending',\n                            'pending': report.exam_status == 'Att. Pending',\n                            'upcoming': report.exam_status == 'Upcoming',\n                            'cancelled': report.exam_status == 'Cancelled'}\">{{report.exam_status}}</span>\n            </div>\n            <!-- <div class=\"table-value-item\">\n              <span *ngIf=\"report.exam_status != 'Mks. Updated'\">{{report.exam_status}}</span>\n              <span *ngIf=\"report.exam_status == 'Mks. Updated'\" style=\"color: #00E172;\">{{report.exam_status}}</span>\n            </div> -->\n            <div class=\"table-value-item\" style=\"width: 15%\">\n              <span *ngIf=\"report.exam_status != 'Mks. Updated'\">-</span>\n              <span *ngIf=\"report.exam_status == 'Mks. Updated' && report.marks_update_level == '2'\">Marks updated on\n                course level</span>\n              <button *ngIf=\"report.exam_status == 'Mks. Updated' && report.marks_update_level == '1'\" type=\"button\"\n                name=\"button\" class=\"view-result-btn\" (click)=\"routeTo(report.exam_schd_id)\">View Result</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </section>\n</div>";
      /***/
    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/course-wise/course-wise.component.scss":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/course-wise/course-wise.component.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportCourseWiseCourseWiseComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.middle-top {\n  width: 100%;\n  padding: 10px 0px;\n  border-bottom: 1px solid #ccc;\n}\n\n.name-container {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  padding: 5px 0px;\n}\n\n.name-container .name-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 15%;\n}\n\n.name-container .name-item span {\n  margin-top: 10px;\n}\n\n.name-container .name-item .header-select-box {\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  margin: 5px 0px;\n  padding: 2px 0px;\n  width: 100%;\n}\n\n.graph-outer-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.graph-outer-container .graph-item-container {\n  display: flex;\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.16);\n  height: 240px;\n  border-radius: 4px;\n  padding: 10px;\n  text-align: center;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n#chartWrap {\n  height: 240px;\n}\n\n.label {\n  z-index: 1 !important;\n}\n\n.highcharts-tooltip span {\n  background-color: white;\n  border: 1px solid green;\n  opacity: 1;\n  z-index: 9999 !important;\n}\n\n.highcharts-credits {\n  display: none;\n}\n\n.report-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  font-size: 12px;\n  margin: 30px 0px;\n}\n\n.report-table-container .table-header-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 10px;\n  padding-right: 20px;\n  background: #FAFAFA;\n}\n\n.report-table-container .table-header-container .header-item {\n  font-weight: 600;\n  text-align: center;\n}\n\n.report-table-container .table-outer-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  min-height: 30vh;\n  max-height: 30vh;\n  overflow-y: auto;\n}\n\n.report-table-container .table-value-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 10px;\n}\n\n.report-table-container .table-value-container .value-item {\n  font-weight: 400;\n  text-align: center;\n}\n\n.report-table-container .table-value-container .value-item .view-result-btn {\n  padding: 2px 5px;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #248CF5;\n  color: #248CF5;\n}\n\n.report-table-container .small-item {\n  width: 10%;\n}\n\n.report-table-container .medium-item {\n  width: 17%;\n}\n\n.report-table-container .large-item {\n  width: 20%;\n}\n\n.report-table-container .align-center {\n  text-align: center;\n}\n\n.report-table-container .completed-class {\n  color: #00E172;\n}\n\n.report-table-container .pending-class {\n  color: gray;\n}\n\n.report-table-container .cancelled-class {\n  color: red;\n}\n\n.report-table-container .marks-pending-class {\n  color: blueviolet;\n}\n\n.report-table-container .upcoming-class {\n  color: #ff6c24;\n}\n\n.report-table-container .border-completed-class {\n  border-left: 3px solid #00E172;\n  background: #e6fff3;\n}\n\n.report-table-container .border-updated-class {\n  border-left: 3px solid #8A2BE2;\n}\n\n.report-table-container .border-pending-class {\n  border-left: 3px solid #8d8d8d;\n}\n\n.report-table-container .border-cancelled-class {\n  border-left: 3px solid #df0d2f;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvbmV3LWV4YW0tcmVwb3J0L2NvdXJzZS13aXNlL2NvdXJzZS13aXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFFL0I7O0FBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFHbEI7O0FBUEE7RUFNSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixVQUFVO0FBS2Q7O0FBZEE7RUFXTSxnQkFBZ0I7QUFPdEI7O0FBbEJBO0VBY00sa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFRakI7O0FBREE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0FBSWI7O0FBUkE7RUFNSSxhQUFhO0VBRWIsNENBQXlDO0VBQ3pDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBS3RCOztBQURBO0VBQ0UsYUFBYTtBQUlmOztBQURBO0VBQ0kscUJBQXFCO0FBSXpCOztBQUZBO0VBQ0ksdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1Ysd0JBQXdCO0FBSzVCOztBQUhBO0VBQ0UsYUFBYTtBQU1mOztBQURBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsMkNBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBSWxCOztBQVhBO0VBU0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFNdkI7O0FBcEJBO0VBZ0JNLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFReEI7O0FBekJBO0VBcUJJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQVFwQjs7QUFuQ0E7RUE4QkksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtBQVNqQjs7QUExQ0E7RUFtQ00sZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQVd4Qjs7QUEvQ0E7RUFzQ1EsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFhdEI7O0FBdkRBO0VBZ0RJLFVBQVU7QUFXZDs7QUEzREE7RUFtREksVUFBVTtBQVlkOztBQS9EQTtFQXNESSxVQUFVO0FBYWQ7O0FBbkVBO0VBK0RJLGtCQUFrQjtBQVF0Qjs7QUF2RUE7RUFtRUksY0FBYztBQVFsQjs7QUEzRUE7RUFzRUksV0FBVztBQVNmOztBQS9FQTtFQXlFSSxVQUFVO0FBVWQ7O0FBbkZBO0VBNEVJLGlCQUNGO0FBVUY7O0FBdkZBO0VBK0VJLGNBQWM7QUFZbEI7O0FBM0ZBO0VBa0ZJLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFhdkI7O0FBaEdBO0VBc0ZJLDhCQUE4QjtBQWNsQzs7QUFwR0E7RUEwRkksOEJBQThCO0FBY2xDOztBQXhHQTtFQThGSSw4QkFBOEI7QUFjbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvcmVwb3J0cy9uZXctZXhhbS1yZXBvcnQvY291cnNlLXdpc2UvY291cnNlLXdpc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlLXNlY3Rpb257XG4gIHBhZGRpbmc6IDElO1xufVxuLm1pZGRsZS10b3B7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4ubmFtZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgLm5hbWUtaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxNSU7XG4gICAgc3BhbntcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5oZWFkZXItc2VsZWN0LWJveHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICBwYWRkaW5nOiAycHggMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cblxuLy8gR3JhcGggU2VjdGlvblxuLmdyYXBoLW91dGVyLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgLmdyYXBoLWl0ZW0tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gd2lkdGg6IDQ4JTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLDAsMCwwLjE2KTtcbiAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxufVxuXG4jY2hhcnRXcmFwIHtcbiAgaGVpZ2h0OiAyNDBweDtcbn1cblxuLmxhYmVsIHtcbiAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG59XG4uaGlnaGNoYXJ0cy10b29sdGlwIHNwYW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xufVxuLmhpZ2hjaGFydHMtY3JlZGl0c3tcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vLyBUYWJsZSBDb250YWluZXJcbi5yZXBvcnQtdGFibGUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMzBweCAwcHg7XG4gIC50YWJsZS1oZWFkZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICAuaGVhZGVyLWl0ZW17XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuICAudGFibGUtb3V0ZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgICBtaW4taGVpZ2h0OiAzMHZoO1xuICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICAudGFibGUtdmFsdWUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC52YWx1ZS1pdGVte1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC52aWV3LXJlc3VsdC1idG57XG4gICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzI0OENGNTtcbiAgICAgICAgY29sb3I6ICMyNDhDRjU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNtYWxsLWl0ZW17XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuICAubWVkaXVtLWl0ZW17XG4gICAgd2lkdGg6IDE3JTtcbiAgfVxuICAubGFyZ2UtaXRlbXtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC8vIC5sYXJnZS1pdGVtMXtcbiAgLy8gICB3aWR0aDogNDAlO1xuICAvLyB9XG4gIC8vIC5jdXN0b20taXRlbXtcbiAgLy8gICB3aWR0aDogMjAlO1xuICAvLyB9XG4gIC5hbGlnbi1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbXBsZXRlZC1jbGFzc3tcbiAgICBjb2xvcjogIzAwRTE3MjtcbiAgfVxuICAucGVuZGluZy1jbGFzc3tcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuICAuY2FuY2VsbGVkLWNsYXNze1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgLm1hcmtzLXBlbmRpbmctY2xhc3N7XG4gICAgY29sb3I6IGJsdWV2aW9sZXRcbiAgfVxuICAudXBjb21pbmctY2xhc3N7XG4gICAgY29sb3I6ICNmZjZjMjQ7XG4gIH1cbiAgLmJvcmRlci1jb21wbGV0ZWQtY2xhc3N7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDBFMTcyO1xuICAgIGJhY2tncm91bmQ6ICNlNmZmZjM7XG4gIH1cbiAgLmJvcmRlci11cGRhdGVkLWNsYXNze1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzhBMkJFMjtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZjNlOWZjO1xuICB9XG4gIC5ib3JkZXItcGVuZGluZy1jbGFzc3tcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM4ZDhkOGQ7XG4gICAgLy8gYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgfVxuICAuYm9yZGVyLWNhbmNlbGxlZC1jbGFzc3tcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNkZjBkMmY7XG4gICAgLy8gYmFja2dyb3VuZDogI2ZlZTdlYjtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/course-wise/course-wise.component.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/course-wise/course-wise.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: CourseWiseComponent */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportCourseWiseCourseWiseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseWiseComponent", function () {
        return CourseWiseComponent;
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


      var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! highcharts */
      "./node_modules/highcharts/highcharts.js");
      /* harmony import */


      var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/course-services/class-schedule.service */
      "./src/app/services/course-services/class-schedule.service.ts");
      /* harmony import */


      var _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../services/course-services/course-list.service */
      "./src/app/services/course-services/course-list.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../services/report-services/exam.service */
      "./src/app/services/report-services/exam.service.ts");

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

      var CourseWiseComponent =
      /** @class */
      function () {
        var CourseWiseComponent = /*#__PURE__*/function () {
          function CourseWiseComponent(router, route, examdata, courseList, auth, msgService, classService) {
            var _this = this;

            _classCallCheck(this, CourseWiseComponent);

            this.router = router;
            this.route = route;
            this.examdata = examdata;
            this.courseList = courseList;
            this.auth = auth;
            this.msgService = msgService;
            this.classService = classService;
            this.chartType = "1";
            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              type: 'batch'
            };
            this.course = "-1";
            this.coursesList = [];
            this.reportJSON = {
              master_course_name: "",
              standard_id: "",
              subject_id: "",
              from_date: "",
              to_date: ""
            };
            this.schoolModel = false;
            this.auth.institute_type.subscribe(function (res) {
              if (res == 'LANG') {
                _this.jsonFlag.isProfessional = true;
                _this.jsonFlag.type = 'batch';
              } else {
                _this.jsonFlag.isProfessional = false;
                _this.jsonFlag.type = 'course';
              }
            }); // changes by Nalini - to handle school model conditions

            this.auth.schoolModel.subscribe(function (res) {
              _this.schoolModel = false;

              if (res) {
                _this.schoolModel = true;
              }
            });

            if (this.jsonFlag.isProfessional) {
              this.preRequiredDataForBatchModel();
            } else {
              this.masterCourse = sessionStorage.getItem('masterCourseForReport');
              this.updateCoursesList();
            }

            this.course_id = this.route.snapshot.paramMap.get('id');
            this.getCourseWiseReport();
          }

          _createClass(CourseWiseComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "getCourseWiseReport",
            value: function getCourseWiseReport() {
              var _this2 = this;

              this.auth.showLoader();
              this.examdata.getCourseWiseReport(this.course_id).subscribe(function (res) {
                _this2.auth.hideLoader();

                _this2.courseWiseReportList = res;

                _this2.generateChartData(res);
              }, function (err) {
                _this2.msgService.showErrorMessage(_this2.msgService.toastTypes.error, '', err.error.message);

                _this2.auth.hideLoader();
              });
            }
          }, {
            key: "updateCoursesList",
            value: function updateCoursesList() {
              var _this3 = this;

              this.courseList.getCourseListFromServer().subscribe(function (res) {
                _this3.auth.hideLoader();

                _this3.masterCourseList = res;

                for (var i = 0; i < _this3.masterCourseList.length; i++) {
                  if (_this3.masterCourseList[i].master_course == _this3.masterCourse) {
                    _this3.coursesList = _this3.masterCourseList[i].coursesList;
                    _this3.course = _this3.course_id;
                  }
                }
              }, function (err) {
                _this3.msgService.showErrorMessage(_this3.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');

                _this3.auth.hideLoader();
              });
            }
          }, {
            key: "getExamReport",
            value: function getExamReport() {
              this.course_id = this.course;
              this.getCourseWiseReport();
            }
          }, {
            key: "preRequiredDataForBatchModel",
            value: function preRequiredDataForBatchModel() {
              var _this4 = this;

              var subjectId = sessionStorage.getItem('subejctIdForReport');
              this.masterCourse = sessionStorage.getItem('masterCourseForReport');
              this.auth.showLoader();
              this.reportJSON.subject_id = subjectId;
              this.examdata.getAllExamReport(this.reportJSON).subscribe(function (res) {
                _this4.auth.hideLoader();

                _this4.coursesList = res;
                _this4.course = _this4.course_id;
              }, function (err) {
                _this4.msgService.showErrorMessage(_this4.msgService.toastTypes.error, '', err.error.message);

                _this4.auth.hideLoader();
              });
            }
          }, {
            key: "generateChartData",
            value: function generateChartData(res) {
              var _this5 = this;

              var dateMap = [];
              var feeMap = [];
              var totalMarksMap = [];
              var subjectWiseMarks = [];
              var percentage = [];
              var subjectWiseDate = [];
              var subjectData = [];
              res.map(function (e) {
                dateMap.push(moment__WEBPACK_IMPORTED_MODULE_3__(e.exam_date).format('DD-MMM'));
                feeMap.push(e.avarage_marks);
                totalMarksMap.push(e.total_marks);

                if (!_this5.jsonFlag.isProfessional) {
                  percentage.push(e.course_level_percentage);
                  subjectData.push(e.subject_name);
                } else {
                  percentage.push(e.batch_marks_percentage);
                  subjectData.push(e.batch_name);
                } // if(e.subject_wise_statatics.length > 0){
                //   subjectWiseMarks.push(e.subject_wise_statatics);
                //   subjectWiseDate.push(moment(e.exam_date).format('DD-MMM'))
                // }

              });
              this.createChart(dateMap, feeMap, totalMarksMap, percentage, subjectData); // this.subjectWiseChart(subjectWiseDate, feeMap, subjectWiseMarks);
            }
          }, {
            key: "createChart",
            value: function createChart(d, f, t, p, s) {
              var percentage = p;
              var total = t;
              var avg_marks = f;
              var subject = s;
              var isProfessional = this.jsonFlag.isProfessional;
              var minWidth = 1100;
              var dataLength = d.length;

              if (dataLength > 20 && dataLength < 35) {
                minWidth = 1500;
              }

              if (dataLength > 35 && dataLength < 50) {
                minWidth = 1700;
              }

              if (dataLength > 50 && dataLength < 75) {
                minWidth = 2000;
              }

              if (dataLength > 75 && dataLength < 100) {
                minWidth = 2500;
              }

              if (dataLength > 100 && dataLength < 150) {
                minWidth = 3000;
              }

              if (dataLength > 150 && dataLength < 200) {
                minWidth = 4000;
              }

              if (dataLength > 200) {
                minWidth = 6000;
              }

              highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('chartWrap', {
                chart: {
                  type: 'spline',
                  scrollablePlotArea: {
                    minWidth: minWidth,
                    scrollPositionX: 1
                  }
                },
                title: {
                  text: ''
                },
                xAxis: {
                  type: 'datetime',
                  labels: {
                    overflow: 'justify'
                  },
                  title: {
                    text: 'Date'
                  },
                  minPadding: 1,
                  maxPadding: 1,
                  categories: d
                },
                yAxis: {
                  title: {
                    text: 'Percentage (%)'
                  },
                  min: 0,
                  max: 100
                },
                tooltip: {
                  useHTML: true,
                  shared: false,
                  formatter: function formatter() {
                    var point = this.point;
                    var tool = '';

                    if (!isProfessional) {
                      tool += 'Subject: ' + subject[point.index] + '';
                    } else {
                      tool += 'Batch: ' + subject[point.index] + '';
                    }

                    tool += '<br>' + 'Total Marks: ' + total[point.index] + ' marks';
                    tool += '<br>' + 'Avg Marks: ' + avg_marks[point.index] + ' marks';
                    tool += '<br>' + 'Percentage: ' + percentage[point.index] + '%';
                    return tool;
                  }
                },
                series: [{
                  name: '',
                  type: "spline",
                  marker: {
                    radius: 5
                  },
                  showInLegend: false,
                  data: p
                }]
              });
            }
          }, {
            key: "subjectWiseChart",
            value: function subjectWiseChart(d, f, s) {
              var subjectWiseStats = s;
              var subjectName1 = "";
              var subjectName2 = "";
              var subjectName3 = "";
              var subjectName4 = "";
              var subject_series = [];

              for (var index = 0; index < s.length; index++) {
                for (var i = 0; i < s[index].length; i++) {
                  if (subjectName1 == "") {
                    subjectName1 = s[index][i]["subject_name"];
                  } else if (subjectName1 != s[index][i]["subject_name"]) {
                    subjectName2 = s[index][i]["subject_name"];
                  } else if (subjectName1 != s[index][i]["subject_name"] && subjectName2 != s[index][i]["subject_name"]) {
                    subjectName3 = s[index][i]["subject_name"];
                  } else if (subjectName1 != s[index][i]["subject_name"] && subjectName2 != s[index][i]["subject_name"] && subjectName3 != s[index][i]["subject_name"]) {
                    subjectName4 = s[index][i]["subject_name"];
                  }
                }
              }

              var subjectA = [];
              var subjectB = [];
              var subjectC = [];
              var subjectD = [];

              for (var _index = 0; _index < subjectWiseStats.length; _index++) {
                for (var _i = 0; _i < subjectWiseStats[_index].length; _i++) {
                  if (subjectName1 == subjectWiseStats[_index][_i]["subject_name"]) {
                    subjectA.push(subjectWiseStats[_index][_i]["subject_level_total_marks"]);
                    subjectB.push(0);
                    subjectC.push(0);
                    subjectD.push(0);
                  }

                  if (subjectName2 == subjectWiseStats[_index][_i]["subject_name"]) {
                    subjectB.push(subjectWiseStats[_index][_i]["subject_level_total_marks"]);
                    subjectA.push(0);
                    subjectC.push(0);
                    subjectD.push(0);
                  }

                  if (subjectName3 == subjectWiseStats[_index][_i]["subject_name"]) {
                    subjectC.push(subjectWiseStats[_index][_i]["subject_level_total_marks"]);
                    subjectA.push(0);
                    subjectB.push(0);
                    subjectD.push(0);
                  }

                  if (subjectName4 == subjectWiseStats[_index][_i]["subject_name"]) {
                    subjectD.push(subjectWiseStats[_index][_i]["subject_level_total_marks"]);
                    subjectA.push(0);
                    subjectB.push(0);
                    subjectC.push(0);
                  }
                }
              }

              highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('subjectWise', {
                chart: {
                  renderTo: 'container',
                  type: 'column'
                },
                scrollablePlotArea: {
                  minWidth: 1800
                },
                title: {
                  text: ''
                },
                xAxis: {
                  categories: d,
                  crosshair: true,
                  title: {
                    text: 'Date'
                  },
                  type: 'datetime',
                  labels: {
                    overflow: 'justify'
                  }
                },
                yAxis: {
                  title: {
                    text: 'Percentage (%)'
                  },
                  min: 0,
                  tickAmount: 5,
                  visible: true
                },
                tooltip: {
                  headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} marks</b></td></tr>',
                  footerFormat: '</table>',
                  shared: false,
                  useHTML: true
                },
                series: [{
                  "name": subjectName1,
                  "data": subjectA
                }, {
                  "name": subjectName2,
                  "data": subjectB
                }, {
                  "name": subjectName3,
                  "data": subjectC
                }, {
                  "name": subjectName4,
                  "data": subjectD
                }]
              });
            }
          }]);

          return CourseWiseComponent;
        }();

        CourseWiseComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_8__["ExamService"]
          }, {
            type: _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_6__["CourseListService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_7__["MessageShowService"]
          }, {
            type: _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ClassScheduleService"]
          }];
        };

        CourseWiseComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-course-wise',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./course-wise.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/course-wise/course-wise.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./course-wise.component.scss */
          "./src/app/components/course-module/reports/new-exam-report/course-wise/course-wise.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_8__["ExamService"], _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_6__["CourseListService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_7__["MessageShowService"], _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ClassScheduleService"]])], CourseWiseComponent);
        return CourseWiseComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/exam-report-home/exam-report-home.component.scss":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/exam-report-home/exam-report-home.component.scss ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportExamReportHomeExamReportHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.main-heading-container {\n  display: flex;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  width: 100%;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  font-size: 12px;\n  margin-top: 10px;\n}\n\n.left-container {\n  width: 58%;\n}\n\n.left-container .left-outer-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.left-container .left-item {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.left-container .left-item .header-select-box {\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  margin: 5px 0px;\n  padding: 2px 0px;\n  width: 25%;\n}\n\n.right-container {\n  width: 40%;\n}\n\n.right-container .right-item {\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n\n.right-container .right-item .filter-input {\n  margin: 5px 0px;\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  padding: 2px 3px;\n  width: 40%;\n  height: 30px;\n}\n\n.right-container .right-item i {\n  position: absolute;\n  top: 15px;\n  left: 36%;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  font-size: 12px;\n  margin-top: 5px;\n  border-top: 1px solid #ccc;\n}\n\n.table-container .table-header-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 10px;\n  background: #FAFAFA;\n}\n\n.table-container .table-header-container .header-item {\n  font-weight: 600;\n}\n\n.table-container .table-outer-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  min-height: 30vh;\n  max-height: 30vh;\n  overflow-y: auto;\n}\n\n.table-container .table-value-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 10px;\n}\n\n.table-container .table-value-container .value-item {\n  font-weight: 400;\n}\n\n.table-container .table-value-container .value-item .view-result-btn {\n  padding: 2px 5px;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #248CF5;\n  color: #248CF5;\n}\n\n.table-container .table-value-container .completed-class {\n  color: #00E172;\n}\n\n.table-container .table-value-container .pending-class {\n  color: gray;\n}\n\n.table-container .table-value-container .cancelled-class {\n  color: red;\n}\n\n.table-container .table-value-container .marks-pending-class {\n  color: blueviolet;\n}\n\n.table-container .table-value-container .upcoming-class {\n  color: #ff6c24;\n}\n\n.table-container .small-item {\n  width: 15%;\n}\n\n.table-container .medium-item {\n  width: 17%;\n}\n\n.table-container .large-item {\n  width: 23%;\n}\n\n.table-container .large-item1 {\n  width: 40%;\n}\n\n.table-container .custom-item {\n  width: 20%;\n}\n\n.table-container .align-center {\n  text-align: center;\n}\n\n.table-container .border-completed-class {\n  border-left: 3px solid #00E172;\n  background: #F4FFF4;\n}\n\n.table-container .border-class {\n  border-left: 3px solid white;\n}\n\n.table-value-container img {\n  max-width: 25%;\n  margin-left: 10%;\n  height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvbmV3LWV4YW0tcmVwb3J0L2V4YW0tcmVwb3J0LWhvbWUvZXhhbS1yZXBvcnQtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQWxCOztBQUdBO0VBQ0UsVUFBVTtBQUFaOztBQURBO0VBR0ksYUFBYTtFQUNiLHNCQUFzQjtBQUUxQjs7QUFOQTtFQU9JLGFBQWE7RUFDYiwyQkFBMkI7QUFHL0I7O0FBWEE7RUFVTSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtBQUtoQjs7QUFBQTtFQUNFLFVBQVU7QUFHWjs7QUFKQTtFQUdJLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBS3RCOztBQVZBO0VBT00sZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0FBT2xCOztBQW5CQTtFQWVNLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQVFmOztBQUZBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsMkNBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLDBCQUEwQjtBQUs1Qjs7QUFiQTtFQVVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7QUFPdkI7O0FBckJBO0VBZ0JNLGdCQUFnQjtBQVN0Qjs7QUF6QkE7RUFvQkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBU3BCOztBQW5DQTtFQTZCSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0FBVWpCOztBQTFDQTtFQWtDTSxnQkFBZ0I7QUFZdEI7O0FBOUNBO0VBb0NRLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0FBY3RCOztBQXREQTtFQTRDTSxjQUFjO0FBY3BCOztBQTFEQTtFQStDTSxXQUFXO0FBZWpCOztBQTlEQTtFQWtETSxVQUFVO0FBZ0JoQjs7QUFsRUE7RUFxRE0saUJBQ0Y7QUFnQko7O0FBdEVBO0VBd0RNLGNBQWM7QUFrQnBCOztBQTFFQTtFQThESSxVQUFVO0FBZ0JkOztBQTlFQTtFQWlFSSxVQUFVO0FBaUJkOztBQWxGQTtFQW9FSSxVQUFVO0FBa0JkOztBQXRGQTtFQXVFSSxVQUFVO0FBbUJkOztBQTFGQTtFQTBFSSxVQUFVO0FBb0JkOztBQTlGQTtFQTZFSSxrQkFBa0I7QUFxQnRCOztBQWxHQTtFQWdGSSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBc0J2Qjs7QUF2R0E7RUFvRkksNEJBQTRCO0FBdUJoQzs7QUFsQkE7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFxQmhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvbmV3LWV4YW0tcmVwb3J0L2V4YW0tcmVwb3J0LWhvbWUvZXhhbS1yZXBvcnQtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbntcbiAgcGFkZGluZzogMSU7XG59XG4vLyBIZWFkZXIgY29udGFpbmVyIHN0eWxlICAvLyBkYXNoYm9hcmRcbi5tYWluLWhlYWRpbmctY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi8vIE1haW4gY29udGFpbmVyXG4ubWFpbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi8vIExlZnQgc2lkZVxuLmxlZnQtY29udGFpbmVye1xuICB3aWR0aDogNTglO1xuICAubGVmdC1vdXRlci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5sZWZ0LWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgLmhlYWRlci1zZWxlY3QtYm94e1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gICAgICB3aWR0aDogMjUlO1xuICAgIH1cbiAgfVxufVxuLy8gUmlnaHQgc2lkZVxuLnJpZ2h0LWNvbnRhaW5lcntcbiAgd2lkdGg6IDQwJTtcbiAgLnJpZ2h0LWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5maWx0ZXItaW5wdXR7XG4gICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgcGFkZGluZzogMnB4IDNweDtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIGl7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgICBsZWZ0OiAzNiU7XG4gICAgfVxuICB9XG59XG5cblxuLnRhYmxlLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAudGFibGUtaGVhZGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICAgIC5oZWFkZXItaXRlbXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG4gIC50YWJsZS1vdXRlci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDMwdmg7XG4gICAgbWF4LWhlaWdodDogMzB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gIC50YWJsZS12YWx1ZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLnZhbHVlLWl0ZW17XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgLnZpZXctcmVzdWx0LWJ0bntcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQ4Q0Y1O1xuICAgICAgICBjb2xvcjogIzI0OENGNTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbXBsZXRlZC1jbGFzc3tcbiAgICAgIGNvbG9yOiAjMDBFMTcyO1xuICAgIH1cbiAgICAucGVuZGluZy1jbGFzc3tcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgICAuY2FuY2VsbGVkLWNsYXNze1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gICAgLm1hcmtzLXBlbmRpbmctY2xhc3N7XG4gICAgICBjb2xvcjogYmx1ZXZpb2xldFxuICAgIH1cbiAgICAudXBjb21pbmctY2xhc3N7XG4gICAgICBjb2xvcjogI2ZmNmMyNDtcbiAgICB9XG5cbiAgfVxuXG4gIC5zbWFsbC1pdGVte1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cbiAgLm1lZGl1bS1pdGVte1xuICAgIHdpZHRoOiAxNyU7XG4gIH1cbiAgLmxhcmdlLWl0ZW17XG4gICAgd2lkdGg6IDIzJTtcbiAgfVxuICAubGFyZ2UtaXRlbTF7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAuY3VzdG9tLWl0ZW17XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYWxpZ24tY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYm9yZGVyLWNvbXBsZXRlZC1jbGFzc3tcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMEUxNzI7XG4gICAgYmFja2dyb3VuZDogI0Y0RkZGNDtcbiAgfVxuICAuYm9yZGVyLWNsYXNze1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgd2hpdGU7XG4gIH1cbn1cblxuXG4udGFibGUtdmFsdWUtY29udGFpbmVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAyNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/exam-report-home/exam-report-home.component.ts":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/exam-report-home/exam-report-home.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: ExamReportHomeComponent */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportExamReportHomeExamReportHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamReportHomeComponent", function () {
        return ExamReportHomeComponent;
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


      var _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/course-services/class-schedule.service */
      "./src/app/services/course-services/class-schedule.service.ts");
      /* harmony import */


      var _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/course-services/course-list.service */
      "./src/app/services/course-services/course-list.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../services/report-services/exam.service */
      "./src/app/services/report-services/exam.service.ts");

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

      var ExamReportHomeComponent =
      /** @class */
      function () {
        var ExamReportHomeComponent = /*#__PURE__*/function () {
          function ExamReportHomeComponent(router, examdata, courseList, auth, msgService, classService) {
            _classCallCheck(this, ExamReportHomeComponent);

            this.router = router;
            this.examdata = examdata;
            this.courseList = courseList;
            this.auth = auth;
            this.msgService = msgService;
            this.classService = classService;
            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              type: 'batch'
            };
            this.reportJSON = {
              master_course_name: "",
              standard_id: "",
              subject_id: "",
              from_date: moment__WEBPACK_IMPORTED_MODULE_2__().isoWeekday("Monday").format("YYYY-MM-DD"),
              to_date: moment__WEBPACK_IMPORTED_MODULE_2__().weekday(7).format("YYYY-MM-DD")
            };
            this.weeklyExamReportData = [];
            this.masterCourseExamReportData = [];
            this.standardExamReportData = [];
            this.mastercourse = "-1";
            this.standard = "-1";
            this.subject = "-1";
            this.addDate = moment__WEBPACK_IMPORTED_MODULE_2__().isoWeekday("Monday").format("DD MMM YYYY") + " - " + moment__WEBPACK_IMPORTED_MODULE_2__().weekday(7).format("DD MMM YYYY");
            this.schoolModel = false;
          }

          _createClass(ExamReportHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this6 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == 'LANG') {
                  _this6.jsonFlag.isProfessional = true;
                  _this6.jsonFlag.type = 'batch';
                } else {
                  _this6.jsonFlag.isProfessional = false;
                  _this6.jsonFlag.type = 'course';
                }
              }); // changes by Nalini - to handle school model conditions

              this.auth.schoolModel.subscribe(function (res) {
                _this6.schoolModel = false;

                if (res) {
                  _this6.schoolModel = true;
                }
              });
              this.addDate = this.reportJSON.from_date + " - " + this.reportJSON.to_date; // this will fetch exam report for current week

              this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
              this.getPreRequiredData();
              this.getExamReport();
            }
          }, {
            key: "getExamReport",
            value: function getExamReport() {
              var _this7 = this;

              this.examReport = [];
              this.auth.showLoader();
              this.reportJSON.from_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.reportJSON.from_date).format("YYYY-MM-DD");
              this.reportJSON.to_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.reportJSON.to_date).format("YYYY-MM-DD");
              this.examdata.getAllExamReport(this.reportJSON).subscribe(function (res) {
                _this7.auth.hideLoader();

                _this7.examReport = res;
                _this7.weeklyExamReportData = _this7.examReport;
              }, function (err) {
                _this7.msgService.showErrorMessage(_this7.msgService.toastTypes.info, 'Info', err.error.message);

                _this7.auth.hideLoader();
              });
            }
          }, {
            key: "getPreRequiredData",
            value: function getPreRequiredData() {
              var _this8 = this;

              this.auth.showLoader();
              this.courseList.getCourseListFromServer().subscribe( // get mastercourse
              // get mastercourse
              function (res) {
                _this8.auth.hideLoader();

                _this8.masterCourseList = res;
                var master = sessionStorage.getItem('masterCourseForReport');

                if (master != "" && master != null && master != undefined) {
                  _this8.mastercourse = master;
                  sessionStorage.setItem('masterCourseForReport', '');

                  _this8.getExamReportForMasterCourse();
                }
              }, function (err) {
                _this8.msgService.showErrorMessage(_this8.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');

                _this8.auth.hideLoader();
              });
              this.auth.showLoader();
              this.courseList.getStandardListFromServer().subscribe( // get standard
              function (res) {
                _this8.auth.hideLoader();

                console.log("response", res.result);
                _this8.standardtList = res.result;
                var stand = sessionStorage.getItem('standaradForReport');

                if (stand != "" && stand != null && stand != undefined) {
                  _this8.standard = stand;
                  sessionStorage.setItem('standaradForReport', '');

                  _this8.getExamReportForStandard();
                }
              }, function (err) {
                _this8.msgService.showErrorMessage(_this8.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');

                _this8.auth.hideLoader();
              });
            }
          }, {
            key: "addNewDate",
            value: function addNewDate(e) {
              var _this9 = this;

              var fromDate = moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("YYYY-MM-DD");
              var toDate = moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("YYYY-MM-DD");
              var result = moment__WEBPACK_IMPORTED_MODULE_2__(toDate).diff(fromDate, 'days');

              if (result <= 30) {
                this.clearJSON();
                this.reportJSON.from_date = moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("YYYY-MM-DD");
                this.reportJSON.to_date = moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("YYYY-MM-DD");
                this.examReport = [];
                this.weeklyExamReportData = [];
                this.auth.showLoader();
                this.examdata.getAllExamReport(this.reportJSON).subscribe(function (res) {
                  _this9.auth.hideLoader();

                  _this9.examReport = res;
                  _this9.weeklyExamReportData = _this9.examReport;
                }, function (err) {
                  _this9.msgService.showErrorMessage(_this9.msgService.toastTypes.info, 'Info', err.error.message);

                  _this9.auth.hideLoader();
                });
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Date difference should not more than a month');
              }
            }
          }, {
            key: "getExamReportForMasterCourse",
            value: function getExamReportForMasterCourse() {
              var _this10 = this;

              this.clearJSON();
              this.reportJSON.master_course_name = this.mastercourse;
              this.examReport = [];
              this.masterCourseExamReportData = [];
              this.auth.showLoader();
              this.examdata.getAllExamReport(this.reportJSON).subscribe(function (res) {
                _this10.auth.hideLoader();

                _this10.examReport = res;
                _this10.masterCourseExamReportData = _this10.examReport;
              }, function (err) {
                _this10.msgService.showErrorMessage(_this10.msgService.toastTypes.error, '', err.error.message);

                _this10.auth.hideLoader();
              });
            }
          }, {
            key: "getExamReportForStandard",
            value: function getExamReportForStandard() {
              var _this11 = this;

              if (!this.jsonFlag.isProfessional) {
                this.clearJSON();
                this.reportJSON.standard_id = this.standard;
                this.examReport = [];
                this.auth.showLoader();
                this.examdata.getAllExamReport(this.reportJSON).subscribe(function (res) {
                  _this11.auth.hideLoader();

                  _this11.examReport = res;
                  _this11.standardExamReportData = _this11.examReport;
                }, function (err) {
                  _this11.msgService.showErrorMessage(_this11.msgService.toastTypes.error, '', err.error.message);

                  _this11.auth.hideLoader();
                });
              } else {
                // Get Subject List for Batch Model
                this.auth.showLoader();
                this.classService.getStandardSubjectList(this.standard, "-1", "Y").subscribe(function (res) {
                  _this11.auth.hideLoader();

                  _this11.subjectList = res.subjectLi;
                }, function (err) {
                  _this11.auth.hideLoader();

                  _this11.msgService.showErrorMessage(_this11.msgService.toastTypes.error, '', err);
                });
              }
            }
          }, {
            key: "getExamReportForStandardAndSubject",
            value: function getExamReportForStandardAndSubject() {
              var _this12 = this;

              this.clearJSON();
              this.reportJSON.subject_id = this.subject;
              this.examReport = [];
              this.standardExamReportData = [];
              this.auth.showLoader();
              this.examdata.getAllExamReport(this.reportJSON).subscribe(function (res) {
                _this12.auth.hideLoader();

                _this12.examReport = res;
                _this12.standardExamReportData = _this12.examReport;
              }, function (err) {
                _this12.msgService.showErrorMessage(_this12.msgService.toastTypes.error, '', err.error.message);

                _this12.auth.hideLoader();
              });
            }
          }, {
            key: "clearJSON",
            value: function clearJSON() {
              this.reportJSON.master_course_name = "";
              this.reportJSON.standard_id = "";
              this.reportJSON.subject_id = "";
              this.reportJSON.from_date = "";
              this.reportJSON.to_date = "";
            }
          }, {
            key: "openCalendar",
            value: function openCalendar(id) {
              document.getElementById(id).click();
            }
          }, {
            key: "routeTo",
            value: function routeTo(course_id) {
              if (this.jsonFlag.isProfessional) {
                // for batch model
                sessionStorage.setItem('subejctIdForReport', this.subject);

                for (var i = 0; i < this.subjectList.length; i++) {
                  if (this.subjectList[i].subject_id == this.subject) {
                    sessionStorage.setItem('masterCourseForReport', this.subjectList[i].subject_name);
                  }
                }
              } else {
                sessionStorage.setItem('masterCourseForReport', this.mastercourse);
              }

              this.router.navigate(['/view/' + this.jsonFlag.type + '/reports/exam-dashboard/courseWise/' + course_id]); // course wise page routing for both model
            }
          }, {
            key: "routeForStandard",
            value: function routeForStandard(subject_id, subjectName) {
              sessionStorage.setItem('standaradForReport', this.standard);
              sessionStorage.setItem('subjectName', subjectName);
              this.router.navigate(['/view/' + this.jsonFlag.type + '/reports/exam-dashboard/teacherWise/' + subject_id]);
            }
          }]);

          return ExamReportHomeComponent;
        }();

        ExamReportHomeComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_7__["ExamService"]
          }, {
            type: _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_5__["CourseListService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__["MessageShowService"]
          }, {
            type: _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ClassScheduleService"]
          }];
        };

        ExamReportHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-exam-report-home',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./exam-report-home.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/exam-report-home/exam-report-home.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./exam-report-home.component.scss */
          "./src/app/components/course-module/reports/new-exam-report/exam-report-home/exam-report-home.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_7__["ExamService"], _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_5__["CourseListService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__["MessageShowService"], _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ClassScheduleService"]])], ExamReportHomeComponent);
        return ExamReportHomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/exam-report-routing.module.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/exam-report-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: ExamReportRoutingModule */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportExamReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamReportRoutingModule", function () {
        return ExamReportRoutingModule;
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


      var _new_exam_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-exam-report.component */
      "./src/app/components/course-module/reports/new-exam-report/new-exam-report.component.ts");
      /* harmony import */


      var _course_wise_course_wise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./course-wise/course-wise.component */
      "./src/app/components/course-module/reports/new-exam-report/course-wise/course-wise.component.ts");
      /* harmony import */


      var _exam_wise_exam_wise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./exam-wise/exam-wise.component */
      "./src/app/components/course-module/reports/new-exam-report/exam-wise/exam-wise.component.ts");
      /* harmony import */


      var _teacher_performance_teacher_performance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./teacher-performance/teacher-performance.component */
      "./src/app/components/course-module/reports/new-exam-report/teacher-performance/teacher-performance.component.ts");
      /* harmony import */


      var _exam_report_home_exam_report_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exam-report-home/exam-report-home.component */
      "./src/app/components/course-module/reports/new-exam-report/exam-report-home/exam-report-home.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ExamReportRoutingModule =
      /** @class */
      function () {
        var ExamReportRoutingModule = function ExamReportRoutingModule() {
          _classCallCheck(this, ExamReportRoutingModule);
        };

        ExamReportRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _new_exam_report_component__WEBPACK_IMPORTED_MODULE_2__["NewExamReportComponent"],
            pathMatch: 'prefix',
            children: [{
              path: '',
              component: _exam_report_home_exam_report_home_component__WEBPACK_IMPORTED_MODULE_6__["ExamReportHomeComponent"]
            }, {
              path: 'home',
              component: _exam_report_home_exam_report_home_component__WEBPACK_IMPORTED_MODULE_6__["ExamReportHomeComponent"]
            }, {
              path: 'exam',
              component: _exam_report_home_exam_report_home_component__WEBPACK_IMPORTED_MODULE_6__["ExamReportHomeComponent"]
            }, {
              path: 'courseWise/:id',
              component: _course_wise_course_wise_component__WEBPACK_IMPORTED_MODULE_3__["CourseWiseComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'examWise/:id',
              component: _exam_wise_exam_wise_component__WEBPACK_IMPORTED_MODULE_4__["ExamWiseComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'teacherWise/:id',
              component: _teacher_performance_teacher_performance_component__WEBPACK_IMPORTED_MODULE_5__["TeacherPerformanceComponent"],
              pathMatch: 'prefix'
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], ExamReportRoutingModule);
        return ExamReportRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/exam-report.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/exam-report.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: ExamReportModule */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportExamReportModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamReportModule", function () {
        return ExamReportModule;
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


      var _new_exam_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-exam-report.component */
      "./src/app/components/course-module/reports/new-exam-report/new-exam-report.component.ts");
      /* harmony import */


      var _course_wise_course_wise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./course-wise/course-wise.component */
      "./src/app/components/course-module/reports/new-exam-report/course-wise/course-wise.component.ts");
      /* harmony import */


      var _exam_wise_exam_wise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./exam-wise/exam-wise.component */
      "./src/app/components/course-module/reports/new-exam-report/exam-wise/exam-wise.component.ts");
      /* harmony import */


      var _teacher_performance_teacher_performance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./teacher-performance/teacher-performance.component */
      "./src/app/components/course-module/reports/new-exam-report/teacher-performance/teacher-performance.component.ts");
      /* harmony import */


      var _exam_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exam-report-routing.module */
      "./src/app/components/course-module/reports/new-exam-report/exam-report-routing.module.ts");
      /* harmony import */


      var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/components/common/messageservice */
      "./node_modules/primeng/components/common/messageservice.js");
      /* harmony import */


      var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/primeng */
      "./node_modules/primeng/primeng.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _exam_report_home_exam_report_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./exam-report-home/exam-report-home.component */
      "./src/app/components/course-module/reports/new-exam-report/exam-report-home/exam-report-home.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../services/course-services/class-schedule.service */
      "./src/app/services/course-services/class-schedule.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      /* Modules */
      // import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';


      var ExamReportModule =
      /** @class */
      function () {
        var ExamReportModule = function ExamReportModule() {
          _classCallCheck(this, ExamReportModule);
        };

        ExamReportModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _exam_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["ExamReportRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _exam_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["ExamReportRoutingModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["SplitButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["MenuModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(), // BsDatepickerModule,
          ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__["TimepickerModule"]],
          declarations: [_new_exam_report_component__WEBPACK_IMPORTED_MODULE_2__["NewExamReportComponent"], _course_wise_course_wise_component__WEBPACK_IMPORTED_MODULE_3__["CourseWiseComponent"], _exam_wise_exam_wise_component__WEBPACK_IMPORTED_MODULE_4__["ExamWiseComponent"], _teacher_performance_teacher_performance_component__WEBPACK_IMPORTED_MODULE_5__["TeacherPerformanceComponent"], _exam_report_home_exam_report_home_component__WEBPACK_IMPORTED_MODULE_12__["ExamReportHomeComponent"]],
          entryComponents: [_exam_report_home_exam_report_home_component__WEBPACK_IMPORTED_MODULE_12__["ExamReportHomeComponent"]],
          providers: [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__["MessageService"], _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_14__["ClassScheduleService"]],
          exports: [// FilterPipe
          ]
        })], ExamReportModule);
        return ExamReportModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/exam-wise/exam-wise.component.scss":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/exam-wise/exam-wise.component.scss ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportExamWiseExamWiseComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.middle-top {\n  width: 100%;\n  padding: 10px 0px;\n  border-bottom: 1px solid #ccc;\n}\n\n.section-wise-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  margin: 0px 0px;\n}\n\n.course-wise-container {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n}\n\n.course-wise-container .section-title {\n  margin: 10px 0px;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.course-wise-container .section-info-container {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  border-top: 1px solid #ccc;\n  font-size: 12px;\n  min-height: 200px;\n}\n\n.course-wise-container .section-info-container .course-info {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  padding: 5px;\n  border-radius: 4px;\n  border: 1px solid #89C5F8;\n  background: #F2FFFC;\n}\n\n.course-wise-container .section-info-container .course-info .course-info-item {\n  display: flex;\n  flex-direction: column;\n}\n\n.course-wise-container .section-info-container .course-info .course-info-item .course-info-title-container {\n  margin: 5px 0px;\n  color: #52A7F6;\n}\n\n.course-wise-container .section-info-container .course-info .course-info-item .course-info {\n  font-weight: 600;\n}\n\n.course-wise-container .section-info-container .course-info .course {\n  width: 80%;\n  justify-content: flex-start;\n}\n\n.course-wise-container .section-info-container .course-info .exam-date {\n  width: 20%;\n  justify-content: flex-start;\n}\n\n.course-wise-container .section-info-container .marks-info-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 10px 0px;\n  border-bottom: 1px solid #ccc;\n}\n\n.course-wise-container .section-info-container .marks-info-container .marks-info-item {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  justify-content: center;\n  text-align: center;\n}\n\n.course-wise-container .section-info-container .marks-info-container .marks-info-item .marks-title {\n  color: #ccc;\n  margin-bottom: 5px;\n}\n\n.course-wise-container .section-info-container .marks-info-container .marks-info-item .marks {\n  font-weight: 600;\n}\n\n.course-wise-container .section-info-container .ranking-info-container {\n  width: 100%;\n  margin: 10px 0px;\n  margin-bottom: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.course-wise-container .section-info-container .ranking-info-container .marks-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  width: 30%;\n  border-radius: 4px;\n}\n\n.course-wise-container .section-info-container .ranking-info-container .marks-title {\n  color: white;\n  padding: 5px 0px;\n}\n\n.course-wise-container .section-info-container .ranking-info-container .marks-info {\n  padding: 5px 0px;\n}\n\n.course-wise-container .section-info-container .ranking-info-container .highest-border {\n  border: 1px solid #79DC80;\n  color: #79DC80;\n}\n\n.course-wise-container .section-info-container .ranking-info-container .lowest-border {\n  border: 1px solid #DC8979;\n  color: #DC8979;\n}\n\n.course-wise-container .section-info-container .ranking-info-container .topper-border {\n  border: 1px solid #58BDE3;\n  color: #58BDE3;\n}\n\n.course-wise-container .section-info-container .ranking-info-container .highest {\n  background: #79DC80;\n}\n\n.course-wise-container .section-info-container .ranking-info-container .lowest {\n  background: #DC8979;\n}\n\n.course-wise-container .section-info-container .ranking-info-container .topper {\n  background: #58BDE3;\n}\n\n.subject-wise-container {\n  display: flex;\n  flex-direction: column;\n  width: 58%;\n}\n\n.subject-wise-container .section-title {\n  margin: 10px 0px;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.subject-wise-container .subject-wise-table-container {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  border-top: 1px solid #ccc;\n  font-size: 12px;\n  min-height: 200px;\n}\n\n.subject-wise-container .subject-wise-table-container .heading-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  background: #FAFAFA;\n  color: black;\n  padding: 10px;\n  font-weight: 600;\n}\n\n.subject-wise-container .subject-wise-table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 130px;\n  overflow-y: auto;\n}\n\n.subject-wise-container .subject-wise-table-container .value-container, .subject-wise-container .subject-wise-table-container .total-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 10px;\n}\n\n.subject-wise-container .subject-wise-table-container .total-container {\n  font-weight: 600;\n  border-top: 1px solid #ccc;\n}\n\n.subject-wise-container .subject-wise-table-container .heading-item, .subject-wise-container .subject-wise-table-container .value-item, .subject-wise-container .subject-wise-table-container .total-item {\n  width: 50%;\n}\n\n.subejct-null-container {\n  width: 100%;\n  flex-direction: row;\n  display: flex;\n}\n\n.student-wise-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-size: 12px;\n}\n\n.student-wise-container .section-title {\n  margin: 10px 0px;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.student-wise-container .student-wise-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n}\n\n.student-wise-container .student-wise-table-container .student-wise-heading-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 8px;\n  padding-left: 13px;\n}\n\n.student-wise-container .student-wise-table-container .student-wise-heading-container .student-wise-heading-item {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.student-wise-container .student-wise-table-container .subject-wise-container {\n  display: flex;\n  flex-direction: row;\n  width: 40%;\n  max-width: 40%;\n}\n\n.student-wise-container .student-wise-table-container .subject-wise-container .subject-wise-heading-item {\n  font-size: 12px;\n  font-weight: 600;\n  width: 25%;\n  text-align: center;\n}\n\n.student-wise-container .student-wise-table-container .subject-wise-container .subject-wise-value-item {\n  font-size: 12px;\n  font-weight: 400;\n  width: 25%;\n  text-align: center;\n}\n\n.student-wise-container .student-wise-table-container .student-wise-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.student-wise-container .student-wise-table-container .student-wise-value-outer-container .student-wise-value-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  border-left: 5px solid white;\n  padding: 8px;\n  margin-bottom: 10px;\n  border-top: 1px solid #ccc;\n}\n\n.student-wise-container .student-wise-table-container .medium-item {\n  width: 15%;\n}\n\n.student-wise-container .student-wise-table-container .small-item {\n  width: 10%;\n}\n\n.student-wise-container .student-wise-table-container .very-small-item {\n  width: 10%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvbmV3LWV4YW0tcmVwb3J0L2V4YW0td2lzZS9leGFtLXdpc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUUvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0FBRVo7O0FBTEE7RUFLSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFJbkI7O0FBWEE7RUFVSSx5Q0FBc0M7RUFDdEMsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsaUJBQWlCO0FBS3JCOztBQXRCQTtFQW1CTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBT3pCOztBQWpDQTtFQTRCUSxhQUFhO0VBQ2Isc0JBQXNCO0FBUzlCOztBQXRDQTtFQStCVSxlQUFlO0VBQ2YsY0FBYztBQVd4Qjs7QUEzQ0E7RUFtQ1UsZ0JBQWdCO0FBWTFCOztBQS9DQTtFQXVDUSxVQUFVO0VBQ1YsMkJBQTJCO0FBWW5DOztBQXBEQTtFQTJDUSxVQUFVO0VBQ1YsMkJBQTJCO0FBYW5DOztBQXpEQTtFQWdETSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNkJBQTZCO0FBYW5DOztBQWpFQTtFQXNEUSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBZTFCOztBQXpFQTtFQTREVSxXQUFXO0VBQ1gsa0JBQWtCO0FBaUI1Qjs7QUE5RUE7RUFnRVUsZ0JBQWdCO0FBa0IxQjs7QUFsRkE7RUFxRU0sV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFpQnBDOztBQTNGQTtFQTRFUSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtBQW1CMUI7O0FBcEdBO0VBb0ZRLFlBQVk7RUFDWixnQkFBZ0I7QUFvQnhCOztBQXpHQTtFQXdGUSxnQkFBZ0I7QUFxQnhCOztBQTdHQTtFQTJGUSx5QkFBeUI7RUFDekIsY0FBYztBQXNCdEI7O0FBbEhBO0VBK0ZRLHlCQUF5QjtFQUN6QixjQUFjO0FBdUJ0Qjs7QUF2SEE7RUFtR1EseUJBQXlCO0VBQ3pCLGNBQWM7QUF3QnRCOztBQTVIQTtFQXVHUSxtQkFBbUI7QUF5QjNCOztBQWhJQTtFQTBHUSxtQkFBbUI7QUEwQjNCOztBQXBJQTtFQTZHUSxtQkFBbUI7QUEyQjNCOztBQXJCQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQXdCWjs7QUEzQkE7RUFLSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUEwQm5COztBQWpDQTtFQVVJLHlDQUFzQztFQUN0QyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGlCQUFpQjtBQTJCckI7O0FBM0NBO0VBa0JNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQTZCdEI7O0FBckRBO0VBMkJNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQThCdEI7O0FBNURBO0VBaUNNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7QUErQm5COztBQW5FQTtFQXVDTSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBZ0NoQzs7QUF4RUE7RUEyQ00sVUFBVTtBQWlDaEI7O0FBN0JBO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0FBZ0NqQjs7QUE5QkE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0FBaUNqQjs7QUFyQ0E7RUFNSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFtQ25COztBQTNDQTtFQVdJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHlDQUFzQztFQUN0QyxrQkFBa0I7QUFvQ3RCOztBQW5EQTtFQWlCTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBc0N4Qjs7QUEzREE7RUF1QlEsZUFBZTtFQUNmLGdCQUFnQjtBQXdDeEI7O0FBaEVBO0VBNEJNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGNBQWM7QUF3Q3BCOztBQXZFQTtFQWlDUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7QUEwQzFCOztBQTlFQTtFQXVDUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7QUEyQzFCOztBQXJGQTtFQThDTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUEyQ2pCOztBQTNGQTtFQWtEUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLG1CQUFtQjtFQUVuQiwwQkFBMEI7QUE0Q2xDOztBQXJHQTtFQWdFTSxVQUFVO0FBeUNoQjs7QUF6R0E7RUFtRU0sVUFBVTtBQTBDaEI7O0FBN0dBO0VBc0VNLFVBQVU7QUEyQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvbmV3LWV4YW0tcmVwb3J0L2V4YW0td2lzZS9leGFtLXdpc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlLXNlY3Rpb257XG4gIHBhZGRpbmc6IDElO1xufVxuLm1pZGRsZS10b3B7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cblxuLnNlY3Rpb24td2lzZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDBweDtcbn1cbi5jb3Vyc2Utd2lzZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA0MCU7XG4gIC5zZWN0aW9uLXRpdGxle1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnNlY3Rpb24taW5mby1jb250YWluZXJ7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAuY291cnNlLWluZm97XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg5QzVGODtcbiAgICAgIGJhY2tncm91bmQ6ICNGMkZGRkM7XG4gICAgICAuY291cnNlLWluZm8taXRlbXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLmNvdXJzZS1pbmZvLXRpdGxlLWNvbnRhaW5lcntcbiAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgICAgY29sb3I6ICM1MkE3RjY7XG4gICAgICAgIH1cbiAgICAgICAgLmNvdXJzZS1pbmZve1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jb3Vyc2V7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cbiAgICAgIC5leGFtLWRhdGV7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1hcmtzLWluZm8tY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAubWFya3MtaW5mby1pdGVte1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAubWFya3MtdGl0bGV7XG4gICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYXJrc3tcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5yYW5raW5nLWluZm8tY29udGFpbmVye1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAubWFya3MtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgICAubWFya3MtdGl0bGV7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5tYXJrcy1pbmZve1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgfVxuICAgICAgLmhpZ2hlc3QtYm9yZGVye1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzlEQzgwO1xuICAgICAgICBjb2xvcjogIzc5REM4MDtcbiAgICAgIH1cbiAgICAgIC5sb3dlc3QtYm9yZGVye1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREM4OTc5O1xuICAgICAgICBjb2xvcjogI0RDODk3OTtcbiAgICAgIH1cbiAgICAgIC50b3BwZXItYm9yZGVye1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNThCREUzO1xuICAgICAgICBjb2xvcjogIzU4QkRFMztcbiAgICAgIH1cbiAgICAgIC5oaWdoZXN0e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNzlEQzgwO1xuICAgICAgfVxuICAgICAgLmxvd2VzdHtcbiAgICAgICAgYmFja2dyb3VuZDogI0RDODk3OTtcbiAgICAgIH1cbiAgICAgIC50b3BwZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1OEJERTM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zdWJqZWN0LXdpc2UtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTglO1xuICAuc2VjdGlvbi10aXRsZXtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5zdWJqZWN0LXdpc2UtdGFibGUtY29udGFpbmVye1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1heC1oZWlnaHQ6IDEzMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgLnZhbHVlLWNvbnRhaW5lciwgLnRvdGFsLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAudG90YWwtY29udGFpbmVye1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIH1cbiAgICAuaGVhZGluZy1pdGVtLCAudmFsdWUtaXRlbSwgLnRvdGFsLWl0ZW17XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgfVxufVxuLnN1YmVqY3QtbnVsbC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnN0dWRlbnQtd2lzZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIC5zZWN0aW9uLXRpdGxle1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnN0dWRlbnQtd2lzZS10YWJsZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAuc3R1ZGVudC13aXNlLWhlYWRpbmctY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTNweDtcbiAgICAgIC5zdHVkZW50LXdpc2UtaGVhZGluZy1pdGVte1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5zdWJqZWN0LXdpc2UtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgICAuc3ViamVjdC13aXNlLWhlYWRpbmctaXRlbXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuc3ViamVjdC13aXNlLXZhbHVlLWl0ZW17XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAuc3R1ZGVudC13aXNlLXZhbHVlLW91dGVyLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAuc3R1ZGVudC13aXNlLXZhbHVlLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgLnN0dWRlbnQtd2lzZS12YWx1ZS1pdGVte1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLm1lZGl1bS1pdGVte1xuICAgICAgd2lkdGg6IDE1JTtcbiAgICB9XG4gICAgLnNtYWxsLWl0ZW17XG4gICAgICB3aWR0aDogMTAlO1xuICAgIH1cbiAgICAudmVyeS1zbWFsbC1pdGVte1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/exam-wise/exam-wise.component.ts":
    /*!***************************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/exam-wise/exam-wise.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ExamWiseComponent */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportExamWiseExamWiseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamWiseComponent", function () {
        return ExamWiseComponent;
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


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/course-services/course-list.service */
      "./src/app/services/course-services/course-list.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../services/report-services/exam.service */
      "./src/app/services/report-services/exam.service.ts");

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

      var ExamWiseComponent =
      /** @class */
      function () {
        var ExamWiseComponent = /*#__PURE__*/function () {
          function ExamWiseComponent(router, route, examdata, courseList, auth, msgService, commonService) {
            _classCallCheck(this, ExamWiseComponent);

            this.router = router;
            this.route = route;
            this.examdata = examdata;
            this.courseList = courseList;
            this.auth = auth;
            this.msgService = msgService;
            this.commonService = commonService;
            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              type: 'batch'
            };
            this.studentWiseData = [];
            this.examSchdlType = false;
            this.schoolModel = false;
          }

          _createClass(ExamWiseComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this13 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == 'LANG') {
                  _this13.jsonFlag.isProfessional = true;
                  _this13.jsonFlag.type = 'batch';
                } else {
                  _this13.jsonFlag.isProfessional = false;
                  _this13.jsonFlag.type = 'course';
                }
              }); // changes by Nalini - to handle school model conditions

              this.auth.schoolModel.subscribe(function (res) {
                _this13.schoolModel = false;

                if (res) {
                  _this13.schoolModel = true;
                }
              });
              var examschd = sessionStorage.getItem('examSchdType');

              if (examschd) {
                this.examSchdlType = JSON.parse(examschd);
              }

              this.exam_schd_id = this.route.snapshot.paramMap.get('id');
              this.getExamWiseReport();
            }
          }, {
            key: "getExamWiseReport",
            value: function getExamWiseReport() {
              var _this14 = this;

              this.auth.showLoader();
              this.examdata.getExamWiseReport(this.exam_schd_id, this.examSchdlType).subscribe(function (res) {
                _this14.auth.hideLoader();

                var reports = res;
                _this14.exam_wise_data = reports.courseWise;
                _this14.subjectWiseData = reports.courseWise.subjectWise_marks;
                _this14.is_exam_grad_feature = reports.courseWise.is_exam_grad_feature;
                _this14.course_marks_update_level = reports.courseWise.course_marks_update_level;

                if (reports.courseWise.studentWise_report != null) {
                  _this14.studentWiseData = reports.courseWise.studentWise_report;
                }

                sessionStorage.setItem('examSchdType', "");
              }, function (err) {
                _this14.msgService.showErrorMessage(_this14.msgService.toastTypes.error, '', err.error.message);

                _this14.auth.hideLoader();

                sessionStorage.setItem('examSchdType', "");
              });
            }
          }, {
            key: "downloadReportCard",
            value: function downloadReportCard() {
              var _this15 = this;

              this.examdata.downloadExamReport(this.exam_schd_id, this.examSchdlType).subscribe(function (res) {
                console.log(res);

                if (res) {
                  // let resp = res.response;
                  if (res.document != "") {
                    var byteArr = _this15.commonService.convertBase64ToArray(res.document);

                    var fileName = res.docTitle;
                    var file = new Blob([byteArr], {
                      type: 'application/pdf;charset=utf-8;'
                    });
                    var url = URL.createObjectURL(file);
                    var dwldLink = document.getElementById('downloadFileClick');
                    dwldLink.setAttribute("href", url);
                    dwldLink.setAttribute("download", fileName);
                    document.body.appendChild(dwldLink);
                    dwldLink.click();
                  } else {
                    _this15.msgService.showErrorMessage('info', 'Info', "Document does not have any data.");
                  }
                } else {
                  _this15.msgService.showErrorMessage('info', 'Info', "Document does not have any data.");
                }
              }, function (err) {
                // info type msg will be displayed as it will be displayed if no. of subjects are more than 5
                _this15.msgService.showErrorMessage('info', '', err.error.message);
              });
            }
          }]);

          return ExamWiseComponent;
        }();

        ExamWiseComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"]
          }, {
            type: _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_4__["CourseListService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceFactory"]
          }];
        };

        ExamWiseComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-exam-wise',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./exam-wise.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/exam-wise/exam-wise.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./exam-wise.component.scss */
          "./src/app/components/course-module/reports/new-exam-report/exam-wise/exam-wise.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"], _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_4__["CourseListService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceFactory"]])], ExamWiseComponent);
        return ExamWiseComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/new-exam-report.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/new-exam-report.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportNewExamReportComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9yZXBvcnRzL25ldy1leGFtLXJlcG9ydC9uZXctZXhhbS1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/new-exam-report.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/new-exam-report.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: NewExamReportComponent */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportNewExamReportComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewExamReportComponent", function () {
        return NewExamReportComponent;
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

      var NewExamReportComponent =
      /** @class */
      function () {
        var NewExamReportComponent = /*#__PURE__*/function () {
          function NewExamReportComponent() {
            _classCallCheck(this, NewExamReportComponent);
          }

          _createClass(NewExamReportComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return NewExamReportComponent;
        }();

        NewExamReportComponent.ctorParameters = function () {
          return [];
        };

        NewExamReportComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-new-exam-report',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./new-exam-report.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/new-exam-report.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./new-exam-report.component.scss */
          "./src/app/components/course-module/reports/new-exam-report/new-exam-report.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], NewExamReportComponent);
        return NewExamReportComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/teacher-performance/teacher-performance.component.scss":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/teacher-performance/teacher-performance.component.scss ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportTeacherPerformanceTeacherPerformanceComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.middle-top {\n  width: 100%;\n  padding: 10px 0px;\n  border-bottom: 1px solid #ccc;\n}\n\n.section-title {\n  margin: 10px 0px;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.teacher-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  border-top: 1px solid #ccc;\n  font-size: 12px;\n}\n\n.teacher-table-container .table-heading-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  width: 100%;\n  padding: 8px;\n  padding-right: 18px;\n  font-weight: 600;\n  background: #FAFAFA;\n  padding-left: 13px;\n}\n\n.teacher-table-container .table-heading-container .table-heading-item {\n  width: 14.28%;\n}\n\n.teacher-table-container .table-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 33vh;\n  max-height: 33vh;\n  overflow-y: auto;\n}\n\n.teacher-table-container .table-value-outer-container .table-value-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 8px;\n  text-align: left;\n}\n\n.teacher-table-container .table-value-outer-container .table-value-container .table-value-item {\n  width: 14.28%;\n}\n\n.subject-wise-container {\n  margin-top: 20px;\n}\n\n.subject-wise-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  border-top: 1px solid #ccc;\n  font-size: 12px;\n}\n\n.subject-wise-table-container .table-heading-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  width: 100%;\n  padding: 8px;\n  padding-left: 13px;\n  font-weight: 600;\n  background: #FAFAFA;\n}\n\n.subject-wise-table-container .table-heading-container .table-heading-item {\n  width: 10%;\n}\n\n.subject-wise-table-container .table-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 33vh;\n  max-height: 33vh;\n  overflow-y: auto;\n}\n\n.subject-wise-table-container .table-value-outer-container .table-value-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 8px;\n  text-align: left;\n}\n\n.subject-wise-table-container .table-value-outer-container .table-value-container .table-value-item {\n  width: 10%;\n}\n\n.subject-wise-table-container .table-value-outer-container .table-value-container .view-result-btn {\n  padding: 2px 5px;\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #248CF5;\n  color: #248CF5;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.border-completed-class {\n  border-left: 3px solid #00E172;\n  background: #e6fff3;\n}\n\n.border-updated-class {\n  border-left: 3px solid #8A2BE2;\n}\n\n.border-pending-class {\n  border-left: 3px solid #8d8d8d;\n}\n\n.border-cancelled-class {\n  border-left: 3px solid #df0d2f;\n}\n\n.border-upcoming-class {\n  border-left: 3px solid #ff6c24;\n}\n\n.pending {\n  color: #8d8d8d;\n}\n\n.mark_pending {\n  color: #8A2BE2;\n}\n\n.cancelled {\n  color: #df0d2f;\n}\n\n.completed {\n  color: #00E172;\n}\n\n.upcoming {\n  color: #ff6c24;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvbmV3LWV4YW0tcmVwb3J0L3RlYWNoZXItcGVyZm9ybWFuY2UvdGVhY2hlci1wZXJmb3JtYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNkJBQTZCO0FBRS9COztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0FBRWpCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsMkNBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUVqQjs7QUFUQTtFQVNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBSXRCOztBQXJCQTtFQW1CTSxhQUFhO0FBTW5COztBQXpCQTtFQXVCSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBTXBCOztBQWpDQTtFQTZCTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBUXRCOztBQXpDQTtFQW1DUSxhQUFhO0FBVXJCOztBQUhBO0VBQ0UsZ0JBQWdCO0FBTWxCOztBQUpBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsMkNBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZTtBQU9qQjs7QUFkQTtFQVNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFTdkI7O0FBekJBO0VBa0JNLFVBQVU7QUFXaEI7O0FBN0JBO0VBc0JJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFXcEI7O0FBckNBO0VBNEJNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFhdEI7O0FBN0NBO0VBa0NRLFVBQVU7QUFlbEI7O0FBakRBO0VBcUNRLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0FBZ0J0Qjs7QUFYQTtFQUNFLGtCQUFrQjtBQWNwQjs7QUFSQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFXckI7O0FBVEE7RUFDRSw4QkFBOEI7QUFZaEM7O0FBVkE7RUFDRSw4QkFBOEI7QUFhaEM7O0FBWEE7RUFDRSw4QkFBOEI7QUFjaEM7O0FBWkE7RUFDRSw4QkFBOEI7QUFlaEM7O0FBWkE7RUFDRSxjQUFjO0FBZWhCOztBQWJBO0VBQ0UsY0FBYztBQWdCaEI7O0FBZEE7RUFDRSxjQUFjO0FBaUJoQjs7QUFmQTtFQUNFLGNBQWM7QUFrQmhCOztBQWhCQTtFQUNFLGNBQWM7QUFtQmhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvbmV3LWV4YW0tcmVwb3J0L3RlYWNoZXItcGVyZm9ybWFuY2UvdGVhY2hlci1wZXJmb3JtYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbntcbiAgcGFkZGluZzogMSU7XG59XG4ubWlkZGxlLXRvcHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLnNlY3Rpb24tdGl0bGV7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRlYWNoZXItdGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLnRhYmxlLWhlYWRpbmctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICAgIC50YWJsZS1oZWFkaW5nLWl0ZW0ge1xuICAgICAgd2lkdGg6IDE0LjI4JTtcbiAgICB9XG4gIH1cbiAgLnRhYmxlLXZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDMzdmg7XG4gICAgbWF4LWhlaWdodDogMzN2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC50YWJsZS12YWx1ZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAudGFibGUtdmFsdWUtaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxNC4yOCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLnN1YmplY3Qtd2lzZS1jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc3ViamVjdC13aXNlLXRhYmxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBmb250LXNpemU6IDEycHg7XG4gIC50YWJsZS1oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gICAgLnRhYmxlLWhlYWRpbmctaXRlbSB7XG4gICAgICB3aWR0aDogMTAlO1xuICAgIH1cbiAgfVxuICAudGFibGUtdmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMzN2aDtcbiAgICBtYXgtaGVpZ2h0OiAzM3ZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLnRhYmxlLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIC50YWJsZS12YWx1ZS1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgIH1cbiAgICAgIC52aWV3LXJlc3VsdC1idG57XG4gICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzI0OENGNTtcbiAgICAgICAgY29sb3I6ICMyNDhDRjU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4udGV4dC1hbGlnbi1jZW50ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cblxuLmJvcmRlci1jb21wbGV0ZWQtY2xhc3N7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwRTE3MjtcbiAgYmFja2dyb3VuZDogI2U2ZmZmMztcbn1cbi5ib3JkZXItdXBkYXRlZC1jbGFzc3tcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjOEEyQkUyO1xufVxuLmJvcmRlci1wZW5kaW5nLWNsYXNze1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM4ZDhkOGQ7XG59XG4uYm9yZGVyLWNhbmNlbGxlZC1jbGFzc3tcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZGYwZDJmO1xufVxuLmJvcmRlci11cGNvbWluZy1jbGFzc3tcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmY2YzI0O1xufVxuXG4ucGVuZGluZ3tcbiAgY29sb3I6ICM4ZDhkOGQ7XG59XG4ubWFya19wZW5kaW5ne1xuICBjb2xvcjogIzhBMkJFMjtcbn1cbi5jYW5jZWxsZWR7XG4gIGNvbG9yOiAjZGYwZDJmO1xufVxuLmNvbXBsZXRlZHtcbiAgY29sb3I6ICMwMEUxNzI7XG59XG4udXBjb21pbmd7XG4gIGNvbG9yOiAjZmY2YzI0O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/reports/new-exam-report/teacher-performance/teacher-performance.component.ts":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/components/course-module/reports/new-exam-report/teacher-performance/teacher-performance.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: TeacherPerformanceComponent */

    /***/
    function srcAppComponentsCourseModuleReportsNewExamReportTeacherPerformanceTeacherPerformanceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherPerformanceComponent", function () {
        return TeacherPerformanceComponent;
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


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../services/course-services/course-list.service */
      "./src/app/services/course-services/course-list.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/report-services/exam.service */
      "./src/app/services/report-services/exam.service.ts");

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

      var TeacherPerformanceComponent =
      /** @class */
      function () {
        var TeacherPerformanceComponent = /*#__PURE__*/function () {
          function TeacherPerformanceComponent(router, route, examdata, courseList, auth, msgService) {
            _classCallCheck(this, TeacherPerformanceComponent);

            this.router = router;
            this.route = route;
            this.examdata = examdata;
            this.courseList = courseList;
            this.auth = auth;
            this.msgService = msgService;
            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              type: 'batch'
            };
            this.subjectName = "";
            this.teachersReport = [];
            this.subjectsReport = [];
          }

          _createClass(TeacherPerformanceComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this16 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == 'LANG') {
                  _this16.jsonFlag.isProfessional = true;
                  _this16.jsonFlag.type = 'batch';
                } else {
                  _this16.jsonFlag.isProfessional = false;
                  _this16.jsonFlag.type = 'course';
                }
              });
              this.subjectName = sessionStorage.getItem('subjectName');
              sessionStorage.setItem('subjectName', '');
              this.subject_id = this.route.snapshot.paramMap.get('id');
              this.getSubjectWiseReport();
            }
          }, {
            key: "getSubjectWiseReport",
            value: function getSubjectWiseReport() {
              var _this17 = this;

              this.auth.showLoader();
              this.examdata.getSubjectWiseReport(this.subject_id).subscribe(function (res) {
                _this17.auth.hideLoader();

                var result = res;
                _this17.teacherData = result.teacherPerformanceReport;
                _this17.subjectData = result.subjectWisePerformance;

                for (var i = 0; i < _this17.teacherData.length; i++) {
                  var teacherName = _this17.teacherData[i].teacher_name;
                  var teacherId = _this17.teacherData[i].teacher_id;

                  for (var l = 0; l < _this17.teacherData[i].performanceList.length; l++) {
                    _this17.teacherData[i].performanceList[l].teacher_id = teacherId;
                    _this17.teacherData[i].performanceList[l].teacher_name = teacherName;

                    _this17.teachersReport.push(_this17.teacherData[i].performanceList[l]);
                  }
                }

                for (var _i2 = 0; _i2 < _this17.subjectData.length; _i2++) {
                  var _teacherName = _this17.subjectData[_i2].teacher_name;
                  var _teacherId = _this17.subjectData[_i2].teacher_id;

                  for (var _l = 0; _l < _this17.subjectData[_i2].performanceList.length; _l++) {
                    _this17.subjectData[_i2].performanceList[_l].teacher_id = _teacherId;
                    _this17.subjectData[_i2].performanceList[_l].teacher_name = _teacherName;

                    _this17.subjectsReport.push(_this17.subjectData[_i2].performanceList[_l]);
                  }
                }
              }, function (err) {
                _this17.msgService.showErrorMessage(_this17.msgService.toastTypes.error, '', err.error.message);

                _this17.auth.hideLoader();
              });
            }
          }, {
            key: "routeTo",
            value: function routeTo(exam_schd_id) {
              sessionStorage.setItem('examSchdType', "true");
              this.router.navigate(['/view/' + this.jsonFlag.type + '/reports/exam-dashboard/examWise/' + exam_schd_id]);
            }
          }]);

          return TeacherPerformanceComponent;
        }();

        TeacherPerformanceComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"]
          }, {
            type: _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_3__["CourseListService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]
          }];
        };

        TeacherPerformanceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-teacher-performance',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./teacher-performance.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/new-exam-report/teacher-performance/teacher-performance.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./teacher-performance.component.scss */
          "./src/app/components/course-module/reports/new-exam-report/teacher-performance/teacher-performance.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"], _services_course_services_course_list_service__WEBPACK_IMPORTED_MODULE_3__["CourseListService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]])], TeacherPerformanceComponent);
        return TeacherPerformanceComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-course-module-reports-new-exam-report-exam-report-module-es5.js.map