(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exam-reports-exam-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/exams-module/exam-reports/merit-stage/merit-stage.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/exams-module/exam-reports/merit-stage/merit-stage.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-content\">\n    <div class=\"head_padding\">\n        <div class=\"w98\">\n            <div class=\"page_heading\">\n                <p>Merit Stage Report </p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"brown flex\">\n        <div class=\"mr15\">\n            <p class=\"label\">Standard<span>*</span> </p>\n            <select class=\"select\" [(ngModel)]=\"filterObj.standard_id\" (ngModelChange)=\"updateCourseList($event)\">\n                <option value=\"-1\">Standard</option>\n                <option *ngFor=\"let std of standardData\" value=\"{{std.standard_id}}\">\n                    {{std.standard_name}}\n                </option>\n            </select>\n        </div>\n        <div class=\"mr15\">\n            <p class=\"label\">Exam<span>*</span> </p>\n            <select class=\"select\" [(ngModel)]=\"filterObj.exam_type\">\n                <option value=\"-1\">Exam</option>\n                <option *ngFor=\"let exam of ExamTypeData\" value=\"{{exam.exam_type_id}}\">\n                    {{exam.exam_type}}\n                </option>\n            </select>\n        </div>\n        <div class=\"mr15\">\n            <p class=\"label\">Section<span>*</span></p>\n            <select class=\"select\" [(ngModel)]=\"filterObj.section_id\">\n                <option value=\"-1\">Section</option>\n                <option *ngFor=\"let sec of courseList\" value=\"{{sec.course_id}}\">\n                    {{sec.course_name}}\n                </option>\n            </select>\n        </div>\n        <div class=\"mr15\">\n            <p class=\"label hide_v\"> hello</p>\n            <button class=\"blue_button\" (click)=\"getReport()\">Get Report</button>\n        </div>\n        <div class=\"mr15\" style=\"width: 210px;\">\n        </div>\n    </div>\n\n</div>\n<div class=\"modal\" id=\"myModal\" data-backdrop=\"static\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <!--  <div class=\"modal-header\">\n         <h4 class=\"modal-title\">Modal Heading</h4>\n         <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n       </div> -->\n\n            <!-- Modal body -->\n            <div class=\"modal-body\">\n                <div class=\"head-gradient\">\n                    <div>\n                        <h1>Merit Stage Report</h1>\n                    </div>\n                    <div>\n                        <a (click)=\"Print()\" title=\"Print\" class=\"mr20\"> <img src=\"../../../assets/images/Exam/print.svg\" class=\"icon\"></a>\n                        <!-- <a href=\"\" class=\"mr20\"> <img src=\"../../../assets/images/Exam/download.svg\" class=\"icon\"></a> -->\n                        <a data-dismiss=\"modal\"> <img src=\"../../../assets/images/Exam/close.svg\"\n                                class=\"icon1\"></a>\n                    </div>\n                </div>\n                <div class=\"school-name\">\n                    <div>\n                        <img src=\"../../../assets/images/Exam/image12.png\" class=\"img-fluid\">\n                    </div>\n                    <div>\n                        <span title=\"{{instituteName}}\">{{(instituteName?.length > 65) ? (instituteName | slice:0:65) +\n                            '...' : instituteName}}</span>\n                    </div>\n                </div>\n                <div class=\"details\">\n                    <!-- <div>\n                        <h1>School</h1>\n                        <p><span>Phone:</span> {{reportDetails.}} </p>\n                        <p><span>Email:</span>acfsmdjkd@gmail.com</p>\n                        <p><span>Address:</span> long address here. long address here. long address here. long address\n                            here.</p>\n                    </div> -->\n                    <div style=\"width: 100%;\">\n\n                        <div>\n                            <h1>Order Of Merit Report</h1>\n                            <p><span>Academic Year:</span> {{reportDetails.academic_year}}</p>\n                            <p><span>Standard :</span> {{reportDetails.standard_name}}</p>\n\n                        </div>\n\n                        <div>\n                            <h1 class=\"hidden\">Prakash Jadhav</h1>\n                            <p><span>Exam:</span>  {{reportDetails.exam_type}}</p>\n                            <p><span>Section :</span> {{reportDetails.section_name}}</p>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"blue_gradient\">\n                    <h1>Merit Stage Report</h1>\n                </div>\n                <br>\n                <table class=\"table1\">\n                    <thead style=\"display: flex;flex-direction: row;width: 100%;\">\n                        <tr class=\"subBorder madSub\">Mandatory Subjects</tr>\n                        <tr class=\"subBorder optSub\" *ngIf=\"reportDetails.optional_subject?.length\">Optional Subjects</tr>\n                    </thead>\n                    <!-- <thead class=\"subBorder\" style=\"justify-content: center;display: flex;flex-direction: column;\" *ngIf=\"reportDetails.optional_subject?.length\">\n                        Optional Subjects\n                    </thead> -->\n                    <tbody [ngClass]=\"{'subRow':reportDetails.optional_subject?.length}\">\n                        <tr *ngFor=\"let sub of reportDetails.mandatory_subject\">\n                            <td>\n                                {{sub.subject_id}}\n                            </td>\n                            <td class=\"centeralign\">\n                                {{sub.subject_code}}\n                            </td>\n                            <td>\n                                {{sub.subject_name}}\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tbody class=\"subRow\" *ngIf=\"reportDetails.optional_subject?.length\">\n                        <tr *ngFor=\"let sub of reportDetails.optional_subject\">\n                            <td>\n                                {{sub.subject_id}}\n                            </td>\n                            <td class=\"centeralign\">\n                                {{sub.subject_code}}\n                            </td>\n                            <td>\n                                {{sub.subject_name}}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <!-- <table class=\"table1\">\n                    <thead>\n                        <tr>\n                            <td colspan=\"3\">Optional Subjects</td>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let sub of reportDetails.optional_subject\">\n                            <td>\n                                {{sub.subject_id}}\n                            </td>\n                            <td class=\"centeralign\">\n                                {{sub.subject_code}}\n                            </td>\n                            <td>\n                                {{sub.subject_name}}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table> -->\n\n                <br>\n                <table class=\"table2\">\n                    <thead>\n                        <tr>\n                            <td rowspan=\"2\">#</td>\n                            <td rowspan=\"2\">Name</td>\n                            <td rowspan=\"2\">Register No</td>\n                            <td rowspan=\"2\">Roll No</td>\n                            <td rowspan=\"2\">Position</td>\n                            <td rowspan=\"2\">Total Marks</td>\n                            <td rowspan=\"2\">Average</td>\n                            <td colspan=\"3\">Mandatory Subjects</td>\n                            <td colspan=\"2\" *ngIf=\"reportDetails.optional_subject?.length\">Optional Subjects</td>\n                        </tr>\n                        <tr class=\"tr2\">\n                            <td *ngFor=\"let sub of reportDetails.mandatory_subject\">{{sub.subject_code}}</td>\n                            <td *ngFor=\"let sub of reportDetails.optional_subject\">{{sub.subject_code}}</td>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let data of reportDetails.student_wise_report_list;let k=index\">\n                            <td>\n                                {{k+1}}\n                            </td>\n                            <td>\n                                {{data.student_name}}\n                            </td>\n                            <td>\n                                {{data.registration_no}}\n                            </td>\n                            <td>\n                                {{data.roll_no}}\n                            </td>\n                            <td>\n                                {{data.class_position}}\n                            </td>\n                            <td>\n                                {{data.total_obtained_marks}}\n                            </td>\n                            <td>\n                                {{data.total_average_marks}}\n                            </td>\n                            <td *ngFor=\"let sub of reportDetails.mandatory_subject\">\n                                {{data.mandatory_subject[sub.subject_code]}}</td>\n                            <td *ngFor=\"let sub of reportDetails.optional_subject\">\n                                {{data.optional_subject[sub.subject_code]}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <br>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/exams-module/exam-reports/terminal-report/terminal-report.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/exams-module/exam-reports/terminal-report/terminal-report.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-content\">\n    <div class=\"head_padding\">\n        <div class=\"w98\">\n            <div class=\"page_heading\">\n                <p>Terminal Report</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"brown flex\">\n        <div class=\"mr15\">\n            <p class=\"label\">Standard<span>*</span> </p>\n            <select class=\"select\" [(ngModel)]=\"filterObj.standard_id\" (ngModelChange)=\"updateCourseList($event)\">\n                <option value=\"-1\">Standard</option>\n                <option *ngFor=\"let std of standardData\" value=\"{{std.standard_id}}\">\n                    {{std.standard_name}}\n                </option>\n            </select>\n        </div>\n        <div class=\"mr15\">\n            <p class=\"label\">Exam<span>*</span> </p>\n            <select class=\"select\" [(ngModel)]=\"filterObj.exam_type\">\n                <option value=\"-1\">Exam</option>\n                <option *ngFor=\"let exam of ExamTypeData\" value=\"{{exam.exam_type_id}}\">\n                    {{exam.exam_type}}\n                </option>\n            </select>\n        </div>\n        <div class=\"mr15\">\n            <p class=\"label\">Section<span>*</span></p>\n            <select class=\"select\" [(ngModel)]=\"filterObj.section_id\" (ngModelChange)=\"getStudentList()\">\n                <option value=\"-1\">Section</option>\n                <option *ngFor=\"let sec of courseList\" value=\"{{sec.course_id}}\">\n                    {{sec.course_name}}\n                </option>\n            </select>\n        </div>\n        <div class=\"mr15\">\n            <p class=\"label\">Student</p>\n            <select class=\"select\" [(ngModel)]=\"filterObj.student_id\">\n                <option value=\"-1\">Please Select</option>\n                <option *ngFor=\"let stu of studentList\" value=\"{{stu.student_id}}\">{{stu.student_name}}</option>\n            </select>\n        </div>\n        <div class=\"mr15\">\n            <p class=\"label hide_v\"> hello</p>\n            <button class=\"blue_button\" (click)=\"getReport()\">Get Report</button>\n        </div>\n    </div>\n\n</div>\n<div class=\"modal\" id=\"myModal\" data-backdrop=\"static\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <!--  <div class=\"modal-header\">\n         <h4 class=\"modal-title\">Modal Heading</h4>\n         <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n       </div> -->\n\n            <!-- Modal body -->\n            <div id=\"reportId\" class=\"modal-body\">\n                <div class=\"head-gradient\">\n                    <div>\n                        <h1>Terminal Report</h1>\n                    </div>\n                    <div>\n                        <a (click)=\"Print()\" title=\"Print\" class=\"mr20\"> <img src=\"../../../assets/images/Exam/print.svg\" class=\"icon\"></a>\n                        <!-- <a href=\"\" class=\"mr20\"> <img src=\"../../../assets/images/Exam/download.svg\" class=\"icon\"></a> -->\n                        <a data-dismiss=\"modal\"> <img src=\"../../../assets/images/Exam/close.svg\"\n                                class=\"icon1\"></a>\n                    </div>\n                </div>\n                <div class=\"school-name\">\n                    <div>\n                        <img src=\"../../../assets/images/Exam/image12.png\" class=\"img-fluid\">\n                    </div>\n                    <div>\n                        <span title=\"{{instituteName}}\">{{(instituteName?.length > 65) ? (instituteName | slice:0:65) +\n                            '...' : instituteName}}</span>\n                    </div>\n                </div>\n                <div *ngFor=\"let stuD of reportDetails\">\n                <div class=\"details\">\n                    <!-- <div>\n                        <h1>School</h1>\n                        <p><span>Phone:</span> +91 12345567</p>\n                        <p><span>Email:</span> acfsmdjkd@gmail.com</p>\n                    </div> -->\n                    <div style=\"width: 100%;\">\n                        <div>\n                            <img src=\"../../../assets/images/Exam/image11.png\">\n                        </div>\n                        <div>\n                            <h1>{{stuD.student_name}}</h1>\n                            <p><span>Academic Year:</span> {{stuD.academic_years}}</p>\n                            <p><span>Position In Class :</span> {{stuD.class_position}}</p>\n                            <p><span>Exam:</span> {{stuD.exam_type}}</p>\n                        </div>\n                        <div>\n                            <h1 class=\"hidden\">Prakash</h1>\n                            <p><span>Standard:</span> {{stuD.standard_name}}</p>\n                            <p><span>Section: </span>{{stuD.section_name}}</p>\n                            <p><span>Roll no: </span>{{stuD.roll_no}}</p>\n                        </div>\n                        <div>\n                            <h1 class=\"hidden\">Prakash Jadhav</h1>\n                            <!-- <p><span>Group:</span> {{reportDetails.group}}</p> -->\n                            <p><span>Reg No. :</span> {{stuD.registration_no}}</p>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"blue_gradient\">\n                    <h1>Terminal Report</h1>\n                </div>\n                <table class=\"table1\">\n                    <thead>\n                        <td>\n                            Subjects\n                        </td>\n                        <td class=\"centeralign\" *ngFor=\"let dist of stuD.new_marks_dist_list\">{{dist.marks_distribution_name}}</td>\n                        <td class=\"centeralign\">\n                            Total\n                        </td>\n                        <td class=\"centeralign\">\n                            Position\n                        </td>\n                        <td class=\"centeralign\">\n                            Grade\n                        </td>\n                        <td class=\"centeralign\">\n                            Remarks\n                        </td>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let sub of stuD.subject_list\">\n                            <td>\n                                {{sub.subject_name}}\n                            </td>\n                            <td class=\"centeralign\" *ngFor=\"let dist of sub.marks_dist_list\">{{dist.marks_value}}</td>\n                            <td class=\"centeralign\">\n                                {{sub.total_marks}}\n                            </td>\n                            <td class=\"centeralign\">\n                                {{sub.rank}}\n                            </td>\n                            <td class=\"centeralign\">\n                                <span class=\"bneg \">{{sub.grade}}</span>\n                            </td>\n                            <td class=\"centeralign\">\n\n                            </td>\n                        </tr>\n                        <!-- <tr>\n                            <td class=\"footer\">\n                                Total\n                            </td>\n                            <td class=\"green\">135</td>\n                            <td class=\"orange\">\n                                140\n                            </td>\n                            <td>\n\n                            </td>\n                            <td>\n\n                            </td>\n                            <td>\n\n                            </td>\n                        </tr> -->\n                    </tbody>\n                </table>\n                <br>\n                <table class=\"table2\">\n                    <thead>\n                        <tr>\n                            <td>\n                                Mark Average : {{stuD.total_average_marks}}\n                            </td>\n                            <td>\n                                Class Average : {{stuD.class_average}}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Promoted To</td>\n                            <td></td>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                Attendance\n                            </td>\n                            <td class=\"attendance\">\n                                {{stuD.attendance}}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Teacher Remarks\n                            </td>\n                            <td>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                House Teacher Remarks\n                            </td>\n                            <td>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"grey\">\n                                Principal Remarks\n                            </td>\n                            <td class=\"grey\">\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <br>\n                <div class=\"interpretation_div\">\n                    <h2 class=\"interpretation\">Interpretation of Grades : </h2>\n                    <p class=\"interpretation_p\">{{stuD.interpretation_of_grades}}</p>\n                </div>\n                <br>\n            </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/components/exams-module/exam-reports/exam-reports-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/exams-module/exam-reports/exam-reports-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ExamReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamReportsRoutingModule", function() { return ExamReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _merit_stage_merit_stage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merit-stage/merit-stage.component */ "./src/app/components/exams-module/exam-reports/merit-stage/merit-stage.component.ts");
/* harmony import */ var _terminal_report_terminal_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminal-report/terminal-report.component */ "./src/app/components/exams-module/exam-reports/terminal-report/terminal-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const routes = [
    {
        path: '',
        component: _terminal_report_terminal_report_component__WEBPACK_IMPORTED_MODULE_3__["TerminalReportComponent"]
    },
    {
        path: 'terminal-report',
        component: _terminal_report_terminal_report_component__WEBPACK_IMPORTED_MODULE_3__["TerminalReportComponent"]
    },
    {
        path: 'merit-stage-report',
        component: _merit_stage_merit_stage_component__WEBPACK_IMPORTED_MODULE_2__["MeritStageComponent"]
    }
];
let ExamReportsRoutingModule = /** @class */ (() => {
    let ExamReportsRoutingModule = class ExamReportsRoutingModule {
    };
    ExamReportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExamReportsRoutingModule);
    return ExamReportsRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/exams-module/exam-reports/exam-reports.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/exams-module/exam-reports/exam-reports.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ExamReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamReportsModule", function() { return ExamReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _exam_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exam-reports-routing.module */ "./src/app/components/exams-module/exam-reports/exam-reports-routing.module.ts");
/* harmony import */ var _terminal_report_terminal_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terminal-report/terminal-report.component */ "./src/app/components/exams-module/exam-reports/terminal-report/terminal-report.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _merit_stage_merit_stage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merit-stage/merit-stage.component */ "./src/app/components/exams-module/exam-reports/merit-stage/merit-stage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let ExamReportsModule = /** @class */ (() => {
    let ExamReportsModule = class ExamReportsModule {
    };
    ExamReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_terminal_report_terminal_report_component__WEBPACK_IMPORTED_MODULE_4__["TerminalReportComponent"], _merit_stage_merit_stage_component__WEBPACK_IMPORTED_MODULE_6__["MeritStageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _exam_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExamReportsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ExamReportsModule);
    return ExamReportsModule;
})();



/***/ }),

/***/ "./src/app/components/exams-module/exam-reports/merit-stage/merit-stage.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/exams-module/exam-reports/merit-stage/merit-stage.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109cf1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 700;\n  height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  background: #ffffff;\n  border: 1px solid #d5d0d0;\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 210px;\n  height: 35px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #323c47;\n}\n\n.input {\n  padding: 7px 10px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus,\nselect:focus,\nbutton:focus {\n  outline: none;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.page_heading {\n  color: #334d6e;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.page_heading > p {\n  margin-bottom: 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.brown {\n  background: #f8f8f8;\n  padding: 20px;\n}\n\n.label {\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #2a3039;\n  margin-bottom: 5px;\n}\n\n.label > span {\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #f30f0f;\n}\n\n.mr15 {\n  margin-right: 15px;\n}\n\n.hide_v {\n  visibility: hidden;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 900px;\n    width: 900px;\n  }\n}\n\n.modal-body {\n  padding: 0px;\n}\n\n.head-gradient {\n  background: linear-gradient(90deg, #04498a 19.01%, #52c8e6 94.66%);\n  padding: 1% 7%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.mr20 {\n  margin-right: 20px;\n}\n\n.head-gradient h1 {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #ffffff;\n  margin-bottom: 0px;\n}\n\n.school-name {\n  padding: 1% 7%;\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.school-name > div:last-child {\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n\n.school-name span {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.details {\n  display: flex;\n}\n\n.details > div:first-child {\n  padding: 2% 4%;\n  width: 45%;\n  border-right: 1px solid #ebeff2;\n}\n\n.details > div:last-child {\n  display: flex;\n  width: 55%;\n}\n\n.details h1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.details p {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 10px;\n  letter-spacing: 0.01em;\n  color: #727679;\n}\n\n.details p > span {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #727679;\n}\n\n.details > div:last-child > div:first-child {\n  width: 50%;\n  padding: 20px 30px;\n}\n\n.details > div:last-child > div:nth-child(2) {\n  width: 50%;\n  padding: 20px 0px;\n  padding-right: 30px;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.blue_gradient {\n  background: linear-gradient(90deg, #0fa9ff -8.88%, rgba(196, 196, 196, 0) 119.56%);\n  padding: 1% 7%;\n}\n\n.blue_gradient > h1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  margin-bottom: 0px;\n  letter-spacing: 0.01em;\n  color: #ffffff;\n}\n\ntable {\n  margin: 0% 7%;\n  width: 86%;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid #e1e1e1;\n  border-collapse: collapse;\n  padding: 10px 0px;\n  /*  text-align: left;\n    padding-left: 20px;*/\n}\n\n.table1 thead {\n  text-align: center;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.table1 tbody td {\n  text-align: left;\n  padding-left: 20px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n  width: calc(100% / 6);\n}\n\n.table2 thead {\n  background: #f8f8f8;\n}\n\n.table2 thead td {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n  text-align: center;\n}\n\n.table2 thead .tr2 td {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.table2 tbody td {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  text-align: left;\n  padding-left: 10px;\n  color: #333333;\n}\n\n.table2 tbody .blue {\n  background: #b6edff;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n  text-align: left;\n  padding-left: 10px;\n}\n\n.icon {\n  height: 23px;\n  width: auto;\n}\n\n.icon1 {\n  height: 19px;\n  width: auto;\n}\n\n.table1 tbody td.centeralign {\n  text-align: center;\n  padding-left: 0px;\n}\n\n#myModal {\n  top: 10%;\n  left: 22%;\n}\n\n.subRow {\n  width: 50%;\n  float: left;\n}\n\n.subBorder {\n  border: 1px solid #e1e1e1;\n  border-collapse: collapse;\n  padding: 10px 0px;\n}\n\n.madSub {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-right: none;\n}\n\n.optSub {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leGFtcy1tb2R1bGUvZXhhbS1yZXBvcnRzL21lcml0LXN0YWdlL21lcml0LXN0YWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQUNmOztBQUNBO0VBQ0ksb0NBQW9DO0FBRXhDOztBQUFBO0VBQ0ksYUFBYTtBQUdqQjs7QUFEQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUluQjs7QUFGQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQUtsQjs7QUFIQTtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFNaEI7O0FBSkE7OztFQUdJLGFBQWE7QUFPakI7O0FBSkE7RUFDSSxpQkFBaUI7RUFDakIsK0NBQStDO0VBQy9DLHVEQUF1RDtFQUN2RCxvREFBb0Q7QUFPeEQ7O0FBTEE7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCO0FBUXBCOztBQUxBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBUW5COztBQU5BO0VBQ0ksa0JBQWtCO0FBU3RCOztBQVBBO0VBQ0ksa0JBQWtCO0FBVXRCOztBQVJBO0VBQ0ksbUJBQW1CO0VBQ25CLGFBQWE7QUFXakI7O0FBVEE7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtBQVl0Qjs7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QjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQWdDdEI7O0FBOUJBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7QUFpQ2Y7O0FBL0JBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7QUFrQ2Y7O0FBaENBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQW1DckI7O0FBakNBO0VBQ0ksUUFBUTtFQUNSLFNBQVM7QUFvQ2I7O0FBOUJFO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFpQ2Y7O0FBL0JFO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFrQ3JCOztBQWhDRTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtBQW1DdEI7O0FBakNFO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBb0NmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leGFtcy1tb2R1bGUvZXhhbS1yZXBvcnRzL21lcml0LXN0YWdlL21lcml0LXN0YWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Y2YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VsZWN0IHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWQwZDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzYzQ3O1xufVxuLmlucHV0IHtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGhlaWdodDogMzVweDtcbn1cbmlucHV0OmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxuYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uaGVhZF9wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4udzk4IHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5wYWdlX2hlYWRpbmcge1xuICAgIGNvbG9yOiAjMzM0ZDZlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBhZ2VfaGVhZGluZyA+IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wYWdlaGVhZGluZ3NwYWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4uYnJvd24ge1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzJhMzAzOTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubGFiZWwgPiBzcGFuIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjZjMwZjBmO1xufVxuLm1yMTUge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5oaWRlX3Yge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIC5tb2RhbC1kaWFsb2cge1xuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICB3aWR0aDogOTAwcHg7XG4gICAgfVxufVxuLm1vZGFsLWJvZHkge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5oZWFkLWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNDQ5OGEgMTkuMDElLCAjNTJjOGU2IDk0LjY2JSk7XG4gICAgcGFkZGluZzogMSUgNyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubXIyMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmhlYWQtZ3JhZGllbnQgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnNjaG9vbC1uYW1lIHtcbiAgICBwYWRkaW5nOiAxJSA3JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuLnNjaG9vbC1uYW1lID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5zY2hvb2wtbmFtZSBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICAgIGNvbG9yOiAjMzMzMzMzO1xufVxuLmRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZGV0YWlscyA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzogMiUgNCU7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlZmYyO1xufVxuLmRldGFpbHMgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNTUlO1xufVxuLmRldGFpbHMgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG4uZGV0YWlscyBwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICAgIGNvbG9yOiAjNzI3Njc5O1xufVxuLmRldGFpbHMgcCA+IHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gICAgY29sb3I6ICM3Mjc2Nzk7XG59XG4uZGV0YWlscyA+IGRpdjpsYXN0LWNoaWxkID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cbi5kZXRhaWxzID4gZGl2Omxhc3QtY2hpbGQgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5ibHVlX2dyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwZmE5ZmYgLTguODglLCByZ2JhKDE5NiwgMTk2LCAxOTYsIDApIDExOS41NiUpO1xuICAgIHBhZGRpbmc6IDElIDclO1xufVxuLmJsdWVfZ3JhZGllbnQgPiBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxudGFibGUge1xuICAgIG1hcmdpbjogMCUgNyU7XG4gICAgd2lkdGg6IDg2JTtcbn1cbnRhYmxlLFxudGgsXG50ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIC8qICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDsqL1xufVxuLnRhYmxlMSB0aGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMzMzMzMztcbn1cbi50YWJsZTEgdGJvZHkgdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG59XG4udGFibGUyIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuLnRhYmxlMiB0aGVhZCB0ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YWJsZTIgdGhlYWQgLnRyMiB0ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG4udGFibGUyIHRib2R5IHRkIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbn1cbi50YWJsZTIgdGJvZHkgLmJsdWUge1xuICAgIGJhY2tncm91bmQ6ICNiNmVkZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmljb24ge1xuICAgIGhlaWdodDogMjNweDtcbiAgICB3aWR0aDogYXV0bztcbn1cbi5pY29uMSB7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuLnRhYmxlMSB0Ym9keSB0ZC5jZW50ZXJhbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuI215TW9kYWwge1xuICAgIHRvcDogMTAlO1xuICAgIGxlZnQ6IDIyJTtcbiAgICAvLyAubW9kYWwtY29udGVudCB7XG4gICAgLy8gICBoZWlnaHQ6IDg1dmg7XG4gICAgLy8gICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC8vIH1cbiAgfVxuICAuc3ViUm93e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLnN1YkJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICB9XG4gIC5tYWRTdWJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICAub3B0U3ViIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/exams-module/exam-reports/merit-stage/merit-stage.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/exams-module/exam-reports/merit-stage/merit-stage.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MeritStageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeritStageComponent", function() { return MeritStageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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




let MeritStageComponent = /** @class */ (() => {
    let MeritStageComponent = class MeritStageComponent {
        constructor(auth, _httpService, _msgService) {
            this.auth = auth;
            this._httpService = _httpService;
            this._msgService = _msgService;
            this.ExamTypeData = [];
            this.standardData = [];
            this.courseList = [];
            this.reportDetails = {};
            this.instituteName = '';
            this.filterObj = {
                standard_id: '-1',
                exam_type: '-1',
                section_id: '-1'
            };
        }
        ngOnInit() {
            this.instituteName = sessionStorage.getItem('institute_name');
            this.getStandard();
            this.getExamType();
        }
        getStandard() {
            let url = "/api/v1/courseMaster/standard-section-list/" + sessionStorage.getItem('institute_id');
            let keys;
            this.auth.showLoader();
            this._httpService.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                console.log(data);
                this.standardData = data.result;
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        updateCourseList(ev) {
            console.log(ev);
            this.courseList = [];
            this.filterObj.section_id = '-1';
            let master_course_obj = this.standardData.filter((standard) => (ev == standard.standard_id));
            this.courseList = master_course_obj[0].section_list;
        }
        getExamType() {
            this.ExamTypeData = [];
            let url = `/api/v1/courseExamSchedule/fetch-exam-type/${sessionStorage.getItem('institute_id')}`;
            this.auth.showLoader();
            this._httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                console.log(res);
                this.ExamTypeData = res.result;
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        checkInputValidations() {
            if (this.filterObj.standard_id == '-1' || this.filterObj.exam_type == '-1' || this.filterObj.section_id == '-1') {
                this._msgService.showErrorMessage('error', '', 'Please select mandatory fields');
                return false;
            }
            return true;
        }
        getReport() {
            if (this.checkInputValidations()) {
                this.auth.showLoader();
                let obj = {
                    course_id: this.filterObj.section_id,
                    exam_type_id: this.filterObj.exam_type
                };
                let url = '/api/v1/StdCourseExam/fetch-student-merit-stage-report/' + sessionStorage.getItem('institute_id');
                this._httpService.postData(url, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this.reportDetails = res.result;
                    $('#myModal').modal('show');
                }, (err) => {
                    this.auth.hideLoader();
                    this._msgService.showErrorMessage('error', '', err.error.message);
                });
            }
        }
        Print() {
            let printContents = document.getElementById('myModal').innerHTML;
            let originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
            window.close();
        }
    };
    MeritStageComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] }
    ];
    MeritStageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-merit-stage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./merit-stage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/exams-module/exam-reports/merit-stage/merit-stage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./merit-stage.component.scss */ "./src/app/components/exams-module/exam-reports/merit-stage/merit-stage.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]])
    ], MeritStageComponent);
    return MeritStageComponent;
})();



/***/ }),

/***/ "./src/app/components/exams-module/exam-reports/terminal-report/terminal-report.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/exams-module/exam-reports/terminal-report/terminal-report.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109cf1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 700;\n  height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  background: #ffffff;\n  border: 1px solid #d5d0d0;\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 210px;\n  height: 35px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #323c47;\n}\n\n.input {\n  padding: 7px 10px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus,\nselect:focus,\nbutton:focus {\n  outline: none;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.page_heading {\n  color: #334d6e;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.page_heading > p {\n  margin-bottom: 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.brown {\n  background: #f8f8f8;\n  padding: 20px;\n}\n\n.label {\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #2a3039;\n  margin-bottom: 5px;\n}\n\n.label > span {\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #f30f0f;\n}\n\n.mr15 {\n  margin-right: 15px;\n}\n\n.hide_v {\n  visibility: hidden;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 900px;\n    width: 900px;\n  }\n}\n\n.modal-body {\n  padding: 0px;\n}\n\n.head-gradient {\n  background: linear-gradient(90deg, #04498a 19.01%, #52c8e6 94.66%);\n  padding: 1% 7%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.mr20 {\n  margin-right: 20px;\n}\n\n.head-gradient h1 {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #ffffff;\n  margin-bottom: 0px;\n}\n\n.school-name {\n  padding: 1% 7%;\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.school-name > div:last-child {\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n\n.school-name span {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.details {\n  display: flex;\n}\n\n.details > div:first-child {\n  padding: 2% 4%;\n  width: 30%;\n  border-right: 1px solid #ebeff2;\n}\n\n.details > div:last-child {\n  display: flex;\n  width: 70%;\n}\n\n.details h1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.details p {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 10px;\n  letter-spacing: 0.01em;\n  color: #727679;\n}\n\n.details p > span {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #727679;\n}\n\n.details > div:last-child > div:first-child {\n  width: 18%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  padding: 20px 30px;\n}\n\n.details > div:last-child > div:nth-child(2) {\n  width: 34%;\n  padding: 20px 0px;\n  padding-right: 30px;\n}\n\n.details > div:last-child > div:nth-child(3),\n.details > div:last-child > div:last-child {\n  width: 24%;\n  padding: 20px 0px;\n  padding-right: 30px;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.blue_gradient {\n  background: linear-gradient(90deg, #0fa9ff -8.88%, rgba(196, 196, 196, 0) 119.56%);\n  padding: 1% 7%;\n}\n\n.blue_gradient > h1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  margin-bottom: 0px;\n  letter-spacing: 0.01em;\n  color: #ffffff;\n}\n\ntable {\n  margin: 0% 7%;\n  width: 86%;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid #e1e1e1;\n  border-collapse: collapse;\n  padding: 10px 0px;\n  text-align: left;\n  padding-left: 20px;\n}\n\n.table1 thead,\n.table2 thead {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.table1 tbody {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.bneg {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #f27706;\n}\n\n.apos {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #2b9d03;\n}\n\n.footer {\n  background: #f8f8f8;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.green {\n  background: #cfff9e;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.orange {\n  background: #ffd4ad;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.table2 tbody {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.attendance {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #109cf1;\n}\n\n.grey {\n  background: #f8f8f8;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.interpretation {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.interpretation_p {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  /* or 154% */\n  letter-spacing: 0.01em;\n  color: #333333;\n}\n\n.interpretation_div {\n  margin: 0% 7%;\n}\n\n.icon {\n  height: 23px;\n  width: auto;\n}\n\n.icon1 {\n  height: 19px;\n  width: auto;\n}\n\n.centeralign {\n  text-align: center;\n  padding-left: 0px;\n}\n\n#myModal {\n  top: 10%;\n  left: 22%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leGFtcy1tb2R1bGUvZXhhbS1yZXBvcnRzL3Rlcm1pbmFsLXJlcG9ydC90ZXJtaW5hbC1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxvQ0FBb0M7QUFFdEM7O0FBQUE7RUFDRSxhQUFhO0FBR2Y7O0FBREE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFJakI7O0FBRkE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFLaEI7O0FBSEE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0FBTWQ7O0FBSkE7OztFQUdFLGFBQWE7QUFPZjs7QUFKQTtFQUNFLGlCQUFpQjtFQUNqQiwrQ0FBK0M7RUFDL0MsdURBQXVEO0VBQ3ZELG9EQUFvRDtBQU90RDs7QUFMQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFRbEI7O0FBTEE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFRakI7O0FBTkE7RUFDRSxrQkFBa0I7QUFTcEI7O0FBUEE7RUFDRSxrQkFBa0I7QUFVcEI7O0FBUkE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQVdmOztBQVRBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7QUFZ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QTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUVBLHNCQUFzQjtFQUV0QixjQUFjO0FBdUJoQjs7QUFyQkE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFFQSxzQkFBc0I7RUFFdEIsY0FBYztBQXNCaEI7O0FBcEJBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFDQSxzQkFBc0I7RUFDdEIsY0FBYztBQXVCaEI7O0FBckJBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNEJBQUE7RUFFQSxzQkFBc0I7RUFFdEIsY0FBYztBQXNCaEI7O0FBcEJBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUFBO0VBRUEsc0JBQXNCO0VBRXRCLGNBQWM7QUFxQmhCOztBQW5CQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUFBO0VBRUEsc0JBQXNCO0VBRXRCLGNBQWM7QUFvQmhCOztBQWxCQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQUE7RUFFQSxzQkFBc0I7RUFFdEIsY0FBYztBQW1CaEI7O0FBakJBO0VBQ0UsYUFBYTtBQW9CZjs7QUFsQkE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQXFCYjs7QUFuQkE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQXNCYjs7QUFwQkE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBdUJuQjs7QUFyQkE7RUFDRSxRQUFRO0VBQ1IsU0FBUztBQXdCWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXMtbW9kdWxlL2V4YW0tcmVwb3J0cy90ZXJtaW5hbC1yZXBvcnQvdGVybWluYWwtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMHB4O1xufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJsdWVfYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOWNmMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA5cHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VsZWN0IHtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQwZDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDIxMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzIzYzQ3O1xufVxuLmlucHV0IHtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5pbnB1dDpmb2N1cyxcbnNlbGVjdDpmb2N1cyxcbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5oZWFkX3BhZGRpbmcge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4udzk4IHtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLnBhZ2VfaGVhZGluZyB7XG4gIGNvbG9yOiAjMzM0ZDZlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucGFnZV9oZWFkaW5nID4gcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5wYWdlaGVhZGluZ3NwYWNlIHtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLmJyb3duIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMmEzMDM5O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubGFiZWwgPiBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNmMzBmMGY7XG59XG4ubXIxNSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5oaWRlX3Yge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICB3aWR0aDogOTAwcHg7XG4gIH1cbn1cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmhlYWQtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNDQ5OGEgMTkuMDElLCAjNTJjOGU2IDk0LjY2JSk7XG4gIHBhZGRpbmc6IDElIDclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubXIyMCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5oZWFkLWdyYWRpZW50IGgxIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zY2hvb2wtbmFtZSB7XG4gIHBhZGRpbmc6IDElIDclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbn1cbi5zY2hvb2wtbmFtZSA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uc2Nob29sLW5hbWUgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzMzMzMzMztcbn1cbi5kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kZXRhaWxzID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZzogMiUgNCU7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVmZjI7XG59XG4uZGV0YWlscyA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDcwJTtcbn1cbi5kZXRhaWxzIGgxIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmRldGFpbHMgcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICM3Mjc2Nzk7XG59XG4uZGV0YWlscyBwID4gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzcyNzY3OTtcbn1cbi5kZXRhaWxzID4gZGl2Omxhc3QtY2hpbGQgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMTglO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuLmRldGFpbHMgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdjpudGgtY2hpbGQoMikge1xuICB3aWR0aDogMzQlO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbi5kZXRhaWxzID4gZGl2Omxhc3QtY2hpbGQgPiBkaXY6bnRoLWNoaWxkKDMpLFxuLmRldGFpbHMgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDI0JTtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmJsdWVfZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwZmE5ZmYgLTguODglLCByZ2JhKDE5NiwgMTk2LCAxOTYsIDApIDExOS41NiUpO1xuICBwYWRkaW5nOiAxJSA3JTtcbn1cbi5ibHVlX2dyYWRpZW50ID4gaDEge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICNmZmZmZmY7XG59XG50YWJsZSB7XG4gIG1hcmdpbjogMCUgNyU7XG4gIHdpZHRoOiA4NiU7XG59XG50YWJsZSxcbnRoLFxudGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLnRhYmxlMSB0aGVhZCxcbi50YWJsZTIgdGhlYWQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICMzMzMzMzM7XG59XG4udGFibGUxIHRib2R5IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmJuZWcge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogI2YyNzcwNjtcbn1cbi5hcG9zIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMmI5ZDAzO1xufVxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzMzMzMzMztcbn1cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICNjZmZmOWU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzMzMzMzMztcbn1cbi5vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmZkNGFkO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICMzMzMzMzM7XG59XG4udGFibGUyIHRib2R5IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uYXR0ZW5kYW5jZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzEwOWNmMTtcbn1cbi5ncmV5IHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmludGVycHJldGF0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmludGVycHJldGF0aW9uX3Age1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAvKiBvciAxNTQlICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzMzMzMzMztcbn1cbi5pbnRlcnByZXRhdGlvbl9kaXYge1xuICBtYXJnaW46IDAlIDclO1xufVxuLmljb24ge1xuICBoZWlnaHQ6IDIzcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmljb24xIHtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogYXV0bztcbn1cbi5jZW50ZXJhbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4jbXlNb2RhbCB7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAyMiU7XG4gIC8vIC5tb2RhbC1jb250ZW50IHtcbiAgLy8gICBoZWlnaHQ6IDg1dmg7XG4gIC8vICAgb3ZlcmZsb3cteTogYXV0bztcbiAgLy8gfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/exams-module/exam-reports/terminal-report/terminal-report.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/exams-module/exam-reports/terminal-report/terminal-report.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TerminalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalReportComponent", function() { return TerminalReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
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




let TerminalReportComponent = /** @class */ (() => {
    let TerminalReportComponent = class TerminalReportComponent {
        constructor(auth, _httpService, _msgService) {
            this.auth = auth;
            this._httpService = _httpService;
            this._msgService = _msgService;
            this.ExamTypeData = [];
            this.standardData = [];
            this.courseList = [];
            this.studentList = [];
            this.reportDetails = {};
            this.filterObj = {
                standard_id: '-1',
                exam_type: '-1',
                section_id: '-1',
                student_id: '-1'
            };
        }
        ngOnInit() {
            this.getStandard();
            this.getExamType();
        }
        getStandard() {
            let url = "/api/v1/courseMaster/standard-section-list/" + sessionStorage.getItem('institute_id');
            let keys;
            this.auth.showLoader();
            this._httpService.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                console.log(data);
                this.standardData = data.result;
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        updateCourseList(ev) {
            console.log(ev);
            this.courseList = [];
            this.filterObj.section_id = '-1';
            let master_course_obj = this.standardData.filter((standard) => (ev == standard.standard_id));
            this.courseList = master_course_obj[0].section_list;
        }
        getExamType() {
            this.ExamTypeData = [];
            let url = `/api/v1/courseExamSchedule/fetch-exam-type/${sessionStorage.getItem('institute_id')}`;
            this.auth.showLoader();
            this._httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                console.log(res);
                this.ExamTypeData = res.result;
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        checkInputValidations() {
            if (this.filterObj.standard_id == '-1' || this.filterObj.exam_type == '-1' || this.filterObj.section_id == '-1') {
                this._msgService.showErrorMessage('error', '', 'Please select mandatory fields');
                return false;
            }
            return true;
        }
        getReport() {
            if (this.checkInputValidations()) {
                this.auth.showLoader();
                let obj = {
                    course_id: this.filterObj.section_id,
                    exam_type_id: this.filterObj.exam_type
                };
                if (this.filterObj.student_id != '-1') {
                    obj.student_id = this.filterObj.student_id;
                }
                let url = '/api/v1/StdCourseExam/fetch-student-terminal-report/' + sessionStorage.getItem('institute_id');
                this._httpService.postData(url, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this.reportDetails = res.result;
                    if (this.reportDetails && this.reportDetails.length) {
                        this.reportDetails.forEach(report => {
                            if (report.subject_list && report.subject_list.length) {
                                report.new_marks_dist_list = report.subject_list[0].marks_dist_list;
                            }
                        });
                    }
                    $('#myModal').modal('show');
                }, (err) => {
                    this.auth.hideLoader();
                    this._msgService.showErrorMessage('error', '', err.error.message);
                });
            }
        }
        getStudentList() {
            let url = '/api/v1/studentBatchMap/manageBatchStudent/' + sessionStorage.getItem('institute_id');
            let obj = { "course_id": this.filterObj.section_id, "master_course_name": "" };
            this.studentList = [];
            this.auth.showLoader();
            this._httpService.postData(url, obj).subscribe((res) => {
                this.auth.hideLoader();
                console.log(res);
                this.studentList = res;
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        Print() {
            var printContents = document.getElementById('reportId').innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        }
    };
    TerminalReportComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"] }
    ];
    TerminalReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terminal-report',
            template: __importDefault(__webpack_require__(/*! raw-loader!./terminal-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/exams-module/exam-reports/terminal-report/terminal-report.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./terminal-report.component.scss */ "./src/app/components/exams-module/exam-reports/terminal-report/terminal-report.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"]])
    ], TerminalReportComponent);
    return TerminalReportComponent;
})();



/***/ })

}]);
//# sourceMappingURL=exam-reports-exam-reports-module-es2015.js.map