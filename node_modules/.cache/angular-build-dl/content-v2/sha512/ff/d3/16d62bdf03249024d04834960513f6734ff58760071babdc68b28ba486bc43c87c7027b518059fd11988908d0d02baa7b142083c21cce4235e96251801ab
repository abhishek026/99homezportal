(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-course-module-analytics-analytics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/analytics/all-videos/all-videos.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/analytics/all-videos/all-videos.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"allVideo\" style=\"margin-left: 15px;\">\n    <div>Total number of Videos: {{totalRecords}}</div>\n\n    <table class=\"tableBodyScroll\" style=\"margin-top: 20px;\">\n        <thead>\n            <tr>\n                <!-- <th>Date</th> -->\n                <th>Video Title</th>\n                <th>Storage (MB)</th>\n                <th>Consumed Bandwidth (MB)</th>\n                <th>Viewed</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let data  of allVideoData; let i =index\">\n                <td *ngIf=\"data.video_title == null\">\n                    -\n                </td>\n                <td *ngIf=\"data.video_title != null\">\n                    {{data.video_title}}\n                </td>\n                <td>\n                    {{data.total_consumed_storage}}\n                </td>\n                <td>\n                    {{data.total_consumed_bandwidth}}\n                </td>\n                <td>\n                    <a style=\"color: #0084f6;\" (click)=\"totalVideoTitle(data.video_id,data.video_title,10,1)\">{{data.watch_count}}</a>\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n    <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\" [count]=\"totalRecords\"\n        (sizeChange)=\"updateTableBatchSize($event)\">\n    </pagination>\n</div>\n\n<div *ngIf=\"title\">\n    <div>Video Title: {{videoTitle}}</div>\n\n    <table class=\"tableBodyScroll\" style=\"margin-top: 20px;\">\n        <thead>\n            <tr>\n                <!-- <th>Date</th> -->\n                <th>Username</th>\n                <th>Watch Duration</th>\n                <th>Played Date Time</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let data of userwiseDetail;let i =index\">\n                <td>\n                    {{data.name}}\n                </td>\n                <td>\n                    {{data.watch_duration}}\n                </td>\n                <td>\n                    {{data.created_date}}\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n    <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\" [count]=\"totalRecords\"\n        (sizeChange)=\"updateTableBatchSize($event)\">\n    </pagination>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/analytics/date-wise/date-wise.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/analytics/date-wise/date-wise.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row head\">\n    <span> <a (click)=\"home()\" style=\"color: #0084f6;font-weight: 600;\">Analytics > </a> </span><span\n        *ngIf=\"dateWiseSelection\">Datewise</span>\n    <span *ngIf=\"videoWiseSelection\">Videowise</span>\n    <span *ngIf=\"userWiseSelection\">Userwise > <span> {{title}}</span></span>\n</div>\n<div class=\"row\" style=\"margin: 0\">\n    <!-- <div class=\"col-sm-6 col-md-6 col-lg-6\">\n        <input type=\"text\" class=\"search\" *ngIf=\"videoWiseSelection\" placeholder=\"Search\" (keyup)=\"searchDatabase()\"\n            style=\"background:transparent;border: 1px solid lightgrey;\" [(ngModel)]=\"searchText\" #search>\n        <input type=\"text\" class=\"search\" *ngIf=\"userWiseSelection\" placeholder=\"Search\" (keyup)=\"searchDatabaseUser()\"\n            style=\"background:transparent;border: 1px solid lightgrey;\" [(ngModel)]=\"searchText1\" #search>\n    </div> -->\n    <div class=\"col-sm-2 col-md-2 col-lg-2\" style=\"float: right;width: 5%;\">\n\n        <!-- <div style=\"float: right;\"> -->\n\n            <div class=\"row\" style=\"display: flex;justify-content: flex-end;\">\n                <!-- <div class=\"col-lg-3 col-md-3 col-sm-3 wise\">\n                    <button id=\"datewise\" [ngClass]=\"selectType == 'date'? 'btnside' : 'grey'\"\n                        style=\"cursor: auto;\">Datewise</button>\n                </div> -->\n                <!-- <div class=\"col-lg-3 col-md-3 col-sm-3 wise\" style=\"width: 31%;\">\n                    <button id=\"videowise\" [ngClass]=\"selectType == 'video'? 'btnside' : 'grey'\"\n                        style=\"cursor: auto;\">Videowise</button>\n                </div> -->\n                <!-- <div class=\"col-lg-3 col-md-3 col-sm-3 wise\">\n                    <button id=\"userwise\" [ngClass]=\"selectType == 'user'? 'btnside' : 'grey'\"\n                        style=\"cursor: auto;\">Userwise</button>\n                </div> -->\n                <!-- <div class=\"col-lg-4 col-md-4 col-sm-4\" style=\"width: 55%;\" *ngIf=\"dateWiseSelection\">\n                    <button [ngClass]=\"selectType == 'date'? 'btnside' : 'grey'\" (click)=\"filter('date')\">\n                        <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n                    </button>\n                </div> -->\n                <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"videoWiseSelection\">\n                    <!-- <button [ngClass]=\"selectType == 'video'? 'btnside' : 'grey'\" (click)=\"filter('video')\">\n                        <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n                    </button> -->\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"userWiseSelection\">\n                    <!-- <button [ngClass]=\"selectType == 'date'? 'grey' : 'grey'\" (click)=\"filter('user')\">\n                        <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n                    </button> -->\n                </div>\n                <div style=\"float: right;margin-right: 30px;margin-top: 7px;\">\n                    <span data-toggle=\"modal\" data-target=\"#helpFAQ\"> <i class=\"fa fa-question-circle\"\n                        style=\"cursor: pointer; font-size: 20px;\" title=\"FAQ’S &Help\" aria-hidden=\"true\"></i></span>\n                  </div>\n        </div>\n    <!-- </div> -->\n</div>\n<div class=\"col-sm-10 col-md-10 col-lg-10\" style=\"display: flex;justify-content: flex-end;width: 95%;\" *ngIf=\"dateWiseSelection\">\n    <!-- <div class=\"row\" style=\"justify-content: flex-end;\" > -->\n        <div class=\"col-lg-10 col-md-10 col-sm-10\" style=\"justify-content: flex-end;display: flex;\" *ngIf=\"showDateSelection\">\n            <!-- <div class=\"row\" style=\"float: right;\" *ngIf=\"showDateSelection\"> -->\n    \n                <div class=\"col-lg-3 col-md-3 col-sm-3\">\n                    <div class=\"field-wrapper datePickerBox has-value\" style=\"padding-top: 0;\">\n                        <input type=\"text\" value=\"\" id=\"updateDate\" readonly=\"true\" class=\"form-ctrl bsDatepicker\"\n                            style=\"border: 1px solid #0084f6;float: right;border-radius: 4px;\" name=\"toDate\"\n                            placeholder=\"Select Date\" bsDatepicker (ngModelChange)=\"dateValidationForFuture($event)\"\n                            [(ngModel)]=\"from_date\" />\n                    </div>\n                </div>\n    \n                <div class=\"col-lg-3 col-md-3 col-sm-3\">\n                    <div class=\"field-wrapper datePickerBox has-value\" style=\"padding-top: 0;\">\n                        <input type=\"text\" value=\"\" id=\"updateDate\" readonly=\"true\" class=\"form-ctrl bsDatepicker\"\n                            style=\"border: 1px solid #0084f6;float: right;border-radius: 4px;\" name=\"toDate\"\n                            placeholder=\"Select Date\" bsDatepicker (ngModelChange)=\"dateValidationForFuture($event)\"\n                            [(ngModel)]=\"to_date\" />\n                    </div>\n    \n                </div>\n    \n                <div class=\"col-lg-1 col-md-1 col-sm-1\">\n                    <button id=\"videowise\" class=\"go btnside\" (click)=\"custom()\">GO</button>\n                </div>\n            <!-- </div> -->\n        </div>\n    \n        <div class=\"col-lg-2 col-md-2 col-sm-2\">\n            <select name=\"filter\" id=\"filter\" class=\"selectFilter \" (change)=\"select($event.target.value)\">\n                <option value=\"daily\">Select</option>\n                <option value=\"monthly\">Monthly</option>\n                <option value=\"yearly\">Yearly</option>\n                <option value=\"custom\">Custom</option>\n            </select>\n        </div>\n    <!-- </div> -->\n</div>\n<div class=\"row\">\n</div>\n\n\n<!-- <div class=\"row\" style=\"margin-top: 18px;\"\n    *ngIf=\"(dropDownFilter && dateWiseSelection) || (dropDownFilerVideo && videoWiseSelection)\"> -->\n<div #chartWrap id=\"chartWrap\" style=\"margin-top: 10px;margin-bottom: 10px;\" *ngIf=\"dateWiseSelection\">\n</div>\n<div *ngIf=\"dateWiseSelection\">\n    <table class=\"tableBodyScroll\">\n        <thead>\n            <tr>\n                <th style=\"width: 10%;\">Sr. No.</th>\n                <th>Date</th>\n                <th>Bandwidth (MB)</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let data  of weekData; let i =index\">\n                <td style=\"width: 10%;\">{{i+1}}</td>\n                <td>\n                    <a style=\"color:#0084f6\" *ngIf=\"chartFormat == 'DD-MMM-YYYY'\" (click)=\"videoWise(data.date,10,1)\"> {{data.date | date: 'dd-MMM-yyyy'}}</a>\n                    <a style=\"color:#0084f6\" *ngIf=\"chartFormat != 'DD-MMM-YYYY'\" (click)=\"videoWise(data.date,10,1)\"> {{data.date}}</a>\n                </td>\n                <td>\n                    {{data.consumed_bandwidth}}\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n</div>\n<pagination *ngIf=\"dateWiseSelection\" (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\"\n    (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n    [count]=\"totalRecords\" (sizeChange)=\"updateTableBatchSize($event)\">\n</pagination>\n\n\n<div *ngIf=\"videoWiseSelection\">\n    <table class=\"tableBodyScroll\" style=\"margin-top: 20px;\">\n        <thead>\n            <tr>\n                <th>Video Title</th>\n                <th>Size (MB)</th>\n                <th>Consumed Bandwidth (MB)</th>\n                <th>Viewed</th>\n            </tr>\n        </thead>\n        <tbody style=\"max-height: 60vh;min-height: 60vh;\">\n            <tr *ngFor=\"let data  of videoData; let i =index\">\n                <td>\n                    {{data.video_title}}\n                </td>\n                <td>\n                    {{data.total_consumed_storage}}\n                </td>\n                <td>\n                    {{data.total_consumed_bandwidth}}\n                </td>\n                <td>\n                    <a style=\"color: #0084f6;\" (click)=\"userwise(data.video_id, data.video_title, 10,1)\">{{data.watch_count}}</a>\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n    <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\" [count]=\"totalRecords\"\n        (sizeChange)=\"updateTableBatchSize($event)\">\n    </pagination>\n    <!-- <mat-paginator [length]=\"totalElements\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"\n        (page)=\"onPageChange($event)\">\n    </mat-paginator> -->\n</div>\n<div *ngIf=\"userWiseSelection\">\n    <table class=\"tableBodyScroll\" style=\"margin-top: 20px;\">\n        <thead>\n            <tr>\n                <th>Username</th>\n                <th>Watch Duration (min)</th>\n                <th>Played Date</th>\n            </tr>\n        </thead>\n        <tbody style=\"max-height: 60vh;min-height: 60vh;\">\n            <tr *ngFor=\"let data of userwiseDetail;let i =index\">\n                <td>\n                    {{data.name}}\n                </td>\n                <td>\n                    {{data.watch_duration}}\n                </td>\n                <td>\n                    {{data.created_date}}\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n    <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\" [count]=\"totalRecords\"\n        (sizeChange)=\"updateTableBatchSize($event)\">\n    </pagination>\n</div>\n\n<div id=\"helpFAQ\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\" style=\"top: 5%;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\" style=\"border-radius: 6px;\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h2 class=\"modal-title\">Help</h2>\n        </div>\n        <div class=\"modal-body\" style=\"margin-left: 15px;\">\n          <div class=\"new-modules-list\" style=\"margin-bottom: 15px;\">                            \n            <ol style=\"list-style-type: disc;\">\n              <li style=\"font-weight: 100;\">By default admin can check Date-Wise bandwidth consumption Graph by monthly, yearly or custom date by simply clicking on filter option.\n              </li>\n              <li style=\"font-weight: 100;\">To check Video wise consumption details, admin need to click on date shown on page.\n            </li>\n            <li style=\"font-weight: 100;\">After clicked on viewed count on Videowise page, admin can see user wise data for\n                that video.\n            </li>\n            </ol>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/components/course-module/analytics/all-videos/all-videos.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/course-module/analytics/all-videos/all-videos.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  background-color: #DFE5F0;\n  color: black;\n  padding: 6px 2px;\n}\n\ntr {\n  border-radius: 12px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.tableBodyScroll tbody {\n  display: block;\n  max-height: 65vh;\n  min-height: 65vh;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.search {\n  border: 1px solid #0084f6;\n  padding: 4px;\n  border-radius: 4px;\n}\n\n.link, a {\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n}\n\na:hover {\n  color: #0084f6;\n}\n\ntable tr {\n  cursor: default;\n}\n\n.field-wrapper .form-ctrl {\n  color: #0084f6;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2FuYWx5dGljcy9hbGwtdmlkZW9zL2FsbC12aWRlb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtBQUNwQjs7QUFDQTtFQUNJLG1CQUFtQjtFQUVuQiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBRXZCOztBQUVBOztFQUVJLGNBQWM7RUFDZixXQUFZO0VBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7QUFDbkI7O0FBQ0E7RUFDSSxjQUFjO0FBRWxCOztBQUFBO0VBRUksZUFBZTtBQUVuQjs7QUFDQTtFQUVJLGNBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvYW5hbHl0aWNzL2FsbC12aWRlb3MvYWxsLXZpZGVvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDZweCAycHg7XG59XG50ciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAvLyBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlMGVhZWM7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnRhYmxlQm9keVNjcm9sbCB0Ym9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LWhlaWdodDogNjV2aDtcbiAgICBtaW4taGVpZ2h0OiA2NXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTIsIDIxMywgMC41KTtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGhlYWQsXG50Ym9keSB0ciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICB3aWR0aCA6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLnNlYXJjaHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbn1cbi5saW5rLCBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmE6aG92ZXJ7XG4gICAgY29sb3I6ICMwMDg0ZjY7XG59XG50YWJsZSB0ciB7XG4gXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsIHtcblxuICAgIGNvbG9yOiAgIzAwODRmNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/course-module/analytics/all-videos/all-videos.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/course-module/analytics/all-videos/all-videos.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AllVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllVideosComponent", function() { return AllVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
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





let AllVideosComponent = /** @class */ (() => {
    let AllVideosComponent = class AllVideosComponent {
        constructor(_http, msgService, auth) {
            this._http = _http;
            this.msgService = msgService;
            this.auth = auth;
            this.allVideoData = [];
            this.totalRecords = 0;
            this.userwiseDetail = [];
            this.allVideo = false;
            this.PageIndex = 1;
            this.displayBatchSize = 10;
            this.sizeArr = [10, 15, 25, 50, 100, 150, 200, 500, 1000];
            this.videoTitle = "";
            this.title = false;
        }
        ngOnInit() {
            this.allVideo = true;
            // let url = '/api/v1/instFileSystem/videoReport/institute/' + sessionStorage.getItem('institute_id') + '?pageSize=15&pageOffset=0&sortBy=totalConsumedBandwidth ASC';
            this.allvideo(10, 1);
        }
        allvideo(batch, page) {
            let url = '/api/v1/instFileSystem/videoReport/institute/' + sessionStorage.getItem('institute_id') + '?pageSize=' + batch + '&pageOffset=' + page;
            this._http.getData(url).subscribe((resp) => {
                // this.pageSize = resp.result.pageSize;
                this.allVideoData = resp.result.response;
                this.totalRecords = resp.result.totalElements;
                console.log(this.allVideoData);
            }, (err) => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        totalVideoTitle(val, t, batch, page) {
            this.PageIndex = page;
            sessionStorage.setItem('totalVideoTitle', val);
            sessionStorage.setItem('Title', t);
            this.videoTitle = t;
            this.title = true;
            this.allVideo = false;
            this.userwiseDetail = [];
            let url = '/api/v1/instFileSystem/videoReport/video/' + val + '?pageSize=' + batch + '&pageOffset=' + page + '&sortBy=createdDate ASC';
            // let url = '/api/v1/instFileSystem/videoReport/17841/' + val + '?pageSize=' + batch + '&pageOffset=' + page + '&sortBy=createdDate ASC';
            this._http.getData(url).subscribe((resp) => {
                this.userwiseDetail = resp.result.video_list.response;
                this.totalRecords = resp.result.video_list.totalElements;
                console.log(this.userwiseDetail);
            }, (err) => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        fetchTableDataByPage(index) {
            if (this.allVideo) {
                this.PageIndex = index;
                let startindex = this.displayBatchSize * (index - 1);
                this.allVideoData = this.getDataFromDataSource(startindex);
            }
            else if (this.title) {
                this.PageIndex = index;
                let startindex = this.displayBatchSize * (index - 1);
                this.userwiseDetail = this.getDataFromDataSource(startindex);
            }
        }
        fetchNext() {
            if (this.allVideo) {
                this.PageIndex++;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else if (this.title) {
                this.PageIndex++;
                this.fetchTableDataByPage(this.PageIndex);
            }
        }
        fetchPrevious() {
            if (this.allVideo) {
                if (this.PageIndex != 1) {
                    this.PageIndex--;
                    this.fetchTableDataByPage(this.PageIndex);
                }
            }
            else if (this.title) {
                if (this.PageIndex != 1) {
                    this.PageIndex--;
                    this.fetchTableDataByPage(this.PageIndex);
                }
            }
        }
        getDataFromDataSource(startindex) {
            if (this.allVideo) {
                this.allvideo(this.displayBatchSize, this.PageIndex);
            }
            else if (this.title) {
                this.totalVideoTitle(sessionStorage.getItem('totalVideoTitle'), sessionStorage.getItem('Title'), this.displayBatchSize, this.PageIndex);
            }
        }
        updateTableBatchSize(event) {
            if (this.allVideo) {
                this.PageIndex = 1;
                this.displayBatchSize = event;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else if (this.title) {
                this.PageIndex = 1;
                this.displayBatchSize = event;
                this.fetchTableDataByPage(this.PageIndex);
            }
        }
    };
    AllVideosComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] }
    ];
    AllVideosComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"],] }]
    };
    AllVideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-videos',
            template: __importDefault(__webpack_require__(/*! raw-loader!./all-videos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/analytics/all-videos/all-videos.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./all-videos.component.scss */ "./src/app/components/course-module/analytics/all-videos/all-videos.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]])
    ], AllVideosComponent);
    return AllVideosComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/analytics/analytics-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/course-module/analytics/analytics-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: AnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsRoutingModule", function() { return AnalyticsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-videos/all-videos.component */ "./src/app/components/course-module/analytics/all-videos/all-videos.component.ts");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics.component */ "./src/app/components/course-module/analytics/analytics.component.ts");
/* harmony import */ var _date_wise_date_wise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-wise/date-wise.component */ "./src/app/components/course-module/analytics/date-wise/date-wise.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    {
        path: '',
        component: _analytics_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsComponent"],
        pathMatch: 'prefix',
        children: [
            {
                path: '',
                component: _date_wise_date_wise_component__WEBPACK_IMPORTED_MODULE_4__["DateWiseComponent"]
            },
            {
                path: 'datewise',
                component: _date_wise_date_wise_component__WEBPACK_IMPORTED_MODULE_4__["DateWiseComponent"]
            },
            {
                path: 'allvideos',
                component: _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_2__["AllVideosComponent"]
            }
        ]
    }
];
let AnalyticsRoutingModule = /** @class */ (() => {
    let AnalyticsRoutingModule = class AnalyticsRoutingModule {
    };
    AnalyticsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AnalyticsRoutingModule);
    return AnalyticsRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/analytics/analytics.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/course-module/analytics/analytics.module.ts ***!
  \************************************************************************/
/*! exports provided: AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics-routing.module */ "./src/app/components/course-module/analytics/analytics-routing.module.ts");
/* harmony import */ var _date_wise_date_wise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-wise/date-wise.component */ "./src/app/components/course-module/analytics/date-wise/date-wise.component.ts");
/* harmony import */ var _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-videos/all-videos.component */ "./src/app/components/course-module/analytics/all-videos/all-videos.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let AnalyticsModule = /** @class */ (() => {
    let AnalyticsModule = class AnalyticsModule {
    };
    AnalyticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _date_wise_date_wise_component__WEBPACK_IMPORTED_MODULE_4__["DateWiseComponent"],
                _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_5__["AllVideosComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnalyticsRoutingModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]
            ],
        })
    ], AnalyticsModule);
    return AnalyticsModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/analytics/date-wise/date-wise.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/course-module/analytics/date-wise/date-wise.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnside {\n  border: 1px solid #0084f6;\n  background: white;\n  border-radius: 4px;\n  width: 100%;\n  padding: 5px;\n  color: #0084f6;\n  font-weight: 600;\n}\n\n.btndisable {\n  border: 1px solid grey;\n  background: white;\n  border-radius: 4px;\n  width: 100%;\n  padding: 5px;\n  color: grey;\n  font-weight: 600;\n}\n\n.wise {\n  width: 29%;\n}\n\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 2px;\n  top: 3px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n::-moz-placeholder {\n  color: rgba(211, 211, 211, 0.575);\n  opacity: 1;\n}\n\n:-ms-input-placeholder {\n  color: rgba(211, 211, 211, 0.575);\n  opacity: 1;\n}\n\n::placeholder {\n  color: rgba(211, 211, 211, 0.575);\n  opacity: 1;\n}\n\n.selectFilter {\n  float: right;\n  border: 1px solid #0084f6;\n  border-radius: 4px;\n  color: #0084f6;\n  padding: 4px;\n}\n\n.go {\n  background: #0084f6;\n  color: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nth {\n  background-color: #DFE5F0;\n  color: black;\n  padding: 6px 2px;\n}\n\ntr {\n  border-radius: 12px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.tableBodyScroll tbody {\n  display: block;\n  max-height: 35vh;\n  min-height: 35vh;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.search {\n  border: 1px solid #0084f6;\n  padding: 4px;\n  border-radius: 4px;\n}\n\n.link, a {\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n}\n\na:hover {\n  color: #0084f6;\n}\n\ntable tr {\n  cursor: default;\n}\n\n.field-wrapper .form-ctrl {\n  color: #0084f6;\n}\n\n.grey {\n  border: 1px solid grey;\n  background: white;\n  border-radius: 4px;\n  width: 100%;\n  padding: 5px;\n  color: grey;\n  font-weight: 600;\n}\n\n.head {\n  margin-left: 15px;\n  margin-bottom: 10px;\n  font-size: initial;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2FuYWx5dGljcy9kYXRlLXdpc2UvZGF0ZS13aXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0VBQ0ksVUFBVTtBQUVkOztBQUFBO0VBQ0ksV0FBVztFQUNYLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFHZDs7QUFEQTtFQUNJLGlDQUFrQztFQUNsQyxVQUFVO0FBSWQ7O0FBTkE7RUFDSSxpQ0FBa0M7RUFDbEMsVUFBVTtBQUlkOztBQU5BO0VBQ0ksaUNBQWtDO0VBQ2xDLFVBQVU7QUFJZDs7QUFERTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFFZCxZQUFZO0FBR2hCOztBQUFFO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUd0Qjs7QUFJQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBRHBCOztBQUdBO0VBQ0ksbUJBQW1CO0VBRW5CLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsZUFBZTtBQURuQjs7QUFHQTtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFBdkI7O0FBSUE7O0VBRUksY0FBYztFQUNmLFdBQVk7RUFDWCxtQkFBbUI7QUFEdkI7O0FBSUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUR0Qjs7QUFJQTtFQUNJLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtBQURuQjs7QUFHQTtFQUNJLGNBQWM7QUFBbEI7O0FBRUE7RUFFSSxlQUFlO0FBQW5COztBQUdBO0VBRUksY0FBZTtBQURuQjs7QUFHQTtFQUNJLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUFwQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2FuYWx5dGljcy9kYXRlLXdpc2UvZGF0ZS13aXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bnNpZGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODRmNjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idG5kaXNhYmxle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLndpc2V7XG4gICAgd2lkdGg6IDI5JTtcbn1cbi5maWVsZC13cmFwcGVyLmRhdGVQaWNrZXJCb3g6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnB4O1xuICAgIHRvcDogM3B4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICB6LWluZGV4OiAwO1xufVxuOjpwbGFjZWhvbGRlciB7IFxuICAgIGNvbG9yOiAgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjU3NSk7XG4gICAgb3BhY2l0eTogMTsgXG4gIH1cblxuICAuc2VsZWN0RmlsdGVye1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogIzAwODRmNjtcbiAgICAvLyBtYXJnaW4tdG9wOiA5cHg7XG4gICAgcGFkZGluZzogNHB4O1xuXG4gIH1cbiAgLmdve1xuICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi8vIGJveC1zaGFkb3c6IDAgM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4vLyBtYXJnaW4tYm90dG9tOiA1cHg7XG4vLyBtYXJnaW4tdG9wOiA1cHg7XG4vLyBib3JkZXItcmFkaXVzOiA2cHg7XG5cbnRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDZweCAycHg7XG59XG50ciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAvLyBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlMGVhZWM7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnRhYmxlQm9keVNjcm9sbCB0Ym9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICBtaW4taGVpZ2h0OiAzNXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTIsIDIxMywgMC41KTtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGhlYWQsXG50Ym9keSB0ciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICB3aWR0aCA6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLnNlYXJjaHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbn1cbi5saW5rLCBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmE6aG92ZXJ7XG4gICAgY29sb3I6ICMwMDg0ZjY7XG59XG50YWJsZSB0ciB7XG4gXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsIHtcblxuICAgIGNvbG9yOiAgIzAwODRmNjtcbn1cbi5ncmV5e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmhlYWR7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IGluaXRpYWw7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/course-module/analytics/date-wise/date-wise.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/course-module/analytics/date-wise/date-wise.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DateWiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateWiseComponent", function() { return DateWiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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






let DateWiseComponent = /** @class */ (() => {
    let DateWiseComponent = class DateWiseComponent {
        constructor(_http, msgService, auth) {
            this._http = _http;
            this.msgService = msgService;
            this.auth = auth;
            this.dateWiseSelection = false;
            this.sizeArr = [10, 15, 25, 50, 100, 150, 200, 500, 1000];
            this.videoWiseSelection = false;
            this.userwiseDetail = [];
            this.from_date = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
            this.videoData = [];
            this.PageIndex = 1;
            this.displayBatchSize = 10;
            this.weekDataSource = [];
            this.videoDataSource = [];
            this.userDataSource = [];
            this.totalRecords = 0;
            this.perPage = 10;
            this.searchText = "";
            this.searchText1 = "";
            this.to_date = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
            this.title = "";
            this.userWiseSelection = false;
            this.searchflag = false;
            this.dropDownFilter = false;
            this.dropDownFilerVideo = false;
            this.showDateSelection = false;
            this.instituteId = sessionStorage.getItem('institute_id');
            this.datelineRange = [];
            this.weekData = [];
            this.chartFormat = '';
            this.max_graph_value = '';
        }
        ngOnInit() {
            this.dateWiseSelection = true;
            this.select('daily');
        }
        ngOnDestroy() {
            sessionStorage.removeItem('fromDate');
        }
        filter(val) {
            switch (val) {
                case 'date':
                    this.dropDownFilter = !this.dropDownFilter;
                    break;
                case 'video':
                    this.dropDownFilerVideo = true;
                    break;
            }
        }
        select(val) {
            console.log("asd", val);
            let url;
            switch (val) {
                case 'daily':
                    this.showDateSelection = false;
                    this.datelineRange[1] = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('DD-MM-YYYY');
                    this.datelineRange[0] = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).subtract(10, 'days').format('DD-MM-YYYY');
                    this.chartFormat = 'DD-MMM-YYYY';
                    url = '/api/v1/instFileSystem/videoReport/report/' + sessionStorage.getItem('institute_id') + '?from=' + this.datelineRange[0] + '&to=' + this.datelineRange[1] + '&reportType=0';
                    this.dailyReport(url);
                    break;
                case 'monthly':
                    this.showDateSelection = false;
                    this.chartFormat = 'MMM';
                    url = '/api/v1/instFileSystem/videoReport/report/' + sessionStorage.getItem('institute_id') + '?reportType=1'; //monthly
                    this.dailyReport(url);
                    break;
                case 'yearly':
                    this.showDateSelection = false;
                    this.chartFormat = 'YYYY';
                    url = '/api/v1/instFileSystem/videoReport/report/' + sessionStorage.getItem('institute_id') + '?reportType=2'; //Year
                    this.dailyReport(url);
                    break;
                case 'custom':
                    this.showDateSelection = true;
                    this.chartFormat = 'DD-MMM-YYYY';
                    break;
            }
        }
        custom() {
            let url = '/api/v1/instFileSystem//videoReport/report/' + sessionStorage.getItem('institute_id') + '?from=' + moment__WEBPACK_IMPORTED_MODULE_2__(this.from_date).format('DD-MM-YYYY') + '&to=' + moment__WEBPACK_IMPORTED_MODULE_2__(this.to_date).format('DD-MM-YYYY') + '&reportType=0';
            this.chartFormat = 'DD-MMM-YYYY';
            this.dailyReport(url);
        }
        dailyReport(url) {
            this.selectType = "date";
            this.weekData = [];
            this.auth.showLoader();
            this._http.getData(url).subscribe((resp) => {
                this.auth.hideLoader();
                this.weekDataSource = resp.result.response;
                this.max_graph_value = Math.round(resp.result.max_graph_value);
                this.weekData = this.getDataFromDataSource(0);
                console.log('week', this.weekData);
                this.totalRecords = this.weekDataSource.length;
                this.generateChartData(this.weekDataSource);
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        generateChartData(res) {
            let dateMap = [];
            let band = [];
            res.map(e => {
                dateMap.push(moment__WEBPACK_IMPORTED_MODULE_2__(e.date).format(this.chartFormat));
                band.push(e.consumed_bandwidth);
            });
            this.createChart(dateMap, band);
        }
        createChart(d, f) {
            let band = f;
            let minWidth = 800;
            let dataLength = d.length;
            console.log(d.length);
            if (dataLength > 20 && dataLength < 35) {
                minWidth = 1100;
            }
            if (dataLength > 35 && dataLength < 50) {
                minWidth = 2100;
            }
            if (dataLength > 50 && dataLength < 75) {
                minWidth = 3100;
            }
            if (dataLength > 75 && dataLength < 100) {
                minWidth = 4100;
            }
            if (dataLength > 100 && dataLength < 150) {
                minWidth = 12000;
            }
            if (dataLength > 150 && dataLength < 200) {
                minWidth = 14000;
            }
            if (dataLength > 200) {
                minWidth = 16000;
            }
            highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('chartWrap', {
                chart: {
                    type: 'area',
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
                    categories: d
                },
                yAxis: {
                    title: {
                        text: 'Bandwidth (MB)'
                    },
                    min: 0,
                    visible: true,
                    tickAmount: 5,
                    max: this.max_graph_value
                },
                tooltip: {
                    useHTML: true,
                    shared: false,
                    formatter: function () {
                        var point = this.point;
                        let tool = '';
                        tool += 'Bandwidth ' + band[point.index] + '(MB)';
                        tool += '<br>' + 'Date ' + d[point.index];
                        return tool;
                    },
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                        showInLegend: false,
                        data: f
                    }]
            });
        }
        videoWise(val, batch, page) {
            this.PageIndex = page;
            this.selectType = "video";
            let to = moment__WEBPACK_IMPORTED_MODULE_2__(val).format('DD-MM-YYYY');
            let from = moment__WEBPACK_IMPORTED_MODULE_2__(val).format('DD-MM-YYYY');
            if (this.chartFormat == 'MMM') {
                to = moment__WEBPACK_IMPORTED_MODULE_2__(val).startOf('month').format('DD-MM-YYYY');
                from = moment__WEBPACK_IMPORTED_MODULE_2__(val).endOf('month').format('DD-MM-YYYY');
            }
            else if (this.chartFormat == 'YYYY') {
                to = moment__WEBPACK_IMPORTED_MODULE_2__(val).startOf('year').format('DD-MM-YYYY');
                from = moment__WEBPACK_IMPORTED_MODULE_2__(val).endOf('year').format('DD-MM-YYYY');
            }
            sessionStorage.setItem('videWise', val);
            this.videoWiseSelection = true;
            this.dateWiseSelection = false;
            this.videoData = [];
            let url = '/api/v1/instFileSystem/videoReport/institute/' + sessionStorage.getItem('institute_id') + '?pageSize=' + batch + '&pageOffset=' + page + '&from=' + to + '&to=' + from;
            this._http.getData(url).subscribe((resp) => {
                this.videoData = resp.result.response;
                sessionStorage.setItem('fromDate', val);
                // this.videoData = this.getDataFromDataSource(0);
                // if (this.videoWiseSelection) {
                // this.totalElements = resp.result.totalElements;
                this.totalRecords = resp.result.totalElements;
                // }
                console.log(this.videoData);
            }, (err) => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        userwise(val, t, batch, page) {
            this.title = t;
            this.selectType = "user";
            sessionStorage.setItem('userWise', val);
            sessionStorage.setItem('title', this.title);
            this.userwiseDetail = [];
            // this.totalElements = 
            this.userWiseSelection = true;
            this.videoWiseSelection = false;
            let date = sessionStorage.getItem('fromDate');
            let url = '/api/v1/instFileSystem/videoReport/video/' + val + '?pageSize=' + batch + '&pageOffset=' + page + '&sortBy=createdDate ASC';
            if (date != '' && date != null) {
                let to = moment__WEBPACK_IMPORTED_MODULE_2__(date).format('DD-MM-YYYY');
                let from = moment__WEBPACK_IMPORTED_MODULE_2__(date).format('DD-MM-YYYY');
                if (this.chartFormat == 'MMM') {
                    to = moment__WEBPACK_IMPORTED_MODULE_2__(date).startOf('month').format('DD-MM-YYYY');
                    from = moment__WEBPACK_IMPORTED_MODULE_2__(date).endOf('month').format('DD-MM-YYYY');
                }
                else if (this.chartFormat == 'YYYY') {
                    to = moment__WEBPACK_IMPORTED_MODULE_2__(date).startOf('year').format('DD-MM-YYYY');
                    from = moment__WEBPACK_IMPORTED_MODULE_2__(date).endOf('year').format('DD-MM-YYYY');
                }
                url = url.concat('&from=' + to + '&to=' + from);
            }
            this._http.getData(url).subscribe((resp) => {
                this.userwiseDetail = resp.result.video_list.response;
                // this.userwiseDetail = this.getDataFromDataSource(0);
                console.log(" this.userwiseDetail", this.userwiseDetail);
                this.totalRecords = resp.result.video_list.totalElements;
            }, (err) => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                let searchData;
                searchData = this.videoData.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.videoData = searchData;
                this.searchflag = true;
            }
            else {
                this.videoWise(sessionStorage.getItem('videWise'), this.displayBatchSize, this.PageIndex);
            }
        }
        searchDatabaseUser() {
            if (this.searchText1 != "" && this.searchText1 != null) {
                let searchData;
                searchData = this.userwiseDetail.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText1.toLowerCase())));
                this.userwiseDetail = searchData;
                this.searchflag = true;
            }
            else {
                this.userwise(sessionStorage.getItem('userWise'), sessionStorage.getItem('title'), this.displayBatchSize, this.PageIndex);
            }
        }
        fetchTableDataByPage(index) {
            if (this.dateWiseSelection) {
                this.PageIndex = index;
                let startindex = this.displayBatchSize * (index - 1);
                this.weekData = this.getDataFromDataSource(startindex);
            }
            else if (this.videoWiseSelection) {
                this.PageIndex = index;
                let startindex = this.displayBatchSize * (index - 1);
                this.videoData = this.getDataFromDataSource(startindex);
            }
            else if (this.userWiseSelection) {
                this.PageIndex = index;
                let startindex = this.displayBatchSize * (index - 1);
                this.userwiseDetail = this.getDataFromDataSource(startindex);
            }
        }
        fetchNext() {
            if (this.dateWiseSelection) {
                this.PageIndex++;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else if (this.videoWiseSelection) {
                this.PageIndex++;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else if (this.userWiseSelection) {
                this.PageIndex++;
                this.fetchTableDataByPage(this.PageIndex);
            }
        }
        fetchPrevious() {
            if (this.dateWiseSelection) {
                if (this.PageIndex != 1) {
                    this.PageIndex--;
                    this.fetchTableDataByPage(this.PageIndex);
                }
            }
            else if (this.videoWiseSelection) {
                if (this.PageIndex != 1) {
                    this.PageIndex--;
                    this.fetchTableDataByPage(this.PageIndex);
                }
            }
            else if (this.userWiseSelection) {
                if (this.PageIndex != 1) {
                    this.PageIndex--;
                    this.fetchTableDataByPage(this.PageIndex);
                }
            }
        }
        getDataFromDataSource(startindex) {
            if (this.dateWiseSelection) {
                let t = this.weekDataSource.slice(startindex, startindex + this.displayBatchSize);
                return t;
            }
            else if (this.videoWiseSelection) {
                this.videoWise(sessionStorage.getItem('videWise'), this.displayBatchSize, this.PageIndex);
                // let t = this.videoDataSource.slice(startindex, startindex + this.displayBatchSize);
                // return t;
            }
            else if (this.userWiseSelection) {
                this.userwise(sessionStorage.getItem('userWise'), sessionStorage.getItem('title'), this.displayBatchSize, this.PageIndex);
                // let t = this.userDataSource.slice(startindex, startindex + this.displayBatchSize);
                // return t;
            }
        }
        updateTableBatchSize(event) {
            if (this.dateWiseSelection) {
                this.PageIndex = 1;
                this.displayBatchSize = event;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else if (this.videoWiseSelection) {
                this.PageIndex = 1;
                this.displayBatchSize = event;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else if (this.userWiseSelection) {
                this.PageIndex = 1;
                this.displayBatchSize = event;
                this.fetchTableDataByPage(this.PageIndex);
            }
        }
        home() {
            this.dateWiseSelection = true;
            this.videoWiseSelection = false;
            this.userWiseSelection = false;
            this.select('daily');
        }
        dateValidationForFuture(e) {
            //console.log(e);
            let today = moment__WEBPACK_IMPORTED_MODULE_2__(new Date);
            let selected = moment__WEBPACK_IMPORTED_MODULE_2__(e);
            let diff = moment__WEBPACK_IMPORTED_MODULE_2__(selected.diff(today))['_i'];
            if (diff <= 0) {
            }
            else {
                this.to_date = moment__WEBPACK_IMPORTED_MODULE_2__(new Date).format('YYYY-MM-DD');
                this.from_date = moment__WEBPACK_IMPORTED_MODULE_2__(new Date).format('YYYY-MM-DD');
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, '', "Future date is not allowed");
            }
        }
    };
    DateWiseComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    DateWiseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-date-wise',
            template: __importDefault(__webpack_require__(/*! raw-loader!./date-wise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/analytics/date-wise/date-wise.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./date-wise.component.scss */ "./src/app/components/course-module/analytics/date-wise/date-wise.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], DateWiseComponent);
    return DateWiseComponent;
})();



/***/ })

}]);
//# sourceMappingURL=components-course-module-analytics-analytics-module-es2015.js.map