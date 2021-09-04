(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-course-module-create-course-course-class-course-class-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-class/class-add/class-add.component.html":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-class/class-add/class-add.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleCreateCourseCourseClassClassAddClassAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"middle-section clearFix\" style=\"padding: 10px 10px;\">\n  <div class=\"heading-section\" style=\"margin-top: -30px;\">\n    <h1>\n      Class Schedule Details\n    </h1>\n  </div>\n  <section class=\"cal-view\">\n    <aside class=\"boxPadding15\">\n      <!-- ==================================================================================== -->\n      <!-- ==================================================================================== -->\n      <!-- ========================== Header Section ========================================== -->\n      <!-- ==================================================================================== -->\n      <!-- ==================================================================================== -->\n      <!-- ========================== Body Section ============================================ -->\n      <section class=\"schedule-class-box\">\n        <!-- ==================================================================================== -->\n        <!-- ==================================================================================== -->\n        <!-- ========================== Search bar ============================================== -->\n        <section class=\"common-search-filter\" style=\"padding:5px 5px 10px 5px\">\n          <div class=\"filter-search\">\n            <div class=\"filter-box clearFix\">\n              <div class=\"row\">\n                <div class=\"c-lg-12 c-md-12 c-sm-12\">\n                  <div class=\"search-filter-wrapper\" *ngIf=\"isProfessional\">\n                    <div class=\"row\">\n                      <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                        <div class=\"field-wrapper\"\n                          [ngClass]=\"{'has-value': fetchMasterBatchModule.standard_id != '-1'}\">\n                          <label for=\"smc\">Select Master course\n                            <span class=\"text-danger\">*</span>\n                          </label>\n                          <select id=\"smc\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterBatchModule.standard_id\"\n                            (ngModelChange)=\"updateSubjectList($event)\">\n                            <option value=\"-1\">Select Master course</option>\n                            <option [value]=\"std.standard_id\" *ngFor=\"let  std of courseModelStdList\">\n                              {{std.standard_name}}\n                            </option>\n                          </select>\n\n                        </div>\n                      </div>\n                      <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': fetchMasterBatchModule.subject_id != '-1'}\">\n                          <label for=\"sc\">Select Course\n                            <span class=\"text-danger\">*</span>\n                          </label>\n                          <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterBatchModule.subject_id\"\n                            (ngModelChange)=\"filterSubjectBatches($event)\">\n                            <option value=\"-1\">Select Course</option>\n                            <option [value]=\"subject.subject_id\" *ngFor=\"let subject of courseModelSubList\">\n                              {{subject.subject_name}}\n                            </option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': fetchMasterBatchModule.batch_id != '-1'}\">\n                          <label for=\"bn\">Select Batch Name\n                            <span class=\"text-danger\">*</span>\n                          </label>\n                          <select id=\"bn\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterBatchModule.batch_id\"\n                            (ngModelChange)=\"batchUpdated($event)\">\n                            <option value=\"-1\">Select Batch Name</option>\n                            <option [value]=\"batch.batch_id\" *ngFor=\"let batch of courseModelBatchList\">\n                              {{batch.batch_name}}\n                            </option>\n                          </select>\n\n                        </div>\n                      </div>\n                      <div class=\"c-lg-1 c-md-1 c-sm-1\" style=\"margin-top: 15px\">\n                        <button class=\"btn fullBlue\" (click)=\"submitMasterBatch()\">Go</button>\n                      </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"isClassFormFilled\" style=\"margin-top:5px;margin-left:0px;font-size: 12px;\">\n                      <span>Batch Duration: </span>\n                      <span style=\"font-weight: 600;\">{{batchDetails?.batch_start_date}} - </span>\n                      <span style=\"font-weight: 600;\">{{batchDetails?.batch_end_date}}</span>\n                    </div>\n                  </div>\n                  <div class=\"search-filter-wrapper\" *ngIf=\"!isProfessional\">\n                    <div class=\"row\">\n                      <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                        <div class=\"field-wrapper\"\n                          [ngClass]=\"{'has-value': fetchMasterCourseModule.master_course != '-1'}\">\n                          <!-- changes by Nalini - to handle school model conditions -->\n                          <label for=\"smc\">Select {{schoolModel ? 'Standard' : 'Master Course'}}\n                            <span class=\"text-danger\">*</span>\n                          </label>\n                          <select id=\"smc\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterCourseModule.master_course\"\n                            (ngModelChange)=\"updateCourseList($event)\">\n                             <!-- changes by Nalini - to handle school model conditions -->\n                             <option value=\"-1\">Select {{schoolModel ? 'Standard' : 'Master Course'}}</option>\n                            <option [value]=\"master\" *ngFor=\"let  master of masterCourse\">\n                              {{master}}\n                            </option>\n                          </select>\n\n                        </div>\n                      </div>\n                      <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': fetchMasterCourseModule.course_id != '-1'}\">\n                          <label for=\"sc\">Select {{schoolModel ? 'Section' : 'Course'}}\n                            <span class=\"text-danger\">*</span>\n                          </label>\n                          <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterCourseModule.course_id\"\n                            (ngModelChange)=\"onCourseListSelection($event)\">\n                            <option value=\"-1\">Select {{schoolModel ? 'Section' : 'Course'}}</option>\n                            <option [value]=\"course.course_id\" *ngFor=\"let course of courseList\">\n                              {{course.course_name}}\n                            </option>\n                          </select>\n\n                        </div>\n                      </div>\n                      <div class=\"c-lg-3 c-md-3 c-sm-3\" *ngIf=\"!schoolModel\">\n                        <div class=\"field-wrapper  datePickerBox\"\n                          [ngClass]=\"{'has-value': (fetchMasterCourseModule.requested_date != 'Invalid date' && fetchMasterCourseModule.requested_date != '' )}\">\n                          <label for=\"csd\">Class Schedule Date\n                            <!--<span class=\"text-danger\">*</span> -->\n                          </label>\n                          <input type=\"text\" value=\"\" id=\"csd\" class=\"form-ctrl\"\n                            [(ngModel)]=\"fetchMasterCourseModule.requested_date\" readonly=\"true\" name=\"csd\"\n                            bsDatepicker>\n\n                          <!-- <span class=\"date-clear\" name=\"csdc\" (click)=\"fetchMasterCourseModule.requested_date = ''\">clear</span> -->\n                        </div>\n                      </div>\n                      <div class=\"c-lg-3 c-md-3 c-sm-3\" *ngIf=\"schoolModel\">\n                        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': fetchMasterCourseModule.selected_day != '-1'}\">\n                          <label for=\"sc\">Select Day\n                            <span class=\"text-danger\">*</span>\n                          </label>\n                          <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterCourseModule.selected_day\">\n                            <option value=\"-1\">Select Day</option>\n                            <option [value]=\"course.data_key\" *ngFor=\"let course of weekDaysListWithoutWeekend\">\n                              {{course.data_value}}\n                            </option>\n                          </select>\n\n                        </div>\n                      </div>\n                      <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                        <input type=\"button\" class=\"fullBlue btn\" style=\"margin-top:5%;\" value=\"Go\"\n                          (click)=\"submitMasterCourse()\" id=\"goInp8\">\n                      </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"courseStartDate && !schoolModel\" style=\"margin-top:5px;margin-left:0px;font-size: 12px;\">\n                      <span>Course Duration: </span>\n                      <span style=\"font-weight: 600;\">{{courseStartDate | date: 'dd-MMM-yyyy'}} - </span>\n                      <span style=\"font-weight: 600;\">{{courseEndDate | date: 'dd-MMM-yyyy'}}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n        <!-- ==================================================================================== -->\n        <!-- ==================================================================================== -->\n        <!-- ========================== View Type List/Calendar ================================= -->\n        <section class=\"schedule-class\" *ngIf=\"isClassFormFilled\">\n          <div class=\"row\">\n            <div class=\"c-lg-7 c-sm-7 c-md-7 c-xs-12\">\n              <div class=\"schedule-class-left\">\n                <label>Schedule Class</label>\n              </div>\n            </div>\n            <div class=\"c-lg-5 c-sm-5 c-md-5 c-xs-12 align-right\">\n\n              <button class=\"btn\" *ngIf=\"hidePastClass() && !isProfessional && classScheduleArray.length > 0\"\n                (click)=\"sendReminder()\" style=\"padding: 5px;\">Send Reminder</button>\n\n              <!-- <input type=\"button\" value=\"Calendar View fullBlue\" class=\"btn fullBlue\">\n                <input type=\"button\" value=\"List View\" class=\"btn \"> -->\n            </div>\n          </div>\n        </section>\n        <!-- ==================================================================================== -->\n        <!-- ==================================================================================== -->\n        <!-- ========================== Account 5 Course Schedule ================================= -->\n        <section class=\"\" *ngIf=\"isClassFormFilled && !isProfessional\">\n\n          <div class=\"table-wrapper tableStyling\">\n            <div class=\"table-scroll-wrapper\">\n              <div class=\"table table-responsive classScheduleTable\">\n                <table class=\"table-main\">\n                  <thead>\n                    <tr>\n                      <th class=\"subj\">\n                        Subject\n                        <span class=\"text-danger\">*</span>\n                      </th>\n                      <th *ngIf=\"!schoolModel\">\n                        Topic\n                        <!--<span class=\"text-danger\">*</span> -->\n                      </th>\n                      <th>\n                        Start Time\n                        <span class=\"text-danger\">*</span>\n                      </th>\n                      <th>\n                        End Time\n                        <span class=\"text-danger\">*</span>\n                      </th>\n                      <th>\n                        Select Teacher\n                        <span class=\"text-danger\">*</span>\n                      </th>\n                      <th class=\"desc\" *ngIf=\"!schoolModel\">\n                        Description\n                        <span title=\"Special characters not allowed in Description\">\n\n                          <!DOCTYPE svg\n                            PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n                          <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"14px\" height=\"14px\"\n                            viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n                            <path fill=\"#1385F2\" d=\"M24.067,0c-13.255,0-24,10.746-24,24s10.745,24,24,24c13.252,0,23.997-10.746,23.997-24S37.319,0,24.067,0z\n\t M23.779,38.121c-1.035,0.802-2.029,1.208-2.991,1.208c-0.625,0-1.145-0.188-1.549-0.561c-0.402-0.374-0.603-0.847-0.603-1.421\n\tc0-0.581,0.188-1.524,0.573-2.845l3.017-10.371c0.482-1.688,0.72-2.752,0.72-3.193c0-0.327-0.117-0.597-0.362-0.818\n\tc-0.237-0.216,0.198-0.335-0.208-0.335c-0.345,0-0.376,0.088-1.376,0.263v-0.891l7.237-1.328L23.295,34.07\n\tc-0.308,1.091-0.645,1.746-0.645,1.96c0,0.246-0.025,0.443,0.123,0.595c0.144,0.158,0.261,0.232,0.449,0.232\n\tc0.251,0,0.509-0.123,0.817-0.374c0.874-0.688,1.756-1.671,2.663-2.96l0.79,0.547C26.439,35.663,25.195,37.016,23.779,38.121z\n\t M28.818,12.606c-0.445,0.46-0.987,0.691-1.621,0.691c-0.636,0-1.175-0.231-1.637-0.691c-0.463-0.462-0.69-0.999-0.69-1.637\n\tc0-0.638,0.224-1.172,0.68-1.626c0.441-0.448,0.997-0.673,1.646-0.673c0.653,0,1.196,0.225,1.642,0.673\n\tc0.438,0.454,0.659,0.988,0.659,1.626C29.498,11.607,29.271,12.144,28.818,12.606z\" />\n                          </svg>\n\n                        </span>\n                      </th>\n                      <th class=\"room\">\n                        Room No.\n                      </th>\n                      <th class=\"cl-type\" *ngIf=\"!schoolModel\">\n                        Class Type\n                      </th>\n                      <th *ngIf=\"!schoolModel\">\n                        Repeat\n                      </th>\n                      <th>\n\n                      </th>\n                    </tr>\n                  </thead>\n\n                  <tbody>\n\n                    <tr class=\"adder\">\n\n                      <td class=\"subj\">\n                        <div class=\"form-wrapper\"\n                          [ngClass]=\"{'has-value' : addClassDetails.subject_id != '-1' && addClassDetails.subject_id != '' }\">\n                          <select id=\"subjectSelctionDDN\" class=\"side-form-ctrl\" name=\"row.subject_id\"\n                            [(ngModel)]=\"addClassDetails.subject_id\" (ngModelChange)=\"onSubjectSelection($event)\">\n                            <option value=\"-1\"> </option>\n                            <option *ngFor=\"let opt of subjectListDataSource\" [value]=\"opt.subject_id\">\n                              {{opt.subject_name}}\n                            </option>\n                          </select>\n                        </div>\n                      </td>\n\n                      <td class=\"topic\" *ngIf=\"!schoolModel\">\n                        <div class=\"form-wrapper\" *ngIf=\"addLinkStatus==''\"\n                          [ngClass]=\"{'has-value' : addClassDetails.class_desc != '' && addClassDetails.class_desc != null }\">\n                          <input type=\"textbox\" class=\"side-form-ctrl topic-link\" name=\"label\" style=\"height: 31px;\"\n                            id=\"classDetailsTxt9\" placeholder=\"Link\" readonly (click)=\"topicListing()\">\n                          <i class=\"fa fa-link\" aria-hidden=\"true\" (click)=\"topicListing  ()\"\n                            style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;position: absolute; top: 10px; right: 15px;\"></i>\n                        </div>\n                        <div class=\"form-wrapper\" *ngIf=\"addLinkStatus=='linked'\">\n                          <input type=\"textbox\" class=\"side-form-ctrl topic-linked\" name=\"label\" style=\"height: 31px;\"\n                            id=\"classDetailsTxt9\" placeholder=\"Linked\" readonly (click)=\"topicListing()\">\n                          <i class=\"fa fa-link\" aria-hidden=\"true\" (click)=\"topicListing()\"\n                            style=\"cursor: pointer;color: #1283f4;font-size: 15px;position: absolute; top: 10px; right: 15px;\"></i>\n                        </div>\n                      </td>\n\n                      <td class=\"\">\n                        <div class=\"timePickerParent\">\n                          <div class=\"form-wrapper\">\n                            <select id=\"followuptime\" class=\"side-form-ctrl field-wrapper hourTime\"\n                              [(ngModel)]=\"addClassDetails.start_hour\" name=\"followuptime\">\n                              <option [value]=\"time\" *ngFor=\"let time of times\">\n                                {{time}}\n                              </option>\n                            </select>\n                          </div>\n                          <div class=\"form-wrapper\">\n                            <select id=\"minute\" class=\"side-form-ctrl fields-wrapper minuteTime\"\n                              [(ngModel)]=\"addClassDetails.start_minute\" name=\"minute\">\n                              <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                {{minute}}\n                              </option>\n                            </select>\n                          </div>\n                        </div>\n                      </td>\n\n                      <td class=\"\">\n                        <div class=\"timePickerParent\">\n                          <div class=\"form-wrapper\">\n                            <select id=\"followuptime\" class=\"side-form-ctrl field-wrapper hourTime\"\n                              [(ngModel)]=\"addClassDetails.end_hour\" name=\"followuptime\">\n                              <option [value]=\"time\" *ngFor=\"let time of times\">\n                                {{time}}\n                              </option>\n                            </select>\n                          </div>\n                          <div class=\"form-wrapper\">\n                            <select id=\"minute\" class=\"side-form-ctrl fields-wrapper minuteTime\"\n                              [(ngModel)]=\"addClassDetails.end_minute\" name=\"minute\">\n                              <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                {{minute}}\n                              </option>\n                            </select>\n                          </div>\n                        </div>\n                      </td>\n\n\n                      <td>\n                        <div class=\"form-wrapper\"\n                          [ngClass]=\"{'has-value' : addClassDetails.teacher_id != '-1' && addClassDetails.teacher_id != '' }\">\n                          <select id=\"\" class=\"side-form-ctrl viewClass\" name=\"row.category_id\"\n                            [(ngModel)]=\"addClassDetails.teacher_id\" disabled=\"{{userType==3}}\">\n                            <option value=\"-1\"></option>\n                            <option *ngFor=\"let opt of teacherListDataSource\" [value]=\"opt.teacher_id\">\n                              {{opt.teacher_name}}\n                            </option>\n                          </select>\n                        </div>\n                      </td>\n\n                      <td class=\"desc\" *ngIf=\"!schoolModel\">\n                        <div class=\"form-wrapper\"\n                          [ngClass]=\"{'has-value' : addClassDetails.class_desc != '' && addClassDetails.class_desc != null }\">\n                          <input type=\"textbox\" class=\"side-form-ctrl viewClass\" name=\"label\"\n                            [(ngModel)]=\"addClassDetails.class_desc\" style=\"height: 31px;\" id=\"classDetailsTxt9\">\n                        </div>\n                      </td>\n\n                      <td class=\"room\">\n                        <div class=\"form-wrapper\"\n                          [ngClass]=\"{'has-value' : addClassDetails.room_no != '' && addClassDetails.room_no != null }\">\n                          <input type=\"text\" class=\"side-form-ctrl viewClass\" name=\"label\"\n                            [(ngModel)]=\"addClassDetails.room_no\" style=\"height: 31px;\" id=\"addClassInp9\">\n                        </div>\n                      </td>\n\n                      <td class=\"cl-type\" *ngIf=\"!schoolModel\">\n                        <div class=\"form-wrapper\"\n                          [ngClass]=\"{'has-value' : addClassDetails.custom_class_type != '-1' && addClassDetails.custom_class_type != '' }\">\n                          <select id=\"\" class=\"side-form-ctrl\" name=\"row.category_id\"\n                            [(ngModel)]=\"addClassDetails.custom_class_type\" style=\"background: transparent;\">\n                            <option *ngFor=\"let opt of customListDataSource\">\n                              {{opt}}\n                            </option>\n                          </select>\n                        </div>\n                      </td>\n\n                      <!-- Recurrence to be empty by default -->\n                      <td>\n                      </td>\n\n                      <td>\n                        <button class=\"btn\" (click)=\"addClassSchedule()\" id=\"addAnch10\" value=\"Add\">Add\n                          <!-- <a id=\"addAnch10\">Add</a> -->\n                        </button>\n                      </td>\n\n                    </tr>\n\n                    <tr id=\"row{{i}}\" *ngFor=\"let row of classScheduleArray; let i= index ; trackBy : index\">\n                      <td class=\"subj\">\n                        {{row.subject_name}}\n                      </td>\n                      <td class=\"topic\" *ngIf=\"row.topics_covered!='0' && row.topics_covered!='' && !schoolModel\">\n                        <div class=\"form-wrapper\">\n                          <input type=\"textbox\" class=\"side-form-ctrl topic-linked\" name=\"label\" style=\"height: 31px;\"\n                            id=\"classDetailsTxt9\" placeholder=\"Linked\" readonly\n                            (click)=\"topicListingForAlreadyLinkedTopics(row, row.subject_id, row.topics_covered)\">\n                          <i class=\"fa fa-link\" aria-hidden=\"true\"\n                            (click)=\"topicListingForAlreadyLinkedTopics(row, row.subject_id, row.topics_covered)\"\n                            style=\"cursor: pointer;color: #1283f4;font-size: 15px;position: absolute; top: 10px; right: 15px;\"></i>\n                        </div>\n                      </td>\n                      <td class=\"topic\" *ngIf=\"((row.topics_covered=='')||(row.topics_covered=='0')) && !schoolModel\">\n                        <div class=\"form-wrapper\">\n                          <input type=\"textbox\" class=\"side-form-ctrl topic-link\" name=\"label\" style=\"height: 31px;\"\n                            id=\"classDetailsTxt9\" placeholder=\"Link\" readonly\n                            (click)=\"topicListingForAlreadyLinkedTopics(row, row.subject_id, row.topics_covered)\">\n                          <i class=\"fa fa-link\" aria-hidden=\"true\"\n                            (click)=\"topicListingForAlreadyLinkedTopics(row, row.subject_id, row.topics_covered)\"\n                            style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;position: absolute; top: 10px; right: 15px;\"></i>\n                        </div>\n                      </td>\n                      <td>\n                        {{row.start_time}}\n                      </td>\n                      <td>\n                        {{row.end_time}}\n                      </td>\n                      <td>\n                        <div class=\"form-wrapper\">\n                          <select id=\"\" class=\"side-form-ctrl\" name=\"row.category_id\" style=\"background: transparent\"\n                            [(ngModel)]=\"row.teacher_id\" disabled=\"{{userType==3}}\">\n                            <option value=\"-1\"></option>\n                            <option *ngFor=\"let opt of teacherListDataSource\" [value]=\"opt.teacher_id\">\n                              {{opt.teacher_name}}\n                            </option>\n                          </select>\n                        </div>\n                      </td>\n                      <td class=\"desc\" *ngIf=\"!schoolModel\">\n                        <div class=\"form-wrapper\">\n                          <input type=\"text\" class=\"side-form-ctrl editCellInput\" style=\"background: transparent\"\n                            [(ngModel)]=\"row.class_desc\" name=\"label\" id=\"rowInp1\">\n                        </div>\n                      </td>\n                      <td class=\"room\">\n                        <div class=\"form-wrapper\">\n                          <input type=\"text\" class=\"side-form-ctrl editCellInput\" style=\"background: transparent\"\n                            [(ngModel)]=\"row.room_no\" name=\"label\" id=\"rowInp2\">\n                        </div>\n                      </td>\n\n                      <td class=\"cl-type\" *ngIf=\"!schoolModel\">\n                        <div class=\"form-wrapper\">\n                          <select id=\"\" class=\"side-form-ctrl\" name=\"row.category_id\" style=\"background: transparent\"\n                            [(ngModel)]=\"row.custom_class_type\">\n                            <option *ngFor=\"let opt of customListDataSource\" [value]=\"opt\">\n                              {{opt}}\n                            </option>\n                          </select>\n                        </div>\n                      </td>\n\n                      <td *ngIf=\"!schoolModel\">\n                        <div class=\"form-wrapper\">\n                          <select *ngIf=\"(row.class_schedule_id != 0)\" id=\"\" style=\"background: transparent\"\n                            class=\"side-form-ctrl\" name=\"row.category_id\" (change)=\"weeklyScheduleChange($event , row)\">\n                            <option value=\"1\">Does Not Repeat</option>\n                            <option value=\"2\">Select Dates</option>\n                            <option value=\"3\">Custom</option>\n                          </select>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"action-box\">\n                          <span *ngIf=\"row.class_schedule_id != 0 && row.is_attendance_marked == 'N'\"\n                            class=\"reschedule-icon\" title=\"Cancel Class\" (click)=\"cancelCourseClicked(row)\"> X </span>\n                          <span *ngIf=\"row.class_schedule_id == 0\" (click)=\"removeRowFromSchedule(i , row)\"\n                            title=\"Delete\" class=\"delete-btn\">\n                            <i class=\"fa fa-trash-o\" style=\"font-family: FontAwesome;\" aria-hidden=\"true\"></i>\n                          </span>\n                          <!-- <span class=\"edit-icon\"></span> -->\n                        </div>\n                      </td>\n                    </tr>\n\n                  </tbody>\n\n                  <tbody *ngIf=\"classScheduleArray.length ==0\">\n                    <tr>\n                      <td colspan=\"10\">\n                        No Schedule For Current Date Found\n                      </td>\n                    </tr>\n                  </tbody>\n\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"extraMargin row\" style=\"margin-right: 15px; margin-bottom:10px;\">\n            <div class=\"pull-left\">\n              <button type=\"button\" class=\"btn\" style=\"margin-left: 0px;\" name=\"button\"\n                routerLink=\"/view/course/coursePlanner/class\" *ngIf=\"coursePlannerStatus=='true'\">Back</button>\n            </div>\n            <div class=\"pull-right\">\n              <button class=\"btn\" (click)=\"saveCourseSchedule()\" id=\"btnSaveBtn\">Save</button>\n              <button class=\"btn\" routerLink=\"/view/course/create/class/home\" id=\"BtnCancelBtn\">Cancel</button>\n\n            </div>\n          </div>\n        </section>\n\n        <!-- ==================================================================================== -->\n        <!-- ========================== Account 4 Batch Schedule ================================= -->\n        <section class=\"batch-schedule\" *ngIf=\"isClassFormFilled && isProfessional\">\n\n          <div class=\"filter-Section\">\n            <div class=\"row\">\n              <div class=\"c-lg-4 c-md-4 c-sm-4\">\n                <select class=\"side-form-ctrl\" name=\"row.category_id\" (ngModelChange)=\"scheduleSelection($event)\"\n                  [(ngModel)]=\"batchFrequency\">\n                  <option value=\"1\">Weekly</option>\n                  <option value=\"2\">Custom</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"weekly-Schedule\" *ngIf=\"batchFrequency == '1'\">\n\n            <div class=\"weeklyDiv\">\n\n              <div class=\"row weeklyAdd\">\n                <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                  <div class=\"field-wrapper datePickerBox\" style=\"padding: 0px;\"\n                    [ngClass]=\"{'has-value': custom.date!=''}\">\n                    <label for=\"csd\">Schedule Date\n                      <span class=\"text-danger\">*</span>\n                    </label>\n                    <input type=\"text\" value=\"\" id=\"csd\" class=\"form-ctrl bsDatepicker\" [(ngModel)]=\"custom.date\"\n                      readonly=\"true\" name=\"csd\" bsDatepicker>\n                  </div>\n                </div>\n\n                <div class=\"c-sm-2 c-md-2 c-lg-2\">\n                  <div class=\"form-wrapper timepick\">\n                    <label for=\"startTime\">Start Time</label>\n                    <div class=\"tbox\">\n                      <div class=\"times\">\n                        <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"mainStartTime.hour\" name=\"startTime\">\n                          <option [value]=\"time\" *ngFor=\"let time of times\">\n                            {{time}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"times\">\n                        <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"mainStartTime.minute\" name=\"minute\">\n                          <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                            {{minute}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"c-sm-2 c-md-2 c-lg-2\">\n                  <div class=\"form-wrapper timepick\">\n                    <label for=\"startTime\">End Time</label>\n                    <div class=\"tbox\">\n                      <div class=\"times\">\n                        <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"mainEndTime.hour\" name=\"startTime\">\n                          <option [value]=\"time\" *ngFor=\"let time of times\">\n                            {{time}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"times\">\n                        <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"mainEndTime.minute\" name=\"minute\">\n                          <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                            {{minute}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"pull-right btnGroup\">\n                  <button class=\"btn\" (click)=\"applyButtonClick()\">Apply</button>\n                  <button class=\"btn\" *ngIf=\"showCancelWeeklyBtn\" (click)=\"cancelWeeklyScheduledClass()\">Cancel\n                    Weekly Scheduled Class</button>\n                </div>\n              </div>\n\n              <div class=\"table-scroll-wrapper\">\n                <div class=\"table-responsive \">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>\n                          Week Days\n                        </th>\n                        <th>\n                          Start Time\n                        </th>\n                        <th>\n                          End Time\n                        </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let row of weekDaysTable; let i=index ; trackBy : index \">\n                        <td>\n                          <div class=\"field-checkbox-wrapper\">\n\n                            <input type=\"checkbox\" name=\"chk\" name=\"checkbx\" id=\"checkbx{{i}}\"\n                              [(ngModel)]=\"row.uiSelected\" class=\"form-checkbox\">\n                            <label for=\"checkbx{{i}}\">\n                              {{row.data_value}}\n                            </label>\n                          </div>\n                        </td>\n                        <td>\n                          <div class=\"form-wrapper timepick\">\n                            <div class=\"tbox\">\n                              <div class=\"times\">\n                                <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"row.start_time.hour\"\n                                  name=\"startTime\">\n                                  <option [value]=\"time\" *ngFor=\"let time of times\">\n                                    {{time}}\n                                  </option>\n                                </select>\n                              </div>\n                              <div class=\"times\">\n                                <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"row.start_time.minute\"\n                                  name=\"minute\">\n                                  <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                    {{minute}}\n                                  </option>\n                                </select>\n                              </div>\n                            </div>\n                          </div>\n                        </td>\n                        <td>\n                          <div class=\"form-wrapper timepick\">\n                            <div class=\"tbox\">\n                              <div class=\"times\">\n                                <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"row.end_time.hour\"\n                                  name=\"startTime\">\n                                  <option [value]=\"time\" *ngFor=\"let time of times\">\n                                    {{time}}\n                                  </option>\n                                </select>\n                              </div>\n                              <div class=\"times\">\n                                <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"row.end_time.minute\"\n                                  name=\"minute\">\n                                  <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                    {{minute}}\n                                  </option>\n                                </select>\n                              </div>\n                            </div>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr *ngIf=\"weekDaysTable.length == 0\">\n                        <td colspan=\"3\" style=\"text-align: center\">\n                          No Schedule Of Week Found\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n\n              <div class=\"row btn-table\" style=\"margin: 10px 0px;\">\n                <div class=\"pull-left\">\n                  <button type=\"button\" class=\"btn\" style=\"margin-left: 0px;\" name=\"button\"\n                    routerLink=\"/view/course/coursePlanner/class\" *ngIf=\"coursePlannerStatus=='true'\">Back </button>\n                </div>\n                <div class=\"pull-right\">\n                  <button class=\"btn fullBlue \" [disabled]=\"auth.isRippleLoad.getValue()\"\n                    (click)=\"updateWeeklySchedule()\">Update </button>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n          <div class=\"custom-Schedule\" *ngIf=\"batchFrequency == '2'\">\n\n            <div class=\"row adderCustom\">\n              <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                <div class=\"field-wrapper datePickerBox\" [ngClass]=\"{'has-value': custom.date!=''}\">\n                  <label for=\"csd\">Date\n                    <span class=\"text-danger\">*</span>\n                  </label>\n                  <input type=\"text\" value=\"\" id=\"csd\" class=\"form-ctrl bsDatepicker\" [(ngModel)]=\"custom.date\"\n                    readonly=\"true\" name=\"csd\" bsDatepicker>\n\n                </div>\n              </div>\n              <div class=\"c-lg-2 c-md-2 c-sm-2\" style=\"margin-top: 10px;padding: 0;width: 10%;\">\n                <label>\n                  <span class=\"topic-lbl\">Topic</span></label><br>\n                <div class=\"form-wrapper\" style=\"margin:0px !important;border:1px solid #0084f6\"\n                  *ngIf=\"selectedTopicsListObj.length\">\n                  <input type=\"textbox\" class=\"side-form-ctrl topic-link\" name=\"label\"\n                    style=\"height: 30px;color:#0084f6\" id=\"classDetailsTxt9\" placeholder=\"Linked\" readonly\n                    (click)=\"fetchSelectedTopics()\">\n                  <i class=\"fa fa-link\" aria-hidden=\"true\" (click)=\"fetchSelectedTopics()\"\n                    style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;position: absolute; top: 8px; right: 15px;color: #0084f6\"></i>\n                </div>\n                <div class=\"form-wrapper\" style=\"margin:0px !important;border:1px solid rgba(119, 119, 119, 0);\"\n                  *ngIf=\"!selectedTopicsListObj.length\">\n                  <input type=\"textbox\" class=\"side-form-ctrl topic-link\" name=\"label\" style=\"height: 30px;\"\n                    id=\"classDetailsTxt9\" placeholder=\"Link\" readonly (click)=\"fetchTopics()\">\n                  <i class=\"fa fa-link\" aria-hidden=\"true\" (click)=\"fetchTopics()\"\n                    style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;position: absolute; top: 8px; right: 15px;\"></i>\n                </div>\n              </div>\n\n              <div class=\"c-sm-2 c-md-2 c-lg-2\" style=\"margin-top: 10px\">\n                <div class=\"form-wrapper timepick\">\n                  <label for=\"startTime\">Start Time</label>\n                  <div class=\"tbox\">\n                    <div class=\"times\">\n                      <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"custom.start_hour\" name=\"startTime\">\n                        <option [value]=\"time\" *ngFor=\"let time of times\">\n                          {{time}}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"times\">\n                      <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"custom.start_minute\" name=\"minute\">\n                        <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                          {{minute}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"c-sm-2 c-md-2 c-lg-2\" style=\"margin-top: 10px\">\n                <div class=\"form-wrapper timepick\">\n                  <label for=\"startTime\">End Time</label>\n                  <div class=\"tbox\">\n                    <div class=\"times\">\n                      <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"custom.end_hour\" name=\"startTime\">\n                        <option [value]=\"time\" *ngFor=\"let time of times\">\n                          {{time}}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"times\">\n                      <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"custom.end_minute\" name=\"minute\">\n                        <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                          {{minute}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                <div class=\"field-wrapper\" [ngClass]=\"{'has-value' : custom.desc != ''}\">\n                  <label for=\"customDescTxt\">Description\n                    <span title=\"Special characters not allowed in Description\">\n\n                      <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n                      <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"\n                        xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"14px\" height=\"14px\"\n                        viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n                        <path fill=\"#1385F2\" d=\"M24.067,0c-13.255,0-24,10.746-24,24s10.745,24,24,24c13.252,0,23.997-10.746,23.997-24S37.319,0,24.067,0z\nM23.779,38.121c-1.035,0.802-2.029,1.208-2.991,1.208c-0.625,0-1.145-0.188-1.549-0.561c-0.402-0.374-0.603-0.847-0.603-1.421\nc0-0.581,0.188-1.524,0.573-2.845l3.017-10.371c0.482-1.688,0.72-2.752,0.72-3.193c0-0.327-0.117-0.597-0.362-0.818\nc-0.237-0.216,0.198-0.335-0.208-0.335c-0.345,0-0.376,0.088-1.376,0.263v-0.891l7.237-1.328L23.295,34.07\nc-0.308,1.091-0.645,1.746-0.645,1.96c0,0.246-0.025,0.443,0.123,0.595c0.144,0.158,0.261,0.232,0.449,0.232\nc0.251,0,0.509-0.123,0.817-0.374c0.874-0.688,1.756-1.671,2.663-2.96l0.79,0.547C26.439,35.663,25.195,37.016,23.779,38.121z\nM28.818,12.606c-0.445,0.46-0.987,0.691-1.621,0.691c-0.636,0-1.175-0.231-1.637-0.691c-0.463-0.462-0.69-0.999-0.69-1.637\nc0-0.638,0.224-1.172,0.68-1.626c0.441-0.448,0.997-0.673,1.646-0.673c0.653,0,1.196,0.225,1.642,0.673\nc0.438,0.454,0.659,0.988,0.659,1.626C29.498,11.607,29.271,12.144,28.818,12.606z\" />\n                      </svg>\n\n                    </span>\n                  </label>\n                  <textarea class=\"form-ctrl\" [(ngModel)]=\"custom.desc\" id=\"customDescTxt\"\n                    name=\"customDescTxt\"></textarea>\n\n                </div>\n              </div>\n\n              <div class=\"\" style=\"margin-top: 25px\">\n                <button class=\"btn\" (click)=\"addNewCustomClass()\">Add</button>\n              </div>\n            </div>\n\n            <div class=\"table-scroll-wrapper\">\n              <div class=\"table-responsive\">\n                <table>\n                  <thead>\n                    <tr>\n                      <th>\n                        Date\n                      </th>\n                      <th>\n                        Topics\n                      </th>\n                      <th>\n                        Start Time\n                      </th>\n                      <th>\n                        End Time\n                      </th>\n                      <th>\n                        Class Description\n                      </th>\n                      <th>\n                        Action\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let row of customTable; let i=index ; trackBy : index\">\n                      <td>\n                        {{row.class_date}}\n                      </td>\n                      <td>\n\n                        <input type=\"textbox\" class=\"side-form-ctrl topic-link\"\n                          *ngIf=\"row.topics_covered != '' && row.topics_covered != null\" name=\"label\"\n                          style=\"height: 30px;border:1px solid blue;text-align:center;cursor:pointer\"\n                          id=\"classDetailsTxt9\" placeholder=\"Linked\" readonly (click)=\"editTopics(row)\" />\n                        <i class=\"fa fa-link\" (click)=\"editTopics(row)\"\n                          *ngIf=\"row.topics_covered != '' && row.topics_covered != null\"\n                          style=\"cursor: pointer;font-size: 15px;margin-left: -30px;margin-top:6px;color:#0084f6\"></i>\n\n                        <input type=\"textbox\" class=\"side-form-ctrl topic-link\"\n                          *ngIf=\"row.topics_covered == '' || row.topics_covered == null\" name=\"label\"\n                          style=\"height: 30px;cursor:pointer;text-align:center;border:1px solid lightgrey\"\n                          id=\"classDetailsTxt9\" placeholder=\"Link\" readonly (click)=\"editTopics(row)\" />\n                        <i class=\"fa fa-link\" (click)=\"editTopics(row)\"\n                          *ngIf=\"row.topics_covered == '' || row.topics_covered == null\"\n                          style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;margin-left: -30px;margin-top:6px\"></i>\n\n                      </td>\n                      <td>\n                        {{row.start_time}}\n                      </td>\n                      <td>\n                        {{row.end_time}}\n                      </td>\n                      <td>\n                        {{row.note}}\n                      </td>\n                      <td>\n                        <a *ngIf=\"row.schd_id == 0\" style=\"cursor:pointer; margin-right: 5px\" (click)=\"deleteFromCustomTable(row , i)\"\n                          id=\"deleteAnch1\">Delete</a>\n                        <a style=\"cursor:pointer; margin-right: 5px\"\n                          *ngIf=\"row.schd_id !='0' && row.is_attendance_marked=='N' && checkNotifyDate(row)\"\n                          (click)=\"notifyOfCustomClass(row , index)\" id=\"notifyAnch2\"> Notify</a>\n                        <a style=\"cursor:pointer;\" *ngIf=\"row.schd_id !='0' && row.is_attendance_marked=='N'\"\n                          (click)=\"cancelClassOfCustomClass(row , index)\" id=\"cancelAnch3\">Cancel Class</a>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"customTable.length == 0\">\n                      <td colspan=\"5\">\n                        No Custom Schedule Found\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin: 10px 0px;\">\n              <div class=\"pull-left\">\n                <button type=\"button\" class=\"btn\" style=\"margin-left: 0px;\" name=\"button\"\n                  routerLink=\"/view/course/coursePlanner/class\" *ngIf=\"coursePlannerStatus=='true'\">Back</button>\n              </div>\n              <div class=\"pull-right\">\n                <button class=\"btn fullBlue\" style=\"margin-right: 15px\" [disabled]=\"auth.isRippleLoad.getValue()\"\n                  (click)=\"updateCustomClass()\"> Update</button>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"common-section\">\n\n            <div class=\"divExtraClass\" *ngIf=\"batchFrequency == '1'\">\n\n              <h4>Extra Class</h4>\n\n              <div class=\"row adder-Row\">\n\n                <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                  <div class=\"field-wrapper datePickerBox has-value\">\n                    <label for=\"csd\">Date\n                      <span class=\"text-danger\">*</span>\n                    </label>\n                    <input type=\"text\" value=\"\" id=\"csd\" class=\"form-ctrl bsDatepicker\" [(ngModel)]=\"addExtraClass.date\"\n                      readonly=\"true\" name=\"csd\" bsDatepicker>\n\n                  </div>\n                </div>\n                <div class=\"c-lg-2 c-md-2 c-sm-2\" style=\"margin-top: 10px;padding: 0;width: 10%;\">\n                  <label>\n                    <span class=\"topic-lbl\">Topic</span></label><br>\n                  <div class=\"form-wrapper\" style=\"margin:0px !important;border:1px solid #0084f6\"\n                    *ngIf=\"selectedTopicsListObj.length\">\n                    <input type=\"textbox\" class=\"side-form-ctrl topic-link\" name=\"label\"\n                      style=\"height: 30px;color:#0084f6\" id=\"classDetailsTxt9\" placeholder=\"Linked\" readonly\n                      (click)=\"fetchSelectedTopics()\">\n                    <i class=\"fa fa-link\" aria-hidden=\"true\" (click)=\"fetchSelectedTopics()\"\n                      style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;position: absolute; top: 8px; right: 15px;color: #0084f6\"></i>\n                  </div>\n                  <div class=\"form-wrapper\" style=\"margin:0px !important;border:1px solid rgba(119, 119, 119, 0);\"\n                    *ngIf=\"!selectedTopicsListObj.length\">\n                    <input type=\"textbox\" class=\"side-form-ctrl topic-link\" name=\"label\" style=\"height: 30px;\"\n                      id=\"classDetailsTxt9\" placeholder=\"Link\" readonly (click)=\"fetchTopics()\">\n                    <i class=\"fa fa-link\" aria-hidden=\"true\" (click)=\"fetchTopics()\"\n                      style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;position: absolute; top: 8px; right: 15px;\"></i>\n                  </div>\n                </div>\n\n                <div class=\"c-sm-2 c-md-2 c-lg-2\" style=\"margin-top: 10px\">\n                  <div class=\"form-wrapper timepick\">\n                    <label for=\"startTime\">Start Time</label>\n                    <div class=\"tbox\">\n                      <div class=\"times\">\n                        <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"addExtraClass.start_hour\"\n                          name=\"startTime\">\n                          <option [value]=\"time\" *ngFor=\"let time of times\">\n                            {{time}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"times\">\n                        <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"addExtraClass.start_minute\"\n                          name=\"minute\">\n                          <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                            {{minute}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"c-sm-2 c-md-2 c-lg-2\" style=\"margin-top: 10px\">\n                  <div class=\"form-wrapper timepick\">\n                    <label for=\"startTime\">End Time</label>\n                    <div class=\"tbox\">\n                      <div class=\"times\">\n                        <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"addExtraClass.end_hour\" name=\"startTime\">\n                          <option [value]=\"time\" *ngFor=\"let time of times\">\n                            {{time}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"times\">\n                        <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"addExtraClass.end_minute\" name=\"minute\">\n                          <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                            {{minute}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                  <div class=\"field-wrapper\" [ngClass]=\"{'has-value':addExtraClass.desc != ''}\">\n                    <label for=\"divDesc\">Class Description</label>\n                    <textarea class=\"form-ctrl textBox\" id=\"divDesc\" name=\"desc\"\n                      [(ngModel)]=\"addExtraClass.desc\"></textarea>\n\n                  </div>\n                </div>\n\n                <div style=\"padding-top: 25px\">\n                  <button class=\"btn\" (click)=\"addNewExtraClass()\">Add</button>\n                </div>\n\n              </div>\n\n              <div class=\"extraClass\">\n                <div class=\"table-scroll-wrapper\">\n                  <div class=\"table-responsive\">\n                    <table>\n                      <thead>\n                        <tr>\n                          <th>\n                            Date\n                          </th>\n                          <th>\n                            Topics\n                          </th>\n                          <th>\n                            Start Time\n                          </th>\n                          <th>\n                            End Time\n                          </th>\n                          <th>\n                            Class Description\n                          </th>\n                          <th>\n                            Action\n                          </th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let row of extraClassTable; let i=index ; trackBy : index\">\n                          <td>\n                            {{row.class_date}}\n                          </td>\n                          <td>\n\n                            <input type=\"textbox\" class=\"side-form-ctrl topic-link\"\n                              *ngIf=\"row.topics_covered != '' && row.topics_covered != null\" name=\"label\"\n                              style=\"height: 30px;border:1px solid blue;text-align:center;cursor:pointer\"\n                              id=\"classDetailsTxt9\" placeholder=\"Linked\" readonly (click)=\"editTopics(row)\" />\n                            <i class=\"fa fa-link\" (click)=\"editTopics(row)\"\n                              *ngIf=\"row.topics_covered != '' && row.topics_covered != null\"\n                              style=\"cursor: pointer;font-size: 15px;margin-left: -30px;margin-top:6px;color:#0084f6\"></i>\n\n                            <input type=\"textbox\" class=\"side-form-ctrl topic-link\"\n                              *ngIf=\"row.topics_covered == '' || row.topics_covered == null\" name=\"label\"\n                              style=\"height: 30px;cursor:pointer;text-align:center;border:1px solid lightgrey\"\n                              id=\"classDetailsTxt9\" placeholder=\"Link\" readonly (click)=\"editTopics(row)\" />\n                            <i class=\"fa fa-link\" (click)=\"editTopics(row)\"\n                              *ngIf=\"row.topics_covered == '' || row.topics_covered == null\"\n                              style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;margin-left: -30px;margin-top:6px\"></i>\n\n                          </td>\n                          <td>\n                            {{row.start_time}}\n                          </td>\n                          <td>\n                            {{row.end_time}}\n                          </td>\n                          <td>\n                            {{row.note}}\n                          </td>\n                          <td>\n                            <a style=\"cursor:pointer;margin-right: 5px\"\n                              *ngIf=\"row.schd_id != '0' && row.is_attendance_marked=='N'\"\n                              (click)=\"cancelExtraClassSchedule(row)\" id=\"cancelAnch4\">Cancel</a>\n                            <a style=\"cursor:pointer;margin-right: 5px\"\n                              *ngIf=\"row.schd_id != '0' && row.is_attendance_marked=='N'\"\n                              (click)=\"notifyExtraClassSchedule(row)\" id=\"notifyAnch5\"> Notify</a>\n                            <a *ngIf=\"checkCurrentDate(row,row.class_date) || row.schd_id == '0'\" style=\"cursor:pointer\"\n                              (click)=\"deleteExtraClassSchedule(row , i)\" id=\"deleteAnch6\">Delete</a>\n                          </td>\n                        </tr>\n                        <tr *ngIf=\"extraClassTable.length == 0\">\n                          <td colspan=\"5\" style=\"text-align: center\">\n                            No Extra Class Schedule Found\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row btn-table\">\n                <button class=\"btn fullBlue pull-right\" style=\"margin-right: 10px\"\n                  [disabled]=\"auth.isRippleLoad.getValue()\" (click)=\"updateExtraClass()\">Update</button>\n              </div>\n\n            </div>\n\n            <div class=\"divCancelClass\">\n              <h4>Cancelled Class</h4>\n\n              <div class=\"table-scroll-wrapper cancelTable\">\n                <div class=\"table table-responsive\">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>\n                          Date\n                        </th>\n                        <th>\n                          Start Time\n                        </th>\n                        <th>\n                          End Time\n                        </th>\n                        <th>\n                          Cancel Reason\n                        </th>\n                        <th>\n                          Action\n                        </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let row of canceLClassTable; let i=index ; trackBy : index\">\n                        <td>\n                          {{row.class_date}}\n                        </td>\n                        <td>\n                          {{row.start_time}}\n                        </td>\n                        <td>\n                          {{row.end_time}}\n                        </td>\n                        <td>\n                          {{row.cancel_note}}\n                        </td>\n                        <td>\n                          <!-- <a style=\"cursor:pointer;margin-right: 5px\" (click)=\"notifyOfCancelClass(row)\" id=\"notifyAnch7\"> Notify</a> -->\n                          <span>Last Notified</span> {{row.last_notify_sent_time}}\n                        </td>\n                      </tr>\n                      <tr *ngIf=\"canceLClassTable.length == 0\">\n                        <td colspan=\"5\" style=\"text-align: center\">\n                          No Cancelled Class Schedule Found\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n\n        </section>\n\n\n      </section>\n      <!-- ==================================================================================== -->\n      <!-- ==================================================================================== -->\n    </aside>\n  </section>\n</section>\n\n\n\n<!-- //////////////////////////////////POPUP///////////////////////////////// -->\n<!-- //////////////////////////////////POPUP///////////////////////////////// -->\n<!-- //////////////////////////////////POPUP///////////////////////////////// -->\n<!-- //////////////////////////////////POPUP///////////////////////////////// -->\n<!-- //////////////////////////////////POPUP///////////////////////////////// -->\n\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"showPopUpRecurence\">\n  <div class=\"popup pos-abs popup-body-container\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closePopup()\">\n        <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n          viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n          <path class=\"large-icon\"\n            d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n            style=\"fill: currentColor\"></path>\n        </svg>\n      </span>\n      <div class=\"popup-content\">\n        <h2 style=\"margin-left: 10px\">Custom Recurrence for class {{selctedScheduledClass.subject_name}}</h2>\n\n        <div class=\"row extraMargin\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3\">\n            <div class=\"form-wrapper timepick\">\n              <label for=\"startTime\">Start Time</label>\n              <div class=\"tbox\">\n                <div class=\"times \">\n                  <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"weeklyCommonStartTime.hour\" name=\"startTime\">\n                    <option [value]=\"time\" *ngFor=\"let time of times\">\n                      {{time}}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"times\">\n                  <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"weeklyCommonStartTime.minute\" name=\"minute\">\n                    <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                      {{minute}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"c-sm-3 c-md-3 c-lg-3\">\n            <div class=\"form-wrapper timepick\">\n              <label for=\"startTime\">End Time</label>\n              <div class=\"tbox\">\n                <div class=\"times \">\n                  <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"weeklyCommonEndTime.hour\" name=\"startTime\">\n                    <option [value]=\"time\" *ngFor=\"let time of times\">\n                      {{time}}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"times\">\n                  <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"weeklyCommonEndTime.minute\" name=\"minute\">\n                    <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                      {{minute}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"c-sm-3 c-md-3 c-lg-3\">\n            <button type=\"button\" class=\"btn fullBlue\" style=\"margin-top: 15px;\" name=\"button\"\n              (click)=\"applyTimeForAll()\">Apply</button>\n          </div>\n        </div>\n\n        <div class=\"weekly-schedule-table-container\">\n          <div class=\"table-heading-container\">\n            <div class=\"heading-item\">\n              <span>Week Days</span>\n            </div>\n            <div class=\"heading-item\">\n              <span>Start Time</span>\n            </div>\n            <div class=\"heading-item\">\n              <span>End Time</span>\n            </div>\n          </div>\n          <div class=\"table-outer-container\">\n            <div class=\"table-value-container\" *ngFor=\"let day of weekDaysList\">\n              <div class=\"value-item\">\n                <div class=\"field-checkbox-wrapper\" style=\"margin-top: 5px\">\n                  <input type=\"checkbox\" value=\"\" [(ngModel)]=\"day.uiSelected\" class=\"form-checkbox\"\n                    id=\"{{day.data_key}}\">\n                  <label for=\"{{day.data_key}}\">{{day.data_value}}</label>\n                </div>\n              </div>\n              <div class=\"value-item\">\n                <div class=\"tbox\">\n                  <div class=\"times \">\n                    <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"day.start_time.hour\" name=\"startTime\">\n                      <option [value]=\"time\" *ngFor=\"let time of times\">\n                        {{time}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"times\">\n                    <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"day.start_time.minute\" name=\"minute\">\n                      <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                        {{minute}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"value-item\">\n                <div class=\"tbox\">\n                  <div class=\"times \">\n                    <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"day.end_time.hour\" name=\"startTime\">\n                      <option [value]=\"time\" *ngFor=\"let time of times\">\n                        {{time}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"times\">\n                    <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"day.end_time.minute\" name=\"minute\">\n                      <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                        {{minute}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <!-- <div class=\"row extraMargin \">\n          <h3>Ends</h3>\n        </div> -->\n\n        <!-- <div class=\"row extraMargin \">\n\n          <div class=\"radio-options \">\n            <div class=\"row extraMargin \">\n              <div class=\"field-radio-wrapper c-sm-6 c-md-6 c-lg-6 \">\n                <input type=\"radio \" name=\"sFilter \" class=\"form-radio \" (click)=\"radioButtonClick($event) \" value=\"false\n                    \" id=\"idCourseEndDate \">\n                <label for=\"active \">Course End Date</label>\n              </div>\n              <div class=\"field-wrapper datePickerBox c-sm-3 c-md-3 c-lg-3 \" [ngClass]=\"{ 'disabled': customRec.radioEndDate.radioEndDateSelection==false } \">\n                <input type=\"text \" value=\" \" readonly=\"true \" [(ngModel)]=\"customRec.radioEndDate.radioDate \" class=\"form-ctrl\n                    bsDatepicker \" name=\"endDate \" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"row extraMargin \">\n              <div class=\"field-radio-wrapper c-sm-6 c-md-6 c-lg-6 \">\n                <input type=\"radio \" name=\"sFilter \" class=\"form-radio \" value=\"false \" (click)=\"radioButtonClick($event)\n                    \" id=\"idOn \">\n                <label for=\"active \">On</label>\n              </div>\n              <div class=\"c-sm-3 c-md-3 c-lg-3 \" [ngClass]=\"{ 'disabled': customRec.radioOn.radioONSelection==false } \">\n                <div class=\"field-wrapper datePickerBox \">\n                  <input type=\"text \" value=\" \" readonly=\"true \" [(ngModel)]=\"customRec.radioOn.radioOnDate \" class=\"form-ctrl\n                    bsDatepicker \" name=\"endDate \" bsDatepicker>\n                </div>\n              </div>\n            </div>\n            <div class=\"row extraMargin \">\n              <div class=\"field-radio-wrapper c-sm-6 c-md-6 c-lg-6 \">\n                <input type=\"radio \" name=\"sFilter \" class=\"form-radio \" (click)=\"radioButtonClick($event) \" value=\"false\n                    \" id=\"idAfter \">\n                <label for=\"active \">After</label>\n              </div>\n              <div class=\"field-wrapper c-sm-3 c-md-3 c-lg-3 \">\n                <input type=\"number \" [readonly]=\"customRec.radioAfter.radioAfterSelection==false\" #idSlot class=\"form-ctrl\n                    halfwidth \" name=\"slotNew \" [(ngModel)]=\"customRec.radioAfter.occurenceValue \">\n              </div>\n              <span>occurrences</span>\n            </div>\n          </div>\n        </div> -->\n\n        <div class=\"row extraMargin\" style=\"margin:10px 15px;\">\n          <aside class=\"pull-left\">\n            <span>This selection will add future classes till course end date.</span>\n          </aside>\n          <aside class=\"pull-right\" style=\"margin-right: 15px\">\n            <button class=\"btn\" (click)=\"saveCustomRecurrences()\" [disabled]=\"multiClickDisabled\">Save</button>\n            <button class=\"btn\" (click)=\"closePopup()\">Cancel</button>\n          </aside>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- //////////////////////////////////////// Select Dates///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Select Dates///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Select Dates///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Select Dates///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Select Dates///////////////////////////////////////////// -->\n\n<section id=\"popup \" class=\"popupWrapper fadeIn \" *ngIf=\"showPopUp\">\n  <div class=\"popup pos-abs popup-body-container \">\n    <div class=\"popup-wrapper pos-rel \">\n\n      <span class=\"closePopup pos-abs fbold show \" id=\"popupCloseBtn \" (click)=\"closePopup()\">\n        <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n          viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n          <path class=\"large-icon\"\n            d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n            style=\"fill: currentColor\"></path>\n        </svg>\n      </span>\n\n      <div class=\"popup-content popup-date-selection\">\n\n        <h2>Select Dates for Class</h2>\n\n        <div class=\"\">\n          <label>Edit Selected Schedule</label>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-wrapper has-value c-sm-6 c-md-6 c-lg-6\">\n            <label for=\"row.category_id \">Teacher Name</label>\n            <select id=\" \" class=\" form-ctrl side-form-ctrl \" name=\"row.category_id \"\n              [(ngModel)]=\"selctedScheduledClass.teacher_id \">\n              <option value=\"-1 \"></option>\n              <option *ngFor=\"let opt of teacherListDataSource \" [value]=\"opt.teacher_id \">\n                {{opt.teacher_name}}\n              </option>\n            </select>\n          </div>\n\n          <div class=\"c-sm-3 c-md-3 c-lg-3 paddingFive\">\n            <div class=\"form-wrapper timepick\">\n              <label for=\"startTime\">Start Time</label>\n              <div class=\"tbox\">\n                <div class=\"times\">\n                  <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"selctedScheduledClass.startTime.hour\"\n                    name=\"startTime\">\n                    <option [value]=\"time\" *ngFor=\"let time of times\">\n                      {{time}}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"times\">\n                  <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"selctedScheduledClass.startTime.minute\"\n                    name=\"minute\">\n                    <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                      {{minute}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"c-sm-3 c-md-3 c-lg-3 dig1 paddingFive\">\n            <div class=\"form-wrapper timepick\">\n              <label for=\"startTime\">End Time</label>\n              <div class=\"tbox\">\n                <div class=\"times\">\n                  <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"selctedScheduledClass.endTime.hour\"\n                    name=\"startTime\">\n                    <option [value]=\"time\" *ngFor=\"let time of times\">\n                      {{time}}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"times\">\n                  <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"selctedScheduledClass.endTime.minute\"\n                    name=\"minute\">\n                    <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                      {{minute}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"form-wrapper has-value\">\n              <label for=\"label\">Room No</label>\n              <input type=\"text\" id=\"label\" class=\"side-form-ctrl\" name=\"label\"\n                [(ngModel)]=\"selctedScheduledClass.room_no\">\n            </div>\n          </div>\n\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"form-wrapper has-value\">\n              <label for=\"row.category_id \">Class Type</label>\n              <select id=\"row.category_id\" class=\"form-ctrl side-form-ctrl\" name=\"row.category_id \"\n                style=\"background: transparent; \" [(ngModel)]=\"selctedScheduledClass.custom_class_type \">\n                <option *ngFor=\"let opt of customListDataSource \">\n                  {{opt}}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row desc\">\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"form-wrapper has-value\">\n              <label for=\"label\">Description</label>\n              <input type=\"textbox\" class=\"form-ctrl side-form-ctrl\" name=\"label \"\n                [(ngModel)]=\"selctedScheduledClass.class_desc \" id=\"slctdTxt3\">\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"table-selectdate-wrapper\">\n          <div class=\"row extraMargin table-warpper-custom\">\n            <div class=\"table-scroll-wrapper \">\n              <div class=\"table table-responsive \">\n                <table>\n                  <thead>\n                    <tr>\n                      <th>\n                        Schedule Date\n                      </th>\n                      <th>\n                        Action\n                      </th>\n                      <th>\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>\n                        <div class=\"field-wrapper datePickerBox\">\n                          <input type=\"textbox\" value=\"\" readonly=\"true\" [(ngModel)]=\"addDates.selectedDate\"\n                            class=\"form-ctrl bsDatepicker\" name=\"endDate\" bsDatepicker id=\"endTxt3\">\n                        </div>\n                      </td>\n                      <td>\n                        <a style=\"font-size: 24px;font-weight: 600;\" alt=\"Add \" title=\"Add\" (click)=\"addDateToArray() \"\n                          id=\"addAnch11\">+</a>\n                      </td>\n                      <td>\n                      </td>\n                    </tr>\n                    <tr *ngFor=\"let row of selectedDateArray; let i=index ; trackBy : index \">\n                      <td>\n                        {{row.selectedDate}}\n                      </td>\n                      <td>\n                        <i class=\"fas fa fa-trash \" (click)=\"removeDateToArray(i, row) \" style=\"font-size: 19px; font-family:\n                      FontAwesome; \" alt=\"Remove \" title=\"Remove \" id=\"removeIcon1\"></i>\n                      </td>\n                      <td style=\"color:#0084f6\">\n                        {{row.error}}\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div style=\"margin-top: 5px;\">\n          <button class=\"btn fullBlue pull-right \" (click)=\"saveSelectedDateSchedule()\">Save Class Schedule</button>\n          <button class=\"btn pull-right\" (click)=\"closePopup()\">Cancel</button>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</section>\n\n<!-- //////////////////////////////////////// Cancellation PopUp ///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Cancellation PopUp///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Cancellation PopUp///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Cancellation PopUp///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Cancellation PopUp///////////////////////////////////////////// -->\n\n<section id=\"popup \" class=\"popupWrapper fadeIn \" *ngIf=\"showPopUpCancellation\">\n  <div class=\"popup pos-abs popup-body-container \">\n    <div class=\"popup-wrapper pos-rel \">\n      <span class=\"closePopup pos-abs fbold show \" id=\"popupCloseBtn \" (click)=\"closePopup()\">\n        <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n          viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n          <path class=\"large-icon\"\n            d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n            style=\"fill: currentColor\"></path>\n        </svg>\n      </span>\n      <div class=\"popup-content cancelWraper\">\n        <h2 *ngIf=\"isProfessional\">Cancel Schedule\n          <span style=\"color: #9b9b9b\"> of {{cancelRowSelected.batch_name}}</span>\n        </h2>\n        <h2 *ngIf=\"!isProfessional\">Cancel Schedule\n          <span style=\"color: #9b9b9b\">of {{cancelRowSelected.subject_name}}</span>\n        </h2>\n        <div class=\"row\" style=\"margin:20px 10px\">\n          <div class=\"field-wrapper c-sm-6 c-md-6 c-lg-6\">\n            <textarea class=\"textBox\" id=\"idTexboxReason\" placeholder=\"Cancellation Reason\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"row extraMargin\">\n          <div class=\"field-checkbox-wrapper pull-left\">\n\n            <input type=\"checkbox\" checked name=\"enableSMS\" class=\"form-checkbox\" id=\"idChkbxEnable\">\n            <label for=\"idChkbxEnable\">Notify students</label>\n          </div>\n          <div class=\"pull-right\" *ngIf=\"!isProfessional\" style=\"margin-right: 15px\">\n            <button class=\"btn\" (click)=\"closePopup()\">Close</button>\n            <button class=\"btn fullBlue\" (click)=\"cancelCourseSchedule()\">Cancel</button>\n          </div>\n          <div class=\"pull-right\" *ngIf=\"isProfessional\" style=\"margin-right: 15px\">\n            <button class=\"btn\" (click)=\"closePopup()\">Close</button>\n            <button class=\"btn fullBlue\" (click)=\"cancelBatchSchedule()\">Cancel Class</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- ///////////////////////////////////////////Warning PopUp///////////////////////////////////////////////////// -->\n<!-- ///////////////////////////////////////////Warning PopUp///////////////////////////////////////////////////// -->\n<!-- ///////////////////////////////////////////Warning PopUp///////////////////////////////////////////////////// -->\n<!-- ///////////////////////////////////////////Warning PopUp///////////////////////////////////////////////////// -->\n<!-- ///////////////////////////////////////////Warning PopUp///////////////////////////////////////////////////// -->\n<!-- ///////////////////////////////////////////Warning PopUp///////////////////////////////////////////////////// -->\n<section id=\"popup \" class=\"popupWrapper fadeIn \" *ngIf=\"showWarningPopup\">\n  <div class=\"popup pos-abs popup-body-container \">\n    <div class=\"popup-wrapper pos-rel \">\n      <span class=\"closePopup pos-abs fbold show \" id=\"popupCloseBtn \" (click)=\"closeWarningPopUp()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg \" viewBox=\"9310 2185 16 16 \">\n          <g id=\"Group_1228 \" data-name=\"Group 1228 \" transform=\"translate(8298 1888) \">\n            <g id=\"Group_1213 \" data-name=\"Group 1213 \" transform=\"translate(34.189 -7.77) \">\n              <line id=\"Line_274 \" data-name=\"Line 274 \" class=\"cls-1 \" y2=\"19.798 \" transform=\"translate(992.81 305.77)\n                      rotate(45) \" />\n              <line id=\"Line_275 \" data-name=\"Line 275 \" class=\"cls-1 \" x1=\"19.798 \" transform=\"translate(978.81 305.77)\n                      rotate(45) \" />\n            </g>\n            <rect id=\"Rectangle_686 \" data-name=\"Rectangle 686 \" style=\"stroke:none; \" class=\"cls-2 \" width=\"16\n                      \" height=\"16 \" transform=\"translate(1012 297) \" />\n          </g>\n        </svg>\n      </span>\n      <div class=\"popup-content\">\n        <div class=\"\" *ngIf=\"batchFrequency == '1'\">\n          <div class=\"row warningNote \">\n            <h5 style=\"padding: 10px;\">\n              <b style=\"font-weight: 600;\">If custom schedule already exist, below changes are applicable:</b>\n              <br>\n              <br>\n              <span> 1. &nbsp; Past and current date schedule will not be deleted.</span>\n              <br>\n              <span> 2. &nbsp; New schedule will be applicable from current date.</span>\n              <br>\n              <span> 3. &nbsp; Cancelled classes will not be deleted</span>\n            </h5>\n          </div>\n          <div class=\"row\">\n            <div class=\"pull-right\" style=\"margin-right: 20px;\">\n              <input class=\"btn\" type=\"button\" value=\"Close\" (click)=\"closeWarningPopUp()\" id=\"closeInp3\">\n              <input class=\"btn fullBlue\" type=\"button\" value=\"Add\" (click)=\"createWeeklySchedule()\" id=\"addInp4\">\n            </div>\n          </div>\n        </div>\n        <div class=\"\" *ngIf=\"batchFrequency == '2'\">\n          <div class=\"row warningNote\">\n            <h5 style=\"padding: 10px;\">\n              <b style=\"font-weight: 600;\"> If weekly schedule already exist, below changes are applicable:</b>\n              <br>\n              <br>\n              <span> 1. &nbsp; Past and current date schedule will not be deleted.</span>\n              <br>\n              <span> 2. &nbsp; New schedule will be applicable from current date.</span>\n              <br>\n              <span> 3. &nbsp; Cancelled classes will not be deleted.</span>\n            </h5>\n          </div>\n          <div class=\"row\">\n            <div class=\"pull-right\" style=\"margin-right: 20px;\">\n              <input class=\"btn\" type=\"button\" value=\"Close\" (click)=\"closeWarningPopUp()\" id=\"closeTxt6\">\n              <input class=\"btn fullBlue\" type=\"button\" value=\"Add\" (click)=\"createCustomClasses()\" id=\"createInp6\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n<!-- //////////////////////////////////////// Cancel Weekly Schedule ///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Cancel Weekly Schedule///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Cancel Weekly Schedule///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Cancel Weekly Schedule///////////////////////////////////////////// -->\n<!-- //////////////////////////////////////// Cancel Weekly Schedule///////////////////////////////////////////// -->\n\n<section id=\"popup \" class=\"popupWrapper fadeIn \" *ngIf=\"cancelWeeklySchedulePop\">\n  <div class=\"popup pos-abs popup-body-container \">\n    <div class=\"popup-wrapper pos-rel \">\n      <span class=\"closePopup pos-abs fbold show \" id=\"popupCloseBtn \" (click)=\"closeWeeklySchedulePopup()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg \" viewBox=\"9310 2185 16 16 \">\n          <g id=\"Group_1228 \" data-name=\"Group 1228 \" transform=\"translate(8298 1888) \">\n            <g id=\"Group_1213 \" data-name=\"Group 1213 \" transform=\"translate(34.189 -7.77) \">\n              <line id=\"Line_274 \" data-name=\"Line 274 \" class=\"cls-1 \" y2=\"19.798 \" transform=\"translate(992.81 305.77)\n                    rotate(45) \" />\n              <line id=\"Line_275 \" data-name=\"Line 275 \" class=\"cls-1 \" x1=\"19.798 \" transform=\"translate(978.81 305.77)\n                    rotate(45) \" />\n            </g>\n            <rect id=\"Rectangle_686 \" data-name=\"Rectangle 686 \" style=\"stroke:none; \" class=\"cls-2 \" width=\"16\n                    \" height=\"16 \" transform=\"translate(1012 297) \" />\n          </g>\n        </svg>\n      </span>\n      <div class=\"popup-content cancelWraper\">\n        <h2 *ngIf=\"isProfessional\">Batch Weekly Schedule Cancellation</h2>\n        <div class=\"row\">\n          <div class=\"c-lg-6 c-md-6 c-sm-6\">\n            <div class=\"field-wrapper datePickerBox has-value\">\n              <label for=\"dateWee\">Date\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input type=\"text\" value=\"\" id=\"dateWee\" class=\"form-ctrl bsDatepicker\"\n                [(ngModel)]=\"weeklyScheduleCan.date\" readonly=\"true\" name=\"csd\" bsDatepicker>\n\n            </div>\n          </div>\n          <div class=\"field-wrapper c-sm-6 c-md-6 c-lg-6\">\n            <textarea class=\"textBox\" id=\"idTexboxReason\" [(ngModel)]=\"weeklyScheduleCan.cancel_note\"\n              placeholder=\"Cancellation Reason\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"row extraMargin\">\n          <div class=\"field-checkbox-wrapper pull-left\">\n\n            <input type=\"checkbox\" [(ngModel)]=\"weeklyScheduleCan.is_notified\" name=\"enableSMS\" class=\"form-checkbox\"\n              id=\"NotifyStusde\">\n            <label for=\"NotifyStusde\">Notify students</label>\n          </div>\n          <div class=\"pull-right\" style=\"margin-right: 15px\">\n            <button class=\"btn\" (click)=\"closeWeeklySchedulePopup()\">Close</button>\n            <button class=\"btn fullBlue\" (click)=\"cancelWeeklySchedule()\">Cancel Class</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<section [hidden]=\"topicBox\">\n  <div class=\"topicBox\">\n    <div class=\"close-btn\">\n      <span (click)=\"closeAlert()\">X</span>\n    </div>\n    <div class=\"header-container\">\n      <div class=\"sub-header\">\n        <span style=\"font-weight: 600;\">Subject : </span>\n        <span id=\"topicSubName\">{{subject_name}}</span>\n      </div>\n      <div class=\"total-topic\">\n        <span style=\"font-weight: 600;\">Total Topic : </span>\n        <span id=\"topicCount\">{{topicsData?.length}}</span>\n      </div>\n    </div>\n    <!-- <div class=\"field-checkbox-wrapper\" style=\"margin:10px;\">\n      <input type=\"checkbox\" name=\"checkbx\" id=\"select_all_topics\" [(ngModel)]=\"selectAllTopics\" (ngModelChange)=\"checkAllTopics()\"\n        class=\"form-checkbox\">\n      <label for=\"select_all_topics\">\n        Select All\n      </label>\n    </div> -->\n    <div class=\"topic-listing-container\">\n      <kendo-treeview [nodes]=\"topicsData\" [hasChildren]=\"hasChildren\" [children]=\"children\" kendoTreeViewSelectable\n        kendoTreeViewHierarchyBinding kendoTreeViewExpandable textField=\"topicName\"\n        [kendoTreeViewCheckable]=\"checkableSettings\" [(checkedKeys)]=\"checkedKeys\" checkBy=\"topicId\"\n        (checkedChange)=\"handleChecking($event)\">\n      </kendo-treeview>\n    </div>\n    <!-- <div class=\"example-config\">\n           Checked keys: {{checkedKeys.length}} {{checkedKeys.join(\"|\")}}\n       </div> -->\n    <div class=\"extraMargin row  pull-right\" style=\"margin: 15px\">\n      <button class=\"btn\" (click)=\"closeAlert()\">Cancel</button>\n      <button class=\"btn fullBlue\" (click)=\"saveTopic()\">Save</button>\n    </div>\n  </div>\n</section>\n\n<section *ngIf=\"showTopicsModal\">\n  <div class=\"topicBox\">\n    <div class=\"close-btn\">\n      <span (click)=\"closeTopicModal()\">X</span>\n    </div>\n    <div class=\"header-container\">\n      <div class=\"sub-header\">\n        <span style=\"font-weight: 600;\">Subject : </span>\n        <span id=\"topicSubName\">{{selectedSubjectInBatch}}</span>\n      </div>\n\n    </div>\n    <div style=\"min-height: 110px;overflow-x: hidden;\">\n      <ng-container *ngTemplateOutlet=\"topicsRecursiveList; context:{$implicit: topicsList, level: 1 }\"></ng-container>\n    </div>\n    <div class=\"extraMargin row  pull-right\" style=\"margin: 15px\">\n      <button class=\"btn\" (click)=\"closeTopicModal()\">Cancel</button>\n      <button class=\"btn fullBlue\" *ngIf=\"showTopicsModal && !showCustomEditModal\"\n        (click)=\"saveSelectedTopics()\">Save</button>\n      <button class=\"btn fullBlue\" *ngIf=\"showCustomEditModal\" (click)=\"linkTopics()\">Save</button>\n    </div>\n  </div>\n</section>\n<!--class=\"topic-listing-container\"-->\n\n\n\n\n<ng-template #topicsRecursiveList let-topicsList let-level=\"level\">\n  <div style=\"margin:2px !important\" *ngFor=\"let topic of topicsList\">\n    <div class=\"topic-container\" [ngClass]=\"level == 1 ? 'level1Topic': 'subTopicLevel'\">\n      <div class=\"arrow-icon\" [style.visibility]=\"topic.subTopic.length ? 'visible':'hidden'\"\n        (click)=\"toggleArrow(topic)\">\n        <i [ngClass]=\"topic.isExpand ? 'fa fa-caret-down': 'fa fa-caret-right'\" style=\"font-size: 15px!important;\"></i>\n      </div>\n      <div class=\"field-checkbox-wrapper\" style=\"margin-bottom: 5px !important;padding-left:0px !important\">\n        <input type=\"checkbox\" [(ngModel)]=\"topic.checked\" class=\"form-checkbox\" value=\"{{topic.checked}}\"\n          (click)=\"selectTopics(topic,$event)\" id=\"topic-{{topic.topicId}}\" />\n\n        <label for=\"topic-{{topic.topicId}}\" style=\"margin-left:25px !important\">{{topic.topicName}}</label>\n\n        <div *ngIf=\"topic.isExpand\">\n          <ng-container\n            *ngTemplateOutlet=\"topicsRecursiveList; context:{ $implicit: topic.subTopic, level: level + 1  }\">\n          </ng-container>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"black-bg\" id=\"black-bg\" [hidden]=\"topicBox\" (click)=\"closeAlert()\">\n\n</div>\n<div class=\"black-bg\" id=\"black-bg\" [hidden]=\"!showTopicsModal\">\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-class/class-home/class-home.component.html":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-class/class-home/class-home.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleCreateCourseCourseClassClassHomeClassHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\" clearFix\">\n  <section class=\"cal-view\">\n    <aside class=\"boxPadding15\">\n      <!-- ==================================================================================== -->\n      <!-- ==================================================================================== -->\n      <!-- ========================== Header Section ========================================== -->\n      <section class=\"middle-top clearFix\">\n        <div class=\"header-container\">\n          <!-- <h1 class=\"pull-left\" style=\"padding-top: 5px;\">\n            Class Schedule\n          </h1> -->\n          <h4 style=\"padding-top: 10px;\">Choose filter to view class schedule</h4>\n\n          <div style=\"margin-right: 15px\">\n            <p-button label=\"Multiple Delete\" (click)=\"deleteMultipleSchedule()\" *ngIf=\"showDeleteBTN()\"\n              icon=\"fa fa-times\" iconPos=\"left\"></p-button>\n            <input *ngIf=\"showManageClass\" type=\"button\" [routerLink]=\"['../add']\" value=\"Add/Edit Class\" class=\"btn\">\n          </div>\n        </div>\n\n      </section>\n      <!-- ==================================================================================== -->\n      <!-- ==================================================================================== -->\n      <!-- ========================== Body Section ============================================ -->\n      <section class=\"schedule-class-box\">\n        <!-- ==================================================================================== -->\n        <!-- ==================================================================================== -->\n        <!-- ========================== Search bar ============================================== -->\n        <section class=\"common-search-filter\">\n          <div class=\"filter-search\">\n            <div class=\"filter-box clearFix\" *ngIf=\"!showAdvanceFilter\">\n\n              <!-- Batch Module -->\n              <div class=\"search-filter-wrapper row\" *ngIf=\"isLangInstitute\">\n                <div class=\"row\">\n                  <div class=\"c-sm-10 c-md-10 c-lg-10\">\n                    <div class=\"c-sm-12 c-md-12 c-lg-12\">\n                      <div class=\"c-sm-4 c-md-4 c-lg-4\" style=\"margin-top :20px;\">\n                        <div class=\"radio-main\">\n                          <div class=\"field-radio-wrapper\">\n                            <input type=\"radio\" [(ngModel)]=\"selectedRadioButton\" (click)=\"checkInputType($event)\"\n                              name=\"sFilter\" class=\"form-radio\" value=\"All\" id=\"idAll\">\n                            <label for=\"idAll\">All</label>\n                          </div>\n                          <div class=\"field-radio-wrapper\">\n                            <input type=\"radio\" [(ngModel)]=\"selectedRadioButton\" (click)=\"checkInputType($event)\"\n                              name=\"sFilter\" value=\"Teacher\" class=\"form-radio\" id=\"idTeacher\">\n                            <label for=\"idTeacher\">Teacher</label>\n                          </div>\n                          <div class=\"field-radio-wrapper\">\n                            <input type=\"radio\" [(ngModel)]=\"selectedRadioButton\" (click)=\"checkInputType($event)\"\n                              name=\"sFilter\" value=\"Batch\" class=\"form-radio\" id=\"idBatch\">\n                            <label for=\"idBatch\">Batch</label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"c-sm-8 c-md-8 c-lg-8\">\n                        <div class=\"c-sm-4 c-md-4 c-lg-4\" *ngIf=\"selectedRadioButton == 'Teacher'\">\n                          <div class=\"field-wrapper fieldPro\">\n                            <label for=\"sc\">Select Teacher</label>\n                            <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"fetchBatchModule.teacher_id\">\n                              <option value=\"-1\"></option>\n                              <option [value]=\"subject.teacher_id\" *ngFor=\"let subject of teacherList\">\n                                {{subject.teacher_name}}\n                              </option>\n                            </select>\n                          </div>\n                        </div>\n\n                        <div *ngIf=\"selectedRadioButton == 'Batch'\" class=\"field-main\">\n                          <div class=\"c-sm-4 c-lg-4 c-sm-4\">\n                            <div class=\"field-wrapper\">\n                              <label for=\"smc\">Select Master Course</label>\n                              <select id=\"smc\" class=\"form-ctrl\" [(ngModel)]=\"batchData.standard_id\"\n                                (ngModelChange)=\"onBatchMasterCourseSelection($event)\">\n                                <option value=\"0\"></option>\n                                <option [value]=\"master.standard_id\" *ngFor=\"let  master of batchMasterCourse\">\n                                  {{master.standard_name}}\n                                </option>\n                              </select>\n                            </div>\n                          </div>\n\n                          <div class=\"c-sm-4 c-lg-4 c-sm-4\">\n                            <div class=\"field-wrapper\">\n                              <label for=\"sc\">Select Course</label>\n                              <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"batchData.subject_id\"\n                                (ngModelChange)=\"onSubjectSelection($event)\">\n                                <option value=\"0\"></option>\n                                <option [value]=\"course.subject_id\" *ngFor=\"let course of subjectListBatch\">\n                                  {{course.subject_name}}\n                                </option>\n                              </select>\n                            </div>\n                          </div>\n\n                          <div class=\"c-sm-4 c-lg-4 c-sm-4\">\n                            <div class=\"field-wrapper\">\n                              <label for=\"sc\">Batch</label>\n                              <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"batchData.batch_id\">\n                                <option value=\"0\"></option>\n                                <option [value]=\"subject.batch_id\" *ngFor=\"let subject of batchList\">\n                                  {{subject.batch_name}}\n                                </option>\n                              </select>\n                            </div>\n                          </div>\n\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"c-sm-2 c-md-2 c-lg-2\" style=\"margin-top: 15px\">\n                    <input type=\"button\" class=\"fullBlue btn\" value=\"View\" (click)=\"submitMasterCourse()\">\n                  </div>\n                </div>\n              </div>\n\n              <!-- Course Module -->\n              <div class=\"search-filter-wrapper row\" *ngIf=\"!isLangInstitute\" style=\"margin-bottom: 5px;\">\n                <div class=\"c-lg-9 c-md-9 c-sm-9\">\n                  <div class=\"row\">\n                    <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                      <div class=\"field-wrapper\">\n                        <!-- changes by Nalini - to handle school model conditions -->\n                        <label for=\"smc\">{{schoolModel ? 'Select Standard' : 'Select Master Course'}}</label>\n                        <select id=\"smc\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterCourseModule.master_course\"\n                          (ngModelChange)=\"updateCourseList($event)\">\n                          <option value=\"-1\"></option>\n                          <option [value]=\"master\" *ngFor=\"let  master of masterCourse\">\n                            {{master}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                      <div class=\"field-wrapper\">\n                        <label for=\"sc\">{{schoolModel ? 'Select Section' : 'Select Course'}}</label>\n                        <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterCourseModule.course_id\"\n                          (ngModelChange)=\"updateSubjectList($event)\">\n                          <option value=\"-1\"></option>\n                          <option [value]=\"course.course_id\" *ngFor=\"let course of courseList\">\n                            {{course.course_name}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                      <div class=\"field-wrapper\">\n                        <label for=\"selectsub\">Select Subject</label>\n                        <select id=\"selectsub\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterCourseModule.subject_id\">\n                          <option value=\"-1\"></option>\n                          <option [value]=\"subject.batch_id\" *ngFor=\"let subject of subjectList\">\n                            {{subject.subject_name}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                      <div class=\"field-wrapper\">\n                        <label for=\"selectteacher\">Select Teacher</label>\n                        <select id=\"selectteacher\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterCourseModule.teacher_id\">\n                          <option value=\"-1\"></option>\n                          <option [value]=\"subject.teacher_id\" *ngFor=\"let subject of teacherList\">\n                            {{subject.teacher_name}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"c-sm-1 c-md-1 c-lg-1\" style=\"margin-top:15px;\">\n                  <input type=\"button\" class=\"fullBlue btn\" value=\"View\" (click)=\"submitMasterCourse()\">\n                </div>\n                <div class=\"c-sm-2 c-md-2 c-lg-2\" style=\"margin-top:15px;\">\n                  <a class=\"pull-right\" style=\"cursor: pointer;\" (click)=\"showhideAdvanceFilter('1');\">Advance\n                    Filter</a>\n                </div>\n              </div>\n\n              <!-- <div class=\"row\" style=\"margin-top: 10px\">\n                <a class=\"pull-right advancefilter\" style=\"cursor: pointer;\" (click)=\"showhideAdvanceFilter('1');\">Advance Filter</a>\n              </div> -->\n\n            </div>\n\n            <div class=\"\" *ngIf=\"showAdvanceFilter\">\n              <p>Maximum 30 days date range filter can be applied.</p>\n              <div class=\"row advanceDateFilter\" style=\"margin-bottom: 5px;\">\n\n                <div class=\"c-sm-9 c-md-9 c-lg-9\">\n                  <div class=\"c-lg-3 c-md-3 c-sm-3\" *ngIf=\"!isLangInstitute\">\n                    <div class=\"field-wrapper\">\n                      <label for=\"smc\">{{schoolModel ? 'Select Standard' : 'Select Master Course'}}\n                        <span style=\"color:red\">*</span>\n                      </label>\n                      <select id=\"smc\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterCourseModule.master_course\"\n                        (ngModelChange)=\"updateCourseList($event)\">\n                        <option value=\"-1\"></option>\n                        <option [value]=\"master\" *ngFor=\"let  master of masterCourse\">\n                          {{master}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"c-lg-3 c-md-3 c-sm-3\" *ngIf=\"!isLangInstitute\">\n                    <div class=\"field-wrapper\">\n                      <label for=\"sc\">{{schoolModel ? 'Select Section' : 'Select Course'}}\n                        <span class=\"text-danger\">*</span>\n                      </label>\n                      <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"fetchMasterCourseModule.course_id\"\n                        (ngModelChange)=\"updateSubjectList($event)\">\n                        <option value=\"-1\"></option>\n                        <option [value]=\"course.course_id\" *ngFor=\"let course of courseList\">\n                          {{course.course_name}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"c-lg-6 c-md-6 c-sm-6\" *ngIf=\"isLangInstitute\">\n                    <div class=\"c-lg-4 c-md-4 c-sm-4\">\n                      <div class=\"field-wrapper\">\n                        <label for=\"smc\" style=\"white-space: nowrap;\">Select Master Course\n                          <span class=\"text-danger\">*</span>\n                        </label>\n                        <select id=\"smc\" class=\"form-ctrl\" [(ngModel)]=\"batchData.standard_id\"\n                          (ngModelChange)=\"onBatchMasterCourseSelection($event)\">\n                          <option value=\"-1\"></option>\n                          <option [value]=\"master.standard_id\" *ngFor=\"let  master of batchMasterCourse\">\n                            {{master.standard_name}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"c-lg-4 c-md-4 c-sm-4\">\n                      <div class=\"field-wrapper\">\n                        <label for=\"sc\">Select Course\n                          <span class=\"text-danger\">*</span>\n                        </label>\n                        <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"batchData.subject_id\"\n                          (ngModelChange)=\"onSubjectSelection($event)\">\n                          <option value=\"-1\"></option>\n                          <option [value]=\"course.subject_id\" *ngFor=\"let course of subjectListBatch\">\n                            {{course.subject_name}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"c-lg-4 c-md-4 c-sm-4\">\n                      <div class=\"field-wrapper\">\n                        <label for=\"sc\">Batch\n                          <span class=\"text-danger\">*</span>\n                        </label>\n                        <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"batchData.batch_id\">\n                          <option value=\"-1\"></option>\n                          <option [value]=\"subject.batch_id\" *ngFor=\"let subject of batchList\">\n                            {{subject.batch_name}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                    <div class=\"field-wrapper datePickerBox\">\n                      <label for=\"strtDate\">Start Date\n                        <span class=\"text-danger\">*</span>\n                      </label>\n                      <input type=\"text\" value=\"\" id=\"strtDate\" class=\"form-ctrl bsDatepicker\"\n                        [(ngModel)]=\"advanceFilter.startdate\" readonly=\"true\" name=\"strtDate\" bsDatepicker>\n                    </div>\n                  </div>\n\n                  <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                    <div class=\"field-wrapper datePickerBox\">\n                      <label for=\"endDate\">End Date\n                        <span class=\"text-danger\">*</span>\n                      </label>\n                      <input type=\"text\" value=\"\" id=\"endDate\" class=\"form-ctrl bsDatepicker\"\n                        [(ngModel)]=\"advanceFilter.enddate\" readonly=\"true\" name=\"endDate\" bsDatepicker>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"c-sm-1 c-md-1 c-lg-1 btn-wrapper\">\n                  <button class=\"btn fullBlue\" (click)=\"advanceFilterView()\">View</button>\n                </div>\n                <div class=\"c-sm-1 c-md-1 c-lg-1\">\n                  <a class=\"pull-right\" style=\"margin-top: 30px;cursor: pointer;\"\n                    (click)=\"showhideAdvanceFilter('0');\">Back</a>\n                </div>\n              </div>\n\n              <!-- <div class=\"row\" style=\"margin-top: 10px;\">\n                <a class=\"pull-right\" style=\"cursor: pointer; right: 85px;\n                top: 150px;\" (click)=\"showhideAdvanceFilter('0');\">Back</a>\n              </div> -->\n            </div>\n\n          </div>\n\n        </section>\n        <!-- ==================================================================================== -->\n        <!-- ==================================================================================== -->\n        <!-- ========================== Weeks Tabs and Navigator ================================ -->\n        <section class=\"calender-course clearFix view-c-detail\" *ngIf=\"showContent\">\n          <div class=\"row\">\n            <div class=\"c-lg-2 c-md-2 c-sm-2 vcd-l\">\n              <label>\n\n              </label>\n            </div>\n            <div class=\"c-lg-8 c-md-8 c-sm-8 align-center  vcd-l date-arrow\">\n              <div>\n                <span *ngIf=\"!showAdvanceFilter\" class=\"\">{{weekStart}} to {{weekEnd}}</span>\n                <span *ngIf=\"showAdvanceFilter\" class=\"\">{{advanceFilter.startdate | dateMonthYearFromat}} to\n                  {{advanceFilter.enddate\n                  | dateMonthYearFromat}}</span>\n              </div>\n            </div>\n            <div class=\"c-lg-2 c-md-2 c-sm-2 align-right filter-search\">\n            </div>\n          </div>\n          <div class=\"cal-left c-control\" *ngIf=\"!showAdvanceFilter\" (click)=\"gotoPreviousWeek()\"></div>\n          <div class=\"cal-right c-control\" *ngIf=\"!showAdvanceFilter\" (click)=\"gotoNextWeek()\"></div>\n        </section>\n        <!-- ==================================================================================== -->\n        <!-- ==================================================================================== -->\n        <!-- ========================== Class Schedule Table ==================================== -->\n\n        <div class=\"row\" *ngIf=\"weekScheduleList.length > 0\">\n          <div class=\"pull-right extra-button\">\n            <button class=\"btn\" (click)=\"expandAllRows()\">Expand/Collapse All</button>\n            <button class=\"btn\" *ngIf=\"!isChecked\" (click)=\"checkAllCheckbox()\">Check All</button>\n            <button class=\"btn\" *ngIf=\"isChecked\" (click)=\"checkAllCheckbox()\">Uncheck All</button>\n          </div>\n        </div>\n\n        <section class=\"clearFix calender-view1\">\n          <div class=\"table-responsive \">\n            <table>\n              <thead>\n                <tr>\n                  <th style=\"width:10%\"></th>\n                  <th style=\"width:10%\" *ngIf=\"!schoolModel\">Type</th>\n                  <th style=\"width:15%\">Subject</th>\n                  <th style=\"width:10%\">Start Time</th>\n                  <th style=\"width:10%\">End Time</th>\n                  <th style=\"width:15%\">Teacher</th>\n                  <th style=\"width:15%\" *ngIf=\"!schoolModel\">Topic</th>\n                  <th style=\"width:15%\">Action</th>\n                </tr>\n              </thead>\n              <tbody id=\"tbodyItem{{i}}\" class=\"table-accor-head\" *ngFor=\"let class of weekScheduleList; let i=index;\">\n                <tr>\n                  <td colspan=\"8\">\n                    <div class=\"accordian-heading row\">\n                      <div class=\"pull-left headingDiv\" (click)=\"toggleTbodyClass(i)\" style=\"width:95%\">\n                        <h4 class=\"clearFix \">\n                          <span class=\"close-accor\">-</span>\n                          <span class=\"open-accor\">+</span>\n                          <span class=\"date-c\">{{class.id}}</span>\n                          <!-- <span class=\"pull-right delete-icon\" style=\"font-family: FontAwesome;\" (click)=\"delete('course', i, null)\">\n                                <i class=\"fa fa-trash-o \" aria-hidden=\"true\"></i>\n                              </span> -->\n                        </h4>\n                      </div>\n                      <div class=\"pull-right\" *ngIf=\"isLangInstitute == false\" style=\"width:5%\">\n                        <span class=\"\" (click)=\"editClass(class)\" title=\"Edit\">\n                          <i class=\"fas fa-edit\"\n                            style=\"font-family: FontAwesome;font-size: 20px;color: rgba(0, 0, 255, 0.49019607843137253);\"></i>\n                        </span>\n                        <span class=\"mail-notification\" *ngIf=\"hidePastClassAction(class) && !schoolModel\" (click)=\"notify(class)\"\n                          title=\"Send Reminder\"></span>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr id=\"tbodyView{{i}}\" class=\"hide\">\n                  <td colspan=\"8\">\n                    <table>\n                      <tbody class=\"table-accor-view \">\n                        <tr *ngFor=\"let sc of class.data; let y= index;\">\n                          <td style=\"width:10%\">\n                            <div class=\"field-checkbox-wrapper\">\n                              <input type=\"checkbox\" name=\"uiSelected\" class=\"form-checkbox\" [(ngModel)]=\"sc.selected\"\n                                id=\"uiSelected{{i}}\" (ngModelChange)=\"userSelectedData($event , sc)\">\n                              <label></label>\n                            </div>\n                          </td>\n                          <td style=\"width:10%\">{{sc.class_type}}</td>\n                          <td style=\"width:15%\">{{sc.subject_name}}</td>\n                          <td style=\"width:10%\">{{sc.start_time}}</td>\n                          <td style=\"width:10%\">{{sc.end_time}}</td>\n                          <td style=\"width:15%\" class=\"editTeacherTd\">\n\n                            <div *ngIf=\"sc.class_type != 'Exam'\" class=\"changeteacher\">\n                              <span id=\"teacher{{sc.schd_id}}\">{{sc.teacher_name}}\n                                <i (click)=\"changeTeacher(sc)\" class=\"edit-icon\" aria-hidden=\"true\" title=\"Edit\"\n                                  style=\"margin-right:5px\"></i>\n                              </span>\n                              <span id=\"editTeacher{{sc.schd_id}}\" class=\"hide spanSection\">\n                                <div class=\"field-wrapper editSection\">\n                                  <select id=\"teacherList\" class=\"form-ctrl ddnChangeTeacher\"\n                                    [(ngModel)]=\"allotedTeacher\">\n                                    <option [value]=\"subject.teacher_id\" *ngFor=\"let subject of teacherList\">\n                                      {{subject.teacher_name}}\n                                    </option>\n                                  </select>\n                                </div>\n                                <i (click)=\"updateTeacher(sc)\" class=\"fas fa-check\"\n                                  style=\"font-family: FontAwesome ;font-size: 19px;margin-left:0px 2px\"\n                                  title=\"Update\"></i>\n                                <i (click)=\"cancelChangeTeacher(sc)\" class=\"fas fa fa-times\"\n                                  style=\"font-family: FontAwesome ;font-size: 19px;\" title=\"Cancel\"></i>\n                              </span>\n                            </div>\n\n                            <div *ngIf=\"sc.class_type == 'Exam'\">\n                              {{sc.teacher_name}}\n                            </div>\n\n                          </td>\n                          <td style=\"width:15%\" *ngIf=\"!schoolModel\">{{sc.topics_covered}}</td>\n                          <td style=\"width:15%\">\n                            <div class=\"action-box\" *ngIf=\"!isLangInstitute && !schoolModel\">\n                              <span class=\"mail-notification\"\n                                *ngIf=\"hidePastClassAction(class) && sc.isAttendanceMarked == 'N'\"\n                                (click)=\"notifySubjectLevel(sc ,class )\" title=\"Send Reminder\"></span>\n                              <span class=\"reschedule-icon\" *ngIf=\"sc.isAttendanceMarked == 'N'\"\n                                (click)=\"rescheduleClassData(sc)\" title=\"Reschedule\"></span>\n                              <span class=\"delete-btn\" *ngIf=\" sc.isAttendanceMarked == 'N'\"\n                                style=\"font-family: FontAwesome;\" (click)=\"CancelClass(sc)\" title=\"Cancel Class\">\n                                <i class=\"fa fa-trash-o \" aria-hidden=\"true \"></i>\n                              </span>\n                              <!-- <span class=\"edit-icon \"></span> -->\n                            </div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </td>\n                </tr>\n              </tbody>\n              <tbody *ngIf=\"weekScheduleList.length==0\">\n                <tr>\n                  <td colspan=\"8\">\n                    No Classes Found\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- <div class=\"fullwidth clearFix ledgend-footer \">\n            <label class=\"pull-left \">Ledgend</label>\n            <div class=\"pull-left \">\n              <span class=\"class-is \"></span>Class</div>\n            <div class=\"pull-left \">\n              <span class=\"exam-is \"></span>Exam</div>\n            <div class=\"pull-left \">\n              <span class=\"class-cancel blue \">x</span>Cancelled Class</div>\n            <div class=\"pull-left \">\n              <span class=\"class-cancel yellow \">x</span>Cancelled Exam</div>\n          </div> -->\n\n        </section>\n      </section>\n    </aside>\n  </section>\n</section>\n\n\n\n<!-- //////////////////////////////////POPUP///////////////////////////////// -->\n<!-- //////////////////////////////////POPUP///////////////////////////////// -->\n<!-- //////////////////////////////////POPUP///////////////////////////////// -->\n<!-- //////////////////////////////////POPUP///////////////////////////////// -->\n<!-- //////////////////////////////////POPUP///////////////////////////////// -->\n\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"reschedulePopUp\">\n  <div class=\"popup pos-abs popup-body-container\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeRescheduleClass()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n          <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n            <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n              <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                transform=\"translate(992.81 305.77) rotate(45)\" />\n              <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                transform=\"translate(978.81 305.77) rotate(45)\" />\n            </g>\n            <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\"\n              transform=\"translate(1012 297)\" />\n          </g>\n        </svg>\n      </span>\n      <div class=\"popup-content\" style=\"padding-left: 15px;\">\n\n        <h2 widget-header>Reschedule - {{rescheduleDet.batchName}}</h2>\n\n        <div class=\"rescheduleWrapper\" widget-content>\n          <div class=\"row\">\n            <div class=\"c-sm-4 c-md-4 c-lg-4\">\n              <div class=\"field-wrapper datePickerBox\" [ngClass]=\"{'has-value': reschedDate != ''}\">\n                <label for=\"reschDate\" style=\"color: black\">Reschedule Date</label>\n                <input type=\"text\" id=\"reschDate\" name=\"reschDate\" readonly=\"true\" class=\"form-ctrl bsDatepicker\"\n                  [(ngModel)]=\"reschedDate\" bsDatepicker>\n\n              </div>\n            </div>\n\n            <div class=\"c-sm-4 c-md-4 c-lg-4\">\n              <div class=\"form-wrapper timepick rescheduleTime\">\n                <label for=\"startTime\">Start Time</label>\n                <div class=\"tbox\">\n                  <div class=\"times\">\n                    <select class=\"mins side-form-ctrl\" [(ngModel)]=\"timepicker.reschedStartTime.hour\" name=\"startTime\">\n                      <option [value]=\"time\" *ngFor=\"let time of times\">\n                        {{time}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"times\">\n                    <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"timepicker.reschedStartTime.minute\"\n                      name=\"minute\">\n                      <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                        {{minute}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"c-sm-4 c-md-4 c-lg-4\">\n              <div class=\"form-wrapper timepick rescheduleTime\">\n                <label for=\"endtime\">End Time</label>\n                <div class=\"tbox\">\n                  <div class=\"times \">\n                    <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"timepicker.reschedEndTime.hour\"\n                      name=\"endtime\">\n                      <option [value]=\"time\" *ngFor=\"let time of times\">\n                        {{time}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"times\">\n                    <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"timepicker.reschedEndTime.minute\"\n                      name=\"minute\">\n                      <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                        {{minute}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"field-wrapper\" style=\"width: 50%;\">\n              <textarea type=\"text\" style=\"height:50px;\" id=\"reschreason\" name=\"reschreason\" [(ngModel)]=\"reschedReason\"\n                value=\"\" placeholder=\"Reschedule Reason\" class=\"form-ctrl textbox\">\n                </textarea>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"\" widget-footer>\n          <div class=\"clearfix\">\n            <aside class=\"pull-left\" style=\"margin-top: 10px;\">\n              <div class=\"field-checkbox-wrapper\">\n\n                <input type=\"checkbox\" value=\"\" class=\"form-checkbox\" id=\"is_reshedule_notified\"\n                  [checked]=\"getCheckedStatus('resheduleNotified')\" (change)=\"notifyRescheduleUpdate($event)\">\n                <label for=\"is_reshedule_notified\">Notify Students\n                  <div class=\"questionInfo lefts\" style=\"margin-left: 30px;\">\n                    <span class=\"qInfoIcon\">?</span>\n                    <div class=\"tooltip-box-field\">\n                      Reschedule SMS will be sent to student.\n                    </div>\n                  </div>\n                </label>\n\n              </div>\n            </aside>\n            <aside class=\"pull-right popup-btn\">\n              <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeRescheduleClass()\">\n              <input type=\"button\" value=\"Reschedule Class\" (click)=\"rescheduleClass()\" class=\"fullBlue btn\">\n            </aside>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- //////////////////////////////////Cancel///////////////////////////////// -->\n<!-- //////////////////////////////////Cancel///////////////////////////////// -->\n<!-- //////////////////////////////////Cancel///////////////////////////////// -->\n<!-- //////////////////////////////////Cancel///////////////////////////////// -->\n<!-- //////////////////////////////////Cancel///////////////////////////////// -->\n\n\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"isCourseCancel\">\n  <div class=\"popup pos-abs popup-body-container\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeCourseCancelClass()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n          <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n            <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n              <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                transform=\"translate(992.81 305.77) rotate(45)\" />\n              <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                transform=\"translate(978.81 305.77) rotate(45)\" />\n            </g>\n            <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\"\n              transform=\"translate(1012 297)\" />\n          </g>\n        </svg>\n      </span>\n      <div class=\"popup-content\">\n\n        <h2 widget-header>Cancel Class </h2>\n\n        <div class=\"CancelWrapper\" widget-content>\n          <div class=\"row cancelField\">\n            <div class=\"c-lg-6 c-md-6 c-sm-6\">\n              <div class=\"field-wrapper\">\n                <textarea class=\"form-ctrl textBox\" style=\"height: 100px;\" placeholder=\"Cancellation Reason:\" value=\"\"\n                  [(ngModel)]=\"cancellationReason\">\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            </textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row notifyChkbx\">\n          </div>\n        </div>\n\n        <div class=\"\" widget-footer>\n          <div class=\"clearfix\">\n            <aside class=\"pull-left\">\n              <div class=\"field-checkbox-wrapper\">\n\n                <input type=\"checkbox\" value=\"\" class=\"form-checkbox\" id=\"notifyCancel\"\n                  [checked]=\"getCheckedStatus('notifyCancel')\" (change)=\"notifyCancelUpdate($event)\">\n                <label for=\"notifyCancel\">Notify Students</label>\n\n              </div>\n            </aside>\n            <aside class=\"pull-right popup-btn\">\n              <input type=\"button\" value=\"Save\" (click)=\"cancelClass()\" class=\"btn\">\n              <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeCourseCancelClass()\">\n\n            </aside>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-class/course-class.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-class/course-class.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleCreateCourseCourseClassCourseClassComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-class/class-add/class-add.component.scss":
    /*!********************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-class/class-add/class-add.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseClassClassAddClassAddComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/* ========================================================================================= */\n.form-ctrl {\n  border-radius: 4px;\n}\ntr {\n  border: none;\n}\nth {\n  background-color: #e0eaec !important;\n}\n.btn {\n  background: #0084f6;\n  color: white;\n  border-radius: 4px;\n}\n.classScheduleTable table.table-main {\n  border-bottom: 1px solid rgba(211, 212, 213, 0.5);\n}\n.classScheduleTable table.table-main tr th {\n  text-align: center;\n  padding: 10px 5px;\n  width: 9%;\n}\n.classScheduleTable table.table-main tr th.subj {\n  width: 10%;\n}\n.classScheduleTable table.table-main tr th.desc {\n  width: 12%;\n}\n.classScheduleTable table.table-main tr th.topic {\n  width: 12%;\n}\n.classScheduleTable table.table-main tr th.room {\n  width: 4%;\n}\n.classScheduleTable table.table-main tr th.cl-type {\n  width: 7%;\n}\n.classScheduleTable table.table-main tr th:last-child {\n  width: 2%;\n}\n.classScheduleTable table.table-main tr td {\n  padding: 5px 5px;\n  font-size: 12px;\n  border-top: none;\n  border-bottom: none;\n}\n.classScheduleTable table.table-main tr td.subj {\n  width: 10%;\n}\n.classScheduleTable table.table-main tr td.desc {\n  width: 12%;\n}\n.classScheduleTable table.table-main tr td.room {\n  width: 4%;\n}\n.classScheduleTable table.table-main tr td.cl-type {\n  width: 7%;\n}\n.classScheduleTable table.table-main tr td:last-child {\n  width: 2%;\n}\n.classScheduleTable table.table-main tr.adder {\n  background: #efefef;\n}\n.classScheduleTable table.table-main tr.adder .pckr {\n  display: inline-flex;\n  margin: 0px;\n  width: 100%;\n}\n.classScheduleTable table.table-main tr.adder td .timePickerParent {\n  display: inline-flex;\n}\n.classScheduleTable table.table-main tr.adder td .timePickerParent .form-wrapper .hourTime {\n  width: 100%;\n}\n.classScheduleTable table.table-main tr.adder td .timePickerParent .form-wrapper .minuteTime {\n  width: 100%;\n}\n.classScheduleTable table.table-main tr.adder td .field-wrapper {\n  position: relative;\n}\n.classScheduleTable table.table-main tr.adder td .field-wrapper.datepicker {\n  padding-top: 3px;\n}\n.classScheduleTable table.table-main tr.adder td .field-wrapper.datepicker span {\n  position: relative;\n  right: 25px;\n  font-weight: 600;\n  font-size: 16px;\n  color: red;\n  cursor: pointer;\n  width: 20px;\n  text-align: center;\n  /* &::before {\n                                        content: '';\n                                        background: url('/assets/images/calendar.svg') no-repeat;\n                                        position: absolute;\n                                        right: 25px;\n                                        top: 0px;\n                                        width: 21px;\n                                        height: 21px;\n                                        z-index: 0;\n                                    } */\n}\n.classScheduleTable table.table-main tr.adder td .field-wrapper .form-ctrl {\n  background: transparent;\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  outline: none;\n  border: 0;\n  height: 36px;\n  z-index: 10;\n  font: 400 12px 'Open sans',sans-serif;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 24px;\n}\n/* ========================================================================================= */\n.cal-view {\n  margin: 10px;\n}\n.cal-view .common-search-filter {\n  margin-top: 5px;\n}\n.cal-view .common-search-filter .field-wrapper {\n  background: transparent;\n}\n.cal-view .common-search-filter .field-wrapper .form-ctrl {\n  background: transparent;\n}\n/* ========================================================================================= */\n/* ========================================================================================= */\n.classSchedule-Add {\n  padding: 15px 5px 10px 5px;\n  background: #efefef;\n}\n.classSchedule-Add .field-wrapper {\n  background: transparent;\n}\n.classSchedule-Add .field-wrapper .form-ctrl {\n  background: transparent;\n}\n.classSchedule-Add fieldset legend {\n  font-size: 12px;\n  position: absolute;\n  color: #0084f6;\n  top: -12px;\n}\n.classSchedule-Add fieldset .time-picker .field-wrapper {\n  display: inline !important;\n  margin: 0px 0px 0px 0px !important;\n  background: transparent;\n}\n.classSchedule-Add fieldset .time-picker .field-wrapper .form-ctrl {\n  background: transparent;\n  width: inherit !important;\n}\n.classSchedule-Add fieldset .time-picker .hour {\n  width: 75px;\n}\n.classSchedule-Add fieldset .time-picker .minute {\n  width: 75px;\n}\n.classSchedule-Add fieldset .time-picker .meridian {\n  width: 100px;\n}\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n.courses-list-table tr td:first-child {\n  text-align: left;\n  padding: 10px;\n  width: 20px;\n}\n.edit-view {\n  display: none;\n}\n.edit-view .radio-options {\n  margin-top: 0;\n}\n.edit-view .field-wrapper {\n  width: 130px;\n  padding-top: 0;\n  margin: 0 auto;\n}\n.edit-view .field-wrapper .form-ctrl {\n  padding: 0;\n  height: 28px;\n}\n.edit-view .field-wrapper.datePickerBox:after {\n  top: 2px;\n}\n.edit-view .radio-options > div {\n  margin-bottom: 0;\n}\n.data-view {\n  display: block;\n}\n.edit-mod .edit-view {\n  display: block;\n}\n.edit-mod .data-view {\n  display: none;\n}\n.common-tab {\n  padding-top: 5px;\n}\n.common-tab ul {\n  font-size: 0;\n}\n.common-tab ul li {\n  margin-right: 1px;\n  display: inline-block;\n  width: 19%;\n  max-width: 158px;\n}\n.common-tab ul li a {\n  display: block;\n  padding: 10px 5px;\n  background: #eff7ff;\n  border: 1px solid #cccdcd;\n  color: #0084f6;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n}\n.common-tab ul li:hover a, .common-tab ul li.active a {\n  background: #0084f6;\n  color: #fff;\n  border-color: #0084f6;\n  font-weight: normal;\n}\n.view-icon,\n.edit-icon {\n  margin-right: 5px;\n}\n.create-standard-field {\n  margin-bottom: 10px;\n}\n.filter-for-courses label {\n  margin-top: 15px;\n  display: block;\n}\n.filter-for-courses .form-btn-head {\n  width: 30px;\n  height: 30px;\n  background: url('search.svg') no-repeat center center;\n  background-size: 20px 20px;\n  margin-top: 2px;\n  cursor: pointer;\n  margin-right: 20px;\n  filter: grayscale(100%);\n}\n.filter-search {\n  margin-bottom: 10px;\n}\n.filter-search > div {\n  margin-bottom: 0;\n}\n.filter-search .export-print {\n  margin-top: 6px;\n}\n.course-second .filter-for-courses {\n  margin-top: 0;\n}\n.course-second .filter-search {\n  margin-bottom: 0;\n}\n.course-second .filter-for-courses label {\n  margin-top: 10px;\n}\n.edit-view-btn > div {\n  display: inline-block;\n  margin: 0 5px;\n}\n.add-edit {\n  margin-bottom: 0;\n  margin-top: 20px;\n}\n.add-edit i {\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 17px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 14px;\n}\n.create-standard-form {\n  margin: 10px 0;\n  padding: 10px 20px 20px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .field-checkbox-wrapper {\n  margin-top: 15px;\n  background: transparent;\n}\n.create-standard-form .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #777;\n}\n.create-standard-form .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.create-standard-form .field-checkbox-wrapper .form-checkbox + label:after {\n  transform: scale(0.7);\n}\n.create-standard-form .field-checkbox-wrapper .form-checkbox + label:before {\n  transform: rotate(-45deg) scale(0.7);\n}\n.create-standard-form .field-wrapper {\n  margin-top: -10px;\n}\n.create-standard-form .field-wrapper label {\n  top: 25px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n}\n.create-standard-form p {\n  margin-top: 5px;\n  font-size: 10px;\n  color: #979797;\n}\n.create-cancel-small {\n  margin-top: 10px;\n}\n.create-cancel-small .btn {\n  font-size: 14px;\n  font-weight: normal;\n  height: 36px;\n}\n.edit-view-of-couse > tr > td {\n  padding: 0px !important;\n}\n.course-list-edit {\n  background: #fff;\n  padding: 20px;\n  box-shadow: 0px 0px 1px 1px #c6c4c4 inset;\n  max-height: 200px;\n  overflow: auto;\n}\n.course-list-edit .evoc-box {\n  padding: 10px;\n}\n.course-list-edit .evoc-box .field-checkbox-wrapper {\n  background: transparent;\n}\n.course-list-edit .evoc-box .field-checkbox-wrapper label span {\n  font-size: 13px;\n  font-weight: 600;\n  top: -3px;\n  position: relative;\n}\n.ce-list-top {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.ce-list-top label {\n  font-weight: 400;\n}\n.ce-list-top span {\n  font-weight: 600;\n  margin: 0 5px;\n}\n.ce-list-bottom .table-responsive tbody tr th {\n  background: #d8d8d8;\n  font-weight: 600;\n  font-size: 14px;\n  color: #333;\n  padding: 5px 10px;\n  text-align: left;\n}\n.ce-list-bottom .table-responsive tbody tr th:last-child {\n  width: 200px;\n  text-align: center;\n}\n.ce-list-bottom .table-responsive tbody tr th:first-child {\n  width: 100px;\n}\n.ce-list-bottom .table-responsive tbody tr td {\n  padding: 7px 10px;\n  background: #fff;\n  font-size: 12px;\n  text-align: left;\n  border-bottom: 1px solid #ededed;\n}\n.ce-list-bottom .table-responsive tbody tr td:last-child {\n  text-align: center;\n}\n.ce-list-bottom .table-responsive tbody tr:hover td {\n  background: #fff;\n}\n.ce-list-bottom .table-responsive tbody tr:last-child td {\n  border-bottom: 0;\n}\n.ce-list-bottom .field-checkbox-wrapper .form-checkbox + label:before {\n  transform: scale(0.7) rotate(-45deg);\n}\n.ce-list-bottom .field-checkbox-wrapper .form-checkbox + label:after {\n  transform: scale(0.6);\n}\n.delete-btn a {\n  color: #f44336;\n}\n.delete-btn a i {\n  font-size: 18px !important;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.close-accor {\n  float: right;\n  width: 24px;\n  font-size: 31px;\n  height: 24px;\n  text-align: center;\n  border: none;\n  border-radius: 50%;\n  line-height: 16px;\n  margin-right: 4px;\n  margin-top: 5px;\n  cursor: pointer;\n  color: #0084f6;\n  font-weight: 400;\n}\n.schedule-class-box .filter-box .field-wrapper {\n  margin-top: -10px;\n}\n.schedule-class {\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.schedule-class .btn {\n  font-weight: 600;\n  font-size: 13px;\n  height: 30px;\n}\n.schedule-class .schedule-class-left {\n  padding-top: 10px;\n}\n.schedule-class .schedule-class-left label {\n  font-weight: 600;\n  margin-right: 15px;\n}\n.view-tab li {\n  display: inline-block;\n  margin-right: 0px;\n}\n.view-tab li .btn {\n  margin-left: 0;\n  height: 25px;\n  line-height: 12px;\n  font-weight: normal;\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.view-c-detail {\n  margin-top: 5px;\n}\n.view-c-detail .filter-search {\n  margin-bottom: 0;\n}\n.view-c-detail .filter-search .export-print {\n  margin-bottom: 0;\n}\n.view-c-detail .vcd-l {\n  padding-top: 10px;\n}\n.view-c-detail .vcd-l label {\n  font-weight: 600;\n  font-size: 15px;\n}\n.calender-course {\n  margin-bottom: 15px;\n  margin-top: 8px;\n  position: relative;\n}\n.calender-course .c-control {\n  position: absolute;\n  width: 30px;\n  height: 100%;\n  background: #efefef;\n  border: 1px solid #cccccc;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.calender-course .c-control.cal-left {\n  left: 0;\n  top: 0;\n  background: url('left_arrow.svg') no-repeat center center;\n  background-size: 11px;\n}\n.calender-course .c-control.cal-left:hover {\n  border: 1px solid #0084f6;\n}\n.calender-course .c-control.cal-right {\n  right: 0;\n  top: 0;\n  background: url('right_arrow.svg') no-repeat center center;\n  background-size: 11px;\n}\n.calender-course .c-control.cal-right:hover {\n  border: 1px solid #0084f6;\n}\n.calender-course ul {\n  text-align: center;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.calender-course ul li {\n  display: inline-block;\n  padding: 5px 10px;\n  border: 1px solid #f0f0f0;\n  width: 8.8%;\n  background: #efefef;\n  vertical-align: top;\n}\n.calender-course ul li span.c-date {\n  font-size: 24px;\n  color: #0084f6;\n}\n.calender-course ul li.active {\n  background: #ddedfd;\n  border: 1px solid #ccc;\n}\n.class-cancel {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  text-align: center;\n  line-height: 10px;\n  font-size: 11px;\n  color: #fff;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.class-cancel.blue {\n  background: #0084f6;\n}\n.class-cancel.red {\n  background: red;\n}\n.class-cancel.yellow {\n  background: #f8b238;\n}\n.exam-is {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #f8b238;\n  vertical-align: middle;\n}\n.class-is {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #0084f6;\n  vertical-align: middle;\n}\n.calender-class-detail > div:last-child {\n  padding-top: 5px;\n}\n.calender-class-detail > div:last-child span {\n  margin-left: 5px;\n}\n.calender-view1 th {\n  padding: 10px;\n  font-size: 13px;\n  text-align: center;\n}\n.calender-view1 .table-responsive {\n  margin-top: 10px;\n}\n.calender-view1 .table-accor-head .open-accor {\n  display: block;\n}\n.calender-view1 .table-accor-head .close-accor {\n  display: none;\n}\n.calender-view1 .table-accor-head.active .accordian-heading .open-accor {\n  display: none;\n}\n.calender-view1 .table-accor-head.active .accordian-heading .close-accor {\n  display: block;\n}\n.calender-view1 .table-accor-head td {\n  padding: 0;\n  background: #fff;\n}\n.calender-view1 .accordian-heading h4 {\n  padding: 3px !important;\n  color: #444;\n  border: 1px solid #eaecee;\n  border-radius: 20px;\n  margin: 4px 0 2px;\n  background: #e6f2fe;\n  text-align: left;\n}\n.calender-view1 .accordian-heading h4 .open-accor,\n.calender-view1 .accordian-heading h4 .close-accor {\n  float: left;\n}\n.calender-view1 .accordian-heading h4 .close-accor {\n  width: 18px;\n  height: 18px;\n  line-height: 11px;\n  margin-top: 0;\n}\n.calender-view1 .accordian-heading h4 .open-accor {\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  margin-top: 0;\n}\n.calender-view1 .accordian-heading h4 .date-c {\n  font-size: 13px;\n  line-height: 20px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.calender-view1 .accordian-heading h4 .delete-icon {\n  font-size: 18px;\n  color: #f44336;\n  margin-left: 10px;\n  margin-right: 9px;\n  cursor: pointer;\n}\n.calender-view1 .accordian-heading h4 .delete-icon svg {\n  width: 15px;\n  vertical-align: top;\n  display: inline-block;\n  margin-top: 3px;\n}\n.calender-view1 .accordian-heading h4 .delete-icon svg line {\n  stroke-width: 2;\n}\n.delete-btn svg {\n  width: 15px;\n  vertical-align: top;\n  display: inline-block;\n  margin-top: 3px;\n}\n.delete-btn svg line {\n  stroke-width: 2;\n}\n.mail-notification {\n  width: 20px;\n  height: 20px;\n  background: url('mial_notification.svg') no-repeat;\n  cursor: pointer;\n  display: inline-block;\n}\n.mail-notify {\n  width: 20px;\n  height: 20px;\n  background: url('mail_notify.svg') no-repeat;\n  cursor: pointer;\n  display: inline-block;\n}\n.reschedule-icon {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  display: inline-block;\n  display: inline-block;\n  color: red;\n  font-weight: 600;\n  font-size: 16px;\n}\n.action-box {\n  text-align: right;\n  width: 105px;\n  float: right;\n}\n.action-box .delete-btn {\n  font-size: 18px;\n  color: #f44336;\n}\n.action-box span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 8px 0 0;\n  cursor: pointer;\n}\n.action-box .edit-icon {\n  width: 19px;\n  height: 16px;\n}\n.tick-mark1 {\n  width: 15px;\n  height: 6px;\n  border-left: 2px solid green;\n  border-bottom: 2px solid green;\n  transform: rotate(-45deg);\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 1px;\n}\n.ledgend-footer {\n  margin-top: 15px;\n}\n.ledgend-footer label {\n  font-weight: 600;\n  margin-right: 16px;\n}\n.ledgend-footer div {\n  margin-right: 20px;\n  font-size: 11px;\n}\n.ledgend-footer div span {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 3px;\n}\n.date-arrow {\n  position: relative;\n}\n.date-arrow div {\n  position: relative;\n}\n.date-arrow div span {\n  background: #fff;\n  display: inline-block;\n  padding: 4px 20px;\n  z-index: 1;\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n}\n.date-arrow div:after {\n  position: absolute;\n  left: 20px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  content: \"\\f104\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  width: 5px;\n  height: 16px;\n}\n.date-arrow div:before {\n  position: absolute;\n  right: 20px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  content: \"\\f105\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  width: 5px;\n  height: 16px;\n}\n.date-arrow:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20px;\n  margin: auto;\n  width: 88%;\n  height: 0px;\n  border-bottom: 1px solid #ccc;\n}\n.calender-view1.cal-view-2 .accordian-heading h4 .open-accor,\n.calender-view1.cal-view-2 .accordian-heading h4 .close-accor {\n  float: right;\n  margin-right: 0;\n}\n.calender-view1.cal-view-2 td {\n  font-weight: 600;\n  font-size: 14px;\n  padding: 0;\n}\n.calender-view1.cal-view-2 td:first-child {\n  text-align: left;\n}\n.calender-view1.cal-view-2 td .accordian-heading h4 .date-c {\n  color: #004a7e;\n  font-size: 14px;\n}\n.new-action > div {\n  width: 100%;\n  box-sizing: border-box;\n}\n.new-action > div span {\n  margin: 0;\n}\n.new-action > div > div {\n  width: 50%;\n  box-sizing: border-box;\n  border-right: 1px solid #ccc;\n  text-align: center;\n  padding: 5px;\n}\n.new-action > div > div:last-child {\n  border-right: 1px solid transparent;\n}\n.new-action > div:first-child {\n  border-bottom: 1px solid #ccc;\n}\n.cal-view-2 .action-box,\n.cal-view-2 .new-action {\n  width: 65px;\n}\n.cal-view-2 .action-box {\n  padding-right: 5px;\n  margin: 5px 0;\n}\n.read-more-view {\n  font-size: 12px;\n  margin-top: 10px;\n  color: #004a7e;\n}\n.new-tick-mark {\n  height: 72px;\n  width: 35px;\n  border-right: 2px solid #fff;\n  margin-right: 8px;\n  text-align: center;\n  position: relative;\n}\n.new-tick-mark .tick-mark1 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  right: 0;\n  left: 0;\n}\n.tick-mark-new > div {\n  display: inline-block;\n  vertical-align: middle;\n}\n.course-detail-section {\n  margin-top: 30px;\n}\n.course-detail-section .cd-s {\n  font-size: 13px;\n  font-weight: 600;\n}\n.course-detail-section label {\n  margin-right: 15px;\n}\n.course-detail-section span {\n  font-weight: 600;\n  margin-right: 10px;\n}\n.schedule-class-inner {\n  padding: 20px 15px 25px;\n  background: #efefef;\n}\n.schedule-class-inner .form-ctrl {\n  background: transparent;\n}\n.schedule-class-inner .s-c-1 {\n  font-weight: 600;\n  font-weight: 14px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.schedule-class-inner .choose-class-type {\n  margin-top: 20px;\n}\n.schedule-class-inner .choose-class-type .field-radio-wrapper {\n  display: inline-block;\n  margin-right: 20px;\n}\n.schedule-class-inner .select-days {\n  margin-top: 20px;\n}\n.schedule-class-inner .select-days span {\n  float: left;\n}\n.schedule-class-inner .select-days .field-checkbox-wrapper {\n  float: left;\n  margin-right: 2%;\n  background: transparent;\n  margin-left: 2%;\n}\n.schedule-class-inner .select-days .field-checkbox-wrapper .form-checkbox + label:after {\n  transform: scale(0.7);\n}\n.schedule-class-inner .select-days .field-checkbox-wrapper .form-checkbox + label:before {\n  transform: rotate(-45deg) scale(0.7);\n}\n.create-class-schedule h4 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.s-form-control {\n  margin-top: 30px;\n  border-top: 1px solid #ccc;\n}\n@media only screen and (min-width: 1000px) and (max-width: 1200px) {\n  .calender-course ul li {\n    width: 8%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 999px) {\n  .calender-course ul li {\n    width: 6%;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .calender-class-detail > div {\n    width: 100%;\n    text-align: center;\n  }\n  .calender-class-detail > div:last-child span {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .common-tab ul li {\n    margin-right: 0;\n    width: 20%;\n  }\n  .common-tab ul li a {\n    padding: 5px 5px;\n    font-size: 12px;\n  }\n  .filter-for-courses label {\n    margin-top: 0;\n    margin-bottom: 5px;\n  }\n  .filter-for-courses .filter-search .btn {\n    margin-right: 0;\n    margin-left: 10px;\n  }\n  .radio-options {\n    text-align: left;\n  }\n  .radio-options .field-radio-wrapper {\n    margin-bottom: 10px !important;\n  }\n  .radio-options .field-radio-wrapper:last-child {\n    margin-bottom: 0 !important;\n  }\n  .create-standard-form {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .create-cancel-small .btn {\n    margin-right: 0;\n    margin-left: 10px;\n  }\n  .schedule-class-box .filter-box .fullBlue.btn {\n    margin-top: 15px;\n    margin-bottom: 0;\n  }\n  .schedule-class .schedule-class-left label {\n    display: block;\n    margin-bottom: 5px;\n  }\n  .schedule-class .schedule-class-left span {\n    display: block;\n    margin-bottom: 10px;\n  }\n  .schedule-class .btn {\n    margin-right: 0;\n    margin-left: 10px;\n    margin-bottom: 0;\n  }\n  .view-tab li .btn {\n    margin-right: 0;\n    margin-bottom: 0;\n  }\n  .calender-course ul li {\n    padding: 5px 5px;\n    width: 17%;\n    margin-bottom: 5px;\n  }\n  .ledgend-footer label {\n    display: block;\n    width: 100%;\n    margin-right: 0;\n    margin-bottom: 10px;\n  }\n  .ledgend-footer div {\n    margin-bottom: 5px;\n  }\n  .cal-view .middle-top .btn {\n    margin-bottom: 0;\n  }\n  .courses-list-table table,\n  .calender-view1 table {\n    min-width: 600px;\n  }\n  .calender-course ul li span.c-date {\n    font-size: 19px;\n  }\n  .date-arrow:after {\n    width: 72%;\n  }\n  .course-detail-section {\n    margin-top: 20px;\n  }\n  .course-detail-section > div {\n    margin-bottom: 5px;\n  }\n  .filter-box {\n    padding: 10px 0px;\n  }\n  .popup-btn .btn {\n    font-size: 12px;\n    height: 32px;\n  }\n}\n@media only screen and (max-width: 420px) {\n  .common-tab ul li {\n    width: auto;\n  }\n  .common-tab ul li a {\n    font-size: 10px;\n  }\n  .field-checkbox-wrapper .form-checkbox + label {\n    font-size: 12px;\n  }\n}\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 65%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 05%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.extraMargin {\n  margin-left: 10px;\n  margin-top: 10px;\n}\n.l-circle {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  font-size: 12px;\n  display: inline-block;\n  padding: 6px;\n  text-align: center;\n}\n.l-text {\n  color: rgba(0, 0, 0, 0.7);\n  background: #fff;\n  font-weight: 700;\n  border: 1px solid rgba(25, 31, 34, 0.156863);\n}\n.side-circles span {\n  margin-right: 5px;\n}\n.p-text {\n  background: #0084f6;\n  color: #fff;\n  font-weight: 700;\n  padding: 7px 7px;\n}\n.radio-options .field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  background: #0084f6;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n}\n.cancelWraper ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.cancelWraper .textBox {\n  width: 100%;\n  height: 100px;\n  padding: 10px;\n  box-sizing: border-box;\n  resize: none;\n  border: 1px solid #0084f6 !important;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.cancelWraper .textBox:focus {\n  padding: 10px;\n}\n.customTableWrapper {\n  max-height: 400px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.rowAllignCustomAdd {\n  margin-left: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background: #efefef;\n  margin-right: 0px;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n.textBoxContent {\n  max-height: 60px;\n  background: transparent;\n  min-height: 40px;\n  border-bottom: 1px solid #0084f6;\n}\n.marginTopBottom {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.class-wrapper {\n  border-bottom: 1px solid #ccc;\n  margin-top: 5px;\n  padding-bottom: 10px;\n}\n.extra-wrapper {\n  border-bottom: 1px solid #ccc;\n  margin-top: 5px;\n  padding-bottom: 10px;\n}\n.cancel-wrapper {\n  margin-top: 5px;\n  border-bottom: 1px solid #ccc;\n}\n.tableStyling {\n  margin-top: 10px;\n}\n.form-wrapper {\n  background: transparent;\n  margin: 5px 0px;\n  position: relative;\n}\n.form-wrapper label {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.77);\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n}\n.form-wrapper .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding: 5px 0px;\n  font-weight: 400;\n  font-size: 12px;\n  color: black;\n}\n.form-wrapper .side-form-ctrl.bsDatepicker {\n  padding: 5px;\n  width: 100%;\n}\n.form-wrapper.timepick {\n  display: inline !important;\n  width: 50%;\n  padding: 1px 0px;\n}\n.form-wrapper.timepick .tbox {\n  width: 100%;\n}\n.form-wrapper.timepick .tbox .times {\n  display: inline-block;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding: 4px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl.mins {\n  width: 70px;\n  height: 30px;\n  font-size: 12px;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl.mers {\n  width: 50px;\n  height: 30px;\n  font-size: 12px;\n}\n.form-wrapper .topic-link {\n  text-align: center;\n  cursor: pointer;\n}\n.form-wrapper .topic-linked {\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #1283f4;\n}\n.form-wrapper .topic-linked::-moz-placeholder {\n  color: #1283f4;\n}\n.form-wrapper .topic-linked:-ms-input-placeholder {\n  color: #1283f4;\n}\n.form-wrapper .topic-linked::placeholder {\n  color: #1283f4;\n}\n.popup-date-selection .row.desc {\n  margin-bottom: 5px;\n}\n.popup-date-selection .paddingFive {\n  padding-top: 5px;\n}\n.popup-date-selection .table-selectdate-wrapper {\n  border-spacing: 0px 5px;\n  border-top: 1px solid #efefef;\n  max-height: 215px;\n  overflow: hidden;\n}\n.popup-date-selection .table-selectdate-wrapper ::-webkit-scrollbar {\n  display: block;\n}\n.popup-date-selection .table-selectdate-wrapper .table-warpper-custom {\n  max-height: 200px;\n  overflow: auto;\n}\n.popup-date-selection .table-selectdate-wrapper .table-warpper-custom tr th {\n  text-align: left;\n  padding: 15px 10px;\n}\n.popup-date-selection .table-selectdate-wrapper .table-warpper-custom tr td {\n  text-align: left;\n  padding: 15px 10px;\n}\n.popup-date-selection .table-selectdate-wrapper .table-warpper-custom tr td .field-wrapper {\n  padding: 0px;\n  border: 1px solid #c6c6c6;\n  width: 225px;\n  height: 28px;\n}\n.popup-date-selection .table-selectdate-wrapper .table-warpper-custom tr td .field-wrapper .form-ctrl {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0px 6px 8px;\n  outline: none;\n  border: 0;\n  border-bottom: none;\n  height: 36px;\n  z-index: 10;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 24px;\n}\n.popup-date-selection .table-selectdate-wrapper .table-warpper-custom tr td .field-wrapper.datePickerBox:after {\n  top: 2px;\n}\n.table .table-responsive table thead tr {\n  padding: 0px;\n  margin: 0px;\n}\n.table .table-responsive table thead tr th:first-child {\n  text-align: left;\n}\n.table .table-responsive table tbody tr {\n  padding: 0px;\n  margin: 0px;\n}\n.table .table-responsive table tbody tr td {\n  padding: 0px;\n  margin: 0px;\n}\n.table .table-responsive table tbody tr td .field-wrapper .form-ctrl.datePicker-box {\n  padding: 1px;\n  border: 1px solid black;\n}\n.tableDatePickerBox {\n  border: 1px solid #c6c6c6;\n  margin-left: 30%;\n  width: 225px;\n  height: 28px;\n}\n.tableDatePickerBox .form-ctrl.bsDatepicker {\n  border-bottom: none;\n  margin-top: -15px;\n  padding: 5px 5px;\n}\n.tableDatePickerBox.field-wrapper.datePickerBox:after {\n  top: 2px;\n}\n.field-wrapper.datePickerBox:after {\n  top: 30px;\n}\n.batch-schedule tr th {\n  padding: 10px;\n}\n.batch-schedule tr td .field-checkbox-wrapper {\n  width: 75px !important;\n  height: 25px !important;\n}\n.batch-schedule tr td .field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n.batch-schedule tr td .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 14px;\n  display: inline-block;\n}\n.batch-schedule tr td .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.batch-schedule tr td .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.batch-schedule tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.batch-schedule tr td .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.batch-schedule .filter-Section {\n  margin: 0px 0px 5px 0px;\n}\n.batch-schedule .weekly-Schedule .btnGroup {\n  padding-top: 10px;\n  margin-right: 15px;\n}\n.batch-schedule .weekly-Schedule .btn-table {\n  margin-right: 0px;\n}\n.batch-schedule .weekly-Schedule .weeklyDiv {\n  margin: 10px 0px;\n}\n.batch-schedule .weekly-Schedule .weeklyDiv .weeklyAdd {\n  margin-bottom: 10px;\n}\n.batch-schedule .weekly-Schedule .weeklyDiv .weekTable {\n  margin-bottom: 10px;\n}\n.batch-schedule .custom-Schedule .adderCustom {\n  margin: 10px 0px;\n}\n.batch-schedule .custom-Schedule .customTable {\n  margin-bottom: 10px;\n}\n.batch-schedule .common-section .divExtraClass {\n  margin-bottom: 10px;\n}\n.batch-schedule .common-section .divExtraClass .adder-Row {\n  margin: 10px 0px;\n}\n.batch-schedule .common-section .divExtraClass .extraClass {\n  margin-bottom: 10px;\n}\n.batch-schedule .common-section .divCancelClass {\n  margin: 10px 0px;\n}\n.batch-schedule .common-section .divCancelClass .cancelTable {\n  margin: 10px 0px;\n}\n.warningNote {\n  margin: 15px 10px;\n  border: 2px solid #efefef;\n  border-spacing: 5px 5px;\n}\n.table-scroll-wrapper {\n  overflow: auto;\n}\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n}\n.topicBox {\n  position: fixed;\n  top: 20%;\n  left: 20%;\n  right: 20%;\n  width: 60%;\n  z-index: 100;\n  background: #f7f5f5;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n}\n.close-btn {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.close-btn span {\n  cursor: pointer;\n}\n.header-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 10px;\n  margin-top: 20px;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.7);\n}\n.sub-header {\n  width: 30%;\n}\n.total-topic {\n  width: 20%;\n  margin-left: 10%;\n}\n.topic-listing-container {\n  overflow-y: scroll;\n  max-height: 270px;\n}\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  /* If you want dots under the hoverable text */\n}\n/* Tooltip text */\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n}\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.k-treeview .k-in.k-state-selected {\n  background-color: transparent;\n  color: #656565;\n}\n.k-checkbox:indeterminate + .k-checkbox-label::after {\n  background-color: #0084f6;\n}\n.k-checkbox:checked + .k-checkbox-label::before {\n  border-color: #0084f6;\n  background-color: #0084f6;\n}\n.k-treeview .k-content, .k-treeview > .k-group, .k-treeview .k-item > .k-group {\n  padding: 10px;\n}\n.k-checkbox:indeterminate + .k-checkbox-label::after {\n  background-color: #0084f6;\n}\n.k-checkbox:indeterminate + .k-checkbox-label::after {\n  content: \"\";\n  transform: scale(1);\n  width: 8px;\n  height: 8px;\n  top: 4px;\n  left: 4px;\n}\n.weekly-schedule-table-container {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 15px;\n  margin-top: 15px;\n  width: auto;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.weekly-schedule-table-container .table-heading-container {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #ccc;\n}\n.weekly-schedule-table-container .table-heading-container .heading-item {\n  text-align: left;\n  font-weight: 600;\n  width: 33%;\n  padding: 10px;\n  background-color: #e0eaec !important;\n}\n.weekly-schedule-table-container .table-outer-container {\n  display: flex;\n  flex-direction: column;\n}\n.weekly-schedule-table-container .table-value-container {\n  display: flex;\n  flex-direction: row;\n}\n.weekly-schedule-table-container .table-value-container .value-item {\n  text-align: left;\n  font-weight: 400;\n  width: 33%;\n  padding: 10px;\n}\n.tbox {\n  width: 100%;\n}\n.tbox .times {\n  display: inline-block;\n}\n.tbox .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding: 4px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n.tbox .side-form-ctrl.mins {\n  width: 70px;\n  height: 30px;\n  font-size: 12px;\n}\n.tbox .side-form-ctrl.mers {\n  width: 50px;\n  height: 30px;\n  font-size: 12px;\n}\n.field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 14px;\n  display: inline-block;\n}\n.field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.topic-container {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  display: flex;\n  flex-direction: row;\n  margin: 2px;\n}\n.arrow-icon {\n  padding: 0 5px;\n}\n.level1Topic {\n  padding-top: 4px;\n  padding-bottom: 2px;\n}\n.subTopicLevel {\n  padding-top: 8px;\n}\n.pt-4 {\n  padding-top: 4px !important;\n}\n.topic-lbl {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.77);\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n}\n::ng-deep bs-datepicker-container {\n  top: -120px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvY291cnNlLWNsYXNzL2NsYXNzLWFkZC9jbGFzcy1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VB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RTtFQUNJLHlCQUF5QjtBQXNKL0I7QUFwSkU7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBdUovQjtBQXJKRTtFQUNJLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtBQXdKZDtBQXRKRTtFQUNJLGNBQWM7QUF5SnBCO0FBdkpBO0VBQ0ksMEJBQXlCO0VBQ3pCLHlCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUEwSmY7QUF4SkE7RUFDSSxjQUFjO0FBMkpsQjtBQXpKQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7QUE0SnZCO0FBMUpBO0VBQ0ksZ0JBQWdCO0FBNkpwQjtBQTNKQTtFQUNJLDJCQUF5QjtBQThKN0I7QUE1SkE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsbUNBQW1DO0FBK0p2QztBQTVKSTtFQUNJLHNCQUFzQjtBQStKOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvY3JlYXRlLWNvdXJzZS9jb3Vyc2UtY2xhc3MvY2xhc3MtYWRkL2NsYXNzLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmZvcm0tY3RybHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgdHJ7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIFxuICAgIHRoe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZWFlYyAhaW1wb3J0YW50O1xuICB9XG4gIC5idG4ge1xuICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuLmNsYXNzU2NoZWR1bGVUYWJsZSB7XG4gICAgdGFibGUge1xuICAgICAgICAmLnRhYmxlLW1haW4ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMSwgMjEyLCAyMTMsIDAuNSk7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOSU7XG4gICAgICAgICAgICAgICAgICAgICYuc3ViaiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuZGVzYyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYudG9waWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLnJvb20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuY2wtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNyU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgJi5zdWJqIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5kZXNjIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMiU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5yb29tIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLmNsLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDclO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMiU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5hZGRlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgICAgICAgICAgIC5wY2tyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAudGltZVBpY2tlclBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ob3VyVGltZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWludXRlVGltZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5kYXRlcGlja2VyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMwMDg0ZjY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDQwMCAxMnB4ICdPcGVuIHNhbnMnLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYudGltZXBpY2sge31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmNhbC12aWV3IHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgLmNvbW1vbi1zZWFyY2gtZmlsdGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAvLyBwYWRkaW5nOiAxNXB4IDVweCAxMHB4IDVweDtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5jbGFzc1NjaGVkdWxlLUFkZCB7XG4gICAgcGFkZGluZzogMTVweCA1cHggMTBweCA1cHg7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpZWxkc2V0IHtcbiAgICAgICAgbGVnZW5kIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgfVxuICAgICAgICAudGltZS1waWNrZXIge1xuICAgICAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ob3VyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5taW51dGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lcmlkaWFuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5jb3Vyc2VzLWxpc3QtdGFibGUge1xuICAgIHRyIHtcbiAgICAgICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmVkaXQtdmlldyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAucmFkaW8tb3B0aW9ucyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMDA2MGEzO1xuICAgICAgICB9XG4gICAgICAgICYuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmFkaW8tb3B0aW9ucz5kaXYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbn1cblxuLmRhdGEtdmlldyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5lZGl0LW1vZCB7XG4gICAgLmVkaXQtdmlldyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuZGF0YS12aWV3IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5jb21tb24tdGFiIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTklO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNThweDtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmY3ZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2RjZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRiZy13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udmlldy1pY29uLFxuLmVkaXQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jcmVhdGUtc3RhbmRhcmQtZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5maWx0ZXItZm9yLWNvdXJzZXMge1xuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5mb3JtLWJ0bi1oZWFkIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnN2Zykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICB9XG59XG5cbi5maWx0ZXItc2VhcmNoIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICY+ZGl2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLmV4cG9ydC1wcmludCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG59XG5cbi5jb3Vyc2Utc2Vjb25kIHtcbiAgICAuZmlsdGVyLWZvci1jb3Vyc2VzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gICAgLmZpbHRlci1zZWFyY2gge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAuZmlsdGVyLWZvci1jb3Vyc2VzIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG5cbi5lZGl0LXZpZXctYnRuIHtcbiAgICAmPmRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG59XG5cbi5hZGQtZWRpdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29tbW9uLWJsdWU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuZXhwZW5kLWJveCB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jcmVhdGUtc3RhbmRhcmQtZm9ybSB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAmK2xhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6Y2hlY2tlZCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMC43KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb3JtLWN0cmwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgfVxufVxuXG4uY3JlYXRlLWNhbmNlbC1zbWFsbCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgfVxufSAvLyBjc3MgZm9yIGVkaXQgLmNvdXJzZVxuLmVkaXQtdmlldy1vZi1jb3VzZSB7XG4gICAgJj50cj50ZCB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmNvdXJzZS1saXN0LWVkaXQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggI2M2YzRjNCBpbnNldDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAuZXZvYy1ib3gge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jZS1saXN0LXRvcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG59XG5cbi5jZS1saXN0LWJvdHRvbSB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDhkOGQ4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbiAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICB9XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICNmNDQzMzY7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbG9zZS1hY2NvciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMzFweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59IC8vIHNjaGVkdWxlLWNsYXNzLWJveCBjc3Ncbi5zY2hlZHVsZS1jbGFzcy1ib3gge1xuICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgLmZpZWxkLXdyYXBwZXIgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgfVxuICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZnVsbEJsdWUuYnRuIHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNjaGVkdWxlLWNsYXNzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIC5idG4ge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLnNjaGVkdWxlLWNsYXNzLWxlZnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnZpZXctdGFiIHtcbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnZpZXctYy1kZXRhaWwge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAuZmlsdGVyLXNlYXJjaCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIC5leHBvcnQtcHJpbnQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudmNkLWwge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhbGVuZGVyLWNvdXJzZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jLWNvbnRyb2wge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgJi5jYWwtbGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdF9hcnJvdy5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuY2FsLXJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmlnaHRfYXJyb3cuc3ZnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1bCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICAgICAgICB3aWR0aDogOC44JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgc3Bhbi5jLWRhdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGVkZmQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsYXNzLWNhbmNlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICYuYmx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb21tb24tYmx1ZTtcbiAgICB9XG4gICAgJi5yZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgfVxuICAgICYueWVsbG93IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4YjIzODtcbiAgICB9XG59XG5cbi5leGFtLWlzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhiMjM4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jbGFzcy1pcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogJGNvbW1vbi1ibHVlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jYWxlbmRlci1jbGFzcy1kZXRhaWwge1xuICAgICY+ZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYWxlbmRlci12aWV3MSB7XG4gICAgdGgge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAudGFibGUtYWNjb3ItaGVhZCB7XG4gICAgICAgIC5vcGVuLWFjY29yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1hY2NvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIC5hY2NvcmRpYW4taGVhZGluZyB7XG4gICAgICAgICAgICAgICAgLm9wZW4tYWNjb3Ige1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2xvc2UtYWNjb3Ige1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRhYmxlLWFjY29yLWhlYWQgdGQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbiAgICAuYWNjb3JkaWFuLWhlYWRpbmcgaDQge1xuICAgICAgICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVjZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogNHB4IDAgMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTZmMmZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAub3Blbi1hY2NvcixcbiAgICAgICAgLmNsb3NlLWFjY29yIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1hY2NvciB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAub3Blbi1hY2NvciB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAuZGF0ZS1jIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIC5kZWxldGUtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgICBsaW5lIHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRlbGV0ZS1idG4ge1xuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgbGluZSB7XG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tYWlsLW5vdGlmaWNhdGlvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21pYWxfbm90aWZpY2F0aW9uLnN2Zykgbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWlsLW5vdGlmeSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21haWxfbm90aWZ5LnN2Zykgbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZXNjaGVkdWxlLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9yZXNjaGVkdWxlX2NsYXNzLnN2Zykgbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hY3Rpb24tYm94IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIC5kZWxldGUtYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwIDhweCAwIDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmVkaXQtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxOXB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxufVxuXG4udGljay1tYXJrMSB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmVlbjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5sZWRnZW5kLWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGF0ZS1hcnJvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpdiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjEwNFwiO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjEwNVwiO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDg4JTtcbiAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIH1cbn0gLy8gc2Vjb25kIGNhbGVuZGVyIC5jb3Vyc2Utc2Vjb25kXG4uY2FsZW5kZXItdmlldzEuY2FsLXZpZXctMiB7XG4gICAgLmFjY29yZGlhbi1oZWFkaW5nIGg0IC5vcGVuLWFjY29yLFxuICAgIC5hY2NvcmRpYW4taGVhZGluZyBoNCAuY2xvc2UtYWNjb3Ige1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgdGQge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAuYWNjb3JkaWFuLWhlYWRpbmcgaDQgLmRhdGUtYyB7XG4gICAgICAgICAgICBjb2xvcjogIzAwNGE3ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5ldy1hY3Rpb24ge1xuICAgICY+ZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgICY+ZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhbC12aWV3LTIge1xuICAgIC5hY3Rpb24tYm94LFxuICAgIC5uZXctYWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgfVxuICAgIC5hY3Rpb24tYm94IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgIH1cbn1cblxuLnJlYWQtbW9yZS12aWV3IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogIzAwNGE3ZTtcbn1cblxuLm5ldy10aWNrLW1hcmsge1xuICAgIGhlaWdodDogNzJweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnRpY2stbWFyazEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbn1cblxuLnRpY2stbWFyay1uZXcge1xuICAgICY+ZGl2IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbn0gLy8gY3JlYXRlIGNsYXNzIC5zY2hlZHVsZS1jbGFzc1xuLmNvdXJzZS1kZXRhaWwtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAuY2QtcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuXG4uc2NoZWR1bGUtY2xhc3MtaW5uZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMTVweCAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgLmZvcm0tY3RybCB7XG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLnMtYy0xIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDE0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICB9XG4gICAgLmNob29zZS1jbGFzcy10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgLmZpZWxkLXJhZGlvLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zZWxlY3QtZGF5cyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jcmVhdGUtY2xhc3Mtc2NoZWR1bGUge1xuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbn1cblxuLnMtZm9ybS1jb250cm9sIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5jYWxlbmRlci1jb3Vyc2UgdWwgbGkge1xuICAgICAgICB3aWR0aDogOCU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTk5cHgpIHtcbiAgICAuY2FsZW5kZXItY291cnNlIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IDYlO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIC5jYWxlbmRlci1jbGFzcy1kZXRhaWwge1xuICAgICAgICAmPmRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAmPmRpdjpsYXN0LWNoaWxkIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAuY29tbW9uLXRhYiB1bCBsaSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5maWx0ZXItZm9yLWNvdXJzZXMge1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5maWx0ZXItc2VhcmNoIHtcbiAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmFkaW8tb3B0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jcmVhdGUtc3RhbmRhcmQtZm9ybSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gICAgLmNyZWF0ZS1jYW5jZWwtc21hbGwgLmJ0biB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIC5zY2hlZHVsZS1jbGFzcy1ib3ggLmZpbHRlci1ib3ggLmZ1bGxCbHVlLmJ0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5zY2hlZHVsZS1jbGFzcyAuc2NoZWR1bGUtY2xhc3MtbGVmdCB7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zY2hlZHVsZS1jbGFzcyAuYnRuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLnZpZXctdGFiIGxpIC5idG4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5jYWxlbmRlci1jb3Vyc2UgdWwgbGkge1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICB3aWR0aDogMTclO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5sZWRnZW5kLWZvb3RlciB7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhbC12aWV3IHtcbiAgICAgICAgLm1pZGRsZS10b3Age1xuICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY291cnNlcy1saXN0LXRhYmxlLFxuICAgIC5jYWxlbmRlci12aWV3MSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhbGVuZGVyLWNvdXJzZSB1bCBsaSBzcGFuLmMtZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB9XG4gICAgLmRhdGUtYXJyb3c6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogNzIlO1xuICAgIH1cbiAgICAuY291cnNlLWRldGFpbC1zZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgJj5kaXYge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgfVxuICAgIC5wb3B1cC1idG4gLmJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgIC5jb21tb24tdGFiIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn0gLy8vLy8vLy8vLy8vLy9QT1BVUCBDU1NTLy8vLy8vLy8vLy8vLy8vLy9cbi8qIHBvcFVwIFNjc3MgKi9cblxuLnBvcHVwV3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbiAgICB6LWluZGV4OiAxMDA7IC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLnBvcHVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2NSU7IC8vIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwNSU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvOyAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxufVxuXG4ucG9wdXAtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMjBweCAyMHB4OyAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggNXB4ICM5YzljOWM7XG4gICAgdHJhbnNpdGlvbjogdW5zZXQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBtYXJnaW46IDI1cHggMCAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLmNsb3NlUG9wdXAge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJi5ib3R0b21SaWdodCB7XG4gICAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAmLnRvcExlZnQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICB9XG4gICAgJi5ib3R0b21MZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAjYzFjMWMxO1xuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5mYWRlSW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Y3NzIGZvciBtb2IgcG9wdXBcbi5wb3B1cFdyYXBwZXJNb2Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyAvLyBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC5jbG9zZVBvcHVwIHtcbiAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICB0b3A6IC0yN3B4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5wb3B1cC1tb2Ige1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNzAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvdHRvbTogLTcwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbn1cblxuLnBvcHVwV3JhcHBlck1vYi5zaG93UG9wdXBNb2Ige1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIC5wb3B1cC1tb2Ige1xuICAgIGJvdHRvbTogMDtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi5leHRyYU1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2lkZS1jaXJjbGVzIHtcbiAgICAvLyBmbG9hdDogcmlnaHQ7XG59XG5cbi5sLWNpcmNsZSB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sLXRleHQge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUsIDMxLCAzNCwgMC4xNTY4NjI3NDUwOTgwMzkyKTtcbn1cblxuLnNpZGUtY2lyY2xlcyBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnAtdGV4dCB7XG4gICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDdweCA3cHg7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi5yYWRpby1vcHRpb25zIHtcbiAgICAuZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgICAgIC5mb3JtLXJhZGlvOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbGVmdDogM3B4O1xuICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi5lZGl0Q2VsbElucHV0IHtcbiAgICAvLyBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzAwODRmNiAhaW1wb3J0YW50O1xufVxuXG4uY2FuY2VsV3JhcGVyIHtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA3cHg7XG4gICAgICAgIGhlaWdodDogN3B4O1xuICAgIH1cbiAgICAudGV4dEJveCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjYgIWltcG9ydGFudDtcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG59XG5cbi5jdXN0b21UYWJsZVdyYXBwZXIge1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5yb3dBbGxpZ25DdXN0b21BZGQge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnRleHRCb3hDb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDg0ZjY7XG59XG5cbi5tYXJnaW5Ub3BCb3R0b20ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNsYXNzLXdyYXBwZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmV4dHJhLXdyYXBwZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmNhbmNlbC13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi50YWJsZVN0eWxpbmcge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59IC8vLy8gVGltZSBwaWNrZXIgY2hhbmdlc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi5mb3JtLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzcpOyAvLyBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIH1cbiAgICAuc2lkZS1mb3JtLWN0cmwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjQxOTYwNzg0MzEzNzI1NDkpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICYuYnNEYXRlcGlja2VyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgICYudGltZXBpY2sge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMXB4IDBweDtcbiAgICAgICAgLnRib3gge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAudGltZXMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaWRlLWZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjQxOTYwNzg0MzEzNzI1NDkpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICYubWlucyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5tZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAudG9waWMtbGlua3tcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLnRvcGljLWxpbmtlZHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgfVxuICAgIC50b3BpYy1saW5rZWQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgIH1cblxufVxuXG4ucG9wdXAtZGF0ZS1zZWxlY3Rpb24ge1xuICAgIC5yb3cge1xuICAgICAgICAvLyBtYXJnaW46IDBweCAycHg7XG4gICAgICAgICYuZGVzYyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBhZGRpbmdGaXZlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4gICAgLnRhYmxlLXNlbGVjdGRhdGUtd3JhcHBlciB7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHggNXB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VmZWZlZjtcbiAgICAgICAgbWF4LWhlaWdodDogMjE1cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlLXdhcnBwZXItY3VzdG9tIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzZjNmM2O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNnB4IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmRhdGVQaWNrZXJCb3g6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIHRhYmxlIHtcbiAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmRhdGVQaWNrZXItYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZURhdGVQaWNrZXJCb3gge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICB3aWR0aDogMjI1cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAmLmJzRGF0ZXBpY2tlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICYuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICYuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpZWxkLXdyYXBwZXIge1xuICAgICYuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gICAgICAgIHRvcDogMzBweDtcbiAgICB9XG59XG5cbi5iYXRjaC1zY2hlZHVsZSB7XG4gICAgdHIge1xuICAgICAgICB0aCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDphZnRlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuZmlsdGVyLVNlY3Rpb24ge1xuICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbiAgICB9XG4gICAgLndlZWtseS1TY2hlZHVsZSB7XG4gICAgICAgIC5idG5Hcm91cCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLXRhYmxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC53ZWVrbHlEaXYge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgIC53ZWVrbHlBZGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2Vla1RhYmxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jdXN0b20tU2NoZWR1bGUge1xuICAgICAgICAuYWRkZXJDdXN0b20ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY3VzdG9tVGFibGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29tbW9uLXNlY3Rpb24ge1xuICAgICAgICAuZGl2RXh0cmFDbGFzcyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgLmFkZGVyLVJvdyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHRyYUNsYXNzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kaXZDYW5jZWxDbGFzcyB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgLmNhbmNlbFRhYmxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ud2FybmluZ05vdGUge1xuICAgIG1hcmdpbjogMTVweCAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZmVmZWY7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDVweCA1cHg7XG59XG5cbi50YWJsZS1zY3JvbGwtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5ibGFjay1iZ3tcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwxMCwxMCwwLjMpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLnRvcGljQm94e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAyMCU7XG4gIHJpZ2h0OiAyMCU7XG4gIHdpZHRoOiA2MCU7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZDogI2Y3ZjVmNTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNsb3NlLWJ0bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHNwYW57XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4uaGVhZGVyLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjcpO1xufVxuLnN1Yi1oZWFkZXJ7XG4gIHdpZHRoOiAzMCU7XG59XG4udG90YWwtdG9waWN7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4udG9waWMtbGlzdGluZy1jb250YWluZXJ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWF4LWhlaWdodDogMjcwcHg7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7IC8qIElmIHlvdSB3YW50IGRvdHMgdW5kZXIgdGhlIGhvdmVyYWJsZSB0ZXh0ICovXG59XG5cbi8qIFRvb2x0aXAgdGV4dCAqL1xuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwIHRleHQgLSBzZWUgZXhhbXBsZXMgYmVsb3chICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogU2hvdyB0aGUgdG9vbHRpcCB0ZXh0IHdoZW4geW91IG1vdXNlIG92ZXIgdGhlIHRvb2x0aXAgY29udGFpbmVyICovXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vLyBUcmVlIFZpZXcgU3R5bGVcbi5rLXRyZWV2aWV3IC5rLWluLmstc3RhdGUtc2VsZWN0ZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzY1NjU2NTtcbn1cbi5rLWNoZWNrYm94OmluZGV0ZXJtaW5hdGUrLmstY2hlY2tib3gtbGFiZWw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NGY2O1xufVxuLmstY2hlY2tib3g6Y2hlY2tlZCsuay1jaGVja2JveC1sYWJlbDo6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6ICMwMDg0ZjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODRmNjtcbn1cbi5rLXRyZWV2aWV3IC5rLWNvbnRlbnQsIC5rLXRyZWV2aWV3Pi5rLWdyb3VwLCAuay10cmVldmlldyAuay1pdGVtPi5rLWdyb3Vwe1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmstY2hlY2tib3g6aW5kZXRlcm1pbmF0ZSsuay1jaGVja2JveC1sYWJlbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg0ZjY7XG59XG4uay1jaGVja2JveDppbmRldGVybWluYXRlKy5rLWNoZWNrYm94LWxhYmVsOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIHRvcDogNHB4O1xuICAgIGxlZnQ6IDRweDtcbn1cblxuXG5cbi8vIFdlZWtseS9jdXN0b20gc2NoZWR1bGVcbi53ZWVrbHktc2NoZWR1bGUtdGFibGUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDBweCAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLnRhYmxlLWhlYWRpbmctY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIC5oZWFkaW5nLWl0ZW17XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGVhZWMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRhYmxlLW91dGVyLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAudGFibGUtdmFsdWUtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAudmFsdWUtaXRlbXtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIFxuICAvLyBGb3IgZHJvcGRvd25cbiAgLnRib3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAudGltZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5zaWRlLWZvcm0tY3RybCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjQxOTYwNzg0MzEzNzI1NDkpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICYubWlucyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5tZXJzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBcbiAgLy8gZm9yIENoZWNrYm94XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICB9XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbiAgfVxuICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDpiZWZvcmUge1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbGVmdDogOHB4O1xuICAgICAgdG9wOiA5cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwODRmNjtcbiAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICBsZWZ0OiAycHg7XG4gICAgICB0b3A6IDVweDtcbiAgfVxuICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsIHtcbiAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICB9XG4udG9waWMtY29udGFpbmVye1xuICAgIG1hcmdpbi1yaWdodDogMCFpbXBvcnRhbnQ7IFxuICAgIG1hcmdpbi1sZWZ0OiAwIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luOiAycHg7XG59XG4uYXJyb3ctaWNvbntcbiAgICBwYWRkaW5nOiAwIDVweDtcbn1cbi5sZXZlbDFUb3BpY3tcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4uc3ViVG9waWNMZXZlbHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLnB0LTR7XG4gICAgcGFkZGluZy10b3A6NHB4IWltcG9ydGFudFxufVxuLnRvcGljLWxibHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc3KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbiAgICA6Om5nLWRlZXAgYnMtZGF0ZXBpY2tlci1jb250YWluZXIge1xuICAgICAgICB0b3A6IC0xMjBweCAhaW1wb3J0YW50O1xuICAgIH0gIl19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-class/class-add/class-add.component.ts":
    /*!******************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-class/class-add/class-add.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ClassAddComponent */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseClassClassAddClassAddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassAddComponent", function () {
        return ClassAddComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../.. */
      "./src/app/index.ts");
      /* harmony import */


      var _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/course-services/class-schedule.service */
      "./src/app/services/course-services/class-schedule.service.ts");
      /* harmony import */


      var _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../services/course-services/topic-listing.service */
      "./src/app/services/course-services/topic-listing.service.ts");

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

      var ClassAddComponent =
      /** @class */
      function () {
        var ClassAddComponent = /*#__PURE__*/function () {
          function ClassAddComponent(router, _http, login, classService, topicService, auth, msgService, cd) {
            _classCallCheck(this, ClassAddComponent);

            this.router = router;
            this._http = _http;
            this.login = login;
            this.classService = classService;
            this.topicService = topicService;
            this.auth = auth;
            this.msgService = msgService;
            this.cd = cd;
            this.checkedKeys = [];
            this.customTable = [];
            this.institute_id = sessionStorage.getItem('institution_id');
            this.courseModelStdList = [];
            this.courseModelSubList = [];
            this.courseModelBatchList = [];
            this.subBranch = [];
            this.masterCourse = [];
            this.teachers = [];
            this.instituteSetting = [];
            this.courseList = [];
            this.subjectListDataSource = [];
            this.fetchedCourseData = [];
            this.teacherListDataSource = [];
            this.customListDataSource = [];
            this.classScheduleArray = [];
            this.selectedDateArray = [];
            this.selctedScheduledClass = [];
            this.weekDaysSelected = [];
            this.weekDays = [];
            this.weekDaysTable = [];
            this.canceLClassTable = [];
            this.extraClassTable = [];
            this.hourArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
            this.minArr = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
            this.meridianArr = ["AM", "PM"];
            this.times = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];
            this.addClassDetails = {
              batch_id: '',
              subject_id: '',
              subject_name: '',
              start_hour: '12 PM',
              start_minute: '00',
              start_meridian: '',
              end_hour: '1 PM',
              end_minute: '00',
              end_meridian: '',
              teacher_id: '',
              teacher_name: '',
              class_desc: '',
              room_no: '',
              custom_class_type: 'Regular',
              duration: ''
            };
            this.customRec = {
              start_hour: '',
              start_minute: '',
              start_meridian: '',
              end_hour: '',
              end_minute: '',
              end_meridian: '',
              radioEndDate: {
                radioEndDateSelection: false,
                radioDate: ''
              },
              radioOn: {
                radioONSelection: false,
                radioOnDate: ''
              },
              radioAfter: {
                radioAfterSelection: false,
                occurenceValue: ''
              }
            };
            this.addDates = {
              selectedDate: '',
              error: ''
            };
            this.timepicker = {
              universalStartTime: {
                hour: '',
                minute: '',
                meridian: ''
              },
              universalEndTime: {
                hour: '',
                minute: '',
                meridian: ''
              }
            };
            this.fetchMasterCourseModule = {
              master_course: "-1",
              requested_date: moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"),
              inst_id: sessionStorage.getItem('institute_id'),
              course_id: "-1",
              selected_day: "-1"
            };
            this.fetchMasterBatchModule = {
              standard_id: "-1",
              subject_id: "-1",
              batch_id: '-1',
              inst_id: sessionStorage.getItem('institute_id'),
              assigned: "N"
            };
            this.custom = {
              date: moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"),
              start_hour: '12 PM',
              start_minute: '00',
              end_hour: '1 PM',
              end_minute: '00',
              desc: '',
              topics_covered: ''
            };
            this.addExtraClass = {
              date: moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"),
              start_hour: '12 PM',
              start_minute: '00',
              end_hour: '1 PM',
              end_minute: '00',
              desc: '',
              topics_covered: ''
            };
            this.mainStartTime = {
              hour: '12 PM',
              minute: '00'
            };
            this.mainEndTime = {
              hour: '1 PM',
              minute: '00'
            };
            this.weeklyCommonStartTime = {
              hour: '12 PM',
              minute: '00'
            };
            this.weeklyCommonEndTime = {
              hour: '1 PM',
              minute: '00'
            };
            this.cancelRowSelected = '';
            this.courseStartDate = '';
            this.courseEndDate = '';
            this.selectedClassFrequency = 'WEEK';
            this.batchFrequency = '1';
            this.showPopUp = false;
            this.showPopUpRecurence = false;
            this.showPopUpCancellation = false;
            this.isProfessional = false;
            this.isClassFormFilled = false;
            this.createCustomSchedule = false;
            this.showCancelWeeklyBtn = false;
            this.showWarningPopup = false;
            this.cancelWeeklySchedulePop = false;
            this.IsTopicSelectedMode = 'add';
            this.subject_name = '';
            this.topicsList = [];
            this.showTopicsModal = false;
            this.totalTopicsList = [];
            this.selectedTopics = ''; //join ids by '|'

            this.selectedTopicsNames = '';
            this.selectedTopicsListObj = []; //checked item list --> batch modal

            this.showCustomEditModal = false;
            this.getSubjectObject = '';
            this.weeklyScheduleCan = {
              date: moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"),
              cancel_note: '',
              is_notified: true
            };
            this.weekDaysList = [];
            this.weekDaysListWithoutWeekend = [];
            this.topicBox = true;
            this.selectAllTopics = false;
            this.addLinkStatus = '';
            this.fullResponse = [];
            this.multiClickDisabled = false;
            this.schoolModel = false;

            if (sessionStorage.getItem('userid') == null) {
              this.router.navigate(['/authPage']);
            }
          }

          _createClass(ClassAddComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.messages = this.msgService.object;
              /* Prerequiste loaded */

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this.isProfessional = true;
                } else {
                  _this.isProfessional = false;
                }
              }); // changes by Nalini - to handle school model conditions

              this.auth.schoolModel.subscribe(function (res) {
                _this.schoolModel = false;

                if (res) {
                  _this.schoolModel = true;
                }
              });
              /* fetching prefilled data */

              this.fetchPrefillData();

              if (!this.isProfessional) {
                this.checkForEditMode();
              } // this.switchActiveView();


              this.checkForCoursePlannerRoute();
              this.getAllWeekDay();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              sessionStorage.setItem('isFromCoursePlanner', String(false));
            }
          }, {
            key: "checkForCoursePlannerRoute",
            value: function checkForCoursePlannerRoute() {
              this.coursePlannerStatus = sessionStorage.getItem('isFromCoursePlanner');
            }
          }, {
            key: "checkNotifyDate",
            value: function checkNotifyDate(data) {
              if (moment__WEBPACK_IMPORTED_MODULE_2__(data.class_date).valueOf() <= moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').valueOf()) {
                return false;
              } else return true;
            }
          }, {
            key: "checkCurrentDate",
            value: function checkCurrentDate(data, class_date) {
              if (data.is_attendance_marked == 'N') {
                if (moment__WEBPACK_IMPORTED_MODULE_2__(class_date).valueOf() <= moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).valueOf()) {
                  return false;
                } else return true;
              } else {
                if (moment__WEBPACK_IMPORTED_MODULE_2__(class_date).valueOf() <= moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).valueOf()) {
                  return false;
                } else return true;
              }
            } // For Weekly class schedule
            // All day of the week

          }, {
            key: "getAllWeekDay",
            value: function getAllWeekDay() {
              var _this2 = this;

              this.auth.showLoader();
              this.classService.getDayofWeekAll().subscribe(function (res) {
                _this2.auth.hideLoader();

                _this2.weekDaysList = res;
                console.log(_this2.weekDaysList);

                for (var i = 0; i < res.length; i++) {
                  if (!res[i].is_weekend) {
                    _this2.weekDaysListWithoutWeekend.push(res[i]);
                  }
                }
              }, function (err) {
                _this2.auth.hideLoader();

                console.log(err);
              });
            } // Apply start time and end time for all week days

          }, {
            key: "applyTimeForAll",
            value: function applyTimeForAll() {
              var _this3 = this;

              var startTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.weeklyCommonStartTime.hour, this.weeklyCommonStartTime.minute, 'comp'), 'h:mma');
              var endTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.weeklyCommonEndTime.hour, this.weeklyCommonEndTime.minute, 'comp'), 'h:mma');

              if (!startTime.isBefore(endTime)) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
                return;
              } else {
                this.weekDaysList.forEach(function (element) {
                  element.start_time = _this3.getNewTimeFormatJson(_this3.weeklyCommonStartTime.hour.split(' ')[0] + ':' + _this3.weeklyCommonStartTime.minute + ' ' + _this3.weeklyCommonStartTime.hour.split(' ')[1]);
                  element.end_time = _this3.getNewTimeFormatJson(_this3.weeklyCommonEndTime.hour.split(' ')[0] + ':' + _this3.weeklyCommonEndTime.minute + ' ' + _this3.weeklyCommonEndTime.hour.split(' ')[1]);
                });
              }
            }
          }, {
            key: "handleChecking",
            value: function handleChecking(itemLookup) {
              var subTopic = itemLookup.item.dataItem.subTopic;
              var arrayIndex = this.checkedKeys.indexOf(itemLookup.item.dataItem.topicId);

              if (arrayIndex > -1) {
                // this.checkedKeys.splice(arrayIndex, 1);
                var _subTopic = itemLookup.item.dataItem.subTopic;
                _subTopic.length ? this.removeNLevelTopic(_subTopic) : '';
              } else {
                // this.checkedKeys.push(itemLookup.item.dataItem.topicId);
                if (subTopic.length) this.AddNLevelTopic(subTopic);
              }

              this.cd.markForCheck();
            }
          }, {
            key: "removeNLevelTopic",
            value: function removeNLevelTopic(subTopics) {
              var _this4 = this;

              if (subTopics.length == 0) {
                var arrayIndex = this.checkedKeys.indexOf(subTopics.topicId);
                this.checkedKeys.splice(arrayIndex, 1);
                return;
              } else {
                subTopics.forEach(function (object) {
                  var arrayIndex = _this4.checkedKeys.indexOf(object.topicId);

                  if (arrayIndex > -1) {
                    _this4.checkedKeys.splice(arrayIndex, 1);
                  }

                  if (object.subTopic.length) {
                    _this4.removeNLevelTopic(object.subTopic);
                  }
                });
              }

              this.cd.markForCheck();
            }
          }, {
            key: "AddNLevelTopic",
            value: function AddNLevelTopic(subTopics) {
              var _this5 = this;

              if (subTopics.length == 0) {
                this.checkedKeys.push(subTopics.topicId);
                return;
              } else {
                subTopics.forEach(function (object) {
                  var arrayIndex = _this5.checkedKeys.indexOf(object.topicId);

                  if (arrayIndex == -1) {
                    _this5.checkedKeys.push(object.topicId);
                  }

                  if (object.subTopic.length) {
                    _this5.AddNLevelTopic(object.subTopic);
                  }
                });
              }
            }
          }, {
            key: "checkForEditMode",
            value: function checkForEditMode() {
              var _this6 = this;

              var str = sessionStorage.getItem('editClass');

              if (str == "" || str == null || str == undefined) {
                return;
              }

              var data = JSON.parse(str);

              if (data == "" || data == null || data == undefined) {
                return false;
              } else {
                this.fetchMasterCourseModule = {
                  master_course: data.master_course,
                  requested_date: moment__WEBPACK_IMPORTED_MODULE_2__(data.date).format("YYYY-MM-DD"),
                  inst_id: sessionStorage.getItem('institute_id'),
                  course_id: data.course_id
                };
                this.getCustomList();
                this.getTeacherList();
                this.updateCourseList(this.fetchMasterCourseModule.master_course);
                setTimeout(function () {
                  _this6.getAllSubjectListFromServer(_this6.fetchMasterCourseModule);
                }, 300);
                sessionStorage.setItem('editClass', '');
              }
            }
          }, {
            key: "fetchPrefillData",
            value: function fetchPrefillData() {
              var _this7 = this;

              this.auth.showLoader();
              /* Batch Model */

              if (this.isProfessional) {
                this.classService.getStandardSubjectList(this.fetchMasterBatchModule.standard_id, this.fetchMasterBatchModule.subject_id, this.fetchMasterBatchModule.assigned).subscribe(function (res) {
                  _this7.courseModelBatch = res;

                  if (_this7.fetchMasterBatchModule.standard_id == '-1' && _this7.fetchMasterBatchModule.subject_id == '-1') {
                    _this7.courseModelStdList = res.standardLi;
                    _this7.courseModelBatchList = res.batchLi;
                    _this7.courseModelSubList = [];
                  } else if (_this7.fetchMasterBatchModule.standard_id != '-1' && _this7.fetchMasterBatchModule.subject_id == '-1') {
                    _this7.courseModelBatchList = res.batchLi;
                    _this7.courseModelSubList = res.subjectLi;
                  } else if (_this7.fetchMasterBatchModule.standard_id != '-1' && _this7.fetchMasterBatchModule.subject_id != '-1') {
                    _this7.courseModelStdList = res.standardLi;
                    _this7.courseModelBatchList = res.batchLi;
                  }
                });
                this.getWeekOfDaysFromServer();
              }
              /* Course Model */
              else {
                  /* Get in class schedule || course planner || Time Table */
                  this.classService.getAllSubBranches().subscribe(function (res) {
                    _this7.subBranch = res;
                  }, function (err) {});
                  /* Get in class schedule || course planner || Time Table*/
                  // this.classService.getAllMasterCourse().subscribe(
                  //   res => {
                  //     this.masterCourse = res;
                  //   },
                  //   err => { }
                  // );

                  this.getMasterCourseKey();
                  /* Get in class schedule || Time Table*/

                  this.classService.getAllTeachers().subscribe(function (res) {
                    _this7.teachers = res;
                  }, function (err) {});
                }

              return this.classService.getInstituteSettings().subscribe(function (res) {
                _this7.auth.hideLoader();

                _this7.instituteSetting = res;
              }, function (err) {});
            }
          }, {
            key: "getMasterCourseKey",
            value: function getMasterCourseKey() {
              var _this8 = this;

              var url = "/api/v1/courseMaster/master-course-list/" + sessionStorage.getItem('institute_id') + '?is_active_not_expire=Y&sorted_by=course_name';
              var keys;
              this.auth.showLoader();

              this._http.getData(url).subscribe(function (data) {
                _this8.auth.hideLoader();

                _this8.fullResponse = data.result;
                keys = Object.keys(data.result);
                console.log("keys", keys);

                for (var i = 0; i < keys.length; i++) {
                  _this8.masterCourse.push(keys[i]);
                }

                if (!_this8.isProfessional) {
                  _this8.checkForEditMode();
                }
              }, function (error) {
                _this8.auth.hideLoader();

                console.log(error);
              });
            }
          }, {
            key: "updateCourseList",
            value: function updateCourseList(ev) {
              this.courseList = [];
              this.isClassFormFilled = false;
              var temp = this.fullResponse[this.fetchMasterCourseModule.master_course];

              for (var i = 0; i < temp.length; i++) {
                this.courseList.push(temp[i]);
              }
            }
          }, {
            key: "submitMasterCourse",
            value: function submitMasterCourse() {
              if (this.fetchMasterCourseModule.master_course == '-1' || this.fetchMasterCourseModule.course_id == '-1' || this.fetchMasterCourseModule.requested_date == '' || this.fetchMasterCourseModule.requested_date == 'Invalid date' || this.fetchMasterCourseModule.requested_date == null || this.schoolModel && this.fetchMasterCourseModule.selected_day == '-1') {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter all mandatory details');
                return;
              } else {
                if (this.schoolModel) {
                  this.fetchMasterCourseModule.requested_date = moment__WEBPACK_IMPORTED_MODULE_2__().day(this.fetchMasterCourseModule.selected_day).format('YYYY-MM-DD');
                }

                var requested_date = this.fetchMasterCourseModule.requested_date;

                if (moment__WEBPACK_IMPORTED_MODULE_2__(this.courseStartDate).format("YYYY-MM-DD") <= moment__WEBPACK_IMPORTED_MODULE_2__(requested_date).format("YYYY-MM-DD") && moment__WEBPACK_IMPORTED_MODULE_2__(requested_date).format("YYYY-MM-DD") <= moment__WEBPACK_IMPORTED_MODULE_2__(this.courseEndDate).format("YYYY-MM-DD")) {
                  this.fetchMasterCourseModule.requested_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.fetchMasterCourseModule.requested_date).format("YYYY-MM-DD");
                  this.isClassFormFilled = true;
                  this.getAllSubjectListFromServer(this.fetchMasterCourseModule);
                  this.getCustomList();
                  this.getTeacherList();
                } else {
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please provides date in between course start and end date');
                  return;
                }
              }
            }
          }, {
            key: "updateSubjectList",
            value: function updateSubjectList(ev) {
              var _this9 = this;

              this.auth.showLoader();
              this.isClassFormFilled = false;
              this.fetchMasterBatchModule.subject_id = '-1';
              this.classService.getStandardSubjectList(ev, this.fetchMasterBatchModule.subject_id, this.fetchMasterBatchModule.assigned).subscribe(function (res) {
                _this9.auth.hideLoader();

                _this9.courseModelBatch = res;

                if (ev == '-1') {
                  if (_this9.fetchMasterBatchModule.subject_id == "-1") {
                    _this9.courseModelStdList = res.standardLi;
                    _this9.courseModelBatchList = res.batchLi;
                    _this9.fetchMasterBatchModule.batch_id = "-1";
                    _this9.fetchMasterBatchModule.subject_id = "-1";
                    _this9.courseModelSubList = [];
                  } else {
                    _this9.courseModelBatchList = res.batchLi;
                    _this9.fetchMasterBatchModule.batch_id = "-1";
                    _this9.fetchMasterBatchModule.subject_id = "-1";
                    _this9.courseModelSubList = [];
                  }
                } else if (ev != '-1') {
                  if (_this9.fetchMasterBatchModule.subject_id == '-1') {
                    _this9.fetchMasterBatchModule.batch_id = "-1";
                    _this9.fetchMasterBatchModule.subject_id = "-1";
                    _this9.courseModelBatchList = res.batchLi;
                    _this9.courseModelSubList = res.subjectLi;
                  } else if (_this9.fetchMasterBatchModule.subject_id != '-1') {
                    _this9.fetchMasterBatchModule.batch_id = "-1";
                    _this9.fetchMasterBatchModule.subject_id = "-1";
                    _this9.courseModelBatchList = res.batchLi;
                    _this9.courseModelSubList = res.subjectLi;
                  }
                }
              });
            }
          }, {
            key: "submitMasterBatch",
            value: function submitMasterBatch() {
              /* standard selected */
              if (this.fetchMasterBatchModule.standard_id != '-1' && this.fetchMasterBatchModule.standard_id != -1 && this.fetchMasterBatchModule.standard_id != undefined) {
                /* subject selected  */
                if (this.fetchMasterBatchModule.subject_id != '-1' && this.fetchMasterBatchModule.subject_id != undefined) {
                  /* batch selected */

                  /* Success */

                  /*  */
                  if (this.fetchMasterBatchModule.batch_id != '-1' && this.fetchMasterBatchModule.batch_id != undefined) {
                    this.batchDetected(this.fetchMasterBatchModule.batch_id);
                  }
                  /* batch not selected */

                  /* Error */

                  /*  */
                  else if (this.fetchMasterBatchModule.batch_id == '-1' || this.fetchMasterBatchModule.batch_id == undefined) {
                      this.msgService.showErrorMessage(this.msgService.toastTypes.error, this.messages.batchMsg.notSelect, '');
                    }
                }
                /* subject not selected */
                else if (this.fetchMasterBatchModule.subject_id == '-1' || this.fetchMasterBatchModule.subject_id == undefined) {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, this.messages.batchMsg.inValid, '');
                  }
              }
              /* standard not selected */
              else if (this.fetchMasterBatchModule.standard_id == '-1' || this.fetchMasterBatchModule.standard_id == undefined) {
                  /* subject selected  */
                  if (this.fetchMasterBatchModule.subject_id != '-1' && this.fetchMasterBatchModule.subject_id != undefined) {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, this.messages.batchMsg.notStandard, '');
                  }
                  /* subject not selected  */
                  else if (this.fetchMasterBatchModule.subject_id == '-1' || this.fetchMasterBatchModule.subject_id == undefined) {
                      /* batch selected */

                      /* Success */

                      /*  */
                      if (this.fetchMasterBatchModule.batch_id != '-1' && this.fetchMasterBatchModule.batch_id != undefined) {
                        this.batchDetected(this.fetchMasterBatchModule.batch_id);
                      }
                      /* batch not selected */

                      /* Error */

                      /*  */
                      else if (this.fetchMasterBatchModule.batch_id == '-1' || this.fetchMasterBatchModule.batch_id == undefined) {
                          this.msgService.showErrorMessage(this.msgService.toastTypes.error, this.messages.batchMsg.selectAll, '');
                        }
                    }
                }
            }
          }, {
            key: "filterSubjectBatches",
            value: function filterSubjectBatches(ev) {
              var _this10 = this;

              console.log(ev);
              this.auth.showLoader();
              this.classService.getStandardSubjectList(this.fetchMasterBatchModule.standard_id, ev, this.fetchMasterBatchModule.assigned).subscribe(function (res) {
                _this10.auth.hideLoader();

                _this10.courseModelBatch = res;

                if (_this10.fetchMasterBatchModule.standard_id == '-1' && _this10.fetchMasterBatchModule.subject_id == '-1') {
                  _this10.courseModelStdList = res.standardLi;
                  _this10.courseModelBatchList = res.batchLi;
                  _this10.courseModelSubList = [];
                } else if (_this10.fetchMasterBatchModule.standard_id != '-1' && _this10.fetchMasterBatchModule.subject_id == '-1') {
                  _this10.courseModelBatchList = res.batchLi;
                  _this10.courseModelSubList = res.subjectLi;
                } else if (_this10.fetchMasterBatchModule.standard_id != '-1' && _this10.fetchMasterBatchModule.subject_id != '-1') {
                  _this10.courseModelBatchList = res.batchLi;
                } else {}

                _this10.getSubjectName(ev);
              }, function (err) {});
            }
          }, {
            key: "getSubjectName",
            value: function getSubjectName(ev) {
              this.selectedSubjectInBatch = '';
              this.selectedSubjectInBatch = this.courseModelSubList.find(function (elem) {
                return elem.subject_id == ev;
              }).subject_name;
            }
          }, {
            key: "batchUpdated",
            value: function batchUpdated(ev) {
              this.isClassFormFilled = false;
              /* standard not selected */

              if (this.fetchMasterBatchModule.standard_id == '-1' || this.fetchMasterBatchModule.standard_id == undefined || this.fetchMasterBatchModule.standard_id == null) {
                /* subject not selected */
                if (this.fetchMasterBatchModule.subject_id == '-1' || this.fetchMasterBatchModule.subject_id == undefined || this.fetchMasterBatchModule.subject_id == null) {
                  /* batch not selected */
                  if (this.fetchMasterBatchModule.batch_id == '-1' || this.fetchMasterBatchModule.batch_id == undefined || this.fetchMasterBatchModule.batch_id == null) {}
                  /* batch selected */
                  else {}
                }
              }
              /* standard selected */
              else {
                  /* subject not selected */
                  if (this.fetchMasterBatchModule.subject_id == '-1' || this.fetchMasterBatchModule.subject_id == undefined || this.fetchMasterBatchModule.subject_id == null) {
                    /* batch not selected */
                    if (this.fetchMasterBatchModule.batch_id == '-1' || this.fetchMasterBatchModule.batch_id == undefined || this.fetchMasterBatchModule.batch_id == null) {}
                    /* batch selected */
                    else {}
                  }
                  /* subject selected */
                  else {
                      /* batch not selected */
                      if (this.fetchMasterBatchModule.batch_id == '-1' || this.fetchMasterBatchModule.batch_id == undefined || this.fetchMasterBatchModule.batch_id == null) {}
                      /* batch selected */
                      else {}
                    }
                }
            }
          }, {
            key: "getMasterCourse",
            value: function getMasterCourse() {
              var _this11 = this;

              if (this.isProfessional) {
                /* Only Batch selected */
                if (this.fetchMasterBatchModule.standard_id == '-1' || this.fetchMasterBatchModule.standard_id == undefined) {
                  var temp;
                  this.courseModelBatchList.forEach(function (e) {
                    if (e.batch_id == _this11.fetchMasterBatchModule.batch_id) {
                      temp = e.batch_name;
                    }
                  });
                  return temp;
                }
                /* Both std subject and batch selected */
                else {
                    var _temp;

                    this.courseModelStdList.forEach(function (e) {
                      if (e.standard_id == _this11.fetchMasterBatchModule.standard_id) {
                        _temp = e.standard_name;
                      }
                    });
                    return _temp;
                  }
              } else {
                var _temp2;

                this.masterCourse.forEach(function (e) {
                  if (e.master_course == _this11.fetchMasterCourseModule.master_course) {
                    _temp2 = e.master_course;
                  }
                });
                return _temp2;
              }
            }
          }, {
            key: "getCourseName",
            value: function getCourseName() {
              var _this12 = this;

              if (this.isProfessional) {
                var temp = '';
                this.courseModelSubList.forEach(function (e) {
                  if (e.subject_id == _this12.fetchMasterBatchModule.subject_id) {
                    temp = e.subject_name;
                  }
                });
                return temp;
              } else {
                var _temp3 = '';
                this.courseList.forEach(function (e) {
                  if (e.course_id == _this12.fetchMasterCourseModule.course_id) {
                    _temp3 = e.course_name;
                  }
                });
                return _temp3;
              }
            }
          }, {
            key: "batchDetected",
            value: function batchDetected(id) {
              var _this13 = this;

              this.auth.showLoader();
              this.classService.getBatchDetailsById(id).subscribe(function (res) {
                _this13.auth.hideLoader();

                _this13.isClassFormFilled = true;
                _this13.batchDetails = _this13.keepCloning(res);

                _this13.calculateFieldForTables(res);
              }, function (err) {
                //console.log(err);
                _this13.msgService.showErrorMessage(_this13.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "updateClassFrequency",
            value: function updateClassFrequency(ev) {
              if (ev == "OTHER") {
                this.createCustomSchedule = true;
              } else {
                this.createCustomSchedule = false;
              }
            }
          }, {
            key: "getAllSubjectListFromServer",
            value: function getAllSubjectListFromServer(data) {
              var _this14 = this;

              this.isClassFormFilled = true;
              this.auth.showLoader();
              this.fetchMasterCourseModule.requested_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.fetchMasterCourseModule.requested_date).format('YYYY-MM-DD');
              var selected_day = this.fetchMasterCourseModule.selected_day;
              delete this.fetchMasterCourseModule.selected_day;
              this.classService.getAllSubjectlist(this.fetchMasterCourseModule).subscribe(function (res) {
                _this14.fetchedCourseData = res;
                _this14.fetchMasterCourseModule.selected_day = selected_day;
                _this14.schoolModel ? _this14.getClassesDataForSchoolModel() : ''; // this.fetchMasterCourseModule.requested_date = moment(res.requested_data).format("YYYY-MM-DD");

                _this14.auth.hideLoader();

                _this14.subjectListDataSource = _this14.getSubjectList(res);
                _this14.classScheduleArray = _this14.constructJSONForTable(res);
              }, function (err) {
                //console.log(err);
                _this14.auth.hideLoader();

                _this14.fetchMasterCourseModule.selected_day = selected_day;
                _this14.schoolModel ? _this14.getClassesDataForSchoolModel() : '';

                _this14.msgService.showErrorMessage(_this14.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "getClassesDataForSchoolModel",
            value: function getClassesDataForSchoolModel() {
              var _this15 = this;

              console.log(this.fetchMasterCourseModule);
              var obj = {
                institute_id: this.fetchMasterCourseModule.inst_id,
                master_course_name: this.fetchMasterCourseModule.master_course,
                course_id: this.fetchMasterCourseModule.course_id,
                from_date: moment__WEBPACK_IMPORTED_MODULE_2__().day(this.fetchMasterCourseModule.selected_day).format('YYYY-MM-DD'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_2__().day(this.fetchMasterCourseModule.selected_day).format('YYYY-MM-DD'),
                isCompleted: "N",
                isPending: 'Y',
                isCancelled: 'N',
                isUpcoming: 'N',
                isMarksUpdate: 'N',
                "standard_id": "-1",
                "subject_id": "-1"
              };
              console.log(obj);
              this.auth.showLoader();

              this._http.postData('/api/v1/coursePlanner/category?type=class', obj).subscribe(function (res) {
                _this15.auth.hideLoader();

                console.log(res);
                _this15.classScheduleArray = res;
              }, function (err) {
                _this15.auth.hideLoader();

                console.log(err);
              }); // this.getSubjectListForSchoolModel();


              console.log(this.subjectListDataSource);
            } // getSubjectListForSchoolModel() {
            // this.auth.showLoader();
            // this.classService.getSubjectList(this.fetchMasterCourseModule.course_id).subscribe(
            //   (res: any) => {
            //     this.auth.hideLoader();
            //     this.subjectListDataSource = res.batchesList;
            //     console.log('Subject', this.subjectListDataSource);
            //   },
            //   err => {
            //     this.msgService.showErrorMessage('error', '', err.error.message);
            //     this.auth.hideLoader();
            //     //console.log(err);
            //   }
            // )
            // }

          }, {
            key: "constructJSONForTable",
            value: function constructJSONForTable(data) {
              var courseScheduleList = [];
              var batchesList = [];
              var arr = [];
              batchesList = data.coursesList[0].batchesList;

              if (data.coursesList[0].courseClassSchdList != null) {
                courseScheduleList = data.coursesList[0].courseClassSchdList;

                for (var i = 0; i < courseScheduleList.length; i++) {
                  for (var j = 0; j < batchesList.length; j++) {
                    if (courseScheduleList[i].batch_id == batchesList[j].batch_id) {
                      var obj = {};
                      obj.class_schedule_id = courseScheduleList[i].class_schedule_id;
                      obj.custom_class_type = courseScheduleList[i].custom_class_type;
                      obj.start_time = courseScheduleList[i].start_time;
                      obj.end_time = courseScheduleList[i].end_time;
                      obj.duration = courseScheduleList[i].duration;
                      obj.subject_name = courseScheduleList[i].subject_name;
                      obj.subject_id = courseScheduleList[i].subject_id;
                      obj.teacher_id = courseScheduleList[i].alloted_teacher_id;
                      obj.batch_id = courseScheduleList[i].batch_id;
                      obj.class_desc = courseScheduleList[i].class_desc;
                      obj.room_no = courseScheduleList[i].room_no;
                      obj.course_id = data.coursesList[0].course_id;
                      obj.start_date = moment__WEBPACK_IMPORTED_MODULE_2__(data.coursesList[0].start_date).format('YYYY-MM-DD');
                      obj.end_date = moment__WEBPACK_IMPORTED_MODULE_2__(data.coursesList[0].end_date).format('YYYY-MM-DD');
                      obj.is_attendance_marked = courseScheduleList[i].is_attendance_marked;
                      obj.topics_covered = courseScheduleList[i].topics_covered;
                      arr.push(obj);
                    }
                  }
                }
              }

              return arr;
            }
          }, {
            key: "getClassSchedule",
            value: function getClassSchedule(data) {
              var obj = [];

              if (data.courseClassSchdList != null) {
                obj = data.courseClassSchdList;
              }

              return obj;
            }
          }, {
            key: "getCustomList",
            value: function getCustomList() {
              var _this16 = this;

              this.auth.showLoader();
              this.classService.getCustomClassListFromServer().subscribe(function (res) {
                _this16.auth.hideLoader();

                _this16.customListDataSource = res;
              }, function (err) {
                //console.log(err);
                _this16.auth.hideLoader();

                _this16.msgService.showErrorMessage(_this16.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "getTeacherList",
            value: function getTeacherList() {
              var _this17 = this;

              this.auth.showLoader();
              this.classService.getAllActiveTeachersList().subscribe(function (res) {
                _this17.auth.hideLoader();

                _this17.teacherListDataSource = res.result;
              }, function (err) {
                //console.log(err);
                _this17.auth.hideLoader();

                _this17.msgService.showErrorMessage(_this17.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "clearClassScheduleForm",
            value: function clearClassScheduleForm() {
              this.addClassDetails = {
                batch_id: '',
                subject_id: '',
                subject_name: '',
                start_hour: '12 PM',
                start_minute: '00',
                start_meridian: '',
                end_hour: '1 PM',
                end_minute: '00',
                end_meridian: '',
                teacher_id: '',
                teacher_name: '',
                class_desc: '',
                room_no: '',
                custom_class_type: 'Regular',
                duration: ''
              };
              this.checkedKeys = [];
              this.selectAllTopics = false; // this.topicsData = "";
            }
          }, {
            key: "onSubjectSelection",
            value: function onSubjectSelection(event) {
              var _this18 = this;

              this.subjectListDataSource.forEach(function (ele) {
                if (ele.subject_id == event) {
                  _this18.addClassDetails.teacher_id = ele.teacher_id;
                  return;
                }
              });
            }
          }, {
            key: "topicListing",
            value: function topicListing() {
              var _this19 = this;

              if (this.addClassDetails.subject_id == '' || this.addClassDetails.subject_id == null || this.addClassDetails.subject_id == '-1') {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please Select Subject');
                return;
              } else {
                if (!this.auth.isRippleLoad.getValue()) {
                  this.auth.showLoader();
                  this.topicService.getAllTopicsSubTopics(this.addClassDetails.subject_id).subscribe(function (res) {
                    var temp;
                    temp = res;

                    if (temp != null && temp.length != 0) {
                      _this19.topicBox = false;
                      console.log(res);

                      _this19.auth.hideLoader();

                      _this19.topicsData = res;
                      var subjectName = "";

                      _this19.subjectListDataSource.forEach(function (ele) {
                        if (ele.subject_id == _this19.addClassDetails.subject_id) {
                          subjectName = ele.subject_name;
                        }
                      });

                      document.getElementById("topicSubName").innerHTML = subjectName;

                      _this19.children = function (dataItem) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(dataItem.subTopic);
                      };

                      _this19.hasChildren = function (item) {
                        return item.subTopic && item.subTopic.length > 0;
                      };
                    } else {
                      _this19.auth.hideLoader();

                      _this19.msgService.showErrorMessage(_this19.msgService.toastTypes.info, 'Info', "No topics available to Link");
                    }
                  }, function (err) {
                    _this19.auth.hideLoader();

                    _this19.msgService.showErrorMessage(_this19.msgService.toastTypes.error, '', err.error.message);
                  });
                }
              }
            }
          }, {
            key: "fetchTopics",
            value: function fetchTopics() {
              var _this20 = this;

              this.auth.showLoader();
              this.totalTopicsList = [];
              this.topicService.getAllTopicsSubTopics(this.fetchMasterBatchModule.subject_id).subscribe(function (resp) {
                _this20.topicsList = [];
                _this20.topicsList = resp;

                if (_this20.topicsList.length && _this20.topicsList != null) {
                  _this20.showTopicsModal = true;

                  _this20.auth.hideLoader();

                  _this20.topicsList.forEach(function (tpc) {
                    _this20.totalTopicsList.push(tpc);

                    tpc.checked = false;

                    if (tpc.subTopic.length) {
                      _this20.getAllTopics(tpc.subTopic);
                    }
                  });
                } else {
                  _this20.auth.hideLoader();

                  _this20.msgService.showErrorMessage(_this20.msgService.toastTypes.info, 'Info', "No topics available to Link");
                }
              }, function (err) {
                _this20.auth.hideLoader();

                _this20.msgService.showErrorMessage(_this20.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "getAllTopics",
            value: function getAllTopics(topic) {
              var _this21 = this;

              topic.forEach(function (obj) {
                _this21.totalTopicsList.push(obj);

                obj.checked = false;

                if (obj.subTopic.length) {
                  _this21.getAllTopics(obj.subTopic);
                }
              });
            }
          }, {
            key: "selectTopics",
            value: function selectTopics(topic, event) {
              topic.checked = !topic.checked;

              if (topic.subTopic.length) {
                this.checkAllSubTopics(topic.subTopic, event.target.checked);
              }

              if (!event.target.checked) {
                if (topic.parentTopicId != 0) {
                  this.uncheckParent(topic);
                }
              }

              this.checkParents(topic);
            } //uncheck parent if any of the child is deselected

          }, {
            key: "uncheckParent",
            value: function uncheckParent(topic) {
              var getParentTopic = this.totalTopicsList.find(function (obj) {
                return obj.topicId == topic.parentTopicId;
              });

              if (getParentTopic != undefined) {
                getParentTopic.checked = false;

                if (getParentTopic.parentTopicId != 0) {
                  this.uncheckParent(getParentTopic);
                }
              }
            } //check parent if all subtopics are checked

          }, {
            key: "checkParents",
            value: function checkParents(topic) {
              var checkAll = true;

              if (this.totalTopicsList.find(function (el) {
                return el.topicId == topic.topicId;
              }) != undefined) {
                var parentTopic = this.totalTopicsList.find(function (ele) {
                  return ele.topicId == topic.parentTopicId;
                });

                if (parentTopic != undefined) {
                  if (parentTopic.subTopic.length) {
                    parentTopic.subTopic.forEach(function (subTpc) {
                      if (!subTpc.checked) {
                        checkAll = false;
                      }
                    });

                    if (checkAll) {
                      parentTopic.checked = true;

                      if (parentTopic.parentTopicId != 0) {
                        this.checkParents(parentTopic);
                      }
                    }
                  }
                }
              }
            }
          }, {
            key: "fetchSelectedTopics",
            value: function fetchSelectedTopics() {
              var _this22 = this;

              this.auth.showLoader();
              this.showTopicsModal = true;
              this.selectedTopicsListObj.forEach(function (obj) {
                var getTopicObject = _this22.totalTopicsList.find(function (ele) {
                  return ele.topicId == obj.topicId;
                });

                getTopicObject.checked = true;
              });
              this.auth.hideLoader();
            }
          }, {
            key: "saveSelectedTopics",
            value: function saveSelectedTopics() {
              /* if(this.totalTopicsList.filter(el => el.checked == true).length == 0){
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No topics selected");
              }
              else { */
              this.auth.showLoader();
              this.selectedTopicsListObj = [];
              this.selectedTopicsListObj = this.totalTopicsList.filter(function (obj) {
                return obj.checked == true;
              });

              if (this.selectedTopicsListObj != undefined) {
                this.selectedTopics = this.selectedTopicsListObj.map(function (obj) {
                  return obj.topicId;
                });
                this.selectedTopics = this.selectedTopics.join('|');
                this.selectedTopicsNames = this.selectedTopicsListObj.map(function (obj) {
                  return obj.topicName;
                });
                this.selectedTopicsNames = this.selectedTopicsNames.join(',');
              }

              this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', "Topics linked successfully!");
              this.auth.hideLoader();
              this.showTopicsModal = false; // }
            } // check/uncheck all subtopics if parent is checked/unchecked

          }, {
            key: "checkAllSubTopics",
            value: function checkAllSubTopics(topic, param) {
              var _this23 = this;

              topic.forEach(function (obj) {
                if (param) {
                  obj.checked = true;
                } else {
                  obj.checked = false;
                }

                if (obj.subTopic.length) {
                  _this23.checkAllSubTopics(obj.subTopic, param);
                }
              });
            }
          }, {
            key: "closeTopicModal",
            value: function closeTopicModal() {
              this.showTopicsModal = false;
            }
          }, {
            key: "toggleArrow",
            value: function toggleArrow(topic) {
              topic.isExpand = !topic.isExpand;
            }
          }, {
            key: "linkTopics",
            value: function linkTopics() {
              var _this24 = this;

              /* if(this.totalTopicsList.filter(el => el.checked == true).length == 0){
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No topics selected");
              }
              else { */
              this.auth.showLoader();
              var getSelectedTopics = this.totalTopicsList.filter(function (el) {
                return el.checked == true;
              });
              var getTopicIds;

              if (getSelectedTopics != undefined) {
                getTopicIds = getSelectedTopics.map(function (obj) {
                  return obj.topicId;
                });
                getTopicIds = getTopicIds.join('|');
                this.getSubjectObject.topics_covered = getTopicIds;

                if (this.batchFrequency == 2) {
                  this.customTable.find(function (ele) {
                    return ele.schd_id == _this24.getSubjectObject.schd_id;
                  }).topics_covered = getTopicIds;
                } else {
                  this.extraClassTable.find(function (ele) {
                    return ele.schd_id == _this24.getSubjectObject.schd_id;
                  }).topics_covered = getTopicIds;
                }
              }

              this.msgService.showErrorMessage('success', '', "Topics updated successfully");
              this.showTopicsModal = false;
              this.auth.hideLoader(); //}
            }
          }, {
            key: "editTopics",
            value: function editTopics(row) {
              var _this25 = this;

              console.log('inside edit topics:', row);
              this.getSubjectObject = '';
              this.getSubjectObject = row;
              this.auth.showLoader();

              if (row.topics_covered != '' && row.topics_covered != null) {
                var selectedTopicIds = row.topics_covered.split('|');
              }

              var list = [];
              this.topicService.getAllTopicsSubTopics(this.fetchMasterBatchModule.subject_id).subscribe(function (res) {
                _this25.topicsList = [];
                _this25.topicsList = res;

                if (_this25.topicsList != null && _this25.topicsList.length) {
                  _this25.showTopicsModal = true;
                  _this25.showCustomEditModal = true;

                  _this25.auth.hideLoader();

                  _this25.topicsList.forEach(function (obj) {
                    list.push(obj);

                    if (selectedTopicIds != undefined) {
                      if (selectedTopicIds.indexOf(obj.topicId.toString()) > -1) {
                        obj.checked = true;
                      }
                    }

                    if (obj.subTopic.length) {
                      _this25.fetchAllTopics(obj.subTopic, list, selectedTopicIds);
                    }
                  });

                  _this25.totalTopicsList = [];
                  _this25.totalTopicsList = list;
                } else {
                  _this25.auth.hideLoader();

                  _this25.msgService.showErrorMessage(_this25.msgService.toastTypes.error, 'Error', "No topics available to Link");
                }
              }, function (err) {
                _this25.auth.hideLoader();

                _this25.msgService.showErrorMessage(_this25.msgService.toastTypes.error, 'Error', err.error.message);
              });
            }
          }, {
            key: "fetchAllTopics",
            value: function fetchAllTopics(topic, list, idList) {
              var _this26 = this;

              topic.forEach(function (key) {
                if (idList != undefined && idList != null) {
                  if (idList.indexOf(key.topicId.toString()) > -1) {
                    key.checked = true;
                  }
                }

                list.push(key);

                if (key.subTopic.length) {
                  _this26.fetchAllTopics(key.subTopic, list, idList);
                }
              });
            }
          }, {
            key: "topicListingForAlreadyLinkedTopics",
            value: function topicListingForAlreadyLinkedTopics(row, subject_id, preSelectedTopics) {
              var _this27 = this;

              this.addLinkStatus = '';
              this.selectedSubId = subject_id;
              this.selectedRow = row;
              this.topicsData = [];

              if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.topicService.getAllTopicsSubTopics(subject_id).subscribe(function (res) {
                  var temp;
                  temp = res;

                  if (temp != null && temp.length != 0) {
                    _this27.checkedKeys = [];
                    _this27.topicBox = false;
                    console.log(res);

                    _this27.auth.hideLoader();

                    _this27.topicsData = res;

                    var array = _this27.selectedRow.topics_covered.split("|"); //add selected array data


                    array.forEach(function (value) {
                      if (value != " " || value != "0") {
                        _this27.checkedKeys.push(Number(value));
                      }
                    });
                    _this27.subject_name = _this27.selectedRow.subject_name;

                    _this27.children = function (dataItem) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(dataItem.subTopic);
                    };

                    _this27.hasChildren = function (item) {
                      return item.subTopic && item.subTopic.length > 0;
                    };
                  } else {
                    _this27.auth.hideLoader();

                    _this27.msgService.showErrorMessage(_this27.msgService.toastTypes.error, '', "No topics available to Link");
                  }
                }, function (err) {
                  _this27.auth.hideLoader();

                  _this27.msgService.showErrorMessage(_this27.msgService.toastTypes.error, '', err.error.message);
                });
              }
            }
          }, {
            key: "checkAllTopics",
            value: function checkAllTopics() {
              var _this28 = this;

              if (this.selectAllTopics) {
                this.checkedKeys = [];
                this.topicsData.forEach(function (ele) {
                  _this28.checkedKeys.push(ele.topicId);
                }); // this.topicsData.forEach(function(entry){
                // console.log(entry.topicName)
                // } );
                //
                // const iterate = (obj) => {
                //     Object.keys(obj).forEach(key => {
                //
                //     console.log(`key: ${key}, value: ${obj[key]}`)
                //
                //     if (typeof obj[key] === 'object') {
                //             iterate(obj[key])
                //         }
                //     })
                // }
              } else {
                this.checkedKeys = [];
              }
            }
          }, {
            key: "saveTopic",
            value: function saveTopic() {
              var _this29 = this;

              if (this.selectedSubId != null && this.selectedSubId != undefined && this.selectedSubId != "") {
                var temp = this.checkedKeys;
                this.selectedRow.topics_covered = temp.join("|");
                var topicsName = [];
                this.checkedKeys.forEach(function (ele) {
                  _this29.topicsData.forEach(function (e) {
                    if (ele == e) topicsName.push(e.topicName);
                  });
                });
                this.checkedKeys = [];
                this.selectedSubId = "";
                this.selectedRow = "";
              } else {
                if (this.checkedKeys.length > 0) {
                  this.addLinkStatus = 'linked';
                } else {
                  this.addLinkStatus = '';
                }
              }

              this.topicBox = true;
            }
          }, {
            key: "closeAlert",
            value: function closeAlert() {
              this.checkedKeys = [];
              this.topicBox = true;
              this.selectedSubId = "";
            }
          }, {
            key: "addClassSchedule",
            value: function addClassSchedule() {
              var _this30 = this;

              this.addLinkStatus = '';
              var obj = {};

              if (this.addClassDetails.subject_id == '' || this.addClassDetails.subject_id == null || this.addClassDetails.subject_id == '-1') {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please Select Subject');
                return;
              } else {
                obj.subject_id = this.addClassDetails.subject_id;
              }

              obj.class_schedule_id = 0;

              if (this.addClassDetails.custom_class_type == "" || this.addClassDetails.custom_class_type == null) {
                obj.custom_class_type = "Regular";
              } else {
                obj.custom_class_type = this.addClassDetails.custom_class_type;
              }

              this.timeChanges(this.addClassDetails.start_hour, "addClassDetails.start_hour");
              this.timeChanges(this.addClassDetails.end_hour, "addClassDetails.end_hour");

              if (this.addClassDetails.start_hour == "" && this.addClassDetails.start_minute == "") {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time');
                return;
              }

              if (this.addClassDetails.end_hour == "" && this.addClassDetails.end_minute == "") {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct end time');
                return;
              }

              var startTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.addClassDetails.start_hour + ':' + this.addClassDetails.start_minute + this.addClassDetails.start_meridian, 'h:mma');
              var endTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.addClassDetails.end_hour + ':' + this.addClassDetails.end_minute + this.addClassDetails.end_meridian, 'h:mma');

              if (!startTime.isBefore(endTime)) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
                this.convertTimeToBindableFormat();
                return;
              } else {
                obj.start_time = this.addClassDetails.start_hour + ':' + this.addClassDetails.start_minute + ' ' + this.addClassDetails.start_meridian;
                obj.end_time = this.addClassDetails.end_hour + ':' + this.addClassDetails.end_minute + ' ' + this.addClassDetails.end_meridian;
              }

              startTime = this.convertIntoFullClock(this.addClassDetails.start_hour, this.addClassDetails.start_minute, this.addClassDetails.start_meridian);
              endTime = this.convertIntoFullClock(this.addClassDetails.end_hour, this.addClassDetails.end_minute, this.addClassDetails.end_meridian);
              obj.duration = this.getDifference(startTime, endTime);
              obj.subject_name = this.getValueFromArraySubject(this.subjectListDataSource, 'subject_id', obj.subject_id, 'subject_name');

              if (this.addClassDetails.teacher_id == "" || this.addClassDetails.teacher_id == '-1') {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct teacher name');
                this.convertTimeToBindableFormat();
                return;
              } else {
                obj.teacher_id = Number(this.addClassDetails.teacher_id);
              }

              obj.batch_id = this.getBatchID(obj.subject_id);
              obj.class_desc = this.addClassDetails.class_desc;
              obj.room_no = this.addClassDetails.room_no;
              var topicsName = [];
              this.checkedKeys.forEach(function (ele) {
                _this30.topicsData.forEach(function (e) {
                  if (ele == e.topicId) topicsName.push(e.topicName);
                });
              });
              console.log(topicsName);
              var tempKeys = this.checkedKeys;
              obj.topics_covered = tempKeys.join("|");

              if (!this.schoolModel || this.checkTime(obj)) {
                this.classScheduleArray.push(obj);
                this.checkedKeys = [];
              }

              this.clearClassScheduleForm();
            }
          }, {
            key: "checkTime",
            value: function checkTime(obj) {
              for (var i = 0; i < this.classScheduleArray.length; i++) {
                if (this.classScheduleArray[i].start_time == obj.start_time && this.classScheduleArray[i].end_time == obj.end_time) {
                  this.msgService.showErrorMessage('error', '', 'Please enter correct start time and end time');
                  return false;
                }
              }

              return true;
            }
          }, {
            key: "convertTimeToBindableFormat",
            value: function convertTimeToBindableFormat() {
              this.addClassDetails.start_hour = this.addClassDetails.start_hour + ' ' + this.addClassDetails.start_meridian;
              this.addClassDetails.start_meridian = "";
              this.addClassDetails.end_hour = this.addClassDetails.end_hour + ' ' + this.addClassDetails.end_meridian;
              this.addClassDetails.end_meridian = "";
            }
          }, {
            key: "timeChanges",
            value: function timeChanges(data, name) {
              var time = data.split(' ');

              if (name == "addClassDetails.start_hour") {
                this.addClassDetails.start_hour = time[0];
                this.addClassDetails.start_meridian = time[1];
              } else if (name == "addClassDetails.end_hour") {
                this.addClassDetails.end_hour = time[0];
                this.addClassDetails.end_meridian = time[1];
              }
            }
          }, {
            key: "getBatchID",
            value: function getBatchID(subject_id) {
              for (var i = 0; i < this.subjectListDataSource.length; i++) {
                if (this.subjectListDataSource[i].subject_id == subject_id) {
                  return this.subjectListDataSource[i].batch_id;
                }
              }
            }
          }, {
            key: "convertIntoFullClock",
            value: function convertIntoFullClock(hr, min, meridian) {
              var result = '';

              if (meridian == "AM") {
                if (hr == "12") {
                  hr = "00";
                }

                result = hr + ':' + min;
              } else {
                if (hr == "12") {
                  hr = "12";
                } else {
                  hr = Number(hr) + 12;
                }

                result = hr + ':' + min;
              }

              return result;
            }
          }, {
            key: "getDifference",
            value: function getDifference(startTime, endTime) {
              var start = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](startTime, "HH:mm");
              var end = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](endTime, "HH:mm");
              if (end.isBefore(start)) end.add(1, 'day');
              var d = moment__WEBPACK_IMPORTED_MODULE_2__["duration"](end.diff(start));
              return d._milliseconds / 60000;
            }
          }, {
            key: "getValueFromArray",
            value: function getValueFromArray(data, key, compareVal, getKey) {
              var result = '';

              for (var i = 0; i < data.length; i++) {
                if (data[i] === compareVal) {
                  result = data[i];
                }
              }

              return result;
            }
          }, {
            key: "getValueFromArraySubject",
            value: function getValueFromArraySubject(data, key, compareVal, getKey) {
              var result = '';

              for (var i = 0; i < data.length; i++) {
                if (data[i][key] == compareVal) {
                  result = data[i][getKey];
                }
              }

              return result;
            }
          }, {
            key: "onCourseListSelection",
            value: function onCourseListSelection(event) {
              if (event != '-1') {
                for (var i = 0; i < this.courseList.length; i++) {
                  if (this.courseList[i].course_id == event) {
                    this.courseStartDate = this.courseList[i].start_date;
                    this.courseEndDate = this.courseList[i].end_date;
                  }
                }
              } else {
                this.courseStartDate = '';
                this.courseEndDate = '';
              }
            }
          }, {
            key: "cancelCourseClicked",
            value: function cancelCourseClicked(rowData) {
              this.showPopUpCancellation = true;
              this.cancelRowSelected = rowData;
            }
          }, {
            key: "cancelCourseSchedule",
            value: function cancelCourseSchedule() {
              var _this31 = this;

              var dataTosend = this.makeCancelClassJson();

              if (dataTosend == false) {
                return false;
              }

              if (dataTosend != undefined) {
                this.auth.showLoader();
                this.classService.cancelClassSchedule(dataTosend).subscribe(function (res) {
                  _this31.auth.hideLoader();

                  _this31.msgService.showErrorMessage(_this31.msgService.toastTypes.success, 'Success', 'Class Cancelled Successfull');

                  _this31.showPopUpCancellation = false;

                  _this31.getAllSubjectListFromServer(_this31.fetchMasterCourseModule);
                }, function (err) {
                  //console.log(err);
                  _this31.auth.hideLoader();

                  _this31.msgService.showErrorMessage(_this31.msgService.toastTypes.error, '', err.error.message);
                });
              }
            }
          }, {
            key: "makeCancelClassJson",
            value: function makeCancelClassJson() {
              var text = document.getElementById('idTexboxReason').value;

              if (text == "" || text == null || text == undefined) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter cancellation reason');
                return false;
              }

              var chkbxValue = document.getElementById('idChkbxEnable').checked;

              if (chkbxValue == true) {
                chkbxValue = "Y";
              } else {
                chkbxValue = "N";
              }

              var obj = {};
              obj.batch_id = this.cancelRowSelected.batch_id;
              obj.cancelSchd = [{
                cancel_note: text,
                schd_id: this.cancelRowSelected.class_schedule_id,
                is_notified: chkbxValue
              }];
              return obj;
            }
          }, {
            key: "sendReminder",
            value: function sendReminder() {
              var _this32 = this;

              if (confirm("Are you sure, You want to notify?")) {
                var obj = {};
                obj.course_id = this.fetchedCourseData.coursesList[0].course_id;
                obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.fetchedCourseData.requested_date).format('YYYY-MM-DD');
                this.classService.sendReminderToServer(obj).subscribe(function (res) {
                  _this32.msgService.showErrorMessage(_this32.msgService.toastTypes.success, 'Success', 'Reminder Notification sent successfully');
                }, function (err) {
                  //console.log(err);
                  _this32.msgService.showErrorMessage(_this32.msgService.toastTypes.error, '', err.error.message);
                });
              }

              ;
            }
          }, {
            key: "saveCourseSchedule",
            value: function saveCourseSchedule() {
              var _this33 = this;

              if (this.classScheduleArray.length == 0) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'No Schedule to create/update');
                return;
              }

              if (!this.schoolModel) {
                var obj = this.makeJsonForCourseSave();
                this.auth.showLoader();
                this.classService.saveDataOnServer(obj).subscribe(function (res) {
                  _this33.auth.hideLoader();

                  _this33.msgService.showErrorMessage(_this33.msgService.toastTypes.success, 'Saved', 'Your class added successfully');

                  _this33.getAllSubjectListFromServer(_this33.fetchMasterCourseModule); // this.router.navigate(['/view/course/class']);

                }, function (err) {
                  _this33.auth.hideLoader();

                  _this33.msgService.showErrorMessage(_this33.msgService.toastTypes.error, '', err.error.message);
                });
              } else {
                var _obj = {}; // obj.master_course = this.getValueFromArray(this.masterCourse, 'master_course', this.fetchMasterCourseModule.master_course, 'master_course');

                _obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_2__().day(this.fetchMasterCourseModule.selected_day).format('YYYY-MM-DD');
                _obj.course_id = this.fetchMasterCourseModule.course_id;
                _obj.class_type = 11;
                _obj.is_institute_type_school = true;
                var temp = {};
                temp.course_id = this.fetchMasterCourseModule.course_id;
                temp.batch_list = [];
                temp.weekSchd = [];
                console.log(this.classScheduleArray);

                for (var i = 0; i < this.classScheduleArray.length; i++) {
                  var test = {};
                  test.weekly_schedule = [];
                  var weekSchedTest = {};
                  test.batch_id = this.classScheduleArray[i].batch_id;
                  test.teacher_id = this.classScheduleArray[i].teacher_id;
                  test.isClassSchdUpdate = 1;
                  weekSchedTest.duration = this.classScheduleArray[i].duration;
                  weekSchedTest.start_time = this.classScheduleArray[i].start_time;
                  weekSchedTest.end_time = this.classScheduleArray[i].end_time;
                  weekSchedTest.day_of_week = this.fetchMasterCourseModule.selected_day;
                  temp.batch_list.push(test);
                  test.weekly_schedule.push(weekSchedTest);
                }

                _obj.batch_list = temp.batch_list;
                this.auth.showLoader();

                this._http.postData('/api/v1/courseClassSchedule/create/courseLevel', _obj).subscribe(function (res) {
                  _this33.auth.hideLoader();

                  _this33.msgService.showErrorMessage(_this33.msgService.toastTypes.success, 'Saved', 'Your class added successfully');

                  _this33.getAllSubjectListFromServer(_this33.fetchMasterCourseModule);

                  console.log(res);
                }, function (err) {
                  _this33.auth.hideLoader();

                  console.log(err);
                });
              }
            }
          }, {
            key: "removeRowFromSchedule",
            value: function removeRowFromSchedule(index, row) {
              if (confirm("Are you sure you want to delete?")) {
                this.classScheduleArray.splice(index, 1);
              }
            }
          }, {
            key: "makeJsonForCourseSave",
            value: function makeJsonForCourseSave() {
              var obj = {};
              obj.master_course = this.getValueFromArray(this.masterCourse, 'master_course', this.fetchMasterCourseModule.master_course, 'master_course');
              obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.fetchMasterCourseModule.requested_date).format("YYYY-MM-DD");
              obj.course_id = this.fetchMasterCourseModule.course_id;
              obj.coursesList = [];
              var temp = {};
              temp.course_id = this.fetchMasterCourseModule.course_id;
              temp.courseClassSchdList = [];

              for (var i = 0; i < this.classScheduleArray.length; i++) {
                var test = {};
                test.alloted_teacher_id = this.classScheduleArray[i].teacher_id;
                test.batch_id = this.classScheduleArray[i].batch_id;
                test.class_desc = this.classScheduleArray[i].class_desc;
                test.class_schedule_id = this.classScheduleArray[i].class_schedule_id;
                test.custom_class_type = this.classScheduleArray[i].custom_class_type;
                test.duration = this.classScheduleArray[i].duration;
                test.room_no = this.classScheduleArray[i].room_no;
                test.start_time = this.classScheduleArray[i].start_time;
                test.end_time = this.classScheduleArray[i].end_time;
                test.topics_covered = this.classScheduleArray[i].topics_covered;
                temp.courseClassSchdList.push(test);
              }

              obj.coursesList.push(temp);
              return obj;
            }
          }, {
            key: "getSubjectList",
            value: function getSubjectList(data) {
              var obj = {};

              for (var i = 0; i < data.coursesList.length; i++) {
                if (data.coursesList[i].course_id == this.fetchMasterCourseModule.course_id) {
                  return data.coursesList[i].batchesList;
                }
              }
            }
          }, {
            key: "weeklyScheduleChange",
            value: function weeklyScheduleChange($event, row) {
              this.selctedScheduledClass = row;
              this.selctedScheduledClass.startTime = this.setChangesOnTime(this.selctedScheduledClass.start_time);
              this.selctedScheduledClass.endTime = this.setChangesOnTime(this.selctedScheduledClass.end_time);
              var selectedValue = $event.target.value;

              if (selectedValue == 1) {} else if (selectedValue == 2) {
                this.selectedDatesOption();
              } else {
                this.customRecurrence();
              }
            }
          }, {
            key: "setChangesOnTime",
            value: function setChangesOnTime(data) {
              var obj = {};
              var time = data.split(':');
              obj.hour = time[0] + ' ' + time[1].split(' ')[1];
              obj.minute = time[1].split(' ')[0];
              return obj;
            }
          }, {
            key: "convertTimeToHourMinMeridian",
            value: function convertTimeToHourMinMeridian(data) {
              var obj = {};
              var time = data.split(':');
              obj.hour = time[0];
              obj.minute = time[1].split(' ')[0];
              obj.meridian = time[1].split(' ')[1];
              return obj;
            }
          }, {
            key: "selectedDatesOption",
            value: function selectedDatesOption() {
              this.showPopUp = true;
              this.selectedDateArray = [];
            }
          }, {
            key: "customRecurrence",
            value: function customRecurrence() {
              this.getWeeklyScheduleData();
            } //////// POPUP /////////////////////////

          }, {
            key: "getWeeklyScheduleData",
            value: function getWeeklyScheduleData() {
              var _this34 = this;

              this.auth.showLoader();
              this.classService.getWeeklySchedule(this.selctedScheduledClass.batch_id).subscribe(function (res) {
                _this34.auth.hideLoader(); // if (res.weekSchd && (res.weekSchd.length > 0)) {
                // this.selctedScheduledClass.startTime = this.getNewTimeFormatJson(res.weekSchd[0].start_time);
                // this.selctedScheduledClass.endTime = this.getNewTimeFormatJson(res.weekSchd[0].end_time);


                _this34.weekDaysList.forEach(function (element) {
                  element.uiSelected = false;
                  element.start_time = _this34.getNewTimeFormatJson("12:00 PM");
                  element.end_time = _this34.getNewTimeFormatJson("1:00 PM");
                });

                if (res.weekSchd && res.weekSchd.length > 0) {
                  for (var i = 0; i < _this34.weekDaysList.length; i++) {
                    for (var l = 0; l < res.weekSchd.length; l++) {
                      if (_this34.weekDaysList[i].data_key == res.weekSchd[l].day_of_week) {
                        _this34.weekDaysList[i].start_time = _this34.getNewTimeFormatJson(res.weekSchd[l].start_time);
                        _this34.weekDaysList[i].end_time = _this34.getNewTimeFormatJson(res.weekSchd[l].end_time);
                        _this34.weekDaysList[i].uiSelected = true;
                      }
                    }
                  }
                }

                _this34.showPopUpRecurence = true; // }
              }, function (err) {
                _this34.auth.hideLoader();

                console.log(err);
              });
            }
          }, {
            key: "closePopup",
            value: function closePopup() {
              this.showPopUpRecurence = false;
              this.showPopUp = false;
              this.showPopUpCancellation = false;

              if (!this.isProfessional) {
                this.getAllSubjectListFromServer(this.fetchMasterCourseModule);
              }
            }
          }, {
            key: "onWeekDaysSelection",
            value: function onWeekDaysSelection(event) {
              if (document.getElementById(event.target.id).classList.contains('l-text')) {
                document.getElementById(event.target.id).classList.remove('l-text');
                document.getElementById(event.target.id).classList.add('p-text');
              } else {
                document.getElementById(event.target.id).classList.add('l-text');
                document.getElementById(event.target.id).classList.remove('p-text');
              }
            }
          }, {
            key: "radioButtonClick",
            value: function radioButtonClick($event) {
              this.clearSelection();

              if ($event.target.id == "idCourseEndDate") {
                this.customRec.radioEndDate.radioEndDateSelection = true;
              } else if ($event.target.id == "idOn") {
                this.customRec.radioOn.radioONSelection = true;
              } else {
                this.customRec.radioAfter.radioAfterSelection = true;
              }
            }
          }, {
            key: "clearSelection",
            value: function clearSelection() {
              this.customRec.radioEndDate.radioEndDateSelection = false;
              this.customRec.radioEndDate.radioDate = '';
              this.customRec.radioOn.radioONSelection = false;
              this.customRec.radioOn.radioOnDate = '';
              this.customRec.radioAfter.radioAfterSelection = false;
              this.customRec.radioAfter.occurenceValue = '';
            }
          }, {
            key: "addDateToArray",
            value: function addDateToArray() {
              if (this.addDates.selectedDate != "" && this.addDates.selectedDate != undefined && this.addDates.selectedDate != null) {
                var obj = new Object();
                obj.selectedDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.addDates.selectedDate).format("YYYY-MM-DD");
                obj.error = '';
                this.selectedDateArray.push(obj);
                this.addDates.selectedDate = '';
                this.addDates.error = '';
              }
            }
          }, {
            key: "removeDateToArray",
            value: function removeDateToArray(index, row) {
              if (confirm("Are you sure you want to delete?")) {
                this.selectedDateArray.splice(index, 1);
              }
            }
          }, {
            key: "saveCustomRecurrences",
            value: function saveCustomRecurrences() {
              var _this35 = this;

              this.multiClickDisabled = true;
              this.auth.showLoader();
              var JsonToSend = this.makeJsonForRecurrence();
              this.classService.saveCustomRecurrenceToServer(JsonToSend).subscribe(function (res) {
                _this35.showPopUpRecurence = false;

                _this35.msgService.showErrorMessage(_this35.msgService.toastTypes.success, 'Success', 'Saved Successfully');

                _this35.auth.hideLoader();

                _this35.multiClickDisabled = false;
              }, function (err) {
                //console.log(err);
                _this35.auth.hideLoader();

                _this35.multiClickDisabled = false;

                _this35.msgService.showErrorMessage(_this35.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "getSelectedDaysOfWeek",
            value: function getSelectedDaysOfWeek() {
              var arr = [];
              var elementArray = document.getElementsByClassName('p-text');

              for (var t = 0; t < elementArray.length; t++) {
                arr.push(elementArray[t].id.split('-')[1].trim());
              }

              return arr;
            }
          }, {
            key: "saveSelectedDateSchedule",
            value: function saveSelectedDateSchedule() {
              var _this36 = this;

              if (!this.validateAllFields()) {
                return;
              }

              ;
              var jsonToSend = this.makeJsonOFSelectedDate();
              this.classService.selectedDateScheduleToServer(jsonToSend).subscribe(function (res) {
                _this36.checkDatesOverLapping(res);
              }, function (err) {
                //console.log(err);
                _this36.msgService.showErrorMessage(_this36.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "checkDatesOverLapping",
            value: function checkDatesOverLapping(response) {
              for (var i = 0; i < Object.keys(response.copyClassScheduleDatesMapStatusMsg).length; i++) {
                for (var t = 0; t < this.selectedDateArray.length; t++) {
                  var key = Object.keys(response.copyClassScheduleDatesMapStatusMsg)[i];

                  if (this.selectedDateArray[t].selectedDate == key) {
                    this.selectedDateArray[t].error = response.copyClassScheduleDatesMapStatusMsg[key];
                  }
                }
              }
            }
          }, {
            key: "validateAllFields",
            value: function validateAllFields() {
              if (this.selctedScheduledClass.startTime.hour == "" || this.selctedScheduledClass.startTime.minute == "") {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid start time');
                return false;
              }

              if (this.selctedScheduledClass.endTime.hour == "" || this.selctedScheduledClass.endTime.minute == "") {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid end time');
                return false;
              }

              if (this.selctedScheduledClass.subject_id == "-1" || this.selctedScheduledClass.subject_id == " ") {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter subject name');
                return false;
              }

              if (this.selctedScheduledClass.teacher_id == "-1" || this.selctedScheduledClass.teacher_id == " ") {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter teacher name');
                return false;
              }

              return true;
            }
          }, {
            key: "makeJsonOFSelectedDate",
            value: function makeJsonOFSelectedDate() {
              var obj = {};
              obj.course_id = Number(this.fetchMasterCourseModule.course_id);
              obj.courseClassSchdList = [];
              var test = {};
              test.batch_id = this.selctedScheduledClass.batch_id.toString();
              test.start_time = this.selctedScheduledClass.startTime.hour.split(' ')[0] + ':' + this.selctedScheduledClass.startTime.minute + ' ' + this.selctedScheduledClass.startTime.hour.split(' ')[1];
              test.end_time = this.selctedScheduledClass.endTime.hour.split(' ')[0] + ':' + this.selctedScheduledClass.endTime.minute + ' ' + this.selctedScheduledClass.endTime.hour.split(' ')[1];
              test.class_desc = this.selctedScheduledClass.class_desc;
              test.duration = this.getDifference(test.start_time, test.end_time);
              test.room_no = this.selctedScheduledClass.room_no;
              test.class_schedule_id = 0;
              test.alloted_teacher_id = this.selctedScheduledClass.teacher_id;
              test.custom_class_type = this.selctedScheduledClass.custom_class_type;
              obj.courseClassSchdList.push(test);
              obj.reqDateList = this.getSelectedDatesFromArray();
              return obj;
            }
          }, {
            key: "getSelectedDatesFromArray",
            value: function getSelectedDatesFromArray() {
              var arr = [];

              if (this.selectedDateArray.length != 0) {
                for (var t = 0; t < this.selectedDateArray.length; t++) {
                  if (this.selectedDateArray[t].selectedDate != "" && this.selectedDateArray[t].selectedDate != null) {
                    arr.push(this.selectedDateArray[t].selectedDate);
                  }
                }
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter date');
                return;
              }

              return arr;
            }
          }, {
            key: "makeJsonForRecurrence",
            value: function makeJsonForRecurrence() {
              var weekDaysSelectedCount = 0;
              this.weekDaysList.forEach(function (element) {
                if (element.uiSelected) {
                  weekDaysSelectedCount++;
                }
              });

              if (weekDaysSelectedCount == 0) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter days of week');
                return;
              } else {
                var obj = {};
                var seletected = false;
                obj.batch_id = this.selctedScheduledClass.batch_id;
                obj.weekSchd = [];

                for (var t = 0; t < this.weekDaysList.length; t++) {
                  if (this.weekDaysList[t].uiSelected) {
                    var test = {};
                    test.day_of_week = Number(this.weekDaysList[t].data_key);
                    test.start_time = this.weekDaysList[t].start_time.hour.split(' ')[0] + ':' + this.weekDaysList[t].start_time.minute + ' ' + this.weekDaysList[t].start_time.hour.split(' ')[1];
                    ;
                    test.end_time = this.weekDaysList[t].end_time.hour.split(' ')[0] + ':' + this.weekDaysList[t].end_time.minute + ' ' + this.weekDaysList[t].end_time.hour.split(' ')[1];
                    ;
                    var duration = this.getDifference(test.start_time, test.end_time);
                    test.duration = duration;
                    var startTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.weekDaysList[t].start_time.hour, this.weekDaysList[t].start_time.minute, 'comp'), 'h:mma');
                    var endTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.weekDaysList[t].end_time.hour, this.weekDaysList[t].end_time.minute, 'comp'), 'h:mma');

                    if (!startTime.isBefore(endTime)) {
                      this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
                      return;
                    } else {
                      obj.weekSchd.push(test);
                    }
                  }
                }

                obj.course_id = this.selctedScheduledClass.course_id;
                obj.start_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.selctedScheduledClass.start_date).format("YYYY-MM-DD");
                obj.end_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.selctedScheduledClass.end_date).format("YYYY-MM-DD");
                obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.fetchMasterCourseModule.requested_date).format("YYYY-MM-DD");
                obj.courseClassSchdList = [{
                  class_schedule_id: this.selctedScheduledClass.class_schedule_id
                }];
                return obj;
              }
            }
            /* =================================Batch Model=========================================================== */

          }, {
            key: "getWeekOfDaysFromServer",
            value: function getWeekOfDaysFromServer() {
              var _this37 = this;

              this.classService.getWeekOfDays().subscribe(function (res) {
                _this37.weekDays = _this37.addKeyInData(res);
              }, function (err) {//console.log(err);
              });
            }
          }, {
            key: "calculateFieldForTables",
            value: function calculateFieldForTables(data) {
              this.customTable = [];
              this.weekDaysTable = [];
              this.extraClassTable = [];
              this.canceLClassTable = [];
              var temp_mode = this.batchFrequency;
              this.batchFrequency = '1';

              if (data.cancelSchd != null) {
                this.canceLClassTable = data.cancelSchd;
              }

              if (data.extraSchd != null) {
                this.extraClassTable = data.extraSchd;
              }

              if (data.weekSchd != null) {
                this.weekDays.forEach(function (element) {
                  element.uiSelected = false;
                });
                this.weekDaysTable = this.weekDays;

                if (data.weekSchd.length > 0) {
                  this.makeJsonForWeekTable(data.weekSchd);
                }
              } else {
                this.weekDays.forEach(function (element) {
                  element.uiSelected = false;
                });
                this.weekDaysTable = this.weekDays;
              }

              if (data.otherSchd != null) {
                if (data.otherSchd.length > 0) {
                  this.customTable = data.otherSchd;

                  if (data.weekSchd && data.weekSchd.length == 0) {
                    this.batchFrequency = '2';
                  } else {
                    this.batchFrequency = '1';
                  }

                  this.scheduleSelection(this.batchFrequency);
                }
              }
            }
          }, {
            key: "scheduleSelection",
            value: function scheduleSelection(event) {
              this.batchFrequency = event;
              this.custom.date = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD");
            } /// Week Section////

          }, {
            key: "makeJsonForWeekTable",
            value: function makeJsonForWeekTable(data) {
              this.showCancelWeeklyBtn = false;
              this.weekDaysTable = this.weekDays;

              for (var i = 0; i < this.weekDaysTable.length; i++) {
                for (var t = 0; t < data.length; t++) {
                  if (data[t].day_of_week == this.weekDaysTable[i].data_key) {
                    this.showCancelWeeklyBtn = true;
                    this.weekDaysTable[i].uiSelected = true;
                    this.weekDaysTable[i].day_of_week = data[t].day_of_week;
                    this.weekDaysTable[i].data_value = this.weekDays[i].data_value;
                    this.weekDaysTable[i].schd_id = data[t].schd_id;
                    this.weekDaysTable[i].duration = data[t].duration;
                    this.weekDaysTable[i].start_time = this.getNewTimeFormatJson(data[t].start_time);
                    this.weekDaysTable[i].end_time = this.getNewTimeFormatJson(data[t].end_time);
                  }
                }
              }
            }
          }, {
            key: "updateWeeklySchedule",
            value: function updateWeeklySchedule() {
              if (this.batchDetails.otherSchd != null) {
                if (this.batchDetails.otherSchd.length > 0) {
                  this.showWarningPopup = true;
                } else {
                  this.createWeeklySchedule();
                }
              } else {
                this.createWeeklySchedule();
              }
            }
          }, {
            key: "createWeeklySchedule",
            value: function createWeeklySchedule() {
              var data = this.prepareJSONDATA();

              if (data == false) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify at least one day to create a schedule');
                return;
              }

              if (this.custom.date == '') {
                data.request_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.batchDetails.batch_start_date).format("YYYY-MM-DD");
              } else {
                if (moment__WEBPACK_IMPORTED_MODULE_2__(this.custom.date).valueOf() < moment__WEBPACK_IMPORTED_MODULE_2__(this.batchDetails.batch_start_date).valueOf()) {
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'selected date should be greater than or equal to batch start date ' + moment__WEBPACK_IMPORTED_MODULE_2__(this.batchDetails.batch_start_date).format("DD-MM-YYYY"));
                  return;
                } else {
                  data.request_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.custom.date).format("YYYY-MM-DD");
                }
              }

              if (this.batchDetails.weekSchd != null) {
                if (this.batchDetails.weekSchd.length > 0) {
                  this.serverCallPUT(data);
                } else {
                  if (this.batchDetails.otherSchd && this.batchDetails.otherSchd.length > 0) {
                    this.serverCallPUT(data);
                  } else {
                    this.serverCallPOST(data);
                  }
                }
              } else {
                this.serverCallPOST(data);
              }
            }
          }, {
            key: "prepareJSONDATA",
            value: function prepareJSONDATA() {
              var obj = {};
              var seletected = false;
              obj.batch_id = this.batchDetails.batch_id;
              obj.class_freq = "WEEK";
              obj.weekSchd = [];

              for (var i = 0; i < this.weekDaysTable.length; i++) {
                if (this.weekDaysTable[i].uiSelected == true) {
                  seletected = true;
                  var test = {};
                  test.day_of_week = this.weekDaysTable[i].data_key;
                  var startTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.weekDaysTable[i].start_time.hour, this.weekDaysTable[i].start_time.minute, 'comp'), 'h:mma');
                  var endTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.weekDaysTable[i].end_time.hour, this.weekDaysTable[i].end_time.minute, 'comp'), 'h:mma');

                  if (!startTime.isBefore(endTime)) {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
                    return;
                  } else {
                    test.start_time = this.createTimeInFormat(this.weekDaysTable[i].start_time.hour, this.weekDaysTable[i].start_time.minute, '');
                    test.end_time = this.createTimeInFormat(this.weekDaysTable[i].end_time.hour, this.weekDaysTable[i].end_time.minute, '');
                  }

                  startTime = this.convertToFullTimeFormat(this.weekDaysTable[i].start_time.hour, this.weekDaysTable[i].start_time.minute);
                  endTime = this.convertToFullTimeFormat(this.weekDaysTable[i].end_time.hour, this.weekDaysTable[i].end_time.minute);
                  test.duration = this.getDifference(startTime, endTime);
                  obj.weekSchd.push(test);
                }
              }

              if (seletected == false) {
                return false;
              } else {
                return obj;
              }
            }
          }, {
            key: "applyButtonClick",
            value: function applyButtonClick() {
              var startTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.mainStartTime.hour, this.mainStartTime.minute, 'comp'), 'h:mma');
              var endTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.mainEndTime.hour, this.mainEndTime.minute, 'comp'), 'h:mma');

              if (!startTime.isBefore(endTime)) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
                return;
              } else {
                for (var t = 0; t < this.weekDaysTable.length; t++) {
                  this.weekDaysTable[t].start_time.hour = this.mainStartTime.hour;
                  this.weekDaysTable[t].start_time.minute = this.mainStartTime.minute;
                  this.weekDaysTable[t].end_time.hour = this.mainEndTime.hour;
                  this.weekDaysTable[t].end_time.minute = this.mainEndTime.minute;
                }
              }
            }
          }, {
            key: "cancelWeeklyScheduledClass",
            value: function cancelWeeklyScheduledClass() {
              this.cancelWeeklySchedulePop = true;
            }
          }, {
            key: "closeWeeklySchedulePopup",
            value: function closeWeeklySchedulePopup() {
              this.cancelWeeklySchedulePop = false;
            }
          }, {
            key: "cancelWeeklySchedule",
            value: function cancelWeeklySchedule() {
              var _this38 = this;

              var notify = "";

              if (this.weeklyScheduleCan.is_notified == true) {
                notify = "Y";
              } else {
                notify = "N";
              }

              var obj = {
                batch_id: this.batchDetails.batch_id,
                class_freq: 'WEEK',
                requested_date: '',
                cancelSchd: [{
                  cancel_note: this.weeklyScheduleCan.cancel_note,
                  class_date: moment__WEBPACK_IMPORTED_MODULE_2__(this.weeklyScheduleCan.date).format('YYYY-MM-DD'),
                  schd_id: 0,
                  is_notified: notify
                }]
              };
              this.classService.cancelClassSchedule(obj).subscribe(function (res) {
                _this38.msgService.showErrorMessage(_this38.msgService.toastTypes.success, 'Cancelled', 'Class schedule cancelled successfully');

                _this38.cancelWeeklySchedulePop = false;

                _this38.updateTableDataAgain();
              }, function (err) {
                _this38.msgService.showErrorMessage(_this38.msgService.toastTypes.error, '', err.error.message); //console.log(err);

              });
            } /// Custom Section////

          }, {
            key: "addNewCustomClass",
            value: function addNewCustomClass() {
              var obj = {};
              obj.class_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.custom.date).format("YYYY-MM-DD");

              if (moment__WEBPACK_IMPORTED_MODULE_2__(this.custom.date).valueOf() < moment__WEBPACK_IMPORTED_MODULE_2__(this.batchDetails.batch_start_date).valueOf()) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid date');
                return;
              }

              var startTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.custom.start_hour, this.custom.start_minute, 'comp'), 'h:mma');
              var endTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.custom.end_hour, this.custom.end_minute, 'comp'), 'h:mma');

              if (!startTime.isBefore(endTime)) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
                return;
              } else {
                obj.start_time = this.createTimeInFormat(this.custom.start_hour, this.custom.start_minute, '');
                obj.end_time = this.createTimeInFormat(this.custom.end_hour, this.custom.end_minute, '');
              }

              obj.note = this.custom.desc;
              obj.batch_id = this.batchDetails.batch_id;
              obj.schd_id = 0;
              obj.is_attendance_marked = 'N';
              obj.topics_covered = this.selectedTopics;
              obj.topicName = this.selectedTopicsNames;
              this.customTable.push(obj);
              this.custom = {
                date: moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"),
                start_hour: '12 PM',
                start_minute: '00',
                end_hour: '1 PM',
                end_minute: '00',
                desc: '',
                topics_covered: ''
              };
              this.selectedTopicsListObj = [];
              this.selectedTopics = '';
              this.selectedTopicsNames = '';
            }
          }, {
            key: "deleteFromCustomTable",
            value: function deleteFromCustomTable(row, index) {
              if (confirm("Are you sure you want to delete?")) {
                this.customTable.splice(index, 1);
              }
            }
          }, {
            key: "updateCustomClass",
            value: function updateCustomClass() {
              if (this.batchDetails.weekSchd != null) {
                if (this.batchDetails.weekSchd.length > 0) {
                  this.showWarningPopup = true;
                } else {
                  this.createCustomClasses();
                }
              } else {
                this.createCustomClasses();
              }

              this.selectedTopics = '';
              this.selectedTopicsListObj = [];
            }
          }, {
            key: "makeJsonForCustomClass",
            value: function makeJsonForCustomClass() {
              var obj = {};
              obj.batch_id = this.batchDetails.batch_id.toString();
              obj.class_freq = "OTHER";
              obj.otherSchd = [];

              if (this.customTable.length > 0) {
                for (var i = 0; i < this.customTable.length; i++) {
                  var t = {};
                  t.class_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.customTable[i].class_date).format('YYYY-MM-DD');
                  t.request_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.customTable[i].class_date).format('YYYY-MM-DD');
                  t.start_time = this.customTable[i].start_time;
                  t.end_time = this.customTable[i].end_time;
                  t.note = this.customTable[i].note;
                  t.topics_covered = this.customTable[i].topics_covered;
                  t.schd_id = this.customTable[i].schd_id;
                  var testStart = this.convertTimeToHourMinMeridian(t.start_time);
                  var testStart1 = this.convertTimeToHourMinMeridian(t.end_time);
                  var start = this.convertIntoFullClock(testStart.hour, testStart.minute, testStart.meridian);
                  var end = this.convertIntoFullClock(testStart1.hour, testStart1.minute, testStart1.meridian);
                  t.duration = this.getDifference(start, end);
                  obj.otherSchd.push(t);
                }
              }

              return obj;
            }
          }, {
            key: "createCustomClasses",
            value: function createCustomClasses() {
              var obj = this.makeJsonForCustomClass();

              if (this.batchDetails.otherSchd != null) {
                if (this.batchDetails.otherSchd.length > 0) {
                  this.serverCallPUT(obj);
                } else {
                  if (this.batchDetails.weekSchd && this.batchDetails.weekSchd.length > 0) {
                    this.serverCallPUT(obj);
                  } else {
                    this.serverCallPOST(obj);
                  }
                }
              } else {
                this.serverCallPOST(obj);
              }
            }
          }, {
            key: "serverCallPUT",
            value: function serverCallPUT(data) {
              var _this39 = this;

              if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.classService.createCustomBatchPUT(data).subscribe(function (res) {
                  _this39.auth.hideLoader();

                  _this39.msgService.showErrorMessage(_this39.msgService.toastTypes.success, 'Updated', 'Class scheduled successfully!');

                  _this39.showWarningPopup = false;

                  _this39.updateTableDataAgain();
                }, function (err) {
                  _this39.auth.hideLoader();

                  _this39.msgService.showErrorMessage(_this39.msgService.toastTypes.error, '', err.error.message); //console.log(err);

                });
              }
            }
          }, {
            key: "serverCallPOST",
            value: function serverCallPOST(data) {
              var _this40 = this;

              if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.classService.createWeeklyBatchPost(data).subscribe(function (res) {
                  _this40.msgService.showErrorMessage(_this40.msgService.toastTypes.success, 'Updated', 'Class scheduled successfully!');

                  _this40.showWarningPopup = false;

                  _this40.auth.hideLoader();

                  _this40.updateTableDataAgain();
                }, function (err) {
                  _this40.auth.hideLoader();

                  _this40.msgService.showErrorMessage(_this40.msgService.toastTypes.error, '', err.error.message); //console.log(err);

                });
              }
            }
          }, {
            key: "notifyOfCustomClass",
            value: function notifyOfCustomClass(data, index) {
              if (confirm('Are you sure you want to send Regular Class Schedule SMS to the batch?')) {
                this.notifyExtraClassCancel(data, "OTHER");
              }
            }
          }, {
            key: "cancelClassOfCustomClass",
            value: function cancelClassOfCustomClass(row, index) {
              this.showPopUpCancellation = true;
              this.cancelRowSelected = row;
            } ///// Extra Class Section //////////////

          }, {
            key: "addNewExtraClass",
            value: function addNewExtraClass() {
              var obj = {};
              obj.class_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.addExtraClass.date).format("YYYY-MM-DD");
              var startTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.addExtraClass.start_hour, this.addExtraClass.start_minute, 'comp'), 'h:mma');
              var endTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.createTimeInFormat(this.addExtraClass.end_hour, this.addExtraClass.end_minute, 'comp'), 'h:mma');

              if (!startTime.isBefore(endTime)) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct start time and end time');
                return;
              } else {
                obj.start_time = this.createTimeInFormat(this.addExtraClass.start_hour, this.addExtraClass.start_minute, '');
                obj.end_time = this.createTimeInFormat(this.addExtraClass.end_hour, this.addExtraClass.end_minute, '');
              }

              obj.note = this.addExtraClass.desc;
              obj.batch_id = this.batchDetails.batch_id;
              obj.schd_id = 0;
              obj.is_attendance_marked = 'N';
              obj.topics_covered = this.selectedTopics;
              this.extraClassTable.push(obj);
              this.addExtraClass = {
                date: moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"),
                start_hour: '12 PM',
                start_minute: '00',
                end_hour: '1 PM',
                end_minute: '00',
                desc: '',
                topics_covered: ''
              };
              this.selectedTopics = '';
              this.selectedTopicsListObj = [];
            }
          }, {
            key: "updateExtraClass",
            value: function updateExtraClass() {
              var data = this.makeJsonForExtraClass();

              if (this.batchDetails.extraSchd != null) {
                if (this.batchDetails.extraSchd.length > 0) {
                  this.serverCallPUT(data);
                } else {
                  this.serverCallPOST(data);
                }
              } else {
                this.serverCallPOST(data);
              }

              this.selectedTopicsListObj = [];
              this.selectedTopics = '';
            }
          }, {
            key: "makeJsonForExtraClass",
            value: function makeJsonForExtraClass() {
              var obj = {};
              obj.batch_id = this.batchDetails.batch_id;
              obj.class_freq = "EXTRA";
              obj.extraSchd = [];

              if (this.extraClassTable.length > 0) {
                for (var i = 0; i < this.extraClassTable.length; i++) {
                  var t = {};
                  t.class_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.extraClassTable[i].class_date).format('YYYY-MM-DD');
                  t.request_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.extraClassTable[i].class_date).format('YYYY-MM-DD');
                  t.start_time = this.extraClassTable[i].start_time;
                  t.end_time = this.extraClassTable[i].end_time;
                  t.note = this.extraClassTable[i].note;
                  t.schd_id = this.extraClassTable[i].schd_id;
                  t.topics_covered = this.extraClassTable[i].topics_covered;
                  var testStart = this.convertTimeToHourMinMeridian(t.start_time);
                  var testStart1 = this.convertTimeToHourMinMeridian(t.end_time);
                  var start = this.convertIntoFullClock(testStart.hour, testStart.minute, testStart.meridian);
                  var end = this.convertIntoFullClock(testStart1.hour, testStart1.minute, testStart1.meridian);
                  t.duration = this.getDifference(start, end);
                  obj.extraSchd.push(t);
                }
              }

              return obj;
            }
          }, {
            key: "cancelExtraClassSchedule",
            value: function cancelExtraClassSchedule(row) {
              this.showPopUpCancellation = true;
              this.cancelRowSelected = row;
            }
          }, {
            key: "notifyExtraClassSchedule",
            value: function notifyExtraClassSchedule(row) {
              if (confirm("Are you sure you want to send Extra Class Schedule SMS to the batch?")) {
                this.notifyExtraClassCancel(row, "week");
              }
            }
          }, {
            key: "deleteExtraClassSchedule",
            value: function deleteExtraClassSchedule(row, index) {
              if (confirm("Are you sure you want to delete?")) {
                this.extraClassTable.splice(index, 1);
              }
            } /// Cancel Class /////

          }, {
            key: "notifyOfCancelClass",
            value: function notifyOfCancelClass(row) {
              var _this41 = this;

              if (confirm("Are you sure, You want to notify?")) {
                var is_exam_schedule = '';

                if (row.hasOwnProperty('is_exam_schedule')) {
                  is_exam_schedule = row.is_exam_schedule;
                } else {
                  is_exam_schedule = "N";
                }

                var data = {
                  batch_id: row.batch_id,
                  class_schedule_id: row.schd_id,
                  is_exam_schedule: is_exam_schedule
                };
                this.classService.notifyCancelledClassSchedule(data).subscribe(function (res) {
                  _this41.updateTableDataAgain();

                  _this41.msgService.showErrorMessage(_this41.msgService.toastTypes.success, 'Notified', 'Notification Sent');
                }, function (err) {
                  //console.log(err);
                  _this41.msgService.showErrorMessage(_this41.msgService.toastTypes.error, '', err.error.message);
                });
              }
            } /// Cancellation POpup /////////

          }, {
            key: "cancelBatchSchedule",
            value: function cancelBatchSchedule() {
              var _this42 = this;

              var data = this.makeJSONToSendBatchDet();

              if (data == false) {
                return;
              }

              this.classService.cancelClassSchedule(data).subscribe(function (res) {
                _this42.msgService.showErrorMessage(_this42.msgService.toastTypes.success, 'Notified', 'Cancelled Successfully');

                _this42.showPopUpCancellation = false;

                _this42.updateTableDataAgain();
              }, function (err) {
                //console.log(err);
                _this42.msgService.showErrorMessage(_this42.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "makeJSONToSendBatchDet",
            value: function makeJSONToSendBatchDet() {
              var text = document.getElementById('idTexboxReason').value;

              if (text == "" || text == null || text == undefined) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter cancellation reason');
                return false;
              }

              var chkbxValue = document.getElementById('idChkbxEnable').checked;

              if (chkbxValue == true) {
                chkbxValue = "Y";
              } else {
                chkbxValue = "N";
              }

              var obj = {};
              obj.batch_id = this.cancelRowSelected.batch_id;
              obj.class_freq = this.cancelRowSelected.freq;
              obj.cancelSchd = [{
                cancel_note: text,
                is_notified: chkbxValue,
                schd_id: this.cancelRowSelected.schd_id
              }];
              return obj;
            } // Common function for notification///

          }, {
            key: "notifyExtraClassCancel",
            value: function notifyExtraClassCancel(row, type) {
              var _this43 = this;

              this.classService.sendNotification(row.schd_id, type).subscribe(function (res) {
                //console.log(res);
                _this43.msgService.showErrorMessage(_this43.msgService.toastTypes.success, 'Notified', 'Notification Sent');
              }, function (err) {
                //console.log(err);
                _this43.msgService.showErrorMessage(_this43.msgService.toastTypes.error, '', err.error.message);
              });
            } ////////////////////////////

          }, {
            key: "showHideCommonSection",
            value: function showHideCommonSection() {
              if (this.batchFrequency == "1") {
                if (this.batchDetails.weekSchd != null) {
                  if (this.batchDetails.weekSchd.length > 0) {
                    return true;
                  } else {
                    return false;
                  }
                } else {
                  return false;
                }
              } else {
                if (this.batchDetails.otherSchd != null) {
                  if (this.batchDetails.otherSchd.length > 0) {
                    return true;
                  } else {
                    return false;
                  }
                } else {
                  return false;
                }
              }
            }
          }, {
            key: "closeWarningPopUp",
            value: function closeWarningPopUp() {
              this.showWarningPopup = false;
            }
          }, {
            key: "addKeyInData",
            value: function addKeyInData(data) {
              data.forEach(function (element) {
                element.uiSelected = '';
                element.schd_id = '';
                element.duration = '';
                element.day_of_week = '';
                element.start_time = {
                  hour: '12 PM',
                  minute: '00'
                };
                element.end_time = {
                  hour: '1 PM',
                  minute: '00'
                };
              });
              return data;
            }
          }, {
            key: "createTimeInFormat",
            value: function createTimeInFormat(hrMeri, minute, format) {
              var time = hrMeri.split(' ');

              if (format == "comp") {
                var t = time[0] + ":" + minute + time[1];
                return t;
              } else {
                var _t = time[0] + ":" + minute + " " + time[1];

                return _t;
              }
            }
          }, {
            key: "getNewTimeFormatJson",
            value: function getNewTimeFormatJson(data) {
              var time = {};
              time.hour = data.split(':')[0] + " " + data.split(' ')[1];
              time.minute = data.split(':')[1].split(' ')[0];
              return time;
            }
          }, {
            key: "convertToFullTimeFormat",
            value: function convertToFullTimeFormat(hr, min) {
              var result = "";
              var hour;
              var time = hr.split(' ');

              if (time[1] == "AM") {
                if (time[0] == "12") {
                  hour = "00";
                } else {
                  hour = time[0];
                }

                result = hour + ":" + min;
                return result;
              } else {
                if (time[0] != "12") {
                  hour = Number(time[0]) + 12;
                } else {
                  hour = Number(time[0]);
                }

                result = hour + ":" + min;
                return result;
              }
            }
          }, {
            key: "updateTableDataAgain",
            value: function updateTableDataAgain() {
              this.batchDetected(this.fetchMasterBatchModule.batch_id);
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
            } // change by laxmi

          }, {
            key: "switchActiveView",
            value: function switchActiveView() {
              var classArray = ['liStandard', 'liSubject', 'liExam', 'liManageBatch'];
              classArray.forEach(function (classname) {
                document.getElementById(classname).classList.remove('active');
              });
              document.getElementById('liClass').classList.add('active');
            }
          }, {
            key: "hidePastClass",
            value: function hidePastClass() {
              if (moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD') <= moment__WEBPACK_IMPORTED_MODULE_2__(this.fetchMasterCourseModule.requested_date).format('YYYY-MM-DD')) {
                return true;
              } else {
                return false;
              }
            }
          }, {
            key: "checkableSettings",
            get: function get() {
              return {
                checkChildren: true,
                checkParents: true,
                enabled: true,
                mode: 'multiple',
                checkOnClick: false
              };
            }
          }]);

          return ClassAddComponent;
        }();

        ClassAddComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_4__["LoginService"]
          }, {
            type: _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ClassScheduleService"]
          }, {
            type: _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_6__["TopicListingService"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        };

        ClassAddComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-class-add',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./class-add.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-class/class-add/class-add.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./class-add.component.scss */
          "./src/app/components/course-module/create-course/course-class/class-add/class-add.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ___WEBPACK_IMPORTED_MODULE_4__["HttpService"], ___WEBPACK_IMPORTED_MODULE_4__["LoginService"], _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ClassScheduleService"], _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_6__["TopicListingService"], ___WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"], ___WEBPACK_IMPORTED_MODULE_4__["MessageShowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], ClassAddComponent);
        return ClassAddComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-class/class-home/class-home.component.scss":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-class/class-home/class-home.component.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseClassClassHomeClassHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/* ========================================================================================= */\n/* ========================================================================================= */\n.header-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0px;\n  border: none;\n}\n.cal-view {\n  margin: 0 10px;\n  overflow: hidden;\n}\n.cal-view ::-webkit-scrollbar {\n  display: block !important;\n  width: 7px;\n  height: 7px;\n}\n.cal-view .common-search-filter {\n  border-bottom: 1px solid #d3d4d5;\n  padding: 5px 5px 0;\n  margin: 10px 0px;\n}\n.cal-view .common-search-filter .field-wrapper {\n  background: transparent;\n}\n.cal-view .common-search-filter .field-wrapper .form-ctrl {\n  background: white;\n}\n/* ========================================================================================= */\n/* ========================================================================================= */\n.form-ctrl {\n  border-radius: 4px;\n}\n.classSchedule-Add {\n  padding: 15px 5px 10px;\n  background: #efefef;\n}\n.classSchedule-Add .field-wrapper {\n  background: transparent;\n}\n.classSchedule-Add .field-wrapper .form-ctrl {\n  background: transparent;\n}\n.classSchedule-Add fieldset legend {\n  font-size: 12px;\n  position: absolute;\n  color: #0084f6;\n  top: -12px;\n}\n.classSchedule-Add fieldset .time-picker .field-wrapper {\n  display: inline-block !important;\n  margin: 0 10px 0 0 !important;\n  background: transparent;\n}\n.classSchedule-Add fieldset .time-picker .field-wrapper .form-ctrl {\n  background: transparent;\n  width: inherit !important;\n}\n.classSchedule-Add fieldset .time-picker .hour {\n  width: 75px;\n}\n.classSchedule-Add fieldset .time-picker .minute {\n  width: 75px;\n}\n.classSchedule-Add fieldset .time-picker .meridian {\n  width: 100px;\n}\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n/* ========================================================================================= */\n.courses-list-table tr td:first-child {\n  text-align: left;\n  padding: 10px;\n  width: 20px;\n}\n.edit-view {\n  display: none;\n}\n.edit-view .radio-options {\n  margin-top: 0;\n}\n.edit-view .field-wrapper {\n  width: 130px;\n  padding-top: 0;\n  margin: 0 auto;\n}\n.edit-view .field-wrapper .form-ctrl {\n  padding: 0;\n  height: 28px;\n  border-bottom: solid 1px #0060a3;\n}\n.edit-view .field-wrapper.datePickerBox:after {\n  top: 2px;\n}\n.edit-view .radio-options > div {\n  margin-bottom: 0;\n}\n.data-view {\n  display: block;\n}\n.edit-mod .edit-view {\n  display: block;\n}\n.edit-mod .data-view {\n  display: none;\n}\n.common-tab {\n  padding-top: 5px;\n}\n.common-tab ul {\n  font-size: 0;\n}\n.common-tab ul li {\n  margin-right: 1px;\n  display: inline-block;\n  width: 19%;\n  max-width: 158px;\n}\n.common-tab ul li a {\n  display: block;\n  padding: 10px 5px;\n  background: #eff7ff;\n  border: 1px solid #cccdcd;\n  color: #0084f6;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n}\n.common-tab ul li.active a, .common-tab ul li:hover a {\n  background: #0084f6;\n  color: #fff;\n  border-color: #0084f6;\n  font-weight: normal;\n}\n.edit-icon,\n.view-icon {\n  margin-right: 5px;\n}\n.create-standard-field {\n  margin-bottom: 10px;\n}\n.filter-for-courses label {\n  margin-top: 15px;\n  display: block;\n}\n.filter-for-courses .form-btn-head {\n  width: 30px;\n  height: 30px;\n  background: url('search.svg') no-repeat center center;\n  background-size: 20px 20px;\n  margin-top: 2px;\n  cursor: pointer;\n  margin-right: 20px;\n  filter: grayscale(100%);\n}\n.filter-search > div {\n  margin-bottom: 0;\n}\n.filter-search .export-print {\n  margin-top: 6px;\n}\n.course-second .filter-for-courses {\n  margin-top: 0;\n}\n.course-second .filter-search {\n  margin-bottom: 0;\n}\n.course-second .filter-for-courses label {\n  margin-top: 10px;\n}\n.edit-view-btn > div {\n  display: inline-block;\n  margin: 0 5px;\n}\n.btn-new {\n  float: right;\n}\n.add-edit {\n  margin-bottom: 0;\n  margin-top: 20px;\n}\n.add-edit i {\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 17px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 22px;\n}\n.create-standard-form {\n  margin: 10px 0;\n  padding: 10px 20px 20px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .field-checkbox-wrapper {\n  margin-top: 15px;\n  background: transparent;\n}\n.create-standard-form .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #777;\n}\n.create-standard-form .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.create-standard-form .field-checkbox-wrapper .form-checkbox + label:after {\n  transform: scale(0.7);\n}\n.create-standard-form .field-checkbox-wrapper .form-checkbox + label:before {\n  transform: rotate(-45deg) scale(0.7);\n}\n.create-standard-form .field-wrapper {\n  margin-top: -10px;\n}\n.create-standard-form .field-wrapper label {\n  top: 25px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc;\n}\n.create-standard-form p {\n  margin-top: 5px;\n  font-size: 10px;\n  color: #979797;\n}\n.btn {\n  background: #0084f6;\n  color: white;\n  border-radius: 4px;\n}\n.create-cancel-small {\n  margin-top: 10px;\n}\n.create-cancel-small .btn {\n  font-size: 14px;\n  font-weight: normal;\n  height: 36px;\n}\ntr {\n  border: none;\n}\nth {\n  background-color: #e0eaec !important;\n}\n.edit-view-of-couse > tr > td {\n  padding: 0 !important;\n}\n.course-list-edit {\n  background: #fff;\n  padding: 20px;\n  box-shadow: 0 0 1px 1px #c6c4c4 inset;\n  max-height: 200px;\n  overflow: auto;\n}\n.course-list-edit .evoc-box {\n  padding: 10px;\n}\n.course-list-edit .evoc-box .field-checkbox-wrapper {\n  background: transparent;\n}\n.course-list-edit .evoc-box .field-checkbox-wrapper label span {\n  font-size: 13px;\n  font-weight: 600;\n  top: -3px;\n  position: relative;\n}\n.ce-list-top {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.ce-list-top label {\n  font-weight: 400;\n}\n.ce-list-top span {\n  font-weight: 600;\n  margin: 0 5px;\n}\n.ce-list-bottom .table-responsive tbody tr th {\n  background: #d8d8d8;\n  font-weight: 600;\n  font-size: 14px;\n  color: #333;\n  padding: 5px 10px;\n  text-align: left;\n}\n.ce-list-bottom .table-responsive tbody tr th:last-child {\n  width: 200px;\n  text-align: center;\n}\n.ce-list-bottom .table-responsive tbody tr th:first-child {\n  width: 100px;\n}\n.ce-list-bottom .table-responsive tbody tr td {\n  padding: 7px 10px;\n  background: #fff;\n  font-size: 12px;\n  text-align: left;\n  border-bottom: 1px solid #ededed;\n}\n.ce-list-bottom .table-responsive tbody tr td:last-child {\n  text-align: center;\n}\n.ce-list-bottom .table-responsive tbody tr:hover td {\n  background: #fff;\n}\n.ce-list-bottom .table-responsive tbody tr:last-child td {\n  border-bottom: 0;\n}\n.ce-list-bottom .field-checkbox-wrapper .form-checkbox + label:before {\n  transform: scale(0.7) rotate(-45deg);\n}\n.ce-list-bottom .field-checkbox-wrapper .form-checkbox + label:after {\n  transform: scale(0.6);\n}\n.delete-btn a {\n  color: #f44336;\n}\n.delete-btn a i {\n  font-size: 18px !important;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.close-accor {\n  float: right;\n  width: 24px;\n  font-size: 31px;\n  height: 24px;\n  text-align: center;\n  border: none;\n  border-radius: 50%;\n  line-height: 16px;\n  margin-right: 4px;\n  margin-top: 5px;\n  cursor: pointer;\n  color: #0084f6;\n  font-weight: 400;\n}\n.schedule-class-box .filter-box .field-wrapper {\n  margin-top: -10px;\n}\n.schedule-class {\n  margin-top: 20px;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.schedule-class .btn {\n  font-weight: 600;\n  font-size: 13px;\n  height: 30px;\n}\n.schedule-class .schedule-class-left {\n  padding-top: 10px;\n}\n.schedule-class .schedule-class-left label {\n  font-weight: 600;\n  margin-right: 15px;\n}\n.view-tab li {\n  display: inline-block;\n  margin-right: 0;\n}\n.view-tab li .btn {\n  margin-left: 0;\n  height: 25px;\n  line-height: 12px;\n  font-weight: normal;\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.view-c-detail .filter-search {\n  margin-bottom: 0;\n}\n.view-c-detail .filter-search .export-print {\n  margin-bottom: 0;\n}\n.view-c-detail .vcd-l {\n  padding-top: 10px;\n}\n.view-c-detail .vcd-l label {\n  font-weight: 600;\n  font-size: 15px;\n}\n.calender-course {\n  position: relative;\n}\n.calender-course .c-control {\n  position: absolute;\n  width: 30px;\n  height: 100%;\n  background: #efefef;\n  border: 1px solid #cccccc;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.calender-course .c-control.cal-left {\n  left: 0;\n  top: 0;\n  background: url('left_arrow.svg') no-repeat center center;\n  background-size: 11px;\n}\n.calender-course .c-control.cal-left:hover {\n  border: 1px solid #0084f6;\n}\n.calender-course .c-control.cal-right {\n  right: 0;\n  top: 0;\n  background: url('right_arrow.svg') no-repeat center center;\n  background-size: 11px;\n}\n.calender-course .c-control.cal-right:hover {\n  border: 1px solid #0084f6;\n}\n.calender-course ul {\n  text-align: center;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.calender-course ul li {\n  display: inline-block;\n  padding: 5px 10px;\n  border: 1px solid #f0f0f0;\n  width: 14%;\n  background: #efefef;\n  vertical-align: top;\n}\n.calender-course ul li span.c-date {\n  font-size: 24px;\n  color: #0084f6;\n}\n.calender-course ul li.active {\n  background: #ddedfd;\n  border: 1px solid #ccc;\n}\n.class-cancel {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  text-align: center;\n  line-height: 10px;\n  font-size: 11px;\n  color: #fff;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.class-cancel.blue {\n  background: #0084f6;\n}\n.class-cancel.red {\n  background: red;\n}\n.class-cancel.yellow {\n  background: #f8b238;\n}\n.exam-is {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #f8b238;\n  vertical-align: middle;\n}\n.class-is {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #0084f6;\n  vertical-align: middle;\n}\n.calender-class-detail > div:last-child {\n  padding-top: 5px;\n}\n.calender-class-detail > div:last-child span {\n  margin-left: 5px;\n}\n.calender-view1 {\n  max-height: 260px;\n  overflow: hidden;\n}\n.calender-view1 th {\n  padding: 10px;\n  font-size: 13px;\n  text-align: center;\n}\n.calender-view1 .table-responsive {\n  margin-top: 10px;\n  max-height: 250px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.calender-view1 .table-accor-head .open-accor {\n  display: block;\n}\n.calender-view1 .table-accor-head .close-accor {\n  display: none;\n}\n.calender-view1 .table-accor-head.active .accordian-heading .open-accor {\n  display: none;\n}\n.calender-view1 .table-accor-head.active .accordian-heading .close-accor {\n  display: block;\n}\n.calender-view1 .table-accor-head td {\n  padding: 0;\n  background: #fff;\n}\n.calender-view1 .accordian-heading {\n  margin: 0;\n  padding: 3px !important;\n  color: #444;\n  border: 1px solid #eaecee;\n  border-radius: 20px;\n  margin: 4px 0 2px;\n  background: #e6f2fe;\n  text-align: left;\n}\n.calender-view1 .accordian-heading .headingDiv .close-accor,\n.calender-view1 .accordian-heading .headingDiv .open-accor {\n  float: left;\n}\n.calender-view1 .accordian-heading .headingDiv .close-accor {\n  width: 18px;\n  height: 18px;\n  line-height: 15px;\n  margin-top: 0;\n}\n.calender-view1 .accordian-heading .headingDiv .open-accor {\n  width: 18px;\n  height: 18px;\n  line-height: 16px;\n  margin-top: 0;\n}\n.calender-view1 .accordian-heading .headingDiv .date-c {\n  font-size: 13px;\n  line-height: 20px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.calender-view1 .accordian-heading .headingDiv .delete-icon {\n  font-size: 18px;\n  color: #f44336;\n  margin-left: 10px;\n  margin-right: 9px;\n  cursor: pointer;\n}\n.calender-view1 .accordian-heading .headingDiv .delete-icon svg {\n  width: 15px;\n  vertical-align: top;\n  display: inline-block;\n  margin-top: 3px;\n}\n.calender-view1 .accordian-heading .headingDiv .delete-icon svg line {\n  stroke-width: 2;\n}\n.delete-btn svg {\n  width: 15px;\n  vertical-align: top;\n  display: inline-block;\n  margin-top: 3px;\n}\n.delete-btn svg line {\n  stroke-width: 2;\n}\n.mail-notification {\n  width: 20px;\n  height: 20px;\n  background: url('mial_notification.svg') no-repeat;\n  cursor: pointer;\n  display: inline-block;\n}\n.mail-notify {\n  width: 20px;\n  height: 20px;\n  background: url('mail_notify.svg') no-repeat;\n  cursor: pointer;\n  display: inline-block;\n}\n.reschedule-icon {\n  width: 20px;\n  height: 20px;\n  background: url('reschedule_class.svg') no-repeat;\n  cursor: pointer;\n  display: inline-block;\n}\n.action-box {\n  text-align: right;\n  width: 115px;\n  float: right;\n}\n.action-box .delete-btn {\n  font-size: 18px;\n  color: #f44336;\n}\n.action-box span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 8px 0 0;\n  cursor: pointer;\n}\n.action-box .edit-icon {\n  width: 19px;\n  height: 16px;\n}\n.tick-mark1 {\n  width: 15px;\n  height: 6px;\n  border-left: 2px solid green;\n  border-bottom: 2px solid green;\n  transform: rotate(-45deg);\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 1px;\n}\n.ledgend-footer {\n  margin-top: 15px;\n}\n.ledgend-footer label {\n  font-weight: 600;\n  margin-right: 16px;\n}\n.ledgend-footer div {\n  margin-right: 20px;\n  font-size: 11px;\n}\n.ledgend-footer div span {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 3px;\n}\n.date-arrow {\n  position: relative;\n}\n.date-arrow div {\n  position: relative;\n}\n.date-arrow div span {\n  background: #fff;\n  display: inline-block;\n  padding: 4px 20px;\n  z-index: 1;\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n}\n.date-arrow div:after {\n  position: absolute;\n  left: 20px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  content: \"\\f104\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  width: 5px;\n  height: 16px;\n}\n.date-arrow div:before {\n  position: absolute;\n  right: 20px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  content: \"\\f105\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  width: 5px;\n  height: 16px;\n}\n.date-arrow:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20px;\n  margin: auto;\n  width: 88%;\n  height: 0;\n  border-bottom: 1px solid #ccc;\n}\n.calender-view1.cal-view-2 .accordian-heading h4 .close-accor,\n.calender-view1.cal-view-2 .accordian-heading h4 .open-accor {\n  float: right;\n  margin-right: 0;\n}\n.calender-view1.cal-view-2 td {\n  font-weight: 600;\n  font-size: 14px;\n  padding: 0;\n}\n.calender-view1.cal-view-2 td:first-child {\n  text-align: left;\n}\n.calender-view1.cal-view-2 td .accordian-heading h4 .date-c {\n  color: #004a7e;\n  font-size: 14px;\n}\n.new-action > div {\n  width: 100%;\n  box-sizing: border-box;\n}\n.new-action > div span {\n  margin: 0;\n}\n.new-action > div > div {\n  width: 50%;\n  box-sizing: border-box;\n  border-right: 1px solid #ccc;\n  text-align: center;\n  padding: 5px;\n}\n.new-action > div > div:last-child {\n  border-right: 1px solid transparent;\n}\n.new-action > div:first-child {\n  border-bottom: 1px solid #ccc;\n}\n.cal-view-2 .action-box,\n.cal-view-2 .new-action {\n  width: 65px;\n}\n.cal-view-2 .action-box {\n  padding-right: 5px;\n  margin: 5px 0;\n}\n.read-more-view {\n  font-size: 12px;\n  margin-top: 10px;\n  color: #004a7e;\n}\n.new-tick-mark {\n  height: 72px;\n  width: 35px;\n  border-right: 2px solid #fff;\n  margin-right: 8px;\n  text-align: center;\n  position: relative;\n}\n.new-tick-mark .tick-mark1 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  right: 0;\n  left: 0;\n}\n.tick-mark-new > div {\n  display: inline-block;\n  vertical-align: middle;\n}\n.course-detail-section {\n  margin-top: 30px;\n}\n.course-detail-section .cd-s {\n  font-size: 13px;\n  font-weight: 600;\n}\n.course-detail-section label {\n  margin-right: 15px;\n}\n.course-detail-section span {\n  font-weight: 600;\n  margin-right: 10px;\n}\n.schedule-class-inner {\n  padding: 20px 15px 25px;\n  background: #efefef;\n}\n.schedule-class-inner .form-ctrl {\n  border-bottom: 1px solid #ccc;\n  background: transparent;\n}\n.schedule-class-inner .s-c-1 {\n  font-weight: 600;\n  font-weight: 14px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.schedule-class-inner .choose-class-type {\n  margin-top: 20px;\n}\n.schedule-class-inner .choose-class-type .field-radio-wrapper {\n  display: inline-block;\n  margin-right: 20px;\n}\n.schedule-class-inner .select-days {\n  margin-top: 20px;\n}\n.schedule-class-inner .select-days span {\n  float: left;\n}\n.schedule-class-inner .select-days .field-checkbox-wrapper {\n  float: left;\n  margin-right: 2%;\n  background: transparent;\n  margin-left: 2%;\n}\n.schedule-class-inner .select-days .field-checkbox-wrapper .form-checkbox + label:after {\n  transform: scale(0.7);\n}\n.schedule-class-inner .select-days .field-checkbox-wrapper .form-checkbox + label:before {\n  transform: rotate(-45deg) scale(0.7);\n}\n.create-class-schedule h4 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.s-form-control {\n  margin-top: 30px;\n  border-top: 1px solid #ccc;\n}\n@media only screen and (min-width: 1000px) and (max-width: 1200px) {\n  .calender-course ul li {\n    width: 12%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 999px) {\n  .calender-course ul li {\n    width: 12%;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .calender-class-detail > div {\n    width: 100%;\n    text-align: center;\n  }\n  .calender-class-detail > div:last-child span {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .common-tab ul li {\n    margin-right: 0;\n    width: 20%;\n  }\n  .common-tab ul li a {\n    padding: 5px;\n    font-size: 12px;\n  }\n  .filter-for-courses label {\n    margin-top: 0;\n    margin-bottom: 5px;\n  }\n  .filter-for-courses .filter-search .btn {\n    margin-right: 0;\n    margin-left: 10px;\n  }\n  .radio-options {\n    text-align: left;\n  }\n  .radio-options .field-radio-wrapper {\n    margin-bottom: 10px !important;\n  }\n  .radio-options .field-radio-wrapper:last-child {\n    margin-bottom: 0 !important;\n  }\n  .create-standard-form {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .create-cancel-small .btn {\n    margin-right: 0;\n    margin-left: 10px;\n  }\n  .schedule-class-box .filter-box .fullBlue.btn {\n    margin-top: 15px;\n    margin-bottom: 0;\n  }\n  .schedule-class .schedule-class-left label {\n    display: block;\n    margin-bottom: 5px;\n  }\n  .schedule-class .schedule-class-left span {\n    display: block;\n    margin-bottom: 10px;\n  }\n  .schedule-class .btn {\n    margin-right: 0;\n    margin-left: 10px;\n    margin-bottom: 0;\n  }\n  .view-tab li .btn {\n    margin-right: 0;\n    margin-bottom: 0;\n  }\n  .calender-course ul li {\n    padding: 5px;\n    width: 14%;\n    margin-bottom: 5px;\n  }\n  .ledgend-footer label {\n    display: block;\n    width: 100%;\n    margin-right: 0;\n    margin-bottom: 10px;\n  }\n  .ledgend-footer div {\n    margin-bottom: 5px;\n  }\n  .cal-view .middle-top .btn {\n    margin-bottom: 0;\n  }\n  .calender-view1 table,\n  .courses-list-table table {\n    min-width: 600px;\n  }\n  .calender-course ul li span.c-date {\n    font-size: 19px;\n  }\n  .date-arrow:after {\n    width: 72%;\n  }\n  .course-detail-section {\n    margin-top: 20px;\n  }\n  .course-detail-section > div {\n    margin-bottom: 5px;\n  }\n  .filter-box {\n    padding: 10px 0;\n  }\n  .popup-btn .btn {\n    font-size: 12px;\n    height: 32px;\n  }\n}\n@media only screen and (max-width: 420px) {\n  .common-tab ul li {\n    width: auto;\n  }\n  .common-tab ul li a {\n    font-size: 10px;\n  }\n  .field-checkbox-wrapper .form-checkbox + label {\n    font-size: 12px;\n  }\n}\n.filter-fields {\n  padding: 0 15px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  position: absolute;\n  width: 100%;\n  box-sizing: border-box;\n  z-index: 1;\n  left: 0;\n  top: 70%;\n  transition: all .3s;\n  visibility: hidden;\n  opacity: 0;\n  box-shadow: 0 2px 1px #e2e0e0;\n}\n.filter-fields .field-wrapper {\n  margin: 15px 0;\n}\n.filter-fields .form-ctrl {\n  background: transparent;\n  font: 400 12px 'Open sans',sans-serif;\n  border-bottom: solid 1px #d2d2d2;\n}\n.filter-fields .btn {\n  margin: 0;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px 12px;\n  height: auto;\n}\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all .5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 50%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all .5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all .5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.radio-main .field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  background: #0084f6;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n}\n.radio-main .field-radio-wrapper label {\n  margin-left: 10px;\n}\n.form-wrapper {\n  background: transparent;\n  margin: 5px 0;\n}\n.form-wrapper.datepicker span {\n  position: absolute;\n  top: 35px;\n  right: 20px;\n  font-weight: 600;\n  font-size: 16px;\n  color: red;\n  cursor: pointer;\n  width: 20px;\n  text-align: center;\n  /* &::before {\n                content: '';\n                background: url('/assets/images/calendar.svg') no-repeat;\n                position: absolute;\n                right: 25px;\n                top: 0px;\n                width: 21px;\n                height: 21px;\n                z-index: 0;\n            } */\n}\n.form-wrapper label {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.77);\n  padding-bottom: 2px;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n}\n.form-wrapper .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding: 8px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n.form-wrapper .side-form-ctrl.bsDatepicker {\n  padding: 5px;\n  width: 100%;\n}\n.form-wrapper.timepick {\n  width: 50%;\n  padding: 1px 0;\n}\n.form-wrapper.timepick .tbox {\n  width: 100%;\n}\n.form-wrapper.timepick .tbox .times {\n  display: inline-block;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding: 8px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl.mins {\n  width: 80px;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl.mers {\n  width: 50px;\n}\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 28px;\n  width: 21px;\n  height: 21px;\n  z-index: 20;\n}\n.rescheduleWrapper {\n  padding: 0 15px;\n}\n.rescheduleWrapper .row {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.rescheduleWrapper .notifyChkbx {\n  margin-top: 10px !important;\n}\n.notifyChkbx {\n  margin-top: 15px;\n}\n.rescheduleTime {\n  display: inline;\n}\n.rescheduleTime label {\n  text-transform: none;\n}\n.rescheduleTime .tbox {\n  padding: 0;\n}\n.rescheduleTime .tbox .times .side-form-ctrl.mins {\n  padding: 0;\n}\n.rescheduleTime .tbox .times .side-form-ctrl.mers {\n  padding: 0;\n}\n.questionInfo {\n  position: relative;\n  left: 40%;\n  top: -20px;\n  height: 20px;\n  width: 20px;\n  z-index: 2;\n}\n.questionInfo.lefts {\n  left: 80%;\n}\n.questionInfo.lefts .tooltip-box-field {\n  color: black;\n  min-height: 22px;\n  width: 140px !important;\n  left: 30px !important;\n  z-index: 1;\n  padding: 5px 10px !important;\n  top: -10px !important;\n}\n.questionInfo.lefts .tooltip-box-field:after {\n  display: none;\n}\n.questionInfo .qInfoIcon {\n  margin-left: 5px;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0 0 1px 0 #ccc inset;\n  color: #888;\n  transition: all .2s linear;\n}\n.questionInfo .qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0 0 1px 0 #0060A3 inset;\n}\n.questionInfo.hover.lefts {\n  left: 80%;\n}\n.questionInfo.hover.lefts .tooltip-box-field {\n  color: black;\n  min-height: 22px;\n  width: 140px !important;\n  left: -35px !important;\n  z-index: 1;\n  padding: 5px 10px !important;\n  top: -30px !important;\n}\n.questionInfo.hover.lefts .tooltip-box-field:after {\n  display: none;\n}\n.editTeacherTd .changeteacher .spanSection {\n  display: inline-flex;\n}\n.editTeacherTd .changeteacher .spanSection .editSection {\n  width: 120px;\n  padding: 0 !important;\n}\n.editTeacherTd .changeteacher .spanSection .editSection .ddnChangeTeacher {\n  height: 25px !important;\n  padding: 0 !important;\n}\n.advancefilter {\n  position: absolute;\n  right: 35px;\n  top: 125px;\n  font-size: 14px;\n  color: #0084f6;\n}\n.advanceDateFilter {\n  display: flex;\n}\n.advanceDateFilter .btn-wrapper {\n  padding-top: 25px;\n}\n.advanceDateFilter .goBack-wrapper {\n  margin: auto;\n}\n.radio-main {\n  display: inline-flex;\n  width: 100%;\n}\n.radio-main .field-radio-wrapper {\n  margin-right: 10px;\n}\n.extra-button {\n  margin-top: 5px;\n  margin-right: 15px;\n}\n.extra-button .btn {\n  padding: 5px;\n  background: #fff;\n  border: 1px solid #ccc;\n  margin-left: 10px;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 600;\n  box-sizing: border-box;\n  height: auto;\n  cursor: pointer;\n  color: #0084f6;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvY291cnNlLWNsYXNzL2NsYXNzLWhvbWUvY2xhc3MtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FDckJ4QjtBRGpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FDbkI1QjtBQXBHQSw4RkFBQTtBQUVBLDhGQUFBO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFxR2Q7QUFsR0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBcUdsQjtBQXZHQTtFQUlJLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsV0FBVztBQXVHZjtBQTdHQTtFQVVJLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBdUdwQjtBQW5IQTtFQWNNLHVCQUF1QjtBQXlHN0I7QUF2SEE7RUFnQlEsaUJBQWlCO0FBMkd6QjtBQXJHQSw4RkFBQTtBQUVBLDhGQUFBO0FBQ0E7RUFDRSxrQkFBa0I7QUF1R3BCO0FBckdBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQXdHckI7QUExR0E7RUFLSSx1QkFBdUI7QUF5RzNCO0FBOUdBO0VBUU0sdUJBQXVCO0FBMEc3QjtBQWxIQTtFQWNNLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFVBQVU7QUF3R2hCO0FBekhBO0VBc0JRLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBdUcvQjtBQS9IQTtFQTJCVSx1QkFBdUI7RUFDdkIseUJBQXlCO0FBd0duQztBQXBJQTtFQWlDUSxXQUFXO0FBdUduQjtBQXhJQTtFQXFDUSxXQUFXO0FBdUduQjtBQTVJQTtFQXlDUSxZQUFZO0FBdUdwQjtBQWpHQSw4RkFBQTtBQUVBLDhGQUFBO0FBRUEsOEZBQUE7QUFFQSw4RkFBQTtBQUVBLDhGQUFBO0FBRUEsOEZBQUE7QUFFQSw4RkFBQTtBQUVBLDhGQUFBO0FBRUEsOEZBQUE7QUFFQSw4RkFBQTtBQUVBO0VBR00sZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0FBd0ZqQjtBQW5GQTtFQUNFLGFBQWE7QUFzRmY7QUF2RkE7RUFJSSxhQUFhO0FBdUZqQjtBQTNGQTtFQVFJLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztBQXVGbEI7QUFqR0E7RUFhTSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdDQUFnQztBQXdGdEM7QUF2R0E7RUFtQk0sUUFBUTtBQXdGZDtBQTNHQTtFQXdCSSxnQkFBZ0I7QUF1RnBCO0FBbkZBO0VBQ0UsY0FBYztBQXNGaEI7QUFuRkE7RUFFSSxjQUFjO0FBcUZsQjtBQXZGQTtFQU1JLGFBQWE7QUFxRmpCO0FBakZBO0VBQ0UsZ0JBQWdCO0FBb0ZsQjtBQXJGQTtFQUlJLFlBQVk7QUFxRmhCO0FBekZBO0VBUU0saUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZ0JBQWdCO0FBcUZ0QjtBQWhHQTtFQWNRLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjRDNLYTtFQzRLYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQXNGeEI7QUEzR0E7RUEyQlUsbUJEcExXO0VDcUxYLFdEdkxLO0VDd0xMLHFCRHRMVztFQ3VMWCxtQkFBbUI7QUFvRjdCO0FBN0VBOztFQUVFLGlCQUFpQjtBQWdGbkI7QUE3RUE7RUFDRSxtQkFBbUI7QUFnRnJCO0FBN0VBO0VBRUksZ0JBQWdCO0VBQ2hCLGNBQWM7QUErRWxCO0FBbEZBO0VBT0ksV0FBVztFQUNYLFlBQVk7RUFDWixxREFBcUY7RUFDckYsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQStFM0I7QUEzRUE7RUFFSSxnQkFBZ0I7QUE2RXBCO0FBL0VBO0VBTUksZUFBZTtBQTZFbkI7QUF6RUE7RUFFSSxhQUFhO0FBMkVqQjtBQTdFQTtFQU1JLGdCQUFnQjtBQTJFcEI7QUFqRkE7RUFVSSxnQkFBZ0I7QUEyRXBCO0FBdkVBO0VBRUkscUJBQXFCO0VBQ3JCLGFBQWE7QUF5RWpCO0FBckVBO0VBQ0UsWUFBWTtBQXdFZDtBQXJFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUF3RWxCO0FBMUVBO0VBS0kseUJEalFpQjtFQ2tRakIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7QUF5RXJCO0FBdkZBO0VBa0JJLHFCQUFxQjtBQXlFekI7QUEzRkE7RUF1Qk0saUJBQWlCO0VBQ2pCLGVBQWU7QUF3RXJCO0FBbkVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBc0UvQjtBQTFFQTtFQU9JLGdCQUFnQjtFQUNoQix1QkFBdUI7QUF1RTNCO0FBL0VBO0VBWVEsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBdUVuQjtBQXJGQTtFQWtCUSxjRDNTYTtBQ2tYckI7QUF6RkE7RUF1Qk0scUJBQXFCO0FBc0UzQjtBQTdGQTtFQTJCTSxvQ0FBb0M7QUFzRTFDO0FBakdBO0VBZ0NJLGlCQUFpQjtBQXFFckI7QUFyR0E7RUFtQ00sU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFzRXRCO0FBM0dBO0VBMENJLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFxRXBDO0FBaEhBO0VBK0NJLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQXFFbEI7QUFsRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQXFFcEI7QUFuRUE7RUFDRSxnQkFBZ0I7QUFzRWxCO0FBdkVBO0VBSUksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0FBdUVoQjtBQXBFQTtFQUNFLFlBQVk7QUF1RWQ7QUFwRUU7RUFDRSxvQ0FBb0M7QUF1RXhDO0FBcEVBO0VBRUkscUJBQXFCO0FBc0V6QjtBQWxFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixjQUFjO0FBcUVoQjtBQTFFQTtFQVFJLGFBQWE7QUFzRWpCO0FBOUVBO0VBV00sdUJBQXVCO0FBdUU3QjtBQWxGQTtFQWVVLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGtCQUFrQjtBQXVFNUI7QUFoRUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0FBbUUvQjtBQXJFQTtFQUtJLGdCQUFnQjtBQW9FcEI7QUF6RUE7RUFTSSxnQkFBZ0I7RUFDaEIsYUFBYTtBQW9FakI7QUFoRUE7RUFLVSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQStEMUI7QUF6RUE7RUFhWSxZQUFZO0VBQ1osa0JBQWtCO0FBZ0U5QjtBQTlFQTtFQWtCWSxZQUFZO0FBZ0V4QjtBQWxGQTtFQXVCVSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBK0QxQztBQTFGQTtFQThCWSxrQkFBa0I7QUFnRTlCO0FBOUZBO0VBb0NZLGdCQUFnQjtBQThENUI7QUFsR0E7RUEwQ1ksZ0JBQWdCO0FBNEQ1QjtBQXRHQTtFQWtESSxvQ0FBb0M7QUF3RHhDO0FBMUdBO0VBc0RJLHFCQUFxQjtBQXdEekI7QUFwREE7RUFFSSxjQUFjO0FBc0RsQjtBQXhEQTtFQUtNLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBdUR2QjtBQWxEQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0RsZW1CO0VDbWVuQixnQkFBZ0I7QUFxRGxCO0FBakRBO0VBR00saUJBQWlCO0FBa0R2QjtBQTdDQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQWdEL0I7QUFwREE7RUFPSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFpRGhCO0FBMURBO0VBYUksaUJBQWlCO0FBaURyQjtBQTlEQTtFQWdCTSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBa0R4QjtBQTNDQTtFQUVJLHFCQUFxQjtFQUNyQixlQUFlO0FBNkNuQjtBQWhEQTtFQU1NLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBOEN2QjtBQXpDQTtFQUVJLGdCQUFnQjtBQTJDcEI7QUE3Q0E7RUFLTSxnQkFBZ0I7QUE0Q3RCO0FBakRBO0VBVUksaUJBQWlCO0FBMkNyQjtBQXJEQTtFQWFNLGdCQUFnQjtFQUNoQixlQUFlO0FBNENyQjtBQXZDQTtFQUNFLGtCQUFrQjtBQTBDcEI7QUEzQ0E7RUFJSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixzQkFBc0I7QUEyQzFCO0FBckRBO0VBYU0sT0FBTztFQUNQLE1BQU07RUFDTix5REFBeUY7RUFDekYscUJBQXFCO0FBNEMzQjtBQTVEQTtFQW1CUSx5QkQ3akJhO0FDMG1CckI7QUFoRUE7RUF3Qk0sUUFBUTtFQUNSLE1BQU07RUFDTiwwREFBMEY7RUFDMUYscUJBQXFCO0FBNEMzQjtBQXZFQTtFQThCUSx5QkR4a0JhO0FDcW5CckI7QUEzRUE7RUFvQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUEyQ3ZCO0FBakZBO0VBeUNNLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBNEN6QjtBQTFGQTtFQWlEUSxlQUFlO0VBQ2YsY0Q1bEJhO0FDeW9CckI7QUEvRkE7RUFzRFEsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQTZDOUI7QUF2Q0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtBQTBDeEI7QUFuREE7RUFZSSxtQkRubkJpQjtBQzhwQnJCO0FBdkRBO0VBZ0JJLGVBQWU7QUEyQ25CO0FBM0RBO0VBb0JJLG1CQUFtQjtBQTJDdkI7QUF2Q0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQTBDeEI7QUF2Q0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJEN29CbUI7RUM4b0JuQixzQkFBc0I7QUEwQ3hCO0FBdkNBO0VBRUksZ0JBQWdCO0FBeUNwQjtBQTNDQTtFQUtNLGdCQUFnQjtBQTBDdEI7QUFyQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBd0NsQjtBQTFDQTtFQUlJLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBMEN0QjtBQWhEQTtFQVNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQTJDdEI7QUF2REE7RUFpQk0sY0FBYztBQTBDcEI7QUEzREE7RUFxQk0sYUFBYTtBQTBDbkI7QUEvREE7RUEyQlUsYUFBYTtBQXdDdkI7QUFuRUE7RUErQlUsY0FBYztBQXdDeEI7QUF2RUE7RUFzQ0ksVUFBVTtFQUNWLGdCQUFnQjtBQXFDcEI7QUE1RUE7RUEyQ0ksU0FBUztFQUNULHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQXFDcEI7QUF2RkE7O0VBdURRLFdBQVc7QUFxQ25CO0FBNUZBO0VBMkRRLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7QUFxQ3JCO0FBbkdBO0VBa0VRLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7QUFxQ3JCO0FBMUdBO0VBeUVRLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQXFDeEI7QUFqSEE7RUFnRlEsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFxQ3ZCO0FBekhBO0VBdUZVLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7QUFzQ3pCO0FBaElBO0VBNkZZLGVBQWU7QUF1QzNCO0FBL0JBO0VBRUksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtBQWlDbkI7QUF0Q0E7RUFRTSxlQUFlO0FBa0NyQjtBQTdCQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0RBQWtGO0VBQ2xGLGVBQWU7RUFDZixxQkFBcUI7QUFnQ3ZCO0FBN0JBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0Q0FBNEU7RUFDNUUsZUFBZTtFQUNmLHFCQUFxQjtBQWdDdkI7QUE3QkE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlEQUFpRjtFQUNqRixlQUFlO0VBQ2YscUJBQXFCO0FBZ0N2QjtBQTdCQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtBQWdDZDtBQW5DQTtFQU1JLGVBQWU7RUFDZixjQUFjO0FBaUNsQjtBQXhDQTtFQVdJLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFpQ25CO0FBL0NBO0VBa0JJLFdBQVc7RUFDWCxZQUFZO0FBaUNoQjtBQTdCQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0FBZ0NqQjtBQTdCQTtFQUNFLGdCQUFnQjtBQWdDbEI7QUFqQ0E7RUFJSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBaUN0QjtBQXRDQTtFQVNJLGtCQUFrQjtFQUNsQixlQUFlO0FBaUNuQjtBQTNDQTtFQWFNLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBa0N2QjtBQTdCQTtFQUNFLGtCQUFrQjtBQWdDcEI7QUFqQ0E7RUFJSSxrQkFBa0I7QUFpQ3RCO0FBckNBO0VBT00sZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBa0N4QjtBQS9DQTtFQWlCTSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLFVBQVU7RUFDVixZQUFZO0FBa0NsQjtBQS9EQTtFQWlDTSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLFVBQVU7RUFDVixZQUFZO0FBa0NsQjtBQS9FQTtFQWtESSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULDZCQUE2QjtBQWlDakM7QUE1QkE7O0VBR0ksWUFBWTtFQUNaLGVBQWU7QUE4Qm5CO0FBbENBO0VBUUksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0FBOEJkO0FBeENBO0VBYU0sZ0JBQWdCO0FBK0J0QjtBQTVDQTtFQWlCTSxjQUFjO0VBQ2QsZUFBZTtBQStCckI7QUExQkE7RUFFSSxXQUFXO0VBQ1gsc0JBQXNCO0FBNEIxQjtBQS9CQTtFQU1NLFNBQVM7QUE2QmY7QUFuQ0E7RUFVTSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsWUFBWTtBQTZCbEI7QUEzQ0E7RUFpQlEsbUNBQW1DO0FBOEIzQztBQS9DQTtFQXNCTSw2QkFBNkI7QUE2Qm5DO0FBeEJBOztFQUdJLFdBQVc7QUEwQmY7QUE3QkE7RUFPSSxrQkFBa0I7RUFDbEIsYUFBYTtBQTBCakI7QUF0QkE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUF5QmhCO0FBdEJBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUF5QnBCO0FBL0JBO0VBU0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLFFBQVE7RUFDUixPQUFPO0FBMEJYO0FBdEJBO0VBRUkscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQXdCMUI7QUFuQkE7RUFDRSxnQkFBZ0I7QUFzQmxCO0FBdkJBO0VBSUksZUFBZTtFQUNmLGdCQUFnQjtBQXVCcEI7QUE1QkE7RUFTSSxrQkFBa0I7QUF1QnRCO0FBaENBO0VBYUksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQXVCdEI7QUFuQkE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBc0JyQjtBQXhCQTtFQUtJLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUF1QjNCO0FBN0JBO0VBVUksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsNkJBQTZCO0FBdUJqQztBQXBDQTtFQWlCSSxnQkFBZ0I7QUF1QnBCO0FBeENBO0VBb0JNLHFCQUFxQjtFQUNyQixrQkFBa0I7QUF3QnhCO0FBN0NBO0VBMEJJLGdCQUFnQjtBQXVCcEI7QUFqREE7RUE2Qk0sV0FBVztBQXdCakI7QUFyREE7RUFpQ00sV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZUFBZTtBQXdCckI7QUE1REE7RUF1Q1EscUJBQXFCO0FBeUI3QjtBQWhFQTtFQTJDUSxvQ0FBb0M7QUF5QjVDO0FBbkJBO0VBRUksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBcUJwQjtBQWpCQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFvQjVCO0FBbEJBO0VBQ0U7SUFDRSxVQUFVO0VBcUJaO0FBQ0Y7QUFuQkE7RUFDRTtJQUNFLFVBQVU7RUFzQlo7QUFDRjtBQXBCQTtFQUNFO0lBRUksV0FBVztJQUNYLGtCQUFrQjtFQXNCdEI7RUF6QkE7SUFPSSxTQUFTO0VBcUJiO0FBQ0Y7QUFsQkE7RUFDRTtJQUNFLGVBQWU7SUFDZixVQUFVO0VBcUJaO0VBdkJBO0lBS0ksWUFBWTtJQUNaLGVBQWU7RUFxQm5CO0VBakJBO0lBRUksYUFBYTtJQUNiLGtCQUFrQjtFQWtCdEI7RUFyQkE7SUFRTSxlQUFlO0lBQ2YsaUJBQWlCO0VBZ0J2QjtFQVhBO0lBQ0UsZ0JBQWdCO0VBYWxCO0VBZEE7SUFJSSw4QkFBOEI7RUFhbEM7RUFqQkE7SUFPTSwyQkFBMkI7RUFhakM7RUFSQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFVbEI7RUFQQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFTbkI7RUFOQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFRbEI7RUFMQTtJQUVJLGNBQWM7SUFDZCxrQkFBa0I7RUFNdEI7RUFUQTtJQU9JLGNBQWM7SUFDZCxtQkFBbUI7RUFLdkI7RUFEQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBR2xCO0VBQUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBRWxCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtFQUVBO0lBRUksY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0VBRHZCO0VBSkE7SUFTSSxrQkFBa0I7RUFGdEI7RUFNQTtJQUdNLGdCQUFnQjtFQU50QjtFQVdBOztJQUdJLGdCQUFnQjtFQVZwQjtFQWNBO0lBQ0UsZUFBZTtFQVpqQjtFQWVBO0lBQ0UsVUFBVTtFQWJaO0VBZ0JBO0lBQ0UsZ0JBQWdCO0VBZGxCO0VBYUE7SUFJSSxrQkFBa0I7RUFkdEI7RUFrQkE7SUFDRSxlQUFlO0VBaEJqQjtFQW1CQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBakJkO0FBQ0Y7QUFtQkE7RUFDRTtJQUNFLFdBQVc7RUFoQmI7RUFlQTtJQUlJLGVBQWU7RUFoQm5CO0VBb0JBO0lBQ0UsZUFBZTtFQWxCakI7QUFDRjtBQXFCQTtFQUNFLG9CQUFvQjtFQUNwQixnQkR0dkNhO0VDdXZDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLE9BQU87RUFDUCxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsNkJBQTZCO0FBbEIvQjtBQUtBO0VBZ0JJLGNBQWM7QUFqQmxCO0FBcUJBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyxnQ0FBZ0M7QUFsQmxDO0FBcUJBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFsQmQ7QUFxQkEsZUFBQTtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixRQUFRO0VBQ1IsT0FBTztFQUNQLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFLViwyQkFBMkI7QUFuQjdCO0FBR0E7RUFtQkksY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFDUixPQUFPO0VBQ1AsU0FBUztFQUNULFlBQVk7QUFsQmhCO0FBc0JBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQW5CbEI7QUFjQTtFQVFJLG1CQUFtQjtFQUNuQixlQUFlO0FBbEJuQjtBQVNBO0VBYUksbUJBQW1CO0VBQ25CLGdCQUFnQjtBQWxCcEI7QUFzQkE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtBQW5CZjtBQVFBO0VBY0ksV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtBQWxCWjtBQUNBO0VBcUJJLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVk7QUFsQmhCO0FBTkE7RUE0QkksT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztBQWxCYjtBQWJBO0VBbUNJLFdBQVc7QUFsQmY7QUFqQkE7RUFzQ00sZUFBZTtFQUNmLGlCQUFpQjtBQWpCdkI7QUF0QkE7RUE2Q00sZURuM0NlO0FDZzJDckI7QUF3QkE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQXJCckI7QUF3QkE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBckJyQjtBQXlCQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtFQUtsQiwyQkFBMkI7QUF0QjdCO0FBT0E7RUFrQkksWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0FBckJsQjtBQXlCQTtFQUNFLE9BQU87RUFDUCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFLWiwyQkFBMkI7QUF0QjdCO0FBeUJBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0FBdEJaO0FBeUJBO0VBQ0UsU0FBUztBQXRCWDtBQXlCQTtFQUdNLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7QUF4QmQ7QUFlQTtFQWFNLGlCQUFpQjtBQXhCdkI7QUE4QkE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtBQTNCZjtBQXlCQTtFQU1NLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCOzs7Ozs7Ozs7ZUFuQlM7QUFDZjtBQUdBO0VBNkJJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUNBQW1DO0FBNUJ2QztBQU5BO0VBc0NJLGlCQUFpQjtFQUNqQiwrQ0FBeUQ7RUFDekQsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUE1QmhCO0FBaEJBO0VBK0NNLFlBQVk7RUFDWixXQUFXO0FBM0JqQjtBQXJCQTtFQXFESSxVQUFVO0VBQ1YsY0FBYztBQTVCbEI7QUExQkE7RUF5RE0sV0FBVztBQTNCakI7QUE5QkE7RUE0RFEscUJBQXFCO0FBMUI3QjtBQWxDQTtFQWdFUSxpQkFBaUI7RUFDakIsK0NBQXlEO0VBQ3pELFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBMUJwQjtBQTVDQTtFQXlFVSxXQUFXO0FBekJyQjtBQWhEQTtFQTZFVSxXQUFXO0FBekJyQjtBQWdDQTtFQUNJLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBN0JmO0FBZ0NBO0VBQ0UsZUFBZTtBQTdCakI7QUE0QkE7RUFJSSxlQUFlO0VBQ2Ysa0JBQWtCO0FBNUJ0QjtBQXVCQTtFQVNJLDJCQUEyQjtBQTVCL0I7QUFnQ0E7RUFDRSxnQkFBZ0I7QUE3QmxCO0FBZ0NBO0VBQ0UsZUFBZTtBQTdCakI7QUE0QkE7RUFJSSxvQkFBb0I7QUE1QnhCO0FBd0JBO0VBUUksVUFBVTtBQTVCZDtBQW9CQTtFQWFVLFVBQVU7QUE3QnBCO0FBZ0JBO0VBaUJVLFVBQVU7QUE3QnBCO0FBb0NBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0FBakNaO0FBMkJBO0VBU0ksU0FBUztBQWhDYjtBQXVCQTtFQVlNLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQS9CM0I7QUFhQTtFQXFCUSxhQUFhO0FBOUJyQjtBQVNBO0VBMkJJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsMEJBQTBCO0FBaEM5QjtBQVRBO0VBNENNLHFCRHpuRFk7RUMwbkRaLG1DQUFzQztBQS9CNUM7QUFkQTtFQW1ETSxTQUFTO0FBakNmO0FBbEJBO0VBc0RRLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQWhDN0I7QUE1QkE7RUErRFUsYUFBYTtBQS9CdkI7QUFzQ0E7RUFHTSxvQkFBb0I7QUFyQzFCO0FBa0NBO0VBTVEsWUFBWTtFQUNaLHFCQUFxQjtBQXBDN0I7QUE2QkE7RUFVVSx1QkFBdUI7RUFDdkIscUJBQXFCO0FBbkMvQjtBQTBDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixjQUFjO0FBdkNoQjtBQXlDQTtFQUNFLGFBQWE7QUF0Q2Y7QUFxQ0E7RUFJSSxpQkFBaUI7QUFyQ3JCO0FBaUNBO0VBUUksWUFBWTtBQXJDaEI7QUF5Q0E7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztBQXRDYjtBQW9DQTtFQUtJLGtCQUFrQjtBQXJDdEI7QUF5Q0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBdENwQjtBQW9DQTtFQUtJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUVoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0FBckNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9jcmVhdGUtY291cnNlL2NvdXJzZS1jbGFzcy9jbGFzcy1ob21lL2NsYXNzLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2Nzc1wiO1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmhlYWRlci1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2FsLXZpZXcge1xuICBtYXJnaW46IDAgMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgOjotd2Via2l0LXNjcm9sbGJhcntcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG59XG5cbiAgLmNvbW1vbi1zZWFyY2gtZmlsdGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDRkNTtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDA7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5mb3JtLWN0cmx7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jbGFzc1NjaGVkdWxlLUFkZCB7XG4gIHBhZGRpbmc6IDE1cHggNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG5cbiAgLmZpZWxkLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgLmZvcm0tY3RybCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cblxuICBmaWVsZHNldCB7XG4gICAgbGVnZW5kIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgdG9wOiAtMTJweDtcbiAgICB9XG5cbiAgICAudGltZS1waWNrZXIge1xuICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHdpZHRoOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmhvdXIge1xuICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgIH1cblxuICAgICAgLm1pbnV0ZSB7XG4gICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgfVxuXG4gICAgICAubWVyaWRpYW4ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5jb3Vyc2VzLWxpc3QtdGFibGUge1xuICB0ciB7XG4gICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLmVkaXQtdmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgLnJhZGlvLW9wdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAuZmllbGQtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmZvcm0tY3RybCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMwMDYwYTM7XG4gICAgfVxuXG4gICAgJi5kYXRlUGlja2VyQm94OmFmdGVyIHtcbiAgICAgIHRvcDogMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5yYWRpby1vcHRpb25zID4gZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cbi5kYXRhLXZpZXcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmVkaXQtbW9kIHtcbiAgLmVkaXQtdmlldyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZGF0YS12aWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5jb21tb24tdGFiIHtcbiAgcGFkZGluZy10b3A6IDVweDtcblxuICB1bCB7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuXG4gICAgbGkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTklO1xuICAgICAgbWF4LXdpZHRoOiAxNThweDtcblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VmZjdmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2RjZDtcbiAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGEge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmVkaXQtaWNvbixcbi52aWV3LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNyZWF0ZS1zdGFuZGFyZC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5maWx0ZXItZm9yLWNvdXJzZXMge1xuICBsYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5mb3JtLWJ0bi1oZWFkIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZWFyY2guc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICB9XG59XG5cbi5maWx0ZXItc2VhcmNoIHtcbiAgJiA+IGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5leHBvcnQtcHJpbnQge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxufVxuXG4uY291cnNlLXNlY29uZCB7XG4gIC5maWx0ZXItZm9yLWNvdXJzZXMge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAuZmlsdGVyLXNlYXJjaCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5maWx0ZXItZm9yLWNvdXJzZXMgbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cblxuLmVkaXQtdmlldy1idG4ge1xuICAmID4gZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgfVxufVxuXG4uYnRuLW5ldyB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmFkZC1lZGl0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICBpIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29tbW9uLWJsdWU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIGhlaWdodDogMTdweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmV4cGVuZC1ib3gge1xuICAgIGkge1xuICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICB9XG59XG5cbi5jcmVhdGUtc3RhbmRhcmQtZm9ybSB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XG5cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAmK2xhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgIH1cblxuICAgICAgJjpjaGVja2VkK2xhYmVsIHtcbiAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgfVxuXG4gICAgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMC43KTtcbiAgICB9XG4gIH1cblxuICAuZmllbGQtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG5cbiAgICBsYWJlbCB7XG4gICAgICB0b3A6IDI1cHg7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWN0cmwge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjY2NjO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogIzk3OTc5NztcbiAgfVxufVxuLmJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNyZWF0ZS1jYW5jZWwtc21hbGwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxufVxudHJ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuICB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlYWVjICFpbXBvcnRhbnQ7XG59XG4vLyBjc3MgZm9yIGVkaXQgLmNvdXJzZVxuLmVkaXQtdmlldy1vZi1jb3VzZSB7XG4gICYgPiB0ciA+IHRkIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmNvdXJzZS1saXN0LWVkaXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjYzZjNGM0IGluc2V0O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgLmV2b2MtYm94IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2UtbGlzdC10b3Age1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cbn1cblxuLmNlLWxpc3QtYm90dG9tIHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIHRib2R5IHtcbiAgICAgIHRyIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgfVxufVxuXG4uZGVsZXRlLWJ0biB7XG4gIGEge1xuICAgIGNvbG9yOiAjZjQ0MzM2O1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cblxuLmNsb3NlLWFjY29yIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMjRweDtcbiAgZm9udC1zaXplOiAzMXB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAkY29tbW9uLWJsdWU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi8vIHNjaGVkdWxlLWNsYXNzLWJveCBjc3Ncbi5zY2hlZHVsZS1jbGFzcy1ib3gge1xuICAuZmlsdGVyLWJveCB7XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfVxuICB9XG59XG5cbi5zY2hlZHVsZS1jbGFzcyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcblxuICAuYnRuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAuc2NoZWR1bGUtY2xhc3MtbGVmdCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICBsYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5mdWxsQmx1ZSB7fVxufVxuXG4udmlldy10YWIge1xuICBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgIC5idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLnZpZXctYy1kZXRhaWwge1xuICAuZmlsdGVyLXNlYXJjaCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgIC5leHBvcnQtcHJpbnQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICAudmNkLWwge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmNhbGVuZGVyLWNvdXJzZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuYy1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICYuY2FsLWxlZnQge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGVmdF9hcnJvdy5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDExcHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29tbW9uLWJsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5jYWwtcmlnaHQge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3JpZ2h0X2Fycm93LnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTFweDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1bCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgICAgd2lkdGg6IDE0JTtcbiAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXG4gICAgICBzcGFuLmMtZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGRlZGZkO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2xhc3MtY2FuY2VsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgJi5ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29tbW9uLWJsdWU7XG4gIH1cblxuICAmLnJlZCB7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICB9XG5cbiAgJi55ZWxsb3cge1xuICAgIGJhY2tncm91bmQ6ICNmOGIyMzg7XG4gIH1cbn1cblxuLmV4YW0taXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2Y4YjIzODtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNsYXNzLWlzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICRjb21tb24tYmx1ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNhbGVuZGVyLWNsYXNzLWRldGFpbCB7XG4gICYgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcblxuICAgIHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cbn1cblxuLmNhbGVuZGVyLXZpZXcxIHtcbiAgbWF4LWhlaWdodDogMjYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRoIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cblxuICAudGFibGUtYWNjb3ItaGVhZCB7XG4gICAgLm9wZW4tYWNjb3Ige1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmNsb3NlLWFjY29yIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgLmFjY29yZGlhbi1oZWFkaW5nIHtcbiAgICAgICAgLm9wZW4tYWNjb3Ige1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2xvc2UtYWNjb3Ige1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRhYmxlLWFjY29yLWhlYWQgdGQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuXG4gIC5hY2NvcmRpYW4taGVhZGluZyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVjZWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW46IDRweCAwIDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTZmMmZlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAuaGVhZGluZ0RpdiB7XG4gICAgICAuY2xvc2UtYWNjb3IsXG4gICAgICAub3Blbi1hY2NvciB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAuY2xvc2UtYWNjb3Ige1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgLm9wZW4tYWNjb3Ige1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgLmRhdGUtYyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICAuZGVsZXRlLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjZjQ0MzM2O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcblxuICAgICAgICAgIGxpbmUge1xuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZGVsZXRlLWJ0biB7XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuXG4gICAgbGluZSB7XG4gICAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgfVxuICB9XG59XG5cbi5tYWlsLW5vdGlmaWNhdGlvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWlhbF9ub3RpZmljYXRpb24uc3ZnXCIpIG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWlsLW5vdGlmeSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbF9ub3RpZnkuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZXNjaGVkdWxlLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Jlc2NoZWR1bGVfY2xhc3Muc3ZnXCIpIG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hY3Rpb24tYm94IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAxMTVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuXG4gIC5kZWxldGUtYnRuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmNDQzMzY7XG4gIH1cblxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAgOHB4IDAgMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuZWRpdC1pY29uIHtcbiAgICB3aWR0aDogMTlweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbn1cblxuLnRpY2stbWFyazEge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JlZW47XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmVlbjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5sZWRnZW5kLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG5cbiAgZGl2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuXG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgfVxuICB9XG59XG5cbi5kYXRlLWFycm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBjb250ZW50OiBcIlxcZjEwNFwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgIHdpZHRoOiA1cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBjb250ZW50OiBcIlxcZjEwNVwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgIHdpZHRoOiA1cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogODglO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgfVxufVxuXG4vLyBzZWNvbmQgY2FsZW5kZXIgLmNvdXJzZS1zZWNvbmRcbi5jYWxlbmRlci12aWV3MS5jYWwtdmlldy0yIHtcbiAgLmFjY29yZGlhbi1oZWFkaW5nIGg0IC5jbG9zZS1hY2NvcixcbiAgLmFjY29yZGlhbi1oZWFkaW5nIGg0IC5vcGVuLWFjY29yIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLmFjY29yZGlhbi1oZWFkaW5nIGg0IC5kYXRlLWMge1xuICAgICAgY29sb3I6ICMwMDRhN2U7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG5cbi5uZXctYWN0aW9uIHtcbiAgJiA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIHNwYW4ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICYgPiBkaXYge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNXB4O1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIH1cbiAgfVxufVxuXG4uY2FsLXZpZXctMiB7XG4gIC5hY3Rpb24tYm94LFxuICAubmV3LWFjdGlvbiB7XG4gICAgd2lkdGg6IDY1cHg7XG4gIH1cblxuICAuYWN0aW9uLWJveCB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gIH1cbn1cblxuLnJlYWQtbW9yZS12aWV3IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogIzAwNGE3ZTtcbn1cblxuLm5ldy10aWNrLW1hcmsge1xuICBoZWlnaHQ6IDcycHg7XG4gIHdpZHRoOiAzNXB4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnRpY2stbWFyazEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5cbi50aWNrLW1hcmstbmV3IHtcbiAgJiA+IGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cblxuLy8gY3JlYXRlIGNsYXNzIC5zY2hlZHVsZS1jbGFzc1xuLmNvdXJzZS1kZXRhaWwtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgLmNkLXMge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cbi5zY2hlZHVsZS1jbGFzcy1pbm5lciB7XG4gIHBhZGRpbmc6IDIwcHggMTVweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuXG4gIC5mb3JtLWN0cmwge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLnMtYy0xIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtd2VpZ2h0OiAxNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB9XG5cbiAgLmNob29zZS1jbGFzcy10eXBlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgLmZpZWxkLXJhZGlvLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zZWxlY3QtZGF5cyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgIHNwYW4ge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuXG4gICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW4tbGVmdDogMiU7XG5cbiAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsOmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1jaGVja2JveCtsYWJlbDpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jcmVhdGUtY2xhc3Mtc2NoZWR1bGUge1xuICBoNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG5cbi5zLWZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNhbGVuZGVyLWNvdXJzZSB1bCBsaSB7XG4gICAgd2lkdGg6IDEyJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5OXB4KSB7XG4gIC5jYWxlbmRlci1jb3Vyc2UgdWwgbGkge1xuICAgIHdpZHRoOiAxMiU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmNhbGVuZGVyLWNsYXNzLWRldGFpbCB7XG4gICAgJiA+IGRpdiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmID4gZGl2Omxhc3QtY2hpbGQgc3BhbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgLmNvbW1vbi10YWIgdWwgbGkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB3aWR0aDogMjAlO1xuXG4gICAgYSB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLmZpbHRlci1mb3ItY291cnNlcyB7XG4gICAgbGFiZWwge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAuZmlsdGVyLXNlYXJjaCB7XG4gICAgICAuYnRuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmFkaW8tb3B0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgIC5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jcmVhdGUtc3RhbmRhcmQtZm9ybSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cblxuICAuY3JlYXRlLWNhbmNlbC1zbWFsbCAuYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAuc2NoZWR1bGUtY2xhc3MtYm94IC5maWx0ZXItYm94IC5mdWxsQmx1ZS5idG4ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5zY2hlZHVsZS1jbGFzcyAuc2NoZWR1bGUtY2xhc3MtbGVmdCB7XG4gICAgbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnNjaGVkdWxlLWNsYXNzIC5idG4ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLnZpZXctdGFiIGxpIC5idG4ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLmNhbGVuZGVyLWNvdXJzZSB1bCBsaSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAxNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLmxlZGdlbmQtZm9vdGVyIHtcbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBkaXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5jYWwtdmlldyB7XG4gICAgLm1pZGRsZS10b3Age1xuICAgICAgLmJ0biB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhbGVuZGVyLXZpZXcxLFxuICAuY291cnNlcy1saXN0LXRhYmxlIHtcbiAgICB0YWJsZSB7XG4gICAgICBtaW4td2lkdGg6IDYwMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jYWxlbmRlci1jb3Vyc2UgdWwgbGkgc3Bhbi5jLWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuXG4gIC5kYXRlLWFycm93OmFmdGVyIHtcbiAgICB3aWR0aDogNzIlO1xuICB9XG5cbiAgLmNvdXJzZS1kZXRhaWwtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICYgPiBkaXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5maWx0ZXItYm94IHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cblxuICAucG9wdXAtYnRuIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbW1vbi10YWIgdWwgbGkge1xuICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgYSB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuXG4uZmlsdGVyLWZpZWxkcyB7XG4gIHBhZGRpbmc6IDAgMTVweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAkYmctd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNzAlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAjZTJlMGUwO1xuXG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxufVxuXG4uZmlsdGVyLWZpZWxkcyAuZm9ybS1jdHJsIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQ6IDQwMCAxMnB4ICdPcGVuIHNhbnMnLHNhbnMtc2VyaWY7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDJkMmQyO1xufVxuXG4uZmlsdGVyLWZpZWxkcyAuYnRuIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIHBvcFVwIFNjc3MgKi9cblxuLnBvcHVwV3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbiAgei1pbmRleDogMTAwOyAvLyBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW47XG5cbiAgLnBvcHVwIHtcbiAgICBtYXgtd2lkdGg6IDUwJTsgLy8gbWF4LWhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1JTtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvOyAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbn1cblxuLnBvcHVwLXdyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4OyAvLyBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDFweCA4cHggMjBweCA1cHggIzljOWM5YztcbiAgdHJhbnNpdGlvbjogdW5zZXQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMjVweCAwIDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4uY2xvc2VQb3B1cCB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBkaXNwbGF5OiBub25lO1xuXG4gICYuYm90dG9tUmlnaHQge1xuICAgIGJvdHRvbTogMnB4O1xuICAgIHRvcDogYXV0bztcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgJi50b3BMZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogMXB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuXG4gICYuYm90dG9tTGVmdCB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogYXV0bztcbiAgICBib3R0b206IDJweDtcbiAgICB0b3A6IGF1dG87XG4gIH1cblxuICBzdmcge1xuICAgIHdpZHRoOiAxNnB4O1xuXG4gICAgLmNscy0xIHtcbiAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC5jbHMtMSB7XG4gICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICB9XG4gIH1cbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5mYWRlSW4ge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Y3NzIGZvciBtb2IgcG9wdXBcblxuLnBvcHVwV3JhcHBlck1vYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyAvLyBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW47XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xuXG4gIC5jbG9zZVBvcHVwIHtcbiAgICByaWdodDogLTI1cHg7XG4gICAgdG9wOiAtMjdweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ucG9wdXAtbW9iIHtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDcwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAtNzAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW47XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xufVxuXG4ucG9wdXBXcmFwcGVyTW9iLnNob3dQb3B1cE1vYiB7XG4gIHotaW5kZXg6IDEwMDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnBvcHVwV3JhcHBlck1vYi5zaG93UG9wdXBNb2IgLnBvcHVwLW1vYiB7XG4gIGJvdHRvbTogMDtcbn1cblxuLnJhZGlvLW1haW4ge1xuICAuZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgLmZvcm0tcmFkaW86Y2hlY2tlZCtsYWJlbDpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBsZWZ0OiAzcHg7XG4gICAgICB0b3A6IDNweDtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi5mb3JtLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiA1cHggMDtcblxuICAmLmRhdGVwaWNrZXIge1xuICAgIHNwYW4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzNXB4O1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLyogJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICB9ICovXG4gICAgfVxuICB9XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzcpO1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG5cbiAgLnNpZGUtZm9ybS1jdHJsIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNDE5NjA3ODQzMTM3MjU0OSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogYmxhY2s7XG5cbiAgICAmLmJzRGF0ZXBpY2tlciB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmLnRpbWVwaWNrIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDFweCAwO1xuXG4gICAgLnRib3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC50aW1lcyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgLnNpZGUtZm9ybS1jdHJsIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC40MTk2MDc4NDMxMzcyNTQ5KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDhweCA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuXG4gICAgICAgICYubWlucyB7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1lcnMge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5maWVsZC13cmFwcGVyLmRhdGVQaWNrZXJCb3g6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogMjhweDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgei1pbmRleDogMjA7XG59XG5cbi5yZXNjaGVkdWxlV3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcblxuICAucm93IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLm5vdGlmeUNoa2J4IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm5vdGlmeUNoa2J4IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnJlc2NoZWR1bGVUaW1lIHtcbiAgZGlzcGxheTogaW5saW5lO1xuXG4gIGxhYmVsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC50Ym94IHtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLnRpbWVzIHtcbiAgICAgIC5zaWRlLWZvcm0tY3RybCB7XG4gICAgICAgICYubWlucyB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWVycyB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucXVlc3Rpb25JbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA0MCU7XG4gIHRvcDogLTIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG5cbiAgJi5sZWZ0cyB7XG4gICAgbGVmdDogODAlO1xuXG4gICAgLnRvb2x0aXAtYm94LWZpZWxkIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIG1pbi1oZWlnaHQ6IDIycHg7XG4gICAgICB3aWR0aDogMTQwcHggIWltcG9ydGFudDtcbiAgICAgIGxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xuICAgICAgdG9wOiAtMTBweCAhaW1wb3J0YW50O1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucUluZm9JY29uIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwICNjY2MgaW5zZXQ7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGhlYWRlci1iZztcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCAkaGVhZGVyLWJnIGluc2V0O1xuICAgIH1cbiAgfVxuXG4gICYuaG92ZXIge1xuICAgICYubGVmdHMge1xuICAgICAgbGVmdDogODAlO1xuXG4gICAgICAudG9vbHRpcC1ib3gtZmllbGQge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xuICAgICAgICBsZWZ0OiAtMzVweCAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IC0zMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZWRpdFRlYWNoZXJUZCB7XG4gIC5jaGFuZ2V0ZWFjaGVyIHtcbiAgICAuc3BhblNlY3Rpb24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgICAgIC5lZGl0U2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5kZG5DaGFuZ2VUZWFjaGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmFkdmFuY2VmaWx0ZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIHRvcDogMTI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDg0ZjY7XG59XG4uYWR2YW5jZURhdGVGaWx0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC5idG4td3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gIH1cblxuICAuZ29CYWNrLXdyYXBwZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4ucmFkaW8tbWFpbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcblxuICAuZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cbi5leHRyYS1idXR0b24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAuYnRuIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMDA4NGY2O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-class/class-home/class-home.component.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-class/class-home/class-home.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ClassHomeComponent, DateFormat */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseClassClassHomeClassHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassHomeComponent", function () {
        return ClassHomeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateFormat", function () {
        return DateFormat;
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


      var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _model_role_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../model/role_features */
      "./src/app/model/role_features.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../services/course-services/class-schedule.service */
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var ClassHomeComponent =
      /** @class */
      function () {
        var ClassHomeComponent = /*#__PURE__*/function () {
          function ClassHomeComponent(router, classService, toastCtrl, auth, _http) {
            _classCallCheck(this, ClassHomeComponent);

            this.router = router;
            this.classService = classService;
            this.toastCtrl = toastCtrl;
            this.auth = auth;
            this._http = _http;
            this.userType = 0;
            this.masterCourse = [];
            this.courseList = [];
            this.subjectList = [];
            this.fullResponse = [];
            this.teacherList = [];
            this.timeTableResponse = [];
            this.weekScheduleList = [];
            this.times = ['', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];
            this.hourArr = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
            this.minArr = ['', '00', '15', '30', '45'];
            this.meridianArr = ['', "AM", "PM"];
            this.combinedData = [];
            this.batchMasterCourse = [];
            this.subjectListBatch = [];
            this.batchList = [];
            this.institute_id = sessionStorage.getItem('institute_id');
            this.showContent = false;
            this.isLangInstitute = false;
            this.reschedulePopUp = false;
            this.isCourseCancel = false;
            this.showManageClass = false;
            this.showAdvanceFilter = false;
            this.isChecked = false;
            this.isExpand = true;
            this.currentDate = new Date();
            this.reschedDate = new Date();
            this.weekStart = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate).isoWeekday("Monday").format("DD MMMM YYYY");
            this.weekEnd = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate).isoWeekday("Sunday").format("DD MMMM YYYY");
            this.cancellationReason = '';
            this.classMarkedForAction = '';
            this.selectedRadioButton = 'All';
            this.is_notified = 'Y';
            this.allotedTeacher = '-1';
            this.reschedReason = "";
            this.resheduleNotified = "Y";
            this.rescheduleDet = "";
            this.fetchMasterCourseModule = {
              master_course: "-1",
              course_id: "-1",
              subject_id: '-1',
              teacher_id: '-1'
            };
            this.timepicker = {
              reschedStartTime: {
                hour: '12 PM',
                minute: '00',
                meridian: ''
              },
              reschedEndTime: {
                hour: '1 PM',
                minute: '00',
                meridian: ''
              }
            };
            this.fetchBatchModule = {
              batch_id: null,
              master_course: "",
              course_id: -1,
              subject_id: -1,
              teacher_id: null
            };
            this.batchData = {
              standard_id: -1,
              subject_id: -1,
              batch_id: -1
            };
            this.advanceFilter = {
              startdate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(30, 'days').format('YYYY-MM-DD'),
              enddate: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
              type: '3',
              isExamIncludedInTimeTable: 'Y'
            };
            this.selectedArray = {
              examSchldId: [],
              classSchldId: []
            };
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_5__["role"].features;
            this.schoolModel = false;

            if (sessionStorage.getItem('userid') == null) {
              this.router.navigate(['/authPage']);
            }
          }

          _createClass(ClassHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.userType = sessionStorage.getItem('userType');
              this.checkUserPermission();
              this.checkInstituteType();
              this.getPrefillData();
              this.checkForCoursePlannerRoute();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              sessionStorage.setItem('isFromCoursePlanner', String(false));
            }
          }, {
            key: "checkForCoursePlannerRoute",
            value: function checkForCoursePlannerRoute() {
              var coursePlannerStatus = sessionStorage.getItem('isFromCoursePlanner');
            }
          }, {
            key: "checkUserPermission",
            value: function checkUserPermission() {
              var permissionArray = sessionStorage.getItem('permissions');

              if (permissionArray == "" || permissionArray == null) {
                this.showManageClass = true;
              } else {
                if (permissionArray != "") {
                  if (this.role_feature.CLASS_MENU) {
                    this.showManageClass = true;
                  } else {
                    this.showManageClass = false;
                  }
                }
              }
            }
          }, {
            key: "getPrefillData",
            value: function getPrefillData() {
              if (this.isLangInstitute) {
                this.submitMasterCourse();
                this.getCombinedData();
              } else {
                // this.getMasterCourseList();
                this.getMasterCourse();
              }

              this.getTeachers();
            }
          }, {
            key: "getCombinedData",
            value: function getCombinedData() {
              var _this44 = this;

              this.auth.showLoader();
              this.classService.getCombinedDataFromServer(this.batchData.standard_id, this.batchData.subject_id).subscribe(function (res) {
                _this44.auth.hideLoader(); //console.log('Combined data', res);


                _this44.combinedData = res;

                if (res.standardLi != null) {
                  _this44.batchMasterCourse = res.standardLi;
                }

                if (res.subjectLi != null) {
                  _this44.subjectListBatch = res.subjectLi;
                }

                if (res.batchLi != null) {
                  _this44.batchList = res.batchLi;
                }
              }, function (err) {
                _this44.auth.hideLoader(); //console.log(err);


                _this44.messageToast('error', '', err.error.message);
              });
            }
          }, {
            key: "getMasterCourseList",
            value: function getMasterCourseList() {
              var _this45 = this;

              this.auth.showLoader();
              this.classService.getAllMasterCourse().subscribe(function (res) {
                _this45.auth.hideLoader();

                _this45.masterCourse = res; //console.log('master', res);
              }, function (err) {
                _this45.auth.hideLoader();

                _this45.messageToast('error', '', err.error.message); //console.log(err);

              });
            }
          }, {
            key: "getMasterCourse",
            value: function getMasterCourse() {
              var _this46 = this;

              var url = "/api/v1/courseMaster/master-course-list/" + this.institute_id + '?is_active_not_expire=Y&sorted_by=course_name';
              var keys;
              this.auth.showLoader();

              this._http.getData(url).subscribe(function (data) {
                _this46.masterCourse = [];

                _this46.auth.hideLoader();

                _this46.fullResponse = data.result;
                keys = Object.keys(data.result);
                console.log("keys", keys); // this.masterCourse = keys;

                for (var i = 0; i < keys.length; i++) {
                  _this46.masterCourse.push(keys[i]);
                } // this.standardData = data.result;
                // console.log(data.result);
                // map = data.result;
                // var array = [];
                // var i = 0;
                // for (var mission in data.result) {
                //   array[i] = array.concat(data.result[mission]);
                //   i++;
                // }
                // console.log("Stringfy          ", JSON.stringify(array));
                // console.log("ar", array.length);
                // for(let i=0;i< array.length; i++){
                //   console.log("asd",array[i]);
                // }

              }, function (error) {
                _this46.auth.hideLoader();

                console.log(error);
              });
            }
          }, {
            key: "getTeachers",
            value: function getTeachers() {
              var _this47 = this;

              this.auth.showLoader();
              this.classService.getAllTeachersList().subscribe(function (res) {
                // console.log('teacher', res);
                _this47.auth.hideLoader();

                _this47.teacherList = res.result;
                console.log(_this47.teacherList);

                _this47.teacherList.sort(function (a, b) {
                  var textA = a.teacher_name.toUpperCase();
                  var textB = b.teacher_name.toUpperCase();
                  return textA < textB ? -1 : textA > textB ? 1 : 0;
                });
              }, function (err) {
                _this47.auth.hideLoader();

                _this47.messageToast('error', '', err.error.message);
              });
            }
          }, {
            key: "updateCourseList",
            value: function updateCourseList(ev) {
              this.showContent = false;
              this.courseList = []; // this.auth.showLoader();

              var temp = this.fullResponse[this.fetchMasterCourseModule.master_course];

              for (var i = 0; i < temp.length; i++) {
                this.courseList.push(temp[i]);
              } // this.classService.getCourseFromMasterById(ev).subscribe(
              //   res => {
              //     if (res.coursesList) {
              //       //console.log("course", res);
              //       this.courseList = res;
              //       this.auth.hideLoader();
              //     }
              //     else {
              //       this.courseList = [];
              //       this.auth.hideLoader();
              //     }
              //   },
              //   err => {
              //     //console.log(err);
              //     this.courseList = [];
              //     this.auth.hideLoader();
              //     this.messageToast('error', '', err.error.message);
              //   }
              // )

            }
          }, {
            key: "updateSubjectList",
            value: function updateSubjectList(event) {
              var _this48 = this;

              this.showContent = false;
              this.auth.showLoader();
              this.classService.getSubjectList(event).subscribe(function (res) {
                _this48.auth.hideLoader(); //console.log('Subject', res);


                _this48.subjectList = res.batchesList;
              }, function (err) {
                _this48.messageToast('error', '', err.error.message);

                _this48.auth.hideLoader(); //console.log(err);

              });
            }
          }, {
            key: "getClassList",
            value: function getClassList() {
              var temp = [];
              var dataList = [];

              if (this.isLangInstitute) {
                dataList = this.timeTableResponse.batchTimeTableList;
              } else {
                if (this.showAdvanceFilter) {
                  dataList = this.timeTableResponse.batchTimeTableList;
                } else {
                  if (this.fetchMasterCourseModule.master_course != "" && this.fetchMasterCourseModule.course_id == "-1" && this.fetchMasterCourseModule.teacher_id == "-1" && this.fetchMasterCourseModule.subject_id == "-1") {
                    dataList = this.timeTableResponse[0].batchTimeTableList;
                  } else {
                    dataList = this.timeTableResponse.batchTimeTableList;
                  }
                }
              }

              var _loop = function _loop(key) {
                var arr = [];
                var obj = {
                  id: key,
                  data: arr
                };

                if (dataList[key].length > 0) {
                  var schList = dataList[key];
                  schList.map(function (ele) {
                    if (ele.class_type != "Exam") {
                      ele['selected'] = false;
                      ele['date'] = key;
                      arr.push(ele);
                    }
                  }); // for (let i = 0; i < schList.length; i++) {
                  //   schList[i]['selected'] = false;
                  //   schList[i]['date'] = key;
                  // }
                }

                if (obj.data.length > 0) {
                  temp.push(obj);
                }
              };

              for (var key in dataList) {
                _loop(key);
              }

              return temp;
            }
          }, {
            key: "toggleTbodyClass",
            value: function toggleTbodyClass(i) {
              document.getElementById('tbodyItem' + i).classList.toggle("active");
              document.getElementById('tbodyView' + i).classList.toggle("hide"); //document.getElementById('tbodyItem'+i).classList.toggle('active');
            } // it expands all rows for show child records

          }, {
            key: "expandAll",
            value: function expandAll(i) {
              document.getElementById('tbodyItem' + i).classList.add("active");
              document.getElementById('tbodyView' + i).classList.remove("hide");
            } // it collapes all rows for hide child records

          }, {
            key: "collapesAll",
            value: function collapesAll(i) {
              document.getElementById('tbodyItem' + i).classList.remove("active");
              document.getElementById('tbodyView' + i).classList.add("hide");
            }
          }, {
            key: "submitMasterCourse",
            value: function submitMasterCourse() {
              var _this49 = this;

              var data;

              if (this.isLangInstitute) {
                var fieldCheck = this.checkFieldFilled();

                if (fieldCheck == false) {
                  return;
                }

                data = this.makeJsonForBatch();
              } else {
                data = this.makeJsonForSubmit();
              }

              this.weekScheduleList = [];
              this.auth.showLoader();
              this.classService.getTimeTable(data).subscribe(function (res) {
                _this49.auth.hideLoader();

                _this49.timeTableResponse = res;
                _this49.showContent = true;
                _this49.weekScheduleList = _this49.getClassList();
              }, function (err) {
                //console.log(err);
                _this49.auth.hideLoader();

                _this49.messageToast('error', '', err.error.message);
              });
            }
          }, {
            key: "makeJsonForSubmit",
            value: function makeJsonForSubmit() {
              var obj = {};
              obj.batch_id = this.fetchMasterCourseModule.subject_id;
              obj.course_id = this.fetchMasterCourseModule.course_id;
              obj.master_course = this.courseList.master_course;
              obj.subject_id = -1;
              obj.teacher_id = this.fetchMasterCourseModule.teacher_id;
              obj.standard_id = -1;
              obj.isExamIncludedInTimeTable = 'Y';
              obj.startdate = this.getStartDate();
              obj.enddate = this.getEndDate();
              obj.type = 2;
              return obj;
            }
          }, {
            key: "makeJsonForBatch",
            value: function makeJsonForBatch() {
              var obj = {};
              obj.batch_id = this.batchData.batch_id;
              obj.course_id = this.fetchBatchModule.course_id;
              obj.master_course = this.fetchBatchModule.master_course;
              obj.subject_id = this.batchData.subject_id;
              obj.teacher_id = this.fetchBatchModule.teacher_id;
              obj.standard_id = this.batchData.standard_id;
              obj.isExamIncludedInTimeTable = 'Y';
              obj.startdate = this.getStartDate();
              obj.enddate = this.getEndDate();
              obj.type = 2;
              return obj;
            }
          }, {
            key: "checkFieldFilled",
            value: function checkFieldFilled() {
              if (this.batchData.standard_id == -1 && this.batchData.subject_id == -1 && this.batchData.batch_id == -1) {
                return true;
              } else {
                if (this.batchData.batch_id != -1) {
                  return true;
                } else {
                  this.messageToast('error', '', 'Please enter batch details');
                  return false;
                }
              }
            }
          }, {
            key: "getEndDate",
            value: function getEndDate() {
              var currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate).format("YYYY-MM-DD");
              return moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).weekday(7).format("YYYY-MM-DD");
            }
          }, {
            key: "getStartDate",
            value: function getStartDate() {
              var currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate).format("YYYY-MM-DD");
              return moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).weekday(1).format("YYYY-MM-DD");
            }
          }, {
            key: "getValueOfStandardID",
            value: function getValueOfStandardID(data, key, value) {
              for (var t = 0; t < data.length; t++) {
                if (data[t][key] == value) {
                  return data[t].standard_id;
                }
              }
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
            key: "checkInstituteType",
            value: function checkInstituteType() {
              var _this50 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this50.isLangInstitute = true;
                } else {
                  _this50.isLangInstitute = false;

                  _this50.showhideAdvanceFilter('0');
                }
              }); // changes by Nalini - to handle school model conditions

              this.auth.schoolModel.subscribe(function (res) {
                _this50.schoolModel = false;

                if (res) {
                  _this50.schoolModel = true;
                }
              });
            }
          }, {
            key: "gotoPreviousWeek",
            value: function gotoPreviousWeek() {
              this.currentDate = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate).subtract(7, 'd').format("YYYY-MM-DD"));
              this.weekStart = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate).isoWeekday("Monday").format("DD MMMM YYYY");
              this.weekEnd = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate).isoWeekday("Sunday").format("DD MMMM YYYY");
              this.submitMasterCourse();
            }
            /* ============================================================================================ */

            /* ============================================================================================ */

          }, {
            key: "gotoNextWeek",
            value: function gotoNextWeek() {
              this.currentDate = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate).add(7, 'd').format("YYYY-MM-DD"));
              this.weekStart = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate).isoWeekday("Monday").format("DD MMMM YYYY");
              this.weekEnd = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate).isoWeekday("Sunday").format("DD MMMM YYYY");
              this.submitMasterCourse();
            }
          }, {
            key: "delete",
            value: function _delete(level, index, subIndex) {
              if (level == 'course') {//console.log(this.weekScheduleList[index]);
                //console.log('this has to be deleted');
              } else if (level == 'subject') {//console.log(this.weekScheduleList[index].data[subIndex]);
                //console.log('this has to be deleted');
              } else if (level == 'batch') {}
            }
          }, {
            key: "notify",
            value: function notify(_notify) {
              var _this51 = this;

              if (confirm("Are you sure, You want to notify?")) {
                var obj = {
                  course_ids: this.fetchMasterCourseModule.course_id,
                  inst_id: sessionStorage.getItem('institute_id'),
                  master_course: this.fetchMasterCourseModule.master_course,
                  requested_date: moment__WEBPACK_IMPORTED_MODULE_2__(_notify.id).format("YYYY-MM-DD")
                };
                this.classService.remindCourseLevel(obj).subscribe(function (res) {
                  var msg = {
                    type: 'success',
                    title: '',
                    body: 'Student(s) has been notified'
                  };

                  _this51.toastCtrl.popToast(msg);
                }, function (err) {
                  var msg = {
                    type: 'error',
                    title: '',
                    body: 'please contact support@proctur.com'
                  };

                  _this51.toastCtrl.popToast(msg);
                });
              }
            }
          }, {
            key: "notifySubjectLevel",
            value: function notifySubjectLevel(rowdata, dateRow) {
              var _this52 = this;

              if (confirm("Are you sure, You want to notify?")) {
                var obj = {};
                obj.batch_id = rowdata.batch_id;
                obj.class_schedule_id = rowdata.schd_id;
                obj.is_exam_schedule = "N";
                this.classService.sendReminderToServerSubject(obj).subscribe(function (res) {
                  _this52.messageToast('success', 'Success', 'Reminder Notification sent successfully');
                }, function (err) {
                  //console.log(err);
                  _this52.messageToast('error', '', err.error.message);
                });
              }

              ;
            }
          }, {
            key: "rescheduleClassData",
            value: function rescheduleClassData(rowData) {
              this.reschedulePopUp = true;
              this.rescheduleDet = rowData;
            }
          }, {
            key: "getCheckedStatus",
            value: function getCheckedStatus(id) {
              if (id === "notifyCancel") {
                return true;
              } else if (id === 'resheduleNotified') {
                return true;
              }
            }
          }, {
            key: "closeRescheduleClass",
            value: function closeRescheduleClass() {
              this.reschedulePopUp = false;
              this.reschedDate = new Date();
              this.reschedReason = "";
              this.timepicker = {
                reschedStartTime: {
                  hour: '12 PM',
                  minute: '00',
                  meridian: ''
                },
                reschedEndTime: {
                  hour: '1 PM',
                  minute: '00',
                  meridian: ''
                }
              };

              if (this.showAdvanceFilter) {
                this.advanceFilterView();
              } else {
                this.submitMasterCourse();
              }
            }
          }, {
            key: "notifyRescheduleUpdate",
            value: function notifyRescheduleUpdate(e) {
              if (e.target.checked) {
                this.resheduleNotified = "Y";
              } else {
                this.resheduleNotified = "N";
              }
            }
          }, {
            key: "checkIfTimeProvided",
            value: function checkIfTimeProvided(data) {
              if (data == "" || data == null) {
                var msg = {
                  type: 'error',
                  title: '',
                  body: 'Please enter correct time'
                };
                this.toastCtrl.popToast(msg);
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "rescheduleClass",
            value: function rescheduleClass() {
              var _this53 = this;

              var check = this.checkIfTimeProvided(this.timepicker.reschedStartTime.hour);

              if (check) {
                var startTime = this.timepicker.reschedStartTime.hour.split(' ');
                this.timepicker.reschedStartTime.hour = startTime[0];
                this.timepicker.reschedStartTime.meridian = startTime[1];
              } else {
                return;
              }

              var check1 = this.checkIfTimeProvided(this.timepicker.reschedEndTime.hour);

              if (check1) {
                var endTime = this.timepicker.reschedEndTime.hour.split(' ');
                this.timepicker.reschedEndTime.hour = endTime[0];
                this.timepicker.reschedEndTime.meridian = endTime[1];
              } else {
                return;
              }

              if (this.reSheduleFormValid()) {
                var temp1 = {
                  cancel_note: this.reschedReason,
                  schd_id: this.rescheduleDet.schd_id,
                  is_notified: this.resheduleNotified
                };
                var temp2 = {
                  class_date: moment__WEBPACK_IMPORTED_MODULE_2__(this.reschedDate).format("YYYY-MM-DD"),
                  start_time: this.timepicker.reschedStartTime.hour + ":" + this.timepicker.reschedStartTime.minute + " " + this.timepicker.reschedStartTime.meridian,
                  end_time: this.timepicker.reschedEndTime.hour + ":" + this.timepicker.reschedEndTime.minute + " " + this.timepicker.reschedEndTime.meridian,
                  duration: this.getDifference()
                };
                var obj = {
                  batch_id: this.rescheduleDet.batch_id,
                  cancelSchd: [],
                  extraSchd: []
                };
                obj.cancelSchd.push(temp1);
                obj.extraSchd.push(temp2);
                this.classService.reScheduleClass(obj).subscribe(function (res) {
                  var msg = {
                    type: 'success',
                    title: '',
                    body: 'The request has been processed'
                  };

                  _this53.toastCtrl.popToast(msg);

                  _this53.closeRescheduleClass();
                }, function (err) {
                  var msg = {
                    type: 'error',
                    title: '',
                    body: err.message
                  };

                  _this53.toastCtrl.popToast(msg);
                });
              } else {
                this.timepicker.reschedStartTime.hour = this.timepicker.reschedStartTime.hour + " " + this.timepicker.reschedStartTime.meridian;
                this.timepicker.reschedEndTime.hour = this.timepicker.reschedEndTime.hour + " " + this.timepicker.reschedEndTime.meridian;
              }
            }
          }, {
            key: "getDifference",
            value: function getDifference() {
              var startTime = this.timepicker.reschedStartTime.hour + ":" + this.timepicker.reschedStartTime.minute + " " + this.timepicker.reschedStartTime.meridian;
              var endTime = this.timepicker.reschedEndTime.hour + ":" + this.timepicker.reschedEndTime.minute + " " + this.timepicker.reschedEndTime.meridian;
              var start = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](startTime, "HH:mm A");
              var end = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](endTime, "HH:mm A");

              if (end.isBefore(start)) {
                end.add(1, 'day');
              }

              var d = moment__WEBPACK_IMPORTED_MODULE_2__["duration"](end.diff(start));
              return d._milliseconds / 60000;
            }
          }, {
            key: "reSheduleFormValid",
            value: function reSheduleFormValid() {
              /* Date Validation */
              if (this.reschedDate != '' && this.reschedDate != 'Invalid Date') {
                /* Reschedule Reason */
                if (this.reschedReason.trim() != '') {
                  /* Validate Time */
                  if (this.isTimeValid()) {
                    return true;
                  } else {
                    var msg = {
                      type: 'error',
                      title: '',
                      body: 'Please enter a complete start and end time for rescheduling'
                    };
                    this.toastCtrl.popToast(msg);
                    return false;
                  }
                } else {
                  var _msg = {
                    type: 'error',
                    title: 'Reschedule Reason Missing',
                    body: 'Please mention a reason for rescheduling the class'
                  };
                  this.toastCtrl.popToast(_msg);
                  return false;
                }
              }
              /* Date not found */
              else {
                  var _msg2 = {
                    type: 'error',
                    title: 'Date Missing',
                    body: 'Please select a date to reschedule class'
                  };
                  this.toastCtrl.popToast(_msg2);
                  return false;
                }
            }
          }, {
            key: "isTimeValid",
            value: function isTimeValid() {
              if (this.timepicker.reschedStartTime.hour.trim() != '' && this.timepicker.reschedStartTime.minute.trim() != '' && this.timepicker.reschedStartTime.meridian.trim() != '' && this.timepicker.reschedEndTime.hour.trim() != '' && this.timepicker.reschedEndTime.minute.trim() != '' && this.timepicker.reschedEndTime.meridian.trim() != '') {
                var startTime = this.timepicker.reschedStartTime.hour + ":" + this.timepicker.reschedStartTime.minute + " " + this.timepicker.reschedStartTime.meridian;
                var endTime = this.timepicker.reschedEndTime.hour + ":" + this.timepicker.reschedEndTime.minute + " " + this.timepicker.reschedEndTime.meridian;
                var start = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](startTime, "HH:mm A");
                var end = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](endTime, "HH:mm A");

                if (parseInt(start.format("HH")) < parseInt(end.format("HH"))) {
                  return true;
                } else if (parseInt(start.format("HH")) == parseInt(end.format("HH")) && parseInt(start.format("mm")) < parseInt(end.format("mm"))) {
                  return true;
                } else {
                  return false;
                }
              } else {
                return false;
              }
            }
          }, {
            key: "checkInputType",
            value: function checkInputType(event) {
              if (event.target.value == "All") {
                this.weekScheduleList = [];
                this.selectedRadioButton = "All";
                this.fetchBatchModule = {
                  batch_id: null,
                  master_course: "",
                  course_id: -1,
                  subject_id: -1,
                  teacher_id: null
                };
                this.batchData = {
                  standard_id: -1,
                  subject_id: -1,
                  batch_id: -1
                };
                this.getPrefillData();
              } else if (event.target.value == "Teacher") {
                this.weekScheduleList = [];
                this.selectedRadioButton = "Teacher";
              } else {
                this.weekScheduleList = [];
                this.selectedRadioButton = "Batch";
              }
            }
          }, {
            key: "onBatchMasterCourseSelection",
            value: function onBatchMasterCourseSelection(event) {
              this.batchData.subject_id = -1;
              this.batchData.batch_id = -1;
              this.getCombinedData();
            }
          }, {
            key: "onSubjectSelection",
            value: function onSubjectSelection(event) {
              this.batchList = [];
              this.batchData.batch_id = -1;
              this.getCombinedData();
            }
          }, {
            key: "CancelClass",
            value: function CancelClass(rowData) {
              this.isCourseCancel = true;
              this.classMarkedForAction = rowData;
            }
          }, {
            key: "closeCourseCancelClass",
            value: function closeCourseCancelClass() {
              this.isCourseCancel = false;
              this.cancellationReason = '';

              if (this.showAdvanceFilter) {
                this.advanceFilterView();
              } else {
                this.submitMasterCourse();
              }
            }
          }, {
            key: "cancelClass",
            value: function cancelClass() {
              var _this54 = this;

              var data = {};
              data.batch_id = this.classMarkedForAction.batch_id;
              data.cancelSchd = [{
                cancel_note: this.cancellationReason,
                is_notified: this.is_notified,
                schd_id: this.classMarkedForAction.schd_id
              }];
              this.classService.cancelClassSchedule(data).subscribe(function (res) {
                var msg = {
                  type: 'success',
                  title: '',
                  body: 'The requested scheduled has been cancelled'
                };

                _this54.toastCtrl.popToast(msg);

                _this54.closeCourseCancelClass();
              }, function (err) {
                var msg = {
                  type: 'error',
                  title: '',
                  body: err.cancelResponseMessage
                };

                _this54.toastCtrl.popToast(msg);
              });
            }
          }, {
            key: "notifyCancelUpdate",
            value: function notifyCancelUpdate(e) {
              if (e.target.checked) {
                this.is_notified = "Y";
              } else {
                this.is_notified = "N";
              }
            }
          }, {
            key: "editClass",
            value: function editClass(data) {
              var obj = {
                course_id: this.fetchMasterCourseModule.course_id,
                master_course: this.fetchMasterCourseModule.master_course,
                date: data.id.split('(')[0]
              };
              sessionStorage.setItem('editClass', JSON.stringify(obj));
              this.router.navigate(['view/course/create/class/add']);
            }
          }, {
            key: "printTimeTableData",
            value: function printTimeTableData() {}
          }, {
            key: "changeTeacher",
            value: function changeTeacher(data) {
              document.getElementById('teacher' + data.schd_id).classList.add('hide');
              document.getElementById('editTeacher' + data.schd_id).classList.remove('hide');
            }
          }, {
            key: "cancelChangeTeacher",
            value: function cancelChangeTeacher(data) {
              document.getElementById('teacher' + data.schd_id).classList.remove('hide');
              document.getElementById('editTeacher' + data.schd_id).classList.add('hide');
              this.allotedTeacher = '-1';
            }
          }, {
            key: "updateTeacher",
            value: function updateTeacher(data) {
              var _this55 = this;

              if (this.allotedTeacher == "-1" || this.allotedTeacher == null) {
                this.messageToast('error', '', 'Please enter teacher');
                return false;
              } else {
                if (confirm('Are you sure you want to change the teacher?')) {
                  var obj = {
                    alloted_teacher_id: this.allotedTeacher,
                    batch_id: data.batch_id,
                    class_schedule_id: data.schd_id,
                    cousre_planner_update_operation: 'teacher',
                    is_exam_schedule: 'N'
                  };
                  this.classService.changeClassTeacher(obj).subscribe(function (res) {
                    _this55.messageToast('success', 'Updated', 'Teacher updated successfully');

                    _this55.allotedTeacher = '-1';

                    _this55.cancelChangeTeacher(data);

                    if (_this55.showAdvanceFilter) {
                      _this55.advanceFilterView();
                    } else {
                      _this55.submitMasterCourse();
                    }
                  }, function (err) {
                    console.log(err);

                    _this55.messageToast('error', '', err.error.message);
                  });
                }
              }
            } //Advance Filter Functionality

          }, {
            key: "advanceFilterView",
            value: function advanceFilterView() {
              var _this56 = this;

              var validate = this.validateAllFields();

              if (validate) {
                var dataToSend = this.makeJsonForAdvanceFilter();
                this.auth.showLoader();
                this.classService.getTimeTable(dataToSend).subscribe(function (res) {
                  _this56.auth.hideLoader();

                  _this56.timeTableResponse = res;
                  _this56.showContent = true;
                  _this56.weekScheduleList = _this56.getClassList();
                }, function (err) {
                  _this56.auth.hideLoader();

                  _this56.messageToast('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "makeJsonForAdvanceFilter",
            value: function makeJsonForAdvanceFilter() {
              var data;

              if (this.isLangInstitute) {
                data = this.makeJsonForBatch();
              } else {
                data = this.makeJsonForSubmit();
              }

              data.type = this.advanceFilter.type;
              data.startdate = this.advanceFilter.startdate;
              data.enddate = this.advanceFilter.enddate;
              return data;
            }
          }, {
            key: "validateAllFields",
            value: function validateAllFields() {
              var days = 0;
              days = moment__WEBPACK_IMPORTED_MODULE_2__(this.advanceFilter.enddate).diff(moment__WEBPACK_IMPORTED_MODULE_2__(this.advanceFilter.startdate), 'days');

              if (days > 31) {
                this.messageToast('error', '', 'Please enter date range of 30 days only');
                return false;
              } else {
                this.advanceFilter.startdate = moment__WEBPACK_IMPORTED_MODULE_2__(this.advanceFilter.startdate).format('YYYY-MM-DD');
                this.advanceFilter.enddate = moment__WEBPACK_IMPORTED_MODULE_2__(this.advanceFilter.enddate).format('YYYY-MM-DD');
              }

              if (this.isLangInstitute) {
                if (this.batchData.standard_id == -1) {
                  this.messageToast('error', '', 'Please enter Master Course');
                  return false;
                }

                if (this.batchData.subject_id == -1) {
                  this.messageToast('error', '', 'Please enter Course');
                  return false;
                }

                if (this.batchData.batch_id == -1) {
                  this.messageToast('error', '', 'Please enter Batch');
                  return false;
                }
              } else {
                if (this.fetchMasterCourseModule.master_course == "-1") {
                  this.messageToast('error', '', 'Please enter Master Course');
                  return false;
                }

                if (this.fetchMasterCourseModule.course_id == "-1") {
                  this.messageToast('error', '', 'Please enter Course');
                  return false;
                }
              }

              return true;
            }
          }, {
            key: "showhideAdvanceFilter",
            value: function showhideAdvanceFilter(key) {
              this.weekScheduleList = [];

              if (key == '0') {
                this.showAdvanceFilter = false;
                var obj = {
                  target: {
                    value: this.selectedRadioButton
                  }
                };
                this.checkInputType(obj);

                if (this.userType == '3') {
                  this.showAdvanceFilter = true;
                }
              } else {
                this.showAdvanceFilter = true;
              }

              this.showContent = false;
              this.fetchMasterCourseModule = {
                master_course: "-1",
                course_id: "-1",
                subject_id: '-1',
                teacher_id: '-1'
              };
              this.batchData = {
                standard_id: -1,
                subject_id: -1,
                batch_id: -1
              };
              this.selectedArray = {
                examSchldId: [],
                classSchldId: []
              };
            } /// Delete Schedule

          }, {
            key: "deleteMultipleSchedule",
            value: function deleteMultipleSchedule() {
              var _this57 = this;

              if (confirm('All the selected future class and exam schedule will be deleted. Do you want to continue?')) {
                var dataToSend = this.makeMultipleDelete();

                if (dataToSend == false) {
                  return false;
                }

                this.classService.deleteMultiple(dataToSend).subscribe(function (res) {
                  _this57.messageToast('success', '', 'Deleted Successfully');

                  if (_this57.showAdvanceFilter) {
                    _this57.advanceFilterView();
                  } else {
                    _this57.submitMasterCourse();
                  }

                  _this57.selectedArray = {
                    examSchldId: [],
                    classSchldId: []
                  };
                }, function (err) {
                  _this57.messageToast('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "makeMultipleDelete",
            value: function makeMultipleDelete() {
              var obj = {
                examSchldId: [],
                classSchldId: []
              };

              for (var key in this.weekScheduleList) {
                if (moment__WEBPACK_IMPORTED_MODULE_2__(this.weekScheduleList[key].id) > moment__WEBPACK_IMPORTED_MODULE_2__()) {
                  var data = this.weekScheduleList[key].data;

                  for (var i = 0; i < data.length; i++) {
                    if (data[i].selected) {
                      if (moment__WEBPACK_IMPORTED_MODULE_2__(data[i].date) > moment__WEBPACK_IMPORTED_MODULE_2__()) {
                        if (data[i].class_type == "Exam") {
                          obj.examSchldId.push(data[i].schd_id);
                        } else {
                          obj.classSchldId.push(data[i].schd_id);
                        }
                      } else {
                        this.messageToast('error', '', "Past Date Schedule Can't Deleted");
                        return false;
                      }
                    }
                  }
                }
              }

              if (obj.examSchldId.length == 0 && obj.classSchldId.length == 0) {
                this.messageToast('error', '', "You haven't selected any future schedule");
                return false;
              }

              return obj;
            }
          }, {
            key: "userSelectedData",
            value: function userSelectedData(event, data) {
              var isUnseleted = false;

              if (event) {
                if (moment__WEBPACK_IMPORTED_MODULE_2__(data.date) > moment__WEBPACK_IMPORTED_MODULE_2__()) {
                  if (data.class_type == "Exam") {
                    this.selectedArray.examSchldId.push(data.schd_id);
                  } else {
                    this.selectedArray.classSchldId.push(data.schd_id);
                  }
                } else {
                  if (data.class_type == "Exam") {
                    if (this.selectedArray.examSchldId.indexOf(data.schd_id) > -1) {
                      this.selectedArray.examSchldId.splice(this.selectedArray.examSchldId.indexOf(data.schd_id), 1);
                    }
                  } else {
                    if (this.selectedArray.classSchldId.indexOf(data.schd_id) > -1) {
                      this.selectedArray.classSchldId.splice(this.selectedArray.classSchldId.indexOf(data.schd_id), 1);
                    } else {
                      this.selectedArray.classSchldId.push(data.schd_id);
                    }
                  }
                }
              } else {
                if (data.class_type == "Exam") {
                  if (this.selectedArray.examSchldId.indexOf(data.schd_id) > -1) {
                    this.selectedArray.examSchldId.splice(this.selectedArray.examSchldId.indexOf(data.schd_id), 1);
                  }
                } else {
                  if (this.selectedArray.classSchldId.indexOf(data.schd_id) > -1) {
                    this.selectedArray.classSchldId.splice(this.selectedArray.classSchldId.indexOf(data.schd_id), 1);
                  } else {
                    this.selectedArray.classSchldId.push(data.schd_id);
                  }
                }
              }

              if (this.weekScheduleList.length > 0) {
                /// this code used to check is all checked or not
                for (var i = 0; i < this.weekScheduleList.length; i++) {
                  if (this.weekScheduleList[i].data.length > 0) {
                    this.weekScheduleList[i].data.forEach(function (sch) {
                      if (sch.selected == false) {
                        isUnseleted = true;
                        return;
                      }
                    });
                  }
                }
              }

              this.isChecked = isUnseleted ? false : true;
            }
          }, {
            key: "showDeleteBTN",
            value: function showDeleteBTN() {
              if (this.selectedArray.examSchldId.length > 0) {
                return true;
              }

              if (this.selectedArray.classSchldId.length > 0) {
                return true;
              }

              return false;
            } // Expand All

          }, {
            key: "expandAllRows",
            value: function expandAllRows() {
              var count = this.weekScheduleList.length;

              for (var i = 0; i < count; i++) {
                if (this.isExpand) {
                  this.expandAll(i);
                } else {
                  this.collapesAll(i);
                }
              }

              this.isExpand = !this.isExpand;
            }
          }, {
            key: "checkAllCheckbox",
            value: function checkAllCheckbox() {
              var _this58 = this;

              this.isChecked = !this.isChecked;
              this.expandAllRows();

              if (this.weekScheduleList.length > 0) {
                for (var i = 0; i < this.weekScheduleList.length; i++) {
                  if (this.weekScheduleList[i].data.length > 0) {
                    document.getElementById('tbodyItem' + i).classList.add("active");
                    document.getElementById('tbodyView' + i).classList.remove("hide");
                    this.weekScheduleList[i].data.forEach(function (sch) {
                      if (!_this58.isChecked) {
                        if (sch.class_type != "Exam") {
                          if (sch.selected == true) {
                            sch.selected = false;

                            if (_this58.selectedArray.classSchldId.indexOf(sch.schd_id) > -1) {
                              _this58.selectedArray.classSchldId.splice(_this58.selectedArray.classSchldId.indexOf(sch.schd_id), 1);
                            }
                          }
                        }
                      } else {
                        if (sch.class_type != "Exam") {
                          if (sch.selected == false) {
                            sch.selected = true;

                            _this58.selectedArray.classSchldId.push(sch.schd_id);
                          }
                        }
                      }
                    });
                  }
                }
              }
            } // Hide Past Schedules

          }, {
            key: "hidePastClassAction",
            value: function hidePastClassAction(data) {
              var date = data.id.split('(');

              if (moment__WEBPACK_IMPORTED_MODULE_2__(date[0]).format('YYYY-MM-DD') >= moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD')) {
                return true;
              } else {
                return false;
              }
            }
          }]);

          return ClassHomeComponent;
        }();

        ClassHomeComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ClassScheduleService"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }];
        };

        ClassHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-class-home',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./class-home.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-class/class-home/class-home.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./class-home.component.scss */
          "./src/app/components/course-module/create-course/course-class/class-home/class-home.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ClassScheduleService"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])], ClassHomeComponent);
        return ClassHomeComponent;
      }();

      var DateFormat =
      /** @class */
      function () {
        var DateFormat = /*#__PURE__*/function () {
          function DateFormat() {
            _classCallCheck(this, DateFormat);
          }

          _createClass(DateFormat, [{
            key: "transform",
            value: function transform(value) {
              if (value != "" && value != null && value != undefined) {
                return moment__WEBPACK_IMPORTED_MODULE_2__(value).format('DD-MM-YYYY');
              } else {
                return value;
              }
            }
          }]);

          return DateFormat;
        }();

        DateFormat = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
          name: 'dateMonthYearFromat'
        })], DateFormat);
        return DateFormat;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-class/course-class.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-class/course-class.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseClassCourseClassComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9jcmVhdGUtY291cnNlL2NvdXJzZS1jbGFzcy9jb3Vyc2UtY2xhc3MuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-class/course-class.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-class/course-class.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: CourseClassComponent */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseClassCourseClassComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseClassComponent", function () {
        return CourseClassComponent;
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

      var CourseClassComponent =
      /** @class */
      function () {
        var CourseClassComponent = /*#__PURE__*/function () {
          function CourseClassComponent() {
            _classCallCheck(this, CourseClassComponent);
          }

          _createClass(CourseClassComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return CourseClassComponent;
        }();

        CourseClassComponent.ctorParameters = function () {
          return [];
        };

        CourseClassComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-course-class',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./course-class.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-class/course-class.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./course-class.component.scss */
          "./src/app/components/course-module/create-course/course-class/course-class.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], CourseClassComponent);
        return CourseClassComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-class/course-class.module.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-class/course-class.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: CourseClassModule */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseClassCourseClassModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseClassModule", function () {
        return CourseClassModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @progress/kendo-angular-treeview */
      "./node_modules/@progress/kendo-angular-treeview/__ivy_ngcc__/dist/fesm2015/index.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _course_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./course-class.routing.module */
      "./src/app/components/course-module/create-course/course-class/course-class.routing.module.ts");
      /* harmony import */


      var _course_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./course-class.component */
      "./src/app/components/course-module/create-course/course-class/course-class.component.ts");
      /* harmony import */


      var _class_home_class_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./class-home/class-home.component */
      "./src/app/components/course-module/create-course/course-class/class-home/class-home.component.ts");
      /* harmony import */


      var _class_add_class_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./class-add/class-add.component */
      "./src/app/components/course-module/create-course/course-class/class-add/class-add.component.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! hammerjs */
      "./node_modules/hammerjs/hammer.js");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/primeng */
      "./node_modules/primeng/primeng.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../services/course-services/class-schedule.service */
      "./src/app/services/course-services/class-schedule.service.ts");
      /* harmony import */


      var _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../services/course-services/topic-listing.service */
      "./src/app/services/course-services/topic-listing.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
      // import { TreeviewModule } from 'ngx-treeview';


      var CourseClassModule =
      /** @class */
      function () {
        var CourseClassModule = function CourseClassModule() {
          _classCallCheck(this, CourseClassModule);
        };

        CourseClassModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeViewModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], // BsDatepickerModule,
          ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__["TimepickerModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_12__["SplitButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_12__["MenuModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _course_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseClassRouting"]],
          exports: [],
          declarations: [_course_class_component__WEBPACK_IMPORTED_MODULE_6__["CourseClassComponent"], _class_home_class_home_component__WEBPACK_IMPORTED_MODULE_7__["ClassHomeComponent"], _class_add_class_add_component__WEBPACK_IMPORTED_MODULE_8__["ClassAddComponent"], _class_home_class_home_component__WEBPACK_IMPORTED_MODULE_7__["DateFormat"]],
          providers: [_services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_13__["ClassScheduleService"], _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_14__["TopicListingService"]]
        })], CourseClassModule);
        return CourseClassModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-class/course-class.routing.module.ts":
    /*!****************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-class/course-class.routing.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: CourseClassRouting */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseClassCourseClassRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseClassRouting", function () {
        return CourseClassRouting;
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


      var _course_class_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./course-class.component */
      "./src/app/components/course-module/create-course/course-class/course-class.component.ts");
      /* harmony import */


      var _class_home_class_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./class-home/class-home.component */
      "./src/app/components/course-module/create-course/course-class/class-home/class-home.component.ts");
      /* harmony import */


      var _class_add_class_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./class-add/class-add.component */
      "./src/app/components/course-module/create-course/course-class/class-add/class-add.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CourseClassRouting =
      /** @class */
      function () {
        var CourseClassRouting = function CourseClassRouting() {
          _classCallCheck(this, CourseClassRouting);
        };

        CourseClassRouting = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _course_class_component__WEBPACK_IMPORTED_MODULE_2__["CourseClassComponent"],
            pathMatch: 'prefix',
            children: [{
              path: '',
              redirectTo: 'home'
            }, {
              path: 'home',
              component: _class_home_class_home_component__WEBPACK_IMPORTED_MODULE_3__["ClassHomeComponent"]
            }, {
              path: 'add',
              component: _class_add_class_add_component__WEBPACK_IMPORTED_MODULE_4__["ClassAddComponent"]
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], CourseClassRouting);
        return CourseClassRouting;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-course-module-create-course-course-class-course-class-module-es5.js.map