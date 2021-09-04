(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-payrole-payrole-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-edit-hourly/add-edit-hourly.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-edit-hourly/add-edit-hourly.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-horizontal\" role=\"form\"  id=\"templateDataForm\">\n    <section>\n        <h1 class=\"pull-left\">\n          <a routerLink=\"/view/payrole/hourly-template\">\n            Hourly Template\n          </a>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n         <span *ngIf=\"!selectedId\">Add Hourly Template</span> \n          <span *ngIf=\"selectedId\">Update Hourly Template</span>\n        </h1>\n      </section>\n    <div class=\"row\" style=\"margin-right: 0px;\">\n     <div class=\"col-sm-12\" style=\"margin-bottom: 10px;\">\n    <div class=\"form-group\">                       \n         <label for=\"hourly_grades\" class=\"col-sm-2 control-label\">\n            Hourly Grades <span class=\"text-red\">*</span>\n        </label>\n        <div class=\"col-sm-4\">\n            <input type=\"text\" class=\"form-control\" id=\"hourly_grades\" onpaste=\"return false\" oncopy=\"return false\" maxlength=\"30\" [(ngModel)]=\"hourlyModel.hourly_grade\"  name=\"hourly_grades\" placeholder=\"Enter Hourly Grades\" autocomplete=\"off\">\n        </div>\n        <span class=\"col-sm-4 control-label\" id=\"hourly_grades_error\">\n         </span>\n    </div>\n\n    <div class=\"form-group\">                       \n         <label for=\"hourly_rates\" class=\"col-sm-2 control-label\">\n            Hourly Rates <span class=\"text-red\">*</span>\n        </label>\n        <div class=\"col-sm-4\">\n            <input type=\"text\" class=\"form-control\" id=\"hourly_rates\" maxlength=\"8\" onpaste=\"return false\" oncopy=\"return false\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" [(ngModel)]=\"hourlyModel.hourly_rate\" name=\"hourly_rates\" placeholder=\"Enter Hourly Rates\" autocomplete=\"off\">\n        </div>\n        \n        <span class=\"col-sm-4 control-label\" id=\"hourly_rates_error\">\n            \n      </span>\n     \n    </div>\n    <div class=\"col-sm-2\" *ngIf=\"!selectedId\">\n        <input class=\"blue_button pull-left\" type=\"button\" id=\"addHourlyTemplate\" (click)=\"createHourly()\" value=\"Add Hourly Template\">\n    </div>\n    <div class=\"col-sm-2\" *ngIf=\"selectedId\">\n        <input class=\"blue_button pull-left\" type=\"button\" id=\"addHourlyTemplate\" (click)=\"updateHourly()\" value=\"Update Hourly Template\">\n    </div>\n    </div>\n    </div>\n    </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-edit-manage/add-edit-manage.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-edit-manage/add-edit-manage.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-horizontal\" role=\"form\"  id=\"templateDataForm\">\n    <section class=\"middle-top mb0 clearFix\">\n        <h1 class=\"pull-left\">\n          <a routerLink=\"/view/payrole/manage-salary\">\n            Manage Salary\n          </a>\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n         <span *ngIf=\"sectionName == 'Add'\">Add Manage Salary</span> \n          <span *ngIf=\"sectionName == 'edit'\">Update Manage Salary</span>\n        </h1>\n      </section>\n    <div class=\"row\">\n     <div class=\"col-sm-12\" style=\"margin-bottom: 10px;\">\n    <div class=\"form-group\">                       \n         <label for=\"hourly_grades\" class=\"col-sm-2 control-label\">\n            Salary <span class=\"text-red\">*</span>\n        </label>\n        <div class=\"col-sm-4\">\n            <select class=\"form-control\" id=\"slaryType\" [(ngModel)]=\"slaryType\" name=\"slaryType\" (ngModelChange)=\"onselectSalaryDropdown()\">\n                <option  value=\"-1\">Select Salary</option>\n                <option value=\"H\">Hourly</option>\n                <option value=\"M\">Monthly</option>\n                </select>\n        </div>\n        <span class=\"col-sm-4 control-label\" id=\"hourly_grades_error\">\n         </span>\n    </div>\n\n    <div class=\"form-group\">                       \n         <label for=\"hourly_rates\" class=\"col-sm-2 control-label\">\n            Template <span class=\"text-red\">*</span>\n        </label>\n        <div class=\"col-sm-4\">\n            <select class=\"form-control\" id=\"hourly_rates\"  [(ngModel)]=\"template_id\" name=\"template_id\" >\n                <option value=\"-1\">Select Template</option>\n                <option [value]=\"hourly.template_id\" *ngFor=\"let hourly of templateList\">{{slaryType == 'M' ? hourly.salary_grade : hourly.hourly_grade}}</option>\n                <!-- <option [value]=\"salary.template_id\" *ngFor=\"let salary of salrayDataList\" >{{salary.salary_grade}}</option> -->\n                </select>\n              </div>\n        \n        <span class=\"col-sm-4 control-label\" id=\"hourly_rates_error\">\n            \n      </span>\n     \n    </div>\n    <div class=\"col-sm-4\" *ngIf=\"sectionName == 'Add'\">\n        <input class=\"blue_button pull-left\" type=\"button\" id=\"addHourlyTemplate\" (click)=\"assigneTemplateEmployee()\"  value=\"Add Manage Salary\">\n    </div>\n    <div class=\"col-sm-4\" *ngIf=\"sectionName == 'edit'\">\n        <input class=\"blue_button pull-left\" type=\"button\" id=\"addHourlyTemplate\" (click)=\"updateManageTemp()\"value=\"Update Manage Salary\">\n    </div>\n    </div>\n    </div>\n    </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-edit-salary/add-edit-salary.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-edit-salary/add-edit-salary.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"box-header\">\n    <h3 class=\"box-title\">Salary Template</h3> -->\n<form class=\"form-horizontal\" role=\"form\"  id=\"templateDataForm\">\n    <section class=\"middle-top mb0 clearFix\">\n       <h1 class=\"pull-left\">\n        <a routerLink=\"/view/payrole/salary-template\">\n          Salary Template\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n       <span *ngIf=\"!salaryModel.template_id\">Add Salary Template</span>\n       <span *ngIf=\"salaryModel.template_id\">Update Salary Template</span>\n\n      </h1>\n    </section>\n    <div class=\"row\" style=\"margin-left:0px ;\">\n        <div class=\"col-sm-12\" style=\"margin-bottom: 10px;\">\n            <div class=\"form-group\">                       \n                 <label for=\"salary_grades\" class=\"col-sm-3 control-label\">\n                    Salary Grades <span class=\"text-red\">*</span>\n                </label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"salary_grades\" onpaste=\"return false\" oncopy=\"return false\" placeholder=\"Enter Salary Grade\" maxlength=\"30\" [(ngModel)]=\"salaryModel.salary_grade\" name=\"salary_grades\" autocomplete=\"off\">\n                </div>\n                <span class=\"col-sm-4 control-label\" id=\"salary_grades_error\">\n                 </span>\n            </div>\n\n            <div class=\"form-group\">                       \n                 <label for=\"basic_salary\" class=\"col-sm-3 control-label\">\n                    Basic Salary <span class=\"text-red\">*</span>\n                </label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" maxlength=\"8\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" onpaste=\"return false\" oncopy=\"return false\" placeholder=\"Enter Basic Salary\" id=\"basic_salary\" [(ngModel)]=\"salaryModel.basic_salary\" (ngModelChange)=\"calculateGrossSalary()\" name=\"basic_salary\" autocomplete=\"off\">\n                </div>\n                <span class=\"col-sm-4 control-label\" id=\"basic_salary_error\">\n              </span>\n            </div>\n\n            <div class=\"form-group\">  \n                 <label for=\"overtime_rate\" class=\"col-sm-3 control-label\">\n                    Overtime Rate (Per Hour)<span class=\"text-red\">*</span>\n                </label>\n                <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" maxlength=\"8\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" onpaste=\"return false\" oncopy=\"return false\" placeholder=\"Enter Overtime Rate\" id=\"overtime_rate\" [(ngModel)]=\"salaryModel.overtime_rate\" name=\"overtime_rate\" value=\"\" autocomplete=\"off\">\n                </div>\n                <span class=\"col-sm-4 control-label\" id=\"overtime_rate_error\">\n                  </span>\n            </div>\n        </div>\n\n\n        <div class=\"col-sm-6\">\n            <div class=\"box\" style=\"border: 1px solid #eee\">\n                <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 0px solid #eee;color: #000;\">\n                    <h3 class=\"box-title\" style=\"color: #1a2229\">Allowances</h3>\n                </div>\n                <div class=\"box-body\" >\n                    <div class=\"row\" >\n                        <div class=\"col-sm-12\" id=\"allowances\" *ngIf=\"!removeAllownce\" >\n                              \n                            <div class=\"form-group allowancesfield\">\n                                <div class=\"col-sm-5\">\n                                    <input type=\"text\" class=\"form-control\" id=\"allowanceslabel1\" maxlength=\"30\" [(ngModel)]=\"salaryModel.allowance\" onpaste=\"return false\" oncopy=\"return false\" name=\"allowanceslabel1\"  placeholder=\"Enter Allowances Label\" autocomplete=\"off\">\n                                </div>\n\n                                <div class=\"col-sm-5\">\n                                    <input type=\"text\" class=\"form-control allowancesamount\" maxlength=\"8\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" onpaste=\"return false\" oncopy=\"return false\" id=\"allowancesamount1\" [(ngModel)]=\"salaryModel.allowance_amount\" name=\"allowancesamount1\" placeholder=\"Enter Allowances Value\" autocomplete=\"off\">\n                                </div>\n\n                                <div class=\"col-sm-2\" style=\"padding: 0px;\">\n                                    <button type=\"button\" class=\"btn btn-success btn-xs salary-btn salary-btn-allowances-add\" (click)=\"addAllowonceDeduction('A')\" id=\"salary-btn-allowances-add\" >\n                                        <i class=\"fa fa-plus\"></i>\n\n                                    </button>\n                                    <!-- <a (click)=\"removeAllownce = true;\" *ngIf=\"addedListAllownc.length !=0\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\"  style=\"margin-bottom: -6px;\"></a> -->\n                                </div>\n\n                                <span class=\"col-sm-12 errorpointallowances\" id=\"allowanceserror1\">\n                                                                            </span>\n                            </div>\n                            \n                        </div>\n                        <!-- ===========itrate-Allownce-div=============== -->\n                        <div *ngFor=\"let record of addedListAllownc; let i=index\">\n                            <div class=\"col-sm-12\" id=\"allowance\">\n\n                             <div class=\"form-group allowancesfield\">\n                                <div class=\"col-sm-5\">\n                                    <input type=\"text\" class=\"form-control\" [id]=\"'allowanceslabel1'+i\" onpaste=\"return false\" oncopy=\"return false\" maxlength=\"30\" [(ngModel)]=\"record.allowance\" [name]=\"'allowanceslabel1'+i\" placeholder=\"Enter Allowances Label\" autocomplete=\"off\">\n                                </div>\n\n                                <div class=\"col-sm-5\">\n                                    <input type=\"text\" class=\"form-control allowancesamount\" onpaste=\"return false\" oncopy=\"return false\" maxlength=\"8\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" [id]=\"'allowancesamount1'+i\" [(ngModel)]=\"record.allowance_amount\" [name]=\"'allowancesamount1'+i\" placeholder=\"Enter Allowances Value\" autocomplete=\"off\">\n                                </div>\n\n                                <div class=\"col-sm-2\">\n                                     <button type=\"button\" class=\"btn btn-success btn-xs salary-btn salary-btn-allowances-add\" (click)=\"addAllowonceDeduction('A')\" id=\"salary-btn-allowances-add\" *ngIf=\"removeAllownce\">\n                                        <i class=\"fa fa-plus\"></i>\n                                    </button>\n                                    <!-- <a (click)=\"removeList(i)\" *ngIf=\"addedListAllownc.length !=0\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\" ></a> -->\n\n                                      \n                                    <a (click)=\"removeList(i)\" *ngIf=\"addedListAllownc.length !=0\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\"  style=\"margin-bottom: -6px;\"></a>\n\n                                 </div>\n\n                                <span class=\"col-sm-12 errorpointallowances\" id=\"allowanceserror1\">\n                                </span>\n                            </div>\n                            </div>\n                        </div>\n                        <!-- ==============end========== -->\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"col-sm-6\">\n            <div class=\"box\" style=\"border: 1px solid #eee;\">\n                <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 0px solid #eee;color: #000;\">\n                    <h3 class=\"box-title\" style=\"color: #1a2229\">Deduction</h3>\n                </div>\n                <div class=\"box-body\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\" id=\"deductions\" *ngIf=\"!remove\">\n                            <div class=\"form-group deductionsfield\">\n                                <div class=\"col-sm-5\">\n                                    <input type=\"text\" class=\"form-control\" id=\"deductionslabel1\" onpaste=\"return false\" oncopy=\"return false\" maxlength=\"30\" name=\"deductionslabel1\" [(ngModel)]=\"salaryModel.deduction\" placeholder=\"Enter Deductions Label\" autocomplete=\"off\">\n                                </div>\n\n                                <div class=\"col-sm-5\">\n                                    <input type=\"text\" class=\"form-control deductionsamount\" onpaste=\"return false\" oncopy=\"return false\" maxlength=\"8\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" id=\"deductionsamount1\"  [(ngModel)]=\"salaryModel.deduction_amount\" name=\"deductionsamount1\"  placeholder=\"Enter Deductions Value\" autocomplete=\"off\">\n                                </div>\n\n                                <div class=\"col-sm-2\" style=\"padding: 0px;\">\n                                    <button type=\"button\" class=\"btn btn-success btn-xs salary-btn salary-btn-deductions-add\" (click)=\"dedutAllown('D')\" id=\"salary-btn-deductions-add\">\n                                        <i class=\"fa fa-plus\"></i>\n                                    </button>\n                                     <!-- <a (click)=\"remove = true;\" *ngIf=\"addedListDeduct.length !=0\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\" style=\"margin-bottom: -6px;\"></a> -->\n                                </div>\n\n                                <span class=\"col-sm-12 errorpointdeductions\" id=\"deductionserror1\">\n                                                                            </span>\n                            </div>\n                        </div>\n                        <!-- ==========deduction-itrate============= -->\n                        <div *ngFor=\"let deduct of addedListDeduct; let i=index\" >\n                        <div class=\"col-sm-12\" id=\"deductions\">\n                            <div class=\"form-group deductionsfield\">\n                                <div class=\"col-sm-5\">\n                                    <input type=\"text\" class=\"form-control\" [id]=\"'deductionslabel1'+i\" onpaste=\"return false\" oncopy=\"return false\" maxlength=\"30\" [name]=\"'deductionslabel1'+i\" [(ngModel)]=\"deduct.deduction\" placeholder=\"Enter Deductions Label\">\n                                </div>\n\n                                <div class=\"col-sm-5\">\n                                    <input type=\"number\" class=\"form-control deductionsamount\" onpaste=\"return false\" oncopy=\"return false\" maxlength=\"8\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" [id]=\"'deductionsamount1'+i\"  [(ngModel)]=\"deduct.deduction_amount\" [name]=\"'deductionsamount1'+i\" placeholder=\"Enter Deductions Value\" autocomplete=\"off\">\n                                </div>\n\n                                <div class=\"col-sm-2\">\n\n                                     <button type=\"button\" class=\"btn btn-success btn-xs salary-btn salary-btn-deductions-add\" (click)=\"dedutAllown('D')\" id=\"salary-btn-deductions-add\" *ngIf=\"remove\">\n                                        <i class=\"fa fa-plus\"></i>\n                                    </button>\n                                    \n                                    <a (click)=\"removeListDeduct(i)\" *ngIf=\"addedListDeduct.length !=0\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\" style=\"margin-bottom: -6px;\"></a>\n\n                                </div>\n\n                                <span class=\"col-sm-12 errorpointdeductions\" id=\"deductionserror1\">\n                                                                            </span>\n                            </div>\n                        </div>\n\n                        </div>\n                        <!-- =========end============= -->\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-sm-8 col-sm-offset-4\" style=\"padding-right: 0px;\">\n            <div class=\"box\" style=\"border: 0px solid #eee;\">\n                <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 1px solid #eee;color: #000;\">\n                    <h3 class=\"box-title\" style=\"color: #1a2229\">Total Salary Details</h3>\n                </div><!-- /.box-header -->\n                <!-- form start -->\n                <div class=\"box-body\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <table class=\"table table-bordered\">\n                                <tbody><tr>\n                                    <td class=\"col-sm-8\" style=\"line-height: 36px\">Gross Salary</td>\n\n                                    <td class=\"col-sm-4\"><input class=\"form-control\" id=\"gross_salary\" type=\"number\" disabled=\"disabled\" name=\"gross_salary\" [(ngModel)]=\"salaryModel.gross_salary\"></td>\n                                </tr>\n\n                                <tr>\n                                    <td class=\"col-sm-8\" style=\"line-height: 36px\">Total Deduction</td>\n\n                                    <td class=\"col-sm-4\"><input class=\"form-control\" id=\"total_deduction\" type=\"number\" disabled=\"disabled\" name=\"total_deduction\" [(ngModel)]=\"salaryModel.total_deduction\" ></td>\n                                </tr>\n\n                                <tr>\n                                    <td class=\"col-sm-8\" style=\"line-height: 36px\">Net Salary</td>\n\n                                    <td class=\"col-sm-4\"><input class=\"form-control\" id=\"net_salary\" type=\"number\" disabled=\"disabled\" name=\"net_salary\" [(ngModel)]=\"salaryModel.net_salary\"></td>\n                                </tr>\n                            </tbody></table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf=\"!salaryModel.template_id\">\n            <input class=\"blue_button pull-right\" type=\"button\" id=\"addSalaryTemplate\" (click)=\"createSalary()\" value=\"Add Salary Template\">\n        </div>\n        <div *ngIf=\"salaryModel.template_id\">\n            <input class=\"blue_button pull-right\" type=\"button\" id=\"updateSalaryTemplate\" (click)=\"updateSalary()\" value=\"Update Salary Template\">\n        </div>\n<!-- ===back======== -->\n<!-- <div>\n    <input class=\"blue_button1 pull-left\" type=\"button\" id=\"updateSalaryTemplate\" (click)=\"back()\" value=\"Back\">\n</div> -->\n<!-- ============ -->\n</div>\n\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-salary-payment/add-salary-payment.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-salary-payment/add-salary-payment.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n     <a routerLink=\"/view/payrole/make-payment\">\n       Salary Payment\n     </a>\n     <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n     View Payment History\n   </h1>\n </section>\n<div class=\"col-sm-3\">\n    <div class=\"box\" >\n       \n    <div class=\"box box-primary\">\n        <div class=\"box-body box-profile\">\n            <img src=\"https://proctur.s3-ap-southeast-1.amazonaws.com/logos/gender.jpg\" style=\"margin-left: 30%;\" alt=\"\">                        \n            <h3 class=\"student-username text-center\">{{historyModel.user_name}}</h3>\n            <p class=\"text-muted text-center\">{{historyModel.user_role}}</p>\n            <ul class=\"list-group list-group-unbordered\">\n                <!-- <li class=\"list-group-item\" style=\"background-color: #FFF\">\n                    <b class=\"lebal\">Gender</b> <a class=\"pull-right\">{{historyModel.user_gender}}</a>\n                </li> -->\n                <li class=\"list-group-item\" style=\"background-color: #FFF\">\n                    <b class=\"lebal\">Date of Birth</b> <a class=\"pull-right\">{{historyModel.dob}}</a>\n                </li>\n                <li class=\"list-group-item\" style=\"background-color: #FFF\">\n                    <b class=\"lebal\">Phone</b> <a class=\"pull-right\">{{historyModel.user_phone}}</a>\n                </li>\n            </ul>\n        </div>\n        <!-- ==========second-div========== -->\n        \n        <div class=\"box\" style=\"margin-bottom: 25px;\">\n            <div class=\"box-header\">\n                <h3 class=\"box-title\"><i class=\"fa fa-money\"></i> Make Payment</h3>\n            </div><!-- /.box-header -->\n            <!-- form start -->\n            <div class=\"box-body\">\n                <form >\n                    <div class=\"form-group\">\n                        <label for=\"gross_salary\" >Gross Salary <span class=\"text-red\">*</span></label>\n                        <input type=\"number\" name=\"gross_salary\" class=\"form-control\" disabled [(ngModel)]=\"historyModel.gross_salary\" >\n                    </div>\n\n                    <div class=\"form-group \">\n                        <label for=\"total_deduction\">Total Deduction <span class=\"text-red\">*</span></label>\n                        <input type=\"number\" name=\"total_deduction\" class=\"form-control\" disabled [(ngModel)]=\"historyModel.total_deduction\">\n                    </div>\n\n                    <div class=\"form-group \">\n                        <label for=\"net_salary\">Net Salary <span class=\"text-red\">*</span></label>\n                        <input type=\"number\" name=\"net_salary\" class=\"form-control\" id=\"net_salary\" disabled [(ngModel)]=\"historyModel.net_salary\" >\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label for=\"month\">Month <span class=\"text-red\">*</span></label>\n                      <span class=\"text-red\"></span>\n                      <input  [(ngModel)]=\"sal_month\" autocomplete=\"off\" class=\"form-control\" name=\"date\" bsDatepicker [bsConfig]=\"{dateInputFormat: 'YYYY-MM'}\" (onShown)=\"onOpenCalendar($event)\">\n                  </div>\n\n                    <div class=\"form-group \" *ngIf=\"historyModel.salary_type == 'H'\">\n                      <label for=\"total-hour\">Total Hour <span class=\"text-red\">*</span></label>\n                      <input type=\"text\" name=\"total_hours\"  onKeyPress=\"if(this.value.length==9) return false;\" onpaste=\"return false\" oncopy=\"return false\" maxlength=\"8\" class=\"form-control\" id=\"total_hours\" [(ngModel)]=\"historyModel.total_hours\" (ngModelChange)=\"calcPaymentAmont()\">\n                      <span class=\"text-red\"></span>\n                  </div>\n\n\n\n\n                    \n                    <div class=\"form-group \">\n                        <label for=\"payment_amount\">Payment Amount <span class=\"text-red\">*</span></label>                            \n                         <input type=\"text\" name=\"payment_amount\"  onKeyPress=\"if(this.value.length==9) return false;\" onpaste=\"return false\" oncopy=\"return false\" maxlength=\"8\" class=\"form-control\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"  id=\"payment_amount\" [(ngModel)]=\"historyModel.payment_amount\" autocomplete=\"off\" >\n                        <span class=\"text-red\">\n                        </span>\n                    </div>\n\n                    <div class=\"form-group \">\n                        <label for=\"payment_method\">Payment Method <span class=\"text-red\">*</span></label>\n                        <select name=\"payment_method\" id=\"payment_method\" [(ngModel)]=\"historyModel.payment_method\" class=\"form-control\">\n                        <option value=\"0\">Select Payment Method</option>\n                        <option value=\"cash\">Cash</option>\n                         <option value=\"cheque\">Cheque</option>\n                         <option value=\"Net Banking\">Net Banking</option>\n                            </select>\n                        <span class=\"text-red\">\n                         </span>\n                    </div>\n\n                    <div class=\"form-group \">\n                        <label for=\"comments\">Comments</label>\n                        <input type=\"text\" name=\"comments\" [(ngModel)]=\"historyModel.comment\" maxlength=\"70\" onpaste=\"return false\" oncopy=\"return false\" class=\"form-control\" id=\"comments\" autocomplete=\"off\">\n                    </div>\n                    <div>\n                    <button class=\"blue_button1 left\" (click)=\"backPage()\">Back</button>\n                     </div>\n                    <button class=\"blue_button \" (click)=\"createSalaryPayment()\" >Add Payement</button>\n                </form>\n            </div>\n        </div>\n        <!-- ==========end======= -->\n    </div>\n    </div>\n</div>\n<div class=\"col-sm-9\">\n    <div class=\"head_padding\">\n        <div class=\"w98 display\">\n          <div class=\"page_heading\">\n            <p>Payment History</p>\n          </div>\n          <div>\n            <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/copy.svg\" title=\"Send Report to email\"></a> -->\n            <a class=\"mr10\" (click)=\"downloadPdf()\"><img src=\"../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a>\n            <a (click)=\"downloaExcel()\" class=\"mr10\"><img src=\"../../../assets/img1/excel.svg\" title=\"Print Report\"></a>\n            <!-- <a  class=\"mr10\"><img src=\"../../../assets/img1/print.svg\" title=\"Print Report\"></a> -->\n  \n          </div>\n        </div>\n      </div>\n      <div class=\"w98\">\n          <div class=\"pt15\">\n              <label for=\"serach\">Search:&nbsp;</label>\n            <input type=\"text\" class=\"input wid240 mr10\" name=\"\" [(ngModel)]=\"searchInput\" (keyup)=\"searchInputs(search)\" placeholder=\"search\" #search>\n              <!-- <button class=\"blue_button\" (click)=\"addSalaryPage()\">Add Salary Template</button> -->\n          </div>\n  \n    <div class=\"table_heading\" >\n       \n        <div>\n        #\n        </div>\n        <!-- <div>Photo</div> -->\n        <div>\n          Month\n        </div>\n        <div>\n          Date\n        </div>\n        <div>\n          Net Salary\n        </div>\n        <div>\n        Payment Amount\n          </div>\n        <div>Action</div>\n      </div>\n      <div class=\"table_body\" *ngFor=\"let item of allHistoryPementList;let i=index\">\n        \n       <div>\n        {{i+1}}\n        </div>\n        <!-- <div>photo</div> -->\n        <div>\n            {{item.month}}\n        </div>\n        <div>\n            {{item.payment_date}}\n        </div>\n        <div>\n        {{item.template_dto.net_salary}}\n        </div>\n        <div>\n            {{item.payment_amount}}\n        </div>\n        <div>\n          <!-- <a  class=\"btn btn-primary btn-xs mrg\" data-placement=\"top\" title=\"Add\" ><i class=\"fa fa-plus\" ></i></a> -->\n          <a  class=\"mr10\" (click)=\"onclickView(item)\"><img src=\"../../../assets/img1/view.svg\" title=\"View\" class=\"group18\"></a>\n          <!-- <a  class=\"mr10\" (click)=\"onClickEdit(user.user_id)\"><img src=\"../../../assets/img1/edit.svg\" title=\"Edit\" class=\"group18\"></a> -->\n          <a  (click)=\"deletPayemt(item.history_id)\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\" ></a>\n        </div>\n        </div>\n        <!-- </div> -->\n        </div>\n        <div class=\"modal\" id=\"deleteModal\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\" >you are about to delete a record. This cannot be undone. are you sure?</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"pt10 h10\">\n                  <button class=\"white_button\" data-dismiss=\"modal\">Cancel</button>\n                  <button class=\"blue_button right\">Delete</button>\n                </div>\n              </div>        \n            </div>\n          </div>\n        </div> \n        <div *ngIf=\"allHistoryPementList.length == '0'\">No Record Found</div>\n        \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/hourly-template/hourly-template.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/hourly-template/hourly-template.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <div class=\"page-content\">\n  <div class=\"head_padding\">\n    <div class=\"w98 display\">\n      <div class=\"page_heading\">\n        <p>Hourly Template</p>\n      </div>\n      <div>\n        <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/copy.svg\" title=\"Send Report to email\"></a> -->\n        <a class=\"mr10\" (click)=\"downloadPdf()\"><img src=\"../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a>\n        <a (click)=\"downloaExcel()\" class=\"mr10\"><img src=\"../../../assets/img1/excel.svg\" title=\"Print Report\"></a>\n        <!-- <a  class=\"mr10\"><img src=\"../../../assets/img1/print.svg\" title=\"Print Report\"></a> -->\n\n      </div>\n    </div>\n  </div>\n  <div class=\"w98\">\n      <div class=\"pt15\">\n          <label for=\"serach\">Search:&nbsp;</label>\n        <input type=\"text\" class=\"input wid240 mr10\" [(ngModel)]=\"searchInput\" (keyup)=\"searchFun(search)\" name=\"\" placeholder=\"search\" #search>\n          <button class=\"blue_button\" (click)=\"addHourly()\">Add Hourly Template</button>\n      </div>\n      <div class=\"leave_cat\">\n          <div class=\"table_heading\">\n            <div>\n             #\n            </div>\n            <div>Hourly Grades </div>\n            <div>Hourly Rate</div>\n            <div>Action</div>\n          </div>\n          <div class=\"table_body\" *ngFor=\"let item of hourlyDataList;let i=index;\">\n            <div>\n              {{i+1}}\n            </div>\n            <div>\n              {{item.hourly_grade}}\n            </div>\n           <div>{{item.hourly_rate}}</div>\n           <div>\n              <a  class=\"mr10\" (click)=\"onEdit(item.template_id)\"><img src=\"../../../assets/img1/edit.svg\" title=\"Edit\" class=\"group18\"></a>\n              <a (click)=\"deleteHourly(item.template_id)\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\" ></a>\n            </div>\n          </div>\n       </div>\n  </div>\n      \n  \n \n\n\n<div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;\">\n<div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n  <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n    [pagesToShow]=\"10\" [page]=\"varJson.pageOffset\" [perPage]=\"varJson.pageSize\"  [sizeArr]=\"varJson.sizeArr\"\n    (sizeChange)=\"updateTableBatchSize($event)\"  [count]=\"varJson.total_item\">\n  </pagination>\n</div>\n</div> \n\n\n\n<div class=\"modal\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" >you are about to delete a record. This cannot be undone. are you sure?</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"pt10 h10\">\n          <button class=\"white_button\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"blue_button right\" (click)=\"deleteHourly()\">Delete</button>\n        </div>\n      </div>        \n    </div>\n  </div>\n</div> \n<div *ngIf=\"hourlyDataList.length == '0'\">No Record Found</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/make-payment/make-payment.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/make-payment/make-payment.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"page-content\">\n    <div class=\"head_padding\">\n      <div class=\"w98 display\">\n        <div class=\"page_heading\">\n          <p>Make Payment</p>\n        </div>\n        <div>\n          <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/copy.svg\" title=\"Send Report to email\"></a> -->\n          <a class=\"mr10\" (click)=\"downloadPdf()\"><img src=\"../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a>\n          <a (click)=\"downloaExcel()\" class=\"mr10\"><img src=\"../../../assets/img1/excel.svg\" title=\"Print Report\"></a>\n          <!-- <a  class=\"mr10\"><img src=\"../../../assets/img1/print.svg\" title=\"Print Report\"></a> -->\n\n        </div>\n      </div>\n    </div>\n    <div class=\"w98\">\n      <div class=\"hourlydiv\">\n        <label for=\"hourly_grades\">\n          Role<span class=\"text-red\">*</span>\n      </label>\n      <select class=\"form-control\" id=\"hourly_grades\" [(ngModel)]=\"selectedId\" name=\"hourly_grades\" (ngModelChange)=\"getAlluserData()\">\n          <option value=\"-1\">Select Role</option>\n          <!-- <option value=\"0\">Teacher</option> -->\n         <option [value]=\"role.role_id\" *ngFor=\"let role of teacherList\">{{role.role_name}}</option>\n          </select>\n         \n          </div>\n          <div class=\"hourlydiv\">\n            <p style=\"height:15px;visibility: hidden;\">fhgf</p>\n            <p><span style=\"font-style: bold;color:black;font-weight: 600;\">Note <span style=\"font-style: bold;color:red\">*</span> :</span> Faculty having multiple role, will get displayed only in <span style=\"font-style: bold;color:black;font-weight: 600;\">Faculty</span> list while in Salary Payment.</p>\n          </div>\n        <div class=\"pt15\">\n         \n    <label for=\"serach\">Search&nbsp;:&nbsp;</label>\n          <input type=\"text\" class=\"input wid240 mr10\" name=\"\" [(ngModel)]=\"searchInput\" (keyup)=\"searchFun(search)\" placeholder=\"search\" #search>\n            <!-- <button class=\"blue_button\" (click)=\"addSalaryPage()\">Add Salary Template</button> -->\n        </div>\n<!-- ===================== -->\n<!-- <div class=\"page_heading\">\n    <p>Hourly Template</p>\n  </div> -->\n <!-- <div class=\"form-group\">                       \n        \n        <div class=\"col-sm-4\" style=\"padding: 28px;\">\n            <label for=\"hourly_grades\">\n                Role<span class=\"text-red\">*</span>\n            </label>\n            <select class=\"form-control\" id=\"hourly_grades\" [(ngModel)]=\"selectedId\" name=\"hourly_grades\" (ngModelChange)=\"getAlluserData()\">\n                <option value=\"-1\">Select Role</option>\n                <option value=\"0\">Teacher</option>\n               <option [value]=\"role.role_id\" *ngFor=\"let role of teacherList\">{{role.role_name}}</option>\n                </select>\n        </div>\n        <span class=\"col-sm-4 control-label\" id=\"hourly_grades_error\">\n         </span>\n    </div> -->\n\n    <div class=\"table_heading\" >\n       \n          <div>\n          #\n          </div>\n          <!-- <div>Photo</div> -->\n          <div>\n            Name\n          </div>\n          <div>\n            Email\n          </div>\n          <div>\n            Joining Date\n          </div>\n          <div style=\"padding-left: 8%;\">Action</div>\n        </div>\n        <div class=\"table_body\" *ngFor=\"let user of allUserDataList;let i=index\">\n          \n         <div>\n          {{i+1}}\n          </div>\n          <!-- <div>photo</div> -->\n          <div>\n            {{user.user_name}}\n          </div>\n          <div>\n            {{user.user_email}}\n          </div>\n          <div>\n            {{user.joining_date}}\n          </div>\n          <div>\n            <button class=\"blue_button1 right\" (click)=\"onclickMakePayment(user)\">Make Payement</button>\n\n            <!-- <a class=\"btn btn-primary btn-xs mrg\" data-placement=\"top\" title=\"Add\" ><i class=\"fa fa-plus\" ></i></a>\n            <a class=\"mr10\"><img src=\"../../../assets/img1/view.svg\" title=\"View\" class=\"group18\"></a>\n            <a class=\"mr10\" (click)=\"onClickEdit(user.user_id)\"><img src=\"../../../assets/img1/edit.svg\" title=\"Edit\" class=\"group18\"></a>\n            <a  data-toggle=\"modal\" data-target=\"#deleteModal\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\" ></a> -->\n          </div>\n       \n          \n          </div>\n          </div>\n          </div>\n          <div class=\"modal\" id=\"deleteModal\">\n            <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" >you are about to delete a record. This cannot be undone. are you sure?</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"pt10 h10\">\n                    <button class=\"white_button\" data-dismiss=\"modal\">Cancel</button>\n                    <button class=\"blue_button right\" >Delete</button>\n                  </div>\n                </div>        \n              </div>\n            </div>\n          </div> \n          <div *ngIf=\"allUserDataList.length == 0\" class=\"empty-img\"><img src=\"../../../../assets/images/Empty.svg\" >\n            <p>Use Filters For View details</p></div>\n         \n        \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/manage-salary/manage-salary.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/manage-salary/manage-salary.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"page-content\">\n    <div class=\"head_padding\">\n      <div class=\"w98 display\">\n        <div class=\"page_heading\">\n          <p>Manage Salary</p>\n        </div>\n        <div>\n          <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/copy.svg\" title=\"Send Report to email\"></a> -->\n          <a class=\"mr10\" (click)=\"downloadPdf()\"><img src=\"../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a>\n          <a (click)=\"downloaExcel()\" class=\"mr10\"><img src=\"../../../assets/img1/excel.svg\" title=\"Print Report\"></a>\n          <!-- <a  class=\"mr10\"><img src=\"../../../assets/img1/print.svg\" title=\"Print Report\"></a> -->\n\n        </div>\n      </div>\n    </div>\n    <div class=\"w98\">\n      <div class=\"hourlygrade\">\n      <label for=\"hourly_grades\">\n        Role<span class=\"text-red\">*</span>\n    </label>\n    <select class=\"form-control\" id=\"hourly_grades\" [(ngModel)]=\"selectedId\"  name=\"hourly_grades\"  (ngModelChange)=\"getAlluserData()\">\n        <option value=\"-1\">Select Role</option>\n        <!-- <option value=\"0\">Teacher</option> -->\n       <option [value]=\"teacher.role_id\" *ngFor=\"let teacher of teacherList\">{{teacher.role_name}}</option>\n    </select>\n   </div>\n   <div class=\"hourlygrade\">\n    <p style=\"height:15px;visibility: hidden;\">fhgf</p>\n    <p><span style=\"font-style: bold;color:black;font-weight: 600;\">Note <span style=\"font-style: bold;color:red\">*</span> :</span> Faculty having multiple role, will get displayed only in <span style=\"font-style: bold;color:black;font-weight: 600;\">Faculty</span> list while in Manage Salary.</p>\n  </div>\n        <div class=\"pt15\">\n        \n            <label for=\"serach\">Search:&nbsp;</label>\n          <input type=\"text\" class=\"input wid240 mr10\" name=\"\" [(ngModel)]=\"searchInput\" (keyup)=\"searchFun(search)\" placeholder=\"search\" #search>\n    \n        </div>\n       \n\n<!-- ===================== -->\n\n <!-- <div class=\"form-group\">                       \n        \n        <div class=\"col-sm-4\" style=\"padding: 28px;\">\n            <label for=\"hourly_grades\">\n                Role<span class=\"text-red\">*</span>\n            </label>\n            <select class=\"form-control\" id=\"hourly_grades\" [(ngModel)]=\"selectedId\"  name=\"hourly_grades\"  (ngModelChange)=\"getAlluserData()\">\n                <option value=\"-1\">Select Role</option>\n                <option value=\"0\">Teacher</option>\n               <option [value]=\"teacher.role_id\" *ngFor=\"let teacher of teacherList\">{{teacher.role_name}}</option>\n                </select>\n        </div>\n        <span class=\"col-sm-4 control-label\" id=\"hourly_grades_error\">\n         </span>\n    </div> -->\n\n    <div class=\"table_heading\" >\n       \n          <div>\n          #\n          </div>\n          <!-- <div>Photo</div> -->\n          <div>\n            Name\n          </div>\n          <div>\n            Email\n          </div>\n          <div>\n            Joining Date\n          </div>\n          <div style=\"padding-left: 3%;\">Action</div>\n        </div>\n        <div class=\"table_body\" *ngFor=\"let user of allUserDataList;let i=index\">\n          \n         <div>\n          {{i+1}}\n          </div>\n          <!-- <div>photo</div> -->\n          <div>\n            {{user.user_name}}\n          </div>\n          <div>\n           {{user.user_email}}\n          </div>\n          <div>\n            {{user.joining_date}}\n          </div>\n          <div>\n            <a *ngIf=\"user.is_template_assigned == false\" (click)=\"onClickAdd(user)\"class=\"btn btn-primary btn-xs mrg\" data-placement=\"top\" title=\"Add\" ><i class=\"fa fa-plus\" ></i></a>\n            <a *ngIf=\"!user.is_template_assigned == false\" class=\"mr10\" (click)=\"onclickView(user)\"><img src=\"../../../assets/img1/view.svg\" title=\"View\" class=\"group18\"></a>\n            <a  *ngIf=\"!user.is_template_assigned == false\"class=\"mr10\" (click)=\"onClickEdit(user)\"><img src=\"../../../assets/img1/edit.svg\" title=\"Edit\" class=\"group18\"></a>\n            <!-- <a *ngIf=\"!user.is_template_assigned == false\" (click)=\"setDeleteData(user)\" data-toggle=\"modal\" data-target=\"#deleteModal\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\" ></a> -->\n            <a *ngIf=\"!user.is_template_assigned == false\" (click)=\"removeTemplate(user)\" ><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\" ></a>\n\n          </div>\n          </div>\n          </div>\n          </div>\n          <div class=\"modal\" id=\"deleteModal\">\n            <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\" >you are about to delete a record. This cannot be undone. are you sure?</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                  <div class=\"pt10 h10\">\n                    <button class=\"white_button\" data-dismiss=\"modal\">Cancel</button>\n                    <button class=\"blue_button right\" (click)=\"removeTemplate()\">Delete</button>\n                  </div>\n                </div>        \n              </div>\n            </div>\n          </div> \n          <div *ngIf=\"allUserDataList.length == 0\" class=\"empty-img\"><img src=\"../../../../assets/images/Empty.svg\" >\n            <p>Use Filters For View details</p>\n          </div>\n          \n        \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/payrole/payrole.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/payrole/payrole.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/salary-template/salary-template.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/salary-template/salary-template.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <div class=\"page-content\">\n    <div class=\"head_padding\">\n      <div class=\"w98 display\">\n        <div class=\"page_heading\">\n          <p>Salary Template</p>\n        </div>\n        <div>\n          <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/copy.svg\" title=\"Send Report to email\"></a> -->\n          <a class=\"mr10\" (click)=\"downloadPdf()\"><img src=\"../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a>\n          <a (click)=\"downloaExcel()\" class=\"mr10\"><img src=\"../../../assets/img1/excel.svg\" title=\"Print Report\"></a>\n          <!-- <a  class=\"mr10\"><img src=\"../../../assets/img1/print.svg\" title=\"Print Report\"></a> -->\n\n        </div>\n      </div>\n    </div>\n    <div class=\"w98\">\n        <div class=\"pt15\">\n            <label for=\"serach\">Search:&nbsp;</label>\n          <input type=\"text\" class=\"input wid240 mr10\" [(ngModel)]=\"searchInput\" (keyup)=\"searchFun(search)\" name=\"\" placeholder=\"search\" #search>\n            <button class=\"blue_button\" (click)=\"addSalaryPage()\">Add Salary Template</button>\n        </div>\n        <div class=\"leave_cat\">\n            <div class=\"table_heading\">\n              <div>\n               #\n              </div>\n             \n              <div>Salary Grades </div>\n              <div>Basic Salary</div>\n              <div>Overtime Rate</div>\n              <!-- <div>Total Deduction</div> -->\n\n              <div>Action</div>\n            </div>\n            <div class=\"table_body\"  *ngFor=\"let item of salrayDataList ; let i=index\">\n              <div>\n                {{i+1}}\n              </div>\n              <div>\n                {{item.salary_grade}}\n              </div>\n             <div>{{item.basic_salary}}</div>\n             <div>{{item.overtime_rate}}</div>\n             <!-- <div>{{item.total_deduction}}</div> -->\n\n              <div>\n                <a  class=\"mr10\" (click)=\"onclickView(item.template_id)\"><img src=\"../../../assets/img1/view.svg\" title=\"Edit\" class=\"group18\"></a>\n                <a  class=\"mr10\" (click)=\"onClickEdit(item.template_id)\"><img src=\"../../../assets/img1/edit.svg\" title=\"Edit\" class=\"group18\"></a>\n                <a  class=\"mr10\" (click)=\"deletSalary(item.template_id)\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\" ></a>\n\n                <!-- <a  data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"deletById(item.template_id)\"><img src=\"../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\" ></a> -->\n              </div>\n            </div>\n         </div>\n    </div>\n        \n    \n   \n\n\n<div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;\">\n  <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n    <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n      [pagesToShow]=\"10\" [page]=\"varJson.pageOffset\" [perPage]=\"varJson.pageSize\"  [sizeArr]=\"varJson.sizeArr\"\n      (sizeChange)=\"updateTableBatchSize($event)\"  [count]=\"varJson.total_item\">\n    </pagination>\n  </div>\n</div>\n\n\n \n  <div class=\"modal\" id=\"deleteModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" >you are about to delete a record. This cannot be undone. are you sure?</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"pt10 h10\">\n            <button class=\"white_button\" data-dismiss=\"modal\">Cancel</button>\n            <button class=\"blue_button right\" (click)=\"deletSalary()\">Delete</button>\n          </div>\n        </div>        \n      </div>\n    </div>\n  </div> \n  <div *ngIf=\"salrayDataList.length == '0'\">No Record Found</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/view-manage-template/view-manage-template.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/view-manage-template/view-manage-template.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n     <a routerLink=\"/view/payrole/manage-salary\">\n       Manage Salary Template\n     </a>\n     <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n     View Salary Template\n   </h1>\n </section>\n<div class=\"col-sm-3\">\n    <div class=\"box box-primary\">\n        <div class=\"box-body box-profile\">\n            <img src=\"https://proctur.s3-ap-southeast-1.amazonaws.com/logos/gender.jpg\" style=\"margin-left: 25%;\" alt=\"\">                        \n            <h3 class=\"student-username text-center\">{{ManageSalaryModel.user_name}}</h3>\n            <p class=\"text-muted text-center\">{{ManageSalaryModel.user_role}}</p>\n            <ul class=\"list-group list-group-unbordered\">\n                <!-- <li class=\"list-group-item\" style=\"background-color: #FFF\">\n                    <b>Gender</b> <a class=\"pull-right\">{{ManageSalaryModel.user_gender}}</a>\n                </li> -->\n                <li class=\"list-group-item\" style=\"background-color: #FFF\">\n                    <b>Date of Birth</b> <a class=\"pull-right\">{{ManageSalaryModel.user_dob}}</a>\n                </li>\n                <li class=\"list-group-item\" style=\"background-color: #FFF\">\n                    <b>Phone</b> <a class=\"pull-right\">{{ManageSalaryModel.user_phone}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<div class=\"col-sm-9\">\n    <div class=\"nav-tabs-custom\">\n        <!-- <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#salaryinfo\" data-toggle=\"tab\">Salary Info</a></li>\n        </ul> -->\n\n        <div class=\"tab-content\">\n            <div class=\"active tab-pane\" id=\"salaryinfo\">\n                <br>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\" style=\"margin-bottom: 10px;\">\n                            <div class=\"info-box\">\n                                <p style=\"margin:0 0 20px\">\n                                    <span>Salary Grades :&nbsp;</span>\n                                 {{ ManageSalaryModel.salary_type =='H'? ManageSalaryModel.hourly_grade: ManageSalaryModel.salary_grade  }} </p>\n\n                                <p style=\"margin:0 0 20px\" *ngIf=\"ManageSalaryModel.salary_type =='M'\">\n                                    <span>Basic Salary:&nbsp;</span>\n                                    {{ManageSalaryModel.basic_salary}}  </p>\n\n                                <p style=\"margin:0 0 20px\" *ngIf=\"ManageSalaryModel.salary_type =='M'\">\n                                    <span>Overtime Rate (Per Hour):&nbsp;</span>\n                                    {{ManageSalaryModel.overtime_rate}}  </p>\n                                    <p style=\"margin:0 0 20px\" *ngIf=\"ManageSalaryModel.salary_type =='H'\">\n                                        <span>Hourly Rate:&nbsp;</span>\n                                        {{ManageSalaryModel.hourly_rate}}  </p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" *ngIf=\"ManageSalaryModel.salary_type =='M'\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"box\" style=\"border: 1px solid #eee\">\n                                <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 1px solid #eee;color: #000;\">\n                                    <h3 class=\"box-title\" style=\"color: #1a2229;text-align: center;\">Allowances</h3>\n                                </div>\n                                <div class=\"box-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\" id=\"allowances\" *ngFor=\"let i of addedListAllownc\">\n                                            <div class=\"info-box\">\n                                                <p style=\"display: flex;justify-content: space-around;\">\n                                                    <span> {{i.allowance}} -</span>\n                                                    {{i.allowance_amount}} </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-6\">\n                            <div class=\"box\" style=\"border: 1px solid #eee;\">\n                                <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 1px solid #eee;color: #000;\">\n                                    <h3 class=\"box-title\" style=\"color: #1a2229;text-align: center;\">Deduction</h3>\n                                </div><!-- /.box-header -->\n                                <!-- form start -->\n                                <div class=\"box-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\" id=\"deductions\" *ngFor=\"let a of addedListDeduct\">\n                                            <div class=\"info-box\">\n                                                <p style=\"display: flex;justify-content: space-around;\">\n                                              <span>{{a.deduction}} -</span>\n                                              {{a.deduction_amount}} </p>\n                                                </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-8 col-sm-offset-4\">\n                            <div class=\"box\" style=\"border: 1px solid #eee;\">\n                                <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 1px solid #eee;color: #000;\">\n                                    <h3 class=\"box-title\" style=\"color: #1a2229\">Total Salary Details</h3>\n                                </div>\n                                <div class=\"box-body\">\n                                    <table class=\"table table-bordered\">\n                                        <tbody><tr>\n                                            <td class=\"col-sm-8\" style=\"line-height: 36px;font-size: 13px;font-family: 'Open Sans', sans-serif;\" >Gross Salary</td>\n                                            <td class=\"col-sm-4\" style=\"line-height: 36px\">{{ManageSalaryModel.gross_salary}}</td>\n                                        </tr>\n\n                                        <tr>\n                                            <td class=\"col-sm-8\" style=\"line-height: 36px;font-size: 13px;font-family: 'Open Sans', sans-serif\">Total Deduction</td>\n\n                                            <td class=\"col-sm-4\" style=\"line-height: 36px\">{{ManageSalaryModel.total_deduction}}</td>\n                                        </tr>\n\n                                        <tr>\n                                            <td class=\"col-sm-8\" style=\"line-height: 36px;font-size: 13px;font-family: 'Open Sans', sans-serif\">Net Salary</td>\n\n                                            <td class=\"col-sm-4\" style=\"line-height: 36px\"><b>{{ManageSalaryModel.net_salary}}</b></td>\n                                        </tr>\n                                    </tbody></table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n             </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/view-salary-payment/view-salary-payment.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/view-salary-payment/view-salary-payment.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n     <a routerLink=\"/view/payrole/make-payment\">\n       Make Payment\n     </a>\n     <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n     View Salary History\n   </h1>\n </section>\n <div class=\"content\">\n<div class=\"col-sm-3\">\n    <div class=\"box box-primary\">\n        <div class=\"box-body box-profile\">\n            <img src=\"https://proctur.s3-ap-southeast-1.amazonaws.com/logos/gender.jpg\" style=\"margin-left: 28%;\" alt=\"\">                        \n            <h3 class=\"student-username text-center\">{{salaryModel.user_name}}</h3>\n            <p class=\"text-muted text-center\">{{salaryModel.user_role}}</p>\n            <ul class=\"list-group list-group-unbordered\">\n                <!-- <li class=\"list-group-item\" style=\"background-color: #FFF\">\n                    <b>Gender</b> <a class=\"pull-right\">{{salaryModel.user_gender}}</a>\n                </li> -->\n                <li class=\"list-group-item\" style=\"background-color: #FFF\">\n                    <b>Date of Birth</b> <a class=\"pull-right\">{{salaryModel.user_dob}}</a>\n                </li>\n                <li class=\"list-group-item\" style=\"background-color: #FFF\">\n                    <b>Phone</b> <a class=\"pull-right\">{{salaryModel.phone}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n</div>\n<div class=\"col-sm-9\">\n    <div class=\"nav-tabs-custom\">\n        <!-- <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#salaryinfo\" data-toggle=\"tab\">Salary Info</a></li>\n        </ul> -->\n\n        <div class=\"tab-content\">\n            <div class=\"active tab-pane\" id=\"salaryinfo\">\n                <br>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\" style=\"margin-bottom: 10px;\">\n                            <div class=\"info-box\">\n                                <p style=\"margin:0 0 20px\">\n                                    <span>Salary Grades:&nbsp;&nbsp;</span>\n                                 {{salaryModel.salary_type == 'H' ? salaryModel.hourly_grade :salaryModel.salary_grade}} </p>\n\n                                <p style=\"margin:0 0 20px\">\n                                    <span>Basic Salary:&nbsp;&nbsp;</span>\n                                    {{salaryModel.basic_salary}}  </p>\n\n                                <p style=\"margin:0 0 20px\">\n                                    <span>Overtime Rate (Per Hour):&nbsp;&nbsp;</span>\n                                    {{salaryModel.overtime_rate}}  </p>\n\n                                    <p style=\"margin:0 0 20px\">\n                                        <span>Month:&nbsp;&nbsp;</span>\n                                         {{salaryModel.month}}</p>\n                                         <p style=\"margin:0 0 20px\">\n                                        <span>Date:&nbsp;&nbsp;</span>\n                                        {{salaryModel.payment_date}}</p>\n                                        <p style=\"margin:0 0 20px\">\n                                     <span>Payment Method:&nbsp;&nbsp;</span>\n                                     {{salaryModel.payment_method}}</p>\n                                               \n                                    <p style=\"margin:0 0 20px\">\n                                     <span>Comments:&nbsp;&nbsp;</span>\n                                     {{salaryModel.comment}}</p>     \n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" *ngIf=\"salaryModel.salary_type == 'M'\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"box\" style=\"border: 1px solid #eee\">\n                                <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 1px solid #eee;color: #000;\">\n                                    <h3 class=\"box-title\" style=\"color: #1a2229;text-align: center;\">Allowances</h3>\n                                </div>\n                                <div class=\"box-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\" id=\"allowances\" *ngFor=\"let i of addedListAllownc\">\n                                            <div class=\"info-box\" >\n                                                <p  style=\"display: flex;justify-content: space-around;\">\n                                                    <span> {{i.allowance}}</span>\n                                                    {{i.allowance_amount}} </p>\n                                                    <!-- <hr> -->\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-6\" >\n                            <div class=\"box\" style=\"border: 1px solid #eee;\">\n                                <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 1px solid #eee;color: #000;\">\n                                    <h3 class=\"box-title\" style=\"color: #1a2229;text-align: center;\">Deduction</h3>\n                                </div><!-- /.box-header -->\n                                <!-- form start -->\n                                <div class=\"box-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\" id=\"deductions\" *ngFor=\"let a of addedListDeduct\">\n                                            <div class=\"info-box\" >\n                                                <p  style=\"display: flex;justify-content: space-around;\">\n                                              <span>{{a.deduction}}</span>\n                                              {{a.deduction_amount}} </p>\n                                                </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-8 col-sm-offset-4\">\n                            <div class=\"box\" style=\"border: 1px solid #eee;\">\n                                <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 1px solid #eee;color: #000;\">\n                                    <h3 class=\"box-title\" style=\"color: #1a2229\">Total Salary Details</h3>\n                                </div>\n                                <div class=\"box-body\">\n                                    <table class=\"table table-bordered\">\n                                        <tbody><tr>\n                                            <td class=\"col-sm-8\" style=\"line-height: 36px\">Gross Salary</td>\n                                            <td class=\"col-sm-4\" style=\"line-height: 36px\">{{salaryModel.gross_salary}}</td>\n                                        </tr>\n\n                                        <tr>\n                                            <td class=\"col-sm-8\" style=\"line-height: 36px\">Total Deduction</td>\n\n                                            <td class=\"col-sm-4\" style=\"line-height: 36px\">{{salaryModel.total_deduction}}</td>\n                                        </tr>\n\n                                        <tr>\n                                            <td class=\"col-sm-8\" style=\"line-height: 36px\">Net Salary</td>\n\n                                            <td class=\"col-sm-4\" style=\"line-height: 36px\"><b>{{salaryModel.net_salary}}</b></td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"col-sm-8\" style=\"line-height: 36px\">Payment Amount</td>\n\n                                            <td class=\"col-sm-4\" style=\"line-height: 36px\"><b>{{salaryModel.payment_amount}}</b></td>\n                                        </tr>\n                                    </tbody></table>\n                                </div>\n\n                            </div>\n                            <button class=\"blue_button right\" (click)=\"backPage()\">Back</button>\n\n                        </div>\n                    </div>\n                 </div>\n        </div>\n    </div>\n</div>\n<!-- ===================================user================== -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/view-salary-template/view-salary-template.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/view-salary-template/view-salary-template.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n     <a routerLink=\"/view/payrole/salary-template\">\n       Salary Template\n     </a>\n     <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n     View Salary Template\n   </h1>\n </section>\n\n<!-- </div> -->\n<!-- /.box-header -->\n<!-- form start -->\n<div class=\"box-body\">\n<div class=\"row\">\n<div class=\"col-sm-4\" style=\"margin-left: 15px;\">\n    <div class=\"info-box\">\n        <p style=\"margin:0 0 20px\">\n            <span>Salary Grades -</span>&nbsp;&nbsp;\n {{salaryModel.salary_grade}}</p>\n\n\n        <p style=\"margin:0 0 20px\">\n            <span>Basic Salary -</span>&nbsp;&nbsp;\n            {{salaryModel.basic_salary}} </p>\n\n        <p style=\"margin:0 0 20px\">\n            <span>Overtime Rate (Per Hour) -</span>&nbsp;&nbsp;\n            {{salaryModel.overtime_rate}}</p>\n    </div>\n</div>\n</div>\n\n<div class=\"row\" style=\"margin-left: 0px;margin-right: 2px;\">\n<div class=\"col-sm-6\" style=\"float: left;\">\n    <div class=\"box\" style=\"border: 2px solid #eee\">\n        <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 2px solid #eee;color: #000;\">\n            <h3 class=\"box-title\" style=\"color: #1a2229;display: flex;justify-content: center;\">Allowances</h3>\n        </div>\n        <div class=\"box-body\" style=\"padding-left: 6px;\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\" id=\"allowances\" *ngFor=\"let i of addedListAllownc\">\n                    <div class=\"info-box\" >\n                     <p style=\"display: flex;justify-content: space-around;\"><span>{{i.allowance}}</span>\n                       {{i.allowance_amount}} </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"col-sm-6\">\n    <div class=\"box\" style=\"border: 2px solid #eee;\">\n        <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 2px solid #eee;color: #000;\">\n            <h3 class=\"box-title\" style=\"color: #1a2229;display:flex;justify-content: center;\" >Deduction</h3>\n        </div><!-- /.box-header -->\n        <!-- form start -->\n        <div class=\"box-body\" style=\"padding-left: 6px;\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\" id=\"deductions\" *ngFor=\"let a of addedListDeduct\">\n                    <div class=\"info-box\" >\n                 <p style=\"display: flex;justify-content: space-around;\"> <span>{{a.deduction}}</span>\n                     {{a.deduction_amount}}</p>\n                   \n                 </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n</div>\n\n<div class=\"row\" style=\"margin-right: 2px;\" >\n<div class=\"col-sm-8 col-sm-offset-4\" style=\"margin-left: 33.333333%;\">\n    <div class=\"box\" style=\"border: 1px solid #eee;\">\n        <div class=\"box-header\" style=\"background-color: #fff;border-bottom: 1px solid #eee;color: #000;padding-left: 15px;\">\n            <h3 class=\"box-title\" style=\"color: #1a2229\">Total Salary Details</h3>\n        </div>\n        <div class=\"box-body\">\n            <table class=\"table table-bordered\">\n                <tbody><tr>\n                    <td class=\"col-sm-8\" style=\"line-height: 36px\">Gross Salary</td>\n\n                    <td class=\"col-sm-4\" style=\"line-height: 36px\">{{salaryModel.gross_salary}}</td>\n                </tr>\n\n                <tr>\n                    <td class=\"col-sm-8\" style=\"line-height: 36px\">Total Deduction</td>\n\n                    <td class=\"col-sm-4\" style=\"line-height: 36px\">{{salaryModel.total_deduction}}</td>\n                </tr>\n\n                <tr>\n                    <td class=\"col-sm-8\" style=\"line-height: 36px\">Net Salary</td>\n\n                    <td class=\"col-sm-4\" style=\"line-height: 36px\"><b>{{salaryModel.net_salary}}</b></td>\n                </tr>\n            </tbody></table>\n        </div>\n    </div>\n</div>\n</div>\n</div> \n");

/***/ }),

/***/ "./src/app/components/payrole/add-edit-hourly/add-edit-hourly.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/payrole/add-edit-hourly/add-edit-hourly.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n  border-radius: 3px;\n  box-shadow: none;\n  border: 1px solid #E2E7EB;\n  color: #555;\n  font-size: 12px;\n  line-height: 1.42857;\n  width: 100%;\n}\n\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\nform-horizontal .control-label {\n  text-align: left;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.text-red {\n  color: #f56954 !important;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n  margin-left: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL2FkZC1lZGl0LWhvdXJseS9hZGQtZWRpdC1ob3VybHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2Y7O0FBQ0E7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBRXRCOztBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQ0FBb0M7QUFHeEM7O0FBREE7RUFDSSx5QkFBeUI7QUFJN0I7O0FBRkE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFLdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BheXJvbGUvYWRkLWVkaXQtaG91cmx5L2FkZC1lZGl0LWhvdXJseS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkU3RUI7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5mb3JtLWhvcml6b250YWwgLmNvbnRyb2wtbGFiZWwge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cbi50ZXh0LXJlZCB7XG4gICAgY29sb3I6ICNmNTY5NTQgIWltcG9ydGFudDtcbn1cbi5ibHVlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/payrole/add-edit-hourly/add-edit-hourly.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/payrole/add-edit-hourly/add-edit-hourly.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddEditHourlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditHourlyComponent", function() { return AddEditHourlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
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








let AddEditHourlyComponent = /** @class */ (() => {
    let AddEditHourlyComponent = class AddEditHourlyComponent {
        constructor(router, http, auth, msgToast, pdf, excel, routeParam) {
            this.router = router;
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.pdf = pdf;
            this.excel = excel;
            this.routeParam = routeParam;
            this.jsonFlag = {
                institute_id: ''
            };
            this.hourlyModel = {
                salary_type: 'H',
                hourly_grade: '',
                hourly_rate: '',
                template_id: ''
            };
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            this.hourlyModel.template_id = sessionStorage.getItem('id');
        }
        ngOnInit() {
            this.routeParam.params.subscribe(params => {
                this.selectedId = params['id'];
            });
            console.log(this.selectedId);
            // this.getEditResponse();
            if (this.selectedId) {
                this.getEditResponse();
            }
        }
        createHourly() {
            if (this.validInput()) {
                let obj = {
                    institute_id: this.jsonFlag.institute_id,
                    salary_type: this.hourlyModel.salary_type,
                    hourly_grade: this.hourlyModel.hourly_grade,
                    hourly_rate: this.hourlyModel.hourly_rate
                };
                this.auth.showLoader();
                let url = '/api/v1/payroll/template/hourly/create';
                this.http.postData(url, obj).subscribe(res => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage('success', '', "Hourly added successfully");
                    this.router.navigate(['/view/payrole/hourly-template']);
                    // this.getAllSalaryData()
                }, err => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.error[0].errorMessage);
                });
            }
        }
        getEditResponse() {
            this.auth.showLoader();
            let url = '/api/v1/payroll/template/hourly/' + this.jsonFlag.institute_id + '/' + this.selectedId;
            this.http.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.editHourlyResponse = res.result;
                this.hourlyModel.hourly_grade = this.editHourlyResponse.hourly_grade;
                this.hourlyModel.hourly_rate = this.editHourlyResponse.hourly_rate;
                console.log("edit", this.editHourlyResponse);
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        updateHourly() {
            let obj = {
                template_id: this.selectedId,
                institute_id: this.jsonFlag.institute_id,
                salary_type: this.hourlyModel.salary_type,
                hourly_grade: this.hourlyModel.hourly_grade,
                hourly_rate: this.hourlyModel.hourly_rate
            };
            this.auth.showLoader();
            let url = '/api/v1/payroll/template/hourly/update';
            this.http.putData(url, obj).subscribe((res) => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage('success', '', "Hourly updated successfully");
                this.router.navigate(['/view/payrole/hourly-template']);
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.error[0].errorMessage);
            });
        }
        validInput() {
            if (this.hourlyModel.hourly_grade.trim() == "") {
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Please Enter Hourly Grade');
                return;
            }
            if (this.hourlyModel.hourly_rate.trim() == "") {
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Please Enter Hourly Rate');
                return;
            }
            return true;
        }
    };
    AddEditHourlyComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ];
    AddEditHourlyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-hourly',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-edit-hourly.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-edit-hourly/add-edit-hourly.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-edit-hourly.component.scss */ "./src/app/components/payrole/add-edit-hourly/add-edit-hourly.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AddEditHourlyComponent);
    return AddEditHourlyComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/add-edit-manage/add-edit-manage.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/payrole/add-edit-manage/add-edit-manage.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n  border-radius: 3px;\n  box-shadow: none;\n  border: 1px solid #E2E7EB;\n  color: #555;\n  font-size: 12px;\n  line-height: 1.42857;\n  width: 100%;\n}\n\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\nform-horizontal .control-label {\n  text-align: left;\n  font-size: 13px;\n  font-family: 'Open Sans',serif;\n}\n\n.text-red {\n  color: #f56954 !important;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n  margin-left: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL2FkZC1lZGl0LW1hbmFnZS9hZGQtZWRpdC1tYW5hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2Y7O0FBQ0E7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBRXRCOztBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw4QkFBOEI7QUFHbEM7O0FBREE7RUFDSSx5QkFBeUI7QUFJN0I7O0FBRkE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFLdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BheXJvbGUvYWRkLWVkaXQtbWFuYWdlL2FkZC1lZGl0LW1hbmFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkU3RUI7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5mb3JtLWhvcml6b250YWwgLmNvbnRyb2wtbGFiZWwge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJyxzZXJpZjtcbn1cbi50ZXh0LXJlZCB7XG4gICAgY29sb3I6ICNmNTY5NTQgIWltcG9ydGFudDtcbn1cbi5ibHVlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/payrole/add-edit-manage/add-edit-manage.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/payrole/add-edit-manage/add-edit-manage.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddEditManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditManageComponent", function() { return AddEditManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
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







let AddEditManageComponent = /** @class */ (() => {
    let AddEditManageComponent = class AddEditManageComponent {
        constructor(router, http, auth, msgToast, pdf, excel, routeParam) {
            this.router = router;
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.pdf = pdf;
            this.excel = excel;
            this.routeParam = routeParam;
            this.jsonFlag = {
                institute_id: ''
            };
            this.slaryType = "-1";
            this.template_id = "-1";
            this.sectionName = '';
            this.templateList = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            this.selectedTeacherId = sessionStorage.getItem('teacher_id');
            this.template_name = sessionStorage.getItem('temp_name');
            this.templateType = sessionStorage.getItem('temp_type');
            this.template_id = sessionStorage.getItem('temp_id');
        }
        ngOnInit() {
            this.routeParam.params.subscribe(params => {
                this.selectedTeacherId = params['teacher_id'];
                this.userId = params['user_id'];
                let currentURL = window.location.href;
                if (currentURL.includes('edit-manage')) {
                    this.sectionName = 'edit';
                    console.log("editName", this.sectionName);
                    this.getEditData();
                }
                else {
                    this.sectionName = 'Add';
                }
            });
        }
        getEditData() {
            if (this.sectionName == 'edit') {
                this.slaryType = this.templateType;
                this.onselectSalaryDropdown();
            }
        }
        getAllHourlyData() {
            if (this.sectionName == 'Add') {
                this.template_id = "-1";
            }
            else {
                this.template_id;
            }
            this.auth.showLoader();
            let url = '/api/v1/payroll/template/hourly/' + this.jsonFlag.institute_id + '/all';
            this.http.getData(url).subscribe((res) => {
                this.templateList = res.result.response;
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        getAllSalaryData() {
            if (this.sectionName == 'Add') {
                this.template_id = "-1";
            }
            else {
                this.template_id;
            }
            this.auth.showLoader();
            let url = '/api/v1/payroll/template/salary/' + this.jsonFlag.institute_id + '/all';
            this.http.getData(url).subscribe((res) => {
                this.templateList = res.result.response;
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        assigneTemplateEmployee() {
            if (this.validInput()) {
                let obj = {
                    template_id: this.template_id,
                    user_id: this.userId,
                    teacher_id: this.selectedTeacherId,
                    institute_id: this.jsonFlag.institute_id
                };
                this.auth.showLoader();
                let url = '/api/v1/payroll/manage/add';
                this.http.putData(url, obj).subscribe((res) => {
                    this.templateList = res.result.response;
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage('success', '', "Template Assigne  successfully");
                    this.router.navigate(['/view/payrole/manage-salary']);
                }, err => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.message);
                });
            }
        }
        updateManageTemp() {
            let obj = {
                template_id: this.template_id,
                user_id: this.userId,
                teacher_id: this.selectedTeacherId,
                institute_id: this.jsonFlag.institute_id
            };
            this.auth.showLoader();
            let url = '/api/v1/payroll/manage/add';
            this.http.putData(url, obj).subscribe((res) => {
                this.templateList = res.result.response;
                this.auth.hideLoader();
                this.msgToast.showErrorMessage('success', '', "Template Updated successfully");
                this.router.navigate(['/view/payrole/manage-salary']);
                console.log("salaryyyyyy", this.templateList);
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.message);
            });
        }
        validInput() {
            if (this.slaryType.trim() == "-1") {
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Select Salary Template');
                return;
            }
            if (this.template_id.trim() == "-1") {
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Select  Template');
                return;
            }
            return true;
        }
        onselectSalaryDropdown() {
            if (this.slaryType == 'M') {
                this.getAllSalaryData();
            }
            else {
                this.getAllHourlyData();
            }
        }
    };
    AddEditManageComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_4__["ExportToPdfService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ];
    AddEditManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-manage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-edit-manage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-edit-manage/add-edit-manage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-edit-manage.component.scss */ "./src/app/components/payrole/add-edit-manage/add-edit-manage.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_4__["ExportToPdfService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AddEditManageComponent);
    return AddEditManageComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/add-edit-salary/add-edit-salary.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/payrole/add-edit-salary/add-edit-salary.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\nform-horizontal .control-label {\n  text-align: left;\n  font-size: 13px;\n  font-family: 'Open Sans',serif;\n}\n\n.form-control {\n  border-radius: 3px;\n  box-shadow: none;\n  border: 1px solid #E2E7EB;\n  color: #555;\n  font-size: 12px;\n  line-height: 1.42857;\n  width: 100%;\n}\n\n.box {\n  position: relative;\n  background: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  width: 93%;\n  margin-left: 31px;\n  box-shadow: 0px 0px 2px;\n}\n\n.btn.btn-success {\n  color: #fff;\n  background-color: #109CF1;\n  border-color: #109CF1;\n}\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  cursor: not-allowed;\n  background-color: #eee;\n}\n\n.table-bordered > tbody > tr > td {\n  border-color: #E2E7EB;\n  font-size: 12px;\n  text-align: initial;\n}\n\n.table-bordered {\n  border: 1px solid #E2E7EB;\n}\n\n.box .box-body {\n  padding: 15px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.box-header .box-title {\n  display: inline-block;\n  padding: 15px;\n  margin: 0;\n  font-size: 13px;\n  font-weight: 600;\n  float: left;\n  cursor: default;\n  color: #FFFFFF;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.box-title {\n  display: inline-block;\n  padding: 15px;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 400;\n  float: left;\n  cursor: default;\n  color: #FFFFFF;\n  font-family: \"OpenSans Regular\";\n}\n\n.text-red {\n  color: #f56954 !important;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n  margin-top: -12px;\n  margin-right: 33px;\n}\n\n.blue_button1 {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n  margin-left: 20px;\n}\n\n.col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.form-horizontal[_ngcontent-lsx-c172] .form-group[_ngcontent-lsx-c172] {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.box .box-body .table {\n  margin-bottom: 0;\n}\n\n.table-bordered {\n  border: 1px solid #E2E7EB;\n}\n\ntable > tbody > tr > td, .table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.428571429;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.row {\n  margin-left: -15px;\n  margin-right: 0px;\n}\n\n.box .box-header {\n  position: relative;\n  background-color: #23292F;\n  -webkit-border-top-left-radius: 3px;\n  -webkit-border-top-right-radius: 3px;\n  -webkit-border-bottom-right-radius: 0;\n  -webkit-border-bottom-left-radius: 0;\n  -moz-border-radius-topleft: 3px;\n  -moz-border-radius-topright: 3px;\n  -moz-border-radius-bottomright: 0;\n  -moz-border-radius-bottomleft: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom: 0px solid #f4f4f4;\n  color: #444;\n}\n\n.btn-xs {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn {\n  font-weight: 500;\n  border-radius: 3px;\n  border: 1px solid transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL2FkZC1lZGl0LXNhbGFyeS9hZGQtZWRpdC1zYWxhcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBRnRCOztBQUlBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw4QkFBOEI7QUFEbEM7O0FBR0E7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0FBQWY7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUduQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDM0I7O0FBQ0E7RUFDSSxXQUFXO0VBQ1gseUJBQXdCO0VBQ3hCLHFCQUFxQjtBQUV6Qjs7QUFDQTtFQUNJLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFFMUI7O0FBQUE7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtBQUd2Qjs7QUFEQTtFQUNJLHlCQUF5QjtBQUk3Qjs7QUFGQTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQiw4QkFBOEI7QUFLbEM7O0FBSEE7RUFDSSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLG9DQUFvQztBQU14Qzs7QUFKQTtFQUNJLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsK0JBQStCO0FBT25DOztBQUxBO0VBQ0kseUJBQXlCO0FBUTdCOztBQU5BO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQVN0Qjs7QUFORTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtBQVNyQjs7QUFQRTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQVV0Qjs7QUFSQTtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFXdEI7O0FBVEE7RUFDSSxnQkFBZ0I7QUFZcEI7O0FBVkE7RUFDSSx5QkFBeUI7QUFhN0I7O0FBWEE7RUFDSSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFjOUI7O0FBUkE7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBV3JCOztBQVRBO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLHFDQUFxQztFQUNyQyxvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsV0FBVztBQVlmOztBQVZBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBYXRCOztBQVhFO0VBQ0UsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFjakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BheXJvbGUvYWRkLWVkaXQtc2FsYXJ5L2FkZC1lZGl0LXNhbGFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICp7XG4vLyAgICAgbWFyZ2luOiAwcHg7XG4vLyAgIH1cbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuZm9ybS1ob3Jpem9udGFsIC5jb250cm9sLWxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucycsc2VyaWY7XG59XG4uZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTJFN0VCO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHdpZHRoOiA5MyU7XG4gICAgbWFyZ2luLWxlZnQ6IDMxcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHg7XG59XG4uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxMDlDRjE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTA5Q0YxO1xufVxuXG4uZm9ybS1jb250cm9sW2Rpc2FibGVkXSwgLmZvcm0tY29udHJvbFtyZWFkb25seV0sIGZpZWxkc2V0W2Rpc2FibGVkXSAuZm9ybS1jb250cm9sIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQge1xuICAgIGJvcmRlci1jb2xvcjogI0UyRTdFQjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cbi50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UyRTdFQjtcbn1cbi5ib3ggLmJveC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG59XG4uYm94LWhlYWRlciAuYm94LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cbi5ib3gtdGl0bGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMgUmVndWxhclwiO1xufVxuLnRleHQtcmVkIHtcbiAgICBjb2xvcjogI2Y1Njk1NCAhaW1wb3J0YW50O1xufVxuLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMzcHg7XG4gIH1cblxuICAuYmx1ZV9idXR0b24xIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmZvcm0taG9yaXpvbnRhbFtfbmdjb250ZW50LWxzeC1jMTcyXSAuZm9ybS1ncm91cFtfbmdjb250ZW50LWxzeC1jMTcyXSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4uYm94IC5ib3gtYm9keSAudGFibGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGFibGUtYm9yZGVyZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkU3RUI7XG59XG50YWJsZT50Ym9keT50cj50ZCwgLnRhYmxlPnRmb290PnRyPnRkIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5pbnB1dFt0eXBlPVwidGV4dFwiXVtkaXNhYmxlZF0ge1xuICAgICAvL2JhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxufVxuLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLmJveCAuYm94LWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI5MkY7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAzcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAzcHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OiAwO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgY29sb3I6ICM0NDQ7XG59XG4uYnRuLXhzIHtcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICAuYnRuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/payrole/add-edit-salary/add-edit-salary.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/payrole/add-edit-salary/add-edit-salary.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddEditSalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditSalaryComponent", function() { return AddEditSalaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../app.component */ "./src/app/app.component.ts");
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






let AddEditSalaryComponent = /** @class */ (() => {
    let AddEditSalaryComponent = class AddEditSalaryComponent {
        constructor(http, auth, msgToast, router, toastCtrl, routeParam) {
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.router = router;
            this.toastCtrl = toastCtrl;
            this.routeParam = routeParam;
            this.jsonFlag = {
                institute_id: '',
            };
            this.salaryModel = {
                salary_type: 'M',
                salary_grade: '',
                basic_salary: '',
                overtime_rate: '',
                allowance: '',
                allowance_amount: '',
                deduction: '',
                deduction_amount: '',
                typeA: 'A',
                typeD: 'D',
                template_id: '',
                gross_salary: 0,
                total_deduction: 0,
                net_salary: 0,
            };
            this.sectionName = '';
            this.isEdit = false;
            this.salrayDataList = [];
            this.addedListAllownc = [];
            this.addedListDeduct = [];
            this.remove = false;
            this.removeAllownce = false;
            this.template_allowances_map_dtos = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            //this.salaryModel.template_id = sessionStorage.getItem('id')
        }
        ngOnInit() {
            this.routeParam.params.subscribe(params => {
                this.salaryModel.template_id = params['id'];
            });
            if (this.salaryModel.template_id) {
                this.getEditSaralyData();
            }
            this.getAllSalaryData();
        }
        getAllSalaryData() {
            this.auth.showLoader();
            let url = '/api/v1/payroll/template/salary/' + this.jsonFlag.institute_id + '/all';
            this.http.getData(url).subscribe((res) => {
                this.salrayDataList = res.result.response;
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        addAllowonceDeduction(type) {
            if (this.salaryModel.allowance.trim() != "") {
                if (this.salaryModel.allowance_amount.trim() != "") {
                    let obj = {
                        type: type,
                        allowance: this.salaryModel.allowance,
                        allowance_amount: this.salaryModel.allowance_amount,
                    };
                    // if(this.salaryModel.typeA){
                    this.addedListAllownc.push(obj);
                    console.log(this.addedListAllownc);
                    this.calculateGrossSalary();
                    this.salaryModel.allowance = '';
                    this.salaryModel.allowance_amount = '';
                    // }
                }
                else {
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Please Enter Allownce_amount');
                }
            }
            else {
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Please Enter Allownce');
            }
        }
        dedutAllown(type) {
            if (this.salaryModel.deduction != '') {
                if (this.salaryModel.deduction_amount != '') {
                    let obj2 = {
                        type: type,
                        deduction: this.salaryModel.deduction,
                        deduction_amount: this.salaryModel.deduction_amount,
                    };
                    this.addedListDeduct.push(obj2);
                    this.calculateDeduction();
                    console.log("deduction", this.addedListDeduct);
                    this.salaryModel.deduction = '',
                        this.salaryModel.deduction_amount = '';
                }
                else {
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Please Enter Deduction Amount');
                }
            }
            else {
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Please Enter Deduction');
            }
        }
        createSalary() {
            if (this.validInput()) {
                for (let i = 0; i < this.addedListAllownc.length; i++) {
                    if (this.salaryModel.typeA) {
                        let item = {
                            type: this.salaryModel.typeA,
                            allowance: this.addedListAllownc[i].allowance,
                            allowance_amount: this.addedListAllownc[i].allowance_amount
                        };
                        this.template_allowances_map_dtos.push(item);
                    }
                }
                for (let i = 0; i < this.addedListDeduct.length; i++) {
                    if (this.salaryModel.typeD) {
                        let item2 = {
                            type: this.salaryModel.typeD,
                            deduction: this.addedListDeduct[i].deduction,
                            deduction_amount: this.addedListDeduct[i].deduction_amount,
                        };
                        this.template_allowances_map_dtos.push(item2);
                    }
                }
                let obj = {
                    institute_id: this.jsonFlag.institute_id,
                    salary_type: this.salaryModel.salary_type,
                    salary_grade: this.salaryModel.salary_grade,
                    basic_salary: this.salaryModel.basic_salary,
                    overtime_rate: this.salaryModel.overtime_rate,
                    template_allowances_map_dtos: this.template_allowances_map_dtos
                };
                this.auth.showLoader();
                let url = '/api/v1/payroll/template/salary/create';
                this.http.postData(url, obj).subscribe(res => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage('success', '', "Salary added successfully");
                    this.router.navigate(['/view/payrole/salary-template']);
                    this.getAllSalaryData();
                }, err => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.error[0].errorMessage);
                });
            }
        }
        getEditSaralyData() {
            this.auth.showLoader();
            let url = '/api/v1/payroll/template/salary/' + this.jsonFlag.institute_id + '/' + this.salaryModel.template_id;
            this.http.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.editResponce = res.result;
                this.salaryModel.basic_salary = this.editResponce.basic_salary;
                this.salaryModel.gross_salary = this.editResponce.gross_salary;
                this.salaryModel.salary_grade = this.editResponce.salary_grade;
                this.salaryModel.salary_type = this.editResponce.salary_type;
                this.salaryModel.total_deduction = this.editResponce.total_deduction;
                this.salaryModel.overtime_rate = this.editResponce.overtime_rate;
                this.salaryModel.deduction_amount = this.editResponce.deduction_amount;
                this.salaryModel.net_salary = this.editResponce.net_salary;
                for (let i = 0; i < this.editResponce.template_allowances_map_dtos.length; i++) {
                    if (this.editResponce.template_allowances_map_dtos[i].type == 'D') {
                        let obj = {
                            type: this.salaryModel.typeD,
                            deduction: this.editResponce.template_allowances_map_dtos[i].deduction,
                            deduction_amount: this.editResponce.template_allowances_map_dtos[i].deduction_amount,
                        };
                        this.addedListDeduct.push(obj);
                    }
                    else {
                        let obj2 = {
                            type: this.salaryModel.typeA,
                            allowance: this.editResponce.template_allowances_map_dtos[i].allowance,
                            allowance_amount: this.editResponce.template_allowances_map_dtos[i].allowance_amount,
                        };
                        console.log("edit", this.template_allowances_map_dtos);
                        this.addedListAllownc.push(obj2);
                    }
                }
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        updateSalary() {
            for (let i = 0; i < this.addedListDeduct.length; i++) {
                if (this.salaryModel.typeD) {
                    let obj = {
                        type: this.salaryModel.typeD,
                        deduction: this.addedListDeduct[i].deduction,
                        deduction_amount: this.addedListDeduct[i].deduction_amount,
                    };
                    this.template_allowances_map_dtos.push(obj);
                }
            }
            for (let i = 0; i < this.addedListAllownc.length; i++) {
                if (this.salaryModel.typeA) {
                    let obj2 = {
                        type: this.salaryModel.typeA,
                        allowance: this.addedListAllownc[i].allowance,
                        allowance_amount: this.addedListAllownc[i].allowance_amount,
                    };
                    this.template_allowances_map_dtos.push(obj2);
                }
            }
            let obje = {
                institute_id: this.jsonFlag.institute_id,
                template_id: this.salaryModel.template_id,
                salary_type: this.salaryModel.salary_type,
                salary_grade: this.salaryModel.salary_grade,
                basic_salary: this.salaryModel.basic_salary,
                overtime_rate: this.salaryModel.overtime_rate,
                template_allowances_map_dtos: this.template_allowances_map_dtos
            };
            let url = '/api/v1/payroll/template/salary/update';
            this.auth.showLoader();
            this.http.putData(url, obje).subscribe(res => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage('success', '', "Salary Updated successfully");
                console.log("editeeeeeee", obje.template_allowances_map_dtos);
                this.router.navigate(['/view/payrole/salary-template']);
                this.getAllSalaryData();
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.error[0].errorMessage);
            });
        }
        removeList(x) {
            this.addedListAllownc.splice(x, 1);
            this.calculateGrossSalary();
        }
        removeListDeduct(b) {
            this.addedListDeduct.splice(b, 1);
            this.calculateDeduction();
        }
        validInput() {
            if (this.salaryModel.overtime_rate.trim() == "") {
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Please Enter Overtime Rate');
                return;
            }
            if (this.salaryModel.salary_grade.trim() == "") {
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Please Enter Salary');
                return;
            }
            if (this.salaryModel.basic_salary.trim() == '') {
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Please Enter Basic Salary');
                return;
            }
            return true;
        }
        back() {
            this.router.navigateByUrl("/view/payrole/salary-template");
        }
        calculateGrossSalary() {
            this.salaryModel.gross_salary = 0;
            this.salaryModel.gross_salary = Number(this.salaryModel.gross_salary) + Number(this.salaryModel.basic_salary);
            this.addedListAllownc.forEach(element => {
                this.salaryModel.gross_salary = Number(this.salaryModel.gross_salary) + Number(element.allowance_amount);
            });
            this.salaryModel.net_salary = Number(this.salaryModel.gross_salary) - Number(this.salaryModel.total_deduction);
        }
        calculateDeduction() {
            this.salaryModel.deduction_amount = '';
            this.salaryModel.total_deduction = 0;
            this.addedListDeduct.forEach(element => {
                this.salaryModel.total_deduction = Number(this.salaryModel.total_deduction) + Number(element.deduction_amount);
            });
            this.salaryModel.net_salary = Number(this.salaryModel.gross_salary) - Number(this.salaryModel.total_deduction);
        }
    };
    AddEditSalaryComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ];
    AddEditSalaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-salary',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-edit-salary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-edit-salary/add-edit-salary.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-edit-salary.component.scss */ "./src/app/components/payrole/add-edit-salary/add-edit-salary.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddEditSalaryComponent);
    return AddEditSalaryComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/add-salary-payment/add-salary-payment.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/payrole/add-salary-payment/add-salary-payment.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: left;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  width: calc(100% / 5);\n  padding-left: 2%;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  margin: auto;\n  line-height: 25px;\n  width: calc(100% / 5);\n  padding-left: 2%;\n}\n\n.modal-title {\n  font-family: 'Open Sans', sans-serif;\n  letter-spacing: normal;\n  margin: 0px;\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 7px 20px;\n}\n\n.modal-header:before, .modal-header:after {\n  display: none;\n}\n\n.modal-header .close {\n  margin-top: -21px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.h10 {\n  height: 45px;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\n.blue_button1 {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n  float: right;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.page_heading {\n  color: #334D6E;\n  font-weight: 600;\n}\n\n.page_heading > p {\n  margin-bottom: 0px;\n  font-size: 14px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.pt15 {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  justify-content: flex-end;\n  margin-bottom: -10px;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\n.box-header .box-title {\n  display: inline-block;\n  margin: -15px;\n  font-size: 14px;\n  font-weight: 400;\n  float: left;\n  cursor: default;\n  color: #FFFFFF;\n  font-family: \"OpenSans Regular\";\n}\n\n.box {\n  position: relative;\n  background: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  width: 100%;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 5px;\n  font-size: 13px;\n}\n\n.form-control {\n  border-radius: 3px;\n  box-shadow: none;\n  border: 1px solid #E2E7EB;\n  color: #555;\n  font-size: 12px;\n  line-height: 1.42857;\n  width: 100%;\n}\n\n.btn.btn-success:hover, .btn.btn-success:active, .btn.btn-success.hover {\n  color: #fff;\n  background-color: #09A3A3;\n  border-color: #09A3A3;\n}\n\n.text-red {\n  color: #f56954 !important;\n}\n\ninput, select, textarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: 100%;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.field-wrapper .form-ctrl {\n  border-radius: 4px;\n  border-color: 1px solid #F0EDED;\n  width: 100%;\n  height: 36px;\n}\n\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 10px;\n  top: 44px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.lebal {\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL2FkZC1zYWxhcnktcGF5bWVudC9hZGQtc2FsYXJ5LXBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUEwQztBQUM5Qzs7QUFFRTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZixpQkFBaUI7RUFDakIscUJBQW9CO0VBQ3BCLGdCQUFnQjtBQUNuQjs7QUFHRTtFQUNHLFdBQVc7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFBOUM7O0FBRUU7RUFFRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQXBCOztBQUVFO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUNyQixXQUFXO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ25COztBQUNFO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUVyQjs7QUFBRTtFQUNFLGFBQVk7QUFHaEI7O0FBREU7RUFDRSxpQkFBaUI7QUFJckI7O0FBRkU7RUFDRSxjQUFjO0VBQ2QsUUFBTztBQUtYOztBQUZFO0VBQ0UsWUFBWTtBQUtoQjs7QUFIRTtFQUNFLG9CQUFvQjtBQU14Qjs7QUFKRTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7QUFPaEI7O0FBTEU7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFRbkI7O0FBTkU7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBU3BCOztBQU5FO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFTbkI7O0FBUEU7RUFDRSxhQUFhO0FBVWpCOztBQVJFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQVdsQzs7QUFURTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFZcEI7O0FBVkU7RUFDRSxpQkFBaUI7RUFDakIsK0NBQTRDO0VBQzFDLHVEQUFvRDtFQUNwRCxvREFBaUQ7QUFhdkQ7O0FBWEU7RUFDRSxrQkFBaUI7QUFjckI7O0FBWkk7RUFDQyxZQUFZO0FBZWpCOztBQWJJO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQWdCNUI7O0FBZE07RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNkLFlBQVc7QUFpQnJCOztBQWZRO0VBQ0kscUJBQXFCO0VBRXJCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLCtCQUErQjtBQWlCM0M7O0FBZEE7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUduQixrQkFBa0I7RUFDbEIsV0FBVztBQWlCZjs7QUFkQTtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFFbEIsZUFBZTtBQWdCbkI7O0FBVkE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0FBYWY7O0FBWEE7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQWN6Qjs7QUFaQTtFQUNJLHlCQUF5QjtBQWU3Qjs7QUFiQTtFQUNJLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZUFBZTtBQWdCbkI7O0FBZEE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFpQm5COztBQWJBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUE4QjtFQUc5QixXQUFXO0VBQ1gsWUFBWTtBQWNkOztBQVpBO0VBQ0UsV0FBVztFQUNYLHlDQUFpRTtFQUNqRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFlWjs7QUFiQTtFQUNFLGVBQWU7QUFnQmpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL2FkZC1zYWxhcnktcGF5bWVudC9hZGQtc2FsYXJ5LXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cbiAgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICBsaW5lLWhlaWdodDogMzVweDtcbiAgIHdpZHRoOmNhbGMoMTAwJSAvIDUpO1xuICAgcGFkZGluZy1sZWZ0OiAyJTtcblxuICB9XG4gIFxuICAudGFibGVfYm9keXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4MDdDN0M7XG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gIH1cbiAgLm1vZGFsLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogIzJCMjYyNjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAubW9kYWwgdGV4dGFyZWF7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICB9XG4gIC5tb2RhbC1oZWFkZXI6YmVmb3JlLC5tb2RhbC1oZWFkZXI6YWZ0ZXJ7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG4gIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgICBtYXJnaW4tdG9wOiAtMjFweDtcbiAgfVxuICAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0b3A6MTAlO1xuICB9XG4gIFxuICAuaDEwe1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuICAucHQxMHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuYmx1ZV9idXR0b24xIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAucGFnZV9oZWFkaW5ne1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgXG4gIH1cbiAgLnBhZ2VfaGVhZGluZz5we1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZGlzcGxheXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAudzk4e1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuaGVhZF9wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cbiAgLm1yMTB7XG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgfVxuICAgIC53MjQwe1xuICAgICB3aWR0aDogMjQwcHg7XG4gICAgfVxuICAgIC5wdDE1e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgICAgfVxuICAgICAgLmlucHV0e1xuICAgICAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgaGVpZ2h0OjM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJveC1oZWFkZXIgLmJveC10aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAvL3BhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW46IC0xNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuU2FucyBSZWd1bGFyXCI7XG4gICAgICAgIH1cbiAgICAgIFxuLmJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy9ib3gtc2hhZG93OiAwcHggMHB4IDFweDtcbn1cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIC8vZm9udC13ZWlnaHQ6IDEwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi8vIC5mb3JtLWNvbnRyb2xbZGlzYWJsZWRdLCAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSwgZmllbGRzZXRbZGlzYWJsZWRdIC5mb3JtLWNvbnRyb2wge1xuLy8gICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwN0M3Qztcbi8vIH1cbi5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkU3RUI7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJ0bi5idG4tc3VjY2Vzczpob3ZlciwgLmJ0bi5idG4tc3VjY2VzczphY3RpdmUsIC5idG4uYnRuLXN1Y2Nlc3MuaG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOUEzQTM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDlBM0EzO1xufVxuLnRleHQtcmVkIHtcbiAgICBjb2xvcjogI2Y1Njk1NCAhaW1wb3J0YW50O1xufVxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDEwMCU7XG59XG4uYmx1ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuLmZpZWxkLXdyYXBwZXIgLmZvcm0tY3RybHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItY29sb3I6MXB4IHNvbGlkICNGMEVERUQ7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIC8vd2lkdGg6IDI2NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuLmZpZWxkLXdyYXBwZXIuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmcpIG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA0NHB4O1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICB6LWluZGV4OiAwO1xufVxuLmxlYmFse1xuICBmb250LXNpemU6IDEzcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/payrole/add-salary-payment/add-salary-payment.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/payrole/add-salary-payment/add-salary-payment.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddSalaryPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSalaryPaymentComponent", function() { return AddSalaryPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
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









let AddSalaryPaymentComponent = /** @class */ (() => {
    let AddSalaryPaymentComponent = class AddSalaryPaymentComponent {
        constructor(router, http, auth, msgToast, pdf, excel, routeParam, location) {
            this.router = router;
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.pdf = pdf;
            this.excel = excel;
            this.routeParam = routeParam;
            this.location = location;
            this.jsonFlag = {
                institute_id: '',
            };
            this.historyModel = {
                total_hours: 0,
                overtime_hours: '',
                payment_amount: 0,
                payment_method: '',
                comment: '',
                history_id: '',
                net_salary: 0,
                overtime_rate: '',
                gross_salary: '',
                total_deduction: '',
                salary_type: '',
                user_name: '',
                user_gender: '',
                user_dob: '',
                user_phone: '',
                user_role: '',
            };
            this.sal_month = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM');
            this.allHistoryPementList = [];
            this.searchList = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            this.selectedId = JSON.parse(sessionStorage.getItem('selectedId'));
            this.selectedTeacherId = sessionStorage.getItem('teacher_id');
            this.userId = sessionStorage.getItem('user_id');
            this.template_id = sessionStorage.getItem('template_id');
        }
        ngOnInit() {
            this.routeParam.params.subscribe(params => {
                this.selectedTeacherId = params['teacher_id'];
                this.userId = params['user_id'];
                console.log("rolr id", this.selectedId);
            });
            this.getHistoryPayement();
            this.getPaymentDetails();
        }
        getHistoryPayement() {
            let url = '/api/v1/payroll/payment/history/' + this.jsonFlag.institute_id + '/paymentHistories/' + this.userId + '/' + this.selectedTeacherId;
            this.http.getData(url).subscribe((res) => {
                this.allHistoryPementList = res.result;
                this.searchList = res.result;
                console.log("histroy payemnttt", this.allHistoryPementList);
                console.log("payement date", this.payment_method);
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        getPaymentDetails() {
            let url = '/api/v1/payroll/manage/' + this.jsonFlag.institute_id + '/view/' + this.userId + '/' + this.selectedTeacherId;
            this.http.getData(url).subscribe((res) => {
                let payementDatails = res.result.template_dto;
                this.historyModel = res.result.template_dto;
                this.historyModel.user_name = res.result.user_name;
                this.historyModel.user_gender = res.result.user_gender;
                this.historyModel.user_dob = res.result.user_dob,
                    this.historyModel.user_phone = res.result.user_phone,
                    this.historyModel.user_name = res.result.user_name,
                    this.historyModel.user_role = res.result.user_role;
                console.log("histroy payemntttsssssss", payementDatails);
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        createSalaryPayment() {
            if (this.validInput()) {
                let obj = {
                    user_id: this.userId,
                    role_id: this.selectedId,
                    teacher_id: this.selectedTeacherId,
                    month: moment__WEBPACK_IMPORTED_MODULE_7__(this.sal_month).format('YYYY-MM'),
                    institute_id: this.jsonFlag.institute_id,
                    comment: this.historyModel.comment,
                    payment_method: this.historyModel.payment_method,
                    payment_amount: this.historyModel.payment_amount,
                    overtime_hours: this.historyModel.overtime_hours,
                    total_hours: this.historyModel.total_hours,
                    template_id: this.template_id
                };
                let url = '/api/v1/payroll/payment/history/create';
                this.http.postData(url, obj).subscribe(res => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage('success', '', "Salary Payment Added  successfully");
                    //this.router.navigate(['/view/payrole/make-salary']);
                    this.clearForm();
                    this.getHistoryPayement();
                }, err => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.message);
                });
            }
        }
        deletPayemt(obj) {
            if (confirm('Are you sure, You want  to delete this template?')) {
                let history_id = obj;
                this.historyModel.history_id = history_id;
                this.auth.showLoader();
                let url = '/api/v1/payroll/payment/history/' + this.jsonFlag.institute_id + '/delete/' + this.historyModel.history_id;
                this.http.deleteDataById(url).subscribe(res => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage('success', '', "Salary Payment deleted successfully");
                    // this.router.navigate(['/view/payrole/make-salary']);
                    this.getHistoryPayement();
                }, err => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.message);
                });
            }
        }
        onclickView(obj) {
            let user_id;
            let teacher_id;
            if (this.selectedId == 0) {
                teacher_id = obj.teacher_id;
                user_id = 0;
            }
            else {
                teacher_id = 0;
                user_id = obj.user_id;
            }
            this.comment = obj.comment;
            this.payment_date = obj.payment_date;
            this.payment_method = obj.payment_method;
            this.month = obj.month,
                this.historyModel.payment_amount = obj.payment_amount;
            console.log("month", obj);
            // sessionStorage.setItem('viewComment',(this.comment))
            // sessionStorage.setItem('viewPayment_date',(this.payment_date))
            // sessionStorage.setItem('viewPayment_method',(this.payment_method))
            // sessionStorage.setItem('viewMonth',(this.month))
            sessionStorage.setItem('history_obj', JSON.stringify(obj));
            this.router.navigateByUrl('view/payrole/view-salary-payment/' + teacher_id + '/' + user_id);
        }
        validInput() {
            if (this.historyModel.payment_method == "") {
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', 'Select Payment Method');
                return;
            }
            return true;
        }
        searchInputs() {
            this.allHistoryPementList = this.searchList;
            if (this.searchInput == undefined || this.searchInput == null) {
                this.searchInput = "";
            }
            else {
                let searchData = this.allHistoryPementList.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchInput.toLowerCase())));
                this.allHistoryPementList = searchData;
            }
        }
        clearForm() {
            this.historyModel.comment = "";
            this.historyModel.payment_method = "";
            this.historyModel.total_hours = 0;
            this.historyModel.payment_amount = 0;
            this.sal_month = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM');
        }
        backPage() {
            this.location.back();
        }
        onOpenCalendar(container) {
            container.monthSelectHandler = (event) => {
                container._store.dispatch(container._actions.select(event.date));
            };
            container.setViewMode('month');
        }
        calcPaymentAmont() {
            this.historyModel.payment_amount = this.historyModel.net_salary * this.historyModel.total_hours;
        }
    };
    AddSalaryPaymentComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
    ];
    AddSalaryPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-salary-payment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-salary-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/add-salary-payment/add-salary-payment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-salary-payment.component.scss */ "./src/app/components/payrole/add-salary-payment/add-salary-payment.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], AddSalaryPaymentComponent);
    return AddSalaryPaymentComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/hourly-template/hourly-template.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/payrole/hourly-template/hourly-template.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading {\n  color: #334D6E;\n  font-weight: 600;\n}\n\n.page_heading > p {\n  margin-bottom: 0px;\n  font-size: 14px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 35px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.leave_cat .table_heading > div:first-child, .leave_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.leave_cat .table_heading > div:last-child, .leave_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.leave_cat .table_heading > div, .leave_cat .table_body > div {\n  width: calc((100% - 250px) / 2);\n  text-align: left;\n  padding-left: 2%;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  justify-content: flex-end;\n  margin-bottom: -10px;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: 100%;\n  border-top: 3px solid #Ededed;\n}\n\n.modal-title {\n  font-family: 'Open Sans', sans-serif;\n  letter-spacing: normal;\n  margin: 0px;\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.leave_app .table_heading > div:first-child, .leave_app .table_body > div:first-child {\n  width: 100px;\n}\n\n.leave_app .table_heading > div:last-child, .leave_app .table_body > div:last-child {\n  width: 200px;\n}\n\n.leave_app .table_body > div, .leave_app .table_heading > div {\n  width: calc((100% - 600px) / 5);\n}\n\n.leave_app .table_body > div:nth-child(5), .leave_app .table_heading > div:nth-child(5) {\n  width: 300px;\n}\n\n.leave_pr .table_heading > div:first-child, .leave_pr .table_body > div:first-child {\n  width: 100px;\n}\n\n.leave_pr .table_heading > div:last-child, .leave_pr .table_body > div:last-child {\n  width: 200px;\n}\n\n.leave_pr .table_body > div, .leave_pr .table_heading > div {\n  width: calc((100% - 620px) / 5);\n}\n\n.leave_pr .table_body > div:nth-child(6), .leave_pr .table_heading > div:nth-child(6) {\n  width: 250px;\n}\n\n.leave_pr .table_body > div:nth-child(7), .leave_pr .table_heading > div:nth-child(7) {\n  width: 70px;\n}\n\n.leave_pr {\n  margin-top: 15px;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 7px 20px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n.right {\n  float: right;\n}\n\n.modal-header:before, .modal-header:after {\n  display: none;\n}\n\n.modal-header .close {\n  margin-top: -21px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.h10 {\n  height: 45px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL2hvdXJseS10ZW1wbGF0ZS9ob3VybHktdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxvQ0FBb0M7QUFFdEM7O0FBQUE7RUFDRSxhQUFhO0FBR2Y7O0FBREE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFJakI7O0FBRkE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFLakI7O0FBSEM7RUFDQyxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBTWhCOztBQUpBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDZCxZQUFXO0FBT2Y7O0FBTEM7RUFDSSxhQUFhO0FBUWxCOztBQU5BO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQVNsQjs7QUFOQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBU2pCOztBQVBBO0VBQ0UsYUFBYTtBQVVmOztBQVJBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQVdoQzs7QUFUQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFZbEI7O0FBVkE7RUFDRSxpQkFBaUI7RUFDakIsK0NBQTRDO0VBQzFDLHVEQUFvRDtFQUNwRCxvREFBaUQ7QUFhckQ7O0FBWEE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQzFCLHNCQUFBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMENBQTBDO0FBYzVDOztBQVhBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNmLGlCQUFpQjtBQWNsQjs7QUFYQTtFQUNHLFdBQVc7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFjNUM7O0FBWkE7RUFFRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2YscUJBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBY3BCOztBQVhBO0VBQ0Esa0JBQWlCO0FBY2pCOztBQVpBO0VBQ0MsWUFBWTtBQWViOztBQWJBO0VBQ0UsV0FBVztBQWdCYjs7QUFkQTtFQUNFLFlBQVk7QUFpQmQ7O0FBZkE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2QsZ0JBQWdCO0FBa0JwQjs7QUFmQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBa0JkOztBQWhCQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFtQnRCOztBQWpCQTtFQUNFLG9CQUFvQjtBQW9CdEI7O0FBbEJBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUNyQixlQUFlO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBcUJkOztBQW5CQTtFQUNBLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBc0JqQjs7QUFwQkE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBdUJqQjs7QUFyQkE7RUFDRSxVQUFVO0FBd0JaOztBQXRCQTtFQUNFLFVBQVU7QUF5Qlo7O0FBdkJBO0VBQ0UsVUFBVTtBQTBCWjs7QUF4QkE7RUFDRSxVQUFVO0FBMkJaOztBQXpCQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2pCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWM7QUE0QmQ7O0FBMUJBO0VBRUEsZ0JBQWdCO0VBQ2QsZUFBZTtFQUNqQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUE0Qm5COztBQTFCQTtFQUNFLGdCQUFnQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0FBNkJkOztBQTFCQTtFQUNFLFlBQVk7QUE2QmQ7O0FBM0JBO0VBRUUsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw2QkFBNkI7QUE2Qi9COztBQTNCQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDckIsV0FBVztFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQThCakI7O0FBNUJBO0VBQ0UsV0FBVztBQStCYjs7QUE3QkE7RUFDRSxZQUFZO0FBZ0NkOztBQTlCQTtFQUNFLFlBQVk7QUFpQ2Q7O0FBL0JBO0VBQ0UsK0JBQStCO0FBa0NqQzs7QUFoQ0E7RUFDSSxZQUFZO0FBbUNoQjs7QUFoQ0E7RUFDRSxZQUFZO0FBbUNkOztBQWpDQTtFQUNFLFlBQVk7QUFvQ2Q7O0FBbENBO0VBQ0UsK0JBQStCO0FBcUNqQzs7QUFuQ0E7RUFDSSxZQUFZO0FBc0NoQjs7QUFwQ0E7RUFDSSxXQUFXO0FBdUNmOztBQXJDQTtFQUNFLGdCQUFnQjtBQXdDbEI7O0FBdENBO0VBQ0UsYUFBYTtBQXlDZjs7QUF2Q0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBMENuQjs7QUF4Q0E7RUFDSSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGNBQWM7QUEyQ2xCOztBQXBDQTtFQUNFLGNBQWM7QUF1Q2hCOztBQXJDQTtFQUNFLGFBQWE7QUF3Q2Y7O0FBdENBO0VBQ0UsYUFBYTtBQXlDZjs7QUF2Q0M7RUFDRyxxQ0FBcUM7RUFDckMsbUJBQW1CO0FBMEN2Qjs7QUF4Q0U7O0VBRUUsV0FBVztBQTJDZjs7QUF6Q0E7RUFDSSxZQUFZO0FBNENoQjs7QUExQ0E7RUFDRSxhQUFZO0FBNkNkOztBQTNDQTtFQUNFLGlCQUFpQjtBQThDbkI7O0FBNUNBO0VBQ0UsY0FBYztFQUNkLFFBQU87QUErQ1Q7O0FBNUNBO0VBQ0UsWUFBWTtBQStDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5cm9sZS9ob3VybHktdGVtcGxhdGUvaG91cmx5LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgbWFyZ2luOiAwcHg7XG59XG5ib2R5e1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG4uZmxleHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ibHVlX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud2hpdGVfYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMxMDlDRjE7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjoxcHggc29saWQgIzEwOUNGMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIC5zZWxlY3R7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM3ODdBN0Q7XG59XG4uaW5wdXR7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBoZWlnaHQ6MzVweDtcbiAgfVxuIGlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsYnV0dG9uOmZvY3Vze1xuICAgICBvdXRsaW5lOiBub25lO1xuIH1cbi5wYWdlX2hlYWRpbmd7XG4gIGNvbG9yOiAjMzM0RDZFO1xuICBmb250LXdlaWdodDogNjAwO1xuICBcbn1cbi5wYWdlX2hlYWRpbmc+cHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZmxleHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXNwbGF5e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udzk4e1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmhlYWRfcGFkZGluZ3tcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbn1cbi50YWJsZV9oZWFkaW5ne1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTVGMDtcbiAvKiBwYWRkaW5nOiAxMHB4IDBweDsqL1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzMjNDNDc7XG4gbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi50YWJsZV9ib2R5e1xuICAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnRhYmxlX2JvZHk+ZGl2e1xuICBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjODA3QzdDO1xuIC8qIHBhZGRpbmc6IDVweCAwcHg7Ki9cbiAgIG1hcmdpbjogYXV0bztcbiAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuXG59XG4ubXIxMHtcbm1hcmdpbi1yaWdodDoxMHB4O1xufVxuLncyNDB7XG4gd2lkdGg6IDI0MHB4O1xufVxuLmxlYXZlX2NhdCAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmxlYXZlX2NhdCAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmxlYXZlX2NhdCAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwubGVhdmVfY2F0IC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICB3aWR0aDogMjAwcHg7XG59XG4ubGVhdmVfY2F0IC50YWJsZV9oZWFkaW5nPmRpdiwubGVhdmVfY2F0IC50YWJsZV9ib2R5PmRpdntcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyNTBweCkgLyAyKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuXG59XG4uZ3JvdXAxOHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5wdDE1e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuLnB0MTB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmJvdHRvbV9wYWdpZ25hdGlvbntcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG4uYm90dG9tX3BhZ2lnbmF0aW9uIHB7XG5mb250LXdlaWdodDogNTAwO1xuZm9udC1zaXplOiAxM3B4O1xubGluZS1oZWlnaHQ6IDIwcHg7XG59XG4uYm90dG9tX3BhZ2lnbmF0aW9uIHNlbGVjdHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDA3OUZGO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uYm90dG9tX3BhZ2lnbmF0aW9uIC53MjB7XG4gIHdpZHRoOiAyMCU7XG59XG4uYm90dG9tX3BhZ2lnbmF0aW9uIC53MTB7XG4gIHdpZHRoOiAxMCU7XG59XG4uYm90dG9tX3BhZ2lnbmF0aW9uIC53NTB7XG4gIHdpZHRoOiA1MCU7XG59XG4uYm90dG9tX3BhZ2lnbmF0aW9uIC53NDB7XG4gIHdpZHRoOiA0MCU7XG59XG4ubnVtYmVye1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG5saW5lLWhlaWdodDogMjBweDtcbmxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5jb2xvcjogIzAwMDAwMDtcbm1hcmdpbjowcHggNHB4O1xufVxuLmFjdGl2ZV9jaXJjbGV7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IFxuZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xubGluZS1oZWlnaHQ6IDIwcHg7XG5sZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuY29sb3I6ICNmZmY7XG5wYWRkaW5nOjJweCA3cHg7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5iYWNrZ3JvdW5kOiAjMDA3OUZGO1xufVxuLm5leHR7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5mb250LXNpemU6IDEzcHg7XG5saW5lLWhlaWdodDogMjBweDtcbmxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5jb2xvcjogIzAwNzlGRjtcblxufVxuLnc0NTB7XG4gIHdpZHRoOiA0NTBweDtcbn1cbi53aGl0ZXtcbiAgLy8gbWFyZ2luLWxlZnQ6IDIyN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDoxMDAlIDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFZGVkZWQ7XG59XG4ubW9kYWwtdGl0bGV7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzJCMjYyNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLndpZDEwMHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubGVhdmVfYXBwIC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwubGVhdmVfYXBwIC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmxlYXZlX2FwcCAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwubGVhdmVfYXBwIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICB3aWR0aDogMjAwcHg7XG59XG4ubGVhdmVfYXBwIC50YWJsZV9ib2R5PmRpdiwubGVhdmVfYXBwIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSA2MDBweCkgLyA1KTtcbn1cbi5sZWF2ZV9hcHAgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg1KSwgLmxlYXZlX2FwcCAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDUpIHtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbi5sZWF2ZV9wciAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmxlYXZlX3ByIC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmxlYXZlX3ByIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5sZWF2ZV9wciAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLmxlYXZlX3ByIC50YWJsZV9ib2R5PmRpdiwubGVhdmVfcHIgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDYyMHB4KSAvIDUpO1xufVxuLmxlYXZlX3ByIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoNiksIC5sZWF2ZV9wciAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDYpIHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG4ubGVhdmVfcHIgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg3KSwgLmxlYXZlX3ByIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNykge1xuICAgIHdpZHRoOiA3MHB4O1xufVxuLmxlYXZlX3Bye1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxudGV4dGFyZWE6Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubW9kYWwgdGV4dGFyZWF7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG59XG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAvLyAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nMS9jYWwuc3ZnKSBuby1yZXBlYXQ7XG4gIC8vICAgd2lkdGg6IDIwcHg7XG4gIC8vICAgaGVpZ2h0OiAyMHB4O1xuICAvLyAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgLy8gICBwYWRkaW5nOiAycHggMHB4O1xufVxuaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gIGNvbG9yOiAjNzg3QTdEO1xufVxuaW5wdXQ6Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b246Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4gaW5wdXRbdHlwZT1cImRhdGVcIl06YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXM6YmVmb3JlLFxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTp2YWxpZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cbi5yaWdodHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ubW9kYWwtaGVhZGVyOmJlZm9yZSwubW9kYWwtaGVhZGVyOmFmdGVye1xuICBkaXNwbGF5Om5vbmU7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbi10b3A6IC0yMXB4O1xufVxuLm1vZGFsLWRpYWxvZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6MTAlO1xufVxuXG4uaDEwe1xuICBoZWlnaHQ6IDQ1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/payrole/hourly-template/hourly-template.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/payrole/hourly-template/hourly-template.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HourlyTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourlyTemplateComponent", function() { return HourlyTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
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







let HourlyTemplateComponent = /** @class */ (() => {
    let HourlyTemplateComponent = class HourlyTemplateComponent {
        constructor(router, http, auth, msgToast, pdf, excel) {
            this.router = router;
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.pdf = pdf;
            this.excel = excel;
            this.jsonFlag = {
                institute_id: ''
            };
            this.varJson = {
                pageIndex: 1,
                sizeArr: [5, 25, 50, 100, 150, 200, 500],
                total_item: 0,
                pageSize: 10,
                pageOffset: 1,
            };
            this.hourlyDataList = [];
            this.tempList = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            // this.template_id = sessionStorage.getItem('id')
        }
        ngOnInit() {
            this.getAllHourlyData();
            this.fetchTableDataByPage(1);
        }
        addHourly() {
            this.router.navigateByUrl("/view/payrole/add-hourly");
        }
        onEdit(id) {
            sessionStorage.setItem('id', JSON.stringify(id));
            this.router.navigateByUrl('/view/payrole/edit-hourly/' + id);
        }
        fetchNext() {
            this.varJson.pageOffset++;
            this.fetchTableDataByPage(this.varJson.pageOffset);
        }
        fetchPrevious() {
            this.varJson.pageOffset--;
            this.fetchTableDataByPage(this.varJson.pageOffset);
        }
        fetchTableDataByPage(index) {
            this.varJson.pageOffset = index;
            this.getAllHourlyData();
        }
        updateTableBatchSize(num) {
            this.varJson.pageOffset = 1;
            this.varJson.pageSize = parseInt(num);
            this.fetchTableDataByPage(this.varJson.pageOffset);
        }
        getAllHourlyData() {
            this.auth.showLoader();
            let url = '/api/v1/payroll/template/hourly/' + this.jsonFlag.institute_id + '/all?pageOffset=' + this.varJson.pageOffset + '&pageSize=' + this.varJson.pageSize;
            this.http.getData(url).subscribe((res) => {
                this.hourlyDataList = res.result.response;
                this.varJson.total_item = res.result.totalElements;
                this.tempList = res.result.response;
                for (let i = 0; i < this.hourlyDataList.length; i++) {
                    this.template_id = this.hourlyDataList[i].template_id;
                }
                console.log("page", res.result);
                this.auth.hideLoader();
                console.log("hourly", this.hourlyDataList);
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        deleteById(obj) {
            this.template_id = obj;
        }
        deleteHourly(obj) {
            if (confirm('Are you sure, You want to delete this template?')) {
                this.template_id = obj;
                this.auth.showLoader();
                let url = '/api/v1/payroll/template/salary/delete/' + this.jsonFlag.institute_id + '/' + this.template_id;
                this.http.deleteDataById(url).subscribe(res => {
                    console.log("delet", this.template_id);
                    this.auth.hideLoader();
                    this.getAllHourlyData();
                    this.msgToast.showErrorMessage('success', '', "Hourly deleted successfully");
                    $('#deleteModal').modal('hide');
                    console.log("delete idddd", this.template_id);
                }, err => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.message);
                });
            }
        }
        downloadPdf() {
            for (let i = 0; i < this.hourlyDataList.length; i++) {
                this.hourlyDataList[i].template_id = i + 1;
            }
            let temp = [];
            this.hourlyDataList.map((e) => {
                let obj = [
                    e.template_id,
                    e.hourly_grade,
                    e.hourly_rate
                ];
                temp.push(obj);
            });
            let row = [];
            row = [["#", "Hourly Grades", "Hourly Rates"]];
            let column = temp;
            this.pdf.exportToPdf(row, column, 'Hourly_template');
        }
        downloaExcel() {
            for (let i = 0; i < this.hourlyDataList.length; i++) {
                this.hourlyDataList[i].template_id = i + 1;
            }
            let temp = [];
            temp = this.hourlyDataList.map(e => {
                let obj = {
                    "#": e.template_id,
                    "Hourly Grades": e.hourly_grade,
                    "Hourly Rates": e.hourly_rate
                };
                return obj;
            });
            this.excel.exportAsExcelFile(temp, 'Hourly_template');
        }
        searchFun() {
            this.hourlyDataList = this.tempList;
            if (this.searchInput == undefined || this.searchInput == null) {
                this.searchInput = "";
            }
            else {
                let searchData = this.hourlyDataList.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchInput.toLowerCase())));
                this.hourlyDataList = searchData;
            }
        }
    };
    HourlyTemplateComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] }
    ];
    HourlyTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hourly-template',
            template: __importDefault(__webpack_require__(/*! raw-loader!./hourly-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/hourly-template/hourly-template.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./hourly-template.component.scss */ "./src/app/components/payrole/hourly-template/hourly-template.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], HourlyTemplateComponent);
    return HourlyTemplateComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/make-payment/make-payment.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/payrole/make-payment/make-payment.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n}\n\n.form-control {\n  border-radius: 3px;\n  box-shadow: none;\n  border: 1px solid #E2E7EB;\n  color: #555;\n  font-size: 12px;\n  line-height: 1.42857;\n  width: 100%;\n  background-color: #F5F5F5;\n}\n\n.text-red {\n  color: #f56954 !important;\n}\n\n.page_heading {\n  color: #334D6E;\n  font-weight: 600;\n}\n\n.page_heading > p {\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: left;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  width: calc(100% / 5);\n  padding-left: 2%;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 25px;\n  width: calc(100% / 5);\n  padding-left: 2%;\n}\n\n.page_heading {\n  color: #334D6E;\n  font-weight: 600;\n}\n\n.page_heading > p {\n  margin-bottom: 0px;\n  font-size: 14px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.pt15 {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  justify-content: flex-end;\n  margin-bottom: -10px;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.btn.btn-primary {\n  color: #fff;\n  background-color: #348fe2;\n  border-color: #348fe2;\n}\n\n.mrg {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n\n.btn {\n  font-weight: 500;\n  border-radius: 3px;\n  border: 1px solid transparent;\n}\n\n.btn-xs {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.modal-title {\n  font-family: 'Open Sans', sans-serif;\n  letter-spacing: normal;\n  margin: 0px;\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 7px 20px;\n}\n\n.modal-header:before, .modal-header:after {\n  display: none;\n}\n\n.modal-header .close {\n  margin-top: -21px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.h10 {\n  height: 45px;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n  float: right;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.blue_button1 {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n  float: right;\n  margin-bottom: 7px;\n  margin-right: 40px;\n}\n\n.empty-img {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  flex-direction: column;\n  padding-top: 12%;\n}\n\n.hourlydiv {\n  float: left;\n  margin: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL21ha2UtcGF5bWVudC9tYWtlLXBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gseUJBQXlCO0FBQzdCOztBQUNBO0VBQ0kseUJBQXlCO0FBRTdCOztBQUFBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtBQUdwQjs7QUFBRTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBR25COztBQURFO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUMxQixzQkFBQTtFQUNDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUEwQztBQUk5Qzs7QUFDRTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZixpQkFBaUI7RUFFakIscUJBQW9CO0VBQ3BCLGdCQUFnQjtBQUNuQjs7QUFHRTtFQUNHLFdBQVc7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFBOUM7O0FBRUU7RUFFRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2YscUJBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFBcEI7O0FBT0E7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0FBSnBCOztBQU9FO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFKbkI7O0FBTUU7RUFDRSxhQUFhO0FBSGpCOztBQUtFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUZsQzs7QUFJRTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFEcEI7O0FBR0U7RUFDRSxpQkFBaUI7RUFDakIsK0NBQTRDO0VBQzFDLHVEQUFvRDtFQUNwRCxvREFBaUQ7QUFBdkQ7O0FBRUU7RUFDRSxrQkFBaUI7QUFDckI7O0FBQ0k7RUFDQyxZQUFZO0FBRWpCOztBQUFJO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUc1Qjs7QUFETTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2QsWUFBVztBQUlyQjs7QUFGUTtFQUNFLHFCQUFxQjtFQUNyQiw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBSzVDOztBQUhNO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFNN0I7O0FBSkk7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBT3ZCOztBQUxFO0VBQ0UsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFRakM7O0FBTkE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFTcEI7O0FBUEE7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3JCLFdBQVc7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFVakI7O0FBUkE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBV25COztBQVRBO0VBQ0UsYUFBWTtBQVlkOztBQVZBO0VBQ0UsaUJBQWlCO0FBYW5COztBQVhBO0VBQ0UsY0FBYztFQUNkLFFBQU87QUFjVDs7QUFYQTtFQUNFLFlBQVk7QUFjZDs7QUFaQTtFQUNFLG9CQUFvQjtBQWV0Qjs7QUFiQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7QUFnQmQ7O0FBZEE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFpQmpCOztBQWZBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNoQixrQkFBa0I7QUFrQnRCOztBQWhCQTtFQUNFLGFBQWE7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixzQkFBc0I7RUFHdEIsZ0JBQWdCO0FBaUJwQjs7QUFmQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBa0JiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL21ha2UtcGF5bWVudC9tYWtlLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTJFN0VCO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuLnRleHQtcmVkIHtcbiAgICBjb2xvcjogI2Y1Njk1NCAhaW1wb3J0YW50O1xufVxuLnBhZ2VfaGVhZGluZ3tcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIFxuICB9XG4gIC5wYWdlX2hlYWRpbmc+cHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgLyogcGFkZGluZzogMTBweCAwcHg7Ki9cbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuLy8gICAubXNnMSAudGFibGVfaGVhZGluZz5kaXZ7XG4vLyAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxNTBweCkgLyA0KTtcbi8vICAgfVxuICAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgLy93aWR0aDogY2FsYygoMTAwJSAtMTUwKS80KTtcbiAgIHdpZHRoOmNhbGMoMTAwJSAvIDUpO1xuICAgcGFkZGluZy1sZWZ0OiAyJTtcblxuICB9XG4gIFxuICAudGFibGVfYm9keXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4MDdDN0M7XG4gICAvKiBwYWRkaW5nOiA1cHggMHB4OyovXG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG5cbiAgXG4gIH1cbi8vICAgLm1zZzEgLnRhYmxlX2JvZHk+ZGl2e1xuLy8gICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjUwcHgpIC8gMSk7XG4vLyAgIH1cbi5wYWdlX2hlYWRpbmd7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBcbiAgfVxuICAucGFnZV9oZWFkaW5nPnB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5kaXNwbGF5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53OTh7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5oZWFkX3BhZGRpbmd7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgfVxuICAubXIxMHtcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgICB9XG4gICAgLncyNDB7XG4gICAgIHdpZHRoOiAyNDBweDtcbiAgICB9XG4gICAgLnB0MTV7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gICAgICB9XG4gICAgICAuaW5wdXR7XG4gICAgICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBoZWlnaHQ6MzVweDtcbiAgICAgICAgfVxuICAgICAgICAuZmEge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICB9XG4gICAgICAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDhmZTI7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzM0OGZlMjtcbiAgICB9XG4gICAgLm1yZyB7XG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIH1cbiAgLmJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uYnRuLXhzIHtcbiAgcGFkZGluZzogMXB4IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4ubW9kYWwtdGl0bGV7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzJCMjYyNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1vZGFsIHRleHRhcmVhe1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xufVxuLm1vZGFsLWhlYWRlcjpiZWZvcmUsLm1vZGFsLWhlYWRlcjphZnRlcntcbiAgZGlzcGxheTpub25lO1xufVxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBtYXJnaW4tdG9wOiAtMjFweDtcbn1cbi5tb2RhbC1kaWFsb2cge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOjEwJTtcbn1cblxuLmgxMHtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLnB0MTB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmJsdWVfYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLndoaXRlX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMTA5Q0YxO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6MXB4IHNvbGlkICMxMDlDRjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibHVlX2J1dHRvbjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG4uZW1wdHktaW1ne1xuICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gcGFkZGluZy1sZWZ0OiA0MCU7XG4gICBcbiAgICBwYWRkaW5nLXRvcDogMTIlO1xufVxuLmhvdXJseWRpdntcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogNXB4O1xuICBcbn1cbi5wdDEze1xuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvLyBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/payrole/make-payment/make-payment.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/payrole/make-payment/make-payment.component.ts ***!
  \***************************************************************************/
/*! exports provided: MakePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePaymentComponent", function() { return MakePaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
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







let MakePaymentComponent = /** @class */ (() => {
    let MakePaymentComponent = class MakePaymentComponent {
        constructor(router, http, auth, msgToast, pdf, excel) {
            this.router = router;
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.pdf = pdf;
            this.excel = excel;
            this.jsonFlag = {
                institute_id: ''
            };
            this.teacherList = [];
            this.tempList = [];
            this.allUserDataList = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            this.selectedTeacherId = sessionStorage.getItem('teacher_id');
            this.userId = sessionStorage.getItem('user_id');
        }
        ngOnInit() {
            this.getAllUserRol();
        }
        onclickMakePayment(obj) {
            let user_id;
            let teacher_id;
            if (this.selectedId == 0) {
                teacher_id = obj.teacher_id;
                user_id = 0;
            }
            else {
                teacher_id = 0;
                user_id = obj.user_id;
            }
            let template_id = obj.template_id;
            sessionStorage.setItem('template_id', template_id);
            this.router.navigateByUrl('/view/payrole/add-salary-payment/' + teacher_id + '/' + user_id);
            console.log("dataaa", obj);
        }
        getAllUserRol() {
            this.auth.showLoader();
            const url = `/api/v1/roleApi/allRoles/${this.jsonFlag.institute_id}`;
            this.http.getData(url).subscribe((res) => {
                this.teacherList = res;
                this.selectedId = res.role_id;
                this.auth.hideLoader();
                console.log("teacherlisttttttt", this.teacherList);
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        getAlluserData() {
            if (this.selectedId != -1) {
                this.auth.showLoader();
                let url = '/api/v1/payroll/manage/' + this.jsonFlag.institute_id + '/users/' + this.selectedId + '?isForPayment=true';
                this.http.getData(url).subscribe((res) => {
                    this.allUserDataList = res.result;
                    this.tempList = res.result;
                    sessionStorage.setItem('selectedId', JSON.stringify(this.selectedId));
                    console.log("teacher_id", this.teacher_id);
                    this.auth.hideLoader();
                    console.log("teacher id", this.allUserDataList);
                }, err => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
                });
            }
        }
        downloadPdf() {
            for (let i = 0; i < this.allUserDataList.length; i++) {
                this.allUserDataList[i].template_id = i + 1;
            }
            let temp = [];
            this.allUserDataList.map((e) => {
                let obj = [
                    e.template_id,
                    e.user_name,
                    e.user_email,
                    e.joining_date,
                ];
                temp.push(obj);
            });
            let row = [];
            row = [["#", "Name", "Email", "Joining Date"]];
            let column = temp;
            this.pdf.exportToPdf(row, column, 'Salary_payment');
        }
        downloaExcel() {
            for (let i = 0; i < this.allUserDataList.length; i++) {
                this.allUserDataList[i].template_id = i + 1;
            }
            let temp = [];
            temp = this.allUserDataList.map(e => {
                let obj = {
                    template_id: e.template_id,
                    user_name: e.user_name,
                    user_email: e.user_email,
                    joining_date: e.joining_date,
                };
                return obj;
            });
            this.excel.exportAsExcelFile(temp, 'Salary_payment');
        }
        searchFun() {
            this.allUserDataList = this.tempList;
            if (this.searchInput == undefined || this.searchInput == null) {
                this.searchInput = "";
            }
            else {
                let searchData = this.allUserDataList.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchInput.toLowerCase())));
                this.allUserDataList = searchData;
            }
        }
    };
    MakePaymentComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] }
    ];
    MakePaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make-payment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./make-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/make-payment/make-payment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./make-payment.component.scss */ "./src/app/components/payrole/make-payment/make-payment.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], MakePaymentComponent);
    return MakePaymentComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/manage-salary/manage-salary.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/payrole/manage-salary/manage-salary.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n}\n\n.form-control {\n  border-radius: 3px;\n  box-shadow: none;\n  border: 1px solid #E2E7EB;\n  color: #555;\n  font-size: 12px;\n  line-height: 1.42857;\n  width: 100%;\n  background: #F5F5F5;\n}\n\n.text-red {\n  color: #f56954 !important;\n}\n\n.page_heading {\n  color: #334D6E;\n  font-weight: 600;\n}\n\n.page_heading > p {\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: left;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  width: calc(100% / 5);\n  padding-left: 2%;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  margin: auto;\n  line-height: 25px;\n  width: calc(100% / 5);\n  padding-left: 2%;\n}\n\n.page_heading {\n  color: #334D6E;\n  font-weight: 600;\n}\n\n.page_heading > p {\n  margin-bottom: 0px;\n  font-size: 14px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.pt15 {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  justify-content: flex-end;\n  margin-bottom: -10px;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.btn.btn-primary {\n  color: #fff;\n  background-color: #348fe2;\n  border-color: #348fe2;\n}\n\n.mrg {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n\n.btn {\n  font-weight: 500;\n  border-radius: 3px;\n  border: 1px solid transparent;\n}\n\n.btn-xs {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.modal-title {\n  font-family: 'Open Sans', sans-serif;\n  letter-spacing: normal;\n  margin: 0px;\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 7px 20px;\n}\n\n.modal-header:before, .modal-header:after {\n  display: none;\n}\n\n.modal-header .close {\n  margin-top: -21px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.h10 {\n  height: 45px;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n  float: right;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.empty-img {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  flex-direction: column;\n  padding-top: 12%;\n}\n\n.hourlygrade {\n  float: left;\n  margin: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL21hbmFnZS1zYWxhcnkvbWFuYWdlLXNhbGFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUFDZjs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWixtQkFBbUI7QUFDdEI7O0FBQ0E7RUFDSSx5QkFBeUI7QUFFN0I7O0FBQUE7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0FBR3BCOztBQUFFO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFHbkI7O0FBREU7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUEwQztBQUk5Qzs7QUFERTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZixpQkFBaUI7RUFDakIscUJBQW9CO0VBQ3BCLGdCQUFnQjtBQUluQjs7QUFBRTtFQUNHLFdBQVc7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFHOUM7O0FBREU7RUFFRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBR3BCOztBQUFBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtBQUdwQjs7QUFBRTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBR25COztBQURFO0VBQ0UsYUFBYTtBQUlqQjs7QUFGRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFLbEM7O0FBSEU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBTXBCOztBQUpFO0VBQ0UsaUJBQWlCO0VBQ2pCLCtDQUE0QztFQUMxQyx1REFBb0Q7RUFDcEQsb0RBQWlEO0FBT3ZEOztBQUxFO0VBQ0Usa0JBQWlCO0FBUXJCOztBQU5JO0VBQ0MsWUFBWTtBQVNqQjs7QUFQSTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFVNUI7O0FBUk07RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNkLFlBQVc7QUFXckI7O0FBVFE7RUFDRSxxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGtDQUFrQztBQVk1Qzs7QUFWTTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBYTdCOztBQVhJO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQWN2Qjs7QUFaRTtFQUNFLGdCQUFnQjtFQUdoQixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBZWpDOztBQWJBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBZ0JwQjs7QUFkQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDckIsV0FBVztFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQWlCakI7O0FBZkE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBa0JuQjs7QUFoQkE7RUFDRSxhQUFZO0FBbUJkOztBQWpCQTtFQUNFLGlCQUFpQjtBQW9CbkI7O0FBbEJBO0VBQ0UsY0FBYztFQUNkLFFBQU87QUFxQlQ7O0FBbEJBO0VBQ0UsWUFBWTtBQXFCZDs7QUFuQkE7RUFDRSxvQkFBb0I7QUFzQnRCOztBQXBCQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7QUF1QmQ7O0FBckJBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBd0JqQjs7QUF0QkE7RUFDRSxhQUFhO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osc0JBQXNCO0VBR3RCLGdCQUFnQjtBQXVCcEI7O0FBckJBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUF3QmIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BheXJvbGUvbWFuYWdlLXNhbGFyeS9tYW5hZ2Utc2FsYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UyRTdFQjtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuLnRleHQtcmVkIHtcbiAgICBjb2xvcjogI2Y1Njk1NCAhaW1wb3J0YW50O1xufVxuLnBhZ2VfaGVhZGluZ3tcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIFxuICB9XG4gIC5wYWdlX2hlYWRpbmc+cHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cbiAgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICBsaW5lLWhlaWdodDogMzVweDtcbiAgIHdpZHRoOmNhbGMoMTAwJSAvIDUpO1xuICAgcGFkZGluZy1sZWZ0OiAyJTtcblxuICB9XG4gIFxuICAudGFibGVfYm9keXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4MDdDN0M7XG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gIH1cblxuLnBhZ2VfaGVhZGluZ3tcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIFxuICB9XG4gIC5wYWdlX2hlYWRpbmc+cHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmRpc3BsYXl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLnc5OHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmhlYWRfcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG4gIC5tcjEwe1xuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgIH1cbiAgICAudzI0MHtcbiAgICAgd2lkdGg6IDI0MHB4O1xuICAgIH1cbiAgICAucHQxNXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICAgIH1cbiAgICAgIC5pbnB1dHtcbiAgICAgICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGhlaWdodDozNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5mYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgIH1cbiAgICAgIC5idG4uYnRuLXByaW1hcnkge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OGZlMjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzQ4ZmUyO1xuICAgIH1cbiAgICAubXJnIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgfVxuICAuYnRuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5idG4teHMge1xuICBwYWRkaW5nOiAxcHggNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5tb2RhbC10aXRsZXtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjMkIyNjI2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubW9kYWwgdGV4dGFyZWF7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG59XG4ubW9kYWwtaGVhZGVyOmJlZm9yZSwubW9kYWwtaGVhZGVyOmFmdGVye1xuICBkaXNwbGF5Om5vbmU7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbi10b3A6IC0yMXB4O1xufVxuLm1vZGFsLWRpYWxvZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6MTAlO1xufVxuXG4uaDEwe1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4ucHQxMHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uYmx1ZV9idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG59XG4ud2hpdGVfYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMxMDlDRjE7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjoxcHggc29saWQgIzEwOUNGMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVtcHR5LWltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIHBhZGRpbmctbGVmdDogNDAlO1xuICAgXG4gICAgcGFkZGluZy10b3A6IDEyJTtcbn1cbi5ob3VybHlncmFkZXtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogNXB4O1xuICBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/payrole/manage-salary/manage-salary.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/payrole/manage-salary/manage-salary.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ManageSalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSalaryComponent", function() { return ManageSalaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
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







let ManageSalaryComponent = /** @class */ (() => {
    let ManageSalaryComponent = class ManageSalaryComponent {
        constructor(router, http, auth, msgToast, pdf, excel, routeParam) {
            this.router = router;
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.pdf = pdf;
            this.excel = excel;
            this.routeParam = routeParam;
            this.jsonFlag = {
                institute_id: '',
                role_id: ''
            };
            this.teacherList = [];
            this.tempList = [];
            this.allUserDataList = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            this.selectedId = JSON.parse(sessionStorage.getItem('selectedId'));
        }
        ngOnInit() {
            this.getAllUserRol();
        }
        setDeleteData(obj) {
            this.selectedTeacherId = obj.teacher_id;
            this.userId = obj.user_id;
        }
        onClickAdd(obj) {
            let user_id;
            let teacher_id;
            if (this.selectedId == 0) {
                teacher_id = obj.teacher_id;
                user_id = 0;
            }
            else {
                teacher_id = 0;
                user_id = obj.user_id;
            }
            this.router.navigateByUrl('/view/payrole/add-manage/' + teacher_id + '/' + user_id);
        }
        onclickView(obj) {
            // sessionStorage.setItem('id',JSON.stringify(id))
            let user_id;
            let teacher_id;
            if (this.selectedId == 0) {
                teacher_id = obj.teacher_id;
                user_id = 0;
            }
            else {
                teacher_id = 0;
                user_id = obj.user_id;
            }
            this.router.navigateByUrl('/view/payrole/view-manage-template/' + teacher_id + '/' + user_id);
        }
        onClickEdit(obj) {
            let user_id;
            let teacher_id;
            if (this.selectedId == 0) {
                teacher_id = obj.teacher_id;
                user_id = 0;
            }
            else {
                teacher_id = 0;
                user_id = obj.user_id;
            }
            this.template_name = obj.templateName;
            this.templateType = obj.templateType;
            this.template_id = obj.template_id;
            console.log("edit obj", this.template_name);
            sessionStorage.setItem('temp_name', this.template_name);
            sessionStorage.setItem('temp_type', this.templateType);
            sessionStorage.setItem('temp_id', this.template_id);
            this.router.navigateByUrl('/view/payrole/edit-manage/' + teacher_id + '/' + user_id);
        }
        getAllUserRol() {
            this.auth.showLoader();
            const url = `/api/v1/roleApi/allRoles/${this.jsonFlag.institute_id}`;
            this.http.getData(url).subscribe((res) => {
                this.teacherList = res;
                this.selectedId = res.role_id;
                this.auth.hideLoader();
                console.log("teacherlisttttttt", this.teacherList);
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        getAlluserData() {
            if (this.selectedId != -1) {
                this.auth.showLoader();
                let url = '/api/v1/payroll/manage/' + this.jsonFlag.institute_id + '/users/' + this.selectedId;
                this.http.getData(url).subscribe((res) => {
                    this.allUserDataList = res.result;
                    this.tempList = res.result;
                    console.log("for update data", this.allUserDataList);
                    this.auth.hideLoader();
                }, err => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
                });
            }
        }
        removeTemplate(obj) {
            if (confirm('Are you sure, You want  to delete this template?')) {
                this.selectedTeacherId = obj.teacher_id;
                this.userId = obj.user_id;
                let obj2 = {
                    user_id: this.userId,
                    teacher_id: this.selectedTeacherId,
                    institute_id: this.jsonFlag.institute_id
                };
                this.auth.showLoader();
                let url = '/api/v1/payroll/manage/remove';
                this.http.putData(url, obj2).subscribe((res) => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage('success', '', "Template Removed  successfully");
                    $('#deleteModal').modal('hide');
                    //this.auth.hideLoader();
                    this.getAlluserData();
                }, err => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.message);
                });
            }
        }
        downloadPdf() {
            for (let i = 0; i < this.allUserDataList.length; i++) {
                this.allUserDataList[i].template_id = i + 1;
            }
            let temp = [];
            this.allUserDataList.map((e) => {
                let obj = [
                    e.template_id,
                    e.user_name,
                    e.user_email,
                    e.joining_date,
                ];
                temp.push(obj);
            });
            let row = [];
            row = [["#", "Name", "Email", "Joining Date"]];
            let column = temp;
            this.pdf.exportToPdf(row, column, 'Manage_salary');
        }
        downloaExcel() {
            for (let i = 0; i < this.allUserDataList.length; i++) {
                this.allUserDataList[i].template_id = i + 1;
            }
            let temp = [];
            temp = this.allUserDataList.map(e => {
                let obj = {
                    "#": e.template_id,
                    "Name": e.user_name,
                    "Email": e.user_email,
                    "Joining Date": e.joining_date,
                };
                return obj;
            });
            this.excel.exportAsExcelFile(temp, 'Manage_Salary');
        }
        searchFun() {
            this.allUserDataList = this.tempList;
            if (this.searchInput == undefined || this.searchInput == null) {
                this.searchInput = "";
            }
            else {
                let searchData = this.allUserDataList.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchInput.toLowerCase())));
                this.allUserDataList = searchData;
            }
        }
    };
    ManageSalaryComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ];
    ManageSalaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-salary',
            template: __importDefault(__webpack_require__(/*! raw-loader!./manage-salary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/manage-salary/manage-salary.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./manage-salary.component.scss */ "./src/app/components/payrole/manage-salary/manage-salary.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ManageSalaryComponent);
    return ManageSalaryComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/payrole-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/payrole/payrole-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: PayroleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayroleRoutingModule", function() { return PayroleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_edit_hourly_add_edit_hourly_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-hourly/add-edit-hourly.component */ "./src/app/components/payrole/add-edit-hourly/add-edit-hourly.component.ts");
/* harmony import */ var _add_edit_salary_add_edit_salary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-salary/add-edit-salary.component */ "./src/app/components/payrole/add-edit-salary/add-edit-salary.component.ts");
/* harmony import */ var _hourly_template_hourly_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hourly-template/hourly-template.component */ "./src/app/components/payrole/hourly-template/hourly-template.component.ts");
/* harmony import */ var _make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./make-payment/make-payment.component */ "./src/app/components/payrole/make-payment/make-payment.component.ts");
/* harmony import */ var _manage_salary_manage_salary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-salary/manage-salary.component */ "./src/app/components/payrole/manage-salary/manage-salary.component.ts");
/* harmony import */ var _salary_template_salary_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./salary-template/salary-template.component */ "./src/app/components/payrole/salary-template/salary-template.component.ts");
/* harmony import */ var _view_manage_template_view_manage_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-manage-template/view-manage-template.component */ "./src/app/components/payrole/view-manage-template/view-manage-template.component.ts");
/* harmony import */ var _view_salary_template_view_salary_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-salary-template/view-salary-template.component */ "./src/app/components/payrole/view-salary-template/view-salary-template.component.ts");
/* harmony import */ var _add_edit_manage_add_edit_manage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-edit-manage/add-edit-manage.component */ "./src/app/components/payrole/add-edit-manage/add-edit-manage.component.ts");
/* harmony import */ var _add_salary_payment_add_salary_payment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-salary-payment/add-salary-payment.component */ "./src/app/components/payrole/add-salary-payment/add-salary-payment.component.ts");
/* harmony import */ var _view_salary_payment_view_salary_payment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-salary-payment/view-salary-payment.component */ "./src/app/components/payrole/view-salary-payment/view-salary-payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const routes = [
    { path: 'salary-template', component: _salary_template_salary_template_component__WEBPACK_IMPORTED_MODULE_7__["SalaryTemplateComponent"] },
    { path: 'hourly-template', component: _hourly_template_hourly_template_component__WEBPACK_IMPORTED_MODULE_4__["HourlyTemplateComponent"] },
    { path: 'make-payment', component: _make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_5__["MakePaymentComponent"] },
    { path: 'manage-salary', component: _manage_salary_manage_salary_component__WEBPACK_IMPORTED_MODULE_6__["ManageSalaryComponent"] },
    { path: 'add-salary', component: _add_edit_salary_add_edit_salary_component__WEBPACK_IMPORTED_MODULE_3__["AddEditSalaryComponent"], pathMatch: 'prefix' },
    { path: 'edit-salary/:id', component: _add_edit_salary_add_edit_salary_component__WEBPACK_IMPORTED_MODULE_3__["AddEditSalaryComponent"], pathMatch: 'prefix' },
    { path: 'view-salary-template/:id', component: _view_salary_template_view_salary_template_component__WEBPACK_IMPORTED_MODULE_9__["ViewSalaryTemplateComponent"] },
    { path: 'add-hourly', component: _add_edit_hourly_add_edit_hourly_component__WEBPACK_IMPORTED_MODULE_2__["AddEditHourlyComponent"] },
    { path: 'edit-hourly/:id', component: _add_edit_hourly_add_edit_hourly_component__WEBPACK_IMPORTED_MODULE_2__["AddEditHourlyComponent"], pathMatch: 'prefix' },
    { path: 'view-manage-template/:teacher_id/:user_id', component: _view_manage_template_view_manage_template_component__WEBPACK_IMPORTED_MODULE_8__["ViewManageTemplateComponent"] },
    { path: 'add-manage/:teacher_id/:user_id', component: _add_edit_manage_add_edit_manage_component__WEBPACK_IMPORTED_MODULE_10__["AddEditManageComponent"] },
    { path: 'edit-manage/:teacher_id/:user_id', component: _add_edit_manage_add_edit_manage_component__WEBPACK_IMPORTED_MODULE_10__["AddEditManageComponent"] },
    { path: 'add-salary-payment/:teacher_id/:user_id', component: _add_salary_payment_add_salary_payment_component__WEBPACK_IMPORTED_MODULE_11__["AddSalaryPaymentComponent"] },
    { path: 'view-salary-payment/:teacher_id/:user_id', component: _view_salary_payment_view_salary_payment_component__WEBPACK_IMPORTED_MODULE_12__["ViewSalaryPaymentComponent"] },
];
let PayroleRoutingModule = /** @class */ (() => {
    let PayroleRoutingModule = class PayroleRoutingModule {
    };
    PayroleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PayroleRoutingModule);
    return PayroleRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/payrole/payrole.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/payrole/payrole.module.ts ***!
  \******************************************************/
/*! exports provided: PayroleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayroleModule", function() { return PayroleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _payrole_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payrole-routing.module */ "./src/app/components/payrole/payrole-routing.module.ts");
/* harmony import */ var _payrole_payrole_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payrole/payrole.component */ "./src/app/components/payrole/payrole/payrole.component.ts");
/* harmony import */ var _salary_template_salary_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salary-template/salary-template.component */ "./src/app/components/payrole/salary-template/salary-template.component.ts");
/* harmony import */ var _add_edit_salary_add_edit_salary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-salary/add-edit-salary.component */ "./src/app/components/payrole/add-edit-salary/add-edit-salary.component.ts");
/* harmony import */ var _hourly_template_hourly_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hourly-template/hourly-template.component */ "./src/app/components/payrole/hourly-template/hourly-template.component.ts");
/* harmony import */ var _manage_salary_manage_salary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-salary/manage-salary.component */ "./src/app/components/payrole/manage-salary/manage-salary.component.ts");
/* harmony import */ var _make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./make-payment/make-payment.component */ "./src/app/components/payrole/make-payment/make-payment.component.ts");
/* harmony import */ var _view_salary_template_view_salary_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-salary-template/view-salary-template.component */ "./src/app/components/payrole/view-salary-template/view-salary-template.component.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _add_edit_hourly_add_edit_hourly_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-edit-hourly/add-edit-hourly.component */ "./src/app/components/payrole/add-edit-hourly/add-edit-hourly.component.ts");
/* harmony import */ var _view_manage_template_view_manage_template_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-manage-template/view-manage-template.component */ "./src/app/components/payrole/view-manage-template/view-manage-template.component.ts");
/* harmony import */ var _add_edit_manage_add_edit_manage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-edit-manage/add-edit-manage.component */ "./src/app/components/payrole/add-edit-manage/add-edit-manage.component.ts");
/* harmony import */ var _view_salary_payment_view_salary_payment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view-salary-payment/view-salary-payment.component */ "./src/app/components/payrole/view-salary-payment/view-salary-payment.component.ts");
/* harmony import */ var _add_salary_payment_add_salary_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-salary-payment/add-salary-payment.component */ "./src/app/components/payrole/add-salary-payment/add-salary-payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















let PayroleModule = /** @class */ (() => {
    let PayroleModule = class PayroleModule {
    };
    PayroleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_payrole_payrole_component__WEBPACK_IMPORTED_MODULE_4__["PayroleComponent"], _salary_template_salary_template_component__WEBPACK_IMPORTED_MODULE_5__["SalaryTemplateComponent"], _add_edit_salary_add_edit_salary_component__WEBPACK_IMPORTED_MODULE_6__["AddEditSalaryComponent"], _hourly_template_hourly_template_component__WEBPACK_IMPORTED_MODULE_7__["HourlyTemplateComponent"], _manage_salary_manage_salary_component__WEBPACK_IMPORTED_MODULE_8__["ManageSalaryComponent"], _make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_9__["MakePaymentComponent"], _view_salary_template_view_salary_template_component__WEBPACK_IMPORTED_MODULE_10__["ViewSalaryTemplateComponent"], _add_edit_hourly_add_edit_hourly_component__WEBPACK_IMPORTED_MODULE_14__["AddEditHourlyComponent"], _view_manage_template_view_manage_template_component__WEBPACK_IMPORTED_MODULE_15__["ViewManageTemplateComponent"], _add_edit_manage_add_edit_manage_component__WEBPACK_IMPORTED_MODULE_16__["AddEditManageComponent"], _view_salary_payment_view_salary_payment_component__WEBPACK_IMPORTED_MODULE_17__["ViewSalaryPaymentComponent"], _add_salary_payment_add_salary_payment_component__WEBPACK_IMPORTED_MODULE_18__["AddSalaryPaymentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _payrole_routing_module__WEBPACK_IMPORTED_MODULE_3__["PayroleRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            providers: [_services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_11__["ExportToPdfService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_12__["ExcelService"]]
        })
    ], PayroleModule);
    return PayroleModule;
})();



/***/ }),

/***/ "./src/app/components/payrole/payrole/payrole.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/payrole/payrole/payrole.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5cm9sZS9wYXlyb2xlL3BheXJvbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/payrole/payrole/payrole.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/payrole/payrole/payrole.component.ts ***!
  \*****************************************************************/
/*! exports provided: PayroleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayroleComponent", function() { return PayroleComponent; });
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

let PayroleComponent = /** @class */ (() => {
    let PayroleComponent = class PayroleComponent {
        constructor() { }
        ngOnInit() {
        }
    };
    PayroleComponent.ctorParameters = () => [];
    PayroleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payrole',
            template: __importDefault(__webpack_require__(/*! raw-loader!./payrole.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/payrole/payrole.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./payrole.component.scss */ "./src/app/components/payrole/payrole/payrole.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PayroleComponent);
    return PayroleComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/salary-template/salary-template.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/payrole/salary-template/salary-template.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading {\n  color: #334D6E;\n  font-weight: 600;\n}\n\n.page_heading > p {\n  margin-bottom: 0px;\n  font-size: 14px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 35px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.leave_cat .table_heading > div:first-child, .leave_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.leave_cat .table_heading > div:last-child, .leave_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.leave_cat .table_heading > div, .leave_cat .table_body > div {\n  width: calc((100% - 250px) / 3);\n  text-align: left;\n  padding-left: 18px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  display: flex;\n  align-items: center;\n  height: 60px;\n  justify-content: flex-end;\n  margin-bottom: -10px;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: 100%;\n  border-top: 3px solid #Ededed;\n}\n\n.modal-title {\n  font-family: 'Open Sans', sans-serif;\n  letter-spacing: normal;\n  margin: 0px;\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.leave_app .table_heading > div:first-child, .leave_app .table_body > div:first-child {\n  width: 100px;\n}\n\n.leave_app .table_heading > div:last-child, .leave_app .table_body > div:last-child {\n  width: 200px;\n}\n\n.leave_app .table_body > div, .leave_app .table_heading > div {\n  width: calc((100% - 600px) / 5);\n}\n\n.leave_app .table_body > div:nth-child(5), .leave_app .table_heading > div:nth-child(5) {\n  width: 300px;\n}\n\n.leave_pr .table_heading > div:first-child, .leave_pr .table_body > div:first-child {\n  width: 100px;\n}\n\n.leave_pr .table_heading > div:last-child, .leave_pr .table_body > div:last-child {\n  width: 200px;\n}\n\n.leave_pr .table_body > div, .leave_pr .table_heading > div {\n  width: calc((100% - 620px) / 5);\n}\n\n.leave_pr .table_body > div:nth-child(6), .leave_pr .table_heading > div:nth-child(6) {\n  width: 250px;\n}\n\n.leave_pr .table_body > div:nth-child(7), .leave_pr .table_heading > div:nth-child(7) {\n  width: 70px;\n}\n\n.leave_pr {\n  margin-top: 15px;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 7px 20px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n.right {\n  float: right;\n}\n\n.modal-header:before, .modal-header:after {\n  display: none;\n}\n\n.modal-header .close {\n  margin-top: -21px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.h10 {\n  height: 45px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL3NhbGFyeS10ZW1wbGF0ZS9zYWxhcnktdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FBQ2Y7O0FBQ0U7RUFDRSxvQ0FBb0M7QUFFeEM7O0FBQUU7RUFDRSxhQUFhO0FBR2pCOztBQURFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBSW5COztBQUZFO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBS25COztBQUhHO0VBQ0MsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQU1sQjs7QUFKRTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2QsWUFBVztBQU9qQjs7QUFMRztFQUNJLGFBQWE7QUFRcEI7O0FBTkU7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBU3BCOztBQU5FO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFTbkI7O0FBUEU7RUFDRSxhQUFhO0FBVWpCOztBQVJFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQVdsQzs7QUFURTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFZcEI7O0FBVkU7RUFDRSxpQkFBaUI7RUFDakIsK0NBQTRDO0VBQzFDLHVEQUFvRDtFQUNwRCxvREFBaUQ7QUFhdkQ7O0FBWEU7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQzFCLHNCQUFBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGdCQUFnQjtBQWNwQjs7QUFYRTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZixpQkFBaUI7QUFjcEI7O0FBWEU7RUFDRyxXQUFXO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMENBQTBDO0FBYzlDOztBQVpFO0VBRUUsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNmLHFCQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQWN0Qjs7QUFYRTtFQUNBLGtCQUFpQjtBQWNuQjs7QUFaRTtFQUNDLFlBQVk7QUFlZjs7QUFiRTtFQUNFLFdBQVc7QUFnQmY7O0FBZEU7RUFDRSxZQUFZO0FBaUJoQjs7QUFmRTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBa0J0Qjs7QUFoQkU7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQW1CaEI7O0FBakJFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQW9CeEI7O0FBbEJFO0VBQ0Usb0JBQW9CO0FBcUJ4Qjs7QUFuQkU7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3JCLGVBQWU7RUFDaEIsV0FBVztFQUNYLFlBQVk7QUFzQmhCOztBQXBCRTtFQUNBLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBdUJuQjs7QUFyQkU7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBd0JuQjs7QUF0QkU7RUFDRSxVQUFVO0FBeUJkOztBQXZCRTtFQUNFLFVBQVU7QUEwQmQ7O0FBeEJFO0VBQ0UsVUFBVTtBQTJCZDs7QUF6QkU7RUFDRSxVQUFVO0FBNEJkOztBQTFCRTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2pCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWM7QUE2QmhCOztBQTNCRTtFQUVBLGdCQUFnQjtFQUNkLGVBQWU7RUFDakIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBNkJyQjs7QUEzQkU7RUFDRSxnQkFBZ0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQThCaEI7O0FBM0JFO0VBQ0UsWUFBWTtBQThCaEI7O0FBNUJFO0VBRUUsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw2QkFBNkI7QUE4QmpDOztBQTVCRTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDckIsV0FBVztFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQStCbkI7O0FBN0JFO0VBQ0UsV0FBVztBQWdDZjs7QUE5QkU7RUFDRSxZQUFZO0FBaUNoQjs7QUEvQkU7RUFDRSxZQUFZO0FBa0NoQjs7QUFoQ0U7RUFDRSwrQkFBK0I7QUFtQ25DOztBQWpDRTtFQUNJLFlBQVk7QUFvQ2xCOztBQWpDRTtFQUNFLFlBQVk7QUFvQ2hCOztBQWxDRTtFQUNFLFlBQVk7QUFxQ2hCOztBQW5DRTtFQUNFLCtCQUErQjtBQXNDbkM7O0FBcENFO0VBQ0ksWUFBWTtBQXVDbEI7O0FBckNFO0VBQ0ksV0FBVztBQXdDakI7O0FBdENFO0VBQ0UsZ0JBQWdCO0FBeUNwQjs7QUF2Q0U7RUFDRSxhQUFhO0FBMENqQjs7QUF4Q0U7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBMkNyQjs7QUF6Q0U7RUFDSSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGNBQWM7QUE0Q3BCOztBQXJDRTtFQUNFLGNBQWM7QUF3Q2xCOztBQXRDRTtFQUNFLGFBQWE7QUF5Q2pCOztBQXZDRTtFQUNFLGFBQWE7QUEwQ2pCOztBQXhDRztFQUNHLHFDQUFxQztFQUNyQyxtQkFBbUI7QUEyQ3pCOztBQXpDSTs7RUFFRSxXQUFXO0FBNENqQjs7QUExQ0U7RUFDSSxZQUFZO0FBNkNsQjs7QUEzQ0U7RUFDRSxhQUFZO0FBOENoQjs7QUE1Q0U7RUFDRSxpQkFBaUI7QUErQ3JCOztBQTdDQTtFQUNJLGNBQWM7RUFDZCxRQUFPO0FBZ0RYOztBQTdDQTtFQUNJLFlBQVk7QUFnRGhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL3NhbGFyeS10ZW1wbGF0ZS9zYWxhcnktdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIGJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAud2hpdGVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICAuc2VsZWN0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gIH1cbiAgLmlucHV0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBoZWlnaHQ6MzVweDtcbiAgICB9XG4gICBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiAgICAgICBvdXRsaW5lOiBub25lO1xuICAgfVxuICAucGFnZV9oZWFkaW5ne1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgXG4gIH1cbiAgLnBhZ2VfaGVhZGluZz5we1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZGlzcGxheXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAudzk4e1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuaGVhZF9wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cbiAgLnRhYmxlX2hlYWRpbmd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTVGMDtcbiAgIC8qIHBhZGRpbmc6IDEwcHggMHB4OyovXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuIFxuICAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIH1cbiAgXG4gIC50YWJsZV9ib2R5e1xuICAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICAudGFibGVfYm9keT5kaXZ7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjODA3QzdDO1xuICAgLyogcGFkZGluZzogNXB4IDBweDsqL1xuICAgICBtYXJnaW46IGF1dG87XG4gICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBcbiAgfVxuICAubXIxMHtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIH1cbiAgLncyNDB7XG4gICB3aWR0aDogMjQwcHg7XG4gIH1cbiAgLmxlYXZlX2NhdCAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmxlYXZlX2NhdCAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLmxlYXZlX2NhdCAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwubGVhdmVfY2F0IC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAubGVhdmVfY2F0IC50YWJsZV9oZWFkaW5nPmRpdiwubGVhdmVfY2F0IC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDI1MHB4KSAvIDMpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICB9XG4gIC5ncm91cDE4e1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucHQxNXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIH1cbiAgLnB0MTB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gcHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHNlbGVjdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDA3OUZGO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NTB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NDB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAubnVtYmVye1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjowcHggNHB4O1xuICB9XG4gIC5hY3RpdmVfY2lyY2xle1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IFxuICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOjJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwNzlGRjtcbiAgfVxuICAubmV4dHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwNzlGRjtcbiAgXG4gIH1cbiAgLnc0NTB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICB9XG4gIC53aGl0ZXtcbiAgICAvLyBtYXJnaW4tbGVmdDogMjI3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDoxMDAlIDtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI0VkZWRlZDtcbiAgfVxuICAubW9kYWwtdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjMkIyNjI2O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC53aWQxMDB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmxlYXZlX2FwcCAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmxlYXZlX2FwcCAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5sZWF2ZV9hcHAgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLmxlYXZlX2FwcCAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmxlYXZlX2FwcCAudGFibGVfYm9keT5kaXYsLmxlYXZlX2FwcCAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA2MDBweCkgLyA1KTtcbiAgfVxuICAubGVhdmVfYXBwIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoNSksIC5sZWF2ZV9hcHAgLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgXG4gIC5sZWF2ZV9wciAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmxlYXZlX3ByIC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLmxlYXZlX3ByIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5sZWF2ZV9wciAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmxlYXZlX3ByIC50YWJsZV9ib2R5PmRpdiwubGVhdmVfcHIgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNjIwcHgpIC8gNSk7XG4gIH1cbiAgLmxlYXZlX3ByIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoNiksIC5sZWF2ZV9wciAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDYpIHtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICAubGVhdmVfcHIgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg3KSwgLmxlYXZlX3ByIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNykge1xuICAgICAgd2lkdGg6IDcwcHg7XG4gIH1cbiAgLmxlYXZlX3Bye1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgdGV4dGFyZWE6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAubW9kYWwgdGV4dGFyZWF7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZzEvY2FsLnN2Zykgbm8tcmVwZWF0O1xuICAgIC8vICAgd2lkdGg6IDIwcHg7XG4gICAgLy8gICBoZWlnaHQ6IDIwcHg7XG4gICAgLy8gICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgLy8gICBwYWRkaW5nOiAycHggMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJde1xuICAgIGNvbG9yOiAjNzg3QTdEO1xuICB9XG4gIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgIGlucHV0W3R5cGU9XCJkYXRlXCJdOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG4gICAgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXM6YmVmb3JlLFxuICAgIGlucHV0W3R5cGU9XCJkYXRlXCJdOnZhbGlkOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgIH1cbiAgLnJpZ2h0e1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5tb2RhbC1oZWFkZXI6YmVmb3JlLC5tb2RhbC1oZWFkZXI6YWZ0ZXJ7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG4gIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgICBtYXJnaW4tdG9wOiAtMjFweDtcbn1cbi5tb2RhbC1kaWFsb2cge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDoxMCU7XG59XG5cbi5oMTB7XG4gICAgaGVpZ2h0OiA0NXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/payrole/salary-template/salary-template.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/payrole/salary-template/salary-template.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SalaryTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryTemplateComponent", function() { return SalaryTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
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







let SalaryTemplateComponent = /** @class */ (() => {
    let SalaryTemplateComponent = class SalaryTemplateComponent {
        constructor(router, http, auth, msgToast, pdf, excel) {
            this.router = router;
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.pdf = pdf;
            this.excel = excel;
            this.jsonFlag = {
                institute_id: ''
            };
            this.varJson = {
                pageIndex: 1,
                sizeArr: [5, 25, 50, 100, 150, 200, 500],
                total_item: 0,
                pageSize: 10,
                pageOffset: 1,
            };
            this.salrayDataList = [];
            this.tempList = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            // this.template_id = sessionStorage.getItem('id')
        }
        ngOnInit() {
            // this.getAllSalaryData()
            this.fetchTableDataByPage(1);
        }
        fetchNext() {
            this.varJson.pageOffset++;
            this.fetchTableDataByPage(this.varJson.pageOffset);
        }
        fetchPrevious() {
            this.varJson.pageOffset--;
            this.fetchTableDataByPage(this.varJson.pageOffset);
        }
        fetchTableDataByPage(index) {
            this.varJson.pageOffset = index;
            this.getAllSalaryData();
        }
        updateTableBatchSize(num) {
            this.varJson.pageOffset = 1;
            this.varJson.pageSize = parseInt(num);
            this.fetchTableDataByPage(this.varJson.pageOffset);
        }
        addSalaryPage() {
            this.router.navigateByUrl("/view/payrole/add-salary");
        }
        getAllSalaryData() {
            this.auth.showLoader();
            let url = '/api/v1/payroll/template/salary/' + this.jsonFlag.institute_id + '/all' + '?pageOffset=' + this.varJson.pageOffset + '&pageSize=' + this.varJson.pageSize;
            this.http.getData(url).subscribe((res) => {
                this.salrayDataList = res.result.response;
                this.varJson.total_item = res.result.totalElements;
                this.tempList = res.result.response;
                console.log("page", res.result);
                this.auth.hideLoader();
                console.log("salaryyyyyy", this.salrayDataList);
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
        onclickView(id) {
            sessionStorage.setItem('id', JSON.stringify(id));
            this.router.navigateByUrl('/view/payrole/view-salary-template/' + id);
        }
        deletById(obj) {
            this.template_id = obj;
        }
        deletSalary(obj) {
            if (confirm('Are you sure, You want to delete this template?')) {
                this.template_id = obj;
                this.auth.showLoader();
                let url = '/api/v1/payroll/template/salary/delete/' + this.jsonFlag.institute_id + '/' + this.template_id;
                this.http.deleteDataById(url).subscribe(res => {
                    console.log("delet", this.template_id);
                    this.auth.hideLoader();
                    this.getAllSalaryData();
                    this.msgToast.showErrorMessage('success', '', "Salary delete successfully");
                    $('#deleteModal').modal('hide');
                }, err => {
                    this.auth.hideLoader();
                    this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.message);
                });
            }
        }
        onClickEdit(id) {
            //sessionStorage.setItem('id',JSON.stringify(id))
            this.router.navigateByUrl('/view/payrole/edit-salary/' + id);
            console.log("session id", id);
        }
        searchFun() {
            this.salrayDataList = this.tempList;
            if (this.searchInput == undefined || this.searchInput == null) {
                this.searchInput = "";
            }
            else {
                let searchData = this.salrayDataList.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchInput.toLowerCase())));
                this.salrayDataList = searchData;
            }
        }
        downloadPdf() {
            for (let i = 0; i < this.salrayDataList.length; i++) {
                this.salrayDataList[i].template_id = i + 1;
            }
            let temp = [];
            this.salrayDataList.map((e) => {
                let obj = [
                    e.template_id,
                    e.salary_grade,
                    e.basic_salary,
                    e.overtime_rate,
                ];
                temp.push(obj);
            });
            let row = [];
            row = [["#", "Salary Grades", "Basic Salary", "Overtime Rate"]];
            let column = temp;
            this.pdf.exportToPdf(row, column, 'salary_template');
        }
        downloaExcel() {
            for (let i = 0; i < this.salrayDataList.length; i++) {
                this.salrayDataList[i].template_id = i + 1;
            }
            let temp = [];
            temp = this.salrayDataList.map(e => {
                let obj = {
                    "#": e.template_id,
                    "Salary Grades": e.salary_grade,
                    "Basic Salary": e.basic_salary,
                    "Overtime Rate": e.overtime_rate,
                };
                return obj;
            });
            this.excel.exportAsExcelFile(temp, 'Salary_template');
        }
    };
    SalaryTemplateComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] }
    ];
    SalaryTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-template',
            template: __importDefault(__webpack_require__(/*! raw-loader!./salary-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/salary-template/salary-template.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./salary-template.component.scss */ "./src/app/components/payrole/salary-template/salary-template.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ExportToPdfService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])
    ], SalaryTemplateComponent);
    return SalaryTemplateComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/view-manage-template/view-manage-template.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/payrole/view-manage-template/view-manage-template.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box.box-primary {\n  border-top-color: #3c8dbc;\n}\n\n.box .box-body {\n  padding: 15px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-muted {\n  color: #999;\n}\n\n.profile-user-img {\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n  padding: 3px;\n  border: 3px solid #d2d6de;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.nav-tabs-custom > .tab-content {\n  background: #fff;\n  padding: 10px;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.box {\n  position: relative;\n  background: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  width: 100%;\n}\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n\n.body {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f0f3f5;\n  border: 1px solid #E2E7EB;\n  border-radius: 4px;\n}\n\n.box-title {\n  color: #1a2229;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: left;\n  padding-top: 2%;\n  margin-left: 11px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL3ZpZXctbWFuYWdlLXRlbXBsYXRlL3ZpZXctbWFuYWdlLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDQTtFQUNJLHlCQUF5QjtBQWpDN0I7O0FBbUNBO0VBQ0ksYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLDhCQUE4QjtBQWhDbEM7O0FBa0NBO0VBQ0ksa0JBQWtCO0FBL0J0Qjs7QUFpQ0E7RUFDSSxXQUFXO0FBOUJmOztBQWdDQTtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7QUE3QjdCOztBQStCQTtFQUNJLGtCQUFrQjtBQTVCdEI7O0FBOEJBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7QUEzQmpCOztBQTZCQTtFQUNJLGNBQWM7QUExQmxCOztBQTRCQTtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBR25CLGtCQUFrQjtFQUNsQixXQUFXO0FBekJmOztBQTJCQTtFQUNJLFdBQVc7RUFDVixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN2QixnQ0FBZ0M7QUF4QnBDOztBQTBCQTtFQUVRLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBeEIxQjs7QUEyQkE7RUFDQSxjQUFjO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQXhCckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BheXJvbGUvdmlldy1tYW5hZ2UtdGVtcGxhdGUvdmlldy1tYW5hZ2UtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYm94IC5ib3gtaGVhZGVyID4gLmZhLCAuYm94IC5ib3gtaGVhZGVyID4gLmdseXBoaWNvbiwgLmJveCAuYm94LWhlYWRlciA+IC5pb24sIC5ib3ggLmJveC1oZWFkZXIgLmJveC10aXRsZSB7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIHBhZGRpbmc6IDE1cHg7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xuLy8gICAgIGZsb2F0OiBsZWZ0O1xuLy8gICAgIGN1cnNvcjogZGVmYXVsdDtcbi8vICAgICBjb2xvcjogI0ZGRkZGRjtcbi8vICAgICBmb250LWZhbWlseTogXCJPcGVuU2FucyBSZWd1bGFyXCI7XG4vLyB9XG4vLyAucm93IHtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbi8vICAgICBtYXJnaW4tbGVmdDogMHB4O1xuLy8gfVxuLy8gLmluZm8tYm94IHNwYW4ge1xuLy8gICAgIHdpZHRoOiA1MCU7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuLy8gLmJveCB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbi8vICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4gICBcbi8vIH1cbi8vIC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCB7XG4vLyAgICAgYm9yZGVyLWNvbG9yOiAjRTJFN0VCO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuLy8gfVxuLmJveC5ib3gtcHJpbWFyeSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzNjOGRiYztcbn1cbi5ib3ggLmJveC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG59XG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LW11dGVkIHtcbiAgICBjb2xvcjogIzk5OTtcbn1cbi5wcm9maWxlLXVzZXItaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2QyZDZkZTtcbn1cbi5pbWctY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubmF2LXRhYnMtY3VzdG9tID4gLnRhYi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4udGFiLWNvbnRlbnQ+LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtdGFicz5saS5hY3RpdmU+YSwgLm5hdi10YWJzPmxpLmFjdGl2ZT5hOmZvY3VzLCAubmF2LXRhYnM+bGkuYWN0aXZlPmE6aG92ZXIge1xuICAgIGNvbG9yOiAjNTU1O1xuICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJvZHl7XG4gICBcbiAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMTlweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjNmNTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0UyRTdFQjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIFxufVxuLmJveC10aXRsZXtcbmNvbG9yOiAjMWEyMjI5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICAgXG59Il19 */");

/***/ }),

/***/ "./src/app/components/payrole/view-manage-template/view-manage-template.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/payrole/view-manage-template/view-manage-template.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ViewManageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewManageTemplateComponent", function() { return ViewManageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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





let ViewManageTemplateComponent = /** @class */ (() => {
    let ViewManageTemplateComponent = class ViewManageTemplateComponent {
        constructor(http, auth, msgToast, routeParam) {
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.routeParam = routeParam;
            this.jsonFlag = {
                institute_id: ''
            };
            this.ManageSalaryModel = {
                salary_type: 'M',
                salary_grade: '',
                basic_salary: '',
                hourly_grade: '',
                overtime_rate: '',
                allowance: '',
                allowance_amount: '',
                deduction: '',
                deduction_amount: '',
                gross_salary: '',
                total_deduction: '',
                net_salary: '',
                typeA: 'A',
                typeD: 'D',
                template_id: '',
                user_gender: '',
                user_dob: '',
                user_phone: '',
                user_name: '',
                user_role: ''
            };
            this.salrayDataList = [];
            this.addedListAllownc = [];
            this.addedListDeduct = [];
            this.template_allowances_map_dtos = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            //this.selectedTeacherId = sessionStorage.getItem('teacher_id')
            //this.selectedId = sessionStorage.getItem('id')
        }
        ngOnInit() {
            this.routeParam.params.subscribe(params => {
                this.selectedTeacherId = params['teacher_id'];
                this.userId = params['user_id'];
            });
            this.getsalaryViewById();
        }
        getsalaryViewById() {
            this.auth.showLoader();
            let url = '/api/v1/payroll/manage/' + this.jsonFlag.institute_id + '/view/' + this.userId + '/' + this.selectedTeacherId;
            this.http.getData(url).subscribe((res) => {
                this.salrayDataList = res.result.template_dto;
                this.auth.hideLoader();
                this.ManageSalaryModel = res.result.template_dto;
                this.ManageSalaryModel.user_name = res.result.user_name;
                this.ManageSalaryModel.user_gender = res.result.user_gender;
                this.ManageSalaryModel.user_dob = res.result.user_dob,
                    this.ManageSalaryModel.user_phone = res.result.user_phone,
                    this.ManageSalaryModel.user_name = res.result.user_name,
                    this.ManageSalaryModel.user_role = res.result.user_role;
                console.log("view details", this.salrayDataList);
                for (let i = 0; i < this.salrayDataList.template_allowances_map_dtos.length; i++) {
                    if (this.salrayDataList.template_allowances_map_dtos[i].type == 'D') {
                        let obj = {
                            type: this.ManageSalaryModel.typeD,
                            deduction: this.salrayDataList.template_allowances_map_dtos[i].deduction,
                            deduction_amount: this.salrayDataList.template_allowances_map_dtos[i].deduction_amount,
                        };
                        this.addedListDeduct.push(obj);
                    }
                    else {
                        let obj2 = {
                            type: this.ManageSalaryModel.typeA,
                            allowance: this.salrayDataList.template_allowances_map_dtos[i].allowance,
                            allowance_amount: this.salrayDataList.template_allowances_map_dtos[i].allowance_amount,
                        };
                        this.addedListAllownc.push(obj2);
                    }
                    console.log("edit response", this.salrayDataList);
                }
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err.error.message);
            });
        }
    };
    ViewManageTemplateComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ];
    ViewManageTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-manage-template',
            template: __importDefault(__webpack_require__(/*! raw-loader!./view-manage-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/view-manage-template/view-manage-template.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./view-manage-template.component.scss */ "./src/app/components/payrole/view-manage-template/view-manage-template.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ViewManageTemplateComponent);
    return ViewManageTemplateComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/view-salary-payment/view-salary-payment.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/payrole/view-salary-payment/view-salary-payment.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box.box-primary {\n  border-top-color: #3c8dbc;\n}\n\n.box .box-body {\n  padding: 15px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-muted {\n  color: #999;\n}\n\n.profile-user-img {\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n  padding: 3px;\n  border: 3px solid #d2d6de;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.nav-tabs-custom > .tab-content {\n  background: #fff;\n  padding: 10px;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.box {\n  position: relative;\n  background: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  width: 100%;\n}\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL3ZpZXctc2FsYXJ5LXBheW1lbnQvdmlldy1zYWxhcnktcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlCQUF5QjtBQUE3Qjs7QUFFQTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQiw4QkFBOEI7QUFDbEM7O0FBQ0E7RUFDSSxrQkFBa0I7QUFFdEI7O0FBQUE7RUFDSSxXQUFXO0FBR2Y7O0FBREE7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0FBSTdCOztBQUZBO0VBQ0ksa0JBQWtCO0FBS3RCOztBQUhBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7QUFNakI7O0FBSkE7RUFDSSxjQUFjO0FBT2xCOztBQUxBO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFHbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFRZjs7QUFOQTtFQUNJLFdBQVc7RUFDVixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN2QixnQ0FBZ0M7QUFTcEM7O0FBUEE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0FBVWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL3ZpZXctc2FsYXJ5LXBheW1lbnQvdmlldy1zYWxhcnktcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJveC5ib3gtcHJpbWFyeSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzNjOGRiYztcbn1cbi5ib3ggLmJveC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG59XG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LW11dGVkIHtcbiAgICBjb2xvcjogIzk5OTtcbn1cbi5wcm9maWxlLXVzZXItaW1nIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2QyZDZkZTtcbn1cbi5pbWctY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubmF2LXRhYnMtY3VzdG9tID4gLnRhYi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4udGFiLWNvbnRlbnQ+LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtdGFicz5saS5hY3RpdmU+YSwgLm5hdi10YWJzPmxpLmFjdGl2ZT5hOmZvY3VzLCAubmF2LXRhYnM+bGkuYWN0aXZlPmE6aG92ZXIge1xuICAgIGNvbG9yOiAjNTU1O1xuICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/payrole/view-salary-payment/view-salary-payment.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/payrole/view-salary-payment/view-salary-payment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewSalaryPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSalaryPaymentComponent", function() { return ViewSalaryPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
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






let ViewSalaryPaymentComponent = /** @class */ (() => {
    let ViewSalaryPaymentComponent = class ViewSalaryPaymentComponent {
        constructor(http, auth, msgToast, routeParam, location) {
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.routeParam = routeParam;
            this.location = location;
            this.jsonFlag = {
                institute_id: ''
            };
            this.salaryModel = {
                salary_type: 'M',
                salary_grade: '',
                hourly_grade: '',
                basic_salary: '',
                overtime_rate: '',
                allowance: '',
                allowance_amount: '',
                deduction: '',
                deduction_amount: '',
                gross_salary: '',
                total_deduction: '',
                net_salary: '',
                typeA: 'A',
                typeD: 'D',
                template_id: '',
                user_gender: '',
                user_dob: '',
                user_phone: '',
                user_name: '',
                user_role: '',
                hourly_rate: '',
                payment_date: '',
                comment: '',
                payment_method: '',
                month: '',
                payment_amount: ''
            };
            this.salrayDataList = [];
            this.addedListAllownc = [];
            this.addedListDeduct = [];
            this.template_allowances_map_dtos = [];
            this.historyPaymentArr = [] = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            // this.objectArray = sessionStorage.getItem('objectValue')
            this.salaryModel = JSON.parse(sessionStorage.getItem('history_obj'));
            //this.historyPaymentArr = sessionStorage.getItem(("historyPaymentResp"))
            this.historyPaymentArr = JSON.parse(sessionStorage.getItem("historyPaymentResp")); //no brackets
        }
        ngOnInit() {
            this.routeParam.params.subscribe(params => {
                this.selectedTeacherId = params['teacher_id'];
                this.userId = params['user_id'];
            });
            this.getViewResponse();
            console.log("obj valuewwwwwwww", this.historyPaymentArr);
            console.log("comment", this.salaryModel);
        }
        getViewResponse() {
            // this.salaryModel.user_gender=this.salaryModel,
            // this.salaryModel.user_dob=this.salaryModel,
            //   this.salaryModel.user_phone=this.salaryModel,
            this.salaryModel.user_name = this.salaryModel.name,
                this.salaryModel.user_role = this.salaryModel.role,
                console.log(this.salaryModel);
            this.salaryModel.comment = this.salaryModel.comment;
            this.salaryModel.payment_method = this.salaryModel.payment_method;
            this.salaryModel.month = this.salaryModel.month,
                this.salaryModel.payment_amount = this.salaryModel.payment_amount,
                this.salaryModel.salary_type = this.salaryModel.template_dto.salary_type;
            this.salaryModel.hourly_grade = this.salaryModel.template_dto.hourly_grade;
            this.salaryModel.hourly_rate = this.salaryModel.template_dto.hourly_rate;
            this.salaryModel.net_salary = this.salaryModel.template_dto.net_salary,
                this.salaryModel.overtime_rate = this.salaryModel.template_dto.overtime_rate,
                this.salaryModel.salary_grade = this.salaryModel.template_dto.salary_grade,
                this.salaryModel.total_deduction = this.salaryModel.template_dto.total_deduction,
                this.salaryModel.gross_salary = this.salaryModel.template_dto.gross_salary,
                this.salaryModel.basic_salary = this.salaryModel.template_dto.basic_salary;
            this.salaryModel = this.salaryModel;
            for (let i = 0; i < this.salaryModel.template_dto.template_allowances_map_dtos.length; i++) {
                if (this.salaryModel.template_dto.template_allowances_map_dtos[i].type == 'D') {
                    let obj = {
                        type: this.salaryModel.typeD,
                        deduction: this.salaryModel.template_dto.template_allowances_map_dtos[i].deduction,
                        deduction_amount: this.salaryModel.template_dto.template_allowances_map_dtos[i].deduction_amount,
                    };
                    this.addedListDeduct.push(obj);
                }
                else {
                    let obj2 = {
                        type: this.salaryModel.typeA,
                        allowance: this.salaryModel.template_dto.template_allowances_map_dtos[i].allowance,
                        allowance_amount: this.salaryModel.template_dto.template_allowances_map_dtos[i].allowance_amount,
                    };
                    this.addedListAllownc.push(obj2);
                }
            }
        }
        backPage() {
            this.location.back();
        }
    };
    ViewSalaryPaymentComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ];
    ViewSalaryPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-salary-payment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./view-salary-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/view-salary-payment/view-salary-payment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./view-salary-payment.component.scss */ "./src/app/components/payrole/view-salary-payment/view-salary-payment.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ViewSalaryPaymentComponent);
    return ViewSalaryPaymentComponent;
})();



/***/ }),

/***/ "./src/app/components/payrole/view-salary-template/view-salary-template.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/payrole/view-salary-template/view-salary-template.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info-box span {\n  width: 50%;\n  display: inline-block;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n}\n\n.box {\n  position: relative;\n  background: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 3px;\n  width: 100%;\n}\n\n.table-bordered > tbody > tr > td {\n  border-color: #E2E7EB;\n  font-size: 12px;\n  text-align: initial;\n}\n\n.box .box-body {\n  padding: 15px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXlyb2xlL3ZpZXctc2FsYXJ5LXRlbXBsYXRlL3ZpZXctc2FsYXJ5LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUFuQjs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBR25CLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtBQUN2Qjs7QUFDQTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQiw4QkFBOEI7QUFFbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BheXJvbGUvdmlldy1zYWxhcnktdGVtcGxhdGUvdmlldy1zYWxhcnktdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbmZvLWJveCBzcGFuIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICBcbn1cbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjRTJFN0VCO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuLmJveCAuYm94LWJvZHkge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/payrole/view-salary-template/view-salary-template.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/payrole/view-salary-template/view-salary-template.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ViewSalaryTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSalaryTemplateComponent", function() { return ViewSalaryTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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




let ViewSalaryTemplateComponent = /** @class */ (() => {
    let ViewSalaryTemplateComponent = class ViewSalaryTemplateComponent {
        constructor(http, auth, msgToast) {
            this.http = http;
            this.auth = auth;
            this.msgToast = msgToast;
            this.jsonFlag = {
                institute_id: ''
            };
            this.salaryModel = {
                salary_type: 'M',
                salary_grade: '',
                basic_salary: '',
                overtime_rate: '',
                allowance: '',
                allowance_amount: '',
                deduction: '',
                deduction_amount: '',
                gross_salary: '',
                total_deduction: '',
                net_salary: '',
                typeA: 'A',
                typeD: 'D',
                template_id: ''
            };
            this.salrayDataList = [];
            this.addedListAllownc = [];
            this.addedListDeduct = [];
            this.template_allowances_map_dtos = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institute_id');
            this.salaryModel.template_id = sessionStorage.getItem('id');
        }
        ngOnInit() {
            this.getsalaryById();
        }
        getsalaryById() {
            this.auth.showLoader();
            let url = '/api/v1/payroll/template/salary/' + this.jsonFlag.institute_id + '/' + this.salaryModel.template_id;
            this.http.getData(url).subscribe((res) => {
                this.salrayDataList = res.result;
                this.auth.hideLoader();
                this.salaryModel = res.result;
                for (let i = 0; i < this.salrayDataList.template_allowances_map_dtos.length; i++) {
                    if (this.salrayDataList.template_allowances_map_dtos[i].type == 'D') {
                        let obj = {
                            type: this.salaryModel.typeD,
                            deduction: this.salrayDataList.template_allowances_map_dtos[i].deduction,
                            deduction_amount: this.salrayDataList.template_allowances_map_dtos[i].deduction_amount,
                        };
                        this.addedListDeduct.push(obj);
                    }
                    else {
                        let obj2 = {
                            type: this.salaryModel.typeA,
                            allowance: this.salrayDataList.template_allowances_map_dtos[i].allowance,
                            allowance_amount: this.salrayDataList.template_allowances_map_dtos[i].allowance_amount,
                        };
                        this.addedListAllownc.push(obj2);
                        console.log("user id", this.template_id);
                    }
                }
            }, err => {
                this.auth.hideLoader();
                this.msgToast.showErrorMessage(this.msgToast.toastTypes.error, '', err);
            });
        }
    };
    ViewSalaryTemplateComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] }
    ];
    ViewSalaryTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-salary-template',
            template: __importDefault(__webpack_require__(/*! raw-loader!./view-salary-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payrole/view-salary-template/view-salary-template.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./view-salary-template.component.scss */ "./src/app/components/payrole/view-salary-template/view-salary-template.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]])
    ], ViewSalaryTemplateComponent);
    return ViewSalaryTemplateComponent;
})();



/***/ })

}]);
//# sourceMappingURL=components-payrole-payrole-module-es2015.js.map