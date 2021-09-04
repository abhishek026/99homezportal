(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-course-module-reports-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/attendance-report/attendanceReport.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/attendance-report/attendanceReport.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clear-fix\" style=\"padding-right: 2%;\">\n    <aside class=\"middle-full\">\n        <section class=\"middle-main clearFix attendance-container\">\n\n            <section class=\"middle-top mb0 clearFix sms-header\">\n                <h2 class=\"pull-left\">\n                   <!-- <a routerLink=\"/view/course\" *ngIf=\"!isProfessional\">\n                        Course\n                    </a>-->\n                    <!-- <a routerLink=\"/view/batch\" *ngIf=\"isProfessional\">\n                        Batch\n                    </a> -->\n                    <i style=\"font-family: 'FontAwesome';\" class=\"\"></i>\n                    <a routerLink=\"/view/reports/list\">\n                        Reports\n                    </a>\n                    <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> Attendance Report\n                </h2>\n                <aside class=\"pull-right\">\n                </aside>\n            </section>\n\n            <section class=\"filter-form\">\n                <div class=\"row\">\n\n                    <!-- Master Course / Standard  -->\n                    <div class=\"c-lg-4\">\n                        <div class=\"form-wrapper\" *ngIf=!isProfessional>\n                            <!-- changes by Nalini - to handle school model conditions -->\n                            <label>{{schoolModel ? 'Standard' : 'Master Course'}}</label>\n                            <select class=\"side-form-ctrl\" [(ngModel)]=\"attendanceFetchForm.master_course_name\" (ngModelChange)=\"getCourseData($event)\"\n                                name=\"masterCourse\">\n                                <option value=-1></option>\n                                <option *ngFor=\"let i of masterCourses\" [value]=\"i\">{{i}}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-wrapper\" *ngIf=isProfessional>\n                            <label>Master Course</label>\n                            <select class=\"side-form-ctrl\" [(ngModel)]=\"queryParams.standard_id\"\n                                (ngModelChange)=\"getCourseData($event)\" name=\"masterCourse\">\n                                <option value=-1></option>\n                                <option *ngFor=\"let i of masterCoursePro\" [value]=\"i.standard_id\">{{i.standard_name}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <!-- Standard/ Subject -->\n                    <div class=\"c-lg-4\">\n                        <div class=\"form-wrapper\" *ngIf=!isProfessional>\n                            <label> {{schoolModel ? 'Section' : 'Course'}}</label>\n                            <select class=\"side-form-ctrl\" [(ngModel)]=\"attendanceFetchForm.course_id\" (ngModelChange)=\"getSubjectData($event)\">\n                                <option value=-1></option>\n                                <option *ngFor=\"let i of courses\" [value]=\"i.course_id\" name=\"subjectCourse\">\n                                    {{i.course_name}}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-wrapper\" *ngIf=\"isProfessional\">\n                            <label> Course</label>\n\n                            <select class=\"side-form-ctrl\" [(ngModel)]=\"queryParams.subject_id\"\n                                (ngModelChange)=\"getSubjectData($event)\">\n                                <option value=-1></option>\n                                <option *ngFor=\"let i of subjectPro\" [value]=\"i.subject_id\" name=\"subjectCourse\">\n                                    {{i.subject_name}}</option>\n                            </select>\n                        </div>\n\n                    </div>\n\n                    <div class=\"c-lg-4\">\n                        <div class=\"form-wrapper\" *ngIf=!isProfessional>\n                            <label>Subject</label>\n                            <select class=\"side-form-ctrl\" [(ngModel)]=\"attendanceFetchForm.batch_id\"\n                                (ngModelChange)=\"getBatchData($event)\">\n                                <option value=-1></option>\n                                <option *ngFor=\"let i of batchCourses\" [value]=\"i.batch_id\" name=\"batchCourse\">\n                                    {{i.batch_name}}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-wrapper\" *ngIf=isProfessional>\n                            <label>Batch Name</label>\n                            <select class=\"side-form-ctrl\" [(ngModel)]=\"queryParams.batch_id\"\n                                (ngModelChange)=\"isShowDownloadReport()\">\n                                <option value=-1></option>\n                                <option *ngFor=\"let i of batchPro\" [value]=\"i.batch_id\" name=\"batchCourse\">\n                                    {{i.batch_name}}</option>\n                            </select>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"c-lg-4\">\n                        <div class=\"form-date form-wrapper datePickerBox\" *ngIf=\"!isProfessional\">\n                            <label>From date</label>\n                            <input type=\"text\" class=\"side-form-ctrl  bsDatepicker\"\n                                [(ngModel)]=\"attendanceFetchForm.from_date\" (ngModelChange)=\"futureDateValid($event)\"\n                                bsDatepicker />\n                            <i style=\"float:right; color:blue;\" (click)=\"clearFromDate()\" class=\"showCursor\">Clear</i>\n                        </div>\n\n                        <div class=\"form-date form-wrapper datePickerBox\" *ngIf=\"isProfessional\">\n                            <label>From date</label>\n                            <input type=\"text\" class=\"side-form-ctrl  bsDatepicker\" [(ngModel)]=\"queryParams.from_date\"\n                                (ngModelChange)=\"futureDateValid($event)\" bsDatepicker />\n                            <i style=\"float:right; color:blue;\" (click)=\"clearFromDate()\" class=\"showCursor\">Clear</i>\n                        </div>\n                    </div>\n\n                    <div class=\"c-lg-4\">\n                        <div class=\"form-date form-wrapper datePickerBox\" *ngIf=\"!isProfessional\">\n                            <label>To date</label>\n                            <input type=\"text\" class=\"side-form-ctrl  bsDatepicker\"\n                                [(ngModel)]=\"attendanceFetchForm.to_date\" (ngModelChange)=\"futureDateValid($event)\"\n                                bsDatepicker />\n                            <i style=\"float:right;  color:blue;\" (click)=\"clearToDate()\" class=\"showCursor\">Clear</i>\n                        </div>\n\n                        <div class=\"form-date form-wrapper datePickerBox\" *ngIf=\"isProfessional\">\n                            <label>To date</label>\n                            <input type=\"text\" class=\"side-form-ctrl  bsDatepicker\" [(ngModel)]=\"queryParams.to_date\"\n                                (ngModelChange)=\"futureDateValid($event)\" bsDatepicker />\n                            <i style=\"float:right;  color:blue;\" (click)=\"clearToDate()\" class=\"showCursor\">Clear</i>\n                        </div>\n                    </div>\n                    <div class=\"c-lg-4 inner-main\">\n                        <div class=\"form-btn\">\n                            <div *ngIf=\"!isProfessional\">\n                                <div class=\"c-lg-6 inner-btn\">\n                                    <button class=\"btn fullBlue\" (click)=\"getPostData()\">Go</button>\n                                </div>\n                            </div>\n                            <div *ngIf=\"isProfessional\">\n                                <div class=\"c-lg-6 inner-btn\">\n                                    <button class=\"btn fullBlue\" (click)=\"getPostData()\">Go</button>\n                                </div>\n                            </div>\n                            <div *ngIf=\"isProfessional\">\n                                <div class=\"c-lg-6 outer-btn\">\n                                    <button class=\"btn fullBlue\" (click)=\"postDetails()\">Detail Report</button>\n                                </div>\n                            </div>\n                            <div *ngIf=\"!isProfessional\">\n                                <div class=\"c-lg-6 outer-btn\">\n                                    <button class=\"btn fullBlue\" (click)=\"postDetails()\">Detail Report</button>\n                                </div>\n                            </div>                            \n                            <div *ngIf=\"showDownloadReport\">\n                                <div class=\"c-lg-6 outer-btn\" style=\"padding-right: 0;\">\n                                    <button class=\"btn fullBlue\" (click)=\"downloadReport()\"\n                                        style=\"background: #fff;color: #0084f6;\"><i class=\"fa fa-download\"> </i>\n                                        PDF</button>\n                                    <a id=\"downloadFileClick\"></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n            </section>\n\n            <div class=\"table-body\" *ngIf=\"SummaryReports\">\n                <div class=\"filter-box clearFix\" *ngIf=\"isProfessional\">\n                    <div id=\"basic-search\" class=\"search-filter-wrapper\">\n                        <input #search type=\"text\" class=\"search-field\" placeholder=\"Search\" [(ngModel)]=\"searchText\"\n                            name=\"searchData\" (keyup)=\"searchDatabase()\">\n                    </div>\n                </div>\n                <div class=\"filter-box clearFix\" *ngIf=\"!isProfessional\">\n                    <div id=\"basic-search\" class=\"search-filter-wrapper\">\n                        <input #search type=\"text\" class=\"search-field\" placeholder=\"Search\" [(ngModel)]=\"searchText\"\n                            name=\"searchData\" (keyup)=\"searchDatabase()\">\n                    </div>\n                </div>\n                <div class=\"table-content\">\n                    <div class=\"table-heading\">\n                        <div *ngIf=!isProfessional>\n                            <proctur-table [records]=\"pagedPostData\" (sortData)=\"sortedData($event)\" [tableName]=\"'sms'\"\n                                [settings]=\"projectSettings\" [dataStatus]=\"dataStatus\" [sortingEnabled]=\"sortingEnabled\"\n                                [columnMap]=\"columnMaps\" [dummyArr]=\"dummyArr\" [direction]=\"direction\"\n                                [loaderState]=\"auth.isRippleLoad.getValue()\">\n                            </proctur-table>\n                        </div>\n                        <div *ngIf=isProfessional>\n                            <proctur-table [records]=\"pagedPostDataPro\" [tableName]=\"'sms'\" [settings]=\"projectSettings\"\n                                [dataStatus]=\"dataStatus\" [columnMap]=\"columnMaps\" (sortData)=\"sortedData($event)\"\n                                [dummyArr]=\"dummyArr\" [direction]=\"direction\" [sortingEnabled]=\"sortingEnabled\"\n                                [loaderState]=\"auth.isRippleLoad.getValue()\">\n                            </proctur-table>\n\n                        </div>\n                    </div>\n                    <!-- Paginator Here -->\n                    <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n                        <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                            <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\"\n                                (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\" [page]=\"PageIndex\"\n                                [perPage]=\"pagedisplaysize\" [count]=\"totalRow\">\n                            </pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </section>\n    </aside>\n\n\n\n    <proctur-popup [sizeWidth]=\"'large'\" *ngIf=\"addReportPopUp\">\n\n        <span class=\"closePopup pos-abs fbold show\" (click)=\"closeReportPopup()\" close-button>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n                <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n                    <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n                        <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                            transform=\"translate(992.81 305.77) rotate(45)\" />\n                        <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                            transform=\"translate(978.81 305.77) rotate(45)\" />\n                    </g>\n                    <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\"\n                        height=\"16\" transform=\"translate(1012 297)\" />\n                </g>\n            </svg>\n        </span>\n\n        <div popup-header class=\"popup-header-content\" *ngIf=!isProfessional>\n            <h2>Date Wise Attendance Report</h2>\n            <h5>({{attendanceIndex0.class_date}} to {{attendanceIndexiOf.class_date}})</h5>\n        </div>\n        <div popup-header class=\"popup-header-content\" *ngIf=isProfessional>\n            <h2>Date Wise Attendance Report</h2>\n            <h5>({{attendanceIndex0Pro.class_date}} to {{attendanceIndexiOfPro.class_date}})</h5>\n        </div>\n        <div popup-content class=\"main-student-table\" *ngIf=!isProfessional>\n            <a class=\"fa fa-file-excel-o\" style=\"font-size:30px; padding-bottom:10px; float:right;display:inline-block;\"\n                (click)=\"DownloadJsonToCsv()\"></a>\n            <a class=\"hide\" #xlsDownloader></a>\n\n            <div class=\"table table-responsive student-table madeAttendance\">\n                <table>\n                    <thead>\n                        <tr>\n                            <th>\n                                ID\n                            </th>\n                            <th>\n                                Name\n                            </th>\n                            <th *ngFor=\"let k of typeAttendance\">\n                                <div>\n                                    {{k.class_date | date:\"dd MMM\"}}\n                                    <br>\n                                    <span *ngIf=\"k.start_date != null || k.end_time != null\" class=\"madeDate\">\n                                        {{k.start_time}} - {{k.end_time}}\n                                    </span>\n                                    <br>\n                                </div>\n                            </th>\n                            <th>\n                                Present\n                            </th>\n\n                            <th>\n                                Absent\n                            </th>\n                            <th>\n                                Leave\n                            </th>\n\n                            <th>\n                                Percentage\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"pageDetailedData.length != 0\">\n\n                        <tr *ngFor=\"let i of pageDetailedData; let j=index\">\n\n                            <td>\n                                {{i.student_disp_id}}\n\n                            </td>\n                            <td>\n                                {{i.student_name}}\n\n                            </td>\n\n                            <td *ngFor=\"let k of i.attendanceDateType\" [style.color]=\"getColor(k.status)\">\n                                {{k.status}}\n                            </td>\n                            <td>\n                                {{i.total_attended}}\n                            </td>\n                            <td style=\"color:red;\">\n                                {{i.total_absent}}\n                            </td>\n                            <td style=\"color:blue;\">\n                                {{i.total_leave}}\n                            </td>\n                            <td style=\"color:blue;\">\n                                {{i.spent_percentage}}%\n                            </td>\n                        </tr>\n\n                    </tbody>\n                    <tbody *ngIf=\"pageDetailedData.length == 0 && dataStatus === false\" class=\"records\">\n                        <tr>\n                            <td colspan=\"7\" class=\"records\">\n                                No Records Found\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\"pageDetailedData.length == 0 && dataStatus === true\">\n                        <tr *ngFor=\"let dummy of dummyArr\">\n                            <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n                                <div class=\"skeleton\">\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"table table-responsive student-table\" class=\"hide\">\n                <table #attendanceTable>\n                    <thead>\n                        <tr>\n                            <th>\n                                ID\n                            </th>\n                            <th>\n                                Name\n                            </th>\n                            <th *ngFor=\"let k of typeAttendance\">\n                                <div>\n                                    {{k.class_date | date:\"dd MMM\"}}\n                                    <br>\n                                    <span *ngIf=\"k.start_date != null || k.end_time != null\">\n                                        {{k.start_time}} - {{k.end_time}}\n                                    </span>\n                                    <br>\n                                </div>\n                            </th>\n                            <th>\n                                Present\n                            </th>\n\n                            <th>\n                                Absent\n                            </th>\n                            <th>\n                                Leave\n                            </th>\n\n                            <th>\n                                Percentage\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <tr *ngFor=\"let i of dateWiseAttendance; let j=index\">\n\n                            <td>\n                                {{i.student_disp_id}}\n\n                            </td>\n                            <td>\n                                {{i.student_name}}\n\n                            </td>\n\n                            <td *ngFor=\"let k of i.attendanceDateType\" [style.color]=\"getColor(k.status)\">\n                                {{k.status}}\n                            </td>\n                            <td>\n                                {{i.total_attended}}\n                            </td>\n                            <td style=\"color:red;\">\n                                {{i.total_absent}}\n                            </td>\n                            <td style=\"color:blue;\">\n                                {{i.total_leave}}\n                            </td>\n                            <td style=\"color:blue;\">\n                                {{i.spent_percentage}}%\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"dateWiseAttendance.length == 0\" class=\"records\">\n                            <td colspan=\"7\" class=\"records\">\n                                No Records Found\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"row filter-res pagination\" style=\"width: 100%;\" *ngIf=!isProfessional>\n                <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                    <pagination (goPage)=\"fetchTableDataByPagePopup($event)\" (goNext)=\"fetchNextPopupRange()\"\n                        (goPrev)=\"fetchPreviousPopup()\" [pagesToShow]=\"10\" [page]=\"PageIndexPopup\"\n                        [perPage]=\"pagedisplaysizePopup\" [count]=\"totalRowPopup\">\n                    </pagination>\n                </div>\n            </div>\n        </div>\n\n        <div popup-content class=\"main-student-table\" *ngIf=isProfessional>\n            <a class=\"fa fa-file-excel-o\" style=\"font-size:30px; padding-bottom:10px; float:right;display:inline-block;\"\n                (click)=\"DownloadJsonToCsv()\"></a>\n            <a class=\"hide\" #xlsDownloader></a>\n\n            <div class=\"table table-responsive student-table madeAttendance\">\n                <table>\n                    <thead>\n                        <tr>\n                            <th>\n                                ID\n                            </th>\n                            <th>\n                                Name\n                            </th>\n                            <th *ngFor=\"let k of typeAttendancePro\">\n                                <div>\n                                    {{k.class_date | date:\"dd MMM\"}}\n                                    <br>\n                                    <span *ngIf=\"k.start_date != null || k.end_time != null\" class=\"madeDate\">\n                                        {{k.start_time}} - {{k.end_time}}\n                                    </span>\n                                    <br>\n                                </div>\n                            </th>\n                            <th>\n                                Total Present\n                            </th>\n\n                            <th>\n                                Total absent\n                            </th>\n                            <th>\n                                Total leave\n                            </th>\n\n                            <th>\n                                Percentage\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <tr *ngFor=\"let i of pageDetailedDataPro; let j=index\">\n                            <td>\n                                {{i.student_disp_id}}\n                            </td>\n                            <td>\n                                {{i.student_name}}\n                            </td>\n                            <td *ngFor=\"let k of i.attendanceDateType\" [style.color]=\"getColor(k.status)\">\n                                {{k.status}}\n                            </td>\n                            <td>\n                                {{i.total_attended}}\n                            </td>\n                            <td style=\"color:red;\">\n                                {{i.total_absent}}\n                            </td>\n                            <td style=\"color:blue;\">\n                                {{i.total_leave}}\n                            </td>\n\n                            <td style=\"color:blue;\">\n                                {{i.spent_percentage}}%\n                            </td>\n                        </tr>\n\n                    </tbody>\n                    <tbody *ngIf=\"pageDetailedDataPro.length == 0 && dataStatus === false\" class=\"records\">\n                        <tr>\n                            <td colspan=\"7\" class=\"records\">\n                                No Records Found\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\"pageDetailedDataPro.length == 0 && dataStatus === true\">\n                        <tr *ngFor=\"let dummy of dummyArr\">\n                            <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n                                <div class=\"skeleton\">\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"table table-responsive student-table madeAttendance\" class=\"hide\">\n                <table #attendanceTable>\n                    <thead>\n                        <tr>\n                            <th>\n                                ID\n                            </th>\n                            <th>\n                                Name\n                            </th>\n                            <th *ngFor=\"let k of typeAttendancePro\">\n                                <div>\n                                    {{k.class_date | date:\"dd MMM\"}}\n                                    <br>\n                                    <span *ngIf=\"k.start_date != null || k.end_time != null\" class=\"madeDate\">\n                                        {{k.start_time}} - {{k.end_time}}\n                                    </span>\n                                </div>\n                            </th>\n                            <th>\n                                Total Present\n                            </th>\n\n                            <th>\n                                Total absent\n                            </th>\n                            <th>\n                                Total leave\n                            </th>\n\n                            <th>\n                                Percentage\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <tr *ngFor=\"let i of dateWiseAttendancePro; let j=index\">\n                            <td>\n                                {{i.student_disp_id}}\n                            </td>\n                            <td>\n                                {{i.student_name}}\n                            </td>\n                            <td *ngFor=\"let k of i.attendanceDateType\" [style.color]=\"getColor(k.status)\">\n                                {{k.status}}\n                            </td>\n                            <td>\n                                {{i.total_attended}}\n                            </td>\n                            <td style=\"color:red;\">\n                                {{i.total_absent}}\n                            </td>\n                            <td style=\"color:blue;\">\n                                {{i.total_leave}}\n                            </td>\n\n                            <td style=\"color:blue;\">\n                                {{i.spent_percentage}}%\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"dateWiseAttendancePro.length == 0\">\n                            <td class=\"records\" colspan=\"7\">\n                                No Records Found\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"row filter-res pagination\" style=\"width: 100%;\" *ngIf=isProfessional>\n                <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                    <pagination (goPage)=\"fetchTableDataByPagePopup($event)\" (goNext)=\"fetchNextPopupRange()\"\n                        (goPrev)=\"fetchPreviousPopup()\" [pagesToShow]=\"10\" [page]=\"PageIndexPopup\"\n                        [perPage]=\"pagedisplaysizePopup\" [count]=\"totalRowPopup\">\n                    </pagination>\n                </div>\n            </div>\n\n        </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/biometric/biometric.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/biometric/biometric.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clear-fix background\" style=\"padding-right: 2%;\">\n  <aside class=\"middle-full\">\n    <section class=\"middle-main clearFix\">\n\n      <section class=\"middle-top mb0 clearFix sms-header\">\n        <h2 class=\"pull-left\">\n         <!-- <a routerLink=\"/view/course\">\n            Course\n          </a>-->\n         <!--<i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>-->\n          <a routerLink=\"/view/reports/list\">\n            Reports\n          </a>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> Biometric Reports\n        </h2>\n        <div class=\"c-lg-2\" *ngIf=\"showButton\" style=\"float:right;\">\n          <button class=\"btn btn-sm fullBlue\" (click)=\"fetchAbsentiesReport()\">Send SMS to Absenties</button>\n        </div>\n        <aside class=\"pull-right\">\n        </aside>\n        <section class=\"filter-form \">\n\n          <div class=\"filterSectionWrapper\">\n\n            <div class=\"row\" *ngIf=\"showNameFilter\" style=\"margin-left: 0;margin-right: 0;\">\n              <div class=\"c-lg-12\" style=\"padding-left: 0; padding-right: 0;\">\n                <div class=\"c-lg-9\" style=\"padding-left: 0; padding-right: 0;\">\n                  <div class=\"c-lg-12\" style=\"padding-left: 0; padding-right: 0;\">\n                    <div class=\"c-lg-4\" style=\"padding-left: 0; padding-right: 0;\">\n                      <div class=\"field-wrapper\" style=\"padding-left:none; margin-left:none\">\n                        <label>Role</label>\n                        <select class=\"form-ctrl\" [(ngModel)]=\"getData.user_Type\" (ngModelChange)=\"showMaster($event)\">\n                          <option selected [value]=\"1\">Students</option>\n                          <option [value]=\"3\">Teacher</option>\n                          <option [value]=\"0\">Custom</option>\n                          <option [value]=\"1000\">Others</option>\n                          <option [value]=\"100\">Admin</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"c-lg-4 dateBox\">\n                      <div class=\"field-wrapper datePickerBox\">\n                        <label> Select Date</label>\n                        <input type=\"text\" class=\"form-ctrl bsDatepicker\" bsDatepicker\n                          [(ngModel)]=\"getData.biometric_attendance_date\"\n                          (ngModelChange)=\"dateValidationForFuture($event)\">\n                      </div>\n                    </div>\n                    <div class=\"c-lg-4 field-wrapper\">\n                      <label> Name</label>\n                      <input type=\"text\" placeholder=\"Name\" class=\"form-ctrl\" (change)=\"courseEmpty()\"\n                        [(ngModel)]=\"getData.name\" [value]=\"getData.is_active_status\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"c-lg-1\">\n                  <button class=\"btn fullBlue\" (click)=\"fetchDataByName()\" style=\"margin-top: 27px;\">GO</button>\n                </div>\n                <div class=\"c-lg-2 form\" style=\"margin-top: 3%\" (click)=\"switchFilter()\" *ngIf=\"showCourseFilter\">\n                  <a *ngIf=\"!isProfessional\">Show {{schoolModel ? 'Section' : 'Course'}} Filter</a>\n                  <a *ngIf=\"isProfessional\">Show Batch Filter</a>\n                </div>\n              </div>\n\n\n            </div>\n\n            <div class=\"row\" *ngIf=\"masterCourseNames\" style=\"margin-right: 0;margin-right: 0;\">\n              <div class=\"c-lg-12\">\n                <div class=\"c-lg-3\" style=\"padding-left: 0px;\" *ngIf=\"masterCourseNames  && !isProfessional\">\n                  <div class=\"field-wrapper\">\n                    <!--changes by Nalini - to handle school model conditions  -->\n                    <label>{{schoolModel ? 'Standard' : 'Master Course'}}</label>\n                    <select class=\"form-ctrl\" [(ngModel)]=\"getData.master_course_name\" (ngModelChange)=\"getCourses($event)\">\n                      <option value=\"-1\"></option>\n                      <option *ngFor=\"let i of masterCourse\" [value]=\"i\">\n                        {{i}}\n                      </option>\n                    </select>\n\n                  </div>\n                </div>\n                <div class=\"c-lg-3\" style=\"padding-left:5px;\" *ngIf=\"masterCourseNames  && !isProfessional\">\n                  <div class=\"field-wrapper\">\n                    <label> {{schoolModel ? 'Section' : 'Course'}}</label>\n                    <select class=\"form-ctrl\" (click)=\"courseChange()\" [(ngModel)]=\"getData.course_id\">\n                      <option value=\"-1\"></option>\n                      <option *ngFor=\"let i of courses\" [value]=\"i.course_id\">\n                        {{i.course_name}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"c-lg-3\" style=\"margin-left:15px;\" *ngIf=\"masterCourseNames && isProfessional\">\n                  <div class=\"field-wrapper\">\n                    <label>Master Course</label>\n                    <select class=\"form-ctrl\" [(ngModel)]=\"getData.standard_id\" (ngModelChange)=\"getCourses($event)\">\n                      <option value=\"-1\"></option>\n                      <option *ngFor=\"let i of masterCoursePro\" [value]=\"i.standard_id\">\n                        {{i.standard_name}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"c-lg-3\" style=\"padding-left:5px;\" *ngIf=\"masterCourseNames && isProfessional\">\n                  <div class=\"field-wrapper\">\n                    <label> Course</label>\n                    <select class=\"form-ctrl\" (click)=\"courseChange()\" [(ngModel)]=\"getData.subject_id\">\n                      <option value=\"-1\"></option>\n                      <option *ngFor=\"let i of coursePro\" [value]=\"i.subject_id\">\n                        {{i.subject_name}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"c-lg-3\" style=\"padding-left:5px;\" *ngIf=\"masterCourseNames && isProfessional\">\n                  <div class=\"field-wrapper\">\n                    <label>Batch</label>\n                    <select class=\"form-ctrl\" [(ngModel)]=\"getData.batch_id\">\n                      <option value=\"-1\"></option>\n                      <option *ngFor=\"let i of batchPro\" [value]=\"i.batch_id\">\n                        {{i.batch_name}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <button class=\"btn fullBlue\" (click)=\"fetchDataByName()\"\n                  style=\"display: inline-block; margin-top: 26px;\" *ngIf=\"isProfessional\">GO</button>\n                <button class=\"btn fullBlue\" (click)=\"fetchDataByName()\"\n                  style=\"display: inline-block; margin-top: 26px;\" *ngIf=\"!isProfessional\">GO</button>\n                <a (click)=\"showNameWiseFilter()\" style=\"float: right;\n                margin-top: 3%;\n                margin-right: 1%; display: inline-block;\" class=\"form\">Show Name Filter\n                </a>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"common-field\" *ngIf=\"showTeachersTable\">\n\n            <div class=\"table table-responsive student-table\">\n              <div class=\"filter-box\">\n                <div id=\"basic-search\">\n                  <input #search type=\"text\" class=\"search-field searchName\" placeholder=\"Search\"\n                    [(ngModel)]=\"searchText\" name=\"searchData\" (keyup)=\"searchDatabase()\"\n                    style=\"padding:7px 10px; width:200px; height:35px;\">\n                </div>\n              </div>\n              <div class=\"common-elements\">\n                <table>\n                  <thead>\n                    <tr>\n                      <th (click)=\"sortedData('teacher_id') \">\n                        Teacher id &nbsp;\n                        <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('teacher_id') && direction == 1\"></i>\n                        <i class=\"fa fa-caret-down caret\" *ngIf=\"getCaretVisiblity('teacher_id') && direction != 1\"></i>\n                      </th>\n                      <th (click)=\"sortedData('teacher_name') \">\n                        Teacher Name &nbsp;\n                        <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('teacher_name') && direction == 1\"></i>\n                        <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('teacher_name') && direction != 1\"></i>\n                      </th>\n                      <th (click)=\"sortedData('teacher_phone') \">\n                        Mobile &nbsp;\n                        <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('teacher_phone') && direction == 1\"></i>\n                        <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('teacher_phone') && direction != 1\"></i>\n                      </th>\n                      <th>\n                        Is active\n                      </th>\n                      <th>\n                        In time\n                      </th>\n                      <th>\n                        Out Time\n                      </th>\n                      <th>\n                        View Older Records\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"studentsDisplayData.length != 0 \">\n\n                    <tr *ngFor=\"let i of studentsDisplayData\">\n                      <td>\n                        {{i.teacher_id}}\n                      </td>\n                      <td>\n                        {{i.teacher_name}}\n                      </td>\n                      <td>\n                        {{i.teacher_phone}}\n                      </td>\n\n                      <td>\n\n                        {{i.is_active}}\n                      </td>\n                      <td>\n                        {{i.in_time}}\n                      </td>\n                      <td>\n                        {{out_time}}\n                      </td>\n                      <td>\n                        <button class=\"btn fullBlue btnStudent\" (click)=\"viewOlderRecords(i)\">View</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"studentsDisplayData.length == 0 && dataStatus === true\">\n                    <tr *ngFor=\"let dummy of dummyArr\">\n                      <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n                        <div class=\"skeleton\">\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"studentsDisplayData.length == 0 && dataStatus === false\" class=\"records\">\n                    <tr>\n                      <td colspan=\"7\" class=\"records\">\n                        No Records Found\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <!-- Paginator Here -->\n            <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n              <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n                  [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"pagedisplaysize\" [count]=\"totalRow\">\n                </pagination>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"students\" *ngIf=\"showStudentTable\">\n            <div class=\"table table-responsive student-table\">\n              <div class=\"filter-box\">\n                <div id=\"basic-search\">\n                  <input #search type=\"text\" class=\"search-field searchName\" placeholder=\"Search\"\n                    [(ngModel)]=\"searchText\" name=\"searchData\" (keyup)=\"searchDatabase()\">\n                </div>\n              </div>\n              <div class=\"student-elements\">\n                <table>\n                  <thead>\n                    <tr>\n                      <th (click)=\"sortedData('student_disp_id') \">\n\n                        Student Id &nbsp;\n                        <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('student_disp_id') && direction == 1\"></i>\n                        <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('student_disp_id') && direction != 1\"></i>\n                      </th>\n                      <th (click)=\"sortedData('student_name')\">\n\n                        Student Name &nbsp;\n                        <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('student_name') && direction == 1 \"></i>\n                        <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('student_name') && direction != 1 \"></i>\n                      </th>\n                      <th (click)=\"sortedData('student_phone')\">\n\n                        Mobile &nbsp;\n                        <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('student_phone') && direction == 1  \"></i>\n                        <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('student_phone') && direction != 1\"></i>\n                      </th>\n                      <th>\n                        Is active\n                      </th>\n                      <th>\n                        In time\n                      </th>\n                      <th>\n                        Out time\n                      </th>\n                      <th>\n                        View Older Records\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"studentsDisplayData.length != 0 \">\n\n                    <tr *ngFor=\"let i of studentsDisplayData\">\n                      <td>\n                        {{i.student_disp_id}}\n                      </td>\n                      <td>\n                        {{i.student_name}}\n                      </td>\n                      <td>\n                        {{i.student_phone}}\n                      </td>\n\n                      <td>\n                        {{i.is_active}}\n                      </td>\n                      <td>\n                        {{i.in_time}}\n                      </td>\n                      <td>\n                        {{i.out_time}}\n                      </td>\n                      <td>\n                        <button class=\"btn fullBlue btnStudent\" (click)=\"viewOlderRecords(i)\">View</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"studentsDisplayData.length == 0 && dataStatus === true\">\n                    <tr *ngFor=\"let dummy of dummyArr\">\n                      <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n                        <div class=\"skeleton\">\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"studentsDisplayData.length == 0 && dataStatus === false\" class=\"records\">\n                    <tr>\n                      <td colspan=\"7\" class=\"records\">\n                        No Records Found\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <!-- Paginator Here -->\n            <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n              <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n                  [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"pagedisplaysize\" [count]=\"totalRow\">\n                </pagination>\n              </div>\n            </div>\n          </div>\n          <div class=\"common-field\" *ngIf=\"showCustomTable\">\n            <div class=\"table table-responsive student-table\">\n              <div class=\"filter-box box\">\n                <div id=\"basic-search\">\n                  <input #search type=\"text\" class=\"search-field searchName\" placeholder=\"Search\"\n                    [(ngModel)]=\"searchText\" name=\"searchData\" (keyup)=\"searchDatabase()\">\n                </div>\n              </div>\n              <div class=\"common-elements\">\n                <table>\n                  <thead>\n                    <tr>\n                      <th (click)=\"sortedData('userid') \">\n                        Id &nbsp;\n                        <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('userid') && direction == 1\"></i>\n                        <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('userid') && direction != 1\"></i>\n                      </th>\n                      <th (click)=\"sortedData('name') \">\n                        Name &nbsp;\n                        <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('name') && direction == 1\"></i>\n                        <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('name') && direction != 1\"></i>\n                      </th>\n                      <th (click)=\"sortedData('username') \">\n                        Contact No. &nbsp;\n                        <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('username') && direction == 1\"></i>\n                        <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('username') && direction != 1\"></i>\n                      </th>\n                      <th>\n                        Is active\n                      </th>\n                      <th>\n                        In time\n                      </th>\n                      <th>\n                        Out Time\n                      </th>\n                      <th>\n                        View Older Records\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"studentsDisplayData.length != 0 \">\n\n                    <tr *ngFor=\"let i of studentsDisplayData\">\n                      <td>\n                        {{i.userid}}\n                      </td>\n                      <td>\n                        {{i.name}}\n                      </td>\n                      <td>\n                        {{i.username}}\n                      </td>\n\n                      <td>\n                        {{i.is_active}}\n                      </td>\n                      <td>\n                        {{i.in_time}}\n                      </td>\n                      <td>\n                        {{i.out_time}}\n                      </td>\n                      <td>\n                        <button class=\"btn fullBlue btnStudent\" (click)=\"viewOlderRecords(i)\">View</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"studentsDisplayData.length == 0 && dataStatus == true\">\n                    <tr *ngFor=\"let dummy of dummyArr\">\n                      <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n                        <div class=\"skeleton\">\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"studentsDisplayData.length == 0 && dataStatus == false\" class=\"records\">\n                    <tr>\n                      <td colspan=\"7\" class=\"records\">\n                        No Records Found\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <!-- Paginator Here -->\n            <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n              <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n                  [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"pagedisplaysize\" [count]=\"totalRow\">\n                </pagination>\n              </div>\n            </div>\n          </div>\n\n\n          <proctur-popup [sizeWidth]=\"'medium'\" *ngIf=\"addReportPopUp\">\n            <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeReportPopup()\" close-button>\n              <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n                viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n                <path class=\"large-icon\"\n                  d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n                  style=\"fill: currentColor\"></path>\n              </svg>\n            </span>\n\n            <div popup-header class=\"popup-header-content\">\n            </div>\n            <div popup-content class=\"main-student-table\">\n              <div class=\"row\" style=\" text-align: left;\">\n                <div class=\"c-lg-3\">\n                  <div class=\"form-field field-wrapper\">\n                    <label>Select Filter</label>\n                    <select class=\"form-ctrl\" [(ngModel)]=\"popupCtrl\" (ngModelChange)=\"getPopupEvent($event)\">\n                      <option value=\"-1\" hidden>Select Filter</option>\n                      <option [value]=\"0\">Previous Month</option>\n                      <option [value]=\"1\">Previous Week </option>\n                      <option [value]=\"2\">By Range</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"c-lg-8 form-date\" *ngIf=\"showRangeValue\" style=\"width:60%; margin-left: -8%;\">\n                  <div class=\"c-lg-12\">\n                    <div class=\"c-lg-6 field-wrapper datePickerBox\">\n                      <label>From Date</label>\n                      <input class=\"form-ctrl\" bsDatepicker readonly=\"true\" [(ngModel)]=\"getAllData.from_date\">\n                    </div>\n                    <div class=\"c-lg-6 field-wrapper datePickerBox\">\n                      <label>To Date</label>\n                      <input class=\"form-ctrl\" bsDatepicker readonly=\"true\" [(ngModel)]=\"getAllData.to_date\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"c-lg-1\" style=\"margin-top: 29px;\n                margin-left: -38px;\">\n                  <button class=\"btn fullBlue\" style=\"margin-top:-3px;\" (click)=\"popupCtrlChange(popupCtrl)\">Go</button>\n                </div>\n              </div>\n              <div class=\"table table-responsive\" *ngIf=\"showTableEvent\" style=\"margin-top:2%\">\n                <span *ngIf=\"getData.user_Type == 1\">\n                  <span style=\"font-size: 17px; font-weight: bold;\"> {{studentName}} </span>\n                  <span style=\"font-size: 12px;\">#{{studentId}}</span>\n                </span>\n                <span *ngIf=\"getData.user_Type == 3\">\n                  <span style=\"font-size: 17px; font-weight: bold;\"> {{teacherName}} </span>\n                  <span style=\"font-size: 12px;\">#{{teacherId}}</span>\n                </span>\n                <span *ngIf=\"getData.user_Type == 0 || getData.user_Type == 1000 || getData.user_Type == 100\">\n                  <span style=\"font-size: 17px; font-weight: bold;\"> {{customName}} </span>\n                  <span style=\"font-size: 12px;\">#{{customId}}</span>\n                </span>\n                <div style=\"margin-left: 10px;display: inline-block; float: right;\">\n                  <a (click)=\"exportToExcel()\" class=\"form\">Download To Excel</a>\n                  <span class=\"fa fa-cloud-download\" style=\"color: #0084f6;\">\n                  </span>\n                </div>\n                <table>\n                  <thead>\n                    <tr>\n                      <th>\n                        Date\n                      </th>\n                      <th>\n                        In Time\n                      </th>\n                      <th>\n                        Out Time\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"range.length!=0\">\n                    <tr *ngFor=\"let i of range\">\n                      <td>\n                        {{i.attendance_date}}\n                      </td>\n                      <td>\n                        {{i.in_time}}\n                      </td>\n                      <td>\n                        {{i.out_time}}\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"range.length==0 && dataStatus == false\">\n                    <tr>\n                      <td colspan=\"3\">\n                        No Records Found\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tbody *ngIf=\"range.length == 0 && dataStatus == true\">\n                    <tr *ngFor=\"let dummy of dummyArr\">\n                      <td *ngFor=\"let c of columnMapRecords\" style=\"padding:10px;\">\n                        <div class=\"skeleton\">\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n\n          </proctur-popup>\n\n        </section>\n      </section>\n    </section>\n  </aside>\n</div>\n\n<!-- Create absent student filter Pop Up -->\n<!-- =============================================================================== -->\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"absentStudentPopUp\">\n  <div class=\"popup pos-abs popup-body-container\" style=\"    max-width: 87%\">\n    <div class=\"popup-wrapper pos-rel\" style=\"top:5%\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeAbsentiesPopup()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n          <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n            <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n              <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                transform=\"translate(992.81 305.77) rotate(45)\" />\n              <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                transform=\"translate(978.81 305.77) rotate(45)\" />\n            </g>\n            <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\"\n              transform=\"translate(1012 297)\" />\n          </g>\n        </svg>\n      </span>\n      <div>\n        <div class=\"text-center\">\n          <h2>SMS To Absent Students</h2>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"row extraMargin\">\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper\">\n                <label for=\"master\">Master Course\n                </label>\n                <select class=\"form-ctrl\" [(ngModel)]=\"getAbsentiesData.master_course_name\"\n                  (change)=\"updateCourseList($event)\">\n                  <option value=\"-1\">Master Course</option>\n                  <option *ngFor=\"let i of masterCourse\" [value]=\"i\">\n                    {{i}}\n                  </option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper\">\n                <label for=\"course\">Course\n                </label>\n                <select class=\"form-ctrl\" [(ngModel)]=\"getAbsentiesData.course_id\"\n                  (change)=\"getSubjects($event.target.value)\">\n                  <option value=\"-1\">Course</option>\n                  <option *ngFor=\"let i of courses\" [value]=\"i.course_id\">\n                    {{i.course_name}}\n                  </option>>\n                </select>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row extraMargin\">\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper\">\n                <label for=\"course\">Subject\n                </label>\n                <select id=\"course\" class=\"form-ctrl\" [(ngModel)]=\"getAbsentiesData.subject_id\">\n                  <option value=\"-1\">Subject</option>\n                  <option *ngFor=\"let opt of subjects\" [value]=\"opt.subject_id\">\n                    {{opt.subject_name}}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper datePickerBox\">\n                <label>Date</label>\n                <input type=\"text\" class=\"form-ctrl bsDatepicker\" bsDatepicker [(ngModel)]=\"getAbsentiesData.from_date\"\n                  (change)=\"dateValidationForFuture($event)\">\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"row text-center\">\n            <button id=\"btnSave\" class=\"btn fullBlue\" type=\"submit\" (click)=\"fetchAbsentsStudentsData()\"> View </button>\n          </div>\n        </div>\n\n        <div class=\"table table-responsive\" style=\"height: 250px;\">\n          <table>\n            <thead>\n\n              <tr>\n                <th>Action</th>\n                <th>\n                  Student ID\n                </th>\n                <th>\n                  Student Name\n                </th>\n                <th>\n                  Joining Date\n                </th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"absendStudentData.length==0\">\n\n              <tr>\n                <td colspan=\"4\">\n                  No Records Found\n                </td>\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"absendStudentData.length>0\">\n              <tr *ngFor=\"let obj of absendStudentData\">\n                <td class=\"checkBoxCss\">\n                  <div class=\"field-checkbox-wrapper\">\n                    <input type=\"checkbox\" class=\"form-checkbox\" [value]=\"obj.student_id\"\n                      (change)=\"toggleCheckbox($event.target.value)\" [id]=\"'checkbox-'+i\">\n                    <label [for]=\"'checkbox-'+i\"></label>\n                  </div>\n                </td>\n                <td *ngFor=\"let key of displayKeys\" style=\"padding:10px;\">\n                  {{obj[key]}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"row text-center\" *ngIf=\"absendStudentData.length>0\">\n          <button id=\"btnSave\" class=\"btn fullBlue\" type=\"submit\" (click)=\"sendSMSToAbsenties()\"> Send SMS </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/exam-report-main/exam-report.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/exam-report-main/exam-report.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clear-fix\" style=\"padding-right: 2%;\">\n    <aside class=\"middle-full\">\n        <section class=\"middle-main clearFix attendance-container\">\n            <section class=\"middle-top mb0 clearFix sms-header\">\n                <h2 class=\"pull-left\" style=\"font-weight: bold;\">\n                    <!--<a routerLink=\"/view/course\" *ngIf=\"!isProfessional\">\n                        Course\n                    </a>\n                    <a routerLink=\"/view/batch\" *ngIf=\"isProfessional\">\n                        Batch\n                    </a>-->\n                 <!--  <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>-->\n                    <a routerLink=\"/view/reports/list\" style=\"padding:0px; \">\n                        Reports\n                        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> \n                   </a>\n                   <!-- <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>--> \n                    Exam Report\n                </h2>\n                <aside class=\"pull-right\">\n                </aside>\n            </section>\n            <section class=\"filter-form\">\n                <div class=\"row\">\n                    <!-- changes by Nalini - to handle school model conditions -->\n                    <div class=\"c-sm-3 c-xs-3 c-lg-3 c-md-3 field-wrapper\" *ngIf=\"!isProfessional\">\n                        <label>{{schoolModel ? 'Standard' : 'Master Course'}}</label>\n                        <select class=\"form-ctrl\" id=\"one\" [(ngModel)]=\"fetchFieldData.standard_id\" (ngModelChange)=\"getCourseData($event)\" name=\"masterCourse\">\n                            <option></option>\n                            <option *ngFor=\"let i of masterCourses\" [value]=\"i\">{{i}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"c-sm-3 c-xs-3 c-lg-3 c-md-3 field-wrapper\" *ngIf=\"isProfessional\">\n                        <label>Master Course</label>\n                        <select class=\"form-ctrl\" id=\"one\" [(ngModel)]=\"queryParam.standard_id\"\n                            (ngModelChange)=\"getCourseData($event)\" name=\"masterCourse\">\n                            <option value=\"-1\"></option>\n                            <option *ngFor=\"let i of batchExamRepo\" [value]=\"i.standard_id\">{{i.standard_name}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"c-sm-3 c-xs-3 c-lg-3 c-md-3 field-wrapper\" *ngIf=\"!isProfessional\">\n                        <label> {{schoolModel ? 'Section' : 'Course'}}</label>\n                        <select class=\"form-ctrl\" id=\"two\" [(ngModel)]=\"fetchFieldData.subject_id\" (ngModelChange)=\"getSubData($event)\">\n                            <option></option>\n                            <option *ngFor=\"let i of courseData\" [value]=\"i.course_id\" name=\"Course\">{{i.course_name}}\n                            </option>\n                        </select>\n                    </div>\n\n                    <div class=\"c-sm-3 c-xs-3 c-lg-3 c-md-3 field-wrapper\" *ngIf=\"isProfessional\">\n                        <label> Course</label>\n                        <select class=\"form-ctrl\" id=\"two\" [(ngModel)]=\"queryParam.subject_id\">\n                            <option value=\"-1\"></option>\n                            <option *ngFor=\"let i of batchCourseData\" [value]=\"i.subject_id\" name=\"Course\">\n                                {{i.subject_name}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"c-sm-3 c-xs-3 c-lg-3 c-md-3 field-wrapper\" *ngIf=\"!isProfessional\">\n                        <label>Subject</label>\n                        <select class=\"form-ctrl\" id=\"three\" [(ngModel)]=\"fetchFieldData.batch_id\"\n                            (ngModelChange)=\"getExamScheduleData($event)\">\n                            <option></option>\n                            <option *ngFor=\"let i of subjectData\" [value]=\"i.batch_id\" name=\"Subject\">{{i.subject_name}}\n                            </option>\n                        </select>\n                    </div>\n\n                    <div class=\"c-sm-3 c-xs-3 c-lg-3 c-md-3  field-wrapper\" *ngIf=\"isProfessional\">\n                        <label>Batch</label>\n                        <select class=\"form-ctrl\" id=\"three\" [(ngModel)]=\" fetchFieldData.batch_id\"\n                            (ngModelChange)=\"getExamScheduleData($event)\">\n                            <option></option>\n                            <option *ngFor=\"let i of getSubjectData\" [value]=\"i.batch_id\" name=\"Subject\">\n                                {{i.batch_name}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"c-sm-3 c-xs-3 c-lg-3 c-md-3 field-wrapper\">\n                        <label>Exam Schedule</label>\n                        <select class=\"form-ctrl\" id=\"four\" [(ngModel)]=\"fetchFieldData.exam_schd_id\">\n                            <option></option>\n                            <option *ngFor=\"let i of exam_Sch_Data\" [value]=\"i.schd_id\" name=\"Exam Schedule\">\n                                {{i.exam_date}}({{i.start_time}}-{{i.end_time}})</option>\n                        </select>\n                    </div>\n\n                    <div class=\"master\" *ngIf=\"!isProfessional\">\n                        <input type=\"button\" class=\"normal-btn fullBlue btn\" value=\"View\" (click)=\"fetchExamReport()\" />\n                        <input type=\"button\" class=\"normal-btn fullBlue btn\" value=\"DetailReport\"\n                            (click)=\"fetchDetailReport()\" />\n                    </div>\n\n                    <div class=\"master\" *ngIf=\"isProfessional\">\n                        <input type=\"button\" class=\"normal-btn fullBlue btn\" value=\"View\" (click)=\"fetchExamReport()\" />\n                        <input type=\"button\" class=\"normal-btn fullBlue btn\" value=\"DetailReport\"\n                            (click)=\"fetchDetailReport()\" />\n                    </div>\n\n                </div>\n            </section>\n            <div class=\"table table-responsive student-table stdnt-table table-overflow\"\n                *ngIf=\"!isProfessional && Tdata\">\n                <div class=\"search-filter-wrapper\" id=\"adFilterExitVisible\">\n                    <input #search type=\"text\" class=\"normal-field\" [(ngModel)]=\"searchText\" style=\"font-size:12px\"\n                        placeholder=\"Search\" (keyup)=\"searchDatabase()\">\n                </div>\n\n                <div class=\"poor\">\n\n                    <proctur-table\n                        [records]=\"pagedExamSource | filter:pagedExamSource.student_name :pagedExamSource.student_id:pagedExamSource.student_phone:pagedExamSource.doj\"\n                        [tableName]=\"'Exam'\" [settings]=\"projectSettings\" (sortData)=\"sortedData($event)\"\n                        [direction]=\"direction\" [sortingEnabled]=\"sortingEnabled\" [loaderState]=\"isRippleLoad\">\n                    </proctur-table>\n                </div>\n                <div class=\"row filter-res pagination\" style=\"width: 100%;\" *ngIf=\"!isProfessional\">\n                    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\"\n                            (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\" [page]=\"pageIndex\"\n                            [perPage]=\"displayBatchSize\" [count]=\"totalRecords\">\n                        </pagination>\n                    </div>\n                </div>\n                <ul style=\"list-style-type:none; text-align:center; font-weight:bold;\"\n                    *ngIf=\"!isProfessional && examSource.length !=0 && examSource[0].grade==''\">\n                    <li>\n                        Highest Marks : {{HighestMarks}}\n                    </li>\n                    <li>\n                        Lowest Marks : {{LowestMarks}}\n                    </li>\n                    <li>\n                        Average Marks : {{AverageMarks}}\n                    </li>\n                </ul>\n            </div>\n\n\n            <div class=\"table table-responsive student-table stdnt-table \" *ngIf=\"isProfessional && Tdata\">\n                <div class=\"search-filter-wrapper\" id=\"adFilterExitVisible\">\n                    <input #search type=\"text\" class=\"normal-field\" [(ngModel)]=\"searchText\" style=\"font-size:12px\"\n                        placeholder=\"Search\" (keyup)=\"searchDatabase()\">\n                </div>\n\n                <div class=\"poor\">\n                    <proctur-table\n                        [records]=\"pagedExamSource | filter:pagedExamSource.student_name:pagedExamSource.student_id:pagedExamSource.student_phone:pagedExamSource.doj\"\n                        [tableName]=\"'Exam'\" [settings]=\"projectSettings\" [text]=\"examDesc\" [viewText]=\"showTitle\"\n                        (sortData)=\"sortedData($event)\" [direction]=\"direction\" [sortingEnabled]=\"sortingEnabled\"\n                        [loaderState]=\"isRippleLoad\">\n                    </proctur-table>\n                </div>\n\n                <div class=\"row filter-res pagination\" style=\"width: 100%;\" *ngIf=\"isProfessional\">\n                    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\"\n                            (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\" [page]=\"pageIndex\"\n                            [perPage]=\"displayBatchSize\" [count]=\"totalRecords\">\n                        </pagination>\n                    </div>\n                </div>\n\n                <ul style=\"list-style-type:none; text-align:center; font-weight:bold;\"\n                    *ngIf=\" isProfessional && examSource.length !=0 && examSource[0].grade==''\">\n                    <li>\n                        Highest Marks : {{HighestMarks}}\n                    </li>\n                    <li>\n                        Lowest Marks : {{LowestMarks}}\n                    </li>\n                    <li>\n                        Average Marks : {{AverageMarks}}\n                    </li>\n                </ul>\n\n            </div>\n\n        </section>\n\n    </aside>\n</div>\n\n<proctur-popup [sizeWidth]=\"'large'\" *ngIf=\"addReportPopup\">\n    <span class=\"closePopup pos-abs fbold show\" (click)=\"closeReportPopup()\" close-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n            <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n                <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n                    <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                        transform=\"translate(992.81 305.77) rotate(45)\" />\n                    <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                        transform=\"translate(978.81 305.77) rotate(45)\" />\n                </g>\n                <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\"\n                    height=\"16\" transform=\"translate(1012 297)\" />\n            </g>\n        </svg>\n    </span>\n\n    <h2 popup-header>DateWise Exam Report ({{selectedSubject}})</h2>\n    <div class=\"stu-table\" popup-content>\n\n        <div *ngIf=\"!isProfessional\" style=\"height:402px;\">\n            <i class=\"fa fa-file-excel-o\" (click)=\" downloadJsonToCSV()\"\n                style=\"color:blue; height:39px; float:right; font-size:31px\"></i>\n            <a class=\"hide\" #xlsDownloader></a>\n\n            <div class=\"table table-responsive student-table made\" style=\"overflow:Hidden\">\n                <table #examTable>\n                    <thead>\n                        <tr>\n                            <th style=\"text-align:right;\">\n                                Student Id\n                            </th>\n                            <th style=\"text-align:left;\">\n                                Student Name\n                            </th>\n                            <th class=\"marks\" *ngFor=\"let date of dateStore\">\n                                {{date.exam_date}}\n                                <br>\n                                <span style=\"font-size:12px;\">{{date.start_time}}</span>\n                            </th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let det of detailSource'>\n                            <td style=\"text-align:right;\">{{det.student_display_id}}</td>\n                            <td style=\"text-align:left;\">{{det.student_name}}</td>\n\n                            <td class=\"marks\" *ngFor=\"let marks of det.detailExamReportList\"\n                                [style.color]=\"getColor(marks.student_marks_obtained)\">\n                                <!-- <label *ngIf=\"marks.grade == 'Leave'||(marks.grade=='Absent' && marks.isBatchExamGrade == 1)\">{{marks.grade | uppercase}}</label> -->\n                                <!-- <label *ngIf=\"marks.grade != 'Leave'&& marks.grade!='Absent' && marks.isBatchExamGrade == 1\">{{marks.grade | uppercase}}</label>\n                                <label *ngIf=\"marks.grade != 'Leave'&& marks.grade!='Absent' && marks.isBatchExamGrade == 0\">{{getMark(marks.student_marks_obtained)}}\n                                    <span *ngIf=\"marks.student_marks_obtained!=null\">/&nbsp;{{marks.total_marks}}</span>\n                                </label> -->\n                                <label *ngIf=\"marks.isBatchExamGrade == 1\">{{marks.grade | uppercase}}</label>\n                                <label *ngIf=\"marks.isBatchExamGrade == 0\">{{getMark(marks.student_marks_obtained)}}\n                                    <label\n                                        *ngIf=\"marks.student_marks_obtained!=null && marks.student_marks_obtained!='Absent' &&marks.student_marks_obtained!='Leave' && marks.student_marks_obtained!=0\">\n                                        <span\n                                            *ngIf=\"marks.student_marks_obtained!=null\">/&nbsp;{{marks.total_marks}}</span>\n                                    </label>\n                                </label>\n                            </td>\n\n                        </tr>\n                        <tr *ngIf='detailSource.length==0'>No Students Founds</tr>\n                    </tbody>\n\n                </table>\n                <!--   <div class=\"row filter-res pagination\" style=\"width: 100%;\" *ngIf=\"!isProfessional\">\n                    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                        <pagination (goPage)=\"fetchTableDataByPagePopup($event)\" (goNext)=\"fetchNextPopup()\" (goPrev)=\"fetchPreviousPopup()\" [pagesToShow]=\"10\"\n                            [page]=\"pageIndexPopup\" [perPage]=\"displayBatchSize\" [count]=\"totalRecords\">\n                        </pagination>\n                    </div>\n                </div>-->\n            </div>\n        </div>\n\n        <div *ngIf=\"isProfessional\">\n            <i class=\"fa fa-file-excel-o\" (click)=\" downloadJsonToCSV()\"\n                style=\"color:blue; height:39px; float:right; font-size:31px\"></i>\n\n            <a class=\"hide\" #xlsDownloader></a>\n            <div class=\"table table-responsive student-table stu-table made\">\n                <table #examTable>\n                    <thead>\n                        <tr>\n                            <th style=\"text-align:right;\">\n                                Student Id\n                            </th>\n                            <th style=\"text-align:left;\">\n                                Student Name\n                            </th>\n                            <th class=\"marks\" *ngFor=\"let date of dateStore\">\n                                {{date.exam_date}}\n                                <br>\n                                <span style=\"font-size:12px;\">{{date.start_time}}</span>\n                            </th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let det of detailSource'>\n\n                            <td style=\"text-align:right;\">{{det.student_display_id}}</td>\n                            <td style=\"text-align:left;\">{{det.student_name}}</td>\n\n                            <td class=\"marks\" *ngFor=\"let marks of det.detailExamReportList\"\n                                [style.color]=\"getColor(marks.student_marks_obtained)\">\n                                <!-- <label *ngIf=\"marks.grade == 'Leave'||marks.grade=='Absent' || isExamGrade == '1'\">{{marks.grade | uppercase}}</label>\n                                <label *ngIf=\"marks.grade == 'Leave'||marks.grade=='Absent' || isExamGrade == '1'\">{{marks.grade | uppercase}}</label>\n                                <label *ngIf=\"marks.grade != 'Leave' && marks.grade!='Absent' \">{{marks.grade | uppercase}}</label>\n                                <label *ngIf=\"marks.grade == '' || isExamGrade == '0'\">{{marks.student_marks_obtained}}</label> -->\n                                <label *ngIf=\"marks.isBatchExamGrade == 1\">{{marks.grade | uppercase}}</label>\n                                <label *ngIf=\"marks.isBatchExamGrade == 0\">{{getMark(marks.student_marks_obtained)}}\n                                    <label\n                                        *ngIf=\"marks.student_marks_obtained!=null && marks.student_marks_obtained!='Absent' &&marks.student_marks_obtained!='Leave' && marks.student_marks_obtained!=0\">\n                                        <span\n                                            *ngIf=\"marks.student_marks_obtained!=null\">/&nbsp;{{marks.total_marks}}</span>\n                                    </label>\n                                </label>\n\n                            </td>\n\n                        </tr>\n                        <tr *ngIf='detailSource.length==0'>No Students Founds</tr>\n                    </tbody>\n                </table>\n                <!--  <div class=\"row filter-res pagination\" style=\"width: 100%;\" *ngIf=\"isProfessional\">\n                    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                        <pagination (goPage)=\"fetchTableDataByPagePopup($event)\" (goNext)=\"fetchNextPopup()\" (goPrev)=\"fetchPreviousPopup()\" [pagesToShow]=\"10\"\n                            [page]=\"pageIndexPopup\" [perPage]=\"displayBatchSize\" [count]=\"totalRecords\">\n                        </pagination>\n                    </div>\n                </div>-->\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"\" popup-footer>\n        <div class=\"clearfix\">\n            <aside class=\"pull-right popup-btn\">\n                <input type=\"button\" value=\"Close\" class=\"btn\" style=\"margin-right:10px;margin-top:0px\"\n                    (click)=\"closeReportPopup()\">\n            </aside>\n        </div>\n    </div>\n\n</proctur-popup>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/report-home/report-home.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/report-home/report-home.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section style=\"padding-left: 2%;\">\n  <section class=\"header-section\">\n    <div>\n      <div class=\"header-title\">\n        <h2>\n          <a routerLink=\"/view/{{type}}\" style=\"color: #0084f6;\">\n            {{ type | titlecase }}\n          </a>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> Report\n        </h2>\n      </div>\n    </div>\n  </section>\n  <div class=\"course-menu-section-container\">\n    <div class=\"course-menu-item\" *ngIf=\"JsonFlags.isShowAttendanceReport\"\n      routerLink=\"/view/{{type}}/reports/attendance\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/course/create-course.svg\" alt=\"create course\">\n        <span>Attendance Report </span>\n      </div>\n      <div class=\"menu-description\">\n        <span>Attendance report for students.</span>\n      </div>\n    </div>\n    <div class=\"course-menu-item\" *ngIf=\"JsonFlags.isShowExamReport\" routerLink=\"/view/{{type}}/reports/exam\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/course/create-course.svg\" alt=\"create course\">\n        <span>Exam Report</span>\n      </div>\n      <div class=\"menu-description\">\n        <span>Exam report of student as per their performance.</span>\n      </div>\n    </div>\n    <div class=\"course-menu-item\" *ngIf=\"JsonFlags.isShowExamDash\" routerLink=\"/view/{{type}}/reports/exam-dashboard\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/course/create-course.svg\" alt=\"create course\">\n        <span>Exam Dashboard</span>\n      </div>\n      <div class=\"menu-description\">\n        <span>In-depth exam report of students.</span>\n      </div>\n    </div>\n    <div class=\"course-menu-item\" *ngIf=\"JsonFlags.showBiomentricR\" routerLink=\"/view/{{type}}/reports/biometric\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/course/reports.svg\" alt=\"reports\">\n        <span>Biometric Attendance</span>\n      </div>\n      <div class=\"menu-description\">\n        <span>Report for attendance report with institute that has biometric system installed.</span>\n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/reports.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/reports.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/components/course-module/reports/attendance-report/attendanceReport.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/course-module/reports/attendance-report/attendanceReport.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".madeAttendance table thead tr {\n  padding: 5px;\n}\n\n.madeAttendance table thead tr th {\n  padding: 5px;\n}\n\n.madeAttendance .madeDate {\n  font-size: 12px;\n}\n\n.skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n\n.skeleton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n\n.showCursor:hover {\n  cursor: pointer;\n}\n\n.attendance-container {\n  padding: 5px;\n  overflow: auto;\n}\n\n.filter-form {\n  border-radius: 10px;\n  /*popup scss*/\n}\n\n.filter-form .row {\n  margin: 5px 15px;\n}\n\n.filter-form .form-wrapper {\n  position: relative;\n}\n\n.filter-form .form-wrapper.datePickerBox .side-form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n\n.filter-form .form-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 0;\n  top: 20px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.filter-form .form-wrapper {\n  padding: 10px 5px;\n}\n\n.filter-form .form-wrapper label {\n  width: 100%;\n  display: block;\n}\n\n.filter-form .form-wrapper .side-form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n  width: 100%;\n  padding: 3px;\n  display: block;\n  border: 1px solid #dadada;\n}\n\n.filter-form .form-wrapper {\n  padding: 10px 5px;\n  position: relative;\n}\n\n.filter-form .form-wrapper.datePickerBox .side-form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n  width: 100%;\n  padding: 5px;\n  display: block;\n  border: 1px solid #dadada;\n}\n\n.filter-form .form-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.filter-form .popup-content {\n  position: relative;\n  left: 5%;\n  overflow-x: hidden;\n}\n\n.filter-form .popup-content table {\n  overflow-y: auto;\n  overflow-x: auto;\n  width: 95%;\n}\n\n.filter-form .popup-content h5 {\n  font-weight: 200px;\n  text-align: center;\n}\n\n.filter-form .popup-content h2 {\n  text-align: center;\n}\n\n.filter-form .main-student-table ::-webkit-scrollbar {\n  display: block;\n}\n\n.filter-form .main-student-table .student-table {\n  overflow-x: auto;\n  height: 400px;\n}\n\n.filter-form .btn {\n  display: inline-block;\n}\n\n.filter-form .inner-main {\n  display: inline;\n  padding: 25px 0px 12px 0px;\n}\n\n.filter-form .inner-main .form-btn .btn {\n  margin: 0px 10px;\n  margin: 0px;\n}\n\n.filter-form .inner-main .inner-btn {\n  display: inline-block;\n  width: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.filter-form .inner-main .outer-btn {\n  display: inline-block;\n  width: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.filter-form .records {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.filter-form .form-field {\n  display: inline-block;\n  width: 80%;\n}\n\n.filter-form .form-date {\n  display: inline-block;\n  width: 100%;\n}\n\n.filter-form .table-content {\n  height: 350px;\n}\n\n.filter-form .table-content ::-webkit-scrollbar {\n  display: block;\n}\n\n.filter-form .table-content .table-heading {\n  overflow-x: auto;\n  height: 350px;\n}\n\n.filter-form .filter-box {\n  padding: 10px 0px;\n  margin-bottom: 5px;\n  background: #efefef;\n}\n\n.filter-form .form-wrapper .datePickerBox {\n  padding-right: 10px;\n  padding-bottom: 10px;\n  width: 10%;\n}\n\n.filter-form .popup-header-content h2 {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.filter-form .popup-header-content h5 {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.filter-form .middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.filter-form .middle-section .middle-top h2 {\n  color: black;\n  font-weight: unset;\n  padding-top: 20px;\n}\n\n.filter-form .middle-section .form-wrapper {\n  background: transparent;\n  margin: 25px 0px;\n  align-content: center;\n}\n\n.filter-form .middle-section .form-wrapper .btn {\n  margin-top: -3px;\n  width: 70%;\n}\n\n.filter-form .middle-section .form-wrapper label {\n  padding-left: 10px;\n  font-size: 12px;\n  font-weight: 400;\n  color: 0084f6;\n  text-decoration: none;\n  text-transform: uppercase;\n  -webkit-font-smoothing: antialiased;\n  width: 100%;\n}\n\n.filter-form .middle-section .form-wrapper .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding-left: 10px;\n  margin-left: 10px;\n  height: 30px;\n  padding: 0px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n\n.filter-form .middle-section .form-wrapper .side-form-ctrl.bsDatepicker {\n  padding-left: 10px;\n  margin-left: 10px;\n  width: 100%;\n}\n\n.filter-form .popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n\n.filter-form .popupWrapper .popup {\n  max-width: 100%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n\n.filter-form .popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n\n.filter-form .popup-wrapper span {\n  font-weight: 300;\n  display: inline-block;\n}\n\n.filter-form .popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n\n.filter-form .popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n\n.filter-form .closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n\n.filter-form .closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n\n.filter-form .closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n\n.filter-form .closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n\n.filter-form .closePopup svg {\n  width: 16px;\n}\n\n.filter-form .closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n\n.filter-form .popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n\n.filter-form .fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n\n.filter-form .popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n\n.filter-form .popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n\n.filter-form .popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n\n.filter-form .popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n\n.filter-form .popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n\n.filter-form .popup-content ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n\n.search-filter-wrapper {\n  margin: 10px 5px 10px 5px;\n  float: right;\n}\n\n.search-filter-wrapper .search-field {\n  font-size: 12px;\n  padding: 7px 10px;\n  width: 200px;\n  box-sizing: border-box;\n  float: right;\n  height: 35px;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvYXR0ZW5kYW5jZS1yZXBvcnQvYXR0ZW5kYW5jZVJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUlnQixZQUFXO0FBTDNCOztBQUNBO0VBTW9CLFlBQVk7QUFIaEM7O0FBSEE7RUFZUSxlQUFjO0FBTHRCOztBQVFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQXRCZ0I7RUF1QmhCLGtCQUFrQjtBQUx0Qjs7QUFEQTtFQVFRLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJEQUE4RTtFQUM5RSxtREFBMkM7VUFBM0MsMkNBQTJDO0FBSG5EOztBQU1BO0VBQ0ksZUFBZTtBQUhuQjs7QUFLQTtFQUdJLFlBQVk7RUFDWixjQUFjO0FBSmxCOztBQU9BO0VBR0ksbUJBQW1CO0VBdU5uQixhQUFBO0FBNU5KOztBQUVBO0VBS1EsZ0JBQWdCO0FBSHhCOztBQUZBO0VBUVEsa0JBQWtCO0FBRjFCOztBQU5BO0VBV2dCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QjtBQUR2Qzs7QUFiQTtFQWlCZ0IsV0FBVztFQUNYLHlDQUFzRTtFQUN0RSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFBMUI7O0FBeEJBO0VBNkJRLGlCQUFpQjtBQUR6Qjs7QUE1QkE7RUErQlksV0FBVztFQUNYLGNBQWM7QUFDMUI7O0FBakNBO0VBbUNZLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7QUFFckM7O0FBNUNBO0VBOENRLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFF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dEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUtaLDRCQUE0QjtBQWdDcEM7O0FBallBO0VBb1dRLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtBQWlDbEI7O0FBdllBO0VBeVdRLFNBQVM7QUFrQ2pCOztBQTNZQTtFQTZXWSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7QUFrQ3ZCOztBQTdCQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0FBZ0NoQjs7QUFsQ0E7RUFJUSxlQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBa0N2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9yZXBvcnRzL2F0dGVuZGFuY2UtcmVwb3J0L2F0dGVuZGFuY2VSZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmFzZTogI2VmZWZlZjtcbiRjb2xvci1iYXNlOiAjZWZlZmVmO1xuJGNvbG9yLWhpZ2hsaWdodDogbGlnaHRlbigkY29sb3ItYmFzZSwgNyUpO1xuLm1hZGVBdHRlbmRhbmNle1xuICAgIHRhYmxle1xuICAgICAgICB0aGVhZHtcbiAgICAgICAgICAgIHRye1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgICAgICAgIHRoe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5tYWRlRGF0ZXtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgfVxufVxuLnNrZWxldG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWJhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRjb2xvci1iYXNlLCAkY29sb3ItaGlnaGxpZ2h0LCAkY29sb3ItYmFzZSk7XG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgfVxufVxuLnNob3dDdXJzb3I6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmF0dGVuZGFuY2UtY29udGFpbmVye1xuICAgIC8vIGhlaWdodDogODV2aDtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZpbHRlci1mb3JtIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCAjZGFkYWRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLnJvdyB7XG4gICAgICAgIG1hcmdpbjogNXB4IDE1cHg7XG4gICAgfVxuICAgIC5mb3JtLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICYuZGF0ZVBpY2tlckJveCB7XG4gICAgICAgICAgICAuc2lkZS1mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGUtZm9ybS1jdHJsIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb3JtLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmLmRhdGVQaWNrZXJCb3gge1xuICAgICAgICAgICAgLnNpZGUtZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBvcHVwLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDUlO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgfVxuICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tYWluLXN0dWRlbnQtdGFibGUge1xuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5zdHVkZW50LXRhYmxlIHtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5pbm5lci1tYWluIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDBweCAxMnB4IDBweDtcbiAgICAgICAgLmZvcm0tYnRue1xuICAgICAgICAgICAgLmJ0bntcbiAgICAgICAgICAgICAgICBtYXJnaW46MHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW5uZXItYnRuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAub3V0ZXItYnRuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmVjb3JkcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmZvcm0tZmllbGQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5mb3JtLWRhdGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAudGFibGUtY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlLWhlYWRpbmcge1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpbHRlci1ib3gge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIH1cblxuICAgIC5mb3JtLXdyYXBwZXIge1xuICAgICAgICAuZGF0ZVBpY2tlckJveCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wb3B1cC1oZWFkZXItY29udGVudCB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5taWRkbGUtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLm1pZGRsZS10b3Age1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIG1hcmdpbjogMjVweCAwcHg7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAwMDg0ZjY7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2lkZS1mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC40MTk2MDc4NDMxMzcyNTQ5KTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICYuYnNEYXRlcGlja2VyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qcG9wdXAgc2NzcyovXG4gICAgLnBvcHVwV3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjUpO1xuICAgICAgICB6LWluZGV4OiAxMDA7IC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgICAgICAucG9wdXAge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlOyAvLyBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiA1JTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bzsgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wb3B1cC13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4OyAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggMjBweCA1cHggIzljOWM5YztcbiAgICAgICAgdHJhbnNpdGlvbjogdW5zZXQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMjVweCAwIDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jbG9zZVBvcHVwIHtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgICAgICAgYm90dG9tOiAycHg7XG4gICAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgJi50b3BMZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgICYuYm90dG9tTGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC5jbHMtMSB7fVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wb3B1cC1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgICAuZmFkZUluIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4gICAgLnBvcHVwV3JhcHBlck1vYiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyAvLyBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC5jbG9zZVBvcHVwIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgICAgIHRvcDogLTI3cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAucG9wdXAtbW9iIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYm90dG9tOiAtNzAlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgfVxuICAgIC5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIHtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAucG9wdXBXcmFwcGVyTW9iLnNob3dQb3B1cE1vYiAucG9wdXAtbW9iIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgIH0gLy8vLy8vLy8vLy9cbiAgICAucG9wdXAtY29udGVudCB7XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWFyY2gtZmlsdGVyLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMTBweCA1cHggMTBweCA1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIC5zZWFyY2gtZmllbGQge1xuICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/course-module/reports/attendance-report/attendanceReport.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/course-module/reports/attendance-report/attendanceReport.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AttendanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceReportComponent", function() { return AttendanceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../.. */ "./src/app/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/common-service */ "./src/app/services/common-service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_attendance_report_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/attendance-report-service.service */ "./src/app/components/course-module/services/attendance-report-service.service.ts");
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








let AttendanceReportComponent = /** @class */ (() => {
    let AttendanceReportComponent = class AttendanceReportComponent {
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        constructor(reportService, appc, _http, auth, _httpService, msgService, commonService) {
            this.reportService = reportService;
            this.appc = appc;
            this._http = _http;
            this.auth = auth;
            this._httpService = _httpService;
            this.msgService = msgService;
            this.commonService = commonService;
            this.institute_id = sessionStorage.getItem('institution_id');
            this.masterCourses = [];
            this.fullResponse = [];
            this.postData = [];
            this.pagedPostData = [];
            this.courses = [];
            this.batchCourses = [];
            this.SummaryReports = false;
            this.PageIndex = 1;
            this.PageIndexPopup = 1;
            this.pagedisplaysize = 10;
            this.pagedisplaysizePopup = 10;
            this.addReportPopUp = false;
            this.dateWiseAttendance = [];
            this.dateWiseAttendancePro = [];
            this.pageDetailedData = [];
            this.dataTypeAttendance = [];
            this.dataTypeAttendancePro = [];
            this.typeAttendance = [];
            this.attendanceIndex0 = [];
            this.attendanceIndex0Pro = [];
            this.attendanceIndexiOf = [];
            this.attendanceIndexiOfPro = [];
            this.isProfessional = true;
            this.masterCoursePro = [];
            this.subjectPro = [];
            this.batchPro = [];
            this.typeAttendancePro = [];
            this.pagedPostDataPro = [];
            this.queryParamsPro = [];
            this.pageDetailedDataPro = [];
            this.property = "";
            this.direction = 0;
            this.sortingEnabled = true;
            this.dummyArr = [0, 1, 2, 0, 1, 2];
            this.columnMaps = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            this.columnMaps2 = [0, 1, 2, 3, 4, 5];
            this.dataStatus = false;
            this.projectSettings = [
                { primaryKey: 'student_disp_id', header: 'Student id' },
                { primaryKey: 'student_name', header: 'Student name' },
                { primaryKey: 'student_phone', header: 'Contact no' },
                { primaryKey: 'doj', header: 'Joining date' },
                { primaryKey: 'total_classes', header: 'Total classes' },
                { primaryKey: 'total_attended', header: 'Present' },
                { primaryKey: 'total_absent', header: 'Absent' },
                { primaryKey: 'total_leave', header: 'Leave' },
                { primaryKey: 'spent_percentage', header: 'Attendance(%)' }
            ];
            this.attendanceFetchForm = {
                standard_id: "",
                subject_id: "",
                institution_id: sessionStorage.getItem('institute_id'),
                course_id: "-1",
                batch_id: "-1",
                master_course_name: "",
                from_date: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
            };
            /*for professional*/
            this.queryParams = {
                standard_id: "",
                subject_id: "-1",
                institution_id: sessionStorage.getItem('institute_id'),
                course_id: -1,
                batch_id: "-1",
                master_course_name: "",
                from_date: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD')
            };
            this.searchText = "";
            this.searchflag = false;
            this.showDownloadReport = false;
            this.searchData = [];
            this.schoolModel = false;
            //console.log(moment(moment().format('DD-MM-YYYY')).diff(moment('03-02-2018'),'months'));
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        ngOnInit() {
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            // changes by Nalini - to handle school model conditions
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            this.getMasterCourseData();
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        /* this is ussed to fetch details for dropdown for master course/ Standard */
        getMasterCourseData() {
            this.auth.showLoader();
            if (this.isProfessional) {
                this.reportService.fetchMasterCourseProfessional(this.queryParams).subscribe((data) => {
                    this.auth.hideLoader();
                    this.masterCoursePro = data.standardLi;
                    this.batchPro = data.batchLi;
                }, (error) => {
                    this.auth.hideLoader();
                    this.dataStatus = false;
                    let msg = {
                        type: "error",
                        body: error.error.message
                    };
                    this.appc.popToast(msg);
                    return error;
                });
            }
            else {
                this.getMasterCourseKeys();
            }
        }
        getMasterCourseKeys() {
            let url = "/api/v1/courseMaster/master-course-list/" + this.institute_id + '?is_active_not_expire=Y&sorted_by=course_name';
            let keys;
            this.auth.showLoader();
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.fullResponse = data.result;
                keys = Object.keys(data.result);
                console.log("keys", keys);
                for (let i = 0; i < keys.length; i++) {
                    this.masterCourses.push(keys[i]);
                }
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        getCourseData(i) {
            this.attendanceFetchForm.batch_id = "-1";
            this.queryParams.batch_id = "-1";
            this.isShowDownloadReport();
            // 
            this.dataStatus = true;
            this.queryParams.standard_id = i;
            this.queryParams.subject_id = "-1";
            this.queryParams.batch_id = "-1";
            if (this.isProfessional) {
                this.auth.showLoader();
                this.reportService.fetchMasterCourseProfessional(this.queryParams).subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    this.subjectPro = data.subjectLi;
                    this.batchPro = data.batchLi;
                }, (error) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    let msg = {
                        type: "error",
                        body: error.error.message
                    };
                    this.appc.popToast(msg);
                    return error;
                });
                this.batchPro = [];
                this.subjectPro = [];
            }
            else {
                this.dataStatus = true;
                this.attendanceFetchForm.batch_id = "-1";
                this.attendanceFetchForm.course_id = "";
                this.courses = [];
                let temp = this.fullResponse[this.attendanceFetchForm.master_course_name];
                for (let i = 0; i < temp.length; i++) {
                    this.courses.push(temp[i]);
                }
                // this.auth.showLoader();
                // this.attendanceFetchForm.batch_id = "-1";
                // this.attendanceFetchForm.course_id = "";
                // this.reportService.getCourses(i).subscribe(
                //   (data: any) => {
                //     this.dataStatus = false;
                //     this.attendanceFetchForm.from_date = moment(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
                //     this.attendanceFetchForm.to_date = moment(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
                //     this.queryParams.from_date = moment(this.queryParams.from_date).format('YYYY-MM-DD');
                //     this.queryParams.to_date = moment(this.queryParams.to_date).format('YYYY-MM-DD');
                //     this.auth.hideLoader();
                //     this.courses = data.coursesList;
                //   }
                //   ,
                //   (error: any) => {
                //     this.dataStatus = false;
                //     this.auth.hideLoader();
                //     let msg = {
                //       type: "error",
                //       body: error.error.message
                //     }
                //     this.appc.popToast(msg);
                //     return error;
                //   }
                // )
                // this.courses = [];
                // this.batchCourses = [];
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        getSubjectData(i) {
            this.isShowDownloadReport();
            this.auth.showLoader();
            this.dataStatus = true;
            this.queryParams.standard_id = this.queryParams.standard_id;
            if (this.isProfessional) {
                this.reportService.fetchMasterCourseProfessional(this.queryParams).subscribe((data) => {
                    this.dataStatus = false;
                    this.attendanceFetchForm.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
                    this.attendanceFetchForm.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
                    this.queryParams.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.from_date).format('YYYY-MM-DD');
                    this.queryParams.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.to_date).format('YYYY-MM-DD');
                    this.auth.hideLoader();
                    this.batchPro = data.batchLi;
                }, (error) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    let msg = {
                        type: "error",
                        body: error.error.message
                    };
                    this.appc.popToast(msg);
                    return error;
                });
                this.batchPro = [];
            }
            else {
                this.attendanceFetchForm.batch_id = "-1";
                this.reportService.getSubject(i).subscribe((data) => {
                    this.dataStatus = false;
                    this.attendanceFetchForm.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
                    this.attendanceFetchForm.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
                    this.queryParams.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.from_date).format('YYYY-MM-DD');
                    this.queryParams.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.to_date).format('YYYY-MM-DD');
                    this.auth.hideLoader();
                    this.batchCourses = data.batchesList;
                    // this.getPostData();
                });
                this.batchCourses = [];
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        getBatchData(i) {
            this.isShowDownloadReport();
            this.dataStatus = true;
            this.auth.showLoader();
            this.queryParams.standard_id = this.queryParams.standard_id;
            this.queryParams.batch_id = this.queryParams.batch_id;
            if (this.isProfessional) {
                this.reportService.postDataToTablePro(this.queryParams).subscribe((data) => {
                    this.dataStatus = false;
                    this.attendanceFetchForm.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
                    this.attendanceFetchForm.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
                    this.queryParams.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.from_date).format('YYYY-MM-DD');
                    this.queryParams.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.to_date).format('YYYY-MM-DD');
                    this.auth.hideLoader();
                    // this.getPostData();
                });
            }
            else {
                this.reportService.postDataToTable(this.attendanceFetchForm).subscribe((data) => {
                    this.dataStatus = false;
                    this.attendanceFetchForm.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
                    this.attendanceFetchForm.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
                    this.queryParams.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.from_date).format('YYYY-MM-DD');
                    this.queryParams.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.to_date).format('YYYY-MM-DD');
                    this.auth.hideLoader();
                    // this.getPostData();
                });
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        getPostData() {
            this.auth.showLoader();
            this.SummaryReports = true;
            this.dataStatus = true;
            this.PageIndex = 1;
            if (this.isProfessional) {
                this.reportService.postDataToTablePro(this.queryParams).subscribe((data) => {
                    this.auth.hideLoader();
                    this.dataStatus = false;
                    this.queryParamsPro = data;
                    this.totalRow = data.length;
                    this.PageIndex = 1;
                    this.fetchTableDataByPage(this.PageIndex);
                }, (error) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    let msg = {
                        type: "error",
                        body: error.error.message
                    };
                    this.appc.popToast(msg);
                    return error;
                });
            }
            else {
                if (this.attendanceFetchForm.from_date == "Invalid date") {
                    this.attendanceFetchForm.from_date = "";
                }
                if (this.attendanceFetchForm.to_date == "Invalid date") {
                    this.attendanceFetchForm.to_date = "";
                }
                this.reportService.postDataToTable(this.attendanceFetchForm).subscribe((data) => {
                    this.auth.hideLoader();
                    this.dataStatus = false;
                    this.postData = data;
                    this.totalRow = data.length;
                    this.PageIndex = 1;
                    this.fetchTableDataByPage(this.PageIndex);
                }, (error) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    let msg = {
                        type: "error",
                        body: error.error.message
                    };
                    this.appc.popToast(msg);
                    return error;
                });
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        postDetails() {
            this.auth.showLoader();
            this.dataStatus = true;
            this.queryParams.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.from_date).format('YYYY-MM-DD');
            this.queryParams.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.to_date).format('YYYY-MM-DD');
            let diff = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.from_date).diff(moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.to_date), 'months');
            let futureDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.to_date).add('days', 1).format('YYYY-MM-DD');
            if (this.isProfessional) {
                if (this.queryParams.from_date == "" || this.queryParams.to_date == "" || this.queryParams.batch_id == "-1" || this.queryParams.batch_id == " " || this.queryParams.subject_id == "" || this.queryParams.standard_id == "-1") {
                    let msg = {
                        type: "error",
                        title: "Incorrect Details",
                        body: "All fields Are required"
                    };
                    this.appc.popToast(msg);
                    this.dataStatus = false;
                    this.auth.hideLoader();
                }
                else if (this.queryParams.from_date > this.queryParams.to_date) {
                    let msg = {
                        type: "error",
                        title: "Incorrect Details",
                        body: "From Date Must Be less than to date"
                    };
                    this.appc.popToast(msg);
                    this.dataStatus = false;
                    this.auth.hideLoader();
                }
                else if (diff < -4) {
                    let msg = {
                        type: "error",
                        title: "Incorrect Details",
                        body: "You cannot select more than 120 days"
                    };
                    this.appc.popToast(msg);
                    this.dataStatus = false;
                    this.auth.hideLoader();
                }
                else {
                    this.pageDetailedDataPro = [];
                    this.typeAttendancePro = [];
                    this.reportService.postDetailedData(this.queryParams).subscribe((data) => {
                        this.auth.hideLoader();
                        this.dataStatus = false;
                        if (data.length) {
                            this.dataStatus = false;
                            this.dateWiseAttendancePro = data;
                            this.dataTypeAttendancePro = data.map((ele) => {
                                this.typeAttendancePro = ele.attendanceDateType;
                            });
                            this.attendanceIndex0Pro = this.typeAttendancePro[0];
                            this.attendanceIndexiPro = this.typeAttendancePro.length;
                            this.attendanceIndexiOfPro = this.typeAttendancePro[this.attendanceIndexiPro - 1];
                            this.addReportPopUp = true;
                            this.totalRowPopup = data.length;
                            this.PageIndexPopup = 1;
                            this.fetchTableDataByPagePopup(this.PageIndexPopup);
                        }
                        else {
                            let msg = {
                                type: "info",
                                title: "No data found",
                                body: "We did not find any attendance marked for the selected dates "
                            };
                            this.appc.popToast(msg);
                            this.auth.hideLoader();
                            this.dataStatus = false;
                        }
                    }, (error) => {
                        this.auth.hideLoader();
                        this.dataStatus = false;
                        let msg = {
                            type: "error",
                            body: error.error.message
                        };
                        this.appc.popToast(msg);
                        return error;
                    });
                }
            }
            else {
                this.attendanceFetchForm.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
                this.attendanceFetchForm.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
                let diff = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.from_date).diff(moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.to_date), 'months');
                let futureDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.to_date).add('days', 1).format('YYYY-MM-DD');
                this.auth.showLoader();
                if (this.attendanceFetchForm.master_course_name == "" || this.attendanceFetchForm.course_id == "" || this.attendanceFetchForm.batch_id == "-1" || this.attendanceFetchForm.from_date == "" || this.attendanceFetchForm.to_date == "") {
                    let msg = {
                        type: "error",
                        title: "Incorrect Details",
                        body: "All fields Are required"
                    };
                    this.appc.popToast(msg);
                    this.dataStatus = false;
                    this.auth.hideLoader();
                }
                else if (this.attendanceFetchForm.from_date > this.attendanceFetchForm.to_date) {
                    let msg = {
                        type: "error",
                        title: "Incorrect Details",
                        body: "From Date Must Be less than to date"
                    };
                    this.appc.popToast(msg);
                    this.dataStatus = false;
                    this.auth.hideLoader();
                }
                else if (diff < -4) {
                    let msg = {
                        type: "error",
                        title: "Incorrect Details",
                        body: "You cannot select more than 120 days"
                    };
                    this.appc.popToast(msg);
                    this.dataStatus = false;
                    this.auth.hideLoader();
                }
                else {
                    this.dataStatus = true;
                    this.typeAttendance = [];
                    this.pageDetailedData = [];
                    this.reportService.postDetailedData(this.attendanceFetchForm).subscribe((data) => {
                        if (data.length) {
                            this.addReportPopUp = true;
                            this.auth.hideLoader();
                            this.dataStatus = false;
                            this.dateWiseAttendance = data;
                            this.dataTypeAttendance = this.dateWiseAttendance.map((ele) => {
                                this.typeAttendance = ele.attendanceDateType;
                            });
                            this.attendanceIndex0 = this.typeAttendance[0];
                            this.attendanceIndexi = this.typeAttendance.length;
                            this.attendanceIndexiOf = this.typeAttendance[this.attendanceIndexi - 1];
                            this.totalRowPopup = data.length;
                            this.PageIndexPopup = 1;
                            this.fetchTableDataByPagePopup(this.PageIndexPopup);
                        }
                        else {
                            let msg = {
                                type: "info",
                                title: "No data found",
                                body: "We did not find any attendance marked for the selected dates "
                            };
                            this.appc.popToast(msg);
                            this.auth.hideLoader();
                            this.dataStatus = false;
                        }
                    }, (error) => {
                        this.auth.hideLoader();
                        this.dataStatus = false;
                        let msg = {
                            type: "error",
                            body: error.error.message
                        };
                        this.appc.popToast(msg);
                        return error;
                    });
                }
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        closeReportPopup() {
            this.addReportPopUp = false;
        }
        // pagination functions
        //for summary report
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.pagedisplaysize * (index - 1);
            if (this.isProfessional) {
                this.pagedPostDataPro = this.getDataFromDataSource(startindex);
            }
            else {
                this.pagedPostData = this.getDataFromDataSource(startindex);
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        fetchNext() {
            this.PageIndex++;
            this.fetchTableDataByPage(this.PageIndex);
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        fetchPrevious() {
            if (this.PageIndex != 1) {
                this.PageIndex--;
                this.fetchTableDataByPage(this.PageIndex);
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        getDataFromDataSource(startindex) {
            if (this.isProfessional) {
                if (this.searchflag) {
                    let t = this.searchData.slice(startindex, startindex + this.pagedisplaysize);
                    return t;
                }
                else {
                    let t = this.queryParamsPro.slice(startindex, startindex + this.pagedisplaysize);
                    return t;
                }
            }
            else {
                if (this.searchflag) {
                    let t = this.searchData.slice(startindex, startindex + this.pagedisplaysize);
                    return t;
                }
                else {
                    let t = this.postData.slice(startindex, startindex + this.pagedisplaysize);
                    return t;
                }
            }
        }
        //for detailed report
        fetchTableDataByPagePopup(index) {
            this.PageIndexPopup = index;
            let startindex = this.pagedisplaysizePopup * (index - 1);
            if (this.isProfessional) {
                this.pageDetailedDataPro = this.getDataFromDataSourcePopup(startindex);
            }
            else {
                this.pageDetailedData = this.getDataFromDataSourcePopup(startindex);
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        fetchNextPopupRange() {
            this.PageIndexPopup++;
            this.fetchTableDataByPagePopup(this.PageIndexPopup);
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        fetchPreviousPopup() {
            if (this.PageIndexPopup != 1) {
                this.PageIndexPopup--;
                this.fetchTableDataByPagePopup(this.PageIndexPopup);
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        getDataFromDataSourcePopup(startindex) {
            if (this.isProfessional) {
                let d = this.dateWiseAttendancePro.slice(startindex, startindex + this.pagedisplaysizePopup);
                return d;
            }
            else {
                let d = this.dateWiseAttendance.slice(startindex, startindex + this.pagedisplaysizePopup);
                return d;
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        sortedData(ev) {
            this.sortingEnabled = true;
            (this.direction == 0 || this.direction == -1) ? (this.direction = 1) : (this.direction = -1);
            if (this.isProfessional) {
                this.queryParamsPro = this.queryParamsPro.sort((a, b) => {
                    if (a[ev] < b[ev]) {
                        return -1 * this.direction;
                    }
                    else if (a[ev] > b[ev]) {
                        return this.direction;
                    }
                    else {
                        return 0;
                    }
                });
            }
            else {
                this.postData = this.postData.sort((a, b) => {
                    if (a[ev] < b[ev]) {
                        return -1 * this.direction;
                    }
                    else if (a[ev] > b[ev]) {
                        return this.direction;
                    }
                    else {
                        return 0;
                    }
                });
            }
            this.PageIndex = 1;
            this.fetchTableDataByPage(this.PageIndex);
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        getColor(status) {
            switch (status) {
                case 'A': return 'red';
                case 'L': return 'blue';
            }
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        DownloadJsonToCsv() {
            //console.log(this.attendanceTable.nativeElement.innerHtml);
            let link = this.xlsDownloader.nativeElement;
            let outer = this.attendanceTable.nativeElement.outerHTML.replace(/ /g, '%20');
            let data_type = 'data:application/vnd.ms-excel';
            let file_name = '';
            if (this.isProfessional) {
                for (let i = 0; i <= this.batchPro.length; i++) {
                    if (this.queryParams.batch_id == this.batchPro[i].batch_id) {
                        file_name = this.batchPro[i].batch_name;
                        break;
                    }
                }
                file_name = file_name + '(' + moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.from_date).format('DD-MM-YYYY') + " to "
                    + moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.to_date).format('DD-MM-YYYY') + ')';
            }
            else {
                for (let i = 0; i <= this.batchCourses.length; i++) {
                    if (this.attendanceFetchForm.batch_id == this.batchCourses[i].batch_id) {
                        file_name = this.batchCourses[i].batch_name;
                        break;
                    }
                }
                file_name = file_name + '(' + moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.from_date).format('DD-MM-YYYY') + " to "
                    + moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.to_date).format('DD-MM-YYYY') + ')';
            }
            link.setAttribute('href', data_type + ',' + outer);
            link.setAttribute('download', file_name + '.xls');
            link.click();
        }
        /* ================================================================================================================================ */
        /* ================================================================================================================================ */
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                this.PageIndex = 1;
                let searchRes;
                if (!this.isProfessional) {
                    searchRes = this.postData.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                }
                else {
                    searchRes = this.queryParamsPro.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                }
                this.searchData = searchRes;
                this.totalRow = searchRes.length;
                this.searchflag = true;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else {
                this.searchflag = false;
                this.fetchTableDataByPage(this.PageIndex);
                if (this.isProfessional) {
                    this.totalRow = this.queryParamsPro.length;
                }
                else {
                    this.totalRow = this.postData.length;
                }
            }
        }
        futureDateValid(selectDate) {
            if (moment__WEBPACK_IMPORTED_MODULE_1__(selectDate).diff(moment__WEBPACK_IMPORTED_MODULE_1__()) > 0) {
                let msg = {
                    type: "info",
                    body: "You cannot select future date"
                };
                this.appc.popToast(msg);
                this.auth.hideLoader();
                this.attendanceFetchForm.from_date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
                this.attendanceFetchForm.to_date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
                this.queryParams.from_date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
                this.queryParams.to_date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
            }
        }
        clearFromDate() {
            this.attendanceFetchForm.from_date = "";
            this.queryParams.from_date = "";
        }
        clearToDate() {
            this.attendanceFetchForm.to_date = "";
            this.queryParams.to_date = "";
        }
        isShowDownloadReport() {
            this.showDownloadReport = false;
            if (this.isProfessional) {
                if ((this.queryParams.standard_id != '-1' && this.queryParams.subject_id != '-1') || (this.queryParams.batch_id != '-1')) {
                    this.showDownloadReport = true;
                }
            }
            else {
                if ((this.attendanceFetchForm.master_course_name != '-1' && this.attendanceFetchForm.course_id != '-1') || (this.attendanceFetchForm.batch_id != '-1' && this.attendanceFetchForm.batch_id != "")) {
                    this.showDownloadReport = true;
                }
            }
        }
        downloadReport() {
            this.auth.showLoader();
            let obj;
            if (this.isProfessional) {
                this.queryParams.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.from_date).format('YYYY-MM-DD');
                this.queryParams.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.queryParams.to_date).format('YYYY-MM-DD');
                obj = this.queryParams;
            }
            else {
                this.attendanceFetchForm.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.from_date).format('YYYY-MM-DD');
                this.attendanceFetchForm.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.attendanceFetchForm.to_date).format('YYYY-MM-DD');
                obj = this.attendanceFetchForm;
            }
            let url = '/api/v1/reports/attendance/downloadAttendanceReport';
            this._httpService.postData(url, obj).subscribe((res) => {
                this.auth.hideLoader();
                if (res) {
                    let resp = res;
                    if (resp.document != "") {
                        let byteArr = this.commonService.convertBase64ToArray(resp.document);
                        let fileName = res.docTitle; //res.docTitle;
                        let file = new Blob([byteArr], { type: 'application/pdf;charset=utf-8;' });
                        let url = URL.createObjectURL(file);
                        let dwldLink = document.getElementById('downloadFileClick');
                        dwldLink.setAttribute("href", url);
                        dwldLink.setAttribute("download", fileName);
                        document.body.appendChild(dwldLink);
                        dwldLink.click();
                    }
                    else {
                        this.msgService.showErrorMessage('info', '', "Document does not have any data!");
                    }
                }
                else {
                    this.msgService.showErrorMessage('info', '', "Document does not have any data!");
                }
            }, err => {
                this.msgService.showErrorMessage('error', '', err.error.message);
                this.auth.hideLoader();
            });
        }
    };
    AttendanceReportComponent.ctorParameters = () => [
        { type: _services_attendance_report_service_service__WEBPACK_IMPORTED_MODULE_7__["AttendanceReportServiceService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
        { type: ___WEBPACK_IMPORTED_MODULE_2__["MessageShowService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"] }
    ];
    AttendanceReportComponent.propDecorators = {
        attendanceTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['attendanceTable', { static: false },] }],
        xlsDownloader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['xlsDownloader', { static: false },] }]
    };
    AttendanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance-report',
            template: __importDefault(__webpack_require__(/*! raw-loader!./attendanceReport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/attendance-report/attendanceReport.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./attendanceReport.component.scss */ "./src/app/components/course-module/reports/attendance-report/attendanceReport.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_attendance_report_service_service__WEBPACK_IMPORTED_MODULE_7__["AttendanceReportServiceService"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            ___WEBPACK_IMPORTED_MODULE_2__["MessageShowService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"]])
    ], AttendanceReportComponent);
    return AttendanceReportComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/reports/biometric/biometric.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/course-module/reports/biometric/biometric.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.filter-form {\n  padding-top: 40px;\n}\np {\n  font-weight: 300;\n}\n.caret {\n  font-family: FontAwesome;\n}\n.excel {\n  font-family: FontAwesome;\n}\n.userDisplay {\n  font-weight: 100;\n  font-size: 19px;\n  color: blue;\n}\n.userIdDisplay {\n  font-weight: 80;\n  font-size: 13px;\n  color: blue;\n}\n.searchName {\n  height: 35px;\n  width: 200px;\n  padding: 7px 10px;\n  float: right;\n  margin-bottom: 5px;\n  margin-top: -30px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.btnStudent {\n  margin: 5px;\n}\n.popup-content {\n  position: relative;\n  left: 5%;\n}\n.popup-content table {\n  overflow-y: auto;\n  width: 95%;\n}\n.popup-content h5 {\n  font-weight: 200px;\n  text-align: center;\n}\n.popup-content h2 {\n  text-align: center;\n}\n.main-student-table ::-webkit-scrollbar {\n  display: block;\n}\n.main-student-table .student-table {\n  overflow-x: auto;\n  height: 400px;\n}\n.main-student-table .tablePopup {\n  overflow: hidden;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  height: auto;\n  background: #EEEEF4;\n}\n.main-student-table .tablePopup .absentView {\n  overflow: auto;\n  position: relative;\n  top: 0px;\n  height: 330px;\n  margin: 10px;\n  padding-bottom: 10px;\n}\n.main-student-table .tablePopup .absentView .field-checkbox-wrapper {\n  width: 22px !important;\n  overflow: hidden;\n  box-sizing: border-box;\n  height: 22px !important;\n  padding-left: 17px !important;\n  margin-bottom: 0;\n  margin-left: 5px;\n  background: transparent;\n  border-radius: 2px;\n  margin-top: 5px;\n  margin-right: 5px;\n  border: 2px solid darkgray;\n}\n.main-student-table .tablePopup .absentView .field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 22px;\n  height: 22px;\n  z-index: 1;\n}\n.btn {\n  display: inline-block;\n}\n.inner-main {\n  display: inline;\n  padding: 12px 0px;\n}\n.inner-main .inner-btn {\n  display: inline-block;\n}\n.inner-main .outer-btn {\n  float: right;\n}\n.field-wrapper.datePickerBox .form-ctrl {\n  background: transparent;\n}\n.form-date .field-wrapper {\n  position: relative;\n}\n.form-date .field-wrapper.datePickerBox .form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.form-date .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 21px;\n  top: 31px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.form:hover {\n  cursor: pointer;\n}\n.change .field-wrapper {\n  position: relative;\n}\n.change .field-wrapper.datePickerBox .form-ctrl:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 21px;\n  top: 31px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.dateBox .field-wrapper {\n  position: relative;\n}\n.dateBox .field-wrapper.datePickerBox .form-ctrl:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 21px;\n  top: 32px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.main {\n  margin-top: -25px;\n}\n.main .form-wrapper {\n  position: relative;\n}\n.main .form-wrapper.datePickerBox .side-form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.main .form-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 0;\n  top: 27px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.form-field {\n  display: inline-block;\n  width: 80%;\n}\n.form-date {\n  display: inline-block;\n  width: 40%;\n}\n.table-content {\n  height: 350px;\n}\n.table-content ::-webkit-scrollbar {\n  display: block;\n}\n.table-content .table-heading {\n  overflow-x: auto;\n  height: 350px;\n}\n.filter-box {\n  margin-bottom: 7px;\n  margin-top: 40px;\n}\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  width: 20%;\n  box-sizing: border-box;\n  margin-right: 10px;\n  float: right;\n  height: 35px;\n  font-size: 14px;\n}\n.form-wrapper .datePickerBox {\n  padding-right: 10px;\n  padding-bottom: 10px;\n  width: 10%;\n}\n.records {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px !important;\n  text-align: center;\n}\n.popup-header-content h2 {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.popup-header-content h5 {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.filterSectionWrapper {\n  border-radius: 4px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.background {\n  padding: 1%;\n  overflow: auto;\n}\n.background ::-webkit-scrollbar {\n  display: block;\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.middle-section .middle-top h2 {\n  color: black;\n  font-weight: unset;\n  padding-top: 20px;\n}\n.form-wrapper {\n  background: transparent;\n  margin: 15px 0px;\n  align-content: center;\n}\n.form-wrapper .btn {\n  margin-top: -15px;\n  width: 70%;\n}\n.form-wrapper label {\n  padding-left: 10px;\n  font-size: 12px;\n  font-weight: 400;\n  color: 0084f6;\n  text-decoration: none;\n  text-transform: uppercase;\n  -webkit-font-smoothing: antialiased;\n  width: 100%;\n}\n.form-wrapper .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding-left: 10px;\n  margin-left: 10px;\n  height: 30px;\n  padding: 0px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n.form-wrapper .side-form-ctrl.bsDatepicker {\n  padding-left: 10px;\n  margin-left: 10px;\n  width: 100%;\n}\n/*popup scss*/\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 100%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n  margin-left: 10%;\n}\n.popup-wrapper span {\n  font-weight: 300;\n  display: inline-block;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.prepare {\n  margin-top: -25px;\n}\n.prepare .form-wrapper {\n  position: relative;\n}\n.prepare .form-wrapper.datePickerBox .side-form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.prepare .form-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 0;\n  top: 20px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.borderWithText :horizontal {\n  display: block;\n}\n.common-field {\n  margin-top: 0px;\n  height: 500px;\n  background-color: #efefef;\n}\n.common-field .student-table {\n  height: 450px;\n  overflow: hidden;\n}\n.common-field .student-table ::-webkit-scrollbar {\n  display: block;\n}\n.common-field .student-table table thead tr th {\n  padding: 13px 0px;\n}\n.common-field .student-table table tbody tr td {\n  padding: 0px 0px;\n}\n.common-field .student-table .common-elements {\n  position: relative;\n  top: 2%;\n  left: 10px;\n  bottom: 10%;\n  width: 99%;\n  height: 380px;\n  overflow-y: auto;\n}\n.students .student-table ::-webkit-scrollbar {\n  display: block;\n}\n.students .student-table table thead tr th {\n  padding: 13px 0px;\n}\n.students .student-table table tbody tr td {\n  padding: 0px 0px;\n}\n.students .student-table .common-elements {\n  height: 450px;\n  overflow-y: auto;\n}\n.students .student-table .student-elements {\n  position: relative;\n  top: 10%;\n  left: 0px;\n  bottom: 10%;\n  width: 100%;\n  overflow-y: auto;\n}\n.tablePopup table thead tr th {\n  padding: 13px 0px;\n}\n.records {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.popup-content ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 80%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n.skeleton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n.form-wrapper {\n  position: relative;\n}\n.form-wrapper.datePickerBox .side-form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.form-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 0;\n  top: 20px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.extraMargin {\n  margin-left: -3px !important;\n  margin-right: -3px !important;\n}\n.form-ctrl {\n  border-radius: 4px;\n}\n.field-wrapper .datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 20px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvYmlvbWV0cmljL2Jpb21ldHJpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FDckJ4QjtBRGpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FDbkI1QjtBQXBHQTtFQUNJLGlCQUFpQjtBQXVHckI7QUFwR0E7RUFDSSxnQkFBZ0I7QUF1R3BCO0FBcEdBO0VBQ0ksd0JBQXdCO0FBdUc1QjtBQXBHQTtFQUNJLHdCQUF3QjtBQXVHNUI7QUFwR0E7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUF1R2Y7QUFwR0E7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7QUF1R2Y7QUFwR0E7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBdUd0QjtBQXBHQTtFQUNJLFdBQVc7QUF1R2Y7QUFsR0E7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtBQXFHWjtBQXZHQTtFQUlRLGdCQUFnQjtFQUNoQixVQUFVO0FBdUdsQjtBQTVHQTtFQVFRLGtCQUFrQjtFQUNsQixrQkFBa0I7QUF3RzFCO0FBakhBO0VBWVEsa0JBQWtCO0FBeUcxQjtBQXJHQTtFQUVRLGNBQWM7QUF1R3RCO0FBekdBO0VBS1EsZ0JBQWdCO0VBQ2hCLGFBQWE7QUF3R3JCO0FBOUdBO0VBU1EsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtBQXlHM0I7QUF0SEE7RUFlWSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtBQTJHaEM7QUEvSEE7RUFzQmdCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0FBNkcxQztBQTlJQTtFQW9DZ0IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQThHMUI7QUF4R0E7RUFDSSxxQkFBcUI7QUEyR3pCO0FBeEdBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtBQTJHckI7QUE3R0E7RUFJUSxxQkFBcUI7QUE2RzdCO0FBakhBO0VBT1EsWUFBWTtBQThHcEI7QUEzR0E7RUFFSSx1QkFBdUI7QUE2RzNCO0FBM0dBO0VBRVEsa0JBQWtCO0FBNkcxQjtBQS9HQTtFQUtnQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1QkFBdUI7QUE4R3ZDO0FBdEhBO0VBV2dCLFdBQVc7RUFDWCx5Q0FBc0U7RUFDdEUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBK0cxQjtBQXpHQTtFQUNJLGVBQWU7QUE0R25CO0FBekdBO0VBRVEsa0JBQWtCO0FBMkcxQjtBQTdHQTtFQU1vQixXQUFXO0VBQ1gseUNBQXNFO0VBQ3RFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQTJHOUI7QUFuR0E7RUFFUSxrQkFBa0I7QUFxRzFCO0FBdkdBO0VBTW9CLFdBQVc7RUFDWCx5Q0FBc0U7RUFDdEUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBcUc5QjtBQTlGQTtFQUNJLGlCQUFpQjtBQWlHckI7QUFsR0E7RUFHUSxrQkFBa0I7QUFtRzFCO0FBdEdBO0VBTWdCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QjtBQW9HdkM7QUE3R0E7RUFZZ0IsV0FBVztFQUNYLHlDQUFzRTtFQUN0RSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFxRzFCO0FBL0ZBO0VBQ0kscUJBQXFCO0VBQ3JCLFVBQVU7QUFrR2Q7QUEvRkE7RUFDSSxxQkFBcUI7RUFDckIsVUFBVTtBQWtHZDtBQS9GQTtFQUNJLGFBQWE7QUFrR2pCO0FBbkdBO0VBR1EsY0FBYztBQW9HdEI7QUF2R0E7RUFNUSxnQkFBZ0I7RUFDaEIsYUFBYTtBQXFHckI7QUFqR0E7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBb0dwQjtBQWpHQTtFQUVRLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFtR3ZCO0FBL0ZBO0VBRVEsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixVQUFVO0FBaUdsQjtBQTdGQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQWdHdEI7QUE3RkE7RUFFUSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQStGM0I7QUFuR0E7RUFPUSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQWdHM0I7QUE1RkE7RUFFSSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQThGakM7QUEzRkE7RUFDSSxXQUFXO0VBQ1gsY0FBYztBQThGbEI7QUFoR0E7RUFJUSxjQUFjO0FBZ0d0QjtBQTVGQTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0JBQXNCO0FBK0YxQjtBQWxHQTtFQU1ZLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBZ0c3QjtBQTNGQTtFQUNJLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBOEZ6QjtBQWpHQTtFQUtRLGlCQUFpQjtFQUNqQixVQUFVO0FBZ0dsQjtBQXRHQTtFQVNRLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG1DQUFtQztFQUNuQyxXQUFXO0FBaUduQjtBQWpIQTtFQW1CUSxpQkFBaUI7RUFDakIsK0NBQXlEO0VBQ3pELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBa0dwQjtBQTlIQTtFQThCWSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFvR3ZCO0FBL0ZBLGFBQUE7QUFFQTtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBS1YsNEJBQTRCO0FBaUdoQztBQWpIQTtFQWtCUSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLE9BQU87RUFDUCxTQUFTO0VBQ1QsWUFBWTtBQW1HcEI7QUEvRkE7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQWtHcEI7QUF4R0E7RUFRUSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBb0c3QjtBQTdHQTtFQVlRLG1CQUFtQjtFQUNuQixlQUFlO0FBcUd2QjtBQWxIQTtFQWdCUSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBc0d4QjtBQWxHQTtFQUNJLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FBcUdqQjtBQWhIQTtFQWFRLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFFBQVE7QUF1R2hCO0FBdkhBO0VBbUJRLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVk7QUF3R3BCO0FBOUhBO0VBeUJRLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7QUF5R2pCO0FBcklBO0VBK0JRLFdBQVc7QUEwR25CO0FBeklBO0VBaUNZLGVBQWU7RUFDZixpQkFBaUI7QUE0RzdCO0FBcEdBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUF1R3ZCO0FBcEdBO0VBQ0ksVUFBVTtFQUNWLG1CQUFtQjtBQXVHdkI7QUFyR0E7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFLbEIsNEJBQTRCO0FBd0doQztBQXZIQTtFQWlCUSxZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWM7QUEwR3RCO0FBdEdBO0VBQ0ksT0FBTztFQUNQLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUtaLDRCQUE0QjtBQXlHaEM7QUF0R0E7RUFDSSxpQkFBaUI7QUF5R3JCO0FBMUdBO0VBR1Esa0JBQWtCO0FBMkcxQjtBQTlHQTtFQU1nQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1QkFBdUI7QUE0R3ZDO0FBckhBO0VBWWdCLFdBQVc7RUFDWCx5Q0FBc0U7RUFDdEUsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBNkcxQjtBQXZHQTtFQUVRLGNBQWM7QUF5R3RCO0FBckdBO0VBQ0ksZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBeUI7QUF3RzdCO0FBM0dBO0VBS1EsYUFBYTtFQUNiLGdCQUFnQjtBQTBHeEI7QUFoSEE7RUFRWSxjQUFjO0FBNEcxQjtBQXBIQTtFQWN3QixpQkFBaUI7QUEwR3pDO0FBeEhBO0VBcUJ3QixnQkFBZ0I7QUF1R3hDO0FBNUhBO0VBMkJZLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtBQXFHNUI7QUFoR0E7RUFHWSxjQUFjO0FBaUcxQjtBQXBHQTtFQVN3QixpQkFBaUI7QUErRnpDO0FBeEdBO0VBZ0J3QixnQkFBZ0I7QUE0RnhDO0FBNUdBO0VBc0JZLGFBQWE7RUFDYixnQkFBZ0I7QUEwRjVCO0FBakhBO0VBMEJZLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0FBMkY1QjtBQXRGQTtFQUtvQixpQkFBaUI7QUFxRnJDO0FBOUVBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFpRnRCO0FBOUVBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0FBaUZkO0FBOUVBO0VBQ0ksU0FBUztBQWlGYjtBQS9FQTtFQUVRLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztBQWlGbkI7QUF6RUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBUmdCO0VBU2hCLGtCQUFrQjtBQTRFdEI7QUFsRkE7RUFRUSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiwyREFBOEU7RUFDOUUsbURBQTJDO1VBQTNDLDJDQUEyQztBQThFbkQ7QUExRUE7RUFDSSxrQkFBa0I7QUE2RXRCO0FBOUVBO0VBSVksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdUJBQXVCO0FBOEVuQztBQXJGQTtFQVVZLFdBQVc7RUFDWCx5Q0FBc0U7RUFDdEUsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBK0V0QjtBQXpFQTtFQUNJLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUE0RWpDO0FBekVBO0VBQ0Usa0JBQWtCO0FBNEVwQjtBQTFFQTtFQUVJLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBNEVkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvYmlvbWV0cmljL2Jpb21ldHJpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG4uZmlsdGVyLWZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG5wIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY2FyZXQge1xuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbn1cblxuLmV4Y2VsIHtcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG59XG5cbi51c2VyRGlzcGxheSB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbi51c2VySWREaXNwbGF5IHtcbiAgICBmb250LXdlaWdodDogODA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiBibHVlO1xufVxuXG4uc2VhcmNoTmFtZSB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnRuU3R1ZGVudCB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi5ib3gge31cblxuLnBvcHVwLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1JTtcbiAgICB0YWJsZSB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLm1haW4tc3R1ZGVudC10YWJsZSB7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc3R1ZGVudC10YWJsZSB7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxuICAgIC50YWJsZVBvcHVwIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICNFRUVFRjQ7XG4gICAgICAgIC5hYnNlbnRWaWV3IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmlubmVyLW1haW4ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgICAuaW5uZXItYnRuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAub3V0ZXItYnRuIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cbi5maWVsZC13cmFwcGVyLmRhdGVQaWNrZXJCb3ggLmZvcm0tY3RybCB7XG4gICBcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtLWRhdGUge1xuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmLmRhdGVQaWNrZXJCb3gge1xuICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAzMXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9ybTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hhbmdlIHtcbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4uZGF0ZUJveHtcbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1haW4ge1xuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgIC5mb3JtLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICYuZGF0ZVBpY2tlckJveCB7XG4gICAgICAgICAgICAuc2lkZS1mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMjdweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogODAlO1xufVxuXG4uZm9ybS1kYXRlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLnRhYmxlLWNvbnRlbnQge1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAudGFibGUtaGVhZGluZyB7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgfVxufVxuXG4uZmlsdGVyLWJveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5zZWFyY2gtZmlsdGVyLXdyYXBwZXIge1xuICAgIC5ub3JtYWwtZmllbGQge1xuICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cblxuLmZvcm0td3JhcHBlciB7XG4gICAgLmRhdGVQaWNrZXJCb3gge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG59XG5cbi5yZWNvcmRzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9wdXAtaGVhZGVyLWNvbnRlbnQge1xuICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICBoNSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG5cbi5maWx0ZXJTZWN0aW9uV3JhcHBlciB7XG4gICAgLy8gYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgcGFkZGluZzogMSU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLm1pZGRsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC5taWRkbGUtdG9wIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHVuc2V0O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb3JtLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMTVweCAwcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIC5idG4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IDAwODRmNjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5zaWRlLWZvcm0tY3RybCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNDE5NjA3ODQzMTM3MjU0OSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAmLmJzRGF0ZXBpY2tlciB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKnBvcHVwIHNjc3MqL1xuXG4ucG9wdXBXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjUpO1xuICAgIHotaW5kZXg6IDEwMDsgLy8gZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAucG9wdXAge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7IC8vIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiA1JTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87IC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG59XG5cbi5wb3B1cC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7IC8vIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDFweCA4cHggMjBweCA1cHggIzljOWM5YztcbiAgICB0cmFuc2l0aW9uOiB1bnNldDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbi5jbG9zZVBvcHVwIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJi50b3BMZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgfVxuICAgICYuYm90dG9tTGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICAuY2xzLTEge31cbiAgICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZmFkZUluIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4ucG9wdXBXcmFwcGVyTW9iIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgLy8gb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAuY2xvc2VQb3B1cCB7XG4gICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgdG9wOiAtMjdweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4ucG9wdXAtbW9iIHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICBib3R0b206IC03MCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG59XG5cbi5wcmVwYXJlIHtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmLmRhdGVQaWNrZXJCb3gge1xuICAgICAgICAgICAgLnNpZGUtZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib3JkZXJXaXRoVGV4dCB7XG4gICAgOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5jb21tb24tZmllbGQge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgLnN0dWRlbnQtdGFibGUge1xuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY29tbW9uLWVsZW1lbnRzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMiU7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAxMCU7XG4gICAgICAgICAgICB3aWR0aDogOTklO1xuICAgICAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zdHVkZW50cyB7XG4gICAgLnN0dWRlbnQtdGFibGUge1xuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY29tbW9uLWVsZW1lbnRzIHtcbiAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5zdHVkZW50LWVsZW1lbnRzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAxMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgLy9oZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlUG9wdXAge1xuICAgIHRhYmxlIHtcbiAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTNweCAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucmVjb3JkcyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcHVwV3JhcHBlck1vYi5zaG93UG9wdXBNb2Ige1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIC5wb3B1cC1tb2Ige1xuICAgIGJvdHRvbTogMDtcbn0gLy8vLy8vLy8vLy9cbi5wb3B1cC1jb250ZW50IHtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA3cHg7XG4gICAgICAgIGhlaWdodDogN3B4O1xuICAgIH1cbn1cblxuJGNvbG9yLWJhc2U6ICNlZmVmZWY7XG4kY29sb3ItYmFzZTogI2VmZWZlZjtcbiRjb2xvci1oaWdobGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLWJhc2UsXG43JSk7XG4uc2tlbGV0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1iYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkY29sb3ItYmFzZSwgJGNvbG9yLWhpZ2hsaWdodCwgJGNvbG9yLWJhc2UpO1xuICAgICAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cbn1cblxuLmZvcm0td3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICYuZGF0ZVBpY2tlckJveCB7XG4gICAgICAgIC5zaWRlLWZvcm0tY3RybCB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8vIGJ5IGxheG1pXG4uZXh0cmFNYXJnaW57XG4gICAgbWFyZ2luLWxlZnQ6IC0zcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zcHggIWltcG9ydGFudDtcbn1cblxuLmZvcm0tY3RybHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmZpZWxkLXdyYXBwZXIge1xuICAuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnKSBuby1yZXBlYXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/course-module/reports/biometric/biometric.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/course-module/reports/biometric/biometric.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BiometricComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiometricComponent", function() { return BiometricComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../.. */ "./src/app/index.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/excel.service */ "./src/app/services/excel.service.ts");
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




let BiometricComponent = /** @class */ (() => {
    let BiometricComponent = class BiometricComponent {
        constructor(appc, _http, auth, excelService) {
            this.appc = appc;
            this._http = _http;
            this.auth = auth;
            this.excelService = excelService;
            this.masterCourse = [];
            this.studentsData = [];
            this.monthAttendance = [];
            this.courses = [];
            this.othersData = [];
            this.weekAttendance = [];
            this.studentsDisplayData = [];
            this.range = [];
            this.masters = [];
            this.subjects = [];
            this.absentiesRecords = [];
            this.findName = [];
            this.masterCoursePro = [];
            this.batchPro = [];
            this.coursePro = [];
            this.nameOfPeople = [];
            this.absendStudentData = [];
            this.dummyArr = [0, 1, 2, 0, 1, 2];
            this.columnMaps = [0, 1, 2, 3, 4, 5, 6];
            this.columnMapRecords = [0, 1, 2];
            this.searchData = [];
            this.studentArray = [];
            //need for selected keys
            this.displayKeys = ['student_id', 'student_name', 'doj'];
            this.master = "";
            this.students = "";
            this.popupCtrl = "-1";
            this.PageIndex = 1;
            this.pagedisplaysize = 10;
            this.direction = 0;
            this.searchText = "";
            this.sortedBy = "";
            this.studentName = "";
            this.teacherName = "";
            this.customName = "";
            this.studentId = "";
            this.teacherId = "";
            this.customId = "";
            this.fullResponse = [];
            this.masterCourseNames = false;
            this.isProfessional = true;
            this.addReportPopUp = false;
            this.addAcademicPopUp = false;
            this.showStudentTable = false;
            this.showTeachersTable = false;
            this.showCustomTable = false;
            this.showTable = false;
            this.showMonth = false;
            this.addAbsentiesPopup = false;
            this.showButton = true;
            this.showRange = false;
            this.showWeek = false;
            this.absentTable = false;
            this.dataStatus = false;
            this.showTeacherButton = true;
            this.searchflag = false;
            this.sortedenabled = true;
            this.showTableEvent = false;
            this.showRangeValue = false;
            this.showNameFilter = true;
            this.showCourseFilter = true;
            this.absentStudentPopUp = false;
            this.getData = {
                school_id: -1,
                name: "",
                is_active_status: 1,
                standard_id: -1,
                batch_id: -1,
                master_course_name: "",
                course_id: -1,
                subject_id: -1,
                user_Type: 1,
                biometric_attendance_date: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD')
            };
            this.getAbsentiesData = {
                batch_id: -1,
                course_id: -1,
                from_date: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD'),
                institution_id: this.institute_id,
                master_course_name: -1,
                standard_id: -1,
                subject_id: -1
            };
            this.getAllData = {
                from_date: "",
                institute_id: this.institute_id,
                to_date: "",
                user_id: ""
            };
            this.schoolModel = false;
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            // changes by Nalini - to handle school model conditions
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
        }
        ngOnInit() {
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            this.getMasterCourses();
        }
        fetchAbsentiesReport() {
            this.absentStudentPopUp = true;
            this.getMasterCourses();
        }
        toggleCheckbox(value) {
            console.log(value);
            let index = this.studentArray.indexOf(value);
            if (index == -1) {
                this.studentArray.push(value);
            }
            else {
                this.studentArray.splice(index, value);
            }
        }
        sendSMSToAbsenties() {
            if (confirm("Are u sure, you want to send sms to Absent students?")) {
                this.auth.showLoader();
                let obj = {
                    "from_date": moment__WEBPACK_IMPORTED_MODULE_1__(this.getAbsentiesData.from_date).format('YYYY-MM-DD'),
                    "institution_id": sessionStorage.getItem('institute_id'),
                    "studentArray": this.studentArray
                };
                this._http.postData("/api/v1/attendance/sendSMSToAbsenties", obj).subscribe((data) => {
                    this.auth.hideLoader();
                    if (data.statusCode == 200) {
                        let obj = {
                            type: 'success',
                            title: '',
                            body: "SMS sent successfully !"
                        };
                        this.appc.popToast(obj);
                    }
                }, (error) => {
                    this.auth.hideLoader();
                    let msg = {
                        type: "error",
                        body: error.error.message
                    };
                    this.appc.popToast(msg);
                });
            }
        }
        closeAbsentiesPopup() {
            this.absentStudentPopUp = false;
        }
        getMasterCourses() {
            this.getData.biometric_attendance_date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
            this.dataStatus = true;
            this.batchPro = [];
            this.masterCoursePro = [];
            if (this.isProfessional) {
                const url = "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + this.getData.standard_id + "&subject_id=" + this.getData.subject_id + "&assigned=N";
                this._http.getData(url).subscribe((data) => {
                    this.auth.hideLoader();
                    this.masterCoursePro = data.standardLi;
                    this.batchPro = data.batchLi;
                }, (error) => {
                    this.auth.hideLoader();
                    this.dataStatus = false;
                    return error;
                });
            }
            // this.getMasterCourse();
            this.getMasterCourseResponse();
        }
        getMasterCourse() {
            const url = "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
            this._http.getData(url).subscribe((data) => {
                this.getData.master_course_name = "";
                this.getData.course_id = -1;
                this.masterCourse = data;
                this.auth.hideLoader();
            }, (error) => {
                this.auth.hideLoader();
                return error;
            });
        }
        getMasterCourseResponse() {
            let url = "/api/v1/courseMaster/master-course-list/" + this.institute_id + '?is_active_not_expire=Y&sorted_by=course_name';
            let keys;
            this.auth.showLoader();
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.fullResponse = data.result;
                keys = Object.keys(data.result);
                console.log("keys", keys);
                for (let i = 0; i < keys.length; i++) {
                    this.masterCourse.push(keys[i]);
                }
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        switchFilter() {
            this.studentsData = [];
            this.getData.name = "";
            this.masterCourseNames = true;
            this.showNameFilter = false;
            this.totalRow = this.studentsData.length;
            this.PageIndex = 1;
            this.fetchTableDataByPage(this.PageIndex);
        }
        showNameWiseFilter() {
            this.studentsData = [];
            this.getData.standard_id = -1;
            this.getData.master_course_name = "";
            this.getData.course_id = -1;
            this.masterCourseNames = false;
            this.showNameFilter = true;
            this.totalRow = this.studentsData.length;
            this.PageIndex = 1;
            this.fetchTableDataByPage(this.PageIndex);
        }
        updateCourseList(ev) {
            this.courses = [];
            let temp = this.fullResponse[this.getAbsentiesData.master_course_name];
            for (let i = 0; i < temp.length; i++) {
                this.courses.push(temp[i]);
            }
        }
        getCourses(i) {
            this.dataStatus = true;
            this.getData.name = "";
            this.getData.subject_id = -1;
            this.getAbsentiesData.course_id = -1;
            this.getAbsentiesData.subject_id = -1;
            // this.batchPro = [];
            this.coursePro = [];
            this.courses = [];
            this.subjects = [];
            if (this.isProfessional) {
                const url = "/api/v1/subjects/standards/" + i;
                this._http.getData(url).subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    this.coursePro = data;
                }, (error) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    return error;
                });
            }
            else {
                let temp = this.fullResponse[this.getData.master_course_name];
                for (let i = 0; i < temp.length; i++) {
                    this.courses.push(temp[i]);
                }
                // const url = "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + i
                // this._http.getData(url).subscribe(
                //   (data: any) => {
                //     this.dataStatus = false;
                //     this.auth.hideLoader();
                //     this.courses = data.coursesList;
                //   },
                //   (error) => {
                //     this.dataStatus = false;
                //     this.auth.hideLoader();
                //     return error;
                //   }
                // )
            }
        }
        getSubjects(i) {
            this.dataStatus = true;
            const url = "/api/v1/courseMaster/fetch/courses/" + this.institute_id + "/" + i;
            this._http.getData(url).subscribe((data) => {
                this.dataStatus = false;
                this.auth.hideLoader();
                this.subjects = data.batchesList;
            }, (error) => {
                this.dataStatus = false;
                this.auth.hideLoader();
                return error;
            });
        }
        fetchDataByName() {
            this.showTeacherButton = true;
            if (this.getData.user_Type == 1) {
                this.studentsDisplayData = [];
                this.showTeacherButton = true;
                this.showStudentTable = true;
                this.showTeachersTable = false;
                this.showCustomTable = false;
                this.dataStatus = true;
                if (this.isProfessional) {
                    this.getData.biometric_attendance_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.getData.biometric_attendance_date).format('YYYY-MM-DD');
                    const url = "/api/v1/students/manage/" + this.institute_id;
                    this._http.postData(url, this.getData).subscribe((data) => {
                        this.auth.hideLoader();
                        this.dataStatus = false;
                        this.studentsData = data;
                        this.totalRow = data.length;
                        this.PageIndex = 1;
                        this.fetchTableDataByPage(this.PageIndex);
                    }, (error) => {
                        this.dataStatus = false;
                        this.auth.hideLoader();
                        return error;
                    });
                }
                else {
                    this.getData.biometric_attendance_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.getData.biometric_attendance_date).format('YYYY-MM-DD');
                    const url = "/api/v1/students/manage/" + this.institute_id;
                    this._http.postData(url, this.getData).subscribe((data) => {
                        this.auth.hideLoader();
                        this.dataStatus = false;
                        this.studentsData = data;
                        this.totalRow = data.length;
                        this.PageIndex = 1;
                        this.fetchTableDataByPage(this.PageIndex);
                    }, (error) => {
                        this.dataStatus = false;
                        this.auth.hideLoader();
                        return error;
                    });
                }
            }
            else if (this.getData.user_Type == 3) {
                this.dataStatus = true;
                this.showTeacherButton = true;
                this.showTeachersTable = true;
                this.showStudentTable = false;
                this.showCustomTable = false;
                this.getData.biometric_attendance_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.getData.biometric_attendance_date).format('YYYY-MM-DD');
                const url = "/api/v1/teachers/manage/" + this.institute_id;
                this._http.postData(url, this.getData).subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    this.studentsData = data;
                    this.totalRow = data.length;
                    this.PageIndex = 1;
                    this.fetchTableDataByPage(this.PageIndex);
                }, (error) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    return error;
                });
            }
            else {
                this.showTeacherButton = true;
                this.showStudentTable = false;
                this.showTeachersTable = false;
                this.showCustomTable = true;
                this.getData.biometric_attendance_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.getData.biometric_attendance_date).format('YYYY-MM-DD');
                let isActive = this.getData.is_active_status == 1 ? "Y" : "N";
                const url = "/api/v1/profiles/all/" + this.institute_id + "?active=" + isActive;
                this._http.postData(url, this.getData).subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    this.studentsData = data;
                    this.totalRow = data.length;
                    this.PageIndex = 1;
                    this.fetchTableDataByPage(this.PageIndex);
                }, (error) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    return error;
                });
            }
        }
        viewOlderRecords(i) {
            this.studentName = i.student_name;
            this.teacherName = i.teacher_name;
            this.customName = i.name;
            this.studentId = i.student_disp_id;
            this.teacherId = i.teacher_id;
            this.customId = i.userid;
            console.log(this.teacherName);
            this.getAllData.user_id = i.user_id;
            this.getAllData.institute_id = this.institute_id;
            this.addReportPopUp = true;
            this.dataStatus = true;
            const url = "/api/v1/biometricAttendance/report";
            this._http.postData(url, this.getAllData).subscribe((data) => {
                this.dataStatus = false;
                this.auth.hideLoader();
            }, (error) => {
                this.dataStatus = false;
                this.auth.hideLoader();
                return error;
            });
        }
        showAttendanceReport() {
            this.showMonth = false;
            this.showWeek = false;
            this.showRange = false;
            this.addReportPopUp = true;
        }
        closeReportPopup() {
            this.addReportPopUp = false;
            this.popupCtrl = "-1";
            this.showRangeValue = false;
            this.showTableEvent = false;
            this.getAllData.from_date = "";
            this.getAllData.to_date = "";
            this.range = [];
        }
        showMaster(i) {
            if (i == 1) {
                this.showCourseFilter = true;
                this.studentsData = [];
            }
            else {
                this.getData.standard_id = -1;
                this.getData.subject_id = -1;
                this.getData.batch_id = -1;
                this.showCourseFilter = false;
                this.studentsData = [];
            }
        }
        fetchAbsentsStudentsData() {
            this.auth.showLoader();
            this.getAbsentiesData.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.getAbsentiesData.from_date).format('YYYY-MM-DD');
            this.getAbsentiesData.institution_id = this.institute_id;
            let url = "/api/v1/attendance/fetchAbsentsStudentsData";
            this._http.postData(url, this.getAbsentiesData).subscribe((data) => {
                console.log(data);
                if (data != null) {
                    this.absendStudentData = data;
                }
                else {
                    this.absendStudentData = [];
                }
                this.auth.hideLoader();
            }, (error) => {
                this.auth.hideLoader();
                return error;
            });
        }
        futureDateValid(selectDate) {
            if (moment__WEBPACK_IMPORTED_MODULE_1__(selectDate).diff(moment__WEBPACK_IMPORTED_MODULE_1__()) > 0) {
                let msg = {
                    type: "info",
                    body: "You cannot select future date"
                };
                this.appc.popToast(msg);
                this.auth.hideLoader();
                this.getData.biometric_attendance_date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
                this.getAllData.from_date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
            }
        }
        courseChange() {
            if ((this.getData.master_course_name == "" && !this.isProfessional) || (this.getData.standard_id == -1 && this.isProfessional)) {
                let msg = {
                    type: "info",
                    body: "Select Master Course First !"
                };
                this.appc.popToast(msg);
                this.auth.hideLoader();
            }
        }
        courseEmpty() {
            if (this.getData.name != "") {
                this.getData.standard_id = -1;
                this.getData.batch_id = -1;
                this.getData.subject_id = -1;
            }
        }
        sortedData(ev) {
            this.sortedenabled = true;
            if (this.sortedenabled) {
                (this.direction == 0 || this.direction == -1) ? (this.direction = 1) : (this.direction = -1);
                this.sortedBy = ev;
                this.studentsData = this.studentsData.sort((a, b) => {
                    if (a[ev] < b[ev]) {
                        return -1 * this.direction;
                    }
                    else if (a[ev] > b[ev]) {
                        return this.direction;
                    }
                    else {
                        return 0;
                    }
                });
                this.PageIndex = 1;
                this.fetchTableDataByPage(this.PageIndex);
            }
        }
        getCaretVisiblity(e) {
            if (this.sortedenabled && this.sortedBy == e) {
                return true;
            }
            else {
                return false;
            }
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                this.PageIndex = 1;
                let searchData;
                searchData = this.studentsData.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.searchData = searchData;
                this.totalRow = searchData.length;
                this.searchflag = true;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else {
                this.searchflag = false;
                this.fetchTableDataByPage(this.PageIndex);
            }
        }
        //pagination functions
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.pagedisplaysize * (index - 1);
            this.studentsDisplayData = this.getDataFromDataSource(startindex);
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
            if (this.searchflag) {
                let t = this.searchData.slice(startindex, startindex + this.pagedisplaysize);
                return t;
            }
            else {
                let d = this.studentsData.slice(startindex, startindex + this.pagedisplaysize);
                return d;
            }
        }
        dateValidationForFuture(e) {
            //console.log(e);
            let today = moment__WEBPACK_IMPORTED_MODULE_1__(new Date);
            let selected = moment__WEBPACK_IMPORTED_MODULE_1__(e);
            let diff = moment__WEBPACK_IMPORTED_MODULE_1__(selected.diff(today))['_i'];
            if (diff <= 0) {
            }
            else {
                this.getData.biometric_attendance_date = moment__WEBPACK_IMPORTED_MODULE_1__(new Date).format('YYYY-MM-DD');
                this.getAllData.to_date = moment__WEBPACK_IMPORTED_MODULE_1__(new Date).format('YYYY-MM-DD');
                this.getAllData.from_date = moment__WEBPACK_IMPORTED_MODULE_1__(new Date).format('YYYY-MM-DD');
                let msg = {
                    type: "info",
                    body: "Future date is not allowed"
                };
                this.auth.hideLoader();
                this.dataStatus = false;
                this.appc.popToast(msg);
            }
        }
        // ====================================================================================================================
        getAllDataService(from_date, to_date) {
            this.range = [];
            this.dataStatus = true;
            this.showTableEvent = false;
            let diff = moment__WEBPACK_IMPORTED_MODULE_1__(this.getAllData.from_date).diff(moment__WEBPACK_IMPORTED_MODULE_1__(this.getAllData.to_date), 'months');
            if (this.getAllData.from_date == "" || this.getAllData.from_date == null || this.getAllData.to_date == "" || this.getAllData.to_date == null) {
                let msg = {
                    type: "Info",
                    body: "Please select date range"
                };
                this.appc.popToast(msg);
            }
            // else if (diff < -2) {
            //   let msg = {
            //     type: "error",
            //     title: "Incorrect Details",
            //     body: "Range should not be more than 2 months"
            //   }
            //   this.appc.popToast(msg);
            // }
            else {
                this.getAllData.institute_id = this.institute_id;
                const url = "/api/v1/biometricAttendance/report";
                this._http.postData(url, this.getAllData).subscribe((data) => {
                    this.showTableEvent = true;
                    if (data != null) {
                        this.range = data;
                        this.dataStatus = false;
                    }
                    else {
                        this.range = [];
                        this.dataStatus = false;
                    }
                }, (error) => {
                    this.dataStatus = false;
                    let msg = {
                        type: "error",
                        body: error.error.message
                    };
                    this.appc.popToast(msg);
                });
            }
        }
        popupCtrlChange(event) {
            if (event == 0) {
                this.getAllData.from_date = moment__WEBPACK_IMPORTED_MODULE_1__().subtract('months', 1).format('YYYY-MM-DD');
                this.getAllData.to_date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
                this.getAllDataService(this.getAllData.from_date, this.getAllData.to_date);
                this.showRangeValue = false;
            }
            else if (event == 1) {
                this.getAllData.from_date = moment__WEBPACK_IMPORTED_MODULE_1__().subtract('days', 7).format('YYYY-MM-DD');
                this.getAllData.to_date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
                this.getAllDataService(this.getAllData.from_date, this.getAllData.to_date);
                this.showRangeValue = false;
            }
            else if (event == 2) {
                this.getAllDataService(this.getAllData.from_date, this.getAllData.to_date);
            }
        }
        getPopupEvent(event) {
            if (event == 2) {
                this.showRangeValue = true;
            }
            else {
                this.showRangeValue = false;
            }
        }
        exportToExcel(event) {
            let arr = [];
            this.range.map((ele) => {
                let json = {
                    "Date": ele.attendance_date,
                    "In Time": ele.in_time,
                    "Out Time": ele.out_time
                };
                arr.push(json);
            });
            this.excelService.exportAsExcelFile(arr, 'biometric');
        }
    };
    BiometricComponent.ctorParameters = () => [
        { type: ___WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
        { type: ___WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: ___WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }
    ];
    BiometricComponent.propDecorators = {
        biometricTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['biometricTable', { static: false },] }],
        xlsDownloader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['xlsDownloader', { static: false },] }]
    };
    BiometricComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-biometric',
            template: __importDefault(__webpack_require__(/*! raw-loader!./biometric.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/biometric/biometric.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./biometric.component.scss */ "./src/app/components/course-module/reports/biometric/biometric.component.scss")).default]
        }),
        __metadata("design:paramtypes", [___WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ___WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            ___WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])
    ], BiometricComponent);
    return BiometricComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/reports/exam-report-main/exam-report.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/course-module/reports/exam-report-main/exam-report.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background: #EEEEF4;\n  color: #999;\n}\n\nh1 {\n  font-weight: 100;\n  font-size: 27pt;\n  color: #E43;\n}\n\np {\n  font-weight: 300;\n}\n\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.middle-section .middle-top h2 {\n  color: black;\n  font-weight: unset;\n  padding-top: 20px;\n}\n\n.middle-section .form-wrapper {\n  background: transparent;\n  margin: 25px 0px;\n}\n\n.middle-section .form-wrapper .btn {\n  margin-top: 10px;\n  width: 30%;\n}\n\n.middle-section .form-wrapper label {\n  padding-left: 25px;\n  font-size: 12px;\n  font-weight: 400;\n  color: 0084f6;\n  text-decoration: none;\n  text-transform: uppercase;\n  -webkit-font-smoothing: antialiased;\n  width: 100%;\n}\n\n.middle-section .form-wrapper .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 85%;\n  padding-left: 10px;\n  margin-left: 10px;\n  height: 30px;\n  padding: 0px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n\n.middle-section .form-wrapper .side-form-ctrl.bsDatepicker {\n  padding-left: 10px;\n  margin-left: 25px;\n  width: 60%;\n}\n\n.master {\n  margin-top: 10px;\n  float: right;\n  margin-bottom: 10px;\n  margin-right: 16px;\n}\n\n.attendance-container {\n  padding: 5px;\n  overflow: auto;\n}\n\n.filter-form {\n  border-radius: 10px;\n  /*popup scss*/\n}\n\n.filter-form .row {\n  margin: 5px 15px;\n}\n\n.filter-form .form-wrapper {\n  position: relative;\n}\n\n.filter-form .form-wrapper.datePickerBox .side-form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n\n.filter-form .form-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 0;\n  top: 20px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.filter-form .form-wrapper {\n  padding: 10px 5px;\n}\n\n.filter-form .form-wrapper label {\n  width: 100%;\n  display: block;\n}\n\n.filter-form .form-wrapper .side-form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n  width: 100%;\n  padding: 3px;\n  display: block;\n  border: 1px solid #dadada;\n}\n\n.filter-form .form-wrapper {\n  padding: 10px 5px;\n  position: relative;\n}\n\n.filter-form .form-wrapper.datePickerBox .side-form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n  width: 100%;\n  padding: 5px;\n  display: block;\n  border: 1px solid #dadada;\n}\n\n.filter-form .form-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.filter-form .popup-content {\n  position: relative;\n  left: 5%;\n  overflow-x: hidden;\n}\n\n.filter-form .popup-content table {\n  overflow-y: auto;\n  overflow-x: auto;\n  width: 95%;\n}\n\n.filter-form .popup-content h5 {\n  font-weight: 200px;\n  text-align: center;\n}\n\n.filter-form .popup-content h2 {\n  text-align: center;\n}\n\n.filter-form .main-student-table ::-webkit-scrollbar {\n  display: block;\n}\n\n.filter-form .main-student-table .student-table {\n  overflow-x: auto;\n  height: 400px;\n}\n\n.filter-form .btn {\n  display: inline-block;\n}\n\n.filter-form .inner-main {\n  display: inline;\n  padding: 20px 0px 12px 0px;\n}\n\n.filter-form .inner-main .inner-btn {\n  display: inline-block;\n}\n\n.filter-form .inner-main .outer-btn {\n  display: inline-block;\n}\n\n.filter-form .records {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.filter-form .form-field {\n  display: inline-block;\n  width: 80%;\n}\n\n.filter-form .form-date {\n  display: inline-block;\n  width: 100%;\n}\n\n.filter-form .table-content {\n  height: 350px;\n}\n\n.filter-form .table-content ::-webkit-scrollbar {\n  display: block;\n}\n\n.filter-form .table-content .table-heading {\n  overflow-x: auto;\n  height: 350px;\n}\n\n.filter-form .filter-box {\n  padding: 10px 0px;\n  margin-bottom: 5px;\n  background: #efefef;\n}\n\n.filter-form .form-wrapper .datePickerBox {\n  padding-right: 10px;\n  padding-bottom: 10px;\n  width: 10%;\n}\n\n.filter-form .popup-header-content h2 {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.filter-form .popup-header-content h5 {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.filter-form .middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.filter-form .middle-section .middle-top h2 {\n  color: black;\n  font-weight: unset;\n  padding-top: 20px;\n}\n\n.filter-form .middle-section .form-wrapper {\n  background: transparent;\n  margin: 25px 0px;\n  align-content: center;\n}\n\n.filter-form .middle-section .form-wrapper .btn {\n  margin-top: -3px;\n  width: 70%;\n}\n\n.filter-form .middle-section .form-wrapper label {\n  padding-left: 10px;\n  font-size: 12px;\n  font-weight: 400;\n  color: 0084f6;\n  text-decoration: none;\n  text-transform: uppercase;\n  -webkit-font-smoothing: antialiased;\n  width: 100%;\n}\n\n.filter-form .middle-section .form-wrapper .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding-left: 10px;\n  margin-left: 10px;\n  height: 30px;\n  padding: 0px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n\n.filter-form .middle-section .form-wrapper .side-form-ctrl.bsDatepicker {\n  padding-left: 10px;\n  margin-left: 10px;\n  width: 100%;\n}\n\n.filter-form .popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n\n.filter-form .popupWrapper .popup {\n  max-width: 100%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n\n.filter-form .popup-wrapper {\n  padding: 32px 15px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n\n.filter-form .popup-wrapper span {\n  font-weight: 300;\n  display: inline-block;\n}\n\n.filter-form .popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 22px;\n}\n\n.filter-form .popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n\n.filter-form .closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n\n.filter-form .closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n\n.filter-form .closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n\n.filter-form .closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n\n.filter-form .closePopup svg {\n  width: 16px;\n}\n\n.filter-form .closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n\n.filter-form .popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n\n.filter-form .fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n\n.filter-form .popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n\n.filter-form .popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n\n.filter-form .popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n\n.filter-form .popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n\n.filter-form .popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n\n.filter-form .popup-content ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n\n.details-wrapper {\n  max-height: 450px;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.details-wrapper ::-webkit-scrollbar {\n  display: block;\n}\n\n.details-wrapper tr th {\n  padding: 10px;\n}\n\n.details-wrapper tr th.marks {\n  min-width: 185px;\n  height: 83px;\n}\n\n.details-wrapper tr td.marks {\n  min-width: 185px;\n}\n\n.btn-sms-search {\n  margin-top: 35px;\n  text-align: center;\n  margin-left: 280px;\n  width: 100%;\n}\n\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  width: 15%;\n  box-sizing: border-box;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  float: right;\n  height: 35px;\n  font-size: 14px;\n}\n\n.pop-header {\n  padding-bottom: 12px;\n}\n\n.pull-right {\n  margin-right: 12px;\n  padding-bottom: 10px;\n}\n\n.stdnt-table {\n  height: 500px;\n  overflow: hidden !important;\n}\n\n.stdnt-table ::-webkit-scrollbar {\n  display: block;\n}\n\n.stdnt-table .poor {\n  background: white;\n  margin-top: 41px;\n  margin-left: 5px;\n  margin-right: 5px;\n  height: 300px;\n  overflow-y: auto;\n  overflow-x: auto;\n}\n\n.stu-table {\n  height: 500px;\n}\n\n.stu-table ::-webkit-scrollbar {\n  display: block;\n}\n\n.stu-table table tbody {\n  height: 450px;\n  overflow-x: auto;\n  overflow-y: auto;\n}\n\n.table-overflow {\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvZXhhbS1yZXBvcnQtbWFpbi9leGFtLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFtQjtFQUNuQixXQUFXO0FBQWY7O0FBR0E7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUFBZjs7QUFHQTtFQUNJLGdCQUFnQjtBQUFwQjs7QUFHQTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0JBQXNCO0FBQTFCOztBQUhBO0VBTVksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDN0I7O0FBVEE7RUFZUSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ3hCOztBQWRBO0VBZVksZ0JBQWdCO0VBQ2hCLFVBQVU7QUFHdEI7O0FBbkJBO0VBbUJZLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG1DQUFtQztFQUNuQyxXQUFXO0FBSXZCOztBQTlCQTtFQTZCWSxpQkFBaUI7RUFDakIsK0NBQXlEO0VBQ3pELFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBS3hCOztBQTNDQTtFQXdDZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0FBTzFCOztBQURBO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBSXRCOztBQURBO0VBR0ksWUFBWTtFQUNaLGNBQWM7QUFFbEI7O0FBQ0E7RUFHSSxtQkFBbUI7RUEwTW5CLGFBQUE7QUF6TUo7O0FBSkE7RUFLUSxnQkFBZ0I7QUFHeEI7O0FBUkE7RUFRUSxrQkFBa0I7QUFJMUI7O0FBWkE7RUFXZ0IsZUFBZTtFQUNmLGtCQUFrQjtF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QixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBMEN4Qjs7QUF2Q0E7RUFDSSxhQUFZO0FBMENoQjs7QUEzQ0E7RUFHUSxjQUFhO0FBNENyQjs7QUEvQ0E7RUFPWSxhQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQTRDNUI7O0FBdkNBO0VBQ0ksZ0JBQWU7QUEwQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvZXhhbS1yZXBvcnQtbWFpbi9leGFtLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keSB7XG4gICAgYmFja2dyb3VuZDogI0VFRUVGNDtcbiAgICBjb2xvcjogIzk5OTtcbn1cblxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyN3B0O1xuICAgIGNvbG9yOiAjRTQzO1xufVxuXG5wIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLm1pZGRsZS10b3Age1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogdW5zZXQ7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbjogMjVweCAwcHg7XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgLy9mb250LWZhbWlseTogLXdlYmtpdC1ib2R5O1xuICAgICAgICAgICAgY29sb3I6IDAwODRmNjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlLWZvcm0tY3RybCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC40MTk2MDc4NDMxMzcyNTQ5KTtcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgJi5ic0RhdGVwaWNrZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWFzdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmF0dGVuZGFuY2UtY29udGFpbmVyIHtcbiAgICAvLyBoZWlnaHQ6IDg1dmg7XG4gICAgLy8gYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5maWx0ZXItZm9ybSB7XG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggI2RhZGFkYTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW46IDVweCAxNXB4O1xuICAgIH1cbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmLmRhdGVQaWNrZXJCb3gge1xuICAgICAgICAgICAgLnNpZGUtZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlLWZvcm0tY3RybCB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgIC5zaWRlLWZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wb3B1cC1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA1JTtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIH1cbiAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWFpbi1zdHVkZW50LXRhYmxlIHtcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuc3R1ZGVudC10YWJsZSB7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuaW5uZXItbWFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHggMTJweCAwcHg7XG4gICAgICAgIC5pbm5lci1idG4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5vdXRlci1idG4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yZWNvcmRzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuZm9ybS1maWVsZCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLmZvcm0tZGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC50YWJsZS1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAudGFibGUtaGVhZGluZyB7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgfVxuICAgIC5mb3JtLXdyYXBwZXIge1xuICAgICAgICAuZGF0ZVBpY2tlckJveCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wb3B1cC1oZWFkZXItY29udGVudCB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5taWRkbGUtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLm1pZGRsZS10b3Age1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIG1hcmdpbjogMjVweCAwcHg7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAwMDg0ZjY7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2lkZS1mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC40MTk2MDc4NDMxMzcyNTQ5KTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICYuYnNEYXRlcGlja2VyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qcG9wdXAgc2NzcyovXG4gICAgLnBvcHVwV3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjUpO1xuICAgICAgICB6LWluZGV4OiAxMDA7IC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgICAgICAucG9wdXAge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlOyAvLyBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiA1JTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bzsgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wb3B1cC13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMzJweCAxNXB4OyAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggMjBweCA1cHggIzljOWM5YztcbiAgICAgICAgdHJhbnNpdGlvbjogdW5zZXQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMjVweCAwIDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jbG9zZVBvcHVwIHtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgICAgICAgYm90dG9tOiAycHg7XG4gICAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgJi50b3BMZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgICYuYm90dG9tTGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC5jbHMtMSB7fVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wb3B1cC1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgICAuZmFkZUluIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4gICAgLnBvcHVwV3JhcHBlck1vYiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyAvLyBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC5jbG9zZVBvcHVwIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgICAgIHRvcDogLTI3cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAucG9wdXAtbW9iIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYm90dG9tOiAtNzAlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgfVxuICAgIC5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIHtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAucG9wdXBXcmFwcGVyTW9iLnNob3dQb3B1cE1vYiAucG9wdXAtbW9iIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgIH0gLy8vLy8vLy8vLy9cbiAgICAucG9wdXAtY29udGVudCB7XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kZXRhaWxzLXdyYXBwZXIge1xuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgICB0ciB7XG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAmLm1hcmtzIHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE4NXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogODNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICAmLm1hcmtzIHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE4NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnRuLXNtcy1zZWFyY2gge1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAyODBweDtcbiAgICB3aWR0aDogMTAwJVxufVxuXG4uc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgICAubm9ybWFsLWZpZWxkIHtcbiAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cblxuLnBvcC1oZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4ucHVsbC1yaWdodCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnN0ZG50LXRhYmxle1xuICAgIGhlaWdodDo1MDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudDtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgICAucG9vciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOjQxcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcbiAgICAgICAgaGVpZ2h0OjMwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cbn1cbi5zdHUtdGFibGUge1xuICAgIGhlaWdodDo1MDBweDtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgICB0YWJsZXtcbiAgICAgICAgdGJvZHl7XG4gICAgICAgICAgICBoZWlnaHQ6NDUwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxufVxuLnRhYmxlLW92ZXJmbG93e1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/reports/exam-report-main/exam-report.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/course-module/reports/exam-report-main/exam-report.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ExamReportMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamReportMainComponent", function() { return ExamReportMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../.. */ "./src/app/index.ts");
/* harmony import */ var _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/report-services/exam.service */ "./src/app/services/report-services/exam.service.ts");
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



let ExamReportMainComponent = /** @class */ (() => {
    let ExamReportMainComponent = class ExamReportMainComponent {
        constructor(examdata, appC, _http, auth) {
            this.examdata = examdata;
            this.appC = appC;
            this._http = _http;
            this.auth = auth;
            this.isProfessional = true;
            this.pageIndex = 1;
            this.getSubjectData = [];
            this.batchExamRepo = [];
            this.totalRecords = 0;
            this.institute_id = sessionStorage.getItem('institution_id');
            this.fullResponse = [];
            this.dateSource = [];
            this.dateStore = [];
            this.displayBatchSize = 10;
            this.Tdata = false;
            this.courseData = [];
            this.pagedDetailExamSource = [];
            this.batchCourseData = [];
            this.selectedSubject = '';
            this.subjectData = [];
            this.masterCourses = [];
            this.addReportPopup = false;
            this.examTypeEntry = [];
            this.showTitle = false;
            this.exam_Sch_Data = [];
            this.examSource = [];
            this.detailSource = [];
            this.pagedExamSource = [];
            this.pageIndexPopup = 1;
            this.fetchApiData = [];
            this.dataExamIndex = [];
            this.typeDataForm = [];
            this.projectSettings = [
                { primaryKey: 'student_disp_id', header: 'Student ID' },
                { primaryKey: 'student_name', header: 'Student Name' },
                { primaryKey: 'student_phone', header: 'Contact No.' },
                { primaryKey: 'doj', header: 'Joining Date' },
                { primaryKey: 'grade', header: 'Grade' }
            ];
            this.HighestMarks = "";
            this.LowestMarks = "";
            this.AverageMarks = "";
            this.queryParam = {
                standard_id: -1,
                subject_id: -1,
                assigned: "N",
            };
            this.fetchFieldData = {
                institution_id: parseInt(sessionStorage.getItem('institute_id')),
                standard_id: '',
                subject_id: '',
                batch_id: '',
                exam_schd_id: ''
            };
            this.searchText = "";
            this.searchflag = false;
            this.searchData = [];
            this.property = "";
            this.direction = 0;
            this.sortingEnabled = true;
            this.schoolModel = false;
            this.switchActiveView('exam');
        }
        professionalChecker() {
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            // changes by Nalini - to handle school model conditions
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
        }
        ngOnInit() {
            this.isExamGrade = sessionStorage.getItem('is_exam_grad_feature');
            this.professionalChecker();
            if (this.isProfessional) {
                this.showTitle = true;
                this.projectSettings = [
                    { primaryKey: 'student_disp_id', header: 'Student ID' },
                    { primaryKey: 'student_name', header: 'Student Name' },
                    { primaryKey: 'student_phone', header: 'Contact No.' },
                    { primaryKey: 'doj', header: 'Joining Date' },
                    { primaryKey: 'grade', header: 'Grade' }
                ];
            }
            else {
                this.showTitle = false;
                this.projectSettings = [
                    { primaryKey: 'student_disp_id', header: 'Student Id' },
                    { primaryKey: 'student_name', header: 'Student Name' },
                    { primaryKey: 'student_phone', header: 'Contact No.' },
                    { primaryKey: 'doj', header: 'Joining Date' },
                    { primaryKey: 'total_marks', header: 'Total Marks' },
                    { primaryKey: 'marks_obtained', header: 'Marks Obtained' },
                    { primaryKey: 'rank', header: 'Rank' },
                ];
            }
            this.fetchExamData();
            this.pageIndex = 1;
        }
        closeReportPopup() {
            this.addReportPopup = false;
        }
        /* select exam repo fill master courses==================================================================================
        ================================================================================== */
        fetchExamData() {
            this.auth.showLoader();
            if (this.isProfessional) {
                this.auth.hideLoader();
                this.batchExamRepo = [];
                this.subjectData = [];
                this.queryParam.subject_id = -1;
                this.queryParam.standard_id = -1;
                this.examdata.batchExamReport(this.queryParam).subscribe((res) => {
                    {
                        this.batchExamRepo = res.standardLi;
                        this.getSubjectData = res.batchLi;
                    }
                });
            }
            else {
                // this.examdata.ExamReport().subscribe(
                //   (data: any) => {
                //     this.auth.hideLoader();
                //     this.masterCourses = data;
                //     console.log(this.masterCourses);
                //   }
                // )
                let url = "/api/v1/courseMaster/master-course-list/" + this.institute_id + '?is_active_not_expire=Y&sorted_by=course_name';
                let keys;
                this.auth.showLoader();
                this._http.getData(url).subscribe((data) => {
                    this.auth.hideLoader();
                    this.fullResponse = data.result;
                    keys = Object.keys(data.result);
                    console.log("keys", keys);
                    for (let i = 0; i < keys.length; i++) {
                        this.masterCourses.push(keys[i]);
                    }
                }, (error) => {
                    this.auth.hideLoader();
                    console.log(error);
                });
            }
        }
        /*======================================================================================================
      ======================================================================================================== */
        getCourseData(i) {
            if (this.isProfessional) {
                this.auth.showLoader();
                this.batchCourseData = [];
                this.fetchFieldData.exam_schd_id = "";
                this.queryParam.subject_id = -1;
                this.examdata.batchExamReport(this.queryParam).subscribe((res) => {
                    this.auth.hideLoader();
                    console.log(res.subjectLi);
                    this.batchCourseData = res.subjectLi;
                    this.getSubjectData = res.batchLi;
                    if (this.batchCourseData == null) {
                        let obj = {
                            type: "info",
                            title: "No exam schedule found",
                            body: ""
                        };
                        this.appC.popToast(obj);
                        this.auth.hideLoader();
                    }
                });
            }
            else {
                this.fetchFieldData.exam_schd_id = "";
                this.fetchFieldData.batch_id = "";
                this.fetchFieldData.subject_id = "";
                this.courseData = [];
                let temp = this.fullResponse[this.fetchFieldData.standard_id];
                for (let i = 0; i < temp.length; i++) {
                    this.courseData.push(temp[i]);
                }
                // this.examdata.getCourses(i).subscribe(
                //   (data: any) => {
                //     this.auth.hideLoader();
                //     this.courseData = data.coursesList;
                //     if (this.courseData == null) {
                //       let obj = {
                //         type: "info",
                //         title: "No exam schedule found",
                //         body: ""
                //       }
                //       this.appC.popToast(obj);
                //       this.auth.hideLoader();
                //     }
                //   },
                //   (error: any) => {
                //     this.auth.hideLoader();
                //     let obj = {
                //       type: "error",
                //       title: "",
                //       body: "Please check your internet connection and if the issue persist contact support@proctur.com"
                //     }
                //     this.appC.popToast(obj);
                //   }
                // )
            }
        }
        /*==================================================================================================
        ===================================================================================================== */
        getSubData(i) {
            this.auth.showLoader();
            console.log(i);
            if (this.isProfessional) {
                this.fetchFieldData.exam_schd_id = "";
                this.examdata.batchExamReport(this.queryParam).subscribe((res) => {
                    this.auth.hideLoader();
                    this.getSubjectData = res.batchLi;
                    if (this.getSubjectData == null) {
                        let obj = {
                            type: "info",
                            title: "No exam schedule found",
                            body: ""
                        };
                        this.appC.popToast(obj);
                        this.auth.hideLoader();
                    }
                });
            }
            else {
                this.fetchFieldData.exam_schd_id = "";
                this.fetchFieldData.batch_id = "";
                this.examdata.getSubject(i).subscribe((data) => {
                    this.subjectData = data.batchesList;
                    this.auth.hideLoader();
                    if (this.subjectData == null) {
                        let obj = {
                            type: "info",
                            title: "No exam schedule found",
                            body: ""
                        };
                        this.appC.popToast(obj);
                        this.auth.hideLoader();
                    }
                });
            }
        }
        /*=======================================================================================
        ========================================================================================== */
        getExamScheduleData(i) {
            console.log(i);
            if (this.isProfessional) {
                this.selectedSubject = this.getSubjectData.filter(item => item.batch_id == i)[0].batch_name;
            }
            else {
                this.selectedSubject = this.subjectData.filter(item => item.batch_id == i)[0].subject_name;
            }
            this.auth.showLoader();
            this.fetchFieldData.exam_schd_id = "";
            console.log(i);
            this.examdata.getExamSchedule(i).subscribe((data) => {
                this.auth.hideLoader();
                this.exam_Sch_Data = data.otherSchd;
                if (this.exam_Sch_Data == null) {
                    let obj = {
                        type: "info",
                        title: "No exam schedule found",
                        body: ""
                    };
                    this.appC.popToast(obj);
                    this.auth.hideLoader();
                }
            });
        }
        getData(i) {
            console.log(i);
        }
        fetchExamReport() {
            this.auth.showLoader();
            this.examSource = [];
            if (this.isProfessional) {
                if (this.fetchFieldData.batch_id == "" || this.fetchFieldData.exam_schd_id == "") {
                    let msg = {
                        type: "error",
                        title: "",
                        body: "All field(s) are required "
                    };
                    this.appC.popToast(msg);
                    this.auth.hideLoader();
                }
                else {
                    let o = {
                        batch_id: this.fetchFieldData.batch_id,
                        exam_schd_id: this.fetchFieldData.exam_schd_id,
                        institution_id: this.fetchFieldData.institution_id,
                        standard_id: '',
                        subject_id: ''
                    };
                    this.examdata.viewExamData(o).subscribe((res) => {
                        if (res.length) {
                            this.examSource = res;
                            this.Tdata = true;
                            this.HighestMarks = this.examSource[0].highest_marks;
                            this.LowestMarks = this.examSource[0].lowest_marks;
                            this.AverageMarks = this.examSource[0].average_marks;
                            this.totalRecords = this.examSource.length;
                            this.fetchTableDataByPage(this.pageIndex);
                            this.auth.hideLoader();
                            if (this.examSource[0].isBatchExamGrade == 0) {
                                this.projectSettings = [
                                    { primaryKey: 'student_disp_id', header: 'Student Id' },
                                    { primaryKey: 'student_name', header: 'Student Name' },
                                    { primaryKey: 'student_phone', header: 'Contact No.' },
                                    { primaryKey: 'doj', header: 'Joining Date' },
                                    { primaryKey: 'total_marks', header: 'Total Marks' },
                                    { primaryKey: 'student_marks_obtained', header: 'Marks Obtained' },
                                    { primaryKey: 'student_rank', header: 'Rank' },
                                ];
                            }
                            else {
                                this.projectSettings =
                                    [{ primaryKey: 'student_disp_id', header: 'Student Id' },
                                        { primaryKey: 'student_name', header: 'Student Name' },
                                        { primaryKey: 'student_phone', header: 'Contact No.' },
                                        { primaryKey: 'doj', header: 'Joining Date' },
                                        { primaryKey: 'grade', header: 'Grade' },
                                    ];
                            }
                        }
                        else {
                            let msg = {
                                type: "info",
                                body: "No data found"
                            };
                            this.examSource = [];
                            this.totalRecords = this.examSource.length;
                            this.fetchTableDataByPage(this.pageIndex);
                            this.appC.popToast(msg);
                            this.auth.hideLoader();
                        }
                    }, err => {
                        this.auth.hideLoader();
                        console.log(err);
                    });
                }
            }
            else {
                if (this.fetchFieldData.subject_id == "" || this.fetchFieldData.standard_id == "" || this.fetchFieldData.batch_id == "" ||
                    this.fetchFieldData.exam_schd_id == "") {
                    let msg = {
                        type: "error",
                        title: "",
                        body: "All field(s) are required"
                    };
                    this.appC.popToast(msg);
                    this.auth.hideLoader();
                }
                else {
                    let o = {
                        batch_id: this.fetchFieldData.batch_id,
                        exam_schd_id: this.fetchFieldData.exam_schd_id,
                        institution_id: this.fetchFieldData.institution_id,
                        standard_id: '',
                        subject_id: ''
                    };
                    this.examdata.viewExamData(o).subscribe((res) => {
                        if (res.length) {
                            console.log(res);
                            this.examSource = res;
                            this.Tdata = true;
                            this.HighestMarks = this.examSource[0].highest_marks;
                            this.LowestMarks = this.examSource[0].lowest_marks;
                            this.AverageMarks = this.examSource[0].average_marks;
                            this.totalRecords = this.examSource.length;
                            this.fetchTableDataByPage(this.pageIndex);
                            this.auth.hideLoader();
                            console.log("examSource", this.examSource);
                            if (this.examSource[0].grade == "" || this.examSource[0].isBatchExamGrade == 0) {
                                this.projectSettings = [
                                    { primaryKey: 'student_disp_id', header: 'Student Id' },
                                    { primaryKey: 'student_name', header: 'Student Name' },
                                    { primaryKey: 'student_phone', header: 'Contact No.' },
                                    { primaryKey: 'doj', header: 'Joining Date' },
                                    { primaryKey: 'total_marks', header: 'Total Marks' },
                                    { primaryKey: 'student_marks_obtained', header: 'Marks Obtained' },
                                    { primaryKey: 'student_rank', header: 'Rank' },
                                ];
                            }
                            else {
                                this.projectSettings =
                                    [{ primaryKey: 'student_disp_id', header: 'Student Id' },
                                        { primaryKey: 'student_name', header: 'Student Name' },
                                        { primaryKey: 'student_phone', header: 'Contact No.' },
                                        { primaryKey: 'doj', header: 'Joining Date' },
                                        { primaryKey: 'grade', header: 'Grade' },
                                    ];
                            }
                            console.log(res);
                        }
                        else {
                            let msg = {
                                type: "info",
                                body: "No data found"
                            };
                            this.examSource = [];
                            this.totalRecords = this.examSource.length;
                            this.fetchTableDataByPage(this.pageIndex);
                            this.appC.popToast(msg);
                            this.auth.hideLoader();
                        }
                    }, err => {
                        this.auth.hideLoader();
                        console.log(err);
                    });
                }
            }
        }
        fetchDetailReport() {
            this.auth.showLoader();
            if (this.isProfessional) {
                if (this.fetchFieldData.batch_id == "") {
                    let msg = {
                        type: "error",
                        body: "All field(s) are required "
                    };
                    this.appC.popToast(msg);
                    this.auth.hideLoader();
                }
                else {
                    this.examdata.viewDetailData(this.fetchFieldData.batch_id)
                        .subscribe((res) => {
                        if (res.length) {
                            this.detailSource = res;
                            this.dateSource = this.detailSource.map((store) => {
                                this.dateStore = store.detailExamReportList;
                                console.log("1", store.detailExamReportList);
                                this.auth.hideLoader();
                                //   this.totalRecords = this.detailSource.length;
                                //  this.fetchTableDataByPagePopup(this.pageIndexPopup);
                            });
                            this.addReportPopup = true;
                        }
                        else {
                            let msg = {
                                type: "info",
                                title: "No data found",
                                body: ""
                            };
                            this.appC.popToast(msg);
                            this.auth.hideLoader();
                        }
                    }, err => {
                        this.auth.hideLoader();
                    });
                }
            }
            else {
                if (this.fetchFieldData.standard_id == "" || this.fetchFieldData.subject_id == "" || this.fetchFieldData.batch_id == "") {
                    let msg = {
                        type: "error",
                        body: "All Field must be filled"
                    };
                    this.auth.hideLoader();
                    this.appC.popToast(msg);
                }
                else {
                    this.examdata.viewDetailData(this.fetchFieldData.batch_id)
                        .subscribe((res) => {
                        if (res.length) {
                            this.detailSource = res;
                            this.dateSource = this.detailSource.map((store) => {
                                this.dateStore = store.detailExamReportList;
                                console.log("2", store.detailExamReportList);
                                this.auth.hideLoader();
                                // this.totalRecords = this.detailSource.length;
                                //this.fetchTableDataByPagePopup(this.pageIndexPopup);
                            });
                            this.addReportPopup = true;
                        }
                        else {
                            let msg = {
                                type: "info",
                                title: "No data found",
                                body: ""
                            };
                            this.appC.popToast(msg);
                            this.auth.hideLoader();
                        }
                    }, err => {
                        this.auth.hideLoader();
                    });
                }
            }
        }
        getColor(status) {
            switch (status) {
                case 'Leave': return 'blue';
                case 'Absent': return 'red';
            }
        }
        getMark(value) {
            if (value == null || value == "" || value == "0") {
                return '-';
            }
            else {
                return value;
            }
        }
        fetchTableDataByPage(index) {
            this.pageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.pagedExamSource = this.getDataFromDataSource(startindex);
        }
        fetchNext() {
            this.pageIndex++;
            this.fetchTableDataByPage(this.pageIndex);
        }
        fetchPrevious() {
            if (this.pageIndex != 1) {
                this.pageIndex--;
                this.fetchTableDataByPage(this.pageIndex);
            }
        }
        getDataFromDataSource(startindex) {
            if (this.searchflag) {
                let t = this.searchData.slice(startindex, startindex + this.displayBatchSize);
                return t;
            }
            else {
                let t = this.examSource.slice(startindex, startindex + this.displayBatchSize);
                return t;
            }
        }
        fetchTableDataByPagePopup(index) {
            this.pageIndexPopup = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.pagedDetailExamSource = this.getDataFromDataSourcePopup(startindex);
        }
        fetchNextPopup() {
            this.pageIndexPopup++;
            this.fetchTableDataByPagePopup(this.pageIndexPopup);
        }
        fetchPreviousPopup() {
            if (this.pageIndexPopup != 1) {
                this.pageIndexPopup--;
                this.fetchTableDataByPagePopup(this.pageIndexPopup);
            }
        }
        getDataFromDataSourcePopup(startindex) {
            let t = this.detailSource.slice(startindex, startindex + this.displayBatchSize);
            return t;
        }
        closeExamReport() {
            this.addReportPopup = false;
        }
        downloadJsonToCSV() {
            console.log(this.xlsDownloader);
            let link = this.xlsDownloader.nativeElement;
            let outer = this.examTable.nativeElement.outerHTML.replace(/ /g, '%20');
            let data_type = 'data:application/vnd.ms-excel';
            link.setAttribute('href', data_type + ',' + outer);
            link.setAttribute('download', 'ExamReport.xls');
            link.click();
        }
        // changed by laxmi
        switchActiveView(id) {
            let classArray = ['home', 'attendance', 'sms', 'fee', 'exam', 'report', 'time', 'email', 'profit'];
            classArray.forEach((classname) => {
                document.getElementById(classname) && document.getElementById(classname).classList.remove('active');
            });
            document.getElementById(id) && document.getElementById(id).classList.add('active');
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                this.pageIndex = 1;
                let searchRes;
                searchRes = this.examSource.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.searchData = searchRes;
                this.totalRecords = searchRes.length;
                this.searchflag = true;
                this.fetchTableDataByPage(this.pageIndex);
            }
            else {
                this.searchflag = false;
                this.fetchTableDataByPage(this.pageIndex);
                this.totalRecords = this.examSource.length;
            }
        }
        sortedData(ev) {
            this.sortingEnabled = true;
            (this.direction == 0 || this.direction == -1) ? (this.direction = 1) : (this.direction = -1);
            {
                this.examSource = this.examSource.sort((a, b) => {
                    if (a[ev] < b[ev]) {
                        return -1 * this.direction;
                    }
                    else if (a[ev] > b[ev]) {
                        return this.direction;
                    }
                    else {
                        return 0;
                    }
                });
            }
            this.pageIndex = 1;
            this.fetchTableDataByPage(this.pageIndex);
        }
    };
    ExamReportMainComponent.ctorParameters = () => [
        { type: _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_2__["ExamService"] },
        { type: ___WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
        { type: ___WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
        { type: ___WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] }
    ];
    ExamReportMainComponent.propDecorators = {
        examTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['examTable', { static: false },] }],
        xlsDownloader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['xlsDownloader', { static: false },] }]
    };
    ExamReportMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exam-report',
            template: __importDefault(__webpack_require__(/*! raw-loader!./exam-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/exam-report-main/exam-report.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./exam-report.component.scss */ "./src/app/components/course-module/reports/exam-report-main/exam-report.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_2__["ExamService"],
            ___WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
            ___WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            ___WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]])
    ], ExamReportMainComponent);
    return ExamReportMainComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/reports/exam-report-main/filter.pipe.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/course-module/reports/exam-report-main/filter.pipe.ts ***!
  \**********************************************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FilterPipe = /** @class */ (() => {
    let FilterPipe = class FilterPipe {
        transform(value, args) {
            if (!value)
                return null;
            if (!args)
                return value;
            args = args.toLowerCase();
            return value.filter((item) => {
                return JSON.stringify(item).toLowerCase().includes(args);
            });
        }
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
})();



/***/ }),

/***/ "./src/app/components/course-module/reports/report-home/report-home.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/course-module/reports/report-home/report-home.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/** these css for gear icon download options\n* created by laxmi\n*/\nsvg:hover #gearIcon {\n  fill: #0084f6;\n}\n.asHover:hover {\n  color: #0084f6 !important;\n}\n.download:hover {\n  cursor: pointer;\n}\n.made-in {\n  font-size: 17px;\n  font-weight: bold;\n  text-align: left;\n}\n.dropdown > ul {\n  background: #fff;\n  padding: 10px 20px;\n  border: 1px solid #eaeaeb;\n  border-top: 0;\n  margin-top: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 6px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.dropdown > ul li {\n  color: #333;\n}\n.dropdown > ul li strong {\n  font-weight: 600;\n  display: block;\n}\n.dropdown > ul li a {\n  display: block;\n  color: #333;\n}\n.login-tube nav > ul > li {\n  display: inline-block;\n  position: relative;\n}\n.login-tube nav > ul > li > a {\n  color: #333;\n  text-decoration: none;\n  padding: 5px 10px;\n  display: block;\n  transition: all .4s;\n}\n.login-tube nav > ul > li > a:hover,\n.login-tube nav > ul > li:hover > a {\n  text-decoration: none;\n  background: #ccc;\n}\n.login-tube nav > ul > li .dropdown {\n  position: absolute;\n  visibility: hidden;\n  right: 0;\n  top: 100%;\n  min-width: 200px;\n  border-top: 0;\n  opacity: 0;\n  transition: all 0.1s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .2s;\n  transform: scale(0.5);\n}\n.login-tube nav > ul > li .dropdown > ul li {\n  line-height: normal;\n}\n.login-tube nav > ul > li .dropdown > ul li a {\n  display: block;\n  margin: 5px 0;\n}\n.login-tube nav > ul > li .dropdown > ul li a:hover {\n  color: #0084f6;\n}\n.login-tube nav > ul > li .dropdown > ul ul {\n  padding-left: 15px;\n  padding-top: 10px;\n}\n.login-tube nav > ul > li .dropdown > ul ul ul {\n  padding-top: 0;\n}\n.login-tube nav > ul > li:hover .dropdown {\n  visibility: visible;\n  position: absolute;\n  opacity: 1;\n  right: 0;\n  top: 100%;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .5s;\n  transform: scale(1);\n}\n.span-button {\n  border: 1px solid #0084f6;\n  padding: 4px 8px;\n  color: #0084f6;\n  font-size: .9em;\n  border-radius: 2px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.span-button svg {\n  margin: -3px 0;\n  height: 14px;\n}\nlogin-nav > li {\n  display: inline-block;\n  padding: 0 7px;\n  cursor: pointer;\n  vertical-align: text-bottom;\n}\nlogin-nav > li .dropdown {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  padding-top: 10px;\n}\nlogin-nav > li .icons {\n  width: 35px;\n  height: 35px;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 50%;\n  padding-top: 3px;\n  transition: all 0.1s;\n  border: 1px solid transparent;\n}\nlogin-nav > li .icons svg {\n  width: 25px;\n  color: #034979;\n}\nlogin-nav > li .icons svg .cls-1 {\n  stroke: #034979;\n  stroke-linejoin: unset;\n  border: none;\n}\nlogin-nav > li .user-info {\n  white-space: nowrap;\n  margin-right: 40px;\n  width: auto;\n  display: block;\n  position: relative;\n}\nlogin-nav > li .user-info > .icons {\n  display: inline-block;\n  vertical-align: middle;\n}\nlogin-nav > li .user-info > span {\n  vertical-align: middle;\n  display: inline-block;\n}\nlogin-nav > li .user-info:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f107\";\n  font-size: 17px;\n  position: absolute;\n  right: -20px;\n  top: 10px;\n}\n/**\n  this css is for report section css for cards\n  added by laxmi\n*/\n.report-box {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}\n.report-box ul.card-box li.card-row {\n  margin: 10px 0px;\n}\n.report-box ul.card {\n  padding: 15px 10px;\n  border: 1px solid #efefef;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 10px 0px;\n  box-shadow: 0px 0px 2px 0px;\n}\n.report-box ul.card li {\n  padding: 5px;\n}\n.report-box ul.card li:first-child {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n.report-box ul.card li:nth-child(2n) {\n  font-size: 12px;\n}\n.disabled {\n  cursor: not-allowed;\n  background: lightgrey;\n}\n.middle-section {\n  padding: 1%;\n}\n.header-section .header-title {\n  text-align: left;\n  font-size: 14px;\n  font-weight: 600;\n}\n.course-menu-section-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  padding-top: 10px;\n  margin-top: 10px;\n  border-top: 1px solid rgba(10, 10, 10, 0.5);\n  width: 100%;\n}\n.course-menu-section-container .course-menu-item {\n  padding: 15px 10px;\n  width: 31%;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 1%;\n  box-shadow: 0px 3px 6px #696969;\n}\n.course-menu-section-container .course-menu-item .menu-title {\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n}\n.course-menu-section-container .course-menu-item .menu-title img {\n  width: 25px;\n  height: 25px;\n}\n.course-menu-section-container .course-menu-item .menu-title span {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n.course-menu-section-container .course-menu-item .menu-description {\n  padding: 10px;\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvcmVwb3J0LWhvbWUvcmVwb3J0LWhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9jb21tb24vY29tbW9uLXdlYi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLHVFQUFBO0FBV0E7O0VBS2dCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUN4QmpDO0FEa0JBO0VBU2dCLDBCQUEwQjtFQUMxQixlQUFlO0FDdkIvQjtBRGFBO0VBZ0I0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQ3pCbkQ7QURJQTtFQXVCZ0MsVUFBVTtBQ3ZCMUM7QURBQTtFQTBCZ0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdEJ0RDtBRFBBO0VBZ0NvQyxVQUFVO0FDckI5QztBRFhBO0VBb0NnQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7QUNyQmxEO0FEckJBO0VBOEM0QixjQWxEYjtFQW1EYSxlQUFlO0FDckIzQztBRDhCQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQzNCcEI7QUR1QkE7RUFNTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUN6Qi9CO0FEVUE7RUFpQlEsVUFBVTtFQUNWLGtCQUFrQjtBQ3ZCMUI7QURLQTtFQXNCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFD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LFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBRDBGZjtBQzdGQTtFQVFrQixnQkFBZ0I7QUR5RmxDO0FDakdBO0VBYVUsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUR3RnJDO0FDN0dBO0VBK0JjLFlBQVk7QURrRjFCO0FDakhBO0VBd0JrQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBRDZGbkM7QUN2SEE7RUE2QmtCLGVBQWU7QUQ4RmpDO0FDdEZBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtBRHlGdkI7QUFwVkE7RUFDSSxXQUFXO0FBdVZmO0FBcFZFO0VBRUksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFzVnRCO0FBbFZFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMkNBQXdDO0VBQ3hDLFdBQVc7QUFxVmY7QUE3VkU7RUFVSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUdWLCtCQUErQjtBQXNWckM7QUExV0U7RUFzQk0sV0FBVztFQUNYLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUF3VjNCO0FBblhFO0VBNkJRLFdBQVc7RUFDWCxZQUFZO0FBMFZ0QjtBQXhYRTtFQWlDUSxpQkFBaUI7RUFDakIsZUFBZTtBQTJWekI7QUE3WEU7RUFzQ00sYUFBYTtFQUNiLGVBQWU7QUEyVnZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL3JlcG9ydHMvcmVwb3J0LWhvbWUvcmVwb3J0LWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9jb21tb24td2ViLnNjc3NcIjtcblxuLm1pZGRsZS1zZWN0aW9ue1xuICAgIHBhZGRpbmc6IDElO1xuICB9XG4gIFxuICAuaGVhZGVyLXNlY3Rpb257XG4gICAgLmhlYWRlci10aXRsZXtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmNvdXJzZS1tZW51LXNlY3Rpb24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTAsMTAsMTAsMC41KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuY291cnNlLW1lbnUtaXRlbXtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgIHdpZHRoOiAzMSU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW46IDElO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDZweCAjNjk2OTY5O1xuICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzY5Njk2OTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICM2OTY5Njk7XG4gICAgICAubWVudS10aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubWVudS1kZXNjcmlwdGlvbntcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbi8qKiB0aGVzZSBjc3MgZm9yIGdlYXIgaWNvbiBkb3dubG9hZCBvcHRpb25zXG4qIGNyZWF0ZWQgYnkgbGF4bWlcbiovXG5zdmc6aG92ZXIgI2dlYXJJY29uIHtcbiAgZmlsbDogIzAwODRmNjtcbn1cblxuLmFzSG92ZXI6aG92ZXIge1xuICBjb2xvcjogIzAwODRmNiAhaW1wb3J0YW50O1xufVxuXG4uZG93bmxvYWQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWRlLWluIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgJiA+IHVsIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4OyAvLyB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGhlYWRlci1ib3JkZXI7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuICAgIGxpIHtcbiAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9naW4tdHViZSBuYXYgPiB1bCA+IGxpID4gYSB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSA+IGE6aG92ZXIsXG4ubG9naW4tdHViZSBuYXYgPiB1bCA+IGxpOmhvdmVyID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSAuZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGN1YmljLWJlemllciguNTUsIDAsIC41NSwgLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGN1YmljLWJlemllciguNTUsIDAsIC41NSwgLjIpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4yNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuXG4gICYgPiB1bCB7XG4gICAgbGkge1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaTpob3ZlciAuZHJvcGRvd24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnB1bGwtcmlnaHQge1xuICAvLyBtYXJnaW4tdG9wOiAyNnB4O1xuICAvLyBtYXJnaW4tbGVmdDogMTIycHg7XG59XG5cbi5zcGFuLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGNvbG9yOiAjMDA4NGY2O1xuICBmb250LXNpemU6IC45ZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAtM3B4IDA7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICB9XG59XG5cbmxvZ2luLW5hdiB7XG4gICAgJj5saSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmljb25zIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pY29ucyB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDsgLy8gYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjojMDM0OTc5O1xuXG4gICAgICAgICAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAjMDM0OTc5O1xuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAmPi5pY29ucyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmPnNwYW4ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxMDdcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICB0aGlzIGNzcyBpcyBmb3IgcmVwb3J0IHNlY3Rpb24gY3NzIGZvciBjYXJkc1xuICBhZGRlZCBieSBsYXhtaVxuKi9cbi5yZXBvcnQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgdWwge1xuICAgICAgJi5jYXJkLWJveCB7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAmLmNhcmQtcm93IHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHg7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOm50aC1jaGlsZCgybil7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4uZGlzYWJsZWR7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/reports/report-home/report-home.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/course-module/reports/report-home/report-home.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ReportHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportHomeComponent", function() { return ReportHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../model/role_features */ "./src/app/model/role_features.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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



let ReportHomeComponent = /** @class */ (() => {
    let ReportHomeComponent = class ReportHomeComponent {
        constructor(auth) {
            this.auth = auth;
            this.type = '';
            this.JsonFlags = {
                biometricAttendanceEnable: false,
                isShowAttendanceReport: false,
                isShowExamReport: false,
                isShowExamDash: false,
                showBiomentricR: false
            };
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_1__["role"].features;
        }
        ngOnInit() {
            this.JsonFlags.biometricAttendanceEnable = sessionStorage.getItem('biometric_attendance_feature') == '1';
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.type = 'batch';
                }
                else {
                    this.type = 'course';
                }
            });
            this.fetchAndUpdatePermissions();
        }
        fetchAndUpdatePermissions() {
            let permissions = sessionStorage.getItem('permissions');
            /* Admin Account Detected */
            if (permissions == '' || permissions == null || permissions == undefined) {
                if (sessionStorage.getItem('userType') == '0') {
                    this.JsonFlags.isShowExamReport = true;
                    this.JsonFlags.isShowAttendanceReport = true;
                    // Changes done by Nalini - To handle role based conditions
                    this.JsonFlags.isShowExamDash = true;
                    this.JsonFlags.showBiomentricR = true;
                }
                else if (sessionStorage.getItem('userType') == '3') { // reaport 
                    this.JsonFlags.isShowExamReport = true;
                    this.JsonFlags.isShowAttendanceReport = true;
                }
            }
            else {
                let perm = JSON.parse(permissions);
                /* attendance */
                // Changes done by Nalini - To handle role based conditions
                this.JsonFlags.isShowAttendanceReport = this.role_feature.REPORT_COURSE_ATTENDANCE;
                if (this.role_feature.REPORTS_MENU && this.role_feature.REPORT_COURSE_EXAM_R) {
                    this.JsonFlags.isShowExamReport = true;
                }
                if (this.role_feature.REPORTS_MENU && this.role_feature.REPORT_COURSE_EXAM_DASHBOARD) {
                    this.JsonFlags.isShowExamDash = true;
                }
                this.JsonFlags.showBiomentricR = this.role_feature.REPORT_COURSE_BIOMETRIC;
            }
        }
    };
    ReportHomeComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] }
    ];
    ReportHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./report-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/report-home/report-home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./report-home.component.scss */ "./src/app/components/course-module/reports/report-home/report-home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]])
    ], ReportHomeComponent);
    return ReportHomeComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/reports/reports-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/course-module/reports/reports-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component */ "./src/app/components/course-module/reports/reports.component.ts");
/* harmony import */ var _report_home_report_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-home/report-home.component */ "./src/app/components/course-module/reports/report-home/report-home.component.ts");
/* harmony import */ var _attendance_report_attendanceReport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attendance-report/attendanceReport.component */ "./src/app/components/course-module/reports/attendance-report/attendanceReport.component.ts");
/* harmony import */ var _exam_report_main_exam_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exam-report-main/exam-report.component */ "./src/app/components/course-module/reports/exam-report-main/exam-report.component.ts");
/* harmony import */ var _biometric_biometric_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./biometric/biometric.component */ "./src/app/components/course-module/reports/biometric/biometric.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [];
let ReportsRoutingModule = /** @class */ (() => {
    let ReportsRoutingModule = class ReportsRoutingModule {
    };
    ReportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: '',
                                component: _report_home_report_home_component__WEBPACK_IMPORTED_MODULE_3__["ReportHomeComponent"],
                            },
                            {
                                path: 'home',
                                component: _report_home_report_home_component__WEBPACK_IMPORTED_MODULE_3__["ReportHomeComponent"],
                                pathMatch: 'prefix',
                            },
                            {
                                path: 'attendance',
                                component: _attendance_report_attendanceReport_component__WEBPACK_IMPORTED_MODULE_4__["AttendanceReportComponent"]
                            },
                            {
                                path: 'exam',
                                component: _exam_report_main_exam_report_component__WEBPACK_IMPORTED_MODULE_5__["ExamReportMainComponent"]
                            },
                            {
                                path: 'biometric',
                                component: _biometric_biometric_component__WEBPACK_IMPORTED_MODULE_6__["BiometricComponent"],
                                pathMatch: 'prefix',
                            },
                            {
                                path: 'exam-dashboard',
                                loadChildren: () => Promise.all(/*! import() | app-components-course-module-reports-new-exam-report-exam-report-module */[__webpack_require__.e("default~app-components-course-module-reports-new-exam-report-exam-report-module~app-components-fee-m~707bff6f"), __webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~77e6f154"), __webpack_require__.e("app-components-course-module-reports-new-exam-report-exam-report-module")]).then(__webpack_require__.bind(null, /*! app/components/course-module/reports/new-exam-report/exam-report.module */ "./src/app/components/course-module/reports/new-exam-report/exam-report.module.ts")).then(m => m.ExamReportModule),
                                // loadChildren: 'app/components/course-module/reports/new-exam-report/exam-report.module#ExamReportModule',
                                pathMatch: 'prefix'
                            },
                        ]
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/reports/reports.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/course-module/reports/reports.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/course-module/reports/reports.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/course-module/reports/reports.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

let ReportsComponent = /** @class */ (() => {
    let ReportsComponent = class ReportsComponent {
        constructor() { }
        ngOnInit() {
        }
    };
    ReportsComponent.ctorParameters = () => [];
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __importDefault(__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/reports/reports.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./reports.component.scss */ "./src/app/components/course-module/reports/reports.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/reports/reports.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/course-module/reports/reports.module.ts ***!
  \********************************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/report-services/exam.service */ "./src/app/services/report-services/exam.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _services_attendance_report_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/attendance-report-service.service */ "./src/app/components/course-module/services/attendance-report-service.service.ts");
/* harmony import */ var _attendance_report_attendanceReport_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attendance-report/attendanceReport.component */ "./src/app/components/course-module/reports/attendance-report/attendanceReport.component.ts");
/* harmony import */ var _biometric_biometric_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./biometric/biometric.component */ "./src/app/components/course-module/reports/biometric/biometric.component.ts");
/* harmony import */ var _exam_report_main_exam_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exam-report-main/exam-report.component */ "./src/app/components/course-module/reports/exam-report-main/exam-report.component.ts");
/* harmony import */ var _exam_report_main_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exam-report-main/filter.pipe */ "./src/app/components/course-module/reports/exam-report-main/filter.pipe.ts");
/* harmony import */ var _report_home_report_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report-home/report-home.component */ "./src/app/components/course-module/reports/report-home/report-home.component.ts");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/components/course-module/reports/reports-routing.module.ts");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reports.component */ "./src/app/components/course-module/reports/reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* Modules */

// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';



// import { ExamReportComponent } from './exam-report/exam-report.component';










let ReportsModule = /** @class */ (() => {
    let ReportsModule = class ReportsModule {
    };
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_14__["ReportsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                // BsDatepickerModule,
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_3__["TimepickerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["SplitButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [
                _reports_component__WEBPACK_IMPORTED_MODULE_15__["ReportsComponent"],
                _report_home_report_home_component__WEBPACK_IMPORTED_MODULE_13__["ReportHomeComponent"],
                _attendance_report_attendanceReport_component__WEBPACK_IMPORTED_MODULE_9__["AttendanceReportComponent"],
                _exam_report_main_exam_report_component__WEBPACK_IMPORTED_MODULE_11__["ExamReportMainComponent"],
                _exam_report_main_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"],
                _biometric_biometric_component__WEBPACK_IMPORTED_MODULE_10__["BiometricComponent"]
            ],
            providers: [
                _services_report_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"],
                _services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"],
                _services_attendance_report_service_service__WEBPACK_IMPORTED_MODULE_8__["AttendanceReportServiceService"]
            ],
        })
    ], ReportsModule);
    return ReportsModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/services/attendance-report-service.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/course-module/services/attendance-report-service.service.ts ***!
  \****************************************************************************************/
/*! exports provided: AttendanceReportServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceReportServiceService", function() { return AttendanceReportServiceService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AttendanceReportServiceService = /** @class */ (() => {
    let AttendanceReportServiceService = class AttendanceReportServiceService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            // this.institute_id = this.auth.getInstituteId();
            // this.Authorization = this.auth.getAuthToken();
            //console.log(this.institute_id);
            this.baseUrl = this.auth.getBaseUrl();
            //this.headers = new HttpHeaders({ "Content-Type": "application/json", "Authorization": this.Authorization });
        }
        getMasterCourse() {
            let url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        getCourses(obj) {
            let url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + obj;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        getSubject(obj) {
            let url = this.baseUrl + "/api/v1/courseMaster/fetch/courses/" + this.institute_id + "/" + obj;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        postDataToTable(obj) {
            obj.from_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.from_date).format('YYYY-MM-DD');
            obj.to_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.to_date).format('YYYY-MM-DD');
            if (obj.from_date == "Invalid date") {
                obj.from_date = "";
            }
            if (obj.to_date == "Invalid date") {
                obj.to_date = "";
            }
            let url = this.baseUrl + "/api/v1/reports/attendance";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        postDataToTablePro(obj) {
            obj.from_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.from_date).format('YYYY-MM-DD');
            obj.to_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.to_date).format('YYYY-MM-DD');
            if (obj.from_date == "Invalid date") {
                obj.from_date = "";
            }
            if (obj.to_date == "Invalid date") {
                obj.to_date = "";
            }
            let url = this.baseUrl + "/api/v1/reports/attendance";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        postDetailedData(obj) {
            let url = this.baseUrl + "/api/v1/reports/attendance/monthlyAttendanceReport";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        /* =========================================================================== */
        /* =========================================================================== */
        /*for professional*/
        fetchMasterCourseProfessional(obj) {
            let url = this.baseUrl + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id + "&assigned=N";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
    };
    AttendanceReportServiceService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    AttendanceReportServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], AttendanceReportServiceService);
    return AttendanceReportServiceService;
})();



/***/ })

}]);
//# sourceMappingURL=components-course-module-reports-reports-module-es2015.js.map