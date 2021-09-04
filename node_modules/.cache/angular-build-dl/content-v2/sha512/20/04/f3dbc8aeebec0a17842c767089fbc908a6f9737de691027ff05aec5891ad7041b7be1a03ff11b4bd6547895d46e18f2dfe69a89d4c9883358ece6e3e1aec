(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-fee-module-fee-update-fee-update-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/fee-update/update/update.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/fee-update/update/update.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-content\">\n    <div class=\"head_padding\">\n      <div class=\"w98\">\n        <div class=\"page_heading\">\n          <p>Fee Update</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"w98\">\n      <div class=\"pt15\">\n        <select class=\"select mr10 wid160\" *ngIf=\"schoolModel\" (ngModelChange)=\"fetchSectionList($event)\"\n          [(ngModel)]=\"model.standard_id\">\n          <option value=\"-1\">Standard*</option>\n          <option *ngFor=\"let data of standardSectionMap\" [value]=\"data.standard_id\">{{data.standard_name}}</option>\n        </select>\n        <select class=\"select mr10 wid160\" *ngIf=\"schoolModel\" [(ngModel)]=\"model.course_id\">\n          <option value=\"-1\">Section</option>\n          <option *ngFor=\"let data of sectionList\" [value]=\"data.course_id\">{{data.course_name}}</option>\n        </select>\n        <select class=\"select mr10 wid160\" *ngIf=\"!isProfessional && !schoolModel\"\n          (ngModelChange)=\"fetchCoursesList($event)\" [(ngModel)]=\"model.master_course\">\n          <option value=\"\">Master Course*</option>\n          <option *ngFor=\"let data of masterCourseList\" [value]=\"data.master_course\">{{data.master_course}} </option>\n        </select>\n        <select class=\"select mr10 wid160\" *ngIf=\"!isProfessional && !schoolModel\" [(ngModel)]=\"model.course_id\">\n          <option value=\"-1\">Course*</option>\n          <option *ngFor=\"let data of courseList\" [value]=\"data.course_id\">{{data.course_name}}</option>\n        </select>\n        <select class=\"select mr10 wid160\" *ngIf=\"isProfessional\" [(ngModel)]=\"model.standard_id\"\n          (ngModelChange)=\"fetchBatch($event)\">\n          <option value=\"-1\">Master Course*</option>\n          <option *ngFor=\"let data of standardList\" [value]=\"data.standard_id\">{{data.standard_name}}</option>\n        </select>\n        <select class=\"select mr10 wid160\" *ngIf=\"isProfessional\" [(ngModel)]=\"model.batch_id\">\n          <option value=\"-1\">Batch*</option>\n          <option *ngFor=\"let data of batchList\" [value]=\"data.batch_id\">{{data.batch_name}}</option>\n        </select>\n        <select class=\"select mr10 wid160\" *ngIf=\"countryDetails.length>1\" [(ngModel)]=\"model.country_id\"\n          style=\"width: 12%;\">\n          <option value=\"-1\">country</option>\n          <option [value]=\"data.id\" *ngFor='let data of countryDetails'>\n            {{data.country_name}}\n        </select>\n        <select class=\"select mr10 wid160\" [(ngModel)]=\"model.academic_yr_id\" style=\"width: 12%;\">\n          <option value=\"-1\">Academic Year</option>\n          <option *ngFor=\"let data of academicYrList\" [value]=\"data.inst_acad_year_id\">\n            {{data.inst_acad_year}}</option>\n        </select>\n        <select class=\"select mr10 wid160\" [(ngModel)]=\"model.fee_assigned\" style=\"width: 12%;\">\n          <option value=\"-1\">Fee Assigned</option>\n          <option value=\"1\">All</option>\n          <option value=\"2\">Y</option>\n          <option value=\"3\">N</option>\n        </select>\n        <button class=\"blue_button\" (click)=\"fetchStudentList()\">Search</button>\n        <input type=\"text\" name=\"\" placeholder=\"Search\" (keyup)=\"localSearch()\" [(ngModel)]=\"searchElement\" class=\"input wid200 right magnifying-glass\">\n      </div>\n      <div class=\"fee_up1\">\n            <div class=\"table_heading\">\n                <div>Name </div>\n                <div *ngIf=\"schoolModel\">Roll No.</div>\n                <div *ngIf=\"schoolModel\">Section</div>\n                <div>{{schoolModel?'Registration No.':'Student Id' }}</div>\n                <div>Phone No.</div>\n                <div>Total Fee</div>\n                <div>Paid</div>\n                <div>Balance</div>\n                <div>Action</div>\n              </div>\n              <div *ngFor=\"let data of studentList\">\n                <div class=\"table_body\">\n                  <div>{{data.student_name}} </div>\n                  <div *ngIf=\"schoolModel\">{{data.student_roll_no}} </div>\n                  <div *ngIf=\"schoolModel\">{{data.standard_name}}-{{data.course_name}} </div>\n                  <div>{{data.student_reg_no}}</div>\n                  <div>{{data.student_phone}}</div>\n                  <div>{{data.total_fee_amount}}</div>\n                  <div>{{data.total_paid_amount}}</div>\n                  <div>{{data.total_unpaid_amount}}</div>\n                  <div>\n                    <a [routerLink]=\"['/view/fee/update-fee/view-fee/'+data.student_id]\" class=\"mr10\"><img src=\"../../../../../assets/img/view.svg\" title=\"View\" ></a>\n                  </div>\n                </div>\n              </div>\n     </div>\n          <!-- use image only when page is empty,table body class element will not be present -->\n    </div>\n   \n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/fee-update/view/view.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/fee-update/view/view.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-content\">\n    <div class=\"ws20\">\n        <div class=\"outter_flex\">\n            <div class=\" wid50\">\n                <a id=\"payMultiReciept\" class=\"hide\"></a>\n                <span class=\"name1\">Name: </span>\n                <span class=\"value1\">{{stdFeeDataList.student_name}}</span>\n\n            </div>\n            <div class=\" wid50\">\n                <span class=\"name1\">Mobile: </span>\n\n                <span class=\"value1\">{{stdFeeDataList.student_phone}}</span>\n\n            </div>\n            <div class=\" wid50\" *ngIf=\"schoolModel\">\n                <span class=\"name1\">Reg No.: </span>\n\n                <span class=\"value1\">{{stdFeeDataList.student_reg_no}}</span>\n            </div>\n            <div class=\" wid50\" *ngIf=\"!schoolModel\">\n                <span class=\"name1\">Student Id: </span>\n\n                <span class=\"value1\">{{stdFeeDataList.student_reg_no}}</span>\n            </div>\n            <div class=\" wid50\">\n\n                <!--     <span class=\"name1\">Std/Sec:</span>\n\n                <span class=\"value1\">{{stdFeeDataList.student_name}}</span> -->\n            </div>\n            <div class=\" wid50\">\n                <select class=\"select right wid240\" [(ngModel)]=\"academic_yr_id\"\n                    (ngModelChange)=\"fetchStdFeeData($event)\">\n                    <option value=\"-1\">Academic Year</option>\n                    <option *ngFor=\"let data of academicYrList\" [value]=\"data.inst_acad_year_id\">\n                        {{data.inst_acad_year}}</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"flex\">\n\n            <div class=\"tw85 \">\n                <div class=\"page_heading2 \">\n                    <div class=\"w98\">\n                        Installments\n                        <i class=\"fa fa-download\" (click)=\"studentFeeInstallment(-1)\"\n                            style=\"font-size: 25px;color: #0084f6;position: absolute;margin-left: 10px;\"\n                            title=\"Download fee installment\"></i>\n                        <button class=\"right blue_button mart\" data-toggle=\"modal\" (click)=\"openAddInstallmentPopup()\">\n                            Add Installment\n                        </button>\n                    </div>\n                </div>\n                <div class=\"w98\">\n                    <div class=\"fee_up2\">\n                        <div class=\"table_heading\">\n                            <div>\n                                <label class=\"checkbox\">\n                                    <span class=\"checkbox__input\">\n                                        <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"masterSelected\"\n                                            (change)=\"checkUncheckAll()\">\n                                        <span class=\"checkbox__control\">\n                                            <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                                                <path fill='none' stroke='currentColor'\n                                                    d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                                            </svg>\n                                        </span>\n                                    </span>\n                                </label>\n                            </div>\n                            <div>\n                                #\n                            </div>\n                            <div>\n                                Fee Type\n                            </div>\n                            <div *ngIf=\"isTemplateLinkWithCourseAndStandard\">\n                                {{isProfessional?'Course':schoolModel?\"Standard\":'Course'}}\n                            </div>\n                            <div>Fee</div>\n                            <div>\n                                Paid\n                            </div>\n                            <div>\n                                Balance\n                            </div>\n                            <div>\n                                Due Date\n                            </div>\n                            <div>\n                                Status\n                            </div>\n                            <div>Actions</div>\n                        </div>\n                        <div class=\"fee_up2_scrol\">\n                            <div *ngFor=\"let data of stdFeeDataList.a_install_li\">\n                                <div class=\"table_body\">\n                                    <div>\n                                        <label class=\"checkbox\" *ngIf=\"data.p_status!='Y'\">\n                                            <span class=\"checkbox__input\">\n                                                <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"data.isSelected\">\n                                                <span class=\"checkbox__control\">\n                                                    <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                                                        <path fill='none' stroke='currentColor'\n                                                            d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                                                    </svg>\n                                                </span>\n                                            </span>\n                                        </label>\n                                    </div>\n                                    <div>\n                                        {{data.install_no}}\n                                    </div>\n                                    <div>\n                                        {{data.f_type | titlecase}}\n                                    </div>\n                                    <div *ngIf=\"isTemplateLinkWithCourseAndStandard\">\n                                        {{isProfessional?data.sub_n:schoolModel?data.stnd_n:data.c_n}}\n                                    </div>\n                                    <div>\n                                        <div class=\"tooltip1\"> {{currencySymbol}} {{data.t_amount | number}}\n                                            <span *ngIf=\"is_tax_enabled\" class=\"tooltiptext\"><span\n                                                    class=\"blue\">Amount</span>\n                                                {{data.initial_amount | number}} <span class=\"blue\">+Tax\n                                                </span>{{data.tax_amount | number}} <span class=\"blue\">-Discount</span>\n                                                {{data.disc_amount | number}}\n                                            </span>\n                                            <span *ngIf=\"!is_tax_enabled\" class=\"tooltiptext\"><span\n                                                    class=\"blue\">Amount</span>\n                                                {{data.initial_amount | number}} <span class=\"blue\">-Discount</span>\n                                                {{data.disc_amount | number}}\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div>\n                                        {{currencySymbol}} {{data.p_amount | number}}\n                                    </div>\n                                    <div>\n                                        {{currencySymbol}} {{data.d_amount | number}}\n                                    </div>\n                                    <div>\n                                        {{data.d_date}}\n                                    </div>\n                                    <div *ngIf=\"data.p_status=='Y' && (data.initial_amount+data.tax_amount)!=data.disc_amount\">\n                                        <span class=\"paid1\">\n                                            Paid\n                                        </span>\n                                    </div>\n                                    <div *ngIf=\"data.p_status=='Y' && (data.initial_amount+data.tax_amount)==data.disc_amount\">\n                                        <span class=\"disc\">\n                                            100% Discounted\n                                        </span>\n                                    </div>\n                                    <div *ngIf=\"data.p_status=='Y'\">\n\n                                    </div>\n                                    <div *ngIf=\"data.p_status=='N' && !isOverdue(data.d_date) && data.p_amount==0\">\n                                        <span class=\"due1\">\n                                            Due\n                                        </span>\n                                    </div>\n                                    <div *ngIf=\"data.p_status=='N' && !isOverdue(data.d_date) && data.p_amount==0\">\n                                        <a (click)=\"editInstallPopUp(data)\" class=\"mr10\"><img\n                                                src=\"../../../../../assets/images/edit.svg\" title=\"Edit\"></a>\n                                        <a (click)=\"deleteInstall(data)\" class=\"mr10\"><img\n                                                src=\"../../../../../assets/img/delete.svg\" title=\"Delete\"></a>\n                                    </div>\n                                    <div *ngIf=\"data.p_status=='N' && isOverdue(data.d_date) && data.p_amount ==0 \">\n                                        <span class=\"overdue1\">\n                                            Overdue\n                                        </span>\n                                    </div>\n                                    <div *ngIf=\"data.p_status=='N' && isOverdue(data.d_date) && data.p_amount ==0 \">\n                                        <a (click)=\"editInstallPopUp(data)\" class=\"mr10\"><img\n                                                src=\"../../../../../assets/images/edit.svg\" title=\"Edit\"></a>\n                                        <a (click)=\"deleteInstall(data)\" class=\"mr10\"><img\n                                                src=\"../../../../../assets/img/delete.svg\" title=\"Delete\"></a>\n                                    </div>\n                                    <div *ngIf=\"data.p_status=='N' && data.p_amount>0\">\n                                        <span class=\"ppaid1\">\n                                            Partially paid\n                                        </span>\n                                    </div>\n                                    <div *ngIf=\"data.p_status=='N' && data.p_amount>0\">\n                                        <a (click)=\"editInstallPopUp(data)\" class=\"mr10\"><img\n                                                src=\"../../../../../assets/images/Edit.svg\" title=\"Edit\"></a>\n                                        <a (click)=\"deleteInstall(data)\" class=\"mr10\"><img\n                                                src=\"../../../../../assets/img/delete.svg\" title=\"Delete\"></a>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"space7\">\n                        <button class=\"white_button\" data-toggle=\"modal\" data-target=\"#largeModal\"\n                            (click)=\"openDiscountPopup()\">\n                            Apply Discount\n                        </button>\n                        <button class=\"white_button right\" data-toggle=\"modal\" (click)=\"openPaymentPopup()\">\n                            Update Payment\n                        </button>\n                    </div>\n                </div>\n                <div class=\"div8\">\n                </div>\n                <div class=\"w98\">\n                    <div class=\"section2\">\n                        <div class=\"\">\n                            <div class=\"space8\">\n                                <!-- Nav tabs -->\n                                <div class=\"main-shadow\">\n                                    <button *ngIf=\"activeSession == 'History'\" class=\"right blue_button\"\n                                        (click)=\"checkSelectedInstallments()\">Share</button>\n                                    <button *ngIf=\"activeSession == 'Cheques'\" class=\"right blue_button\"\n                                        data-toggle=\"modal\" (click)=\"addPDCPopUp()\">Add\n                                        Cheques</button>\n                                    <ul class=\"nav \">\n                                        <li class=\"nav-item\">\n                                            <a class=\"nav-link\" (click)=\"activeSession = 'History'\"\n                                                [ngClass]=\"(activeSession == 'History') ? 'active' : ''\"\n                                                data-toggle=\"tab\" href=\"#one\">History</a>\n                                        </li>\n                                        <li class=\"nav-item\">\n                                            <a class=\"nav-link\" [ngClass]=\"(activeSession == 'Cheques') ? 'active' : ''\"\n                                                data-toggle=\"tab\"\n                                                (click)=\"activeSession = 'Cheques';getPdcChequeList('Cheque/PDC/DD No.')\"\n                                                href=\"#two\">Cheques</a>\n                                        </li>\n                                        <li class=\"nav-item\">\n                                            <a class=\"nav-link\"\n                                                [ngClass]=\"(activeSession == 'Discounts') ? 'active' : ''\"\n                                                data-toggle=\"tab\"\n                                                (click)=\"activeSession = 'Discounts';getDiscountHistoryDetails()\"\n                                                href=\"#discHistory\">Discounts</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <div id=\"one\" class=\"tab-pane active\">\n                                    <!-- one -->\n                                    <div class=\"fee_up3\">\n                                        <div class=\"table_heading\">\n                                            <div>\n                                                <label class=\"checkbox\">\n                                                    <span class=\"checkbox__input\">\n                                                        <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"isSelectedAllPaidInstall\" (change)=\"selectAllPaidInstall()\">\n                                                        <span class=\"checkbox__control\">\n                                                            <svg viewBox='0 0 24 24' aria-hidden=\"true\"\n                                                                focusable=\"false\">\n                                                                <path fill='none' stroke='currentColor'\n                                                                    d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                                                            </svg>\n                                                        </span>\n                                                    </span>\n                                                </label>\n                                            </div>\n                                            <div>\n                                                #\n                                            </div>\n                                            <div>\n                                                Fee Type\n                                            </div>\n                                            <div *ngIf=\"isTemplateLinkWithCourseAndStandard\">\n                                                {{isProfessional?'Course':schoolModel?\"Standard\":'Course'}}\n                                            </div>\n                                            <div>\n                                                Paid Date\n                                            </div>\n                                            <div>\n                                                Amount Paid\n                                            </div>\n                                            <div>\n                                                Payment Mode\n                                            </div>\n                                            <!-- <div>\n                                                Counsellor\n                                            </div> -->\n                                            <div>\n                                                Remarks\n                                            </div>\n                                            <div>Receipt</div>\n                                        </div>\n                                        <div class=\"fee_up3_scrol\">\n                                            <div *ngFor=\"let data of stdFeeDataList.p_install_li\">\n                                                <div class=\"table_body\">\n                                                    <div>\n                                                        <label class=\"checkbox\">\n                                                            <span class=\"checkbox__input\">\n                                                                <input type=\"checkbox\" [(ngModel)]=\"data.isSelected\"\n                                                                    name=\"checked\">\n                                                                <span class=\"checkbox__control\">\n                                                                    <svg viewBox='0 0 24 24' aria-hidden=\"true\"\n                                                                        focusable=\"false\">\n                                                                        <path fill='none' stroke='currentColor'\n                                                                            d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                                                                    </svg>\n                                                                </span>\n                                                            </span>\n                                                        </label>\n                                                    </div>\n                                                    <div>\n                                                        {{data.install_nos}}\n                                                    </div>\n\n                                                    <div>\n                                                        {{data.f_type | titlecase}}\n                                                    </div>\n                                                    <div *ngIf=\"isTemplateLinkWithCourseAndStandard\">\n                                                        {{isProfessional?data.sub_n:schoolModel?data.stnd_n:data.c_n}}\n                                                    </div>\n                                                    <div>\n                                                        {{data.p_date}}\n                                                    </div>\n                                                    <div>\n                                                        {{currencySymbol}} {{data.p_amount | number\n                                                        }}\n                                                    </div>\n                                                    <div>\n                                                        {{data.p_method}}\n                                                    </div>\n                                                    <!-- <div> {{data.p_method}}\n                                                    </div> -->\n                                                    <div>\n                                                        {{data.p_remarks}}\n                                                    </div>\n                                                    <div>\n                                                        <a (click)=\"downloadFeeReceipt(data.f_rec_no)\" class=\"mr10\"><img\n                                                                src=\"../../../../../assets/img/purple_download.svg\"\n                                                                title=\"Download Receipt No. {{data.f_rec_no}}\"></a>\n                                                        <!-- <a (click)=\"editPaidInstall(data)\" class=\"mr10\"><img\n                                                                src=\"../../../../../assets/images/Edit.svg\"\n                                                                title=\"Edit\"></a> -->\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div id=\"two\" class=\"tab-pane fade\" aria-hidden=\"true\">\n                                    <!-- two -->\n                                    <div class=\"fee_up4\">\n                                        <div class=\"table_heading\">\n                                            <div>\n                                                <label class=\"checkbox\">\n                                                    <span class=\"checkbox__input\">\n                                                        <input type=\"checkbox\" name=\"checked\"\n                                                            [(ngModel)]=\"isAllChequeSelected\"\n                                                            (change)=\"selectAllChequeList()\">\n                                                        <span class=\"checkbox__control\">\n                                                            <svg viewBox='0 0 24 24' aria-hidden=\"true\"\n                                                                focusable=\"false\">\n                                                                <path fill='none' stroke='currentColor'\n                                                                    d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                                                            </svg>\n                                                        </span>\n                                                    </span>\n                                                </label>\n                                            </div>\n                                            <div>\n                                                Bank\n                                            </div>\n                                            <div>\n                                                Cheque No.\n                                            </div>\n                                            <div>Cheque Date</div>\n                                            <div>\n                                                Clearing Date\n                                            </div>\n                                            <div>Cheque Amount</div>\n                                            <div>\n                                                Status\n                                            </div>\n\n                                            <div>Actions</div>\n                                        </div>\n                                        <div *ngFor=\"let data of chequePdcList\">\n                                            <div class=\"table_body\">\n                                                <div>\n                                                    <label class=\"checkbox\">\n                                                        <span class=\"checkbox__input\">\n                                                            <input type=\"checkbox\" name=\"checked\"\n                                                                [(ngModel)]=\"data.isSelected\"\n                                                                [(ngModel)]=\"data.isSelected\">\n                                                            <span class=\"checkbox__control\">\n                                                                <svg viewBox='0 0 24 24' aria-hidden=\"true\"\n                                                                    focusable=\"false\">\n                                                                    <path fill='none' stroke='currentColor'\n                                                                        d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                                                                </svg>\n                                                            </span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                                <div>\n                                                    {{data.bank_name}}\n                                                </div>\n                                                <div>\n                                                    {{data.cheque_no}}\n                                                </div>\n                                                <div>\n                                                    {{data.cheque_date}}\n                                                </div>\n\n                                                <div>\n                                                    {{data.clearing_date}}\n                                                </div>\n\n                                                <div>\n                                                    {{currencySymbol}} {{data.cheque_amount | number}}\n                                                </div>\n                                                <div>\n                                                    <span [ngClass]=\"{'cleared': data.cheque_status == 'Cleared',\n                                                    'overdue1': data.cheque_status == 'Pending',\n                                                    'due1': data.cheque_status == 'dishonoured'}\" class=\"cleared\">{{data.cheque_status}}</span>\n                                                </div>\n                                                <div *ngIf=\"data.cheque_status_key==1\">\n                                                    <a (click)=\"editPDC(data)\" class=\"mr10\"><img\n                                                            src=\"../../../../../assets/images/edit.svg\"\n                                                            title=\"Edit\"></a>\n                                                    <a (click)=\"deletePDC(data)\" class=\"mr10\"><img\n                                                            src=\"../../../../../assets/img/delete.svg\"\n                                                            title=\"Delete\"></a>\n                                                </div>\n                                                <div *ngIf=\"data.cheque_status_key!=1\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"chequePdcList.length>0\">\n                                        <span class=\"right space9\">\n                                            <button class=\"blue_button mr10\" (click)=\"sendPDCAckOverEmail()\">\n                                                Email Ack\n                                            </button>\n                                            <button class=\"blue_button\" (click)=\"generatePDCAck()\">\n                                                Generate Ack\n                                            </button>\n                                        </span>\n\n                                    </div>\n                                </div>\n                                <div id=\"discHistory\" class=\"tab-pane fade\">\n                                    <!-- three -->\n                                    <div class=\"fee_up5\">\n                                        <div class=\"table_heading\">\n\n                                            <div>Install No.</div>\n\n                                            <div>\n                                                Disc.&nbsp;Amount\n                                            </div>\n                                            <div>\n                                                Reason\n                                            </div>\n                                            <div>\n                                                Disc.&nbsp;Type\n                                            </div>\n                                            <div>Actions</div>\n                                        </div>\n                                        <div class=\"fee_up5_scrol\">\n                                            <div *ngFor=\"let data of discHistoryList\">\n                                                <div class=\"table_body\">\n                                                    <div>{{data.installment_no}}</div>\n\n                                                    <div>\n                                                        <span class=\"dis_app\"> {{currencySymbol}} {{data.discount_amount\n                                                            | number}}</span>\n                                                    </div>\n                                                    <div>\n                                                        <span class=\"d_reason\">{{data.disount_reason}}</span>\n                                                    </div>\n                                                    <div>\n                                                        {{data.discount_status==1?'Discount Added':'Discount Removed'}}\n                                                    </div>\n                                                    <div *ngIf=\"!data.is_paid\">\n                                                        <a (click)=\"removeDiscountPopup(data)\" class=\"mr10\"><img\n                                                                src=\"../../../../../assets/img/remove_dis.svg\"\n                                                                title=\"Remove Discount\"></a>\n                                                    </div>\n                                                    <div *ngIf=\"data.is_paid\">\n\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n            <div class=\"tw15\">\n                <div class=\"page_heading2\">\n                    <div class=\"space5\">\n                        Summary\n                    </div>\n                </div>\n\n                <div class=\"box box1\">\n                    <div>\n                        <p class=\"name\">Fees:</p>\n                        <p class=\"value\">{{currencySymbol}} {{stdFeeDataList.initial_amount | number}}</p>\n                    </div>\n                </div>\n                <div class=\"box box1\" *ngIf=\"is_tax_enabled\">\n                    <div>\n                        <p class=\"name\">Tax:</p>\n                        <p class=\"value\">{{currencySymbol}} {{stdFeeDataList.t_tx_amount |number}}</p>\n                    </div>\n                </div>\n                <div class=\"box box1\">\n                    <div>\n                        <p class=\"name\">Discount:</p>\n                        <p class=\"value\">{{currencySymbol}} {{stdFeeDataList.t_disc_amount |number}}</p>\n                    </div>\n                </div>\n                <div class=\"box box2\">\n                    <div>\n                        <p class=\"name\">Total Fees:</p>\n                        <p class=\"value\">{{currencySymbol}} {{stdFeeDataList.total_fee_amount|number}}</p>\n                    </div>\n                </div>\n                <div class=\"box box1\">\n                    <div>\n                        <p class=\"name\">Amount Paid:</p>\n                        <p class=\"value\">{{currencySymbol}} {{stdFeeDataList.total_paid_amount|number}}</p>\n                    </div>\n                </div>\n                <div class=\"box box3\">\n                    <div>\n                        <p class=\"name\">Due Fees:</p>\n                        <p class=\"value\">{{currencySymbol}} {{stdFeeDataList.total_unpaid_amount|number}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal\" id=\"installmentModal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">{{isUpdateInstall?\"Update Installment\":\"Add Installment\"}}</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"pt10\">\n                        <select class=\"select  wid100\" [(ngModel)]=\"addInstall.acad_yr_id\">\n                            <option value=\"-1\">Academic Year*</option>\n                            <option *ngFor=\"let data of academicYrList\" [value]=\"data.inst_acad_year_id\">\n                                {{data.inst_acad_year}}</option>\n                        </select>\n                    </div>\n                    <div class=\"pt10\">\n                        <select class=\"select  wid100\" [(ngModel)]=\"addInstall.f_type_id\">\n                            <option value=\"-1\">Fee Type*</option>\n                            <option *ngFor=\"let data of feeTypeList\" [value]=\"data.fee_type_id\">\n                                {{data.fee_type | titlecase}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"pt10\">\n                        <input type=\"text\" class=\"wid100 input\"\n                            onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                            [(ngModel)]=\"addInstall.f_amount\" placeholder=\"Amount*\">\n                    </div>\n                    <div class=\"pt10 field-wrapper datePickerBox\">\n                        <input type=\"text\" name=\"\" class=\"wid100 input bsDatepicker\" [(ngModel)]=\"addInstall.d_date\"\n                            bsDatepicker placeholder=\"Due Date*\">\n                    </div>\n                    <!-- <div class=\"pt10\" *ngIf=\"schoolModel && isTemplateLinkWithCourseAndStandard\">\n                        <select class=\"select wid100\"\n                            [(ngModel)]=\"addInstall.standard_id\">\n                            <option *ngFor=\"let data of standardSectionMap\" [value]=\"data.standard_id\">\n                                {{data.standard_name}}</option>\n                        </select>\n                    </div> -->\n                    <div class=\"pt10\" *ngIf=\"!schoolModel && isTemplateLinkWithCourseAndStandard\">\n                        <select class=\"select wid100\" [(ngModel)]=\"addInstall.course_id\">\n                            <option value=\"-1\">Course*</option>\n                            <option *ngFor=\"let data of stdFeeDataList.c_b_map | keyvalue\" [value]=\"data.key\">\n                                {{data.value}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"pt10 display\">\n                        <div></div>\n                        <div>\n                            <button class=\"white_button mr10\" (click)=\"closeAddInstallPopup()\">Cancel</button>\n                            <button class=\"blue_button \" [disabled]=\"isAddInstallClicked\" *ngIf=\"!isUpdateInstall\" (click)=\"addNewInstall()\">Add\n                                Installment</button>\n                            <button class=\"blue_button \" [disabled]=\"isUpdateInstallClicked\"  *ngIf=\"isUpdateInstall\" (click)=\"updateInstall()\">Update\n                                Installment</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal\" id=\"discountInstallModel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">{{isDiscountRemove? 'Remove Discount':'Add Discount'}}</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <!-- Tab panes -->\n\n                    <!-- one -->\n                    <div class=\"flex\">\n                        <div class=\"sec30\">\n                            <div class=\"w90\">\n                                <p class=\"head_p1\"></p>\n                                <div class=\"pt10\">\n                                    <select class=\"select wid100\" [(ngModel)]=\"discountPopUpForm.type\"\n                                        (ngModelChange)=\"onDiscountTypeChange(event)\">\n                                        <option value=\"-1\">Discount Type*</option>\n                                        <option value=\"1\">Amount</option>\n                                        <option value=\"2\">Percentage</option>\n                                        <option value=\"3\">Full Discount(100%)</option>\n                                    </select>\n                                </div>\n                                <div class=\"pt10\">\n                                    <input type=\"text\" name=\"\" class=\"wid100 input\" [disabled]=\"discountPopUpForm.type==3\"\n                                        onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                        [(ngModel)]=\"discountPopUpForm.value\"\n                                        (ngModelChange)=\"onDiscountAmountChange($event)\" placeholder=\"Discount Value*\">\n                                </div>\n                                <div class=\"pt10\">\n                                    <select class=\"select wid100\" [(ngModel)]=\"discountPopUpForm.reason\">\n                                        <option value=\"-1\">Discount Reason*</option>\n                                        <option *ngFor=\"let data of discountReasonList\"\n                                            [value]=\"data.discount_reason_id\">{{ (data.reason.length > 30) ?\n                                            (data.reason | slice:0:30) + '...' : data.reason }}</option>\n                                    </select>\n                                </div>\n                                <div class=\"pt10\">\n                                    <p class=\"p_note\" *ngIf=\"discountPopUpForm.type == '2'\">\n                                        <span>Note :</span> (Discount Type* <b class=\"bold\">Percentage</b> )Discount\n                                        amount is calculated based on the\n                                        percentage of actual initial fee amount i.e {{currencySymbol}}\n                                        {{stdFeeDataList.initial_amount |\n                                        number}}\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"fee_up7 sec70\">\n                            <p class=\"head_p\">Select Installment(s) to apply discount\n                                of<b> {{currencySymbol}} {{discountPopUpForm.discountAmount | number}}</b></p>\n                            <div class=\"table_heading\">\n                                <!-- <div>\n                                    <label class=\"checkbox\">\n                                        <span class=\"checkbox__input\">\n                                            <input type=\"checkbox\" name=\"checked\">\n                                            <span class=\"checkbox__control\">\n                                                <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                                                    <path fill='none' stroke='currentColor'\n                                                        d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                                                </svg>\n                                            </span>\n                                        </span>\n                                    </label>\n                                </div> -->\n                                <div></div>\n                                <div>\n                                    Insta&nbsp;No.\n                                </div>\n\n                                <div>\n                                    Prev Discount\n                                </div>\n                                <div>\n                                    Balance Amount\n                                </div>\n                                <div>\n                                    Status\n                                </div>\n                            </div>\n                            <div *ngFor=\"let data of discountInstallList\">\n                                <div class=\"table_body\">\n                                    <div></div>\n                                    <!-- <div>\n                                    <label class=\"checkbox\">\n                                        <span class=\"checkbox__input\">\n                                            <input type=\"checkbox\" name=\"checked\">\n                                            <span class=\"checkbox__control\">\n                                                <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                                                    <path fill='none' stroke='currentColor'\n                                                        d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                                                </svg>\n                                            </span>\n                                        </span>\n                                    </label>\n                                </div> -->\n                                    <div>\n                                        {{data.install_no}}\n                                    </div>\n\n                                    <div>\n                                        {{currencySymbol}} {{data.disc_amount | number}}\n                                    </div>\n                                    <div>\n                                        {{currencySymbol}} {{data.d_amount | number}}\n                                    </div>\n                                    <div>\n                                        <span *ngIf=\"data.p_status=='N' && !isOverdue(data.d_date) && data.p_amount==0\"\n                                            class=\"due1\">Due</span>\n                                        <span *ngIf=\"data.p_status=='N' && isOverdue(data.d_date) && data.p_amount==0\"\n                                            class=\"overdue1\">Overdue</span>\n                                        <span *ngIf=\"data.p_status=='N' &&  data.p_amount >0\" class=\"ppaid1\">Partially\n                                            Paid</span>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"display w98\">\n                        <div class=\"sec60\">\n\n                        </div>\n                        <div class=\"se15\">\n\n                        </div>\n                        <div class=\"sec25 display pt101\">\n                            <div></div>\n                            <div>\n                                <button class=\"white_button mr10\" (click)=\"clearDiscPopUpData()\">\n                                    Cancel\n                                </button>\n                                <button class=\"blue_button\" *ngIf=\"!isDiscountRemove\" [disabled]=\"isApplyDiscClicked\" (click)=\"applyDiscount()\">\n                                    Apply Discount\n                                </button>\n                                <button class=\"blue_button\" *ngIf=\"isDiscountRemove\" [disabled]=\"isRemoveDiscClicked\" (click)=\"removeDiscountAction()\">\n                                    Remove Discount\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                    <br>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal\" id=\"chequeModal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">{{isAddPDC?'Add Cheque':'Update Cheque'}}</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"pt10 field-wrapper datePickerBox\">\n                        <input type=\"text\" name=\"\" class=\"wid100 input bsDatepicker\" bsDatepicker\n                            [(ngModel)]=\"pdcAddForm.cheque_date\" placeholder=\"Cheque Date*\">\n                    </div>\n                    <div class=\"pt10\">\n                        <input type=\"text\" class=\"wid100 input\"\n                            onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                            [(ngModel)]=\"pdcAddForm.cheque_amount\" placeholder=\"Amount*\">\n                    </div>\n                    <div class=\"pt10\">\n                        <input type=\"text\" class=\"wid100 input\"\n                            onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" minlength=\"6\"\n                            maxlength=\"6\" [(ngModel)]=\"pdcAddForm.cheque_no\" placeholder=\"Cheque No.*\">\n                    </div>\n                    <div class=\"pt10\">\n                        <!-- dropdown with search -->\n                        <input type=\"text\" class=\"wid100 input\" [(ngModel)]=\"pdcAddForm.bank_name\" name=\"bankName\"\n                            maxlength=\"50\" required placeholder=\"Bank*\">\n                    </div>\n                    <div class=\"pt10\" *ngIf=\"countryDetails.length>0\">\n                        <select disabled=\"true\" class=\"select wid100\" [(ngModel)]=\"pdcAddForm.country_id\">\n                            <option value=\"\"></option>\n                            <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                                {{data.country_name}}</option>\n                        </select>\n                    </div>\n                    <div class=\"pt10\" *ngIf=\"!isAddPDC\">\n                        <select class=\"select wid100\" [(ngModel)]=\"pdcAddForm.cheque_status_key\">\n                            <option value=\"\"></option>\n                            <option *ngFor=\"let opt of pdcStatus\" [value]=\"opt.data_key\">\n                                {{opt.data_value}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"pt10 display\">\n                        <div></div>\n                        <div>\n                            <button class=\"white_button mr10\" (click)=\"closePDCPopUp()\">Cancel</button>\n                            <button class=\"blue_button \" *ngIf=\"isAddPDC\" (click)=\"addCheque()\">Add cheque</button>\n                            <button class=\"blue_button \" *ngIf=\"!isAddPDC\" (click)=\"updateCheque()\">Update\n                                cheque</button>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal\" id=\"updateinstModal\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">{{isUpdatePaidInstall?'Update Fee Receipt':'Update Fee'}}</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"pt10 pt101 grey\">\n                        (Payment Details For {{currencySymbol}} {{t_p_amount | number}})\n                    </div>\n                    <div class=\"pt10 pt101\" *ngIf=\"!isUpdatePaidInstall\">\n                        <b>Selected Intallments:<span>{{t_selected_install}}</span></b>\n                    </div>\n                    <div class=\"pt10\">\n                        <input type=\"text\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                            (keyup)=\"calFinalDueAmount(paymentPopUpJson.paying_amount)\" class=\"wid100 input\"\n                            [(ngModel)]=\"paymentPopUpJson.paying_amount\" placeholder=\"Amount*\">\n                    </div>\n                    <div class=\"pt10\" *ngIf=\"isUpdatePaidInstall\">\n                        <input type=\"text\" disabled=\"true\"\n                            onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" class=\"wid100 input\"\n                            [(ngModel)]=\"paymentPopUpJson.due_amount\" placeholder=\"Balance Amount*\">\n                    </div>\n                    <div class=\"pt10 field-wrapper datePickerBox\">\n                        <input type=\"text\" name=\"\" class=\"wid100 input bsDatepicker\" bsDatepicker\n                            [(ngModel)]=\"paymentPopUpJson.paid_date\" placeholder=\"Payment Date*\">\n                    </div>\n                    <div class=\"pt10\">\n                        <select class=\"select wid100\" *ngIf=\"isUpdatePaidInstall?'disabled=true': true\"\n                            [(ngModel)]=\"paymentPopUpJson.payment_mode\" (ngModelChange)=\"getPdcChequeList($event)\">\n                            <option value=\"\">Payment Mode*</option>\n                            <option *ngFor=\"let data of paymentModes\" [value]=\"data.data_key\">{{data.data_value}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"pt10\">\n                        <input type=\"text\" name=\"\" class=\"wid100 input\" [(ngModel)]=\"paymentPopUpJson.reference_no\"\n                            placeholder=\"Reference No\">\n                    </div>\n                    <div class=\"pt10\">\n                        <input type=\"text\" name=\"\" class=\"wid100 input\" [(ngModel)]=\"paymentPopUpJson.remarks\"\n                            placeholder=\"Remarks\">\n                    </div>\n                    <div *ngIf=\"paymentPopUpJson.payment_mode=='Cheque/PDC/DD No.' && chequePdcList.length>0 \">\n                        <div class=\"pt10\">\n                            <select id=\"pMode\" class=\"select wid100\" name=\"pMode\"\n                                [(ngModel)]=\"paymentPopUpJson.selectedPdcId\" (ngModelChange)=\"feePdcSelected($event)\">\n                                <option value=\"\"></option>\n                                <option [value]=\"opt.cheque_id\" *ngFor=\"let opt of chequePdcList\"\n                                    [hidden]=\"opt.cheque_status_key != 1\">\n                                    {{opt.cheque_date}} ({{currencySymbol}} {{opt.cheque_amount | number}} )\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"pt10 \">\n                            <input type=\"text\" disabled=\"true\" class=\"wid100 input \"\n                                [(ngModel)]=\"paymentPopUpJson.pdcSelectedForm.bank_name\" placeholder=\"Bank Name*\">\n                        </div>\n                        <div class=\"pt10 field-wrapper datePickerBox\">\n                            <input type=\"text\" readonly=\"true\" class=\"wid100 input bsDatepicker\" bsDatepicker\n                                [(ngModel)]=\"paymentPopUpJson.pdcSelectedForm.cheque_date\" placeholder=\"Cheque Date*\">\n                        </div>\n                        <div class=\"pt10\">\n                            <input type=\"text\" disabled=\"true\" class=\"wid100 input\"\n                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                [(ngModel)]=\"paymentPopUpJson.pdcSelectedForm.cheque_no\" placeholder=\"Cheque No.*\">\n                        </div>\n                        <div class=\"pt10\">\n                            <input type=\"text\" class=\"wid100 input\"\n                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                [(ngModel)]=\"paymentPopUpJson.pdcSelectedForm.cheque_amount\"\n                                placeholder=\"Cheque Amount*\">\n                        </div>\n                    </div>\n                    <div class=\"pt10\" *ngIf=\"isUpdatePaidInstall\">\n                        <input type=\"text\" name=\"\" disabled=\"true\" class=\"wid100 input\"\n                            [(ngModel)]=\"paymentPopUpJson.receipt_no\" placeholder=\"Receipt No*\">\n                    </div>\n                    <div class=\"pt10\" *ngIf=\"isUpdatePaidInstall\">\n                        <input type=\"text\" name=\"\" class=\"wid100 input\" [(ngModel)]=\"paymentPopUpJson.update_reason\"\n                            placeholder=\"Reason for Update*\">\n                    </div>\n                    <div class=\"pt10 \">\n                        <div>\n                            <div class=\"flex\">\n                                <div>\n                                    <label class=\"checkbox\">\n                                        <span class=\"checkbox__input\">\n                                            <input type=\"checkbox\" name=\"checked\"\n                                                [(ngModel)]=\"paymentPopUpJson.genFeeRecipt\">\n                                            <span class=\"checkbox__control\">\n                                                <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                                                    <path fill='none' stroke='currentColor'\n                                                        d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                                                </svg>\n                                            </span>\n                                        </span>\n                                    </label>\n                                </div>\n                                <div class=\"check_text\">Download Fee Receipt</div>\n                            </div>\n                        </div>\n                        <div class=\"flex\">\n                            <div>\n                                <label class=\"checkbox\">\n                                    <span class=\"checkbox__input\">\n                                        <input type=\"checkbox\" name=\"checked\"\n                                            [(ngModel)]=\"paymentPopUpJson.emailFeeRecipt\">\n                                        <span class=\"checkbox__control\">\n                                            <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                                                <path fill='none' stroke='currentColor'\n                                                    d='M1.3 12.91l6.37 6.37L22.79 4.59' />\n                                            </svg>\n                                        </span>\n                                    </span>\n                                </label>\n                            </div>\n                            <div class=\"check_text\">Email to Students And Parents</div>\n\n                        </div>\n\n                    </div>\n                    <div class=\"pt101 display\">\n                        <div></div>\n                        <div>\n                            <button class=\"white_button mr10\" (click)=\"flushPaymentPopUpData()\">Cancel</button>\n                            <button class=\"blue_button \" [disabled]=\"isUpdatePaymentClicked\" *ngIf=\"!isUpdatePaidInstall\"\n                                (click)=\"doPayment()\">Update</button>\n                            <button class=\"blue_button \" *ngIf=\"isUpdatePaidInstall\"\n                                (click)=\"updatePaidInstall()\">Update</button>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal\" id=\"sendModal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Send Fee Report To Email</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"pt10\">\n                        <div class=\"field-radio-wrapper wid100px\">\n                            <input type=\"radio\" name=\"bothRadio\" class=\"form-radio\" [(ngModel)]=\"paymentMode\"\n                                [value]=\"0\">\n                            <label>Student</label>\n                        </div>\n                    </div>\n                    <div class=\"pt10\">\n                        <div class=\"field-radio-wrapper wid100px\">\n                            <input type=\"radio\" name=\"bothRadio\" class=\"form-radio\" [(ngModel)]=\"paymentMode\"\n                                [value]=\"1\">\n                            <label>Parent</label>\n                        </div>\n                    </div>\n                    <div class=\"pt10\">\n                        <div class=\"field-radio-wrapper wid100px\">\n                            <input type=\"radio\" name=\"bothRadio\" class=\"form-radio\" [(ngModel)]=\"paymentMode\"\n                                [value]=\"2\">\n                            <label>Both</label>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"pt101 display\">\n                        <div></div>\n                        <div>\n                            <button class=\"white_button mr10\" (click)=\"closeShareFeeReceiptPopUp()\">Cancel</button>\n                            <button class=\"blue_button \" (click)=\"studentFeeInstallment(1)\">Send</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./src/app/components/fee-module/fee-update/fee-update-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/fee-module/fee-update/fee-update-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FeeUpdateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeUpdateRoutingModule", function() { return FeeUpdateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fee_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fee-update.component */ "./src/app/components/fee-module/fee-update/fee-update.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ "./src/app/components/fee-module/fee-update/update/update.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ "./src/app/components/fee-module/fee-update/view/view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    {
        path: '',
        component: _fee_update_component__WEBPACK_IMPORTED_MODULE_2__["FeeUpdateComponent"],
        children: [
            {
                path: '',
                component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"]
            },
            {
                path: 'view-fee/:std_id',
                component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"]
            }
        ]
    }
];
let FeeUpdateRoutingModule = /** @class */ (() => {
    let FeeUpdateRoutingModule = class FeeUpdateRoutingModule {
    };
    FeeUpdateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FeeUpdateRoutingModule);
    return FeeUpdateRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/fee-module/fee-update/fee-update.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/fee-module/fee-update/fee-update.module.ts ***!
  \***********************************************************************/
/*! exports provided: FeeUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeUpdateModule", function() { return FeeUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fee_update_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fee-update-routing.module */ "./src/app/components/fee-module/fee-update/fee-update-routing.module.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ "./src/app/components/fee-module/fee-update/update/update.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ "./src/app/components/fee-module/fee-update/view/view.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_student_services_fetch_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/student-services/fetch-student.service */ "./src/app/services/student-services/fetch-student.service.ts");
/* harmony import */ var _services_student_services_post_student_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/student-services/post-student-data.service */ "./src/app/services/student-services/post-student-data.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let FeeUpdateModule = /** @class */ (() => {
    let FeeUpdateModule = class FeeUpdateModule {
    };
    FeeUpdateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fee_update_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeeUpdateRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            providers: [
                _services_student_services_fetch_student_service__WEBPACK_IMPORTED_MODULE_6__["FetchStudentService"],
                _services_student_services_post_student_data_service__WEBPACK_IMPORTED_MODULE_7__["PostStudentDataService"]
            ]
        })
    ], FeeUpdateModule);
    return FeeUpdateModule;
})();



/***/ }),

/***/ "./src/app/components/fee-module/fee-update/update/update.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/fee-module/fee-update/update/update.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 17px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 35px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n/*.leave_cat .table_heading>div:first-child,.leave_cat .table_body>div:first-child{\n    width: 50px;\n  }*/\n\n.fee_up1 .table_body > div, .fee_up1 .table_heading > div {\n  width: calc((100% - 200px) / 6);\n}\n\n.fee_up1 .table_heading > div:last-child, .fee_up1 .table_body > div:last-child {\n  width: 200px;\n}\n\n.fee_up1 .table_heading > div:first-child, .fee_up1 .table_body > div:first-child {\n  text-align: left;\n  padding-left: 20px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.wid160 {\n  width: 175px;\n}\n\n.wid200 {\n  width: 200px;\n}\n\n.empty_img {\n  text-align: center;\n}\n\n/*empty page ends*/\n\n.fee_due {\n  display: inline-block;\n  width: 70px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  line-height: 20px;\n  background: #E6A80B;\n  border-radius: 5px;\n}\n\n.page_heading2 {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  padding: 20px 0px;\n  border-bottom: 1px solid #EEF1F4;\n}\n\n.padding3 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 70px;\n}\n\n.box {\n  height: 70px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 40px;\n  margin-bottom: 5px;\n}\n\n.box1 {\n  background: #EFF9FF;\n}\n\n.name {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-bottom: 0px;\n  margin-top: 10px;\n}\n\n.value {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 33px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.box2 {\n  background: #E0FFED;\n}\n\n.box2 .value {\n  color: #07A84A;\n}\n\n.box3 {\n  background: #FFEDE8;\n}\n\n.box3 .value {\n  color: #FC5824;\n}\n\n.tw15 {\n  width: 15%;\n  border-left: 1px solid #EEF1F4;\n}\n\n.tw85 {\n  width: 85%;\n  border-left: 10px solid #DFE5F0;\n  border-right: 10px solid #DFE5F0;\n}\n\n.mart {\n  margin-top: -8px;\n}\n\n.red_c {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  background: #FA5146;\n  border-radius: 4px;\n}\n\n.red_c_text {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-bottom: 2px;\n}\n\n.position_c {\n  position: absolute;\n  right: 25%;\n}\n\n.space5 {\n  text-align: center;\n}\n\n.fee_up2 .table_heading > div:first-child, .fee_up2 .table_body > div:first-child {\n  width: 50px;\n}\n\n.fee_up2 .table_heading > div:nth-child(2), .fee_up2 .table_body > div:nth-child(2) {\n  width: 50px;\n}\n\n.fee_up2 .table_heading > div:nth-child(4), .fee_up2 .table_body > div:nth-child(4) {\n  text-align: left;\n  padding-left: 10px;\n  width: 200px;\n}\n\n.fee_up2 .table_heading > div:last-child, .fee_up2 .table_body > div:last-child {\n  width: 150px;\n}\n\n.fee_up2 .table_body > div:last-child {\n  text-align: left;\n  padding-left: 40px;\n}\n\n.fee_up2 .table_body > div, .fee_up2 .table_heading > div {\n  width: calc((100% - 450px) / 5);\n}\n\n.space7 {\n  margin-top: 15px;\n}\n\n.div8 {\n  margin-top: 15px;\n  height: 10px;\n  background: #DFE5F0;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 2.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.space8 {\n  margin-top: 10px;\n}\n\n.fee_up3 .table_body > div, .fee_up3 .table_heading > div {\n  width: calc((100% - 500px) / 4);\n}\n\n.fee_up3 .table_heading > div:nth-child(1), .fee_up3 .table_body > div:nth-child(1) {\n  width: 50px;\n}\n\n.fee_up3 .table_heading > div:first-child, .fee_up3 .table_body > div:first-child {\n  width: 50px;\n}\n\n.fee_up3 .table_heading > div:last-child, .fee_up3 .table_body > div:last-child {\n  width: 150px;\n}\n\n.fee_up3 .table_heading > div:nth-child(8), .fee_up3 .table_body > div:nth-child(8) {\n  width: 150px;\n}\n\n.fee_up3 .table_heading > div:nth-child(3), .fee_up3 .table_body > div:nth-child(3) {\n  width: 150px;\n  text-align: left;\n  padding-left: 10px;\n}\n\n.fee_up3 .table_heading > div:nth-child(3), .fee_up3 .table_body > div:nth-child(3) {\n  text-align: left;\n  padding-left: 10px;\n}\n\n.fee_up4 .table_heading > div:last-child, .fee_up4 .table_body > div:last-child {\n  width: 150px;\n}\n\n.fee_up4 .table_body > div, .fee_up4 .table_heading > div {\n  width: calc((100% - 200px) /6);\n}\n\n.fee_up4 .table_heading > div:nth-child(1), .fee_up4 .table_body > div:nth-child(1) {\n  width: 50px;\n}\n\n.cleared {\n  display: inline-block;\n  width: 105px;\n  background: #3AD665;\n  border-radius: 5px;\n  font-style: 400;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n\n.pending {\n  display: inline-block;\n  width: 105px;\n  background: #F1B927;\n  border-radius: 5px;\n  font-style: 400;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n\n.dishonoured {\n  display: inline-block;\n  width: 105px;\n  background: #FF7070;\n  border-radius: 5px;\n  font-style: 400;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n\n.space8 {\n  margin-top: 10px;\n}\n\n.space9 {\n  margin: 10px 0px;\n}\n\n.fee_up5 .table_heading > div:last-child, .fee_up5 .table_body > div:last-child {\n  width: 70px;\n}\n\n.fee_up5 .table_heading > div:first-child, .fee_up5 .table_body > div:first-child {\n  text-align: left;\n  padding-left: 10px;\n}\n\n.fee_up5 .table_body > div, .fee_up5 .table_heading > div {\n  width: calc((100% - 70px) /4);\n}\n\n/*.unpaid_d{\n     display: inline-block;\n    width: 105px;\n    background: #FF7070;\n    border-radius: 5px;\n    font-style: 400;\n    font-weight: 600;\n    font-size: 13px;\n    line-height: 24px;\n    letter-spacing: 0.01em;\n    color: #FFFFFF;\n  }\n  .ppaid_d{\n     display: inline-block;\n    width: 105px;\n    background: #F1B927;\n    border-radius: 5px;\n    font-style: 400;\n    font-weight: 600;\n    font-size: 13px;\n    line-height: 24px;\n    letter-spacing: 0.01em;\n    color: #FFFFFF;\n  }\n  .paid_d{\n     display: inline-block;\n    width: 105px;\n    background: #3AD665;\n    border-radius: 5px;\n    font-style: 400;\n    font-weight: 600;\n    font-size: 13px;\n    line-height: 24px;\n    letter-spacing: 0.01em;\n    color: #FFFFFF;\n  }*/\n\n.tooltip1 {\n  cursor: pointer;\n}\n\n.tooltip1 .tooltiptext {\n  visibility: hidden;\n  background-color: #fff;\n  text-align: center;\n  padding: 2px 4px;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 100;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 15px;\n  margin-top: 25px;\n  margin-left: -11%;\n  border: 1px solid #F1F3F6;\n}\n\n.tooltip1 .tooltiptext .blue {\n  color: #109CF1;\n}\n\n.tooltip1:hover .tooltiptext {\n  visibility: visible;\n}\n\n.checkbox {\n  margin-left: 10px;\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 2px solid #BBB2B2;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #0084f6;\n  font-weight: 600;\n  stroke-width: 4;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  transform-origin: bottom left;\n}\n\n.checkbox__input input:checked\n+ .checkbox__control svg {\n  transform: scale(1);\n}\n\n.checkbox__input input:checked\n+ .checkbox__control {\n  border: 2px solid #0084f6;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.wid100 {\n  width: 100%;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 7px 20px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  background-position: center right;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\n.pt101 {\n  padding-top: 10px;\n}\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n.outter_flex {\n  display: flex;\n  padding: 4px 14px;\n  background: #DFE5F0;\n}\n\n.outter_flex:last-child {\n  border-bottom: 1px solid #E5E3EE;\n}\n\n.w25 {\n  width: 50%;\n}\n\n.name1 {\n  font-weight: 400;\n  font-size: 13px;\n  /*line-height: 18px;*/\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value1 {\n  font-weight: 600;\n  font-size: 13px;\n  /*line-height: 18px;*/\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.fee_up2_scrol, .fee_up3_scrol, .fee_up5_scrol {\n  max-height: 40vh;\n  overflow-y: auto;\n}\n\n@media (min-width: 576px) {\n  #discountInstallModel .modal-dialog {\n    max-width: 1000px;\n    margin: 1.75rem auto;\n  }\n}\n\n#discountInstallModel .modal-dialog {\n  width: 1000px;\n}\n\n.fee_up6, .fee_up7 {\n  height: 230px;\n  overflow-y: scroll;\n}\n\n#one1, #two1, #three1 {\n  height: 290px;\n}\n\n.fee_up8 .table_body > div, .fee_up8 .table_heading > div {\n  width: calc(100% / 4);\n}\n\n.fee_up7 .table_heading > div:nth-child(1), .fee_up7 .table_body > div:nth-child(1) {\n  width: 50px;\n}\n\n.fee_up7 .table_heading > div:nth-child(2), .fee_up7 .table_body > div:nth-child(2) {\n  width: 50px;\n}\n\n.fee_up7 .table_body > div, .fee_up7 .table_heading > div {\n  width: calc((100% - 100px) /3);\n}\n\n.w90 {\n  width: 90%;\n  margin: 0px auto;\n}\n\n.p_note {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 18px;\n  margin-top: 10px;\n  letter-spacing: 0.01em;\n  color: #000;\n}\n\n.p_note > span {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #798AA0;\n}\n\n.sec30 {\n  width: 30%;\n}\n\n.sec25 {\n  width: 25%;\n}\n\n.sec15 {\n  width: 15%;\n}\n\n.sec70 {\n  width: 70%;\n}\n\n.sec60 {\n  width: 60%;\n}\n\n.wid50 {\n  width: 20%;\n  line-height: 34px;\n}\n\n.head_p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 40px;\n  letter-spacing: 0.01em;\n  color: #2B2626;\n}\n\n.dis_app {\n  display: inline-block;\n  background: #3AD665;\n  border-radius: 5px;\n  width: 95px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFF7F7;\n}\n\n.ws20 {\n  padding: 0px 20px;\n}\n\n.paid1 {\n  display: inline-block;\n  background: #3AD665;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: 88px;\n}\n\n.disc {\n  display: inline-block;\n  background: #109cf1;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: 88px;\n}\n\n.ppaid1 {\n  display: inline-block;\n  background: #24c4d0;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: 88px;\n}\n\n.overdue1 {\n  display: inline-block;\n  background: #f44167;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: 88px;\n}\n\n.due1 {\n  display: inline-block;\n  background: #ff8f36;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: 88px;\n}\n\n.wid240 {\n  width: 140px;\n  padding-left: 10px;\n  padding-right: 0px;\n}\n\n.right {\n  float: right;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: right;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 4px;\n}\n\n.pb14 {\n  padding-bottom: 14px;\n}\n\nb {\n  font-weight: 700;\n}\n\n.check_text {\n  margin-top: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n@media (min-width: 768px) {\n  #updateinstModal .modal-dialog, #chequeModal .modal-dialog, #installmentModal .modal-dialog {\n    width: 400px;\n  }\n}\n\n#updateinstModal .modal-dialog, #chequeModal .modal-dialog, #installmentModal .modal-dialog {\n  width: 400px;\n}\n\n.field-checkbox-wrapper,\n.field-radio-wrapper {\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 10px;\n}\n\n.field-radio-wrapper .form-radio {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n\n.field-radio-wrapper .form-radio + label {\n  vertical-align: middle;\n  transition: all .1s;\n}\n\n.field-radio-wrapper .form-radio + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: all .1s;\n}\n\n.field-radio-wrapper .form-radio:checked + label:after {\n  border: 2px solid #109CF1;\n}\n\n.field-radio-wrapper .form-radio + label:before {\n  transition: all .1s;\n  width: 1px;\n  height: 1px;\n  left: 9px;\n  top: 9px;\n  position: absolute;\n  content: '';\n}\n\n.field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  background: #109CF1;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n}\n\n.field-radio-wrapper .form-radio:checked + label {\n  color: #109CF1;\n}\n\n@media (min-width: 768px) {\n  #sendModal .modal-dialog {\n    width: 250px;\n  }\n}\n\n#sendModal .modal-dialog {\n  width: 250px;\n}\n\n.grey {\n  background-color: #DFE5F0;\n  padding-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2ZlZS11cGRhdGUvZmVlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2ZlZS11cGRhdGUvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUNDZjs7QURDRTtFQUNFLG9DQUFvQztBQ0V4Qzs7QURBRTtFQUNFLGFBQWE7QUNHakI7O0FEREU7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUNJbkI7O0FERkU7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0FDS25COztBREhHO0VBQ0MsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQ01sQjs7QURKRTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2QsWUFBVztBQ09qQjs7QURMRztFQUNJLGFBQWE7QUNRcEI7O0FETkU7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUNTdEI7O0FEUEU7RUFDRSxhQUFhO0FDVWpCOztBRFJFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQ1dsQzs7QURURTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUNZcEI7O0FEVkU7RUFDRSxpQkFBaUI7RUFDakIsK0NBQTRDO0VBQzFD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O0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7QUN3SGxCOztBRHRIQTtFQUVFO0lBQ0UsWUFBWTtFQ3dIZDtBQUNGOztBRHRIQTtFQUNFLFlBQVk7QUN5SGQ7O0FEdEhBOztFQUVJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FDeUh2Qjs7QUR0SEE7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FDeUhkOztBRHRIQTtFQUNJLHNCQUFzQjtFQUN0QixtQkFBbUI7QUN5SHZCOztBRHRIQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sbUJBQW1CO0FDeUh2Qjs7QUR0SEE7RUFDSSx5QkFBeUI7QUN5SDdCOztBRHRIQTtFQUNJLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVc7QUN5SGY7O0FEdEhBO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtBQ3lIWjs7QUR0SEE7RUFDSSxjQUFhO0FDeUhqQjs7QURySEE7RUFFRTtJQUNFLFlBQVk7RUN1SGQ7QUFDRjs7QURySEE7RUFDRSxZQUFZO0FDd0hkOztBRGxIQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUNxSHBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2ZlZS11cGRhdGUvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgYm9keXtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuYmx1ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC53aGl0ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAgLnNlbGVjdHtcbiAgICBwYWRkaW5nOiA3cHggMTdweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNzg3QTdEO1xuICB9XG4gIC5pbnB1dHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgaGVpZ2h0OjM1cHg7XG4gICAgfVxuICAgaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cyxidXR0b246Zm9jdXN7XG4gICAgICAgb3V0bGluZTogbm9uZTtcbiAgIH1cbiAgLnBhZ2VfaGVhZGluZz5we1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5kaXNwbGF5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53OTh7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5oZWFkX3BhZGRpbmd7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgfVxuICAudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgLyogcGFkZGluZzogMTBweCAwcHg7Ki9cbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICBcbiAgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB9XG4gIFxuICAudGFibGVfYm9keXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzgwN0M3QztcbiAgIC8qIHBhZGRpbmc6IDVweCAwcHg7Ki9cbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgXG4gIH1cbiAgXG4gIC5tcjEwe1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgfVxuICBcbiAgLyoubGVhdmVfY2F0IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwubGVhdmVfY2F0IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgfSovXG4gIC5mZWVfdXAxIC50YWJsZV9ib2R5PmRpdiwuZmVlX3VwMSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyMDBweCkgLyA2KTtcbiAgfVxuICAuZmVlX3VwMSAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuZmVlX3VwMSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmZlZV91cDEgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5mZWVfdXAxIC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuIFxuICBcbiAgLmdyb3VwMTh7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5wdDE1e1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gcHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHNlbGVjdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDA3OUZGO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NTB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NDB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAubnVtYmVye1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjowcHggNHB4O1xuICB9XG4gIC5hY3RpdmVfY2lyY2xle1xuICBcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzoycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDc5RkY7XG4gIH1cbiAgLm5leHR7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDc5RkY7XG4gIFxuICB9XG4gIC53NDUwe1xuICAgIHdpZHRoOiA0NTBweDtcbiAgfVxuICAud2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjI3cHgpO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRWRlZGVkO1xuICB9XG4gIC53aWQxNjB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICB9XG4gIC53aWQyMDB7XG4gICAgd2lkdGg6MjAwcHg7XG4gIH1cbiAgLy8gLm1hZ25pZnlpbmctZ2xhc3N7XG4gIC8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL1ZlY3RvcjEucG5nJyk7XG4gIC8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQgY2VudGVyO1xuICAvLyAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAvLyB9XG4gIC8vIC8qZW1wdHkgcGFnZSBzdGFydCovXG4gIC8vIC5lbXB0eV9pbWc+aW1ne1xuICAvLyAgIHdpZHRoOiA5MCU7XG4gIC8vICAgaGVpZ2h0OiBhdXRvO1xuICAvLyAgIG1hcmdpbjowcHggYXV0bztcbiAgLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuICAvLyB9XG4gIC5lbXB0eV9pbWd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC8qZW1wdHkgcGFnZSBlbmRzKi9cbiAgLmZlZV9kdWV7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0U2QTgwQjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5wYWdlX2hlYWRpbmcye1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUYxRjQ7XG4gIH1cbiAgLnBhZGRpbmcze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbiAgLmJveHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAuYm94MXtcbiAgYmFja2dyb3VuZDogI0VGRjlGRjtcbiAgfVxuICAubmFtZXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLnZhbHVle1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gIH1cbiAgLmJveDJ7XG4gIGJhY2tncm91bmQ6ICNFMEZGRUQ7XG4gIH1cbiAgLmJveDIgLnZhbHVle1xuICAgIGNvbG9yOiAjMDdBODRBO1xuICB9XG4gIC5ib3gze1xuICBiYWNrZ3JvdW5kOiAjRkZFREU4O1xuICB9XG4gIC5ib3gzIC52YWx1ZXtcbiAgICBjb2xvcjogI0ZDNTgyNDtcbiAgfVxuICAudHcxNXtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0VFRjFGNDtcbiAgfVxuICAudHc4NXtcbiAgICB3aWR0aDogODUlO1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNERkU1RjA7XG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNERkU1RjA7XG4gIH1cbiAgLm1hcnR7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgfVxuICAucmVkX2N7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkE1MTQ2O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAucmVkX2NfdGV4dHtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4XG4gIH1cbiAgLnBvc2l0aW9uX2N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyNSU7XG4gIH1cbiAgLnNwYWNlNXtcbiAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZmVlX3VwMiAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmZlZV91cDIgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC5mZWVfdXAyIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoMiksLmZlZV91cDIgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgyKXtcbiAgICB3aWR0aDo1MHB4O1xuICB9XG4gIC5mZWVfdXAyIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNCksLmZlZV91cDIgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg0KXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmZlZV91cDIgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLmZlZV91cDIgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gIC5mZWVfdXAyIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgfVxuICAuZmVlX3VwMiAudGFibGVfYm9keT5kaXYsLmZlZV91cDIgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNDUwcHgpIC8gNSk7XG4gIH1cbiAgXG4gIC5zcGFjZTd7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAuZGl2OHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjREZFNUYwO1xuICB9XG4gIC5uYXYtaXRlbSAubmF2LWxpbmt7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4XG4gIH1cbiAgXG4gIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDlDRjEgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdi1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogMS41cmVtIDByZW07XG4gICAgICBtYXJnaW46IC0xcmVtIDIuNXJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLncxNXtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubGlzdD5saXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDdweCAwcHg7XG4gICAgbWFyZ2luOiA3cHggMHB4O1xuICB9XG4gIC5saXN0PmxpPmE+c3BhbntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICAubGlzdD5saSBpbWd7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9IFxuICAuc3BhY2U4e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmZlZV91cDMgLnRhYmxlX2JvZHk+ZGl2LC5mZWVfdXAzIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDUwMHB4KSAvIDQpO1xuICB9XG4gIC5mZWVfdXAzIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoMSksLmZlZV91cDMgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgxKXtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAuZmVlX3VwMyAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmZlZV91cDMgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC5mZWVfdXAzIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5mZWVfdXAzIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuICAuZmVlX3VwMyAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDgpLC5mZWVfdXAzIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoOCl7XG4gICAgd2lkdGg6MTUwcHg7XG4gIH1cbiAgLmZlZV91cDMgLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCgzKSwuZmVlX3VwMyAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDMpe1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5mZWVfdXAzIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoMyksLmZlZV91cDMgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgzKXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBcbiAgLmZlZV91cDQgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLmZlZV91cDQgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gIC5mZWVfdXA0IC50YWJsZV9ib2R5PmRpdiwuZmVlX3VwNCAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyMDBweCkgLzYpO1xuICB9XG4gIC5mZWVfdXA0IC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoMSksLmZlZV91cDQgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgxKXtcbiAgICB3aWR0aDo1MHB4O1xuICB9XG4gIC5jbGVhcmVke1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgYmFja2dyb3VuZDogIzNBRDY2NTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zdHlsZTogNDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgLnBlbmRpbmd7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjFCOTI3O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXN0eWxlOiA0MDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuICBcbiAgLmRpc2hvbm91cmVke1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGNzA3MDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zdHlsZTogNDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgLnNwYWNlOHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5zcGFjZTl7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgfVxuICAuZmVlX3VwNSAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuZmVlX3VwNSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxuICAuZmVlX3VwNSAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmZlZV91cDUgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5mZWVfdXA1IC50YWJsZV9ib2R5PmRpdiwuZmVlX3VwNSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA3MHB4KSAvNCk7XG4gIH1cbiAgLyoudW5wYWlkX2R7XG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGNzA3MDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zdHlsZTogNDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgLnBwYWlkX2R7XG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgYmFja2dyb3VuZDogI0YxQjkyNztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zdHlsZTogNDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgLnBhaWRfZHtcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjM0FENjY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXN0eWxlOiA0MDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfSovXG4gIFxuIC50b29sdGlwMXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnRvb2x0aXAxIC50b29sdGlwdGV4dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogLTExJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0YxRjNGNjtcbiAgfVxuICAudG9vbHRpcDEgLnRvb2x0aXB0ZXh0IC5ibHVle1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICB9XG4gIC50b29sdGlwMTpob3ZlciAudG9vbHRpcHRleHQge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgYXV0bztcbiAgICAgIGdyaWQtZ2FwOiAwLjVlbTtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gIH1cbiAgLmNoZWNrYm94X19pbnB1dCBpbnB1dCB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgd2lkdGg6IDBlbTtcbiAgICAgIGhlaWdodDogMGVtO1xuICAgIH1cbiAgLmNoZWNrYm94X19jb250cm9sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICB3aWR0aDogMC41ZW07XG4gICAgaGVpZ2h0OiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjFlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI0JCQjJCMjtcbiAgXG4gIH1cbiAgLmNoZWNrYm94X19pbnB1dCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNoZWNrYm94XCI7XG4gIH1cbiAgLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gICAgICBjb2xvcjogICMwMDg0ZjY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgIHN0cm9rZS13aWR0aDo0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4gMjVtcztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZFxuICAgKyAuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZFxuICAgKyAuY2hlY2tib3hfX2NvbnRyb2wgIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICB9XG4gIC5tb2RhbC10aXRsZXtcbiAgICBjb2xvcjogIzJCMjYyNjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAud2lkMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIHRleHRhcmVhOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLm1vZGFsIHRleHRhcmVhe1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvY2FsLnN2Zykgbm8tcmVwZWF0O1xuICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgICAgcGFkZGluZzogMnB4IDBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBidXR0b246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAucHQxMHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAucHQxMDF7XG4gICAgcGFkZGluZy10b3A6MTBweDtcbiAgfVxuICAgaW5wdXRbdHlwZT1cImRhdGVcIl06YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1czpiZWZvcmUsXG4gICAgaW5wdXRbdHlwZT1cImRhdGVcIl06dmFsaWQ6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICAgIC5vdXR0ZXJfZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDRweCAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNERkU1RjA7XG4gIH1cbiAgIC5vdXR0ZXJfZmxleDpsYXN0LWNoaWxke1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTVFM0VFO1xuICB9XG4gIC53MjV7XG4gICAgd2lkdGg6NTAlO1xuICB9XG4gIC5uYW1lMXtcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLypsaW5lLWhlaWdodDogMThweDsqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAudmFsdWUxe1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC8qbGluZS1oZWlnaHQ6IDE4cHg7Ki9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLmZlZV91cDJfc2Nyb2wsLmZlZV91cDNfc2Nyb2wsLmZlZV91cDVfc2Nyb2x7XG5cbiAgICBtYXgtaGVpZ2h0OiA0MHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87IFxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICNkaXNjb3VudEluc3RhbGxNb2RlbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgbWFyZ2luOiAxLjc1cmVtIGF1dG87XG4gIH1cbiAgfVxuICAjZGlzY291bnRJbnN0YWxsTW9kZWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgIHdpZHRoOiAxMDAwcHg7XG4gICB9XG4gICAuZmVlX3VwNiwuZmVlX3VwN3tcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICAjb25lMSwjdHdvMSwjdGhyZWUxe1xuICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgfVxuICBcbiAgLmZlZV91cDggLnRhYmxlX2JvZHk+ZGl2LC5mZWVfdXA4IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNCk7XG4gIH1cbiAgXG4gIC5mZWVfdXA3IC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoMSksLmZlZV91cDcgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgxKXtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAuZmVlX3VwNyAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDIpLC5mZWVfdXA3IC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMil7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLmZlZV91cDcgLnRhYmxlX2JvZHk+ZGl2LC5mZWVfdXA3IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvMyk7XG4gIH1cbiAgLnc5MHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLnBfbm90ZXtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgLnBfbm90ZT5zcGFue1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM3OThBQTA7XG4gIH1cbiAgLnNlYzMwe1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgLnNlYzI1e1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLnNlYzE1e1xuICAgIHdpZHRoOiAxNSU7XG4gIFxuICB9XG4gIC5zZWM3MHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIC5zZWM2MHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIC53aWQ1MHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICB9XG4gIC5oZWFkX3B7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzJCMjYyNjtcbiAgfVxuICAuZGlzX2FwcHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzNBRDY2NTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgIHdpZHRoOiA5NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkY3Rjc7XG4gIH1cbiAgLndzMjB7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gIH1cbiAgLnBhaWQxe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjM0FENjY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHdpZHRoOiA4OHB4O1xuICB9XG4gIC5kaXNje1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjMTA5Y2YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHdpZHRoOiA4OHB4O1xuICB9XG4gIC5wcGFpZDF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICMyNGM0ZDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgd2lkdGg6IDg4cHg7XG4gIH1cbiAgXG4gIC5vdmVyZHVlMXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2Y0NDE2NztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogODhweDtcbiAgfVxuICAuZHVlMXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2ZmOGYzNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogODhweDtcbiAgfVxuICAud2lkMjQwe1xuICAgd2lkdGg6IDE0MHB4O1xuICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIC5yaWdodHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLm5hdi1pdGVtIHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDljZjEgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMxMDljZjEgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLm1vZGFsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgfVxuICAgICAgIC5yaWdodHtcbiAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICB9XG4gICAubW9kYWwtZGlhbG9nIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRvcDoxMCU7XG4gICAgfVxuICAgIC5tb2RhbC1oZWFkZXI6YmVmb3Jle1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICAubW9kYWwtdGl0bGUge1xuICAgICAgY29sb3I6ICMyQjI2MjY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5tYWluLXNoYWRvd3tcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cbi5wYjE0e1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbmJ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uY2hlY2tfdGV4dHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpXG57XG4gICN1cGRhdGVpbnN0TW9kYWwgLm1vZGFsLWRpYWxvZywjY2hlcXVlTW9kYWwgIC5tb2RhbC1kaWFsb2csI2luc3RhbGxtZW50TW9kYWwgLm1vZGFsLWRpYWxvZ3tcbiAgICB3aWR0aDogNDAwcHg7XG59XG59XG4jdXBkYXRlaW5zdE1vZGFsIC5tb2RhbC1kaWFsb2cgLCNjaGVxdWVNb2RhbCAgLm1vZGFsLWRpYWxvZywjaW5zdGFsbG1lbnRNb2RhbCAubW9kYWwtZGlhbG9ne1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5maWVsZC1jaGVja2JveC13cmFwcGVyLFxuLmZpZWxkLXJhZGlvLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZmllbGQtcmFkaW8td3JhcHBlciAuZm9ybS1yYWRpbytsYWJlbCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xufVxuXG4uZmllbGQtcmFkaW8td3JhcHBlciAuZm9ybS1yYWRpbytsYWJlbDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xufVxuXG4uZmllbGQtcmFkaW8td3JhcHBlciAuZm9ybS1yYWRpbzpjaGVja2VkK2xhYmVsOmFmdGVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTA5Q0YxO1xufVxuXG4uZmllbGQtcmFkaW8td3JhcHBlciAuZm9ybS1yYWRpbytsYWJlbDpiZWZvcmUge1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXM7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsZWZ0OiA5cHg7XG4gICAgdG9wOiA5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xufVxuXG4uZmllbGQtcmFkaW8td3JhcHBlciAuZm9ybS1yYWRpbzpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGxlZnQ6IDNweDtcbiAgICB0b3A6IDNweDtcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW86Y2hlY2tlZCtsYWJlbCB7XG4gICAgY29sb3I6IzEwOUNGMTtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpXG57XG4gICNzZW5kTW9kYWwgLm1vZGFsLWRpYWxvZ3tcbiAgICB3aWR0aDogMjUwcHg7XG59XG59XG4jc2VuZE1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICB3aWR0aDogMjUwcHg7XG59XG4vLyAuaGVhZF9wMXtcbi8vIGhlaWdodDogMjBweDtcbi8vIH1cblxuLmdyZXl7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi9mZWUtdXBkYXRlLmNvbXBvbmVudC5zY3NzXCI7Il19 */");

/***/ }),

/***/ "./src/app/components/fee-module/fee-update/update/update.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/fee-module/fee-update/update/update.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common-service */ "./src/app/services/common-service.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let UpdateComponent = /** @class */ (() => {
    let UpdateComponent = class UpdateComponent {
        constructor(auth, http, commonService) {
            this.auth = auth;
            this.http = http;
            this.commonService = commonService;
            this.schoolModel = false;
            this.isProfessional = false;
            this.academicYrList = [];
            this.standardList = [];
            this.standardSectionMap = [];
            this.masterCourseList = [];
            this.model = {
                master_course: '',
                course_id: -1,
                standard_id: -1,
                academic_yr_id: -1,
                batch_id: -1,
                country_id: -1,
                fee_assigned: 1
            };
            this.requestPayload = {
                institute_id: sessionStorage.getItem("institute_id")
            };
            this.studentList = [];
            this.tempStudentList = [];
            this.countryDetails = [];
            this.masterSelected = false;
            this.feeStructureList = [];
            this.feeStructureDataList = {};
            this.is_tax_enabled = false;
            this.template_id = -1;
            this.totalFeeAmount = 0;
            this.totalTax = 0;
            this.feeTypeList = [];
            this.studentIdArr = [];
            this.feeInstmentArr = [];
            this.batchList = [];
            this.student_id = -1;
            this.isTemplateNotLinkWithCourseAndStandard = false;
            this.schoolModel = this.auth.schoolModel.value;
            this.institute_id = sessionStorage.getItem("institute_id");
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            this.isTemplateNotLinkWithCourseAndStandard = sessionStorage.getItem("is_fee_struct_linked") == 'true' ? false : true;
            this.fetchFilterData();
        }
        ngOnInit() {
            this.getCountryDetails();
            this.is_tax_enabled = sessionStorage.getItem('enable_tax_applicable_fee_installments') == '1';
        }
        fetchFilterData() {
            this.fetchAcademicYearList();
            if (this.schoolModel) {
                this.fetchStandardAndSection();
            }
            else if (!this.isProfessional) {
                this.fetchMCAndCourse();
            }
            else {
                this.fetchStandard();
            }
        }
        fetchStandard() {
            let url = "/api/v1/standards/standard-subject-list/" + this.institute_id + '?is_active=Y';
            this.auth.showLoader();
            this.http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.standardList = data.result;
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        fetchBatch(standard_id) {
            let url = "/api/v1/batches/" + this.institute_id + "/standard/" + standard_id;
            this.auth.showLoader();
            this.http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.batchList = data.result;
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        fetchMCAndCourse() {
            this.auth.showLoader();
            const url = "/api/v1/courseMaster/fetch/" + this.institute_id + "/all?isActiveNotExpire=Y";
            this.http.getData(url).subscribe(res => {
                this.masterCourseList = res;
                this.auth.hideLoader();
            }, err => {
                this.commonService.showErrorMessage('error', '', 'Something went wrong. Please try after sometime!');
                this.auth.hideLoader();
            });
        }
        fetchCoursesList(master_course) {
            for (let data of this.masterCourseList) {
                if (data.master_course == master_course) {
                    this.courseList = data.coursesList;
                    return;
                }
            }
        }
        fetchStandardAndSection() {
            let url = "/api/v1/courseMaster/standard-section-list/" + this.institute_id;
            this.auth.showLoader();
            this.http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.standardSectionMap = data.result;
            }, (error) => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', 'Something went wrong. Please try after sometime!');
            });
        }
        fetchSectionList(standard_id) {
            this.sectionList = [];
            for (let data of this.standardSectionMap) {
                if (data.standard_id == standard_id) {
                    this.sectionList = data.section_list;
                    break;
                }
            }
        }
        fetchAcademicYearList() {
            this.auth.showLoader();
            let url = "/api/v1/academicYear/all/" + this.institute_id;
            this.http.getData(url).subscribe((res) => {
                this.academicYrList = res;
                this.fetchDefaultAY();
                this.auth.hideLoader();
            }, (error) => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', 'Something went wrong. Please try after sometime!');
            });
        }
        fetchDefaultAY() {
            if (this.academicYrList != null) {
                for (let data of this.academicYrList) {
                    if (data.default_academic_year == 1) {
                        this.model.academic_yr_id = data.inst_acad_year_id;
                        break;
                    }
                }
            }
        }
        fetchStudentList() {
            if (this.validateUserInput()) {
                this.auth.showLoader();
                let url = "/api/v1//studentWise/fee/fetch/students";
                this.http.postData(url, this.requestPayload).subscribe((res) => {
                    this.studentList = res.result;
                    this.tempStudentList = res.result;
                    this.checkUncheckAll();
                    this.auth.hideLoader();
                }, (error) => {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('error', '', error.error.message);
                });
            }
        }
        validateUserInput() {
            if (this.schoolModel) {
                if (this.model.standard_id <= 0) {
                    this.commonService.showErrorMessage('info', '', 'Select Standard!');
                    return;
                }
                this.requestPayload.standard_id = this.model.standard_id;
                this.requestPayload.course_id = this.model.course_id;
            }
            else if (!this.isProfessional) {
                if (this.model.master_course == '') {
                    this.commonService.showErrorMessage('info', '', 'Select Master Course!');
                    return;
                }
                if (this.model.course_id <= 0) {
                    this.commonService.showErrorMessage('info', '', 'Select Course!');
                    return;
                }
                this.requestPayload.course_id = this.model.course_id;
            }
            else {
                if (this.model.standard_id <= 0) {
                    this.commonService.showErrorMessage('info', '', 'Select Master Course!');
                    return;
                }
                if (this.model.batch_id <= 0) {
                    this.commonService.showErrorMessage('info', '', 'Select Batch!');
                    return;
                }
                this.requestPayload.batch_id = this.model.batch_id;
            }
            if (this.model.academic_yr_id <= 0) {
                this.commonService.showErrorMessage('info', '', 'Select Academic Yr!');
                return;
            }
            this.requestPayload.academic_yr_id = this.model.academic_yr_id;
            this.requestPayload.country_id = this.model.country_id;
            this.requestPayload.fee_assigned = this.model.fee_assigned;
            return true;
        }
        fetchFeeStructure(isAssignedToSingleStudent) {
            if (isAssignedToSingleStudent) {
                this.student_id = -1;
            }
            if (!this.validateStudentData()) {
                return;
            }
            // if (this.feeStructureList.length > 0) {
            //   $('#assignFeeModel').modal('show');
            //   return
            // }
            $('#assignFeeModel').modal('show');
            this.auth.showLoader();
            let queryParam = "";
            if (!this.isTemplateNotLinkWithCourseAndStandard && false) {
                if (this.schoolModel) {
                    queryParam = "?standard_id=" + this.model.standard_id;
                }
                else if (!this.isProfessional) {
                    queryParam = "?course_id=" + this.model.course_id;
                }
                else {
                    queryParam = "?batch_id=" + this.model.batch_id;
                }
                queryParam += "&country_id=" + this.model.country_id;
            }
            else {
                queryParam += "?country_id=" + this.model.country_id;
            }
            const url = "/api/v1/student_wise/feeStructure/" + this.institute_id + queryParam;
            this.http.getData(url).subscribe((res) => {
                this.feeStructureList = res.result;
                if (this.feeStructureList.length > 0) {
                    for (let data of this.feeStructureList) {
                        if (data.is_default = 1) {
                            this.template_id = data.template_id;
                            break;
                        }
                    }
                    if (this.template_id > 0) {
                        this.fetchFeeStructureData(this.template_id);
                    }
                }
                this.auth.hideLoader();
            }, err => {
                this.commonService.showErrorMessage('error', '', 'Something went wrong. Please try after sometime!');
                this.auth.hideLoader();
            });
        }
        validateStudentData() {
            if (this.student_id < 0) {
                for (let data of this.studentList) {
                    if (data.isSelected) {
                        return true;
                    }
                }
                this.commonService.showErrorMessage('info', '', 'Select at least one student');
                return false;
            }
            else {
                return true;
            }
        }
        getCountryDetails() {
            let encryptedData = sessionStorage.getItem('country_data');
            let data = JSON.parse(encryptedData);
            if (data.length > 0) {
                this.countryDetails = data;
                for (let data of this.countryDetails) {
                    if (data.is_default == "Y") {
                        this.model.country_id = data.id;
                        this.currencySymbol = data.currency_code;
                        break;
                    }
                }
            }
        }
        assignfeeToStudent(isAssignedToSingleStudent) {
            if (this.validateAssignFeeData()) {
                let requestPayload = {
                    student_ids: this.studentIdArr,
                    template_id: this.template_id,
                    academic_yr_id: this.model.academic_yr_id,
                    institute_id: this.institute_id,
                    fee_details: this.feeInstmentArr,
                };
                if (this.schoolModel) {
                    requestPayload.standard_id = this.model.standard_id;
                }
                else if (!this.isProfessional) {
                    requestPayload.course_id = this.model.course_id;
                }
                else {
                    requestPayload.batch_id = this.model.batch_id;
                }
                let url = "/api/v1//studentWise/fee/assign";
                this.http.postData(url, requestPayload).subscribe((res) => {
                    $('#assignFeeModel').modal('hide');
                    this.commonService.showErrorMessage('success', '', 'Success!');
                    this.fetchStudentList();
                    this.auth.hideLoader();
                }, err => {
                    this.commonService.showErrorMessage('error', '', err.error.message);
                    this.auth.hideLoader();
                });
            }
        }
        validateAssignFeeData() {
            this.studentIdArr = [];
            this.feeInstmentArr = [];
            if (this.student_id < 0) {
                for (let data of this.studentList) {
                    if (data.isSelected) {
                        this.studentIdArr.push(data.student_id);
                    }
                }
            }
            else {
                this.studentIdArr.push(this.student_id);
            }
            for (let data of this.feeInstalllmentArr) {
                if (data.day_type == 3 && data.days > 12) {
                    this.commonService.showErrorMessage('info', '', "Please enter valid month!");
                    return;
                }
                let obj = {
                    template_data_id: data.schedule_id,
                    installment_date: moment__WEBPACK_IMPORTED_MODULE_4__(data.installment_date).format("YYYY-MM-DD"),
                    date_type: data.day_type,
                    days: data.days
                };
                this.feeInstmentArr.push(obj);
            }
            return true;
        }
        viewFeeDetails(data) {
        }
        assignFeeToSingleStudent(data) {
            this.student_id = data.student_id;
            this.fetchFeeStructure(false);
        }
        checkUncheckAll() {
            for (var i = 0; i < this.studentList.length; i++) {
                this.studentList[i].isSelected = this.masterSelected;
            }
        }
        fetchFeeStructureData(template_id) {
            const url = "/api/v1/student_wise/feeStructure/fetch/" + this.institute_id + "/" + template_id;
            this.http.getData(url).subscribe((res) => {
                this.feeStructureDataList = res;
                this.preparedFeeStructureData(this.feeStructureDataList);
                this.auth.hideLoader();
            }, err => {
                this.commonService.showErrorMessage('error', '', 'Something went wrong. Please try after sometime!');
                this.auth.hideLoader();
            });
        }
        preparedFeeStructureData(feeStructureData) {
            this.totalTax = 0;
            this.feeInstalllmentArr = [];
            this.totalFeeAmount = feeStructureData.studentwise_total_fees_amount;
            if (feeStructureData.customFeeSchedules != null) {
                for (let data of feeStructureData.customFeeSchedules) {
                    let installmentData = {
                        fee_type: data.fee_type,
                        month: data.month,
                        days: data.days,
                        fees_amount: data.fees_amount,
                        day_type: data.day_type,
                        schedule_id: data.schedule_id,
                        fee_type_name: data.fee_type_name,
                        installment_date: data.installment_date
                    };
                    if (this.is_tax_enabled) {
                        this.totalTax += (Number(data.fees_amount) - Number(data.initial_fee_amount));
                    }
                    this.feeInstalllmentArr.push(installmentData);
                    this.getCurrencyData(feeStructureData.country_id);
                }
            }
        }
        getCurrencyData(id) {
            for (let data of this.countryDetails) {
                if (data.id == id) {
                    this.currencySymbol = data.currency_code;
                    break;
                }
            }
        }
        closePopUp() {
            $('#assignFeeModel').modal('hide');
            this.student_id = -1;
        }
        localSearch() {
            if (this.searchElement) {
                let searchData = this.studentList.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchElement.toLowerCase())));
                this.studentList = searchData;
            }
            else {
                this.studentList = this.tempStudentList;
            }
        }
    };
    UpdateComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceFactory"] }
    ];
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __importDefault(__webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/fee-update/update/update.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./update.component.scss */ "./src/app/components/fee-module/fee-update/update/update.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceFactory"]])
    ], UpdateComponent);
    return UpdateComponent;
})();



/***/ }),

/***/ "./src/app/components/fee-module/fee-update/view/view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/fee-module/fee-update/view/view.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 17px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 35px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n/*.leave_cat .table_heading>div:first-child,.leave_cat .table_body>div:first-child{\n    width: 50px;\n  }*/\n\n.fee_up1 .table_body > div, .fee_up1 .table_heading > div {\n  width: calc((100% - 200px) / 6);\n}\n\n.fee_up1 .table_heading > div:last-child, .fee_up1 .table_body > div:last-child {\n  width: 200px;\n}\n\n.fee_up1 .table_heading > div:first-child, .fee_up1 .table_body > div:first-child {\n  text-align: left;\n  padding-left: 20px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.wid160 {\n  width: 175px;\n}\n\n.wid200 {\n  width: 200px;\n}\n\n.empty_img {\n  text-align: center;\n}\n\n/*empty page ends*/\n\n.fee_due {\n  display: inline-block;\n  width: 70px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  line-height: 20px;\n  background: #E6A80B;\n  border-radius: 5px;\n}\n\n.page_heading2 {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  padding: 20px 0px;\n  border-bottom: 1px solid #EEF1F4;\n}\n\n.padding3 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 70px;\n}\n\n.box {\n  height: 70px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 40px;\n  margin-bottom: 5px;\n}\n\n.box1 {\n  background: #EFF9FF;\n}\n\n.name {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-bottom: 0px;\n  margin-top: 10px;\n}\n\n.value {\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 33px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.box2 {\n  background: #E0FFED;\n}\n\n.box2 .value {\n  color: #07A84A;\n}\n\n.box3 {\n  background: #FFEDE8;\n}\n\n.box3 .value {\n  color: #FC5824;\n}\n\n.tw15 {\n  width: 15%;\n  border-left: 1px solid #EEF1F4;\n}\n\n.tw85 {\n  width: 85%;\n  border-left: 10px solid #DFE5F0;\n  border-right: 10px solid #DFE5F0;\n}\n\n.mart {\n  margin-top: -8px;\n}\n\n.red_c {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  background: #FA5146;\n  border-radius: 4px;\n}\n\n.red_c_text {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-bottom: 2px;\n}\n\n.position_c {\n  position: absolute;\n  right: 25%;\n}\n\n.space5 {\n  text-align: center;\n}\n\n.fee_up2 .table_heading > div:first-child, .fee_up2 .table_body > div:first-child {\n  width: 50px;\n}\n\n.fee_up2 .table_heading > div:nth-child(2), .fee_up2 .table_body > div:nth-child(2) {\n  width: 50px;\n}\n\n.fee_up2 .table_heading > div:nth-child(4), .fee_up2 .table_body > div:nth-child(4) {\n  text-align: left;\n  padding-left: 10px;\n  width: 200px;\n}\n\n.fee_up2 .table_heading > div:last-child, .fee_up2 .table_body > div:last-child {\n  width: 150px;\n}\n\n.fee_up2 .table_body > div:last-child {\n  text-align: left;\n  padding-left: 40px;\n}\n\n.fee_up2 .table_body > div, .fee_up2 .table_heading > div {\n  width: calc((100% - 450px) / 5);\n}\n\n.space7 {\n  margin-top: 15px;\n}\n\n.div8 {\n  margin-top: 15px;\n  height: 10px;\n  background: #DFE5F0;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 2.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.space8 {\n  margin-top: 10px;\n}\n\n.fee_up3 .table_body > div, .fee_up3 .table_heading > div {\n  width: calc((100% - 500px) / 4);\n}\n\n.fee_up3 .table_heading > div:nth-child(1), .fee_up3 .table_body > div:nth-child(1) {\n  width: 50px;\n}\n\n.fee_up3 .table_heading > div:first-child, .fee_up3 .table_body > div:first-child {\n  width: 50px;\n}\n\n.fee_up3 .table_heading > div:last-child, .fee_up3 .table_body > div:last-child {\n  width: 150px;\n}\n\n.fee_up3 .table_heading > div:nth-child(8), .fee_up3 .table_body > div:nth-child(8) {\n  width: 150px;\n}\n\n.fee_up3 .table_heading > div:nth-child(3), .fee_up3 .table_body > div:nth-child(3) {\n  width: 150px;\n  text-align: left;\n  padding-left: 10px;\n}\n\n.fee_up3 .table_heading > div:nth-child(3), .fee_up3 .table_body > div:nth-child(3) {\n  text-align: left;\n  padding-left: 10px;\n}\n\n.fee_up4 .table_heading > div:last-child, .fee_up4 .table_body > div:last-child {\n  width: 150px;\n}\n\n.fee_up4 .table_body > div, .fee_up4 .table_heading > div {\n  width: calc((100% - 200px) /6);\n}\n\n.fee_up4 .table_heading > div:nth-child(1), .fee_up4 .table_body > div:nth-child(1) {\n  width: 50px;\n}\n\n.cleared {\n  display: inline-block;\n  width: 105px;\n  background: #3AD665;\n  border-radius: 5px;\n  font-style: 400;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n\n.pending {\n  display: inline-block;\n  width: 105px;\n  background: #F1B927;\n  border-radius: 5px;\n  font-style: 400;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n\n.dishonoured {\n  display: inline-block;\n  width: 105px;\n  background: #FF7070;\n  border-radius: 5px;\n  font-style: 400;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n\n.space8 {\n  margin-top: 10px;\n}\n\n.space9 {\n  margin: 10px 0px;\n}\n\n.fee_up5 .table_heading > div:last-child, .fee_up5 .table_body > div:last-child {\n  width: 70px;\n}\n\n.fee_up5 .table_heading > div:first-child, .fee_up5 .table_body > div:first-child {\n  text-align: left;\n  padding-left: 10px;\n}\n\n.fee_up5 .table_body > div, .fee_up5 .table_heading > div {\n  width: calc((100% - 70px) /4);\n}\n\n/*.unpaid_d{\n     display: inline-block;\n    width: 105px;\n    background: #FF7070;\n    border-radius: 5px;\n    font-style: 400;\n    font-weight: 600;\n    font-size: 13px;\n    line-height: 24px;\n    letter-spacing: 0.01em;\n    color: #FFFFFF;\n  }\n  .ppaid_d{\n     display: inline-block;\n    width: 105px;\n    background: #F1B927;\n    border-radius: 5px;\n    font-style: 400;\n    font-weight: 600;\n    font-size: 13px;\n    line-height: 24px;\n    letter-spacing: 0.01em;\n    color: #FFFFFF;\n  }\n  .paid_d{\n     display: inline-block;\n    width: 105px;\n    background: #3AD665;\n    border-radius: 5px;\n    font-style: 400;\n    font-weight: 600;\n    font-size: 13px;\n    line-height: 24px;\n    letter-spacing: 0.01em;\n    color: #FFFFFF;\n  }*/\n\n.tooltip1 {\n  cursor: pointer;\n}\n\n.tooltip1 .tooltiptext {\n  visibility: hidden;\n  background-color: #fff;\n  text-align: center;\n  padding: 2px 4px;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 100;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 15px;\n  margin-top: 25px;\n  margin-left: -11%;\n  border: 1px solid #F1F3F6;\n}\n\n.tooltip1 .tooltiptext .blue {\n  color: #109CF1;\n}\n\n.tooltip1:hover .tooltiptext {\n  visibility: visible;\n}\n\n.checkbox {\n  margin-left: 10px;\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 2px solid #BBB2B2;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #0084f6;\n  font-weight: 600;\n  stroke-width: 4;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  transform-origin: bottom left;\n}\n\n.checkbox__input input:checked\n+ .checkbox__control svg {\n  transform: scale(1);\n}\n\n.checkbox__input input:checked\n+ .checkbox__control {\n  border: 2px solid #0084f6;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.wid100 {\n  width: 100%;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 7px 20px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  background-position: center right;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\n.pt101 {\n  padding-top: 10px;\n}\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n.outter_flex {\n  display: flex;\n  padding: 4px 14px;\n  background: #DFE5F0;\n}\n\n.outter_flex:last-child {\n  border-bottom: 1px solid #E5E3EE;\n}\n\n.w25 {\n  width: 50%;\n}\n\n.name1 {\n  font-weight: 400;\n  font-size: 13px;\n  /*line-height: 18px;*/\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value1 {\n  font-weight: 600;\n  font-size: 13px;\n  /*line-height: 18px;*/\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.fee_up2_scrol, .fee_up3_scrol, .fee_up5_scrol {\n  max-height: 40vh;\n  overflow-y: auto;\n}\n\n@media (min-width: 576px) {\n  #discountInstallModel .modal-dialog {\n    max-width: 1000px;\n    margin: 1.75rem auto;\n  }\n}\n\n#discountInstallModel .modal-dialog {\n  width: 1000px;\n}\n\n.fee_up6, .fee_up7 {\n  height: 230px;\n  overflow-y: scroll;\n}\n\n#one1, #two1, #three1 {\n  height: 290px;\n}\n\n.fee_up8 .table_body > div, .fee_up8 .table_heading > div {\n  width: calc(100% / 4);\n}\n\n.fee_up7 .table_heading > div:nth-child(1), .fee_up7 .table_body > div:nth-child(1) {\n  width: 50px;\n}\n\n.fee_up7 .table_heading > div:nth-child(2), .fee_up7 .table_body > div:nth-child(2) {\n  width: 50px;\n}\n\n.fee_up7 .table_body > div, .fee_up7 .table_heading > div {\n  width: calc((100% - 100px) /3);\n}\n\n.w90 {\n  width: 90%;\n  margin: 0px auto;\n}\n\n.p_note {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 18px;\n  margin-top: 10px;\n  letter-spacing: 0.01em;\n  color: #000;\n}\n\n.p_note > span {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #798AA0;\n}\n\n.sec30 {\n  width: 30%;\n}\n\n.sec25 {\n  width: 25%;\n}\n\n.sec15 {\n  width: 15%;\n}\n\n.sec70 {\n  width: 70%;\n}\n\n.sec60 {\n  width: 60%;\n}\n\n.wid50 {\n  width: 20%;\n  line-height: 34px;\n}\n\n.head_p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 40px;\n  letter-spacing: 0.01em;\n  color: #2B2626;\n}\n\n.dis_app {\n  display: inline-block;\n  background: #3AD665;\n  border-radius: 5px;\n  width: 95px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFF7F7;\n}\n\n.ws20 {\n  padding: 0px 20px;\n}\n\n.paid1 {\n  display: inline-block;\n  background: #3AD665;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: 88px;\n}\n\n.disc {\n  display: inline-block;\n  background: #109cf1;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: 88px;\n}\n\n.ppaid1 {\n  display: inline-block;\n  background: #24c4d0;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: 88px;\n}\n\n.overdue1 {\n  display: inline-block;\n  background: #f44167;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: 88px;\n}\n\n.due1 {\n  display: inline-block;\n  background: #ff8f36;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: 88px;\n}\n\n.wid240 {\n  width: 140px;\n  padding-left: 10px;\n  padding-right: 0px;\n}\n\n.right {\n  float: right;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: right;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 4px;\n}\n\n.pb14 {\n  padding-bottom: 14px;\n}\n\nb {\n  font-weight: 700;\n}\n\n.check_text {\n  margin-top: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n@media (min-width: 768px) {\n  #updateinstModal .modal-dialog, #chequeModal .modal-dialog, #installmentModal .modal-dialog {\n    width: 400px;\n  }\n}\n\n#updateinstModal .modal-dialog, #chequeModal .modal-dialog, #installmentModal .modal-dialog {\n  width: 400px;\n}\n\n.field-checkbox-wrapper,\n.field-radio-wrapper {\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 10px;\n}\n\n.field-radio-wrapper .form-radio {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n\n.field-radio-wrapper .form-radio + label {\n  vertical-align: middle;\n  transition: all .1s;\n}\n\n.field-radio-wrapper .form-radio + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: all .1s;\n}\n\n.field-radio-wrapper .form-radio:checked + label:after {\n  border: 2px solid #109CF1;\n}\n\n.field-radio-wrapper .form-radio + label:before {\n  transition: all .1s;\n  width: 1px;\n  height: 1px;\n  left: 9px;\n  top: 9px;\n  position: absolute;\n  content: '';\n}\n\n.field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  background: #109CF1;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n}\n\n.field-radio-wrapper .form-radio:checked + label {\n  color: #109CF1;\n}\n\n@media (min-width: 768px) {\n  #sendModal .modal-dialog {\n    width: 250px;\n  }\n}\n\n#sendModal .modal-dialog {\n  width: 250px;\n}\n\n.grey {\n  background-color: #DFE5F0;\n  padding-left: 10px;\n}\n\n.field-wrapper.datePickerBox:after {\n  top: 15px;\n}\n\n.bsDatepicker {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2ZlZS11cGRhdGUvZmVlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2ZlZS11cGRhdGUvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQ0NmOztBRENFO0VBQ0Usb0NBQW9DO0FDRXhDOztBREFFO0VBQ0UsYUFBYTtBQ0dqQjs7QURERTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQ0luQjs7QURGRTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUNLbkI7O0FESEc7RUFDQyxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FDTWxCOztBREpFO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDZCxZQUFXO0FDT2pCOztBRExHO0VBQ0ksYUFBYTtBQ1FwQjs7QURORTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQ1N0Qjs7QURQRTtFQUNFLGFBQWE7QUNVakI7O0FEUkU7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FDV2xDOztBRFRFO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQ1lwQjs7QURWRTtFQUNFLGlCQUFpQjtFQUNqQiwrQ0FBNEM7RUFDMUMsdURBQW9EO0VBQ3BELG9EQUFpRDtBQ2F2RDs7QURYRTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDMUIsc0JBQUE7RUFDQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUNjOUM7O0FEWEU7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2YsaUJBQWlCO0FDY3BCOztBRFhFO0VBQ0csV0FBVztFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUEwQztBQ2M5Qzs7QURaRTtFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZixxQkFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUNjdEI7O0FEVkU7RUFDQSxrQkFBaUI7QUNhbkI7O0FEVkU7O0lDY0U7O0FEWEY7RUFDRSwrQkFBK0I7QUNhbkM7O0FEWEU7RUFDRSxZQUFZO0FDY2hCOztBRFpFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQ2V0Qjs7QURYRTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FDY2hCOztBRFpFO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQ2V2Qjs7QURiRTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDckIsZUFBZTtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQ2dCaEI7O0FEZEU7RUFDQSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQ2lCbkI7O0FEZkU7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FDa0JuQjs7QURoQkU7RUFDRSxVQUFVO0FDbUJkOztBRGpCRTtFQUNFLFVBQVU7QUNvQmQ7O0FEbEJFO0VBQ0UsVUFBVTtBQ3FCZDs7QURuQkU7RUFDRSxVQUFVO0FDc0JkOztBRHBCRTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2pCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWM7QUN1QmhCOztBRHJCRTtFQUVBLGdCQUFnQjtFQUNkLGVBQWU7RUFDakIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FDdUJyQjs7QURyQkU7RUFDRSxnQkFBZ0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQ3dCaEI7O0FEckJFO0VBQ0UsWUFBWTtBQ3dCaEI7O0FEdEJFO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUN5QmpDOztBRHZCRTtFQUNFLFlBQVk7QUMwQmhCOztBRHhCRTtFQUNFLFlBQVc7QUMyQmY7O0FEWkU7RUFDRSxrQkFBa0I7QUNldEI7O0FEYkUsa0JBQUE7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUNwQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNyQixrQkFBa0I7QUNnQnBCOztBRGRFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0NBQWdDO0FDaUJwQzs7QURmRTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUNrQmhCOztBRGhCRTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1QsYUFBYTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FDbUJ0Qjs7QURqQkU7RUFDQSxtQkFBbUI7QUNvQnJCOztBRGxCRTtFQUNJLGdCQUFnQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQ3FCcEI7O0FEbkJFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7QUNzQmxCOztBRHBCRTtFQUNBLG1CQUFtQjtBQ3VCckI7O0FEckJFO0VBQ0UsY0FBYztBQ3dCbEI7O0FEdEJFO0VBQ0EsbUJBQW1CO0FDeUJyQjs7QUR2QkU7RUFDRSxjQUFjO0FDMEJsQjs7QUR4QkU7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0FDMkJsQzs7QUR6QkU7RUFDRSxVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGdDQUFnQztBQzRCcEM7O0FEMUJFO0VBQ0UsZ0JBQWdCO0FDNkJwQjs7QUQzQkU7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FDOEJ0Qjs7QUQ1QkU7RUFDRSxnQkFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFDRjtBQzhCRjs7QUQ3QkU7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQ2dDZDs7QUQ5QkU7RUFFRSxrQkFBa0I7QUNnQ3RCOztBRDlCRTtFQUNFLFdBQVc7QUNpQ2Y7O0FEL0JFO0VBQ0UsV0FBVTtBQ2tDZDs7QURoQ0U7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUNtQ2hCOztBRGpDRTtFQUNFLFlBQVk7QUNvQ2hCOztBRGxDRTtFQUNDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNxQ3JCOztBRG5DRTtFQUNFLCtCQUErQjtBQ3NDbkM7O0FEbkNFO0VBQ0UsZ0JBQWdCO0FDc0NwQjs7QURwQ0U7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtBQ3VDdkI7O0FEckNFO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQ0o7QUN1Q0Y7O0FEckNFO0VBQ00sMkNBQTJDO0VBQzdDLHlCQUF5QjtBQ3dDL0I7O0FEdENFO0VBQ0ksY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FDeUN2Qjs7QUR2Q0U7RUFDRSxhQUFhO0FDMENqQjs7QUR4Q0U7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGFBQWE7QUMyQ2pCOztBRHpDRTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtBQzRDbkI7O0FEMUNFO0VBQ0UscUJBQXFCO0VBQ25CLGVBQWU7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUM2Q2xCOztBRDNDRTtFQUNBLGlCQUFpQjtBQzhDbkI7O0FENUNFO0VBQ0UsZ0JBQWdCO0FDK0NwQjs7QUQ3Q0U7RUFDRSwrQkFBK0I7QUNnRG5DOztBRDlDRTtFQUNFLFdBQVc7QUNpRGY7O0FEL0NFO0VBQ0UsV0FBVztBQ2tEZjs7QURoREU7RUFDRSxZQUFZO0FDbURoQjs7QURqREU7RUFDRSxZQUFXO0FDb0RmOztBRGxERTtFQUNFLFlBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FDcUR0Qjs7QURuREU7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FDc0R0Qjs7QURuREU7RUFDRSxZQUFZO0FDc0RoQjs7QURwREU7RUFDRSw4QkFBOEI7QUN1RGxDOztBRHJERTtFQUNFLFdBQVU7QUN3RGQ7O0FEdERFO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQ3lEbEI7O0FEdkRFO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQzBEbEI7O0FEdkRFO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQzBEbEI7O0FEeERFO0VBQ0UsZ0JBQWdCO0FDMkRwQjs7QUR6REU7RUFDRSxnQkFBZ0I7QUM0RHBCOztBRDFERTtFQUNFLFdBQVc7QUM2RGY7O0FEM0RFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQzhEdEI7O0FENURFO0VBQ0UsNkJBQTZCO0FDK0RqQzs7QUQ3REU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDa0dFOztBRDdESDtFQUNHLGVBQWU7QUMrRG5COztBRDdERTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDYixnQkFBZ0I7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQ2dFM0I7O0FEOURFO0VBQ0UsY0FBYztBQ2lFbEI7O0FEL0RFO0VBQ0UsbUJBQW1CO0FDa0V2Qjs7QURoRUU7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2QsYUFBYTtFQUNiLCtDQUF1QztFQUF2Qyx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7QUNtRXpCOztBRGpFRTtFQUNJLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztBQ29FakI7O0FEbEVFO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3RCLHlCQUF5QjtBQ3FFM0I7O0FEbEVFO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtBQ3FFbkM7O0FEbkVFO0VBQ0ksY0FBZTtFQUNmLGdCQUFnQjtFQUNmLGVBQWM7RUFDakIsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUNzRWpDOztBRHBFRTs7RUFFRSxtQkFBbUI7QUN1RXZCOztBRHJFRTs7RUFFRSx5QkFBeUI7QUN3RTdCOztBRHRFRTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQ3lFbkI7O0FEdkVFO0VBQ0UsV0FBVztBQzBFZjs7QUR4RUU7RUFDRSxhQUFhO0FDMkVqQjs7QUR6RUU7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FDNEVyQjs7QUQxRUU7RUFDSSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGNBQWM7RUFDZCxvQ0FBeUQ7RUFDeEQsaUNBQWlDO0VBQ2xDLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQzZFdEI7O0FEM0VFO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUM4RW5COztBRDVFRTtFQUNFLGFBQWE7QUMrRWpCOztBRDdFRTtFQUNFLGFBQWE7QUNnRmpCOztBRDlFRTtFQUNFLG9CQUFvQjtBQ2lGeEI7O0FEL0VFO0VBQ0UsaUJBQWdCO0FDa0ZwQjs7QURoRkc7RUFDRyxxQ0FBcUM7RUFDckMsbUJBQW1CO0FDbUZ6Qjs7QURqRkk7O0VBRUUsV0FBVztBQ29GakI7O0FEbEZJO0VBQ0EsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7QUNxRnZCOztBRG5GRztFQUNDLGdDQUFnQztBQ3NGcEM7O0FEcEZFO0VBQ0UsVUFBUztBQ3VGYjs7QURyRkU7RUFDQyxnQkFBZ0I7RUFDakIsZUFBZTtFQUNmLHFCQUFBO0VBQ0Esc0JBQXNCO0VBQ3RCLGNBQWM7QUN3RmhCOztBRHRGRTtFQUNBLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQUE7RUFDQSxzQkFBc0I7RUFDdEIsY0FBYztBQ3lGaEI7O0FEdkZFO0VBRUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQ3lGcEI7O0FEdkZFO0VBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0VDMEZ4QjtBQUNGOztBRHhGRTtFQUNHLGFBQWE7QUMyRmxCOztBRHpGRztFQUNDLGFBQWE7RUFDYixrQkFBa0I7QUM0RnRCOztBRDFGRTtFQUNJLGFBQWE7QUM2Rm5COztBRDFGRTtFQUNFLHFCQUFxQjtBQzZGekI7O0FEMUZFO0VBQ0UsV0FBVztBQzZGZjs7QUQzRkU7RUFDRSxXQUFXO0FDOEZmOztBRDVGRTtFQUNFLDhCQUE4QjtBQytGbEM7O0FEN0ZFO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQ2dHcEI7O0FEOUZFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixXQUFXO0FDaUdmOztBRC9GRTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0FDa0dsQjs7QURoR0U7RUFDRSxVQUFVO0FDbUdkOztBRGpHRTtFQUNFLFVBQVU7QUNvR2Q7O0FEbEdFO0VBQ0UsVUFBVTtBQ3FHZDs7QURsR0U7RUFDRSxVQUFVO0FDcUdkOztBRG5HRTtFQUNFLFVBQVU7QUNzR2Q7O0FEcEdFO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQ3VHckI7O0FEckdFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7QUN3R2xCOztBRHRHRTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2pCLFdBQVc7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQ3lHbEI7O0FEdkdFO0VBQ0UsaUJBQWlCO0FDMEdyQjs7QUR4R0U7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7QUMyR2Y7O0FEekdFO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0FDNEdmOztBRDFHRTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsV0FBVztBQzZHZjs7QUQxR0U7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7QUM2R2Y7O0FEM0dFO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0FDOEdmOztBRDVHRTtFQUNDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FDK0dyQjs7QUQ3R0U7RUFDRSxZQUFZO0FDZ0hoQjs7QUQ5R0U7RUFFTSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUNnSHhCOztBRHhIRTtFQVdNLDJDQUEyQztFQUMzQyx5QkFBeUI7QUNpSGpDOztBRDlHRTtFQUNNLFdBQVc7RUFDWCxZQUFZO0VBRVosdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQ2dIM0I7O0FEOUdPO0VBQ0UsWUFBWTtBQ2lIckI7O0FEL0dHO0VBQ0ssY0FBYztFQUNkLFFBQU87QUNrSGY7O0FEaEhJO0VBQ0UsYUFBWTtBQ21IbEI7O0FEakhJO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQ29IeEI7O0FEbEhFO0VBQ0UsK0NBQTRDO0VBQzVDLHVEQUFvRDtFQUNwRCxvREFBaUQ7RUFDakQsbUJBQW1CO0FDcUh2Qjs7QURuSEE7RUFDRSxvQkFBb0I7QUNzSHRCOztBRHBIQTtFQUNFLGdCQUFnQjtBQ3VIbEI7O0FEckhBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQ3dIbEI7O0FEdEhBO0VBRUU7SUFDRSxZQUFZO0VDd0hkO0FBQ0Y7O0FEdEhBO0VBQ0UsWUFBWTtBQ3lIZDs7QUR0SEE7O0VBRUksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUN5SHZCOztBRHRIQTtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUN5SGQ7O0FEdEhBO0VBQ0ksc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQ3lIdkI7O0FEdEhBO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixtQkFBbUI7QUN5SHZCOztBRHRIQTtFQUNJLHlCQUF5QjtBQ3lIN0I7O0FEdEhBO0VBQ0ksbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsV0FBVztBQ3lIZjs7QUR0SEE7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0FDeUhaOztBRHRIQTtFQUNJLGNBQWE7QUN5SGpCOztBRHJIQTtFQUVFO0lBQ0UsWUFBWTtFQ3VIZDtBQUNGOztBRHJIQTtFQUNFLFlBQVk7QUN3SGQ7O0FEbEhBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQ3FIcEI7O0FBeGtDQTtFQUNJLFNBQVM7QUEya0NiOztBQXprQ0E7RUFDSSxlQUFlO0FBNGtDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZlZS1tb2R1bGUvZmVlLXVwZGF0ZS92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIGJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAud2hpdGVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgIC5zZWxlY3R7XG4gICAgcGFkZGluZzogN3B4IDE3cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgfVxuICAuaW5wdXR7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGhlaWdodDozNXB4O1xuICAgIH1cbiAgIGlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsYnV0dG9uOmZvY3Vze1xuICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICB9XG4gIC5wYWdlX2hlYWRpbmc+cHtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZGlzcGxheXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAudzk4e1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuaGVhZF9wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cbiAgLnRhYmxlX2hlYWRpbmd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTVGMDtcbiAgIC8qIHBhZGRpbmc6IDEwcHggMHB4OyovXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICBsaW5lLWhlaWdodDogMzVweDtcbiAgfVxuICBcbiAgLnRhYmxlX2JvZHl7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC50YWJsZV9ib2R5PmRpdntcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4MDdDN0M7XG4gICAvKiBwYWRkaW5nOiA1cHggMHB4OyovXG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIFxuICB9XG4gIFxuICAubXIxMHtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIH1cbiAgXG4gIC8qLmxlYXZlX2NhdCAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmxlYXZlX2NhdCAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH0qL1xuICAuZmVlX3VwMSAudGFibGVfYm9keT5kaXYsLmZlZV91cDEgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjAwcHgpIC8gNik7XG4gIH1cbiAgLmZlZV91cDEgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLmZlZV91cDEgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5mZWVfdXAxIC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuZmVlX3VwMSAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiBcbiAgXG4gIC5ncm91cDE4e1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucHQxNXtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb257XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiBzZWxlY3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwNzlGRjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzIwe1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzEwe1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzUwe1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzQwe1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLm51bWJlcntcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46MHB4IDRweDtcbiAgfVxuICAuYWN0aXZlX2NpcmNsZXtcbiAgXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6MnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OUZGO1xuICB9XG4gIC5uZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDA3OUZGO1xuICBcbiAgfVxuICAudzQ1MHtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbiAgLndoaXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyN3B4KTtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI0VkZWRlZDtcbiAgfVxuICAud2lkMTYwe1xuICAgIHdpZHRoOiAxNzVweDtcbiAgfVxuICAud2lkMjAwe1xuICAgIHdpZHRoOjIwMHB4O1xuICB9XG4gIC8vIC5tYWduaWZ5aW5nLWdsYXNze1xuICAvLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9WZWN0b3IxLnBuZycpO1xuICAvLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IGNlbnRlcjtcbiAgLy8gICB0ZXh0LWluZGVudDogMTBweDtcbiAgLy8gfVxuICAvLyAvKmVtcHR5IHBhZ2Ugc3RhcnQqL1xuICAvLyAuZW1wdHlfaW1nPmltZ3tcbiAgLy8gICB3aWR0aDogOTAlO1xuICAvLyAgIGhlaWdodDogYXV0bztcbiAgLy8gICBtYXJnaW46MHB4IGF1dG87XG4gIC8vICAgbWFyZ2luLXRvcDogMjBweDtcbiAgLy8gfVxuICAuZW1wdHlfaW1ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAvKmVtcHR5IHBhZ2UgZW5kcyovXG4gIC5mZWVfZHVle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNFNkE4MEI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICAucGFnZV9oZWFkaW5nMntcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVGMUY0O1xuICB9XG4gIC5wYWRkaW5nM3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG4gIC5ib3h7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJveDF7XG4gIGJhY2tncm91bmQ6ICNFRkY5RkY7XG4gIH1cbiAgLm5hbWV7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC52YWx1ZXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICB9XG4gIC5ib3gye1xuICBiYWNrZ3JvdW5kOiAjRTBGRkVEO1xuICB9XG4gIC5ib3gyIC52YWx1ZXtcbiAgICBjb2xvcjogIzA3QTg0QTtcbiAgfVxuICAuYm94M3tcbiAgYmFja2dyb3VuZDogI0ZGRURFODtcbiAgfVxuICAuYm94MyAudmFsdWV7XG4gICAgY29sb3I6ICNGQzU4MjQ7XG4gIH1cbiAgLnR3MTV7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFRUYxRjQ7XG4gIH1cbiAgLnR3ODV7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjREZFNUYwO1xuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjREZFNUYwO1xuICB9XG4gIC5tYXJ0e1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gIH1cbiAgLnJlZF9je1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI0ZBNTE0NjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLnJlZF9jX3RleHR7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJweFxuICB9XG4gIC5wb3NpdGlvbl9je1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjUlO1xuICB9XG4gIC5zcGFjZTV7XG4gICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmZlZV91cDIgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5mZWVfdXAyIC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAuZmVlX3VwMiAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDIpLC5mZWVfdXAyIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMil7XG4gICAgd2lkdGg6NTBweDtcbiAgfVxuICAuZmVlX3VwMiAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDQpLC5mZWVfdXAyIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoNCl7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5mZWVfdXAyIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5mZWVfdXAyIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuICAuZmVlX3VwMiAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLmZlZV91cDIgLnRhYmxlX2JvZHk+ZGl2LC5mZWVfdXAyIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDQ1MHB4KSAvIDUpO1xuICB9XG4gIFxuICAuc3BhY2U3e1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgLmRpdjh7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0RGRTVGMDtcbiAgfVxuICAubmF2LWl0ZW0gLm5hdi1saW5re1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweFxuICB9XG4gIFxuICAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgICAgbWFyZ2luOiAtMXJlbSAyLjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC53MTV7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmxpc3Q+bGl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA3cHggMHB4O1xuICAgIG1hcmdpbjogN3B4IDBweDtcbiAgfVxuICAubGlzdD5saT5hPnNwYW57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgLmxpc3Q+bGkgaW1ne1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfSBcbiAgLnNwYWNlOHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5mZWVfdXAzIC50YWJsZV9ib2R5PmRpdiwuZmVlX3VwMyAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MDBweCkgLyA0KTtcbiAgfVxuICAuZmVlX3VwMyAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDEpLC5mZWVfdXAzIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMSl7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLmZlZV91cDMgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5mZWVfdXAzIC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAuZmVlX3VwMyAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuZmVlX3VwMyAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbiAgLmZlZV91cDMgLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg4KSwuZmVlX3VwMyAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDgpe1xuICAgIHdpZHRoOjE1MHB4O1xuICB9XG4gIC5mZWVfdXAzIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoMyksLmZlZV91cDMgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgzKXtcbiAgICB3aWR0aDoxNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuZmVlX3VwMyAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDMpLC5mZWVfdXAzIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMyl7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5mZWVfdXA0IC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5mZWVfdXA0IC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuICAuZmVlX3VwNCAudGFibGVfYm9keT5kaXYsLmZlZV91cDQgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjAwcHgpIC82KTtcbiAgfVxuICAuZmVlX3VwNCAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDEpLC5mZWVfdXA0IC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMSl7XG4gICAgd2lkdGg6NTBweDtcbiAgfVxuICAuY2xlYXJlZHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGJhY2tncm91bmQ6ICMzQUQ2NjU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc3R5bGU6IDQwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG4gIC5wZW5kaW5ne1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgYmFja2dyb3VuZDogI0YxQjkyNztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zdHlsZTogNDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgXG4gIC5kaXNob25vdXJlZHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGRjcwNzA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc3R5bGU6IDQwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG4gIC5zcGFjZTh7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuc3BhY2U5e1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gIH1cbiAgLmZlZV91cDUgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLmZlZV91cDUgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cbiAgLmZlZV91cDUgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5mZWVfdXA1IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuZmVlX3VwNSAudGFibGVfYm9keT5kaXYsLmZlZV91cDUgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNzBweCkgLzQpO1xuICB9XG4gIC8qLnVucGFpZF9ke1xuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGRjcwNzA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc3R5bGU6IDQwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG4gIC5wcGFpZF9ke1xuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGMUI5Mjc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc3R5bGU6IDQwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG4gIC5wYWlkX2R7XG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgYmFja2dyb3VuZDogIzNBRDY2NTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zdHlsZTogNDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH0qL1xuICBcbiAudG9vbHRpcDF7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC50b29sdGlwMSAudG9vbHRpcHRleHQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycHggNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwO1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMUYzRjY7XG4gIH1cbiAgLnRvb2x0aXAxIC50b29sdGlwdGV4dCAuYmx1ZXtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgfVxuICAudG9vbHRpcDE6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5jaGVja2JveCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gICAgICBncmlkLWdhcDogMC41ZW07XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHdpZHRoOiAwZW07XG4gICAgICBoZWlnaHQ6IDBlbTtcbiAgICB9XG4gIC5jaGVja2JveF9fY29udHJvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgd2lkdGg6IDAuNWVtO1xuICAgIGhlaWdodDogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4xZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNCQkIyQjI7XG4gIFxuICB9XG4gIC5jaGVja2JveF9faW5wdXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjaGVja2JveFwiO1xuICB9XG4gIC5jaGVja2JveF9fY29udHJvbCBzdmcge1xuICAgICAgY29sb3I6ICAjMDA4NGY2O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICBzdHJva2Utd2lkdGg6NDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluIDI1bXM7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgfVxuICAuY2hlY2tib3hfX2lucHV0IGlucHV0OmNoZWNrZWRcbiAgICsgLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAuY2hlY2tib3hfX2lucHV0IGlucHV0OmNoZWNrZWRcbiAgICsgLmNoZWNrYm94X19jb250cm9sICB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbiAgfVxuICAubW9kYWwtdGl0bGV7XG4gICAgY29sb3I6ICMyQjI2MjY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLndpZDEwMHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICB0ZXh0YXJlYTpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIC5tb2RhbCB0ZXh0YXJlYXtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2NhbC5zdmcpIG5vLXJlcGVhdDtcbiAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLnB0MTB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnB0MTAxe1xuICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gIH1cbiAgIGlucHV0W3R5cGU9XCJkYXRlXCJdOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG4gICAgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXM6YmVmb3JlLFxuICAgIGlucHV0W3R5cGU9XCJkYXRlXCJdOnZhbGlkOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgIH1cbiAgICAub3V0dGVyX2ZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA0cHggMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjREZFNUYwO1xuICB9XG4gICAub3V0dGVyX2ZsZXg6bGFzdC1jaGlsZHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTNFRTtcbiAgfVxuICAudzI1e1xuICAgIHdpZHRoOjUwJTtcbiAgfVxuICAubmFtZTF7XG4gICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC8qbGluZS1oZWlnaHQ6IDE4cHg7Ki9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnZhbHVlMXtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAvKmxpbmUtaGVpZ2h0OiAxOHB4OyovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC5mZWVfdXAyX3Njcm9sLC5mZWVfdXAzX3Njcm9sLC5mZWVfdXA1X3Njcm9se1xuXG4gICAgbWF4LWhlaWdodDogNDB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAjZGlzY291bnRJbnN0YWxsTW9kZWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgIG1hcmdpbjogMS43NXJlbSBhdXRvO1xuICB9XG4gIH1cbiAgI2Rpc2NvdW50SW5zdGFsbE1vZGVsIC5tb2RhbC1kaWFsb2cge1xuICAgICB3aWR0aDogMTAwMHB4O1xuICAgfVxuICAgLmZlZV91cDYsLmZlZV91cDd7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiAgI29uZTEsI3R3bzEsI3RocmVlMXtcbiAgICAgIGhlaWdodDogMjkwcHg7XG4gIH1cbiAgXG4gIC5mZWVfdXA4IC50YWJsZV9ib2R5PmRpdiwuZmVlX3VwOCAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xuICB9XG4gIFxuICAuZmVlX3VwNyAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDEpLC5mZWVfdXA3IC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMSl7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLmZlZV91cDcgLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCgyKSwuZmVlX3VwNyAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDIpe1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC5mZWVfdXA3IC50YWJsZV9ib2R5PmRpdiwuZmVlX3VwNyAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLzMpO1xuICB9XG4gIC53OTB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5wX25vdGV7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIC5wX25vdGU+c3BhbntcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjNzk4QUEwO1xuICB9XG4gIC5zZWMzMHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIC5zZWMyNXtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5zZWMxNXtcbiAgICB3aWR0aDogMTUlO1xuICBcbiAgfVxuICAuc2VjNzB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAuc2VjNjB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICAud2lkNTB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgfVxuICAuaGVhZF9we1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMyQjI2MjY7XG4gIH1cbiAgLmRpc19hcHB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICMzQUQ2NjU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICB3aWR0aDogOTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjRkZGN0Y3O1xuICB9XG4gIC53czIwe1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG4gIC5wYWlkMXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzNBRDY2NTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogODhweDtcbiAgfVxuICAuZGlzY3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzEwOWNmMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogODhweDtcbiAgfVxuICAucHBhaWQxe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjMjRjNGQwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHdpZHRoOiA4OHB4O1xuICB9XG4gIFxuICAub3ZlcmR1ZTF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmNDQxNjc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgd2lkdGg6IDg4cHg7XG4gIH1cbiAgLmR1ZTF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZjhmMzY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgd2lkdGg6IDg4cHg7XG4gIH1cbiAgLndpZDI0MHtcbiAgIHdpZHRoOiAxNDBweDtcbiAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAucmlnaHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5uYXYtaXRlbSB7XG4gICAgLm5hdi1saW5rIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5tb2RhbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgIH1cbiAgICAgICAucmlnaHR7XG4gICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgfVxuICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0b3A6MTAlO1xuICAgIH1cbiAgICAubW9kYWwtaGVhZGVyOmJlZm9yZXtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gICAgLm1vZGFsLXRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMkIyNjI2O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAubWFpbi1zaGFkb3d7XG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG4ucGIxNHtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG5ie1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNoZWNrX3RleHR7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNzg3QTdEO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KVxue1xuICAjdXBkYXRlaW5zdE1vZGFsIC5tb2RhbC1kaWFsb2csI2NoZXF1ZU1vZGFsICAubW9kYWwtZGlhbG9nLCNpbnN0YWxsbWVudE1vZGFsIC5tb2RhbC1kaWFsb2d7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxufVxuI3VwZGF0ZWluc3RNb2RhbCAubW9kYWwtZGlhbG9nICwjY2hlcXVlTW9kYWwgIC5tb2RhbC1kaWFsb2csI2luc3RhbGxtZW50TW9kYWwgLm1vZGFsLWRpYWxvZ3tcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4uZmllbGQtY2hlY2tib3gtd3JhcHBlcixcbi5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW8rbGFiZWwge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcztcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW8rbGFiZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcztcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW86Y2hlY2tlZCtsYWJlbDphZnRlciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzEwOUNGMTtcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW8rbGFiZWw6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbGVmdDogOXB4O1xuICAgIHRvcDogOXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiAnJztcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW86Y2hlY2tlZCtsYWJlbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBsZWZ0OiAzcHg7XG4gICAgdG9wOiAzcHg7XG59XG5cbi5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvOmNoZWNrZWQrbGFiZWwge1xuICAgIGNvbG9yOiMxMDlDRjE7XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KVxue1xuICAjc2VuZE1vZGFsIC5tb2RhbC1kaWFsb2d7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxufVxuI3NlbmRNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLy8gLmhlYWRfcDF7XG4vLyBoZWlnaHQ6IDIwcHg7XG4vLyB9XG5cbi5ncmV5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4iLCJAaW1wb3J0IFwiLi4vZmVlLXVwZGF0ZS5jb21wb25lbnQuc2Nzc1wiO1xuLmZpZWxkLXdyYXBwZXIuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gICAgdG9wOiAxNXB4O1xufVxuLmJzRGF0ZXBpY2tlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/fee-module/fee-update/view/view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/fee-module/fee-update/view/view.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common-service */ "./src/app/services/common-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_student_services_fetch_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/student-services/fetch-student.service */ "./src/app/services/student-services/fetch-student.service.ts");
/* harmony import */ var _components_student_module_student_fee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/student-module/student_fee.service */ "./src/app/components/student-module/student_fee.service.ts");
/* harmony import */ var _services_student_services_post_student_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/student-services/post-student-data.service */ "./src/app/services/student-services/post-student-data.service.ts");
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









let ViewComponent = /** @class */ (() => {
    let ViewComponent = class ViewComponent {
        constructor(route, http, auth, commonService, fetchService, feeService, postService) {
            this.route = route;
            this.http = http;
            this.auth = auth;
            this.commonService = commonService;
            this.fetchService = fetchService;
            this.feeService = feeService;
            this.postService = postService;
            this.academicYrList = [];
            this.schoolModel = false;
            this.academic_yr_id = -1;
            this.stdFeeDataList = [];
            this.masterSelected = false;
            this.paymentModes = [];
            this.t_p_amount = 0;
            this.t_d_amount = 0;
            this.paymentPopUpJson = {
                immutable_amount: 0,
                paying_amount: 0,
                paid_date: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD'),
                payment_mode: 'Cash',
                reference_no: '',
                remarks: "",
                receipt_no: '',
                update_reason: '',
                selectedPdcId: '',
                due_amount: 0,
                pdcSelectedForm: {
                    bank_name: '',
                    cheque_amount: 0,
                    cheque_date: moment__WEBPACK_IMPORTED_MODULE_5__().format("YYYY-MM-DD"),
                    cheque_no: '',
                    pdc_cheque_id: ''
                },
                genPdcAck: false,
                sendPdcAck: false,
                genFeeRecipt: false,
                emailFeeRecipt: false
            };
            this.chequePdcList = [];
            this.pdcAddForm = {
                bank_name: '',
                cheque_amount: '',
                cheque_date: '',
                cheque_id: 0,
                cheque_no: '',
                cheque_status: '',
                cheque_status_key: 0,
                clearing_date: '',
                institution_id: sessionStorage.getItem('institute_id'),
                student_id: 0,
                country_id: -1
            };
            this.isAllChequeSelected = false;
            this.countryDetails = [];
            this.newPdcArr = [];
            this.discountInstallList = [];
            this.max_disc_apply = 0;
            this.discountReasonList = [];
            this.discountPopUpForm = {
                type: "1",
                value: 0,
                reason: "-1",
                discountAmount: 0
            };
            this.discHistoryList = [];
            this.activeSession = '';
            this.pdcStatus = [{ data_key: '1', data_value: 'Pending' }, { data_key: '2', data_value: 'dishonoured' }];
            this.isTemplateLinkWithCourseAndStandard = false;
            this.currencySymbol = "";
            this.standardSectionMap = [];
            this.courseList = [];
            this.masterCourseList = [];
            this.batchList = [];
            this.standardList = [];
            this.feeTypeList = [];
            this.addInstall = {
                acad_yr_id: -1,
                f_type_id: -1,
                f_amount: 0,
                d_date: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD'),
                standard_id: -1,
                course_id: -1,
                master_course: '',
                subject_id: -1,
                f_schld_id: -1,
                immutable_due_date: ''
            };
            this.isDiscountRemove = false;
            this.paidInstallArr = [];
            this.student_country_id = -1;
            this.is_tax_enabled = false;
            this.paymentMode = 0;
            this.isUpdateInstall = false;
            this.isUpdatePaidInstall = false;
            this.isSelectedAllPaidInstall = false;
            this.isAddInstallClicked = false;
            this.isUpdatePaymentClicked = false;
            this.isApplyDiscClicked = false;
            this.isRemoveDiscClicked = false;
            this.isUpdateInstallClicked = false;
            this.fullDiscountInstallArr = [];
            this.institute_id = sessionStorage.getItem("institute_id");
            this.isTemplateLinkWithCourseAndStandard = sessionStorage.getItem("is_fee_struct_linked") == 'true';
            this.activeSession = 'History';
            this.is_tax_enabled = sessionStorage.getItem('enable_tax_applicable_fee_installments') == '1';
        }
        ngOnInit() {
            this.schoolModel = this.auth.schoolModel.value;
            this.institute_id = sessionStorage.getItem("institute_id");
            this.route.params.subscribe(routeParams => {
                this.student_id = routeParams.std_id;
                this.fetchAcademicYearList();
            });
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
        }
        fetchAcademicYearList() {
            this.auth.showLoader();
            this.academicYrList = [];
            this.chequePdcList = [];
            this.discHistoryList = [];
            let url = "/api/v1/academicYear/all/" + this.institute_id;
            this.http.getData(url).subscribe((res) => {
                this.academicYrList = res;
                this.fetchDefaultAY();
                this.fetchStdFeeData(this.academic_yr_id);
                this.auth.hideLoader();
            }, (error) => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', 'Something went wrong. Please try after sometime!');
            });
        }
        fetchDefaultAY() {
            this.academic_yr_id = -1;
            if (this.academicYrList != null) {
                for (let data of this.academicYrList) {
                    if (data.default_academic_year == 1) {
                        this.academic_yr_id = data.inst_acad_year_id;
                        break;
                    }
                }
            }
        }
        fetchStdFeeData(academic_yr) {
            this.chequePdcList = [];
            this.discHistoryList = [];
            this.auth.showLoader();
            let url = "/api/v1/studentWise/fee/" + this.institute_id + "/students/" + this.student_id + "/" + academic_yr;
            this.http.getData(url).subscribe((res) => {
                this.stdFeeDataList = res.result;
                this.currencySymbol = this.stdFeeDataList.currency_code;
                this.student_country_id = this.stdFeeDataList.country_id;
                this.checkUncheckAll();
                this.academic_yr_id = academic_yr;
                this.auth.hideLoader();
            }, (error) => {
                this.auth.hideLoader();
                this.stdFeeDataList = [];
                this.commonService.showErrorMessage('error', '', 'Something went wrong. Please try after sometime!');
            });
        }
        checkUncheckAll() {
            this.paidInstallArr = [];
            this.fullDiscountInstallArr = [];
            for (var i = 0; i < this.stdFeeDataList.a_install_li.length; i++) {
                let data = this.stdFeeDataList.a_install_li[i];
                if (this.stdFeeDataList.a_install_li[i].p_status != 'Y') {
                    this.stdFeeDataList.a_install_li[i].isSelected = this.masterSelected;
                }
                else {
                    this.stdFeeDataList.a_install_li[i].isSelected = false;
                    this.paidInstallArr.push(this.stdFeeDataList.a_install_li[i].f_schld_id);
                }
                if ((data.initial_amount + data.tax_amount) == data.disc_amount) {
                    this.fullDiscountInstallArr.push(this.stdFeeDataList.a_install_li[i].f_schld_id);
                }
            }
        }
        openPaymentPopup() {
            if (this.validatePaymentPopup()) {
                this.isUpdatePaidInstall = false;
                $('#updateinstModal').modal('show');
                this.getPaymentModes();
            }
        }
        validatePaymentPopup() {
            this.flushPaymentPopUpData();
            let is_intall_not_selected = true;
            let t_amount = 0;
            let t_selected_install = 0;
            for (let data of this.stdFeeDataList.a_install_li) {
                if (data.isSelected) {
                    is_intall_not_selected = false;
                    t_amount += data.d_amount;
                    t_selected_install++;
                }
                this.t_p_amount = t_amount;
                this.paymentPopUpJson.paying_amount = t_amount;
                this.paymentPopUpJson.immutable_amount = t_amount;
                this.t_selected_install = t_selected_install;
            }
            if (is_intall_not_selected) {
                this.commonService.showErrorMessage('info', '', 'Please select at least one installment!');
                return;
            }
            return true;
        }
        getPaymentModes() {
            this.http.getData('/api/v1/masterData/type/PAYMENT_MODES').subscribe((res) => {
                console.log(res);
                this.paymentModes = res;
            }, err => {
                console.log(err);
            });
        }
        doPayment() {
            this.auth.showLoader();
            this.isUpdatePaymentClicked = true;
            let is_valid_payment = this.feeService.validatePaymentDetailsV2(this.paymentPopUpJson);
            if (!is_valid_payment) {
                this.isUpdatePaymentClicked = false;
                this.auth.hideLoader();
                return;
            }
            let obj = this.preparedPaymentPayload();
            this.postService.payPartialFeeAmount(obj).subscribe(res => {
                // this.btnPayment.nativeElement.disabled = false;
                this.auth.hideLoader();
                this.commonService.showErrorMessage('success', '', 'Fee details has been updated');
                if (this.paymentPopUpJson.genFeeRecipt) {
                    this.generateFeeRecipt(res);
                }
                if (this.paymentPopUpJson.emailFeeRecipt) {
                    this.emailFeeReceipt(res);
                }
                this.flushPaymentPopUpData();
                this.fetchStdFeeData(this.academic_yr_id);
            }, err => {
                // this.btnPayment.nativeElement.disabled = false;
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', err.error.message);
            });
            this.isUpdatePaymentClicked = false;
        }
        preparedPaymentPayload() {
            let obj = {
                chequeDetailsJson: {},
                paid_date: "",
                paymentMode: "",
                reference_no: "",
                remarks: "",
                studentFeeReportJsonList: [],
                student_id: this.student_id,
            };
            let seletectedInstall = [];
            for (let data of this.stdFeeDataList.a_install_li) {
                if (data.isSelected) {
                    seletectedInstall.push(data);
                }
            }
            if (this.paymentPopUpJson.payment_mode == "Cheque/PDC/DD No." && this.paymentPopUpJson.pdcSelectedForm != '') {
                this.paymentPopUpJson.pdcSelectedForm.cheque_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.paymentPopUpJson.pdcSelectedForm.cheque_date).format('YYYY-MM-DD');
                this.paymentPopUpJson.pdcSelectedForm.pdc_cheque_id = this.paymentPopUpJson.pdcSelectedForm.pdc_cheque_id;
                obj.chequeDetailsJson = this.paymentPopUpJson.pdcSelectedForm;
            }
            else {
                obj.chequeDetailsJson = {};
            }
            obj.paid_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.paymentPopUpJson.paid_date).format('YYYY-MM-DD');
            obj.paymentMode = this.paymentPopUpJson.payment_mode;
            obj.reference_no = this.paymentPopUpJson.reference_no;
            obj.remarks = this.paymentPopUpJson.remarks;
            obj.studentFeeReportJsonList = this.makePaymentInstallList(seletectedInstall, this.paymentPopUpJson.paying_amount);
            return obj;
        }
        makePaymentInstallList(selectedinstallArray, t_paid_amount) {
            let install = [];
            selectedinstallArray = selectedinstallArray.sort((f, s) => {
                return f.install_no - s.install_no;
            });
            selectedinstallArray.forEach(element => {
                if (t_paid_amount > 0) {
                    let obj = {
                        due_date: '',
                        fee_schedule_id: '',
                        paid_full: 'N',
                        previous_balance_amt: 0,
                        total_amt_paid: 0,
                    };
                    if (element.d_amount < t_paid_amount) {
                        obj.previous_balance_amt = element.d_amount;
                        obj.total_amt_paid = element.d_amount;
                        obj.paid_full = 'Y';
                        t_paid_amount = t_paid_amount - element.d_amount;
                    }
                    else if (element.d_amount > t_paid_amount) {
                        obj.previous_balance_amt = element.d_amount;
                        obj.total_amt_paid = t_paid_amount;
                        obj.paid_full = "N";
                        t_paid_amount = 0;
                    }
                    else if (element.d_amount == t_paid_amount) {
                        obj.previous_balance_amt = element.d_amount;
                        obj.total_amt_paid = t_paid_amount;
                        obj.paid_full = 'Y';
                        t_paid_amount = 0;
                    }
                    obj.due_date = moment__WEBPACK_IMPORTED_MODULE_5__(element.d_date).format('YYYY-MM-DD');
                    obj.fee_schedule_id = element.f_schld_id;
                    install.push(obj);
                }
            });
            console.log(install);
            return install;
        }
        getPdcChequeList(payment_mode) {
            this.chequePdcList = [];
            if (payment_mode == 'Cheque/PDC/DD No.') {
                let obj = {
                    cheque_status: '',
                    student_id: this.student_id,
                    cheque_date_from: '',
                    cheque_date_to: ''
                };
                this.auth.showLoader();
                // this.pdcAddForm.country_id = this.instituteCountryDetObj.id;
                let url = "/api/v1/student_cheque/getAll/" + this.institute_id + "/" + this.student_id;
                this.http.postData(url, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    let temp = [];
                    res.forEach(el => {
                        let obj = { bank_name: el.bank_name, cheque_amount: el.cheque_amount, cheque_date: el.cheque_date, cheque_date_from: el.cheque_date_from, cheque_date_to: el.cheque_date_from, cheque_id: el.cheque_id, cheque_no: el.cheque_no, cheque_status: el.cheque_status, cheque_status_key: el.cheque_status_key, clearing_date: el.clearing_date, genAck: el.genAck, institution_id: el.institution_id, sendAck: el.sendAck, student_id: el.student_id, student_name: el.student_name, student_phone: el.student_phone, isSelected: false, country_id: el.country_id };
                        temp.push(obj);
                    });
                    this.chequePdcList = temp;
                    if (this.chequePdcList.length == 0) {
                        this.commonService.showErrorMessage('info', '', 'No cheque available!');
                    }
                }, err => {
                    this.chequePdcList = [];
                    this.commonService.showErrorMessage('error', '', err.error.message);
                });
            }
        }
        feePdcSelected(id) {
            let obj = {
                bank_name: '',
                cheque_amount: this.paymentPopUpJson.paying_amount,
                cheque_date: moment__WEBPACK_IMPORTED_MODULE_5__().format("YYYY-MM-DD"),
                cheque_no: '',
                pdc_cheque_id: ''
            };
            if (id === '') {
                this.paymentPopUpJson.pdcSelectedForm = obj;
                this.paymentPopUpJson.selectedPdcId = '';
            }
            else {
                this.chequePdcList.forEach(el => {
                    if (id == el.cheque_id) {
                        obj.bank_name = el.bank_name;
                        obj.cheque_amount = el.cheque_amount;
                        obj.cheque_date = moment__WEBPACK_IMPORTED_MODULE_5__(el.cheque_date).format("YYYY-MM-DD");
                        obj.cheque_no = el.cheque_no;
                        obj.pdc_cheque_id = el.cheque_id;
                        this.paymentPopUpJson.pdcSelectedForm = obj;
                        this.paymentPopUpJson.selectedPdcId = id;
                        this.paymentPopUpJson.paying_amount = el.cheque_amount;
                        obj.country_id = el.country_id;
                        return;
                    }
                });
            }
        }
        generateFeeRecipt(res) {
            this.fetchService.getFeeReceiptById(this.student_id, res.other).subscribe((res) => {
                this.downloadDocument(res);
            }, err => {
                this.commonService.showErrorMessage('error', '', err.error.message);
            });
        }
        emailFeeReceipt(res) {
            this.fetchService.emailReceiptById(this.student_id, res.other).subscribe(res => {
                this.commonService.showErrorMessage('success', '', 'Receipt has been sent to student/parent email ID');
            });
        }
        downloadDocument(res) {
            let body = res;
            let byteArr = this.commonService.convertBase64ToArray(body.document);
            let fileName = body.docTitle;
            let file = new Blob([byteArr], { type: 'application/pdf' });
            let url = URL.createObjectURL(file);
            let link = document.getElementById("payMultiReciept");
            if (link.getAttribute('href') == "" || link.getAttribute('href') == null) {
                link.setAttribute("href", url);
                link.setAttribute("download", fileName);
                link.click();
                link.setAttribute("href", "");
            }
        }
        flushPaymentPopUpData() {
            $('#updateinstModal').modal('hide');
            this.paymentPopUpJson = {
                immutableAmount: 0,
                paying_amount: 0,
                paid_date: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD'),
                payment_mode: 'Cash',
                reference_no: '',
                remarks: "",
                selectedPdcId: '',
                pdcSelectedForm: {
                    bank_name: '',
                    cheque_amount: 0,
                    cheque_date: moment__WEBPACK_IMPORTED_MODULE_5__().format("YYYY-MM-DD"),
                    cheque_no: '',
                    pdc_cheque_id: ''
                },
                genFeeRecipt: false,
                emailFeeRecipt: false
            };
            // this.isFeePaymentUpdate = false;
        }
        isOverdue(due_date) {
            return due_date < moment__WEBPACK_IMPORTED_MODULE_5__().format("YYYY-MM-DD");
        }
        isPastDate(due_date) {
            return due_date < moment__WEBPACK_IMPORTED_MODULE_5__().format("YYYY-MM-DD");
        }
        isFutureDate(date1, date2) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(date1).format("YYYY-MM-DD") >= moment__WEBPACK_IMPORTED_MODULE_5__(date2).format("YYYY-MM-DD");
        }
        fetchCountryDetails() {
            let encryptedData = sessionStorage.getItem('country_data');
            let data = JSON.parse(encryptedData);
            if (data.length > 0) {
                this.countryDetails = data;
                this.pdcAddForm.country_id = this.student_country_id;
            }
        }
        addCheque() {
            this.newPdcArr = [];
            let obj = {
                bank_name: this.pdcAddForm.bank_name,
                cheque_amount: this.pdcAddForm.cheque_amount,
                cheque_date: moment__WEBPACK_IMPORTED_MODULE_5__(this.pdcAddForm.cheque_date).format("YYYY-MM-DD"),
                cheque_id: this.pdcAddForm.cheque_id,
                cheque_no: this.pdcAddForm.cheque_no,
                cheque_status: this.pdcAddForm.cheque_status,
                cheque_status_key: this.pdcAddForm.cheque_status_key,
                clearing_date: moment__WEBPACK_IMPORTED_MODULE_5__(this.pdcAddForm.clearing_date).format("YYYY-MM-DD"),
                institution_id: sessionStorage.getItem('institute_id'),
                student_id: this.student_id,
                country_id: this.pdcAddForm.country_id
            };
            if (this.validPdc(obj)) {
                this.newPdcArr.push(obj);
                this.addPdcDataToServer();
            }
        }
        addPdcDataToServer() {
            let temp = [];
            this.newPdcArr.forEach(e => {
                let obj = { cheque_no: e.cheque_no, bank_name: e.bank_name, cheque_date: e.cheque_date, student_id: this.student_id, clearing_date: e.clearing_date, institution_id: sessionStorage.getItem('institute_id'), cheque_amount: e.cheque_amount, genAck: this.genPdcAck === true ? "Y" : "N", sendAck: this.sendPdcAck === true ? "Y" : "N", country_id: e.country_id };
                temp.push(obj);
            });
            this.newPdcArr = [];
            this.genPdcAck = false;
            this.sendPdcAck = false;
            this.auth.showLoader();
            this.postService.addChequePdc(temp).subscribe(res => {
                this.auth.hideLoader();
                this.chequePdcList = [];
                this.newPdcArr = [];
                this.pdcAddForm = { bank_name: '', cheque_amount: '', cheque_date: '', cheque_id: 0, cheque_no: '', cheque_status: '', cheque_status_key: 0, clearing_date: '', institution_id: sessionStorage.getItem('institute_id'), student_id: 0, country_id: '' };
                this.getPdcChequeList('Cheque/PDC/DD No.');
                $('#chequeModal').modal('hide');
            }, err => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', err.error.message, '');
                this.chequePdcList = [];
                this.getPdcChequeList('Cheque/PDC/DD No.');
            });
        }
        validPdc(obj) {
            if (obj.cheque_date == 'Invalid date' || obj.cheque_date == '' || obj.cheque_no.toString().length != 6 || obj.cheque_amount <= 0) {
                if (obj.cheque_date == 'Invalid date' || obj.cheque_date == '') {
                    this.commonService.showErrorMessage('error', '', "Please enter a valid cheque date");
                }
                if (obj.cheque_no.toString().length != 6) {
                    this.commonService.showErrorMessage('error', '', "Please enter a valid cheque number");
                }
                if (obj.cheque_amount <= 0) {
                    this.commonService.showErrorMessage('error', '', "Please enter a valid amount");
                }
                return false;
            }
            else {
                return true;
            }
        }
        openDiscountPopup() {
            if (this.validateDiscountPopup()) {
                this.isDiscountRemove = false;
                this.clearDiscPopUpData();
                $('#discountInstallModel').modal('show');
                this.fetchDiscountReason();
            }
        }
        validateDiscountPopup() {
            this.discountInstallList = [];
            let is_intall_not_selected = true;
            let max_disc_apply = 0;
            for (let data of this.stdFeeDataList.a_install_li) {
                if (data.isSelected) {
                    // if (data.f_type != "INSTALLMENT") {
                    //   this.commonService.showErrorMessage('info', '', 'You can only apply discount on fee type Installment!');
                    //   return;
                    // }
                    is_intall_not_selected = false;
                    max_disc_apply += data.d_amount;
                    this.discountInstallList.push(data);
                }
                this.max_disc_apply = max_disc_apply;
            }
            if (is_intall_not_selected) {
                this.commonService.showErrorMessage('info', '', 'Please select at least one installment!');
                return;
            }
            return true;
        }
        fetchDiscountReason() {
            this.auth.showLoader();
            let url = "/api/v1/discount/reason/master/all/" + this.institute_id;
            this.http.getData(url).subscribe((res) => {
                this.discountReasonList = res;
                this.auth.hideLoader();
            }, (error) => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', error.error.message);
            });
        }
        onDiscountTypeChange(event) {
            this.discountPopUpForm.value = 0;
            this.discountPopUpForm.discountAmount = 0;
            if (this.discountPopUpForm.type == "3") {
                let val = 0;
                for (let data of this.discountInstallList) {
                    val += this.isDiscountRemove ? data.disc_amount : data.d_amount;
                }
                this.discountPopUpForm.value = val;
                this.discountPopUpForm.discountAmount = val;
            }
        }
        onDiscountAmountChange(event) {
            event = Number(event);
            if (event < 0) {
                this.commonService.showErrorMessage('error', '', 'Please enter valid discount amount!');
                this.discountPopUpForm.value = 0;
                this.discountPopUpForm.discountAmount = 0;
                return;
            }
            if (this.discountPopUpForm.type == "2") {
                if (event > 100) {
                    this.commonService.showErrorMessage('error', '', 'Please enter valid discount percentage');
                    this.discountPopUpForm.value = 0;
                    this.discountPopUpForm.discountAmount = 0;
                    return;
                }
                this.discountPopUpForm.discountAmount = Math.floor(Number((this.stdFeeDataList.initial_amount * event) / 100));
            }
            else {
                this.discountPopUpForm.discountAmount = Number(this.discountPopUpForm.value);
            }
        }
        applyDiscount() {
            this.isApplyDiscClicked = true;
            this.auth.showLoader();
            let unpaidAmount = this.max_disc_apply;
            let isValid = this.feeService.checkDiscountValidations(this.discountPopUpForm, unpaidAmount, 'add');
            if (!isValid) {
                this.auth.hideLoader();
                this.isApplyDiscClicked = false;
                return false;
            }
            // Condition For discount satisfy now apply discount
            let discountInstllmentList = this.feeService.makeDiscountingJSONV2(this.discountInstallList, this.discountPopUpForm);
            if (!discountInstllmentList) {
                this.auth.hideLoader();
                this.isApplyDiscClicked = false;
                return false;
            }
            let jsonToSend = {
                student_id: this.student_id,
                discountInstllmentList: discountInstllmentList
            };
            this.feeService.addDiscountToStudent(jsonToSend).subscribe(res => {
                this.commonService.showErrorMessage('success', '', 'Discount applied successfully!');
                this.clearDiscPopUpData();
                this.fetchStdFeeData(this.academic_yr_id);
                this.getDiscountHistoryDetails();
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', err.error.message);
            });
            this.isApplyDiscClicked = false;
        }
        clearDiscPopUpData() {
            $('#discountInstallModel').modal('hide');
            this.discountPopUpForm = {
                type: "1",
                value: 0,
                reason: "-1",
                discountAmount: 0
            };
        }
        getDiscountHistoryDetails() {
            this.discHistoryList = [];
            if (this.academic_yr_id < 0) {
                this.commonService.showErrorMessage('info', '', 'Please select academic year!');
                return;
            }
            this.auth.showLoader();
            this.feeService.getDiscountHistoryV2(this.student_id, this.academic_yr_id).subscribe((res) => {
                this.discHistoryList = res != null ? res.discountInstllmentList : this.discHistoryList;
                this.checkAnyInstallIsPaid();
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', err.error.message);
            });
        }
        checkAnyInstallIsPaid() {
            for (let data of this.discHistoryList) {
                if (this.paidInstallArr.includes(data.fee_schedule_id)) {
                    data.is_paid = true;
                }
                else {
                    data.is_paid = false;
                }
                if (this.fullDiscountInstallArr.includes(data.fee_schedule_id)) {
                    data.is_paid = false;
                }
            }
        }
        addPDCPopUp() {
            this.isAddPDC = true;
            $('#chequeModal').modal('show');
            this.fetchCountryDetails();
        }
        deletePDC(data) {
            this.auth.showLoader();
            if (confirm("Are you sure,you want to delete the Cheque?")) {
                this.postService.deletePdcById(data.cheque_id).subscribe(res => {
                    this.getPdcChequeList('Cheque/PDC/DD No.');
                    this.auth.hideLoader();
                }, err => {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('error', '', err.error.message);
                });
            }
        }
        editPDC(data) {
            this.isAddPDC = false;
            this.pdcAddForm = {
                bank_name: data.bank_name,
                cheque_amount: data.cheque_amount,
                cheque_date: moment__WEBPACK_IMPORTED_MODULE_5__(data.cheque_date).format("YYYY-MM-DD"),
                cheque_id: data.cheque_id,
                cheque_no: data.cheque_no,
                cheque_status: data.cheque_status,
                cheque_status_key: data.cheque_status_key,
                clearing_date: '',
                institution_id: sessionStorage.getItem('institute_id'),
                student_id: this.student_id,
                country_id: data.country_id
            };
            $('#chequeModal').modal('show');
        }
        updateCheque() {
            this.auth.showLoader();
            let el = this.pdcAddForm;
            if (this.validPdc(el)) {
                let obj = { bank_name: el.bank_name, cheque_amount: el.cheque_amount, cheque_date: moment__WEBPACK_IMPORTED_MODULE_5__(el.cheque_date).format("YYYY-MM-DD"), cheque_id: el.cheque_id, cheque_no: el.cheque_no, cheque_status_key: el.cheque_status_key, clearing_date: moment__WEBPACK_IMPORTED_MODULE_5__(el.clearing_date).format("YYYY-MM-DD"), institution_id: sessionStorage.getItem('institute_id'), student_id: el.student_id, country_id: el.country_id };
                this.postService.updateFeeDetails(obj).subscribe(res => {
                    this.auth.hideLoader();
                    this.getPdcChequeList('Cheque/PDC/DD No.');
                    $('#chequeModal').modal('hide');
                }, err => {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('error', '', err.error.message);
                });
            }
        }
        closePDCPopUp() {
            $('#chequeModal').modal('hide');
            this.pdcAddForm = {
                bank_name: '',
                cheque_amount: '',
                cheque_date: '',
                cheque_id: 0,
                cheque_no: '',
                cheque_status: '',
                cheque_status_key: 0,
                clearing_date: '',
                institution_id: sessionStorage.getItem('institute_id'),
                student_id: 0,
                country_id: ''
            };
        }
        downloadFeeReceipt(receipt_no) {
            this.auth.showLoader();
            this.fetchService.getFeeReceiptById(this.student_id, receipt_no).subscribe((res) => {
                this.downloadDocument(res);
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', err.error.message);
            });
        }
        generatePDCAck() {
            let selectedChqueId = this.getSelectedRow(this.chequePdcList);
            if (selectedChqueId.length > 0) {
                this.fetchPDCAcknowledge(selectedChqueId.join(','), this.student_id, 'undefined');
            }
            else {
                this.commonService.showErrorMessage('error', '', 'No PDC is selected!');
            }
        }
        sendPDCAckOverEmail() {
            let selectedChqueId = this.getSelectedRow(this.chequePdcList);
            if (selectedChqueId.length > 0) {
                this.fetchPDCAcknowledge(selectedChqueId.join(','), this.student_id, "Y");
            }
            else {
                this.commonService.showErrorMessage('error', 'No PDC is selected!', '');
            }
        }
        fetchPDCAcknowledge(cheque_id, student_id, key) {
            this.auth.showLoader();
            this.postService.generateAcknowledge(cheque_id, student_id, key).subscribe(res => {
                this.auth.hideLoader();
                if (key == 'Y') {
                    this.commonService.showErrorMessage('success', '', 'Sent successfullly!');
                }
                else if (key == "undefined") {
                    this.downloadDocument(res);
                }
            }, err => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', err.error.message, '');
            });
        }
        getSelectedRow(data) {
            const temp = [];
            if (data != null && data.length > 0) {
                data.filter(element => {
                    if (element.isSelected) {
                        temp.push(element.cheque_id);
                    }
                });
            }
            return temp;
        }
        selectAllChequeList() {
            if (this.chequePdcList != null) {
                for (let data of this.chequePdcList) {
                    data.isSelected = this.isAllChequeSelected;
                }
            }
        }
        fetchFilterData() {
            if (this.schoolModel) {
                this.fetchStandardAndSection();
            }
            else if (!this.isProfessional) {
                this.fetchMCAndCourse();
            }
            else {
                this.fetchStandard();
            }
        }
        fetchStandard() {
            let url = "/api/v1/standards/standard-subject-list/" + this.institute_id + '?is_active=Y';
            this.auth.showLoader();
            this.http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.standardList = data.result;
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        fetchBatch(standard_id) {
            let url = "/api/v1/batches/" + this.institute_id + "/standard/" + standard_id;
            this.auth.showLoader();
            this.http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.batchList = data.result;
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        fetchMCAndCourse() {
            this.auth.showLoader();
            const url = "/api/v1/courseMaster/fetch/" + this.institute_id + "/all?isActiveNotExpire=Y";
            this.http.getData(url).subscribe(res => {
                this.masterCourseList = res;
                this.auth.hideLoader();
            }, err => {
                this.commonService.showErrorMessage('error', '', 'Something went wrong. Please try after sometime!');
                this.auth.hideLoader();
            });
        }
        fetchCoursesList(master_course) {
            for (let data of this.masterCourseList) {
                if (data.master_course == master_course) {
                    this.courseList = data.coursesList;
                    return;
                }
            }
        }
        fetchStandardAndSection() {
            let url = "/api/v1/courseMaster/standard-section-list/" + this.institute_id;
            this.auth.showLoader();
            this.http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.standardSectionMap = data.result;
                this.addInstall.stnd_id = this.addInstall.stnd_id;
            }, (error) => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', 'Something went wrong. Please try after sometime!');
            });
        }
        fetchSectionList(standard_id) {
            this.sectionList = [];
            for (let data of this.standardSectionMap) {
                if (data.standard_id == standard_id) {
                    this.sectionList = data.section_list;
                    break;
                }
            }
        }
        getInstituteFeeTypes() {
            this.auth.showLoader();
            let url = "/api/v1/batchFeeSched/feeType/" + this.institute_id;
            this.http.getData(url).subscribe(res => {
                this.auth.hideLoader();
                this.feeTypeList = res;
            }, err => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', err.error.message);
            });
        }
        openAddInstallmentPopup() {
            this.isAddInstallClicked = false;
            $('#installmentModal').modal('show');
            this.closeAddInstallPopup(true);
            this.isUpdateInstall = false;
            this.fetchFilterData();
            this.getInstituteFeeTypes();
            this.addInstall.acad_yr_id = this.academic_yr_id;
        }
        closeAddInstallPopup(isAdd) {
            if (!isAdd)
                $('#installmentModal').modal('hide');
            this.addInstall = {
                academic_yr_id: -1,
                f_type_id: -1,
                f_amount: 0,
                d_date: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD'),
                standard_id: -1,
                course_id: -1,
                master_course: '',
                immutable_due_date: ''
            };
        }
        addNewInstall() {
            this.isAddInstallClicked = true;
            if (this.schoolModel)
                this.addInstall.standard_id = this.stdFeeDataList.stnd_id;
            if (this.validateInputDataForAddInstall(false)) {
                let obj = {
                    d_date: moment__WEBPACK_IMPORTED_MODULE_5__(this.addInstall.d_date).format('YYYY-MM-DD'),
                    t_amount: this.addInstall.f_amount,
                    f_type_id: this.addInstall.f_type_id,
                    ay_id: this.addInstall.acad_yr_id,
                    inst_id: this.institute_id,
                };
                if (this.isTemplateLinkWithCourseAndStandard) {
                    if (this.schoolModel) {
                        obj.stnd_id = this.addInstall.standard_id;
                    }
                    else if (!this.schoolModel && !this.isProfessional) {
                        obj.c_id = this.addInstall.course_id;
                    }
                    else if (this.isProfessional) {
                        obj.sub_id = this.addInstall.course_id;
                    }
                }
                let url = "/api/v1/studentWise/fee/add/installment/" + this.student_id;
                this.auth.showLoader();
                this.http.postData(url, obj).subscribe((data) => {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('success', '', "Installment added successfully!");
                    this.fetchStdFeeData(this.academic_yr_id);
                    this.closeAddInstallPopup(false);
                }, (error) => {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('error', '', error.error.message);
                });
            }
            this.isAddInstallClicked = false;
        }
        validateInputDataForAddInstall(isUpdate) {
            if (this.addInstall.acad_yr_id <= 0) {
                this.commonService.showErrorMessage('info', '', 'Please select valid academic Yr!');
                return;
            }
            if (this.addInstall.f_type_id <= 0) {
                this.commonService.showErrorMessage('info', '', 'Please select valid fee type!');
                return;
            }
            if (this.addInstall.f_amount <= 0) {
                this.commonService.showErrorMessage('info', '', 'Please enter valid amount!');
                return;
            }
            if (!this.addInstall.d_date) {
                this.commonService.showErrorMessage('info', '', 'Please select valid due date!');
                return;
            }
            let username = sessionStorage.getItem('username');
            if (username != 'admin') {
                if (isUpdate) {
                    if (!this.isFutureDate(this.addInstall.d_date, this.addInstall.immutable_due_date)) {
                        this.commonService.showErrorMessage('info', '', 'Due date should be greater than or equal to current due date!');
                        return;
                    }
                }
                else {
                    if (this.isPastDate(moment__WEBPACK_IMPORTED_MODULE_5__(this.addInstall.d_date).format("YYYY-MM-DD"))) {
                        this.commonService.showErrorMessage('info', '', 'Due date should be greater than or equal to current date!');
                        return;
                    }
                }
            }
            if (this.isTemplateLinkWithCourseAndStandard) {
                if (this.schoolModel && this.addInstall.standard_id <= 0) {
                    this.commonService.showErrorMessage('info', '', 'Please select valid standard');
                    return;
                }
                else if (!this.schoolModel && !this.isProfessional && this.addInstall.course_id <= 0) {
                    this.commonService.showErrorMessage('info', '', 'Please select valid course!');
                    return;
                }
                else if (this.isProfessional && this.addInstall.subject_id <= 0) {
                    this.commonService.showErrorMessage('info', '', 'Please select valid Batch!');
                    return;
                }
            }
            return true;
        }
        removeDiscountPopup(data) {
            this.isDiscountRemove = true;
            this.isRemoveDiscClicked = false;
            $('#discountInstallModel').modal('show');
            this.fetchDiscountReason();
            this.validateRemoveDiscountPopup(data.fee_schedule_id);
        }
        validateRemoveDiscountPopup(f_schld_id) {
            this.discountInstallList = [];
            for (let data of this.stdFeeDataList.a_install_li) {
                if (data.f_schld_id == f_schld_id) {
                    this.discountInstallList.push(data);
                    this.totalDiscountApplied = data.disc_amount;
                    break;
                }
            }
        }
        removeDiscountAction() {
            this.isRemoveDiscClicked = true;
            this.auth.showLoader();
            if (this.discountPopUpForm.discountAmount > this.totalDiscountApplied) {
                this.commonService.showErrorMessage('error', '', 'Discount Amount should not be greater than discount given to student!');
                this.auth.hideLoader();
                this.isRemoveDiscClicked = false;
                return false;
            }
            let isValid = this.feeService.checkDiscountValidations(this.discountPopUpForm, this.totalDiscountApplied, 'remove');
            if (!isValid) {
                this.auth.hideLoader();
                this.isRemoveDiscClicked = false;
                return;
            }
            let installmentList = this.feeService.makeRemoveDiscountJsonV2(this.discountInstallList, this.discountPopUpForm);
            if (!installmentList) {
                this.auth.hideLoader();
                this.isRemoveDiscClicked = false;
                return;
            }
            let jsonToSend = {
                student_id: Number(this.student_id),
                discountInstllmentList: installmentList
            };
            this.feeService.addDiscountToStudent(jsonToSend).subscribe(res => {
                this.clearDiscPopUpData();
                this.commonService.showErrorMessage('success', '', 'Discount removed successfully!');
                this.getDiscountHistoryDetails();
                this.fetchStdFeeData(this.academic_yr_id);
                this.getDiscountHistoryDetails();
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', err.error.message);
            });
            this.isRemoveDiscClicked = false;
        }
        editPaidInstall(data) {
            this.isUpdatePaidInstall = true;
            this.t_p_amount = data.p_amount;
            this.getPaymentModes();
            this.paymentPopUpJson = {
                immutable_amount: data.p_amount,
                paying_amount: data.p_amount,
                paid_date: moment__WEBPACK_IMPORTED_MODULE_5__(data.p_date).format('YYYY-MM-DD'),
                payment_mode: data.p_method,
                reference_no: '',
                remarks: data.p_remarks,
                receipt_no: data.f_rec_no,
                f_schld_id: data.f_schld_id,
                f_tx_id: data.f_tx_id,
                due_amount: this.getDueAmount(data.f_schld_id),
                selectedPdcId: '',
                pdcSelectedForm: {
                    bank_name: '',
                    cheque_amount: 0,
                    cheque_date: moment__WEBPACK_IMPORTED_MODULE_5__().format("YYYY-MM-DD"),
                    cheque_no: '',
                    pdc_cheque_id: ''
                },
                genPdcAck: false,
                sendPdcAck: false,
                genFeeRecipt: false,
                emailFeeRecipt: false
            };
            this.t_d_amount = this.paymentPopUpJson.due_amount;
            $('#updateinstModal').modal('show');
        }
        updatePaidInstall(data) {
            this.auth.showLoader();
            let obj = {
                feeSchedule_TxLst: [{
                        schedule_id: data.f_schld_id,
                        payment_tx_id: data.f_tx_id,
                        amount_paid: 0,
                        balance_amount: 1721
                    }],
                fee_receipt_update_reason: this.paymentPopUpJson,
                financial_year: data.financial_yr,
                invoice_no: data.f_rec_no,
                old_invoice_no: data.f_rec_no,
                paid_date: moment__WEBPACK_IMPORTED_MODULE_5__(this.paymentPopUpJson.paid_date).format("YYYY-MM-DD"),
                paymentMode: this.paymentPopUpJson.paid_date,
                reference_no: this.paymentPopUpJson.paid_date,
                remarks: this.paymentPopUpJson.paid_date,
                student_id: this.student_id
            };
            let url = "/api/v1/studentWise/fee/add/installment/" + this.student_id;
            this.http.postData(url, obj).subscribe((data) => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('success', '', "Installment added successfully!");
                this.fetchStdFeeData(this.academic_yr_id);
                this.closeAddInstallPopup(false);
            }, (error) => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', error.error.message);
            });
        }
        checkSelectedInstallments() {
            let is_intall_not_selected = true;
            for (let data of this.stdFeeDataList.p_install_li) {
                if (data.isSelected) {
                    is_intall_not_selected = false;
                }
            }
            if (is_intall_not_selected) {
                this.commonService.showErrorMessage('info', '', 'Please select at least one installment!');
                return;
            }
            $('#sendModal').modal('show');
        }
        studentFeeInstallment(userType) {
            //  this.closeMenu();
            let object = {
                student_ids: this.student_id,
                institution_id: '',
                sendEmail: userType,
                academic_year_id: [String(this.academic_yr_id)]
            };
            object['user_role'] = this.paymentMode;
            this.auth.showLoader();
            this.postService.getFeeInstallments(object).subscribe((res) => {
                this.auth.hideLoader();
                if (userType == -1) {
                    let byteArr = this.commonService.convertBase64ToArray(res.document);
                    let fileName = res.docTitle;
                    let file = new Blob([byteArr], { type: 'text/csv;charset=utf-8;' });
                    let url = URL.createObjectURL(file);
                    const dwldLink = document.createElement('a');
                    dwldLink.setAttribute("href", url);
                    dwldLink.setAttribute("download", fileName);
                    document.body.appendChild(dwldLink);
                    dwldLink.click();
                    document.body.removeChild(dwldLink);
                }
                else {
                    $('#sendModal').modal('hide');
                    this.commonService.showErrorMessage('success', '', 'fee installement send on your mail successfully');
                }
            }, (err) => {
                this.auth.hideLoader();
                // this.commonService.showErrorMessage('error', '', err.error.message);
                this.commonService.showErrorMessage('error', '', err.error.message);
            });
        }
        editInstallPopUp(data) {
            this.isUpdateInstall;
            this.isUpdateInstall = true;
            $('#installmentModal').modal('show');
            if (this.feeTypeList.length <= 0) {
                this.getInstituteFeeTypes();
            }
            this.addInstall = {
                acad_yr_id: this.academic_yr_id,
                f_type_id: data.f_type_id,
                f_amount: data.d_amount,
                d_date: moment__WEBPACK_IMPORTED_MODULE_5__(data.d_date).format('YYYY-MM-DD'),
                course_id: data.c_id,
                subject_id: data.sub_id,
                f_schld_id: data.f_schld_id,
                immutable_due_date: moment__WEBPACK_IMPORTED_MODULE_5__(data.d_date).format('YYYY-MM-DD')
            };
            if (this.isProfessional) {
                this.addInstall.course_id = data.sub_id;
            }
            if (this.schoolModel) {
                this.addInstall.standard_id = this.stdFeeDataList.stnd_id;
            }
        }
        updateInstall() {
            this.isUpdateInstallClicked = true;
            if (this.validateInputDataForAddInstall(true)) {
                let obj = {
                    d_date: moment__WEBPACK_IMPORTED_MODULE_5__(this.addInstall.d_date).format('YYYY-MM-DD'),
                    t_amount: this.addInstall.f_amount,
                    f_type_id: this.addInstall.f_type_id,
                    ay_id: this.addInstall.acad_yr_id,
                    inst_id: this.institute_id,
                    f_schld_id: this.addInstall.f_schld_id,
                };
                if (this.isTemplateLinkWithCourseAndStandard) {
                    if (this.schoolModel) {
                        obj.stnd_id = this.addInstall.standard_id;
                    }
                    else if (!this.schoolModel && !this.isProfessional) {
                        obj.c_id = this.addInstall.course_id;
                    }
                    else if (this.isProfessional) {
                        obj.sub_id = this.addInstall.course_id;
                    }
                }
                let url = "/api/v1/studentWise/fee/update/installment/" + this.student_id;
                this.auth.showLoader();
                this.http.putData(url, obj).subscribe((data) => {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('success', '', "Installment updated successfully!");
                    this.fetchStdFeeData(this.academic_yr_id);
                    this.closeAddInstallPopup(false);
                }, (error) => {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('error', '', error.error.message);
                });
            }
            this.isUpdateInstallClicked = false;
        }
        deleteInstall(data) {
            let msg = "";
            if (data.p_amount > 0) {
                msg = "Do you want to delete this installment?\n\nNote:- This installment is partially paid. If you delete this installment then Amount Paid and Discount Applied Amount will not delete!";
            }
            else {
                msg = "Do you want to delete this installment?\n\nNote:- If you delete this installment then Discount applied on installment will also delete!";
            }
            if (confirm(msg)) {
                let obj = {};
                let url = "/api/v1/studentWise/fee/delete/installment/" + this.student_id + "/" + data.f_schld_id + "/" + this.academic_yr_id;
                this.auth.showLoader();
                this.http.deleteData(url, obj).subscribe((data) => {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('success', '', "Installment deleted successfully!");
                    this.fetchStdFeeData(this.academic_yr_id);
                    this.getDiscountHistoryDetails();
                }, (error) => {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('error', '', error.error.message);
                });
            }
        }
        getDueAmount(f_schld_id) {
            for (let data of this.stdFeeDataList.a_install_li) {
                if (data.f_schld_id == f_schld_id) {
                    return data.d_amount;
                }
            }
        }
        closeShareFeeReceiptPopUp() {
            $('#sendModal').modal('hide');
        }
        selectAllPaidInstall() {
            for (var i = 0; i < this.stdFeeDataList.p_install_li.length; i++) {
                this.stdFeeDataList.p_install_li[i].isSelected = this.isSelectedAllPaidInstall;
            }
        }
    };
    ViewComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"] },
        { type: _services_student_services_fetch_student_service__WEBPACK_IMPORTED_MODULE_6__["FetchStudentService"] },
        { type: _components_student_module_student_fee_service__WEBPACK_IMPORTED_MODULE_7__["StudentFeeService"] },
        { type: _services_student_services_post_student_data_service__WEBPACK_IMPORTED_MODULE_8__["PostStudentDataService"] }
    ];
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __importDefault(__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/fee-update/view/view.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./view.component.scss */ "./src/app/components/fee-module/fee-update/view/view.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"],
            _services_student_services_fetch_student_service__WEBPACK_IMPORTED_MODULE_6__["FetchStudentService"],
            _components_student_module_student_fee_service__WEBPACK_IMPORTED_MODULE_7__["StudentFeeService"],
            _services_student_services_post_student_data_service__WEBPACK_IMPORTED_MODULE_8__["PostStudentDataService"]])
    ], ViewComponent);
    return ViewComponent;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-fee-module-fee-update-fee-update-module-es2015.js.map