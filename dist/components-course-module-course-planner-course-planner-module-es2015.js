(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-course-module-course-planner-course-planner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/course-planner/class/class.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/course-planner/class/class.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clear-fix\" style=\"padding-right: 2%;\">\n  <section class=\"middle-top clearFix bulk-header\">\n\n    <div>\n      <h1 class=\"pull-left\">\n        <a *ngIf=\"!jsonFlag.isProfessional\" style=\"padding:0px; \">\n          Classes\n        </a>\n        <a *ngIf=\"jsonFlag.isProfessional\" style=\"padding:0px; \">\n          Batch\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <span>Schedule</span>\n      </h1>\n    </div>\n\n  </section>\n\n  <!-- <section style=\"margin-top: -25px;\">\n    <div class=\"header-section\">\n      <div class=\"header-item active\" id=\"class\" routerLink=\"/view/course/coursePlanner/class\">\n        <div class=\"img-container\">\n          <img src=\"./assets/images/course_planner/class_white.svg\" alt=\"class\">\n        </div>\n        <div class=\"model-name-container\">\n          <span>Class</span>\n        </div>\n      </div>\n      <div class=\"header-item non-active\" id=\"exam\" routerLink=\"/view/course/coursePlanner/exam\">\n        <div class=\"img-container\">\n          <img src=\"./assets/images/course_planner/exam.svg\" alt=\"exam\">\n        </div>\n        <div class=\"model-name-container\">\n          <span>Exam</span>\n        </div>\n      </div>\n    </div>\n  </section> -->\n\n\n\n\n  <!-- All Pop Up  -->\n\n  <!-- Edit Class -->\n  <div id=\"editClass\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\" style=\"margin-top: 10%;\n    \">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Edit Class</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"edit-input-container field-wrapper\">\n            <label for=\"\">Description</label>\n            <input type=\"text\" class=\"form-ctrl\" name=\"\" value=\"\" placeholder=\"Enter Description\"\n              [(ngModel)]=\"editClass.description\">\n          </div>\n          <div class=\"edit-input-container field-wrapper\">\n            <label for=\"\">Homework</label>\n            <input type=\"text\" class=\"form-ctrl\" name=\"\" value=\"\" placeholder=\"Enter Homework\"\n              [(ngModel)]=\"editClass.homework\">\n          </div>\n          <div class=\"edit-input-container field-wrapper\" *ngIf=\"!jsonFlag.isProfessional\">\n            <label for=\"\">Teacher<span class=\"danger\">*</span></label>\n            <select class=\"dropdown form-ctrl\" name=\"\" [(ngModel)]=\"editClass.faculty\">\n              <option value=\"-1\">Select Teacher</option>\n              <option [value]=\"faculty.teacher_id\" *ngFor=\"let faculty of facultyList\">{{faculty.teacher_name}}</option>\n            </select>\n          </div>\n          <div class=\"edit-input-container field-wrapper\" *ngIf=\"!schoolModel\">\n            <label for=\"\">Topic</label>\n            <input type=\"text\" class=\"form-ctrl\" name=\"\" value=\"\" readonly [(ngModel)]=\"editClass.topic_covered_names\"\n              (click)=\"fetchTopics()\" placeholder=\"Link\"\n              [ngClass]=\"(editClass.topic_covered_names != '')? 'topic-linked' : 'no-topic-linked'\">\n            <i class=\"fa fa-link\" aria-hidden=\"true\" (click)=\"fetchTopics()\"\n              style=\"cursor: pointer;font-size: 15px;position: absolute; top: 35px; right: 51%;background: white;\"\n              [ngClass]=\"(editClass.topic_covered_names != '')? 'topic-linked-fa' : 'no-topic-linked-fa'\"></i>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"updateClass()\">Save</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- Topic Listing -->\n  <div id=\"topicModel\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"showEditOption()\">&times;</button>\n          <h4 class=\"modal-title\">Link Topic</h4>\n        </div>\n        <div class=\"modal-body\">\n          <ng-container *ngTemplateOutlet=\"topicsRecursiveList; context:{$implicit: topicsList, level: 1 }\">\n          </ng-container>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"showEditOption()\">Cancel</button>\n          <button class=\"btn fullBlue\" (click)=\"saveTopics()\">Save</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <ng-template #topicsRecursiveList let-topicsList let-level=\"level\">\n    <div style=\"margin:2px !important\" *ngFor=\"let topic of topicsList\">\n      <div class=\"topic-container\" [ngClass]=\"level == 1 ? 'level1Topic': 'subTopicLevel'\">\n        <div class=\"arrow-icon\" [style.visibility]=\"topic.subTopic.length ? 'visible':'hidden'\"\n          (click)=\"toggleArrow(topic)\">\n          <i [ngClass]=\"topic.isExpand ? 'fa fa-caret-down': 'fa fa-caret-right'\"\n            style=\"font-size: 15px!important;\"></i>\n        </div>\n        <div class=\"field-checkbox-wrapper\" style=\"margin-bottom: 5px !important;padding-left:0px !important\">\n          <input type=\"checkbox\" [(ngModel)]=\"topic.checked\" class=\"form-checkbox\" value=\"{{topic.checked}}\"\n            (click)=\"selectTopics(topic,$event)\" id=\"topic-{{topic.topicId}}\" />\n\n          <label for=\"topic-{{topic.topicId}}\" style=\"margin-left:25px !important\">{{topic.topicName}}</label>\n\n          <div *ngIf=\"topic.isExpand\">\n            <ng-container\n              *ngTemplateOutlet=\"topicsRecursiveList; context:{ $implicit: topic.subTopic, level: level + 1  }\">\n            </ng-container>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </ng-template>\n\n\n  <!-- Reschedule pop -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"rescheduleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\" *ngIf=\"isReschedulePop\" style=\"margin-top: 5%;\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h5 class=\"modal-title\" style=\"font-weight: 500;font-size: 14px;\" id=\"exampleModalLongTitle\">{{classMarkedForAction.batch_name}}</h5>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row dueDate\" style=\"margin-left: -15px;\">\n\n            <div class=\"c-sm-4 c-md-4 c-lg-4\">\n              <div class=\"field-wrapper datePickerBox\" style=\"padding-top:0px\">\n                <label for=\"reschDate\">Reschedule Date</label>\n                <input type=\"text\" id=\"reschDate\" name=\"reschDate\" readonly=\"true\" class=\"form-ctrl bsDatepicker\"\n                  [(ngModel)]=\"reschedDate\" bsDatepicker style=\"height:30px\">\n              </div>\n            </div>\n\n            <div class=\"c-sm-4 c-md-4 c-lg-4\" style=\"margin-top:-15px;\">\n              <div class=\"form-wrapper timepick rescheduleTime\" style=\"padding-left: 15px;\">\n                <label for=\"startTime\">Start Time</label>\n                <div class=\"tbox\">\n                  <div class=\"times \">\n                    <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"timepicker.reschedStartTime.hour\"\n                      name=\"startTime\">\n                      <option [value]=\"time\" *ngFor=\"let time of times\">\n                        {{time}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"times\">\n                    <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"timepicker.reschedStartTime.minute\"\n                      name=\"minute\">\n                      <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                        {{minute}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"c-sm-4 c-md-4 c-lg-4\" style=\"margin-top:-15px;\">\n              <div class=\"form-wrapper timepick rescheduleTime\">\n                <label for=\"endtime\">End Time</label>\n                <div class=\"tbox\">\n                  <div class=\"times\">\n                    <select id=\"\" class=\"mins side-form-ctrl\" [(ngModel)]=\"timepicker.reschedEndTime.hour\"\n                      name=\"endtime\">\n                      <option [value]=\"time\" *ngFor=\"let time of times\">\n                        {{time}}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"times\">\n                    <select id=\"\" class=\"mers side-form-ctrl\" [(ngModel)]=\"timepicker.reschedEndTime.minute\"\n                      name=\"minute\">\n                      <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                        {{minute}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"field-wrapper\" style=\"width: 50%; margin-left: 3%;\">\n              <textarea type=\"text\" style=\"height:50px;\" id=\"reschreason\" name=\"reschreason\" [(ngModel)]=\"reschedReason\"\n                value=\"\" placeholder=\"Reschedule Reason\" class=\"form-ctrl textbox\">\n            </textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"clearfix\">\n            <aside class=\"pull-left\">\n              <div class=\"field-checkbox-wrapper\" style=\"margin-top: 5px\">\n                <input type=\"checkbox\" value=\"\" class=\"form-checkbox\" id=\"is_reshedule_notified\"\n                  [checked]=\"getCheckedStatus('resheduleNotified')\" (change)=\"notifyRescheduleUpdate($event)\">\n                <label for=\"is_reshedule_notified\">Notify Students</label>\n              </div>\n            </aside>\n            <aside class=\"pull-right popup-btn\">\n              <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeRescheduleClass()\" data-dismiss=\"modal\">\n              <input type=\"button\" value=\"Reschedule Class\" data-dismiss=\"modal\" (click)=\"rescheduleClass()\"\n                class=\"fullBlue btn\" [disabled]=\"isRippleLoad\">\n            </aside>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Notify pop -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"notifyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"notifyModalCenterTitle\"\n    aria-hidden=\"true\" *ngIf=\"isReminderPop\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h5 class=\"modal-title\" id=\"notifyModalCenterTitle\">Send Reminder For\n            <span style=\"font-weight: 600;\" *ngIf=\"jsonFlag.isProfessional\">{{classMarkedForAction.batch_name}}</span>\n            <span style=\"font-weight: 600;\" *ngIf=\"!jsonFlag.isProfessional\">{{classMarkedForAction.batch_name}}</span>\n          </h5>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\" style=\"margin: 10px 0px;\">\n            The reminder for the selected schedule will be sent!! click continue to proceed.\n          </div>\n          <div class=\"add_remarks\">\n            <div class=\"\" style=\"margin-left: 38%\">\n              <span>Limit</span>\n              <span class=\"button_type\">{{remarksLimit}}</span>\n            </div>\n            <div class=\"field-wrapper\" style=\"width: 50%;\">\n              <textarea type=\"text\" style=\"height:50px; border: 1px solid #d3d4d5;\" id=\"reminderRemarks\"\n                name=\"reminderRemarks\" [(ngModel)]=\"reminderRemarks\" value=\"\" placeholder=\"Remarks\"\n                class=\"form-ctrl textbox\" maxlength=\"50\" (ngModelChange)=\"countRemarksLimit()\">\n            </textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <aside class=\"pull-right popup-btn\">\n            <input type=\"button\" value=\"Cancel\" data-dismiss=\"modal\" class=\"btn\" (click)=\"closeRemiderClass()\">\n            <input type=\"button\" value=\"Continue\" data-dismiss=\"modal\" (click)=\"sendReminder()\" class=\"btn fullBlue\"\n              [disabled]=\"isRippleLoad\">\n          </aside>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Cancel pop up for Course Model-->\n  <!-- Modal  -->\n  <div class=\"modal\" id=\"cancelModal\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <!---*ngIf=\"isCancelPop\"--->\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Cancel Class\n            <span style=\"font-weight: 600;\">{{classMarkedForAction?.batch_name}}</span>\n          </h5>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"CancelWrapper\">\n            <div class=\"row cancelField\">\n              <div class=\"c-lg-12 c-md-12 c-sm-12\">\n                <div class=\"field-wrapper\">\n                  <textarea class=\"form-ctrl textBox\" style=\"height: 100px;\" placeholder=\"Cancellation Reason:\" value=\"\"\n                    [(ngModel)]=\"cancellationReason\">\n                </textarea>\n                </div>\n              </div>\n              <div class=\"c-lg-12 c-md-12 c-sm-12\" style=\"margin-top: 20px\">\n                <div class=\"field-checkbox-wrapper\">\n                  <input type=\"checkbox\" value=\"\" class=\"form-checkbox\" id=\"notifyCancel\"\n                    [checked]=\"getCheckedStatus('notifyCancel')\" (change)=\"notifyCancelUpdate($event)\">\n                  <label for=\"notifyCancel\">Notify Students For Class Cancellation</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <aside class=\"pull-right popup-btn\">\n            <input type=\"button\" value=\"Cancel\" data-dismiss=\"modal\" class=\"btn\" (click)=\"closeCancelClass()\">\n            <input type=\"button\" value=\"Cancel Class\" data-dismiss=\"modal\" (click)=\"cancelClass()\"\n              [disabled]=\"jsonFlag.isRippleLoad\" class=\"btn fullBlue\">\n          </aside>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Cancel pop up for Batch Model-->\n  <!-- Modal  -->\n  <div class=\"modal\" id=\"cancelBatchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\" *ngIf=\"isCourseCancel\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Cancel Schedule\n            <span style=\"font-weight: 600;\">{{classMarkedForAction.batch_name}}</span>\n            <span style=\"font-weight: 600;\" *ngIf=\"!jsonFlag.isProfessional\">{{classMarkedForAction.master_course}}\n              &#8594; {{classMarkedForAction.coursee_names}} </span>\n            <span style=\"font-weight: 600;\" *ngIf=\"jsonFlag.isProfessional\">{{classMarkedForAction.batch_name}}</span>\n          </h5>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"CancelWrapper\">\n            <div class=\"row cancelField\">\n              <div class=\"c-lg-12 c-md-12 c-sm-12\">\n                <div class=\"field-wrapper\">\n                  <textarea class=\"form-ctrl textBox\" style=\"height: 100px;\" placeholder=\"Cancellation Reason:\" value=\"\"\n                    [(ngModel)]=\"cancellationReason\">\n                </textarea>\n                </div>\n              </div>\n              <div class=\"c-lg-12 c-md-12 c-sm-12\" style=\"margin-top: 20px\">\n                <div class=\"field-checkbox-wrapper\">\n                  <input type=\"checkbox\" value=\"\" class=\"form-checkbox\" id=\"notifyCancel\"\n                    [checked]=\"getCheckedStatus('notifyCancel')\" (change)=\"notifyCancelUpdate($event)\">\n                  <label for=\"notifyCancel\">Notify Students For Class Cancellation</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <aside class=\"pull-right popup-btn\">\n            <input type=\"button\" value=\"Cancel\" data-dismiss=\"modal\" class=\"btn\" (click)=\"closeCourseCancelClass()\">\n            <input *ngIf=\"!jsonFlag.isProfessional\" data-dismiss=\"modal\" type=\"button\" value=\"Update Schedule\"\n              (click)=\"cancelCourseClass()\" class=\"fullBlue btn\" [disabled]=\"jsonFlag.isRippleLoad\">\n            <input *ngIf=\"jsonFlag.isProfessional\" data-dismiss=\"modal\" type=\"button\" value=\"Cancel Class\"\n              (click)=\"cancelBatchClass()\" class=\"fullBlue btn\" [disabled]=\"jsonFlag.isRippleLoad\">\n          </aside>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Main section started -->\n<section>\n\n  <section class=\"filter-head\">\n    <div class=\"filter-header-container\">\n      <div class=\"filter-item-1\">\n        <!-- FOR COURSE MODEL -->\n        <div class=\"header-item\" *ngIf=\"!jsonFlag.isProfessional && !schoolModel\">\n          <!-- changes by Nalini - to handle school model conditions -->\n          <span>{{schoolModel ? 'Standard' : 'Master Course'}}<span class=\"danger\">*</span></span>\n          <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.masterCourse\" (ngModelChange)=\"updateCoursesList()\">\n            <option value=\"-1\">Select {{schoolModel ? 'Standard' : 'Master Course'}}</option>\n            <option [value]=\"masterCourse.master_course\" *ngFor=\"let masterCourse of masterCourseList\">{{masterCourse.master_course}}</option>\n          </select>\n        </div>\n        <div class=\"header-item\" *ngIf=\"!jsonFlag.isProfessional && schoolModel\">\n          <!-- changes by Nalini - to handle school model conditions -->\n          <span>Standard<span class=\"danger\">*</span></span>\n          <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.standard_id\" (ngModelChange)=\"getCourseList($event)\">\n            <option value=\"-1\">Select Standard</option>\n            <option [value]=\"masterCourse.standard_id\" *ngFor=\"let masterCourse of masterCourseList\">{{masterCourse.standard_name}}</option>\n          </select>\n        </div>\n        <div class=\"header-item\" *ngIf=\"!jsonFlag.isProfessional\">\n          <span>{{schoolModel ? 'Section' : 'Course'}}</span>\n          <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.course\" (ngModelChange)=\"updateSubjectsList()\">\n            <option value=\"-1\">Select {{schoolModel ? 'Section' : 'Course'}}</option>\n            <option [value]=\"course.course_id\" *ngFor=\"let course of courseList\">{{course.course_name}}</option>\n          </select>\n          <span *ngIf=\"inputElements.course != '-1' && !jsonFlag.isProfessional\" style=\"font-size: 10px;\">Duration: {{courseStartDate}} {{courseEndDate}}</span>\n        </div>\n        <div class=\"header-item\" *ngIf=\"!jsonFlag.isProfessional\">\n          <span>Subject</span>\n          <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.subject\" (ngModelChange)=\"updateSubject()\">\n            <option value=\"-1\">Select Subject</option>\n            <option [value]=\"subject.batch_id\" *ngFor=\"let subject of subjectList\">{{subject.subject_name}}</option>\n          </select>\n        </div>\n        \n          <!-- FOR BATCH MODEL -->\n          <div class=\"header-item\" *ngIf=\"jsonFlag.isProfessional\">\n            <span>Master Course <span class=\"danger\">*</span></span>\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.standard_id\"\n              (ngModelChange)=\"updateCoursesList()\">\n              <option value=\"-1\">Select Master Course</option>\n              <option [value]=\"standard.standard_id\" *ngFor=\"let standard of masterCourseList\">\n                {{standard.standard_name}}</option>\n            </select>\n          </div>\n          <div class=\"header-item\" *ngIf=\"jsonFlag.isProfessional\">\n            <span>Course</span>\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.subject_id\"\n              (ngModelChange)=\"updateSubjectsList()\">\n              <option value=\"-1\">Select Course</option>\n              <option [value]=\"subject.subject_id\" *ngFor=\"let subject of courseList\">{{subject.subject_name}}</option>\n            </select>\n          </div>\n          <div class=\"header-item\" *ngIf=\"jsonFlag.isProfessional\">\n            <span>Batch</span>\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.batch_id\"\n              (ngModelChange)=\"updateSubject()\">\n              <option value=\"-1\">Select Batch</option>\n              <option [value]=\"batch.batch_id\" *ngFor=\"let batch of batchList\">{{batch.batch_name}}</option>\n            </select>\n            <span *ngIf=\"inputElements.batch_id != '-1' && jsonFlag.isProfessional\" style=\"font-size: 10px;\">Duration:\n              {{courseStartDate | date: 'dd-MMM-yyyy'}} - {{courseEndDate | date: 'dd-MMM-yyyy'}}</span>\n          </div>\n\n          <div class=\"header-item\" style=\"width: 25%;\">\n            <span>Filter</span>\n            <div class=\"input-container\">\n              <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n              <input type=\"text\" name=\"\" value=\"\" class=\"filer-input\" placeholder=\"Choose filter from dropdown\">\n              <i class=\"fa fa-caret-down\" aria-hidden=\"true\" (click)=\"toggleFilter()\" *ngIf=\"!filterShow\"></i>\n              <i class=\"fa fa-caret-up\" aria-hidden=\"true\" (click)=\"toggleFilter()\" *ngIf=\"filterShow\"></i>\n            </div>\n            <span style=\"font-size: 10px;\">From: {{coursePlannerFilters.from_date | date: 'dd-MMM-yyyy'}} &nbsp; To:\n              {{coursePlannerFilters.to_date | date: 'dd-MMM-yyyy'}}</span>\n            <div class=\"filter-container\" *ngIf=\"filterShow\">\n\n              <div class=\"date-container\">\n                <div class=\"date-title\">\n                  <span>Date</span>\n                </div>\n                <div class=\"date-values-container\">\n                  <div class=\"field-checkbox-wrapper date-value-item\">\n                    <input type=\"checkbox\" id=\"thisWeek\" name=\"thisWeek\" [(ngModel)]=\"filterDateInputs.thisWeek\"\n                      class=\"form-checkbox\" (change)=\"updateDateFilter('thisWeek', $event)\">\n                    <label for=\"thisWeek\">This Week</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper date-value-item\">\n                    <input type=\"checkbox\" id=\"lastWeek\" name=\"lastWeek\" [(ngModel)]=\"filterDateInputs.lastWeek\"\n                      class=\"form-checkbox\" (change)=\"updateDateFilter('lastWeek', $event)\">\n                    <label for=\"lastWeek\">Last Week</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper date-value-item\">\n                    <input type=\"checkbox\" id=\"thisMonth\" name=\"thisMonth\" [(ngModel)]=\"filterDateInputs.thisMonth\"\n                      class=\"form-checkbox\" (change)=\"updateDateFilter('thisMonth', $event)\">\n                    <label for=\"thisMonth\">This Month</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper date-value-item\">\n                    <input type=\"checkbox\" id=\"custom\" name=\"custom\" [(ngModel)]=\"filterDateInputs.custom\"\n                      class=\"form-checkbox\" (change)=\"updateDateFilter('custom', $event)\">\n                    <label for=\"custom\">Custom</label>\n                    <input style=\"margin-left:10%;visibility:hidden;\" type=\"text\" value=\"\" id=\"customeDate\"\n                      class=\"widgetDatepicker bsDatepicker\" name=\"schedWidDate\" [(ngModel)]=\"filterDateRange\"\n                      (ngModelChange)=\"updateFilterDateRange($event)\" readonly=\"true\" bsDaterangepicker />\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"status-container\">\n                <div class=\"status-title\">\n                  <span>Status</span>\n                </div>\n                <div class=\"status-values-container\">\n                  <div class=\"field-checkbox-wrapper status-value-item\">\n                    <input type=\"checkbox\" id=\"upcoming\" name=\"\" [(ngModel)]=\"filterStatusInputs.upcoming\"\n                      class=\"form-checkbox\" (change)=\"updateStatusFilter($event, 'upcoming')\">\n                    <label for=\"upcoming\" style=\"color: #ff6c24;\">Upcoming</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper status-value-item\">\n                    <input type=\"checkbox\" id=\"attendancePending\" name=\"\"\n                      [(ngModel)]=\"filterStatusInputs.attendancePending\" class=\"form-checkbox\"\n                      (change)=\"updateStatusFilter($event, 'pending')\">\n                    <label for=\"attendancePending\" style=\"color: #8d8d8d;\">Attendance Pending</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper status-value-item\">\n                    <input type=\"checkbox\" id=\"completed\" name=\"\" [(ngModel)]=\"filterStatusInputs.completed\"\n                      class=\"form-checkbox\" (change)=\"updateStatusFilter($event, 'completed')\">\n                    <label for=\"completed\" style=\"color: #00b55a;\">Completed</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper status-value-item\">\n                    <input type=\"checkbox\" id=\"cancelled\" name=\"\" [(ngModel)]=\"filterStatusInputs.cancelled\"\n                      class=\"form-checkbox\" (change)=\"updateStatusFilter($event, 'cancelled')\">\n                    <label for=\"cancelled\" style=\"color: #df0d2f;\">Cancelled</label>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"faculty-container\" *ngIf=\"userType!=3\">\n                <div class=\"faculty-title\">\n                  <span>Teacher</span>\n                </div>\n                <div class=\"faculty-dropdown-container\">\n                  <select class=\"faculty-select-box\" name=\"\" [(ngModel)]=\"inputElements.faculty\"\n                    (ngModelChange)=\"updateFacultyInFilter()\">\n                    <option value=\"-1\">Select Teacher</option>\n                    <option [value]=\"faculty.teacher_id\" *ngFor=\"let faculty of facultyList\">{{faculty.teacher_name}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"go-btn-container\">\n            <button type=\"button\" name=\"button\" class=\"fullBlue gobtn\" (click)=\"getData()\">GO</button>\n          </div>\n        </div>\n        <div class=\"filter-item-2\" style=\"width: 12%;\">\n          <button type=\"button\" name=\"button\" class=\"add-class-btn\" (click)=\"redirect()\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n            &nbsp;\n            Add {{schoolModel ? 'Routine' : 'Class'}}\n          </button>\n        </div>\n      </div>\n    </section>\n<!-- changes by Nalini - to handle school model conditions -->\n  <section class=\"table-holder\" *ngIf=\"coursePlannerData?.length > 0\" (click)=\"closeAll()\">\n    <div class=\"table-container\">\n      <div class=\"table-header-container\">\n        <div class=\"table-heading-item small\" style=\"padding-left: 15px;\">\n          <span>Date</span>\n        </div>\n        <div class=\"table-heading-item small\">\n          <span>Time</span>\n        </div>\n        <div class=\"table-heading-item medium\" *ngIf=\"showHideColumns.masterCourse\">\n          <span>{{schoolModel ? 'Standard' : 'Mastercourse'}}</span>\n        </div>\n        <div class=\"table-heading-item medium\" *ngIf=\"showHideColumns.course\">\n          <span>{{schoolModel ? 'Section' : 'Course'}}</span>\n        </div>\n        <div class=\"table-heading-item medium\" *ngIf=\"showHideColumns.subject\">\n          <span *ngIf=\"!jsonFlag.isProfessional\">Subject</span>\n          <span *ngIf=\"jsonFlag.isProfessional\">Batch</span>\n        </div>\n        <div class=\"table-heading-item medium\" *ngIf=\"showHideColumns.description\">\n          <span>Description</span>\n        </div>\n        <div class=\"table-heading-item medium\" *ngIf=\"showHideColumns.homework\">\n          <span>Homework</span>\n        </div>\n        <div class=\"table-heading-item medium\" *ngIf=\"showHideColumns.teacher\">\n          <span>Teacher</span>\n        </div>\n        <div class=\"table-heading-item large\" *ngIf=\"!schoolModel && showHideColumns.topic\">\n          <span>Topic(s)</span>\n        </div>\n        <div class=\"table-heading-item small align-center\">\n          <span>Status</span>\n        </div>\n        <div class=\"table-heading-item medium align-center action\">\n          <span>Action</span>\n          <i class=\"fa fa-cog\" aria-hidden=\"true\" (click)=\"showHideCol()\"></i>\n          <div class=\"show-hide-container\" *ngIf=\"jsonFlag.showHideColumn\">\n            <div class=\"show-hide-header\">\n              <span>Choose Show/Hide Column</span>\n              <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"hideShowHideMenu()\"></i>\n            </div>\n            <div class=\"show-hide-value-container\">\n              <div class=\"field-checkbox-wrapper show-hide-item\">\n                <input type=\"checkbox\" id=\"course\" name=\"\" [(ngModel)]=\"showHideColumns.course\"\n                    class=\"form-checkbox\" (change)=\"hideCol($event)\" [disabled]=\"!showHideColumns.course && checkedColCounter == dynamicColCounter\">\n                <label for=\"course\">{{schoolModel ? 'Section' : 'Course'}}</label>\n              </div>\n              <div class=\"field-checkbox-wrapper show-hide-item\">\n                <input type=\"checkbox\" id=\"subject\" name=\"\" [(ngModel)]=\"showHideColumns.subject\"\n                    class=\"form-checkbox\" (change)=\"hideCol($event)\" [disabled]=\"!showHideColumns.subject && checkedColCounter == dynamicColCounter\">\n                <label for=\"subject\" *ngIf=\"!jsonFlag.isProfessional\">Subject</label>\n                <label for=\"subject\" *ngIf=\"jsonFlag.isProfessional\">Batch</label>\n              </div>\n              <div class=\"field-checkbox-wrapper show-hide-item\" *ngIf=\"!jsonFlag.isProfessional\">\n                <input type=\"checkbox\" id=\"topic\" name=\"\" [(ngModel)]=\"showHideColumns.topic\"\n                    class=\"form-checkbox\" (change)=\"hideCol($event)\" [disabled]=\"!showHideColumns.topic && checkedColCounter == dynamicColCounter\">\n                <label for=\"topic\">Topic</label>\n              </div>\n                <div class=\"field-checkbox-wrapper show-hide-item\">\n                  <input type=\"checkbox\" id=\"teacher\" name=\"\" [(ngModel)]=\"showHideColumns.teacher\"\n                    class=\"form-checkbox\" (change)=\"hideCol($event)\"\n                    [disabled]=\"!showHideColumns.teacher && checkedColCounter == dynamicColCounter\">\n                  <label for=\"teacher\">Teacher</label>\n                </div>\n              </div>\n\n              <div class=\"show-hide-value-container\">\n                <div class=\"show-hide-item\" style=\"margin-bottom: 10px;\">\n                  <span style=\"font-weight: 600;color:#585574;\">NOTE : </span>\n                  <span style=\"font-weight: 400;color:#585574;\">To selct the below option(s) please unselect above\n                    option(s)</span>\n                </div>\n                <div class=\"field-checkbox-wrapper show-hide-item\">\n                  <input type=\"checkbox\" id=\"description\" name=\"\" [(ngModel)]=\"showHideColumns.description\"\n                    class=\"form-checkbox\" (change)=\"hideCol($event)\"\n                    [disabled]=\"!showHideColumns.description && checkedColCounter == dynamicColCounter\">\n                  <label for=\"description\">Description</label>\n                </div>\n                <div class=\"field-checkbox-wrapper show-hide-item\">\n                  <input type=\"checkbox\" id=\"homework\" name=\"\" [(ngModel)]=\"showHideColumns.homework\"\n                    class=\"form-checkbox\" (change)=\"hideCol($event)\"\n                    [disabled]=\"!showHideColumns.homework && checkedColCounter == dynamicColCounter\">\n                  <label for=\"homework\">Homework</label>\n                </div>\n              </div>\n\n              <div class=\"bg-container\">\n                <img src=\"./assets/images/course_planner/setting-illustration.svg\" alt=\"\">\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"table-value-outer-container\">\n          <div class=\"table-value-container\" [ngClass]=\"{'border-cancelled-class': course.status == 'Cancelled' || course.status == 'Cancel(Class)',\n                      'border-completed-class': course.status == 'Completed',\n                      'border-pending-class': course.status == 'Att. Pending',\n                      'border-upcoming-class': course.status == 'Upcoming'}\"\n            *ngFor=\"let course of coursePlannerData; let i = index;\">\n            <div class=\"table-value-item small\" style=\"padding-left: 15px;\">\n              <span>{{course.date | date: 'dd-MMM-yyyy' }}</span>\n              <span>&nbsp;</span>\n              <span>({{course.date | date :'EEE'}})</span>\n            </div>\n            <div class=\"table-value-item small\">\n              <span>{{course.start_time}}</span>\n              <span>&nbsp;- &nbsp;</span>\n              <span>{{course.end_time}}</span>\n            </div>\n            <div class=\"table-value-item medium\" *ngIf=\"showHideColumns.course\">\n              <span\n                title=\"{{course.course_name}}\">{{ (course.course_name.length > 20) ? (course.course_name | slice:0:20) + '...' : course.course_name }}</span>\n            </div>\n            <div class=\"table-value-item medium\" *ngIf=\"showHideColumns.subject && !jsonFlag.isProfessional\">\n              <span\n                title=\"{{course.subject_name}}\">{{ (course.subject_name.length > 20) ? (course.subject_name | slice:0:20) + '...' : course.subject_name }}</span>\n            </div>\n            <div class=\"table-value-item medium\" *ngIf=\"showHideColumns.subject && jsonFlag.isProfessional\">\n              <span\n                title=\"{{course.batch_name}}\">{{ (course.batch_name.length > 20) ? (course.batch_name | slice:0:20) + '...' : course.batch_name }}</span>\n            </div>\n            <div class=\"table-value-item medium\" *ngIf=\"showHideColumns.description\">\n              <span *ngIf=\"course?.description.length == 0\">-</span>\n              <span title=\"{{course.description}}\"\n                *ngIf=\"course?.description.length != 0\">{{ (course.description.length > 20) ? (course.description | slice:0:20) + '...' : course.description }}</span>\n            </div>\n            <div class=\"table-value-item medium\" *ngIf=\"showHideColumns.homework\">\n              <span *ngIf=\"course?.homework_assigned.length == 0\">-</span>\n              <span *ngIf=\"course?.homework_assigned.length != 0\"\n                title=\"{{course.homework_assigned}}\">{{ (course.homework_assigned.length > 20) ? (course.homework_assigned | slice:0:20) + '...' : course.homework_assigned }}</span>\n            </div>\n            <div class=\"table-value-item medium\" *ngIf=\"showHideColumns.teacher\">\n              <span *ngIf=\"course?.teacher_name.length == 0\">-</span>\n              <span *ngIf=\"course?.teacher_name.length != 0\"\n                title=\"{{course.teacher_name}}\">{{ (course.teacher_name.length > 20) ? (course.teacher_name | slice:0:20) + '...' : course.teacher_name }}</span>\n            </div>\n            <div class=\"table-value-item large\" *ngIf=\"!schoolModel &&showHideColumns.topic\">\n              <span *ngIf=\"course?.topics_covered.length == 0\">-</span>\n              <span *ngIf=\"course?.topics_covered.length != 0\"\n                title=\"{{course.topics_covered}}\">{{ (course.topics_covered.length > 25) ? (course.topics_covered | slice:0:25) + '...' : course.topics_covered }}</span>\n            </div>\n            <div class=\"table-value-item small align-center\">\n              <button type=\"button\" name=\"button\" class=\"upcoming-btn\"\n                *ngIf=\"course.status == 'Upcoming'\">Upcoming</button>\n              <button type=\"button\" name=\"button\" class=\"pending-btn\" *ngIf=\"course.status == 'Att. Pending'\">Att.\n                Pending</button>\n              <button type=\"button\" name=\"button\" class=\"cancelled-btn\"\n                *ngIf=\"course.status == 'Cancelled' || course.status == 'Cancel(Class)'\">Cancelled</button>\n              <button type=\"button\" name=\"button\" class=\"completed-btn\"\n                *ngIf=\"course.status == 'Completed'\">Completed</button>\n            </div>\n            <div class=\"table-value-item medium align-center action \">\n              <div class=\"action-container\" *ngIf=\"course.status == 'Upcoming'\">\n                <!--  upcoming classes action -->\n                <img src=\"./assets/images/reschedule.svg\" alt=\"Reschedule\" title=\"Reschedule\" data-toggle=\"modal\"\n                  data-target=\"#rescheduleModal\" *ngIf=\"getVisibility(course) && course.is_attendance_marked != 'Y'\"\n                  (click)=\"initiateRescheduleClass(course)\">\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\" data-toggle=\"modal\"\n                  data-target=\"#notifyModal\" *ngIf=\"getVisibility(course) && course.is_attendance_marked != 'Y'\"\n                  (click)=\"initiateRemiderClass(course)\"></i>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"color: #1283f4;\" title=\"Edit\" data-toggle=\"modal\"\n                  data-target=\"#editClass\" (click)=\"editCourseClass(course)\"></i>\n                <i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"color: red;\" title=\"Cancel\" data-toggle=\"modal\"\n                  data-target=\"#cancelModal\" *ngIf=\"!jsonFlag.isProfessional && course.is_attendance_marked != 'Y'\"\n                  (click)=\"initiateCancelClass(course)\"></i>\n                <i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"color: red;\" title=\"Cancel\" data-toggle=\"modal\"\n                  data-target=\"#cancelBatchModal\" *ngIf=\"jsonFlag.isProfessional && course.is_attendance_marked != 'Y'\"\n                  (click)=\"initiateCourseCancelClass(course)\"></i>\n              </div>\n              <div class=\"action-container\" *ngIf=\"course.status == 'Att. Pending'\">\n                <!--  pending classes action -->\n                <img src=\"./assets/images/checked-att.svg\" alt=\"Mark Attendance\" title=\"Update Attendance\"\n                  *ngIf=\"course.is_attendance_marked == 'Y'\" (click)=\"initiateMarkAttendance(course)\">\n                <img src=\"./assets/images/att.svg\" alt=\"Mark Attendance\" title=\"Mark Attendance\"\n                  *ngIf=\"course.is_attendance_marked == 'N'\" (click)=\"initiateMarkAttendance(course)\">\n                <img src=\"./assets/images/reschedule.svg\" alt=\"Reschedule\" title=\"Reschedule\" data-toggle=\"modal\"\n                  data-target=\"#rescheduleModal\" *ngIf=\"getVisibility(course) && course.is_attendance_marked != 'Y'\"\n                  (click)=\"initiateRescheduleClass(course)\">\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\" data-toggle=\"modal\"\n                  data-target=\"#notifyModal\" *ngIf=\"getVisibility(course) && course.is_attendance_marked != 'Y'\"\n                  (click)=\"initiateRemiderClass(course)\"></i>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"color: #1283f4;\" title=\"Edit\" data-toggle=\"modal\"\n                  data-target=\"#editClass\" (click)=\"editCourseClass(course)\"></i>\n                <i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"color: red;\" title=\"Cancel\" data-toggle=\"modal\"\n                  data-target=\"#cancelModal\" *ngIf=\"!jsonFlag.isProfessional && course.is_attendance_marked != 'Y'\"\n                  (click)=\"initiateCancelClass(course)\"></i>\n                <i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"color: red;\" title=\"Cancel\" data-toggle=\"modal\"\n                  data-target=\"#cancelBatchModal\" *ngIf=\"jsonFlag.isProfessional && course.is_attendance_marked != 'Y'\"\n                  (click)=\"initiateCourseCancelClass(course)\"></i>\n              </div>\n              <div class=\"action-container\" *ngIf=\"course.status == 'Cancelled' || course.status == 'Cancel(Class)'\">\n                <!--  cancelled classes action -->\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4;\" title=\"Notify\"\n                  (click)=\"notifyCancelClass(course)\"></i>\n              </div>\n              <div class=\"action-container\" *ngIf=\"course.status == 'Completed'\">\n                <!--  completed classes action -->\n                <img src=\"./assets/images/checked-att.svg\" alt=\"Mark Attendance\" title=\"Update Attendance\"\n                  *ngIf=\"course.is_attendance_marked == 'Y'\" (click)=\"initiateMarkAttendance(course)\">\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\" data-toggle=\"modal\"\n                  data-target=\"#notifyModal\" *ngIf=\"getVisibility(course) && course.is_attendance_marked != 'Y'\"\n                  (click)=\"initiateRemiderClass(course)\"></i>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"color: #1283f4;\" title=\"Edit\" data-toggle=\"modal\"\n                  data-target=\"#editClass\" (click)=\"editCourseClass(course)\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </section>\n\n  <div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;\">\n    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n      <pagination (goPage)=\"fectchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n        (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"totalCount\">\n      </pagination>\n    </div>\n  </div>\n\n\n  <!-- Illustration container -->\n  <section *ngIf=\"coursePlannerData?.length == 0\" (click)=\"closeAll()\">\n    <div class=\"illustration-container\">\n      <img src=\"./assets/images/course_planner/blank-illustration.svg\" alt=\"illustration\" class=\"illustration-img\">\n    </div>\n  </section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/course-planner/course-planner.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/course-planner/course-planner.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/course-planner/exam/exam.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/course-planner/exam/exam.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clear-fix\" style=\"padding-right: 2%;\">\n\n  <section class=\"middle-top clearFix bulk-header\">\n\n    <div>\n      <h1 class=\"pull-left\">\n        <a style=\"padding:0px; \">\n          Exam\n        </a>\n        <!-- <a routerLink=\"/view/batch\" *ngIf=\"jsonFlag.isProfessional\" style=\"padding:0px; \">\n          Batch\n        </a> -->\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <span>Schedule</span>\n      </h1>\n    </div>\n\n  </section>\n\n  <!-- <section style=\"margin-top: -25px;\">\n    <div class=\"header-section\">\n      <div class=\"header-item non-active\" id=\"class\" routerLink=\"/view/course/coursePlanner/class\">\n        <div class=\"img-container\">\n          <img src=\"./assets/images/course_planner/class.svg\" alt=\"class\" *ngIf=\"!activeModule\">\n        </div>\n        <div class=\"model-name-container\">\n          <span>Class</span>\n        </div>\n      </div>\n      <div class=\"header-item active\" id=\"exam\" routerLink=\"/view/course/coursePlanner/exam\">\n        <div class=\"img-container\">\n          <img src=\"./assets/images/course_planner/exam_white.svg\" alt=\"exam\">\n        </div>\n        <div class=\"model-name-container\">\n          <span>Exam</span>\n        </div>\n      </div>\n    </div>\n  </section> -->\n\n  <section>\n    <section class=\"filter-head\">\n      <div class=\"filter-header-container\">\n        <div class=\"filter-item-1\">\n          <!-- FOR COURSE MODEL -->\n          <div class=\"header-item\" *ngIf=\"!jsonFlag.isProfessional\">\n            <span>{{schoolModel ? 'Standard' : 'Master Course'}}<span class=\"danger\">*</span></span>\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.masterCourse\" (ngModelChange)=\"updateCoursesList()\">\n              <!-- changes by Nalini - to handle school model conditions -->\n              <option value=\"-1\">Select {{schoolModel ? 'Standard' : 'Master Course'}}</option>\n              <option [value]=\"masterCourse.master_course\" *ngFor=\"let masterCourse of masterCourseList\">{{masterCourse.master_course}}</option>\n            </select>\n          </div>\n          <div class=\"header-item\" *ngIf=\"!jsonFlag.isProfessional\" style=\"width: 19%;\">\n            <span>{{schoolModel ? 'Section' : 'Course'}}</span>\n            <!-- changes by Nalini - to handle school model conditions -->\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.course\" (ngModelChange)=\"updateSubjectsList()\">\n              <option value=\"-1\">Select {{schoolModel ? 'Section' : 'Course'}}</option>\n              <option [value]=\"course.course_id\" *ngFor=\"let course of courseList\">{{course.course_name}}</option>\n            </select>\n            <span *ngIf=\"inputElements.course != '-1' && !jsonFlag.isProfessional\" style=\"font-size: 10px;\">Duration:\n              {{courseStartDate}} {{courseEndDate}}</span>\n          </div>\n          <div class=\"header-item\" *ngIf=\"!jsonFlag.isProfessional\">\n            <span>Subject</span>\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.subject\"\n              (ngModelChange)=\"updateSubject()\">\n              <option value=\"-1\">Select Subject</option>\n              <option [value]=\"subject.batch_id\" *ngFor=\"let subject of subjectList\">{{subject.subject_name}}</option>\n            </select>\n          </div>\n\n          <!-- FOR BATCH MODEL -->\n          <div class=\"header-item\" *ngIf=\"jsonFlag.isProfessional\">\n            <span>Master Course <span class=\"danger\">*</span></span>\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.standard_id\"\n              (ngModelChange)=\"updateCoursesList()\">\n              <option value=\"-1\">Select Master Course</option>\n              <option [value]=\"standard.standard_id\" *ngFor=\"let standard of masterCourseList\">\n                {{standard.standard_name}}</option>\n            </select>\n          </div>\n          <div class=\"header-item\" *ngIf=\"jsonFlag.isProfessional\">\n            <span>Course</span>\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.subject_id\"\n              (ngModelChange)=\"updateSubjectsList()\">\n              <option value=\"-1\">Select Course</option>\n              <option [value]=\"subject.subject_id\" *ngFor=\"let subject of courseList\">{{subject.subject_name}}</option>\n            </select>\n          </div>\n          <div class=\"header-item\" *ngIf=\"jsonFlag.isProfessional\">\n            <span>Batch</span>\n            <select class=\"header-select-box\" name=\"\" [(ngModel)]=\"inputElements.batch_id\"\n              (ngModelChange)=\"updateSubject()\">\n              <option value=\"-1\">Select Batch</option>\n              <option [value]=\"batch.batch_id\" *ngFor=\"let batch of batchList\">{{batch.batch_name}}</option>\n            </select>\n            <span *ngIf=\"inputElements.batch_id != '-1' && jsonFlag.isProfessional\" style=\"font-size: 10px;\">Duration:\n              {{courseStartDate | date: 'dd-MMM-yyyy'}} - {{courseEndDate | date: 'dd-MMM-yyyy'}}</span>\n          </div>\n\n          <div class=\"header-item\" style=\"width: 25%;\">\n            <span>Filter</span>\n            <div class=\"input-container\">\n              <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n              <input type=\"text\" name=\"\" value=\"\" class=\"filer-input\" placeholder=\"Choose filter from dropdown\">\n              <i class=\"fa fa-caret-down\" aria-hidden=\"true\" (click)=\"toggleFilter()\" *ngIf=\"!filterShow\"></i>\n              <i class=\"fa fa-caret-up\" aria-hidden=\"true\" (click)=\"toggleFilter()\" *ngIf=\"filterShow\"></i>\n            </div>\n            <span style=\"font-size: 10px;\">From: {{coursePlannerFilters.from_date | date: 'dd-MMM-yyyy'}} &nbsp; To:\n              {{coursePlannerFilters.to_date | date: 'dd-MMM-yyyy'}}</span>\n            <div class=\"filter-container\" *ngIf=\"filterShow\">\n\n              <div class=\"date-container\">\n                <div class=\"date-title\">\n                  <span>Date</span>\n                </div>\n                <div class=\"date-values-container\">\n                  <div class=\"field-checkbox-wrapper date-value-item\">\n                    <input type=\"checkbox\" id=\"thisWeek\" name=\"thisWeek\" [(ngModel)]=\"filterDateInputs.thisWeek\"\n                      class=\"form-checkbox\" (change)=\"updateDateFilter('thisWeek', $event)\">\n                    <label for=\"thisWeek\">This Week</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper date-value-item\">\n                    <input type=\"checkbox\" id=\"lastWeek\" name=\"lastWeek\" [(ngModel)]=\"filterDateInputs.lastWeek\"\n                      class=\"form-checkbox\" (change)=\"updateDateFilter('lastWeek', $event)\">\n                    <label for=\"lastWeek\">Last Week</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper date-value-item\">\n                    <input type=\"checkbox\" id=\"thisMonth\" name=\"thisMonth\" [(ngModel)]=\"filterDateInputs.thisMonth\"\n                      class=\"form-checkbox\" (change)=\"updateDateFilter('thisMonth', $event)\">\n                    <label for=\"thisMonth\">This Month</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper date-value-item\">\n                    <input type=\"checkbox\" id=\"custom\" name=\"custom\" [(ngModel)]=\"filterDateInputs.custom\"\n                      class=\"form-checkbox\" (change)=\"updateDateFilter('custom', $event)\">\n                    <label for=\"custom\">Custom</label>\n                    <input style=\"margin-left:10%;visibility:hidden;\" type=\"text\" value=\"\" id=\"customeDate\"\n                      class=\"widgetDatepicker bsDatepicker\" name=\"schedWidDate\" [(ngModel)]=\"filterDateRange\"\n                      (ngModelChange)=\"updateFilterDateRange($event)\" readonly=\"true\" bsDaterangepicker />\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"status-container\">\n                <div class=\"status-title\">\n                  <span>Status</span>\n                </div>\n                <div class=\"status-values-container\">\n                  <div class=\"field-checkbox-wrapper status-value-item\">\n                    <input type=\"checkbox\" id=\"upcoming\" name=\"\" [(ngModel)]=\"filterStatusInputs.upcoming\"\n                      class=\"form-checkbox\" (change)=\"updateStatusFilter($event, 'upcoming')\">\n                    <label for=\"upcoming\" style=\"color: #ff6c24;\">Upcoming</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper status-value-item\">\n                    <input type=\"checkbox\" id=\"attendancePending\" name=\"\"\n                      [(ngModel)]=\"filterStatusInputs.attendancePending\" class=\"form-checkbox\"\n                      (change)=\"updateStatusFilter($event, 'pending')\">\n                    <label for=\"attendancePending\" style=\"color: #8d8d8d;\">Attendance Pending</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper status-value-item\">\n                    <input type=\"checkbox\" id=\"completed\" name=\"\" [(ngModel)]=\"filterStatusInputs.marksUpdated\"\n                      class=\"form-checkbox\" (change)=\"updateStatusFilter($event, 'marksUpdated')\">\n                    <label for=\"completed\" style=\"color: #00b55a;\">Marks Updated</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper status-value-item\">\n                    <input type=\"checkbox\" id=\"marksPending\" name=\"\" [(ngModel)]=\"filterStatusInputs.marksPending\"\n                      class=\"form-checkbox\" (change)=\"updateStatusFilter($event, 'marksPending')\">\n                    <label for=\"marksPending\" style=\"color: #8771FF;\">Marks Pending</label>\n                  </div>\n                  <div class=\"field-checkbox-wrapper status-value-item\">\n                    <input type=\"checkbox\" id=\"cancelled\" name=\"\" [(ngModel)]=\"filterStatusInputs.cancelled\"\n                      class=\"form-checkbox\" (change)=\"updateStatusFilter($event, 'cancelled')\">\n                    <label for=\"cancelled\" style=\"color: #df0d2f;\">Cancelled</label>\n                  </div>\n                </div>\n              </div>\n\n              <!-- <div class=\"faculty-container\">\n                <div class=\"faculty-title\">\n                  <span>Faculty</span>\n                </div>\n                <div class=\"faculty-dropdown-container\">\n                  <select class=\"faculty-select-box\" name=\"\" [(ngModel)]=\"inputElements.faculty\" (ngModelChange)=\"updateFacultyInFilter()\">\n                    <option value=\"-1\">Select Faculty</option>\n                    <option [value]=\"faculty.teacher_id\" *ngFor=\"let faculty of facultyList\">{{faculty.teacher_name}}</option>\n                  </select>\n                </div>\n              </div> -->\n\n            </div>\n          </div>\n          <div class=\"go-btn-container\">\n            <button type=\"button\" name=\"button\" class=\"fullBlue gobtn\" (click)=\"getData()\">GO</button>\n          </div>\n        </div>\n        <div class=\"filter-item-2\">\n          <button type=\"button\" name=\"button\" class=\"add-class-btn\" (click)=\"redirect()\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n            &nbsp;\n            Add Exam\n          </button>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"table-holder\" *ngIf=\"coursePlannerData?.length > 0\" (click)=\"closeAll()\">\n      <div class=\"table-container\">\n        <div class=\"table-header-container\">\n          <div class=\"table-heading-item small\" style=\"padding-left: 15px;\">\n            <span>Date</span>\n          </div>\n          <div class=\"table-heading-item small\">\n            <span>Time</span>\n          </div>\n          <div class=\"table-heading-item medium\">\n            <span>{{schoolModel ? 'Section' : 'Course'}}</span>\n          </div>\n          <div class=\"table-heading-item medium\" *ngIf=\"showHideColumns.subject\">\n            <span *ngIf=\"!jsonFlag.isProfessional\">Subject(s)</span>\n            <span *ngIf=\"jsonFlag.isProfessional\">Batch</span>\n          </div>\n          <div class=\"table-heading-item medium\" *ngIf=\"showHideColumns.topic\">\n            <span>{{schoolModel ? 'Exam Type' : 'Topic(s)'}}</span>\n          </div>\n          <div class=\"table-heading-item medium\" *ngIf=\"showHideColumns.description\">\n            <span>Description</span>\n          </div>\n          <div class=\"table-heading-item small\">\n            <span>Total Marks</span>\n          </div>\n          <!-- <div class=\"table-heading-item small\">\n            <span>Passing Marks</span>\n          </div> -->\n          <div class=\"table-heading-item small\">\n            <span>Room No.</span>\n          </div>\n          <div class=\"table-heading-item small align-center\">\n            <span>Status</span>\n          </div>\n          <div class=\"table-heading-item medium align-center action\">\n            <span>Action</span>\n            <i class=\"fa fa-cog\" aria-hidden=\"true\" (click)=\"showHideCol()\" *ngIf=\"jsonFlag.setting\"></i>\n            <div class=\"show-hide-container\" *ngIf=\"jsonFlag.showHideColumn\">\n              <div class=\"show-hide-header\">\n                <span>Choose Show/Hide Column</span>\n                <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"hideShowHideMenu()\"></i>\n              </div>\n              <div class=\"show-hide-value-container\">\n                <div class=\"field-checkbox-wrapper show-hide-item\">\n                  <input type=\"checkbox\" id=\"subject\" name=\"\" [(ngModel)]=\"showHideColumns.subject\"\n                    class=\"form-checkbox\" (change)=\"hideCol($event)\"\n                    [disabled]=\"!showHideColumns.subject && checkedColCounter == 1\">\n                  <label for=\"subject\" *ngIf=\"!jsonFlag.isProfessional\">Subject</label>\n                  <label for=\"subject\" *ngIf=\"jsonFlag.isProfessional\">Batch</label>\n                </div>\n                <div class=\"field-checkbox-wrapper show-hide-item\">\n                  <input type=\"checkbox\" id=\"topic\" name=\"\" [(ngModel)]=\"showHideColumns.topic\" class=\"form-checkbox\"\n                    (change)=\"hideCol($event)\" [disabled]=\"!showHideColumns.topic && checkedColCounter == 1\">\n                  <label for=\"topic\">Topic</label>\n                </div>\n              </div>\n\n              <div class=\"show-hide-value-container\">\n                <div class=\"show-hide-item\" style=\"margin-bottom: 10px;\">\n                  <span style=\"font-weight: 600;color:#585574;\">NOTE : </span>\n                  <span style=\"font-weight: 400;color:#585574;\">To selct the below option(s) please unselect above\n                    option(s)</span>\n                </div>\n                <div class=\"field-checkbox-wrapper show-hide-item\">\n                  <input type=\"checkbox\" id=\"description\" name=\"\" [(ngModel)]=\"showHideColumns.description\"\n                    class=\"form-checkbox\" (change)=\"hideCol($event)\"\n                    [disabled]=\"!showHideColumns.description && checkedColCounter == 1\">\n                  <label for=\"description\">Description</label>\n                </div>\n                <!-- <div class=\"field-checkbox-wrapper show-hide-item\">\n                  <input type=\"checkbox\" id=\"homework\" name=\"\" [(ngModel)]=\"showHideColumns.roomNo\"\n                      class=\"form-checkbox\" (change)=\"hideCol($event)\" [disabled]=\"!showHideColumns.roomNo && checkedColCounter == 2\">\n                  <label for=\"homework\">Room No.</label>\n                </div> -->\n              </div>\n\n              <div class=\"bg-container\">\n                <img src=\"./assets/images/course_planner/setting-illustration.svg\" alt=\"\">\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"table-value-outer-container\">\n          <div class=\"table-value-container\" [ngClass]=\"{'border-cancelled-class': course.status == 'Cancelled' || course.status == 'Cancel(Class)',\n                        'border-completed-class': course.status == 'Mks. Updated',\n                        'border-marksPending-class': course.status == 'Mks. pending',\n                        'border-pending-class': course.status == 'Att. Pending',\n                        'border-upcoming-class': course.status == 'Upcoming'}\"\n            *ngFor=\"let course of coursePlannerData; let i = index;\">\n            <div class=\"table-value-item small flex-item\" style=\"padding-left: 15px;\">\n              <span>{{course.date | date: 'dd-MMM-yyyy' }}</span>\n              <!-- <span>&nbsp;</span> -->\n              <span>({{course.date | date :'EEEE'}})</span>\n            </div>\n            <div class=\"table-value-item small flex-item\">\n              <span>{{course.start_time}}</span>\n              <!-- <span>&nbsp;- &nbsp;</span>   -->\n              <span>{{course.end_time}}</span>\n            </div>\n            <div class=\"table-value-item medium\">\n              <span\n                title=\"{{course.course_name}}\">{{ (course.course_name.length > 50) ? (course.course_name | slice:0:50) + '...' : course.course_name }}</span>\n            </div>\n            <div class=\"table-value-item medium\" *ngIf=\"showHideColumns.subject\">\n              <span *ngIf=\"!jsonFlag.isProfessional\"\n                title=\"{{course.subject_name}}\">{{ (course.subject_name.length > 50) ? (course.subject_name | slice:0:50) + '...' : course.subject_name }}</span>\n              <span *ngIf=\"jsonFlag.isProfessional\"\n                title=\"{{course.batch_name}}\">{{ (course.batch_name.length > 50) ? (course.batch_name | slice:0:50) + '...' : course.batch_name }}</span>\n            </div>\n            <div class=\"table-value-item medium\" *ngIf=\"schoolModel\">\n              <span title=\"{{course.exam_type}}\"\n                >{{ (course.exam_type.length > 30) ? (course.exam_type | slice:0:30) + '...' : course.exam_type }}</span>\n            </div>\n\n            <div class=\"table-value-item medium\" *ngIf=\"!schoolModel && showHideColumns.topic\">\n              <span *ngIf=\"course?.topics_covered.length == 0\">-</span>\n              <span title=\"{{course.topics_covered}}\"\n                *ngIf=\"course?.topics_covered.length != 0\">{{ (course.topics_covered.length > 50) ? (course.topics_covered | slice:0:50) + '...' : course.topics_covered }}</span>\n            </div>\n            <div class=\"table-value-item medium\" *ngIf=\"showHideColumns.description\">\n              <span *ngIf=\"course?.description.length == 0\">-</span>\n              <span title=\"{{course.description}}\"\n                *ngIf=\"course?.description.length != 0\">{{ (course.description.length > 50) ? (course.description | slice:0:50) + '...' : course.description }}</span>\n            </div>\n            <div class=\"table-value-item small\">\n              <span>{{course.total_marks}}</span>\n            </div>\n            <!-- <div class=\"table-value-item small\">\n              <span>-</span>\n            </div> -->\n            <div class=\"table-value-item small\">\n              <span *ngIf=\"course?.room_no.length == 0\">-</span>\n              <span *ngIf=\"course?.room_no.length != 0\">{{course.room_no}}</span>\n            </div>\n            <div class=\"table-value-item small align-center\">\n              <button type=\"button\" name=\"button\" class=\"upcoming-btn\"\n                *ngIf=\"course.status == 'Upcoming'\">Upcoming</button>\n              <button type=\"button\" name=\"button\" class=\"pending-btn\" *ngIf=\"course.status == 'Att. Pending'\">Att.\n                Pending</button>\n              <button type=\"button\" name=\"button\" class=\"cancelled-btn\"\n                *ngIf=\"course.status == 'Cancelled' || course.status == 'Cancel(Class)'\">Cancelled</button>\n              <button type=\"button\" name=\"button\" class=\"completed-btn\" *ngIf=\"course.status == 'Mks. Updated'\">Mks.\n                Updated</button>\n              <button type=\"button\" name=\"button\" class=\"marksPending-btn\" *ngIf=\"course.status == 'Mks. pending'\">Mks.\n                Pending</button>\n            </div>\n            <div class=\"table-value-item medium align-center action \">\n              <div class=\"action-container\" *ngIf=\"course.status == 'Upcoming'\">\n                <!--  upcoming exam action -->\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\"\n                  *ngIf=\"!jsonFlag.isProfessional\" (click)=\"sendReminderForCourse(course)\"></i>\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\"\n                  *ngIf=\"jsonFlag.isProfessional\" (click)=\"notifyExamSchedule(course)\"></i>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"color: #1283f4;\" title=\"Edit\"\n                  (click)=\"editCourseExam(course)\"></i>\n                <i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"color: red;\" title=\"Cancel\" data-toggle=\"modal\"\n                  data-target=\"#cancelModal\" *ngIf=\"!jsonFlag.isProfessional\"\n                  (click)=\"onCancelExamClickCourse(course)\"></i>\n                <i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"color: red;\" title=\"Cancel\" data-toggle=\"modal\"\n                  data-target=\"#cancelBatchModal\" *ngIf=\"jsonFlag.isProfessional\"\n                  (click)=\"onCancelExamClick(course)\"></i>\n              </div>\n              <div class=\"action-container\" *ngIf=\"course.status == 'Att. Pending'\">\n                <!--  pending exam action -->\n                <img src=\"./assets/images/att.svg\" alt=\"Mark Attendance\" title=\"Mark Attendance\"\n                  (click)=\"markAttendanceExamCourse(course)\">\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\"\n                  *ngIf=\"!jsonFlag.isProfessional\" (click)=\"sendReminderForCourse(course)\"></i>\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\"\n                  *ngIf=\"jsonFlag.isProfessional\" (click)=\"notifyExamSchedule(course)\"></i>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"color: #1283f4;\" title=\"Edit\"\n                  (click)=\"editCourseExam(course)\"></i>\n                <i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"color: red;\" title=\"Cancel\" data-toggle=\"modal\"\n                  data-target=\"#cancelModal\" *ngIf=\"!jsonFlag.isProfessional\"\n                  (click)=\"onCancelExamClickCourse(course)\"></i>\n                <i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"color: red;\" title=\"Cancel\" data-toggle=\"modal\"\n                  data-target=\"#cancelBatchModal\" *ngIf=\"jsonFlag.isProfessional\"\n                  (click)=\"onCancelExamClick(course)\"></i>\n              </div>\n              <div class=\"action-container\" *ngIf=\"course.status == 'Cancelled' || course.status == 'Cancel(Class)'\">\n                <!--  cancelled exam action -->\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\"\n                  (click)=\"notifyCancelClass(course)\"></i>\n              </div>\n              <div class=\"action-container\" *ngIf=\"course.status == 'Mks. Updated'\">\n                <!--  marks updated exam action -->\n                <img src=\"./assets/images/checked-att.svg\" alt=\"Update Attendance\" title=\"Update Attendance\"\n                  (click)=\"markAttendanceExamCourse(course)\">\n                <img src=\"./assets/images/exam-update.svg\" alt=\"Update Exam Marks\" title=\"Exam Marks\"\n                  style=\"cursor:pointer\" *ngIf=\"!jsonFlag.isProfessional\" (click)=\"examMarksUpdateCourse(course)\">\n                <img src=\"./assets/images/exam-update.svg\" alt=\"Update Exam Marks\" title=\"Exam Marks\"\n                  style=\"cursor:pointer\" *ngIf=\"jsonFlag.isProfessional\" (click)=\"examMarksUpdate(course)\">\n                <!-- <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\" *ngIf=\"!jsonFlag.isProfessional\" (click)=\"sendReminderForCourse(course)\"></i>\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\" *ngIf=\"jsonFlag.isProfessional\" (click)=\"notifyExamSchedule(course)\"></i> -->\n                <!-- Edit option removed bcoz we dont have notification send option after exam attendance update  --- Swapnil -->\n                <!-- <i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"color: #1283f4;\" title=\"Edit\" (click)=\"editCourseExam(course)\"></i> -->\n              </div>\n              <div class=\"action-container\" *ngIf=\"course.status == 'Mks. pending'\">\n                <!--  marks pending exam action -->\n                <img src=\"./assets/images/checked-att.svg\" alt=\"Update Attendance\" title=\"Update Attendance\"\n                  (click)=\"markAttendanceExamCourse(course)\">\n                <img src=\"./assets/images/exam-non.svg\" alt=\"Exam Marks\" title=\"Exam Marks\" style=\"cursor:pointer\"\n                  *ngIf=\"!jsonFlag.isProfessional\" (click)=\"examMarksUpdateCourse(course)\">\n                <img src=\"./assets/images/exam-non.svg\" alt=\"Exam Marks\" title=\"Exam Marks\" style=\"cursor:pointer\"\n                  *ngIf=\"jsonFlag.isProfessional\" (click)=\"examMarksUpdate(course)\">\n                <!-- <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\" *ngIf=\"!jsonFlag.isProfessional\" (click)=\"sendReminderForCourse(course)\"></i>\n                <i class=\"fa fa-bell\" aria-hidden=\"true\" style=\"color: #1283f4\" title=\"Notify\" *ngIf=\"jsonFlag.isProfessional\" (click)=\"notifyExamSchedule(course)\"></i> -->\n                <!-- Edit option removed bcoz we dont have notification send option after exam attendance update  --- Swapnil -->\n                <!-- <i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"color: #1283f4;\" title=\"Edit\" (click)=\"editCourseExam(course)\"></i> -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </section>\n\n  <div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;\">\n    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n      <pagination (goPage)=\"fectchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n        (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"totalCount\">\n      </pagination>\n    </div>\n  </div>\n\n\n  <!-- Illustration container -->\n  <section *ngIf=\"coursePlannerData?.length == 0\" (click)=\"closeAll()\">\n    <div class=\"illustration-container\">\n      <img src=\"./assets/images/course_planner/blank-illustration.svg\" alt=\"illustration\" class=\"illustration-img\">\n    </div>\n  </section>\n\n\n  <!-- ALL POPUP SECTION -->\n  <!-- Edit Exam for course model-->\n  <div id=\"editExamForCourse\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\" style=\"margin-top: 10%;\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Edit Exam</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"subject-container\" *ngFor=\"let exam of examList\">\n            <span>{{exam.subject_name}}</span>\n            <div class=\"edit-container\">\n              <div class=\"edit-input-container field-wrapper\">\n                <label for=\"\">Description</label>\n                <input type=\"text\" class=\"form-ctrl\" name=\"\" value=\"\" placeholder=\"Enter Description\"\n                  [(ngModel)]=\"exam.exam_description\">\n              </div>\n              <div class=\"edit-input-container field-wrapper\" *ngIf=\"!schoolModel\">\n                <label for=\"\">Topic</label>\n                <input type=\"text\" class=\"form-ctrl topic-input\" name=\"\" value=\"\" readonly [(ngModel)]=\"exam.topic_name\"\n                  (click)=\"fetchTopicForSubject(exam)\" placeholder=\"Link\"\n                  [ngClass]=\"(exam.topic_name != '')? 'topic-linked' : 'no-topic-linked'\">\n                <i class=\"fa fa-link\" aria-hidden=\"true\" (click)=\"fetchTopicForSubject(exam)\"\n                  style=\"cursor: pointer;font-size: 15px;position: absolute; top: 35px; right: 32%; background: white;\"\n                  [ngClass]=\"(exam.topic_name != '')? 'topic-linked-fa' : 'no-topic-linked-fa'\"></i>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"updateExam()\">Save</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- Edit Exam for batch model-->\n  <div id=\"editExam\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Edit Exam</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"edit-input-container field-wrapper\">\n            <label for=\"\">Description</label>\n            <input type=\"text\" class=\"form-ctrl\" name=\"\" value=\"\" placeholder=\"Enter Description\"\n              [(ngModel)]=\"editClass.description\">\n          </div>\n          <div class=\"edit-input-container field-wrapper\">\n            <label for=\"\">Topic</label>\n            <input type=\"text\" class=\"form-ctrl topic-input\" name=\"\" value=\"\" readonly\n              [(ngModel)]=\"editClass.topic_covered_names\" (click)=\"fetchTopics()\">\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"updateExam()\">Save</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- Topic Listing -->\n  <div id=\"topicModel\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"showEditOption()\">&times;</button>\n          <h4 class=\"modal-title\">Link Topic</h4>\n        </div>\n        <div class=\"modal-body\">\n          <ng-container *ngTemplateOutlet=\"topicsRecursiveList; context:{$implicit: topicsList, level: 1 }\">\n          </ng-container>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"showEditOption()\">Cancel</button>\n          <button class=\"btn fullBlue\" (click)=\"saveTopics()\">Save</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <ng-template #topicsRecursiveList let-topicsList let-level=\"level\">\n    <div style=\"margin:2px !important\" *ngFor=\"let topic of topicsList\">\n      <div class=\"topic-container\" [ngClass]=\"level == 1 ? 'level1Topic': 'subTopicLevel'\">\n        <div class=\"arrow-icon\" [style.visibility]=\"topic.subTopic.length ? 'visible':'hidden'\"\n          (click)=\"toggleArrow(topic)\">\n          <i [ngClass]=\"topic.isExpand ? 'fa fa-caret-down': 'fa fa-caret-right'\"\n            style=\"font-size: 15px!important;\"></i>\n        </div>\n        <div class=\"field-checkbox-wrapper\" style=\"margin-bottom: 5px !important;padding-left:0px !important\">\n          <input type=\"checkbox\" [(ngModel)]=\"topic.checked\" class=\"form-checkbox\" value=\"{{topic.checked}}\"\n            (click)=\"selectTopics(topic,$event)\" id=\"topic-{{topic.topicId}}\" />\n\n          <label for=\"topic-{{topic.topicId}}\" style=\"margin-left:25px !important\">{{topic.topicName}}</label>\n\n          <div *ngIf=\"topic.isExpand\">\n            <ng-container\n              *ngTemplateOutlet=\"topicsRecursiveList; context:{ $implicit: topic.subTopic, level: level + 1  }\">\n            </ng-container>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- CANCEL EXAM POP UP Course Model -->\n  <div id=\"cancelModal\" class=\"modal\" role=\"dialog\" *ngIf=\"courseCommonExamCancelPopUP\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Cancel Exam Schedule</h4>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"details row\">\n            <div class=\"c-sm-6 c-md-6 c-lg-6\">\n              <h5>{{schoolModel ? 'Standard' : 'Master Course'}} : {{courseTempData.master_course_name}} </h5>\n            </div>\n            <div class=\"c-sm-6 c-md-6 c-lg-6\" style=\"text-align: right;\">\n              <h5>Exam Schedule Date : {{courseTempData.date | date: 'dd-MMM-yyyy'}} </h5>\n            </div>\n          </div>\n\n          <div class=\"content-wraper\">\n            <div class=\"row button-Section\" style=\"margin-bottom: 10px;margin-top: 10px;\">\n              <div class=\"c-sm-6 c-md-6 c-lg-6\">\n                <h4>{{schoolModel ? 'Section' : 'Course'}} : {{courseTempData.course_name}}</h4>\n              </div>\n              <!-- <div class=\"c-sm-6 c-md-6 c-lg-6\">\n                <div class=\"pull-right\" *ngIf=\"showReasonSection == ''\">\n                  <button class=\"btn fullBlue\" (click)=\"cancelExamCourseWise()\">Cancel</button>\n                </div>\n              </div> -->\n            </div>\n          </div>\n\n          <div class=\"cancel-reason-container\">\n            <label for=\"cancelTxtBx\">Cancellation Reason<span class=\"text-danger\">*</span></label>\n            <textarea class=\"cancel-input\" [(ngModel)]=\"cancelPopUpData.reason\" id=\"cancelTxtBx\"\n              name=\"cancelTxtBx\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n\n          <div class=\"cancel-section\">\n            <div class=\"cancel-Class-Wrapper\">\n              <div class=\"clearfix\" style=\"padding-top: 10px;\">\n                <aside class=\"pull-left\" style=\"display: flex; flex-direction: row;\">\n                  <div class=\"field-checkbox-wrapper\" style=\"margin-top: 10px;\">\n                    <input type=\"checkbox\" value=\"\" id=\"chkBxNotifyStudent\" name=\"chkBxNotifyStudent\"\n                      class=\"form-checkbox\" [(ngModel)]=\"cancelPopUpData.notify\">\n                    <label for=\"chkBxNotifyStudent\">Notify Students</label>\n                  </div>\n                </aside>\n                <aside class=\"pull-right popup-btn\">\n                  <input type=\"button\" value=\"Close\" class=\"btn\" data-dismiss=\"modal\" (click)=\"closePopUpCommon()\">\n                  <input type=\"button\" value=\"Cancel Exam\" data-dismiss=\"modal\" (click)=\"cancelExamCall()\"\n                    class=\"fullBlue btn\" [disabled]=jsonFlag.isRippleLoad>\n                </aside>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <!-- MODAL -->\n  <!-- CANCEL EXAM FOR BATCH MODEL -->\n  <div id=\"cancelBatchModal\" class=\"modal\" role=\"dialog\" *ngIf=\"cancelExamPopUP\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Course Exam Schedule Cancellation</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"cancel-Class-Wrapper\">\n            <div class=\"row attendance-Note\" style=\"margin-left:0px; margin-right: 0px;\">\n              <div class=\"cancel-reason-container\">\n                <label for=\"cancelTxtBx\">Cancellation Reason<span class=\"text-danger\">*</span></label>\n                <textarea class=\"cancel-input\" [(ngModel)]=\"cancelPopUpData.reason\" id=\"cancelTxtBx\"\n                  name=\"cancelTxtBx\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"clearfix\" style=\"margin-top: 10px\">\n            <aside class=\"pull-left\" style=\"margin-top: 10px\">\n              <div class=\"field-checkbox-wrapper\">\n                <input type=\"checkbox\" value=\"\" id=\"chkBxNotifyStudent\" name=\"chkBxNotifyStudent\" class=\"form-checkbox\"\n                  [(ngModel)]=\"cancelPopUpData.notify\">\n                <label for=\"chkBxNotifyStudent\">Notify Students</label>\n              </div>\n            </aside>\n            <aside class=\"pull-right popup-btn\">\n              <input type=\"button\" value=\"Close\" class=\"btn\" data-dismiss=\"modal\" (click)=\"closeExamPopup()\">\n              <input type=\"button\" value=\"Cancel Class\" data-dismiss=\"modal\" (click)=\"cancelExamClassSchedule()\"\n                class=\"fullBlue btn\" [disabled]=\"jsonFlag.isRippleLoad\">\n            </aside>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n</div>");

/***/ }),

/***/ "./src/app/components/course-module/course-planner/class/class.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/course-module/course-planner/class/class.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.middle-section {\n  padding: 1%;\n}\n.header-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 20px;\n}\n.header-section .header-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 5px;\n  width: 50%;\n  cursor: pointer;\n}\n.header-section .header-item .img-container img {\n  width: 20px;\n  height: 20px;\n  margin: 0px 10px;\n}\n.header-section .header-item .model-name-container {\n  width: 50%;\n  margin-top: 3px;\n}\n.header-section .header-item .model-name-container span {\n  font-size: 14px;\n  font-weight: 600;\n}\n.header-section #class {\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border: 2px solid #3a65f8;\n}\n.header-section #exam {\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  border: 2px solid #3a65f8;\n}\n.active {\n  background: #3a66fa;\n  color: #fdfdfd;\n}\n.non-active {\n  background: #ffffff;\n  color: #b0b0b0;\n}\n.middle {\n  margin-top: 10px;\n}\n.filter-header-container {\n  display: flex;\n  flex-direction: row;\n  padding: 5px 0px;\n  border-top: 1px solid #d4d4d4;\n  border-bottom: 1px solid #d4d4d4;\n  justify-content: space-between;\n}\n.filter-header-container .filter-item-1 {\n  width: 80%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.filter-header-container .filter-item-1 .header-item {\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: 18%;\n  position: relative;\n}\n.filter-header-container .filter-item-1 .header-item .header-select-box {\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  margin: 5px 0px;\n  padding: 5px 0px;\n}\n.filter-header-container .filter-item-1 .header-item .input-container {\n  position: relative;\n}\n.filter-header-container .filter-item-1 .header-item .input-container .fa-filter {\n  position: absolute;\n  left: 2px;\n  background: white;\n  padding: 8px 10px;\n  top: 6px;\n  border-right: 1px solid #ccc;\n}\n.filter-header-container .filter-item-1 .header-item .input-container .fa-caret-down, .filter-header-container .filter-item-1 .header-item .input-container .fa-caret-up {\n  position: absolute;\n  right: 2px;\n  background: white;\n  padding: 7px 10px;\n  top: 7px;\n  z-index: 1;\n  cursor: pointer;\n}\n.filter-header-container .filter-item-1 .header-item .filer-input {\n  margin: 5px 0px;\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  padding: 8px 5px;\n  width: 100%;\n  padding-left: 35px;\n  height: 30px;\n}\n.filter-header-container .filter-item-1 .go-btn-container {\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: auto;\n}\n.filter-header-container .filter-item-1 .go-btn-container .gobtn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: #3a66fa;\n  color: #ffffff;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 20px;\n}\n.filter-header-container .filter-item-2 {\n  width: 10%;\n  display: flex;\n  justify-content: flex-end;\n}\n.filter-header-container .filter-item-2 .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n}\n.filter-header-container .filter-container {\n  position: absolute;\n  width: 100%;\n  background: white;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  top: 55px;\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  z-index: 20;\n}\n.filter-header-container .filter-container .date-container {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 0px;\n}\n.filter-header-container .filter-container .date-container .date-title {\n  font-weight: 600;\n  padding: 5px 0px;\n}\n.filter-header-container .filter-container .date-container .date-values-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.filter-header-container .filter-container .date-container .date-values-container .date-value-item {\n  width: 50%;\n}\n.filter-header-container .filter-container .date-container .date-values-container .date-value-item input, .filter-header-container .filter-container .date-container .date-values-container .date-value-item label {\n  cursor: pointer;\n  font-size: 12px;\n}\n.filter-header-container .filter-container .status-container {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 0px;\n}\n.filter-header-container .filter-container .status-container .status-title {\n  font-weight: 600;\n  padding: 5px 0px;\n}\n.filter-header-container .filter-container .status-container .status-values-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.filter-header-container .filter-container .status-container .status-values-container .status-value-item {\n  width: 50%;\n}\n.filter-header-container .filter-container .status-container .status-values-container .status-value-item input, .filter-header-container .filter-container .status-container .status-values-container .status-value-item label {\n  cursor: pointer;\n  font-size: 12px;\n}\n.filter-header-container .filter-container .faculty-container {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n.filter-header-container .filter-container .faculty-container .faculty-title {\n  font-weight: 600;\n  padding: 5px 0px;\n}\n.filter-header-container .filter-container .faculty-container .faculty-dropdown-container {\n  width: 100%;\n}\n.filter-header-container .filter-container .faculty-container .faculty-dropdown-container .faculty-select-box {\n  border-bottom: 1px solid #d4d4d4;\n  margin: 5px 0px;\n  padding: 5px 0px;\n  width: 100%;\n}\n.illustration-container {\n  display: block;\n}\n.illustration-container .illustration-img {\n  width: 40%;\n  /* height: 34%; */\n  margin-left: 12%;\n  margin-top: -2%;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .table-header-container {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  margin-right: 10px;\n  padding-left: 5px;\n  border-bottom: 1px solid #ccc;\n}\n.table-container .table-header-container .table-heading-item {\n  color: #585574;\n  font-weight: 600;\n  font-size: 12px;\n  padding: 0px 5px;\n}\n.table-container .table-header-container .table-heading-item .fa-cog {\n  position: absolute;\n  right: 20px;\n  cursor: pointer;\n  color: #9898a3;\n  font-size: 14px;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container {\n  display: flex;\n  flex-direction: column;\n  width: 230px;\n  right: 35px;\n  height: auto;\n  position: absolute;\n  top: 0px;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  z-index: 10;\n  background: white;\n  -webkit-animation-name: slideInRight;\n          animation-name: slideInRight;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .show-hide-header {\n  padding: 10px;\n  background: #f9f9f9;\n  color: #585574;\n  display: flex;\n  justify-content: space-between;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .show-hide-header .fa-times {\n  font-weight: 400;\n  cursor: pointer;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .show-hide-value-container {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid #ccc;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .show-hide-value-container .show-hide-item {\n  width: 100%;\n  text-align: left;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .show-hide-value-container .show-hide-item input, .table-container .table-header-container .table-heading-item .show-hide-container .show-hide-value-container .show-hide-item label {\n  font-size: 12px;\n  font-weight: 400;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .bg-container {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .bg-container img {\n  width: 75%;\n  margin-left: 25%;\n}\n.table-container .table-value-outer-container {\n  height: 59vh;\n  overflow-y: auto;\n}\n.table-container .table-value-container {\n  display: flex;\n  flex-direction: row;\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 10px;\n  padding: 5px 0px;\n  position: relative;\n}\n.table-container .table-value-container .table-value-item {\n  color: #585574;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  padding: 0px 5px;\n  word-break: break-all;\n}\n.table-container .table-value-container .table-value-item .upcoming-btn {\n  color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #ffffff;\n  background: #ff6c24;\n  cursor: default;\n  padding: 2px 10px;\n  width: 95px;\n  font-weight: 600;\n}\n.table-container .table-value-container .table-value-item .pending-btn {\n  color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #ffffff;\n  background: #8d8d8d;\n  cursor: default;\n  padding: 2px 10px;\n  width: 95px;\n  font-weight: 600;\n}\n.table-container .table-value-container .table-value-item .cancelled-btn {\n  color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #ffffff;\n  background: #df0d2f;\n  cursor: default;\n  padding: 2px 10px;\n  width: 95px;\n  font-weight: 600;\n}\n.table-container .table-value-container .table-value-item .completed-btn {\n  color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #ffffff;\n  background: #00b55a;\n  cursor: default;\n  padding: 2px 10px;\n  width: 95px;\n  font-weight: 600;\n}\n.table-container .border-cancelled-class {\n  border-left: 5px solid #df0d2f;\n}\n.table-container .border-completed-class {\n  border-left: 5px solid #00b55a;\n}\n.table-container .border-pending-class {\n  border-left: 5px solid #8d8d8d;\n}\n.table-container .border-upcoming-class {\n  border-left: 5px solid #ff6c24;\n}\n.table-container .align-center {\n  text-align: center;\n}\n.table-container .small {\n  width: 11%;\n  font-size: 12px;\n}\n.table-container .medium {\n  width: 13%;\n  font-size: 12px;\n}\n.table-container .large {\n  width: 15%;\n  font-size: 12px;\n}\n.table-container .action {\n  position: absolute;\n  right: 0px;\n}\n.table-container .action-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 7px;\n}\n.table-container .action-container i, .table-container .action-container img {\n  margin: 0px 5px;\n  max-width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.header-item .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 14px;\n  display: inline-block;\n}\n.header-item .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.header-item .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.header-item .field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.header-item .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.header-item .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.filter-res.pagination {\n  width: 100%;\n}\n.pagination {\n  margin: 0px;\n}\n.pagination .first:before {\n  content: \"« \";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .last:after {\n  content: \" »\";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .batch-size {\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination li {\n  border-right: 1px solid #ccc;\n  padding: 0px 7px;\n  margin: 0;\n  line-height: 10px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.pagination li a {\n  line-height: 10px;\n  font-size: 16px;\n  font-weight: 800;\n  border: none;\n  padding: 0px 14px;\n}\n.pagination li :hover {\n  background-color: transparent !important;\n}\n.pagination li:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -10%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -10%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes slideInRight {\n  from {\n    transform: translate3d(5%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInRight {\n  from {\n    transform: translate3d(5%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.form-wrapper {\n  background: transparent;\n  margin: 5px 0px;\n}\n.form-wrapper.datepicker span {\n  position: absolute;\n  top: 35px;\n  right: 20px;\n  font-weight: 600;\n  font-size: 14px;\n  color: red;\n  cursor: pointer;\n  width: 20px;\n  text-align: center;\n}\n.form-wrapper.datepicker span::before {\n  content: '';\n  background: url(\"/assets/images/calendar.svg\") no-repeat;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.form-wrapper.datepicker span:after {\n  content: '';\n  background: url(\"/assets/images/calendar.svg\") no-repeat;\n  position: absolute;\n  right: 0;\n  top: 20px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.form-wrapper label {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.77);\n  padding-bottom: 2px;\n  text-decoration: none;\n  text-transform: uppercase;\n  -webkit-font-smoothing: antialiased;\n}\n.form-wrapper .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding: 8px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n.form-wrapper .side-form-ctrl.bsDatepicker {\n  padding: 5px;\n  width: 100%;\n}\n.form-wrapper.timepick {\n  padding: 1px 0px;\n}\n.form-wrapper.timepick .tbox {\n  display: inline-block;\n  width: 100%;\n}\n.form-wrapper.timepick .tbox .times {\n  display: inline-block;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding: 8px 5px;\n  font-weight: 400;\n  font-size: 14px;\n  color: black;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl.mins {\n  width: 70px;\n  font-size: 12px;\n  height: 30px;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl.mers {\n  width: 50px;\n  font-size: 12px;\n  height: 30px;\n}\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 20px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.schedule-scroller .ct-disable-wrapper pos-rel ul li {\n  padding-top: 15px;\n  padding-bottom: 1px;\n  text-align: center;\n  float: left;\n  font-weight: 800;\n}\n#next_tab {\n  margin-top: 10px;\n}\n.rescheduleTime label {\n  text-transform: none;\n}\n.rescheduleTime .tbox {\n  padding: 0px 0px;\n}\n.rescheduleTime .tbox .times .side-form-ctrl.mins {\n  padding: 0px 0px;\n}\n.rescheduleTime .tbox .times .side-form-ctrl.mers {\n  padding: 0px 0px;\n}\n.borderWithText {\n  display: block;\n  margin: 10px 0px;\n}\n.borderWithText h2 {\n  font-size: 15px;\n  text-align: center;\n  border-bottom: 2px solid #f1f1f1;\n  position: relative;\n}\n.borderWithText h2 span {\n  background-color: white;\n  position: relative;\n  top: 10px;\n  padding: 0 10px;\n}\n.button_type {\n  padding: 0px 10px;\n  border: 1px solid #d4d4d4;\n  border-radius: 11px;\n}\n.edit-input-container {\n  margin-bottom: 5px;\n  position: relative;\n}\n.edit-input-container label {\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n.edit-input-container .form-ctrl {\n  width: 50%;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  padding: 5px;\n}\n.edit-input-container .topic-linked {\n  border: 1px solid #1283f4;\n  cursor: pointer;\n}\n.edit-input-container .no-topic-linked {\n  border: 1px solid #d4d4d4;\n  cursor: pointer;\n}\n.edit-input-container .topic-linked-fa {\n  color: #1283f4;\n  cursor: pointer;\n}\n.edit-input-container .no-topic-linked-fa {\n  color: #d4d4d4;\n  cursor: pointer;\n}\n#editClass .modal-body {\n  padding-top: 0px;\n}\n.topic-container {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  display: flex;\n  flex-direction: row;\n  margin: 2px;\n}\n.arrow-icon {\n  padding: 0 5px;\n}\n.level1Topic {\n  padding-top: 4px;\n  padding-bottom: 2px;\n}\n.subTopicLevel {\n  padding-top: 8px;\n}\n.pt-4 {\n  padding-top: 4px !important;\n}\n.topic-lbl {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.77);\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NvdXJzZS1wbGFubmVyL2NsYXNzL2NsYXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvY291cnNlLXBsYW5uZXIvY291cnNlLXBsYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsV0FBVztBREViO0FDQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBREVyQjtBQ1JBO0VBUUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0FESW5CO0FDakJBO0VBZ0JRLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FES3hCO0FDdkJBO0VBc0JNLFVBQVU7RUFDVixlQUFlO0FES3JCO0FDNUJBO0VBeUJRLGVBQWU7RUFDZixnQkFBZ0I7QURPeEI7QUNqQ0E7RUErQkksNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQix5QkFBeUI7QURNN0I7QUN2Q0E7RUFvQ0ksNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyx5QkFBeUI7QURPN0I7QUNIQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FETWhCO0FDSkE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBRE9oQjtBQ0pBO0VBQ0UsZ0JBQWdCO0FET2xCO0FBN0RBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyw4QkFBOEI7QUFnRWhDO0FBdEVBO0VBUUksVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBa0VsQztBQTdFQTtFQWFNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7RUFD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SSxjQUFjO0FBaUdsQjtBQS9GQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFrR3ZCO0FBaEdBO0VBQ0ksZ0JBQWdCO0FBbUdwQjtBQWpHQTtFQUNJLDJCQUF5QjtBQW9HN0I7QUFsR0E7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsbUNBQW1DO0FBcUd2QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9jb3Vyc2UtcGxhbm5lci9jbGFzcy9jbGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NvdXJzZS1wbGFubmVyL2NvdXJzZS1wbGFubmVyLmNvbXBvbmVudC5zY3NzXCI7XG5cbi5maWx0ZXItaGVhZGVyLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC5maWx0ZXItaXRlbS0xe1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuaGVhZGVyLWl0ZW17XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjM2UzZDRhO1xuICAgICAgd2lkdGg6IDE4JTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC5oZWFkZXItc2VsZWN0LWJveHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICB9XG4gICAgICAuaW5wdXQtY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5mYS1maWx0ZXJ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICB9XG4gICAgICAgIC5mYS1jYXJldC1kb3duLCAuZmEtY2FyZXQtdXB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmZpbGVyLWlucHV0e1xuICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICAgICAgcGFkZGluZzogOHB4IDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuZ28tYnRuLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICMzZTNkNGE7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIC5nb2J0bntcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNjZmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzYTY2ZmE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5maWx0ZXItaXRlbS0ye1xuICAgIHdpZHRoOiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5hZGQtY2xhc3MtYnRue1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNjZmYTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAuZmEtcGx1c3tcblxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZmlsdGVyLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRvcDogNTVweDtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIC5kYXRlLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIC5kYXRlLXRpdGxle1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgfVxuICAgICAgLmRhdGUtdmFsdWVzLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAuZGF0ZS12YWx1ZS1pdGVte1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgaW5wdXQsIGxhYmVse1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuc3RhdHVzLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIC5zdGF0dXMtdGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICB9XG4gICAgICAuc3RhdHVzLXZhbHVlcy1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLnN0YXR1cy12YWx1ZS1pdGVte1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgaW5wdXQsIGxhYmVse1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5mYWN1bHR5LWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIC5mYWN1bHR5LXRpdGxle1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgfVxuICAgICAgLmZhY3VsdHktZHJvcGRvd24tY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLmZhY3VsdHktc2VsZWN0LWJveHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaWxsdXN0cmF0aW9uLWNvbnRhaW5lcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIC5pbGx1c3RyYXRpb24taW1ne1xuICAgIHdpZHRoOiA0MCU7XG4gICAgLyogaGVpZ2h0OiAzNCU7ICovXG4gICAgbWFyZ2luLWxlZnQ6IDEyJTtcbiAgICBtYXJnaW4tdG9wOiAtMiU7XG5cbiAgfVxufVxuXG4udGFibGUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLnRhYmxlLWhlYWRlci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgLnRhYmxlLWhlYWRpbmctaXRlbXtcbiAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAuZmEtY29ne1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjOTg5OGEzO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAuc2hvdy1oaWRlLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5SaWdodDtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgICAuc2hvdy1oaWRlLWhlYWRlcntcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgLmZhLXRpbWVze1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNob3ctaGlkZS12YWx1ZS1jb250YWluZXJ7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgLnNob3ctaGlkZS1pdGVte1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgaW5wdXQsIGxhYmVse1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iZy1jb250YWluZXJ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC50YWJsZS12YWx1ZS1vdXRlci1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiA1OXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgLnRhYmxlLXZhbHVlLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC50YWJsZS12YWx1ZS1pdGVte1xuICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAudXBjb21pbmctYnRue1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY2YzI0O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgICB3aWR0aDogOTVweDtcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIC5wZW5kaW5nLWJ0bntcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzhkOGQ4ZDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICAuY2FuY2VsbGVkLWJ0bntcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2RmMGQyZjtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICAuY29tcGxldGVkLWJ0bntcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwYjU1YTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5ib3JkZXItY2FuY2VsbGVkLWNsYXNze1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2RmMGQyZjtcbiAgfVxuICAuYm9yZGVyLWNvbXBsZXRlZC1jbGFzc3tcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMGI1NWE7XG4gIH1cbiAgLmJvcmRlci1wZW5kaW5nLWNsYXNze1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzhkOGQ4ZDtcbiAgfVxuICAuYm9yZGVyLXVwY29taW5nLWNsYXNze1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmNmMyNDtcbiAgfVxuICAuYWxpZ24tY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc21hbGx7XG4gICAgd2lkdGg6IDExJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLm1lZGl1bXtcbiAgICB3aWR0aDogMTMlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAubGFyZ2V7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmFjdGlvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuICAuYWN0aW9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTUlO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBpLCBpbWd7XG4gICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICBtYXgtd2lkdGg6IDE0cHg7XG4gICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIENoZWNrYm94IHN0eWxlXG5cbi5oZWFkZXItaXRlbXtcblxuICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgfVxuICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmFmdGVyIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDg0ZjY7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGxlZnQ6IDhweDtcbiAgICAgIHRvcDogOXB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDpiZWZvcmUge1xuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgbGVmdDogMnB4O1xuICAgICAgdG9wOiA1cHg7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbCB7XG4gICAgICBjb2xvcjogIzAwODRmNjtcbiAgfVxufVxuXG5cbi8vIC1QYWdpbmF0aW9uXG4uZmlsdGVyLXJlcy5wYWdpbmF0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnBhZ2luYXRpb24ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIC5maXJzdCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiwqsgXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sYXN0IHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIiDCu1wiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmF0Y2gtc2l6ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG4gICAgbGkge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBwYWRkaW5nOiAwcHggN3B4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wYWdpbmF0aW9uIGxpOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5cbi8vIEFuaW1hdGlvbiBTdHlsZSBTZWN0aW9uXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAlLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAlLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUlLCAwLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUlLCAwLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbi8vIFJlc2NoZWR1bGUgcG9wIHVwXG4uZm9ybS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgJi5kYXRlcGlja2VyIHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgLy8gY29sb3I6ICMzMDliZjggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc3KTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICB9XG4gICAgLnNpZGUtZm9ybS1jdHJsIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC40MTk2MDc4NDMxMzcyNTQ5KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDhweCA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAmLmJzRGF0ZXBpY2tlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLnRpbWVwaWNrIHtcbiAgICAgICAgcGFkZGluZzogMXB4IDBweDtcbiAgICAgICAgLnRib3gge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAudGltZXMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaWRlLWZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjQxOTYwNzg0MzEzNzI1NDkpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICYubWlucyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5tZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpZWxkLXdyYXBwZXIuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnKSBuby1yZXBlYXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4uc2NoZWR1bGUtc2Nyb2xsZXIge1xuICAgIC5jdC1kaXNhYmxlLXdyYXBwZXIgcG9zLXJlbCB7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4jbmV4dF90YWIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5yZXNjaGVkdWxlVGltZSB7XG4gICAgbGFiZWwge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gICAgLnRib3gge1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xuICAgICAgICAudGltZXMge1xuICAgICAgICAgICAgLnNpZGUtZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICAmLm1pbnMge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLm1lcnMge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJvcmRlcldpdGhUZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIExJTUlUIGJ1dHRvblxuLmJ1dHRvbl90eXBle1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbn1cblxuXG4vLyBFZGl0IGNsYXNzXG4uZWRpdC1pbnB1dC1jb250YWluZXJ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLmZvcm0tY3RybHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAudG9waWMtbGlua2Vke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5uby10b3BpYy1saW5rZWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnRvcGljLWxpbmtlZC1mYXtcbiAgICBjb2xvcjogIzEyODNmNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm5vLXRvcGljLWxpbmtlZC1mYXtcbiAgICBjb2xvcjogI2Q0ZDRkNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuI2VkaXRDbGFzcyB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG59XG5cblxuLy8gVG9waWNcbi50b3BpYy1jb250YWluZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjogMnB4O1xufVxuLmFycm93LWljb257XG4gICAgcGFkZGluZzogMCA1cHg7XG59XG4ubGV2ZWwxVG9waWN7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnN1YlRvcGljTGV2ZWx7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5wdC00e1xuICAgIHBhZGRpbmctdG9wOjRweCFpbXBvcnRhbnRcbn1cbi50b3BpYy1sYmx7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Nyk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuIiwiLm1pZGRsZS1zZWN0aW9ue1xuICBwYWRkaW5nOiAxJTtcbn1cblxuLmhlYWRlci1zZWN0aW9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLmhlYWRlci1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmltZy1jb250YWluZXJ7XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5tb2RlbC1uYW1lLWNvbnRhaW5lcntcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICBzcGFue1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICNjbGFzc3tcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNjVmODtcbiAgfVxuICAjZXhhbXtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E2NWY4O1xuICB9XG59XG5cbi5hY3RpdmV7XG4gIGJhY2tncm91bmQ6ICMzYTY2ZmE7XG4gIGNvbG9yOiAjZmRmZGZkO1xufVxuLm5vbi1hY3RpdmV7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjYjBiMGIwO1xufVxuXG4ubWlkZGxle1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/course-module/course-planner/class/class.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/course-module/course-planner/class/class.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassComponent", function() { return ClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/course-services/class-schedule.service */ "./src/app/services/course-services/class-schedule.service.ts");
/* harmony import */ var _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/course-services/topic-listing.service */ "./src/app/services/course-services/topic-listing.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _course_planner_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../course-planner.model */ "./src/app/components/course-module/course-planner/course-planner.model.ts");
/* harmony import */ var _session_filter_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../session-filter.model */ "./src/app/components/course-module/course-planner/session-filter.model.ts");
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












let ClassComponent = /** @class */ (() => {
    let ClassComponent = class ClassComponent {
        constructor(router, auth, msgService, classService, widgetService, topicService, httpService) {
            this.router = router;
            this.auth = auth;
            this.msgService = msgService;
            this.classService = classService;
            this.widgetService = widgetService;
            this.topicService = topicService;
            this.httpService = httpService;
            // global variables
            this.jsonFlag = {
                isProfessional: false,
                institute_id: '',
                showHideColumn: false
            };
            this.coursePlannerFor = "class";
            // apis variables to send
            this.inputElements = {
                masterCourse: "-1",
                course: "-1",
                subject: "-1",
                standard_id: "-1",
                subject_id: "-1",
                batch_id: "-1",
                faculty: "-1",
                isAssigned: "N"
            };
            // Duration filter for course planner data
            this.filterDateInputs = {
                thisWeek: true,
                lastWeek: false,
                thisMonth: false,
                custom: false
            };
            //  class status filter for course planner data
            this.filterStatusInputs = {
                upcoming: true,
                attendancePending: true,
                completed: true,
                cancelled: true,
            };
            // Default col show hide status
            this.showHideColumns = {
                course: true,
                subject: true,
                teacher: true,
                topic: true,
                description: false,
                homework: false
            };
            // for show hide table columns
            this.checkedColCounter = 2;
            this.dynamicColCounter = 2;
            this.userType = 0;
            // Array Elements
            this.facultyList = [];
            this.coursePlannerData = []; // saved course planner fetched data
            this.allData = []; // used for pagination purpose
            // course model array
            this.masterCourseList = [];
            this.courseList = [];
            this.subjectList = [];
            // batch model array
            this.batchList = [];
            this.coursePlannerFilters = new _course_planner_model__WEBPACK_IMPORTED_MODULE_10__["CoursePlanner"]();
            this.sessionFiltersArr = new _session_filter_model__WEBPACK_IMPORTED_MODULE_11__["SessionFilter"]();
            this.filterShow = false;
            this.filterDateRange = "";
            // FOR PAGINATION
            this.pageIndex = 1;
            this.displayBatchSize = 20;
            this.totalCount = 0;
            this.sizeArr = [20, 50, 100, 150, 200, 500];
            this.times = ['', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];
            this.minArr = ['', '00', '15', '30', '45'];
            this.isReminderPop = false;
            this.isReschedulePop = false;
            this.isCancelPop = false; // For Course MODEL
            this.isCourseCancel = false; // For Batch Model
            // FOR Reschedule
            this.reschedDate = new Date();
            this.reschedReason = "";
            this.resheduleNotified = "Y";
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
            // FOR NOTIFY
            this.reminderRemarks = '';
            this.remarksLimit = 50;
            // FOR CANCEL PopUP
            this.cancellationReason = '';
            this.is_notified = 'Y';
            // for Edit
            this.editClass = {
                description: "",
                homework: "",
                faculty: "-1",
                topic_covered_ids: "",
                topic_covered_names: "",
                subject_id: "",
                course_id: "",
                class_sche_date: "",
                class_schedule_id: "",
                batch_id: "",
                custom_class_type: "",
                duration: "",
                room_no: "",
                start_time: "",
                end_time: ""
            };
            this.topicsList = [];
            this.totalTopicsList = [];
            this.selectedTopics = ''; //join ids by '|'
            this.selectedTopicsNames = '';
            this.schoolModel = false;
        }
        ngOnInit() {
            this.userType = sessionStorage.getItem('userType');
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.jsonFlag.isProfessional = true;
                }
                else {
                    this.jsonFlag.isProfessional = false;
                }
            });
            // changes by Nalini - to handle school model conditions
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            this.coursePlannerFilters.isMarksUpdate = "N";
            this.showHideColForModel();
            this.fetchPreFillData();
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            let filters = sessionStorage.getItem('coursePlannerFilter');
            if (filters) {
                this.sessionFilters(filters);
            }
        }
        showHideColForModel() {
            if (this.jsonFlag.isProfessional) {
                this.dynamicColCounter = 1;
                this.checkedColCounter = 1;
            }
        }
        clearFilters() {
            sessionStorage.setItem('batch_info', '');
            sessionStorage.setItem('isSubjectView', '');
            sessionStorage.setItem('isFromCoursePlanner', '');
            sessionStorage.setItem('coursePlannerFilter', '');
            this.sessionFiltersArr = new _session_filter_model__WEBPACK_IMPORTED_MODULE_11__["SessionFilter"]();
        }
        sessionFilters(filters) {
            this.sessionFiltersArr = JSON.parse(filters);
            this.inputElements.masterCourse = this.sessionFiltersArr.masterCourse;
            this.inputElements.course = this.sessionFiltersArr.courseId;
            this.inputElements.standard_id = this.sessionFiltersArr.standardId;
            this.inputElements.subject_id = this.sessionFiltersArr.subjectId;
            if (!this.jsonFlag.isProfessional) {
                this.inputElements.subject = this.sessionFiltersArr.batchId;
            }
            else {
                this.inputElements.batch_id = this.sessionFiltersArr.batchId;
            }
            this.inputElements.faculty = this.sessionFiltersArr.facultyId;
            this.filterStatusInputs.completed = this.sessionFiltersArr.isCompleted;
            this.filterStatusInputs.attendancePending = this.sessionFiltersArr.isPending;
            this.filterStatusInputs.cancelled = this.sessionFiltersArr.isCancelled;
            this.filterStatusInputs.upcoming = this.sessionFiltersArr.isUpcoming;
            this.filterDateInputs.thisWeek = this.sessionFiltersArr.thisWeek;
            this.filterDateInputs.lastWeek = this.sessionFiltersArr.lastWeek;
            this.filterDateInputs.thisMonth = this.sessionFiltersArr.thisMonth;
            this.filterDateInputs.custom = this.sessionFiltersArr.custom;
            this.coursePlannerFilters.master_course_name = this.sessionFiltersArr.masterCourse;
            this.coursePlannerFilters.course_id = this.sessionFiltersArr.courseId;
            this.coursePlannerFilters.batch_id = this.sessionFiltersArr.batchId;
            this.coursePlannerFilters.teacher_id = this.sessionFiltersArr.facultyId;
            if (!this.filterStatusInputs.completed) {
                this.coursePlannerFilters.isCompleted = "N";
            }
            if (!this.filterStatusInputs.attendancePending) {
                this.coursePlannerFilters.isPending = "N";
            }
            if (!this.filterStatusInputs.cancelled) {
                this.coursePlannerFilters.isCancelled = "N";
            }
            if (!this.filterStatusInputs.upcoming) {
                this.coursePlannerFilters.isUpcoming = "N";
            }
            this.coursePlannerFilters.from_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.sessionFiltersArr.from_date).format("YYYY-MM-DD");
            this.coursePlannerFilters.to_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.sessionFiltersArr.to_date).format("YYYY-MM-DD");
            sessionStorage.setItem('isFromCoursePlanner', String(false));
            sessionStorage.setItem('coursePlannerFilter', '');
            if (this.coursePlannerFilters.master_course_name != '-1' || this.coursePlannerFilters.standard_id != '-1') {
                setTimeout(() => {
                    this.getData();
                }, 2000);
            }
        }
        fetchPreFillData() {
            // get master course - course - subject data  for course model
            if (!this.jsonFlag.isProfessional) {
                this.auth.showLoader();
                if (this.schoolModel) {
                    this.getStandard();
                }
                else {
                    this.classService.getAllMasterCourse().subscribe(res => {
                        this.masterCourseList = res;
                        if (this.sessionFiltersArr.masterCourse != "-1") { //update course list if it was set in session
                            this.updateCoursesList();
                        }
                        this.auth.hideLoader();
                    }, err => {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
                        this.auth.hideLoader();
                    });
                }
            }
            else {
                // get master course - course - subject data  for Batch model
                this.auth.showLoader();
                this.classService.getStandardSubjectList(this.inputElements.standard_id, this.inputElements.subject_id, this.inputElements.isAssigned).subscribe(res => {
                    this.masterCourseList = res.standardLi;
                    this.batchList = res.batchLi;
                    if (this.sessionFiltersArr.standardId != "-1") { //update course list if it was set in session
                        this.updateCoursesList();
                    }
                    this.auth.hideLoader();
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
                });
            }
            // get active faculty list
            this.classService.getAllTeachersListOld().subscribe(res => {
                this.facultyList = res;
            }, err => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
            });
        }
        getStandard() {
            this.auth.showLoader();
            this.httpService.getData('/api/v1/courseMaster/standard-section-list/' + sessionStorage.getItem('institute_id')).subscribe((res) => {
                this.auth.hideLoader();
                this.masterCourseList = res.result;
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
            });
        }
        getCourseList(ev) {
            this.inputElements.course = "-1";
            this.inputElements.subject = '-1';
            this.coursePlannerFilters.standard_id = this.inputElements.standard_id;
            this.courseList = [];
            let standard_obj = this.masterCourseList.filter((standard) => (ev == standard.standard_id));
            if (standard_obj && standard_obj.length) {
                this.courseList = standard_obj[0].section_list;
            }
        }
        updateCoursesList() {
            // For Course Model
            if (!this.jsonFlag.isProfessional) {
                this.coursePlannerFilters.master_course_name = this.inputElements.masterCourse;
                if (this.sessionFiltersArr.courseId != "-1" && this.sessionFiltersArr.courseId != "") { // if courseid is set in seesion then fetch data according to it
                    this.inputElements.course = this.sessionFiltersArr.courseId;
                }
                else { // else reset to default values
                    this.inputElements.course = "-1";
                    this.inputElements.subject = "-1";
                    this.coursePlannerFilters.course_id = "-1";
                    this.coursePlannerFilters.batch_id = "-1";
                }
                if (this.inputElements.masterCourse == "") {
                    this.courseList = [];
                    this.subjectList = [];
                }
                else {
                    for (var i = 0; i < this.masterCourseList.length; i++) {
                        if (this.masterCourseList[i].master_course == this.inputElements.masterCourse) {
                            this.courseList = this.masterCourseList[i].coursesList;
                            if (this.sessionFiltersArr.courseId != "-1" && this.sessionFiltersArr.courseId != "") { //
                                this.updateSubjectsList();
                            }
                            else {
                                this.subjectList = [];
                                return;
                            }
                        }
                    }
                }
            }
            // For Batch Model
            else {
                this.coursePlannerFilters.standard_id = this.inputElements.standard_id;
                this.inputElements.subject_id = "-1";
                this.coursePlannerFilters.subject_id = "-1";
                this.inputElements.batch_id = '-1';
                if (this.inputElements.standard_id == "-1") {
                    this.courseList = [];
                }
                else {
                    // Fetch batches according to standard and subject id for all active batches
                    this.auth.showLoader();
                    this.classService.getStandardSubjectList(this.inputElements.standard_id, this.inputElements.subject_id, this.inputElements.isAssigned).subscribe(res => {
                        this.auth.hideLoader();
                        this.courseList = res.subjectLi;
                        this.batchList = res.batchLi;
                        this.auth.hideLoader();
                        for (var i = 0; i < this.masterCourseList.length; i++) {
                            if (this.masterCourseList[i].standard_id == this.inputElements.standard_id) {
                                this.courseStartDate = this.masterCourseList[i].start_date;
                                this.courseEndDate = this.masterCourseList[i].end_date;
                                if (this.sessionFiltersArr.subjectId != "-1" && this.sessionFiltersArr.subjectId != "") { // check subject id null to fetch course according to it.
                                    this.inputElements.subject_id = this.sessionFiltersArr.subjectId;
                                    this.updateSubjectsList();
                                }
                                return;
                            }
                        }
                    }, err => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
                    });
                }
            }
        }
        updateSubjectsList() {
            // For Course Model
            if (!this.jsonFlag.isProfessional) {
                this.coursePlannerFilters.course_id = this.inputElements.course;
                if (this.inputElements.course == "" || this.inputElements.course == "-1") {
                    this.subjectList = [];
                    this.inputElements.subject = "-1";
                    this.coursePlannerFilters.batch_id = this.inputElements.subject;
                }
                else {
                    if (this.schoolModel) {
                        this.getSchoolSubjects();
                    }
                    else {
                        for (var i = 0; i < this.courseList.length; i++) {
                            if (this.courseList[i].course_id == this.inputElements.course) {
                                this.subjectList = this.courseList[i].batchesList;
                                this.courseStartDate = this.courseList[i].start_date;
                                this.courseEndDate = this.courseList[i].end_date;
                                if (this.sessionFiltersArr.standardId != "-1" && this.sessionFiltersArr.standardId != "") {
                                    this.inputElements.subject = this.sessionFiltersArr.batchId;
                                }
                                this.clearFilters(); // after updating all the filter values clear session filter
                                return;
                            }
                        }
                    }
                }
            }
            // For Batch Model
            else {
                this.auth.showLoader();
                this.coursePlannerFilters.subject_id = this.inputElements.subject_id;
                this.classService.getStandardSubjectList(this.inputElements.standard_id, this.inputElements.subject_id, this.inputElements.isAssigned).subscribe(res => {
                    this.auth.hideLoader();
                    this.batchList = res.batchLi;
                    this.clearFilters();
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
                });
            }
        }
        getSchoolSubjects() {
            this.auth.showLoader();
            this.subjectList = [];
            const url = "/api/v1/courseMaster/fetch/courses/" + sessionStorage.getItem('institute_id') + '/' + this.inputElements.course;
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                //console.log('Subject', res);
                this.subjectList = res.batchesList;
            }, err => {
                this.msgService.showErrorMessage('error', '', err.error.message);
                this.auth.hideLoader();
                //console.log(err);
            });
        }
        updateSubject() {
            if (!this.jsonFlag.isProfessional) { // for Course Model
                this.coursePlannerFilters.batch_id = this.inputElements.subject;
            }
            else { // For Batch Model
                this.coursePlannerFilters.batch_id = this.inputElements.batch_id;
                let temp = this.batchList.filter(x => x.batch_id == this.inputElements.batch_id);
                this.courseStartDate = '';
                this.courseEndDate = '';
                if (temp) {
                    this.courseStartDate = temp[0].start_date;
                    this.courseEndDate = temp[0].end_date;
                }
            }
        }
        updateFacultyInFilter() {
            this.coursePlannerFilters.teacher_id = this.inputElements.faculty;
        }
        toggleFilter() {
            if (this.filterShow) {
                this.filterShow = false;
            }
            else {
                this.filterShow = true;
            }
        }
        updateDateFilter(inputDateFilter, e) {
            this.filterDateInputs.thisWeek = false;
            this.filterDateInputs.lastWeek = false;
            this.filterDateInputs.thisMonth = false;
            this.filterDateInputs.custom = false;
            if (inputDateFilter == 'custom') { //  Custom
                this.openCalendar('customeDate');
                this.filterDateInputs.custom = true;
                e.currentTarget.checked = true;
            }
            else if (inputDateFilter == 'lastWeek') { // Last week
                this.coursePlannerFilters.from_date = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'weeks').startOf('isoWeek').format("YYYY-MM-DD");
                this.coursePlannerFilters.to_date = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'weeks').endOf('isoWeek').format("YYYY-MM-DD");
                this.filterDateInputs.lastWeek = true;
                e.currentTarget.checked = true;
            }
            else if (inputDateFilter == 'thisMonth') { // This month
                this.coursePlannerFilters.from_date = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-01");
                this.coursePlannerFilters.to_date = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-") + moment__WEBPACK_IMPORTED_MODULE_2__().daysInMonth();
                this.filterDateInputs.thisMonth = true;
                e.currentTarget.checked = true;
            }
            else if (inputDateFilter == 'thisWeek') { // This Week
                this.coursePlannerFilters.from_date = moment__WEBPACK_IMPORTED_MODULE_2__().isoWeekday("Monday").format("YYYY-MM-DD");
                this.coursePlannerFilters.to_date = moment__WEBPACK_IMPORTED_MODULE_2__().weekday(7).format("YYYY-MM-DD");
                this.filterDateInputs.thisWeek = true;
                e.currentTarget.checked = true;
            }
        }
        updateStatusFilter(e, statusFilter) {
            if (!e.currentTarget.checked) { // if checkbox is unchecked then set courseplanner payload
                if (statusFilter == 'upcoming') {
                    this.coursePlannerFilters.isUpcoming = "N";
                }
                else if (statusFilter == 'pending') {
                    this.coursePlannerFilters.isPending = "N";
                }
                else if (statusFilter == 'completed') {
                    this.coursePlannerFilters.isCompleted = "N";
                }
                else if (statusFilter == 'cancelled') {
                    this.coursePlannerFilters.isCancelled = "N";
                }
            }
            else if (e.currentTarget.checked) { // if checkbox is getting checked
                if (statusFilter == 'upcoming') {
                    this.coursePlannerFilters.isUpcoming = "Y";
                }
                else if (statusFilter == 'pending') {
                    this.coursePlannerFilters.isPending = "Y";
                }
                else if (statusFilter == 'completed') {
                    this.coursePlannerFilters.isCompleted = "Y";
                }
                else if (statusFilter == 'cancelled') {
                    this.coursePlannerFilters.isCancelled = "Y";
                }
            }
        }
        openCalendar(id) {
            document.getElementById(id).click();
        }
        updateFilterDateRange(e) {
            if (this.filterDateInputs.custom) {
                this.coursePlannerFilters.from_date = moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("YYYY-MM-DD");
                this.coursePlannerFilters.to_date = moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("YYYY-MM-DD");
            }
        }
        getData() {
            this.filterShow = false;
            this.jsonFlag.showHideColumn = false;
            this.auth.showLoader();
            // Course/bacth model and master course is selected
            if ((!this.jsonFlag.isProfessional && !this.schoolModel && this.coursePlannerFilters.master_course_name == "-1") ||
                (!this.jsonFlag.isProfessional && this.schoolModel && this.coursePlannerFilters.standard_id == "-1") ||
                (this.jsonFlag.isProfessional && this.coursePlannerFilters.standard_id == "-1")) {
                let msg = this.schoolModel ? 'Please select standard' : 'Please select master course';
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', msg);
                this.auth.hideLoader();
                return;
            }
            else { // Get Course Planner Data
                if (this.schoolModel) {
                    this.coursePlannerFilters.master_course_name = '';
                }
                this.classService.getCoursePlannerData(this.coursePlannerFilters, this.coursePlannerFor).subscribe(res => {
                    this.auth.hideLoader();
                    this.allData = res;
                    if (this.allData.length == 0) {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No result found");
                    }
                    else {
                        this.totalCount = this.allData.length;
                        this.pageIndex = 1;
                        this.fectchTableDataByPage(this.pageIndex);
                    }
                }, err => {
                    this.auth.hideLoader();
                    this.coursePlannerData = [];
                    this.totalCount = 0;
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                });
            }
        }
        showHideCol() {
            if (this.jsonFlag.showHideColumn) {
                this.jsonFlag.showHideColumn = false;
            }
            else {
                this.jsonFlag.showHideColumn = true;
            }
        }
        hideCol(e) {
            if (!e.currentTarget.checked) {
                this.checkedColCounter++;
            }
            else {
                this.checkedColCounter--;
            }
        }
        hideShowHideMenu() {
            this.jsonFlag.showHideColumn = false;
        }
        /*** pagination functions */
        /* Fetch next set of data from server and update table */
        fetchNext() {
            this.pageIndex++;
            this.fectchTableDataByPage(this.pageIndex);
        }
        /* Fetch previous set of data from server and update table */
        fetchPrevious() {
            this.pageIndex--;
            this.fectchTableDataByPage(this.pageIndex);
        }
        /* Fetch table data by page index */
        fectchTableDataByPage(index) {
            this.pageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.coursePlannerData = this.getDataFromDataSource(startindex);
        }
        // get  appropriate course planner data according to page
        getDataFromDataSource(startindex) {
            let t = this.allData.slice(startindex, startindex + this.displayBatchSize);
            return t;
        }
        /* Fetches Data as per the user selected batch size */
        updateTableBatchSize(num) {
            this.pageIndex = 1;
            this.displayBatchSize = parseInt(num);
            this.getData();
        }
        // All pop up section with their functions
        initiateRescheduleClass(selected) {
            this.classMarkedForAction = selected;
            this.isReschedulePop = true;
        }
        initiateRemiderClass(selected) {
            this.classMarkedForAction = selected;
            this.isReminderPop = true;
        }
        initiateCancelClass(selected) {
            this.classMarkedForAction = selected;
            this.isCancelPop = true;
        }
        initiateCourseCancelClass(selected) {
            this.classMarkedForAction = selected;
            this.isCourseCancel = true;
        }
        getVisibility(c) {
            let d = moment__WEBPACK_IMPORTED_MODULE_2__(c.class_date).format("YYYY-MM-DD");
            if (d >= moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("YYYY-MM-DD")) {
                return true;
            }
            else {
                return false;
            }
        }
        getCheckedStatus(id) {
            if (id === "notifyCancel") {
                return true;
            }
            else if (id === 'resheduleNotified') {
                return true;
            }
        }
        notifyRescheduleUpdate(e) {
            if (e.target.checked) {
                this.resheduleNotified = "Y";
            }
            else {
                this.resheduleNotified = "N";
            }
        }
        closeRescheduleClass() {
            this.isReschedulePop = false;
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
                },
            };
        }
        rescheduleClass() {
            if (this.reschedReason == null || this.reschedReason == "") {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter reschedule reason');
                return;
            }
            if (moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD') > moment__WEBPACK_IMPORTED_MODULE_2__(this.reschedDate).format('YYYY-MM-DD')) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter future reschedule date');
                return;
            }
            let check = this.checkIfTimeProvided(this.timepicker.reschedStartTime.hour);
            if (check) {
                let startTime = this.timepicker.reschedStartTime.hour.split(' ');
                this.timepicker.reschedStartTime.hour = startTime[0];
                this.timepicker.reschedStartTime.meridian = startTime[1];
            }
            else {
                return;
            }
            let check1 = this.checkIfTimeProvided(this.timepicker.reschedEndTime.hour);
            if (check1) {
                let endTime = this.timepicker.reschedEndTime.hour.split(' ');
                this.timepicker.reschedEndTime.hour = endTime[0];
                this.timepicker.reschedEndTime.meridian = endTime[1];
            }
            else {
                return;
            }
            if (this.reSheduleFormValid()) {
                let temp1 = {
                    cancel_note: this.reschedReason,
                    schd_id: this.classMarkedForAction.schedule_id,
                    is_notified: this.resheduleNotified
                };
                let temp2 = {
                    class_date: moment__WEBPACK_IMPORTED_MODULE_2__(this.reschedDate).format("YYYY-MM-DD"),
                    start_time: this.timepicker.reschedStartTime.hour + ":" + this.timepicker.reschedStartTime.minute + " " + this.timepicker.reschedStartTime.meridian,
                    end_time: this.timepicker.reschedEndTime.hour + ":" + this.timepicker.reschedEndTime.minute + " " + this.timepicker.reschedEndTime.meridian,
                    duration: this.getDifference()
                };
                let obj = {
                    batch_id: this.classMarkedForAction.batch_id,
                    cancelSchd: [],
                    extraSchd: []
                };
                obj.cancelSchd.push(temp1);
                obj.extraSchd.push(temp2);
                this.auth.showLoader();
                this.widgetService.reScheduleClass(obj).subscribe(res => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'The request has been processed');
                    this.closeRescheduleClass();
                    this.getData();
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                });
            }
            else {
                this.timepicker.reschedStartTime.hour = this.timepicker.reschedStartTime.hour + " " + this.timepicker.reschedStartTime.meridian;
                this.timepicker.reschedEndTime.hour = this.timepicker.reschedEndTime.hour + " " + this.timepicker.reschedEndTime.meridian;
            }
        }
        checkIfTimeProvided(data) {
            if (data == "" || data == null) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter correct time');
                return false;
            }
            else {
                return true;
            }
        }
        getDifference() {
            let startTime = this.timepicker.reschedStartTime.hour + ":" + this.timepicker.reschedStartTime.minute + " " + this.timepicker.reschedStartTime.meridian;
            let endTime = this.timepicker.reschedEndTime.hour + ":" + this.timepicker.reschedEndTime.minute + " " + this.timepicker.reschedEndTime.meridian;
            let start = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](startTime, "HH:mm A");
            let end = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](endTime, "HH:mm A");
            if (end.isBefore(start)) {
                end.add(1, 'day');
            }
            let d = moment__WEBPACK_IMPORTED_MODULE_2__["duration"](end.diff(start));
            return d._milliseconds / 60000;
        }
        isTimeValid() {
            if (this.timepicker.reschedStartTime.hour.trim() != '' && this.timepicker.reschedStartTime.minute.trim() != '' && this.timepicker.reschedStartTime.meridian.trim() != '' && this.timepicker.reschedEndTime.hour.trim() != '' && this.timepicker.reschedEndTime.minute.trim() != '' && this.timepicker.reschedEndTime.meridian.trim() != '') {
                let startTime = this.timepicker.reschedStartTime.hour + ":" + this.timepicker.reschedStartTime.minute + " " + this.timepicker.reschedStartTime.meridian;
                let endTime = this.timepicker.reschedEndTime.hour + ":" + this.timepicker.reschedEndTime.minute + " " + this.timepicker.reschedEndTime.meridian;
                let start = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](startTime, "HH:mm A");
                let end = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](endTime, "HH:mm A");
                if ((parseInt(start.format("HH")) < parseInt(end.format("HH")))) {
                    return true;
                }
                else if ((parseInt(start.format("HH")) == parseInt(end.format("HH"))) && (parseInt(start.format("mm")) < parseInt(end.format("mm")))) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        reSheduleFormValid() {
            /* Date Validation */
            if (this.reschedDate != '' && this.reschedDate != 'Invalid Date') {
                /* Reschedule Reason */
                if (this.reschedReason.trim() != '') {
                    /* Validate Time */
                    if (this.isTimeValid()) {
                        return true;
                    }
                    else {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter a complete start and end time for rescheduling');
                        return false;
                    }
                }
                else {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Reschedule Reason Missing', 'Please mention a reason for rescheduling the class');
                    return false;
                }
            }
            /* Date not found */
            else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Date Missing', 'Please select a date to reschedule class');
                return false;
            }
        }
        // FOR NOTIFY POP UP
        closeRemiderClass() {
            this.isReminderPop = false;
            this.reminderRemarks = "";
            this.remarksLimit = 50;
        }
        countRemarksLimit() {
            this.remarksLimit = 50 - this.reminderRemarks.length;
        }
        sendReminder() {
            let obj = {
                batch_id: this.classMarkedForAction.batch_id,
                class_schedule_id: this.classMarkedForAction.schedule_id,
                is_exam_schedule: "N",
                remarks: this.reminderRemarks
            };
            this.auth.showLoader();
            this.widgetService.notifyStudentSchedule(obj).subscribe(res => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Reminder Sent', 'Students have been notified');
                this.closeRemiderClass();
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        initiateCourseRemiderClass() {
            let obj = {
                course_ids: this.classMarkedForAction.course_id,
                inst_id: this.jsonFlag.institute_id,
                master_course: this.classMarkedForAction.master_course_name,
                requested_date: moment__WEBPACK_IMPORTED_MODULE_2__(this.classMarkedForAction.date).format("YYYY-MM-DD"),
                remarks: this.reminderRemarks
            };
            this.auth.showLoader();
            this.widgetService.remindCourseLevel(obj).subscribe(res => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Reminder Sent', 'The student have been notified');
                this.reminderRemarks = "";
                this.closeRemiderClass();
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Unable to Send Reminder', err.error.message);
            });
        }
        // Cancel class  For Course Model pop Section
        closeCancelClass() {
            // this.isCancelPop = false;
            this.cancellationReason = '';
        }
        cancelClass() {
            let obj = {
                batch_id: this.classMarkedForAction.batch_id,
                cancelSchd: []
            };
            let schd = {
                cancel_note: this.cancellationReason,
                schd_id: this.classMarkedForAction.schedule_id,
                is_notified: this.is_notified
            };
            obj.cancelSchd.push(schd);
            // this.auth.showLoader();
            this.widgetService.cancelClassSchedule(obj).subscribe(res => {
                // this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'The requested scheduled has been cancelled');
                this.closeCancelClass();
                this.getData();
            }, err => {
                // this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        notifyCancelUpdate(e) {
            if (e.target.checked) {
                this.is_notified = "Y";
            }
            else {
                this.is_notified = "N";
            }
        }
        //  Cancel class for batch model pop up
        closeCourseCancelClass() {
            this.isCourseCancel = false;
            this.cancellationReason = '';
        }
        cancelCourseClass() {
            let obj = {
                cancel_reason: this.cancellationReason,
                course_ids: this.classMarkedForAction.course_id,
                inst_id: this.jsonFlag.institute_id,
                is_cancel_notify: this.is_notified,
                master_course: this.classMarkedForAction.master_course_name,
                requested_date: moment__WEBPACK_IMPORTED_MODULE_2__(this.classMarkedForAction.date).format("YYYY-MM-DD")
            };
            // this.auth.showLoader();
            this.widgetService.cancelCourseSchedule(obj).subscribe(res => {
                // this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Course ', 'The requested scheduled has been cancelled');
                this.closeCourseCancelClass();
                this.getData();
            }, err => {
                // this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        cancelBatchClass() {
            if (this.cancellationReason == "" || this.cancellationReason == null) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Cancellation Reason', 'Please enter cancellation reason');
                return;
            }
            let obj = {
                batch_id: this.classMarkedForAction.batch_id,
                cancelSchd: this.getCancelReason()
            };
            // this.auth.showLoader();
            this.widgetService.cancelBatchSchedule(obj).subscribe(res => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Batch ', 'The requested scheduled has been cancelled');
                this.closeCourseCancelClass();
                this.getData();
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        getCancelReason() {
            let temp = [];
            let obj = {
                cancel_note: this.cancellationReason,
                is_notified: this.is_notified,
                schd_id: this.classMarkedForAction.schedule_id
            };
            temp.push(obj);
            return temp;
        }
        //  Notify to Cancel Class
        notifyCancelClass(selected) {
            if (confirm('Are you sure you want to notify?')) {
                let obj = {};
                if (!this.jsonFlag.isProfessional) {
                    obj = {
                        "institute_id": this.jsonFlag.institute_id,
                        "schedule_id": selected.schedule_id,
                        "to_date": selected.date,
                        "course_id": selected.course_id
                    };
                }
                else {
                    obj = {
                        "institute_id": this.jsonFlag.institute_id,
                        "schedule_id": selected.schedule_id,
                        "to_date": selected.date,
                        "batch_id": selected.batch_id
                    };
                }
                this.auth.showLoader();
                this.classService.notifyCancelClass(obj, 'class').subscribe(res => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Cancelled schedule notification', 'Notification has been sent successfully');
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                });
            }
        }
        // Mark Attendance Section
        initiateMarkAttendance(selected) {
            let obj = {
                batch_id: selected.batch_id,
                schd_id: selected.schedule_id,
                batch_name: selected.batch_name,
                subject_id: selected.subject_id,
                topics_covered: selected.topic_covered_ids,
                course_name: selected.course_name,
                master_course_name: selected.master_course_name,
                forCourseWise: false,
                forSubjectWise: true,
                isExam: false,
                is_attendance_marked: selected.is_attendance_marked
            };
            let batch_info = JSON.stringify(obj);
            this.storeSession();
            sessionStorage.setItem('batch_info', btoa(batch_info));
            sessionStorage.setItem('isSubjectView', String(true));
            this.router.navigate(['/view/dashboard/mark-attendance']);
        }
        redirect() {
            this.storeSession();
            let url = this.schoolModel ? '/view/course/create/routine/create' : '/view/course/create/class/add';
            this.router.navigate([url]);
        }
        storeSession() {
            this.sessionFiltersArr.isCompleted = this.filterStatusInputs.completed;
            this.sessionFiltersArr.isPending = this.filterStatusInputs.attendancePending;
            this.sessionFiltersArr.isCancelled = this.filterStatusInputs.cancelled;
            this.sessionFiltersArr.isUpcoming = this.filterStatusInputs.upcoming;
            this.sessionFiltersArr.from_date = String(this.coursePlannerFilters.from_date);
            this.sessionFiltersArr.to_date = String(this.coursePlannerFilters.to_date);
            this.sessionFiltersArr.masterCourse = this.inputElements.masterCourse;
            this.sessionFiltersArr.courseId = this.inputElements.course;
            this.sessionFiltersArr.batchId = this.inputElements.subject;
            this.sessionFiltersArr.standardId = this.inputElements.standard_id;
            this.sessionFiltersArr.subjectId = this.inputElements.subject_id;
            if (!this.jsonFlag.isProfessional) {
                this.sessionFiltersArr.batchId = this.inputElements.subject;
            }
            else {
                this.sessionFiltersArr.batchId = this.inputElements.batch_id;
            }
            this.sessionFiltersArr.facultyId = this.inputElements.faculty;
            this.sessionFiltersArr.thisWeek = this.filterDateInputs.thisWeek;
            this.sessionFiltersArr.lastWeek = this.filterDateInputs.lastWeek;
            this.sessionFiltersArr.thisMonth = this.filterDateInputs.thisMonth;
            this.sessionFiltersArr.custom = this.filterDateInputs.custom;
            let filter_info = JSON.stringify(this.sessionFiltersArr);
            sessionStorage.setItem('isFromCoursePlanner', String(true));
            sessionStorage.setItem('isClass', String(true));
            sessionStorage.setItem('coursePlannerFilter', filter_info);
        }
        closeAll() {
            this.filterShow = false;
        }
        // Edit class functions
        editCourseClass(course) {
            this.editClass.description = course.description;
            this.editClass.homework = course.homework_assigned;
            this.editClass.faculty = course.teacher_id;
            this.editClass.topic_covered_ids = course.topic_covered_ids;
            this.editClass.topic_covered_names = course.topics_covered;
            this.editClass.subject_id = course.subject_id;
            this.editClass.course_id = course.course_id;
            this.editClass.class_sche_date = course.date;
            this.editClass.class_schedule_id = course.schedule_id;
            this.editClass.batch_id = course.batch_id;
            this.editClass.custom_class_type = course.custom_class_type;
            this.editClass.duration = course.duration;
            this.editClass.room_no = course.room_no;
            this.editClass.start_time = course.start_time;
            this.editClass.end_time = course.end_time;
        }
        toggleArrow(topic) {
            topic.isExpand = !(topic.isExpand);
        }
        fetchTopics() {
            this.auth.showLoader();
            let subject_id = '';
            if (this.jsonFlag.isProfessional) {
                subject_id = this.editClass.course_id;
            }
            else {
                subject_id = this.editClass.subject_id;
            }
            this.topicService.getAllTopicsSubTopics(subject_id).subscribe((resp) => {
                this.auth.hideLoader();
                this.topicsList = [];
                this.totalTopicsList = [];
                this.topicsList = resp;
                if (!!this.topicsList && this.topicsList.length > 0) {
                    $('#topicModel').modal('show');
                    $('#editClass').modal('hide');
                    this.topicsList.forEach(tpc => {
                        this.totalTopicsList.push(tpc);
                        tpc.checked = false;
                        if (tpc.subTopic.length) {
                            this.getAllTopics(tpc.subTopic);
                        }
                    });
                    let topicIds = this.editClass.topic_covered_ids.split('|');
                    topicIds.forEach(tpc => {
                        this.topicsList.forEach(tp => {
                            if (tp.topicId == tpc) {
                                tp.checked = true;
                            }
                        });
                    });
                }
                else {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No topics available to link");
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        getAllTopics(topic) {
            topic.forEach(obj => {
                this.totalTopicsList.push(obj);
                obj.checked = false;
                if (obj.subTopic.length) {
                    this.getAllTopics(obj.subTopic);
                }
            });
        }
        selectTopics(topic, event) {
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
        }
        checkAllSubTopics(topic, param) {
            topic.forEach(obj => {
                if (param) {
                    obj.checked = true;
                }
                else {
                    obj.checked = false;
                }
                if (obj.subTopic.length) {
                    this.checkAllSubTopics(obj.subTopic, param);
                }
            });
        }
        //uncheck parent if any of the child is deselected
        uncheckParent(topic) {
            var getParentTopic = this.totalTopicsList.find(obj => obj.topicId == topic.parentTopicId);
            if (!!getParentTopic) {
                getParentTopic.checked = false;
                if (getParentTopic.parentTopicId != 0) {
                    this.uncheckParent(getParentTopic);
                }
            }
        }
        //check parent if all subtopics are checked
        checkParents(topic) {
            var checkAll = true;
            if (this.totalTopicsList.find(el => el.topicId == topic.topicId) != undefined) {
                var parentTopic = this.totalTopicsList.find(ele => ele.topicId == topic.parentTopicId);
                if (parentTopic != undefined) {
                    if (parentTopic.subTopic.length) {
                        parentTopic.subTopic.forEach(subTpc => {
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
        showEditOption() {
            $('#topicModel').modal('hide');
            $('#editClass').modal('show');
        }
        saveTopics() {
            var getSelectedTopics = this.totalTopicsList.filter(el => el.checked == true);
            var getTopicIds;
            if (getSelectedTopics != undefined) {
                getTopicIds = getSelectedTopics.map(obj => {
                    return obj.topicId;
                });
                let getTopicNames = getSelectedTopics.map(obj => {
                    return obj.topicName;
                });
                getTopicIds = getTopicIds.join('|');
                this.editClass.topic_covered_ids = getTopicIds;
                this.editClass.topic_covered_names = getTopicNames.join('|');
                $('#topicModel').modal('hide');
                $('#editClass').modal('show');
            }
        }
        updateClass() {
            let obj;
            if (!this.jsonFlag.isProfessional) { // for course model
                if (this.editClass.faculty != "-1") {
                    obj = {
                        "batch_id": this.editClass.batch_id,
                        "is_exam_schedule": "N",
                        "class_schedule_id": this.editClass.class_schedule_id,
                        "class_desc": this.editClass.description,
                        "topics_covered": this.editClass.topic_covered_ids,
                        "homework_assigned": this.editClass.homework,
                        "cousre_planner_update_operation": "desc_and_topic_covered_update",
                        "alloted_teacher_id": this.editClass.faculty,
                    };
                }
                else {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please select faculty");
                }
            }
            else { // For batch model
                obj = {
                    "batch_id": this.editClass.batch_id,
                    "is_exam_schedule": "N",
                    "class_schedule_id": this.editClass.class_schedule_id,
                    "class_desc": this.editClass.description,
                    "topics_covered": this.editClass.topic_covered_ids,
                    "homework_assigned": this.editClass.homework,
                    "cousre_planner_update_operation": "desc_and_topic_covered_update"
                };
            }
            this.classService.changeClassTeacher(obj).subscribe(res => {
                let result = res;
                $('#editClass').modal('hide');
                if (result.statusCode == 200) {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Class updated successfully');
                    this.clearEditValues();
                    this.getData();
                }
            }, err => {
                $('#editClass').modal('hide');
                this.clearEditValues();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        clearEditValues() {
            this.editClass.description = "";
            this.editClass.topic_covered_ids = "";
            this.editClass.topic_covered_names = "";
            this.editClass.subject_id = "";
            this.editClass.course_id = "";
            this.editClass.class_sche_date = "";
            this.editClass.class_schedule_id = "";
            this.editClass.batch_id = "";
            this.editClass.start_time = "";
            this.editClass.end_time = "";
            this.editClass.total_marks = "";
            this.editClass.duration = "";
        }
    };
    ClassComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_8__["MessageShowService"] },
        { type: _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ClassScheduleService"] },
        { type: _services_widget_service__WEBPACK_IMPORTED_MODULE_9__["WidgetService"] },
        { type: _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_7__["TopicListingService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
    ];
    ClassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-class',
            template: __importDefault(__webpack_require__(/*! raw-loader!./class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/course-planner/class/class.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./class.component.scss */ "./src/app/components/course-module/course-planner/class/class.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_8__["MessageShowService"],
            _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ClassScheduleService"],
            _services_widget_service__WEBPACK_IMPORTED_MODULE_9__["WidgetService"],
            _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_7__["TopicListingService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], ClassComponent);
    return ClassComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/course-planner/course-planner-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/course-module/course-planner/course-planner-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CoursePlannerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePlannerRoutingModule", function() { return CoursePlannerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _course_planner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-planner.component */ "./src/app/components/course-module/course-planner/course-planner.component.ts");
/* harmony import */ var _class_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/class.component */ "./src/app/components/course-module/course-planner/class/class.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/components/course-module/course-planner/exam/exam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CoursePlannerRoutingModule = /** @class */ (() => {
    let CoursePlannerRoutingModule = class CoursePlannerRoutingModule {
    };
    CoursePlannerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _course_planner_component__WEBPACK_IMPORTED_MODULE_2__["CoursePlannerComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: '',
                                component: _class_class_component__WEBPACK_IMPORTED_MODULE_3__["ClassComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'home',
                                component: _class_class_component__WEBPACK_IMPORTED_MODULE_3__["ClassComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'class',
                                component: _class_class_component__WEBPACK_IMPORTED_MODULE_3__["ClassComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'exam',
                                component: _exam_exam_component__WEBPACK_IMPORTED_MODULE_4__["ExamComponent"],
                                pathMatch: 'prefix'
                            }
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], CoursePlannerRoutingModule);
    return CoursePlannerRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/course-planner/course-planner.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/course-module/course-planner/course-planner.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".middle-section {\n  padding: 1%;\n}\n\n.header-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 20px;\n}\n\n.header-section .header-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 5px;\n  width: 50%;\n  cursor: pointer;\n}\n\n.header-section .header-item .img-container img {\n  width: 20px;\n  height: 20px;\n  margin: 0px 10px;\n}\n\n.header-section .header-item .model-name-container {\n  width: 50%;\n  margin-top: 3px;\n}\n\n.header-section .header-item .model-name-container span {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.header-section #class {\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border: 2px solid #3a65f8;\n}\n\n.header-section #exam {\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  border: 2px solid #3a65f8;\n}\n\n.active {\n  background: #3a66fa;\n  color: #fdfdfd;\n}\n\n.non-active {\n  background: #ffffff;\n  color: #b0b0b0;\n}\n\n.middle {\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NvdXJzZS1wbGFubmVyL2NvdXJzZS1wbGFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBUEE7RUFRSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7QUFHbkI7O0FBaEJBO0VBZ0JRLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBSXhCOztBQXRCQTtFQXNCTSxVQUFVO0VBQ1YsZUFBZTtBQUlyQjs7QUEzQkE7RUF5QlEsZUFBZTtFQUNmLGdCQUFnQjtBQU14Qjs7QUFoQ0E7RUErQkksNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQix5QkFBeUI7QUFLN0I7O0FBdENBO0VBb0NJLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBTTdCOztBQUZBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFLaEI7O0FBSEE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQU1oQjs7QUFIQTtFQUNFLGdCQUFnQjtBQU1sQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9jb3Vyc2UtcGxhbm5lci9jb3Vyc2UtcGxhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbntcbiAgcGFkZGluZzogMSU7XG59XG5cbi5oZWFkZXItc2VjdGlvbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC5oZWFkZXItaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5pbWctY29udGFpbmVye1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubW9kZWwtbmFtZS1jb250YWluZXJ7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAjY2xhc3N7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTY1Zjg7XG4gIH1cbiAgI2V4YW17XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNhNjVmODtcbiAgfVxufVxuXG4uYWN0aXZle1xuICBiYWNrZ3JvdW5kOiAjM2E2NmZhO1xuICBjb2xvcjogI2ZkZmRmZDtcbn1cbi5ub24tYWN0aXZle1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2IwYjBiMDtcbn1cblxuLm1pZGRsZXtcbiAgbWFyZ2luLXRvcDogMTBweDtcblxufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/course-module/course-planner/course-planner.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/course-module/course-planner/course-planner.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CoursePlannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePlannerComponent", function() { return CoursePlannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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




let CoursePlannerComponent = /** @class */ (() => {
    let CoursePlannerComponent = class CoursePlannerComponent {
        constructor(auth, appC, router) {
            this.auth = auth;
            this.appC = appC;
            this.router = router;
            this.isRippleLoad = false;
            this.isProfessional = false;
            this.activeModule = true; //  true for class   // false for exam
        }
        ngOnInit() {
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            this.checkForSessionStorage();
        }
        checkForSessionStorage() {
            let isClass = sessionStorage.getItem('isClass');
            if (isClass != null && isClass != "") {
                isClass = JSON.parse(isClass);
                if (isClass) {
                    this.showMenuOf('class');
                }
                else {
                    this.showMenuOf('exam');
                }
            }
            sessionStorage.setItem('isClass', "");
        }
        showMenuOf(activeModuleName) {
            if (activeModuleName == 'class') {
                this.activeModule = true;
            }
            else if (activeModuleName == 'exam') {
                this.activeModule = false;
            }
        }
    };
    CoursePlannerComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ];
    CoursePlannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-planner',
            template: __importDefault(__webpack_require__(/*! raw-loader!./course-planner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/course-planner/course-planner.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__importDefault(__webpack_require__(/*! ./course-planner.component.scss */ "./src/app/components/course-module/course-planner/course-planner.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CoursePlannerComponent);
    return CoursePlannerComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/course-planner/course-planner.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/course-module/course-planner/course-planner.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CoursePlannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePlannerModule", function() { return CoursePlannerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _course_planner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-planner-routing.module */ "./src/app/components/course-module/course-planner/course-planner-routing.module.ts");
/* harmony import */ var _course_planner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-planner.component */ "./src/app/components/course-module/course-planner/course-planner.component.ts");
/* harmony import */ var _class_class_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./class/class.component */ "./src/app/components/course-module/course-planner/class/class.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/components/course-module/course-planner/exam/exam.component.ts");
/* harmony import */ var _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/course-services/class-schedule.service */ "./src/app/services/course-services/class-schedule.service.ts");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/course-services/topic-listing.service */ "./src/app/services/course-services/topic-listing.service.ts");
/* harmony import */ var _services_course_services_exam_schedule_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/course-services/exam-schedule.service */ "./src/app/services/course-services/exam-schedule.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';











let CoursePlannerModule = /** @class */ (() => {
    let CoursePlannerModule = class CoursePlannerModule {
    };
    CoursePlannerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                // BsDatepickerModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _course_planner_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoursePlannerRoutingModule"]
            ],
            declarations: [
                _course_planner_component__WEBPACK_IMPORTED_MODULE_6__["CoursePlannerComponent"],
                _class_class_component__WEBPACK_IMPORTED_MODULE_7__["ClassComponent"],
                _exam_exam_component__WEBPACK_IMPORTED_MODULE_8__["ExamComponent"],
            ],
            entryComponents: [
                _course_planner_component__WEBPACK_IMPORTED_MODULE_6__["CoursePlannerComponent"]
            ],
            exports: [],
            providers: [
                _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_9__["ClassScheduleService"],
                _services_widget_service__WEBPACK_IMPORTED_MODULE_10__["WidgetService"],
                _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_11__["TopicListingService"],
                _services_course_services_exam_schedule_service__WEBPACK_IMPORTED_MODULE_12__["ExamCourseService"],
                _services_http_service__WEBPACK_IMPORTED_MODULE_13__["HttpService"]
            ]
        })
    ], CoursePlannerModule);
    return CoursePlannerModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/course-planner/exam/exam.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/course-module/course-planner/exam/exam.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.middle-section {\n  padding: 1%;\n}\n.header-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 20%;\n  margin-left: 40%;\n  margin-bottom: 20px;\n}\n.header-section .header-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 5px;\n  width: 50%;\n  cursor: pointer;\n}\n.header-section .header-item .img-container img {\n  width: 20px;\n  height: 20px;\n  margin: 0px 10px;\n}\n.header-section .header-item .model-name-container {\n  width: 50%;\n  margin-top: 3px;\n}\n.header-section .header-item .model-name-container span {\n  font-size: 14px;\n  font-weight: 600;\n}\n.header-section #class {\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border: 2px solid #3a65f8;\n}\n.header-section #exam {\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  border: 2px solid #3a65f8;\n}\n.active {\n  background: #3a66fa;\n  color: #fdfdfd;\n}\n.non-active {\n  background: #ffffff;\n  color: #b0b0b0;\n}\n.middle {\n  margin-top: 10px;\n}\n.filter-header-container {\n  display: flex;\n  flex-direction: row;\n  padding: 5px 0px;\n  border-top: 1px solid #d4d4d4;\n  border-bottom: 1px solid #d4d4d4;\n  justify-content: space-between;\n}\n.filter-header-container .filter-item-1 {\n  width: 80%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.filter-header-container .filter-item-1 .header-item {\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: 18%;\n  position: relative;\n}\n.filter-header-container .filter-item-1 .header-item .header-select-box {\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  margin: 5px 0px;\n  padding: 5px 0px;\n}\n.filter-header-container .filter-item-1 .header-item .input-container {\n  position: relative;\n}\n.filter-header-container .filter-item-1 .header-item .input-container .fa-filter {\n  position: absolute;\n  left: 2px;\n  background: white;\n  padding: 8px 10px;\n  top: 6px;\n  border-right: 1px solid #ccc;\n}\n.filter-header-container .filter-item-1 .header-item .input-container .fa-caret-down, .filter-header-container .filter-item-1 .header-item .input-container .fa-caret-up {\n  position: absolute;\n  right: 2px;\n  background: white;\n  padding: 7px 10px;\n  top: 7px;\n  z-index: 1;\n  cursor: pointer;\n}\n.filter-header-container .filter-item-1 .header-item .filer-input {\n  margin: 5px 0px;\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  padding: 8px 5px;\n  width: 100%;\n  padding-left: 35px;\n  height: 30px;\n}\n.filter-header-container .filter-item-1 .go-btn-container {\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: auto;\n}\n.filter-header-container .filter-item-1 .go-btn-container .gobtn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: #3a66fa;\n  color: #ffffff;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 20px;\n}\n.filter-header-container .filter-item-2 {\n  width: 10%;\n  display: flex;\n  justify-content: flex-end;\n}\n.filter-header-container .filter-item-2 .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n}\n.filter-header-container .filter-container {\n  position: absolute;\n  width: 100%;\n  background: white;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  top: 55px;\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  z-index: 20;\n}\n.filter-header-container .filter-container .date-container {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 0px;\n}\n.filter-header-container .filter-container .date-container .date-title {\n  font-weight: 600;\n  padding: 5px 0px;\n}\n.filter-header-container .filter-container .date-container .date-values-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.filter-header-container .filter-container .date-container .date-values-container .date-value-item {\n  width: 50%;\n}\n.filter-header-container .filter-container .date-container .date-values-container .date-value-item input, .filter-header-container .filter-container .date-container .date-values-container .date-value-item label {\n  cursor: pointer;\n  font-size: 12px;\n}\n.filter-header-container .filter-container .status-container {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 0px;\n}\n.filter-header-container .filter-container .status-container .status-title {\n  font-weight: 600;\n  padding: 5px 0px;\n}\n.filter-header-container .filter-container .status-container .status-values-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.filter-header-container .filter-container .status-container .status-values-container .status-value-item {\n  width: 50%;\n}\n.filter-header-container .filter-container .status-container .status-values-container .status-value-item input, .filter-header-container .filter-container .status-container .status-values-container .status-value-item label {\n  cursor: pointer;\n  font-size: 12px;\n}\n.filter-header-container .filter-container .faculty-container {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n.filter-header-container .filter-container .faculty-container .faculty-title {\n  font-weight: 600;\n  padding: 5px 0px;\n}\n.filter-header-container .filter-container .faculty-container .faculty-dropdown-container {\n  width: 100%;\n}\n.filter-header-container .filter-container .faculty-container .faculty-dropdown-container .faculty-select-box {\n  border-bottom: 1px solid #d4d4d4;\n  margin: 5px 0px;\n  padding: 5px 0px;\n  width: 100%;\n}\n.illustration-container {\n  display: block;\n}\n.illustration-container .illustration-img {\n  width: 40%;\n  /* height: 34%; */\n  margin-left: 12%;\n  margin-top: -2%;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .table-header-container {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  margin-right: 10px;\n  padding-left: 5px;\n  border-bottom: 1px solid #ccc;\n}\n.table-container .table-header-container .table-heading-item {\n  color: #585574;\n  font-weight: 600;\n  font-size: 12px;\n  padding: 0px 5px;\n}\n.table-container .table-header-container .table-heading-item .fa-cog {\n  position: absolute;\n  right: 20px;\n  cursor: pointer;\n  color: #9898a3;\n  font-size: 14px;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container {\n  display: flex;\n  flex-direction: column;\n  width: 230px;\n  right: 35px;\n  height: auto;\n  position: absolute;\n  top: 0px;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  z-index: 10;\n  background: white;\n  -webkit-animation-name: slideInRight;\n          animation-name: slideInRight;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .show-hide-header {\n  padding: 10px;\n  background: #f9f9f9;\n  color: #585574;\n  display: flex;\n  justify-content: space-between;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .show-hide-header .fa-times {\n  font-weight: 400;\n  cursor: pointer;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .show-hide-value-container {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid #ccc;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .show-hide-value-container .show-hide-item {\n  width: 100%;\n  text-align: left;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .show-hide-value-container .show-hide-item input, .table-container .table-header-container .table-heading-item .show-hide-container .show-hide-value-container .show-hide-item label {\n  font-size: 12px;\n  font-weight: 400;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .bg-container {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n}\n.table-container .table-header-container .table-heading-item .show-hide-container .bg-container img {\n  width: 75%;\n  margin-left: 25%;\n}\n.table-container .table-value-outer-container {\n  height: 59vh;\n  overflow-y: auto;\n}\n.table-container .table-value-container {\n  display: flex;\n  flex-direction: row;\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 10px;\n  padding: 5px 0px;\n  position: relative;\n}\n.table-container .table-value-container .table-value-item {\n  color: #585574;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  padding: 0px 5px;\n}\n.table-container .table-value-container .table-value-item .upcoming-btn {\n  color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #ffffff;\n  background: #ff6c24;\n  cursor: default;\n  padding: 2px 5px;\n  width: 95px;\n  font-weight: 600;\n}\n.table-container .table-value-container .table-value-item .pending-btn {\n  color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #ffffff;\n  background: #8d8d8d;\n  cursor: default;\n  padding: 2px 5px;\n  width: 95px;\n  font-weight: 600;\n}\n.table-container .table-value-container .table-value-item .cancelled-btn {\n  color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #ffffff;\n  background: #df0d2f;\n  cursor: default;\n  padding: 2px 5px;\n  width: 95px;\n  font-weight: 600;\n}\n.table-container .table-value-container .table-value-item .completed-btn {\n  color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #ffffff;\n  background: #00b55a;\n  cursor: default;\n  padding: 2px 5px;\n  width: 95px;\n  font-weight: 600;\n}\n.table-container .table-value-container .table-value-item .marksPending-btn {\n  color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #ffffff;\n  background: #8771FF;\n  cursor: default;\n  padding: 2px 5px;\n  width: 95px;\n  font-weight: 600;\n}\n.table-container .table-value-container .flex-item {\n  display: flex;\n  flex-direction: column;\n}\n.table-container .border-cancelled-class {\n  border-left: 5px solid #df0d2f;\n}\n.table-container .border-completed-class {\n  border-left: 5px solid #00b55a;\n}\n.table-container .border-pending-class {\n  border-left: 5px solid #8d8d8d;\n}\n.table-container .border-upcoming-class {\n  border-left: 5px solid #ff6c24;\n}\n.table-container .border-marksPending-class {\n  border-left: 5px solid #8771FF;\n}\n.table-container .align-center {\n  text-align: center;\n}\n.table-container .small {\n  width: 8%;\n  font-size: 12px;\n}\n.table-container .medium {\n  width: 15%;\n  font-size: 12px;\n}\n.table-container .action {\n  position: absolute;\n  right: 0px;\n}\n.table-container .action-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 15px;\n}\n.table-container .action-container i, .table-container .action-container img {\n  margin: 0px 5px;\n  max-width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n  border: 2px solid #0084f6;\n}\n.field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 14px;\n  display: inline-block;\n}\n.field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.filter-res.pagination {\n  width: 100%;\n}\n.pagination {\n  margin: 0px;\n}\n.pagination .first:before {\n  content: \"« \";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .last:after {\n  content: \" »\";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .batch-size {\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination li {\n  border-right: 1px solid #ccc;\n  padding: 0px 7px;\n  margin: 0;\n  line-height: 10px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.pagination li a {\n  line-height: 10px;\n  font-size: 16px;\n  font-weight: 800;\n  border: none;\n  padding: 0px 14px;\n}\n.pagination li :hover {\n  background-color: transparent !important;\n}\n.pagination li:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n@-webkit-keyframes slideInDown {\n  from {\n    transform: translate3d(0, -10%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -10%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes slideInRight {\n  from {\n    transform: translate3d(5%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInRight {\n  from {\n    transform: translate3d(5%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.cancel-reason-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: left;\n}\n.cancel-reason-container .cancel-input {\n  width: 50%;\n  height: 100px;\n  border: 1px solid #ccc;\n}\n.cancelExamWrapper .details {\n  margin: 10px -15px;\n}\n.cancelExamWrapper .content-wraper .button-Section {\n  margin: 10px 0px 10px -15px;\n}\n.cancelExamWrapper .content-wraper .cancel-table {\n  max-height: 150px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.table-responsive {\n  max-width: 100%;\n  overflow: auto;\n}\ntable {\n  width: 100%;\n  box-sizing: border-box;\n  border-collapse: collapse;\n}\nth,\ntd {\n  font-size: 12px;\n  padding: 6px 2px;\n  vertical-align: middle;\n}\nth {\n  background: #004a7e;\n  font-size: 11px;\n  color: #fff;\n  font-weight: normal;\n}\ntd {\n  border-bottom: 1px solid #fff;\n}\ntable tr {\n  transition: all 0.1s;\n}\ntable tr:nth-child(even) {\n  background: #efefef;\n}\ntable tr:nth-child(odd) {\n  background: #f7f7f7;\n}\ntable tr:nth-child(even):hover {\n  background: #ececec;\n}\ntable tr:nth-child(odd):hover {\n  background: #eaeaea;\n}\ntable tr.selected {\n  background: #dceff7 !important;\n}\n.table-responsive tr td:first-child .field-checkbox-wrapper,\n.table-responsive tr th:first-child .field-checkbox-wrapper {\n  width: 20px;\n  overflow: hidden;\n  box-sizing: border-box;\n  height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  margin-left: 5px;\n  background: #fff;\n  border-radius: 2px;\n}\n.edit-input-container {\n  margin-bottom: 5px;\n  position: relative;\n}\n.edit-input-container label {\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n.edit-input-container .form-ctrl {\n  width: 50%;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  padding: 5px;\n}\n.edit-input-container .topic-linked {\n  border: 1px solid #1283f4;\n  cursor: pointer;\n}\n.edit-input-container .no-topic-linked {\n  border: 1px solid #d4d4d4;\n  cursor: pointer;\n}\n.edit-input-container .topic-linked-fa {\n  color: #1283f4;\n  cursor: pointer;\n}\n.edit-input-container .no-topic-linked-fa {\n  color: #d4d4d4;\n  cursor: pointer;\n}\n#editClass .modal-body {\n  padding-top: 0px;\n}\n.subject-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 20px;\n}\n.subject-container .edit-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n.subject-container .edit-container .edit-input-container {\n  width: 49%;\n}\n.subject-container .edit-container .edit-input-container .form-ctrl {\n  width: 70%;\n}\n.subject-container .edit-container .edit-input-container label {\n  font-size: 12px;\n}\n.subject-container:nth-last-child() {\n  padding-bottom: 0px;\n}\n.topic-container {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  display: flex;\n  flex-direction: row;\n  margin: 2px;\n}\n.arrow-icon {\n  padding: 0 5px;\n}\n.level1Topic {\n  padding-top: 4px;\n  padding-bottom: 2px;\n}\n.subTopicLevel {\n  padding-top: 8px;\n}\n.pt-4 {\n  padding-top: 4px !important;\n}\n.topic-lbl {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.77);\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NvdXJzZS1wbGFubmVyL2V4YW0vZXhhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NvdXJzZS1wbGFubmVyL2NvdXJzZS1wbGFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLFdBQVc7QURFYjtBQ0NBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7QURFckI7QUNSQTtFQVFJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtBREluQjtBQ2pCQTtFQWdCUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBREt4QjtBQ3ZCQTtFQXNCTSxVQUFVO0VBQ1YsZUFBZTtBREtyQjtBQzVCQTtFQXlCUSxlQUFlO0VBQ2YsZ0JBQWdCO0FET3hCO0FDakNBO0VBK0JJLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IseUJBQXlCO0FETTdCO0FDdkNBO0VBb0NJLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMseUJBQXlCO0FETzdCO0FDSEE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBRE1oQjtBQ0pBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QURPaEI7QUNKQTtFQUNFLGdCQUFnQjtBRE9sQjtBQTdEQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsOEJBQThCO0FBZ0VoQztBQXRFQTtFQVFJLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQWtFbEM7QUE3RUE7RUFhTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0VBQ2Qs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WixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBdUd0QjtBQWhHQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFtR3BCO0FBckdBO0VBSUksZUFBZTtFQUNmLGtCQUFrQjtBQXFHdEI7QUExR0E7RUFRSSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0FBc0doQjtBQWpIQTtFQWNJLHlCQUF5QjtFQUN6QixlQUFlO0FBdUduQjtBQXRIQTtFQWtCSSx5QkFBeUI7RUFDekIsZUFBZTtBQXdHbkI7QUEzSEE7RUFzQkksY0FBYztFQUNkLGVBQWU7QUF5R25CO0FBaElBO0VBMEJJLGNBQWM7RUFDZCxlQUFlO0FBMEduQjtBQXRHQTtFQUVJLGdCQUFnQjtBQXdHcEI7QUFwR0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQXVHdEI7QUExR0E7RUFLSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0FBeUdmO0FBakhBO0VBVU0sVUFBVTtBQTJHaEI7QUFySEE7RUFZUSxVQUFVO0FBNkdsQjtBQXpIQTtFQWVRLGVBQWU7QUE4R3ZCO0FBekdBO0VBQ0UsbUJBQW1CO0FBNEdyQjtBQXhHQTtFQUNJLDBCQUF5QjtFQUN6Qix5QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBMkdmO0FBekdBO0VBQ0ksY0FBYztBQTRHbEI7QUExR0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBNkd2QjtBQTNHQTtFQUNJLGdCQUFnQjtBQThHcEI7QUE1R0E7RUFDSSwyQkFBeUI7QUErRzdCO0FBN0dBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLG1DQUFtQztBQWdIdkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvY291cnNlLXBsYW5uZXIvZXhhbS9leGFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvY291cnNlLXBsYW5uZXIvY291cnNlLXBsYW5uZXIuY29tcG9uZW50LnNjc3NcIjtcblxuLmZpbHRlci1oZWFkZXItY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLmZpbHRlci1pdGVtLTF7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5oZWFkZXItaXRlbXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICMzZTNkNGE7XG4gICAgICB3aWR0aDogMTglO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLmhlYWRlci1zZWxlY3QtYm94e1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5pbnB1dC1jb250YWluZXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLmZhLWZpbHRlcntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIH1cbiAgICAgICAgLmZhLWNhcmV0LWRvd24sIC5mYS1jYXJldC11cHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmlsZXItaW5wdXR7XG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgICBwYWRkaW5nOiA4cHggNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5nby1idG4tY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzNlM2Q0YTtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgLmdvYnRue1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2E2NmZhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzNhNjZmYTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmZpbHRlci1pdGVtLTJ7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgLmFkZC1jbGFzcy1idG57XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2E2NmZhO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgY29sb3I6ICMxMjgzZjQ7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgIC5mYS1wbHVze1xuXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5maWx0ZXItY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdG9wOiA1NXB4O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgei1pbmRleDogMjA7XG4gICAgLmRhdGUtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgLmRhdGUtdGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICB9XG4gICAgICAuZGF0ZS12YWx1ZXMtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC5kYXRlLXZhbHVlLWl0ZW17XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBpbnB1dCwgbGFiZWx7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zdGF0dXMtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgLnN0YXR1cy10aXRsZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5zdGF0dXMtdmFsdWVzLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAuc3RhdHVzLXZhbHVlLWl0ZW17XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBpbnB1dCwgbGFiZWx7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZhY3VsdHktY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgLmZhY3VsdHktdGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICB9XG4gICAgICAuZmFjdWx0eS1kcm9wZG93bi1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAuZmFjdWx0eS1zZWxlY3QtYm94e1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5pbGx1c3RyYXRpb24tY29udGFpbmVye1xuICBkaXNwbGF5OiBibG9jaztcbiAgLmlsbHVzdHJhdGlvbi1pbWd7XG4gICAgd2lkdGg6IDQwJTtcbiAgICAvKiBoZWlnaHQ6IDM0JTsgKi9cbiAgICBtYXJnaW4tbGVmdDogMTIlO1xuICAgIG1hcmdpbi10b3A6IC0yJTtcblxuICB9XG59XG5cbi50YWJsZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAudGFibGUtaGVhZGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAudGFibGUtaGVhZGluZy1pdGVte1xuICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgIC5mYS1jb2d7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICM5ODk4YTM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5zaG93LWhpZGUtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgICAgIC5zaG93LWhpZGUtaGVhZGVye1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICAgICAgICBjb2xvcjogIzU4NTU3NDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAuZmEtdGltZXN7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2hvdy1oaWRlLXZhbHVlLWNvbnRhaW5lcntcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAuc2hvdy1oaWRlLWl0ZW17XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBpbnB1dCwgbGFiZWx7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJnLWNvbnRhaW5lcntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnRhYmxlLXZhbHVlLW91dGVyLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDU5dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICAudGFibGUtdmFsdWUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAvLyBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAudGFibGUtdmFsdWUtaXRlbXtcbiAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICAvLyBmb3Igc2luZ2xlIHJvd1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgIC51cGNvbWluZy1idG57XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjZjMjQ7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICAucGVuZGluZy1idG57XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICM4ZDhkOGQ7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICAuY2FuY2VsbGVkLWJ0bntcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2RmMGQyZjtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICB3aWR0aDogOTVweDtcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIC5jb21wbGV0ZWQtYnRue1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiNTVhO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICAgIHdpZHRoOiA5NXB4O1xuICAgICAgICAvLyBtYXJnaW4tbGVmdDogNDAlO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgICAgLm1hcmtzUGVuZGluZy1idG57XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICM4NzcxRkY7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5mbGV4LWl0ZW17XG4gICAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgICAgICAvLyBmb3IgRG91YmxlIHJvd1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbiAgLmJvcmRlci1jYW5jZWxsZWQtY2xhc3N7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZGYwZDJmO1xuICB9XG4gIC5ib3JkZXItY29tcGxldGVkLWNsYXNze1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwYjU1YTtcbiAgfVxuICAuYm9yZGVyLXBlbmRpbmctY2xhc3N7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGQ4ZDhkO1xuICB9XG4gIC5ib3JkZXItdXBjb21pbmctY2xhc3N7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmY2YzI0O1xuICB9XG4gIC5ib3JkZXItbWFya3NQZW5kaW5nLWNsYXNze1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzg3NzFGRjtcbiAgfVxuICAuYWxpZ24tY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc21hbGx7XG4gICAgd2lkdGg6IDglO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAubWVkaXVte1xuICAgIHdpZHRoOiAxNSU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC8vIC5sYXJnZXtcbiAgLy8gICB3aWR0aDogMTUlO1xuICAvLyAgIGZvbnQtc2l6ZTogMTJweDtcbiAgLy8gfVxuICAuYWN0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICB9XG4gIC5hY3Rpb24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBpLCBpbWd7XG4gICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICBtYXgtd2lkdGg6IDE0cHg7XG4gICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbn1cblxuLy8gQ2hlY2tib3ggc3R5bGVcblxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAuZm9ybS1jaGVja2JveCB7XG4gICBvcGFjaXR5OiAwO1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgbGVmdDogMDtcbiAgIHRvcDogMDtcbiAgIHdpZHRoOiAyMHB4O1xuICAgaGVpZ2h0OiAyMHB4O1xuICAgei1pbmRleDogMTtcbiAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDg0ZjY7XG4gfVxufVxuXG4uZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG59XG4uZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmFmdGVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xufVxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGxlZnQ6IDhweDtcbiAgICB0b3A6IDlweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgbGVmdDogMnB4O1xuICAgIHRvcDogNXB4O1xufVxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbCB7XG4gICAgY29sb3I6ICMwMDg0ZjY7XG59XG5cblxuLy8gUEFHSU5BVElPTiBTVFlMRVxuLmZpbHRlci1yZXMucGFnaW5hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wYWdpbmF0aW9uIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICAuZmlyc3Qge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIsKrIFwiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGFzdCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCIgwrtcIjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJhdGNoLXNpemUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuICAgIGxpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgICAgICAgcGFkZGluZzogMHB4IDdweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGFnaW5hdGlvbiBsaTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLy8gQW5pbWF0aW9uIFN0eWxlIFNlY3Rpb25cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNSUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNSUsIDAsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNSUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNSUsIDAsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuXG5cbi8vIENhbmNlbCBwb3AgU3R5bGVcblxuLmNhbmNlbC1yZWFzb24tY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLmNhbmNlbC1pbnB1dHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxufVxuLmNhbmNlbEV4YW1XcmFwcGVyIHtcbiAgICAuZGV0YWlscyB7XG4gICAgICAgIG1hcmdpbjogMTBweCAtMTVweDtcbiAgICB9XG4gICAgLmNvbnRlbnQtd3JhcGVyIHtcbiAgICAgICAgLmJ1dHRvbi1TZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAtMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FuY2VsLXRhYmxlIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbnRoLFxudGQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA2cHggMnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG50aCB7XG4gICAgYmFja2dyb3VuZDogIzAwNGE3ZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbnRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cbnRhYmxlIHRyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbnRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xufVxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xufVxudGFibGUgdHI6bnRoLWNoaWxkKG9kZCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XG59XG50YWJsZSB0ci5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZDogI2RjZWZmNyAhaW1wb3J0YW50O1xufVxuLnRhYmxlLXJlc3BvbnNpdmUgdHIgdGQ6Zmlyc3QtY2hpbGQgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIsXG4udGFibGUtcmVzcG9uc2l2ZSB0ciB0aDpmaXJzdC1jaGlsZCAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5cblxuXG4vLyBFZGl0IEV4YW1cbi5lZGl0LWlucHV0LWNvbnRhaW5lcntcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLmZvcm0tY3RybHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAudG9waWMtbGlua2Vke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5uby10b3BpYy1saW5rZWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnRvcGljLWxpbmtlZC1mYXtcbiAgICBjb2xvcjogIzEyODNmNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm5vLXRvcGljLWxpbmtlZC1mYXtcbiAgICBjb2xvcjogI2Q0ZDRkNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuI2VkaXRDbGFzcyB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG59XG5cbi5zdWJqZWN0LWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIC5lZGl0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5lZGl0LWlucHV0LWNvbnRhaW5lcntcbiAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAuZm9ybS1jdHJse1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuICAgICAgbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5zdWJqZWN0LWNvbnRhaW5lcjpudGgtbGFzdC1jaGlsZCgpe1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4vLyBUb3BpY1xuLnRvcGljLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tcmlnaHQ6IDAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luOiAycHg7XG59XG4uYXJyb3ctaWNvbntcbiAgICBwYWRkaW5nOiAwIDVweDtcbn1cbi5sZXZlbDFUb3BpY3tcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4uc3ViVG9waWNMZXZlbHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLnB0LTR7XG4gICAgcGFkZGluZy10b3A6NHB4IWltcG9ydGFudFxufVxuLnRvcGljLWxibHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc3KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG4iLCIubWlkZGxlLXNlY3Rpb257XG4gIHBhZGRpbmc6IDElO1xufVxuXG4uaGVhZGVyLXNlY3Rpb257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAuaGVhZGVyLWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAuaW1nLWNvbnRhaW5lcntcbiAgICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1vZGVsLW5hbWUtY29udGFpbmVye1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgI2NsYXNze1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E2NWY4O1xuICB9XG4gICNleGFte1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYTY1Zjg7XG4gIH1cbn1cblxuLmFjdGl2ZXtcbiAgYmFja2dyb3VuZDogIzNhNjZmYTtcbiAgY29sb3I6ICNmZGZkZmQ7XG59XG4ubm9uLWFjdGl2ZXtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNiMGIwYjA7XG59XG5cbi5taWRkbGV7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/course-planner/exam/exam.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/course-module/course-planner/exam/exam.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/course-services/class-schedule.service */ "./src/app/services/course-services/class-schedule.service.ts");
/* harmony import */ var _services_course_services_exam_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/course-services/exam-schedule.service */ "./src/app/services/course-services/exam-schedule.service.ts");
/* harmony import */ var _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/course-services/topic-listing.service */ "./src/app/services/course-services/topic-listing.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _course_planner_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../course-planner.model */ "./src/app/components/course-module/course-planner/course-planner.model.ts");
/* harmony import */ var _session_filter_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../session-filter.model */ "./src/app/components/course-module/course-planner/session-filter.model.ts");
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













let ExamComponent = /** @class */ (() => {
    let ExamComponent = class ExamComponent {
        constructor(router, auth, msgService, classService, widgetService, topicService, examService, httpService) {
            this.router = router;
            this.auth = auth;
            this.msgService = msgService;
            this.classService = classService;
            this.widgetService = widgetService;
            this.topicService = topicService;
            this.examService = examService;
            this.httpService = httpService;
            // global variables
            this.jsonFlag = {
                isProfessional: false,
                institute_id: '',
                showHideColumn: false,
                setting: true
            };
            this.coursePlannerFor = "exam";
            // apis variables to send
            this.inputElements = {
                masterCourse: "-1",
                course: "-1",
                subject: "-1",
                standard_id: "-1",
                subject_id: "-1",
                batch_id: "-1",
                faculty: "-1",
                isAssigned: "N"
            };
            // Duration filter for course planner data
            this.filterDateInputs = {
                thisWeek: true,
                lastWeek: false,
                thisMonth: false,
                custom: false
            };
            //  class status filter for course planner data
            this.filterStatusInputs = {
                upcoming: true,
                attendancePending: true,
                marksUpdated: true,
                marksPending: true,
                cancelled: true,
            };
            // Default col show hide status
            this.showHideColumns = {
                subject: true,
                topic: true,
                description: false,
            };
            // for show hide table columns
            this.checkedColCounter = 1;
            // Array Elements
            this.facultyList = [];
            this.coursePlannerData = []; // saved course planner fetched data
            this.allData = []; // used for pagination purpose
            // course model array
            this.masterCourseList = [];
            this.courseList = [];
            this.subjectList = [];
            // batch model array
            this.batchList = [];
            this.coursePlannerFilters = new _course_planner_model__WEBPACK_IMPORTED_MODULE_11__["CoursePlanner"]();
            this.sessionFiltersArr = new _session_filter_model__WEBPACK_IMPORTED_MODULE_12__["SessionFilter"]();
            this.filterShow = false;
            this.filterDateRange = "";
            // FOR PAGINATION
            this.pageIndex = 1;
            this.displayBatchSize = 20;
            this.totalCount = 0;
            this.sizeArr = [20, 50, 100, 150, 200, 500];
            // pop up section variables
            // Cancel Exam
            this.tempData = [];
            this.courseTempData = '';
            this.courseCommonExamCancelPopUP = false;
            this.showReasonSection = '';
            this.cancelPopUpData = {
                reason: "",
                notify: true
            };
            this.cancelExamPopUP = false;
            // for Edit
            this.editClass = {
                description: "",
                topic_covered_ids: "",
                topic_covered_names: "",
                subject_id: "",
                course_id: "",
                class_sche_date: "",
                class_schedule_id: "",
                batch_id: "",
                start_time: "",
                end_time: "",
                total_marks: "",
                duration: "",
                course_exam_schedule_id: "",
                room_no: ""
            };
            this.topicsList = [];
            this.totalTopicsList = [];
            this.selectedTopics = ''; //join ids by '|'
            this.selectedTopicsNames = '';
            this.schoolModel = false;
        }
        ngOnInit() {
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.jsonFlag.isProfessional = true;
                }
                else {
                    this.jsonFlag.isProfessional = false;
                }
            });
            // changes by Nalini - to handle school model conditions
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            this.showHideColForModel();
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            this.fetchPreFillData();
            let filters = sessionStorage.getItem('coursePlannerFilter');
            if (filters) { // if session filters are not blank
                this.sessionFilters(filters);
            }
        }
        showHideColForModel() {
            if (this.jsonFlag.isProfessional) {
                this.showHideColumns.description = true;
                this.showHideColumns.topic = false;
                // this.jsonFlag.setting = false;
            }
        }
        sessionFilters(filters) {
            this.sessionFiltersArr = JSON.parse(filters);
            this.inputElements.masterCourse = this.sessionFiltersArr.masterCourse;
            this.inputElements.course = this.sessionFiltersArr.courseId;
            this.inputElements.standard_id = this.sessionFiltersArr.standardId;
            this.inputElements.subject_id = this.sessionFiltersArr.subjectId;
            this.inputElements.faculty = this.sessionFiltersArr.facultyId;
            if (!this.jsonFlag.isProfessional) {
                this.inputElements.subject = this.sessionFiltersArr.batchId;
            }
            else {
                this.inputElements.batch_id = this.sessionFiltersArr.batchId;
            }
            this.filterDateInputs.thisWeek = this.sessionFiltersArr.thisWeek;
            this.filterDateInputs.lastWeek = this.sessionFiltersArr.lastWeek;
            this.filterDateInputs.thisMonth = this.sessionFiltersArr.thisMonth;
            this.filterDateInputs.custom = this.sessionFiltersArr.custom;
            this.filterStatusInputs.marksUpdated = this.sessionFiltersArr.isCompleted;
            this.filterStatusInputs.attendancePending = this.sessionFiltersArr.isPending;
            this.filterStatusInputs.cancelled = this.sessionFiltersArr.isCancelled;
            this.filterStatusInputs.upcoming = this.sessionFiltersArr.isUpcoming;
            this.filterStatusInputs.marksPending = this.sessionFiltersArr.isMarksUpdate;
            this.coursePlannerFilters.master_course_name = this.sessionFiltersArr.masterCourse;
            this.coursePlannerFilters.course_id = this.sessionFiltersArr.courseId;
            this.coursePlannerFilters.batch_id = this.sessionFiltersArr.batchId;
            this.coursePlannerFilters.teacher_id = this.sessionFiltersArr.facultyId;
            if (!this.filterStatusInputs.upcoming) {
                this.coursePlannerFilters.isUpcoming = "N";
            }
            else if (!this.filterStatusInputs.attendancePending) {
                this.coursePlannerFilters.isPending = "N";
            }
            else if (!this.filterStatusInputs.marksUpdated) {
                this.coursePlannerFilters.isCompleted = "N";
            }
            else if (!this.filterStatusInputs.marksPending) {
                this.coursePlannerFilters.isMarksUpdate = "N";
            }
            else if (!this.filterStatusInputs.cancelled) {
                this.coursePlannerFilters.isCancelled = "N";
            }
            this.coursePlannerFilters.from_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.sessionFiltersArr.from_date).format("YYYY-MM-DD");
            this.coursePlannerFilters.to_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.sessionFiltersArr.to_date).format("YYYY-MM-DD");
            if (this.sessionFiltersArr.masterCourse != "-1") {
                this.updateCoursesList();
            }
            sessionStorage.setItem('isFromCoursePlanner', String(false));
            sessionStorage.setItem('coursePlannerFilter', '');
            if (this.coursePlannerFilters.master_course_name != '-1' || this.coursePlannerFilters.standard_id != '-1') {
                setTimeout(() => {
                    this.getData();
                }, 2000);
            }
        }
        clearFilters() {
            sessionStorage.setItem('batch_info', '');
            sessionStorage.setItem('isSubjectView', '');
            sessionStorage.setItem('isFromCoursePlanner', '');
            sessionStorage.setItem('coursePlannerFilter', '');
            this.sessionFiltersArr = new _session_filter_model__WEBPACK_IMPORTED_MODULE_12__["SessionFilter"]();
        }
        fetchPreFillData() {
            // get master course - course - subject data  for course model
            if (!this.jsonFlag.isProfessional) {
                this.auth.showLoader();
                this.classService.getAllMasterCourse().subscribe(res => {
                    this.masterCourseList = res;
                    if (this.sessionFiltersArr.masterCourse != "-1") {
                        this.updateCoursesList();
                    }
                    this.auth.hideLoader();
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
                });
            }
            else {
                // get master course - course - subject data  for Batch model
                this.auth.showLoader();
                this.classService.getStandardSubjectList(this.inputElements.standard_id, this.inputElements.subject_id, this.inputElements.isAssigned).subscribe(res => {
                    this.masterCourseList = res.standardLi;
                    this.batchList = res.batchLi;
                    if (this.sessionFiltersArr.standardId != "-1") {
                        this.updateCoursesList();
                    }
                    this.auth.hideLoader();
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
                });
            }
            // get active faculty list
            this.classService.getAllTeachersListOld().subscribe(res => {
                this.facultyList = res;
            }, err => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
            });
        }
        updateCoursesList() {
            if (!this.jsonFlag.isProfessional) {
                this.coursePlannerFilters.master_course_name = this.inputElements.masterCourse;
                if (this.sessionFiltersArr.courseId != "-1" && this.sessionFiltersArr.courseId != "") {
                    this.inputElements.course = this.sessionFiltersArr.courseId;
                }
                else {
                    this.inputElements.course = "-1";
                    this.inputElements.subject = "-1";
                    this.coursePlannerFilters.course_id = "-1";
                    this.coursePlannerFilters.batch_id = "-1";
                }
                if (this.inputElements.masterCourse == "") {
                    this.courseList = [];
                    this.subjectList = [];
                }
                else {
                    for (var i = 0; i < this.masterCourseList.length; i++) {
                        if (this.masterCourseList[i].master_course == this.inputElements.masterCourse) {
                            this.courseList = this.masterCourseList[i].coursesList;
                            if (this.sessionFiltersArr.courseId != "-1" && this.sessionFiltersArr.courseId != "") {
                                this.updateSubjectsList();
                            }
                            else {
                                this.subjectList = [];
                                return;
                            }
                        }
                    }
                }
            }
            else {
                this.coursePlannerFilters.standard_id = this.inputElements.standard_id;
                this.inputElements.subject_id = "-1";
                this.coursePlannerFilters.subject_id = "-1";
                this.inputElements.batch_id = '-1';
                if (this.inputElements.standard_id == "-1") {
                    this.courseList = [];
                }
                else {
                    this.auth.showLoader();
                    this.classService.getStandardSubjectList(this.inputElements.standard_id, this.inputElements.subject_id, this.inputElements.isAssigned).subscribe(res => {
                        this.auth.hideLoader();
                        this.courseList = res.subjectLi;
                        this.batchList = res.batchLi;
                        this.auth.hideLoader();
                        for (var i = 0; i < this.masterCourseList.length; i++) {
                            if (this.masterCourseList[i].standard_id == this.inputElements.standard_id) {
                                this.courseStartDate = this.masterCourseList[i].start_date;
                                this.courseEndDate = this.masterCourseList[i].end_date;
                                if (this.sessionFiltersArr.subjectId != "-1" && this.sessionFiltersArr.subjectId != "") { // check subject id null to fetch course according to it.
                                    this.inputElements.subject_id = this.sessionFiltersArr.subjectId;
                                    this.updateSubjectsList();
                                }
                                this.clearFilters();
                                return;
                            }
                        }
                    }, err => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
                    });
                }
            }
        }
        updateSubjectsList() {
            if (!this.jsonFlag.isProfessional) {
                this.coursePlannerFilters.course_id = this.inputElements.course;
                if (this.inputElements.course == "" || this.inputElements.course == "-1") {
                    this.subjectList = [];
                    this.inputElements.subject = "-1";
                    this.coursePlannerFilters.batch_id = this.inputElements.subject;
                }
                else {
                    for (var i = 0; i < this.courseList.length; i++) {
                        if (this.courseList[i].course_id == this.inputElements.course) {
                            this.subjectList = this.courseList[i].batchesList;
                            this.courseStartDate = this.courseList[i].start_date;
                            this.courseEndDate = this.courseList[i].end_date;
                            if (this.sessionFiltersArr.standardId != "-1" && this.sessionFiltersArr.standardId != "") {
                                this.inputElements.subject = this.sessionFiltersArr.batchId;
                            }
                            this.clearFilters();
                            return;
                        }
                    }
                }
            }
            else {
                this.auth.showLoader();
                this.coursePlannerFilters.subject_id = this.inputElements.subject_id;
                this.classService.getStandardSubjectList(this.inputElements.standard_id, this.inputElements.subject_id, this.inputElements.isAssigned).subscribe(res => {
                    this.auth.hideLoader();
                    this.batchList = res.batchLi;
                    this.clearFilters();
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
                    this.clearFilters();
                });
            }
        }
        updateSubject() {
            if (!this.jsonFlag.isProfessional) {
                this.coursePlannerFilters.batch_id = this.inputElements.subject;
            }
            else {
                this.coursePlannerFilters.batch_id = this.inputElements.batch_id;
                let temp = this.batchList.filter(x => x.batch_id == this.inputElements.batch_id);
                this.courseStartDate = '';
                this.courseEndDate = '';
                if (temp) {
                    this.courseStartDate = temp[0].start_date;
                    this.courseEndDate = temp[0].end_date;
                }
            }
        }
        updateFacultyInFilter() {
            this.coursePlannerFilters.teacher_id = this.inputElements.faculty;
        }
        toggleFilter() {
            if (this.filterShow) {
                this.filterShow = false;
            }
            else {
                this.filterShow = true;
            }
        }
        updateDateFilter(inputDateFilter, e) {
            this.filterDateInputs.thisWeek = false;
            this.filterDateInputs.lastWeek = false;
            this.filterDateInputs.thisMonth = false;
            this.filterDateInputs.custom = false;
            if (inputDateFilter == 'custom') { //  Custom
                this.openCalendar('customeDate');
                this.filterDateInputs.custom = true;
                e.currentTarget.checked = true;
            }
            else if (inputDateFilter == 'lastWeek') { // Last week
                this.coursePlannerFilters.from_date = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'weeks').startOf('isoWeek').format("YYYY-MM-DD");
                this.coursePlannerFilters.to_date = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'weeks').endOf('isoWeek').format("YYYY-MM-DD");
                this.filterDateInputs.lastWeek = true;
                e.currentTarget.checked = true;
            }
            else if (inputDateFilter == 'thisMonth') { // This month
                this.coursePlannerFilters.from_date = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-01");
                this.coursePlannerFilters.to_date = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-") + moment__WEBPACK_IMPORTED_MODULE_2__().daysInMonth();
                this.filterDateInputs.thisMonth = true;
                e.currentTarget.checked = true;
            }
            else if (inputDateFilter == 'thisWeek') { // This Week
                this.coursePlannerFilters.from_date = moment__WEBPACK_IMPORTED_MODULE_2__().isoWeekday("Monday").format("YYYY-MM-DD");
                this.coursePlannerFilters.to_date = moment__WEBPACK_IMPORTED_MODULE_2__().weekday(7).format("YYYY-MM-DD");
                this.filterDateInputs.thisWeek = true;
                e.currentTarget.checked = true;
            }
        }
        updateStatusFilter(e, statusFilter) {
            if (!e.currentTarget.checked) {
                if (statusFilter == 'upcoming') {
                    this.coursePlannerFilters.isUpcoming = "N";
                }
                else if (statusFilter == 'pending') {
                    this.coursePlannerFilters.isPending = "N";
                }
                else if (statusFilter == 'marksUpdated') {
                    this.coursePlannerFilters.isCompleted = "N";
                }
                else if (statusFilter == 'marksPending') {
                    this.coursePlannerFilters.isMarksUpdate = "N";
                }
                else if (statusFilter == 'cancelled') {
                    this.coursePlannerFilters.isCancelled = "N";
                }
            }
            else if (e.currentTarget.checked) {
                if (statusFilter == 'upcoming') {
                    this.coursePlannerFilters.isUpcoming = "Y";
                }
                else if (statusFilter == 'pending') {
                    this.coursePlannerFilters.isPending = "Y";
                }
                else if (statusFilter == 'marksUpdated') {
                    this.coursePlannerFilters.isCompleted = "Y";
                }
                else if (statusFilter == 'marksPending') {
                    this.coursePlannerFilters.isMarksUpdate = "Y";
                }
                else if (statusFilter == 'cancelled') {
                    this.coursePlannerFilters.isCancelled = "Y";
                }
            }
        }
        openCalendar(id) {
            document.getElementById(id).click();
        }
        updateFilterDateRange(e) {
            if (this.filterDateInputs.custom) {
                this.coursePlannerFilters.from_date = moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("YYYY-MM-DD");
                this.coursePlannerFilters.to_date = moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("YYYY-MM-DD");
            }
        }
        getData() {
            this.filterShow = false;
            this.jsonFlag.showHideColumn = false;
            this.auth.showLoader();
            // Course/bacth model and master course is selected check
            if ((!this.jsonFlag.isProfessional && this.coursePlannerFilters.master_course_name == "-1") ||
                (this.jsonFlag.isProfessional && this.coursePlannerFilters.standard_id == "-1")) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please select master course');
                this.auth.hideLoader();
                return;
            }
            else { // Get Course Planner Data
                this.classService.getCoursePlannerData(this.coursePlannerFilters, this.coursePlannerFor).subscribe(res => {
                    console.log(res);
                    this.auth.hideLoader();
                    this.allData = res;
                    if (this.allData.length == 0) {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No result found");
                    }
                    else {
                        this.totalCount = this.allData.length;
                        this.pageIndex = 1;
                        this.fectchTableDataByPage(this.pageIndex);
                    }
                }, err => {
                    this.auth.hideLoader();
                    this.coursePlannerData = [];
                    this.totalCount = 0;
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                });
            }
        }
        showHideCol() {
            if (this.jsonFlag.showHideColumn) {
                this.jsonFlag.showHideColumn = false;
            }
            else {
                this.jsonFlag.showHideColumn = true;
            }
        }
        hideCol(e) {
            if (!e.currentTarget.checked) {
                this.checkedColCounter++;
            }
            else {
                this.checkedColCounter--;
            }
        }
        hideShowHideMenu() {
            this.jsonFlag.showHideColumn = false;
        }
        /*** pagination functions */
        /* Fetch next set of data from server and update table */
        fetchNext() {
            this.pageIndex++;
            this.fectchTableDataByPage(this.pageIndex);
        }
        /* Fetch previous set of data from server and update table */
        fetchPrevious() {
            this.pageIndex--;
            this.fectchTableDataByPage(this.pageIndex);
        }
        /* Fetch table data by page index */
        fectchTableDataByPage(index) {
            this.pageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.coursePlannerData = this.getDataFromDataSource(startindex);
        }
        getDataFromDataSource(startindex) {
            let t = this.allData.slice(startindex, startindex + this.displayBatchSize);
            return t;
        }
        /* Fetches Data as per the user selected batch size */
        updateTableBatchSize(num) {
            this.pageIndex = 1;
            this.displayBatchSize = parseInt(num);
            this.getData();
        }
        getVisibility(c) {
            let d = moment__WEBPACK_IMPORTED_MODULE_2__(c.class_date).format("YYYY-MM-DD");
            if (d >= moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("YYYY-MM-DD")) {
                return true;
            }
            else {
                return false;
            }
        }
        closeAll() {
            this.filterShow = false;
        }
        // Send Reminder pop up section///
        // Course Model
        sendReminderForCourse(data) {
            if (confirm('Are you sure you want to notify?')) {
                let obj = {
                    course_exam_schedule_id: data.schedule_id,
                    course_id: data.course_id,
                    requested_date: moment__WEBPACK_IMPORTED_MODULE_2__(data.date).format('YYYY-MM-DD')
                };
                this.auth.showLoader();
                this.widgetService.sendReminder(obj).subscribe(res => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Reminder Sent', 'Reminder Sent Successfull');
                }, err => {
                    this.auth.hideLoader();
                    console.log(err);
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                });
            }
        }
        // Batch Model
        notifyExamSchedule(data) {
            if (confirm('Are you sure you want to send Exam Schedule SMS to the batch?')) {
                this.auth.showLoader();
                this.widgetService.notifyStudentExam(data.schedule_id).subscribe(res => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Notified', 'Notification Sent Successfully');
                }, err => {
                    this.auth.hideLoader();
                    //console.log(err);
                });
            }
        }
        // Cancel Exam section
        // Cancel Exam for Course model
        onCancelExamClickCourse(data) {
            this.tempData = data;
            this.courseTempData = data;
            this.courseCommonExamCancelPopUP = true;
        }
        // cancelExamCourseWise() {
        //   this.showReasonSection = "Course";
        //   this.cancelPopUpData = {
        //     reason: "",
        //     notify: true
        //   };
        // }
        // cancelSubjectWiseExam(data) {
        //   this.showReasonSection = "Subject";
        //   this.tempData = data;
        //   this.cancelPopUpData = {
        //     reason: "",
        //     notify: true
        //   };
        // }
        cancelExamCall() {
            let notify;
            if (this.cancelPopUpData.notify) {
                notify = 'Y';
            }
            else {
                notify = 'N';
            }
            if (this.cancelPopUpData.reason.trim() == "" || null) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter reason');
                return false;
            }
            let obj = {
                cancel_reason: this.cancelPopUpData.reason,
                course_exam_schedule_id: this.tempData.schedule_id,
                course_id: this.tempData.course_id,
                is_cancel_notify: notify,
                requested_date: moment__WEBPACK_IMPORTED_MODULE_2__(this.tempData.date).format('YYYY-MM-DD')
            };
            // this.auth.showLoader();
            this.widgetService.cancelExamScheduleCourse(obj).subscribe(res => {
                // this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Cancelled', 'Exam Cancelled Successfully');
                this.closePopUpCommon();
                this.getData();
            }, err => {
                // this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        closePopUpCommon() {
            this.tempData = "";
            this.subjectList = [];
            this.courseCommonExamCancelPopUP = false;
            this.showReasonSection = "";
            this.courseTempData = '';
            this.cancelPopUpData.reason = "";
        }
        // Cancel Exam for Batch MODEL
        onCancelExamClick(data) {
            this.cancelExamPopUP = true;
            this.tempData = data;
        }
        closeExamPopup() {
            this.cancelExamPopUP = false;
            this.tempData = "";
            this.cancelPopUpData = {
                reason: "",
                notify: true
            };
        }
        cancelExamClassSchedule() {
            if (this.cancelPopUpData.reason.trim() == "" || null) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter cancellation reason');
                return;
            }
            let notify = "";
            if (this.cancelPopUpData.notify) {
                notify = "Y";
            }
            else {
                notify = "N";
            }
            let obj = {
                batch_id: this.tempData.batch_id,
                exam_freq: "OTHER",
                cancelSchd: [{
                        schd_id: this.tempData.schedule_id,
                        exam_desc: this.cancelPopUpData.reason,
                        is_notified: notify
                    }]
            };
            // this.auth.showLoader();
            this.widgetService.cancelExamSchedule(obj).subscribe(res => {
                // this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Successfully Cancelled', 'Exam Schedule Cancelled Successfully');
                this.closeExamPopup();
                this.getData();
            }, err => {
                // this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        //  Notify to Cancel Class
        notifyCancelClass(selected) {
            if (confirm('Are you sure you want to notify?')) {
                let obj = {};
                if (!this.jsonFlag.isProfessional) {
                    obj = {
                        "institute_id": this.jsonFlag.institute_id,
                        "schedule_id": selected.schedule_id,
                        "to_date": selected.date,
                        "course_id": selected.course_id
                    };
                }
                else {
                    obj = {
                        "institute_id": this.jsonFlag.institute_id,
                        "schedule_id": selected.schedule_id,
                        "to_date": selected.date,
                        "batch_id": selected.batch_id
                    };
                }
                this.auth.showLoader();
                this.classService.notifyCancelClass(obj, 'exam').subscribe(res => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'Cancelled schedule notification', 'Notification has been sent successfully');
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                });
            }
        }
        // Update Attendance
        markAttendanceExamCourse(exam) {
            let obj = {};
            if (this.jsonFlag.isProfessional) {
                obj = {
                    batch_id: exam.batch_id,
                    schd_id: exam.schedule_id,
                    batch_name: exam.batch_name,
                    topics_covered: exam.topic_covered_ids,
                    course_name: exam.standard_name,
                    master_course_name: exam.batch_name,
                    subject_id: exam,
                    forCourseWise: true,
                    forSubjectWise: false,
                    isExam: true,
                    is_attendance_marked: exam.is_attendance_marked
                };
            }
            else {
                obj = {
                    course_exam_schedule_id: exam.schedule_id,
                    course_name: exam.course_name,
                    master_course_name: exam.master_course_name,
                    batch_name: exam.course_name,
                    forCourseWise: true,
                    forSubjectWise: false,
                    isExam: true,
                    schedDate: moment__WEBPACK_IMPORTED_MODULE_2__(exam.date).format('YYYY-MM-DD'),
                    is_attendance_marked: exam.is_attendance_marked
                };
            }
            let batch_info = JSON.stringify(obj);
            this.storeSession();
            sessionStorage.setItem('batch_info', btoa(batch_info));
            sessionStorage.setItem('isSubjectView', String(false));
            this.router.navigate(['/view/dashboard/mark-attendance']);
        }
        // Update Exam Marks for course model
        examMarksUpdateCourse(data) {
            let examInfoObj = {
                "course_exam_schedule_id": data.schedule_id,
                "course_marks_update_level": data.course_mark_level_level,
                "is_exam_grad_feature": "",
                "batch_name": data.master_course_name + "-" + data.course_name + "-" + data.subject_name
            };
            let obj = {
                data: examInfoObj
            };
            let exam_info = JSON.stringify(obj);
            this.storeSession();
            sessionStorage.setItem('exam_info', btoa(exam_info));
            sessionStorage.setItem('isSubjectView', String(false));
            this.router.navigate(['/view/dashboard/exam-marks']);
        }
        // Update Exam marks for Batch model
        examMarksUpdate(data) {
            let examInfoObj = {
                "schd_id": data.schedule_id,
                "batch_id": data.batch_id,
                "class_schedule_id": data.schedule_id
            };
            let obj = {
                data: examInfoObj
            };
            let exam_info = JSON.stringify(obj);
            this.storeSession();
            sessionStorage.setItem('exam_info', btoa(exam_info));
            sessionStorage.setItem('isSubjectView', String(false));
            this.router.navigate(['/view/dashboard/exam-marks-batch']);
        }
        storeSession() {
            this.sessionFiltersArr.isCompleted = this.filterStatusInputs.marksUpdated;
            this.sessionFiltersArr.isPending = this.filterStatusInputs.attendancePending;
            this.sessionFiltersArr.isCancelled = this.filterStatusInputs.cancelled;
            this.sessionFiltersArr.isUpcoming = this.filterStatusInputs.upcoming;
            this.sessionFiltersArr.isMarksUpdate = this.filterStatusInputs.marksPending;
            this.sessionFiltersArr.from_date = String(this.coursePlannerFilters.from_date);
            this.sessionFiltersArr.to_date = String(this.coursePlannerFilters.to_date);
            this.sessionFiltersArr.masterCourse = this.inputElements.masterCourse;
            this.sessionFiltersArr.courseId = this.inputElements.course;
            this.sessionFiltersArr.batchId = this.inputElements.subject;
            this.sessionFiltersArr.standardId = this.inputElements.standard_id;
            this.sessionFiltersArr.subjectId = this.inputElements.subject_id;
            if (!this.jsonFlag.isProfessional) {
                this.sessionFiltersArr.batchId = this.inputElements.subject;
            }
            else {
                this.sessionFiltersArr.batchId = this.inputElements.batch_id;
            }
            this.sessionFiltersArr.facultyId = this.inputElements.faculty;
            this.sessionFiltersArr.thisWeek = this.filterDateInputs.thisWeek;
            this.sessionFiltersArr.lastWeek = this.filterDateInputs.lastWeek;
            this.sessionFiltersArr.thisMonth = this.filterDateInputs.thisMonth;
            this.sessionFiltersArr.custom = this.filterDateInputs.custom;
            let filter_info = JSON.stringify(this.sessionFiltersArr);
            sessionStorage.setItem('isClass', String(false));
            sessionStorage.setItem('isFromCoursePlanner', String(true));
            sessionStorage.setItem('coursePlannerFilter', filter_info);
        }
        redirect() {
            this.storeSession();
            this.schoolModel ? this.router.navigate(['/view/exams/schedule']) : this.router.navigate(['/view/course/create/exam']);
        }
        // Edit Exam functions
        editCourseExam(course) {
            if (!this.jsonFlag.isProfessional) {
                const url = `/api/v1/courseExamSchedule/fetch-exam-details?course_exam_schedule_id=${course.schedule_id}&exam_date=${course.date}`;
                this.auth.showLoader();
                this.httpService.getData(url).subscribe((res) => {
                    this.auth.hideLoader();
                    console.log(res);
                    let result = res.result;
                    this.examList = result;
                    $('#editExamForCourse').modal('show');
                }, err => {
                    this.auth.hideLoader();
                    //console.log(err);
                });
            }
            else {
                $('#editExam').modal('show');
                this.editClass.description = course.description;
                this.editClass.topic_covered_ids = course.topic_covered_ids;
                this.editClass.topic_covered_names = course.topics_covered;
                this.editClass.subject_id = course.subject_id;
                this.editClass.course_id = course.course_id;
                this.editClass.class_sche_date = course.date;
                this.editClass.batch_id = course.batch_id;
                this.editClass.class_schedule_id = course.schedule_id;
                this.editClass.start_time = course.start_time;
                this.editClass.end_time = course.end_time;
                this.editClass.total_marks = course.total_marks;
                this.editClass.duration = course.duration;
                this.editClass.course_exam_schedule_id = course.course_id;
                this.editClass.room_no = course.room_no;
            }
        }
        toggleArrow(topic) {
            topic.isExpand = !(topic.isExpand);
        }
        fetchTopics() {
            this.auth.showLoader();
            let subject_id = '';
            subject_id = this.editClass.subject_id;
            this.topicService.getAllTopicsSubTopics(subject_id).subscribe((resp) => {
                this.auth.hideLoader();
                this.topicsList = [];
                this.totalTopicsList = [];
                this.topicsList = resp;
                if (!!this.topicsList && this.topicsList.length > 0) {
                    $('#topicModel').modal('show');
                    $('#editExam').modal('hide');
                    this.topicsList.forEach(tpc => {
                        this.totalTopicsList.push(tpc);
                        tpc.checked = false;
                        if (tpc.subTopic.length) {
                            this.getAllTopics(tpc.subTopic);
                        }
                    });
                    let topicIds = this.editClass.topic_covered_ids.split('|');
                    topicIds.forEach(tpc => {
                        this.topicsList.forEach(tp => {
                            if (tp.topicId == tpc) {
                                tp.checked = true;
                            }
                        });
                    });
                }
                else {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No topics available to link");
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        fetchTopicForSubject(exam) {
            this.currentEditExam = exam;
            this.topicService.getAllTopicsSubTopics(exam.subject_id).subscribe((resp) => {
                this.auth.hideLoader();
                this.topicsList = [];
                this.totalTopicsList = [];
                this.topicsList = resp;
                if (!!this.topicsList && this.topicsList.length > 0) {
                    $('#topicModel').modal('show');
                    $('#editExamForCourse').modal('hide');
                    this.topicsList.forEach(tpc => {
                        this.totalTopicsList.push(tpc);
                        tpc.checked = false;
                        if (tpc.subTopic.length) {
                            this.getAllTopics(tpc.subTopic);
                        }
                    });
                    let topicIds = exam.topics_covered.split('|');
                    topicIds.forEach(tpc => {
                        this.topicsList.forEach(tp => {
                            if (tp.topicId == tpc) {
                                tp.checked = true;
                            }
                        });
                    });
                }
                else {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.info, 'Info', "No topics available to link");
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        getAllTopics(topic) {
            topic.forEach(obj => {
                this.totalTopicsList.push(obj);
                obj.checked = false;
                if (obj.subTopic.length) {
                    this.getAllTopics(obj.subTopic);
                }
            });
        }
        selectTopics(topic, event) {
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
        }
        checkAllSubTopics(topic, param) {
            topic.forEach(obj => {
                if (param) {
                    obj.checked = true;
                }
                else {
                    obj.checked = false;
                }
                if (obj.subTopic.length) {
                    this.checkAllSubTopics(obj.subTopic, param);
                }
            });
        }
        //uncheck parent if any of the child is deselected
        uncheckParent(topic) {
            var getParentTopic = this.totalTopicsList.find(obj => obj.topicId == topic.parentTopicId);
            if (!!getParentTopic) {
                getParentTopic.checked = false;
                if (getParentTopic.parentTopicId != 0) {
                    this.uncheckParent(getParentTopic);
                }
            }
        }
        //check parent if all subtopics are checked
        checkParents(topic) {
            var checkAll = true;
            if (this.totalTopicsList.find(el => el.topicId == topic.topicId) != undefined) {
                var parentTopic = this.totalTopicsList.find(ele => ele.topicId == topic.parentTopicId);
                if (parentTopic != undefined) {
                    if (parentTopic.subTopic.length) {
                        parentTopic.subTopic.forEach(subTpc => {
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
        showEditOption() {
            if (!this.jsonFlag.isProfessional) {
                $('#topicModel').modal('hide');
                $('#editExamForCourse').modal('show');
            }
            else {
                $('#topicModel').modal('hide');
                $('#editExam').modal('show');
            }
        }
        saveTopics() {
            var getSelectedTopics = this.totalTopicsList.filter(el => el.checked == true);
            var getTopicIds;
            if (getSelectedTopics != undefined) {
                getTopicIds = getSelectedTopics.map(obj => {
                    return obj.topicId;
                });
                let getTopicNames = getSelectedTopics.map(obj => {
                    return obj.topicName;
                });
                if (!this.jsonFlag.isProfessional) {
                    getTopicIds = getTopicIds.join('|');
                    this.currentEditExam.topics_covered = getTopicIds;
                    this.currentEditExam.topic_name = getTopicNames.join('|');
                    $('#topicModel').modal('hide');
                    $('#editExamForCourse').modal('show');
                    for (let index = 0; index < this.examList.length; index++) {
                        if (this.examList[index].exam_schedule_id == this.currentEditExam.exam_schedule_id) {
                            this.examList[index].topics_covered = this.currentEditExam.topics_covered;
                            this.examList[index].topic_name = this.currentEditExam.topic_name;
                        }
                    }
                }
                else {
                    this.editClass.topic_covered_ids = getTopicIds;
                    this.editClass.topic_covered_names = getTopicNames.join('|');
                    $('#topicModel').modal('hide');
                    $('#editExam').modal('show');
                }
            }
        }
        updateExam() {
            if (!this.jsonFlag.isProfessional) { // for course model
                let obj = {
                    "course_exam_schedule_id": this.examList[0].course_exam_schedule_id,
                    "batch_id": this.examList[0].batch_id,
                    "exam_detail_list": this.examList.map(exam => {
                        let subject = {
                            "exam_schedule_id": exam.exam_schedule_id,
                            "topics_covered": exam.topics_covered,
                            "exam_description": exam.exam_description,
                            "subject_id": exam.subject_id
                        };
                        return subject;
                    })
                };
                this.examService.updateExamSubjectWise(obj).subscribe(res => {
                    this.auth.hideLoader();
                    let result = res;
                    $('#editExamForCourse').modal('hide');
                    if (result.statusCode == 200) {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Exam updated successfully');
                        this.getData();
                    }
                }, err => {
                    $('#editExamForCourse').modal('hide');
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                });
            }
            else {
                let obj = {
                    "batch_id": this.editClass.batch_id,
                    "is_exam_schedule": "Y",
                    "class_schedule_id": this.editClass.class_schedule_id,
                    "exam_desc": this.editClass.description,
                    "topics_covered": this.editClass.topic_covered_ids,
                    "cousre_planner_update_operation": "desc_and_topic_covered_update"
                };
                this.classService.changeClassTeacher(obj).subscribe(// update exam for batch model
                // update exam for batch model
                res => {
                    this.auth.hideLoader();
                    let result = res;
                    $('#editExam').modal('hide');
                    if (result.statusCode == 200) {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Exam updated successfully');
                        this.clearEditValues();
                        this.getData();
                    }
                }, err => {
                    $('#editExam').modal('hide');
                    this.auth.hideLoader();
                    this.clearEditValues();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                });
            }
        }
        clearEditValues() {
            this.editClass.description = "";
            this.editClass.topic_covered_ids = "";
            this.editClass.topic_covered_names = "";
            this.editClass.subject_id = "";
            this.editClass.course_id = "";
            this.editClass.class_sche_date = "";
            this.editClass.class_schedule_id = "";
            this.editClass.batch_id = "";
            this.editClass.start_time = "";
            this.editClass.end_time = "";
            this.editClass.total_marks = "";
            this.editClass.duration = "";
        }
    };
    ExamComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_9__["MessageShowService"] },
        { type: _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ClassScheduleService"] },
        { type: _services_widget_service__WEBPACK_IMPORTED_MODULE_10__["WidgetService"] },
        { type: _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_7__["TopicListingService"] },
        { type: _services_course_services_exam_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ExamCourseService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] }
    ];
    ExamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exam',
            template: __importDefault(__webpack_require__(/*! raw-loader!./exam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/course-planner/exam/exam.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./exam.component.scss */ "./src/app/components/course-module/course-planner/exam/exam.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_9__["MessageShowService"],
            _services_course_services_class_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ClassScheduleService"],
            _services_widget_service__WEBPACK_IMPORTED_MODULE_10__["WidgetService"],
            _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_7__["TopicListingService"],
            _services_course_services_exam_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ExamCourseService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]])
    ], ExamComponent);
    return ExamComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/course-planner/session-filter.model.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/course-module/course-planner/session-filter.model.ts ***!
  \*********************************************************************************/
/*! exports provided: SessionFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionFilter", function() { return SessionFilter; });
class SessionFilter {
    constructor() {
        this.isCompleted = true;
        this.isPending = true;
        this.isCancelled = true;
        this.isUpcoming = true;
        this.isMarksUpdate = true;
        this.from_date = "";
        this.to_date = "";
        this.masterCourse = "";
        this.courseId = "";
        this.batchId = "";
        this.standardId = "";
        this.subjectId = "";
        this.facultyId = "";
        this.thisWeek = true;
        this.lastWeek = false;
        this.thisMonth = false;
        this.custom = false;
    }
}
;


/***/ }),

/***/ "./src/app/services/course-services/topic-listing.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/course-services/topic-listing.service.ts ***!
  \*******************************************************************/
/*! exports provided: TopicListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListingService", function() { return TopicListingService; });
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




let TopicListingService = /** @class */ (() => {
    let TopicListingService = class TopicListingService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.drl = "assets/data.json";
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
        }
        getSatndard() {
            let url = this.baseUrl + "/api/v1/standards/all/" + this.institute_id + "?active=Y";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        getSubject(obj) {
            let url = this.baseUrl + "/api/v1/subjects/standards/" + obj + "?active=Y";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        postTopic(obj) {
            let url = this.baseUrl + "/api/v1/topic_manager/add/" + this.institute_id;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        getZeroLevelTopics(subject_id) {
            let url = this.baseUrl + "/api/v1/topic_manager/add/" + this.institute_id + "/subjects/" + subject_id + "/topics";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        getAllTopicsSubTopics(subject_id) {
            let url = this.baseUrl + "/api/v1/topic_manager/standards/-1/subjects/" + subject_id + "/topics";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        getSubTopics(parent_topic_id) {
            let url = this.baseUrl + "/api/v1/topic_manager/subTopicList/" + this.institute_id + "/" + parent_topic_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
    };
    TopicListingService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    TopicListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], TopicListingService);
    return TopicListingService;
})();



/***/ })

}]);
//# sourceMappingURL=components-course-module-course-planner-course-planner-module-es2015.js.map