(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~77e6f154"], {
    /***/
    "./src/app/services/course-services/class-schedule.service.ts":
    /*!********************************************************************!*\
      !*** ./src/app/services/course-services/class-schedule.service.ts ***!
      \********************************************************************/

    /*! exports provided: ClassScheduleService */

    /***/
    function srcAppServicesCourseServicesClassScheduleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassScheduleService", function () {
        return ClassScheduleService;
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

      var ClassScheduleService =
      /** @class */
      function () {
        var ClassScheduleService = /*#__PURE__*/function () {
          function ClassScheduleService(http, auth) {
            var _this = this;

            _classCallCheck(this, ClassScheduleService);

            this.http = http;
            this.auth = auth;
            this.baseURL = "";
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
            this.baseURL = this.auth.getBaseUrl();
          }

          _createClass(ClassScheduleService, [{
            key: "getAllSubBranches",
            value: function getAllSubBranches() {
              var url = this.baseURL + "/api/v1/institutes/all/subBranches/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getAllMasterCourse",
            value: function getAllMasterCourse() {
              var url = this.baseURL + "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getAllTeachers",
            value: function getAllTeachers() {
              var url = this.baseURL + "/api/v1/teachers/all/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getInstituteSettings",
            value: function getInstituteSettings() {
              var url = this.baseURL + "/api/v1/institute/settings/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getCourseFromMasterById",
            value: function getCourseFromMasterById(id) {
              var url = this.baseURL + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getStandardSubjectList",
            value: function getStandardSubjectList(stdId, subId, isAssigned) {
              var url = this.baseURL + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + stdId + "&subject_id=" + subId + "&assigned=" + isAssigned;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getBatchDetailsById",
            value: function getBatchDetailsById(id) {
              var url = this.baseURL + "/api/v1/batchClsSched/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getClassFrequencyAll",
            value: function getClassFrequencyAll() {
              var url = this.baseURL + "/api/v1/masterData/type/CLASS_FREQ";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getDayofWeekAll",
            value: function getDayofWeekAll() {
              var url = this.baseURL + "/api/v1/masterData/type/DAY_OF_WEEK";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getTimeTable",
            value: function getTimeTable(obj) {
              obj.institute_id = this.institute_id;
              var url = this.baseURL + "/api/v1/timeTable";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "successCallback",
            value: function successCallback(res) {
              return res;
            }
          }, {
            key: "errorCallBack",
            value: function errorCallBack(err) {
              return err;
            }
          }, {
            key: "getAllSubjectlist",
            value: function getAllSubjectlist(data) {
              data.inst_id = this.institute_id;
              data.requested_date = moment__WEBPACK_IMPORTED_MODULE_4__(data.requested_date).format('YYYY-MM-DD');
              var url = this.baseURL + "/api/v1/courseClassSchedule/fetch";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getCustomClassListFromServer",
            value: function getCustomClassListFromServer() {
              var url = this.baseURL + "/api/v1/courseClassSchedule/getCustomClassesList";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getAllActiveTeachersList",
            value: function getAllActiveTeachersList() {
              // let url = this.baseURL + "/api/v1/teachers/all/" + this.institute_id + '?active=Y';
              var url = this.baseURL + "/api/v1/teachers/teacher-list/" + this.institute_id + '?active=Y';
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "sendReminderToServer",
            value: function sendReminderToServer(data) {
              data.inst_id = this.institute_id;
              var url = this.baseURL + "/api/v1/courseClassSchedule/sendReminder";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "sendReminderToServerSubject",
            value: function sendReminderToServerSubject(data) {
              var url = this.baseURL + "/api/v1/coursePlanner/notify";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "remindCourseLevel",
            value: function remindCourseLevel(obj) {
              var url = this.baseURL + "/api/v1/courseClassSchedule/sendCourseMasterReminder";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "saveDataOnServer",
            value: function saveDataOnServer(data) {
              data.inst_id = this.institute_id;
              var url = this.baseURL + "/api/v1/courseClassSchedule/update";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "selectedDateScheduleToServer",
            value: function selectedDateScheduleToServer(data) {
              var url = this.baseURL + "/api/v1/courseClassSchedule/copyCourseSchedule";
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "saveCustomRecurrenceToServer",
            value: function saveCustomRecurrenceToServer(data) {
              var url = this.baseURL + "/api/v1/courseClassSchedule/updateWeeklySubjectSchedule";
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "cancelClassSchedule",
            value: function cancelClassSchedule(data) {
              var url = this.baseURL + "/api/v1/batchClsSched/cancel";
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            } //////////////////////////////////////////////////////////////////////////////
            ///////////////Batch Model////////////////////////////////////////////

          }, {
            key: "getWeekOfDays",
            value: function getWeekOfDays() {
              var url = this.baseURL + "/api/v1/masterData/type/DAY_OF_WEEK";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "notifyCancelledClassSchedule",
            value: function notifyCancelledClassSchedule(data) {
              var url = this.baseURL + "/api/v1/coursePlanner/notify";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "createWeeklyBatchPost",
            value: function createWeeklyBatchPost(data) {
              var url = this.baseURL + "/api/v1/batchClsSched";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "createCustomBatchPUT",
            value: function createCustomBatchPUT(data) {
              var url = this.baseURL + "/api/v1/batchClsSched";
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "sendNotification",
            value: function sendNotification(schID, type) {
              var url = this.baseURL + "/api/v1/batchClsSched/notify/" + this.institute_id + "/" + schID + "/" + type;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            } ////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////Home Class///////////////////////////////////////////////

          }, {
            key: "getSubjectList",
            value: function getSubjectList(data) {
              var url = this.baseURL + "/api/v1/courseMaster/fetch/courses/" + this.institute_id + '/' + data;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getAllTeachersList",
            value: function getAllTeachersList() {
              // let url = this.baseURL + "/api/v1/teachers/all/" + this.institute_id + '?active=Y';
              var url = this.baseURL + "/api/v1/teachers/teacher-list/" + this.institute_id + '?active=Y';
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getAllTeachersListOld",
            value: function getAllTeachersListOld() {
              var url = this.baseURL + "/api/v1/teachers/all/" + this.institute_id + '?active=Y';
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "reScheduleClass",
            value: function reScheduleClass(obj) {
              var url = this.baseURL + "/api/v1/batchClsSched/reschedule";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getCombinedDataFromServer",
            value: function getCombinedDataFromServer(standard_id, subject_id) {
              var url = this.baseURL + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + standard_id + "&subject_id=" + subject_id + "&assigned=N";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "cancelCourseSchedule",
            value: function cancelCourseSchedule(obj) {
              var url = this.baseURL + "/api/v1/courseClassSchedule/cancelMasterClassSchedule";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } ///// Change Teacher

          }, {
            key: "changeClassTeacher",
            value: function changeClassTeacher(obj) {
              var url = this.baseURL + "/api/v1/coursePlanner";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "deleteMultiple",
            value: function deleteMultiple(obj) {
              obj.instituteId = this.institute_id;
              var url = this.baseURL + "/api/v1/timeTable/deleteSchld";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getWeeklySchedule",
            value: function getWeeklySchedule(id) {
              var url = "".concat(this.baseURL, "/api/v1/courseClassSchedule/getWeeklySubjectSchedule/").concat(id);
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } // Course Planner services

          }, {
            key: "getCoursePlannerData",
            value: function getCoursePlannerData(obj, section) {
              obj.institute_id = this.institute_id;
              obj.from_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.from_date).format("YYYY-MM-DD");
              obj.to_date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.to_date).format("YYYY-MM-DD");
              var url = this.baseURL + "/api/v1/coursePlanner/category?type=" + section;
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "notifyCancelClass",
            value: function notifyCancelClass(obj, section) {
              var url = this.baseURL + "/api/v1/coursePlanner/notifyCancelClassOrExam/?type=" + section;
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }]);

          return ClassScheduleService;
        }();

        ClassScheduleService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        ClassScheduleService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], ClassScheduleService);
        return ClassScheduleService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~77e6f154-es5.js.map