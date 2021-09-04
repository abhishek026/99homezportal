(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routine-routine-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/routine/add-edit/add-edit.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/routine/add-edit/add-edit.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid product-wrapper p-0\" style=\"padding-top: 2px;padding: 1%;\">\n    <form id=\"form1\" #createRoutinForm=\"ngForm\" autocomplete=\"off\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"row\">\n                <div class=\"col-md-12 form-group edit-item field-wrapper\" [class.has-error]=\"standard_id.invalid && standard_id.touched\">\n                    <label class=\"text-bold\"> Standard<span class=\"danger\">*</span>\n                    </label>\n                    <select id=\"master_course\" class=\"form-ctrl\" [disabled]=\"isEdit\" [(ngModel)]=\"editrecord.standard_id\"\n                        (ngModelChange)=\"getCourseList($event)\" name=\"standard_id\" required #standard_id=\"ngModel\">\n                        <option value=\"\">Standard*</option>\n                        <option [value]=\"masterCourse.standard_id\" title=\"{{masterCourse.standard_name}}\"\n                            *ngFor=\"let masterCourse of masterCourse\">\n                            {{ (masterCourse.standard_name?.length > 30) ? (masterCourse.standard_name | slice:0:30) +\n                            '...' : masterCourse.standard_name }}\n                        </option>\n                    </select>\n                    <p class=\"errormsg\"><span  class=\"help-block\" *ngIf=\"(!standard_id.valid && standard_id.touched) || errorsObj.standard_id!=''\">\n                        {{errorsObj.standard_id!='' ? errorsObj.standard_id : 'Standard is mandatory'}}\n                    </span></p>\n                </div>\n                <div class=\"col-md-12 form-group edit-item field-wrapper\" [class.has-error]=\"course_id.invalid && course_id.touched\">\n                    <label class=\"text-bold\"> Section<span class=\"danger\">*</span>\n                    </label>\n                    <select class=\"form-ctrl\" name=\"\" [disabled]=\"isEdit\" [(ngModel)]=\"editrecord.course_id\"\n                        (ngModelChange)=\"updateSubjectList($event)\" name=\"course_id\" required #course_id=\"ngModel\">\n                        <option value=\"\">Section*</option>\n                        <option title=\"{{course.course_name}}\" [value]=\"course.course_id\"\n                            *ngFor=\"let course of courseList\">\n                            {{ (course.course_name?.length > 30) ? (course.course_name | slice:0:30) + '...' :\n                            course.course_name }}\n                        </option>\n                    </select>\n                    <p class=\"errormsg\"><span  class=\"help-block\" *ngIf=\"(!course_id.valid && course_id.touched) || errorsObj.course_id!=''\">\n                        {{errorsObj.course_id!='' ? errorsObj.course_id : 'Section is mandatory'}}\n                    </span></p>\n                </div>\n                <div class=\"col-md-12 form-group edit-item field-wrapper\" [class.has-error]=\"batch_id.invalid && batch_id.touched\">\n                    <label class=\"text-bold\"> Subject<span class=\"danger\">*</span>\n                    </label>\n                    <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"editrecord.batch_id\" name=\"batch_id\" required #batch_id=\"ngModel\">\n                        <option value=\"\">Subject*</option>\n                        <option title=\"{{subject.subject_name}}\" [value]=\"subject.batch_id\"\n                            *ngFor=\"let subject of subjectList\">\n                            {{ (subject.subject_name?.length > 30) ? (subject.subject_name | slice:0:30) + '...' :\n                            subject.subject_name }}\n                            <span *ngIf=\"subject.is_optional_subject\">(Optional)</span>\n                        </option>\n                    </select>\n                    <p class=\"errormsg\"><span  class=\"help-block\" *ngIf=\"(!batch_id.valid && batch_id.touched) || errorsObj.batch_id!=''\">\n                        {{errorsObj.batch_id!='' ? errorsObj.batch_id : 'Subject is mandatory'}}\n                    </span></p>\n                </div>\n\n                <div class=\"col-md-12 form-group edit-item field-wrapper\" [class.has-error]=\"day_of_week.invalid && day_of_week.touched\">\n                    <label class=\"text-bold\"> Day<span class=\"danger\">*</span>\n                    </label>\n                    <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"editrecord.day_of_week\" name=\"day_of_week\" required #day_of_week=\"ngModel\">\n                        <option value=\"\">Select Day*</option>\n                        <option title=\"{{day.data_value}}\" [value]=\"day.data_key\"\n                            *ngFor=\"let day of weekDaysListWithoutWeekend\">\n                            {{ (day.data_value?.length > 30) ? (day.data_value | slice:0:30) + '...' :\n                            day.data_value }}\n                        </option>\n                    </select>\n                    <p class=\"errormsg\"><span  class=\"help-block\" *ngIf=\"(!day_of_week.valid && day_of_week.touched) || errorsObj.day_of_week!=''\">\n                        {{errorsObj.day_of_week!='' ? errorsObj.day_of_week : 'Day is mandatory'}}\n                    </span></p>\n                </div>\n\n                <div class=\"col-md-12 form-group edit-item field-wrapper\" [class.has-error]=\"teacher_id.invalid && teacher_id.touched\">\n                    <label class=\"text-bold\"> Teacher<span class=\"danger\">*</span>\n                    </label>\n                    <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"editrecord.teacher_id\" name=\"teacher_id\" required #teacher_id=\"ngModel\">\n                        <option value=\"\">Select Teacher*</option>\n                        <option title=\"{{day.teacher_name}}\" [value]=\"day.teacher_id\"\n                            *ngFor=\"let day of teacherListDataSource\">\n                            {{ (day.teacher_name?.length > 30) ? (day.teacher_name | slice:0:30) + '...' :\n                            day.teacher_name }}\n                        </option>\n                    </select>\n                    <p class=\"errormsg\"><span  class=\"help-block\" *ngIf=\"(!teacher_id.valid && teacher_id.touched) || errorsObj.teacher_id!=''\">\n                        {{errorsObj.teacher_id!='' ? errorsObj.teacher_id : 'Teacher is mandatory'}}\n                    </span></p>\n                </div>\n\n                <div class=\"col-md-12 form-group edit-item field-wrapper\">\n                    <label class=\"text-bold\"> Starting Time<span class=\"danger\">*</span>\n                    </label>\n                    <select style=\"width: 17.5%;\" id=\"\" class=\"form-ctrl\" [(ngModel)]=\"mainStartTime.hour\" name=\"start_time\">\n                        <option [value]=\"time\" *ngFor=\"let time of times\">\n                            {{time}}\n                        </option>\n                    </select>\n                    <select style=\"width: 17.5%;\" id=\"\" class=\"form-ctrl\" [(ngModel)]=\"mainStartTime.minute\" name=\"start_minute\">\n                        <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                            {{minute}}\n                        </option>\n                    </select>\n                    <p class=\"errormsg\"><span  class=\"help-block\" *ngIf=\"errorsObj.start_time!=''\">\n                        {{errorsObj.start_time}}\n                    </span></p>\n                </div>\n\n                <div class=\"col-md-12 form-group edit-item field-wrapper\">\n                    <label class=\"text-bold\"> Ending Time<span class=\"danger\">*</span>\n                    </label>\n                    <select style=\"width: 17.5%;\" id=\"\" class=\"form-ctrl\" [(ngModel)]=\"mainEndTime.hour\" name=\"endtime\">\n                        <option [value]=\"time\" *ngFor=\"let time of times\">\n                            {{time}}\n                        </option>\n                    </select>\n                    <select style=\"width: 17.5%;\" id=\"\" class=\"form-ctrl\" [(ngModel)]=\"mainEndTime.minute\" name=\"end_minute\">\n                        <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                            {{minute}}\n                        </option>\n                    </select>\n                    <p class=\"errormsg\"><span  class=\"help-block\" *ngIf=\"errorsObj.end_time!=''\">\n                        {{errorsObj.end_time}}\n                    </span></p>\n                </div>\n\n                <div class=\"col-md-12 form-group edit-item field-wrapper\" [class.has-error]=\"class_room_id.invalid && class_room_id.touched\">\n                    <label class=\"text-bold\"> Room<span class=\"danger\">*</span>\n                    </label>\n                    <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"editrecord.class_room_id\" name=\"class_room_id\" required #class_room_id=\"ngModel\">\n                        <option value=\"\">Room *</option>\n                        <option *ngFor=\"let class of classRoomData\" title=\"{{class.class_room_name}}\" [value]=\"class.class_room_id\">\n                          {{ (class.class_room_name?.length > 30) ? (class.class_room_name | slice:0:30) + '...' :\n                          class.class_room_name }}\n                        </option>\n                      </select>\n                      <p class=\"errormsg\"><span  class=\"help-block\" *ngIf=\"(!class_room_id.valid && class_room_id.touched) || errorsObj.class_room_id!=''\">\n                        {{errorsObj.class_room_id!='' ? errorsObj.class_room_id : 'Room is mandatory'}}\n                    </span></p>\n                </div>\n\n                <div *ngIf=\"!isEdit\" class=\"col-md-12 form-group edit-item field-wrapper\" style=\"padding-left: 0;\">\n                    <input style=\"-webkit-appearance: checkbox;width: 4%;\" [disabled]=\"disabledFromDate\" type=\"checkbox\" class=\"form-ctrl\" [(ngModel)]=\"fromToday\" id=\"fromToday\" name=\"fromToday\">\n                    <label class=\"text-bold\" for=\"fromToday\"> Schedule From Today\n                    </label>\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n    </form>\n\n    <div class=\"go-btn-container\">\n        <button type=\"button\" name=\"button\" class=\"fullBlue add-class-btn\" (click)=\"backToHome()\">Cancel</button>\n        <button type=\"button\" name=\"button\" class=\"fullBlue gobtn\" (click)=\"saveRoutineData()\"\n            [disabled]=\"auth.isRippleLoad.getValue()\">Save</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/routine/list/list.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/routine/list/list.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"row\" style=\"margin: 0px;\">\n    <section class=\"filter-head\">\n      <div class=\"filter-header-container\">\n        <div class=\"filter-item-1\" style=\"justify-content: flex-end;\">\n          <div class=\"header-item\" style=\"margin-left: 10px;\">\n            <span>Standard <span class=\"danger\">*</span></span>\n            <select id=\"master_course\" class=\"form-ctrl\" [(ngModel)]=\"filterData.standard_id\"\n              (ngModelChange)=\"getCourseList($event)\" name=\"standard_id\">\n              <option value=\"\">Standard*</option>\n              <option [value]=\"masterCourse.standard_id\" title=\"{{masterCourse.standard_name}}\"\n                *ngFor=\"let masterCourse of masterCourse\">\n                {{ (masterCourse.standard_name?.length > 30) ? (masterCourse.standard_name | slice:0:30) +\n                '...' : masterCourse.standard_name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"header-item\" style=\"margin-left: 10px;\">\n            <span>Section<span class=\"danger\">*</span></span>\n            <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"filterData.course_id\" name=\"course_id\">\n              <option value=\"\">Section*</option>\n              <option title=\"{{course.course_name}}\" [value]=\"course.course_id\" *ngFor=\"let course of courseList\">\n                {{ (course.course_name?.length > 30) ? (course.course_name | slice:0:30) + '...' :\n                course.course_name }}\n              </option>\n            </select>\n          </div>\n          <button style=\"float: right;\" class=\"add_master_tag\" (click)=\"getData()\">Go</button>\n          <button style=\"float: right;\" class=\"add_master_tag\" routerLink=\"/view/course/create/routine/create\">Add\n            Routine</button>\n        </div>\n      </div>\n    </section>\n  </div>\n\n  <section>\n    <div class=\"day_and_date_container\" *ngIf=\"maxNoOfClasses != 0\">\n      <div class=\"days_header_container\">\n        <!-- <div class=\"day_header_item\">\n        <span>Days</span>\n      </div> -->\n        <div class=\"days_item\" [ngStyle]=\"{'width': width + '%'}\" [ngClass]=\"today == head.headerDate ?'active_date1':'inactive_date'\"\n          *ngFor=\"let head of routineData\">\n          <span>{{head.day}}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"class_scheduling_container\" *ngIf=\"maxNoOfClasses != 0\">\n      <div class=\"class_scheduling_item\" *ngFor=\"let i of maxClassArray\">\n        <div class=\"time_container\">\n          <!-- <div class=\"time_header_item\">\n          <span>Time</span>\n        </div> -->\n          <div class=\"time_item\" [ngStyle]=\"{'width': width + '%'}\" [ngClass]=\"today == temp.headerDate ?'active_date':'inactive_date'\"\n            *ngFor=\"let temp  of routineData; let p = index\">\n            <span *ngIf=\"temp.schedule_list[i]\">{{temp.schedule_list[i].start_time}} -\n              {{temp.schedule_list[i].end_time}}</span>\n            <span *ngIf=\"!temp.schedule_list[i]\">-</span>\n          </div>\n        </div>\n        <div class=\"subject_container\">\n          <!-- <div class=\"subject_header_item\">\n          <span>Subject</span>\n        </div> -->\n          <div class=\"subject_item\" [ngStyle]=\"{'width': width + '%'}\" [ngClass]=\"today == temp.headerDate ?'active_date':'inactive_date'\"\n            *ngFor=\"let temp  of routineData\">\n            <div>\n              <span\n                *ngIf=\"(temp.schedule_list[i] && temp.schedule_list[i].class_type !='EXTRA' && temp.schedule_list[i].class_type !='Exam' && temp.schedule_list[i].class_type != 'DOUBT' && temp.schedule_list[i].class_type !='REVISION')\"\n                class=\"dot_11\"></span>\n            </div>\n            <div>\n              <span\n                *ngIf=\"(temp.schedule_list[i] && temp.schedule_list[i] && temp.schedule_list[i].class_type =='DOUBT')\"\n                class=\"dot_22\"></span>\n            </div>\n            <div>\n              <span *ngIf=\"(temp.schedule_list[i] && temp.schedule_list[i].class_type =='EXTRA')\" class=\"dot_33\"></span>\n            </div>\n            <div>\n              <span *ngIf=\"(temp.schedule_list[i] && temp.schedule_list[i].class_type =='REVISION')\"\n                class=\"dot_44\"></span>\n            </div>\n            <div>\n              <span *ngIf=\"(temp.schedule_list[i] && temp.schedule_list[i].class_type =='Exam')\" class=\"dot_55\"></span>\n            </div>\n\n            <span style=\"width:90%;\" *ngIf=\"temp.schedule_list[i]\">{{temp.schedule_list[i].subject}}</span>\n            <span *ngIf=\"!temp.schedule_list[i]\">-</span>\n          </div>\n        </div>\n        <div class=\"master_course_container\">\n          <!-- <div class=\"course_header_item\">\n          <span>Standard </span>\n        </div> -->\n          <div class=\"course_item\" [ngStyle]=\"{'width': width + '%'}\" *ngFor=\"let temp  of routineData\">\n            <span *ngIf=\"temp.schedule_list[i]\">{{temp.schedule_list[i].master_course}}</span>\n            <span *ngIf=\"!temp.schedule_list[i]\">-</span>\n          </div>\n        </div>\n\n        <div class=\"master_course_container\">\n          <!-- <div class=\"course_header_item\">\n          <span>Section </span>\n        </div> -->\n          <div class=\"course_item\" [ngStyle]=\"{'width': width + '%'}\" *ngFor=\"let temp  of routineData\">\n            <span *ngIf=\"temp.schedule_list[i]\">{{temp.schedule_list[i].course_name}}</span>\n            <span *ngIf=\"!temp.schedule_list[i]\">-</span>\n          </div>\n        </div>\n\n        <div class=\"faculty_container\">\n          <!-- <div class=\"faculty_header_item\">\n          <span>Faculty</span>\n        </div> -->\n          <div class=\"faculty_item\" [ngStyle]=\"{'width': width + '%'}\" [ngClass]=\"today == temp.headerDate ?'active_date':'inactive_date'\"\n            *ngFor=\"let temp  of routineData\">\n            <span *ngIf=\"temp.schedule_list[i]\">{{temp.schedule_list[i].teacher_name}}</span>\n            <span *ngIf=\"!temp.schedule_list[i]\">-</span>\n          </div>\n        </div>\n\n        <div class=\"faculty_container\">\n          <!-- <div class=\"faculty_header_item\">\n          <span>Faculty</span>\n        </div> -->\n          <div class=\"faculty_item\" [ngStyle]=\"{'width': width + '%'}\" *ngFor=\"let temp  of routineData\">\n            <span *ngIf=\"temp.schedule_list[i]\" title=\"Edit\" class=\"actionDetails\" (click)=\"editClassSchedule(temp, temp.schedule_list[i])\"><i class=\"fa fa-edit\"></i></span>\n            <span *ngIf=\"temp.schedule_list[i]\" title=\"Delete\" class=\"actionDetails\" (click)=\"deleteClassSchedule(temp, temp.schedule_list[i])\"><i class=\"fa fa-trash\"></i></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"noSchedule\" *ngIf=\"maxNoOfClasses == 0 && !auth.isRippleLoad.getValue()\">No Schedule Available\n    </div>\n  </section>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/routine/routine.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/routine/routine.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/components/course-module/create-course/routine/add-edit/add-edit.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/routine/add-edit/add-edit.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-wrapper {\n  padding: 1%;\n  width: 100%;\n}\n\n.row {\n  margin: 0;\n  font-size: 12px;\n}\n\n.row label {\n  float: left;\n  min-width: 150px;\n}\n\n.row .form-control {\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n  display: block;\n  width: 50%;\n  box-sizing: border-box;\n  outline: none;\n  background: #fff;\n  font: 400 12px \"Open sans\", sans-serif;\n  box-shadow: none;\n  color: #000;\n  margin-left: 30px;\n}\n\n.row input[type=\"radio\"] {\n  -webkit-appearance: radio;\n     -moz-appearance: radio;\n          appearance: radio;\n  width: 1%;\n  float: left;\n}\n\n.row .dropdown-list {\n  max-height: 197px;\n  overflow-y: hidden;\n}\n\n.go-btn-container {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: auto;\n  margin-left: 20px;\n}\n\n.go-btn-container .gobtn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: #3a66fa;\n  color: #ffffff;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n  font-size: 14px;\n}\n\n.go-btn-container .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-size: 14px;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n  margin-right: 2%;\n}\n\n.edit-item {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n}\n\n.edit-item .edit-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-right: 10px;\n  width: 30%;\n  color: gray;\n}\n\n.edit-item input {\n  border: 1px solid #ccc;\n  width: 70%;\n}\n\n.form-ctrl {\n  width: 35%;\n}\n\n.errormsg {\n  margin-bottom: 0;\n  margin-left: 10px;\n}\n\nselect:disabled {\n  cursor: no-drop;\n}\n\n.help-block {\n  color: #a94442;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2Uvcm91dGluZS9hZGQtZWRpdC9hZGQtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0FBQ2Y7O0FBRUU7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNuQjs7QUFIRTtFQUtNLFdBQVc7RUFDWCxnQkFBZ0I7QUFFeEI7O0FBUkU7RUFVSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUV0QyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtBQUV2Qjs7QUF4QkU7RUEwQkkseUJBQWlCO0tBQWpCLHNCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsU0FBUztFQUNULFdBQVc7QUFFakI7O0FBOUJFO0VBZ0NJLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFFeEI7O0FBRUU7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtBQUNyQjs7QUFQRTtFQVFJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFHckI7O0FBcEJFO0VBcUJJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFHdEI7O0FBQUU7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFHdkI7O0FBUEU7RUFNTSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUtuQjs7QUFmRTtFQWFNLHNCQUFzQjtFQUN0QixVQUFVO0FBTWxCOztBQUhBO0VBQ0ksVUFBVTtBQU1kOztBQUpBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQU9yQjs7QUFMQTtFQUNFLGVBQWU7QUFRakI7O0FBTkE7RUFDRSxjQUFjO0FBU2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2Uvcm91dGluZS9hZGQtZWRpdC9hZGQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDElO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAucm93IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgbGFiZWwge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICB9XG4gIFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGZvbnQ6IDQwMCAxMnB4IFwiT3BlbiBzYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgYXBwZWFyYW5jZTogcmFkaW87XG4gICAgICB3aWR0aDogMSU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICBcbiAgICAuZHJvcGRvd24tbGlzdCB7XG4gICAgICBtYXgtaGVpZ2h0OiAxOTdweDtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB9XG4gIH1cbiAgICBcbiAgLmdvLWJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzZTNkNGE7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgLmdvYnRuIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYTY2ZmE7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzNhNjZmYTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmFkZC1jbGFzcy1idG4ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNjZmYTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIH1cbiAgfVxuICAuZWRpdC1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAuZWRpdC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cbn1cbi5mb3JtLWN0cmwge1xuICAgIHdpZHRoOiAzNSU7XG59XG4uZXJyb3Jtc2cge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5zZWxlY3Q6ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG4uaGVscC1ibG9ja3tcbiAgY29sb3I6ICNhOTQ0NDI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/course-module/create-course/routine/add-edit/add-edit.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/routine/add-edit/add-edit.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditComponent", function() { return AddEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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







let AddEditComponent = /** @class */ (() => {
    let AddEditComponent = class AddEditComponent {
        constructor(auth, messageService, _httpService, router) {
            this.auth = auth;
            this.messageService = messageService;
            this._httpService = _httpService;
            this.router = router;
            this.editrecord = {
                standard_id: '',
                batch_id: '',
                course_id: '',
                requested_date: '',
                start_time: '',
                end_time: '',
                class_room_id: '',
                teacher_id: '',
                day_of_week: '',
                institute_id: sessionStorage.getItem('institute_id')
            };
            this.masterCourse = [];
            this.courseList = [];
            this.subjectList = [];
            this.teacherListDataSource = [];
            this.weekDaysListWithoutWeekend = [];
            this.classRoomData = [];
            this.isEdit = false;
            this.times = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];
            this.minArr = ['00', '15', '30', '45'];
            this.mainStartTime = {
                hour: '12 PM',
                minute: '00',
            };
            this.mainEndTime = {
                hour: '1 PM',
                minute: '00',
            };
            this.disabledFromDate = false;
            this.fromToday = false;
            this.errorsObj = {
                standard_id: '',
                batch_id: '',
                course_id: '',
                requested_date: '',
                start_time: '',
                end_time: '',
                class_room_id: '',
                teacher_id: '',
                day_of_week: '',
            };
        }
        ngOnInit() {
            this.getStandard();
            this.getAllWeekDay();
            this.getAllTeacherList();
            this.getRooomDetails();
            this.checkEditData();
        }
        checkEditData() {
            let classScheduleDetails = JSON.parse(sessionStorage.getItem('classScheduleDetails'));
            if (classScheduleDetails != null) {
                this.isEdit = true;
                this.editrecord = classScheduleDetails;
                this.editrecord.subject_id = this.editrecord.batch_id;
                let today_date = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
                if (moment__WEBPACK_IMPORTED_MODULE_5__(this.editrecord.requested_date).valueOf() < moment__WEBPACK_IMPORTED_MODULE_5__(today_date).valueOf()) {
                    this.fromToday = true;
                    this.disabledFromDate = true;
                }
                this.setTime(this.editrecord);
            }
        }
        setTime(obj) {
            this.mainEndTime = {
                hour: obj.end_time.split(':')[0] + " " + obj.end_time.split(':')[1].split(' ')[1],
                minute: obj.end_time.split(':')[1].split(" ")[0]
            };
            this.mainStartTime = {
                hour: obj.start_time.split(':')[0] + " " + obj.start_time.split(':')[1].split(' ')[1],
                minute: obj.start_time.split(':')[1].split(" ")[0]
            };
        }
        ngOnDestroy() {
            sessionStorage.removeItem('classScheduleDetails');
            sessionStorage.setItem('isFromCoursePlanner', String(false));
            sessionStorage.setItem('coursePlannerFilter', '');
        }
        // All day of the week
        getAllWeekDay() {
            this.auth.showLoader();
            this._httpService.getData('/api/v1/masterData/type/DAY_OF_WEEK').subscribe((res) => {
                this.auth.hideLoader();
                for (var i = 0; i < res.length; i++) {
                    if (!res[i].is_weekend) {
                        this.weekDaysListWithoutWeekend.push(res[i]);
                    }
                }
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        getAllTeacherList() {
            let url = "/api/v1/teachers/teacher-list/" + sessionStorage.getItem('institute_id') + '?active=Y';
            this.auth.showLoader();
            this._httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.teacherListDataSource = res.result;
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        getStandard() {
            this.auth.showLoader();
            this._httpService.getData('/api/v1/courseMaster/standard-section-list/' + sessionStorage.getItem('institute_id') + '?is_active_not_expire=Y').subscribe((res) => {
                this.auth.hideLoader();
                this.masterCourse = res.result;
                if (this.isEdit) {
                    this.getCourseList(this.editrecord.standard_id);
                }
            }, err => {
                this.auth.hideLoader();
                this.messageService.showErrorMessage('error', '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
            });
        }
        getCourseList(ev) {
            console.log(this.masterCourse);
            if (!this.isEdit) {
                this.editrecord.course_id = "";
            }
            else {
                this.updateSubjectList(this.editrecord.course_id);
            }
            this.editrecord.subject_id = '';
            this.courseList = [];
            let standard_obj = this.masterCourse.filter((standard) => (ev == standard.standard_id));
            if (standard_obj && standard_obj.length) {
                this.courseList = standard_obj[0].section_list;
            }
        }
        updateSubjectList(event) {
            let course_obj = this.courseList.filter((standard) => (event == standard.course_id));
            let setSectionStartDate = '';
            if (course_obj && course_obj.length) {
                setSectionStartDate = course_obj[0].start_date;
            }
            let today_date = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
            this.disabledFromDate = true;
            if (moment__WEBPACK_IMPORTED_MODULE_5__(setSectionStartDate).valueOf() < moment__WEBPACK_IMPORTED_MODULE_5__(today_date).valueOf()) {
                this.disabledFromDate = false;
            }
            this.auth.showLoader();
            this.subjectList = [];
            const url = "/api/v1/courseMaster/fetch/courses/" + sessionStorage.getItem('institute_id') + '/' + this.editrecord.course_id;
            this._httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                //console.log('Subject', res);
                this.subjectList = res.batchesList;
            }, err => {
                this.messageService.showErrorMessage('error', '', err.error.message);
                this.auth.hideLoader();
                //console.log(err);
            });
        }
        getRooomDetails() {
            this.classRoomData = [];
            this._httpService.getData('/api/v1/batchClassRoom/all/' + sessionStorage.getItem('institute_id')).subscribe((res) => {
                this.classRoomData = res;
                if (this.isEdit) {
                    let key = this.classRoomData.filter(id => (id.class_room_name == this.editrecord.class_room_id));
                    this.editrecord.class_room_id = key[0].class_room_id;
                }
            }, err => {
                console.log(err);
            });
        }
        validateTimeDuration(startTime, endTime) {
            let start_Time = moment__WEBPACK_IMPORTED_MODULE_5__(this.breakTimeIntoHrMin(startTime.hour, startTime.minute), 'h:mma');
            let end_Time = moment__WEBPACK_IMPORTED_MODULE_5__(this.breakTimeIntoHrMin(endTime.hour, endTime.minute), 'h:mma');
            if (!(start_Time.isBefore(end_Time))) {
                this.messageService.showErrorMessage('info', '', "Please enter correct start and end time");
                return false;
            }
            return true;
        }
        breakTimeIntoHrMin(time, minute) {
            let hrMeri = time.split(' ');
            return hrMeri[0] + ":" + minute + hrMeri[1];
        }
        createTimeInFormat(hrMeri, minute, format) {
            let time = hrMeri.split(' ');
            if (format == "comp") {
                let t = time[0] + ":" + minute + time[1];
                return t;
            }
            else {
                let t = time[0] + ":" + minute + " " + time[1];
                return t;
            }
        }
        getDifference(startTime, endTime) {
            let start = moment__WEBPACK_IMPORTED_MODULE_5__["utc"](startTime, "HH:mm");
            let end = moment__WEBPACK_IMPORTED_MODULE_5__["utc"](endTime, "HH:mm");
            if (end.isBefore(start))
                end.add(1, 'day');
            let d = moment__WEBPACK_IMPORTED_MODULE_5__["duration"](end.diff(start));
            return d._milliseconds / 60000;
        }
        saveRoutineData() {
            if (this.createRoutinForm.valid) {
                if (!this.validateTimeDuration(this.mainStartTime, this.mainEndTime))
                    return;
                this.editrecord.requested_date = null;
                if (this.fromToday) {
                    this.editrecord.requested_date = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
                }
                let obj = {
                    "institute_id": sessionStorage.getItem('institute_id'),
                    "course_id": this.editrecord.course_id,
                    "batch_id": this.editrecord.batch_id,
                    "start_time": this.createTimeInFormat(this.mainStartTime.hour, this.mainStartTime.minute, ''),
                    "end_time": this.createTimeInFormat(this.mainEndTime.hour, this.mainEndTime.minute, ''),
                    "day_of_week": this.editrecord.day_of_week,
                    "teacher_id": this.editrecord.teacher_id,
                    "class_room_id": this.editrecord.class_room_id,
                    "duration": 0,
                    "requested_date": this.editrecord.requested_date
                };
                obj.duration = this.getDifference(moment__WEBPACK_IMPORTED_MODULE_5__(obj.start_time, 'h:mma'), moment__WEBPACK_IMPORTED_MODULE_5__(obj.end_time, 'h:mma'));
                this.isEdit ? this.updateData(obj) : this.createData(obj);
            }
            else {
                this.messageService.showErrorMessage('error', '', 'Please select required fields');
            }
        }
        createData(obj) {
            this.auth.showLoader();
            this._httpService.postData('/api//v1/courseClassSchedule/create-class-schdule', obj).subscribe((res) => {
                this.auth.hideLoader();
                this.messageService.showErrorMessage('success', '', 'schedule created successfully');
                this.backToHome();
            }, (err) => {
                this.auth.hideLoader();
                let count = 0;
                if (err.error && err.error.error && err.error.error.length) {
                    for (let data of err.error.error) {
                        for (const key of Object.keys(this.errorsObj)) {
                            if (data.onField == `${key}`) {
                                count++;
                                this.errorsObj[`${key}`] = data.errorMessage;
                            }
                        }
                    }
                }
                if (count == 0) {
                    this.messageService.showErrorMessage('error', '', err.error.message);
                }
            });
        }
        updateData(obj) {
            this.auth.showLoader();
            this._httpService.putData('/api/v1/courseClassSchedule/update-class-schdule/' + this.editrecord.class_schedule_id, obj).subscribe((res) => {
                this.auth.hideLoader();
                this.messageService.showErrorMessage('success', '', 'schedule updated successfully');
                this.backToHome();
            }, (err) => {
                this.auth.hideLoader();
                let count = 0;
                if (err.error && err.error.error && err.error.error.length) {
                    for (let data of err.error.error) {
                        for (const key of Object.keys(this.errorsObj)) {
                            if (data.onField == `${key}`) {
                                count++;
                                this.errorsObj[`${key}`] = data.errorMessage;
                            }
                        }
                    }
                }
                if (count == 0) {
                    this.messageService.showErrorMessage('error', '', err.error.message);
                }
            });
        }
        backToHome() {
            let url = (sessionStorage.getItem('isFromCoursePlanner') == 'true') ? '/view/course/coursePlanner/class' : '/view/course/create/routine/list';
            this.router.navigate([url]);
        }
    };
    AddEditComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ];
    AddEditComponent.propDecorators = {
        createRoutinForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['createRoutinForm', { static: false },] }]
    };
    AddEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/routine/add-edit/add-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-edit.component.scss */ "./src/app/components/course-module/create-course/routine/add-edit/add-edit.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddEditComponent);
    return AddEditComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/routine/list/list.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/routine/list/list.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #334D6E;\n}\n\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n\n.breadcrumb-item > a {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 3.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #dfe5f0;\n  padding: 10px;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list li a span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334d6e;\n}\n\n.list li img {\n  padding: 0px 10px;\n}\n\n.add_master_tag {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\nselect {\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 500;\n  background-color: #f5f6f8;\n}\n\n.input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  /*background-color: #f5f6f8;\n*/\n}\n\n.magnifying-glass {\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 5px;\n}\n\n.header-input {\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 600;\n  width: 700px;\n  color: #61758e;\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  /*background-color: #f5f6f8;*/\n}\n\n.header-input::-moz-placeholder {\n  padding-left: 10px;\n}\n\n.header-input:-ms-input-placeholder {\n  padding-left: 10px;\n}\n\n.header-input::placeholder {\n  padding-left: 10px;\n}\n\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 15px;\n}\n\n.p-15 {\n  padding-bottom: 15px;\n}\n\nselect {\n  width: 250px;\n  color: #b6b8bb;\n}\n\ntable {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 15px;\n}\n\nthead {\n  background-color: #DFE5F0;\n  font-weight: 600;\n}\n\nthead td {\n  background: #DFE5F0;\n}\n\ntd {\n  padding: 10px 15px;\n  color: #323C47;\n  font-size: 12px;\n}\n\ntbody {\n  font-weight: 500;\n}\n\ntr {\n  box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n}\n\n.section::before {\n  height: 0.4em;\n  display: table-row;\n  content: '';\n}\n\n.w96 {\n  width: calc(100% - 1rem);\n}\n\n.p-10 {\n  padding-top: 10px;\n}\n\n.p-30 {\n  padding-top: 30px;\n}\n\n.p-10-0 {\n  padding: 9px 0px;\n}\n\n.yes {\n  background-color: #CCFFAC;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.no {\n  background-color: #FFCF88;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.search {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.area-select {\n  font-size: 12px;\n  color: #787A7D;\n}\n\n.input-width {\n  width: 180px;\n}\n\n.pl-10 {\n  padding-left: 10px;\n}\n\n.pr-40 {\n  padding-right: 40px;\n}\n\n.cancel {\n  background-color: #fff;\n  border: 1px solid #109CF1;\n  color: #109CF1;\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n  color: #334D6E;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.width205 {\n  width: 205px;\n}\n\n.description {\n  width: 200px;\n  margin: 0px 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('Icon.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  padding: 6px 4px;\n  margin-right: 10px;\n}\n\n.add {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.center {\n  text-align: center;\n}\n\n.gray {\n  background-color: #F4F3F8;\n  height: 92vh;\n}\n\n/*chatbox*/\n\n.chatbox1 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox2 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox3 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox4 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox5 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox6 {\n  width: 1033px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox7 {\n  width: 90px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox8 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox9 {\n  width: 819px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox-select {\n  font-size: 10px;\n}\n\n.chatbox-input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: #f3f3f3;\n}\n\n.col-form-label {\n  font-size: 13px;\n  font-weight: 400;\n  color: #AFB3B7;\n}\n\n.upload {\n  background-color: #29ACFC;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n#yourBtn {\n  position: relative;\n  top: 40px;\n  width: 100px;\n  padding: 10px;\n  background-color: #29ACFC;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.top {\n  position: relative;\n  top: 40px;\n}\n\n.division {\n  border-right: 2px solid #C4C4C4;\n  margin: 40px 0px;\n}\n\n.radio {\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.containerc {\n  display: block;\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.containerc input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  border: 1px solid #109CF1;\n}\n\n.containerc input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.containerc input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.containerc .checkmark:after {\n  left: 5px;\n  top: 0px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.top2 {\n  position: relative;\n  top: 10px;\n}\n\n.login {\n  position: relative;\n  top: -7px;\n  left: 2px;\n}\n\n.thumb {\n  padding-left: 10px;\n}\n\nmain {\n  padding-left: 0 !important;\n}\n\n.right {\n  float: right;\n}\n\nthead td, thead th {\n  border-top: none;\n  border-bottom: none;\n}\n\n/* ===============================header colors=======================*/\n\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n\n.class_scheduling_container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n\n.class_scheduling_container .class_scheduling_item {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.class_scheduling_container .class_scheduling_item .time_container {\n  display: flex;\n  flex-direction: row;\n  font-weight: 600;\n  text-align: center;\n}\n\n.class_scheduling_container .class_scheduling_item .time_container .time_header_item {\n  width: 10%;\n  padding: 5px;\n  color: #6f6f6f;\n  background: white;\n  border-top-left-radius: 4px;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.class_scheduling_container .class_scheduling_item .time_container .time_item {\n  width: 12.85%;\n  padding: 5px;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.class_scheduling_container .class_scheduling_item .time_container .time_item:last-child {\n  border-right: none;\n  border-top-right-radius: 4px;\n}\n\n.class_scheduling_container .class_scheduling_item .subject_container, .class_scheduling_container .class_scheduling_item .topic_container, .class_scheduling_container .class_scheduling_item .master_course_container {\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n}\n\n.class_scheduling_container .class_scheduling_item .subject_container .subject_header_item, .class_scheduling_container .class_scheduling_item .subject_container .topic_header_item, .class_scheduling_container .class_scheduling_item .subject_container .course_header_item, .class_scheduling_container .class_scheduling_item .topic_container .subject_header_item, .class_scheduling_container .class_scheduling_item .topic_container .topic_header_item, .class_scheduling_container .class_scheduling_item .topic_container .course_header_item, .class_scheduling_container .class_scheduling_item .master_course_container .subject_header_item, .class_scheduling_container .class_scheduling_item .master_course_container .topic_header_item, .class_scheduling_container .class_scheduling_item .master_course_container .course_header_item {\n  width: 10%;\n  padding: 5px;\n  font-weight: 600;\n  color: #6f6f6f;\n  background: white;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.class_scheduling_container .class_scheduling_item .subject_container .course_item, .class_scheduling_container .class_scheduling_item .topic_container .course_item, .class_scheduling_container .class_scheduling_item .master_course_container .course_item {\n  background: white;\n  word-break: break-word;\n  width: 12.85%;\n  padding: 5px;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.class_scheduling_container .class_scheduling_item .subject_container .subject_item, .class_scheduling_container .class_scheduling_item .topic_container .subject_item, .class_scheduling_container .class_scheduling_item .master_course_container .subject_item {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.class_scheduling_container .class_scheduling_item .subject_container .subject_item, .class_scheduling_container .class_scheduling_item .subject_container .topic_item, .class_scheduling_container .class_scheduling_item .topic_container .subject_item, .class_scheduling_container .class_scheduling_item .topic_container .topic_item, .class_scheduling_container .class_scheduling_item .master_course_container .subject_item, .class_scheduling_container .class_scheduling_item .master_course_container .topic_item {\n  width: 12.85%;\n  padding: 5px;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.class_scheduling_container .class_scheduling_item .subject_container .subject_item:last-child, .class_scheduling_container .class_scheduling_item .topic_container .subject_item:last-child, .class_scheduling_container .class_scheduling_item .master_course_container .subject_item:last-child {\n  border-right: none;\n}\n\n.class_scheduling_container .class_scheduling_item .subject_container .topic_item:last-child, .class_scheduling_container .class_scheduling_item .topic_container .topic_item:last-child, .class_scheduling_container .class_scheduling_item .master_course_container .topic_item:last-child {\n  border-right: none;\n}\n\n.class_scheduling_container .class_scheduling_item .subject_container .course_item:last-child, .class_scheduling_container .class_scheduling_item .topic_container .course_item:last-child, .class_scheduling_container .class_scheduling_item .master_course_container .course_item:last-child {\n  border-right: none;\n}\n\n.class_scheduling_container .class_scheduling_item .faculty_container {\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n}\n\n.class_scheduling_container .class_scheduling_item .faculty_container .faculty_header_item {\n  width: 10%;\n  padding: 5px;\n  font-weight: 600;\n  color: #6f6f6f;\n  background: white;\n  border-bottom-left-radius: 4px;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.class_scheduling_container .class_scheduling_item .faculty_container .faculty_item {\n  width: 12.85%;\n  padding: 5px;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.class_scheduling_container .class_scheduling_item .faculty_container .topic_item:last-child {\n  border-right: none;\n}\n\n.class_scheduling_container .class_scheduling_item .faculty_container .faculty_item:last-child {\n  border-right: none;\n  border-bottom-right-radius: 4px;\n}\n\n.day_and_date_container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #ffffff;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n}\n\n.day_and_date_container .days_header_container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  text-align: center;\n  font-size: 15px;\n}\n\n.day_and_date_container .days_header_container .day_header_item {\n  width: 10%;\n  padding: 5px;\n  color: #6f6f6f;\n  background: white;\n  border-top-left-radius: 4px;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.day_and_date_container .days_header_container .days_item {\n  width: 12.85%;\n  padding: 5px;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.day_and_date_container .days_header_container .days_item:last-child {\n  border-right: none;\n  border-top-right-radius: 4px;\n}\n\n.day_and_date_container .date_container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  text-align: center;\n  font-size: 15px;\n}\n\n.day_and_date_container .date_container .date_header_item {\n  width: 10%;\n  padding: 5px;\n  font-weight: 600;\n  color: #6f6f6f;\n  background: white;\n  border-bottom-left-radius: 4px;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.day_and_date_container .date_container .date_item {\n  width: 12.85%;\n  padding: 5px;\n  font-weight: 600;\n  border-right: 1px solid rgba(10, 10, 10, 0.3);\n}\n\n.day_and_date_container .date_container .date_item:last-child {\n  border-right: none;\n  border-bottom-right-radius: 4px;\n}\n\n.btn {\n  background: #0084f6;\n  color: white;\n  margin-top: -2rem;\n}\n\nth {\n  background-color: #e0eaec;\n  color: black;\n}\n\ntr {\n  border-radius: 12px;\n  border-left: 5px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.tableBodyScroll tbody {\n  display: block;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.add_master_tag {\n  padding: 7px 20px;\n  float: right;\n  height: 35px;\n  margin-top: 25px;\n}\n\n.noSchedule {\n  border: 2px solid #f7f5f5;\n  width: 100%;\n  margin-top: 20px;\n  text-align: center;\n  padding: 10px;\n  margin-bottom: 4%;\n}\n\n.filter-header-container {\n  display: flex;\n  flex-direction: row;\n  padding: 5px 0px;\n  border-bottom: 1px solid #d4d4d4;\n  justify-content: space-between;\n}\n\n.filter-header-container .filter-item-1 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.filter-header-container .filter-item-1 .header-item {\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: 20%;\n  margin-right: 10px;\n  position: relative;\n}\n\n.filter-header-container .filter-item-1 .header-item .header-select-box {\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  margin: 5px 0px;\n  padding: 5px 0px;\n}\n\n.filter-header-container .filter-item-1 .header-item .input-container {\n  position: relative;\n}\n\n.filter-header-container .filter-item-1 .header-item .input-container .fa-filter {\n  position: absolute;\n  left: 2px;\n  background: white;\n  padding: 8px 10px;\n  top: 6px;\n  border-right: 1px solid #ccc;\n}\n\n.filter-header-container .filter-item-1 .header-item .input-container .fa-caret-down,\n.filter-header-container .filter-item-1 .header-item .input-container .fa-caret-up {\n  position: absolute;\n  right: 2px;\n  background: white;\n  padding: 7px 10px;\n  top: 7px;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.filter-header-container .filter-item-1 .header-item .filer-input {\n  margin: 5px 0px;\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  padding: 8px 5px;\n  width: 100%;\n  padding-left: 35px;\n  height: 30px;\n}\n\n.filter-header-container .filter-item-1 .go-btn-container {\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: auto;\n}\n\n.filter-header-container .filter-item-1 .go-btn-container .gobtn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: #3a66fa;\n  color: #ffffff;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 20px;\n}\n\n.filter-header-container .filter-item-2 {\n  width: 10%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filter-header-container .filter-item-2 .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n}\n\n.filter-header-container .filter-container {\n  position: absolute;\n  width: 100%;\n  background: white;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  top: 55px;\n  -webkit-animation-name: slideInDown;\n          animation-name: slideInDown;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  z-index: 20;\n}\n\n.filter-header-container .filter-container .date-container {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 0px;\n}\n\n.filter-header-container .filter-container .date-container .date-title {\n  font-weight: 600;\n  padding: 5px 0px;\n}\n\n.filter-header-container .filter-container .date-container .date-values-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.filter-header-container .filter-container .date-container .date-values-container .date-value-item {\n  width: 50%;\n}\n\n.filter-header-container .filter-container .date-container .date-values-container .date-value-item input,\n.filter-header-container .filter-container .date-container .date-values-container .date-value-item label {\n  cursor: pointer;\n  font-size: 12px;\n}\n\n.filter-header-container .filter-container .status-container {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  padding-bottom: 0px;\n}\n\n.filter-header-container .filter-container .status-container .status-title {\n  font-weight: 600;\n  padding: 5px 0px;\n}\n\n.filter-header-container .filter-container .status-container .status-values-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.filter-header-container .filter-container .status-container .status-values-container .status-value-item {\n  width: 50%;\n}\n\n.filter-header-container .filter-container .status-container .status-values-container .status-value-item input,\n.filter-header-container .filter-container .status-container .status-values-container .status-value-item label {\n  cursor: pointer;\n  font-size: 12px;\n}\n\n.filter-header-container .filter-container .faculty-container {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.filter-header-container .filter-container .faculty-container .faculty-title {\n  font-weight: 600;\n  padding: 5px 0px;\n}\n\n.filter-header-container .filter-container .faculty-container .faculty-dropdown-container {\n  width: 100%;\n}\n\n.filter-header-container .filter-container .faculty-container .faculty-dropdown-container .faculty-select-box {\n  margin: 5px 0px;\n  padding: 5px 0px;\n  width: 100%;\n}\n\nselect {\n  width: auto;\n  background: #fff;\n  color: #323C47;\n  padding: 5px;\n  font-size: 12px;\n}\n\n.actionDetails {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.actionDetails i {\n  font-size: 16px;\n}\n\n.actionDetails .fa-edit {\n  color: #109cf1;\n}\n\n.actionDetails .fa-trash {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvZGF0YS1zZXR1cC1ob21lL2RhdGEtc2V0dXAtaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2Uvcm91dGluZS9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQ0NoQjs7QURDQTtFQUNBLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtBQ0VmOztBREFBO0VBQ0EsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FDR2Y7O0FERUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FDQ2xCOztBRENBO0VBRU0sZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FDQ3RCOztBRFRBO0VBV00sMkNBQTJDO0VBQzNDLHlCQUF5QjtBQ0UvQjs7QURFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQ0NuQjs7QURDQTtFQUNFLGFBQWE7QUNFZjs7QURBQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsYUFBYTtBQ0dmOztBRERBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0FDSWpCOztBRFBBO0VBS00scUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQ01wQjs7QURkQTtFQVlNLGlCQUFpQjtBQ012Qjs7QURGQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FDS2xCOztBREhBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQ00zQjs7QURKQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEI7Q0NPRDtBQUNEOztBRExBO0VBQ0UsbUNBQThEO0VBQzlELDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FDUWxCOztBRE5BO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQ0FBZ0U7RUFDaEUsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyw2QkFBQTtBQ1NGOztBRFBBO0VBQ0Usa0JBQWtCO0FDVXBCOztBRFhBO0VBQ0Usa0JBQWtCO0FDVXBCOztBRFhBO0VBQ0Usa0JBQWtCO0FDVXBCOztBRFJBO0VBQ0UsK0NBQStDO0VBQy9DLHVEQUF1RDtFQUN2RCxvREFBb0Q7RUFDcEQsb0JBQW9CO0FDV3RCOztBRFRBO0VBQ0Usb0JBQW9CO0FDWXRCOztBRFZBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUNhaEI7O0FEUkE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZTtBQ1dqQjs7QURUQTtFQUNHLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUNZbkI7O0FEZEE7RUFJTyxtQkFBbUI7QUNjMUI7O0FEWEE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7QUNjakI7O0FEWkE7RUFDRSxnQkFBZ0I7QUNlbEI7O0FEYkE7RUFDSSwrQ0FBNEM7RUFDNUMsdURBQW1EO0VBQ25ELG9EQUFpRDtBQ2dCckQ7O0FEZEE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7QUNpQmI7O0FEYkE7RUFDRSx3QkFBd0I7QUNnQjFCOztBRFpBO0VBQU0saUJBQWlCO0FDZ0J2Qjs7QURmQTtFQUFNLGlCQUFpQjtBQ21CdkI7O0FEbEJBO0VBQVMsZ0JBQWdCO0FDc0J6Qjs7QURyQkE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUN3QnBCOztBRHRCQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ3lCcEI7O0FEdkJBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFDRjtBQ3lCQTs7QUR4QkE7RUFDSSxlQUFlO0VBQ2YsY0FBYztBQzJCbEI7O0FEekJBO0VBQ0UsWUFBWTtBQzRCZDs7QUQxQkE7RUFDRSxrQkFBa0I7QUM2QnBCOztBRDNCQTtFQUNFLG1CQUFtQjtBQzhCckI7O0FEM0JBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF3QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFDRjtBQzZCQTs7QUQ1QkE7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFDSjtBQzhCQTs7QUQ3QkE7RUFDRSxZQUFZO0FDZ0NkOztBRDlCQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUNpQ2xCOztBRC9CQztFQUNHLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsY0FBYztFQUNkLHFDQUFrRTtFQUNsRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNrQ3BCOztBRGhDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNtQ3BCOztBRGpDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUNGO0FDbUNBOztBRGxDQTtFQUNBLGtCQUFrQjtBQ3FDbEI7O0FEbkNBO0VBQ0Usa0JBQWtCO0FDc0NwQjs7QURwQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQ3VDZDs7QURyQ0EsVUFBQTs7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUN3Q2xCOztBRHRDQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0FDeUNsQjs7QUR2Q0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FDMENsQjs7QUR4Q0E7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQzJDbEI7O0FEekNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQzRDbEI7O0FEMUNBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUM2Q2xCOztBRDNDQTtFQUNFLFdBQVU7RUFDVixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUM4Q2xCOztBRDVDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUMrQ2xCOztBRDdDQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0FDZ0RsQjs7QUQ5Q0E7RUFDRSxlQUFlO0FDaURqQjs7QUQvQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQ2tEM0I7O0FEaERBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FDbURoQjs7QURqREE7RUFDRSx5QkFBeUI7QUNvRDNCOztBRGxEQTtFQUNFLGtCQUFrQjtBQ3FEcEI7O0FEbkRBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQ3NEckI7O0FEcERBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUN1RFg7O0FEckRBO0VBQ0UsK0JBQWdDO0VBQ2hDLGdCQUFnQjtBQ3dEbEI7O0FEdERBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQ3lEbEI7O0FEdkRBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUMwRG5COztBRHREQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0FDeURWOztBRHJEQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0FDd0QzQjs7QURyREE7RUFDRSx5QkFBeUI7QUN3RDNCOztBRHBEQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQ3VEZjs7QURuREE7RUFDRSxjQUFjO0FDc0RoQjs7QURsREE7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUd6Qix3QkFBd0I7QUNxRDFCOztBRG5EQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FDc0RYOztBRHBEQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQ3VEYjs7QURyREE7RUFDRSxrQkFBa0I7QUN3RHBCOztBRHREQTtFQUNJLDBCQUEwQjtBQ3lEOUI7O0FEdkRBO0VBQ0ksWUFBWTtBQzBEaEI7O0FEeERBO0VBRUksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQzBEdkI7O0FDM2hCQSx1RUFBQTs7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBRGloQmpDOztBQ3ZoQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QURraEIvQjs7QUM1aEJBO0VBZ0I0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBRGdoQm5EOztBQ3JpQkE7RUF1QmdDLFVBQVU7QURraEIxQzs7QUN6aUJBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QURtaEJ0RDs7QUNoakJBO0VBZ0NvQyxVQUFVO0FEb2hCOUM7O0FDcGpCQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FEb2hCbEQ7O0FDOWpCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBRG9oQjNDOztBQzNnQkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUQ4Z0JwQjs7QUNsaEJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FEZ2hCL0I7O0FDL2hCQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FEa2hCMUI7O0FDcGlCQTtFQXNCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7QURraEI1Qjs7QUM5aUJBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FEb2hCeEI7O0FDMWpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FEc2hCNUI7O0FBNW9CQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBK29CcEI7O0FBbHBCQTtFQUtNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkNBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFpcEJ6Qjs7QUExcEJBO0VBV1EsYUFBYTtFQUNiLG1CQUFtQjtFQUVuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBa3BCMUI7O0FBanFCQTtFQWtCVSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLDZDQUEwQztBQW1wQnBEOztBQTFxQkE7RUEwQlUsYUFBYTtFQUNiLFlBQVk7RUFDWiw2Q0FBMEM7QUFvcEJwRDs7QUFockJBO0VBK0JVLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFxcEJ0Qzs7QUFyckJBO0VBb0NRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBcXBCMUI7O0FBM3JCQTtFQXlDVSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDZDQUEwQztBQXNwQnBEOztBQXBzQkE7RUFpRFUsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLDZDQUEwQztBQXVwQnBEOztBQTVzQkE7RUF3RFUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUF3cEJqQzs7QUFsdEJBO0VBNkRVLGFBQWE7RUFDYixZQUFZO0VBQ1osNkNBQTBDO0FBeXBCcEQ7O0FBeHRCQTtFQWtFVSxrQkFBa0I7QUEwcEI1Qjs7QUE1dEJBO0VBcUVVLGtCQUFrQjtBQTJwQjVCOztBQWh1QkE7RUF3RVUsa0JBQWtCO0FBNHBCNUI7O0FBcHVCQTtFQWdGUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQXdwQjFCOztBQTF1QkE7RUFvRlUsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsNkNBQTBDO0FBMHBCcEQ7O0FBcHZCQTtFQTZGVSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZDQUEwQztBQTJwQnBEOztBQTF2QkE7RUFrR1Usa0JBQWtCO0FBNHBCNUI7O0FBOXZCQTtFQXFHVSxrQkFBa0I7RUFDbEIsK0JBQStCO0FBNnBCekM7O0FBeHBCRTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0FBMnBCdEI7O0FBanFCRTtFQVFJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBNnBCckI7O0FBenFCRTtFQWdCTSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLDZDQUEwQztBQTZwQmxEOztBQWxyQkU7RUF3Qk0sYUFBYTtFQUNiLFlBQVk7RUFDWiw2Q0FBMEM7QUE4cEJsRDs7QUF4ckJFO0VBNkJNLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUErcEJwQzs7QUE3ckJFO0VBa0NJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBK3BCckI7O0FBcnNCRTtFQXdDTSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5Qiw2Q0FBMEM7QUFpcUJsRDs7QUEvc0JFO0VBaURNLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDZDQUEwQztBQWtxQmxEOztBQXR0QkU7RUF1RE0sa0JBQWtCO0VBQ2xCLCtCQUErQjtBQW1xQnZDOztBQS9wQkE7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQWtxQnJCOztBQWhxQkE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtBQW1xQmhCOztBQWpxQkE7RUFDSSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsZUFBZTtBQW9xQm5COztBQWxxQkE7RUFDSSxjQUFjO0VBR2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQW1xQnZCOztBQTlwQkE7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFpcUJwQjs7QUEvcEJBO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFrcUJyQjs7QUFocUJBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFFaEIsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtBQWtxQmxDOztBQXhxQkE7RUFRUSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFvcUJ0Qzs7QUEvcUJBO0VBYVksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBc3FCOUI7O0FBenJCQTtFQXFCZ0Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0FBd3FCaEM7O0FBaHNCQTtFQTJCZ0Isa0JBQWtCO0FBeXFCbEM7O0FBcHNCQTtFQTZCb0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUiw0QkFBNEI7QUEycUJoRDs7QUE3c0JBOztFQXNDb0Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtBQTRxQm5DOztBQXh0QkE7RUFnRGdCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUE0cUI1Qjs7QUFsdUJBO0VBMERZLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0FBNHFCdkI7O0FBMXVCQTtFQWdFZ0IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0MsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUE4cUJoQzs7QUF0dkJBO0VBNkVRLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0FBNnFCakM7O0FBNXZCQTtFQWlGWSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtBQStxQjVCOztBQXh3QkE7RUErRlEsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsV0FBVztBQTZxQm5COztBQXR4QkE7RUEyR1ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQStxQi9COztBQTl4QkE7RUFpSGdCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFpckJoQzs7QUFueUJBO0VBcUhnQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFrckIvQjs7QUF6eUJBO0VBeUhvQixVQUFVO0FBb3JCOUI7O0FBN3lCQTs7RUE0SHdCLGVBQWU7RUFDZixlQUFlO0FBc3JCdkM7O0FBbnpCQTtFQW1JWSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFFYixtQkFBbUI7QUFtckIvQjs7QUExekJBO0VBeUlnQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBcXJCaEM7O0FBL3pCQTtFQTZJZ0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBc3JCL0I7O0FBcjBCQTtFQWlKb0IsVUFBVTtBQXdyQjlCOztBQXowQkE7O0VBb0p3QixlQUFlO0VBQ2YsZUFBZTtBQTByQnZDOztBQS8wQkE7RUE0SlksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBdXJCekI7O0FBcjFCQTtFQWdLZ0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQXlyQmhDOztBQTExQkE7RUFvS2dCLFdBQVc7QUEwckIzQjs7QUE5MUJBO0VBdUtvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUEyckIvQjs7QUFyckJBO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7QUF3ckJuQjs7QUF0ckJBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7QUF5ckJuQjs7QUEzckJBO0VBSVEsZUFBZTtBQTJyQnZCOztBQS9yQkE7RUFPUSxjQUFjO0FBNHJCdEI7O0FBbnNCQTtFQVVRLFVBQVU7QUE2ckJsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9jcmVhdGUtY291cnNlL3JvdXRpbmUvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiPlwiO1xuICBjb2xvcjogIzMzNEQ2RTtcbn1cbi5icmVhZGNydW1ie1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbm1hcmdpbi1ib3R0b206IDBweDtcbnBhZGRpbmctbGVmdDogMDtcbn1cbi5icmVhZGNydW1iLWl0ZW0+YXtcbmNvbG9yOiAjMzM0RDZFO1xuZm9udC13ZWlnaHQ6IDYwMDtcbmZvbnQtc2l6ZTogMTZweDtcbn1cblxuXG5cbi53OTgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5uYXYtaXRlbSB7XG4gIC5uYXYtbGluayB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIC5hY3RpdmUge1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDljZjEgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm5hdi1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICBtYXJnaW46IC0xcmVtIDMuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDByZW07XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udzE1IHtcbiAgd2lkdGg6IDE1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTVmMDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5saXN0IHsgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMHB4O1xuICBtYXJnaW46IDdweCAwcHg7XG4gIGEgeyBzcGFuIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzMzNGQ2ZTtcbiAgfVxuICB9XG4gIGltZyB7XG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxufVxufVxuLmFkZF9tYXN0ZXJfdGFnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOWNmMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuc2VsZWN0IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmODtcbn1cbi5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4O1xuKi9cbn1cbi5tYWduaWZ5aW5nLWdsYXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRnJhbWUxLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuICB0ZXh0LWluZGVudDogNXB4O1xufVxuLmhlYWRlci1pbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogNzAwcHg7XG4gIGNvbG9yOiAjNjE3NThlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRnJhbWUxLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4OyovXG59XG4uaGVhZGVyLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5wLTE1IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5zZWxlY3Qge1xuICB3aWR0aDogMjUwcHg7XG4gIGNvbG9yOiAjYjZiOGJiO1xufVxuXG5cblxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6MTVweDtcbn1cbnRoZWFke1xuICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTVGMDtcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICB0ZHtcbiAgICAgICBiYWNrZ3JvdW5kOiAjREZFNUYwO1xuICAgfVxufVxudGR7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbnRib2R5e1xuICBmb250LXdlaWdodDogNTAwO1xufVxudHJ7XG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Oi0xcHggMXB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogLTFweCAxcHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG4uc2VjdGlvbjo6YmVmb3JlIHtcbiAgaGVpZ2h0OiAwLjRlbTtcbiAgZGlzcGxheTogdGFibGUtcm93O1xuICBjb250ZW50OiAnJztcbn1cblxuXG4udzk2e1xuICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gIC8vIG1hcmdpbjogMHB4IDFyZW07XG4gIC8vIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuLnAtMTB7cGFkZGluZy10b3A6IDEwcHg7fVxuLnAtMzB7cGFkZGluZy10b3A6IDMwcHg7fVxuLnAtMTAtMHsgcGFkZGluZzogOXB4IDBweDt9XG4ueWVze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NGRkFDO1xuICBjb2xvcjogIzMyM0M0NztcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5ub3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0Y4ODtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uc2VhcmNoe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLmFyZWEtc2VsZWN0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzc4N0E3RDtcbn1cbi5pbnB1dC13aWR0aHtcbiAgd2lkdGg6IDE4MHB4O1xufVxuLnBsLTEwe1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ucHItNDB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5jYW5jZWx7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjoxcHggc29saWQgIzEwOUNGMTtcbiAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwXG59XG4uZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLndpZHRoMjA1e1xuICB3aWR0aDogMjA1cHg7XG59XG4uZGVzY3JpcHRpb257XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cbiBpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9JY29uLnN2ZycpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIHBhZGRpbmc6IDJweCAwcHg7XG59XG5pbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgcGFkZGluZzogNnB4IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmFkZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDBcbn1cbi5tci0xMHtcbm1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jZW50ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ncmF5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGM0Y4O1xuICBoZWlnaHQ6IDkydmg7XG59XG4vKmNoYXRib3gqL1xuLmNoYXRib3gxe1xuICB3aWR0aDogNDY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94MntcbiAgd2lkdGg6IDExNTNweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94M3tcbiAgd2lkdGg6IDQ2NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDR7XG4gIHdpZHRoOiAxMTUzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDV7XG4gIHdpZHRoOiA0NjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g2e1xuICB3aWR0aDogMTAzM3B4O1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g3e1xuICB3aWR0aDo5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDh7XG4gIHdpZHRoOiA0NjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3g5e1xuICB3aWR0aDogODE5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveC1zZWxlY3R7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jaGF0Ym94LWlucHV0e1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG4uY29sLWZvcm0tbGFiZWx7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNBRkIzQjc7XG59XG4udXBsb2Fke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xufVxuaW5wdXRbdHlwZT1cImZpbGVcIl17XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiN5b3VyQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi50b3B7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MHB4O1xufVxuLmRpdmlzaW9ue1xuICBib3JkZXItcmlnaHQ6ICAycHggc29saWQgI0M0QzRDNDsgXG4gIG1hcmdpbjogNDBweCAwcHg7XG59XG4ucmFkaW97XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jb250YWluZXJjIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cblxuLmNvbnRhaW5lcmMgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuXG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMDlDRjE7XG59XG5cbi5jb250YWluZXJjIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5jb250YWluZXJjIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLmNvbnRhaW5lcmMgLmNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi50b3Aye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbn1cbi5sb2dpbnsgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtN3B4O1xuICAgIGxlZnQ6IDJweDtcbn1cbi50aHVtYntcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxubWFpbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4ucmlnaHQgeyBcbiAgICBmbG9hdDogcmlnaHQ7XG59XG50aGVhZCB7XG4gIHRkLCB0aCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vZGF0YS1zZXR1cC9kYXRhLXNldHVwLWhvbWUvZGF0YS1zZXR1cC1ob21lLmNvbXBvbmVudC5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzJztcbi5jbGFzc19zY2hlZHVsaW5nX2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAuY2xhc3Nfc2NoZWR1bGluZ19pdGVte1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIC50aW1lX2NvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2RkZWZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjMpO1xuICAgICAgICAudGltZV9oZWFkZXJfaXRlbXtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBjb2xvcjogIzZmNmY2ZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjMpO1xuICAgICAgICB9XG4gICAgICAgIC50aW1lX2l0ZW17XG4gICAgICAgICAgd2lkdGg6IDEyLjg1JTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjMpO1xuICAgICAgICB9XG4gICAgICAgIC50aW1lX2l0ZW06bGFzdC1jaGlsZHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnN1YmplY3RfY29udGFpbmVyLCAudG9waWNfY29udGFpbmVyLC5tYXN0ZXJfY291cnNlX2NvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjMpO1xuICAgICAgICAuc3ViamVjdF9oZWFkZXJfaXRlbSwgLnRvcGljX2hlYWRlcl9pdGVtICwgLmNvdXJzZV9oZWFkZXJfaXRlbXtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAjNmY2ZjZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTAsMTAsMTAsMC4zKTtcbiAgICAgICAgfVxuICAgICAgICAuY291cnNlX2l0ZW0ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgd2lkdGg6IDEyLjg1JTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjMpO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJqZWN0X2l0ZW17XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJqZWN0X2l0ZW0sIC50b3BpY19pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTIuODUlO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDEwLDEwLDEwLDAuMyk7XG4gICAgICAgIH1cbiAgICAgICAgLnN1YmplY3RfaXRlbTpsYXN0LWNoaWxke1xuICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAudG9waWNfaXRlbTpsYXN0LWNoaWxke1xuICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY291cnNlX2l0ZW06bGFzdC1jaGlsZHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gIFxuICBcbiAgXG4gICAgICAuZmFjdWx0eV9jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLmZhY3VsdHlfaGVhZGVyX2l0ZW17XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogIzZmNmY2ZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjMpO1xuICAgICAgICB9XG4gICAgICAgIC5mYWN1bHR5X2l0ZW17XG4gICAgICAgICAgd2lkdGg6IDEyLjg1JTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjMpO1xuICAgICAgICB9XG4gICAgICAgIC50b3BpY19pdGVtOmxhc3QtY2hpbGR7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5mYWN1bHR5X2l0ZW06bGFzdC1jaGlsZHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGF5X2FuZF9kYXRlX2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAuZGF5c19oZWFkZXJfY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAvLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjMpO1xuICAgICAgLmRheV9oZWFkZXJfaXRlbXtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjb2xvcjogIzZmNmY2ZjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjMpO1xuICAgICAgfVxuICAgICAgLmRheXNfaXRlbXtcbiAgICAgICAgd2lkdGg6IDEyLjg1JTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDEwLDEwLDEwLDAuMyk7XG4gICAgICB9XG4gICAgICAuZGF5c19pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5kYXRlX2NvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAuZGF0ZV9oZWFkZXJfaXRlbXtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzZmNmY2ZjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMCwxMCwxMCwwLjMpO1xuICAgICAgfVxuICAgICAgLmRhdGVfaXRlbXtcbiAgICAgICAgd2lkdGg6IDEyLjg1JTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDEwLDEwLDEwLDAuMyk7XG4gICAgICB9XG4gICAgICAuZGF0ZV9pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbn1cbnRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGVhZWM7XG4gICAgY29sb3I6IGJsYWNrO1xufVxudHIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTBlYWVjO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgLy8gbWluLWhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDFweCBzb2xpZCByZ2JhKDIxMSwgMjEyLCAyMTMsIDAuNSk7XG59XG5cbi5hZGRfbWFzdGVyX3RhZ3tcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ubm9TY2hlZHVsZSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y3ZjVmNTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQlO1xufVxuLmZpbHRlci1oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmZpbHRlci1pdGVtLTEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAuaGVhZGVyLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogIzNlM2Q0YTtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAuaGVhZGVyLXNlbGVjdC1ib3gge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIC5mYS1maWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZhLWNhcmV0LWRvd24sXG4gICAgICAgICAgICAgICAgLmZhLWNhcmV0LXVwIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogN3B4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbGVyLWlucHV0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5nby1idG4tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICMzZTNkNGE7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIC5nb2J0biB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNjZmYTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzNhNjZmYTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5maWx0ZXItaXRlbS0yIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgLmFkZC1jbGFzcy1idG4ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNjZmYTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAuZmEtcGx1cyB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpbHRlci1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgLmRhdGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgICAgIC5kYXRlLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGF0ZS12YWx1ZXMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIC5kYXRlLXZhbHVlLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdGF0dXMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgICAgIC5zdGF0dXMtdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGF0dXMtdmFsdWVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAuc3RhdHVzLXZhbHVlLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZhY3VsdHktY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIC5mYWN1bHR5LXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmFjdWx0eS1kcm9wZG93bi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC5mYWN1bHR5LXNlbGVjdC1ib3gge1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5zZWxlY3Qge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hY3Rpb25EZXRhaWxzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5mYS1lZGl0IHtcbiAgICAgICAgY29sb3I6ICMxMDljZjE7XG4gICAgfVxuICAgIC5mYS10cmFzaCB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxufSIsIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/course-module/create-course/routine/list/list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/routine/list/list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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





let ListComponent = /** @class */ (() => {
    let ListComponent = class ListComponent {
        constructor(_httpService, auth, messageService, router) {
            this._httpService = _httpService;
            this.auth = auth;
            this.messageService = messageService;
            this.router = router;
            this.routineData = [];
            this.masterCourse = [];
            this.courseList = [];
            this.maxNoOfClasses = 0;
            this.maxClassArray = [];
            this.width = '20';
            this.filterData = {
                standard_id: '',
                course_id: ''
            };
        }
        ngOnInit() {
            this.getStandard();
        }
        getAllRoutineData() {
            this.routineData = [];
            this.maxNoOfClasses = 0;
            this.maxClassArray = [];
            this.auth.showLoader();
            let url = `/api/v1/courseClassSchedule/fetch-class-schdule/${sessionStorage.getItem('institute_id')}/${this.filterData.course_id}`;
            this._httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.routineData = res.result;
                this.width = 100 / this.routineData.length;
                for (var i = 0; i < this.routineData.length; i++) {
                    if (this.routineData[i].schedule_list.length > this.maxNoOfClasses) {
                        this.maxNoOfClasses = this.routineData[i].schedule_list.length;
                    }
                }
                for (var i = 0; i < this.maxNoOfClasses; i++) {
                    this.maxClassArray.push(i);
                }
                console.log(this.maxClassArray);
                console.log(this.routineData);
            }, err => {
                this.auth.hideLoader();
                this.messageService.showErrorMessage('error', '', err.error.message);
            });
        }
        getData() {
            if (this.filterData.standard_id == '' || this.filterData.course_id == '') {
                this.messageService.showErrorMessage('error', '', 'Please select mandatory fields');
            }
            else {
                this.getAllRoutineData();
            }
        }
        getStandard() {
            this.auth.showLoader();
            this._httpService.getData('/api/v1/courseMaster/standard-section-list/' + sessionStorage.getItem('institute_id') + '?is_active_not_expire=Y').subscribe((res) => {
                this.auth.hideLoader();
                this.masterCourse = res.result;
            }, err => {
                this.auth.hideLoader();
                this.messageService.showErrorMessage('error', '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
            });
        }
        getCourseList(ev) {
            this.filterData.course_id = "";
            let standard_obj = this.masterCourse.filter((standard) => (ev == standard.standard_id));
            if (standard_obj && standard_obj.length) {
                this.courseList = standard_obj[0].section_list;
            }
        }
        editClassSchedule(obj, schedule_list) {
            console.log(obj);
            let payload = {
                "institute_id": sessionStorage.getItem('institute_id'),
                "course_id": this.filterData.course_id,
                "standard_id": this.filterData.standard_id,
                "batch_id": schedule_list.batch_id,
                "start_time": schedule_list.start_time,
                "end_time": schedule_list.end_time,
                "day_of_week": obj.day_of_week,
                "teacher_id": schedule_list.teacher_id,
                "class_room_id": schedule_list.class_room_name,
                "class_schedule_id": schedule_list.class_schedule_id
            };
            sessionStorage.setItem('classScheduleDetails', JSON.stringify(payload));
            this.router.navigate(['/view/course/create/routine/create']);
        }
        deleteClassSchedule(obj, schedule_list) {
            if (confirm('Are you sure you want to delete schedule ?')) {
                let payload = {
                    inst_id: sessionStorage.getItem('institute_id'),
                    course_id: this.filterData.course_id,
                    batch_id: schedule_list.batch_id,
                    start_time: schedule_list.start_time,
                    end_time: schedule_list.end_time,
                    day_of_week: obj.day_of_week
                };
                this.auth.showLoader();
                this._httpService.deleteData('/api/v1/courseClassSchedule/delete-class-schdule', payload).subscribe((res) => {
                    this.auth.hideLoader();
                    this.messageService.showErrorMessage('success', '', 'Schedule deleted successfully');
                    this.getAllRoutineData();
                }, (err) => {
                    this.auth.hideLoader();
                    this.messageService.showErrorMessage('error', '', err.error.message);
                });
            }
        }
    };
    ListComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ];
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/routine/list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list.component.scss */ "./src/app/components/course-module/create-course/routine/list/list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListComponent);
    return ListComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/routine/routine-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/routine/routine-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: RoutineRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutineRoutingModule", function() { return RoutineRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit/add-edit.component */ "./src/app/components/course-module/create-course/routine/add-edit/add-edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/components/course-module/create-course/routine/list/list.component.ts");
/* harmony import */ var _routine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routine.component */ "./src/app/components/course-module/create-course/routine/routine.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    {
        path: '',
        component: _routine_component__WEBPACK_IMPORTED_MODULE_4__["RoutineComponent"],
        pathMatch: 'prefix',
        children: [
            {
                path: 'list',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
            },
            {
                path: 'create',
                component: _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__["AddEditComponent"]
            },
        ]
    }
];
let RoutineRoutingModule = /** @class */ (() => {
    let RoutineRoutingModule = class RoutineRoutingModule {
    };
    RoutineRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutineRoutingModule);
    return RoutineRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/routine/routine.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/routine/routine.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9jcmVhdGUtY291cnNlL3JvdXRpbmUvcm91dGluZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/course-module/create-course/routine/routine.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/routine/routine.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RoutineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutineComponent", function() { return RoutineComponent; });
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

let RoutineComponent = /** @class */ (() => {
    let RoutineComponent = class RoutineComponent {
        constructor() { }
        ngOnInit() {
        }
    };
    RoutineComponent.ctorParameters = () => [];
    RoutineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-routine',
            template: __importDefault(__webpack_require__(/*! raw-loader!./routine.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/routine/routine.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./routine.component.scss */ "./src/app/components/course-module/create-course/routine/routine.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], RoutineComponent);
    return RoutineComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/routine/routine.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/routine/routine.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RoutineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutineModule", function() { return RoutineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _routine_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routine-routing.module */ "./src/app/components/course-module/create-course/routine/routine-routing.module.ts");
/* harmony import */ var _routine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routine.component */ "./src/app/components/course-module/create-course/routine/routine.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/components/course-module/create-course/routine/list/list.component.ts");
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit/add-edit.component */ "./src/app/components/course-module/create-course/routine/add-edit/add-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let RoutineModule = /** @class */ (() => {
    let RoutineModule = class RoutineModule {
    };
    RoutineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_routine_component__WEBPACK_IMPORTED_MODULE_3__["RoutineComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["AddEditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _routine_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutineRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], RoutineModule);
    return RoutineModule;
})();



/***/ })

}]);
//# sourceMappingURL=routine-routine-module-es2015.js.map