(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-course-module-Archiving-archiving-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/archiving-home/archiving-home.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/archiving-home/archiving-home.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"\" style=\"padding-right:2%\">\n  <section class=\"header-section\">\n    <div>\n      <div class=\"header-title\">\n        <h2>\n          <a style=\"color: #0084f6;\">\n           <!-- {{ type | titlecase }}-->\n           Classes\n          </a>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>Course Deletion\n        </h2>\n      </div>\n    </div>\n  </section>\n  <div class=\"course-menu-section-container\">\n\n    <div class=\"course-menu-item\" *ngIf=\"isProfessional\" routerLink=\"./batches\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/course/create-course.svg\" alt=\"create course\">\n        <span> Delete Batches</span>\n      </div>\n      <div class=\"menu-description\">\n        <span> Select and delete the old batches</span>\n      </div>\n    </div>\n    <div class=\"course-menu-item\" *ngIf=\"isProfessional\" routerLink=\"./batchesArchivedReport\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/course/create-course.svg\" alt=\"create course\">\n        <span> Deleted Batch Report</span>\n      </div>\n      <div class=\"menu-description\">\n        <span> Report of old deleted batches</span>\n      </div>\n    </div>\n\n    <div class=\"course-menu-item\" *ngIf=\"!isProfessional\" routerLink=\"./courses\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/course/create-course.svg\" alt=\"create course\">\n        <span> Delete Courses</span>\n      </div>\n      <div class=\"menu-description\">\n        <span> Select and delete the old courses</span>\n      </div>\n    </div>\n\n    <div class=\"course-menu-item\" *ngIf=\"!isProfessional\" routerLink=\"./coursesArchivedReport\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/course/create-course.svg\" alt=\"create course\">\n        <span>Course Deletion Report</span>\n      </div>\n      <div class=\"menu-description\">\n        <span> Report of old deleted courses</span>\n      </div>\n    </div>\n\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/archiving.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/archiving.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/batches-archived-report/batches-archived-report.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/batches-archived-report/batches-archived-report.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"middle-section clear-fix\" style=\"padding-left: 15px; padding-right: 30px; padding-top: 20px;\">\n  <section class=\"middle-top clearFix bulk-header\"\n    style=\"padding-left: 5px; padding-bottom: 10px; border-bottom: 1px solid lightgrey;\">\n\n    <h1 class=\"pull-left\">\n      <a routerLink=\"/view/course\">\n        Course\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      <a routerLink=\"/view/course/archiving\">\n        Archiving\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"!isProfessional\"></i>\n      <span *ngIf=\"!isProfessional\">Courses Archived Report</span>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"isProfessional\"></i>\n      <span *ngIf=\"isProfessional\">Batches Archived Report</span>\n    </h1>\n    <div style=\"float: right;\">\n      <input type=\"text\" placeholder=\"Search\"\n        style=\"border: 1px solid darkgrey;width: 240px;border-radius: 4px;padding-left: 7px;line-height: 28px;\"\n        (keyup)=\"searchDatabase()\" [(ngModel)]=\"searchText\" #search>\n    </div>\n  </section>\n  <section>\n    <div class=\"table table-responsive\" style=\"margin-top:1vh;\">\n      <app-basic-table [headers]=\"headerSetting\" [displayData]=\"newPaginated\" [tableSetting]=\"tableSetting\"\n        [rowColumnSetting]=\"rowColumns\"></app-basic-table>\n    </div>\n    <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"pagedisplaysize\" [sizeArr]=\"sizeArr\"\n          (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"totalRow\">\n        </pagination>\n      </div>\n    </div>\n  </section>\n</div>\n<!-- ======================================================================================== -->\n<!-- <div class=\"report-wrapper clearFix\">\n  <aside class=\"middle-full\">\n    <section class=\"middle-main clearFix\">\n      <div class=\"middle-top mb0 clearFix header\">\n        <div class=\"report-header\" style=\"padding-bottom:1% ; height:7vh;\">\n          <h2 style=\"padding: 5px;\" class=\"pull-left\">\n            <a routerLink=\"/view/batch\">\n              Batch\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n            <a routerLink=\"/view/batch/archiving\">\n              Archiving\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"!isProfessional\"></i>\n            <span *ngIf=\"!isProfessional\">Courses Archived Report</span>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"isProfessional\"></i>\n            <span *ngIf=\"isProfessional\">Batches Archived Report</span>\n          </h2>\n        </div>\n      </div>\n    </section>\n    <section>\n      <div class=\"filter-box clearFix\" style=\"margin: 6px 0px 6px 6px;float: right;\">\n        <div id=\"basic-search\" class=\"search-filter-wrapper\">\n          <input #search type=\"text\" class=\"search-field\" placeholder=\"Search\" [(ngModel)]=\"searchText\"\n            name=\"searchData\" (keyup)=\"searchDatabase()\" style=\"padding: 10px;\">\n        </div>\n      </div>\n      <div class=\"table table-responsive\" style=\"margin-top:5vh;\">\n        <app-basic-table [headers]=\"headerSetting\" [displayData]=\"newPaginated\" [tableSetting]=\"tableSetting\"\n          [rowColumnSetting]=\"rowColumns\"></app-basic-table> -->\n<!-- <table>\n          <thead>\n            <tr>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('course_name') \">\n                Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('course_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('course_name') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('batch_name') \">\n                Batch &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('batch_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('batch_name') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: left;\" (click)=\"sortedData('standard_name') \" *ngIf=\"isProfessional\">\n                Master Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('standard_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('standard_name') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: left;\" (click)=\"sortedData('master_course') \" *ngIf=\"!isProfessional\">\n                Master Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('master_course') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('master_course') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('standard_name') \">\n                Standard &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('standard_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('standard_name') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('subject_name') \">\n                Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('subject_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('subject_name') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('subjects') \">\n                Subjects &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('subjects') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('subjects') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: right;\" (click)=\"sortedData('start_date') \">\n                Start Date &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('start_date') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('start_date') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: right;\" (click)=\"sortedData('end_date') \">\n                End Date &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('end_date') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('end_date') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: left;\">\n                Status\n              </th>\n              <th style=\"text-align: right;\" (click)=\"sortedData('archived_date') \">\n                Archived Date Time &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('archived_date') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('archived_date') && direction != 1\"></i>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let i of newPaginated\">\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.course_name}}\n              </td>\n              <td *ngIf=\"isProfessional\" style=\"text-align: left;\">\n                {{i.batch_name}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.master_course}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.standard_name}}\n              </td>\n              <td *ngIf=\"isProfessional\" style=\"text-align: left;\">\n                {{i.standard_name}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.subjects}}\n              </td>\n              <td *ngIf=\"isProfessional\" style=\"text-align: left;\">\n                {{i.subject_name}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: right;\">\n                {{i.start_date}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: right;\">\n                {{i.end_date}}\n              </td>\n              <td style=\"text-align: left;\">\n                {{i.status}}\n              </td>\n              <td style=\"text-align: right;\">\n                {{i.archived_date}}\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"newPaginated.length == 0 && dataStatus === true && isProfessional\">\n            <tr *ngFor=\"let dummy of dummyArr\">\n              <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n                <div class=\"skeleton\">\n                </div>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"newPaginated.length == 0 && dataStatus === true && !isProfessional\">\n            <tr *ngFor=\"let dummy of dummyArr\">\n              <td *ngFor=\"let c of columnMaps2\" style=\"padding:10px;\">\n                <div class=\"skeleton\">\n                </div>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"newPaginated.length == 0 && dataStatus === false\" class=\"records\">\n            <tr>\n              <td colspan=\"6\" class=\"records\">\n                No Records Found\n              </td>\n            </tr>\n          </tbody>\n        </table> -->\n<!-- </div>\n      <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n        <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n          <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n            [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"pagedisplaysize\" [count]=\"totalRow\">\n          </pagination>\n        </div>\n      </div>\n    </section>\n  </aside>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/batches/batches.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/batches/batches.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"report-wrapper clearFix\" style=\"padding: 2%;\">\n  <aside class=\"middle-full\">\n    <section class=\"middle-main clearFix\">\n\n      <div class=\"middle-top mb0 clearFix header\">\n        <div class=\"\" style=\"padding-bottom:2%\">\n          <h2 style=\"padding: 5px;\" class=\"pull-left\">\n            <a routerLink=\"/view/batch\">\n              Batch\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n            <a routerLink=\"/view/batch/archiving\">\n              Archiving\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"!isProfessional\"></i>\n            <span *ngIf=\"!isProfessional\">Courses</span>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"isProfessional\"></i>\n            <span *ngIf=\"isProfessional\">Batches</span>\n          </h2>\n        </div>\n      </div>\n    </section>\n    <div class=\"filter-box clearFix\" style=\"margin: 6px 0px 6px 6px;float: right;\">\n      <div id=\"basic-search\" class=\"search-filter-wrapper\">\n        <input #search type=\"text\" class=\"search-field\" placeholder=\"Search\" [(ngModel)]=\"searchText\" name=\"searchData\"\n          (keyup)=\"searchDatabase()\" style=\"padding: 10px;\">\n      </div>\n    </div>\n    <section>\n\n      <div class=\"table table-responsive table-made\">\n        <table>\n          <thead>\n            <tr>\n              <th style=\"text-align: left;\" *ngIf=\"!isProfessional\" (click)=\"sortedData('course_name') \">\n                # &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('course_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('course_name') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: left;\" *ngIf=\"isProfessional\" (click)=\"sortedData('batch_name') \">\n                # &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Batch &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('batch_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('batch_name') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: left;\" (click)=\"sortedData('standard_name') \" *ngIf=\"isProfessional\">\n                Master Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('standard_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('standard_name') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: left;\" (click)=\"sortedData('master_course') \" *ngIf=\"!isProfessional\">\n                Master Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('master_course') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('master_course') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('standard_name') \">\n                Standard &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('standard_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('standard_name') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('subject_name') \">\n                Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('subject_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('subject_name') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('subjects') \">\n                Subjects &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('subjects') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('subjects') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: right;\" (click)=\"sortedData('start_date') \">\n                Start Date &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('start_date') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('start_date') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: right;\" (click)=\"sortedData('end_date') \">\n                End Date &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('end_date') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('end_date') && direction != 1\"></i>\n              </th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"newPaginated!=0\">\n            <tr *ngFor=\"let i of newPaginated ; let j=index;\">\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;  padding:5px 0px 10px 5px; \">\n                <div class=\"field-checkbox-wrapper\"\n                  style=\"display: inline-block;margin-top: 5px; height:16px; margin-right: 10px;\">\n                  <input type=\"checkbox\" class=\"form-checkbox\" name={{i.course_id}} id={{i.course_id}}\n                    [(ngModel)]=\"i.status\" (ngModelChange)=\"notifyMe(j)\" style=\"height:15px; margin-right: 10px;\">\n                  <label for={{i.course_id}}></label>\n                </div>\n                {{i.course_name}}\n              </td>\n              <td *ngIf=\"isProfessional\" style=\"text-align: left; padding:5px 0px 10px 5px; \">\n                <div class=\"field-checkbox-wrapper\"\n                  style=\"display: inline-block;margin-top: 5px; height:16px; margin-right: 10px;\">\n                  <input type=\"checkbox\" class=\"form-checkbox\" name={{i.batch_id}} id={{i.batch_id}}\n                    [(ngModel)]=\"i.status\" (ngModelChange)=\"notifyMe(j)\">\n                  <label for={{i.batch_id}}></label>\n                </div>\n                {{i.batch_name}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.master_course}}\n              </td>\n              <td *ngIf=\"isProfessional\" style=\"text-align: left;\">\n                {{i.standard_name}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.standard_name}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.subjects}}\n              </td>\n              <td *ngIf=\"isProfessional\" style=\"text-align: left;\">\n                {{i.subject_name}}\n              </td>\n              <td style=\"text-align: right;\">\n                {{i.start_date}}\n              </td>\n              <td style=\"text-align: right;\">\n                {{i.end_date}}\n              </td>\n            </tr>\n            <tr *ngIf=\"isProfessional\">\n              <td>\n\n              </td>\n              <td>\n\n              </td>\n              <td>\n\n              </td>\n              <td>\n\n              </td>\n              <td>\n                <input type=\"button\" class=\"btn fullBlue\" value=\"Delete\" (click)=\"archiveData($event)\"\n                  style=\"float: right;\">\n              </td>\n\n            </tr>\n            <tr *ngIf=\"!isProfessional\">\n              <td>\n\n              </td>\n              <td>\n\n              </td>\n              <td>\n\n              </td>\n              <td>\n\n              </td>\n              <td>\n\n              </td>\n              <td>\n                <input type=\"button\" class=\"btn fullBlue\" value=\"Delete\" (click)=\"archiveData($event)\"\n                  style=\"float: right;\">\n              </td>\n\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"newPaginated.length == 0 && dataStatus === true\">\n            <tr *ngFor=\"let dummy of dummyArr\">\n              <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n                <div class=\"skeleton\">\n                </div>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"newPaginated.length == 0 && dataStatus === false\" class=\"records\">\n            <tr>\n              <td colspan=\"6\" class=\"records\">\n                No Records Found\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n        <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n          <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n            [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"pagedisplaysize\" [count]=\"totalRow\">\n          </pagination>\n        </div>\n      </div>\n      <!-- </div> -->\n    </section>\n  </aside>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/courses-archived-report/courses-archived-report.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/courses-archived-report/courses-archived-report.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clear-fix\" style=\"padding-right: 2%;\">\n  <section class=\"middle-top clearFix bulk-header\"\n    style=\"padding-left: 5px; padding-bottom: 10px; border-bottom: 1px solid lightgrey;\">\n\n    <h1 class=\"pull-left\">\n      <a>\n       Classes\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      <a routerLink=\"/view/course/archiving\">\n        Course Deletion\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"!isProfessional\"></i>\n      <span *ngIf=\"!isProfessional\">Course Deletion Report</span>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"isProfessional\"></i>\n      <span *ngIf=\"isProfessional\">Course Deletion Report</span>\n    </h1>\n    <div style=\"float: right;\">\n      <input type=\"text\" placeholder=\"Search\"\n        style=\"border: 1px solid darkgrey;width: 240px;border-radius: 4px;padding-left: 7px;line-height: 28px;\"\n        (keyup)=\"searchDatabase()\" [(ngModel)]=\"searchText\" #search>\n    </div>\n  </section>\n  <section style=\"    margin-top: -17px;\">\n    <div class=\"table table-responsive\" style=\"margin-top:1vh;\">\n      <app-basic-table [headers]=\"headerSetting\" [displayData]=\"newPaginated\" [tableSetting]=\"tableSetting\"\n        [rowColumnSetting]=\"rowColumns\"></app-basic-table>\n    </div>\n    <div class=\"row filter-res pagination\" style=\"width: 100%;margin-top: -4px;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"pagedisplaysize\" [sizeArr]=\"sizeArr\"\n          (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"totalRow\">\n        </pagination>\n      </div>\n    </div>\n  </section>\n</div>\n<!-- ================================================================================ -->\n<!-- <div class=\"report-wrapper clearFix\" style=\"height: 100vh;\">\n  <aside class=\"middle-full\"> -->\n<!-- <section class=\"middle-main clearFix\">\n      <div class=\"middle-top mb0 clearFix header\">\n        <div class=\"report-header\" style=\"padding-bottom:1% ; height:7vh;\">\n          <h2 style=\"padding: 5px;\" class=\"pull-left\">\n            <a routerLink=\"/view/course\">\n              Course\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n            <a routerLink=\"/view/course/archiving\">\n              Archiving\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"!isProfessional\"></i>\n            <span *ngIf=\"!isProfessional\">Courses Archived Report</span>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"isProfessional\"></i>\n            <span *ngIf=\"isProfessional\">Batches Archived Report</span>\n          </h2>\n        </div>\n      </div>\n    </section> -->\n\n<!-- <section> -->\n<!-- <div class=\"filter-box clearFix\" style=\"margin: 6px 0px 6px 6px;float: right;\">\n        <div id=\"basic-search\" class=\"search-filter-wrapper\">\n          <input #search type=\"text\" class=\"search-field\" placeholder=\"Search\" [(ngModel)]=\"searchText\"\n            name=\"searchData\" (keyup)=\"searchDatabase()\" style=\"padding: 10px;\">\n        </div>\n      </div> -->\n<!-- <div class=\"table table-responsive\" style=\"margin-top:5vh;\">\n        <app-basic-table [headers]=\"headerSetting\" [displayData]=\"newPaginated\" [tableSetting]=\"tableSetting\"\n          [rowColumnSetting]=\"rowColumns\"></app-basic-table> -->\n<!-- <table>\n          <thead>\n            <tr>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('course_name') \">\n                Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('course_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('course_name') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('batch_name') \">\n                Batch &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('batch_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('batch_name') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: left;\" (click)=\"sortedData('standard_name') \" *ngIf=\"isProfessional\">\n                Master Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('standard_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('standard_name') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: left;\" (click)=\"sortedData('master_course') \" *ngIf=\"!isProfessional\">\n                Master Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('master_course') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('master_course') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('standard_name') \">\n                Standard &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('standard_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('standard_name') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('subject_name') \">\n                Course &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('subject_name') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('subject_name') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: left;\" (click)=\"sortedData('subjects') \">\n                Subjects &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('subjects') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('subjects') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: right;\" (click)=\"sortedData('start_date') \">\n                Start Date &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('start_date') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('start_date') && direction != 1\"></i>\n              </th>\n              <th *ngIf=\"!isProfessional\" style=\"text-align: right;\" (click)=\"sortedData('end_date') \">\n                End Date &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('end_date') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('end_date') && direction != 1\"></i>\n              </th>\n              <th style=\"text-align: left;\">\n                Status\n              </th>\n              <th style=\"text-align: right;\" (click)=\"sortedData('archived_date') \">\n                Archived Date Time &nbsp;\n                <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('archived_date') && direction == 1\"></i>\n                <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('archived_date') && direction != 1\"></i>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let i of newPaginated\">\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.course_name}}\n              </td>\n              <td *ngIf=\"isProfessional\" style=\"text-align: left;\">\n                {{i.batch_name}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.master_course}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.standard_name}}\n              </td>\n              <td *ngIf=\"isProfessional\" style=\"text-align: left;\">\n                {{i.standard_name}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: left;\">\n                {{i.subjects}}\n              </td>\n              <td *ngIf=\"isProfessional\" style=\"text-align: left;\">\n                {{i.subject_name}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: right;\">\n                {{i.start_date}}\n              </td>\n              <td *ngIf=\"!isProfessional\" style=\"text-align: right;\">\n                {{i.end_date}}\n              </td>\n              <td style=\"text-align: left;\">\n                {{i.status}}\n              </td>\n              <td style=\"text-align: right;\">\n                {{i.archived_date}}\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"newPaginated.length == 0 && dataStatus === true && isProfessional\">\n            <tr *ngFor=\"let dummy of dummyArr\">\n              <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n                <div class=\"skeleton\">\n                </div>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"newPaginated.length == 0 && dataStatus === true && !isProfessional\">\n            <tr *ngFor=\"let dummy of dummyArr\">\n              <td *ngFor=\"let c of columnMaps2\" style=\"padding:10px;\">\n                <div class=\"skeleton\">\n                </div>\n              </td>\n            </tr>\n          </tbody>\n          <tbody *ngIf=\"newPaginated.length == 0 && dataStatus === false\" class=\"records\">\n            <tr>\n              <td colspan=\"8\" *ngIf=\"!isProfessional\" class=\"records\">\n                No Records Found\n              </td>\n              <td colspan=\"6\" *ngIf=\"isProfessional\" class=\"records\">\n                No Records Found\n              </td>\n            </tr>\n          </tbody>\n        </table> -->\n<!-- </div>\n      <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n        <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n          <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n            [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"pagedisplaysize\" [count]=\"totalRow\">\n          </pagination>\n        </div>\n      </div>\n    </section>\n  </aside>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/courses/courses.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/courses/courses.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"report-wrapper clearFix headerSection\" style=\"height: 90vh;\">\n  <!-- <aside class=\"middle-full\"> -->\n  <section class=\"middle-main clearFix\">\n\n    <div class=\"middle-top mb0 clearFix header\">\n      <div class=\"\" style=\"padding-bottom:2%\">\n        <h2 style=\"padding: 5px;\" class=\"pull-left\">\n          <a>\n            Classes\n          </a>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n          <a routerLink=\"/view/course/archiving\">\n            Course Deletion\n          </a>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"!isProfessional\"></i>\n          <span *ngIf=\"!isProfessional\">Delete Courses</span>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\" *ngIf=\"isProfessional\"></i>\n          <span *ngIf=\"isProfessional\">Delete Batches</span>\n        </h2>\n      </div>\n    </div>\n    <div class=\"filter-box clearFix\" style=\"margin-top: -20px;margin-bottom: 20px;\">\n      <div id=\"basic-search\" class=\"search-filter-wrapper\" style=\"float: right;margin-right: 7rem;\">\n        <input #search type=\"text\" class=\"search-field\" placeholder=\"Search\" [(ngModel)]=\"searchText\" name=\"searchData\"\n          (keyup)=\"searchDatabase()\" style=\"padding: 10px;border:1px solid lightgrey;border-radius: 4px;\">\n      </div>\n      <div *ngIf=\"isProfessional\" style=\"float: right;margin-right: -17rem;\">\n        <button type=\"button\" class=\"btn\" value=\"Delete\" (click)=\"archiveData($event)\">Delete</button>\n      </div>\n      <div *ngIf=\"!isProfessional\" style=\"float: right;margin-right: -17rem;\">\n        <button type=\"button\" class=\"btn\" value=\"Delete\" (click)=\"archiveData($event)\">Delete</button>\n      </div>\n    </div>\n  </section>\n  <!-- <div class=\"filter-box clearFix\">\n    <div id=\"basic-search\" class=\"search-filter-wrapper\" style=\"float: right;margin-right: 7rem;\">\n      <input #search type=\"text\" class=\"search-field\" placeholder=\"Search\" [(ngModel)]=\"searchText\" name=\"searchData\"\n        (keyup)=\"searchDatabase()\" style=\"padding: 10px;border:1px solid lightgrey;border-radius: 4px;\">\n    </div>\n    <div *ngIf=\"isProfessional\" style=\"float: right;margin-right: -17rem;\">\n      <button type=\"button\" class=\"btn\" value=\"Archive\" (click)=\"archiveData($event)\">Archive</button>\n    </div>\n    <div *ngIf=\"!isProfessional\" style=\"float: right;margin-right: -17rem;\">\n      <button type=\"button\" class=\"btn\" value=\"Archive\" (click)=\"archiveData($event)\">Archive</button>\n    </div>\n  </div> -->\n  <section style=\"margin-top: -19px;\">\n\n    <div class=\"table table-responsive table-made\">\n      <table class=\"tableBodyScroll\">\n        <thead>\n          <tr>\n            <th style=\"text-align: left;\" *ngIf=\"!isProfessional\" (click)=\"sortedData('course_name') \"\n              style=\"width: 14%;\">\n              <!-- changes by Nalini - to handle school model conditions -->\n              # &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{schoolModel ? 'Section' : 'Course'}} &nbsp;\n              <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('course_name') && direction == 1\"></i>\n              <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('course_name') && direction != 1\"></i>\n            </th>\n            <th style=\"text-align: left;\" *ngIf=\"isProfessional\" (click)=\"sortedData('batch_name') \"\n              style=\"width: 14%;\">\n              # &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Batch &nbsp;\n              <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('batch_name') && direction == 1\"></i>\n              <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('batch_name') && direction != 1\"></i>\n            </th>\n            <th (click)=\"sortedData('standard_name') \" *ngIf=\"isProfessional\" style=\"width: 10%;padding: 10px 0px;\">\n              Master Course &nbsp;\n              <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('standard_name') && direction == 1\"></i>\n              <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('standard_name') && direction != 1\"></i>\n            </th>\n            <th (click)=\"sortedData('master_course') \" *ngIf=\"!isProfessional\" style=\"width: 10%;padding: 10px 0px;\">\n              <!-- changes by Nalini - to handle school model conditions -->\n              {{schoolModel ? 'Standard' : 'Master Course'}} &nbsp;\n              <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('master_course') && direction == 1\"></i>\n              <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('master_course') && direction != 1\"></i>\n            </th>\n            <th *ngIf=\"!isProfessional && !schoolModel\" (click)=\"sortedData('standard_name') \" style=\"width: 10%;\">\n              Standard &nbsp;\n              <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('standard_name') && direction == 1\"></i>\n              <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('standard_name') && direction != 1\"></i>\n            </th>\n            <th *ngIf=\"isProfessional\" (click)=\"sortedData('subject_name') \" style=\"width: 10%;\">\n              Course &nbsp;\n              <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('subject_name') && direction == 1\"></i>\n              <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('subject_name') && direction != 1\"></i>\n            </th>\n            <th *ngIf=\"!isProfessional\" (click)=\"sortedData('subjects') \" style=\"text-align:left;\">\n              &nbsp;&nbsp; Subjects &nbsp;\n              <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('subjects') && direction == 1\"></i>\n              <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('subjects') && direction != 1\"></i>\n            </th>\n            <th (click)=\"sortedData('start_date') \" style=\"text-align: center;width: 12%;\">\n              Start Date &nbsp;\n              <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('start_date') && direction == 1\"></i>\n              <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('start_date') && direction != 1\"></i>\n            </th>\n            <th (click)=\"sortedData('end_date') \" style=\"text-align: center;width: 12%;\">\n              End Date &nbsp;\n              <i class=\"fa fa-caret-up\" *ngIf=\"getCaretVisiblity('end_date') && direction == 1\"></i>\n              <i class=\"fa fa-caret-down\" *ngIf=\"getCaretVisiblity('end_date') && direction != 1\"></i>\n            </th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"newPaginated!=0\">\n          <tr *ngFor=\"let i of newPaginated ; let j=index;\">\n            <td *ngIf=\"!isProfessional\" style=\"text-align: left;  padding:5px 0px 10px 5px;width: 14%;word-break: break-all; \">\n              <div class=\"field-checkbox-wrapper\"\n                style=\"display: inline-block;margin-top: 5px; height:16px; margin-right: 10px;\">\n                <input type=\"checkbox\" class=\"form-checkbox\" name={{i.course_id}} id={{i.course_id}}\n                  [(ngModel)]=\"i.status\" (ngModelChange)=\"notifyMe(j)\" style=\"height:15px; margin-right: 10px;\">\n                <label for={{i.course_id}}></label>\n              </div>\n              {{i.course_name}}\n            </td>\n            <td *ngIf=\"isProfessional\" style=\"text-align: left; padding:5px 0px 10px 5px;width: 14%;\">\n              <div class=\"field-checkbox-wrapper\"\n                style=\"display: inline-block;margin-top: 5px; height:16px; margin-right: 10px;\">\n                <input type=\"checkbox\" class=\"form-checkbox\" name={{i.batch_id}} id={{i.batch_id}}\n                  [(ngModel)]=\"i.status\" (ngModelChange)=\"notifyMe(j)\">\n                <label for={{i.batch_id}}></label>\n              </div>\n              {{i.batch_name}}\n            </td>\n            <td *ngIf=\"!isProfessional\" style=\"width: 10%;padding: 10px 0px;\">\n              {{i.master_course}}\n            </td>\n            <td *ngIf=\"isProfessional\" style=\"width: 10%;padding: 10px 0px;width: 10%;\">\n              {{i.standard_name}}\n            </td>\n            <td *ngIf=\"!isProfessional && !schoolModel\" style=\"width: 10%;\">\n              {{i.standard_name}}\n            </td>\n            <td *ngIf=\"!isProfessional\">\n              {{i.subjects}}\n            </td>\n            <td *ngIf=\"isProfessional\">\n              {{i.subject_name}}\n            </td>\n            <td style=\"text-align: center;width: 12%;\">\n              {{i.start_date | date:'dd-MMM-yy'}}\n            </td>\n            <td style=\"text-align: center;width: 12%;\">\n              {{i.end_date | date:'dd-MMM-yy'}}\n            </td>\n          </tr>\n          <!-- <tr *ngIf=\"isProfessional\">\n              <td>\n              </td>\n              <td>\n              </td>\n              <td>\n              </td>\n              <td>\n              </td>\n              <td>\n                <input type=\"button\" class=\"btn fullBlue\" value=\"Archive\" (click)=\"archiveData($event)\"\n                  style=\"float: right;\">\n              </td>\n            </tr> -->\n          <!-- <tr *ngIf=\"!isProfessional\">\n              <td>\n              </td>\n              <td>\n              </td>\n              <td>\n              </td>\n              <td>\n              </td>\n              <td>\n              </td>\n              <td>\n                <input type=\"button\" class=\"btn fullBlue\" value=\"Archive\" (click)=\"archiveData($event)\"\n                  style=\"float: right;\">\n              </td>\n            </tr> -->\n        </tbody>\n        <tbody *ngIf=\"newPaginated.length == 0 && dataStatus === true\">\n          <tr *ngFor=\"let dummy of dummyArr\">\n            <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n              <div class=\"skeleton\">\n              </div>\n            </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"newPaginated.length == 0 && dataStatus === false\" class=\"records\">\n          <tr>\n            <td colspan=\"6\" class=\"records\">\n              No Records Found\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\" style=\"margin-top: -18px;\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"pagedisplaysize\" [count]=\"totalRow\" [sizeArr]=\"sizeArr\"\n          (sizeChange)=\"updateTableBatchSize($event)\">\n        </pagination>\n      </div>\n    </div>\n  </section>\n  <!-- </aside> -->\n</div>");

/***/ }),

/***/ "./src/app/components/course-module/Archiving/archiving-home/archiving-home.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/archiving-home/archiving-home.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/** these css for gear icon download options\n* created by laxmi\n*/\nsvg:hover #gearIcon {\n  fill: #0084f6;\n}\n.asHover:hover {\n  color: #0084f6 !important;\n}\n.download:hover {\n  cursor: pointer;\n}\n.made-in {\n  font-size: 17px;\n  font-weight: bold;\n  text-align: left;\n}\n.dropdown > ul {\n  background: #fff;\n  padding: 10px 20px;\n  border: 1px solid #eaeaeb;\n  border-top: 0;\n  margin-top: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 6px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.dropdown > ul li {\n  color: #333;\n}\n.dropdown > ul li strong {\n  font-weight: 600;\n  display: block;\n}\n.dropdown > ul li a {\n  display: block;\n  color: #333;\n}\n.login-tube nav > ul > li {\n  display: inline-block;\n  position: relative;\n}\n.login-tube nav > ul > li > a {\n  color: #333;\n  text-decoration: none;\n  padding: 5px 10px;\n  display: block;\n  transition: all .4s;\n}\n.login-tube nav > ul > li > a:hover,\n.login-tube nav > ul > li:hover > a {\n  text-decoration: none;\n  background: #ccc;\n}\n.login-tube nav > ul > li .dropdown {\n  position: absolute;\n  visibility: hidden;\n  right: 0;\n  top: 100%;\n  min-width: 200px;\n  border-top: 0;\n  opacity: 0;\n  transition: all 0.1s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .2s;\n  transform: scale(0.5);\n}\n.login-tube nav > ul > li .dropdown > ul li {\n  line-height: normal;\n}\n.login-tube nav > ul > li .dropdown > ul li a {\n  display: block;\n  margin: 5px 0;\n}\n.login-tube nav > ul > li .dropdown > ul li a:hover {\n  color: #0084f6;\n}\n.login-tube nav > ul > li .dropdown > ul ul {\n  padding-left: 15px;\n  padding-top: 10px;\n}\n.login-tube nav > ul > li .dropdown > ul ul ul {\n  padding-top: 0;\n}\n.login-tube nav > ul > li:hover .dropdown {\n  visibility: visible;\n  position: absolute;\n  opacity: 1;\n  right: 0;\n  top: 100%;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .5s;\n  transform: scale(1);\n}\n.span-button {\n  border: 1px solid #0084f6;\n  padding: 4px 8px;\n  color: #0084f6;\n  font-size: .9em;\n  border-radius: 2px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.span-button svg {\n  margin: -3px 0;\n  height: 14px;\n}\nlogin-nav > li {\n  display: inline-block;\n  padding: 0 7px;\n  cursor: pointer;\n  vertical-align: text-bottom;\n}\nlogin-nav > li .dropdown {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  padding-top: 10px;\n}\nlogin-nav > li .icons {\n  width: 35px;\n  height: 35px;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 50%;\n  padding-top: 3px;\n  transition: all 0.1s;\n  border: 1px solid transparent;\n}\nlogin-nav > li .icons svg {\n  width: 25px;\n  color: #034979;\n}\nlogin-nav > li .icons svg .cls-1 {\n  stroke: #034979;\n  stroke-linejoin: unset;\n  border: none;\n}\nlogin-nav > li .user-info {\n  white-space: nowrap;\n  margin-right: 40px;\n  width: auto;\n  display: block;\n  position: relative;\n}\nlogin-nav > li .user-info > .icons {\n  display: inline-block;\n  vertical-align: middle;\n}\nlogin-nav > li .user-info > span {\n  vertical-align: middle;\n  display: inline-block;\n}\nlogin-nav > li .user-info:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f107\";\n  font-size: 17px;\n  position: absolute;\n  right: -20px;\n  top: 10px;\n}\n/**\n  this css is for report section css for cards\n  added by laxmi\n*/\n.report-box {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}\n.report-box ul.card-box li.card-row {\n  margin: 10px 0px;\n}\n.report-box ul.card {\n  padding: 15px 10px;\n  border: 1px solid #efefef;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 10px 0px;\n  box-shadow: 0px 0px 2px 0px;\n}\n.report-box ul.card li {\n  padding: 5px;\n}\n.report-box ul.card li:first-child {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n.report-box ul.card li:nth-child(2n) {\n  font-size: 12px;\n}\n.disabled {\n  cursor: not-allowed;\n  background: lightgrey;\n}\n.middle-section {\n  padding: 1%;\n}\n.header-section .header-title {\n  text-align: left;\n  font-size: 14px;\n  font-weight: 600;\n}\n.course-menu-section-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  padding-top: 10px;\n  margin-top: 10px;\n  border-top: 1px solid rgba(10, 10, 10, 0.5);\n  width: 100%;\n}\n.course-menu-section-container .course-menu-item {\n  padding: 15px 10px;\n  width: 31%;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 1%;\n  box-shadow: 0px 3px 6px #696969;\n}\n.course-menu-section-container .course-menu-item .menu-title {\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n}\n.course-menu-section-container .course-menu-item .menu-title img {\n  width: 25px;\n  height: 25px;\n}\n.course-menu-section-container .course-menu-item .menu-title span {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n.course-menu-section-container .course-menu-item .menu-description {\n  padding: 10px;\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL0FyY2hpdmluZy9hcmNoaXZpbmctaG9tZS9hcmNoaXZpbmctaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvY3NzL2NvbW1vbi9jb21tb24td2ViLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ3JCeEI7QURqQkE7RUF3Q1UsVUFBVTtFQUNWLGtCQUFrQjtBQ25CNUI7QUNwR0E7O0NEd0dDO0FDckdEO0VBQ0UsYUFBYTtBRHVHZjtBQ3BHQTtFQUNFLHlCQUF5QjtBRHVHM0I7QUNwR0E7RUFDRSxlQUFlO0FEdUdqQjtBQ3BHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FEdUdsQjtBQ3BHQTtFQUVJLGdCRmxCVztFRW1CWCxrQkFBa0I7RUFDbEIseUJGWGtCO0VFWWxCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0hBQWdIO0FEc0dwSDtBQzdHQTtFQVVNLFdBQVc7QUR1R2pCO0FDakhBO0VBYVEsZ0JBQWdCO0VBQ2hCLGNBQWM7QUR3R3RCO0FDdEhBO0VBa0JRLGNBQWM7RUFDZCxXQUFXO0FEd0duQjtBQ2xHQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QURxR3BCO0FDbEdBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtBRHFHckI7QUNsR0E7O0VBRUUscUJBQXFCO0VBQ3JCLGdCQUFnQjtBRHFHbEI7QUNsR0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBRVYscURBQWlEO0VBRWpELHdCQUF3QjtFQUN4QixxQkFBcUI7QURxR3ZCO0FDakhBO0VBZ0JNLG1CQUFtQjtBRHFHekI7QUNySEE7RUFtQlEsY0FBYztFQUNkLGFBQWE7QURzR3JCO0FDMUhBO0VBdUJVLGNGakZXO0FDd0xyQjtBQzlIQTtFQTZCTSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FEcUd2QjtBQ25JQTtFQWlDUSxjQUFjO0FEc0d0QjtBQ2hHQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBRVQscURBQWlEO0VBRWpELHdCQUF3QjtFQUN4QixtQkFBbUI7QURtR3JCO0FDM0ZBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBRDhGakI7QUNyR0E7RUFVSSxjQUFjO0VBQ2QsWUFBWTtBRCtGaEI7QUMzRkE7RUFFUSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZiwyQkFBMkI7QUQ2Rm5DO0FDbEdBO0VBUVksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0FEOEY3QjtBQ3pHQTtFQXNCWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtBRHVGekM7QUNySEE7RUFnQ2dCLFdBQVc7RUFDWCxjQUFhO0FEeUY3QjtBQzFIQTtFQW9Db0IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0FEMEZoQztBQ2hJQTtFQTJDWSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FEeUY5QjtBQ3hJQTtFQWlEZ0IscUJBQXFCO0VBQ3JCLHNCQUFzQjtBRDJGdEM7QUM3SUE7RUFxRGdCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUQ0RnJDO0FDbEpBO0VBeURnQixxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0FENkZ6QjtBQ3ZGQTs7O0NENEZDO0FDeEZEO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FEMEZmO0FDN0ZBO0VBUWtCLGdCQUFnQjtBRHlGbEM7QUNqR0E7RUFhVSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBRHdGckM7QUM3R0E7RUErQmMsWUFBWTtBRGtGMUI7QUNqSEE7RUF3QmtCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FENkZuQztBQ3ZIQTtFQTZCa0IsZUFBZTtBRDhGakM7QUN0RkE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FEeUZ2QjtBQXBWQTtFQUNJLFdBQVc7QUF1VmY7QUFwVkU7RUFFSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQXNWdEI7QUFsVkU7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwyQ0FBd0M7RUFDeEMsV0FBVztBQXFWZjtBQTdWRTtFQVVJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBRVYsK0JBQStCO0FBdVZyQztBQTFXRTtFQXFCTSxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtBQXlWM0I7QUFuWEU7RUE0QlEsV0FBVztFQUNYLFlBQVk7QUEyVnRCO0FBeFhFO0VBZ0NRLGlCQUFpQjtFQUNqQixlQUFlO0FBNFZ6QjtBQTdYRTtFQXFDTSxhQUFhO0VBQ2IsZUFBZTtBQTRWdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvQXJjaGl2aW5nL2FyY2hpdmluZy1ob21lL2FyY2hpdmluZy1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vY29tbW9uLXdlYi5zY3NzXCI7XG5cbi5taWRkbGUtc2VjdGlvbntcbiAgICBwYWRkaW5nOiAxJTtcbiAgfVxuICBcbiAgLmhlYWRlci1zZWN0aW9ue1xuICAgIC5oZWFkZXItdGl0bGV7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5jb3Vyc2UtbWVudS1zZWN0aW9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEwLDEwLDEwLDAuNSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmNvdXJzZS1tZW51LWl0ZW17XG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICB3aWR0aDogMzElO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luOiAxJTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzY5Njk2OTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICM2OTY5Njk7XG4gICAgICAubWVudS10aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubWVudS1kZXNjcmlwdGlvbntcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbi8qKiB0aGVzZSBjc3MgZm9yIGdlYXIgaWNvbiBkb3dubG9hZCBvcHRpb25zXG4qIGNyZWF0ZWQgYnkgbGF4bWlcbiovXG5zdmc6aG92ZXIgI2dlYXJJY29uIHtcbiAgZmlsbDogIzAwODRmNjtcbn1cblxuLmFzSG92ZXI6aG92ZXIge1xuICBjb2xvcjogIzAwODRmNiAhaW1wb3J0YW50O1xufVxuXG4uZG93bmxvYWQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWRlLWluIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgJiA+IHVsIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4OyAvLyB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGhlYWRlci1ib3JkZXI7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuICAgIGxpIHtcbiAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9naW4tdHViZSBuYXYgPiB1bCA+IGxpID4gYSB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSA+IGE6aG92ZXIsXG4ubG9naW4tdHViZSBuYXYgPiB1bCA+IGxpOmhvdmVyID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSAuZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGN1YmljLWJlemllciguNTUsIDAsIC41NSwgLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGN1YmljLWJlemllciguNTUsIDAsIC41NSwgLjIpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4yNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuXG4gICYgPiB1bCB7XG4gICAgbGkge1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaTpob3ZlciAuZHJvcGRvd24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnB1bGwtcmlnaHQge1xuICAvLyBtYXJnaW4tdG9wOiAyNnB4O1xuICAvLyBtYXJnaW4tbGVmdDogMTIycHg7XG59XG5cbi5zcGFuLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGNvbG9yOiAjMDA4NGY2O1xuICBmb250LXNpemU6IC45ZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAtM3B4IDA7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICB9XG59XG5cbmxvZ2luLW5hdiB7XG4gICAgJj5saSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmljb25zIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pY29ucyB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDsgLy8gYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjojMDM0OTc5O1xuXG4gICAgICAgICAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAjMDM0OTc5O1xuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAmPi5pY29ucyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmPnNwYW4ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxMDdcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICB0aGlzIGNzcyBpcyBmb3IgcmVwb3J0IHNlY3Rpb24gY3NzIGZvciBjYXJkc1xuICBhZGRlZCBieSBsYXhtaVxuKi9cbi5yZXBvcnQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgdWwge1xuICAgICAgJi5jYXJkLWJveCB7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAmLmNhcmQtcm93IHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHg7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOm50aC1jaGlsZCgybil7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4uZGlzYWJsZWR7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/Archiving/archiving-home/archiving-home.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/archiving-home/archiving-home.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ArchivingHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivingHomeComponent", function() { return ArchivingHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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


let ArchivingHomeComponent = /** @class */ (() => {
    let ArchivingHomeComponent = class ArchivingHomeComponent {
        constructor(auth) {
            this.auth = auth;
            this.type = '';
        }
        ngOnInit() {
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.isProfessional = true;
                    this.type = 'batch';
                }
                else {
                    this.isProfessional = false;
                    this.type = 'course';
                }
            });
        }
    };
    ArchivingHomeComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] }
    ];
    ArchivingHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archiving-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./archiving-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/archiving-home/archiving-home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./archiving-home.component.scss */ "./src/app/components/course-module/Archiving/archiving-home/archiving-home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]])
    ], ArchivingHomeComponent);
    return ArchivingHomeComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/Archiving/archiving-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/archiving-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ArchivingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivingRoutingModule", function() { return ArchivingRoutingModule; });
/* harmony import */ var _archiving_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./archiving.component */ "./src/app/components/course-module/Archiving/archiving.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _archiving_home_archiving_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archiving-home/archiving-home.component */ "./src/app/components/course-module/Archiving/archiving-home/archiving-home.component.ts");
/* harmony import */ var _batches_batches_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./batches/batches.component */ "./src/app/components/course-module/Archiving/batches/batches.component.ts");
/* harmony import */ var _batches_archived_report_batches_archived_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./batches-archived-report/batches-archived-report.component */ "./src/app/components/course-module/Archiving/batches-archived-report/batches-archived-report.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/components/course-module/Archiving/courses/courses.component.ts");
/* harmony import */ var _courses_archived_report_courses_archived_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./courses-archived-report/courses-archived-report.component */ "./src/app/components/course-module/Archiving/courses-archived-report/courses-archived-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let ArchivingRoutingModule = /** @class */ (() => {
    let ArchivingRoutingModule = class ArchivingRoutingModule {
    };
    ArchivingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _archiving_component__WEBPACK_IMPORTED_MODULE_0__["ArchivingComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: '',
                                component: _archiving_home_archiving_home_component__WEBPACK_IMPORTED_MODULE_3__["ArchivingHomeComponent"]
                            },
                            {
                                path: 'home',
                                component: _archiving_home_archiving_home_component__WEBPACK_IMPORTED_MODULE_3__["ArchivingHomeComponent"]
                            },
                            {
                                path: 'batches',
                                component: _batches_batches_component__WEBPACK_IMPORTED_MODULE_4__["BatchesComponent"]
                            },
                            {
                                path: 'batchesArchivedReport',
                                component: _batches_archived_report_batches_archived_report_component__WEBPACK_IMPORTED_MODULE_5__["BatchesArchivedReportComponent"]
                            },
                            {
                                path: 'courses',
                                component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_6__["CoursesComponent"]
                            },
                            {
                                path: 'coursesArchivedReport',
                                component: _courses_archived_report_courses_archived_report_component__WEBPACK_IMPORTED_MODULE_7__["CoursesArchivedReportComponent"]
                            }
                        ]
                    }
                ])
            ]
        })
    ], ArchivingRoutingModule);
    return ArchivingRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/Archiving/archiving.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/archiving.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9BcmNoaXZpbmcvYXJjaGl2aW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/course-module/Archiving/archiving.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/archiving.component.ts ***!
  \***************************************************************************/
/*! exports provided: ArchivingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivingComponent", function() { return ArchivingComponent; });
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

let ArchivingComponent = /** @class */ (() => {
    let ArchivingComponent = class ArchivingComponent {
        constructor() { }
        ngOnInit() {
        }
    };
    ArchivingComponent.ctorParameters = () => [];
    ArchivingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archiving',
            template: __importDefault(__webpack_require__(/*! raw-loader!./archiving.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/archiving.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./archiving.component.scss */ "./src/app/components/course-module/Archiving/archiving.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ArchivingComponent);
    return ArchivingComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/Archiving/archiving.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/archiving.module.ts ***!
  \************************************************************************/
/*! exports provided: ArchivingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivingModule", function() { return ArchivingModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _archiving_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./archiving-routing.module */ "./src/app/components/course-module/Archiving/archiving-routing.module.ts");
/* harmony import */ var _archiving_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./archiving.component */ "./src/app/components/course-module/Archiving/archiving.component.ts");
/* harmony import */ var _batches_batches_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./batches/batches.component */ "./src/app/components/course-module/Archiving/batches/batches.component.ts");
/* harmony import */ var _archiving_home_archiving_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./archiving-home/archiving-home.component */ "./src/app/components/course-module/Archiving/archiving-home/archiving-home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _batches_archived_report_batches_archived_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./batches-archived-report/batches-archived-report.component */ "./src/app/components/course-module/Archiving/batches-archived-report/batches-archived-report.component.ts");
/* harmony import */ var _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/archiving-service/courses-service.service */ "./src/app/services/archiving-service/courses-service.service.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/components/course-module/Archiving/courses/courses.component.ts");
/* harmony import */ var _courses_archived_report_courses_archived_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./courses-archived-report/courses-archived-report.component */ "./src/app/components/course-module/Archiving/courses-archived-report/courses-archived-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';











let ArchivingModule = /** @class */ (() => {
    let ArchivingModule = class ArchivingModule {
    };
    ArchivingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                // BsDatepickerModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _archiving_routing_module__WEBPACK_IMPORTED_MODULE_4__["ArchivingRoutingModule"]
            ],
            declarations: [
                _archiving_component__WEBPACK_IMPORTED_MODULE_5__["ArchivingComponent"],
                _batches_batches_component__WEBPACK_IMPORTED_MODULE_6__["BatchesComponent"],
                _archiving_home_archiving_home_component__WEBPACK_IMPORTED_MODULE_7__["ArchivingHomeComponent"],
                _batches_archived_report_batches_archived_report_component__WEBPACK_IMPORTED_MODULE_9__["BatchesArchivedReportComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_11__["CoursesComponent"],
                _courses_archived_report_courses_archived_report_component__WEBPACK_IMPORTED_MODULE_12__["CoursesArchivedReportComponent"],
            ],
            entryComponents: [
                _archiving_component__WEBPACK_IMPORTED_MODULE_5__["ArchivingComponent"],
                _batches_batches_component__WEBPACK_IMPORTED_MODULE_6__["BatchesComponent"],
                _archiving_home_archiving_home_component__WEBPACK_IMPORTED_MODULE_7__["ArchivingHomeComponent"],
                _batches_archived_report_batches_archived_report_component__WEBPACK_IMPORTED_MODULE_9__["BatchesArchivedReportComponent"],
            ],
            providers: [
                _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_10__["CoursesServiceService"]
            ]
        })
    ], ArchivingModule);
    return ArchivingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/Archiving/batches-archived-report/batches-archived-report.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/batches-archived-report/batches-archived-report.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 80%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n\n.skeleton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL0FyY2hpdmluZy9iYXRjaGVzLWFyY2hpdmVkLXJlcG9ydC9iYXRjaGVzLWFyY2hpdmVkLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFSZ0I7RUFTaEIsa0JBQWtCO0FBSHRCOztBQUhBO0VBUVEsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkRBQThFO0VBQzlFLG1EQUEyQztVQUEzQywyQ0FBMkM7QUFEbkQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvQXJjaGl2aW5nL2JhdGNoZXMtYXJjaGl2ZWQtcmVwb3J0L2JhdGNoZXMtYXJjaGl2ZWQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWJhc2U6ICNlZmVmZWY7XG4kY29sb3ItYmFzZTogI2VmZWZlZjtcbiRjb2xvci1oaWdobGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLWJhc2UsXG43JSk7XG4uc2tlbGV0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1iYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkY29sb3ItYmFzZSwgJGNvbG9yLWhpZ2hsaWdodCwgJGNvbG9yLWJhc2UpO1xuICAgICAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/course-module/Archiving/batches-archived-report/batches-archived-report.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/batches-archived-report/batches-archived-report.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BatchesArchivedReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchesArchivedReportComponent", function() { return BatchesArchivedReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/archiving-service/courses-service.service */ "./src/app/services/archiving-service/courses-service.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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





let BatchesArchivedReportComponent = /** @class */ (() => {
    let BatchesArchivedReportComponent = class BatchesArchivedReportComponent {
        constructor(course, auth, appc) {
            this.course = course;
            this.auth = auth;
            this.appc = appc;
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.archivedData = [];
            this.PageIndex = 1;
            this.PageIndexPopup = 1;
            this.pagedisplaysize = 25;
            this.pagedisplaysizePopup = 10;
            this.totalRow = 0;
            this.newPaginated = [];
            this.searchText = "";
            this.searchData = [];
            this.searchflag = false;
            this.dummyArr = [0, 1, 2, 0, 1, 2];
            this.columnMaps = [0, 1, 2, 3, 4, 5];
            this.columnMaps2 = [0, 1, 2, 3, 4, 5, 6, 7];
            this.sortedenabled = true;
            this.sortedBy = "";
            this.direction = 0;
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
            this.getCoursesArchived();
            this.setTableData();
        }
        setTableData() {
            this.headerSetting = [
                {
                    primary_key: 'batch_name',
                    value: "Batch",
                    charactLimit: 10,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'standard_name',
                    value: "Master Course",
                    charactLimit: 10,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'subject_name',
                    value: "Course",
                    charactLimit: 10,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'status',
                    value: "Status",
                    charactLimit: 10,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'archived_date',
                    value: "Deleted Date Time",
                    charactLimit: 20,
                    sorting: false,
                    visibility: true
                },
            ];
            this.tableSetting = {
                width: "100%",
                height: "69vh"
            };
            this.rowColumns = [
                {
                    width: "20%",
                    textAlign: "left"
                },
                {
                    width: "20%",
                    textAlign: "left"
                },
                {
                    width: "20%",
                    textAlign: "left"
                },
                {
                    width: "20%",
                    textAlign: "left"
                },
                {
                    width: "20%",
                    textAlign: "left"
                },
            ];
        }
        getCoursesArchived() {
            this.dataStatus = true;
            this.auth.showLoader();
            if (this.isProfessional) {
                this.course.batchArchiveStatus().subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    for (let i = 0; i < data.length; i++) {
                        data[i].archived_date = moment__WEBPACK_IMPORTED_MODULE_1__(data[i].archived_date).format('DD-MMM-YY, h:mm:ss A');
                        data[i].end_date = moment__WEBPACK_IMPORTED_MODULE_1__(data[i].end_date).format('DD-MMM-YY');
                        data[i].start_date = moment__WEBPACK_IMPORTED_MODULE_1__(data[i].start_date).format('DD-MMM-YY');
                    }
                    this.archivedData = data;
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
                });
            }
            else {
                this.auth.showLoader();
                this.course.courseArchiveStatus().subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    for (let i = 0; i < data.length; i++) {
                        data[i].archived_date = moment__WEBPACK_IMPORTED_MODULE_1__(data[i].archived_date).format('DD-MMM-YY, h:mm:ss A');
                        data[i].end_date = moment__WEBPACK_IMPORTED_MODULE_1__(data[i].end_date).format('DD-MMM-YY');
                        data[i].start_date = moment__WEBPACK_IMPORTED_MODULE_1__(data[i].start_date).format('DD-MMM-YY');
                    }
                    this.archivedData = data;
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
                });
            }
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                this.PageIndex = 1;
                let searchRes;
                searchRes = this.archivedData.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.searchData = searchRes;
                this.totalRow = searchRes.length;
                this.searchflag = true;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else {
                this.searchflag = false;
                this.fetchTableDataByPage(this.PageIndex);
                this.totalRow = this.archivedData.length;
            }
        }
        sortedData(ev) {
            this.sortedenabled = true;
            if (this.sortedenabled) {
                (this.direction == 0 || this.direction == -1) ? (this.direction = 1) : (this.direction = -1);
                this.sortedBy = ev;
                this.archivedData = this.archivedData.sort((a, b) => {
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
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.pagedisplaysize * (index - 1);
            this.newPaginated = this.getDataFromDataSource(startindex);
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
                let t = this.archivedData.slice(startindex, startindex + this.pagedisplaysize);
                return t;
            }
        }
        updateTableBatchSize(event) {
            this.pagedisplaysize = event;
            this.fetchTableDataByPage(this.PageIndex);
        }
    };
    BatchesArchivedReportComponent.ctorParameters = () => [
        { type: _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_3__["CoursesServiceService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] }
    ];
    BatchesArchivedReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-batches-archived-report',
            template: __importDefault(__webpack_require__(/*! raw-loader!./batches-archived-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/batches-archived-report/batches-archived-report.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./batches-archived-report.component.scss */ "./src/app/components/course-module/Archiving/batches-archived-report/batches-archived-report.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_3__["CoursesServiceService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"],
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], BatchesArchivedReportComponent);
    return BatchesArchivedReportComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/Archiving/batches/batches.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/batches/batches.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  background-color: #e0eaec;\n  color: black;\n  padding: 10px 10px;\n}\n\ntr {\n  border-radius: 12px;\n  border-left: 5px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.tableBodyScroll tbody {\n  display: block;\n  max-height: 73vh;\n  min-height: 73vh;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.headerSection {\n  background: white;\n}\n\n.btn {\n  background: #0084f6;\n  color: white;\n}\n\ntable th, table td {\n  text-align: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL0FyY2hpdmluZy9iYXRjaGVzL2JhdGNoZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtFQUNJLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixlQUFlO0FBRW5COztBQUFBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUd2Qjs7QUFDQTs7RUFFSSxjQUFjO0VBQ2YsV0FBWTtFQUNYLG1CQUFtQjtBQUV2Qjs7QUFDQTtFQUNJLGlCQUFpQjtBQUVyQjs7QUFBQTtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0FBR2hCOztBQURBO0VBQ0ksZ0JBQWdCO0FBSXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL0FyY2hpdmluZy9iYXRjaGVzL2JhdGNoZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlYWVjO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG50ciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlMGVhZWM7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnRhYmxlQm9keVNjcm9sbCB0Ym9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LWhlaWdodDogNzN2aDtcbiAgICBtaW4taGVpZ2h0OiA3M3ZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTIsIDIxMywgMC41KTtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGhlYWQsXG50Ym9keSB0ciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICB3aWR0aCA6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLmhlYWRlclNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbnRhYmxlIHRoLCB0YWJsZSB0ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/course-module/Archiving/batches/batches.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/batches/batches.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchesComponent", function() { return BatchesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/archiving-service/courses-service.service */ "./src/app/services/archiving-service/courses-service.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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





let BatchesComponent = /** @class */ (() => {
    let BatchesComponent = class BatchesComponent {
        constructor(auth, batch, appc, router) {
            this.auth = auth;
            this.batch = batch;
            this.appc = appc;
            this.router = router;
            this.isProfessional = false;
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.getCourses = [];
            this.PageIndex = 1;
            this.PageIndexPopup = 1;
            this.pagedisplaysize = 25;
            this.pagedisplaysizePopup = 10;
            this.totalRow = 0;
            this.newPaginated = [];
            this.searchText = "";
            this.searchData = [];
            this.searchflag = false;
            this.sendPayload = {
                courseIds: "",
                archived: false
            };
            this.sendPayloadBatch = {
                batchIds: "",
                archived: false
            };
            this.courseIds = [];
            this.getArr = [];
            this.getId = [];
            this.dummyArr = [0, 1, 2, 0, 1, 2];
            this.columnMaps = [0, 1, 2, 3, 4, 5];
            this.columnMaps2 = [0, 1, 2, 3, 4, 5, 6, 7];
            this.sortedenabled = true;
            this.sortedBy = "";
            this.direction = 0;
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
            this.getCoursesList();
        }
        getCoursesList() {
            this.dataStatus = true;
            if (this.isProfessional) {
                this.auth.showLoader();
                this.batch.getBatches().subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    this.getCourses = data;
                    this.getCourses.map((ele) => {
                        ele.status = false;
                    });
                    this.totalRow = data.length;
                    this.PageIndex = 1;
                    this.fetchTableDataByPage(this.PageIndex);
                }, (error) => {
                    this.auth.showLoader();
                    this.dataStatus = false;
                    let msg = {
                        type: "error",
                        body: error.error.message
                    };
                    this.appc.popToast(msg);
                });
            }
            else {
                this.dataStatus = true;
                this.auth.showLoader();
                this.batch.getCoursesList().subscribe((data) => {
                    this.auth.hideLoader();
                    this.dataStatus = false;
                    this.getCourses = data;
                    this.getCourses.map((ele) => {
                        ele.status = false;
                    });
                    this.totalRow = data.length;
                    this.PageIndex = 1;
                    this.fetchTableDataByPage(this.PageIndex);
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
        notifyMe(e) {
            let str = "";
            if (!this.isProfessional) {
                if (this.newPaginated[e].status == true) {
                    this.getArr.push(this.newPaginated[e].course_id);
                }
                else {
                    this.getArr = this.getArr.filter((ele) => {
                        if (ele == this.newPaginated[e].course_id) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                }
                str = this.getArr.join(',');
                this.sendPayload.courseIds = str;
            }
            else {
                if (this.newPaginated[e].status) {
                    this.getArr.push(this.newPaginated[e].batch_id);
                }
                else {
                    this.getArr = this.getArr.filter((ele) => {
                        if (ele == this.newPaginated[e].batch_id) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                }
                str = this.getArr.join(',');
                this.sendPayloadBatch.batchIds = str;
            }
        }
        archiveData(event) {
            if (!this.isProfessional) {
                if (this.sendPayload.courseIds == "" || this.sendPayload.courseIds == null) {
                    let msg = {
                        type: "error",
                        body: "At least one course should be selected"
                    };
                    this.appc.popToast(msg);
                }
                else {
                    if (confirm('Are you sure, you want to Delete?')) {
                        this.batch.courses(this.sendPayload).subscribe((data) => {
                            this.router.navigateByUrl("/view/activity/archiving/batchesArchivedReport");
                            let msg = {
                                type: "success",
                                body: "Course(s) deleted successfully"
                            };
                            this.appc.popToast(msg);
                        }, (error) => {
                            let msg = {
                                type: "error",
                                body: error.error.message
                            };
                            this.appc.popToast(msg);
                        });
                    }
                }
            }
            else {
                if (this.sendPayloadBatch.batchIds == "" || this.sendPayloadBatch.batchIds == null) {
                    let msg = {
                        type: "error",
                        body: "At least one Batch should be selected"
                    };
                    this.appc.popToast(msg);
                }
                else {
                    if (confirm('Are you sure, you want to Delete?')) {
                        this.batch.batches(this.sendPayloadBatch).subscribe((data) => {
                            if (data.status_code == 202) {
                                if (confirm(data.message)) {
                                    this.sendPayloadBatch.archived = true;
                                    this.batch.batches(this.sendPayloadBatch).subscribe((data) => {
                                        // this.router.navigateByUrl("/view/activity/archiving/batchesArchivedReport")
                                        this.router.navigateByUrl("/view/batch/archiving/batchesArchivedReport");
                                        let msg = {
                                            type: "success",
                                            body: "Batch(s) deleted successfully"
                                        };
                                        this.appc.popToast(msg);
                                    }, (error) => {
                                        let msg = {
                                            type: "error",
                                            body: error.error.message
                                        };
                                        this.appc.popToast(msg);
                                    });
                                }
                            }
                            else {
                                // this.router.navigateByUrl("/view/activity/archiving/batchesArchivedReport")
                                this.router.navigateByUrl("/view/batch/archiving/batchesArchivedReport");
                                let msg = {
                                    type: "success",
                                    body: "Batch(s) deleted successfully"
                                };
                                this.appc.popToast(msg);
                            }
                        }, (error) => {
                            if (error.error.message.includes("Batch Already assigned with active Student")) {
                                if (confirm(error.error.message)) {
                                    this.sendPayloadBatch.archived = true;
                                    this.auth.showLoader();
                                    this.batch.batches(this.sendPayloadBatch).subscribe((data) => {
                                        this.auth.hideLoader();
                                        // this.router.navigateByUrl("/view/activity/archiving/batchesArchivedReport")
                                        this.router.navigateByUrl("/view/batch/archiving/batchesArchivedReport");
                                        let msg = {
                                            type: "success",
                                            body: "Batch(s) deleted successfully"
                                        };
                                        this.appc.popToast(msg);
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
                            else {
                                let msg = {
                                    type: "error",
                                    body: error.error.message
                                };
                                this.appc.popToast(msg);
                            }
                        });
                    }
                }
            }
        }
        sortedData(ev) {
            this.sortedenabled = true;
            if (this.sortedenabled) {
                (this.direction == 0 || this.direction == -1) ? (this.direction = 1) : (this.direction = -1);
                this.sortedBy = ev;
                this.getCourses = this.getCourses.sort((a, b) => {
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
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.pagedisplaysize * (index - 1);
            this.newPaginated = this.getDataFromDataSource(startindex);
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
                let t = this.getCourses.slice(startindex, startindex + this.pagedisplaysize);
                return t;
            }
        }
        updateTableBatchSize(event) {
            this.pagedisplaysize = event;
            this.fetchTableDataByPage(this.PageIndex);
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                this.PageIndex = 1;
                let searchRes;
                searchRes = this.getCourses.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.searchData = searchRes;
                this.totalRow = searchRes.length;
                this.searchflag = true;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else {
                this.searchflag = false;
                this.fetchTableDataByPage(this.PageIndex);
                this.totalRow = this.getCourses.length;
            }
        }
    };
    BatchesComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] },
        { type: _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_3__["CoursesServiceService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ];
    BatchesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-batches',
            template: __importDefault(__webpack_require__(/*! raw-loader!./batches.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/batches/batches.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./batches.component.scss */ "./src/app/components/course-module/Archiving/batches/batches.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"],
            _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_3__["CoursesServiceService"],
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BatchesComponent);
    return BatchesComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/Archiving/courses-archived-report/courses-archived-report.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/courses-archived-report/courses-archived-report.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9BcmNoaXZpbmcvY291cnNlcy1hcmNoaXZlZC1yZXBvcnQvY291cnNlcy1hcmNoaXZlZC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/course-module/Archiving/courses-archived-report/courses-archived-report.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/courses-archived-report/courses-archived-report.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CoursesArchivedReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesArchivedReportComponent", function() { return CoursesArchivedReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/archiving-service/courses-service.service */ "./src/app/services/archiving-service/courses-service.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let CoursesArchivedReportComponent = /** @class */ (() => {
    let CoursesArchivedReportComponent = class CoursesArchivedReportComponent {
        constructor(course, auth, appc) {
            this.course = course;
            this.auth = auth;
            this.appc = appc;
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.archivedData = [];
            this.PageIndex = 1;
            this.PageIndexPopup = 1;
            this.pagedisplaysize = 25;
            this.pagedisplaysizePopup = 10;
            this.totalRow = 0;
            this.newPaginated = [];
            this.searchText = "";
            this.searchData = [];
            this.searchflag = false;
            this.dummyArr = [0, 1, 2, 0, 1, 2];
            this.columnMaps = [0, 1, 2, 3, 4, 5];
            this.columnMaps2 = [0, 1, 2, 3, 4, 5, 6, 7];
            this.sortedenabled = true;
            this.sortedBy = "";
            this.direction = 0;
            this.schoolModel = false;
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
            // changes by Nalini - to handle school model conditions
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            this.getCoursesArchived();
            this.setTableData();
        }
        setTableData() {
            this.headerSetting = [
                {
                    primary_key: 'course_name',
                    value: this.schoolModel ? 'Section' : 'Course',
                    charactLimit: 15,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'master_course',
                    value: this.schoolModel ? 'Standard' : 'Master Course',
                    charactLimit: 25,
                    sorting: false,
                    visibility: true
                },
            ];
            // changes by Nalini - to remove standard column for school model
            if (!this.schoolModel) {
                this.headerSetting.push({
                    primary_key: 'standard_name',
                    value: "Standard",
                    charactLimit: 15,
                    sorting: false,
                    visibility: true
                });
            }
            this.headerSetting.push({
                primary_key: 'subjects',
                value: "Subjects",
                charactLimit: 25,
                sorting: false,
                visibility: true
            }, {
                primary_key: 'start_date',
                value: "Start Date",
                charactLimit: 20,
                sorting: false,
                visibility: true
            }, {
                primary_key: 'end_date',
                value: "End Date",
                charactLimit: 20,
                sorting: false,
                visibility: true
            }, {
                primary_key: 'status',
                value: "Status",
                charactLimit: 10,
                sorting: false,
                visibility: true
            }, {
                primary_key: 'archived_date',
                value: "Deleted Date & Time",
                charactLimit: 20,
                sorting: false,
                visibility: true
            });
            this.tableSetting = {
                width: "100%",
                height: "62vh"
            };
            this.rowColumns = [
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "15%",
                    textAlign: "left"
                },
                {
                    width: "15%",
                    textAlign: "left"
                },
                {
                    width: "15%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "15%",
                    textAlign: "left"
                },
            ];
        }
        getCoursesArchived() {
            this.dataStatus = true;
            this.auth.showLoader();
            if (this.isProfessional) {
                this.course.batchArchiveStatus().subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    for (let i = 0; i < data.length; i++) {
                        data[i].archived_date = moment__WEBPACK_IMPORTED_MODULE_4__(data[i].archived_date).format('DD-MMM-YY, h:mm:ss A');
                        data[i].end_date = moment__WEBPACK_IMPORTED_MODULE_4__(data[i].end_date).format('DD-MMM-YY');
                        data[i].start_date = moment__WEBPACK_IMPORTED_MODULE_4__(data[i].start_date).format('DD-MMM-YY');
                    }
                    this.archivedData = data;
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
                });
            }
            else {
                this.auth.showLoader();
                this.course.courseArchiveStatus().subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    for (let i = 0; i < data.length; i++) {
                        data[i].archived_date = moment__WEBPACK_IMPORTED_MODULE_4__(data[i].archived_date).format('DD-MMM-YY, h:mm:ss A');
                        data[i].end_date = moment__WEBPACK_IMPORTED_MODULE_4__(data[i].end_date).format('DD-MMM-YY');
                        data[i].start_date = moment__WEBPACK_IMPORTED_MODULE_4__(data[i].start_date).format('DD-MMM-YY');
                    }
                    this.archivedData = data;
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
                });
            }
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                this.PageIndex = 1;
                let searchRes;
                searchRes = this.archivedData.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.searchData = searchRes;
                this.totalRow = searchRes.length;
                this.searchflag = true;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else {
                this.searchflag = false;
                this.fetchTableDataByPage(this.PageIndex);
                this.totalRow = this.archivedData.length;
            }
        }
        sortedData(ev) {
            this.sortedenabled = true;
            if (this.sortedenabled) {
                (this.direction == 0 || this.direction == -1) ? (this.direction = 1) : (this.direction = -1);
                this.sortedBy = ev;
                this.archivedData = this.archivedData.sort((a, b) => {
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
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.pagedisplaysize * (index - 1);
            this.newPaginated = this.getDataFromDataSource(startindex);
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
                let t = this.archivedData.slice(startindex, startindex + this.pagedisplaysize);
                return t;
            }
        }
        updateTableBatchSize(event) {
            this.pagedisplaysize = event;
            this.fetchTableDataByPage(this.PageIndex);
        }
    };
    CoursesArchivedReportComponent.ctorParameters = () => [
        { type: _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_2__["CoursesServiceService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] }
    ];
    CoursesArchivedReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses-archived-report',
            template: __importDefault(__webpack_require__(/*! raw-loader!./courses-archived-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/courses-archived-report/courses-archived-report.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./courses-archived-report.component.scss */ "./src/app/components/course-module/Archiving/courses-archived-report/courses-archived-report.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_2__["CoursesServiceService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], CoursesArchivedReportComponent);
    return CoursesArchivedReportComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/Archiving/courses/courses.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/courses/courses.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  background-color: #e0eaec;\n  color: black;\n}\n\ntr {\n  border-radius: 12px;\n  border-left: 5px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.tableBodyScroll tbody {\n  display: block;\n  max-height: 61vh;\n  min-height: 61vh;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.headerSection {\n  background: white;\n}\n\n.btn {\n  background: #0084f6;\n  color: white;\n}\n\nth {\n  padding: 10px 10px;\n}\n\ntable th, table td {\n  text-align: left;\n  word-break: break-all;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL0FyY2hpdmluZy9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtBQUNoQjs7QUFDQTtFQUNJLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixlQUFlO0FBRW5COztBQUFBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUd2Qjs7QUFDQTs7RUFFSSxjQUFjO0VBQ2YsV0FBWTtFQUNYLG1CQUFtQjtBQUV2Qjs7QUFDQTtFQUNJLGlCQUFpQjtBQUVyQjs7QUFBQTtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0FBR2hCOztBQURBO0VBQ0ksa0JBQWtCO0FBSXRCOztBQUZBO0VBQ0ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUt6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9BcmNoaXZpbmcvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZWFlYztcbiAgICBjb2xvcjogYmxhY2s7XG59XG50ciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlMGVhZWM7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnRhYmxlQm9keVNjcm9sbCB0Ym9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LWhlaWdodDogNjF2aDtcbiAgICBtaW4taGVpZ2h0OiA2MXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTIsIDIxMywgMC41KTtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGhlYWQsXG50Ym9keSB0ciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICB3aWR0aCA6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLmhlYWRlclNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbnRoIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG50YWJsZSB0aCwgdGFibGUgdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/Archiving/courses/courses.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/course-module/Archiving/courses/courses.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/archiving-service/courses-service.service */ "./src/app/services/archiving-service/courses-service.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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





let CoursesComponent = /** @class */ (() => {
    let CoursesComponent = class CoursesComponent {
        constructor(auth, batch, appc, router) {
            this.auth = auth;
            this.batch = batch;
            this.appc = appc;
            this.router = router;
            this.isProfessional = false;
            this.getCourses = [];
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.PageIndex = 1;
            this.PageIndexPopup = 1;
            this.pagedisplaysize = 25;
            this.pagedisplaysizePopup = 10;
            this.totalRow = 0;
            this.newPaginated = [];
            this.searchText = "";
            this.searchData = [];
            this.searchflag = false;
            this.sendPayload = {
                courseIds: "",
                archived: false
            };
            this.sendPayloadBatch = {
                batchIds: "",
                archived: false
            };
            this.courseIds = [];
            this.getArr = [];
            this.getId = [];
            this.dummyArr = [0, 1, 2, 0, 1, 2];
            this.columnMaps = [0, 1, 2, 3, 4, 5];
            this.columnMaps2 = [0, 1, 2, 3, 4, 5, 6, 7];
            this.sortedenabled = true;
            this.sortedBy = "";
            this.direction = 0;
            this.schoolModel = false;
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
            // changes by Nalini - to handle school model conditions
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            this.getCoursesList();
        }
        getCoursesList() {
            this.dataStatus = true;
            this.auth.showLoader();
            if (this.isProfessional) {
                this.batch.getBatches().subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    this.getCourses = data;
                    this.getCourses.map((ele) => {
                        ele.status = false;
                    });
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
                });
            }
            else {
                this.dataStatus = true;
                this.auth.showLoader();
                this.batch.getCoursesList().subscribe((data) => {
                    this.dataStatus = false;
                    this.auth.hideLoader();
                    this.getCourses = data;
                    this.getCourses.map((ele) => {
                        ele.status = false;
                    });
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
                });
            }
        }
        notifyMe(e) {
            let str = "";
            if (!this.isProfessional) {
                if (this.newPaginated[e].status == true) {
                    this.getArr.push(this.newPaginated[e].course_id);
                }
                else {
                    this.getArr = this.getArr.filter((ele) => {
                        if (ele == this.newPaginated[e].course_id) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                }
                str = this.getArr.join(',');
                this.sendPayload.courseIds = str;
            }
            else {
                if (this.newPaginated[e].status) {
                    this.getArr.push(this.newPaginated[e].batch_id);
                }
                else {
                    this.getArr = this.getArr.filter((ele) => {
                        if (ele == this.newPaginated[e].batch_id) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                }
                str = this.getArr.join(',');
                this.sendPayloadBatch.batchIds = str;
            }
        }
        archiveData(event) {
            if (!this.isProfessional) {
                if (this.sendPayload.courseIds == "" || this.sendPayload.courseIds == null) {
                    // changes by Nalini - to handle school model conditions
                    let temp = this.schoolModel ? 'section' : 'course';
                    let msg = {
                        type: "error",
                        body: 'At least one ' + temp + " should be selected"
                    };
                    this.appc.popToast(msg);
                }
                else {
                    this.sendPayload.archived = false;
                    if (confirm('Are you sure, you want to Delete?')) {
                        this.batch.courses(this.sendPayload).subscribe((data) => {
                            if (data.status_code == 202) {
                                if (confirm(data.message)) {
                                    this.sendPayload.archived = true;
                                    this.batch.courses(this.sendPayload).subscribe((data) => {
                                        this.router.navigateByUrl("/view/course/archiving/coursesArchivedReport");
                                        let msg = {
                                            type: "success",
                                            body: "Course(s) deleted successfully"
                                        };
                                        this.appc.popToast(msg);
                                    }, (error) => {
                                        let msg = {
                                            type: "error",
                                            body: error.error.message
                                        };
                                        this.appc.popToast(msg);
                                    });
                                }
                            }
                            else {
                                this.router.navigateByUrl("/view/course/archiving/coursesArchivedReport");
                                let msg = {
                                    type: "success",
                                    body: "Course(s) deleted successfully"
                                };
                                this.appc.popToast(msg);
                            }
                        }, (error) => {
                            let msg = {
                                type: "error",
                                body: error.error.message
                            };
                            this.appc.popToast(msg);
                        });
                    }
                }
            }
            else {
                if (this.sendPayloadBatch.batchIds == "" || this.sendPayloadBatch.batchIds == null) {
                    let msg = {
                        type: "error",
                        body: "At least one Batch should be selected"
                    };
                    this.appc.popToast(msg);
                }
                else {
                    if (confirm('Are you sure, you want to Delete?')) {
                        this.batch.batches(this.sendPayloadBatch).subscribe((data) => {
                            if (data.status_code == 202) {
                                if (confirm(data.message)) {
                                    this.sendPayloadBatch.archived = true;
                                    this.batch.batches(this.sendPayloadBatch).subscribe((data) => {
                                        this.router.navigateByUrl("/view/course/archiving/batchesArchivedReport");
                                        let msg = {
                                            type: "success",
                                            body: "Batch(s) deleted successfully"
                                        };
                                        this.appc.popToast(msg);
                                    }, (error) => {
                                        let msg = {
                                            type: "error",
                                            body: error.error.message
                                        };
                                        this.appc.popToast(msg);
                                    });
                                }
                            }
                            else {
                                this.router.navigateByUrl("/view/course/archiving/batchesArchivedReport");
                                let msg = {
                                    type: "success",
                                    body: "Batch(s) deleted successfully"
                                };
                                this.appc.popToast(msg);
                            }
                        }, (error) => {
                            if (error.error.message.includes("Batch Already assigned with active Student")) {
                                if (confirm(error.error.message)) {
                                    this.sendPayloadBatch.archived = true;
                                    this.batch.batches(this.sendPayloadBatch).subscribe((data) => {
                                        this.router.navigateByUrl("/view/course/archiving/batchesArchivedReport");
                                        let msg = {
                                            type: "success",
                                            body: "Batch(s) deleted successfully"
                                        };
                                        this.appc.popToast(msg);
                                    }, (error) => {
                                        let msg = {
                                            type: "error",
                                            body: error.error.message
                                        };
                                        this.appc.popToast(msg);
                                    });
                                }
                            }
                            else {
                                let msg = {
                                    type: "error",
                                    body: error.error.message
                                };
                                this.appc.popToast(msg);
                            }
                        });
                    }
                }
            }
        }
        sortedData(ev) {
            this.sortedenabled = true;
            if (this.sortedenabled) {
                (this.direction == 0 || this.direction == -1) ? (this.direction = 1) : (this.direction = -1);
                this.sortedBy = ev;
                this.getCourses = this.getCourses.sort((a, b) => {
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
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.pagedisplaysize * (index - 1);
            this.newPaginated = this.getDataFromDataSource(startindex);
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
                let t = this.getCourses.slice(startindex, startindex + this.pagedisplaysize);
                return t;
            }
        }
        updateTableBatchSize(event) {
            this.pagedisplaysize = event;
            this.fetchTableDataByPage(this.PageIndex);
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                this.PageIndex = 1;
                let searchRes;
                searchRes = this.getCourses.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.searchData = searchRes;
                this.totalRow = searchRes.length;
                this.searchflag = true;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else {
                this.searchflag = false;
                this.fetchTableDataByPage(this.PageIndex);
                this.totalRow = this.getCourses.length;
            }
        }
    };
    CoursesComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] },
        { type: _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_3__["CoursesServiceService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ];
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __importDefault(__webpack_require__(/*! raw-loader!./courses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/Archiving/courses/courses.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./courses.component.scss */ "./src/app/components/course-module/Archiving/courses/courses.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"],
            _services_archiving_service_courses_service_service__WEBPACK_IMPORTED_MODULE_3__["CoursesServiceService"],
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CoursesComponent);
    return CoursesComponent;
})();



/***/ })

}]);
//# sourceMappingURL=components-course-module-Archiving-archiving-module-es2015.js.map