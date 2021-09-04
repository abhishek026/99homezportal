(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-communicate-communicate-module~app-components-course-module-course-module-mod~5bd5763d"], {
    /***/
    "./src/app/services/widget.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/widget.service.ts ***!
      \********************************************/

    /*! exports provided: WidgetService */

    /***/
    function srcAppServicesWidgetServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetService", function () {
        return WidgetService;
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
      /*! ./authenticator.service */
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

      var WidgetService =
      /** @class */
      function () {
        var WidgetService = /*#__PURE__*/function () {
          function WidgetService(http, auth) {
            var _this = this;

            _classCallCheck(this, WidgetService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(function (key) {
              _this.Authorization = key;
              _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this.institute_id = id;
            }); // this.institute_id = this.auth.getInstituteId();
            // this.Authorization = this.auth.getAuthToken();

            this.baseUrl = this.auth.getBaseUrl();
          }

          _createClass(WidgetService, [{
            key: "fetchSchedWidgetData",
            value: function fetchSchedWidgetData(obj) {
              var url = this.baseUrl + "/api/v1/dashboard/admin//todayClassSchedule/" + this.institute_id;
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchFeeWidgetData",
            value: function fetchFeeWidgetData(obj) {
              obj.institute_id = this.institute_id;
              var url = this.baseUrl + "/api/v1/studentWise/fee/feesStats/" + this.institute_id;
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getSettings",
            value: function getSettings() {
              var url = this.baseUrl + "/api/v1/institute/settings/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getInstituteSettings",
            value: function getInstituteSettings() {
              var url = this.baseUrl + "/api/v1/institutes/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllplan",
            value: function getAllplan() {
              var url = this.baseUrl + "/api/v1/proctur/getAllPlans";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllocatedStorageDetails",
            value: function getAllocatedStorageDetails() {
              var url = this.baseUrl + "/api/v1/instFileSystem/getUsedSpace/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAttendance",
            value: function getAttendance(obj) {
              var url = this.baseUrl + "/api/v1/attendance";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllteachers",
            value: function getAllteachers() {
              var url = this.baseUrl + "/api/v1/teachers/all/" + this.institute_id + "?active=Y";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "updateAttendance",
            value: function updateAttendance(obj) {
              var url = this.baseUrl + "/api/v1/attendance";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "cancelClassSchedule",
            value: function cancelClassSchedule(obj) {
              var url = this.baseUrl + "/api/v1/batchClsSched/cancel";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "cancelCourseSchedule",
            value: function cancelCourseSchedule(obj) {
              obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
              var url = this.baseUrl + "/api/v1/courseClassSchedule/cancelMasterClassSchedule";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "cancelBatchSchedule",
            value: function cancelBatchSchedule(obj) {
              var url = this.baseUrl + "/api/v1/batchClsSched/cancel";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "notifyStudentSchedule",
            value: function notifyStudentSchedule(obj) {
              var url = this.baseUrl + "/api/v1/coursePlanner/notify";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "reScheduleClass",
            value: function reScheduleClass(obj) {
              var url = this.baseUrl + "/api/v1/batchClsSched/reschedule";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchCourseLevelWidgetData",
            value: function fetchCourseLevelWidgetData(obj) {
              obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
              var url = this.baseUrl + '/api/v1/courseClassSchedule/fetchMasterCourseDetails/todaySchedule';
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchCourseAttendance",
            value: function fetchCourseAttendance(obj) {
              var url = this.baseUrl + '/api/v1/attendance/course';
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "updateCourseAttendance",
            value: function updateCourseAttendance(obj) {
              var url = this.baseUrl + "/api/v1/attendance/course";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "remindCourseLevel",
            value: function remindCourseLevel(obj) {
              obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
              var url = this.baseUrl + "/api/v1/courseClassSchedule/sendCourseMasterReminder";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getListOfTopics",
            value: function getListOfTopics(batchId) {
              var url = this.baseUrl + "/api/v1/topic_manager/getAllTopics/" + this.institute_id;
              return this.http.post(url, batchId, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchCombinedData",
            value: function fetchCombinedData(standard_id, subject_id) {
              var url = this.baseUrl + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + standard_id + "&subject_id=" + subject_id + "&assigned=Y";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchStudentListData",
            value: function fetchStudentListData(batch_id) {
              var url = this.baseUrl + "/api/v1//studentBatchMap/batches/" + batch_id;
              return this.http.post(url, "", {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "saveMessageTOServer",
            value: function saveMessageTOServer(obj) {
              var url = this.baseUrl + "/api/v1/notification/message/" + this.institute_id;
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllActiveStudentList",
            value: function getAllActiveStudentList() {
              var url = this.baseUrl + "/api/v1/students/all/" + this.institute_id + "?active=Y";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllTeacherList",
            value: function getAllTeacherList() {
              var url = this.baseUrl + "/api/v1/teachers/all/" + this.institute_id + "?active=Y";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllInActiveList",
            value: function getAllInActiveList() {
              var url = this.baseUrl + "/api/v1/students/all/" + this.institute_id + "?active=NA";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllAluminiList",
            value: function getAllAluminiList() {
              var url = this.baseUrl + "/api/v1/archive/students/alumni/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getMessageList",
            value: function getMessageList(obj) {
              var url = this.baseUrl + "/api/v1/notification/message/" + this.institute_id + "/all";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "sendNotification",
            value: function sendNotification(obj) {
              obj.institution_id = this.institute_id;
              var url = this.baseUrl + "/api/v1/alerts/config";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "sendPushNotificationToServer",
            value: function sendPushNotificationToServer(obj) {
              obj.institution_id = this.institute_id;
              var url = this.baseUrl + "/api/v1/pushNotification/send";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "smsForAddDownload",
            value: function smsForAddDownload(obj) {
              var url = this.baseUrl + "/api/v1/profiles/sendAPPSMS/" + this.institute_id;
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } ///Course Model Api

          }, {
            key: "getAllMasterCourse",
            value: function getAllMasterCourse() {
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
            key: "getAllCourse",
            value: function getAllCourse(name) {
              var url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + name;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getStudentListOfCourse",
            value: function getStudentListOfCourse(obje) {
              var url = this.baseUrl + "/api/v1/studentBatchMap/manageBatchStudent/" + this.institute_id;
              return this.http.post(url, obje, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getMasterCourseDetails",
            value: function getMasterCourseDetails(obj) {
              obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
              obj.inst_id = this.institute_id;
              var url = this.baseUrl + "/api/v1/courseClassSchedule/fetch";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } /// Exam Section
            //get Exam Schedule 

          }, {
            key: "getExamSchedule",
            value: function getExamSchedule(obj) {
              var url = this.baseUrl + "/api/v1/dashboard/admin/studentExamSchedules/" + this.institute_id;
              return this.http.post(url, obj, {
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
              var url = this.baseUrl + "/api/v1/batchExamSched/cancel";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "notifyStudentExam",
            value: function notifyStudentExam(id) {
              var url = this.baseUrl + "/api/v1/batchExamSched/notify/" + this.institute_id + "/" + id;
              return this.http.get(url, {
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
              obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
              var url = this.baseUrl + "/api/v1/courseExamSchedule/sendReminder";
              return this.http.post(url, obj, {
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
              var url = this.baseUrl + "/api/v1/attendance/exam";
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
              var url = this.baseUrl + "/api/v1/attendance/exam";
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchStudentExamDetails",
            value: function fetchStudentExamDetails(batch_id, Schedule) {
              var url = this.baseUrl + "/api/v1/StdExam/" + batch_id + '?schd_id=' + Schedule;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "updateAttendanceDetails",
            value: function updateAttendanceDetails(obj) {
              var url = this.baseUrl + "/api/v1/StdExam";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getExamGrades",
            value: function getExamGrades() {
              var url = this.baseUrl + "/api/v1/grade_manager/getDetail/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } //Course Model API

          }, {
            key: "getCourseExamFromServer",
            value: function getCourseExamFromServer(obj) {
              obj.start_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.start_date).format('YYYY-MM-DD');
              obj.end_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.end_date).format('YYYY-MM-DD');
              obj.inst_id = this.institute_id;
              var url = this.baseUrl + "/api/v1/courseExamSchedule/fetchExamSchld";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "markStudentAttendance",
            value: function markStudentAttendance(obj) {
              var url = this.baseUrl + "/api/v1/StdCourseExam/markAttendance";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "markStudentMarks",
            value: function markStudentMarks(obj) {
              var url = this.baseUrl + '/api/v1/StdCourseExam/updateMarks';
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getExamStudentsList",
            value: function getExamStudentsList(id) {
              var url = this.baseUrl + "/api/v1/StdCourseExam/" + id;
              return this.http.get(url, {
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
              obj.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.requested_date).format("YYYY-MM-DD");
              obj.inst_id = this.institute_id;
              var url = this.baseUrl + "/api/v1/courseExamSchedule/cancel";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } // SMS Approve/Reject

          }, {
            key: "changesSMSStatus",
            value: function changesSMSStatus(obj, id) {
              var url = this.baseUrl + "/api/v1/notification/message/" + this.institute_id + "/" + id;
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }]);

          return WidgetService;
        }();

        WidgetService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        WidgetService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], WidgetService);
        return WidgetService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~app-components-communicate-communicate-module~app-components-course-module-course-module-mod~5bd5763d-es5.js.map