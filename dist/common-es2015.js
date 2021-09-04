(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/course-module/course-planner/course-planner.model.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/course-module/course-planner/course-planner.model.ts ***!
  \*********************************************************************************/
/*! exports provided: CoursePlanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePlanner", function() { return CoursePlanner; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

class CoursePlanner {
    constructor() {
        this.standard_id = "-1";
        this.subject_id = "-1";
        this.master_course_name = "-1";
        this.course_id = "-1";
        this.batch_id = "-1";
        this.from_date = moment__WEBPACK_IMPORTED_MODULE_0__().isoWeekday("Monday").format("YYYY-MM-DD");
        this.to_date = moment__WEBPACK_IMPORTED_MODULE_0__().weekday(7).format("YYYY-MM-DD");
        this.isCompleted = "Y";
        this.isPending = "Y";
        this.isCancelled = "Y";
        this.isUpcoming = "Y";
        this.isMarksUpdate = "Y";
        this.teacher_id = "-1";
    }
}
;


/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic.model.ts ***!
  \*****************************************************************************/
/*! exports provided: Topic, Create_Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Create_Topic", function() { return Create_Topic; });
class Topic {
    constructor() {
        this.isEdit = false;
        this.isExpand = false;
    }
}
class Create_Topic {
    constructor() {
        this.name = '';
        this.standard_id = '-1';
        this.subject_id = '-1';
        this.parent_topic_id = '-1';
        this.description = '';
        this.estimated_time = 0;
        this.institute_topic_id = '-1';
        this.priority_order = 0;
    }
}


/***/ }),

/***/ "./src/app/components/custom-common/check-box-converter.pipe.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/custom-common/check-box-converter.pipe.ts ***!
  \**********************************************************************/
/*! exports provided: CheckBoxConverterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxConverterPipe", function() { return CheckBoxConverterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/* Used to cconvert the input type id to text for user view purpose */
let CheckBoxConverterPipe = /** @class */ (() => {
    let CheckBoxConverterPipe = class CheckBoxConverterPipe {
        transform(value, exponent) {
            if (value == 1) {
                return 'textbox';
            }
            else if (value == 2) {
                return "checkbox";
            }
            else if (value == 3) {
                return "dropdown";
            }
            else if (value == 4) {
                return "multiselect";
            }
        }
    };
    CheckBoxConverterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'checkBoxConverter' })
    ], CheckBoxConverterPipe);
    return CheckBoxConverterPipe;
})();



/***/ }),

/***/ "./src/app/services/archiving-service/courses-service.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/archiving-service/courses-service.service.ts ***!
  \***********************************************************************/
/*! exports provided: CoursesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesServiceService", function() { return CoursesServiceService; });
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




let CoursesServiceService = /** @class */ (() => {
    let CoursesServiceService = class CoursesServiceService {
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
            this.baseUrl = this.auth.getBaseUrl();
        }
        getCoursesList() {
            let url = this.baseUrl + "/api/v1/courseMaster/fetch/courses/" + this.institute_id + "/all";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
        courses(obj) {
            let url = this.baseUrl + "/api/v1/archive/course";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
        batches(obj) {
            let url = this.baseUrl + "/api/v1/archive/batch";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
        getBatches() {
            let url = this.baseUrl + "/api/v1/batches/all/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
        courseArchiveStatus() {
            let url = this.baseUrl + "/api/v1/archive/course/report/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
        batchArchiveStatus() {
            let url = this.baseUrl + "/api/v1/archive/batch/report/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
        studentsArchiveData() {
            let url = this.baseUrl + "/api/v1/archive/students/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
        archiveStudents(obj) {
            let url = this.baseUrl + "/api/v1/archive/students";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
        archivedStudents() {
            let url = this.baseUrl + "/api/v1/archive/students/report/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
    };
    CoursesServiceService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    CoursesServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], CoursesServiceService);
    return CoursesServiceService;
})();



/***/ }),

/***/ "./src/app/services/class-roomService/class-roomlist.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/class-roomService/class-roomlist.service.ts ***!
  \**********************************************************************/
/*! exports provided: ClassRoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassRoomService", function() { return ClassRoomService; });
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




let ClassRoomService = /** @class */ (() => {
    let ClassRoomService = class ClassRoomService {
        constructor(http, auth1) {
            this.http = http;
            this.auth1 = auth1;
            this.baseUrl = '';
            this.auth1.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth1.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseUrl = this.auth1.getBaseUrl();
        }
        fetchClassList() {
            let url = this.baseUrl + "/api/v1/batchClassRoom/all/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        saveClassroomDetail(obj) {
            let url = this.baseUrl + "/api/v1/batchClassRoom/";
            obj.inst_id = this.institute_id;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        updateclassListData(obj) {
            let url = this.baseUrl + "/api/v1/batchClassRoom/" + obj.class_room_id;
            obj.inst_id = this.institute_id;
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
    };
    ClassRoomService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    ClassRoomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], ClassRoomService);
    return ClassRoomService;
})();



/***/ }),

/***/ "./src/app/services/common-api-call.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/common-api-call.service.ts ***!
  \*****************************************************/
/*! exports provided: CommonApiCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonApiCallService", function() { return CommonApiCallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CommonApiCallService = /** @class */ (() => {
    let CommonApiCallService = class CommonApiCallService {
        constructor(http) {
            this.http = http;
            this.examTypeList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.masterDataList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.instAcademicYrList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.fetchSchoolExamTypeList();
        }
        fetchSchoolExamTypeList() {
            if (sessionStorage.getItem("is_institute_type_school") == 'true') {
                this.http.getData("/api/v1/courseExamSchedule/fetch-exam-type/" + sessionStorage.getItem("institute_id"))
                    .subscribe((data) => {
                    this.examTypeList.next(data.result);
                });
            }
        }
        fetchInstituteExamTypes(instituteId) {
            let url = "/api/v1/courseExamSchedule/fetch-exam-type/" + instituteId + "?is_used_data=true";
            return this.http.getData(url);
        }
        fetchMasterData() {
            if (this.masterDataList.value == null) {
                let obj = [
                    "MOTHER_TOUNGE",
                    "PROFESSION",
                    "CASTE_CATEGORY",
                    "BLOOD_GROUP"
                ];
                let url = "/api/v1/masterData/all";
                this.http.postData(url, obj).subscribe(data => {
                    this.masterDataList.next(data);
                });
                return this.masterDataList;
            }
            else {
                return this.masterDataList;
            }
        }
        getAllFinancialYear() {
            if (sessionStorage.getItem("is_institute_type_school") == 'true') {
                if (this.instAcademicYrList.value == null) {
                    let url = "/api/v1/academicYear/all/" + sessionStorage.getItem("institute_id");
                    this.http.getData(url).subscribe(data => {
                        this.instAcademicYrList.next(data);
                    });
                    return this.instAcademicYrList;
                }
                else {
                    return this.instAcademicYrList;
                }
            }
        }
    };
    CommonApiCallService.ctorParameters = () => [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }
    ];
    CommonApiCallService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], CommonApiCallService);
    return CommonApiCallService;
})();



/***/ }),

/***/ "./src/app/services/course-services/exam-schedule.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/course-services/exam-schedule.service.ts ***!
  \*******************************************************************/
/*! exports provided: ExamCourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamCourseService", function() { return ExamCourseService; });
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




let ExamCourseService = /** @class */ (() => {
    let ExamCourseService = class ExamCourseService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseURL = "";
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseURL = this.auth.getBaseUrl();
        }
        // Function For Lang Model
        getCombinedList(standard, subject_id) {
            let url = this.baseURL + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + standard + "&subject_id=" + subject_id + "&assigned=N";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getExamSchedule(id) {
            let url = this.baseURL + "/api/v1/batchExamSched/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        putRequestExamSchedule(data) {
            let url = this.baseURL + "/api/v1/batchExamSched";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        postRequestExamSchedule(data) {
            let url = this.baseURL + "/api/v1/batchExamSched";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        serverRequestToSaveSchedule(data, Type) {
            let url = this.baseURL + "/api/v1/batchExamSched";
            if (Type == "post") {
                return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
            }
            else {
                return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
            }
        }
        notifyStudentExam(id) {
            let url = this.baseURL + "/api/v1/batchExamSched/notify/" + this.institute_id + "/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        fetchStudentList(data) {
            let url = this.baseURL + "/api/v1/attendance/exam";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        markAttendance(data) {
            let url = this.baseURL + "/api/v1/attendance/exam";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        cancelExamSchedule(obj) {
            let url = this.baseURL + "/api/v1/batchExamSched/cancel";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        notifyCancelledClass(obj) {
            let url = this.baseURL + "/api/v1/coursePlanner/notify";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        uncancelClassSchedule(obj) {
            let url = this.baseURL + "/api/v1/batchExamSched/unCancel";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        ///////////////////////////////////
        /// For Course Model ///
        getMasterCourse() {
            let url = this.baseURL + "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getSchedule(obj) {
            obj.inst_id = this.institute_id;
            let url = this.baseURL + "/api/v1/courseExamSchedule/fetch";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        sendReminder(obj) {
            obj.inst_id = this.institute_id;
            let url = this.baseURL + "/api/v1/courseExamSchedule/sendReminder";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        cancelExamScheduleCourse(obj) {
            obj.inst_id = this.institute_id;
            let url = this.baseURL + "/api/v1/courseExamSchedule/cancel";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        fetchCourseListData(data) {
            let url = this.baseURL + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + data;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        updateExamSch(data) {
            data.inst_id = this.institute_id;
            let url = this.baseURL + "/api/v1/courseExamSchedule/update";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        updateExamSubjectWise(data) {
            let url = this.baseURL + "/api/v1/coursePlanner/update";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
    };
    ExamCourseService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    ExamCourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], ExamCourseService);
    return ExamCourseService;
})();



/***/ }),

/***/ "./src/app/services/examgradeservice/exam-grade-service.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/examgradeservice/exam-grade-service.service.ts ***!
  \*************************************************************************/
/*! exports provided: ExamGradeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamGradeServiceService", function() { return ExamGradeServiceService; });
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




let ExamGradeServiceService = /** @class */ (() => {
    let ExamGradeServiceService = class ExamGradeServiceService {
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
            this.baseUrl = this.auth.getBaseUrl();
        }
        fetchAllData() {
            let url = this.baseUrl + "/api/v1/grade_manager/getDetail/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        addData(obj) {
            let url = this.baseUrl + "/api/v1/grade_manager/create";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        saveEdited(obj) {
            let url = this.baseUrl + "/api/v1/grade_manager/update";
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        deleteRow(obj) {
            let url = this.baseUrl + "/api/v1/grade_manager/delete/" + this.institute_id + "/" + obj.grade_id;
            return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
    };
    ExamGradeServiceService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    ExamGradeServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], ExamGradeServiceService);
    return ExamGradeServiceService;
})();



/***/ }),

/***/ "./src/app/services/institute-setting-service/institute-setting.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/services/institute-setting-service/institute-setting.service.ts ***!
  \*********************************************************************************/
/*! exports provided: InstituteSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteSettingService", function() { return InstituteSettingService; });
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




let InstituteSettingService = /** @class */ (() => {
    let InstituteSettingService = class InstituteSettingService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseURL = "";
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseURL = this.auth.getBaseUrl();
        }
        successCallback(res) {
            return res;
        }
        errorCallBack(error) {
            return error;
        }
        getInstituteSettingFromServer() {
            let url = this.baseURL + "/api/v1/institute/settings/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        saveSettingsToServer(data) {
            data.institute_id = this.institute_id;
            let url = this.baseURL + "/api/v1/institute/settings/";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        savePartialData(data) {
            // data.institute_id = sessionStorage.getItem('institute_id');
            let url = this.baseURL + "/api/v1/institute/settings";
            return this.http.patch(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
        }
        getIPAddress() {
            return this.http.get('https://api.ipify.org/?format=json');
        }
    };
    InstituteSettingService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    InstituteSettingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], InstituteSettingService);
    return InstituteSettingService;
})();

;


/***/ }),

/***/ "./src/app/services/report-services/exam.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/report-services/exam.service.ts ***!
  \**********************************************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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





let ExamService = /** @class */ (() => {
    let ExamService = class ExamService {
        /* set default value for each url, header and autherization on service creation */
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.isProfessional = false;
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
        }
        ExamReport() {
            let url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        batchExamReport(obj) {
            let url = this.baseUrl + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id + "&assigned=N";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
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
        getExamSchedule(obj) {
            let url = this.baseUrl + "/api/v1/batchExamSched/" + obj;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        viewExamData(obj) {
            let url = this.baseUrl + "/api/v1/reports/StdExam";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        viewDetailData(obj) {
            let url = this.baseUrl + "/api/v1/reports/StdExam/" + obj;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        //   New Exam Report APIs
        getAllExamReport(obj) {
            console.log("obj", obj);
            let url;
            if (obj.from_date == null || obj.from_date == "") {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/" + this.institute_id + "?master_course_name=" + obj.master_course_name + "&standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id + "&from_date=" + obj.from_date + "&to_date=" + obj.to_date;
            }
            else {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/" + this.institute_id + "?master_course_name=" + obj.master_course_name + "&standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id + "&from_date=" + moment__WEBPACK_IMPORTED_MODULE_4__(obj.from_date).format("YYYY-MM-DD") + "&to_date=" + moment__WEBPACK_IMPORTED_MODULE_4__(obj.to_date).format("YYYY-MM-DD");
            }
            // let url = this.baseUrl + "/api/v1/reports/StdExam/examReport/" + this.institute_id + "?from_date="+obj.from_date+"&to_date="+obj.to_date
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        getCourseWiseReport(course_id) {
            let url = "";
            if (!this.isProfessional) {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/courseWise/" + this.institute_id + "?course_id=" + course_id;
            }
            else {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/courseWise/" + this.institute_id + "?batch_id=" + course_id;
            }
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        getExamWiseReport(exam_schd_id, examSchdlType) {
            let url = "";
            if (!this.isProfessional) {
                if (examSchdlType) {
                    url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for course model
                }
                else {
                    url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/" + this.institute_id + "?course_exam_schedule_id=" + exam_schd_id; // for course model
                }
            }
            else {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for batch model
            }
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        getSubjectWiseReport(subject_id) {
            let url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/performance/" + this.institute_id + "?subject_id=" + subject_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        downloadExamReport(exam_schd_id, examSchdlType) {
            let url = "";
            if (!this.isProfessional) {
                if (examSchdlType) {
                    url = this.baseUrl + "/api/v1/reports/StdExam/downloadExamReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for course model
                }
                else {
                    url = this.baseUrl + "/api/v1/reports/StdExam/downloadExamReport/examWise/" + this.institute_id + "?course_exam_schedule_id=" + exam_schd_id; // for course model
                }
            }
            else {
                url = this.baseUrl + "/api/v1/reports/StdExam/downloadExamReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for course model
            }
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
    };
    ExamService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    ExamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], ExamService);
    return ExamService;
})();



/***/ }),

/***/ "./src/app/services/report-services/get-sms.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/report-services/get-sms.service.ts ***!
  \*************************************************************/
/*! exports provided: getSMSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSMSService", function() { return getSMSService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/services/authenticator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let getSMSService = /** @class */ (() => {
    let getSMSService = class getSMSService {
        /* set default value for each url, header and autherization on service creation */
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
            this.baseUrl = this.auth.getBaseUrl();
        }
        getCamapignView(campaignID) {
            ///StdMgmtWebAPI/api/v1/campaign/fetch/<Institute Id>/<campaign msg id>
            let campignViewURL = this.baseUrl + '/api/v1/campaign/fetch/' + this.institute_id + '/' + campaignID;
            return this.http.get(campignViewURL, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        // delete campign
        deleteCampaign(campaignID) {
            let deleteURL = this.baseUrl + '/api/v1/campaign/delete/campaign/' + this.institute_id + '/' + campaignID;
            return this.http.delete(deleteURL, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        fetchCampainSMSReport() {
            let urlCampaign = this.baseUrl + '/api/v1/campaign/fetch/' + this.institute_id;
            return this.http.post(urlCampaign, {}, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        fetchSmsReport(obj) {
            console.log("Object", obj);
            let tempObj = {
                batch_size: "-1",
                from_date: obj.from_date == '' ? moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD') : moment__WEBPACK_IMPORTED_MODULE_3__(obj.from_date).format('YYYY-MM-DD'),
                institution_id: obj.institution_id,
                order_by: "",
                sorted_by: "",
                start_index: "-1",
                to_date: obj.to_date == '' ? '' : moment__WEBPACK_IMPORTED_MODULE_3__(obj.to_date).format('YYYY-MM-DD')
            };
            // obj.from_date = obj.from_date == '' ? moment().format('YYYY-MM-DD') : moment(obj.from_date).format('YYYY-MM-DD');
            // obj.to_date = obj.to_date == '' ? '' : moment(obj.to_date).format('YYYY-MM-DD');
            let urlSmsReport = this.baseUrl + "/api/v1/alerts/config/smsReport";
            return this.http.post(urlSmsReport, tempObj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
    };
    getSMSService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"] }
    ];
    getSMSService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]])
    ], getSMSService);
    return getSMSService;
})();



/***/ }),

/***/ "./src/app/services/teacherService/teacherApi.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/teacherService/teacherApi.service.ts ***!
  \***************************************************************/
/*! exports provided: TeacherAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherAPIService", function() { return TeacherAPIService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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




let TeacherAPIService = /** @class */ (() => {
    let TeacherAPIService = class TeacherAPIService {
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
            this.baseUrl = this.auth.getBaseUrl();
        }
        // List Section Of Teacher
        getAllTeacherList() {
            let url = this.baseUrl + "/api/v1/teachers/all/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        deleteTeacher(id) {
            let url = this.baseUrl + "/api/v1/teachers/" + id;
            return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        // Add Section Of Teacher
        addNewTeacherDetails(data) {
            let url = this.baseUrl + '/api/v1/teachers';
            data.institution_id = this.institute_id;
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        // Edit Section Of Teacher
        getSelectedTeacherInfo(data) {
            let url = this.baseUrl + '/api/v1/teachers/' + data;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        saveEditTeacherInformation(teacher_id, data) {
            let url = this.baseUrl + '/api/v1/teachers/' + teacher_id;
            data.institution_id = this.institute_id;
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        downloadDocument(teacher_id) {
            let url = this.baseUrl + '/api/v1/teachers/getIDCard/' + teacher_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        // View Section Api
        getViewInfoOfTeacher(teacher_id) {
            let url = this.baseUrl + '/api/v1/teachers/' + teacher_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        getTeacherViewBatchesInfo() {
            let url = this.baseUrl + '/api/v1/batches/all/' + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        customizedTeacherSearchOnDashBoardView(data, teacher_id) {
            let url1 = this.http.post(this.baseUrl + '/api/v1/teachers/' + teacher_id + '/dashboard', data, { headers: this.headers });
            return url1.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        customizedTeacherSearchOnGuestBatchView(data, teacher_id) {
            let url1 = this.http.post(this.baseUrl + '/api/v1/teachers/' + teacher_id + '/guestBatches/classes', data, { headers: this.headers });
            return url1.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        viewBatchDetails(data, teacher_id) {
            let url1 = this.http.post(this.baseUrl + '/api/v1/teachers/' + teacher_id + '/batch/classes', data, { headers: this.headers });
            return url1.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
    };
    TeacherAPIService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    TeacherAPIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], TeacherAPIService);
    return TeacherAPIService;
})();



/***/ }),

/***/ "./src/app/services/user-management/role.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/user-management/role.service.ts ***!
  \**********************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
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




let RoleService = /** @class */ (() => {
    let RoleService = class RoleService {
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
            this.baseUrl = this.auth.getBaseUrl();
        }
        getRoles() {
            let url = this.baseUrl + "/api/v1/roleApi/allRoles/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getAssignedUserList(id) {
            let url = this.baseUrl + "/api/v1/roleApi/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        deleteRole(id) {
            let url = this.baseUrl + "/api/v1/roleApi/" + id;
            return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        // Add Edit 
        getAllFeature() {
            let url = this.baseUrl + "/api/v1/roleApi/allFeatures?categoryWise=true";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getPerticularRoles(id) {
            let url = this.baseUrl + "/api/v1/roleApi/role/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        createRole(obj) {
            let url = this.baseUrl + "/api/v1/roleApi/addRole";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        updateRole(obj, id) {
            let url = this.baseUrl + "/api/v1/roleApi/editRole/" + id;
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
    };
    RoleService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], RoleService);
    return RoleService;
})();



/***/ }),

/***/ "./src/app/services/user-management/user.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/user-management/user.service.ts ***!
  \**********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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




let UserService = /** @class */ (() => {
    let UserService = class UserService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            // this.auth.currentInstituteId.subscribe(id => {
            this.institute_id = sessionStorage.getItem('institute_id');
            // });
            this.baseUrl = this.auth.getBaseUrl();
        }
        getUserList(obj, active) {
            let url = this.baseUrl + "/api/v1/profiles/all/" + this.institute_id + "?active=" + active;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getRoles() {
            let url = this.baseUrl + "/api/v1/roleApi/allRoles/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        fetchUserDetails(id) {
            let url = this.baseUrl + "/api/v1/profiles/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        sendSmS(obj) {
            let url = this.baseUrl + "/api/v1/profiles/sendAPPSMS/" + this.institute_id;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getItemList(id) {
            let url = this.baseUrl + "/api/v1/inventory/item/fetchForUserAllocation/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        getAllotedHistroy(id) {
            let url = this.baseUrl + "/api/v1/inventory/item/user/txHistory/" + id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        allocateItem(obj) {
            obj.institution_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/inventory/item/user/allocate";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        deleteInventory(id) {
            let url = this.baseUrl + "/api/v1/inventory/item/txHistory/" + id;
            return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        createUser(obj) {
            obj.institute_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/profiles";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
        updateUserDetails(obj, id) {
            obj.institute_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/profiles/" + id;
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => { return res; }, err => { return err; }));
        }
    };
    UserService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], UserService);
    return UserService;
})();



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map