(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-fee-module-data-setup-fee-template-fee-template-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/fee-template-add/fee-template-add.component.html":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/fee-template-add/fee-template-add.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupFeeTemplateFeeTemplateAddFeeTemplateAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"clearFix code-wrapper\" style=\"padding-right: 2%;\">\n  <section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\" style=\"padding-left:7px;\">\n      <a routerLink=\"/view/fee/data-setup/fee-template/home\">\n        {{moduleState}} wise fees\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      Add Fee Template\n      <div class=\"questionInfo inline-relative\">\n        <span class=\"qInfoIcon i-class\">i</span>\n        <div class=\"tooltip-box-field md\">\n          Define Fee structure\n          <br>for a {{moduleState}} Fee.\n          <br>For e.g Single Installment\n          <br>or 2 installments or multiples\n        </div>\n      </div>\n    </h1>\n  </section>\n\n  <section class=\"middle-main clearFix\">\n\n    <section class=\"filler-setcion\">\n\n      <div class=\"row\">\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"form-wrapper has-value\" *ngIf=\"isLangInstitute\">\n            <label for=\"masterCourse\">Master Course\n              <span class=\"text-danger\">*</span>\n            </label>\n            <select id=\"masterCourseDdn\" class=\"side-form-ctrl\" [(ngModel)]=\"addNewTemplate.master_course_name\"\n              name=\"masterCourse\" (ngModelChange)=\"onMasterCourseSelection()\">\n              <option value=\"-1\"></option>\n              <option *ngFor=\"let opt of masterCourseList\" [value]=\"opt.standard_id\">\n                {{opt.standard_name}}\n              </option>\n            </select>\n          </div>\n\n          <div class=\"form-wrapper has-value\" *ngIf=\"isLangInstitute\">\n            <label for=\"CourseDdn\">Course\n              <span class=\"text-danger\">*</span>\n            </label>\n            <select id=\"CourseDdn\" class=\"side-form-ctrl\" name=\"CourseDdn\" [(ngModel)]=\"addNewTemplate.course_id\">\n              <option value=\"-1\"></option>\n              <option *ngFor=\"let opt of CourseList\" [value]=\"opt.subject_id\">\n                {{opt.subject_name}}\n              </option>\n            </select>\n          </div>\n<!-- changes by Nalini - to handle school model conditions -->\n          <div class=\"form-wrapper has-value\" *ngIf=\"!isLangInstitute\">\n            <label for=\"masterCourse\">{{schoolModel ? 'Standard' : 'Master Course'}}\n              <span class=\"text-danger\">*</span>\n            </label>\n            <select id=\"masterCourseDdn\" class=\"side-form-ctrl\" [(ngModel)]=\"addNewTemplate.master_course_name\"\n              name=\"masterCourse\" (ngModelChange)=\"onMasterCourseSelection()\">\n              <option value=\"-1\"></option>\n              <option *ngFor=\"let opt of masterCourseList\" [value]=\"opt.master_course\">\n                {{opt.master_course}}\n              </option>\n            </select>\n          </div>\n\n          <div class=\"form-wrapper has-value\" *ngIf=\"!isLangInstitute\">\n            <label for=\"CourseDdn\">{{schoolModel ? 'Section' : 'Course'}}\n              <span class=\"text-danger\">*</span>\n            </label>\n            <select id=\"CourseDdn\" class=\"side-form-ctrl\" name=\"CourseDdn\" [(ngModel)]=\"addNewTemplate.course_id\">\n              <option value=\"-1\"></option>\n              <option *ngFor=\"let opt of CourseList.coursesList\" [value]=\"opt.course_id\">\n                {{opt.course_name}}\n              </option>\n            </select>\n          </div>\n\n          <div class=\"form-wrapper has-value\">\n            <label for=\"CourseDdn\">Country\n              <span class=\"text-danger\">*</span>\n            </label>\n            <select id=\"CourseDdn\" class=\"side-form-ctrl\" name=\"CourseCountry\" [(ngModel)]=\"addNewTemplate.country_id\"\n              (ngModelChange)=\"selectedCountryCode($event)\">\n              <option value=\"-1\"></option>\n              <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                {{data.country_name}}\n              </option>\n            </select>\n          </div>\n\n          <div class=\"field-checkbox-wrapper checkBoxAllignment\" *ngIf=\"showDefaultTemplate!='1'\">\n            <input type=\"checkbox\" id=\"defTemplate\" name=\"checkbx\" [(ngModel)]=\"addNewTemplate.is_default_template\"\n              class=\"form-checkbox\">\n            <label for=\"defTemplate\">Is Default Template\n              <div class=\"questionInfo inline-relative\">\n                <span class=\"qInfoIcon i-class\">i</span>\n                <div class=\"tooltip-box-field md\">\n                  Make this a default template\n                  <br>for the course\n                </div>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-wrapper  has-value\">\n            <label for=\"templateName\">Fee Structure\n              <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"text\" class=\"side-form-ctrl\" [(ngModel)]=\"addNewTemplate.template_name\" name=\"templateName\">\n          </div>\n\n          <div class=\"form-wrapper has-value\">\n            <label for=\"feeAmount\">Fee Amount\n              <span class=\"text-danger\">*</span>\n              <div class=\"questionInfo inline-relative\">\n                <span class=\"qInfoIcon i-class\">i</span>\n                <div class=\"tooltip-box-field md\">\n                  Total fee amount defined\n                  <br> for the course\n                </div>\n              </div>\n            </label>\n            <input type=\"number\" min=\"0\" class=\"side-form-ctrl\" [(ngModel)]=\"addNewTemplate.fee_amount\"\n              (keyup)=\"onAmountKeyUp()\" name=\"feeAmount\">\n          </div>\n\n          <!-- <div class=\"question-wrapper\" *ngIf=\"enableTaxOptions == '1' && addNewTemplate.country_id=='1' \"> -->\n          <div class=\"question-wrapper\" *ngIf=\"enableTaxOptions == '1' \">\n\n            <fieldset>\n              <legend>\n                <div class=\"question\">\n                  <h3>Is Fee Amount</h3>\n                </div>\n              </legend>\n              <div class=\"field-radio-wrapper\">\n                <input type=\"radio\" name=\"inclusive\" class=\"form-radio\" [(ngModel)]=\"addNewTemplate.tax_type\"\n                  (ngModelChange)=\"onTaxTypeChanges($event)\" value=\"inclusive\" id=\"idInclusive\">\n                <label for=\"idInclusive\">Inclusive Of {{tax_type_without_percentage}}</label>\n              </div>\n              <div class=\"field-radio-wrapper\">\n                <input type=\"radio\" name=\"exclusive\" class=\"form-radio\" [(ngModel)]=\"addNewTemplate.tax_type\"\n                  (ngModelChange)=\"onTaxTypeChanges($event)\" value=\"exclusive\" id=\"idExclusive\">\n                <label for=\"idExclusive\">Exclusive Of {{tax_type_without_percentage}}</label>\n              </div>\n            </fieldset>\n          </div>\n\n          <!-- <div class=\"form-wrapper has-value\">\n            <label for=\"taxType\">Tax Type</label>\n            <select id=\"\" class=\"side-form-ctrl\" name=\"taxType\" [(ngModel)]=\"addNewTemplate.tax_type\" (click)=\"onTaxTypeChanges()\">\n              <option *ngIf=\"enableTaxOptions != '1'\" value=\"1\">Tax Out Of Scope</option>\n              <option *ngIf=\"enableTaxOptions == '1'\" value=\"2\">Total Fee Including Tax</option>\n              <option *ngIf=\"enableTaxOptions == '1'\" value=\"3\">Total Fee Excluding Tax</option>\n            </select>\n          </div> -->\n\n          <!-- <div class=\"field-checkbox-wrapper checkBoxAllignment\">\n            <input type=\"checkbox\" id=\"\" name=\"checkbx\" [disabled]=\"addNewTemplate.apply_tax == true && addNewTemplate.tax_type != 1\"\n              [(ngModel)]=\"addNewTemplate.apply_tax\" class=\"form-checkbox\">\n            <label for=\"checkbx\">Apply Tax ({{feeStructure.registeredServiceTax}}%)</label>\n          </div> -->\n\n          <div class=\"spanSection\">\n            <!-- <span *ngIf=\"enableTaxOptions == '1'&& addNewTemplate.country_id=='1'\" class=\"\">{{tax_type_without_percentage}} Amount : -->\n            <span *ngIf=\"enableTaxOptions == '1'\" class=\"\">{{tax_type_without_percentage}} Amount :\n              <span *ngIf=\"selectedCountry\">\n                <!-- <img src=\"{{selectedCountry?.currency_symbol}}\" style=\"max-height: 12px\" /> -->\n              </span> {{addNewTemplate.tax_amount}}</span>\n            <br>\n            <span class=\"\">Total Fees :\n              <span *ngIf=\"selectedCountry\">\n                <!-- <img style=\"\" src=\"{{selectedCountry?.currency_symbol}}\" style=\"max-height: 12px\" /> -->\n              </span>{{addNewTemplate.total_fee}}</span>\n          </div>\n\n          <div class=\"form-wrapper has-value\">\n            <label for=\"installment\">Total Number of Installment\n              <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"number\" min=\"0\" class=\"side-form-ctrl\" name=\"installment\"\n              [(ngModel)]=\"addNewTemplate.installmentCount\">\n          </div>\n\n          <button class=\"btn\" routerLink=\"/view/fee/data-setup/fee-template/home\">Cancel</button>\n          <button class=\"btn fullBlue\" (click)=\"createInstallment()\">Create Installment</button>\n\n        </div>\n      </div>\n\n    </section>\n\n    <hr>\n\n    <section class=\"installment-section\" *ngIf=\"showDetails\">\n\n      <section class=\"installmentSection\">\n        <h3 style=\"margin-bottom:10px;\">Manage Installments</h3>\n        <div class=\"table-scroll-wrapper\">\n          <div class=\"table table-responsive\">\n            <table>\n              <thead>\n                <tr>\n                  <th> # </th>\n                  <th>Trigger Date</th>\n                  <th>No.(Days/Months)</th>\n                  <th>Country </th>\n                  <!-- <th  *ngIf=\"addNewTemplate.country_id=='1'\">Fees Amount -->\n                  <th>Fees Amount\n\n                    <span *ngIf=\"selectedCountry\">(\n                      <img src=\"{{selectedCountry?.currency_symbol}}\" style=\"max-height: 9px\" />)</span>\n                  </th>\n                  <!-- <th *ngIf=\"addNewTemplate.country_id=='1'\">{{tax_type_without_percentage}} -->\n\n                  <th *ngIf=\"enableTaxOptions=='1'\">{{tax_type_without_percentage}}\n                    <span *ngIf=\"selectedCountry\">\n                      (\n                      <img src=\"{{selectedCountry?.currency_symbol}}\" style=\"max-height: 9px\" />)</span>\n                  </th>\n                  <th *ngIf=\"enableTaxOptions=='1'\">Fees Amount\n                    <!--   <span *ngIf=\"addNewTemplate.country_id=='1'\"> (Incl {{tax_type_without_percentage}})</span> -->\n                    <span> (Incl {{tax_type_without_percentage}})</span>\n                    <span *ngIf=\"selectedCountry\">\n                      (\n                      <img src=\"{{selectedCountry?.currency_symbol}}\" style=\"max-height: 9px\" />)</span>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of installMentTable; let i= index ; trackBy : index\">\n                  <td>\n                    {{i + 1}} </td>\n                  <td>\n                    <div class=\"form-wrapper\">\n                      <select [(ngModel)]=\"row.day_type\" (ngModelChange)=\"changesValuesAsPerType(row)\"\n                        style=\"background: transparent\" class=\"side-form-ctrl\">\n                        <option value=\"1\">Course Assign Date (CAD)</option>\n                        <option value=\"2\">No of days after CAD</option>\n                        <option value=\"3\">No of Month after CAD</option>\n                      </select>\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"form-wrapper\" style=\"background: transparent;\">\n                      <input type=\"number\" min=\"0\" style=\"background: transparent;\" [disabled]=\"row.day_type=='1'\"\n                        [ngClass]=\"{'disable_input': row.day_type=='1'}\" class=\"editCellInput\" [(ngModel)]=\"row.days\"\n                        name=\"label\" class=\"side-form-ctrl\">\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"form-wrapper\">\n                      <select id=\"CourseDdn\" style=\"background: transparent;margin: 5px 0px; \n                        width: 100%;\" disabled class=\"side-form-ctrl disable_input\" name=\"CourseCountry\"\n                        [(ngModel)]=\"row.country_id\">\n                        <option value=\"-1\"></option>\n                        <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                          {{data.country_name}}\n                        </option>\n                      </select>\n                    </div>\n                  </td>\n                  <!-- <td  *ngIf=\"addNewTemplate.country_id=='1'\"> -->\n\n                  <td *ngIf=\"enableTaxOptions=='1'\">\n                    <div class=\"form-wrapper\">\n                      <input type=\"number\" style=\"background: transparent\" min=\"0\"\n                        [readonly]=\"addNewTemplate.tax_type == 'inclusive'\" class=\"editCellInput side-form-ctrl\"\n                        [(ngModel)]=\"row.initial_fee_amount\" (ngModelChange)=\"userChangedInitialAmount(row ,$event)\"\n                        name=\"label\">\n                    </div>\n                  </td>\n                  <!-- <td  *ngIf=\"addNewTemplate.country_id=='1'\"> -->\n                  <td *ngIf=\"enableTaxOptions=='1'\">\n                    <div class=\"form-wrapper\">\n                      <input type=\"number\" min=\"0\" readonly=\"true\" class=\"editCellInput side-form-ctrl\"\n                        style=\"background: transparent\" [ngModel]='row.tax' name=\"label\">\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"form-wrapper\" style=\"background: transparent;\">\n                      <input type=\"number\" min=\"0\" style=\"background: transparent;\"\n                        [readonly]=\"addNewTemplate.tax_type == 'exclusive'\" class=\"editCellInput\"\n                        (keyup)=\"userChangedAmountTotalAmount(row ,$event)\" [(ngModel)]=\"row.totalAmount\" name=\"label\"\n                        class=\"side-form-ctrl\">\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <span style=\"margin-top:20px;\">* Sum of final amount should match with defined fee amount.</span>\n      </section>\n      <hr>\n      <section class=\"additionalFeeSection\">\n        <h3>Manage Additional Fees</h3>\n\n        <div class=\"row\">\n          <div class=\"c-sm-2 c-md-2 c-lg-2\">\n            <div class=\"form-wrapper has-value\">\n              <label for=\"row.category_id\">Select Fee Type</label>\n              <select id=\"\" class=\"side-form-ctrl\" style=\"background: transparent\"\n                [(ngModel)]=\"additionalInstallment.fee_type\" (ngModelChange)=\"onAdditionalFeeSelection($event)\"\n                name=\"row.category_id\">\n                <option value=\"\"></option>\n                <option *ngFor=\"let opt of otherFeetype; let i= index ; trackBy : index\" [value]=\"opt.id\">\n                  {{opt.value}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"c-sm-2 c-md-2 c-lg-2\">\n            <div class=\"form-wrapper has-value\">\n              <label for=\"row.category_id\">Trigger Date</label>\n              <select id=\"\" class=\"side-form-ctrl\" style=\"background: transparent\"\n                [(ngModel)]=\"additionalInstallment.day_type\"\n                (ngModelChange)=\"changesValuesAsPerType(additionalInstallment)\" name=\"row.category_id\">\n                <option value=\"1\">Course Assign Date (CAD)</option>\n                <option value=\"2\">No of days after CAD</option>\n                <option value=\"3\">No of Month after CAD</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"c-sm-2 c-md-2 c-lg-2\">\n            <div class=\"form-wrapper has-value\">\n              <label for=\"slotNew\"> No. (Days/Months)\n              </label>\n              <input type=\"number\" min=\"0\" style=\"background: transparent;\" class=\"side-form-ctrl\"\n                [disabled]=\"additionalInstallment.day_type=='1'\"\n                [ngClass]=\"{'disable_input': additionalInstallment.day_type=='1'}\"\n                [(ngModel)]=\"additionalInstallment.days\" name=\"slotNew\">\n            </div>\n          </div>\n          <div class=\"c-sm-2 c-md-2 c-lg-2\">\n            <div class=\"form-wrapper has-value\">\n              <label for=\"row.country_id\">Country</label>\n              <select disabled class=\"side-form-ctrl disable_input\" [(ngModel)]=\"additionalInstallment.country_id\"\n                name=\"row.country_id\">\n                <option value=\"-1\"></option>\n                <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                  {{data.country_name}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <!--  <div class=\"c-sm-3 c-md-3 c-lg-3\" *ngIf=\"addNewTemplate.country_id!='1'\"> -->\n\n          <!-- <div class=\"c-sm-3 c-md-3 c-lg-3\" >\n            <div class=\"c-sm-5 c-md-5 c-lg-5 form-wrapper has-value\">\n              <label for=\"slotNew\">Fee Amount\n              </label>\n              <input type=\"number\" style=\"background: transparent;\" min=\"0\" class=\"side-form-ctrl\" [(ngModel)]=\"additionalInstallment.initial_fee_amount\"\n                name=\"slotNew\">  \n            </div>\n          </div> -->\n          <!-- <div class=\"c-sm-3 c-md-3 c-lg-3\" *ngIf=\"addNewTemplate.country_id=='1'\"> -->\n\n          <div class=\"c-sm-3 c-md-3 c-lg-3\">\n            <div class=\"row\">\n              <div class=\"c-sm-5 c-md-5 c-lg-5 form-wrapper has-value\" style=\" width: 40%;\">\n                <label for=\"slotNew\">Fee Amount\n                </label>\n                <input type=\"number\" style=\"background: transparent;\" min=\"0\" class=\"side-form-ctrl\"\n                  [(ngModel)]=\"additionalInstallment.initial_fee_amount\" name=\"slotNew\">\n              </div>\n              <div class=\"c-sm-7 c-md-7 c-lg-7  form-wrapper has-value\" style=\" width: 60%;\"\n                *ngIf=\"enableTaxOptions=='1'\">\n                <label for=\"slotNew\">{{tax_type_without_percentage}} Applicable (%)\n                </label>\n                <input type=\"number\" min=\"0\" disabled class=\"side-form-ctrl disable_input\"\n                  [(ngModel)]=\"additionalInstallment.service_tax\" name=\"slotNew\">\n              </div>\n            </div>\n          </div>\n          <div class=\"c-sm-1 c-md-1 c-lg-1\" style=\"margin-top:20px;cursor: pointer;\">\n            <img src=\"assets/images/plus.png\" (click)=\"addAdditionalInst()\" alt=\"Add\"\n              style=\"vertical-align: -webkit-baseline-middle;\">\n          </div>\n        </div>\n\n        <div class=\"table-scroll-wrapper\">\n          <div class=\"table table-responsive\">\n            <table>\n              <thead>\n                <tr>\n                  <th>Fee Type </th>\n                  <th>Trigger Date</th>\n                  <th>No.(Days/Months)Due Date</th>\n                  <th>Country </th>\n                  <!-- <th *ngIf=\"addNewTemplate.country_id=='1'\">Amount</th>\n                  <th *ngIf=\"addNewTemplate.country_id=='1'\">{{tax_type_without_percentage}}</th>\n                  <th *ngIf=\"addNewTemplate.country_id!='1'\">Fee Amount</th>\n                  <th *ngIf=\"addNewTemplate.country_id=='1'\">Fee Amount Incl {{tax_type_without_percentage}}</th> -->\n                  <th> Fee Amount</th>\n                  <th *ngIf=\"enableTaxOptions=='1'\">{{tax_type_without_percentage}}</th>\n                  <!-- //<th>Fee Amount</th> -->\n                  <th *ngIf=\"enableTaxOptions=='1'\">Fee Amount Incl {{tax_type_without_percentage}}</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let row of otherInstList; let i= index ; trackBy : index\">\n                  <td>\n                    {{row.fee_type_name}}\n                  </td>\n                  <td>\n                    <div class=\"form-wrapper\">\n                      <select [(ngModel)]=\"row.day_type\" style=\"background: transparent\"\n                        (ngModelChange)=\"changesValuesAsPerType(row)\" class=\"side-form-ctrl\">\n                        <option value=\"1\">Course Assign Date (CAD)</option>\n                        <option value=\"2\">No of days after CAD</option>\n                        <option value=\"3\">No of Month after CAD</option>\n                      </select>\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"form-wrapper\">\n                      <input type=\"number\" style=\"background: transparent\" min=\"0\" [disabled]=\"row.day_type=='1'\"\n                        [ngClass]=\"{'disable_input': row.day_type=='1'}\" class=\"editCellInput\" [(ngModel)]=\"row.days\"\n                        name=\"label\" class=\"side-form-ctrl\">\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"form-wrapper\">\n                      <select disabled style=\"width:100%;\" id=\"CourseDdn\" class=\"side-form-ctrl disable_input\"\n                        name=\"CourseCountry\" [(ngModel)]=\"row.country_id\">\n                        <option value=\"-1\"></option>\n                        <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                          {{data.country_name}}\n                        </option>\n                      </select>\n                    </div>\n                  </td>\n                  <!-- <td *ngIf=\"addNewTemplate.country_id=='1'\"> -->\n                  <td>\n                    <div class=\"form-wrapper\">\n                      <input type=\"number\" min=\"0\" style=\"background: transparent\" readonly=\"true\"\n                        class=\"editCellInput side-form-ctrl\" [(ngModel)]=\"row.initial_fee_amount\" name=\"label\">\n                    </div>\n                  </td>\n                  <!-- <td *ngIf=\"addNewTemplate.country_id=='1'\"> -->\n                  <td>\n\n                    <div class=\"form-wrapper\">\n                      <input type=\"number\" min=\"0\" style=\"background: transparent\" readonly=\"true\"\n                        class=\"editCellInput side-form-ctrl\" [ngModel]='row.fees_amount - row.initial_fee_amount'\n                        name=\"label\">\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"form-wrapper\">\n                      <input type=\"number\" min=\"0\" style=\"background: transparent\" class=\"editCellInput\"\n                        (keyup)=\"userChangeAdditionalFeeAmount(row , $event)\" [(ngModel)]=\"row.fees_amount\" name=\"label\"\n                        class=\"side-form-ctrl\">\n                    </div>\n                  </td>\n                  <td>\n                    <a style=\"cursor: pointer\" (click)=\"deleteAdditionalRow(row , i)\">\n                      <i class=\"fa fa-trash\" style=\"font-size: 17px;  color:red;margin-right: 10px;cursor: pointer;\"\n                        title=\"Delete\"></i>\n                    </a>\n                  </td>\n                </tr>\n                <tr *ngIf=\"otherInstList.length == 0\">\n                  <td colspan=\"8\">\n                    No Additional Installment\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n      </section>\n\n      <section class=\"btnGroup pull-right\">\n        <button routerLink=\"/view/fee/data-setup/fee-template/home\" class=\"btn\">Back</button>\n        <button (click)=\"createFeeTemplate()\" class=\"btn fullBlue\">Create</button>\n      </section>\n\n    </section>\n\n  </section>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/fee-template.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/fee-template.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupFeeTemplateFeeTemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/template-home/template-home.component.html":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/template-home/template-home.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupFeeTemplateTemplateHomeTemplateHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"clearFix\" id=\"enquiryList\" #enquiryManager style=\"padding-right: 2%;\">\n  <!-- Main View -->\n  <aside class=\"middle-full\">\n    <section class=\"middle-top clearFix\">\n      <h1 class=\"pull-left\">\n        <!-- <a routerLink=\"/view/fee\">\n          Fees\n        </a> -->\n        Fees\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <a routerLink=\"/view/fee/data-setup\">\n          Data-setup\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        {{moduleState}} wise fees\n      </h1>\n\n      <aside class=\"pull-right\">\n        <div class=\"btn-container\">\n          <div class=\"search-filter-wrapper\">\n            <input type=\"text\" class=\"normal-field pull-right\" placeholder=\"Search\" name=\"searchData\"\n              [(ngModel)]=\"searchText\" (keyup)=\"searchInList()\">\n          </div>\n          <button class=\"btn\" routerLink='/view/fee/data-setup/fee-template/add'>\n            New Structure\n          </button>\n        </div>\n      </aside>\n    </section>\n\n\n    <!-- Fee Table Container -->\n    <section class=\"table-content clearFix\" id=\"\">\n      <!-- Data Table and Pagination -->\n      <div class=\"table-scroll-wrapper\">\n        <div class=\"table table-responsive\">\n          <table class=\"structure-table\">\n            <thead>\n              <tr>\n                <th>Fee Structure</th>\n                <!-- changes by Nalini - to handle school model conditions -->\n                <th>{{schoolModel ? 'Standard' : 'Master Course'}}</th>\n                <th>{{schoolModel ? 'Section' : 'Course'}}</th>\n                <th>Country</th>\n                <th>Students assigned</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let fee of tabkeList\">\n                <td>\n                  <label>\n                    {{fee.template_name}}\n                  </label>\n                </td>\n                <td>\n                  {{fee.master_course_standard_name}}\n                </td>\n                <td>\n                  {{fee.course_subject_name}}\n                </td>\n                <td>\n                  {{fee.country_name}}\n                </td>\n                <td>\n                  <a (click)=\"studentsAssigned(fee)\">\n                    {{fee.totalAssignedStudent}}\n                  </a>\n                </td>\n                <td class=\"feeactions\">\n                  <ul>\n                    <li (click)=\"editFee(fee)\">\n                      <i class=\"fa fa-pencil\" style=\"color:#1283f4;cursor: pointer;\" title=\"Edit\"\n                        aria-hidden=\"true\"></i>\n                      &nbsp;\n                    </li>\n                    <li (click)=\"deleteFeeStructure(fee)\" style=\"margin-right: 7px;\">\n                      <i class=\"fa fa-trash\" style=\"color:#fa3145;cursor: pointer;\" title=\"Delete\"\n                        aria-hidden=\"true\"></i>\n                    </li>\n                  </ul>\n                </td>\n              </tr>\n              <tr *ngIf=\"tabkeList.length == 0\">\n                <td colspan=\"6\">\n                  No Fee Structure Available\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n        <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n          <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n            [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [count]=\"totalRow\">\n          </pagination>\n        </div>\n      </div>\n\n    </section>\n\n\n    <template-popup *ngIf=\"isEditFee\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeFeeEditor()\" close-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n          <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n            <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n              <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                transform=\"translate(992.81 305.77) rotate(45)\" />\n              <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                transform=\"translate(978.81 305.77) rotate(45)\" />\n            </g>\n            <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\"\n              transform=\"translate(1012 297)\" />\n          </g>\n        </svg>\n      </span>\n\n      <div class=\"Pheader\" popup-header>\n        <h2 *ngIf=\"!isHeaderEdit\">Edit Template ::\n          <i>{{selectedTemplate.template_name}}</i>\n        </h2>\n        <a *ngIf=\"!isHeaderEdit\" (click)=\"editTemplateName()\">\n          <img src=\"./assets/images/edit_details.svg\" alt=\"\">\n        </a>\n        <h2 *ngIf=\"isHeaderEdit\">Edit Template</h2>\n        <div *ngIf=\"isHeaderEdit\" class=\"headitor field-wrapper\">\n          <input type=\"text\" class=\"form-ctrl\" autofocus [(ngModel)]=\"selectedTemplate.template_name\">\n        </div>\n        <a *ngIf=\"isHeaderEdit\">\n          <i class=\"fas fa-check\" (click)=\"updateTemplateName()\" style=\"font-family: FontAwesome ;font-size: 19px;\"\n            title=\"feeName\"></i>\n          <i class=\"fas fa fa-times\" (click)=\"cancelTemplateName()\" style=\"font-family: FontAwesome ;font-size: 19px;\"\n            title=\"Cancel\"></i>\n        </a>\n\n\n        <div class=\"field-checkbox-wrapper pull-right checkBoxAllignMent\">\n          <input type=\"checkbox\" id=\"defChkBX\" name=\"defChkBX\" [(ngModel)]=\"feeStructure.is_default\"\n            class=\"form-checkbox\">\n          <label for=\"defChkBX\">Is Default Template</label>\n        </div>\n      </div>\n\n      <div class=\"feeManager\" popup-content>\n        <div class=\"fee-content\">\n          <fieldset class=\"installment\">\n            <h1>MANAGE FEE INSTALLMENTS</h1>\n            <div class=\"row data-adder\">\n              <div class=\"outer\">\n                <div class=\"c-lg-3 c-md-3 pull-left\"></div>\n                <div class=\"c-lg-9 c-md-9 pull-right\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\" style=\"margin-top: 10px;margin-bottom: 10px\">\n              <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"slotNew\">Total Amount (<img src=\"{{selectedCountry?.currency_symbol}}\"\n                      style=\"max-height: 10px\" />) <span class=\"text-danger\">*</span>\n                  </label>\n                  <input type=\"number\" min=\"0\" readonly=\"true\" class=\"form-ctrl\" [(ngModel)]=\"totalAmountCal\"\n                    name=\"slotNew\">\n\n                </div>\n              </div>\n              <div class=\"c-sm-4 c-md-4 c-lg-4\">\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"slotNew\">Total No of Installments <span class=\"text-danger\">*</span>\n                  </label>\n                  <input type=\"number\" min=\"0\" readonly=\"true\" #idSlot [value]=\"installmentList.length\"\n                    class=\"form-ctrl\" name=\"slotNew\">\n\n                </div>\n              </div>\n              <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"CourseDdn\">Country\n                    <span class=\"text-danger\">*</span>\n                  </label>\n                  <select id=\"\" [disabled]=\"true\" class=\"form-ctrl disable_input \" style=\"background: transparent\"\n                    name=\"country_id\" [(ngModel)]=\"selectedTemplate.country_id\">\n                    <option value=\"-1\"></option>\n                    <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                      {{data.country_name}}\n                    </option>\n                  </select>\n\n                </div>\n              </div>\n              <div class=\"c-sm-3 c-md-3 c-lg-3 hide\">\n                <div class=\"field-checkbox-wrapper\">\n                  <input type=\"checkbox\" id=\"checkBoxtaxes\" name=\"checkbx\" class=\"form-checkbox\"\n                    (click)=\"onApplyTaxChechbox($event)\">\n                  <label for=\"checkbx\">Apply\n                    {{tax_type_without_percentage}}({{feeStructure.registeredServiceTax}}%)</label>\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"row\" style=\"display: flex;\">\n\n              <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"row.category_id\">Trigger Date</label>\n                  <select id=\"\" class=\"form-ctrl\" style=\"background: transparent\" name=\"AddInstallment.day_type\"\n                    (ngModelChange)=\"changesValuesAsPerType(AddInstallment)\" [(ngModel)]=\"AddInstallment.day_type\">\n                    <option value=\"1\">Course Assign Date (CAD)</option>\n                    <option value=\"2\">No of days after CAD</option>\n                    <option value=\"3\">No of Month after CAD</option>\n                  </select>\n\n                </div>\n              </div>\n\n              <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"slotNew\"> No.\n                  </label>\n                  <input type=\"number\" min=\"0\" class=\"form-ctrl\" [disabled]=\"AddInstallment.day_type=='1'\"\n                    [ngClass]=\"{'disable_input': AddInstallment.day_type=='1'}\" [(ngModel)]=\"AddInstallment.days\"\n                    name=\"slotNew\">\n\n                  <p>(Days/Months)</p>\n                </div>\n              </div>\n\n              <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"slotNew\">Fee Amount\n                  </label>\n                  <input type=\"number\" min=\"0\" class=\"form-ctrl\" [(ngModel)]=\"AddInstallment.initial_fee_amount\"\n                    name=\"slotNew\">\n\n                </div>\n              </div>\n\n              <div class=\"c-sm-2 c-md-2 c-lg-2\" style=\"margin: auto;cursor: pointer\">\n                <img src=\"assets/images/plus.png\" (click)=\"addInstallmentInTable()\" alt=\"Add\"\n                  style=\"vertical-align: -webkit-baseline-middle;\">\n              </div>\n            </div>\n\n\n            <div class=\"row\">\n              <div class=\"\">\n                <div class=\"table table-responsive\">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>Installment # </th>\n                        <th>Due Date</th>\n                        <!-- <th *ngIf=\"selectedTemplate.country_id=='1'\">Fee Amount</th>\n                        <th *ngIf=\"selectedTemplate.country_id=='1'\">Tax</th>\n                        <th *ngIf=\"selectedTemplate.country_id!='1'\">Fee Amount</th>\n                        <th *ngIf=\"selectedTemplate.country_id=='1'\">Fee Amount Incl Tax</th> -->\n                        <th>Fee Amount</th>\n                        <th *ngIf=\"is_tax_enabled\">{{tax_type_without_percentage}}</th>\n                        <th *ngIf=\"is_tax_enabled\">Fee Amount Incl {{tax_type_without_percentage}}</th>\n                        <th>Action</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let row of installmentList; let i= index ; trackBy : index\">\n                        <td>\n                          <select [(ngModel)]=\"row.day_type\" (ngModelChange)=\"changesValuesAsPerType(row)\"\n                            style=\"background: transparent\">\n                            <option value=\"1\">Course Assign Date (CAD)</option>\n                            <option value=\"2\">No of days after CAD</option>\n                            <option value=\"3\">No of Month after CAD</option>\n                          </select>\n                        </td>\n                        <td>\n                          <div class=\"field-wrapper\">\n                            <input type=\"number\" min=\"0\" class=\"editCellInput\" [disabled]=\"row.day_type=='1'\"\n                              [ngClass]=\"{'disable_input': row.day_type=='1'}\" [(ngModel)]=\"row.days\" name=\"label\">\n                          </div>\n                        </td>\n                        <!-- <td *ngIf=\"selectedTemplate.country_id=='1'\"> -->\n                        <td *ngIf=\"is_tax_enabled\">\n\n                          <div class=\"field-wrapper\">\n                            <input type=\"number\" min=\"0\" readonly=\"true\" class=\"editCellInput\"\n                              [(ngModel)]=\"row.initial_fee_amount\" name=\"label\">\n                          </div>\n                        </td>\n                        <!-- <td *ngIf=\"selectedTemplate.country_id=='1'\"> -->\n                        <td *ngIf=\"is_tax_enabled\">\n\n                          <div class=\"field-wrapper\">\n                            <input type=\"number\" min=\"0\" readonly=\"true\" class=\"editCellInput\" [ngModel]='row.tax'\n                              name=\"label\">\n                          </div>\n                        </td>\n                        <td>\n                          <div class=\"field-wrapper\">\n                            <input type=\"number\" min=\"0\" class=\"editCellInput\" [(ngModel)]=\"row.fees_amount\"\n                              (keyup)=\"feeInstallmentChnge(row)\" name=\"label\">\n                          </div>\n                        </td>\n                        <td>\n                          <i class=\"fa fa-trash\" (click)=\"deleteRow(row , i)\" style=\"color:#fa3145;cursor: pointer;\"\n                            title=\"Delete\" aria-hidden=\"true\"></i>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </fieldset>\n\n          <fieldset class=\"additional\">\n            <h1>Manage Additional Fees</h1>\n\n            <div class=\"row\" style=\"display: flex;\">\n              <div class=\"c-sm-2 c-md-2 c-lg-2\">\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"row.category_id\">Select Fee Type</label>\n                  <select id=\"\" class=\"form-ctrl\" style=\"background: transparent\"\n                    [(ngModel)]=\"additionalInstallment.fee_type\" (ngModelChange)=\"onAdditionalFeeSelection($event)\"\n                    name=\"row.category_id\">\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let opt of otherFeetype; let i= index ; trackBy : index\" [value]=\"opt.id\">\n                      {{opt.value}}\n                    </option>\n                  </select>\n\n                </div>\n              </div>\n\n              <div class=\"c-sm-2 c-md-2 c-lg-2\">\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"row.category_id\">Trigger Date</label>\n                  <select id=\"\" class=\"form-ctrl\" style=\"background: transparent\"\n                    [(ngModel)]=\"additionalInstallment.day_type\"\n                    (ngModelChange)=\"changesValuesAsPerType(additionalInstallment)\" name=\"row.category_id\">\n                    <option value=\"1\">Course Assign Date (CAD)</option>\n                    <option value=\"2\">No of days after CAD</option>\n                    <option value=\"3\">No of Month after CAD</option>\n                  </select>\n\n                </div>\n              </div>\n\n              <div class=\"c-sm-2 c-md-2 c-lg-2\">\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"slotNew\"> No.\n                  </label>\n                  <input type=\"number\" min=\"0\" class=\"form-ctrl\" [disabled]=\"additionalInstallment.day_type=='1'\"\n                    [ngClass]=\"{'disable_input': additionalInstallment.day_type=='1'}\"\n                    [(ngModel)]=\"additionalInstallment.days\" name=\"slotNew\">\n\n                  <p>(Days/Months)</p>\n                </div>\n              </div>\n\n              <div class=\"c-sm-2 c-md-2 c-lg-2\">\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"slotNew\">Fee Amount\n                  </label>\n                  <input type=\"number\" min=\"0\" class=\"form-ctrl\" [(ngModel)]=\"additionalInstallment.initial_fee_amount\"\n                    name=\"slotNew\">\n\n                </div>\n              </div>\n\n              <!-- <div class=\"c-sm-2 c-md-2 c-lg-2\" *ngIf=\"selectedTemplate.country_id=='1'\"> -->\n              <div class=\"c-sm-2 c-md-2 c-lg-2\" *ngIf=\"is_tax_enabled\">\n\n                <div class=\"field-wrapper has-value\">\n                  <label for=\"slotNew\">{{tax_type_without_percentage}} Applicable (%)\n                  </label>\n                  <input type=\"number\" min=\"0\" class=\"form-ctrl\" [(ngModel)]=\"additionalInstallment.service_tax\"\n                    disabled name=\"slotNew\">\n\n                </div>\n              </div>\n\n              <div class=\"c-sm-2 c-md-2 c-lg-2\" style=\"margin: auto;cursor: pointer\">\n                <img src=\"assets/images/plus.png\" (click)=\"addAdditionalInst()\" alt=\"Add\"\n                  style=\"vertical-align: -webkit-baseline-middle;\">\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"\">\n                <div class=\"table table-responsive\">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>Fee Type </th>\n                        <th>Trigger Date</th>\n                        <th>No.(Days/Months)Due Date</th>\n                        <!-- <th *ngIf=\"selectedTemplate.country_id=='1'\">Fee Amount</th>\n                        <th *ngIf=\"selectedTemplate.country_id=='1'\">Tax</th>\n                        <th *ngIf=\"selectedTemplate.country_id!='1'\">Fee Amount</th>\n                        <th *ngIf=\"selectedTemplate.country_id=='1'\">Fee Amount Incl Tax</th> -->\n                        <th>Fee Amount</th>\n                        <th *ngIf=\"is_tax_enabled\">{{tax_type_without_percentage}}</th>\n                        <!-- <th>Fee Amount</th> -->\n                        <th *ngIf=\"is_tax_enabled\">Fee Amount Incl {{tax_type_without_percentage}}</th>\n                        <th>Action</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let row of otherInstList; let i= index ; trackBy : index\">\n                        <td>\n                          {{row.fee_type_name}}\n                        </td>\n                        <td>\n                          <select [(ngModel)]=\"row.day_type\" (ngModelChange)=\"changesValuesAsPerType(row)\"\n                            style=\"background: transparent\">\n                            <option value=\"1\">Course Assign Date (CAD)</option>\n                            <option value=\"2\">No of days after CAD</option>\n                            <option value=\"3\">No of Month after CAD</option>\n                          </select>\n                        </td>\n                        <td>\n                          <div class=\"field-wrapper\">\n                            <input type=\"number\" min=\"0\" class=\"editCellInput\" [disabled]=\"row.day_type=='1'\"\n                              [ngClass]=\"{'disable_input': row.day_type=='1'}\" [(ngModel)]=\"row.days\" name=\"label\">\n                          </div>\n                        </td>\n                        <!-- <td *ngIf=\"selectedTemplate.country_id=='1'\"> -->\n                        <td *ngIf=\"is_tax_enabled\">\n                          <div class=\"field-wrapper\">\n                            <input type=\"number\" min=\"0\" readonly=\"true\" class=\"editCellInput\"\n                              [(ngModel)]=\"row.initial_fee_amount\" name=\"label\">\n                          </div>\n                        </td>\n                        <!-- <td *ngIf=\"selectedTemplate.country_id=='1'\"> -->\n                        <td *ngIf=\"is_tax_enabled\">\n                          <div class=\"field-wrapper\">\n                            <input type=\"number\" min=\"0\" readonly=\"true\" class=\"editCellInput\"\n                              [ngModel]='row.fees_amount - row.initial_fee_amount' name=\"label\">\n                          </div>\n                        </td>\n                        <td>\n                          <div class=\"field-wrapper\">\n                            <input type=\"number\" min=\"0\" class=\"editCellInput\" [(ngModel)]=\"row.fees_amount\"\n                              (keyup)=\"feeTypesAmountChnge(row)\" name=\"label\">\n                          </div>\n                        </td>\n                        <td>\n                          <i class=\"fa fa-trash\" (click)=\"deleteAdditionalRow(row , i)\"\n                            style=\"color:#fa3145;cursor: pointer;\" title=\"Delete\" aria-hidden=\"true\"></i>\n                        </td>\n                      </tr>\n                      <tr *ngIf=\"otherInstList.length == 0\">\n                        <td colspan=\"7\">\n                          No Additional Fee\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n\n      <div class=\"\" popup-footer>\n        <div class=\"clearfix\">\n          <aside class=\"pull-right\">\n            <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeFeeEditor()\">\n            <input type=\"button\" value=\"Apply\" (click)=\"updateFeeTemplate()\" class=\"fullBlue btn\">\n          </aside>\n        </div>\n      </div>\n\n    </template-popup>\n\n    <proctur-popup [sizeWidth]=\"'small'\" *ngIf=\"addTemplatePopUp\">\n\n      <span class=\"closePopup pos-abs fbold show\" (click)=\"closeTemplatePopup()\" close-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n          <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n            <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n              <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                transform=\"translate(992.81 305.77) rotate(45)\" />\n              <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                transform=\"translate(978.81 305.77) rotate(45)\" />\n            </g>\n            <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\"\n              transform=\"translate(1012 297)\" />\n          </g>\n        </svg>\n      </span>\n\n      <div popup-header class=\"popup-header-content\">\n        <h2>Students Assigned</h2>\n      </div>\n\n      <div class=\"popup-content\" popup-content>\n        <div class=\"table table-responsive\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  Student Id\n                </th>\n                <th>\n                  Student Name\n                </th>\n              </tr>\n            </thead>\n\n            <tbody *ngIf=\"studentList!=null\">\n              <tr *ngFor=\"let i of studentList\">\n                <td>\n                  {{i.student_disp_id}}\n                </td>\n                <td>\n                  {{i.student_name}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </proctur-popup>\n\n  </aside>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/template-popup/template-popup.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/template-popup/template-popup.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupFeeTemplateTemplatePopupTemplatePopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section id=\"popup\" class=\"popupWrapper fadeIn\">\n    <div class=\"popup pos-abs\">\n      <div class=\"popup-wrapper pos-rel\">\n        <!-- Project content for close button here -->\n        <ng-content select=\"[close-button]\"></ng-content>\n        <div class=\"popup-content\">\n          <!-- project content for header here -->\n          <ng-content select=\"[popup-header]\"></ng-content>\n          \n          <div class=\"update-enquiry-form overflowHidden\">\n            \n            <!-- project content for popup here -->\n            <ng-content select=\"[popup-content]\"></ng-content>\n  \n            <!-- project footer for popup here -->\n            <ng-content select=\"[popup-footer]\"></ng-content>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </section>";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-template/fee-template-add/fee-template-add.component.scss":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-template/fee-template-add/fee-template-add.component.scss ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTemplateFeeTemplateAddFeeTemplateAddComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.middle-section ::-webkit-scrollbar {\n  display: block;\n}\n.middle-main .row {\n  margin: 5px -15px;\n}\n.middle-main .editCellInput {\n  background: transparent;\n}\n.middle-main .filler-setcion .checkBoxAllignment {\n  margin-left: 10px;\n}\n.middle-main .filler-setcion .question-wrapper {\n  margin-left: 10px;\n}\n.middle-main .filler-setcion .spanSection span {\n  font-weight: 600;\n  margin-left: 5px;\n  padding-left: 8px;\n  margin: 10px 0px;\n}\n.middle-main .installment-section {\n  margin-top: 10px;\n  border-top: 2px solid #efefef;\n}\n.middle-main .installment-section .installmentSection {\n  margin-bottom: 10px;\n}\n.middle-main .installment-section .installmentSection h3 {\n  margin-top: 10px;\n}\n.middle-main .installment-section .additionalFeeSection {\n  border-top: 2px solid #efefef;\n}\n.middle-main .installment-section .additionalFeeSection h3 {\n  margin-top: 10px;\n}\n.middle-main .installment-section .btnGroup {\n  margin-top: 10px !important;\n}\n.row .btn {\n  float: right;\n  margin-right: 20px;\n}\n.code-wrapper {\n  background-color: #efefef;\n  border-radius: 6px;\n  min-height: 93vh;\n  overflow-y: auto;\n}\n.field-wrapper .form-ctrl {\n  background: transparent;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.table-scroll-wrapper table thead tr th {\n  padding: 10px 10px;\n  margin: 0px 0px;\n}\n.table-scroll-wrapper table tbody tr td {\n  margin: 0px 0px;\n  text-align: center;\n  padding: 10px 10px;\n}\n.form-wrapper {\n  background: transparent;\n  margin: 5px 0px;\n  width: 100%;\n}\n.form-wrapper.datepicker {\n  padding-top: 3px;\n}\n.form-wrapper.datepicker span {\n  position: relative;\n  right: 25px;\n  font-weight: 600;\n  font-size: 16px;\n  color: red;\n  cursor: pointer;\n  width: 20px;\n  text-align: center;\n  /* &::before {\n                content: '';\n                background: url('/assets/images/calendar.svg') no-repeat;\n                position: absolute;\n                right: 25px;\n                top: 0px;\n                width: 21px;\n                height: 21px;\n                z-index: 0;\n            } */\n}\n.form-wrapper label {\n  padding-left: 10px;\n  font-size: 12px;\n  font-weight: 400;\n  color: 0084f6;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  width: 100%;\n}\n.form-wrapper .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 60%;\n  padding-left: 10px;\n  margin-left: 10px;\n  height: 30px;\n  padding: 0px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n.form-wrapper .side-form-ctrl.bsDatepicker {\n  width: 60%;\n}\n.form-wrapper.timepick {\n  width: 100%;\n  padding-top: 0px;\n}\n.form-wrapper.timepick .tbox {\n  width: 100%;\n}\n.form-wrapper.timepick .tbox .times {\n  display: inline-block;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding: 0px 5px;\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl.mins {\n  width: 100%;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl.mers {\n  width: 100%;\n}\nhr {\n  display: block;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: auto;\n  margin-right: auto;\n  border-style: inset;\n  border-width: 1px;\n}\n.question-wrapper .field-radio-wrapper .form-radio:checked + label:before {\n  left: 3px;\n  top: 3px;\n}\n.disable_input {\n  background: lightgrey !important;\n  cursor: not-allowed;\n}\n.qInfoIcon {\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n.qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0px 0px 1px 0px #0060A3 inset;\n  color: #0060A3;\n}\n.tooltip-box-field {\n  width: 170px;\n  white-space: nowrap;\n  min-height: 41px;\n  line-height: 18px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  font-weight: bold;\n}\n.tooltip-box-field.lg {\n  width: 200px;\n  white-space: nowrap;\n  min-height: 50px;\n  line-height: 20px;\n  padding: 5px 5px;\n}\n.tooltip-box-field.sm {\n  width: 100px;\n  white-space: nowrap;\n  min-height: 40px;\n  padding: 5px 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlLXRlbXBsYXRlL2ZlZS10ZW1wbGF0ZS1hZGQvZmVlLXRlbXBsYXRlLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FDckJ4QjtBRGpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FDbkI1QjtBQXBHQTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQXVHMUI7QUEzR0E7RUFNUSxjQUFjO0FBeUd0QjtBQXJHQTtFQUVRLGlCQUNKO0FBc0dKO0FBekdBO0VBS1EsdUJBQXVCO0FBd0cvQjtBQTdHQTtFQVNZLGlCQUFpQjtBQXdHN0I7QUFqSEE7RUFZWSxpQkFBaUI7QUF5RzdCO0FBckhBO0VBZ0JnQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUF5R2hDO0FBNUhBO0VBd0JRLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUF3R3JDO0FBaklBO0VBOEJZLG1CQUFtQjtBQXVHL0I7QUFySUE7RUE0QmdCLGdCQUFnQjtBQTZHaEM7QUF6SUE7RUFpQ1ksNkJBQTZCO0FBNEd6QztBQTdJQTtFQW1DZ0IsZ0JBQWdCO0FBOEdoQztBQWpKQTtFQXVDWSwyQkFBMkI7QUE4R3ZDO0FBekdBO0VBRVEsWUFBWTtFQUNaLGtCQUFrQjtBQTJHMUI7QUF2R0E7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUEwR3BCO0FBdkdBO0VBRVEsdUJBQXVCO0FBeUcvQjtBQXBHQTs7RUFFSSx3QkFBd0I7RUFDeEIsU0FBUztBQXVHYjtBQXBHQTtFQUtvQixrQkFBa0I7RUFDbEIsZUFBZTtBQW1HbkM7QUF6R0E7RUFhb0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFnR3RDO0FBeEZBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0FBMkZmO0FBOUZBO0VBS1EsZ0JBQWdCO0FBNkZ4QjtBQWxHQTtFQVFZLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEI7Ozs7Ozs7OztlQXNHRztBQUNmO0FBdkhBO0VBNkJRLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixxQkFBcUI7RUFFckIsbUNBQW1DO0VBQ25DLFdBQVc7QUE2Rm5CO0FBaklBO0VBdUNRLGlCQUFpQjtFQUNqQiwrQ0FBeUQ7RUFDekQsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUE4RnBCO0FBOUlBO0VBa0RZLFVBQVU7QUFnR3RCO0FBbEpBO0VBc0RRLFdBQVc7RUFDWCxnQkFBZ0I7QUFnR3hCO0FBdkpBO0VBeURZLFdBQVc7QUFrR3ZCO0FBM0pBO0VBMkRnQixxQkFBcUI7QUFvR3JDO0FBL0pBO0VBOERnQixpQkFBaUI7RUFDakIsK0NBQXlEO0VBQ3pELFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBcUc1QjtBQXpLQTtFQXNFb0IsV0FBVztBQXVHL0I7QUE3S0E7RUF5RW9CLFdBQVc7QUF3Ry9CO0FBakdBO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBb0dyQjtBQWpHQTtFQUdZLFNBQVM7RUFDVCxRQUFRO0FBa0dwQjtBQTdGQTtFQUNJLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFnR3ZCO0FBN0ZBO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCwyQkFBMkI7QUFnRy9CO0FBL0dBO0VBaUJRLHFCRHBOVTtFQ3FOVix5Q0FBNEM7RUFDNUMsY0R0TlU7QUN3VGxCO0FBOUZBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtBQWlHckI7QUF6R0E7RUFVUSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBbUd4QjtBQWpIQTtFQWlCUSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFvR3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlLXRlbXBsYXRlL2ZlZS10ZW1wbGF0ZS1hZGQvZmVlLXRlbXBsYXRlLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5taWRkbGUtbWFpbiB7XG4gICAgLnJvdyB7XG4gICAgICAgIG1hcmdpbjogNXB4IC0xNXB4XG4gICAgfVxuICAgIC5lZGl0Q2VsbElucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5maWxsZXItc2V0Y2lvbiB7XG4gICAgICAgIC5jaGVja0JveEFsbGlnbm1lbnQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnF1ZXN0aW9uLXdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNwYW5TZWN0aW9uIHtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5pbnN0YWxsbWVudC1zZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlZmVmZWY7XG4gICAgICAgIC5pbnN0YWxsbWVudFNlY3Rpb24ge1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZGRpdGlvbmFsRmVlU2VjdGlvbiB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2VmZWZlZjtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5idG5Hcm91cCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yb3cge1xuICAgIC5idG4ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG59XG5cbi5jb2RlLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDkzdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmZpZWxkLXdyYXBwZXIge1xuICAgIC5mb3JtLWN0cmwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbi8vLy8vLyBUdXJuIG9mZiBzcGlubmVyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50YWJsZS1zY3JvbGwtd3JhcHBlciB7XG4gICAgdGFibGUge1xuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi5mb3JtLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmLmRhdGVwaWNrZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLyogJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICB9ICovXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IDAwODRmNjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5zaWRlLWZvcm0tY3RybCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNDE5NjA3ODQzMTM3MjU0OSk7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICYuYnNEYXRlcGlja2VyIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi50aW1lcGljayB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAudGJveCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC50aW1lcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNpZGUtZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNDE5NjA3ODQzMTM3MjU0OSk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgJi5taW5zIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYubWVycyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xufVxuXG4ucXVlc3Rpb24td3JhcHBlciB7XG4gICAgLmZpZWxkLXJhZGlvLXdyYXBwZXIge1xuICAgICAgICAuZm9ybS1yYWRpbzpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAzcHg7XG4gICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRpc2FibGVfaW5wdXR7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnFJbmZvSWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCAjY2NjIGluc2V0O1xuICAgIGNvbG9yOiAjODg4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkaGVhZGVyLWJnO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggJGhlYWRlci1iZyBpbnNldDtcbiAgICAgICAgY29sb3I6ICRoZWFkZXItYmc7XG4gICAgfVxufVxuXG4udG9vbHRpcC1ib3gtZmllbGQge1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1pbi1oZWlnaHQ6IDQxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgJi5sZyB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgfVxuICAgICYuc20ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-template/fee-template-add/fee-template-add.component.ts":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-template/fee-template-add/fee-template-add.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: FeeTemplateAddComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTemplateFeeTemplateAddFeeTemplateAddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeTemplateAddComponent", function () {
        return FeeTemplateAddComponent;
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


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      var FeeTemplateAddComponent =
      /** @class */
      function () {
        var FeeTemplateAddComponent = /*#__PURE__*/function () {
          function FeeTemplateAddComponent(apiService, route, auth, commonService) {
            _classCallCheck(this, FeeTemplateAddComponent);

            this.apiService = apiService;
            this.route = route;
            this.auth = auth;
            this.commonService = commonService;
            this.showDefaultTemplate = '0';
            this.masterCourseList = [];
            this.CourseList = [];
            this.countryAdditioalFeeTypes = {};
            this.addNewTemplate = {
              template_name: '',
              fee_amount: "",
              master_course_name: '',
              course_id: -1,
              tax_type: "inclusive",
              apply_tax: false,
              tax_amount: 0,
              total_fee: 0,
              installmentCount: '',
              is_default_template: false,
              country_id: -1
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
              fee_type_name: '',
              country_id: -1
            };
            this.feeStructure = [];
            this.installMentTable = [];
            this.otherInstList = [];
            this.otherFeetype = [];
            this.countryDetails = [];
            this.totalAmount = 0;
            this.discountAmount = 0;
            this.showDetails = false;
            this.enableTaxOptions = 0;
            this.isLangInstitute = false;
            this.schoolModel = false;
          }

          _createClass(FeeTemplateAddComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == 'LANG') {
                  _this.isLangInstitute = true;
                  _this.moduleState = 'Batch';
                } else {
                  _this.isLangInstitute = false;
                  _this.moduleState = 'Course';
                }
              }); // changes by Nalini - to handle school model conditions

              this.auth.schoolModel.subscribe(function (res) {
                _this.schoolModel = false;

                if (res) {
                  _this.schoolModel = true;
                }
              });
              this.enableTaxOptions = sessionStorage.getItem('enable_tax_applicable_fee_installments');
              this.showDefaultTemplate = sessionStorage.getItem('enable_fee_template_country_wise');
              this.tax_type_without_percentage = sessionStorage.getItem("tax_type_without_percentage");
              this.getAllMasterCourseList();
              this.getDetailOfFeeStructur();
              this.fetchDataForCountryDetails();
            }
          }, {
            key: "changesValuesAsPerType",
            value: function changesValuesAsPerType(row) {
              if (row.day_type == 1) {
                row.days = 0;
              }
            }
          }, {
            key: "fetchDataForCountryDetails",
            value: function fetchDataForCountryDetails() {
              var _this2 = this;

              this.countryAdditioalFeeTypes = {};
              var encryptedData = sessionStorage.getItem('country_data');
              var data = JSON.parse(encryptedData);

              if (data.length > 0) {
                this.countryDetails = data;
                var country_ids = [];
                this.countryDetails.forEach(function (item) {
                  _this2.countryAdditioalFeeTypes[item.id] = [];
                  country_ids.push(item.id);
                });
                this.apiService.additionalFeeTypeDetail(country_ids.join()).subscribe(function (res) {
                  res && res.forEach(function (fee) {
                    var country_id = fee.countryId.country_id;
                    var fee_details = {};
                    fee_details[fee.fee_type_id] = fee.fee_type;

                    _this2.countryAdditioalFeeTypes[country_id].push(fee_details);
                  });
                }, function (err) {
                  _this2.commonService.showErrorMessage('error', '', err.error.message);
                });
              } // console.log(data);

            }
          }, {
            key: "getDetailOfFeeStructur",
            value: function getDetailOfFeeStructur() {
              var _this3 = this;

              this.apiService.fetchFeeDetail(0).subscribe(function (res) {
                _this3.feeStructure = res;
              }, function (err) {
                _this3.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "getAllMasterCourseList",
            value: function getAllMasterCourseList() {
              var _this4 = this;

              if (this.isLangInstitute) {
                this.apiService.getAllStandard().subscribe(function (res) {
                  _this4.masterCourseList = res;
                }, function (err) {//console.log(err);
                });
              } else {
                this.apiService.getMasterCourse().subscribe(function (res) {
                  _this4.masterCourseList = res;
                }, function (err) {
                  _this4.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "onMasterCourseSelection",
            value: function onMasterCourseSelection() {
              var _this5 = this;

              this.CourseList = [];

              if (this.addNewTemplate.master_course_name != "-1") {
                if (this.isLangInstitute) {
                  this.apiService.getCoursesOfStandard(this.addNewTemplate.master_course_name).subscribe(function (res) {
                    _this5.CourseList = res;
                  }, function (err) {//console.log(err);
                  });
                } else {
                  this.apiService.getCourse(this.addNewTemplate.master_course_name).subscribe(function (res) {
                    _this5.CourseList = res;
                  }, function (err) {
                    _this5.commonService.showErrorMessage('error', '', err.error.message);
                  });
                }
              }
            }
          }, {
            key: "onAmountKeyUp",
            value: function onAmountKeyUp() {
              switch (this.addNewTemplate.tax_type) {
                case 'inclusive':
                  {
                    this.calculateAmount(true);
                    break;
                  }

                case 'exclusive':
                  {
                    this.calculateAmount(false);
                    break;
                  }
              }
            }
          }, {
            key: "onTaxTypeChanges",
            value: function onTaxTypeChanges() {
              switch (this.addNewTemplate.tax_type) {
                case 'inclusive':
                  {
                    this.addNewTemplate.apply_tax = true;
                    this.calculateAmount(true);
                    break;
                  }

                case 'exclusive':
                  {
                    this.addNewTemplate.apply_tax = true;
                    this.calculateAmount(false);
                    break;
                  }
              }
            }
          }, {
            key: "calculateAmount",
            value: function calculateAmount(taxInclusive) {
              if (taxInclusive == true) {
                this.addNewTemplate.tax_amount = Math.floor(Number(this.addNewTemplate.fee_amount)) - Math.floor(Number(this.addNewTemplate.fee_amount) * 100 / (100 + this.feeStructure.registeredServiceTax));
                this.addNewTemplate.total_fee = Number(this.addNewTemplate.fee_amount);
              } else {
                this.addNewTemplate.tax_amount = Math.floor(Number(this.addNewTemplate.fee_amount) * this.feeStructure.registeredServiceTax * .01);
                this.addNewTemplate.total_fee = Number(this.addNewTemplate.fee_amount + this.addNewTemplate.tax_amount);
              }
            }
          }, {
            key: "createInstallment",
            value: function createInstallment() {
              this.onTaxTypeChanges();
              var check = this.validateAllFields();

              if (!check) {
                this.showDetails = false;
                return;
              }

              this.showDetails = true;
              this.createInstallmentTable();
            } // set editional fee as per country --laxmi 

          }, {
            key: "selectedCountryCode",
            value: function selectedCountryCode(country_id) {
              var _this6 = this;

              this.selectedCountry = null;
              this.otherInstList = [];
              this.showDetails = false;
              this.countryDetails.forEach(function (country) {
                if (country.id == Number(country_id)) {
                  _this6.selectedCountry = country;
                }
              });
              console.log(this.selectedCountry);
              this.fillFeeType(this.countryAdditioalFeeTypes[country_id]);
              this.clearManageFee();
              this.additionalInstallment.country_id = this.addNewTemplate.country_id = country_id;
              this.addNewTemplate.tax_type = 'inclusive';
              this.calculateAmount(true);
              this.installMentTable && this.installMentTable.length && this.installMentTable.forEach(function (installement) {
                installement.country_id = country_id;
              });
            }
          }, {
            key: "createInstallmentTable",
            value: function createInstallmentTable() {
              this.installMentTable = [];
              var amount = Math.floor(Number(this.addNewTemplate.fee_amount) / Number(this.addNewTemplate.installmentCount));
              var tax_amount = Math.floor(this.addNewTemplate.tax_amount / Number(this.addNewTemplate.installmentCount));
              var totalAmount = 0;
              var taxAmount = 0;
              var obj = [];
              this.additionalInstallment.country_id = this.addNewTemplate.country_id;

              for (var i = 0; i < Number(this.addNewTemplate.installmentCount); i++) {
                var test = {};
                test.day_type = 1;
                test.days = 0;

                if (this.enableTaxOptions == "1") {
                  if (this.addNewTemplate.tax_type == "inclusive") {
                    test.initial_fee_amount = amount - tax_amount;
                    test.tax = tax_amount;
                  } else {
                    test.initial_fee_amount = amount;
                    test.tax = tax_amount;
                  }

                  test.service_tax_applicable = "Y";
                } else {
                  test.initial_fee_amount = amount;
                  test.tax = 0;
                }

                test.totalAmount = test.tax + test.initial_fee_amount;
                taxAmount = taxAmount + test.tax;
                totalAmount = totalAmount + test.totalAmount;
                test.country_id = Number(this.addNewTemplate.country_id);
                obj.push(test);
              }

              if (Number(this.addNewTemplate.total_fee) != totalAmount) {
                var lastInstallment = obj[obj.length - 1];
                lastInstallment.totalAmount = lastInstallment.totalAmount + Number(this.addNewTemplate.total_fee) - totalAmount;

                if (this.enableTaxOptions == '1') {
                  lastInstallment.initial_fee_amount = Math.floor(Number(lastInstallment.totalAmount * 100 / (100 + this.feeStructure.registeredServiceTax)));
                  lastInstallment.tax = lastInstallment.totalAmount - lastInstallment.initial_fee_amount;
                } else {
                  lastInstallment.tax = 0;
                  lastInstallment.initial_fee_amount = lastInstallment.totalAmount;
                }

                obj[obj.length - 1] = lastInstallment;
              } // if (Number(this.addNewTemplate.tax_amount) != taxAmount) {
              //   let length = obj.length;
              //   obj[length - 1].tax = obj[length - 1].tax + Number(this.addNewTemplate.tax_amount) - taxAmount;
              // }


              this.installMentTable = obj;
            }
          }, {
            key: "onAdditionalFeeSelection",
            value: function onAdditionalFeeSelection(event) {
              var _this7 = this;

              var id = event;
              this.apiService.getAdditionalFeeDeatails(event).subscribe(function (res) {
                _this7.additionalInstallment.initial_fee_amount = res.fee_amount;
                _this7.additionalInstallment.service_tax = res.fee_type_tax;
                _this7.additionalInstallment.fee_type = res.fee_type_id;
                _this7.additionalInstallment.country_id = _this7.addNewTemplate.country_id;

                if (res.fee_type_tax > 0) {
                  _this7.additionalInstallment.service_tax_applicable = "Y";
                }

                _this7.additionalInstallment.fee_type = id;
                _this7.additionalInstallment.fees_amount = res.fee_amount + res.fee_amount * res.fee_type_tax * 0.01;
                _this7.additionalInstallment.fee_type_name = res.fee_type;
              }, function (err) {
                _this7.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "validateAllFields",
            value: function validateAllFields() {
              if (this.addNewTemplate.template_name == "" || null) {
                this.commonService.showErrorMessage('error', '', 'Template name can not be null');
                return false;
              }

              if (this.addNewTemplate.fee_amount == "" || 0) {
                this.commonService.showErrorMessage('error', '', 'Please enter valid amount');
                return false;
              }

              if (this.addNewTemplate.installmentCount == "" || 0) {
                this.commonService.showErrorMessage('error', '', 'Installment Count can not be zero');
                return false;
              }

              if (this.addNewTemplate.is_default_template) {
                if (this.addNewTemplate.master_course_name == "" || this.addNewTemplate.course_id == -1) {
                  this.commonService.showErrorMessage('error', '', 'Please enter Master Course and Course to use is default template.');
                  return false;
                }
              }

              return true;
            }
          }, {
            key: "addAdditionalInst",
            value: function addAdditionalInst() {
              if (this.additionalInstallment.fee_type == -1) {
                this.commonService.showErrorMessage('error', '', 'Please Select Fee Type');
                return;
              }

              if (Number(this.additionalInstallment.initial_fee_amount) > 0) {
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
                this.clearManageFee();
              }
            }
          }, {
            key: "clearManageFee",
            value: function clearManageFee() {
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
                fee_type_name: '',
                country_id: this.additionalInstallment.country_id
              };
            }
          }, {
            key: "fillFeeType",
            value: function fillFeeType(data) {
              var _this8 = this;

              this.otherFeetype = [];
              data.forEach(function (object) {
                var keys = Object.keys(object);
                var test = {};
                test.id = keys[0];
                test.value = object[keys[0]];

                _this8.otherFeetype.push(test);
              });
            }
          }, {
            key: "createFeeTemplate",
            value: function createFeeTemplate() {
              var _this9 = this;

              var tax;
              var defaultValue;

              if (this.addNewTemplate.is_default_template) {
                defaultValue = '1';
              } else {
                defaultValue = '0';
              }

              if (this.addNewTemplate.apply_tax) {
                tax = "Y";
              } else {
                tax = "N";
              }

              var feeSch = this.makeJSONForCustomFee();

              if (feeSch == false) {
                return;
              }

              var data = {
                is_default: defaultValue,
                country_id: this.addNewTemplate.country_id,
                customFeeSchedules: feeSch,
                studentwise_total_fees_amount: this.totalAmount.toString(),
                studentwise_total_fees_discount: 0,
                studentwise_fees_tax_applicable: tax,
                template_id: 0,
                template_name: this.addNewTemplate.template_name
              };

              if (this.isLangInstitute) {
                data.course_id = '-1';
                data.subject_id = this.addNewTemplate.course_id;
              } else {
                data.course_id = this.addNewTemplate.course_id;
              }

              if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.apiService.updateFeeTemplate(data).subscribe(function (res) {
                  _this9.auth.hideLoader();

                  _this9.commonService.showErrorMessage('success', 'Updated', 'Fee Structure created Successfully');

                  _this9.route.navigateByUrl('/view/fee/data-setup/fee-template/home');
                }, function (err) {
                  _this9.auth.hideLoader();

                  _this9.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "makeJSONForCustomFee",
            value: function makeJSONForCustomFee() {
              this.totalAmount = 0;
              var data = [];
              var registeredServiceTax = 0;

              if (this.addNewTemplate.apply_tax) {
                registeredServiceTax = this.feeStructure.registeredServiceTax;
              }

              for (var t = 0; t < this.installMentTable.length; t++) {
                var test = {};
                test.fee_type = 0;
                test.initial_fee_amount = this.installMentTable[t].initial_fee_amount.toString();
                test.service_tax = registeredServiceTax;
                test.fees_amount = this.installMentTable[t].totalAmount;
                test.service_tax_applicable = this.installMentTable[t].service_tax_applicable;
                test.day_type = this.installMentTable[t].day_type.toString();
                test.days = Number(this.installMentTable[t].days).toString();
                this.totalAmount = this.totalAmount + Number(test.fees_amount);
                data.push(test);
              }

              if (this.totalAmount != this.addNewTemplate.total_fee) {
                this.commonService.showErrorMessage('error', '', 'Amount provided in installments doesnot match with total Amount');
                return false;
              }

              for (var _t = 0; _t < this.otherInstList.length; _t++) {
                var _test = {};
                _test.fee_type = this.otherInstList[_t].fee_type;
                _test.initial_fee_amount = this.otherInstList[_t].initial_fee_amount.toString();
                _test.service_tax = this.otherInstList[_t].service_tax.toString();
                _test.fees_amount = this.otherInstList[_t].fees_amount.toString();
                _test.service_tax_applicable = 0;

                if (this.addNewTemplate.apply_tax) {
                  _test.service_tax_applicable = this.otherInstList[_t].service_tax_applicable;
                }

                _test.schedule_id = this.otherInstList[_t].schedule_id.toString();
                _test.is_referenced = this.otherInstList[_t].is_referenced;
                _test.day_type = this.otherInstList[_t].day_type.toString();
                _test.days = Number(this.otherInstList[_t].days).toString();
                this.totalAmount = this.totalAmount + this.otherInstList[_t].fees_amount;
                data.push(_test);
              }

              return data;
            }
          }, {
            key: "userChangedInitialAmount",
            value: function userChangedInitialAmount(data, event) {
              if (data.service_tax_applicable == "Y") {
                data.tax = Math.floor(data.initial_fee_amount * 0.01 * this.feeStructure.registeredServiceTax);
                data.totalAmount = Math.floor(data.initial_fee_amount + data.tax);
              } else {
                data.tax = 0;
              }
            }
          }, {
            key: "userChangedAmountTotalAmount",
            value: function userChangedAmountTotalAmount(data, event) {
              if (data.service_tax_applicable == "Y") {
                data.tax = Math.floor(data.totalAmount - Math.floor(Number(data.totalAmount) * 100 / (100 + this.feeStructure.registeredServiceTax)));
                data.initial_fee_amount = Math.floor(Number(data.totalAmount - data.tax));
              } else {
                data.initial_fee_amount = Math.floor(Number(data.totalAmount));
                data.tax = 0;
              }
            }
          }, {
            key: "userChangeAdditionalFeeAmount",
            value: function userChangeAdditionalFeeAmount(data, event) {
              var input = Math.floor(Number(event.currentTarget.value));

              if (data.service_tax > 0) {
                var tax = Math.floor(input - Math.floor(Number(input) * 100 / (100 + data.service_tax)));
                data.initial_fee_amount = Math.floor(input - tax);

                if (Number(data.initial_fee_amount + tax) != input) {
                  data.initial_fee_amount = Math.floor(data.initial_fee_amount + input - Number(data.initial_fee_amount + tax));
                }
              } else {
                data.initial_fee_amount = input;
                data.tax = 0;
              }
            }
          }, {
            key: "deleteAdditionalRow",
            value: function deleteAdditionalRow(row, index) {
              this.otherInstList.splice(index, 1);
            }
          }]);

          return FeeTemplateAddComponent;
        }();

        FeeTemplateAddComponent.ctorParameters = function () {
          return [{
            type: _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_4__["FeeStrucService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceFactory"]
          }];
        };

        FeeTemplateAddComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-fee-template-add',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./fee-template-add.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/fee-template-add/fee-template-add.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./fee-template-add.component.scss */
          "./src/app/components/fee-module/data-setup/fee-template/fee-template-add/fee-template-add.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_feeStruc_service__WEBPACK_IMPORTED_MODULE_4__["FeeStrucService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceFactory"]])], FeeTemplateAddComponent);
        return FeeTemplateAddComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-template/fee-template-routing.module.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-template/fee-template-routing.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: FeeTemplateRoutingModule */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTemplateFeeTemplateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeTemplateRoutingModule", function () {
        return FeeTemplateRoutingModule;
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


      var _fee_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fee-template.component */
      "./src/app/components/fee-module/data-setup/fee-template/fee-template.component.ts");
      /* harmony import */


      var _template_home_template_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./template-home/template-home.component */
      "./src/app/components/fee-module/data-setup/fee-template/template-home/template-home.component.ts");
      /* harmony import */


      var _fee_template_add_fee_template_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fee-template-add/fee-template-add.component */
      "./src/app/components/fee-module/data-setup/fee-template/fee-template-add/fee-template-add.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FeeTemplateRoutingModule =
      /** @class */
      function () {
        var FeeTemplateRoutingModule = function FeeTemplateRoutingModule() {
          _classCallCheck(this, FeeTemplateRoutingModule);
        };

        FeeTemplateRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _fee_template_component__WEBPACK_IMPORTED_MODULE_2__["FeeTemplateHomeComponent"],
            pathMatch: 'prefix',
            children: [{
              path: '',
              redirectTo: 'home'
            }, {
              path: 'home',
              component: _template_home_template_home_component__WEBPACK_IMPORTED_MODULE_3__["TemplateHomeComponent"]
            }, {
              path: 'add',
              component: _fee_template_add_fee_template_add_component__WEBPACK_IMPORTED_MODULE_4__["FeeTemplateAddComponent"]
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], FeeTemplateRoutingModule);
        return FeeTemplateRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-template/fee-template.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-template/fee-template.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTemplateFeeTemplateComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlLW1vZHVsZS9kYXRhLXNldHVwL2ZlZS10ZW1wbGF0ZS9mZWUtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-template/fee-template.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-template/fee-template.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: FeeTemplateHomeComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTemplateFeeTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeTemplateHomeComponent", function () {
        return FeeTemplateHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/common-service */
      "./src/app/services/common-service.ts");

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

      var FeeTemplateHomeComponent =
      /** @class */
      function () {
        var FeeTemplateHomeComponent = /*#__PURE__*/function () {
          function FeeTemplateHomeComponent(commonService) {
            _classCallCheck(this, FeeTemplateHomeComponent);

            this.commonService = commonService;
          }

          _createClass(FeeTemplateHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.commonService.removeSelectionFromSideNav();
            }
          }]);

          return FeeTemplateHomeComponent;
        }();

        FeeTemplateHomeComponent.ctorParameters = function () {
          return [{
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceFactory"]
          }];
        };

        FeeTemplateHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-fee-template',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./fee-template.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/fee-template.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./fee-template.component.scss */
          "./src/app/components/fee-module/data-setup/fee-template/fee-template.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceFactory"]])], FeeTemplateHomeComponent);
        return FeeTemplateHomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-template/fee-template.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-template/fee-template.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: FeeTemplateModule */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTemplateFeeTemplateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeTemplateModule", function () {
        return FeeTemplateModule;
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! hammerjs */
      "./node_modules/hammerjs/hammer.js");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _fee_template_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fee-template-routing.module */
      "./src/app/components/fee-module/data-setup/fee-template/fee-template-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/primeng */
      "./node_modules/primeng/primeng.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _fee_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./fee-template.component */
      "./src/app/components/fee-module/data-setup/fee-template/fee-template.component.ts");
      /* harmony import */


      var _template_popup_template_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./template-popup/template-popup.component */
      "./src/app/components/fee-module/data-setup/fee-template/template-popup/template-popup.component.ts");
      /* harmony import */


      var _template_home_template_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./template-home/template-home.component */
      "./src/app/components/fee-module/data-setup/fee-template/template-home/template-home.component.ts");
      /* harmony import */


      var _fee_template_add_fee_template_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./fee-template-add/fee-template-add.component */
      "./src/app/components/fee-module/data-setup/fee-template/fee-template-add/fee-template-add.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../services/feeStruc.service */
      "./src/app/services/feeStruc.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


      var FeeTemplateModule =
      /** @class */
      function () {
        var FeeTemplateModule = function FeeTemplateModule() {
          _classCallCheck(this, FeeTemplateModule);
        };

        FeeTemplateModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fee_template_routing_module__WEBPACK_IMPORTED_MODULE_4__["FeeTemplateRoutingModule"], // BsDatepickerModule,
          primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SplitButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["MenuModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]],
          declarations: [_fee_template_component__WEBPACK_IMPORTED_MODULE_7__["FeeTemplateHomeComponent"], _template_home_template_home_component__WEBPACK_IMPORTED_MODULE_9__["TemplateHomeComponent"], _template_popup_template_popup_component__WEBPACK_IMPORTED_MODULE_8__["TemplatePopUpComponent"], _fee_template_add_fee_template_add_component__WEBPACK_IMPORTED_MODULE_10__["FeeTemplateAddComponent"]],
          entryComponents: [],
          providers: [_services_feeStruc_service__WEBPACK_IMPORTED_MODULE_12__["FeeStrucService"]]
        })], FeeTemplateModule);
        return FeeTemplateModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-template/template-home/template-home.component.scss":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-template/template-home/template-home.component.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTemplateTemplateHomeTemplateHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.feeManager {\n  width: 100%;\n}\n.feeManager .fee-content {\n  max-height: 400px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.feeManager .row {\n  margin: 0px;\n}\n.feeManager .header {\n  border-bottom: 1px solid rgba(119, 119, 119, 0.733);\n  margin: 5px 0px;\n}\n.feeManager table thead tr {\n  height: 40px;\n}\n.feeManager table thead tr th {\n  padding: 0px !important;\n  font-weight: bold;\n  color: #777;\n  border-bottom: 2px solid #ccc;\n  background: white;\n}\n.feeManager table .field-wrapper {\n  background: transparent;\n  width: 100%;\n}\n.feeManager table .field-wrapper .form-ctrl {\n  background: transparent !important;\n  border-bottom: solid 1px #0084f6 !important;\n  text-align: center !important;\n  width: 180px !important;\n}\n.feeManager table .field-wrapper {\n  position: relative;\n}\n.feeManager table .field-wrapper.datePickerBox .bsDatepicker {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.feeManager table .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 30px;\n  top: 0px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.feeManager table .field-wrapper .date-clear {\n  position: absolute;\n  right: 60%;\n  top: 50px;\n  cursor: pointer;\n  color: #0084f6;\n}\n.feeManager table tr {\n  line-height: 20px;\n}\n.feeManager table tr i {\n  font-size: 18px;\n  cursor: pointer;\n}\n.feeManager table tr td {\n  padding: 3px 20px;\n}\n.feeManager .installment {\n  padding: 5px;\n  background: #efefef;\n  border-radius: 5px;\n  padding: 10px 10px 10px 10px;\n}\n.feeManager .installment .field-wrapper {\n  background: transparent;\n}\n.feeManager .installment .field-wrapper .form-ctrl {\n  background: transparent;\n  border-bottom: 1px solid #ccc;\n}\n.feeManager .installment .data-adder {\n  margin: 0px 0px 5px 0px;\n}\n.feeManager .installment .data-adder .outer .inner {\n  width: 30%;\n  display: inline-flex;\n}\n.feeManager .installment .data-adder .outer .inner .btn {\n  padding: 2px 0px 0px 7px;\n  border: none;\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n}\n.feeManager .installment .data-adder .outer .inner .btn .tooltip {\n  position: relative;\n  top: -30px;\n  right: 50px;\n  min-width: 100px;\n  font-size: 12px;\n  padding: 6px;\n  height: 35px;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.774);\n  color: white;\n  visibility: hidden;\n  opacity: 0;\n}\n.feeManager .installment .data-adder .outer .inner .btn:hover {\n  background: #d8d6d6;\n}\n.feeManager .installment .data-adder .outer .inner .btn:hover .tooltip {\n  position: relative;\n  top: -65px;\n  right: 100px;\n  min-width: 160px;\n  padding: 6px;\n  border-radius: 5px;\n  font-size: 12px;\n  height: 35px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.2s;\n}\n.feeManager .installment .data-adder .outer .inner .btn:focus {\n  outline: none;\n}\n.feeManager .installment .data-adder .outer .inner .btn:active {\n  box-shadow: none;\n}\n.feeManager .additional {\n  margin-top: 40px;\n  padding: 5px;\n  background: #efefef;\n  border-radius: 5px;\n  padding: 10px 10px 10px 10px;\n}\n.feeManager .additional .field-wrapper {\n  background: transparent;\n}\n.feeManager .additional .field-wrapper .form-ctrl {\n  background: transparent;\n  border-bottom: 1px solid #ccc;\n}\n.feeManager .additional legend {\n  padding: 0.2em 0.5em;\n  border: 1px solid #004a7e;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  width: 200px;\n  background: #004a7e;\n}\n.feeManager .additional .data-adder {\n  margin: 0px 0px 5px 0px;\n}\n.feeManager .additional .data-adder .outer .inner {\n  width: 30%;\n  display: inline-flex;\n}\n.feeManager .additional .data-adder .outer .inner .btn {\n  padding: 2px 0px 0px 7px;\n  border: none;\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n}\n.feeManager .additional .data-adder .outer .inner .btn .tooltip {\n  position: relative;\n  top: -30px;\n  right: 50px;\n  min-width: 100px;\n  font-size: 12px;\n  padding: 6px;\n  height: 35px;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.774);\n  color: white;\n  visibility: hidden;\n  opacity: 0;\n}\n.feeManager .additional .data-adder .outer .inner .btn:hover {\n  background: #d8d6d6;\n}\n.feeManager .additional .data-adder .outer .inner .btn:hover .tooltip {\n  position: relative;\n  top: -65px;\n  right: 100px;\n  min-width: 160px;\n  padding: 6px;\n  border-radius: 5px;\n  font-size: 12px;\n  height: 35px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.2s;\n}\n.feeManager .additional .data-adder .outer .inner .btn:focus {\n  outline: none;\n}\n.feeManager .additional .data-adder .outer .inner .btn:active {\n  box-shadow: none;\n}\n.feeManager .additional .data-adder .outer .innermost {\n  display: inline-flex;\n}\n.feeManager .additional .data-adder .outer .innermost .field-wrapper {\n  width: 200px;\n}\n.feeManager .additional .data-adder .outer .innermost .btn {\n  padding: 2px 0px 0px 7px;\n  border: none;\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n}\n.feeManager .additional .data-adder .outer .innermost .btn .tooltip {\n  position: relative;\n  top: -30px;\n  right: 50px;\n  min-width: 100px;\n  font-size: 12px;\n  padding: 6px;\n  height: 35px;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.774);\n  color: white;\n  visibility: hidden;\n  opacity: 0;\n}\n.feeManager .additional .data-adder .outer .innermost .btn:hover {\n  background: #d8d6d6;\n}\n.feeManager .additional .data-adder .outer .innermost .btn:hover .tooltip {\n  position: relative;\n  top: -65px;\n  right: 100px;\n  min-width: 160px;\n  padding: 6px;\n  border-radius: 5px;\n  font-size: 12px;\n  height: 35px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.2s;\n}\n.feeManager .additional .data-adder .outer .innermost .btn:focus {\n  outline: none;\n}\n.feeManager .additional .data-adder .outer .innermost .btn:active {\n  box-shadow: none;\n}\n.Pheader h2 {\n  display: inline-block;\n}\n.Pheader .headitor {\n  display: inline-block;\n}\n.Pheader .headitor.field-wrapper {\n  padding-top: 0px;\n}\n.Pheader .headitor.field-wrapper .form-ctrl {\n  margin: 0px 0px 0px 15px;\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px 0px 0px 0px;\n  outline: none;\n  border: 0;\n  border-bottom: solid 1px #e2ebee;\n  height: 30px;\n  font: 400 12px 'Open sans',sans-serif;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 24px;\n}\n.Pheader a {\n  display: inline-block;\n  line-height: 1.2;\n  position: relative;\n  cursor: S;\n  bottom: -5px;\n  margin-left: 15px;\n}\n.Pheader a img {\n  width: 25px;\n  height: 25px;\n}\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n/* Webkit browsers like Safari and Chrome */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/* =================================================================================== */\n.feeactions ul li {\n  display: inline-block;\n  cursor: pointer;\n}\n/* =================================================================================== */\n.headEnq .option-wrap {\n  width: 20px;\n  height: 20px;\n}\n.headEnq .btn {\n  padding: 2px 0px 0px 7px;\n  border: none;\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n}\n.headEnq .btn .tooltip {\n  position: relative;\n  top: -30px;\n  right: -30px;\n  min-width: 100px;\n  font-size: 12px;\n  padding: 6px;\n  height: 35px;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: hidden;\n  opacity: 0;\n}\n.headEnq .btn:hover {\n  background: #d8d6d6;\n}\n.headEnq .btn:hover .tooltip {\n  position: relative;\n  top: -30px;\n  right: 120px;\n  min-width: 100px;\n  padding: 6px;\n  border-radius: 5px;\n  font-size: 12px;\n  height: 35px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.2s;\n}\n.headEnq .btn:focus {\n  outline: none;\n}\n.headEnq .btn:active {\n  box-shadow: none;\n}\n.headEnq .enq-dropdown-content {\n  position: absolute;\n  background: white;\n  z-index: 10;\n  width: 150px;\n  padding: 0px 5px;\n  height: 80px;\n  box-shadow: 1px 1px 3px 1px black;\n}\n.headEnq .enq-dropdown-content ul {\n  list-style: none;\n}\n.headEnq .enq-dropdown-content ul .export-icon {\n  background: url(\"/assets/images/expand.svg\") no-repeat;\n  margin: 10px 0px 0px 2px;\n  background-size: 20px auto;\n  padding: 0px 0px 0px 25px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #888;\n}\n.headEnq .enq-dropdown-content ul .export-icon:hover {\n  color: #0084f6;\n}\n.headEnq .enq-dropdown-content ul .upload-icon {\n  background: url(\"/assets/images/pdf_download.svg\") no-repeat;\n  margin: 10px 0px 0px 2px;\n  background-size: 20px auto;\n  padding: 0px 0px 0px 25px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #888;\n}\n.headEnq .enq-dropdown-content ul .upload-icon:hover {\n  color: #0084f6;\n}\n.headEnq .enq-dropdown-content ul li {\n  height: 25px;\n  padding: 7px;\n  border-bottom: 1px solid rgba(119, 119, 119, 0.705);\n}\n/* =================================================================================== */\n.table-head-menu {\n  position: relative;\n}\n.table-head-menu span {\n  cursor: pointer;\n  padding: 9px 0px;\n  display: block;\n  height: 100%;\n  background: #0084f6;\n  width: 40px;\n  height: 50px;\n  box-sizing: border-box;\n  float: right;\n  position: relative;\n}\n.table-head-menu span img {\n  width: 28px;\n  height: 30px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  transition: all 0.5s ease;\n  opacity: 1;\n  visibility: visible;\n  transform: rotate(0deg);\n}\n.table-head-menu span img + img {\n  opacity: 0;\n  visibility: hidden;\n  transform: rotate(90deg);\n  width: 24px;\n}\n.table-head-menu:hover span img {\n  transform: rotate(90deg);\n  opacity: 0;\n  visibility: hidden;\n}\n.table-head-menu:hover span img + img {\n  opacity: 1;\n  visibility: visible;\n  transform: rotate(0deg);\n}\n.table-heading-menu {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  background: #fff;\n  width: 200px;\n  text-align: left;\n  padding: 0px;\n  box-shadow: 0px 1px 2px 1px #dcdcdc;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.1s;\n}\n.table-head-menu:hover .table-heading-menu {\n  visibility: visible;\n  opacity: 1;\n  top: 100%;\n}\n.table-heading-menu ul li {\n  border-bottom: 1px solid #ccc;\n  padding: 5px 5px;\n}\n.table-heading-menu ul li .field-checkbox-wrapper {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n.table-heading-menu ul li .field-checkbox-wrapper label {\n  font-weight: normal;\n  cursor: pointer;\n}\n/* =================================================================================== */\n/* =================================================================================== */\n/* =================================================================================== */\n/* =================================================================================== */\n.tooltip-table:hover .tooltip-box-right {\n  visibility: visible;\n  opacity: 1;\n  left: 100px;\n}\n.tooltip-table .tooltip-box-right {\n  position: absolute;\n  min-width: 700px;\n  max-width: 750px;\n  min-height: 150px;\n  max-height: 200px;\n  background: #f5f5ed;\n  border: 1px solid #ccc;\n  left: 100px;\n  z-index: 1;\n  top: -65px;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.1s linear 0.1s;\n  font-size: 11px;\n  border-radius: 4px;\n  padding: 10px;\n  box-shadow: 0px 0px 10px #161515;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n/* =================================================================================== */\n/* =================================================================================== */\n/* =================================================================================== */\n#table-main {\n  margin-left: 0px !important;\n  margin-top: 15px;\n  margin-right: 15px !important;\n  max-height: 400px;\n  overflow: hidden;\n  width: 100%;\n}\n#table-main ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n@media screen and (max-width: 995px), screen and (max-height: 768px) {\n  #table-main {\n    margin-left: 0px !important;\n    margin-top: 15px;\n    margin-right: 15px !important;\n    max-height: 400px;\n    overflow: hidden;\n    width: 100%;\n  }\n  #table-main .table-scroll-wrapper {\n    max-height: 400px;\n  }\n  #table-main ::-webkit-scrollbar {\n    display: block;\n    width: 7px;\n    height: 7px;\n  }\n}\n/* =================================================================================== */\n/* =================================================================================== */\n/* =================================================================================== */\n.time-picker .field-wrapper {\n  display: inline-block;\n  margin: 5px 10px 0px 0px;\n}\n.time-picker .field-wrapper .form-ctrl {\n  width: 70px;\n}\n/* =================================================================================== */\n/* =================================================================================== */\n/* =================================================================================== */\n.registration-table {\n  padding: 30px 0px;\n}\n.registration-table table thead tr {\n  line-height: 25px;\n}\n.registration-table table tbody tr {\n  line-height: 20px;\n}\n.registration-table table tbody tr td {\n  text-overflow: ellipsis;\n}\n.registration-table table tbody tr td .download-icon {\n  cursor: pointer;\n}\n.registration-table table tbody tr td .download-icon::after {\n  content: \"\\f0ed\";\n  font-family: FontAwesome;\n}\n::ng-deep .ui-splitbutton {\n  position: relative;\n  display: inline-block;\n  zoom: 1;\n  background: #fff;\n  border: none;\n  font-size: 14px !important;\n  font-weight: 500;\n  box-sizing: border-box;\n  height: 32px;\n  min-width: 205px;\n  cursor: pointer;\n  color: #0084f6;\n  padding: 0px;\n  font-size: 14px;\n}\n::ng-deep .ui-splitbutton .ui-button {\n  background: #fff;\n  color: #0084f6 !important;\n  font-size: 14px;\n  height: 30px !important;\n  font-weight: 600;\n  border: 1px solid #eaeaeb !important;\n  transition: background-color 0s !important;\n}\n::ng-deep .ui-splitbutton .ui-button:hover {\n  color: white !important;\n}\n::ng-deep .ui-splitbutton .ui-button:active {\n  color: white !important;\n}\n::ng-deep .ui-splitbutton .ui-button:focus {\n  color: white !important;\n}\n::ng-deep .ui-splitbutton .ui-corner-left {\n  min-width: 175px;\n}\n::ng-deep .ui-splitbutton .ui-menu {\n  border: none;\n  color: #1b1d1f;\n  background: #f6f7f9 0 0 repeat-x;\n  background: none;\n  top: 35px !important;\n  left: 0px !important;\n  outline: none;\n  box-shadow: none;\n  font-size: 14px;\n  text-align: left;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list {\n  font-size: 14px;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list .ui-menuitem {\n  font-size: 14px;\n  width: 100%;\n  min-width: 200px;\n  min-height: 39px;\n  clear: both;\n  margin: .125em 0;\n  padding: 0px 5px 0px 5px;\n  color: #0084f6;\n  margin: 0px 0px -1px 0px;\n  border: none !important;\n  box-shadow: none;\n  background: white;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list .ui-menuitem:hover {\n  background: #0084f6 !important;\n  color: white !important;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list .ui-menuitem:hover a {\n  color: white !important;\n  font-size: 14px !important;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list .ui-menuitem:active {\n  background: #0084f6 !important;\n  color: white !important;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list .ui-menuitem:active a {\n  color: white !important;\n  font-size: 14px !important;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list .ui-menuitem:focus {\n  background: #0084f6 !important;\n  color: white !important;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list .ui-menuitem:focus a {\n  color: white !important;\n  font-size: 14px !important;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list .ui-menuitem .ui-menuitem-link {\n  padding: 0 !important;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list .ui-menuitem a {\n  color: #0084f6 !important;\n  font-size: 14px !important;\n  height: 35px;\n}\n::ng-deep .ui-splitbutton .ui-menu .ui-menu-list .ui-menuitem a:hover {\n  background: #0084f6 !important;\n}\n.middle-main {\n  position: relative;\n}\n.middle-main:before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 80px;\n  z-index: 1;\n  background: rgba(255, 255, 255, 0.74);\n  transition: all 0.1s;\n  opacity: 0;\n  visibility: hidden;\n}\n.middle-main.hasFilter:before {\n  opacity: 1;\n  visibility: visible;\n}\n.middle-main.hasFilter .filter-fields {\n  opacity: 1;\n  visibility: visible;\n  top: 100%;\n}\n.middle-main.hasFilter .closeFilter {\n  display: block;\n}\n.normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  border-right: 0;\n  height: 35px;\n  font-size: 14px;\n}\n.normal-btn {\n  padding: 8px 10px;\n  width: 25%;\n  box-sizing: border-box;\n  float: left;\n  background: #9c9b9b;\n  color: #fff;\n  cursor: pointer;\n}\n.filter-box {\n  padding: 20px 0px;\n  background: #efefef;\n}\n.filter-right .btn {\n  min-width: 100px;\n}\n.filter-search {\n  position: relative;\n}\n.filter-fields {\n  padding: 0 15px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  position: absolute;\n  width: 100%;\n  box-sizing: border-box;\n  z-index: 1;\n  left: 0;\n  top: 70%;\n  transition: all 0.3s;\n  visibility: hidden;\n  opacity: 0;\n  box-shadow: 0px 2px 1px #e2e0e0;\n}\n.filter-fields .field-wrapper {\n  margin: 15px 0;\n}\n.filter-fields .form-ctrl {\n  background: transparent;\n  font: 400 12px 'Open sans',sans-serif;\n  border-bottom: solid 1px #d2d2d2;\n}\n.filter-fields .btn {\n  margin: 0;\n  width: 100%;\n  margin-top: 20px;\n  padding: 10px 12px;\n  height: auto;\n}\n.common-nav {\n  display: none;\n}\n.middle-section {\n  padding: 1%;\n  width: 100%;\n  box-sizing: border-box;\n}\n.middle-left {\n  width: 100%;\n  padding: 0;\n}\n.middle-top h1 {\n  margin-top: 8px;\n  margin-bottom: 10px;\n  float: none;\n}\n.middle-top aside {\n  float: left;\n}\n/*=======================filter type==============*/\n.search-enquiry-type-filter {\n  margin: 35px 0 10px;\n}\n.filter-label {\n  font-weight: 600;\n}\n.filter-label label {\n  font-weight: 600;\n}\n.type-filter li {\n  display: inline-block;\n  margin: 0 10px;\n}\n.pagination li,\n.export-print li {\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 12px;\n}\n.export-print {\n  margin-bottom: 10px;\n}\n.export-print .print-icon {\n  background: url('print.svg') no-repeat;\n  color: #888;\n}\n.export-print .export-icon {\n  background: url('expand.svg') no-repeat;\n  margin-left: 25px;\n}\n.export-print .print-icon,\n.export-print .export-icon {\n  background-size: 20px auto;\n  padding: 0px 0px 0px 22px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #888;\n}\n.export-print .print-icon:hover,\n.export-print .export-icon:hover {\n  color: #0084f6;\n}\n.filter-res label {\n  font-size: 14px;\n  font-weight: 600;\n}\n.pagination .first:before {\n  content: \"« \";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .last:after {\n  content: \" »\";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .batch-size {\n  font-size: 16px;\n  font-weight: 800;\n  border-bottom: 1px solid black;\n}\n.pagination li {\n  border-right: 1px solid #ccc;\n  padding: 0px 7px;\n  margin: 0;\n  line-height: 10px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.pagination li a {\n  line-height: 10px;\n  font-size: 16px;\n  font-weight: 800;\n  border: none;\n  padding: 0px 14px;\n}\n.pagination li:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.AdFilter-field {\n  box-sizing: border-box;\n  z-index: 1;\n  box-shadow: #e2e0e0 0px 2px 1px;\n  padding: 0px 15px 20px;\n  background: white;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #cccccc;\n  -o-border-image: initial;\n     border-image: initial;\n  position: absolute;\n}\n.AdFilter-field .field-wrapper {\n  margin: 15px 0;\n}\n.AdFilter-field .field-wrapper .date-clear {\n  position: absolute;\n  right: 15px;\n  top: 50px;\n  cursor: pointer;\n  color: #0084f6;\n}\n.openAdFilter {\n  float: right;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #0084f6;\n}\n.closeAdFilter {\n  float: right;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #f44336;\n}\n.closeAdFilter svg {\n  width: 15px;\n  height: 16px;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 4px;\n}\n.closeAdFilter svg .cls-1 {\n  stroke: #f44336;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.closeAdFilter svg .cls-2 {\n  stroke: none;\n}\n/*===========================================action tooltip of table===================*/\n.enquiry-action {\n  position: relative;\n  cursor: pointer;\n}\n.enquiry-action .cls-1,\n.enquiry-action .cls-2 {\n  fill: none;\n  stroke: transparent;\n}\n.enquiry-action svg {\n  width: 18px;\n}\n.enquiry-action .cls-2 {\n  stroke: #7d7f80;\n  stroke-miterlimit: 10;\n}\n.enquiry-action:hover .action-icon svg .cls-2 {\n  stroke: #0084f6;\n  stroke-miterlimit: 10;\n}\n.action-menu {\n  position: absolute;\n  background: #fff;\n  width: 350px;\n  border-radius: 0;\n  border: 1px solid #ccc;\n  bottom: 10px;\n  box-shadow: 0px 2px 4px 1px #ccc;\n  transform: translateX(-50%);\n  left: 200px;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.6s;\n}\n.enquiry-action:hover .action-menu {\n  visibility: visible;\n  opacity: 1;\n  bottom: 8px;\n}\n.action-menu-inner ul {\n  font-size: 0;\n  position: relative;\n  padding: 5px 5px;\n}\n.action-menu-inner ul:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: -15px;\n  margin: auto;\n  border-top: 8px solid #fff;\n  border-bottom: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n  width: 0;\n  height: 0;\n}\n.action-menu-inner ul li {\n  display: inline-block;\n  text-align: center;\n  vertical-align: top;\n  font-size: 12px;\n  padding: 0 8px;\n  box-sizing: border-box;\n  cursor: pointer;\n  width: 18%;\n}\n.action-menu-inner ul li:last-child {\n  width: 28%;\n}\n.action-menu-inner ul li:last-child svg {\n  width: 33px;\n}\n.action-menu-inner ul li.edit-detail-icon svg * {\n  fill: none;\n  stroke: #8b8b8b;\n}\n.action-menu-inner ul li.edit-detail-icon svg .cls-1 {\n  stroke: none;\n  /* stroke: #8b8b8b; */\n}\n.action-menu-inner ul li:hover {\n  color: #0084f6;\n}\n.action-menu-inner ul li:hover .cls-2,\n.action-menu-inner ul li:hover .cls-3 {\n  fill: none;\n  stroke: #0084f6;\n}\n.action-menu-inner ul li span {\n  display: block;\n  font-size: 9px;\n  text-align: center;\n  line-height: 10px;\n}\n.action-menu-inner .close {\n  position: absolute;\n  right: 4px;\n  top: 2px;\n}\n.action-menu-inner i {\n  display: block;\n  height: 32px;\n}\n.enquiry-action li svg {\n  width: 28px;\n}\n/**===============================search data=========================*/\n.search-data {\n  margin: 10px 0px;\n}\n.search-data th {\n  font-weight: 500;\n}\n.search-data td {\n  font-size: 14px;\n  line-height: normal;\n  padding: 6px 5px;\n}\n.search-data tr th:first-child,\n.search-data tr td:first-child {\n  padding: 15px 2px;\n}\n.search-data tr th:first-child .field-checkbox-wrapper,\n.search-data tr td:first-child .field-checkbox-wrapper {\n  background: transparent;\n}\n.search-data tr th:last-child {\n  padding: 0;\n}\n/*=====================================mobile head menu css===========================*/\nul.customDropdown {\n  position: absolute;\n  top: 20%;\n  width: 100%;\n  height: auto;\n  background: #fff;\n  left: 0;\n  z-index: 11;\n  box-shadow: 0px 1px 2px 1px #e2e2e2;\n}\nul.customDropdown li {\n  padding: 10px 15px;\n  border-bottom: 1px solid #f5f5f5;\n  transition: all 0.5s;\n  cursor: pointer;\n}\nul.customDropdown li:hover {\n  background: #f5f5f5;\n}\nul.customDropdown li:first-child {\n  border: 0;\n  padding: 0;\n}\nul.customDropdown li:last-child {\n  border-bottom: 0;\n}\nul.customDropdown {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .15s;\n  transition-delay: .1s;\n  opacity: 0;\n  visibility: hidden;\n}\nul.customDropdown.visibleDropdown {\n  visibility: visible;\n  opacity: 1;\n  top: 20%;\n}\nul.customDropdown li:hover {\n  background: #f5f5f5;\n}\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 850px;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n/*=========================================registration popup form css==================*/\n.registration-fee-form {\n  overflow: hidden;\n}\n.print-output-section {\n  margin: 35px 0 25px;\n  border-top: 1px solid #deeaee;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #deeaee;\n  text-align: center;\n  font-size: 0;\n}\n.print-output-section li {\n  display: inline-block;\n  padding: 0 15px;\n  box-sizing: border-box;\n  width: 25%;\n  border-right: 1px solid #deeaee;\n  font-size: 15px;\n  cursor: pointer;\n  color: #929292;\n}\n.print-output-section li:last-child {\n  border-right: 0;\n}\n.print-output-section li:hover {\n  color: #0084f6;\n}\n.print-output-section li svg {\n  width: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.print-output-section li svg .cls-1 {\n  stroke: none;\n  stroke: #929292;\n}\n.print-output-section li.svg-icon .cls-1 {\n  stroke: none;\n}\n.print-output-section li.svg-icon .cls-2 {\n  stroke: #929292;\n}\n.print-output-section li.svg-icon:hover .cls-2 {\n  stroke: #0084f6;\n}\n.print-output-section li:first-child:hover svg .cls-1 {\n  stroke: #0084f6;\n}\n/*=======================================confirmation =========================*/\n.confirmation-popup-content {\n  line-height: normal;\n}\n.confirmation-popup-content > div {\n  margin-bottom: 10px;\n}\n.confirmation-popup-content > div:first-child {\n  margin-bottom: 20px;\n}\n.confirmation-popup-content > div a,\n.confirmation-popup-content > div p {\n  font-size: 16px;\n  line-height: 22px;\n}\n.confirmation-popup-content > div a {\n  font-weight: 600;\n}\n.confirmation-popup-content > div a:hover {\n  text-decoration: underline;\n}\n.confirmation-popup-content strong {\n  font-weight: 600;\n}\n.confirmation-popup-content .add-form-btns a {\n  margin-left: 20px;\n  font-size: 14px;\n}\n.popup-btn {\n  margin-top: 20px;\n}\n.popup-btn .btn {\n  font-size: 16px;\n  height: 40px;\n  color: #333;\n}\n.popup-btn .btn.redBtn {\n  color: #fff;\n  min-width: 160px;\n}\n.update-enquiry-form {\n  width: 100%;\n  max-height: 400px;\n}\n.update-enquiry-form .form-wrapper {\n  width: 40%;\n  min-height: 370px;\n  max-height: 400px;\n}\n.update-enquiry-form .form-wrapper .row {\n  margin: 10px 5px 20px;\n}\n.update-enquiry-form .form-wrapper .submitter {\n  position: absolute;\n  right: 41px;\n  bottom: 41px;\n}\n.update-enquiry-form .table-wrapper {\n  width: 60%;\n}\n.update-enquiry-form .table-wrapper h4 {\n  margin: 0px 0 15px;\n  font-weight: 600;\n}\n.update-enquiry-form .table-wrapper .enquiry-update-history {\n  min-height: 370px;\n  max-height: 400px;\n  overflow: auto;\n}\n.update-enquiry-form .table-wrapper table th {\n  text-align: left;\n  padding: 10px;\n  font-size: 14px;\n}\n.update-enquiry-form .table-wrapper table td {\n  text-align: left;\n  padding: 10px;\n  font-size: 14px;\n}\n.confirmation-popup-content:after {\n  content: '';\n  height: 8px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #8bc34a;\n}\n.row.extraMargin {\n  margin: 10px -15px 20px;\n}\n.sms-form .row {\n  margin: 0px -15px;\n}\n.sms-table-head {\n  display: flex;\n}\n.sms-table-head .sms-tab {\n  display: inline-block;\n  padding: 10px;\n  background: #ffffff;\n  cursor: pointer;\n}\n.sms-table-head .sms-tab label {\n  font-weight: 700;\n  color: #0084f6;\n}\n.sms-table-head .sms-tab.active {\n  background: #0084f6;\n  box-shadow: 0px 0px 0px 1px #0084f6;\n  border-bottom: 1px solid #0084f6;\n  color: #ffffff;\n}\n.sms-table-head .sms-tab.active label {\n  color: #ffffff;\n}\n.popup-body-container {\n  max-width: 85% !important;\n  top: 2% !important;\n  left: 5% !important;\n}\n.sms-popup-content {\n  max-height: 80% !important;\n  display: flex !important;\n  overflow: hidden !important;\n}\n.sms-middle-section {\n  padding: 5px 5px;\n}\n.sms-middle-section .table-container {\n  max-width: 100%;\n  min-height: 200px;\n  overflow: auto;\n  max-height: 300px;\n}\n.sms-update {\n  min-height: 100%;\n  width: 100%;\n}\n.sms-update .sms-table {\n  min-height: 300px;\n  max-height: 450px;\n  border-top: 1px solid #eaeaeb;\n  border-right: 1px solid #eaeaeb;\n  width: 70%;\n  padding-left: 2px;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n.sms-update .sms-table .sms-search-field {\n  padding: 5px 10px;\n  border: 1px solid #eaeaeb;\n  width: 65%;\n  box-sizing: border-box;\n  margin: 0px 5px 0px 0px;\n  float: left;\n  border-right: 0;\n  height: 35px;\n  font-size: 14px;\n  outline: none;\n}\n.sms-update .sms-table .field-checkbox-wrapper,\n.sms-update .sms-table .field-radio-wrapper {\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 10px;\n}\n.sms-update .sms-table .field-radio-wrapper .form-radio {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n.sms-update .sms-table .field-radio-wrapper .form-radio + label {\n  vertical-align: middle;\n  transition: all 0.1s;\n}\n.sms-update .sms-table .field-radio-wrapper .form-radio + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: all 0.1s;\n}\n.sms-update .sms-table .field-radio-wrapper .form-radio:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.sms-update .sms-table .field-radio-wrapper .form-radio + label:before {\n  transition: all 0.1s;\n  width: 1px;\n  height: 1px;\n  left: 9px;\n  top: 9px;\n  position: absolute;\n  content: '';\n}\n.sms-update .sms-table .field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  background: #0084f6;\n  border-radius: 50%;\n  left: 3px !important;\n  top: 3px !important;\n}\n.sms-update .sms-table .field-radio-wrapper .form-radio:checked + label {\n  color: #0084f6;\n}\n.sms-update .sms-preview {\n  min-height: 450px;\n  border-top: 1px solid #eaeaeb;\n  width: 30%;\n  padding: 0px 5px;\n}\n.sms-update .sms-preview .sms-preview-header {\n  margin-bottom: 25px;\n}\n.field-sms-wrapper {\n  position: relative;\n  padding-top: 10px;\n  border: 1px solid #eaeaeb;\n  overflow: hidden;\n}\n.field-sms-wrapper textarea {\n  width: 100%;\n  max-height: 200px;\n  color: #555555;\n  transition: background-color 0.2s ease 0s;\n}\n.field-sms-wrapper textarea::focus {\n  background: none repeat scroll 0 0 #FFFFFF;\n  outline-width: 0;\n}\n.new-sms-form {\n  padding: 0px;\n  width: 100%;\n}\n.new-sms-form .row {\n  margin: 0px;\n}\n.new-sms-form .new-sms-wrapper .new-sms-textarea {\n  width: 100%;\n  border: 1px solid #eaeaeb;\n  padding: 5px;\n}\n.add-edit {\n  cursor: pointer;\n}\n.add-edit .add-sms {\n  line-height: 8px;\n  padding: 4px 0px 0px 0px;\n  font-size: 24px;\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-right: 7px;\n  vertical-align: middle;\n  text-align: center;\n}\n/* ======================== DropDown Menu ================================= */\n/* Dropdown Button */\n.bulk-dropbtn {\n  padding: 0px 0px 3px 0px;\n  background: #fff;\n  border: none;\n  margin-left: 10px;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  box-sizing: border-box;\n  height: 35px;\n  cursor: pointer;\n}\n/* The container <div> - needed to position the dropdown content */\n.bulk-dropdown {\n  position: relative;\n  display: inline-block;\n  /* Dropdown Content (Hidden by Default) */\n  /* Links inside the dropdown */\n  /* Change color of dropdown links on hover */\n}\n.bulk-dropdown .bulk-dropbtn {\n  padding: 0px 0px 3px 0px;\n  background: #fff;\n  border: none;\n  margin-left: 10px;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  box-sizing: border-box;\n  height: 35px;\n  cursor: pointer;\n}\n.bulk-dropdown .bulk-dropbtn .caret {\n  margin-left: 5px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-family: inherit;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n}\n.bulk-dropdown .bulk-dropbtn-border {\n  padding: 7px 12px;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  margin-left: 10px;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  box-sizing: border-box;\n  height: 35px;\n  cursor: pointer;\n  color: #0084f6;\n}\n.bulk-dropdown .bulk-dropbtn-border:active {\n  box-shadow: none;\n}\n.bulk-dropdown .bulk-dropbtn-border::focus {\n  outline: none;\n}\n.bulk-dropdown .bulk-dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 70px;\n  left: 75%;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  text-align: left;\n  cursor: pointer;\n}\n.bulk-dropdown .bulk-dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.bulk-dropdown .bulk-dropdown-content a:hover {\n  background-color: #f1f1f1;\n}\n.sidenav {\n  max-height: 480px;\n  width: 0;\n  position: absolute;\n  z-index: 1;\n  top: 100px;\n  right: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  transition: 0.1s;\n}\n.sidenav ::-webkit-scrollbar {\n  display: none;\n  width: 7px;\n  height: 7px;\n}\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #d60909;\n  display: block;\n}\n.sidenav a:hover {\n  color: #d60909;\n}\n.sidenav .closebtn {\n  position: absolute;\n  left: 80%;\n  top: 10px;\n  font-size: 16px;\n  font-weight: 900;\n  position: absolute;\n  top: 20px;\n  margin-right: 50px;\n}\n#main {\n  transition: margin-right .5s;\n  padding: 16px;\n}\n.checkBoxAllignMent {\n  margin-right: 20px;\n  margin-top: 5px;\n}\n.checkBoxAllignMent.field-checkbox-wrapper {\n  margin-bottom: 0px;\n}\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n.skeleton:empty {\n  margin: 30px 0px 0px -100px;\n  width: 500px;\n  height: 400px;\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0) 80%), linear-gradient(lightgray 10px, transparent 0), linear-gradient(lightgray 10px, transparent 0), linear-gradient(lightgray 10px, transparent 0), linear-gradient(lightgray 10px, transparent 0), linear-gradient(lightgray 10px, transparent 0), linear-gradient(lightgray 10px, transparent 0);\n  background-repeat: repeat-y;\n  background-size: 350px 200px, 350px 200px, 350px 200px, 350px 200px, 350px 200px, 350px 200px, 150px 200px, 150px 200px;\n  background-position: 80px 0px, 80px 0px, 80px 0px, 80px 40px, 80px 80px, 80px 120px;\n  -webkit-animation: shine 1s infinite;\n  animation: shine 1s infinite;\n}\n@-webkit-keyframes shine {\n  to {\n    background-position: 0 0, 100% 0, 100px 0, 100px 40px, 100px 80px, 100px 120px;\n  }\n}\n@keyframes shine {\n  to {\n    background-position: 0 0, 100% 0, 100px 0, 100px 40px, 100px 80px, 100px 120px;\n  }\n}\n.editCellInput {\n  width: 50px !important;\n  border: 1px solid rgba(119, 119, 119, 0.34);\n  border-radius: 5px;\n  text-align: center;\n}\n.btn-container {\n  display: flex;\n  flex-direction: row;\n  width: auto;\n}\n.search-filter-wrapper .normal-field {\n  margin-right: 10px;\n  padding: 4px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  height: 35px;\n  font-size: 14px;\n}\n.table-content {\n  margin-top: 20px;\n}\n.structure-table tr th {\n  padding: 10px 10px !important;\n}\n.disable_input {\n  background: lightgrey !important;\n  cursor: not-allowed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlLXRlbXBsYXRlL3RlbXBsYXRlLWhvbWUvdGVtcGxhdGUtaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNZaEIsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBRHZCakM7QUNpQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUR0Qi9CO0FDWUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FEeEJuRDtBQ0dBO0VBdUJnQyxVQUFVO0FEdEIxQztBQ0RBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QURyQnREO0FDUkE7RUFnQ29DLFVBQVU7QURwQjlDO0FDWkE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBRHBCbEQ7QUN0QkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QURwQjNDO0FDNkJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FEMUJwQjtBQ3NCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBRHhCL0I7QUNTQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FEdEIxQjtBQ0lBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7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QWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUErS3ZCO0FBMUtBO0VBQ0UsZ0JBQWdCO0FBNktsQjtBQTFLQTtFQUdZLDZCQUE2QjtBQTJLekM7QUF0S0E7RUFDSSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBeUt2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlLW1vZHVsZS9kYXRhLXNldHVwL2ZlZS10ZW1wbGF0ZS90ZW1wbGF0ZS1ob21lL3RlbXBsYXRlLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcblxuLmZlZU1hbmFnZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5mZWUtY29udGVudCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgLmhlYWRlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNzMzKTtcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIH1cbiAgICB0YWJsZSB7XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMDA4NGY2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvLyBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICYuZGF0ZVBpY2tlckJveCB7XG4gICAgICAgICAgICAgICAgLmJzRGF0ZXBpY2tlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Z1wiKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kYXRlLWNsZWFyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDYwJTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW5zdGFsbG1lbnQge1xuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjMDA0YTdlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBib3gtc2hhZG93OiAxcHggNXB4IDVweCAxcHggIzAwNGE3ZTtcbiAgICAgICAgLy8gbGVnZW5kIHtcbiAgICAgICAgLy8gICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xuICAgICAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwNGE3ZTtcbiAgICAgICAgLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC8vICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjMDA0YTdlO1xuICAgICAgICAvLyB9XG4gICAgICAgIC5kYXRhLWFkZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xuICAgICAgICAgICAgLm91dGVyIHtcbiAgICAgICAgICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMHB4IDBweCA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b29sdGlwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzc0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjE2LCAyMTQsIDIxNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvb2x0aXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTY1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTQxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFkZGl0aW9uYWwge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZWdlbmQge1xuICAgICAgICAgICAgcGFkZGluZzogMC4yZW0gMC41ZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA0YTdlO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDRhN2U7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGEtYWRkZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XG4gICAgICAgICAgICAub3V0ZXIge1xuICAgICAgICAgICAgICAgIC5pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwcHggMHB4IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLnRvb2x0aXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NzQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTYsIDIxNCwgMjE0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9vbHRpcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5uZXJtb3N0IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwcHggMHB4IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLnRvb2x0aXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NzQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTYsIDIxNCwgMjE0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9vbHRpcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLlBoZWFkZXIge1xuICAgIGgyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGl0b3Ige1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICYuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAxNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTJlYmVlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBmb250OiA0MDAgMTJweCAnT3BlbiBzYW5zJyxzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogUztcbiAgICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi8qIFdlYmtpdCBicm93c2VycyBsaWtlIFNhZmFyaSBhbmQgQ2hyb21lICovXG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmZlZWFjdGlvbnMge1xuICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uaGVhZEVucSB7XG4gICAgLm9wdGlvbi13cmFwIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDJweCAwcHggMHB4IDdweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC50b29sdGlwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU0MSk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIxNiwgMjE0LCAyMTQpO1xuICAgICAgICAgICAgLnRvb2x0aXAge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTQxKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5lbnEtZHJvcGRvd24tY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IGJsYWNrO1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgLmV4cG9ydC1pY29uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2V4cGFuZC5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDI1cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXBsb2FkLWljb24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcGRmX2Rvd25sb2FkLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCAycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMjVweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNzA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLnRhYmxlLWhlYWQtbWVudSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFibGUtaGVhZC1tZW51IHNwYW4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA5cHggMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkY29tbW9uLWJsdWU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgaW1nK2ltZyB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICB9XG59XG5cbi50YWJsZS1oZWFkLW1lbnUge1xuICAgICY6aG92ZXIge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nK2ltZyB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtaGVhZGluZy1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMXB4ICNkY2RjZGM7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG5cbi50YWJsZS1oZWFkLW1lbnU6aG92ZXIgLnRhYmxlLWhlYWRpbmctbWVudSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMTAwJTtcbn1cblxuLnRhYmxlLWhlYWRpbmctbWVudSB1bCBsaSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogNXB4IDVweDsgLy9jdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZS1oZWFkaW5nLW1lbnUgdWwgbGkgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtaGVhZGluZy1tZW51IHVsIGxpIC5maWVsZC1jaGVja2JveC13cmFwcGVyIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLnRvb2x0aXAtdGFibGUge1xuICAgICY6aG92ZXIgLnRvb2x0aXAtYm94LXJpZ2h0IHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgbGVmdDogMTAwcHg7XG4gICAgfVxuICAgIC50b29sdGlwLWJveC1yaWdodCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWluLXdpZHRoOiA3MDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyNDUsIDIzNyk7XG4gICAgICAgIDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgbGVmdDogMTAwcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogLTY1cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyIDAuMXM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiKDIyLCAyMSwgMjEpO1xuICAgICAgICA7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuI3RhYmxlLW1haW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NXB4KSxcbnNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgI3RhYmxlLW1haW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC50YWJsZS1zY3JvbGwtd3JhcHBlciB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgfVxuICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4udGltZS1waWNrZXIge1xuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDVweCAxMHB4IDBweCAwcHg7XG4gICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5yZWdpc3RyYXRpb24tdGFibGUge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIHRhYmxlIHtcbiAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAuZG93bmxvYWQtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjo6bmctZGVlcCAudWktc3BsaXRidXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgem9vbTogMTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1pbi13aWR0aDogMjA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLnVpLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjMDA4NGY2ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29tbW9uICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMHMgIWltcG9ydGFudDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC51aS1jb3JuZXItbGVmdCB7XG4gICAgICAgIG1pbi13aWR0aDogMTc1cHg7XG4gICAgfVxuICAgIC51aS1tZW51IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogIzFiMWQxZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjdmOSAwIDAgcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHRvcDogMzVweCAhaW1wb3J0YW50O1xuICAgICAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAudWktbWVudS1saXN0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIC51aS1tZW51aXRlbSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzlweDtcbiAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IC4xMjVlbSAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODRmNjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHggLTFweCAwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwODRmNiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwODRmNiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnVpLW1lbnVpdGVtLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwODRmNiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDg0ZjYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1pZGRsZS1tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDgwcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NCk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICAgICYuaGFzRmlsdGVyIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbHRlci1maWVsZHMge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNsb3NlRmlsdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm9ybWFsLWZpZWxkIHtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubm9ybWFsLWJ0biB7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICM5YzliOWI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsdGVyLWJveCB7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmZpbHRlci1yaWdodCAuYnRuIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4uZmlsdGVyLXNlYXJjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmlsdGVyLWZpZWxkcyB7XG4gICAgcGFkZGluZzogMCAxNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogJGJnLXdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNzAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4ICNlMmUwZTA7XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICB9XG59XG5cbi5maWx0ZXItZmllbGRzIC5mb3JtLWN0cmwge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQ6IDQwMCAxMnB4ICdPcGVuIHNhbnMnLHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkMmQyZDI7XG59XG5cbi5maWx0ZXItZmllbGRzIC5idG4ge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb21tb24tbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDElO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5taWRkbGUtbGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm1pZGRsZS10b3AgaDEge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZsb2F0OiBub25lO1xufVxuXG4ubWlkZGxlLXRvcCB7XG4gICAgYXNpZGUge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT1maWx0ZXIgdHlwZT09PT09PT09PT09PT09Ki9cblxuLnNlYXJjaC1lbnF1aXJ5LXR5cGUtZmlsdGVyIHtcbiAgICBtYXJnaW46IDM1cHggMCAxMHB4O1xufVxuXG4uZmlsdGVyLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZmlsdGVyLWxhYmVsIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udHlwZS1maWx0ZXIgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuLnBhZ2luYXRpb24gbGksXG4uZXhwb3J0LXByaW50IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZXhwb3J0LXByaW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC5wcmludC1pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3ByaW50LnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgfVxuICAgIC5leHBvcnQtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9leHBhbmQuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICB9XG4gICAgLnByaW50LWljb24sXG4gICAgLmV4cG9ydC1pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDIycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZmlsdGVyLXJlcyBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cblxuLnBhZ2luYXRpb24ge1xuICAgIC5maXJzdCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiwqsgXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sYXN0IHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIiDCu1wiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmF0Y2gtc2l6ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgICBsaSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIHBhZGRpbmc6IDBweCA3cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBhZ2luYXRpb24gbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5BZEZpbHRlci1maWVsZCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJveC1zaGFkb3c6IHJnYigyMjYsIDIyNCwgMjI0KSAwcHggMnB4IDFweDtcbiAgICBwYWRkaW5nOiAwcHggMTVweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgLmRhdGUtY2xlYXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzAwODRmNjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm9wZW5BZEZpbHRlciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xufVxuXG4uY2xvc2VBZEZpbHRlciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAkcmVkQnRuO1xuICAgICAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgICAgICB9XG4gICAgICAgIC5jbHMtMiB7XG4gICAgICAgICAgICBzdHJva2U6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5maWx0ZXItcmVzIHtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1hY3Rpb24gdG9vbHRpcCBvZiB0YWJsZT09PT09PT09PT09PT09PT09PT0qL1xuXG4uZW5xdWlyeS1hY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmNscy0xLFxuICAgIC5jbHMtMiB7XG4gICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgIHN0cm9rZTogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgIH1cbiAgICAuY2xzLTIge1xuICAgICAgICBzdHJva2U6ICM3ZDdmODA7XG4gICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5hY3Rpb24taWNvbiB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIC5jbHMtMiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWN0aW9uLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IDFweCAjY2NjO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBsZWZ0OiAyMDBweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbn1cblxuLmVucXVpcnktYWN0aW9uOmhvdmVyIC5hY3Rpb24tbWVudSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvdHRvbTogOHB4O1xufVxuXG4uYWN0aW9uLW1lbnUtaW5uZXIgdWwge1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbn1cblxuLmFjdGlvbi1tZW51LWlubmVyIHVsOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IC0xNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG5cbi5hY3Rpb24tbWVudS1pbm5lciB1bCBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTglO1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAyOCU7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMzNweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmVkaXQtZGV0YWlsLWljb24ge1xuICAgICAgICBzdmcgKiB7XG4gICAgICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICAgICAgc3Ryb2tlOiAjOGI4YjhiO1xuICAgICAgICB9XG4gICAgICAgIHN2ZyAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiBub25lO1xuICAgICAgICAgICAgLyogc3Ryb2tlOiAjOGI4YjhiOyAqL1xuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICAuY2xzLTIsXG4gICAgICAgIC5jbHMtMyB7XG4gICAgICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICB9XG59XG5cbi5hY3Rpb24tbWVudS1pbm5lciB1bCBsaSBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG5cbi5hY3Rpb24tbWVudS1pbm5lciAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNHB4O1xuICAgIHRvcDogMnB4O1xufVxuXG4uYWN0aW9uLW1lbnUtaW5uZXIgaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uZW5xdWlyeS1hY3Rpb24gbGkgc3ZnIHtcbiAgICB3aWR0aDogMjhweDtcbn1cblxuLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PXNlYXJjaCBkYXRhPT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5zZWFyY2gtZGF0YSB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICB0aCB7XG4gICAgICAgIC8vIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgdGQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIHBhZGRpbmc6IDZweCA1cHg7XG4gICAgfVxuICAgIHRyIHtcbiAgICAgICAgdGg6Zmlyc3QtY2hpbGQsXG4gICAgICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMnB4O1xuICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09bW9iaWxlIGhlYWQgbWVudSBjc3M9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG51bC5jdXN0b21Ecm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTE7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMXB4ICNlMmUyZTI7XG59XG5cbnVsLmN1c3RvbURyb3Bkb3duIGxpIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIH1cbn1cblxudWwuY3VzdG9tRHJvcGRvd24gbGk6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG51bC5jdXN0b21Ecm9wZG93biBsaTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xufVxuXG51bC5jdXN0b21Ecm9wZG93biB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguNTUsIDAsIC41NSwgLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwgMCwgLjU1LCAuMik7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMTVzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4xNXM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAuMXM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjFzO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG51bC5jdXN0b21Ecm9wZG93bi52aXNpYmxlRHJvcGRvd24ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDIwJTtcbn1cblxudWwuY3VzdG9tRHJvcGRvd24gbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi8qIHBvcFVwIFNjc3MgKi9cblxuLnBvcHVwV3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbiAgICB6LWluZGV4OiAxMDA7IC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLnBvcHVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4NTBweDsgLy8gbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bzsgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbn1cblxuLnBvcHVwLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDsgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xuICAgIHRyYW5zaXRpb246IHVuc2V0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbi5jbG9zZVBvcHVwIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJi50b3BMZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgfVxuICAgICYuYm90dG9tTGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZmFkZUluIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4ucG9wdXBXcmFwcGVyTW9iIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgLy8gb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAuY2xvc2VQb3B1cCB7XG4gICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgdG9wOiAtMjdweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4ucG9wdXAtbW9iIHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICBib3R0b206IC03MCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucG9wdXBXcmFwcGVyTW9iLnNob3dQb3B1cE1vYiAucG9wdXAtbW9iIHtcbiAgICBib3R0b206IDA7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1yZWdpc3RyYXRpb24gcG9wdXAgZm9ybSBjc3M9PT09PT09PT09PT09PT09PT0qL1xuXG4ucmVnaXN0cmF0aW9uLWZlZS1mb3JtIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJpbnQtb3V0cHV0LXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMzVweCAwIDI1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICB9XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBub25lO1xuICAgICAgICAgICAgICAgIHN0cm9rZTogIzkyOTI5MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnN2Zy1pY29uIHtcbiAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNscy0yIHtcbiAgICAgICAgICAgICAgICBzdHJva2U6ICM5MjkyOTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAuY2xzLTIge1xuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpmaXJzdC1jaGlsZDpob3ZlciB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1jb25maXJtYXRpb24gPT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5jb25maXJtYXRpb24tcG9wdXAtY29udGVudCB7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAmPmRpdiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBhLFxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5hZGQtZm9ybS1idG5zIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBvcHVwLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAuYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAmLnJlZEJ0biB7XG4gICAgICAgICAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnVwZGF0ZS1lbnF1aXJ5LWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIC5mb3JtLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAzNzBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDVweCAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zdWJtaXR0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDQxcHg7XG4gICAgICAgICAgICBib3R0b206IDQxcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBoNCB7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAwIDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIC5lbnF1aXJ5LXVwZGF0ZS1oaXN0b3J5IHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM3MHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29uZmlybWF0aW9uLXBvcHVwLWNvbnRlbnQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjOGJjMzRhO1xufVxuXG4ucm93LmV4dHJhTWFyZ2luIHtcbiAgICBtYXJnaW46IDEwcHggLTE1cHggMjBweDtcbn1cblxuLnNtcy1mb3JtIHtcbiAgICAucm93IHtcbiAgICAgICAgbWFyZ2luOiAwcHggLTE1cHg7XG4gICAgfVxufVxuXG4uc21zLXRhYmxlLWhlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLnNtcy10YWIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggJGxlZnRNZW51SG92ZXJCZztcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGVmdE1lbnVIb3ZlckJnO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wb3B1cC1ib2R5LWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgICB0b3A6IDIlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNSUgIWltcG9ydGFudDtcbn1cblxuLnNtcy1wb3B1cC1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uc21zLW1pZGRsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIC50YWJsZS1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgfVxufVxuXG4uc21zLXVwZGF0ZSB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuc21zLXRhYmxlIHtcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb21tb247XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRib3JkZXItY29tbW9uO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIC5zbXMtc2VhcmNoLWZpZWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb21tb247XG4gICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyLFxuICAgICAgICAuZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvK2xhYmVsIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICAgICAgfVxuICAgICAgICAuZmllbGQtcmFkaW8td3JhcHBlciAuZm9ybS1yYWRpbytsYWJlbDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICAgICAgfVxuICAgICAgICAuZmllbGQtcmFkaW8td3JhcHBlciAuZm9ybS1yYWRpbzpjaGVja2VkK2xhYmVsOmFmdGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICAuZmllbGQtcmFkaW8td3JhcHBlciAuZm9ybS1yYWRpbytsYWJlbDpiZWZvcmUge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICBsZWZ0OiA5cHg7XG4gICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW86Y2hlY2tlZCtsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zbXMtcHJldmlldyB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb21tb247XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgIC5zbXMtcHJldmlldy1oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpZWxkLXNtcy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb21tb247XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgY29sb3I6ICM1NTU1NTU7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlIDBzO1xuICAgICAgICAmOjpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwICNGRkZGRkY7XG4gICAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubmV3LXNtcy1mb3JtIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLnJvdyB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICAubmV3LXNtcy13cmFwcGVyIHtcbiAgICAgICAgLm5ldy1zbXMtdGV4dGFyZWEge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbW1vbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFkZC1lZGl0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmFkZC1zbXMge1xuICAgICAgICBsaW5lLWhlaWdodDogOHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMHB4IDBweCAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwODRmNjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gRHJvcERvd24gTWVudSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogRHJvcGRvd24gQnV0dG9uICovXG5cbi5idWxrLWRyb3BidG4ge1xuICAgIHBhZGRpbmc6IDBweCAwcHggM3B4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXG5cbi5idWxrLWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC5idWxrLWRyb3BidG4ge1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDNweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLmNhcmV0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiA0cHggZGFzaGVkO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMHB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ1bGstZHJvcGJ0bi1ib3JkZXIge1xuICAgICAgICBwYWRkaW5nOiA3cHggMTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICY6OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXG4gICAgLmJ1bGstZHJvcGRvd24tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgbGVmdDogNzUlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXG4gICAgLmJ1bGstZHJvcGRvd24tY29udGVudCBhIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuICAgIC5idWxrLWRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjFcbiAgICB9XG59XG5cbi5zaWRlbmF2IHtcbiAgICAvL21pbi1oZWlnaHQ6IDQ4MHB4O1xuICAgIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMTAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICB9XG59XG5cbi5zaWRlbmF2IGEge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogI2Q2MDkwOTtcbiAgICBkaXNwbGF5OiBibG9jazsgLy90cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc2lkZW5hdiBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2Q2MDkwOTtcbn1cblxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogODAlO1xuICAgIHRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuI21haW4ge1xuICAgIHRyYW5zaXRpb246IG1hcmdpbi1yaWdodCAuNXM7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLmNoZWNrQm94QWxsaWduTWVudCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAmLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgICAuc2lkZW5hdiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cbiAgICAuc2lkZW5hdiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbn1cblxuLnNrZWxldG9uOmVtcHR5IHtcbiAgICBtYXJnaW46IDMwcHggMHB4IDBweCAtMTAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDIwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDIwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA4MCUpLCBsaW5lYXItZ3JhZGllbnQobGlnaHRncmF5IDEwcHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQobGlnaHRncmF5IDEwcHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQobGlnaHRncmF5IDEwcHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQobGlnaHRncmF5IDEwcHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQobGlnaHRncmF5IDEwcHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQobGlnaHRncmF5IDEwcHgsIHRyYW5zcGFyZW50IDApO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM1MHB4IDIwMHB4LCAzNTBweCAyMDBweCwgMzUwcHggMjAwcHgsIDM1MHB4IDIwMHB4LCAzNTBweCAyMDBweCwgMzUwcHggMjAwcHgsIDE1MHB4IDIwMHB4LCAxNTBweCAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4MHB4IDBweCwgODBweCAwcHgsIDgwcHggMHB4LCA4MHB4IDQwcHgsIDgwcHggODBweCwgODBweCAxMjBweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2hpbmUgMXMgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBzaGluZSAxcyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzaGluZSB7XG4gICAgdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDEwMCUgMCwgLyogbW92ZSBoaWdobGlnaHQgdG8gcmlnaHQgKi9cbiAgICAgICAgMTAwcHggMCwgMTAwcHggNDBweCwgMTAwcHggODBweCwgMTAwcHggMTIwcHg7XG4gICAgfVxufVxuXG4uZWRpdENlbGxJbnB1dCB7XG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuMzQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLy8gYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnNlYXJjaC1maWx0ZXItd3JhcHBlciB7XG4gICAgLm5vcm1hbC1maWVsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAvLyB3aWR0aDogMTUlO1xuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRlbnR7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zdHJ1Y3R1cmUtdGFibGUge1xuICAgIHRyIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kaXNhYmxlX2lucHV0e1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iLCIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-template/template-home/template-home.component.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-template/template-home/template-home.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: TemplateHomeComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTemplateTemplateHomeTemplateHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateHomeComponent", function () {
        return TemplateHomeComponent;
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
      }; // import { document } from 'ngx-bootstrap-custome/utils/facade/browser';


      var TemplateHomeComponent =
      /** @class */
      function () {
        var TemplateHomeComponent = /*#__PURE__*/function () {
          function TemplateHomeComponent(router, fetchService, auth, commonService) {
            _classCallCheck(this, TemplateHomeComponent);

            this.router = router;
            this.fetchService = fetchService;
            this.auth = auth;
            this.commonService = commonService;
            this.isProfessional = false;
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

            if (sessionStorage.getItem('userid') == null) {
              this.router.navigate(['/authPage']);
            }
          }

          _createClass(TemplateHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this10 = this;

              this.enableTax = sessionStorage.getItem('enable_tax_applicable_fee_installments');
              this.tax_type_without_percentage = sessionStorage.getItem("tax_type_without_percentage");
              this.is_tax_enabled = this.enableTax == "1" ? true : false;
              this.auth.institute_type.subscribe(function (res) {
                if (res == 'LANG') {
                  _this10.isProfessional = true;
                  _this10.moduleState = 'Batch';
                } else {
                  _this10.isProfessional = false;
                  _this10.moduleState = 'Course';
                }
              }); // changes by Nalini - to handle school model conditions

              this.auth.schoolModel.subscribe(function (res) {
                _this10.schoolModel = false;

                if (res) {
                  _this10.schoolModel = true;
                }
              });
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
              var _this11 = this;

              this.countryAdditioalFeeTypes = {};
              var encryptedData = sessionStorage.getItem('country_data');
              var data = JSON.parse(encryptedData);

              if (data.length > 0) {
                this.countryDetails = data;
                var country_ids = [];
                this.countryDetails.forEach(function (item) {
                  _this11.countryAdditioalFeeTypes[item.id] = [];
                  country_ids.push(item.id);
                });
                this.fetchService.additionalFeeTypeDetail(country_ids.join()).subscribe(function (res) {
                  res && res.forEach(function (fee) {
                    var country_id = fee.countryId.country_id;
                    var fee_details = {};
                    fee_details[fee.fee_type_id] = fee.fee_type;

                    _this11.countryAdditioalFeeTypes[country_id].push(fee_details);
                  });
                }, function (err) {
                  _this11.commonService.showErrorMessage('error', '', err.error.message);
                });
              } // console.log(data);

            }
          }, {
            key: "getFeeStructures",
            value: function getFeeStructures() {
              var _this12 = this;

              this.auth.showLoader();
              this.PageIndex = 1;
              this.fetchService.fetchFeeStruc().subscribe(function (res) {
                _this12.auth.hideLoader();

                _this12.totalRow = res.length;
                _this12.source = res;

                _this12.fetchTableDataByPage(_this12.PageIndex);
              }, function (err) {
                _this12.auth.hideLoader();
              });
            }
          }, {
            key: "changesValuesAsPerType",
            value: function changesValuesAsPerType(row) {
              if (row.day_type == 1) {
                row.days = 0;
              }
            }
          }, {
            key: "editFee",
            value: function editFee(fee) {
              var _this13 = this;

              this.templateName = fee.template_name;
              this.selectedTemplate = fee;
              this.feeStructure = [];
              this.isEditFee = true;
              this.auth.showLoader();
              this.fetchService.fetchFeeDetail(fee.template_id).subscribe(function (res) {
                _this13.auth.hideLoader();

                _this13.feeStructure = res;

                if (res.is_default == "1") {
                  _this13.feeStructure.is_default = true;
                } else {
                  _this13.feeStructure.is_default = false;
                }

                _this13.fillFeeType(_this13.countryAdditioalFeeTypes[_this13.selectedTemplate.country_id]);

                var encryptedData = sessionStorage.getItem('country_data');
                var data = JSON.parse(encryptedData);

                if (data.length > 0) {
                  data.forEach(function (country) {
                    if (_this13.selectedTemplate.country_id == country.id) {
                      _this13.selectedCountry = country;
                    }
                  });
                }

                _this13.fillDataInYTable(res.customFeeSchedules); // if (res.studentwise_fees_tax_applicable == "Y") {


                if (_this13.enableTax == "1" && document.getElementById('checkBoxtaxes')) {
                  document.getElementById('checkBoxtaxes').checked = true;

                  _this13.showTaxFields();
                }

                _this13.totalAmountCal = res.studentwise_total_fees_amount;
              }, function (err) {
                _this13.auth.hideLoader();
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
              var _this14 = this;

              this.otherFeetype = [];
              data.forEach(function (object) {
                var keys = Object.keys(object);
                var test = {};
                test.id = keys[0];
                test.value = object[keys[0]];

                _this14.otherFeetype.push(test);
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
            key: "updateFeeTemplate",
            value: function updateFeeTemplate() {
              var _this15 = this;

              var taxApplicable = document.getElementById('checkBoxtaxes').checked;

              if (taxApplicable == true) {
                taxApplicable = "Y";
              } else {
                taxApplicable = "N";
              }

              var set_is_default = '0';

              if (this.feeStructure.is_default == '1' || this.feeStructure.is_default == true) {
                set_is_default = '1';
              }

              var data = {
                is_default: set_is_default,
                country_id: this.selectedTemplate.country_id,
                customFeeSchedules: this.makeJSONForCustomFee(),
                studentwise_total_fees_amount: this.totalAmount.toString(),
                studentwise_total_fees_discount: this.discountAmount,
                studentwise_fees_tax_applicable: taxApplicable,
                template_id: this.selectedTemplate.template_id.toString(),
                template_name: this.selectedTemplate.template_name
              };
              this.auth.showLoader();
              this.fetchService.updateFeeTemplate(data).subscribe(function (res) {
                _this15.auth.hideLoader();

                _this15.commonService.showErrorMessage('success', 'Update Successfully', 'Fee Structure Updated Successfully');

                _this15.closeFeeEditor();
              }, function (err) {
                _this15.auth.hideLoader();

                _this15.commonService.showErrorMessage('error', '', err.error.message);
              });
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

              for (var _t2 = 0; _t2 < this.otherInstList.length; _t2++) {
                var _test2 = {};
                _test2.fee_type = this.otherInstList[_t2].fee_type;
                _test2.initial_fee_amount = this.otherInstList[_t2].initial_fee_amount.toString();
                _test2.service_tax = this.otherInstList[_t2].service_tax.toString();
                _test2.fees_amount = this.otherInstList[_t2].fees_amount.toString();
                _test2.service_tax_applicable = this.otherInstList[_t2].service_tax_applicable;
                _test2.schedule_id = this.otherInstList[_t2].schedule_id.toString();
                _test2.is_referenced = this.otherInstList[_t2].is_referenced;
                _test2.day_type = this.otherInstList[_t2].day_type.toString();
                _test2.days = Number(this.otherInstList[_t2].days).toString();
                this.totalAmount = this.totalAmount + this.otherInstList[_t2].fees_amount;
                this.discountAmount = this.discountAmount + this.otherInstList[_t2].fees_amount - this.otherInstList[_t2].initial_fee_amount;
                data.push(_test2);
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
                this.commonService.showErrorMessage('error', '', 'Please enter a valid fee structure name!');
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
            } // calculateTotalAmount() {
            //   if (document.getElementById('checkBoxtaxes').checked == true) {
            //     let otherAmount = 0;
            //     if (this.otherInstList.length > 0) {
            //       otherAmount = this.otherInstList.map(fee => fee.fees_amount).reduce((acc, val) => val + acc)
            //     } else {
            //       otherAmount = 0;
            //     }
            //     return Math.floor(this.onApplyTaxChechbox() + otherAmount);
            //   } else {
            //     let installAmount = 0;
            //     let otherAmount = 0;
            //     if (this.installmentList.length > 0) {
            //       installAmount = this.installmentList.map(fee => fee.initial_fee_amount).reduce((acc, val) => val + acc);
            //     }
            //     if (this.otherInstList.length > 0) {
            //       otherAmount = this.otherInstList.map(fee => fee.fees_amount).reduce((acc, val) => val + acc);
            //     }
            //     return Math.floor(installAmount + otherAmount);
            //   }
            // }
            // onApplyTaxChechbox() {
            //   let taxPercent = this.feeStructure.registeredServiceTax;
            //   if (sessionStorage.getItem('enable_tax_applicable_fee_installments') == '1') {
            //     if (this.installmentList.length > 0) {
            //       this.addTaxInInstallmentTable();
            //       return (this.totalAmountCal);
            //     } else {
            //       return 0;
            //     }
            //   } else {
            //     let msg = {
            //       type: 'error',
            //       title: '',
            //       body: "Please define Tax (%age) in Institute Settings"
            //     }
            //     this.appC.popToast(msg);
            //     document.getElementById('checkBoxtaxes').checked == false;
            //     this.calculateTotalAmount();
            //   }
            // }
            // addTaxInInstallmentTable() {
            //   this.totalAmountCal = 0;
            //   if (sessionStorage.getItem('enable_tax_applicable_fee_installments') == '1') {
            //     let taxPercent = this.feeStructure.registeredServiceTax;
            //     if (document.getElementById('checkBoxtaxes').checked == true) {
            //       if (taxPercent > 0) {
            //         this.installmentList.map(
            //           fee => {
            //             if (fee.service_tax_applicable == "Y") {
            //               fee.tax = Math.floor(fee.fees_amount - fee.initial_fee_amount)
            //               this.totalAmountCal = this.totalAmountCal + fee.fee_amount;
            //             } else {
            //               fee.tax = Math.floor(fee.fees_amount * 0.01 * taxPercent);
            //               fee.initial_fee_amount = fee.fees_amount - fee.tax;
            //               fee.service_tax_applicable = "Y";
            //               this.totalAmountCal = this.totalAmountCal + fee.fees_amount;
            //             }
            //           }
            //         )
            //       }
            //     } else {
            //       this.installmentList.map(
            //         fee => {
            //           if (fee.service_tax_applicable == "Y") {
            //             fee.initial_fee_amount = fee.fee_amount - fee.tax;
            //             fee.tax = 0;
            //             fee.fees_amount = fee.tax + fee.initial_fee_amount;
            //             fee.service_tax_applicable = "N";
            //           } else {
            //             fee.tax = 0;
            //             fee.fees_amount = fee.initial_fee_amount;
            //           }
            //           this.totalAmountCal = this.totalAmountCal + fee.fees_amount;
            //         }
            //       )
            //     }
            //     if (this.otherInstList.length > 0) {
            //       this.totalAmountCal = this.totalAmountCal + this.otherInstList.map(fee => fee.fees_amount).reduce((acc, val) => val + acc);
            //     }
            //   }
            // }  

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
              var _this16 = this;

              var id = event;
              this.feeTyeDetails = [];
              this.fetchService.getAdditionalFeeDeatails(event).subscribe(function (res) {
                _this16.feeTyeDetails = res;
                _this16.additionalInstallment.initial_fee_amount = res.fee_amount;
                _this16.additionalInstallment.service_tax = res.fee_type_tax;
                _this16.additionalInstallment.fee_type = res.fee_type_id;

                if (res.fee_type_tax > 0) {
                  _this16.additionalInstallment.service_tax_applicable = "Y";
                }

                _this16.additionalInstallment.fee_type = id;
                _this16.additionalInstallment.fees_amount = res.fee_amount + res.fee_amount * res.fee_type_tax * 0.01;
                _this16.additionalInstallment.fee_type_name = res.fee_type;
              }, function (err) {
                _this16.commonService.showErrorMessage('error', '', err.error.message);
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
              var _this17 = this;

              if (this.searchText.trim() != "" && this.searchText.trim() != null) {
                var searchData = this.source.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this17.searchText.toLowerCase());
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
            } ////Delete Fee Structure

          }, {
            key: "deleteFeeStructure",
            value: function deleteFeeStructure(fee) {
              var _this18 = this;

              var is_archived = "N";

              if (confirm('Are you sure, you want to delete Fee Structure?')) {
                this.auth.showLoader();
                this.fetchService.deleteFeeStructure(fee.template_id, is_archived).subscribe(function (res) {
                  _this18.auth.hideLoader();

                  _this18.commonService.showErrorMessage('success', '', 'Fee Structure Deleted Successfully');

                  _this18.getFeeStructures();

                  _this18.searchText = "";
                  _this18.searchDataFlag = false;
                }, function (err) {
                  _this18.auth.hideLoader();

                  if (err.error.message.includes("Fee template(s) are assigned to student(s).")) {
                    if (confirm('Fee Structure already assigned to student(s). Do you wish to delete it ?')) {
                      is_archived = "Y";

                      _this18.auth.showLoader();

                      _this18.fetchService.deleteFeeStructure(fee.template_id, is_archived).subscribe(function (res) {
                        _this18.auth.hideLoader();

                        _this18.commonService.showErrorMessage('success', '', 'Fee Structure Deleted Successfully');

                        _this18.getFeeStructures();
                      }, function (err) {
                        _this18.auth.hideLoader();

                        _this18.commonService.showErrorMessage('error', '', err.error.message);
                      });
                    }
                  } else {
                    _this18.commonService.showErrorMessage('error', '', err.error.message);
                  }
                });
              }
            } // for showing students assigned to the particular fee template

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
          }]);

          return TemplateHomeComponent;
        }();

        TemplateHomeComponent.ctorParameters = function () {
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

        TemplateHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-template-home',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./template-home.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/template-home/template-home.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./template-home.component.scss */
          "./src/app/components/fee-module/data-setup/fee-template/template-home/template-home.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_5__["FeeStrucService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"]])], TemplateHomeComponent);
        return TemplateHomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-template/template-popup/template-popup.component.scss":
    /*!************************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-template/template-popup/template-popup.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTemplateTemplatePopupTemplatePopupComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.table-data-overflow table tbody td {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.middle-section {\n  padding: 15px;\n}\n.boxPadding15, .middle-left, .middle-right {\n  box-sizing: border-box;\n  padding: 0 15px;\n}\n.middle-left {\n  width: 70%;\n}\n.middle-right {\n  width: 30%;\n  box-sizing: border-box;\n  padding: 0 15px;\n}\n.accordian-section {\n  padding: 15px 10px 0;\n}\n.accordian-section .accordian-heading h4 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ddd;\n}\n.accordian-section .accordian-heading h4 .open-accor {\n  display: none;\n  float: right;\n  width: 24px;\n  font-size: 24px;\n  height: 24px;\n  text-align: center;\n  border: none;\n  border-radius: 50%;\n  line-height: 24px;\n  margin-right: 4px;\n  margin-top: 3px;\n  cursor: pointer;\n  color: #0084f6;\n}\n.accordian-section .accordian-heading h4 .close-accor {\n  float: right;\n  width: 24px;\n  font-size: 31px;\n  height: 24px;\n  text-align: center;\n  border: none;\n  border-radius: 50%;\n  line-height: 16px;\n  margin-right: 4px;\n  margin-top: 5px;\n  cursor: pointer;\n  color: #0084f6;\n  font-weight: 400;\n}\n.accordian-section .accordian-content {\n  padding-left: 50px;\n}\n.accordian-section .accordian > li {\n  position: relative;\n  padding-bottom: 25px;\n}\n.accordian-section .accordian > li:before {\n  content: '';\n  width: 1px;\n  height: 90.5%;\n  position: absolute;\n  background: #cccccc;\n  z-index: 0;\n  left: 15px;\n  top: 34px;\n  display: block;\n}\n.accordian-section .accordian > li:last-child:before {\n  display: none;\n}\n.accordian-section .accordian > li.active .circle-accor, .accordian-section .accordian > li.data-filled .circle-accor {\n  background: #0084f6;\n  color: #fff;\n  border-color: #0084f6;\n}\n.accordian-section .accordian > li.active .accordian-heading h4, .accordian-section .accordian > li.data-filled .accordian-heading h4 {\n  color: #333;\n}\n.accordian-section .accordian > li.data-filled .accordian-content {\n  display: none;\n}\n.accordian-section .accordian > li.data-filled .accordian-heading h4 {\n  color: #444;\n  border: 1px solid #eaecee;\n  padding: 1px;\n  border-radius: 20px;\n  background: #e6f2fe;\n}\n.accordian-section .accordian > li.data-filled .accordian-heading h4 .open-accor {\n  display: block;\n}\n.accordian-section .accordian > li.data-filled .accordian-heading h4 .close-accor {\n  display: none;\n}\n.accordian-section .accordian > li.data-filled.active .accordian-content {\n  display: block;\n}\n.accordian-section .accordian > li.data-filled.active .accordian-heading h4 .open-accor {\n  display: none;\n}\n.accordian-section .accordian > li.data-filled.active .accordian-heading h4 .close-accor {\n  display: block;\n}\n.more-detail {\n  margin-top: 10px;\n  font-size: 12px;\n}\n.circle-accor {\n  display: inline-block;\n  width: 32px;\n  border-radius: 50%;\n  text-align: center;\n  box-sizing: border-box;\n  padding-top: 4px;\n  font-size: 14px;\n  background: #f0f0f0;\n  height: 32px;\n  border: 1px solid #bbb;\n  margin-right: 5px;\n  color: #ceced1;\n  padding: 0;\n  line-height: 30px;\n}\n.form-type2,\n.form-type1 {\n  max-width: 360px;\n}\n.paddingR30 {\n  padding-right: 30px;\n}\n.form-type2 .field-wrapper {\n  padding-right: 35px;\n}\n.form-type2 .customSelectWrapper:after {\n  right: 35px;\n}\n.questionInfo {\n  position: absolute;\n  right: 0px;\n  bottom: 5px;\n  height: 20px;\n  width: 20px;\n  z-index: 2;\n}\n.questionInfo .qInfoIcon {\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.6s linear;\n}\n.questionInfo .qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0px 0px 1px 0px #0060A3 inset;\n  color: #0060A3;\n}\n.create-institution {\n  position: absolute;\n  right: -98px;\n  white-space: nowrap;\n  bottom: 6px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.shadow-box {\n  box-shadow: 0px 2px 2px #7d7d7d;\n  padding: 7px;\n  border-radius: 2px;\n  background: #eff7ff;\n}\n.last-added-info {\n  font-size: 12px;\n}\n.last-added-info ul li {\n  line-height: normal;\n  padding: 2px 0;\n  display: inline-block;\n  width: 100%;\n  vertical-align: top;\n}\n.last-added-info strong {\n  font-weight: 600;\n  color: #28384a;\n}\n.last-added-info .view-details {\n  float: right;\n  font-size: 11px;\n}\n.last-added-info .view-details a:hover {\n  text-decoration: underline;\n}\n.last-added-info .enquiry-time {\n  float: right;\n  font-size: 10px;\n  color: #28384a;\n  margin-top: 4px;\n}\n/*=======================Right bottom lite shadow box======================*/\n.box-shadow-lite {\n  box-shadow: 0px 1px 2px 0px #ccc;\n  padding: 10px 0 10px 10px;\n  border-top: 1px solid #e8e8e8;\n}\n.box-shadow-lite .field-wrapper {\n  padding-right: 40px;\n}\n.box-shadow-lite .field-wrapper .open-accor {\n  width: 17px;\n  font-size: 17px;\n  height: 17px;\n  line-height: 18px;\n  position: absolute;\n  right: 4px;\n  top: 19px;\n  z-index: 2;\n}\n.box-shadow-lite .field-wrapper:first-child {\n  margin-top: -10px;\n}\n.common-right-section {\n  margin-top: 30px;\n}\n.common-right-section h4 {\n  margin-bottom: 7px;\n  color: #28383A;\n  font-size: 16px;\n}\n.common-right-section h4 strong {\n  font-weight: 600;\n}\n.common-right-section .clear-detail {\n  margin-top: 10px;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n.follow-up-date-icon {\n  position: absolute;\n  position: absolute;\n  right: 7px;\n  top: 20px;\n  cursor: pointer;\n}\n.follow-up-date-icon img {\n  width: 21px;\n}\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 890px;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n/*=========================================registration popup form css==================*/\n.registration-fee-form {\n  overflow: hidden;\n}\n.print-output-section {\n  margin: 35px 0 25px;\n  border-top: 1px solid #deeaee;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #deeaee;\n  text-align: center;\n  font-size: 0;\n}\n.print-output-section li {\n  display: inline-block;\n  padding: 0 15px;\n  box-sizing: border-box;\n  width: 25%;\n  border-right: 1px solid #deeaee;\n  font-size: 15px;\n  cursor: pointer;\n  color: #929292;\n}\n.print-output-section li:last-child {\n  border-right: 0;\n}\n.print-output-section li:hover {\n  color: #0084f6;\n}\n.print-output-section li svg {\n  width: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.print-output-section li svg .cls-1 {\n  stroke: none;\n  stroke: #929292;\n}\n.print-output-section li.svg-icon .cls-1 {\n  stroke: none;\n}\n.print-output-section li.svg-icon .cls-2 {\n  stroke: #929292;\n}\n.print-output-section li.svg-icon:hover .cls-2 {\n  stroke: #0084f6;\n}\n.print-output-section li:first-child:hover svg .cls-1 {\n  stroke: #0084f6;\n}\n/*=======================================confirmation =========================*/\n.confirmation-popup-content {\n  line-height: normal;\n}\n.confirmation-popup-content > div {\n  margin-bottom: 10px;\n}\n.confirmation-popup-content > div:first-child {\n  margin-bottom: 20px;\n}\n.confirmation-popup-content > div a,\n.confirmation-popup-content > div p {\n  font-size: 16px;\n  line-height: 22px;\n}\n.confirmation-popup-content > div a {\n  font-weight: 600;\n}\n.confirmation-popup-content > div a:hover {\n  text-decoration: underline;\n}\n.confirmation-popup-content strong {\n  font-weight: 600;\n}\n.confirmation-popup-content .add-form-btns a {\n  margin-left: 20px;\n  font-size: 14px;\n}\n.popup-btn {\n  margin-top: 20px;\n}\n.popup-btn .btn {\n  font-size: 16px;\n  height: 40px;\n  color: #333;\n}\n.popup-btn .btn.redBtn {\n  color: #fff;\n  min-width: 160px;\n}\n.update-enquiry-form table th {\n  text-align: left;\n  padding: 10px;\n  font-size: 14px;\n}\n.update-enquiry-form table td {\n  text-align: left;\n  padding: 10px;\n  font-size: 14px;\n}\n.enquiry-update-history {\n  max-height: 110px;\n  overflow: auto;\n}\n.update-enquiry-form .row {\n  margin: 10px -15px 20px;\n}\n.confirmation-popup-content:after {\n  content: '';\n  height: 8px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #8bc34a;\n}\n.row.extraMargin {\n  margin: 10px -15px 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlLXRlbXBsYXRlL3RlbXBsYXRlLXBvcHVwL3RlbXBsYXRlLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLHVFQUFBO0FBV0E7O0VBS2dCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUN4QmpDO0FEa0JBO0VBU2dCLDBCQUEwQjtFQUMxQixlQUFlO0FDdkIvQjtBRGFBO0VBZ0I0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQ3pCbkQ7QURJQTtFQXVCZ0MsVUFBVTtBQ3ZCMUM7QURBQTtFQTBCZ0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdEJ0RDtBRFBBO0VBZ0NvQyxVQUFVO0FDckI5QztBRFhBO0VBb0NnQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7QUNyQmxEO0FEckJBO0VBOEM0QixjQWxEYjtFQW1EYSxlQUFlO0FDckIzQztBRDhCQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQzNCcEI7QUR1QkE7RUFNTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUN6Qi9CO0FEVUE7RUFpQlEsVUFBVTtFQUNWLGtCQUFrQjtBQ3ZCMUI7QURLQTtFQXNCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFn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O0FBeUYzQjtBQTVGQTtFQUtZLG1CQUFtQjtBQTJGL0I7QUFoR0E7O0VBU1ksZUFBZTtFQUNmLGlCQUFpQjtBQTRGN0I7QUF0R0E7RUFhWSxnQkFBZ0I7QUE2RjVCO0FBMUdBO0VBZ0JZLDBCQUEwQjtBQThGdEM7QUE5R0E7RUFvQlEsZ0JBQWdCO0FBOEZ4QjtBQWxIQTtFQXdCWSxpQkFBaUI7RUFDakIsZUFBZTtBQThGM0I7QUF6RkE7RUFDSSxnQkFBZ0I7QUE0RnBCO0FBN0ZBO0VBR1EsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBOEZuQjtBQW5HQTtFQU9ZLFdEeGtCRztFQ3lrQkgsZ0JBQWdCO0FBZ0c1QjtBQTNGQTtFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtBQThGbkI7QUEzRkE7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7QUE4Rm5CO0FBM0ZBO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWM7QUE4RmxCO0FBM0ZBO0VBRVEsdUJBQXVCO0FBNkYvQjtBQXpGQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLG1CQUFtQjtBQTRGdkI7QUF6RkE7RUFDSSx1QkFBdUI7QUE0RjNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlLXRlbXBsYXRlL3RlbXBsYXRlLXBvcHVwL3RlbXBsYXRlLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcblxuXG4udGFibGUtZGF0YS1vdmVyZmxvd3tcbiAgICB0YWJsZXtcbiAgICAgICAgdGJvZHl7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLm1pZGRsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYm94UGFkZGluZzE1IHtcbiAgICBib3gtc2l6aW5nOiAkYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5taWRkbGUtbGVmdCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBAZXh0ZW5kIC5ib3hQYWRkaW5nMTU7XG59XG5cbi5taWRkbGUtcmlnaHQge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm94LXNpemluZzogJGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIEBleHRlbmQgLmJveFBhZGRpbmcxNTtcbn1cblxuLmFjY29yZGlhbi1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTVweCAxMHB4IDA7XG4gIC5hY2NvcmRpYW4taGVhZGluZyB7XG4gICAgICBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6ICNkZGQ7XG4gICAgICAgICAgLm9wZW4tYWNjb3Ige1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICBmbG9hdDogJHB1bGwtUjtcbiAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xvc2UtYWNjb3Ige1xuICAgICAgICAgICAgICAvL2Rpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIGZsb2F0OiAkcHVsbC1SO1xuICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIC5hY2NvcmRpYW4tY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cbiAgLmFjY29yZGlhbiB7XG4gICAgICAmPmxpIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MC41JTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICB0b3A6IDM0cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgJi5kYXRhLWZpbGxlZCB7XG4gICAgICAgICAgICAgIC5jaXJjbGUtYWNjb3Ige1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxlZnRNZW51SG92ZXJCZztcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRsZWZ0TWVudUhvdmVyQmc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFjY29yZGlhbi1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAmLmRhdGEtZmlsbGVkIHtcbiAgICAgICAgICAgICAgLmFjY29yZGlhbi1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFjY29yZGlhbi1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlY2VlO1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNmYyZmU7XG4gICAgICAgICAgICAgICAgICAgICAgLm9wZW4tYWNjb3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLmNsb3NlLWFjY29yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJi5kYXRhLWZpbGxlZC5hY3RpdmUge1xuICAgICAgICAgICAgICAuYWNjb3JkaWFuLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFjY29yZGlhbi1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgICAub3Blbi1hY2NvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZS1hY2NvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG5cblxuLm1vcmUtZGV0YWlsIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2lyY2xlLWFjY29yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNjZWNlZDE7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uZm9ybS10eXBlMixcbi5mb3JtLXR5cGUxIHtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbn1cblxuLnBhZGRpbmdSMzAge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4uZm9ybS10eXBlMiB7XG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIH1cbiAgLmN1c3RvbVNlbGVjdFdyYXBwZXI6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IDM1cHg7XG4gIH1cbn1cblxuLnF1ZXN0aW9uSW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiA1cHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG4gIC5xSW5mb0ljb24ge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICNjY2MgaW5zZXQ7XG4gICAgICBjb2xvcjogIzg4ODtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGxpbmVhcjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGhlYWRlci1iZztcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggJGhlYWRlci1iZyBpbnNldDtcbiAgICAgICAgICBjb2xvcjogJGhlYWRlci1iZztcbiAgICAgIH1cbiAgfVxufVxuXG4uY3JlYXRlLWluc3RpdHV0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTk4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvdHRvbTogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zaGFkb3ctYm94IHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAjN2Q3ZDdkO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiAkaGVhZGVyLWJnO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHRCbHVlO1xufVxuXG4ubGFzdC1hZGRlZC1pbmZvIHtcbiAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgc3Ryb25nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMyODM4NGE7XG4gICAgfVxuICAgIC52aWV3LWRldGFpbHMge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICAvLyBjb2xvcjogIzc3Nzc3NztcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5lbnF1aXJ5LXRpbWUge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6ICMyODM4NGE7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG59XG5cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PVJpZ2h0IGJvdHRvbSBsaXRlIHNoYWRvdyBib3g9PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLmJveC1zaGFkb3ctbGl0ZSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4ICNjY2M7XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgIC5vcGVuLWFjY29yIHtcbiAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogNHB4O1xuICAgICAgICAgICAgdG9wOiAxOXB4O1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgfVxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29tbW9uLXJpZ2h0LXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaDQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICAgIGNvbG9yOiAjMjgzODNBO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jbGVhci1kZXRhaWwge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuXG4uZm9sbG93LXVwLWRhdGUtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogN3B4O1xuICAgIHRvcDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgfVxufVxuXG5cblxuLyogcG9wVXAgU2NzcyAqL1xuXG4ucG9wdXBXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjUpO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICAvLyBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC5wb3B1cCB7XG4gICAgICAgIG1heC13aWR0aDogODkwcHg7XG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiA1JTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG59XG5cbi5wb3B1cC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xuICAgIHRyYW5zaXRpb246IHVuc2V0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbi5jbG9zZVBvcHVwIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJi50b3BMZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgfVxuICAgICYuYm90dG9tTGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZmFkZUluIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4ucG9wdXBXcmFwcGVyTW9iIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAvLyBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC5jbG9zZVBvcHVwIHtcbiAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICB0b3A6IC0yN3B4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5wb3B1cC1tb2Ige1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNzAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvdHRvbTogLTcwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbn1cblxuLnBvcHVwV3JhcHBlck1vYi5zaG93UG9wdXBNb2Ige1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIC5wb3B1cC1tb2Ige1xuICAgIGJvdHRvbTogMDtcbn1cblxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09cmVnaXN0cmF0aW9uIHBvcHVwIGZvcm0gY3NzPT09PT09PT09PT09PT09PT09Ki9cblxuLnJlZ2lzdHJhdGlvbi1mZWUtZm9ybSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByaW50LW91dHB1dC1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDM1cHggMCAyNXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDA7XG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjOTI5MjkyO1xuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgICAgIHN0cm9rZTogbm9uZTtcbiAgICAgICAgICAgICAgICBzdHJva2U6ICM5MjkyOTI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5zdmctaWNvbiB7XG4gICAgICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgICAgIHN0cm9rZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jbHMtMiB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAjOTI5MjkyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgLmNscy0yIHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6Zmlyc3QtY2hpbGQ6aG92ZXIge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1jb25maXJtYXRpb24gPT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5jb25maXJtYXRpb24tcG9wdXAtY29udGVudCB7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAmPmRpdiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBhLFxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5hZGQtZm9ybS1idG5zIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBvcHVwLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAuYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAmLnJlZEJ0biB7XG4gICAgICAgICAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnVwZGF0ZS1lbnF1aXJ5LWZvcm0gdGFibGUgdGgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51cGRhdGUtZW5xdWlyeS1mb3JtIHRhYmxlIHRkIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZW5xdWlyeS11cGRhdGUtaGlzdG9yeSB7XG4gICAgbWF4LWhlaWdodDogMTEwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi51cGRhdGUtZW5xdWlyeS1mb3JtIHtcbiAgICAucm93IHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IC0xNXB4IDIwcHg7XG4gICAgfVxufVxuXG4uY29uZmlybWF0aW9uLXBvcHVwLWNvbnRlbnQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjOGJjMzRhO1xufVxuXG4ucm93LmV4dHJhTWFyZ2luIHtcbiAgICBtYXJnaW46IDEwcHggLTE1cHggMjBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-template/template-popup/template-popup.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-template/template-popup/template-popup.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: TemplatePopUpComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTemplateTemplatePopupTemplatePopupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatePopUpComponent", function () {
        return TemplatePopUpComponent;
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

      var TemplatePopUpComponent =
      /** @class */
      function () {
        var TemplatePopUpComponent = function TemplatePopUpComponent() {
          _classCallCheck(this, TemplatePopUpComponent);
        };

        TemplatePopUpComponent.ctorParameters = function () {
          return [];
        };

        TemplatePopUpComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'template-popup',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./template-popup.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-template/template-popup/template-popup.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./template-popup.component.scss */
          "./src/app/components/fee-module/data-setup/fee-template/template-popup/template-popup.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], TemplatePopUpComponent);
        return TemplatePopUpComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-fee-module-data-setup-fee-template-fee-template-module-es5.js.map