(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~77e6f154"],{

/***/ "./src/app/services/course-services/class-schedule.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/course-services/class-schedule.service.ts ***!
  \********************************************************************/
/*! exports provided: ClassScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassScheduleService", function() { return ClassScheduleService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/services/authenticator.service.ts");
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





let ClassScheduleService = /** @class */ (() => {
    let ClassScheduleService = class ClassScheduleService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseURL = "";
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    "Authorization": this.Authorization
                });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseURL = this.auth.getBaseUrl();
        }
        getAllSubBranches() {
            let url = this.baseURL + "/api/v1/institutes/all/subBranches/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, error => {
                return error;
            }));
        }
        getAllMasterCourse() {
            let url = this.baseURL + "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, error => {
                return error;
            }));
        }
        getAllTeachers() {
            let url = this.baseURL + "/api/v1/teachers/all/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, error => {
                return error;
            }));
        }
        getInstituteSettings() {
            let url = this.baseURL + "/api/v1/institute/settings/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, error => {
                return error;
            }));
        }
        getCourseFromMasterById(id) {
            let url = this.baseURL + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getStandardSubjectList(stdId, subId, isAssigned) {
            let url = this.baseURL + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + stdId + "&subject_id=" + subId + "&assigned=" + isAssigned;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getBatchDetailsById(id) {
            let url = this.baseURL + "/api/v1/batchClsSched/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getClassFrequencyAll() {
            let url = this.baseURL + "/api/v1/masterData/type/CLASS_FREQ";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getDayofWeekAll() {
            let url = this.baseURL + "/api/v1/masterData/type/DAY_OF_WEEK";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getTimeTable(obj) {
            obj.institute_id = this.institute_id;
            let url = this.baseURL + "/api/v1/timeTable";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        successCallback(res) {
            return res;
        }
        errorCallBack(err) {
            return err;
        }
        getAllSubjectlist(data) {
            data.inst_id = this.institute_id;
            data.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(data.requested_date).format('YYYY-MM-DD');
            let url = this.baseURL + "/api/v1/courseClassSchedule/fetch";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        getCustomClassListFromServer() {
            let url = this.baseURL + "/api/v1/courseClassSchedule/getCustomClassesList";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        getAllActiveTeachersList() {
            // let url = this.baseURL + "/api/v1/teachers/all/" + this.institute_id + '?active=Y';
            let url = this.baseURL + "/api/v1/teachers/teacher-list/" + this.institute_id + '?active=Y';
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        sendReminderToServer(data) {
            data.inst_id = this.institute_id;
            let url = this.baseURL + "/api/v1/courseClassSchedule/sendReminder";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        sendReminderToServerSubject(data) {
            let url = this.baseURL + "/api/v1/coursePlanner/notify";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        remindCourseLevel(obj) {
            let url = this.baseURL + "/api/v1/courseClassSchedule/sendCourseMasterReminder";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        saveDataOnServer(data) {
            data.inst_id = this.institute_id;
            let url = this.baseURL + "/api/v1/courseClassSchedule/update";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        selectedDateScheduleToServer(data) {
            let url = this.baseURL + "/api/v1/courseClassSchedule/copyCourseSchedule";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        saveCustomRecurrenceToServer(data) {
            let url = this.baseURL + "/api/v1/courseClassSchedule/updateWeeklySubjectSchedule";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        cancelClassSchedule(data) {
            let url = this.baseURL + "/api/v1/batchClsSched/cancel";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        //////////////////////////////////////////////////////////////////////////////
        ///////////////Batch Model////////////////////////////////////////////
        getWeekOfDays() {
            let url = this.baseURL + "/api/v1/masterData/type/DAY_OF_WEEK";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        notifyCancelledClassSchedule(data) {
            let url = this.baseURL + "/api/v1/coursePlanner/notify";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        createWeeklyBatchPost(data) {
            let url = this.baseURL + "/api/v1/batchClsSched";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        createCustomBatchPUT(data) {
            let url = this.baseURL + "/api/v1/batchClsSched";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        sendNotification(schID, type) {
            let url = this.baseURL + "/api/v1/batchClsSched/notify/" + this.institute_id + "/" + schID + "/" + type;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////Home Class///////////////////////////////////////////////
        getSubjectList(data) {
            let url = this.baseURL + "/api/v1/courseMaster/fetch/courses/" + this.institute_id + '/' + data;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        getAllTeachersList() {
            // let url = this.baseURL + "/api/v1/teachers/all/" + this.institute_id + '?active=Y';
            let url = this.baseURL + "/api/v1/teachers/teacher-list/" + this.institute_id + '?active=Y';
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, error => {
                return error;
            }));
        }
        getAllTeachersListOld() {
            let url = this.baseURL + "/api/v1/teachers/all/" + this.institute_id + '?active=Y';
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, error => {
                return error;
            }));
        }
        reScheduleClass(obj) {
            let url = this.baseURL + "/api/v1/batchClsSched/reschedule";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        getCombinedDataFromServer(standard_id, subject_id) {
            let url = this.baseURL + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + standard_id + "&subject_id=" + subject_id + "&assigned=N";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        cancelCourseSchedule(obj) {
            let url = this.baseURL + "/api/v1/courseClassSchedule/cancelMasterClassSchedule";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        ///// Change Teacher
        changeClassTeacher(obj) {
            let url = this.baseURL + "/api/v1/coursePlanner";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        deleteMultiple(obj) {
            obj.instituteId = this.institute_id;
            let url = this.baseURL + "/api/v1/timeTable/deleteSchld";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getWeeklySchedule(id) {
            let url = `${this.baseURL}/api/v1/courseClassSchedule/getWeeklySubjectSchedule/${id}`;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        // Course Planner services
        getCoursePlannerData(obj, section) {
            obj.institute_id = this.institute_id;
            obj.from_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.from_date).format("YYYY-MM-DD");
            obj.to_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.to_date).format("YYYY-MM-DD");
            let url = this.baseURL + "/api/v1/coursePlanner/category?type=" + section;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        notifyCancelClass(obj, section) {
            let url = this.baseURL + "/api/v1/coursePlanner/notifyCancelClassOrExam/?type=" + section;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
    };
    ClassScheduleService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    ClassScheduleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], ClassScheduleService);
    return ClassScheduleService;
})();



/***/ })

}]);
//# sourceMappingURL=default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~77e6f154-es2015.js.map