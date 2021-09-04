(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-fee-module-data-setup-fee-structure-fee-structure-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-structure/fee-structure-add-edit/fee-structure-add-edit.component.html":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-structure/fee-structure-add-edit/fee-structure-add-edit.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureAddEditFeeStructureAddEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"head_padding\">\n        <div class=\"w98\">\n            <div class=\"page_heading\">\n                <p>New Structure</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"w98\">\n        <div class=\"padding1\" *ngIf=\"!isTemplateNotLinkWithCourseAndStandard\">\n            <select class=\"select wid240 mr10\" *ngIf=\"isLangInstitute || schoolModel\"\n                [(ngModel)]=\"addNewTemplate.master_course_name\" name=\"masterCourse\"\n                (ngModelChange)=\"onMasterCourseSelection()\">\n                <option value=\"-1\">{{schoolModel?'Standard':'Master Course'}}</option>\n                <option *ngFor=\"let opt of masterCourseList\" [value]=\"opt.standard_id\">\n                    {{opt.standard_name}}\n                </option>\n            </select>\n            <select class=\"select wid240 mr10\" *ngIf=\"isLangInstitute\" [(ngModel)]=\"addNewTemplate.course_id\"\n                name=\"CourseDdn\">\n                <option value=\"-1\">Course</option>\n                <option *ngFor=\"let opt of CourseList\" [value]=\"opt.subject_id\">\n                    {{opt.subject_name}}\n                </option>\n            </select>\n            <select class=\"select wid240 mr10\" *ngIf=\"!isLangInstitute && !schoolModel\"\n                [(ngModel)]=\"addNewTemplate.master_course_name\" name=\"masterCourseDdn\"\n                (ngModelChange)=\"onMasterCourseSelection()\">\n                <option value=\"-1\">Master Course</option>\n                <option *ngFor=\"let opt of masterCourseList\" [value]=\"opt.master_course\">\n                    {{opt.master_course}}\n                </option>\n            </select>\n            <select class=\"select wid240 mr10\" *ngIf=\"!isLangInstitute && !schoolModel\"\n                [(ngModel)]=\"addNewTemplate.course_id\" name=\"CourseDdn\">\n                <option value=\"-1\">Course</option>\n                <option *ngFor=\"let opt of CourseList.coursesList\" [value]=\"opt.course_id\">\n                    {{opt.course_name}}\n                </option>\n            </select>\n            <select class=\"select wid240 mr10\" *ngIf=\"countryDetails.length >1\" [(ngModel)]=\"addNewTemplate.country_id\"\n                name=\"CourseCountry\" (ngModelChange)=\"getCurrencyData($event)\">\n                <option value=\"-1\">Country</option>\n                <option [value]=\"data.id\" *ngFor='let data of countryDetails'>\n                    {{data.country_name}}\n                </option>\n            </select>\n            <input type=\"text\" class=\"input wid240 mr10\" [(ngModel)]=\"addNewTemplate.template_name\" name=\"templateName\"\n                placeholder=\"Fee Structure Name\">\n            <span class=\"right relative\">\n                <span class=\"green_top\">Total Amount{{is_tax_enabled?' (Inc. Of Tax) ':''}}:<span>{{currencySymbol}} {{totalFeeAmount | number}}</span></span>\n                <p class=\"itax\" *ngIf=\"is_tax_enabled\">Tax: {{currencySymbol}} {{totalTax | number}}</p>\n            </span>\n        </div>\n        <div class=\"padding1\" *ngIf=\"isTemplateNotLinkWithCourseAndStandard\">\n            <input type=\"text\" class=\"input wid240 mr10\" [(ngModel)]=\"addNewTemplate.template_name\" name=\"templateName\"\n            placeholder=\"Fee Structure Name\">\n            <select class=\"select wid240 mr10\" *ngIf=\"countryDetails.length >1\" [(ngModel)]=\"addNewTemplate.country_id\"\n                name=\"CourseCountry\" (ngModelChange)=\"getCurrencyData($event)\">\n                <option value=\"-1\">Country</option>\n                <option [value]=\"data.id\" *ngFor='let data of countryDetails'>\n                    {{data.country_name}}\n                </option>\n            </select>\n            <span class=\"right relative\">\n                <span class=\"green_top\">Total Amount{{is_tax_enabled?' (Inc. Of Tax)':''}}:<span>{{currencySymbol}} {{totalFeeAmount | number }}</span></span>\n                <p class=\"itax\" *ngIf=\"is_tax_enabled\">Tax: {{currencySymbol}} {{totalTax | number}}</p>\n            </span>\n        </div>\n        <div class=\"fee_new\">\n            <div class=\"table_heading\">\n                <div>#</div>\n                <div>Fee Type </div>\n                <div>{{(schoolModel || isTemplateNotLinkWithCourseAndStandard)?'Day Of Month':'Trigger Date'}}</div>\n                <div>{{(schoolModel || isTemplateNotLinkWithCourseAndStandard)?'Month':'Day/Month'}}</div>\n                <div *ngIf=\"(schoolModel || isTemplateNotLinkWithCourseAndStandard)\">Year</div>\n                <div><span>Total Fees <span class=\"light\">(In {{currencySymbol}})</span></span></div>\n                <div>Action</div>\n            </div>\n            <div *ngFor=\"let data of feeInstalllmentArr; let i=index;\">\n                <div class=\"table_body\">\n                    <div>{{i+1}}</div>\n                    <div>\n                        <select class=\"input wid80 select1\" [(ngModel)]=\"feeInstalllmentArr[i].fee_type_id\"\n                            (ngModelChange)=\"calculateTotalFee()\">\n                            <option value=\"-1\">Fee Type</option>\n                            <option *ngFor=\"let data of feeTypeList\" [value]=\"data.fee_type_id\">\n                                {{data.fee_type | titlecase}}\n                            </option>\n                        </select>\n                    </div>\n                    <div *ngIf=\"schoolModel || isTemplateNotLinkWithCourseAndStandard\">\n                        <select class=\"input wid80 select2\" [(ngModel)]=\"feeInstalllmentArr[i].day\">\n                            <option value=\"-1\">Day</option>\n                            <option *ngFor=\"let day of dayOfmonth\" [value]=\"day\">{{day}}</option>\n                        </select>\n                    </div>\n                    <div *ngIf=\"!schoolModel && !isTemplateNotLinkWithCourseAndStandard\">\n                        <select style=\"width: 90%;\" class=\"input wid80 select2\" [(ngModel)]=\"feeInstalllmentArr[i].day_type\"\n                            (ngModelChange)=\"changesValuesAsPerType($event,i)\">\n                            <option value=\"-1\">Trigger Date</option>\n                            <option value=\"1\">Course Assign Date (CAD)</option>\n                            <option value=\"2\">No of days after CAD</option>\n                            <option value=\"3\">No of Month after CAD</option>\n                        </select>\n                    </div>\n                    <div *ngIf=\"schoolModel || isTemplateNotLinkWithCourseAndStandard\">\n                        <select class=\"input wid80 select2\" [(ngModel)]=\"feeInstalllmentArr[i].month\">\n                            <option value=\"-1\">Month</option>\n                            <option *ngFor=\"let mon of months\" [value]=\"mon.id\">{{mon.value}}</option>\n                        </select>\n                    </div>\n                    <div *ngIf=\"schoolModel || isTemplateNotLinkWithCourseAndStandard\">\n                        <select class=\"input wid80 select2\" [(ngModel)]=\"feeInstalllmentArr[i].year\">\n                            <option value=\"-1\">Year</option>\n                            <option value=\"2020\">2020</option>\n                            <option value=\"2021\">2021</option>\n                            <option value=\"2022\">2022</option>\n                            <option value=\"2023\">2023</option>\n                            <option value=\"2024\">2024</option>\n                            <option value=\"2025\">2025</option>\n                        </select>\n                    </div>\n\n                    <div *ngIf=\"!schoolModel && !isTemplateNotLinkWithCourseAndStandard\">\n                        <input type=\"text\" [disabled]=\"feeInstalllmentArr[i].day_type==1\" [(ngModel)]=\"feeInstalllmentArr[i].day\" placeholder=\"0\"\n                            class=\"input wid80 rrs\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\">\n                    </div>\n                    <div><input type=\"text\" [(ngModel)]=\"feeInstalllmentArr[i].fee_amount\" placeholder=\"00\"\n                            class=\"input wid80 rrs\" (keyup)=\"calculateTotalFee()\"\n                            onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"></div>\n                    <div>\n                        <a (click)=\"addInstallment(i)\" class=\"mr10\"><img src=\"../../../../../assets/images/add.svg\"\n                                class=\"size22 pointer\" title=\"Add\"></a>\n                        <a (click)=\"deleteInstallment(i)\"><img src=\"../../../../../assets/images/Group321.svg\"\n                                class=\"size22 pointer\" title=\"Delete\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- use image only when page is empty,table body class element will not be present -->\n    </div>\n    <div class=\"w98\">\n        <div class=\"save\">\n            <button class=\"blue_button\" (click)=\"createFeeStructure()\">Save</button>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-structure/fee-structure-home/fee-structure-home.component.html":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-structure/fee-structure-home/fee-structure-home.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureHomeFeeStructureHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"w98\">\n        <div class=\"tab-content\">\n            <div id=\"structure\">\n                <div class=\"padding1\">\n                    <input type=\"text\" class=\"input magnifying-glass wid240\" name=\"\" placeholder=\"Search\" [(ngModel)]=\"searchText\" (keyup)=\"searchInList()\">\n                    <a routerLink='/view/fee/data-setup/fee-structure/add'> <button class=\"blue_button right\">New\n                            Structure</button></a>\n                </div>\n                <div class=\"school\">\n                    <div class=\"table_heading\">\n                        <div>Fee Structure</div>\n                        <div *ngIf=\"schoolModel && !isTemplateNotLinkWithCourseAndStandard\">Standard</div>\n                        <div *ngIf=\"!schoolModel && !isTemplateNotLinkWithCourseAndStandard\">Master Course</div>\n                        <div *ngIf=\"!schoolModel && !isTemplateNotLinkWithCourseAndStandard\">Course</div>\n                        <div *ngIf=\"countryDetails.length>1\">Country</div>\n                        <div class=\"flex\">\n                            <div class=\"right wid50\"><span class=\"right\">Total Fees</span></div>\n                            <div class=\"light wid50\"><span class=\"left\"></span></div>\n                        </div>\n                        <!-- <div>Students Assigned</div> -->\n                        <div>Action</div>\n                    </div>\n                    <div class=\"tableHeight\">\n                        <div *ngFor=\"let data of tabkeList\">\n                            <div class=\"table_body\">\n                                <div>{{data.template_name}}</div>\n                                <div *ngIf=\"schoolModel && !isTemplateNotLinkWithCourseAndStandard\"> {{data.standard_name}}\n                                </div>\n                                <div *ngIf=\"!schoolModel && !isTemplateNotLinkWithCourseAndStandard\">\n                                    {{data.master_course_standard_name}}</div>\n                                <div *ngIf=\"!schoolModel && !isTemplateNotLinkWithCourseAndStandard\">\n                                    {{data.course_subject_name}}</div>\n                                <div *ngIf=\"countryDetails.length>1\">{{data.country_name}}</div>\n                                <div class=\"flex\">\n                                    <div class=\"right wid50\"><span class=\"right\">{{data.studentwise_total_fees_amount | number }}</span></div>\n                                    <div class=\"light wid50\"><span class=\"left\"></span></div>\n                                </div>\n                                <!-- <div><a (click)=\"studentsAssigned(data)\" class=\"students_assigned pointer\" data-toggle=\"modal\"\n                                        data-target=\"#myModal\">{{data.totalAssignedStudent}}</a></div> -->\n                                <div>\n                                    <!-- <a class=\"mr10\"><img src=\"../../../../../assets/images/icon7.svg\" title=\"View\"\n                                        class=\"size22\"></a> -->\n                                    <a class=\"mr10\" (click)=\"editFeeStructure(data)\"><img\n                                            src=\"../../../../../assets/images/EDit.png\" title=\"Edit\" class=\"size22 pointer\"></a>\n                                    <a><img src=\"../../../../../assets/images/Group321.svg\"\n                                            (click)=\"deleteFeeStructure(data)\" title=\"Delete\" class=\"size22 pointer\"></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n     <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n        <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n            <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n                [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [count]=\"totalRow\">\n            </pagination>\n        </div>\n    </div>\n</div>\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Students Assigned</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"tableHeight\">\n                    <div class=\"student\">\n                        <div class=\"table_heading\">\n                            <div>Student Id</div>\n                            <div>Student Name</div>\n                        </div>\n                        <div *ngFor=\"let data of studentList\">\n                            <div class=\"table_body\">\n                                <div>{{data.student_disp_id}}</div>\n                                <div>{{data.student_name}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal\" id=\"editFeeStructureModel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\" style=\"width: 144%;\">\n            <div class=\"modal-header\">\n                <h4 style=\"float: left;\" class=\"modal-title\">Edit Fee Structure</h4>\n                <input type=\"text\" [(ngModel)]=\"templateName\" placeholder=\"Fee Structure\"\n                    style=\"width: 45%;margin-left: 10px;\" class=\"input wid80\"/>\n                <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"is_default\" style=\"margin-left: 50px;appearance: checkbox;\"> Is Default\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closePopUp()\">&times;</button>\n            </div>\n            <div class=\"modal-body\" style=\"max-height: 70vh;margin-bottom: 10px;overflow-y: auto;\">\n                <span class=\"right relative\" style=\"margin-bottom: 12px;\">\n                    <span class=\"green_top\">Total Amount{{is_tax_enabled?' (Inc. Of Tax) ':''}}:<span>{{currencySymbol}} {{ totalFeeAmount | number }}</span></span>\n                    <p class=\"itax\" *ngIf=\"is_tax_enabled\">Total Tax: {{currencySymbol}} {{totalTax | number}}</p>\n                </span>\n                <div class=\"fee_new\">\n                    <div class=\"table_heading\">\n                        <div>#</div>\n                        <div>Fee Type </div>\n                        <div>{{(schoolModel || isTemplateNotLinkWithCourseAndStandard)?'Day Of Month':'Trigger Date'}}</div>\n                        <div>{{(schoolModel || isTemplateNotLinkWithCourseAndStandard)?'Month':'Day/Month'}}</div>\n                        <div *ngIf=\"(schoolModel || isTemplateNotLinkWithCourseAndStandard)\">Year</div>\n                        <div><span>Total Fees <span class=\"light\">(In )</span></span></div>\n                        <div>Action</div>\n                    </div>\n                    <div *ngFor=\"let data of feeInstalllmentArr; let i=index;\">\n                        <div class=\"table_body\">\n                            <div>{{i+1}}</div>\n                            <div>\n                                <select class=\"input wid80 select1\" [(ngModel)]=\"feeInstalllmentArr[i].fee_type\"\n                                    (ngModelChange)=\"calculateTotalFee()\">\n                                    <option value=\"-1\">Fee Type</option>\n                                    <option *ngFor=\"let data of feeTypeList\" [value]=\"data.fee_type_id\">\n                                        {{data.fee_type | titlecase}}\n                                    </option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"schoolModel || isTemplateNotLinkWithCourseAndStandard\">\n                                <select class=\"input wid80 select2\" [(ngModel)]=\"feeInstalllmentArr[i].days\">\n                                    <option value=\"-1\">Day</option>\n                                    <option *ngFor=\"let day of dayOfmonth\" [value]=\"day\">{{day}}</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"!schoolModel && !isTemplateNotLinkWithCourseAndStandard\">\n                                <select style=\"width: 100%;\" class=\"input wid80 select2\" [(ngModel)]=\"feeInstalllmentArr[i].day_type\"\n                                    (ngModelChange)=\"changesValuesAsPerType($event,i)\">\n                                    <option value=\"-1\">Trigger Date</option>\n                                    <option value=\"1\">Course Assign Date (CAD)</option>\n                                    <option value=\"2\">No of days after CAD</option>\n                                    <option value=\"3\">No of Month after CAD</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"schoolModel || isTemplateNotLinkWithCourseAndStandard\">\n                                <select class=\"input wid80 select2\" [(ngModel)]=\"feeInstalllmentArr[i].month\">\n                                    <option value=\"-1\">Month</option>\n                                    <option *ngFor=\"let month of months\" [value]=\"month.id\">{{month.value}}\n                                    </option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"schoolModel || isTemplateNotLinkWithCourseAndStandard\">\n                                <select class=\"input wid80 select2\" [(ngModel)]=\"feeInstalllmentArr[i].year\">\n                                    <option value=\"-1\">Year</option>\n                                    <option value=\"2020\">2020</option>\n                                    <option value=\"2021\">2021</option>\n                                    <option value=\"2022\">2022</option>\n                                    <option value=\"2023\">2023</option>\n                                    <option value=\"2024\">2024</option>\n                                    <option value=\"2025\">2025</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"!schoolModel && !isTemplateNotLinkWithCourseAndStandard\">\n                                <input type=\"text\" [readonly]=\"feeInstalllmentArr[i].day_type==1\" [(ngModel)]=\"feeInstalllmentArr[i].days\" placeholder=\"00\"\n                                    class=\"input wid80 rrs\"\n                                    onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\">\n                            </div>\n                            <div><input type=\"text\" [(ngModel)]=\"feeInstalllmentArr[i].fees_amount\" placeholder=\"00\"\n                                    class=\"input wid80 rrs\" (keyup)=\"calculateTotalFee()\"\n                                    onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"></div>\n                            <div>\n                                <a (click)=\"addInstallment(i)\" class=\"mr10\"><img\n                                        src=\"../../../../../assets/images/add.svg\" class=\"size22\" title=\"Add\"></a>\n                                <a (click)=\"deleteInstallment(i)\"><img src=\"../../../../../assets/images/Group321.svg\"\n                                        class=\"size22\" title=\"Delete\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"padding1\" >\n                    <span class=\"right\">\n                        <button class=\"white_button mr10\" (click)=\"closePopUp()\">\n                            Cancel\n                        </button>\n                        <button class=\"blue_button \" (click)=\"updateFeeStructure()\">\n                            Save\n                        </button>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-structure/fee-structure.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-structure/fee-structure.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-add-edit/fee-structure-add-edit.component.scss":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-structure/fee-structure-add-edit/fee-structure-add-edit.component.scss ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureAddEditFeeStructureAddEditComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 10px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n/*swiching tabs*/\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 2rem;\n  margin-left: 0rem;\n}\n\n.head_padding {\n  padding-bottom: 15px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.fee_types .table_heading > div {\n  width: calc(100%  / 4);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 40px;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 40px;\n}\n\n.fee_types .table_body > div {\n  width: calc(100% / 4);\n}\n\n.discount .table_heading > div {\n  width: calc(100% / 3);\n}\n\n.discount .table_body > div {\n  width: calc(100% / 3);\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 345px;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n}\n\n.feestruc .table_heading > div {\n  width: calc(100% / 4);\n}\n\n.feestruc .table_body > div {\n  width: calc(100% / 4);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.magnifying-glass {\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.padding1 {\n  margin-top: 20px;\n}\n\n.text {\n  color: #8A8B8B;\n  font-weight: 300;\n  font-size: 24px;\n}\n\n.position {\n  position: relative;\n  left: 13%;\n}\n\n.center {\n  text-align: center;\n}\n\n.dummy_text {\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.dummy_text > p {\n  width: 600px;\n  color: #61758E;\n}\n\n.school .table_heading > div {\n  width: calc(100% / 6);\n}\n\n.school .table_body > div {\n  width: calc(100% / 6);\n}\n\n.tution .table_heading > div {\n  width: calc(100% / 5);\n}\n\n.tution .table_body > div {\n  width: calc(100% / 5);\n}\n\n.fee_new .table_heading > div {\n  width: calc((100% - 450px) /3);\n}\n\n.fee_new .table_body > div {\n  width: calc((100% - 450px) / 3);\n  padding: 0px 0px;\n  margin: 0px;\n  margin-bottom: 10px;\n}\n\n.fee_new .table_heading > div:nth-child(2) {\n  width: 300px;\n}\n\n.fee_new .table_body > div:nth-child(2) {\n  width: 300px;\n}\n\n.fee_new .table_heading > div:first-child {\n  width: 50px;\n}\n\n.fee_new .table_body > div:first-child {\n  width: 50px;\n}\n\n.fee_new .table_heading > div:last-child, .fee_new .table_body > div:last-child {\n  width: 100px;\n}\n\n.wid80 {\n  width: 75%;\n  margin: auto;\n}\n\n.rrs::-webkit-input-placeholder {\n  text-align: right;\n}\n\n.select1 {\n  color: #8e8f90;\n  line-height: 20px;\n}\n\n.select2 {\n  color: #8e8f90;\n  line-height: 20px;\n}\n\n.img {\n  width: 100%;\n  height: auto;\n}\n\n.wid240 {\n  width: 200px;\n}\n\n.green_top {\n  padding: 5px 32px;\n  background: linear-gradient(92.13deg, #19bb3c 71.19%, #90d73e 103.74%);\n  border-radius: 5px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n\n.green_top > span {\n  padding-left: 10px;\n}\n\n.itax {\n  padding-top: 8px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: right;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.relative {\n  position: relative;\n}\n\n.installments {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.info {\n  padding: 0px 4px;\n  color: #109CF1;\n}\n\n.save {\n  width: 100%;\n  background-color: #fff;\n}\n\n.save > button {\n  position: fixed;\n  right: 15px;\n  bottom: 10px;\n}\n\n.fee_new {\n  max-height: 55vh;\n  overflow-y: auto;\n  width: 100%;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.page_heading > p {\n  margin-bottom: 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.light {\n  font-weight: 500;\n  padding-left: 5px;\n}\n\n.indent {\n  float: left;\n  padding-left: 3.7rem;\n}\n\n.left {\n  float: left;\n}\n\n.wid50 {\n  width: 50%;\n}\n\n.student .table_heading > div {\n  width: calc(100% / 2);\n}\n\n.student .table_body > div {\n  width: calc(100% / 2);\n}\n\n.size22 {\n  height: auto;\n  width: 18px;\n}\n\n.select3 {\n  color: #8e8f90;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url('arrow-down.svg');\n  background-repeat: no-repeat;\n  background-position: 430px center;\n  line-height: 20px;\n}\n\n.right {\n  float: right;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlLXN0cnVjdHVyZS9mZWUtc3RydWN0dXJlLWFkZC1lZGl0L2ZlZS1zdHJ1Y3R1cmUtYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FBQ2Y7O0FBQ0U7RUFDRSxvQ0FBb0M7QUFFeEM7O0FBQUU7RUFDRSxhQUFhO0FBR2pCOztBQURFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFJbkI7O0FBRkc7RUFDQyxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBS2xCOztBQUVFO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNoQjs7QUFDRztFQUNJLGFBQWE7QUFFcEI7O0FBQUcsZ0JBQUE7O0FBQ0Q7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFDSjtBQUVGOztBQUFFO0VBQ00sMkNBQTJDO0VBQzdDLHlCQUF5QjtBQUcvQjs7QUFERTtFQUNJLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUl2Qjs7QUFGRTtFQUNFLG9CQUFvQjtFQUNwQiwrQ0FBNEM7RUFDMUMsdURBQW9EO0VBQ3BELG9EQUFpRDtBQUt2RDs7QUFIRTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFNcEI7O0FBSkU7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQzFCLHNCQUFBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7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RUFDRSxXQUFXO0FBbURmOztBQWpERTtFQUNFLFVBQVU7QUFvRGQ7O0FBbERFO0VBQ0UscUJBQXFCO0FBcUR6Qjs7QUFuREU7RUFDRSxxQkFBcUI7QUFzRHpCOztBQXBERTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBdURmOztBQXJERTtFQUNFLGNBQWE7RUFDVCx3QkFBd0I7RUFDNUIscUJBQXFCO0VBQ3JCLHVDQUFxRTtFQUNyRSw0QkFBNEI7RUFDNUIsaUNBQWdDO0VBQ2hDLGlCQUFpQjtBQXdEckI7O0FBdERFO0VBQ0ksWUFBWTtBQXlEbEI7O0FBdkRFO0VBQ0UsZUFBZTtBQTBEbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZlZS1tb2R1bGUvZGF0YS1zZXR1cC9mZWUtc3RydWN0dXJlL2ZlZS1zdHJ1Y3R1cmUtYWRkLWVkaXQvZmVlLXN0cnVjdHVyZS1hZGQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgYm9keXtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuYmx1ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICAuc2VsZWN0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gICAgLy8gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAvLyAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9hcnJvdy1kb3duLnN2Z1wiKTtcbiAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246MjEwcHggY2VudGVyO1xuICB9XG4gIC5pbnB1dHtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB9XG4gICBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiAgICAgICBvdXRsaW5lOiBub25lO1xuICAgfVxuICAgLypzd2ljaGluZyB0YWJzKi9cbiAgLm5hdi1pdGVtIC5uYXYtbGlua3tcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHhcbiAgfVxuICBcbiAgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOUNGMSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMxMDlDRjEgIWltcG9ydGFudDtcbiAgfVxuICAubmF2LWxpbmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcbiAgICAgIG1hcmdpbjogLTFyZW0gMnJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICB9XG4gIC5oZWFkX3BhZGRpbmd7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgfVxuICAudzk4e1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgLyogcGFkZGluZzogMTBweCAwcHg7Ki9cbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICAuZmVlX3R5cGVzIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlICAvIDQpO1xuICB9XG4gIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICBsaW5lLWhlaWdodDogNDBweDtcbiAgfVxuICBcbiAgLnRhYmxlX2JvZHl7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC50YWJsZV9ib2R5PmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4MDdDN0M7XG4gICAvKiBwYWRkaW5nOiA1cHggMHB4OyovXG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIFxuICB9XG4gIC5mZWVfdHlwZXMgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcbiAgfVxuICBcbiAgLmRpc2NvdW50IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XG4gIH1cbiAgLmRpc2NvdW50IC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gcHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHNlbGVjdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDA3OUZGO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NTB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NDB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAubnVtYmVye1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjowcHggNHB4O1xuICB9XG4gIC5hY3RpdmVfY2lyY2xle1xuICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOjJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwNzlGRjtcbiAgfVxuICAubmV4dHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwNzlGRjtcbiAgXG4gIH1cbiAgLnc0NTB7XG4gICAgd2lkdGg6IDM0NXB4O1xuICB9XG4gIC5tb2RhbC10aXRsZXtcbiAgICBjb2xvcjogIzJCMjYyNjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAud2hpdGVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC53MTAwe1xuICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1vZGFsIHRleHRhcmVhe1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZlZXN0cnVjIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNCk7XG4gIH1cbiAgLmZlZXN0cnVjIC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNCk7XG4gIH1cbiAgLm1yMTB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5tYWduaWZ5aW5nLWdsYXNze1xuICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVlL3N2Zyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQgY2VudGVyO1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICB9XG4gIC5wYWRkaW5nMXtcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAudGV4dHtcbiAgICBjb2xvcjogIzhBOEI4QjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAucG9zaXRpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6MTMlO1xuICB9XG4gIC5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5kdW1teV90ZXh0e1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZHVtbXlfdGV4dD5we1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBjb2xvcjogIzYxNzU4RTtcbiAgfVxuICAuc2Nob29sIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIH1cbiAgLnNjaG9vbCAudGFibGVfYm9keT5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xuICB9XG4gIC50dXRpb24gLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgfVxuICAudHV0aW9uIC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gIH1cbiAgLmZlZV9uZXcgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNDUwcHgpIC8zKTtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfYm9keT5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA0NTBweCkgLyAzKTtcbiAgICAgcGFkZGluZzogMHB4IDBweDtcbiAgICBtYXJnaW46IDBweDsgXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDIpe1xuICAgIHdpZHRoOiAzMDBweCA7XG4gIH1cbiAgLmZlZV9uZXcgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgyKXtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgLmZlZV9uZXcgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4IDtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLmZlZV9uZXcgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLmZlZV9uZXcgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDEwMHB4IDtcbiAgfVxuICAud2lkODB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLnJyczo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IHRleHQtYWxpZ246cmlnaHQ7IH1cbiAgLnNlbGVjdDF7XG4gICAgY29sb3I6IzhlOGY5MDtcbiAgICAvLyAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC8vIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2Fycm93LWRvd24uc3ZnXCIpO1xuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjoyMDBweCBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLnNlbGVjdDJ7XG4gICAgY29sb3I6IzhlOGY5MDtcblxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYXJyb3ctZG93bi5zdmdcIik7XG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOjgycHggY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC53aWQyNDB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5ncmVlbl90b3B7XG4gICAgcGFkZGluZzogNXB4IDMycHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkyLjEzZGVnLCAjMTliYjNjIDcxLjE5JSwgIzkwZDczZSAxMDMuNzQlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIFxuICB9XG4gIC5ncmVlbl90b3A+c3BhbntcbiAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuaXRheHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICBcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICBcbiAgfVxuICAucmVsYXRpdmV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5pbnN0YWxsbWVudHN7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgfVxuICAuaW5mb3tcbiAgICBwYWRkaW5nOiAwcHggNHB4O1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICB9XG4gIC5zYXZle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyBib3R0b206IDQ3cHg7XG4gICAgLy8gei1pbmRleDogMTAwO1xuICAgIC8vIGhlaWdodDogNjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC5zYXZlPmJ1dHRvbntcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxMHB4O1xuICB9XG4gIC5mZWVfbmV3e1xuICAgIG1heC1oZWlnaHQ6IDU1dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucGFnZV9oZWFkaW5nPnB7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnBhZ2VfaGVhZGluZz5we1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAucGFnZWhlYWRpbmdzcGFjZXtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbiAgLmxpZ2h0e1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgLmluZGVudHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMy43cmVtO1xuICB9XG4gIC5sZWZ0e1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC53aWQ1MHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5zdHVkZW50IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMik7XG4gIH1cbiAgLnN0dWRlbnQgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcbiAgfVxuICAuc2l6ZTIye1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMThweDtcbiAgfVxuICAuc2VsZWN0M3tcbiAgICBjb2xvcjojOGU4ZjkwO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVlL2Fycm93LWRvd24uc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjo0MzBweCBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLnJpZ2h0e1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5wb2ludGVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-add-edit/fee-structure-add-edit.component.ts":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-structure/fee-structure-add-edit/fee-structure-add-edit.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: FeeStructureAddEditComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureAddEditFeeStructureAddEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeStructureAddEditComponent", function () {
        return FeeStructureAddEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/feeStruc.service */
      "./src/app/services/feeStruc.service.ts");

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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }; //import CommonUtils from '../../../../../utils/commonUtils';


      var FeeStructureAddEditComponent =
      /** @class */
      function () {
        var FeeStructureAddEditComponent = /*#__PURE__*/function () {
          function FeeStructureAddEditComponent(apiService, route, auth, commonService, http) {
            _classCallCheck(this, FeeStructureAddEditComponent);

            this.apiService = apiService;
            this.route = route;
            this.auth = auth;
            this.commonService = commonService;
            this.http = http;
            this.dayOfmonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
            this.months = [{
              id: 1,
              value: 'Jan'
            }, {
              id: 2,
              value: 'Feb'
            }, {
              id: 3,
              value: 'Mar'
            }, {
              id: 4,
              value: 'Apr'
            }, {
              id: 5,
              value: 'May'
            }, {
              id: 6,
              value: 'Jun'
            }, {
              id: 7,
              value: 'Jul'
            }, {
              id: 8,
              value: 'Aug'
            }, {
              id: 9,
              value: 'Sep'
            }, {
              id: 10,
              value: 'Oct'
            }, {
              id: 11,
              value: 'Nov'
            }, {
              id: 12,
              value: 'Dec'
            }];
            this.monthValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.feeInstalllmentArr = [];
            this.newInstallment = {};
            this.schoolModel = false;
            this.is_tax_enabled = false;
            this.countryDetails = [];
            this.masterCourseList = [];
            this.CourseList = [];
            this.addNewTemplate = {
              template_name: '',
              fee_amount: "",
              master_course_name: '-1',
              course_id: -1,
              tax_type: "inclusive",
              apply_tax: false,
              tax_amount: 0,
              total_fee: 0,
              installmentCount: '',
              is_default_template: false,
              country_id: -1
            };
            this.feeInstallments = [];
            this.feeTypeList = [];
            this.defultFeeTypes = -1;
            this.showMonthDropDown = false;
            this.defultCountryId = -1;
            this.totalFeeAmount = 0;
            this.currencySymbol = "";
            this.totalTax = 0;
            this.taxPrecent = 0;
            this.isTemplateNotLinkWithCourseAndStandard = false;
          }

          _createClass(FeeStructureAddEditComponent, [{
            key: "createInstallmentGrid",
            value: function createInstallmentGrid() {
              this.newInstallment = {
                installment_no: 1,
                fee_type_id: this.defultFeeTypes,
                month: this.schoolModel || this.isTemplateNotLinkWithCourseAndStandard ? 1 : 0,
                day: this.schoolModel || this.isTemplateNotLinkWithCourseAndStandard ? 1 : 0,
                fee_amount: 0,
                day_type: this.schoolModel || this.isTemplateNotLinkWithCourseAndStandard ? 4 : 1,
                year: this.schoolModel || this.isTemplateNotLinkWithCourseAndStandard ? 2021 : 0
              };
              this.feeInstalllmentArr.push(this.newInstallment);
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.schoolModel = this.auth.schoolModel.value;
              this.institute_id = sessionStorage.getItem("institute_id");
              this.is_tax_enabled = sessionStorage.getItem("enable_tax_applicable_fee_installments") == '1' ? true : false;
              this.isTemplateNotLinkWithCourseAndStandard = sessionStorage.getItem("is_fee_struct_linked") == 'true' ? false : true;
              this.checkModel();
              this.getCountryDetails();
              this.getAllMasterCourseList();
              this.getInstituteFeeTypes();
            }
          }, {
            key: "checkModel",
            value: function checkModel() {
              var _this = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == 'LANG') {
                  _this.isLangInstitute = true;
                  _this.moduleState = 'Batch';
                } else {
                  _this.isLangInstitute = false;
                  _this.moduleState = 'Course';
                }
              });
            }
          }, {
            key: "getCountryDetails",
            value: function getCountryDetails() {
              var encryptedData = sessionStorage.getItem('country_data');
              var data = JSON.parse(encryptedData);

              if (data.length > 0) {
                this.countryDetails = data;

                var _iterator = _createForOfIteratorHelper(this.countryDetails),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _data = _step.value;

                    if (_data.is_default == "Y") {
                      this.defultCountryId = _data.id;
                      this.addNewTemplate.country_id = _data.id;
                      this.currencySymbol = _data.currency_code;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            }
          }, {
            key: "getAllMasterCourseList",
            value: function getAllMasterCourseList() {
              var _this2 = this;

              this.auth.showLoader();

              if (this.isLangInstitute || this.schoolModel) {
                this.apiService.getAllStandard().subscribe(function (res) {
                  _this2.masterCourseList = res;

                  _this2.auth.hideLoader();
                }, function (err) {
                  _this2.auth.hideLoader();

                  _this2.commonService.showErrorMessage('error', '', err.error.message);
                });
              } else {
                this.fetchMCAndCourse();
              }
            }
          }, {
            key: "fetchMCAndCourse",
            value: function fetchMCAndCourse() {
              var _this3 = this;

              this.auth.showLoader();
              var url = "/api/v1/courseMaster/fetch/" + this.institute_id + "/all?isActiveNotExpire=Y";
              this.http.getData(url).subscribe(function (res) {
                _this3.masterCourseList = res;

                _this3.auth.hideLoader();
              }, function (err) {
                _this3.commonService.showErrorMessage('error', '', err.error.message);

                _this3.auth.hideLoader();
              });
            }
          }, {
            key: "addInstallment",
            value: function addInstallment(i) {
              this.newInstallment = {
                installment_no: i + 2,
                fee_type_id: this.feeInstalllmentArr[i].fee_type_id,
                month: this.feeInstalllmentArr[i].month,
                day: this.feeInstalllmentArr[i].day,
                fee_amount: this.feeInstalllmentArr[i].fee_amount,
                day_type: this.feeInstalllmentArr[i].day_type,
                year: this.feeInstalllmentArr[i].year
              };
              this.totalFeeAmount = this.totalFeeAmount + Number(this.feeInstalllmentArr[i].fee_amount);
              this.totalTax = this.totalTax + this.calculateTax(this.feeInstalllmentArr[i].fee_amount, this.feeInstalllmentArr[i].fee_type_id);
              this.feeInstalllmentArr.push(this.newInstallment);
            }
          }, {
            key: "deleteInstallment",
            value: function deleteInstallment(index) {
              if (this.feeInstalllmentArr.length == 1) {
                this.commonService.showErrorMessage('info', '', "You can't delete!");
                return false;
              } else {
                this.totalFeeAmount = this.totalFeeAmount - Number(this.feeInstalllmentArr[index].fee_amount);
                this.totalTax = this.totalTax - this.calculateTax(this.feeInstalllmentArr[index].fee_amount, this.feeInstalllmentArr[index].fee_type_id);
                this.feeInstalllmentArr.splice(index, 1);
                return true;
              }
            }
          }, {
            key: "onMasterCourseSelection",
            value: function onMasterCourseSelection() {
              var _this4 = this;

              this.CourseList = [];

              if (this.addNewTemplate.master_course_name != "-1") {
                if (this.isLangInstitute) {
                  this.apiService.getCoursesOfStandard(this.addNewTemplate.master_course_name).subscribe(function (res) {
                    _this4.CourseList = res;
                  }, function (err) {});
                } else {
                  this.apiService.getCourse(this.addNewTemplate.master_course_name).subscribe(function (res) {
                    _this4.CourseList = res;
                  }, function (err) {
                    _this4.commonService.showErrorMessage('error', '', err.error.message);
                  });
                }
              }
            }
          }, {
            key: "createFeeStructure",
            value: function createFeeStructure() {
              var _this5 = this;

              if (this.validateFeeStructureData()) {
                this.auth.showLoader();
                var data = this.preparedFeeStructureData();
                this.apiService.updateFeeTemplate(data).subscribe(function (res) {
                  _this5.auth.hideLoader();

                  _this5.commonService.showErrorMessage('success', 'Updated', 'Fee Structure created Successfully');

                  _this5.route.navigateByUrl('/view/fee/data-setup/fee-structure/home');
                }, function (err) {
                  _this5.auth.hideLoader();

                  _this5.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "validateFeeStructureData",
            value: function validateFeeStructureData() {
              if (this.addNewTemplate.template_name == '') {
                this.commonService.showErrorMessage('info', '', "Please enter valid Fee Structure name!");
                return;
              }

              if (!this.isTemplateNotLinkWithCourseAndStandard) {
                if (this.schoolModel && Number(this.addNewTemplate.master_course_name) < 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid standard!");
                  return;
                } else if (!this.isLangInstitute && !this.schoolModel) {
                  if (this.addNewTemplate.master_course_name == '-1') {
                    this.commonService.showErrorMessage('info', '', "Please select valid Maser Course!");
                    return;
                  }

                  if (Number(this.addNewTemplate.course_id) < 0) {
                    this.commonService.showErrorMessage('info', '', "Please select valid Course!");
                    return;
                  }
                }

                if (this.isLangInstitute) {
                  if (Number(this.addNewTemplate.master_course_name) < 0) {
                    this.commonService.showErrorMessage('info', '', "Please select valid Maser Course!");
                    return;
                  }

                  if (Number(this.addNewTemplate.course_id) < 0) {
                    this.commonService.showErrorMessage('info', '', "Please select valid Course!");
                    return;
                  }
                }
              }

              if (this.countryDetails.length > 1 && this.addNewTemplate.country_id < 0) {
                this.commonService.showErrorMessage('info', '', "Please select valid country!");
                return;
              }

              return this.validateFeeInstallments();
            }
          }, {
            key: "validateFeeInstallments",
            value: function validateFeeInstallments() {
              if (this.feeInstalllmentArr.length == 0) {
                this.commonService.showErrorMessage('info', '', "Please enter valid fee installments!");
                return;
              }

              var _iterator2 = _createForOfIteratorHelper(this.feeInstalllmentArr),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var data = _step2.value;

                  if (this.validateEachInstallment(data)) {
                    var installment = {
                      day_type: this.schoolModel || this.isTemplateNotLinkWithCourseAndStandard ? 4 : data.day_type,
                      days: data.day,
                      fee_type: data.fee_type_id,
                      fees_amount: data.fee_amount,
                      service_tax: this.getFeeTypeTax(data.fee_type_id),
                      service_tax_applicable: this.is_tax_enabled ? "Y" : "N",
                      month: data.month,
                      year: data.year
                    };
                    installment.initial_fee_amount = this.calFeeAmountWithoutTax(data.fee_amount, installment.service_tax), this.feeInstallments.push(installment);
                  } else {
                    this.feeInstallments = [];
                    return;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              return true;
            }
          }, {
            key: "validateEachInstallment",
            value: function validateEachInstallment(data) {
              if (data.installment_no <= 0) {
                this.commonService.showErrorMessage('info', '', "Please enter valid installment No.");
                return;
              }

              if (data.fee_type_id <= 0) {
                this.commonService.showErrorMessage('info', '', "Please select valid fee type!");
                return;
              }

              if (this.schoolModel || this.isTemplateNotLinkWithCourseAndStandard) {
                if (data.day <= 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid fee day!");
                  return;
                }

                if (data.month <= 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid fee month!");
                  return;
                }

                if (data.year <= 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid fee year!");
                  return;
                }
              }

              if (!this.schoolModel) {
                if (data.day_type <= 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid trigger date!");
                  return;
                }

                if (data.day < 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid fee day!");
                  return;
                }
              }

              if (data.fee_amount <= 0) {
                this.commonService.showErrorMessage('info', '', "Please enter valid fee amount!");
                return;
              }

              return true;
            }
          }, {
            key: "preparedFeeStructureData",
            value: function preparedFeeStructureData() {
              var data = {
                is_default: 0,
                country_id: this.addNewTemplate.country_id,
                customFeeSchedules: this.feeInstallments,
                studentwise_total_fees_amount: this.totalFeeAmount.toString(),
                studentwise_total_fees_discount: 0,
                studentwise_fees_tax_applicable: this.is_tax_enabled ? "Y" : "N",
                template_id: 0,
                template_name: this.addNewTemplate.template_name
              };

              if (!this.isTemplateNotLinkWithCourseAndStandard) {
                if (this.isLangInstitute) {
                  data.course_id = '-1';
                  data.subject_id = this.addNewTemplate.course_id;
                } else if (this.schoolModel) {
                  data.course_id = '-1';
                  data.standard_id = this.addNewTemplate.master_course_name;
                } else {
                  data.course_id = this.addNewTemplate.course_id;
                }
              }

              return data;
            }
          }, {
            key: "getInstituteFeeTypes",
            value: function getInstituteFeeTypes() {
              var _this6 = this;

              this.auth.showLoader();
              this.apiService.getAllFeeType().subscribe(function (res) {
                _this6.auth.hideLoader();

                _this6.feeTypeList = res;

                var _iterator3 = _createForOfIteratorHelper(_this6.feeTypeList),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var data = _step3.value;

                    if (data.fee_type == "INSTALLMENT") {
                      _this6.defultFeeTypes = data.fee_type_id;

                      if (_this6.is_tax_enabled) {
                        _this6.taxPrecent = data.service_tax;
                      }

                      break;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                _this6.createInstallmentGrid();
              }, function (err) {
                _this6.auth.hideLoader();

                _this6.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "changesValuesAsPerType",
            value: function changesValuesAsPerType(row, i) {
              if (row == 1) {
                this.feeInstalllmentArr[i].day = 0;
              }
            }
          }, {
            key: "calculateTotalFee",
            value: function calculateTotalFee() {
              var totalFee = 0;
              var totalTax = 0;

              var _iterator4 = _createForOfIteratorHelper(this.feeInstalllmentArr),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var data = _step4.value;
                  totalFee += Number(data.fee_amount);
                  totalTax += this.calculateTax(data.fee_amount, data.fee_type_id);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              this.totalFeeAmount = totalFee;
              this.totalTax = totalTax;
            }
          }, {
            key: "getCurrencyData",
            value: function getCurrencyData(id) {
              var _iterator5 = _createForOfIteratorHelper(this.countryDetails),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var data = _step5.value;

                  if (data.id == id) {
                    this.currencySymbol = data.currency_code;
                    break;
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }, {
            key: "calFeeAmountWithoutTax",
            value: function calFeeAmountWithoutTax(feeAmount, tax) {
              if (this.is_tax_enabled) {
                return Math.floor(Number(feeAmount) * 100 / (100 + Number(tax)));
              } else {
                return Number(feeAmount);
              }
            }
          }, {
            key: "calculateTax",
            value: function calculateTax(feeAmount, fee_type_id) {
              if (this.is_tax_enabled) {
                var tax = this.getFeeTypeTax(fee_type_id);
                return Number(feeAmount) - this.calFeeAmountWithoutTax(feeAmount, tax);
              } else {
                return 0;
              }
            }
          }, {
            key: "getFeeTypeTax",
            value: function getFeeTypeTax(fee_type_id) {
              if (this.is_tax_enabled) {
                var _iterator6 = _createForOfIteratorHelper(this.feeTypeList),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var data = _step6.value;

                    if (fee_type_id == data.fee_type_id) {
                      return Number(data.fee_type_tax);
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }

              return 0;
            }
          }]);

          return FeeStructureAddEditComponent;
        }();

        FeeStructureAddEditComponent.ctorParameters = function () {
          return [{
            type: _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_5__["FeeStrucService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }];
        };

        FeeStructureAddEditComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-fee-structure-add-edit',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./fee-structure-add-edit.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-structure/fee-structure-add-edit/fee-structure-add-edit.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./fee-structure-add-edit.component.scss */
          "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-add-edit/fee-structure-add-edit.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_feeStruc_service__WEBPACK_IMPORTED_MODULE_5__["FeeStrucService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])], FeeStructureAddEditComponent);
        return FeeStructureAddEditComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-home/fee-structure-home.component.scss":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-structure/fee-structure-home/fee-structure-home.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureHomeFeeStructureHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  height: 35px;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 10px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n/*swiching tabs*/\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 2rem;\n  margin-left: 0rem;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.fee_types .table_heading > div {\n  width: calc(100%  / 4);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 40px;\n  margin: auto;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  line-height: 35px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  margin: auto;\n  line-height: 40px;\n}\n\n.fee_types .table_body > div {\n  width: calc(100% / 4);\n}\n\n.discount .table_heading > div {\n  width: calc(100% / 5);\n}\n\n.discount .table_body > div {\n  width: calc(100% / 5);\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 345px;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 20px;\n  height: 35px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n}\n\n.feestruc .table_heading > div {\n  width: calc(100% / 4);\n}\n\n.feestruc .table_body > div {\n  width: calc(100% / 4);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.magnifying-glass {\n  background-image: url('Vector1.png');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 15px;\n}\n\n.text {\n  color: #8A8B8B;\n  font-weight: 300;\n  font-size: 24px;\n}\n\n.position {\n  position: relative;\n  left: 13%;\n}\n\n.center {\n  text-align: center;\n}\n\n.dummy_text {\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.dummy_text > p {\n  width: 600px;\n  color: #61758E;\n}\n\n.school .table_heading > div {\n  width: calc(100% / 6);\n}\n\n.school .table_body > div {\n  width: calc(100% / 6);\n}\n\n.tution .table_heading > div {\n  width: calc(100% / 5);\n}\n\n.tution .table_body > div {\n  width: calc(100% / 5);\n}\n\n.fee_new .table_heading > div {\n  width: calc((100% - 210px) / 5);\n}\n\n.fee_new .table_body > div {\n  width: calc((100% - 210px) / 5);\n  padding: 0px 0px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n\n.fee_new .table_heading > div:nth-child(2) {\n  width: 200px;\n}\n\n.fee_new .table_body > div:nth-child(2) {\n  width: 200px;\n}\n\n.fee_new .table_heading > div:first-child {\n  width: 10px;\n}\n\n.fee_new .table_body > div:first-child {\n  width: 10px;\n}\n\n.wid80 {\n  width: 80%;\n  margin: auto;\n}\n\n.rrs::-webkit-input-placeholder {\n  text-align: right;\n}\n\n.img {\n  width: 100%;\n  height: auto;\n}\n\n.wid240 {\n  width: 240px;\n}\n\n.green_top {\n  padding: 5px 32px;\n  background: linear-gradient(92.13deg, #19bb3c 71.19%, #90d73e 103.74%);\n  border-radius: 5px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n\n.green_top > span {\n  padding-left: 10px;\n}\n\n.itax {\n  padding-top: 8px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: right;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.relative {\n  position: relative;\n}\n\n.installments {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.info {\n  padding: 0px 4px;\n  color: #109CF1;\n}\n\n.save {\n  width: 100%;\n  position: fixed;\n  bottom: 47px;\n  z-index: 100;\n  height: 65px;\n  background-color: #fff;\n}\n\n.save > button {\n  position: fixed;\n  right: 15px;\n  bottom: 60px;\n}\n\n.fee_new1 {\n  margin-bottom: 140px;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.light {\n  font-weight: 500;\n  padding-left: 5px;\n}\n\n.indent {\n  float: left;\n  padding-left: 3.7rem;\n}\n\n.left {\n  float: left;\n}\n\n.wid50 {\n  width: 50%;\n}\n\n.student .table_heading > div {\n  width: calc(100% / 2);\n}\n\n.student .table_body > div {\n  width: calc(100% / 2);\n}\n\n.size22 {\n  height: auto;\n  width: 18px;\n}\n\n.select3 {\n  color: #8e8f90;\n  line-height: 20px;\n}\n\n.nav > li {\n  display: inline;\n}\n\n.nav-link {\n  display: inline;\n}\n\n.nav-link:hover, .nav-link, .nav-link:focus {\n  background-color: transparent;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: right;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.left {\n  float: left;\n}\n\n.padding2 {\n  padding-left: 50px;\n}\n\n.tableHeight {\n  height: 54vh;\n  overflow-y: auto;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlLXN0cnVjdHVyZS9mZWUtc3RydWN0dXJlLWhvbWUvZmVlLXN0cnVjdHVyZS1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQUNmOztBQUNFO0VBQ0Usb0NBQW9DO0FBRXhDOztBQUFFO0VBQ0UsYUFBYTtBQUdqQjs7QUFERTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUluQjs7QUFGRztFQUNDLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFLbEI7O0FBRUU7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2hCOztBQUNHO0VBQ0ksYUFBYTtBQUVwQjs7QUFBRyxnQkFBQTs7QUFDRDtFQUNJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUNKO0FBRUY7O0FBQUU7RUFDTSwyQ0FBMkM7RUFDN0MseUJBQXlCO0FBRy9COztBQURFO0VBQ0ksY0FBYztFQUNkLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBSXZCOztBQUZFO0VBQ0UsaUJBQWlCO0VBQ2pCLCtDQUE0QztFQUMxQyx1REFBb0Q7RUFDcEQsb0RBQWlEO0FBS3ZEOztBQUhFO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQU1wQjs7QUFKRTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDMUIsc0JBQUE7RUFDQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFr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O0FBcUN6Qjs7QUFuQ0U7RUFDRSxxQkFBcUI7QUFzQ3pCOztBQXBDRTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBdUNmOztBQXJDRTtFQUNFLGNBQWE7RUFNYixpQkFBaUI7QUFtQ3JCOztBQWpDRTtFQUNFLGVBQWU7QUFvQ25COztBQWxDRTtFQUNFLGVBQWU7QUFxQ25COztBQW5DRTtFQUNFLDZCQUE0QjtBQXNDaEM7O0FBbkNJO0VBRVEsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FBcUM1Qjs7QUE3Q0k7RUFXUSwyQ0FBMkM7RUFDM0MseUJBQXlCO0FBc0NyQzs7QUFuQ007RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUVaLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFxQzNCOztBQW5DTztFQUNFLFlBQVk7QUFzQ3JCOztBQXBDRztFQUNLLGNBQWM7RUFDZCxRQUFPO0FBdUNmOztBQXJDSTtFQUNFLGFBQVk7QUF3Q2xCOztBQWxDSTtFQUNFLFdBQVc7QUFxQ2pCOztBQW5DSTtFQUNFLGtCQUFrQjtBQXNDeEI7O0FBcENJO0VBQ0csWUFBWTtFQUNiLGdCQUFnQjtBQXVDdEI7O0FBckNFO0VBQ0UsZUFBZTtBQXdDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZlZS1tb2R1bGUvZGF0YS1zZXR1cC9mZWUtc3RydWN0dXJlL2ZlZS1zdHJ1Y3R1cmUtaG9tZS9mZWUtc3RydWN0dXJlLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIGJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgIC5zZWxlY3R7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgICAvLyAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC8vIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZlZS9hcnJvdy1kb3duLnN2Z1wiKTtcbiAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246MjEwcHggY2VudGVyO1xuICB9XG4gIC5pbnB1dHtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB9XG4gICBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiAgICAgICBvdXRsaW5lOiBub25lO1xuICAgfVxuICAgLypzd2ljaGluZyB0YWJzKi9cbiAgLm5hdi1pdGVtIC5uYXYtbGlua3tcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHhcbiAgfVxuICBcbiAgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOUNGMSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMxMDlDRjEgIWltcG9ydGFudDtcbiAgfVxuICAubmF2LWxpbmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcbiAgICAgIG1hcmdpbjogLTFyZW0gMnJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICB9XG4gIC5oZWFkX3BhZGRpbmd7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgfVxuICAudzk4e1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgLyogcGFkZGluZzogMTBweCAwcHg7Ki9cbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICAuZmVlX3R5cGVzIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlICAvIDQpO1xuICB9XG4gIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICBsaW5lLWhlaWdodDogNDBweDtcbiAgIG1hcmdpbjogYXV0bztcbiAgfVxuICBcbiAgLnRhYmxlX2JvZHl7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC50YWJsZV9ib2R5PmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4MDdDN0M7XG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIFxuICB9XG4gIC5mZWVfdHlwZXMgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcbiAgfVxuICBcbiAgLmRpc2NvdW50IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gIH1cbiAgLmRpc2NvdW50IC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gIH1cbiAgXG4gIC5ib3R0b21fcGFnaWduYXRpb257XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiBzZWxlY3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwNzlGRjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzIwe1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzEwe1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzUwe1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzQwe1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLm51bWJlcntcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46MHB4IDRweDtcbiAgfVxuICAuYWN0aXZlX2NpcmNsZXtcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6IFxuICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOjJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwNzlGRjtcbiAgfVxuICAubmV4dHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwNzlGRjtcbiAgXG4gIH1cbiAgLnc0NTB7XG4gICAgd2lkdGg6IDM0NXB4O1xuICB9XG4gIC5tb2RhbC10aXRsZXtcbiAgICBjb2xvcjogIzJCMjYyNjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC53aGl0ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC53MTAwe1xuICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1vZGFsIHRleHRhcmVhe1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZlZXN0cnVjIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNCk7XG4gIH1cbiAgLmZlZXN0cnVjIC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNCk7XG4gIH1cbiAgLm1yMTB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5tYWduaWZ5aW5nLWdsYXNze1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL1ZlY3RvcjEucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246bGVmdCBjZW50ZXI7XG4gICAgdGV4dC1pbmRlbnQ6IDE1cHg7XG4gIH1cbiAgLnBhZGRpbmcxe1xuICAgIC8vICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC50ZXh0e1xuICAgIGNvbG9yOiAjOEE4QjhCO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5wb3NpdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDoxMyU7XG4gIH1cbiAgLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmR1bW15X3RleHR7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5kdW1teV90ZXh0PnB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGNvbG9yOiAjNjE3NThFO1xuICB9XG4gIC5zY2hvb2wgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgfVxuICAuc2Nob29sIC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIH1cbiAgLnR1dGlvbiAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICB9XG4gIC50dXRpb24gLnRhYmxlX2JvZHk+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyMTBweCkgLyA1KTtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfYm9keT5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyMTBweCkgLyA1KTtcbiAgICAgcGFkZGluZzogMHB4IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDIpe1xuICAgIHdpZHRoOiAyMDBweCA7XG4gIH1cbiAgLmZlZV9uZXcgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgyKXtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmZlZV9uZXcgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiAxMHB4IDtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cbiAgLndpZDgwe1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5ycnM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyB0ZXh0LWFsaWduOnJpZ2h0OyB9XG4gIC8vIC5zZWxlY3Qxe1xuICAvLyAgIGNvbG9yOiM4ZThmOTA7XG4gIC8vICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLy8gICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mZWUvYXJyb3ctZG93bi5zdmdcIik7XG4gIC8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjIwMHB4IGNlbnRlcjtcbiAgLy8gICBsaW5lLWhlaWdodDogMjBweDtcbiAgLy8gfVxuICAvLyAuc2VsZWN0MntcbiAgLy8gICBjb2xvcjojOGU4ZjkwO1xuICAvLyAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8vICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAvLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVlL2Fycm93LWRvd24uc3ZnXCIpO1xuICAvLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjo4MnB4IGNlbnRlcjtcbiAgLy8gICBsaW5lLWhlaWdodDogMjBweDtcbiAgLy8gfVxuICAuaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAud2lkMjQwe1xuICAgIHdpZHRoOiAyNDBweDtcbiAgfVxuICAuZ3JlZW5fdG9we1xuICAgIHBhZGRpbmc6IDVweCAzMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5Mi4xM2RlZywgIzE5YmIzYyA3MS4xOSUsICM5MGQ3M2UgMTAzLjc0JSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICBcbiAgfVxuICAuZ3JlZW5fdG9wPnNwYW57XG4gICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLml0YXh7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgXG4gIH1cbiAgLnJlbGF0aXZle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuaW5zdGFsbG1lbnRze1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gIH1cbiAgLmluZm97XG4gICAgcGFkZGluZzogMHB4IDRweDtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgfVxuICAuc2F2ZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA0N3B4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuc2F2ZT5idXR0b257XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogNjBweDtcbiAgfVxuICAuZmVlX25ldzF7XG4gIG1hcmdpbi1ib3R0b206IDE0MHB4O1xuICB9XG4gIC8vIC5wYWdlX2hlYWRpbmd7XG4gICAgXG4gIC8vIH1cbiAgLnBhZ2VfaGVhZGluZz5we1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAucGFnZWhlYWRpbmdzcGFjZXtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbiAgLmxpZ2h0e1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgLmluZGVudHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMy43cmVtO1xuICB9XG4gIC5sZWZ0e1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC53aWQ1MHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5zdHVkZW50IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMik7XG4gIH1cbiAgLnN0dWRlbnQgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcbiAgfVxuICAuc2l6ZTIye1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMThweDtcbiAgfVxuICAuc2VsZWN0M3tcbiAgICBjb2xvcjojOGU4ZjkwO1xuICAgIC8vICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLy8gLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVlL2Fycm93LWRvd24uc3ZnXCIpO1xuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjo0MzBweCBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLm5hdj5saSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIC5uYXYtbGlua3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLm5hdi1saW5rOmhvdmVyLC5uYXYtbGluaywubmF2LWxpbms6Zm9jdXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgXG4gICAgLm5hdi1pdGVtIHtcbiAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICMxMDljZjEgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm1vZGFsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgfVxuICAgICAgIC5yaWdodHtcbiAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICB9XG4gICAubW9kYWwtZGlhbG9nIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRvcDoxMCU7XG4gICAgfVxuICAgIC5tb2RhbC1oZWFkZXI6YmVmb3Jle1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICAvLyAubW9kYWwtaGVhZGVye1xuICAgIC8vICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAvLyB9XG4gICBcbiAgICAubGVmdHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICAucGFkZGluZzJ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgfVxuICAgIC50YWJsZUhlaWdodHtcbiAgICAgICBoZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbiAgLnBvaW50ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-home/fee-structure-home.component.ts":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-structure/fee-structure-home/fee-structure-home.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: FeeStructureHomeComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureHomeFeeStructureHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeStructureHomeComponent", function () {
        return FeeStructureHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/Rx */
      "./node_modules/rxjs/Rx.js");
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../..//services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../services/feeStruc.service */
      "./src/app/services/feeStruc.service.ts");

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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var FeeStructureHomeComponent =
      /** @class */
      function () {
        var FeeStructureHomeComponent = /*#__PURE__*/function () {
          function FeeStructureHomeComponent(router, fetchService, auth, commonService) {
            _classCallCheck(this, FeeStructureHomeComponent);

            this.router = router;
            this.fetchService = fetchService;
            this.auth = auth;
            this.commonService = commonService;
            this.isLangInstitute = false;
            this.feeInstalllmentArr = [];
            this.countryAdditioalFeeTypes = {};
            this.source = [];
            this.isHeaderEdit = false;
            this.isEditFee = false;
            this.installmentList = [];
            this.otherInstList = [];
            this.otherFeetype = [];
            this.countryDetails = [];
            this.AddInstallment = {
              days: 0,
              day_type: 1,
              fee_type: 0,
              fees_amount: 0,
              initial_fee_amount: 0,
              is_referenced: 'N',
              schedule_id: 0,
              service_tax: 0,
              service_tax_applicable: "N",
              tax: 0,
              taxAmount: 0
            };
            this.additionalInstallment = {
              days: 0,
              day_type: 1,
              fee_type: -1,
              fees_amount: 0,
              initial_fee_amount: 0,
              is_referenced: 'N',
              schedule_id: 0,
              service_tax: 0,
              service_tax_applicable: 'N',
              fee_type_name: ''
            };
            this.customJson = [];
            this.totalAmount = '';
            this.discountAmount = '';
            this.feeTyeDetails = [];
            this.tabkeList = [];
            this.searchedData = [];
            this.studentList = [];
            this.totalAmountCal = 0;
            this.templateName = "";
            this.PageIndex = 0;
            this.displayBatchSize = 20;
            this.totalRow = 0;
            this.searchText = '';
            this.addTemplatePopUp = false;
            this.searchDataFlag = false;
            this.is_tax_enabled = false;
            this.schoolModel = false;
            this.feeTypeList = [];
            this.dayOfmonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
            this.months = [{
              id: 1,
              value: 'Jan'
            }, {
              id: 2,
              value: 'Feb'
            }, {
              id: 3,
              value: 'Mar'
            }, {
              id: 4,
              value: 'Apr'
            }, {
              id: 5,
              value: 'May'
            }, {
              id: 6,
              value: 'Jun'
            }, {
              id: 7,
              value: 'Jul'
            }, {
              id: 8,
              value: 'Aug'
            }, {
              id: 9,
              value: 'Sep'
            }, {
              id: 10,
              value: 'Oct'
            }, {
              id: 11,
              value: 'Nov'
            }, {
              id: 12,
              value: 'Dec'
            }];
            this.monthValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.totalTax = 0;
            this.currencySymbol = "";
            this.isTemplateNotLinkWithCourseAndStandard = false;
            this.is_default = false;

            if (sessionStorage.getItem('userid') == null) {
              this.router.navigate(['/authPage']);
            }
          }

          _createClass(FeeStructureHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this7 = this;

              this.enableTax = sessionStorage.getItem('enable_tax_applicable_fee_installments');
              this.tax_type_without_percentage = sessionStorage.getItem("tax_type_without_percentage");
              this.is_tax_enabled = this.enableTax == "1" ? true : false;
              this.isTemplateNotLinkWithCourseAndStandard = sessionStorage.getItem("is_fee_struct_linked") == 'true' ? false : true;
              this.auth.institute_type.subscribe(function (res) {
                if (res == 'LANG') {
                  _this7.isLangInstitute = true;
                  _this7.moduleState = 'Batch';
                } else {
                  _this7.isLangInstitute = false;
                  _this7.moduleState = 'Course';
                }
              }); // changes by Nalini - to handle school model conditions

              this.schoolModel = this.auth.schoolModel.value;
              this.fetchPrefill();
            }
          }, {
            key: "fetchPrefill",
            value: function fetchPrefill() {
              this.getFeeStructures();
              this.fetchDataForCountryDetails();
            }
          }, {
            key: "fetchDataForCountryDetails",
            value: function fetchDataForCountryDetails() {
              var encryptedData = sessionStorage.getItem('country_data');
              var data = JSON.parse(encryptedData);

              if (data.length > 0) {
                this.countryDetails = data;
              }
            }
          }, {
            key: "getFeeStructures",
            value: function getFeeStructures() {
              var _this8 = this;

              this.auth.showLoader();
              this.PageIndex = 1;
              this.fetchService.fetchFeeStruc().subscribe(function (res) {
                _this8.auth.hideLoader();

                _this8.totalRow = res.length;
                _this8.source = res;

                _this8.fetchTableDataByPage(_this8.PageIndex);
              }, function (err) {
                _this8.auth.hideLoader();
              });
            }
          }, {
            key: "editFee",
            value: function editFee(fee) {
              var _this9 = this;

              this.templateName = fee.template_name;
              this.is_default = fee.is_default == 1;
              this.selectedTemplate = fee;
              this.feeStructure = [];
              this.isEditFee = true;
              this.auth.showLoader();
              this.fetchService.fetchFeeDetail(fee.template_id).subscribe(function (res) {
                _this9.auth.hideLoader();

                _this9.feeStructure = res;

                if (res.is_default == "1") {
                  _this9.feeStructure.is_default = true;
                } else {
                  _this9.feeStructure.is_default = false;
                }

                _this9.fillFeeType(_this9.countryAdditioalFeeTypes[_this9.selectedTemplate.country_id]);

                var encryptedData = sessionStorage.getItem('country_data');
                var data = JSON.parse(encryptedData);

                if (data.length > 0) {
                  data.forEach(function (country) {
                    if (_this9.selectedTemplate.country_id == country.id) {
                      _this9.selectedCountry = country;
                    }
                  });
                }

                _this9.fillDataInYTable(res.customFeeSchedules); // if (res.studentwise_fees_tax_applicable == "Y") {


                if (_this9.enableTax == "1" && document.getElementById('checkBoxtaxes')) {
                  document.getElementById('checkBoxtaxes').checked = true;

                  _this9.showTaxFields();
                }

                _this9.totalAmountCal = res.studentwise_total_fees_amount;
              }, function (err) {
                _this9.auth.hideLoader();
              });
            }
          }, {
            key: "showTaxFields",
            value: function showTaxFields() {
              this.installmentList.forEach(function (element) {
                if (element.service_tax_applicable == "Y") {
                  element.taxAmount = element.fees_amount - element.initial_fee_amount;
                  element.tax = element.taxAmount;
                }
              });
            }
          }, {
            key: "fillFeeType",
            value: function fillFeeType(data) {
              var _this10 = this;

              this.otherFeetype = [];
              data.forEach(function (object) {
                var keys = Object.keys(object);
                var test = {};
                test.id = keys[0];
                test.value = object[keys[0]];

                _this10.otherFeetype.push(test);
              });
            }
          }, {
            key: "fillDataInYTable",
            value: function fillDataInYTable(data) {
              this.installmentList = [];
              this.otherInstList = [];

              for (var t = 0; t < data.length; t++) {
                if (data[t].fee_type_name == "INSTALLMENT") {
                  this.installmentList.push(data[t]);
                } else {
                  this.otherInstList.push(data[t]);
                }
              }
            }
          }, {
            key: "closeFeeEditor",
            value: function closeFeeEditor() {
              this.getFeeStructures();
              this.isHeaderEdit = false;
              this.isEditFee = false;
              this.templateName = "";
            }
          }, {
            key: "updateFeeStructure",
            value: function updateFeeStructure() {
              var _this11 = this;

              if (this.validateFeeInstallments()) {
                var data = {
                  is_default: this.is_default ? 1 : 0,
                  country_id: this.selectedTemplate.country_id,
                  customFeeSchedules: this.feeInstalllmentArr,
                  studentwise_total_fees_amount: this.totalFeeAmount.toString(),
                  studentwise_total_fees_discount: 0,
                  studentwise_fees_tax_applicable: this.is_tax_enabled ? "Y" : "N",
                  template_id: this.selectedTemplate.template_id.toString(),
                  template_name: this.templateName
                };
                this.auth.showLoader();
                this.fetchService.updateFeeTemplate(data).subscribe(function (res) {
                  _this11.auth.hideLoader();

                  $("#editFeeStructureModel").hide();

                  _this11.commonService.showErrorMessage('success', 'Update Successfully', 'Fee Structure Updated Successfully');

                  _this11.getFeeStructures();
                }, function (err) {
                  _this11.auth.hideLoader();

                  _this11.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "makeJSONForCustomFee",
            value: function makeJSONForCustomFee() {
              this.customJson = [];
              this.totalAmount = 0;
              this.discountAmount = 0;
              var data = [];

              for (var t = 0; t < this.installmentList.length; t++) {
                var test = {};
                test.fee_type = 0;
                test.initial_fee_amount = this.installmentList[t].initial_fee_amount.toString();
                test.service_tax = this.installmentList[t].service_tax.toString();
                test.fees_amount = this.installmentList[t].fees_amount.toString();
                test.service_tax_applicable = this.installmentList[t].service_tax_applicable;
                test.schedule_id = this.installmentList[t].schedule_id.toString();
                test.is_referenced = this.installmentList[t].is_referenced;
                test.day_type = this.installmentList[t].day_type.toString();
                test.days = Number(this.installmentList[t].days).toString();
                this.totalAmount = this.totalAmount + this.installmentList[t].fees_amount;
                this.discountAmount = this.discountAmount + this.installmentList[t].fees_amount - this.installmentList[t].initial_fee_amount;
                data.push(test);
              }

              for (var _t = 0; _t < this.otherInstList.length; _t++) {
                var _test = {};
                _test.fee_type = this.otherInstList[_t].fee_type;
                _test.initial_fee_amount = this.otherInstList[_t].initial_fee_amount.toString();
                _test.service_tax = this.otherInstList[_t].service_tax.toString();
                _test.fees_amount = this.otherInstList[_t].fees_amount.toString();
                _test.service_tax_applicable = this.otherInstList[_t].service_tax_applicable;
                _test.schedule_id = this.otherInstList[_t].schedule_id.toString();
                _test.is_referenced = this.otherInstList[_t].is_referenced;
                _test.day_type = this.otherInstList[_t].day_type.toString();
                _test.days = Number(this.otherInstList[_t].days).toString();
                this.totalAmount = this.totalAmount + this.otherInstList[_t].fees_amount;
                this.discountAmount = this.discountAmount + this.otherInstList[_t].fees_amount - this.otherInstList[_t].initial_fee_amount;
                data.push(_test);
              }

              this.customJson = data;
              return data;
            }
          }, {
            key: "updateTemplateName",
            value: function updateTemplateName() {
              if (this.selectedTemplate.template_name.trim() != '') {
                this.isHeaderEdit = false;
              } else {
                this.commonService.showErrorMessage('error', '', 'Please enter a valid fee structure name');
              }
            }
          }, {
            key: "onApplyTaxChechbox",
            value: function onApplyTaxChechbox(event) {
              if (this.enableTax == "0") {
                this.commonService.showErrorMessage('error', '', 'Please define Tax (%age) in Institute Settings');
                event.target.checked = false;
                return;
              }

              if (event.target.checked) {
                this.installmentList.forEach(function (element) {
                  if (element.service_tax_applicable == "Y" && element.hasOwnProperty('taxAmount')) {
                    element.fees_amount = Number(element.fees_amount) + Number(element.taxAmount);
                    element.tax = element.taxAmount;
                  } else {
                    element.tax = Number(element.service_tax) * 0.01 * Number(element.initial_fee_amount);
                    element.taxAmount = element.tax;
                    element.fees_amount = element.initial_fee_amount + element.taxAmount;
                  }

                  element.service_tax_applicable = "Y";
                });
              } else {
                this.installmentList.forEach(function (element) {
                  element.fees_amount = Number(element.fees_amount) - Number(element.taxAmount);
                  element.tax = 0;
                  element.service_tax_applicable = "N";
                });
              }

              this.calculateTotalAmount();
            }
          }, {
            key: "calculateTotalAmount",
            value: function calculateTotalAmount() {
              var totalAmount = 0;
              this.installmentList.forEach(function (element) {
                totalAmount += Number(element.fees_amount);
              });
              this.otherInstList.forEach(function (element) {
                totalAmount += Number(element.fees_amount);
              });
              this.totalAmountCal = totalAmount;
            }
          }, {
            key: "deleteRow",
            value: function deleteRow(row, i) {
              this.installmentList.splice(i, 1);
              this.calculateTotalAmount();
            }
          }, {
            key: "deleteAdditionalRow",
            value: function deleteAdditionalRow(row, i) {
              this.otherInstList.splice(i, 1);
              this.calculateTotalAmount();
            }
          }, {
            key: "addInstallmentInTable",
            value: function addInstallmentInTable() {
              if (Number(this.AddInstallment.initial_fee_amount) > 0 && this.AddInstallment.days != null) {
                if (sessionStorage.getItem('enable_tax_applicable_fee_installments') == '1') {
                  this.AddInstallment.service_tax = Number(this.feeStructure.registeredServiceTax);

                  if (document.getElementById('checkBoxtaxes').checked) {
                    this.AddInstallment.service_tax_applicable = "Y";
                    this.AddInstallment.tax = Math.floor(this.AddInstallment.initial_fee_amount * Number(this.feeStructure.registeredServiceTax) * 0.01);
                    this.AddInstallment.taxAmount = Number(this.AddInstallment.tax);
                    this.AddInstallment.fees_amount = Number(this.AddInstallment.initial_fee_amount + this.AddInstallment.tax);
                  } else {
                    this.AddInstallment.service_tax_applicable = "N";
                    this.AddInstallment.fees_amount = this.AddInstallment.initial_fee_amount;
                    this.AddInstallment.tax = 0;
                  }
                } else {
                  this.AddInstallment.tax = 0;
                  this.AddInstallment.fees_amount = this.AddInstallment.initial_fee_amount;
                }

                this.installmentList.push(this.AddInstallment);
                this.AddInstallment = {
                  days: 0,
                  day_type: 1,
                  fee_type: 0,
                  fees_amount: 0,
                  initial_fee_amount: 0,
                  is_referenced: 'N',
                  schedule_id: 0,
                  service_tax: 0,
                  service_tax_applicable: 'N',
                  tax: 0,
                  taxAmount: 0
                };
              } else {
                if (this.AddInstallment.initial_fee_amount == null || this.AddInstallment.initial_fee_amount == 0) {
                  this.commonService.showErrorMessage('error', '', 'Please enter Amount');
                  return;
                }

                if (this.AddInstallment.days == null) {
                  this.commonService.showErrorMessage('error', '', 'Please enter days/month');
                  return;
                }
              }

              this.calculateTotalAmount();
            }
          }, {
            key: "addAdditionalInst",
            value: function addAdditionalInst() {
              if (this.additionalInstallment.fee_type == -1) {
                this.commonService.showErrorMessage('error', '', 'Please enter fee type');
                return;
              }

              if (Number(this.additionalInstallment.initial_fee_amount) > 0 && this.additionalInstallment.days != null) {
                // this.additionalInstallment.fees_amount = this.additionalInstallment.initial_fee_amount;
                if (this.additionalInstallment.fees_amount == 0) {
                  if (this.additionalInstallment.service_tax == 0) {
                    this.additionalInstallment.fees_amount = this.additionalInstallment.initial_fee_amount;
                  }
                } else {
                  if (this.additionalInstallment.service_tax == 0) {
                    this.additionalInstallment.fees_amount = this.additionalInstallment.initial_fee_amount;
                  } else {
                    this.additionalInstallment.fees_amount = Math.round(Number(this.additionalInstallment.initial_fee_amount) + Number(this.additionalInstallment.initial_fee_amount * this.additionalInstallment.service_tax / 100));
                  }
                }

                this.otherInstList.push(this.additionalInstallment);
                this.additionalInstallment = {
                  days: 0,
                  day_type: 1,
                  fee_type: -1,
                  fees_amount: 0,
                  initial_fee_amount: 0,
                  is_referenced: 'N',
                  schedule_id: 0,
                  service_tax: 0,
                  service_tax_applicable: 'N',
                  fee_type_name: ''
                };
              } else {
                if (this.additionalInstallment.initial_fee_amount == 0 || this.additionalInstallment.initial_fee_amount == null) {
                  this.commonService.showErrorMessage('error', '', 'Please enter Amount');
                  return;
                }

                if (this.additionalInstallment.days == null) {
                  this.commonService.showErrorMessage('error', '', 'Please enter days');
                  return;
                }
              }

              this.calculateTotalAmount();
            }
          }, {
            key: "onAdditionalFeeSelection",
            value: function onAdditionalFeeSelection(event) {
              var _this12 = this;

              var id = event;
              this.feeTyeDetails = [];
              this.fetchService.getAdditionalFeeDeatails(event).subscribe(function (res) {
                _this12.feeTyeDetails = res;
                _this12.additionalInstallment.initial_fee_amount = res.fee_amount;
                _this12.additionalInstallment.service_tax = res.fee_type_tax;
                _this12.additionalInstallment.fee_type = res.fee_type_id;

                if (res.fee_type_tax > 0) {
                  _this12.additionalInstallment.service_tax_applicable = "Y";
                }

                _this12.additionalInstallment.fee_type = id;
                _this12.additionalInstallment.fees_amount = res.fee_amount + res.fee_amount * res.fee_type_tax * 0.01;
                _this12.additionalInstallment.fee_type_name = res.fee_type;
              }, function (err) {
                _this12.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "editTemplateName",
            value: function editTemplateName() {
              this.isHeaderEdit = true;
            }
          }, {
            key: "cancelTemplateName",
            value: function cancelTemplateName() {
              this.isHeaderEdit = false;
              this.selectedTemplate.template_name = this.templateName;
            }
          }, {
            key: "feeTypesAmountChnge",
            value: function feeTypesAmountChnge(data) {
              if (data.service_tax == 0) {
                data.initial_fee_amount = Math.floor(Number(data.fees_amount));
              } else {
                data.initial_fee_amount = Math.floor(Number(data.fees_amount)) - Math.floor(Number(data.fees_amount) - Number(data.fees_amount * 100 / (100 + data.service_tax)));
                data.initial_fee_amount = Math.floor(data.initial_fee_amount);
              }

              this.calculateTotalAmount();
            }
          }, {
            key: "feeInstallmentChnge",
            value: function feeInstallmentChnge(data) {
              if (data.service_tax_applicable == "N") {
                data.initial_fee_amount = data.fees_amount;
              } else {
                data.tax = data.fees_amount - Math.floor(Number(data.fees_amount) * 100 / (100 + data.service_tax));
                data.taxAmount = data.tax;
                data.initial_fee_amount = data.fees_amount - data.tax;
              }

              this.calculateTotalAmount();
            } // pagination functions

          }, {
            key: "fetchTableDataByPage",
            value: function fetchTableDataByPage(index) {
              this.PageIndex = index;
              var startindex = this.displayBatchSize * (index - 1);
              this.tabkeList = this.getDataFromDataSource(startindex);
            }
          }, {
            key: "fetchNext",
            value: function fetchNext() {
              this.PageIndex++;
              this.fetchTableDataByPage(this.PageIndex);
            }
          }, {
            key: "fetchPrevious",
            value: function fetchPrevious() {
              if (this.PageIndex != 1) {
                this.PageIndex--;
                this.fetchTableDataByPage(this.PageIndex);
              }
            }
          }, {
            key: "getDataFromDataSource",
            value: function getDataFromDataSource(startindex) {
              var data = [];

              if (this.searchDataFlag == true) {
                data = this.searchedData.slice(startindex, startindex + this.displayBatchSize);
              } else {
                data = this.source.slice(startindex, startindex + this.displayBatchSize);
              }

              return data;
            }
          }, {
            key: "searchInList",
            value: function searchInList() {
              var _this13 = this;

              if (this.searchText.trim() != "" && this.searchText.trim() != null) {
                var searchData = this.source.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this13.searchText.toLowerCase());
                  });
                });
                this.searchedData = searchData;
                this.totalRow = searchData.length;
                this.searchDataFlag = true;
                this.PageIndex = 1;
                this.fetchTableDataByPage(this.PageIndex);
              } else {
                this.searchDataFlag = false;
                this.fetchTableDataByPage(this.PageIndex);
                this.totalRow = this.source.length;
              }
            }
          }, {
            key: "deleteFeeStructure",
            value: function deleteFeeStructure(fee) {
              var _this14 = this;

              var is_archived = "N";

              if (confirm('Are you sure, you want to delete Fee Structure?')) {
                this.auth.showLoader();
                this.fetchService.deleteFeeStructure(fee.template_id, is_archived).subscribe(function (res) {
                  _this14.auth.hideLoader();

                  _this14.commonService.showErrorMessage('success', 'Deleted', 'Fee Structure Deleted Successfully');

                  _this14.getFeeStructures();

                  _this14.searchText = "";
                  _this14.searchDataFlag = false;
                }, function (err) {
                  _this14.auth.hideLoader();

                  if (err.error.message.includes("Fee template(s) are assigned to student(s).")) {
                    if (confirm('Fee template(s) are assigned to student(s). Do you wish to delete it ?')) {
                      is_archived = "Y";

                      _this14.auth.showLoader();

                      _this14.fetchService.deleteFeeStructure(fee.template_id, is_archived).subscribe(function (res) {
                        _this14.auth.hideLoader();

                        _this14.commonService.showErrorMessage('success', 'Deleted', 'Fee Structure Deleted Successfully');

                        _this14.getFeeStructures();
                      }, function (err) {
                        _this14.auth.hideLoader();

                        _this14.commonService.showErrorMessage('error', '', err.error.message);
                      });
                    }
                  } else {
                    _this14.commonService.showErrorMessage('error', '', err.error.message);
                  }
                });
              }
            }
          }, {
            key: "studentsAssigned",
            value: function studentsAssigned(fee) {
              if (fee.studentList != null) {
                this.addTemplatePopUp = true;
                this.studentList = fee.studentList;
              } else {
                this.commonService.showErrorMessage("info", "", "No data found");
                this.addTemplatePopUp = false;
              }
            }
          }, {
            key: "closeTemplatePopup",
            value: function closeTemplatePopup() {
              this.addTemplatePopUp = false;
            }
          }, {
            key: "editFeeStructure",
            value: function editFeeStructure(fee) {
              var _this15 = this;

              $("#editFeeStructureModel").show();
              this.totalTax = 0;

              if (this.feeTypeList.length == 0) {
                this.getInstituteFeeTypes();
              }

              this.templateName = fee.template_name;
              this.selectedTemplate = fee;
              this.feeStructure = [];
              this.feeInstalllmentArr = [];
              this.auth.showLoader();
              this.fetchService.fetchFeeDetail(fee.template_id).subscribe(function (res) {
                _this15.auth.hideLoader();

                _this15.feeStructure = res;
                _this15.is_default = _this15.feeStructure.is_default == 1;
                _this15.totalFeeAmount = _this15.feeStructure.studentwise_total_fees_amount;

                if (_this15.feeStructure.customFeeSchedules != null) {
                  var _iterator7 = _createForOfIteratorHelper(_this15.feeStructure.customFeeSchedules),
                      _step7;

                  try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                      var data = _step7.value;
                      var installmentData = {
                        fee_type: data.fee_type,
                        month: data.month,
                        year: data.year,
                        days: data.days,
                        fees_amount: data.fees_amount,
                        day_type: data.day_type,
                        initial_fee_amount: data.initial_fee_amount.toString(),
                        service_tax: data.service_tax,
                        service_tax_applicable: data.service_tax_applicable,
                        schedule_id: data.schedule_id.toString(),
                        is_referenced: data.is_referenced
                      };

                      if (_this15.is_tax_enabled) {
                        _this15.totalTax += Number(data.fees_amount) - Number(data.initial_fee_amount);
                      }

                      _this15.feeInstalllmentArr.push(installmentData);
                    }
                  } catch (err) {
                    _iterator7.e(err);
                  } finally {
                    _iterator7.f();
                  }

                  _this15.getCurrencyData(_this15.selectedTemplate.country_id);
                }
              });
            }
          }, {
            key: "getInstituteFeeTypes",
            value: function getInstituteFeeTypes() {
              var _this16 = this;

              this.auth.showLoader();
              this.fetchService.getAllFeeType().subscribe(function (res) {
                _this16.auth.hideLoader();

                _this16.feeTypeList = res;
              }, function (err) {
                _this16.auth.hideLoader();

                _this16.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "closePopUp",
            value: function closePopUp() {
              $("#editFeeStructureModel").hide();
            }
          }, {
            key: "addInstallment",
            value: function addInstallment(i) {
              var newInstallment = {
                installment_no: i + 2,
                fee_type: this.feeInstalllmentArr[i].fee_type,
                month: this.feeInstalllmentArr[i].month,
                days: this.feeInstalllmentArr[i].days,
                year: this.feeInstalllmentArr[i].year,
                fees_amount: this.feeInstalllmentArr[i].fees_amount,
                initial_fee_amount: this.feeInstalllmentArr[i].initial_fee_amount,
                day_type: this.feeInstalllmentArr[i].day_type,
                schedule_id: 0,
                is_referenced: "N",
                service_tax: this.feeInstalllmentArr[i].fee_type,
                service_tax_applicable: this.is_tax_enabled ? "Y" : "N"
              };
              this.totalFeeAmount = this.totalFeeAmount + Number(this.feeInstalllmentArr[i].fees_amount);
              this.totalTax = this.totalTax + this.calculateTax(this.feeInstalllmentArr[i].fees_amount, this.feeInstalllmentArr[i].fee_type);
              this.feeInstalllmentArr.push(newInstallment);
            }
          }, {
            key: "deleteInstallment",
            value: function deleteInstallment(index) {
              if (this.feeInstalllmentArr.length == 1) {
                this.commonService.showErrorMessage('info', '', "You can't delete!");
                return false;
              } else {
                this.totalFeeAmount = this.totalFeeAmount - Number(this.feeInstalllmentArr[index].fees_amount);
                this.feeInstalllmentArr.splice(index, 1);
                return true;
              }
            }
          }, {
            key: "validateFeeInstallments",
            value: function validateFeeInstallments() {
              if (this.templateName && this.templateName.trim() == '') {
                this.commonService.showErrorMessage('info', '', "Please enter valid fee structure name!");
                return;
              }

              if (this.feeInstalllmentArr.length == 0) {
                this.commonService.showErrorMessage('info', '', "Please enter valid fee structure details!");
                return;
              }

              var _iterator8 = _createForOfIteratorHelper(this.feeInstalllmentArr),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var data = _step8.value;

                  if (!this.validateEachInstallment(data)) {
                    return;
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              return true;
            }
          }, {
            key: "validateEachInstallment",
            value: function validateEachInstallment(data) {
              if (data.installment_no <= 0) {
                this.commonService.showErrorMessage('info', '', "Please enter valid installment No.");
                return false;
              }

              if (data.fee_type <= 0) {
                this.commonService.showErrorMessage('info', '', "Please select valid fee type!");
                return false;
              }

              if (this.schoolModel || this.isTemplateNotLinkWithCourseAndStandard) {
                if (data.days <= 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid fee day!");
                  return false;
                }

                if (data.month <= 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid fee month!");
                  return false;
                }

                if (data.year <= 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid fee year!");
                  return false;
                }
              }

              if (!this.schoolModel) {
                if (data.day_type <= 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid trigger date!");
                  return false;
                }

                if (data.days < 0) {
                  this.commonService.showErrorMessage('info', '', "Please select valid fee day!");
                  return false;
                }
              }

              if (data.fees_amount <= 0) {
                this.commonService.showErrorMessage('info', '', "Please enter valid fee amount!");
                return false;
              }

              return true;
            }
          }, {
            key: "changesValuesAsPerType",
            value: function changesValuesAsPerType(row, i) {
              if (row == 1) {
                this.feeInstalllmentArr[i].days = 0;
              }
            }
          }, {
            key: "calculateTotalFee",
            value: function calculateTotalFee() {
              var totalFee = 0;
              var totalTax = 0;
              var i = 0;

              var _iterator9 = _createForOfIteratorHelper(this.feeInstalllmentArr),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var data = _step9.value;
                  totalFee += Number(data.fees_amount);
                  var tax = this.calculateTax(data.fees_amount, data.fee_type);

                  if (this.is_tax_enabled) {
                    this.feeInstalllmentArr[i].service_tax = tax;
                    this.feeInstalllmentArr[i].initial_fee_amount = Number(data.fees_amount) - Number(tax);
                    i++;
                  }

                  totalTax += tax;
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              this.totalFeeAmount = totalFee;
              this.totalTax = totalTax;
            }
          }, {
            key: "getCurrencyData",
            value: function getCurrencyData(id) {
              var _iterator10 = _createForOfIteratorHelper(this.countryDetails),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var data = _step10.value;

                  if (data.id == id) {
                    this.currencySymbol = data.currency_code;
                    break;
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          }, {
            key: "calFeeAmountWithoutTax",
            value: function calFeeAmountWithoutTax(feeAmount, tax) {
              if (this.is_tax_enabled) {
                return Math.floor(Number(feeAmount) * 100 / (100 + Number(tax)));
              } else {
                return Number(feeAmount);
              }
            }
          }, {
            key: "calculateTax",
            value: function calculateTax(feeAmount, fee_type_id) {
              if (this.is_tax_enabled) {
                var tax = this.getFeeTypeTax(fee_type_id);
                return Number(feeAmount) - this.calFeeAmountWithoutTax(feeAmount, tax);
              } else {
                return 0;
              }
            }
          }, {
            key: "getFeeTypeTax",
            value: function getFeeTypeTax(fee_type_id) {
              if (this.is_tax_enabled) {
                var _iterator11 = _createForOfIteratorHelper(this.feeTypeList),
                    _step11;

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var data = _step11.value;

                    if (fee_type_id == data.fee_type_id) {
                      return Number(data.fee_type_tax);
                    }
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
              }

              return 0;
            }
          }]);

          return FeeStructureHomeComponent;
        }();

        FeeStructureHomeComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_5__["FeeStrucService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"]
          }];
        };

        FeeStructureHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-fee-structure-home',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./fee-structure-home.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-structure/fee-structure-home/fee-structure-home.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./fee-structure-home.component.scss */
          "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-home/fee-structure-home.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_5__["FeeStrucService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"]])], FeeStructureHomeComponent);
        return FeeStructureHomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-routing.module.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-structure/fee-structure-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: FeeStructureRoutingModule */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeStructureRoutingModule", function () {
        return FeeStructureRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _fee_structure_add_edit_fee_structure_add_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fee-structure-add-edit/fee-structure-add-edit.component */
      "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-add-edit/fee-structure-add-edit.component.ts");
      /* harmony import */


      var _fee_structure_home_fee_structure_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fee-structure-home/fee-structure-home.component */
      "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-home/fee-structure-home.component.ts");
      /* harmony import */


      var _fee_structure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fee-structure.component */
      "./src/app/components/fee-module/data-setup/fee-structure/fee-structure.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FeeStructureRoutingModule =
      /** @class */
      function () {
        var FeeStructureRoutingModule = function FeeStructureRoutingModule() {
          _classCallCheck(this, FeeStructureRoutingModule);
        };

        FeeStructureRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _fee_structure_component__WEBPACK_IMPORTED_MODULE_4__["FeeStructureComponent"],
            pathMatch: 'prefix',
            children: [{
              path: '',
              redirectTo: 'home'
            }, {
              path: 'home',
              component: _fee_structure_home_fee_structure_home_component__WEBPACK_IMPORTED_MODULE_3__["FeeStructureHomeComponent"]
            }, {
              path: 'add',
              component: _fee_structure_add_edit_fee_structure_add_edit_component__WEBPACK_IMPORTED_MODULE_2__["FeeStructureAddEditComponent"]
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], FeeStructureRoutingModule);
        return FeeStructureRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-structure/fee-structure.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-structure/fee-structure.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlLW1vZHVsZS9kYXRhLXNldHVwL2ZlZS1zdHJ1Y3R1cmUvZmVlLXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-structure/fee-structure.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-structure/fee-structure.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: FeeStructureComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeStructureComponent", function () {
        return FeeStructureComponent;
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var FeeStructureComponent =
      /** @class */
      function () {
        var FeeStructureComponent = /*#__PURE__*/function () {
          function FeeStructureComponent() {
            _classCallCheck(this, FeeStructureComponent);
          }

          _createClass(FeeStructureComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return FeeStructureComponent;
        }();

        FeeStructureComponent.ctorParameters = function () {
          return [];
        };

        FeeStructureComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-fee-structure',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./fee-structure.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-structure/fee-structure.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./fee-structure.component.scss */
          "./src/app/components/fee-module/data-setup/fee-structure/fee-structure.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], FeeStructureComponent);
        return FeeStructureComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-structure/fee-structure.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-structure/fee-structure.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: FeeStructureModule */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeStructureFeeStructureModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeStructureModule", function () {
        return FeeStructureModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _fee_structure_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fee-structure-routing.module */
      "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-routing.module.ts");
      /* harmony import */


      var _fee_structure_add_edit_fee_structure_add_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fee-structure-add-edit/fee-structure-add-edit.component */
      "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-add-edit/fee-structure-add-edit.component.ts");
      /* harmony import */


      var _fee_structure_home_fee_structure_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fee-structure-home/fee-structure-home.component */
      "./src/app/components/fee-module/data-setup/fee-structure/fee-structure-home/fee-structure-home.component.ts");
      /* harmony import */


      var _fee_structure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fee-structure.component */
      "./src/app/components/fee-module/data-setup/fee-structure/fee-structure.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FeeStructureModule =
      /** @class */
      function () {
        var FeeStructureModule = function FeeStructureModule() {
          _classCallCheck(this, FeeStructureModule);
        };

        FeeStructureModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          declarations: [_fee_structure_add_edit_fee_structure_add_edit_component__WEBPACK_IMPORTED_MODULE_3__["FeeStructureAddEditComponent"], _fee_structure_home_fee_structure_home_component__WEBPACK_IMPORTED_MODULE_4__["FeeStructureHomeComponent"], _fee_structure_component__WEBPACK_IMPORTED_MODULE_5__["FeeStructureComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fee_structure_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeeStructureRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
        })], FeeStructureModule);
        return FeeStructureModule;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-fee-module-data-setup-fee-structure-fee-structure-module-es5.js.map