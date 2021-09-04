(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-course-module-data-setup-data-setup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/class-room/class-room.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/class-room/class-room.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupClassRoomClassRoomComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\" clearFix\" style=\"padding-right: 2%;\">\n  <section class=\"middle-top mb0 clearFix\" style=\"margin-top: 10px;\">\n    <div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-7 col-12\">\n              <div class=\"form-inline\">\n                <input type=\"text\" #idAddRoom [(ngModel)]=\"enterclassdata\" class=\"form-control input\"\n                  placeholder=\"Room Name*\">\n                <input type=\"text\" #idAddDesc [(ngModel)]=\"enterclassdataDesc\" class=\"form-control input description\"\n                  placeholder=\"Description*\">\n                <button (click)=\"addNewclassRoom(idAddRoom.value,idAddDesc.value)\" class=\"add\">Add Classroom</button>\n              </div>\n            </div>\n            <div class=\"col-lg-5 col-12\">\n              <span class=\"right\">\n                <input type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" (keyup)=\"searchDatabase()\"\n                  placeholder=\"Search by Room Name/Description\" class=\"input magnifying-glass\">\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- <section class=\"middle-top mb0 clearFix\" style=\"padding-bottom:0px;\">\n    <h1 class=\"pull-left marginhead\">\n      <div class=\"header-title\">\n        <h2>\n          <a routerLink=\"/view/{{type}}\" style=\"color: #0084f6;\">\n            {{ type | titlecase }}\n          </a>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n          <a routerLink=\"/view/{{type}}/setup\" style=\"color: #0084f6;\">\n            Data Setup\n          </a>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> Classroom\n        </h2>\n      </div>\n    </h1>\n    <div class=\"clearFix\">\n\n      <div class=\"pull-right\">\n        <div class=\"search-filter-wrapper\">\n          <input #search type=\"textbox\" class=\"normal-field\" placeholder=\"Search\" [(ngModel)]=\"searchText\"\n            name=\"searchData\" (keyup)=\"searchDatabase()\">\n        </div>\n        <button class=\"btn\" (click)=\"toggleCreateNewList()\">\n          <i id=\"showAddBtn\" class=\"addBtnClass\" style=\"border:none;\">+</i>\n          <i id=\"showCloseBtn\" style=\"display:none;border:none;\" class=\"closeBtnClass\">-</i>\n          <span>Add Classroom</span>\n        </button>\n      </div>\n\n\n\n    </div>\n  </section> -->\n\n  <section class=\"middle-main clearFix\">\n\n    <!-- <div class=\"clearFix add-edit\">\n      <button class=\"btn\" (click)=\"toggleCreateNewList()\">\n        <i id=\"showAddBtn\" class=\"addBtnClass\" style=\"border:none;\">+</i>\n        <i id=\"showCloseBtn\" style=\"display:none;border:none;\" class=\"closeBtnClass\">-</i>\n        <span>Add Classroom</span>\n      </button>\n      <div class=\"pull-right\">\n        <div class=\"search-filter-wrapper\">\n          <input #search type=\"textbox\" class=\"normal-field\" placeholder=\"Search\" [(ngModel)]=\"searchText\"\n            name=\"searchData\" (keyup)=\"searchDatabase()\">\n        </div>\n      </div>\n\n    </div> -->\n\n\n    <section class=\"clearFix\" *ngIf=\"CreateNewList\">\n      <form style=\"margin:0 ;\">\n        <div class=\"row \">\n          <div class=\"c-lg-3 c-md-3 c-sm-3 c-sx-3 \">\n\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value': enterclassdata!= ''}\">\n              <label for=\"Classroom_Name\">Classroom Name<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" #idAddRoom class=\"form-ctrl\" [(ngModel)]=\"enterclassdata\" name=\"Classroom_Name\"\n                id=\"Classroom_Name\" style=\"border-radius: 4px;\">\n\n            </div>\n          </div>\n          <div class=\"c-lg-3 c-md-3 c-sm-3 c-sx-3\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value': enterclassdataDesc!= ''}\">\n              <label for=\"ClassroomDesc\">Classroom Description<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" #idAddDesc class=\"form-ctrl\" [(ngModel)]=\"enterclassdataDesc\" name=\"ClassroomDesc\"\n                id=\"ClassroomDesc\" style=\"border-radius: 4px;\">\n\n            </div>\n          </div>\n          <div class=\"c-lg-6 c-md-6 c-sm-6 c-sx-6\" style=\"margin-top:3rem;\">\n            <button class=\"btn\" (click)=\"addNewclassRoom(idAddRoom.value,idAddDesc.value)\">Save</button>\n          </div>\n        </div>\n\n      </form>\n    </section>\n\n    <div id=\"divSlotTable\">\n      <div class=\"table-scroll-wrapper\">\n        <div class=\"table table-responsive\">\n          <table class=\"tableBodyScroll\" style=\"margin-bottom: 0;\">\n            <thead>\n              <tr>\n                <th style=\"text-align: left;width: 10%;\">\n                  Id\n                </th>\n                <th style=\"width: 25%;\">\n                  Room Name\n                </th>\n                <th style=\"width: 40%;\">\n                  Description\n                </th>\n                <th style=\"text-align: center;\">\n                  Action\n                </th>\n              </tr>\n            </thead>\n\n            <tbody *ngIf=\"classRoomData.length !=0\" style=\"min-height: 48vh;max-height: 48vh;\">\n\n              <tr style=\"box-shadow: -1px 1px 6px 0px rgb(0 0 0 / 10%);\" id=\"row{{i}}\" class=\"displayComp\"\n                *ngFor=\"let row of pagedclassRoomData; let i = index; trackBy: i;\">\n\n                <td style=\"text-align: left;width: 10%;\">\n                  {{i + 1}}\n                </td>\n\n                <td class=\" view-comp\" style=\"width: 25%;\">\n                  {{row.class_room_name}}\n                </td>\n\n                <td class=\"edit-comp\" style=\"width: 25%;\">\n                  <div class=\"field-wrapper\">\n                    <textarea id=\"\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.class_room_name\"\n                      style=\"overflow: hidden;margin: 0;\" name=\"label\" cols=\"1\" rows=\"1\"></textarea>\n                    <!-- <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.class_room_name\" name=\"label\"> -->\n                  </div>\n                </td>\n\n                <td class=\"view-comp\" title=\"{{row.class_room_desc}}\" style=\"text-align: left;width: 40%;\">\n                  {{ (row.class_room_desc?.length>50) ?\n                    (row.class_room_desc | slice:0:50 ) + '...' :(row.class_room_desc) }}\n                </td>\n\n                <td class=\"edit-comp\" style=\"text-align: left;width: 40%;\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.class_room_desc\"\n                      style=\"overflow: hidden;margin: 0;\" name=\"label\">\n                  </div>\n                </td>\n\n                <td class=\"view-comp\" style=\"text-align: center;\">&nbsp;&nbsp;\n                  <!-- <i class=\"fa fa-pencil\" title=\"Edit\" style=\"color: #0084f6;\" aria-hidden=\"true\"\n                    (click)=\"editRowTable(row , i)\"></i> -->\n                  <img (click)=\"editRowTable(row , i)\" src=\"../../../../assets/images/EDit.png\">\n                  <!-- <a class=\"anchorTagCursor\" (click)=\"editRowTable(row , i)\">Edit</a> -->\n                </td>\n\n                <td class=\"edit-comp\" style=\"text-align: center;\">&nbsp;&nbsp;&nbsp;\n                  <i class=\"fa fa-floppy-o\" title=\"Save\" style=\"color: blue; margin-right: 10px;font-size: 18px;\"\n                    aria-hidden=\"true\" (click)=\"saveclassRoomInfo(row , i)\"></i>\n                  <i class=\"fa fa-times\" title=\"Cancel\" style=\"color: red;font-size: 18px;\" aria-hidden=\"true\"\n                    (click)=\"cancelRow(row , j)\"></i>\n                  <!-- <a class=\"anchorTagCursor\" (click)=\"cancelRow(row , j)\" style=\"margin-right: 5x;color:red;\">Cancel</a>\n                  <a class=\"anchorTagCursor\" (click)=\"saveclassRoomInfo(row , i)\">Update</a> -->\n                </td>\n\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"classRoomData.length ==0 || totalRow == 0\">\n              <td colspan=\"4\" style=\"text-align: center\">\n                No data found\n              </td>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <!-- Paginator Here -->\n    <div class=\"row filter-res pagination\" style=\"width: 100%;margin-top: 0;margin-bottom: 0;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [count]=\"totalRow\" [sizeArr]=\"sizeArr\"\n          (sizeChange)=\"updateTableBatchSize($event)\">\n        </pagination>\n      </div>\n    </div>\n  </section>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/class-settings/class-settings.component.html":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/class-settings/class-settings.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupClassSettingsClassSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"w981 main_div\">\n      <div>\n        <div class=\"settings\">\n          <span>\n            <img src=\"../../../../assets/images/settings.svg\">\n            <span class=\"position\">Settings</span>\n          </span>\n        </div>\n        <ul class=\"menu\">\n            <li  (click)=\"scrollTo('section1')\" [ngClass]=\"{ 'selected': currentSection === 'section1'}\"><a>Class Setting</a></li>\n            <li (click)=\"scrollTo('section2')\" [ngClass]=\"{ 'selected': currentSection === 'section2'}\" ><a >Homework Setting</a> </li>\n            <li   *ngIf=\"!schoolModel\" (click)=\"scrollTo('section3')\" [ngClass]=\"{ 'selected': currentSection === 'section3'}\" ><a>Absentees / Homework Daily \n                Report</a></li>\n            <li (click)=\"scrollTo('section4')\" [ngClass]=\"{ 'selected': currentSection === 'section4'}\"><a >Course Expiry Notification </a></li>\n            <li  (click)=\"scrollTo('section5')\" [ngClass]=\"{ 'selected': currentSection === 'section5'}\"><a>Attendance</a></li>\n            <li *ngIf=\"biometricSetting != 1\" (click)=\"scrollTo('section6')\" [ngClass]=\"{ 'selected': currentSection === 'section6'}\" ><a >Biometric SMS Notification Setting</a> </li>\n            <li (click)=\"scrollTo('section7')\" [ngClass]=\"{ 'selected': currentSection === 'section7'}\"><a>SMS Notifications \n                </a></li>\n        </ul>\n      </div>\n      <div class=\"scrool1\"> \n        <div class=\"flex1\" id=\"section1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">C</span><span class=\"blue_line\"></span>\n          </div>\n          <div class=\"wid100-65\">\n            <p class=\"blue_settings\">\n                Class Settings\n            </p>\n            <p class=\"bold_settings\">\n                Student Expiry Notification (If date specified in student details)\n            </p>\n             <p class=\"black_settings\">\n              Select the user type to whom the notification has to be sent.\n             </p>\n             <div class=\"flex\">\n                <div class=\"flex\">\n                    <div>\n                      <label class=\"checkbox\">\n                         <span class=\"checkbox__input\">\n                           <input type=\"checkbox\" name=\"checked\" checked=\"\" [(ngModel)]=\"classSettings.enable_student_expiry_notification.student\" >\n                           <span class=\"checkbox__control\">\n                            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                               <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                           </span>\n                         </span>\n                       </label>\n                    </div>\n                     <div>\n                      <p class=\"settings_label\">\n                       Students \n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"flex\">\n                    <div>\n                      <label class=\"checkbox\">\n                         <span class=\"checkbox__input\">\n                           <input type=\"checkbox\" name=\"checked\" checked=\"\" [(ngModel)]=\"classSettings.enable_student_expiry_notification.admin\">\n                           <span class=\"checkbox__control\">\n                            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                               <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                           </span>\n                         </span>\n                       </label>\n                    </div>\n                     <div>\n                      <p class=\"settings_label\">\n                       Admin \n                      </p>\n                    </div>\n                  </div>\n             </div>\n            <div class=\"flex\">\n                <div class=\"space\">\n                    <p class=\"bold_settings\">\n                        Send Notification in below specified days in advance\n                      </p>\n                    <input type=\"text\" class=\"input\"  [(ngModel)]=\"classSettings.student_expiry_notification_before_no_days\" name=\"student_expiry_notification_before_no_days\" placeholder=\"Enter Days\">\n                </div>\n                <div>\n                    <p class=\"bold_settings\">\n                        Contact no. for expiry notification (Comma Seperated)<img src=\"../../../../assets/img1/chatt.svg\" class=\"size_sm\" style=\"display: none;\">\n                      </p>\n                    <input type=\"text\" class=\"input\" name=\"student_expiry_notification_contact_no\"   [(ngModel)]=\"classSettings.student_expiry_notification_contact_no\" placeholder=\"Email Contact Number\">\n                </div>\n            </div>\n          </div>\n        \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section2\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse \">H</span><span class=\"blue_line\"></span>\n            </div>\n            <div>\n                <p class=\"blue_settings\">\n                    Homework Setting\n                </p>\n             \n              <p class=\"bold_settings\">\n                \n                Enable Homework Feature (Used while marking attendance)\n              </p>\n               <p class=\"black_settings\">\n                Enabling this option, the user can provide assignments to students.\n               </p>\n                \n            </div>\n            <div class=\"toggle\">\n              <span>\n                <span class=\"off\">OFF</span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" [(ngModel)]=\"classSettings.home_work_feature_enable\" name=\"home_work_feature_enable\">\n                  <span class=\"slider round\"></span>\n                </label>\n                <span class=\"on\">ON</span>\n              </span>\n              \n            </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\"id=\"section3\" *ngIf=\"!schoolModel\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse \">A</span><span class=\"blue_line \"></span>\n            </div>\n            <div>\n                <p class=\"blue_settings\">\n                    Absentees / Homework Daily Report\n                   </p>\n             <div class=\"flex center\">\n              <p class=\"bold_settings\">\n                Absentees / Homework Daily Report\n              </p>\n              <div class=\"dropdown1\">\n                <img src=\"../../../../assets/img1/chatt.svg\" class=\"size_sm\">\n              \n                <div class=\"dropdown-content1\">\n                  <p>Enable this to receive\n                    Absentees / Homework\n                    Report via Email</p>\n                </div>\n             </div>\n              </div>\n               <p class=\"black_settings\">\n                Enter Email ID's that has to receive daily report on Absentees / Homework, in comma separated format.\n               </p>\n                <p class=\"black_settings1\">\n                    Email-ids to receive report (comma seperated)\n               </p>\n               <input type=\"text\" class=\"input\" name=\"emailIds_for_justDail_ext_lead\" [(ngModel)]=\"classSettings.emailIds_for_justDail_ext_lead\"placeholder=\"Enter Email Id's\">\n            </div>\n            <div class=\"toggle\">\n              <span>\n                <span class=\"off\">OFF</span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" [(ngModel)]=\"classSettings.absenteeism_report_flag\" name=\"absenteeism_report_flag\" id=\"idAbsenteesReport\">\n                  <span class=\"slider round\"></span>\n                </label>\n                <span class=\"on\">ON</span>\n              </span>\n              \n            </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section4\" *ngIf=\"!schoolModel\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse \">C</span><span class=\"blue_line \"></span>\n            </div>\n            <div>\n                <p class=\"blue_settings\">\n                  <span *ngIf=\"isLangInst\">Batch</span>\n                  <span *ngIf=\"!isLangInst\">Course</span> &nbsp;Expiry Notification\n                   </p>\n              <p class=\"bold_settings\">\n                <span *ngIf=\"isLangInst\">Batch</span>\n                            <span *ngIf=\"!isLangInst\">Course</span>&nbsp;\n                            Expiry Notification to Admin\n              </p>\n               <p class=\"black_settings\">\n                Enable if you want to send notifications to admin regarding course expiry\n               </p>\n               \n          \n            </div>\n            <div class=\"toggle \">\n              <span>\n                <span class=\"off\">OFF</span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" (click)=\"disjusdialContId()\" name=\"course_or_batch_expiry_notification\" [(ngModel)]=\"classSettings.course_or_batch_expiry_notification\" >\n                  <span class=\"slider round\"></span>\n                </label>\n                <span class=\"on\">ON</span>\n              </span>\n              \n            </div>\n        </div>\n        <div class=\"flex290\" *ngIf=\"!disabled\">\n          <div>\n              <p class=\"black_settings1\">\n                  Contact no. for expiry notification (Comma seperated)\n              </p>\n              <input type=\"text\" class=\"input\" name=\"course_or_batch_expiry_notification_contact_no\"  [(ngModel)]=\"classSettings.course_or_batch_expiry_notification_contact_no\" placeholder=\"Enter Contact No.\">\n          </div>\n          <div>\n              <p class=\"black_settings1\">\n                  No of days in advance to receive expiry notification\n              </p>\n              <input type=\"text\" class=\"input\" name=\"course_or_batch_expiry_notification_before_no_days\" [(ngModel)]=\"classSettings.course_or_batch_expiry_notification_before_no_days\" placeholder=\"No. of Day's\">\n          </div>\n         </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section5\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse \">A</span><span class=\"blue_line \"></span>\n            </div>\n            <div>\n                <p class=\"blue_settings\">Attendance \n                   \n                   </p>\n              <p class=\"bold_settings\">\n                Student Absenteeism Report\n              </p>\n              \n               <p class=\"black_settings1\">\n                Admin will be notified via email on 15th & 30th of every month, for the students who were absent for more then the specified\n                no of days in a particular batch / course.\n               </p>\n               <div class=\"flex center\">\n                <p class=\"black_settings1\">\n                    Min no of days of student absenteeism for reporting\n               </p>\n               <!-- <div class=\"dropdown1\">\n                <img src=\"../../../../assets/img1/chatt.svg\" class=\"size_sm\">\n              \n                <div class=\"dropdown-content1\">\n                  <p>Admin will be notified via email on 15th & 30th of every month, for the students who were absent for more then the specified\n                    no of days in a particular batch / course.</p>\n                </div>\n             </div> -->\n              </div>\n               <input type=\"text\" class=\"input\" name=\"absent_attendance_in_a_month_threshold\"  [(ngModel)]=\"classSettings.absent_attendance_in_a_month_threshold\" placeholder=\"Enter No. of Days\">\n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section6\" *ngIf=\"biometricSetting != 1\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse\">B</span><span class=\"blue_line\"></span>\n            </div>\n            <div class=\"wid100-65\">\n              <p class=\"blue_settings\">\n                Biometric SMS Notification setting\n              </p>\n              <p class=\"bold_settings\">\n                For In Time (Only First In time per day)\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"classSettings.biometric_first_in_time_sms.student\" id=\"ch712\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.biometric_first_in_time_sms.parent\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"classSettings.biometric_first_in_time_sms.gaurdian\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">B</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div class=\"wid100-65\">\n             \n              <p class=\"bold_settings\">\n                Late for first class of the day\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.biometric_late_sms.student\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.biometric_late_sms.parent\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.biometric_late_sms.gaurdian\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">B</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div class=\"wid100-65\">\n             \n              <p class=\"bold_settings\">\n                Absent SMS (No IN/OUT) \n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"    [(ngModel)]=\"classSettings.biometric_absent_sms.student\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"    [(ngModel)]=\"classSettings.biometric_absent_sms.parent\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"    [(ngModel)]=\"classSettings.biometric_absent_sms.gaurdian\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">B</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div class=\"wid100-65\">\n             \n              <p class=\"bold_settings\">\n                In (First) and Out (Last) Time for the day\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.biometric_in_out_sms.student\" >\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"classSettings.biometric_in_out_sms.parent\" >\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.biometric_in_out_sms.gaurdian\" >\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">B</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div class=\"wid100-65\">\n             \n              <p class=\"bold_settings\">\n                For Every Out Time\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"classSettings.biometric_every_out_time_sms.student\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"classSettings.biometric_every_out_time_sms.parent\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"classSettings.biometric_every_out_time_sms.gaurdian\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">B</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div class=\"wid100-65\">\n             \n              <p class=\"bold_settings\">\n                Buffered Duration(mins) (To calculate Late for First Class ot the day)\n              </p>\n              <p class=\"black_settings1\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n               </p>\n             <input type=\"text\" class=\"input\" id=\"buffer_duration\"  [(ngModel)]=\"classSettings.biometric_late_sms_buffer\" max='90' min='0'>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">B</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div class=\"wid100-65\">\n             \n              <p class=\"bold_settings\">\n                Class In Time Buffer<img src=\"../../../../assets/img1/chatt.svg\" class=\"size_sm\">\n              </p>\n              <p class=\"black_settings1\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n               </p>\n             <input type=\"text\" max='90' min='0' id=\"set_buffer_id\"\n             [(ngModel)]=\"classSettings.biometric_class_in_time_buffer_in_min\" name=\"biometric_class_in_time_buffer_in_min\" class=\"input\">\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" >\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">B</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div class=\"wid100-65\">\n             \n              <p class=\"bold_settings\">\n                Class OUT Time Buffer<img src=\"../../../../assets/img1/chatt.svg\" class=\"size_sm\">\n              </p>\n              <p class=\"black_settings\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n               </p>\n             <input type=\"text\" class=\"input\" max='90' min='0' id=\"set_out_buffer_id\"\n             [(ngModel)]=\"classSettings.biometric_class_out_time_buffer_in_min\">\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section7\" >\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse \">S</span><span class=\"blue_line \"></span>\n            </div>\n            <div >\n                <p class=\"blue_settings\">\n                    SMS Notifications \n                  </p>\n                  <p class=\"black_settings\">\n                    Enable this options to send notifications to all users regarding student absentees\n                   </p>\n              <p class=\"bold_settings\">\n                Absent Students\n              </p>\n             \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"classSettings.sms_absent_notification.student\" >\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.sms_absent_notification.parent\" >\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.sms_absent_notification.gaurdian\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" *ngIf=\"!schoolModel\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div >\n                \n              <p class=\"bold_settings\">\n                Topics Covered in Class\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.topics_covered_notification.student\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.topics_covered_notification.parent\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.topics_covered_notification.gaurdian\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" *ngIf=\"!schoolModel\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div >\n                \n              <p class=\"bold_settings\">\n                Extra Class Notification\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.extra_class_schedule_notification.student\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.extra_class_schedule_notification.parent\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.extra_class_schedule_notification.gaurdian\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.extra_class_schedule_notification.teacher\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                           Faculty\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.extra_class_schedule_notification.admin\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                          Admin\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div >\n                \n              <p class=\"bold_settings\">\n                Cancel Class/Exam Notification\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.cancel_class_schedule_notification.student\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.cancel_class_schedule_notification.parent\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.cancel_class_schedule_notification.gaurdian\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.cancel_class_schedule_notification.teacher\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                           Faculty\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.cancel_class_schedule_notification.admin\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                          Admin\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div >\n                \n              <p class=\"bold_settings\">\n                Regular Class Notification\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"classSettings.regular_class_notification.student\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"classSettings.regular_class_notification.parent\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"classSettings.regular_class_notification.gaurdian\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"classSettings.regular_class_notification.teacher\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                           Faculty\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"classSettings.regular_class_notification.admin\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                          Admin\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\"  *ngIf=\"!schoolModel\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div >\n                \n              <p class=\"bold_settings\">\n                Homework Assginment Notification\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\" checked=\"\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\" checked=\"\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\" checked=\"\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" *ngIf=\"!schoolModel\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div >\n                \n              <p class=\"bold_settings\">\n                Homework Reminder to Students\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"classSettings.home_work_status_notification.student\" >\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Students \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"classSettings.home_work_status_notification.parent\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Parents\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.home_work_status_notification.gaurdian\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Guardian\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div >\n                \n              <p class=\"bold_settings\">\n                Class Attendance Not Marked (Post 2 hours of Class Completion)\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"classSettings.enable_class_attendance_not_marked_notification.teacher\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Teacher \n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"classSettings.enable_class_attendance_not_marked_notification.admin\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Admin\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"classSettings.enable_class_attendance_not_marked_notification.other\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                            Others\n                          </p>\n                        </div>\n                      </div>\n               </div>\n              \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" *ngIf=\"!schoolModel\" >\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n            </div>\n            <div >\n                \n              <p class=\"bold_settings\">\n                Class Attendance Not Marked (Daily Reminder Until Marked)\n              </p>\n              \n               <div class=\"flex\">\n                  <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.enable_class_attendance_not_marked_daily_notification.teacher\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                        Teacher\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                      <div>\n                        <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"classSettings.enable_class_attendance_not_marked_daily_notification.admin\">\n                             <span class=\"checkbox__control\">\n                              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                             </span>\n                           </span>\n                         </label>\n                      </div>\n                       <div>\n                        <p class=\"settings_label\">\n                         Admin\n                        </p>\n                      </div>\n                    </div>\n                    <div class=\"flex\">\n                        <div>\n                          <label class=\"checkbox\">\n                             <span class=\"checkbox__input\">\n                               <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"classSettings.enable_class_attendance_not_marked_daily_notification.other\">\n                               <span class=\"checkbox__control\">\n                                <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                                   <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                               </span>\n                             </span>\n                           </label>\n                        </div>\n                         <div>\n                          <p class=\"settings_label\">\n                           Other\n                          </p>\n                        </div>\n                      </div>\n               </div>\n         \n            </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n\n\n        <!-- end -->\n      </div>\n    </div>\n    <div class=\"w98\">\n       <div class=\"bottom\">\n          <div class=\"display\">\n            <div>\n              \n            </div>\n            <div>\n              <button class=\"white_button mr10\">Cancel</button>\n              <button class=\"blue_button mr10\" (click)=\"saveFeesSettings()\">Save</button>\n            </div>\n          </div>\n        </div>\n    </div>\n </div>  \n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/conten-library-setting/conten-library-setting.component.html":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/conten-library-setting/conten-library-setting.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupContenLibrarySettingContenLibrarySettingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"w981 main_div\">\n      <div>\n        <div class=\"settings\">\n          <span>\n            <img src=\"../../../../assets/images/settings.svg\">\n            <span class=\"position\">Settings</span>\n          </span>\n        </div>\n        <ul class=\"menu\">\n            <li  (click)=\"scrollTo('section1')\" [ngClass]=\"{ 'selected': currentSection === 'section1'}\"><a>VDOCipher Setting</a></li>\n            <li (click)=\"scrollTo('section2')\" [ngClass]=\"{ 'selected': currentSection === 'section2'}\" ><a >VDOCipher Settings-Videos</a> </li>\n            <li   (click)=\"scrollTo('section3')\" [ngClass]=\"{ 'selected': currentSection === 'section3'}\" ><a>VDOCipher Watch Multiplier\n                Setting\n                </a></li>\n            <li (click)=\"scrollTo('section4')\" [ngClass]=\"{ 'selected': currentSection === 'section4'}\" ><a >Vimeo Setting</a></li>\n            <li  (click)=\"scrollTo('section5')\" [ngClass]=\"{ 'selected': currentSection === 'section5'}\"  ><a>Vimeo Setting (File Mgr/ Study\n                Material)</a></li>\n                <li (click)=\"scrollTo('section6')\" [ngClass]=\"{ 'selected': currentSection === 'section6'}\" ><a >Study Material Setting</a></li>\n                <li  (click)=\"scrollTo('section7')\" [ngClass]=\"{ 'selected': currentSection === 'section7'}\"  ><a>SMS Notification Setting</a></li>\n        </ul>\n      </div>\n      <div class=\"scrool1\">\n        <div class=\"flex1\" id=\"section1\" >\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">V</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n              VDOCipher Setting\n            </p>\n            <p class=\"bold_settings\">\n              Enable VDOCipher Feature\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n  \n          </div>\n          <div class=\"toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n            <input type=\"checkbox\" name=\"enable_Vdocipher_feature\" [(ngModel)]=\"contentSetting.enable_Vdocipher_feature\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n  \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              VDOCipher Client Account API key\n            </p>\n            <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n            <input type=\"text\" class=\"input\" name=\"vdocipher_client_account_api_key\" [(ngModel)]=\"contentSetting.vdocipher_client_account_api_key\" placeholder=\"VDOCipher Client Account API key\">\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Allotted VDOCipher Storage Capacity (in GB)\n            </p>\n            <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n            <input type=\"text\" class=\"input\"  name=\"allotted_vdocipher_storage_capacity\" [(ngModel)]=\"contentSetting.allotted_vdocipher_storage_capacity\"  onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" placeholder=\"Storage Capacity (in GB)\">\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Allotted VDOCipher Bandwidth (in GB)\n            </p>\n            <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n            <input type=\"text\" class=\"input\" name=\"allotted_vdocipher_storage_capacity\" [(ngModel)]=\"contentSetting.allotted_vdocipher_bandwidth\"  onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" placeholder=\" Bandwidth (in GB)\">\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section2\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">V</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n              VDOCipher Settings-Videos\n            </p>\n            <p class=\"bold_settings\">\n              Dynamic Watermark\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n            <div class=\"flex\">\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" id=\"name\"   [(ngModel)]=\"settingDetails.watermark_name\" >\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Name\n                  </p>\n                </div>\n              </div>\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" id=\"phone\" name=\"watermark_phone\" [(ngModel)]=\"settingDetails.watermark_phone\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Phone\n                  </p>\n                </div>\n              </div>\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" id=\"email\" name=\"watermark_email\" [(ngModel)]=\"settingDetails.watermark_email\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Email\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" checked>\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n  \n          </div> -->\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Privacy Settings\n            </p>\n            <p class=\"black_settings\">\n              Set the video visibility\n              mode to private or public.\n              In private mode, video will\n              be visible to the enrolled\n              students. In public mode,\n              video will be visible to\n              guest users & enrolled\n              students\n            </p>\n  \n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\"   [ngClass]=\"(is_video_public)?'inactive_toggle_button':'active_toggle_button'\">Private</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"is_video_public\" >\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\" [ngClass]=\"(is_video_public)?'active_toggle_button':'inactive_toggle_button'\">Public</span>\n            </span>\n  \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Watermark\n            </p>\n            <p class=\"black_settings1\">\n              Set the text to be shown\nas watermark in the video.\n            </p>\n            <input type=\"text\" class=\"input\" name=\"video_watermark\"  [(ngModel)]=\"settingDetails.video_watermark\"  placeholder=\"Enter watermark\">\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Color\n            </p>\n            <p class=\"black_settings\">\n              Pick the choice of\n              Color for the watermark\n              text.\n            </p>\n          </div>\n          <div>\n            <span class=\"black_settings top_position\">\n            Choose Color\n            </span>\n            \n            <img src=\"../../../../assets/img1/color.svg\" class=\"pointer\" id=\"clicks\" (click)=\"displayColor()\">\n  <input style=\"visibility: hidden;\" [(ngModel)]=\"settingDetails.watermark_color\" id=\"colorpicker\" name=\"watermark_color\" readonly=\"true\"  type=\"color\"\n />\n\n             <!-- <div class=\"dropdown\">\n  \n              <a class=\"dropbtn\"> <img src=\"../../../../assets/img1/color.svg\" class=\"pointer\"></a> \n              <div class=\"dropdown-content\">\n                <div class=\"white_div\">\n                  <span class=\"default\">HEX</span><span>RGB</span><span>CMYK</span>\n                  <div class=\"div_two\">\n                    <div></div>\n                    <div>#F21884</div>\n                    <div><button class=\"grey_button\">Update</button></div>\n                  </div>\n                  <div class=\"div_3\">\n                    <span class=\"color1\"></span>\n                    <span class=\"color2\"></span>\n                    <span class=\"color3\"></span>\n                    <span class=\"color4\"></span>\n                    <span class=\"color5\"></span>\n                    <span class=\"color6\"></span>\n                    <span class=\"color7\">+</span>\n                  </div>\n                </div>\n  \n              </div>\n            </div> -->\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n         \n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Opacity\n            </p>\n            <p class=\"black_settings\">\n              It is the opacity of the\n              watermark text. It defines\n              how much watermark text\n              will obscure the\n              background image.\n            </p>\n            <div class=\"pl20\">\n              <div class=\"range\">\n                <input type=\"range\" min=\"1\" max=\"6\" steps=\"1\"  value={{progress}}>\n              </div>\n  \n              <ul class=\"range-labels\">\n                <li class=\"active selected\" (click)=\"opacityRange(1)\">\n                  <p class=\"span1\"></p>\n                </li>\n                <li (click)=\"opacityRange(2)\">\n                  <p class=\"span2\"></p>\n                </li>\n                <li>\n                  <p class=\"span3\" (click)=\"opacityRange(3)\"></p>\n                </li>\n                <li>\n                  <p class=\"span4\" (click)=\"opacityRange(4)\"></p>\n                </li>\n                <li>\n                  <p class=\"span5\" (click)=\"opacityRange(5)\"></p>\n                </li>\n                <li>\n                  <p class=\"span6\" (click)=\"opacityRange(6)\"></p>\n                </li>\n  \n              </ul>\n            </div>\n            <br><br>\n          </div>\n          <div>\n  \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Font Size\n            </p>\n            <p class=\"black_settings\">\n              It is the overall\nsize (height) of the\nwatermark text font\nshown on the screen.\n            </p>\n            <div class=\"pl20\">\n  \n  \n  \n              <div class=\"range\">\n                <input type=\"range\" min=\"1\" max=\"6\"  steps=\"1\" value={{fontSize}} >\n              </div>\n  \n              <ul class=\"range-labels\">\n                <li class=\"active selected\"  (click)=\"FontSizeRange(1)\" title=\"Font size is 10px\">\n                  <p class=\"span11\" >aA</p>\n                </li>\n                <li (click)=\"FontSizeRange(2)\" title=\"Font size is 20px\">\n                  <p class=\"span12\">aA</p>\n                </li>\n                <li (click)=\"FontSizeRange(3)\" title=\"Font size is 30px\">\n                  <p class=\"span13\">aA</p>\n                </li>\n                <li (click)=\"FontSizeRange(4)\" title=\"Font size is 40px\">\n                  <p class=\"span14\">aA</p>\n                </li>\n                <li (click)=\"FontSizeRange(5)\" title=\"Font size is 50px\">\n                  <p class=\"span15\">aA</p>\n                </li>\n                <li  (click)=\"FontSizeRange(6)\">\n                  <p class=\"span16\">aA</p>\n                </li>\n  \n              </ul>\n            </div>\n            <br><br>\n          </div>\n          <div>\n  \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Interval\n            </p>\n            <p class=\"black_settings\">\n              Specify the interval over\n              which watermark changes\n              position. The value is the\n              interval in seconds when\n              the text changes position.\n            </p>\n  \n  \n            <div class=\"slider1\">\n              <span class=\"startyear\">1%</span>\n              <div class=\"range1\">\n                <input type=\"range\" name=\"date\" id=\"date1\" [(ngModel)]=\"settingDetails.watermark_text_moving_interval\"  min=\"1\" max=\"100\" step=\"1\"\n                  value=\"Please enter the year of build\" required>\n                <span class=\"setyear\">{{settingDetails.watermark_text_moving_interval}} Sec</span>\n              </div>\n              \n            </div>\n          </div>\n          <div>\n  \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Bandwidth Threshold Alerts\n            </p>\n            <p class=\"black_settings\">\n              Set limits (in percentage)\n              for bandwidth utilization\n              to receive the alerts in\n              SMS & email.\n            </p>\n            <div class=\"slider1\">\n              <span class=\"startyear\">1%</span>\n              <div class=\"range1\">\n                <input type=\"range\" min=\"1\" max=\"100\" [(ngModel)]=\"settingDetails.vdocipher_bandwidth_threshold\"\n                  value=\"Please enter the year of build\" required>\n                <span class=\"setyear\">{{settingDetails.vdocipher_bandwidth_threshold}} %</span>\n              </div>\n              <span class=\"endyear\">100%</span>\n            </div>\n          </div>\n  \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Storage Capacity Threshold Alerts\n            </p>\n            <p class=\"black_settings\">\n              Set limits (in percentage)\n              for storage utilization\n              to receive the alerts in SMS\n              & email.\n            </p>\n            <div class=\"slider1\">\n              <span class=\"startyear\">1%</span>\n              <div class=\"range1\">\n                <input type=\"range\" name=\"vdocipher_storage_capacity_threshold\"  min=\"1\" max=\"100\"\n                [(ngModel)]=\"settingDetails.vdocipher_storage_capacity_threshold\" \n                  value=\"Please enter the year of build\" required>\n                <span class=\"setyear\">{{settingDetails.vdocipher_storage_capacity_threshold}} %</span>\n              </div>\n              <span class=\"endyear\">100%</span>\n            </div>\n          </div>\n  \n  \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section3\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">V</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n              VDOCipher Watch Multiplier Setting\n            </p>\n            <p class=\"bold_settings\">\n              Study Material-VDOCipher Multipler\n            </p>\n            <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n            <input type=\"text\"   name=\"vdocipher_watch_multiplier\" placeholder=\"Study Material-VDOCipher Multipler\" \n            [(ngModel)]=\"contentSetting.vdocipher_watch_multiplier\"  onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" class=\"input\">\n          </div>\n  \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section4\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">V</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n              Vimeo Setting\n            </p>\n            <p class=\"bold_settings\">\n              Enable Vimeo Feature\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n          </div>\n          <div class=\"toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" name=\"enable_vimeo_feature\"  \n                [(ngModel)]=\"contentSetting.enable_vimeo_feature\" >\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n  \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Allotted Vimeo Storage Capacity (in GB)\n            </p>\n            <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n            <input type=\"text\" class=\"input\" name=\"vimeo_allocated_storage\"  \n            [(ngModel)]=\"contentSetting.vimeo_allocated_storage\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" placeholder=\" Vimeo Storage Capacity (in GB)\">\n          </div>\n  \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Vimeo Used Storage (in GB)\n            </p>\n            <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n            <input type=\"text\" class=\"input\" name=\"vimeo_consumed_storage\"  \n            [(ngModel)]=\"contentSetting.vimeo_consumed_storage\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" placeholder=\"Vimeo Used Storage\">\n          </div>\n  \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Vimeo API key\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n            <input type=\"text\" class=\"input\" name=\"vimeo_access_token\"  placeholder=\"\n            Vimeo API key\"\n            [(ngModel)]=\"contentSetting.vimeo_access_token\">\n          </div>\n  \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Vimeo Account Plan\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n            <select class=\"input\" [(ngModel)]=\"vimeo_account_plan\" name=\"vimeo_account_plan\"  \n           >\n              <option value=\"\" selected>Select</option>\n              <option value=\"Basic\">Basic</option>\n              <option value=\"Plus\">Plus</option>\n              <option value=\"Pro\">Pro</option>\n              <option value=\"Business\">Business</option>\n              <option value=\"Premium\">Premium</option>\n            </select>\n          </div>\n  \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section5\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">V</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n              Vimeo Setting (File Mgr/ Study Material)\n            </p>\n            <p class=\"bold_settings\">\n              Video download visibility (File Manager)\n            </p>\n            <div class=\"flex\">\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\"  [(ngModel)]=\"contentSetting.vimeo_video_download_visibility_filemanager.student\"\n                      name=\"filemanager_student\" id=\"filemanager_student\" placeholder=\" Video download visibility\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Student\n                  </p>\n                </div>\n              </div>\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\"  [(ngModel)]=\"contentSetting.vimeo_video_download_visibility_filemanager.teacher\"\n                      name=\"filemanager_teacher\" id=\"filemanager_teacher\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Faculty\n                  </p>\n                </div>\n              </div>\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\"   [(ngModel)]=\"contentSetting.vimeo_video_download_visibility_filemanager.admin\"\n                      name=\"filemanager_admin\" id=\"filemanager_admin\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Admin\n                  </p>\n                </div>\n              </div>\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" [(ngModel)]=\"contentSetting.vimeo_video_download_visibility_filemanager.openApp\"\n                      name=\"filemanager_openApp\" id=\"filemanager_openApp\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Open App\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n  \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Video download visibility (Study Material)\n            </p>\n            <div class=\"flex\">\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" [(ngModel)]=\"contentSetting.vimeo_video_download_visibility_studymaterial.student\"\n                      name=\"study_student\" id=\"study_student\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Student\n                  </p>\n                </div>\n              </div>\n              <!-- <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\"[(ngModel)]=\"contentSetting.vimeo_video_download_visibility_studymaterial.teacher\" \n                      name=\"study_teacehr\" id=\"study_teacehr\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Faculty\n                  </p>\n                </div>\n              </div> -->\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" [(ngModel)]=\"contentSetting.vimeo_video_download_visibility_studymaterial.admin\"\n                      name=\"study_admin\" id=\"study_admin\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Admin\n                  </p>\n                </div>\n              </div>\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\"  [(ngModel)]=\"contentSetting.vimeo_video_download_visibility_studymaterial.openApp\"\n                      name=\"study_openApp\" id=\"study_openApp\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Open App\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n  \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Storage capacity threshold alert\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n            <div class=\"slider1\">\n              <span class=\"startyear\">1%</span>\n              <div class=\"range1\">\n                <input type=\"range\" type=\"range\" min=\"1\" max=\"100\" id=\"storge_thr\"\n                [(ngModel)]=\"contentSetting.vimeo_storage_capacity_threshold\"\n                 >\n                <span class=\"setyear\"> {{contentSetting.vimeo_storage_capacity_threshold}} %</span>\n              </div>\n              <span class=\"endyear\">100%</span>\n            </div>\n          </div>\n  \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section6\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">S</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n              Study Material Setting\n            </p>\n            <p class=\"bold_settings\">\n              Enable to Give Automatic Access of Study Material to Students for Assigned Courses\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" name=\"student_study_material_visibility\"  [(ngModel)]=\"contentSetting.student_study_material_visibility\"\n                id=\"student_study_material_visibility\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n  \n          </div>\n        </div>\n        <!--*ngIf=\"instituteSettingDet.student_study_material_visibility\"-->\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\"  >\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Study material upload notification\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"contentSetting.notification_for_studymaterial_upload\"\n                id=\"notification_for_studymaterial_upload\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n  \n          </div>\n        </div>\n        <!--*ngIf=\"enable_vdoCipher_feature == '1' || enable_vimeo_feature == '1'\"-->\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\"  >\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Allow Students to download Videos within App (Not accessible outside\n              and exipres at course / product end date)\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"showOfflineVideoSetting\" id=\"enable_student_app_offline_video_download\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n  \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" *ngIf=\"show_vdocipher_video_ready_sms_to_admin\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Video Ready Notification (Admin)\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\"  name=\"vdocipher_video_ready_sms_to_admin\" [(ngModel)]=\"contentSetting.vdocipher_video_ready_sms_to_admin\"\n                id=\"vdocipher_video_ready_sms_to_admin\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n  \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n  \n          </div>\n          <div>\n  \n            <p class=\"bold_settings\">\n              Enable Priority wise topic sorting\n            </p>\n            <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </p>\n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\"  [(ngModel)]=\"contentSetting.enable_topic_sorting_priority_based_study_material\"\n                id=\"enable_topic_sorting_priority_based_study_material\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n  \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n       \n        <div class=\"flex1\" id=\"section7\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">S</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n              SMS Notification Setting\n            </p>\n            <p class=\"bold_settings\">\n              File Sharing Notification <img src=\"../../../../assets/img1/chatt.svg\" class=\"size_sm\">\n            </p>\n            <p class=\"black_settings\">\n              File Sharing Notification\n               SMS to Students\n            </p>\n            <div class=\"flex\">\n              <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\"  name=\"checkbx\" \n                      [(ngModel)]=\"contentSetting.student_file_share_notifn.student\"  id=\"filemanager_student\">\n                      <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                          <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path>\n                        </svg>\n                      </span>\n                    </span>\n                  </label>\n                </div>\n                <div>\n                  <p class=\"settings_label\">\n                    Student\n                  </p>\n                </div>\n              </div>\n             \n              \n              \n            </div>\n          </div>\n  \n        </div>\n        <div class=\"sep_line\"></div>\n  \n  \n  \n  \n  \n  \n        <!-- end -->\n      </div>\n    </div>\n    <div class=\"w98\">\n      <div class=\"bottom\">\n        <div class=\"display\">\n          <div>\n  \n          </div>\n          <div>\n            <button class=\"white_button mr10\" (click)=\"cancel()\">Cancel</button>\n            <button class=\"blue_button mr10\" (click)=\"saveContentSettings()\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Modal title</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Modal body text goes here.</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" >Save changes</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/data-setup-home/data-setup-home.component.html":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/data-setup-home/data-setup-home.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupDataSetupHomeDataSetupHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <div class=\"w98 p-15\">\n      <nav aria-label=\"breadcrumb \">\n          <ol class=\"breadcrumb arr-right\">\n              <li class=\"breadcrumb-item \"><a>{{checkClassStatus == 'exam' ? 'Exams' : (type == 'batch' ? 'Batch' : 'Classes')}}</a></li>\n              <li class=\"breadcrumb-item \"><a>Setup</a></li>\n          </ol>\n      </nav>\n      <!-- Nav tabs -->\n      <ul class=\"nav main-shadow\">\n          <!-- <li class=\"nav-item\" *ngIf=\"checkClassStatus == 'class'\">\n              <a class=\"nav-link\" (click)=\"toggle('faculty')\" [ngClass]=\"(activeSession == 'faculty') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/setup/teacher/list\">Faculty</a>\n          </li> -->\n          <li class=\"nav-item\" *ngIf=\"checkClassStatus == 'class'\">\n              <a class=\"nav-link\" (click)=\"toggle('academic')\" [ngClass]=\"(activeSession == 'academic') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/setup/academic\">Academic Year</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"checkClassStatus == 'exam'\">\n            <a class=\"nav-link\" (click)=\"toggle('Exam_Grades')\" [ngClass]=\"(activeSession == 'Exam_Grades') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/exam-setup/manage-exam-grades\">Exam Grades</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"checkClassStatus == 'exam' && schoolModel\">\n            <a class=\"nav-link\" (click)=\"toggle('Exam_type')\" [ngClass]=\"(activeSession == 'Exam_type') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/exam-setup/exam-type\">Exam Type</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"checkClassStatus == 'class'\">\n              <a class=\"nav-link\" (click)=\"toggle('classroom')\" [ngClass]=\"(activeSession == 'classroom') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/setup/classroom\">Classroom</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"checkClassStatus == 'class' && !schoolModel\">\n              <a class=\"nav-link\" (click)=\"toggle('master_tag')\" [ngClass]=\"(activeSession == 'master_tag') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/setup/master-tag\">Manage Tag</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"checkClassStatus == 'exam' && schoolModel\">\n            <a class=\"nav-link\" (click)=\"toggle('mark_distribution')\" [ngClass]=\"(activeSession == 'mark_distribution') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/exam-setup/mark-distribution\">Mark Distribution</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"checkClassStatus == 'exam' && schoolModel\">\n            <a class=\"nav-link\" (click)=\"toggle('mark_setting')\" [ngClass]=\"(activeSession == 'mark_setting') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/exam-setup/mark-setting\">Mark Settings</a>\n          </li>\n         <!--class setting--> \n          <li class=\"nav-item\" *ngIf=\"checkClassStatus == 'class'\">\n            <a class=\"nav-link\" (click)=\"toggle('setting')\" [ngClass]=\"(activeSession == 'setting') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/setup/setting\">Settings</a>\n          </li>\n           <!--Exam setting--> \n          <li class=\"nav-item\" *ngIf=\"checkClassStatus == 'exam'\">\n            <a class=\"nav-link\" (click)=\"toggle('exam-setting')\" [ngClass]=\"(activeSession == 'exam-setting') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/exam-setup/exam-setting\">Settings</a>\n          </li>\n          <!-- <li class=\"nav-item\" *ngIf=\"checkClassStatus != 'exam' && checkClassStatus == 'class'\">\n            <a class=\"nav-link\" (click)=\"toggle('content-setting')\" [ngClass]=\"(activeSession == 'content-setting') ? 'active' : ''\" data-toggle=\"tab\" routerLink=\"/view/course/exam-setup/exam-setting\">Settinghjghs</a>\n          </li> -->\n      </ul>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/data-setup.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/data-setup.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupDataSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-data-setup-home></app-data-setup-home>\n<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/exam-setting/exam-setting.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/exam-setting/exam-setting.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupExamSettingExamSettingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"w981 main_div\">\n      <div>\n        <div class=\"settings\">\n          <span>\n            <img src=\"../../../../assets/images/settings.svg\">\n            <span class=\"position\">Settings</span>\n          </span>\n        </div>\n        <ul class=\"menu\">\n          <li  (click)=\"scrollTo('section1')\" [ngClass]=\"{ 'selected': currentSection === 'section1'}\"><a>Grade</a></li>\n          <li (click)=\"scrollTo('section2')\" [ngClass]=\"{ 'selected': currentSection === 'section2'}\" ><a >Student Rank in Exam SMS</a> </li>\n          <li   *ngIf=\"!schoolModel\" (click)=\"scrollTo('section3')\" [ngClass]=\"{ 'selected': currentSection === 'section3'}\" ><a>Grading System \n            (Instead of Marks)\n              </a></li>\n          <li (click)=\"scrollTo('section4')\" [ngClass]=\"{ 'selected': currentSection === 'section4'}\" *ngIf=\"(isLangInst == false && test_series_feature == '1')\"><a >Online Test Setting</a></li>\n          <li  (click)=\"scrollTo('section5')\" [ngClass]=\"{ 'selected': currentSection === 'section5'}\" *ngIf=\"!schoolModel\" ><a>SMS Notification Setting</a></li>\n       </ul>\n      </div>\n      <div class=\"scrool1\">\n        <div class=\"flex1\" id=\"section1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">G</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n             Grade\n            </p>\n            <p class=\"bold_settings\">\n                Enable Exam Grading System\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n          </div>\n          <div class=\"toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" name=\"is_exam_grad_feature\" id=\"is_exam_grad_feature\" [(ngModel)]=\"examSetting.is_exam_grad_feature\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section2\" *ngIf=\"!schoolModel\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse\">S</span><span class=\"blue_line\"></span>\n            </div>\n            <div>\n              <p class=\"blue_settings\">\n                Student Rank in Exam SMS\n              </p>\n              <p class=\"bold_settings\">\n                Enable to send Student Rank in Eaxm Marks SMS\n              </p>\n              <div *ngIf=\"examSetting.rank_to_send_for_marks_sms==1 && examSetting.rank_to_send_for_marks_sms==true\">\n               <p class=\"black_settings1\">\n                Upto What rank to be sent in SMS?\n               </p>\n               <input type=\"text\" class=\"input\" name=\"rank_no_for_marks_sms\"   [(ngModel)]=\"examSetting.rank_no_for_marks_sms\" placeholder=\"Enter Rank\"> \n            </div>\n              </div>\n            <div class=\"toggle\">\n              <span>\n                <span class=\"off\">OFF</span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\"  [(ngModel)]=\"examSetting.rank_to_send_for_marks_sms\">\n                  <span class=\"slider round\"></span>\n                </label>\n                <span class=\"on\">ON</span>\n              </span>\n              \n            </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" *ngIf=\"!schoolModel\" id=\"section3\">\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse\">G</span><span class=\"blue_line\"></span>\n            </div>\n            <div>\n              <p class=\"blue_settings\">\n                Grading System (Instead of Marks)\n              </p>\n              <div class=\"flex center\">\n                <p class=\"bold_settings\">\n                  Enable Grading System for specific Courses\n                </p>\n                <!-- <div class=\"dropdown1\">\n                  <img src=\"../../../../assets/img1/chatt.svg\" class=\"size_sm\">\n                \n                  <div class=\"dropdown-content1\">\n                    <p>If enabled, you can decide for particular\n                      courses i.e. whether to use grading\n                      or numerical marks. You can not\n                      disable this setting if in use.</p>\n                  </div>\n               </div> -->\n               <p class=\"black_settings\">\n                If enabled, you can decide for particular\n                      courses i.e. whether to use grading\n                      or numerical marks. You can not\n                      disable this setting if in use.\n               </p>\n                </div>\n  \n           \n              \n            </div>\n            <div class=\"toggle\">\n              <span>\n                <span class=\"off\">OFF</span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\"   name=\"is_exam_grad_features\" id=\"is_exam_grad_feature\" [(ngModel)]=\"examSetting.is_exam_grad_feature\">\n                  <span class=\"slider round\"></span>\n                </label>\n                <span class=\"on\">ON</span>\n              </span>\n              \n            </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <!-- //*ngIf=\"(isLangInst == false && test_series_feature == '1')\" -->\n        <div class=\"flex1\" id=\"section4\" *ngIf=\"(isLangInst == false && test_series_feature == '1')\" >\n            <!-- main settings -->\n            <div>\n              <span class=\"ellipse\">O</span><span class=\"blue_line\"></span>\n            </div>\n            <div>\n              <p class=\"blue_settings\">\n                Online Test Setting\n              </p>\n              <p class=\"bold_settings\">\n                Buffered Duration in mins (before exam test Time)\n              </p>\n              \n               <input type=\"text\" class=\"input\"  [(ngModel)]=\"examSetting.test_buffer_duration\" name=\"test_buffer_duration\" placeholder=\"Enter Time Here\"> \n            </div>\n            <div class=\"toggle\">\n              <span>\n                <span class=\"off\">OFF</span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" checked>\n                  <span class=\"slider round\"></span>\n                </label>\n                <span class=\"on\">ON</span>\n              </span>\n              \n            </div>\n        </div>\n        <div class=\"sep_line\" *ngIf=\"(isLangInst == false && test_series_feature == '1')\"></div>\n        <div class=\"flex1\" id=\"section5\" *ngIf=\"!schoolModel\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">S</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n                SMS Notification Setting\n            </p>\n            <p class=\"bold_settings\">\n                Exam Schedule Notification\n            </p>\n            <div class=\"flex\">\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"   id=\"exam_schedule_notification\" [(ngModel)]=\"examSetting.exam_schedule_notification.student\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Student \n                   </p>\n                 </div>\n               </div>\n                <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\" id=\"\" [(ngModel)]=\"examSetting.exam_schedule_notification.parent\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Parent\n                   </p>\n                 </div>\n               </div>\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"examSetting.exam_schedule_notification.gaurdian\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                   Guardian \n                   </p>\n                 </div>\n               </div>\n               <div class=\"flex\">\n                <div>\n                  <label class=\"checkbox\">\n                     <span class=\"checkbox__input\">\n                       <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"examSetting.exam_schedule_notification.teacher\">\n                       <span class=\"checkbox__control\">\n                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                           <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                       </span>\n                     </span>\n                   </label>\n                </div>\n                 <div>\n                  <p class=\"settings_label\">\n                 Faculty\n                  </p>\n                </div>\n              </div>\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"examSetting.exam_schedule_notification.admin\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                  Admin\n                   </p>\n                 </div>\n               </div>\n               \n             </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"sep_line\"></div>\n        <!-- <div class=\"flex1\">\n            \n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                  Exam Schedule Notification\n              </p>\n              <div class=\"flex\">\n                 <div class=\"flex\">\n                   <div>\n                     <label class=\"checkbox\">\n                        <span class=\"checkbox__input\">\n                          <input type=\"checkbox\" name=\"checked\" checked=\"\">\n                          <span class=\"checkbox__control\">\n                           <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                              <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                          </span>\n                        </span>\n                      </label>\n                   </div>\n                    <div>\n                     <p class=\"settings_label\">\n                      Student \n                     </p>\n                   </div>\n                 </div>\n                  <div class=\"flex\">\n                   <div>\n                     <label class=\"checkbox\">\n                        <span class=\"checkbox__input\">\n                          <input type=\"checkbox\" name=\"checked\" checked=\"\">\n                          <span class=\"checkbox__control\">\n                           <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                              <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                          </span>\n                        </span>\n                      </label>\n                   </div>\n                    <div>\n                     <p class=\"settings_label\">\n                      Parent\n                     </p>\n                   </div>\n                 </div>\n                 <div class=\"flex\">\n                   <div>\n                     <label class=\"checkbox\">\n                        <span class=\"checkbox__input\">\n                          <input type=\"checkbox\" name=\"checked\" checked=\"\">\n                          <span class=\"checkbox__control\">\n                           <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                              <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                          </span>\n                        </span>\n                      </label>\n                   </div>\n                    <div>\n                     <p class=\"settings_label\">\n                     Guardian \n                     </p>\n                   </div>\n                 </div>\n               \n                 <div class=\"flex\">\n                   <div>\n                     <label class=\"checkbox\">\n                        <span class=\"checkbox__input\">\n                          <input type=\"checkbox\" name=\"checked\" checked=\"\">\n                          <span class=\"checkbox__control\">\n                           <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                              <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                          </span>\n                        </span>\n                      </label>\n                   </div>\n                    <div>\n                     <p class=\"settings_label\">\n                    Admin\n                     </p>\n                   </div>\n                 </div>\n               </div>\n            </div>\n        </div> -->\n        <!-- <div class=\"sep_line\"></div> -->\n        <div class=\"flex1\" *ngIf=\"!schoolModel\">\n            <!-- main settings -->\n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Exam Attendance Not Marked (Post 2 hours of Exam Completion)\n              </p>\n              <p class=\"black_settings\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n               </p>\n              <div class=\"flex\">\n              \n                 <div class=\"flex\">\n                   <div>\n                     <label class=\"checkbox\">\n                        <span class=\"checkbox__input\">\n                          <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"examSetting.enable_exam_attendance_not_marked_notification.teacher\">\n                          <span class=\"checkbox__control\">\n                           <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                              <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                          </span>\n                        </span>\n                      </label>\n                   </div>\n                    <div>\n                     <p class=\"settings_label\">\n                     Faculty\n                     </p>\n                   </div>\n                 </div>\n                 <div class=\"flex\">\n                   <div>\n                     <label class=\"checkbox\">\n                        <span class=\"checkbox__input\">\n                          <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"examSetting.enable_exam_attendance_not_marked_notification.admin\">\n                          <span class=\"checkbox__control\">\n                           <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                              <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                          </span>\n                        </span>\n                      </label>\n                   </div>\n                    <div>\n                     <p class=\"settings_label\">\n                    Admin\n                     </p>\n                   </div>\n                 </div>\n                 \n                 <div class=\"flex\">\n                    <div>\n                      <label class=\"checkbox\">\n                         <span class=\"checkbox__input\">\n                           <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"examSetting.enable_exam_attendance_not_marked_notification.other\">\n                           <span class=\"checkbox__control\">\n                            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                               <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                           </span>\n                         </span>\n                       </label>\n                    </div>\n                     <div>\n                      <p class=\"settings_label\">\n                       Others\n                      </p>\n                    </div>\n                  </div>\n               </div>\n               <div *ngIf=\"examSetting.enable_exam_attendance_not_marked_notification.other==1 &&examSetting.enable_exam_attendance_not_marked_notification.other==true \">\n               <p class=\"black_settings1\" >\n                Mobile Numbers to Send SMS (Comma Seperated)\n               </p>\n               <input type=\"text\" class=\"input\" name=\"exam_attendance_not_marked_notification_contact_number\" placeholder=\"Enter Numbers\" [(ngModel)]=\"examSetting.exam_attendance_not_marked_notification_contact_number\" >\n              </div>\n            </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" *ngIf=\"!schoolModel\">\n            <!-- main settings -->\n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Exam Marks Not Updated (Within 5 days of Exam Completion)\n              </p>\n              <p class=\"black_settings\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n               </p>\n              <div class=\"flex\">\n              \n                 <div class=\"flex\">\n                   <div>\n                     <label class=\"checkbox\">\n                        <span class=\"checkbox__input\">\n                          <input type=\"checkbox\" name=\"checked\"    [(ngModel)]=\"examSetting.enable_exam_marks_not_update_notification.teacher\">\n                          <span class=\"checkbox__control\">\n                           <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                              <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                          </span>\n                        </span>\n                      </label>\n                   </div>\n                    <div>\n                     <p class=\"settings_label\">\n                     Faculty\n                     </p>\n                   </div>\n                 </div>\n                 <div class=\"flex\">\n                   <div>\n                     <label class=\"checkbox\">\n                        <span class=\"checkbox__input\">\n                          <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"examSetting.enable_exam_marks_not_update_notification.admin\">\n                          <span class=\"checkbox__control\">\n                           <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                              <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                          </span>\n                        </span>\n                      </label>\n                   </div>\n                    <div>\n                     <p class=\"settings_label\">\n                    Admin\n                     </p>\n                   </div>\n                 </div>\n                 \n                 <div class=\"flex\">\n                    <div>\n                      <label class=\"checkbox\">\n                         <span class=\"checkbox__input\">\n                           <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"examSetting.enable_exam_marks_not_update_notification.other\">\n                           <span class=\"checkbox__control\">\n                            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                               <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                           </span>\n                         </span>\n                       </label>\n                    </div>\n                     <div>\n                      <p class=\"settings_label\">\n                       Others\n                      </p>\n                    </div>\n                  </div>\n               </div>\n               <div *ngIf=\"examSetting.enable_exam_marks_not_update_notification.other==1 && examSetting.enable_exam_marks_not_update_notification.other==true \">\n               <p class=\"black_settings1\">\n                Multiple numbers separated by comma’s\n               </p>\n               <input type=\"text\" class=\"input\"  placeholder=\"Enter No.\" [(ngModel)]=\"examSetting.exam_marks_not_update_notification_contact_number\"\n               >\n              </div>\n            </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" *ngIf=\"!schoolModel\">\n            <!-- main settings -->\n            <div>\n             \n            </div>\n            <div>\n             \n              <p class=\"bold_settings\">\n                Exam Attendance Not Marked (Daily Reminder Until Marked)\n              </p>\n             \n              <div class=\"flex\">\n              \n                 <div class=\"flex\">\n                   <div>\n                     <label class=\"checkbox\">\n                        <span class=\"checkbox__input\">\n                          <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"examSetting.enable_exam_attendance_not_marked_daily_notification.teacher\">\n                          <span class=\"checkbox__control\">\n                           <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                              <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                          </span>\n                        </span>\n                      </label>\n                   </div>\n                    <div>\n                     <p class=\"settings_label\">\n                     Faculty\n                     </p>\n                   </div>\n                 </div>\n                 <div class=\"flex\">\n                   <div>\n                     <label class=\"checkbox\">\n                        <span class=\"checkbox__input\">\n                          <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"examSetting.enable_exam_attendance_not_marked_daily_notification.admin\">\n                          <span class=\"checkbox__control\">\n                           <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                              <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                          </span>\n                        </span>\n                      </label>\n                   </div>\n                    <div>\n                     <p class=\"settings_label\">\n                    Admin\n                     </p>\n                   </div>\n                 </div>\n                 \n                 <div class=\"flex\">\n                    <div>\n                      <label class=\"checkbox\">\n                         <span class=\"checkbox__input\">\n                           <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"examSetting.enable_exam_attendance_not_marked_daily_notification.other\">\n                           <span class=\"checkbox__control\">\n                            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                               <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                           </span>\n                         </span>\n                       </label>\n                    </div>\n                     <div>\n                      <p class=\"settings_label\">\n                       Others\n                      </p>\n                    </div>\n                  </div>\n               </div>\n               <div *ngIf=\"examSetting.enable_exam_attendance_not_marked_daily_notification.other==1 && examSetting.enable_exam_attendance_not_marked_daily_notification.other==true \">\n                <p class=\"black_settings1\">\n                 Multiple numbers separated by comma’s\n                </p>\n                <input type=\"text\" class=\"input\"  placeholder=\"Enter No.\"  [(ngModel)]=\"examSetting.exam_attendance_not_marked_daily_notification_contact_number\"\n                >\n               </div>\n            </div>\n        </div>\n        <div class=\"sep_line\"></div>\n     \n\n\n        <!-- end -->\n      </div>\n    </div>\n    <div class=\"w98\">\n       <div class=\"bottom\">\n          <div class=\"display\">\n            <div>\n              \n            </div>\n            <div>\n              <button class=\"white_button mr10\" (click)=\"cancel()\">Cancel</button>\n              <button class=\"blue_button mr10\" (click)=\"saveExamSettings()\">Save</button>\n            </div>\n          </div>\n        </div>\n    </div>\n </div>  \n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/manage-exam-grades/manage-exam-grades.component.html":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/manage-exam-grades/manage-exam-grades.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupManageExamGradesManageExamGradesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"clear-fix pageMargin\">\n  <aside class=\"middle-full \">\n    <section class=\"middle-main clearFix \">\n      <section class=\"filter-form attendance-container\">\n        <div class=\"row\" *ngIf=\"isSchoolModel\">\n          <div class=\"form-inline\">\n          <div class=\"c-lg-2 c-md-2 c-sm-2\">\n              <input type=\"text\" class=\"form-control input mr-10\" placeholder=\"Grade Name*\" name=\"grade\" id=\"grade\"\n              [(ngModel)]=\"addData.grade\" style=\"border-radius: 4px;\">\n          </div>\n          <div class=\"c-lg-2 c-md-2 c-sm-2\">\n              <input type=\"text\" placeholder=\"Marks From*\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" class=\"form-control input mr-10\" name=\"marks_from\" id=\"marks_from\"\n                [(ngModel)]=\"addData.marks_from\">\n\n          </div>\n          <div class=\"c-lg-2 c-md-2 c-sm-2\">\n              <input type=\"text\" placeholder=\"Marks To*\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" class=\"form-control input mr-10\" name=\"marks_to\" id=\"marks_to\" [(ngModel)]=\"addData.marks_to\">\n\n          </div>\n\n          <div class=\"c-lg-2 c-md-2 c-sm-2\">\n              <input type=\"text\" placeholder=\"Grade Points*\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" class=\"form-control input mr-10\" name=\"grade_points\" id=\"grade_points\"\n                [(ngModel)]=\"addData.grade_points\">\n\n          </div>\n          <div class=\"c-lg-2 c-md-2 c-sm-2\">\n            <input type=\"text\" class=\"form-control input mr-10\" placeholder=\"Description\" name=\"Description\" id=\"Description\" [(ngModel)]=\"addData.description\">\n        </div>\n\n        </div>\n                <button class=\"add\" style=\"margin-top: 9px;margin-left: 10px;\" (click)=\"addDataToTable()\">Add</button>\n        </div>\n        <div *ngIf=\"!isSchoolModel\">\n          <div class=\"row\">\n            <div class=\"c-lg-2 c-md-2 c-sm-2 \">\n                <input type=\"text\" placeholder=\"Grade Name*\" class=\"form-control input mr-10\" name=\"grade\" id=\"grade\" [(ngModel)]=\"addData.grade\">\n            </div>\n            <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                <input type=\"text\" placeholder=\"Description\" class=\"form-control input mr-10\" name=\"Description\" id=\"Description\"\n                  [(ngModel)]=\"addData.description\" style=\"border-radius: 4px;\">\n            </div>\n            <div class=\"c-lg-2 c-md-2 c-sm-2\">\n              <div class=\"pull-left create-cancel-small\">\n                <aside class=\"pull-left create-cancel-small\">\n                  <button class=\"btn fullBlue\" style=\"margin-top:26px;\" (click)=\"addDataToTable()\">Add</button>\n                </aside>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"table table-responsive\">\n          <table class=\"tableBodyScroll\">\n            <thead>\n              <tr>\n                <th>\n                  Id\n                </th>\n                <th>\n                  Grade\n                </th>\n                <!-- <th *ngIf=\"isSchoolModel\">\n                  Exam Type\n                </th> -->\n                <th *ngIf=\"isSchoolModel\">\n                  Marks From\n                </th>\n                <th *ngIf=\"isSchoolModel\">\n                  Marks To\n                </th>\n                <th *ngIf=\"isSchoolModel\">\n                  Grade Points\n                </th>\n                <th>\n                  Description\n                </th>\n                <th>\n                  Created Date\n                </th>\n                <th>\n                  <span class=\"right pr-40\">\n                  Action\n                </span>\n                </th>\n                <!-- <th>\n                  Delete\n                </th> -->\n              </tr>\n            </thead>\n            <tbody style=\"min-height: 52vh;max-height: 52vh;\">\n              <tr style=\"box-shadow: -1px 1px 6px 0px rgb(0 0 0 / 10%);\" *ngFor=\"let row of gotGrades; let i = index; trackBy: i;\" class=\"displayComp\" id=\"row{{i}}\">\n                <td>\n                  {{i + 1}}\n                </td>\n\n                <td class=\"view-comp\">\n                  {{row.grade}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" name=\"label\" [(ngModel)]=\"row.grade\"\n                      [value]=\"row.grade_id\">\n                  </div>\n                </td>\n                <!-- <td class=\"view-comp\" *ngIf=\"isSchoolModel\">\n                  {{row.exam_type}}\n                </td>\n                <td class=\"edit-comp\" *ngIf=\"isSchoolModel\">\n                  <div class=\"dropdown-div\">\n                    <select class=\"dropdown\" [(ngModel)]=\"selectedExamTypeId\">\n                      <option value=\"-1\">Select Exam Type</option>\n                      <option *ngFor=\"let list of examTypeList; let i = index\" [value]=\"list.exam_type_id\"\n                        (ngModelChange)=\"selectedExamType(selectedExamTypeId)\">{{ list.exam_type }}</option>\n                    </select>\n                  </div>\n                </td> -->\n                <td class=\"view-comp\" *ngIf=\"isSchoolModel\">\n                  {{row.marks_from_percent}}\n                </td>\n                <td class=\"edit-comp\" *ngIf=\"isSchoolModel\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" name=\"label\" [(ngModel)]=\"row.marks_from_percent\"\n                      [value]=\"row.marks_from_percent\">\n                  </div>\n                </td>\n\n                <td class=\"view-comp\" *ngIf=\"isSchoolModel\">\n                  {{row.marks_to_percent}}\n                </td>\n                <td class=\"edit-comp\" *ngIf=\"isSchoolModel\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" name=\"label\" [(ngModel)]=\"row.marks_to_percent\"\n                      [value]=\"row.marks_to_percent\">\n                  </div>\n                </td>\n\n                <td class=\"view-comp\" *ngIf=\"isSchoolModel\">\n                  {{row.grade_points}}\n                </td>\n                <td class=\"edit-comp\" *ngIf=\"isSchoolModel\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" name=\"label\" [(ngModel)]=\"row.grade_points\"\n                      [value]=\"row.grade_points\">\n                  </div>\n                </td>\n                <td class=\"view-comp\">\n                  {{row.description}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" name=\"label\" [(ngModel)]=\"row.description\">\n                  </div>\n                </td>\n                <td disabled>\n                  {{row.created_date | date:'dd-MMM-yyyy'}}\n                </td>\n\n                <td class=\"view-comp\">\n                  <span class=\"right pr-40\" style=\"padding-right: 20px;\">\n                    <a (click)=\"editRowTable(row, i)\" data-toggle=\"modal\" data-target=\"#editCityArea\"\n                        style=\"vertical-align: middle;cursor: pointer;\">\n                        <img src=\"../../../../assets/images/EDit.png\">\n                    </a>\n                    <a aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteModal\"\n                        (click)=\"deletingGrade(row , index)\" style=\"cursor: pointer;\" class=\"pl-10\">\n                        <i style=\"color: red;font-size: 18px;font-weight: 400;\"\n                            class=\"fa fa-trash\"></i>\n                    </a>\n                </span>\n                  <!-- <a class=\"anchorTagCursor\" (click)=\"editRowTable(row, i)\">Edit</a> -->\n                </td>\n                <td class=\"edit-comp\">\n                  <span class=\"right pr-40\" style=\"padding-right: 20px;\">\n                  <i class=\"fa fa-floppy-o\" title=\"Save\" style=\"color: blue;margin-right: 10px;font-size: 18px;\" aria-hidden=\"true\"\n                    (click)=\"saveInformation(row, i)\"></i>\n                  <i class=\"fa fa-times\" title=\"Cancel\" style=\"color: red;font-size: 18px;\" aria-hidden=\"true\"\n                    (click)=\"cancelEditRow(i)\"></i>\n                  </span>\n                  <!-- <a class=\"anchorTagCursor\" (click)=\"saveInformation(row, i)\"> Save </a>\n                  <a class=\"anchorTagCursor anchorTag\" (click)=\"cancelEditRow(i)\"> Cancel </a> -->\n                </td>\n                <!-- <td> -->\n                <!-- <i class=\"fa fa-trash\" title=\"Delete\" style=\"color: red;\" aria-hidden=\"true\"\n                    (click)=\"deletingGrade(row , index)\"></i> -->\n                <!-- <a class=\"anchorTagCursor\" (click)=\"deletingGrade(row , index)\"> Delete </a> -->\n                <!-- </td> -->\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </section>\n\n    </section>\n  </aside>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/mark-distribution/mark-distribution.component.html":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/mark-distribution/mark-distribution.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupMarkDistributionMarkDistributionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"sms-table-wrapper\">\n\n    <div class=\"filter-item-2\">\n        <button type=\"button\" name=\"button\" class=\"add-class-btn\" data-target=\"#addExamType\" data-toggle=\"modal\"\n            (click)=\"isDistributionUpdate = false;\" style=\"margin-right: 15px;\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n            &nbsp;\n            Add Mark Distribution\n        </button>\n    </div>\n    <app-basic-table [headers]=\"headerSetting\" [displayData]=\"staticPageData\" [tableSetting]=\"tableSetting\"\n        [rowColumnSetting]=\"rowColumns\" (editView)='editRow($event)' (deleteView)='deleteRow($event)'>\n    </app-basic-table>\n    <div style=\"padding-top: 9px;\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n            [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n            [count]=\"totalRecords\" (sizeChange)=\"updateTableBatchSize($event)\">\n        </pagination>\n    </div>\n\n\n</section>\n<div class=\"modal fade\" id=\"addExamType\" role=\"dialog\" tabindex=\"-1\" style=\"margin-top: 3%;\" role=\"dialog\"\n    aria-hidden=\"true\" data-backdrop=\"static\">\n    <div class=\"modal-dialog\" style=\"width: 30%;margin-top: 8%;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" style=\"border-bottom: none;padding-bottom: 0;\">\n                <button type=\"button\" class=\"close\" (click)=\"clearModalData()\" data-dismiss=\"modal\">&times;</button>\n                <h3 class=\"modal-title\" style=\"margin-bottom: 0;\">{{isDistributionUpdate ? 'Edit Mark Distribution' :\n                    'Add Mark Distribution'}}</h3>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"field-wrapper\">\n                    <input class=\"reason-input\" type=\"text\" [(ngModel)]=\"addDistributionModel.marks_distribution_name\"\n                        placeholder=\"Mark Distribution Type*\" />\n                </div>\n                <div class=\"field-wrapper\">\n                    <input class=\"reason-input\" type=\"text\" [(ngModel)]=\"addDistributionModel.marks_value_percent\"\n                        onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" placeholder=\"Mark Value*\" />\n                </div>\n                <div class=\"modal-footer\">\n                    <div>\n                        <button type=\"button\" style=\"float: right;\" class=\"btn btn-primary create-btn\"\n                            (click)=\"addUpdateDistribution()\">Save</button>\n                    </div>\n                    <div *ngIf=\"!isDistributionUpdate\" style=\"margin-top: 10px;\">\n                        <span style=\"font-weight: 600;\">Note: </span>\n                        <span style=\"color: #4C6380;\"> After Adding a mark percentage select this\n                            percentage in general setting to activate this new percentage on marking.\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/mark-setting/mark-setting.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/mark-setting/mark-setting.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupMarkSettingMarkSettingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"w98\">\n  <div class=\"row\" style=\"margin:0em\">\n    <div class=\"filter-item field-wrapper\" style=\"margin-left: 0px;\">\n      <select class=\"form-ctrl input-select\" name=\"\" [(ngModel)]=\"model.mark_type\"\n        (ngModelChange)=\"changeMarkType('onChange', $event)\">\n        <option value=\"-1\">Select Mark Type</option>\n        <option title=\"{{marks.data_key}}\" [value]=\"marks.data_value\" *ngFor=\"let marks of markTypeData\">\n          {{ (marks.data_key?.length > 30) ? (marks.data_key | slice:0:30) + '...' : marks.data_key }}\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"examTypeHeader\" *ngIf=\"model.mark_type == '0' || model.mark_type == '1'\">\n    Exam\n  </div>\n  <div class=\"role-container\" *ngIf=\"model.mark_type == '0' || model.mark_type == '1'\">\n    <div class=\"role-list-container\">\n      <div *ngFor=\"let data of examTypeData;let i=index\" class=\"role-data-container\">\n        <div class=\"field-checkbox-wrapper\">\n          <input type=\"checkbox\" [(ngModel)]=\"data.isChecked\" [checked]=\"data.isChecked\" class=\"form-checkbox\"\n            [id]=\"'checkbox-'+i\">\n          <label [for]=\"'checkbox-'+i\">{{data.exam_type}}</label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"examTypeHeader\">\n    <span *ngIf=\"model.mark_type == '0'\">Mark Percentage</span>\n    <span *ngIf=\"model.mark_type == '1'\">Class Wise</span>\n  </div>\n  <div class=\"role-container\" *ngIf=\"model.mark_type == 0\">\n    <div class=\"role-list-container\">\n      <div *ngFor=\"let markType of markDistributionData;let j=index\" class=\"role-data-container\">\n        <div class=\"field-checkbox-wrapper\">\n          <input type=\"checkbox\" [(ngModel)]=\"markType.isChecked\" (change)=\"checkMarkTotal(markType)\"\n            [checked]=\"markType.isChecked\" class=\"form-checkbox\" [id]=\"'checkbox1-'+j\">\n          <label [for]=\"'checkbox1-'+j\">{{markType.marks_distribution_name}} ({{markType.marks_value_percent}})</label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"max-height: 50vh;overflow-y: auto;\" *ngIf=\"model.mark_type == 1\">\n    <div *ngFor=\"let standard of standardData;let k=index\">\n      <div class=\"role-list-container borderDiv\" style=\"padding-left: 0;\">\n        <div style=\"height: 32px;\">\n          <span class=\"standardContainer\"> {{standard.standard_name}}</span>\n        </div>\n        <div class=\"row\" style=\"margin: 0;padding-left: 20px;\">\n          <div *ngFor=\"let markType of standard[standard.standard_name];let j=index\" class=\"role-data-container\">\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" [(ngModel)]=\"markType.isChecked\" (change)=\"classWiseMarkTotal(standard, markType)\"\n                [checked]=\"markType.isChecked\" class=\"form-checkbox\" [id]=\"'checkbox'+j +k\">\n              <label [for]=\"'checkbox'+j +k\">{{markType.marks_distribution_name}}\n                ({{markType.marks_value_percent}})</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"max-height: 50vh;overflow-y: auto;\" *ngIf=\"model.mark_type == 2 || model.mark_type == 3\">\n    <div *ngFor=\"let exam of examTypeData;let k=index\">\n      <div class=\"role-list-container borderDiv\" style=\"padding-left: 0;\">\n        <div style=\"height: 32px;\">\n          <span class=\"standardContainer\"> {{exam.exam_type}}</span>\n        </div>\n        <div class=\"row\" style=\"margin: 0;padding-left: 20px;\">\n          <div *ngFor=\"let markType of exam[exam.exam_type];let j=index\" class=\"role-data-container\">\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" [(ngModel)]=\"markType.isChecked\" (change)=\"examWiseMarkTotal(exam, markType)\"\n                [checked]=\"markType.isChecked\" class=\"form-checkbox\" [id]=\"'checkbox'+j +k\">\n              <label [for]=\"'checkbox'+j +k\">{{markType.marks_distribution_name}}\n                ({{markType.marks_value_percent}})</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"model.mark_type == 4\">\n    <div *ngFor=\"let standard of standardData;let k=index\">\n      <div class=\"examTypeHeader\">\n        <span>{{standard.standard_name}}</span>\n      </div>\n      <div style=\"max-height: 50vh;overflow-y: auto;\">\n        <div *ngFor=\"let subject of standard.subject_list;let j=index\">\n          <div class=\"role-list-container borderDiv\" style=\"box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\">\n            <div style=\"height: 32px;\">\n              <span>\n                <span style=\"color: #109CF1;margin: 10px;font-weight: 600;\"><i _ngcontent-bkv-c164=\"\"\n                    style=\"color: black;\" aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                  {{subject.subject_name}}</span>\n              </span>\n            </div>\n            <div class=\"row\" style=\"margin: 0;padding-left: 20px;\">\n              <div *ngFor=\"let markType of subject[subject.subject_name];let l=index\" class=\"role-data-container\">\n                <div class=\"field-checkbox-wrapper\">\n                  <input type=\"checkbox\" [(ngModel)]=\"markType.isChecked\"\n                    (change)=\"subjectWiseMarkTotal(subject, markType)\" [checked]=\"markType.isChecked\"\n                    class=\"form-checkbox\" [id]=\"'checkbox'+k +j +l\">\n                  <label [for]=\"'checkbox'+k +j +l\">{{markType.marks_distribution_name}}\n                    ({{markType.marks_value_percent}})</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"model.mark_type == 5\">\n    <div *ngFor=\"let standard of standardData;let a=index\">\n      <div class=\"examTypeHeader\">\n        <span>{{standard.standard_name}}</span>\n      </div>\n      <div style=\"max-height: 50vh;overflow-y: auto;\">\n        <div *ngFor=\"let exam of standard[standard.standard_name];let b=index\">\n          <div class=\"role-list-container borderDiv\">\n            <div style=\"height: 32px;\">\n              <span class=\"standardContainer\"> {{exam.exam_type}}</span>\n            </div>\n            <div class=\"row\" style=\"margin: 0;padding-left: 20px;\">\n              <div *ngFor=\"let markType of exam[exam.exam_type];let c=index\" class=\"role-data-container\">\n                <div class=\"field-checkbox-wrapper\">\n                  <input type=\"checkbox\" [(ngModel)]=\"markType.isChecked\"\n                    (change)=\"classExamWiseMarkTotal(standard, exam, markType)\" [checked]=\"markType.isChecked\"\n                    class=\"form-checkbox\" [id]=\"'checkbox'+a +b +c +standard.standard_name\">\n                  <label [for]=\"'checkbox'+a +b +c+standard.standard_name\">{{markType.marks_distribution_name}}\n                    ({{markType.marks_value_percent}})</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"model.mark_type == 6\">\n    <div *ngFor=\"let standard of standardData;let a=index\">\n      <div class=\"examTypeHeader\">\n        <span>{{standard.standard_name}}</span>\n      </div>\n      <div class=\"role-list-container borderDiv\">\n        <div *ngFor=\"let exam of standard[standard.standard_name];let b=index\">\n          <div>\n            <div style=\"height: 32px;\">\n              <span class=\"standardContainer\"> {{exam.exam_type}}</span>\n            </div>\n            <div *ngFor=\"let sub of exam[exam.exam_type];let d=index\" style=\"box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);margin-top: 10px;margin-bottom: 10px;\">\n              <div style=\"width: 100%;\">\n                <div style=\"width: 100%;\">\n                  <span style=\"color: #109CF1;margin: 10px;font-weight: 600;\"><i _ngcontent-bkv-c164=\"\"\n                      style=\"color: black;\" aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                    {{sub.subject_name}}</span>\n                </div>\n                <div class=\"row\" style=\"margin: 0;padding-left: 20px;\">\n                  <div *ngFor=\"let markType of sub[sub.subject_name];let c=index\" class=\"role-data-container\">\n                    <div class=\"field-checkbox-wrapper\">\n                      <input type=\"checkbox\" [(ngModel)]=\"markType.isChecked\"\n                        (change)=\"classExamSubjectWiseTotal(standard, exam, sub, markType)\"\n                        [checked]=\"markType.isChecked\" class=\"form-checkbox\"\n                        [id]=\"'checkbox'+a +b +c +d +standard.standard_name\">\n                      <label [for]=\"'checkbox'+a +b +c +d +standard.standard_name\">{{markType.marks_distribution_name}}\n                        ({{markType.marks_value_percent}})</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"btn-section pull-right\">\n    <button class=\"btn fullBlue\" (click)=\"updateMarkType()\">Update Mark Setting</button>\n  </div>\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/master-tag/master-tag.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/master-tag/master-tag.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupMasterTagMasterTagComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"master-wrapper clearFix\">\n  <div id=\"Manage_Tag\" class=\"tab-pane\">\n    <div class=\"w96\">\n  <div>\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-12\">\n            <div class=\"row\">\n                <div class=\"col-lg-7 col-12\">\n\n                </div>\n                <div class=\"col-lg-5 col-12\">\n                    <span class=\"right\">\n                        <input type=\"text\"  [(ngModel)]=\"searchTag\" (keyup)=\"filterTag()\" placeholder=\"Search\" class=\"input magnifying-glass\">\n                        <button data-target=\"#addTag\" data-toggle=\"modal\"  class=\"search\">Add Tag</button>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n  <div class=\"table-container tag-detail-container\" *ngIf=\"tagDetailsData.length\">\n    <table style=\"margin-top: 0;\">\n      <thead class=\"table-header\">\n        <tr style=\"box-shadow: -1px 1px 6px 0px rgb(0 0 0 / 10%);\">\n          <th style=\"width: 10%;\" class=\"b-grey line-0\">Tag Id </th>\n          <th style=\"width: 20%;\" class=\"text-left b-grey line-0\">Tag Name</th>\n          <th style=\"width: 40%;\" class=\"text-left b-grey line-0\">Description</th>\n          <th class=\"b-grey line-0\">Active</th>\n          <th class=\"b-grey text-left line-0\">\n            <span class=\"right pr-40\" style=\"padding-right: 30px;\">Action</span></th>\n        </tr>\n      </thead> \n      <tbody style=\"min-height: 55vh;max-height: 55vh;\">\n      <tr style=\"box-shadow: -1px 1px 6px 0px rgb(0 0 0 / 10%);\" *ngFor=\"let list of tagDetailsData\">\n        <td style=\"width: 10%;\" class=\"tbl-row\">{{list.tagId}}</td>\n        <td style=\"width: 20%;\" class=\"text-left tbl-row\" title=\"{{list.tagName}}\" >{{(list.tagName.length > 35) ? (list.tagName | slice:0:35) + '...': (list.tagName) }}</td>\n        <td style=\"width: 40%;\" class=\"text-left tbl-row\" title=\"{{list.description}}\" *ngIf=\"list.description != null && list.description != ''\">{{(list.description.length > 35) ? (list.description | slice:0:35) +'...' :(list.description)  }}</td>\n        <td style=\"width: 40%;\" class=\"text-left tbl-row\" *ngIf=\"list.description == null || list.description == ''\">-</td>\n        <td class=\"tbl-row\">\n          <span [ngClass]=\"(list.is_active == 'Y') ? 'yes' : 'no'\">{{list.is_active}}</span>\n        </td>\n        \n        <td class=\"tbl-row text-left p-0\">\n          <span class=\"right pr-40\">\n            <a (click)=\"openEditModal(list)\"\n                style=\"vertical-align: middle;cursor: pointer;\">\n                <img src=\"../../../../assets/images/EDit.png\">\n            </a>\n          </span>\n         <!--  <span class=\"p-0-5\" title=\"Delete Tag\"  (click)=\"openDeleteModal(list.tagId)\">\n            <i class=\"fa fa-trash-o delete-color\"></i>\n          </span> -->\n        </td>\n      </tr>\n    </tbody>\n    </table>   \n  </div>\n  </div>\n  </div>\n\n <!--  <div *ngIf=\"isSearchItemExist\" class=\"noSearchItem\">\n      No tags found\n  </div> -->\n</div>\n<!--add tag master modal-->\n<div class=\"modal fade\" style=\"top: 10%;\" id=\"addTag\" role=\"dialog\"  tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title\">Create Master Tag</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"field-wrapper\">\n           <label>Tag Name<span class=\"text-danger\">*</span></label>\n           <div class=\"dropdown-div pt-2\">\n             <input class=\"dropdown\" type=\"text\" [(ngModel)]=\"tagName\" placeholder=\" Enter Tag Name\" />\n           </div>\n        </div>\n        <div class=\"field-wrapper\">\n          <label>Description</label>\n          <div class=\"dropdown-div pt-2\">\n            <input class=\"dropdown\" type=\"text\" [(ngModel)]=\"tagDescription\" placeholder=\" Enter Description\" />\n          </div>\n       </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary create-btn\" (click)=\"createMasterTag()\">Create</button>\n      </div>\n    </div>\n    \n  </div>\n</div>\n\n<!--delete confirmation-->\n<div class=\"modal topic-add-model\" style=\"position: fixed; top: 10em;left:20%\" id=\"deleteTag\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"padding: 1em;width:60%\">\n      <div class=\"modal-body\">\n        <div class=\"model_body_div\">\n            Are you sure, you want to delete this tag?\n         </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" style=\"color: indianred;\" [disabled]=\"disableDelete\"  (click)=\"deleteMasterTag()\">Delete </button>\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--update master tag-->\n<div class=\"modal fade\" style=\"top: 10%;\" id=\"updateTag\" role=\"dialog\"  tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title\">Update Tag</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"field-wrapper\">\n          <label>Tag Name<span class=\"text-danger\">*</span></label>\n          <div class=\"dropdown-div pt-2\">\n            <input class=\"dropdown\" type=\"text\" [(ngModel)]=\"editTagName\" />\n          </div>\n        </div>\n        <div class=\"field-wrapper\">\n          <label>Description</label>\n          <div class=\"dropdown-div pt-2\">\n            <input class=\"dropdown\" type=\"text\" [(ngModel)]=\"editTagDescription\" />\n          </div>\n       </div>\n       <div class=\"field-wrapper\">\n         <label>Status</label>\n         <div class=\"dropdown-div\">\n            <select  class=\"dropdown\" [(ngModel)]=\"editTagStatus\">\n              <option value=\"Y\">Y</option>\n              <option value=\"N\">N</option>\n            </select>\n        </div>\n       </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary create-btn\" (click)=\"updateMasterTag()\">Update</button>\n      </div>\n    </div>\n    \n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/school-exam-type/school-exam-type.component.html":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/school-exam-type/school-exam-type.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleDataSetupSchoolExamTypeSchoolExamTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"master-wrapper clearFix\">\n  <section class=\"header-section\">\n    <div class=\"header-full\">\n      <button class=\"btn fullBlue pull-right\" (click)=\"isExamTypeUpdate = false;\" style=\"margin-bottom: 10px;\" data-target=\"#addExamType\"\n        data-toggle=\"modal\">\n        + Add Exam Type\n      </button>\n    </div>\n  </section>\n  <app-basic-table [headers]=\"headerSetting\" [displayData]=\"staticPageData\" [tableSetting]=\"tableSetting\"\n    [rowColumnSetting]=\"rowColumns\" (editView)='openEditExamTypeModal($event)' (deleteView)='deleteExamType($event)'>\n  </app-basic-table>\n</div>\n<!--add exam Type-->\n<div class=\"modal fade\" id=\"addExamType\" data-backdrop=\"static\" role=\"dialog\" tabindex=\"-1\" style=\"margin-top: 3%;\" role=\"dialog\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"clearData()\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title\" style=\"margin-bottom: 0;\">{{isExamTypeUpdate ? 'Update Exam Type' : 'Create Exam Type'}}\n        </h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"field-wrapper\">\n          <label>Exam Type<span class=\"text-danger\">*</span></label>\n          <div class=\"dropdown-div pt-2\">\n            <input class=\"dropdown\" type=\"text\" [(ngModel)]=\"addExamType.exam_type\" placeholder=\" Enter Exam Type\" />\n          </div>\n        </div>\n        <div class=\"field-wrapper\">\n          <label>Description</label>\n          <div class=\"dropdown-div pt-2\">\n            <input class=\"dropdown\" type=\"text\" [(ngModel)]=\"addExamType.description\"\n              placeholder=\" Enter Description\" />\n          </div>\n        </div>\n        <div class=\"field-wrapper datePickerBox\" style=\"width: 50%;\">\n          <label>Date<span class=\"text-danger\">*</span></label>\n          <div class=\"dropdown-div pt-2\">\n            <input type=\"text\" class=\"form-ctrl dropdown\" style=\"width: 100%;\" readonly=\"true\" name=\"startDate\"\n              id=\"startDate\" [(ngModel)]=\"addExamType.date\" bsDatepicker />\n          </div>\n        </div>\n        <!-- <div class=\"field-wrapper\">\n          <label>Status</label>\n          <div class=\"dropdown-div\">\n            <select class=\"dropdown\" [(ngModel)]=\"addExamType.is_active\">\n              <option value=\"Y\">Y</option>\n              <option value=\"N\">N</option>\n            </select>\n          </div>\n        </div> -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"clearData()\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary create-btn\"\n            (click)=\"addUpdateExamType()\">{{isExamTypeUpdate?'Update':'Create'}}</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <!--update exam type-->\n  <div class=\"modal fade\" id=\"updateExamTypeModel\" role=\"dialog\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Exam Type</h3>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"field-wrapper\">\n            <label>Exam Type</label>\n            <div class=\"dropdown-div pt-2\">\n              <input class=\"dropdown\" type=\"text\" [(ngModel)]=\"addExamType.exam_type\" />\n            </div>\n          </div>\n          <div class=\"field-wrapper\">\n            <label>Description</label>\n            <div class=\"dropdown-div pt-2\">\n              <input class=\"dropdown\" type=\"text\" [(ngModel)]=\"addExamType.description\" />\n            </div>\n          </div>\n          <div class=\"field-wrapper\">\n            <label>Status</label>\n            <div class=\"dropdown-div\">\n              <select class=\"dropdown\" [(ngModel)]=\"addExamType.is_active\">\n                <option value=\"Y\">Y</option>\n                <option value=\"N\">N</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary create-btn\" (click)=\"updateExamType()\">Update</button>\n        </div>\n      </div>\n\n    </div>\n  </div>";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/class-room/class-room.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/class-room/class-room.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleDataSetupClassRoomClassRoomComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #334D6E;\n}\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n.breadcrumb-item > a {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n}\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 3.5rem;\n  margin-left: 0rem;\n}\n.flex {\n  display: flex;\n}\n.w15 {\n  width: 15%;\n  background-color: #dfe5f0;\n  padding: 10px;\n}\n.list li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n.list li a span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334d6e;\n}\n.list li img {\n  padding: 0px 10px;\n}\n.add_master_tag {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 10px;\n  font-weight: 600;\n}\nselect {\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 500;\n  background-color: #f5f6f8;\n}\n.input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  /*background-color: #f5f6f8;\n*/\n}\n.magnifying-glass {\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 5px;\n}\n.header-input {\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 600;\n  width: 700px;\n  color: #61758e;\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  /*background-color: #f5f6f8;*/\n}\n.header-input::-moz-placeholder {\n  padding-left: 10px;\n}\n.header-input:-ms-input-placeholder {\n  padding-left: 10px;\n}\n.header-input::placeholder {\n  padding-left: 10px;\n}\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 15px;\n}\n.p-15 {\n  padding-bottom: 15px;\n}\nselect {\n  width: 250px;\n  color: #b6b8bb;\n}\ntable {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 15px;\n}\nthead {\n  background-color: #DFE5F0;\n  font-weight: 600;\n}\nthead td {\n  background: #DFE5F0;\n}\ntd {\n  padding: 10px 15px;\n  color: #323C47;\n  font-size: 12px;\n}\ntbody {\n  font-weight: 500;\n}\ntr {\n  box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n}\n.section::before {\n  height: 0.4em;\n  display: table-row;\n  content: '';\n}\n.w96 {\n  width: calc(100% - 1rem);\n}\n.p-10 {\n  padding-top: 10px;\n}\n.p-30 {\n  padding-top: 30px;\n}\n.p-10-0 {\n  padding: 9px 0px;\n}\n.yes {\n  background-color: #CCFFAC;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n.no {\n  background-color: #FFCF88;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n.search {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.area-select {\n  font-size: 12px;\n  color: #787A7D;\n}\n.input-width {\n  width: 180px;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.pr-40 {\n  padding-right: 40px;\n}\n.cancel {\n  background-color: #fff;\n  border: 1px solid #109CF1;\n  color: #109CF1;\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.form-check-label {\n  margin-bottom: 0;\n  color: #334D6E;\n  font-size: 12px;\n  font-weight: 600;\n}\n.width205 {\n  width: 205px;\n}\n.description {\n  width: 200px;\n  margin: 0px 10px;\n}\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('Icon.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\ninput[type=\"date\"] {\n  padding: 6px 4px;\n  margin-right: 10px;\n}\n.add {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.mr-10 {\n  margin-right: 10px;\n}\n.center {\n  text-align: center;\n}\n.gray {\n  background-color: #F4F3F8;\n  height: 92vh;\n}\n/*chatbox*/\n.chatbox1 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chatbox2 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.chatbox3 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chatbox4 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.chatbox5 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chatbox6 {\n  width: 1033px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.chatbox7 {\n  width: 90px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chatbox8 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chatbox9 {\n  width: 819px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.chatbox-select {\n  font-size: 10px;\n}\n.chatbox-input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: #f3f3f3;\n}\n.col-form-label {\n  font-size: 13px;\n  font-weight: 400;\n  color: #AFB3B7;\n}\n.upload {\n  background-color: #29ACFC;\n}\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n#yourBtn {\n  position: relative;\n  top: 40px;\n  width: 100px;\n  padding: 10px;\n  background-color: #29ACFC;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 10px;\n}\n.top {\n  position: relative;\n  top: 40px;\n}\n.division {\n  border-right: 2px solid #C4C4C4;\n  margin: 40px 0px;\n}\n.radio {\n  font-size: 11px;\n  font-weight: 400;\n}\n.containerc {\n  display: block;\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.containerc input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  border: 1px solid #109CF1;\n}\n.containerc input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.containerc input:checked ~ .checkmark:after {\n  display: block;\n}\n.containerc .checkmark:after {\n  left: 5px;\n  top: 0px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n.top2 {\n  position: relative;\n  top: 10px;\n}\n.login {\n  position: relative;\n  top: -7px;\n  left: 2px;\n}\n.thumb {\n  padding-left: 10px;\n}\nmain {\n  padding-left: 0 !important;\n}\n.right {\n  float: right;\n}\nthead td, thead th {\n  border-top: none;\n  border-bottom: none;\n}\ntable thead tr th {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\ntable tbody tr .field-wrapper {\n  padding: 0px !important;\n}\ntable tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 60%;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\ntable tbody .displayComp .edit-comp {\n  display: none;\n}\ntable tbody .editComp .view-comp {\n  display: none;\n}\n.btn {\n  background: #0084f6;\n  color: white;\n  margin-top: -2rem;\n}\nth {\n  background-color: #e0eaec;\n  color: black;\n}\ntr {\n  border-radius: 12px;\n  border-left: 5px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n.tableBodyScroll tbody {\n  display: block;\n  overflow-y: auto;\n  background: #ffffff;\n}\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-left: none;\n  border-radius: 0;\n}\n.anchorTagCursor {\n  cursor: pointer;\n}\n.astrick {\n  color: red;\n}\n@media screen and (max-width: 995px), screen and (max-height: 768px) {\n  #divSlotTable {\n    margin-left: 0px !important;\n    margin-right: 15px !important;\n    overflow: hidden;\n    width: 100%;\n  }\n  #divSlotTable ::-webkit-scrollbar {\n    display: block;\n    width: 7px;\n    height: 7px;\n  }\n}\n.middle-section {\n  padding: 1%;\n  width: 100%;\n  box-sizing: border-box;\n}\n.add-edit {\n  margin-bottom: 15px;\n  margin-top: 25px;\n}\n.add-edit i {\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n  margin-bottom: 0px;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 14px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.create-standard-form {\n  margin: -18px 0;\n  padding-left: 20px;\n  margin-bottom: -10px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc;\n}\n.editCellInput {\n  margin: auto;\n  display: block;\n}\n.pull-right {\n  margin-left: 122px;\n}\n.grid-container {\n  display: grid;\n  grid-column-gap: -80px;\n  grid-template-columns: auto auto auto;\n  padding: 10px;\n}\n.btnclass {\n  margin-top: 13px;\n  margin-bottom: 10px;\n  margin-right: 74%;\n}\n.marginhead {\n  margin-bottom: -16px;\n}\n.row.field {\n  display: flex;\n  margin-bottom: 1em;\n}\nform {\n  margin: 0.9em 0;\n}\n.search-filter-wrapper {\n  margin-top: -1rem;\n  margin-right: -7rem;\n  float: right;\n}\n.search-filter-wrapper .search-field {\n  font-size: 12px;\n  padding: 7px 10px;\n  width: 200px;\n  box-sizing: border-box;\n  float: right;\n  height: 35px;\n  font-size: 14px;\n}\n.filter-box {\n  padding: 0px 0px;\n  margin-bottom: 5px;\n}\n.btn-sms-search {\n  margin-top: 35px;\n  text-align: center;\n  margin-left: 280px;\n  width: 100%;\n}\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  height: 35px;\n  font-size: 14px;\n  margin-left: 229px;\n}\ntable th, table td {\n  text-align: left;\n  border-top: none !important;\n  border-bottom: none !important;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.btn-sms-search {\n  margin-top: 35px;\n  text-align: center;\n  margin-left: 280px;\n  width: 100%;\n}\ninput {\n  height: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvY2xhc3Mtcm9vbS9jbGFzcy1yb29tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvZGF0YS1zZXR1cC9kYXRhLXNldHVwLWhvbWUvZGF0YS1zZXR1cC1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLHVFQUFBO0FBV0E7O0VBS2dCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUN4QmpDO0FEa0JBO0VBU2dCLDBCQUEwQjtFQUMxQixlQUFlO0FDdkIvQjtBRGFBO0VBZ0I0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQ3pCbkQ7QURJQTtFQXVCZ0MsVUFBVTtBQ3ZCMUM7QURBQTtFQTBCZ0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdEJ0RDtBRFBBO0VBZ0NvQyxVQUFVO0FDckI5QztBRFhBO0VBb0NnQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7QUNyQmxEO0FEckJBO0VBOEM0QixjQWxEYjtFQW1EYSxlQUFlO0FDckIzQztBRDhCQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQzNCcEI7QUR1QkE7RUFNTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUN6Qi9CO0FEVUE7RUFpQlEsVUFBVTtFQUNWLGtCQUFrQjtBQ3ZCMUI7QURL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QUFtQjtFQUNuQixpQkFBaUI7QUE0bkJyQjtBQXpuQkE7RUFDSSxvQkFBb0I7QUE0bkJ4QjtBQTFuQkE7RUFJSSxhQUFhO0VBRWYsa0JBQWtCO0FBeW5CcEI7QUFybkJBO0VBQ0ksZUFBYztBQXduQmxCO0FBcm5CQTtFQUVJLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQXVuQmhCO0FBM25CQTtFQU1RLGVBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUF5bkJ2QjtBQXRuQkE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBeW5CdEI7QUFybkJBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FDSjtBQXVuQkE7QUFybkJBO0VBR1EsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQXNuQjFCO0FBbm5CQTtFQUNJLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFzbkJ2QjtBQXBuQkE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUNKO0FBc25CQTtBQXptQkE7RUFDSSxZQUFZO0FBNG1CaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvZGF0YS1zZXR1cC9jbGFzcy1yb29tL2NsYXNzLXJvb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2RhdGEtc2V0dXAtaG9tZS9kYXRhLXNldHVwLWhvbWUuY29tcG9uZW50LnNjc3NcIjtcbnRhYmxlIHtcbiAgICB0aGVhZCB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAuZWRpdE9wdGlvbnMgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggNXB4O1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGlzcGxheUNvbXAge1xuICAgICAgICAgICAgLnZpZXctY29tcCB7fVxuICAgICAgICAgICAgLmVkaXQtY29tcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5lZGl0Q29tcCB7XG4gICAgICAgICAgICAudmlldy1jb21wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZWRpdC1jb21wIHt9XG4gICAgICAgIH1cbiAgICB9XG59XG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbn1cbnRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGVhZWM7XG4gICAgY29sb3I6IGJsYWNrO1xufVxudHIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTBlYWVjO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgLy8gbWluLWhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDFweCBzb2xpZCByZ2JhKDIxMSwgMjEyLCAyMTMsIDAuNSk7XG59XG4udGFibGVCb2R5U2Nyb2xsIHRoZWFkLFxudGJvZHkgdHIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDsgICBcbn1cbi5hbmNob3JUYWdDdXJzb3Ige1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hc3RyaWNre1xuICAgIGNvbG9yOiByZWQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTVweCksXG5zY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICNkaXZTbG90VGFibGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyBtYXgtaGVpZ2h0OiA0ODBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC50YWJsZS1zY3JvbGwtd3JhcHBlciB7XG4gICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiA0MzBweDtcbiAgICAgICAgfVxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDElO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5hZGQtZWRpdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29tbW9uLWJsdWU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIC5leHBlbmQtYm94IHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLmNyZWF0ZS1zdGFuZGFyZC1mb3JtIHtcbiAgICBtYXJnaW46IC0xOHB4IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgLmZvcm0tY3RybCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICB9XG59XG5cbi5jbG9zZUJ0bkNsYXNzIHtcbiAgICAvLyBsaW5lLWhlaWdodDogMTFweCAhaW1wb3J0YW50O1xufVxuXG4uZWRpdENlbGxJbnB1dCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHVsbC1yaWdodCB7XG4gICAgLy8gbWFyZ2luLXRvcDogMjZweDtcbiAgICBtYXJnaW4tbGVmdDogMTIycHg7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWNvbHVtbi1nYXA6IC04MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmJ0bmNsYXNzIHtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3NCU7XG59XG5cbi5tYXJnaW5oZWFkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbn1cbi5yb3d7XG5cbiYuZmllbGR7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuIC8vIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbn1cblxuZm9ybXtcbiAgICBtYXJnaW46MC45ZW0gMDtcbn1cblxuLnNlYXJjaC1maWx0ZXItd3JhcHBlciB7XG4gICAgLy8gbWFyZ2luOiAxMHB4IDVweCAxMHB4IDVweDtcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC03cmVtO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICAuc2VhcmNoLWZpZWxkIHtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuLmZpbHRlci1ib3gge1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG59XG5cbi5idG4tc21zLXNlYXJjaCB7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5zZWFyY2gtZmlsdGVyLXdyYXBwZXIge1xuICAgIC8vIG1hcmdpbi10b3A6IC01MXB4O1xuICAgIC5ub3JtYWwtZmllbGQge1xuICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLy8gd2lkdGg6IDEzMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMjlweDtcbiAgICB9XG59XG50YWJsZSB0aCwgdGFibGUgdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uYnRuLXNtcy1zZWFyY2gge1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAyODBweDtcbiAgICB3aWR0aDogMTAwJVxufVxuLy8gLnNlYXJjaC1maWx0ZXItd3JhcHBlciB7XG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAubm9ybWFsLWZpZWxkIHtcbi8vICAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4vLyAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8vIHdpZHRoOiAxMzBweDtcbi8vICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuLy8gICAgICAgICBoZWlnaHQ6IDM1cHg7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDIyOXB4O1xuLy8gICAgIH1cbmlucHV0IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG59IiwiLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiPlwiO1xuICBjb2xvcjogIzMzNEQ2RTtcbn1cbi5icmVhZGNydW1ie1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbm1hcmdpbi1ib3R0b206IDBweDtcbnBhZGRpbmctbGVmdDogMDtcbn1cbi5icmVhZGNydW1iLWl0ZW0+YXtcbmNvbG9yOiAjMzM0RDZFO1xuZm9udC13ZWlnaHQ6IDYwMDtcbmZvbnQtc2l6ZTogMTZweDtcbn1cblxuXG5cbi53OTgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5uYXYtaXRlbSB7XG4gIC5uYXYtbGluayB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIC5hY3RpdmUge1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDljZjEgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm5hdi1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICBtYXJnaW46IC0xcmVtIDMuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDByZW07XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udzE1IHtcbiAgd2lkdGg6IDE1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTVmMDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5saXN0IHsgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMHB4O1xuICBtYXJnaW46IDdweCAwcHg7XG4gIGEgeyBzcGFuIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzMzNGQ2ZTtcbiAgfVxuICB9XG4gIGltZyB7XG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxufVxufVxuLmFkZF9tYXN0ZXJfdGFnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOWNmMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuc2VsZWN0IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmODtcbn1cbi5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4O1xuKi9cbn1cbi5tYWduaWZ5aW5nLWdsYXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRnJhbWUxLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuICB0ZXh0LWluZGVudDogNXB4O1xufVxuLmhlYWRlci1pbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogNzAwcHg7XG4gIGNvbG9yOiAjNjE3NThlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRnJhbWUxLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4OyovXG59XG4uaGVhZGVyLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5wLTE1IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5zZWxlY3Qge1xuICB3aWR0aDogMjUwcHg7XG4gIGNvbG9yOiAjYjZiOGJiO1xufVxuXG5cblxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6MTVweDtcbn1cbnRoZWFke1xuICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTVGMDtcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICB0ZHtcbiAgICAgICBiYWNrZ3JvdW5kOiAjREZFNUYwO1xuICAgfVxufVxudGR7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbnRib2R5e1xuICBmb250LXdlaWdodDogNTAwO1xufVxudHJ7XG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Oi0xcHggMXB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogLTFweCAxcHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG4uc2VjdGlvbjo6YmVmb3JlIHtcbiAgaGVpZ2h0OiAwLjRlbTtcbiAgZGlzcGxheTogdGFibGUtcm93O1xuICBjb250ZW50OiAnJztcbn1cblxuXG4udzk2e1xuICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gIC8vIG1hcmdpbjogMHB4IDFyZW07XG4gIC8vIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuLnAtMTB7cGFkZGluZy10b3A6IDEwcHg7fVxuLnAtMzB7cGFkZGluZy10b3A6IDMwcHg7fVxuLnAtMTAtMHsgcGFkZGluZzogOXB4IDBweDt9XG4ueWVze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NGRkFDO1xuICBjb2xvcjogIzMyM0M0NztcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5ub3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0Y4ODtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uc2VhcmNoe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLmFyZWEtc2VsZWN0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzc4N0E3RDtcbn1cbi5pbnB1dC13aWR0aHtcbiAgd2lkdGg6IDE4MHB4O1xufVxuLnBsLTEwe1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ucHItNDB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5jYW5jZWx7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjoxcHggc29saWQgIzEwOUNGMTtcbiAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwXG59XG4uZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLndpZHRoMjA1e1xuICB3aWR0aDogMjA1cHg7XG59XG4uZGVzY3JpcHRpb257XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cbiBpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9JY29uLnN2ZycpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIHBhZGRpbmc6IDJweCAwcHg7XG59XG5pbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgcGFkZGluZzogNnB4IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmFkZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDBcbn1cbi5tci0xMHtcbm1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jZW50ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ncmF5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGM0Y4O1xuICBoZWlnaHQ6IDkydmg7XG59XG4vKmNoYXRib3gqL1xuLmNoYXRib3gxe1xuICB3aWR0aDogNDY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94MntcbiAgd2lkdGg6IDExNTNweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94M3tcbiAgd2lkdGg6IDQ2NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDR7XG4gIHdpZHRoOiAxMTUzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDV7XG4gIHdpZHRoOiA0NjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g2e1xuICB3aWR0aDogMTAzM3B4O1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g3e1xuICB3aWR0aDo5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDh7XG4gIHdpZHRoOiA0NjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g5e1xuICB3aWR0aDogODE5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveC1zZWxlY3R7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jaGF0Ym94LWlucHV0e1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG4uY29sLWZvcm0tbGFiZWx7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNBRkIzQjc7XG59XG4udXBsb2Fke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xufVxuaW5wdXRbdHlwZT1cImZpbGVcIl17XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiN5b3VyQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi50b3B7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MHB4O1xufVxuLmRpdmlzaW9ue1xuICBib3JkZXItcmlnaHQ6ICAycHggc29saWQgI0M0QzRDNDsgXG4gIG1hcmdpbjogNDBweCAwcHg7XG59XG4ucmFkaW97XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jb250YWluZXJjIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cblxuLmNvbnRhaW5lcmMgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuXG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMDlDRjE7XG59XG5cbi5jb250YWluZXJjIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5jb250YWluZXJjIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLmNvbnRhaW5lcmMgLmNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi50b3Aye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbn1cbi5sb2dpbnsgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtN3B4O1xuICAgIGxlZnQ6IDJweDtcbn1cbi50aHVtYntcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxubWFpbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4ucmlnaHQgeyBcbiAgICBmbG9hdDogcmlnaHQ7XG59XG50aGVhZCB7XG4gIHRkLCB0aCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/class-room/class-room.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/class-room/class-room.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ClassRoomComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupClassRoomClassRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassRoomComponent", function () {
        return ClassRoomComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_class_roomService_class_roomlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/class-roomService/class-roomlist.service */
      "./src/app/services/class-roomService/class-roomlist.service.ts");
      /* harmony import */


      var _services_login_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/login-services/login.service */
      "./src/app/services/login-services/login.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");

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

      var ClassRoomComponent =
      /** @class */
      function () {
        var ClassRoomComponent = /*#__PURE__*/function () {
          function ClassRoomComponent(ClassList, login, auth, msgService) {
            _classCallCheck(this, ClassRoomComponent);

            this.ClassList = ClassList;
            this.login = login;
            this.auth = auth;
            this.msgService = msgService;
            this.pagedclassRoomData = [];
            this.addClasslistData = [];
            this.saveclassListData = [];
            this.updateclassListData = [];
            this.classRoomData = [];
            this.searchData = [];
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.enterclassdataDesc = "";
            this.enterclassdata = "";
            this.searchText = "";
            this.tempIndex = "";
            this.pageIndex = 1;
            this.displayBatchSize = 25;
            this.totalRow = 0;
            this.updateFlag = false;
            this.CreateNewList = false;
            this.searchflag = false;
            this.editFlag = false;
            this.type = '';
            this.removeFullscreen();
            this.removeSelectionFromSideNav();
            this.login.changeInstituteStatus(sessionStorage.getItem('institute_name'));
            this.login.changeNameStatus(sessionStorage.getItem('name'));
          }

          _createClass(ClassRoomComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this.isProfessional = true;
                  _this.type = 'batch';
                } else {
                  _this.isProfessional = false;
                  _this.type = 'course';
                }
              });
              this.getClassList();
            }
            /*=========================fetching class list========================================
            ====================================================================================== */

          }, {
            key: "getClassList",
            value: function getClassList() {
              var _this2 = this;

              this.ClassList.fetchClassList().subscribe(function (res) {
                _this2.classRoomData = res;
                _this2.totalRow = res.length;

                _this2.fetchTableDataByPage(_this2.pageIndex);
              }), function (err) {};
            }
            /*=====================================================================================
            ======================================================================================*/

          }, {
            key: "editRowTable",
            value: function editRowTable(row, index) {
              if (this.editFlag) {
                this.pagedclassRoomData[this.tempIndex] = this.tempObj;
                console.log(this.pagedclassRoomData[this.tempIndex]);
                document.getElementById(("row" + this.tempIndex).toString()).classList.remove('editComp');
                document.getElementById(("row" + this.tempIndex).toString()).classList.add('displayComp');
              } else {
                this.editFlag = true;
              }

              this.tempIndex = index;
              console.log(this.tempIndex);
              this.tempObj = Object.assign({}, row);
              console.log(this.tempObj);
              document.getElementById(("row" + index).toString()).classList.remove('displayComp');
              document.getElementById(("row" + index).toString()).classList.add('editComp');
            }
            /*===================================(+)(-)====================================
            =============================================================================== */

          }, {
            key: "toggleCreateNewList",
            value: function toggleCreateNewList() {
              if (this.CreateNewList == false) {
                this.CreateNewList = true;
                document.getElementById('showCloseBtn').style.display = '';
                document.getElementById('showAddBtn').style.display = 'none';
              } else {
                this.CreateNewList = false;
                document.getElementById('showCloseBtn').style.display = 'none';
                document.getElementById('showAddBtn').style.display = '';
              }
            }
            /*====================================adding new class room=======================
            ================================================================================= */

          }, {
            key: "addNewclassRoom",
            value: function addNewclassRoom(Room_ele, Desc_ele) {
              var _this3 = this;

              if (Room_ele != "" && Desc_ele != "" && Room_ele != null && Desc_ele != null) {
                var classRoomobj = {
                  class_room_desc: Desc_ele,
                  class_room_name: Room_ele
                };

                for (var i = 0; i < this.classRoomData.length; i++) {
                  if (this.classRoomData[i].class_room_name == classRoomobj.class_room_name) {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Duplicate Entries are not Allowed');
                    return;
                  }
                }

                if (Desc_ele.length > 500) {
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Description should not be greater than 500 Characters');
                  return;
                }

                this.ClassList.saveClassroomDetail(classRoomobj).subscribe(function (data) {
                  _this3.msgService.showErrorMessage(_this3.msgService.toastTypes.success, "", 'Classroom added successfully');

                  _this3.getClassList();

                  _this3.enterclassdata = "";
                  _this3.enterclassdataDesc = ""; // this.toggleCreateNewList();
                }, function (error) {
                  _this3.msgService.showErrorMessage(_this3.msgService.toastTypes.error, '', error.error.message);
                });
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please fill Mandatory Fields'); // this.enterclassdata = "";
                // this.enterclassdataDesc = "";

                return;
              }
            }
          }, {
            key: "cancelRow",
            value: function cancelRow(row, index) {
              this.pagedclassRoomData[this.tempIndex] = this.tempObj;
              console.log(this.pagedclassRoomData[this.tempIndex]);
              document.getElementById(("row" + this.tempIndex).toString()).classList.remove('editComp');
              document.getElementById(("row" + this.tempIndex).toString()).classList.add('displayComp');
            }
            /*===================================saving classroom info========================
            ================================================================================= */

          }, {
            key: "saveclassRoomInfo",
            value: function saveclassRoomInfo(row, index) {
              var _this4 = this;

              var data = {
                class_room_name: row.class_room_name,
                class_room_desc: row.class_room_desc,
                class_room_id: row.class_room_id
              };

              for (var j = 0; j < this.classRoomData.length; j++) {
                if (j == index) {
                  continue;
                } else if (this.classRoomData[j].class_room_name === row.class_room_name) {
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Duplicate Entries are not Allowed');
                  return;
                }
              }

              if (data.class_room_name != "" && data.class_room_name != null && data.class_room_desc != "" && data.class_room_desc != null) {
                if (data.class_room_desc.length > 500) {
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Description should not be greater than 500');
                  return;
                }

                this.ClassList.updateclassListData(data).subscribe(function (res) {
                  _this4.msgService.showErrorMessage(_this4.msgService.toastTypes.success, "", 'Classroom updated successfully');

                  _this4.editFlag = false;
                  _this4.tempIndex = "";
                  _this4.tempObj = null;

                  _this4.getClassList();
                }, function (err) {});
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please fill classRoom name and Description');
              }
            }
            /*===================================Search============================================ */

          }, {
            key: "searchDatabase",
            value: function searchDatabase() {
              var _this5 = this;

              if (this.searchText != "" && this.searchText != null) {
                this.pageIndex = 1;
                var searchRes;
                searchRes = this.classRoomData.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this5.searchText.toLowerCase());
                  });
                });
                this.searchData = searchRes;
                this.totalRow = searchRes.length;
                this.searchflag = true;
                this.fetchTableDataByPage(this.pageIndex);
              } else {
                this.searchflag = false;
                this.fetchTableDataByPage(this.pageIndex);
                this.totalRow = this.classRoomData.length;
              }
            }
            /*====================update for vaid field==================================================== */
            // updateValidDataField() {
            //   if (this.updateFlag == false) {
            //   }
            // }

            /*==================pagination================================================================*/

          }, {
            key: "fetchTableDataByPage",
            value: function fetchTableDataByPage(index) {
              this.pageIndex = index;
              var startindex = this.displayBatchSize * (index - 1);
              this.pagedclassRoomData = this.getClassRoomTableFromSource(startindex);
            }
          }, {
            key: "fetchNext",
            value: function fetchNext() {
              this.pageIndex++;
              this.fetchTableDataByPage(this.pageIndex);
            }
          }, {
            key: "fetchPrevious",
            value: function fetchPrevious() {
              if (this.pageIndex != 1) {
                this.pageIndex--;
                this.fetchTableDataByPage(this.pageIndex);
              }
            }
          }, {
            key: "getClassRoomTableFromSource",
            value: function getClassRoomTableFromSource(startindex) {
              if (this.searchflag) {
                var t = this.searchData.slice(startindex, startindex + this.displayBatchSize);
                return t;
              } else {
                var _t = this.classRoomData.slice(startindex, startindex + this.displayBatchSize);

                return _t;
              }
            }
            /*==================================================================================
            ====================================================================================== */

          }, {
            key: "removeFullscreen",
            value: function removeFullscreen() {
              var header = document.getElementsByTagName('core-header');
              var sidebar = document.getElementsByTagName('core-sidednav');
              [].forEach.call(header, function (el) {
                el.classList.remove('hide');
              });
              [].forEach.call(sidebar, function (el) {
                el.classList.remove('hide');
              });
            }
          }, {
            key: "updateTableBatchSize",
            value: function updateTableBatchSize(event) {
              this.displayBatchSize = event;
              this.fetchTableDataByPage(this.pageIndex);
            }
          }, {
            key: "removeSelectionFromSideNav",
            value: function removeSelectionFromSideNav() {// let classArray = ['lione', 'litwo', 'lithree', 'lifour', 'lifive', 'lisix', 'liseven', 'lieight', 'linine', 'lizero'];
              // classArray.forEach(function (className) {
              //   console.log(className);
              //   document.getElementById(className).classList.remove('active');
              // });

              /* document.getElementById('liten').classList.remove('active');
              document.getElementById('lieleven').classList.remove('active'); */
            }
          }]);

          return ClassRoomComponent;
        }();

        ClassRoomComponent.ctorParameters = function () {
          return [{
            type: _services_class_roomService_class_roomlist_service__WEBPACK_IMPORTED_MODULE_1__["ClassRoomService"]
          }, {
            type: _services_login_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]
          }];
        };

        ClassRoomComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-class-room',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./class-room.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/class-room/class-room.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./class-room.component.scss */
          "./src/app/components/course-module/data-setup/class-room/class-room.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_class_roomService_class_roomlist_service__WEBPACK_IMPORTED_MODULE_1__["ClassRoomService"], _services_login_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]])], ClassRoomComponent);
        return ClassRoomComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/class-settings/class-settings.component.scss":
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/class-settings/class-settings.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleDataSetupClassSettingsClassSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex2 {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 19px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\ninput:focus,\nselect:focus,\nbutton:focus {\n  outline: none;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.w981 {\n  margin-left: 1%;\n}\n\n.main_div {\n  display: flex;\n  margin-top: 10px;\n}\n\n.main_div > div:first-child {\n  width: 15%;\n  background: #F3F4F6;\n  border: 1px solid #DCDCDC;\n  box-sizing: border-box;\n  height: 89vh;\n  position: fixed;\n}\n\n.settings {\n  padding: 20px 10px;\n  border-bottom: 1px solid #000;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.menu {\n  margin-top: 20px;\n}\n\n.menu li {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  padding: 20px 0px;\n  padding-left: 10px;\n  color: #1A2334;\n  cursor: pointer;\n}\n\n.menu li.selected {\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n}\n\na {\n  color: #1A2334;\n  text-decoration: none;\n}\n\n.menu li.selected > a {\n  color: #0097F9;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.bottom {\n  padding: 1%;\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  width: calc(100% - 15%);\n  border-top: 1px solid #EAEAEA;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.main_div > div:last-child {\n  width: 80%;\n  margin-left: 20%;\n  /*overflow-y: scroll;*/\n  padding-right: 1%;\n  margin-bottom: 70px;\n}\n\n.ellipse {\n  background: #F0EFEF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  width: 19px;\n  height: 19px;\n  padding: 0px 7px;\n  border-radius: 50%;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  /* identical to box height, or 100% */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.blue_line {\n  border-top: 1px solid #0097F9;\n  width: 22px;\n  display: inline-block;\n  margin: 0px 7px;\n  position: relative;\n  top: -4px;\n}\n\n.blue_settings {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.bold_settings {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  margin-bottom: 8px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings1 {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 8px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex1 {\n  display: flex;\n  margin-top: 10px;\n}\n\n.sep_line {\n  margin-left: 65px;\n  border-bottom: 1px solid #C4C4C4;\n  margin-bottom: 16px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 12px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: #ccc;*/\n  -webkit-transition: .4s;\n  border: 1px solid #BDBABA;\n  box-sizing: border-box;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: -6px;\n  bottom: -4px;\n  background-color: #BDBABA;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  /*background-color: #2196F3;*/\n}\n\ninput:focus + .slider {\n  /*box-shadow: 0 0 1px #2196F3;*/\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n  background-color: #19C83F;\n}\n\ninput:checked + .slider {\n  border: 1px solid #BDBABA;\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.toggle {\n  display: flex;\n  margin-left: auto;\n  padding-right: 50px;\n  padding-top: 30px;\n}\n\n.off {\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  position: relative;\n  top: -4px;\n  margin: 0px 10px;\n}\n\n.on {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 0px 10px;\n  letter-spacing: 0.01em;\n  position: relative;\n  top: -4px;\n  color: #19C83F;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.settings_label {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-right: 40px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-left: -10px;\n}\n\n.checkbox {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 16px;\n  color: var(--color);\n  cursor: pointer;\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #fff;\n  background: #109CF1;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  padding: 2px;\n  width: 0.5em;\n  height: 0.5em;\n  border: none;\n  border-radius: 3px;\n  transform-origin: bottom left;\n}\n\n.checkbox__input input:checked + .checkbox__control svg {\n  transform: scale(1);\n}\n\n.checkbox__input input:checked + .checkbox__control {\n  border: none;\n}\n\n.flex1 > div:nth-child(2) {\n  width: 60%;\n}\n\n.input {\n  box-sizing: border-box;\n  background: #F5F5F5;\n  border-radius: 2px;\n  width: 336px;\n  height: 35px;\n  margin-bottom: 16px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  border: none;\n  outline: none;\n  text-indent: 10px;\n  color: #323C47;\n}\n\n.input::-moz-placeholder {\n  color: #8e939a;\n}\n\n.input:-ms-input-placeholder {\n  color: #8e939a;\n}\n\n.input::placeholder,\noption[disabled] {\n  color: #8e939a;\n}\n\n.flex1 > div:first-child {\n  width: 65px;\n}\n\n.flex1 > div:nth-child(2).wid100-65 {\n  width: calc(100% - 65px);\n}\n\n.space {\n  margin-right: 30px;\n  padding-top: 5px;\n}\n\n.size_sm {\n  width: 18px;\n  height: auto;\n  position: relative;\n  margin-left: 6px;\n}\n\n.position {\n  position: relative;\n  top: -7px;\n  margin-left: 10px;\n}\n\n.flex290 {\n  display: flex;\n  margin-left: 65px;\n}\n\n.flex290 > div {\n  width: 40%;\n}\n\n/*extra*/\n\n.scrool1 {\n  overflow-y: scroll;\n  height: calc(100vh - 218px);\n}\n\n.no-pointer-class {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  z-index: 1;\n  top: 0px;\n  right: -135px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.center {\n  align-items: center;\n}\n\n.dropdown-content1 {\n  width: 150px;\n  white-space: nowrap;\n  min-height: 41px;\n  line-height: 18px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  font-weight: bold;\n  position: absolute;\n  width: 130px;\n  min-height: 30px;\n  background: #e0e0e0;\n  border: 1px solid #ccc;\n  font-size: 11px;\n  border-radius: 4px;\n  padding: 3px 5px;\n  box-shadow: 0 0 4px #ccc;\n}\n\n.dropdown-content1 p {\n  white-space: pre-wrap;\n}\n\n.hide {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvY2xhc3Mtc2V0dGluZ3MvY2xhc3Mtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsb0NBQW9DO0FBQ3hDOztBQUVFO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDbkI7O0FBRUU7RUFDRSxhQUFhO0FBQ2pCOztBQUVFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDbkI7O0FBRUU7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNuQjs7QUFHRTs7O0VBR0UsYUFBYTtBQUFqQjs7QUFHRTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFBcEI7O0FBR0U7RUFDRSxlQUFlO0FBQW5COztBQUdFO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUFwQjs7QUFHRTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUFuQjs7QUFHRTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFDQSxzQkFBc0I7RUFDdEIsY0FBYztBQUFsQjs7QUFHRTtFQUNFLGdCQUFnQjtBQUFwQjs7QUFHRTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBQW5COztBQUdFO0VBQ0UsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUVBLHNCQUFzQjtBQUQxQjs7QUFLRTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFGekI7O0FBS0U7RUFFRSxjQUFjO0FBSGxCOztBQU1FO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUhsQzs7QUFNRTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDJDQUEyQztBQUgvQzs7QUFNRTtFQUNFLGtCQUFrQjtBQUh0Qjs7QUFNRTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFFaEIsc0JBQUE7RUFDQSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBSnZCOztBQU9FO0VBQ0UsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUNBQUE7RUFFQSxzQkFBc0I7RUFFdEIsY0FBYztBQU5sQjs7QUFVRTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztBQVBiOztBQVVFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFDQSxzQkFBc0I7RUFDdEIsY0FBYztBQVBsQjs7QUFVRTtFQUNFLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNEJBQUE7RUFDQSxzQkFBc0I7RUFDdEIsY0FBYztBQVBsQjs7QUFVRTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUFBO0VBQ0EsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUV0QixjQUFjO0FBUmxCOztBQVVFO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFDQSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBRXRCLGNBQWM7QUFSbEI7O0FBVUU7RUFDRSxhQUFhO0VBRWIsZ0JBQWdCO0FBUnBCOztBQVdFO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFSdkI7O0FBV0U7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBUmhCOztBQVdFO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBUmI7O0FBV0U7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCwyQkFBQTtFQUNBLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG1EQUFtRDtFQUNuRCxlQUFlO0FBUm5COztBQVdFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0VBRXpCLGVBQWU7QUFSbkI7O0FBV0U7RUFDRSw2QkFBQTtBQVJKOztBQVdFO0VBQ0UsK0JBQUE7QUFSSjs7QUFXRTtFQUdFLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFSN0I7O0FBV0U7RUFDRSx5QkFBeUI7QUFSN0I7O0FBV0U7RUFDRSxtQkFBbUI7QUFSdkI7O0FBV0U7RUFDRSxrQkFBa0I7QUFSdEI7O0FBV0U7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBRWpCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFUckI7O0FBWUU7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7QUFUcEI7O0FBWUU7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0FBVGxCOztBQVlFO0VBQ0Usa0JBQWtCO0FBVHRCOztBQVlFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFDQSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7QUFUdEI7O0FBWUU7RUFDRSxhQUFhO0VBQ2IsK0NBQXVDO0VBQXZDLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBQVRuQjs7QUFZRTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztBQVRmOztBQVlFO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQVQ3Qjs7QUFhRTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7QUFWbkM7O0FBYUU7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBVmpDOztBQWFFO0VBQ0UsbUJBQW1CO0FBVnZCOztBQWFFO0VBQ0UsWUFBWTtBQVZoQjs7QUFhRTtFQUNFLFVBQVU7QUFWZDs7QUFhRTtFQUVFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0FBWGxCOztBQWNFO0VBRUUsY0FBYztBQVhsQjs7QUFTRTtFQUVFLGNBQWM7QUFYbEI7O0FBU0U7O0VBRUUsY0FBYztBQVhsQjs7QUFjRTtFQUNFLFdBQVc7QUFYZjs7QUFnQkU7RUFDRSx3QkFBd0I7QUFiNUI7O0FBZ0JFO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUNGO0FBZEY7O0FBZ0JFO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBYnBCOztBQWdCRTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0FBYnJCOztBQWdCRTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFickI7O0FBaUJFO0VBQ0UsVUFBVTtBQWRkOztBQWdCRyxRQUFBOztBQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQWIvQjs7QUFlRztFQUNFLG1CQUFtQjtFQUNuQixvQkFBbUI7QUFaeEI7O0FBZ0JBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQWJ2Qjs7QUFnQkE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsYUFBYTtBQWJmOztBQWdCQTtFQUFxQyxjQUFjO0FBWm5EOztBQWNBO0VBQ0UsbUJBQW1CO0FBWHJCOztBQWFBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQVYxQjs7QUFZQTtFQUNFLHFCQUFxQjtBQVR2Qjs7QUFZQTtFQUNFLGFBQVk7QUFUZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9kYXRhLXNldHVwL2NsYXNzLXNldHRpbmdzL2NsYXNzLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgXG4gIC5mbGV4MiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiA4cHggMTlweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEwOUNGMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIFxuICBpbnB1dDpmb2N1cyxcbiAgc2VsZWN0OmZvY3VzLFxuICBidXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4gIC53OTgge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICBcbiAgLnc5ODEge1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgfVxuICBcbiAgLm1haW5fZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5tYWluX2Rpdj5kaXY6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgYmFja2dyb3VuZDogI0YzRjRGNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRENEQ0RDO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiA4OXZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICBcbiAgLnNldHRpbmdzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzFBMjMzNDtcbiAgfVxuICBcbiAgLm1lbnUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC5tZW51IGxpIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBjb2xvcjogIzFBMjMzNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5tZW51IGxpLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgXG4gIH1cbiAgXG4gIGEge1xuICAgIGNvbG9yOiAjMUEyMzM0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLm1lbnUgbGkuc2VsZWN0ZWQ+YSB7XG4gIFxuICAgIGNvbG9yOiAjMDA5N0Y5O1xuICB9XG4gIFxuICAuZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgXG4gIC5ib3R0b20ge1xuICAgIHBhZGRpbmc6IDElO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTUlKTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQTtcbiAgICBib3gtc2hhZG93OiA0cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB9XG4gIFxuICAubXIxMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAubWFpbl9kaXY+ZGl2Omxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgXG4gICAgLypvdmVyZmxvdy15OiBzY3JvbGw7Ki9cbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICB9XG4gIFxuICAuZWxsaXBzZSB7XG4gICAgYmFja2dyb3VuZDogI0YwRUZFRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgd2lkdGg6IDE5cHg7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHBhZGRpbmc6IDBweCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMDAlICovXG4gIFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICAgIGNvbG9yOiAjMDA5N0Y5O1xuICBcbiAgfVxuICBcbiAgLmJsdWVfbGluZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDk3Rjk7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMHB4IDdweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNHB4O1xuICB9XG4gIFxuICAuYmx1ZV9zZXR0aW5ncyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMDA5N0Y5O1xuICB9XG4gIFxuICAuYm9sZF9zZXR0aW5ncyB7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIFxuICAuYmxhY2tfc2V0dGluZ3Mge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuYmxhY2tfc2V0dGluZ3MxIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuZmxleDEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5zZXBfbGluZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDNEM0QzQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuICBcbiAgLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gIH1cbiAgXG4gIC5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIFxuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOyovXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JEQkFCQTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIC5zbGlkZXI6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgbGVmdDogLTZweDtcbiAgICBib3R0b206IC00cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkFCQTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQrLnNsaWRlciB7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzOyovXG4gIH1cbiAgXG4gIGlucHV0OmZvY3VzKy5zbGlkZXIge1xuICAgIC8qYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzOyovXG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOUM4M0Y7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQrLnNsaWRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JEQkFCQTtcbiAgfVxuICBcbiAgLnNsaWRlci5yb3VuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgfVxuICBcbiAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLnRvZ2dsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbiAgXG4gIC5vZmYge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNHB4O1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gIH1cbiAgXG4gIC5vbiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTRweDtcbiAgICBjb2xvcjogIzE5QzgzRjtcbiAgfVxuICBcbiAgLmhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIFxuICAuc2V0dGluZ3NfbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICB9XG4gIFxuICAuY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvO1xuICAgIGdyaWQtZ2FwOiAwLjVlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmNoZWNrYm94X19pbnB1dCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMGVtO1xuICAgIGhlaWdodDogMGVtO1xuICB9XG4gIFxuICAuY2hlY2tib3hfX2NvbnRyb2wge1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgICBoZWlnaHQ6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCQkIyQjI7XG4gICAgO1xuICB9XG4gIFxuICAuY2hlY2tib3hfX2lucHV0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2hlY2tib3hcIjtcbiAgfVxuICBcbiAgLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzEwOUNGMTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluIDI1bXM7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBzdHJva2Utd2lkdGg6IDQ7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgICBoZWlnaHQ6IDAuNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gIH1cbiAgXG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZCsuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIFxuICAuY2hlY2tib3hfX2lucHV0IGlucHV0OmNoZWNrZWQrLmNoZWNrYm94X19jb250cm9sIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5mbGV4MT5kaXY6bnRoLWNoaWxkKDIpIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIFxuICAuaW5wdXQge1xuICBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHdpZHRoOiAzMzZweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIFxuICAuaW5wdXQ6OnBsYWNlaG9sZGVyLFxuICBvcHRpb25bZGlzYWJsZWRdIHtcbiAgICBjb2xvcjogIzhlOTM5YTtcbiAgfVxuICBcbiAgLmZsZXgxPmRpdjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDY1cHg7XG4gIH1cbiAgXG4gIC8vICBleHRyYSBsYXlvdXRcbiAgXG4gIC5mbGV4MT5kaXY6bnRoLWNoaWxkKDIpLndpZDEwMC02NSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDY1cHgpO1xuICB9XG4gIFxuICAuc3BhY2Uge1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4XG4gIH1cbiAgXG4gIC5zaXplX3NtIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIH1cbiAgXG4gIC5wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTdweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICBcbiAgLmZsZXgyOTAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIFxuICB9XG4gIFxuICAuZmxleDI5MD5kaXYge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgIC8qZXh0cmEqL1xuICAgLnNjcm9vbDF7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIxOHB4KTtcbiAgIH1cbiAgIC5uby1wb2ludGVyLWNsYXNzIHtcbiAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgcG9pbnRlci1ldmVudHM6bm9uZTtcbiB9XG4vLyAgdG9vbHRpcFxuXG4uZHJvcGRvd24xIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50MSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtMTM1cHg7XG59XG5cbi5kcm9wZG93bjE6aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQxIHtkaXNwbGF5OiBibG9jazt9XG5cbi5jZW50ZXJ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZHJvcGRvd24tY29udGVudDF7XG4gIHdpZHRoOiAxNTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLWhlaWdodDogNDFweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggI2NjYztcbn1cbi5kcm9wZG93bi1jb250ZW50MSBwe1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4vLyAgZW5kIHRvb2x0aXBcbi5oaWRle1xuICBkaXNwbGF5Om5vbmU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/class-settings/class-settings.component.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/class-settings/class-settings.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: ClassSettingsComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupClassSettingsClassSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassSettingsComponent", function () {
        return ClassSettingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/institute-setting-service/institute-setting.service */
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

      var ClassSettingsComponent =
      /** @class */
      function () {
        var ClassSettingsComponent = /*#__PURE__*/function () {
          function ClassSettingsComponent(commonService, services, auth, apiService, httpService) {
            _classCallCheck(this, ClassSettingsComponent);

            this.commonService = commonService;
            this.services = services;
            this.auth = auth;
            this.apiService = apiService;
            this.httpService = httpService; //fetch settings tab switch info

            this.test_series_feature = '0';
            this.biometricSetting = 0;
            this.isLangInst = false;
            this.jsonFlagForSetting = false;
            this.schoolModel = false;
            this.currentSection = 'section1'; //keys
            //email_sender_id

            this.disabled = true;
            this.classSettings = {
              student_expiry_notification_before_no_days: '',
              student_expiry_notification_contact_no: '',
              enable_student_expiry_notification: {
                student: '',
                admin: ''
              },
              biometric_first_in_time_sms: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              topics_covered_notification: {
                student: '',
                parent: '',
                gaurdian: '',
                teacher: '',
                admin: ''
              },
              biometric_late_sms: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              biometric_absent_sms: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              biometric_in_out_sms: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              biometric_every_out_time_sms: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              sms_absent_notification: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              extra_class_schedule_notification: {
                student: '',
                parent: '',
                gaurdian: '',
                teacher: '',
                admin: ''
              },
              cancel_class_schedule_notification: {
                student: '',
                parent: '',
                gaurdian: '',
                teacher: '',
                admin: ''
              },
              regular_class_notification: {
                student: '',
                parent: '',
                gaurdian: '',
                teacher: '',
                admin: ''
              },
              home_work_assignment_notification: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              home_work_status_notification: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              enable_class_attendance_not_marked_notification: {
                teacher: '',
                admin: '',
                other: false
              },
              enable_class_attendance_not_marked_daily_notification: {
                teacher: '',
                admin: '',
                other: false
              },
              institute_id: sessionStorage.getItem('institute_id'),
              home_work_feature_enable: '',
              absenteeism_report_flag: '',
              emailIds_for_justDail_ext_lead: '',
              course_or_batch_expiry_notification: '',
              course_or_batch_expiry_notification_before_no_days: '',
              course_or_batch_expiry_notification_contact_no: '',
              absent_attendance_in_a_month_threshold: '',
              biometric_late_sms_buffer: 0,
              biometric_class_in_time_buffer_in_min: '',
              biometric_class_out_time_buffer_in_min: ''
            };
          }

          _createClass(ClassSettingsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this6 = this;

              var instituteTaxType = sessionStorage.getItem("tax_type_without_percentage") == 'Vat' ? 'Vat' : 'GST';
              this.instituteTaxType = sessionStorage.getItem("tax_type_without_percentage") == 'Vat' ? 'Vat' : 'GST';
              this.auth.schoolModel.subscribe(function (res) {
                _this6.schoolModel = false;

                if (res) {
                  _this6.schoolModel = true;
                }
              });
              this.biometricSetting = Number(sessionStorage.getItem('biometric_attendance_feature'));
              this.checkInstitutionType();
              this.getSettingFromServer();
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
            key: "getSumOfTableField",
            value: function getSumOfTableField(data) {
              var total = 0;

              for (var i = 0; i < Object.keys(data).length; i++) {
                if (Object.keys(data)[i] == 'student' && data.student == true) {
                  total = total + 2;
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
              var obj = Object.assign({}, this.classSettings);
              obj.institute_id = Number(this.classSettings.institute_id);
              obj.student_expiry_notification_contact_no = this.classSettings.student_expiry_notification_contact_no;
              obj.enable_student_expiry_notification = this.getSumOfTableField(this.classSettings.enable_student_expiry_notification);
              obj.student_expiry_notification_before_no_days = Number(this.classSettings.student_expiry_notification_before_no_days);
              obj.home_work_feature_enable = this.convertBoolenToNumber(this.classSettings.home_work_feature_enable);
              obj.absenteeism_report_flag = this.convertBoolenToNumber(this.classSettings.absenteeism_report_flag);
              obj.emailIds_for_justDail_ext_lead = this.classSettings.emailIds_for_justDail_ext_lead;
              obj.course_or_batch_expiry_notification = this.convertBoolenToNumber(this.classSettings.course_or_batch_expiry_notification);
              obj.course_or_batch_expiry_notification_before_no_days = Number(this.classSettings.course_or_batch_expiry_notification_before_no_days);
              obj.course_or_batch_expiry_notification_contact_no = Number(this.classSettings.course_or_batch_expiry_notification_contact_no);
              obj.biometric_first_in_time_sms = this.getSumOfTableField(this.classSettings.biometric_first_in_time_sms);
              obj.biometric_late_sms = this.getSumOfTableField(this.classSettings.biometric_late_sms);
              obj.biometric_absent_sms = this.getSumOfTableField(this.classSettings.biometric_absent_sms);
              obj.biometric_in_out_sms = this.getSumOfTableField(this.classSettings.biometric_in_out_sms);
              obj.biometric_every_out_time_sms = this.getSumOfTableField(this.classSettings.biometric_every_out_time_sms);
              obj.biometric_late_sms_buffer = this.classSettings.biometric_late_sms_buffer;
              obj.biometric_class_in_time_buffer_in_min = this.classSettings.biometric_class_in_time_buffer_in_min;
              obj.biometric_class_out_time_buffer_in_min = this.classSettings.biometric_class_out_time_buffer_in_min;
              obj.sms_absent_notification = this.getSumOfTableField(this.classSettings.sms_absent_notification);
              obj.topics_covered_notification = this.getSumOfTableField(this.classSettings.topics_covered_notification);
              obj.extra_class_schedule_notification = this.getSumOfTableField(this.classSettings.extra_class_schedule_notification);
              obj.cancel_class_schedule_notification = this.getSumOfTableField(this.classSettings.cancel_class_schedule_notification);
              obj.regular_class_notification = this.getSumOfTableField(this.classSettings.regular_class_notification);
              obj.home_work_assignment_notification = this.getSumOfTableField(this.classSettings.home_work_assignment_notification);
              obj.home_work_status_notification = this.getSumOfTableField(this.classSettings.home_work_status_notification);
              obj.enable_class_attendance_not_marked_notification = this.getSumOfTableField(this.classSettings.enable_class_attendance_not_marked_notification);
              obj.enable_class_attendance_not_marked_daily_notification = this.getSumOfTableField(this.classSettings.enable_class_attendance_not_marked_daily_notification);

              if (this.classSettings.course_or_batch_expiry_notification) {
                if (this.classSettings.course_or_batch_expiry_notification_contact_no != '' && this.classSettings.course_or_batch_expiry_notification_contact_no != null) {
                  if (!this.checkContactNoPattern(this.classSettings.course_or_batch_expiry_notification_contact_no)) {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('error', '', 'Please enter numbers only');
                    return false;
                  }
                }
              }

              obj.absent_attendance_in_a_month_threshold = Number(this.classSettings.absent_attendance_in_a_month_threshold);
              return obj;
            } //check contact no pattern (comma seperator)

          }, {
            key: "checkContactNoPattern",
            value: function checkContactNoPattern(pattern) {
              var regExPattern = /^[0-9]+(,[0-9]+)*$/;

              if (!regExPattern.test(pattern)) {
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "saveFeesSettings",
            value: function saveFeesSettings() {
              var _this7 = this;

              var dataToSend = {};
              dataToSend = this.constructJsonToSend();
              console.log(dataToSend);
              this.auth.showLoader();
              this.apiService.savePartialData(dataToSend).subscribe(function (res) {
                _this7.auth.hideLoader();

                _this7.commonService.showErrorMessage('success', '', "All your setting saved successfully");

                _this7.cancel();
              }, function (err) {
                _this7.auth.hideLoader();

                _this7.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "maxlenth",
            value: function maxlenth(data, limit) {
              if (data.length > limit) {
                this.services.showErrorMessage(this.services.toastTypes.info, '', "Please Enter upto" + " " + limit + " " + "character only");
              }
            }
          }, {
            key: "disjusdialContId",
            value: function disjusdialContId() {
              this.disabled = !this.disabled;
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this.classSettings = {
                student_expiry_notification_before_no_days: '',
                student_expiry_notification_contact_no: '',
                enable_student_expiry_notification: {
                  student: '',
                  admin: ''
                },
                biometric_first_in_time_sms: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                topics_covered_notification: {
                  student: '',
                  parent: '',
                  gaurdian: '',
                  teacher: '',
                  admin: ''
                },
                biometric_late_sms: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                biometric_absent_sms: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                biometric_in_out_sms: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                biometric_every_out_time_sms: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                sms_absent_notification: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                extra_class_schedule_notification: {
                  student: '',
                  parent: '',
                  gaurdian: '',
                  teacher: '',
                  admin: ''
                },
                cancel_class_schedule_notification: {
                  student: '',
                  parent: '',
                  gaurdian: '',
                  teacher: '',
                  admin: ''
                },
                regular_class_notification: {
                  student: '',
                  parent: '',
                  gaurdian: '',
                  teacher: '',
                  admin: ''
                },
                home_work_assignment_notification: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                home_work_status_notification: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                enable_class_attendance_not_marked_notification: {
                  teacher: '',
                  admin: '',
                  other: false
                },
                enable_class_attendance_not_marked_daily_notification: {
                  teacher: '',
                  admin: '',
                  other: false
                },
                institute_id: sessionStorage.getItem('institute_id'),
                home_work_feature_enable: '',
                absenteeism_report_flag: '',
                emailIds_for_justDail_ext_lead: '',
                course_or_batch_expiry_notification: '',
                course_or_batch_expiry_notification_before_no_days: '',
                course_or_batch_expiry_notification_contact_no: '',
                absent_attendance_in_a_month_threshold: '',
                biometric_late_sms_buffer: 0,
                biometric_class_in_time_buffer_in_min: '',
                biometric_class_out_time_buffer_in_min: ''
              };
            }
          }, {
            key: "checkInstitutionType",
            value: function checkInstitutionType() {
              var _this8 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this8.isLangInst = true;
                } else {
                  _this8.isLangInst = false;
                }
              });
            }
          }, {
            key: "fillJSONData",
            value: function fillJSONData(data) {
              this.fillTableCheckboxValue(this.classSettings.sms_absent_notification, data.sms_absent_notification);
              this.fillTableCheckboxValue(this.classSettings.topics_covered_notification, data.topics_covered_notification);
              this.fillTableCheckboxValue(this.classSettings.extra_class_schedule_notification, data.extra_class_schedule_notification);
              this.fillTableCheckboxValue(this.classSettings.cancel_class_schedule_notification, data.cancel_class_schedule_notification);
              this.fillTableCheckboxValue(this.classSettings.regular_class_notification, data.regular_class_notification);
              this.fillTableCheckboxValue(this.classSettings.home_work_assignment_notification, data.home_work_assignment_notification);
              this.fillTableCheckboxValue(this.classSettings.home_work_status_notification, data.home_work_status_notification);
              this.fillTableCheckboxValue(this.classSettings.enable_class_attendance_not_marked_notification, data.enable_class_attendance_not_marked_notification);
              this.fillTableCheckboxValue(this.classSettings.enable_class_attendance_not_marked_daily_notification, data.enable_class_attendance_not_marked_daily_notification);
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
            key: "getSettingFromServer",
            value: function getSettingFromServer() {
              var _this9 = this;

              this.auth.showLoader();
              this.apiService.getInstituteSettingFromServer().subscribe(function (res) {
                _this9.auth.hideLoader();

                _this9.test_series_feature = res.test_series_feature;

                _this9.fillJSONData(res);
              }, function (err) {
                _this9.auth.hideLoader();

                _this9.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }]);

          return ClassSettingsComponent;
        }();

        ClassSettingsComponent.ctorParameters = function () {
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

        ClassSettingsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-class-settings',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./class-settings.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/class-settings/class-settings.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./class-settings.component.scss */
          "./src/app/components/course-module/data-setup/class-settings/class-settings.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceFactory"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_5__["InstituteSettingService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])], ClassSettingsComponent);
        return ClassSettingsComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/conten-library-setting/conten-library-setting.component.scss":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/conten-library-setting/conten-library-setting.component.scss ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleDataSetupContenLibrarySettingContenLibrarySettingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".page-content {\n  margin: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex2 {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 19px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.w981 {\n  margin-left: 1%;\n}\n\n.main_div {\n  display: flex;\n  margin-top: 10px;\n}\n\n.main_div > div:first-child {\n  width: 15%;\n  background: #F3F4F6;\n  border: 1px solid #DCDCDC;\n  box-sizing: border-box;\n  height: 89vh;\n  position: fixed;\n}\n\n.settings {\n  padding: 20px 10px;\n  border-bottom: 1px solid #000;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.menu {\n  margin-top: 20px;\n}\n\n.menu li {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  padding: 20px 0px;\n  padding-left: 10px;\n  color: #1A2334;\n  cursor: pointer;\n}\n\n.menu li.selected {\n  background: #FFFFFF;\n  font-weight: 600;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n}\n\na {\n  color: #1A2334;\n  text-decoration: none;\n}\n\n.menu li.selected > a {\n  color: #0097F9;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.bottom {\n  padding: 1%;\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  width: calc(100% - 15%);\n  border-top: 1px solid #EAEAEA;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.main_div > div:last-child {\n  width: 80%;\n  margin-left: 24%;\n  /*overflow-y: scroll;*/\n  padding-right: 1%;\n  margin-bottom: 70px;\n}\n\n.ellipse {\n  background: #F0EFEF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  width: 19px;\n  height: 19px;\n  padding: 0px 7px;\n  border-radius: 50%;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  /* identical to box height, or 100% */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.blue_line {\n  border-top: 1px solid #0097F9;\n  width: 22px;\n  display: inline-block;\n  margin: 0px 7px;\n  position: relative;\n  top: -4px;\n}\n\n.blue_settings {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.bold_settings {\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  margin-bottom: 8px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings1 {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 8px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex1 {\n  display: flex;\n  margin-top: 10px;\n}\n\n.sep_line {\n  margin-left: 65px;\n  border-bottom: 1px solid  #C4C4C4;\n  margin-bottom: 16px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 12px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: #ccc;*/\n  -webkit-transition: .4s;\n  border: 1px solid #BDBABA;\n  box-sizing: border-box;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: -6px;\n  bottom: -4px;\n  background-color: #BDBABA;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  /*background-color: #2196F3;*/\n}\n\ninput:focus + .slider {\n  /*box-shadow: 0 0 1px #2196F3;*/\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n  background-color: #19C83F;\n}\n\ninput:checked + .slider {\n  border: 1px solid #BDBABA;\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.toggle {\n  display: flex;\n  margin-left: auto;\n  padding-right: 50px;\n  padding-top: 30px;\n}\n\n.toggle.s_toggle {\n  padding-top: 16px;\n}\n\n.off {\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  position: relative;\n  top: -4px;\n  margin: 0px 10px;\n}\n\n.on {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 0px 10px;\n  letter-spacing: 0.01em;\n  position: relative;\n  top: -4px;\n  color: #19C83F;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.settings_label {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-right: 40px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-left: -10px;\n}\n\n.checkbox {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n  cursor: pointer;\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #fff;\n  background: #109CF1;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  padding: 2px;\n  width: 0.5em;\n  height: 0.5em;\n  border: none;\n  border-radius: 3px;\n  transform-origin: bottom left;\n}\n\n.checkbox__input input:checked\n+ .checkbox__control svg {\n  transform: scale(1);\n}\n\n.checkbox__input input:checked\n+ .checkbox__control {\n  border: none;\n}\n\n.flex1 > div:nth-child(2) {\n  width: 60%;\n}\n\n.input {\n  box-sizing: border-box;\n  background: #F5F5F5;\n  border-radius: 2px;\n  width: 336px;\n  height: 35px;\n  margin-bottom: 16px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  border: none;\n  outline: none;\n  text-indent: 10px;\n  color: #323C47;\n}\n\n.input::-moz-placeholder {\n  color: #8e939a;\n}\n\n.input:-ms-input-placeholder {\n  color: #8e939a;\n}\n\n.input::placeholder, option[disabled] {\n  color: #8e939a;\n}\n\n.flex1 > div:first-child {\n  width: 65px;\n}\n\n.size_sm {\n  width: 18px;\n  height: auto;\n  position: relative;\n  top: 5px;\n  margin-left: 6px;\n}\n\n.wid80 {\n  width: 30%;\n}\n\n.wid20 {\n  width: 10%;\n}\n\n.size_sm1 {\n  width: 25px;\n  height: auto;\n  position: relative;\n  top: 5px;\n  margin-left: 6px;\n}\n\n.wrapper {\n  position: relative;\n  margin: 1rem 0px;\n  width: 90%;\n}\n\n.visually-hidden {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  position: relative;\n  letter-spacing: 0.01em;\n  top: 10px;\n  margin-left: 10px;\n  color: #000000;\n}\n\n.position {\n  position: relative;\n  top: -7px;\n  margin-left: 10px;\n}\n\n.range {\n  position: relative;\n  width: 458px;\n  height: 5px;\n}\n\n.range input {\n  width: 100%;\n  position: absolute;\n  top: 2px;\n  height: 0;\n  -webkit-appearance: none;\n}\n\n.range input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 12px;\n  height: 12px;\n  margin: -8px 0 0;\n  border-radius: 50%;\n  background: #109CF1;\n  cursor: pointer;\n  border: 0 !important;\n}\n\n.range input::-moz-range-thumb {\n  width: 18px;\n  height: 18px;\n  margin: -8px 0 0;\n  border-radius: 50%;\n  background: #37adbf;\n  cursor: pointer;\n  border: 0 !important;\n}\n\n.range input::-ms-thumb {\n  width: 18px;\n  height: 18px;\n  margin: -8px 0 0;\n  border-radius: 50%;\n  background: #37adbf;\n  cursor: pointer;\n  border: 0 !important;\n}\n\n.range input::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 5px;\n  cursor: pointer;\n  background: linear-gradient(180deg, #C4C4C4 0%, rgba(196, 196, 196, 0) 100%);\n}\n\n.range input::-moz-range-track {\n  width: 100%;\n  height: 2px;\n  cursor: pointer;\n  background: #b2b2b2;\n}\n\n.range input::-ms-track {\n  width: 100%;\n  height: 2px;\n  cursor: pointer;\n  background: #b2b2b2;\n}\n\n.range input:focus {\n  background: none;\n  outline: none;\n}\n\n.range input::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n.range-labels {\n  margin: 18px -41px 0;\n  padding: 0;\n  list-style: none;\n}\n\n.range-labels li {\n  position: relative;\n  float: left;\n  width: 90.25px;\n  text-align: center;\n  color: #b2b2b2;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.range-labels li::before {\n  position: absolute;\n  top: -25px;\n  right: 0;\n  left: 0;\n  content: \"\";\n  margin: 0 auto;\n  width: 9px;\n  height: 9px;\n  background: #b2b2b2;\n  border-radius: 50%;\n}\n\n.range-labels .active {\n  color: #37adbf;\n}\n\n.range-labels .selected::before {\n  background: #37adbf;\n}\n\n.range-labels .active.selected::before {\n  display: none;\n}\n\n.span1 {\n  width: 21px;\n  height: 21px;\n  background: #2F57FF;\n  margin: auto;\n}\n\n.span2 {\n  width: 21px;\n  height: 21px;\n  background: #5D7CFF;\n  margin: auto;\n}\n\n.span3 {\n  width: 21px;\n  height: 21px;\n  background: #A3B4FF;\n  margin: auto;\n}\n\n.span4 {\n  width: 21px;\n  height: 21px;\n  background: #B9C7FF;\n  margin: auto;\n}\n\n.span5 {\n  width: 21px;\n  height: 21px;\n  background: #D1DAFF;\n  margin: auto;\n}\n\n.span6 {\n  width: 21px;\n  height: 21px;\n  background: #DADADA;\n  margin: auto;\n}\n\n.pl20 {\n  margin-top: 20px;\n}\n\n.range-labels li {\n  display: flex;\n  justify-content: center;\n}\n\n.span11 {\n  width: 18px;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 15px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n}\n\n.span12 {\n  width: 18px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n}\n\n.span13 {\n  width: 18px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n}\n\n.span14 {\n  width: 18px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n}\n\n.span15 {\n  width: 18px;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 20px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n}\n\n.span16 {\n  width: 18px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n}\n\n.slider1 {\n  margin: 4em 0;\n  display: flex;\n  margin-bottom: 20px;\n}\n\n.startyear,\n.endyear {\n  float: left;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 15px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n}\n\n.endyear {\n  text-align: left;\n}\n\n.setyear {\n  position: absolute;\n  top: -2.5em;\n  left: 50%;\n  width: 60px;\n  height: 1em;\n  text-align: center;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 15px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  white-space: nowrap;\n}\n\n.range1 {\n  position: relative;\n  float: left;\n  width: 70%;\n  padding: 0 0.9375rem;\n}\n\n.range1 input[type=range] {\n  -webkit-appearance: none;\n  display: block;\n  width: 100%;\n  height: 10px;\n  padding: 0;\n  background: linear-gradient(180deg, #C4C4C4 0%, rgba(196, 196, 196, 0) 100%);\n  border-radius: 10px;\n  box-sizing: content-box;\n}\n\n.range1 input[type=range]:focus {\n  outline: none;\n}\n\n.range1 input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background: #109CF1;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.top_position {\n  position: relative;\n  top: -15px;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.dropbtn {\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  min-width: 200px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.white_div {\n  padding: 10px;\n  background-color: #fff;\n}\n\n.white_div > span {\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 14px;\n  width: calc((200px - 20px) / 3);\n  display: inline-block;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  cursor: pointer;\n}\n\n.white_div > span.default {\n  color: #D63A1B;\n}\n\n.div_two {\n  display: flex;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #C4C4C4;\n}\n\n.div_two > div:first-child {\n  width: 23.15px;\n  height: 23.15px;\n  border-radius: 50%;\n  background: #FE30A8;\n}\n\n.div_two > div:nth-child(2) {\n  font-weight: 400;\n  width: 50%;\n  font-size: 9px;\n  line-height: 12px;\n  letter-spacing: 0.01em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000000;\n}\n\n.grey_button {\n  font-weight: 400;\n  font-size: 9px;\n  line-height: 12px;\n  letter-spacing: 0.01em;\n  width: 41.97px;\n  height: 21.71px;\n  background: #E2E2E2;\n  border-radius: 5px;\n  color: #000000;\n}\n\n.div_3 {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.div_3 > div {\n  width: calc(100% / 4);\n}\n\n.color1 {\n  width: 29.67px;\n  height: 29.67px;\n  background: #FACA03;\n  border-radius: 50%;\n  margin: 5px;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n}\n\n.color2 {\n  width: 29.67px;\n  height: 29.67px;\n  border-radius: 50%;\n  margin: 5px;\n  background: #77C6F7;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n}\n\n.color3 {\n  width: 29.67px;\n  height: 29.67px;\n  margin: 5px;\n  background: #00D38B;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n}\n\n.color4 {\n  width: 29.67px;\n  height: 29.67px;\n  border-radius: 50%;\n  margin: 5px;\n  background: #BD23D9;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n}\n\n.color5 {\n  width: 29.67px;\n  height: 29.67px;\n  margin: 5px;\n  background: #ABAEB1;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n}\n\n.color6 {\n  width: 29.67px;\n  margin: 5px;\n  height: 29.67px;\n  border-radius: 50%;\n  background: #D63A1B;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n}\n\n.color7 {\n  width: 29.67px;\n  margin: 5px;\n  height: 29.67px;\n  border-radius: 50%;\n  color: #ADADAD;\n  padding: 4px 8px;\n  border: 1px dashed #ADADAD;\n  font-size: 22px;\n  cursor: pointer;\n}\n\n/*extra*/\n\n.scrool1 {\n  overflow-y: scroll;\n  height: calc(100vh - 218px);\n}\n\n.no-pointer-class {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.has-value label {\n  transform: translateY(-5px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvY29udGVuLWxpYnJhcnktc2V0dGluZy9jb250ZW4tbGlicmFyeS1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLG9DQUFvQztBQUN4Qzs7QUFFRTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ25COztBQUNFO0VBQ0UsYUFBYTtBQUVqQjs7QUFBRTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBR25COztBQURFO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFJbkI7O0FBQUc7RUFDSSxhQUFhO0FBR3BCOztBQUFFO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUdwQjs7QUFERTtFQUNFLGVBQWU7QUFJbkI7O0FBREU7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBSXBCOztBQUZFO0VBQ0EsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBS2pCOztBQUhFO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLHNCQUFzQjtFQUN0QixjQUFjO0FBTWhCOztBQUpFO0VBQ0UsZ0JBQWdCO0FBT3BCOztBQUxFO0VBQ0UsZ0JBQWdCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7QUFRakI7O0FBTkU7RUFDRSxtQkFB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ZUFBZTtFQUNmLGVBQWU7QUFzRWY7O0FBcEVDLFFBQUE7O0FBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBdUU3Qjs7QUFyRUM7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW1CO0FBd0V0Qjs7QUF0RUE7RUFFSywyQkFBMkI7QUF3RWhDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvY29udGVuLWxpYnJhcnktc2V0dGluZy9jb250ZW4tbGlicmFyeS1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5mbGV4MntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5ibHVlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogOXB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiA4cHggMTlweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIFxuICAgaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cyxidXR0b246Zm9jdXN7XG4gICAgICAgb3V0bGluZTogbm9uZTtcbiAgIH1cbiAgXG4gIC53OTh7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC53OTgxe1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgfVxuICBcbiAgLm1haW5fZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAubWFpbl9kaXY+ZGl2OmZpcnN0LWNoaWxke1xuICB3aWR0aDogMTUlO1xuICBiYWNrZ3JvdW5kOiAjRjNGNEY2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRENEQ0RDO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDg5dmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICAuc2V0dGluZ3N7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzFBMjMzNDtcbiAgfVxuICAubWVudSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAubWVudSBsaXtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzFBMjMzNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5tZW51IGxpLnNlbGVjdGVke1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICB9XG4gIGF7XG4gICAgY29sb3I6ICMxQTIzMzQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLm1lbnUgbGkuc2VsZWN0ZWQ+YXtcbiAgICAgIFxuICBjb2xvcjogIzAwOTdGOTtcbiAgfVxuICAuZGlzcGxheXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuYm90dG9te1xuICAgIHBhZGRpbmc6IDElO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTUlKTtcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRUFFQUVBO1xuICBib3gtc2hhZG93OiA0cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB9XG4gIC5tcjEwe1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAubWFpbl9kaXY+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMjQlO1xuICAgXG4gICAgLypvdmVyZmxvdy15OiBzY3JvbGw7Ki9cbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICB9XG4gIC5lbGxpcHNle1xuICAgIGJhY2tncm91bmQ6ICNGMEVGRUY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMTlweDtcbiAgcGFkZGluZzogMHB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTAwJSAqL1xuICBcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgXG4gIGNvbG9yOiAjMDA5N0Y5O1xuICBcbiAgfVxuICAuYmx1ZV9saW5le1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA5N0Y5O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDBweCA3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTRweDtcbiAgfVxuICAuYmx1ZV9zZXR0aW5nc3tcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwOTdGOTtcbiAgfVxuICAuYm9sZF9zZXR0aW5nc3tcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuYmxhY2tfc2V0dGluZ3MxIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuYmxhY2tfc2V0dGluZ3N7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgXG4gIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC5mbGV4MXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBcbiAgLnNlcF9saW5le1xuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgI0M0QzRDNDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG4gIC5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICB9XG4gIFxuICAuc3dpdGNoIGlucHV0IHsgXG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjYzsqL1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCREJBQkE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIC5zbGlkZXI6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgbGVmdDogLTZweDtcbiAgICBib3R0b206IC00cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkFCQTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7Ki9cbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICAvKmJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMzsqL1xuICB9XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTlDODNGO1xuICB9XG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCREJBQkE7XG4gIH1cbiAgLnNsaWRlci5yb3VuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgfVxuICBcbiAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAudG9nZ2xle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICBtYXJnaW4tbGVmdDogYXV0bztcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgICBwYWRkaW5nLXRvcDogMzBweDsgXG4gIH1cbiAgLnRvZ2dsZS5zX3RvZ2dsZXtcbiAgICBcbiAgICBwYWRkaW5nLXRvcDogMTZweDsgXG4gIH1cbiAgLm9mZntcbiAgICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIH1cbiAgLm9ue1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xuICBjb2xvcjogIzE5QzgzRjtcbiAgfVxuICAuaGlkZGVue1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAuc2V0dGluZ3NfbGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICB9XG4gIC5jaGVja2JveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gICAgZ3JpZC1nYXA6IDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jaGVja2JveF9faW5wdXQgaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDBlbTtcbiAgICBoZWlnaHQ6IDBlbTtcbiAgfVxuLmNoZWNrYm94X19jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4xZW07XG5ib3JkZXI6IDFweCBzb2xpZCAjQkJCMkIyO1xuO1xufVxuLmNoZWNrYm94X19pbnB1dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2hlY2tib3hcIjtcbn1cbi5jaGVja2JveF9fY29udHJvbCBzdmcge1xuICAgIGNvbG9yOiAgI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMTA5Q0YxO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluIDI1bXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHN0cm9rZS13aWR0aDo0O1xuICBwYWRkaW5nOjJweDtcbiAgICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG4gYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xufVxuLmNoZWNrYm94X19pbnB1dCBpbnB1dDpjaGVja2VkXG4gKyAuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZFxuICsgLmNoZWNrYm94X19jb250cm9sIHtcbmJvcmRlcjogbm9uZTtcbn1cbiAgLmZsZXgxPmRpdjpudGgtY2hpbGQoMil7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICAuaW5wdXR7XG4gIFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgd2lkdGg6IDMzNnB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBib3JkZXI6bm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC5pbnB1dDo6cGxhY2Vob2xkZXIgLCBvcHRpb25bZGlzYWJsZWRde1xuICBjb2xvcjojOGU5MzlhO1xuICB9XG4gIC5mbGV4MT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDY1cHg7XG59XG5cbi8vICBleHRyYSBsYXlvdXRcbi5zaXplX3Nte1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuLndpZDgwe1xuICAgIHdpZHRoOiAzMCU7XG59XG4ud2lkMjB7XG4gICAgd2lkdGg6IDEwJTtcbn1cbi5zaXplX3NtMXtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIH1cbiAgLndyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDFyZW0gMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgXG4gXG4gIC52aXN1YWxseS1oaWRkZW4geyBcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIHRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBcbiAgfVxuICAucG9zaXRpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTdweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5yYW5nZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ1OHB4O1xuICBoZWlnaHQ6IDVweDtcbn1cbi5yYW5nZSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICBoZWlnaHQ6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5yYW5nZSBpbnB1dDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbjogLThweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzEwOUNGMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbi5yYW5nZSBpbnB1dDo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbjogLThweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzM3YWRiZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbi5yYW5nZSBpbnB1dDo6LW1zLXRodW1iIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luOiAtOHB4IDAgMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMzdhZGJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuLnJhbmdlIGlucHV0Ojotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNDNEM0QzQgMCUsIHJnYmEoMTk2LCAxOTYsIDE5NiwgMCkgMTAwJSk7XG59XG4ucmFuZ2UgaW5wdXQ6Oi1tb3otcmFuZ2UtdHJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2IyYjJiMjtcbn1cbi5yYW5nZSBpbnB1dDo6LW1zLXRyYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNiMmIyYjI7XG59XG4ucmFuZ2UgaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnJhbmdlIGlucHV0OjotbXMtdHJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnJhbmdlLWxhYmVscyB7XG4gIG1hcmdpbjogMThweCAtNDFweCAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnJhbmdlLWxhYmVscyBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA5MC4yNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYjJiMmIyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYW5nZS1sYWJlbHMgbGk6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDlweDtcbiAgYmFja2dyb3VuZDogI2IyYjJiMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJhbmdlLWxhYmVscyAuYWN0aXZlIHtcbiAgY29sb3I6ICMzN2FkYmY7XG59XG4ucmFuZ2UtbGFiZWxzIC5zZWxlY3RlZDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzM3YWRiZjtcbn1cbi5yYW5nZS1sYWJlbHMgLmFjdGl2ZS5zZWxlY3RlZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zcGFuMXtcbiAgd2lkdGg6IDIxcHg7XG5oZWlnaHQ6IDIxcHg7XG5iYWNrZ3JvdW5kOiAjMkY1N0ZGO1xubWFyZ2luOiBhdXRvO1xufVxuIC5zcGFuMntcbiAgd2lkdGg6IDIxcHg7XG5oZWlnaHQ6IDIxcHg7XG5iYWNrZ3JvdW5kOiAjNUQ3Q0ZGO1xubWFyZ2luOiBhdXRvO1xufVxuIC5zcGFuM3tcbiAgd2lkdGg6IDIxcHg7XG5oZWlnaHQ6IDIxcHg7XG5iYWNrZ3JvdW5kOiAjQTNCNEZGO1xubWFyZ2luOiBhdXRvO1xufVxuIC5zcGFuNHtcbiAgd2lkdGg6IDIxcHg7XG5oZWlnaHQ6IDIxcHg7XG5iYWNrZ3JvdW5kOiAjQjlDN0ZGO1xubWFyZ2luOiBhdXRvO1xufVxuIC5zcGFuNXtcbiAgd2lkdGg6IDIxcHg7XG5oZWlnaHQ6IDIxcHg7XG5iYWNrZ3JvdW5kOiAjRDFEQUZGO1xubWFyZ2luOiBhdXRvO1xufVxuICAuc3BhbjZ7XG4gIHdpZHRoOiAyMXB4O1xuaGVpZ2h0OiAyMXB4O1xuYmFja2dyb3VuZDogI0RBREFEQTtcbm1hcmdpbjogYXV0bztcbn1cbi5wbDIwe1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vLyBmb250IHJhbmdlIHNsaWRlclxuLnJhbmdlLWxhYmVscyBsaXtcbiAgZGlzcGxheTogZmxleDtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zcGFuMTF7XG4gIHdpZHRoOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxMXB4O1xubGluZS1oZWlnaHQ6IDE1cHg7XG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xubGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbmNvbG9yOiAjMDAwMDAwO1xuXG59XG4uc3BhbjEye1xuICB3aWR0aDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbmZvbnQtc2l6ZTogMTJweDtcbmxpbmUtaGVpZ2h0OiAxNnB4O1xuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbmxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5jb2xvcjogIzAwMDAwMDtcblxufVxuLnNwYW4xM3tcbiAgd2lkdGg6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDEzcHg7XG5saW5lLWhlaWdodDogMThweDtcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5sZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuY29sb3I6ICMwMDAwMDA7XG5cbn1cbi5zcGFuMTR7XG4gIHdpZHRoOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDE5cHg7XG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xubGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbmNvbG9yOiAjMDAwMDAwO1xuXG59XG4uc3BhbjE1e1xuICB3aWR0aDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbmZvbnQtc2l6ZTogMTVweDtcbmxpbmUtaGVpZ2h0OiAyMHB4O1xuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbmxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5jb2xvcjogIzAwMDAwMDtcblxufVxuLnNwYW4xNntcbiAgd2lkdGg6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDE2cHg7XG5saW5lLWhlaWdodDogMjJweDtcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5sZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuY29sb3I6ICMwMDAwMDA7XG5cbn1cbi8vIHJhbmdlIHNsaWRlciAyXG5cblxuLnNsaWRlcjEge1xuXHRtYXJnaW46IDRlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnN0YXJ0eWVhcixcbi5lbmR5ZWFyIHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5mb250LXNpemU6IDExcHg7XG5saW5lLWhlaWdodDogMTVweDtcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbmxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbmNvbG9yOiAjMDAwMDAwO1xuXG59XG4uZW5keWVhciB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2V0eWVhciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMi41ZW07XG5cdGxlZnQ6IDUwJTtcblx0d2lkdGg6IDYwcHg7XG5cdGhlaWdodDogMWVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5mb250LXNpemU6IDExcHg7XG5saW5lLWhlaWdodDogMTVweDtcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbmxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbmNvbG9yOiAjMDAwMDAwO1xuXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucmFuZ2UxIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRmbG9hdDogbGVmdDtcblx0d2lkdGg6IDcwJTtcblx0cGFkZGluZzogMCAwLjkzNzVyZW07XG59XG4ucmFuZ2UxIGlucHV0W3R5cGU9cmFuZ2VdIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTBweDtcblx0cGFkZGluZzogMDtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0M0QzRDNCAwJSwgcmdiYSgxOTYsIDE5NiwgMTk2LCAwKSAxMDAlKTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG59XG4ucmFuZ2UxIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5yYW5nZTEgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHR3aWR0aDogMTVweDtcbmhlaWdodDogMTVweDtcbmJvcmRlci1yYWRpdXM6IDUwJTtcbmJhY2tncm91bmQ6ICMxMDlDRjE7XG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLnRvcF9wb3NpdGlvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXB4O1xufVxuLnBvaW50ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kcm9wYnRuIHtcblxuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XG4ud2hpdGVfZGl2e1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLndoaXRlX2Rpdj5zcGFue1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogY2FsYygoMjAwcHggLSAyMHB4KSAvIDMpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud2hpdGVfZGl2PnNwYW4uZGVmYXVsdHtcbiAgY29sb3I6ICNENjNBMUI7XG59XG4uZGl2X3R3b3tcbmRpc3BsYXk6IGZsZXg7XG5tYXJnaW46IDEwcHggMHB4O1xucGFkZGluZy1ib3R0b206IDEwcHg7XG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI0M0QzRDNDs7XG59XG5cbi5kaXZfdHdvPmRpdjpmaXJzdC1jaGlsZHtcbiAgd2lkdGg6IDIzLjE1cHg7XG5oZWlnaHQ6IDIzLjE1cHg7XG5ib3JkZXItcmFkaXVzOjUwJTtcbmJhY2tncm91bmQ6ICNGRTMwQTg7XG59XG4uZGl2X3R3bz5kaXY6bnRoLWNoaWxkKDIpe1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogNTAlO1xuZm9udC1zaXplOiA5cHg7XG5saW5lLWhlaWdodDogMTJweDtcbmxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuY29sb3I6ICMwMDAwMDA7XG59XG4uZ3JleV9idXR0b257XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDlweDtcbmxpbmUtaGVpZ2h0OiAxMnB4O1xubGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbndpZHRoOiA0MS45N3B4O1xuaGVpZ2h0OiAyMS43MXB4O1xuYmFja2dyb3VuZDogI0UyRTJFMjtcbmJvcmRlci1yYWRpdXM6IDVweDtcbmNvbG9yOiAjMDAwMDAwO1xufVxuLmRpdl8ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZGl2XzM+ZGl2e1xud2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xufVxuLmNvbG9yMXtcbiAgd2lkdGg6IDI5LjY3cHg7XG5oZWlnaHQ6IDI5LjY3cHg7XG5iYWNrZ3JvdW5kOiAjRkFDQTAzO1xuYm9yZGVyLXJhZGl1czogNTAlO1xubWFyZ2luOiA1cHg7XG5jdXJzb3I6IHBvaW50ZXI7XG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmNvbG9yMntcbiAgd2lkdGg6IDI5LjY3cHg7XG5oZWlnaHQ6IDI5LjY3cHg7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5tYXJnaW46IDVweDtcbmJhY2tncm91bmQ6ICM3N0M2Rjc7XG5jdXJzb3I6IHBvaW50ZXI7XG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmNvbG9yM3tcbiAgd2lkdGg6IDI5LjY3cHg7XG5oZWlnaHQ6IDI5LjY3cHg7XG5tYXJnaW46IDVweDtcbmJhY2tncm91bmQ6ICMwMEQzOEI7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5jdXJzb3I6IHBvaW50ZXI7XG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmNvbG9yNHtcbiAgd2lkdGg6IDI5LjY3cHg7XG5oZWlnaHQ6IDI5LjY3cHg7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5tYXJnaW46IDVweDtcbmJhY2tncm91bmQ6ICNCRDIzRDk7XG5jdXJzb3I6IHBvaW50ZXI7XG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmNvbG9yNXtcbiAgd2lkdGg6IDI5LjY3cHg7XG5oZWlnaHQ6IDI5LjY3cHg7XG5tYXJnaW46IDVweDtcbmJhY2tncm91bmQ6ICNBQkFFQjE7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5jdXJzb3I6IHBvaW50ZXI7XG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmNvbG9yNntcbiAgd2lkdGg6IDI5LjY3cHg7XG4gIG1hcmdpbjogNXB4O1xuaGVpZ2h0OiAyOS42N3B4O1xuYm9yZGVyLXJhZGl1czogNTAlO1xuYmFja2dyb3VuZDogI0Q2M0ExQjtcbmN1cnNvcjogcG9pbnRlcjtcbmJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG4uY29sb3I3e1xuICB3aWR0aDogMjkuNjdweDtcbiAgbWFyZ2luOiA1cHg7XG5oZWlnaHQ6IDI5LjY3cHg7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5jb2xvcjogI0FEQURBRDtcbnBhZGRpbmc6IDRweCA4cHg7XG5ib3JkZXI6IDFweCBkYXNoZWQgI0FEQURBRDtcbmZvbnQtc2l6ZTogMjJweDtcbmN1cnNvcjogcG9pbnRlcjtcbn1cbiAvKmV4dHJhKi9cbiAuc2Nyb29sMXtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMThweCk7XG4gfVxuIC5uby1wb2ludGVyLWNsYXNzIHtcbiAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICBwb2ludGVyLWV2ZW50czpub25lO1xufVxuLmhhcy12YWx1ZSB7XG4gbGFiZWwge1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/conten-library-setting/conten-library-setting.component.ts":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/conten-library-setting/conten-library-setting.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: ContenLibrarySettingComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupContenLibrarySettingContenLibrarySettingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContenLibrarySettingComponent", function () {
        return ContenLibrarySettingComponent;
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


      var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/institute-setting-service/institute-setting.service */
      "./src/app/services/institute-setting-service/institute-setting.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/common-service */
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

      var ContenLibrarySettingComponent =
      /** @class */
      function () {
        var ContenLibrarySettingComponent = /*#__PURE__*/function () {
          function ContenLibrarySettingComponent(commonService, services, auth, apiService, _http) {
            _classCallCheck(this, ContenLibrarySettingComponent);

            this.commonService = commonService;
            this.services = services;
            this.auth = auth;
            this.apiService = apiService;
            this._http = _http;
            this.biometricSetting = 0;
            this.currentSection = 'section1';
            this.disabled = true;
            this.enable_vdoCipher_feature = false;
            this.enable_vimeo_feature = false;
            this.fontSize = 10;
            this.is_video_public = true;
            this.isLangInst = false;
            this.schoolModel = false;
            this.show_vdocipher_video_ready_sms_to_admin = false;
            this.showOfflineVideoSetting = false;
            this.showSettings = true;
            this.test_series_feature = '0';
            this.vimeo_account_plan = false;
            this.settingDetails = {
              "bandwidth_threshold_alerts": 1,
              "institute_id": 100058,
              "is_video_public": true,
              "storage_capacity_threshold_alerts": 1,
              "vdocipher_bandwidth_threshold": 1,
              "vdocipher_storage_capacity_threshold": 1,
              "video_watch_limit_per_video": 1,
              "video_watermark": "Megha",
              "watermark_color": "#2680eb",
              "watermark_font_size": 10,
              "watermark_opacity": 1,
              "watermark_text_moving_interval": 1,
              watermark_email: '',
              watermark_name: '',
              watermark_phone: ''
            };
            this.contentSetting = {
              "is_video_public": 'Y',
              "vDOCipher_bandwidth_threshold": 1,
              "vDOCipher_storage_capacity_threshold": 1,
              "video_watermark": "Megha",
              "watermark_color": "#2680eb",
              "watermark_font_size": 10,
              "watermark_opacity": 1,
              "watermark_text_moving_interval": 1,
              allotted_vdocipher_bandwidth: '',
              allotted_vdocipher_storage_capacity: '',
              enable_topic_sorting_priority_based_study_material: '',
              enable_vdocipher_feature: '',
              enable_vimeo_feature: '',
              notification_for_studymaterial_upload: '',
              student_study_material_visibility: '',
              vdocipher_client_account_api_key: '',
              vdocipher_video_ready_sms_to_admin: '',
              vdocipher_watch_multiplier: '',
              vimeo_access_token: '',
              vimeo_allocated_storage: '',
              vimeo_consumed_storage: '',
              vimeo_storage_capacity_threshold: '',
              //   "storage_capacity_threshold_alerts": 1,
              //   // "bandwidth_threshold_alerts": 1,
              //  // "video_watch_limit_per_video": 1,
              vimeo_video_download_visibility_filemanager: {
                student: '',
                teacher: '',
                admin: '',
                openApp: ''
              },
              vimeo_video_download_visibility_studymaterial: {
                student: '',
                teacher: '',
                admin: '',
                openApp: ''
              },
              student_file_share_notifn: {
                student: ''
              },
              //vimeo_plan:'-1',
              dynamic_watermark_text: '',
              institute_id: sessionStorage.getItem('institute_id')
            }; //-------------------opacity value and font-size--------------------------------------//

            this.progress = 1;
          }

          _createClass(ContenLibrarySettingComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this10 = this;

              this.auth.schoolModel.subscribe(function (res) {
                _this10.schoolModel = false;

                if (res) {
                  _this10.schoolModel = true;
                }
              }); //this.biometricSetting = Number(sessionStorage.getItem('biometric_attendance_feature'));

              this.checkInstitutionType();
              this.getSettingFromServer();
              this.auth.currentInstituteId.subscribe(function (id) {
                _this10.institute_id = id; //this.getDataUsedInCourseList();
              });
              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this10.isLangInstitue = true;
                } else {
                  _this10.isLangInstitue = false;
                }
              });
              this.enable_vdoCipher_feature = sessionStorage.getItem('enable_vdoCipher_feature') == '1' ? true : false;
              this.enable_vimeo_feature = sessionStorage.getItem('enable_vimeo_feature') == '1' ? true : false;

              if (sessionStorage.getItem('enable_vdoCipher_feature') == '1' && sessionStorage.getItem('enable_vimeo_feature') == '1') {
                this.show_vdocipher_video_ready_sms_to_admin = true;
              }
            } //-------------------menu switch--------------------------------------//

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
            } //-------------------covert multiple checkbox into binary--------------------------------------//

          }, {
            key: "getSumOfTableField",
            value: function getSumOfTableField(data) {
              var total = 0;

              for (var i = 0; i < Object.keys(data).length; i++) {
                if (Object.keys(data)[i] == 'student' && data.student == true) {
                  total = total + 2;
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
            } //-------------------data to send--------------------------------------//

          }, {
            key: "constructJsonToSend",
            value: function constructJsonToSend() {
              var temp = [];
              this.settingDetails.watermark_name ? temp.push('name') : '';
              this.settingDetails.watermark_phone ? temp.push('phone') : '';
              this.settingDetails.watermark_email ? temp.push('email') : '';
              temp = temp.join(',');

              if (temp == '' || temp == null) {
                temp = 'NA';
              }

              var obj = Object.assign({}, this.contentSetting);
              obj.institute_id = Number(this.contentSetting.institute_id);
              obj.enable_vdocipher_feature = this.convertBoolenToNumber(this.contentSetting.enable_vdocipher_feature);
              obj.vdocipher_client_account_api_key = this.contentSetting.vdocipher_client_account_api_key;
              obj.allotted_vdocipher_storage_capacity = this.contentSetting.allotted_vdocipher_storage_capacity;
              obj.allotted_vdocipher_bandwidth = this.contentSetting.allotted_vdocipher_bandwidth;
              obj.enable_vimeo_feature = this.convertBoolenToNumber(this.contentSetting.enable_vimeo_feature);
              obj.vimeo_allocated_storage = this.contentSetting.vimeo_allocated_storage;
              obj.vimeo_consumed_storage = this.contentSetting.vimeo_consumed_storage;
              obj.vimeo_access_token = this.contentSetting.vimeo_access_token;
              obj.vdocipher_watch_multiplier = Number(this.contentSetting.vdocipher_watch_multiplier);
              obj.vimeo_video_download_visibility_filemanager = this.getSumOfTableField(this.contentSetting.vimeo_video_download_visibility_filemanager);
              obj.vimeo_video_download_visibility_studymaterial = this.getSumOfTableField(this.contentSetting.vimeo_video_download_visibility_studymaterial);
              obj.vimeo_storage_capacity_threshold = this.contentSetting.vimeo_storage_capacity_threshold;
              obj.student_study_material_visibility = this.convertBoolenToNumber(this.contentSetting.student_study_material_visibility);
              obj.notification_for_studymaterial_upload = this.convertBoolenToNumber(this.contentSetting.notification_for_studymaterial_upload);
              obj.enable_student_app_offline_video_download = this.convertBoolenToNumber(this.showOfflineVideoSetting);
              obj.vdocipher_video_ready_sms_to_admin = this.convertBoolenToNumber(this.contentSetting.vdocipher_video_ready_sms_to_admin);
              obj.enable_topic_sorting_priority_based_study_material = this.convertBoolenToNumber(this.contentSetting.enable_topic_sorting_priority_based_study_material);
              obj.student_file_share_notifn = this.getSumOfTableField(this.contentSetting.student_file_share_notifn);
              obj.video_watermark = this.settingDetails.video_watermark;
              obj.is_video_public = this.settingDetails.is_video_public;
              obj.watermark_opacity = this.settingDetails.watermark_opacity;
              obj.watermark_color = this.settingDetails.watermark_color;
              obj.watermark_font_size = this.settingDetails.watermark_font_size;
              obj.watermark_text_moving_interval = this.settingDetails.watermark_text_moving_interval;
              obj.vDOCipher_bandwidth_threshold = this.settingDetails.vDOCipher_bandwidth_threshold;
              obj.vDOCipher_storage_capacity_threshold = this.settingDetails.vDOCipher_storage_capacity_threshold;
              obj.dynamic_watermark_text = temp;
              return obj;
            } //-------------------check contact no pattern (comma seperator)--------------------------------------//

          }, {
            key: "checkContactNoPattern",
            value: function checkContactNoPattern(pattern) {
              var regExPattern = /^[0-9]+(,[0-9]+)*$/;

              if (!regExPattern.test(pattern)) {
                return false;
              } else {
                return true;
              }
            } //-------------------PUT content all data--------------------------------------//

          }, {
            key: "saveContentSettings",
            value: function saveContentSettings() {
              var _this11 = this;

              var dataToSend = {};
              dataToSend = this.constructJsonToSend();
              console.log(dataToSend);
              this.auth.showLoader();
              this.apiService.savePartialData(dataToSend).subscribe(function (res) {
                _this11.auth.hideLoader();

                _this11.commonService.showErrorMessage('success', '', "All your setting saved successfully");

                _this11.cancel();
              }, function (err) {
                _this11.auth.hideLoader();

                _this11.commonService.showErrorMessage('error', '', err.error.message);
              });
            } //-------------------Validation--------------------------------------//

          }, {
            key: "maxlenth",
            value: function maxlenth(data, limit) {
              if (data.length > limit) {
                this.services.showErrorMessage(this.services.toastTypes.info, '', "Please Enter upto" + " " + limit + " " + "character only");
              }
            }
          }, {
            key: "disjusdialContId",
            value: function disjusdialContId() {
              this.disabled = !this.disabled;
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this.settingDetails = {
                "bandwidth_threshold_alerts": 1,
                "institute_id": 100058,
                "is_video_public": true,
                "storage_capacity_threshold_alerts": 1,
                "vdocipher_bandwidth_threshold": 1,
                "vdocipher_storage_capacity_threshold": 1,
                "video_watch_limit_per_video": 1,
                "video_watermark": "Megha",
                "watermark_color": "#2680eb",
                "watermark_font_size": 10,
                "watermark_opacity": 1,
                "watermark_text_moving_interval": 1,
                watermark_email: '',
                watermark_name: '',
                watermark_phone: ''
              };
              this.contentSetting = {
                "is_video_public": 'Y',
                "vDOCipher_bandwidth_threshold": 1,
                "vDOCipher_storage_capacity_threshold": 1,
                "video_watermark": "Megha",
                "watermark_color": "#2680eb",
                "watermark_font_size": 10,
                "watermark_opacity": 1,
                "watermark_text_moving_interval": 1,
                allotted_vdocipher_bandwidth: '',
                allotted_vdocipher_storage_capacity: '',
                enable_topic_sorting_priority_based_study_material: '',
                enable_vdocipher_feature: '',
                enable_vimeo_feature: '',
                notification_for_studymaterial_upload: '',
                student_study_material_visibility: '',
                vdocipher_client_account_api_key: '',
                vdocipher_video_ready_sms_to_admin: '',
                vdocipher_watch_multiplier: '',
                vimeo_access_token: '',
                vimeo_allocated_storage: '',
                vimeo_consumed_storage: '',
                vimeo_storage_capacity_threshold: '',
                //   "storage_capacity_threshold_alerts": 1,
                //   // "bandwidth_threshold_alerts": 1,
                //  // "video_watch_limit_per_video": 1,
                vimeo_video_download_visibility_filemanager: {
                  student: '',
                  teacher: '',
                  admin: '',
                  openApp: ''
                },
                vimeo_video_download_visibility_studymaterial: {
                  student: '',
                  teacher: '',
                  admin: '',
                  openApp: ''
                },
                student_file_share_notifn: {
                  student: ''
                },
                //vimeo_plan:'-1',
                dynamic_watermark_text: '',
                institute_id: sessionStorage.getItem('institute_id')
              };
            } //-------------------check institute type--------------------------------------//

          }, {
            key: "checkInstitutionType",
            value: function checkInstitutionType() {
              var _this12 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this12.isLangInst = true;
                } else {
                  _this12.isLangInst = false;
                }
              });
            } //-------------------take set data from server--------------------------------------//

          }, {
            key: "fillJSONData",
            value: function fillJSONData(data) {
              if (data.vimeo_account_plan == 'Pro' || data.vimeo_account_plan == 'Business' || data.vimeo_account_plan == 'Premium') {
                this.vimeo_account_plan = true;
              }

              this.fillTableCheckboxValue(this.contentSetting.vimeo_video_download_visibility_filemanager, data.vimeo_video_download_visibility_filemanager);
              this.fillTableCheckboxValue(this.contentSetting.vimeo_video_download_visibility_studymaterial, data.vimeo_video_download_visibility_studymaterial);
              this.contentSetting.vimeo_storage_capacity_threshold = data.vimeo_storage_capacity_threshold;
              this.contentSetting.student_study_material_visibility = data.student_study_material_visibility;
              this.contentSetting.notification_for_studymaterial_upload = data.notification_for_studymaterial_upload;
              this.showOfflineVideoSetting = data.enable_student_app_offline_video_download == 1 || data.enable_stud_app_vimeo_offline_downloaded_video_visibility == 1 ? true : false;
              this.contentSetting.vdocipher_video_ready_sms_to_admin = data.vdocipher_video_ready_sms_to_admin;
              this.contentSetting.enable_topic_sorting_priority_based_study_material = data.enable_topic_sorting_priority_based_study_material;
              this.fillTableCheckboxValue(this.contentSetting.student_file_share_notifn, data.student_file_share_notifn);
            } //-------------------take set data from server--------------------------------------//

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
            } //-------------------take Setting  data from server--------------------------------------//

          }, {
            key: "getSettingFromServer",
            value: function getSettingFromServer() {
              var _this13 = this;

              this.auth.showLoader();
              this.apiService.getInstituteSettingFromServer().subscribe(function (res) {
                _this13.auth.hideLoader();

                _this13.test_series_feature = res.test_series_feature;

                _this13.fillJSONData(res);
              }, function (err) {
                _this13.auth.hideLoader();

                _this13.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "getSettingDetails",
            value: function getSettingDetails() {
              var _this14 = this;

              // <base_url>/instFileSystem/getStudyMaterialSetting/{institute_id}
              var url = "/api/v1/instFileSystem/getStudyMaterialSetting/" + this.institute_id;
              this.auth.showLoader();
              this.showSettings = true;

              this._http.getData(url).subscribe(function (res) {
                console.log("getSettingDetails", res);

                _this14.auth.hideLoader();

                _this14.settingDetails = res;
                _this14.is_video_public = _this14.settingDetails.is_video_public == 'Y' ? true : false;

                if (_this14.settingDetails.dynamic_watermark_text != null && _this14.settingDetails.dynamic_watermark_text != 'NA') {
                  var temp_details = _this14.settingDetails.dynamic_watermark_text.split(',');

                  for (var i = 0; i < 3; i++) {
                    if (temp_details[i] == 'name') {
                      _this14.settingDetails.watermark_name = true;
                    } else if (temp_details[i] == 'phone') {
                      _this14.settingDetails.watermark_phone = true;
                    } else if (temp_details[i] == 'email') {
                      _this14.settingDetails.watermark_email = true;
                    }
                  }
                }

                _this14.showSettings = false;
              }, function (err) {
                _this14.auth.hideLoader();
              });
            }
          }, {
            key: "opacityRange",
            value: function opacityRange(progress) {
              if (progress == 1) {
                this.progress = progress;
                this.settingDetails.watermark_opacity = 1;
              } else if (progress == 2) {
                this.progress = progress;
                this.settingDetails.watermark_opacity = 0.75;
              } else if (progress == 3) {
                this.progress = progress;
                this.settingDetails.watermark_opacity = 0.50;
              } else if (progress == 4) {
                this.progress = progress;
                this.settingDetails.watermark_opacity = 0.25;
              } else if (progress == 5) {
                this.progress = progress;
                this.settingDetails.watermark_opacity = 0.10;
              } else if (progress == 6) {
                this.progress = progress;
                this.settingDetails.watermark_opacity = 0.00;
              }
            } //-------------------opacity value and font-size--------------------------------------//

          }, {
            key: "FontSizeRange",
            value: function FontSizeRange(fontSize) {
              if (fontSize == 1) {
                this.fontSize = fontSize;
                this.settingDetails.watermark_font_size = 10;
              } else if (fontSize == 2) {
                this.fontSize = fontSize;
                this.settingDetails.watermark_font_size = 20;
              } else if (fontSize == 3) {
                this.fontSize = fontSize;
                this.settingDetails.watermark_font_size = 30;
              } else if (fontSize == 4) {
                this.fontSize = fontSize;
                this.settingDetails.watermark_font_size = 40;
              } else if (fontSize == 5) {
                this.fontSize = fontSize;
                this.settingDetails.watermark_font_size = 50;
              } else if (fontSize == 6) {
                this.fontSize = fontSize;
                this.settingDetails.watermark_font_size = 60;
              }
            } //-------------------opacity value and font-size--------------------------------------//

          }, {
            key: "displayColor",
            value: function displayColor() {
              document.getElementById('colorpicker').click();
            }
          }]);

          return ContenLibrarySettingComponent;
        }();

        ContenLibrarySettingComponent.ctorParameters = function () {
          return [{
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_4__["InstituteSettingService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }];
        };

        ContenLibrarySettingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-conten-library-setting',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./conten-library-setting.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/conten-library-setting/conten-library-setting.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./conten-library-setting.component.scss */
          "./src/app/components/course-module/data-setup/conten-library-setting/conten-library-setting.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_4__["InstituteSettingService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])], ContenLibrarySettingComponent);
        return ContenLibrarySettingComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/data-setup-home/data-setup-home.component.scss":
    /*!****************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/data-setup-home/data-setup-home.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleDataSetupDataSetupHomeDataSetupHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #334D6E;\n}\n\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n\n.breadcrumb-item > a {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 3.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #dfe5f0;\n  padding: 10px;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list li a span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334d6e;\n}\n\n.list li img {\n  padding: 0px 10px;\n}\n\n.add_master_tag {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\nselect {\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 500;\n  background-color: #f5f6f8;\n}\n\n.input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  /*background-color: #f5f6f8;\n*/\n}\n\n.magnifying-glass {\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 5px;\n}\n\n.header-input {\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 600;\n  width: 700px;\n  color: #61758e;\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  /*background-color: #f5f6f8;*/\n}\n\n.header-input::-moz-placeholder {\n  padding-left: 10px;\n}\n\n.header-input:-ms-input-placeholder {\n  padding-left: 10px;\n}\n\n.header-input::placeholder {\n  padding-left: 10px;\n}\n\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 15px;\n}\n\n.p-15 {\n  padding-bottom: 15px;\n}\n\nselect {\n  width: 250px;\n  color: #b6b8bb;\n}\n\ntable {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 15px;\n}\n\nthead {\n  background-color: #DFE5F0;\n  font-weight: 600;\n}\n\nthead td {\n  background: #DFE5F0;\n}\n\ntd {\n  padding: 10px 15px;\n  color: #323C47;\n  font-size: 12px;\n}\n\ntbody {\n  font-weight: 500;\n}\n\ntr {\n  box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n}\n\n.section::before {\n  height: 0.4em;\n  display: table-row;\n  content: '';\n}\n\n.w96 {\n  width: calc(100% - 1rem);\n}\n\n.p-10 {\n  padding-top: 10px;\n}\n\n.p-30 {\n  padding-top: 30px;\n}\n\n.p-10-0 {\n  padding: 9px 0px;\n}\n\n.yes {\n  background-color: #CCFFAC;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.no {\n  background-color: #FFCF88;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.search {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.area-select {\n  font-size: 12px;\n  color: #787A7D;\n}\n\n.input-width {\n  width: 180px;\n}\n\n.pl-10 {\n  padding-left: 10px;\n}\n\n.pr-40 {\n  padding-right: 40px;\n}\n\n.cancel {\n  background-color: #fff;\n  border: 1px solid #109CF1;\n  color: #109CF1;\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n  color: #334D6E;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.width205 {\n  width: 205px;\n}\n\n.description {\n  width: 200px;\n  margin: 0px 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('Icon.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  padding: 6px 4px;\n  margin-right: 10px;\n}\n\n.add {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.center {\n  text-align: center;\n}\n\n.gray {\n  background-color: #F4F3F8;\n  height: 92vh;\n}\n\n/*chatbox*/\n\n.chatbox1 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox2 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox3 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox4 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox5 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox6 {\n  width: 1033px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox7 {\n  width: 90px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox8 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox9 {\n  width: 819px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox-select {\n  font-size: 10px;\n}\n\n.chatbox-input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: #f3f3f3;\n}\n\n.col-form-label {\n  font-size: 13px;\n  font-weight: 400;\n  color: #AFB3B7;\n}\n\n.upload {\n  background-color: #29ACFC;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n#yourBtn {\n  position: relative;\n  top: 40px;\n  width: 100px;\n  padding: 10px;\n  background-color: #29ACFC;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.top {\n  position: relative;\n  top: 40px;\n}\n\n.division {\n  border-right: 2px solid #C4C4C4;\n  margin: 40px 0px;\n}\n\n.radio {\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.containerc {\n  display: block;\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.containerc input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  border: 1px solid #109CF1;\n}\n\n.containerc input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.containerc input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.containerc .checkmark:after {\n  left: 5px;\n  top: 0px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.top2 {\n  position: relative;\n  top: 10px;\n}\n\n.login {\n  position: relative;\n  top: -7px;\n  left: 2px;\n}\n\n.thumb {\n  padding-left: 10px;\n}\n\nmain {\n  padding-left: 0 !important;\n}\n\n.right {\n  float: right;\n}\n\nthead td, thead th {\n  border-top: none;\n  border-bottom: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvZGF0YS1zZXR1cC1ob21lL2RhdGEtc2V0dXAtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Esc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FBRWY7O0FBQUE7RUFDQSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFHZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFFTSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDdEI7O0FBVEE7RUFXTSwyQ0FBMkM7RUFDM0MseUJBQXlCO0FBRS9COztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtBQUVmOztBQUFBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixhQUFhO0FBR2Y7O0FBREE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFJakI7O0FBUEE7RUFLTSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBTXBCOztBQWRBO0VBWU0saUJBQWlCO0FBTXZCOztBQUZBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFLbEI7O0FBSEE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlC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LGtCQUFrQjtFQUNsQixhQUFhO0FBdURmOztBQW5EQTtFQUNFLGNBQWM7QUFzRGhCOztBQWxEQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBR3pCLHdCQUF3QjtBQXFEMUI7O0FBbkRBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFzRFg7O0FBcERBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0FBdURiOztBQXJEQTtFQUNFLGtCQUFrQjtBQXdEcEI7O0FBdERBO0VBQ0ksMEJBQTBCO0FBeUQ5Qjs7QUF2REE7RUFDSSxZQUFZO0FBMERoQjs7QUF4REE7RUFFSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBMER2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9kYXRhLXNldHVwL2RhdGEtc2V0dXAtaG9tZS9kYXRhLXNldHVwLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCI+XCI7XG4gIGNvbG9yOiAjMzM0RDZFO1xufVxuLmJyZWFkY3J1bWJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xubWFyZ2luLWJvdHRvbTogMHB4O1xucGFkZGluZy1sZWZ0OiAwO1xufVxuLmJyZWFkY3J1bWItaXRlbT5he1xuY29sb3I6ICMzMzRENkU7XG5mb250LXdlaWdodDogNjAwO1xuZm9udC1zaXplOiAxNnB4O1xufVxuXG5cblxuLnc5OCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLm5hdi1pdGVtIHtcbiAgLm5hdi1saW5rIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMxMDljZjEgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMS41cmVtIDByZW07XG4gIG1hcmdpbjogLTFyZW0gMy41cmVtO1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53MTUge1xuICB3aWR0aDogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNWYwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmxpc3QgeyBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAwcHg7XG4gIG1hcmdpbjogN3B4IDBweDtcbiAgYSB7IHNwYW4ge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjMzM0ZDZlO1xuICB9XG4gIH1cbiAgaW1nIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG59XG59XG4uYWRkX21hc3Rlcl90YWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Y2YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5zZWxlY3Qge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4O1xufVxuLmlucHV0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG4qL1xufVxuLm1hZ25pZnlpbmctZ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9GcmFtZTEuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIHRleHQtaW5kZW50OiA1cHg7XG59XG4uaGVhZGVyLWlucHV0IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiA3MDBweDtcbiAgY29sb3I6ICM2MTc1OGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9GcmFtZTEuc3ZnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7Ki9cbn1cbi5oZWFkZXItaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1haW4tc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnAtMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbnNlbGVjdCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgY29sb3I6ICNiNmI4YmI7XG59XG5cblxuXG50YWJsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDoxNXB4O1xufVxudGhlYWR7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgIHRke1xuICAgICAgIGJhY2tncm91bmQ6ICNERkU1RjA7XG4gICB9XG59XG50ZHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBjb2xvcjogIzMyM0M0NztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxudGJvZHl7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG50cntcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6LTFweCAxcHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDFweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cbi5zZWN0aW9uOjpiZWZvcmUge1xuICBoZWlnaHQ6IDAuNGVtO1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gIGNvbnRlbnQ6ICcnO1xufVxuXG5cbi53OTZ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgLy8gbWFyZ2luOiAwcHggMXJlbTtcbiAgLy8gbWFyZ2luLXRvcDogLTIwcHg7XG59XG4ucC0xMHtwYWRkaW5nLXRvcDogMTBweDt9XG4ucC0zMHtwYWRkaW5nLXRvcDogMzBweDt9XG4ucC0xMC0weyBwYWRkaW5nOiA5cHggMHB4O31cbi55ZXN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0ZGQUM7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm5ve1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRjg4O1xuICBjb2xvcjogIzMyM0M0NztcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5zZWFyY2h7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwXG59XG4uYXJlYS1zZWxlY3R7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNzg3QTdEO1xufVxuLmlucHV0LXdpZHRoe1xuICB3aWR0aDogMTgwcHg7XG59XG4ucGwtMTB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5wci00MHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmNhbmNlbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgY29sb3I6ICMxMDlDRjE7XG4gICBwYWRkaW5nOiA5cHggMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDBcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwXG59XG4ud2lkdGgyMDV7XG4gIHdpZHRoOiAyMDVweDtcbn1cbi5kZXNjcmlwdGlvbntcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuIGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0ljb24uc3ZnJykgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgcGFkZGluZzogMnB4IDBweDtcbn1cbmlucHV0W3R5cGU9XCJkYXRlXCJde1xuICBwYWRkaW5nOiA2cHggNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYWRke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLm1yLTEwe1xubWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyYXl7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEYzRjg7XG4gIGhlaWdodDogOTJ2aDtcbn1cbi8qY2hhdGJveCovXG4uY2hhdGJveDF7XG4gIHdpZHRoOiA0NjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3gye1xuICB3aWR0aDogMTE1M3B4O1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3gze1xuICB3aWR0aDogNDY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94NHtcbiAgd2lkdGg6IDExNTNweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94NXtcbiAgd2lkdGg6IDQ2NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDZ7XG4gIHdpZHRoOiAxMDMzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDd7XG4gIHdpZHRoOjkwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94OHtcbiAgd2lkdGg6IDQ2NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDl7XG4gIHdpZHRoOiA4MTlweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94LXNlbGVjdHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNoYXRib3gtaW5wdXR7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cbi5jb2wtZm9ybS1sYWJlbHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0FGQjNCNztcbn1cbi51cGxvYWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG59XG5pbnB1dFt0eXBlPVwiZmlsZVwiXXtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuI3lvdXJCdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnRvcHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQwcHg7XG59XG4uZGl2aXNpb257XG4gIGJvcmRlci1yaWdodDogIDJweCBzb2xpZCAjQzRDNEM0OyBcbiAgbWFyZ2luOiA0MHB4IDBweDtcbn1cbi5yYWRpb3tcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNvbnRhaW5lcmMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuXG4uY29udGFpbmVyYyBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG5cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzEwOUNGMTtcbn1cblxuLmNvbnRhaW5lcmMgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuXG5cbi5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLmNvbnRhaW5lcmMgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4uY29udGFpbmVyYyAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnRvcDJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuLmxvZ2lueyAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC03cHg7XG4gICAgbGVmdDogMnB4O1xufVxuLnRodW1ie1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5tYWluIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5yaWdodCB7IFxuICAgIGZsb2F0OiByaWdodDtcbn1cbnRoZWFkIHtcbiAgdGQsIHRoIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/data-setup-home/data-setup-home.component.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/data-setup-home/data-setup-home.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: DataSetupHomeComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupDataSetupHomeDataSetupHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSetupHomeComponent", function () {
        return DataSetupHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
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

      var DataSetupHomeComponent =
      /** @class */
      function () {
        var DataSetupHomeComponent = /*#__PURE__*/function () {
          function DataSetupHomeComponent(auth) {
            var _this15 = this;

            _classCallCheck(this, DataSetupHomeComponent);

            this.auth = auth;
            this.type = '';
            this.schoolModel = false;
            this.activeSession = 'faculty';
            this.checkClassStatus = '';
            this.auth.schoolModel.subscribe(function (res) {
              _this15.schoolModel = false;

              if (res) {
                _this15.schoolModel = true;
              }
            });
          }

          _createClass(DataSetupHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this16 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this16.type = 'batch';
                } else {
                  _this16.type = 'course';
                }
              });
              this.checkClassStatus = sessionStorage.getItem('class');
              this.setActiveClass();
            }
          }, {
            key: "toggle",
            value: function toggle(id) {
              this.activeSession = id;
            }
          }, {
            key: "setActiveClass",
            value: function setActiveClass() {
              // this.RemoveActiveTabs();
              var pathLastURL;
              var str = window.location.href;
              var res = this.checkClassStatus == 'exam' ? str.substring(str.lastIndexOf("/view/course/exam-setup") + 24, str.length) : str.substring(str.lastIndexOf("/view/course/setup") + 19, str.length);
              console.log(res);
              pathLastURL = res;
              var get_module_name = res.substring(0, res.indexOf("/"));

              if (get_module_name != '') {
                pathLastURL = get_module_name;
              }

              console.log(pathLastURL);
              var routesData = {
                'teacher': 'faculty',
                'academic': 'academic',
                'manage-exam-grades': 'Exam_Grades',
                'classroom': 'classroom',
                'master-tag': 'master_tag',
                'exam-type': 'Exam_type',
                'mark-distribution': 'mark_distribution',
                'mark-setting': 'mark_setting',
                'setting': 'setting',
                'exam-setting': 'exam-setting',
                'content-setting': 'content-setting'
              };
              this.activeSession = routesData[pathLastURL];
              console.log(this.activeSession);
            }
          }]);

          return DataSetupHomeComponent;
        }();

        DataSetupHomeComponent.ctorParameters = function () {
          return [{
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]
          }];
        };

        DataSetupHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-data-setup-home',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./data-setup-home.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/data-setup-home/data-setup-home.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./data-setup-home.component.scss */
          "./src/app/components/course-module/data-setup/data-setup-home/data-setup-home.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]])], DataSetupHomeComponent);
        return DataSetupHomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/data-setup-routing.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/data-setup-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: DataSetupRoutingModule */

    /***/
    function srcAppComponentsCourseModuleDataSetupDataSetupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSetupRoutingModule", function () {
        return DataSetupRoutingModule;
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


      var _data_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data-setup.component */
      "./src/app/components/course-module/data-setup/data-setup.component.ts");
      /* harmony import */


      var _data_setup_home_data_setup_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data-setup-home/data-setup-home.component */
      "./src/app/components/course-module/data-setup/data-setup-home/data-setup-home.component.ts");
      /* harmony import */


      var _manage_exam_grades_manage_exam_grades_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./manage-exam-grades/manage-exam-grades.component */
      "./src/app/components/course-module/data-setup/manage-exam-grades/manage-exam-grades.component.ts");
      /* harmony import */


      var _class_room_class_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./class-room/class-room.component */
      "./src/app/components/course-module/data-setup/class-room/class-room.component.ts");
      /* harmony import */


      var _school_exam_type_school_exam_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./school-exam-type/school-exam-type.component */
      "./src/app/components/course-module/data-setup/school-exam-type/school-exam-type.component.ts");
      /* harmony import */


      var _master_tag_master_tag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./master-tag/master-tag.component */
      "./src/app/components/course-module/data-setup/master-tag/master-tag.component.ts");
      /* harmony import */


      var _mark_distribution_mark_distribution_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mark-distribution/mark-distribution.component */
      "./src/app/components/course-module/data-setup/mark-distribution/mark-distribution.component.ts");
      /* harmony import */


      var _mark_setting_mark_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./mark-setting/mark-setting.component */
      "./src/app/components/course-module/data-setup/mark-setting/mark-setting.component.ts");
      /* harmony import */


      var _class_settings_class_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./class-settings/class-settings.component */
      "./src/app/components/course-module/data-setup/class-settings/class-settings.component.ts");
      /* harmony import */


      var _exam_setting_exam_setting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./exam-setting/exam-setting.component */
      "./src/app/components/course-module/data-setup/exam-setting/exam-setting.component.ts");
      /* harmony import */


      var _conten_library_setting_conten_library_setting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./conten-library-setting/conten-library-setting.component */
      "./src/app/components/course-module/data-setup/conten-library-setting/conten-library-setting.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var DataSetupRoutingModule =
      /** @class */
      function () {
        var DataSetupRoutingModule = function DataSetupRoutingModule() {
          _classCallCheck(this, DataSetupRoutingModule);
        };

        DataSetupRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _data_setup_component__WEBPACK_IMPORTED_MODULE_2__["DataSetupComponent"],
            pathMatch: 'prefix',
            children: [{
              path: '',
              component: _data_setup_home_data_setup_home_component__WEBPACK_IMPORTED_MODULE_3__["DataSetupHomeComponent"]
            }, {
              path: 'home',
              component: _data_setup_home_data_setup_home_component__WEBPACK_IMPORTED_MODULE_3__["DataSetupHomeComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'academic',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | app-components-course-module-data-setup-academic-year-academic-year-module */
                [__webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~8a90b495"), __webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~0b3724e1"), __webpack_require__.e("default~app-components-course-module-data-setup-academic-year-academic-year-module~app-components-le~468b79d7"), __webpack_require__.e("app-components-course-module-data-setup-academic-year-academic-year-module")]).then(__webpack_require__.bind(null,
                /*! app/components/course-module/data-setup/academic-year/academic-year.module */
                "./src/app/components/course-module/data-setup/academic-year/academic-year.module.ts")).then(function (m) {
                  return m.AcademicYearModule;
                });
              } // loadChildren: 'app/components/course-module/data-setup/academic-year/academic-year.module#AcademicYearModule',
              // canLoad: [AuthGuard]

            }, {
              path: 'manage-exam-grades',
              component: _manage_exam_grades_manage_exam_grades_component__WEBPACK_IMPORTED_MODULE_4__["ManageExamGradesComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'classroom',
              component: _class_room_class_room_component__WEBPACK_IMPORTED_MODULE_5__["ClassRoomComponent"]
            }, {
              path: 'exam-type',
              component: _school_exam_type_school_exam_type_component__WEBPACK_IMPORTED_MODULE_6__["SchoolExamTypeComponent"]
            }, {
              path: 'master-tag',
              component: _master_tag_master_tag_component__WEBPACK_IMPORTED_MODULE_7__["MasterTagComponent"]
            }, {
              path: 'mark-distribution',
              component: _mark_distribution_mark_distribution_component__WEBPACK_IMPORTED_MODULE_8__["MarkDistributionComponent"]
            }, {
              path: 'mark-setting',
              component: _mark_setting_mark_setting_component__WEBPACK_IMPORTED_MODULE_9__["MarkSettingComponent"]
            }, {
              path: 'setting',
              component: _class_settings_class_settings_component__WEBPACK_IMPORTED_MODULE_10__["ClassSettingsComponent"]
            }, {
              path: 'exam-setting',
              component: _exam_setting_exam_setting_component__WEBPACK_IMPORTED_MODULE_11__["ExamSettingComponent"]
            }, {
              path: 'content-setting',
              component: _conten_library_setting_conten_library_setting_component__WEBPACK_IMPORTED_MODULE_12__["ContenLibrarySettingComponent"]
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], DataSetupRoutingModule);
        return DataSetupRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/data-setup.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/data-setup.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: DataSetupComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupDataSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSetupComponent", function () {
        return DataSetupComponent;
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

      var DataSetupComponent =
      /** @class */
      function () {
        var DataSetupComponent = /*#__PURE__*/function () {
          function DataSetupComponent() {
            _classCallCheck(this, DataSetupComponent);
          }

          _createClass(DataSetupComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return DataSetupComponent;
        }();

        DataSetupComponent.ctorParameters = function () {
          return [];
        };

        DataSetupComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-data-setup',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./data-setup.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/data-setup.component.html"))["default"]
        }), __metadata("design:paramtypes", [])], DataSetupComponent);
        return DataSetupComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/data-setup.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/data-setup.module.ts ***!
      \**************************************************************************/

    /*! exports provided: DataSetupModule */

    /***/
    function srcAppComponentsCourseModuleDataSetupDataSetupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSetupModule", function () {
        return DataSetupModule;
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


      var _data_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data-setup.component */
      "./src/app/components/course-module/data-setup/data-setup.component.ts");
      /* harmony import */


      var _services_examgradeservice_exam_grade_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/examgradeservice/exam-grade-service.service */
      "./src/app/services/examgradeservice/exam-grade-service.service.ts");
      /* harmony import */


      var _services_class_roomService_class_roomlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/class-roomService/class-roomlist.service */
      "./src/app/services/class-roomService/class-roomlist.service.ts");
      /* harmony import */


      var _data_setup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./data-setup-routing.module */
      "./src/app/components/course-module/data-setup/data-setup-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _data_setup_home_data_setup_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./data-setup-home/data-setup-home.component */
      "./src/app/components/course-module/data-setup/data-setup-home/data-setup-home.component.ts");
      /* harmony import */


      var _manage_exam_grades_manage_exam_grades_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./manage-exam-grades/manage-exam-grades.component */
      "./src/app/components/course-module/data-setup/manage-exam-grades/manage-exam-grades.component.ts");
      /* harmony import */


      var _class_room_class_room_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./class-room/class-room.component */
      "./src/app/components/course-module/data-setup/class-room/class-room.component.ts");
      /* harmony import */


      var _school_exam_type_school_exam_type_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./school-exam-type/school-exam-type.component */
      "./src/app/components/course-module/data-setup/school-exam-type/school-exam-type.component.ts");
      /* harmony import */


      var _master_tag_master_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./master-tag/master-tag.component */
      "./src/app/components/course-module/data-setup/master-tag/master-tag.component.ts");
      /* harmony import */


      var _mark_distribution_mark_distribution_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./mark-distribution/mark-distribution.component */
      "./src/app/components/course-module/data-setup/mark-distribution/mark-distribution.component.ts");
      /* harmony import */


      var _mark_setting_mark_setting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./mark-setting/mark-setting.component */
      "./src/app/components/course-module/data-setup/mark-setting/mark-setting.component.ts");
      /* harmony import */


      var _class_settings_class_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./class-settings/class-settings.component */
      "./src/app/components/course-module/data-setup/class-settings/class-settings.component.ts");
      /* harmony import */


      var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../services/institute-setting-service/institute-setting.service */
      "./src/app/services/institute-setting-service/institute-setting.service.ts");
      /* harmony import */


      var _exam_setting_exam_setting_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./exam-setting/exam-setting.component */
      "./src/app/components/course-module/data-setup/exam-setting/exam-setting.component.ts");
      /* harmony import */


      var _conten_library_setting_conten_library_setting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./conten-library-setting/conten-library-setting.component */
      "./src/app/components/course-module/data-setup/conten-library-setting/conten-library-setting.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var DataSetupModule =
      /** @class */
      function () {
        var DataSetupModule = function DataSetupModule() {
          _classCallCheck(this, DataSetupModule);
        };

        DataSetupModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _data_setup_routing_module__WEBPACK_IMPORTED_MODULE_5__["DataSetupRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
          declarations: [_data_setup_component__WEBPACK_IMPORTED_MODULE_2__["DataSetupComponent"], _data_setup_home_data_setup_home_component__WEBPACK_IMPORTED_MODULE_8__["DataSetupHomeComponent"], _manage_exam_grades_manage_exam_grades_component__WEBPACK_IMPORTED_MODULE_9__["ManageExamGradesComponent"], _class_room_class_room_component__WEBPACK_IMPORTED_MODULE_10__["ClassRoomComponent"], _school_exam_type_school_exam_type_component__WEBPACK_IMPORTED_MODULE_11__["SchoolExamTypeComponent"], _master_tag_master_tag_component__WEBPACK_IMPORTED_MODULE_12__["MasterTagComponent"], _mark_distribution_mark_distribution_component__WEBPACK_IMPORTED_MODULE_13__["MarkDistributionComponent"], _mark_setting_mark_setting_component__WEBPACK_IMPORTED_MODULE_14__["MarkSettingComponent"], _class_settings_class_settings_component__WEBPACK_IMPORTED_MODULE_15__["ClassSettingsComponent"], _exam_setting_exam_setting_component__WEBPACK_IMPORTED_MODULE_17__["ExamSettingComponent"], _conten_library_setting_conten_library_setting_component__WEBPACK_IMPORTED_MODULE_18__["ContenLibrarySettingComponent"]],
          providers: [_services_examgradeservice_exam_grade_service_service__WEBPACK_IMPORTED_MODULE_3__["ExamGradeServiceService"], _services_class_roomService_class_roomlist_service__WEBPACK_IMPORTED_MODULE_4__["ClassRoomService"], _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_16__["InstituteSettingService"]]
        })], DataSetupModule);
        return DataSetupModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/exam-setting/exam-setting.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/exam-setting/exam-setting.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleDataSetupExamSettingExamSettingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex2 {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 19px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.w981 {\n  margin-left: 1%;\n}\n\n.main_div {\n  display: flex;\n  margin-top: 10px;\n}\n\n.main_div > div:first-child {\n  width: 15%;\n  background: #F3F4F6;\n  border: 1px solid #DCDCDC;\n  box-sizing: border-box;\n  height: 89vh;\n  position: fixed;\n}\n\n.settings {\n  padding: 20px 10px;\n  border-bottom: 1px solid #000;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.menu {\n  margin-top: 20px;\n}\n\n.menu li {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  padding: 20px 0px;\n  padding-left: 10px;\n  color: #1A2334;\n  cursor: pointer;\n}\n\n.menu li.selected {\n  background: #FFFFFF;\n  font-weight: 600;\n  font-size: 13px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n}\n\na {\n  color: #1A2334;\n  text-decoration: none;\n}\n\n.menu li.selected > a {\n  color: #0097F9;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.bottom {\n  padding: 1%;\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  width: calc(100% - 15%);\n  border-top: 1px solid #EAEAEA;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.main_div > div:last-child {\n  width: 80%;\n  margin-left: 20%;\n  /*overflow-y: scroll;*/\n  padding-right: 1%;\n  margin-bottom: 70px;\n}\n\n.ellipse {\n  background: #F0EFEF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  width: 19px;\n  height: 19px;\n  padding: 0px 7px;\n  border-radius: 50%;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  /* identical to box height, or 100% */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.blue_line {\n  border-top: 1px solid #0097F9;\n  width: 22px;\n  display: inline-block;\n  margin: 0px 7px;\n  position: relative;\n  top: -4px;\n}\n\n.blue_settings {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.bold_settings {\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  margin-bottom: 8px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings1 {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 8px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex1 {\n  display: flex;\n  margin-top: 10px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 12px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: #ccc;*/\n  -webkit-transition: .4s;\n  border: 1px solid #BDBABA;\n  box-sizing: border-box;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: -6px;\n  bottom: -4px;\n  background-color: #BDBABA;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  /*background-color: #2196F3;*/\n}\n\ninput:focus + .slider {\n  /*box-shadow: 0 0 1px #2196F3;*/\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n  background-color: #19C83F;\n}\n\ninput:checked + .slider {\n  border: 1px solid #BDBABA;\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.toggle {\n  display: flex;\n  margin-left: auto;\n  padding-right: 50px;\n  padding-top: 30px;\n}\n\n.off {\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  position: relative;\n  top: -4px;\n  margin: 0px 10px;\n}\n\n.on {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 0px 10px;\n  letter-spacing: 0.01em;\n  position: relative;\n  top: -4px;\n  color: #19C83F;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.sep_line {\n  margin-left: 65px;\n  border-bottom: 1px solid  #C4C4C4;\n  margin-bottom: 16px;\n}\n\n.settings_label {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-right: 40px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-left: -10px;\n}\n\n.checkbox {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n  cursor: pointer;\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #fff;\n  background: #109CF1;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  padding: 2px;\n  width: 0.5em;\n  height: 0.5em;\n  border: none;\n  border-radius: 3px;\n  transform-origin: bottom left;\n}\n\n.checkbox__input input:checked\n+ .checkbox__control svg {\n  transform: scale(1);\n}\n\n.checkbox__input input:checked\n+ .checkbox__control {\n  border: none;\n}\n\n.flex1 > div:nth-child(2) {\n  width: 60%;\n}\n\n.input {\n  box-sizing: border-box;\n  background: #F5F5F5;\n  border-radius: 2px;\n  width: 336px;\n  height: 35px;\n  margin-bottom: 16px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  border: none;\n  outline: none;\n  text-indent: 10px;\n  color: #323C47;\n}\n\n.input::-moz-placeholder {\n  color: #8e939a;\n}\n\n.input:-ms-input-placeholder {\n  color: #8e939a;\n}\n\n.input::placeholder, option[disabled] {\n  color: #8e939a;\n}\n\n.flex1 > div:first-child {\n  width: 65px;\n}\n\n.size_sm {\n  width: 18px;\n  height: auto;\n  position: relative;\n  top: 5px;\n  margin-left: 6px;\n}\n\n.position {\n  position: relative;\n  top: -7px;\n  margin-left: 10px;\n}\n\n/*extra*/\n\n.scrool1 {\n  overflow-y: scroll;\n  height: calc(100vh - 218px);\n}\n\n.no-pointer-class {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  z-index: 1;\n  top: 0px;\n  right: -135px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.center {\n  align-items: center;\n}\n\n.dropdown-content1 {\n  width: 150px;\n  white-space: nowrap;\n  min-height: 41px;\n  line-height: 18px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  font-weight: bold;\n  position: absolute;\n  width: 130px;\n  min-height: 30px;\n  background: #e0e0e0;\n  border: 1px solid #ccc;\n  font-size: 11px;\n  border-radius: 4px;\n  padding: 3px 5px;\n  box-shadow: 0 0 4px #ccc;\n}\n\n.dropdown-content1 p {\n  white-space: pre-wrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvZXhhbS1zZXR0aW5nL2V4YW0tc2V0dGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNBLFdBQVc7RUFDWCxvQ0FBb0M7QUFBeEM7O0FBR0U7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUFuQjs7QUFFRTtFQUNFLGFBQWE7QUFDakI7O0FBQ0U7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUVuQjs7QUFBRTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBR25COztBQUNHO0VBQ0ksYUFBYTtBQUVwQjs7QUFDRTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFFcEI7O0FBQUU7RUFDRSxlQUFlO0FBR25COztBQUFFO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUdwQjs7QUFERTtFQUNBLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUlqQjs7QUFGRTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFDQSxzQkFBc0I7RUFDdEIsY0FBYztBQUtoQjs7QUFIRTtFQUNFLGdCQUFnQjtBQU1wQjs7QUFKRTtFQUNFLGdCQUFnQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBT2pCOztBQUxFO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNs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O0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7QUF3QmxCOztBQXRCQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0FBeUJuQjs7QUF2QkMsUUFBQTs7QUFDQTtFQUNHLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUEwQi9COztBQXhCRztFQUNFLG1CQUFtQjtFQUNuQixvQkFBbUI7QUEyQnhCOztBQXZCQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUEwQnZCOztBQXZCQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixhQUFhO0FBMEJmOztBQXZCQTtFQUFxQyxjQUFjO0FBMkJuRDs7QUF6QkE7RUFDRSxtQkFBbUI7QUE0QnJCOztBQTFCQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix3QkFBd0I7QUE2QjFCOztBQTNCQTtFQUNFLHFCQUFxQjtBQThCdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvZGF0YS1zZXR1cC9leGFtLXNldHRpbmcvZXhhbS1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKntcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5mbGV4MntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5ibHVlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogOXB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiA4cHggMTlweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIFxuICAgaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cyxidXR0b246Zm9jdXN7XG4gICAgICAgb3V0bGluZTogbm9uZTtcbiAgIH1cbiAgXG4gIC53OTh7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC53OTgxe1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgfVxuICBcbiAgLm1haW5fZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAubWFpbl9kaXY+ZGl2OmZpcnN0LWNoaWxke1xuICB3aWR0aDogMTUlO1xuICBiYWNrZ3JvdW5kOiAjRjNGNEY2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRENEQ0RDO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDg5dmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICAuc2V0dGluZ3N7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzFBMjMzNDtcbiAgfVxuICAubWVudSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAubWVudSBsaXtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzFBMjMzNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5tZW51IGxpLnNlbGVjdGVke1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgfVxuICBhe1xuICAgIGNvbG9yOiAjMUEyMzM0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5tZW51IGxpLnNlbGVjdGVkPmF7XG4gICAgICBcbiAgY29sb3I6ICMwMDk3Rjk7XG4gIH1cbiAgLmRpc3BsYXl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmJvdHRvbXtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1JSk7XG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI0VBRUFFQTtcbiAgYm94LXNoYWRvdzogNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgfVxuICAubXIxMHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLm1haW5fZGl2PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgIFxuICAgIC8qb3ZlcmZsb3cteTogc2Nyb2xsOyovXG4gICAgcGFkZGluZy1yaWdodDogMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgfVxuICAuZWxsaXBzZXtcbiAgICBiYWNrZ3JvdW5kOiAjRjBFRkVGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEwMCUgKi9cbiAgXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICBjb2xvcjogIzAwOTdGOTtcbiAgXG4gIH1cbiAgLmJsdWVfbGluZXtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwOTdGOTtcbiAgICB3aWR0aDogMjJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC00cHg7XG4gIH1cbiAgLmJsdWVfc2V0dGluZ3N7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDk3Rjk7XG4gIH1cbiAgLmJvbGRfc2V0dGluZ3N7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLmJsYWNrX3NldHRpbmdze1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuYmxhY2tfc2V0dGluZ3Mxe1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgXG4gIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC5mbGV4MXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBcbiAgXG4gIC5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICB9XG4gIFxuICAuc3dpdGNoIGlucHV0IHsgXG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjYzsqL1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCREJBQkE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIC5zbGlkZXI6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgbGVmdDogLTZweDtcbiAgICBib3R0b206IC00cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkFCQTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7Ki9cbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICAvKmJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMzsqL1xuICB9XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTlDODNGO1xuICB9XG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCREJBQkE7XG4gIH1cbiAgLnNsaWRlci5yb3VuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgfVxuICBcbiAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAudG9nZ2xle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICBtYXJnaW4tbGVmdDogYXV0bztcblxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7IFxuICB9XG4gIC5vZmZ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xuICBtYXJnaW46IDBweCAxMHB4O1xuICB9XG4gIC5vbntcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBtYXJnaW46IDBweCAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbiAgY29sb3I6ICMxOUM4M0Y7XG4gIH1cbiAgLmhpZGRlbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgLnNlcF9saW5le1xuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgI0M0QzRDNDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgLnNldHRpbmdzX2xhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgfVxuICAuY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvO1xuICAgIGdyaWQtZ2FwOiAwLjVlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2hlY2tib3hfX2lucHV0IGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwZW07XG4gICAgaGVpZ2h0OiAwZW07XG4gIH1cbi5jaGVja2JveF9fY29udHJvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xuYm9yZGVyOiAxcHggc29saWQgI0JCQjJCMjtcbjtcbn1cbi5jaGVja2JveF9faW5wdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNoZWNrYm94XCI7XG59XG4uY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgICBjb2xvcjogICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzEwOUNGMTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbiAyNW1zO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBzdHJva2Utd2lkdGg6NDtcbiAgcGFkZGluZzoycHg7XG4gICAgd2lkdGg6IDAuNWVtO1xuICBoZWlnaHQ6IDAuNWVtO1xuIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbn1cbi5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZFxuICsgLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uY2hlY2tib3hfX2lucHV0IGlucHV0OmNoZWNrZWRcbiArIC5jaGVja2JveF9fY29udHJvbCB7XG5ib3JkZXI6IG5vbmU7XG59XG4gIC5mbGV4MT5kaXY6bnRoLWNoaWxkKDIpe1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgLmlucHV0e1xuICBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHdpZHRoOiAzMzZweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgYm9yZGVyOm5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtaW5kZW50OiAxMHB4O1xuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuaW5wdXQ6OnBsYWNlaG9sZGVyICwgb3B0aW9uW2Rpc2FibGVkXXtcbiAgY29sb3I6IzhlOTM5YTtcbiAgfVxuICAuZmxleDE+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA2NXB4O1xufVxuXG4vLyAgZXh0cmEgbGF5b3V0XG4uc2l6ZV9zbXtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbi5wb3NpdGlvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC03cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIC8qZXh0cmEqL1xuIC5zY3Jvb2wxe1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMThweCk7XG4gICB9XG4gICAubm8tcG9pbnRlci1jbGFzcyB7XG4gICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XG4gfVxuLy8gIHRvb2x0aXBcblxuLmRyb3Bkb3duMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudDEge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMHB4O1xuICByaWdodDogLTEzNXB4O1xufVxuXG4uZHJvcGRvd24xOmhvdmVyIC5kcm9wZG93bi1jb250ZW50MSB7ZGlzcGxheTogYmxvY2s7fVxuXG4uY2VudGVye1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRyb3Bkb3duLWNvbnRlbnQxe1xuICB3aWR0aDogMTUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi1oZWlnaHQ6IDQxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTMwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBib3gtc2hhZG93OiAwIDAgNHB4ICNjY2M7XG59XG4uZHJvcGRvd24tY29udGVudDEgcHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLy8gIGVuZCB0b29sdGlwXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/exam-setting/exam-setting.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/exam-setting/exam-setting.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ExamSettingComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupExamSettingExamSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamSettingComponent", function () {
        return ExamSettingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/institute-setting-service/institute-setting.service */
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

      var ExamSettingComponent =
      /** @class */
      function () {
        var ExamSettingComponent = /*#__PURE__*/function () {
          function ExamSettingComponent(commonService, services, auth, apiService, httpService) {
            _classCallCheck(this, ExamSettingComponent);

            this.commonService = commonService;
            this.services = services;
            this.auth = auth;
            this.apiService = apiService;
            this.httpService = httpService;
            this.test_series_feature = '0';
            this.biometricSetting = 0;
            this.isLangInst = false;
            this.jsonFlagForSetting = false;
            this.schoolModel = false;
            this.currentSection = 'section1';
            this.examSetting = {
              institute_id: sessionStorage.getItem('institute_id'),
              is_exam_grad_feature: '',
              rank_to_send_for_marks_sms: '',
              rank_no_for_marks_sms: '',
              test_buffer_duration: '',
              exam_attendance_not_marked_notification_contact_number: '',
              exam_attendance_not_marked_daily_notification_contact_number: '',
              exam_schedule_notification: {
                student: '',
                parent: '',
                gaurdian: '',
                teacher: '',
                admin: ''
              },
              enable_exam_attendance_not_marked_notification: {
                teacher: '',
                admin: '',
                other: false
              },
              enable_exam_marks_not_update_notification: {
                teacher: '',
                admin: '',
                other: false
              },
              enable_exam_attendance_not_marked_daily_notification: {
                teacher: '',
                admin: '',
                other: false
              }
            };
          }

          _createClass(ExamSettingComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this17 = this;

              this.auth.schoolModel.subscribe(function (res) {
                _this17.schoolModel = false;

                if (res) {
                  _this17.schoolModel = true;
                }
              }); //  this.biometricSetting = Number(sessionStorage.getItem('biometric_attendance_feature'));
              // this.checkInstitutionType();
              // this.getSettingFromServer();
            }
          }, {
            key: "getSumOfTableField",
            value: function getSumOfTableField(data) {
              var total = 0;

              for (var i = 0; i < Object.keys(data).length; i++) {
                if (Object.keys(data)[i] == 'student' && data.student == true) {
                  total = total + 2;
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
            key: "checkContactNoPattern",
            value: function checkContactNoPattern(pattern) {
              var regExPattern = /^[0-9]+(,[0-9]+)*$/;

              if (!regExPattern.test(pattern)) {
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "constructJsonToSend",
            value: function constructJsonToSend() {
              var obj = Object.assign({}, this.examSetting);
              obj.institute_id = Number(this.examSetting.institute_id);
              obj.is_exam_grad_feature = this.convertBoolenToNumber(this.examSetting.is_exam_grad_feature);
              obj.rank_to_send_for_marks_sms = this.convertBoolenToNumber(this.examSetting.rank_to_send_for_marks_sms);
              obj.rank_no_for_marks_sms = Number(this.examSetting.rank_no_for_marks_sms);
              obj.test_buffer_duration = Number(this.examSetting.test_buffer_duration);
              obj.exam_schedule_notification = this.getSumOfTableField(this.examSetting.exam_schedule_notification);
              obj.enable_exam_attendance_not_marked_notification = this.getSumOfTableField(this.examSetting.enable_exam_attendance_not_marked_notification);
              obj.enable_exam_marks_not_update_notification = this.getSumOfTableField(this.examSetting.enable_exam_marks_not_update_notification);
              obj.exam_attendance_not_marked_daily_notification_contact_number = this.examSetting.exam_attendance_not_marked_daily_notification_contact_number;

              if (this.examSetting.exam_attendance_not_marked_notification_contact_number != null && this.examSetting.exam_attendance_not_marked_notification_contact_number != '') {
                if (!this.checkContactNoPattern(this.examSetting.exam_attendance_not_marked_notification_contact_number)) {
                  this.commonService.showErrorMessage('error', '', 'Please enter numbers only');
                  return false;
                }
              }

              if (this.examSetting.exam_attendance_not_marked_daily_notification_contact_number != null && this.examSetting.exam_attendance_not_marked_daily_notification_contact_number != '') {
                if (!this.checkContactNoPattern(this.examSetting.exam_attendance_not_marked_daily_notification_contact_number)) {
                  this.commonService.showErrorMessage('error', '', 'Please enter numbers only');
                  return false;
                }
              }

              obj.exam_attendance_not_marked_notification_contact_number = this.examSetting.exam_attendance_not_marked_notification_contact_number;
              obj.enable_exam_attendance_not_marked_daily_notification = this.getSumOfTableField(this.examSetting.enable_exam_attendance_not_marked_daily_notification);
              return obj;
            }
          }, {
            key: "saveExamSettings",
            value: function saveExamSettings() {
              var _this18 = this;

              var dataToSend = {};
              dataToSend = this.constructJsonToSend();
              console.log(dataToSend);
              this.auth.showLoader();
              this.apiService.savePartialData(dataToSend).subscribe(function (res) {
                _this18.auth.hideLoader();

                _this18.commonService.showErrorMessage('success', '', "All your setting saved successfully");

                _this18.cancel();
              }, function (err) {
                _this18.auth.hideLoader();

                _this18.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "cancel",
            value: function cancel() {}
          }, {
            key: "checkInstitutionType",
            value: function checkInstitutionType() {
              var _this19 = this;

              this.auth.institute_type.subscribe(function (res) {
                //course module
                if (res == "LANG") {
                  _this19.isLangInst = true;
                } else {
                  _this19.isLangInst = false;
                }
              });
            }
          }, {
            key: "fillJSONData",
            value: function fillJSONData(data) {
              this.fillTableCheckboxValue(this.examSetting.rank_to_send_for_marks_sms, data.rank_to_send_for_marks_sms);
              this.examSetting.is_exam_grad_feature = data.is_exam_grad_feature;
              this.fillTableCheckboxValue(this.examSetting.exam_schedule_notification, data.exam_schedule_notification);
              this.fillTableCheckboxValue(this.examSetting.enable_exam_attendance_not_marked_notification, data.enable_exam_attendance_not_marked_notification);
              this.fillTableCheckboxValue(this.examSetting.enable_exam_marks_not_update_notification, data.enable_exam_marks_not_update_notification);
              this.examSetting.exam_attendance_not_marked_notification_contact_number = data.exam_attendance_not_marked_notification_contact_number;
              this.fillTableCheckboxValue(this.examSetting.enable_exam_attendance_not_marked_daily_notification, data.enable_exam_attendance_not_marked_daily_notification);
              this.examSetting.exam_attendance_not_marked_daily_notification_contact_number = data.exam_attendance_not_marked_daily_notification_contact_number;

              if (this.examSetting.exam_attendance_not_marked_notification_contact_number != '' && this.examSetting.exam_attendance_not_marked_notification_contact_number != null) {
                this.examSetting.enable_exam_attendance_not_marked_notification.other = true;
              }

              if (this.examSetting.exam_attendance_not_marked_daily_notification_contact_number != '' && this.examSetting.exam_attendance_not_marked_daily_notification_contact_number != null) {
                this.examSetting.enable_exam_attendance_not_marked_daily_notification.other = true;
              }
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
            key: "getSettingFromServer",
            value: function getSettingFromServer() {
              var _this20 = this;

              this.auth.showLoader();
              this.apiService.getInstituteSettingFromServer().subscribe(function (res) {
                _this20.auth.hideLoader();

                _this20.test_series_feature = res.test_series_feature;

                _this20.fillJSONData(res);
              }, function (err) {
                _this20.auth.hideLoader();

                _this20.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }]);

          return ExamSettingComponent;
        }();

        ExamSettingComponent.ctorParameters = function () {
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

        ExamSettingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-exam-setting',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./exam-setting.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/exam-setting/exam-setting.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./exam-setting.component.scss */
          "./src/app/components/course-module/data-setup/exam-setting/exam-setting.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceFactory"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_5__["InstituteSettingService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])], ExamSettingComponent);
        return ExamSettingComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/manage-exam-grades/manage-exam-grades.component.scss":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/manage-exam-grades/manage-exam-grades.component.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleDataSetupManageExamGradesManageExamGradesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #334D6E;\n}\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n.breadcrumb-item > a {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n}\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 3.5rem;\n  margin-left: 0rem;\n}\n.flex {\n  display: flex;\n}\n.w15 {\n  width: 15%;\n  background-color: #dfe5f0;\n  padding: 10px;\n}\n.list li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n.list li a span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334d6e;\n}\n.list li img {\n  padding: 0px 10px;\n}\n.add_master_tag {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 10px;\n  font-weight: 600;\n}\nselect {\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 500;\n  background-color: #f5f6f8;\n}\n.input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  /*background-color: #f5f6f8;\n*/\n}\n.magnifying-glass {\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 5px;\n}\n.header-input {\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 600;\n  width: 700px;\n  color: #61758e;\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  /*background-color: #f5f6f8;*/\n}\n.header-input::-moz-placeholder {\n  padding-left: 10px;\n}\n.header-input:-ms-input-placeholder {\n  padding-left: 10px;\n}\n.header-input::placeholder {\n  padding-left: 10px;\n}\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 15px;\n}\n.p-15 {\n  padding-bottom: 15px;\n}\nselect {\n  width: 250px;\n  color: #b6b8bb;\n}\ntable {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 15px;\n}\nthead {\n  background-color: #DFE5F0;\n  font-weight: 600;\n}\nthead td {\n  background: #DFE5F0;\n}\ntd {\n  padding: 10px 15px;\n  color: #323C47;\n  font-size: 12px;\n}\ntbody {\n  font-weight: 500;\n}\ntr {\n  box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n}\n.section::before {\n  height: 0.4em;\n  display: table-row;\n  content: '';\n}\n.w96 {\n  width: calc(100% - 1rem);\n}\n.p-10 {\n  padding-top: 10px;\n}\n.p-30 {\n  padding-top: 30px;\n}\n.p-10-0 {\n  padding: 9px 0px;\n}\n.yes {\n  background-color: #CCFFAC;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n.no {\n  background-color: #FFCF88;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n.search {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.area-select {\n  font-size: 12px;\n  color: #787A7D;\n}\n.input-width {\n  width: 180px;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.pr-40 {\n  padding-right: 40px;\n}\n.cancel {\n  background-color: #fff;\n  border: 1px solid #109CF1;\n  color: #109CF1;\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.form-check-label {\n  margin-bottom: 0;\n  color: #334D6E;\n  font-size: 12px;\n  font-weight: 600;\n}\n.width205 {\n  width: 205px;\n}\n.description {\n  width: 200px;\n  margin: 0px 10px;\n}\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('Icon.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\ninput[type=\"date\"] {\n  padding: 6px 4px;\n  margin-right: 10px;\n}\n.add {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.mr-10 {\n  margin-right: 10px;\n}\n.center {\n  text-align: center;\n}\n.gray {\n  background-color: #F4F3F8;\n  height: 92vh;\n}\n/*chatbox*/\n.chatbox1 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chatbox2 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.chatbox3 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chatbox4 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.chatbox5 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chatbox6 {\n  width: 1033px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.chatbox7 {\n  width: 90px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chatbox8 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chatbox9 {\n  width: 819px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.chatbox-select {\n  font-size: 10px;\n}\n.chatbox-input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: #f3f3f3;\n}\n.col-form-label {\n  font-size: 13px;\n  font-weight: 400;\n  color: #AFB3B7;\n}\n.upload {\n  background-color: #29ACFC;\n}\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n#yourBtn {\n  position: relative;\n  top: 40px;\n  width: 100px;\n  padding: 10px;\n  background-color: #29ACFC;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 10px;\n}\n.top {\n  position: relative;\n  top: 40px;\n}\n.division {\n  border-right: 2px solid #C4C4C4;\n  margin: 40px 0px;\n}\n.radio {\n  font-size: 11px;\n  font-weight: 400;\n}\n.containerc {\n  display: block;\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.containerc input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  border: 1px solid #109CF1;\n}\n.containerc input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.containerc input:checked ~ .checkmark:after {\n  display: block;\n}\n.containerc .checkmark:after {\n  left: 5px;\n  top: 0px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n.top2 {\n  position: relative;\n  top: 10px;\n}\n.login {\n  position: relative;\n  top: -7px;\n  left: 2px;\n}\n.thumb {\n  padding-left: 10px;\n}\nmain {\n  padding-left: 0 !important;\n}\n.right {\n  float: right;\n}\nthead td, thead th {\n  border-top: none;\n  border-bottom: none;\n}\n.pageMargin {\n  margin-right: 20px;\n}\n.btn {\n  background: #0084f6;\n  color: white;\n  margin-top: -2rem;\n}\nth {\n  background-color: #DFE5F0;\n  color: black;\n}\ntr {\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n.tableBodyScroll tbody {\n  display: block;\n  overflow-y: auto;\n  background: #ffffff;\n}\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n.create-standard-field {\n  background-color: #efefef;\n  height: 92px;\n  margin-left: 10px;\n  width: 99%;\n}\ntable thead tr th {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\ntable tbody td .col-new {\n  text-align: center;\n}\ntable tbody tr {\n  border-left: none !important;\n}\ntable tbody tr td {\n  padding-bottom: 5px;\n  padding-top: 5px;\n  border-top: none !important;\n  border-bottom: none !important;\n}\ntable tbody tr td .edit {\n  cursor: pointer;\n}\ntable tbody tr td .anchorTag {\n  margin-left: 10px;\n}\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\ntable tbody tr .field-wrapper {\n  padding: 0px !important;\n}\ntable tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\ntable tbody tr .datePickerBox {\n  padding-right: 10px;\n  padding-bottom: 10px;\n}\ntable tbody .displayComp .edit-comp {\n  display: none;\n}\ntable tbody .editComp .view-comp {\n  display: none;\n}\n.anchorTagCursor {\n  cursor: pointer;\n}\n@media screen and (max-width: 995px), screen and (max-height: 768px) {\n  #divSlotTable {\n    margin-left: 0px !important;\n    margin-top: 15px;\n    margin-right: 15px !important;\n    max-height: 480px;\n    overflow: hidden;\n    width: 100%;\n  }\n  #divSlotTable .table-scroll-wrapper {\n    max-height: 430px;\n  }\n  #divSlotTable ::-webkit-scrollbar {\n    display: block;\n    width: 7px;\n    height: 7px;\n  }\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.astrick {\n  color: red;\n}\n.add-edit {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.add-edit i {\n  border: none;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 22px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.create-standard-form {\n  margin: 10px 0;\n  padding: 10px 20px 20px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc;\n}\n.closeBtnClass {\n  line-height: 11px !important;\n}\n.editCellInput {\n  margin: auto;\n  display: block;\n}\n.middle-section .middle-top {\n  margin-bottom: 10px;\n}\n.middle-section .middle-main .addBtnClass {\n  border: none;\n}\n.middle-section .middle-main .closeBtnClass {\n  border: none;\n}\n.middle-section .middle-main .row .btn {\n  margin-left: 0px;\n  margin-top: 10px;\n}\n.middle-section .middle-main .row .field-wrapper {\n  display: inline-block;\n  margin-left: 5px;\n}\n.middle-section .middle-main .row .field-wrapper label {\n  font-size: 12px;\n}\n.middle-section .middle-main .row .field-wrapper span {\n  color: red;\n  display: inline-block;\n}\n.filter_div {\n  margin-top: 3px;\n}\n.filter_div .field-wrapper {\n  margin-left: 20px;\n  padding-top: 0;\n  display: inline-block;\n}\n.filter_div .dropdown-div {\n  width: 125px;\n}\n.filter_div .dropdown-div .dropdown {\n  width: 100%;\n  height: 41px;\n  border: 1px solid #ddd;\n  background: none;\n  margin-top: 5px;\n  border-radius: 4px;\n  padding: 10px 20px;\n}\ninput {\n  height: 40px;\n}\n.c-lg-2 {\n  width: 15%;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvbWFuYWdlLWV4YW0tZ3JhZGVzL21hbmFnZS1leGFtLWdyYWRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvZGF0YS1zZXR1cC1ob21lL2RhdGEtc2V0dXAtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixr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aUI7RUFDakIsZUFBZTtBQXlvQjNCO0FBOXBCQTtFQXlCUSxlQUFlO0FBeW9CdkI7QUFyb0JBO0VBQ0ksY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBd29CakM7QUE1b0JBO0VBTVEsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQTBvQnhDO0FBdG9CQTtFQUNJLDRCQUE0QjtBQXlvQmhDO0FBdG9CQTtFQUNJLFlBQVk7RUFDWixjQUFjO0FBeW9CbEI7QUF0b0JBO0VBRVEsbUJBQW1CO0FBd29CM0I7QUExb0JBO0VBTVksWUFBWTtBQXdvQnhCO0FBOW9CQTtFQVNZLFlBQVk7QUF5b0J4QjtBQWxwQkE7RUFhZ0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQXlvQmhDO0FBdnBCQTtFQWlCZ0IscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQTBvQmhDO0FBNXBCQTtFQW9Cb0IsZUFBZTtBQTRvQm5DO0FBaHFCQTtFQXVCb0IsVUFBVTtFQUNWLHFCQUFxQjtBQTZvQnpDO0FBdm9CQTtFQUNJLGVBQWU7QUEwb0JuQjtBQTNvQkE7RUFHSSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtBQTRvQnpCO0FBanBCQTtFQVFJLFlBQVk7QUE2b0JoQjtBQXJwQkE7RUFVTSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUErb0J4QjtBQTNvQkE7RUFDSSxZQUFZO0FBOG9CaEI7QUE1b0JBO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtBQStvQnRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvbWFuYWdlLWV4YW0tZ3JhZGVzL21hbmFnZS1leGFtLWdyYWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vZGF0YS1zZXR1cC1ob21lL2RhdGEtc2V0dXAtaG9tZS5jb21wb25lbnQuc2Nzc1wiO1xuXG4ucGFnZU1hcmdpbntcbiAgICAvLyBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbn1cbnRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAgY29sb3I6IGJsYWNrO1xufVxudHIge1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgLy8gYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTBlYWVjO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgLy8gbWluLWhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDFweCBzb2xpZCByZ2JhKDIxMSwgMjEyLCAyMTMsIDAuNSk7XG59XG4udGFibGVCb2R5U2Nyb2xsIHRoZWFkLFxudGJvZHkgdHIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4uY3JlYXRlLXN0YW5kYXJkLWZpZWxke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgaGVpZ2h0OiA5MnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiA5OSU7XG59XG50YWJsZSB7XG4gICAgdGhlYWQge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGJvZHkge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgICAuY29sLW5ldyB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgLmVkaXQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbmNob3JUYWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmVkaXRPcHRpb25zIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhdGVQaWNrZXJCb3gge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRpc3BsYXlDb21wIHtcbiAgICAgICAgICAgIC52aWV3LWNvbXAge31cbiAgICAgICAgICAgIC5lZGl0LWNvbXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZWRpdENvbXAge1xuICAgICAgICAgICAgLnZpZXctY29tcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmVkaXQtY29tcCB7fVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYW5jaG9yVGFnQ3Vyc29yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgICAvLyBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk1cHgpLFxuc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAjZGl2U2xvdFRhYmxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNDgwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAudGFibGUtc2Nyb2xsLXdyYXBwZXIge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA3cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1pZGRsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmFzdHJpY2t7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5hZGQtZWRpdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGkge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuZXhwZW5kLWJveCB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5jcmVhdGUtc3RhbmRhcmQtZm9ybSB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjY2NjO1xuICAgIH1cbn1cblxuLmNsb3NlQnRuQ2xhc3Mge1xuICAgIGxpbmUtaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0Q2VsbElucHV0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5taWRkbGUtc2VjdGlvbiB7XG4gICAgLm1pZGRsZS10b3Age1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAubWlkZGxlLW1haW4ge1xuICAgICAgICAuYWRkQnRuQ2xhc3Mge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZUJ0bkNsYXNzIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uZmlsdGVyX2RpdiB7XG4gICAgbWFyZ2luLXRvcCA6M3B4O1xuLmZpZWxkLXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5kcm9wZG93bi1kaXYge1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICAuZHJvcGRvd24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDQxcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB9XG4gfVxufVxuaW5wdXQge1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5jLWxnLTIge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSIsIi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIj5cIjtcbiAgY29sb3I6ICMzMzRENkU7XG59XG4uYnJlYWRjcnVtYntcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5tYXJnaW4tYm90dG9tOiAwcHg7XG5wYWRkaW5nLWxlZnQ6IDA7XG59XG4uYnJlYWRjcnVtYi1pdGVtPmF7XG5jb2xvcjogIzMzNEQ2RTtcbmZvbnQtd2VpZ2h0OiA2MDA7XG5mb250LXNpemU6IDE2cHg7XG59XG5cblxuXG4udzk4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4ubmF2LWl0ZW0ge1xuICAubmF2LWxpbmsge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICAuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcbiAgbWFyZ2luOiAtMXJlbSAzLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLncxNSB7XG4gIHdpZHRoOiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmU1ZjA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubGlzdCB7IGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDBweDtcbiAgbWFyZ2luOiA3cHggMHB4O1xuICBhIHsgc3BhbiB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICMzMzRkNmU7XG4gIH1cbiAgfVxuICBpbWcge1xuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH1cbn1cbn1cbi5hZGRfbWFzdGVyX3RhZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDljZjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG59XG4uaW5wdXQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmODtcbiovXG59XG4ubWFnbmlmeWluZy1nbGFzcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0ZyYW1lMS5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgdGV4dC1pbmRlbnQ6IDVweDtcbn1cbi5oZWFkZXItaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDcwMHB4O1xuICBjb2xvcjogIzYxNzU4ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0ZyYW1lMS5zdmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmODsqL1xufVxuLmhlYWRlci1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbi1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ucC0xNSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuc2VsZWN0IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBjb2xvcjogI2I2YjhiYjtcbn1cblxuXG5cbnRhYmxle1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOjE1cHg7XG59XG50aGVhZHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICBmb250LXdlaWdodDogNjAwO1xuICAgdGR7XG4gICAgICAgYmFja2dyb3VuZDogI0RGRTVGMDtcbiAgIH1cbn1cbnRke1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICBmb250LXNpemU6IDEycHg7XG59XG50Ym9keXtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbnRye1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzotMXB4IDFweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xcHggMXB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuLnNlY3Rpb246OmJlZm9yZSB7XG4gIGhlaWdodDogMC40ZW07XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgY29udGVudDogJyc7XG59XG5cblxuLnc5NntcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xuICAvLyBtYXJnaW46IDBweCAxcmVtO1xuICAvLyBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbi5wLTEwe3BhZGRpbmctdG9wOiAxMHB4O31cbi5wLTMwe3BhZGRpbmctdG9wOiAzMHB4O31cbi5wLTEwLTB7IHBhZGRpbmc6IDlweCAwcHg7fVxuLnllc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDRkZBQztcbiAgY29sb3I6ICMzMjNDNDc7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ubm97XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNGODg7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLnNlYXJjaHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDBcbn1cbi5hcmVhLXNlbGVjdHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG59XG4uaW5wdXQtd2lkdGh7XG4gIHdpZHRoOiAxODBweDtcbn1cbi5wbC0xMHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnByLTQwe1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uY2FuY2Vse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6MXB4IHNvbGlkICMxMDlDRjE7XG4gICBjb2xvcjogIzEwOUNGMTtcbiAgIHBhZGRpbmc6IDlweCAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLmZvcm0tY2hlY2stbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDBcbn1cbi53aWR0aDIwNXtcbiAgd2lkdGg6IDIwNXB4O1xufVxuLmRlc2NyaXB0aW9ue1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG59XG4gaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvSWNvbi5zdmcnKSBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBwYWRkaW5nOiAycHggMHB4O1xufVxuaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gIHBhZGRpbmc6IDZweCA0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5hZGR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwXG59XG4ubXItMTB7XG5tYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JheXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjNGODtcbiAgaGVpZ2h0OiA5MnZoO1xufVxuLypjaGF0Ym94Ki9cbi5jaGF0Ym94MXtcbiAgd2lkdGg6IDQ2NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDJ7XG4gIHdpZHRoOiAxMTUzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDN7XG4gIHdpZHRoOiA0NjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g0e1xuICB3aWR0aDogMTE1M3B4O1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g1e1xuICB3aWR0aDogNDY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94NntcbiAgd2lkdGg6IDEwMzNweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94N3tcbiAgd2lkdGg6OTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g4e1xuICB3aWR0aDogNDY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94OXtcbiAgd2lkdGg6IDgxOXB4O1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3gtc2VsZWN0e1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uY2hhdGJveC1pbnB1dHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuLmNvbC1mb3JtLWxhYmVse1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjQUZCM0I3O1xufVxuLnVwbG9hZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbn1cbmlucHV0W3R5cGU9XCJmaWxlXCJde1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4jeW91ckJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4udG9we1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDBweDtcbn1cbi5kaXZpc2lvbntcbiAgYm9yZGVyLXJpZ2h0OiAgMnB4IHNvbGlkICNDNEM0QzQ7IFxuICBtYXJnaW46IDQwcHggMHB4O1xufVxuLnJhZGlve1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY29udGFpbmVyYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5cbi5jb250YWluZXJjIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cblxuLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTA5Q0YxO1xufVxuXG4uY29udGFpbmVyYyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cblxuLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4uY29udGFpbmVyYyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi5jb250YWluZXJjIC5jaGVja21hcms6YWZ0ZXIge1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4udG9wMntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG4ubG9naW57ICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTdweDtcbiAgICBsZWZ0OiAycHg7XG59XG4udGh1bWJ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbm1haW4ge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLnJpZ2h0IHsgXG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxudGhlYWQge1xuICB0ZCwgdGgge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/manage-exam-grades/manage-exam-grades.component.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/manage-exam-grades/manage-exam-grades.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ManageExamGradesComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupManageExamGradesManageExamGradesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageExamGradesComponent", function () {
        return ManageExamGradesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_examgradeservice_exam_grade_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/examgradeservice/exam-grade-service.service */
      "./src/app/services/examgradeservice/exam-grade-service.service.ts");
      /* harmony import */


      var _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/common-api-call.service */
      "./src/app/services/common-api-call.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

      var ManageExamGradesComponent =
      /** @class */
      function () {
        var ManageExamGradesComponent = /*#__PURE__*/function () {
          function ManageExamGradesComponent(gradeService, appC, auth, commonApiCall, msgSrvc) {
            _classCallCheck(this, ManageExamGradesComponent);

            this.gradeService = gradeService;
            this.appC = appC;
            this.auth = auth;
            this.commonApiCall = commonApiCall;
            this.msgSrvc = msgSrvc;
            this.showToggle = false;
            this.addData = {
              grade: "",
              description: "",
              institution_id: sessionStorage.getItem("institute_id"),
              exam_type_id: -1,
              grade_points: "",
              marks_from: "",
              marks_to: ""
            };
            this.editData = {
              grade: "",
              description: "",
              institution_id: sessionStorage.getItem("institute_id"),
              exam_type_id: -1,
              grade_points: "",
              marks_from: "",
              marks_to: ""
            };
            this.deleteData = {
              grade_id: ""
            };
            this.gotGrades = [];
            this.addArray = [];
            this.dummyArr = [0, 1, 2, 0, 1, 2];
            this.columnMaps = [0, 1, 2];
            this.dataStatus = false;
            this.type = "";
            this.examTypeList = [];
            this.selectedExamTypeId = -1;
            this.isSchoolModel = false;
            this.isSchoolModel = this.auth.schoolModel.value;
          }

          _createClass(ManageExamGradesComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this21 = this;

              this.fetchGrades();
              console.log("Grade Call" + this.isSchoolModel);
              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this21.type = "batch";
                } else {
                  _this21.type = "course";
                }
              });

              if (this.isSchoolModel) {
                console.log("Grade Call" + this.isSchoolModel);
                this.fetchInstituteExamTypes();
              }
            } // toggle for add grade div

          }, {
            key: "toggleCreateNewgrade",
            value: function toggleCreateNewgrade() {
              if (this.showToggle == false) {
                this.showToggle = true;
                document.getElementById("showCloseBtn").style.display = "";
                document.getElementById("showAddBtn").style.display = "none";
              } else {
                this.showToggle = false;
                document.getElementById("showCloseBtn").style.display = "none";
                document.getElementById("showAddBtn").style.display = "";
              }
            } // fetchGrades while api hits first time

          }, {
            key: "fetchGrades",
            value: function fetchGrades() {
              var _this22 = this;

              this.gradeService.fetchAllData().subscribe(function (data) {
                //console.log(data);
                _this22.gotGrades = data;
              }, function (error) {
                return error;
              });
            }
          }, {
            key: "valAddInputFields",
            value: function valAddInputFields(obj) {
              if (_utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(obj.grade) || this.isSchoolModel && _utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(obj.marks_from) || this.isSchoolModel && _utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(obj.marks_to) || this.isSchoolModel && _utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(obj.grade_points)) {
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "valEditInputFields",
            value: function valEditInputFields(obj) {
              if (this.isSchoolModel) {
                obj.marks_from_percent = String(obj.marks_from_percent);
                obj.marks_to_percent = String(obj.marks_to_percent);
                obj.grade_points = String(obj.grade_points);
              }

              if (_utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(obj.grade) || this.isSchoolModel && _utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(obj.marks_from_percent) || this.isSchoolModel && _utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(obj.marks_to_percent) || this.isSchoolModel && _utils_commonUtils__WEBPACK_IMPORTED_MODULE_6__["default"].isEmpty(obj.grade_points)) {
                return false;
              } else {
                return true;
              }
            } // data added to table

          }, {
            key: "addDataToTable",
            value: function addDataToTable() {
              var _this23 = this;

              if (!this.valAddInputFields(this.addData)) {
                var msg = {
                  type: "error",
                  title: "",
                  body: "All fields Are required"
                };
                this.appC.popToast(msg);
              } else {
                var payload = {};

                if (this.isSchoolModel) {
                  payload = {
                    grade: this.addData.grade,
                    description: this.addData.description,
                    institution_id: sessionStorage.getItem("institute_id"),
                    grade_points: this.addData.grade_points,
                    marks_from_percent: this.addData.marks_from,
                    marks_to_percent: this.addData.marks_to
                  };
                } else {
                  payload = {
                    grade: this.addData.grade,
                    description: this.addData.description,
                    institution_id: sessionStorage.getItem("institute_id")
                  };
                }

                this.gradeService.addData(payload).subscribe(function (data) {
                  var msg = {
                    type: "success",
                    body: "Grade added successfully"
                  };

                  _this23.appC.popToast(msg);

                  _this23.addData = {
                    institution_id: sessionStorage.getItem("institute_id"),
                    description: "",
                    grade: ""
                  }; // this.toggleCreateNewgrade();

                  _this23.fetchGrades();

                  _this23.selectedExamTypeId = -1;
                }, function (error) {
                  var msg = {
                    type: "error",
                    body: error.error.message
                  };

                  _this23.appC.popToast(msg);
                });
              }
            } // editing rows

          }, {
            key: "editRowTable",
            value: function editRowTable(row, index) {
              document.getElementById(("row" + index).toString()).classList.remove("displayComp");
              document.getElementById(("row" + index).toString()).classList.add("editComp");
              4;

              if (this.isSchoolModel) {
                this.selectedExamTypeId = row.exam_type_id;
              }
            } // put data for edited request

          }, {
            key: "saveInformation",
            value: function saveInformation(row, index) {
              var _this24 = this;

              if (!this.valEditInputFields(row)) {
                var msg = {
                  type: "error",
                  title: "",
                  body: "All fields Are required"
                };
                this.appC.popToast(msg);
              } else {
                var data = {};

                if (this.isSchoolModel) {
                  data = {
                    description: row.description,
                    grade: row.grade,
                    grade_id: row.grade_id,
                    institution_id: sessionStorage.getItem("institute_id"),
                    marks_from_percent: row.marks_from_percent,
                    marks_to_percent: row.marks_to_percent,
                    exam_type_id: this.selectedExamTypeId,
                    grade_points: row.grade_points
                  };
                } else {
                  data = {
                    description: row.description,
                    grade: row.grade,
                    grade_id: row.grade_id,
                    institution_id: sessionStorage.getItem("institute_id")
                  };
                }

                this.gradeService.saveEdited(data).subscribe(function (data) {
                  _this24.cancelEditRow(index);

                  _this24.fetchGrades();

                  _this24.selectedExamTypeId = -1;
                  var msg = {
                    type: "success",
                    body: "Grade updated successfully"
                  };

                  _this24.appC.popToast(msg);
                }, function (error) {
                  var acad = {
                    type: "error",
                    title: "",
                    body: error.error.message
                  };

                  _this24.appC.popToast(acad);

                  _this24.fetchGrades();

                  _this24.selectedExamTypeId = -1;
                });
              }
            }
          }, {
            key: "cancelEditRow",
            value: function cancelEditRow(index) {
              document.getElementById(("row" + index).toString()).classList.add("displayComp");
              document.getElementById(("row" + index).toString()).classList.remove("editComp");
              this.selectedExamTypeId = -1;
            } // delete particular grade

          }, {
            key: "deletingGrade",
            value: function deletingGrade(row, index) {
              var _this25 = this;

              var data = {
                grade_id: row.grade_id
              };

              if (confirm("Are you sure, you want to delete?")) {
                this.gradeService.deleteRow(data).subscribe(function (data) {
                  _this25.fetchGrades();

                  var msg = {
                    type: "error",
                    body: "Grade deleted successfully"
                  };

                  _this25.appC.popToast(msg);
                }, function (error) {
                  var acad = {
                    type: "error",
                    title: "",
                    body: error.error.message
                  };

                  _this25.appC.popToast(acad);

                  _this25.fetchGrades();
                });
              }
            }
          }, {
            key: "fetchInstituteExamTypesv2",
            value: function fetchInstituteExamTypesv2() {
              var _this26 = this;

              this.commonApiCall.fetchInstituteExamTypes(sessionStorage.getItem("institute_id")).subscribe(function (data) {
                _this26.examTypeList = data.result;
              }, function (err) {
                _this26.msgSrvc.showErrorMessage(_this26.msgSrvc.toastTypes.error, "", err.error.message);
              });
            }
          }, {
            key: "fetchInstituteExamTypes",
            value: function fetchInstituteExamTypes() {
              var _this27 = this;

              this.commonApiCall.examTypeList.subscribe(function (data) {
                _this27.examTypeList = data;
              });
            }
          }, {
            key: "selectedExamType",
            value: function selectedExamType(exam_type_id) {
              this.selectedExamTypeId = exam_type_id;
            }
          }]);

          return ManageExamGradesComponent;
        }();

        ManageExamGradesComponent.ctorParameters = function () {
          return [{
            type: _services_examgradeservice_exam_grade_service_service__WEBPACK_IMPORTED_MODULE_3__["ExamGradeServiceService"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_4__["CommonApiCallService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"]
          }];
        };

        ManageExamGradesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: "app-manage-exam-grades",
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./manage-exam-grades.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/manage-exam-grades/manage-exam-grades.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./manage-exam-grades.component.scss */
          "./src/app/components/course-module/data-setup/manage-exam-grades/manage-exam-grades.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_examgradeservice_exam_grade_service_service__WEBPACK_IMPORTED_MODULE_3__["ExamGradeServiceService"], _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_4__["CommonApiCallService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"]])], ManageExamGradesComponent);
        return ManageExamGradesComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/mark-distribution/mark-distribution.component.scss":
    /*!********************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/mark-distribution/mark-distribution.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleDataSetupMarkDistributionMarkDistributionComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".filter-item-2 {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filter-item-2 .add-class-btn {\n  border: 1px solid #1283f4;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: #1283f4;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  height: 30px;\n}\n\n.sms-table-wrapper {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.reason-input {\n  padding: 10px 20px;\n  font-size: 11px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 600;\n  width: 100%;\n  color: #4a627f;\n  height: 38px;\n}\n\n.modal-footer {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  border-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvbWFyay1kaXN0cmlidXRpb24vbWFyay1kaXN0cmlidXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IseUJBQXlCO0FBQzdCOztBQUhBO0VBSU0seUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0MsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBR2xCOztBQUFFO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUd2Qjs7QUFERTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7QUFJaEI7O0FBRkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBS2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvbWFyay1kaXN0cmlidXRpb24vbWFyay1kaXN0cmlidXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWl0ZW0tMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5hZGQtY2xhc3MtYnRuIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzEyODNmNDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgLnNtcy10YWJsZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuICAucmVhc29uLWlucHV0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNGE2MjdmO1xuICAgIGhlaWdodDogMzhweDtcbn1cbi5tb2RhbC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci10b3A6IDA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/mark-distribution/mark-distribution.component.ts":
    /*!******************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/mark-distribution/mark-distribution.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: MarkDistributionComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupMarkDistributionMarkDistributionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkDistributionComponent", function () {
        return MarkDistributionComponent;
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
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/http.service */
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

      var MarkDistributionComponent =
      /** @class */
      function () {
        var MarkDistributionComponent = /*#__PURE__*/function () {
          function MarkDistributionComponent(httpService, auth, router, msgService) {
            _classCallCheck(this, MarkDistributionComponent);

            this.httpService = httpService;
            this.auth = auth;
            this.router = router;
            this.msgService = msgService;
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.pageIndex = 1;
            this.totalRecords = 0;
            this.displayBatchSize = 25;
            this.staticPageData = [];
            this.staticPageDataSouece = [];
            this.isDistributionUpdate = false;
            this.addDistributionModel = {
              "institution_id": sessionStorage.getItem('institute_id'),
              "marks_distribution_name": "",
              "marks_value_percent": '',
              "description": "",
              "is_active": "Y"
            };
          }

          _createClass(MarkDistributionComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.setTableData();
              this.getStaticPageData();
            }
          }, {
            key: "setTableData",
            value: function setTableData() {
              this.headerSetting = [{
                primary_key: 'marks_distribution_id',
                value: "#",
                charactLimit: 25,
                sorting: true,
                visibility: true
              }, {
                primary_key: 'marks_distribution_name',
                value: "Mark Distribution Type",
                charactLimit: 25,
                sorting: true,
                visibility: true
              }, {
                primary_key: 'marks_value_percent',
                value: "Mark Value",
                charactLimit: 25,
                sorting: false,
                visibility: true
              }, {
                primary_key: 'action',
                value: "Action",
                charactLimit: 10,
                sorting: false,
                visibility: true,
                edit: true,
                "delete": true
              }];
              this.tableSetting = {
                width: "100%",
                height: "58vh"
              };
              this.rowColumns = [{
                width: "10%",
                textAlign: "left"
              }, {
                width: "40%",
                textAlign: "left"
              }, {
                width: "25%",
                textAlign: "left"
              }, {
                width: "25%",
                textAlign: "left"
              }];
            }
          }, {
            key: "getStaticPageData",
            value: function getStaticPageData() {
              var _this28 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/courseExamSchedule/fetch-marks-distribution/' + sessionStorage.getItem('institute_id') + '?is_used=true').subscribe(function (res) {
                _this28.auth.hideLoader();

                _this28.staticPageDataSouece = res.result;
                _this28.totalRecords = _this28.staticPageDataSouece.length;
                _this28.staticPageData = _this28.getDataFromDataSource(0);
              }, function (err) {
                _this28.auth.hideLoader();
              });
            } // pagination functions 

          }, {
            key: "fetchTableDataByPage",
            value: function fetchTableDataByPage(index) {
              this.pageIndex = index;
              var startindex = this.displayBatchSize * (index - 1);
              this.staticPageData = this.getDataFromDataSource(startindex);
            }
          }, {
            key: "fetchNext",
            value: function fetchNext() {
              this.pageIndex++;
              this.fetchTableDataByPage(this.pageIndex);
            }
          }, {
            key: "fetchPrevious",
            value: function fetchPrevious() {
              if (this.pageIndex != 1) {
                this.pageIndex--;
                this.fetchTableDataByPage(this.pageIndex);
              }
            }
          }, {
            key: "getDataFromDataSource",
            value: function getDataFromDataSource(startindex) {
              var t = this.staticPageDataSouece.slice(startindex, startindex + this.displayBatchSize);
              return t;
            }
          }, {
            key: "updateTableBatchSize",
            value: function updateTableBatchSize(event) {
              this.pageIndex = 1;
              this.displayBatchSize = event;
              this.fetchTableDataByPage(this.pageIndex);
            }
          }, {
            key: "editRow",
            value: function editRow(object) {
              console.log(object);

              if (!object.data.is_used) {
                this.isDistributionUpdate = true;
                this.addDistributionModel.marks_distribution_name = object.data.marks_distribution_name;
                this.addDistributionModel.marks_value_percent = object.data.marks_value_percent;
                this.addDistributionModel.description = object.data.description;
                this.addDistributionModel.is_active = object.data.is_active;
                this.addDistributionModel.marks_distribution_id = object.data.marks_distribution_id;
                $('#addExamType').modal('show');
              } else {
                this.msgService.showErrorMessage('error', '', 'Mark Distribution is already used. So we cannot Edit it');
              }
            }
          }, {
            key: "inputValidationCheck",
            value: function inputValidationCheck() {
              if (this.addDistributionModel.marks_distribution_name == '') {
                this.msgService.showErrorMessage('error', '', "Please enter Mark Distribution Type");
                return false;
              } else if (this.addDistributionModel.marks_value_percent == '' || this.addDistributionModel.marks_value_percent == '0') {
                this.msgService.showErrorMessage('error', '', 'Please enter valid Mark Value');
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "addUpdateDistribution",
            value: function addUpdateDistribution() {
              if (this.inputValidationCheck()) {
                this.isDistributionUpdate ? this.updateDistributionCall() : this.CreateDistributionCall();
              }
            }
          }, {
            key: "CreateDistributionCall",
            value: function CreateDistributionCall() {
              var _this29 = this;

              this.auth.showLoader();
              this.httpService.postData('/api/v1/courseExamSchedule/create-marks-distribution', this.addDistributionModel).subscribe(function (res) {
                _this29.auth.hideLoader();

                _this29.msgService.showErrorMessage('success', '', 'Mark Distribution Created Successfully');

                $('#addExamType').modal('hide');

                _this29.clearModalData();

                _this29.getStaticPageData();
              }, function (err) {
                _this29.auth.hideLoader();

                _this29.msgService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "updateDistributionCall",
            value: function updateDistributionCall() {
              var _this30 = this;

              this.auth.showLoader();
              var url = '/api/v1/courseExamSchedule/update-marks-distribution/' + this.addDistributionModel.marks_distribution_id;
              delete this.addDistributionModel.marks_distribution_id;
              this.httpService.putData(url, this.addDistributionModel).subscribe(function (res) {
                _this30.auth.hideLoader();

                _this30.msgService.showErrorMessage('success', '', 'Mark Distribution Updated Successfully');

                $('#addExamType').modal('hide');

                _this30.clearModalData();

                _this30.getStaticPageData();
              }, function (err) {
                _this30.auth.hideLoader();

                _this30.msgService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "clearModalData",
            value: function clearModalData() {
              this.addDistributionModel = {
                "marks_distribution_name": "",
                "marks_value_percent": '',
                "description": "",
                "is_active": "Y",
                "institution_id": sessionStorage.getItem('institute_id')
              };
            }
          }, {
            key: "deleteRow",
            value: function deleteRow(obj) {
              var _this31 = this;

              if (!obj.data.is_used) {
                if (confirm('Are you Sure, you want to Delete Mark Distribution?')) {
                  this.auth.showLoader();
                  this.httpService.deleteDataById('/api/v1/courseExamSchedule/delete-marks-distribution/' + obj.data.marks_distribution_id).subscribe(function (res) {
                    _this31.auth.hideLoader();

                    _this31.msgService.showErrorMessage('success', '', 'Mark Distribution Deleted Successfully');

                    _this31.getStaticPageData();
                  }, function (err) {
                    _this31.auth.hideLoader();
                  });
                }
              } else {
                this.msgService.showErrorMessage('error', '', 'Mark Distribution is already used. So we cannot delete it');
              }
            }
          }]);

          return MarkDistributionComponent;
        }();

        MarkDistributionComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }];
        };

        MarkDistributionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-mark-distribution',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./mark-distribution.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/mark-distribution/mark-distribution.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./mark-distribution.component.scss */
          "./src/app/components/course-module/data-setup/mark-distribution/mark-distribution.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]])], MarkDistributionComponent);
        return MarkDistributionComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/mark-setting/mark-setting.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/mark-setting/mark-setting.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleDataSetupMarkSettingMarkSettingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".filter-item {\n  width: 170px;\n  float: left;\n  margin: 0px 1%;\n}\n\n.filter-item .form-ctrl {\n  width: 240px;\n  padding: 0.375rem 0.75rem;\n  font-size: 12px;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #d4d0d0;\n  border-radius: 4px;\n  height: 35px;\n}\n\n.filter-item select {\n  color: #787a7d;\n}\n\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n  margin-bottom: 10px;\n  padding-right: 2%;\n}\n\n.role-container {\n  padding: 10px;\n  margin-top: 10px;\n  border: 1px solid #eef1f4;\n  max-height: 50vh;\n  overflow-y: auto;\n}\n\n.role-list-container {\n  max-height: 50vh;\n  overflow-y: auto;\n  padding: 10px;\n}\n\n.role-data-container {\n  display: flex;\n  flex-direction: row;\n  width: 20%;\n  float: left;\n  padding: 5px;\n}\n\n.examTypeHeader {\n  color: #109cf1;\n  margin: 10px;\n  margin-left: 0;\n  margin-top: 20px;\n  font-weight: 600;\n}\n\n.btn-section {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.standardContainer {\n  background: #109cf1;\n  color: white;\n  padding: 5px;\n  border-radius: 0px 20px 20px 0px;\n  font-weight: 500;\n}\n\n.borderDiv {\n  padding-left: 0;\n  border: 1px solid #eef1f4;\n  margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvbWFyay1zZXR0aW5nL21hcmstc2V0dGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztBQUNsQjs7QUFKQTtFQUtRLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0FBR3BCOztBQWZBO0VBZVEsY0FBYztBQUl0Qjs7QUFEQTtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUlyQjs7QUFEQTtFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFJcEI7O0FBREE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFJakI7O0FBREE7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUloQjs7QUFGQTtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFLcEI7O0FBSEE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBTXZCOztBQUpBO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQU9wQjs7QUFKQTtFQUNJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0FBT3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvbWFyay1zZXR0aW5nL21hcmstc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItaXRlbSB7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMHB4IDElO1xuICAgIC5mb3JtLWN0cmwge1xuICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQwZDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgIH1cbiAgICBzZWxlY3Qge1xuICAgICAgICBjb2xvcjogIzc4N2E3ZDtcbiAgICB9XG59XG4udzk4IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbi5yb2xlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWYxZjQ7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucm9sZS1saXN0LWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5yb2xlLWRhdGEtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4uZXhhbVR5cGVIZWFkZXIge1xuICAgIGNvbG9yOiAjMTA5Y2YxO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYnRuLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zdGFuZGFyZENvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzEwOWNmMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ib3JkZXJEaXYge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVmMWY0O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/mark-setting/mark-setting.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/mark-setting/mark-setting.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: MarkSettingComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupMarkSettingMarkSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkSettingComponent", function () {
        return MarkSettingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/common-api-call.service */
      "./src/app/services/common-api-call.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");

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

      var MarkSettingComponent =
      /** @class */
      function () {
        var MarkSettingComponent = /*#__PURE__*/function () {
          function MarkSettingComponent(commonApiCall, msgService, httpService, auth) {
            _classCallCheck(this, MarkSettingComponent);

            this.commonApiCall = commonApiCall;
            this.msgService = msgService;
            this.httpService = httpService;
            this.auth = auth;
            this.examTypeData = [];
            this.markTypeData = [];
            this.markDistributionData = [];
            this.marks_distribution_ids = [];
            this.standardData = [];
            this.exam_type_list = [];
            this.totalMarks = 0;
            this.model = {
              mark_type: '-1',
              exam_type_list: [],
              institute_id: sessionStorage.getItem('institute_id')
            };
          }

          _createClass(MarkSettingComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getMarksType();
              this.getExamType();
              this.getMarkDistribution(); // setTimeout(() => {

              this.changeMarkType('onload', this.model.mark_type); // }, 3000);
            }
          }, {
            key: "changeMarkType",
            value: function changeMarkType(calltype, obj) {
              this.examTypeData.filter(function (data) {
                data.isChecked = false;
              });
              this.markDistributionData.filter(function (data) {
                data.isChecked = false;
              });
              this.fetchSettingByMarkType(calltype, obj);
            }
          }, {
            key: "makeExamWiseArray",
            value: function makeExamWiseArray() {
              var _this32 = this;

              if (this.examTypeData && this.examTypeData.length) {
                this.examTypeData.forEach(function (element) {
                  var key = element.exam_type;
                  element[key] = [];
                  element.totalMarks = 0; // element[key] = this.markDistributionData;

                  _this32.markDistributionData.forEach(function (eu) {
                    var obj = {
                      marks_distribution_id: '',
                      marks_distribution_name: '',
                      marks_value_percent: ''
                    };
                    obj.marks_distribution_id = eu.marks_distribution_id;
                    obj.marks_distribution_name = eu.marks_distribution_name;
                    obj.marks_value_percent = eu.marks_value_percent;
                    element[key].push(obj);
                  });
                });
              }
            }
          }, {
            key: "fetchSettingByMarkType",
            value: function fetchSettingByMarkType(calltype, mark_type) {
              var _this33 = this;

              this.auth.showLoader();
              var url = '/api/v1/courseExamSchedule/fetch-marks-setting/' + sessionStorage.getItem('institute_id');

              if (calltype == 'onChange') {
                url = '/api/v1/courseExamSchedule/fetch-marks-setting/' + sessionStorage.getItem('institute_id') + '?marks_type=' + mark_type;
              }

              this.httpService.getData(url).subscribe(function (res) {
                _this33.auth.hideLoader();

                if (res.result) {
                  _this33.model.mark_type = res.result.mark_type;
                }

                if (_this33.model.mark_type == 1 || _this33.model.mark_type == 4 || _this33.model.mark_type == 5 || _this33.model.mark_type == 6) {
                  _this33.getStandard();
                } else if (_this33.model.mark_type == 2 || _this33.model.mark_type == 3) {
                  _this33.makeExamWiseArray();
                }

                setTimeout(function () {
                  _this33.setSettingData(res);
                }, 3000);
              }, function (err) {
                _this33.auth.hideLoader();

                _this33.msgService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "setSettingData",
            value: function setSettingData(obj) {
              var mark_type = Number(this.model.mark_type);

              switch (mark_type) {
                case 0:
                  {
                    this.setSettingForGlobalWise(obj);
                    break;
                  }

                case 1:
                  {
                    this.setSettingForGlobalWise(obj);
                    break;
                  }

                case 2:
                  {
                    this.setSettingForExamWise(obj);
                    break;
                  }

                case 3:
                  {
                    this.setSettingForExamWise(obj);
                    break;
                  }

                case 4:
                  {
                    this.setSettingForSubjectWise(obj);
                    break;
                  }

                case 5:
                  {
                    this.setSettingForClassExamWise(obj);
                    break;
                  }

                case 6:
                  {
                    this.setForClassExSubWise(obj);
                    break;
                  }
              }
            }
          }, {
            key: "setSettingForGlobalWise",
            value: function setSettingForGlobalWise(obj) {
              var _this34 = this;

              var exam_type_list = this.model.mark_type == 0 ? obj.result.exam_type_list : obj.result.exam_type_ids;

              if (obj.result && exam_type_list && exam_type_list.length) {
                exam_type_list.forEach(function (element) {
                  _this34.examTypeData.filter(function (data) {
                    var exam_type_id = _this34.model.mark_type == 0 ? element.exam_type_id : element;

                    if (data.exam_type_id == exam_type_id) {
                      data.isChecked = true;
                    }
                  });
                });

                if (this.model.mark_type == 0) {
                  obj.result.exam_type_list[0].marks_distribution_ids.forEach(function (element) {
                    _this34.markDistributionData.filter(function (data) {
                      if (data.marks_distribution_id == element) {
                        data.isChecked = true;
                      }
                    });
                  });
                  this.totalMarks = 100;
                } else if (this.model.mark_type == 1) {
                  this.totalMarks = 0;

                  if (obj.result.stardard_list && obj.result.stardard_list.length) {
                    obj.result.stardard_list.forEach(function (element) {
                      _this34.standardData.filter(function (data) {
                        if (data.standard_id == element.standard_id) {
                          data.totalMarks = 100;
                          _this34.totalMarks = _this34.totalMarks + 100;
                          element.marks_distribution_ids.forEach(function (mark) {
                            var key = data.standard_name;
                            data[key].filter(function (mark1) {
                              if (mark == mark1.marks_distribution_id) {
                                mark1.isChecked = true;
                              }
                            });
                          });
                        }
                      });
                    });
                  }
                }
              }
            }
          }, {
            key: "setSettingForExamWise",
            value: function setSettingForExamWise(obj) {
              var _this35 = this;

              this.totalMarks = 0;

              if (obj.result && obj.result.exam_type_list && obj.result.exam_type_list.length) {
                obj.result.exam_type_list.forEach(function (element) {
                  _this35.examTypeData.filter(function (data) {
                    if (data.exam_type_id == element.exam_type_id) {
                      data.totalMarks = 100;
                      _this35.totalMarks = _this35.model.mark_type == 3 ? _this35.totalMarks + 100 : 100;
                      var key = data.exam_type;
                      element.marks_distribution_ids.forEach(function (mark) {
                        data[key].filter(function (data1) {
                          if (mark == data1.marks_distribution_id) {
                            data1.isChecked = true;
                          }
                        });
                      });
                    }
                  });
                });
              }
            }
          }, {
            key: "setSettingForSubjectWise",
            value: function setSettingForSubjectWise(obj) {
              var _this36 = this;

              this.exam_type_list = [];
              this.totalMarks = 0;

              if (obj.result && obj.result.stardard_list && obj.result.stardard_list.length) {
                obj.result.stardard_list.forEach(function (standard) {
                  _this36.standardData.forEach(function (element) {
                    element.totalMarks = 100;

                    if (element.subject_list && element.subject_list.length) {
                      standard.subject_list.forEach(function (sub) {
                        element.subject_list.filter(function (subject) {
                          subject.totalMarks = 100;

                          if (subject.subject_id == sub.subject_id) {
                            _this36.totalMarks = _this36.totalMarks + 100;
                            sub.marks_distribution_ids.forEach(function (mark_id) {
                              var key = subject.subject_name;
                              subject[key].forEach(function (mark) {
                                mark.totalMarks = 100;

                                if (mark_id == mark.marks_distribution_id) {
                                  mark.isChecked = true;
                                }
                              });
                            });
                          }
                        });
                      });
                    }

                    _this36.exam_type_list.push(obj);
                  });
                });
              }
            }
          }, {
            key: "setSettingForClassExamWise",
            value: function setSettingForClassExamWise(obj) {
              var _this37 = this;

              this.totalMarks = 0;

              if (obj.result && obj.result.stardard_list && obj.result.stardard_list.length) {
                // this.totalMarks = 100;
                obj.result.stardard_list.forEach(function (element) {
                  _this37.standardData.filter(function (data) {
                    if (data.standard_id == element.standard_id) {
                      data.totalMarks = 100;
                      element.exam_type_list.forEach(function (ex) {
                        var key1 = data.standard_name;
                        data[key1].filter(function (ex1) {
                          if (ex.exam_type_id == ex1.exam_type_id) {
                            ex1.totalMarks = 100;
                            _this37.totalMarks = _this37.totalMarks + 100;
                            ex.marks_distribution_ids.forEach(function (mark) {
                              var key = ex1.exam_type;
                              ex1[key].filter(function (mark1) {
                                if (mark == mark1.marks_distribution_id) {
                                  mark1.isChecked = true;
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            }
          }, {
            key: "setForClassExSubWise",
            value: function setForClassExSubWise(obj) {
              var _this38 = this;

              this.totalMarks = 0;

              if (obj.result.stardard_list && obj.result.stardard_list.length) {
                obj.result.stardard_list.forEach(function (element) {
                  _this38.standardData.filter(function (data) {
                    data.totalMarks = 0;

                    if (data.standard_id == element.standard_id) {
                      element.exam_type_list.forEach(function (ex) {
                        var key1 = data.standard_name;
                        data[key1].filter(function (ex1) {
                          var sub_key = ex1.exam_type;
                          ex1.totalMarks = 0;

                          if (ex.exam_type_id == ex1.exam_type_id) {
                            ex1.totalMarks = ex1.totalMarks + 100;
                            ex.subject_list.forEach(function (sub) {
                              ex1[sub_key].filter(function (sub1) {
                                sub1.totalMarks = 100;
                                _this38.totalMarks = _this38.totalMarks + 100;

                                if (sub.subject_id == sub1.subject_id) {
                                  sub.marks_distribution_ids.forEach(function (mark) {
                                    var mark_key = sub1.subject_name;
                                    data.totalMarks = data.totalMarks + 100;
                                    sub1[mark_key].filter(function (mark1) {
                                      if (mark == mark1.marks_distribution_id) {
                                        mark1.isChecked = true;
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            }
          }, {
            key: "getMarksType",
            value: function getMarksType() {
              var _this39 = this;

              this.httpService.getData('/api/v1/masterData/type/MARKS_TYPE').subscribe(function (res) {
                _this39.markTypeData = res;
              }, function (err) {
                _this39.msgService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "getExamType",
            value: function getExamType() {
              var _this40 = this;

              this.commonApiCall.fetchInstituteExamTypes(sessionStorage.getItem('institute_id')).subscribe(function (data) {
                _this40.examTypeData = data.result;
              }, function (err) {
                _this40.msgService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "getMarkDistribution",
            value: function getMarkDistribution() {
              var _this41 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/courseExamSchedule/fetch-marks-distribution/' + sessionStorage.getItem('institute_id')).subscribe(function (res) {
                _this41.auth.hideLoader();

                _this41.markDistributionData = res.result;
              }, function (err) {
                _this41.auth.hideLoader();
              });
            }
          }, {
            key: "checkMarkTotal",
            value: function checkMarkTotal(obj) {
              this.totalMarks = obj.isChecked ? obj.marks_value_percent + this.totalMarks : this.totalMarks - obj.marks_value_percent;
            }
          }, {
            key: "checkInputValidation",
            value: function checkInputValidation() {
              var obj = Number(this.model.mark_type);

              switch (obj) {
                case 0:
                  {
                    return this.checkForGlobalWise();
                  }

                case 1:
                  {
                    return this.checkForClassWise();
                  }

                case 2:
                  {
                    return this.checkForExamWise();
                  }

                case 3:
                  {
                    return this.checkForExamIndividual();
                  }

                case 4:
                  {
                    return this.checkForSubjectWise();
                  }

                case 5:
                  {
                    return this.checkForClassExWise();
                  }

                case 6:
                  {
                    return this.checkForClassExSub();
                  }
              }
            }
          }, {
            key: "checkForGlobalWise",
            value: function checkForGlobalWise() {
              this.exam_type_list = [];
              this.marks_distribution_ids = [];

              for (var i = 0; i < this.markDistributionData.length; i++) {
                if (this.markDistributionData[i].isChecked) {
                  this.marks_distribution_ids.push(this.markDistributionData[i].marks_distribution_id);
                }
              }

              for (var _i = 0; _i < this.examTypeData.length; _i++) {
                if (this.examTypeData[_i].isChecked) {
                  this.exam_type_list.push(this.examTypeData[_i].exam_type_id);
                }
              }

              if (this.model.mark_type == '-1') {
                this.msgService.showErrorMessage('error', '', 'Please select Mark Type');
                return false;
              } else if (this.exam_type_list.length == 0) {
                this.msgService.showErrorMessage('error', '', 'The Exam field is required.');
                return false;
              } else if (this.marks_distribution_ids.length == 0) {
                this.msgService.showErrorMessage('error', '', 'The Mark Percentage field is required.');
                return false;
              } else if (this.totalMarks != 100) {
                this.msgService.showErrorMessage('error', '', 'Select mark percentage of 100 percent.');
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "checkForClassWise",
            value: function checkForClassWise() {
              var _this42 = this;

              this.exam_type_list = [];

              for (var i = 0; i < this.examTypeData.length; i++) {
                if (this.examTypeData[i].isChecked) {
                  this.exam_type_list.push(this.examTypeData[i].exam_type_id);
                }
              }

              if (this.exam_type_list.length == 0) {
                this.msgService.showErrorMessage('error', '', 'The Exam field is required.');
                return false;
              }

              if (this.totalMarks == 0) {
                this.msgService.showErrorMessage('error', '', 'The Mark Percentage field is required.');
                return false;
              } else {
                var obj = {
                  stardard_list: []
                };
                var tempMsg = '';
                this.standardData.forEach(function (element) {
                  if (element.totalMarks != 0 && element.totalMarks == 100) {
                    var temp = {
                      standard_id: '',
                      standard_name: '',
                      marks_distribution_ids: '',
                      totalMarks: 0
                    };
                    element.marks_distribution_ids = [];
                    var key = element.standard_name;

                    for (var _i2 = 0; _i2 < element[key].length; _i2++) {
                      if (element[key][_i2].isChecked) {
                        element.marks_distribution_ids.push(element[key][_i2].marks_distribution_id);
                      }
                    }

                    temp.standard_id = element.standard_id;
                    temp.standard_name = element.standard_name;
                    temp.marks_distribution_ids = element.marks_distribution_ids;
                    temp.totalMarks = element.totalMarks;
                    obj.stardard_list.push(temp);
                  } else {
                    tempMsg = tempMsg + 'Select mark percentage in 100 percent of class ' + element.standard_name + '.';
                  }
                });

                if (tempMsg != '') {
                  this.msgService.showErrorMessage('error', '', tempMsg);
                  return false;
                } else {
                  this.model.stardard_list = [];
                  obj.stardard_list.forEach(function (standard) {
                    var tempObj = {
                      'standard_id': standard.standard_id,
                      marks_distribution_ids: standard.marks_distribution_ids
                    };

                    _this42.model.stardard_list.push(tempObj);
                  });
                  this.model.exam_type_ids = this.exam_type_list;
                  return true;
                }
              }
            }
          }, {
            key: "checkForExamWise",
            value: function checkForExamWise() {
              var _this43 = this;

              if (this.totalMarks == 0) {
                this.msgService.showErrorMessage('error', '', 'The Mark Percentage field is required.');
                return false;
              }

              if (this.totalMarks > 0 && this.totalMarks != 100) {
                this.msgService.showErrorMessage('error', '', 'Select mark percentage in 100 percent of all exam .');
                return false;
              } else {
                this.exam_type_list = [];
                this.examTypeData.forEach(function (element) {
                  if (element.totalMarks > 0) {
                    var key = element.exam_type;
                    element.marks_distribution_ids = [];

                    for (var i = 0; i < element[key].length; i++) {
                      if (element[key][i].isChecked) {
                        element.marks_distribution_ids.push(element[key][i].marks_distribution_id);
                      }
                    }

                    var obj = {
                      exam_type_id: element.exam_type_id,
                      marks_distribution_ids: element.marks_distribution_ids
                    };

                    _this43.exam_type_list.push(obj);
                  }
                });
                this.model.exam_type_list = this.exam_type_list;
                return true;
              }
            }
          }, {
            key: "checkForExamIndividual",
            value: function checkForExamIndividual() {
              var _this44 = this;

              if (this.totalMarks == 0) {
                this.msgService.showErrorMessage('error', '', 'The Mark Percentage field is required. The Exam field is required.');
                return false;
              } else {
                var tempMsg = '';
                this.exam_type_list = [];
                this.examTypeData.forEach(function (element) {
                  if (element.totalMarks > 0 && element.totalMarks != 100) {
                    tempMsg = tempMsg + 'Select mark percentage in 100 percent of exam ' + element.exam_type + '.';
                  } else {
                    if (element.totalMarks == 100) {
                      var key = element.exam_type;
                      element.marks_distribution_ids = [];

                      for (var i = 0; i < element[key].length; i++) {
                        if (element[key][i].isChecked) {
                          element.marks_distribution_ids.push(element[key][i].marks_distribution_id);
                        }
                      }

                      var obj = {
                        exam_type_id: element.exam_type_id,
                        marks_distribution_ids: element.marks_distribution_ids
                      };

                      _this44.exam_type_list.push(obj);
                    }
                  }
                });

                if (tempMsg != '') {
                  this.msgService.showErrorMessage('error', '', tempMsg);
                  return false;
                } else {
                  this.model.exam_type_list = this.exam_type_list;
                  return true;
                }
              }
            }
          }, {
            key: "checkForSubjectWise",
            value: function checkForSubjectWise() {
              var _this45 = this;

              if (this.totalMarks == 0) {
                this.msgService.showErrorMessage('error', '', 'The Mark Percentage field is required.');
                return false;
              } else {
                var tempMsg = '';
                this.exam_type_list = [];
                this.standardData.forEach(function (element) {
                  var obj = {
                    standard_id: element.standard_id,
                    subject_list: []
                  };

                  if (element.subject_list && element.subject_list.length) {
                    element.subject_list.forEach(function (subject) {
                      if (subject.totalMarks == 100) {
                        var sub_obj = {
                          subject_id: '',
                          marks_distribution_ids: []
                        };
                        sub_obj.subject_id = subject.subject_id;
                        var key = subject.subject_name;
                        subject[key].forEach(function (mark) {
                          if (mark.isChecked) {
                            sub_obj.marks_distribution_ids.push(mark.marks_distribution_id);
                          }
                        });
                        obj.subject_list.push(sub_obj);
                      } else {
                        tempMsg = tempMsg + 'Select mark percentage in 100 percent of subject ' + subject.subject_name + ' in ' + element.standard_name + '. ';
                      }
                    });
                  }

                  _this45.exam_type_list.push(obj);
                });

                if (tempMsg != '') {
                  this.msgService.showErrorMessage('error', '', tempMsg);
                  return false;
                } else {
                  this.model.stardard_list = this.exam_type_list;
                  return true;
                }
              }
            }
          }, {
            key: "checkForClassExWise",
            value: function checkForClassExWise() {
              var _this46 = this;

              if (this.totalMarks == 0) {
                this.msgService.showErrorMessage('error', '', 'The Mark Percentage field is required. The Exam field is required.');
                return false;
              } else {
                this.exam_type_list = [];
                var tempMsg = '';
                this.standardData.forEach(function (element) {
                  if (element.totalMarks == 0) {
                    tempMsg = tempMsg + ' Select mark percentage of class ' + element.standard_name + '.';
                  } else {
                    var exam_key = element.standard_name;
                    var obj = {
                      standard_id: '',
                      exam_type_list: []
                    };
                    obj.standard_id = element.standard_id;
                    element[exam_key].forEach(function (exam) {
                      if (exam.totalMarks > 0 && exam.totalMarks != 100) {
                        tempMsg = tempMsg + ' Select mark percentage in 100 percent of exam ' + exam.exam_type + ' in class ' + element.standard_name + ' .';
                      } else if (exam.totalMarks == 100) {
                        var mark_key = exam.exam_type;
                        var markObj = {
                          exam_type_id: '',
                          marks_distribution_ids: []
                        };
                        markObj.exam_type_id = exam.exam_type_id;
                        exam[mark_key].forEach(function (mark) {
                          if (mark.isChecked) {
                            markObj.marks_distribution_ids.push(mark.marks_distribution_id);
                          }
                        });
                        obj.exam_type_list.push(markObj);
                      }
                    });

                    _this46.exam_type_list.push(obj);
                  }
                });

                if (tempMsg != '') {
                  this.msgService.showErrorMessage('error', '', tempMsg);
                  return false;
                } else {
                  this.model.stardard_list = this.exam_type_list;
                  return true;
                }
              }
            }
          }, {
            key: "checkForClassExSub",
            value: function checkForClassExSub() {
              var _this47 = this;

              if (this.totalMarks == 0) {
                this.msgService.showErrorMessage('error', '', 'The Mark Percentage field is required. The Exam field is required.');
                return false;
              } else {
                var tempMsg = '';
                this.exam_type_list = [];
                this.standardData.forEach(function (element) {
                  if (element.totalMarks > 0) {
                    var obj = {
                      standard_id: element.standard_id,
                      exam_type_list: []
                    };
                    var key = element.standard_name;
                    element[key].forEach(function (exam) {
                      if (exam.totalMarks != 0) {
                        var sub_key = exam.exam_type;

                        if (exam[sub_key] && exam[sub_key].length) {
                          var exam_obj = {
                            exam_type_id: '',
                            subject_list: []
                          };
                          exam_obj.exam_type_id = exam.exam_type_id;
                          exam[sub_key].forEach(function (subject) {
                            if (subject.totalMarks == 100) {
                              var sub_obj = {
                                subject_id: '',
                                marks_distribution_ids: []
                              };
                              sub_obj.subject_id = subject.subject_id;
                              var _key = subject.subject_name;

                              subject[_key].forEach(function (mark) {
                                if (mark.isChecked) {
                                  sub_obj.marks_distribution_ids.push(mark.marks_distribution_id);
                                }
                              });

                              exam_obj.subject_list.push(sub_obj);
                            } else {
                              tempMsg = tempMsg + 'Select mark percentage in 100 percent of exam ' + exam.exam_type + 'of subject ' + subject.subject_name + 'in ' + element.standard_name + '. ';
                            }

                            obj.exam_type_list.push(exam_obj);
                          });
                        }

                        _this47.exam_type_list.push(obj);
                      }
                    });
                  } else {
                    tempMsg = tempMsg + ' Select mark percentage in 100 percent of class ' + element.standard_name + '.';
                  }
                });

                if (tempMsg != '') {
                  this.msgService.showErrorMessage('error', '', tempMsg);
                  return false;
                } else {
                  this.model.stardard_list = this.exam_type_list;
                  return true;
                }
              }
            }
          }, {
            key: "makeJsonTOSend",
            value: function makeJsonTOSend() {
              var _this48 = this;

              if (this.model.mark_type == 0) {
                this.model.exam_type_list = [];
                this.exam_type_list.forEach(function (element) {
                  var obj = {
                    exam_type_id: element,
                    marks_distribution_ids: _this48.marks_distribution_ids
                  };

                  _this48.model.exam_type_list.push(obj);
                });
              }
            }
          }, {
            key: "updateMarkType",
            value: function updateMarkType() {
              var _this49 = this;

              if (this.checkInputValidation()) {
                this.makeJsonTOSend();
                this.auth.showLoader();
                this.httpService.postData('/api/v1/courseExamSchedule/create-marks-setting', this.model).subscribe(function (res) {
                  _this49.auth.hideLoader();

                  _this49.msgService.showErrorMessage('success', '', 'Setting Updated Successfully');
                }, function (err) {
                  _this49.auth.hideLoader();

                  _this49.msgService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "setSettingForStandard",
            value: function setSettingForStandard() {
              var _this50 = this;

              if (this.standardData && this.standardData.length) {
                this.auth.showLoader();

                if (this.model.mark_type == 1) {
                  this.standardData.forEach(function (element) {
                    var key = element.standard_name;
                    element[key] = [];
                    element.totalMarks = 0; // element[key] = this.markDistributionData;

                    _this50.markDistributionData.forEach(function (eu) {
                      var obj = {
                        marks_distribution_id: '',
                        marks_distribution_name: '',
                        marks_value_percent: ''
                      };
                      obj.marks_distribution_id = eu.marks_distribution_id;
                      obj.marks_distribution_name = eu.marks_distribution_name;
                      obj.marks_value_percent = eu.marks_value_percent;
                      element[key].push(obj);
                    });
                  });
                } else if (this.model.mark_type == 4) {
                  this.standardData.forEach(function (element) {
                    if (element.subject_list && element.subject_list.length) {
                      element.subject_list.forEach(function (subject) {
                        var key = subject.subject_name;
                        subject[key] = [];
                        subject.totalMarks = 0; // element[key] = this.markDistributionData;

                        _this50.markDistributionData.forEach(function (eu) {
                          var obj = {
                            marks_distribution_id: '',
                            marks_distribution_name: '',
                            marks_value_percent: ''
                          };
                          obj.marks_distribution_id = eu.marks_distribution_id;
                          obj.marks_distribution_name = eu.marks_distribution_name;
                          obj.marks_value_percent = eu.marks_value_percent;
                          subject[key].push(obj);
                        });
                      });
                    }
                  });
                } else if (this.model.mark_type == 5) {
                  this.standardData.forEach(function (element) {
                    var key = element.standard_name;
                    element[key] = [];
                    element.totalMarks = 0;

                    _this50.examTypeData.forEach(function (exam) {
                      var exam_key = exam.exam_type;
                      var exam_obj = {
                        exam_type_id: '',
                        exam_type: '',
                        totalMarks: 0,
                        exam_key: []
                      };
                      exam_obj.exam_type = exam.exam_type;
                      exam_obj.exam_type_id = exam.exam_type_id;
                      exam_obj[exam_key] = [];

                      _this50.markDistributionData.forEach(function (eu) {
                        var obj = {
                          marks_distribution_id: '',
                          marks_distribution_name: '',
                          marks_value_percent: ''
                        };
                        obj.marks_distribution_id = eu.marks_distribution_id;
                        obj.marks_distribution_name = eu.marks_distribution_name;
                        obj.marks_value_percent = eu.marks_value_percent;
                        exam_obj[exam_key].push(obj);
                      });

                      element[key].push(exam_obj);
                    });
                  });
                } else {
                  this.standardData.forEach(function (element) {
                    var key = element.standard_name;
                    element[key] = [];
                    element.totalMarks = 0;

                    _this50.examTypeData.forEach(function (exam) {
                      var exam_key = exam.exam_type;
                      var exam_obj = {
                        exam_type_id: '',
                        exam_type: '',
                        totalMarks: 0,
                        exam_key: []
                      };
                      exam_obj.exam_type = exam.exam_type;
                      exam_obj.exam_type_id = exam.exam_type_id;
                      exam_obj[exam_key] = [];

                      if (element.subject_list && element.subject_list.length) {
                        element.subject_list.forEach(function (sub) {
                          var sub_key = sub.subject_name;
                          var sub_obj = {
                            subject_id: '',
                            subject_name: '',
                            totalMarks: 0
                          };
                          sub_obj.subject_id = sub.subject_id;
                          sub_obj.subject_name = sub.subject_name;
                          sub_obj[sub_key] = [];

                          _this50.markDistributionData.forEach(function (eu) {
                            var obj = {
                              marks_distribution_id: '',
                              marks_distribution_name: '',
                              marks_value_percent: ''
                            };
                            obj.marks_distribution_id = eu.marks_distribution_id;
                            obj.marks_distribution_name = eu.marks_distribution_name;
                            obj.marks_value_percent = eu.marks_value_percent;
                            sub_obj[sub_key].push(obj);
                          });

                          exam_obj[exam_key].push(sub_obj);
                        });
                      }

                      element[key].push(exam_obj);
                    });
                  });
                }

                this.auth.hideLoader();
              }
            }
          }, {
            key: "getStandard",
            value: function getStandard() {
              var _this51 = this;

              if (this.standardData == null || this.standardData.length == 0) {
                this.auth.showLoader();
                this.httpService.getData('/api/v1/standards/standard-subject-list/' + sessionStorage.getItem('institute_id') + '?is_active=Y&is_subject_required=true').subscribe(function (res) {
                  _this51.standardData = res.result;

                  _this51.setSettingForStandard();
                }, function (err) {
                  _this51.msgService.showErrorMessage('error', '', err.error.message);
                });
              } else {
                this.setSettingForStandard();
              }
            }
          }, {
            key: "examWiseMarkTotal",
            value: function examWiseMarkTotal(standard, obj) {
              if (this.model.mark_type == 2) {
                this.totalMarks = obj.isChecked ? obj.marks_value_percent + this.totalMarks : this.totalMarks - obj.marks_value_percent;
                standard.totalMarks = this.totalMarks;
              } else {
                standard.totalMarks = obj.isChecked ? obj.marks_value_percent + standard.totalMarks : standard.totalMarks - obj.marks_value_percent;
                this.totalMarks = obj.isChecked ? obj.marks_value_percent + this.totalMarks : this.totalMarks - obj.marks_value_percent;
              }
            }
          }, {
            key: "classWiseMarkTotal",
            value: function classWiseMarkTotal(standard, obj) {
              standard.totalMarks = obj.isChecked ? obj.marks_value_percent + standard.totalMarks : standard.totalMarks - obj.marks_value_percent;
              this.totalMarks = obj.isChecked ? obj.marks_value_percent + this.totalMarks : this.totalMarks - obj.marks_value_percent;
            }
          }, {
            key: "subjectWiseMarkTotal",
            value: function subjectWiseMarkTotal(subject, mark) {
              if (mark.isChecked) {
                subject.totalMarks = mark.marks_value_percent + subject.totalMarks;
                this.totalMarks = this.totalMarks + mark.marks_value_percent;
              } else {
                subject.totalMarks = subject.totalMarks - mark.marks_value_percent;
                this.totalMarks = this.totalMarks - mark.marks_value_percent;
              }
            }
          }, {
            key: "classExamWiseMarkTotal",
            value: function classExamWiseMarkTotal(stanadrd, exam, mark) {
              if (mark.isChecked) {
                stanadrd.totalMarks = mark.marks_value_percent + stanadrd.totalMarks;
                exam.totalMarks = mark.marks_value_percent + exam.totalMarks;
                this.totalMarks = this.totalMarks + mark.marks_value_percent;
              } else {
                stanadrd.totalMarks = mark.marks_value_percent - stanadrd.totalMarks;
                exam.totalMarks = exam.totalMarks - mark.marks_value_percent;
                this.totalMarks = this.totalMarks - mark.marks_value_percent;
              }
            }
          }, {
            key: "classExamSubjectWiseTotal",
            value: function classExamSubjectWiseTotal(standard, exam, subject, mark) {
              if (mark.isChecked) {
                subject.totalMarks = subject.totalMarks + mark.marks_value_percent;
                exam.totalMarks = exam.totalMarks + mark.marks_value_percent;
                standard.totalMarks = standard.totalMarks + mark.marks_value_percent;
                this.totalMarks = this.totalMarks + mark.marks_value_percent;
              } else {
                subject.totalMarks = subject.totalMarks - mark.marks_value_percent;
                exam.totalMarks = exam.totalMarks - mark.marks_value_percent;
                standard.totalMarks = standard.totalMarks - mark.marks_value_percent;
                this.totalMarks = this.totalMarks - mark.marks_value_percent;
              }
            }
          }]);

          return MarkSettingComponent;
        }();

        MarkSettingComponent.ctorParameters = function () {
          return [{
            type: _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_2__["CommonApiCallService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]
          }];
        };

        MarkSettingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-mark-setting',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./mark-setting.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/mark-setting/mark-setting.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./mark-setting.component.scss */
          "./src/app/components/course-module/data-setup/mark-setting/mark-setting.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_common_api_call_service__WEBPACK_IMPORTED_MODULE_2__["CommonApiCallService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]])], MarkSettingComponent);
        return MarkSettingComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/master-tag/master-tag.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/master-tag/master-tag.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleDataSetupMasterTagMasterTagComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #334D6E;\n}\n\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n\n.breadcrumb-item > a {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 3.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #dfe5f0;\n  padding: 10px;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list li a span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334d6e;\n}\n\n.list li img {\n  padding: 0px 10px;\n}\n\n.add_master_tag {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\nselect {\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 500;\n  background-color: #f5f6f8;\n}\n\n.input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  /*background-color: #f5f6f8;\n*/\n}\n\n.magnifying-glass {\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 5px;\n}\n\n.header-input {\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 600;\n  width: 700px;\n  color: #61758e;\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  /*background-color: #f5f6f8;*/\n}\n\n.header-input::-moz-placeholder {\n  padding-left: 10px;\n}\n\n.header-input:-ms-input-placeholder {\n  padding-left: 10px;\n}\n\n.header-input::placeholder {\n  padding-left: 10px;\n}\n\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 15px;\n}\n\n.p-15 {\n  padding-bottom: 15px;\n}\n\nselect {\n  width: 250px;\n  color: #b6b8bb;\n}\n\ntable {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 15px;\n}\n\nthead {\n  background-color: #DFE5F0;\n  font-weight: 600;\n}\n\nthead td {\n  background: #DFE5F0;\n}\n\ntd {\n  padding: 10px 15px;\n  color: #323C47;\n  font-size: 12px;\n}\n\ntbody {\n  font-weight: 500;\n}\n\ntr {\n  box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n}\n\n.section::before {\n  height: 0.4em;\n  display: table-row;\n  content: '';\n}\n\n.w96 {\n  width: calc(100% - 1rem);\n}\n\n.p-10 {\n  padding-top: 10px;\n}\n\n.p-30 {\n  padding-top: 30px;\n}\n\n.p-10-0 {\n  padding: 9px 0px;\n}\n\n.yes {\n  background-color: #CCFFAC;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.no {\n  background-color: #FFCF88;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.search {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.area-select {\n  font-size: 12px;\n  color: #787A7D;\n}\n\n.input-width {\n  width: 180px;\n}\n\n.pl-10 {\n  padding-left: 10px;\n}\n\n.pr-40 {\n  padding-right: 40px;\n}\n\n.cancel {\n  background-color: #fff;\n  border: 1px solid #109CF1;\n  color: #109CF1;\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n  color: #334D6E;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.width205 {\n  width: 205px;\n}\n\n.description {\n  width: 200px;\n  margin: 0px 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('Icon.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  padding: 6px 4px;\n  margin-right: 10px;\n}\n\n.add {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.center {\n  text-align: center;\n}\n\n.gray {\n  background-color: #F4F3F8;\n  height: 92vh;\n}\n\n/*chatbox*/\n\n.chatbox1 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox2 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox3 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox4 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox5 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox6 {\n  width: 1033px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox7 {\n  width: 90px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox8 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox9 {\n  width: 819px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox-select {\n  font-size: 10px;\n}\n\n.chatbox-input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: #f3f3f3;\n}\n\n.col-form-label {\n  font-size: 13px;\n  font-weight: 400;\n  color: #AFB3B7;\n}\n\n.upload {\n  background-color: #29ACFC;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n#yourBtn {\n  position: relative;\n  top: 40px;\n  width: 100px;\n  padding: 10px;\n  background-color: #29ACFC;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.top {\n  position: relative;\n  top: 40px;\n}\n\n.division {\n  border-right: 2px solid #C4C4C4;\n  margin: 40px 0px;\n}\n\n.radio {\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.containerc {\n  display: block;\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.containerc input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  border: 1px solid #109CF1;\n}\n\n.containerc input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.containerc input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.containerc .checkmark:after {\n  left: 5px;\n  top: 0px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.top2 {\n  position: relative;\n  top: 10px;\n}\n\n.login {\n  position: relative;\n  top: -7px;\n  left: 2px;\n}\n\n.thumb {\n  padding-left: 10px;\n}\n\nmain {\n  padding-left: 0 !important;\n}\n\n.right {\n  float: right;\n}\n\nthead td, thead th {\n  border-top: none;\n  border-bottom: none;\n}\n\n.w96 {\n  width: 98%;\n}\n\n.master-wrapper {\n  margin: 0px;\n  /* overflow: auto; */\n  height: auto;\n}\n\n.header-full {\n  border: 1px;\n  background-color: white;\n}\n\n.m-5 {\n  margin: 5px;\n}\n\n.filter_div {\n  padding: 1rem;\n}\n\n.filter_div .field-wrapper {\n  margin-left: 20px;\n  padding-top: 0;\n  display: inline-block;\n}\n\n.filter_div .dropdown-div {\n  width: 160px;\n}\n\n.filter_div .dropdown-div .dropdown {\n  width: 100%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.header-section {\n  /* padding-bottom: 30px;\n     border: 1px solid lightgrey;\n    box-shadow: 0 0 2px 2px #dadada; */\n}\n\n.close-btn {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.close-btn span {\n  cursor: pointer;\n}\n\n.create-btn {\n  background: #0084f6;\n  border: 1px solid #0084f6;\n  color: white;\n}\n\n.dropdown-div .dropdown {\n  width: 50%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.pt-2 {\n  padding-top: 2px;\n}\n\n.tag-detail-container {\n  /*  margin-top: 15px; */\n}\n\n.p-0-5 {\n  padding: 0 5px !important;\n}\n\n.edit-color {\n  color: blue;\n}\n\n.delete-color {\n  color: red;\n}\n\n.table-header {\n  line-height: 10px;\n  height: 10px;\n}\n\n.search-box {\n  border: 1px solid #efefef;\n  width: 70%;\n  float: right;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.input-wrapper {\n  position: relative;\n  padding-top: 15px;\n}\n\n.table-control {\n  height: 50px;\n}\n\n.b-grey {\n  background: #DFE5F0;\n  padding: 10px 15px;\n  height: 38px;\n}\n\n.line-0 {\n  line-height: 0px;\n}\n\n.tbl-row {\n  height: 40px;\n  border-top: none !important;\n  border-bottom: none !important;\n}\n\n.noSearchItem {\n  text-align: center;\n  padding-top: 20px;\n  font-weight: bold;\n  font-size: larger;\n}\n\nth {\n  background-color: #e0eaec;\n  color: black;\n  text-align: left;\n}\n\ntd {\n  text-align: left;\n}\n\ntr {\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\ntbody {\n  display: block;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\nthead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-left: none !important;\n}\n\nselect {\n  color: black;\n  padding: 0;\n  font-size: 12px;\n  background: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvZGF0YS1zZXR1cC1ob21lL2RhdGEtc2V0dXAtaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvbWFzdGVyLXRhZy9tYXN0ZXItdGFnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUNDaEI7O0FEQ0E7RUFDQSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUNFZjs7QURBQTtFQUNBLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQ0dmOztBREVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQ0NsQjs7QURDQTtFQUVNLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQ0N0Qjs7QURUQTtFQVdNLDJDQUEyQztFQUMzQyx5QkFBeUI7QUNFL0I7O0FERUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUNDbkI7O0FEQ0E7RUFDRSxhQUFhO0FDRWY7O0FEQUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGFBQWE7QUNHZjs7QUREQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtBQ0lqQjs7QURQQTtFQUtNLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUNNcEI7O0FEZEE7RUFZTSxpQkFBaUI7QUNNdkI7O0FERkE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQ0tsQjs7QURIQTtFQUNFLGtCQUFrQjtF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bGUvZGF0YS1zZXR1cC9tYXN0ZXItdGFnL21hc3Rlci10YWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCI+XCI7XG4gIGNvbG9yOiAjMzM0RDZFO1xufVxuLmJyZWFkY3J1bWJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xubWFyZ2luLWJvdHRvbTogMHB4O1xucGFkZGluZy1sZWZ0OiAwO1xufVxuLmJyZWFkY3J1bWItaXRlbT5he1xuY29sb3I6ICMzMzRENkU7XG5mb250LXdlaWdodDogNjAwO1xuZm9udC1zaXplOiAxNnB4O1xufVxuXG5cblxuLnc5OCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLm5hdi1pdGVtIHtcbiAgLm5hdi1saW5rIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMxMDljZjEgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMS41cmVtIDByZW07XG4gIG1hcmdpbjogLTFyZW0gMy41cmVtO1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53MTUge1xuICB3aWR0aDogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNWYwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmxpc3QgeyBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAwcHg7XG4gIG1hcmdpbjogN3B4IDBweDtcbiAgYSB7IHNwYW4ge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjMzM0ZDZlO1xuICB9XG4gIH1cbiAgaW1nIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG59XG59XG4uYWRkX21hc3Rlcl90YWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Y2YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5zZWxlY3Qge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4O1xufVxuLmlucHV0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG4qL1xufVxuLm1hZ25pZnlpbmctZ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9GcmFtZTEuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIHRleHQtaW5kZW50OiA1cHg7XG59XG4uaGVhZGVyLWlucHV0IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiA3MDBweDtcbiAgY29sb3I6ICM2MTc1OGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9GcmFtZTEuc3ZnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7Ki9cbn1cbi5oZWFkZXItaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1haW4tc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnAtMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbnNlbGVjdCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgY29sb3I6ICNiNmI4YmI7XG59XG5cblxuXG50YWJsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDoxNXB4O1xufVxudGhlYWR7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgIHRke1xuICAgICAgIGJhY2tncm91bmQ6ICNERkU1RjA7XG4gICB9XG59XG50ZHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBjb2xvcjogIzMyM0M0NztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxudGJvZHl7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG50cntcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6LTFweCAxcHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDFweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cbi5zZWN0aW9uOjpiZWZvcmUge1xuICBoZWlnaHQ6IDAuNGVtO1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gIGNvbnRlbnQ6ICcnO1xufVxuXG5cbi53OTZ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgLy8gbWFyZ2luOiAwcHggMXJlbTtcbiAgLy8gbWFyZ2luLXRvcDogLTIwcHg7XG59XG4ucC0xMHtwYWRkaW5nLXRvcDogMTBweDt9XG4ucC0zMHtwYWRkaW5nLXRvcDogMzBweDt9XG4ucC0xMC0weyBwYWRkaW5nOiA5cHggMHB4O31cbi55ZXN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0ZGQUM7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm5ve1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRjg4O1xuICBjb2xvcjogIzMyM0M0NztcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5zZWFyY2h7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwXG59XG4uYXJlYS1zZWxlY3R7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNzg3QTdEO1xufVxuLmlucHV0LXdpZHRoe1xuICB3aWR0aDogMTgwcHg7XG59XG4ucGwtMTB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5wci00MHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmNhbmNlbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgY29sb3I6ICMxMDlDRjE7XG4gICBwYWRkaW5nOiA5cHggMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDBcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwXG59XG4ud2lkdGgyMDV7XG4gIHdpZHRoOiAyMDVweDtcbn1cbi5kZXNjcmlwdGlvbntcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuIGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0ljb24uc3ZnJykgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgcGFkZGluZzogMnB4IDBweDtcbn1cbmlucHV0W3R5cGU9XCJkYXRlXCJde1xuICBwYWRkaW5nOiA2cHggNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYWRke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLm1yLTEwe1xubWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyYXl7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEYzRjg7XG4gIGhlaWdodDogOTJ2aDtcbn1cbi8qY2hhdGJveCovXG4uY2hhdGJveDF7XG4gIHdpZHRoOiA0NjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3gye1xuICB3aWR0aDogMTE1M3B4O1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3gze1xuICB3aWR0aDogNDY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94NHtcbiAgd2lkdGg6IDExNTNweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94NXtcbiAgd2lkdGg6IDQ2NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDZ7XG4gIHdpZHRoOiAxMDMzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDd7XG4gIHdpZHRoOjkwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94OHtcbiAgd2lkdGg6IDQ2NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDl7XG4gIHdpZHRoOiA4MTlweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94LXNlbGVjdHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNoYXRib3gtaW5wdXR7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cbi5jb2wtZm9ybS1sYWJlbHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0FGQjNCNztcbn1cbi51cGxvYWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG59XG5pbnB1dFt0eXBlPVwiZmlsZVwiXXtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuI3lvdXJCdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnRvcHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQwcHg7XG59XG4uZGl2aXNpb257XG4gIGJvcmRlci1yaWdodDogIDJweCBzb2xpZCAjQzRDNEM0OyBcbiAgbWFyZ2luOiA0MHB4IDBweDtcbn1cbi5yYWRpb3tcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNvbnRhaW5lcmMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuXG4uY29udGFpbmVyYyBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG5cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzEwOUNGMTtcbn1cblxuLmNvbnRhaW5lcmMgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuXG5cbi5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLmNvbnRhaW5lcmMgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4uY29udGFpbmVyYyAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnRvcDJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuLmxvZ2lueyAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC03cHg7XG4gICAgbGVmdDogMnB4O1xufVxuLnRodW1ie1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5tYWluIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5yaWdodCB7IFxuICAgIGZsb2F0OiByaWdodDtcbn1cbnRoZWFkIHtcbiAgdGQsIHRoIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi9kYXRhLXNldHVwLWhvbWUvZGF0YS1zZXR1cC1ob21lLmNvbXBvbmVudC5zY3NzJztcblxuLnc5NiB7XG4gICAgd2lkdGg6IDk4JTtcbn1cbi5tYXN0ZXItd3JhcHBlcntcbiAgICBtYXJnaW46IDBweDtcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cbiAgICBoZWlnaHQ6IGF1dG87XG59XG4uaGVhZGVyLWZ1bGx7XG4gICAgYm9yZGVyOiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubS01e1xuICAgIG1hcmdpbjo1cHhcbn1cbi5maWx0ZXJfZGl2IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuLmZpZWxkLXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5kcm9wZG93bi1kaXYge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICAuZHJvcGRvd24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiB9XG59XG4uaGVhZGVyLXNlY3Rpb257XG4gICAvKiBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMnB4ICNkYWRhZGE7ICovXG59XG5cbi5jbG9zZS1idG57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBzcGFue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLmNyZWF0ZS1idG57ICBcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgY29sb3I6d2hpdGVcbn1cbi5kcm9wZG93bi1kaXYge1xuICAgIC5kcm9wZG93biB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gfVxuIC5wdC0ye1xuICAgICBwYWRkaW5nLXRvcDogMnB4O1xuIH1cbiAudGFnLWRldGFpbC1jb250YWluZXJ7XG4gICAgLyogIG1hcmdpbi10b3A6IDE1cHg7ICovXG4gfVxuIC5wLTAtNXtcbiAgICAgcGFkZGluZzogMCA1cHggIWltcG9ydGFudDtcbiB9XG4gLmVkaXQtY29sb3J7XG4gICAgIGNvbG9yOiBibHVlO1xuIH1cbiAuZGVsZXRlLWNvbG9yIHtcbiAgICAgY29sb3I6IHJlZDtcbiB9XG4gLnRhYmxlLWhlYWRlcntcbiAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgIGhlaWdodDogMTBweDtcbiB9XG4gLnNlYXJjaC1ib3h7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcbiAgICB3aWR0aDogNzAlO1xuICAgIGZsb2F0OiByaWdodDtcbiB9XG4gLnAtMCB7XG4gICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiB9XG4gLmlucHV0LXdyYXBwZXIge1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuIH1cbiAudGFibGUtY29udHJvbHtcbiAgICAgaGVpZ2h0OiA1MHB4O1xuIH1cbiAuYi1ncmV5e1xuICAgIGJhY2tncm91bmQ6ICNERkU1RjA7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGhlaWdodDogMzhweDtcbiB9XG4gLmxpbmUtMHtcbiAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiB9XG4gLnRibC1yb3d7XG4gICAgIGhlaWdodDogNDBweDtcbiAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gfVxuIC5ub1NlYXJjaEl0ZW17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuIH1cblxuIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGVhZWM7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG50ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRyIHtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIC8vIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2UwZWFlYztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxudGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgLy8gbWluLWhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDFweCBzb2xpZCByZ2JhKDIxMSwgMjEyLCAyMTMsIDAuNSk7XG59XG50aGVhZCxcbnRib2R5IHRyIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG59XG5zZWxlY3Qge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/master-tag/master-tag.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/master-tag/master-tag.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: MasterTagComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupMasterTagMasterTagComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MasterTagComponent", function () {
        return MasterTagComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _master_tag_master_tag_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../master-tag/master-tag.component.service */
      "./src/app/components/course-module/data-setup/master-tag/master-tag.component.service.ts");

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

      var MasterTagComponent =
      /** @class */
      function () {
        var MasterTagComponent = /*#__PURE__*/function () {
          function MasterTagComponent(tagSrvc, msgSrvc, auth) {
            _classCallCheck(this, MasterTagComponent);

            this.tagSrvc = tagSrvc;
            this.msgSrvc = msgSrvc;
            this.auth = auth;
            this.allTagsList = [];
            this.selectedTag = '-1';
            this.tagDetailsData = [];
            this.tagName = '';
            this.tagDescription = '';
            this.instituteId = '';
            this.disableDelete = false;
            this.searchTag = '';
            this.isSearchItemExist = false;
            this.isProfessional = false;
          }

          _createClass(MasterTagComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this52 = this;

              this.auth.currentInstituteId.subscribe(function (id) {
                _this52.instituteId = id;
              });
              this.auth.institute_type.subscribe(function (res) {
                if (res == 'LANG') {
                  _this52.isProfessional = true;
                } else {
                  _this52.isProfessional = false;
                }
              });
              this.getAllTags();
            } //fetch master tags

          }, {
            key: "getAllTags",
            value: function getAllTags() {
              var _this53 = this;

              this.auth.showLoader();
              this.tagDetailsData = [];
              this.allTagsList = [];
              this.tagSrvc.fetchAllMasterTags().subscribe(function (data) {
                _this53.allTagsList = data;
                _this53.tagDetailsData = _this53.allTagsList;

                _this53.auth.hideLoader();

                if (!_this53.allTagsList.length) {
                  _this53.msgSrvc.showErrorMessage('info', '', 'No tags linked');
                }
              }, function (error) {
                _this53.auth.hideLoader();

                _this53.msgSrvc.showErrorMessage('Error', '', error.error.message);
              });
            }
          }, {
            key: "selectTag",
            value: function selectTag(tagId) {
              this.selectedTag = tagId; //  this.showDetails = false;
            } //fetch tag details wrt tagId

          }, {
            key: "getTagDetails",
            value: function getTagDetails() {
              var _this54 = this;

              this.auth.showLoader();

              if (this.selectedTag != '-1') {
                this.tagSrvc.fetchTagDetails(this.selectedTag).subscribe(function (data) {
                  //  this.showDetails = true;
                  _this54.tagDetailsData = data; //converting object to array

                  _this54.tagDetailsData = new Array(_this54.tagDetailsData);

                  _this54.auth.hideLoader();
                }, function (err) {
                  _this54.auth.hideLoader();

                  _this54.msgSrvc.showErrorMessage(_this54.msgSrvc.toastTypes.error, '', err.error.message);
                });
              } else {
                this.auth.hideLoader();
                this.getAllTags(); //  this.msgSrvc.showErrorMessage(this.msgSrvc.toastTypes.error,'', 'Please select master tag')
              }
            }
          }, {
            key: "openDeleteModal",
            value: function openDeleteModal(id) {
              this.idToBeDeleted = id;
              this.disableDelete = false;
              $('#deleteTag').modal('show');
            }
          }, {
            key: "openEditModal",
            value: function openEditModal(tagObject) {
              this.tagId = tagObject.tagId;
              this.editTagName = tagObject.tagName;
              this.editTagDescription = tagObject.description;
              this.editTagStatus = tagObject.is_active;
              $('#updateTag').modal('show');
            }
          }, {
            key: "updateMasterTag",
            value: function updateMasterTag() {
              var _this55 = this;

              this.auth.showLoader();
              var payload = {
                'tagId': this.tagId,
                'tagName': this.editTagName,
                'description': this.editTagDescription,
                'instituteId': this.instituteId,
                'is_active': this.editTagStatus
              };
              this.tagSrvc.updateTagDetails(payload).subscribe(function (resp) {
                var temp = resp;

                _this55.msgSrvc.showErrorMessage('success', '', temp.message);

                $('#updateTag').modal('hide');

                _this55.auth.hideLoader();

                _this55.getAllTags();

                _this55.getTagDetails();
              }, function (err) {
                _this55.auth.hideLoader();

                _this55.msgSrvc.showErrorMessage(_this55.msgSrvc.toastTypes.error, '', err.error.message);
              });
            } // delete functionality

          }, {
            key: "deleteMasterTag",
            value: function deleteMasterTag() {
              var _this56 = this;

              this.auth.showLoader();
              this.disableDelete = true;
              this.tagSrvc.deleteTagDetails(this.idToBeDeleted).subscribe(function (data) {
                var temp = data;

                _this56.msgSrvc.showErrorMessage('success', '', temp.message);

                _this56.auth.hideLoader();

                $('#deleteTag').modal('hide');
                _this56.selectedTag = '-1';

                _this56.getTagDetails();
              }, function (err) {
                _this56.auth.hideLoader();

                _this56.disableDelete = false;

                _this56.msgSrvc.showErrorMessage(_this56.msgSrvc.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "createMasterTag",
            value: function createMasterTag() {
              var _this57 = this;

              if (this.tagName == '') {
                this.msgSrvc.showErrorMessage('error', '', "Enter tag name");
                return false;
              }

              if (this.tagName.length > 100) {
                this.msgSrvc.showErrorMessage('error', '', "Tag name cannot be so long");
                return false;
              }

              if (this.tagDescription.length > 500) {
                this.msgSrvc.showErrorMessage('error', '', "Description cannot be so long");
                return false;
              } // else {


              this.auth.showLoader();
              var payload = {};
              payload = {
                "tagName": this.tagName,
                "description": this.tagDescription,
                "instituteId": this.instituteId
              };
              this.tagSrvc.addMasterTagInInstitute(payload).subscribe(function (data) {
                var temp = data;

                _this57.msgSrvc.showErrorMessage('success', '', temp.message);

                _this57.auth.hideLoader();

                _this57.tagDescription = '';
                _this57.tagName = '';
                $('#addTag').modal('hide');

                _this57.getAllTags(); //this.getTagDetails();   

              }, function (error) {
                _this57.auth.hideLoader();

                _this57.msgSrvc.showErrorMessage(_this57.msgSrvc.toastTypes.error, '', error.error.message);
              }); //}
            } //search/filter tags

          }, {
            key: "filterTag",
            value: function filterTag() {
              var _this58 = this;

              //  this.isSearchItemExist = false;     
              if (this.searchTag != null && this.searchTag != '') {
                console.log(this.searchTag);
                var searchItem;
                console.log(this.allTagsList); //searchItem = this.allTagsList.filter(el => el.tagName.toLowerCase() == 'ddf')

                searchItem = this.allTagsList.filter(function (el) {
                  return el.tagName.toLowerCase().indexOf(_this58.searchTag.toLowerCase()) > -1;
                });
                this.tagDetailsData = searchItem;

                if (!searchItem.length) {
                  this.msgSrvc.showErrorMessage('info', '', 'No tag found');
                }
              } else {
                //  this.isSearchItemExist = false;
                this.getAllTags();
              }
            }
          }]);

          return MasterTagComponent;
        }();

        MasterTagComponent.ctorParameters = function () {
          return [{
            type: _master_tag_master_tag_component_service__WEBPACK_IMPORTED_MODULE_3__["MasterTagService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]
          }];
        };

        MasterTagComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'master-tag',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./master-tag.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/master-tag/master-tag.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./master-tag.component.scss */
          "./src/app/components/course-module/data-setup/master-tag/master-tag.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_master_tag_master_tag_component_service__WEBPACK_IMPORTED_MODULE_3__["MasterTagService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]])], MasterTagComponent);
        return MasterTagComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/data-setup/school-exam-type/school-exam-type.component.scss":
    /*!******************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/school-exam-type/school-exam-type.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleDataSetupSchoolExamTypeSchoolExamTypeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".master-wrapper {\n  margin: 10px;\n  height: auto;\n}\n\n.header-full {\n  border: 1px;\n  background-color: white;\n}\n\n.m-5 {\n  margin: 5px;\n}\n\n.filter_div {\n  padding: 1rem;\n}\n\n.filter_div .field-wrapper {\n  margin-left: 20px;\n  padding-top: 0;\n  display: inline-block;\n}\n\n.filter_div .dropdown-div {\n  width: 160px;\n}\n\n.filter_div .dropdown-div .dropdown {\n  width: 100%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.header-section {\n  /* padding-bottom: 30px;\n     border: 1px solid lightgrey;\n    box-shadow: 0 0 2px 2px #dadada; */\n}\n\n.close-btn {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.close-btn span {\n  cursor: pointer;\n}\n\n.create-btn {\n  background: #0084f6;\n  border: 1px solid #0084f6;\n  color: white;\n}\n\n.dropdown-div .dropdown {\n  width: 50%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.pt-2 {\n  padding-top: 2px;\n}\n\n.tag-detail-container {\n  /*  margin-top: 15px; */\n}\n\n.p-0-5 {\n  padding: 0 5px !important;\n}\n\n.edit-color {\n  color: blue;\n}\n\n.delete-color {\n  color: red;\n}\n\n.table-header {\n  line-height: 10px;\n  height: 10px;\n}\n\n.search-box {\n  border: 1px solid #efefef;\n  width: 70%;\n  float: right;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.input-wrapper {\n  position: relative;\n  padding-top: 15px;\n}\n\n.table-control {\n  height: 50px;\n}\n\n.b-grey {\n  background: #e0eaec;\n}\n\n.line-0 {\n  line-height: 0px;\n}\n\n.tbl-row {\n  height: 40px;\n}\n\n.noSearchItem {\n  text-align: center;\n  padding-top: 20px;\n  font-weight: bold;\n  font-size: larger;\n}\n\n.field-wrapper.datePickerBox:after {\n  top: 35px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvc2Nob29sLWV4YW0tdHlwZS9zY2hvb2wtZXhhbS10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFlBQVk7QUFDaEI7O0FBQ0E7RUFDSSxXQUFXO0VBQ1gsdUJBQXVCO0FBRTNCOztBQUFBO0VBQ0ksV0FDSjtBQUVBOztBQURBO0VBQ0ksYUFBYTtBQUlqQjs7QUFMQTtFQUdJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0FBTXpCOztBQVhBO0VBUUksWUFBWTtBQU9oQjs7QUFmQTtFQVVNLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQVN4Qjs7QUFMQTtFQUNHOztzQ0FTbUM7QUFDdEM7O0FBTEE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBUWxCOztBQWJBO0VBT0ksZUFBZTtBQVVuQjs7QUFQQTtFQUNJLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFDSjtBQVNBOztBQVJBO0VBRU0sVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBVXhCOztBQVBDO0VBQ0ksZ0JBQWdCO0FBVXJCOztBQVJDO0VBQ0csdUJBQUE7QUFXSjs7QUFUQztFQUNJLHlCQUF5QjtBQVk5Qjs7QUFWQztFQUNJLFdBQVc7QUFhaEI7O0FBWEM7RUFDSSxVQUFVO0FBY2Y7O0FBWkM7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtBQWVqQjs7QUFiQztFQUNHLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsWUFBWTtBQWdCaEI7O0FBZEM7RUFDSSxxQkFBcUI7QUFpQjFCOztBQWZDO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQWtCdEI7O0FBaEJDO0VBQ0ksWUFBWTtBQW1CakI7O0FBakJDO0VBQ0csbUJBQW1CO0FBb0J2Qjs7QUFsQkM7RUFDSSxnQkFBZ0I7QUFxQnJCOztBQW5CQztFQUNJLFlBQVk7QUFzQmpCOztBQXBCQztFQUNHLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQXVCckI7O0FBckJDO0VBQ0ksb0JBQW9CO0FBd0J6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9kYXRhLXNldHVwL3NjaG9vbC1leGFtLXR5cGUvc2Nob29sLWV4YW0tdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0ZXItd3JhcHBlcntcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLmhlYWRlci1mdWxse1xuICAgIGJvcmRlcjogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm0tNXtcbiAgICBtYXJnaW46NXB4XG59XG4uZmlsdGVyX2RpdiB7XG4gICAgcGFkZGluZzogMXJlbTtcbi5maWVsZC13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZHJvcGRvd24tZGl2IHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgLmRyb3Bkb3duIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gfVxufVxuLmhlYWRlci1zZWN0aW9ue1xuICAgLyogcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCAjZGFkYWRhOyAqL1xufVxuXG4uY2xvc2UtYnRue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgc3BhbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5jcmVhdGUtYnRueyAgXG4gICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICAgIGNvbG9yOndoaXRlXG59XG4uZHJvcGRvd24tZGl2IHtcbiAgICAuZHJvcGRvd24ge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuIH1cbiAucHQtMntcbiAgICAgcGFkZGluZy10b3A6IDJweDtcbiB9XG4gLnRhZy1kZXRhaWwtY29udGFpbmVye1xuICAgIC8qICBtYXJnaW4tdG9wOiAxNXB4OyAqL1xuIH1cbiAucC0wLTV7XG4gICAgIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG4gfVxuIC5lZGl0LWNvbG9ye1xuICAgICBjb2xvcjogYmx1ZTtcbiB9XG4gLmRlbGV0ZS1jb2xvciB7XG4gICAgIGNvbG9yOiByZWQ7XG4gfVxuIC50YWJsZS1oZWFkZXJ7XG4gICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICBoZWlnaHQ6IDEwcHg7XG4gfVxuIC5zZWFyY2gtYm94e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gfVxuIC5wLTAge1xuICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gfVxuIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiB9XG4gLnRhYmxlLWNvbnRyb2x7XG4gICAgIGhlaWdodDogNTBweDtcbiB9XG4gLmItZ3JleXtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuIH1cbiAubGluZS0we1xuICAgICBsaW5lLWhlaWdodDogMHB4O1xuIH1cbiAudGJsLXJvd3tcbiAgICAgaGVpZ2h0OiA0MHB4O1xuIH1cbiAubm9TZWFyY2hJdGVte1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiB9XG4gLmZpZWxkLXdyYXBwZXIuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gICAgIHRvcDogMzVweCAhaW1wb3J0YW50O1xuIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/course-module/data-setup/school-exam-type/school-exam-type.component.ts":
    /*!****************************************************************************************************!*\
      !*** ./src/app/components/course-module/data-setup/school-exam-type/school-exam-type.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: SchoolExamTypeComponent */

    /***/
    function srcAppComponentsCourseModuleDataSetupSchoolExamTypeSchoolExamTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolExamTypeComponent", function () {
        return SchoolExamTypeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/common-api-call.service */
      "./src/app/services/common-api-call.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

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

      var SchoolExamTypeComponent =
      /** @class */
      function () {
        var SchoolExamTypeComponent = /*#__PURE__*/function () {
          function SchoolExamTypeComponent(http, auth, msgSrvc, commonApiCall) {
            var _this59 = this;

            _classCallCheck(this, SchoolExamTypeComponent);

            this.http = http;
            this.auth = auth;
            this.msgSrvc = msgSrvc;
            this.commonApiCall = commonApiCall;
            this.type = '';
            this.instituteId = '';
            this.obj = [];
            this.addExamType = {
              exam_type_id: "",
              exam_type: "",
              description: "",
              institution_id: sessionStorage.getItem('institute_id'),
              is_active: 'Y',
              date: ''
            };
            this.isExamTypeUpdate = false;
            this.staticPageData = [];
            auth.currentInstituteId.subscribe(function (key) {
              _this59.instituteId = key;
            });
            this.fetchInstituteExamTypes(false);
          }

          _createClass(SchoolExamTypeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.createTable();
            }
          }, {
            key: "createTable",
            value: function createTable() {
              var _this60 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this60.type = 'batch';
                } else {
                  _this60.type = 'course';
                }
              });
              this.headerSetting = [{
                primary_key: 'exam_type_id',
                value: "Id",
                charactLimit: 25,
                sorting: true,
                visibility: true
              }, {
                primary_key: 'exam_type',
                value: "Exam Type",
                charactLimit: 25,
                sorting: true,
                visibility: true
              }, {
                primary_key: 'description',
                value: "Description",
                charactLimit: 25,
                sorting: false,
                visibility: true
              }, // {
              //   primary_key: 'is_active',
              //   value: "Active",
              //   charactLimit: 25,
              //   sorting: false,
              //   visibility: true
              // },
              {
                primary_key: 'date',
                value: "Date",
                charactLimit: 25,
                sorting: true,
                visibility: true
              }, {
                primary_key: 'action',
                value: "Action",
                charactLimit: 10,
                sorting: false,
                visibility: true,
                edit: true,
                "delete": true,
                view: false
              }];
              this.tableSetting = {
                width: "100%",
                height: "58vh"
              };
              this.rowColumns = [{
                width: "10%",
                textAlign: "left"
              }, {
                width: "25%",
                textAlign: "left"
              }, {
                width: "30%",
                textAlign: "left"
              }, // {
              //   width: "20%",
              //   textAlign: "left"
              // },
              {
                width: "25%",
                textAlign: "left"
              }, {
                width: "10%",
                textAlign: "left"
              }];
            }
          }, {
            key: "fetchInstituteExamTypes",
            value: function fetchInstituteExamTypes(isUpdate) {
              var _this61 = this;

              this.commonApiCall.fetchInstituteExamTypes(this.instituteId).subscribe(function (data) {
                _this61.staticPageData = data.result;

                if (isUpdate) {
                  _this61.commonApiCall.examTypeList.next(_this61.staticPageData);
                }
              }, function (err) {
                _this61.msgSrvc.showErrorMessage(_this61.msgSrvc.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "createExamType",
            value: function createExamType() {
              var _this62 = this;

              var url = "/api/v1/courseExamSchedule/create-exam-type";
              var payload = {
                exam_type: this.addExamType.exam_type,
                description: this.addExamType.description,
                institution_id: sessionStorage.getItem('institute_id'),
                is_active: this.addExamType.is_active,
                date: this.addExamType.date != '' && this.addExamType.date != null ? moment__WEBPACK_IMPORTED_MODULE_5__(this.addExamType.date).format('YYYY-MM-DD') : ''
              };
              this.http.postData(url, payload).subscribe(function (data) {
                var temp = data;

                _this62.msgSrvc.showErrorMessage('success', '', temp.message);

                _this62.auth.hideLoader();

                $('#addExamType').modal('hide');

                _this62.clearData();

                _this62.fetchInstituteExamTypes(true);
              }, function (error) {
                _this62.auth.hideLoader();

                _this62.msgSrvc.showErrorMessage(_this62.msgSrvc.toastTypes.error, '', error.error.message);
              });
            }
          }, {
            key: "validateCreateExamTypeInput",
            value: function validateCreateExamTypeInput() {
              if (this.addExamType.exam_type == '') {
                this.msgSrvc.showErrorMessage('info', '', "Enter Valid Exam Type");
                return false;
              }

              if (this.addExamType.exam_type.length > 50) {
                this.msgSrvc.showErrorMessage('info', '', "Exam Type cannot be more than 50 charactor");
                return false;
              }

              if (this.addExamType.description.length > 100) {
                this.msgSrvc.showErrorMessage('info', '', "Description cannot be so long");
                return false;
              }

              if (this.addExamType.date == '' || this.addExamType.date == null) {
                this.msgSrvc.showErrorMessage('info', '', 'Enter Valid Date!');
                return false;
              }

              return true;
            }
          }, {
            key: "clearData",
            value: function clearData() {
              this.isExamTypeUpdate = false;
              this.addExamType = {
                exam_type_id: "",
                exam_type: "",
                description: "",
                institution_id: sessionStorage.getItem('institute_id'),
                is_active: 'Y'
              };
            }
          }, {
            key: "addUpdateExamType",
            value: function addUpdateExamType() {
              if (this.validateCreateExamTypeInput()) {
                if (this.isExamTypeUpdate) {
                  this.updateExamType();
                } else {
                  this.createExamType();
                }
              }
            }
          }, {
            key: "openEditExamTypeModal",
            value: function openEditExamTypeModal(obj) {
              this.isExamTypeUpdate = true;
              this.addExamType = obj.data;
              this.addExamType.date = this.addExamType.date != '' && this.addExamType.date != null ? moment__WEBPACK_IMPORTED_MODULE_5__(this.addExamType.date).format('YYYY-MM-DD') : '';
              $('#addExamType').modal('show');
            }
          }, {
            key: "deleteExamType",
            value: function deleteExamType(obj) {
              var _this63 = this;

              if (obj.data.used) {
                this.msgSrvc.showErrorMessage(this.msgSrvc.toastTypes.error, '', 'Exam Type is already used. So we can not delete it.');
                return;
              }

              var url = "/api/v1/courseExamSchedule/delete-exam-type/" + obj.data.exam_type_id;
              this.http.deleteData(url, null).subscribe(function (data) {
                var temp = data;

                _this63.msgSrvc.showErrorMessage('success', '', temp.message);

                _this63.auth.hideLoader();

                _this63.fetchInstituteExamTypes(false);
              }, function (error) {
                _this63.auth.hideLoader();

                _this63.msgSrvc.showErrorMessage(_this63.msgSrvc.toastTypes.error, '', error.error.message);
              });
            }
          }, {
            key: "updateExamType",
            value: function updateExamType() {
              var _this64 = this;

              var url = "/api/v1/courseExamSchedule/update-exam-type/" + this.addExamType.exam_type_id;
              var payload = {
                exam_type: this.addExamType.exam_type,
                description: this.addExamType.description,
                is_active: this.addExamType.is_active,
                date: this.addExamType.date != '' && this.addExamType.date != null ? moment__WEBPACK_IMPORTED_MODULE_5__(this.addExamType.date).format('YYYY-MM-DD') : ''
              };
              this.http.putData(url, payload).subscribe(function (data) {
                var temp = data;

                _this64.msgSrvc.showErrorMessage('success', '', temp.message);

                _this64.auth.hideLoader();

                $('#addExamType').modal('hide');

                _this64.clearData();

                _this64.fetchInstituteExamTypes(false);
              }, function (error) {
                _this64.auth.hideLoader();

                _this64.msgSrvc.showErrorMessage(_this64.msgSrvc.toastTypes.error, '', error.error.message);
              });
            }
          }]);

          return SchoolExamTypeComponent;
        }();

        SchoolExamTypeComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }, {
            type: _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_4__["CommonApiCallService"]
          }];
        };

        SchoolExamTypeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-school-exam-type',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./school-exam-type.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/school-exam-type/school-exam-type.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./school-exam-type.component.scss */
          "./src/app/components/course-module/data-setup/school-exam-type/school-exam-type.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"], _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_4__["CommonApiCallService"]])], SchoolExamTypeComponent);
        return SchoolExamTypeComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-course-module-data-setup-data-setup-module-es5.js.map