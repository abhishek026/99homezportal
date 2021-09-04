(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-live-classes-module-live-classes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/add-class/add-class.component.html":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/add-class/add-class.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLiveClassesModuleAddClassAddClassComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <aside class=\"middle-full\">\n    <section class=\"middle-main clearFix activity-wrapper\">\n      <section class=\"row header\" style=\"margin-right: 0px; margin-left: 0px;margin-bottom: 5px;\">\n        <div class=\"row\" style=\"margin-left: 0px;margin-right: 0px;\">\n          <h2 class=\"pull-left\" style=\"margin-bottom: 0;\">\n            <a routerLink=\"/view/live-classes\">\n              Live class\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n            Add {{(live_class_for=='2') ? 'Zoom ' : 'Live'}} Class\n          </h2>\n        </div>\n      </section>\n\n      <!-- <h2 class=\"\" style=\"margin:10px 0px;\">\n        Add Live Class\n      </h2> -->\n\n      <!-- <div class=\"border-container\">\n      </div> -->\n\n      <!-- <section class=\"student-tab\">\n        <ul class=\"nav-tab\">\n          <li id=\"li-one\" class=\"active\">\n            <div class=\"navigator\" id=\"class-icon\" (click)=\"switchToView($event.target.id)\">\n              <span id=\"class-icon\">1</span>\n              <p id=\"class-icon\">Class Details</p>\n            </div>\n          </li>\n          <li class=\"\" id=\"li-two\">\n            <div class=\"navigator\" id=\"assignStudent-icon\" (click)=\"checkMandatoryFields()\">\n              <span id=\"assignStudent-icon\">2</span>\n              <p id=\"assignStudent-icon\">Assign Students</p>\n            </div>\n          </li>\n        </ul>\n      </section> -->\n\n      <section id=\"classDetails\" *ngIf=\"isBasicActive\">\n        <div class=\"class_details_container\" >\n          <div class=\"flex-center\">\n            <span class=\"addClassHeader\">Add {{(live_class_for=='2') ? 'Zoom ' : 'Live'}} Class</span>\n          </div>\n          <!-- <div class=\"field-wrapper\" style=\"display: flex;width: 100%;\" *ngIf=\"is_zoom_integration_enable\">\n            <div class=\"field-radio-wrapper\">\n              <input class=\"form-radio\" type=\"radio\" name=\"classFor\" value=\"1\" id='live' checked\n                [(ngModel)]=\"live_class_for\" (ngModelChange)=\"changeLiveClassFor()\">\n              <label for=\"live\" class=\"l1\">Proctur Live</label>\n            </div>\n            <div class=\"field-radio-wrapper\">\n              <input class=\"form-radio\" type=\"radio\" name=\"classFor\" value=\"2\" id='zoom' [(ngModel)]=\"live_class_for\"\n                (ngModelChange)=\"changeLiveClassFor()\">\n              <label for=\"zoom\" class=\"l1\">Zoom</label>\n            </div>\n          </div> -->\n\n\n\n          <div class=\"field-wrapper\" style=\"width: 100%;float: left;\">\n            <label for=\"topicName\">Topic Name<span class=\"text-danger\">*</span> </label>\n            <input type=\"text\" style=\"width: 100%;border: none;\" value=\"\" id=\"topicName\" class=\"form-ctrl input\"\n              name=\"topicName\" required [(ngModel)]=\"topicName\" placeholder=\"Enter Topic Name\" />\n          </div>\n\n          <div class=\"field-wrapper-container\">\n\n            <div class=\"field-wrapper datePickerBox\" style=\"width: 50%;\">\n              <label for=\"date\">Date<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" style=\"border: none;\" class=\"form-ctrl\" bsDatepicker readonly=\"true\" class=\"input-date input\"\n                [(ngModel)]=\"scheduledateFrom\" name=\"scheduledateFrom\" (ngModelChange)=\"getEvent($event)\" id=\"date\" >\n              <!-- <i class=\"fa fa-calendar\" style=\"cursor: pointer;color: #1283f4;\" (click)=\"openCalendar('date')\"></i> -->\n            </div>\n\n            <div class=\"field-wrapper\" style=\"width: 25%;\">\n              <label for=\"date\">From<span class=\"text-danger\">*</span></label>\n              <div class=\"from\">\n                <select class=\"made-out select\" id=\"from1\" [(ngModel)]=\"hoursFrom\" (ngModelChange)=\"getEventHourFrom($event)\">\n                  <option value=\"\" disabled selected=\"selected\" hidden>HH</option>\n                  <option *ngFor=\"let i of hour\" [value]=\"i\">\n                    {{i}}\n                  </option>\n                </select>\n                <select class=\"made-out select\" id=\"from2\" style=\"margin-left:15px;\" [(ngModel)]=\"minuteFrom\"\n                  (ngModelChange)=\"getEventHourFrom($event)\">\n                  <option value=\"\" disabled selected=\"selected\" hidden>MM</option>\n                  <option [value]=\"i\" *ngFor=\"let i of minutes\">\n                    {{i}}\n                  </option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"field-wrapper\" style=\"width: 25%;\">\n              <label for=\"date\">To<span class=\"text-danger\">*</span></label>\n              <div class=\"from\">\n                <select class=\"made-out select\" id=\"to1\" [(ngModel)]=\"hoursTo\" (ngModelChange)=\"getEventHourFrom()\">\n                  <option value=\"\" disabled selected=\"selected\" hidden>HH</option>\n                  <option *ngFor=\"let i of hour\" [value]=\"i\">\n                    {{i}}\n                  </option>\n                </select>\n                <select class=\"made-out select\" id=\"to2\" style=\"margin-left:15px;\" [(ngModel)]=\"minuteTo\"\n                  (ngModelChange)=\"getEventHourFrom($event)\">\n                  <option value=\"\" disabled selected=\"selected\" hidden>MM</option>\n                  <option *ngFor=\"let i of minutes\" [value]=\"i\">\n                    {{i}}\n                  </option>\n                </select>\n              </div>\n            </div>\n\n          </div>\n          <div style=\"display: flex;flex-direction: row;padding-bottom: 5px;\">\n            <!-- Added the conditon for only for faculty -->\n            <div class=\"field-wrapper faculty_container\" style=\"margin-right: 5%;display: flex;flex-direction: column;\"\n              *ngIf=\"userType != 3\">\n              <!-- <div class=\"field-wrapper faculty_container\"> -->\n              <label for=\"faculty\">Teacher Name(s)<span class=\"text-danger\">*</span> </label>\n              <!-- <input type=\"text\" value=\"\" id=\"faculty\" class=\"form-ctrl\" name=\"faculty\" required /> -->\n              <ng-multiselect-dropdown [placeholder]=\"'Select Teacher'\" [settings]=\"facultySettings\"\n                [data]=\"teachersAssigned\" [(ngModel)]=\"selectedFacultyList\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n\n            <div class=\"field-wrapper moderator_container\" style=\"display: flex;flex-direction: column;\"\n              *ngIf=\"!zoom_enable\">\n              <label for=\"moderator\">Moderator Name(s) </label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select Moderator'\" [settings]=\"moderatorSettings\"\n                [data]=\"userAssigned\" [(ngModel)]=\"selectedModeratorList\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div style=\"display: flex;flex-direction: row;padding-bottom: 5px;\"\n            *ngIf=\"isShowProductOption && !schoolModel\">\n            <div class=\"field-wrapper faculty_container\" style=\"margin-right: 5%;display: flex;flex-direction: column;\"\n              *ngIf=\"isShowProductOption\">\n              <label for=\"faculty\">Product(s)</label>\n              <!-- <input type=\"text\" value=\"\" id=\"faculty\" class=\"form-ctrl\" name=\"faculty\" required /> -->\n              <ng-multiselect-dropdown [placeholder]=\"'Select product'\" [settings]=\"productSetting\" [data]=\"productData\"\n                [(ngModel)]=\"product_id\" (ngModelChange)=\"onChangeProduct($event)\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n\n            <div class=\"field-wrapper faculty_container\" style=\"display: flex;flex-direction: column;width: 45%;\"\n              *ngIf=\"isShowProductOption && !schoolModel\">\n              <label for=\"students\">Product Users </label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select Users'\" [settings]=\"userListSetting\" [data]=\"userData\"\n                [(ngModel)]=\"selectedUserList\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div style=\"display: flex;flex-direction: row;padding-bottom: 5px;\">\n            <div class=\"field-wrapper faculty_container\" style=\"display: flex;flex-direction: column;margin-right: 5%;\"\n              *ngIf=\"!isProfessional\">\n              <label for=\"master_course\">{{schoolModel ? 'Standard' : 'Master Course'}}<span\n                  class=\"text-danger\">*</span> </label>\n              <select class=\"form-ctrl select\" style=\"border: none;\" *ngIf=\"schoolModel\" name=\"master_course\"\n                id=\"master_course\" [(ngModel)]=\"courseValue\" (ngModelChange)=\"getCourses($event)\">\n                <option value=\"\" disabled selected=\"selected\">Select {{schoolModel ? 'Standard' : 'Master Course'}}\n                </option>\n                <option *ngFor=\"let i of masters\" [value]=\"i\">\n                  {{i}}\n                </option>\n              </select>\n              <ng-multiselect-dropdown *ngIf=\"!schoolModel\"\n                placeholder=\"{{schoolModel ? 'Select Standard' : 'Select Master Course'}}\"\n                [settings]=\"masterCourseListSetting\" [data]=\"masters\" [(ngModel)]=\"courseValue\"\n                (ngModelChange)=\"getCourses($event)\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n\n            <div class=\"field-wrapper faculty_container\" style=\"display: flex;flex-direction: column;\"\n              *ngIf=\"isProfessional\">\n              <label for=\"students\">Batch(s)<span class=\"text-danger\">*</span> </label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select Batch'\" [settings]=\"batchListSetting\" [data]=\"batches\"\n                [(ngModel)]=\"selectedBatchList\" (ngModelChange)=\"getBatchesCoursesIds($event)\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n\n            <div class=\"field-wrapper faculty_container\" style=\"display: flex;flex-direction: column;\"\n              *ngIf=\"!isProfessional\">\n              <!-- changes by Nalini - to handle school model conditions -->\n              <label for=\"students\">{{schoolModel ? 'Section(s)' : 'Course(s)'}}<span class=\"text-danger\">*</span>\n              </label>\n              <ng-multiselect-dropdown placeholder=\"{{schoolModel ? 'Select Section' : 'Select Course'}}\"\n                [settings]=\"courseListSetting\" [data]=\"courses\" [(ngModel)]=\"selectedCourseList\"\n                (ngModelChange)=\"getBatchesCoursesIds($event)\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div style=\"display: flex;flex-direction: row;padding-bottom: 5px;\">\n            <div *ngIf=\"schoolModel\" class=\"field-wrapper faculty_container\"\n              style=\"display: flex;flex-direction: column;margin-right: 5%;\">\n              <!-- changes by Nalini - to handle school model conditions -->\n              <label for=\"students\">Subjects<span class=\"text-danger\">*</span> </label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select Subject'\" [settings]=\"subjectSetting\" [data]=\"subjectList\"\n                [(ngModel)]=\"selectedSubjectList\" (ngModelChange)=\"getStudentsBySubject($event)\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n            <div class=\"field-wrapper faculty_container\" style=\"display: flex;flex-direction: column;\">\n              <label for=\"students\">Student Name(s) </label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select Students'\" [settings]=\"studentListSettings\"\n                [data]=\"studentList\" [(ngModel)]=\"selectedStudentList\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n\n          <div>\n            <div class=\"AdvanceSetting\">\n              <span style=\"font-weight: 600;\">Advance settings</span>\n            </div>\n            <div class=\"AdvanceSettingDiv\">\n              <div class=\"field-checkbox-wrapper advance-setting-item\">\n                <input type=\"checkbox\" name=\"expenses\" [(ngModel)]=\"addOnlineClass.sent_notification_flag\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"qun\">\n                <label for=\"qun\">Send Notification</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    All the members in\n                    <br>meeting will recieve\n                    <br>sms notification for\n                    <br>the session.\n                  </div>\n                </div>\n                <!-- <i class=\"fa fa-commenting\" aria-hidden=\"true\" style=\"color: #1283f4;margin-left: 5px;\"></i> -->\n              </div>\n\n              <!-- Private Access -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"!zoom_enable\">\n                <input type=\"checkbox\" name=\"private_access\" [(ngModel)]=\"addOnlineClass.private_access\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"private_access\">\n                <label for=\"private_access\">Private Access</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Only the users invited\n                    <br> using e-mail ID would\n                    <br> be able to join. Direct\n                    <br> link sharing of session\n                    <br>won't work.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Enable lobby -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"!zoom_enable\">\n                <input type=\"checkbox\" name=\"access_enable_lobby\" [(ngModel)]=\"addOnlineClass.access_enable_lobby\"\n                  [value]=\"0\" class=\"form-checkbox\" id=\"access_enable_lobby\">\n                <label for=\"access_enable_lobby\">Access Enable Lobby</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    All the students will\n                    <br>wait in waiting room\n                    <br> after joining the\n                    <br> session. Teachers will\n                    <br> have access to allow\n                    <br> students in the\n                    <br>meeting.\n                  </div>\n                </div>\n              </div>\n\n              <!-- hide all notification -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"!zoom_enable\">\n                <input type=\"checkbox\" name=\"hide_recording_notifications\"\n                  [(ngModel)]=\"addOnlineClass.hide_recording_notifications\" [value]=\"0\" class=\"form-checkbox\"\n                  id=\"hide_recording_notifications\">\n                <label for=\"hide_recording_notifications\">Hide all notifications in recordings </label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Remove all UI\n                    <br>notifications\n                    <br>from recordings.\n                    <br>The MP4 files will\n                    <br>not contain\n                    <br>notifications.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Hide user count -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"!zoom_enable\">\n                <input type=\"checkbox\" name=\"prevent_user_count\" [(ngModel)]=\"addOnlineClass.prevent_user_count\"\n                  [value]=\"0\" class=\"form-checkbox\" id=\"prevent_user_count\">\n                <label for=\"prevent_user_count\">Hide user count </label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Do not show\n                    <br>how many users\n                    <br>are participating\n                    <br>to participants\n                    <br>and observers.\n                    <br>Moderators can\n                    <br>always see this.\n                    <br>This will also\n                    <br>disable join\n                    <br>meeting and leave\n                    <br>meeting messages.\n                  </div>\n                </div>\n              </div>\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"!zoom_enable\">\n                <input type=\"checkbox\" name=\"access_enable_breakout_rooms\"\n                  [(ngModel)]=\"addOnlineClass.access_enable_breakout_rooms\" [value]=\"0\" class=\"form-checkbox\"\n                  id=\"access_enable_breakout_rooms\">\n                <label for=\"access_enable_breakout_rooms\">Breakout Room</label>\n                <!-- <div class=\"questionInfo inline-relative\">\n                              <span class=\"qInfoIcon i-class\">i</span>\n                              <div class=\"tooltip-box-field\">\n                                  All the students will\n                                  <br>wait in waiting room\n                                  <br> after joining the\n                                  <br> session. Teachers will\n                                  <br> have access to allow\n                                  <br> students in the\n                                  <br>meeting.\n                              </div>\n                            </div> -->\n              </div>\n              <!-- Enable Host -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"zoom_enable\">\n                <input type=\"checkbox\" name=\"host_video\" [(ngModel)]=\"addOnlineClass.host_video\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"host_video\">\n                <label for=\"host_video\">Host Video</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Automatically video\n                    <br> will be started\n                    <br>once the host\n                    <br>(teacher) starts\n                    <br>the meeting.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Enable Participant -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"zoom_enable\">\n                <input type=\"checkbox\" name=\"participant_video\" [(ngModel)]=\"addOnlineClass.participant_video\"\n                  [value]=\"0\" class=\"form-checkbox\" id=\"participant_video\">\n                <label for=\"participant_video\">Participant Video</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Automatically video\n                    <br>will be started\n                    <br>once the participant\n                    <br>(student) joins\n                    <br>the meeting.\n                  </div>\n                </div>\n              </div>\n\n\n              <!-- Enable Join before Host -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"zoom_enable\">\n                <input type=\"checkbox\" name=\"join_before_host\" [(ngModel)]=\"addOnlineClass.join_before_host\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"join_before_host\">\n                <label for=\"join_before_host\">Join Before Host</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Allow\n                    <br>participants(students)\n                    <br>to join the meeting\n                    <br> before the host starts\n                    <br> the meeting.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Enable Mute Upon Entry -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"zoom_enable\">\n                <input type=\"checkbox\" name=\"mute_upon_entry\" [(ngModel)]=\"addOnlineClass.mute_upon_entry\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"mute_upon_entry\">\n                <label for=\"mute_upon_entry\">Mute Upon Entry</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Automatically\n                    <br>participants(students)\n                    <br> will be muted after\n                    <br> joining the meeting.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Enable Auto Recording -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"zoom_enable\">\n                <input type=\"checkbox\" name=\"auto_recording\" [(ngModel)]=\"auto_recording\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"auto_recording\">\n                <label for=\"auto_recording\">Auto Recording</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Automatically\n                    <br>recording\n                    <br> will get started\n                    <br>once host (teacher)\n                    <br> starts the meeting.\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"action-button-container\">\n            <!-- <div class=\"action-btn-item-1\">\n                    <button type=\"button\" name=\"button\" class=\"back-btn\" (click)=\"navigateTo('classDetails')\">Back</button>\n                  </div> -->\n            <div class=\"action-btn-item-2\">\n              <button type=\"button\" name=\"button\" class=\"cancel-btn\"\n                (click)=\"cancel()\">Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;\n              <button type=\"button\" name=\"button\" class=\"next-btn\" (click)=\"scheduleClass()\">Submit</button>\n            </div>\n          </div>\n\n        </div>\n      </section>\n      <div class=\"class_details_container zoomMsgSection\"\n        style=\"color: white;background: #1283f4;width: 8%;border-radius: 4px;padding: 7px;margin-top: -3%;\"\n        *ngIf=\"live_class_for=='2'\">\n        <span data-toggle=\"modal\" style=\"cursor: pointer;\" data-target=\"#zoomFAQ\">Zoom FAQs</span>\n      </div>\n    </section>\n  </aside>\n</div>\n\n\n<div id=\"zoomFAQ\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h2 class=\"modal-title\">Zoom FAQs</h2>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"new-modules-list\">\n          <ol>\n            <li>If you see error \"Error in scheduling Meeting\"?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>In Proctur \"My Account\" -\n                  <ul style=\"font-weight: 400; margin-top: 5px;list-style: lower-roman;\">\n                    <li>Check JWT token should be mentioned correctly, verify from ZOOM Account as well.\n                    </li>\n                    <li>Check there should not be any blank space before email id field\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n\n            <li>Asking for a password when a student joins the class?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>This usually happens when the password setting is on in ZOOM Account. Go to Zoom Account Settings in\n                  your zoom account and turn off the password for joiners. Please note this is available only in PAID\n                  Zoom accounts.\n                </li>\n              </ul>\n            </li>\n\n            <li>Facing issue in scheduling multiple classes at the same time?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>Make sure you have a multiple host plan with zoom and check in Proctur My Accounts whether no of\n                  hosts is mentioned correctly.\n                </li>\n              </ul>\n            </li>\n\n            <li>Seeing message when you start class “You cannot start a meeting because it is hosted by another user”?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>It could be because of one of the below reasons\n                  <ul style=\"font-weight: 400; margin-top: 5px;list-style: lower-roman;\">\n                    <li>Another faculty meeting is still going on from different systems.\n                    </li>\n                    <li>Check the number of hosts purchased. There should be a host available to start the meeting.\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n\n            <li>Zoom meeting issue on Apple device (Chrome & Safari Browser)?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>Go to browser setting > Content setting > Block Pop Up.\n                </li>\n              </ul>\n            </li>\n\n            <li>When students click on join class and ask for a download zoom app in a customized app?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>Ask student to update the app, in case this doesn't resolve, your app may need updation. Connect\n                  with Proctur support team.\n                </li>\n              </ul>\n            </li>\n          </ol>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/attendance-report/attendance-report.component.html":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/attendance-report/attendance-report.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLiveClassesModuleAttendanceReportAttendanceReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"padding-left: 21px;\">\n  <aside class=\"middle-full\">\n    <section class=\"middle-main clearFix activity-wrapper\">\n      <section class=\"row header\" style=\"margin-right: 16px;\">\n        <div class=\"row\" style=\"margin-left: 0px;margin-right: 0px;\">\n          <h2 class=\"pull-left\">\n            <a routerLink=\"/view/live-classes\">\n              Live class\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n            <span>View Attendance</span>\n\n          </h2>\n        </div>\n        <button (click)=\"back()\" class=\"normal-btn\">Back</button>\n      </section>\n\n      <section class=\"header-container\" *ngIf=\"session_data\">\n        <div class=\"header-item\">\n          <div class=\"header-title\">\n            <span>Date : </span>\n          </div>\n          <div class=\"header-value\">\n            <span>{{session_data.start_datetime | date: 'dd MMM yyyy'}}</span>\n          </div>\n        </div>\n\n        <div class=\"header-item\">\n          <div class=\"header-title\">\n            <span>Time : </span>\n          </div>\n          <div class=\"header-value\">\n            <span>\n              {{session_data.start_datetime | date: 'shortTime'}} - {{session_data.end_datetime | date: 'shortTime'}}\n            </span>\n          </div>\n        </div> \n        \n        <div class=\"header-item\">\n          <div class=\"header-title\">\n            <span>Attended : </span>\n          </div>\n          <div class=\"header-value\">\n            <span>{{session_data.total_present + session_data.total_partially_present}} /\n              {{session_data.total_participants}}</span>\n          </div>\n        </div>\n\n        <div class=\"header-item\">\n          <div class=\"header-title\">\n            <span>Attendance Threshold :\n            </span>\n          </div>\n          <div class=\"header-value\">\n            <span>{{session_data.attendance_threshold}} %\n              <div class=\"questionInfo inline-relative\">\n                <span class=\"qInfoIcon i-class\">?</span>\n                <div class=\"tooltip-box-field md\">\n                  Students are <br> marked Present <br>\n                  for the class in <br> case they \n                  attend <br> class for the <br> duration\n                  more than the<br> defined threshold\n                  percentage. <br>This setting \n                  can be <br> changed from the <br> Settings section.\n                </div>\n              </div>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"header-item\">\n          <div class=\"header-title\">\n            <span>Topic : </span>\n          </div>\n          <div class=\"header-value\">\n            <span title=\"{{session_data.session_name}}\"> {{ (session_data.session_name?.length>30) ? (session_data.session_name | slice:0:30 ) + '...' :(session_data.session_name) }}</span>\n          </div>\n        </div>\n\n        <div class=\"header-item\">\n          <div class=\"header-title\">\n            <span>Guest : </span>\n          </div>\n          <div class=\"header-value\">\n            <span>{{session_data.total_guest==0 ? '-' : session_data.total_guest}}</span>\n          </div>\n        </div>\n        <!-- <div class=\"header-item\" style=\"padding: 0;width: 15%;\">\n          <section class=\"search-bar-container\">\n            <div class=\"field-wrapper\">\n              <input type=\"text\" value=\"\" id=\"search_bar\" [(ngModel)]=\"searchInput\" name=\"searchInput\"\n                (keyup)=\"searchDatabase(search)\" placeholder=\"Search here...\" class=\"search-box\" #search>\n            </div>\n          </section>\n        </div> -->\n        <div class=\"header-item\" style=\"width: 50%;padding: 0;padding-top: 2px;justify-content: flex-end;\">\n          <span (click)=\"ExportAsExcel()\" title=\"Export as Excel\"><i _ngcontent-c28=\"\" aria-hidden=\"true\"\n              class=\"fa fa-file-excel-o\" style=\"font-size: 28px;color: darkred;cursor: pointer;\"></i></span>\n        </div>\n      </section>\n\n      <section class=\"table-container\" style=\"margin-top: 0;\">\n        <div class=\"table-heading-container\">\n          <div class=\"table-heading-item sm-item\">\n            <span>Id</span>\n          </div>\n          <div class=\"table-heading-item md-item\">\n            <span>Name</span>\n          </div>\n          <div class=\"table-heading-item md-item\">\n            <span>Contact No.</span>\n          </div>\n          <div class=\"table-heading-item md-item\">\n            <span>Join Time</span>\n          </div>\n          <div class=\"table-heading-item md-item\">\n            <span>Left Time</span>\n          </div>\n          <div class=\"table-heading-item md-item\">\n            <span>Join duration (mins)</span>\n          </div>\n          <div class=\"table-heading-item md-item\">\n            <span>Status</span>\n          </div>\n        </div>\n        <div class=\"table-outer-value-container\">\n          <div class=\"table-value-container\" *ngFor=\"let record of attendance_list\" [ngClass]=\"{'absent-border': record.attendance_status == 'Absent',\n                        'present-border': record.attendance_status == 'Present',\n                        'partially-border': record.attendance_status == 'Partially Present'}\">\n            <div class=\"table-value-item sm-item\" style=\"color: #109CF1\">\n              <span>{{record.display_id!=null ? record.display_id : '-'}}</span>\n            </div>\n            <div class=\"table-value-item md-item\">\n              <span\n                title=\"{{record.name}}\">{{ (record.name.length > 20) ? (record.name | slice:0:20) + '...' : record.name }}\n                <span *ngIf=\"record.user_type == 3\">(Faculty)</span>\n                <span *ngIf=\"record.user_type == 99\">(Register user)</span>\n                <span *ngIf=\"record.isInvited\">(Guest)</span>\n              </span>\n            </div>\n            <div class=\"table-value-item md-item\">\n              {{record.phone!=null ? record.phone : '-'}}\n            </div>\n            <div class=\"table-value-item md-item\">\n              <span>{{record.join_time}}</span>\n              <span *ngIf=\"record.attendance_status == 'Absent'\">-</span>\n            </div>\n            <div class=\"table-value-item md-item\">\n              <span>{{record.leave_join}}</span>\n              <span *ngIf=\"record.attendance_status == 'Absent'\">-</span>\n            </div>\n            <div class=\"table-value-item md-item\">\n              <span>{{record.duration}} mins\n                <span *ngIf=\"record.attendance_status != 'Absent'\">({{record.attendance_percentage}} %)</span>\n              </span>\n            </div>\n            <div class=\"table-value-item md-item\">\n              <span *ngIf=\"record.attendance_status == 'Absent'\" class=\"absent\">{{record.attendance_status}}</span>\n              <span *ngIf=\"record.attendance_status == 'Present'\" class=\"present\">{{record.attendance_status}}</span>\n              <span *ngIf=\"record.attendance_status == 'Partially Present'\"\n                class=\"partially\">{{record.attendance_status}}</span>\n                <i style=\"margin-left: 10px;font-size: 16px;cursor: pointer;\" title=\"Mark Attendance\" (click)=\"record.showMenu = true\" class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                <div class=\"d-item dd-list-container\" *ngIf=\"record.showMenu\" (mouseleave)=\"record.showMenu = false\">\n                  <div class=\"d-item dropdown-list\">\n                      <div class=\"d-item dd-list-inner\">\n                          <ul class=\"d-item actions-menu\">\n                              <li class=\"d-item action-item\" (click)=\"selectOption(record, 'ABSENT')\">\n                                  <a class=\"d-item enq-act enq-act--one\">\n                                    Absent\n                                  </a>\n                              </li>\n                              <li class=\"d-item action-item\" (click)=\"selectOption(record, 'PRESENT')\">\n                                <a class=\"d-item enq-act enq-act--one\">\n                                  Present\n                                </a>\n                            </li>\n                            <li class=\"d-item action-item\" (click)=\"selectOption(record, 'PARTIALLY_PRESENT')\">\n                              <a class=\"d-item enq-act enq-act--one\">\n                                Partially Present\n                              </a>\n                          </li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"\" *ngIf=\"attendance_list.length == 0\">\n            <span><b>No Records Found</b></span>\n          </div>\n        </div>\n      </section>\n\n    </section>\n  </aside>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/edit-class/edit-class.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/edit-class/edit-class.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLiveClassesModuleEditClassEditClassComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div >\n  <aside class=\"middle-full\">\n    <section class=\"middle-main clearFix activity-wrapper\">\n      <section class=\"row header\" style=\"margin-right: 0px; margin-left: 0px;margin-bottom: 5px;\">\n        <div class=\"row\" style=\"margin-left: 0px;margin-right: 0px;\">\n          <h2 class=\"pull-left\" style=\"margin-bottom: 0;\">\n            <a routerLink=\"/view/live-classes\">\n              Live class\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n            <span *ngIf=\"repeat_session == 1\">Add {{(live_class_for=='2') ? 'Zoom ' : 'Live'}} Class</span>\n            <span *ngIf=\"repeat_session == 0\">Edit {{(live_class_for=='2') ? 'Zoom ' : 'Live'}} Class</span>\n          </h2>\n        </div>\n      </section>\n\n      <!-- <h2 class=\"\" style=\"margin:10px 0px;\">\n        Add Live Class\n      </h2> -->\n\n      <!-- <div class=\"border-container\">\n      </div> -->\n\n      <!-- <section class=\"student-tab\">\n        <ul class=\"nav-tab\">\n          <li id=\"li-one\" class=\"active\">\n            <div class=\"navigator\" id=\"class-icon\" (click)=\"switchToView($event.target.id)\">\n              <span id=\"class-icon\">1</span>\n              <p id=\"class-icon\">Class Details</p>\n            </div>\n          </li>\n          <li class=\"\" id=\"li-two\">\n            <div class=\"navigator\" id=\"assignStudent-icon\" (click)=\"checkMandatoryFields()\">\n              <span id=\"assignStudent-icon\">2</span>\n              <p id=\"assignStudent-icon\">Assign Students</p>\n            </div>\n          </li>\n        </ul>\n      </section> -->\n\n      <section id=\"classDetails\" *ngIf=\"isBasicActive\">\n        <div class=\"class_details_container\" >\n          <div class=\"flex-center\">\n            <span class=\"addClassHeader\">\n              <span *ngIf=\"repeat_session == 1\">Add {{(live_class_for=='2') ? 'Zoom ' : 'Live'}} Class</span>\n              <span *ngIf=\"repeat_session == 0\">Edit {{(live_class_for=='2') ? 'Zoom ' : 'Live'}} Class</span></span>\n          </div>\n          <!-- <div class=\"field-wrapper\" style=\"display: flex;width: 100%;\" *ngIf=\"is_zoom_integration_enable\">\n            <div class=\"field-radio-wrapper\">\n              <input class=\"form-radio\" type=\"radio\" name=\"classFor\" value=\"1\" id='live' checked\n                [(ngModel)]=\"live_class_for\" (ngModelChange)=\"changeLiveClassFor()\">\n              <label for=\"live\" class=\"l1\">Proctur Live</label>\n            </div>\n            <div class=\"field-radio-wrapper\">\n              <input class=\"form-radio\" type=\"radio\" name=\"classFor\" value=\"2\" id='zoom' [(ngModel)]=\"live_class_for\"\n                (ngModelChange)=\"changeLiveClassFor()\">\n              <label for=\"zoom\" class=\"l1\">Zoom</label>\n            </div>\n          </div> -->\n\n\n\n          <div class=\"field-wrapper\" style=\"width: 100%;float: left;\">\n            <label for=\"topicName\">Topic Name<span class=\"text-danger\">*</span> </label>\n            <input type=\"text\" style=\"width: 100%;border: none;\" value=\"\" id=\"topicName\" class=\"form-ctrl input\"\n              name=\"topicName\" required [(ngModel)]=\"topicName\" placeholder=\"Enter Topic Name\" />\n          </div>\n\n          <div class=\"field-wrapper-container\">\n\n            <div class=\"field-wrapper datePickerBox\" style=\"width: 50%;\">\n              <label for=\"date\">Date<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" style=\"border: none;\" class=\" input-date input\" bsDatepicker readonly=\"true\"\n                [(ngModel)]=\"scheduledateFrom\" (ngModelChange)=\"getEvent($event)\" id=\"date\" style=\"height: 36px;\">\n              <!-- <i class=\"fa fa-calendar\" style=\"cursor: pointer;color: #1283f4;\" (click)=\"openCalendar('date')\"></i> -->\n            </div>\n\n            <div class=\"field-wrapper\" style=\"width: 25%;\">\n              <label for=\"date\">From<span class=\"text-danger\">*</span></label>\n              <div class=\"from\">\n                <select class=\"made-out select\" id=\"from1\" [(ngModel)]=\"hoursFrom\" (ngModelChange)=\"getEventHourFrom($event)\">\n                  <option value=\"\" disabled selected=\"selected\" hidden>HH</option>\n                  <option *ngFor=\"let i of hour\" [value]=\"i\">\n                    {{i}}\n                  </option>\n                </select>\n                <select class=\"made-out select\" id=\"from2\" style=\"margin-left:15px;\" [(ngModel)]=\"minuteFrom\"\n                  (ngModelChange)=\"getEventHourFrom($event)\">\n                  <option value=\"\" disabled selected=\"selected\" hidden>MM</option>\n                  <option [value]=\"i\" *ngFor=\"let i of minutes\">\n                    {{i}}\n                  </option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"field-wrapper\" style=\"width: 25%;\">\n              <label for=\"date\">To<span class=\"text-danger\">*</span></label>\n              <div class=\"from\">\n                <select class=\"made-out select\" id=\"to1\" [(ngModel)]=\"hoursTo\" (ngModelChange)=\"getEventHourFrom()\">\n                  <option value=\"\" disabled selected=\"selected\" hidden>HH</option>\n                  <option *ngFor=\"let i of hour\" [value]=\"i\">\n                    {{i}}\n                  </option>\n                </select>\n                <select class=\"made-out select\" id=\"to2\" style=\"margin-left:15px;\" [(ngModel)]=\"minuteTo\"\n                  (ngModelChange)=\"getEventHourFrom($event)\">\n                  <option value=\"\" disabled selected=\"selected\" hidden>MM</option>\n                  <option *ngFor=\"let i of minutes\" [value]=\"i\">\n                    {{i}}\n                  </option>\n                </select>\n              </div>\n            </div>\n\n          </div>\n\n          <div style=\"display: flex;flex-direction: row;padding-bottom: 5px;\">\n            <div class=\"field-wrapper faculty_container\" style=\"margin-right: 5%;display: flex;flex-direction: column;\"\n              *ngIf=\"userType != 3\">\n              <label for=\"faculty\">Teacher Name(s)<span class=\"text-danger\">*</span> </label>\n              <!-- <input type=\"text\" value=\"\" id=\"faculty\" class=\"form-ctrl\" name=\"faculty\" required /> -->\n              <ng-multiselect-dropdown [placeholder]=\"'Select Teacher'\" [settings]=\"facultySettings\"\n                [data]=\"teachersAssigned\" [(ngModel)]=\"selectedFacultyList\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n\n            <div class=\"field-wrapper moderator_container\" style=\"display: flex;flex-direction: column;\"\n              *ngIf=\"!zoom_enable\">\n              <label for=\"moderator\">Moderator Name(s) </label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select Moderator'\" [settings]=\"moderatorSettings\"\n                [data]=\"userAssigned\" [(ngModel)]=\"selectedModeratorList\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div style=\"display: flex;flex-direction: row;padding-bottom: 5px;\"\n            *ngIf=\"isShowProductOption && !schoolModel\">\n            <div class=\"field-wrapper faculty_container\" style=\"margin-right: 5%;display: flex;flex-direction: column;\">\n              <label for=\"faculty\">Product(s)</label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select product'\" [settings]=\"productSetting\" [data]=\"productData\"\n                [(ngModel)]=\"product_id\" (ngModelChange)=\"onChangeProduct($event)\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n\n            <div class=\"field-wrapper faculty_container\" style=\"display: flex;flex-direction: column;width: 45%;\"\n              *ngIf=\"isShowProductOption && !schoolModel\">\n              <label for=\"students\">Product Users </label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select Users'\" [settings]=\"userListSetting\" [data]=\"userList\"\n                [(ngModel)]=\"selectedUserList\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div style=\"display: flex;flex-direction: row;padding-bottom: 5px;\">\n            <div class=\"field-wrapper faculty_container\" style=\"display: flex;flex-direction: column;margin-right: 5%;\"\n              *ngIf=\"!isProfessional\">\n              <label for=\"master_course\">{{schoolModel ? 'Standard' : 'Master Course'}}<span\n                  class=\"text-danger\">*</span> </label>\n              <select class=\"form-ctrl select\" *ngIf=\"schoolModel\" style=\"border: none;\" name=\"master_course\"\n                [disabled]=\"(userType==3 || (userType == 0 && username != 'admin'))\"\n                [ngClass]=\"{'disabled':(userType==3 || (userType == 0 && username != 'admin'))}\"\n                id=\"master_course\" [(ngModel)]=\"courseValue\" (ngModelChange)=\"getCourses($event)\">\n                <option value=\"\" disabled selected=\"selected\">Select {{schoolModel ? 'Standard' : 'Master Course'}}\n                </option>\n                <option *ngFor=\"let i of masters\" [value]=\"i\">\n                  {{i}}\n                </option>\n              </select>\n              <ng-multiselect-dropdown *ngIf=\"!schoolModel\"\n                placeholder=\"{{schoolModel ? 'Select Standard' : 'Select Master Course'}}\"\n                [disabled]=\"(userType==3 || (userType == 0 && username != 'admin'))\"\n                [settings]=\"masterCourseListSetting\" [data]=\"masters\" [(ngModel)]=\"courseValue\"\n                (ngModelChange)=\"getCourses($event)\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n\n            <div class=\"field-wrapper faculty_container\" style=\"display: flex;flex-direction: column;\"\n              *ngIf=\"isProfessional\">\n              <label for=\"students\">Batch(s)<span class=\"text-danger\">*</span> </label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select Batch'\" [settings]=\"batchListSetting\" [data]=\"batches\"\n                [(ngModel)]=\"selectedBatchList\" [disabled]=\"(userType==3 || (userType == 0 && username != 'admin'))\"\n                [ngClass]=\"{'disabled':(userType==3 || (userType == 0 && username != 'admin'))}\"\n                (ngModelChange)=\"getBatchesCoursesIds($event)\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n\n            <div class=\"field-wrapper faculty_container\" style=\"display: flex;flex-direction: column;\"\n              *ngIf=\"!isProfessional\">\n              <!-- changes by Nalini - to handle school model conditions -->\n              <label for=\"students\">{{schoolModel ? 'Section(s)' : 'Course(s)'}}<span class=\"text-danger\">*</span>\n              </label>\n              <ng-multiselect-dropdown placeholder=\"{{schoolModel ? 'Select Section' : 'Select Course'}}\"\n                [settings]=\"courseListSetting\" [data]=\"courses\" [(ngModel)]=\"selectedCourseList\"\n                [disabled]=\"(userType==3 || (userType == 0 && username != 'admin'))\"\n                [ngClass]=\"{'disabled':(userType==3 || (userType == 0 && username != 'admin'))}\"\n                (ngModelChange)=\"getBatchesCoursesIds($event)\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div style=\"display: flex;flex-direction: row;padding-bottom: 5px;\">\n            <div *ngIf=\"schoolModel\" class=\"field-wrapper faculty_container\"\n              style=\"display: flex;flex-direction: column;margin-right: 5%;\">\n              <!-- changes by Nalini - to handle school model conditions -->\n              <label for=\"students\">Subjects<span class=\"text-danger\">*</span> </label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select Subject'\" [settings]=\"subjectSetting\" [data]=\"subjectList\"\n                [(ngModel)]=\"selectedSubjectList\" (ngModelChange)=\"getStudentsBySubject($event)\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n            <div class=\"field-wrapper faculty_container\" style=\"display: flex;flex-direction: column;\">\n              <label for=\"students\">Student Name(s) </label>\n              <ng-multiselect-dropdown [placeholder]=\"'Select Students'\"\n                style=\"color: #000;font-weight: bold;cursor: not-allowed;\" [settings]=\"studentListSettings\"\n                [data]=\"studentList\" [(ngModel)]=\"selectedStudentList\" class=\"select\">\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n\n          <div>\n            <div class=\"AdvanceSetting\">\n              <span style=\"font-weight: 600;\">Advance settings</span>\n            </div>\n            <div class=\"AdvanceSettingDiv\">\n              <div class=\"field-checkbox-wrapper advance-setting-item\">\n                <input type=\"checkbox\" name=\"sent_notification_flag\" [(ngModel)]=\"editData.sent_notification_flag\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"sent_notification_flag\">\n                <label for=\"sent_notification_flag\">Send Notification</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    All the members in\n                    <br>meeting will recieve\n                    <br>sms notification for\n                    <br>the session.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Private Access -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"!zoom_enable\">\n                <input type=\"checkbox\" name=\"private_access\" [(ngModel)]=\"editData.private_access\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"private_access\">\n                <label for=\"private_access\">Private Access</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Only the users invited\n                    <br> using e-mail ID would\n                    <br> be able to join. Direct\n                    <br> link sharing of session\n                    <br>won't work.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Enable lobby -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"!zoom_enable\">\n                <input type=\"checkbox\" name=\"access_enable_lobby\" [(ngModel)]=\"editData.access_enable_lobby\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"access_enable_lobby\">\n                <label for=\"access_enable_lobby\">Access Enable Lobby</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    All the students will\n                    <br>wait in waiting room\n                    <br> after joining the\n                    <br> session. Teachers will\n                    <br> have access to allow\n                    <br> students in the\n                    <br>meeting.\n                  </div>\n                </div>\n              </div>\n\n              <!-- hide all notification -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"!zoom_enable\">\n                <input type=\"checkbox\" name=\"hide_recording_notifications\"\n                  [(ngModel)]=\"editData.hide_recording_notifications\" [value]=\"0\" class=\"form-checkbox\"\n                  id=\"hide_recording_notifications\">\n                <label for=\"hide_recording_notifications\">Hide all notifications in recordings </label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Remove all UI\n                    <br>notifications\n                    <br>from recordings.\n                    <br>The MP4 files will\n                    <br>not contain\n                    <br>notifications.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Hide user count -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"!zoom_enable\">\n                <input type=\"checkbox\" name=\"prevent_user_count\" [(ngModel)]=\"editData.prevent_user_count\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"prevent_user_count\">\n                <label for=\"prevent_user_count\">Hide user count </label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Do not show\n                    <br>how many users\n                    <br>are participating\n                    <br>to participants\n                    <br>and observers.\n                    <br>Moderators can\n                    <br>always see this.\n                    <br>This will also\n                    <br>disable join\n                    <br>meeting and leave\n                    <br>meeting messages.\n                  </div>\n                </div>\n              </div>\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"!zoom_enable\">\n                <input type=\"checkbox\" name=\"access_enable_breakout_rooms\"\n                  [(ngModel)]=\"editData.access_enable_breakout_rooms\" [value]=\"0\" class=\"form-checkbox\"\n                  id=\"access_enable_breakout_rooms\">\n                <label for=\"access_enable_breakout_rooms\">Breakout Room</label>\n                <!-- <div class=\"questionInfo inline-relative\">\n                                    <span class=\"qInfoIcon i-class\">i</span>\n                                    <div class=\"tooltip-box-field\">\n                                        All the students will\n                                        <br>wait in waiting room\n                                        <br> after joining the\n                                        <br> session. Teachers will\n                                        <br> have access to allow\n                                        <br> students in the\n                                        <br>meeting.\n                                    </div>\n                                  </div> -->\n              </div>\n              <!-- Enable Host -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"zoom_enable\">\n                <input type=\"checkbox\" name=\"host_video\" [(ngModel)]=\"editData.host_video\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"host_video\">\n                <label for=\"host_video\">Host Video</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Automatically video\n                    <br> will be started\n                    <br>once the host\n                    <br>(teacher) starts\n                    <br>the meeting.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Enable Participant -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"zoom_enable\">\n                <input type=\"checkbox\" name=\"participant_video\" [(ngModel)]=\"editData.participant_video\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"participant_video\">\n                <label for=\"participant_video\">Participant Video</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Automatically video\n                    <br>will be started\n                    <br>once the participant\n                    <br>(student) joins\n                    <br>the meeting.\n                  </div>\n                </div>\n              </div>\n\n\n              <!-- Enable Join before Host -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"zoom_enable\">\n                <input type=\"checkbox\" name=\"join_before_host\" [(ngModel)]=\"editData.join_before_host\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"join_before_host\">\n                <label for=\"join_before_host\">Join Before Host</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Allow\n                    <br>participants(students)\n                    <br>to join the meeting\n                    <br> before the host starts\n                    <br> the meeting.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Enable Mute Upon Entry -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"zoom_enable\">\n                <input type=\"checkbox\" name=\"mute_upon_entry\" [(ngModel)]=\"editData.mute_upon_entry\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"mute_upon_entry\">\n                <label for=\"mute_upon_entry\">Mute Upon Entry</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Automatically\n                    <br>participants(students)\n                    <br> will be muted after\n                    <br> joining the meeting.\n                  </div>\n                </div>\n              </div>\n\n              <!-- Enable Auto Recording -->\n              <div class=\"field-checkbox-wrapper advance-setting-item\" *ngIf=\"zoom_enable\">\n                <input type=\"checkbox\" name=\"auto_recording\" [(ngModel)]=\"auto_recording\" [value]=\"0\"\n                  class=\"form-checkbox\" id=\"auto_recording\">\n                <label for=\"auto_recording\">Auto Recording</label>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Automatically\n                    <br>recording\n                    <br> will get started\n                    <br>once host (teacher)\n                    <br> starts the meeting.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"action-button-container\">\n            <!-- <div class=\"action-btn-item-1\">\n                    <button type=\"button\" name=\"button\" class=\"back-btn\" (click)=\"navigateTo('classDetails')\">Back</button>\n                  </div> -->\n            <div class=\"action-btn-item-2\">\n              <button type=\"button\" name=\"button\" class=\"cancel-btn\"\n                (click)=\"cancel()\">Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;\n              <button type=\"button\" name=\"button\" class=\"next-btn\" (click)=\"scheduleClass()\">Submit</button>\n            </div>\n          </div>\n\n        </div>\n      </section>\n\n      <div class=\"class_details_container zoomMsgSection\"\n        style=\"color: white;background: #1283f4;width: 8%;border-radius: 4px;padding: 7px;margin-top: -3%;\"\n        *ngIf=\"live_class_for=='2'\">\n        <span data-toggle=\"modal\" style=\"cursor: pointer;\" data-target=\"#zoomFAQ\">Zoom FAQs</span>\n      </div>\n    </section>\n  </aside>\n</div>\n\n\n<div id=\"zoomFAQ\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h2 class=\"modal-title\">Zoom FAQs</h2>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"new-modules-list\">\n          <ol>\n            <li>If you see error \"Error in scheduling Meeting\"?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>In Proctur \"My Account\" -\n                  <ul style=\"font-weight: 400; margin-top: 5px;list-style: lower-roman;\">\n                    <li>Check JWT token should be mentioned correctly, verify from ZOOM Account as well.\n                    </li>\n                    <li>Check there should not be any blank space before email id field\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n\n            <li>Asking for a password when a student joins the class?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>This usually happens when the password setting is on in ZOOM Account. Go to Zoom Account Settings in\n                  your zoom account and turn off the password for joiners. Please note this is available only in PAID\n                  Zoom accounts.\n                </li>\n              </ul>\n            </li>\n\n            <li>Facing issue in scheduling multiple classes at the same time?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>Make sure you have a multiple host plan with zoom and check in Proctur My Accounts whether no of\n                  hosts is mentioned correctly.\n                </li>\n              </ul>\n            </li>\n\n            <li>Seeing message when you start class “You cannot start a meeting because it is hosted by another user”?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>It could be because of one of the below reasons\n                  <ul style=\"font-weight: 400; margin-top: 5px;list-style: lower-roman;\">\n                    <li>Another faculty meeting is still going on from different systems.\n                    </li>\n                    <li>Check the number of hosts purchased. There should be a host available to start the meeting.\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n\n            <li>Zoom meeting issue on Apple device (Chrome & Safari Browser)?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>Go to browser setting > Content setting > Block Pop Up.\n                </li>\n              </ul>\n            </li>\n\n            <li>When students click on join class and ask for a download zoom app in a customized app?\n              <ul style=\"font-weight: 400; margin-top: 5px;\">\n                <li>Ask student to update the app, in case this doesn't resolve, your app may need updation. Connect\n                  with Proctur support team.\n                </li>\n              </ul>\n            </li>\n          </ol>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/live-class-setting/live-class-setting.component.html":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/live-class-setting/live-class-setting.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLiveClassesModuleLiveClassSettingLiveClassSettingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"w98 p-15\">\n<div class=\"display\">\n    <div>\n     <nav aria-label=\"breadcrumb\">\n         <ol class=\"breadcrumb arr-right\">\n             <li style=\"color: #0084f6;\" class=\"breadcrumb-item \">Live Class</li>\n             <li class=\"breadcrumb-item \"><a>Setting</a></li>\n             \n         </ol>\n        \n     </nav>\n    </div>\n    </div>\n</div>\n<div class=\"page-content\">\n    <div class=\"w981 main_div\">\n      <div>\n        <div class=\"settings\">\n          <span>\n            <img src=\"../../../../assets/images/settings.svg\">\n            <span class=\"position\">Settings</span>\n          </span>\n        </div>\n        <ul class=\"menu\">\n            <li  (click)=\"scrollTo('section0')\" [ngClass]=\"{ 'selected': currentSection === 'section0'}\"><a>Live Class Setting</a></li>\n            <li  (click)=\"scrollTo('section1')\" [ngClass]=\"{ 'selected': currentSection === 'section1'}\"><a>Zoom Setting</a></li>\n            <li  (click)=\"scrollTo('section2')\" [ngClass]=\"{ 'selected': currentSection === 'section2'}\"><a>Live Class Attendance Setting</a> </li>\n            <li  (click)=\"scrollTo('section3')\" [ngClass]=\"{ 'selected': currentSection === 'section3'}\"><a>VDOCipher Watch Multiplier\n                Setting </a></li>\n     \n       \n      \n        </ul>\n      </div>\n      <div  class=\"scrool1\">\n        <div class=\"flex1\" id=\"section0\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">L</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n                Live Class Setting\n            </p>\n            <p class=\"bold_settings\">\n                Enable Proctur Live Recording\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n          </div>\n          <div class=\"toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" name=\"is_proctur_live_recording_allow \" id=\"is_proctur_live_recording_allow \" [(ngModel)]=\"liveClassSettings.is_proctur_live_recording_allow \">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n              \n            </div>\n            <div>\n            \n              <p class=\"bold_settings\">\n                Proctur Live Recorded Session Download Visibility\n              </p>\n              \n               <div class=\"flex\">\n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"student\" value=\"2\" id=\"enable_recording_feature\" [(ngModel)]=\"liveClassSettings.proctur_live_recorded_session_download_visibilty.student\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                     Students \n                    </p>\n                  </div>\n                </div>\n                 <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"teacher\" value=\"4\" id=\"enable_recording_feature\" [(ngModel)]=\"liveClassSettings.proctur_live_recorded_session_download_visibilty.teacher\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                    Teachers\n                    </p>\n                  </div>\n                </div>\n              \n              \n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"admin\" value=\"8\" id=\"enable_recording_feature\" [(ngModel)]=\"liveClassSettings.proctur_live_recorded_session_download_visibilty.admin\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                   Admin\n                    </p>\n                  </div>\n                </div>\n                <div class=\"flex\">\n                    <div>\n                      <label class=\"checkbox\">\n                         <span class=\"checkbox__input\">\n                           <input type=\"checkbox\" name=\"open_user\" value=\"8\" id=\"open_user\" [(ngModel)]=\"liveClassSettings.proctur_live_recorded_session_download_visibilty.open_user\">\n                           <span class=\"checkbox__control\">\n                            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                               <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                           </span>\n                         </span>\n                       </label>\n                    </div>\n                     <div>\n                      <p class=\"settings_label\">\n                     Open Users\n                      </p>\n                    </div>\n                  </div>\n              </div>\n            </div>\n           \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Enable Proctur Live Integration with VDOcipher\n              </p>\n               <p class=\"black_settings\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n               </p>\n             \n            </div>\n            <div class=\"toggle s_toggle\">\n              <span>\n                <span class=\"off\">OFF</span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" name=\"proctur_live_integration_with_vdoCipher\" id=\"proctur_live_integration_with_vdoCipher\" [(ngModel)]=\"liveClassSettings.proctur_live_integration_with_vdoCipher\">\n                  <span class=\"slider round\"></span>\n                </label>\n                <span class=\"on\">ON</span>\n              </span>\n              \n            </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Enable Proctur Live Integration with Vimeo\n              </p>\n               <p class=\"black_settings\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n               </p>\n             \n            </div>\n            <div class=\"toggle s_toggle\">\n              <span>\n                <span class=\"off\">OFF</span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" name=\"proctur_live_integration_with_vdoCipher\" id=\"proctur_live_integration_with_vimeo\" [(ngModel)]=\"liveClassSettings.proctur_live_integration_with_vimeo\"  >\n                  <span class=\"slider round\"></span>\n                </label>\n                <span class=\"on\">ON</span>\n              </span>\n              \n            </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n          \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Proctur Live Recorded Session View Visibility\n              </p>\n               <p class=\"black_settings\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n               </p>\n               <div class=\"flex\">\n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"proctur_live_recorded_session_view_visibility.student\" id=\"proctur_live_recorded_session_view_visibility.student\" [(ngModel)]=\"liveClassSettings.proctur_live_recorded_session_view_visibility.student\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                     Students \n                    </p>\n                  </div>\n                </div>\n                 <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"proctur_live_recorded_session_view_visibility.teacher\" id=\"proctur_live_recorded_session_view_visibility.teacher\" [(ngModel)]=\"liveClassSettings.proctur_live_recorded_session_view_visibility.teacher\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                    Teachers\n                    </p>\n                  </div>\n                </div>\n              \n              \n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"proctur_live_recorded_session_view_visibility.admin\" id=\"proctur_live_recorded_session_view_visibility.admin\" [(ngModel)]=\"liveClassSettings.proctur_live_recorded_session_view_visibility.admin\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                   Admin\n                    </p>\n                  </div>\n                </div>\n                <div class=\"flex\">\n                    <div>\n                      <label class=\"checkbox\">\n                         <span class=\"checkbox__input\">\n                           <input type=\"checkbox\" name=\"proctur_live_recorded_session_view_visibility.openApp\" id=\"proctur_live_recorded_session_view_visibility.openApp\" [(ngModel)]=\"liveClassSettings.proctur_live_recorded_session_view_visibility.openApp\">\n                           <span class=\"checkbox__control\">\n                            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                               <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                           </span>\n                         </span>\n                       </label>\n                    </div>\n                     <div>\n                      <p class=\"settings_label\">\n                     Open Users\n                      </p>\n                    </div>\n                  </div>\n              </div>\n            </div>\n            <!-- <div class=\"toggle  s_toggle\">\n                <span>\n                  <span class=\"off\">OFF</span>\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" checked>\n                    <span class=\"slider round\"></span>\n                  </label>\n                  <span class=\"on\">ON</span>\n                </span>\n                \n              </div> -->\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Proctur Live View Recoded session\n              </p>\n               <p class=\"black_settings\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n               </p>\n               <div class=\"flex\">\n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"view_proctur_live_recorded_session.normal\" id=\"view_proctur_live_recorded_session.normal\" [(ngModel)]=\"liveClassSettings.view_proctur_live_recorded_session.normal\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                    Normal\n                    </p>\n                  </div>\n                </div>\n                 <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\"  name=\"view_proctur_live_recorded_session.VdoCipher\" id=\"view_proctur_live_recorded_session.VdoCipher\" [(ngModel)]=\"liveClassSettings.view_proctur_live_recorded_session.VdoCipher\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                        Vdocipher\n                    </p>\n                  </div>\n                </div>\n              \n              \n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"view_proctur_live_recorded_session.Vimeo\" id=\"view_proctur_live_recorded_session.Vimeo\" [(ngModel)]=\"liveClassSettings.view_proctur_live_recorded_session.Vimeo\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                        Vimeo\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"toggle s_toggle\">\n                <span>\n                  <span class=\"off\">OFF</span>\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" checked>\n                    <span class=\"slider round\"></span>\n                  </label>\n                  <span class=\"on\">ON</span>\n                </span>\n                \n              </div> -->\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">Z</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n              Zoom Setting\n            </p>\n          </div>\n  \n        </div>\n        <div class=\"zoom-settings\">\n          <div>\n  \n            <p class=\"bold_settings\">\n              Zoom Account Name\n            </p>\n  \n            <input type=\"text\"  name=\"account_name\" id=\"account_name\"\n            [(ngModel)]=\"zoomOBJ.account_name\" class=\"input\" placeholder=\"  Account Name\">\n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Zoom Email ID\n            </p>\n  \n            <input type=\"text\" [(ngModel)]=\"zoomOBJ.email_id\" name=\"email_id\" placeholder=\"  Email ID\" id=\"email_id\" class=\"input\">\n          </div>\n        </div>\n        <div class=\"zoom-settings\">\n  \n          <div>\n  \n            <p class=\"bold_settings\">\n              API Key\n            </p>\n  \n            <input type=\"text\" name=\"jwt_api_key\" id=\"jwt_api_key\"  placeholder=\"  API Key\" [(ngModel)]=\"zoomOBJ.jwt_api_key\" class=\"input\">\n          </div>\n  \n          <div>\n  \n            <p class=\"bold_settings\">\n              API Secret\n            </p>\n  \n            <input type=\"text\" name=\"jwt_api_secret\" id=\"jwt_api_secret\" placeholder=\" API Secret\"  [(ngModel)]=\"zoomOBJ.jwt_api_secret\" class=\"input\">\n          </div>\n        </div>\n        <div class=\"zoom-settings\">\n          <div>\n  \n            <p class=\"bold_settings\">\n              JWT Token\n            </p>\n  \n            <input type=\"text\" name=\"jwt_access_token\" id=\"jwt_access_token\" placeholder=\"JWT Token\" [(ngModel)]=\"zoomOBJ.jwt_access_token\" class=\"input\" >\n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              SDK Key\n            </p>\n  \n            <input type=\"text\" placeholder=\"SDK Key\"  [(ngModel)]=\"zoomOBJ.sdk_api_key\" name=\"sdk_api_key\" id=\"sdk_api_key\" class=\"input\">\n          </div>\n        </div>\n        <div class=\"zoom-settings\">\n          <div>\n  \n            <p class=\"bold_settings\">\n              SDK Secret\n            </p>\n  \n            <input type=\"text\" placeholder=\" SDK Secret\"  [(ngModel)]=\"zoomOBJ.sdk_api_secret\"  name=\"sdk_api_secret\" id=\"sdk_api_secret\" class=\"input\">\n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              User Limit\n            </p>\n  \n            <input type=\"text\"  placeholder=\" User Limit\" [(ngModel)]=\"zoomOBJ.user_limit\" name=\"user_limit\" id=\"user_limit\"  class=\"input\">\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Zoom Recording Enable\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n  \n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"zoomOBJ.enable_recording\"\n                name=\"enable_recording\" id=\"enable_recording\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n  \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Enable zoom Attendance\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n  \n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"zoomOBJ.enable_attendance\"\n                name=\"enable_attendance\" id=\"enable_attendance\" >\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n  \n          </div>\n        </div>\n        <div class=\"zoom-settings mb16\">\n          <div></div>\n          <div>\n            <button class=\"white_button mr16\" (click)=\"ClearZoomJSON()\">Clear</button>\n            <button class=\"blue_button\"(click)=\"saveZoomDetails()\">Add</button>\n          </div>\n          </div>\n          <div class=\"tablehead-s\">\n            <div>\n              Zoom Account Name\n            </div>\n            <div>\n              Zoom Email ID\t\n            </div>\n            <div>\n              API Key\t\n            </div>\n            <div>\n              API Secret\t\n            </div>\n            <div>\n              JWT Token\t\n            </div>\n            <div>\n              SDK Key\t\n            </div>\n            <div>\n              SDK Secret\t\n            </div>\n            <div>\n              User Limit\t\n            </div>\n            <div>\n             Zoom Recording\n            </div>\n            <div>\n           zoom Attendance\t\n            </div>\n            \n            <div>\n              Action\n            </div>\n          </div>\n          <div >\n          <div class=\"tablebody-s displayComp\" id=\"data{{i}}\" *ngFor=\"let data of zoomDetails;let i = index\">\n            <div title=\"{{data.account_name}}\">\n             <span class=\"view-comp\" title=\"{{data.account_name}}\">\n                {{data.account_name}}\n              </span>\n              <span class=\"edit-comp\">\n                <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                  <input type=\"text\" [(ngModel)]=\"data.account_name\" class=\"form-ctrl\" id=\"data.account_name\">\n                </div>\n              </span>\n            </div>\n            <div title=\"{{data.email_id}}\">\n              \n              <span class=\"view-comp\" title=\"{{data.account_name}}\">\n                {{data.email_id}}\n              </span>\n              <span class=\"edit-comp\">\n                <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                  <input type=\"text\" [(ngModel)]=\"data.email_id\" class=\"form-ctrl\" id=\"data.account_name\">\n                </div>\n              </span>\n            </div>\n            <div  title=\"{{data.jwt_api_key}}\">\n          <span class=\"view-comp\" >\n                {{data.jwt_api_key}}\n              </span>\n              <span class=\"edit-comp\">\n                <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                  <input type=\"text\" [(ngModel)]=\"data.jwt_api_key\" class=\"form-ctrl\" id=\"data.account_name\">\n                </div>\n              </span>\n            </div>\n            <div title=\"{{data.jwt_api_secret}}\">\n            \n              <span class=\"view-comp\" title=\"{{data.jwt_api_secret}}\">\n                {{data.jwt_api_key}}\n              </span>\n              <span class=\"edit-comp\">\n                <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                  <input type=\"text\" [(ngModel)]=\"data.jwt_api_secret\" class=\"form-ctrl\" id=\"data.account_name\">\n                </div>\n              </span>\n            </div>\n            <div  title=\"{{data.jwt_access_token}}\">\n             \n              <span class=\"view-comp\" >\n                {{data.jwt_access_token}}\n              </span>\n              <span class=\"edit-comp\">\n                <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                  <input type=\"text\" [(ngModel)]=\"data.jwt_access_token\" class=\"form-ctrl\" id=\"data.account_name\">\n                </div>\n              </span>\n            </div>\n            <div  title=\"{{data.sdk_api_key}}\">\n              \n              <span class=\"view-comp\" >\n                {{data.sdk_api_key}}\n              </span>\n              <span class=\"edit-comp\">\n                <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                  <input type=\"text\" [(ngModel)]=\"data.sdk_api_key\" class=\"form-ctrl\" id=\"data.account_name\">\n                </div>\n              </span>\n            </div>\n            <div title=\"{{data.sdk_api_key}}\">\n            \n              <span class=\"view-comp\" >\n                {{data.sdk_api_secret}}\n              </span>\n              <span class=\"edit-comp\">\n                <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                  <input type=\"text\" [(ngModel)]=\"data.sdk_api_secret\" class=\"form-ctrl\" id=\"data.account_name\">\n                </div>\n              </span>\n            </div>\n            <div title=\"{{data.sdk_api_key}}\">\n              \n              <span class=\"view-comp\" >\n                {{data.user_limit}}\n              </span>\n              <span class=\"edit-comp\">\n                <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                  <input type=\"text\" [(ngModel)]=\"data.user_limit\" class=\"form-ctrl\" id=\"data.account_name\">\n                </div>\n              </span>\n            </div>\n            <div>\n              \n              <span class=\"view-comp\" title=\"{{data.enable_recording}}\">\n                {{data.enable_recording}}\n              </span>\n             \n             <span class=\"edit-comp\"> <label class=\"checkbox margin-a\">\n                <span class=\"checkbox__input\">\n                  <input type=\"checkbox\" id=\"live_class_attendance_absent_notification\"\n                  [(ngModel)]=\"data.enable_recording\"\n                  name=\"data.enable_recording\" id=\"data.enable_recording\">\n                  <span class=\"checkbox__control\">\n                    <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                      <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                    </svg>\n                  </span>\n                </span>\n              </label>\n            </span>\n            </div>\n            <div>\n              <span class=\"view-comp\" title=\"{{data.enable_attendance}}\">\n                {{data.enable_attendance}}\n              </span>\n              \n              <span class=\"edit-comp\"> <label class=\"checkbox margin-a\">\n                <span class=\"checkbox__input\">\n                  <input type=\"checkbox\" id=\"live_class_attendance_absent_notification\"\n                  [(ngModel)]=\"data.enable_recording\"\n                  [(ngModel)]=\"data.enable_attendance\"\n                  name=\"data.enable_attendance\" id=\"data.enable_attendance\">\n                  <span class=\"checkbox__control\">\n                    <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                      <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                    </svg>\n                  </span>\n                </span>\n              </label>\n            </span>\n            </div>\n      \n            <div>\n              <span class=\"edit-comp\">\n                <span (click)=\"updateZoom(data)\"><i _ngcontent-c26=\"\" class=\"fas fa-check\"\n                    style=\"font-family: FontAwesome ;font-size: 19px;color: #0084f6;\" title=\"Update\"></i></span>\n              </span>&nbsp;\n              <span class=\"edit-comp\">\n                <span (click)=\"cancelRow(i)\"><i _ngcontent-c26=\"\" class=\"fas fa fa-times\"\n                    style=\"font-family: FontAwesome ;font-size: 19px;color: red;\" title=\"Cancel\"></i></span>\n              </span>\n\n             <span class=\"view-comp\"><img src=\"../../../../assets/img1/edit.svg\"  (click)=\"editZoom(i)\" class=\"mr16\"></span> \n             <span class=\"view-comp\"> <img src=\"../../../../assets/img1/delete.svg\"  (click)=\"deleteZoom(data.id)\"></span>\n            </div>\n          </div>\n        </div>\n          <!-- <div class=\"tablebody-s\">\n            <div>\n            <input >\n            </div>\n            <div>\n              <input >\n            </div>\n            <div>\n              <input >\n            </div>\n            <div>\n              <input >\n            </div>\n            <div>\n              <input >\n            </div>\n            <div>\n              <input >\n            </div>\n            <div>\n              <input >\n            </div>\n            <div>\n              <input >\n            </div>\n            <div>\n              <label class=\"checkbox margin-a\">\n                <span class=\"checkbox__input\">\n                  <input type=\"checkbox\" id=\"live_class_attendance_absent_notification\"\n                    name=\"live_class_attendance_absent_notification.student\"\n                    [(ngModel)]=\"liveClassSettings.live_class_attendance_absent_notification.student\">\n                  <span class=\"checkbox__control\">\n                    <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                      <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                    </svg>\n                  </span>\n                </span>\n              </label>\n            </div>\n            <div>\n              <label class=\"checkbox margin-a\">\n                <span class=\"checkbox__input\">\n                  <input type=\"checkbox\" id=\"live_class_attendance_absent_notification\"\n                    name=\"live_class_attendance_absent_notification.student\"\n                    [(ngModel)]=\"liveClassSettings.live_class_attendance_absent_notification.student\">\n                  <span class=\"checkbox__control\">\n                    <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                      <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                    </svg>\n                  </span>\n                </span>\n              </label>\n            </div>\n            <div>\n              <img src=\"\" class=\"mr16\">\n              <img src=\"\">\n            </div>\n          </div> -->\n      \n        <div class=\"sep_line\"></div>\n       <div class=\"flex1\" id=\"section2\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse\">L</span><span class=\"blue_line\"></span>\n            </div>\n            <div>\n              <p class=\"blue_settings\">\n                Live Class Attendance Setting\n              </p>\n              <p class=\"bold_settings\">\n                 Absent Notifications\n              </p>\n              \n          \n              <div class=\"flex\">\n                \n                 <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\"  id=\"live_class_attendance_absent_notification\"  name=\"live_class_attendance_absent_notification.student\"  [(ngModel)]=\"liveClassSettings.live_class_attendance_absent_notification.student\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                  Students\n                    </p>\n                  </div>\n                </div>\n              \n              \n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\"  id=\"live_class_attendance_absent_notification.parent\"  name=\"live_class_attendance_absent_notification.parent\"  [(ngModel)]=\"liveClassSettings.live_class_attendance_absent_notification.parent\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                        Parents\n                    </p>\n                  </div>\n                </div> \n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" id=\"live_class_attendance_absent_notification.gaurdian\"  name=\"live_class_attendance_absent_notification.gaurdian\"  [(ngModel)]=\"liveClassSettings.live_class_attendance_absent_notification.Guardian\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                        Guardian\n                    </p>\n                  </div>\n                </div> \n              </div>\n            </div>\n         \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Partially Present Notification\n              </p>\n              \n               <div class=\"flex\">\n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" id=\"live_class_attendance_partial_present_notification.student\" name=\"live_class_attendance_partial_present_notification.student\"  [(ngModel)]=\"liveClassSettings.live_class_attendance_partial_present_notification.student\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                     Students \n                    </p>\n                  </div>\n                </div>\n                 <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" id=\"live_class_attendance_partial_present_notification.parent\" name=\"live_class_attendance_partial_present_notification.parent\"  [(ngModel)]=\"liveClassSettings.live_class_attendance_partial_present_notification.parent\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                  Parents\n                    </p>\n                  </div>\n                </div>\n              \n              \n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" id=\"live_class_attendance_partial_present_notification.gaurdian\" name=\"live_class_attendance_partial_present_notification.gaurdian\"  [(ngModel)]=\"liveClassSettings.live_class_attendance_partial_present_notification.gaurdian\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                        Guardian\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n         \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Attendance Stats Notification\n              </p>\n              \n               <div class=\"flex\">\n                <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"live_class_attendance_stat_notification.teacher\" id=\"live_class_attendance_stat_notification.teacher\" [(ngModel)]=\"liveClassSettings.live_class_attendance_stat_notification.teacher\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                     Students \n                    </p>\n                  </div>\n                </div>\n                 <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"live_class_attendance_stat_notification.admin\" id=\"live_class_attendance_stat_notification.admin\" [(ngModel)]=\"liveClassSettings.live_class_attendance_stat_notification.admin\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                  Parents\n                    </p>\n                  </div>\n                </div>\n              \n              \n                <!-- <div class=\"flex\">\n                  <div>\n                    <label class=\"checkbox\">\n                       <span class=\"checkbox__input\">\n                         <input type=\"checkbox\" name=\"checked\" checked=\"\">\n                         <span class=\"checkbox__control\">\n                          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                             <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                         </span>\n                       </span>\n                     </label>\n                  </div>\n                   <div>\n                    <p class=\"settings_label\">\n                        Guardian\n                    </p>\n                  </div>\n                </div> -->\n              </div>\n            </div>\n         \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Attendance Threshold (%age)\n              </p>\n              <p class=\"black_settings\">\n                Students will be marked \n                present for the live\n                class in case they attend \n                class for the duration\n                more then the defined\n              threshold percentage.\n               </p>\n            <input class=\"input\" max='90' min='0' placeholder=\"Attendance Threshold\"\n            [(ngModel)]=\"liveClassSettings.live_class_attendance_threshold\" \n            name=\"live_class_attendance_threshold\" id=\"live_class_attendance_threshold\">\n            </div>\n         \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Attendance Notification\n              </p>\n              \n               <div class=\"flex\">\n                <select id=\"live_class_attendance_notification\" class=\"input\"\n                name=\"live_class_attendance_notification\"\n                [(ngModel)]=\"liveClassSettings.live_class_attendance_notification\">\n                <option value=\"-1\">---select---</option>\n                <option value=\"NONE\">NONE</option>\n                <option value=\"SMS\">SMS</option>\n                <option value=\"EMAIL\">EMAIL</option>\n                <option value=\"SMS_AND_EMAIL\">SMS & EMAIL</option>\n              </select>\n              \n              \n             \n              </div>\n            </div>\n         \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section3\" >\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse\">V</span><span class=\"blue_line\"></span>\n            </div>\n            <div>\n              <p class=\"blue_settings\">\n                VDOCipher Watch Multiplier Setting\n              </p>\n              <p class=\"bold_settings\">\n                Live class-VDOCipher Live Class Multipler\n              </p>\n              <p class=\"blue_sm_settings\">\n                Study Material\n              </p>\n              <p class=\"bold_settings\">\n                VDOCipher Multipler\n              </p>\n              <input type=\"text\" placeholder=\"VDOCipher Multipler\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"  [(ngModel)]=\"liveClassSettings.vdocipher_watch_multiplier\"  name=\"vdocipher_watch_multiplier\" id=\"vdocipher_watch_multiplier\" class=\"input\">\n              <div class=\"row webkitBox\"\n             >\n             <div class=\"flex\" *ngIf=\"vdocipher_watch_multiplier!=liveClassSettings.vdocipher_watch_multiplier\">\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                     <span class=\"checkbox__input\">\n                       <input type=\"radio\" [value]=\"0\" \n                       [(ngModel)]=\"liveClassSettings.vdocipher_update_video_watch_time_mode\"\n                       name=\"vdocipher_update_video_watch_time_mode\"\n                       id=\"vdocipher_update_video_watch_time_mode_new\">\n                       <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                           <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                       </span>\n                     </span>\n                   </label>\n                </div>\n                 <div>\n                  <p class=\"settings_label\">\n                    Update for New Videos\n                  </p>\n                </div>\n              </div>\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                     <span class=\"checkbox__input\">\n                       <input type=\"radio\" [value]=\"1\"\n                       [(ngModel)]=\"liveClassSettings.vdocipher_update_video_watch_time_mode\"\n                  name=\"vdocipher_update_video_watch_time_mode\"\n                  id=\"vdocipher_update_video_watch_time_mode_all\">\n                       <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                           <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                       </span>\n                     </span>\n                   </label>\n                </div>\n                 <div>\n                  <p class=\"settings_label\">\n                    Update all Videos\n                  </p>\n                </div>\n              </div>\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                     <span class=\"checkbox__input\">\n                       <input type=\"radio\" [value]=\"2\"\n                       [(ngModel)]=\"liveClassSettings.vdocipher_update_video_watch_time_mode\"\n                  name=\"vdocipher_update_video_watch_time_mode\"\n                  id=\"vdocipher_update_video_watch_time_mode_all_ex\">\n                       <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                           <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                       </span>\n                     </span>\n                   </label>\n                </div>\n                 <div>\n                  <p class=\"settings_label\">\n                    Update all Videos except custom multiplier\n                  </p>\n                </div>\n              </div>\n              \n            </div>\n             \n             \n            </div>\n            \n            </div>\n         \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            \n          </div>\n          <div>\n           \n           <p class=\"blue_sm_settings\">\n              Live Class\n            </p>\n            <p class=\"bold_settings\">\n              VDOCipher Live Class Multipler\n            </p>\n             \n           <input type=\"text\" class=\"input\" id=\"vdocipher_live_class_watch_multiplier\" \n           [(ngModel)]=\"liveClassSettings.vdocipher_live_class_watch_multiplier\" placeholder=\"Live Class Multipler\" >\n           <div class=\"flex\"  *ngIf=\"vdocipher_live_class_watch_multiplier!=liveClassSettings.vdocipher_live_class_watch_multiplier\">\n            <div class=\"flex\">\n              <div>\n                <label class=\"checkbox\">\n                   <span class=\"checkbox__input\">\n                     <input type=\"radio\" [value]=\"0\" \n                     [(ngModel)]=\"liveClassSettings.vdocipher_live_class_update_video_watch_time_mode\"\n                     name=\"vdocipher_live_class_update_video_watch_time_mode\"\n                     id=\"vdocipher_live_class_update_video_watch_time_mode_new\">\n                     <span class=\"checkbox__control\">\n                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                         <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                     </span>\n                   </span>\n                 </label>\n              </div>\n               <div>\n                <p class=\"settings_label\">\n                  Update for New Videos\n                </p>\n              </div>\n            </div>\n            <div class=\"flex\">\n              <div>\n                <label class=\"checkbox\">\n                   <span class=\"checkbox__input\">\n                     <input type=\"radio\" [value]=\"1\"\n                     [(ngModel)]=\"liveClassSettings.vdocipher_live_class_update_video_watch_time_mode\"\n                     name=\"vdocipher_live_class_update_video_watch_time_mode\"\n                     id=\"vdocipher_live_class_update_video_watch_time_mode_all\">\n                     <span class=\"checkbox__control\">\n                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                         <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                     </span>\n                   </span>\n                 </label>\n              </div>\n               <div>\n                <p class=\"settings_label\">\n                  Update all Videos\n                </p>\n              </div>\n            </div>\n            <div class=\"flex\">\n              <div>\n                <label class=\"checkbox\">\n                   <span class=\"checkbox__input\">\n                     <input type=\"radio\" [value]=\"2\"\n                     [(ngModel)]=\"liveClassSettings.vdocipher_live_class_update_video_watch_time_mode\" \n                      name=\"vdocipher_live_class_update_video_watch_time_mode\" id=\"vdocipher_live_class_update_video_watch_time_mode_ex\">\n                     <span class=\"checkbox__control\">\n                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                         <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                     </span>\n                   </span>\n                 </label>\n              </div>\n               <div>\n                <p class=\"settings_label\">\n                  Update all Videos except custom multiplier\n                </p>\n              </div>\n            </div>\n            \n          </div>\n          </div>\n         \n      </div>\n\n\n        <!-- end -->\n      </div>\n    </div>\n    <div class=\"w98\">\n       <div class=\"bottom\">\n          <div class=\"display\">\n            <div>\n              \n            </div>\n            <div>\n              <button class=\"white_button mr10\">Cancel</button>\n              <button class=\"blue_button mr10\" (click)=\"saveLiveClassSettings()\">Save</button>\n            </div>\n          </div>\n        </div>\n    </div>\n </div>  \n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/live-classes/live-classes.component.html":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/live-classes/live-classes.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLiveClassesModuleLiveClassesLiveClassesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"padding-right: 2%;margin-top: 4px;\">\n  <aside class=\"middle-full\">\n    <section class=\"middle-main clearFix activity-wrapper\">\n      <div style=\"box-shadow: 0 8px 6px -6px rgb(0 0 0 / 10%)\">\n      <section class=\"middle-top clearFix bulk-header\">\n        <div>\n          <h1 class=\"pull-left\">\n            <span>Live Class</span>\n          </h1>\n        </div>\n        <div style=\"float: right;margin-right: 30px;margin-top: 7px;\">\n          <span data-toggle=\"modal\" data-target=\"#helpFAQ\"> <i class=\"fa fa-question-circle\"\n              style=\"cursor: pointer; font-size: 20px;\" title=\"FAQ’S & Help Descriptions\" aria-hidden=\"true\"></i></span>\n        </div>\n      </section>\n      <section>\n        <div class=\"live-class-list\">\n          <div class=\"live-class-container\" style=\"width:35%;\">\n            <div class=\"field-radio-wrapper\" style=\"width: auto !important;margin-right: 5px;\"\n              [ngClass]=\"!liveClassFor ? 'activeTab' : ''\" (click)=\"toggleAction(false)\">\n              <!-- <input type=\"radio\" [value]=\"false\" class=\"form-radio\" [(ngModel)]=\"liveClassFor\"\n                (ngModelChange)=\"getClassesList()\" name=\"liveClasses\" id=\"liveClasses1\"> -->\n              <span>Upcoming</span>\n            </div>\n            <div class=\"field-radio-wrapper\" style=\"width: auto !important;margin-right: 5px;\"\n              [ngClass]=\"liveClassFor ? 'activeTab' : ''\" (click)=\"toggleAction(true)\">\n              <!-- <input type=\"radio\" [value]=\"true\" class=\"form-radio\" [(ngModel)]=\"liveClassFor\"\n                (ngModelChange)=\"getClassesList()\" name=\"liveClasses\" id=\"liveClasses2\"> -->\n              <span>Previous</span>\n            </div>\n          </div>\n\n          <div class=\"search-add-class-container\">\n            <div class=\"search-filter-wrapper field-wrapper\" style=\"padding-top: 0;width: 30%;\">\n              <input type=\"text\" class=\"form-ctrl searchTextClass\" placeholder=\"Search by Topic, Faculty, Session ID\" [(ngModel)]=\"searchText\"\n                 id=\"searchText\">\n            </div>\n            <div class=\"add-class-container\" style=\"margin-left: 5px;\">\n              <button type=\"button\" name=\"button\" (click)=\"getClassesList()\" class=\"add-class\">Go</button>\n            </div>\n            <div class=\"search-filter-wrapper field-wrapper\" [ngClass]=\"{'datePickerBox' : (dateValue == '' )}\"\n              style=\"padding-top: 0;\" (click)=\"showCustomFilter = !showCustomFilter\">\n              <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n              <input type=\"text\" class=\"form-ctrl filterDate\" placeholder=\"Filter Date\" readonly=\"true\" [(ngModel)]=\"dateValue\"\n                id=\"date\">\n            </div>\n            <div *ngIf=\"showCustomFilter\" class=\"customFilter\">\n              <div style=\"margin-bottom: 20px;\">\n                <span class=\"sortBy\">SORT BY DATE</span>\n              </div>\n              <div class=\"field-checkbox-wrapper\" style=\"width: 50%;float: left;\">\n                <input type=\"checkbox\" id=\"this_week\" name=\"this_week\" value=\"this_week\"\n                  [(ngModel)]=\"sortDate.this_week\" (ngModelChange)=\"dateRangeChanges('this_week')\"\n                  class=\"form-checkbox\">\n                <label for=\"this_week\"> This Week</label>\n              </div>\n              <div class=\"field-checkbox-wrapper\" style=\"width: 50%;float: left;\">\n                <input type=\"checkbox\" id=\"last_week\" name=\"last_week\" value=\"last_week\"\n                  [(ngModel)]=\"sortDate.last_week\" (ngModelChange)=\"dateRangeChanges('last_week')\"\n                  class=\"form-checkbox\">\n                <label for=\"last_week\"> Next/Last Week</label>\n              </div>\n              <div class=\"field-checkbox-wrapper\" style=\"width: 50%;float: left;\">\n                <input type=\"checkbox\" id=\"this_month\" name=\"this_month\" value=\"this_month\"\n                  [(ngModel)]=\"sortDate.this_month\" (ngModelChange)=\"dateRangeChanges('this_month')\"\n                  class=\"form-checkbox\">\n                <label for=\"this_month\"> This Month</label>\n              </div>\n              <div class=\"field-checkbox-wrapper\" style=\"width: 50%;float: left;\">\n                <input type=\"checkbox\" id=\"custom_date_range\" name=\"custom_date_range\" value=\"custom_date_range\"\n                  [(ngModel)]=\"sortDate.custom_date_range\" (ngModelChange)=\"dateRangeChanges('custom_date_range')\"\n                  class=\"form-checkbox\">\n                <label for=\"custom_date_range\"> Custom</label>\n                <input style=\"margin-left:10%;visibility:hidden;\" type=\"text\" value=\"\" id=\"customeDate\"\n                  class=\"widgetDatepicker bsDatepicker\" name=\"schedWidDate\" [(ngModel)]=\"filterDateRange\"\n                  (ngModelChange)=\"updateFilterDateRange($event)\" readonly=\"true\" bsDaterangepicker />\n              </div>\n            </div>\n            <div class=\"black-bg\" id=\"black-bg\" *ngIf=\"showCustomFilter\" (click)=\"showCustomFilter=false\"></div>\n            <!-- <div class=\"filter-wrapper\">\n              <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n              <select class=\"filter\" name=\"\" *ngIf=\"liveClassFor\" [(ngModel)]=\"sortDate\" (ngModelChange)=\"dateRangeChanges()\">\n                <option value=\"-1\" selected=\"selected\" hidden disabled>Filter By Date</option>\n                <option value=\"last_week\">Last 7 Days</option>\n                <option value=\"this_month\">This Month</option>\n                <option value=\"last_month\">Last Month</option>\n                <option value=\"last_three_month\">Last 3 months</option>\n                <option value=\"custom_date_range\">Custom Date range</option>\n                <option value=\"all\">All</option>\n              </select>\n            </div> -->\n            <div class=\"add-class-container\" *ngIf=\"set_up_done\">\n              <div class=\"questionInfo inline-relative\">\n                <span class=\" i-class\">\n                  <button type=\"button\" name=\"button\" class=\"add-class\" routerLink='/view/live-classes/add'\n                    [disabled]=\"proctur_live_expiry_date_check\"\n                    [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">\n                    <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"color: white;\"></i>&nbsp;{{(live_class_for=='2') ? 'Zoom ' : 'Live'}} Class </button>\n                </span>\n                <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                  Your Proctur Live\n                  <br> subscription is over.\n                  <br> Please pay quickly\n                  <br> to continue using it.\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n\n      <section class=\"live-class\" *ngIf=\"totalRow !=0\">\n        <div class=\"live-class-list-container\">\n          <div style=\"width: 100%;float: left;\" *ngFor=\"let c of getClasses; trackBy:identify\">\n            <br>\n            <div *ngIf=\"c[0]\">\n              <span class=\"date_tag\">{{c[0].startDateTime | date : 'dd MMM yyyy'}}</span>\n              <div class=\"borderbottom\"></div>\n            </div>\n            <br>\n            <div class=\"live-class-item\" style=\"padding-right: 0;box-shadow: 0px 1px 12px 0px rgb(0 0 0 / 10%);\"\n              *ngFor=\"let class of c\">\n              <div *ngIf=\"!liveClassFor && !timeLeft(today, class.startDateTime)\">\n                <span class=\"tag\">{{getTimeLeft(today, class.startDateTime) }} left</span>\n              </div>\n              <div *ngIf=\"timeLeft(today, class.startDateTime) && !liveClassFor\">\n                <span class=\"tag ongoing\">Ongoing</span>\n              </div>\n              <div class=\"sub-item-1\">\n                <div style=\"width: 100%;\" class=\"session_name_and_id_container\">\n                  <div class=\"session_name\" title=\"{{class.session_name}}\">\n                    <span style=\"color: #109CF1;\">{{ (class.session_name?.length>35) ? (class.session_name | slice:0:35\n                      ) + '...' :\n                      (class.session_name) }}</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"session_id\">\n                <span>Session Id :{{class.session_id}} </span>\n                <span class=\"class-for-name\" *ngIf=\"class.live_meeting_with == 'Zoom'\">\n                  ({{class.live_meeting_with}})</span>\n                  <div class=\"col-lg-3 image-container\" title=\"Copy Zoom URL\" style=\"float: right;\" *ngIf=\"(!liveClassFor && !timeLeft(today, class.startDateTime)) && class.live_meeting_with == 'Zoom'\">\n                    <img (click)=\"copyToClipboard(class)\" style=\"cursor: pointer;\" src=\"../../../../assets/images/Group240.svg\" class=\"img_doc\">\n                  </div>\n              </div>\n              <div class=\"borderbottom1 w96\"></div>\n              <div class=\"sub-item-2\">\n                <div class=\"item_type_1\">\n                  <!-- <span style=\"color: #9898a3;\">Date :  -->\n                  <span style=\"width: 15%;\"><img src=\"../../../../assets/images/date_time_new.svg\"></span>\n                  <span class=\"dateColor\" style=\"font-weight: 600;\">{{class.startDateTime | date : 'shortTime'}} - {{class.end_datetime |\n                    date: 'shortTime'}}</span>\n                </div>\n                <div class=\"item_type_1\">\n                  <span style=\"width: 15%;\"><img src=\"../../../../assets/images/time_2.png\"></span>\n                  <span class=\"dateColor\" style=\"font-weight: 600;\">{{diffDate(class.startDateTime,\n                    class.endDateTime)}}</span>\n                </div>\n                <div class=\"item_type_1\" *ngIf=\"liveClassFor\">\n                  <span style=\"width: 15%;\"><img src=\"../../../../assets/images/remainder.png\"></span>\n                  <span>\n                    <!-- <span style=\"color: #9898a3;\">Time : </span> -->\n                    <span class=\"dateColor\" style=\"font-weight: 600;\">{{class.startDateTime | date: 'shortTime'}} -\n                      {{class.endDateTime | date: 'shortTime'}}</span>\n                  </span>\n                  <!-- <span style=\"color: #585574;\" *ngIf=\"class.live_meeting_with != 'Zoom'\">\n                  <span style=\"color: #9898a3;\">Moderator : </span>\n                  <span *ngIf=\"class.moderatorName != '' && class.moderatorName != null\" title=\"{{class.moderatorName}}\"\n                    style=\"font-weight: 600;\">\n                    {{ (class.moderatorName?.length>15) ? (class.moderatorName | slice:0:15 ) + '...' :\n                    (class.moderatorName) }}\n                  </span>\n                  <span *ngIf=\"class.moderatorName == '' || class.moderatorName == null\">-</span>\n                </span> -->\n                </div>\n                <div class=\"item_type_1\">\n                  <span style=\"width: 15%;\"><img src=\"../../../../assets/images/faculty_img.png\"></span>\n                  <span class=\"dateColor\" style=\"font-weight: 600;\" title=\"{{class.teachersName}}\">\n                    {{ (class.teachersName?.length>20) ? (class.teachersName | slice:0:20 ) + '...' :\n                    (class.teachersName)\n                    }}\n                  </span>\n                </div>\n                <!-- <div class=\"item_type_1\" *ngIf=\"!liveClassFor\">\n                <span style=\"width: 15%;\"><img src=\"../../../../assets/images/remainder.png\"></span>\n                <span style=\"font-weight: 600;\">{{getTimeLeft(today, class.startDateTime) }} <span\n                    style=\"color: #109CF1;\">(Time Left)</span> </span>\n              </div> -->\n                <!-- <div class=\"item_type_3\" *ngIf=\"liveClassFor\">\n                <span style=\"color: #9898a3;\">Attendees : </span>\n                <span style=\"color: #585574;font-weight: 600;\">{{class.attendeesCount}} of\n                  {{class.totalAttendeesLimit}}</span>\n              </div> &nbsp;&nbsp; -->\n                <!-- <div class=\"item_type_1\" *ngIf=\"!isProfessional\" style=\"width: 28%;\">\n                <span style=\"color: #585574;\">\n                  <span style=\"color: #9898a3;\">Master Course : </span>\n                  <span title=\"{{class.course_list[0].master_course_name}}\"\n                    *ngIf=\"class.course_list!=null && class.course_list?.length!=0\" style=\"font-weight: 600;\">\n                    {{ (class.course_list[0]?.master_course_name?.length>30) ? (class.course_list[0].master_course_name\n                    | slice:0:30 ) + '...' : (class.course_list[0].master_course_name) }}\n                  </span>\n                </span>\n                <span style=\"color: #585574;\">\n                  <span style=\"color: #9898a3;\">Course : </span>\n                  <span title=\"{{class.course}}\" style=\"font-weight: 600;color: #0084f6\">\n                    {{ (class.course?.length>30) ? (class.course | slice:0:30 ) + '...' : (class.course) }}\n                  </span>\n                </span>\n              </div> -->\n\n                <!-- <div class=\"item_type_1\" *ngIf=\"isProfessional\" style=\"width: 28%;\">\n                <span style=\"color: #9898a3;\">Batch : </span>\n                <span title=\"{{class.course}}\">\n                  {{ (class.course?.length>30) ? (class.course | slice:0:30 ) + '...' : (class.course) }}\n                </span>\n              </div> -->\n                <!-- <div class=\"item_type_2\" *ngIf=\"liveClassFor\">\n\n                <div class=\"dropdown dropleft\">\n                  <button style=\"background: #0084f6;color: white;\" class=\"btn btn-light btn-xs dropdown-toggle\"\n                    type=\"button\" (click)=\"toggleActionMenu($event)\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\">\n                    <i class=\"fa fa-caret-left\" aria-hidden=\"true\"></i> &nbsp; Action\n                  </button>\n                  <div class=\"dropdown-menu horizontal-menu\" aria-labelledby=\"actionMenu\">\n                    <span class=\"dropdown-item\"\n                      *ngIf=\"(class.live_meeting_with != 'Zoom' && class.showViewAttendance) || (class.live_meeting_with && class.attendance_processed)\"\n                      (click)=\"viewAttandance(class)\">View Attendance</span>\n                    <span class=\"dropdown-item\"\n                      *ngIf=\"is_proctur_live_recording_allow == '1' && class.live_meeting_with != 'Zoom'\"\n                      data-toggle=\"modal\" data-target=\"#uploadRec\" data-backdrop=\"static\"\n                      (click)=\"upload(class.session_id, class.live_meeting_with)\">Upload Recording&nbsp;\n                    </span>\n                    <span class=\"dropdown-item\">\n                      <div class=\"questionInfo inline-relative\">\n                        <button type=\"button\" style=\"background: none;\" name=\"button\"\n                          [disabled]=\"proctur_live_expiry_date_check\"\n                          (click)=\"repeatSession(class.session_id, class.live_meeting_with)\"\n                          [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">\n                          Repeat Class\n                        </button>\n                        <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                          Your Proctur Live<br>\n                          subscription is over.<br>\n                          Please pay quickly<br>\n                          to continue using it.\n                        </div>\n                      </div>\n                    </span>\n                    <span class=\"dropdown-item\" (click)=\"viewdownload_links(class)\"\n                      *ngIf=\"proctur_live_view_or_download_visibility!=0 && class.download_links?.length > 0\">\n                      <button style=\"background: none;\" title=\"download/view\"\n                        [ngClass]=\"{'disabledButton': class.download_links?.length==0}\">\n                        View Recording\n                      </button>\n                    </span>\n                  </div>\n                </div>\n              </div> -->\n                <div class=\"item_type_2\" *ngIf=\"!liveClassFor\">\n                  <!-- <div class=\"questionInfo inline-relative\">\n                  <span class=\" i-class\">\n                    <button type=\"button\" name=\"button\"\n                      *ngIf=\"forUser && forTeacher(class.teachersUserIds)|| forModerator && forModeratorId(class.moderatorIds) \"\n                      [ngClass]=\"checkForTime(class.startDateTime) ? 'start_session' : 'notAllowed'\"\n                      (click)=\"allowStartLiveCLass(class.session_link, class.session_id, class.live_meeting_with)\"\n                      [disabled]=\"proctur_live_expiry_date_check\"\n                      [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">\n                      <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n                      &nbsp;\n                      Start Class\n                    </button>\n                  </span>\n                  <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                    Your Proctur Live<br>\n                    subscription is over.<br>\n                    Please pay quickly<br>\n                    to continue using it.\n                  </div>\n                </div> -->\n\n                  <!-- <div class=\"questionInfo inline-relative\">\n                        <span class=\" i-class\">\n                            <button type=\"button\" name=\"button\" class=\"repeat_session\" *ngIf=\"liveClassFor\" [disabled]=\"proctur_live_expiry_date_check\" (click)=\"repeatSession(class.session_id, class.live_meeting_with)\"  [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">\n                                <i class=\"fa fa-repeat\" aria-hidden=\"true\"></i>\n                                &nbsp;\n                                Repeat Class\n                            </button>\n                        </span>\n                        <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                            Your Proctur Live<br>\n                            subscription is over.<br>\n                            Please pay quickly<br>\n                            to continue using it.\n                        </div>\n                    </div> -->\n\n                </div>\n                <!-- <div class=\"item_type_2\" *ngIf=\"liveClassFor && proctur_live_view_or_download_visibility!=0 && class.download_links?.length > 0\">\n                &nbsp;&nbsp;\n                <button class=\"viewAction\" title=\"download/view\" (click)=\"viewdownload_links(class)\"\n                  [ngClass]=\"{'disabledButton': class.download_links?.length==0}\">\n                  View Recording\n                </button>\n              </div> -->\n              </div>\n\n              <div class=\"notification_container\"\n                style=\"padding-top: 5px;border-top: 1px solid #F4EBEB;padding-bottom: 5px;\"\n                *ngIf=\"!liveClassFor && (timeLeft(today, class.startDateTime) && class.live_meeting_with == 'Zoom' && !class.session_processed)\">\n                <span class=\"dropdown-item\">\n                  <button style=\"padding: 5px;background: #0084f6;color: white;border-radius: 4px;\" type=\"button\"\n                    name=\"button\" class=\"start_session\" (click)=\"RefreshSession(class)\">\n                    Refresh Session\n                  </button>\n                </span>\n              </div>\n              <div class=\"item_type_1 icon_flex\" *ngIf=\"(!liveClassFor)\" style=\"border-top: 1px solid #F4EBEB;padding-top: 15px;\">\n                <span title=\"Cancel\"\n                  *ngIf=\"!liveClassFor && !timeLeft(today, class.startDateTime)\"\n                  style=\"margin-right: 10px;cursor: pointer;\" [disabled]=\"proctur_live_expiry_date_check\"\n                  [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">\n                  <div class=\"questionInfo inline-relative\">\n                    <span class=\" i-class\">\n                      <button style=\"background: none;\" type=\"button\" name=\"button\"\n                        [disabled]=\"proctur_live_expiry_date_check\"\n                        (click)=\"cancel(class.session_id, class.live_meeting_with)\"\n                        [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">\n                        <img src=\"../../../../assets/images/Live class/icon8.svg\">\n                      </button>\n                    </span>\n                    <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                      Your Proctur Live\n                      <br> subscription is over.\n                      <br> Please pay quickly\n                      <br> to continue using it.\n                    </div>\n                  </div>\n                </span>\n                <span style=\"margin-right: 10px;cursor: pointer;\" title=\"Edit\"\n                  *ngIf=\"!liveClassFor && !timeLeft(today, class.startDateTime)\">\n                  <div class=\"questionInfo inline-relative\">\n                    <span class=\" i-class\">\n                      <button style=\"background: none;\" type=\"button\" name=\"button\"\n                        [disabled]=\"proctur_live_expiry_date_check\"\n                        (click)=\"editStudent(class.session_id, class.live_meeting_with)\"\n                        [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">\n                        <img src=\"../../../../assets/images/Live class/Edit_class.png\">\n                      </button>\n                    </span>\n                    <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                      Your Proctur Live\n                      <br> subscription is over.\n                      <br> Please pay quickly\n                      <br> to continue using it.\n                    </div>\n                  </div>\n                </span>\n                <span style=\"margin-right: 10px;\"\n                  *ngIf=\"!timeLeft(today, class.startDateTime)\" title=\"Send SMS Notification\">\n                  <div class=\"questionInfo inline-relative\">\n                    <span class=\" i-class\">\n                      <button style=\"background: none;\" type=\"button\" name=\"button\"\n                        [disabled]=\"proctur_live_expiry_date_check\"\n                        (click)=\"showSmsNotificationPopup(class)\"\n                        [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">\n                        <img src=\"../../../../assets/images/Live class/Send_sms.png\">\n                      </button>\n                    </span>\n                    <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                      Your Proctur Live\n                      <br> subscription is over.\n                      <br> Please pay quickly\n                      <br> to continue using it.\n                    </div>\n                  </div>\n                </span>\n                <span *ngIf=\"!timeLeft(today, class.startDateTime)\"\n                  style=\"margin-right: 10px;cursor: pointer;\" title=\"Send Push Notification\">\n                  <div class=\"questionInfo inline-relative\">\n                    <span class=\" i-class\">\n                      <button style=\"background: none;\" type=\"button\" name=\"button\"\n                        [disabled]=\"proctur_live_expiry_date_check\"\n                        (click)=\"showpushNotificationPopup(class)\"\n                        [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">\n                        <img src=\"../../../../assets/images/Live class/Notify.png\">\n                      </button>\n                    </span>\n                    <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                      Your Proctur Live\n                      <br> subscription is over.\n                      <br> Please pay quickly\n                      <br> to continue using it.\n                    </div>\n                  </div>\n                </span>\n                <span *ngIf=\"timeLeft(today, class.startDateTime)\" style=\"margin-right: 10px;cursor: no-drop;\"><img\n                    src=\"../../../../assets/images/Live class/icon3.svg\"></span>\n                <span *ngIf=\"timeLeft(today, class.startDateTime)\" style=\"margin-right: 10px;cursor: no-drop;\"><img\n                    src=\"../../../../assets/images/Live class/icon4.svg\"></span>\n                <span *ngIf=\"timeLeft(today, class.startDateTime)\" style=\"margin-right: 10px;cursor: no-drop;\"><img\n                    src=\"../../../../assets/images/Live class/icon5.svg\"></span>\n                <span *ngIf=\"timeLeft(today, class.startDateTime)\" style=\"margin-right: 10px;cursor: no-drop;\"><img\n                    src=\"../../../../assets/images/Live class/icon6.svg\"></span>\n                <span title=\"View\" style=\"cursor: pointer;\" (click)=\"viewClass(class)\" class=\"mt-4\">\n                  <img src=\"../../../../assets/images/Live class/view_class.png\">\n                </span>\n                <span *ngIf=\"!liveClassFor && forUser && forTeacher(class.teachersUserIds)|| forModerator || forModeratorId(class.moderatorIds) \" class=\"borderright\"></span>\n                <span\n                  *ngIf=\"!liveClassFor && forUser && forTeacher(class.teachersUserIds)|| forModerator || forModeratorId(class.moderatorIds) \"\n                  style=\"cursor: pointer;\">\n                  <div class=\"questionInfo inline-relative\">\n                    <span class=\" i-class\">\n                      <button type=\"button\" name=\"button\"\n                        title=\"{{startClassMsg}}\"\n                        [ngClass]=\"checkForTime(class.startDateTime) ? 'start_session' : 'notAllowed'\"\n                        (click)=\"allowStartLiveCLass(class.session_link, class.session_id, class.live_meeting_with, class.moderatorIds)\"\n                        [disabled]=\"proctur_live_expiry_date_check\"\n                        [ngStyle]=\"{'opacity':(proctur_live_expiry_date_check) ? '0.5' : '1' }\">\n                        Start\n                      </button>\n                    </span>\n                    <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                      Your Proctur Live<br>\n                      subscription is over.<br>\n                      Please pay quickly<br>\n                      to continue using it.\n                    </div>\n                  </div>\n                </span>\n              </div>\n\n              <div class=\"item_type_1\" *ngIf=\"liveClassFor\" style=\"border-top: 1px solid #F4EBEB;padding-top: 15px;\">\n                <span (click)=\"viewAttandance(class)\" title=\"View Attendance\"\n                  *ngIf=\"(class.live_meeting_with != 'Zoom') || (class.live_meeting_with && class.attendance_processed)\"\n                  style=\"margin-right: 15px;cursor: pointer;\"><img\n                    src=\"../../../../assets/images/Live class/View_attendance.png\"></span>\n                <span style=\"margin-right: 15px;cursor: pointer;\" title=\"Upload Recording\"\n                  *ngIf=\"is_proctur_live_recording_allow == '1' && class.live_meeting_with != 'Zoom'\"\n                  data-toggle=\"modal\" data-target=\"#uploadRec\" data-backdrop=\"static\"\n                  (click)=\"upload(class.session_id, class.live_meeting_with)\"><img\n                    src=\"../../../../assets/images/Live class/Upload_recording.png\"></span>\n                <span style=\"margin-right: 15px;\" title=\"Repeat Class\">\n                  <div class=\"questionInfo inline-relative\">\n                    <button type=\"button\" style=\"background: none;\" name=\"button\"\n                      [disabled]=\"proctur_live_expiry_date_check\"\n                      (click)=\"repeatSession(class.session_id, class.live_meeting_with)\"\n                      [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">\n                      <img src=\"../../../../assets/images/Live class/repeat_class.png\">\n                    </button>\n                    <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                      Your Proctur Live<br>\n                      subscription is over.<br>\n                      Please pay quickly<br>\n                      to continue using it.\n                    </div>\n                  </div>\n                </span>\n                <span style=\"margin-right: 15px;cursor: pointer;\" title=\"View\" (click)=\"viewClass(class)\">\n                  <img src=\"../../../../assets/images/Live class/view_class.png\">\n                </span>\n                <span (click)=\"viewdownload_links(class)\"\n                  style=\"cursor: pointer;float: right;border-left: 1px solid #ECEAEA;padding-left: 10px;\"\n                  title=\"View Recording\"\n                  *ngIf=\"proctur_live_view_or_download_visibility!=0 && class.download_links?.length > 0\">\n                  <img src=\"../../../../assets/images/Live class/view_recording.png\">\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      <section *ngIf=\"totalRow == 0 && (!auth.isRippleLoad.getValue())\">\n        <div class=\"live-class-list-container\">\n          <div class=\"w96\" *ngIf=\"set_up_done\">\n            <div>\n              <br><br>\n              <span class=\"position\">\n                <span class=\"schedule-text\">No {{!liveClassFor ? 'Upcoming' : 'Previous'}}<br> Schedule found</span>\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\" i-class\">\n                    <button class=\"add_live_class\" routerLink='/view/live-classes/add'\n                      [disabled]=\"proctur_live_expiry_date_check\"\n                      [ngStyle]=\"{'opacity':proctur_live_expiry_date_check ? '0.5' : '1' }\">Add {{(live_class_for=='2') ? 'Zoom ' : 'Live'}} Class</button>\n                  </span>\n                  <div class=\"tooltip-box-field\" *ngIf=\"proctur_live_expiry_date_check\">\n                    Your Proctur Live\n                    <br> subscription is over.\n                    <br> Please pay quickly\n                    <br> to continue using it.\n                  </div>\n                </div>\n              </span>\n            </div>\n            <div class=\"bg_live_class\">\n            </div>\n          </div>\n          <div class=\"w96\" style=\"text-align: center;margin-top: 5%;\" *ngIf=\"!set_up_done\">\n              <span class=\"setupText\" [innerHTML]=\"message_for_setup_not_done\"></span>\n          </div>\n        </div>\n      </section>\n\n      <!-- <section *ngIf=\"!liveClassFor\">\n        <div class=\"note-container\">\n          <span><span style=\"font-weight: 600;\">NOTE : </span> Sessions can only be started before 30 minutes of start time.</span>\n        </div>\n      </section> -->\n\n      <!-- Paginator Here -->\n      <div class=\"row filter-res pagination pagination-correct\" style=\"width: 100%;margin-top: 0;\">\n        <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n          <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n            [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayClassSize\" [count]=\"totalRow\">\n          </pagination>\n        </div>\n      </div>\n\n    </section>\n  </aside>\n</div>\n\n<div id=\"helpFAQ\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"    top: 5%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color: #c5dcf87a;border-radius: 6px;\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h2 class=\"modal-title\">FAQ’S & Help Descriptions.</h2>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"new-modules-list\">\n          <h2 class=\"modal-title procturLive\">Proctur LIVE Classes\n          </h2><br>\n          <ol style=\"list-style-type: none;\">\n            <div style=\"margin-bottom: 10px;\">Q. What is a host?</div>\n            <li style=\"font-weight: 100;\">A host is the person running a webinar, and invites participants to\n              join.\n            </li>\n          </ol>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <ol style=\"list-style-type: none;\">\n            <div style=\"margin-bottom: 10px;\">Q. What is a participant?</div>\n            <li style=\"font-weight: 100;\">A participant is a person(s) attending the live class. Participants\n              can simply follow the link in their invitation from their desktop, phone, or other mobile device.\n              One (1) host plan and a host can hold unlimited webinars. But If you want to run more than one\n              webinar at a time, you will need to purchase additional licenses.\n            </li>\n          </ol>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <ol style=\"list-style-type: none;\">\n            <div style=\"margin-bottom: 10px;\">Q. How to add Live Class?</div>\n            <li style=\"font-weight: 100;\">Go to Home -> Live Classes -><span style=\"font-weight: 600;\">“+Add\n                Live Class”</span> </li>\n            <li style=\"font-weight: 100;\">\n              Add Mandatory Fields:<span style=\"font-weight: 600;\">“Topic Name”, “Date”, Time (“From” & “To”),\n                Teacher Name.</span>\n            </li>\n            <li style=\"font-weight: 100;\">\n              Add Mandatory Fields:<span style=\"font-weight: 600;\">“Master Course”, “Course”, “Student”.</span>\n            </li>\n          </ol><br>\n          <ol>\n            <div style=\"margin-bottom: 10px;\">Advance Setting Details:</div>\n            <li style=\"font-weight: 100;\"><span style=\"font-weight: 600;\">Send Notification:</span> All the\n              members in meeting will receive SMS\n              notification for the session.</li>\n            <li style=\"font-weight: 100;\">\n              <span style=\"font-weight: 600;\">Private Access:</span> Only the users invited using e-mail ID\n              would be able to join. Direct link\n              sharing\n              of session won't work.\n            </li>\n            <li style=\"font-weight: 100;\">\n              <span style=\"font-weight: 600;\">Access Enable Lobby:</span> All the students will wait in\n              waiting room after joining the session.\n              Teachers will have access to allow students in the meeting.\n            </li>\n            <li style=\"font-weight: 100;\">\n              <span style=\"font-weight: 600;\">Hide All Notifications in recordings:</span>When enabled this will\n              help to hide all notifications during live class.\n            </li>\n            <li style=\"font-weight: 100;\">\n              <span style=\"font-weight: 600;\">Hide User Count:</span>When enabled this will help to hide count\n              of users displayed on users screen.\n            </li>\n          </ol><br>\n          <ol style=\"list-style-type: none;\">\n            <li style=\"font-weight: 100;\">Click on <span style=\"font-weight: 600;\">“Submit” </span>Button to\n              Schedule Live Class Successfully.</li>\n          </ol>\n          <ol style=\"list-style-type: none;\">\n            <li style=\"font-weight: 100;\">\n              Once you have entered a meeting room as a speaker, you will need to click on the icon \"show\n              desktop\" that appears in the toolbar on the left hand side.\n            </li><br>\n            <li style=\"font-weight: 100;\">\n              The <span style=\"font-weight: 600\">“Your Entire Screen”</span> option allows you to share\n              everything that is showing on your desktop\n            </li><br>\n            <li style=\"font-weight: 100;\">\n              The <span style=\"font-weight: 600\">“Application Window”</span> option allows you to select a\n              specific program and only share that\n              selection with your audience.\n            </li><br>\n            <li style=\"font-weight: 100;\">\n              The <span style=\"font-weight: 600\">“Browser Tab”</span> will allow you to select only one tab from\n              the ones you have open in your\n              browser to share with your audience.\n            </li><br>\n            <li style=\"font-weight: 100;\">\n              Once you have clicked on \"Share\" a green dot will appear by the \"Show desktop\" icon. This will\n              allow you to know when your screen is been shared with your audience.\n            </li><br>\n            <li style=\"font-weight: 100;\">\n              Also a message like the one below will appear on the bottom part of your screen.\n            </li><br>\n            <li style=\"font-weight: 100;\">\n              You can leave this open and when you are ready to stop sharing your screen click on \"Stop\n              sharing\", or you can hide it and click the \"Show desktop\" icon when you are done with your screen\n              share. You will get to know that sharing your screen is stopped when the green dot disappears.\n            </li>\n          </ol><br>\n          <ol style=\"list-style-type: none;\">\n            <li style=\"font-weight: 100;\">Student can login to their student account Via: While Labelled\n              Institute App / Proctur Student App and Website.</li>\n            <ol style=\"list-style-type: upper-alpha;\">\n              <li>\n                Access through Mobile App\n                <ul style=\"list-style-type: square;\">\n                  <li style=\"font-weight: 100;\">\n                    Android app link: <a href=\"https://bit.ly/Studde\">https://bit.ly/Studde</a>\n                  </li>\n                  <li style=\"font-weight: 100;\">IOS app link: <a\n                      href=\"https://apple.co/3jwkSfj\">https://apple.co/3jwkSfj</a></li>\n\n                </ul>\n              </li>\n              <li>\n                Access via Website: <a style=\"font-weight: 100;\"\n                  href=\"https://studde.com/\">https://studde.com/</a>\n              </li>\n            </ol>\n          </ol>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <ol>\n            <div style=\"margin-bottom: 10px;\">Q. How to Access the Live Class-Student Portal?</div>\n            <li style=\"font-weight: 100;\">Student will login to account by entering valid Username and Password.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Go to Dashboard > Online Classes\n            </li>\n            <li style=\"font-weight: 100;\">\n              In Upcoming Classes, Student will see the current live class schedule.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Click on <span style=\"font-weight: 600;\">“Join”</span>\n            </li>\n            <li style=\"font-weight: 100;\">\n              On Welcome Screen “Please select your Default Speaker/Headphone Option “amongst the list.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Student have Joined the Live Class Successfully.\n            </li>\n          </ol>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <ol>\n            <div style=\"margin-bottom: 10px;\">Q. How student can access live class from Android device?</div>\n            <li style=\"font-weight: 100;\">\n              Download and Install <span style=\"font-weight: 600;\">“Studde”</span> App on your iPhone.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Log in to your application.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Go to >Live >Upcoming Classes > Click on “Join”\n            </li>\n            <li style=\"font-weight: 100;\">\n              Now you will have redirected to Browser (Safari and Chrome)\n            </li>\n            <li style=\"font-weight: 100;\">\n              Make sure you are using the “Desktop site” option is enabled in the chrome browser setting\n            </li>\n          </ol>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <ol>\n            <div style=\"margin-bottom: 10px;\">Q. How to check live class attendance?</div>\n            <li style=\"font-weight: 100;\">\n              Live class attendance available only for Proctur Live not for Zoom.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Attendance for each class would be available after 8:00 PM if the class ends on or before 7:30 PM.\n            </li>\n            <li style=\"font-weight: 100;\">\n              If classes end after 7:30 PM, the attendance would be available at 8:00 PM on the next day.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Students will be marked present for the live class in case they attend class for the duration more\n              than the defined threshold percentage either marked as partially present. This threshold value can\n              be changed from setting section.\n            </li>\n            <li style=\"font-weight: 100;\">\n              If students haven't joined the class, then will be marked as absent.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Notification setting can be changed from the setting section.\n            </li>\n          </ol>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <ol>\n            <div style=\"margin-bottom: 10px;\">Q. How to change threshold value for live class attendance?</div>\n            <li style=\"font-weight: 100;\">\n              Go to Setting ->Live class notification setting-\n            </li>\n            <li style=\"font-weight: 100;\">\n              Add “Attendance Threshold (%age)”\n            </li>\n            <li style=\"font-weight: 100;\">\n              Add “Attendance Notification” if required.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Click on “Save Changes”\n            </li>\n          </ol>\n        </div>\n        <hr style=\"border-top: 5px solid #ccc;\">\n        <div class=\"new-modules-list\">\n          <h2 class=\"modal-title procturLive\">ZOOM LIVE Classes</h2>\n          <br>\n          <ol style=\"list-style-type: disc;\">\n            <div style=\"margin-bottom: 10px;\">Zoom Basic and Free Plan Includes:</div>\n            <li style=\"font-weight: 100;\">\n              Host up to 100 participants\n            </li>\n            <li style=\"font-weight: 100;\">\n              40-minute maximum group meetings\n            </li>\n            <li style=\"font-weight: 100;\">\n              Unlimited 1:1 Meetings\n            </li>\n          </ol><br>\n          <ol style=\"list-style-type: disc;\">\n            <div style=\"margin-bottom: 10px;\">Zoom Attendance Feature:</div>\n            <li style=\"font-weight: 100;\">\n              Zoom Attendance is available for accounts with Zoom paid plans. The users which are using zoom\n              free plans will not be getting the zoom attendance.\n            </li>\n          </ol><br>\n          <ol style=\"list-style-type: none;\">\n            <li style=\"font-weight: 100;\">\n              Note: <span style=\"font-weight: 600;\">Zoom</span> has now introduced <span\n                style=\"font-weight: 600;\">passwords</span> for <span style=\"font-weight: 600;\">meetings</span>\n              as standard, for basic plans, Admin always need to notify\n              the password to student to join the session. Passwords can be enabled /disabled in Zoom Paid\n              plans only.\n            </li>\n          </ol>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <ol>\n            <div style=\"margin-bottom: 10px;\">Q. How to integrate Zoom with Proctur?</div>\n            <li style=\"font-weight: 100;\">\n              Go to “My Account” >My Account\n            </li>\n            <li style=\"font-weight: 100;\">\n              Go to “Zoom Details” & add below details. (You can add up to 2 hosts.)\n              <ul style=\"list-style-type: disc;\">\n                <li style=\"font-weight: 100;\">\n                  Zoom Account Name\n                </li>\n                <li style=\"font-weight: 100;\">\n                  Zoom Email ID\n                </li>\n                <li style=\"font-weight: 100;\">\n                  API Key\n                </li>\n                <li style=\"font-weight: 100;\">\n                  API Secret\n                </li>\n                <li style=\"font-weight: 100;\">\n                  JWT Token\n                </li>\n                <li style=\"font-weight: 100;\">\n                  SDK Key\n                </li>\n                <li style=\"font-weight: 100;\">\n                  SDK Secret\n                </li>\n                <li style=\"font-weight: 100;\">\n                  User Limit\n                </li>\n              </ul>\n            </li>\n            <li style=\"font-weight: 100;\">\n              After adding all details click on “add” and “Update”\n            </li>\n          </ol>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <ol>\n            <div style=\"margin-bottom: 10px;\">Q. How to student can join zoom class from Website?</div>\n            <li style=\"font-weight: 100;\">\n              Student will login to account by entering valid Username and Password.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Go to Dashboard > Online Classes\n            </li>\n            <li style=\"font-weight: 100;\">\n              In Upcoming Classes, Student will see the current live class schedule.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Click on <span style=\"font-weight: 600;\">“Join”</span>\n            </li>\n            <li style=\"font-weight: 100;\">\n              Student will get redirected to “Zoom launch meeting”.\n            </li>\n          </ol>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <ol>\n            <div style=\"margin-bottom: 10px;\">Q. How student can access Zoom live class from Android device?\n            </div>\n            <li style=\"font-weight: 100;\">\n              Download and Install <span style=\"font-weight: 600;\">“Studde or White labelled app”</span> App on\n              your Android device.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Login to your application.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Go to ->Live ->Upcoming Classes -> Click on <span style=\"font-weight: 600;\">“Join”</span>\n              indicated with ZOOM Label\n            </li>\n            <li style=\"font-weight: 100;\">\n              Now you will have redirected to chrome browser (Always make sure that you are using a Google\n              chrome browser)\n            </li>\n            <li style=\"font-weight: 100;\">\n              Make sure, you are using <span style=\"font-weight: 600;\">“Desktop site”</span> option for better\n              performance.\n            </li>\n          </ol>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <ol>\n            <div style=\"margin-bottom: 10px;\">Q. How student can access Zoom live class from Android device?\n            </div>\n            <li style=\"font-weight: 100;\">\n              Download and Install <span style=\"font-weight: 600;\">“Studde or White labelled app”</span> App on\n              your device.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Download zoom application for better performance.\n            </li>\n            <li style=\"font-weight: 100;\">\n              Go to ->Live ->Upcoming Classes -> Click on <span style=\"font-weight: 600;\">“Join”</span>\n              indicated with ZOOM Label\n            </li>\n            <li style=\"font-weight: 100;\">\n              Now you will have redirected zoom application and class will get start.\n            </li>\n          </ol>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n<!-- Video Limit Exceed pop up -->\n<div id=\"videoLimit\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"top: 10%;\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Low Data Storage Warning!</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Your data storage is below 20%. Please purchase additional storage soon to continue to record and store your\n          lectures!\n          To purchase storage please contact our team at support@proctur.com</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Upload record pop up -->\n<div id=\"uploadRec\" style=\"z-index: 1112;\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\" style=\"margin-top: 17%;\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"closeUploadModal()\">&times;</button>\n        <h4 class=\"modal-title\">Upload Recording</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\" style=\"margin: 0;\"\n          *ngIf=\"proctur_live_integration_with_vdoCipher == 1 && proctur_live_integration_with_vimeo == 1\">\n          <div class=\"c-lg-4 field-radio-wrapper\" style=\"width: 25%;\">\n            <input type=\"radio\" [value]=\"'VDOCipher'\" class=\"form-radio\" [(ngModel)]=\"isVimeo\" name=\"isVimeo\"\n              id=\"VDOCipher\">\n            <label for=\"VDOCipher\">VDOCipher</label>\n          </div>\n          <div class=\"c-lg-4 field-radio-wrapper\" style=\"width: 25%;\">\n            <input type=\"radio\" [value]=\"'Vimeo'\" class=\"form-radio\" [(ngModel)]=\"isVimeo\" name=\"isVimeo\" id=\"Vimeo\">\n            <label for=\"Vimeo\">Vimeo</label>\n          </div>\n        </div>\n        <!-- <div class=\"row\" *ngIf=\"(proctur_live_integration_with_vimeo == 1 || isVimeo == 'VDOCipher') \">\n          <label>Multiplier</label>\n          <input type=\"number\" style=\"margin-bottom: 0.8em;\" class=\"form-ctrl video-input\" placeholder=\"Multiplier\"\n            [(ngModel)]=\"watch_duration\">\n        </div> -->\n        <div class=\"row\"\n          *ngIf=\"(proctur_live_integration_with_vimeo == 1 || isVimeo == 'Vimeo') && isVimeo!='VDOCipher'\">\n          <div class=\"c-lg-8 field-wrapper\">\n            <label for=\"vimeo_title\">Title</label>\n            <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"vimeo_title\" name=\"vimeo_title\" id=\"vimeo_title\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-lg-8 field-wrapper\">\n            <label>Choose File To Upload</label>\n            <input type=\"file\" class=\"form-ctrl\" id=\"uploadFileControl\" name=\"uploadFileBox\"\n              accept=\"video/mp4,video/x-m4v,video/*\" (change)=\"fillFiles()\" [(ngModel)]=\"fileUploadInput\" />\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"progressBar\">\n          <div class=\"c-lg-8 progress-bar-wrapper\">\n            <div class=\"upload-bar\">\n              <div id=\"progress-width\"></div>\n            </div>\n            <span>{{progress}} %</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeUploadModal()\">Close</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"uploadHandler()\">Upload</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section [hidden]=\"alertBox\">\n  <div class=\"confirmation_popup\">\n    <div class=\"confirm_title\" style=\"text-align: center;\">\n      <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\" style=\"color: #faee0a;font-size: 28px;\"></i> &nbsp;\n      <span>Alert</span>\n    </div>\n    <div class=\"confirmation_msg_box\">\n      <span id=\"confirm_msg\">Are you sure you want to cancel the session?</span>\n    </div>\n    <br>\n    <div class=\"field-checkbox-wrapper\" style=\"width: 100%;\">\n      <input type=\"checkbox\" id=\"sms\" name=\"batch\" [(ngModel)]=\"sendSMSNotification\" class=\"form-checkbox\">\n      <label for=\"sms\"> Send SMS Notification</label>\n    </div>\n    <!-- <div class=\"field-checkbox-wrapper\">\n      <input type=\"checkbox\" id=\"sms\" name=\"batch\" [(ngModel)]=\"sendSMSNotification\"\n          class=\"form-checkbox\">\n      <label for=\"sms\"> Send SMS Notification</label>\n    </div>\n\n    <div class=\"field-checkbox-wrapper\">\n      <input type=\"checkbox\" id=\"push\" name=\"batch\" [(ngModel)]=\"sendPushNotification\"\n          class=\"form-checkbox\">\n      <label for=\"push\"> Send Push Notification</label>\n    </div> -->\n    <div class=\"confirmation_button_container\">\n      <input type=\"button\" value=\"Yes\" class=\"btn\" (click)=\"cancelSession()\">\n      <input type=\"button\" value=\"No\" style=\"background: #109CF1;color: white;\" class=\"btn\" (click)=\"closeAlert()\">\n    </div>\n  </div>\n</section>\n<div class=\"black-bg\" id=\"black-bg\" [hidden]=\"alertBox\" (click)=\"closeAlert()\"></div>\n\n<section *ngIf=\"viewDownloadPopup\">\n  <div class=\"confirmation_popup download_popup\">\n    <div class=\"confirm_title\" style=\"font-size: 14px;margin-bottom: 10px;\">\n      <span *ngIf=\"download_links.download_links?.length>0\">{{download_links.session_name}}</span>\n      <span style=\"cursor: pointer;float:right\" (click)=\"viewDownloadPopup=false\">X</span>\n    </div>\n    <section *ngIf=\"download_links.download_links?.length>0\">\n      <div class=\"table-container\">\n        <div class=\"heading-container\">\n          <div class=\"heading-item\" style=\"text-align: left;\">\n            <span>Title</span>\n          </div>\n          <div class=\"heading-item\" style=\"width: 17%;\">\n            <span>Size</span>\n          </div>\n          <div class=\"heading-item\" style=\"width: 20%;\">\n            <span>Duration</span>\n          </div>\n          <div class=\"heading-item\" style=\"width: 20%;\"\n            *ngIf=\"proctur_live_view_or_download_visibility==1 || proctur_live_view_or_download_visibility == 2|| proctur_live_view_or_download_visibility == 3\">\n            <span>Action</span>\n          </div>\n        </div>\n        <div class=\"value-outer-container\">\n          <div class=\"value-container\" *ngFor=\"let data of download_links.download_links\">\n            <div class=\"value-item\" style=\"text-align: left;\">\n              <span title=\"{{data.session_name}}\">{{(data.session_name.length > 80) ? (data.session_name | slice:0:80) +\n                '...' : data.session_name}}</span>\n            </div>\n            <div class=\"value-item\" style=\"width: 17%;\">\n              <span title=\"{{data?.video_size}}\" *ngIf=\"data?.video_size!=null\">{{data.video_size}}&nbsp;MB</span>\n              <span *ngIf=\"data?.video_size==null\">-</span>\n            </div>\n            <div class=\"value-item\" style=\"width: 20%;\">\n              <span title=\"{{data.video_duration}}\"\n                *ngIf=\"data.video_duration!=null\">{{data.video_duration}}&nbsp;mins</span>\n              <span *ngIf=\"data.video_duration==null\">-</span>\n            </div>\n            <div class=\"value-item\" style=\"width: 20%; display: flex; justify-content: space-around;\">\n              <div\n                *ngIf=\"((proctur_live_view_or_download_visibility==1 || proctur_live_view_or_download_visibility==3) && (data.vimeo_video_url=='' || data.vimeo_video_url== null)) || ((data.vimeo_video_url!='' || data.vimeo_video_url!= null) && vimeo_video_downlodable)\">\n                <button class=\"fa fa-download\" style=\"font-size: 14px; color: #0084f6;background: none;\"\n                  title=\"Download\" (click)=\"downloadFileCheck(data);\" id=\"downloadFile\"\n                  [disabled]=\"data.download_id==null || auth.isRippleLoad.getValue()\"\n                  [ngClass]=\"{'disabledButton': data.download_id==null || auth.isRippleLoad.getValue()}\"></button>\n                <a id=\"downloadFileClick\" [href]=\"fileUrl\" class=\"hide\"></a>\n              </div>\n              <div (click)=\"getVdocipherVideoOtp(data)\"\n                *ngIf=\"((JsonVars.view_proctur_live_recorded_session==2||JsonVars.view_proctur_live_recorded_session==3 ||JsonVars.view_proctur_live_recorded_session==6 ||JsonVars.view_proctur_live_recorded_session==7) && (proctur_live_view_or_download_visibility==2 || proctur_live_view_or_download_visibility==3))\">\n                <button class=\"fa fa-play\" style=\"font-size: 15px; color: #0084f6; background: none;\" title=\"Play\"\n                  [disabled]=\"data.video_id==null\" [ngStyle]=\"{'opacity':data.video_id==null ? '0.5' : '1' }\">\n                </button>\n              </div>\n              <div (click)=\"getVdoLink(data)\"\n                *ngIf=\"((JsonVars.view_proctur_live_recorded_session==1 ||JsonVars.view_proctur_live_recorded_session==3 ||JsonVars.view_proctur_live_recorded_session==5 ||JsonVars.view_proctur_live_recorded_session==7) && (proctur_live_view_or_download_visibility==3 || proctur_live_view_or_download_visibility==2))\">\n                <button class=\"fa fa-play\" style=\"font-size: 15px; color: #0084F6;background: none;\" title=\"Play\">\n                </button>\n              </div>\n              <div (click)=\"playVimeoVideo(data)\"\n                *ngIf=\"(JsonVars.view_proctur_live_recorded_session==4 || JsonVars.view_proctur_live_recorded_session==5 || JsonVars.view_proctur_live_recorded_session==6 || JsonVars.view_proctur_live_recorded_session==7)\">\n                <button class=\"fa fa-play\" style=\"font-size: 15px; color: #0084f6; background: none;\"\n                  title=\"{{data.video_status!='ready' ? 'Video is in processing state. Kindly wait for an hour.' : 'Play'}}\"\n                  [disabled]=\"(data.video_status!='ready' || data.vimeo_video_url == '' || data.vimeo_video_url == null)\"\n                  [ngStyle]=\"{'opacity':(data.video_status!='ready' || data.vimeo_video_url=='' || data.vimeo_video_url== null) ? '0.5' : '1' }\">\n                </button>\n              </div>\n              <div (click)=\"deleteRecording(data.id, false)\">\n                <button class=\"fa fa-trash\" style=\"font-size: 15px; color: red; background: none;\"\n                  title=\"Delete recoding\">\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- <section *ngIf=\"download_links.download_links?.length<=0\" style=\"text-align: center;\">\n      <div class=\"uploadImg\">\n        <img style=\"padding-left: 10px;padding-top: 15px;\" src=\"../../../../assets/images/Live class/upload_img.png\">\n      </div>\n      <div style=\"font-size: 22px;margin-bottom: 10px;\">\n        Upload a video to get started\n      </div>\n      <div style=\"color: #83827F;\">\n        Videos you upload will show up here.\n      </div>\n      <div class=\"add-class-container\" style=\"margin-bottom: 20px;margin-top: 30px;\">\n        <button data-toggle=\"modal\" data-target=\"#uploadRec\" data-backdrop=\"static\"\n          (click)=\"upload(download_links.session_id, download_links.live_meeting_with)\" class=\"add-class\">Upload\n          video</button>\n      </div>\n    </section> -->\n    <div class=\"row\" *ngIf=\"donloadBar\">\n      <div class=\"c-lg-8 progress-bar-wrapper\">\n        <div class=\"upload-bar\">\n          <div id=\"progress-width\"></div>\n        </div>\n        <span>{{download}} %</span>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"black-bg\" id=\"black-bg\" *ngIf=\"viewDownloadPopup\" (click)=\"viewDownloadPopup=false\">\n</div>\n\n<div class=\"ga-modal-wrapper\" [hidden]=\"showVideo\">\n  <div class=\"ga-modal-container\">\n    <div class=\"ga-modal\">\n      <div style=\"font-size: 14px;padding: 5px;font-weight: 600;\">\n        <span>{{tempVideoData.session_name}}</span>\n        <span (click)=\"stopVideo()\" style=\"float: right;cursor: pointer;padding-right: 5px;\">\n          <span>X</span>\n        </span>\n      </div>\n      <div class=\"ga-modal-body\">\n        <div class=\"row upload-box\">\n          <div id=\"embedBox\" style=\"width:700px;max-width:100%;height:auto;\"\n            *ngIf=\"JsonVars.view_proctur_live_recorded_session!=1 && isVDOCipherVDO\"></div>\n          <video width=\"600\" controls src=\"{{JsonVars.video_url}}\" *ngIf=\"!isVDOCipherVDO\"> </video>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div id=\"black-bg\" (click)=\"stopVideo()\"  [hidden]=\"showVideo\"></div> -->\n\n<div class=\"modal fade\" id=\"liveClassExpiry\" role=\"dialog\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" style=\"top: 8%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\">Dear Partner, your Live class subscription is due for\n          <span *ngIf=\"daysLeftForSubscriptionExpiry > 0\"> renewal in <span\n              class=\"text-bold\">{{daysLeftForSubscriptionExpiry}} days</span>.</span>\n          <span *ngIf=\"daysLeftForSubscriptionExpiry == 0\"> today.</span>\n          <br>\n          Kindly contact our team at <span class=\"text-bold\">9971839153</span> or drop email at <span\n            style=\"color: blue;\">info@proctur.com</span> for renewal.\n        </h3>\n      </div>\n      <div class=\"modal-footer\" style=\"padding: 8px !important;\">\n        <button type=\"button\" class=\"btn btn-primary create-btn\" data-dismiss=\"modal\">Okay</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"zoomFAQ\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h2 class=\"modal-title\">Note</h2>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"new-modules-list\">\n          <ol>\n            <li>Live class attendance available only for Proctur Live not for Zoom.\n            </li>\n\n            <li>Attendance for each class would be available after 8:00 PM if the class ends on or before 7:30 PM.\n            </li>\n\n            <li>If classes end after 7:30 PM, the attendance would be available at 8:00 PM on the next day.\n            </li>\n\n            <li>Students will be marked present for the live class in case they attend class for the duration more than\n              the defined threshold percentage either marked as partially present. This threshold value can be changed\n              from setting section.\n            </li>\n\n            <li>If students haven't joined the class then will be marked as absent.\n            </li>\n\n            <li>Notification setting can be changed from the setting section.\n            </li>\n          </ol>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"videoplayer\" *ngIf=\"videoplayer\">\n  <iframe width=\"650\" height=\"400\" [src]=\"currentProjectUrl\" frameborder=\"0\" style=\"border-radius: 10px;\"\n    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n  </iframe>\n</div>\n\n<div class=\"black-bg\" id=\"black-bg\" *ngIf=\"videoplayer || showSMSNotify || showPushNotify || showViewClassPopup\"\n  (click)=\"videoplayer = false;showSMSNotify = false;showPushNotify = false;showViewClassPopup = false;\"></div>\n\n<!-- Download option pop up \n  Developed by Nalini-->\n<div id=\"downloadOption\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Please select the size for downloading</h4>\n      </div>\n      <div class=\"modal-body\">\n        <section>\n          <div class=\"table-container\">\n            <div class=\"heading-container\">\n              <div class=\"heading-item\" style=\"text-align: left;width: 10%;\">\n                <span></span>\n              </div>\n              <div class=\"heading-item\" style=\"width: 45%;text-align: left;\">\n                <span>Dimension (Width x Height)</span>\n              </div>\n              <!-- <div class=\"heading-item\" style=\"width: 30%;\">\n                <span>Height</span>\n              </div> -->\n              <div class=\"heading-item\" style=\"width: 45%;\">\n                <span>Size</span>\n              </div>\n            </div>\n            <div class=\"value-outer-container\">\n              <div class=\"value-container\" *ngFor=\"let data of vimeoDownloadLinks; let i = index;\">\n                <div class=\"value-item\" style=\"text-align: left;width: 10%;\">\n                  <div class=\"field-radio-wrapper\" style=\"width: 25%;\">\n                    <input type=\"radio\" [value]=\"i\" [id]=\"'bothRadio-'+i\" class=\"form-radio\" [(ngModel)]=\"data.selected\"\n                      (ngModelChange)=\"changeSelectedSize(data)\" name=\"select\" id=\"select\">\n                    <label></label>\n                  </div>\n                </div>\n                <div class=\"value-item\" style=\"text-align: left;width: 45%;\">\n                  <span title=\"{{data.width}}\">{{data.width}} x {{data.height}}</span>\n                </div>\n                <!-- <div class=\"value-item\" style=\"width: 30%;\">\n                  <span title=\"{{data.height}}\">{{data.height}}</span>\n                </div> -->\n                <div class=\"value-item\" style=\"width: 45%;\">\n                  <span title=\"{{data.size_short}}\">{{data.size_short}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"downloadVimeoVdo()\">Download</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section *ngIf=\"showSMSNotify\">\n  <div class=\"confirmation_popup\">\n    <div class=\"confirm_title\" style=\"text-align: center;\">\n      <span><img src=\"../../../../assets/images/Live class/SMS_notify.png\"></span>\n    </div>\n    <div class=\"confirmation_msg_box\">\n      <span id=\"confirm_msg\">Are you sure you want to send SMS notification?</span>\n    </div>\n    <br>\n    <div class=\"confirmation_button_container\">\n      <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"showSMSNotify = false;\">\n      <input type=\"button\" value=\"Ok\" style=\"background: #109CF1;color: white;\" class=\"btn\"\n        (click)=\"smsNotification(smsData.session_id, smsData.live_meeting_with)\">\n    </div>\n  </div>\n</section>\n\n\n<section *ngIf=\"showPushNotify\">\n  <div class=\"confirmation_popup\">\n    <div class=\"confirm_title\" style=\"text-align: center;\">\n      <span><img src=\"../../../../assets/images/Live class/push_Notify.png\"></span>\n    </div>\n    <div class=\"confirmation_msg_box\">\n      <span id=\"confirm_msg\">Are you sure you want to send Push notification?</span>\n    </div>\n    <br>\n    <div class=\"confirmation_button_container\">\n      <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"showPushNotify = false;\">\n      <input type=\"button\" value=\"Ok\" style=\"background: #109CF1;color: white;\" class=\"btn\"\n        (click)=\"pushNotification(smsData.session_id, smsData.live_meeting_with)\">\n    </div>\n  </div>\n</section>\n\n<div class=\"modal viewClassPopop\" style=\"display: block;margin-top: 30px;\" *ngIf=\"showViewClassPopup\" id=\"ViewModal\">\n  <div class=\"modal-dialog\" style=\"width: 500px;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"font-weight: 600;\">Details</h4>\n        <button type=\"button\" class=\"close\" (click)=\"showViewClassPopup = false;\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\" style=\"display: flex;\">\n          <div class=\"col-lg-9\">\n            <p class=\"class_text\">Class</p>\n            <p class=\"class_name\"><span title=\"{{viewClassData.session_name}}\">{{\n                (viewClassData.session_name?.length>70) ?\n                (viewClassData.session_name | slice:0:70 ) + '...' :(viewClassData.session_name) }}</span></p>\n            <p class=\"mb-0\"><span class=\"name\">Session ID:</span><span class=\"value\">{{viewClassData.session_id}}</span>\n              <span *ngIf=\"viewClassData.live_meeting_with == 'Zoom'\" class=\"zoom2\">(Zoom)</span>\n            </p>\n            <p *ngIf=\"viewClassData.live_meeting_with == 'Zoom'\" class=\"mb-0\"><span class=\"name\">Account\n                Name</span><span class=\"value\">{{viewClassData.account_name}}</span></p>\n          </div>\n          <div class=\"col-lg-3 image-container\">\n            <img (click)=\"copyToClipboard(viewClassData)\" *ngIf=\"(!liveClassFor && !timeLeft(today, viewClassData.startDateTime)) && viewClassData.live_meeting_with == 'Zoom'\" style=\"cursor: pointer;\" src=\"../../../../assets/images/Group240.svg\" class=\"img_doc\">\n          </div>\n        </div>\n        <div class=\"div-border\"></div>\n        <div class=\"row\">\n          <div class=\"col-lg-9\">\n            <p class=\"name mb-0\">Teacher Name:</p>\n            <p class=\"value\"><span title=\"{{viewClassData.teachersName}}\">{{ (viewClassData.teachersName?.length>70) ?\n                (viewClassData.teachersName | slice:0:70 ) + '...' :(viewClassData.teachersName) }}</span></p>\n          </div>\n          <div class=\"col-lg-3 image-container\">\n            <!-- <img src=\"../../../../assets/images/image11.svg\" class=\"profile\">\n            <img src=\"../../../../assets/images/image10.svg\" class=\"profile overlap\"> -->\n          </div>\n        </div>\n        <div class=\"div-border\"></div>\n        <div class=\"flex\">\n          <div class=\"section1\">\n            <p class=\"name mb-0\">Date</p>\n            <p class=\"value mb-0\">{{viewClassData.startDateTime | date : 'dd MMM yyyy'}}</p>\n          </div>\n          <div class=\"div-border-left\"></div>\n          <div class=\"section2\">\n            <p class=\"name mb-0\">Duration</p>\n            <p class=\"value mb-0\">{{diffDate(viewClassData.startDateTime,viewClassData.endDateTime)}}</p>\n          </div>\n        </div>\n        <div class=\"flex\">\n          <div class=\"section1\">\n            <p class=\"name mb-0\">Time</p>\n            <p class=\"value mb-0\">{{viewClassData.startDateTime | date : 'shortTime'}}</p>\n          </div>\n          <div class=\"div-border-left\"></div>\n          <div class=\"section2\">\n            <p class=\"name mb-0\" *ngIf=\"!isProfessional\">{{schoolModel ? 'Section' : 'Course'}}</p>\n            <p class=\"name mb-0\" *ngIf=\"isProfessional\">Batch</p>\n            <p class=\"value mb-0\" title=\"{{viewClassData.course}}\">{{(viewClassData.course?.length>40) ?\n              (viewClassData.course | slice:0:40 ) + '...' :(viewClassData.course) }}</p>\n          </div>\n        </div>\n        <div class=\"flex\">\n          <div class=\"section1\" *ngIf=\"!isProfessional\">\n            <p class=\"name mb-0\">{{schoolModel ? 'Standard' : 'Master Course'}}</p>\n            <p class=\"value mb-0\" title=\"{{viewClassData.master_course}}\">{{(viewClassData.master_course?.length>40) ?\n              (viewClassData.master_course | slice:0:40 ) + '...' : (viewClassData.master_course) }}</p>\n          </div>\n          <div class=\"div-border-left\" *ngIf=\"schoolModel\"></div>\n          <div class=\"section2\" *ngIf=\"schoolModel\">\n            <p class=\"name mb-0\">Subject</p>\n            <p class=\"value mb-0\" title=\"{{viewClassData.subject}}\">{{(viewClassData.subject?.length>40) ?\n              (viewClassData.subject | slice:0:40 ) + '...':(viewClassData.subject) }} </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./src/app/components/live-classes-module/add-class/add-class.component.scss":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/live-classes-module/add-class/add-class.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLiveClassesModuleAddClassAddClassComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "html {\n  overflow-y: scroll;\n}\n\n.middle-section {\n  padding: 1%;\n}\n\n.border-container {\n  border-top: 1px solid #e3e3e3;\n}\n\n.student-tab .nav-tab {\n  margin-left: 35%;\n}\n\n.made-out {\n  border: 1px solid #efefef;\n  text-align: center;\n}\n\n.class_details_container {\n  width: 85%;\n  margin: 0px auto;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);\n  padding: 30px;\n  padding-top: 0;\n  background: white;\n  margin-bottom: 20px;\n}\n\n.class_details_container .field-wrapper {\n  margin-top: 10px;\n  border: none;\n}\n\n.class_details_container .field-wrapper #topicName {\n  width: 45%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n}\n\n.class_details_container .field-wrapper #faculty, .class_details_container .field-wrapper #moderator {\n  width: 40%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n}\n\n.class_details_container .field-wrapper {\n  position: relative;\n}\n\n.class_details_container .field-wrapper.datePickerBox .form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n\n.class_details_container .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/c.svg) no-repeat;\n  position: absolute;\n  left: 55px;\n  top: 10px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.class_details_container .faculty_container, .class_details_container .moderator_container {\n  width: 45%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  font-size: 14px;\n}\n\n.class_details_container .faculty_container label, .class_details_container .moderator_container label {\n  margin-bottom: 5px;\n}\n\n.class_details_container .field-wrapper-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.class_details_container .field-wrapper-container .from {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.class_details_container .field-wrapper-container .from #from1, .class_details_container .field-wrapper-container .from #to1 {\n  width: 40%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  height: 36px;\n  border: none;\n  font-size: 12px;\n}\n\n.class_details_container .field-wrapper-container .from #from2, .class_details_container .field-wrapper-container .from #to2 {\n  width: 30%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  height: 36px;\n  border: none;\n  font-size: 12px;\n}\n\n.class_details_container .field-wrapper-container #date {\n  width: 70%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  border: none;\n}\n\n.field-radio-wrapper {\n  width: 20% !important;\n  padding-left: 15px !important;\n}\n\n.field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  background: #0084f6;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n}\n\n.field-radio-wrapper label {\n  margin-left: 10px;\n}\n\n.multiselect-dropdown {\n  font-size: 12px;\n}\n\n.multiselect-dropdown .dropdown-down {\n  border-top: 5px solid black;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.multiselect-dropdown .dropdown-up {\n  border-bottom: 5px solid black;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.multiselect-dropdown .dropdown-btn {\n  border: none !important;\n  padding-left: 0px !important;\n}\n\n.multiselect-dropdown .dropdown-btn .selected-item {\n  border: none !important;\n  background: none !important;\n  color: #9E9E9E !important;\n  box-shadow: none !important;\n}\n\n.multiselect-dropdown .dropdown-btn .selected-item a {\n  color: #337ab7 !important;\n}\n\n.multiselect-dropdown .dropdown-btn span {\n  font-size: 12px;\n}\n\n.action-button-container {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.action-button-container .action-btn-item-1 {\n  width: 20%;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.action-button-container .action-btn-item-1 .back-btn {\n  border: 1px solid #1283f4;\n  text-align: center;\n  color: #1283f4;\n  width: 80px;\n  height: 35px;\n  border-radius: 4px;\n  background: white;\n}\n\n.action-button-container .action-btn-item-2 {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.action-button-container .action-btn-item-2 .cancel-btn {\n  border: 1px solid #f41212;\n  text-align: center;\n  color: #f41212;\n  width: 100px;\n  height: 35px;\n  border-radius: 4px;\n  background: white;\n}\n\n.action-button-container .action-btn-item-2 .next-btn {\n  border: 1px solid #1283f4;\n  text-align: center;\n  background: #1283f4;\n  color: white;\n  width: 100px;\n  height: 35px;\n  border-radius: 4px;\n}\n\n.add_student_container {\n  width: 60%;\n  margin-left: 20%;\n  margin-right: 20%;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);\n  padding: 30px;\n  margin-bottom: 20px;\n}\n\n.add_student_container .field-wrapper {\n  margin-top: 10px;\n}\n\n.add_student_container .field-wrapper #master_course, .add_student_container .field-wrapper #course, .add_student_container .field-wrapper #batch {\n  width: 45%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n}\n\n.add_student_container .student_list_container {\n  width: 85%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  font-size: 14px;\n}\n\n.add_student_container .student_list_container label {\n  margin-bottom: 5px;\n}\n\n@media screen and (max-width: 2000px) and (min-width: 1400px) {\n  .field-wrapper.datePickerBox:after {\n    content: '';\n    right: 65px !important;\n  }\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n.field-checkbox-wrapper, .field-radio-wrapper {\n  position: relative;\n  padding-left: 25px;\n  width: 33%;\n}\n\n.qInfoIcon {\n  width: 17px;\n  margin-left: 4px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n\n.tooltip-box-field {\n  white-space: nowrap;\n  min-height: 41px;\n  line-height: 12px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  font-weight: bold;\n  top: 30px;\n  width: 140px;\n}\n\n.tooltip-box-field.lg {\n  width: 200px;\n  white-space: nowrap;\n  min-height: 50px;\n  line-height: 20px;\n  padding: 5px 5px;\n}\n\n.tooltip-box-field.sm {\n  width: 100px;\n  white-space: nowrap;\n  min-height: 40px;\n  padding: 5px 5px;\n}\n\n.AdvanceSetting {\n  position: relative;\n  margin-top: 5px;\n  padding-top: 10px;\n}\n\n.AdvanceSetting span {\n  background-color: white;\n  padding-right: 10px;\n  color: #4D5869;\n  cursor: pointer;\n}\n\n.AdvanceSetting:after,\n.AdvanceSetting:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: .5em;\n  border-top: 1px solid #ccc;\n  z-index: -1;\n}\n\n.AdvanceSettingDiv {\n  margin-top: -1%;\n  padding-bottom: 5%;\n  margin-bottom: 1%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.AdvanceSettingDiv label {\n  font-weight: 400;\n  font-size: 12px !important;\n}\n\n.advance-setting-item {\n  display: flex;\n  justify-content: flex-start;\n  margin: 5px;\n  margin-top: 20px;\n  margin-left: 10px;\n  width: 30%;\n}\n\n.zoomMsgSection {\n  width: 18%;\n  float: left;\n  margin: 0;\n  margin-left: 10px;\n  padding: 15px;\n}\n\n#zoomFAQ .modal-dialog {\n  width: 800px;\n}\n\n#zoomFAQ .modal-body {\n  height: 450px;\n  overflow-y: auto;\n}\n\n#zoomFAQ ul, #zoomFAQ ol {\n  list-style-type: decimal;\n  padding-left: 20px;\n  margin-top: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n#zoomFAQ ul li, #zoomFAQ ol li {\n  margin-bottom: 5px;\n}\n\n#zoomFAQ ul {\n  color: gray;\n  list-style-type: disc;\n}\n\n#zoomFAQ .new-modules-list {\n  margin-bottom: 20px;\n}\n\n#zoomFAQ .module-title {\n  text-transform: uppercase;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n\n#zoomFAQ .module-title span {\n  background: #00b55a;\n  padding: 5px 20px;\n  color: white;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.addClassHeader {\n  background: #FBF9F9;\n  border-radius: 0px 0px 20px 20px;\n  width: 190px;\n  padding: 8px;\n  font-size: 14px;\n  float: left;\n  text-align: center;\n}\n\nlabel {\n  color: #4D5869 !important;\n  font-weight: 600;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.select {\n  padding-left: 10px;\n  min-width: 60px;\n  border: 1px solid #ccc !important;\n  border-radius: 4px !important;\n  font-size: 13px !important;\n  font-weight: 500 !important;\n  color: #787A7D !important;\n}\n\n.input {\n  padding: 7px 20px !important;\n  font-size: 13px !important;\n  border: 1px solid #ccc !important;\n  border-radius: 4px !important;\n  font-weight: 500 !important;\n  height: 35px !important;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.input-date, input[type=\"date\"]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  background-position: 90% center;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXZlLWNsYXNzZXMtbW9kdWxlL2FkZC1jbGFzcy9hZGQtY2xhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSw2QkFBNkI7QUFFL0I7O0FBQ0E7RUFFSSxnQkFBZ0I7QUFDcEI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQXBCOztBQUdBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUdoQiw0Q0FBNEM7RUFDNUMsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBRnJCOztBQVBBO0VBV0ksZ0JBQWdCO0VBQ2hCLFlBQVk7QUFBaEI7O0FBWkE7RUFjTSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUFFM0I7O0FBbkJBO0VBb0JNLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQUczQjs7QUExQkE7RUEyQk0sa0JBQWtCO0FBR3hCOztBQTlCQTtFQThCYyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1QkFBdUI7QUFJckM7O0FBckNBO0VBb0NlLFdBQVc7RUFDWixpREFBaUQ7RUFDakQsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBS3hCOztBQWhEQTtFQWdESSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtBQUluQjs7QUF4REE7RUFzRE0sa0JBQWtCO0FBTXhCOztBQTVEQTtFQTBESSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFNZjs7QUFsRUE7RUErRE0sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFPakM7O0FBeEVBO0VBbUVRLFVBQVU7RUFDVixrQkFB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O0VBMkJLLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBdUJ4Qjs7QUF2REE7RUFrQ08sbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUF5QnRCOztBQXJCQztFQUNDLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQXdCcEI7O0FBdEJBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQXlCbEI7O0FBdkJBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUEwQnJCOztBQXhCQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQTJCM0I7O0FBeEJBO0VBQ0UsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUM1Qix1QkFBc0I7QUEyQnZCOztBQXpCQztFQUNDLGFBQWE7QUE0QmY7O0FBMUJDO0VBQ0MsZUFBZTtFQUNmLFVBQVU7RUFDVixjQUFjO0VBQ2Qsb0NBQXlEO0VBQ3pELCtCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUE2QmxCOztBQTFCQTtFQUNBLGFBQWE7QUE2QmI7O0FBM0JBO0VBQ0EsYUFBYTtBQThCYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGl2ZS1jbGFzc2VzLW1vZHVsZS9hZGQtY2xhc3MvYWRkLWNsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLm1pZGRsZS1zZWN0aW9ue1xuICBwYWRkaW5nOiAxJTtcbn1cbi5ib3JkZXItY29udGFpbmVye1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTNlMztcbn1cblxuLnN0dWRlbnQtdGFie1xuICAubmF2LXRhYntcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xuICB9XG59XG5cbi5tYWRlLW91dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNsYXNzX2RldGFpbHNfY29udGFpbmVye1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICAvL21hcmdpbi1sZWZ0OiAyMCU7XG4gIC8vbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC5maWVsZC13cmFwcGVye1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgICN0b3BpY05hbWV7XG4gICAgICB3aWR0aDogNDUlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYzVjNWNjO1xuICAgIH1cbiAgICAjZmFjdWx0eSwgI21vZGVyYXRvcntcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBib3JkZXItY29sb3I6ICNjNWM1Y2M7XG4gICAgfVxuICB9XG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICYuZGF0ZVBpY2tlckJveCB7XG4gICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWFnZXMvYy5zdmcpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiA1NXB4O1xuICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIC5mYWN1bHR5X2NvbnRhaW5lciwgLm1vZGVyYXRvcl9jb250YWluZXJ7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlci1jb2xvcjogI2M1YzVjYztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGFiZWx7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG4gIC5maWVsZC13cmFwcGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5mcm9te1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAjZnJvbTEsICN0bzF7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBib3JkZXItY29sb3I6ICNjNWM1Y2M7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgICAjZnJvbTIsICN0bzJ7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBib3JkZXItY29sb3I6ICNjNWM1Y2M7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICAgICNkYXRle1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGJvcmRlci1jb2xvcjogI2M1YzVjYztcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgfVxufVxuLmZpZWxkLXJhZGlvLXdyYXBwZXIge1xuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIC5mb3JtLXJhZGlvOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbGVmdDogM3B4O1xuICAgICAgICB0b3A6IDNweDtcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG59XG5cbi5tdWx0aXNlbGVjdC1kcm9wZG93bntcbiAgZm9udC1zaXplOiAxMnB4O1xuICAuZHJvcGRvd24tZG93bntcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuZHJvcGRvd24tdXB7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmRyb3Bkb3duLWJ0biB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAuc2VsZWN0ZWQtaXRlbSB7XG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjOUU5RTlFICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMzMzdhYjcgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG5cblxuLmFjdGlvbi1idXR0b24tY29udGFpbmVye1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICAuYWN0aW9uLWJ0bi1pdGVtLTF7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAuYmFjay1idG57XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTI4M2Y0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxMjgzZjQ7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbiAgfVxuICAuYWN0aW9uLWJ0bi1pdGVtLTJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5jYW5jZWwtYnRue1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y0MTIxMjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZjQxMjEyO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgIC5uZXh0LWJ0bntcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTI4M2Y0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi5hZGRfc3R1ZGVudF9jb250YWluZXJ7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIG1hcmdpbi1yaWdodDogMjAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAuZmllbGQtd3JhcHBlcntcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAjbWFzdGVyX2NvdXJzZSwgI2NvdXJzZSwgI2JhdGNoe1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYzVjNWNjO1xuICAgICAgfVxuICAgIH1cbiAgICAuc3R1ZGVudF9saXN0X2NvbnRhaW5lcntcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBib3JkZXItY29sb3I6ICNjNWM1Y2M7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsYWJlbHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KSBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICYuZGF0ZVBpY2tlckJveCB7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICByaWdodDogNjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4uYmxhY2stYmd7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIsIDExLCAxMSwgMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDY7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIsIC5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHdpZHRoOiAzMyU7XG59XG5cbi5xSW5mb0ljb24ge1xuICB3aWR0aDogMTdweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICNjY2MgaW5zZXQ7XG4gIGNvbG9yOiAjODg4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICY6aG92ZXIge1xuICAgICAgLy8gYm9yZGVyLWNvbG9yOiAkaGVhZGVyLWJnO1xuICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICRoZWFkZXItYmcgaW5zZXQ7XG4gICAgICAvLyBjb2xvcjogJGhlYWRlci1iZztcbiAgfVxufVxuXG4udG9vbHRpcC1ib3gtZmllbGQge1xud2hpdGUtc3BhY2U6IG5vd3JhcDtcbm1pbi1oZWlnaHQ6IDQxcHg7XG5saW5lLWhlaWdodDogMTJweDtcbnBhZGRpbmc6IDVweCA1cHg7XG5vdmVyZmxvdzogdmlzaWJsZTtcbmNvbG9yOiBibGFjaztcbmZvbnQtd2VpZ2h0OiBib2xkO1xudG9wOiAzMHB4O1xud2lkdGg6IDE0MHB4O1xuJi5sZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xufVxuJi5zbSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xufVxufVxuLkFkdmFuY2VTZXR0aW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uQWR2YW5jZVNldHRpbmcgc3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjogIzRENTg2OTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5BZHZhbmNlU2V0dGluZzphZnRlcixcbi5BZHZhbmNlU2V0dGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogLjVlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIHotaW5kZXg6IC0xO1xufVxuLkFkdmFuY2VTZXR0aW5nRGl2IHtcbiAgLy8gYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLXRvcDogLTElO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5hZHZhbmNlLXNldHRpbmctaXRlbXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46NXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDMwJVxufVxuLnpvb21Nc2dTZWN0aW9ue1xuICB3aWR0aDogMTglO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI3pvb21GQVF7XG4gIC5tb2RhbC1kaWFsb2d7XG4gICAgIHdpZHRoOiA4MDBweDtcbiAgIH1cbiAgIC5tb2RhbC1ib2R5e1xuICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgfVxuICAgdWwsIG9sIHtcbiAgICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICBsaXtcbiAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgIH1cbiAgIH1cbiAgIHVse1xuICAgICBjb2xvcjogZ3JheTtcbiAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgfVxuICAgLm5ldy1tb2R1bGVzLWxpc3R7XG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICB9XG4gICAubW9kdWxlLXRpdGxle1xuICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgc3BhbntcbiAgICAgICBiYWNrZ3JvdW5kOiAjMDBiNTVhO1xuICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICB9XG4gICB9XG4gfVxuIC5hZGRDbGFzc0hlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNGQkY5Rjk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xuICB3aWR0aDogMTkwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubGFiZWwge1xuICBjb2xvcjogIzRENTg2OSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmZsZXgtY2VudGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWxlY3R7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzc4N0E3RCAhaW1wb3J0YW50O1xuICBcbn1cbi5pbnB1dHtcbiAgcGFkZGluZzogN3B4IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcblx0aGVpZ2h0OjM1cHggIWltcG9ydGFudDtcbiAgfVxuIGlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsYnV0dG9uOmZvY3Vze1xuIFx0b3V0bGluZTogbm9uZTtcbiB9XG4gLmlucHV0LWRhdGUsaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2NhbC5zdmcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjo5MCUgY2VudGVyO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIHBhZGRpbmc6IDJweCAwcHg7XG59XG5cbmlucHV0OmZvY3Vze1xub3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvbjpmb2N1c3tcbm91dGxpbmU6IG5vbmU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/live-classes-module/add-class/add-class.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/live-classes-module/add-class/add-class.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: AddClassComponent */

    /***/
    function srcAppComponentsLiveClassesModuleAddClassAddClassComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddClassComponent", function () {
        return AddClassComponent;
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


      var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../.. */
      "./src/app/index.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/products.service */
      "./src/app/services/products.service.ts");

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

      var AddClassComponent =
      /** @class */
      function () {
        var AddClassComponent = /*#__PURE__*/function () {
          function AddClassComponent(auth, router, appC, product_service, http_service, msgService) {
            _classCallCheck(this, AddClassComponent);

            this.auth = auth;
            this.router = router;
            this.appC = appC;
            this.product_service = product_service;
            this.http_service = http_service;
            this.msgService = msgService;
            this.isProfessional = false;
            this.isBasicActive = true;
            this.isOtherActive = false;
            this.class_id = 0;
            this.hour = ['01 AM', '02 AM', '03 AM', '04 AM', '05 AM', '06 AM', '07 AM', '08 AM', '09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM', '09 PM', '10 PM', '11 PM', '12 AM'];
            this.minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
            this.selectedStudentList = [];
            this.selectedUserList = [];
            this.selectedFacultyList = [];
            this.selectedModeratorList = [];
            this.selectedCourseList = [];
            this.selectedSubjectList = [];
            this.selectedBatchList = [];
            this.dropdownList = [];
            this.teachersAssigned = [];
            this.userAssigned = [];
            this.studentList = [];
            this.dropdownSettings = {};
            this.facultySettings = {};
            this.moderatorSettings = {};
            this.studentListSettings = {};
            this.userListSetting = {};
            this.courseListSetting = {};
            this.batchListSetting = {};
            this.productSetting = {};
            this.masterCourseListSetting = {};
            this.subjectSetting = {};
            this.product_id = "";
            this.productData = [];
            this.userData = [];
            this.facultyId = [];
            this.custUserIds = [];
            this.studentsId = [];
            this.eLearnCustUserIDs = [];
            this.courseValue = '';
            this.batches = [];
            this.masters = [];
            this.courses = [];
            this.courseIds = null;
            this.batchesIds = null;
            this.courseId = [];
            this.dateTimeStatus = false;
            this.topicName = '';
            this.hoursFrom = '';
            this.minuteFrom = '';
            this.hoursTo = '';
            this.minuteTo = '';
            this.isShowProductOption = false;
            this.scheduledateFrom = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
            this.institution_id = sessionStorage.getItem('institution_id');
            this.getPayloadBatch = {
              inst_id: this.institution_id,
              coursesArray: [''],
              role: 'student'
            };
            this.addOnlineClass = {
              custUserIds: [],
              end_datetime: "",
              institution_id: this.institution_id,
              sent_notification_flag: 0,
              session_name: "",
              start_datetime: "",
              studentIds: [],
              teacherIds: [],
              eLearnCustUserIDs: [],
              product_ids: null,
              private_access: false,
              access_enable_lobby: false,
              access_enable_breakout_rooms: false,
              access_before_start: 0,
              batch_list: null,
              course_list: null,
              host_video: true,
              participant_video: false,
              join_before_host: true,
              mute_upon_entry: true,
              auto_recording: "none",
              is_zoom_live_class: false,
              hide_recording_notifications: true,
              prevent_user_count: false
            }; // Zoom

            this.auto_recording = false;
            this.is_zoom_integration_enable = true;
            this.live_class_for = sessionStorage.getItem('setLiveClassType');
            this.singleSelectionOfFaculty = false;
            this.zoom_enable = false;
            this.schoolModel = false;
            this.subjectList = [];
            this.fullResponse = [];
          }

          _createClass(AddClassComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.institution_id = sessionStorage.getItem('institution_id');
              this.userType = sessionStorage.getItem('userType');
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
              var zoom = sessionStorage.getItem('is_zoom_enable');
              this.is_zoom_integration_enable = JSON.parse(zoom);

              if (this.is_zoom_integration_enable && this.live_class_for == "2") {
                this.singleSelectionOfFaculty = true;
                this.zoom_enable = true;
              }

              this.setMultiSelectSetting();
              this.getTeachers();
              this.getCustomUsers();
              this.checkIsEnableElearnFeature();
              this.getBatchesCourses();
            }
          }, {
            key: "changeLiveClassFor",
            value: function changeLiveClassFor() {
              if (this.live_class_for == "2") {
                this.singleSelectionOfFaculty = true;
                this.zoom_enable = true;
                this.selectedFacultyList = [];
                this.selectedModeratorList = [];
                this.facultySettings = {
                  singleSelection: this.singleSelectionOfFaculty,
                  idField: 'teacher_id',
                  textField: 'teacher_name',
                  itemsShowLimit: 2,
                  enableCheckAll: false
                };
              } else if (this.live_class_for == "1") {
                this.singleSelectionOfFaculty = false;
                this.zoom_enable = false;
                this.selectedModeratorList = [];
                this.facultySettings = {
                  singleSelection: this.singleSelectionOfFaculty,
                  idField: 'teacher_id',
                  textField: 'teacher_name',
                  itemsShowLimit: 2,
                  enableCheckAll: false
                };
              }
            }
          }, {
            key: "setMultiSelectSetting",
            value: function setMultiSelectSetting() {
              this.facultySettings = {
                singleSelection: this.singleSelectionOfFaculty,
                idField: 'teacher_id',
                textField: 'teacher_name',
                itemsShowLimit: 2,
                enableCheckAll: false
              };
              this.moderatorSettings = {
                singleSelection: false,
                idField: 'userid',
                textField: 'name',
                itemsShowLimit: 2,
                enableCheckAll: false
              };
              this.studentListSettings = {
                singleSelection: false,
                idField: 'student_id',
                textField: 'student_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.userListSetting = {
                singleSelection: false,
                idField: 'user_id',
                textField: 'name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.courseListSetting = {
                singleSelection: false,
                idField: 'course_id',
                textField: 'course_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.batchListSetting = {
                singleSelection: false,
                idField: 'batch_id',
                textField: 'batch_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.productSetting = {
                singleSelection: false,
                idField: 'id',
                textField: 'title',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.subjectSetting = {
                singleSelection: false,
                idField: 'batch_id',
                textField: 'subject_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.masterCourseListSetting = {
                singleSelection: false,
                idField: 'master_course',
                textField: 'master_course',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
            }
          }, {
            key: "checkIsEnableElearnFeature",
            value: function checkIsEnableElearnFeature() {
              var _this2 = this;

              var data = sessionStorage.getItem('enable_eLearn_feature');

              if (data == '1') {
                this.isShowProductOption = true;
                this.auth.showLoader();
                this.product_service.getMethod('product/get-product-list?slug=Online_Class', null).subscribe(function (data) {
                  _this2.auth.hideLoader();

                  _this2.productData = data.result;
                  console.log(_this2.productData);
                }, function (error) {
                  _this2.auth.hideLoader();

                  _this2.appC.popToast({
                    type: "error",
                    body: error.error.message
                  });
                });
              } else {
                this.isShowProductOption = false;
              }
            }
          }, {
            key: "onChangeProduct",
            value: function onChangeProduct(event) {
              var _this3 = this;

              var institute_id = sessionStorage.getItem('institute_id');
              var pro_id = Array.prototype.map.call(event, function (item) {
                return item.id;
              }).join(",");

              if (institute_id != '100058' && institute_id != '100127' && institute_id != '101924') {
                this.selectedUserList = [];
              }

              var url = "/api/v1/meeting_manager/userDetailByProductID/".concat(institute_id, "?productIds=").concat(pro_id);
              this.auth.showLoader();
              this.http_service.getData(url).subscribe(function (data) {
                _this3.auth.hideLoader();

                _this3.userData = data;
              }, function (error) {
                _this3.auth.hideLoader();

                _this3.appC.popToast({
                  type: "error",
                  body: error.error.message
                });
              });
            }
          }, {
            key: "getEvent",
            value: function getEvent(event) {
              var proctur_live_expiry_date = sessionStorage.getItem('proctur_live_expiry_date');

              if (moment__WEBPACK_IMPORTED_MODULE_2__(event).diff(moment__WEBPACK_IMPORTED_MODULE_2__(), 'days') < 0) {
                var msg = {
                  type: "info",
                  body: "You cannot select past date"
                };
                this.appC.popToast(msg);
                this.scheduledateFrom = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format();
              }

              event = new Date(event);
              proctur_live_expiry_date = new Date(proctur_live_expiry_date);
              event.setHours(0, 0, 0, 0);
              proctur_live_expiry_date.setHours(0, 0, 0, 0);

              if (proctur_live_expiry_date < event && proctur_live_expiry_date != event) {
                var tempMsg = 'Your live class subscription will get expired on '.concat(moment__WEBPACK_IMPORTED_MODULE_2__(proctur_live_expiry_date).format('DD-MM-YYYY')).concat(' hence you will not be able create live class. Renew your subscription to conduct live classes again!');
                this.msgService.showErrorMessage('info', '', tempMsg);
                this.scheduledateFrom = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format();
              }
            }
          }, {
            key: "getEventHourFrom",
            value: function getEventHourFrom(e) {
              if (this.hoursFrom != "" && this.hoursFrom != null && this.minuteFrom == "") {
                this.minuteFrom = "00";
              } else if (this.hoursTo != "" && this.hoursTo != null && this.minuteTo == "") {
                this.minuteTo = "00";
              }

              if (this.hoursFrom != "" && this.hoursFrom != null && this.minuteFrom != "" && this.minuteFrom != null && this.hoursTo != "" && this.hoursTo != null && this.minuteTo != "" && this.minuteTo != null) {
                this.getEventHourTo();
              }
            }
          }, {
            key: "getEventHourTo",
            value: function getEventHourTo() {
              var fromTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursFrom.split(' ')[0] + ":" + this.minuteFrom + " " + this.hoursFrom.split(' ')[1];
              var toTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursTo.split(' ')[0] + ":" + this.minuteTo + " " + this.hoursTo.split(' ')[1];
              var fromTimeT = moment__WEBPACK_IMPORTED_MODULE_2__(fromTime).format('YYYY-MM-DD hh:mm a');
              var toTimeT = moment__WEBPACK_IMPORTED_MODULE_2__(toTime).format('YYYY-MM-DD hh:mm a');

              if (moment__WEBPACK_IMPORTED_MODULE_2__(fromTimeT).diff(moment__WEBPACK_IMPORTED_MODULE_2__(toTimeT), 'minutes') > 0) {
                this.appC.popToast({
                  type: "error",
                  body: "From time cannot be greater than to time"
                });
                this.dateTimeStatus = false;
                return false;
              } else if (this.hoursFrom == "" || this.hoursTo == "" || this.minuteFrom == "" || this.minuteTo == "") {
                this.appC.popToast({
                  type: "error",
                  body: "All fields are required"
                });
                this.dateTimeStatus = false;
                return false;
              } else if (moment__WEBPACK_IMPORTED_MODULE_2__(fromTimeT).diff(moment__WEBPACK_IMPORTED_MODULE_2__(), 'minutes') <= 0) {
                this.appC.popToast({
                  type: "error",
                  body: "Class cannot be schedule before current time"
                });
                this.dateTimeStatus = false;
                return false;
              } else if (fromTimeT == toTimeT) {
                this.appC.popToast({
                  type: "error",
                  body: "From time and to time cannot be same"
                });
                this.dateTimeStatus = false;
                return false;
              } else {
                this.dateTimeStatus = true;
              }
            } //Added by ashwini gupta ticket 1104

          }, {
            key: "checkMandatoryFields",
            value: function checkMandatoryFields() {
              if (this.userType === "3") {
                if (this.topicName != "" && this.topicName != null) {
                  if (this.dateTimeStatus) {
                    // this.navigateTo("assignStudent")
                    return true;
                  } else {
                    this.getEventHourTo();
                  }
                } else {
                  this.appC.popToast({
                    type: "error",
                    body: "All fields are required"
                  });
                  return false;
                }
              } else {
                if (this.topicName != "" && this.topicName != null && this.selectedFacultyList.length != 0) {
                  if (this.dateTimeStatus) {
                    // this.navigateTo("assignStudent");
                    return true;
                  } else {
                    this.getEventHourTo();
                  }
                } else {
                  this.appC.popToast({
                    type: "error",
                    body: "All fields are required"
                  });
                  return false;
                }
              }
            }
          }, {
            key: "scheduleClass",
            value: function scheduleClass() {
              var _this4 = this;

              var userType = sessionStorage.getItem('userType');
              var validationFlag = false;

              if (!this.isProfessional) {
                if (this.courseIds != null && this.courseValue != null && this.courseValue != '') {
                  if (this.selectedStudentList.length != 0 || this.selectedUserList.length != 0) {
                    validationFlag = true;

                    if (this.checkMandatoryFields()) {
                      if (this.schoolModel) {
                        if (this.selectedSubjectList != null && this.selectedSubjectList.length != 0) {
                          validationFlag = true;
                        } else {
                          validationFlag = false;
                          this.appC.popToast({
                            type: "error",
                            body: "Please select subject"
                          });
                        }
                      } else {
                        validationFlag = true;
                      }
                    } else {
                      validationFlag = false;
                    }
                  } else {
                    validationFlag = false;
                    this.appC.popToast({
                      type: "info",
                      body: "Please select students or users"
                    });
                  }
                } else {
                  validationFlag = false;
                  this.appC.popToast({
                    type: "error",
                    body: "All fields are required"
                  });
                }
              } else {
                if (this.batchesIds != null) {
                  if (this.selectedStudentList.length != 0 || this.selectedUserList.length != 0) {
                    validationFlag = true;

                    if (this.checkMandatoryFields()) {
                      validationFlag = true;
                    } else {
                      validationFlag = false;
                    }
                  } else {
                    validationFlag = false;
                    this.appC.popToast({
                      type: "info",
                      body: "Please select students or users"
                    });
                  }
                } else {
                  validationFlag = false;
                  this.appC.popToast({
                    type: "error",
                    body: "All fields are required"
                  });
                }
              }

              if (validationFlag) {
                this.facultyId = [];
                this.custUserIds = [];
                this.studentsId = [];
                var product_ids = []; //Adding for faculty module so that faculty is not able to assign live classes to another faculty- Ashwini Kumar Gupta  1104

                if (userType == "3") {
                  var tempFaculty = sessionStorage.getItem('teacherIDs');
                  this.facultyId.push(tempFaculty);
                } else {
                  this.selectedFacultyList.map(function (ele) {
                    var x = ele.teacher_id.toString();

                    _this4.facultyId.push(x);
                  });
                } // End


                if (this.product_id && this.product_id.length) {
                  this.product_id.map(function (ele) {
                    var x = ele.id.toString();
                    product_ids.push(x);
                  });
                }

                this.selectedModeratorList.map(function (ele) {
                  var x = ele.userid.toString();

                  _this4.custUserIds.push(x);
                });
                this.selectedStudentList.map(function (ele) {
                  var x = ele.student_id.toString();

                  _this4.studentsId.push(x);
                });
                var course_list = [];

                if (!this.schoolModel) {
                  this.selectedCourseList.map(function (ele) {
                    var x = {
                      'course_id': ele.course_id.toString()
                    };
                    course_list.push(x);
                  });
                }

                var batch_list = [];
                this.selectedBatchList.map(function (ele) {
                  var x = {
                    'batch_id': ele.batch_id.toString()
                  };
                  batch_list.push(x);
                });

                if (this.schoolModel) {
                  for (var i = 0; i < this.selectedCourseList.length; i++) {
                    var x = {
                      'course_id': this.selectedCourseList[i].course_id.toString()
                    };
                    course_list.push(x);
                    course_list[i].subject_list = [];

                    for (var j = 0; j < this.subjectList.length; j++) {
                      for (var l = 0; l < this.selectedSubjectList.length; l++) {
                        if (this.subjectList[j].batch_id == this.selectedSubjectList[l].batch_id && this.subjectList[j].course_id == this.selectedCourseList[i].course_id) {
                          var _x = {
                            'batch_id': this.subjectList[j].batch_id.toString()
                          };
                          course_list[i].subject_list.push(_x);
                        }
                      }
                    }
                  }
                }

                this.addOnlineClass.course_list = course_list;
                this.addOnlineClass.batch_list = batch_list;

                if (this.selectedUserList.length != 0) {
                  this.eLearnCustUserIDs = [];
                  this.selectedUserList.map(function (ele) {
                    var x = ele.user_id.toString();

                    _this4.eLearnCustUserIDs.push(x);
                  });
                  this.addOnlineClass.eLearnCustUserIDs = this.eLearnCustUserIDs;
                } else {
                  this.addOnlineClass.eLearnCustUserIDs = [];
                }

                this.addOnlineClass.session_name = this.topicName;
                this.addOnlineClass.custUserIds = this.custUserIds;
                this.addOnlineClass.studentIds = this.studentsId;
                this.addOnlineClass.teacherIds = this.facultyId;

                if (product_ids != null) {
                  this.addOnlineClass.product_ids = product_ids;
                } else {
                  this.addOnlineClass.product_ids = null;
                }

                this.addOnlineClass.start_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursFrom.split(' ')[0] + "" + ":" + this.minuteFrom + " " + this.hoursFrom.split(' ')[1];
                this.addOnlineClass.end_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursTo.split(' ')[0] + "" + ":" + this.minuteTo + " " + this.hoursTo.split(' ')[1];

                if (this.addOnlineClass.sent_notification_flag) {
                  this.addOnlineClass.sent_notification_flag = 1;
                } else if (!this.addOnlineClass.sent_notification_flag) {
                  this.addOnlineClass.sent_notification_flag = 0;
                }

                if (this.addOnlineClass.access_before_start) {
                  this.addOnlineClass.access_before_start = 1;
                }

                if (!this.addOnlineClass.access_before_start) {
                  this.addOnlineClass.access_before_start = 0;
                }

                if (this.live_class_for == "1") {
                  this.addOnlineClass.is_zoom_live_class = false;
                } else {
                  this.addOnlineClass.is_zoom_live_class = true;
                }

                if (this.auto_recording) {
                  this.addOnlineClass.auto_recording = "local";
                } else if (!this.auto_recording) {
                  this.addOnlineClass.auto_recording = "none";
                }

                console.log(this.addOnlineClass);
                this.auth.showLoader();
                var url = '/api/v1/meeting_manager/createV2';
                this.http_service.putData(url, this.addOnlineClass).subscribe(function (data) {
                  _this4.auth.hideLoader();

                  if (data.statusCode >= 200 && data.statusCode <= 300) {
                    var session = _this4.live_class_for == "1" ? 'Live class session ' : 'Zoom class session ';

                    _this4.appC.popToast({
                      type: "success",
                      body: session + _this4.topicName + " " + "created successfully"
                    });

                    _this4.navigateTo("studentForm");

                    _this4.clearOnlineSchedulesObject();
                  } else {
                    _this4.appC.popToast({
                      type: "error",
                      body: data.message
                    });
                  }
                }, function (error) {
                  _this4.auth.hideLoader(); // this.clearOnlineSchedulesObject() ;


                  _this4.facultyId = [];
                  _this4.custUserIds = [];
                  _this4.studentsId = [];

                  _this4.appC.popToast({
                    type: "error",
                    body: error.error.message
                  });
                });
              }
            }
          }, {
            key: "clearOnlineSchedulesObject",
            value: function clearOnlineSchedulesObject() {
              this.addOnlineClass = {
                custUserIds: [],
                end_datetime: "",
                institution_id: this.institution_id,
                sent_notification_flag: 0,
                session_name: "",
                start_datetime: "",
                studentIds: [],
                teacherIds: [],
                product_ids: [],
                eLearnCustUserIDs: [],
                private_access: false,
                access_enable_lobby: false,
                access_enable_breakout_rooms: false,
                access_before_start: 0,
                batch_list: null,
                course_list: null,
                host_video: false,
                participant_video: false,
                join_before_host: false,
                mute_upon_entry: false,
                auto_recording: "none",
                is_zoom_live_class: false,
                hide_recording_notifications: true,
                prevent_user_count: false
              };
              this.topicName = "";
              this.product_id = "";
              this.studentsId = [];
              this.facultyId = [];
              this.scheduledateFrom = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
              this.hoursFrom = "";
              this.minuteFrom = "";
              this.hoursTo = "";
              this.minuteTo = "";
              this.courseIds = [];
              this.batchesIds = [];
              this.courseValue = [];
              this.selectedStudentList = [];
              this.selectedFacultyList = [];
              this.selectedModeratorList = [];
              this.selectedUserList = [];
              this.selectedBatchList = [];
              this.selectedCourseList = [];
              this.selectedSubjectList = [];
              this.navigateTo('classDetails');
            }
            /** this function is used to fetch teacher details */

          }, {
            key: "getTeachers",
            value: function getTeachers() {
              var _this5 = this;

              this.auth.showLoader();
              var url = "/api/v1/teachers/all/".concat(this.institution_id, "?active=Y");
              this.http_service.getData(url).subscribe(function (data) {
                _this5.teachersAssigned = data;
                console.log(_this5.teachersAssigned); // this.getCheckedBox(this.teachersAssigned);

                _this5.auth.hideLoader();
              }, function (error) {
                _this5.teachersAssigned = [];

                _this5.errorMessage(error);

                _this5.auth.hideLoader();
              });
            }
            /** this function is used to fetch customer details */

          }, {
            key: "getCustomUsers",
            value: function getCustomUsers() {
              var _this6 = this;

              this.auth.showLoader();
              var url = '/api/v1/profiles/custUsers/' + this.institution_id;
              this.http_service.getData(url).subscribe(function (data) {
                _this6.userAssigned = data;
                console.log(_this6.userAssigned); // this.getCheckedBox(this.userAssigned);

                _this6.auth.hideLoader();
              }, function (error) {
                _this6.errorMessage(error);

                _this6.userAssigned = [];

                _this6.auth.hideLoader();
              });
            }
          }, {
            key: "getBatchesCoursesIds",
            value: function getBatchesCoursesIds(ids) {
              this.selectedStudentList = [];

              if (this.isProfessional) {
                this.batchesIds = ids;
                var temp = [];
                this.batchesIds.forEach(function (element) {
                  temp.push(element.batch_id);
                });
                this.fetchStudentsApi(temp); // this.getStudents();
              } else {
                this.courseIds = ids;
                var tempData = this.courses;

                if (this.schoolModel) {
                  this.subjectList = [];
                  this.updateSubjectList(ids);
                } else {
                  var _temp = [];
                  this.courseIds.forEach(function (element) {
                    _temp.push(element.course_id);
                  });
                  this.fetchStudentsApi(_temp);
                } //End
                // this.getStudents();

              }
            }
          }, {
            key: "updateSubjectList",
            value: function updateSubjectList(event) {
              var _this7 = this;

              console.log(event);
              this.subjectList = [];

              if (event && event.length) {
                var course_id = Array.prototype.map.call(event, function (item) {
                  return item.course_id;
                }).join(",");
                var url = "/api/v1/subjects/course?courseIds=" + course_id;
                this.auth.showLoader();
                this.http_service.getData(url).subscribe(function (res) {
                  _this7.auth.hideLoader();

                  _this7.subjectList = res.result;

                  if (_this7.subjectList && _this7.subjectList.length) {
                    _this7.subjectList.forEach(function (element) {
                      element.subject_name = element.course_name + ' - ' + element.subject_name;

                      if (element.is_optional == 'Y') {
                        element.subject_name = element.subject_name + ' (Optional)';
                      }
                    });
                  }
                }, function (err) {
                  _this7.msgService.showErrorMessage('error', '', err.error.message);

                  _this7.auth.hideLoader(); //console.log(err);

                });
              }
            }
          }, {
            key: "getStudentsBySubject",
            value: function getStudentsBySubject(obj) {
              console.log(obj);

              if (obj && obj.length) {
                var temp = [];
                obj.forEach(function (element) {
                  temp.push(element.batch_id);
                });
                this.fetchStudentsApi(temp);
              }
            }
          }, {
            key: "getBatchesCourses",
            value: function getBatchesCourses() {
              var _this8 = this;

              this.auth.showLoader();

              if (this.isProfessional) {
                var url = '';

                if (this.userType === '3') {
                  url = '/api/v1/batches/all/' + this.institution_id + '?active=Y' + '&isTeacher=true&isActiveNotExpire=Y';
                } else {
                  url = '/api/v1/batches/all/' + this.institution_id + '?active=Y&isActiveNotExpire=Y';
                }

                this.http_service.getData(url).subscribe(function (data) {
                  _this8.batches = data;

                  if (_this8.batches && !_this8.batches.length) {
                    _this8.appC.popToast({
                      type: "error",
                      body: "Please check batches are active or not."
                    });
                  }

                  console.log(_this8.batches);

                  _this8.auth.hideLoader();
                }, function (error) {
                  _this8.auth.hideLoader();

                  _this8.errorMessage(error);
                });
              } else {
                var _url = '';

                if (this.schoolModel) {
                  _url = "/api/v1/courseMaster/master-course-list/" + sessionStorage.getItem("institute_id") + "?is_standard_wise=true&sorted_by=course_name&is_active_not_expire=Y";
                } else if (this.userType === '3') {
                  _url = '/api/v1/courseMaster/fetch/' + this.institution_id + '/all' + '?isAllCourses=N&isActiveNotExpire=Y'; //Changed isAllCourses flay Y to N as per ticket 1103
                } else {
                  _url = '/api/v1/courseMaster/fetch/' + this.institution_id + '/all?isActiveNotExpire=Y';
                }

                this.http_service.getData(_url).subscribe(function (data) {
                  _this8.fullResponse = data.result;
                  _this8.masters = _this8.schoolModel ? Object.keys(data.result) : data;

                  if (_this8.masters && !_this8.masters.length) {
                    _this8.appC.popToast({
                      type: "error",
                      body: "Please check courses are active or not."
                    });
                  }

                  _this8.auth.hideLoader();
                }, function (error) {
                  console.log(error);

                  _this8.errorMessage(error);

                  _this8.auth.hideLoader();
                });
              }
            } // Removed the previous API call as their is not need to call one more api to fetch courselist. It already coming in master course
            // api. Added By ashwini kumar gupta

          }, {
            key: "getCourses",
            value: function getCourses(master_course_name) {
              this.selectedCourseList = [];
              this.selectedSubjectList = [];
              this.courses = [];
              var tempData = this.masters;

              if (this.schoolModel) {
                var temp = this.fullResponse[master_course_name];

                for (var i = 0; i < temp.length; i++) {
                  this.courses.push(temp[i]);
                }
              } else {
                for (var _i = 0; _i < tempData.length; _i++) {
                  for (var j = 0; j < master_course_name.length; j++) {
                    if (tempData[_i].master_course === master_course_name[j].master_course) {
                      console.log(tempData[_i].coursesList);

                      for (var k = 0; k < tempData[_i].coursesList.length; k++) {
                        this.courses.push(tempData[_i].coursesList[k]);
                      }
                    }
                  }
                }
              } //End

            } // End

          }, {
            key: "getStudents",
            value: function getStudents() {
              this.studentList = [];
              var str = [];

              if (this.isProfessional) {
                // this.batchesIds.map(
                //   (ele: any) => {
                //     let x = ele.toString();
                //     str.push(x);
                //   }
                // )
                this.fetchStudentsApi(this.batchesIds);
              } else {
                // this.courseIds.map(
                //   (ele: any) => {
                //     let x = ele.toString();
                //     str.push(x);
                //   }
                // )
                this.fetchStudentsApi(this.courseIds);
              }
            }
          }, {
            key: "fetchStudentsApi",
            value: function fetchStudentsApi(courseArray) {
              var _this9 = this;

              this.getPayloadBatch.coursesArray = courseArray;
              var url = '/api/v1/courseMaster/onlineClass/fetch/users';
              this.auth.showLoader();
              this.http_service.postData(url, this.getPayloadBatch).subscribe(function (data) {
                _this9.studentList = data.studentsAssigned; // this.getCheckedBox(this.studentsAssigned);

                _this9.auth.hideLoader();
              }, function (error) {
                _this9.auth.hideLoader();

                _this9.errorMessage(error);
              });
            }
          }, {
            key: "errorMessage",
            value: function errorMessage(error) {
              this.appC.popToast({
                type: "error",
                body: error.error.message
              });
            }
            /* Function to navigate on icon click */

          }, {
            key: "switchToView",
            value: function switchToView(id) {
              switch (id) {
                case "class-icon":
                  {
                    this.navigateTo("classDetails");
                    break;
                  }

                case "assignStudent-icon":
                  {
                    this.navigateTo("assignStudent");
                    break;
                  }

                default:
                  {
                    this.navigateTo("classDetails");
                    break;
                  }
              }
            }
            /* Function to navigate through the Student Add Form on button Click Save/Submit*/

          }, {
            key: "navigateTo",
            value: function navigateTo(text) {
              if (text === "classDetails") {
                if (this.class_id == 0 || this.class_id == null) {
                  document.getElementById('li-one').classList.add('active');
                  document.getElementById('li-two').classList.remove('active');
                  this.isBasicActive = true;
                  this.isOtherActive = false;
                } else {
                  var msg = {
                    type: 'info',
                    title: 'Live Class Details Already Saved',
                    body: ''
                  };
                  this.appC.popToast(msg);
                }
              } else if (text === "assignStudent") {
                if (this.class_id == 0 || this.class_id == null) {
                  document.getElementById('li-one').classList.remove('active');
                  document.getElementById('li-two').classList.add('active');
                  this.isBasicActive = false;
                  this.isOtherActive = true;
                  this.getBatchesCourses();
                } else {
                  var _msg = {
                    type: 'info',
                    title: 'Live Class Details Already Saved',
                    body: ''
                  };
                  this.appC.popToast(_msg);
                }
              }
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this.router.navigateByUrl('/view/live-classes');
            }
          }, {
            key: "openCalendar",
            value: function openCalendar(id) {
              document.getElementById(id).click();
            }
          }]);

          return AddClassComponent;
        }();

        AddClassComponent.ctorParameters = function () {
          return [{
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
          }, {
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }];
        };

        AddClassComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-add-class',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./add-class.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/add-class/add-class.component.html"))["default"],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [__importDefault(__webpack_require__(
          /*! ./add-class.component.scss */
          "./src/app/components/live-classes-module/add-class/add-class.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _services_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"], _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], ___WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]])], AddClassComponent);
        return AddClassComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/live-classes-module/attendance-report/attendance-report.component.scss":
    /*!***************************************************************************************************!*\
      !*** ./src/app/components/live-classes-module/attendance-report/attendance-report.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLiveClassesModuleAttendanceReportAttendanceReportComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "html {\n  overflow-y: scroll;\n}\n\n.disabled {\n  color: #000;\n  font-weight: bold;\n  cursor: not-allowed;\n}\n\n.middle-section {\n  padding: 1%;\n}\n\n.border-container {\n  border-top: 1px solid #e3e3e3;\n}\n\n.normal-btn {\n  padding: 4px 10px;\n  box-sizing: border-box;\n  float: right;\n  margin-top: -18px;\n  background: #0084f6;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.header-container {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n  border-top: 1px solid #ccc;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 10px 0;\n  margin-bottom: 0;\n}\n\n.header-container .header-item {\n  display: flex;\n  flex-direction: row;\n  width: 23%;\n  padding: 0.5em;\n}\n\n.header-container .header-item .header-title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #878383;\n}\n\n.header-container .header-item .header-value {\n  margin-left: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.search-bar-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.search-bar-container .search-box {\n  border-radius: 4px;\n  border: 1px solid #b4b6bd;\n  width: 100%;\n  line-height: 30px;\n  padding: 0 10px;\n  font-size: 12px;\n}\n\n.search-bar-container .field-wrapper {\n  position: relative;\n  padding-top: 0;\n}\n\n.table-container .sm-item {\n  width: 10%;\n}\n\n.table-container .md-item {\n  width: 18%;\n}\n\n.table-container .partially {\n  color: #ff6c24;\n}\n\n.table-container .absent {\n  color: red;\n}\n\n.table-container .present {\n  color: #00b55a;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.table-container .table-heading-container {\n  background: #e0eaec;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  border-bottom: 1px solid #ccc;\n}\n\n.table-container .table-heading-container .table-heading-item {\n  color: #585574;\n  font-weight: 600;\n  font-size: 12px;\n  padding: 0px 5px;\n}\n\n.table-container .table-value-outer-container {\n  height: 58vh;\n  overflow-y: auto;\n}\n\n.table-container .table-value-container {\n  min-height: 34px;\n  display: flex;\n  flex-direction: row;\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 10px;\n  padding: 5px 0px;\n  position: relative;\n}\n\n.table-container .table-value-container .table-value-item {\n  color: #585574;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  padding: 0px 5px;\n  word-break: break-all;\n}\n\n.table-container .small {\n  width: 15%;\n  font-size: 12px;\n}\n\n.table-container .medium {\n  width: 17%;\n  font-size: 12px;\n}\n\n.table-container .large {\n  width: 30%;\n  font-size: 12px;\n}\n\n.table-container .action {\n  width: 10%;\n  position: absolute;\n  right: 0px;\n}\n\n.table-container .product_List_Container {\n  color: #ffffff;\n  border-radius: 4px;\n  border: 1px solid #ffffff;\n  background: #8d8d8d;\n  cursor: default;\n  padding: 2px 10px;\n  width: 95px;\n  font-weight: 600;\n}\n\n.table-container .partially-border {\n  border-left: 5px solid #ff6c24;\n}\n\n.table-container .absent-border {\n  border-left: 5px solid #df0d2f;\n}\n\n.table-container .present-border {\n  border-left: 5px solid #00b55a;\n}\n\n.table-container .illustration-container {\n  display: block;\n}\n\n.table-container .illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 12%;\n  margin-top: -2%;\n}\n\n.qInfoIcon {\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n\n.tooltip-box-field {\n  width: 115px;\n  min-height: 41px;\n  line-height: 18px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  font-weight: bold;\n}\n\n.dd-list-container {\n  position: absolute;\n  border: 1px solid rgba(119, 119, 119, 0.29);\n  z-index: 1000;\n  min-width: 155px;\n  margin-left: -60px;\n  height: auto;\n  background: white;\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.611765);\n}\n\n.actions-menu {\n  list-style-type: none;\n  padding-left: 0;\n  margin-top: 0;\n  padding: 5px;\n}\n\n.actions-menu a {\n  color: black;\n}\n\n.actions-menu .action-item {\n  padding: 5px 10px;\n  background: white;\n  cursor: pointer;\n}\n\n.actions-menu .action-item img {\n  max-width: 100%;\n  height: auto;\n  margin-right: 8px;\n}\n\n.actions-menu .action-item:hover {\n  background: #eff1f5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXZlLWNsYXNzZXMtbW9kdWxlL2F0dGVuZGFuY2UtcmVwb3J0L2F0dGVuZGFuY2UtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFFdkI7O0FBQUE7RUFDRSxXQUFXO0FBR2I7O0FBREE7RUFDRSw2QkFBNkI7QUFJL0I7O0FBRkE7RUFDRSxpQkFBaUI7RUFFakIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBS3BCOztBQUZBO0VBQ0Usb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0FBS2xCOztBQWZBO0VBWUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsY0FBYztBQU9sQjs7QUF0QkE7RUFpQk0sZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBU3BCOztBQTVCQTtFQXNCTSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQVV0Qjs7QUFMQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFRM0I7O0FBVkE7RUFJSSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7QUFVbkI7O0FBbkJBO0VBWUksa0JBQWtCO0VBQ2xCLGNBQWM7QUFXbEI7O0FBTkE7RUFFSSxVQUFVO0FBUWQ7O0FBVkE7RUFLSSxVQUFVO0FBU2Q7O0FBZEE7RUFRSSxjQUFjO0FBVWxCOztBQWxCQTtFQVdJLFVBQVU7QUFXZDs7QUF0QkE7RUFjSSxjQUFjO0FBWWxCOztBQVBBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FBVWxCOztBQWRBO0VBTUksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQVlqQzs7QUF6QkE7RUFlSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFjcEI7O0FBaENBO0VBd0JFLFlBQVk7RUFDWixnQkFBZ0I7QUFZbEI7O0FBckNBO0VBNEJJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBYXRCOztBQWpEQTtFQXNDTSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFFaEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBYzNCOztBQTVEQTtFQWtESSxVQUFVO0VBQ1YsZUFBZTtBQWNuQjs7QUFqRUE7RUFzREksVUFBVTtFQUNWLGVBQWU7QUFlbkI7O0FBdEVBO0VBMERJLFVBQVU7RUFDVixlQUFlO0FBZ0JuQjs7QUEzRUE7RUE4REksVUFBVTtFQUNWLGtCQUFrQjtFQUVsQixVQUFVO0FBZ0JkOztBQWpGQTtFQXFFSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0FBZ0JwQjs7QUE1RkE7RUFnRkksOEJBQThCO0FBZ0JsQzs7QUFoR0E7RUFtRkksOEJBQThCO0FBaUJsQzs7QUFwR0E7RUFzRkksOEJBQThCO0FBa0JsQzs7QUF4R0E7RUEyRkUsY0FBYztBQWlCaEI7O0FBNUdBO0VBNkZJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtBQW1CbkI7O0FBZEE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsV0FBVztFQUNYLDJCQUEyQjtBQWlCN0I7O0FBZEE7RUFDRSxZQUFZO0VBRVosZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7QUFnQm5COztBQWRBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUUzQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1EQUE0RDtBQWdCOUQ7O0FBWkE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0FBZWQ7O0FBbkJBO0VBTUksWUFBWTtBQWlCaEI7O0FBdkJBO0VBU00saUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0FBa0JyQjs7QUE3QkE7RUFhVSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQW9CM0I7O0FBbkNBO0VBa0JVLG1CQUFtQjtBQXFCN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpdmUtY2xhc3Nlcy1tb2R1bGUvYXR0ZW5kYW5jZS1yZXBvcnQvYXR0ZW5kYW5jZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmRpc2FibGVkIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLm1pZGRsZS1zZWN0aW9ue1xuICBwYWRkaW5nOiAxJTtcbn1cbi5ib3JkZXItY29udGFpbmVye1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTNlMztcbn1cbi5ub3JtYWwtYnRuIHtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMThweDtcbiAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lcntcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLmhlYWRlci1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMjMlO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIC5oZWFkZXItdGl0bGV7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM4NzgzODM7XG4gICAgfVxuICAgIC5oZWFkZXItdmFsdWV7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cbn1cblxuLnNlYXJjaC1iYXItY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAuc2VhcmNoLWJveHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjZiZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG59XG5cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIC5zbS1pdGVte1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgLm1kLWl0ZW17XG4gICAgd2lkdGg6IDE4JTtcbiAgfVxuICAucGFydGlhbGx5e1xuICAgIGNvbG9yOiAjZmY2YzI0O1xuICB9XG4gIC5hYnNlbnR7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICAucHJlc2VudHtcbiAgICBjb2xvcjogIzAwYjU1YTtcbiAgfVxufVxuXG5cbi50YWJsZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAudGFibGUtaGVhZGluZy1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgLnRhYmxlLWhlYWRpbmctaXRlbXtcbiAgICBjb2xvcjogIzU4NTU3NDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4udGFibGUtdmFsdWUtb3V0ZXItY29udGFpbmVye1xuICBoZWlnaHQ6IDU4dmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4gIC50YWJsZS12YWx1ZS1jb250YWluZXJ7XG4gICAgbWluLWhlaWdodDogMzRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC50YWJsZS12YWx1ZS1pdGVte1xuICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxuICB9XG4gIC5zbWFsbHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAubWVkaXVte1xuICAgIHdpZHRoOiAxNyU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5sYXJnZXtcbiAgICB3aWR0aDogMzAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuYWN0aW9ue1xuICAgIHdpZHRoOiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICByaWdodDogMHB4O1xuICB9XG5cbiAgLnByb2R1Y3RfTGlzdF9Db250YWluZXJ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogIzhkOGQ4ZDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgd2lkdGg6IDk1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC5wYXJ0aWFsbHktYm9yZGVye1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmNmMyNDtcbiAgfVxuICAuYWJzZW50LWJvcmRlcntcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNkZjBkMmY7XG4gIH1cbiAgLnByZXNlbnQtYm9yZGVye1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwYjU1YTtcbiAgfVxuXG4gIFxuLmlsbHVzdHJhdGlvbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAuaWxsdXN0cmF0aW9uLWltZ3tcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMiU7XG4gICAgbWFyZ2luLXRvcDogLTIlO1xuXG4gIH1cbn1cbn1cbi5xSW5mb0ljb24ge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICNjY2MgaW5zZXQ7XG4gIGNvbG9yOiAjODg4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG5cbi50b29sdGlwLWJveC1maWVsZCB7XG4gIHdpZHRoOiAxMTVweDtcbiAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLWhlaWdodDogNDFweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRkLWxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuMjkpO1xuICAvLyByaWdodDogMyUgIWltcG9ydGFudDsgLy90aGlzIGNzcyBzZXQgcG9zdGlvbiBmcm9tIHJpZ2h0IHNpZGUgdGhhdHMgd2h5IGl0cyByZW1vdmVkICBcbiAgei1pbmRleDogMTAwMDtcbiAgbWluLXdpZHRoOiAxNTVweDtcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYxMTc2NDcwNTg4MjM1Myk7XG4gIC5kcm9wZG93bi1saXN0IHt9XG59XG5cbi5hY3Rpb25zLW1lbnUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZzogNXB4O1xuICBhe1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAuYWN0aW9uLWl0ZW0ge1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmYxZjU7XG4gICAgICB9XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/live-classes-module/attendance-report/attendance-report.component.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/live-classes-module/attendance-report/attendance-report.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: AttendanceReportComponent */

    /***/
    function srcAppComponentsLiveClassesModuleAttendanceReportAttendanceReportComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttendanceReportComponent", function () {
        return AttendanceReportComponent;
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
      /*! ../../.. */
      "./src/app/index.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");

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

      var AttendanceReportComponent =
      /** @class */
      function () {
        var AttendanceReportComponent = /*#__PURE__*/function () {
          function AttendanceReportComponent(auth, router, appC, route, http_service, msgService, excelService) {
            _classCallCheck(this, AttendanceReportComponent);

            this.auth = auth;
            this.router = router;
            this.appC = appC;
            this.route = route;
            this.http_service = http_service;
            this.msgService = msgService;
            this.excelService = excelService;
            this.isProfessional = false;
            this.institution_id = sessionStorage.getItem('institution_id');
            this.invited_attendance_list = [];
            this.guest_attendance_list = [];
            this.attendance_list = [];
            this.temp_attendance_list = [];
            this.searchInput = '';
            this.tableSetting = {
              keys: [{
                primaryKey: 'display_id',
                header: 'Id'
              }, {
                primaryKey: 'name',
                header: 'Name'
              }, {
                primaryKey: 'phone',
                header: 'Contact No.'
              }, {
                primaryKey: 'attendance_status',
                header: 'Status'
              }, {
                primaryKey: 'join_time',
                header: 'Start Time'
              }, {
                primaryKey: 'leave_join',
                header: 'End Time'
              }, {
                primaryKey: 'duration',
                header: 'Duration'
              }]
            };
          }

          _createClass(AttendanceReportComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this10 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this10.isProfessional = true;
                } else {
                  _this10.isProfessional = false;
                }
              });
              this.session_id = this.route.snapshot.paramMap.get('id'); // this.setDemoData()

              this.getLiveClassAttendanceReport();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              sessionStorage.removeItem('live_meeting_with');
            }
          }, {
            key: "back",
            value: function back() {
              sessionStorage.setItem('pastClass', 'true');
              this.router.navigateByUrl("/view/live-classes");
            }
          }, {
            key: "getLiveClassAttendanceReport",
            value: function getLiveClassAttendanceReport() {
              var _this11 = this;

              var obj = {
                "session_id": this.session_id,
                "sort_by": "name",
                "order": "ASC"
              };

              if (sessionStorage.getItem('live_meeting_with') == 'Zoom') {
                obj.zoom_live_class = true;
              }

              this.auth.showLoader();
              var url = '/api/v1/meeting_manager/getAttendanceReport';
              this.http_service.postData(url, obj).subscribe(function (data) {
                console.log(data.result);

                _this11.auth.hideLoader();

                var res = data.result;
                _this11.invited_attendance_list = res.invited_attendance_list;
                _this11.guest_attendance_list = res.guest_attendance_list;

                _this11.guest_attendance_list.forEach(function (elem) {
                  elem.isInvited = true;
                });

                _this11.attendance_list = _this11.invited_attendance_list.concat(_this11.guest_attendance_list); // this.attendance_list = arr.sort((a, b) => a.name.toLocaleUpperCase() < b.name.toLocaleUpperCase() ? -1 : 1);

                _this11.temp_attendance_list = _this11.attendance_list;
                _this11.session_data = res.statistics;
              }, function (error) {
                _this11.auth.hideLoader();

                _this11.appC.popToast({
                  type: "error",
                  body: error.error.message
                });
              });
            }
          }, {
            key: "searchDatabase",
            value: function searchDatabase() {
              var _this12 = this;

              this.attendance_list = this.temp_attendance_list;

              if (this.searchInput == undefined || this.searchInput == null) {
                this.searchInput = "";
              } else {
                var searchData = this.temp_attendance_list.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this12.searchInput.toLowerCase());
                  });
                });
                this.attendance_list = searchData;
              }
            }
          }, {
            key: "ExportAsExcel",
            value: function ExportAsExcel() {
              var _this13 = this;

              var arr = [];
              this.attendance_list.map(function (ele) {
                var json = {};

                _this13.tableSetting.keys.map(function (keys) {
                  json[keys.header] = ele[keys.primaryKey];
                });

                arr.push(json);
              });
              this.excelService.exportAsExcelFile(arr, 'attendance_report');
            }
          }, {
            key: "selectOption",
            value: function selectOption(obj, status) {
              var _this14 = this;

              if (confirm('Are you sure, you want to mark attendance ?')) {
                var url = "/api/v1/meeting_manager/session/".concat(obj.session_id, "/attendance/").concat(obj.user_id, "?attendanceStatus=").concat(status);
                this.auth.showLoader();
                this.http_service.getData(url).subscribe(function (res) {
                  _this14.auth.hideLoader();

                  _this14.msgService.showErrorMessage('success', '', 'Attendance marked successfully');

                  _this14.getLiveClassAttendanceReport();
                }, function (err) {
                  _this14.auth.hideLoader();

                  _this14.msgService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }]);

          return AttendanceReportComponent;
        }();

        AttendanceReportComponent.ctorParameters = function () {
          return [{
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
          }];
        };

        AttendanceReportComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-attendance-report',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./attendance-report.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/attendance-report/attendance-report.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./attendance-report.component.scss */
          "./src/app/components/live-classes-module/attendance-report/attendance-report.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], ___WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])], AttendanceReportComponent);
        return AttendanceReportComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/live-classes-module/edit-class/edit-class.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/live-classes-module/edit-class/edit-class.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLiveClassesModuleEditClassEditClassComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "html {\n  overflow-y: scroll;\n}\n\n.disabled {\n  color: #000;\n  font-weight: bold;\n  cursor: not-allowed;\n}\n\n.middle-section {\n  padding: 1%;\n}\n\n.border-container {\n  border-top: 1px solid #e3e3e3;\n}\n\n.student-tab .nav-tab {\n  margin-left: 35%;\n}\n\n.made-out {\n  border: 1px solid #efefef;\n  text-align: center;\n}\n\n.class_details_container {\n  width: 85%;\n  margin: 0px auto;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);\n  padding: 30px;\n  margin-bottom: 20px;\n  padding-top: 0;\n}\n\n.class_details_container .field-wrapper {\n  margin-top: 10px;\n  border: none;\n}\n\n.class_details_container .field-wrapper #topicName {\n  width: 45%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n}\n\n.class_details_container .field-wrapper #faculty, .class_details_container .field-wrapper #moderator {\n  width: 40%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n}\n\n.class_details_container .field-wrapper {\n  position: relative;\n}\n\n.class_details_container .field-wrapper.datePickerBox .form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n\n.class_details_container .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/endar.svg) no-repeat;\n  position: absolute;\n  left: 55px;\n  top: 10px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.class_details_container .faculty_container, .class_details_container .moderator_container {\n  width: 45%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  font-size: 14px;\n}\n\n.class_details_container .faculty_container label, .class_details_container .moderator_container label {\n  margin-bottom: 5px;\n}\n\n.class_details_container .field-wrapper-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.class_details_container .field-wrapper-container .from {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.class_details_container .field-wrapper-container .from #from1, .class_details_container .field-wrapper-container .from #to1 {\n  width: 40%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  height: 36px;\n  border: none;\n  font-size: 12px;\n}\n\n.class_details_container .field-wrapper-container .from #from2, .class_details_container .field-wrapper-container .from #to2 {\n  width: 30%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  height: 36px;\n  border: none;\n  font-size: 12px;\n}\n\n.class_details_container .field-wrapper-container #date {\n  width: 70%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  border: none;\n  font-size: 12px;\n}\n\n.field-radio-wrapper {\n  width: 20% !important;\n  padding-left: 15px !important;\n}\n\n.field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  background: #0084f6;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n}\n\n.field-radio-wrapper label {\n  margin-left: 10px;\n}\n\n.multiselect-dropdown {\n  font-size: 12px;\n}\n\n.multiselect-dropdown .dropdown-down {\n  border-top: 5px solid black;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.multiselect-dropdown .dropdown-up {\n  border-bottom: 5px solid black;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.multiselect-dropdown .dropdown-btn {\n  border: none !important;\n  padding-left: 0px !important;\n}\n\n.multiselect-dropdown .dropdown-btn .selected-item {\n  border: none !important;\n  background: none !important;\n  color: #9E9E9E !important;\n  box-shadow: none !important;\n}\n\n.multiselect-dropdown .dropdown-btn .selected-item a {\n  color: #337ab7 !important;\n}\n\n.multiselect-dropdown .dropdown-btn span {\n  font-size: 12px;\n}\n\n.multiselect-dropdown .disabled > span {\n  background-color: #eceeef;\n  pointer-events: none;\n}\n\n.action-button-container {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.action-button-container .action-btn-item-1 {\n  width: 20%;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.action-button-container .action-btn-item-1 .back-btn {\n  border: 1px solid #1283f4;\n  text-align: center;\n  color: #1283f4;\n  width: 80px;\n  height: 35px;\n  border-radius: 4px;\n  background: white;\n}\n\n.action-button-container .action-btn-item-2 {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.action-button-container .action-btn-item-2 .cancel-btn {\n  border: 1px solid #f41212;\n  text-align: center;\n  color: #f41212;\n  width: 100px;\n  height: 35px;\n  border-radius: 4px;\n  background: white;\n}\n\n.action-button-container .action-btn-item-2 .next-btn {\n  border: 1px solid #1283f4;\n  text-align: center;\n  background: #1283f4;\n  color: white;\n  width: 100px;\n  height: 35px;\n  border-radius: 4px;\n}\n\n.add_student_container {\n  width: 60%;\n  margin-left: 20%;\n  margin-right: 20%;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);\n  padding: 30px;\n  margin-bottom: 20px;\n}\n\n.add_student_container .field-wrapper {\n  margin-top: 10px;\n}\n\n.add_student_container .field-wrapper #master_course, .add_student_container .field-wrapper #course, .add_student_container .field-wrapper #batch {\n  width: 45%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n}\n\n.add_student_container .student_list_container {\n  width: 85%;\n  border-radius: 4px;\n  margin-top: 5px;\n  border-color: #c5c5cc;\n  font-size: 14px;\n}\n\n.add_student_container .student_list_container label {\n  margin-bottom: 5px;\n}\n\n@media screen and (max-width: 2000px) and (min-width: 1400px) {\n  .field-wrapper.datePickerBox:after {\n    content: '';\n    right: 65px !important;\n  }\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n.field-checkbox-wrapper, .field-radio-wrapper {\n  position: relative;\n  padding-left: 25px;\n  width: 33%;\n}\n\n.qInfoIcon {\n  width: 17px;\n  margin-left: 4px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n\n.tooltip-box-field {\n  white-space: nowrap;\n  min-height: 41px;\n  line-height: 12px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  font-weight: bold;\n  top: 30px;\n  width: 140px;\n}\n\n.tooltip-box-field.lg {\n  width: 200px;\n  white-space: nowrap;\n  min-height: 50px;\n  line-height: 20px;\n  padding: 5px 5px;\n}\n\n.tooltip-box-field.sm {\n  width: 100px;\n  white-space: nowrap;\n  min-height: 40px;\n  padding: 5px 5px;\n}\n\n.AdvanceSetting {\n  position: relative;\n  margin-top: 5px;\n  padding-top: 10px;\n}\n\n.AdvanceSetting span {\n  background-color: white;\n  padding-right: 10px;\n  padding-left: 5px;\n  margin-left: 10px;\n  color: #4D5869;\n  cursor: pointer;\n}\n\n.AdvanceSetting:after,\n.AdvanceSetting:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: .5em;\n  border-top: 1px solid #ccc;\n  z-index: -1;\n}\n\n.AdvanceSettingDiv {\n  margin-top: -1%;\n  padding-bottom: 5%;\n  margin-bottom: 1%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.AdvanceSettingDiv label {\n  font-weight: 400;\n  font-size: 12px !important;\n}\n\n.advance-setting-item {\n  display: flex;\n  justify-content: flex-start;\n  margin: 5px;\n  margin-top: 20px;\n  margin-left: 10px;\n  width: 30%;\n}\n\n.zoomMsgSection {\n  width: 18%;\n  float: left;\n  margin: 0;\n  margin-left: 10px;\n  padding: 15px;\n}\n\n#zoomFAQ .modal-dialog {\n  width: 800px;\n}\n\n#zoomFAQ .modal-body {\n  height: 450px;\n  overflow-y: auto;\n}\n\n#zoomFAQ ul, #zoomFAQ ol {\n  list-style-type: decimal;\n  padding-left: 20px;\n  margin-top: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n#zoomFAQ ul li, #zoomFAQ ol li {\n  margin-bottom: 5px;\n}\n\n#zoomFAQ ul {\n  color: gray;\n  list-style-type: disc;\n}\n\n#zoomFAQ .new-modules-list {\n  margin-bottom: 20px;\n}\n\n#zoomFAQ .module-title {\n  text-transform: uppercase;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n\n#zoomFAQ .module-title span {\n  background: #00b55a;\n  padding: 5px 20px;\n  color: white;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.addClassHeader {\n  background: #FBF9F9;\n  border-radius: 0px 0px 20px 20px;\n  width: 190px;\n  padding: 8px;\n  font-size: 14px;\n  float: left;\n  text-align: center;\n}\n\nlabel {\n  color: #4D5869 !important;\n  font-weight: 600;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.select {\n  padding-left: 10px;\n  min-width: 60px;\n  border: 1px solid #ccc !important;\n  border-radius: 4px !important;\n  box-sizing: border-box !important;\n  font-size: 13px !important;\n  font-weight: 500 !important;\n  color: #787A7D !important;\n  height: 35px;\n}\n\n.input {\n  padding: 7px 20px !important;\n  font-size: 13px !important;\n  border: 1px solid #ccc !important;\n  border-radius: 4px !important;\n  box-sizing: border-box !important;\n  font-weight: 500 !important;\n  height: 35px !important;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.input-date, input[type=\"date\"]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  background-position: 90% center;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXZlLWNsYXNzZXMtbW9kdWxlL2VkaXQtY2xhc3MvZWRpdC1jbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztBQUViOztBQUFBO0VBQ0UsNkJBQTZCO0FBRy9COztBQUFBO0VBRUksZ0JBQWdCO0FBRXBCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFHaEIsNENBQTRDO0VBQzVDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztBQURoQjs7QUFQQTtFQVVJLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2hCOztBQVpBO0VBYU0sVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0FBRzNCOztBQW5CQTtFQW1CTSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUFJM0I7O0FBMUJBO0VBMEJNLGtCQUFrQjtBQUl4Qjs7QUE5QkE7RUE2QmMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdUJBQXVCO0FBS3JDOztBQXJDQTtFQW1DYyxXQUFXO0VBQ1gscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQU14Qjs7QUFoREE7RUErQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7QUFLbkI7O0FBeERBO0VBcURNLGtCQUFrQjtBQU94Qjs7QUE1REE7RUF5REksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBT2Y7O0FBbEVBO0VBOERNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJB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c3Nlcy1tb2R1bGUvZWRpdC1jbGFzcy9lZGl0LWNsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmRpc2FibGVkIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLm1pZGRsZS1zZWN0aW9ue1xuICBwYWRkaW5nOiAxJTtcbn1cbi5ib3JkZXItY29udGFpbmVye1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTNlMztcbn1cblxuLnN0dWRlbnQtdGFie1xuICAubmF2LXRhYntcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xuICB9XG59XG5cbi5tYWRlLW91dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNsYXNzX2RldGFpbHNfY29udGFpbmVye1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICAvL21hcmdpbi1sZWZ0OiAyMCU7XG4gIC8vbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgLmZpZWxkLXdyYXBwZXJ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgI3RvcGljTmFtZXtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBib3JkZXItY29sb3I6ICNjNWM1Y2M7XG4gICAgfVxuICAgICNmYWN1bHR5LCAjbW9kZXJhdG9ye1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGJvcmRlci1jb2xvcjogI2M1YzVjYztcbiAgICB9XG4gIH1cbiAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1hZ2VzL2VuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDU1cHg7XG4gICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgLmZhY3VsdHlfY29udGFpbmVyLCAubW9kZXJhdG9yX2NvbnRhaW5lcntcbiAgICB3aWR0aDogNDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjYzVjNWNjO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsYWJlbHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gIH1cbiAgLmZpZWxkLXdyYXBwZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmZyb217XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICNmcm9tMSwgI3RvMXtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2M1YzVjYztcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICAgICNmcm9tMiwgI3RvMntcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2M1YzVjYztcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgI2RhdGV7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYzVjNWNjO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICB9XG59XG5cbi5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgICAuZm9ybS1yYWRpbzpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGxlZnQ6IDNweDtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxufVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd257XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLmRyb3Bkb3duLWRvd257XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmRyb3Bkb3duLXVwe1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG4gIC5kcm9wZG93bi1idG4ge1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLnNlbGVjdGVkLWl0ZW0ge1xuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzlFOUU5RSAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMzM3YWI3ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kaXNhYmxlZCA+IHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWVmO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFjdGlvbi1idXR0b24tY29udGFpbmVye1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICAuYWN0aW9uLWJ0bi1pdGVtLTF7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAuYmFjay1idG57XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTI4M2Y0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMxMjgzZjQ7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbiAgfVxuICAuYWN0aW9uLWJ0bi1pdGVtLTJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5jYW5jZWwtYnRue1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y0MTIxMjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZjQxMjEyO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgIC5uZXh0LWJ0bntcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTI4M2Y0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi5hZGRfc3R1ZGVudF9jb250YWluZXJ7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIG1hcmdpbi1yaWdodDogMjAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAuZmllbGQtd3JhcHBlcntcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAjbWFzdGVyX2NvdXJzZSwgI2NvdXJzZSwgI2JhdGNoe1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYzVjNWNjO1xuICAgICAgfVxuICAgIH1cbiAgICAuc3R1ZGVudF9saXN0X2NvbnRhaW5lcntcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBib3JkZXItY29sb3I6ICNjNWM1Y2M7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsYWJlbHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KSBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICYuZGF0ZVBpY2tlckJveCB7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICByaWdodDogNjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4uYmxhY2stYmd7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIsIDExLCAxMSwgMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDY7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIsIC5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHdpZHRoOiAzMyU7XG59XG5cbi5xSW5mb0ljb24ge1xuICB3aWR0aDogMTdweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICNjY2MgaW5zZXQ7XG4gIGNvbG9yOiAjODg4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICY6aG92ZXIge1xuICAgICAgLy8gYm9yZGVyLWNvbG9yOiAkaGVhZGVyLWJnO1xuICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICRoZWFkZXItYmcgaW5zZXQ7XG4gICAgICAvLyBjb2xvcjogJGhlYWRlci1iZztcbiAgfVxufVxuXG4udG9vbHRpcC1ib3gtZmllbGQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4taGVpZ2h0OiA0MXB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRvcDogMzBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICAmLmxnIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICB9XG4gICYuc20ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICB9XG59XG5cbi5BZHZhbmNlU2V0dGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLkFkdmFuY2VTZXR0aW5nIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzRENTg2OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uQWR2YW5jZVNldHRpbmc6YWZ0ZXIsXG4uQWR2YW5jZVNldHRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IC41ZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICB6LWluZGV4OiAtMTtcbn1cbi5BZHZhbmNlU2V0dGluZ0RpdiB7XG4gIC8vIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbi10b3A6IC0xJTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYWR2YW5jZS1zZXR0aW5nLWl0ZW17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luOjVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAzMCVcbn1cbi56b29tTXNnU2VjdGlvbntcbiAgd2lkdGg6IDE4JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4jem9vbUZBUXtcbiAgLm1vZGFsLWRpYWxvZ3tcbiAgICAgd2lkdGg6IDgwMHB4O1xuICAgfVxuICAgLm1vZGFsLWJvZHl7XG4gICAgIGhlaWdodDogNDUwcHg7XG4gICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICB9XG4gICB1bCwgb2wge1xuICAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgIGxpe1xuICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgfVxuICAgfVxuICAgdWx7XG4gICAgIGNvbG9yOiBncmF5O1xuICAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gICB9XG4gICAubmV3LW1vZHVsZXMtbGlzdHtcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgIH1cbiAgIC5tb2R1bGUtdGl0bGV7XG4gICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICBzcGFue1xuICAgICAgIGJhY2tncm91bmQ6ICMwMGI1NWE7XG4gICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgIH1cbiAgIH1cbiB9XG4gLmFkZENsYXNzSGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI0ZCRjlGOTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XG4gIHdpZHRoOiAxOTBweDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5sYWJlbCB7XG4gIGNvbG9yOiAjNEQ1ODY5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZmxleC1jZW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlbGVjdHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3ODdBN0QgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmlucHV0e1xuICBwYWRkaW5nOiA3cHggMjBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG5cdGhlaWdodDozNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiBcdG91dGxpbmU6IG5vbmU7XG4gfVxuIC5pbnB1dC1kYXRlLGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9jYWwuc3ZnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246OTAlIGNlbnRlcjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBwYWRkaW5nOiAycHggMHB4O1xufVxuXG5pbnB1dDpmb2N1c3tcbm91dGxpbmU6IG5vbmU7XG59XG5idXR0b246Zm9jdXN7XG5vdXRsaW5lOiBub25lO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/live-classes-module/edit-class/edit-class.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/live-classes-module/edit-class/edit-class.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: EditClassComponent */

    /***/
    function srcAppComponentsLiveClassesModuleEditClassEditClassComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditClassComponent", function () {
        return EditClassComponent;
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


      var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../.. */
      "./src/app/index.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/products.service */
      "./src/app/services/products.service.ts");

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

      var EditClassComponent =
      /** @class */
      function () {
        var EditClassComponent = /*#__PURE__*/function () {
          function EditClassComponent(auth, router, appC, route, product_service, http_service, msgService) {
            _classCallCheck(this, EditClassComponent);

            this.auth = auth;
            this.router = router;
            this.appC = appC;
            this.route = route;
            this.product_service = product_service;
            this.http_service = http_service;
            this.msgService = msgService;
            this.isProfessional = false;
            this.isBasicActive = true;
            this.isOtherActive = false;
            this.class_id = 0;
            this.hour = ['01 AM', '02 AM', '03 AM', '04 AM', '05 AM', '06 AM', '07 AM', '08 AM', '09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM', '09 PM', '10 PM', '11 PM', '12 AM'];
            this.minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
            this.selectedStudentList = [];
            this.selectedUserList = [];
            this.selectedFacultyList = [];
            this.selectedModeratorList = [];
            this.selectedCourseList = [];
            this.selectedBatchList = [];
            this.dropdownList = [];
            this.teachersAssigned = [];
            this.userAssigned = [];
            this.studentList = [];
            this.userList = [];
            this.dropdownSettings = {};
            this.facultySettings = {};
            this.moderatorSettings = {};
            this.studentListSettings = {};
            this.userListSetting = {};
            this.courseListSetting = {};
            this.batchListSetting = {};
            this.productSetting = {};
            this.masterCourseListSetting = {};
            this.subjectSetting = {};
            this.facultyId = [];
            this.custUserIds = [];
            this.studentsId = [];
            this.eLearnCustUserIDs = [];
            this.productData = [];
            this.product_id = "";
            this.isShowProductOption = false;
            this.batches = [];
            this.masters = [];
            this.courses = [];
            this.courseIds = null;
            this.batchesIds = null;
            this.courseId = [];
            this.dateTimeStatus = false;
            this.topicName = '';
            this.hoursFrom = '';
            this.minuteFrom = '';
            this.hoursTo = '';
            this.minuteTo = '';
            this.scheduledateFrom = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
            this.institution_id = sessionStorage.getItem('institution_id');
            this.username = '';
            this.getPayloadBatch = {
              inst_id: this.institution_id,
              coursesArray: [''],
              role: 'student'
            };
            this.updateOnlineClass = {
              custUserIds: [],
              end_datetime: "",
              institution_id: this.institution_id,
              sent_notification_flag: 0,
              session_name: "",
              start_datetime: "",
              studentIds: null,
              teacherIds: [],
              product_ids: [],
              eLearnCustUserIDs: [],
              private_access: false,
              access_enable_lobby: false,
              access_enable_breakout_rooms: false,
              access_before_start: 0,
              batch_list: null,
              course_list: null,
              host_video: true,
              participant_video: false,
              join_before_host: true,
              mute_upon_entry: true,
              auto_recording: "none",
              is_zoom_live_class: false,
              hide_recording_notifications: false,
              prevent_user_count: false
            }; // Zoom

            this.auto_recording = false;
            this.is_zoom_integration_enable = true;
            this.live_class_for = sessionStorage.getItem('setLiveClassType');
            this.singleSelectionOfFaculty = false;
            this.zoom_enable = false;
            this.schoolModel = false;
            this.selectedSubjectList = [];
            this.subjectList = [];
            this.fullResponse = [];
          }

          _createClass(EditClassComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this15 = this;

              this.institution_id = sessionStorage.getItem('institution_id');
              this.userType = sessionStorage.getItem('userType');
              this.username = sessionStorage.getItem('username');
              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this15.isProfessional = true;
                } else {
                  _this15.isProfessional = false;
                }
              }); // changes by Nalini - to handle school model conditions

              this.auth.schoolModel.subscribe(function (res) {
                _this15.schoolModel = false;

                if (res) {
                  _this15.schoolModel = true;
                }
              });
              var zoom = sessionStorage.getItem('is_zoom_enable');
              this.is_zoom_integration_enable = JSON.parse(zoom);
              var zoom_status = this.route.snapshot.queryParams["isZoomLiveClass"];

              if (this.is_zoom_integration_enable && zoom_status == "1") {
                this.singleSelectionOfFaculty = true;
                this.zoom_enable = true;
                this.live_class_for = "2";
                this.changeLiveClassFor();
              }

              this.setMultiSelectSetting();
              this.editSessionId = this.route.snapshot.paramMap.get('id');
              this.repeat_session = this.route.snapshot.queryParams["repeat"];
              this.getLiveClassData();
              this.checkIsEnableElearnFeature();
            }
          }, {
            key: "setMultiSelectSetting",
            value: function setMultiSelectSetting() {
              this.facultySettings = {
                singleSelection: false,
                idField: 'teacher_id',
                textField: 'teacher_name',
                itemsShowLimit: 2,
                enableCheckAll: false
              };
              this.moderatorSettings = {
                singleSelection: false,
                idField: 'userid',
                textField: 'name',
                itemsShowLimit: 2,
                enableCheckAll: false
              };
              this.studentListSettings = {
                singleSelection: false,
                idField: 'student_id',
                textField: 'student_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.userListSetting = {
                singleSelection: false,
                idField: 'user_id',
                textField: 'name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.courseListSetting = {
                singleSelection: false,
                idField: 'course_id',
                textField: 'course_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.batchListSetting = {
                singleSelection: false,
                idField: 'batch_id',
                textField: 'batch_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.productSetting = {
                singleSelection: false,
                idField: 'id',
                textField: 'title',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.masterCourseListSetting = {
                singleSelection: false,
                idField: 'master_course',
                textField: 'master_course',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
              this.subjectSetting = {
                singleSelection: false,
                idField: 'batch_id',
                textField: 'subject_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
              };
            }
          }, {
            key: "changeLiveClassFor",
            value: function changeLiveClassFor() {
              if (this.live_class_for == "2") {
                this.singleSelectionOfFaculty = true;
                this.zoom_enable = true;
                this.selectedFacultyList = [];
                this.selectedModeratorList = [];
                this.facultySettings = {
                  singleSelection: this.singleSelectionOfFaculty,
                  idField: 'teacher_id',
                  textField: 'teacher_name',
                  itemsShowLimit: 2,
                  enableCheckAll: false
                };
              } else if (this.live_class_for == "1") {
                this.singleSelectionOfFaculty = false;
                this.zoom_enable = false;
                this.selectedModeratorList = [];
                this.facultySettings = {
                  singleSelection: this.singleSelectionOfFaculty,
                  idField: 'teacher_id',
                  textField: 'teacher_name',
                  itemsShowLimit: 2,
                  enableCheckAll: false
                };
              }
            }
          }, {
            key: "checkIsEnableElearnFeature",
            value: function checkIsEnableElearnFeature() {
              var _this16 = this;

              var enable_eLearn_feature = sessionStorage.getItem('enable_eLearn_feature');

              if (enable_eLearn_feature == '1') {
                this.isShowProductOption = true;
                this.auth.showLoader();
                this.product_service.getMethod('product/get-product-list?slug=Online_Class', null).subscribe(function (data) {
                  _this16.auth.hideLoader();

                  _this16.productData = data.result;
                  console.log(_this16.productData);
                }, function (error) {
                  _this16.auth.hideLoader(); // this.clearOnlineSchedulesObject() ;


                  _this16.appC.popToast({
                    type: "error",
                    body: error.error.message
                  });
                });
              } else {
                this.isShowProductOption = false;
              }
            }
          }, {
            key: "onChangeProduct",
            value: function onChangeProduct(event) {
              var _this17 = this;

              var institute_id = sessionStorage.getItem('institute_id');

              if (institute_id != '100058' && institute_id != '100127' && institute_id != '101924') {
                this.selectedUserList = [];
              }

              var pro_id = Array.prototype.map.call(event, function (item) {
                return item.id;
              }).join(",");
              this.userList = [];
              var url = "/api/v1/meeting_manager/userDetailByProductID/".concat(institute_id, "?productIds=").concat(pro_id);
              this.auth.showLoader();
              this.http_service.getData(url).subscribe(function (data) {
                _this17.auth.hideLoader();

                _this17.userList = data;
              }, function (error) {
                _this17.auth.hideLoader();

                _this17.appC.popToast({
                  type: "error",
                  body: error.error.message
                });
              });
            }
          }, {
            key: "getLiveClassData",
            value: function getLiveClassData() {
              var _this18 = this;

              this.auth.showLoader();
              var zoom_status = 0;

              if (this.zoom_enable) {
                zoom_status = 1;
              }

              var url = '/api/v1/meeting_manager/getMeetingV2/' + this.institution_id + "/" + this.editSessionId + "?isZoomLiveClass=" + zoom_status;
              this.http_service.getData(url).subscribe(function (data) {
                console.log(data);
                _this18.editData = data;

                _this18.getBatchesCourses();

                setTimeout(function () {
                  _this18.topicName = _this18.editData.session_name;

                  if (_this18.editData.sent_notification_flag == 1) {
                    _this18.editData.sent_notification_flag = true;
                  } else {
                    _this18.editData.sent_notification_flag = false;
                  }

                  if (_this18.editData.auto_recording == "none") {
                    _this18.auto_recording = false;
                  } else if (_this18.editData.auto_recording == "local") {
                    _this18.auto_recording = true;
                  }

                  if (_this18.editData.access_before_start == 1) {
                    _this18.editData.access_before_start = true;
                  } else {
                    _this18.editData.access_before_start = false;
                  }

                  _this18.editData.access_enable_lobby = data.access_enable_lobby;
                  _this18.editData.private_access = data.private_access;
                  _this18.editData.host_video = data.host_video;
                  _this18.editData.participant_video = data.participant_video;
                  _this18.editData.join_before_host = data.join_before_host;
                  _this18.editData.mute_upon_entry = data.mute_upon_entry;

                  if (_this18.repeat_session == 0) {
                    _this18.scheduledateFrom = moment__WEBPACK_IMPORTED_MODULE_2__(_this18.editData.start_datetime).format('YYYY-MM-DD');
                    var startTime = moment__WEBPACK_IMPORTED_MODULE_2__(_this18.editData.start_datetime).format('hh:mm A');
                    var endTime = moment__WEBPACK_IMPORTED_MODULE_2__(_this18.editData.end_datetime).format('hh:mm A');
                    _this18.hoursFrom = startTime.split(':')[0] + " " + startTime.split(' ')[1];
                    _this18.minuteFrom = startTime.split(' ')[0].split(':')[1];
                    _this18.hoursTo = endTime.split(':')[0] + " " + endTime.split(' ')[1];
                    _this18.minuteTo = endTime.split(' ')[0].split(':')[1];
                  }

                  _this18.batchesIds = _this18.editData.batch_list;

                  if (_this18.editData.course_list != null && _this18.editData.course_list.length > 0) {
                    if (_this18.schoolModel) {
                      _this18.courseValue = _this18.editData.course_list[0].standard_name;
                    } else {
                      _this18.courseValue = _this18.editData.course_list;
                    }
                  }

                  _this18.getCourses(_this18.courseValue);

                  _this18.courseIds = _this18.editData.course_list;

                  if (_this18.editData.course_list != null && _this18.editData.course_list.length > 0) {
                    _this18.getCoursepreFillData();
                  }

                  if (_this18.isProfessional && _this18.editData.batch_list != null && _this18.editData.batch_list.length > 0) {
                    _this18.getBatchpreFillData();
                  }

                  _this18.getTeachers();

                  if (!_this18.zoom_enable) {
                    _this18.getCustomUsers();
                  }

                  _this18.editData.studentIDS = data.studentIDS;

                  _this18.getStudentpreFillData();

                  if (_this18.editData.product_list != null) {
                    _this18.getProductPrefillData();

                    _this18.getUserpreFillData();
                  }
                }, 5000); // this.getStudentpreFillData();
              }, function (error) {
                _this18.auth.hideLoader();

                _this18.appC.popToast({
                  type: "error",
                  body: error.error.message
                });
              });
            }
          }, {
            key: "getEvent",
            value: function getEvent(event) {
              var proctur_live_expiry_date = sessionStorage.getItem('proctur_live_expiry_date');

              if (moment__WEBPACK_IMPORTED_MODULE_2__(event).diff(moment__WEBPACK_IMPORTED_MODULE_2__(), 'days') < 0) {
                var msg = {
                  type: "info",
                  body: "You cannot select past date"
                };
                this.appC.popToast(msg);
                this.scheduledateFrom = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
              }

              event = new Date(event);
              proctur_live_expiry_date = new Date(proctur_live_expiry_date);
              event.setHours(0, 0, 0, 0);
              proctur_live_expiry_date.setHours(0, 0, 0, 0);

              if (proctur_live_expiry_date < event && proctur_live_expiry_date != event) {
                var tempMsg = 'Your live class subscription will get expired on '.concat(moment__WEBPACK_IMPORTED_MODULE_2__(proctur_live_expiry_date).format('DD-MM-YYYY')).concat(' hence you will not be able create live class. Renew your subscription to conduct live classes again!');
                this.msgService.showErrorMessage('info', '', tempMsg);
                this.scheduledateFrom = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
              }
            }
          }, {
            key: "getEventHourFrom",
            value: function getEventHourFrom(e) {
              // this.minuteFrom = "00";
              if (this.hoursFrom != "" && this.hoursFrom != null && this.minuteFrom == "") {
                this.minuteFrom = "00";
              } else if (this.hoursTo != "" && this.hoursTo != null && this.minuteTo == "") {
                this.minuteTo = "00";
              }

              if (this.hoursFrom != "" && this.hoursFrom != null && this.minuteFrom != "" && this.minuteFrom != null && this.hoursTo != "" && this.hoursTo != null && this.minuteTo != "" && this.minuteTo != null) {
                this.getEventHourTo();
              }
            }
          }, {
            key: "getEventHourTo",
            value: function getEventHourTo() {
              var fromTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursFrom.split(' ')[0] + ":" + this.minuteFrom + " " + this.hoursFrom.split(' ')[1];
              var toTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursTo.split(' ')[0] + ":" + this.minuteTo + " " + this.hoursTo.split(' ')[1];
              var fromTimeT = moment__WEBPACK_IMPORTED_MODULE_2__(fromTime).format('YYYY-MM-DD hh:mm a');
              var toTimeT = moment__WEBPACK_IMPORTED_MODULE_2__(toTime).format('YYYY-MM-DD hh:mm a');

              if (moment__WEBPACK_IMPORTED_MODULE_2__(fromTimeT).diff(moment__WEBPACK_IMPORTED_MODULE_2__(toTimeT), 'minutes') > 0) {
                this.appC.popToast({
                  type: "error",
                  body: "From time cannot be greater than to time"
                });
                this.dateTimeStatus = false;
                return false;
              } else if (this.hoursFrom == "" || this.hoursTo == "" || this.minuteFrom == "" || this.minuteTo == "") {
                this.appC.popToast({
                  type: "error",
                  body: "All fields are required"
                });
                this.dateTimeStatus = false;
                return false;
              } else if (moment__WEBPACK_IMPORTED_MODULE_2__(fromTimeT).diff(moment__WEBPACK_IMPORTED_MODULE_2__(), 'minutes') <= 0) {
                this.appC.popToast({
                  type: "error",
                  body: "Class cannot be schedule before current time"
                });
                this.dateTimeStatus = false;
                return false;
              } else if (fromTimeT == toTimeT) {
                this.appC.popToast({
                  type: "error",
                  body: "From time and to time cannot be same"
                });
                this.dateTimeStatus = false;
                return false;
              } else {
                this.dateTimeStatus = true;
              }
            }
          }, {
            key: "checkMandatoryFields",
            value: function checkMandatoryFields() {
              console.log(this.dateTimeStatus);
              this.getEventHourTo();

              if (this.userType === "3") {
                if (this.topicName != "" && this.topicName != null) {
                  if (this.dateTimeStatus == true) {
                    // this.navigateTo("assignStudent")
                    // this.getStudentpreFillData();
                    return true;
                  } else {
                    this.getEventHourTo();
                  }
                } else {
                  this.appC.popToast({
                    type: "error",
                    body: "All fields are required"
                  });
                  return false;
                }
              } else {
                if (this.topicName != "" && this.topicName != null && this.selectedFacultyList.length != 0) {
                  if (this.dateTimeStatus) {
                    // this.navigateTo("assignStudent")
                    // this.getStudentpreFillData();
                    return true;
                  } else {
                    this.getEventHourTo();
                  }
                } else {
                  this.appC.popToast({
                    type: "error",
                    body: "All fields are required"
                  });
                  return false;
                }
              }
            }
          }, {
            key: "getBatchpreFillData",
            value: function getBatchpreFillData() {
              var userIDs = [];
              var userName = [];
              this.batchesIds.forEach(function (element) {
                userIDs.push(element.batch_id);
                userName.push(element.batch_name);
              });
              var temp = [];

              for (var i = 0; i < userIDs.length; i++) {
                var x = {
                  batch_id: '',
                  batch_name: ''
                };
                x.batch_id = userIDs[i];
                x.batch_name = userName[i];
                temp.push(x);
              } // this.course = temp;


              this.selectedBatchList = temp;
            }
          }, {
            key: "getCoursepreFillData",
            value: function getCoursepreFillData() {
              var userIDs = [];
              var userName = [];
              this.courseIds.forEach(function (element) {
                userIDs.push(element.course_id);
                userName.push(element.course_name);
              });
              var sub_list = [];

              for (var _i2 = 0; _i2 < this.courseIds.length; _i2++) {
                for (var j = 0; j < this.courseIds[_i2].subject_list.length; j++) {
                  var _temp2 = {
                    batch_id: '',
                    subject_name: ''
                  };
                  _temp2.batch_id = this.courseIds[_i2].subject_list[j].batch_id;
                  _temp2.subject_name = this.courseIds[_i2].subject_list[j].subject_name;
                  sub_list.push(_temp2);
                }
              }

              this.selectedSubjectList = sub_list;
              var temp = [];

              for (var i = 0; i < userIDs.length; i++) {
                var x = {
                  course_id: '',
                  course_name: ''
                };
                x.course_id = userIDs[i];
                x.course_name = userName[i];
                temp.push(x);
              } // this.course = temp;


              this.selectedCourseList = temp;

              if (!this.schoolModel) {
                var mcourse = [];

                for (var _j = 0; _j < this.courseValue.length; _j++) {
                  var y = {
                    master_course: ''
                  };
                  y.master_course = this.courseValue[_j].master_course_name;
                  mcourse.push(y);
                }

                this.courseValue = mcourse;
              } else {
                this.courseValue = this.editData.course_list[0].standard_name;
              }
            }
          }, {
            key: "getProductPrefillData",
            value: function getProductPrefillData() {
              var temp = [];

              if (this.editData.product_list != null) {
                // let studentIDS = this.editData.studentIDS.split(',')
                // let studentName = this.editData.studentName.split(',')
                for (var i = 0; i < this.editData.product_list.length; i++) {
                  var x = {
                    id: '',
                    title: ''
                  };
                  x.id = this.editData.product_list[i].product_id;
                  x.title = this.editData.product_list[i].product_name;
                  temp.push(x);
                }
              }

              this.product_id = temp; // this.onChangeProduct(this.product_id);
            }
          }, {
            key: "getStudentpreFillData",
            value: function getStudentpreFillData() {
              var temp = [];

              if (this.editData.studentIDS != null) {
                var studentIDS = this.editData.studentIDS.split(',');
                var studentName = this.editData.studentName.split(',');

                for (var i = 0; i < studentIDS.length; i++) {
                  var x = {
                    student_id: 0,
                    student_name: ''
                  };
                  x.student_id = Number(studentIDS[i]);
                  x.student_name = studentName[i];
                  temp.push(x);
                }
              } // this.studentList = temp;


              this.selectedStudentList = temp;
            }
          }, {
            key: "getUserpreFillData",
            value: function getUserpreFillData() {
              if (this.editData.elearnUserIds) {
                var userIDs = this.editData.elearnUserIds.split(',');
                var userName = this.editData.eLearnUserName.split(',');
                var temp = [];

                for (var i = 0; i < userIDs.length; i++) {
                  var x = {
                    user_id: 0,
                    name: ''
                  };
                  x.user_id = Number(userIDs[i]);
                  x.name = userName[i];
                  temp.push(x);
                }

                this.selectedUserList = temp;
              }
            }
          }, {
            key: "scheduleClass",
            value: function scheduleClass() {
              var _this19 = this;

              var validationFlag = true;

              if (!this.isProfessional) {
                if (this.courseIds != null && this.courseValue != null && this.courseValue != '') {
                  if (this.selectedStudentList.length != 0 || this.selectedUserList.length != 0) {
                    validationFlag = true;

                    if (this.checkMandatoryFields()) {
                      if (this.schoolModel) {
                        if (this.selectedSubjectList != null && this.selectedSubjectList.length != 0) {
                          validationFlag = true;
                        } else {
                          validationFlag = false;
                          this.appC.popToast({
                            type: "error",
                            body: "Please select subject"
                          });
                        }
                      } else {
                        validationFlag = true;
                      }
                    } else {
                      validationFlag = false;
                    }
                  } else {
                    validationFlag = false;
                    this.appC.popToast({
                      type: "info",
                      body: "Please select students or users"
                    });
                  }
                } else {
                  validationFlag = false;
                  this.appC.popToast({
                    type: "error",
                    body: "All fields are required"
                  });
                }
              } else {
                if (this.batchesIds != null) {
                  console.log(this.batchesIds);

                  if (this.selectedStudentList.length != 0 || this.selectedUserList.length != 0) {
                    validationFlag = true;

                    if (this.checkMandatoryFields()) {
                      validationFlag = true;
                    } else {
                      validationFlag = false;
                    }
                  } else {
                    validationFlag = false;
                    this.appC.popToast({
                      type: "info",
                      body: "Please select students or users"
                    });
                  }
                } else {
                  validationFlag = false;
                  this.appC.popToast({
                    type: "error",
                    body: "All fields are required"
                  });
                }
              }

              if (validationFlag) {
                this.facultyId = [];
                this.custUserIds = [];
                this.studentsId = [];
                var product_ids = [];
                this.selectedFacultyList.map(function (ele) {
                  var x = ele.teacher_id.toString();

                  _this19.facultyId.push(x);
                });
                this.selectedModeratorList.map(function (ele) {
                  var x = ele.userid.toString();

                  _this19.custUserIds.push(x);
                });
                this.selectedStudentList.map(function (ele) {
                  var x = ele.student_id.toString();

                  _this19.studentsId.push(x);
                });
                this.selectedUserList.map(function (ele) {
                  var x = ele.user_id.toString();

                  _this19.eLearnCustUserIDs.push(x);
                });
                console.log(this.eLearnCustUserIDs);

                if (this.product_id && this.product_id.length) {
                  this.product_id.map(function (ele) {
                    var x = ele.id.toString();
                    product_ids.push(x);
                  });
                }

                var course_list = [];

                if (!this.schoolModel) {
                  this.selectedCourseList.map(function (ele) {
                    var x = {
                      'course_id': ele.course_id.toString()
                    };
                    course_list.push(x);
                  });
                }

                var batch_list = [];
                this.selectedBatchList.map(function (ele) {
                  var x = {
                    'batch_id': ele.batch_id.toString()
                  };
                  batch_list.push(x);
                });

                if (this.schoolModel) {
                  for (var i = 0; i < this.selectedCourseList.length; i++) {
                    var x = {
                      'course_id': this.selectedCourseList[i].course_id.toString()
                    };
                    course_list.push(x);
                    course_list[i].subject_list = [];

                    for (var j = 0; j < this.subjectList.length; j++) {
                      for (var l = 0; l < this.selectedSubjectList.length; l++) {
                        if (this.subjectList[j].batch_id == this.selectedSubjectList[l].batch_id && this.subjectList[j].course_id == this.selectedCourseList[i].course_id) {
                          var _x2 = {
                            'batch_id': this.subjectList[j].batch_id.toString()
                          };
                          course_list[i].subject_list.push(_x2);
                        }
                      }
                    }
                  }
                } // this.selectedBatchList.map(
                //   (ele: any) => {
                //     let x ={'subject_id': ele.batch_id.toString()}
                //     subject_list.push(x);
                //   }
                // );


                this.updateOnlineClass.course_list = course_list;
                this.updateOnlineClass.batch_list = batch_list;
                this.updateOnlineClass.session_name = this.topicName;
                this.updateOnlineClass.custUserIds = this.custUserIds;
                this.updateOnlineClass.studentIds = this.studentsId;
                this.updateOnlineClass.teacherIds = this.facultyId;
                this.updateOnlineClass.start_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursFrom.split(' ')[0] + "" + ":" + this.minuteFrom + " " + this.hoursFrom.split(' ')[1];
                this.updateOnlineClass.end_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(this.scheduledateFrom).format('YYYY-MM-DD') + " " + this.hoursTo.split(' ')[0] + "" + ":" + this.minuteTo + " " + this.hoursTo.split(' ')[1];
                this.updateOnlineClass.eLearnCustUserIDs = this.eLearnCustUserIDs;

                if (product_ids != null) {
                  this.updateOnlineClass.product_ids = product_ids;
                } else {
                  this.updateOnlineClass.product_ids = null;
                }

                if (this.editData.sent_notification_flag) {
                  this.updateOnlineClass.sent_notification_flag = 1;
                } else {
                  this.updateOnlineClass.sent_notification_flag = 0;
                }

                this.updateOnlineClass.private_access = this.editData.private_access;
                this.updateOnlineClass.access_enable_lobby = this.editData.access_enable_lobby;
                this.updateOnlineClass.access_enable_breakout_rooms = this.editData.access_enable_breakout_rooms;

                if (this.editData.access_before_start) {
                  this.updateOnlineClass.access_before_start = 1;
                } else {
                  this.updateOnlineClass.access_before_start = 0;
                }

                if (this.zoom_enable) {
                  this.updateOnlineClass.is_zoom_live_class = true;
                } else {
                  this.updateOnlineClass.is_zoom_live_class = false;
                }

                if (this.auto_recording) {
                  this.updateOnlineClass.auto_recording = "local";
                } else if (!this.auto_recording) {
                  this.updateOnlineClass.auto_recording = "none";
                }

                if (this.editData.mute_upon_entry) {
                  this.updateOnlineClass.mute_upon_entry = true;
                } else {
                  this.updateOnlineClass.mute_upon_entry = false;
                }

                if (this.editData.host_video) {
                  this.updateOnlineClass.host_video = true;
                } else {
                  this.updateOnlineClass.host_video = false;
                }

                if (this.editData.participant_video) {
                  this.updateOnlineClass.participant_video = true;
                } else {
                  this.updateOnlineClass.participant_video = false;
                }

                if (this.editData.join_before_host) {
                  this.updateOnlineClass.join_before_host = true;
                } else {
                  this.updateOnlineClass.join_before_host = false;
                }

                this.updateOnlineClass.product_ids = product_ids;
                this.updateOnlineClass.hide_recording_notifications = this.editData.hide_recording_notifications;
                this.updateOnlineClass.prevent_user_count = this.editData.prevent_user_count;

                if (this.repeat_session == 0) {
                  this.auth.showLoader();
                  var url = '/api/v1/meeting_manager/updateV2/' + this.institution_id + "/" + this.editSessionId;
                  this.http_service.postData(url, this.updateOnlineClass).subscribe(function (data) {
                    var session = _this19.live_class_for == "1" ? 'Live class session ' : 'Zoom class session ';

                    _this19.appC.popToast({
                      type: "success",
                      body: session + _this19.topicName + " " + "updated successfully"
                    });

                    _this19.router.navigate(['/view/live-classes']);

                    _this19.auth.hideLoader();
                  }, function (error) {
                    _this19.auth.hideLoader();

                    _this19.facultyId = [];
                    _this19.custUserIds = [];
                    _this19.studentsId = [];

                    _this19.appC.popToast({
                      type: "error",
                      body: error.error.message
                    });
                  });
                }

                if (this.repeat_session == 1) {
                  this.updateOnlineClass.studentIds = this.studentsId;
                  this.auth.showLoader();
                  var _url2 = '/api/v1/meeting_manager/createV2';
                  this.http_service.putData(_url2, this.updateOnlineClass).subscribe(function (data) {
                    _this19.appC.popToast({
                      type: "success",
                      body: _this19.topicName + " " + "created successfully"
                    });

                    _this19.router.navigate(['/view/live-classes']);

                    _this19.auth.hideLoader();
                  }, function (error) {
                    _this19.auth.hideLoader();

                    _this19.facultyId = [];
                    _this19.custUserIds = [];
                    _this19.studentsId = [];

                    _this19.appC.popToast({
                      type: "error",
                      body: error.error.message
                    });
                  });
                }
              }
            }
          }, {
            key: "getStudentsBySubject",
            value: function getStudentsBySubject(obj) {
              if (obj && obj.length) {
                var temp = [];
                obj.forEach(function (element) {
                  temp.push(element.batch_id);
                });
                console.log(temp);
                this.fetchStudentsApi(temp);
              }
            }
            /** this function is used to fetch teacher details */

          }, {
            key: "getTeachers",
            value: function getTeachers() {
              var _this20 = this;

              this.auth.showLoader();
              var url = "/api/v1/teachers/all/+".concat(this.institution_id, "?active=Y");
              this.http_service.getData(url).subscribe(function (data) {
                _this20.teachersAssigned = data;
                console.log(_this20.teachersAssigned); // this.getCheckedBox(this.teachersAssigned);

                _this20.auth.hideLoader();

                var teachersIds = _this20.editData.teachersIds.split(',');

                var teachersNames = _this20.editData.teachersName.split(',');

                var temp = [];

                for (var i = 0; i < teachersIds.length; i++) {
                  var x = {
                    teacher_id: 0,
                    teacher_name: ''
                  };
                  x.teacher_id = +teachersIds[i];
                  x.teacher_name = teachersNames[i];
                  temp.push(x);
                }

                _this20.selectedFacultyList = temp;
              }, function (error) {
                _this20.teachersAssigned = [];

                _this20.errorMessage(error);

                _this20.auth.hideLoader();
              });
            }
            /** this function is used to fetch customer details */

          }, {
            key: "getCustomUsers",
            value: function getCustomUsers() {
              var _this21 = this;

              this.auth.showLoader();
              var url = '/api/v1/profiles/custUsers/' + this.institution_id;
              this.http_service.getData(url).subscribe(function (data) {
                _this21.userAssigned = data;
                console.log(_this21.userAssigned); // this.getCheckedBox(this.userAssigned);

                _this21.auth.hideLoader();

                if (_this21.editData.moderatorIds != null && _this21.editData.moderatorIds != '') {
                  var userid = _this21.editData.moderatorIds.split(',');

                  var name = _this21.editData.moderatorName.split(',');

                  var temp = [];

                  for (var i = 0; i < userid.length; i++) {
                    var x = {
                      userid: '',
                      name: ''
                    };
                    x.userid = userid[i];
                    x.name = name[i];
                    temp.push(x);
                  }

                  _this21.selectedModeratorList = temp;
                }
              }, function (error) {
                _this21.errorMessage(error);

                _this21.userAssigned = [];

                _this21.auth.hideLoader();
              });
            }
          }, {
            key: "getBatchesCoursesIds",
            value: function getBatchesCoursesIds(ids) {
              this.selectedStudentList = [];
              this.selectedSubjectList = [];
              var temp = [];

              if (this.isProfessional) {
                this.batchesIds = ids;
                this.batchesIds.forEach(function (element) {
                  temp.push(element.batch_id);
                });
                this.fetchStudentsApi(temp); // this.getStudents();
              } else {
                var tempData = this.courses;

                if (this.schoolModel) {
                  this.subjectList = [];
                  this.updateSubjectList(ids);
                } else {
                  this.courseIds = ids;
                  this.courseIds.forEach(function (element) {
                    temp.push(element.course_id);
                  });
                  this.fetchStudentsApi(temp);
                } // this.getStudents();

              }
            }
          }, {
            key: "updateSubjectList",
            value: function updateSubjectList(event) {
              var _this22 = this;

              this.subjectList = [];

              if (event && event.length) {
                var course_id = Array.prototype.map.call(event, function (item) {
                  return item.course_id;
                }).join(",");
                var url = "/api/v1/subjects/course?courseIds=" + course_id;
                this.auth.showLoader();
                this.http_service.getData(url).subscribe(function (res) {
                  _this22.auth.hideLoader(); //console.log('Subject', res);


                  _this22.subjectList = res.result;

                  if (_this22.subjectList && _this22.subjectList.length) {
                    _this22.subjectList.forEach(function (element) {
                      element.subject_name = element.course_name + ' - ' + element.subject_name;

                      if (element.is_optional == 'Y') {
                        element.subject_name = element.subject_name + ' (Optional)';
                      }
                    });
                  }
                }, function (err) {
                  _this22.msgService.showErrorMessage('error', '', err.error.message);

                  _this22.auth.hideLoader(); //console.log(err);

                });
              }
            }
          }, {
            key: "getBatchesCourses",
            value: function getBatchesCourses() {
              var _this23 = this;

              this.auth.showLoader();

              if (this.isProfessional) {
                var url = '';

                if (this.userType === '3') {
                  url = '/api/v1/batches/all/' + this.institution_id + '?active=Y' + '&isTeacher=true&isActiveNotExpire=Y';
                } else {
                  url = '/api/v1/batches/all/' + this.institution_id + '?active=Y&isActiveNotExpire=Y';
                }

                this.http_service.getData(url).subscribe(function (data) {
                  _this23.batches = data;

                  if (_this23.batches && !_this23.batches.length) {
                    _this23.appC.popToast({
                      type: "error",
                      body: "Please check batches are active or not."
                    });
                  }

                  console.log(_this23.batches);

                  _this23.auth.hideLoader();
                }, function (error) {
                  _this23.auth.hideLoader();

                  _this23.errorMessage(error);
                });
              } else {
                var _url3 = '';

                if (this.schoolModel) {
                  _url3 = "/api/v1/courseMaster/master-course-list/" + sessionStorage.getItem("institute_id") + "?is_standard_wise=true&sorted_by=course_name&is_active_not_expire=Y";
                } else if (this.userType === '3') {
                  _url3 = '/api/v1/courseMaster/fetch/' + this.institution_id + '/all' + '?isAllCourses=Y&isActiveNotExpire=Y';
                } else {
                  _url3 = '/api/v1/courseMaster/fetch/' + this.institution_id + '/all?isActiveNotExpire=Y';
                }

                this.http_service.getData(_url3).subscribe(function (data) {
                  _this23.fullResponse = data.result;
                  _this23.masters = _this23.schoolModel ? Object.keys(data.result) : data;

                  if (_this23.masters && !_this23.masters.length) {
                    _this23.appC.popToast({
                      type: "error",
                      body: "Please check courses are active or not."
                    });
                  }

                  console.log(_this23.masters);

                  _this23.auth.hideLoader();
                }, function (error) {
                  console.log(error);

                  _this23.errorMessage(error);

                  _this23.auth.hideLoader();
                });
              }
            }
          }, {
            key: "getCourses",
            value: function getCourses(master_course_name) {
              if (master_course_name) {
                this.selectedCourseList = [];
                this.courses = [];
                this.selectedSubjectList = [];
                var tempData = this.masters;

                if (this.schoolModel) {
                  var temp = this.fullResponse[master_course_name];

                  for (var i = 0; i < temp.length; i++) {
                    this.courses.push(temp[i]);
                  }
                } else {
                  for (var _i3 = 0; _i3 < tempData.length; _i3++) {
                    for (var j = 0; j < master_course_name.length; j++) {
                      if (tempData[_i3].master_course === master_course_name[j].master_course) {
                        for (var k = 0; k < tempData[_i3].coursesList.length; k++) {
                          this.courses.push(tempData[_i3].coursesList[k]);
                        }
                      }
                    }
                  }
                } //End

              }
            }
          }, {
            key: "getStudents",
            value: function getStudents() {
              this.studentList = [];
              var str = [];

              if (this.isProfessional) {
                // this.batchesIds.map(
                //   (ele: any) => {
                //     let x = ele.toString();
                //     str.push(x);
                //   }
                // )
                this.fetchStudentsApi(this.batchesIds);
              } else {
                // this.courseIds.map(
                //   (ele: any) => {
                //     let x = ele.toString();
                //     str.push(x);
                //   }
                // )
                this.fetchStudentsApi(this.courseIds);
              }
            }
          }, {
            key: "fetchStudentsApi",
            value: function fetchStudentsApi(courseArray) {
              var _this24 = this;

              this.auth.showLoader();
              this.getPayloadBatch.coursesArray = courseArray;
              var url = '/api/v1/courseMaster/onlineClass/fetch/users';
              this.http_service.postData(url, this.getPayloadBatch).subscribe(function (data) {
                _this24.studentList = data.studentsAssigned; // Added by - Nalini Walunj
                // if we change course then selected student list should be clear and if we select same course then already selected students should be seleted

                var temp = [];

                if (_this24.editData.studentIDS != null && _this24.editData.studentIDS != undefined) {
                  var studentIDS = _this24.editData.studentIDS.split(',');

                  var studentName = _this24.editData.studentName.split(',');

                  for (var i = 0; i < _this24.studentList.length; i++) {
                    for (var j = 0; j < studentIDS.length; j++) {
                      if (_this24.studentList[i].student_id == studentIDS[j]) {
                        var x = {
                          student_id: 0,
                          student_name: ''
                        };
                        x.student_id = Number(studentIDS[j]);
                        x.student_name = studentName[j];
                        temp.push(x);
                      }
                    }
                  }
                }

                _this24.selectedStudentList = temp; // this.getCheckedBox(this.studentsAssigned);

                _this24.auth.hideLoader();
              }, function (error) {
                _this24.auth.hideLoader();

                _this24.errorMessage(error);
              });
            }
          }, {
            key: "errorMessage",
            value: function errorMessage(error) {
              this.appC.popToast({
                type: "error",
                body: error.error.message
              });
            }
            /* Function to navigate on icon click */

          }, {
            key: "switchToView",
            value: function switchToView(id) {
              switch (id) {
                case "class-icon":
                  {
                    this.navigateTo("classDetails");
                    break;
                  }

                case "assignStudent-icon":
                  {
                    this.navigateTo("assignStudent");
                    break;
                  }

                default:
                  {
                    this.navigateTo("classDetails");
                    break;
                  }
              }
            }
            /* Function to navigate through the Student Add Form on button Click Save/Submit*/

          }, {
            key: "navigateTo",
            value: function navigateTo(text) {
              if (text === "classDetails") {
                if (this.class_id == 0 || this.class_id == null) {
                  document.getElementById('li-one').classList.add('active');
                  document.getElementById('li-two').classList.remove('active');
                  this.isBasicActive = true;
                  this.isOtherActive = false;
                } else {
                  var msg = {
                    type: 'info',
                    title: 'Live Class Details Already Saved',
                    body: ''
                  };
                  this.appC.popToast(msg);
                }
              } else if (text === "assignStudent") {
                if (this.class_id == 0 || this.class_id == null) {
                  document.getElementById('li-one').classList.remove('active');
                  document.getElementById('li-two').classList.add('active');
                  this.isBasicActive = false;
                  this.isOtherActive = true;

                  if (this.batchesIds != null) {
                    this.getBatchpreFillData();
                  }

                  this.getStudentpreFillData();
                } else {
                  var _msg2 = {
                    type: 'info',
                    title: 'Live Class Details Already Saved',
                    body: ''
                  };
                  this.appC.popToast(_msg2);
                }
              }
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this.router.navigateByUrl('/view/live-classes');
            }
          }, {
            key: "openCalendar",
            value: function openCalendar(id) {
              document.getElementById(id).click();
            }
          }]);

          return EditClassComponent;
        }();

        EditClassComponent.ctorParameters = function () {
          return [{
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }];
        };

        EditClassComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-edit-class',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./edit-class.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/edit-class/edit-class.component.html"))["default"],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [__importDefault(__webpack_require__(
          /*! ./edit-class.component.scss */
          "./src/app/components/live-classes-module/edit-class/edit-class.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"], _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], ___WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]])], EditClassComponent);
        return EditClassComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/live-classes-module/live-class-setting/live-class-setting.component.scss":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/components/live-classes-module/live-class-setting/live-class-setting.component.scss ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLiveClassesModuleLiveClassSettingLiveClassSettingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex2 {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 19px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.w981 {\n  margin-left: 1%;\n}\n\n.main_div {\n  display: flex;\n  margin-top: 10px;\n}\n\n.main_div > div:first-child {\n  width: 15%;\n  background: #F3F4F6;\n  border: 1px solid #DCDCDC;\n  box-sizing: border-box;\n  height: 89vh;\n  position: fixed;\n}\n\n.settings {\n  padding: 20px 10px;\n  border-bottom: 1px solid #000;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.menu {\n  margin-top: 20px;\n}\n\n.menu li {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  padding: 20px 0px;\n  padding-left: 10px;\n  color: #1A2334;\n  cursor: pointer;\n}\n\n.menu li.selected {\n  background: #FFFFFF;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n  letter-spacing: 0.01em;\n}\n\na {\n  color: #1A2334;\n  text-decoration: none;\n}\n\n.menu li.selected > a {\n  color: #0097F9;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.bottom {\n  padding: 1%;\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  width: calc(100% - 15%);\n  border-top: 1px solid #EAEAEA;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.main_div > div:last-child {\n  width: 80%;\n  margin-left: 20%;\n  /*overflow-y: scroll;*/\n  padding-right: 1%;\n  margin-bottom: 70px;\n}\n\n.ellipse {\n  background: #F0EFEF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  width: 19px;\n  height: 19px;\n  padding: 0px 7px;\n  border-radius: 50%;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  /* identical to box height, or 100% */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.blue_line {\n  border-top: 1px solid #0097F9;\n  width: 22px;\n  display: inline-block;\n  margin: 0px 7px;\n  position: relative;\n  top: -4px;\n}\n\n.blue_settings {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.bold_settings {\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  margin-bottom: 8px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings1 {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 8px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex1 {\n  display: flex;\n  margin-top: 10px;\n}\n\n.sep_line {\n  margin-left: 65px;\n  border-bottom: 1px solid  #C4C4C4;\n  margin-bottom: 16px;\n}\n\n.toggle.s_toggle {\n  padding-top: 16px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 12px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: #ccc;*/\n  -webkit-transition: .4s;\n  border: 1px solid #BDBABA;\n  box-sizing: border-box;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: -6px;\n  bottom: -4px;\n  background-color: #BDBABA;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  /*background-color: #2196F3;*/\n}\n\ninput:focus + .slider {\n  /*box-shadow: 0 0 1px #2196F3;*/\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n  background-color: #19C83F;\n}\n\ninput:checked + .slider {\n  border: 1px solid #BDBABA;\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.toggle {\n  display: flex;\n  margin-left: auto;\n  padding-right: 50px;\n  padding-top: 30px;\n}\n\n.off {\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  position: relative;\n  top: -4px;\n  margin: 0px 10px;\n}\n\n.on {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 0px 10px;\n  letter-spacing: 0.01em;\n  position: relative;\n  top: -4px;\n  color: #19C83F;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.settings_label {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-right: 40px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-left: -10px;\n}\n\n.checkbox {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n  cursor: pointer;\n  margin-bottom: 16px;\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #fff;\n  background: #109CF1;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  padding: 2px;\n  width: 0.5em;\n  height: 0.5em;\n  border: none;\n  border-radius: 3px;\n  transform-origin: bottom left;\n}\n\n.checkbox__input input:checked\n+ .checkbox__control svg {\n  transform: scale(1);\n}\n\n.checkbox__input input:checked\n+ .checkbox__control {\n  border: none;\n}\n\n.flex1 > div:nth-child(2) {\n  width: 60%;\n}\n\n.input {\n  box-sizing: border-box;\n  background: #F5F5F5;\n  border-radius: 2px;\n  width: 336px;\n  height: 35px;\n  margin-bottom: 16px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  border: none;\n  outline: none;\n  text-indent: 10px;\n  color: #323C47;\n}\n\n.input::-moz-placeholder {\n  color: #8e939a;\n}\n\n.input:-ms-input-placeholder {\n  color: #8e939a;\n}\n\n.input::placeholder, option[disabled] {\n  color: #8e939a;\n}\n\n.flex1 > div:first-child {\n  width: 65px;\n}\n\n.size_sm {\n  width: 18px;\n  height: auto;\n  position: relative;\n  top: 5px;\n  margin-left: 6px;\n}\n\n.blue_sm_settings {\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  margin-top: 10px;\n  color: #0097F9;\n}\n\n.position {\n  position: relative;\n  top: -7px;\n  margin-left: 10px;\n}\n\n.breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #334D6E;\n}\n\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n\n.breadcrumb-item > a {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.scrool1 {\n  overflow-y: scroll;\n  height: calc(100vh - 218px);\n}\n\n.clearFile {\n  padding: 5px;\n  width: 2%;\n  margin-top: 12px;\n  color: white;\n  cursor: pointer;\n  border: 1px solid;\n  font-weight: 600;\n  background: red;\n}\n\n.zoom-settings {\n  margin: 0px 65px;\n  display: flex;\n}\n\n.zoom-settings > div:first-child {\n  margin-right: 36px;\n}\n\n.mb16 {\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.mr16 {\n  margin-right: 16px;\n}\n\n.tablehead-s {\n  background: #EFF0F5;\n  border-radius: 2px;\n  display: flex;\n  font-weight: 600;\n  font-size: 12px;\n  padding: 10px 0px;\n  align-items: center;\n  line-height: 16px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  /* table_black */\n  color: #323C47;\n}\n\n.tablebody-s {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  /* identical to box height */\n  display: flex;\n  padding: 10px 0px;\n  letter-spacing: 0.01em;\n  box-shadow: inset 0px -1px 0px #EFF0F5;\n  /* table_black */\n  word-break: break-all;\n  color: #323C47;\n}\n\n.tablehead-s > div,\n.tablebody-s > div {\n  width: calc(75% / 9);\n  padding-left: 10px;\n}\n\n.tablehead-s > div:last-child,\n.tablebody-s > div:last-child {\n  width: 8%;\n}\n\n.tablehead-s > div:nth-child(5),\n.tablebody-s > div:nth-child(5) {\n  width: 17%;\n}\n\n.tablebody-s input {\n  background: #F5F5F5;\n  border-radius: 2px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #1A2334;\n  width: 100%;\n  height: 30px;\n}\n\n.tablebody-s img {\n  cursor: pointer;\n}\n\n.margin-a {\n  margin: 0px auto;\n}\n\n.displayComp {\n  height: 0%;\n}\n\n.displayComp .edit-comp {\n  display: none;\n}\n\n.editComp .view-comp {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXZlLWNsYXNzZXMtbW9kdWxlL2xpdmUtY2xhc3Mtc2V0dGluZy9saXZlLWNsYXNzLXNldHRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsb0NBQW9DO0FBQ3hDOztBQUVFO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDbkI7O0FBQ0U7RUFDRSxhQUFhO0FBRWpCOztBQUFFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFHbkI7O0FBREU7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUluQjs7QUFBRztFQUNJLGFBQWE7QUFHcEI7O0FBQUU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBR3BCOztBQURFO0VBQ0UsZUFBZTtBQUluQjs7QUFERTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFJcEI7O0FBRkU7RUFDQSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7QUFLakI7O0FBSEU7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUFBO0VBQ0Esc0JBQXNCO0VBQ3RCLGNBQWM7QUFNaEI7O0FBSkU7RUFDRSxnQkFBZ0I7QUFPcEI7O0FBTEU7RUFDRSxnQkFBZ0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQVFqQjs7QUFORTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLDJDQUEyQztFQUMzQyxzQkFBc0I7QUFTeEI7O0FBTkU7RUFDRSxjQUFjO0VBQ1oscUJBQXFCO0FBUzNCOztBQVBFO0VBRUEsY0FBYztBQVNoQjs7QUFQRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFVbEM7O0FBUkU7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDZCQUE0QjtFQUM5QiwyQ0FBMkM7QUFXN0M7O0FBVEU7RUFDRSxrQkFBa0I7QUFZdEI7O0FBVkU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBRWhCLHNCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQVl2Qjs7QUFWRTtFQUNFLG1CQUFtQjtFQUNyQiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFDQUFBO0VBRUEsc0JBQXNCO0VBRXRCLGNBQWM7QUFXaEI7O0FBUkU7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7QUFXYjs7QUFURTtFQUNFLGdCQUFnQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUFBO0VBQ0Esc0JBQXNCO0VBQ3RCLGNBQWM7QUFZaEI7O0FBVkU7RUFDRSxpQkFBaUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNEJBQUE7RUFDQSxzQkFBc0I7RUFDdEIsY0FBYztBQWFoQjs7QUFYRTtFQUNFLG1CQUFtQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUV0QixjQUFjO0FBYWhCOztBQVhFO0VBQ0UsbUJBQW1CO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFDQSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBRXRCLGNBQWM7QUFhaEI7O0FBWEU7RUFDRSxhQUFhO0VBRWIsZ0JBQWdCO0FBYXBCOztBQVhFO0VBQ0UsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFjdkI7O0FBWkM7RUFFRyxpQkFBaUI7QUFjckI7O0FBWEU7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3RCLFdBQVc7RUFDWixZQUFZO0FBY2Q7O0FBWEU7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFjYjs7QUFYRTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNWLDJCQUFBO0VBQ0MsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUMzQixzQkFBc0I7RUFDdEIsbURBQW1EO0VBQ2pELGVBQWU7QUFjbkI7O0FBWEU7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7RUFFekIsZUFBZTtBQWNuQjs7QUFYRTtFQUNFLDZCQUFBO0FBY0o7O0FBWEU7RUFDRSwrQkFBQTtBQWNKOztBQVhFO0VBR0UsMkJBQTJCO0VBQzFCLHlCQUF5QjtBQWM5Qjs7QUFaRTtFQUNFLHlCQUF5QjtBQWU3Qjs7QUFiRTtFQUNFLG1CQUFtQjtBQWdCdkI7O0FBYkU7RUFDRSxrQkFBa0I7QUFnQnRCOztBQWRFO0VBQ0UsYUFBYTtFQUNkLGlCQUFpQjtFQUVoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBZ0JyQjs7QUFkRTtFQUNFLGdCQUFnQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUFBO0VBQ0Esc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdCQUFnQjtBQWlCbEI7O0FBZkU7RUFDRSxnQkFBZ0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0FBa0JoQjs7QUFoQkU7RUFDRSxrQkFBa0I7QUFtQnRCOztBQWpCRTtFQUNFLGdCQUFnQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0FBb0JwQjs7QUFsQkU7RUFDRSxhQUFhO0VBQ2IsK0NBQXVDO0VBQXZDLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0FBcUJ2Qjs7QUFuQkE7RUFDSSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7QUFzQmY7O0FBcEJBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3RCLHlCQUF5QjtBQXVCekI7O0FBcEJBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtBQXVCakM7O0FBckJBO0VBQ0ksV0FBWTtFQUNaLG1CQUFtQjtFQUNyQix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGVBQWM7RUFDZCxZQUFXO0VBQ1QsWUFBWTtFQUNkLGFBQWE7RUFDZCxZQUFZO0VBQ1gsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQXdCL0I7O0FBdEJBOztFQUVFLG1CQUFtQjtBQXlCckI7O0FBdkJBOztFQUVBLFlBQVk7QUEwQlo7O0FBeEJFO0VBQ0UsVUFBVTtBQTJCZDs7QUF6QkU7RUFFRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsWUFBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztBQTJCaEI7O0FBekJFO0VBQ0EsY0FBYTtBQTRCZjs7QUE3QkU7RUFDQSxjQUFhO0FBNEJmOztBQTdCRTtFQUNBLGNBQWE7QUE0QmY7O0FBMUJFO0VBQ0UsV0FBVztBQTZCZjs7QUF6QkE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0FBNEJsQjs7QUExQkE7RUFDSSxpQkFBaUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUVBLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsY0FBYztBQTRCZDs7QUExQkE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtBQTZCbkI7O0FBMUJBO0VBQ0ksWUFBWTtFQUNaLGNBQWM7QUE2QmxCOztBQTNCRTtFQUNBLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtBQThCakI7O0FBNUJFO0VBQ0EsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBK0JqQjs7QUE3QkU7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBZ0MvQjs7QUE5Qkc7RUFDQyxZQUFZO0VBQ1osU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQWlDbkI7O0FBN0JBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFnQ2Y7O0FBN0JBO0VBQ0Usa0JBQWtCO0FBZ0NwQjs7QUE3QkE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtBQWdDaEM7O0FBN0JBO0VBQ0Usa0JBQWtCO0FBZ0NwQjs7QUE3QkE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRCQUFBO0VBQ0Esc0JBQXNCO0VBQ3RCLGdCQUFBO0VBQ0EsY0FBYztBQWdDaEI7O0FBN0JBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFDQSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsZ0JBQUE7RUFDQSxxQkFBcUI7RUFDckIsY0FBYztBQWdDaEI7O0FBNUJBOztFQUVFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUErQnBCOztBQTVCQTs7RUFFRSxTQUFTO0FBK0JYOztBQTVCQTs7RUFFRSxVQUFVO0FBK0JaOztBQTVCQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQStCZDs7QUE3QkE7RUFDRSxlQUFlO0FBZ0NqQjs7QUE5QkE7RUFDRSxnQkFBZTtBQWlDakI7O0FBOUJBO0VBQ0UsVUFBVTtBQWlDWjs7QUFsQ0E7RUFJTyxhQUNKO0FBaUNIOztBQS9CQTtFQUVPLGFBQ0o7QUFnQ0giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpdmUtY2xhc3Nlcy1tb2R1bGUvbGl2ZS1jbGFzcy1zZXR0aW5nL2xpdmUtY2xhc3Mtc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAuZmxleDJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuYmx1ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC53aGl0ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgcGFkZGluZzogOHB4IDE5cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgIzEwOUNGMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBcbiAgIGlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsYnV0dG9uOmZvY3Vze1xuICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICB9XG4gIFxuICAudzk4e1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAudzk4MXtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gIH1cbiAgXG4gIC5tYWluX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLm1haW5fZGl2PmRpdjpmaXJzdC1jaGlsZHtcbiAgd2lkdGg6IDE1JTtcbiAgYmFja2dyb3VuZDogI0YzRjRGNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RDRENEQztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA4OXZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbiAgLnNldHRpbmdze1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMxQTIzMzQ7XG4gIH1cbiAgLm1lbnUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLm1lbnUgbGl7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICMxQTIzMzQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubWVudSBsaS5zZWxlY3RlZHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgfVxuICBhe1xuICAgIGNvbG9yOiAjMUEyMzM0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5tZW51IGxpLnNlbGVjdGVkPmF7XG4gICAgICBcbiAgY29sb3I6ICMwMDk3Rjk7XG4gIH1cbiAgLmRpc3BsYXl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmJvdHRvbXtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1JSk7XG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI0VBRUFFQTtcbiAgYm94LXNoYWRvdzogNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgfVxuICAubXIxMHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLm1haW5fZGl2PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgIFxuICAgIC8qb3ZlcmZsb3cteTogc2Nyb2xsOyovXG4gICAgcGFkZGluZy1yaWdodDogMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgfVxuICAuZWxsaXBzZXtcbiAgICBiYWNrZ3JvdW5kOiAjRjBFRkVGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEwMCUgKi9cbiAgXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICBjb2xvcjogIzAwOTdGOTtcbiAgXG4gIH1cbiAgLmJsdWVfbGluZXtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwOTdGOTtcbiAgICB3aWR0aDogMjJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC00cHg7XG4gIH1cbiAgLmJsdWVfc2V0dGluZ3N7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDk3Rjk7XG4gIH1cbiAgLmJvbGRfc2V0dGluZ3N7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLmJsYWNrX3NldHRpbmdzMXtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuYmxhY2tfc2V0dGluZ3N7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgXG4gIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC5mbGV4MXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuc2VwX2xpbmV7XG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICAjQzRDNEM0O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAudG9nZ2xlLnNfdG9nZ2xle1xuICAgXG4gICAgcGFkZGluZy10b3A6IDE2cHg7IFxuICB9XG4gIFxuICAuc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMTJweDtcbiAgfVxuICBcbiAgLnN3aXRjaCBpbnB1dCB7IFxuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIFxuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNjY2M7Ki9cbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkRCQUJBO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICB9XG4gIFxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGxlZnQ6IC02cHg7XG4gICAgYm90dG9tOiAtNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCREJBQkE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICB9XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzOyovXG4gIH1cbiAgXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gICAgLypib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7Ki9cbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5QzgzRjtcbiAgfVxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkRCQUJBO1xuICB9XG4gIC5zbGlkZXIucm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIH1cbiAgXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLnRvZ2dsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgbWFyZ2luLWxlZnQ6IGF1dG87XG5cbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4OyBcbiAgfVxuICAub2Zme1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgfVxuICAub257XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIGNvbG9yOiAjMTlDODNGO1xuICB9XG4gIC5oaWRkZW57XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIC5zZXR0aW5nc19sYWJlbHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIH1cbiAgLmNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgYXV0bztcbiAgICBncmlkLWdhcDogMC41ZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY2hlY2tib3hfX2lucHV0IGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwZW07XG4gICAgaGVpZ2h0OiAwZW07XG4gIH1cbi5jaGVja2JveF9fY29udHJvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xuYm9yZGVyOiAxcHggc29saWQgI0JCQjJCMjtcbjtcbn1cbi5jaGVja2JveF9faW5wdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNoZWNrYm94XCI7XG59XG4uY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgICBjb2xvcjogICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzEwOUNGMTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbiAyNW1zO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBzdHJva2Utd2lkdGg6NDtcbiAgcGFkZGluZzoycHg7XG4gICAgd2lkdGg6IDAuNWVtO1xuICBoZWlnaHQ6IDAuNWVtO1xuIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbn1cbi5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZFxuICsgLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uY2hlY2tib3hfX2lucHV0IGlucHV0OmNoZWNrZWRcbiArIC5jaGVja2JveF9fY29udHJvbCB7XG5ib3JkZXI6IG5vbmU7XG59XG4gIC5mbGV4MT5kaXY6bnRoLWNoaWxkKDIpe1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgLmlucHV0e1xuICBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHdpZHRoOiAzMzZweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgYm9yZGVyOm5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtaW5kZW50OiAxMHB4O1xuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuaW5wdXQ6OnBsYWNlaG9sZGVyICwgb3B0aW9uW2Rpc2FibGVkXXtcbiAgY29sb3I6IzhlOTM5YTtcbiAgfVxuICAuZmxleDE+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA2NXB4O1xufVxuXG4vLyAgZXh0cmEgbGF5b3V0XG4uc2l6ZV9zbXtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbi5ibHVlX3NtX3NldHRpbmdze1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuZm9udC1zaXplOiAxM3B4O1xubGluZS1oZWlnaHQ6IDE4cHg7XG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG5sZXR0ZXItc3BhY2luZzogMC4wMWVtO1xubWFyZ2luLXRvcDogMTBweDtcbmNvbG9yOiAjMDA5N0Y5O1xufVxuLnBvc2l0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTdweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4vL2V4dHJhIGNzc1xuLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XG4gICAgY29udGVudDogXCI+XCI7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgLmJyZWFkY3J1bWJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIC5icmVhZGNydW1iLWl0ZW0+YXtcbiAgY29sb3I6ICMzMzRENkU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuc2Nyb29sMXtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjE4cHgpO1xuICAgfVxuICAgLmNsZWFyRmlsZXtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDIlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLy96b29tIGNzc1xuLnpvb20tc2V0dGluZ3Mge1xuICBtYXJnaW46IDBweCA2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uem9vbS1zZXR0aW5ncz5kaXY6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG5cbi5tYjE2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubXIxNiB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLnRhYmxlaGVhZC1zIHtcbiAgYmFja2dyb3VuZDogI0VGRjBGNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgLyogdGFibGVfYmxhY2sgKi9cbiAgY29sb3I6ICMzMjNDNDc7XG59XG5cbi50YWJsZWJvZHktcyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAwcHggI0VGRjBGNTtcbiAgLyogdGFibGVfYmxhY2sgKi9cbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBjb2xvcjogIzMyM0M0NztcblxufVxuXG4udGFibGVoZWFkLXM+ZGl2LFxuLnRhYmxlYm9keS1zPmRpdiB7XG4gIHdpZHRoOiBjYWxjKDc1JSAvIDkpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi50YWJsZWhlYWQtcz5kaXY6bGFzdC1jaGlsZCxcbi50YWJsZWJvZHktcz5kaXY6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiA4JTtcbn1cblxuLnRhYmxlaGVhZC1zPmRpdjpudGgtY2hpbGQoNSksXG4udGFibGVib2R5LXM+ZGl2Om50aC1jaGlsZCg1KSB7XG4gIHdpZHRoOiAxNyU7XG59XG5cbi50YWJsZWJvZHktcyBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMxQTIzMzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4udGFibGVib2R5LXMgaW1ne1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFyZ2luLWF7XG4gIG1hcmdpbjowcHggYXV0bztcbn1cbi8vZWRpdCB6b29tXG4uZGlzcGxheUNvbXAge1xuICBoZWlnaHQ6IDAlO1xuICAgLnZpZXctY29tcCB7fVxuICAgLmVkaXQtY29tcCB7XG4gICAgICAgZGlzcGxheTogbm9uZVxuICAgfVxufVxuLmVkaXRDb21wIHtcbiAgIC52aWV3LWNvbXAge1xuICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgIH1cbiAgIC5lZGl0LWNvbXAge31cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/live-classes-module/live-class-setting/live-class-setting.component.ts":
    /*!***************************************************************************************************!*\
      !*** ./src/app/components/live-classes-module/live-class-setting/live-class-setting.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: LiveClassSettingComponent */

    /***/
    function srcAppComponentsLiveClassesModuleLiveClassSettingLiveClassSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveClassSettingComponent", function () {
        return LiveClassSettingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../services/institute-setting-service/institute-setting.service */
      "./src/app/services/institute-setting-service/institute-setting.service.ts");

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

      var LiveClassSettingComponent =
      /** @class */
      function () {
        var LiveClassSettingComponent = /*#__PURE__*/function () {
          function LiveClassSettingComponent(commonService, services, auth, apiService, httpService) {
            _classCallCheck(this, LiveClassSettingComponent);

            this.commonService = commonService;
            this.services = services;
            this.auth = auth;
            this.apiService = apiService;
            this.httpService = httpService;
            this.show_vdocipher_video_ready_sms_to_admin = false;
            this.currentSection = 'section0';
            this.zoomDetails = [];
            this.vdocipher_watch_multiplier = '';
            this.enable_vdoCipher_feature = '0';
            this.vdocipher_live_class_watch_multiplier = '';
            this.liveClassSettings = {
              is_proctur_live_recording_allow: 0,
              institute_id: sessionStorage.getItem('institute_id'),
              proctur_live_recorded_session_download_visibilty: {
                student: '',
                teacher: '',
                open_user: '',
                admin: ''
              },
              proctur_live_recorded_session_view_visibility: {
                student: '',
                teacher: '',
                openApp: '',
                admin: ''
              },
              view_proctur_live_recorded_session: {
                normal: '',
                VdoCipher: '',
                Vimeo: ''
              },
              live_class_attendance_partial_present_notification: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              live_class_attendance_stat_notification: {
                teacher: '',
                admin: ''
              },
              live_class_attendance_absent_notification: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              proctur_live_integration_with_vdoCipher: '',
              proctur_live_integration_with_vimeo: '',
              live_class_attendance_notification: '-1',
              live_class_attendance_threshold: '',
              vdocipher_watch_multiplier: '',
              //vdocipher_update_video_watch_time_mode: '',
              //vdocipher_live_class_update_video_watch_time_mode: '',
              vdocipher_live_class_watch_multiplier: ''
            };
            this.zoomOBJ = {
              institute_id: sessionStorage.getItem('institute_id'),
              account_name: '',
              email_id: '',
              sdk_api_key: '',
              sdk_api_secret: '',
              jwt_access_token: '',
              jwt_api_key: '',
              jwt_api_secret: '',
              user_limit: '',
              enable_recording: false,
              enable_attendance: false
            }; //fetch settings tab switch info

            this.jsonFlagForSetting = false;
          }

          _createClass(LiveClassSettingComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.enable_vdoCipher_feature = sessionStorage.getItem('enable_vdoCipher_feature');

              if (sessionStorage.getItem('enable_vdoCipher_feature') == '1' && sessionStorage.getItem('enable_vimeo_feature') == '1') {
                this.show_vdocipher_video_ready_sms_to_admin = true;
              }

              this.getZoomDetails();
            }
          }, {
            key: "fetchSettingsInfo",
            value: function fetchSettingsInfo() {
              this.jsonFlagForSetting = true;
            }
          }, {
            key: "scrollTo",
            value: function scrollTo(section) {
              document.querySelector('#' + section).scrollIntoView();
              this.currentSection = section;
            }
          }, {
            key: "convertBoolenToNumber",
            value: function convertBoolenToNumber(data) {
              if (data) {
                return 1;
              } else {
                return 0;
              }
            }
          }, {
            key: "getSumForRecordedSession",
            value: function getSumForRecordedSession(data) {
              var total = 0;

              for (var i = 0; i < Object.keys(data).length; i++) {
                if (Object.keys(data)[i] == 'student' && data.student == true) {
                  total = total + 1;
                } else if (Object.keys(data)[i] == 'VdoCipher' && data.VdoCipher == true) {
                  total = total + 2;
                } else if (Object.keys(data)[i] == 'Vimeo' && data.Vimeo == true) {
                  total = total + 4;
                }
              }

              return total;
            }
          }, {
            key: "getSumOfTableField",
            value: function getSumOfTableField(data) {
              var total = 0;

              for (var i = 0; i < Object.keys(data).length; i++) {
                if (Object.keys(data)[i] == 'normal' && data.normal == true) {
                  total = total + 1;
                } else if (Object.keys(data)[i] == 'parent' && data.parent == true) {
                  total = total + 4;
                } else if (Object.keys(data)[i] == 'gaurdian' && data.gaurdian == true) {
                  total = total + 32;
                } else if (Object.keys(data)[i] == 'teacher' && data.teacher == true) {
                  total = total + 8;
                } else if (Object.keys(data)[i] == 'admin' && data.admin == true) {
                  total = total + 16;
                } else if (Object.keys(data)[i] == 'openApp' && data.openApp == true) {
                  total = total + 64;
                }
              }

              return total;
            }
          }, {
            key: "constructJsonToSend",
            value: function constructJsonToSend() {
              var obj = Object.assign({}, this.liveClassSettings);
              obj.institute_id = Number(this.liveClassSettings.institute_id);
              obj.is_proctur_live_recording_allow = this.convertBoolenToNumber(this.liveClassSettings.is_proctur_live_recording_allow);
              obj.proctur_live_recorded_session_download_visibilty = this.getSumOfTableField(this.liveClassSettings.proctur_live_recorded_session_download_visibilty);
              obj.proctur_live_integration_with_vdoCipher = this.convertBoolenToNumber(this.liveClassSettings.proctur_live_integration_with_vdoCipher);
              obj.proctur_live_integration_with_vimeo = this.convertBoolenToNumber(this.liveClassSettings.proctur_live_integration_with_vimeo);
              obj.live_class_attendance_absent_notification = this.getSumOfTableField(this.liveClassSettings.live_class_attendance_absent_notification);
              obj.proctur_live_recorded_session_view_visibility = this.getSumOfTableField(this.liveClassSettings.proctur_live_recorded_session_view_visibility);
              obj.view_proctur_live_recorded_session = this.getSumForRecordedSession(this.liveClassSettings.view_proctur_live_recorded_session);
              obj.live_class_attendance_partial_present_notification = this.getSumOfTableField(this.liveClassSettings.live_class_attendance_partial_present_notification);
              obj.live_class_attendance_stat_notification = this.getSumOfTableField(this.liveClassSettings.live_class_attendance_stat_notification);
              obj.live_class_attendance_threshold = Number(this.liveClassSettings.live_class_attendance_threshold);
              obj.live_class_attendance_absent_notification = this.getSumOfTableField(this.liveClassSettings.live_class_attendance_absent_notification);
              obj.vdocipher_watch_multiplier = Number(this.liveClassSettings.vdocipher_watch_multiplier ? this.liveClassSettings.vdocipher_watch_multiplier : 0); //obj.vdocipher_update_video_watch_time_mode = this.liveClassSettings.vdocipher_update_video_watch_time_mode;
              //obj.vdocipher_live_class_update_video_watch_time_mode = this.liveClassSettings.vdocipher_live_class_update_video_watch_time_mode;

              obj.vdocipher_live_class_watch_multiplier = this.liveClassSettings.vdocipher_live_class_watch_multiplier ? this.liveClassSettings.vdocipher_live_class_watch_multiplier : 0;
              return obj;
            }
          }, {
            key: "Validation",
            value: function Validation() {
              if (this.liveClassSettings.live_class_attendance_notification === '-1') {
                this.commonService.showErrorMessage('error', '', "Please select Absent Notification value");
                return false;
              } //   else if(this.liveClassSettings.proctur_live_integration_with_vdoCipher==''){
              //     this.commonService.showErrorMessage('error', '', "Please select Absent Notification value"); 
              // return false;
              //   }


              return true;
            }
          }, {
            key: "saveLiveClassSettings",
            value: function saveLiveClassSettings() {
              var _this25 = this;

              // if(this.Validation()){
              var dataToSend = {};
              dataToSend = this.constructJsonToSend();
              console.log(dataToSend);
              this.auth.showLoader();
              this.apiService.savePartialData(dataToSend).subscribe(function (res) {
                _this25.auth.hideLoader();

                _this25.commonService.showErrorMessage('success', '', "All your setting saved successfully");

                _this25.cancel();
              }, function (err) {
                _this25.auth.hideLoader();

                _this25.commonService.showErrorMessage('error', '', err.error.message);
              }); //}
            }
          }, {
            key: "getZoomDetails",
            value: function getZoomDetails() {
              var _this26 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/meeting_manager/getAllZoomAccount/' + sessionStorage.getItem('institute_id')).subscribe(function (res) {
                _this26.auth.hideLoader();

                _this26.zoomDetails = res.result;
              }, function (err) {
                _this26.auth.hideLoader();

                _this26.commonService.showErrorMessage('error', '', err.error.message);
              });
            } //datashow:boolean=false;

          }, {
            key: "editZoom",
            value: function editZoom(id) {
              if (document.getElementById(("data" + id).toString()).classList) {
                document.getElementById(("data" + id).toString()).classList.remove('displayComp');
                document.getElementById(("data" + id).toString()).classList.add('editComp');
              } //this.datashow =!this.datashow;

            }
          }, {
            key: "deleteZoom",
            value: function deleteZoom(id) {
              var _this27 = this;

              if (confirm('Do you really want to delete?')) {
                this.auth.showLoader();
                this.httpService.deleteData('/api/v1/meeting_manager/deleteZoomAccount/' + id, '').subscribe(function (res) {
                  _this27.auth.hideLoader();

                  _this27.commonService.showErrorMessage('success', '', 'Deleted successfully');

                  _this27.getZoomDetails();
                }, function (err) {
                  _this27.auth.hideLoader();

                  _this27.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "cancelRow",
            value: function cancelRow(id) {
              if (document.getElementById(("data" + id).toString()).classList) {
                document.getElementById(("data" + id).toString()).classList.remove('editComp');
                document.getElementById(("data" + id).toString()).classList.add('displayComp');
              }

              this.getZoomDetails();
            }
          }, {
            key: "updateZoom",
            value: function updateZoom(obj) {
              var _this28 = this;

              if (this.validateZoomDetails(obj)) {
                this.auth.showLoader();
                this.httpService.putData('/api/v1/meeting_manager/updateZoomAccount', obj).subscribe(function (res) {
                  _this28.auth.hideLoader();

                  _this28.commonService.showErrorMessage('success', '', 'Updated successfully');

                  _this28.getZoomDetails();
                }, function (err) {
                  _this28.auth.hideLoader();

                  _this28.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "validateZoomDetails",
            value: function validateZoomDetails(obj) {
              var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,9})+$/;

              if (obj.account_name.trim() != '') {
                if (obj.email_id.trim() != '' && reg.test(obj.email_id)) {
                  if (obj.sdk_api_key != '' && obj.sdk_api_key.trim() != '') {
                    if (obj.sdk_api_secret != '' && obj.sdk_api_secret.trim() != '') {
                      if (obj.jwt_access_token != '' && obj.jwt_access_token != null && obj.jwt_access_token.trim() != '') {
                        if (obj.jwt_api_key != '' && obj.jwt_api_key != null && obj.jwt_api_key.trim() != '') {
                          if (obj.jwt_api_secret != '' && obj.jwt_api_secret != null && obj.jwt_api_secret.trim() != '') {
                            if (obj.user_limit != '' && obj.user_limit > 0) {
                              return true;
                            } else {
                              this.commonService.showErrorMessage('error', '', 'User limit should be greater than 0');
                            }
                          } else {
                            this.commonService.showErrorMessage('error', '', 'Please enter JWT API Secret Key');
                            return false;
                          }
                        } else {
                          this.commonService.showErrorMessage('error', '', 'Please enter JWT API key');
                          return false;
                        }
                      } else {
                        this.commonService.showErrorMessage('error', '', 'Please enter JWT Access Token');
                        return false;
                      }
                    } else {
                      this.commonService.showErrorMessage('error', '', 'Please enter SDK secret key');
                      return false;
                    }
                  } else {
                    this.commonService.showErrorMessage('error', '', 'Please enter SDK API key');
                    return false;
                  }
                } else {
                  this.commonService.showErrorMessage('error', '', 'Please enter valid Email ID');
                  return false;
                }
              } else {
                this.commonService.showErrorMessage('error', '', 'Please enter Account Name');
                return false;
              }
            }
          }, {
            key: "saveZoomDetails",
            value: function saveZoomDetails() {
              var _this29 = this;

              if (this.validateZoomDetails(this.zoomOBJ)) {
                this.auth.showLoader();
                this.httpService.postData('/api/v1/meeting_manager/createZoomAccount', this.zoomOBJ).subscribe(function (res) {
                  _this29.auth.hideLoader();

                  _this29.commonService.showErrorMessage('success', '', 'Created successfully');

                  _this29.getZoomDetails();

                  _this29.zoomOBJ = {
                    institute_id: sessionStorage.getItem('institute_id'),
                    email_id: '',
                    account_name: '',
                    sdk_api_key: '',
                    sdk_api_secret: '',
                    jwt_access_token: '',
                    jwt_api_key: '',
                    jwt_api_secret: '',
                    user_limit: '',
                    enable_recording: '',
                    enable_attendance: false
                  };
                }, function (err) {
                  _this29.auth.hideLoader();

                  _this29.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "maxlenth",
            value: function maxlenth(data, limit) {
              if (data.length > limit) {
                this.services.showErrorMessage(this.services.toastTypes.info, '', "Please Enter upto" + " " + limit + " " + "character only");
              }
            }
          }, {
            key: "cancel",
            value: function cancel() {}
          }, {
            key: "ClearZoomJSON",
            value: function ClearZoomJSON() {
              this.zoomOBJ = {
                institute_id: sessionStorage.getItem('institute_id'),
                email_id: '',
                account_name: '',
                sdk_api_key: '',
                sdk_api_secret: '',
                jwt_access_token: '',
                jwt_api_key: '',
                jwt_api_secret: '',
                user_limit: '',
                enable_recording: '',
                enable_attendance: false
              };
            }
          }, {
            key: "fillTableCheckboxValue",
            value: function fillTableCheckboxValue(dataJSON, res) {
              // console.log(res);
              if (res) {
                res = parseInt(res);

                if (res > 0) {
                  var count = 1;
                  var i = 2;

                  while (i != res) {
                    i = i + 2;
                    count++;
                  }

                  var binaryConversion = count.toString(2);
                  var binaryArray = [0, 0, 0, 0, 0];
                  var k = 0;

                  for (var p = binaryConversion.length - 1; p >= 0; p--) {
                    binaryArray[k] = parseInt(binaryConversion[p]);
                    k++;
                  }

                  if (dataJSON.hasOwnProperty('student')) {
                    if (binaryArray[0] == 1) {
                      dataJSON.student = true;
                    } else {
                      dataJSON.student = false;
                    }
                  }

                  if (dataJSON.hasOwnProperty('parent')) {
                    if (binaryArray[1] == 1) {
                      dataJSON.parent = true;
                    } else {
                      dataJSON.parent = false;
                    }
                  }

                  if (dataJSON.hasOwnProperty('teacher')) {
                    if (binaryArray[2] == 1) {
                      dataJSON.teacher = true;
                    } else {
                      dataJSON.teacher = false;
                    }
                  }

                  if (dataJSON.hasOwnProperty('admin')) {
                    if (binaryArray[3] == 1) {
                      dataJSON.admin = true;
                    } else {
                      dataJSON.admin = false;
                    }
                  }

                  if (dataJSON.hasOwnProperty('gaurdian')) {
                    if (binaryArray[4] == 1) {
                      dataJSON.gaurdian = true;
                    } else {
                      dataJSON.gaurdian = false;
                    }
                  }

                  if (dataJSON.hasOwnProperty('openApp')) {
                    if (binaryArray[5] == 1) {
                      dataJSON.openApp = true;
                    } else {
                      dataJSON.openApp = false;
                    }
                  }
                }
              }
            }
          }, {
            key: "fillJSONData",
            value: function fillJSONData(data) {
              this.fillTableCheckboxValue(this.liveClassSettings.live_class_attendance_absent_notification, data.live_class_attendance_absent_notification);
              this.liveClassSettings.live_class_attendance_notification = data.live_class_attendance_notification;
              this.fillTableCheckboxValue(this.liveClassSettings.live_class_attendance_partial_present_notification, data.live_class_attendance_partial_present_notification);
              this.fillTableCheckboxValue(this.liveClassSettings.live_class_attendance_stat_notification, data.live_class_attendance_stat_notification);
              this.liveClassSettings.live_class_attendance_threshold = data.live_class_attendance_threshold;
              this.fillTableCheckboxValue(this.liveClassSettings.live_class_attendance_absent_notification, data.live_class_attendance_absent_notification);
              this.liveClassSettings.vdocipher_watch_multiplier = data.vdocipher_watch_multiplier;
              this.vdocipher_watch_multiplier = data.vdocipher_watch_multiplier; //this.liveClassSettings.vdocipher_update_video_watch_time_mode = data.vdocipher_update_video_watch_time_mode;

              this.vdocipher_live_class_watch_multiplier = data.vdocipher_live_class_watch_multiplier; //  this.liveClassSettings.vdocipher_live_class_watch_multiplier = data.vdocipher_live_class_watch_multiplier;
              //this.liveClassSettings.vdocipher_live_class_update_video_watch_time_mode = data.vdocipher_live_class_update_video_watch_time_mode;
            }
          }]);

          return LiveClassSettingComponent;
        }();

        LiveClassSettingComponent.ctorParameters = function () {
          return [{
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceFactory"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_5__["InstituteSettingService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }];
        };

        LiveClassSettingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-live-class-setting',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./live-class-setting.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/live-class-setting/live-class-setting.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./live-class-setting.component.scss */
          "./src/app/components/live-classes-module/live-class-setting/live-class-setting.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceFactory"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_5__["InstituteSettingService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])], LiveClassSettingComponent);
        return LiveClassSettingComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/live-classes-module/live-classes-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/live-classes-module/live-classes-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: LiveClassesRoutingModule */

    /***/
    function srcAppComponentsLiveClassesModuleLiveClassesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveClassesRoutingModule", function () {
        return LiveClassesRoutingModule;
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


      var _live_classes_live_classes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./live-classes/live-classes.component */
      "./src/app/components/live-classes-module/live-classes/live-classes.component.ts");
      /* harmony import */


      var _edit_class_edit_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-class/edit-class.component */
      "./src/app/components/live-classes-module/edit-class/edit-class.component.ts");
      /* harmony import */


      var _add_class_add_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-class/add-class.component */
      "./src/app/components/live-classes-module/add-class/add-class.component.ts");
      /* harmony import */


      var _attendance_report_attendance_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./attendance-report/attendance-report.component */
      "./src/app/components/live-classes-module/attendance-report/attendance-report.component.ts");
      /* harmony import */


      var _live_class_setting_live_class_setting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./live-class-setting/live-class-setting.component */
      "./src/app/components/live-classes-module/live-class-setting/live-class-setting.component.ts");

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
        component: _live_classes_live_classes_component__WEBPACK_IMPORTED_MODULE_2__["LiveClassesComponent"]
      }, {
        path: 'add',
        component: _add_class_add_class_component__WEBPACK_IMPORTED_MODULE_4__["AddClassComponent"]
      }, {
        path: 'edit/:id',
        component: _edit_class_edit_class_component__WEBPACK_IMPORTED_MODULE_3__["EditClassComponent"]
      }, {
        path: 'setting',
        component: _live_class_setting_live_class_setting_component__WEBPACK_IMPORTED_MODULE_6__["LiveClassSettingComponent"]
      }, {
        path: 'edit/:id',
        component: _live_class_setting_live_class_setting_component__WEBPACK_IMPORTED_MODULE_6__["LiveClassSettingComponent"]
      }, {
        path: 'report/:id',
        component: _attendance_report_attendance_report_component__WEBPACK_IMPORTED_MODULE_5__["AttendanceReportComponent"]
      }];

      var LiveClassesRoutingModule =
      /** @class */
      function () {
        var LiveClassesRoutingModule = function LiveClassesRoutingModule() {
          _classCallCheck(this, LiveClassesRoutingModule);
        };

        LiveClassesRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], LiveClassesRoutingModule);
        return LiveClassesRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/live-classes-module/live-classes.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/live-classes-module/live-classes.module.ts ***!
      \***********************************************************************/

    /*! exports provided: LiveClassesModule */

    /***/
    function srcAppComponentsLiveClassesModuleLiveClassesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveClassesModule", function () {
        return LiveClassesModule;
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


      var _live_classes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./live-classes-routing.module */
      "./src/app/components/live-classes-module/live-classes-routing.module.ts");
      /* harmony import */


      var _add_class_add_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-class/add-class.component */
      "./src/app/components/live-classes-module/add-class/add-class.component.ts");
      /* harmony import */


      var _edit_class_edit_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-class/edit-class.component */
      "./src/app/components/live-classes-module/edit-class/edit-class.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
      /* harmony import */


      var _live_classes_live_classes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./live-classes/live-classes.component */
      "./src/app/components/live-classes-module/live-classes/live-classes.component.ts");
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/products.service */
      "./src/app/services/products.service.ts");
      /* harmony import */


      var _attendance_report_attendance_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./attendance-report/attendance-report.component */
      "./src/app/components/live-classes-module/attendance-report/attendance-report.component.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var _live_class_setting_live_class_setting_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./live-class-setting/live-class-setting.component */
      "./src/app/components/live-classes-module/live-class-setting/live-class-setting.component.ts");
      /* harmony import */


      var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/institute-setting-service/institute-setting.service */
      "./src/app/services/institute-setting-service/institute-setting.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


      var LiveClassesModule =
      /** @class */
      function () {
        var LiveClassesModule = function LiveClassesModule() {
          _classCallCheck(this, LiveClassesModule);
        };

        LiveClassesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _live_classes_routing_module__WEBPACK_IMPORTED_MODULE_2__["LiveClassesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], // BsDatepickerModule,
          ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"].forRoot()],
          declarations: [_live_classes_live_classes_component__WEBPACK_IMPORTED_MODULE_8__["LiveClassesComponent"], _add_class_add_class_component__WEBPACK_IMPORTED_MODULE_3__["AddClassComponent"], _edit_class_edit_class_component__WEBPACK_IMPORTED_MODULE_4__["EditClassComponent"], _attendance_report_attendance_report_component__WEBPACK_IMPORTED_MODULE_11__["AttendanceReportComponent"], _live_class_setting_live_class_setting_component__WEBPACK_IMPORTED_MODULE_13__["LiveClassSettingComponent"]],
          providers: [_services_products_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_12__["ExcelService"], _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_14__["InstituteSettingService"]]
        })], LiveClassesModule);
        return LiveClassesModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/live-classes-module/live-classes/live-classes.component.scss":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/live-classes-module/live-classes/live-classes.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLiveClassesModuleLiveClassesLiveClassesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nhtml {\n  overflow-y: scroll;\n}\n.made {\n  border: 1px solid black;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  padding-top: 8px;\n}\n.widget {\n  height: auto;\n  width: 85%;\n  background: white;\n  border: 1px solid #efefef;\n  margin-left: 6%;\n  box-shadow: -1px -1px 9px 4px #efefef;\n  border-radius: 10px;\n}\n.skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n.skeleton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n.procturLive {\n  text-decoration: underline;\n  font-weight: bolder;\n  background: #c5dcf87a;\n  width: 21%;\n  padding: 7px;\n  border-radius: 4px;\n}\n.madeNe {\n  width: 95%;\n  margin-left: 3%;\n  margin-top: 17px;\n}\n.made-out {\n  border: 1px solid #efefef;\n}\n.madeNe {\n  height: 180px;\n  overflow: hidden;\n}\n.madeNe .tabel-ne {\n  height: 180px;\n  overflow: auto;\n}\nbs-datepicker-container, bs-daterangepicker-container {\n  left: 854px !important;\n}\n.form-submit .field-radio-wrapper {\n  width: 20px;\n  overflow: hidden;\n  box-sizing: border-box;\n  height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  margin-left: 5px;\n  background: transparent;\n  border-radius: 2px;\n}\n.form-submit .field-radio-wrapper .form-radio {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n.form-submit .field-radio-wrapper label {\n  cursor: pointer;\n}\n.alignment th {\n  text-align: left;\n}\n.alignment td {\n  text-align: left;\n}\n.pointed-one {\n  cursor: pointer;\n}\n.row-inner .field-wrapper {\n  position: relative;\n}\n.row-inner .field-wrapper.datePickerBox .form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.row-inner .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 21px;\n  top: 33px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.made-in .field-checkbox-wrapper .form-checkbox label:after {\n  content: '';\n  width: 16px;\n  height: 17px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 4px;\n}\ntable thead tr th {\n  padding: 14px;\n}\n.view-class {\n  margin-right: 10%;\n  margin-top: -2%;\n  cursor: pointer;\n}\n.teacherId th {\n  text-align: left;\n}\n.teacherId td {\n  text-align: left;\n}\n.made-teacher {\n  width: 95%;\n  margin-left: 3%;\n  margin-top: 17px;\n}\n.made-teacher {\n  height: 292px;\n  overflow: hidden;\n}\n.made-teacher .table-teacher {\n  height: 292px;\n  overflow: auto;\n}\n.middle-section {\n  padding: 1%;\n}\n.border-container {\n  border-top: 1px solid #e3e3e3;\n}\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(\"/./assets/images/calendar.svg\") no-repeat;\n  position: absolute;\n  right: 34px !important;\n  top: 6px;\n  width: 21px;\n  height: 21px;\n  z-index: 20;\n}\n.live-class-list {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 5px 0px;\n  border-bottom: 1px solid #EBEFF2;\n}\n.live-class-list .live-class-container {\n  display: flex;\n  flex-direction: row;\n}\n.live-class-list .live-class-container .field-radio-wrapper {\n  position: relative;\n  margin-right: 20px;\n  font-size: 14px;\n  height: 36px;\n  text-align: center;\n  width: 117px !important;\n  border: 1px solid #DDD1D1;\n  padding: 6px;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: #fff;\n  color: #334D6E;\n  padding: 8px 20px;\n  font-size: 12px;\n  border: 1px solid #E3E8F2;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.live-class-list .live-class-container .field-radio-wrapper label {\n  color: #333333;\n  font-weight: bold;\n}\n.live-class-list .live-class-container .activeTab {\n  border: 1px solid #109CF1;\n  color: #109CF1;\n  font-weight: 700;\n}\n.search-add-class-container {\n  float: right;\n  margin-right: 30px;\n  width: 67%;\n  display: flex;\n  justify-content: flex-end;\n}\n.search-add-class-container .search-filter-wrapper {\n  width: 35%;\n  position: relative;\n  cursor: pointer;\n}\n.search-add-class-container .search-filter-wrapper i {\n  margin-left: 10px;\n  border: 1px solid #DDD1D1;\n  padding: 9px 15px;\n  border-radius: 4px;\n  float: left;\n}\n.search-add-class-container .search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  height: 35px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.search-add-class-container .filter-wrapper {\n  margin-left: 20px;\n}\n.search-add-class-container .filter-wrapper i {\n  position: absolute;\n  right: 7px;\n  padding: 7px 9px;\n  top: 1px;\n  background: white;\n  pointer-events: none;\n}\n.search-add-class-container .filter-wrapper .filter {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  height: 35px;\n  font-size: 14px;\n}\n.customFilter {\n  padding: 15px;\n  width: 25%;\n  position: fixed;\n  right: 30px;\n  background: White;\n  color: #2e3345;\n  border-radius: 4px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.35);\n  z-index: 100;\n  top: 21%;\n  padding-bottom: 0;\n}\n.customFilter .field-checkbox-wrapper {\n  margin-bottom: 15px;\n}\n.customFilter .sortBy {\n  font-weight: 600;\n  border-bottom: 1px solid #F4EBEB;\n  padding-bottom: 5px;\n}\n.add-class {\n  background: #109CF1;\n  border-radius: 4px;\n  border: 1px solid #109CF1;\n  outline: none;\n  text-align: center;\n  padding: 8px 20px;\n  height: 35px;\n  font-weight: 600;\n  color: white;\n  box-shadow: 0px 0px 1px #109CF1;\n}\n.live-class {\n  height: 72vh;\n  max-height: 72vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.live-class ::-webkit-scrollbar {\n  width: 10px;\n}\n.live-class .live-class-list-container {\n  width: 100%;\n}\n.live-class .live-class-list-container .live-class-item {\n  display: flex;\n  margin-bottom: 10px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  padding: 15px;\n  flex-direction: column;\n  width: 24%;\n  margin-left: 1%;\n  margin-right: 1%;\n  margin-top: 1%;\n  border: 2px solid #E3E8F2;\n  float: left;\n  padding-top: 0;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 {\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 10px;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .session_name_and_id_container {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  text-align: left;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .session_name_and_id_container .session_name {\n  font-size: 14px;\n  font-weight: 600;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .session_name_and_id_container .session_id {\n  margin-top: 5px;\n  color: #acacac;\n  font-size: 12px;\n  font-weight: 600;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .session_name_and_id_container .class-for-name {\n  font-weight: 600;\n  color: #0084f6;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .upcoming_class {\n  color: #ec7600;\n  font-weight: 600;\n  margin-right: 5px;\n  margin-top: 5px;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .notification_container {\n  display: flex;\n  flex-direction: row;\n  width: 45%;\n  justify-content: flex-end;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .notification_container .spinner {\n  margin-top: 7px;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .notification_container .spinner > div {\n  width: 5px;\n  height: 5px;\n  background-color: #ec7600;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .notification_container .spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .notification_container .spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .notification_container i {\n  margin-left: 5px;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .notification_container .notification_btn {\n  padding: 5px;\n  text-align: left;\n  color: #1283f4;\n  font-size: 13px;\n  border: 1px solid #daecfd;\n  background: white;\n  outline: none;\n  height: 30px;\n  width: 95%;\n  margin-right: 10px;\n  border-radius: 4px;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .action_container {\n  width: 15%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .action_container .action_edit {\n  padding: 5px;\n  text-align: center;\n  color: #1283f4;\n  font-size: 13px;\n  border: 1px solid #daecfd;\n  outline: none;\n  background: white;\n  height: 30px;\n  width: 100%;\n  border-radius: 4px;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .action_container .action_edit i {\n  margin-left: 10px;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-1 .action_container .action_delete {\n  padding: 5px;\n  text-align: left;\n  color: #fa3145;\n  font-size: 13px;\n  border: 1px solid #ffe2e2;\n  outline: none;\n  background: white;\n  height: 30px;\n  width: 100%;\n  border-radius: 4px;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-2 {\n  display: flex;\n  flex-direction: column;\n  padding-top: 10px;\n  width: 100%;\n  padding-bottom: 10px;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-2 .item_type_1 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 5px;\n  font-size: 12px;\n}\n.live-class .live-class-list-container .live-class-item .sub-item-2 .item_type_2 {\n  width: 12%;\n  display: flex;\n  justify-content: flex-end;\n}\n.live-class .live-class-list-container .live-class-item .start_session {\n  background: #67c967;\n  color: white;\n  text-align: center;\n  background: #109CF1;\n  color: white;\n  padding: 6px 20px;\n  font-size: 13px;\n  border-radius: 5px;\n  font-weight: 500;\n  margin: auto;\n}\n.live-class .live-class-list-container .live-class-item .notAllowed {\n  background: #acacac;\n  color: white;\n  border-radius: 4px;\n  text-align: center;\n  padding: 6px 20px;\n  font-size: 13px;\n  border-radius: 5px;\n  font-weight: 500;\n  margin: auto;\n}\n.live-class .live-class-list-container .live-class-item .repeat_session {\n  background: white;\n  color: #1283f4;\n  border-radius: 4px;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 8px;\n  font-weight: 600;\n  border: 1px solid #1283f4;\n}\n.live-class .live-class-list-container .live-class-item .item_type_3 {\n  width: 9%;\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  text-align: right;\n  padding-right: 15px;\n  height: 52px;\n}\n.note-container {\n  margin-left: 1%;\n  margin-top: 15px;\n  width: 98%;\n  border: 1px solid #c5c5cc;\n  border-radius: 4px;\n  padding: 10px;\n  color: #3f4260;\n}\n.filter-res.pagination {\n  width: 100%;\n}\n.pagination .first:before {\n  content: \"« \";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .last:after {\n  content: \" »\";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .batch-size {\n  font-size: 16px;\n  font-weight: 800;\n  border-bottom: 1px solid black;\n}\n.pagination li {\n  border-right: 1px solid #ccc;\n  padding: 0px 7px;\n  margin: 0;\n  line-height: 10px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.pagination li a {\n  line-height: 10px;\n  font-size: 16px;\n  font-weight: 800;\n  border: none;\n  padding: 0px 14px;\n}\n.pagination li :hover {\n  background-color: transparent !important;\n}\n.pagination li:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 2000px) and (min-width: 1400px) {\n  .search-filter-wrapper i {\n    right: 28px !important;\n    top: 4px !important;\n  }\n}\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n}\n.confirmation_popup {\n  position: fixed;\n  top: 35%;\n  left: 40%;\n  width: 300px;\n  background: white;\n  height: auto;\n  padding: 20px;\n  z-index: 100;\n  border-radius: 6px;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n}\n.confirm_title {\n  font-size: 20px;\n}\n.confirmation_msg_box {\n  margin-top: 20px;\n  color: #858585;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n  border: 2px solid #0084f6;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 14px;\n  display: inline-block;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.confirmation_popup .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.confirmation_button_container {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n.confirmation_button_container input {\n  width: 80px;\n  border-radius: 4px;\n}\n.qInfoIcon {\n  width: 17px;\n  margin-left: 4px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n.tooltip-box-field {\n  min-height: 41px;\n  line-height: 12px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  font-weight: bold;\n  top: 30px;\n}\n.tooltip-box-field.lg {\n  width: 200px;\n  white-space: nowrap;\n  min-height: 50px;\n  line-height: 20px;\n  padding: 5px 5px;\n}\n.tooltip-box-field.sm {\n  width: 100px;\n  white-space: nowrap;\n  min-height: 40px;\n  padding: 5px 5px;\n}\n.viewAction {\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #0084f6;\n  outline: none;\n  text-align: center;\n  padding: 10px;\n  height: 34px;\n  font-weight: 600;\n  color: #0084f6;\n  box-shadow: 0px 0px 1px #0084f6;\n  cursor: pointer;\n}\n.download_popup {\n  border: none;\n  width: 40%;\n  top: 20%;\n  left: 35%;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n.table-container .heading-container .heading-item {\n  width: 60%;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 40vh;\n  max-height: 40vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 60%;\n}\n.ga-modal-wrapper {\n  right: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(136, 136, 136, 0.6);\n  z-index: 999;\n}\n.ga-modal-wrapper .ga-modal-container {\n  display: flex;\n  overflow-y: auto;\n  height: 100%;\n}\n.ga-modal-wrapper .ga-modal-container .ga-modal {\n  margin: auto;\n  background: #fff;\n  border: 2pt solid #fff;\n  border-radius: .2em;\n  box-shadow: 0 2pt 3pt #999;\n  min-width: 30%;\n}\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-head {\n  padding: .5em 1em;\n  border-bottom: 1pt solid #ddd;\n  font-weight: bold;\n  text-align: center;\n}\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-body {\n  padding: 1em;\n  text-align: center;\n}\n.disabledButton {\n  cursor: no-drop;\n  opacity: 0.5;\n}\n.action_upload {\n  padding: 5px;\n  text-align: center;\n  color: #1283f4;\n  font-size: 13px;\n  border: 1px solid #daecfd;\n  outline: none;\n  background: white;\n  height: 30px;\n  width: 100%;\n}\n.progress-bar-wrapper {\n  float: left;\n  width: 80%;\n}\n.upload-bar {\n  position: relative;\n  height: 8px;\n  width: 100%;\n  background: #ccc;\n  border-radius: 0;\n  overflow: hidden;\n  margin: 10px 0 5px;\n}\n.upload-bar > div {\n  position: absolute;\n  height: 100%;\n  width: 0%;\n  left: 0;\n  background: blue;\n  top: 0;\n  border-radius: 0;\n  transition: all 0.5s ease;\n}\n.dropdown-menu {\n  position: absolute;\n  top: -.5rem;\n  left: -10rem;\n  min-width: 170px;\n}\n.dropdown-menu .dropdown-item {\n  padding: .4em 1em;\n  border-right: 1pt solid #eee;\n  color: black;\n  display: flex;\n  cursor: pointer;\n}\n.dropdown-menu .dropdown-item:hover {\n  color: white;\n  background: #0084f6;\n}\n.new-keyword {\n  background-color: #27c24c;\n  color: #fff;\n  border-radius: 4px;\n  letter-spacing: 0.7px;\n  padding: 5px;\n  margin: 0 5px;\n  font-size: 12px;\n  width: 50px;\n  text-align: center;\n}\n#zoomFAQ .modal-dialog {\n  width: 700px;\n  margin-top: 8%;\n}\n#zoomFAQ .modal-body {\n  height: 220px;\n  overflow-y: auto;\n}\n#zoomFAQ ul, #zoomFAQ ol {\n  list-style-type: decimal;\n  padding-left: 20px;\n  margin-top: 0px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n#zoomFAQ ul li, #zoomFAQ ol li {\n  margin-bottom: 5px;\n}\n#zoomFAQ ul {\n  color: gray;\n  list-style-type: disc;\n}\n#zoomFAQ .new-modules-list {\n  margin-bottom: 20px;\n}\n#zoomFAQ .module-title {\n  text-transform: uppercase;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n#zoomFAQ .module-title span {\n  background: #00b55a;\n  padding: 5px 20px;\n  color: white;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.feedBackBtn {\n  color: #0084f6;\n  background: none;\n  border: 1px solid #0084f6;\n  width: auto;\n  font-weight: 600;\n}\n.popupWrapper {\n  z-index: 23;\n}\n#helpFAQ .modal-dialog {\n  width: 800px;\n}\n#helpFAQ .modal-body {\n  height: 450px;\n  overflow-y: auto;\n}\n#helpFAQ ul, #helpFAQ ol {\n  list-style-type: decimal;\n  padding-left: 20px;\n  margin-top: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n#helpFAQ ul li, #helpFAQ ol li {\n  margin-bottom: 5px;\n}\n#helpFAQ ul {\n  color: gray;\n  list-style-type: disc;\n}\n#helpFAQ .new-modules-list {\n  margin-bottom: 20px;\n}\n#helpFAQ .module-title {\n  text-transform: uppercase;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n#helpFAQ .module-title span {\n  background: #00b55a;\n  padding: 5px 20px;\n  color: white;\n  border-radius: 4px;\n  font-size: 12px;\n}\n#helpFAQ .old span {\n  background: #ff6c24;\n}\n.videoplayer {\n  position: fixed;\n  top: 15%;\n  left: 30%;\n  z-index: 10;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.video-input {\n  border: 1pt solid #ddd;\n  width: 100%;\n  border-radius: 3px;\n  padding: 1em;\n  color: #334e4c;\n  -webkit-box-shadow: inset 0 0 2pt #f1f1f1;\n}\n.m0 {\n  margin: 0;\n  margin-top: 5px;\n}\n.underline {\n  border-bottom: 1px solid #ECEAEA;\n  color: black;\n  padding-bottom: 5px;\n  font-weight: 600;\n}\n.uploadImg {\n  background: #F3F1F1;\n  border-radius: 50%;\n  width: 160px;\n  margin-left: 30%;\n  padding: 10px;\n}\n.w96 {\n  width: 96%;\n  margin: 0px auto;\n}\n.position {\n  position: absolute;\n  left: 27%;\n}\n.bg_live_class {\n  background: url('no_upcoming.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 500px;\n  margin-top: 100px;\n}\n.schedule-text {\n  color: #8A8B8B;\n  font-weight: 200;\n  font-size: 24px;\n  display: block;\n  width: 300px;\n  line-height: 1.5;\n}\n.add_live_class {\n  background-color: #109CF1;\n  color: white;\n  padding: 8px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  margin-left: 10px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.ongoing {\n  background: linear-gradient(90deg, #eba667 19%, #fb9a40 100%);\n  color: #fff;\n}\n.borderbottom1 {\n  border-bottom: 1px solid #DFE5F0;\n  width: 100%;\n}\n.session_id {\n  font-size: 13px;\n  font-weight: 500;\n  color: #A8A1A1;\n  margin-bottom: 1rem;\n}\n.min15 {\n  border-radius: 150px 0px 0px 150px / 150px 0px 0px 150px;\n  padding: 4px 10px;\n  background: linear-gradient(270deg, #bf80f1 19%, rgba(190, 106, 255, 0.6618) 100%);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  width: 42%;\n}\n.date_tag {\n  background-color: #109CF1;\n  color: #fff;\n  font-weight: 500;\n  font-size: 13px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  z-index: 20;\n}\n.borderbottom {\n  border-bottom: 1px solid #DFE5F0;\n  margin-top: -12px;\n}\n.viewClassPopop .flex {\n  display: flex;\n}\n.viewClassPopop .modal-title {\n  font-size: 12px;\n  font-weight: 300;\n  color: #334D6E;\n  margin-bottom: 0;\n  float: left;\n}\n.viewClassPopop .class_text {\n  font-size: 13px;\n  font-weight: 300;\n  color: #908D8D;\n  margin-bottom: 0px;\n}\n.viewClassPopop .class_name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #2B2626;\n}\n.viewClassPopop .name {\n  color: #A8A1A1;\n  font-size: 13px;\n  font-weight: 400;\n  margin-right: 10px;\n}\n.viewClassPopop .value {\n  color: #4C6380;\n  font-size: 13px;\n  font-weight: 400;\n}\n.viewClassPopop .zoom2 {\n  color: #109CF1;\n  font-size: 13px;\n  font-weight: 600;\n  margin-left: 5px;\n}\n.viewClassPopop .div-border {\n  border-bottom: 1px solid #ECEAEA;\n  width: 70%;\n  margin: 10px 0px;\n}\n.viewClassPopop .mb-0 {\n  margin-bottom: 0px;\n}\n.viewClassPopop .image-container {\n  display: flex;\n  justify-content: center;\n}\n.viewClassPopop .img_doc {\n  width: 24px;\n  height: auto;\n}\n.viewClassPopop .profile {\n  width: 30px;\n  height: auto;\n  z-index: 10;\n}\n.viewClassPopop .overlap {\n  margin-left: -10px;\n  z-index: 1;\n}\n.viewClassPopop .div-border-left {\n  border-left: 1px solid #ECEAEA;\n}\n.viewClassPopop .section1 {\n  width: 40%;\n  margin-bottom: 10px;\n}\n.viewClassPopop .section2 {\n  width: 40%;\n  padding-left: 1rem;\n  margin-bottom: 10px;\n}\n.viewClassPopop .pl-10 {\n  padding-left: 10px;\n}\n.dateColor {\n  font-size: 12px;\n  color: #4C6380;\n}\n.icon_flex {\n  margin: 10px 0px;\n  display: flex;\n}\n.borderright {\n  border-right: 1px solid #DFE5F0;\n  margin: 0px 10px;\n}\n.mt-4 {\n  margin-top: 4px;\n}\n.searchTextClass {\n  height: 34px;\n  border-radius: 4px;\n  padding: 9px 10px;\n}\n.tag {\n  color: #fff;\n  background: linear-gradient(270deg, #bf80f1 19%, rgba(190, 106, 255, 0.6618) 100%);\n  margin: -8px 0 0 -12px;\n  font-size: 10px;\n  padding: 2px 10px;\n  float: right;\n}\n::ng-deep bs-daterangepicker-container {\n  left: -10% !important;\n}\n.filterDate {\n  height: 34px;\n  border-radius: 0 4px 4px 0;\n  padding: 9px 15px;\n  width: 75%;\n  cursor: pointer;\n}\n.setupText {\n  background: #ffe8f4;\n  padding: 7px;\n  border-radius: 4px;\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXZlLWNsYXNzZXMtbW9kdWxlL2xpdmUtY2xhc3Nlcy9saXZlLWNsYXNzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQWtCO0FBRXRCO0FBQUU7RUFDSSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBR3RCO0FBQUU7RUFDSSxZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFHekI7QUFHRTtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFQZ0I7RUFRaEIsa0JBQWtCO0FBQXhCO0FBTkU7RUFRUSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiwyREFBOEU7RUFDOUUsbURBQTJDO1VBQTNDLDJDQUEyQztBQUVyRDtBQUVBO0VBQ0UsMEJBQTBCO0VBQUMsbUJBQW1CO0VBQUMscUJBQXFCO0VBQUMsVUFBVTtFQUFDLFlBQVk7RUFBQyxrQkFBa0I7QUFNakg7QUFKRTtFQUNJLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBT3RCO0FBSkU7RUFDSSx5QkFBeUI7QUFPL0I7QUFKRTtFQUNJLGFBQWE7RUFDYixnQkFBZ0I7QUFPdEI7QUFURTtFQUlRLGFBQWE7RUFDYixjQUFjO0FBU3hCO0FBTkU7RUFDRSxzQkFBc0I7QUFTMUI7QUFQRTtFQUVRLFdBQVc7RUFDWCxnQkFBZ0I7RUFFaEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBUzVCO0FBcEJFO0VBYVksVUFBVTtFQUNWLGtCQUFr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dkI7QUFoSEE7RUF3RUksVUFBVTtFQUNWLGtCQUFrQjtFQUNqQixtQkFBbUI7QUE0Q3hCO0FBdEhBO0VBNkVHLGtCQUFrQjtBQTZDckI7QUExQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQTZDaEI7QUEzQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQThDZjtBQTVDQTtFQUNFLCtCQUE4QjtFQUM5QixnQkFBZ0I7QUErQ2xCO0FBN0NBO0VBQ0UsZUFBZTtBQWdEakI7QUE5Q0U7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQWlEckI7QUEvQ0U7RUFFRSxXQUFXO0VBQ1gsa0ZBQXNHO0VBQ3RHLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFpRGhCO0FBL0NFO0VBQ0kscUJBQXFCO0FBa0QzQjtBQWhERTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixlQUFlO0FBbURuQjtBQWpERTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFvRG5CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXZlLWNsYXNzZXMtbW9kdWxlL2xpdmUtY2xhc3Nlcy9saXZlLWNsYXNzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiAgLm1hZGUge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gIH1cblxuICAud2lkZ2V0IHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG4gICAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggOXB4IDRweCAjZWZlZmVmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gICRjb2xvci1iYXNlOiAjZWZlZmVmO1xuICAkY29sb3ItYmFzZTogI2VmZWZlZjtcbiAgJGNvbG9yLWhpZ2hsaWdodDogbGlnaHRlbigkY29sb3ItYmFzZSwgNyUpO1xuICAuc2tlbGV0b24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJhc2U7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRjb2xvci1iYXNlLCAkY29sb3ItaGlnaGxpZ2h0LCAkY29sb3ItYmFzZSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgIH1cbiAgfVxuXG4ucHJvY3R1ckxpdmV7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO2ZvbnQtd2VpZ2h0OiBib2xkZXI7YmFja2dyb3VuZDogI2M1ZGNmODdhO3dpZHRoOiAyMSU7cGFkZGluZzogN3B4O2JvcmRlci1yYWRpdXM6IDRweDtcbn1cbiAgLm1hZGVOZSB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgICAgbWFyZ2luLXRvcDogMTdweDtcbiAgfVxuXG4gIC5tYWRlLW91dCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICB9XG5cbiAgLm1hZGVOZSB7XG4gICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC50YWJlbC1uZSB7XG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cbiAgfVxuICBicy1kYXRlcGlja2VyLWNvbnRhaW5lciwgYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcntcbiAgICBsZWZ0OiA4NTRweCAhaW1wb3J0YW50O1xufVxuICAuZm9ybS1zdWJtaXQge1xuICAgICAgLmZpZWxkLXJhZGlvLXdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIC5mb3JtLXJhZGlvIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVse1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIC5hbGlnbm1lbnQge1xuICAgICAgdGgge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgICB0ZCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgfVxuXG4gIC5wb2ludGVkLW9uZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAucm93LWlubmVyIHtcbiAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDMzcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICAubWFkZS1pbiB7XG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICB0YWJsZSB7XG4gICAgICB0aGVhZCB7XG4gICAgICAgICAgdHIge1xuICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgLnZpZXctY2xhc3Mge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICBtYXJnaW4tdG9wOiAtMiU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAudGVhY2hlcklkIHtcbiAgICAgIHRoIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgICAgdGQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gIH1cblxuICAubWFkZS10ZWFjaGVyIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICB9XG5cbiAgLnRvb2x0aXAge31cblxuICAubWFkZS10ZWFjaGVyIHtcbiAgICAgIGhlaWdodDogMjkycHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgLnRhYmxlLXRlYWNoZXIge1xuICAgICAgICAgIGhlaWdodDogMjkycHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG4gIH1cblxuXG4gIC5taWRkbGUtc2VjdGlvbntcbiAgICBwYWRkaW5nOiAxJTtcbiAgfVxuICAuYm9yZGVyLWNvbnRhaW5lcntcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTNlMztcbiAgfVxuICAvLyAuc2VsZWN0LWRhdGVzIHtcbiAgICAuZmllbGQtd3JhcHBlci5kYXRlUGlja2VyQm94OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLy4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDM0cHggIWltcG9ydGFudDtcbiAgICAgIHRvcDogNnB4O1xuICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICB6LWluZGV4OiAyMDtcbiAgICB9XG5cbiAgLmxpdmUtY2xhc3MtbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICBcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUZGMjtcblxuICAgIC5saXZlLWNsYXNzLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgLmZpZWxkLXJhZGlvLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDExN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQxRDE7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTNFOEYyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbGFiZWx7XG4gICAgICAgICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmFjdGl2ZVRhYntcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEwOUNGMTtcbiAgICAgICAgY29sb3I6ICMxMDlDRjEgO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc2VhcmNoLWFkZC1jbGFzcy1jb250YWluZXJ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB3aWR0aDogNjclO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAuc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQxRDE7XG4gICAgICAgIHBhZGRpbmc6IDlweCAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAubm9ybWFsLWZpZWxkIHtcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuZmlsdGVyLXdyYXBwZXJ7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIGkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA3cHg7XG4gICAgICAgIHBhZGRpbmc6IDdweCA5cHg7XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIC5maWx0ZXJ7XG4gICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gLmFkZC1jbGFzcy1jb250YWluZXJ7XG4gICAgLy8gICBtYXJnaW4tbGVmdDogNDZweDtcbiAgICAvLyB9XG4gIH1cblxuICAuY3VzdG9tRmlsdGVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHdpZHRoOiAyNSU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IFdoaXRlO1xuICAgIGNvbG9yOiAjMmUzMzQ1O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0b3A6IDIxJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICAuc29ydEJ5IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y0RUJFQjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICB9XG4gIH1cblxuICAuYWRkLWNsYXNze1xuICAgIGJhY2tncm91bmQ6ICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDlDRjE7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxcHggIzEwOUNGMTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAjMTA5Q0YxO1xuICB9XG5cbiAgLmxpdmUtY2xhc3N7XG4gICAgaGVpZ2h0Ojcydmg7XG4gICAgbWF4LWhlaWdodDogNzJ2aDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgIH1cbiAgICAubGl2ZS1jbGFzcy1saXN0LWNvbnRhaW5lcntcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAubGl2ZS1jbGFzcy1pdGVte1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAyNCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNFM0U4RjI7XG4gICAgICAgIC8vIG1pbi1oZWlnaHQ6IDQ1dmg7XG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IDQ1dmg7XG4gICAgICAgIC8vIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgLnN1Yi1pdGVtLTF7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjRFQkVCO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIC5zZXNzaW9uX25hbWVfYW5kX2lkX2NvbnRhaW5lcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAuc2Vzc2lvbl9uYW1le1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2Vzc2lvbl9pZHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2FjYWNhYztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsYXNzLWZvci1uYW1le1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwODRmNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnVwY29taW5nX2NsYXNze1xuICAgICAgICAgICAgY29sb3I6ICNlYzc2MDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3RpZmljYXRpb25fY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIC5zcGlubmVye1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Bpbm5lciA+IGRpdiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM3NjAwO1xuXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zcGlubmVyIC5ib3VuY2UxIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnNwaW5uZXIgLmJvdW5jZTIge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAgICAgICAgICAgICAgIDAlLCA4MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgfVxuICAgICAgICAgICAgICAgIDQwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAgICAgICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICB9IDQwJSB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubm90aWZpY2F0aW9uX2J0bntcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBjb2xvcjogIzEyODNmNDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFlY2ZkO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjdGlvbl9jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIC5hY3Rpb25fZWRpdHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWVjZmQ7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3Rpb25fZGVsZXRle1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmEzMTQ1O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmUyZTI7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdWItaXRlbS0ye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAvLyBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgLml0ZW1fdHlwZV8xe1xuICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDUycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtX3R5cGVfMntcbiAgICAgICAgICAgIHdpZHRoOiAxMiU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnN0YXJ0X3Nlc3Npb257XG4gICAgICAgIGJhY2tncm91bmQ6ICM2N2M5Njc7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTA5Q0YxO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDZweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgICAgLm5vdEFsbG93ZWR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhY2FjYWM7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDZweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgICAgLnJlcGVhdF9zZXNzaW9ue1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMxMjgzZjQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgICB9XG4gICAgICAuaXRlbV90eXBlXzN7XG4gICAgICAgIHdpZHRoOiA5JTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubm90ZS1jb250YWluZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzVjNWNjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjM2Y0MjYwO1xuICB9XG5cblxuICAuZmlsdGVyLXJlcy5wYWdpbmF0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG5cblxuICAucGFnaW5hdGlvbiB7XG4gICAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgLmZpcnN0IHtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiwqsgXCI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAubGFzdCB7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIMK7XCI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYmF0Y2gtc2l6ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDdweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgLnBhZ2luYXRpb24gbGk6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDAwcHgpIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgICAuc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgICAgIGkge1xuICAgICAgICByaWdodDogMjhweCAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDRweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuXG5cbiAgLmJsYWNrLWJne1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAsMTAsMTAsMC4zKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbmZpcm1hdGlvbl9wb3B1cHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAzNSU7XG4gICAgbGVmdDogNDAlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIC8vIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI1NSwwLDAsMC43KTtcbiAgICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggNXB4ICM5YzljOWM7XG4gIH1cbiAgLmNvbmZpcm1fdGl0bGV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5jb25maXJtYXRpb25fbXNnX2JveHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiAjODU4NTg1O1xuICB9XG4gIC5jb25maXJtYXRpb25fcG9wdXB7XG4gICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgIGxlZnQ6IDA7XG4gICAgICAgdG9wOiAwO1xuICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICB6LWluZGV4OiAxO1xuICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgIH1cbiAgICB9XG5cbiAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbiAgICB9XG4gICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbiAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwODRmNjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICB0b3A6IDVweDtcbiAgICB9XG4gICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgIH1cbiAgfVxuXG4gIC5jb25maXJtYXRpb25fYnV0dG9uX2NvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBpbnB1dHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxuICAucUluZm9JY29uIHtcbiAgICB3aWR0aDogMTdweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICNjY2MgaW5zZXQ7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICY6aG92ZXIge1xuICAgICAgICAvLyBib3JkZXItY29sb3I6ICRoZWFkZXItYmc7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCAkaGVhZGVyLWJnIGluc2V0O1xuICAgICAgICAvLyBjb2xvcjogJGhlYWRlci1iZztcbiAgICB9XG59XG5cbi50b29sdGlwLWJveC1maWVsZCB7XG4gIC8vIHdpZHRoOiAyMDBweDtcbiAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLWhlaWdodDogNDFweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0b3A6IDMwcHg7XG4gICYubGcge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gIH1cbiAgJi5zbSB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gIH1cbn1cblxuLnZpZXdBY3Rpb257XG4gIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwODRmNjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggIzAwODRmNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRvd25sb2FkX3BvcHVwe1xuICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiAzNSU7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICB9XG4gIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xuICAgIG1heC1oZWlnaHQ6IDQwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuLmdhLW1vZGFsLXdyYXBwZXIge1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzYsIDEzNiwgMTM2LCAwLjYpO1xuICB6LWluZGV4OiA5OTk7XG5cbiAgLmdhLW1vZGFsLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5nYS1tb2RhbCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgYm9yZGVyOiAycHQgc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XG4gICAgICBib3gtc2hhZG93OiAwIDJwdCAzcHQgIzk5OTtcbiAgICAgIG1pbi13aWR0aDogMzAlO1xuXG4gICAgICAuZ2EtbW9kYWwtaGVhZCB7XG4gICAgICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHQgc29saWQgI2RkZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmdhLW1vZGFsLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5kaXNhYmxlZEJ1dHRvbntcbiBjdXJzb3I6bm8tZHJvcDtcbiBvcGFjaXR5OiAwLjU7XG59XG4uYWN0aW9uX3VwbG9hZHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTI4M2Y0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWVjZmQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi51cGxvYWQtYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4O1xuICAgICY+ZGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgIH1cbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLS41cmVtO1xuICBsZWZ0OiAtMTByZW07XG4gIG1pbi13aWR0aDogMTcwcHg7XG5cbiAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgIHBhZGRpbmc6IC40ZW0gMWVtO1xuICAgIGJvcmRlci1yaWdodDogMXB0IHNvbGlkICNlZWU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIH1cbiAgfVxufVxuXG4ubmV3LWtleXdvcmR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2MyNGM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDAgNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jem9vbUZBUXtcbiAgLm1vZGFsLWRpYWxvZ3tcbiAgICAgd2lkdGg6IDcwMHB4O1xuICAgICBtYXJnaW4tdG9wOiA4JTtcbiAgIH1cbiAgIC5tb2RhbC1ib2R5e1xuICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgfVxuICAgdWwsIG9sIHtcbiAgICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vICBmb250LXdlaWdodDogNjAwO1xuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICBsaXtcbiAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgIH1cbiAgIH1cbiAgIHVse1xuICAgICBjb2xvcjogZ3JheTtcbiAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgfVxuICAgLm5ldy1tb2R1bGVzLWxpc3R7XG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICB9XG4gICAubW9kdWxlLXRpdGxle1xuICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgc3BhbntcbiAgICAgICBiYWNrZ3JvdW5kOiAjMDBiNTVhO1xuICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICB9XG4gICB9XG4gfVxuIC5mZWVkQmFja0J0biB7XG4gIGNvbG9yOiAjMDA4NGY2O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICB3aWR0aDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiB9XG4gLnBvcHVwV3JhcHBlciB7XG4gIHotaW5kZXg6IDIzO1xuICBcbn1cbiNoZWxwRkFRe1xuICAubW9kYWwtZGlhbG9ne1xuICAgICB3aWR0aDogODAwcHg7XG4gICB9XG4gICAubW9kYWwtYm9keXtcbiAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgIH1cbiAgIHVsLCBvbCB7XG4gICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgbGl7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICB9XG4gICB9XG4gICB1bHtcbiAgICAgY29sb3I6IGdyYXk7XG4gICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgIH1cbiAgIC5uZXctbW9kdWxlcy1saXN0e1xuICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgfVxuICAgLm1vZHVsZS10aXRsZXtcbiAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgIHNwYW57XG4gICAgICAgYmFja2dyb3VuZDogIzAwYjU1YTtcbiAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgfVxuICAgfVxuICAgLm9sZCBzcGFue1xuICAgICBiYWNrZ3JvdW5kOiAjZmY2YzI0O1xuICAgfVxuIH1cbiAudmlkZW9wbGF5ZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDMwJTtcbiAgei1pbmRleDogMTA7XG59XG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG59XG4udmlkZW8taW5wdXQge1xuICBib3JkZXI6IDFwdCBzb2xpZCAjZGRkO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxZW07XG4gIGNvbG9yOiAjMzM0ZTRjO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAycHQgI2YxZjFmMTtcbn1cbi5tMHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udW5kZXJsaW5le1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VDRUFFQTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnVwbG9hZEltZyB7XG4gICAgYmFja2dyb3VuZDogI0YzRjFGMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnc5NntcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5wb3NpdGlvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNyU7XG59XG5cbi5iZ19saXZlX2NsYXNze1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ub191cGNvbWluZy5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLnNjaGVkdWxlLXRleHR7XG4gIGNvbG9yOiM4QThCOEI7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5hZGRfbGl2ZV9jbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ub25nb2luZ3tcbiAgLy8gaGVpZ2h0OiAzMHB4O1xuICAvLyBib3JkZXItcmFkaXVzOiAxNTBweCAwcHggMHB4IDE1MHB4IC8gMTUwcHggMHB4IDBweCAxNTBweDtcbiAgLy8gcGFkZGluZzo0cHggMTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIzNSwxNjYsMTAzLDEpIDE5JSwgcmdiYSgyNTEsMTU0LDY0LDEpIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgLy8gZm9udC1zaXplOiAxM3B4O1xuICAvLyBmb250LXdlaWdodDo1MDA7XG4gIC8vIHdpZHRoOiA0MiU7XG59XG4uYm9yZGVyYm90dG9tMXtcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RGRTVGMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2Vzc2lvbl9pZHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDo1MDA7XG4gIGNvbG9yOiAjQThBMUExO1xuICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubWluMTV7XG4gIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1MHB4IDBweCAwcHggMTUwcHggLyAxNTBweCAwcHggMHB4IDE1MHB4O1xuICBwYWRkaW5nOjRweCAxMHB4O1xuICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMTkxLDEyOCwyNDEsMSkgMTklLCByZ2JhKDE5MCwxMDYsMjU1LDAuNjYxNzk5NzU0MDgxMzIwMSkgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OjUwMDtcbiAgd2lkdGg6IDQyJTtcbn1cbi5kYXRlX3RhZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjojMTA5Q0YxO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgei1pbmRleDogMjA7XG59XG4uYm9yZGVyYm90dG9te1xuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREZFNUYwO1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbn1cblxuLnZpZXdDbGFzc1BvcG9we1xuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5tb2RhbC10aXRsZXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6MzAwO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmNsYXNzX3RleHR7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICM5MDhEOEQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5jbGFzc19uYW1le1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMkIyNjI2O1xuICB9XG4gIC5uYW1le1xuICBjb2xvcjogI0E4QTFBMTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnZhbHVle1xuICAgIGNvbG9yOiAjNEM2MzgwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC56b29tMntcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIC5kaXYtYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNFQ0VBRUE7XG4gICAgd2lkdGg6NzAlO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gIH1cbiAgLm1iLTB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmltZ19kb2Mge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucHJvZmlsZXtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogMTA7XG4gIH1cbiAgLm92ZXJsYXB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgei1pbmRleDogMTtcbiAgfVxuICAuZGl2LWJvcmRlci1sZWZ0e1xuICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjRUNFQUVBO1xuICB9XG4gIC5zZWN0aW9uMXtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnNlY3Rpb24ye1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5wbC0xMHtcbiAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxufVxuLmRhdGVDb2xvcntcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRDNjM4MDtcbn1cbi5pY29uX2ZsZXh7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYm9yZGVycmlnaHR7XG4gIGJvcmRlci1yaWdodDoxcHggc29saWQgI0RGRTVGMDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cbi5tdC00e1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cbiAgLnNlYXJjaFRleHRDbGFzcyB7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgfVxuICAudGFnIHtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDE5MSwxMjgsMjQxLDEpIDE5JSwgcmdiYSgxOTAsMTA2LDI1NSwwLjY2MTc5OTc1NDA4MTMyMDEpIDEwMCUpO1xuICAgIG1hcmdpbjogLThweCAwIDAgLTEycHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICA6Om5nLWRlZXAgYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lciB7XG4gICAgICBsZWZ0OiAtMTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZpbHRlckRhdGUge1xuICAgIGhlaWdodDogMzRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbiAgICBwYWRkaW5nOiA5cHggMTVweDtcbiAgICB3aWR0aDogNzUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuc2V0dXBUZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZlOGY0O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/live-classes-module/live-classes/live-classes.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/live-classes-module/live-classes/live-classes.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: LiveClassesComponent */

    /***/
    function srcAppComponentsLiveClassesModuleLiveClassesLiveClassesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveClassesComponent", function () {
        return LiveClassesComponent;
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


      var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../.. */
      "./src/app/index.ts");
      /* harmony import */


      var _node_modules_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/products.service */
      "./src/app/services/products.service.ts");

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

      var fileObj = /*#__PURE__*/function () {
        function fileObj(fileName, fileType, fileSize) {
          _classCallCheck(this, fileObj);

          this.fileName = fileName;
          this.fileType = fileType;
          this.fileSize = this.getSizeMB(fileSize);
        }

        _createClass(fileObj, [{
          key: "getSizeMB",
          value: function getSizeMB(size) {
            return size + "KB";
          }
        }, {
          key: "getSize",
          value: function getSize() {
            return this.fileSize;
          }
        }]);

        return fileObj;
      }();

      var LiveClassesComponent =
      /** @class */
      function () {
        var LiveClassesComponent = /*#__PURE__*/function () {
          function LiveClassesComponent(auth, appC, router, _http, msgService, sanitizer, productService) {
            _classCallCheck(this, LiveClassesComponent);

            this.auth = auth;
            this.appC = appC;
            this.router = router;
            this._http = _http;
            this.msgService = msgService;
            this.sanitizer = sanitizer;
            this.productService = productService;
            this.activeIndex = 1;
            this.studentForm = true;
            this.kyc = false;
            this.isProfessional = false;
            this.feeDetails = false;
            this.inventory = false;
            this.openClassPopup = false;
            this.pastClassesPopup = false;
            this.futureClassesPopup = false;
            this.allClasses = true;
            this.liveClassFor = false;
            this.validations = false;
            this.sendNotifyMe = false;
            this.rescheduleClass = false;
            this.PageIndex = 1;
            this.displayClassSize = 10;
            this.classListDataSource = [];
            this.classList = [];
            this.searchData = [];
            this.download_links = [];
            this.searchDataFlag = false;
            this.fileUrl = null;
            this.fileName = null;
            this.isVDOCipherVDO = false;
            this.JsonVars = {
              selected: false,
              submitReq: false,
              video_url: null,
              view_proctur_live_recorded_session: 1
            };
            this.batches = [];
            this.hour = ['01 AM', '02 AM', '03 AM', '04 AM', '05 AM', '06 AM', '07 AM', '08 AM', '09 AM', '10 AM', '11 AM', '12 AM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM', '09 PM', '10 PM', '11 PM', '12 PM'];
            this.minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
            this.batchesIds = [];
            this.courseIds = [];
            this.studentsAssigned = [];
            this.teachersAssigned = [];
            this.userAssigned = [];
            this.masters = [];
            this.courses = [];
            this.isStudentCheckedArr = [];
            this.isUserCheckedArr = [];
            this.teacherIdArr = [];
            this.getClasses = [];
            this.getPastClasses = [];
            this.getFutureClasses = [];
            this.customId = [];
            this.studentId = [];
            this.columnMaps = [0, 1, 2, 3];
            this.hourFrom = "";
            this.hourTo = "";
            this.minuteTo = "";
            this.minuteFrom = "";
            this.teacherId = '';
            this.courseValue = '';
            this.session = "";
            this.hourFromReschedule = "";
            this.minuteFromReschedule = "";
            this.hourToReschedule = "";
            this.minuteToReschedule = "";
            this.classDetails = "";
            this.dateToday = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
            this.dateFrom = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
            this.rescheduledateFrom = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
            this.institution_id = sessionStorage.getItem('institution_id');
            this.rescheduleclass = {
              end_datetime: "",
              institution_id: this.institution_id,
              session_id: "",
              start_datetime: ""
            };
            this.getOnlineClasses = {
              custUserIds: [],
              end_datetime: "",
              institution_id: this.institution_id,
              sent_notification_flag: 0,
              session_name: "",
              start_datetime: "",
              studentIds: [],
              teacherIds: []
            };
            this.getPayloadBatch = {
              inst_id: this.institution_id,
              coursesArray: [''],
              role: 'student'
            };
            this.previosLiveClasses = [];
            this.futureLiveClasses = [];
            this.today = new Date();
            this.sortDate = {};
            this.liveClassSearchFilter = {
              from_date: '',
              to_date: ''
            };
            this.obj = {
              institution_id: '',
              user_id: ''
            };
            this.alertBox = true;
            this.sendSMSNotification = true;
            this.sendPushNotification = false;
            this.forUser = false;
            this.forModerator = false;
            this.proctur_live_expiry_date_check = false;
            this.viewDownloadPopup = false;
            this.tempVideoData = {};
            this.showVideo = true;
            this.proctur_live_view_or_download_visibility = 0;
            this.searchText = "";
            this.is_zoom_integration_enable = true;
            this.type = "";
            this.customFileArr = [];
            this.selectedFiles = [];
            this.tempArr = [];
            this.progress = 0;
            this.progressBar = false;
            this.download = 0;
            this.donloadBar = false;
            this.ShowActionBtn = {};
            this.attendance_buffer = 0;
            this.proctur_live_integration_with_vimeo = 0;
            this.proctur_live_integration_with_vdoCipher = 0;
            this.isVimeo = 'VDOCipher';
            this.vimeo_title = ''; // watch_duration: any = 0;

            this.videoplayer = false;
            this.isUploding = false;
            this.fileUploadXHR = '';
            this.vimeo_video_downlodable = false;
            this.vimeoDownloadLinks = [];
            this.selectedDownloadSize = {};
            this.live_class_session_recording_id = 0;
            this.showSMSNotify = false;
            this.smsData = '';
            this.showPushNotify = false;
            this.showViewClassPopup = false;
            this.viewClassData = '';
            this.showCustomFilter = false;
            this.schoolModel = false;
            this.live_class_for = '1';
            this.startClassMsg = '';
            this.message_for_setup_not_done = '';
            this.set_up_done = false;
          }

          _createClass(LiveClassesComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this30 = this;

              this.auth.schoolModel.subscribe(function (res) {
                _this30.schoolModel = false;

                if (res) {
                  _this30.schoolModel = true;
                }
              });
              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this30.isProfessional = true;
                } else {
                  _this30.isProfessional = false;
                }
              });

              if (sessionStorage.getItem('setLiveClassType') == null || sessionStorage.getItem('setLiveClassType') == '') {
                sessionStorage.setItem('setLiveClassType', '1');
              }

              this.live_class_for = sessionStorage.getItem('setLiveClassType');
              var pastClass = sessionStorage.getItem('pastClass');
              var today = moment__WEBPACK_IMPORTED_MODULE_2__();
              var begin = moment__WEBPACK_IMPORTED_MODULE_2__(today.startOf('isoWeek')).format('DD-MM-YYYY');
              var end = moment__WEBPACK_IMPORTED_MODULE_2__(today.endOf('isoWeek')).format('DD-MM-YYYY');
              this.liveClassSearchFilter = {
                from_date: moment__WEBPACK_IMPORTED_MODULE_2__().format('DD-MM-YYYY'),
                to_date: end
              };

              if (pastClass === 'true') {
                this.liveClassFor = true;
                sessionStorage.setItem('pastClass', 'false');
                this.liveClassSearchFilter.from_date = sessionStorage.getItem('from_live_date');
                this.liveClassSearchFilter.to_date = sessionStorage.getItem('to_live_date');
                sessionStorage.removeItem('from_live_date');
                sessionStorage.removeItem('to_live_date');
              }

              var zoom = sessionStorage.getItem('is_zoom_enable');
              this.is_zoom_integration_enable = JSON.parse(zoom);

              if (this.is_zoom_integration_enable) {// this.zoom_enable = true
              }

              var userType = sessionStorage.getItem('userType');
              console.log("userType", userType);
              var userName = sessionStorage.getItem('username');

              if (userType == '3') {
                this.forUser = true;
                this.startClassMsg = 'You can start the live class 30 mins prior to the commencement of the class.';
              }

              if (userType == '0') {
                this.forModerator = true;
                this.startClassMsg = '';

                if (userName != 'admin') {
                  this.startClassMsg = 'Custom User can join the session if added as a moderator on the scheduled time only';
                }
              }

              var limit = sessionStorage.getItem('videoLimitExceeded');
              this.videoLimitExceed = JSON.parse(limit);
              this.sortDate.this_week = true;
              this.getClassesList();
              this.getAuthKey();
              this.institution_id = sessionStorage.getItem('institution_id');
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (!this.showVideo) {
                this.watchHistory();
              }
            }
          }, {
            key: "getAuthKey",
            value: function getAuthKey() {
              var _this31 = this;

              this.auth.currentAuthKey.subscribe(function (key) {
                _this31.Authorization = key;
              });
            }
          }, {
            key: "checkLiveClassExpiry",
            value: function checkLiveClassExpiry(proctur_live_expiry_date) {
              var currentDate = new Date();
              proctur_live_expiry_date = new Date(proctur_live_expiry_date);
              currentDate.setHours(0, 0, 0, 0);
              proctur_live_expiry_date.setHours(0, 0, 0, 0);
              var difference_In_Time = proctur_live_expiry_date.getTime() - currentDate.getTime();
              this.daysLeftForSubscriptionExpiry = difference_In_Time / (1000 * 3600 * 24);

              if (proctur_live_expiry_date < currentDate) {
                this.proctur_live_expiry_date_check = true;
              }

              if (proctur_live_expiry_date == currentDate) {
                this.proctur_live_expiry_date_check = false;
              }
            }
          }, {
            key: "toggleAction",
            value: function toggleAction(obj) {
              this.liveClassFor = obj;
              this.totalRow = 0;
              this.getClasses = [];
              this.PageIndex = 1;
              this.sortDate.this_week = true;
              this.sortDate.this_month = false;
              this.sortDate.custom_date_range = false;
              this.sortDate.last_week = false;
              var today = moment__WEBPACK_IMPORTED_MODULE_2__();
              var begin = moment__WEBPACK_IMPORTED_MODULE_2__(today.startOf('isoWeek')).format('DD-MM-YYYY');
              var end = moment__WEBPACK_IMPORTED_MODULE_2__(today.endOf('isoWeek')).format('DD-MM-YYYY');

              if (this.liveClassFor) {
                this.liveClassSearchFilter = {
                  from_date: begin,
                  to_date: moment__WEBPACK_IMPORTED_MODULE_2__().format('DD-MM-YYYY')
                };
              } else {
                this.liveClassSearchFilter = {
                  from_date: moment__WEBPACK_IMPORTED_MODULE_2__().format('DD-MM-YYYY'),
                  to_date: end
                };
              }

              this.getClassesList();
            }
          }, {
            key: "getClassesList",
            value: function getClassesList() {
              var _this32 = this;

              // this.PageIndex = 1;
              this.auth.showLoader();
              var userName = sessionStorage.getItem('username');
              this.obj = {
                institution_id: this.institution_id,
                live_future_past: 1,
                category: sessionStorage.getItem('setLiveClassType'),
                from_date: this.liveClassSearchFilter.from_date,
                to_date: this.liveClassSearchFilter.to_date,
                page_offset: this.PageIndex,
                page_size: 10
              };

              if (this.liveClassFor) {
                this.obj.live_future_past = 2;
              }

              var userType = sessionStorage.getItem('userType');

              if (userType != 0) {
                var userid = sessionStorage.getItem('userid');
                this.obj.user_id = userid;
              }

              this.dateValue = this.liveClassSearchFilter.from_date + ' to ' + this.liveClassSearchFilter.to_date;
              var url = '/api/v1/meeting_manager/getMeetingV2/' + this.institution_id;

              if (this.searchText != '') {
                this.obj.search_criteria = this.searchText.trim();
              }

              this._http.postData(url, this.obj).subscribe(function (data) {
                _this32.auth.hideLoader();

                _this32.set_up_done = data.set_up_done;
                _this32.message_for_setup_not_done = data.message_for_setup_not_done;

                if (!_this32.set_up_done) {
                  var match = _this32.message_for_setup_not_done.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);

                  if (match) {
                    match.map(function (url) {
                      _this32.message_for_setup_not_done = _this32.message_for_setup_not_done.replace(url, "<a href=\"" + url + "\" target=\"_BLANK\">" + url + "</a>");
                    });
                  }

                  _this32.msgService.showErrorMessage('info', '', data.message_for_setup_not_done);
                }

                _this32.previosLiveClasses = data.pastLiveClasses;
                _this32.futureLiveClasses = data.upcomingLiveClasses;
                _this32.is_proctur_live_recording_allow = data.is_proctur_live_recording_allow;
                _this32.attendance_buffer = data.attendance_buffer;
                _this32.proctur_live_integration_with_vdoCipher = data.proctur_live_integration_with_vdoCipher;
                _this32.proctur_live_integration_with_vimeo = data.proctur_live_integration_with_vimeo;
                _this32.vimeo_video_downlodable = data.vimeo_video_downlodable;

                if (!(_this32.proctur_live_integration_with_vimeo == '1' && _this32.proctur_live_integration_with_vdoCipher == '1')) {
                  if (_this32.proctur_live_integration_with_vimeo == '1') {
                    _this32.isVimeo = 'Vimeo';
                  } else if (_this32.proctur_live_integration_with_vimeo == '1') {
                    _this32.isVimeo = 'VDOCipher';
                  }
                }

                if (_this32.is_proctur_live_recording_allow == 1 && _this32.videoLimitExceed == 1) {
                  $('#videoLimit').modal('show');
                  _this32.videoLimitExceed = 0;
                  sessionStorage.setItem('videoLimitExceeded', '0');
                }

                var proctur_live_expiry_date = data.proctur_live_expiry_date;
                _this32.JsonVars.view_proctur_live_recorded_session = data.view_proctur_live_recorded_session;
                sessionStorage.setItem('proctur_live_expiry_date', proctur_live_expiry_date);

                if (proctur_live_expiry_date != null) {
                  _this32.checkLiveClassExpiry(proctur_live_expiry_date);

                  var expiry = sessionStorage.getItem('liveClassExpiryPop');

                  if (_this32.daysLeftForSubscriptionExpiry <= 5 && JSON.parse(expiry)) {
                    $('#liveClassExpiry').modal('show');
                    sessionStorage.setItem('liveClassExpiryPop', "false");
                  }
                }

                _this32.proctur_live_view_or_download_visibility = data.proctur_live_view_or_download_visibility;

                _this32.getClassesFor(); // console.log(this.getClasses)


                _this32.totalRow = data.total_count; // this.fetchTableDataByPage(this.PageIndex);

                _this32.getClasses = _this32.getDataFromDataSource(_this32.PageIndex);

                _this32.getClasses.map(function (ele) {
                  ele.start_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(ele.start_datetime).format('YYYY-MM-DD hh:mm a');
                });

                _this32.getClasses.map(function (ele) {
                  ele.end_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(ele.end_datetime).format('YYYY-MM-DD hh:mm a');
                });

                _this32.diffDataBasedOnDate();
              }, function (error) {
                _this32.auth.hideLoader();

                _this32.errorMessage(error);
              });
            }
          }, {
            key: "diffDataBasedOnDate",
            value: function diffDataBasedOnDate() {
              var previous_date = null;
              var dTa = [];
              var count = 0;
              dTa[count] = [];

              for (var i = 0; i < this.getClasses.length; i++) {
                var currDataDate = this.getClasses[i].start_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(this.getClasses[i].start_datetime).format('YYYY-MM-DD');

                if (previous_date == null || previous_date == currDataDate) {
                  previous_date = currDataDate;
                  dTa[count].push(this.getClasses[i]);
                } else {
                  previous_date = currDataDate;
                  count = count + 1;
                  dTa[count] = [];
                  dTa[count].push(this.getClasses[i]);
                }
              }

              console.log(JSON.stringify(dTa));
              this.getClasses = dTa;
            }
          }, {
            key: "copyToClipboard",
            value: function copyToClipboard(item) {
              var selBox = document.createElement('textarea');
              selBox.style.position = 'fixed';
              selBox.style.left = '0';
              selBox.style.top = '0';
              selBox.style.opacity = '0';
              selBox.value = item.join_url;
              document.body.appendChild(selBox);
              selBox.focus();
              selBox.select();
              document.execCommand('copy');
              document.body.removeChild(selBox);
              this.msgService.showErrorMessage('success', 'Copied to Clipboard', '');
            } // Added By Ashwini Gupta For search live class by date

          }, {
            key: "searchByDate",
            value: function searchByDate(dateSearch) {
              var event = moment__WEBPACK_IMPORTED_MODULE_2__(dateSearch).format("YYYY-MM-DD");
              this.getClasses = [];

              if (dateSearch == null) {
                this.getClassesFor();
              }

              if (!this.liveClassFor) {
                for (var i = 0; i < this.futureLiveClasses.length; i++) {
                  var tempStartDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.futureLiveClasses[i].start_datetime).format("YYYY-MM-DD");

                  if (event === tempStartDate) {
                    this.getClasses.push(this.futureLiveClasses[i]);
                  }
                }
              } else {
                for (var _i4 = 0; _i4 < this.previosLiveClasses.length; _i4++) {
                  var _tempStartDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.previosLiveClasses[_i4].start_datetime).format("YYYY-MM-DD");

                  if (event === _tempStartDate) {
                    this.getClasses.push(this.previosLiveClasses[_i4]);
                  }
                }
              }

              this.totalRow = this.getClasses.length;
            } // End

          }, {
            key: "forTeacher",
            value: function forTeacher(teachersUserIds) {
              var userId = sessionStorage.getItem('userid');

              if (teachersUserIds.includes(userId)) {
                return true;
              } else {
                return false;
              }
            }
          }, {
            key: "forModeratorId",
            value: function forModeratorId(moderatorIds) {
              if (moderatorIds != null) {
                var userId = sessionStorage.getItem('userid');

                if (moderatorIds.includes(userId)) {
                  return true;
                } else {
                  return false;
                }
              }
            }
          }, {
            key: "allowStartLiveCLass",
            value: function allowStartLiveCLass(link, session_id, meeting_with, moderatorIds) {
              var _this33 = this;

              if (this.forModerator && !this.forModeratorId(moderatorIds)) {
                this.msgService.showErrorMessage('info', '', 'Only faculty can start the live class 30 mins prior to the scheduled time. Admin can join the session if added as a moderator on the scheduled time only.');
              } else {
                var zoom = sessionStorage.getItem('is_zoom_enable');
                var zoom_enable = 0;

                if (meeting_with == "Zoom") {
                  zoom_enable = 1;
                }

                var url = "/api/v1/meeting_manager/session/start/".concat(this.institution_id, "/").concat(session_id, "?isZoomLiveClass=").concat(zoom_enable);
                this.auth.showLoader();

                this._http.getData(url).subscribe(function (res) {
                  _this33.auth.hideLoader();

                  if (res.result.allow_start_session) {
                    // changes done by Nalini - to remove zoom 2hr restriction
                    if (zoom_enable == 1) {
                      window.open(res.result.start_url, "_blank");
                    } else {
                      window.open(link, "_blank");
                    }
                  } else {
                    _this33.msgService.showErrorMessage('info', '', res.result.allow_start_session_message);
                  }
                }, function (err) {
                  _this33.auth.hideLoader();

                  console.log(err);
                });
              }
            }
          }, {
            key: "startLiveClass",
            value: function startLiveClass(link, start_time) {
              var time = this.diffDate(this.today, start_time);
              var splitedTime = time.split(":");
              var hrs = +splitedTime[0];
              var mins = +splitedTime[1];

              if (hrs <= 0 && mins <= 30) {
                window.open(link, "_blank");
              } else {
                this.appC.popToast({
                  type: "error",
                  body: "Sessions can only be started before 30 minutes of start time."
                });
              }
            }
          }, {
            key: "checkForTime",
            value: function checkForTime(start_time) {
              var time = this.diffDate(this.today, start_time);
              var splitedTime = time.split(":");
              var hrs = +splitedTime[0];
              var mins = +splitedTime[1];

              if (hrs <= 0 && mins <= 30) {
                return true;
              } else {
                return false;
              }
            }
          }, {
            key: "dateRangeChanges",
            value: function dateRangeChanges(obj) {
              this.sortDate.all = false;
              this.sortDate.last_week = false;
              this.sortDate.this_month = false;
              this.sortDate.custom_date_range = false;
              this.sortDate.this_week = false;
              this.PageIndex = 1;

              if (obj == 'this_week') {
                this.sortDate.this_week = true;
                var today = moment__WEBPACK_IMPORTED_MODULE_2__();
                var begin = moment__WEBPACK_IMPORTED_MODULE_2__(today.startOf('isoWeek')).format('DD-MM-YYYY');
                var end = moment__WEBPACK_IMPORTED_MODULE_2__(today.endOf('isoWeek')).format('DD-MM-YYYY');

                if (this.liveClassFor) {
                  this.liveClassSearchFilter = {
                    from_date: begin,
                    to_date: moment__WEBPACK_IMPORTED_MODULE_2__().format('DD-MM-YYYY')
                  };
                } else {
                  this.liveClassSearchFilter = {
                    from_date: moment__WEBPACK_IMPORTED_MODULE_2__().format('DD-MM-YYYY'),
                    to_date: end
                  };
                }

                this.showCustomFilter = false;
                this.getClassesList();
              } else if (obj == 'last_week') {
                this.sortDate.last_week = true;
                var _begin = '';
                var _end = '';

                if (this.liveClassFor) {
                  _begin = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'weeks').startOf('isoWeek');
                  _end = moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'weeks').endOf('isoWeek');
                } else {
                  _begin = moment__WEBPACK_IMPORTED_MODULE_2__().add(1, 'weeks').startOf('isoWeek');
                  _end = moment__WEBPACK_IMPORTED_MODULE_2__().add(1, 'weeks').endOf('isoWeek');
                }

                this.liveClassSearchFilter = {
                  to_date: moment__WEBPACK_IMPORTED_MODULE_2__(_end).format('DD-MM-YYYY'),
                  from_date: moment__WEBPACK_IMPORTED_MODULE_2__(_begin).format('DD-MM-YYYY')
                };
                this.showCustomFilter = false;
                this.getClassesList();
              } else if (obj == 'this_month') {
                this.sortDate.this_month = true;

                var _today = moment__WEBPACK_IMPORTED_MODULE_2__();

                var _begin2 = moment__WEBPACK_IMPORTED_MODULE_2__(_today.startOf('month')).format('DD-MM-YYYY');

                var _end2 = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-") + moment__WEBPACK_IMPORTED_MODULE_2__().daysInMonth();

                this.liveClassSearchFilter = {
                  from_date: _begin2,
                  to_date: moment__WEBPACK_IMPORTED_MODULE_2__(_end2).format('DD-MM-YYYY')
                };
                this.showCustomFilter = false;
                this.getClassesList();
              } else if (obj == 'custom_date_range') {
                this.sortDate.custom_date_range = true;
                this.openCalendar('customeDate');
              }

              console.log(this.liveClassSearchFilter);
            }
          }, {
            key: "openCalendar",
            value: function openCalendar(id) {
              document.getElementById(id).click();
            }
          }, {
            key: "updateFilterDateRange",
            value: function updateFilterDateRange(e) {
              this.showCustomFilter = false;

              if (this.sortDate.custom_date_range) {
                this.liveClassSearchFilter.from_date = moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("DD-MM-YYYY");
                this.liveClassSearchFilter.to_date = moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("DD-MM-YYYY");
                this.getClassesList();
              }
            }
          }, {
            key: "editStudent",
            value: function editStudent(session_id, meeting_with) {
              var zoom_enable = 0;

              if (meeting_with == "Zoom") {
                zoom_enable = 1;
              }

              this.router.navigate(['/view/live-classes/edit/' + session_id], {
                queryParams: {
                  repeat: 0,
                  isZoomLiveClass: zoom_enable
                }
              });
            }
          }, {
            key: "repeatSession",
            value: function repeatSession(session_id, meeting_with) {
              var zoom_enable = 0;

              if (meeting_with == "Zoom") {
                zoom_enable = 1;
              }

              this.router.navigate(['/view/live-classes/edit/' + session_id], {
                queryParams: {
                  repeat: 1,
                  isZoomLiveClass: zoom_enable
                }
              });
            }
          }, {
            key: "getClassesFor",
            value: function getClassesFor() {
              // this.dateValue = "";
              if (this.liveClassFor) {
                this.getClasses = this.previosLiveClasses;
                this.classListDataSource = this.previosLiveClasses;
              } else {
                this.getClasses = this.futureLiveClasses;
                this.classListDataSource = this.futureLiveClasses;
              }

              if (!this.isProfessional) {
                this.getClasses.forEach(function (element) {
                  element.course = Array.prototype.map.call(element.course_list, function (s) {
                    return s.course_name;
                  }).toString();
                });
              } else {
                this.getClasses.forEach(function (element) {
                  element.course = Array.prototype.map.call(element.batch_list, function (s) {
                    return s.batch_name;
                  }).toString();
                });
              }

              console.log("Get Classes", this.getClasses); // this.totalRow = this.getClasses.length;
              // this.fetchTableDataByPage(this.PageIndex);
            }
          }, {
            key: "diffDate",
            value: function diffDate(date1, date2) {
              var dateOut1 = new Date(date1); // it will work if date1 is in ISO format

              var dateOut2 = new Date(date2);
              var timeDiff = dateOut2.getTime() / 1000 - dateOut1.getTime() / 1000;
              var hours = Math.floor(timeDiff / (60 * 60));
              var divisor_for_minutes = timeDiff % (60 * 60);
              var minutes = Math.floor(divisor_for_minutes / 60);
              var divisor_for_seconds = divisor_for_minutes % 60;
              var seconds = Math.ceil(divisor_for_seconds);

              if (hours.toString().length == 1) {
                hours = "0" + hours;
              }

              if (minutes.toString().length == 1) {
                minutes = "0" + minutes;
              }

              var time = hours + ":" + minutes;
              return time;
            }
          }, {
            key: "getTimeLeft",
            value: function getTimeLeft(date1, date2) {
              var time = this.diffDate(date1, date2);
              var splitedTime = time.split(":");
              var hrs = +splitedTime[0];
              var mins = +splitedTime[1];
              var inDays = Math.floor(hrs / 24);

              if (inDays > 0) {
                if (inDays > 1) {
                  return inDays + " days";
                } else {
                  return inDays + " day";
                }
              } else if (hrs < 0) {
                return "00:00 hrs";
              } else {
                if (hrs == 0) {
                  return mins + " mins";
                } else {
                  return time + " hrs";
                }
              }
            }
          }, {
            key: "timeLeft",
            value: function timeLeft(date1, date2) {
              var time = this.diffDate(date1, date2);
              var splitedTime = time.split(":");
              var hrs = +splitedTime[0];

              if (hrs < 0) {
                return true;
              } else {
                return false;
              }
            }
          }, {
            key: "searchInList",
            value: function searchInList() {
              var _this34 = this;

              console.log(1);

              if (this.searchText != "" && this.searchText != null) {
                var searchData = this.classListDataSource.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this34.searchText.toLowerCase());
                  });
                });
                this.searchData = searchData;
                console.log(this.searchData);
                this.totalRow = searchData.length;
                this.searchDataFlag = true;
                this.PageIndex = 1; // this.fetchTableDataByPage(this.PageIndex);
              } else {
                this.searchDataFlag = false; // this.fetchTableDataByPage(this.PageIndex);

                this.totalRow = this.classListDataSource.length;
              }
            } // pagination functions

          }, {
            key: "fetchTableDataByPage",
            value: function fetchTableDataByPage(index) {
              this.PageIndex = index;
              var startindex = this.displayClassSize * (index - 1);
              this.getClassesList(); // this.getClasses = this.getDataFromDataSource(startindex);
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
              var buffer = this.attendance_buffer;
              buffer = buffer != 0 && buffer != null ? buffer * 60000 : buffer;
              var jobTime = moment__WEBPACK_IMPORTED_MODULE_2__(new Date().setHours(20, 0, 0, 0)).format('YYYY-MM-DD hh:mm a');
              var JobBufferTime = moment__WEBPACK_IMPORTED_MODULE_2__(new Date().setHours(0, 0, 0, 72000000 - buffer)).format('YYYY-MM-DD hh:mm a');
              var currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD hh:mm a');
              var temp = moment__WEBPACK_IMPORTED_MODULE_2__(new Date().setHours(0, 0, 0, 72000000 - buffer));
              var ReportAllowDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(2020, 6, 25, 0, 0, 0)).format('YYYY-MM-DD hh:mm a');
              temp = moment__WEBPACK_IMPORTED_MODULE_2__(temp).subtract(1, 'days');
              var yesterDayJobTime = moment__WEBPACK_IMPORTED_MODULE_2__(temp).format('YYYY-MM-DD hh:mm a'); // if (this.searchDataFlag) {
              //   data = this.searchData.slice(startindex, startindex + this.displayClassSize);
              // } else {
              //   data = this.classListDataSource.slice(startindex, startindex + this.displayClassSize);
              // }

              data = this.getClasses;

              if (data && data.length) {
                data.forEach(function (ele) {
                  ele.end_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(ele.end_datetime).format('YYYY-MM-DD hh:mm a');
                  ele.showViewAttendance = false;

                  if (moment__WEBPACK_IMPORTED_MODULE_2__(ele.end_datetime).valueOf() >= moment__WEBPACK_IMPORTED_MODULE_2__(ReportAllowDate).valueOf()) {
                    if (moment__WEBPACK_IMPORTED_MODULE_2__(ele.end_datetime).valueOf() <= moment__WEBPACK_IMPORTED_MODULE_2__(JobBufferTime).valueOf()) {
                      if (moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).valueOf() >= moment__WEBPACK_IMPORTED_MODULE_2__(jobTime).valueOf() || moment__WEBPACK_IMPORTED_MODULE_2__(ele.end_datetime).valueOf() <= moment__WEBPACK_IMPORTED_MODULE_2__(yesterDayJobTime).valueOf()) {
                        ele.showViewAttendance = true;
                      }
                    }
                  }
                });
              }

              return data;
            }
          }, {
            key: "getTimeInfo",
            value: function getTimeInfo() {
              var fromTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.dateFrom).format('YYYY-MM-DD') + " " + this.hourFrom.split(' ')[0] + ":" + this.minuteFrom + " " + this.hourFrom.split(' ')[1];
              var fromDate = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
              var toTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.dateFrom).format('YYYY-MM-DD') + " " + this.hourTo.split(' ')[0] + ":" + this.minuteTo + " " + this.hourTo.split(' ')[1];
              var fromTimeT = moment__WEBPACK_IMPORTED_MODULE_2__(fromTime).format('YYYY-MM-DD hh:mm a');
              var toTimeT = moment__WEBPACK_IMPORTED_MODULE_2__(toTime).format('YYYY-MM-DD hh:mm a');

              if (moment__WEBPACK_IMPORTED_MODULE_2__(fromTimeT).diff(moment__WEBPACK_IMPORTED_MODULE_2__(toTimeT), 'minutes') > 0) {
                this.appC.popToast({
                  type: "error",
                  body: "From time cannot be greater than to time"
                });
                return false;
              } else if (this.hourFrom == "" || this.hourTo == "" || this.minuteFrom == "" || this.minuteTo == "" || this.getOnlineClasses.session_name == "") {
                this.appC.popToast({
                  type: "error",
                  body: "All mandatory fields are required"
                });
                return false;
              } else if (moment__WEBPACK_IMPORTED_MODULE_2__(fromTimeT).diff(moment__WEBPACK_IMPORTED_MODULE_2__(), 'minutes') <= 20) {
                this.appC.popToast({
                  type: "error",
                  body: "Class can be schedule 20 minutes from current time"
                });
                return false;
              } else if (fromTimeT == toTimeT) {
                this.appC.popToast({
                  type: "error",
                  body: "From time and to time cannot be same"
                });
                return false;
              } else {// this.getBatchesCourses();
              }
            }
          }, {
            key: "close",
            value: function close() {
              this.openClassPopup = false;
            }
          }, {
            key: "errorMessage",
            value: function errorMessage(error) {
              this.appC.popToast({
                type: "error",
                body: error.error.message
              });
            }
          }, {
            key: "sendNotify",
            value: function sendNotify(notify) {
              if (notify == true) {
                this.getOnlineClasses.sent_notification_flag = 1;
              } else {
                this.getOnlineClasses.sent_notification_flag = 0;
              }
            }
          }, {
            key: "showSmsNotificationPopup",
            value: function showSmsNotificationPopup(obj) {
              this.smsData = obj;
              this.showSMSNotify = true;
            }
          }, {
            key: "smsNotification",
            value: function smsNotification(id, meeting_wih) {
              var _this35 = this;

              var obj = {}; // if (confirm("Are you sure you want to send SMS notification ? ")) {

              var zoom_enable = 0;

              if (meeting_wih == "Zoom") {
                zoom_enable = 1;
              }

              var url = "/api/v1/meeting_manager/sendSMSNotification/" + id + "?isZoomLiveClass=" + zoom_enable;

              this._http.postData(url, obj).subscribe(function (data) {
                _this35.appC.popToast({
                  type: "success",
                  body: "SMS notification sent successfully"
                });

                _this35.showSMSNotify = false; // this.getClassesList();
              }, function (error) {
                _this35.errorMessage(error);
              }); // }

            }
          }, {
            key: "showpushNotificationPopup",
            value: function showpushNotificationPopup(obj) {
              this.smsData = obj;
              this.showPushNotify = true;
            } // Done modification for Push notification on the basis of session type- Ashwini Kumar Gupta

          }, {
            key: "pushNotification",
            value: function pushNotification(id, sessionType) {
              var _this36 = this;

              var obj = {};
              var url;
              var zoom = sessionType === "Zoom" ? true : false;
              url = "/api/v1/meeting_manager/sendPushNotification/" + id + "?isZoomLiveClass=" + zoom; // if (confirm("Are you sure you want to send push notification ?")) {

              this._http.getData(url).subscribe(function (res) {
                _this36.appC.popToast({
                  type: "success",
                  body: "Push notification sent successfully"
                });

                _this36.showPushNotify = false; // this.getClassesList();
              }, function (error) {
                _this36.errorMessage(error);
              }); // }

            } // End

          }, {
            key: "cancel",
            value: function cancel(id, live_meeting_with) {
              this.alertBox = false;
              this.cancelSessionId = id;
              this.cancelMeetingWith = live_meeting_with;
              this.sendSMSNotification = true;
            }
          }, {
            key: "cancelSession",
            value: function cancelSession() {
              var _this37 = this;

              var zoom_enable = 0;

              if (this.cancelMeetingWith == "Zoom") {
                zoom_enable = 1;
              }

              var url = "/api/v1/meeting_manager/delete/" + sessionStorage.getItem('institution_id') + "/" + this.cancelSessionId + "?isZoomLiveClass=" + zoom_enable + "&isSendNotification=" + this.sendSMSNotification;

              this._http.deleteData(url, this.cancelSessionId).subscribe(function (data) {
                _this37.appC.popToast({
                  type: "success",
                  body: data.message
                });

                _this37.alertBox = true;

                _this37.getClassesList();
              }, function (error) {
                _this37.errorMessage(error);
              });
            }
          }, {
            key: "closeAlert",
            value: function closeAlert() {
              this.alertBox = true;
              this.cancelSessionId = "";
            }
          }, {
            key: "reschedule",
            value: function reschedule(id) {
              this.rescheduleClass = true;
              this.openClassPopup = false;
              this.rescheduleclass.session_id = id;
            }
          }, {
            key: "closeReschedule",
            value: function closeReschedule() {
              this.rescheduleClass = false;
              this.openClassPopup = true;
            }
          }, {
            key: "getRescheduleTime",
            value: function getRescheduleTime() {
              var fromTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.rescheduledateFrom).format('YYYY-MM-DD') + " " + this.hourFromReschedule.split(' ')[0] + ":" + this.minuteFromReschedule + " " + this.hourFromReschedule.split(' ')[1];
              var fromDate = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
              var toTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.rescheduledateFrom).format('YYYY-MM-DD') + " " + this.hourToReschedule.split(' ')[0] + ":" + this.minuteToReschedule + " " + this.hourToReschedule.split(' ')[1];
              var fromTimeT = moment__WEBPACK_IMPORTED_MODULE_2__(fromTime).format('YYYY-MM-DD hh:mm a');
              var toTimeT = moment__WEBPACK_IMPORTED_MODULE_2__(toTime).format('YYYY-MM-DD hh:mm a');

              if (moment__WEBPACK_IMPORTED_MODULE_2__(fromTimeT).diff(moment__WEBPACK_IMPORTED_MODULE_2__(toTimeT), 'minutes') > 0) {
                this.appC.popToast({
                  type: "error",
                  body: "From time cannot be greater than to time"
                });
                return false;
              } else if (this.hourFromReschedule == "" || this.hourToReschedule == "" || this.minuteFromReschedule == "" || this.minuteToReschedule == "") {
                this.appC.popToast({
                  type: "error",
                  body: "All fields are required"
                });
                return false;
              } else if (moment__WEBPACK_IMPORTED_MODULE_2__(fromTimeT).diff(moment__WEBPACK_IMPORTED_MODULE_2__(), 'minutes') <= 20) {
                this.appC.popToast({
                  type: "error",
                  body: "Class can be schedule 20 minutes from current time"
                });
                return false;
              } else if (fromTimeT == toTimeT) {
                this.appC.popToast({
                  type: "error",
                  body: "From time and to time cannot be same"
                });
                return false;
              } else {
                this.isReschedule();
              }
            }
          }, {
            key: "isReschedule",
            value: function isReschedule() {
              var _this38 = this;

              this.rescheduleclass.end_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(this.rescheduledateFrom).format('YYYY-MM-DD') + " " + this.hourToReschedule.split(' ')[0] + ":" + this.minuteToReschedule + " " + this.hourToReschedule.split(' ')[1];
              this.rescheduleclass.start_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(this.rescheduledateFrom).format('YYYY-MM-DD') + " " + this.hourFromReschedule.split(' ')[0] + ":" + this.minuteFromReschedule + " " + this.hourToReschedule.split(' ')[1];
              var url = "/api/v1/meeting_manager/reschedule/" + sessionStorage.getItem('institution_id') + "/" + this.rescheduleclass.session_id;

              this._http.postData(url, this.rescheduleclass).subscribe(function (data) {
                _this38.appC.popToast({
                  type: "success",
                  body: "Class rescheduled successfully"
                });

                _this38.rescheduleClass = false;
                _this38.openClassPopup = false;
                _this38.rescheduleclass = {
                  end_datetime: "",
                  institution_id: sessionStorage.getItem('institution_id'),
                  session_id: "",
                  start_datetime: ""
                };
                _this38.rescheduledateFrom = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
                _this38.minuteFromReschedule = "";
                _this38.minuteToReschedule = "";
                _this38.hourFromReschedule = "";
                _this38.hourToReschedule = "";
              }, function (error) {
                _this38.errorMessage(error);
              });
            } // developed by Nalini
            // To check whether to download vimeo or vdocipher file

          }, {
            key: "downloadFileCheck",
            value: function downloadFileCheck(object) {
              console.log(object);

              if (object.vimeo_video_url == '' || object.vimeo_video_url == null) {
                this.downloadFile(object);
              } else {
                this.getVimeoDownloadData(object);
              }
            }
          }, {
            key: "downloadFile",
            value: function downloadFile(object) {
              var _this39 = this;

              var url = "/api/v1/meeting_manager/recording/download/".concat(sessionStorage.getItem('institution_id'), "/").concat(object.download_id) + '?type=0';
              this.auth.showLoader();

              this._http.downloadItem(url, 'video/mp4').subscribe(function (response) {
                _this39.auth.hideLoader();

                if (response) {
                  var blob = new Blob([response], {
                    type: 'video/mp4'
                  });
                  _this39.fileUrl = _this39.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

                  if (_this39.fileUrl != null) {
                    _this39.fileName = object.session_name.concat('.mp4');
                    setTimeout(function () {
                      var hiddenDownload = document.getElementById('downloadFileClick');
                      hiddenDownload.download = _this39.fileName;
                      hiddenDownload.click();
                    }, 500);
                  }
                }
              }, function (err) {
                _this39.auth.hideLoader();

                if (err.status == 400) {
                  _this39.msgService.showErrorMessage('error', '', 'You are out of storage! Please contact our support');
                } else if (err.status == 422) {
                  _this39.msgService.showErrorMessage('error', '', 'Dear Admin, You have insufficient storage limit to store your current recording hence we could not save your video. To purchase new storage limit please contact our support team 9971839153.');
                } else {
                  _this39.msgService.showErrorMessage('error', '', 'There is some problem processing your request.Please contact support@proctur.com');
                }

                console.log(err);
              });
            } // Developed by Nalini
            // To get vimeo download links

          }, {
            key: "getVimeoDownloadData",
            value: function getVimeoDownloadData(obj) {
              var _this40 = this;

              this.auth.showLoader();
              this.productService.getMethod('vimeo/download-links/' + obj.vimeo_video_id, null).subscribe(function (res) {
                _this40.auth.hideLoader();

                _this40.vimeoDownloadLinks = res.result;

                if (_this40.vimeoDownloadLinks && _this40.vimeoDownloadLinks.length) {
                  _this40.viewDownloadPopup = false;
                  $('#downloadOption').modal('show');
                } else {
                  _this40.msgService.showErrorMessage('error', '', 'No download links found');
                }
              }, function (err) {
                _this40.auth.hideLoader();

                console.log(err);
              });
            }
          }, {
            key: "getVdoLink",
            value: function getVdoLink(object) {
              var _this41 = this;

              var url = "/api/v1/meeting_manager/recording/download/".concat(sessionStorage.getItem('institution_id'), "/").concat(object.download_id) + '?type=1 ';
              this.auth.showLoader();
              this.viewDownloadPopup = false;

              this._http.getData(url).subscribe(function (response) {
                _this41.auth.hideLoader();

                console.log(response);

                if (response && response.video_url) {
                  _this41.isVDOCipherVDO = false;
                  _this41.showVideo = false;
                  _this41.JsonVars.video_url = atob(response.video_url);
                  console.log(_this41.JsonVars.video_url);
                }
              }, function (err) {
                _this41.auth.hideLoader();

                if (err.status == 400) {
                  _this41.msgService.showErrorMessage('error', '', 'You are out of storage! Please contact our support');
                } else {
                  _this41.msgService.showErrorMessage('error', '', 'There is some problem processing your request.Please contact support@proctur.com');
                }

                console.log(err);
              });
            } // Live class integration with VDOCipher

          }, {
            key: "getVdocipherVideoOtp",
            value: function getVdocipherVideoOtp(obj) {
              var _this42 = this;

              sessionStorage.setItem("VideoIdWatchHistor", obj.video_id);
              this.viewDownloadPopup = false;
              var url = "/api/v1/instFileSystem/videoOTP";
              var data = {
                "videoID": obj.video_id,
                "institute_id": sessionStorage.getItem("institute_id"),
                "user_id": sessionStorage.getItem("userid")
              };
              this.tempVideoData = obj;
              this.auth.showLoader();
              this.isVDOCipherVDO = true;

              this._http.postData(url, data).subscribe(function (response) {
                _this42.auth.hideLoader();

                if (response == null) {
                  var _obj = {
                    "otp": "20160313versASE323ND0ylfz5VIJXZEVtOIgZO8guUTY5fTa92lZgixRcokG2xm",
                    "playbackInfo": "eyJ2aWRlb0lkIjoiNGQ1YjRiMzA5YjQ5NGUzYTgxOGU1ZDE3NDZiNzU2ODAifQ=="
                  };

                  _this42.ShowVideo(_obj.otp, _obj.playbackInfo);
                } else {
                  var _obj2 = {
                    "otp": response['otp'],
                    "playbackInfo": response['playbackInfo']
                  };

                  _this42.ShowVideo(_obj2.otp, _obj2.playbackInfo);
                }
              }, function (err) {
                _this42.auth.hideLoader();

                _this42.msgService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "playVimeoVideo",
            value: function playVimeoVideo(obj) {
              this.viewDownloadPopup = false;
              this.videoplayer = true;
              this.currentProjectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(obj.vimeo_video_url);
            }
          }, {
            key: "watchHistory",
            value: function watchHistory() {
              var _this43 = this;

              console.log("totalPlayed", this.videoObject.totalPlayed);
              var url = '/api/v1/instFileSystem/allocateWatchHistory';
              var obj = {
                "video_id": sessionStorage.getItem("VideoIdWatchHistor"),
                "watch_duration": this.videoObject.totalPlayed
              };

              this._http.postData(url, obj).subscribe(function (response) {
                _this43.auth.hideLoader();

                console.log(response);
              }, function (err) {
                _this43.auth.hideLoader();

                _this43.msgService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "ShowVideo",
            value: function ShowVideo(otpString, playbackInfoString) {
              this.isVDOCipherVDO = true;
              this.showVideo = false;
              this.isVDOCipherVDO = true;
              var video = new window.VdoPlayer({
                otp: otpString,
                playbackInfo: playbackInfoString,
                theme: "9ae8bbe8dd964ddc9bdb932cca1cb59a",
                container: document.querySelector("#embedBox")
              });
              this.videoObject = video; // video.addEventListener(`mpmlLoad`, (data) => {
              //   video.play();
              // });

              var container = document.querySelector('.embedBox');
            }
          }, {
            key: "stopVideo",
            value: function stopVideo() {
              this.showVideo = true;
              this.JsonVars.video_url = null;

              if (this.videoObject) {
                this.videoObject.pause(); // removes video
              }

              this.watchHistory();
            }
          }, {
            key: "viewdownload_links",
            value: function viewdownload_links(obj) {
              this.viewDownloadPopup = true;
              this.download_links = obj;
            } // upload recording // By Swapnil

          }, {
            key: "identify",
            value: function identify(index, item) {
              return item.session_id;
            }
          }, {
            key: "deleteRecording",
            value: function deleteRecording(session_id, isAbort) {
              var _this44 = this;

              var url = "/api/v1/meeting_manager/deleteRecording?session_id=".concat(session_id);
              this.auth.showLoader();

              this._http.deleteDataById(url).subscribe(function (res) {
                _this44.auth.hideLoader();

                if (res.statusCode == 200) {
                  if (!isAbort) {
                    _this44.msgService.showErrorMessage('success', '', res.result);

                    _this44.viewDownloadPopup = false;

                    _this44.getClassesList();
                  }
                } else {
                  _this44.msgService.showErrorMessage('error', '', res.message);
                }
              }, function (err) {
                _this44.auth.hideLoader();

                _this44.msgService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "upload",
            value: function upload(seesion_id, classType) {
              this.uploadSessionId = seesion_id;
              this.uploadClassType = classType;
              this.fileUploadInput = '';
              this.viewDownloadPopup = false;
            }
          }, {
            key: "fillFiles",
            value: function fillFiles(files) {
              var _this45 = this;

              setTimeout(function () {
                var manualUploadedFileList = document.getElementById('uploadFileControl').files;
                var filesArr = Array.from(manualUploadedFileList);
                _this45.selectedFiles = filesArr;
                _this45.customFileArr = _this45.generateFilePreview(_this45.selectedFiles);
              }, 500);
            }
          }, {
            key: "generateFilePreview",
            value: function generateFilePreview(fileList) {
              var size = fileList.length;
              var tempArr = [];
              this.tempArr = tempArr;
              var file;

              if (size > 0) {
                for (var i = 0; i < size; i++) {
                  file = fileList[i];
                  tempArr.push(new fileObj(this.getName(file.name), this.getType(file.name), file.size));
                }
              }

              return tempArr;
            }
          }, {
            key: "getName",
            value: function getName(file) {
              return file.split(".")[0];
            }
          }, {
            key: "getType",
            value: function getType(file) {
              var str = file.substring(file.lastIndexOf(".") + 1, file.length);
              return str;
            }
          }, {
            key: "uploadHandler",
            value: function uploadHandler() {
              var _this46 = this;

              if (this.selectedFiles.length == 0) {
                this.appC.popToast({
                  type: "error",
                  body: "No file selected"
                });
                return;
              }

              var institute_id = sessionStorage.getItem("institute_id");
              var formData = new FormData();

              if (this.isVimeo == 'VDOCipher') {
                for (var i = 0; i < this.selectedFiles.length; i++) {
                  formData.append("files", this.selectedFiles[i]);
                }
              }

              if (this.isVimeo == 'Vimeo' && this.vimeo_title == '') {
                this.appC.popToast({
                  type: "error",
                  body: "Please enter title"
                });
                return;
              }

              var fileJson = {
                "video_size": this.selectedFiles[0].size,
                "video_title": this.vimeo_title,
                "video_upload_on": this.isVimeo
              };
              formData.append('fileJson', JSON.stringify(fileJson));

              if (this.isVimeo == 'Vimeo') {
                this.auth.showLoader();
              }

              var isZoom = true;

              if (this.uploadClassType != 'Zoom') {
                isZoom = false;
              }

              var base = this.auth.getBaseUrl();
              var urlPostXlsDocument = base + "/api/v1/meeting_manager/uploadRecording?isZoomLiveClass=" + isZoom;
              var newxhr = new XMLHttpRequest();
              newxhr.open("POST", urlPostXlsDocument, true);
              newxhr.setRequestHeader("institute_id", institute_id);
              newxhr.setRequestHeader("session_id", this.uploadSessionId);
              newxhr.setRequestHeader("Authorization", this.Authorization);
              newxhr.setRequestHeader("enctype", "multipart/form-data;");
              newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
              newxhr.setRequestHeader("Accept", "application/json, text/javascript");

              if (this.isVimeo == 'VDOCipher') {
                this.progressBar = true;
                newxhr.upload.addEventListener('progress', function (e) {
                  if (e.lengthComputable) {
                    _this46.progress = Math.round(e.loaded * 100 / e.total);
                    document.getElementById('progress-width').style.width = _this46.progress + '%';
                  }
                }, false);
              }

              newxhr.onreadystatechange = function () {
                if (newxhr.readyState == 4) {
                  if (newxhr.status >= 200 && newxhr.status < 300) {
                    _this46.auth.hideLoader();

                    var data = JSON.parse(newxhr.response);

                    if (_this46.isVimeo == 'VDOCipher') {
                      if (data.statusCode >= 200 && data.statusCode < 300) {
                        _this46.msgService.showErrorMessage('success', '', 'File(s) uploaded successfully');

                        _this46.fileUploadInput = '';
                        _this46.progress = 0;
                        _this46.progressBar = false;
                        $('#uploadRec').modal('hide');

                        _this46.getClassesList();
                      } else {
                        _this46.msgService.showErrorMessage('error', '', data.message);
                      }
                    } else {
                      if (data.result.upload_link != '' && data.result.upload_link != null) {
                        _this46.live_class_session_recording_id = data.result.live_class_session_recording_id;

                        _this46.patchRequest(data.result);
                      } else {
                        _this46.msgService.showErrorMessage('error', '', data.result.message);
                      }
                    }
                  } else {
                    _this46.progress = 0;
                    _this46.progressBar = false;

                    _this46.auth.hideLoader();

                    var _data = JSON.parse(newxhr.response);

                    _this46.msgService.showErrorMessage('error', '', _data.message);
                  }
                }
              };

              newxhr.send(formData);
            }
          }, {
            key: "patchRequest",
            value: function patchRequest(obj) {
              var _this47 = this;

              // this.auth.showLoader();
              var base = this.auth.getBaseUrl();
              var urlPostXlsDocument = obj.upload_link;
              this.fileUploadXHR = new XMLHttpRequest();
              this.fileUploadXHR.open("PATCH", urlPostXlsDocument, true);
              this.fileUploadXHR.setRequestHeader("Tus-Resumable", '1.0.0');
              this.fileUploadXHR.setRequestHeader("Upload-Offset", '0');
              this.fileUploadXHR.setRequestHeader("Content-Type", "application/offset+octet-stream");
              this.fileUploadXHR.setRequestHeader("Accept", "application/vnd.vimeo.*+json;version=3.4");
              this.progressBar = true;
              this.isUploding = true;
              this.fileUploadXHR.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                  _this47.progress = Math.round(e.loaded * 100 / e.total);
                  document.getElementById('progress-width').style.width = _this47.progress + '%';
                }
              }, false);

              this.fileUploadXHR.onreadystatechange = function () {
                if (_this47.fileUploadXHR.readyState == 4) {
                  if (_this47.fileUploadXHR.status >= 200 && _this47.fileUploadXHR.status < 300) {
                    _this47.auth.hideLoader();

                    _this47.updateVimeoStatus(obj.videoId);

                    if (!(_this47.proctur_live_integration_with_vimeo == '1' && _this47.proctur_live_integration_with_vdoCipher == '1')) {
                      if (_this47.proctur_live_integration_with_vimeo == '1') {
                        _this47.isVimeo = 'Vimeo';
                      } else if (_this47.proctur_live_integration_with_vimeo == '1') {
                        _this47.isVimeo = 'VDOCipher';
                      }
                    }

                    _this47.vimeo_title = '';
                    _this47.isUploding = false;
                  }
                } else {
                  _this47.progress = 0;
                  _this47.progressBar = false;
                  _this47.isUploding = false;

                  _this47.auth.hideLoader();
                }
              };

              this.fileUploadXHR.send(this.selectedFiles[0]);
            }
          }, {
            key: "updateVimeoStatus",
            value: function updateVimeoStatus(videoId) {
              var _this48 = this;

              var obj = {
                "videoID": videoId,
                "institute_id": this.institution_id,
                "video_status": "Queued",
                "is_live_class_recording": "Y"
              };

              this._http.postData('/api/v1/instFileSystem/updateVideoStatus', obj).subscribe(function (res) {
                _this48.msgService.showErrorMessage('success', '', 'File(s) uploaded successfully');

                $('#uploadRec').modal('hide');
                _this48.fileUploadXHR = '';

                _this48.getClassesList();
              }, function (err) {
                console.log(err);
              });
            } // Developed by Nalini
            // To cancel vimeo file 

          }, {
            key: "closeUploadModal",
            value: function closeUploadModal() {
              if (this.isUploding) {
                if (confirm('Are you sure, you want to cancel file upload')) {
                  $('#uploadRec').modal('hide');
                  this.fileUploadXHR.abort();
                  this.deleteRecording(this.live_class_session_recording_id, true);
                  this.progress = 0;
                  this.fileUploadXHR = '';
                  this.progressBar = false;

                  if (!(this.proctur_live_integration_with_vimeo == '1' && this.proctur_live_integration_with_vdoCipher == '1')) {
                    if (this.proctur_live_integration_with_vimeo == '1') {
                      this.isVimeo = 'Vimeo';
                    } else if (this.proctur_live_integration_with_vimeo == '1') {
                      this.isVimeo = 'VDOCipher';
                    }
                  }

                  this.vimeo_title = '';
                  this.isUploding = false;
                }
              } else {
                this.progress = 0;

                if (!(this.proctur_live_integration_with_vimeo == '1' && this.proctur_live_integration_with_vdoCipher == '1')) {
                  if (this.proctur_live_integration_with_vimeo == '1') {
                    this.isVimeo = 'Vimeo';
                  } else if (this.proctur_live_integration_with_vimeo == '1') {
                    this.isVimeo = 'VDOCipher';
                  }
                }

                this.vimeo_title = '';
                this.progressBar = false;
                this.isUploding = false;
                $('#uploadRec').modal('hide');
              }
            }
          }, {
            key: "viewAttandance",
            value: function viewAttandance(obj) {
              sessionStorage.setItem('live_meeting_with', obj.live_meeting_with);
              sessionStorage.setItem('from_live_date', this.liveClassSearchFilter.from_date);
              sessionStorage.setItem('to_live_date', this.liveClassSearchFilter.to_date);
              this.router.navigate(['/view/live-classes/report/' + obj.session_id]);
            }
          }, {
            key: "changeSelectedSize",
            value: function changeSelectedSize(obj) {
              this.selectedDownloadSize = obj;
            }
          }, {
            key: "downloadVimeoVdo",
            value: function downloadVimeoVdo() {
              window.open(this.selectedDownloadSize.link, "_blank");
              $('#downloadOption').modal('hide');
            }
          }, {
            key: "RefreshSession",
            value: function RefreshSession(obj) {
              var _this49 = this;

              console.log(obj);
              this.auth.showLoader();

              this._http.getData('/api/v1/meeting_manager/refresh/' + sessionStorage.getItem('institute_id') + '/' + obj.session_id).subscribe(function (res) {
                _this49.auth.hideLoader();

                _this49.getClassesList();
              }, function (err) {
                _this49.auth.hideLoader();

                console.log(err);
              });
            }
          }, {
            key: "viewClass",
            value: function viewClass(obj) {
              this.viewClassData = obj;
              this.viewClassData.master_course = '-';
              this.viewClassData.product_names = '-';

              if (this.viewClassData.course_list && this.viewClassData.course_list.length) {
                this.viewClassData.master_course = [];

                if (!this.schoolModel) {
                  for (var i = 0; i < this.viewClassData.course_list.length; i++) {
                    if (i == 0) {
                      this.viewClassData.master_course.push(this.viewClassData.course_list[0].master_course_name);
                    } else {
                      if (!this.viewClassData.master_course.includes(this.viewClassData.course_list[i].master_course_name)) {
                        this.viewClassData.master_course.push(this.viewClassData.course_list[i].master_course_name);
                      }
                    }
                  }

                  this.viewClassData.master_course = this.viewClassData.master_course.join(',');
                }

                if (this.schoolModel) {
                  this.viewClassData.master_course = this.viewClassData.course_list[0].standard_name;
                  this.viewClassData.subject = Array.prototype.map.call(this.viewClassData.course_list, function (s) {
                    return Array.prototype.map.call(s.subject_list, function (a) {
                      return a.subject_name;
                    }).toString();
                  });
                  this.viewClassData.subject = this.viewClassData.subject.join(',');
                }
              }

              if (this.viewClassData.product_list && this.viewClassData.product_list.length) {
                this.viewClassData.product_names = Array.prototype.map.call(this.viewClassData.product_list, function (s) {
                  return s.product_name;
                }).toString();
              }

              this.showViewClassPopup = true;
            }
          }, {
            key: "onPopState",
            value: function onPopState(event) {
              if (event.keyCode == 123 || event.ctrlKey && event.shiftKey && event.keyCode == 73) {
                event.preventDefault();
              }
            }
          }, {
            key: "onMouseOver",
            value: function onMouseOver($event) {
              $event.preventDefault();
              return false;
            }
          }, {
            key: "toggleActionMenu",
            value: function toggleActionMenu(event) {
              console.log(event); // event.target.nextElementSibling.classList.toggle('d-flex');
            }
          }]);

          return LiveClassesComponent;
        }();

        LiveClassesComponent.ctorParameters = function () {
          return [{
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }, {
            type: _node_modules_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
          }, {
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
          }];
        };

        LiveClassesComponent.propDecorators = {
          onPopState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
          }],
          onMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["document:contextmenu", ['$event']]
          }]
        };
        LiveClassesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-live-classes',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./live-classes.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/live-classes-module/live-classes/live-classes.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./live-classes.component.scss */
          "./src/app/components/live-classes-module/live-classes/live-classes.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ___WEBPACK_IMPORTED_MODULE_3__["HttpService"], ___WEBPACK_IMPORTED_MODULE_3__["MessageShowService"], _node_modules_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _services_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]])], LiveClassesComponent);
        return LiveClassesComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-live-classes-module-live-classes-module-es5.js.map