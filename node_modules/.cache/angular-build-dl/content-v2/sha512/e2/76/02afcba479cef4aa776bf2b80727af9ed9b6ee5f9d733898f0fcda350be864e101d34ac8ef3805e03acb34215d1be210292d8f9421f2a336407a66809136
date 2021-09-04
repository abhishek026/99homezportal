(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/components/course-module/course-planner/course-planner.model.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/course-module/course-planner/course-planner.model.ts ***!
      \*********************************************************************************/

    /*! exports provided: CoursePlanner */

    /***/
    function srcAppComponentsCourseModuleCoursePlannerCoursePlannerModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoursePlanner", function () {
        return CoursePlanner;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

      var CoursePlanner = function CoursePlanner() {
        _classCallCheck(this, CoursePlanner);

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
      };

      ;
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/topic/topic.model.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/topic/topic.model.ts ***!
      \*****************************************************************************/

    /*! exports provided: Topic, Create_Topic */

    /***/
    function srcAppComponentsCourseModuleCreateCourseTopicTopicModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Topic", function () {
        return Topic;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Create_Topic", function () {
        return Create_Topic;
      });

      var Topic = function Topic() {
        _classCallCheck(this, Topic);

        this.isEdit = false;
        this.isExpand = false;
      };

      var Create_Topic = function Create_Topic() {
        _classCallCheck(this, Create_Topic);

        this.name = '';
        this.standard_id = '-1';
        this.subject_id = '-1';
        this.parent_topic_id = '-1';
        this.description = '';
        this.estimated_time = 0;
        this.institute_topic_id = '-1';
        this.priority_order = 0;
      };
      /***/

    },

    /***/
    "./src/app/components/custom-common/check-box-converter.pipe.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/components/custom-common/check-box-converter.pipe.ts ***!
      \**********************************************************************/

    /*! exports provided: CheckBoxConverterPipe */

    /***/
    function srcAppComponentsCustomCommonCheckBoxConverterPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckBoxConverterPipe", function () {
        return CheckBoxConverterPipe;
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
      /* Used to cconvert the input type id to text for user view purpose */


      var CheckBoxConverterPipe =
      /** @class */
      function () {
        var CheckBoxConverterPipe = /*#__PURE__*/function () {
          function CheckBoxConverterPipe() {
            _classCallCheck(this, CheckBoxConverterPipe);
          }

          _createClass(CheckBoxConverterPipe, [{
            key: "transform",
            value: function transform(value, exponent) {
              if (value == 1) {
                return 'textbox';
              } else if (value == 2) {
                return "checkbox";
              } else if (value == 3) {
                return "dropdown";
              } else if (value == 4) {
                return "multiselect";
              }
            }
          }]);

          return CheckBoxConverterPipe;
        }();

        CheckBoxConverterPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
          name: 'checkBoxConverter'
        })], CheckBoxConverterPipe);
        return CheckBoxConverterPipe;
      }();
      /***/

    },

    /***/
    "./src/app/services/archiving-service/courses-service.service.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/services/archiving-service/courses-service.service.ts ***!
      \***********************************************************************/

    /*! exports provided: CoursesServiceService */

    /***/
    function srcAppServicesArchivingServiceCoursesServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoursesServiceService", function () {
        return CoursesServiceService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authenticator.service */
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

      var CoursesServiceService =
      /** @class */
      function () {
        var CoursesServiceService = /*#__PURE__*/function () {
          function CoursesServiceService(http, auth) {
            var _this = this;

            _classCallCheck(this, CoursesServiceService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(function (key) {
              _this.Authorization = key;
              _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
          }

          _createClass(CoursesServiceService, [{
            key: "getCoursesList",
            value: function getCoursesList() {
              var url = this.baseUrl + "/api/v1/courseMaster/fetch/courses/" + this.institute_id + "/all";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "courses",
            value: function courses(obj) {
              var url = this.baseUrl + "/api/v1/archive/course";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "batches",
            value: function batches(obj) {
              var url = this.baseUrl + "/api/v1/archive/batch";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getBatches",
            value: function getBatches() {
              var url = this.baseUrl + "/api/v1/batches/all/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "courseArchiveStatus",
            value: function courseArchiveStatus() {
              var url = this.baseUrl + "/api/v1/archive/course/report/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "batchArchiveStatus",
            value: function batchArchiveStatus() {
              var url = this.baseUrl + "/api/v1/archive/batch/report/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "studentsArchiveData",
            value: function studentsArchiveData() {
              var url = this.baseUrl + "/api/v1/archive/students/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "archiveStudents",
            value: function archiveStudents(obj) {
              var url = this.baseUrl + "/api/v1/archive/students";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "archivedStudents",
            value: function archivedStudents() {
              var url = this.baseUrl + "/api/v1/archive/students/report/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }]);

          return CoursesServiceService;
        }();

        CoursesServiceService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        CoursesServiceService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], CoursesServiceService);
        return CoursesServiceService;
      }();
      /***/

    },

    /***/
    "./src/app/services/class-roomService/class-roomlist.service.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/services/class-roomService/class-roomlist.service.ts ***!
      \**********************************************************************/

    /*! exports provided: ClassRoomService */

    /***/
    function srcAppServicesClassRoomServiceClassRoomlistServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassRoomService", function () {
        return ClassRoomService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authenticator.service */
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

      var ClassRoomService =
      /** @class */
      function () {
        var ClassRoomService = /*#__PURE__*/function () {
          function ClassRoomService(http, auth1) {
            var _this2 = this;

            _classCallCheck(this, ClassRoomService);

            this.http = http;
            this.auth1 = auth1;
            this.baseUrl = '';
            this.auth1.currentAuthKey.subscribe(function (key) {
              _this2.Authorization = key;
              _this2.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this2.Authorization
              });
            });
            this.auth1.currentInstituteId.subscribe(function (id) {
              _this2.institute_id = id;
            });
            this.baseUrl = this.auth1.getBaseUrl();
          }

          _createClass(ClassRoomService, [{
            key: "fetchClassList",
            value: function fetchClassList() {
              var url = this.baseUrl + "/api/v1/batchClassRoom/all/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "saveClassroomDetail",
            value: function saveClassroomDetail(obj) {
              var url = this.baseUrl + "/api/v1/batchClassRoom/";
              obj.inst_id = this.institute_id;
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "updateclassListData",
            value: function updateclassListData(obj) {
              var url = this.baseUrl + "/api/v1/batchClassRoom/" + obj.class_room_id;
              obj.inst_id = this.institute_id;
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }]);

          return ClassRoomService;
        }();

        ClassRoomService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        ClassRoomService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], ClassRoomService);
        return ClassRoomService;
      }();
      /***/

    },

    /***/
    "./src/app/services/common-api-call.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/services/common-api-call.service.ts ***!
      \*****************************************************/

    /*! exports provided: CommonApiCallService */

    /***/
    function srcAppServicesCommonApiCallServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonApiCallService", function () {
        return CommonApiCallService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

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

      var CommonApiCallService =
      /** @class */
      function () {
        var CommonApiCallService = /*#__PURE__*/function () {
          function CommonApiCallService(http) {
            _classCallCheck(this, CommonApiCallService);

            this.http = http;
            this.examTypeList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.masterDataList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.instAcademicYrList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.fetchSchoolExamTypeList();
          }

          _createClass(CommonApiCallService, [{
            key: "fetchSchoolExamTypeList",
            value: function fetchSchoolExamTypeList() {
              var _this3 = this;

              if (sessionStorage.getItem("is_institute_type_school") == 'true') {
                this.http.getData("/api/v1/courseExamSchedule/fetch-exam-type/" + sessionStorage.getItem("institute_id")).subscribe(function (data) {
                  _this3.examTypeList.next(data.result);
                });
              }
            }
          }, {
            key: "fetchInstituteExamTypes",
            value: function fetchInstituteExamTypes(instituteId) {
              var url = "/api/v1/courseExamSchedule/fetch-exam-type/" + instituteId + "?is_used_data=true";
              return this.http.getData(url);
            }
          }, {
            key: "fetchMasterData",
            value: function fetchMasterData() {
              var _this4 = this;

              if (this.masterDataList.value == null) {
                var obj = ["MOTHER_TOUNGE", "PROFESSION", "CASTE_CATEGORY", "BLOOD_GROUP"];
                var url = "/api/v1/masterData/all";
                this.http.postData(url, obj).subscribe(function (data) {
                  _this4.masterDataList.next(data);
                });
                return this.masterDataList;
              } else {
                return this.masterDataList;
              }
            }
          }, {
            key: "getAllFinancialYear",
            value: function getAllFinancialYear() {
              var _this5 = this;

              if (sessionStorage.getItem("is_institute_type_school") == 'true') {
                if (this.instAcademicYrList.value == null) {
                  var url = "/api/v1/academicYear/all/" + sessionStorage.getItem("institute_id");
                  this.http.getData(url).subscribe(function (data) {
                    _this5.instAcademicYrList.next(data);
                  });
                  return this.instAcademicYrList;
                } else {
                  return this.instAcademicYrList;
                }
              }
            }
          }]);

          return CommonApiCallService;
        }();

        CommonApiCallService.ctorParameters = function () {
          return [{
            type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }];
        };

        CommonApiCallService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
          providedIn: "root"
        }), __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])], CommonApiCallService);
        return CommonApiCallService;
      }();
      /***/

    },

    /***/
    "./src/app/services/course-services/exam-schedule.service.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/services/course-services/exam-schedule.service.ts ***!
      \*******************************************************************/

    /*! exports provided: ExamCourseService */

    /***/
    function srcAppServicesCourseServicesExamScheduleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamCourseService", function () {
        return ExamCourseService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authenticator.service */
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

      var ExamCourseService =
      /** @class */
      function () {
        var ExamCourseService = /*#__PURE__*/function () {
          function ExamCourseService(http, auth) {
            var _this6 = this;

            _classCallCheck(this, ExamCourseService);

            this.http = http;
            this.auth = auth;
            this.baseURL = "";
            this.auth.currentAuthKey.subscribe(function (key) {
              _this6.Authorization = key;
              _this6.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this6.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this6.institute_id = id;
            });
            this.baseURL = this.auth.getBaseUrl();
          } // Function For Lang Model


          _createClass(ExamCourseService, [{
            key: "getCombinedList",
            value: function getCombinedList(standard, subject_id) {
              var url = this.baseURL + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + standard + "&subject_id=" + subject_id + "&assigned=N";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getExamSchedule",
            value: function getExamSchedule(id) {
              var url = this.baseURL + "/api/v1/batchExamSched/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "putRequestExamSchedule",
            value: function putRequestExamSchedule(data) {
              var url = this.baseURL + "/api/v1/batchExamSched";
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "postRequestExamSchedule",
            value: function postRequestExamSchedule(data) {
              var url = this.baseURL + "/api/v1/batchExamSched";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "serverRequestToSaveSchedule",
            value: function serverRequestToSaveSchedule(data, Type) {
              var url = this.baseURL + "/api/v1/batchExamSched";

              if (Type == "post") {
                return this.http.post(url, data, {
                  headers: this.headers
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                  return res;
                }, function (err) {
                  return err;
                }));
              } else {
                return this.http.put(url, data, {
                  headers: this.headers
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                  return res;
                }, function (err) {
                  return err;
                }));
              }
            }
          }, {
            key: "notifyStudentExam",
            value: function notifyStudentExam(id) {
              var url = this.baseURL + "/api/v1/batchExamSched/notify/" + this.institute_id + "/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchStudentList",
            value: function fetchStudentList(data) {
              var url = this.baseURL + "/api/v1/attendance/exam";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "markAttendance",
            value: function markAttendance(data) {
              var url = this.baseURL + "/api/v1/attendance/exam";
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "cancelExamSchedule",
            value: function cancelExamSchedule(obj) {
              var url = this.baseURL + "/api/v1/batchExamSched/cancel";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "notifyCancelledClass",
            value: function notifyCancelledClass(obj) {
              var url = this.baseURL + "/api/v1/coursePlanner/notify";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "uncancelClassSchedule",
            value: function uncancelClassSchedule(obj) {
              var url = this.baseURL + "/api/v1/batchExamSched/unCancel";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } ///////////////////////////////////
            /// For Course Model ///

          }, {
            key: "getMasterCourse",
            value: function getMasterCourse() {
              var url = this.baseURL + "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getSchedule",
            value: function getSchedule(obj) {
              obj.inst_id = this.institute_id;
              var url = this.baseURL + "/api/v1/courseExamSchedule/fetch";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "sendReminder",
            value: function sendReminder(obj) {
              obj.inst_id = this.institute_id;
              var url = this.baseURL + "/api/v1/courseExamSchedule/sendReminder";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "cancelExamScheduleCourse",
            value: function cancelExamScheduleCourse(obj) {
              obj.inst_id = this.institute_id;
              var url = this.baseURL + "/api/v1/courseExamSchedule/cancel";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchCourseListData",
            value: function fetchCourseListData(data) {
              var url = this.baseURL + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + data;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "updateExamSch",
            value: function updateExamSch(data) {
              data.inst_id = this.institute_id;
              var url = this.baseURL + "/api/v1/courseExamSchedule/update";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "updateExamSubjectWise",
            value: function updateExamSubjectWise(data) {
              var url = this.baseURL + "/api/v1/coursePlanner/update";
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }]);

          return ExamCourseService;
        }();

        ExamCourseService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        ExamCourseService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], ExamCourseService);
        return ExamCourseService;
      }();
      /***/

    },

    /***/
    "./src/app/services/examgradeservice/exam-grade-service.service.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/services/examgradeservice/exam-grade-service.service.ts ***!
      \*************************************************************************/

    /*! exports provided: ExamGradeServiceService */

    /***/
    function srcAppServicesExamgradeserviceExamGradeServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamGradeServiceService", function () {
        return ExamGradeServiceService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authenticator.service */
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

      var ExamGradeServiceService =
      /** @class */
      function () {
        var ExamGradeServiceService = /*#__PURE__*/function () {
          function ExamGradeServiceService(http, auth) {
            var _this7 = this;

            _classCallCheck(this, ExamGradeServiceService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(function (key) {
              _this7.Authorization = key;
              _this7.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this7.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this7.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
          }

          _createClass(ExamGradeServiceService, [{
            key: "fetchAllData",
            value: function fetchAllData() {
              var url = this.baseUrl + "/api/v1/grade_manager/getDetail/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "addData",
            value: function addData(obj) {
              var url = this.baseUrl + "/api/v1/grade_manager/create";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "saveEdited",
            value: function saveEdited(obj) {
              var url = this.baseUrl + "/api/v1/grade_manager/update";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "deleteRow",
            value: function deleteRow(obj) {
              var url = this.baseUrl + "/api/v1/grade_manager/delete/" + this.institute_id + "/" + obj.grade_id;
              return this.http["delete"](url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }]);

          return ExamGradeServiceService;
        }();

        ExamGradeServiceService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        ExamGradeServiceService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], ExamGradeServiceService);
        return ExamGradeServiceService;
      }();
      /***/

    },

    /***/
    "./src/app/services/institute-setting-service/institute-setting.service.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/services/institute-setting-service/institute-setting.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: InstituteSettingService */

    /***/
    function srcAppServicesInstituteSettingServiceInstituteSettingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstituteSettingService", function () {
        return InstituteSettingService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authenticator.service */
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

      var InstituteSettingService =
      /** @class */
      function () {
        var InstituteSettingService = /*#__PURE__*/function () {
          function InstituteSettingService(http, auth) {
            var _this8 = this;

            _classCallCheck(this, InstituteSettingService);

            this.http = http;
            this.auth = auth;
            this.baseURL = "";
            this.auth.currentAuthKey.subscribe(function (key) {
              _this8.Authorization = key;
              _this8.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this8.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this8.institute_id = id;
            });
            this.baseURL = this.auth.getBaseUrl();
          }

          _createClass(InstituteSettingService, [{
            key: "successCallback",
            value: function successCallback(res) {
              return res;
            }
          }, {
            key: "errorCallBack",
            value: function errorCallBack(error) {
              return error;
            }
          }, {
            key: "getInstituteSettingFromServer",
            value: function getInstituteSettingFromServer() {
              var url = this.baseURL + "/api/v1/institute/settings/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "saveSettingsToServer",
            value: function saveSettingsToServer(data) {
              data.institute_id = this.institute_id;
              var url = this.baseURL + "/api/v1/institute/settings/";
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "savePartialData",
            value: function savePartialData(data) {
              // data.institute_id = sessionStorage.getItem('institute_id');
              var url = this.baseURL + "/api/v1/institute/settings";
              return this.http.patch(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getIPAddress",
            value: function getIPAddress() {
              return this.http.get('https://api.ipify.org/?format=json');
            }
          }]);

          return InstituteSettingService;
        }();

        InstituteSettingService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        InstituteSettingService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], InstituteSettingService);
        return InstituteSettingService;
      }();

      ;
      /***/
    },

    /***/
    "./src/app/services/report-services/exam.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/services/report-services/exam.service.ts ***!
      \**********************************************************/

    /*! exports provided: ExamService */

    /***/
    function srcAppServicesReportServicesExamServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamService", function () {
        return ExamService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

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

      var ExamService =
      /** @class */
      function () {
        var ExamService = /*#__PURE__*/function () {
          /* set default value for each url, header and autherization on service creation */
          function ExamService(http, auth) {
            var _this9 = this;

            _classCallCheck(this, ExamService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.isProfessional = false;
            this.auth.currentAuthKey.subscribe(function (key) {
              _this9.Authorization = key;
              _this9.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this9.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this9.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
            this.auth.institute_type.subscribe(function (res) {
              if (res == 'LANG') {
                _this9.isProfessional = true;
              } else {
                _this9.isProfessional = false;
              }
            });
          }

          _createClass(ExamService, [{
            key: "ExamReport",
            value: function ExamReport() {
              var url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "batchExamReport",
            value: function batchExamReport(obj) {
              var url = this.baseUrl + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id + "&assigned=N";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getCourses",
            value: function getCourses(obj) {
              var url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + obj;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getSubject",
            value: function getSubject(obj) {
              var url = this.baseUrl + "/api/v1/courseMaster/fetch/courses/" + this.institute_id + "/" + obj;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getExamSchedule",
            value: function getExamSchedule(obj) {
              var url = this.baseUrl + "/api/v1/batchExamSched/" + obj;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "viewExamData",
            value: function viewExamData(obj) {
              var url = this.baseUrl + "/api/v1/reports/StdExam";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "viewDetailData",
            value: function viewDetailData(obj) {
              var url = this.baseUrl + "/api/v1/reports/StdExam/" + obj;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } //   New Exam Report APIs

          }, {
            key: "getAllExamReport",
            value: function getAllExamReport(obj) {
              console.log("obj", obj);
              var url;

              if (obj.from_date == null || obj.from_date == "") {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/" + this.institute_id + "?master_course_name=" + obj.master_course_name + "&standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id + "&from_date=" + obj.from_date + "&to_date=" + obj.to_date;
              } else {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/" + this.institute_id + "?master_course_name=" + obj.master_course_name + "&standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id + "&from_date=" + moment__WEBPACK_IMPORTED_MODULE_4__(obj.from_date).format("YYYY-MM-DD") + "&to_date=" + moment__WEBPACK_IMPORTED_MODULE_4__(obj.to_date).format("YYYY-MM-DD");
              } // let url = this.baseUrl + "/api/v1/reports/StdExam/examReport/" + this.institute_id + "?from_date="+obj.from_date+"&to_date="+obj.to_date


              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getCourseWiseReport",
            value: function getCourseWiseReport(course_id) {
              var url = "";

              if (!this.isProfessional) {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/courseWise/" + this.institute_id + "?course_id=" + course_id;
              } else {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/courseWise/" + this.institute_id + "?batch_id=" + course_id;
              }

              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getExamWiseReport",
            value: function getExamWiseReport(exam_schd_id, examSchdlType) {
              var url = "";

              if (!this.isProfessional) {
                if (examSchdlType) {
                  url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for course model
                } else {
                  url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/" + this.institute_id + "?course_exam_schedule_id=" + exam_schd_id; // for course model
                }
              } else {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for batch model
              }

              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getSubjectWiseReport",
            value: function getSubjectWiseReport(subject_id) {
              var url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/performance/" + this.institute_id + "?subject_id=" + subject_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "downloadExamReport",
            value: function downloadExamReport(exam_schd_id, examSchdlType) {
              var url = "";

              if (!this.isProfessional) {
                if (examSchdlType) {
                  url = this.baseUrl + "/api/v1/reports/StdExam/downloadExamReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for course model
                } else {
                  url = this.baseUrl + "/api/v1/reports/StdExam/downloadExamReport/examWise/" + this.institute_id + "?course_exam_schedule_id=" + exam_schd_id; // for course model
                }
              } else {
                url = this.baseUrl + "/api/v1/reports/StdExam/downloadExamReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for course model
              }

              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }]);

          return ExamService;
        }();

        ExamService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        ExamService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], ExamService);
        return ExamService;
      }();
      /***/

    },

    /***/
    "./src/app/services/report-services/get-sms.service.ts":
    /*!*************************************************************!*\
      !*** ./src/app/services/report-services/get-sms.service.ts ***!
      \*************************************************************/

    /*! exports provided: getSMSService */

    /***/
    function srcAppServicesReportServicesGetSmsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSMSService", function () {
        return getSMSService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/Rx */
      "./node_modules/rxjs/Rx.js");
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../authenticator.service */
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

      var getSMSService =
      /** @class */
      function () {
        var getSMSService = /*#__PURE__*/function () {
          /* set default value for each url, header and autherization on service creation */
          function getSMSService(http, auth) {
            var _this10 = this;

            _classCallCheck(this, getSMSService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(function (key) {
              _this10.Authorization = key;
              _this10.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this10.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this10.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
          }

          _createClass(getSMSService, [{
            key: "getCamapignView",
            value: function getCamapignView(campaignID) {
              ///StdMgmtWebAPI/api/v1/campaign/fetch/<Institute Id>/<campaign msg id>
              var campignViewURL = this.baseUrl + '/api/v1/campaign/fetch/' + this.institute_id + '/' + campaignID;
              return this.http.get(campignViewURL, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } // delete campign

          }, {
            key: "deleteCampaign",
            value: function deleteCampaign(campaignID) {
              var deleteURL = this.baseUrl + '/api/v1/campaign/delete/campaign/' + this.institute_id + '/' + campaignID;
              return this.http["delete"](deleteURL, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchCampainSMSReport",
            value: function fetchCampainSMSReport() {
              var urlCampaign = this.baseUrl + '/api/v1/campaign/fetch/' + this.institute_id;
              return this.http.post(urlCampaign, {}, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchSmsReport",
            value: function fetchSmsReport(obj) {
              console.log("Object", obj);
              var tempObj = {
                batch_size: "-1",
                from_date: obj.from_date == '' ? moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD') : moment__WEBPACK_IMPORTED_MODULE_3__(obj.from_date).format('YYYY-MM-DD'),
                institution_id: obj.institution_id,
                order_by: "",
                sorted_by: "",
                start_index: "-1",
                to_date: obj.to_date == '' ? '' : moment__WEBPACK_IMPORTED_MODULE_3__(obj.to_date).format('YYYY-MM-DD')
              }; // obj.from_date = obj.from_date == '' ? moment().format('YYYY-MM-DD') : moment(obj.from_date).format('YYYY-MM-DD');
              // obj.to_date = obj.to_date == '' ? '' : moment(obj.to_date).format('YYYY-MM-DD');

              var urlSmsReport = this.baseUrl + "/api/v1/alerts/config/smsReport";
              return this.http.post(urlSmsReport, tempObj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }]);

          return getSMSService;
        }();

        getSMSService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]
          }];
        };

        getSMSService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]])], getSMSService);
        return getSMSService;
      }();
      /***/

    },

    /***/
    "./src/app/services/teacherService/teacherApi.service.ts":
    /*!***************************************************************!*\
      !*** ./src/app/services/teacherService/teacherApi.service.ts ***!
      \***************************************************************/

    /*! exports provided: TeacherAPIService */

    /***/
    function srcAppServicesTeacherServiceTeacherApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherAPIService", function () {
        return TeacherAPIService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authenticator.service */
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

      var TeacherAPIService =
      /** @class */
      function () {
        var TeacherAPIService = /*#__PURE__*/function () {
          function TeacherAPIService(http, auth) {
            var _this11 = this;

            _classCallCheck(this, TeacherAPIService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(function (key) {
              _this11.Authorization = key;
              _this11.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this11.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this11.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
          } // List Section Of Teacher


          _createClass(TeacherAPIService, [{
            key: "getAllTeacherList",
            value: function getAllTeacherList() {
              var url = this.baseUrl + "/api/v1/teachers/all/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "deleteTeacher",
            value: function deleteTeacher(id) {
              var url = this.baseUrl + "/api/v1/teachers/" + id;
              return this.http["delete"](url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } // Add Section Of Teacher

          }, {
            key: "addNewTeacherDetails",
            value: function addNewTeacherDetails(data) {
              var url = this.baseUrl + '/api/v1/teachers';
              data.institution_id = this.institute_id;
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            } // Edit Section Of Teacher

          }, {
            key: "getSelectedTeacherInfo",
            value: function getSelectedTeacherInfo(data) {
              var url = this.baseUrl + '/api/v1/teachers/' + data;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "saveEditTeacherInformation",
            value: function saveEditTeacherInformation(teacher_id, data) {
              var url = this.baseUrl + '/api/v1/teachers/' + teacher_id;
              data.institution_id = this.institute_id;
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "downloadDocument",
            value: function downloadDocument(teacher_id) {
              var url = this.baseUrl + '/api/v1/teachers/getIDCard/' + teacher_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            } // View Section Api

          }, {
            key: "getViewInfoOfTeacher",
            value: function getViewInfoOfTeacher(teacher_id) {
              var url = this.baseUrl + '/api/v1/teachers/' + teacher_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getTeacherViewBatchesInfo",
            value: function getTeacherViewBatchesInfo() {
              var url = this.baseUrl + '/api/v1/batches/all/' + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "customizedTeacherSearchOnDashBoardView",
            value: function customizedTeacherSearchOnDashBoardView(data, teacher_id) {
              var url1 = this.http.post(this.baseUrl + '/api/v1/teachers/' + teacher_id + '/dashboard', data, {
                headers: this.headers
              });
              return url1.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "customizedTeacherSearchOnGuestBatchView",
            value: function customizedTeacherSearchOnGuestBatchView(data, teacher_id) {
              var url1 = this.http.post(this.baseUrl + '/api/v1/teachers/' + teacher_id + '/guestBatches/classes', data, {
                headers: this.headers
              });
              return url1.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "viewBatchDetails",
            value: function viewBatchDetails(data, teacher_id) {
              var url1 = this.http.post(this.baseUrl + '/api/v1/teachers/' + teacher_id + '/batch/classes', data, {
                headers: this.headers
              });
              return url1.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }]);

          return TeacherAPIService;
        }();

        TeacherAPIService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        TeacherAPIService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], TeacherAPIService);
        return TeacherAPIService;
      }();
      /***/

    },

    /***/
    "./src/app/services/user-management/role.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/services/user-management/role.service.ts ***!
      \**********************************************************/

    /*! exports provided: RoleService */

    /***/
    function srcAppServicesUserManagementRoleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleService", function () {
        return RoleService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authenticator.service */
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

      var RoleService =
      /** @class */
      function () {
        var RoleService = /*#__PURE__*/function () {
          function RoleService(http, auth) {
            var _this12 = this;

            _classCallCheck(this, RoleService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(function (key) {
              _this12.Authorization = key;
              _this12.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this12.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this12.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
          }

          _createClass(RoleService, [{
            key: "getRoles",
            value: function getRoles() {
              var url = this.baseUrl + "/api/v1/roleApi/allRoles/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAssignedUserList",
            value: function getAssignedUserList(id) {
              var url = this.baseUrl + "/api/v1/roleApi/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "deleteRole",
            value: function deleteRole(id) {
              var url = this.baseUrl + "/api/v1/roleApi/" + id;
              return this.http["delete"](url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } // Add Edit 

          }, {
            key: "getAllFeature",
            value: function getAllFeature() {
              var url = this.baseUrl + "/api/v1/roleApi/allFeatures?categoryWise=true";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getPerticularRoles",
            value: function getPerticularRoles(id) {
              var url = this.baseUrl + "/api/v1/roleApi/role/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "createRole",
            value: function createRole(obj) {
              var url = this.baseUrl + "/api/v1/roleApi/addRole";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "updateRole",
            value: function updateRole(obj, id) {
              var url = this.baseUrl + "/api/v1/roleApi/editRole/" + id;
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }]);

          return RoleService;
        }();

        RoleService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        RoleService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], RoleService);
        return RoleService;
      }();
      /***/

    },

    /***/
    "./src/app/services/user-management/user.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/services/user-management/user.service.ts ***!
      \**********************************************************/

    /*! exports provided: UserService */

    /***/
    function srcAppServicesUserManagementUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authenticator.service */
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

      var UserService =
      /** @class */
      function () {
        var UserService = /*#__PURE__*/function () {
          function UserService(http, auth) {
            var _this13 = this;

            _classCallCheck(this, UserService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(function (key) {
              _this13.Authorization = key;
              _this13.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this13.Authorization
              });
            }); // this.auth.currentInstituteId.subscribe(id => {

            this.institute_id = sessionStorage.getItem('institute_id'); // });

            this.baseUrl = this.auth.getBaseUrl();
          }

          _createClass(UserService, [{
            key: "getUserList",
            value: function getUserList(obj, active) {
              var url = this.baseUrl + "/api/v1/profiles/all/" + this.institute_id + "?active=" + active;
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getRoles",
            value: function getRoles() {
              var url = this.baseUrl + "/api/v1/roleApi/allRoles/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchUserDetails",
            value: function fetchUserDetails(id) {
              var url = this.baseUrl + "/api/v1/profiles/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "sendSmS",
            value: function sendSmS(obj) {
              var url = this.baseUrl + "/api/v1/profiles/sendAPPSMS/" + this.institute_id;
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getItemList",
            value: function getItemList(id) {
              var url = this.baseUrl + "/api/v1/inventory/item/fetchForUserAllocation/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllotedHistroy",
            value: function getAllotedHistroy(id) {
              var url = this.baseUrl + "/api/v1/inventory/item/user/txHistory/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "allocateItem",
            value: function allocateItem(obj) {
              obj.institution_id = this.institute_id;
              var url = this.baseUrl + "/api/v1/inventory/item/user/allocate";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "deleteInventory",
            value: function deleteInventory(id) {
              var url = this.baseUrl + "/api/v1/inventory/item/txHistory/" + id;
              return this.http["delete"](url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "createUser",
            value: function createUser(obj) {
              obj.institute_id = this.institute_id;
              var url = this.baseUrl + "/api/v1/profiles";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "updateUserDetails",
            value: function updateUserDetails(obj, id) {
              obj.institute_id = this.institute_id;
              var url = this.baseUrl + "/api/v1/profiles/" + id;
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }]);

          return UserService;
        }();

        UserService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        UserService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], UserService);
        return UserService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map