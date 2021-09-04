(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-communicate-communicate-module~app-components-course-module-course-module-mod~5bd5763d"],{

/***/ "./src/app/services/widget.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/widget.service.ts ***!
  \********************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticator.service */ "./src/app/services/authenticator.service.ts");
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





let WidgetService = /** @class */ (() => {
    let WidgetService = class WidgetService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            // this.institute_id = this.auth.getInstituteId();
            // this.Authorization = this.auth.getAuthToken();
            this.baseUrl = this.auth.getBaseUrl();
        }
        fetchSchedWidgetData(obj) {
            let url = this.baseUrl + "/api/v1/dashboard/admin//todayClassSchedule/" + this.institute_id;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        fetchFeeWidgetData(obj) {
            obj.institute_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/studentWise/fee/feesStats/" + this.institute_id;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getSettings() {
            let url = this.baseUrl + "/api/v1/institute/settings/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getInstituteSettings() {
            let url = this.baseUrl + "/api/v1/institutes/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getAllplan() {
            let url = this.baseUrl + "/api/v1/proctur/getAllPlans";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getAllocatedStorageDetails() {
            let url = this.baseUrl + "/api/v1/instFileSystem/getUsedSpace/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getAttendance(obj) {
            let url = this.baseUrl + "/api/v1/attendance";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getAllteachers() {
            let url = this.baseUrl + "/api/v1/teachers/all/" + this.institute_id + "?active=Y";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        updateAttendance(obj) {
            let url = this.baseUrl + "/api/v1/attendance";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        cancelClassSchedule(obj) {
            let url = this.baseUrl + "/api/v1/batchClsSched/cancel";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        cancelCourseSchedule(obj) {
            obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
            let url = this.baseUrl + "/api/v1/courseClassSchedule/cancelMasterClassSchedule";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        cancelBatchSchedule(obj) {
            let url = this.baseUrl + "/api/v1/batchClsSched/cancel";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        notifyStudentSchedule(obj) {
            let url = this.baseUrl + "/api/v1/coursePlanner/notify";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        reScheduleClass(obj) {
            let url = this.baseUrl + "/api/v1/batchClsSched/reschedule";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        fetchCourseLevelWidgetData(obj) {
            obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
            let url = this.baseUrl + '/api/v1/courseClassSchedule/fetchMasterCourseDetails/todaySchedule';
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        fetchCourseAttendance(obj) {
            let url = this.baseUrl + '/api/v1/attendance/course';
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        updateCourseAttendance(obj) {
            let url = this.baseUrl + "/api/v1/attendance/course";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        remindCourseLevel(obj) {
            obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
            let url = this.baseUrl + "/api/v1/courseClassSchedule/sendCourseMasterReminder";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getListOfTopics(batchId) {
            let url = this.baseUrl + "/api/v1/topic_manager/getAllTopics/" + this.institute_id;
            return this.http.post(url, batchId, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        fetchCombinedData(standard_id, subject_id) {
            let url = this.baseUrl + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + standard_id + "&subject_id=" + subject_id + "&assigned=Y";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        fetchStudentListData(batch_id) {
            let url = this.baseUrl + "/api/v1//studentBatchMap/batches/" + batch_id;
            return this.http.post(url, "", { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        saveMessageTOServer(obj) {
            let url = this.baseUrl + "/api/v1/notification/message/" + this.institute_id;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getAllActiveStudentList() {
            let url = this.baseUrl + "/api/v1/students/all/" + this.institute_id + "?active=Y";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getAllTeacherList() {
            let url = this.baseUrl + "/api/v1/teachers/all/" + this.institute_id + "?active=Y";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getAllInActiveList() {
            let url = this.baseUrl + "/api/v1/students/all/" + this.institute_id + "?active=NA";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getAllAluminiList() {
            let url = this.baseUrl + "/api/v1/archive/students/alumni/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getMessageList(obj) {
            let url = this.baseUrl + "/api/v1/notification/message/" + this.institute_id + "/all";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        sendNotification(obj) {
            obj.institution_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/alerts/config";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        sendPushNotificationToServer(obj) {
            obj.institution_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/pushNotification/send";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        smsForAddDownload(obj) {
            let url = this.baseUrl + "/api/v1/profiles/sendAPPSMS/" + this.institute_id;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        ///Course Model Api
        getAllMasterCourse() {
            let url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getAllCourse(name) {
            let url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + name;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getStudentListOfCourse(obje) {
            let url = this.baseUrl + "/api/v1/studentBatchMap/manageBatchStudent/" + this.institute_id;
            return this.http.post(url, obje, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getMasterCourseDetails(obj) {
            obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
            obj.inst_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/courseClassSchedule/fetch";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        /// Exam Section
        //get Exam Schedule 
        getExamSchedule(obj) {
            let url = this.baseUrl + "/api/v1/dashboard/admin/studentExamSchedules/" + this.institute_id;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        cancelExamSchedule(obj) {
            let url = this.baseUrl + "/api/v1/batchExamSched/cancel";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        notifyStudentExam(id) {
            let url = this.baseUrl + "/api/v1/batchExamSched/notify/" + this.institute_id + "/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        sendReminder(obj) {
            obj.inst_id = this.institute_id;
            obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
            let url = this.baseUrl + "/api/v1/courseExamSchedule/sendReminder";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        fetchStudentList(data) {
            let url = this.baseUrl + "/api/v1/attendance/exam";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        markAttendance(data) {
            let url = this.baseUrl + "/api/v1/attendance/exam";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        fetchStudentExamDetails(batch_id, Schedule) {
            let url = this.baseUrl + "/api/v1/StdExam/" + batch_id + '?schd_id=' + Schedule;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        updateAttendanceDetails(obj) {
            let url = this.baseUrl + "/api/v1/StdExam";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getExamGrades() {
            let url = this.baseUrl + "/api/v1/grade_manager/getDetail/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        //Course Model API
        getCourseExamFromServer(obj) {
            obj.start_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.start_date).format('YYYY-MM-DD');
            obj.end_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.end_date).format('YYYY-MM-DD');
            obj.inst_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/courseExamSchedule/fetchExamSchld";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        markStudentAttendance(obj) {
            let url = this.baseUrl + "/api/v1/StdCourseExam/markAttendance";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        markStudentMarks(obj) {
            let url = this.baseUrl + '/api/v1/StdCourseExam/updateMarks';
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getExamStudentsList(id) {
            let url = this.baseUrl + "/api/v1/StdCourseExam/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        cancelExamScheduleCourse(obj) {
            obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
            obj.inst_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/courseExamSchedule/cancel";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        // SMS Approve/Reject
        changesSMSStatus(obj, id) {
            let url = this.baseUrl + "/api/v1/notification/message/" + this.institute_id + "/" + id;
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
    };
    WidgetService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    WidgetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], WidgetService);
    return WidgetService;
})();



/***/ })

}]);
//# sourceMappingURL=default~app-components-communicate-communicate-module~app-components-course-module-course-module-mod~5bd5763d-es2015.js.map