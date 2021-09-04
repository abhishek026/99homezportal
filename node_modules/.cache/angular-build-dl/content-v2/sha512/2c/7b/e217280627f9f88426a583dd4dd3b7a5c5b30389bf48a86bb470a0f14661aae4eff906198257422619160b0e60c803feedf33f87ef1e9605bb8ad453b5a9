(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-users-management-users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/users/add-edit-user/add-edit-user.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/users/add-edit-user/add-edit-user.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"clearFix\" style=\"padding: 2%;padding-top: 2px;\">\n  <div class=\"content-container\">\n    <section class=\"middle-top mb0 clearFix \">\n      <div class=\"header\">\n        <h2 class=\"pull-left\">\n          <a routerLink=\"/view/manage\">\n            User\n          </a>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n          <span *ngIf=\"userId == '-1'\">Add User</span>\n          <span *ngIf=\"userId != '-1'\">Edit User</span>\n        </h2>\n      </div>\n    </section>\n\n    <div class=\"user-form-section\">\n      <div class=\"row\">\n        <div class=\"c-sm-4 c-md-4 c-lg-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"nameUser\">Name <span class=\"text-danger\">*</span></label>\n            <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"roleDetails.name\" id=\"nameUser\" name=\"nameUser\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"c-sm-4 c-md-4 c-lg-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"contactNO\">Contact No<span class=\"text-danger\">*</span></label><br>\n            <span class=\"countryCallingCode\" style=\"width: 20%\">\n              <select id=\"country_id\" class=\"form-ctrl\" [(ngModel)]=\"roleDetails.country_id\" name=\"country_id\"\n                [disabled]=\"countryDetails.length<=1\" (change)=\"onChangeObj($event.target.value)\"\n                style=\"height: 29px;padding: 0\">\n                <option value=\"\"></option>\n                <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                  {{data.country_code}} +{{data.country_calling_code}}\n                </option>\n              </select>\n            </span>\n            <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"roleDetails.username\" id=\"contactNO\" name=\"contactNO\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" style=\"width: 80%\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"c-sm-4 c-md-4 c-lg-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"emailID\">Email ID</label>\n            <!-- <label for=\"emailID\" *ngIf=\"userId != '-1'\">Alternate Login Email ID</label> -->\n            <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"roleDetails.alternate_email_id\" id=\"emailID\"\n              name=\"emailID\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"c-sm-4 c-md-4 c-lg-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"address\">Address</label>\n            <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"roleDetails.address\" id=\"address\" name=\"address\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"userId == '-1' || roleDetails.userType == '0' || roleDetails.userType == '9'\">\n        <div class=\"c-sm-4 c-md-4 c-lg-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"\">Role<span class=\"text-danger\">*</span></label>\n            <select id=\"\" class=\"form-ctrl\" [(ngModel)]=\"roleDetails.role_id\">\n              <option value=\"-1\"></option>\n              <option *ngFor=\"let opt of rolesList\" [value]=\"opt.role_id\">\n                {{opt.role_name}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"userId != '-1' && roleDetails.mutlpleRoles != '' && roleDetails.mutlpleRoles != null\">\n        <div class=\"c-sm-4 c-md-4 c-lg-4\">\n          <h4>Multiple Roles:{{roleDetails.mutlpleRoles}}</h4>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"biometricEnable == '1'\">\n        <div class=\"c-sm-4 c-md-4 c-lg-4\">\n          <div class=\"field-wrapper\">\n            <label for=\"attendance_device_id\">Attendance Card ID</label>\n            <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"roleDetails.attendance_device_id\"\n              id=\"attendance_device_id\" name=\"attendance_device_id\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"userId == '-1'\">\n        <div class=\"c-sm-4 c-md-4 c-lg-4\">\n          <div class=\"field-checkbox-wrapper\">\n            <input id=\"is_employee_to_be_create\" name=\"is_employee_to_be_create\" type=\"checkbox\" class=\"form-checkbox\"\n              [(ngModel)]=\"roleDetails.is_employee_to_be_create\">\n            <label for=\"is_employee_to_be_create\">Allow Employee to create automatically</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"userId != '-1'\">\n        <div class=\"c-sm-4 c-md-4 c-lg-4\">\n          <div class=\"field-checkbox-wrapper\">\n            <input id=\"is_active\" name=\"is_active\" type=\"checkbox\" class=\"form-checkbox\"\n              [(ngModel)]=\"roleDetails.is_active\">\n            <label for=\"is_active\">Is Active</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"enable_ip_lock_feature=='Y'\">\n        <div class=\"c-sm-4 c-md-4 c-lg-4\">\n          <div class=\"field-checkbox-wrapper\">\n            <input id=\"is_office_only_access\" name=\"is_office_only_access\" type=\"checkbox\" class=\"form-checkbox\"\n              [(ngModel)]=\"roleDetails.is_office_only_access\">\n            <label for=\"is_office_only_access\">Enable IP Lock Functionality</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"c-sm-6 c-lg-6 c-md-6\">\n          <div class=\"pull-right\">\n            <button class=\"btn\" routerLink=\"/view/manage/user\">Cancel</button>\n            <button class=\"btn fullBlue\" *ngIf=\"userId == '-1'\" [disabled]=\"isRippleLoad\"\n              (click)=\"saveUserDetails()\">Save</button>\n            <button class=\"btn fullBlue\" *ngIf=\"userId != '-1'\" [disabled]=\"isRippleLoad\"\n              (click)=\"updateUserDetails()\">Update</button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/users/users.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/users/users.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"common-tab\" style=\"padding-left: 7px;\">\n  <ul>\n    <li id=\"liUser\" (click)=\"switchActiveView('liUser')\" class=\"\">\n      <a routerLink=\"/view/manage\">User</a>\n    </li>\n    <li id=\"liRole\" (click)=\"switchActiveView('liRole')\" class=\"active\">\n      <a routerLink=\"/view/manage/role\">Role</a>\n    </li>\n  </ul>\n  <div class=\"btnWrapper\">\n    <div class=\"c-sm-1 c-md-1 c-lg-1 pull-right\" style=\"width: 4%;\" *ngIf=\"usersList?.length>0\"\n      (click)=\"exportToExcel()\">\n      <i _ngcontent-c27=\"\" aria-hidden=\"true\" class=\"fa fa-file-excel-o\"\n        style=\"font-size: 28px;color: green;cursor: pointer;\"></i>\n    </div>\n    <!-- <button type=\"button\" style=\"padding: 4px 10px;border: 1px solid #0084f6;\" class=\"btn pull-right\" name=\"button\">\n      <a href=\"https://forms.gle/PTaJdvBZhaaXk8Sp8\" target=\"_blank\">Feedback</a>\n    </button> -->\n    <aside class=\"pull-left\" style=\"border: none;padding: 0;margin-top: 5px;\" class=\"btn pull-right\">\n      <span class=\"new-keyword\" title=\"Help\" data-toggle=\"modal\" style=\"cursor: pointer;\"\n        data-target=\"#helpSection\">?</span>\n    </aside>\n    <button type=\"button\" style=\"padding: 4px 10px;\" class=\"btn pull-right\" name=\"button\" routerLink='./addedit'>\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      &nbsp; Add User\n    </button>\n  </div>\n  <div class=\"btnWrapper c-md-3\" style=\"float: right;width: 18%;\">\n    <div class=\"btn-container\" style=\"float: right;\">\n      <div class=\"btn-item\">\n        <button type=\"button\" style=\"padding: 4px 10px;\" *ngIf=\"selectedRowCount != 0\" class=\"btn pull-right\"\n          name=\"button\" (click)=\"isOptions = !isOptions\">\n          {{selectedRowCount}} Users Selected &nbsp;\n          <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"more-info-container\" *ngIf=\"isOptions\" (mouseleave)=\"isOptions = false\" #optMenu>\n\n          <div class=\"more-info-item hand_icon\">\n            <span style=\"cursor: pointer;\" (click)=\"getAllMessageFromServer()\"><i class=\"fa fa-bell\"></i> Send\n              Notification</span>\n          </div>\n          <div class=\"more-info-item hand_icon\" *ngIf=\"dataFilter.role=='1'\">\n            <span style=\"cursor: pointer;\" (click)=\"sendLoginCredentials(4)\"><i class=\"fa fa-bell\"></i> Send Login\n              Credentials</span>\n          </div>\n          <div class=\"more-info-item hand_icon\" *ngIf=\"dataFilter.role=='1'\">\n            <span style=\"cursor: pointer;\" (click)=\"sendLoginCredentials(1)\"><i class=\"fa fa-bell\"></i> Send App\n              Link</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section class=\"middle-section clearFix\" style=\"padding-left: 7px;\">\n  <div class=\"content-container\">\n    <div class=\"filter-section\">\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3\">\n          <div class=\"field-wrapper\" style=\"padding-top: 0px;\">\n            <label for=\"userType\" style=\"font-weight: bold;\">User Type</label>\n            <select id=\"userType\" class=\"form-ctrl\" [(ngModel)]=\"dataFilter.role\" (ngModelChange)=\"clearData()\">\n              <option value=\"-1\"></option>\n              <option value=\"0\">Custom User</option>\n              <option value=\"3\">Teacher</option>\n              <option value=\"1\">Student</option>\n              <option value=\"5\">Parent</option>\n              <option value=\"99\" *ngIf=\"!schoolModel\">Registered User</option>\n              <!-- <option value=\"1000\">Others</option> -->\n            </select>\n          </div>\n        </div>\n        <div class=\"c-sm-3 c-md-3 c-lg-3\" style=\"margin-top: 15px;\">\n          <div class=\"search-filter-wrapper\">\n            <input type=\"text\" class=\"normal-field pull-right\" placeholder=\"Search\" name=\"searchData\"\n              [(ngModel)]=\"dataFilter.searchCriteria\">\n          </div>\n        </div>\n        <div class=\"c-sm-3 c-md-3 c-lg-3\" *ngIf=\"dataFilter.role == '1' || dataFilter.role == '99'\">\n          <div class=\"field-wrapper\" style=\"padding-top: 0px;\">\n            <label for=\"userType\" style=\"font-weight: bold;\"></label>\n            <select id=\"userType\" class=\"form-ctrl\" [(ngModel)]=\"dataFilter.app_downloaded\">\n              <option value=\"-1\">Select</option>\n              <option value=\"2\">App Not Downloaded</option>\n              <option value=\"1\">App Downloaded</option>\n              <option value=\"3\">Logged in From Multiple Devices</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"c-sm-2 c-md-2 c-lg-2\" style=\"margin-top: 20px;padding-right: 0;margin-left: 5px;width: 10%;\">\n          <div class=\"field-checkbox-wrapper\">\n            <input type=\"checkbox\" name=\"check\" class=\"form-checkbox\" [(ngModel)]=\"dataFilter.is_active\" id=\"isAct\">\n            <label for=\"isAct\">Is Active</label>\n          </div>\n        </div>\n        <div class=\"c-sm-1 c-md-1 c-lg-1\" style=\"margin-top: 15px;\" *ngIf=\"dataFilter.role != '1'\">\n          <button class=\"btn fullBlue\" style=\"    height: 32px !important ;padding: 5px 12px;\"\n            (click)=\"getAllUserList(PageIndex)\">Go</button>\n        </div>\n        <!-- <div class=\"\">\n          <div class=\"pull-right\" style=\"margin-top: 20px;margin-right: 15px;\">\n            <div class=\"search-filter-wrapper\">\n              <input type=\"text\" class=\"normal-field pull-right\" placeholder=\"Search\" name=\"searchData\" [(ngModel)]=\"searchText\" (keyup)=\"searchInList()\">\n            </div>\n          </div>\n        </div> -->\n      </div>\n\n      <div class=\"row\" style=\"margin-top: 5px;padding-bottom: 10px;border-bottom: 1px solid #ccc;\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3\" *ngIf=\"dataFilter.role=='1' && !isProfessional\">\n          <div class=\"field-wrapper\" style=\"padding-top: 0px;\">\n            <label for=\"userType\" style=\"font-weight: bold;\">{{schoolModel ? 'Standard' : 'Master Course'}}</label>\n            <select *ngIf=\"!schoolModel\" id=\"userType\" class=\"form-ctrl\" [(ngModel)]=\"dataFilter.master_course\"\n              (ngModelChange)=\"getCourseData($event)\">\n              <option value=\"\">Select</option>\n              <option value=\"{{data.master_course}}\" *ngFor=\"let data of masterCourseData\">{{data.master_course}}\n              </option>\n            </select>\n            <select *ngIf=\"schoolModel\" id=\"userType\" class=\"form-ctrl\" [(ngModel)]=\"dataFilter.standard_id\"\n              (ngModelChange)=\"updateCourseList($event)\">\n              <option value=\"\">Select</option>\n              <option value=\"{{data.standard_id}}\" *ngFor=\"let data of masterCourseData\">{{data.masterCourse}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"c-sm-3 c-md-3 c-lg-3\" *ngIf=\"dataFilter.role=='1' && isProfessional\">\n          <div class=\"field-wrapper\" style=\"padding-top: 0px;\">\n            <label for=\"userType\" style=\"font-weight: bold;\">Master Course</label>\n            <select id=\"userType\" class=\"form-ctrl\" [(ngModel)]=\"dataFilter.master_course\"\n              (ngModelChange)=\"getCourseData($event)\">\n              <option value=\"\">Select</option>\n              <option value=\"{{data.standard_id}}\" *ngFor=\"let data of masterCourseData\">{{data.standard_name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"c-sm-3 c-md-3 c-lg-3\" *ngIf=\"dataFilter.role=='1' && !isProfessional\">\n          <div class=\"field-wrapper\" style=\"padding-top: 0px;\">\n            <label for=\"userType\" style=\"font-weight: bold;\">{{schoolModel ? 'Section' : 'Course'}}</label>\n            <select id=\"userType\" class=\"form-ctrl\" [(ngModel)]=\"dataFilter.course_id\">\n              <option value=\"0\">Select</option>\n              <option value=\"{{data.course_id}}\" *ngFor=\"let data of CourseData\">{{data.course_name}} </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"c-sm-3 c-md-3 c-lg-3\" *ngIf=\"dataFilter.role=='1' && isProfessional\">\n          <div class=\"field-wrapper\" style=\"padding-top: 0px;\">\n            <label for=\"userType\" style=\"font-weight: bold;\">Course</label>\n            <select id=\"userType\" class=\"form-ctrl\" [(ngModel)]=\"dataFilter.course_id\">\n              <option value=\"0\">Select</option>\n              <option value=\"{{data.subject_id}}\" *ngFor=\"let data of CourseData\">{{data.subject_name}} </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"c-sm-1 c-md-1 c-lg-1\" style=\"margin-top: 15px;\" *ngIf=\"dataFilter.role == '1'\">\n          <button class=\"btn fullBlue\" style=\"    height: 32px !important ;padding: 5px 12px;\"\n            (click)=\"getAllUserList(PageIndex)\">Go</button>\n        </div>\n      </div>\n    </div>\n\n    <section>\n      <div class=\"table_container\" style=\"margin-bottom: 10px;\">\n        <div class=\"table_header\">\n          <div class=\"table_header_item\" style=\"width: 5%;\">\n            <span>\n              <div class=\"field-checkbox-wrapper\">\n                <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"isAllChecked()\" [(ngModel)]=\"selectAll\"\n                  (change)=\"toggleAllCheckBox()\" id=\"ch2\">\n                <label for=\"ch2\"></label>\n              </div>\n            </span>\n          </div>\n          <div class=\"table_header_item large\" style=\"text-align: left;width: 15%;\">\n            <span>Name</span>\n          </div>\n          <div class=\"table_header_item\" style=\"width: 15%;padding-left: 20px;\">\n            <span>Contact No.</span>\n          </div>\n          <div class=\"table_header_item\" style=\"width: 20%;\">\n            <span>Email Id</span>\n          </div>\n          <div class=\"table_header_item\" style=\"width: 17%;\">\n            <span>Credentials</span>\n          </div>\n          <div class=\"table_header_item\" style=\"width: 5%;\">\n          </div>\n          <div class=\"table_header_item\" style=\"width: 13%;\">\n            <span>Last Login</span>\n          </div>\n          <div class=\"table_header_item\" style=\"width: 10%;\">\n            <span>Action</span>\n          </div>\n        </div>\n        <div class=\"table-value-outer-container\" *ngIf=\"usersList?.length!=0\">\n          <div class=\"table_value\" *ngFor=\"let data of usersList;let i= index\">\n            <div class=\"table_value_item\" style=\"width: 5%;\">\n              <div class=\"field-checkbox-wrapper\">\n                <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"data.assigned\" [(ngModel)]=\"data.assigned\"\n                  [id]=\"'checkbox-'+i\" (ngModelChange)=\"rowCheckboxChange(data)\">\n                <label [for]=\"'checkbox-'+i\"></label>\n              </div>\n            </div>\n            <div class=\"table_value_item large\" style=\"text-align: left;width: 15%;\">\n              <span\n                title=\"{{data.name}}\">{{(data.name.length > 50) ? (data.name | slice:0:50) + '...' : data.name}}</span>\n            </div>\n            <div class=\"table_value_item\" style=\"width: 15%;padding-left: 20px;\">\n              {{(data.username != '') ? (data.username) : '-'}}\n            </div>\n            <div class=\"table_value_item\" style=\"width: 20%;\">\n              {{(data.alternate_email_id != '') ? (data.alternate_email_id) : '-'}}\n            </div>\n            <div class=\"table_value_item\" style=\"width: 17%;padding-left: 10px;display: flex;flex-direction: column;\"\n              title=\"{{data.ecourse_list}}\">\n              <div class=\"credentials-view\">\n                <span>Username :</span>\n                <span>{{data.username}}</span>\n              </div>\n              <div class=\"credentials-view\">\n                <span>Password :</span>\n                <span *ngIf=\"data.isEncript\">****</span>\n                <span *ngIf=\"!data.isEncript\">{{data.password}}</span>\n              </div>\n            </div>\n            <div class=\"table_value_item\" style=\"width: 5%;\">\n              <i class=\"fa fa-eye psw-show\" aria-hidden=\"true\" (click)=\"descriptPassword(data)\"\n                *ngIf=\"!data.isEncript\"></i>\n              <i class=\"fa fa-eye-slash psw-show\" aria-hidden=\"true\" (click)=\"descriptPassword(data)\"\n                *ngIf=\"data.isEncript\"></i>\n            </div>\n            <div class=\"table_value_item\" style=\"width: 13%;display: flex;flex-direction: column;\">\n              <div class=\"credentials-view\">\n                <span>\n                  {{data.last_login_date_time}}\n                </span>\n              </div>\n              <div class=\"credentials-view\" style=\"padding-left: 30px;\"\n                (click)=\"getLastLoginDetails(data.user_id, historyPageIndex)\">\n                <span class=\"viewHistoryBtn\">View</span>\n              </div>\n            </div>\n            <div class=\"table_value_item\" style=\"width: 10%;\">\n              <a [routerLink]='[\"./addedit\" , data.user_id]' title=\"Edit\"><i class=\"fa fa-edit actionBtnIcons\"></i></a>\n              <a style=\"cursor: pointer;margin-left: 5px;\" title=\"Allocate Inventory\"\n                (click)=\"allocateItemToUser(data)\"><i class=\"fa fa-tasks actionBtnIcons\" aria-hidden=\"true\"></i></a>\n              <!-- changes done by - Nalini\n              cleared device and allow/block access options should be displayed to students and open app users -->\n              <span title=\"{{data.access_allow_title}}\"\n                *ngIf=\"(dataFilter.role == '1' || dataFilter.role == '99') && sso_check\">\n                <button style=\"background: none;\" [disabled]=\"data.access_allow == 3\"\n                  [ngStyle]=\"{'color': (data.access_allow == 2) ? 'red' : '#0084f6' }\" (click)=\"changeUserAccess(data)\">\n                  <i class=\"fa fa-universal-access allowAccessIcons\"\n                    [ngStyle]=\"{'cursor': (data.access_allow == 3) ? 'no-drop' : 'pointer' }\"\n                    aria-hidden=\"true\"></i></button>\n              </span>\n              <!-- changes done by - Nalini\n              cleared device and allow/block access options should be displayed to students and open app users -->\n              <span *ngIf=\"(dataFilter.role == '1' || dataFilter.role == '99') && sso_check\"\n                (click)=\"clearRegisteredDevices(data.user_id)\" class=\"actionBtnIcons\"\n                title=\"Clear Registered Device\">X</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"table-value-outer-container\" *ngIf=\"usersList?.length==0 && !auth.isRippleLoad.getValue()\">\n          <!-- <div *ngIf=\"!isRippleLoad\"> No data found </div> -->\n          <div class=\"illustration-container\" style=\"margin-top: 10%;margin-left: 45%;font-weight: 600;\">\n            <!-- <img src=\"./assets/images/course_planner/blank-illustration.svg\" alt=\"illustration\" class=\"illustration-img\"> -->\n            <span>No Data Found</span>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- Paginator Here -->\n    <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event, 'user')\" (goNext)=\"fetchNext('user')\"\n          (goPrev)=\"fetchPrevious('user')\" [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\"\n          [sizeArr]=\"sizeArr\" [count]=\"totalRow\" (sizeChange)=\"updateTableBatchSize($event)\">\n        </pagination>\n      </div>\n    </div>\n\n    <!-- <div class=\"btn-group pull-right\" *ngIf=\"usersList.length > 0 && isActiveUsers\">\n      <button (click)=\"sendSmsForApp('1')\" class=\"btn fullBlue\">SMS For APP Download</button>\n      <button (click)=\"sendSmsForApp('2')\" class=\"btn fullBlue\">SMS For APP Upgradation</button>\n    </div> -->\n    <!-- <button (click)=\"sendSmsForApp('3')\" class=\"btn fullBlue\">SMS For APP Alternate Login Registration</button> -->\n\n  </div>\n</section>\n\n\n<!-- ///////// POPUP/////////////////////////////////// -->\n<!-- ///////// POPUP/////////////////////////////////// -->\n<!-- ///////// POPUP/////////////////////////////////// -->\n\n<section id=\"popup \" class=\"popupWrapper fadeIn \" *ngIf=\"allocateItemPopUp\">\n  <div class=\"popup pos-abs popup-body-container\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closePopUp()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n          <g id=\"Group_1228 \" data-name=\"Group 1228\" transform=\"translate(8298 1888) \">\n            <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n              <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                transform=\"translate(992.81 305.77)rotate(45)\" />\n              <line id=\"Line_275 \" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                transform=\"translate(978.81 305.77)rotate(45)\" />\n            </g>\n            <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\"\n              transform=\"translate(1012 297)\" />\n          </g>\n        </svg>\n      </span>\n      <div class=\"popup-content allocation-popup\">\n        <h2>Allocate Inventory Item</h2>\n        <div class=\"row filler-section\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3\">\n            <div class=\"field-wrapper\">\n              <label for=\"\">Item<span class=\"text-danger\">*</span></label>\n              <select id=\"\" class=\"form-ctrl\" [(ngModel)]=\"allocateInventory.item_id\"\n                (ngModelChange)=\"onitemSelction()\">\n                <option value=\"-1\"></option>\n                <option *ngFor=\"let opt of inventoryList\" [value]=\"opt.item_id\">\n                  {{opt.item_name}} ({{opt.category_name}})\n                </option>\n              </select>\n              <p *ngIf=\"showUnit\">Available Units:{{availableunit}}</p>\n            </div>\n          </div>\n          <div class=\"c-sm-3 c-md-3 c-lg-3\">\n            <div class=\"field-wrapper\">\n              <label for=\"unitInv\">Unit<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"allocateInventory.alloted_units\" id=\"unitInv\"\n                name=\"unitInv\">\n            </div>\n          </div>\n          <div class=\"c-sm-2 c-md-2 c-lg-2\">\n            <button class=\"btn fullBlue\" (click)=\"allocateItem()\" style=\"margin-top: 25px\">Allocate</button>\n          </div>\n        </div>\n\n        <h3>Item Allocation History</h3>\n        <div class=\"table-wrapper-user table-histrory\">\n          <table>\n            <thead>\n              <tr>\n                <th>Date</th>\n                <th>Item</th>\n                <th>Category</th>\n                <th>Quantity</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let s of inventoryAllocated\">\n                <td>{{s.created_date}}</td>\n                <td>{{s.item_name}}</td>\n                <td>{{s.category_name}}</td>\n                <td>{{s.alloted_units}}</td>\n                <td>\n                  <a (click)=\"deleteInventoryItem(s)\">Delete</a>\n                </td>\n              </tr>\n              <tr *ngIf=\"inventoryAllocated.length == 0\">\n                <td colspan=\"5\">\n                  No Item Allocated To User\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div *ngIf=\"notificationPopup\" class=\"notification_popup\">\n  <div class=\"row c-md-12\" style=\"padding:0;\">\n    <span style=\"width: 100%;text-align: right;float: right;\">\n      <span style=\"cursor: pointer;font-size: 16px;font-weight: 600;\" (click)=\"closeNotificationPopup()\"> X </span>\n    </span>\n  </div>\n  <div class=\"row c-md-12\" style=\"padding: 0;margin-bottom: 5px;\">\n    <div class=\"c-md-4\" *ngIf=\"!addSMS\">\n      <div class=\"c-md-12\" style=\"padding: 0\">\n        <span style=\"font-weight: 600;\"> Send Notification:</span>\n      </div>\n      <div class=\"c-md-12\" style=\"padding:0\">\n        <div class=\"c-md-12\" style=\"padding: 0;margin-top: 10px;margin-bottom: 5px;font-weight: 600;\">\n          <span>Notification Type </span>\n        </div>\n        <div class=\"c-md-6\" style=\"padding:0;width: 40%;\">\n          <input style=\"-webkit-appearance:checkbox\" type=\"checkbox\" id=\"transactional\" name=\"transactional\"\n            class=\"form-checkbox\" [checked]=\"smsNotification\" [(ngModel)]=\"smsNotification\" (click)=\"onSmsCheckboxSelect()\">&nbsp;\n          <label for=\"transactional\">SMS</label>\n        </div>\n        <div class=\"c-md-6\" style=\"padding:0\">\n          <input style=\"-webkit-appearance:checkbox\" type=\"checkbox\" id=\"promotional\" name=\"promotional\"\n            class=\"form-checkbox\" [(ngModel)]=\"pushNotification\" (click)=\"onPushCheckboxSelect()\">&nbsp;\n          <label for=\"promotional\">Push</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"c-md-8\" *ngIf=\"addSMS\" style=\"background: #efefef;\">\n      <div>\n        <textarea placeholder=\"Write your message here...\" [(ngModel)]=\"message\"\n          (ngModelChange)=\"countNumberOfMessage()\" name=\"message\">\n      </textarea>\n        <div style=\"font-size: 12px;display: -webkit-box;-webkit-box-align: center;margin-top: 5px;margin-bottom: 10px;\"\n          class=\"row c-md-12\">\n          <div class=\"c-md-2\" style=\"padding:0;\">Character Count</div>\n          <div class=\"c-md-4\" style=\"padding-right: 0;\">\n            <div class=\"msgCount\">{{message?.length}}</div>\n          </div>\n          <div class=\"c-md-7\" style=\"text-align: right;\">Message Count: {{messageCount}}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"c-md-3\" [ngClass]=\"addSMS ? 'addSmsSection' : 'addSectionHide'\">\n      <!-- <div class=\"c-md-12\"> -->\n      <span *ngIf=\"!addSMS\" (click)=\"addSMS=!addSMS\"\n        style=\"border: 1px solid #0084f6;cursor: pointer;color: #0084f6;border-radius: 4px;padding: 3px;\">\n        <i *ngIf=\"!addSMS\" class=\"fa fa-plus\"></i>\n        <i *ngIf=\"addSMS\" class=\"fa fa-minus\"></i>\n        Add SMS</span>\n      <!-- </div> -->\n      <div class=\"c-md-12\" style=\"margin-top: 45px;\">\n        <div *ngIf=\"addSMS\">\n          <button class=\"btn fullBlue\" style=\"background: no-repeat;color: #0084f6;\"\n            (click)=\"addSMS = false\">Cancel</button>\n          <button class=\"btn fullBlue\" (click)=\"saveMSG()\">Save SMS</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"row c-md-12\" style=\"margin-top: 10px;\">\n    <div class=\"c-md-12\">\n      SMS Type\n    </div>\n    <div class=\"c-md-12\">\n      <span>Tranasactional </span>\n      <span>Promotional</span>\n    </div>\n  </div> -->\n  <div class=\"table-container\">\n    <div class=\"heading-container\" style=\"background: #fafafa;font-size: 12px;font-weight: 600;\">\n      <div class=\"heading-item\" style=\"width: 5%\">\n      </div>\n      <div class=\"heading-item\" style=\"text-align: left;width: 50%;\">\n        <span>SMS</span>\n      </div>\n      <!-- <div class=\"heading-item\" style=\"text-align: left;width: 15%;\">\n        <span>SMS Status</span>\n      </div> -->\n      <div class=\"heading-item\" style=\"width: 15%;text-align: left;\">\n        Date\n      </div>\n      <div class=\"heading-item\" style=\"width: 15%;text-align: left;\">\n        Action\n      </div>\n    </div>\n    <div class=\"value-outer-container\" *ngIf=\"messageList?.length>0\" style=\"min-height: 50vh;max-height: 50vh;\">\n      <div *ngIf=\"smsListFlag == 'active'\">\n      <div class=\"value-container\" *ngFor=\"let data of messageList; let i = index;\" style=\"padding:10px\">\n        <div class=\"heading-item\" style=\"width: 5%\">\n          <!-- <input type=\"radio\" class=\"form-ctrl\" name=\"selected\" [(ngModel)]=\"data.selected\" [id]=\"'selected-'+i\" [value]=\"data.selected\" [checked]=\"data.selected\"> -->\n          <!-- <div class=\"field-radio-wrapper\"> -->\n          <input style=\"-webkit-appearance:radio\" type=\"radio\" name=\"bothRadio\" [id]=\"'bothRadio-'+i\" class=\"form-radio\"\n            [value]=\"i\" [checked]=\"data.selected\" [(ngModel)]=\"data.selected\" (ngModelChange)=\"changeSelectedMsg(data)\"\n            [disabled]=\"data.statusValue == 'Open'\">\n          <!-- </div> -->\n        </div>\n        <div class=\"value-item\" style=\"text-align: left;width: 50%;\">\n          <span [innerHTML]=\"data.message\"></span>\n        </div>\n        <!-- <div class=\"value-item\" style=\"text-align: left;width: 15%;\">\n          {{data.statusValue}}\n        </div> -->\n        <div class=\"value-item\" style=\"text-align: left;width: 15%;\">\n          {{data.date}}\n        </div>\n        <div class=\"value-item\" style=\"width: 15%;text-align: left;\">\n          <!-- <span *ngIf=\"data.statusValue == 'Open'\" title=\"Approve\" (click)=\"ApproveMsg(data.message_id)\"\n            style=\"padding:10px;cursor: pointer;\"><i class=\"fa fa-check-circle\"\n              style=\"font-size: 14px;color: #01DF01;\"></i> </span> -->\n          <span title=\"Edit\" (click)=\"editSMS(data)\" style=\"padding:10px;cursor: pointer;\"><i\n              class=\"fa fa-pencil edit-icon-pencil\" style=\"font-size: 14px;color: #0084f6;\"></i></span>\n          <span  title=\"Delete\" (click)=\"DeleteMsg(data.message_id)\"\n            style=\"padding:10px;cursor: pointer;\"><i class=\"fa fa-times-circle\"\n              style=\"color: red;font-size: 14px;\"></i></span>\n        </div>\n      </div>\n      </div>\n      <!-- ===========push-table=============== -->\n      <div *ngIf=\"smsListFlag == 'notactive'\">\n      <div class=\"value-container\" *ngFor=\"let item of pushNotificatioList; let i = index;\" style=\"padding:10px\">\n\n      <div class=\"heading-item\" style=\"width: 5%\">\n        <!-- <input type=\"radio\" class=\"form-ctrl\" name=\"selected\" [(ngModel)]=\"data.selected\" [id]=\"'selected-'+i\" [value]=\"data.selected\" [checked]=\"data.selected\"> -->\n        <!-- <div class=\"field-radio-wrapper\"> -->\n        <input style=\"-webkit-appearance:radio\" type=\"radio\" name=\"bothRadio\" [id]=\"'bothRadio-'+i\" class=\"form-radio\"\n          [value]=\"i\" [checked]=\"item.selected\" [(ngModel)]=\"item.selected\" (ngModelChange)=\"changeSelectPush(item)\"\n         >\n        <!-- </div> -->\n      </div>\n      <div class=\"value-item\" style=\"text-align: left;width: 50%;\">\n        <span [innerHTML]=\"item.message\"></span>\n      </div>\n      <!-- <div class=\"value-item\" style=\"text-align: left;width: 15%;\">\n        {{push.statusValue}}\n      </div> -->\n      <div class=\"value-item\" style=\"text-align: left;width: 15%;\">\n        {{item.date}}\n      </div>\n      <div class=\"value-item\" style=\"width: 15%;text-align: left;\">\n        <!-- <span *ngIf=\"data.statusValue == 'Open'\" title=\"Approve\" (click)=\"ApproveMsg(data.message_id)\"\n          style=\"padding:10px;cursor: pointer;\"><i class=\"fa fa-check-circle\"\n            style=\"font-size: 14px;color: #01DF01;\"></i> </span> -->\n        <span title=\"Edit\" (click)=\"editSMS(item)\" style=\"padding:10px;cursor: pointer;\"><i\n            class=\"fa fa-pencil edit-icon-pencil\" style=\"font-size: 14px;color: #0084f6;\"></i></span>\n        <span  title=\"Delete\" (click)=\"DeleteMsg(item.message_id)\"\n          style=\"padding:10px;cursor: pointer;\"><i class=\"fa fa-times-circle\"\n            style=\"color: red;font-size: 14px;\"></i></span>\n      </div>\n    </div>\n    </div>\n      <!-- =====end============= -->\n    </div>\n    <div class=\"value-outer-container\" *ngIf=\"messageList?.length == 0\"\n      style=\"text-align: center;padding: 10%;font-weight: 600;min-height: 50vh;max-height: 50vh;\">\n      <span>No data found</span>\n    </div>\n  </div>\n  <div class=\"c-md-12\" style=\"margin-top: 10px;text-align: right;\">\n    <button class=\"btn fullBlue\" (click)=\"sendNotification()\">Send SMS/Push</button>\n  </div>\n</div>\n<div *ngIf=\"notificationPopup || loginHistoryPopup\" class=\"black-bg\" (click)=\"closePopUp()\"></div>\n<div *ngIf=\"isOptions\" style=\"background: none;\" class=\"black-bg\" (click)=\"isOptions = false\"></div>\n\n<div *ngIf=\"loginHistoryPopup\" class=\"notification_popup\" style=\"height: 77vh;\">\n  <div class=\"row c-md-12\" style=\"padding:0;\">\n    <span style=\"font-weight: 600;\">Last Login History</span>\n    <span style=\"padding-bottom: 10px;text-align: right;float: right;\">\n      <span style=\"cursor: pointer;font-size: 16px;font-weight: 600;\" (click)=\"closePopUp()\"> X </span>\n    </span>\n  </div>\n  <div class=\"table-container\">\n    <div class=\"heading-container\" style=\"background: #fafafa;font-size: 12px;font-weight: 600;\">\n      <div class=\"heading-item\" style=\"text-align: left;width: 25%;\">\n        <span>Login Date Time</span>\n      </div>\n      <div class=\"heading-item\" style=\"text-align: left;width: 25%;\">\n        <span>Logout Date Time</span>\n      </div>\n      <div class=\"heading-item\" style=\"width: 20%;text-align: left;\">\n        Device Type\n      </div>\n      <div class=\"heading-item\" style=\"width: 30%;text-align: left;\">\n        Device Id\n      </div>\n    </div>\n    <div class=\"value-outer-container\" *ngIf=\"loginHistory?.length>0\" style=\"min-height: 57vh;max-height: 57vh;\">\n      <div class=\"value-container\" *ngFor=\"let data of loginHistory; let i = index;\" style=\"padding:10px\">\n        <div class=\"value-item\" style=\"text-align: left;width: 25%;\">\n          <!-- {{data.login_datetime | date: 'dd MMM yyyy HH:MM a'}} -->\n          {{data.login_datetime | date: 'dd MMM yyyy'}}\n          {{data.login_datetime | date: 'shortTime'}}\n        </div>\n        <div class=\"value-item\" style=\"text-align: left;width: 25%;\">\n          {{data.logout_datetime | date: 'dd MMM yyyy'}}\n          {{data.logout_datetime | date: 'shortTime'}}\n        </div>\n        <div class=\"value-item\" style=\"text-align: left;width: 20%;\">\n          {{data.source}}\n        </div>\n        <div class=\"value-item\" style=\"text-align: left;width: 30%;\">\n          {{data.device_id}}\n        </div>\n      </div>\n    </div>\n    <div class=\"value-outer-container\" *ngIf=\"loginHistory?.length == 0\"\n      style=\"text-align: center;padding: 10%;font-weight: 600;min-height: 50vh;max-height: 50vh;\">\n      <span>No data found</span>\n    </div>\n    <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event,'History')\" (goNext)=\"fetchNext('History')\"\n          (goPrev)=\"fetchPrevious('History')\" [pagesToShow]=\"10\" [page]=\"historyPageIndex\" [perPage]=\"historyBatchSize\"\n          [count]=\"historyTotalRow\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"helpSection\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"top: 10%;\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h2 class=\"modal-title\">Help</h2>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"new-modules-list\">\n          <ol>\n            <div style=\"margin-bottom: 10px;\"><span style=\"font-weight: 600;\">1. Clear registered device (If Single\n                Device Login setting is enabled) <span style=\"color: #0084f6;\">X</span> - </span>\n              <span>When user login we capture registered devices to avoid login on multiple devices. After clicking on\n                this option the user registered device gets cleared and the user can access through another\n                device.</span>\n            </div>\n\n            <div><span style=\"font-weight: 600;\">2. Allow/Block access<i class=\"fa fa-universal-access allowAccessIcons\"\n                  style=\"color: #0084f6;\" aria-hidden=\"true\"></i> - </span>\n              <span>After clicking on block access user won’t be able to access on app/web.</span>\n            </div>\n          </ol>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/components/users-management/users/add-edit-user/add-edit-user.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/users-management/users/add-edit-user/add-edit-user.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section {\n  padding: 10px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.row {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.countryCallingCode {\n  float: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy1tYW5hZ2VtZW50L3VzZXJzL2FkZC1lZGl0LXVzZXIvYWRkLWVkaXQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FDckJ4QjtBRGpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FDbkI1QjtBQWxHQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0FBcUcxQjtBQWxHQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7QUFxR3RCO0FBbkdBO0VBQ0ksV0FBVztBQXNHZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMtbWFuYWdlbWVudC91c2Vycy9hZGQtZWRpdC11c2VyL2FkZC1lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2Nzc1wiO1xuXG5cbi5taWRkbGUtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5yb3d7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jb3VudHJ5Q2FsbGluZ0NvZGV7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/users-management/users/add-edit-user/add-edit-user.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/users-management/users/add-edit-user/add-edit-user.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddEditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditUserComponent", function() { return AddEditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_user_management_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/user-management/user.service */ "./src/app/services/user-management/user.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/common-service */ "./src/app/services/common-service.ts");
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






let AddEditUserComponent = /** @class */ (() => {
    let AddEditUserComponent = class AddEditUserComponent {
        constructor(route, activatedRoute, apiService, toastCtrl, commonService, auth) {
            this.route = route;
            this.activatedRoute = activatedRoute;
            this.apiService = apiService;
            this.toastCtrl = toastCtrl;
            this.commonService = commonService;
            this.auth = auth;
            this.userId = "-1";
            this.rolesList = [];
            this.roleDetails = {
                name: '',
                address: '',
                username: '',
                country_id: '',
                alternate_email_id: '',
                role_id: '-1',
                attendance_device_id: '',
                userType: '',
                is_employee_to_be_create: 'true',
                is_office_only_access: false
            };
            this.biometricEnable = '0';
            this.instituteCountryDetObj = {};
            this.countryDetails = [];
            this.maxlength = null;
            this.country_id = null;
            this.enable_ip_lock_feature = 'N';
        }
        ngOnInit() {
            this.roleDetails = {
                name: '',
                address: '',
                username: '',
                country_id: '',
                alternate_email_id: '',
                role_id: '-1',
                attendance_device_id: '',
                userType: '',
                is_employee_to_be_create: 'true'
            };
            this.activatedRoute.params.subscribe((res) => {
                if (res.hasOwnProperty('id')) {
                    this.userId = res.id;
                    this.fetchUserDetails(res.id);
                }
                else {
                    this.userId = "-1";
                }
            });
            this.getRolesList();
            this.biometricEnable = sessionStorage.getItem('biometric_attendance_feature');
            this.enable_ip_lock_feature = sessionStorage.getItem('enable_ip_lock_feature');
            this.fetchDataForCountryDetails();
        }
        // created by: Nalini Walunj
        // Below three functions are written to fetch country details from the session stored at the time of login of institute
        fetchDataForCountryDetails() {
            let encryptedData = sessionStorage.getItem('country_data');
            let temp = JSON.parse(encryptedData);
            if (temp.length > 0) {
                this.countryDetails = temp;
                let defacult_Country = this.countryDetails.filter((country) => {
                    return country.is_default == 'Y';
                });
                this.instituteCountryDetObj = defacult_Country[0];
                this.country_id = defacult_Country[0].id;
                this.maxlength = defacult_Country[0].country_phone_number_length;
                this.roleDetails.country_id = defacult_Country[0].id;
            }
        }
        onChangeObj(event) {
            console.log(event);
            this.countryDetails.forEach(element => {
                if (element.id == event) {
                    this.instituteCountryDetObj = element;
                    // this.phonenumberCheck(this.instituteCountryDetObj.country_phone_number_length);
                    this.maxlength = this.instituteCountryDetObj.country_phone_number_length;
                    this.country_id = element.id;
                }
                this.roleDetails.country_id = this.instituteCountryDetObj.id;
            });
        }
        getRolesList() {
            this.apiService.getRoles().subscribe(res => {
                this.rolesList = res;
            }, err => {
                //console.log(err);
            });
        }
        fetchUserDetails(id) {
            this.auth.showLoader();
            this.apiService.fetchUserDetails(id).subscribe(res => {
                this.auth.hideLoader();
                this.roleDetails = res;
                this.countryDetails.forEach(element => {
                    if (element.id == this.roleDetails.country_id) {
                        this.instituteCountryDetObj = element;
                        // this.phonenumberCheck(this.instituteCountryDetObj.country_phone_number_length);
                        this.maxlength = this.instituteCountryDetObj.country_phone_number_length;
                        this.country_id = this.instituteCountryDetObj.id;
                    }
                });
                if (this.roleDetails.is_active == 'Y') {
                    this.roleDetails.is_active = true;
                }
                else {
                    this.roleDetails.is_active = false;
                }
                this.roleDetails.is_office_only_access = (this.roleDetails.is_office_only_access == 'Y') ? true : false;
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        saveUserDetails() {
            let validate = this.validateUserDetails(this.roleDetails);
            if (validate == false) {
                return;
            }
            if (this.roleDetails.is_employee_to_be_create == true) {
                this.roleDetails.is_employee_to_be_create = 'Y';
            }
            else {
                this.roleDetails.is_employee_to_be_create = 'N';
            }
            this.roleDetails.is_office_only_access = this.roleDetails.is_office_only_access ? 'Y' : 'N';
            let obj = {
                address: this.roleDetails.address,
                attendance_device_id: this.roleDetails.attendance_device_id,
                is_active: this.roleDetails.is_active,
                name: this.roleDetails.name,
                phone: this.roleDetails.username,
                country_id: this.roleDetails.country_id,
                role_id: this.roleDetails.role_id,
                username: this.roleDetails.username,
                alternate_email_id: this.roleDetails.alternate_email_id,
                is_office_only_access: this.roleDetails.is_office_only_access
            };
            console.log(obj);
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.apiService.createUser(obj).subscribe(res => {
                    this.auth.hideLoader();
                    this.messageNotifier('success', '', 'User Added Successfully');
                    this.route.navigateByUrl('/view/manage/user');
                }, err => {
                    this.auth.hideLoader();
                    console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        updateUserDetails() {
            let validate = this.validateUserDetails(this.roleDetails);
            if (validate == false) {
                return;
            }
            if (this.roleDetails.is_active == true) {
                this.roleDetails.is_active = 'Y';
            }
            else {
                this.roleDetails.is_active = 'N';
            }
            this.roleDetails.is_office_only_access = this.roleDetails.is_office_only_access ? 'Y' : 'N';
            let obj = {
                address: this.roleDetails.address,
                attendance_device_id: this.roleDetails.attendance_device_id,
                is_active: this.roleDetails.is_active,
                name: this.roleDetails.name,
                phone: this.roleDetails.username,
                country_id: this.roleDetails.country_id,
                role_id: this.roleDetails.role_id,
                alternate_email_id: this.roleDetails.alternate_email_id,
                is_office_only_access: this.roleDetails.is_office_only_access
            };
            console.log(obj);
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.apiService.updateUserDetails(obj, this.userId).subscribe(res => {
                    this.auth.hideLoader();
                    this.messageNotifier('success', '', 'Details updated successfully');
                    this.route.navigateByUrl('/view/manage/user');
                }, err => {
                    this.auth.hideLoader();
                    console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        validateUserDetails(obj) {
            let check = false;
            if (obj.name.trim() == "") {
                this.messageNotifier('error', '', 'Please enter name');
                return false;
            }
            console.log(this.maxlength);
            check = this.commonService.phonenumberCheck(obj.username, this.maxlength, this.country_id);
            if (check == false) {
                this.messageNotifier('error', '', 'Please check the number you have provided');
                return false;
            }
            if (check == 'noNumber') {
                this.messageNotifier('error', '', 'Please enter valid contact no.');
                return false;
            }
            if (obj.alternate_email_id.trim() != "") {
                check = this.ValidateEmail(obj.alternate_email_id);
                if (check == false) {
                    this.messageNotifier('error', '', 'Please check the email you have provided');
                    return false;
                }
            }
            if (this.userId == "-1") {
                if (obj.role_id == '-1') {
                    this.messageNotifier('error', '', 'Please assign role to user');
                    return false;
                }
            }
            return true;
        }
        // phonenumberCheck(inputtxt, maxlength) {
        //   let phoneno = /^\d{10}$/;
        //   // let phoneno = /^\d+$/+(maxlength);
        //   if ((inputtxt.match(phoneno))) {
        //     return true;
        //   }
        //   else {
        //     return false;
        //   }
        // }
        phonenumberCheck(inputtxt, maxlength) {
            console.log(maxlength);
            console.log(inputtxt);
            if (inputtxt.length == maxlength) {
                return true;
            }
            else {
                return false;
            }
        }
        ValidateEmail(mail) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,9})+$/.test(mail)) {
                return true;
            }
            return false;
        }
        messageNotifier(type, title, msg) {
            let data = {
                type: type,
                title: title,
                body: msg
            };
            this.toastCtrl.popToast(data);
        }
    };
    AddEditUserComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_user_management_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    AddEditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/users/add-edit-user/add-edit-user.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-edit-user.component.scss */ "./src/app/components/users-management/users/add-edit-user/add-edit-user.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_user_management_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], AddEditUserComponent);
    return AddEditUserComponent;
})();



/***/ }),

/***/ "./src/app/components/users-management/users/users.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/users-management/users/users.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section {\n  border-top: 1px solid #ccc;\n  padding-top: 10px;\n  margin-top: 40px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.align-txt-lft {\n  text-align: left;\n  font-size: 12px;\n}\n.align-number {\n  text-align: right;\n  font-size: 12px;\n}\n.psw-show {\n  font-size: 1.4em;\n  color: #0084f6;\n}\n.credentials-view {\n  display: flex;\n  flex-direction: row;\n}\n.btnWrapper .btn .tooltip {\n  position: relative;\n  top: -30px;\n  right: -30px;\n  min-width: 100px;\n  font-size: 12px;\n  padding: 6px;\n  height: 35px;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: hidden;\n  opacity: 0;\n}\n.btnWrapper .btn:hover .tooltip {\n  position: relative;\n  top: -20px;\n  right: 120px;\n  min-width: 100px;\n  padding: 6px;\n  border-radius: 5px;\n  font-size: 12px;\n  height: 30px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.2s;\n}\n.btnWrapper .btn:focus {\n  outline: none;\n}\n.btnWrapper .btn:active {\n  box-shadow: none;\n}\n.row {\n  margin: 0px 0px;\n}\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 65%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.spanText {\n  font-size: 12px;\n}\n.allocation-popup .filler-section {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.allocation-popup .table-histrory {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  max-height: 280px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.content-container .user-table-wrapper {\n  margin-top: 10px;\n}\n.content-container .btn-group {\n  margin-top: 20px;\n}\n.content-container .btn-group button {\n  margin-right: 5px;\n}\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #eee;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  height: 32px;\n  font-size: 12px;\n  width: 100%;\n  border-radius: 4px;\n}\n.search-filter-wrapper .field-wrapper {\n  position: relative;\n  padding-top: 0px !important;\n  width: 30%;\n  float: left !important;\n}\n.search-filter-wrapper .field-wrapper .form-ctrl {\n  height: 32px !important;\n  font: 400 12px 'Open sans',sans-serif;\n  border-top: none !important;\n  border-right: none !important;\n  border-left: none !important;\n  border-radius: 4px;\n}\n.search-filter-wrapper .field-wrapper label {\n  position: absolute !important;\n  left: 10% !important;\n  top: 1% !important;\n  font-weight: bold;\n}\n.search-filter-wrapper .field-wrapper label:after {\n  left: 85% !important;\n  top: 10px !important;\n}\n.action-menu a {\n  margin-right: 5px;\n  cursor: pointer;\n}\n.common-tab {\n  padding-top: 5px;\n}\n.common-tab ul {\n  font-size: 0;\n  width: 40%;\n  float: left;\n}\n.common-tab ul li {\n  margin-right: 1%;\n  display: inline-block;\n  width: 20%;\n  max-width: 158px;\n  cursor: pointer;\n}\n.common-tab ul li a {\n  display: block;\n  padding: 6px 20px 6px;\n  background: white;\n  border: 1px solid #0084f6;\n  color: #0084f6;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 4px;\n  height: 30px;\n}\n.common-tab ul li:hover a, .common-tab ul li.active a {\n  background: #0084f6;\n  color: #fff;\n  border-color: #0084f6;\n  font-weight: normal;\n  border-radius: 4px;\n}\n.table_container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.table_container .table_header {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  border-bottom: 1px solid #ccc;\n  padding-top: 10px;\n  background: #e0eaec;\n}\n.table_container .table_header .table_header_item {\n  color: #585574;\n  font-weight: 600;\n  font-size: 12px;\n}\n.table_container .table-value-outer-container {\n  height: 46vh;\n  overflow-y: auto;\n}\n.table_container .table_value {\n  min-height: 34px;\n  display: flex;\n  flex-direction: row;\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 10px;\n  padding: 3px 0px;\n  position: relative;\n}\n.table_container .table_value .table_value_item {\n  color: #585574;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  padding: 0px 5px;\n  word-break: break-all;\n}\n.table_container .large {\n  width: 30%;\n  font-size: 12px;\n}\n.table_container .action {\n  width: 10%;\n  position: absolute;\n  right: 0px;\n}\n.table_container .illustration-container {\n  display: block;\n}\n.table_container .illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 12%;\n  margin-top: -2%;\n}\n.btn-container {\n  display: flex;\n  flex-direction: row;\n  width: 175px;\n  height: 50px;\n}\n.btn-container .btn-item {\n  position: relative;\n}\n.btn-container .btn-item .btn {\n  height: auto;\n}\n.btn-container .more-info-container {\n  z-index: 100;\n  background: white;\n  position: absolute;\n  top: 35px;\n  left: 10px;\n  width: 170px;\n  border-radius: 4px;\n  border: 1px solid #0084f6;\n}\n.btn-container .more-info-container .more-info-item {\n  padding: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  border-bottom: 1px solid #0084f6;\n}\n.btn-container .more-info-container .more-info-item img {\n  height: 1rem;\n}\n.notification_popup {\n  position: fixed;\n  top: 8%;\n  left: 21%;\n  width: 70%;\n  background: white;\n  height: 85vh;\n  padding: 15px;\n  z-index: 100;\n  border-radius: 6px;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n}\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n}\ntextarea {\n  padding: 8px 8px;\n  height: 60px !important;\n  width: 100%;\n  /* border-radius: 4px !important; */\n  background: white !important;\n  border: 0.2px solid rgba(0, 0, 0, 0.160784);\n  /* border-radius: 4px; */\n  margin-top: 5px;\n}\n.msgCount {\n  padding: 2px;\n  border: 1px solid #0084f6;\n  border-radius: 10px;\n  width: 50px;\n  text-align: center;\n}\n.addSmsSection {\n  text-align: right;\n  padding: 0;\n  background: #efefef;\n  width: 31%;\n  height: 103px;\n}\n.addSectionHide {\n  width: 66%;\n  background: none;\n  text-align: right;\n  padding: 0;\n  margin-top: 10px;\n}\n.field-wrapper .form-ctrl {\n  border-radius: 4px;\n}\n.actionBtnIcons {\n  font-size: 14px;\n  padding-left: 10px;\n  color: #0084f6;\n  cursor: pointer;\n}\n.allowAccessIcons {\n  font-size: 14px;\n  padding-left: 10px;\n  cursor: pointer;\n}\n.viewHistoryBtn {\n  color: #0084f6;\n  padding: 1px 4px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton[disabled] {\n  cursor: no-drop;\n}\n.new-keyword {\n  background-color: #0084f6;\n  color: white;\n  border-radius: 50%;\n  letter-spacing: 0.7px;\n  padding: 6px;\n  margin: 0 5px;\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy1tYW5hZ2VtZW50L3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLHVFQUFBO0FBV0E7O0VBS2dCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUN4QmpDO0FEa0JBO0VBU2dCLDBCQUEwQjtFQUMxQixlQUFlO0FDdkIvQjtBRGFBO0VBZ0I0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQ3pCbkQ7QURJQTtFQXVCZ0MsVUFBVTtBQ3ZCMUM7QURBQTtFQTBCZ0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdEJ0RDtBRFBBO0VBZ0NvQyxVQUFVO0FDckI5QztBRFhBO0VBb0NnQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7QUNyQmxEO0FEckJBO0VBOEM0QixjQWxEYjtFQW1EYSxlQUFlO0FDckIzQztBRDhCQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQzNCcEI7QUR1QkE7RUFNTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUN6Qi9CO0FEVUE7RUFpQlEsVUFBVTtFQUNWLGtCQUFrQjtBQ3ZCMUI7QURLQTtFQXNCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN2QjVCO0FETEE7RUE4QlEsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUNyQnhCO0FEakJBO0VBd0NVLFVBQVU7RUFDVixrQkFBa0I7QUNuQjVCO0FBcEdBO0VBRUksMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQjtBQXNHMUI7QUFuR0M7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtBQXNHcEI7QUFuR0M7RUFDRyxpQkFBaUI7RUFDakIsZUFBZTtBQXNHbkI7QUFuR0U7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQXNHbEI7QUFuR0U7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0FBcUd2QjtBQWxHQTtFQVFZLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQThGdEI7QUFqSEE7RUF3QmdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG9CQUFvQjtBQTZGcEM7QUFqSUE7RUF3Q1ksYUFBYTtBQTZGekI7QUFySUE7RUEyQ1ksZ0JBQWdCO0FBOEY1QjtBQXpGQTtFQUNJLGVBQWU7QUE0Rm5CO0FBbkZBLGVBQUE7QUFFQTtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBS1YsNEJBQTRCO0FBcUZoQztBQXJHQTtFQWtCUSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLE9BQU87RUFDUCxTQUFTO0VBQ1QsWUFBWTtBQXVGcEI7QUFuRkE7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBc0ZwQjtBQTNGQTtFQU9RLG1CQUFtQjtFQUNuQixlQUFlO0FBd0Z2QjtBQWhHQTtFQVdRLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUF5RnhCO0FBckZBO0VBQ0ksV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUF3RmpCO0FBbkdBO0VBYVEsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtBQTBGaEI7QUExR0E7RUFtQlEsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWTtBQTJGcEI7QUFqSEE7RUF5QlEsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztBQTRGakI7QUF4SEE7RUErQlEsV0FBVztBQTZGbkI7QUE1SEE7RUFpQ1ksZUFBZTtFQUNmLGlCQUFpQjtBQStGN0I7QUFqSUE7RUF1Q1ksZUR2S1M7QUNxUXJCO0FBekZBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUE0RnZCO0FBekZBO0VBQ0ksVUFBVTtFQUNWLG1CQUFtQjtBQTRGdkI7QUF4RkE7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFLbEIsNEJBQTRCO0FBMkZoQztBQTFHQTtFQWlCUSxZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWM7QUE2RnRCO0FBekZBO0VBQ0ksT0FBTztFQUNQLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUtaLDRCQUE0QjtBQTRGaEM7QUF6RkE7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7QUE0RmQ7QUF6RkE7RUFDSSxTQUFTO0FBNEZiO0FBekZBO0VBQ0ksZUFBZTtBQTRGbkI7QUF4RkE7RUFFUSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBMEYzQjtBQTdGQTtFQU1RLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUEyRnhCO0FBdEZBO0VBRVEsZ0JBQWdCO0FBd0Z4QjtBQTFGQTtFQUtRLGdCQUFnQjtBQXlGeEI7QUE5RkE7RUFPWSxpQkFBaUI7QUEyRjdCO0FBdEZBO0VBRVEsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUF3RjFCO0FBbEdBO0VBYVEsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1Ysc0JBQXNCO0FBeUY5QjtBQXpHQTtFQWtCWSx1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQTJGOUI7QUFsSEE7RUEyQlEsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBMkZ6QjtBQXpIQTtFQWdDWSxvQkFBb0I7RUFDcEIsb0JBQW9CO0FBNkZoQztBQXhGQTtFQUVRLGlCQUFpQjtFQUNqQixlQUFlO0FBMEZ2QjtBQXZGQTtFQUNJLGdCQUFnQjtBQTBGcEI7QUEzRkE7RUFHUSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7QUE0Rm5CO0FBakdBO0VBUVksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUE2RjNCO0FBekdBO0VBY2dCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjRHpVSztFQzBVTCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtBQStGNUI7QUF0SEE7RUE0Qm9CLG1CRG5WQztFQ29WRCxXRHRWTDtFQ3VWSyxxQkRyVkM7RUNzVkQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQThGdEM7QUF4RkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUEyRmY7QUE5RkE7RUFNTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBNEZ6QjtBQXpHQTtFQWVNLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQThGckI7QUEvR0E7RUF1QkksWUFBWTtFQUNaLGdCQUFnQjtBQTRGcEI7QUFwSEE7RUEyQk0sZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUE2RnhCO0FBaElBO0VBcUNRLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUErRjdCO0FBM0lBO0VBZ0RNLFVBQVU7RUFDVixlQUFlO0FBK0ZyQjtBQWhKQTtFQW9ETSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFnR2hCO0FBdEpBO0VBeURNLGNBQWM7QUFpR3BCO0FBMUpBO0VBMkRRLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtBQW1HdkI7QUE5RkU7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0FBaUdoQjtBQXJHRTtFQU1JLGtCQUFrQjtBQW1HeEI7QUF6R0U7RUFRTSxZQUFZO0FBcUdwQjtBQTdHRTtFQVlJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFxRy9CO0FBeEhFO0VBcUJNLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQXVHeEM7QUEvSEU7RUEwQlUsWUFBWTtBQXlHeEI7QUFwR0U7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUF1R3hDO0FBckdFO0VBQ0UsaUNBQThCO0VBQzlCLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQXdHZjtBQXRHRTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1DQUFBO0VBQ0EsNEJBQTRCO0VBQzVCLDJDQUEyQztFQUMzQyx3QkFBQTtFQUNBLGVBQWU7QUF5R25CO0FBdEdFO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQXlHdEI7QUF2R0U7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtBQTBHakI7QUF4R0U7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZ0JBQWdCO0FBMkdwQjtBQXpHRTtFQUNJLGtCQUFrQjtBQTRHeEI7QUExR0U7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBNkdyQjtBQTNHRTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQThHbkI7QUE1R0U7RUFHRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBNkduQjtBQTNHRTtFQUNJLGVBQWU7QUE4R3JCO0FBNUdFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQStHbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzLW1hbmFnZW1lbnQvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2Nzc1wiO1xuLm1pZGRsZS1zZWN0aW9uIHtcbiAgICAvLyBwYWRkaW5nOiAxJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiAuYWxpZ24tdHh0LWxmdHtcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgZm9udC1zaXplOiAxMnB4O1xuIH1cblxuIC5hbGlnbi1udW1iZXJ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuIH1cblxuICAucHN3LXNob3d7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBjb2xvcjogIzAwODRmNjtcbiAgfVxuXG4gIC5jcmVkZW50aWFscy12aWV3e1xuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC8vICBmb250LXNpemU6IDEycHg7XG4gIH1cbi5idG5XcmFwcGVyIHtcbiAgICAuYnRuIHtcbiAgICAgICAgLy8gcGFkZGluZzogMnB4IDBweCAwcHggMHB4O1xuICAgICAgICAvLyBib3JkZXI6IG5vbmU7XG4gICAgICAgIC8vIGhlaWdodDogMzVweDtcbiAgICAgICAgLy8gd2lkdGg6IDM1cHg7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLnRvb2x0aXAge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTQxKTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjE2LCAyMTQsIDIxNCk7XG4gICAgICAgICAgICAudG9vbHRpcCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NDEpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yb3cge1xuICAgIG1hcmdpbjogMHB4IDBweDtcbn1cblxuLmZpbHRlci1zZWN0aW9uIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIC8vIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLy8vLy8vLy8vLy8vLy9QT1BVUCBDU1NTLy8vLy8vLy8vLy8vLy8vLy9cbi8qIHBvcFVwIFNjc3MgKi9cblxuLnBvcHVwV3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbiAgICB6LWluZGV4OiAxMDA7IC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLnBvcHVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2NSU7IC8vIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiA1JTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87IC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG59XG5cbi5wb3B1cC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7IC8vIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDFweCA4cHggMjBweCA1cHggIzljOWM5YztcbiAgICB0cmFuc2l0aW9uOiB1bnNldDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIG1hcmdpbjogMjVweCAwIDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufVxuXG4uY2xvc2VQb3B1cCB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAmLmJvdHRvbVJpZ2h0IHtcbiAgICAgICAgYm90dG9tOiAycHg7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgICYudG9wTGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgIH1cbiAgICAmLmJvdHRvbUxlZnQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiAycHg7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICBzdHJva2U6ICNjMWMxYzE7XG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgIHN0cm9rZTogJGNvbW1vbi1ibHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucG9wdXAtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmZhZGVJbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1jc3MgZm9yIG1vYiBwb3B1cFxuLnBvcHVwV3JhcHBlck1vYiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IC8vIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLmNsb3NlUG9wdXAge1xuICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgIHRvcDogLTI3cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLnBvcHVwLW1vYiB7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm90dG9tOiAtNzAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xufVxuXG4ucG9wdXBXcmFwcGVyTW9iLnNob3dQb3B1cE1vYiB7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnBvcHVwV3JhcHBlck1vYi5zaG93UG9wdXBNb2IgLnBvcHVwLW1vYiB7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uc3BhblRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi5hbGxvY2F0aW9uLXBvcHVwIHtcbiAgICAuZmlsbGVyLXNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAudGFibGUtaGlzdHJvcnkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyODBweDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgLnVzZXItdGFibGUtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5idG4tZ3JvdXAge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBidXR0b257XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlYXJjaC1maWx0ZXItd3JhcHBlciB7XG4gICAgLm5vcm1hbC1maWVsZCB7XG4gICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQ6IDQwMCAxMnB4ICdPcGVuIHNhbnMnLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpZWxkLXdyYXBwZXIgbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogMSUgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgbGVmdDogODUlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjdGlvbi1tZW51e1xuICAgIGF7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLmNvbW1vbi10YWIge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdWwge1xuICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1OHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDIwcHggNnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRiZy13aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4udGFibGVfY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC50YWJsZV9oZWFkZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAudGFibGVfaGVhZGVyX2l0ZW17XG4gICAgICBjb2xvcjogIzU4NTU3NDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAvLyBwYWRkaW5nOiAwcHggNXB4O1xuICAgIH1cbiAgfVxuICBcbiAgLnRhYmxlLXZhbHVlLW91dGVyLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDQ2dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICAgIC50YWJsZV92YWx1ZXtcbiAgICAgIG1pbi1oZWlnaHQ6IDM0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIHBhZGRpbmc6IDNweCAwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAudGFibGVfdmFsdWVfaXRlbXtcbiAgICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxhcmdle1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmFjdGlvbntcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMHB4O1xuICAgIH1cbiAgICAuaWxsdXN0cmF0aW9uLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgLmlsbHVzdHJhdGlvbi1pbWd7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMiU7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yJTtcbiAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmJ0bi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxNzVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLmJ0bi1pdGVte1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLmJ0bntcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgICAubW9yZS1pbmZvLWNvbnRhaW5lcntcbiAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzNXB4O1xuICAgICAgbGVmdDogMTBweDtcbiAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICAubW9yZS1pbmZvLWl0ZW17XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwODRmNjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5ub3RpZmljYXRpb25fcG9wdXB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogOCU7XG4gICAgbGVmdDogMjElO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggNXB4ICM5YzljOWM7XG4gIH1cbiAgLmJsYWNrLWJne1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAsMTAsMTAsMC4zKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIHRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50OyAqL1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0KTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLm1zZ0NvdW50IHtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODRmNjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYWRkU21zU2VjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIHdpZHRoOiAzMSU7XG4gICAgaGVpZ2h0OiAxMDNweDtcbiAgfVxuICAuYWRkU2VjdGlvbkhpZGUge1xuICAgIHdpZHRoOiA2NiU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmZpZWxkLXdyYXBwZXIgLmZvcm0tY3RybCB7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLmFjdGlvbkJ0bkljb25zIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5hbGxvd0FjY2Vzc0ljb25zIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAudmlld0hpc3RvcnlCdG4ge1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgLy8gYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICBjb2xvcjogIzAwODRmNjtcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gIH1cbiAgLm5ldy1rZXl3b3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg0ZjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/users-management/users/users.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/users-management/users/users.component.ts ***!
  \**********************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_management_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user-management/user.service */ "./src/app/services/user-management/user.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../model/role_features */ "./src/app/model/role_features.ts");
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









let UsersComponent = /** @class */ (() => {
    let UsersComponent = class UsersComponent {
        constructor(apiService, toastCtrl, auth, router, httpService, excelService) {
            this.apiService = apiService;
            this.toastCtrl = toastCtrl;
            this.auth = auth;
            this.router = router;
            this.httpService = httpService;
            this.excelService = excelService;
            this.usersList = [];
            this.userListDataSource = [];
            this.isLangInstitute = false;
            this.dataFilter = {
                role: '1',
                is_active: true,
                is_show_credentials: false,
                master_course: '',
                course_id: 0,
                searchCriteria: '',
                app_downloaded: '-1',
                standard_id: ''
            };
            this.allocateItemPopUp = false;
            this.tempdata = "";
            this.inventoryList = [];
            this.inventoryAllocated = [];
            this.allocateInventory = {
                item_id: -1,
                alloted_units: 1
            };
            this.showUnit = false;
            this.availableunit = 0;
            this.showUserTable = false;
            this.PageIndex = 1;
            this.displayBatchSize = 10;
            this.searchDataFlag = false;
            this.searchedData = [];
            this.totalRow = 0;
            this.userSelected = [];
            this.searchText = "";
            this.toottip = "We can customize our users via providing or assigning different roles according to their activities.User can login with their credentials and can operate only their defined roles.";
            this.isActiveUsers = true;
            this.selectAll = false;
            this.selectedRowCount = 0;
            this.masterCourseData = [];
            this.CourseData = [];
            this.isProfessional = false;
            this.notificationPopup = false;
            this.addSMS = false;
            this.editMsg = false;
            this.selectedMsg = '';
            this.selectedPushId = '';
            this.selectedPushMesg = '';
            this.smsNotification = true;
            this.pushNotification = false;
            this.messageCount = 0;
            this.message = '';
            this.messageList = [];
            this.pushNotificatioList = [];
            this.smsListFlag = "active";
            this.loginHistoryPopup = false;
            this.loginHistory = [];
            this.historyPageIndex = 1;
            this.historyBatchSize = 10;
            this.historyTotalRow = 0;
            this.historyUserId = 0;
            this.sso_check = false;
            this.tableSetting = {
                keys: [
                    { primaryKey: 'name', header: 'Name' },
                    { primaryKey: 'username', header: 'Contact No' },
                    { primaryKey: 'alternate_email_id', header: 'Email ID' },
                    { primaryKey: 'username', header: 'Username' },
                    { primaryKey: 'password', header: 'Password' },
                    { primaryKey: 'last_login_date_time', header: 'Last Login' },
                ]
            };
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.user_role = '';
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_8__["role"].features;
            this.schoolModel = false;
            this.fullResponse = [];
        }
        ngOnInit() {
            this.smsListFlag = 'active';
            this.checkWhichTabIsOpen();
            this.checkInstituteType();
            this.getAllUserList(this.PageIndex);
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            if (sessionStorage.getItem('permitted_roles')) {
                let permissions = Object.keys(JSON.parse(sessionStorage.getItem('permitted_roles')));
                if (this.role_feature.USERS_MENU) {
                    this.dataFilter.is_show_credentials = true;
                }
            }
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            if (this.dataFilter.role == '1') {
                this.getMasterCourseData();
            }
        }
        checkWhichTabIsOpen() {
            let url = this.router.url;
            if (url.includes('user')) {
                this.switchActiveView('liUser');
            }
            else {
                this.switchActiveView('liRole');
            }
        }
        switchActiveView(id) {
            document.getElementById('liUser').classList.remove('active');
            document.getElementById('liRole').classList.remove('active');
            document.getElementById(id).classList.add('active');
        }
        getAllUserList(PageIndex) {
            if (this.dataFilter.role == "-1") {
                this.messageNotifier('error', '', 'Please Select User Type');
                return;
            }
            let Active = "";
            if (this.dataFilter.is_active) {
                Active = "Y";
                this.isActiveUsers = true;
            }
            else {
                Active = "N";
                this.isActiveUsers = false;
            }
            let startindex = this.displayBatchSize * (PageIndex - 1);
            let obj = {
                page_no: startindex,
                user_Type: this.dataFilter.role,
                page_offset: this.displayBatchSize
            };
            if (!this.isProfessional && this.dataFilter.role == '1') {
                if (this.schoolModel) {
                    obj.standard_id = this.dataFilter.standard_id;
                    obj.master_course_name = '';
                }
                else {
                    obj.master_course_name = this.dataFilter.master_course;
                }
                obj.course_id = this.dataFilter.course_id;
            }
            if (this.isProfessional && this.dataFilter.role == '1') {
                obj.standard_id = this.dataFilter.master_course,
                    obj.subject_id = this.dataFilter.course_id;
            }
            if (this.dataFilter.searchCriteria != '') {
                obj.searchCriteria = this.dataFilter.searchCriteria;
            }
            if (this.dataFilter.app_downloaded != '-1') {
                if (this.dataFilter.app_downloaded == '3') {
                    obj.is_logged_multiple_devices = 1;
                }
                else {
                    obj.app_downloaded = this.dataFilter.app_downloaded;
                }
            }
            this.searchText = "";
            this.searchDataFlag = false;
            this.auth.showLoader();
            this.apiService.getUserList(obj, Active).subscribe((res) => {
                this.auth.hideLoader();
                this.totalRow = res.length;
                this.showUserTable = true;
                this.selectedRowCount = 0;
                this.usersList = this.addKeys(res, false);
                if (this.usersList && this.usersList.length) {
                    this.totalRow = this.usersList[0].total_element_count;
                    if (this.usersList[0].single_device_login && this.usersList[0].distinct_device_login) {
                        this.sso_check = true;
                    }
                    this.usersList.forEach(element => {
                        element.isEncript = true;
                        if (element.access_allow == '1') {
                            element.access_allow_title = 'Block Access';
                        }
                        else if (element.access_allow == '2') {
                            element.access_allow_title = 'Allow Access';
                        }
                        else {
                            element.access_allow_title = '';
                        }
                    });
                }
                // this.fetchTableDataByPage(this.PageIndex, 'user');
            }, err => {
                this.auth.hideLoader();
                this.showUserTable = false;
                console.log(err);
                this.messageNotifier('error', '', err.error.message);
            });
        }
        clearData() {
            this.usersList = [];
            this.totalRow = 0;
            this.PageIndex = 1;
            this.displayBatchSize = 10;
            this.selectedRowCount = 0;
            this.userListDataSource = [];
            this.dataFilter.is_active = true;
            this.dataFilter.master_course = '';
            this.dataFilter.course_id = 0;
            this.dataFilter.searchCriteria = '';
            this.dataFilter.app_downloaded = '-1';
            if (this.dataFilter.role == '1') {
                this.getMasterCourseData();
            }
        }
        getStandard() {
            let url = "/api/v1/courseMaster/master-course-list/" + sessionStorage.getItem("institute_id") + "?is_standard_wise=true&sorted_by=course_name";
            let keys;
            this.auth.showLoader();
            this.httpService.getData(url).subscribe((data) => {
                this.masterCourseData = [];
                this.auth.hideLoader();
                this.fullResponse = data.result;
                keys = Object.keys(data.result);
                // console.log("keys", keys);
                // this.masterCourse = keys;
                for (let i = 0; i < keys.length; i++) {
                    let obj = {
                        masterCourse: '',
                        standard_id: 0
                    };
                    obj.masterCourse = keys[i];
                    let temp = this.fullResponse[keys[i]];
                    obj.standard_id = (temp.length) ? temp[0].standard_id : '';
                    this.masterCourseData.push(obj);
                }
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        updateCourseList(ev) {
            this.CourseData = [];
            this.dataFilter.course_id = '0';
            let master_course_obj = this.masterCourseData.filter((standard) => (ev == standard.standard_id));
            let temp = this.fullResponse[master_course_obj[0].masterCourse];
            for (let i = 0; i < temp.length; i++) {
                this.CourseData.push(temp[i]);
            }
        }
        getMasterCourseData() {
            if (!this.isProfessional) {
                if (this.schoolModel) {
                    this.getStandard();
                }
                else {
                    this.auth.showLoader();
                    this.httpService.getData('/api/v1/courseMaster/fetch/' + sessionStorage.getItem('institute_id') + '/all').subscribe((res) => {
                        this.auth.hideLoader();
                        this.masterCourseData = res;
                    }, err => {
                        this.auth.hideLoader();
                        this.messageNotifier('error', '', err.error.message);
                    });
                }
            }
            else {
                this.auth.showLoader();
                this.httpService.getData('/api/v1/standards/all/' + sessionStorage.getItem('institute_id')).subscribe((res) => {
                    this.auth.hideLoader();
                    this.masterCourseData = res;
                }, err => {
                    this.auth.hideLoader();
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        getCourseData(obj) {
            if (!this.isProfessional) {
                this.auth.showLoader();
                const url = '/api/v1/courseMaster/fetch/' + sessionStorage.getItem('institute_id') + '/' + this.dataFilter.master_course;
                this.httpService.getData(url).subscribe((data) => {
                    this.auth.hideLoader();
                    this.CourseData = data.coursesList;
                }, (error) => {
                    this.auth.hideLoader();
                });
            }
            else {
                this.auth.showLoader();
                const url = '/api/v1/subjects/standards/' + this.dataFilter.master_course;
                this.httpService.getData(url).subscribe((data) => {
                    this.auth.hideLoader();
                    this.CourseData = data;
                }, (error) => {
                    this.auth.hideLoader();
                });
            }
        }
        sendSmsForApp(type) {
            if (confirm('Are you sure you want to send SMS to selected users?')) {
                let data = {
                    app_sms_type: type,
                    userArray: this.getSelectedUser()
                };
                if (data.userArray.length == 0) {
                    this.messageNotifier('error', '', 'Please select user');
                    return;
                }
                this.apiService.sendSmS(data).subscribe(res => {
                    this.messageNotifier('success', 'Sent successfully', 'SMS Sent Successfully');
                }, err => {
                    console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        allocateItemToUser(data) {
            this.tempdata = data;
            this.getInventoryItemList(data);
            this.getAllocatedItemHistrory(data);
            this.allocateItemPopUp = true;
        }
        closePopUp() {
            this.tempdata = "";
            this.allocateItemPopUp = false;
            this.showUnit = false;
            this.allocateInventory = {
                item_id: -1,
                alloted_units: 1
            };
            this.notificationPopup = false;
            this.loginHistoryPopup = false;
            this.historyPageIndex = 1;
        }
        getInventoryItemList(data) {
            this.auth.showLoader();
            this.apiService.getItemList(data.user_id).subscribe(res => {
                this.auth.hideLoader();
                this.inventoryList = res;
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        getAllocatedItemHistrory(data) {
            this.auth.showLoader();
            this.apiService.getAllotedHistroy(data.user_id).subscribe(res => {
                this.auth.hideLoader();
                this.inventoryAllocated = res;
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        allocateItem() {
            if (this.allocateInventory.item_id == -1) {
                this.messageNotifier('error', '', 'Please provide item details');
                return;
            }
            let unit = Number(this.allocateInventory.alloted_units);
            if (unit < 0) {
                this.messageNotifier('error', '', 'Please give valid unit');
                return;
            }
            if (this.availableunit < unit) {
                this.messageNotifier('error', '', 'Allocatd unit can not be greater than available unit');
                return;
            }
            let obj = {
                alloted_units: this.allocateInventory.alloted_units,
                item_id: this.allocateInventory.item_id,
                user_id: this.tempdata.user_id
            };
            this.auth.showLoader();
            this.apiService.allocateItem(obj).subscribe(res => {
                this.auth.hideLoader();
                this.messageNotifier('success', '', 'Inventory Allocate Successfully');
                this.getAllocatedItemHistrory(this.tempdata);
                this.allocateInventory = {
                    item_id: -1,
                    alloted_units: 1
                };
                this.showUnit = false;
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        onitemSelction() {
            if (this.allocateInventory.item_id != '-1') {
                this.showUnit = true;
                for (let i = 0; i < this.inventoryList.length; i++) {
                    if (this.inventoryList[i].item_id == this.allocateInventory.item_id) {
                        this.availableunit = Number(this.inventoryList[i].available_units);
                    }
                }
            }
            else {
                this.showUnit = false;
                this.availableunit = 0;
            }
        }
        deleteInventoryItem(data) {
            if (confirm('Are you sure you want to delete?')) {
                this.auth.showLoader();
                this.apiService.deleteInventory(data.allocation_id).subscribe(res => {
                    this.auth.hideLoader();
                    this.messageNotifier('success', 'Deleted', 'Item Deleted Successfully');
                    this.getAllocatedItemHistrory(this.tempdata);
                }, err => {
                    this.auth.hideLoader();
                    console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        descriptPassword(object) {
            object.isEncript = (!object.isEncript);
        }
        // pagination functions 
        fetchTableDataByPage(index, obj) {
            if (obj == 'user') {
                this.PageIndex = index;
                this.getAllUserList(this.PageIndex);
            }
            else {
                this.historyPageIndex = index;
                this.getLastLoginDetails(this.historyUserId, this.historyPageIndex);
            }
        }
        fetchNext(obj) {
            if (obj == 'user') {
                this.PageIndex++;
                this.fetchTableDataByPage(this.PageIndex, obj);
            }
            else {
                this.historyPageIndex++;
                this.fetchTableDataByPage(this.historyPageIndex, obj);
            }
        }
        fetchPrevious(obj) {
            if (obj == 'user') {
                if (this.PageIndex != 1) {
                    this.PageIndex--;
                    this.fetchTableDataByPage(this.PageIndex, obj);
                }
            }
            else {
                if (this.historyPageIndex != 1) {
                    this.historyPageIndex--;
                    this.fetchTableDataByPage(this.historyPageIndex, obj);
                }
            }
        }
        getDataFromDataSource(startindex, obj) {
            let data = [];
            if (this.searchDataFlag == true) {
                data = this.searchedData.slice(startindex, startindex + this.displayBatchSize);
            }
            else {
                data = this.userListDataSource.slice(startindex, startindex + this.displayBatchSize);
            }
            return data;
        }
        searchInList() {
            if (this.searchText != "" && this.searchText != null) {
                let searchData = this.userListDataSource.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.searchedData = searchData;
                this.totalRow = searchData.length;
                this.searchDataFlag = true;
                this.PageIndex = 1;
                this.fetchTableDataByPage(this.PageIndex, 'user');
            }
            else {
                this.searchDataFlag = false;
                this.fetchTableDataByPage(this.PageIndex, 'user');
                this.totalRow = this.userListDataSource.length;
            }
        }
        getSelectedUser() {
            let arr = [];
            for (let i = 0; i < this.usersList.length; i++) {
                if (this.usersList[i].assigned == true) {
                    arr.push(this.usersList[i].user_id);
                }
            }
            return arr;
        }
        userSelectedEvent(event, data) {
            if (event.target.checked) {
                this.userSelected.push(data);
            }
            else {
                for (let i = 0; i < this.userSelected.length; i++) {
                    if (this.userSelected[i].user_id == data.user_id) {
                        this.userSelected.splice(i, 1);
                    }
                }
            }
        }
        addKeys(data, val) {
            data.forEach(element => {
                element.assigned = val;
            });
            return data;
        }
        checkInstituteType() {
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isLangInstitute = true;
                }
                else {
                    this.isLangInstitute = false;
                }
            });
        }
        messageNotifier(type, title, msg) {
            let data = {
                type: type,
                title: title,
                body: msg
            };
            this.toastCtrl.popToast(data);
        }
        toggleAllCheckBox($event) {
            console.log('toggleAllCheckBox');
            this.usersList.forEach(element => {
                element.assigned = this.selectAll;
            });
            this.selectAll ? (this.selectedRowCount = this.usersList.length) : (this.selectedRowCount = 0);
        }
        isAllChecked() {
            return this.usersList.every(_ => _.assigned);
        }
        rowCheckboxChange(record) {
            (record.assigned) ? (this.selectedRowCount++) : (this.selectedRowCount--);
        }
        getAllMessageFromServer() {
            this.notificationPopup = true;
            this.checkRole();
            this.messageList = [];
            this.pushNotificatioList = [];
            let tempMessageList = [];
            this.auth.showLoader();
            let obj = {
                from_date: '',
                to_date: moment__WEBPACK_IMPORTED_MODULE_6__().format("YYYY-MM-DD")
            };
            this.httpService.postData('/api/v1/notification/message/' + sessionStorage.getItem('institute_id') + '/all', obj).subscribe(res => {
                this.auth.hideLoader();
                tempMessageList = res;
                for (let i = 0; i < tempMessageList.length; i++) {
                    if (tempMessageList[i].source === "SMS") {
                        this.messageList.push(tempMessageList[i]);
                    }
                    if (tempMessageList[i].source === "Push") {
                        this.pushNotificatioList.push(tempMessageList[i]);
                        console.log("message list", this.pushNotificatioList);
                    }
                }
                // this.messageList = res;
                if (this.messageList && this.messageList.length > 0) {
                    this.messageList.forEach(msg => {
                        msg.selected = false;
                    });
                }
            }, err => {
                this.auth.hideLoader();
            });
        }
        editSMS(obj) {
            this.editMsg = true;
            this.addSMS = true;
            this.editObj = obj;
            this.message = obj.message;
        }
        saveMSG() {
            (this.editMsg) ? this.updateSMS() : this.saveSMS();
        }
        saveSMS() {
            let obj = { message: this.message };
            if (this.message != '' && this.message.trim() != '') {
                this.auth.showLoader();
                this.httpService.postData('/api/v1/notification/message/' + sessionStorage.getItem('institute_id'), obj).subscribe((res) => {
                    this.messageNotifier('success', '', 'Message created Successfully');
                    this.auth.hideLoader();
                    this.getAllMessageFromServer();
                }, err => {
                    this.auth.hideLoader();
                });
                this.addSMS = false;
            }
            else {
                this.messageNotifier('error', '', 'Please enter message');
            }
        }
        updateSMS() {
            let obj = { message: this.message };
            if (this.message != '' && this.message.trim() != '') {
                this.auth.showLoader();
                this.httpService.putData('/api/v1/notification/message/' + sessionStorage.getItem('institute_id') + '/' + this.editObj.message_id, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this.messageNotifier('success', '', 'Message updated Successfully');
                    this.getAllMessageFromServer();
                }, err => {
                    this.auth.hideLoader();
                });
                this.addSMS = false;
            }
            else {
                this.messageNotifier('error', '', 'Please enter message');
            }
        }
        ApproveMsg(message_id) {
            if (confirm('Are you sure, You want to approve the message?')) {
                const obj = {
                    status: 1
                };
                this.auth.showLoader();
                this.httpService.putData('/api/v1/notification/message/' + sessionStorage.getItem('institute_id') + '/' + message_id, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this.messageNotifier('success', '', 'Message approved successfully');
                    this.getAllMessageFromServer();
                }, err => {
                    this.auth.hideLoader();
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        DeleteMsg(message_id) {
            if (confirm('Are you sure, You want to delete the message?')) {
                const obj = {
                    status: 400
                };
                this.auth.showLoader();
                this.httpService.putData('/api/v1/notification/message/' + sessionStorage.getItem('institute_id') + '/' + message_id, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this.messageNotifier('success', '', 'Message deleted successfully');
                    this.messageList = this.messageList.filter(msg => msg.message_id != message_id);
                }, err => {
                    this.auth.hideLoader();
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        changeSelectedMsg(obj) {
            this.selectedMsg = obj;
        }
        changeSelectPush(obj) {
            this.selectedPushId = obj.message_id;
            this.selectedPushMesg = obj.message;
            console.log("push id", this.selectedPushId);
        }
        sendNotification() {
            console.log(this.smsNotification, this.pushNotification);
            this.smsNotification ? this.sendSMSNotification() : '';
            this.pushNotification ? this.sendPushNotification() : '';
            if (!this.smsNotification && !this.pushNotification) {
                this.messageNotifier('info', 'Please select Notification type', '');
            }
        }
        // Developed by Nalini
        // Send role to notification api to identify which user type is selected
        checkRole() {
            switch (this.dataFilter.role) {
                case '0': {
                    this.user_role = 'Custom';
                    break;
                }
                case '1': {
                    this.user_role = 'Student';
                    break;
                }
                case '3': {
                    this.user_role = 'Teacher';
                    break;
                }
                case '5': {
                    this.user_role = 'Parent';
                    break;
                }
                case '99': {
                    this.user_role = 'Open User';
                    break;
                }
            }
        }
        sendSMSNotification() {
            if (!this.getNotificationMessage()) {
                return;
            }
            let studentID = this.getListOfIds('user_id');
            let obj = {
                delivery_mode: 0,
                notifn_message: this.selectedMsg.message,
                notifn_subject: "",
                destination: null,
                user_ids: studentID,
                cancel_date: '',
                isEnquiry_notifn: 0,
                isAlumniSMS: 0,
                isTeacherSMS: 0,
                configuredMessage: true,
                message_id: this.selectedMsg.message_id,
                is_user_notify: 1,
                institution_id: sessionStorage.getItem('institute_id'),
                role: this.user_role
            };
            // if (this.transational_type ==2) {
            //   obj.configuredMessage = false;
            // }
            this.auth.showLoader();
            this.httpService.postData('/api/v1/alerts/config', obj).subscribe((res) => {
                this.auth.hideLoader();
                this.messageNotifier('success', '', 'Message sent successfully');
            }, err => {
                this.auth.hideLoader();
            });
            this.closeNotificationPopup();
        }
        closeNotificationPopup() {
            this.notificationPopup = false;
            this.smsNotification = true;
            this.pushNotification = false;
            this.addSMS = false;
            this.smsListFlag = 'active';
        }
        sendPushNotification() {
            let student_id = this.getListOfIds('user_id');
            let user_ids = this.getListOfIds('user_id');
            student_id = student_id.join(',');
            if (!this.getNotificationMessage()) {
                return;
            }
            let obj = {
                notifn_message: this.selectedPushMesg,
                message_id: this.selectedPushId,
                user_ids: user_ids,
                institution_id: sessionStorage.getItem('institute_id')
            };
            this.auth.showLoader();
            this.httpService.postData('/api/v1/pushNotification/send', obj).subscribe((res) => {
                this.auth.hideLoader();
                this.messageNotifier('success', '', 'Message sent successfully');
            }, err => {
                this.auth.hideLoader();
            });
            this.closeNotificationPopup();
        }
        getNotificationMessage() {
            if (this.selectedPushId == '') {
                this.messageNotifier('error', '', 'Please select message');
                return false;
            }
            else {
                return true;
            }
        }
        getListOfIds(key) {
            let id = [];
            for (let t = 0; t < this.usersList.length; t++) {
                if (this.usersList[t].assigned == true) {
                    id.push(this.usersList[t][key]);
                }
            }
            return id;
        }
        //Changing the url it the pageOffset in not equal to 1. If not equal to 1 then add query param totalElementsInTableOne and assign value which get from previous response in total_element_table_one;
        //Added by Ashwini Kumar Gupta 
        getLastLoginDetails(id, index) {
            this.historyUserId = id;
            let url;
            if (index == 1) {
                url = '/api/v1/login/history/' + id + '?pageOffset=' + index;
            }
            else {
                url = '/api/v1/login/history/' + id + '?pageOffset=' + index + '&totalElementsInTableOne=' + this.totalElementsInTableOne;
            }
            this.auth.showLoader();
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.loginHistory = res.result.response;
                if (index == 1) {
                    this.historyTotalRow = res.result.totalElements;
                }
                this.loginHistoryPopup = true;
                this.totalElementsInTableOne = res.result.total_element_table_one;
            }, err => {
                this.auth.hideLoader();
            });
        }
        changeUserAccess(obj) {
            let allow_access = false;
            allow_access = (obj.access_allow == 1) ? false : true;
            let msgType = '';
            msgType = (obj.access_allow == 1) ? 'Block access' : 'Allow Access';
            if (confirm('Are you sure you want to ' + msgType + ' ?')) {
                this.auth.showLoader();
                this.httpService.getData('/api/v1/authenticate/blockUserAccess/' + obj.user_id + '?access=' + allow_access).subscribe((res) => {
                    msgType = (obj.access_allow == 1) ? 'blocked' : 'allowed';
                    this.messageNotifier('success', '', 'Access has been ' + msgType + ' for the user.');
                    this.auth.hideLoader();
                    this.getAllUserList(this.PageIndex);
                }, err => {
                    this.auth.hideLoader();
                });
            }
        }
        clearRegisteredDevices(id) {
            this.auth.showLoader();
            this.httpService.getData('/api/v1/authenticate/clearRegisteredDevices/' + id).subscribe((res) => {
                this.auth.hideLoader();
                this.messageNotifier('success', '', 'Registered device has been cleared!');
                this.getAllUserList(this.PageIndex);
            }, err => {
                this.auth.hideLoader();
            });
        }
        sendLoginCredentials(type) {
            let studentID = this.getListOfIds('user_id');
            let obj = {
                delivery_mode: 0,
                user_ids: studentID,
                configuredMessage: false,
                message_id: this.selectedMsg.message_id,
                is_user_notify: 1,
                institution_id: sessionStorage.getItem('institute_id'),
                app_sms_type: type,
                user_role: 0
            };
            let msgType = '';
            msgType = (type == '4') ? 'Send Login Credentials' : 'Send App Link';
            if (confirm('Are you sure you want to ' + msgType + ' to selected users?')) {
                this.auth.showLoader();
                this.httpService.postData('/api/v1/alerts/config', obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this.messageNotifier('success', '', 'Message sent successfully');
                }, err => {
                    this.auth.hideLoader();
                });
                this.closeNotificationPopup();
            }
        }
        exportToExcel() {
            let arr = this.usersList;
            let Excelarr = [];
            arr.map((ele) => {
                let json = {};
                this.tableSetting.keys.map((keys) => {
                    json[keys.header] = ele[keys.primaryKey];
                });
                Excelarr.push(json);
            });
            this.excelService.exportAsExcelFile(Excelarr, 'User');
        }
        updateTableBatchSize(event) {
            this.displayBatchSize = event;
            this.fetchTableDataByPage(this.PageIndex, 'user');
        }
        onPushCheckboxSelect() {
            this.smsNotification = false;
            this.pushNotification = true;
            this.smsListFlag = 'notactive';
        }
        onSmsCheckboxSelect() {
            this.pushNotification = false;
            this.smsListFlag = 'active';
            this.smsNotification = true;
        }
    };
    UsersComponent.ctorParameters = () => [
        { type: _services_user_management_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"] }
    ];
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __importDefault(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/users/users.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./users.component.scss */ "./src/app/components/users-management/users/users.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_user_management_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"]])
    ], UsersComponent);
    return UsersComponent;
})();



/***/ }),

/***/ "./src/app/components/users-management/users/users.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users-management/users/users.module.ts ***!
  \*******************************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/components/users-management/users/users.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _users_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.routing */ "./src/app/components/users-management/users/users.routing.ts");
/* harmony import */ var _services_user_management_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user-management/user.service */ "./src/app/services/user-management/user.service.ts");
/* harmony import */ var _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-edit-user/add-edit-user.component */ "./src/app/components/users-management/users/add-edit-user/add-edit-user.component.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';





let UserModule = /** @class */ (() => {
    let UserModule = class UserModule {
    };
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
                _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_7__["AddEditUserComponent"],
            ],
            exports: [],
            imports: [
                // BsDatepickerModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _users_routing__WEBPACK_IMPORTED_MODULE_5__["UserRouting"]
            ],
            providers: [
                _services_user_management_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
                _services_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelService"]
            ]
        })
    ], UserModule);
    return UserModule;
})();



/***/ }),

/***/ "./src/app/components/users-management/users/users.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/users-management/users/users.routing.ts ***!
  \********************************************************************/
/*! exports provided: UserRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRouting", function() { return UserRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/components/users-management/users/users.component.ts");
/* harmony import */ var _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-user/add-edit-user.component */ "./src/app/components/users-management/users/add-edit-user/add-edit-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let UserRouting = /** @class */ (() => {
    let UserRouting = class UserRouting {
    };
    UserRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"],
                        pathMatch: 'prefix',
                    },
                    {
                        path: 'addedit',
                        component: _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_3__["AddEditUserComponent"]
                    },
                    {
                        path: 'addedit/:id',
                        component: _add_edit_user_add_edit_user_component__WEBPACK_IMPORTED_MODULE_3__["AddEditUserComponent"]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], UserRouting);
    return UserRouting;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-users-management-users-users-module-es2015.js.map